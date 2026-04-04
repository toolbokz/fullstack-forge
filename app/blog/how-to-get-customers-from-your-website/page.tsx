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

const SLUG = 'how-to-get-customers-from-your-website'
const TITLE = 'How to Get Customers From Your Website: The Complete Beginner\'s Framework'
const DESCRIPTION = 'The step-by-step journey from website visitor to paying customer — traffic, trust, conversion, and follow-up explained for NZ small businesses.'
const DATE = '2025-02-01'
const UPDATED = '2026-04-04'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

const FAQ_ITEMS = [
    { q: 'How long does it take for a website to start generating customers?', a: 'Most NZ small business websites start appearing in local search results within 4–8 weeks. First enquiries typically come within 2–3 months. Paid ads can generate traffic immediately, but organic (free) traffic compounds over time.' },
    { q: 'What\'s the difference between traffic and leads?', a: 'Traffic is everyone who visits your website. Leads are visitors who take an action — filling in a form, calling, or emailing. You want both, but leads are what turn into paying customers.' },
    { q: 'Do I need a blog to get customers from my website?', a: 'Not necessarily. A well-optimised service page with clear calls-to-action can generate leads without a blog. However, blog content helps you rank for more search terms and builds authority over time.' },
    { q: 'What\'s the most important page on a small business website for getting customers?', a: 'Your homepage — it gets the most traffic and sets the first impression. After that, your primary service page and contact page. These three pages drive the majority of conversions for most small businesses.' },
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
        fetchUnsplashImage('digital marketing strategy'),
        fetchUnsplashImage('website analytics dashboard'),
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
                    readTime={10}
                    heroImage={heroImage}
                    slug={SLUG}
                    showLeadCalculator={true}
                    midCta={{
                        headline: 'Want Us to Build Your Customer Machine?',
                        body: 'We build websites that don\'t just look good — they actively generate leads while you focus on your business.',
                    } as any}
                    linkPackage={linkPackage as any}
                    relatedLinks={[] as any}
                >
                    <h2>The Customer Journey Your Website Needs to Support</h2>
                    <p>
                        Most small business websites fail at the same thing: they exist, but they don&apos;t <em>do</em> anything.
                        They&apos;re digital brochures — nice to look at, impossible to generate business from.
                    </p>
                    <p>
                        Getting customers from your website isn&apos;t magic. It&apos;s a journey with four stages, and
                        your website needs to handle every one of them:
                    </p>
                    <ol>
                        <li><strong>Traffic</strong> — Getting the right people to your site</li>
                        <li><strong>Trust</strong> — Convincing them you&apos;re credible and competent</li>
                        <li><strong>Conversion</strong> — Making it easy for them to take the next step</li>
                        <li><strong>Follow-up</strong> — Staying in touch with people who aren&apos;t ready yet</li>
                    </ol>
                    <p>
                        If any stage is broken, the whole pipeline leaks. Let&apos;s walk through each one with
                        practical steps that work for NZ small businesses.
                    </p>

                    <h2>Stage 1: Traffic — Getting the Right People to Your Website</h2>
                    <p>
                        A beautiful website with zero visitors generates zero customers. Traffic comes first, and for
                        most NZ small businesses, the best source is <strong>local Google search</strong>.
                    </p>

                    <h3>Local SEO: Your Best Free Traffic Source</h3>
                    <p>
                        When someone in your area searches for what you do — &quot;plumber Christchurch&quot; or
                        &quot;personal trainer Wellington&quot; — you want your website to appear. This is local SEO,
                        and it&apos;s the highest-quality traffic you can get because these are people actively looking
                        to buy.
                    </p>
                    <p>The basics:</p>
                    <ul>
                        <li>Include your location and service in your page titles and headings</li>
                        <li>Claim and optimise your Google Business Profile (free)</li>
                        <li>Get reviews from real customers — they boost your local rankings</li>
                        <li>Make sure your name, address, and phone number are consistent everywhere online</li>
                    </ul>
                    <p>
                        For a deeper dive into local SEO, read our{' '}
                        <Link href="/blog/seo-for-small-business-nz" className="text-primary hover:underline">
                            SEO guide for NZ small businesses
                        </Link>.
                    </p>

                    <h3>Other Traffic Sources Worth Considering</h3>
                    <table>
                        <thead>
                            <tr><th>Traffic Source</th><th>Cost</th><th>Speed</th><th>Best For</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Local SEO (Google)</td><td>Free (time investment)</td><td>4–8 weeks</td><td>Service businesses, tradies, local retail</td></tr>
                            <tr><td>Google Ads</td><td>$5–$30/click in NZ</td><td>Immediate</td><td>Businesses that need leads now</td></tr>
                            <tr><td>Facebook/Instagram Ads</td><td>$3–$15/click</td><td>Immediate</td><td>Visual businesses (food, fitness, beauty)</td></tr>
                            <tr><td>Referral traffic</td><td>Free</td><td>Varies</td><td>Businesses with strong networks</td></tr>
                            <tr><td>Content/blogging</td><td>Free (time investment)</td><td>Months</td><td>Building long-term authority</td></tr>
                        </tbody>
                    </table>

                    <h2>Stage 2: Trust — Why Visitors Leave Without Buying</h2>
                    <p>
                        Getting traffic is only half the battle. Most visitors leave within 10 seconds if they don&apos;t
                        quickly see evidence that you&apos;re trustworthy and relevant to their needs.
                    </p>

                    <h3>What Builds Trust on a Website</h3>
                    <ul>
                        <li>
                            <strong>Professional design.</strong> It doesn&apos;t need to be flashy, but it needs to look
                            clean, current, and intentional. A dated or broken-looking site signals an unreliable business.
                            See our{' '}
                            <Link href="/blog/best-website-design-for-small-businesses" className="text-primary hover:underline">
                                design guide for small businesses
                            </Link>{' '}
                            for what &quot;professional&quot; actually means in practice.
                        </li>
                        <li>
                            <strong>Social proof.</strong> Testimonials, Google reviews, case studies, logos of businesses
                            you&apos;ve worked with. Show specific results: &quot;Increased their bookings by 40%&quot; is
                            far more convincing than &quot;Great service!&quot;
                        </li>
                        <li>
                            <strong>Clear, specific messaging.</strong> &quot;We build affordable websites for NZ tradies&quot;
                            beats &quot;Innovative digital solutions for your business needs.&quot; Visitors should know
                            exactly what you do within 3 seconds.
                        </li>
                        <li>
                            <strong>Real photos and names.</strong> Stock photos of smiling people in suits don&apos;t build
                            trust. Photos of your actual team, work, and customers do.
                        </li>
                    </ul>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Website analytics showing customer conversion metrics and engagement data"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h2>Stage 3: Conversion — Turning Visitors Into Enquiries</h2>
                    <p>
                        A visitor trusts you and is interested. Now what? This is where most small business websites
                        completely drop the ball. The visitor has to figure out what to do next — and most won&apos;t
                        bother.
                    </p>

                    <h3>The Call-to-Action (CTA) Rules</h3>
                    <ul>
                        <li><strong>One primary CTA per page.</strong> &quot;Get a Free Quote,&quot; &quot;Book a Call,&quot; or &quot;Request a Callback.&quot; Don&apos;t offer 5 different actions — pick the one that matters most.</li>
                        <li><strong>Make it visible everywhere.</strong> Your CTA should appear in the header, after key sections, and at the bottom. Don&apos;t make people scroll to the footer to find your contact form.</li>
                        <li><strong>Reduce friction.</strong> Ask for the minimum information: name, phone, brief description. Long forms kill conversions. You can get details later in the conversation.</li>
                        <li><strong>Use action language.</strong> &quot;Get My Free Quote&quot; outperforms &quot;Submit&quot; by 2–3x in conversion testing.</li>
                    </ul>

                    <h3>Best Conversion Elements for NZ Service Businesses</h3>
                    <ul>
                        <li>A short contact or quote request form (3–4 fields maximum)</li>
                        <li>Click-to-call phone number (most NZ service enquiries still happen by phone)</li>
                        <li>A comparison table showing what&apos;s included in packages</li>
                        <li>A &quot;How It Works&quot; section: 3 steps showing the path from enquiry to result</li>
                    </ul>

                    <ToolEmbed slug="conversion-rate-estimator" context="See how small conversion improvements could transform your revenue" />

                    <h2>Stage 4: Follow-Up — The 97% You&apos;re Missing</h2>
                    <p>
                        Here&apos;s a fact that most business owners don&apos;t know: only about 3% of website visitors
                        are ready to buy right now. The other 97% are researching, comparing, or just not ready. If your
                        only conversion mechanism is &quot;Contact Us,&quot; you&apos;re ignoring 97% of your traffic.
                    </p>

                    <h3>Simple Follow-Up Strategies</h3>
                    <ul>
                        <li>
                            <strong>Email capture with a lead magnet.</strong> Offer something useful in exchange for
                            an email: a free checklist, guide, or audit. Then follow up with 3–5 emails over the
                            following weeks.
                        </li>
                        <li>
                            <strong>Retargeting ads.</strong> Show Facebook or Google ads to people who visited your
                            site but didn&apos;t convert. This keeps your business top-of-mind. Budget: $5–$10/day
                            is enough for most NZ businesses.
                        </li>
                        <li>
                            <strong>Google reviews prompt.</strong> After completing work, ask customers to leave a
                            Google review. This builds trust for future visitors and boosts your local SEO.
                        </li>
                    </ul>

                    <h2>The Complete Framework: A Quick-Reference Checklist</h2>
                    <ul>
                        <li>☐ Google Business Profile claimed and optimised</li>
                        <li>☐ Website loads in under 3 seconds on mobile</li>
                        <li>☐ Homepage clearly states what you do and where</li>
                        <li>☐ At least 3 genuine testimonials or reviews displayed</li>
                        <li>☐ Primary CTA visible on every page</li>
                        <li>☐ Contact form with 4 or fewer fields</li>
                        <li>☐ Click-to-call phone number on mobile</li>
                        <li>☐ Lead magnet or free resource to capture emails</li>
                        <li>☐ Follow-up email sequence set up (even a simple 3-email series)</li>
                        <li>☐ Google reviews being actively collected</li>
                    </ul>

                    <h2>Where to Go From Here</h2>
                    <p>
                        This framework covers the basics of the visitor-to-customer journey. If you&apos;re already
                        getting traffic but want to squeeze more leads from it, our in-depth guide on{' '}
                        <Link href="/blog/how-to-get-more-leads-from-your-website" className="text-primary hover:underline">
                            how to get more leads from your website
                        </Link>{' '}
                        goes deeper into advanced conversion tactics, A/B testing, and lead qualification.
                    </p>
                    <p>
                        If you&apos;re not sure your current site is performing, check what it&apos;s costing you with
                        the calculator above — or{' '}
                        <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">
                            see how much a new site actually costs
                        </Link>.
                    </p>

                    <h2>Frequently Asked Questions</h2>

                    <h3>How long does it take for a website to start generating customers?</h3>
                    <p>
                        Most NZ small business websites start appearing in local search results within 4–8 weeks. First
                        enquiries typically come within 2–3 months. Paid ads can generate traffic immediately, but organic
                        (free) traffic compounds over time.
                    </p>

                    <h3>What&apos;s the difference between traffic and leads?</h3>
                    <p>
                        Traffic is everyone who visits your website. Leads are visitors who take an action — filling in
                        a form, calling, or emailing. You want both, but leads are what turn into paying customers.
                    </p>

                    <h3>Do I need a blog to get customers from my website?</h3>
                    <p>
                        Not necessarily. A well-optimised service page with clear calls-to-action can generate leads
                        without a blog. However, blog content helps you rank for more search terms and builds authority
                        over time.
                    </p>

                    <h3>What&apos;s the most important page on a small business website for getting customers?</h3>
                    <p>
                        Your homepage — it gets the most traffic and sets the first impression. After that, your primary
                        service page and contact page. These three pages drive the majority of conversions for most small
                        businesses.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
