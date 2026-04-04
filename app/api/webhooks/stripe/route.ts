import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '../../../../lib/stripe'
import { prisma } from '../../../../lib/prisma'
import { Resend } from 'resend'
import {
    ownerPaymentEmail,
    userPaymentConfirmationEmail,
} from '../../../../lib/email-templates'
import Stripe from 'stripe'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = 'zac.pini.777@gmail.com'
const FROM_EMAIL = 'Fullstack Forge <onboarding@resend.dev>'

/**
 * Send payment notification emails to the owner and customer.
 * Runs fire-and-forget so webhook response is not delayed.
 */
async function sendPaymentNotifications(metadata: Record<string, string>, amountStr: string) {
    const serviceName = metadata.serviceName || 'Unknown service'
    const serviceKey = metadata.serviceKey || ''
    const customerName = metadata.customerName || ''
    const customerEmail = metadata.customerEmail || ''
    const billingType = metadata.billingType || 'one-time'
    const depositOnly = metadata.depositOnly === 'true'

    if (!customerEmail) return

    try {
        // Notify owner
        await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            subject: `💰 Payment — ${customerName} (${serviceName})`,
            html: ownerPaymentEmail({
                serviceName,
                serviceKey,
                customerName,
                customerEmail,
                amount: amountStr,
                billingType,
                businessName: metadata.businessName,
                website: metadata.website,
                phone: metadata.phone,
                goals: metadata.goals,
                notes: metadata.notes,
                depositOnly,
            }),
        })

        // Confirm to customer
        await resend.emails.send({
            from: FROM_EMAIL,
            to: customerEmail,
            subject: `Payment confirmed — ${serviceName} | Fullstack Forge`,
            html: userPaymentConfirmationEmail({
                name: customerName,
                serviceName,
                depositOnly,
                billingType,
            }),
        })
    } catch (err) {
        console.error('Payment notification email failed:', err)
    }
}

export async function POST(request: Request) {
    const body = await request.text()
    const headersList = headers()
    const signature = headersList.get('stripe-signature')

    if (!signature) {
        return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
    }

    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        )
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error'
        return NextResponse.json(
            { error: `Webhook signature verification failed: ${message}` },
            { status: 400 }
        )
    }

    try {
        switch (event.type) {
            // ── One-time payment completed ──────────────────────────
            case 'checkout.session.completed': {
                const session = event.data.object as Stripe.Checkout.Session
                const metadata = session.metadata || {}
                const amountTotal = session.amount_total
                    ? `$${(session.amount_total / 100).toFixed(2)} NZD`
                    : ''

                if (session.mode === 'payment') {
                    // One-time service payment — send notifications
                    sendPaymentNotifications(metadata, amountTotal)
                }

                if (session.mode === 'subscription' && session.customer && session.subscription) {
                    // Subscription checkout — sync status + notify
                    const subscription = await stripe.subscriptions.retrieve(
                        session.subscription as string
                    )
                    try {
                        await prisma.user.update({
                            where: { stripeCustomerId: session.customer as string },
                            data: {
                                stripePriceId: subscription.items.data[0]?.price.id ?? null,
                                stripeStatus: subscription.status,
                            },
                        })
                    } catch {
                        // Customer may not have a user account
                    }
                    sendPaymentNotifications(metadata, amountTotal)
                }
                break
            }

            // ── Subscription lifecycle ──────────────────────────────
            case 'customer.subscription.created':
            case 'customer.subscription.updated': {
                const subscription = event.data.object as Stripe.Subscription
                try {
                    await prisma.user.update({
                        where: { stripeCustomerId: subscription.customer as string },
                        data: {
                            stripePriceId: subscription.items.data[0]?.price.id ?? null,
                            stripeStatus: subscription.status,
                        },
                    })
                } catch {
                    // Customer may not have a user account
                }
                break
            }

            case 'customer.subscription.deleted': {
                const subscription = event.data.object as Stripe.Subscription
                try {
                    await prisma.user.update({
                        where: { stripeCustomerId: subscription.customer as string },
                        data: {
                            stripePriceId: null,
                            stripeStatus: subscription.status,
                        },
                    })
                } catch {
                    // Customer may not have a user account
                }
                break
            }

            case 'invoice.payment_failed': {
                const invoice = event.data.object as Stripe.Invoice
                if (invoice.customer) {
                    try {
                        await prisma.user.update({
                            where: { stripeCustomerId: invoice.customer as string },
                            data: { stripeStatus: 'past_due' },
                        })
                    } catch {
                        // Customer may not have a user account
                    }
                }
                break
            }
        }
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error'
        return NextResponse.json(
            { error: `Webhook handler failed: ${message}` },
            { status: 500 }
        )
    }

    return NextResponse.json({ received: true })
}
