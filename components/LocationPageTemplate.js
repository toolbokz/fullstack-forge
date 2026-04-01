import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'
import LeadCaptureForm from './LeadCaptureForm'
import ProofSection from './ProofSection'
import CTASection from './CTASection'
import FAQSection from './FAQSection'
import { getServicesByLocation, getLocationsByService, generateSeoContent } from '../lib/location-data'

/**
 * LocationPageTemplate — programmatic SEO page template.
 * Each service×location page gets unique content with no duplication.
 *
 * Props:
 * - service: service object from location-data.js
 * - location: location object from location-data.js
 * - faqs: array of {q, a} objects
 * - schemas: array of JSON-LD schema objects
 */
export default function LocationPageTemplate({ service, location, faqs, schemas }) {
    const seo = generateSeoContent(service, location)
    const cityServices = getServicesByLocation(location.slug)
    const serviceLocations = getLocationsByService(service.slug)

    // Other services in same city (exclude current)
    const otherCityServices = cityServices.filter((p) => p.service.slug !== service.slug)
    // Same service in other cities (exclude current)
    const otherLocations = serviceLocations.filter((p) => p.location.slug !== location.slug)

    return (
        <>
            {schemas && schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <Nav />
            <main>
                {/* ═══════ 1. LOCAL HERO ═══════ */}
                <section className="bg-dark text-white py-20 md:py-28">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                            {service.name} in {location.name}
                        </p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            {service.headline(location.name)}
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            {service.subheadline(location.name)}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#lead-form" className="btn btn-lg btn-cta-pulse">
                                Get a Free Website Audit
                            </a>
                            <Link href="/pricing" className="btn btn-outline-light btn-lg">
                                See Pricing
                            </Link>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm mt-8">
                            <span>✓ 7-Day Delivery</span>
                            <span>✓ Local SEO Included</span>
                            <span>✓ From $699 NZD</span>
                        </div>
                    </div>
                </section>

                {/* ═══════ 2. PROOF STATS ═══════ */}
                <ProofSection
                    heading={`Results We Deliver for ${location.name} Businesses`}
                    stats={service.proofStats}
                />

                {/* ═══════ 3. LOCAL PROBLEM ═══════ */}
                <section className="py-20">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                            Why Most {location.name} Businesses Struggle Online
                        </h2>
                        <div className="bg-red-50/50 border border-red-100 rounded-xl p-8">
                            <p className="text-gray-800 leading-relaxed text-lg">
                                {service.problem(location.name)}
                            </p>
                        </div>
                        <div className="mt-6 text-center">
                            <a href="#lead-form" className="text-primary font-semibold hover:underline">
                                See what&apos;s holding your website back — free audit →
                            </a>
                        </div>
                    </div>
                </section>

                {/* ═══════ 4. SOLUTION ═══════ */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                            How We Help {location.name} Businesses Get More Leads
                        </h2>
                        <p className="text-muted text-lg leading-relaxed mb-8">
                            {service.solution(location.name)}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
                                <div className="text-3xl mb-3">⚡</div>
                                <h3 className="font-bold mb-2">Fast Delivery</h3>
                                <p className="text-muted text-sm">Live in 5–7 business days. No 12-week timelines.</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
                                <div className="text-3xl mb-3">🔍</div>
                                <h3 className="font-bold mb-2">Local SEO Built In</h3>
                                <p className="text-muted text-sm">Optimised to rank for &ldquo;{service.name.toLowerCase()} {location.name}&rdquo; searches.</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
                                <div className="text-3xl mb-3">🎯</div>
                                <h3 className="font-bold mb-2">Conversion Focused</h3>
                                <p className="text-muted text-sm">Every element designed to turn visitors into paying customers.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════ 5. SEO CONTENT BLOCK ═══════ */}
                <section className="py-20">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                            {service.name} in {location.name} — What You Need to Know
                        </h2>
                        <div className="space-y-6 text-muted leading-relaxed">
                            <p>{seo.intro}</p>
                            <p>{seo.whyLocal}</p>
                            <p>{seo.approach}</p>
                        </div>
                    </div>
                </section>

                {/* ═══════ 6. MID-PAGE CTA ═══════ */}
                <CTASection
                    headline={`Stop Losing ${location.name} Customers to Your Competitors`}
                    body={seo.cta}
                    primaryCta={{ text: 'Get My Free Audit', href: '#lead-form' }}
                    secondaryCta={{ text: 'See Our Pricing', href: '/pricing' }}
                    variant="primary"
                />

                {/* ═══════ 7. FAQ ═══════ */}
                <FAQSection
                    heading={`${service.name} ${location.name} — Frequently Asked Questions`}
                    faqs={faqs}
                />

                {/* ═══════ 8. LEAD CAPTURE ═══════ */}
                <section className="py-20 bg-dark text-white" id="lead-form">
                    <div className="max-w-xl mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Get More {location.name} Customers From Your Website
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Tell us about your {location.name} business and we&apos;ll send you a free audit showing exactly what&apos;s holding you back — and how to fix it.
                        </p>
                        <LeadCaptureForm
                            formName={`${service.slug}-${location.slug}-lead`}
                            ctaText="Get My Free Audit"
                            showWebsite={true}
                            darkMode={true}
                        />
                    </div>
                </section>

                {/* ═══════ 9. INTERNAL LINKS ═══════ */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        {/* Other services in this city */}
                        {otherCityServices.length > 0 && (
                            <div className="mb-10">
                                <h3 className="text-lg font-bold mb-4">Other Services in {location.name}</h3>
                                <div className="flex flex-wrap gap-3">
                                    {otherCityServices.map((p) => (
                                        <Link
                                            key={p.slug}
                                            href={`/${p.slug}`}
                                            className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors"
                                        >
                                            {p.service.name} {p.location.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Same service in other cities */}
                        {otherLocations.length > 0 && (
                            <div className="mb-10">
                                <h3 className="text-lg font-bold mb-4">{service.name} in Other Cities</h3>
                                <div className="flex flex-wrap gap-3">
                                    {otherLocations.slice(0, 8).map((p) => (
                                        <Link
                                            key={p.slug}
                                            href={`/${p.slug}`}
                                            className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors"
                                        >
                                            {p.service.name} {p.location.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Blog links */}
                        <div>
                            <h3 className="text-lg font-bold mb-4">Helpful Resources</h3>
                            <ul className="flex flex-col gap-2">
                                <li><Link href="/blog/seo-for-small-business-nz" className="text-primary hover:underline text-sm font-medium">SEO for Small Business NZ — A Beginner&apos;s Guide →</Link></li>
                                <li><Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline text-sm font-medium">How Much Does a Website Cost in NZ? →</Link></li>
                                <li><Link href="/blog/how-to-get-more-leads-from-your-website" className="text-primary hover:underline text-sm font-medium">How to Get More Leads From Your Website →</Link></li>
                                <li><Link href="/blog/website-for-tradies-nz" className="text-primary hover:underline text-sm font-medium">Why Every NZ Tradie Needs a Website →</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
