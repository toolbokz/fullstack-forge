import { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import FAQSection from '../../../components/FAQSection'
import ProofSection from '../../../components/ProofSection'
import LeadCaptureForm from '../../../components/LeadCaptureForm'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'SEO NZ — Get Found on Google by Local Customers | Fullstack Forge',
    description: 'SEO services for NZ tradies and small businesses. We help you rank on the first page of Google, get more local search traffic, and generate leads on autopilot.',
    alternates: { canonical: 'https://fullstack-forge.netlify.app/services/seo' },
    keywords: ['seo nz', 'local seo nz', 'search engine optimisation nz', 'google ranking nz', 'seo for tradies'],
    openGraph: {
        title: 'SEO NZ — Get Found on Google | Fullstack Forge',
        description: 'SEO services for NZ tradies and small businesses. Rank on page 1 of Google and generate leads.',
        url: 'https://fullstack-forge.netlify.app/services/seo',
    },
}

export default function SEOPage() {
    return (
        <>
            <Nav />
            <div>
                {/* Hero */}
                <section className="bg-dark text-white py-20 md:py-28">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Search Engine Optimisation</p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Get Found on Google When Customers Search for What You Do
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            75% of people never scroll past page 1 of Google. If you&apos;re not there, your competitors are getting the jobs that should be yours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#lead-form" className="btn btn-lg btn-cta-pulse">Get a Free SEO Audit</a>
                            <Link href="/tools/seo-audit" className="btn btn-outline-light btn-lg">Run a Free SEO Scan</Link>
                        </div>
                    </div>
                </section>

                {/* Problem */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Why Your Business Is Invisible Online</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            Having a website isn&apos;t enough. If Google can&apos;t find you, neither can your customers.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: '👻', title: 'You\'re Not on Page 1', desc: 'When someone searches "plumber Christchurch" or "builder near me," you don\'t show up. Your competitors do — and they\'re getting the call.' },
                                { icon: '🗺️', title: 'No Local Presence', desc: 'Your Google Business Profile is incomplete or missing. Google Maps results show your competitors, not you.' },
                                { icon: '📉', title: 'Traffic but No Leads', desc: 'You might get some visitors, but they leave without calling or filling out a form. Traffic without conversions is wasted money.' },
                                { icon: '🏗️', title: 'No SEO Foundation', desc: 'Missing meta tags, no schema markup, slow page speeds — the technical issues are silently killing your rankings.' },
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
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">SEO That Actually Gets You Leads</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            We don&apos;t do SEO for the sake of rankings. Everything we do is designed to get you more phone calls, more enquiries, and more jobs.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: '🏠', title: 'Local SEO', desc: 'Dominate Google Maps and "near me" searches. We optimise your Google Business Profile, build local citations, and target location-specific keywords.' },
                                { icon: '🔧', title: 'Technical SEO', desc: 'We fix the hidden issues holding you back — page speed, crawl errors, broken links, missing meta tags, and mobile usability.' },
                                { icon: '📝', title: 'Content Strategy', desc: 'We create SEO-optimised content that answers your customers\' questions and brings them to your website ready to buy.' },
                                { icon: '🔗', title: 'Link Building', desc: 'We build high-quality backlinks from NZ directories, industry sites, and local publications to boost your domain authority.' },
                                { icon: '📊', title: 'Keyword Research', desc: 'We find the exact phrases your customers search for and target them systematically across your website.' },
                                { icon: '📈', title: 'Monthly Reporting', desc: 'Clear, jargon-free reports showing your rankings, traffic, and leads. You always know what\'s working and why.' },
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
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">What&apos;s Included in Our SEO Service</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            A complete SEO strategy — not just a keyword report that sits in your inbox.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                'Comprehensive SEO audit of your website',
                                'Keyword research targeting your services and areas',
                                'Google Business Profile setup and optimisation',
                                'On-page SEO for all key pages',
                                'Technical SEO fixes (speed, crawlability, mobile)',
                                'Local citation building across NZ directories',
                                'Content creation and blog strategy',
                                'Competitor analysis and gap identification',
                                'Schema markup for rich search results',
                                'Monthly performance reports with actionable insights',
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
                    heading="SEO Results That Speak for Themselves"
                    subheading="We focus on rankings that drive real business — not vanity metrics."
                    dark={true}
                    stats={[
                        { value: 'Page 1', label: 'Average ranking within 90 days' },
                        { value: '312%', label: 'Average organic traffic increase' },
                        { value: '2.5x', label: 'More leads from Google' },
                        { value: '$0', label: 'Cost per organic lead (long-term)' },
                    ]}
                />

                {/* Process */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Our SEO Process</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            A proven, systematic approach to getting your business to the top of Google.
                        </p>
                        <div className="space-y-6">
                            {[
                                { step: '01', title: 'Audit & Research', desc: 'We audit your website, research your competitors, and identify the keywords that will drive the most leads for your business.' },
                                { step: '02', title: 'Technical Foundation', desc: 'We fix every technical issue holding you back — site speed, crawl errors, mobile usability, and structured data.' },
                                { step: '03', title: 'On-Page Optimisation', desc: 'We optimise every page on your site — titles, headings, content, internal links, and calls-to-action.' },
                                { step: '04', title: 'Local SEO', desc: 'We set up and optimise your Google Business Profile, build local citations, and target location-specific keywords.' },
                                { step: '05', title: 'Content & Link Building', desc: 'We create fresh, SEO-optimised content and build high-quality backlinks to boost your authority and rankings.' },
                                { step: '06', title: 'Monitor & Improve', desc: 'We track your rankings, traffic, and conversions monthly. We continuously optimise based on what the data tells us.' },
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
                    headline="Your Competitors Are Ranking Above You Right Now"
                    body="Every day you wait, they're getting the leads that should be yours. Let's change that — start with a free SEO audit."
                    primaryCta={{ text: 'Get My Free SEO Audit', href: '#lead-form' }}
                    secondaryCta={{ text: 'Run a Free SEO Scan', href: '/tools/seo-audit' }}
                />

                {/* FAQ */}
                <FAQSection
                    heading="SEO Questions? We&apos;ve Got Answers"
                    faqs={[
                        { q: 'How long does SEO take to work?', a: 'Most businesses see noticeable improvements within 60–90 days. Significant rankings and traffic growth typically happen within 3–6 months. SEO is a long-term investment that compounds over time.' },
                        { q: 'Do you guarantee page 1 rankings?', a: 'No legitimate SEO provider can guarantee specific rankings because Google\'s algorithm changes constantly. What we do guarantee is a proven process, transparent reporting, and continuous optimisation to get you the best possible results.' },
                        { q: 'How much does SEO cost?', a: 'Our SEO packages start from $499/month. The exact price depends on your competition, target keywords, and how aggressive you want to be. Get in touch for a custom quote.' },
                        { q: 'What\'s the difference between SEO and Google Ads?', a: 'Google Ads gives you instant visibility but costs money on every click. SEO takes longer to build but delivers free, ongoing traffic. The best strategy uses both together.' },
                        { q: 'Do I need a new website for SEO to work?', a: 'Not necessarily. We can optimise your existing website. However, if your site has fundamental issues (very slow, not mobile-friendly, outdated platform), a rebuild might deliver faster results.' },
                        { q: 'How do I know if SEO is working?', a: 'We provide monthly reports showing your keyword rankings, organic traffic, and leads generated. You\'ll see exactly what\'s improving and where the traffic is coming from.' },
                    ]}
                />

                {/* Lead Capture */}
                <section className="py-20 bg-dark text-white" id="lead-form">
                    <div className="max-w-xl mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Your Free SEO Audit</h2>
                        <p className="text-gray-400 mb-8">
                            Find out exactly where you stand on Google and what it&apos;ll take to outrank your competitors.
                        </p>
                        <LeadCaptureForm formName="service-seo" ctaText="Get My Free SEO Audit" showWebsite={true} darkMode={true} />
                    </div>
                </section>

                {/* Internal Links */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="mb-10">
                            <h3 className="text-lg font-bold mb-4">Related Services</h3>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/services/web-design" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Web Design</Link>
                                <Link href="/services/conversion-rate-optimisation" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">CRO</Link>
                                <Link href="/services/ad-campaigns" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Ad Campaigns</Link>
                                <Link href="/services/website-optimisation" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Website Optimisation</Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Helpful Resources</h3>
                            <ul className="flex flex-col gap-2">
                                <li><Link href="/blog/seo-for-small-business-nz" className="text-primary hover:underline text-sm font-medium">SEO for Small Business NZ — The Complete Guide →</Link></li>
                                <li><Link href="/blog/how-to-get-customers-from-your-website" className="text-primary hover:underline text-sm font-medium">How to Get Customers From Your Website →</Link></li>
                                <li><Link href="/blog/how-to-get-more-leads-from-your-website" className="text-primary hover:underline text-sm font-medium">How to Get More Leads From Your Website →</Link></li>
                                <li><Link href="/tools/seo-audit" className="text-primary hover:underline text-sm font-medium">Free Website SEO Audit Tool →</Link></li>
                                <li><Link href="/tools/keyword-opportunity-finder" className="text-primary hover:underline text-sm font-medium">Keyword Opportunity Finder →</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
