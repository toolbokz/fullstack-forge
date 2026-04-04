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

const SLUG = 'local-seo-for-tradies-nz'
const TITLE = 'Local SEO for Tradies NZ: How to Rank in Your City and Get More Jobs'
const DESCRIPTION = 'Learn how local SEO for tradies in NZ works. Get found in Google for searches like plumber Auckland, electrician Christchurch, and builder near me.'
const DATE = '2026-04-04'
const UPDATED = '2026-04-04'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

const FAQ_ITEMS = [
    { q: 'How long does local SEO take for tradies?', a: 'It depends on your starting point and competition, but most tradies see noticeable improvements within 2–4 months. A stronger website, better reviews, and clearer location/service relevance all help accelerate results.' },
    { q: 'Do tradies need a website for local SEO?', a: 'Yes. A Google Business Profile is important, but a website gives you much more control over content, trust, and conversion. The two work together — your profile drives map visibility, your website drives organic rankings and conversions.' },
    { q: 'What is more important: reviews or website SEO?', a: 'Both matter. Reviews help trust and local visibility in the map pack. Your website helps relevance, structure, and conversions from organic search. Ideally you build both at the same time.' },
    { q: 'Should a tradie create pages for every suburb?', a: 'Not automatically. It is better to build strong, useful location relevance than spam dozens of thin pages. Focus on your primary service area first, then expand with genuinely useful content for secondary areas.' },
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
        fetchUnsplashImage('local seo tradie business'),
        fetchUnsplashImage('google maps local search results'),
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
                        headline: 'Want Local SEO Built Into Your Website From Day One?',
                        body: 'We build tradie websites with local SEO, mobile-first structure, and lead-generation foundations baked in from the start.',
                    } as any}
                    linkPackage={linkPackage as any}
                >
                    <p>
                        If you are a tradie in New Zealand, the best leads are often the ones already searching for your
                        service in your area.
                    </p>
                    <p>That means searches like:</p>
                    <ul>
                        <li>plumber Auckland</li>
                        <li>electrician Christchurch</li>
                        <li>builder Hamilton</li>
                        <li>roofer near me</li>
                        <li>emergency plumber Tauranga</li>
                    </ul>
                    <p>
                        Those searches are not random traffic. They are people actively looking for someone to hire.{' '}
                        <strong>That is where local SEO for tradies comes in.</strong>
                    </p>
                    <p>
                        Local SEO is how you improve your chances of appearing when people search for your trade in your
                        city, suburb, or service area. Done properly, it helps tradies get more calls, more quote requests,
                        and better-quality enquiries — without relying only on referrals or paid ads.
                    </p>

                    <h2>What Local SEO Actually Means for a Tradie</h2>
                    <p>
                        Local SEO is not just &quot;doing SEO nearby.&quot; For a tradie, it means making sure Google
                        understands:
                    </p>
                    <ul>
                        <li>What trade you do</li>
                        <li>Where you work</li>
                        <li>Which services you offer</li>
                        <li>Why customers should trust you</li>
                    </ul>
                    <p>That affects whether you show up in:</p>
                    <ul>
                        <li>Normal search results</li>
                        <li>Google Maps</li>
                        <li>The local map pack (the box of 3 local results at the top)</li>
                        <li>Service-based searches tied to suburbs or cities</li>
                    </ul>
                    <p>
                        If someone searches &quot;electrician North Shore Auckland&quot; and your website and Google
                        Business Profile clearly reinforce that service area, you have a much better chance of showing
                        up. If your site is vague, slow, thin, or generic, Google has less reason to show you.
                    </p>

                    <h2>Why Local SEO Matters More for Tradies Than Many Other Businesses</h2>
                    <p>
                        Tradie buying intent is often <strong>immediate</strong>. A person searching for &quot;blocked
                        drain plumber Christchurch&quot; or &quot;emergency electrician Auckland&quot; is often much
                        closer to hiring than someone casually reading a broad blog article.
                    </p>
                    <p>
                        That means local SEO traffic can be some of the most valuable traffic your business gets. It is
                        not just about <em>more</em> traffic — it is about <em>better</em> traffic.
                    </p>
                    <p>
                        A good tradie website combined with local SEO gives you a system that keeps bringing in enquiries
                        even when referrals slow down. That is one reason your website and SEO strategy should work
                        together, not separately — as covered in our existing guide on{' '}
                        <Link href="/blog/website-for-tradies-nz" className="text-primary hover:underline">
                            tradie websites in NZ
                        </Link>.
                    </p>

                    <h2>How Google Decides Which Tradies Show Up Locally</h2>
                    <p>Google usually looks at three broad things:</p>

                    <h3>1. Relevance</h3>
                    <p>
                        Does your business look like a good match for the search? If someone searches &quot;plumber
                        Auckland,&quot; do your website and profile clearly signal plumbing, Auckland, and the specific
                        plumbing services you offer?
                    </p>

                    <h3>2. Distance / Service Area</h3>
                    <p>
                        Are you in or near the location being searched? This matters especially for Google Business
                        Profile visibility and map results.
                    </p>

                    <h3>3. Prominence / Trust</h3>
                    <p>Does your business appear credible and established? This can be influenced by:</p>
                    <ul>
                        <li>Reviews (quantity and quality)</li>
                        <li>Website quality and content depth</li>
                        <li>Business listings and directory consistency</li>
                        <li>Local mentions and backlinks</li>
                    </ul>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Google Maps local search results showing local businesses"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h2>The Core Parts of Local SEO for Tradies</h2>

                    <h3>Google Business Profile</h3>
                    <p>This is one of the most important pieces. Your Google Business Profile should be:</p>
                    <ul>
                        <li>Fully completed — every field filled</li>
                        <li>Using the right primary category for your trade</li>
                        <li>Linked to your website</li>
                        <li>Showing correct service areas</li>
                        <li>Actively collecting reviews</li>
                        <li>Regularly updated with photos and posts where possible</li>
                    </ul>
                    <p>
                        A weak or neglected profile can hold back your visibility even if your website is decent.
                    </p>

                    <h3>Service + Location Relevance on Your Website</h3>
                    <p>
                        Your website should make it obvious what trade you do, what services you offer, and where you
                        work. That means clearer pages and content, not vague slogans.
                    </p>
                    <p>
                        For example, a stronger page says: <em>&quot;Hot water cylinder replacement in
                            Christchurch&quot;</em> instead of: <em>&quot;Quality plumbing solutions.&quot;</em> The first
                        gives Google and the customer something concrete.
                    </p>

                    <h3>Reviews</h3>
                    <p>
                        Reviews are not just social proof. They are part of local search trust. Tradies who consistently
                        collect Google reviews usually have a stronger local presence and better conversion once people
                        land on the profile or site.
                    </p>

                    <h3>Fast, Mobile-First Website</h3>
                    <p>
                        Many tradie leads come from phones. If your site is slow, clunky, or hard to use, you lose both
                        rankings and enquiries. This is where a professionally built site can make a major difference
                        compared with a DIY setup — which is part of the broader trade-off in our{' '}
                        <Link href="/blog/diy-vs-professional-website" className="text-primary hover:underline">
                            DIY vs professional website comparison
                        </Link>.
                    </p>

                    <h2>What a Tradie Website Needs for Local SEO</h2>
                    <table>
                        <thead>
                            <tr><th>Element</th><th>Why It Matters</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Clear trade + city wording</td><td>Helps Google understand relevance</td></tr>
                            <tr><td>Service-specific sections/pages</td><td>Increases visibility for more searches</td></tr>
                            <tr><td>Mobile-first design</td><td>Most tradie traffic is mobile</td></tr>
                            <tr><td>Fast load speed</td><td>Better rankings and conversions</td></tr>
                            <tr><td>Click-to-call and quote form</td><td>Converts local traffic into leads</td></tr>
                            <tr><td>Review/testimonial proof</td><td>Builds trust fast</td></tr>
                            <tr><td>Consistent contact details</td><td>Supports local trust signals</td></tr>
                            <tr><td>Internal links between pages</td><td>Helps search engines understand your structure</td></tr>
                        </tbody>
                    </table>
                    <p>If your site misses most of those, local SEO gets much harder.</p>

                    <h2>Best Keywords for Tradies to Target</h2>
                    <p>
                        Tradies often make the mistake of targeting only broad terms like &quot;plumber&quot; or
                        &quot;electrician.&quot; Those are too vague on their own.
                    </p>
                    <p>Better local keyword patterns are:</p>
                    <ul>
                        <li>plumber Auckland</li>
                        <li>electrician Christchurch</li>
                        <li>builder Hamilton</li>
                        <li>emergency plumber Tauranga</li>
                        <li>bathroom renovation builder Auckland</li>
                        <li>switchboard upgrade electrician Wellington</li>
                    </ul>
                    <p>
                        The more the keyword reflects a <strong>real service and location combination</strong>, the more
                        useful it often is.
                    </p>

                    <h2>Service Pages vs Blog Posts for Local SEO</h2>
                    <p>Both can help, but they do different jobs.</p>

                    <h3>Service Pages</h3>
                    <p>
                        These are usually stronger for direct buyer intent — the searches where someone is ready to hire.
                        They should be your priority.
                    </p>

                    <h3>Blog Posts</h3>
                    <p>
                        These support authority and help build topical depth. They work well for questions and comparisons
                        that attract earlier-stage visitors.
                    </p>
                    <p>
                        If your goal is rankings <em>and</em> leads, do not rely on blog posts alone. Use blog content
                        to support commercial pages.
                    </p>

                    <h2>Common Local SEO Mistakes Tradies Make</h2>
                    <ol>
                        <li>
                            <strong>No proper website.</strong> Relying only on Facebook or a Google Business Profile
                            limits your control and often weakens trust.
                        </li>
                        <li>
                            <strong>Generic copy.</strong> If your site says the same vague things every competitor says,
                            it is harder to rank and harder to convert.
                        </li>
                        <li>
                            <strong>No location relevance.</strong> A tradie serving Christchurch should not have a site
                            that feels like it could belong anywhere.
                        </li>
                        <li>
                            <strong>Weak review strategy.</strong> Reviews are one of the simplest and highest-ROI local
                            SEO actions available. After every job, send a text with your Google review link.
                        </li>
                        <li>
                            <strong>No internal linking.</strong> If your pages do not connect logically, Google has a
                            harder time understanding your structure.
                        </li>
                        <li>
                            <strong>Trying to target everywhere at once.</strong> It is usually better to build strength
                            around your real service area first than pretend to cover all of NZ.
                        </li>
                    </ol>

                    <h2>A Simple Local SEO Strategy for Tradies in NZ</h2>
                    <p>If you want a practical starting point, this is the order to follow:</p>
                    <ol>
                        <li>Build or improve your website</li>
                        <li>Make sure your Google Business Profile is fully set up</li>
                        <li>Clarify your trade, service, and location wording</li>
                        <li>Add trust signals like reviews and project photos</li>
                        <li>Create useful supporting content</li>
                        <li>Make sure your site is fast and mobile-friendly</li>
                        <li>Keep collecting reviews consistently</li>
                    </ol>
                    <p>
                        That is the foundation. If your site also needs to improve its ability to convert visitors into
                        enquiries, pair this with the tactics in{' '}
                        <Link href="/blog/how-to-get-more-leads-from-your-website" className="text-primary hover:underline">
                            how to get more leads from your website
                        </Link>.
                    </p>

                    <ToolEmbed slug="lead-loss-calculator" context="See how many local leads your current website might be missing" />

                    <h2>Example: How Local SEO Helps a Tradie Win More Work</h2>
                    <p>Imagine two Auckland electricians.</p>
                    <p><strong>Electrician A:</strong></p>
                    <ul>
                        <li>Basic one-page site</li>
                        <li>No service breakdown</li>
                        <li>Few reviews</li>
                        <li>Unclear location signals</li>
                    </ul>
                    <p><strong>Electrician B:</strong></p>
                    <ul>
                        <li>Clear service pages</li>
                        <li>Google reviews visible</li>
                        <li>Mobile-first design</li>
                        <li>Good local wording</li>
                        <li>Strong quote CTA</li>
                        <li>Consistent profile and website details</li>
                    </ul>
                    <p>
                        Even if both do good work, Electrician B is much more likely to show up better, look more
                        trustworthy, and get the enquiry. That is the real value of local SEO.
                    </p>

                    <h2>Frequently Asked Questions</h2>

                    <h3>How long does local SEO take for tradies?</h3>
                    <p>
                        It depends on your starting point and competition, but most tradies see noticeable improvements
                        within 2–4 months. A stronger website, better reviews, and clearer location/service relevance
                        all help accelerate results.
                    </p>

                    <h3>Do tradies need a website for local SEO?</h3>
                    <p>
                        Yes. A Google Business Profile is important, but a website gives you much more control over
                        content, trust, and conversion. The two work together — your profile drives map visibility, your
                        website drives organic rankings and conversions.
                    </p>

                    <h3>What is more important: reviews or website SEO?</h3>
                    <p>
                        Both matter. Reviews help trust and local visibility in the map pack. Your website helps
                        relevance, structure, and conversions from organic search. Ideally you build both at the same
                        time.
                    </p>

                    <h3>Should a tradie create pages for every suburb?</h3>
                    <p>
                        Not automatically. It is better to build strong, useful location relevance than spam dozens of
                        thin pages. Focus on your primary service area first, then expand with genuinely useful content
                        for secondary areas.
                    </p>

                    <h2>Get Local SEO Built Into Your Website</h2>
                    <p>
                        A good tradie website should not just look professional. It should help your business show up
                        and get contacted.
                    </p>
                    <p>
                        At Fullstack Forge, we build websites for NZ tradies with local SEO, mobile-first structure,
                        and lead-generation foundations built in from the start. If you want to see what your current
                        site is missing, get a{' '}
                        <Link href="/#contact" className="text-primary hover:underline font-semibold">
                            free consultation
                        </Link>. Or if you are planning a new site, take a look at our{' '}
                        <Link href="/affordable-websites-nz" className="text-primary hover:underline font-semibold">
                            website packages
                        </Link>{' '}
                        and see what fits your business.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
