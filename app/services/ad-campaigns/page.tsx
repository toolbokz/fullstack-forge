import { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import FAQSection from '../../../components/FAQSection'
import ProofSection from '../../../components/ProofSection'
import LeadCaptureForm from '../../../components/LeadCaptureForm'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Google Ads & Facebook Ads NZ — Lead Generation Campaigns | Fullstack Forge',
    description: 'Paid advertising for NZ tradies and small businesses. Google Ads and Facebook Ads campaigns that generate real leads — not just clicks. No long-term contracts.',
    keywords: ['google ads nz', 'facebook ads nz', 'ppc management nz', 'lead generation ads', 'paid advertising nz'],
    openGraph: {
        title: 'Ad Campaigns NZ — Google & Facebook Ads | Fullstack Forge',
        description: 'Google Ads and Facebook Ads that generate real leads for NZ tradies and small businesses.',
        url: 'https://fullstack-forge.netlify.app/services/ad-campaigns',
    },
}

export default function AdCampaignsPage() {
    return (
        <>
            <Nav />
            <div>
                {/* Hero */}
                <section className="bg-dark text-white py-20 md:py-28">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Ad Campaigns</p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Get Leads This Week With Google & Facebook Ads
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            SEO takes months. Ads deliver leads this week. We build targeted ad campaigns for NZ tradies and local businesses that turn ad spend into booked jobs — not wasted clicks.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#lead-form" className="btn btn-lg btn-cta-pulse">Get a Free Ads Strategy</a>
                            <Link href="/tools/website-roi-calculator" className="btn btn-outline-light btn-lg">Calculate Your ROI</Link>
                        </div>
                    </div>
                </section>

                {/* Problem */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Why Most Ad Campaigns Fail</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            You&apos;ve probably tried boosting a Facebook post or running Google Ads yourself. It didn&apos;t work. Here&apos;s why:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: '🎯', title: 'Wrong Targeting', desc: 'Your ads are shown to people who will never buy. Without proper audience targeting, you\'re paying for irrelevant clicks from people outside your service area.' },
                                { icon: '📝', title: 'Weak Ad Copy', desc: 'Generic ads don\'t stand out. "We do plumbing" doesn\'t stop the scroll. Your ads need to speak directly to what customers need right now.' },
                                { icon: '🔗', title: 'No Landing Page', desc: 'You\'re sending ad traffic to your homepage. There\'s no clear next step, no focused message, no conversion path. Visitors bounce.' },
                                { icon: '📊', title: 'No Tracking or Optimisation', desc: 'Without conversion tracking, you don\'t know which ads generate leads and which waste money. You\'re flying blind.' },
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
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Ad Campaigns Built to Generate Leads</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            We don&apos;t just run ads. We build complete lead generation campaigns — from strategy and targeting to landing pages and conversion tracking.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: '🎯', title: 'Precision Targeting', desc: 'We target people in your service area who are actively searching for what you do. No wasted spend on irrelevant audiences.' },
                                { icon: '✍️', title: 'Conversion-Focused Copy', desc: 'Ad copy that speaks to your customer\'s pain points and drives them to take action. Tested and optimised continuously.' },
                                { icon: '📄', title: 'Custom Landing Pages', desc: 'Dedicated landing pages for each campaign. Focused message, clear CTA, no distractions. Built to convert.' },
                                { icon: '📊', title: 'Full Conversion Tracking', desc: 'We track every call, form submission, and enquiry back to the ad that generated it. You know exactly what\'s working.' },
                                { icon: '🔄', title: 'Continuous Optimisation', desc: 'We monitor and optimise your campaigns weekly. Pausing what doesn\'t work, scaling what does.' },
                                { icon: '📱', title: 'Multi-Platform', desc: 'Google Search Ads, Google Display, Facebook, and Instagram. We run your ads where your customers actually are.' },
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
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            A complete ads system — not just someone pressing "boost post" on Facebook.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                'Competitor and market research',
                                'Keyword research and audience targeting',
                                'Ad copy writing and creative design',
                                'Custom landing page build for each campaign',
                                'Google Ads setup and management',
                                'Facebook & Instagram Ads setup and management',
                                'Conversion tracking (calls, forms, bookings)',
                                'A/B testing of ad copy and landing pages',
                                'Weekly campaign optimisation',
                                'Monthly performance reports with ROI analysis',
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
                    heading="Campaigns That Pay for Themselves"
                    subheading="When ads are done right, every dollar you spend comes back multiplied."
                    dark={true}
                    stats={[
                        { value: '5–10x', label: 'Average return on ad spend' },
                        { value: '<$20', label: 'Average cost per qualified lead' },
                        { value: '48hrs', label: 'Time to first leads' },
                        { value: '0', label: 'Long-term contracts required' },
                    ]}
                />

                {/* Process */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Our Ad Campaign Process</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            From strategy to leads in your inbox — here&apos;s how we make it happen.
                        </p>
                        <div className="space-y-6">
                            {[
                                { step: '01', title: 'Strategy & Research', desc: 'We research your market, competitors, and customers. We identify the most profitable keywords and audiences to target.' },
                                { step: '02', title: 'Campaign Build', desc: 'We write compelling ad copy, design creatives, build dedicated landing pages, and set up conversion tracking.' },
                                { step: '03', title: 'Launch & Monitor', desc: 'Campaigns go live. We monitor performance daily, ensuring your budget is spent on clicks that turn into leads.' },
                                { step: '04', title: 'Optimise & Scale', desc: 'We A/B test ads and landing pages, pause underperformers, scale winners, and continuously improve your ROI.' },
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
                    headline="Your Competitors Are Running Ads Right Now"
                    body="They're showing up at the top of Google while you wait for organic traffic. Paid ads get you leads this week — not this year."
                    primaryCta={{ text: 'Get a Free Ads Strategy', href: '#lead-form' }}
                    secondaryCta={{ text: 'Calculate Your ROI', href: '/tools/website-roi-calculator' }}
                />

                {/* FAQ */}
                <FAQSection
                    heading="Ad Campaigns FAQ"
                    faqs={[
                        { q: 'How much should I spend on ads?', a: 'We recommend starting with $500–$1,000/month in ad spend for local businesses. This is separate from our management fee. We\'ll help you find the right budget based on your market and goals.' },
                        { q: 'How quickly will I see results?', a: 'Most clients see their first leads within 48 hours of campaign launch. Full optimisation typically happens within the first 2–4 weeks as we gather data and refine targeting.' },
                        { q: 'Google Ads or Facebook Ads — which is better?', a: 'It depends on your business. Google Ads captures people actively searching for your services. Facebook Ads builds awareness and reaches people before they search. We often recommend both for maximum coverage.' },
                        { q: 'How much does ad management cost?', a: 'Our ad management starts from $399/month. This includes strategy, campaign setup, landing pages, ongoing optimisation, and monthly reporting. Ad spend is paid directly to Google/Facebook.' },
                        { q: 'What if I\'ve tried ads before and they didn\'t work?', a: 'Most failed ad campaigns suffer from poor targeting, weak landing pages, or no conversion tracking. We fix all three. Our campaigns are built around data and continuous optimisation.' },
                        { q: 'Do I need a website to run ads?', a: 'You need somewhere to send traffic. We build dedicated landing pages as part of our ad campaigns — even if your main website needs work. For best results, we recommend pairing ads with our web design service.' },
                    ]}
                />

                {/* Lead Capture */}
                <section className="py-20 bg-dark text-white" id="lead-form">
                    <div className="max-w-xl mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Your Free Ads Strategy</h2>
                        <p className="text-gray-400 mb-8">
                            We&apos;ll analyse your market and competitors, and show you exactly how to get leads through paid ads.
                        </p>
                        <LeadCaptureForm formName="service-ad-campaigns" ctaText="Get My Free Strategy" showWebsite={true} darkMode={true} />
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
                                <Link href="/services/web-design" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Web Design</Link>
                                <Link href="/services/ai-automation" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">AI Automation</Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Helpful Resources</h3>
                            <ul className="flex flex-col gap-2">
                                <li><Link href="/blog/how-to-get-customers-from-your-website" className="text-primary hover:underline text-sm font-medium">How to Get Customers From Your Website →</Link></li>
                                <li><Link href="/blog/how-to-get-more-leads-from-your-website" className="text-primary hover:underline text-sm font-medium">How to Get More Leads From Your Website →</Link></li>
                                <li><Link href="/tools/website-roi-calculator" className="text-primary hover:underline text-sm font-medium">Website ROI Calculator →</Link></li>
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
