import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { breadcrumbSchema, SITE_URL } from '../../lib/schema'
import { contentPlan } from '../../lib/seo-data'
import { fetchUnsplashImage } from '../../lib/unsplash'

export const metadata: Metadata = {
    title: 'Blog — Fullstack Forge | Website Tips for NZ Small Businesses',
    description: 'Practical guides and insights on website design, SEO, and lead generation for small businesses in New Zealand.',
    alternates: {
        canonical: `${SITE_URL}/blog`,
    },
    openGraph: {
        title: 'Blog — Fullstack Forge',
        description: 'Website tips, SEO guides, and business growth strategies for NZ small businesses.',
        url: `${SITE_URL}/blog`,
        type: 'website',
    },
}

export default async function BlogIndex() {
    const schema = breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Blog', url: `${SITE_URL}/blog` },
    ])

    const thumbnails = await Promise.all(
        contentPlan.map((article) => fetchUnsplashImage(article.imageQuery))
    )

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <Nav />
            <main>
                <section className="bg-dark text-white py-20">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Blog</p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">Website Tips for NZ Small Businesses</h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Practical guides on web design, SEO, and turning your website into a lead-generating machine.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {contentPlan.map((article, index) => {
                                const thumb = thumbnails[index]
                                return (
                                    <Link
                                        key={article.slug}
                                        href={`/blog/${article.slug}`}
                                        className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-primary hover:shadow-md transition-all"
                                    >
                                        {thumb && thumb.url ? (
                                            <div className="relative h-48 w-full overflow-hidden">
                                                <Image
                                                    src={thumb.smallUrl || thumb.url}
                                                    alt={article.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                            </div>
                                        ) : (
                                            <div className="h-48 w-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                                                <svg className="w-12 h-12 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                                                {article.intent === 'commercial' ? 'Guide' : 'Article'}
                                            </span>
                                            <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                                {article.title}
                                            </h2>
                                            <p className="text-muted text-sm mb-4">{article.description}</p>
                                            {thumb && thumb.photographer && (
                                                <span className="text-xs text-gray-400 block mb-2">
                                                    Photo by {thumb.photographer} on Unsplash
                                                </span>
                                            )}
                                            <span className="text-primary text-sm font-semibold">
                                                Read more →
                                            </span>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-primary text-white text-center">
                    <div className="max-w-2xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Grow Your Business Online?</h2>
                        <p className="text-blue-100 mb-8">Get a free website audit and see exactly how to turn your site into a lead machine.</p>
                        <Link href="/#audit" className="btn btn-lg bg-white text-primary hover:bg-gray-100 font-bold">
                            Get My Free Audit
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
