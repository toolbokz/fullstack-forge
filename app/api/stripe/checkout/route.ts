import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { stripe } from '../../../../lib/stripe'
import { prisma } from '../../../../lib/prisma'
import { SERVICES, type ServiceKey } from '../../../../lib/pricing'

/**
 * Service checkout — creates a Stripe Checkout session for direct-purchase
 * or subscription services. No auth required: the customer provides their
 * details via the intake form and we create/find a Stripe customer inline.
 *
 * Request body:
 *  - serviceKey: ServiceKey
 *  - name: string
 *  - email: string
 *  - phone?: string
 *  - businessName?: string
 *  - website?: string
 *  - goals?: string
 *  - notes?: string
 */
export async function POST(request: Request) {
    try {
        const body = await request.json()
        const {
            serviceKey,
            name,
            email,
            phone,
            businessName,
            website,
            goals,
            notes,
        } = body as {
            serviceKey: string
            name: string
            email: string
            phone?: string
            businessName?: string
            website?: string
            goals?: string
            notes?: string
        }

        // --- Validate required fields ---
        if (!serviceKey || !name || !email) {
            return NextResponse.json(
                { error: 'serviceKey, name, and email are required' },
                { status: 400 }
            )
        }

        const service = SERVICES[serviceKey as ServiceKey]
        if (!service) {
            return NextResponse.json(
                { error: 'Invalid service key' },
                { status: 400 }
            )
        }

        // Custom-scoped services cannot go through direct checkout
        if (service.checkoutMode === 'custom') {
            return NextResponse.json(
                { error: 'This service requires a custom quote. Please use the enquiry form.' },
                { status: 400 }
            )
        }

        // Free services (e.g. website audit) do not use checkout
        if (service.checkoutMode === 'free') {
            return NextResponse.json(
                { error: 'This is a free service. Please use the request form instead.' },
                { status: 400 }
            )
        }

        // --- Resolve Stripe Price ID ---
        const priceEnv = service.checkoutMode === 'subscription'
            ? service.stripeSubscriptionPriceEnv
            : service.stripePriceEnv

        const priceId = priceEnv ? process.env[priceEnv] : undefined

        if (!priceId) {
            return NextResponse.json(
                { error: 'Payment is not yet configured for this service. Please contact us directly.' },
                { status: 422 }
            )
        }

        // --- Create or retrieve Stripe customer ---
        const existingCustomers = await stripe.customers.list({
            email,
            limit: 1,
        })

        let customerId: string
        if (existingCustomers.data.length > 0) {
            customerId = existingCustomers.data[0].id
        } else {
            const customer = await stripe.customers.create({
                email,
                name,
                phone: phone || undefined,
                metadata: {
                    businessName: businessName || '',
                    website: website || '',
                    source: 'service-checkout',
                },
            })
            customerId = customer.id
        }

        // --- Try to link Stripe customer to existing user ---
        try {
            const user = await prisma.user.findUnique({ where: { email } })
            if (user && !user.stripeCustomerId) {
                await prisma.user.update({
                    where: { email },
                    data: { stripeCustomerId: customerId },
                })
            }
        } catch {
            // Non-blocking — customer may not have an account
        }

        // --- Save intake as a lead ---
        try {
            await prisma.lead.create({
                data: {
                    email,
                    name: name || null,
                    businessType: businessName || null,
                    website: website || null,
                    message: [goals, notes].filter(Boolean).join('\n\n') || null,
                    source: `checkout-${serviceKey}`,
                },
            })
        } catch {
            // Non-blocking
        }

        // --- Build metadata for Stripe session ---
        const metadata: Record<string, string> = {
            serviceKey,
            serviceName: service.name,
            customerName: name,
            customerEmail: email,
            billingType: service.checkoutMode === 'subscription' ? 'monthly' : 'one-time',
        }
        if (businessName) metadata.businessName = businessName
        if (website) metadata.website = website
        if (phone) metadata.phone = phone
        if (service.depositOnly) metadata.depositOnly = 'true'
        // Truncate goals/notes to fit Stripe 500-char metadata limit
        if (goals) metadata.goals = goals.slice(0, 480)
        if (notes) metadata.notes = notes.slice(0, 480)

        const baseUrl = process.env.NEXTAUTH_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://fullstack-forge.netlify.app'

        // --- Create checkout session ---
        const sessionParams: Stripe.Checkout.SessionCreateParams = {
            customer: customerId,
            mode: service.checkoutMode === 'subscription' ? 'subscription' : 'payment',
            payment_method_types: ['card'],
            line_items: [{ price: priceId, quantity: 1 }],
            success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${baseUrl}/checkout/cancel?service=${serviceKey}`,
            metadata,
            customer_update: { name: 'auto' },
        }

        // For subscriptions, also attach metadata to the subscription itself
        if (service.checkoutMode === 'subscription') {
            sessionParams.subscription_data = { metadata }
        }

        // For one-time payments, attach metadata to the payment intent
        if (service.checkoutMode === 'direct') {
            sessionParams.payment_intent_data = { metadata }
        }

        const checkoutSession = await stripe.checkout.sessions.create(sessionParams)

        return NextResponse.json({ url: checkoutSession.url })
    } catch (err) {
        console.error('Stripe checkout error:', err)
        const message = err instanceof Error ? err.message : 'Unknown error'
        return NextResponse.json(
            { error: `Checkout failed: ${message}` },
            { status: 500 }
        )
    }
}
