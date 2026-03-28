import type { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import BlogArticleLayout from '../../../components/BlogArticleLayout'
import { articleSchema, breadcrumbSchema, SITE_URL } from '../../../lib/schema'
import { contentPlan } from '../../../lib/seo-data'
import Link from 'next/link'
import { fetchUnsplashImage } from '../../../lib/unsplash'
import UnsplashImage from '../../../components/UnsplashImage'

const SLUG = 'best-website-builder-for-small-business-nz'
const TITLE = 'Best Website Builder for Small Business NZ (2026 Comparison)'
const DESCRIPTION = 'Comparing Wix, Squarespace, Shopify, and custom-built options for NZ small businesses.'
const DATE = '2025-02-25'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

export async function generateMetadata(): Promise<Metadata> {
    const thumbnail = await fetchUnsplashImage(THUMBNAIL_QUERY)
    return {
        title: `${TITLE} — Fullstack Forge`,
        description: DESCRIPTION,
        alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
        openGraph: {
            title: TITLE,
            description: DESCRIPTION,
            url: `${SITE_URL}/blog/${SLUG}`,
            type: 'article',
            ...(thumbnail ? { images: [{ url: thumbnail.url, alt: thumbnail.alt }] } : {}),
        },
        twitter: {
            card: 'summary_large_image',
            title: TITLE,
            description: DESCRIPTION,
            ...(thumbnail ? { images: [thumbnail.url] } : {}),
        },
    }
}

export default async function Article() {
    const [heroImage, midImage] = await Promise.all([
        fetchUnsplashImage('website builder platform'),
        fetchUnsplashImage('custom web development coding'),
    ])

    const schemas = [
        articleSchema({ title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: DATE }),
        breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Blog', url: `${SITE_URL}/blog` },
            { name: TITLE, url: `${SITE_URL}/blog/${SLUG}` },
        ]),
    ]

    return (
        <>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <Nav />
            <main>
                <BlogArticleLayout
                    title={TITLE}
                    description={DESCRIPTION}
                    datePublished={DATE}
                    readTime={9}
                    heroImage={heroImage}
                    relatedLinks={[
                        { url: '/ecommerce-websites-nz', label: 'E-Commerce Websites NZ' },
                        { url: '/affordable-websites-nz', label: 'Affordable Websites NZ' },
                        { url: '/blog/diy-vs-professional-website', label: 'DIY vs Professional Website' },
                    ]}
                >
                    <h2>Quick Verdict</h2>
                    <p>
                        For most NZ small businesses that just need a professional online presence:{' '}
                        <strong>skip the builders entirely and get a custom site</strong>. It&apos;s cheaper long-term, faster,
                        and better for SEO. But if you insist on DIY, here&apos;s how the builders stack up.
                    </p>

                    <h2>The Contenders</h2>

                    <h3>Wix</h3>
                    <p><strong>Best for:</strong> Beginners who want maximum drag-and-drop flexibility.</p>
                    <ul>
                        <li>Easiest editor for complete beginners</li>
                        <li>500+ templates</li>
                        <li>$17–$35 NZD/month for business plans</li>
                        <li>Slow load times — significant SEO disadvantage</li>
                        <li>Can&apos;t switch templates after you start</li>
                    </ul>

                    <h3>Squarespace</h3>
                    <p><strong>Best for:</strong> Creatives and businesses that prioritise aesthetics.</p>
                    <ul>
                        <li>Beautiful, polished templates</li>
                        <li>Good for portfolios and restaurants</li>
                        <li>$27–$65 NZD/month</li>
                        <li>Limited customization compared to Wix</li>
                        <li>Better speed than Wix but still not fast</li>
                    </ul>

                    <h3>Shopify</h3>
                    <p><strong>Best for:</strong> E-commerce businesses selling physical products.</p>
                    <ul>
                        <li>Best-in-class e-commerce features</li>
                        <li>Handles payments, inventory, and shipping</li>
                        <li>$55–$399 NZD/month + transaction fees</li>
                        <li>Expensive for non-e-commerce sites</li>
                        <li>Blog and content features are basic</li>
                    </ul>

                    <h3>WordPress.org (Self-Hosted)</h3>
                    <p><strong>Best for:</strong> Tech-savvy users who want full control.</p>
                    <ul>
                        <li>Maximum flexibility and plugins</li>
                        <li>Requires hosting ($10–$30 NZD/month)</li>
                        <li>Steep learning curve</li>
                        <li>Needs regular updates and security maintenance</li>
                        <li>Can be fast if set up correctly, slow if not</li>
                    </ul>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Custom web development compared to DIY website builder platforms"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h3>Custom-Built (Next.js / React)</h3>
                    <p><strong>Best for:</strong> Businesses that want the best performance, SEO, and long-term value.</p>
                    <ul>
                        <li>Fastest possible load times</li>
                        <li>Best SEO performance</li>
                        <li>Free hosting on Netlify/Vercel</li>
                        <li>No monthly platform fees</li>
                        <li>Higher upfront cost ($699–$2,499 at Fullstack Forge)</li>
                        <li>You own everything — no lock-in</li>
                    </ul>

                    <h2>Cost Comparison Over 3 Years</h2>
                    <table>
                        <thead>
                            <tr><th>Platform</th><th>Upfront</th><th>Monthly</th><th>3-Year Total</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Wix (Business)</td><td>$0</td><td>$27</td><td>$972</td></tr>
                            <tr><td>Squarespace</td><td>$0</td><td>$40</td><td>$1,440</td></tr>
                            <tr><td>Shopify</td><td>$0</td><td>$55</td><td>$1,980</td></tr>
                            <tr><td>WordPress (hosted)</td><td>$100</td><td>$20</td><td>$820</td></tr>
                            <tr><td>Custom (Fullstack Forge)</td><td>$699</td><td>$0</td><td>$699</td></tr>
                        </tbody>
                    </table>

                    <h2>Our Recommendation</h2>
                    <p>
                        If your website is your main lead generation tool (and it should be), invest in a{' '}
                        <Link href="/affordable-websites-nz" className="text-primary hover:underline">custom-built site</Link>. It&apos;s
                        cheaper over time, faster, ranks better, and you own it completely.
                    </p>
                    <p>
                        Need e-commerce? Check our <Link href="/ecommerce-websites-nz" className="text-primary hover:underline">e-commerce packages</Link> for
                        a custom online store that doesn&apos;t charge transaction fees.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
