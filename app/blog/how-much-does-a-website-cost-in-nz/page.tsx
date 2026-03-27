import type { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import BlogArticleLayout from '../../../components/BlogArticleLayout'
import { articleSchema, breadcrumbSchema, SITE_URL } from '../../../lib/schema'
import Link from 'next/link'
import { fetchUnsplashImage } from '../../../lib/unsplash'
import UnsplashImage from '../../../components/UnsplashImage'

const SLUG = 'how-much-does-a-website-cost-in-nz'
const TITLE = 'How Much Does a Website Cost in NZ? (2026 Price Guide)'
const DESCRIPTION = 'A complete breakdown of website costs in New Zealand for 2026 — from DIY to agency pricing and what you actually need.'
const DATE = '2025-01-15'

export const metadata: Metadata = {
    title: `${TITLE} — Fullstack Forge`,
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
    openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, type: 'article' },
}

export default async function Article() {
    const [heroImage, midImage] = await Promise.all([
        fetchUnsplashImage('website design pricing'),
        fetchUnsplashImage('web development cost comparison'),
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
                        { url: '/affordable-websites-nz', label: 'Affordable Websites NZ — From $699' },
                        { url: '/website-design-for-small-business', label: 'Website Design for Small Business' },
                        { url: '/blog/diy-vs-professional-website', label: 'DIY vs Professional Website' },
                    ]}
                >
                    <h2>The Short Answer</h2>
                    <p>
                        In New Zealand, a small business website costs anywhere from <strong>$0 (DIY)</strong> to <strong>$20,000+ (agency)</strong>.
                        The sweet spot for most small businesses is <strong>$699–$2,499</strong> for a professionally built, conversion-focused website.
                    </p>

                    <h2>Website Cost Breakdown (2026)</h2>
                    <table>
                        <thead>
                            <tr><th>Option</th><th>Cost Range</th><th>Best For</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>DIY (Wix, Squarespace)</td><td>$0–$500/year</td><td>Hobby sites, testing ideas</td></tr>
                            <tr><td>Freelancer</td><td>$500–$3,000</td><td>Small businesses wanting quality</td></tr>
                            <tr><td>Boutique Studio</td><td>$2,000–$8,000</td><td>Custom design + strategy</td></tr>
                            <tr><td>Agency</td><td>$8,000–$30,000+</td><td>Large brands, complex features</td></tr>
                        </tbody>
                    </table>

                    <h2>What Affects the Price?</h2>
                    <p>Five main factors drive website cost in NZ:</p>
                    <ol>
                        <li><strong>Number of pages</strong> — A 3-page site costs less than a 20-page site.</li>
                        <li><strong>Design complexity</strong> — Template-based vs fully custom design.</li>
                        <li><strong>Functionality</strong> — Contact forms vs e-commerce vs booking systems.</li>
                        <li><strong>Content creation</strong> — Do you provide copy and images, or does the developer?</li>
                        <li><strong>SEO and marketing</strong> — Basic SEO is standard; advanced SEO is extra.</li>
                    </ol>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Comparing website development costs and pricing options in New Zealand"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h2>Hidden Costs to Watch For</h2>
                    <p>Many providers advertise low upfront prices but lock you into ongoing fees:</p>
                    <ul>
                        <li><strong>Monthly hosting fees</strong> — $20–$100/month adds up. Free hosting exists (Netlify, Vercel).</li>
                        <li><strong>Monthly &quot;maintenance&quot; fees</strong> — Often unnecessary for static sites.</li>
                        <li><strong>Platform lock-in</strong> — Some builders won&apos;t let you export your site.</li>
                        <li><strong>Revision charges</strong> — Get clarity on what&apos;s included upfront.</li>
                    </ul>

                    <h2>What We Recommend</h2>
                    <p>
                        For most NZ small businesses, a <Link href="/affordable-websites-nz" className="text-primary hover:underline">professionally built website starting at $699</Link> delivers
                        the best ROI. You get a fast, mobile-optimized site with SEO built in — no monthly fees, no lock-in.
                    </p>
                    <p>
                        If you need e-commerce, our <Link href="/ecommerce-websites-nz" className="text-primary hover:underline">e-commerce packages</Link> start at $1,199 and include
                        everything you need to sell online.
                    </p>

                    <h2>Bottom Line</h2>
                    <p>
                        Don&apos;t overpay for a website. And don&apos;t cheap out either. The right investment is a site that <em>pays for itself</em> by
                        generating leads and customers. That&apos;s what we build at <Link href="/" className="text-primary hover:underline">Fullstack Forge</Link>.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
