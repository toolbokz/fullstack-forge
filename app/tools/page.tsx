import Link from 'next/link'
import { toolCategories, ToolIcon } from '../../lib/tools-data'
import { Metadata } from 'next'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
    title: 'Free Website Tools for NZ Businesses — Fullstack Forge',
    description: 'Free SEO audits, speed tests, ROI calculators, and more. Check your website health and find out how to get more leads — built for NZ businesses.',
    alternates: { canonical: 'https://fullstack-forge.netlify.app/tools' },
    keywords: ['free seo audit nz', 'website speed test', 'free website tools', 'seo checker nz', 'website audit tool'],
    openGraph: {
        title: 'Free Website Tools — Fullstack Forge',
        description: 'Free SEO audits, speed tests, ROI calculators, and more. Built for NZ businesses.',
        url: 'https://fullstack-forge.netlify.app/tools',
        images: [{ url: '/assets/fallback-image.png', width: 2560, height: 1440, alt: 'Free Website Tools — Fullstack Forge' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free Website Tools — Fullstack Forge',
        description: 'Free SEO audits, speed tests, ROI calculators, and more for NZ businesses.',
        images: ['/assets/fallback-image.png'],
    },
}

export default function ToolsIndexPage() {
    return (
        <>
            <Nav />
            <div>
                {/* Hero */}
                <section className="text-white py-20 md:py-28" style={{ background: 'linear-gradient(135deg, #0b1220 0%, #0d1f3c 50%, #0b2e6e 100%)' }}>
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Free Tools</p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                            Free Website Tools for NZ Businesses
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                            Check your website health, find SEO opportunities, and calculate your growth potential — all 100% free, no signup required.
                        </p>
                    </div>
                </section>

                {/* Tools Grid */}
                <section className="py-16 md:py-20">
                    <div className="max-w-5xl mx-auto px-4 space-y-16">
                        {toolCategories.map((category) => (
                            <div key={category.title}>
                                <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                    {category.tools.map((tool) => (
                                        <Link
                                            key={tool.slug}
                                            href={`/tools/${tool.slug}`}
                                            className={`group bg-white rounded-xl border p-5 hover:shadow-lg hover:border-primary/40 transition-all ${tool.highlight ? 'border-primary/30 ring-1 ring-primary/10' : 'border-gray-200'
                                                }`}
                                        >
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${tool.highlight ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-600 group-hover:bg-primary/10 group-hover:text-primary'
                                                } transition-colors`}>
                                                <ToolIcon icon={tool.icon} size={20} />
                                            </div>
                                            <h3 className="font-bold text-sm mb-1">{tool.shortName}</h3>
                                            <p className="text-xs text-muted leading-relaxed">{tool.description}</p>
                                            {tool.highlight && (
                                                <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                                                    Popular
                                                </span>
                                            )}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-16 text-white" style={{ background: 'linear-gradient(135deg, #0b1220 0%, #0d1f3c 50%, #0b2e6e 100%)' }}>
                    <div className="max-w-xl mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Want Us to Audit Your Website For Free?
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Get a personalised report with actionable recommendations from our team — not just automated scores.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/#audit" className="btn btn-lg btn-cta-pulse">Get My Free Website Audit</a>
                            <a href="/#contact" className="btn btn-outline-light btn-lg">Talk to Us Today</a>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}
