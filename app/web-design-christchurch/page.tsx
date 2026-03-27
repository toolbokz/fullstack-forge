import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import LeadCaptureForm from '../../components/LeadCaptureForm'
import { serviceSchema, faqSchema, breadcrumbSchema, localBusinessSchema, SITE_URL } from '../../lib/schema'

export const metadata: Metadata = {
    title: 'Web Design Christchurch — Websites That Generate Customers | Fullstack Forge',
    description: 'Professional web design in Christchurch that generates leads, calls, and sales. Fast delivery from $699. Local SEO included. See real results from Christchurch businesses.',
    alternates: {
        canonical: `${SITE_URL}/web-design-christchurch`,
    },
    openGraph: {
        title: 'Web Design Christchurch — Websites That Generate Customers',
        description: 'Professional web design in Christchurch. Conversion-focused, SEO-optimised, launching in 7 days from $699.',
        url: `${SITE_URL}/web-design-christchurch`,
        type: 'website',
    },
}

const faqs = [
    { q: 'How much does web design cost in Christchurch?', a: 'Professional web design in Christchurch ranges from $500 for a basic freelancer site to $15,000+ from a large agency. At Fullstack Forge, our packages start at $699 for a professional 3-page site with SEO. Most Christchurch businesses choose our Growth plan at $1,199 for lead capture and conversion optimization — delivering agency-quality results without the agency price tag.' },
    { q: 'How long does it take to build a website in Christchurch?', a: 'Most agencies take 6–12 weeks. We deliver in 5–7 business days. We achieve this by using proven, pre-built designs that we customise for your brand — rather than starting from scratch every time. Starter sites can be ready in as little as 2–4 days.' },
    { q: 'Will my website actually rank on Google in Christchurch?', a: 'Every site we build includes on-page SEO foundations — proper heading structure, meta tags, structured data, fast loading, and mobile optimization. Our Growth and Pro plans include local SEO targeting for Christchurch searches. We can\'t guarantee #1 (no one honestly can), but we build every site to give you the best possible shot at ranking.' },
    { q: 'Do I need to provide content and images for my website?', a: 'It helps if you have photos of your work, team, or premises — real images outperform stock photos every time. For written content, we\'ll guide you through a simple questionnaire to capture your key messages, and we handle the rest. You review and approve everything before launch.' },
    { q: 'What happens if I need changes after the site launches?', a: 'Our Pro plan includes 30 days of post-launch support. All plans include a handoff walkthrough so you understand how to make basic updates. We also offer ongoing support packages for businesses that want hands-off management.' },
    { q: 'I already have a website — can you redesign it?', a: 'Absolutely. We\'ll audit your current site first, identify what\'s working and what\'s not, and recommend whether a redesign or a full rebuild makes more sense. Many Christchurch businesses come to us after outgrowing their DIY site or being let down by another provider.' },
    { q: 'Do you offer hosting?', a: 'We deploy all sites to Netlify — a fast, reliable hosting platform used by major companies worldwide. Hosting is free for most sites. Your only ongoing cost is your domain name (roughly $20/year). No hidden monthly fees.' },
]

