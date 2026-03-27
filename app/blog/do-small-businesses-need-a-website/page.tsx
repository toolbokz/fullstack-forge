import type { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import BlogArticleLayout from '../../../components/BlogArticleLayout'
import { articleSchema, breadcrumbSchema, SITE_URL } from '../../../lib/schema'
import Link from 'next/link'
import { fetchUnsplashImage } from '../../../lib/unsplash'
import UnsplashImage from '../../../components/UnsplashImage'

const SLUG = 'do-small-businesses-need-a-website'
const TITLE = 'Do Small Businesses Need a Website in 2026? (The Real Answer)'
const DESCRIPTION = 'With social media everywhere, do you still need a website? We break down the data and the real impact on revenue.'
const DATE = '2025-01-25'

export const metadata: Metadata = {
    title: `${TITLE} — Fullstack Forge`,
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
    openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, type: 'article' },
}

export default async function Article() {
    const [heroImage, midImage] = await Promise.all([
        fetchUnsplashImage('small business owner laptop'),
        fetchUnsplashImage('online business digital growth'),
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
                    readTime={6}
                    heroImage={heroImage}
                    relatedLinks={[
                        { url: '/affordable-websites-nz', label: 'Affordable Websites NZ — From $699' },
                        { url: '/', label: 'Fullstack Forge Homepage' },
                        { url: '/blog/how-to-get-customers-from-your-website', label: 'How to Get Customers From Your Website' },
                    ]}
                >
                    <h2>The Short Answer: Yes</h2>
                    <p>
                        In 2026, <strong>97% of consumers search online</strong> before buying from a local business.
                        If you don&apos;t have a website, you&apos;re invisible to almost all of them.
                    </p>

                    <h2>&quot;But I Have Facebook/Instagram&quot;</h2>
                    <p>
                        Social media is great for visibility, but it&apos;s rented land. You don&apos;t control the algorithm,
                        the reach, or the platform. A website is your <strong>owned digital asset</strong> — it works 24/7,
                        ranks on Google, and you control every pixel.
                    </p>
                    <p>Key differences:</p>
                    <ul>
                        <li><strong>Google shows websites, not Facebook pages</strong> — when someone searches &quot;plumber near me,&quot; websites rank.</li>
                        <li><strong>You control the experience</strong> — no distracting competitor ads or algorithm changes.</li>
                        <li><strong>Credibility</strong> — 75% of consumers judge a business&apos;s credibility by its website.</li>
                        <li><strong>Lead capture</strong> — forms, booking systems, and chat that you own and control.</li>
                    </ul>

                    <h2>What Happens Without a Website</h2>
                    <p>Businesses without a website face real consequences:</p>
                    <ul>
                        <li>Lost leads to competitors who <em>do</em> have one</li>
                        <li>No way to rank on Google for local searches</li>
                        <li>Harder to build trust with new customers</li>
                        <li>Reliance on word-of-mouth alone limits growth</li>
                    </ul>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Small business establishing an online presence for digital growth"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h2>It Doesn&apos;t Have to Be Expensive</h2>
                    <p>
                        A professional website doesn&apos;t cost $10,000. At Fullstack Forge, we build{' '}
                        <Link href="/affordable-websites-nz" className="text-primary hover:underline">professional sites starting at $699</Link> —
                        no monthly fees, no lock-in. You can have a site live within a week.
                    </p>

                    <h2>The Bottom Line</h2>
                    <p>
                        In 2026, not having a website isn&apos;t &quot;keeping it simple&quot; — it&apos;s leaving money on the table.
                        Even a simple 3-page site gives you a foundation to grow from.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
