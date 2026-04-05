import { Metadata } from 'next'
import Nav from '../../components/Nav'
import Hero from '../../components/Hero'
import Pricing from '../../components/Pricing'
import Footer from '../../components/Footer'
import { SITE_URL } from '../../lib/schema'

export const metadata: Metadata = {
    title: 'Pricing — Fullstack Forge',
    description: 'Transparent website, SEO, and AI automation pricing for NZ small businesses and tradies.',
    alternates: { canonical: `${SITE_URL}/pricing` },
    openGraph: {
        title: 'Pricing — Fullstack Forge',
        description: 'Transparent website, SEO, and AI automation pricing for NZ small businesses and tradies.',
        url: `${SITE_URL}/pricing`,
        type: 'website',
        images: [{ url: '/assets/hero.png', width: 2560, height: 1440, alt: 'Pricing — Fullstack Forge' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Pricing — Fullstack Forge',
        description: 'Transparent website, SEO, and AI automation pricing for NZ small businesses and tradies.',
        images: ['/assets/hero.png'],
    },
}

export default function PricingPage() {
    return (
        <>
            <Nav />
            <main>
                <section id="hero" className="bg-gray-50">
                    <Hero />
                </section>

                <section className="py-20 bg-white w-full">
                    <div className="w-full mx-auto px-4 sm:px-6">
                        <Pricing />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
