import { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import CTASection from '../../../components/CTASection'
import FAQSection from '../../../components/FAQSection'
import ProofSection from '../../../components/ProofSection'
import LeadCaptureForm from '../../../components/LeadCaptureForm'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'AI Automation for NZ Businesses — Automate Leads & Follow-Ups | Fullstack Forge',
    description: 'AI-powered automation for NZ tradies and small businesses. Automate lead capture, follow-ups, booking, and customer communication. Never miss a lead again.',
    alternates: { canonical: 'https://fullstack-forge.netlify.app/services/ai-automation' },
    keywords: ['ai automation nz', 'business automation', 'ai chatbot nz', 'lead automation', 'automated follow-ups'],
    openGraph: {
        title: 'AI Automation NZ — Automate Leads & Follow-Ups | Fullstack Forge',
        description: 'AI-powered automation for NZ tradies. Automate lead capture, follow-ups, and booking workflows.',
        url: 'https://fullstack-forge.netlify.app/services/ai-automation',
    },
}

export default function AIAutomationPage() {
    return (
        <>
            <Nav />
            <div>
                {/* Hero */}
                <section className="bg-dark text-white py-20 md:py-28">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">AI Automation</p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Capture Leads and Follow Up — Even While You Sleep
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            You&apos;re on the tools all day. You can&apos;t answer every call, reply to every email, or follow up every enquiry. AI automation handles it all — so you never miss a lead again.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#lead-form" className="btn btn-lg btn-cta-pulse">Get a Free Automation Audit</a>
                            <Link href="/tools/lead-loss-calculator" className="btn btn-outline-light btn-lg">See What You&apos;re Losing</Link>
                        </div>
                    </div>
                </section>

                {/* Problem */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">You&apos;re Too Busy to Chase Every Lead</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            Most tradies and small business owners lose leads every day — not because they don&apos;t want the work, but because they can&apos;t respond fast enough.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: '📞', title: 'Missed Calls & Messages', desc: 'You\'re on a job site or with another customer. A new lead calls, gets no answer, and calls your competitor instead. This happens every single day.' },
                                { icon: '⏰', title: 'Slow Follow-Up', desc: 'Research shows that responding within 5 minutes makes you 21x more likely to win the job. Most businesses take hours — or never respond at all.' },
                                { icon: '📋', title: 'Manual Admin Overload', desc: 'You spend evenings quoting, emailing, and scheduling. That\'s unpaid work that eats into your time with family and rest.' },
                                { icon: '💸', title: 'Leads Fall Through the Cracks', desc: 'Without a system, enquiries get lost in emails, texts, and voicemails. Every forgotten lead is money left on the table.' },
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
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">AI That Works While You Work</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            We build custom AI automation systems that capture leads, respond instantly, and follow up automatically — so you can focus on doing the work.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { icon: '🤖', title: 'AI Chatbot', desc: 'A smart chatbot on your website that answers questions, qualifies leads, and books appointments 24/7 — even at 2am.' },
                                { icon: '📧', title: 'Automated Follow-Up', desc: 'Instant email and SMS follow-ups when a lead comes through. They get a response in seconds, not hours.' },
                                { icon: '📅', title: 'Smart Booking', desc: 'Let customers book directly into your calendar. No back-and-forth emails or phone tag.' },
                                { icon: '🔔', title: 'Instant Notifications', desc: 'Get notified immediately on your phone when a new lead comes in. Never miss an opportunity.' },
                                { icon: '📊', title: 'Lead Scoring', desc: 'AI prioritises your hottest leads so you focus on the ones most likely to convert into paying jobs.' },
                                { icon: '🔄', title: 'CRM Integration', desc: 'All leads automatically flow into your CRM or spreadsheet. No manual data entry or copy-pasting.' },
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
                            A complete automation system built around your business — not a cookie-cutter template.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                'Custom AI chatbot trained on your services',
                                'Automated email and SMS follow-up sequences',
                                'Online booking system integration',
                                'Lead capture forms with instant notifications',
                                'CRM setup and lead management workflow',
                                'Automated quote request processing',
                                'After-hours response system',
                                'Review request automation',
                                'Monthly performance reporting',
                                'Ongoing optimisation and support',
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
                    heading="The Impact of Automation"
                    subheading="When leads are captured and followed up instantly, everything changes."
                    dark={true}
                    stats={[
                        { value: '21x', label: 'More likely to convert with 5-min response' },
                        { value: '0', label: 'Missed leads after-hours' },
                        { value: '80%', label: 'Less time on admin' },
                        { value: '24/7', label: 'Lead capture — even while you sleep' },
                    ]}
                />

                {/* Process */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">How We Set Up Your Automation</h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            We handle everything. You tell us how your business works, and we build the system around it.
                        </p>
                        <div className="space-y-6">
                            {[
                                { step: '01', title: 'Business Discovery', desc: 'We learn how you get leads, how you follow up, and where the gaps are. We map out your ideal customer journey.' },
                                { step: '02', title: 'System Design', desc: 'We design your automation workflow — chatbot scripts, follow-up sequences, booking flows, and notification rules.' },
                                { step: '03', title: 'Build & Test', desc: 'We build everything, connect it to your website and tools, and test every scenario to make sure nothing falls through.' },
                                { step: '04', title: 'Launch & Optimise', desc: 'We go live, monitor performance, and continuously improve the system based on real data and conversion rates.' },
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
                    headline="How Many Leads Did You Miss This Week?"
                    body="Every unanswered call and slow follow-up is revenue walking out the door. Let AI handle it — you focus on doing the work you love."
                    primaryCta={{ text: 'Get a Free Automation Audit', href: '#lead-form' }}
                    secondaryCta={{ text: 'Calculate Your Lost Revenue', href: '/tools/lead-loss-calculator' }}
                />

                {/* FAQ */}
                <FAQSection
                    heading="AI Automation FAQ"
                    faqs={[
                        { q: 'Will an AI chatbot sound robotic to my customers?', a: 'No. Modern AI chatbots are trained on natural language and can be customised to match your brand voice. Customers often can\'t tell the difference — and they appreciate getting an instant response.' },
                        { q: 'How much does AI automation cost?', a: 'Our automation packages start from $299/month. The exact price depends on the complexity of your workflow and how many channels (website, email, SMS) you want to automate.' },
                        { q: 'Will this work for my type of business?', a: 'Yes. We\'ve built automation for tradies, cleaning companies, landscapers, and service businesses across NZ. If you get enquiries and need to follow up, automation will help.' },
                        { q: 'Can I still handle leads manually when I want to?', a: 'Absolutely. The automation handles the initial response and follow-up. You can jump in at any point to take over the conversation.' },
                        { q: 'What happens if the AI can\'t answer a question?', a: 'The chatbot is trained to handle common questions. If it encounters something outside its training, it smoothly hands off to you with a notification.' },
                        { q: 'How long does it take to set up?', a: 'Most automation systems are live within 1–2 weeks. Simple chatbot setups can be ready in a few days.' },
                    ]}
                />

                {/* Lead Capture */}
                <section className="py-20 bg-dark text-white" id="lead-form">
                    <div className="max-w-xl mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Get Your Free Automation Audit</h2>
                        <p className="text-gray-400 mb-8">
                            We&apos;ll review your current lead capture and follow-up process and show you exactly where automation can save you time and win you more jobs.
                        </p>
                        <LeadCaptureForm formName="service-ai-automation" ctaText="Get My Free Audit" showWebsite={true} darkMode={true} />
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
                                <Link href="/services/seo" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">SEO</Link>
                                <Link href="/services/site-maintenance-hosting" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">Site Maintenance & Hosting</Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Helpful Resources</h3>
                            <ul className="flex flex-col gap-2">
                                <li><Link href="/blog/how-to-get-more-leads-from-your-website" className="text-primary hover:underline text-sm font-medium">How to Get More Leads From Your Website →</Link></li>
                                <li><Link href="/blog/how-to-get-customers-from-your-website" className="text-primary hover:underline text-sm font-medium">How to Get Customers From Your Website →</Link></li>
                                <li><Link href="/tools/lead-loss-calculator" className="text-primary hover:underline text-sm font-medium">Lead Loss Calculator — How Much Are You Losing? →</Link></li>
                                <li><Link href="/tools/conversion-rate-estimator" className="text-primary hover:underline text-sm font-medium">Conversion Rate Estimator →</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
