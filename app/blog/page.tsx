import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { breadcrumbSchema, SITE_URL } from '../../lib/schema'
import { contentPlan, blogCategories } from '../../lib/seo-data'
import { fetchUnsplashImage } from '../../lib/unsplash'
import { parseBlogParams, getPagePosts, buildBlogUrl, type SortOrder } from '../../lib/blog-helpers'

interface BlogPageProps {
    searchParams: Promise<Record<string, string | string[] | undefined>>
}

export async function generateMetadata({ searchParams }: BlogPageProps): Promise<Metadata> {
    const params = await searchParams
    const { page } = parseBlogParams(params)
    const canonical = page === 1 ? `${SITE_URL}/blog` : `${SITE_URL}${buildBlogUrl(page, 'newest')}`
    const title = page === 1
        ? 'Blog — Fullstack Forge | Website Tips for NZ Small Businesses'
        : `Blog — Page ${page} — Fullstack Forge`

    return {
        title,
        description: 'Practical guides and insights on website design, SEO, and lead generation for small businesses in New Zealand.',
        alternates: { canonical },
        openGraph: {
            title: page === 1 ? 'Blog — Fullstack Forge' : `Blog — Page ${page} — Fullstack Forge`,
            description: 'Website tips, SEO guides, and business growth strategies for NZ small businesses.',
            url: canonical,
            type: 'website',
            images: [{ url: '/assets/fallback-image.png', width: 2560, height: 1440, alt: 'Fullstack Forge Blog' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: page === 1 ? 'Blog — Fullstack Forge' : `Blog — Page ${page} — Fullstack Forge`,
            description: 'Website tips, SEO guides, and business growth strategies for NZ small businesses.',
            images: ['/assets/fallback-image.png'],
        },
    }
}

export default async function BlogIndex({ searchParams }: BlogPageProps) {
    const params = await searchParams
    const { page, order, totalPages, totalPosts } = parseBlogParams(params)
    const pagePosts = getPagePosts(order, page)

    const schema = breadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Blog', url: `${SITE_URL}/blog` },
    ])

    const collectionSchema = {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Blog — Fullstack Forge',
        description: 'Practical guides and insights on website design, SEO, and lead generation for small businesses in New Zealand.',
        url: `${SITE_URL}/blog`,
        mainEntity: {
            '@type': 'ItemList',
            itemListElement: contentPlan.map((article: any, i: number) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: `${SITE_URL}/blog/${article.slug}`,
                name: article.title,
            })),
        },
    }

    const thumbnails = await Promise.all(
        pagePosts.map((article: any) => fetchUnsplashImage(article.imageQuery))
    )

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
            <Nav />
            <main>
                <section className="text-white py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#0d1f3c] to-[#0b5fff]" />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">Blog</p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">Website Tips for NZ Small Businesses</h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Practical guides on web design, SEO, and turning your website into a lead-generating machine.
                        </p>
                    </div>
                </section>

                <section className="py-20">
                    <div className="max-w-5xl mx-auto px-4">
                        {/* Sort control + post count */}
                        <div className="flex items-center justify-between mb-8">
                            <p className="text-sm text-gray-500">
                                {totalPosts} articles{totalPages > 1 && <> &middot; Page {page} of {totalPages}</>}
                            </p>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500">Sort by</span>
                                <SortSelect currentOrder={order} currentPage={page} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {pagePosts.map((article: any, index: number) => {
                                const thumb = thumbnails[index]
                                const categoryLabel = article.category && (blogCategories as Record<string, { slug: string; label: string }>)[article.category]
                                    ? (blogCategories as Record<string, { slug: string; label: string }>)[article.category].label
                                    : (article.intent === 'commercial' ? 'Guide' : 'Article')
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
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary">
                                                    {categoryLabel}
                                                </span>
                                                {article.readTime && (
                                                    <span className="text-xs text-gray-400">{article.readTime} min read</span>
                                                )}
                                            </div>
                                            <h2 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                                                {article.title}
                                            </h2>
                                            <p className="text-muted text-sm mb-4">{article.description}</p>
                                            <div className="flex items-center justify-between">
                                                {article.datePublished && (
                                                    <time className="text-xs text-gray-400" dateTime={article.datePublished}>
                                                        {new Date(article.datePublished).toLocaleDateString('en-NZ', { day: 'numeric', month: 'short', year: 'numeric' })}
                                                    </time>
                                                )}
                                                <span className="text-primary text-sm font-semibold">
                                                    Read more →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <Pagination page={page} totalPages={totalPages} order={order} />
                        )}
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

/* ─── Sort Select (minimal client component inline) ─────────────── */
function SortSelect({ currentOrder, currentPage }: { currentOrder: SortOrder; currentPage: number }) {
    return (
        <div className="relative">
            <div className="flex gap-1">
                {([['newest', 'Newest First'], ['oldest', 'Oldest First']] as const).map(([value, label]) => (
                    value === currentOrder ? (
                        <span
                            key={value}
                            className="px-3 py-1.5 text-sm font-medium bg-primary text-white rounded-lg border border-primary"
                        >
                            {label}
                        </span>
                    ) : (
                        <Link
                            key={value}
                            href={buildBlogUrl(1, value)}
                            className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                        >
                            {label}
                        </Link>
                    )
                ))}
            </div>
        </div>
    )
}

/* ─── Pagination ────────────────────────────────────────────────── */
function Pagination({ page, totalPages, order }: { page: number; totalPages: number; order: SortOrder }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    return (
        <nav aria-label="Blog pagination" className="flex items-center justify-center gap-2 mt-12">
            {page > 1 ? (
                <Link
                    href={buildBlogUrl(page - 1, order)}
                    className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                >
                    ← Previous
                </Link>
            ) : (
                <span className="px-3 py-2 text-sm font-medium text-gray-300 bg-gray-50 border border-gray-100 rounded-lg cursor-not-allowed">
                    ← Previous
                </span>
            )}

            {pages.map((p) => (
                <Link
                    key={p}
                    href={buildBlogUrl(p, order)}
                    aria-current={p === page ? 'page' : undefined}
                    className={`px-3 py-2 text-sm font-medium rounded-lg border transition-colors ${p === page
                        ? 'bg-primary text-white border-primary'
                        : 'text-gray-700 bg-white border-gray-200 hover:border-primary hover:text-primary'
                        }`}
                >
                    {p}
                </Link>
            ))}

            {page < totalPages ? (
                <Link
                    href={buildBlogUrl(page + 1, order)}
                    className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                >
                    Next →
                </Link>
            ) : (
                <span className="px-3 py-2 text-sm font-medium text-gray-300 bg-gray-50 border border-gray-100 rounded-lg cursor-not-allowed">
                    Next →
                </span>
            )}
        </nav>
    )
}
