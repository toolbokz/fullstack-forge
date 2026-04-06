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

const SLUG = 'how-to-get-more-quote-requests-from-your-website'
const TITLE = 'How to Get More Quote Requests From Your Website'
const DESCRIPTION = 'Learn how to get more quote requests from your website with better CTAs, trust signals, forms, and conversion-focused design for NZ small businesses.'
const DATE = '2026-04-04'
const UPDATED = '2026-04-04'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

const FAQ_ITEMS = [
    { q: 'Should I use "contact us" or "request a quote"?', a: 'If quote requests are the real goal, "request a quote" is usually stronger and clearer. It tells the visitor exactly what happens next and sets expectations for both parties.' },
    { q: 'How many form fields should I use?', a: 'Usually fewer is better for first contact. Name, email or phone, and a short job description is often enough. You can collect more detail after the initial enquiry.' },
    { q: 'Do testimonials really help quote conversions?', a: 'Yes. Trust signals like testimonials often reduce hesitation and improve response rates — especially for service businesses where the visitor is deciding whether to bother enquiring at all.' },
    { q: 'Do I need pricing on the page?', a: 'Not always exact pricing, but some pricing context usually helps reduce uncertainty. Even "from" prices or general ranges can qualify visitors and make them more likely to request a quote.' },
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
        fetchUnsplashImage('website quote request conversion'),
        fetchUnsplashImage('business contact form laptop'),
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
                        headline: 'Turning Visits Into Real Enquiries',
                        body: 'We build websites for NZ small businesses that are designed around conversion — stronger CTAs, better trust flow, and quote paths that actually work.',
                    } as any}
                    linkPackage={linkPackage as any}
                >
                    <p>
                        A lot of small business websites get visits but very few enquiries. The usual problem is not
                        always traffic. Often, it is that the website is not doing a good enough job of{' '}
                        <strong>turning interest into action</strong>.
                    </p>
                    <p>
                        If you run a service business, one of the clearest signs of that is simple: not enough quote
                        requests. People visit the site. They look around. Then they leave. No form fill. No call.
                        No enquiry.
                    </p>
                    <p>
                        That usually means your website has a <strong>conversion problem</strong>. The good news is
                        that quote requests can often be improved without needing a total redesign or a massive
                        increase in traffic.
                    </p>

                    <h2>Why Quote Requests Matter So Much</h2>
                    <p>
                        For many NZ service businesses, quote requests are the real conversion event. Not everyone
                        will call immediately, book instantly, or be ready to buy on first visit.
                    </p>
                    <p>But many people are willing to ask for a quote if the next step feels:</p>
                    <ul>
                        <li>Easy</li>
                        <li>Low-risk</li>
                        <li>Clear</li>
                        <li>Worth their time</li>
                    </ul>
                    <p>
                        That makes quote requests one of the most useful conversion targets for businesses like
                        tradies, cleaners, consultants, and local service providers. If the website is not generating
                        quote requests consistently, it is usually underperforming.
                    </p>

                    <h2>The Main Reasons Websites Fail to Generate Quote Requests</h2>

                    <h3>1. The CTA Is Weak</h3>
                    <p>
                        A lot of sites still use vague buttons like &quot;Contact us,&quot; &quot;Submit,&quot; or
                        &quot;Learn more.&quot; Those are easy to ignore.
                    </p>
                    <p>A better CTA is specific and benefit-led:</p>
                    <ul>
                        <li>Request a Free Quote</li>
                        <li>Get My Free Website Audit</li>
                        <li>See Pricing</li>
                        <li>Ask for a Fast Estimate</li>
                    </ul>

                    <h3>2. The Site Does Not Build Enough Trust</h3>
                    <p>
                        Before asking for a quote, visitors want some confidence. They want to know: are you credible?
                        Have you done this before? Are you local? Will you respond? Without trust signals, many
                        visitors hesitate.
                    </p>

                    <h3>3. The Form Feels Annoying</h3>
                    <p>
                        Long forms create friction. The more fields you ask for, the more chances someone has to
                        abandon the process.
                    </p>

                    <h3>4. The Site Is Too Generic</h3>
                    <p>
                        If the messaging is broad and vague, visitors do not feel like the service is clearly for
                        them. Specificity matters.
                    </p>

                    <h3>5. Mobile Experience Is Weak</h3>
                    <p>
                        A lot of quote intent happens on phones. If the form, buttons, or page layout are clunky on
                        mobile, conversions drop fast.
                    </p>

                    <h2>What a High-Performing Quote Request Flow Looks Like</h2>
                    <table>
                        <thead>
                            <tr><th>Element</th><th>Why It Helps</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Clear CTA above the fold</td><td>Gives the visitor an obvious next step</td></tr>
                            <tr><td>Strong benefit-focused copy</td><td>Explains why they should enquire</td></tr>
                            <tr><td>Trust signals near the form</td><td>Reduces hesitation</td></tr>
                            <tr><td>Short form</td><td>Lowers friction</td></tr>
                            <tr><td>Mobile-first layout</td><td>Captures more real-world traffic</td></tr>
                            <tr><td>Clear response expectations</td><td>Makes the process feel safer</td></tr>
                        </tbody>
                    </table>
                    <p>
                        This is one of the main differences between a site that just exists and a site that actively
                        supports sales.
                    </p>

                    <h2>Improve the CTA First</h2>
                    <p>
                        If your main action is a quote request, make that obvious. That means clear wording, visible
                        placement, and natural repetition across the page.
                    </p>
                    <p>Examples of stronger CTAs:</p>
                    <ul>
                        <li>Request a Free Quote</li>
                        <li>Get a Fast Quote</li>
                        <li>Ask for a Fixed Estimate</li>
                        <li>Get Pricing for Your Project</li>
                    </ul>
                    <p>
                        That is usually much stronger than a generic contact button. This also ties directly into
                        broader lead-generation work, which is covered in more depth in{' '}
                        <Link href="/blog/how-to-get-more-leads-from-your-website" className="text-primary hover:underline">
                            how to get more leads from your website
                        </Link>.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Business owner reviewing quote request form on laptop"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h2>Add Trust Signals Next to the CTA</h2>
                    <p>
                        A quote form by itself can feel risky. A quote form <strong>with trust beside it</strong>{' '}
                        feels safer.
                    </p>
                    <p>Useful trust signals include:</p>
                    <ul>
                        <li>Google reviews or star ratings</li>
                        <li>Testimonials from real customers</li>
                        <li>Local credentials or affiliations</li>
                        <li>Real project photos</li>
                        <li>&quot;We reply within 24 hours&quot;</li>
                        <li>&quot;No obligation quote&quot;</li>
                    </ul>
                    <p>
                        This is especially important for higher-trust service businesses. If the visitor is deciding
                        whether to bother enquiring, proof often makes the difference.
                    </p>

                    <h2>Make the Form Shorter</h2>
                    <p>
                        Many websites ask for too much too early. For an initial quote request, you often only need:
                    </p>
                    <ul>
                        <li>Name</li>
                        <li>Email or phone</li>
                        <li>Short job description</li>
                    </ul>
                    <p>You can collect more detail later. A shorter form usually means more submissions.</p>

                    <h2>Make the Offer More Specific</h2>
                    <p>
                        A quote request converts better when the visitor understands what happens next. For example,
                        &quot;Request a free quote for your project&quot; is usually stronger than &quot;Contact us.&quot;
                    </p>
                    <p>You can go further and reduce friction with copy like:</p>
                    <ul>
                        <li>No obligation</li>
                        <li>Fast response</li>
                        <li>Clear pricing</li>
                        <li>Free estimate</li>
                        <li>We will reply within one business day</li>
                    </ul>
                    <p>That turns the CTA into a more attractive next step.</p>

                    <h2>Match the Page to the Visitor&apos;s Intent</h2>
                    <p>
                        Someone landing on a tradie page and someone landing on a general web design page may need
                        different messaging. That is why context matters.
                    </p>
                    <p>
                        A quote CTA on a tradie-focused page might work best as: &quot;Request a Tradie Website
                        Quote.&quot; A quote CTA on a cleaning business page might work best as: &quot;Get Pricing for
                        a Cleaning Business Website.&quot; Specificity improves conversion.
                    </p>

                    <h2>Common Mistakes That Reduce Quote Requests</h2>
                    <ol>
                        <li>
                            <strong>Only one CTA at the bottom.</strong> Many visitors never get that far. Place your
                            primary CTA early and repeat it naturally.
                        </li>
                        <li>
                            <strong>No pricing signals at all.</strong> If visitors feel completely in the dark about
                            cost, they may avoid enquiring. This is why pricing-related content like{' '}
                            <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">
                                how much does a website cost in NZ
                            </Link>{' '}
                            often improves overall conversion.
                        </li>
                        <li>
                            <strong>Too much text before the ask.</strong> Content matters, but the next step should
                            still be visible early.
                        </li>
                        <li>
                            <strong>Weak mobile layout.</strong> Buttons too small, forms too long, contact info hard
                            to find.
                        </li>
                        <li>
                            <strong>No sense of urgency or clarity.</strong> If the next step feels vague, people
                            delay it — and most never come back.
                        </li>
                    </ol>

                    <h2>A Better Quote Request Structure</h2>
                    <p>A high-converting page usually follows a simple pattern:</p>
                    <ol>
                        <li>Clear promise</li>
                        <li>Supporting proof</li>
                        <li>Clear CTA</li>
                        <li>Service clarity</li>
                        <li>More proof</li>
                        <li>Easy quote form</li>
                        <li>Final reassurance</li>
                    </ol>
                    <p>
                        This does not require hype. It just requires structure. That is also one of the core principles
                        in good{' '}
                        <Link href="/blog/best-website-design-for-small-businesses" className="text-primary hover:underline">
                            small business website design
                        </Link>.
                    </p>

                    <h2>Example: Why Two Similar Websites Perform Differently</h2>
                    <p><strong>Website A:</strong></p>
                    <ul>
                        <li>Generic headline</li>
                        <li>Vague &quot;contact&quot; button</li>
                        <li>No testimonials near the form</li>
                        <li>Long form with 8+ fields</li>
                        <li>Weak mobile experience</li>
                    </ul>
                    <p><strong>Website B:</strong></p>
                    <ul>
                        <li>Clear headline tied to offer</li>
                        <li>&quot;Request a Quote&quot; CTA</li>
                        <li>Visible trust proof</li>
                        <li>Short form — 3 fields</li>
                        <li>Mobile-first layout</li>
                        <li>Response expectation shown</li>
                    </ul>
                    <p>
                        Website B will usually generate more quote requests — even with similar traffic levels. That
                        is why conversion strategy matters so much.
                    </p>

                    <h2>Quote Requests and SEO Work Together</h2>
                    <p>
                        Some people think they need to choose between SEO and conversion. They do not. More traffic is
                        helpful, but more traffic without better quote conversion wastes opportunity.
                    </p>
                    <p>If you improve:</p>
                    <ul>
                        <li>Search visibility</li>
                        <li>Trust signals</li>
                        <li>CTA clarity</li>
                        <li>Form quality</li>
                    </ul>
                    <p>You get a stronger overall system.</p>

                    <ToolEmbed slug="lead-loss-calculator" context="See how many quote requests your website might be missing right now" />

                    <h2>Quick Quote Request Checklist</h2>
                    <ol>
                        <li>Is your main CTA specific and benefit-led?</li>
                        <li>Is it visible early on the page?</li>
                        <li>Do you repeat it naturally through the content?</li>
                        <li>Is there trust proof near the CTA?</li>
                        <li>Is the form short — 3 fields or fewer?</li>
                        <li>Is the site easy to use on mobile?</li>
                        <li>Does the page explain what happens after they enquire?</li>
                    </ol>
                    <p>If you answer no to several of those, there is probably room to improve.</p>

                    <h2>Frequently Asked Questions</h2>

                    <h3>Should I use &quot;contact us&quot; or &quot;request a quote&quot;?</h3>
                    <p>
                        If quote requests are the real goal, &quot;request a quote&quot; is usually stronger and
                        clearer. It tells the visitor exactly what happens next.
                    </p>

                    <h3>How many form fields should I use?</h3>
                    <p>
                        Usually fewer is better for first contact. Name, email or phone, and a short job description
                        is often enough. You can collect more detail after the initial enquiry.
                    </p>

                    <h3>Do testimonials really help quote conversions?</h3>
                    <p>
                        Yes. Trust signals like testimonials often reduce hesitation and improve response rates —
                        especially for service businesses.
                    </p>

                    <h3>Do I need pricing on the page?</h3>
                    <p>
                        Not always exact pricing, but some pricing context usually helps reduce uncertainty. Even
                        &quot;from&quot; prices or general ranges can qualify visitors and make them more likely to
                        request a quote.
                    </p>

                    <h2>Want a Website That Generates More Enquiries?</h2>
                    <p>
                        At Fullstack Forge, we build websites for NZ small businesses that are designed to convert
                        interest into action — clearer CTAs, stronger trust flow, better quote paths, and more
                        useful conversion structure.
                    </p>
                    <p>
                        If your site is getting traffic but not enough quote requests, start with a{' '}
                        <Link href="/#audit" className="text-primary hover:underline font-semibold">
                            free website audit
                        </Link>. Or if you already know the site needs improvement, check out our{' '}
                        <Link href="/website-design-for-small-business" className="text-primary hover:underline font-semibold">
                            website packages for small businesses
                        </Link>.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