export default function WebDesignChristchurch() {
    const schemas = [
        localBusinessSchema(),
        serviceSchema({
            name: 'Web Design Christchurch',
            description: 'Professional web design services in Christchurch, New Zealand. Conversion-focused websites that generate leads, calls, and sales for local businesses.',
            url: `${SITE_URL}/web-design-christchurch`,
        }),
        faqSchema(faqs),
        breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Web Design Christchurch', url: `${SITE_URL}/web-design-christchurch` },
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
                            Web Design Christchurch
                        </p>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Web Design Christchurch — Websites That Generate Customers
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            Most Christchurch businesses have a website that looks &ldquo;okay&rdquo; but brings in zero leads. We build websites that rank on Google, convert visitors, and fill your pipeline with real customers.
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
                            <span>✓ 7-Day Delivery</span>
                            <span>✓ Local SEO Included</span>
                            <span>✓ From $699 NZD</span>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    PROBLEM SECTION
                ══════════════════════════════════════════════ */}
                <section className="py-20">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                            Why Most Christchurch Websites Fail to Get Results
                        </h2>
                        <p className="text-muted text-lg text-center max-w-2xl mx-auto mb-12">
                            Christchurch has hundreds of businesses with decent-looking websites that generate almost no leads. Here&apos;s why.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-bold mb-2">They Were Built Without SEO</h3>
                                <p className="text-muted leading-relaxed">
                                    A website without SEO is like a shop with no signage on a back street. If you&apos;re not showing up when someone searches &ldquo;plumber Christchurch&rdquo; or &ldquo;cleaning service near me,&rdquo; your website is invisible to the people actively looking for what you offer. Most Christchurch web designers focus on making things look pretty — but never touch the meta tags, heading structure, page speed, or structured data that Google actually cares about.
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
                                    Many Christchurch sites are built on bloated platforms — WordPress with 30 plugins, Wix with heavy templates, or Squarespace with unoptimised images. Google&apos;s own data shows 53% of mobile users leave if a page takes more than 3 seconds to load. Slow sites lose customers <em>and</em> rank lower on Google. It&apos;s a double penalty.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 text-center">
                            <a href="#lead-form" className="text-primary font-semibold hover:underline">
                                Get a free audit to see where your site is losing you customers →
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
                            What Makes a High-Performing Website in Christchurch
                        </h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            A website that generates customers isn&apos;t about fancy design. It&apos;s about three things working together.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                                <div className="text-3xl mb-4">⚡</div>
                                <h3 className="text-lg font-bold mb-3">Speed That Keeps Visitors</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    We build with Next.js and deploy to Netlify&apos;s global CDN — the same technology stack used by Nike, TikTok, and Spotify. Your site loads in under 1 second, anywhere in New Zealand. No WordPress bloat, no heavy page builders. Just clean, fast code that Google rewards with higher rankings and visitors reward with longer sessions.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                                <div className="text-3xl mb-4">🔍</div>
                                <h3 className="text-lg font-bold mb-3">SEO Structure That Ranks</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    Every page gets a unique meta title and description, proper H1/H2/H3 heading hierarchy, schema markup (so Google understands your business), image optimisation, and a clean URL structure. We don&apos;t just &ldquo;do SEO&rdquo; — we build the technical foundation that makes ranking possible. Combined with{' '}
                                    <Link href="/blog/seo-for-small-business-nz" className="text-primary hover:underline">local SEO best practices</Link>, your Christchurch business gets found for the searches that matter.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                                <div className="text-3xl mb-4">🎯</div>
                                <h3 className="text-lg font-bold mb-3">Conversion Design That Sells</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    We design every page to guide visitors toward one action: contacting you. Clear headlines, strategic CTA placement, trust badges, testimonials near decision points, and lead capture forms that actually get filled in. Our sites target 5–10% conversion rates, compared to the 1–2% industry average. That&apos;s 3–5x more leads from the same traffic.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    YOUR PROCESS (3 STEPS)
                ══════════════════════════════════════════════ */}
                <section className="py-20 bg-dark text-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                            How It Works — 3 Simple Steps
                        </h2>
                        <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto mb-14">
                            No 12-week timelines. No endless revisions. Here&apos;s how we get your Christchurch website live and generating leads — fast.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-14 h-14 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-5">1</div>
                                <h3 className="text-lg font-bold mb-3">Choose a Proven Design</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Browse our <Link href="/#solutions" className="text-primary hover:underline">live demo portfolio</Link> and pick a design that fits your industry. Each demo is a working website built for a specific business type — cleaning, trades, e-commerce, professional services, and more.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-14 h-14 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-5">2</div>
                                <h3 className="text-lg font-bold mb-3">We Customise for Your Business</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    We swap in your branding, content, images, and contact details. We optimise copy for your target keywords, set up lead capture, and configure local SEO for Christchurch. You review and approve before anything goes live.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-14 h-14 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-5">3</div>
                                <h3 className="text-lg font-bold mb-3">Launch and Start Getting Leads</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    We deploy your site to ultra-fast hosting (free), connect your domain, and submit to Google. Most sites are live within 7 days. Then we help you connect Google Business Profile so you start appearing in local search and Maps results.
                                </p>
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <a href="#lead-form" className="btn btn-lg">Start With a Free Audit</a>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    REAL EXAMPLES
                ══════════════════════════════════════════════ */}
                <section className="py-20">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                            Real Christchurch Web Design Examples
                        </h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-12">
                            These aren&apos;t mockups. They&apos;re live sites built for real businesses. Click through and see exactly what you&apos;d get.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <p className="text-primary text-sm font-semibold mb-2">Cleaning Business · Christchurch</p>
                                <h3 className="text-lg font-bold mb-3">Everclean Services</h3>
                                <p className="text-muted text-sm mb-4 leading-relaxed">
                                    A residential and commercial cleaning business that went from zero online presence to 20+ monthly enquiries. The site features service area pages, a quote request form, and before/after galleries that build trust instantly. Local SEO drives traffic from &ldquo;house cleaning Christchurch&rdquo; and similar searches.
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
                                <p className="text-primary text-sm font-semibold mb-2">Plumbing · Canterbury</p>
                                <h3 className="text-lg font-bold mb-3">PlumbFix Services</h3>
                                <p className="text-muted text-sm mb-4 leading-relaxed">
                                    A Canterbury plumber who was relying entirely on word-of-mouth. Their new site captures local search traffic with service pages for each speciality — hot water, drainage, bathroom renovations. Click-to-call on mobile means customers can reach them in one tap.
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
                                <p className="text-primary text-sm font-semibold mb-2">E-Commerce · NZ</p>
                                <h3 className="text-lg font-bold mb-3">Comfy Store</h3>
                                <p className="text-muted text-sm mb-4 leading-relaxed">
                                    An online furniture store that needed more than a Shopify template. We built a custom <Link href="/ecommerce-websites-nz" className="text-primary hover:underline">e-commerce experience</Link> with fast product pages, smooth checkout, and SEO-optimised category pages. The result: faster load times and higher conversion rates than their previous platform.
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
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    LOCAL SEO SECTION
                ══════════════════════════════════════════════ */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                            Ranking in Christchurch — Why Local SEO Matters
                        </h2>
                        <div className="space-y-6 text-muted leading-relaxed">
                            <p>
                                When a Christchurch homeowner searches <strong>&ldquo;electrician near me&rdquo;</strong> or a property manager looks for <strong>&ldquo;commercial cleaning Christchurch,&rdquo;</strong> Google serves results based on three factors: <strong>relevance</strong> (does your site match the search?), <strong>distance</strong> (are you actually in Christchurch?), and <strong>prominence</strong> (does Google trust your site?).
                            </p>
                            <p>
                                Most Christchurch businesses fail on all three. Their site doesn&apos;t mention Christchurch in the right places (meta titles, headings, content), they haven&apos;t claimed or optimised their Google Business Profile, and they have no reviews, backlinks, or structured data to signal authority.
                            </p>
                            <p>
                                We address every factor. Each site we build includes <strong>LocalBusiness schema markup</strong> that tells Google exactly where your business is located, what you offer, and when you&apos;re open. We optimise page titles and content for your target Christchurch searches. And we help you set up Google Business Profile so you appear in the local map pack — the 3-pack of results that gets <strong>42% of all local search clicks</strong>.
                            </p>
                            <p>
                                Local SEO is the highest-ROI marketing channel for Christchurch businesses. The people searching are <em>already looking</em> for what you sell. You just need a website that helps Google connect them with you. Read our full guide on{' '}
                                <Link href="/blog/seo-for-small-business-nz" className="text-primary hover:underline">SEO for small business in NZ</Link> for more detail.
                            </p>
                        </div>
                        <div className="mt-8 text-center">
                            <a href="#lead-form" className="text-primary font-semibold hover:underline">
                                Find out how your site performs in Christchurch local search →
                            </a>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    PRICING OVERVIEW
                ══════════════════════════════════════════════ */}
                <section className="py-20">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                            Web Design Pricing in Christchurch
                        </h2>
                        <p className="text-muted text-center text-lg max-w-2xl mx-auto mb-10">
                            Transparent pricing with no hidden fees. Here&apos;s how we compare to typical Christchurch web design costs.
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
                                        <td className="py-3 pr-4">Large Christchurch Agency</td>
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
                                        <td className="py-3 pr-4 font-bold text-primary">$699–$2,499</td>
                                        <td className="py-3 pr-4 font-bold text-primary">5–7 days</td>
                                        <td className="py-3 font-bold text-primary">$0/month</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-muted text-sm mt-6 text-center">
                            All prices in NZD. See our full <Link href="/#pricing" className="text-primary hover:underline">pricing page</Link> for detailed feature breakdowns,
                            or check our guide on <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">how much a website costs in NZ</Link>.
                        </p>
                    </div>
                </section>

                {/* ══════════════════════════════════════════════
                    FAQ
                ══════════════════════════════════════════════ */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-2xl mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                            Web Design Christchurch — Frequently Asked Questions
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
                            Get More Customers From Your Website
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Tell us about your Christchurch business and we&apos;ll send you a free, personalised audit showing exactly what&apos;s holding your website back — and how to fix it.
                        </p>

                        <LeadCaptureForm
                            formName="web-design-chch-lead"
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
                            <ul className="flex flex-col gap-2">
                                <li><Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline text-sm font-medium">How Much Does a Website Cost in NZ? (2026 Price Guide) →</Link></li>
                                <li><Link href="/blog/seo-for-small-business-nz" className="text-primary hover:underline text-sm font-medium">SEO for Small Business NZ — A Beginner&apos;s Guide →</Link></li>
                                <li><Link href="/blog/how-to-get-customers-from-your-website" className="text-primary hover:underline text-sm font-medium">How to Get Customers From Your Website →</Link></li>
                                <li><Link href="/blog/website-for-tradies-nz" className="text-primary hover:underline text-sm font-medium">Why Every Tradie in NZ Needs a Website →</Link></li>
                                <li><Link href="/blog/website-for-cleaning-business-nz" className="text-primary hover:underline text-sm font-medium">Website for Cleaning Business NZ →</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
