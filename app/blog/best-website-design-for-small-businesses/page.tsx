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

const SLUG = 'best-website-design-for-small-businesses'
const TITLE = 'Best Website Design for Small Businesses in 2026'
const DESCRIPTION = 'What makes a great small business website in NZ? Design principles, layout tips, trust signals, and real examples that turn visitors into customers.'
const DATE = '2025-01-20'
const UPDATED = '2026-04-04'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

const FAQ_ITEMS = [
    { q: 'What makes a good small business website?', a: 'A good small business website loads in under 2 seconds, works perfectly on mobile, has a clear value proposition above the fold, includes trust signals like reviews and case studies, and guides visitors toward a specific action like calling or filling out a form.' },
    { q: 'How much does a small business website cost in NZ?', a: 'In New Zealand, a professional small business website typically costs $1,000–$2,000 NZD. DIY builders like Wix or Squarespace cost $200–$500/year but require your time and often lack performance and SEO advantages.' },
    { q: 'Should I use a website builder or hire a professional?', a: 'If your website is a primary lead generation tool, hiring a professional is usually worth it. A custom-built site costs less over 3 years than most builder subscriptions and performs better for SEO and conversions.' },
    { q: 'How important is mobile design for small businesses?', a: 'Critical. Over 60% of NZ web traffic comes from mobile devices, and Google uses mobile-first indexing. If your site doesn\'t work well on phones, you\'re losing the majority of potential customers and ranking lower in search results.' },
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
        fetchUnsplashImage('modern website design'),
        fetchUnsplashImage('user experience web design'),
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
                    showLeadCalculator={true}
                    midCta={{
                        headline: 'Want a Website That Actually Converts?',
                        body: 'Great design isn\'t just about looks — it\'s about turning visitors into customers. Let us build yours.',
                    } as any}
                    linkPackage={linkPackage as any}
                    relatedLinks={[] as any}
                >
                    <h2>What Makes a &quot;Good&quot; Small Business Website in 2026?</h2>
                    <p>
                        A great small business website isn&apos;t about flashy animations or trendy design. It&apos;s about
                        <strong> converting visitors into customers</strong>. Every element — headline, layout, images,
                        buttons — should serve that goal.
                    </p>
                    <p>
                        The difference between a website that generates 3 enquiries a month and one that generates 20
                        usually isn&apos;t traffic — it&apos;s design. Not &quot;pretty&quot; design, but
                        <strong> strategic design</strong> that guides visitors from &quot;just browsing&quot; to
                        &quot;take my money.&quot;
                    </p>
                    <p>
                        This guide covers what actually works for NZ small businesses — the design principles,
                        homepage structure, trust signals, and layout decisions that separate high-converting sites from
                        expensive digital brochures. If you&apos;re already thinking about costs, our{' '}
                        <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">
                            complete NZ website pricing guide
                        </Link>{' '}
                        breaks down what you should expect to pay.
                    </p>

                    <h2>The 7 Principles of High-Converting Small Business Design</h2>

                    <h3>1. Clear Value Proposition Above the Fold</h3>
                    <p>
                        Visitors decide within 3 seconds whether to stay or leave. Your headline must instantly communicate
                        what you do, who you serve, and why they should care. No vague taglines — be specific about the
                        outcome you deliver.
                    </p>
                    <p>
                        <strong>Bad:</strong> &quot;Welcome to Our Company&quot;<br />
                        <strong>Good:</strong> &quot;We Build Websites That Get Christchurch Tradies More Jobs&quot;
                    </p>
                    <p>
                        The second version tells the visitor exactly what you do, where you operate, and what outcome
                        they&apos;ll get — all in one sentence. For NZ service businesses, specificity wins over
                        cleverness every time.
                    </p>

                    <h3>2. Mobile-First Design</h3>
                    <p>
                        Over 60% of NZ web traffic is mobile. Google uses mobile-first indexing, meaning it ranks
                        your site based on the mobile version. If your site doesn&apos;t work perfectly on phones,
                        you&apos;re losing the majority of your visitors <em>and</em> ranking lower in search results.
                    </p>
                    <p>
                        Mobile-first doesn&apos;t mean shrinking the desktop version. It means designing for the
                        small screen first: tap-friendly buttons, readable text without zooming, fast-loading images,
                        and a click-to-call button that&apos;s always accessible.
                    </p>

                    <h3>3. Fast Load Times</h3>
                    <p>
                        Every second of load time costs you roughly 7% in conversions. A site that takes 4 seconds to
                        load has already lost a quarter of its visitors before they see your content.
                    </p>
                    <p>
                        The target: <strong>under 2 seconds</strong>. That means optimised images, modern hosting
                        (Netlify and Vercel offer near-instant load times), clean code, and no heavy builder bloat.
                        This is one of the biggest advantages of{' '}
                        <Link href="/blog/diy-vs-professional-website" className="text-primary hover:underline">
                            professional websites over DIY builders
                        </Link>{' '}
                        — custom-built sites are dramatically faster.
                    </p>

                    <h3>4. Strategic CTAs (Calls to Action)</h3>
                    <p>
                        Don&apos;t make visitors hunt for the next step. Every section should guide them toward a clear
                        action — whether that&apos;s calling you, filling out a form, or requesting a quote.
                    </p>
                    <p>
                        The best small business websites use multiple CTAs placed contextually throughout the page:
                    </p>
                    <ul>
                        <li><strong>Hero section:</strong> Primary CTA for high-intent visitors</li>
                        <li><strong>After explaining your service:</strong> &quot;Get a Free Quote&quot;</li>
                        <li><strong>After social proof:</strong> &quot;See Our Work&quot; or &quot;Book a Call&quot;</li>
                        <li><strong>Bottom of page:</strong> Full contact form for readers who need all the information first</li>
                    </ul>
                    <p>
                        Use action-oriented, first-person language: &quot;Get My Free Audit&quot; converts better than
                        &quot;Submit.&quot; Our guide to{' '}
                        <Link href="/blog/how-to-get-more-leads-from-your-website" className="text-primary hover:underline">
                            getting more leads from your website
                        </Link>{' '}
                        digs into CTA strategy in detail.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Clean, user-friendly website design focused on small business conversions"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h3>5. Social Proof and Trust Signals</h3>
                    <p>
                        If a visitor has never heard of you, they need proof that you deliver results. Trust signals
                        include:
                    </p>
                    <ul>
                        <li><strong>Google reviews</strong> embedded directly on your site</li>
                        <li><strong>Testimonials</strong> with real names, businesses, and specific outcomes</li>
                        <li><strong>Case studies</strong> showing before/after results</li>
                        <li><strong>Client logos</strong> or &quot;trusted by X businesses&quot; badges</li>
                        <li><strong>Industry certifications</strong> (LBP, Master Electricians, etc.)</li>
                    </ul>
                    <p>
                        The key: place trust signals <em>next to</em> your CTAs, not on a separate testimonials page
                        nobody visits. A Google review widget beside your contact form can lift conversions by 15–20%.
                    </p>

                    <h3>6. Simple, Scannable Layout</h3>
                    <p>
                        People scan, they don&apos;t read. Eye-tracking studies show visitors follow an F-pattern:
                        they scan the top, then the left side, and stop at elements that stand out.
                    </p>
                    <p>
                        Design for this behaviour:
                    </p>
                    <ul>
                        <li>Short paragraphs (3–4 lines max)</li>
                        <li>Clear headings that communicate value even when skimming</li>
                        <li>Bullet points for key information</li>
                        <li>Plenty of whitespace — don&apos;t cram content together</li>
                        <li>Visual hierarchy: important elements are bigger, bolder, or differently coloured</li>
                    </ul>

                    <h3>7. SEO Built In From Day One</h3>
                    <p>
                        A beautiful website that nobody finds is useless. Proper meta tags, heading structure, fast load
                        times, schema markup, and quality content give you a real shot at ranking on Google.
                    </p>
                    <p>
                        Every page should target a specific keyword relevant to your business and location. For example,
                        a Christchurch plumber should target &quot;plumber Christchurch&quot; — not just &quot;plumbing
                        services.&quot; Our{' '}
                        <Link href="/blog/seo-for-small-business-nz" className="text-primary hover:underline">
                            beginner&apos;s SEO guide for NZ small businesses
                        </Link>{' '}
                        walks through the fundamentals.
                    </p>

                    <h2>Homepage Layout That Converts: A Practical Blueprint</h2>
                    <p>
                        Your homepage is your most visited page and your first impression. For a full deep dive, see
                        our guide to{' '}
                        <Link href="/blog/best-homepage-layout-for-small-business-website" className="text-primary hover:underline">
                            the best homepage layout for small business websites
                        </Link>. Here&apos;s a layout structure
                        that consistently converts for NZ service businesses and tradies:
                    </p>
                    <table>
                        <thead>
                            <tr><th>Section</th><th>Purpose</th><th>Key Element</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Hero</td><td>Hook the visitor in 3 seconds</td><td>Benefit headline + primary CTA</td></tr>
                            <tr><td>Proof bar</td><td>Build instant credibility</td><td>Star rating, review count, years in business</td></tr>
                            <tr><td>Services overview</td><td>Show what you offer</td><td>3–4 services with clear descriptions</td></tr>
                            <tr><td>Social proof</td><td>Build trust</td><td>Testimonials, Google reviews, or case study</td></tr>
                            <tr><td>How it works</td><td>Reduce friction</td><td>3-step process (Enquire → Quote → Done)</td></tr>
                            <tr><td>About/credibility</td><td>Show you&apos;re real</td><td>Photo, qualifications, experience</td></tr>
                            <tr><td>Contact/CTA</td><td>Capture the lead</td><td>Simple form + phone number + response promise</td></tr>
                        </tbody>
                    </table>
                    <p>
                        This isn&apos;t theory — it&apos;s the exact structure we use for{' '}
                        <Link href="/website-design-for-small-business" className="text-primary hover:underline">
                            our small business websites
                        </Link>. Every section earns its place by moving the visitor closer to taking action.
                    </p>

                    <h2>5 Design Mistakes NZ Small Businesses Make</h2>
                    <ol>
                        <li>
                            <strong>Prioritising aesthetics over clarity</strong> — A gorgeous hero image with a vague
                            tagline doesn&apos;t convert. Visitors need to know what you do within seconds.
                        </li>
                        <li>
                            <strong>Hiding the phone number</strong> — For service businesses, the phone number should be
                            visible on every page, especially on mobile. Make it tap-to-call.
                        </li>
                        <li>
                            <strong>Too many pages with too little content</strong> — Five thin pages dilute your SEO.
                            Three strong, well-structured pages outperform ten weak ones.
                        </li>
                        <li>
                            <strong>No clear next step</strong> — Every page should answer the question &quot;What should
                            I do now?&quot; If your visitor has to think about it, they&apos;ll leave instead.
                        </li>
                        <li>
                            <strong>Using stock photos of handshakes and skylines</strong> — Real photos of your team,
                            your work, your location build trust. Stock photos scream &quot;we couldn&apos;t be bothered.&quot;
                        </li>
                    </ol>

                    <ToolEmbed slug="website-roi-calculator" context="See the potential return on investment from a professionally designed website" />

                    <h2>Real Example: What Good NZ Web Design Looks Like</h2>
                    <p>
                        A Christchurch cleaning company we worked with had a Wix site that looked acceptable but
                        generated fewer than 5 enquiries per month from 400+ visitors. The problems: slow load time
                        (4+ seconds), no clear CTA above the fold, testimonials buried on a separate page, and no
                        mobile click-to-call.
                    </p>
                    <p>
                        After rebuilding with a conversion-focused design — benefit-driven headline, embedded Google
                        reviews beside the contact form, sticky click-to-call button, and sub-1-second load time —
                        enquiries jumped to 18–22 per month. Same traffic, same business, different design.
                    </p>
                    <p>
                        The investment? <Link href="/affordable-websites-nz" className="text-primary hover:underline">Website builds from $1,000</Link>.
                        The first week of additional bookings covered the entire cost of the website.
                    </p>

                    <h2>Website Design Checklist for NZ Small Businesses</h2>
                    <p>
                        Before you launch (or relaunch) your site, make sure you can tick every box. We also have a
                        comprehensive{' '}
                        <Link href="/blog/small-business-website-checklist-nz" className="text-primary hover:underline">
                            small business website checklist
                        </Link>{' '}
                        covering all the conversion essentials.
                    </p>
                    <ul>
                        <li>✅ Clear headline explaining what you do and who you help</li>
                        <li>✅ Loads in under 2 seconds on mobile</li>
                        <li>✅ Phone number visible and tappable on every page</li>
                        <li>✅ At least one CTA visible without scrolling</li>
                        <li>✅ Google reviews or testimonials on the homepage</li>
                        <li>✅ Service pages with specific descriptions and location keywords</li>
                        <li>✅ Contact form with 3 fields or fewer</li>
                        <li>✅ Professional photos of your work, team, or premises</li>
                        <li>✅ Meta title and description set for every page</li>
                        <li>✅ Google Business Profile linked and consistent</li>
                    </ul>

                    <h2>Frequently Asked Questions</h2>

                    <h3>What makes a good small business website?</h3>
                    <p>
                        A good small business website loads in under 2 seconds, works perfectly on mobile, has a clear
                        value proposition above the fold, includes trust signals like reviews and case studies, and
                        guides visitors toward a specific action like calling or filling out a form.
                    </p>

                    <h3>How much does a small business website cost in NZ?</h3>
                    <p>
                        In New Zealand, a professional small business website typically costs $1,000–$2,000 NZD. DIY
                        builders like Wix or Squarespace cost $200–$500/year but require your time and often lack
                        performance and SEO advantages. See our{' '}
                        <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">
                            full NZ website pricing guide
                        </Link>{' '}
                        for a detailed breakdown.
                    </p>

                    <h3>Should I use a website builder or hire a professional?</h3>
                    <p>
                        If your website is a primary lead generation tool, hiring a professional is usually worth it.
                        A custom-built site costs less over 3 years than most builder subscriptions and performs better
                        for SEO and conversions. We break down the trade-offs in our{' '}
                        <Link href="/blog/diy-vs-professional-website" className="text-primary hover:underline">
                            DIY vs professional website comparison
                        </Link>.
                    </p>

                    <h3>How important is mobile design for small businesses?</h3>
                    <p>
                        Critical. Over 60% of NZ web traffic comes from mobile devices, and Google uses mobile-first
                        indexing. If your site doesn&apos;t work well on phones, you&apos;re losing the majority of
                        potential customers and ranking lower in search results.
                    </p>

                    <h2>Ready to Build a Website That Actually Works?</h2>
                    <p>
                        We build{' '}
                        <Link href="/website-design-for-small-business" className="text-primary hover:underline">
                            websites for small businesses across NZ
                        </Link>{' '}
                        starting at $1,000. Every site follows these principles — mobile-first, conversion-focused,
                        SEO-ready, and designed to pay for itself through leads and enquiries.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
