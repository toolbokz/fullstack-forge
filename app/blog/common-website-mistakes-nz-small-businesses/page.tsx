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

const SLUG = 'common-website-mistakes-nz-small-businesses'
const TITLE = 'Common Website Mistakes NZ Small Businesses Make'
const DESCRIPTION = 'Avoid the most common website mistakes NZ small businesses make — from unclear messaging and missing CTAs to slow mobile load times and weak trust signals.'
const DATE = '2026-04-04'
const UPDATED = '2026-04-04'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

const FAQ_ITEMS = [
    { q: 'What is the most common website mistake small businesses make?', a: 'Being too vague. The homepage does not explain what the business does, who it serves, or what to do next. This weakens both trust and conversion.' },
    { q: 'Can I fix my website without rebuilding it?', a: 'Sometimes. Small changes to messaging, CTAs, and page structure can improve performance significantly. But if the site has deep structural problems — slow speed, no mobile layout, no SEO — a rebuild may be more efficient.' },
    { q: 'How do I know if my website is losing leads?', a: 'Run a free audit. Look at bounce rates, time on page, and form submissions. If your traffic is reasonable but enquiries are low, the site is likely underperforming.' },
    { q: 'Does design really matter for a small business website?', a: 'Yes, but not as much as clarity. A beautiful site with vague messaging will underperform. A clean, clear site with honest trust signals will usually convert better.' },
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
        fetchUnsplashImage('small business website mistakes'),
        fetchUnsplashImage('frustrated business owner laptop'),
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
                        headline: 'Fixing the Website Gaps That Hurt Conversion',
                        body: 'Get a free audit showing exactly where your site is falling short on messaging, trust, speed, and conversion.',
                    } as any}
                    linkPackage={linkPackage as any}
                >
                    <p>
                        There are a few website problems that come up again and again across NZ small businesses.
                        Not because the business owners are careless — but because nobody tells them what actually
                        matters until it is too late.
                    </p>
                    <p>
                        The result is a site that looks &quot;okay&quot; but quietly underperforms — losing traffic,
                        losing trust, and losing leads.
                    </p>
                    <p>Here are the most common mistakes we see — and what to do about them.</p>

                    <h2>1. The Homepage Says Nothing Specific</h2>
                    <p>
                        This is the most common problem. The homepage features a big image, a vague headline like
                        &quot;Quality solutions for modern business,&quot; and no clear explanation of what the
                        company does, who it helps, or what the visitor should do next.
                    </p>
                    <p>
                        A homepage should explain the offer in plain language, within seconds. If it does not, the
                        rest of the site barely matters. See our guide on{' '}
                        <Link href="/blog/best-homepage-layout-for-small-business-website" className="text-primary hover:underline">
                            the best homepage layout for small business websites
                        </Link>{' '}
                        for a better approach.
                    </p>

                    <h2>2. No Clear Call to Action</h2>
                    <p>
                        Many small business websites have no visible call to action — or the only one is a tiny
                        &quot;Contact Us&quot; link buried in the footer.
                    </p>
                    <p>
                        Every page should guide the visitor toward the next logical step. That might be: get a free
                        quote, request a callback, see pricing, or book a job. If the visitor is guessing, the site
                        is leaking leads.
                    </p>

                    <h2>3. Slow on Mobile</h2>
                    <p>
                        A lot of NZ small business websites look okay on desktop but fall apart on mobile. Slow load
                        times, oversized images, and clunky layouts make the site feel broken. Given that most local
                        searches now come from phones, a weak mobile experience is a serious conversion killer.
                    </p>

                    <h2>4. No Trust Signals</h2>
                    <p>
                        If a visitor lands on the site and sees no reviews, no project examples, no team photo, and
                        no indication of location — the site feels generic. That erodes trust quickly.
                    </p>
                    <p>Useful trust signals include:</p>
                    <ul>
                        <li>Google reviews or testimonials</li>
                        <li>Real project examples</li>
                        <li>Team or founder photos</li>
                        <li>NZ location / service area</li>
                        <li>Clear pricing or process description</li>
                    </ul>
                    <p>Trust is earned by being specific, not by being polished.</p>

                    <h2>5. Using Facebook as a Replacement Website</h2>
                    <p>
                        Some small businesses rely on a Facebook page instead of a proper website. While Facebook
                        can help with visibility, it is not a substitute for a business website — you do not control
                        the layout, the content, or the SEO. For a deeper look at this, see{' '}
                        <Link href="/blog/website-vs-facebook-page-nz-small-business" className="text-primary hover:underline">
                            our comparison of websites vs Facebook pages
                        </Link>.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Business owner reviewing website performance on laptop"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h2>6. No SEO Foundations</h2>
                    <p>
                        Many NZ small business websites are invisible on Google. No meta titles. No heading structure.
                        No internal links. No relevant keywords. Without even basic SEO, the site has no chance of
                        ranking for any useful terms. This is often the easiest thing to fix — but most people do not
                        know where to start. Our{' '}
                        <Link href="/blog/seo-for-small-business-nz" className="text-primary hover:underline">
                            SEO for small business NZ guide
                        </Link>{' '}
                        covers the basics.
                    </p>

                    <h2>7. Ignoring Website Cost vs Website Value</h2>
                    <p>
                        Some businesses choose a cheap template and never invest in improving it. Others spend thousands
                        on a flashy build that does not convert. The right approach is to match the website investment
                        to business goals. For a more grounded view, see{' '}
                        <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">
                            how much a website costs in NZ
                        </Link>.
                    </p>

                    <h2>8. Too Many Pages, No Clear Flow</h2>
                    <p>
                        Some sites have 15+ pages, but no logical journey from page to page. Visitors land on a
                        random service page, and there is no link to pricing, no CTA to enquire, and no path to
                        understand the broader offer. More pages does not equal a better website. What matters is
                        whether those pages are connected, useful, and conversion-aware.
                    </p>

                    <h2>9. Generic Copy That Could Be About Any Business</h2>
                    <p>
                        If you could swap the business name for a competitor and the website would still make sense,
                        the copy is too generic. Good copy names the problem, describes the service outcome, and
                        speaks to a real customer. Generic copy is one of the biggest silent performance killers.
                    </p>

                    <h2>10. No Quote or Enquiry Path</h2>
                    <p>
                        A contact page is not enough. The website should actively guide interested visitors toward
                        a form, a quote builder, or a phone number — at multiple points throughout the site. If the
                        only enquiry path is a single &quot;contact us&quot; link, the site is almost certainly losing
                        opportunities.
                    </p>

                    <h2>Common Mistakes Summary Table</h2>
                    <table>
                        <thead>
                            <tr><th>Mistake</th><th>Why It Matters</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Vague homepage</td><td>Visitors leave without understanding the offer</td></tr>
                            <tr><td>No CTA</td><td>Interested visitors do not know what to do next</td></tr>
                            <tr><td>Slow mobile</td><td>Majority of local traffic is on phones</td></tr>
                            <tr><td>No trust signals</td><td>Site feels generic and anonymous</td></tr>
                            <tr><td>Facebook-only presence</td><td>No SEO value, no control</td></tr>
                            <tr><td>No SEO basics</td><td>Invisible on Google</td></tr>
                            <tr><td>Cost mismatch</td><td>Under- or over-investing relative to goals</td></tr>
                            <tr><td>No page flow</td><td>Visitors get stuck with no clear path</td></tr>
                            <tr><td>Generic copy</td><td>Nothing differentiates the business</td></tr>
                            <tr><td>No enquiry path</td><td>Lost leads from interested visitors</td></tr>
                        </tbody>
                    </table>

                    <ToolEmbed slug="lead-loss-calculator" context="See how many of these mistakes your website is making" />

                    <h2>How to Prioritise Fixes</h2>
                    <p>
                        If you are looking at this list and seeing several problems, do not panic. The smartest
                        approach is to fix the issues that affect conversion first:
                    </p>
                    <ol>
                        <li>Homepage clarity</li>
                        <li>CTA placement</li>
                        <li>Trust signals</li>
                        <li>Mobile usability</li>
                        <li>SEO foundations</li>
                    </ol>
                    <p>
                        Each one of those has a measurable impact on whether visitors turn into leads. Fix the
                        conversion path first, then work on visibility.
                    </p>

                    <h2>Frequently Asked Questions</h2>

                    <h3>What is the most common website mistake small businesses make?</h3>
                    <p>
                        Being too vague. The homepage does not explain what the business does, who it serves, or
                        what to do next. This weakens both trust and conversion.
                    </p>

                    <h3>Can I fix my website without rebuilding it?</h3>
                    <p>
                        Sometimes. Small changes to messaging, CTAs, and page structure can improve performance
                        significantly. But if the site has deep structural problems, a rebuild may be more efficient.
                    </p>

                    <h3>How do I know if my website is losing leads?</h3>
                    <p>
                        Run a free audit. Look at bounce rates, time on page, and form submissions. If your traffic
                        is reasonable but enquiries are low, the site is likely underperforming.
                    </p>

                    <h3>Does design really matter for a small business website?</h3>
                    <p>
                        Yes, but not as much as clarity. A beautiful site with vague messaging will underperform.
                        A clean, clear site with honest trust signals will usually convert better.
                    </p>

                    <h2>Want to Know Exactly What Your Website Is Getting Wrong?</h2>
                    <p>
                        At Fullstack Forge, we help NZ small businesses fix the website problems that cost them leads.
                        Start with a{' '}
                        <Link href="/#audit" className="text-primary hover:underline font-semibold">
                            free website audit
                        </Link>{' '}
                        to see where your site is falling short — or explore our{' '}
                        <Link href="/website-design-for-small-business" className="text-primary hover:underline font-semibold">
                            small business website packages
                        </Link>{' '}
                        if you are ready for a stronger foundation.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
