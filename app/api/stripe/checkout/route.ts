import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../lib/auth'
import { stripe } from '../../../../lib/stripe'
import { prisma } from '../../../../lib/prisma'

export async function POST(request: Request) {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { priceId } = body

    if (!priceId) {
        return NextResponse.json({ error: 'Price ID is required' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
        where: { email: session.user.email },
    })

    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Create or retrieve Stripe customer
    let customerId = user.stripeCustomerId

    if (!customerId) {
        const customer = await stripe.customers.create({
            email: user.email!,
            name: user.name || undefined,
            metadata: { userId: user.id },
        })
        customerId = customer.id

        await prisma.user.update({
            where: { id: user.id },
            data: { stripeCustomerId: customerId },
        })
    }

    // Create checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
        customer: customerId,
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [{ price: priceId, quantity: 1 }],
        success_url: `${process.env.NEXTAUTH_URL}dashboard?payment=success`,
        cancel_url: `${process.env.NEXTAUTH_URL}dashboard?payment=cancelled`,
    })

    return NextResponse.json({ url: checkoutSession.url })
}
