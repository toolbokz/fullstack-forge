import { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import FAQSection from '../../../components/FAQSection'
import ProofSection from '../../../components/ProofSection'
import LeadCaptureForm from '../../../components/LeadCaptureForm'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'CRO NZ — Turn More Visitors Into Customers | Fullstack Forge',
    description: 'Conversion Rate Optimisation for NZ businesses. We turn your existing website traffic into more leads, more calls, and more revenue — without spending more on ads.',
    alternates: { canonical: 'https://fullstack-forge.netlify.app/services/conversion-rate-optimisation' },
    keywords: ['conversion rate optimisation nz', 'cro nz', 'website conversions', 'landing page optimisation', 'increase website leads'],
    openGraph: {
        title: 'CRO NZ — Conversion Rate Optimisation | Fullstack Forge',
        description: 'Turn more website visitors into paying customers. CRO for NZ tradies and small businesses.',
        url: 'https://fullstack-forge.netlify.app/services/conversion-rate-optimisation',
    },
}

export default function CROPage() {
    return (
        <>
            <Nav />
            <div>
                {/* Hero */}
                <section className="bg-dark text-white py-20 md:py-28">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Conversion Rate Optimisation</p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Double Your Leads Without Doubling Your Traffic
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            You&apos;re already getting visitors. The problem isn&apos;t traffic — it&apos;s that your website isn&apos;t turning those visitors into customers. Even a small improvement in your conversion rate can massively increase your revenue.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#lead-form" className="btn btn-lg btn-cta-pulse">Get a Free CRO Audit</a>
                            <Link href="/tools/conversion-rate-estimator" className="btn btn-outline-light btn-lg">Estimate Your Revenue Uplift</Link>
                        </div>
                    </div>
                </section>

                {/* Problem */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">You&apos;re Getting Traffic — But Not Leads</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            The average website converts just 2–3% of visitors. That means 97 out of every 100 people who visit your site leave without contacting you. Here&apos;s why:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: '😕', title: 'Unclear Value Proposition', desc: 'Visitors land on your site and don\'t immediately understand what you do, who you do it for, or why they should choose you over alternatives.' },
                                { icon: '🚧', title: 'Friction in the Journey', desc: 'Too many clicks to find your contact details. Forms that ask for too much information. No clear next step on any page.' },
                                { icon: '🤷', title: 'No Social Proof', desc: 'Visitors don\'t see reviews, testimonials, or evidence that you\'ve helped people like them. Without proof, trust doesn\'t build.' },
                                { icon: '🔇', title: 'Weak Calls-to-Action', desc: 'Your CTAs say "Contact Us" or "Submit." They don\'t tell visitors what they\'ll get or why they should take action now.' },
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

                {/* The Maths */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">The Power of Small Conversion Improvements</h2>
                        <p className="text-muted text-lg max-w-2xl mx-auto mb-10">
                            You don&apos;t need to double your traffic to double your revenue. Look at the maths:
                        </p>
                        <div className="bg-white rounded-xl border border-gray-200 p-8 text-left space-y-6">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-bold text-red-500 mb-3">Before CRO</h3>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex justify-between"><span className="text-muted">Monthly visitors:</span><span className="font-semibold">1,000</span></li>
                                        <li className="flex justify-between"><span className="text-muted">Conversion rate:</span><span className="font-semibold">2%</span></li>
                                        <li className="flex justify-between"><span className="text-muted">Leads per month:</span><span className="font-semibold">20</span></li>
                                        <li className="flex justify-between"><span className="text-muted">Revenue per lead:</span><span className="font-semibold">$800</span></li>
                                        <li className="flex justify-between border-t pt-2 mt-2"><span className="text-muted font-medium">Monthly revenue:</span><span className="font-bold text-lg">$16,000</span></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-green-600 mb-3">After CRO</h3>
                                    <ul className="space-y-2 text-sm">
                                        <li className="flex justify-between"><span className="text-muted">Monthly visitors:</span><span className="font-semibold">1,000 <span className="text-xs text-muted">(same)</span></span></li>
                                        <li className="flex justify-between"><span className="text-muted">Conversion rate:</span><span className="font-semibold text-green-600">5%</span></li>
                                        <li className="flex justify-between"><span className="text-muted">Leads per month:</span><span className="font-semibold text-green-600">50</span></li>
                                        <li className="flex justify-between"><span className="text-muted">Revenue per lead:</span><span className="font-semibold">$800</span></li>
                                        <li className="flex justify-between border-t pt-2 mt-2"><span className="text-muted font-medium">Monthly revenue:</span><span className="font-bold text-lg text-green-600">$40,000</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-center text-primary font-bold text-lg pt-4 border-t">
                                Same traffic. $24,000 more per month. $288,000 more per year.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Solution */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">How We Optimise Your Conversion Rate</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            We use data, psychology, and testing to systematically improve every step of your customer&apos;s journey — from landing on your site to picking up the phone.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: '🔬', title: 'Data-Driven Analysis', desc: 'We use heatmaps, session recordings, and analytics to see exactly where visitors drop off and why they\'re not converting.' },
                                { icon: '✍️', title: 'Persuasive Copy', desc: 'We rewrite headlines, CTAs, and page content to clearly communicate your value and motivate visitors to take action.' },
                                { icon: '🧪', title: 'A/B Testing', desc: 'We test different versions of pages, headlines, forms, and CTAs to find what actually converts — not what looks good.' },
                                { icon: '📱', title: 'UX Optimisation', desc: 'We simplify navigation, reduce friction, speed up forms, and make the path from visitor to lead as short as possible.' },
                                { icon: '⭐', title: 'Trust Building', desc: 'We strategically place testimonials, reviews, case studies, and trust signals where they have the most impact.' },
                                { icon: '📊', title: 'Landing Page Design', desc: 'We design dedicated landing pages for key services — focused, distraction-free pages built to convert.' },
                            ].map((feature) => (
                                <div key={feature.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                    <div className="text-3xl mb-3">{feature.icon}</div>
                                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                    <p className="text-muted text-sm">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What's Included */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">What&apos;s Included in CRO</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            A systematic, data-driven approach to getting more leads from your existing traffic.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                'Full conversion audit of your website',
                                'Heatmap and session recording analysis',
                                'User journey and funnel mapping',
                                'Competitor conversion analysis',
                                'Headline and CTA optimisation',
                                'Form optimisation and friction reduction',
                                'Trust signal and social proof placement',
                                'A/B testing programme',
                                'Landing page design and optimisation',
                                'Monthly conversion reports with insights',
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3 py-3 px-4 bg-white rounded-lg border border-gray-100">
                                    <span className="text-primary text-lg flex-shrink-0">✓</span>
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Results */}
                <ProofSection
                    heading="CRO Results"
                    subheading="More leads from the same traffic. That's the power of optimisation."
                    dark={true}
                    stats={[
                        { value: '2–3x', label: 'Average conversion rate improvement' },
                        { value: '$0', label: 'Extra ad spend needed' },
                        { value: '30 days', label: 'Time to first measurable improvement' },
                        { value: '150%+', label: 'Average revenue uplift' },
                    ]}
                />

                {/* Process */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Our CRO Process</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            We follow a systematic, proven process to improve your conversion rate month over month.
                        </p>
                        <div className="space-y-6">
                            {[
                                { step: '01', title: 'Conversion Audit', desc: 'We analyse your entire website — traffic patterns, user behaviour, form completion rates, and drop-off points. We identify the biggest opportunities.' },
                                { step: '02', title: 'Hypothesis & Prioritise', desc: 'Based on the data, we create a prioritised list of changes ranked by potential impact. We tackle the highest-impact opportunities first.' },
                                { step: '03', title: 'Test & Implement', desc: 'We design and implement changes — new headlines, restructured pages, optimised forms, improved CTAs. Where possible, we A/B test to validate.' },
                                { step: '04', title: 'Measure & Iterate', desc: 'We track the results of every change. What works gets kept and expanded. What doesn\'t gets revised. Continuous improvement, every month.' },
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
                    headline="You're Paying for Traffic That Doesn't Convert"
                    body="Whether it's SEO or ads, every visitor who leaves without contacting you is wasted spend. CRO makes every visitor worth more."
                    primaryCta={{ text: 'Get a Free CRO Audit', href: '#lead-form' }}
                    secondaryCta={{ text: 'Estimate Your Revenue Uplift', href: '/tools/conversion-rate-estimator' }}
                />

                {/* FAQ */}
                <FAQSection
                    heading="CRO Questions Answered"
                    faqs={[
                        { q: 'What is Conversion Rate Optimisation?', a: 'CRO is the process of improving your website so a higher percentage of visitors take a desired action — calling you, filling out a form, or booking a job. More conversions from the same traffic = more revenue.' },
                        { q: 'How much does CRO cost?', a: 'Our CRO service starts from $399/month. The ROI is typically very fast because you\'re getting more leads from traffic you\'re already paying for.' },
                        { q: 'How long until I see results?', a: 'Most businesses see measurable improvements within 30 days. Significant gains accumulate over 2–3 months as we test and refine multiple elements.' },
                        { q: 'Do I need enough traffic for CRO to work?', a: 'CRO works best with at least 500 monthly visitors. If you have less, we recommend starting with SEO or ads to build traffic first, then layering in CRO.' },
                        { q: 'What\'s the difference between CRO and web design?', a: 'Web design creates your website. CRO optimises it based on real user data. You can have a beautiful website that doesn\'t convert — CRO fixes that by focusing on what actually drives action.' },
                        { q: 'Can CRO work with my existing website?', a: 'Yes. CRO is designed to improve your existing site. We don\'t need to rebuild anything — we make targeted improvements based on data.' },
                    ]}
                />

                {/* Lead Capture */}
                <section className="py-20 bg-dark text-white" id="lead-form">
                    <div className="max-w-xl mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Your Free CRO Audit</h2>
                        <p className="text-gray-400 mb-8">
                            We&apos;ll analyse your website&apos;s conversion performance and show you exactly where you&apos;re losing leads.
                        </p>
                        <LeadCaptureForm formName="service-cro" ctaText="Get My Free CRO Audit" showWebsite={true} darkMode={true} />
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
                                <Link href="/services/ad-campaigns" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Ad Campaigns</Link>
                                <Link href="/services/ai-automation" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">AI Automation</Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Helpful Resources</h3>
                            <ul className="flex flex-col gap-2">
                                <li><Link href="/blog/how-to-get-more-leads-from-your-website" className="text-primary hover:underline text-sm font-medium">How to Get More Leads From Your Website →</Link></li>
                                <li><Link href="/blog/how-to-get-customers-from-your-website" className="text-primary hover:underline text-sm font-medium">How to Get Customers From Your Website →</Link></li>
                                <li><Link href="/tools/conversion-rate-estimator" className="text-primary hover:underline text-sm font-medium">Conversion Rate Estimator →</Link></li>
                                <li><Link href="/tools/lead-loss-calculator" className="text-primary hover:underline text-sm font-medium">Lead Loss Calculator →</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
