import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import { SERVICES, type ServiceKey } from '../../../lib/pricing'

export const metadata: Metadata = {
    title: 'Payment Cancelled — Fullstack Forge',
    description: 'Your payment was not completed. No charges have been made.',
    robots: { index: false, follow: false },
}

export default function CheckoutCancelPage({
    searchParams,
}: {
    searchParams: { service?: string }
}) {
    const serviceKey = searchParams.service || ''
    const service = serviceKey ? SERVICES[serviceKey as ServiceKey] : null

    return (
        <>
            <Nav />
            <main className="min-h-screen bg-gray-50 py-20 px-4">
                <div className="max-w-xl mx-auto text-center">
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12">
                        <div className="text-5xl mb-6">✕</div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Payment Cancelled
                        </h1>
                        <p className="text-muted text-lg mb-8">
                            No worries — no charges were made.
                            {service && (
                                <> If you&apos;d like to continue with <strong>{service.name}</strong>, you can try again below.</>
                            )}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/pricing"
                                className="btn bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-xl text-center"
                            >
                                Back to Pricing
                            </Link>
                            <Link
                                href="/contact"
                                className="btn bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-xl text-center"
                            >
                                Need Help? Contact Us
                            </Link>
                        </div>

                        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 text-sm text-blue-800">
                            Having trouble? Reply to any Fullstack Forge email or use our <Link href="/contact" className="text-primary font-semibold hover:underline">contact form</Link> and we&apos;ll sort it out.
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
