import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import PageVideoHero from '../../components/PageVideoHero'
import { SITE_URL } from '../../lib/schema'

export const metadata: Metadata = {
    title: 'About Fullstack Forge — Websites That Get NZ Tradies More Jobs',
    description:
        'Meet the developer behind Fullstack Forge. I build high-converting websites, SEO systems, and AI-powered lead generation for tradies and small businesses across New Zealand.',
    alternates: { canonical: `${SITE_URL}/about` },
    openGraph: {
        title: 'About Fullstack Forge',
        description:
            'I build websites that actually generate jobs for NZ tradies. Learn how Fullstack Forge delivers fast, conversion-focused websites with SEO and AI automation built in.',
        url: `${SITE_URL}/about`,
        type: 'website',
        images: [{ url: '/assets/headshot.jpg', width: 400, height: 400, alt: 'Zachariah Pini — Fullstack Forge' }],
    },
    twitter: {
        card: 'summary',
        title: 'About Fullstack Forge',
        description:
            'I build websites that actually generate jobs for NZ tradies and small businesses.',
        images: ['/assets/headshot.jpg'],
    },
}

export default function AboutPage() {
    return (
        <>
            <Nav />
            <main>
                {/* ═══════ HERO ═══════ */}
                <PageVideoHero videoUrl="/assets/about-hero.mp4">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                        <div className="shrink-0">
                            <Image
                                src="/assets/headshot.jpg"
                                alt="Zachariah Pini — Fullstack Forge"
                                width={200}
                                height={200}
                                priority
                                className="rounded-2xl border-2 border-white/20 shadow-2xl object-cover"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                                About Fullstack Forge
                            </p>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 text-white">
                                I Build Websites That Actually Generate Jobs
                            </h1>
                            <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed">
                                Most web designers make things look pretty. I make things that bring in
                                customers — fast, SEO-optimised websites and AI-powered systems built
                                specifically for tradies and small businesses in New Zealand.
                            </p>
                        </div>
                    </div>
                </PageVideoHero>

                {/* ═══════ MY STORY ═══════ */}
                <section className="py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                            The Short Version
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            Self-Taught. Obsessed With Results.
                        </h2>
                        <div className="prose prose-lg prose-gray max-w-none">
                            <p>
                                I&apos;m Zachariah — a self-taught full-stack developer based in New Zealand.
                                I didn&apos;t take the traditional path. No computer-science degree, no agency
                                career ladder. I taught myself to code because I wanted to build things
                                that actually work — systems that solve real problems for real people.
                            </p>
                            <p>
                                Over the years I&apos;ve gone deep into React, Next.js, Node.js, databases,
                                server infrastructure, SEO, and — more recently — AI and automation. Not
                                because they&apos;re trendy, but because they let me deliver outcomes that
                                most agencies can&apos;t: a website that doesn&apos;t just exist, but actively
                                brings in leads, day after day.
                            </p>
                            <p>
                                I started Fullstack Forge because I saw too many small businesses paying
                                thousands for slow, bloated websites built on page builders — sites that
                                looked okay but didn&apos;t rank, didn&apos;t convert, and didn&apos;t generate a
                                single extra phone call. That felt like a problem worth fixing.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ═══════ WHAT MAKES ME DIFFERENT ═══════ */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6">
                        <div className="text-center mb-14">
                            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                                Why Fullstack Forge
                            </p>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Not Another Web Design Agency
                            </h2>
                            <p className="text-muted text-lg max-w-2xl mx-auto">
                                There&apos;s no shortage of people who can build a website. Here&apos;s why the
                                businesses I work with keep coming back.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                            {[
                                {
                                    icon: '🎯',
                                    title: 'Conversion-First Thinking',
                                    body: 'Every page, every section, every button is designed to turn visitors into enquiries. I don\'t build brochures — I build lead machines.',
                                },
                                {
                                    icon: '⚡',
                                    title: 'Fast Delivery — Live in 7 Days',
                                    body: 'No months of back-and-forth. Your site goes live within a week, fully optimised and ready to generate work.',
                                },
                                {
                                    icon: '🤖',
                                    title: 'AI + Automation Advantage',
                                    body: 'I integrate AI-powered tools for lead qualification, automated follow-ups, and smart content — things most web designers can\'t even spell.',
                                },
                                {
                                    icon: '📈',
                                    title: 'SEO Built In From Day One',
                                    body: 'Technical SEO, local keywords, structured data, fast load times. Your site is built to rank, not just to look good in a portfolio.',
                                },
                            ].map((card) => (
                                <div
                                    key={card.title}
                                    className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
                                >
                                    <div className="text-3xl mb-4">{card.icon}</div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
                                    <p className="text-muted text-sm leading-relaxed">{card.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════ PROOF / CAPABILITY ═══════ */}
                <section className="py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                            Under the Hood
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            What I Build With
                        </h2>
                        <div className="prose prose-lg prose-gray max-w-none mb-10">
                            <p>
                                I work across the full stack — front-end, back-end, infrastructure,
                                and everything in between. Every project runs on modern, battle-tested
                                technology:
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {[
                                'React & Next.js',
                                'Node.js & APIs',
                                'Tailwind CSS',
                                'PostgreSQL & Prisma',
                                'Netlify & Vercel',
                                'Stripe Payments',
                                'Google Analytics & Search Console',
                                'OpenAI & AI APIs',
                                'Automated Email Systems',
                            ].map((tech) => (
                                <div
                                    key={tech}
                                    className="flex items-center gap-2.5 bg-gray-50 rounded-xl px-4 py-3 text-sm font-medium text-gray-700"
                                >
                                    <span className="text-primary font-bold">✓</span>
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════ WHO I HELP ═══════ */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                            Who This Is For
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            I Work With People Who Want More Customers
                        </h2>
                        <p className="text-muted text-lg max-w-2xl mx-auto mb-12">
                            If you run a small business in New Zealand and your website isn&apos;t bringing
                            in work, we should talk.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: '🔧',
                                    title: 'Tradies',
                                    body: 'Plumbers, electricians, builders, painters, landscapers — anyone who needs the phone ringing with local jobs.',
                                },
                                {
                                    icon: '🏪',
                                    title: 'Local Businesses',
                                    body: 'Cafés, salons, gyms, mechanics, cleaning companies — any service business that relies on local customers.',
                                },
                                {
                                    icon: '🚀',
                                    title: 'Growing Operators',
                                    body: 'Small teams scaling up who need a website and systems that grow with them — not one that holds them back.',
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm"
                                >
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-muted text-sm leading-relaxed">{item.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════ CTA ═══════ */}
                <section className="py-20 bg-gradient-to-br from-[#0b1220] via-[#0d1f3c] to-[#0b5fff] text-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Get More Customers From Your Website?
                        </h2>
                        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
                            Get a free website audit with real data — no sales pitch, no obligation.
                            I&apos;ll show you exactly what&apos;s costing you leads and how to fix it.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/#audit"
                                className="btn btn-lg btn-cta-pulse text-lg px-10 py-4"
                            >
                                Get My Free Audit
                            </Link>
                            <Link
                                href="/#contact"
                                className="btn btn-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 text-lg px-10 py-4 rounded-xl transition-all duration-200"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
