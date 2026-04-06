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

const SLUG = 'best-homepage-layout-for-small-business-website'
const TITLE = 'Best Homepage Layout for a Small Business Website'
const DESCRIPTION = 'Learn what the best homepage layout for a small business website looks like, including hero section, trust signals, service blocks, CTAs, and local SEO structure.'
const DATE = '2026-04-04'
const UPDATED = '2026-04-04'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

const FAQ_ITEMS = [
    { q: 'What should be at the top of a small business homepage?', a: 'A clear explanation of what the business does, who it helps, and what the visitor should do next. Avoid vague slogans — be specific about your service, location, and the action you want visitors to take.' },
    { q: 'How many sections should a homepage have?', a: 'Enough to guide trust and action, but not so many that it feels cluttered. Most effective small business homepages have 7–10 sections: hero, CTA, trust, services, benefits, proof, secondary CTA, FAQ, and final CTA.' },
    { q: 'Should a homepage include testimonials?', a: 'Yes. Testimonials or proof usually help trust and conversion significantly. They reduce hesitation and give visitors confidence that the business delivers on its promises.' },
    { q: 'Should the homepage link to other pages?', a: 'Absolutely. It should guide visitors into services, pricing, supporting content, and contact paths. Good internal linking also helps search engines understand your site structure.' },
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
        fetchUnsplashImage('small business homepage layout'),
        fetchUnsplashImage('website design wireframe'),
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
                        headline: 'Want a Homepage Structure That Converts?',
                        body: 'We build small business websites with homepage layouts designed to do more than look clean — they are built to drive action.',
                    } as any}
                    linkPackage={linkPackage as any}
                >
                    <p>
                        A lot of small business websites lose potential customers in the first few seconds. Not because
                        the business is bad. Not because the offer is weak. But because the homepage does not make the
                        next step obvious enough.
                    </p>
                    <p>
                        The homepage usually has one job: help the visitor quickly understand{' '}
                        <strong>what you do, why they should trust you, and what to do next</strong>.
                    </p>
                    <p>
                        That sounds simple, but a lot of small business homepages miss it. They lead with vague slogans.
                        They bury the CTA. They look tidy, but they do not move the visitor toward action. A better
                        homepage layout fixes that.
                    </p>

                    <h2>What the Homepage Needs to Do</h2>
                    <p>A homepage is not there to say everything. It is there to do a few key things well:</p>
                    <ul>
                        <li>Explain what the business does</li>
                        <li>Explain who it helps</li>
                        <li>Create trust quickly</li>
                        <li>Direct the visitor to the next step</li>
                        <li>Support both mobile users and search engines</li>
                    </ul>
                    <p>
                        That is why homepage layout matters so much. It affects bounce rate, trust, enquiry rate, search
                        relevance, and overall site performance.
                    </p>

                    <h2>The Best Homepage Layout: Section by Section</h2>
                    <p>A strong small-business homepage usually follows this order:</p>
                    <table>
                        <thead>
                            <tr><th>Section</th><th>Purpose</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Hero section</td><td>Explain the offer fast</td></tr>
                            <tr><td>CTA area</td><td>Show the next step clearly</td></tr>
                            <tr><td>Trust signals</td><td>Reduce hesitation</td></tr>
                            <tr><td>Services overview</td><td>Clarify what you do</td></tr>
                            <tr><td>Benefits / why choose us</td><td>Build confidence</td></tr>
                            <tr><td>Social proof / reviews</td><td>Strengthen trust</td></tr>
                            <tr><td>Secondary CTA</td><td>Catch mid-page intent</td></tr>
                            <tr><td>FAQ or reassurance</td><td>Remove objections</td></tr>
                            <tr><td>Final CTA</td><td>Convert late-stage readers</td></tr>
                        </tbody>
                    </table>
                    <p>
                        That basic structure works well because it matches how people usually make decisions online.
                    </p>

                    <h2>1. Hero Section</h2>
                    <p>
                        This is the top of the homepage. It should answer three questions quickly:{' '}
                        <strong>What do you do? Who is it for? What should I do next?</strong>
                    </p>
                    <p>A weak hero often says something vague like:</p>
                    <ul>
                        <li>&quot;Welcome to our business&quot;</li>
                        <li>&quot;Quality service with a smile&quot;</li>
                        <li>&quot;Digital solutions for modern brands&quot;</li>
                    </ul>
                    <p>A stronger hero is more specific:</p>
                    <ul>
                        <li>Websites That Generate Customers for NZ Small Businesses</li>
                        <li>Tradie Websites Built to Get More Quote Requests</li>
                        <li>Affordable Website Design for Service Businesses in NZ</li>
                    </ul>
                    <p>That kind of message is much clearer and more effective.</p>

                    <h2>2. Primary CTA</h2>
                    <p>
                        The homepage should make the next step obvious early. Examples: &quot;Get a Free Website
                        Audit,&quot; &quot;See Pricing,&quot; &quot;Request a Quote,&quot; or &quot;Book a Call.&quot;
                    </p>
                    <p>
                        The CTA should be visible, specific, and relevant to the page intent. A homepage should not
                        make people hunt for the next step.
                    </p>
                    <p>
                        This is one of the design principles already explored in our guide on{' '}
                        <Link href="/blog/best-website-design-for-small-businesses" className="text-primary hover:underline">
                            best website design for small businesses
                        </Link>.
                    </p>

                    <h2>3. Trust Signals</h2>
                    <p>
                        Once the visitor understands the offer, the next thing they usually need is confidence. Trust
                        signals can include:
                    </p>
                    <ul>
                        <li>Testimonials or review ratings</li>
                        <li>Client count or years in business</li>
                        <li>Local references or credentials</li>
                        <li>Real work examples or project photos</li>
                    </ul>
                    <p>
                        For many small businesses, this section matters more than fancy visuals. People want
                        reassurance.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Website wireframe showing homepage layout structure"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h2>4. Services Overview</h2>
                    <p>
                        The homepage should give a clear summary of the main things you do. Not everything has to be
                        fully explained here, but visitors should quickly see the main service categories or pathways.
                    </p>
                    <p>For example:</p>
                    <ul>
                        <li>Small business websites</li>
                        <li>Tradie websites</li>
                        <li>Ecommerce websites</li>
                        <li>SEO support</li>
                    </ul>
                    <p>
                        This helps both users and search engines understand the business faster.
                    </p>

                    <h2>5. Why Choose You</h2>
                    <p>
                        This section should answer: why should someone choose you instead of a competitor? That could
                        be faster delivery, more affordable pricing, better support, local NZ focus, or stronger
                        conversion design.
                    </p>
                    <p>
                        This section works best when it is concrete — not &quot;we are passionate about
                        excellence,&quot; but &quot;live in 7 days, NZ-based support, designed to generate
                        enquiries.&quot;
                    </p>

                    <h2>6. Social Proof and Results</h2>
                    <p>
                        At this point, the visitor is deciding whether they trust the claims enough to act. That is
                        where reviews, outcomes, or mini-case-study style proof can help.
                    </p>
                    <ul>
                        <li>Real testimonials from customers</li>
                        <li>Before/after examples</li>
                        <li>Enquiry growth results</li>
                        <li>Project outcomes or screenshots</li>
                    </ul>
                    <p>
                        Proof supports conversion much more than generic self-praise.
                    </p>

                    <h2>7. Secondary CTA</h2>
                    <p>
                        Some visitors will be ready now. Others need a bit more reassurance first. That is why a
                        second CTA in the middle of the homepage helps — it catches the people who needed a little
                        more context before deciding.
                    </p>

                    <h2>8. FAQ / Reassurance</h2>
                    <p>
                        A short FAQ section can help reduce friction around common objections: How much does it cost?
                        How long does it take? What is included? Can I update it later?
                    </p>
                    <p>
                        This section often improves conversion because it removes small doubts before they become
                        drop-offs. It also creates a good opportunity to support broader pricing and lead-generation
                        content like{' '}
                        <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">
                            website cost NZ
                        </Link>{' '}
                        and{' '}
                        <Link href="/blog/how-to-get-more-leads-from-your-website" className="text-primary hover:underline">
                            how to get more leads from your website
                        </Link>.
                    </p>

                    <h2>9. Final CTA</h2>
                    <p>
                        Not everyone converts at the top or middle of the page. A final CTA gives late-stage readers
                        one more clear path — get a free audit, request pricing, contact us, or start your project.
                        The important thing is clarity.
                    </p>

                    <h2>Common Homepage Mistakes</h2>
                    <ol>
                        <li>
                            <strong>Vague headline.</strong> If people cannot tell what you do quickly, they leave.
                        </li>
                        <li>
                            <strong>Too much clutter.</strong> Too many options often reduce action.
                        </li>
                        <li>
                            <strong>Weak CTA.</strong> If the next step is unclear, visitors drift away.
                        </li>
                        <li>
                            <strong>No trust section.</strong> People need confidence before they act.
                        </li>
                        <li>
                            <strong>Poor mobile layout.</strong> A homepage that feels fine on desktop can still fail
                            badly on mobile — and most traffic is mobile.
                        </li>
                        <li>
                            <strong>No real internal pathways.</strong> The homepage should guide people to service
                            pages, pricing, and contact actions cleanly.
                        </li>
                    </ol>

                    <h2>Homepage Layout for Local NZ Businesses</h2>
                    <p>
                        A homepage for a local business should also help with location trust. That can include city
                        or service area wording, local proof, NZ-relevant language, and trust signals tied to your
                        market.
                    </p>
                    <p>
                        For example, a Hamilton-based business should not feel like a generic international template
                        site. It should feel grounded and specific to the New Zealand market.
                    </p>

                    <ToolEmbed slug="lead-loss-calculator" context="See how your current homepage structure might be costing you enquiries" />

                    <h2>Example of a Good Homepage Flow</h2>
                    <p>A visitor lands on the homepage. They immediately see:</p>
                    <ul>
                        <li>What the business does</li>
                        <li>Who it is for</li>
                        <li>The main CTA</li>
                    </ul>
                    <p>Then they scroll and see:</p>
                    <ul>
                        <li>Why the business is credible</li>
                        <li>The main services</li>
                        <li>Proof and results</li>
                        <li>Another CTA</li>
                        <li>Key FAQs</li>
                        <li>Final call to action</li>
                    </ul>
                    <p>
                        That is usually enough to move a serious visitor closer to enquiry. No tricks — just
                        structure.
                    </p>

                    <h2>Homepage Layout and SEO</h2>
                    <p>
                        A homepage is not just for conversion. It also supports SEO by making your core focus clearer.
                        A homepage that clearly reflects business type, service focus, audience, location, and internal
                        service pathways is often easier for search engines to understand than a vague one.
                    </p>
                    <p>
                        That is especially important for businesses that also want to rank for service or city terms.
                    </p>

                    <h2>Quick Homepage Checklist</h2>
                    <ol>
                        <li>Clear headline that explains what you do</li>
                        <li>Strong CTA visible above the fold</li>
                        <li>Trust signals early on the page</li>
                        <li>Visible service overview</li>
                        <li>Benefits / why choose you section</li>
                        <li>Social proof or results</li>
                        <li>Secondary CTA mid-page</li>
                        <li>FAQ or reassurance section</li>
                        <li>Final CTA at the bottom</li>
                        <li>Mobile-first structure throughout</li>
                    </ol>
                    <p>If most of those are missing, the homepage probably has room to improve.</p>

                    <h2>Frequently Asked Questions</h2>

                    <h3>What should be at the top of a small business homepage?</h3>
                    <p>
                        A clear explanation of what the business does, who it helps, and what the visitor should do
                        next. Avoid vague slogans — be specific about your service, location, and the action you
                        want visitors to take.
                    </p>

                    <h3>How many sections should a homepage have?</h3>
                    <p>
                        Enough to guide trust and action, but not so many that it feels cluttered. Most effective
                        small business homepages have 7–10 sections.
                    </p>

                    <h3>Should a homepage include testimonials?</h3>
                    <p>
                        Yes. Testimonials or proof usually help trust and conversion significantly. They reduce
                        hesitation and give visitors confidence that the business delivers.
                    </p>

                    <h3>Should the homepage link to other pages?</h3>
                    <p>
                        Absolutely. It should guide visitors into services, pricing, supporting content, and contact
                        paths. Good internal linking also helps search engines understand your site structure.
                    </p>

                    <h2>Want a Homepage That Actually Turns Visits Into Enquiries?</h2>
                    <p>
                        At Fullstack Forge, we build small-business websites with homepage structure that is designed
                        to do more than look clean. It is built to clarify the offer, build trust, support SEO, and
                        drive action.
                    </p>
                    <p>
                        If your current homepage feels nice but underperforms, start with a{' '}
                        <Link href="/#contact" className="text-primary hover:underline font-semibold">
                            free consultation
                        </Link>. Or if you want a stronger small-business website foundation, check out our{' '}
                        <Link href="/website-design-for-small-business" className="text-primary hover:underline font-semibold">
                            website design packages
                        </Link>.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
