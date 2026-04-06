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

const SLUG = 'seo-for-small-business-nz'
const TITLE = 'SEO for Small Business NZ — A Beginner\'s Guide to Ranking on Google'
const DESCRIPTION = 'The practical SEO guide for NZ small businesses: local rankings, Google Business Profile, on-page basics, and a free checklist to get started.'
const DATE = '2025-02-15'
const UPDATED = '2026-04-04'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

const FAQ_ITEMS = [
    { q: 'How long does SEO take to work for a small business in NZ?', a: 'Most NZ small businesses start seeing local ranking improvements within 4–8 weeks. Meaningful lead generation from SEO typically takes 3–6 months. Local keywords with less competition rank faster than broad national terms.' },
    { q: 'Do I need to pay for SEO tools?', a: 'No. You can do effective local SEO with free tools: Google Search Console, Google Business Profile, Google Keyword Planner, and PageSpeed Insights. Paid tools like Ahrefs or SEMrush are useful for competitive analysis but aren\'t essential for a small business starting out.' },
    { q: 'Is SEO worth it for a small business?', a: 'Yes — SEO is the most cost-effective marketing channel for local businesses. Unlike ads, organic traffic is free and compounds over time. A plumber ranking #1 for "plumber [city]" can generate 20–50+ enquiries per month without ongoing ad spend.' },
    { q: 'Should I pay an SEO agency?', a: 'Start by handling the basics yourself: claim your Google Business Profile, optimise your page titles, and collect reviews. If you want to compete for tougher keywords or don\'t have time, an SEO agency can help — but make sure they focus on local SEO, not vague "brand awareness" metrics.' },
    { q: 'What\'s the difference between local SEO and regular SEO?', a: 'Local SEO focuses on ranking for location-specific searches (e.g., "dentist Wellington") and appearing in Google Maps results. Regular SEO targets broader, often national or global keywords. For most NZ small businesses, local SEO delivers the highest ROI.' },
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
        fetchUnsplashImage('search engine optimization'),
        fetchUnsplashImage('keyword research SEO strategy'),
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
                    readTime={12}
                    heroImage={heroImage}
                    slug={SLUG}
                    midCta={{
                        headline: 'Want SEO Built Into Your Website From Day One?',
                        body: 'Every site we build is optimised for Google from the ground up — fast, mobile-first, and structured for local search.',
                    } as any}
                    linkPackage={linkPackage as any}
                    relatedLinks={[] as any}
                >
                    <h2>What Is SEO (In Plain English)?</h2>
                    <p>
                        SEO (Search Engine Optimisation) is the process of making your website show up higher in Google
                        search results. When someone searches &quot;plumber Christchurch&quot; or &quot;accountant
                        Auckland,&quot; SEO determines who appears on page 1 — and who gets buried on page 5 where
                        nobody looks.
                    </p>
                    <p>
                        For NZ small businesses, SEO isn&apos;t about competing globally. It&apos;s about showing up when
                        someone in your area searches for exactly what you offer. That&apos;s <strong>local SEO</strong>,
                        and it&apos;s the most cost-effective marketing channel available to you.
                    </p>

                    <h2>Why SEO Matters More Than Ads for NZ Small Businesses</h2>
                    <p>
                        <strong>75% of users never scroll past the first page of Google.</strong> If you&apos;re not on
                        page 1 for your key search terms, you&apos;re essentially invisible.
                    </p>
                    <p>Here&apos;s how SEO compares to paid advertising:</p>
                    <table>
                        <thead>
                            <tr><th>Factor</th><th>SEO (Organic)</th><th>Google Ads (Paid)</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Cost per click</td><td>$0 (after setup)</td><td>$5–$30 per click in NZ</td></tr>
                            <tr><td>Speed to results</td><td>3–6 months</td><td>Immediate</td></tr>
                            <tr><td>Long-term value</td><td>Compounds over time</td><td>Stops when you stop paying</td></tr>
                            <tr><td>Trust factor</td><td>Higher — users trust organic results</td><td>Lower — many users skip ads</td></tr>
                            <tr><td>Click-through rate</td><td>~28% for position #1</td><td>~2–3% average for ads</td></tr>
                        </tbody>
                    </table>
                    <p>
                        Paid ads have their place (especially for new businesses needing immediate leads), but SEO is
                        the foundation that keeps generating enquiries month after month without ongoing ad spend.
                    </p>

                    <h2>Local SEO: The #1 Priority for NZ Businesses</h2>
                    <p>
                        Local SEO is about appearing in two places: the <strong>map pack</strong> (the box of 3 local
                        results with a map) and the <strong>organic results</strong> below it. Both are driven by
                        different factors. If you&apos;re a tradie, we have a dedicated guide to{' '}
                        <Link href="/blog/local-seo-for-tradies-nz" className="text-primary hover:underline">
                            local SEO for tradies in NZ
                        </Link>{' '}
                        that covers trade-specific ranking tactics.
                    </p>

                    <h3>Google Business Profile: Your Most Important Free Tool</h3>
                    <p>
                        Your Google Business Profile (formerly Google My Business) is the single most impactful thing
                        you can do for local SEO. It&apos;s free and takes 30 minutes to set up properly.
                    </p>
                    <p>How to optimise it:</p>
                    <ol>
                        <li><strong>Claim and verify your listing</strong> at business.google.com</li>
                        <li><strong>Fill every field</strong> — business name, address, phone, website, hours, description, services, and attributes</li>
                        <li><strong>Choose the right primary category</strong> — this is the biggest ranking factor. Be specific: &quot;Plumber&quot; not &quot;Home Services&quot;</li>
                        <li><strong>Add photos weekly</strong> — businesses with 100+ photos get 520% more calls than those with fewer than 10</li>
                        <li><strong>Collect Google reviews</strong> — ask every happy customer. Send them a direct link (find it in your GBP dashboard). Aim for 20+ reviews as a baseline</li>
                        <li><strong>Respond to every review</strong> — positive and negative. Google rewards engagement</li>
                        <li><strong>Post updates regularly</strong> — Google Business Profile has a "Posts" feature. Use it to share offers, news, or photos</li>
                    </ol>

                    <h3>NAP Consistency</h3>
                    <p>
                        Your <strong>Name, Address, and Phone number</strong> (NAP) must be identical everywhere — your
                        website, Google Business Profile, Facebook, Yellow Pages NZ, NoCowboys, and any other directory.
                        Even small differences (e.g., &quot;St&quot; vs &quot;Street&quot;) can confuse Google and hurt
                        your rankings.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="SEO keyword research and content strategy planning for small business visibility"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h2>On-Page SEO: The Technical Basics</h2>
                    <p>
                        On-page SEO is what you do <em>on your website</em> to help Google understand and rank your
                        content. Here are the elements that matter most:
                    </p>

                    <h3>Page Titles (Title Tags)</h3>
                    <p>
                        Your page title is the most important on-page SEO signal. It appears in Google search results
                        and in the browser tab. Format: <strong>[Service] [Location] — [Business Name]</strong>.
                        Example: &quot;House Cleaning Christchurch — Sparkle Clean NZ.&quot; Keep it under 60 characters.
                    </p>

                    <h3>Meta Descriptions</h3>
                    <p>
                        The meta description appears below your title in search results. It doesn&apos;t directly affect
                        rankings, but a compelling description increases clicks. Include your keyword naturally, mention
                        a benefit, and add a call-to-action. Keep it under 160 characters.
                    </p>

                    <h3>Heading Structure (H1, H2, H3)</h3>
                    <p>
                        Use one H1 per page (your main title/keyword), H2s for major sections, and H3s for sub-points.
                        Include your target keyword in the H1 and at least one H2. This tells Google what your page is about.
                    </p>

                    <h3>Content Quality and Length</h3>
                    <p>
                        Google rewards pages that thoroughly answer the searcher&apos;s question. For service pages, aim
                        for 500–800 words minimum. For blog posts targeting informational keywords, 1,000–2,000 words
                        tends to rank best. Quality matters more than length — but thin (under 300 word) pages rarely rank.
                    </p>

                    <h3>Internal Linking</h3>
                    <p>
                        Link between your own pages. Your services page should link to relevant blog posts. Blog posts
                        should link to your service pages. This helps Google understand your site structure and passes
                        ranking authority between pages. Our guide to{' '}
                        <Link href="/blog/how-to-get-more-leads-from-your-website" className="text-primary hover:underline">
                            getting more leads from your website
                        </Link>{' '}
                        covers how internal linking supports conversions too.
                    </p>

                    <h2>Technical SEO: The Non-Negotiables</h2>

                    <h3>Site Speed</h3>
                    <p>
                        Google uses page speed as a ranking factor. Test your site at{' '}
                        <strong>pagespeed.web.dev</strong>. Aim for a score above 80 on mobile. Common speed killers:
                        uncompressed images, too many plugins/scripts, and cheap shared hosting.
                    </p>

                    <h3>Mobile Optimisation</h3>
                    <p>
                        Google uses <strong>mobile-first indexing</strong> — it judges your site based on the mobile
                        version, not desktop. Over 60% of NZ searches happen on mobile. If your site isn&apos;t
                        responsive, your rankings will suffer regardless of how good your content is.
                    </p>

                    <h3>SSL Certificate (HTTPS)</h3>
                    <p>
                        Your site must use HTTPS (the padlock icon). Google has confirmed this as a ranking signal,
                        and Chrome marks HTTP sites as &quot;Not Secure.&quot; Most modern hosting includes SSL for free.
                    </p>

                    <h3>Schema Markup</h3>
                    <p>
                        Schema markup is code that helps Google understand your content. For local businesses, the most
                        valuable types are LocalBusiness schema (your business details), FAQ schema (common questions),
                        and Review schema. This can make your listings appear with star ratings and rich snippets in
                        search results. If you work with a{' '}
                        <Link href="/blog/best-website-design-for-small-businesses" className="text-primary hover:underline">
                            web designer who builds with SEO in mind
                        </Link>, schema markup should be included.
                    </p>

                    <h2>Keyword Research for NZ Small Businesses</h2>
                    <p>
                        Keyword research is finding what your customers actually type into Google. For NZ businesses,
                        the sweet spot is <strong>local + specific</strong>:
                    </p>
                    <table>
                        <thead>
                            <tr><th>Too Broad (Hard)</th><th>Local + Specific (Sweet Spot)</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>&quot;web designer&quot;</td><td>&quot;web designer Christchurch&quot;</td></tr>
                            <tr><td>&quot;cleaning service&quot;</td><td>&quot;house cleaning Auckland CBD&quot;</td></tr>
                            <tr><td>&quot;electrician&quot;</td><td>&quot;emergency electrician Hamilton&quot;</td></tr>
                            <tr><td>&quot;accountant&quot;</td><td>&quot;small business accountant Wellington&quot;</td></tr>
                        </tbody>
                    </table>
                    <p>
                        Free tools to find keywords: <strong>Google Keyword Planner</strong> (free with a Google Ads
                        account — you don&apos;t need to run ads), <strong>Google autocomplete</strong> (start typing
                        and see what Google suggests), and <strong>Google Search Console</strong> (shows what terms
                        your site already appears for).
                    </p>

                    <ToolEmbed slug="website-roi-calculator" context="Estimate the revenue potential of ranking on Google for your key search terms" />

                    <h2>The NZ Small Business SEO Checklist</h2>
                    <p>Do these in order. Each step builds on the last:</p>
                    <ol>
                        <li>☐ Claim and fully optimise your Google Business Profile</li>
                        <li>☐ Ensure NAP consistency across all online listings</li>
                        <li>☐ Set up Google Search Console (free — shows your search performance)</li>
                        <li>☐ Optimise page titles: [Service] [Location] format</li>
                        <li>☐ Write compelling meta descriptions for every page</li>
                        <li>☐ Ensure one H1 per page with your primary keyword</li>
                        <li>☐ Add at least 500 words of useful content per service page</li>
                        <li>☐ Compress all images and add descriptive alt text</li>
                        <li>☐ Confirm SSL (HTTPS) is active</li>
                        <li>☐ Test mobile responsiveness on your own phone</li>
                        <li>☐ Check page speed at pagespeed.web.dev (aim for 80+ mobile)</li>
                        <li>☐ Add internal links between related pages</li>
                        <li>☐ Ask 5 customers to leave Google reviews this week</li>
                        <li>☐ Submit your sitemap to Google Search Console</li>
                    </ol>

                    <h2>Common SEO Mistakes NZ Small Businesses Make</h2>
                    <ul>
                        <li>
                            <strong>Paying for SEO before doing the free basics.</strong> Don&apos;t hire an SEO agency
                            until you&apos;ve done the checklist above. Many agencies charge $500–$2,000/month and start
                            by doing exactly these steps.
                        </li>
                        <li>
                            <strong>Targeting national keywords.</strong> A Wellington plumber trying to rank for
                            &quot;plumber NZ&quot; instead of &quot;plumber Wellington&quot; is wasting effort. Go local first.
                        </li>
                        <li>
                            <strong>Ignoring Google Business Profile.</strong> We&apos;ve seen businesses with good
                            websites but zero local visibility because they haven&apos;t claimed their GBP. It&apos;s
                            free and it&apos;s the highest-impact action you can take.
                        </li>
                        <li>
                            <strong>Thin content pages.</strong> A service page with 50 words and a stock photo won&apos;t
                            rank. Google needs enough content to understand what the page is about.
                        </li>
                        <li>
                            <strong>Not collecting reviews.</strong> Reviews are a top local ranking factor. Businesses
                            with 20+ Google reviews consistently outrank those with fewer. Make asking for reviews part
                            of your process.
                        </li>
                    </ul>

                    <h2>How Long Does SEO Take?</h2>
                    <p>
                        For local keywords in NZ, expect to see initial ranking improvements in <strong>4–8 weeks</strong>
                        and meaningful lead generation within <strong>3–6 months</strong>. Less competitive terms (like
                        niche services in smaller cities) rank faster. High-competition terms (like &quot;web design
                        Auckland&quot;) take longer. For a full month-by-month timeline, see our detailed guide on{' '}
                        <Link href="/blog/how-long-does-seo-take-for-small-business-in-nz" className="text-primary hover:underline">
                            how long SEO takes for small businesses in NZ
                        </Link>.
                    </p>
                    <p>
                        The investment is worth it: unlike ads, SEO compounds over time. A page that ranks well keeps
                        generating free traffic month after month. For context on the full cost picture, see our guide
                        to{' '}
                        <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">
                            how much a website costs in NZ
                        </Link>.
                    </p>

                    <h2>Frequently Asked Questions</h2>

                    <h3>How long does SEO take to work for a small business in NZ?</h3>
                    <p>
                        Most NZ small businesses start seeing local ranking improvements within 4–8 weeks. Meaningful
                        lead generation from SEO typically takes 3–6 months. Local keywords with less competition rank
                        faster than broad national terms.
                    </p>

                    <h3>Do I need to pay for SEO tools?</h3>
                    <p>
                        No. You can do effective local SEO with free tools: Google Search Console, Google Business
                        Profile, Google Keyword Planner, and PageSpeed Insights. Paid tools like Ahrefs or SEMrush
                        are useful for competitive analysis but aren&apos;t essential for a small business starting out.
                    </p>

                    <h3>Is SEO worth it for a small business?</h3>
                    <p>
                        Yes — SEO is the most cost-effective marketing channel for local businesses. Unlike ads, organic
                        traffic is free and compounds over time. A plumber ranking #1 for &quot;plumber [city]&quot; can
                        generate 20–50+ enquiries per month without ongoing ad spend.
                    </p>

                    <h3>Should I pay an SEO agency?</h3>
                    <p>
                        Start by handling the basics yourself: claim your Google Business Profile, optimise your page
                        titles, and collect reviews. If you want to compete for tougher keywords or don&apos;t have
                        time, an SEO agency can help — but make sure they focus on local SEO, not vague &quot;brand
                        awareness&quot; metrics.
                    </p>

                    <h3>What&apos;s the difference between local SEO and regular SEO?</h3>
                    <p>
                        Local SEO focuses on ranking for location-specific searches (e.g., &quot;dentist Wellington&quot;)
                        and appearing in Google Maps results. Regular SEO targets broader, often national or global keywords.
                        For most NZ small businesses, local SEO delivers the highest ROI.
                    </p>

                    <h2>Need SEO Built Into Your Website?</h2>
                    <p>
                        Every website we build at{' '}
                        <Link href="/" className="text-primary hover:underline">Fullstack Forge</Link> includes on-page
                        SEO as standard — proper meta tags, heading structure, fast hosting, schema markup, and
                        mobile-first design. Our{' '}
                        <Link href="/web-design-christchurch" className="text-primary hover:underline">
                            Christchurch clients
                        </Link>{' '}
                        see real ranking improvements within months.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
