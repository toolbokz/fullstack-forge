import type { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import BlogArticleLayout from '../../../components/BlogArticleLayout'
import { articleSchema, breadcrumbSchema, SITE_URL } from '../../../lib/schema'
import { contentPlan } from '../../../lib/seo-data'
import { getArticleLinkPackageWithThumbnails } from '../../../lib/internal-links'
import Link from 'next/link'
import { fetchUnsplashImage } from '../../../lib/unsplash'
import UnsplashImage from '../../../components/UnsplashImage'

const SLUG = 'diy-vs-professional-website'
const TITLE = 'DIY Website vs Professional Website — Which Is Right for Your Business?'
const DESCRIPTION = 'Wix, Squarespace, or hiring a pro? We compare cost, quality, and ROI so you can make the right choice.'
const DATE = '2025-02-20'
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
        fetchUnsplashImage('web developer coding laptop'),
        fetchUnsplashImage('professional web development team'),
    ])

    const linkPackage = await getArticleLinkPackageWithThumbnails(SLUG)

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
                    slug={SLUG}
                    midCta={{
                        headline: 'Skip the Guesswork — Get a Website That Works',
                        body: 'Whether you\'re upgrading from DIY or starting fresh, we build websites that actually generate leads for NZ businesses.',
                    } as any}
                    linkPackage={linkPackage as any}
                    relatedLinks={[] as any}
                >
                    <h2>The Real Comparison</h2>
                    <p>
                        There&apos;s a time and place for DIY. And there&apos;s a time to hire a professional. Here&apos;s an honest
                        breakdown to help you decide.
                    </p>

                    <h2>DIY Website Builders (Wix, Squarespace, WordPress.com)</h2>
                    <h3>Pros</h3>
                    <ul>
                        <li>Low upfront cost ($0–$300/year)</li>
                        <li>Drag-and-drop interface — no coding needed</li>
                        <li>Templates get you started quickly</li>
                    </ul>
                    <h3>Cons</h3>
                    <ul>
                        <li>Monthly fees add up ($200–$500/year ongoing)</li>
                        <li>Limited customization — you&apos;re stuck with what the builder offers</li>
                        <li>Slow load times — builders add bloat you can&apos;t remove</li>
                        <li>SEO limitations — harder to rank against custom-built sites</li>
                        <li>Platform lock-in — you can&apos;t easily move your site elsewhere</li>
                        <li>Time cost — you spend hours fighting templates instead of running your business</li>
                    </ul>

                    <h2>Professional Website</h2>
                    <h3>Pros</h3>
                    <ul>
                        <li>Custom design tailored to your business and customers</li>
                        <li>Fast load times — optimised code, no builder bloat</li>
                        <li>Better SEO — proper structure, schema markup, optimised images</li>
                        <li>You own the code — no platform lock-in</li>
                        <li>Built for conversions — designed to generate leads, not just look pretty</li>
                        <li>Zero ongoing fees with free hosting options (Netlify, Vercel)</li>
                    </ul>
                    <h3>Cons</h3>
                    <ul>
                        <li>Higher upfront cost ($699–$2,499)</li>
                        <li>Need to find a reliable developer</li>
                    </ul>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Professional web development team building a custom business website"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h2>The ROI Question</h2>
                    <p>DIY seems cheaper — until you factor in:</p>
                    <ul>
                        <li><strong>Your time</strong> — 20+ hours building = $1,000+ of your time at NZ minimum wage</li>
                        <li><strong>Ongoing platform fees</strong> — $300–$500/year × 3 years = $900–$1,500</li>
                        <li><strong>Lost conversions</strong> — A slower, less optimised site means fewer customers</li>
                    </ul>
                    <p>
                        A <Link href="/affordable-websites-nz" className="text-primary hover:underline">$699 professional website</Link> with
                        free hosting often costs less over 3 years than a DIY builder — and generates more business.
                    </p>

                    <h2>When DIY Makes Sense</h2>
                    <p>DIY is fine if you&apos;re:</p>
                    <ul>
                        <li>Testing a business idea before committing</li>
                        <li>Running a hobby or personal blog</li>
                        <li>Genuinely enjoy building websites and have the time</li>
                    </ul>

                    <h2>When to Go Professional</h2>
                    <p>Hire a pro if you:</p>
                    <ul>
                        <li>Want your website to generate leads and revenue</li>
                        <li>Value your time and want to focus on your business</li>
                        <li>Need to rank on Google for local searches</li>
                        <li>Want a site that looks credible and builds trust</li>
                    </ul>

                    <h2>The Best of Both Worlds</h2>
                    <p>
                        At <Link href="/" className="text-primary hover:underline">Fullstack Forge</Link>, we offer professional
                        quality at DIY prices — starting at $699 with zero monthly fees. Best of both worlds.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
