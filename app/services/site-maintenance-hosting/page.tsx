import { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import FAQSection from '../../../components/FAQSection'
import ProofSection from '../../../components/ProofSection'
import LeadCaptureForm from '../../../components/LeadCaptureForm'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Site Maintenance & Hosting NZ — Uptime, Security & Performance | Fullstack Forge',
    description: 'Managed website hosting and maintenance for NZ businesses. 99.9% uptime, daily backups, security monitoring, and performance optimisation — all handled for you.',
    keywords: ['website hosting nz', 'website maintenance nz', 'managed hosting nz', 'website security', 'website support nz'],
    openGraph: {
        title: 'Site Maintenance & Hosting NZ | Fullstack Forge',
        description: 'Managed website hosting and maintenance for NZ businesses. Uptime, security, and performance — handled.',
        url: 'https://fullstack-forge.netlify.app/services/site-maintenance-hosting',
    },
}

export default function SiteMaintenancePage() {
    return (
        <>
            <Nav />
            <div>
                {/* Hero */}
                <section className="bg-dark text-white py-20 md:py-28">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Site Maintenance & Hosting</p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Your Website Stays Fast, Secure, and Online — We Handle Everything
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            You shouldn&apos;t have to worry about your website breaking, loading slowly, or getting hacked. We manage your hosting, security, and performance so you can focus on running your business.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#lead-form" className="btn btn-lg btn-cta-pulse">Get Started Today</a>
                            <Link href="/tools/page-speed-checker" className="btn btn-outline-light btn-lg">Check Your Site Speed</Link>
                        </div>
                    </div>
                </section>

                {/* Problem */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">What Happens When You Ignore Your Website</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            A website isn&apos;t a set-and-forget asset. Without regular maintenance, things break — and it costs you real money.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: '💀', title: 'Downtime & Outages', desc: 'Cheap hosting goes down. When your site is offline, potential customers see an error page and call your competitor instead.' },
                                { icon: '🐌', title: 'Slow Performance', desc: 'Without regular optimisation, your site gets slower over time. Slow sites lose visitors — Google confirms that a 1-second delay reduces conversions by 7%.' },
                                { icon: '🔓', title: 'Security Vulnerabilities', desc: 'Outdated software, expired SSL certificates, and unpatched plugins leave your site open to hackers, malware, and data breaches.' },
                                { icon: '📉', title: 'SEO Rankings Drop', desc: 'Google penalises slow, insecure websites. Your hard-earned rankings slip away as technical issues pile up unnoticed.' },
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
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Managed Hosting & Maintenance — Done For You</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            We take care of everything behind the scenes so your website stays fast, secure, and always online.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: '🟢', title: '99.9% Uptime', desc: 'Enterprise-grade hosting infrastructure with redundancy. Your site stays online when it matters most.' },
                                { icon: '🔒', title: 'Security Monitoring', desc: '24/7 security scanning, SSL certificates, firewall protection, and malware removal if anything gets through.' },
                                { icon: '💾', title: 'Daily Backups', desc: 'Automated daily backups with one-click restore. If anything goes wrong, we can roll back in minutes.' },
                                { icon: '⚡', title: 'Speed Optimisation', desc: 'Ongoing performance monitoring and optimisation. We keep your site fast with CDN, caching, and image optimisation.' },
                                { icon: '🔄', title: 'Software Updates', desc: 'Regular platform, plugin, and dependency updates. We test everything before deploying to avoid breaking changes.' },
                                { icon: '🛟', title: 'Priority Support', desc: 'Something wrong? We\'re on it. Direct access to our team for quick fixes, content updates, and technical support.' },
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
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">What&apos;s Included in Every Plan</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            No surprises. No hidden fees. Complete website care — managed by our team.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                'Enterprise-grade hosting with 99.9% uptime SLA',
                                'SSL certificate management and renewal',
                                'Daily automated backups with 30-day retention',
                                'Security monitoring and malware scanning',
                                'Software and plugin updates',
                                'Performance monitoring and speed optimisation',
                                'CDN (Content Delivery Network) for global speed',
                                'Monthly uptime and performance reports',
                                'Content updates (text, images, minor changes)',
                                'Priority email and phone support',
                                'DDoS protection and firewall management',
                                'Emergency restore from backup within 1 hour',
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
                    heading="Reliable, Secure, and Fast — Guaranteed"
                    subheading="When your website just works, you can focus on what matters — running your business."
                    dark={true}
                    stats={[
                        { value: '99.9%', label: 'Uptime guarantee' },
                        { value: '<2s', label: 'Average load time' },
                        { value: '24/7', label: 'Security monitoring' },
                        { value: '<1hr', label: 'Emergency response time' },
                    ]}
                />

                {/* Process */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">How We Keep Your Site Running</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            Set it and forget it. We handle everything behind the scenes.
                        </p>
                        <div className="space-y-6">
                            {[
                                { step: '01', title: 'Onboarding & Migration', desc: 'We migrate your site to our managed hosting infrastructure, set up backups, SSL, and monitoring — zero downtime.' },
                                { step: '02', title: 'Continuous Monitoring', desc: 'We monitor your uptime, speed, and security 24/7. If something goes wrong, we know before you do.' },
                                { step: '03', title: 'Proactive Maintenance', desc: 'Regular software updates, security patches, performance optimisations, and backup verification — all handled automatically.' },
                                { step: '04', title: 'Monthly Reporting', desc: 'You get a clear monthly report showing uptime, speed, security status, and any work we did. Full transparency.' },
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
                    headline="When Was the Last Time You Checked Your Website?"
                    body="If you can't remember, things are probably already going wrong. Slow speeds, expired certificates, outdated plugins — they add up silently. Let us handle it."
                    primaryCta={{ text: 'Get Started Today', href: '#lead-form' }}
                    secondaryCta={{ text: 'Check Your Site Speed', href: '/tools/page-speed-checker' }}
                />

                {/* FAQ */}
                <FAQSection
                    heading="Hosting & Maintenance FAQ"
                    faqs={[
                        { q: 'How much does managed hosting cost?', a: 'Our managed hosting and maintenance plans start from $49/month. This includes hosting, backups, security, updates, and support. No hidden fees.' },
                        { q: 'Can you host a website built by someone else?', a: 'Yes, in most cases. We can migrate your existing website to our managed hosting and start maintaining it for you. We\'ll audit it first to make sure everything will work smoothly.' },
                        { q: 'What happens if my site goes down?', a: 'Our monitoring detects downtime within minutes. We investigate immediately and resolve the issue. For critical outages, we can restore from backup within 1 hour.' },
                        { q: 'Do you handle content updates?', a: 'Yes. Small content changes (updating text, swapping images, adding blog posts) are included in all plans. Larger structural changes are quoted separately.' },
                        { q: 'Is my data backed up?', a: 'Absolutely. We run automated daily backups with 30-day retention. Your data is stored securely in multiple locations for redundancy.' },
                        { q: 'What if I want to cancel?', a: 'No lock-in contracts. You can cancel anytime. We\'ll help you migrate your site to another provider if needed.' },
                    ]}
                />

                {/* Lead Capture */}
                <section className="py-20 bg-dark text-white" id="lead-form">
                    <div className="max-w-xl mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Managed Hosting & Maintenance</h2>
                        <p className="text-gray-400 mb-8">
                            Tell us about your website and we&apos;ll set up a maintenance plan that keeps it fast, secure, and always online.
                        </p>
                        <LeadCaptureForm formName="service-hosting" ctaText="Get Started" showWebsite={true} darkMode={true} />
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
                                <Link href="/services/ai-automation" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">AI Automation</Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Helpful Resources</h3>
                            <ul className="flex flex-col gap-2">
                                <li><Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline text-sm font-medium">How Much Does a Website Cost in NZ? →</Link></li>
                                <li><Link href="/blog/diy-vs-professional-website" className="text-primary hover:underline text-sm font-medium">DIY vs Professional Website — What to Know →</Link></li>
                                <li><Link href="/tools/page-speed-checker" className="text-primary hover:underline text-sm font-medium">Free Page Speed Checker →</Link></li>
                                <li><Link href="/tools/seo-audit" className="text-primary hover:underline text-sm font-medium">Free Website SEO Audit →</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
