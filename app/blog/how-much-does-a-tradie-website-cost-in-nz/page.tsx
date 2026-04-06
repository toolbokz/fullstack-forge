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

const SLUG = 'how-much-does-a-tradie-website-cost-in-nz'
const TITLE = 'How Much Does a Tradie Website Cost in NZ? 2026 Pricing Guide'
const DESCRIPTION = 'What does a tradie website cost in New Zealand? Compare DIY, freelancer, and specialist pricing for plumbers, electricians, builders, and other tradies in NZ.'
const DATE = '2026-04-04'
const UPDATED = '2026-04-04'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

const FAQ_ITEMS = [
    { q: 'What is the cheapest way to get a tradie website in NZ?', a: 'The cheapest route is a DIY builder like Wix or Squarespace, but it often costs more in time and missed leads. For most tradies, a specialist build in the $1,000–$2,000 range offers better value because it is designed around lead generation from day one.' },
    { q: 'How much should a plumber website cost in NZ?', a: 'A plumber website in NZ typically costs $1,000–$1,500 for a focused lead-generation build with a quote form, mobile-first design, local SEO basics, and trust signals like reviews.' },
    { q: 'How much should an electrician website cost in NZ?', a: 'Similar to plumbing — most electrician websites sit in the $1,000–$1,500 range for a conversion-focused build. The structure is usually similar: strong homepage, service breakdown, trust signals, and a clear contact flow.' },
    { q: 'Is a $1,000 tradie website any good?', a: 'Yes, if it is built around conversions, mobile usability, and local relevance rather than unnecessary extras. The quality depends on whether the build is optimised for getting quote requests — not just looking professional.' },
    { q: 'Do tradies need SEO as well as a website?', a: 'Yes. A website without local SEO foundations can look good but struggle to bring in search traffic. At minimum, your site should have clear service + location wording, proper metadata, and a connected Google Business Profile.' },
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
        fetchUnsplashImage('tradie website pricing'),
        fetchUnsplashImage('tradesman quoting customer'),
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
                        headline: 'Transparent Pricing — No Hidden Costs',
                        body: 'We build tradie websites from $1,000. No lock-in contracts, no surprise fees, and your site is designed to pay for itself.',
                    } as any}
                    linkPackage={linkPackage as any}
                >
                    <p>
                        If you are a plumber, electrician, builder, roofer, landscaper, or any other tradie in New Zealand,
                        one of the first questions you will ask is simple: <strong>how much should a tradie website actually cost?</strong>
                    </p>
                    <p>
                        The short answer is anywhere from $0 to $10,000+, depending on how you build it, who builds it, and
                        whether the site is designed to generate quote requests or just sit there looking professional.
                    </p>
                    <p>
                        For most NZ tradies, the realistic sweet spot is <strong>$1,000 to $2,000 NZD</strong> for a site that
                        includes the essentials: mobile-first design, a quote form, local SEO foundations, trust signals, and
                        a structure built to turn visits into enquiries.
                    </p>
                    <p>
                        This guide breaks down the real cost of a tradie website in NZ — what affects the price, what you
                        should get for your money, and how to avoid overpaying for a site that does not bring in work.
                    </p>

                    <h2>Quick Answer: Tradie Website Cost in NZ</h2>
                    <table>
                        <thead>
                            <tr><th>Option</th><th>Typical Cost (NZD)</th><th>Best For</th><th>Main Trade-Off</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>DIY builder</td><td>$0–$600/year</td><td>Very early-stage sole tradies</td><td>Time-heavy, weak SEO, usually poor conversions</td></tr>
                            <tr><td>Cheap freelancer</td><td>$500–$2,000</td><td>Budget-conscious businesses</td><td>Inconsistent quality, often weak local SEO</td></tr>
                            <tr><td>Specialist tradie website build</td><td>$1,000–$2,000</td><td>Most tradies wanting leads</td><td>Best balance of price and results</td></tr>
                            <tr><td>Agency build</td><td>$3,000–$10,000+</td><td>Larger firms with complex needs</td><td>Often overkill for owner-operator tradies</td></tr>
                        </tbody>
                    </table>
                    <p>
                        If your goal is simply &quot;have a website,&quot; you can go cheaper. If your goal is{' '}
                        <strong>get more calls, quote requests, and higher-quality jobs</strong>, the cheapest option
                        is usually not the best option.
                    </p>

                    <h2>What a Tradie Website in NZ Should Actually Include</h2>
                    <p>
                        Before you compare pricing, it helps to know what you are paying for. A good tradie website is
                        not just a homepage and a phone number. It should be built to support how people actually hire
                        tradies in New Zealand.
                    </p>
                    <p>That usually means:</p>
                    <ul>
                        <li>A clear homepage explaining what you do and where you work</li>
                        <li>Service sections or pages for the main jobs you want</li>
                        <li>A strong click-to-call button on mobile</li>
                        <li>A simple quote or contact form</li>
                        <li>Google review or testimonial integration</li>
                        <li>Location relevance for local SEO</li>
                        <li>Fast load speed and mobile-first layout</li>
                        <li>Trust-building imagery showing real work</li>
                        <li>Basic on-page SEO and clean metadata</li>
                    </ul>
                    <p>
                        If a website is missing most of those, it might still &quot;exist,&quot; but it probably will not
                        do much for your business. Our existing guide on{' '}
                        <Link href="/blog/website-for-tradies-nz" className="text-primary hover:underline">
                            tradie websites in NZ
                        </Link>{' '}
                        covers what makes a tradie site convert. This article focuses specifically on what the right
                        version should cost.
                    </p>

                    <h2>Tradie Website Cost by Build Type</h2>

                    <h3>DIY Website Builders</h3>
                    <p>
                        Platforms like Wix and Squarespace look cheap on paper. You might pay only a monthly fee and
                        feel like you are saving money.
                    </p>
                    <p>But the real cost is not just the subscription. It is also:</p>
                    <ul>
                        <li>Your time setting up and maintaining it</li>
                        <li>Your copywriting (or lack of it)</li>
                        <li>Your image selection and optimisation</li>
                        <li>Your mobile responsiveness and conversion mistakes</li>
                        <li>Your SEO setup — which most tradies skip entirely</li>
                    </ul>
                    <p>
                        For a tradie who is busy on the tools, every hour spent wrestling with a website builder is an
                        hour not spent quoting jobs, doing work, or following up leads.
                    </p>
                    <p>
                        DIY can make sense if you are just starting out, cash is extremely tight, and you only need a
                        placeholder site for now. It usually does not make sense if you want local SEO traction, more
                        quote requests, or a site that pays for itself quickly.
                    </p>

                    <h3>Freelancers</h3>
                    <p>
                        A freelancer might charge anywhere from $500 to $2,000 for a basic tradie website in NZ. This
                        route can work well if you find someone good. The problem is inconsistency.
                    </p>
                    <p>
                        Some freelancers build genuinely useful small-business sites. Others deliver something that looks
                        decent on desktop but performs badly on phones, has weak CTAs, and is almost invisible on Google.
                    </p>
                    <p>If you hire a freelancer, ask:</p>
                    <ul>
                        <li>Will the site be mobile-first?</li>
                        <li>Will it include local SEO basics?</li>
                        <li>Can I update it later?</li>
                        <li>Do I own the site and the code?</li>
                        <li>What are the real ongoing costs?</li>
                        <li>Will it include a quote form and trust signals?</li>
                    </ul>

                    <h3>Specialist Tradie Website Providers</h3>
                    <p>
                        This is usually the best-value option for owner-operator tradies and small trade businesses. A
                        specialist build usually costs about <strong>$1,000 to $2,000 NZD</strong>, depending on pages,
                        services featured, local SEO setup, and any advanced features.
                    </p>
                    <p>
                        This bracket is often the sweet spot because it is focused on one thing:{' '}
                        <strong>getting tradies more work online without unnecessary overhead</strong>.
                    </p>
                    <p>
                        That is the same logic behind our{' '}
                        <Link href="/affordable-websites-nz" className="text-primary hover:underline font-semibold">
                            affordable website packages
                        </Link>{' '}
                        and why they fit so well for trades and service businesses.
                    </p>

                    <h3>Agency Websites</h3>
                    <p>
                        Agencies may charge $3,000 to $10,000+ for a tradie website. That is not always wrong — it just
                        often does not match the actual needs of a small NZ trade business. If you run a larger multi-team
                        operation, cover multiple cities, or need advanced systems, that kind of spend may be justified.
                    </p>
                    <p>
                        But for many tradies, paying $6,000 for a website that gets the same number of quote requests as
                        a sharper $1,000 build is not a smart business decision.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Tradesman reviewing website pricing options for his business"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h2>Tradie Website Cost by Trade Type</h2>
                    <p>Not every trade needs exactly the same site structure.</p>
                    <table>
                        <thead>
                            <tr><th>Trade</th><th>Typical Cost Range</th><th>Why</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Plumber</td><td>$1,000–$1,500</td><td>Strong local intent, simple quote flow</td></tr>
                            <tr><td>Electrician</td><td>$1,000–$1,500</td><td>Similar structure, trust and speed matter</td></tr>
                            <tr><td>Builder</td><td>$1,200–$2,000</td><td>More project proof, galleries, credibility</td></tr>
                            <tr><td>Landscaper</td><td>$1,200–$2,000</td><td>Visual proof is critical, often more pages</td></tr>
                            <tr><td>Roofer</td><td>$1,000–$1,500</td><td>Strong service-area targeting matters</td></tr>
                            <tr><td>Multi-service trade business</td><td>$1,500–$2,000+</td><td>More services, locations, and content needs</td></tr>
                        </tbody>
                    </table>
                    <p>
                        A plumber or electrician can often do very well with a lean, conversion-focused site. A builder
                        or landscaper may need stronger project galleries, more case-study style proof, and more detailed
                        trust signals — which tends to push the cost up.
                    </p>

                    <h2>What Actually Affects Tradie Website Cost</h2>

                    <h3>1. Number of Services You Want to Feature</h3>
                    <p>
                        A one-service website is cheaper than a multi-service website. If you only want to push emergency
                        plumbing, the site can stay lean. If you want to rank and convert for hot water cylinders, bathroom
                        renovations, leak detection, blocked drains, and gas fitting — the structure gets larger, and that
                        adds cost.
                    </p>

                    <h3>2. Local SEO Setup</h3>
                    <p>
                        A tradie website that is meant to rank locally needs more than basic design. It may need
                        city/service targeting, better metadata, internal linking, and Google Business Profile alignment.
                        That is one reason a proper local SEO-focused setup costs more than a generic 3-page template.
                    </p>

                    <h3>3. Copy and Messaging</h3>
                    <p>Many tradies underestimate this. The difference between:</p>
                    <ul>
                        <li>&quot;Quality workmanship at affordable prices&quot;</li>
                        <li>&quot;Auckland plumbers for fast, reliable hot water cylinder replacement and emergency callouts&quot;</li>
                    </ul>
                    <p>
                        is massive. Clear, specific copy improves both SEO and conversion. If you are paying someone
                        to write or structure that properly, it affects price — but it is usually worth it.
                    </p>

                    <h3>4. Photos and Proof</h3>
                    <p>
                        A site with real project photos, reviews, and before/after examples will usually outperform a
                        site built around stock images. That content may take more effort to gather and structure, but
                        it helps justify the investment.
                    </p>

                    <h3>5. Advanced Features</h3>
                    <p>
                        Most tradies do not need complicated features. But cost goes up if you want booking systems,
                        multi-step quote forms, staff/team pages, advanced galleries, CRM integrations, or multiple
                        location landing pages.
                    </p>
                    <p>
                        For many tradies, simple wins: fast site, strong homepage, clear services, trust signals, good
                        form, mobile-first layout.
                    </p>

                    <h2>Ongoing Costs After Launch</h2>
                    <p>The upfront build is not the whole picture.</p>
                    <table>
                        <thead>
                            <tr><th>Item</th><th>Typical Ongoing Cost</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Domain name</td><td>$25–$50/year</td></tr>
                            <tr><td>Hosting</td><td>$0–$300/year</td></tr>
                            <tr><td>Business email</td><td>$50–$150/year</td></tr>
                            <tr><td>Maintenance</td><td>$0–$1,200/year depending on platform</td></tr>
                            <tr><td>SEO/content work</td><td>Optional, varies widely</td></tr>
                        </tbody>
                    </table>
                    <p>
                        This is why platform choice matters. A modern, lightweight site may have very low ongoing costs.
                        A plugin-heavy setup or agency retainer model can add far more ongoing spend than many tradies
                        realise. For a broader breakdown across all business types, see{' '}
                        <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">
                            how much a website costs in NZ
                        </Link>.
                    </p>

                    <h2>Cheap Website vs Good Website: What Costs More Long Term?</h2>
                    <p>
                        The wrong question is: &quot;How do I get the cheapest website?&quot; The better question is:{' '}
                        <strong>&quot;Which website gives me the best return?&quot;</strong>
                    </p>
                    <ul>
                        <li>Site A costs $399 and generates almost nothing</li>
                        <li>Site B costs $1,000 and brings in 2 extra quote requests a month</li>
                    </ul>
                    <p>
                        For most tradies, one decent job easily covers the price difference. A website is only expensive
                        if it fails to produce work.
                    </p>

                    <h2>Real-World ROI Logic for Tradies</h2>
                    <p>Consider this:</p>
                    <ul>
                        <li>Your average job value is <strong>$600</strong></li>
                        <li>Your site helps generate just <strong>3 extra enquiries a month</strong></li>
                        <li>One of those turns into a booked job</li>
                    </ul>
                    <p>
                        That is $600 in new revenue from one month. Over a year, that compounds quickly. Even a
                        modest-performing tradie site can pay for itself fast if it ranks for the right local terms,
                        looks trustworthy, and makes contacting you easy.
                    </p>
                    <p>
                        For more on squeezing leads from your site once it is live, see{' '}
                        <Link href="/blog/how-to-get-more-leads-from-your-website" className="text-primary hover:underline">
                            how to get more leads from your website
                        </Link>.
                    </p>

                    <ToolEmbed slug="lead-loss-calculator" context="See how many quote requests your current site might be missing" />

                    <h2>When a Tradie Should Spend More</h2>
                    <p>Spending more can make sense if:</p>
                    <ul>
                        <li>You cover multiple cities</li>
                        <li>You want to rank for many service terms</li>
                        <li>You have an established team and stronger brand</li>
                        <li>You want a more polished portfolio/case-study presence</li>
                        <li>You are replacing a poor-performing old site that already gets traffic</li>
                    </ul>
                    <p>In those cases, a more developed build can still be very good value.</p>

                    <h2>6 Questions to Ask Before Paying for a Tradie Website</h2>
                    <ol>
                        <li>Does this site include local SEO basics?</li>
                        <li>Is it designed primarily for mobile users?</li>
                        <li>Will it make quote requests easy?</li>
                        <li>Does it include proof like reviews or project photos?</li>
                        <li>What are the real ongoing costs?</li>
                        <li>Is this site built to get jobs — or just to look nice?</li>
                    </ol>
                    <p>
                        If you ask those questions, you will avoid a lot of overpriced and underperforming options.
                    </p>

                    <h2>Frequently Asked Questions</h2>

                    <h3>What is the cheapest way to get a tradie website in NZ?</h3>
                    <p>
                        The cheapest route is a DIY builder like Wix or Squarespace, but it often costs more in time
                        and missed leads. For most tradies, a specialist build in the $1,000–$2,000 range offers better
                        value because it is designed around lead generation from day one.
                    </p>

                    <h3>How much should a plumber website cost in NZ?</h3>
                    <p>
                        A plumber website in NZ typically costs $1,000–$1,500 for a focused lead-generation build with a
                        quote form, mobile-first design, local SEO basics, and trust signals like reviews.
                    </p>

                    <h3>How much should an electrician website cost in NZ?</h3>
                    <p>
                        Similar to plumbing — most electrician websites sit in the $1,000–$1,500 range for a
                        conversion-focused build.
                    </p>

                    <h3>Is a $1,000 tradie website any good?</h3>
                    <p>
                        Yes, if it is built around conversions, mobile usability, and local relevance rather than
                        unnecessary extras. The quality depends on whether the build is optimised for getting quote
                        requests — not just looking professional.
                    </p>

                    <h3>Do tradies need SEO as well as a website?</h3>
                    <p>
                        Yes. A website without local SEO foundations can look good but struggle to bring in search
                        traffic. At minimum, your site should have clear service + location wording, proper metadata,
                        and a connected Google Business Profile.
                    </p>

                    <h2>Get a Tradie Website That Pays for Itself</h2>
                    <p>
                        If you are a tradie in New Zealand, your website should not just be an online business card. It
                        should help you get found, get trusted, get contacted, and win more work.
                    </p>
                    <p>
                        You can start with our{' '}
                        <Link href="/affordable-websites-nz" className="text-primary hover:underline font-semibold">
                            affordable website packages
                        </Link>, or if you want to know what is holding your current site back, get a{' '}
                        <Link href="/#audit" className="text-primary hover:underline font-semibold">
                            free website audit
                        </Link>{' '}
                        and see where the missed opportunities are.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
