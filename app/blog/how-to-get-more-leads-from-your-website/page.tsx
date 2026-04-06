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

const SLUG = 'how-to-get-more-leads-from-your-website'
const TITLE = 'How to Get More Leads From Your Website in 2026 (Without Paying for Ads)'
const DESCRIPTION = "Your website gets traffic but no enquiries? Here are 10 proven lead generation tactics NZ small businesses are using right now to turn visitors into paying customers."
const DATE = '2025-03-01'
const UPDATED = '2026-03-28'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

const FAQ_ITEMS = [
    { q: 'How many leads should my website be generating?', a: 'A well-optimised small business website should convert 3–5% of visitors into leads. If you get 500 visitors/month, that\'s 15–25 enquiries. Below 1% usually means a conversion problem, not a traffic problem.' },
    { q: 'What\'s the fastest way to get more leads from my website?', a: 'Add a clear, specific call-to-action above the fold on every page. This single change — making the next step obvious — often doubles lead volume within weeks without changing anything else.' },
    { q: 'Do I need to spend money on ads to get website leads?', a: 'No. SEO, Google Business Profile optimisation, and conversion-focused design can generate consistent leads without ad spend. Ads can accelerate results, but organic lead generation compounds over time.' },
    { q: 'Why does my website get traffic but no enquiries?', a: 'Common reasons: no clear call-to-action, forms that are too long, missing trust signals (reviews/testimonials), slow page load, or content that doesn\'t match the visitor\'s intent. A website audit can pinpoint the specific issues.' },
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
    const [heroImage, midImage, bottomImage] = await Promise.all([
        fetchUnsplashImage('lead generation business growth'),
        fetchUnsplashImage('call to action website design'),
        fetchUnsplashImage('business owner laptop analytics'),
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
                    showLeadCalculator={true}
                    midCta={{
                        headline: 'See How Many Leads Your Website Is Losing',
                        body: 'Use our free calculator to find out exactly how many potential customers slip through the cracks each month.',
                    } as any}
                    linkPackage={linkPackage as any}
                    relatedLinks={[] as any}
                >

                    {/* ── INTRODUCTION ── */}
                    <p>
                        Here&apos;s a frustrating reality for many NZ small business owners: your website gets visitors,
                        but the phone never rings. You&apos;re paying for hosting, maybe running ads, yet
                        the enquiry form stays empty. Sound familiar?
                    </p>
                    <p>
                        The problem usually isn&apos;t traffic — it&apos;s <strong>conversion</strong>. The average small
                        business website converts at just 1–2%. That means 98 out of every 100 visitors leave without
                        doing anything. But with the right approach
                        to <Link href="/website-design-for-small-business" className="text-primary hover:underline">website design for small business</Link>,
                        you can push that to 5–10% — effectively tripling your leads without spending another dollar on ads.
                    </p>
                    <p>
                        This guide covers 10 proven website lead generation tactics that work for real NZ businesses
                        in 2026 — from plumbers in Auckland to cafés in Christchurch. If you&apos;re serious about
                        turning your site into a lead machine, keep reading.
                    </p>

                    {/* ── SECTION 1: THE CONVERSION GAP ── */}
                    <h2>Why Most NZ Business Websites Fail at Lead Generation</h2>
                    <p>
                        Before we get into tactics, let&apos;s diagnose the problem. Most websites built with drag-and-drop
                        tools — Wix, Squarespace, or a free WordPress theme — look decent but aren&apos;t engineered to
                        convert. They&apos;re essentially digital brochures: they tell people what you do, but
                        they don&apos;t <em>persuade</em> anyone to take action.
                    </p>
                    <p>
                        Common conversion killers include:
                    </p>
                    <ul>
                        <li><strong>No clear call-to-action</strong> above the fold</li>
                        <li><strong>Slow load times</strong> (every extra second costs 7% of conversions)</li>
                        <li><strong>Generic messaging</strong> that doesn&apos;t speak to a specific audience</li>
                        <li><strong>Too many form fields</strong> creating friction</li>
                        <li><strong>Zero social proof</strong> — no reviews, testimonials, or case studies</li>
                        <li><strong>Poor mobile experience</strong> — and over 60% of NZ traffic is mobile</li>
                    </ul>
                    <p>
                        We&apos;ve catalogued the full set of issues in our guide to{' '}
                        <Link href="/blog/common-website-mistakes-nz-small-businesses" className="text-primary hover:underline">
                            common website mistakes NZ small businesses make
                        </Link>.
                    </p>
                    <p>
                        If your site has even two of these issues, you&apos;re leaving leads on the table. The good news?
                        Every one of these problems is fixable. Our guide
                        to <Link href="/blog/best-website-design-for-small-businesses" className="text-primary hover:underline">the best website design for small businesses</Link> covers
                        the design principles in depth, but here we&apos;ll focus specifically on lead generation.
                    </p>

                    <ToolEmbed slug="lead-loss-calculator" context="Find out how many leads your website is losing each month" />

                    {/* ── SECTION 2: THE 10 TACTICS ── */}
                    <h2>10 Proven Ways to Get More Leads From Your Website</h2>

                    <h3>1. Replace &quot;Contact Us&quot; With a Lead Magnet</h3>
                    <p>
                        &quot;Contact us&quot; is the most ignored button on the internet. Nobody wakes up wanting to
                        fill out a generic form.
                    </p>
                    <p>
                        Instead, offer something valuable for free in exchange for an email address. This is called
                        a <strong>lead magnet</strong>, and it works because you&apos;re giving before you ask. Examples that work
                        for NZ businesses:
                    </p>
                    <ul>
                        <li><strong>Tradies:</strong> &quot;Free 5-point quote checklist for homeowners&quot;</li>
                        <li><strong>Cafés &amp; restaurants:</strong> &quot;Download our catering menu + pricing&quot;</li>
                        <li><strong>Professional services:</strong> &quot;Free website audit — see how your site scores&quot;</li>
                        <li><strong>E-commerce:</strong> &quot;10% off your first order&quot;</li>
                    </ul>
                    <p>
                        A well-placed lead magnet converts 3–5x better than a plain contact form. If you&apos;re a
                        tradie wondering how this applies to your industry, our article
                        on <Link href="/blog/website-for-tradies-nz" className="text-primary hover:underline">websites for tradies in NZ</Link> walks
                        through real examples.
                    </p>

                    <h3>2. Write Benefit-Driven Headlines (Not Feature Lists)</h3>
                    <p>
                        Your homepage headline is the first thing visitors read — and often the last, if it doesn&apos;t
                        hook them. Here&apos;s the difference:
                    </p>
                    <ul>
                        <li>❌ &quot;We Build Websites&quot;</li>
                        <li>✅ &quot;We Build Websites That Generate Customers for NZ Small Businesses&quot;</li>
                    </ul>
                    <p>
                        The second version tells the visitor exactly what outcome they&apos;ll get. Every headline
                        on your site should answer the question: <em>&quot;What&apos;s in it for me?&quot;</em>
                    </p>

                    <h3>3. Add Social Proof Next to Every CTA</h3>
                    <p>
                        When someone is about to click your call-to-action button, they&apos;re making a micro-decision:
                        &quot;Is this worth my time?&quot; Social proof — reviews, star ratings, client logos, or a simple
                        &quot;trusted by 50+ NZ businesses&quot; — removes that hesitation.
                    </p>
                    <p>
                        Place testimonials <em>right next to</em> your submit button, not buried on a separate page.
                        A Google review widget beside your contact form can lift conversions by 15–20%.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Effective call-to-action design driving website lead conversions"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h3>4. Cut Your Form Fields to the Absolute Minimum</h3>
                    <p>
                        Every additional form field reduces completions by roughly 10%. For lead capture, you
                        rarely need more than <strong>name</strong> and <strong>email</strong>. If you need more
                        detail (e.g. business type or budget), make those optional or collect them in a follow-up email.
                        For a full breakdown of quote form design and placement, see our guide on{' '}
                        <Link href="/blog/how-to-get-more-quote-requests-from-your-website" className="text-primary hover:underline">
                            getting more quote requests from your website
                        </Link>.
                    </p>
                    <p>
                        The rule is simple: the fewer barriers between &quot;interested&quot; and &quot;submitted,&quot; the
                        more leads you&apos;ll generate online.
                    </p>

                    <h3>5. Make Your CTA Impossible to Miss</h3>
                    <p>
                        Your main call-to-action button should be the most visually prominent element on the page.
                        Use a contrasting colour, make it large enough to tap easily on mobile, and use first-person
                        action language:
                    </p>
                    <ul>
                        <li>✅ &quot;Get My Free Audit&quot;</li>
                        <li>✅ &quot;Start My Project&quot;</li>
                        <li>❌ &quot;Submit&quot;</li>
                        <li>❌ &quot;Send&quot;</li>
                    </ul>
                    <p>
                        Pair it with a supporting line like: &quot;No spam. No obligation. We&apos;ll reply within 24 hours.&quot;
                        This kind of anxiety-reducing copy significantly increases conversions.
                    </p>

                    <h3>6. Fix Your Page Speed</h3>
                    <p>
                        Page speed isn&apos;t just a technical metric — it directly affects your bottom line.
                        A site that loads in 1 second converts <strong>3x better</strong> than one that loads in 5 seconds.
                        Google also uses Core Web Vitals as a ranking signal, so a slow site hurts both
                        conversions <em>and</em> your SEO.
                    </p>
                    <p>
                        Quick wins: compress images, remove unused plugins, use modern formats like WebP,
                        and choose fast hosting. If you want to benchmark your current site, use our free
                        website audit tool on the <Link href="/#audit" className="text-primary hover:underline">homepage</Link> —
                        it runs a real Google Lighthouse test and shows you exactly what to fix.
                    </p>
                    <p>
                        Page speed is also a core part
                        of <Link href="/blog/seo-for-small-business-nz" className="text-primary hover:underline">SEO for small business NZ</Link> —
                        getting it right means more organic traffic <em>and</em> better conversion from that traffic.
                    </p>

                    <h3>7. Use Multiple CTAs Per Page</h3>
                    <p>
                        A single contact form buried at the bottom is a conversion death sentence. Different visitors
                        are ready to convert at different points:
                    </p>
                    <ul>
                        <li><strong>Hero section:</strong> Catch high-intent visitors immediately</li>
                        <li><strong>Mid-page:</strong> After explaining your value proposition</li>
                        <li><strong>After testimonials:</strong> When trust is highest</li>
                        <li><strong>Bottom of page:</strong> For those who read everything</li>
                    </ul>
                    <p>
                        Each CTA should feel natural in context — not repetitive. Vary the wording
                        (&quot;Get a free quote,&quot; &quot;See our work,&quot; &quot;Book a call&quot;) so it feels like a conversation,
                        not a sales pitch.
                    </p>

                    <h3>8. Build Trust With a Professional Design</h3>
                    <p>
                        It takes 0.05 seconds for a visitor to form an opinion about your website. A dated, clunky design
                        signals &quot;unprofessional&quot; — and visitors bounce. A clean, modern layout signals credibility
                        and makes people <em>want</em> to do business with you.
                    </p>
                    <p>
                        This is where investing
                        in <Link href="/affordable-websites-nz" className="text-primary hover:underline">affordable website design NZ</Link> pays
                        for itself. A professionally designed site doesn&apos;t need to cost $10,000 — but it does need
                        to look the part. If you&apos;re weighing up the options, our comparison
                        of <Link href="/blog/diy-vs-professional-website" className="text-primary hover:underline">DIY vs professional websites</Link> breaks
                        down the real ROI.
                    </p>

                    <h3>9. Optimise for Local Search</h3>
                    <p>
                        If you serve a specific region — Auckland, Christchurch, Wellington — your website needs
                        to show up when locals search for your service. That means:
                    </p>
                    <ul>
                        <li>Location keywords in your title tags and headings</li>
                        <li>A Google Business Profile linked to your site</li>
                        <li>NAP (Name, Address, Phone) consistency across the web</li>
                        <li>Local schema markup</li>
                    </ul>
                    <p>
                        For example, a Christchurch-based business should have a dedicated landing page
                        targeting <Link href="/web-design-christchurch" className="text-primary hover:underline">web design Christchurch</Link> keywords.
                        Local SEO is one of the highest-ROI strategies because the traffic it brings
                        is already looking for exactly what you offer.
                    </p>

                    {bottomImage && (
                        <UnsplashImage
                            src={bottomImage.url}
                            alt="Business owner reviewing website analytics and lead generation data"
                            photographer={bottomImage.photographer}
                            profileUrl={bottomImage.profileUrl}
                        />
                    )}

                    <h3>10. Add Live Chat or a Quick-Response Promise</h3>
                    <p>
                        Speed of response is a competitive advantage most NZ businesses ignore. If a potential customer
                        fills out your form and hears back 3 days later, they&apos;ve probably already hired someone else.
                    </p>
                    <p>
                        Add a &quot;We reply within 24 hours&quot; badge to your contact form. Better yet, use a simple
                        live-chat widget during business hours. Leads contacted within 5 minutes are <strong>21x more
                            likely</strong> to convert than those contacted after 30 minutes.
                    </p>

                    {/* ── SECTION 3: THE COMPOUND EFFECT ── */}
                    <h2>The Compound Effect: Small Fixes, Massive Results</h2>
                    <p>
                        Here&apos;s where it gets exciting. You don&apos;t need to implement all 10 tactics at once.
                        Even small improvements compound:
                    </p>
                    <ul>
                        <li>Improving from <strong>2% → 4%</strong> conversion = <strong>2x more leads</strong> from the same traffic</li>
                        <li>Improving from <strong>2% → 6%</strong> conversion = <strong>3x more leads</strong> — without spending a cent more on ads</li>
                    </ul>
                    <p>
                        For a site getting 500 visitors/month, going from 2% to 6% means 20 extra leads per month.
                        At an average NZ service job value of $500, that&apos;s <strong>$10,000/month in potential revenue</strong> from
                        website changes alone. If you&apos;re curious what those changes might cost, check
                        out <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">how much a website costs in NZ</Link> for
                        a transparent pricing breakdown.
                    </p>

                    {/* ── SECTION 4: WHAT TO PRIORITISE ── */}
                    <h2>Where to Start: A Priority Checklist</h2>
                    <p>
                        If you&apos;re feeling overwhelmed, here&apos;s the order we recommend for maximum ROI:
                    </p>
                    <ol>
                        <li><strong>Fix page speed</strong> — instant impact on both SEO and conversions</li>
                        <li><strong>Rewrite your headline</strong> — benefit-driven, specific to your audience</li>
                        <li><strong>Add a lead magnet</strong> — replace &quot;Contact Us&quot; with a free offer</li>
                        <li><strong>Cut form fields</strong> — name and email only</li>
                        <li><strong>Add social proof beside your CTA</strong></li>
                        <li><strong>Add multiple CTAs</strong> — hero, mid-page, bottom</li>
                        <li><strong>Optimise for local search</strong></li>
                    </ol>
                    <p>
                        Even doing the first three will make a noticeable difference within weeks.
                    </p>

                    {/* ── SECTION 5: REAL EXAMPLE ── */}
                    <h2>Real Example: A Christchurch Cleaning Business</h2>
                    <p>
                        One of our clients — a cleaning company in Christchurch — was getting around 400 visitors
                        a month from Google but only 3–4 enquiries. After we rebuilt their site with a clear lead
                        magnet (&quot;Get an Instant Quote&quot;), slimmed down their form, added Google reviews beside
                        the CTA, and improved page speed from 4.2s to 1.1s, their monthly enquiries jumped
                        to <strong>18–22</strong>.
                    </p>
                    <p>
                        Same traffic. Same ad spend (zero). Just a site that was engineered to convert. If you run
                        a service business, our article
                        on <Link href="/blog/website-for-cleaning-business-nz" className="text-primary hover:underline">websites for cleaning businesses in NZ</Link> digs
                        deeper into this case study.
                    </p>

                    {/* ── SECTION 6: ECOMMERCE NOTE ── */}
                    <h2>For E-Commerce: Lead Generation Looks Different</h2>
                    <p>
                        If you sell products online, &quot;leads&quot; might mean abandoned-cart recovery emails,
                        newsletter sign-ups, or wishlist captures. The principles are the same — reduce friction,
                        offer value, build trust — but the implementation differs.
                    </p>
                    <p>
                        We cover the e-commerce angle in our guide
                        to <Link href="/ecommerce-websites-nz" className="text-primary hover:underline">ecommerce website development NZ</Link>,
                        including Shopify vs custom-built stores and which approach generates more revenue per visitor.
                    </p>

                    {/* ── FAQ SECTION ── */}
                    <h2>Frequently Asked Questions</h2>

                    <h3>How many leads should my website be generating?</h3>
                    <p>
                        A well-optimised small business website should convert 3–5% of visitors into leads. If you
                        get 500 visitors/month, that&apos;s 15–25 enquiries. Below 1% usually means a conversion
                        problem, not a traffic problem.
                    </p>

                    <h3>What&apos;s the fastest way to get more leads from my website?</h3>
                    <p>
                        Add a clear, specific call-to-action above the fold on every page. This single change —
                        making the next step obvious — often doubles lead volume within weeks without changing
                        anything else.
                    </p>

                    <h3>Do I need to spend money on ads to get website leads?</h3>
                    <p>
                        No. SEO, Google Business Profile optimisation, and conversion-focused design can generate
                        consistent leads without ad spend. Ads can accelerate results, but organic lead generation
                        compounds over time. Our{' '}
                        <Link href="/blog/seo-for-small-business-nz" className="text-primary hover:underline">
                            SEO guide for NZ small businesses
                        </Link>{' '}
                        covers how to build organic traffic from scratch.
                    </p>

                    <h3>Why does my website get traffic but no enquiries?</h3>
                    <p>
                        Common reasons: no clear call-to-action, forms that are too long, missing trust signals
                        (reviews/testimonials), slow page load, or content that doesn&apos;t match the visitor&apos;s
                        intent. A website audit can pinpoint the specific issues.
                    </p>

                    {/* ── RELATED READING ── */}
                    <h2>Related Guides</h2>
                    <ul>
                        <li>
                            <Link href="/blog/how-to-get-customers-from-your-website" className="text-primary hover:underline">
                                How to Get Customers From Your Website — The Complete Beginner&apos;s Framework
                            </Link>{' '}
                            (start here if you&apos;re new to website marketing)
                        </li>
                        <li>
                            <Link href="/blog/best-website-design-for-small-businesses" className="text-primary hover:underline">
                                Best Website Design for Small Businesses — What Actually Works
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">
                                How Much Does a Website Cost in NZ? 2026 Pricing Guide
                            </Link>
                        </li>
                    </ul>

                    {/* ── FINAL CTA ── */}
                    <h2>Stop Losing Leads — Get a Free Website Audit</h2>
                    <p>
                        Your website should be your hardest-working salesperson — bringing in leads 24/7, even while
                        you sleep. If it&apos;s not doing that, something needs to change.
                    </p>
                    <p>
                        We build <Link href="/website-design-for-small-business" className="text-primary hover:underline">websites for small businesses across NZ</Link> that
                        are designed from the ground up to generate leads. Every site includes fast hosting, mobile
                        optimisation, SEO fundamentals, and conversion-focused design — starting
                        from <Link href="/affordable-websites-nz" className="text-primary hover:underline">$1,000</Link>.
                    </p>
                    <p>
                        <strong>Ready to see what&apos;s holding your site back?</strong> Run
                        our <Link href="/#audit" className="text-primary hover:underline font-semibold">free website audit</Link> and
                        get an instant score on speed, SEO, mobile-friendliness, and more — powered by Google Lighthouse.
                        Or <Link href="/#contact" className="text-primary hover:underline font-semibold">get in touch</Link> for
                        a free consultation and we&apos;ll put together a plan to turn your website into a lead-generating machine.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
