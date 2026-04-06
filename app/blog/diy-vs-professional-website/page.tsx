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

const SLUG = 'diy-vs-professional-website'
const TITLE = 'DIY vs Professional Website — When to Build It Yourself vs Hire a Pro'
const DESCRIPTION = 'A practical decision framework for NZ small businesses: when DIY makes sense, when to hire a professional, and the real cost of each option over 3 years.'
const DATE = '2025-02-20'
const UPDATED = '2026-04-04'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

const FAQ_ITEMS = [
    { q: 'Is it cheaper to build my own website or hire a professional?', a: 'Over 3 years, a professional site often costs less. DIY builders charge $200–$500/year in platform fees, plus your time (20+ hours at $30/hour = $600+). A professional site starting at $1,000 with free hosting costs $1,000 total over the same period.' },
    { q: 'How long does it take to build a website yourself?', a: 'Most business owners spend 20–40 hours building a DIY site, spread over 2–4 weeks. A professional can deliver a finished site in 3–7 days — and the result will be better optimised for speed, SEO, and lead generation.' },
    { q: 'Can I switch from a DIY builder to a professional site later?', a: 'Yes, but you\'ll start from scratch — DIY builders don\'t let you export your site. The design, content, and SEO authority you\'ve built on the old platform may not transfer cleanly. Starting with a professional site avoids this migration cost entirely.' },
    { q: 'What if my business doesn\'t need a fancy website?', a: 'Most don\'t. A professional site doesn\'t mean complex or expensive. A clean, fast, 3-page site with a contact form and local SEO is often enough — and it\'s what a professional would recommend for most NZ small businesses.' },
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
        fetchUnsplashImage('web developer coding laptop'),
        fetchUnsplashImage('professional web development team'),
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
                    readTime={9}
                    heroImage={heroImage}
                    slug={SLUG}
                    midCta={{
                        headline: 'Skip the Guesswork — Get a Website That Works',
                        body: 'Whether you\'re upgrading from DIY or starting fresh, we build websites that actually generate leads for NZ businesses.',
                    } as any}
                    linkPackage={linkPackage as any}
                    relatedLinks={[] as any}
                >
                    <h2>This Isn&apos;t About Which Is &quot;Better&quot;</h2>
                    <p>
                        Both DIY and professional websites have their place. The right choice depends on your situation —
                        specifically, your time, technical comfort, budget, and what you need the website to <em>do</em>.
                    </p>
                    <p>
                        This guide gives you a decision framework, not a sales pitch. We&apos;ll cover the honest pros
                        and cons, the real costs (including the ones DIY builders don&apos;t mention), and who should
                        choose which option.
                    </p>
                    <p>
                        If you&apos;re more interested in comparing specific platforms (Wix vs Squarespace vs Shopify),
                        see our{' '}
                        <Link href="/blog/best-website-builder-for-small-business-nz" className="text-primary hover:underline">
                            website builder comparison for NZ businesses
                        </Link>.
                    </p>

                    <h2>The Real Cost Comparison (Not Just Sticker Price)</h2>
                    <p>
                        The upfront price tag is misleading. Here&apos;s what each option actually costs over 3 years
                        when you include the costs most people forget:
                    </p>
                    <table>
                        <thead>
                            <tr><th>Cost Factor</th><th>DIY (Wix/Squarespace)</th><th>Professional (Custom Build)</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Upfront cost</td><td>$0</td><td>$1,000–$2,000</td></tr>
                            <tr><td>Platform fees (3 years)</td><td>$720–$1,800</td><td>$0 (free hosting)</td></tr>
                            <tr><td>Your time building</td><td>20–40 hours ($600–$1,200 at $30/hr)</td><td>0 hours</td></tr>
                            <tr><td>Ongoing updates/tweaks</td><td>5–10 hours/year</td><td>Minimal to none</td></tr>
                            <tr><td>Lost leads (slower, less optimised)</td><td>Hard to quantify but real</td><td>Optimised from day 1</td></tr>
                            <tr><td><strong>True 3-year cost</strong></td><td><strong>$1,320–$3,000+</strong></td><td><strong>$1,000–$2,000</strong></td></tr>
                        </tbody>
                    </table>
                    <p>
                        The &quot;cheaper&quot; option often isn&apos;t cheaper at all. For a full pricing breakdown
                        including ongoing costs, read our{' '}
                        <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">
                            complete NZ website pricing guide
                        </Link>.
                    </p>

                    <h2>The Time Trade-Off</h2>
                    <p>
                        This is the factor most business owners underestimate. Building a website on Wix or Squarespace
                        isn&apos;t just &quot;a few hours.&quot; Here&apos;s what it actually involves:
                    </p>
                    <ul>
                        <li>Choosing and customising a template (2–4 hours)</li>
                        <li>Writing all your content — homepage, about, services (4–8 hours)</li>
                        <li>Sourcing or taking photos (2–4 hours)</li>
                        <li>Setting up forms, integrations, and analytics (2–3 hours)</li>
                        <li>Making it look right on mobile (2–4 hours)</li>
                        <li>Learning SEO basics and applying them (3–5 hours)</li>
                        <li>Fixing things that break or don&apos;t look right (3–6 hours)</li>
                    </ul>
                    <p>
                        Total: <strong>20–40 hours</strong> for most business owners. And the result is still a template
                        site that loads slower, converts worse, and ranks lower than a professional build.
                    </p>
                    <p>
                        A professional delivers a finished, optimised site in 3–7 days while you focus on running your
                        business. Your only time investment: a 30-minute briefing call and content review.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Professional web development team building a custom business website"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h2>The Performance Gap</h2>
                    <p>
                        Beyond cost and time, there&apos;s a real quality difference that affects your bottom line:
                    </p>
                    <table>
                        <thead>
                            <tr><th>Factor</th><th>DIY Builder</th><th>Professional Build</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Page load speed</td><td>3–6 seconds (builder bloat)</td><td>Under 1 second</td></tr>
                            <tr><td>Google PageSpeed score</td><td>40–65 typical</td><td>85–100 typical</td></tr>
                            <tr><td>SEO structure</td><td>Basic — limited control</td><td>Full — schema, meta, heading hierarchy</td></tr>
                            <tr><td>Conversion rate</td><td>1–2% average</td><td>3–5% with proper CTA design</td></tr>
                            <tr><td>Mobile experience</td><td>Adequate (auto-responsive)</td><td>Optimised (designed mobile-first)</td></tr>
                            <tr><td>Code ownership</td><td>Locked to platform</td><td>You own everything</td></tr>
                        </tbody>
                    </table>
                    <p>
                        That conversion rate difference matters. At 500 visitors/month: 1% = 5 leads; 4% = 20 leads.
                        For a tradesman averaging $500 per job, that&apos;s the difference between $2,500 and $10,000
                        per month — from the same traffic.
                    </p>

                    <ToolEmbed slug="website-roi-calculator" context="Calculate the real ROI difference between a DIY and professional website" />

                    <h2>The Decision Framework: Which Is Right for You?</h2>

                    <h3>DIY Makes Sense If You:</h3>
                    <ul>
                        <li>Are testing a business idea before committing real money</li>
                        <li>Run a hobby, personal blog, or side project</li>
                        <li>Genuinely enjoy building websites and have 20+ spare hours</li>
                        <li>Don&apos;t rely on the website for lead generation</li>
                        <li>Need something temporary while planning a proper build</li>
                    </ul>

                    <h3>Go Professional If You:</h3>
                    <ul>
                        <li>Need your website to generate enquiries and revenue</li>
                        <li>Value your time at more than $20–30/hour</li>
                        <li>Want to rank on Google for local searches</li>
                        <li>Need professional credibility (tradies, service businesses, consultants)</li>
                        <li>Want a site that&apos;s done in days rather than weeks</li>
                        <li>Plan to keep your business running for more than 1–2 years</li>
                    </ul>

                    <h2>The Migration Trap</h2>
                    <p>
                        One problem with starting DIY: switching later isn&apos;t free. DIY builders don&apos;t let you
                        export your site. If you build on Wix and later decide to go professional, you start from
                        scratch — losing any SEO authority and Google rankings you&apos;ve built up.
                    </p>
                    <p>
                        With a professionally built site, you own the code from day one. You can host it anywhere,
                        modify it freely, and never worry about platform lock-in. It&apos;s an asset, not a rental.
                    </p>

                    <h2>Frequently Asked Questions</h2>

                    <h3>Is it cheaper to build my own website or hire a professional?</h3>
                    <p>
                        Over 3 years, a professional site often costs less. DIY builders charge $200–$500/year in
                        platform fees, plus your time (20+ hours at $30/hour = $600+). A professional site starting
                        at $1,000 with free hosting costs $1,000 total over the same period.
                    </p>

                    <h3>How long does it take to build a website yourself?</h3>
                    <p>
                        Most business owners spend 20–40 hours building a DIY site, spread over 2–4 weeks. A
                        professional can deliver a finished site in 3–7 days — and the result will be better optimised
                        for speed, SEO, and lead generation.
                    </p>

                    <h3>Can I switch from a DIY builder to a professional site later?</h3>
                    <p>
                        Yes, but you&apos;ll start from scratch — DIY builders don&apos;t let you export your site.
                        The design, content, and SEO authority you&apos;ve built on the old platform may not transfer
                        cleanly. Starting with a professional site avoids this migration cost entirely.
                    </p>

                    <h3>What if my business doesn&apos;t need a fancy website?</h3>
                    <p>
                        Most don&apos;t. A professional site doesn&apos;t mean complex or expensive. A clean, fast,
                        3-page site with a contact form and local SEO is often enough — and it&apos;s what a
                        professional would recommend for most NZ small businesses.
                    </p>

                    <h2>The Bottom Line</h2>
                    <p>
                        If your website is a business tool that needs to generate leads, go professional. If it&apos;s
                        a hobby project or test, DIY is fine. The worst option is spending 40 hours on a DIY site that
                        doesn&apos;t perform — you&apos;ve paid more than a professional would have cost, in time alone.
                    </p>
                    <p>
                        At{' '}
                        <Link href="/affordable-websites-nz" className="text-primary hover:underline">
                            Fullstack Forge
                        </Link>, we build professional sites starting at $1,000 — zero monthly fees, delivered in 7–14 days.
                        Professional quality at DIY prices, without the DIY time cost.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
