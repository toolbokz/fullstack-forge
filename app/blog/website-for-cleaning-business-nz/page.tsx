import type { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import BlogArticleLayout from '../../../components/BlogArticleLayout'
import { articleSchema, breadcrumbSchema, SITE_URL } from '../../../lib/schema'
import Link from 'next/link'
import { fetchUnsplashImage } from '../../../lib/unsplash'
import UnsplashImage from '../../../components/UnsplashImage'

const SLUG = 'website-for-cleaning-business-nz'
const TITLE = 'Website for Cleaning Business NZ — Get More Bookings Online'
const DESCRIPTION = 'How a professional website helps cleaning businesses in NZ generate consistent bookings and grow beyond word-of-mouth.'
const DATE = '2025-02-05'

export const metadata: Metadata = {
    title: `${TITLE} — Fullstack Forge`,
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
    openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, type: 'article' },
}

export default async function Article() {
    const [heroImage, midImage] = await Promise.all([
        fetchUnsplashImage('professional cleaning service'),
        fetchUnsplashImage('cleaning service online booking'),
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
                        { url: '/web-design-christchurch', label: 'Web Design Christchurch' },
                        { url: '/blog/website-for-tradies-nz', label: 'Why Every Tradie Needs a Website' },
                    ]}
                >
                    <h2>Why Cleaning Businesses Need a Website</h2>
                    <p>
                        Most cleaning businesses in NZ rely on word-of-mouth and Trade Me listings. That works — until it
                        doesn&apos;t. A website gives you a <strong>predictable, consistent source of new bookings</strong> that
                        you control.
                    </p>

                    <h2>What Customers Search For</h2>
                    <p>Every day, Kiwis search Google for terms like:</p>
                    <ul>
                        <li>&quot;house cleaning [city]&quot;</li>
                        <li>&quot;commercial cleaning near me&quot;</li>
                        <li>&quot;end of tenancy cleaning [city]&quot;</li>
                        <li>&quot;office cleaning service NZ&quot;</li>
                    </ul>
                    <p>
                        If you don&apos;t have a website optimised for these searches, your competitors are getting those calls.
                    </p>

                    <h2>What Your Cleaning Website Needs</h2>
                    <ol>
                        <li><strong>Services page</strong> — List every service you offer with clear pricing or &quot;from&quot; prices.</li>
                        <li><strong>Service areas</strong> — Name the suburbs and cities you cover. This helps with local SEO.</li>
                        <li><strong>Instant quote form</strong> — Let customers describe their needs and get a quote fast.</li>
                        <li><strong>Before/after photos</strong> — Visual proof of your results builds trust immediately.</li>
                        <li><strong>Reviews and testimonials</strong> — Real feedback from real customers.</li>
                        <li><strong>Google Business Profile link</strong> — Connect your website to your Google listing for maximum visibility.</li>
                    </ol>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Professional cleaning business generating online bookings through their website"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h2>Real Example: Everclean Christchurch</h2>
                    <p>
                        We built a website for a Christchurch-based cleaning company that went from zero online presence
                        to 40+ monthly enquiries within 3 months. The site featured local SEO, a quote form, and
                        before/after galleries.
                    </p>

                    <h2>Get Started for $699</h2>
                    <p>
                        Our <Link href="/affordable-websites-nz" className="text-primary hover:underline">Starter package at $699</Link> is
                        perfect for cleaning businesses. You get a professional 3-page site with a quote form, local SEO,
                        and mobile optimization — live in 7 days.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
