import Link from 'next/link'
import { locations, services } from '../lib/location-data'

export default function Footer() {
    // Group: top 6 cities for the footer grid
    const topCities = locations.slice(0, 6)

    return (
        <footer className="footer bg-dark text-white pt-16 pb-8">
            <div className="container">
                {/* ─── FOOTER CTA ─────────────────────────────── */}
                <div className="text-center mb-16 pb-12 border-b border-white/10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Get More Leads From Your Website?</h3>
                    <p className="text-gray-400 mb-6 max-w-lg mx-auto">Free audit. Real data. No BS. We&apos;ll show you exactly what&apos;s holding your site back.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/#audit" className="btn btn-cta-pulse">Get My Free Audit</Link>
                        <Link href="/pricing" className="btn btn-outline-light">See Pricing</Link>
                    </div>
                </div>

                {/* ─── MAIN GRID ──────────────────────────────── */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12 text-left">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
                        <h4 className="font-bold text-lg mb-3">Fullstack Forge</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            We help NZ tradies and local businesses get found on Google and generate a consistent flow of leads — without relying on word-of-mouth.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://www.facebook.com/fullstackforgeNZ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a href="https://x.com/fullstack_forge" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="X">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="https://github.com/toolbokz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/fullstack-forge" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-3 text-white/80">Services</h4>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li><Link href="/web-design-christchurch" className="text-gray-400 hover:text-white transition-colors">Web Design NZ</Link></li>
                            <li><Link href="/ecommerce-websites-nz" className="text-gray-400 hover:text-white transition-colors">E-Commerce Websites</Link></li>
                            <li><Link href="/website-design-for-small-business" className="text-gray-400 hover:text-white transition-colors">Small Business Websites</Link></li>
                            <li><Link href="/affordable-websites-nz" className="text-gray-400 hover:text-white transition-colors">Affordable Websites</Link></li>
                        </ul>
                    </div>

                    {/* Free Tools */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-3 text-white/80">Free Tools</h4>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li><Link href="/tools/seo-audit" className="text-gray-400 hover:text-white transition-colors">SEO Audit</Link></li>
                            <li><Link href="/tools/page-speed-checker" className="text-gray-400 hover:text-white transition-colors">Speed Checker</Link></li>
                            <li><Link href="/tools/lead-loss-calculator" className="text-gray-400 hover:text-white transition-colors">Lead Loss Calculator</Link></li>
                            <li><Link href="/tools/website-roi-calculator" className="text-gray-400 hover:text-white transition-colors">ROI Calculator</Link></li>
                            <li><Link href="/tools" className="text-gray-400 hover:text-white transition-colors">All Tools →</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-3 text-white/80">Resources</h4>
                        <ul className="flex flex-col gap-2 text-sm">
                            <li><Link href="/#audit" className="text-gray-400 hover:text-white transition-colors">Free Website Audit</Link></li>
                            <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                            <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">Get in Touch</Link></li>
                        </ul>
                    </div>

                    {/* Top Service Areas */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-3 text-white/80">Web Design By City</h4>
                        <ul className="flex flex-col gap-2 text-sm">
                            {topCities.map((loc) => (
                                <li key={loc.slug}>
                                    <Link href={`/web-design-${loc.slug}`} className="text-gray-400 hover:text-white transition-colors">
                                        Web Design {loc.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SEO By City */}
                    <div>
                        <h4 className="font-bold text-sm uppercase tracking-wider mb-3 text-white/80">SEO By City</h4>
                        <ul className="flex flex-col gap-2 text-sm">
                            {topCities.map((loc) => (
                                <li key={loc.slug}>
                                    <Link href={`/seo-${loc.slug}`} className="text-gray-400 hover:text-white transition-colors">
                                        SEO {loc.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ─── ALL SERVICE AREAS ACCORDION ────────────── */}
                <details className="mb-12 border border-white/10 rounded-lg">
                    <summary className="cursor-pointer px-6 py-4 text-sm font-semibold text-white/80 hover:text-white transition-colors">
                        View All Service Areas ({locations.length} Cities × {services.length} Services)
                    </summary>
                    <div className="px-6 pb-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-2 text-xs">
                        {services.map((svc) => (
                            <div key={svc.slug}>
                                <h5 className="font-bold text-white/70 mt-3 mb-1">{svc.name}</h5>
                                {locations.map((loc) => (
                                    <Link
                                        key={`${svc.slug}-${loc.slug}`}
                                        href={`/${svc.slug}-${loc.slug}`}
                                        className="block text-gray-500 hover:text-white transition-colors py-0.5"
                                    >
                                        {svc.shortName} {loc.name}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </details>

                {/* ─── COPYRIGHT ──────────────────────────────── */}
                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                    <span>&copy; {new Date().getFullYear()} Fullstack Forge. All rights reserved.</span>
                    <div className="flex gap-4">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
