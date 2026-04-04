import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import { stripe } from '../../../lib/stripe'
import { SERVICES, type ServiceKey } from '../../../lib/pricing'

export const metadata: Metadata = {
    title: 'Payment Successful — Fullstack Forge',
    description: 'Your payment has been received. We\'ll be in touch within 24 hours.',
    robots: { index: false, follow: false },
}

async function getSessionDetails(sessionId: string) {
    if (!sessionId) return null
    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId)
        return {
            customerName: (session.metadata?.customerName) || (session.customer_details?.name) || '',
            serviceName: session.metadata?.serviceName || '',
            serviceKey: session.metadata?.serviceKey || '',
            depositOnly: session.metadata?.depositOnly === 'true',
            billingType: session.metadata?.billingType || 'one-time',
            amount: session.amount_total ? `$${(session.amount_total / 100).toFixed(2)}` : '',
        }
    } catch {
        return null
    }
}

export default async function CheckoutSuccessPage({
    searchParams,
}: {
    searchParams: { session_id?: string }
}) {
    const details = await getSessionDetails(searchParams.session_id || '')
    const service = details?.serviceKey
        ? SERVICES[details.serviceKey as ServiceKey]
        : null
    const firstName = details?.customerName?.split(' ')[0] || ''

    return (
        <>
            <Nav />
            <main className="min-h-screen bg-gray-50 py-20 px-4">
                <div className="max-w-xl mx-auto text-center">
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12">
                        <div className="text-5xl mb-6">✓</div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Payment Successful{firstName ? `, ${firstName}` : ''}!
                        </h1>

                        {details?.serviceName && (
                            <p className="text-muted text-lg mb-2">
                                <strong>{details.serviceName}</strong>
                                {details.amount && <span className="text-gray-400"> — {details.amount} NZD</span>}
                            </p>
                        )}

                        {details?.depositOnly && (
                            <p className="text-sm text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-4 py-2 mb-6 inline-block">
                                Deposit received — the remaining balance will be invoiced on project completion.
                            </p>
                        )}

                        <div className="bg-gray-50 rounded-xl p-6 text-left mb-8 mt-6">
                            <h2 className="font-semibold text-gray-900 mb-4">What happens next:</h2>
                            <ol className="space-y-3 text-sm text-muted">
                                <li className="flex gap-3">
                                    <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</span>
                                    <span>We review your project brief <strong>within 24 hours</strong></span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</span>
                                    <span>You receive a detailed plan and timeline via email</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">3</span>
                                    <span>
                                        {details?.billingType === 'monthly'
                                            ? 'We begin work immediately and provide monthly progress reports'
                                            : 'Work begins and we keep you updated throughout'}
                                    </span>
                                </li>
                            </ol>
                        </div>

                        <p className="text-muted text-sm mb-8">
                            A confirmation email has been sent to you. Check your inbox (and spam folder, just in case).
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/"
                                className="btn bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-xl text-center"
                            >
                                Back to Home
                            </Link>
                            <Link
                                href="/contact"
                                className="btn bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-xl text-center"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
