import { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import FAQSection from '../../../components/FAQSection'
import ProofSection from '../../../components/ProofSection'
import LeadCaptureForm from '../../../components/LeadCaptureForm'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Website Optimisation NZ — Speed, Performance & Core Web Vitals | Fullstack Forge',
    description: 'Website speed and performance optimisation for NZ businesses. Fix slow load times, improve Core Web Vitals, and boost your Google rankings. Free speed audit.',
    keywords: ['website optimisation nz', 'page speed optimisation', 'core web vitals', 'website performance', 'speed optimisation nz'],
    openGraph: {
        title: 'Website Optimisation NZ — Speed & Performance | Fullstack Forge',
        description: 'Fix slow load times, improve Core Web Vitals, and boost your Google rankings.',
        url: 'https://fullstack-forge.netlify.app/services/website-optimisation',
    },
}

export default function WebsiteOptimisationPage() {
    return (
        <>
            <Nav />
            <div>
                {/* Hero */}
                <section className="bg-dark text-white py-20 md:py-28">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Website Optimisation</p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            A Slow Website Is Costing You Leads Every Day
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            Every second your website takes to load, you lose 7% of your conversions. We fix the speed, performance, and technical issues that are silently driving customers away.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#lead-form" className="btn btn-lg btn-cta-pulse">Get a Free Speed Audit</a>
                            <Link href="/tools/page-speed-checker" className="btn btn-outline-light btn-lg">Check Your Speed Free</Link>
                        </div>
                    </div>
                </section>

                {/* Problem */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Speed Kills — Slow Speed Kills Conversions</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            Your website might look fine on the surface, but technical issues underneath are costing you real money.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: '🐌', title: 'Slow Page Load', desc: '53% of mobile visitors leave if your site takes more than 3 seconds to load. Most NZ small business sites take 5–8 seconds.' },
                                { icon: '📉', title: 'Google Penalises You', desc: 'Core Web Vitals are a ranking factor. Poor performance scores mean lower rankings and less organic traffic.' },
                                { icon: '💸', title: 'Higher Ad Costs', desc: 'Google Ads Quality Score factors in landing page speed. Slow sites pay more per click and get worse ad positions.' },
                                { icon: '😤', title: 'Poor User Experience', desc: 'Layout shifts, slow interactions, and delayed content make your site feel broken. Frustrated visitors don\'t become customers.' },
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
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">We Make Your Website Lightning Fast</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            We audit, diagnose, and fix every performance bottleneck — from server response times to image compression to render-blocking scripts.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: '⚡', title: 'Core Web Vitals', desc: 'We optimise LCP (loading), FID (interactivity), and CLS (visual stability) to pass Google\'s performance thresholds.' },
                                { icon: '🖼️', title: 'Image Optimisation', desc: 'Compress, resize, and convert images to modern formats (WebP/AVIF). Lazy load offscreen images for faster initial paint.' },
                                { icon: '📦', title: 'Code Optimisation', desc: 'Minify CSS and JavaScript, eliminate render-blocking resources, and implement code splitting for faster page loads.' },
                                { icon: '🌍', title: 'CDN & Caching', desc: 'Serve your site from edge servers closest to your visitors. Smart caching strategies that reduce load times by 60%+.' },
                                { icon: '📱', title: 'Mobile Performance', desc: 'Dedicated mobile optimisation — smaller payloads, optimised touch interactions, and faster rendering on mobile networks.' },
                                { icon: '🔧', title: 'Server Optimisation', desc: 'Reduce server response time (TTFB), enable compression, and optimise database queries for instant initial loads.' },
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
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">What&apos;s Included</h2>
                        <div className="grid md:grid-cols-2 gap-4 mt-12">
                            {[
                                'Comprehensive speed and performance audit',
                                'Core Web Vitals analysis and fixes',
                                'Image compression and format conversion',
                                'CSS and JavaScript minification',
                                'Render-blocking resource elimination',
                                'CDN setup and configuration',
                                'Browser caching optimisation',
                                'Server response time optimisation',
                                'Mobile performance optimisation',
                                'Before/after performance comparison report',
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3 py-3 px-4 bg-gray-50 rounded-lg">
                                    <span className="text-primary text-lg flex-shrink-0">✓</span>
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Results */}
                <ProofSection
                    heading="Speed That Drives Results"
                    subheading="Faster sites rank higher, convert better, and cost less to advertise."
                    dark={true}
                    stats={[
                        { value: '95+', label: 'Average PageSpeed score after' },
                        { value: '<2s', label: 'Average load time achieved' },
                        { value: '+35%', label: 'Average conversion rate increase' },
                        { value: '100%', label: 'Core Web Vitals pass rate' },
                    ]}
                />

                {/* Process */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Our Optimisation Process</h2>
                        <div className="space-y-6 mt-12">
                            {[
                                { step: '01', title: 'Performance Audit', desc: 'We run your site through comprehensive performance testing — PageSpeed Insights, Lighthouse, real device testing, and waterfall analysis.' },
                                { step: '02', title: 'Prioritise Fixes', desc: 'We identify every bottleneck and prioritise by impact. We tackle the biggest performance wins first for the fastest improvement.' },
                                { step: '03', title: 'Implement Fixes', desc: 'We fix every issue — images, code, caching, server config, third-party scripts, fonts, and more. Everything is tested before going live.' },
                                { step: '04', title: 'Verify & Report', desc: 'We re-test everything, compare before/after scores, and deliver a detailed report showing exactly what improved and by how much.' },
                            ].map((step) => (
                                <div key={step.step} className="flex gap-6 items-start bg-gray-50 rounded-xl p-6 border border-gray-100">
                                    <div className="flex-shrink-0 bg-primary text-white font-bold text-sm px-4 py-2 rounded-lg">Step {step.step}</div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                                        <p className="text-muted text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <CTASection
                    headline="Every Second Counts"
                    body="A 1-second delay costs you 7% of conversions. How many seconds is your site wasting? Find out with a free speed audit."
                    primaryCta={{ text: 'Get a Free Speed Audit', href: '#lead-form' }}
                    secondaryCta={{ text: 'Check Your Speed Free', href: '/tools/page-speed-checker' }}
                />

                {/* FAQ */}
                <FAQSection
                    heading="Website Optimisation FAQ"
                    faqs={[
                        { q: 'How fast should my website be?', a: 'Google recommends your largest contentful paint (LCP) happens within 2.5 seconds. Ideally, your total page load should be under 3 seconds on mobile. Most NZ small business sites are 5–10 seconds.' },
                        { q: 'How much does website optimisation cost?', a: 'One-time optimisation starts from $499. This includes a full audit, all fixes, and a before/after report. Ongoing performance monitoring is available as an add-on.' },
                        { q: 'Will optimisation break my website?', a: 'No. We test every change thoroughly before deploying. We also take a full backup before starting so we can rollback instantly if needed.' },
                        { q: 'Can you optimise any website?', a: 'Yes. We work with WordPress, Shopify, Squarespace, Wix, custom-built sites, and more. The specific optimisations vary by platform, but the principles are the same.' },
                        { q: 'How long does optimisation take?', a: 'Most optimisation projects are completed within 3–5 business days. Complex sites with many issues may take up to 2 weeks.' },
                        { q: 'Will faster speed improve my Google rankings?', a: 'Yes. Page speed and Core Web Vitals are confirmed Google ranking factors. Faster sites consistently rank higher, especially on mobile.' },
                    ]}
                />

                {/* Lead Capture */}
                <section className="py-20 bg-dark text-white" id="lead-form">
                    <div className="max-w-xl mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Your Free Speed Audit</h2>
                        <p className="text-gray-400 mb-8">
                            We&apos;ll test your website speed and show you exactly what&apos;s slowing it down and costing you customers.
                        </p>
                        <LeadCaptureForm formName="service-optimisation" ctaText="Get My Free Speed Audit" showWebsite={true} darkMode={true} />
                    </div>
                </section>

                {/* Internal Links */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="mb-10">
                            <h3 className="text-lg font-bold mb-4">Related Services</h3>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/services/web-design" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Web Design</Link>
                                <Link href="/services/seo" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">SEO</Link>
                                <Link href="/services/mobile-development" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Mobile Development</Link>
                                <Link href="/services/site-maintenance-hosting" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Site Maintenance & Hosting</Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Helpful Resources</h3>
                            <ul className="flex flex-col gap-2">
                                <li><Link href="/blog/best-website-design-for-small-businesses" className="text-primary hover:underline text-sm font-medium">Best Website Design for Small Businesses →</Link></li>
                                <li><Link href="/blog/diy-vs-professional-website" className="text-primary hover:underline text-sm font-medium">DIY vs Professional Website →</Link></li>
                                <li><Link href="/tools/page-speed-checker" className="text-primary hover:underline text-sm font-medium">Free Page Speed Checker →</Link></li>
                                <li><Link href="/tools/mobile-friendly-test" className="text-primary hover:underline text-sm font-medium">Free Mobile-Friendly Test →</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
