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

const SLUG = 'how-long-does-seo-take-for-small-business-in-nz'
const TITLE = 'How Long Does SEO Take for a Small Business in NZ?'
const DESCRIPTION = 'Find out how long SEO takes for a small business in NZ, what affects ranking speed, and what to realistically expect month by month from local SEO efforts.'
const DATE = '2026-04-04'
const UPDATED = '2026-04-04'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

const FAQ_ITEMS = [
    { q: 'How long does it take SEO to work for a small business?', a: 'Most NZ small businesses should expect 3–6 months for meaningful improvements. Some long-tail keywords can rank sooner, but competitive terms often take 6–12 months or more depending on how established the competition is.' },
    { q: 'Can I do SEO myself or do I need a professional?', a: 'The basics — good titles, headings, site structure, mobile speed, and local relevance — can be done yourself. But keyword research, technical fixes, content strategy, and link building usually benefit from professional guidance.' },
    { q: 'Does SEO work for small businesses in New Zealand?', a: 'Yes. In fact, local SEO tends to work well for NZ small businesses because the competition is often lower than in larger markets. A well-structured website targeting specific NZ keywords can outrank bigger players.' },
    { q: 'What is the most important thing for small business SEO?', a: 'Having a well-structured website with clear page titles, relevant content, fast load speed, and proper technical foundations. Without those, all other SEO activity has less impact.' },
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
        fetchUnsplashImage('seo timeline small business'),
        fetchUnsplashImage('business analytics growth chart'),
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
                        headline: 'Better Website Foundations for SEO',
                        body: 'Get a free audit that shows how well your site is built for search — and what is holding your rankings back.',
                    } as any}
                    linkPackage={linkPackage as any}
                >
                    <p>
                        One of the most common questions NZ small business owners ask about SEO is: how long will
                        it take? The honest answer is — it depends.
                    </p>
                    <p>
                        SEO is not a switch you flip. It is a process. And the timeline depends on where you are
                        starting from, how competitive the market is, and how strong the website foundation is.
                    </p>
                    <p>
                        This article gives a realistic, grounded breakdown — no hype, no magic numbers. Just what
                        you should actually expect when investing in SEO for a small business in New Zealand.
                    </p>

                    <h2>Why SEO Takes Time</h2>
                    <p>Search engines do not rank new or updated websites instantly. Google needs to:</p>
                    <ul>
                        <li>Crawl your pages</li>
                        <li>Understand your content</li>
                        <li>Compare it to competing pages</li>
                        <li>Build trust over time (through links, engagement, and consistency)</li>
                    </ul>
                    <p>
                        For a new website, this process starts from zero. For an older website with some history, it
                        can be faster — but only if the foundations are in place.
                    </p>

                    <h2>Key Factors That Affect SEO Speed</h2>
                    <h3>1. Website Age and Authority</h3>
                    <p>
                        A new domain has very little trust. An older site with backlinks and indexed pages has a head
                        start. If you already have a live website that Google knows about, SEO changes tend to take
                        effect faster.
                    </p>

                    <h3>2. Competition Level</h3>
                    <p>
                        Low-competition keywords — like long-tail NZ-specific terms — can rank within weeks. High-
                        competition keywords may take 6–12 months or longer. Targeting the right keywords matters
                        more than just targeting the biggest ones.
                    </p>

                    <h3>3. Website Technical Health</h3>
                    <p>If the site has problems like:</p>
                    <ul>
                        <li>Slow mobile loading</li>
                        <li>Missing meta titles or headings</li>
                        <li>Broken internal links</li>
                        <li>No HTTPS</li>
                    </ul>
                    <p>
                        Then SEO work gets held back by those foundational issues. Fixing the technical layer first
                        usually speeds everything else up.
                    </p>

                    <h3>4. Content Depth and Relevance</h3>
                    <p>
                        Thin or generic content ranks poorly. Pages with clear, detailed, useful information rank
                        better. If you only have a homepage and a contact page, there is not much for Google to work
                        with. Expanding useful content — service pages, location pages, guides — usually improves
                        rankings.
                    </p>

                    <h3>5. Local vs National</h3>
                    <p>
                        Local SEO (e.g., &quot;plumber Christchurch&quot;) tends to move faster and is less
                        competitive than national terms (e.g., &quot;best plumber NZ&quot;). For most NZ small
                        businesses, local SEO is the highest-impact starting point.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Business analytics growth chart on screen"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h2>Realistic SEO Timeline for NZ Small Businesses</h2>
                    <table>
                        <thead>
                            <tr><th>Timeframe</th><th>What to Expect</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Month 1</td><td>Technical audit, keyword research, site structure improvements, title/heading work</td></tr>
                            <tr><td>Months 2–3</td><td>New or improved content published, internal links added, Google starts re-crawling</td></tr>
                            <tr><td>Months 3–6</td><td>Long-tail keywords start to appear in search, measurable traffic improvements</td></tr>
                            <tr><td>Months 6–9</td><td>Core keywords improve, organic enquiry flow builds, trust accumulates</td></tr>
                            <tr><td>Months 9–12+</td><td>Competitive terms rank higher, compounding visibility, sustainable lead flow</td></tr>
                        </tbody>
                    </table>
                    <p>
                        These are general ranges. Some sites see early movement in 4–6 weeks. Others — especially
                        in competitive trades — take longer.
                    </p>

                    <h2>What Slows SEO Down</h2>
                    <ul>
                        <li>Poor website speed — technical problems waste months</li>
                        <li>Thin content — Google has nothing to rank</li>
                        <li>No clear keyword focus — pages compete with each other</li>
                        <li>Ignoring site structure — no internal links, poor navigation</li>
                        <li>Stopping too early — pulling the plug before results have time to materialise</li>
                    </ul>

                    <h2>What Speeds SEO Up</h2>
                    <ul>
                        <li>A technically sound, mobile-fast website</li>
                        <li>Targeted keywords with clear intent</li>
                        <li>Consistent content expanding the topic footprint</li>
                        <li>Internal linking between related pages</li>
                        <li>A strong Google Business Profile for local SEO</li>
                    </ul>
                    <p>
                        For a broader look at the fundamentals, see our{' '}
                        <Link href="/blog/seo-for-small-business-nz" className="text-primary hover:underline">
                            SEO for small business NZ guide
                        </Link>.
                    </p>

                    <h2>SEO vs Paid Ads: Speed Comparison</h2>
                    <p>
                        Paid ads (like Google Ads) give instant visibility. SEO takes longer — but the results
                        compound over time and you do not pay per click. For many NZ small businesses, the best
                        approach is:
                    </p>
                    <ol>
                        <li>Build the website with strong SEO foundations</li>
                        <li>Use paid ads short-term for visibility while SEO builds</li>
                        <li>Shift budget toward organic growth as rankings improve</li>
                    </ol>
                    <p>
                        The key is not to treat SEO and ads as either/or. They serve different roles at different
                        stages.
                    </p>

                    <ToolEmbed slug="lead-loss-calculator" context="Find out how your website foundations are affecting your SEO potential" />

                    <h2>How to Know If SEO Is Working</h2>
                    <p>Track these signals:</p>
                    <ul>
                        <li>Are more relevant keywords appearing in Google Search Console?</li>
                        <li>Is organic traffic increasing month over month?</li>
                        <li>Are enquiry numbers or form submissions growing?</li>
                        <li>Are you ranking for keywords that match your actual services?</li>
                    </ul>
                    <p>
                        If traffic is growing but leads are not, the problem is usually the website — not the SEO.
                        In that case, improving the conversion path is the next step. See{' '}
                        <Link href="/blog/how-to-get-more-leads-from-your-website" className="text-primary hover:underline">
                            how to get more leads from your website
                        </Link>.
                    </p>

                    <h2>Can Cheap SEO Hurt Your Website?</h2>
                    <p>Yes. Some low-cost SEO providers use shortcuts that can damage trust or trigger penalties:</p>
                    <ul>
                        <li>Spammy backlinks</li>
                        <li>Keyword stuffing</li>
                        <li>Auto-generated content</li>
                        <li>Doorway pages</li>
                    </ul>
                    <p>
                        Proper SEO focuses on site quality, useful content, and natural relevance. It takes longer
                        — but creates lasting value.
                    </p>

                    <h2>What to Expect from a Professional SEO Engagement</h2>
                    <p>A good SEO engagement for a small business in NZ typically involves:</p>
                    <ol>
                        <li>A technical audit of the current website</li>
                        <li>Keyword research focused on realistic, relevant terms</li>
                        <li>On-page changes (titles, headings, content improvements)</li>
                        <li>Internal linking and site structure adjustments</li>
                        <li>Content strategy that builds topical authority</li>
                        <li>Monthly reporting with real metrics</li>
                    </ol>
                    <p>
                        If a provider cannot explain what they are actually doing, that is usually a red flag. For
                        context on how ongoing website investment relates to cost, see{' '}
                        <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">
                            how much a website costs in NZ
                        </Link>.
                    </p>

                    <h2>Frequently Asked Questions</h2>

                    <h3>How long does it take SEO to work for a small business?</h3>
                    <p>
                        Most NZ small businesses should expect 3–6 months for meaningful improvements. Some long-tail
                        keywords can rank sooner, but competitive terms often take 6–12 months or more.
                    </p>

                    <h3>Can I do SEO myself or do I need a professional?</h3>
                    <p>
                        The basics — good titles, headings, site structure, mobile speed, and local relevance — can
                        be done yourself. But keyword research, technical fixes, content strategy, and link building
                        usually benefit from professional guidance.
                    </p>

                    <h3>Does SEO work for small businesses in New Zealand?</h3>
                    <p>
                        Yes. Local SEO tends to work well for NZ small businesses because the competition is often
                        lower than in larger markets. A well-structured website targeting specific NZ keywords can
                        outrank bigger players.
                    </p>

                    <h3>What is the most important thing for small business SEO?</h3>
                    <p>
                        Having a well-structured website with clear page titles, relevant content, fast load speed,
                        and proper technical foundations. Without those, all other SEO activity has less impact.
                    </p>

                    <h2>Ready to Build a Stronger SEO Foundation?</h2>
                    <p>
                        At Fullstack Forge, we build websites designed to rank — with clean structure, fast speed,
                        and content foundations that support long-term SEO growth.
                    </p>
                    <p>
                        Start with a{' '}
                        <Link href="/#contact" className="text-primary hover:underline font-semibold">
                            free consultation
                        </Link>{' '}
                        to talk about your goals — or explore{' '}
                        <Link href="/website-design-for-small-business" className="text-primary hover:underline font-semibold">
                            our website packages
                        </Link>{' '}
                        built for NZ small businesses.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
