import { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import FAQSection from '../../../components/FAQSection'
import ProofSection from '../../../components/ProofSection'
import LeadCaptureForm from '../../../components/LeadCaptureForm'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Mobile Development NZ — Mobile-First Apps & Websites | Fullstack Forge',
    description: 'Mobile development for NZ businesses. We build blazing-fast, mobile-first websites and apps that work perfectly on every device. Over 60% of your traffic is on mobile.',
    alternates: { canonical: 'https://fullstack-forge.netlify.app/services/mobile-development' },
    keywords: ['mobile development nz', 'mobile app development nz', 'responsive web design nz', 'mobile-first website', 'progressive web app nz'],
    openGraph: {
        title: 'Mobile Development NZ — Mobile-First Apps & Websites | Fullstack Forge',
        description: 'Mobile-first websites and apps for NZ businesses. Blazing fast on every device.',
        url: 'https://fullstack-forge.netlify.app/services/mobile-development',
    },
}

export default function MobileDevelopmentPage() {
    return (
        <>
            <Nav />
            <div>
                {/* Hero */}
                <section className="bg-dark text-white py-20 md:py-28">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Mobile Development</p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Your Customers Are on Their Phones — Is Your Website Ready?
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            Over 60% of web traffic in NZ comes from mobile devices. If your website doesn&apos;t load fast and look perfect on a phone, you&apos;re losing customers every day.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#lead-form" className="btn btn-lg btn-cta-pulse">Get a Free Mobile Audit</a>
                            <Link href="/tools/mobile-friendly-test" className="btn btn-outline-light btn-lg">Test Your Site for Free</Link>
                        </div>
                    </div>
                </section>

                {/* Problem */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Mobile Users Are Leaving Your Site</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            A website that looks fine on desktop can be a disaster on mobile. Here&apos;s what&apos;s happening when someone visits your site on their phone:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: '🐌', title: 'Painfully Slow Loading', desc: '53% of mobile visitors abandon sites that take more than 3 seconds to load. On mobile networks, speed is everything.' },
                                { icon: '🔍', title: 'Text Too Small to Read', desc: 'If visitors have to pinch and zoom to read your content, they won\'t. They\'ll hit the back button and call your competitor.' },
                                { icon: '👆', title: 'Buttons Too Small to Tap', desc: 'Tiny links and buttons that work with a mouse are impossible on a touchscreen. Frustrated users leave immediately.' },
                                { icon: '📐', title: 'Broken Layout', desc: 'Content that overflows, images that don\'t resize, menus that don\'t work — these all signal "unprofessional" to your customers.' },
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
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Mobile-First Development That Converts</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            We design for phones first, then scale up to tablets and desktops. The result: a site that works perfectly everywhere and converts on every screen size.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: '📱', title: 'Mobile-First Design', desc: 'We design for the smallest screen first, then progressively enhance for larger devices. This ensures the best experience where it matters most.' },
                                { icon: '⚡', title: 'Blazing Performance', desc: 'Optimised images, lazy loading, code splitting, and edge caching. Your site loads in under 2 seconds on mobile networks.' },
                                { icon: '👆', title: 'Touch-Optimised UI', desc: 'Large tap targets, smooth scrolling, swipe-friendly navigation. Every interaction feels natural on touchscreens.' },
                                { icon: '📲', title: 'Progressive Web App', desc: 'Your website works offline, loads instantly on return visits, and can be added to the home screen — like a native app.' },
                                { icon: '🎯', title: 'Click-to-Call CTAs', desc: 'One tap to call you directly. Mobile users can reach you instantly without hunting for your phone number.' },
                                { icon: '🔍', title: 'Mobile SEO', desc: 'Google uses mobile-first indexing. Your mobile site IS your SEO. We make sure Google loves what it sees.' },
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
                            Everything you need for a mobile experience that wins customers and drives leads.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                'Mobile-first responsive design',
                                'Touch-optimised navigation and forms',
                                'Progressive Web App capabilities',
                                'Image optimisation and lazy loading',
                                'Click-to-call and click-to-message buttons',
                                'Mobile page speed optimisation',
                                'Core Web Vitals optimisation',
                                'Cross-device and cross-browser testing',
                                'Google mobile-friendly compliance',
                                'Ongoing mobile performance monitoring',
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
                    heading="Mobile Performance That Matters"
                    subheading="Better mobile experience = more leads, more calls, more jobs."
                    dark={true}
                    stats={[
                        { value: '<2s', label: 'Mobile load time' },
                        { value: '95+', label: 'Mobile PageSpeed score' },
                        { value: '60%+', label: 'Of your traffic is mobile' },
                        { value: '2x', label: 'More mobile conversions' },
                    ]}
                />

                {/* Process */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Our Mobile Development Process</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            We build mobile-first from the ground up — not as an afterthought.
                        </p>
                        <div className="space-y-6">
                            {[
                                { step: '01', title: 'Mobile Audit', desc: 'We test your current site on real mobile devices, measure speed, usability, and identify every friction point costing you leads.' },
                                { step: '02', title: 'Mobile-First Design', desc: 'We design your layout, navigation, and content hierarchy for small screens first, then scale up to desktop.' },
                                { step: '03', title: 'Performance Build', desc: 'We build with optimised code, compressed images, and edge caching for sub-2-second load times on any network.' },
                                { step: '04', title: 'Test & Launch', desc: 'We test on 20+ real devices and screen sizes, verify Core Web Vitals, and launch your lightning-fast mobile experience.' },
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
                    headline="How Does Your Site Look on a Phone Right Now?"
                    body="Most business owners haven't checked their site on mobile in months. Run our free mobile test and see what your customers are actually experiencing."
                    primaryCta={{ text: 'Get a Free Mobile Audit', href: '#lead-form' }}
                    secondaryCta={{ text: 'Run Free Mobile Test', href: '/tools/mobile-friendly-test' }}
                />

                {/* FAQ */}
                <FAQSection
                    heading="Mobile Development FAQ"
                    faqs={[
                        { q: 'Do I need a separate mobile website?', a: 'No. We build responsive websites that automatically adapt to every screen size. One website, one URL, one codebase — works perfectly on phones, tablets, and desktops.' },
                        { q: 'What\'s a Progressive Web App (PWA)?', a: 'A PWA is a website that behaves like a native app. It can be installed on a home screen, works offline, and loads instantly. It\'s the best of both worlds — no app store needed.' },
                        { q: 'How much does mobile development cost?', a: 'Mobile-first development is included in all our web design packages. If you need a standalone mobile app or PWA, those start from $1,999.' },
                        { q: 'Will mobile optimisation help my Google rankings?', a: 'Absolutely. Google uses mobile-first indexing, which means your mobile site is what Google evaluates for rankings. Better mobile experience = better rankings.' },
                        { q: 'Can you fix my existing site for mobile?', a: 'Yes. We can optimise your existing site for mobile performance and usability. In some cases, a rebuild is more cost-effective — we\'ll advise you honestly.' },
                        { q: 'How do you test on mobile devices?', a: 'We test on real iPhones, Android phones, and tablets across multiple screen sizes and browsers. We don\'t just resize a desktop browser — we test the actual mobile experience.' },
                    ]}
                />

                {/* Lead Capture */}
                <section className="py-20 bg-dark text-white" id="lead-form">
                    <div className="max-w-xl mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Your Free Mobile Audit</h2>
                        <p className="text-gray-400 mb-8">
                            We&apos;ll test your website on real mobile devices and show you exactly what&apos;s costing you customers.
                        </p>
                        <LeadCaptureForm formName="service-mobile" ctaText="Get My Free Mobile Audit" showWebsite={true} darkMode={true} />
                    </div>
                </section>

                {/* Internal Links */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="mb-10">
                            <h3 className="text-lg font-bold mb-4">Related Services</h3>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/services/web-design" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Web Design</Link>
                                <Link href="/services/website-optimisation" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Website Optimisation</Link>
                                <Link href="/services/seo" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">SEO</Link>
                                <Link href="/services/conversion-rate-optimisation" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">CRO</Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Helpful Resources</h3>
                            <ul className="flex flex-col gap-2">
                                <li><Link href="/blog/best-website-design-for-small-businesses" className="text-primary hover:underline text-sm font-medium">Best Website Design for Small Businesses →</Link></li>
                                <li><Link href="/blog/how-to-get-more-leads-from-your-website" className="text-primary hover:underline text-sm font-medium">How to Get More Leads From Your Website →</Link></li>
                                <li><Link href="/tools/mobile-friendly-test" className="text-primary hover:underline text-sm font-medium">Free Mobile-Friendly Test →</Link></li>
                                <li><Link href="/tools/page-speed-checker" className="text-primary hover:underline text-sm font-medium">Free Page Speed Checker →</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
