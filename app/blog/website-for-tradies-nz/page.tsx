import type { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import BlogArticleLayout from '../../../components/BlogArticleLayout'
import { articleSchema, breadcrumbSchema, SITE_URL } from '../../../lib/schema'
import { contentPlan } from '../../../lib/seo-data'
import Link from 'next/link'
import { fetchUnsplashImage } from '../../../lib/unsplash'
import UnsplashImage from '../../../components/UnsplashImage'

const SLUG = 'website-for-tradies-nz'
const TITLE = 'Why Every Tradie in NZ Needs a Website in 2026'
const DESCRIPTION = 'Plumbers, electricians, builders — stop relying on referrals alone. A simple website can double your lead flow.'
const DATE = '2025-02-10'
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
        fetchUnsplashImage('construction worker tools'),
        fetchUnsplashImage('contractor business mobile phone'),
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
                        { url: '/website-design-for-small-business', label: 'Website Design for Small Business' },
                        { url: '/blog/website-for-cleaning-business-nz', label: 'Website for Cleaning Businesses NZ' },
                    ]}
                >
                    <h2>The &quot;Too Busy&quot; Myth</h2>
                    <p>
                        &quot;I get all my work through referrals, I don&apos;t need a website.&quot; We hear this from tradies every
                        week. And it&apos;s true — until your main referral source dries up, or you want to grow beyond
                        your current capacity.
                    </p>
                    <p>
                        A website doesn&apos;t replace word-of-mouth. It <strong>amplifies</strong> it. When someone refers you,
                        the first thing the new customer does is Google your name. What do they find?
                    </p>

                    <h2>What Kiwi Tradies Are Missing Out On</h2>
                    <p>There are thousands of monthly searches in NZ for:</p>
                    <ul>
                        <li>&quot;plumber [city]&quot; — 5,000+ searches/month</li>
                        <li>&quot;electrician near me&quot; — 3,000+ searches/month</li>
                        <li>&quot;builder [city]&quot; — 2,000+ searches/month</li>
                        <li>&quot;roofer [city]&quot; — 1,000+ searches/month</li>
                    </ul>
                    <p>Every one of those searches is a potential customer — going to your competitors.</p>

                    <h2>What a Tradie Website Needs</h2>
                    <p>Keep it simple. You don&apos;t need 20 pages. You need:</p>
                    <ol>
                        <li><strong>Homepage</strong> — What you do, where you work, how to contact you.</li>
                        <li><strong>Services list</strong> — Every service, clearly described. This helps Google show you for relevant searches.</li>
                        <li><strong>Photo gallery</strong> — Before/after shots of your best work. Tradies who show their work get more enquiries.</li>
                        <li><strong>Contact form + phone number</strong> — Make it dead simple to reach you. Click-to-call on mobile is essential.</li>
                        <li><strong>Google reviews widget</strong> — Show your star rating and best reviews right on your site.</li>
                    </ol>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Tradesman using mobile phone to manage business enquiries from their website"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h2>Real Numbers</h2>
                    <p>
                        A Christchurch plumber we worked with went from 0 to <strong>25 monthly enquiries</strong> within
                        8 weeks of launching their website. Total investment: $699. First job from the website paid for
                        the site 3x over.
                    </p>

                    <h2>Get Your Trade Website</h2>
                    <p>
                        Our <Link href="/affordable-websites-nz" className="text-primary hover:underline">$699 Starter package</Link> was
                        literally built for tradies. Professional 3-page site, quote form, local SEO, mobile-ready.
                        Live in a week. No ongoing fees.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
