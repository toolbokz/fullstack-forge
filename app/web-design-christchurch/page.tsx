import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import LeadCaptureForm from '../../components/LeadCaptureForm'
import ToolSlider from '../../components/ToolSlider'
import { PixabayVideoGrid, PixabayHeroVideo } from '../../components/PixabayMedia'
import { searchPixabayVideos } from '../../lib/pixabay'
import { fetchUnsplashImage } from '../../lib/unsplash'
import { serviceSchema, faqSchema, breadcrumbSchema, localBusinessSchema, SITE_URL } from '../../lib/schema'

export const metadata: Metadata = {
    title: 'Web Design NZ — Websites That Get You More Jobs | Fullstack Forge',
    description: 'Professional web design across New Zealand that generates leads, calls, and sales for tradies and local businesses. Fast delivery from $699. Local SEO included.',
    alternates: {
        canonical: `${SITE_URL}/web-design-christchurch`,
    },
    openGraph: {
        title: 'Web Design NZ — Websites That Get You More Jobs',
        description: 'Professional web design for NZ tradies and local businesses. Conversion-focused, SEO-optimised, launching in 7 days from $699.',
        url: `${SITE_URL}/web-design-christchurch`,
        type: 'website',
    },
}

const faqs = [
    { q: 'How much does web design cost in New Zealand?', a: 'Professional web design in NZ ranges from $500 for a basic freelancer site to $15,000+ from a large agency. At Fullstack Forge, our packages start at $699 for a professional 3-page site with SEO. Most NZ tradies and local businesses choose our Growth plan at $1,499 for full local SEO and lead capture — delivering agency-quality results without the agency price tag.' },
    { q: 'How long does it take to build a website?', a: 'Most agencies take 6–12 weeks. We deliver in 5–7 business days. We achieve this by using proven, pre-built designs that we customise for your brand — rather than starting from scratch every time. Starter sites can be ready in as little as 5 days.' },
    { q: 'Will my website actually rank on Google in my area?', a: 'Every site we build includes on-page SEO foundations — proper heading structure, meta tags, structured data, fast loading, and mobile optimisation. Our Growth plan includes local SEO targeting for your city and region. We can\'t guarantee #1 (no one honestly can), but we build every site to give you the best possible shot at ranking for local searches.' },
    { q: 'Do I need to provide content and images?', a: 'It helps if you have photos of your work, team, or van — real images outperform stock photos every time. For written content, we\'ll guide you through a simple questionnaire to capture your key messages, and we handle the rest. You review and approve everything before launch.' },
    { q: 'What happens if I need changes after the site launches?', a: 'Our Monthly Growth plan includes ongoing updates and support. All plans include a handoff walkthrough so you understand how to make basic updates. We also offer one-off support for businesses that want changes down the track.' },
    { q: 'I already have a website — can you fix it?', a: 'Absolutely. We\'ll audit your current site first (for free), identify what\'s working and what\'s not, and recommend whether an optimisation or a full rebuild makes more sense. Many NZ tradies come to us after outgrowing their DIY site or being let down by another provider.' },
    { q: 'Do you work with businesses outside Christchurch?', a: 'Yes — we work with tradies and local businesses right across New Zealand. Auckland, Wellington, Hamilton, Tauranga, Dunedin, and everywhere in between. Everything is done remotely, so your location doesn\'t matter. We optimise your site for your specific town or region.' },
    { q: 'Do you offer hosting?', a: 'We deploy all sites to Netlify — a fast, reliable hosting platform used by major companies worldwide. Hosting is free for most sites. Your only ongoing cost is your domain name (roughly $20/year). No hidden monthly fees.' },
]

