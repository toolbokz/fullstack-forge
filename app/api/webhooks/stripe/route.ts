import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '../../../../lib/stripe'
import { prisma } from '../../../../lib/prisma'
import Stripe from 'stripe'

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
            case 'checkout.session.completed': {
                const session = event.data.object as Stripe.Checkout.Session
                if (session.customer && session.subscription) {
                    const subscription = await stripe.subscriptions.retrieve(
                        session.subscription as string
                    )
                    await prisma.user.update({
                        where: { stripeCustomerId: session.customer as string },
                        data: {
                            stripePriceId: subscription.items.data[0]?.price.id ?? null,
                            stripeStatus: subscription.status,
                        },
                    })
                }
                break
            }

            case 'customer.subscription.created':
            case 'customer.subscription.updated': {
                const subscription = event.data.object as Stripe.Subscription
                await prisma.user.update({
                    where: { stripeCustomerId: subscription.customer as string },
                    data: {
                        stripePriceId: subscription.items.data[0]?.price.id ?? null,
                        stripeStatus: subscription.status,
                    },
                })
                break
            }

            case 'customer.subscription.deleted': {
                const subscription = event.data.object as Stripe.Subscription
                await prisma.user.update({
                    where: { stripeCustomerId: subscription.customer as string },
                    data: {
                        stripePriceId: null,
                        stripeStatus: subscription.status,
                    },
                })
                break
            }

            case 'invoice.payment_failed': {
                const invoice = event.data.object as Stripe.Invoice
                if (invoice.customer) {
                    await prisma.user.update({
                        where: { stripeCustomerId: invoice.customer as string },
                        data: { stripeStatus: 'past_due' },
                    })
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
