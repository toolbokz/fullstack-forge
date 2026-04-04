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

const SLUG = 'what-pages-should-a-small-business-website-have'
const TITLE = 'What Pages Should a Small Business Website Have?'
const DESCRIPTION = 'Learn what pages a small business website should have in NZ, including homepage, services, pricing, trust pages, and contact flow that actually helps generate enquiries.'
const DATE = '2026-04-04'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

const FAQ_ITEMS = [
    { q: 'Do all small business websites need multiple service pages?', a: 'Not always, but if you offer distinct services, separate pages often help with clarity and SEO. A site with one vague "Services" page usually performs worse than one with focused pages for each offering.' },
    { q: 'Is a pricing page necessary?', a: 'Not always, but some pricing context is usually useful. Even broad ranges or "starting from" numbers reduce uncertainty and improve lead quality by filtering tyre-kickers.' },
    { q: 'Should a small business have a blog?', a: 'Only if it supports your broader visibility and enquiry goals. A blog with 3–5 well-targeted posts beats a blog with 50 generic articles. Focus on posts that help your ideal customer make a decision.' },
    { q: 'What is the minimum number of pages a small business website should have?', a: 'Usually enough to explain the offer, build trust, and make contact easy. For most businesses, 3–5 pages is a practical starting point — homepage, service page(s), about, and contact.' },
    { q: 'Do I need a FAQ page on my website?', a: 'A dedicated FAQ page is optional, but FAQ content is almost always useful. You can include FAQ sections on service pages, homepage, or pricing pages. It helps answer objections and can earn rich snippets in search.' },
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
        fetchUnsplashImage('small business website pages'),
        fetchUnsplashImage('website structure planning'),
    ])

    const linkPackage = await getArticleLinkPackageWithThumbnails(SLUG)

    const schemas = [
        articleSchema({ title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: DATE }),
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
                    midCta={{
                        headline: 'Want a Website Structure That Actually Generates Enquiries?',
                        body: 'Most small business websites are missing key pages or have the wrong structure. We build sites around clarity, trust, and conversion — not just filling space.',
                    } as any}
                    linkPackage={linkPackage as any}
                    relatedLinks={[] as any}
                >

                    {/* ── INTRODUCTION ── */}
                    <p>
                        A lot of small business owners know they need a website, but they are not always sure what
                        should actually go on it.
                    </p>
                    <p>Should it be:</p>
                    <ul>
                        <li>One page?</li>
                        <li>Five pages?</li>
                        <li>Ten pages?</li>
                        <li>A homepage and contact form only?</li>
                        <li>A bigger site with separate services, pricing, and blog content?</li>
                    </ul>
                    <p>
                        The honest answer is: most small business websites do not need dozens of pages. But they
                        do need the <strong>right</strong> pages.
                    </p>
                    <p>
                        A website that is missing key pages often feels incomplete, harder to trust, and less useful
                        for both visitors and search engines. This guide breaks down the pages that matter most, which
                        ones are optional, and how to think about your website structure if the goal is not just
                        &quot;have a website&quot; but actually get enquiries from it.
                    </p>

                    {/* ── THE SHORT ANSWER ── */}
                    <h2>The Short Answer</h2>
                    <p>A strong small business website usually needs:</p>
                    <ul>
                        <li>A homepage</li>
                        <li>At least one service page or service section</li>
                        <li>An about / trust section</li>
                        <li>A contact or quote page</li>
                        <li>Supporting trust and conversion content where relevant</li>
                    </ul>
                    <p>From there, the exact structure depends on:</p>
                    <ul>
                        <li>What kind of business you run</li>
                        <li>How many services you offer</li>
                        <li>Whether local SEO matters</li>
                        <li>Whether the website is mostly for credibility, lead generation, or sales</li>
                    </ul>

                    {/* ── WHY THE RIGHT PAGES MATTER ── */}
                    <h2>Why the Right Pages Matter</h2>
                    <p>The pages on your website are not just there to &quot;fill out&quot; the site. They affect:</p>
                    <ul>
                        <li>How clear your business looks</li>
                        <li>How easy the site is to trust</li>
                        <li>How well visitors can find what they need</li>
                        <li>How easy it is to enquire</li>
                        <li>How well search engines understand the site</li>
                    </ul>
                    <p>
                        A smaller site with the right structure often performs better than a larger site with vague
                        or unnecessary pages. That is why getting the{' '}
                        <Link href="/blog/best-homepage-layout-for-small-business-website" className="text-primary hover:underline">
                            homepage layout right
                        </Link>{' '}
                        matters more than adding extra pages just for the sake of it.
                    </p>

                    {/* ── PAGE 1: HOMEPAGE ── */}
                    <h2>1. Homepage</h2>
                    <p>
                        Your homepage is usually the first impression. It should quickly explain:
                    </p>
                    <ul>
                        <li>What you do</li>
                        <li>Who you help</li>
                        <li>Where you operate (if location matters)</li>
                        <li>What the next step is</li>
                    </ul>
                    <p>
                        A homepage should not try to say everything. It should act as the main entry point and guide
                        people toward the right service or next action.
                    </p>
                    <p>
                        If your homepage is weak or feels unfocused, our guide to the{' '}
                        <Link href="/blog/best-homepage-layout-for-small-business-website" className="text-primary hover:underline">
                            best homepage layout for a small business website
                        </Link>{' '}
                        breaks down the section-by-section structure that actually works.
                    </p>

                    {/* ── PAGE 2: SERVICE PAGES ── */}
                    <h2>2. Service Pages</h2>
                    <p>
                        If you offer more than one meaningful service, your website should usually reflect that.
                        Service pages help with:
                    </p>
                    <ul>
                        <li>Clarity — each page speaks to one specific need</li>
                        <li>Trust — visitors see you specialise, not just generalise</li>
                        <li>SEO — each page targets different search terms</li>
                        <li>Better internal linking between related content</li>
                        <li>More relevant enquiries from the right visitors</li>
                    </ul>
                    <p>
                        For example, instead of one generic &quot;Services&quot; page, it may be stronger to have
                        separate pages or sections for small business websites, tradie websites, ecommerce websites,
                        and SEO support. A visitor looking for one specific service is more likely to convert when
                        they land on a page that speaks directly to that need.
                    </p>

                    {/* ── PAGE 3: ABOUT / TRUST ── */}
                    <h2>3. About / Trust Page</h2>
                    <p>
                        People want to know who they are dealing with. An about page does not need to be long or
                        self-important, but it should help answer:
                    </p>
                    <ul>
                        <li>Who is behind the business?</li>
                        <li>Who is this service for?</li>
                        <li>Why should people trust you?</li>
                        <li>What is your approach?</li>
                    </ul>
                    <p>
                        This matters even more for service businesses, where credibility often influences whether
                        someone enquires. A site with zero trust content leaves visitors guessing — and guessing
                        usually means leaving.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Planning the structure of a small business website"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    {/* ── PAGE 4: CONTACT / QUOTE ── */}
                    <h2>4. Contact or Quote Page</h2>
                    <p>
                        A website should make it easy to get in touch. For many small businesses, the contact page
                        is one of the highest-value pages on the site.
                    </p>
                    <p>It should usually include:</p>
                    <ul>
                        <li>A simple contact form</li>
                        <li>Email or phone details if appropriate</li>
                        <li>A clear CTA</li>
                        <li>Response expectation (e.g. &quot;We reply within 24 hours&quot;)</li>
                        <li>Low friction — as few fields as possible</li>
                    </ul>
                    <p>
                        For service businesses, &quot;request a quote&quot; is often stronger than a generic contact
                        page. If your enquiry flow feels weak, our guide on{' '}
                        <Link href="/blog/how-to-get-more-quote-requests-from-your-website" className="text-primary hover:underline">
                            how to get more quote requests from your website
                        </Link>{' '}
                        covers the design and placement details that actually make a difference.
                    </p>

                    {/* ── PAGE 5: PRICING ── */}
                    <h2>5. Pricing Page or Pricing Context</h2>
                    <p>
                        Not every business needs a fully detailed pricing page. But many websites benefit from at
                        least <em>some</em> pricing context. That can mean:
                    </p>
                    <ul>
                        <li>Package pricing</li>
                        <li>Starting-from pricing</li>
                        <li>Explanation of what affects price</li>
                        <li>Common project ranges</li>
                    </ul>
                    <p>
                        This reduces uncertainty and often improves lead quality. If visitors have no idea what to
                        expect, some will leave without enquiring. For a full breakdown of what websites actually
                        cost, see{' '}
                        <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">
                            how much does a website cost in NZ
                        </Link>.
                    </p>

                    {/* ── PAGE 6: PROOF ── */}
                    <h2>6. Proof / Results Content</h2>
                    <p>
                        If the business depends on trust, proof matters. This can be part of the homepage, service
                        pages, or its own section. Examples include:
                    </p>
                    <ul>
                        <li>Testimonials</li>
                        <li>Google reviews</li>
                        <li>Examples of work</li>
                        <li>Before-and-after comparisons</li>
                        <li>Outcomes or case-study style proof</li>
                    </ul>
                    <p>
                        Not every site needs a full case study library, but nearly every business website benefits
                        from some visible proof. A service page without any social proof often feels weaker than it
                        should.
                    </p>

                    {/* ── PAGE 7: BLOG ── */}
                    <h2>7. Blog or Resource Content</h2>
                    <p>A blog is not required for every site. But it can be useful if you want:</p>
                    <ul>
                        <li>More search visibility</li>
                        <li>Stronger internal linking</li>
                        <li>More buyer education</li>
                        <li>More topical authority</li>
                    </ul>
                    <p>
                        That said, blog posts work best when they support service pages and conversion goals rather
                        than existing in isolation. For example, a blog post about website structure should support
                        your broader{' '}
                        <Link href="/website-design-for-small-business" className="text-primary hover:underline">
                            website design
                        </Link>{' '}
                        and lead-generation pages — not sit disconnected somewhere on the site.
                    </p>

                    {/* ── PAGE 8: FAQ ── */}
                    <h2>8. FAQ / Reassurance Content</h2>
                    <p>A FAQ section or page helps answer common objections:</p>
                    <ul>
                        <li>How much does it cost?</li>
                        <li>How long does it take?</li>
                        <li>What is included?</li>
                        <li>Do I need a website?</li>
                        <li>Can I update it later?</li>
                    </ul>
                    <p>
                        These questions often block conversion when they are not answered clearly. Putting FAQ
                        content on the same page as a CTA — rather than hiding it on a separate page — usually
                        performs best.
                    </p>

                    <ToolEmbed slug="lead-loss-calculator" context="See how many enquiries your current website structure might be costing you" />

                    {/* ── STRUCTURES BY BUSINESS TYPE ── */}
                    <h2>Typical Website Structures by Business Type</h2>

                    <h3>Local Service Business</h3>
                    <p>Usually needs:</p>
                    <ul>
                        <li>Homepage</li>
                        <li>Service page(s)</li>
                        <li>About/trust section</li>
                        <li>Contact/quote page</li>
                        <li>Local SEO support if relevant</li>
                    </ul>

                    <h3>Small Professional Service Business</h3>
                    <p>Usually needs:</p>
                    <ul>
                        <li>Homepage</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Credibility/proof</li>
                        <li>Optional blog</li>
                    </ul>

                    <h3>Ecommerce Business</h3>
                    <p>Usually needs:</p>
                    <ul>
                        <li>Homepage</li>
                        <li>Shop/category structure</li>
                        <li>Product pages</li>
                        <li>About/trust</li>
                        <li>Shipping/returns</li>
                        <li>Contact/help</li>
                    </ul>

                    <h3>Lean Starter Business</h3>
                    <p>May only need:</p>
                    <ul>
                        <li>Homepage</li>
                        <li>One service page</li>
                        <li>Contact page</li>
                        <li>Strong CTA and trust signals</li>
                    </ul>

                    {/* ── WHAT'S OPTIONAL ── */}
                    <h2>What Pages Are Optional?</h2>
                    <p>Not every small business needs:</p>
                    <ul>
                        <li>A huge blog</li>
                        <li>Multiple city pages</li>
                        <li>A giant about page</li>
                        <li>A complicated portfolio</li>
                        <li>Too many service pages with weak content</li>
                    </ul>
                    <p>
                        The goal is not &quot;more pages.&quot; The goal is <strong>better structure</strong>. A
                        five-page site with clear intent and strong conversion flow will outperform a fifteen-page
                        site where half the pages are thin filler.
                    </p>

                    {/* ── COMMON MISTAKES ── */}
                    <h2>Common Mistakes in Website Page Structure</h2>

                    <h3>1. One homepage trying to do everything</h3>
                    <p>
                        This often makes the site feel vague. When a homepage tries to cover every service, every
                        location, and every audience, it ends up speaking clearly to nobody.
                    </p>

                    <h3>2. Too many thin pages</h3>
                    <p>
                        More pages with weak content can make the site feel bloated. It also hurts SEO — Google does
                        not reward quantity, it rewards relevance and depth.
                    </p>

                    <h3>3. No clear route to enquiry</h3>
                    <p>
                        If people cannot tell where to go next, conversion suffers. Every page should have a clear
                        next step — whether that is a quote form, a phone number, or a link to the next relevant page.
                    </p>

                    <h3>4. Missing trust content</h3>
                    <p>
                        A service page without proof often feels weaker than it should. Even a few Google reviews or
                        a short testimonial can make a real difference.
                    </p>

                    <h3>5. No internal logic between pages</h3>
                    <p>
                        Pages should support each other. A service page should link to pricing. A blog post should
                        link to the relevant service. If the pages feel disconnected, visitors struggle to navigate
                        and search engines struggle to understand the site.
                    </p>

                    {/* ── CHECKLIST TABLE ── */}
                    <h2>Website Page Checklist</h2>
                    <div className="overflow-x-auto my-6">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-2 border-gray-200">
                                    <th className="py-3 pr-4 font-semibold">Page Type</th>
                                    <th className="py-3 pr-4 font-semibold">Usually Needed?</th>
                                    <th className="py-3 font-semibold">Why</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                <tr className="border-b border-gray-100">
                                    <td className="py-3 pr-4 font-medium">Homepage</td>
                                    <td className="py-3 pr-4">Yes</td>
                                    <td className="py-3">First impression and navigation</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3 pr-4 font-medium">Service page(s)</td>
                                    <td className="py-3 pr-4">Usually</td>
                                    <td className="py-3">Clarifies offer and supports SEO</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3 pr-4 font-medium">About / trust page</td>
                                    <td className="py-3 pr-4">Usually</td>
                                    <td className="py-3">Builds confidence</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3 pr-4 font-medium">Contact / quote page</td>
                                    <td className="py-3 pr-4">Yes</td>
                                    <td className="py-3">Supports enquiries</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3 pr-4 font-medium">Pricing context</td>
                                    <td className="py-3 pr-4">Often</td>
                                    <td className="py-3">Reduces uncertainty</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3 pr-4 font-medium">Proof / reviews</td>
                                    <td className="py-3 pr-4">Often</td>
                                    <td className="py-3">Builds trust</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3 pr-4 font-medium">Blog / resources</td>
                                    <td className="py-3 pr-4">Optional but useful</td>
                                    <td className="py-3">Supports authority and SEO</td>
                                </tr>
                                <tr>
                                    <td className="py-3 pr-4 font-medium">FAQ</td>
                                    <td className="py-3 pr-4">Often useful</td>
                                    <td className="py-3">Reduces objections</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* ── FAQ SECTION ── */}
                    <h2>Frequently Asked Questions</h2>

                    <h3>Do all small business websites need multiple service pages?</h3>
                    <p>
                        Not always, but if you offer distinct services, separate pages often help with clarity and
                        SEO. A site with one vague &quot;Services&quot; page usually performs worse than one with
                        focused pages for each offering.
                    </p>

                    <h3>Is a pricing page necessary?</h3>
                    <p>
                        Not always, but some pricing context is usually useful. Even broad ranges or
                        &quot;starting from&quot; numbers reduce uncertainty and improve lead quality by filtering
                        tyre-kickers.
                    </p>

                    <h3>Should a small business have a blog?</h3>
                    <p>
                        Only if it supports your broader visibility and enquiry goals. A blog with 3–5 well-targeted
                        posts beats a blog with 50 generic articles. Focus on posts that help your ideal customer
                        make a decision.
                    </p>

                    <h3>What is the minimum number of pages a small business website should have?</h3>
                    <p>
                        Usually enough to explain the offer, build trust, and make contact easy. For most businesses,
                        3–5 pages is a practical starting point — homepage, service page(s), about, and contact.
                    </p>

                    <h3>Do I need a FAQ page on my website?</h3>
                    <p>
                        A dedicated FAQ page is optional, but FAQ content is almost always useful. You can include
                        FAQ sections on service pages, homepage, or pricing pages. It helps answer objections and
                        can earn rich snippets in search.
                    </p>

                    {/* ── FINAL CTA ── */}
                    <h2>Want a Website Structure That Actually Helps You Get Enquiries?</h2>
                    <p>
                        At Fullstack Forge, we build websites for NZ small businesses that are structured around
                        clarity, trust, and conversion — not just filling space with pages.
                    </p>
                    <p>
                        If your current site feels incomplete or confusing, start with a{' '}
                        <Link href="/#audit" className="text-primary hover:underline font-semibold">
                            free website audit
                        </Link>. Or if you want a better structure from the start, check out our{' '}
                        <Link href="/website-design-for-small-business" className="text-primary hover:underline font-semibold">
                            small business website packages
                        </Link>.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