export default async function WebDesignChristchurch() {
    const helpfulArticles = [
        { url: '/blog/how-much-does-a-website-cost-in-nz', label: 'How Much Does a Website Cost in NZ? (2026 Price Guide)', imageQuery: 'website design pricing' },
        { url: '/blog/seo-for-small-business-nz', label: 'SEO for Small Business NZ — A Beginner\u2019s Guide', imageQuery: 'search engine optimization' },
        { url: '/blog/how-to-get-customers-from-your-website', label: 'How to Get Customers From Your Website', imageQuery: 'digital marketing strategy' },
        { url: '/blog/website-for-tradies-nz', label: 'Why Every Tradie in NZ Needs a Website', imageQuery: 'construction worker tools' },
        { url: '/blog/website-for-cleaning-business-nz', label: 'Website for Cleaning Business NZ', imageQuery: 'professional cleaning service' },
    ]
    const [videos, ...thumbnails] = await Promise.all([
        searchPixabayVideos('modern creative workspace computer screen', 4),
        ...helpfulArticles.map(a => fetchUnsplashImage(a.imageQuery)),
    ])
    const relatedArticles = helpfulArticles.map((a, i) => ({
        url: a.url,
        label: a.label,
        thumbnail: thumbnails[i] ? { url: thumbnails[i].smallUrl, alt: thumbnails[i].alt } : null,
    }))

    const schemas = [
        localBusinessSchema(),
        serviceSchema({
            name: 'Web Design New Zealand',
            description: 'Professional web design services across New Zealand. Conversion-focused websites that generate leads, calls, and jobs for tradies and local businesses.',
            url: `${SITE_URL}/web-design-christchurch`,
        }),
        faqSchema(faqs),
        breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Web Design NZ', url: `${SITE_URL}/web-design-christchurch` },
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
                    HERO — VIDEO BACKGROUND
                ══════════════════════════════════════════════ */}
                <PixabayHeroVideo video={videos[0] || null}>
                    <div className="max-w-4xl mx-auto px-4 text-center text-white py-20 md:py-28">
                        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
                            Web Design for NZ Tradies &amp; Local Businesses
                        </p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Web Design NZ — Websites That Get You More Jobs
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            Most NZ tradies have a website that looks &ldquo;okay&rdquo; but brings in zero leads. We build websites that rank on Google in your area, convert visitors into enquiries, and fill your calendar with real jobs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#lead-form" className="btn btn-lg btn-cta-pulse">
                                Get a Free Website Audit
                            </a>
                            <Link href="/#solutions" className="btn btn-outline-light btn-lg">
                                See What We Do
                            </Link>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm mt-8">
                            <span>✓ 7-Day Delivery</span>
                            <span>✓ Local SEO Included</span>
                            <span>✓ From $699 NZD</span>
                        </div>
                    </div>
                </PixabayHeroVideo>

                {/* ══════════════════════════════════════════════
                    PROBLEM SECTION
                ══════════════════════════════════════════════ */}
                <section className="py-20">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                            Why Most Tradie Websites Fail to Get Results
                        </h2>
                        <p className="text-muted text-lg text-center max-w-2xl mx-auto mb-12">
                            Thousands of NZ tradies have websites that generate almost no leads. Here&apos;s why.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-bold mb-2">They Were Built Without SEO</h3>
                                <p className="text-muted leading-relaxed">
                                    A website without SEO is like a van with no signage parked in a dead-end street. If you&apos;re not showing up when someone searches &ldquo;plumber near me&rdquo; or &ldquo;electrician Auckland,&rdquo; your website is invisible to the people actively looking for what you do. Most web designers focus on making things look pretty — but never touch the meta tags, heading structure, page speed, or structured data that Google actually cares about.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">They Don&apos;t Convert Visitors Into Leads</h3>
                                <p className="text-muted leading-relaxed">
                                    The average small business website converts at 1–2%. That means out of 100 visitors, 98 leave without doing anything. Why? No clear call-to-action, buried contact info, no reason to act now, and no trust signals. A visitor lands on the page, scans for 3 seconds, and bounces. You paid for that traffic — whether through ads, SEO, or word-of-mouth — and got nothing back.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-2">They Load Too Slowly</h3>
                                <p className="text-muted leading-relaxed">
                                    Many NZ tradie sites are built on bloated platforms — WordPress with 30 plugins, Wix with heavy templates, or Squarespace with unoptimised images. Google&apos;s own data shows 53% of mobile users leave if a page takes more than 3 seconds to load. Slow sites lose customers <em>and</em> rank lower on Google. It&apos;s a double penalty.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 text-center">
                            <a href="#lead-form" className="text-primary font-semibold hover:underline">
                                Get a free audit to see where your site is losing you jobs →
                            </a>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    WHAT MAKES A HIGH-PERFORMING WEBSITE
                ══════════════════════════════════════════════ */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                            What Makes a Website That Actually Gets You Jobs
                        </h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            A website that generates work isn&apos;t about fancy design. It&apos;s about three things working together.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                                <div className="text-3xl mb-4">⚡</div>
                                <h3 className="text-lg font-bold mb-3">Speed That Keeps Visitors</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    We build with modern technology and deploy to a global CDN — the same tech used by Nike, TikTok, and Spotify. Your site loads in under 1 second, from Kaitaia to Invercargill. No WordPress bloat, no heavy page builders. Just clean, fast code that Google rewards with higher rankings and visitors reward with longer sessions.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                                <div className="text-3xl mb-4">🔍</div>
                                <h3 className="text-lg font-bold mb-3">Local SEO That Ranks</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    Every page gets a unique meta title and description, proper heading hierarchy, schema markup (so Google understands your business and location), image optimisation, and clean URLs. We don&apos;t just &ldquo;do SEO&rdquo; — we build the technical foundation that makes ranking possible for your specific town or city. Read our full guide on{' '}
                                    <Link href="/blog/seo-for-small-business-nz" className="text-primary hover:underline">SEO for small business in NZ</Link>.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                                <div className="text-3xl mb-4">🎯</div>
                                <h3 className="text-lg font-bold mb-3">Conversion Design That Sells</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    We design every page to guide visitors toward one action: contacting you. Clear headlines, click-to-call buttons, trust signals, testimonials near decision points, and lead capture forms that actually get filled in. Our sites target 5–10% conversion rates, compared to the 1–2% industry average. That&apos;s 3–5x more leads from the same traffic.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    TOOL SLIDER
                ══════════════════════════════════════════════ */}
                <ToolSlider />

                {/* ══════════════════════════════════════════════
                    YOUR PROCESS (3 STEPS)
                ══════════════════════════════════════════════ */}
                <section className="py-20 bg-dark text-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                            How It Works — 3 Simple Steps
                        </h2>
                        <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto mb-14">
                            No 12-week timelines. No endless revisions. Here&apos;s how we get your website live and generating jobs — fast.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-14 h-14 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-5">1</div>
                                <h3 className="text-lg font-bold mb-3">We Audit Your Site</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Run our <a href="#lead-form" className="text-primary hover:underline">free audit</a> and we&apos;ll show you exactly what&apos;s broken — speed, SEO, mobile experience, and lead capture. No guesswork, just data.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-14 h-14 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-5">2</div>
                                <h3 className="text-lg font-bold mb-3">We Build or Fix Your Site</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    We customise a proven design for your brand, optimise for your local area, set up lead capture, and configure local SEO for your town or city. You review and approve before anything goes live.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-14 h-14 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-5">3</div>
                                <h3 className="text-lg font-bold mb-3">You Start Getting Jobs</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    We deploy to ultra-fast hosting (free), connect your domain, and submit to Google. Most sites are live within 7 days. Then we help you set up Google Business Profile so you start showing up in local search and Maps.
                                </p>
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <a href="#lead-form" className="btn btn-lg">Start With a Free Audit</a>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    WE WORK ACROSS NZ
                ══════════════════════════════════════════════ */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                            We Work With Tradies Right Across New Zealand
                        </h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            Based in Christchurch, but everything is done remotely. We build websites for tradies and local businesses in every corner of NZ.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                            {[
                                'Auckland', 'Wellington', 'Christchurch', 'Hamilton',
                                'Tauranga', 'Dunedin', 'Napier / Hastings', 'Palmerston North',
                                'Nelson', 'Rotorua', 'New Plymouth', 'Invercargill',
                                'Whangarei', 'Queenstown', 'Kapiti Coast', 'Whanganui',
                            ].map((city) => (
                                <div key={city} className="bg-gray-50 rounded-lg px-4 py-3 text-center border border-gray-100">
                                    <span className="text-sm font-medium text-gray-700">{city}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-muted text-sm text-center mt-8">
                            Don&apos;t see your town? No worries — we work with businesses anywhere in New Zealand. We optimise your site for your specific location.
                        </p>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    REAL EXAMPLES
                ══════════════════════════════════════════════ */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                            Real Web Design Examples for NZ Businesses
                        </h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            These aren&apos;t mockups. They&apos;re live sites built for real businesses. Click through and see exactly what you&apos;d get.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-primary text-sm font-semibold mb-2">Cleaning Business</p>
                                <h3 className="text-lg font-bold mb-3">Cleaning Services Site</h3>
                                <p className="text-muted text-sm mb-4 leading-relaxed">
                                    A residential and commercial cleaning business that went from zero online presence to 20+ monthly enquiries. The site features service area pages, a quote request form, and before/after galleries. Local SEO drives traffic from &ldquo;house cleaning [city]&rdquo; searches.
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

                            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-primary text-sm font-semibold mb-2">Plumbing &amp; Trades</p>
                                <h3 className="text-lg font-bold mb-3">PlumbFix Services</h3>
                                <p className="text-muted text-sm mb-4 leading-relaxed">
                                    A plumber who was relying entirely on word-of-mouth. Their new site captures local search traffic with service pages for each speciality — hot water, drainage, bathroom renovations. Click-to-call on mobile means customers can reach them in one tap.
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

                            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                                <p className="text-primary text-sm font-semibold mb-2">Builders &amp; Contractors</p>
                                <h3 className="text-lg font-bold mb-3">Builder Business Site</h3>
                                <p className="text-muted text-sm mb-4 leading-relaxed">
                                    A construction business that needed more than a basic template. We built a site with project galleries, quote request forms, and SEO-optimised service pages. The result: a consistent flow of quote requests from people who found them on Google.
                                </p>
                                <div className="flex gap-4 mb-4">
                                    <div className="text-center">
                                        <p className="text-2xl font-extrabold text-primary">1.2s</p>
                                        <p className="text-xs text-muted">load time</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-extrabold text-primary">40%</p>
                                        <p className="text-xs text-muted">more quote requests</p>
                                    </div>
                                </div>
                                <a href="https://builders-app.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline inline-block">
                                    View Live Site →
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    VIDEO SHOWCASE GRID
                ══════════════════════════════════════════════ */}
                {videos.length > 1 && (
                    <section className="py-16">
                        <div className="max-w-5xl mx-auto px-4">
                            <h2 className="text-xl md:text-2xl font-bold text-center mb-8">Built With Modern Technology</h2>
                            <PixabayVideoGrid videos={videos.slice(1, 4)} columns={3} />
                        </div>
                    </section>
                )}

                {/* ══════════════════════════════════════════════
                    LOCAL SEO SECTION
                ══════════════════════════════════════════════ */}
                <section className="py-20">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                            Why Local SEO Is the #1 Way to Get More Jobs
                        </h2>
                        <div className="space-y-6 text-muted leading-relaxed">
                            <p>
                                When a homeowner searches <strong>&ldquo;electrician near me&rdquo;</strong> or a property manager looks for <strong>&ldquo;commercial cleaning Auckland,&rdquo;</strong> Google serves results based on three factors: <strong>relevance</strong> (does your site match the search?), <strong>distance</strong> (are you actually in that area?), and <strong>prominence</strong> (does Google trust your site?).
                            </p>
                            <p>
                                Most NZ tradies fail on all three. Their site doesn&apos;t mention their city or region in the right places (meta titles, headings, content), they haven&apos;t claimed or optimised their Google Business Profile, and they have no reviews, backlinks, or structured data to signal authority.
                            </p>
                            <p>
                                We address every factor. Each site we build includes <strong>LocalBusiness schema markup</strong> that tells Google exactly where your business operates, what you offer, and when you&apos;re available. We optimise page titles and content for your target local searches — whether that&apos;s Auckland, Wellington, Christchurch, or a smaller town. And we help you set up Google Business Profile so you appear in the local map pack — the 3-pack of results that gets <strong>42% of all local search clicks</strong>.
                            </p>
                            <p>
                                Local SEO is the highest-ROI marketing channel for NZ tradies and local businesses. The people searching are <em>already looking</em> for what you do. You just need a website that helps Google connect them with you. Read our full guide on{' '}
                                <Link href="/blog/seo-for-small-business-nz" className="text-primary hover:underline">SEO for small business in NZ</Link> for more detail.
                            </p>
                        </div>
                        <div className="mt-8 text-center">
                            <a href="#lead-form" className="text-primary font-semibold hover:underline">
                                Find out how your site performs in local search →
                            </a>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    PRICING OVERVIEW
                ══════════════════════════════════════════════ */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                            Web Design Pricing for NZ Tradies
                        </h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-10">
                            Transparent pricing with no hidden fees. Here&apos;s how we compare to typical NZ web design costs.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="border-b-2 border-gray-200">
                                        <th className="text-left py-3 pr-4 font-bold text-gray-900">Provider</th>
                                        <th className="text-left py-3 pr-4 font-bold text-gray-900">Typical Cost</th>
                                        <th className="text-left py-3 pr-4 font-bold text-gray-900">Timeline</th>
                                        <th className="text-left py-3 font-bold text-gray-900">Ongoing Fees</th>
                                    </tr>
                                </thead>
                                <tbody className="text-muted">
                                    <tr className="border-b border-gray-100">
                                        <td className="py-3 pr-4">Large NZ Agency</td>
                                        <td className="py-3 pr-4">$8,000–$25,000</td>
                                        <td className="py-3 pr-4">8–16 weeks</td>
                                        <td className="py-3">$50–$200/month</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-3 pr-4">Freelancer</td>
                                        <td className="py-3 pr-4">$1,500–$5,000</td>
                                        <td className="py-3 pr-4">4–8 weeks</td>
                                        <td className="py-3">Varies</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-3 pr-4">DIY (Wix/Squarespace)</td>
                                        <td className="py-3 pr-4">$0–$500 + your time</td>
                                        <td className="py-3 pr-4">Weeks of struggling</td>
                                        <td className="py-3">$20–$50/month</td>
                                    </tr>
                                    <tr className="bg-blue-50/50 font-medium text-gray-900">
                                        <td className="py-3 pr-4 font-bold">Fullstack Forge</td>
                                        <td className="py-3 pr-4 font-bold text-primary">$699–$1,499</td>
                                        <td className="py-3 pr-4 font-bold text-primary">5–7 days</td>
                                        <td className="py-3 font-bold text-primary">$0/month</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-muted text-sm mt-6 text-center">
                            All prices in NZD. See our full <Link href="/pricing" className="text-primary hover:underline">pricing page</Link> for detailed feature breakdowns,
                            or check our guide on <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">how much a website costs in NZ</Link>.
                        </p>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    FAQ
                ══════════════════════════════════════════════ */}
                <section className="py-20">
                    <div className="max-w-2xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                            Web Design NZ — Frequently Asked Questions
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
                            Get More Jobs From Your Website
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Tell us about your business and we&apos;ll send you a free, personalised audit showing exactly what&apos;s holding your website back — and how to fix it.
                        </p>

                        <LeadCaptureForm
                            formName="web-design-nz-lead"
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
                                <Link href="/website-design-for-small-business" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">
                                    Website Design for Small Business NZ
                                </Link>
                                <Link href="/affordable-websites-nz" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">
                                    Affordable Websites NZ
                                </Link>
                                <Link href="/ecommerce-websites-nz" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary hover:text-primary transition-colors">
                                    E-Commerce Websites NZ
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Helpful Resources</h3>
                            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                                {relatedArticles.map((a) => (
                                    <Link
                                        key={a.url}
                                        href={a.url}
                                        className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
                                    >
                                        <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#0d1f3c] to-[#0b5fff] relative">
                                            {a.thumbnail?.url ? (
                                                <img
                                                    src={a.thumbnail.url}
                                                    alt={a.thumbnail.alt || a.label}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <svg className="w-10 h-10 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <p className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                                {a.label}
                                            </p>
                                            <span className="text-xs text-primary font-medium mt-2 inline-block">
                                                Read article →
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
