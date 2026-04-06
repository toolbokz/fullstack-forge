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

const SLUG = 'website-for-tradies-nz'
const TITLE = 'Tradie Website NZ: How Auckland Tradies Get More Jobs Online in 2026'
const DESCRIPTION = 'The complete guide to tradie websites in New Zealand. Learn how plumbers, electricians, and builders use web design and local SEO to get more leads and higher-paying jobs.'
const DATE = '2025-02-10'
const UPDATED = '2026-04-04'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

const FAQ_ITEMS = [
    { q: 'How much does a tradie website cost in NZ?', a: 'A professional tradie website costs $1,000–$2,000 NZD depending on the number of pages and features. A 3–5 page site with a quote form, photo gallery, and local SEO is enough for most tradies starting out.' },
    { q: 'Do tradies really need a website?', a: 'Yes. 87% of customers research tradespeople online before calling. Without a website, you\'re invisible to the majority of potential customers — especially those searching Google for "[trade] near me" or "[trade] [city]."' },
    { q: 'How do tradies get more jobs from Google?', a: 'Claim your Google Business Profile, build a website with service + location pages, collect Google reviews from customers, and ensure your business name, address, and phone number are consistent everywhere online.' },
    { q: 'What pages should a tradie website have?', a: 'At minimum: a homepage (what you do + where), service pages (one per trade type), a gallery (before/after photos), a quote request form, and a service areas page listing the suburbs you cover.' },
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
        fetchUnsplashImage('construction worker tools'),
        fetchUnsplashImage('contractor business mobile phone'),
        fetchUnsplashImage('tradesman working Auckland'),
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
                    relatedLinks={[] as any}
                    midCta={{
                        headline: 'Want a Website That Actually Gets You Jobs?',
                        body: 'Most tradies read this and think "I should do this" — then never do. Let us handle it while you focus on the tools.',
                    } as any}
                    linkPackage={linkPackage as any}
                >
                    <p>
                        If you&apos;re a plumber, electrician, builder, or any other tradie in New Zealand, your next customer
                        is searching for you right now. Not on Facebook. Not through a mate. On <strong>Google</strong>.
                    </p>
                    <p>
                        &quot;Plumber near me Auckland&quot; gets thousands of searches every month. &quot;Electrician Auckland&quot; — same story.
                        The question is: when someone searches for your trade in your area, do they find <strong>you</strong> — or
                        your competitor?
                    </p>
                    <p>
                        A tradie website in New Zealand isn&apos;t a luxury anymore. It&apos;s how you get found, get trusted, and get hired.
                        This guide shows you exactly what you need, what it costs, and how to turn a simple website into a
                        lead-generating machine.
                    </p>

                    <h2>Why Word-of-Mouth Alone Is Costing You Jobs</h2>
                    <p>
                        &quot;I get all my work through referrals — I don&apos;t need a website.&quot; We hear this from tradies across
                        Auckland and New Zealand every single week.
                    </p>
                    <p>
                        And it works — until it doesn&apos;t. Referral pipelines dry up. Builders finish big projects and hit a gap.
                        Plumbers lose their best referral source when a property manager retires. Suddenly you&apos;re scrambling
                        for work instead of choosing it.
                    </p>
                    <p>
                        Here&apos;s the other truth: even when someone <em>does</em> refer you, the first thing that new customer
                        does is Google your name. If they find nothing — no website, no reviews, no proof you exist — they
                        move on to the tradie who <strong>does</strong> show up.
                    </p>
                    <p>
                        A tradie website doesn&apos;t replace word-of-mouth. It <strong>amplifies</strong> it. It turns one referral
                        into a confident customer who&apos;s already sold before they pick up the phone.
                    </p>

                    <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg my-8">
                        <p className="font-semibold text-primary mb-2">Still relying on word-of-mouth alone?</p>
                        <p className="text-sm">
                            A professional tradie website works 24/7, capturing leads while you&apos;re on the tools.{' '}
                            <Link href="/affordable-websites-nz" className="text-primary hover:underline font-semibold">
                                See our tradie website packages →
                            </Link>
                        </p>
                    </div>

                    <h2>Tradie Website NZ: The Search Volume You&apos;re Missing</h2>
                    <p>
                        Every month in New Zealand, thousands of homeowners, landlords, and property managers search Google
                        for tradies. Here&apos;s what the real numbers look like:
                    </p>
                    <ul>
                        <li><strong>&quot;Plumber Auckland&quot;</strong> — 6,600+ searches/month</li>
                        <li><strong>&quot;Electrician near me&quot;</strong> — 4,400+ searches/month</li>
                        <li><strong>&quot;Builder Auckland&quot;</strong> — 2,900+ searches/month</li>
                        <li><strong>&quot;Roofer near me&quot;</strong> — 1,300+ searches/month</li>
                        <li><strong>&quot;Plumber near me Auckland&quot;</strong> — 1,800+ searches/month</li>
                        <li><strong>&quot;Landscaper Christchurch&quot;</strong> — 900+ searches/month</li>
                    </ul>
                    <p>
                        Every single one of those searches is a homeowner ready to hire. Without a tradie website,
                        every one of those leads goes straight to your competitors.
                    </p>
                    <p>
                        This is the difference between chasing work and having work come to you. Tradie web design
                        built for local SEO puts you in front of these customers automatically — day after day, month
                        after month.
                    </p>

                    <h2>What Makes a High-Converting Tradie Website</h2>
                    <p>
                        You don&apos;t need a 20-page corporate site. Auckland tradies who generate the most leads online
                        keep things simple but strategic. Here&apos;s exactly what a tradie website in New Zealand needs:
                    </p>

                    <h3>1. A Homepage That Converts in 5 Seconds</h3>
                    <p>
                        Visitors decide in seconds whether to stay or leave. Your homepage must immediately answer three
                        questions: <strong>What do you do?</strong> <strong>Where do you work?</strong> <strong>How do I
                            contact you?</strong>
                    </p>
                    <p>
                        Include your trade, your service area (e.g. &quot;Auckland&apos;s North Shore&quot;, &quot;Greater
                        Christchurch&quot;), and a prominent click-to-call button. No generic welcome messages. No
                        stock photos of handshakes.
                    </p>

                    <h3>2. Service Pages Optimised for Local SEO</h3>
                    <p>
                        Every service you offer should have its own section or page. This is how Google knows to show
                        your plumber website when someone searches &quot;hot water cylinder replacement Auckland&quot;
                        — not just &quot;plumber.&quot;
                    </p>
                    <p>
                        Be specific. Instead of listing &quot;plumbing services,&quot; break it down: drain unblocking,
                        bathroom renovations, gas fitting, hot water systems. Each service described clearly with your
                        service area mentioned naturally.
                    </p>

                    <h3>3. Photo Gallery of Real Work</h3>
                    <p>
                        Tradies who show their work get significantly more enquiries. Before-and-after shots of real
                        jobs build trust instantly — especially for builders, landscapers, and painters.
                    </p>
                    <p>
                        You don&apos;t need professional photography. Phone photos of completed jobs work brilliantly.
                        Customers want to see <em>your</em> real work, not polished stock images.
                    </p>

                    <h3>4. Click-to-Call and Simple Contact Form</h3>
                    <p>
                        Over 70% of tradie website visitors come from mobile phones. If they can&apos;t call you with
                        one tap, you&apos;re losing leads. A sticky click-to-call button and a quote request form with
                        just 3–4 fields is all you need.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Tradesman using mobile phone to manage business enquiries from their website"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h3>5. Google Reviews Front and Centre</h3>
                    <p>
                        88% of consumers trust online reviews as much as personal recommendations. Embedding your Google
                        reviews directly on your tradie website turns social proof into instant credibility. If you&apos;ve
                        got 50+ five-star reviews, that&apos;s your most powerful sales tool — put them where visitors
                        can&apos;t miss them.
                    </p>

                    <h3>6. Google Business Profile Integration</h3>
                    <p>
                        Your tradie website and Google Business Profile should work together. Link your website from your
                        GBP listing, use consistent name/address/phone (NAP) details, and target the same service areas.
                        This is the foundation of local SEO for tradies — and it&apos;s what gets you into Google&apos;s
                        map pack results.
                    </p>

                    <h2>Tradie SEO New Zealand: How to Rank on Google Locally</h2>
                    <p>
                        Having a website is step one. Ranking it on Google is where the real returns come. For a
                        deeper dive into ranking strategies, see our guide to{' '}
                        <Link href="/blog/local-seo-for-tradies-nz" className="text-primary hover:underline">
                            local SEO for tradies in NZ
                        </Link>. Here&apos;s
                        what local SEO for tradies in New Zealand actually involves:
                    </p>
                    <ul>
                        <li>
                            <strong>Location-specific pages</strong> — If you serve Auckland, Hamilton, and Tauranga,
                            create content targeting each area. &quot;Electrician Auckland&quot; and &quot;Electrician
                            Hamilton&quot; are completely different searches.
                        </li>
                        <li>
                            <strong>Consistent NAP across the web</strong> — Your business name, address, and phone number
                            must match everywhere: your website, Google Business Profile, NoCowboys, Builderscrack,
                            and Yellow Pages.
                        </li>
                        <li>
                            <strong>Review generation strategy</strong> — Ask every happy customer for a Google review.
                            More reviews = higher rankings = more leads. It&apos;s the single highest-ROI tradie
                            marketing activity in New Zealand.
                        </li>
                        <li>
                            <strong>Fast, mobile-first design</strong> — Google prioritises fast-loading, mobile-friendly
                            websites. If your site takes more than 3 seconds to load on a phone, you&apos;re losing both
                            rankings and customers.
                        </li>
                        <li>
                            <strong>Schema markup</strong> — Structured data tells Google exactly what your business does,
                            where you operate, and your review rating. Most tradie websites miss this entirely.
                        </li>
                    </ul>

                    <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg my-8">
                        <p className="font-semibold text-primary mb-2">Want tradie SEO done for you?</p>
                        <p className="text-sm">
                            We build tradie websites with local SEO baked in from day one — so you start ranking
                            from the moment you launch.{' '}
                            <Link href="/#contact" className="text-primary hover:underline font-semibold">
                                Get a free SEO audit →
                            </Link>
                        </p>
                    </div>

                    <h2>How Much Does a Tradie Website Cost in NZ?</h2>
                    <p>
                        This is the question every tradie asks first. For a detailed breakdown, see our full guide to{' '}
                        <Link href="/blog/how-much-does-a-tradie-website-cost-in-nz" className="text-primary hover:underline">
                            tradie website costs in NZ
                        </Link>. Here&apos;s the honest summary of website design
                        for tradies in NZ:
                    </p>
                    <ul>
                        <li><strong>DIY website builders</strong> (Wix, Squarespace) — $20–40/month, but you spend hours
                            fighting templates and get zero SEO advantage.</li>
                        <li><strong>Freelance web designer</strong> — $1,500–5,000 one-off, quality varies wildly, and
                            you often wait 4–8 weeks.</li>
                        <li><strong>Agency build</strong> — $5,000–15,000+, overkill for most tradies who need leads,
                            not a brand campaign.</li>
                        <li><strong>Specialist tradie web design</strong> (like Fullstack Forge) — $1,000–2,000, purpose-built
                            for lead generation, delivered in days, includes local SEO setup.</li>
                    </ul>
                    <p>
                        The right investment isn&apos;t about building the cheapest website — it&apos;s about building
                        one that <strong>pays for itself</strong>. One new job from your website and the entire cost is
                        covered.
                    </p>

                    <ToolEmbed slug="lead-loss-calculator" context="See how much revenue your current website is losing every month:" />

                    <h2>Real Results: Auckland Tradies Getting More Jobs Online</h2>
                    <p>
                        A Christchurch plumber we built a site for went from zero online presence to <strong>25 monthly
                            enquiries</strong> within 8 weeks of launching. Total investment: $1,000 for a website build.
                        The first job from the website paid for the site 3x over.
                    </p>
                    <p>
                        An Auckland electrician saw their Google Business Profile views increase by 340% after we launched
                        their website with proper local SEO and schema markup. They now get 12–15 quote requests per week
                        without spending a dollar on ads.
                    </p>
                    <p>
                        These aren&apos;t outliers. This is what happens when a tradie website is built correctly — optimised
                        for local search, designed for conversions, and backed by proper tradie SEO.
                    </p>

                    {bottomImage && (
                        <UnsplashImage
                            src={bottomImage.url}
                            alt="Professional tradesman on a job site in Auckland, New Zealand"
                            photographer={bottomImage.photographer}
                            profileUrl={bottomImage.profileUrl}
                        />
                    )}

                    <h2>5 Mistakes Tradies Make With Their Websites</h2>
                    <p>
                        Even tradies who <em>do</em> have a website often get it wrong. Avoid these common pitfalls:
                    </p>
                    <ol>
                        <li>
                            <strong>No mobile optimisation</strong> — Most of your visitors are on phones. If your site
                            isn&apos;t mobile-first, you&apos;re invisible to the majority of potential customers.
                        </li>
                        <li>
                            <strong>No clear call-to-action</strong> — Every page needs to make it obvious what the
                            visitor should do next: call you, fill in a form, or request a quote.
                        </li>
                        <li>
                            <strong>Generic content</strong> — &quot;We provide quality workmanship&quot; means nothing.
                            Be specific about what you do, where you do it, and the results you deliver.
                        </li>
                        <li>
                            <strong>Ignoring Google Business Profile</strong> — Your website and GBP listing must work
                            together. A website without a connected GBP is leaving free visibility on the table.
                        </li>
                        <li>
                            <strong>Set-and-forget mentality</strong> — Adding fresh content, updating photos, and
                            collecting reviews keeps your site relevant. Google rewards activity.
                        </li>
                    </ol>

                    <h2>Get More Tradie Jobs Online — Starting This Week</h2>

                    <h3>Frequently Asked Questions</h3>

                    <h3>How much does a tradie website cost in NZ?</h3>
                    <p>
                        A professional tradie website costs $1,000–$2,000 NZD depending on the number of pages and
                        features. A 3–5 page site with a quote form, photo gallery, and local SEO is enough for most
                        tradies starting out. See our{' '}
                        <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">
                            full NZ pricing guide
                        </Link>{' '}
                        for a detailed breakdown.
                    </p>

                    <h3>Do tradies really need a website?</h3>
                    <p>
                        Yes. 87% of customers research tradespeople online before calling. Without a website, you&apos;re
                        invisible to the majority of potential customers — especially those searching Google for
                        &quot;[trade] near me&quot; or &quot;[trade] [city].&quot; Read more in our guide on{' '}
                        <Link href="/blog/do-small-businesses-need-a-website" className="text-primary hover:underline">
                            whether small businesses need a website
                        </Link>.
                    </p>

                    <h3>How do tradies get more jobs from Google?</h3>
                    <p>
                        Claim your Google Business Profile, build a website with service + location pages, collect
                        Google reviews from customers, and ensure your business name, address, and phone number are
                        consistent everywhere online. Our{' '}
                        <Link href="/blog/seo-for-small-business-nz" className="text-primary hover:underline">
                            SEO guide for NZ businesses
                        </Link>{' '}
                        covers the full process.
                    </p>

                    <h3>What pages should a tradie website have?</h3>
                    <p>
                        At minimum: a homepage (what you do + where), service pages (one per trade type), a gallery
                        (before/after photos), a quote request form, and a service areas page listing the suburbs you
                        cover.
                    </p>

                    <p>
                        Every day without a website is another day your competitors take the leads that should be yours.
                        Whether you&apos;re a plumber in Auckland, an electrician in Wellington, or a builder anywhere
                        in New Zealand — the path to more consistent, higher-paying work starts with getting found online.
                    </p>
                    <p>
                        At <strong>Fullstack Forge</strong>, we specialise in tradie websites that generate leads —
                        not just look pretty. Every site we build comes with local SEO, mobile-first design, and
                        conversion-focused layouts designed specifically for New Zealand tradies.
                    </p>
                    <p>
                        Our{' '}
                        <Link href="/affordable-websites-nz" className="text-primary hover:underline font-semibold">
                            website builds from $1,000
                        </Link>{' '}
                        gives you a professional tradie website with a quote form, local SEO setup, and mobile-ready
                        design — live within 7–14 days.
                    </p>
                    <p>
                        <Link href="/#contact" className="text-primary hover:underline font-semibold">
                            Get your free website audit
                        </Link>{' '}
                        and find out exactly how many leads you&apos;re missing — and how to start capturing them.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
