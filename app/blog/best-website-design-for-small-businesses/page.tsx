import type { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import BlogArticleLayout from '../../../components/BlogArticleLayout'
import { articleSchema, breadcrumbSchema, SITE_URL } from '../../../lib/schema'
import Link from 'next/link'
import { fetchUnsplashImage } from '../../../lib/unsplash'
import UnsplashImage from '../../../components/UnsplashImage'

const SLUG = 'best-website-design-for-small-businesses'
const TITLE = 'Best Website Design for Small Businesses in 2026'
const DESCRIPTION = 'What makes a great small business website? Learn the design principles that actually generate leads and customers.'
const DATE = '2025-01-20'

export const metadata: Metadata = {
    title: `${TITLE} — Fullstack Forge`,
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
    openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, type: 'article' },
}

export default async function Article() {
    const [heroImage, midImage] = await Promise.all([
        fetchUnsplashImage('modern website design'),
        fetchUnsplashImage('user experience web design'),
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
                    readTime={7}
                    heroImage={heroImage}
                    relatedLinks={[
                        { url: '/website-design-for-small-business', label: 'Website Design for Small Business NZ' },
                        { url: '/', label: 'See Our Work' },
                        { url: '/blog/how-much-does-a-website-cost-in-nz', label: 'How Much Does a Website Cost in NZ?' },
                    ]}
                >
                    <h2>What Makes a &quot;Good&quot; Small Business Website?</h2>
                    <p>
                        A great small business website isn&apos;t about flashy animations or trendy design. It&apos;s about
                        <strong> converting visitors into customers</strong>. Every element should serve that goal.
                    </p>

                    <h2>The 7 Principles of High-Converting Small Business Design</h2>

                    <h3>1. Clear Value Proposition Above the Fold</h3>
                    <p>
                        Visitors decide within 3 seconds whether to stay or leave. Your headline must instantly communicate
                        what you do and why they should care. No vague taglines — be specific about the outcome you deliver.
                    </p>

                    <h3>2. Mobile-First Design</h3>
                    <p>
                        Over 60% of NZ web traffic is mobile. If your site doesn&apos;t work perfectly on phones, you&apos;re
                        losing the majority of your visitors. Design for mobile first, then scale up.
                    </p>

                    <h3>3. Fast Load Times</h3>
                    <p>
                        Every second of load time costs you 7% in conversions. Use optimised images, modern frameworks,
                        and quality hosting. Your site should load in under 2 seconds.
                    </p>

                    <h3>4. Strategic CTAs (Calls to Action)</h3>
                    <p>
                        Don&apos;t make visitors hunt for the next step. Every section should guide them toward a clear action —
                        whether that&apos;s calling you, filling out a form, or booking a consultation.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Clean, user-friendly website design focused on small business conversions"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h3>5. Social Proof and Trust Signals</h3>
                    <p>
                        Testimonials, reviews, case studies, and client logos build trust. If a visitor has never heard of
                        you, they need proof that you deliver results.
                    </p>

                    <h3>6. Simple, Scannable Layout</h3>
                    <p>
                        People scan, they don&apos;t read. Use short paragraphs, clear headings, bullet points, and plenty
                        of whitespace. Make key information impossible to miss.
                    </p>

                    <h3>7. SEO Built In</h3>
                    <p>
                        A beautiful website that nobody finds is useless. Proper meta tags, heading structure, fast load
                        times, and quality content give you a real shot at ranking on Google.
                    </p>

                    <h2>Examples That Get It Right</h2>
                    <p>
                        The best small business websites we&apos;ve built follow these exact principles. Check out our{' '}
                        <Link href="/#solutions" className="text-primary hover:underline">live demos</Link> to see
                        real examples of conversion-focused design in action.
                    </p>

                    <h2>Ready to Build Yours?</h2>
                    <p>
                        We build <Link href="/website-design-for-small-business" className="text-primary hover:underline">websites for small businesses</Link> starting
                        at $699. Every site follows these 7 principles — no exceptions.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
