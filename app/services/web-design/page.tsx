import { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import FAQSection from '../../../components/FAQSection'
import ProofSection from '../../../components/ProofSection'
import LeadCaptureForm from '../../../components/LeadCaptureForm'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Web Design NZ — Websites That Generate Leads in 7 Days | Fullstack Forge',
    description: 'Professional web design for NZ tradies and small businesses. Get a high-converting website built in 7 days that generates leads on autopilot. No lock-in contracts.',
    keywords: ['web design nz', 'website for tradies', 'web development nz', 'small business website nz', 'website design christchurch'],
    openGraph: {
        title: 'Web Design NZ — Websites That Generate Leads | Fullstack Forge',
        description: 'Professional web design for NZ tradies and small businesses. Built in 7 days. Generates leads on autopilot.',
        url: 'https://fullstack-forge.netlify.app/services/web-design',
    },
}

export default function WebDesignPage() {
    return (
        <>
            <Nav />
            <div>
                {/* Hero */}
                <section className="bg-dark text-white py-20 md:py-28">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Web Design & Development</p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            A Website That Gets You Jobs — Built in 7 Days
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            Stop losing customers to competitors with better websites. We build fast, mobile-friendly sites designed to turn visitors into paying customers — not just look pretty.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#lead-form" className="btn btn-lg btn-cta-pulse">Get a Free Website Audit</a>
                            <Link href="/tools/lead-loss-calculator" className="btn btn-outline-light btn-lg">See What You&apos;re Losing</Link>
                        </div>
                    </div>
                </section>

                {/* Problem */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Your Website Is Costing You Jobs</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            If your website is slow, hard to navigate, or doesn&apos;t show up on Google — you&apos;re handing jobs to your competitors every single day.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: '🐌', title: 'Slow Load Times', desc: '53% of mobile visitors leave if your site takes more than 3 seconds to load. Every slow second costs you leads.' },
                                { icon: '📱', title: 'Not Mobile-Friendly', desc: 'Over 60% of your potential customers are searching on their phones. If your site doesn\'t work on mobile, they\'re gone.' },
                                { icon: '👻', title: 'Invisible on Google', desc: 'If you\'re not on page 1 of Google, you might as well not exist. 75% of searchers never scroll past the first page.' },
                                { icon: '🚫', title: 'No Lead Capture', desc: 'A website without clear calls-to-action and contact forms is just an online brochure. It looks nice but doesn\'t generate business.' },
                            ].map((pain) => (
                                <div key={pain.title} className="bg-red-50 border border-red-100 rounded-xl p-6">
                                    <div className="text-3xl mb-3">{pain.icon}</div>
                                    <h3 className="text-lg font-bold mb-2">{pain.title}</h3>
                                    <p className="text-muted text-sm">{pain.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Solution */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">We Build Websites That Work as Hard as You Do</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            Every website we build is engineered for one thing: getting you more enquiries, more bookings, and more revenue.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: '⚡', title: 'Lightning Fast', desc: 'Sub-2-second load times. Built on modern tech stack for maximum speed and performance.' },
                                { icon: '📱', title: 'Mobile-First Design', desc: 'Designed for phones first, because that\'s where your customers are searching.' },
                                { icon: '🎯', title: 'Conversion-Focused', desc: 'Strategic CTAs, lead forms, and click-to-call buttons placed where they drive action.' },
                                { icon: '🔍', title: 'SEO Built-In', desc: 'On-page SEO, local SEO schema, and Google Business Profile optimisation included.' },
                                { icon: '🔒', title: 'Secure & Reliable', desc: 'SSL certificates, automated backups, and enterprise-grade hosting included.' },
                                { icon: '📊', title: 'Analytics & Tracking', desc: 'Know exactly where your leads come from with built-in conversion tracking.' },
                            ].map((feature) => (
                                <div key={feature.title} className="bg-white rounded-xl p-6 border border-gray-100">
                                    <div className="text-3xl mb-3">{feature.icon}</div>
                                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                    <p className="text-muted text-sm">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What's Included */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">What&apos;s Included in Every Website</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            No hidden fees. No surprise charges. Everything you need to start generating leads online.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                'Custom design tailored to your brand and industry',
                                'Up to 8 fully designed pages',
                                'Mobile-responsive layout that works on all devices',
                                'On-page SEO for your target keywords',
                                'Google Business Profile setup and optimisation',
                                'Contact forms with email notifications',
                                'Click-to-call buttons for mobile users',
                                'Fast hosting on enterprise-grade infrastructure',
                                'SSL security certificate included',
                                'Google Analytics and conversion tracking setup',
                                'Social media integration',
                                'Ongoing support and training',
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3 py-3 px-4 bg-gray-50 rounded-lg">
                                    <span className="text-primary text-lg flex-shrink-0">✓</span>
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Results / Proof */}
                <ProofSection
                    heading="Real Results for NZ Businesses"
                    subheading="Our websites don't just look good — they generate measurable results."
                    dark={true}
                    stats={[
                        { value: '7 Days', label: 'Average build time' },
                        { value: '3x', label: 'More leads on average' },
                        { value: '<2s', label: 'Page load speed' },
                        { value: '95+', label: 'Google PageSpeed score' },
                    ]}
                />

                {/* Process */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Our 7-Day Build Process</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            We don&apos;t waste time. Here&apos;s exactly how we get your website live in 7 days.
                        </p>
                        <div className="space-y-6">
                            {[
                                { day: 'Day 1–2', title: 'Discovery & Strategy', desc: 'We learn about your business, study your competition, and plan your website structure and content strategy.' },
                                { day: 'Day 3–4', title: 'Design & Build', desc: 'We design and develop your website with mobile-first responsive layouts, lead capture forms, and SEO foundations.' },
                                { day: 'Day 5–6', title: 'Content & Optimisation', desc: 'We write compelling copy, optimise images, set up SEO, and integrate analytics and conversion tracking.' },
                                { day: 'Day 7', title: 'Launch & Go Live', desc: 'Final review, testing across all devices, DNS setup, and launch. Your website is live and ready to generate leads.' },
                            ].map((step) => (
                                <div key={step.day} className="flex gap-6 items-start bg-gray-50 rounded-xl p-6 border border-gray-100">
                                    <div className="flex-shrink-0 bg-primary text-white font-bold text-sm px-4 py-2 rounded-lg">{step.day}</div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                                        <p className="text-muted text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mid-page CTA */}
                <CTASection
                    headline="Your Competitors Already Have a Website That Works"
                    body="Every week you wait is another week of lost leads and lost revenue. Let's get your website working for you."
                    primaryCta={{ text: 'Get My Free Audit', href: '#lead-form' }}
                    secondaryCta={{ text: 'See Our Pricing', href: '/#pricing' }}
                />

                {/* FAQ */}
                <FAQSection
                    heading="Frequently Asked Questions"
                    faqs={[
                        { q: 'How much does a website cost?', a: 'Our websites start from $995 for a professionally designed, lead-generating website. We have packages for every budget — check our pricing page for details, or get a free quote.' },
                        { q: 'Can you really build a website in 7 days?', a: 'Yes. We\'ve refined our process to deliver high-quality websites fast. Most projects go live within 5–7 business days from when we receive your content and branding.' },
                        { q: 'Do I need to provide content?', a: 'We can work with what you have, or write the content for you. We specialise in conversion-focused copy that turns visitors into leads.' },
                        { q: 'Will my website work on mobile?', a: 'Absolutely. Every website we build is mobile-first. It\'ll look great and work perfectly on phones, tablets, and desktops.' },
                        { q: 'Do you offer ongoing support?', a: 'Yes. All our plans include ongoing support, updates, and maintenance. You\'re never left hanging after launch.' },
                        { q: 'Will my website rank on Google?', a: 'We build every website with on-page SEO best practices, local SEO schema, and Google Business Profile optimisation. For ongoing SEO campaigns, check our SEO service.' },
                        { q: 'What if I already have a website?', a: 'We can audit your existing website for free and recommend whether a rebuild or optimisation is the best path. Sometimes a few targeted fixes make all the difference.' },
                    ]}
                />

                {/* Lead Capture */}
                <section className="py-20 bg-dark text-white" id="lead-form">
                    <div className="max-w-xl mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Your Free Website Audit</h2>
                        <p className="text-gray-400 mb-8">
                            Tell us about your business and we&apos;ll send you a personalised plan to start generating more leads online.
                        </p>
                        <LeadCaptureForm formName="service-web-design" ctaText="Get My Free Audit" showWebsite={true} darkMode={true} />
                    </div>
                </section>

                {/* Internal Links */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="mb-10">
                            <h3 className="text-lg font-bold mb-4">Related Services</h3>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/services/seo" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">SEO</Link>
                                <Link href="/services/conversion-rate-optimisation" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">CRO</Link>
                                <Link href="/services/mobile-development" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Mobile Development</Link>
                                <Link href="/services/site-maintenance-hosting" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Site Maintenance & Hosting</Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Helpful Resources</h3>
                            <ul className="flex flex-col gap-2">
                                <li><Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline text-sm font-medium">How Much Does a Website Cost in NZ? →</Link></li>
                                <li><Link href="/blog/best-website-design-for-small-businesses" className="text-primary hover:underline text-sm font-medium">Best Website Design for Small Businesses →</Link></li>
                                <li><Link href="/blog/website-for-tradies-nz" className="text-primary hover:underline text-sm font-medium">Websites for Tradies NZ — What You Need to Know →</Link></li>
                                <li><Link href="/blog/diy-vs-professional-website" className="text-primary hover:underline text-sm font-medium">DIY vs Professional Website — Which Is Better? →</Link></li>
                                <li><Link href="/tools/lead-loss-calculator" className="text-primary hover:underline text-sm font-medium">Lead Loss Calculator — See What You&apos;re Losing →</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
