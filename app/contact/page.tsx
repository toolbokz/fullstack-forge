import Nav from '../../components/Nav'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'
import PageVideoHero from '../../components/PageVideoHero'
import { fetchPexelsVideo } from '../../lib/pexels'
import { breadcrumbSchema, localBusinessSchema } from '../../lib/schema'

export const metadata = {
    title: 'Contact Us — Get a Free Quote | Fullstack Forge',
    description:
        'Get in touch with Fullstack Forge. We build high-converting websites for NZ tradies and small businesses. Free consultation, no obligation — reply within 24 hours.',
    alternates: { canonical: 'https://fullstack-forge.netlify.app/contact' },
    openGraph: {
        title: 'Contact Fullstack Forge — Free Quote for NZ Tradies',
        description:
            'Tell us about your business and we\'ll send you a clear plan to get more customers from your website. No jargon, no hard sell.',
        url: 'https://fullstack-forge.netlify.app/contact',
        siteName: 'Fullstack Forge',
        type: 'website',
        images: [{ url: '/assets/fallback-image.png', width: 2560, height: 1440, alt: 'Contact Fullstack Forge' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Fullstack Forge — Free Quote for NZ Tradies',
        description: 'Get in touch for a free consultation. We build websites that get NZ tradies more jobs.',
        images: ['/assets/fallback-image.png'],
    },
}

const trustPoints = [
    { icon: '⚡', title: 'Reply Within 24 Hours', desc: 'No waiting around — we get back to you fast with a clear action plan.' },
    { icon: '🎯', title: 'Free Consultation', desc: 'No obligation, no hard sell. Just a straight-up conversation about your business.' },
    { icon: '🔒', title: 'No Spam, Ever', desc: 'Your details stay private. We only use them to help your business grow.' },
    { icon: '🏆', title: '100% NZ Based', desc: 'Real humans in New Zealand — not an overseas call centre or chatbot.' },
]

const faqs = [
    { q: 'How much does a website cost?', a: 'Website builds start from $1,000 for a professional site. Custom projects are quoted after a free consultation so you know exactly what you\'re paying for.' },
    { q: 'How long does it take to build?', a: 'Most sites launch within 1–2 weeks. Larger custom projects typically take 3–4 weeks depending on scope.' },
    { q: 'Do I need to provide content?', a: 'Nope. We handle everything — copy, images, design, and development. You just tell us about your business.' },
    { q: 'What if I already have a website?', a: 'No problem. We can redesign, rebuild, or optimise your existing site to convert more visitors into customers.' },
]

export default async function ContactPage() {
    const heroVideo = await fetchPexelsVideo('business customer support contact office')

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        localBusinessSchema(),
                        breadcrumbSchema([
                            { name: 'Home', url: 'https://fullstack-forge.netlify.app/' },
                            { name: 'Contact', url: 'https://fullstack-forge.netlify.app/contact' },
                        ]),
                    ]),
                }}
            />
            <Nav />
            <main>
                {/* Hero */}
                <PageVideoHero videoUrl={heroVideo?.url}>
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">
                            Let&apos;s Talk
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-5 text-white">
                            Ready to Get More Customers From Your Website?
                        </h1>
                        <p className="text-gray-200 text-lg max-w-2xl mx-auto mb-6">
                            Fill in the form below and we&apos;ll get back to you within 24 hours with a clear, no-obligation plan to grow your business online.
                        </p>
                        <a
                            href="#contact"
                            className="btn text-base font-bold px-8 py-3.5 rounded-xl inline-block"
                        >
                            Get in Touch
                        </a>
                    </div>
                </PageVideoHero>

                {/* Trust Signals */}
                <section className="pt-12 pb-12">
                    <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {trustPoints.map((p) => (
                            <div key={p.title} className="text-center">
                                <div className="text-3xl mb-2">{p.icon}</div>
                                <h3 className="font-bold text-sm text-gray-900 mb-1">{p.title}</h3>
                                <p className="text-muted text-xs leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Form */}
                <Contact />

                {/* Social Proof Bar */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                            Trusted by NZ Tradies &amp; Small Businesses
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 text-muted text-sm font-medium">
                            <span>✓ Builders</span>
                            <span>✓ Plumbers</span>
                            <span>✓ Electricians</span>
                            <span>✓ Roofers</span>
                            <span>✓ Cleaners</span>
                            <span>✓ Landscapers</span>
                            <span>✓ HVAC / Gas</span>
                            <span>✓ Local Services</span>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16">
                    <div className="max-w-2xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">
                            Common Questions
                        </h2>
                        <div className="flex flex-col gap-6">
                            {faqs.map((faq) => (
                                <div key={faq.q} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
                                    <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                                    <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-16 bg-gradient-to-b from-white to-gray-50">
                    <div className="max-w-2xl mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                            Stop Losing Customers to Your Competitors
                        </h2>
                        <p className="text-muted mb-8 max-w-lg mx-auto">
                            Every day without a high-converting website is money left on the table. Let&apos;s fix that — starting today.
                        </p>
                        <a
                            href="#contact"
                            className="btn text-base font-bold px-10 py-4 rounded-xl inline-block"
                        >
                            Get My Free Consultation
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
