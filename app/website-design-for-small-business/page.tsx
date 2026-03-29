import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import LeadCaptureForm from '../../components/LeadCaptureForm'
import { PixabayImage, PixabayVideo, PixabayImageGrid } from '../../components/PixabayMedia'
import { searchPixabayImages, searchPixabayVideos } from '../../lib/pixabay'
import { serviceSchema, faqSchema, breadcrumbSchema, SITE_URL } from '../../lib/schema'

export const metadata: Metadata = {
    title: 'Website Design for Small Business NZ — Affordable Sites That Generate Leads | Fullstack Forge',
    description: 'Affordable website design for small businesses in New Zealand from $699. Conversion-focused, SEO-optimised, live in 7 days. See real examples and get a free audit.',
    alternates: {
        canonical: `${SITE_URL}/website-design-for-small-business`,
    },
    openGraph: {
        title: 'Website Design for Small Business NZ — From $699',
        description: 'Professional websites for NZ small businesses. Affordable, fast, built to generate customers — not just look pretty.',
        url: `${SITE_URL}/website-design-for-small-business`,
        type: 'website',
    },
}

const faqs = [
    { q: 'How much does a small business website cost in NZ?', a: 'At Fullstack Forge, small business websites start at $699 NZD (Starter: 1–3 pages, mobile-optimised, basic SEO). Most small businesses choose our Growth plan at $1,199 — which adds conversion optimization, lead capture, and advanced SEO. For comparison, NZ agencies charge $5,000–$20,000 for comparable work. See our full breakdown in our guide to website costs in NZ.' },
    { q: 'Will a website actually help my small business?', a: '81% of New Zealand consumers research online before buying locally. A professional website lets you get found on Google, build credibility instantly, and capture leads 24/7 — even when you\'re asleep. Businesses we\'ve worked with typically see 15–40+ enquiries per month within 3 months of launch.' },
    { q: 'How long does it take to build a small business website?', a: 'Starter sites are ready in 2–4 business days. Growth and Pro sites take 5–7 business days. We move fast because we use proven, pre-built designs customised for your brand — rather than designing from a blank canvas every time.' },
    { q: 'I already have a website — should I redesign or start over?', a: 'It depends on the platform and condition. If your current site is on Wix/Squarespace and under-performing, a fresh build is usually faster and cheaper than trying to fix it. If you have an existing WordPress site with some good content, a redesign might make sense. We\'ll audit your current site for free and recommend the best path.' },
    { q: 'Do I need to provide content and images?', a: 'Having your own photos (team, premises, work) is ideal — real images build more trust than stock photos. For written content, we guide you through a simple questionnaire and handle the copywriting. You approve everything before launch.' },
    { q: 'Are there ongoing fees?', a: 'No. Our pricing is a one-time investment. We deploy to Netlify where hosting is free for most sites. Your only recurring cost is domain registration (around $20/year). No monthly fees, no maintenance contracts, no hidden charges.' },
    { q: 'What if I need e-commerce?', a: 'Our Growth plan covers service businesses. For online stores with product catalogs, shopping carts, and payment processing, see our dedicated e-commerce website packages starting at $1,199.' },
]

