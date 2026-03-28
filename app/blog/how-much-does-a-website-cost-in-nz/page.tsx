import type { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import BlogArticleLayout from '../../../components/BlogArticleLayout'
import { articleSchema, breadcrumbSchema, SITE_URL } from '../../../lib/schema'
import { contentPlan } from '../../../lib/seo-data'
import Link from 'next/link'
import { fetchUnsplashImage } from '../../../lib/unsplash'
import UnsplashImage from '../../../components/UnsplashImage'

const SLUG = 'how-much-does-a-website-cost-in-nz'
const TITLE = 'How Much Does a Website Cost in NZ? 2026 Pricing Guide'
const DESCRIPTION = 'Complete NZ website pricing for 2026. Compare costs for small business, tradie, and ecommerce websites — from DIY to agency. Transparent pricing in NZD.'
const DATE = '2025-01-15'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

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
    const [heroImage, midImage, bottomImage] = await Promise.all([
        fetchUnsplashImage('website design pricing'),
        fetchUnsplashImage('web development cost comparison'),
        fetchUnsplashImage('small business owner laptop'),
    ])

    const schemas = [
        articleSchema({ title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: DATE }),
        breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Blog', url: `${SITE_URL}/blog` },
            { name: TITLE, url: `${SITE_URL}/blog/${SLUG}` },
        ]),
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
                    relatedLinks={[
                        { url: '/affordable-websites-nz', label: 'Affordable Websites NZ — From $699' },
                        { url: '/website-design-for-small-business', label: 'Website Design for Small Business' },
                        { url: '/ecommerce-websites-nz', label: 'E-Commerce Websites NZ' },
                        { url: '/blog/diy-vs-professional-website', label: 'DIY vs Professional Website' },
                        { url: '/blog/website-for-tradies-nz', label: 'Tradie Websites NZ' },
                    ]}
                >
                    <h2>Quick Answer: Website Cost in NZ (2026)</h2>
                    <p>
                        In New Zealand, a website costs anywhere from <strong>$0 (DIY)</strong> to <strong>$30,000+
                            (full agency build)</strong>. For most small businesses, the sweet spot is <strong>$699–$2,499
                                NZD</strong> for a professionally built, conversion-focused website that actually generates
                        leads.
                    </p>
                    <p>
                        All prices in this guide are in <strong>NZD excluding GST (15%)</strong> unless stated
                        otherwise. Here&apos;s the full breakdown so you can budget with confidence.
                    </p>

                    <h2>Website Design Cost NZ: Full Pricing Breakdown</h2>
                    <p>
                        The cost of a website in New Zealand depends on who builds it and how it&apos;s built. Here&apos;s
                        what each option actually costs in 2026:
                    </p>
                    <table>
                        <thead>
                            <tr><th>Option</th><th>Cost Range (NZD)</th><th>Turnaround</th><th>Best For</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>DIY (Wix, Squarespace)</td><td>$0–$600/year</td><td>Days–Weeks</td><td>Hobby sites, testing ideas</td></tr>
                            <tr><td>Freelancer</td><td>$500–$3,000</td><td>2–6 weeks</td><td>Budget-conscious businesses</td></tr>
                            <tr><td>Specialist Studio (e.g. Fullstack Forge)</td><td>$699–$2,499</td><td>3–7 days</td><td>Small businesses &amp; tradies wanting leads</td></tr>
                            <tr><td>Boutique Agency</td><td>$3,000–$10,000</td><td>4–8 weeks</td><td>Custom design + strategy</td></tr>
                            <tr><td>Full-Service Agency</td><td>$10,000–$30,000+</td><td>8–16 weeks</td><td>Large brands, complex features</td></tr>
                        </tbody>
                    </table>
                    <p>
                        The biggest factor isn&apos;t the upfront cost — it&apos;s whether the website <strong>pays for
                            itself</strong>. A $699 website that generates 10 enquiries a month is a better investment than
                        a $15,000 site that sits there looking pretty.
                    </p>

                    <h2>Website Cost by Type: What NZ Businesses Actually Pay</h2>
                    <p>
                        Different businesses need different things. Here&apos;s what website design costs in NZ for
                        each common type:
                    </p>

                    <h3>Small Business Website Cost NZ</h3>
                    <p>
                        A standard 3–5 page small business website — homepage, about, services, contact — typically
                        costs <strong>$699–$2,000 NZD</strong>. This covers professional design, mobile responsiveness,
                        basic SEO, and a contact or quote form.
                    </p>
                    <p>
                        For Auckland cafés, consultants, accountants, and service businesses, this is the most common
                        and cost-effective option. Our{' '}
                        <Link href="/affordable-websites-nz" className="text-primary hover:underline font-semibold">
                            Starter package at $699
                        </Link>{' '}
                        covers everything most small businesses need — live within a week.
                    </p>

                    <h3>Tradie Website Cost NZ</h3>
                    <p>
                        Plumbers, electricians, builders, and other tradies need a website that generates quote requests,
                        not just looks professional. A{' '}
                        <Link href="/blog/website-for-tradies-nz" className="text-primary hover:underline">
                            tradie website in NZ
                        </Link>{' '}
                        typically costs <strong>$699–$1,499 NZD</strong> and should include a quote form, service area
                        pages, photo gallery, and local SEO setup.
                    </p>
                    <p>
                        The ROI is immediate. One job from a website enquiry typically covers the entire cost of the
                        site 2–3x over.
                    </p>

                    <h3>Ecommerce Website Cost NZ</h3>
                    <p>
                        Selling products online? An ecommerce website in NZ costs <strong>$1,199–$5,000+ NZD</strong> depending
                        on the number of products, payment integrations, and shipping requirements. Our{' '}
                        <Link href="/ecommerce-websites-nz" className="text-primary hover:underline font-semibold">
                            ecommerce packages start at $1,199
                        </Link>{' '}
                        and include everything you need to launch an online store.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Comparing website development costs and pricing options in New Zealand"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg my-8">
                        <p className="font-semibold text-primary mb-2">Not sure what you need?</p>
                        <p className="text-sm">
                            Get a transparent quote tailored to your business — no hidden fees, no lock-in contracts.{' '}
                            <Link href="/#contact" className="text-primary hover:underline font-semibold">
                                Request pricing →
                            </Link>
                        </p>
                    </div>

                    <h2>How to Calculate Your Website Cost</h2>
                    <p>
                        Use this simple framework to estimate what your website should cost in NZ:
                    </p>
                    <ol>
                        <li>
                            <strong>Count your pages</strong> — A 3-page site costs less than a 15-page site.
                            Most small businesses need 3–5 pages. Tradies and service businesses: 3–7 pages.
                        </li>
                        <li>
                            <strong>List your features</strong> — Contact form only? Add $0. Online bookings?
                            Add $200–$500. Ecommerce? Add $500–$2,000+ depending on complexity.
                        </li>
                        <li>
                            <strong>Content: yours or theirs?</strong> — If you provide your own copy and photos,
                            costs drop. Professional copywriting adds $300–$800. Photography: $200–$500.
                        </li>
                        <li>
                            <strong>SEO requirements</strong> — Basic on-page SEO should be included by default.
                            Advanced local SEO targeting (e.g. ranking for &quot;plumber Auckland&quot;) adds
                            $300–$600.
                        </li>
                        <li>
                            <strong>Timeline</strong> — Rush jobs cost more. Standard 1–2 week builds are the
                            most cost-effective.
                        </li>
                    </ol>
                    <p>
                        <strong>Example:</strong> An Auckland tradie wanting a 5-page site with a quote form, photo
                        gallery, and local SEO = approximately <strong>$699–$999 NZD</strong> with a specialist like
                        Fullstack Forge.
                    </p>

                    <h2>What Actually Affects Website Cost in NZ</h2>
                    <p>
                        Seven factors determine what you&apos;ll pay for website design in New Zealand:
                    </p>
                    <ul>
                        <li>
                            <strong>Number of pages</strong> — More pages = more design, more content, higher cost.
                            But don&apos;t add pages for the sake of it — quality over quantity.
                        </li>
                        <li>
                            <strong>Design complexity</strong> — Template-based design ($699–$1,499) vs fully custom
                            UI/UX design ($3,000–$10,000+). Templates aren&apos;t inferior — they&apos;re proven
                            layouts that convert.
                        </li>
                        <li>
                            <strong>Functionality</strong> — Simple contact forms are cheap. Booking systems, membership
                            areas, payment processing, and custom integrations add cost quickly.
                        </li>
                        <li>
                            <strong>Content creation</strong> — Professional copywriting, photography, and video
                            production are additional but often worth the investment for conversion rates.
                        </li>
                        <li>
                            <strong>SEO and marketing setup</strong> — Basic SEO should be included. Google Business
                            Profile optimisation, schema markup, and content strategy are valuable add-ons.
                        </li>
                        <li>
                            <strong>Platform choice</strong> — WordPress, Shopify, Next.js, Wix — each has different
                            cost implications (more on that below).
                        </li>
                        <li>
                            <strong>Who builds it</strong> — A solo freelancer, a specialist studio, or a 15-person
                            agency all charge different rates for similar outcomes.
                        </li>
                    </ul>

                    <h2>Ongoing Website Costs in NZ: What You&apos;ll Pay After Launch</h2>
                    <p>
                        The upfront build cost is only part of the picture. Here are the ongoing costs New Zealand
                        businesses should budget for:
                    </p>
                    <table>
                        <thead>
                            <tr><th>Ongoing Cost</th><th>Annual Range (NZD)</th><th>Notes</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Domain name (.co.nz / .nz)</td><td>$25–$50/year</td><td>Essential — renew annually</td></tr>
                            <tr><td>Hosting</td><td>$0–$600/year</td><td>Free options exist (Netlify, Vercel). Premium: $10–$50/month</td></tr>
                            <tr><td>SSL certificate</td><td>$0</td><td>Free with most modern hosts (Let&apos;s Encrypt)</td></tr>
                            <tr><td>Email hosting</td><td>$50–$150/year</td><td>Google Workspace or Microsoft 365</td></tr>
                            <tr><td>Maintenance/updates</td><td>$0–$1,200/year</td><td>WordPress needs regular updates. Static sites: minimal</td></tr>
                            <tr><td>SEO / content marketing</td><td>$0–$6,000+/year</td><td>Optional but high-ROI for competitive markets</td></tr>
                        </tbody>
                    </table>
                    <p>
                        <strong>Pro tip:</strong> Many NZ web designers charge $50–$150/month for &quot;maintenance&quot; on
                        sites that don&apos;t need it. Static, modern websites (like those built on Next.js) require
                        almost zero maintenance. Ask what you&apos;re actually paying for.
                    </p>

                    <h2>Shopify vs WordPress: Website Cost Comparison NZ</h2>
                    <p>
                        Two of the most common platforms for NZ businesses — here&apos;s how they compare on cost:
                    </p>

                    <h3>WordPress Cost NZ</h3>
                    <ul>
                        <li><strong>Hosting:</strong> $10–$50/month ($120–$600/year)</li>
                        <li><strong>Theme:</strong> $0–$100 (one-off)</li>
                        <li><strong>Plugins:</strong> $0–$500/year (SEO, forms, security, backups)</li>
                        <li><strong>Developer setup:</strong> $500–$5,000 (one-off)</li>
                        <li><strong>Maintenance:</strong> $50–$150/month (updates, security patches)</li>
                    </ul>
                    <p>
                        <strong>Total Year 1:</strong> $800–$6,500+ NZD<br />
                        <strong>Ongoing:</strong> $300–$2,400/year
                    </p>
                    <p>
                        WordPress is powerful but requires ongoing maintenance, security updates, and plugin management.
                        It&apos;s the right choice for content-heavy sites that need frequent updates.
                    </p>

                    <h3>Shopify Cost NZ</h3>
                    <ul>
                        <li><strong>Plan:</strong> $54–$539 NZD/month (Basic to Advanced)</li>
                        <li><strong>Theme:</strong> $0–$500 (one-off)</li>
                        <li><strong>Apps:</strong> $0–$300/month (reviews, upsells, shipping)</li>
                        <li><strong>Transaction fees:</strong> 0.5–2% per sale (on top of payment processing)</li>
                        <li><strong>Developer customisation:</strong> $500–$5,000 (one-off)</li>
                    </ul>
                    <p>
                        <strong>Total Year 1:</strong> $1,200–$12,000+ NZD<br />
                        <strong>Ongoing:</strong> $650–$10,000+/year
                    </p>
                    <p>
                        Shopify is excellent for product-based businesses but the monthly fees and transaction costs
                        add up. For small stores with fewer than 50 products, consider whether a simpler ecommerce
                        solution would save you thousands per year.
                    </p>

                    <h3>Modern Static Sites (Next.js / Jamstack)</h3>
                    <p>
                        An increasingly popular alternative for NZ businesses:
                    </p>
                    <ul>
                        <li><strong>Hosting:</strong> $0/month (Netlify, Vercel free tiers)</li>
                        <li><strong>Maintenance:</strong> Near-zero (no server, no plugins to update)</li>
                        <li><strong>Speed:</strong> Fastest option — loads instantly</li>
                        <li><strong>Security:</strong> No database to hack, no plugins to exploit</li>
                        <li><strong>Developer build:</strong> $699–$2,499 (one-off)</li>
                    </ul>
                    <p>
                        <strong>Total Year 1:</strong> $699–$2,499 NZD<br />
                        <strong>Ongoing:</strong> $25–$50/year (domain only)
                    </p>
                    <p>
                        This is what we build at Fullstack Forge. Blazing-fast, zero-maintenance websites that cost
                        a fraction of WordPress or Shopify long-term — and convert better because they load instantly.
                    </p>

                    {bottomImage && (
                        <UnsplashImage
                            src={bottomImage.url}
                            alt="Small business owner in New Zealand reviewing their website on a laptop"
                            photographer={bottomImage.photographer}
                            profileUrl={bottomImage.profileUrl}
                        />
                    )}

                    <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg my-8">
                        <p className="font-semibold text-primary mb-2">Am I overpaying for my website?</p>
                        <p className="text-sm">
                            If you&apos;re paying monthly fees for a site that doesn&apos;t generate leads, the answer
                            is probably yes.{' '}
                            <Link href="/#audit" className="text-primary hover:underline font-semibold">
                                Get a free website audit →
                            </Link>
                        </p>
                    </div>

                    <h2>Real NZ Examples: What Businesses Actually Paid</h2>

                    <h3>Auckland Tradie — $699</h3>
                    <p>
                        A Christchurch plumber invested $699 in our Starter package. Within 8 weeks: <strong>25
                            monthly enquiries</strong>, first job from the website covered the cost 3x over. No ongoing
                        fees. Total year-one cost including domain: <strong>$749 NZD</strong>.
                    </p>

                    <h3>Auckland Service Business — $1,199</h3>
                    <p>
                        A cleaning company chose our growth package with booking integration and local SEO. Result:
                        <strong> 40+ monthly leads</strong> within 3 months. The website paid for itself in the first
                        two weeks of operation.
                    </p>

                    <h3>NZ Ecommerce Store — $1,499</h3>
                    <p>
                        A boutique retailer launched with our ecommerce package. <strong>$8,000+ in sales within the
                            first month</strong> — a 5x return on their website investment before any advertising spend.
                    </p>

                    <h2>Website Cost NZ: Frequently Asked Questions</h2>

                    <h3>What&apos;s the cheapest way to get a website in NZ?</h3>
                    <p>
                        DIY builders like Wix and Squarespace cost $0–$40/month but your time is a hidden cost. For a
                        professional site that generates leads from day one, $699 with a specialist is the most
                        cost-effective option.
                    </p>

                    <h3>Can I start with a basic site and upgrade later?</h3>
                    <p>
                        Absolutely. Start with a 3-page Starter site ($699) and add pages, features, or ecommerce
                        as your business grows. The best website investment is one that scales with you.
                    </p>

                    <h3>Are there hidden fees I should watch for?</h3>
                    <p>
                        Watch for: monthly &quot;maintenance&quot; fees on sites that don&apos;t need them, platform lock-in
                        (you can&apos;t take your site elsewhere), revision charges, and inflated hosting costs. Always
                        ask: &quot;What do I own, and what are the ongoing costs?&quot;
                    </p>

                    <h3>Do I need to pay GST on my website?</h3>
                    <p>
                        Yes — website design is a service subject to 15% GST in New Zealand. Most providers quote
                        excluding GST. Always confirm whether quoted prices are GST inclusive or exclusive.
                    </p>

                    <h3>How much should a small business spend on a website in NZ?</h3>
                    <p>
                        For most NZ small businesses, <strong>$699–$1,499 NZD</strong> is the right range. This gets
                        you a professional, mobile-optimised site with SEO — without overpaying for features you
                        don&apos;t need.
                    </p>

                    <h3>Is a $699 website any good?</h3>
                    <p>
                        When built by a specialist, yes. Our $699 Starter sites are professionally designed,
                        mobile-first, SEO-optimised, and built to generate leads. They outperform many $5,000+
                        agency sites because they&apos;re focused on what actually matters: conversions.
                    </p>

                    <h2>Get Transparent Website Pricing — No Surprises</h2>
                    <p>
                        At <strong>Fullstack Forge</strong>, we believe website pricing should be simple and
                        transparent. Every package includes design, development, SEO setup, mobile optimisation, and
                        deployment — no monthly fees, no hidden costs.
                    </p>
                    <ul>
                        <li><strong>Starter:</strong> $699 — Perfect for tradies and service businesses</li>
                        <li><strong>Growth:</strong> $999 — For businesses ready to scale lead generation</li>
                        <li><strong>Ecommerce:</strong> $1,199+ — Full online store with payments and shipping</li>
                    </ul>
                    <p>
                        Every site we build is designed to <strong>pay for itself</strong> through leads, enquiries,
                        and sales — not just look good in a portfolio.
                    </p>
                    <p>
                        <Link href="/affordable-websites-nz" className="text-primary hover:underline font-semibold">
                            View our full pricing →
                        </Link>
                        {' '}or{' '}
                        <Link href="/#contact" className="text-primary hover:underline font-semibold">
                            get a free quote tailored to your business
                        </Link>.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
