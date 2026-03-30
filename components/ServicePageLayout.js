import Link from 'next/link';
import LeadCaptureForm from './LeadCaptureForm';
import ToolSlider from './ToolSlider';
import { PixabayImage, PixabayVideo, PixabayImageGrid, PixabayVideoGrid, PixabayHeroVideo } from './PixabayMedia';

export default function ServicePageLayout({
    badge,
    headline,
    subheadline,
    keyword,
    features,
    faqs,
    caseStudies,
    relatedPages,
    relatedArticles,
    heroImage = null,
    images = [],
    video = null,
    heroVideo = null,
    sectionVideos = [],
}) {
    return (
        <div>
            {/* Hero — Video Background */}
            {heroVideo ? (
                <PixabayHeroVideo video={heroVideo}>
                    <div className="max-w-4xl mx-auto px-4 text-center text-white py-20 md:py-28">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                            {badge}
                        </p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            {headline}
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            {subheadline}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#lead-form" className="btn btn-lg">
                                Get a Free Website Audit
                            </a>
                            <Link href="/#solutions" className="btn btn-outline-light btn-lg">
                                View Live Demos
                            </Link>
                        </div>
                    </div>
                </PixabayHeroVideo>
            ) : (
                <section className="bg-dark text-white py-20 md:py-28">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                            {badge}
                        </p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            {headline}
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            {subheadline}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#lead-form" className="btn btn-lg">
                                Get a Free Website Audit
                            </a>
                            <Link href="/#solutions" className="btn btn-outline-light btn-lg">
                                View Live Demos
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Features / What You Get */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                        What You Get
                    </h2>
                    <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                        Every {keyword} we build is designed to generate leads and grow your business — not just look good.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f) => (
                            <div key={f.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <div className="text-3xl mb-3">{f.icon}</div>
                                <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                                <p className="text-muted text-sm">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            {caseStudies && caseStudies.length > 0 && (
                <section className="py-20 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                            Real Results for Real Businesses
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {caseStudies.map((c) => (
                                <div key={c.name} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                                    <p className="text-primary text-sm font-semibold mb-1">{c.industry}</p>
                                    <h3 className="text-lg font-bold mb-3">{c.name}</h3>
                                    <p className="text-muted text-sm mb-4">{c.description}</p>
                                    <div className="flex gap-4">
                                        {c.stats.map((s) => (
                                            <div key={s.label} className="text-center">
                                                <p className="text-2xl font-extrabold text-primary">{s.value}</p>
                                                <p className="text-xs text-muted">{s.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {c.url && (
                                        <a href={c.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline mt-4 inline-block">
                                            View Live Site
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Video Showcase Grid */}
            {sectionVideos && sectionVideos.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-xl md:text-2xl font-bold text-center mb-8">See What We Build</h2>
                        <PixabayVideoGrid videos={sectionVideos} columns={sectionVideos.length >= 3 ? 3 : 2} />
                    </div>
                </section>
            )}

            {/* Tool Slider */}
            <ToolSlider />

            {/* FAQ */}
            {faqs && faqs.length > 0 && (
                <section className="py-20">
                    <div className="max-w-2xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                            Frequently Asked Questions
                        </h2>
                        <div className="border-t border-gray-200">
                            {faqs.map((faq) => (
                                <details key={faq.q} className="border-b border-gray-200 group">
                                    <summary className="flex items-center justify-between py-5 cursor-pointer font-semibold text-gray-900 list-none">
                                        <span>{faq.q}</span>
                                        <span className="text-primary text-xl transition-transform duration-200 group-open:rotate-45">+</span>
                                    </summary>
                                    <p className="pb-5 text-muted text-sm leading-relaxed pr-8">{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Lead Capture */}
            <section className="py-20 bg-dark text-white" id="lead-form">
                <div className="max-w-xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Get Your Free Website Audit
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Tell us about your business and we&apos;ll send you a personalised plan to grow your online presence.
                    </p>

                    <LeadCaptureForm
                        formName="service-page-lead"
                        ctaText="Get My Free Audit"
                        showWebsite={true}
                        darkMode={true}
                    />
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    {relatedPages && relatedPages.length > 0 && (
                        <div className="mb-10">
                            <h3 className="text-lg font-bold mb-4">Related Services</h3>
                            <div className="flex flex-wrap gap-3">
                                {relatedPages.map((p) => (
                                    <Link key={p.url} href={p.url} className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">
                                        {p.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                    {relatedArticles && relatedArticles.length > 0 && (
                        <div>
                            <h3 className="text-lg font-bold mb-4">Helpful Resources</h3>
                            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                                {relatedArticles.map((a) => (
                                    <Link
                                        key={a.url}
                                        href={a.url}
                                        className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
                                    >
                                        <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#0d1f3c] to-[#0b5fff] relative">
                                            {a.thumbnail?.url ? (
                                                <img
                                                    src={a.thumbnail.url}
                                                    alt={a.thumbnail.alt || a.label}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <svg className="w-10 h-10 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <p className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                                {a.label}
                                            </p>
                                            <span className="text-xs text-primary font-medium mt-2 inline-block">
                                                Read article →
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
