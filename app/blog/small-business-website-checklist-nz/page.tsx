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

const SLUG = 'small-business-website-checklist-nz'
const TITLE = 'Small Business Website Checklist NZ: What Your Website Needs to Convert'
const DESCRIPTION = 'Use this small business website checklist for NZ companies to make sure your site is clear, trustworthy, mobile-friendly, and built to generate enquiries.'
const DATE = '2026-04-04'
const UPDATED = '2026-04-04'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

const FAQ_ITEMS = [
    { q: 'How many pages should a small business website have?', a: 'Enough to clearly explain the offer, build trust, and support enquiries. Most NZ small businesses do well with 3–8 pages — homepage, service pages, about/trust, and a contact or quote page.' },
    { q: 'Does every small business need a quote form?', a: 'Not always, but most service businesses benefit from a clear enquiry path. A short quote form with 3–4 fields usually works better than a generic "contact us" page.' },
    { q: 'Is design more important than SEO?', a: 'They work together. Good design helps conversion; good SEO helps visibility. A beautiful site that nobody finds is just as weak as a visible site that nobody trusts.' },
    { q: 'What is the biggest website mistake small businesses make?', a: 'Usually being too vague — in messaging, service detail, and calls to action. If visitors cannot tell what you do and what to do next within a few seconds, the site is underperforming.' },
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
            images: [thumbnail ? { url: thumbnail.url, alt: thumbnail.alt, width: 1080, height: 720 } : { url: "/assets/hero.png", alt: "Fullstack Forge", width: 1200, height: 630 }],
        },
        twitter: {
            card: 'summary_large_image',
            title: TITLE,
            description: DESCRIPTION,
            images: [thumbnail ? thumbnail.url : "/assets/hero.png"],
        },
    }
}

