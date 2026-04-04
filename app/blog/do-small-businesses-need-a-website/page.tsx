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

const SLUG = 'do-small-businesses-need-a-website'
const TITLE = 'Do Small Businesses Need a Website in 2026? (The Real Answer)'
const DESCRIPTION = 'Website vs social media for NZ small businesses — ownership, credibility, lead capture, and the real ROI of having your own site.'
const DATE = '2025-01-25'
const UPDATED = '2026-04-04'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

const FAQ_ITEMS = [
    { q: 'Can I just use Facebook instead of a website?', a: 'Facebook is useful for social engagement, but it\'s rented land — you don\'t control the algorithm, reach, or platform. A website ranks on Google, captures leads directly, and builds credibility that social media profiles can\'t match.' },
    { q: 'How much does a basic small business website cost in NZ?', a: 'A professional 3–5 page website for an NZ small business typically costs $1,000–$2,000 NZD. This includes design, mobile optimisation, basic SEO, and a contact or quote form.' },
    { q: 'Is a website worth it if I already get work through word-of-mouth?', a: 'Yes. Even referrals Google your name before contacting you. Without a website, you lose credibility and miss people who search for your service directly. A website amplifies word-of-mouth rather than replacing it.' },
    { q: 'What\'s the minimum a small business website needs?', a: 'At minimum: a clear homepage explaining what you do and where, a way to contact you (form or click-to-call), and mobile-responsive design. Even a simple 3-page site beats having no online presence at all.' },
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
        fetchUnsplashImage('small business owner laptop'),
        fetchUnsplashImage('online business digital growth'),
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
                    readTime={8}
                    heroImage={heroImage}
                    slug={SLUG}
                    showLeadCalculator={true}
                    midCta={{
                        headline: 'Still On the Fence About Getting a Website?',
                        body: 'We build affordable websites for NZ small businesses — from $1,000, delivered in 7–14 days, not weeks.',
                    } as any}
                    linkPackage={linkPackage as any}
                    relatedLinks={[] as any}
                >
                    <h2>The Short Answer: Yes — and Here&apos;s Why It Matters More Than Ever</h2>
                    <p>
                        In 2026, the vast majority of consumers search online before buying from or hiring a local business.
                        If you don&apos;t have a website, you don&apos;t exist for most of those people — no matter how good
                        your work is.
                    </p>
                    <p>
                        But this isn&apos;t about statistics pulled from American marketing blogs. Let&apos;s talk about what
                        this actually means for NZ small businesses — the plumber in Hamilton, the cleaner in Christchurch,
                        the café owner in Wellington.
                    </p>

                    <h2>Website vs Social Media: Owned vs Rented</h2>
                    <p>
                        &quot;But I have a Facebook page&quot; is the most common objection we hear. And Facebook <em>is</em> useful
                        — for staying in touch with existing customers. But it&apos;s rented land. You don&apos;t control
                        the algorithm, the reach, the rules, or the platform. We break this down in depth in our{' '}
                        <Link href="/blog/website-vs-facebook-page-nz-small-business" className="text-primary hover:underline">
                            website vs Facebook page comparison for NZ small businesses
                        </Link>.
                    </p>
                    <p>Here&apos;s the core difference:</p>
                    <table>
                        <thead>
                            <tr><th>Feature</th><th>Your Website</th><th>Facebook/Instagram</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Appears in Google search</td><td>✅ Yes — ranks for local keywords</td><td>❌ Rarely shows in top results</td></tr>
                            <tr><td>You control the design</td><td>✅ Fully customisable</td><td>❌ Limited to platform templates</td></tr>
                            <tr><td>Lead capture</td><td>✅ Forms, booking, quote requests</td><td>❌ Messenger only (platform-owned)</td></tr>
                            <tr><td>Competitor ads on your page</td><td>✅ Never</td><td>❌ Facebook shows competitor ads alongside your page</td></tr>
                            <tr><td>Algorithm changes</td><td>✅ Unaffected</td><td>❌ Organic reach has dropped to ~2% on Facebook</td></tr>
                            <tr><td>Credibility</td><td>✅ 75% of consumers judge credibility by website quality</td><td>⚠️ Acceptable but perceived as less established</td></tr>
                            <tr><td>Ownership</td><td>✅ You own it forever</td><td>❌ Platform can delete, suspend, or change rules</td></tr>
                        </tbody>
                    </table>
                    <p>
                        Social media is best for engagement and staying top of mind. A website is for being found, building
                        trust, and capturing leads. They work together — but the website is the foundation that you own.
                    </p>

                    <h2>What Happens When You Only Rely on Instagram or Facebook</h2>
                    <p>
                        We&apos;ve seen this play out with NZ businesses multiple times:
                    </p>
                    <ul>
                        <li>
                            <strong>The algorithm changes and your reach drops overnight.</strong> Facebook organic reach
                            has fallen below 2% for business pages. That means a page with 1,000 followers reaches about
                            20 of them per post — without paying to boost.
                        </li>
                        <li>
                            <strong>Your account gets suspended or hacked.</strong> We&apos;ve worked with a Christchurch
                            service business that lost their Facebook account for two weeks due to a policy flag. During
                            that time, they had zero online presence — no way for new customers to find them.
                        </li>
                        <li>
                            <strong>You can&apos;t rank for local search.</strong> When someone searches &quot;plumber
                            Hamilton&quot; or &quot;cleaner Auckland,&quot; Google shows websites — not Facebook pages.
                            No website means no visibility for the highest-intent searches.
                        </li>
                        <li>
                            <strong>New customers can&apos;t verify you.</strong> When a referral Googles your business
                            name and finds nothing, the credibility built by the referral evaporates. Even referrals need
                            validation.
                        </li>
                    </ul>

                    <h2>5 Things a Website Does That Social Media Can&apos;t</h2>

                    <h3>1. Ranks on Google for Local Searches</h3>
                    <p>
                        When someone searches &quot;electrician near me&quot; or &quot;café Wellington CBD,&quot; Google shows websites
                        and Google Business Profile results — not Instagram accounts. A website paired with a Google Business
                        Profile puts you in front of people actively looking to spend money.
                    </p>

                    <h3>2. Captures Leads Directly</h3>
                    <p>
                        Contact forms, quote request forms, booking widgets, email capture — these are tools you own and
                        control. Every lead goes directly to your inbox. On social media, you&apos;re funnelling leads
                        through a platform that can change the rules at any time.
                    </p>

                    <h3>3. Builds Professional Credibility</h3>
                    <p>
                        Consumers judge your business by your online presence. A clean, professional website signals that
                        you&apos;re established, trustworthy, and serious about your business. For tradies and service
                        businesses, this is especially important — customers hiring someone to work in their home need to
                        trust you before they call.
                    </p>

                    <h3>4. Works 24/7 Without Posting</h3>
                    <p>
                        Social media requires constant content creation. Stop posting for a week and your reach drops.
                        A website works around the clock, capturing enquiries while you sleep, without needing daily
                        attention. For busy business owners, that&apos;s a significant advantage.
                    </p>

                    <h3>5. Gives You Data You Actually Own</h3>
                    <p>
                        With a website, you can see exactly where visitors come from, which pages they view, how long they
                        stay, and where they drop off. This data helps you improve your marketing. On social media,
                        you get platform-controlled metrics that tell you what <em>they</em> want you to know.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Small business establishing an online presence for digital growth"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h2>Real Examples: NZ Businesses With and Without Websites</h2>

                    <h3>With a Website: Christchurch Tradie</h3>
                    <p>
                        A Christchurch plumber launched a simple 3-page website with a quote form, service area pages,
                        and local SEO. Within two months: 25 monthly enquiries from Google alone, without spending a cent
                        on ads. See our full guide to{' '}
                        <Link href="/blog/website-for-tradies-nz" className="text-primary hover:underline">
                            tradie websites in NZ
                        </Link>{' '}
                        for more on what works for tradies.
                    </p>

                    <h3>Without a Website: Hamilton Service Business</h3>
                    <p>
                        A Hamilton-based lawn care operator relied entirely on Facebook and word-of-mouth. Business was
                        fine — until a competitor launched a website targeting &quot;lawn mowing Hamilton.&quot; Within
                        three months, the competitor was dominating local search results and picking up 15–20 enquiries
                        per month from Google. The Facebook-only operator saw no change in their social engagement —
                        but their new job pipeline dried up.
                    </p>

                    <h2>The Simple ROI Logic</h2>
                    <p>
                        Here&apos;s the maths for a typical NZ service business:
                    </p>
                    <ul>
                        <li>A professional website costs <strong>$1,000–$2,000 one-off</strong></li>
                        <li>You get even <strong>1 extra job per month</strong> worth $300–$1,000</li>
                        <li>That&apos;s <strong>$3,600–$12,000 per year</strong> in additional revenue</li>
                        <li>ROI: <strong>5x–17x</strong> in the first year alone</li>
                    </ul>
                    <p>
                        And unlike ads, a website doesn&apos;t stop working when you stop paying. It compounds over time
                        as your SEO improves and your Google reviews grow. For a full pricing breakdown, read our guide
                        to{' '}
                        <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">
                            how much a website costs in NZ
                        </Link>.
                    </p>

                    <ToolEmbed slug="website-roi-calculator" context="Calculate the return on investment a website could generate for your business" />

                    <h2>It Doesn&apos;t Have to Be Expensive or Complicated</h2>
                    <p>
                        A professional website doesn&apos;t cost $10,000. You don&apos;t need 15 pages, a blog, a
                        membership area, and an online store. Most NZ small businesses need a simple, well-built site
                        that:
                    </p>
                    <ul>
                        <li>Explains what you do and where you operate</li>
                        <li>Looks professional and loads fast</li>
                        <li>Has a clear way to contact you</li>
                        <li>Shows up on Google for local searches</li>
                    </ul>
                    <p>
                        At Fullstack Forge, we build{' '}
                        <Link href="/affordable-websites-nz" className="text-primary hover:underline">
                            professional sites starting at $1,000
                        </Link>{' '}
                        — no monthly fees, no lock-in. Live within 7–14 days. If you want to understand what makes a
                        good site,{' '}
                        <Link href="/blog/best-website-design-for-small-businesses" className="text-primary hover:underline">
                            our guide to small business website design
                        </Link>{' '}
                        covers the essentials.
                    </p>

                    <h2>Frequently Asked Questions</h2>

                    <h3>Can I just use Facebook instead of a website?</h3>
                    <p>
                        Facebook is useful for social engagement, but it&apos;s rented land — you don&apos;t control the
                        algorithm, reach, or platform. A website ranks on Google, captures leads directly, and builds
                        credibility that social media profiles can&apos;t match.
                    </p>

                    <h3>How much does a basic small business website cost in NZ?</h3>
                    <p>
                        A professional 3–5 page website for an NZ small business typically costs $1,000–$2,000 NZD. This
                        includes design, mobile optimisation, basic SEO, and a contact or quote form.
                    </p>

                    <h3>Is a website worth it if I already get work through word-of-mouth?</h3>
                    <p>
                        Yes. Even referrals Google your name before contacting you. Without a website, you lose
                        credibility and miss people who search for your service directly. A website amplifies
                        word-of-mouth rather than replacing it.
                    </p>

                    <h3>What&apos;s the minimum a small business website needs?</h3>
                    <p>
                        At minimum: a clear homepage explaining what you do and where, a way to contact you (form or
                        click-to-call), and mobile-responsive design. Even a simple 3-page site beats having no online
                        presence at all.
                    </p>

                    <h2>The Bottom Line</h2>
                    <p>
                        In 2026, not having a website isn&apos;t &quot;keeping it simple&quot; — it&apos;s leaving money
                        on the table. Even a straightforward 3-page site gives you a foundation that social media alone
                        can never provide: Google visibility, lead capture, professional credibility, and full ownership
                        of your online presence.
                    </p>
                    <p>
                        The question isn&apos;t whether you need a website. It&apos;s how much business you&apos;re losing
                        without one.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