export default async function WebsiteDesignSmallBusiness() {
    const [images, videos] = await Promise.all([
        searchPixabayImages('small business owner office laptop', 4),
        searchPixabayVideos('small business entrepreneur', 1),
    ])

    const schemas = [
        serviceSchema({
            name: 'Website Design for Small Business NZ',
            description: 'Affordable, professional website design for small businesses across New Zealand. Conversion-focused websites that generate leads and customers.',
            url: `${SITE_URL}/website-design-for-small-business`,
        }),
        faqSchema(faqs),
        breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Website Design for Small Business', url: `${SITE_URL}/website-design-for-small-business` },
        ]),
    ]

    return (
        <>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <Nav />
            <main>
                {/* ══════════════════════════════════════════════
                    HERO
                ══════════════════════════════════════════════ */}
                <section className="bg-dark text-white py-20 md:py-28">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                            Website Design for Small Business NZ
                        </p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Website Design for Small Business NZ — Sites That Grow Your Revenue
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            Your website should be your hardest-working employee — generating leads, building trust, and bringing in customers while you focus on running your business. We build sites that do exactly that, starting at $699.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#lead-form" className="btn btn-lg">
                                Get a Free Website Audit
                            </a>
                            <Link href="/#solutions" className="btn btn-outline-light btn-lg">
                                View Live Demos
                            </Link>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm mt-8">
                            <span>✓ Live in 7 Days</span>
                            <span>✓ From $699 NZD</span>
                            <span>✓ No Monthly Fees</span>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    HERO IMAGE
                ══════════════════════════════════════════════ */}
                {images[0] && (
                    <section className="py-0">
                        <PixabayImage
                            src={images[0].largeSrc || images[0].src}
                            alt={images[0].alt}
                            user={images[0].user}
                            pageURL={images[0].pageURL}
                            priority={true}
                            className="w-full max-h-[400px] overflow-hidden [&_img]:rounded-none [&_img]:max-h-[400px] [&_figcaption]:py-2 [&_figcaption]:bg-gray-50"
                        />
                    </section>
                )}

                {/* ══════════════════════════════════════════════
                    SMALL BUSINESS PROBLEMS
                ══════════════════════════════════════════════ */}
                <section className="py-20">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                            The 3 Problems Holding NZ Small Businesses Back Online
                        </h2>
                        <p className="text-muted text-lg text-center max-w-2xl mx-auto mb-12">
                            We talk to small business owners every week. These are the problems that come up again and again.
                        </p>

                        <div className="space-y-10">
                            <div>
                                <h3 className="text-lg font-bold mb-2">&ldquo;My website gets visitors, but nobody contacts me&rdquo;</h3>
                                <p className="text-muted leading-relaxed">
                                    This is the most common complaint. You&apos;re getting traffic — maybe from Google, maybe from social media, maybe from word-of-mouth — but your phone isn&apos;t ringing and your inbox is empty. The problem isn&apos;t traffic. It&apos;s <strong>conversion</strong>. Your site has no clear call-to-action, no compelling reason to act now, and no trust signals that convince a visitor you&apos;re worth contacting. The average NZ small business website converts at just 1–2%. That means for every 100 visitors, 98 leave without doing anything. We build sites that target 5–10%.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">&ldquo;I can&apos;t find my business on Google&rdquo;</h3>
                                <p className="text-muted leading-relaxed">
                                    You search for your own business type + city and you&apos;re nowhere on the first page. Meanwhile, competitors with worse services are ranking above you. The issue is almost always technical: no meta tags, no heading structure, slow loading, no mobile optimization, no Google Business Profile connection. Google needs specific signals to rank your site — and most small business websites in NZ are missing all of them. Every site we build includes the{' '}
                                    <Link href="/blog/seo-for-small-business-nz" className="text-primary hover:underline">SEO foundations</Link> that give you a real shot at ranking.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">&ldquo;I wasted money on a bad website&rdquo;</h3>
                                <p className="text-muted leading-relaxed">
                                    You paid someone $3,000–$5,000 for a site 18 months ago and it&apos;s brought in zero leads. Or you spent weeks building a Wix site that looks nothing like the template preview. Or a &ldquo;web guy&rdquo; disappeared halfway through the project. We hear these stories constantly. The issue is usually a{' '}
                                    <Link href="/blog/diy-vs-professional-website" className="text-primary hover:underline">design-only approach</Link> — a site that looks nice but was never built to generate business. We build the opposite: sites where every element serves the goal of converting visitors into customers.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 text-center">
                            <a href="#lead-form" className="text-primary font-semibold hover:underline">
                                Get a free audit — we&apos;ll tell you exactly what&apos;s going wrong →
                            </a>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    HOW WEBSITES GENERATE CUSTOMERS
                ══════════════════════════════════════════════ */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                            How a Well-Built Website Generates Customers for Small Businesses
                        </h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            A professional website isn&apos;t a cost — it&apos;s an investment that pays for itself. Here&apos;s the mechanism.
                        </p>

                        <div className="space-y-8">
                            <div className="bg-white rounded-xl p-8 border border-gray-100">
                                <h3 className="text-lg font-bold mb-3">Step 1: SEO Gets You Found</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    When someone searches <strong>&ldquo;accountant Auckland&rdquo;</strong> or <strong>&ldquo;cleaning service Wellington,&rdquo;</strong> Google decides which websites to show. Proper SEO — meta tags, heading structure, fast loading, structured data, and quality content — tells Google your site is relevant and trustworthy. We build every page with on-page SEO baked in, plus local search optimization so you appear for &ldquo;[your service] near me&rdquo; searches. This gives you free, organic traffic from people who are <em>already looking for what you sell</em>.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-8 border border-gray-100">
                                <h3 className="text-lg font-bold mb-3">Step 2: Conversion Design Turns Visitors Into Leads</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    Getting traffic is only half the job. Once someone lands on your site, the page needs to <strong>convince them to contact you</strong>. This means: a clear headline that speaks to their problem, social proof (testimonials, case studies, specific results) placed near decision points, multiple calls-to-action throughout the page, and a frictionless contact form. We use proven{' '}
                                    <Link href="/blog/how-to-get-more-leads-from-your-website" className="text-primary hover:underline">conversion tactics</Link> on every site — not generic brochure layouts.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-8 border border-gray-100">
                                <h3 className="text-lg font-bold mb-3">Step 3: Lead Funnels Capture Every Opportunity</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    Not everyone is ready to call immediately. Some visitors need more information, or they&apos;re comparing options. A lead funnel captures their details — through a free audit offer, a quote calculator, or a downloadable guide — so you can follow up. Our sites include Netlify-powered lead capture with instant email notifications. You know the moment someone submits an enquiry, and you can respond before your competitors even know that lead existed.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    INDUSTRY EXAMPLES
                ══════════════════════════════════════════════ */}
                <section className="py-20">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                            Small Business Websites That Actually Work — Real Examples
                        </h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            Every industry has different needs. Here&apos;s how we approach website design for the most common small business types in New Zealand.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <p className="text-primary text-sm font-semibold mb-2">Trades &amp; Services</p>
                                <h3 className="text-lg font-bold mb-3">Tradies: PlumbFix Services</h3>
                                <p className="text-muted text-sm mb-4 leading-relaxed">
                                    Plumbers, electricians, builders, roofers — tradies need websites that are simple, fast, and make it easy for customers to call or request a quote. PlumbFix went from zero web presence to Page 1 on Google for local plumbing searches. The site features service-specific pages, click-to-call on mobile, and a quick-quote form. Read more about{' '}
                                    <Link href="/blog/website-for-tradies-nz" className="text-primary hover:underline">why every NZ tradie needs a website</Link>.
                                </p>
                                <div className="flex gap-4 mb-4">
                                    <div className="text-center">
                                        <p className="text-2xl font-extrabold text-primary">Page 1</p>
                                        <p className="text-xs text-muted">Google ranking</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-extrabold text-primary">3x</p>
                                        <p className="text-xs text-muted">more enquiries</p>
                                    </div>
                                </div>
                                <a href="https://plumbfix-site.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline inline-block">
                                    View Live Site →
                                </a>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <p className="text-primary text-sm font-semibold mb-2">Service Businesses</p>
                                <h3 className="text-lg font-bold mb-3">Cleaning: Everclean Services</h3>
                                <p className="text-muted text-sm mb-4 leading-relaxed">
                                    Cleaning businesses thrive on trust and local visibility. Everclean went from zero online presence to 20+ monthly enquiries with a site built around service-area pages, before/after galleries, and a prominent quote form. Local SEO targets &ldquo;house cleaning [city]&rdquo; searches. Read our guide to{' '}
                                    <Link href="/blog/website-for-cleaning-business-nz" className="text-primary hover:underline">websites for cleaning businesses in NZ</Link>.
                                </p>
                                <div className="flex gap-4 mb-4">
                                    <div className="text-center">
                                        <p className="text-2xl font-extrabold text-primary">20+</p>
                                        <p className="text-xs text-muted">leads/month</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-extrabold text-primary">5 days</p>
                                        <p className="text-xs text-muted">to launch</p>
                                    </div>
                                </div>
                                <a href="https://cleaning-site-001.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline inline-block">
                                    View Live Site →
                                </a>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <p className="text-primary text-sm font-semibold mb-2">E-Commerce</p>
                                <h3 className="text-lg font-bold mb-3">Online Store: Comfy Store</h3>
                                <p className="text-muted text-sm mb-4 leading-relaxed">
                                    Small businesses selling products need more than a Shopify template. Comfy Store runs on a custom <Link href="/ecommerce-websites-nz" className="text-primary hover:underline">e-commerce build</Link> with lightning-fast product pages, smooth checkout, and SEO-optimised categories. The result: 40% faster than their old platform with higher conversion rates.
                                </p>
                                <div className="flex gap-4 mb-4">
                                    <div className="text-center">
                                        <p className="text-2xl font-extrabold text-primary">1.2s</p>
                                        <p className="text-xs text-muted">load time</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-extrabold text-primary">40%</p>
                                        <p className="text-xs text-muted">faster than old site</p>
                                    </div>
                                </div>
                                <a href="https://comfy-store-js.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline inline-block">
                                    View Live Site →
                                </a>
                            </div>
                        </div>

                        <div className="text-center mt-10">
                            <Link href="/#solutions" className="text-primary font-semibold hover:underline">
                                See all our live demo websites →
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    VIDEO SHOWCASE
                ══════════════════════════════════════════════ */}
                {videos[0] && (
                    <section className="py-16 bg-white">
                        <div className="max-w-4xl mx-auto px-4">
                            <h2 className="text-xl md:text-2xl font-bold text-center mb-6">Your Business Deserves a Website That Works</h2>
                            <PixabayVideo video={videos[0]} className="max-w-3xl mx-auto" />
                        </div>
                    </section>
                )}

                {/* ══════════════════════════════════════════════
                    WHY MOST WEBSITES FAIL
                ══════════════════════════════════════════════ */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                            Why Most Small Business Websites Fail (And How to Avoid It)
                        </h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-bold mb-2">1. Design-Only Focus</h3>
                                <p className="text-muted leading-relaxed">
                                    The #1 mistake: hiring someone who makes things look pretty but has zero strategy for generating business. Animations, gradients, and creative layouts are meaningless if the site doesn&apos;t convert. A homepage that&apos;s 80% hero image and 20% vague tagline is a digital brochure, not a sales tool. We start with conversion architecture — what action should the visitor take, and how do we make that action irresistible?
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">2. No SEO Strategy</h3>
                                <p className="text-muted leading-relaxed">
                                    A beautiful website that Google can&apos;t find is a tree falling in an empty forest. Many designers deliver a site with no meta tags, no heading hierarchy, no alt text on images, no structured data, and no thought given to which keywords each page should target. The result: the site is invisible in search. Every page we build targets specific keywords with proper{' '}
                                    <Link href="/blog/seo-for-small-business-nz" className="text-primary hover:underline">on-page SEO</Link> — not as an add-on, but as a core part of the build.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">3. No Ongoing Strategy</h3>
                                <p className="text-muted leading-relaxed">
                                    Many businesses treat a website as a &ldquo;set and forget&rdquo; project. They launch and expect magic. But a website needs content, local SEO attention, and occasional updates to stay relevant. That&apos;s why we don&apos;t just build and vanish — we equip you with the foundations (blog, lead capture, Google Business Profile setup) and the knowledge to{' '}
                                    <Link href="/blog/how-to-get-customers-from-your-website" className="text-primary hover:underline">keep generating customers</Link> from your site long-term.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    YOUR SOLUTION
                ══════════════════════════════════════════════ */}
                <section className="py-20 bg-dark text-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                            Our Approach: Proven Designs, Fast Deployment, Real Results
                        </h2>
                        <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto mb-14">
                            We don&apos;t start from a blank screen. We start from a position of strength.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-14 h-14 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-5">1</div>
                                <h3 className="text-lg font-bold mb-3">Pre-Built Demo Library</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    We&apos;ve built a library of <Link href="/#solutions" className="text-primary hover:underline">live, working demo websites</Link> for the most common NZ small business types. Each one is already conversion-optimised, SEO-structured, and mobile-ready. You pick the one closest to your business and we customise from there.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-14 h-14 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-5">2</div>
                                <h3 className="text-lg font-bold mb-3">Fast, Focused Customisation</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    Because we&apos;re not starting from scratch, we spend our time on what matters: your brand, your content, your keywords, and your lead capture. We bring your branding, photos, and messaging into a proven framework — so the result is both uniquely yours and strategically sound.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-14 h-14 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-5">3</div>
                                <h3 className="text-lg font-bold mb-3">Launch in Days, Not Months</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Starter sites go live in 2–4 days. Growth and Pro sites in 5–7 days. We deploy to Netlify (free, fast hosting), connect your domain, submit to Google, and hand you the keys. No 12-week agency timelines. No endless revision loops. Just results, fast.
                                </p>
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <p className="text-gray-400 text-sm mb-4">
                                Packages start at just $699 NZD — see full details on our{' '}
                                <Link href="/#pricing" className="text-primary hover:underline">pricing page</Link>.
                                Not sure if DIY or professional is right for you? Read our{' '}
                                <Link href="/blog/diy-vs-professional-website" className="text-primary hover:underline">honest comparison</Link>.
                            </p>
                            <a href="#lead-form" className="btn btn-lg">Get a Free Website Audit</a>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    STOCK IMAGE GALLERY
                ══════════════════════════════════════════════ */}
                {images.length > 1 && (
                    <section className="py-16">
                        <div className="max-w-5xl mx-auto px-4">
                            <PixabayImageGrid images={images.slice(1, 4)} columns={3} />
                        </div>
                    </section>
                )}

                {/* ══════════════════════════════════════════════
                    PRICING SNAPSHOT
                ══════════════════════════════════════════════ */}
                <section className="py-20">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                            Small Business Website Pricing in New Zealand
                        </h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-10">
                            Transparent, one-time pricing. No monthly fees, no surprise invoices.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center">
                                <p className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">Starter</p>
                                <p className="text-4xl font-extrabold text-gray-900 mb-1">$699</p>
                                <p className="text-xs text-muted mb-4">one-time</p>
                                <ul className="text-left text-sm text-muted space-y-2">
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span> 1–3 pages</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span> Mobile optimised</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span> Basic SEO</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span> Contact form</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl p-6 border-2 border-primary shadow-lg text-center relative">
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
                                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Growth</p>
                                <p className="text-4xl font-extrabold text-gray-900 mb-1">$1,199</p>
                                <p className="text-xs text-muted mb-4">one-time</p>
                                <ul className="text-left text-sm text-muted space-y-2">
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span> 4–6 pages</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span> Conversion design</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span> Lead capture system</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span> SEO structure</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span> Performance optimised</li>
                                </ul>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center">
                                <p className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">Pro</p>
                                <p className="text-4xl font-extrabold text-gray-900 mb-1">$2,499</p>
                                <p className="text-xs text-muted mb-4">one-time</p>
                                <ul className="text-left text-sm text-muted space-y-2">
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span> Full funnel setup</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span> Advanced SEO</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span> Analytics integration</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span> Custom features</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold mt-0.5">✓</span> 30-day support</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-center text-muted text-sm mt-8">
                            All prices in NZD. Full feature comparison on our <Link href="/#pricing" className="text-primary hover:underline">pricing page</Link>.
                            Wondering how this compares to other options? See our{' '}
                            <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">complete NZ website cost breakdown</Link> or our{' '}
                            <Link href="/blog/best-website-builder-for-small-business-nz" className="text-primary hover:underline">website builder comparison</Link>.
                        </p>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    FAQ
                ══════════════════════════════════════════════ */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-2xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                            Website Design for Small Business — Frequently Asked Questions
                        </h2>
                        <div className="border-t border-gray-200">
                            {faqs.map((faq) => (
                                <details key={faq.q} className="border-b border-gray-200 group">
                                    <summary className="flex items-center justify-between py-5 cursor-pointer font-semibold text-gray-900 list-none">
                                        <span>{faq.q}</span>
                                        <span className="text-primary text-xl transition-transform duration-200 group-open:rotate-45">+</span>
                                    </summary>
                                    <p className="pb-5 text-muted text-sm leading-relaxed pr-8">{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    LEAD CAPTURE CTA
                ══════════════════════════════════════════════ */}
                <section className="py-20 bg-dark text-white" id="lead-form">
                    <div className="max-w-xl mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Get a Free Website Audit for Your Small Business
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Tell us about your business and we&apos;ll send you a personalised audit showing where your website is losing you customers — and exactly how to fix it.
                        </p>

                        <LeadCaptureForm
                            formName="small-biz-lead"
                            ctaText="Get My Free Audit"
                            showWebsite={true}
                            darkMode={true}
                        />
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    INTERNAL LINKS
                ══════════════════════════════════════════════ */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="mb-10">
                            <h3 className="text-lg font-bold mb-4">Our Other Services</h3>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/web-design-christchurch" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">
                                    Web Design Christchurch
                                </Link>
                                <Link href="/affordable-websites-nz" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">
                                    Affordable Websites NZ — From $699
                                </Link>
                                <Link href="/ecommerce-websites-nz" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">
                                    E-Commerce Websites NZ
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Helpful Resources</h3>
                            <ul className="flex flex-col gap-2">
                                <li><Link href="/blog/do-small-businesses-need-a-website" className="text-primary hover:underline text-sm font-medium">Do Small Businesses Need a Website in 2026? →</Link></li>
                                <li><Link href="/blog/best-website-design-for-small-businesses" className="text-primary hover:underline text-sm font-medium">Best Website Design for Small Businesses →</Link></li>
                                <li><Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline text-sm font-medium">How Much Does a Website Cost in NZ? (2026 Guide) →</Link></li>
                                <li><Link href="/blog/diy-vs-professional-website" className="text-primary hover:underline text-sm font-medium">DIY Website vs Professional — Which Is Right? →</Link></li>
                                <li><Link href="/blog/how-to-get-more-leads-from-your-website" className="text-primary hover:underline text-sm font-medium">How to Get More Leads Without More Traffic →</Link></li>
                                <li><Link href="/blog/website-for-tradies-nz" className="text-primary hover:underline text-sm font-medium">Why Every NZ Tradie Needs a Website →</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
