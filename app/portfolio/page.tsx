import { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import UnsplashImage from '../../components/UnsplashImage'
import { fetchUnsplashImage } from '../../lib/unsplash'

export const metadata: Metadata = {
    title: 'Portfolio — Fullstack Forge',
    description:
        'Browse real websites we have built for NZ tradies and small businesses. E-commerce, service pages, calculators, and more.',
    alternates: { canonical: 'https://fullstack-forge.netlify.app/portfolio' },
}

const projects = [
    {
        name: 'E-Commerce app',
        desc: 'A full-featured e-commerce experience with product filtering, wishlists, and an optimised checkout flow — built for speed and conversions.',
        tech: ['Next.js', 'Tailwind CSS', 'Netlify'],
        url: 'https://comfy-store-nz.netlify.app/',
        query: 'modern furniture living room couch sofa',
        category: 'E-Commerce',
    },
    {
        name: 'Cleaning App',
        desc: 'A high-converting site for a NZ cleaning business with service-area pages, quote forms, and local SEO driving 20+ monthly leads.',
        tech: ['Next.js', 'Tailwind CSS', 'Netlify'],
        url: 'https://cleaning-site-001.netlify.app/',
        query: 'commercial cleaning office janitorial spray',
        category: 'Service Business',
    },
    {
        name: 'Accountant App',
        desc: 'A professional presence for an accounting firm — clear service breakdowns, trust signals, and a frictionless contact flow.',
        tech: ['Next.js', 'Tailwind CSS', 'Netlify'],
        url: 'https://accountant-good-for-business.netlify.app/',
        query: 'accountant calculator financial documents bookkeeping',
        category: 'Professional Services',
    },
    {
        name: 'Plumbers App',
        desc: 'From zero web presence to Page 1 on Google for local plumbing searches — with click-to-call, service pages, and a quick-quote form.',
        tech: ['Next.js', 'Tailwind CSS', 'Netlify'],
        url: 'https://plumbfix-site.netlify.app/',
        query: 'plumber professional service',
        category: 'Trades',
    },
    {
        name: 'Builders App',
        desc: 'A construction business site with project galleries, quote-request forms, and SEO-optimised service pages generating consistent leads.',
        tech: ['Next.js', 'Tailwind CSS', 'Netlify'],
        url: 'https://builders-app.netlify.app/',
        query: 'carpentry woodwork timber framing tools',
        category: 'Trades',
    },
    {
        name: 'Electricians App',
        desc: 'A fast, mobile-first site for an electrical business — designed for quick quote requests and local search visibility.',
        tech: ['Next.js', 'Tailwind CSS', 'Netlify'],
        url: 'https://electrician-app-101.netlify.app/',
        query: 'electrician professional service modern',
        category: 'Trades',
    },
    {
        name: 'Self-Help Bible App',
        desc: 'A community-driven platform with AI integration for a bible fellowship — blending modern technology with purposeful design.',
        tech: ['Next.js', 'Tailwind CSS', 'Vercel'],
        url: 'https://www.thewarriorscall.org/',
        query: 'open bible scripture faith worship',
        category: 'Community',
    },
    {
        name: 'Real Estate Calculator',
        desc: 'An interactive property calculator built for the NZ market — clean interface, instant results, and a polished user experience.',
        tech: ['Next.js', 'Tailwind CSS', 'Netlify'],
        url: 'https://real-estate-calculator-001.netlify.app/',
        query: 'real estate property modern house',
        category: 'Tool',
    },
]

export default async function PortfolioPage() {
    const images = await Promise.all(
        projects.map((p) => fetchUnsplashImage(p.query))
    )

    return (
        <>
            <Nav />
            <main>
                {/* ── Hero ── */}
                <section className="bg-dark text-white py-24 md:py-32">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                            Portfolio
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Real Websites. Real Results.
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            Every project below is a live, working website — built for real NZ businesses. Click through and see the quality for yourself.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                All sites live
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary"></span>
                                {projects.length} projects
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary"></span>
                                Built with Next.js
                            </span>
                        </div>
                    </div>
                </section>

                {/* ── Portfolio Grid ── */}
                <section className="py-20 md:py-28 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                            {projects.map((proj, idx) => {
                                const img = images[idx]
                                return (
                                    <a
                                        key={proj.name}
                                        href={proj.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 overflow-hidden"
                                    >
                                        {/* ── Thumbnail ── */}
                                        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#0d1f3c] to-[#0b5fff]">
                                            {img?.url ? (
                                                <img
                                                    src={img.url}
                                                    alt={`${proj.name} — website preview`}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                    loading={idx < 2 ? 'eager' : 'lazy'}
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <svg className="w-16 h-16 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                                    </svg>
                                                </div>
                                            )}
                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            {/* Category pill */}
                                            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
                                                {proj.category}
                                            </span>
                                            {/* Visit arrow — shown on hover */}
                                            <span className="absolute bottom-4 right-4 bg-primary text-white text-xs font-semibold px-4 py-2 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1.5">
                                                Visit Site
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                                </svg>
                                            </span>
                                        </div>

                                        {/* ── Card Body ── */}
                                        <div className="p-6 md:p-8">
                                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-200">
                                                {proj.name}
                                            </h2>
                                            <p className="text-muted text-sm md:text-[15px] leading-relaxed mb-5">
                                                {proj.desc}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {proj.tech.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* ── Bottom CTA ── */}
                <section className="py-20 md:py-28 bg-dark text-white">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready for a Website Like These?
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
                            Every project starts with a free audit. We&apos;ll show you exactly what your current site is missing — and how we&apos;d fix it.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-lg">
                                Get a Free Quote →
                            </Link>
                            <Link href="/pricing" className="btn btn-outline-light btn-lg">
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