export default async function Article() {
    const [heroImage, midImage] = await Promise.all([
        fetchUnsplashImage('small business website checklist'),
        fetchUnsplashImage('business owner reviewing website laptop'),
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
                    readTime={11}
                    heroImage={heroImage}
                    slug={SLUG}
                    showLeadCalculator={true}
                    relatedLinks={[] as any}
                    midCta={{
                        headline: 'Not Sure What Your Current Website Is Missing?',
                        body: 'Get a free audit that shows exactly where your site is falling short on clarity, trust, speed, and conversion.',
                    } as any}
                    linkPackage={linkPackage as any}
                >
                    <p>
                        A lot of small business owners know their website is &quot;not quite right,&quot; but they are
                        not always sure what is missing.
                    </p>
                    <p>
                        Maybe the site looks okay. Maybe it is technically live. Maybe it gets a few visits. But that
                        does not automatically mean it is doing its job.
                    </p>
                    <p>A good small business website should help people:</p>
                    <ul>
                        <li>Understand what you do</li>
                        <li>Trust your business</li>
                        <li>Find the right information quickly</li>
                        <li>Contact you or request a quote</li>
                    </ul>
                    <p>
                        If it is not doing that, then the site is underperforming. This checklist is designed for NZ
                        small businesses that want a practical way to assess whether their website is actually helping
                        the business grow.
                    </p>

                    <h2>What This Checklist Is Really About</h2>
                    <p>
                        This is not a checklist for having the fanciest design. It is not about trendy effects or
                        complicated features. It is about whether the site covers the fundamentals that matter most:
                    </p>
                    <ul>
                        <li>Clarity</li>
                        <li>Trust</li>
                        <li>Usability</li>
                        <li>Mobile performance</li>
                        <li>Conversion</li>
                        <li>Search visibility</li>
                    </ul>
                    <p>
                        A small business website does not need to be huge. But it does need to be useful.
                    </p>

                    <h2>1. Clear Homepage Message</h2>
                    <p>
                        When someone lands on the homepage, can they understand in a few seconds: what you do, who you
                        help, and what they should do next?
                    </p>
                    <p>A weak homepage uses vague phrases like:</p>
                    <ul>
                        <li>&quot;Welcome to our website&quot;</li>
                        <li>&quot;Quality service you can trust&quot;</li>
                        <li>&quot;Solutions for modern business&quot;</li>
                    </ul>
                    <p>A stronger homepage is more specific:</p>
                    <ul>
                        <li>Website design for small business NZ</li>
                        <li>Tradie websites that get more quote requests</li>
                        <li>Cleaning business websites that generate more bookings</li>
                    </ul>
                    <p>
                        Clarity matters more than cleverness. If your homepage structure is weak, it is worth pairing
                        this checklist with our guide on{' '}
                        <Link href="/blog/best-homepage-layout-for-small-business-website" className="text-primary hover:underline">
                            the best homepage layout for a small business website
                        </Link>.
                    </p>

                    <h2>2. Strong Call to Action</h2>
                    <p>
                        Your website should make the next step obvious. That could be: request a quote, get a free
                        audit, see pricing, contact us, or book a call.
                    </p>
                    <p>
                        The CTA should not be hidden. It should appear clearly and naturally in the right places. A
                        lot of websites underperform because the visitor is interested but not guided.
                    </p>

                    <h2>3. Mobile-Friendly Layout</h2>
                    <p>Many NZ small business websites still lose leads on mobile. That can happen when:</p>
                    <ul>
                        <li>Text is too cramped</li>
                        <li>Buttons are hard to tap</li>
                        <li>Forms are annoying to fill in</li>
                        <li>Pages load too slowly</li>
                    </ul>
                    <p>
                        If the site is hard to use on a phone, conversion suffers. This is especially important for
                        service businesses where a large chunk of visitors come from mobile devices.
                    </p>

                    <h2>4. Fast Loading Speed</h2>
                    <p>
                        Speed affects both SEO and enquiries. A slow site makes people impatient and can reduce trust
                        quickly. You do not need the most advanced setup in the country, but you do need a site that
                        feels responsive and smooth. If visitors have to wait too long, many will leave before they
                        even read the offer.
                    </p>

                    <h2>5. Clear Service Information</h2>
                    <p>A strong site should clearly explain:</p>
                    <ul>
                        <li>What services you offer</li>
                        <li>Who those services are for</li>
                        <li>What the outcome is</li>
                    </ul>
                    <p>
                        A common mistake is being too generic. Instead of broad statements, be specific. That helps
                        both users and search engines. For example: &quot;small business website design,&quot;
                        &quot;ecommerce website development,&quot; &quot;SEO for small businesses,&quot;
                        &quot;websites for tradies.&quot; Specific wording usually performs better than vague promises.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Business owner reviewing website checklist on laptop"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h2>6. Trust Signals</h2>
                    <p>
                        Trust is one of the most important parts of a business website. Useful trust signals include:
                    </p>
                    <ul>
                        <li>Testimonials and Google reviews</li>
                        <li>Real project examples or case studies</li>
                        <li>City/location relevance</li>
                        <li>Clear contact details</li>
                        <li>Honest pricing or process explanations</li>
                    </ul>
                    <p>
                        A site that feels too anonymous or too polished without proof often underperforms.
                    </p>

                    <h2>7. Easy Contact or Quote Process</h2>
                    <p>
                        If a serious visitor wants to enquire, the site should make that easy. That means a clear
                        form, visible contact details, low friction, and an obvious next step.
                    </p>
                    <p>
                        A contact process that feels difficult, long, or vague usually reduces conversions. This is
                        closely tied to your broader conversion strategy — see{' '}
                        <Link href="/blog/how-to-get-more-quote-requests-from-your-website" className="text-primary hover:underline">
                            how to get more quote requests from your website
                        </Link>{' '}
                        and{' '}
                        <Link href="/blog/how-to-get-more-leads-from-your-website" className="text-primary hover:underline">
                            how to get more leads from your website
                        </Link>.
                    </p>

                    <h2>8. Basic SEO Foundations</h2>
                    <p>
                        Your site does not need an advanced SEO strategy on day one, but it should at least have:
                    </p>
                    <ul>
                        <li>Clear page titles with relevant keywords</li>
                        <li>Useful headings (H1, H2, H3 structure)</li>
                        <li>Relevant keywords used naturally in body copy</li>
                        <li>Internal links between related pages</li>
                        <li>Mobile-friendly structure</li>
                        <li>Local relevance if you serve a specific area</li>
                    </ul>
                    <p>
                        Without those basics, it is harder for search engines to understand the site. For a broader
                        beginner view, see our{' '}
                        <Link href="/blog/seo-for-small-business-nz" className="text-primary hover:underline">
                            SEO for small business NZ guide
                        </Link>.
                    </p>

                    <h2>9. Useful Internal Links</h2>
                    <p>
                        A strong website helps visitors move naturally between pages. For example: homepage to
                        services, service pages to pricing, blog posts to related service pages, pricing pages to
                        contact or quote pages.
                    </p>
                    <p>
                        Internal linking helps both users and search engines. If every page feels isolated, the site
                        is weaker overall.
                    </p>

                    <h2>10. Real Business Positioning</h2>
                    <p>
                        A lot of small business sites feel interchangeable. That usually happens when the copy is too
                        generic. A better website makes it clear:
                    </p>
                    <ul>
                        <li>What kind of business this is</li>
                        <li>Who it is best for</li>
                        <li>What makes it different</li>
                        <li>What sort of result the customer should expect</li>
                    </ul>
                    <p>
                        You do not need flashy branding language. You need believable, useful positioning.
                    </p>

                    <h2>Website Checklist Summary Table</h2>
                    <table>
                        <thead>
                            <tr><th>Area</th><th>What to Check</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Homepage clarity</td><td>Is it obvious what you do and who it is for?</td></tr>
                            <tr><td>CTA</td><td>Is the next step visible and specific?</td></tr>
                            <tr><td>Mobile usability</td><td>Does the site feel easy to use on phones?</td></tr>
                            <tr><td>Speed</td><td>Does it load quickly enough?</td></tr>
                            <tr><td>Services</td><td>Are your services clearly explained?</td></tr>
                            <tr><td>Trust</td><td>Do you show proof and credibility?</td></tr>
                            <tr><td>Contact flow</td><td>Is enquiring easy?</td></tr>
                            <tr><td>SEO basics</td><td>Are headings, titles, and internal links in place?</td></tr>
                            <tr><td>Internal linking</td><td>Do pages support each other?</td></tr>
                            <tr><td>Positioning</td><td>Does the site feel specific, not generic?</td></tr>
                        </tbody>
                    </table>

                    <ToolEmbed slug="lead-loss-calculator" context="See how your current website scores against this checklist" />

                    <h2>Common Website Checklist Failures</h2>
                    <ol>
                        <li>
                            <strong>Site looks fine but says very little.</strong> A clean layout without clear
                            business meaning does not help much.
                        </li>
                        <li>
                            <strong>Good traffic, weak conversion.</strong> This usually points to CTA, trust, or
                            messaging problems.
                        </li>
                        <li>
                            <strong>Strong service, weak website.</strong> Many businesses do good work but their
                            site does not communicate it properly.
                        </li>
                        <li>
                            <strong>Too many pages with no clear path.</strong> More pages do not automatically mean
                            better performance.
                        </li>
                    </ol>

                    <h2>How to Use This Checklist Properly</h2>
                    <p>Do not treat this as a yes/no scorecard only. Use it to ask:</p>
                    <ul>
                        <li>Where is the site losing trust?</li>
                        <li>Where is the site confusing people?</li>
                        <li>Where is the next step unclear?</li>
                        <li>Where is the site weaker than competitors?</li>
                    </ul>
                    <p>That gives you a clearer path for improvement.</p>

                    <h2>Frequently Asked Questions</h2>

                    <h3>How many pages should a small business website have?</h3>
                    <p>
                        Enough to clearly explain the offer, build trust, and support enquiries. Most NZ small
                        businesses do well with 3–8 pages.
                    </p>

                    <h3>Does every small business need a quote form?</h3>
                    <p>
                        Not always, but most service businesses benefit from a clear enquiry path. A short quote form
                        with 3–4 fields usually works better than a generic &quot;contact us&quot; page.
                    </p>

                    <h3>Is design more important than SEO?</h3>
                    <p>
                        They work together. Good design helps conversion; good SEO helps visibility. A beautiful site
                        that nobody finds is just as weak as a visible site that nobody trusts.
                    </p>

                    <h3>What is the biggest website mistake small businesses make?</h3>
                    <p>
                        Usually being too vague — in messaging, service detail, and calls to action. If visitors
                        cannot tell what you do and what to do next within a few seconds, the site is underperforming.
                    </p>

                    <h2>Want a Professional View of What Your Website Is Missing?</h2>
                    <p>
                        At Fullstack Forge, we build small-business websites that are designed to be clear, useful,
                        and commercially effective — not just visually tidy.
                    </p>
                    <p>
                        If you want to know where your current website is falling short, start with a{' '}
                        <Link href="/#audit" className="text-primary hover:underline font-semibold">
                            free website audit
                        </Link>. Or if you are ready for a stronger foundation, look at our{' '}
                        <Link href="/website-design-for-small-business" className="text-primary hover:underline font-semibold">
                            small business website packages
                        </Link>.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
