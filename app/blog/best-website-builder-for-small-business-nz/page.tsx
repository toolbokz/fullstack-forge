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

const SLUG = 'best-website-builder-for-small-business-nz'
const TITLE = 'Best Website Builder for Small Business NZ (2026 Comparison)'
const DESCRIPTION = 'Wix vs Squarespace vs Shopify vs WordPress vs custom-built: which platform suits your NZ business type? An honest comparison with NZ pricing and 3-year costs.'
const DATE = '2025-02-25'
const UPDATED = '2026-04-04'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

const FAQ_ITEMS = [
    { q: 'Which website builder is cheapest for NZ small businesses?', a: 'Over 3 years, a custom-built site ($1,000 one-off with free hosting) is cheapest. Among DIY builders, WordPress.org self-hosted ($820 over 3 years) is cheapest, followed by Wix ($972) and Squarespace ($1,440). Shopify is most expensive at $1,980+ for non-ecommerce use.' },
    { q: 'Is Wix or Squarespace better for a small business in NZ?', a: 'Squarespace has better templates and looks more polished out of the box. Wix has more flexibility with its drag-and-drop editor. For NZ businesses focused on lead generation, neither is ideal — both are slower and less SEO-friendly than custom or WordPress options.' },
    { q: 'Do I need Shopify to sell products online in NZ?', a: 'No. If you sell fewer than 50 products, WooCommerce (WordPress) or a custom ecommerce build can be more cost-effective. Shopify excels for businesses with large inventories, complex shipping, or high transaction volumes where its built-in features justify the monthly cost.' },
    { q: 'Can I move my website from one builder to another?', a: 'Generally no — Wix, Squarespace, and Shopify don\'t let you export your full site. You\'ll need to rebuild from scratch if you switch platforms. WordPress and custom-built sites give you full code ownership and portability.' },
    { q: 'Which website builder is best for SEO in NZ?', a: 'Custom-built (Next.js/React) sites consistently score highest on SEO audits due to fast load times and full technical control. WordPress is second with good plugin support. Squarespace is adequate. Wix has improved but still has SEO limitations.' },
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
        fetchUnsplashImage('website builder platform'),
        fetchUnsplashImage('custom web development coding'),
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
                    midCta={{
                        headline: 'Skip the Builder — Get a Custom Website Instead',
                        body: 'No monthly builder fees. No limitations. Get a fast, SEO-optimised website built for your NZ business from $1,000.',
                    } as any}
                    linkPackage={linkPackage as any}
                    relatedLinks={[] as any}
                >
                    <h2>The Quick Answer by Business Type</h2>
                    <p>
                        The best platform depends on what you actually need. Here&apos;s the short version:
                    </p>
                    <table>
                        <thead>
                            <tr><th>Business Type</th><th>Best Platform</th><th>Why</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Tradie / service business</td><td>Custom-built</td><td>Fastest load, best local SEO, zero ongoing fees</td></tr>
                            <tr><td>Small e-commerce (under 50 products)</td><td>WordPress + WooCommerce</td><td>Full control, lower fees than Shopify</td></tr>
                            <tr><td>Large e-commerce (50+ products)</td><td>Shopify</td><td>Best inventory/shipping management</td></tr>
                            <tr><td>Creative / portfolio</td><td>Squarespace</td><td>Beautiful templates, easy visual editing</td></tr>
                            <tr><td>Testing a business idea</td><td>Wix</td><td>Lowest barrier to start, most templates</td></tr>
                            <tr><td>Content-heavy site / blog</td><td>WordPress.org</td><td>Best CMS, most plugins, most flexible</td></tr>
                        </tbody>
                    </table>
                    <p>
                        Now let&apos;s break down each platform in detail — with NZ-specific pricing and honest
                        assessments.
                    </p>

                    <h2>Platform Comparison</h2>

                    <h3>Wix</h3>
                    <p><strong>Best for:</strong> Beginners testing ideas. <strong>NZ cost:</strong> $17–$35/month.</p>
                    <p>
                        Wix is the easiest place to start. The drag-and-drop editor requires zero technical skill,
                        and there are 500+ templates. For a hobby site or a business idea you want to test before
                        investing, it&apos;s adequate.
                    </p>
                    <p>The downsides are significant for serious business use:</p>
                    <ul>
                        <li><strong>Speed:</strong> Wix sites consistently score 30–50 on Google PageSpeed. Builder bloat is built into the platform and can&apos;t be removed.</li>
                        <li><strong>SEO:</strong> Improved in recent years but still limited. You can&apos;t control server-side rendering, schema markup is basic, and URL structures are rigid.</li>
                        <li><strong>Lock-in:</strong> You can&apos;t export your site. If you leave Wix, you start from zero.</li>
                        <li><strong>Templates:</strong> You can&apos;t switch templates after you start building — you&apos;re committed from day one.</li>
                    </ul>

                    <h3>Squarespace</h3>
                    <p><strong>Best for:</strong> Creatives and visual businesses. <strong>NZ cost:</strong> $27–$65/month.</p>
                    <p>
                        Squarespace has the best-looking templates of any builder. If you&apos;re a photographer,
                        designer, restaurant, or any business where visual presentation is paramount, the templates
                        are genuinely impressive.
                    </p>
                    <ul>
                        <li><strong>Speed:</strong> Better than Wix (typically 50–70 on PageSpeed) but still not fast by modern standards.</li>
                        <li><strong>SEO:</strong> Decent. Clean URLs, reasonable meta tag control, built-in sitemap. Won&apos;t compete with a custom site for local rankings.</li>
                        <li><strong>Customisation:</strong> More restrictive than Wix. You work within the template&apos;s grid — less flexibility but more consistent results.</li>
                        <li><strong>E-commerce:</strong> Basic online store features included in business plan, but can&apos;t match Shopify for serious ecommerce.</li>
                    </ul>

                    <h3>Shopify</h3>
                    <p><strong>Best for:</strong> Product-based e-commerce. <strong>NZ cost:</strong> $55–$399/month + transaction fees.</p>
                    <p>
                        Shopify is the gold standard for e-commerce — inventory management, shipping integrations,
                        payment processing, abandoned cart recovery, all built in. If you sell 50+ physical products,
                        it&apos;s hard to beat.
                    </p>
                    <ul>
                        <li><strong>For non-ecommerce businesses:</strong> Shopify is expensive overkill. A service business paying $55/month for Shopify is wasting money.</li>
                        <li><strong>Transaction fees:</strong> Shopify charges 0.5–2% on top of payment processing unless you use Shopify Payments (not available for all NZ business types).</li>
                        <li><strong>Blogging:</strong> Shopify&apos;s blog is barebones. If content marketing is part of your strategy, this is a real limitation.</li>
                        <li><strong>App costs:</strong> Many essential features require third-party apps at $10–$100/month each. A store with 5–6 apps can easily add $200+/month to costs.</li>
                    </ul>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Custom web development compared to DIY website builder platforms"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h3>WordPress.org (Self-Hosted)</h3>
                    <p><strong>Best for:</strong> Content-heavy sites and tech-comfortable users. <strong>NZ cost:</strong> $10–$30/month hosting.</p>
                    <p>
                        WordPress powers 43% of all websites globally. It&apos;s the most flexible CMS available — if
                        you&apos;re willing to manage hosting, updates, and security.
                    </p>
                    <ul>
                        <li><strong>Flexibility:</strong> 60,000+ plugins mean you can add almost any feature. This is both WordPress&apos;s greatest strength and biggest risk — bad plugins break sites.</li>
                        <li><strong>Speed:</strong> Highly variable. A lean WordPress site with good hosting can score 80+ on PageSpeed. A plugin-heavy site on cheap hosting scores 20.</li>
                        <li><strong>SEO:</strong> Excellent with Yoast or Rank Math plugins. Full control over every SEO element.</li>
                        <li><strong>Maintenance:</strong> WordPress requires regular updates (core, themes, plugins) and security monitoring. Budget 1–2 hours/month or $50–$150/month for managed maintenance.</li>
                        <li><strong>Security:</strong> The most targeted platform for hackers due to its popularity. Security plugins and regular updates are essential.</li>
                    </ul>

                    <h3>Custom-Built (Next.js / React / Jamstack)</h3>
                    <p><strong>Best for:</strong> Service businesses, tradies, and anyone who wants the best performance and lowest long-term cost. <strong>NZ cost:</strong> $1,000–$2,000 one-off.</p>
                    <p>
                        A custom-built site is hand-coded, not assembled from templates. It loads faster, ranks better,
                        and costs nothing to maintain — because there&apos;s no server, no database, and no plugins to update.
                    </p>
                    <ul>
                        <li><strong>Speed:</strong> Sub-second load times. Consistently 90–100 on PageSpeed.</li>
                        <li><strong>SEO:</strong> Full technical control. Schema markup, optimised images, proper heading structure, server-side rendering — everything Google wants.</li>
                        <li><strong>Hosting:</strong> Free on Netlify or Vercel. Zero monthly costs.</li>
                        <li><strong>Security:</strong> No database, no plugins, minimal attack surface. The most secure option by default.</li>
                        <li><strong>Trade-off:</strong> Higher upfront cost. Content updates typically require a developer (though CMS integrations can solve this).</li>
                    </ul>

                    <h2>3-Year Cost Comparison (NZD)</h2>
                    <table>
                        <thead>
                            <tr><th>Platform</th><th>Upfront</th><th>Monthly</th><th>3-Year Total</th><th>Owns Code?</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Wix (Business)</td><td>$0</td><td>$27</td><td>$972</td><td>No</td></tr>
                            <tr><td>Squarespace (Business)</td><td>$0</td><td>$40</td><td>$1,440</td><td>No</td></tr>
                            <tr><td>Shopify (Basic)</td><td>$0</td><td>$55</td><td>$1,980</td><td>No</td></tr>
                            <tr><td>WordPress (self-hosted)</td><td>$100</td><td>$20</td><td>$820</td><td>Yes</td></tr>
                            <tr><td>Custom (Fullstack Forge)</td><td>$1,000</td><td>$0</td><td>$1,000</td><td>Yes</td></tr>
                        </tbody>
                    </table>
                    <p>
                        For a full breakdown including ongoing costs like domains, email, and maintenance, see our{' '}
                        <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">
                            complete NZ website pricing guide
                        </Link>. For help deciding whether to build yourself or hire a pro, read our{' '}
                        <Link href="/blog/diy-vs-professional-website" className="text-primary hover:underline">
                            DIY vs professional website guide
                        </Link>.
                    </p>

                    <h2>Frequently Asked Questions</h2>

                    <h3>Which website builder is cheapest for NZ small businesses?</h3>
                    <p>
                        Over 3 years, a custom-built site ($1,000 one-off with free hosting) is cheapest. Among DIY
                        builders, WordPress.org self-hosted ($820 over 3 years) is cheapest, followed by Wix ($972)
                        and Squarespace ($1,440). Shopify is most expensive at $1,980+ for non-ecommerce use.
                    </p>

                    <h3>Is Wix or Squarespace better for a small business in NZ?</h3>
                    <p>
                        Squarespace has better templates and looks more polished out of the box. Wix has more flexibility
                        with its drag-and-drop editor. For NZ businesses focused on lead generation, neither is ideal —
                        both are slower and less SEO-friendly than custom or WordPress options.
                    </p>

                    <h3>Do I need Shopify to sell products online in NZ?</h3>
                    <p>
                        No. If you sell fewer than 50 products, WooCommerce (WordPress) or a custom ecommerce build
                        can be more cost-effective. Shopify excels for businesses with large inventories, complex
                        shipping, or high transaction volumes.
                    </p>

                    <h3>Can I move my website from one builder to another?</h3>
                    <p>
                        Generally no — Wix, Squarespace, and Shopify don&apos;t let you export your full site. You&apos;ll
                        need to rebuild from scratch if you switch platforms. WordPress and custom-built sites give you
                        full code ownership and portability.
                    </p>

                    <h3>Which website builder is best for SEO in NZ?</h3>
                    <p>
                        Custom-built (Next.js/React) sites consistently score highest on SEO audits due to fast load
                        times and full technical control. WordPress is second with good plugin support. Squarespace is
                        adequate. Wix has improved but still has SEO limitations.
                    </p>

                    <h2>Our Recommendation</h2>
                    <p>
                        If your website is your main lead generation tool (and for most NZ small businesses, it should
                        be), invest in a{' '}
                        <Link href="/affordable-websites-nz" className="text-primary hover:underline">
                            custom-built site
                        </Link>. It&apos;s cheaper over time, faster, ranks better, and you own it completely.
                    </p>
                    <p>
                        Need e-commerce? See our{' '}
                        <Link href="/ecommerce-websites-nz" className="text-primary hover:underline">
                            e-commerce packages
                        </Link>{' '}
                        for a custom online store without the monthly Shopify tax.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
