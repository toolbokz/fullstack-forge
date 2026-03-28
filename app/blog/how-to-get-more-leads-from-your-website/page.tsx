import type { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import BlogArticleLayout from '../../../components/BlogArticleLayout'
import { articleSchema, breadcrumbSchema, SITE_URL } from '../../../lib/schema'
import { contentPlan } from '../../../lib/seo-data'
import Link from 'next/link'
import { fetchUnsplashImage } from '../../../lib/unsplash'
import UnsplashImage from '../../../components/UnsplashImage'

const SLUG = 'how-to-get-more-leads-from-your-website'
const TITLE = 'How to Get More Leads From Your Website (Without More Traffic)'
const DESCRIPTION = "You don't always need more traffic — you need better conversion. Here are 7 proven tactics."
const DATE = '2025-03-01'
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
        fetchUnsplashImage('lead generation business growth'),
        fetchUnsplashImage('call to action website design'),
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
                    readTime={8}
                    heroImage={heroImage}
                    relatedLinks={[
                        { url: '/', label: 'See How We Build Lead-Generating Websites' },
                        { url: '/website-design-for-small-business', label: 'Website Design for Small Business' },
                        { url: '/blog/how-to-get-customers-from-your-website', label: 'How to Get Customers From Your Website' },
                    ]}
                >
                    <h2>The Conversion Problem</h2>
                    <p>
                        Most small business websites convert at <strong>1–2%</strong>. That means out of 100 visitors, only
                        1 or 2 take action. The websites we build target <strong>5–10% conversion rates</strong>. The
                        difference? These 7 tactics.
                    </p>

                    <h2>7 Ways to Convert More Visitors Into Leads</h2>

                    <h3>1. Add a Lead Magnet</h3>
                    <p>
                        Stop asking people to &quot;contact us.&quot; Instead, offer something valuable for free — a checklist,
                        audit, or guide. &quot;Get Your Free Website Audit&quot; converts 5x better than &quot;Contact Us.&quot;
                    </p>

                    <h3>2. Use Specific, Benefit-Driven Headlines</h3>
                    <p>
                        &quot;We Build Websites&quot; → bad. &quot;We Build Websites That Generate Customers for Small Businesses&quot; → good.
                        Tell visitors exactly what outcome they&apos;ll get.
                    </p>

                    <h3>3. Add Social Proof Near Every CTA</h3>
                    <p>
                        Place testimonials, ratings, or &quot;trusted by X businesses&quot; next to your call-to-action buttons.
                        This removes friction right at the moment of decision.
                    </p>

                    <h3>4. Reduce Form Fields</h3>
                    <p>
                        Every extra field reduces completions by 10%. Ask for name and email only. Add optional fields
                        if needed, but never require more than you must.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Effective call-to-action design driving website lead conversions"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h3>5. Make Your CTA Stand Out</h3>
                    <p>
                        Use a contrasting colour for your main button. Make it big enough to tap on mobile. Use action
                        words: &quot;Get My Free Audit&quot; beats &quot;Submit&quot; every time.
                    </p>

                    <h3>6. Fix Your Page Speed</h3>
                    <p>
                        Every second of load time costs 7% in conversions. Compress images, eliminate unnecessary scripts,
                        and use fast hosting. Test with Google PageSpeed Insights.
                    </p>

                    <h3>7. Add Multiple CTAs Per Page</h3>
                    <p>
                        Don&apos;t just put a contact form at the bottom. Add CTAs in the hero, mid-page, and after key
                        content sections. Different visitors convert at different points.
                    </p>

                    <h2>The Compound Effect</h2>
                    <p>
                        Improving from 2% to 5% conversion rate means <strong>2.5x more leads from the same traffic</strong>.
                        That&apos;s more revenue without spending a dollar on ads.
                    </p>

                    <h2>Need Help?</h2>
                    <p>
                        Every <Link href="/website-design-for-small-business" className="text-primary hover:underline">website we build</Link> is
                        optimised for conversions using these exact tactics. If your current site isn&apos;t generating leads,
                        let&apos;s fix that.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
