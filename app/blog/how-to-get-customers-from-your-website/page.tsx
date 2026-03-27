import type { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import BlogArticleLayout from '../../../components/BlogArticleLayout'
import { articleSchema, breadcrumbSchema, SITE_URL } from '../../../lib/schema'
import Link from 'next/link'
import { fetchUnsplashImage } from '../../../lib/unsplash'
import UnsplashImage from '../../../components/UnsplashImage'

const SLUG = 'how-to-get-customers-from-your-website'
const TITLE = 'How to Get Customers From Your Website (Proven Strategy)'
const DESCRIPTION = 'Your website gets traffic but no leads? Here\'s the exact strategy to turn visitors into paying customers.'
const DATE = '2025-02-01'

export const metadata: Metadata = {
    title: `${TITLE} — Fullstack Forge`,
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
    openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, type: 'article' },
}

export default async function Article() {
    const [heroImage, midImage] = await Promise.all([
        fetchUnsplashImage('digital marketing strategy'),
        fetchUnsplashImage('website analytics dashboard'),
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
                        { url: '/', label: 'See How We Build Lead-Generating Websites' },
                        { url: '/website-design-for-small-business', label: 'Website Design for Small Business' },
                        { url: '/blog/how-to-get-more-leads-from-your-website', label: 'How to Get More Leads Without More Traffic' },
                    ]}
                >
                    <h2>Why Most Websites Don&apos;t Generate Customers</h2>
                    <p>
                        Most small business websites are digital brochures — they look nice but don&apos;t do anything.
                        They have no clear call-to-action, no lead capture, and no reason for a visitor to take the next step.
                    </p>

                    <h2>The 5-Step Website Customer Machine</h2>

                    <h3>Step 1: Get Found (SEO)</h3>
                    <p>
                        If nobody visits your site, nothing else matters. Optimise for local search terms your
                        customers actually use. Focus on 2–3 keywords per page. Make sure Google can crawl and index your content.
                    </p>

                    <h3>Step 2: Make a Strong First Impression</h3>
                    <p>
                        Your headline and hero section have 3 seconds to hook the visitor. Be specific about what you do,
                        who you help, and what outcome you deliver. Avoid jargon.
                    </p>

                    <h3>Step 3: Build Trust Instantly</h3>
                    <p>
                        Add testimonials, case studies, and specific results above the fold. Show faces, real names,
                        and concrete numbers. &quot;Increased bookings by 3x&quot; beats &quot;Great service!&quot; every time.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Website analytics showing customer conversion metrics and engagement data"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h3>Step 4: Make the Next Step Obvious</h3>
                    <p>
                        Every section should have a clear CTA. &quot;Get a Free Quote,&quot; &quot;Book a Call,&quot; &quot;See Our Work&quot; —
                        don&apos;t make visitors guess what to do next.
                    </p>

                    <h3>Step 5: Capture Leads, Not Just Pageviews</h3>
                    <p>
                        A contact form isn&apos;t enough. Offer something valuable in exchange for an email — a free audit,
                        a guide, a consultation. Build your list and follow up.
                    </p>

                    <h2>The Websites We Build Follow This Exact Framework</h2>
                    <p>
                        Every site from <Link href="/" className="text-primary hover:underline">Fullstack Forge</Link> is
                        built as a customer-generating machine — not a digital brochure. We design for conversions first,
                        then make it look great.
                    </p>
                    <p>
                        See our <Link href="/website-design-for-small-business" className="text-primary hover:underline">small business website packages</Link> to
                        get started.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
