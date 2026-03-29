import Link from 'next/link'
import { Metadata } from 'next'
import { serviceColumns, ServiceIcon } from '../../lib/services-data'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import LeadLossCalculator from '../../components/LeadLossCalculator'
import CTASection from '../../components/CTASection'

export const metadata: Metadata = {
    title: 'Digital Services for NZ Tradies & Small Businesses — Fullstack Forge',
    description: 'Web design, SEO, AI automation, ad campaigns, and more. We help NZ tradies and local businesses get found online and generate more leads.',
    openGraph: {
        title: 'Services — Fullstack Forge',
        description: 'Web design, SEO, AI automation, ad campaigns, and more for NZ tradies and local businesses.',
        url: 'https://fullstack-forge.netlify.app/services',
    },
}

export default function ServicesPage() {
    return (
        <>
            <Nav />
            <div>
                {/* Hero */}
                <section className="text-white py-20 md:py-28" style={{ background: 'linear-gradient(135deg, #0b1220 0%, #0d1f3c 50%, #0b2e6e 100%)' }}>
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Our Services</p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                            Everything You Need to Get More Jobs Online
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            From a website that actually generates leads, to SEO that puts you on the first page of Google, to AI that follows up while you sleep — we handle it all.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#services-grid" className="btn btn-lg btn-cta-pulse">Explore Services</a>
                            <a href="#lead-calculator" className="btn btn-outline-light btn-lg">See What You&apos;re Losing</a>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-16 md:py-20" id="services-grid">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">What We Do</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            Each service is built around one goal: getting you more leads and more revenue.
                        </p>
                        <div className="space-y-14">
                            {serviceColumns.map((column) => (
                                <div key={column.title}>
                                    <h3 className="text-lg font-bold mb-5 text-primary uppercase tracking-wider text-sm">{column.title}</h3>
                                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                        {column.services.map((service) => (
                                            <Link
                                                key={service.slug}
                                                href={`/services/${service.slug}`}
                                                className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary/40 transition-all"
                                            >
                                                <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-gray-100 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                                    <ServiceIcon icon={service.icon} size={22} />
                                                </div>
                                                <h4 className="font-bold text-base mb-2">{service.name}</h4>
                                                <p className="text-sm text-muted leading-relaxed mb-3">{service.description}</p>
                                                <span className="text-primary text-sm font-semibold group-hover:underline">Learn more →</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section className="py-20 text-white" style={{ background: 'linear-gradient(135deg, #0b1220 0%, #0d1f3c 50%, #0b2e6e 100%)' }}>
                    <div className="max-w-5xl mx-auto px-4 text-center">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">How It Works</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">From Invisible to Fully Booked — In 3 Steps</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-14">
                            No tech talk. No waiting months. Just a simple process that works.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[
                                { number: '01', icon: '🔍', title: 'We Audit Your Business', desc: 'We review your website, Google presence, and competition. You get a clear picture of what\'s broken and what\'s costing you jobs.' },
                                { number: '02', icon: '🔧', title: 'We Build & Optimise', desc: 'We design, develop, and optimise your website and online presence. Everything is done for you — SEO, speed, mobile, lead capture.' },
                                { number: '03', icon: '📞', title: 'You Get More Jobs', desc: 'Your phone rings. Enquiries come through your website. You pick the jobs you want. We keep everything running in the background.' },
                            ].map((step) => (
                                <div key={step.number} className="text-center">
                                    <div className="text-5xl mb-4">{step.icon}</div>
                                    <span className="text-primary text-sm font-bold tracking-widest">STEP {step.number}</span>
                                    <h3 className="text-xl font-bold mt-2 mb-3">{step.title}</h3>
                                    <p className="text-gray-400">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Lead Loss Calculator */}
                <section className="py-20" id="lead-calculator">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">How Much Revenue Are You Losing?</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-10">
                            Most NZ tradies lose thousands every month from a website that doesn&apos;t convert. Use our calculator to see what it&apos;s costing you.
                        </p>
                        <LeadLossCalculator />
                    </div>
                </section>

                {/* CTA */}
                <CTASection
                    headline="Stop Losing Jobs to Your Competitors"
                    body="Every day without a high-performing website is another day of lost revenue. Let's fix that — start with a free audit."
                    primaryCta={{ text: 'Get My Free Audit', href: '/#audit' }}
                    secondaryCta={{ text: 'Talk to Us Today', href: '/#contact' }}
                />
            </div>
            <Footer />
        </>
    )
}
