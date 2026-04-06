import type { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import BlogArticleLayout from '../../../components/BlogArticleLayout'
import { articleSchema, breadcrumbSchema, faqSchema, SITE_URL } from '../../../lib/schema'
import { contentPlan } from '../../../lib/seo-data'
import { getArticleLinkPackageWithThumbnails } from '../../../lib/internal-links'
import Link from 'next/link'
import { fetchUnsplashImage } from '../../../lib/unsplash'
import UnsplashImage from '../../../components/UnsplashImage'
import ToolEmbed from '../../../components/tools/ToolEmbed'

const SLUG = 'website-for-cleaning-business-nz'
const TITLE = 'Website for Cleaning Business NZ — Get More Bookings Online'
const DESCRIPTION = 'The complete guide to cleaning business websites in NZ: what pages you need, how to rank locally, and how to turn Google searches into booked jobs.'
const DATE = '2025-02-05'
const UPDATED = '2026-04-04'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

const FAQ_ITEMS = [
    { q: 'How much does a website for a cleaning business cost in NZ?', a: 'A professional cleaning business website typically costs $1,000–$2,000 NZD depending on the number of pages and features. A 3–5 page site with a quote form, local SEO, and mobile optimisation is enough for most cleaning businesses starting out.' },
    { q: 'Do I need online booking for a cleaning website?', a: 'A quote request form is more practical than full online booking for most NZ cleaning businesses. Cleaning jobs vary in scope, so a form that captures the property type, size, and service needed lets you provide an accurate quote before confirming a booking.' },
    { q: 'How do I get my cleaning business to show up on Google?', a: 'Claim your Google Business Profile, add your services and service areas, collect Google reviews from customers, and build a website with location-specific pages. Consistency between your website and Google Business Profile is key for local rankings.' },
    { q: 'Should I list prices on my cleaning website?', a: 'Yes — at minimum, show "from" prices for your main services. Customers searching for cleaning services expect to see pricing. Even approximate ranges help qualify leads and save time on enquiries that don\'t match your pricing.' },
    { q: 'Can a cleaning business website work without social media?', a: 'Yes. Google search is the primary source of new cleaning enquiries in NZ. A well-optimised website with Google Business Profile integration can generate consistent leads without any social media presence.' },
]

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
            images: [thumbnail ? { url: thumbnail.url, alt: thumbnail.alt, width: 1080, height: 720 } : { url: "/assets/fallback-image.png", alt: "Fullstack Forge", width: 1200, height: 630 }],
        },
        twitter: {
            card: 'summary_large_image',
            title: TITLE,
            description: DESCRIPTION,
            images: [thumbnail ? thumbnail.url : "/assets/fallback-image.png"],
        },
    }
}

export default async function Article() {
    const [heroImage, midImage] = await Promise.all([
        fetchUnsplashImage('professional cleaning service'),
        fetchUnsplashImage('cleaning service online booking'),
    ])

    const linkPackage = await getArticleLinkPackageWithThumbnails(SLUG)

    const schemas = [
        articleSchema({ title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: DATE, dateModified: UPDATED }),
        breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Blog', url: `${SITE_URL}/blog` },
            { name: TITLE, url: `${SITE_URL}/blog/${SLUG}` },
        ]),
        faqSchema(FAQ_ITEMS),
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
                    readTime={10}
                    heroImage={heroImage}
                    slug={SLUG}
                    showLeadCalculator={true}
                    midCta={{
                        headline: 'Get a Website That Books Cleaning Jobs 24/7',
                        body: 'Professional cleaning business websites from $1,000. Quote forms, local SEO, and everything you need to grow.',
                    } as any}
                    linkPackage={linkPackage as any}
                    relatedLinks={[] as any}
                >
                    <h2>Why Cleaning Businesses in NZ Need a Website</h2>
                    <p>
                        Most cleaning businesses in NZ rely on word-of-mouth, Trade Me listings, and Facebook. That works
                        — until a competitor with a proper website starts ranking for &quot;house cleaning [your city]&quot;
                        and picks up the enquiries you never knew existed.
                    </p>
                    <p>
                        A website gives you a <strong>predictable, consistent source of new bookings</strong> that you
                        control — one that works 24/7, even while you&apos;re on a job.
                    </p>
                    <p>
                        The cleaning industry in NZ is competitive but under-digitalised. Most operators still don&apos;t
                        have a website, which means there&apos;s a genuine first-mover advantage for those who do.
                    </p>

                    <h2>What Cleaning Customers Actually Search For</h2>
                    <p>Every day, Kiwis search Google for terms like:</p>
                    <table>
                        <thead>
                            <tr><th>Search Term</th><th>Intent</th><th>Your Page</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>&quot;house cleaning [city]&quot;</td><td>Looking for residential cleaning</td><td>Homepage or residential service page</td></tr>
                            <tr><td>&quot;commercial cleaning near me&quot;</td><td>Office or business cleaning</td><td>Commercial cleaning service page</td></tr>
                            <tr><td>&quot;end of tenancy cleaning [city]&quot;</td><td>Bond clean before moving out</td><td>Dedicated end-of-tenancy page</td></tr>
                            <tr><td>&quot;cleaning company quotes [city]&quot;</td><td>Ready to get pricing</td><td>Quote form / pricing page</td></tr>
                            <tr><td>&quot;carpet cleaning [city]&quot;</td><td>Specific service need</td><td>Specialist service page</td></tr>
                        </tbody>
                    </table>
                    <p>
                        If you don&apos;t have a website optimised for these searches, your competitors are getting those
                        calls instead. And the customers searching these terms have <strong>the highest intent to book</strong> — they&apos;re
                        not browsing, they&apos;re ready to hire.
                    </p>

                    <h2>The Pages Every Cleaning Business Website Needs</h2>

                    <h3>1. Homepage: Your Shopfront</h3>
                    <p>
                        Your homepage needs to answer three questions in the first 3 seconds: <em>What do you do? Where do you
                            operate? How do I get a quote?</em>
                    </p>
                    <ul>
                        <li>Headline: &quot;Professional House Cleaning in [City] — Get a Free Quote&quot;</li>
                        <li>A prominent quote form or click-to-call button</li>
                        <li>3–5 Google review stars or testimonials</li>
                        <li>List of your core services (residential, commercial, end-of-tenancy)</li>
                    </ul>

                    <h3>2. Services Page(s): One Page Per Service Type</h3>
                    <p>
                        Don&apos;t lump everything onto one page. Each service type (residential, commercial, end-of-tenancy,
                        carpet cleaning) should have its own page with:
                    </p>
                    <ul>
                        <li>What&apos;s included in the service</li>
                        <li>&quot;From&quot; pricing or a pricing table (customers expect to see this)</li>
                        <li>Before/after photos specific to that service</li>
                        <li>A CTA to request a quote</li>
                    </ul>
                    <p>
                        Separate pages rank independently on Google, so a dedicated &quot;end of tenancy cleaning
                        Christchurch&quot; page has a much better chance of ranking than a generic services list.
                    </p>

                    <h3>3. Service Areas Page</h3>
                    <p>
                        Name the suburbs and cities you cover explicitly. This is critical for local SEO. A simple list works:
                        &quot;We provide house cleaning services across Christchurch including Riccarton, Fendalton, Merivale,
                        Ilam, St Albans, and Hornby.&quot;
                    </p>

                    <h3>4. Quote Request Form</h3>
                    <p>
                        For cleaning businesses, a structured quote form works better than a generic contact form.
                        Include fields for:
                    </p>
                    <ul>
                        <li>Property type (house, apartment, office)</li>
                        <li>Number of bedrooms/bathrooms or square footage</li>
                        <li>Service type (regular, one-off, end-of-tenancy)</li>
                        <li>Preferred date</li>
                        <li>Contact details</li>
                    </ul>
                    <p>
                        This gives you enough information to provide an accurate quote without back-and-forth — which
                        saves you time and gets the customer booked faster.
                    </p>

                    <h3>5. Reviews and Trust Signals</h3>
                    <p>
                        Cleaning is a trust-heavy service — customers are letting you into their home. Display Google
                        reviews prominently, show before/after photos, mention how long you&apos;ve been operating,
                        and highlight if you&apos;re insured and police-checked. These details matter more in cleaning
                        than almost any other trade.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Professional cleaning business generating online bookings through their website"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h2>Pricing: What to Show on Your Website</h2>
                    <p>
                        One of the biggest debates for cleaning businesses: should you show pricing? <strong>Yes —
                            at minimum, show &quot;from&quot; prices.</strong> Here&apos;s a format that works:
                    </p>
                    <table>
                        <thead>
                            <tr><th>Service</th><th>From Price</th><th>Typical Range</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Regular house clean (3-bed)</td><td>$120</td><td>$120–$200</td></tr>
                            <tr><td>Deep clean (3-bed)</td><td>$250</td><td>$250–$400</td></tr>
                            <tr><td>End of tenancy (3-bed)</td><td>$300</td><td>$300–$500</td></tr>
                            <tr><td>Commercial (small office)</td><td>$80/visit</td><td>$80–$150/visit</td></tr>
                            <tr><td>Carpet cleaning (per room)</td><td>$50</td><td>$50–$80</td></tr>
                        </tbody>
                    </table>
                    <p>
                        Showing prices filters out tyre-kickers and attracts customers who are seriously ready to book.
                        It also builds trust — transparency signals professionalism.
                    </p>

                    <h2>Local SEO for Cleaning Businesses: The Essentials</h2>
                    <p>
                        Ranking a cleaning website on Google requires the same fundamentals as any local business, with
                        a few industry-specific priorities. For a full deep dive, see our guide to{' '}
                        <Link href="/blog/cleaning-business-seo-nz" className="text-primary hover:underline">
                            cleaning business SEO in NZ
                        </Link>.
                    </p>
                    <ul>
                        <li>
                            <strong>Google Business Profile:</strong> Claim it, fill every field, add photos of your work
                            weekly, and respond to all reviews. This is the single most impactful thing you can do for
                            local visibility.
                        </li>
                        <li>
                            <strong>Consistent NAP:</strong> Your business name, address, and phone number should be
                            identical everywhere — website, Google, Facebook, Yellow Pages NZ, NoCowboys.
                        </li>
                        <li>
                            <strong>City + service in titles:</strong> Your page title should include both, e.g.,
                            &quot;House Cleaning Christchurch — Professional Residential Cleaning.&quot;
                        </li>
                        <li>
                            <strong>Google reviews:</strong> After every job, send a text with your Google review link.
                            Businesses with 20+ reviews consistently outrank those with fewer. For more on local SEO strategy,
                            read our{' '}
                            <Link href="/blog/seo-for-small-business-nz" className="text-primary hover:underline">
                                SEO guide for NZ small businesses
                            </Link>.
                        </li>
                    </ul>

                    <h2>Real Example: Christchurch Cleaning Company</h2>
                    <p>
                        We built a website for a Christchurch-based cleaning company that was running entirely on
                        word-of-mouth and Trade Me. The site included:
                    </p>
                    <ul>
                        <li>Separate pages for residential, commercial, and end-of-tenancy cleaning</li>
                        <li>A structured quote form with property type and bedroom count</li>
                        <li>Before/after photo galleries</li>
                        <li>Service area pages targeting Christchurch suburbs</li>
                        <li>Google Business Profile integration</li>
                    </ul>
                    <p>
                        Results after 3 months: <strong>40+ monthly enquiries from Google alone</strong>, with a 35%
                        quote-to-booking conversion rate. The owner stopped using Trade Me entirely because the website
                        generated higher-quality leads at no ongoing cost.
                    </p>

                    <ToolEmbed slug="lead-loss-calculator" context="See how many cleaning job enquiries you're missing without a website" />

                    <h2>Common Mistakes Cleaning Business Websites Make</h2>
                    <ol>
                        <li>
                            <strong>No pricing information.</strong> Customers click away because they can&apos;t tell if
                            you&apos;re in their budget. Even ranges work.
                        </li>
                        <li>
                            <strong>Generic &quot;About Us&quot; page instead of service pages.</strong> Google can&apos;t
                            rank a generic page for &quot;end of tenancy cleaning Christchurch.&quot; You need specific
                            pages for specific services.
                        </li>
                        <li>
                            <strong>No mobile optimisation.</strong> Over 70% of cleaning service searches happen on
                            phones. If your site doesn&apos;t work perfectly on mobile, you&apos;re losing most of your
                            traffic.
                        </li>
                        <li>
                            <strong>Missing trust signals.</strong> No reviews, no photos, no insurance mention. In a
                            trust-heavy service like cleaning, these aren&apos;t optional.
                        </li>
                        <li>
                            <strong>No Google Business Profile.</strong> Without this, you&apos;re invisible in the local
                            map pack — the box of 3 local results that appears at the top of most local searches.
                        </li>
                    </ol>

                    <h2>Website vs No Website: The Cleaning Business Numbers</h2>
                    <p>Here&apos;s the simple ROI calculation for a cleaning business:</p>
                    <ul>
                        <li>A website costs <strong>$1,000–$2,000 one-off</strong></li>
                        <li>Average residential clean is worth <strong>$150–$200</strong></li>
                        <li>A regular weekly client is worth <strong>$7,800–$10,400/year</strong></li>
                        <li>If your website generates even <strong>2 regular clients</strong>, that&apos;s <strong>$15,600–$20,800/year</strong> from a one-time investment</li>
                    </ul>
                    <p>
                        For a full breakdown of website costs, see our guide to{' '}
                        <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">
                            how much a website costs in NZ
                        </Link>. If you want to understand the broader value of having a website, read{' '}
                        <Link href="/blog/do-small-businesses-need-a-website" className="text-primary hover:underline">
                            why small businesses need a website
                        </Link>.
                    </p>

                    <h2>Frequently Asked Questions</h2>

                    <h3>How much does a website for a cleaning business cost in NZ?</h3>
                    <p>
                        A professional cleaning business website typically costs $1,000–$2,000 NZD depending on the number
                        of pages and features. A 3–5 page site with a quote form, local SEO, and mobile optimisation is
                        enough for most cleaning businesses starting out.
                    </p>

                    <h3>Do I need online booking for a cleaning website?</h3>
                    <p>
                        A quote request form is more practical than full online booking for most NZ cleaning businesses.
                        Cleaning jobs vary in scope, so a form that captures the property type, size, and service needed
                        lets you provide an accurate quote before confirming a booking.
                    </p>

                    <h3>How do I get my cleaning business to show up on Google?</h3>
                    <p>
                        Claim your Google Business Profile, add your services and service areas, collect Google reviews
                        from customers, and build a website with location-specific pages. Consistency between your website
                        and Google Business Profile is key for local rankings.
                    </p>

                    <h3>Should I list prices on my cleaning website?</h3>
                    <p>
                        Yes — at minimum, show &quot;from&quot; prices for your main services. Customers searching for
                        cleaning services expect to see pricing. Even approximate ranges help qualify leads and save time
                        on enquiries that don&apos;t match your pricing.
                    </p>

                    <h3>Can a cleaning business website work without social media?</h3>
                    <p>
                        Yes. Google search is the primary source of new cleaning enquiries in NZ. A well-optimised website
                        with Google Business Profile integration can generate consistent leads without any social media
                        presence.
                    </p>

                    <h2>Get Started</h2>
                    <p>
                        Our{' '}
                        <Link href="/affordable-websites-nz" className="text-primary hover:underline">
                            website builds from $1,000
                        </Link>{' '}
                        is purpose-built for cleaning businesses. Professional 3–5 page site with a structured quote form,
                        local SEO, before/after galleries, and mobile optimisation — live in 7–14 days.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
