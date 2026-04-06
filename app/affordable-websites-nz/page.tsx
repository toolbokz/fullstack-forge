import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import LeadCaptureForm from '../../components/LeadCaptureForm'
import ToolSlider from '../../components/ToolSlider'
import { fetchUnsplashImage } from '../../lib/unsplash'
import UnsplashAttribution from '../../components/UnsplashAttribution'
import { serviceSchema, faqSchema, breadcrumbSchema, localBusinessSchema, SITE_URL } from '../../lib/schema'

export const metadata: Metadata = {
    title: 'Affordable Websites NZ — Professional Sites for Small Businesses | Fullstack Forge',
    description: 'Affordable websites NZ — professional, SEO-ready, mobile-optimized websites built for New Zealand small businesses and tradies. No inflated agency pricing. Real results.',
    alternates: {
        canonical: `${SITE_URL}/affordable-websites-nz`,
    },
    keywords: ['affordable websites nz', 'affordable web design nz', 'cheap websites nz', 'affordable websites for small business nz', 'budget-friendly web design nz', 'seo-ready affordable websites nz', 'affordable websites for tradies nz'],
    openGraph: {
        title: 'Affordable Websites NZ — Professional Sites for NZ Small Businesses',
        description: 'Professional, SEO-ready websites built for NZ small businesses and tradies without the inflated agency price tag.',
        url: `${SITE_URL}/affordable-websites-nz`,
        type: 'website',
        images: [{ url: '/assets/fallback-image.png', width: 2560, height: 1440, alt: 'Affordable Websites NZ — Fullstack Forge' }],
    },
    twitter: {
        card: 'summary_large_image' as const,
        title: 'Affordable Websites NZ — Professional Sites Without the Premium Price',
        description: 'Affordable, high-quality websites for NZ small businesses. SEO-ready, mobile-first, built to convert.',
        images: ['/assets/fallback-image.png'],
    },
}

const faqs = [
    { q: 'What does "affordable" actually mean?', a: 'Affordable does not mean the cheapest possible website. It means sensible pricing for a website that still performs. You get modern design, SEO foundations, mobile responsiveness, and a conversion-focused layout — without the inflated overhead of a large agency.' },
    { q: 'How does the $500 deposit work?', a: 'You pay a $500 NZD deposit to secure your build slot. We then scope your project and provide a fixed total price before any further work begins. The deposit is applied toward your total — so there are no surprises.' },
    { q: 'What does a full website build typically cost?', a: 'Most small business websites fall in the $1,000–$2,000 range depending on the number of pages and features. You\'ll know the exact total before committing beyond the deposit. For comparison, NZ agencies charge $5,000–$20,000 for comparable work.' },
    { q: 'Is an affordable website actually any good?', a: 'Yes. We use battle-tested designs customised for your brand. You get the same modern tech stack (Next.js, Tailwind, Netlify CDN) and conversion-focused approach as a $10K agency build — without the agency overhead. Affordable done right delivers real business value.' },
    { q: 'Are there any ongoing costs?', a: 'Hosting is free on Netlify for most sites. Domain registration (about $20/year) is the only recurring cost. No monthly fees, no maintenance contracts, no hidden charges.' },
    { q: 'How is this so much cheaper than agencies?', a: 'No bloated teams, no CBD office rent, no project managers managing project managers. We use efficient systems and proven designs to deliver faster and cheaper — without cutting corners on quality.' },
    { q: 'Can I add SEO or optimisation later?', a: 'Absolutely. Start with a website build and add SEO setup (from $300), monthly SEO (from $150/mo), or website optimisation (from $400) as your business grows. Everything is modular.' },
    { q: 'What if I already have a website?', a: 'We\'ll audit your current site for free and recommend whether an optimisation (from $400) or a fresh build makes more sense. Many clients come to us after outgrowing a DIY site or being let down by another provider.' },
    { q: 'How long does it take?', a: 'Most sites are live within 7–14 days. Simple sites can be ready in under a week. We move fast because we start from proven, pre-built designs rather than a blank canvas.' },
    { q: 'Do you build websites for tradies?', a: 'Tradies are one of our most common clients. Plumbers, electricians, builders, roofers, landscapers, painters — we build professional, SEO-ready websites that help tradies get found online and generate real enquiries.' },
]

const features = [
    { icon: '💰', title: 'Sensible Pricing, Real Quality', desc: 'Agency-quality websites at a fraction of the cost. No inflated pricing, no hidden fees — just honest value for NZ small businesses.' },
    { icon: '📱', title: 'Mobile-First Design', desc: 'Over 60% of NZ web traffic is mobile. Every site we build is mobile-first, fast, and tested across all devices and screen sizes.' },
    { icon: '🔍', title: 'SEO Built In From Day One', desc: 'On-page SEO, metadata, structured data, and fast load speeds come standard. Your site is built to get found on Google.' },
    { icon: '🎯', title: 'Designed to Convert', desc: 'Every page is structured to turn visitors into enquiries. Clear CTAs, lead-capture forms, and trust signals — not just a brochure.' },
    { icon: '⚡', title: 'Live in 7–14 Days', desc: 'No endless timelines. Your professional website launches in days, not weeks or months. We move fast from proven foundations.' },
    { icon: '🤝', title: 'You Own Everything', desc: 'Your code, your content, your domain. No vendor lock-in, no ongoing commitments. Complete ownership from day one.' },
]

const commonProblems = [
    { icon: '❌', label: 'Outdated or generic template design' },
    { icon: '❌', label: 'Poor mobile performance and layout' },
    { icon: '❌', label: 'Weak or non-existent SEO foundations' },
    { icon: '❌', label: 'Unclear messaging and weak copy' },
    { icon: '❌', label: 'Slow load times that drive visitors away' },
    { icon: '❌', label: 'No lead generation or clear CTAs' },
    { icon: '❌', label: 'Limited flexibility and locked-in platforms' },
    { icon: '❌', label: 'Little strategic structure behind the layout' },
]

export default async function AffordableWebsitesNZPage() {
    const helpfulArticles = [
        { url: '/blog/how-much-does-a-website-cost-in-nz', label: 'How Much Does a Website Cost in NZ? (2026 Price Guide)', imageQuery: 'website design pricing' },
        { url: '/blog/diy-vs-professional-website', label: 'DIY vs Professional Website — Which Is Right?', imageQuery: 'web developer coding laptop' },
        { url: '/blog/best-website-builder-for-small-business-nz', label: 'Best Website Builder for Small Business NZ', imageQuery: 'website builder platform' },
        { url: '/blog/how-to-get-customers-from-your-website', label: 'How to Get Customers From Your Website', imageQuery: 'digital marketing strategy' },
        { url: '/blog/seo-for-small-business-nz', label: 'SEO for Small Business NZ — A Beginner\'s Guide', imageQuery: 'search engine optimization' },
    ]

    const [heroImg, valueImg, seoImg, tradieImg, ...thumbnails] = await Promise.all([
        fetchUnsplashImage('professional website design laptop modern workspace'),
        fetchUnsplashImage('small business owner happy success'),
        fetchUnsplashImage('SEO analytics dashboard search rankings'),
        fetchUnsplashImage('tradesman builder construction professional'),
        ...helpfulArticles.map(a => fetchUnsplashImage(a.imageQuery)),
    ])

    const relatedArticles = helpfulArticles.map((a, i) => ({
        url: a.url,
        label: a.label,
        thumbnail: thumbnails[i] ? { url: thumbnails[i]!.smallUrl, alt: thumbnails[i]!.alt } : null,
    }))

    const schemas = [
        localBusinessSchema(),
        serviceSchema({
            name: 'Affordable Website Design NZ',
            description: 'Affordable, professional website design in New Zealand. SEO-ready, mobile-optimised websites for small businesses and tradies without the premium agency price tag.',
            url: `${SITE_URL}/affordable-websites-nz`,
        }),
        faqSchema(faqs),
        breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Affordable Websites NZ', url: `${SITE_URL}/affordable-websites-nz` },
        ]),
    ]

    return (
        <>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <Nav />
            <main>

                {/* ═══════════════════════════════════════════════════
                    1. HERO — SPLIT LAYOUT
                ═══════════════════════════════════════════════════ */}
                <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0b1220 0%, #0d1f3c 50%, #0b2e6e 100%)' }}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,95,255,0.15)_0%,transparent_60%)]" />
                    <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                            {/* Left — Copy */}
                            <div className="flex-1 text-center lg:text-left">
                                <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
                                    Affordable Websites for NZ Businesses
                                </p>
                                <h1 className="text-3xl md:text-5xl lg:text-[3.4rem] font-bold text-white mb-6 leading-tight">
                                    Affordable Websites NZ That Help Small Businesses Grow
                                </h1>
                                <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
                                    Modern, professional, SEO-ready websites built for New Zealand small businesses and tradies — without the inflated agency price tag. Real quality at a sensible price.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <a href="#lead-form" className="btn btn-lg btn-cta-pulse">
                                        Get a Free Consultation
                                    </a>
                                    <Link href="/pricing" className="btn btn-outline-light btn-lg">
                                        View Pricing
                                    </Link>
                                </div>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-white/60 text-sm mt-8">
                                    <span>✓ SEO Included</span>
                                    <span>✓ Mobile-First</span>
                                    <span>✓ Live in 7–14 Days</span>
                                    <span>✓ $0/mo Hosting</span>
                                </div>
                            </div>
                            {/* Right — Hero Image */}
                            <div className="flex-1 w-full max-w-lg lg:max-w-none">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                    {heroImg ? (
                                        <>
                                            <Image
                                                src={heroImg.url}
                                                alt={heroImg.alt || 'Affordable website design on laptop'}
                                                width={700}
                                                height={470}
                                                className="w-full h-auto object-cover"
                                                priority
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                            />
                                            {heroImg.photographer && (
                                                <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm rounded px-2 py-0.5 text-white">
                                                    <UnsplashAttribution photographer={heroImg.photographer} profileUrl={heroImg.profileUrl} />
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <div className="aspect-[3/2] bg-gradient-to-br from-blue-600/30 to-blue-900/30 flex items-center justify-center">
                                            <span className="text-6xl">💻</span>
                                        </div>
                                    )}
                                    {/* Floating stat cards */}
                                    <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden md:block">
                                        <p className="text-2xl font-extrabold text-emerald-600">3x</p>
                                        <p className="text-xs text-gray-500 font-medium">More Enquiries</p>
                                    </div>
                                    <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 hidden md:block">
                                        <p className="text-2xl font-extrabold text-blue-600">&lt;2s</p>
                                        <p className="text-xs text-gray-500 font-medium">Load Time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    2. TRUST BAR — QUICK VALUE PROPS
                ═══════════════════════════════════════════════════ */}
                <section className="py-10 bg-gray-50 border-b border-gray-100">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {[
                                { stat: '7–14 Days', label: 'Website launch' },
                                { stat: '$500', label: 'Deposit to start' },
                                { stat: '<2s', label: 'Page load speed' },
                                { stat: '$0/mo', label: 'Hosting fees' },
                            ].map((item) => (
                                <div key={item.label}>
                                    <p className="text-2xl md:text-3xl font-extrabold text-blue-600">{item.stat}</p>
                                    <p className="text-sm text-gray-500 font-medium mt-1">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    3. WHY AFFORDABLE WEBSITES MATTER IN NZ
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                            {/* Left — Image */}
                            <div className="flex-1 w-full">
                                {valueImg ? (
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                        <Image
                                            src={valueImg.url}
                                            alt={valueImg.alt || 'Small business owner with professional website'}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto object-cover"
                                            loading="lazy"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                        {valueImg.photographer && (
                                            <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm rounded px-2 py-0.5 text-white">
                                                <UnsplashAttribution photographer={valueImg.photographer} profileUrl={valueImg.profileUrl} />
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="aspect-[3/2] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl" />
                                )}
                            </div>
                            {/* Right — Content */}
                            <div className="flex-1">
                                <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Why It Matters</p>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                    Why Small Businesses in NZ Need Affordable Website Solutions
                                </h2>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        Many business owners in New Zealand know they need a better website, but delay getting one because of cost. They worry that a professional site will be too expensive, too complicated, or too difficult to maintain. As a result, they stay with no website at all, rely on a Facebook page, or keep using an <strong>outdated site that no longer reflects the quality of their business</strong>.
                                    </p>
                                    <p>
                                        That creates a serious problem. When customers search online, they expect to find a proper website. They want to see your services, reviews, business information, contact details, and proof that your business is real and credible. If you do not have that, or if your site looks outdated and weak, <strong>people often move on quickly</strong>.
                                    </p>
                                    <p>
                                        An affordable website solves that problem. It gives your business a professional presence without requiring a massive upfront budget — a place to showcase your services, explain what makes you different, and capture leads from people who are already looking for what you offer.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <a href="#lead-form" className="text-blue-600 font-semibold hover:underline">
                                        Discuss your project — free consultation →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    4. WHAT MAKES A HIGH-VALUE AFFORDABLE WEBSITE — 6 FEATURES
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">What You Get</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                What Makes an Affordable Website High Value
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                A high-value affordable website is not about stuffing in every possible feature. It is about focusing on the features that matter most for a small business — trust, speed, SEO, and conversions.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((item) => (
                                <div key={item.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                                    <div className="text-3xl mb-4">{item.icon}</div>
                                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    5. AFFORDABLE WEBSITES FOR TRADIES & SMALL BUSINESSES
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                            {/* Left — Content */}
                            <div className="flex-1">
                                <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Built for NZ Tradies &amp; Small Businesses</p>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                    Affordable Websites for Tradies and Small Businesses in New Zealand
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Tradies are one of the best examples of where affordable websites make a real difference. Many plumbers, electricians, builders, roofers, landscapers, painters, and other tradies still rely heavily on referrals or social media. But when someone hears about your business, they often <strong>look you up online before contacting you</strong>.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    If your site is missing, outdated, or unconvincing, that referral loses strength. People want confirmation that your business is legitimate, professional, and worth contacting. A solid website gives them that reassurance.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    Small businesses across New Zealand need websites that present them well without crushing the budget. Whether you run a local service business, consultancy, beauty business, or trade service, your website should <strong>create confidence from the first few seconds</strong>. An affordable website is the ideal middle ground — professionalism without the inflated cost.
                                </p>
                                <h3 className="font-bold text-lg mb-4">An Affordable Tradie Website Should Include:</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        'Clear service lists',
                                        'Local service area mentions',
                                        'Mobile-friendly layout',
                                        'Trust-building visuals',
                                        'Easy contact buttons',
                                        'Quote request forms',
                                        'SEO-friendly structure',
                                        'Testimonials or reviews',
                                    ].map((f) => (
                                        <div key={f} className="flex items-start gap-2.5">
                                            <span className="text-emerald-500 font-bold mt-0.5 shrink-0">✓</span>
                                            <span className="text-sm text-gray-700">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Right — Image */}
                            <div className="flex-1 w-full">
                                {tradieImg ? (
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                        <Image
                                            src={tradieImg.url}
                                            alt={tradieImg.alt || 'Tradesman professional builder'}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto object-cover"
                                            loading="lazy"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                        {tradieImg.photographer && (
                                            <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm rounded px-2 py-0.5 text-white">
                                                <UnsplashAttribution photographer={tradieImg.photographer} profileUrl={tradieImg.profileUrl} />
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="aspect-[3/2] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl" />
                                )}
                                {/* Benefit callout */}
                                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-6">
                                    <p className="text-blue-800 font-semibold text-sm leading-relaxed">
                                        💡 For many small businesses in NZ, an affordable website is the difference between looking established and looking invisible. One or two extra clients per month can justify the cost quickly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    MID-PAGE CTA
                ═══════════════════════════════════════════════════ */}
                <section className="py-14 bg-blue-600">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Stop Losing Customers to a Weak Online Presence
                        </h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Every day without a proper website is a missed opportunity. Get a free consultation and see how an affordable, professional website can help your business grow.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#lead-form" className="btn btn-lg !bg-white !text-blue-600 hover:!bg-gray-100 font-bold">
                                Get My Free Consultation
                            </a>
                            <Link href="/pricing" className="btn btn-outline-light btn-lg">
                                See Pricing
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    6. AFFORDABLE WEBSITES + SEO SYNERGY
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-16">
                            {/* Right — Image */}
                            <div className="flex-1 w-full">
                                {seoImg ? (
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                        <Image
                                            src={seoImg.url}
                                            alt={seoImg.alt || 'SEO analytics dashboard'}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto object-cover"
                                            loading="lazy"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                        {seoImg.photographer && (
                                            <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm rounded px-2 py-0.5 text-white">
                                                <UnsplashAttribution photographer={seoImg.photographer} profileUrl={seoImg.profileUrl} />
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="aspect-[3/2] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl" />
                                )}
                            </div>
                            {/* Left — Content */}
                            <div className="flex-1">
                                <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Affordable + SEO = Growth</p>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                    The Link Between Affordable Websites and SEO
                                </h2>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        A website can look good, but if nobody finds it, growth becomes harder. That is why SEO matters even for affordable websites. A strong <strong>affordable website NZ</strong> should still include essential SEO foundations so it can perform better in search results over time.
                                    </p>
                                    <p>
                                        If your affordable website is built with SEO in mind from the start, it becomes much more valuable. It can help your business attract traffic from people actively searching for your services in New Zealand.
                                    </p>
                                    <p>
                                        This is especially important for small businesses and tradies. Many customers search with high intent — they are not browsing casually. They want help, and they want it soon. A website that appears for those searches and <strong>builds trust quickly is a major advantage</strong>.
                                    </p>
                                </div>
                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        'Clean page structure',
                                        'Proper heading hierarchy',
                                        'Targeted service pages',
                                        'Mobile responsiveness',
                                        'Image optimisation',
                                        'Fast load speeds',
                                        'Keyword-aware content',
                                        'Internal linking',
                                    ].map((item) => (
                                        <div key={item} className="flex items-start gap-2.5">
                                            <span className="text-emerald-500 font-bold mt-0.5 shrink-0">✓</span>
                                            <span className="text-sm text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6">
                                    <Link href="/blog/seo-for-small-business-nz" className="text-blue-600 font-semibold hover:underline">
                                        Read our full SEO guide for NZ businesses →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    7. BENEFITS & ROI
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">The Business Case</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Why Affordable Websites Can Deliver Strong ROI
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                For many businesses, the return on a good website is significant. One or two extra clients per month can justify the cost quickly. A better site can improve first impressions, increase enquiries, and help your business convert more of the traffic or referrals you already get.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {[
                                { icon: '📞', title: 'More Calls', desc: 'Visible contact details and mobile click-to-call that drive real enquiries' },
                                { icon: '📝', title: 'More Quote Requests', desc: 'Lead-capture forms that make it easy for visitors to reach out' },
                                { icon: '🔍', title: 'Better Search Visibility', desc: 'SEO foundations that help you get found on Google over time' },
                                { icon: '🤝', title: 'Stronger Local Trust', desc: 'A professional site that reassures customers before first contact' },
                                { icon: '🏆', title: 'Professional Image', desc: 'Modern design that makes your business look as good as it is' },
                                { icon: '📈', title: 'Better Conversion Rates', desc: 'Strategic layout that turns more visitors into paying customers' },
                                { icon: '💪', title: 'More Confidence Online', desc: 'A site you can proudly share with customers and prospects' },
                                { icon: '🚀', title: 'Scalable Foundation', desc: 'A solid base for adding SEO, ads, and content marketing later' },
                            ].map((b) => (
                                <div key={b.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="text-2xl mb-3">{b.icon}</div>
                                    <h3 className="font-bold text-sm mb-2">{b.title}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 text-center mt-10 max-w-2xl mx-auto text-sm leading-relaxed">
                            Affordable websites should be seen as an <strong>investment, not just an expense</strong>. The right website can keep producing value long after it is launched.
                        </p>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    CHEAP vs AFFORDABLE — COMPARISON
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Know the Difference</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Cheap Website vs Affordable High-Value Website
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Cheap often costs more in the long run. Affordable means sensible pricing for a website that still performs.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Cheap Website */}
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                                <div className="text-2xl mb-3">🏪</div>
                                <h3 className="text-lg font-bold mb-4 text-gray-600">Cheap Website</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Outdated, generic template design',
                                        'Poor mobile performance',
                                        'Weak or no SEO foundations',
                                        'Unclear messaging and bland copy',
                                        'Slow load times',
                                        'No lead generation strategy',
                                        'Limited flexibility',
                                        'Needs replacing within months',
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                                            <span className="text-gray-400 shrink-0 mt-0.5">–</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Affordable High-Value */}
                            <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200 relative">
                                <div className="absolute -top-3 right-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">WHAT WE BUILD</div>
                                <div className="text-2xl mb-3">🚀</div>
                                <h3 className="text-lg font-bold mb-4 text-blue-900">Affordable High-Value Website</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Clean, modern, professional design',
                                        'Mobile-first and fully responsive',
                                        'SEO built in from day one',
                                        'Strategic, conversion-focused copy',
                                        'Sub-2-second load times',
                                        'Lead-capture forms and clear CTAs',
                                        'Full ownership, no lock-in',
                                        'Built to last and support growth',
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2.5 text-sm text-blue-800">
                                            <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    COMMON PROBLEMS WITH CHEAP WEBSITE OPTIONS
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-3">Warning Signs</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Common Problems With Cheap Website Options
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Many businesses start with the cheapest option they can find and end up disappointed. These problems quietly reduce trust and drive customers away.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                            {commonProblems.map((p) => (
                                <div key={p.label} className="flex items-start gap-3 bg-red-50/50 rounded-xl p-4 border border-red-100/50">
                                    <span className="text-red-500 shrink-0 mt-0.5">{p.icon}</span>
                                    <span className="text-sm text-gray-700">{p.label}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 text-center mt-8 max-w-2xl mx-auto leading-relaxed">
                            A weak website can make a good business look less credible than it really is. Cutting cost is fine. <strong>Cutting quality too far is not.</strong> That is why affordable websites should still be treated as a serious business asset.
                        </p>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    8. INFOGRAPHIC — 5 PILLARS + VISITOR JOURNEY
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">The 5 Pillars</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                5 Pillars of an Affordable Website That Still Performs
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                An affordable website should never be a stripped-back placeholder. These five foundations ensure your site delivers real business value.
                            </p>
                        </div>

                        {/* Infographic — 5 Pillars */}
                        <div className="relative">
                            {/* Connecting line (desktop) — aligned to center of 64px icon boxes */}
                            <div className="hidden lg:block absolute left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 rounded-full z-0" style={{ top: '32px' }} />

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                                {[
                                    { num: '01', title: 'Speed', desc: 'Sub-2s load times. Faster sites keep visitors and rank higher on Google.', gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)' },
                                    { num: '02', title: 'Trust', desc: 'Professional design, quality visuals, and messaging that builds credibility.', gradient: 'linear-gradient(135deg, #2563eb, #4f46e5)' },
                                    { num: '03', title: 'SEO', desc: 'Clean structure, metadata, and keyword-aware content that gets found.', gradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)' },
                                    { num: '04', title: 'Conversion', desc: 'Clear CTAs, lead-capture forms, and strategic layout that drives action.', gradient: 'linear-gradient(135deg, #7c3aed, #9333ea)' },
                                    { num: '05', title: 'Mobile UX', desc: 'Flawless experience on phones and tablets where most visitors browse.', gradient: 'linear-gradient(135deg, #9333ea, #ec4899)' },
                                ].map((pillar) => (
                                    <div key={pillar.num} className="flex flex-col items-center text-center group">
                                        <div className="w-16 h-16 rounded-2xl text-white flex items-center justify-center text-xl font-bold shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: pillar.gradient }}>
                                            {pillar.num}
                                        </div>
                                        <h3 className="font-bold text-base mb-2">{pillar.title}</h3>
                                        <p className="text-gray-500 text-xs leading-relaxed max-w-[180px]">{pillar.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Visitor → Enquiry Journey */}
                        <div className="mt-20">
                            <h3 className="text-xl font-bold text-center mb-10">How a Small Business Website Turns Visitors Into Enquiries</h3>
                            <div className="flex flex-col md:flex-row items-stretch gap-0">
                                {[
                                    { step: 'Finds Your Site', icon: '🔍', detail: 'Customer searches Google for your service in their area', bg: 'bg-blue-50 border-blue-200' },
                                    { step: 'First Impression', icon: '👀', detail: 'Professional design and clear messaging build instant trust', bg: 'bg-indigo-50 border-indigo-200' },
                                    { step: 'Explores Services', icon: '📋', detail: 'Clean service pages answer their questions and show credibility', bg: 'bg-violet-50 border-violet-200' },
                                    { step: 'Builds Confidence', icon: '🤝', detail: 'Testimonials, trust signals, and local relevance reassure them', bg: 'bg-purple-50 border-purple-200' },
                                    { step: 'Makes Contact', icon: '✅', detail: 'Easy forms, click-to-call, and clear CTAs drive the enquiry', bg: 'bg-emerald-50 border-emerald-200' },
                                ].map((s, i, arr) => (
                                    <div key={s.step} className="flex-1 flex items-stretch">
                                        <div className={`${s.bg} border rounded-xl p-5 text-center flex flex-col items-center justify-center w-full`}>
                                            <div className="text-3xl mb-2">{s.icon}</div>
                                            <p className="font-bold text-sm mb-1">{s.step}</p>
                                            <p className="text-gray-500 text-xs leading-relaxed">{s.detail}</p>
                                        </div>
                                        {i < arr.length - 1 && (
                                            <div className="hidden md:flex items-center px-1">
                                                <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tool Slider */}
                <ToolSlider />

                {/* ═══════════════════════════════════════════════════
                    VISUAL DESIGN STILL MATTERS ON A BUDGET
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Design Matters</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Why Visual Design Still Matters on a Budget
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                People judge credibility quickly — often within seconds. If the site looks outdated or unprofessional, trust drops immediately. Affordable websites can still look excellent when designed thoughtfully.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {[
                                { icon: '🎨', title: 'Modern Typography', desc: 'Clean, professional fonts that feel current and establish credibility' },
                                { icon: '📐', title: 'Balanced Spacing', desc: 'Thoughtful layout with breathing room that feels polished and intentional' },
                                { icon: '🖼️', title: 'Quality Imagery', desc: 'Professional photos and graphics that reinforce your brand quality' },
                                { icon: '🎯', title: 'Strong Structure', desc: 'Clear sections and visual hierarchy that guide visitors through the page' },
                                { icon: '🌈', title: 'Consistent Branding', desc: 'Cohesive colours, fonts, and tone that create a unified experience' },
                                { icon: '📱', title: 'Modern Mobile UX', desc: 'A mobile experience that feels native and easy to navigate' },
                                { icon: '✨', title: 'Polished Layout', desc: 'Clean, elegant design that performs better than overdesigned pages' },
                                { icon: '💎', title: 'Premium Feel', desc: 'An affordable website that visually proves affordability does not mean cheap' },
                            ].map((b) => (
                                <div key={b.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="text-2xl mb-3">{b.icon}</div>
                                    <h3 className="font-bold text-sm mb-2">{b.title}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    HOW IT WORKS — 3 STEPS
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 text-white" style={{ background: 'linear-gradient(135deg, #0b1220 0%, #0d1f3c 50%, #0b2e6e 100%)' }}>
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">How It Works</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                From Brief to Live Website — In 3 Simple Steps
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                No 12-week timelines. No endless revisions. Here&apos;s how we build your affordable website and get it live fast.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { num: '1', title: 'We Consult & Plan', desc: 'Tell us about your business and goals. We\'ll scope the project, plan your site structure, and provide a fixed quote before you commit. $500 deposit to start.' },
                                { num: '2', title: 'We Build Your Site', desc: 'We design and build your professional website — service pages, lead forms, SEO, mobile optimisation, and trust-building elements all included.' },
                                { num: '3', title: 'You Go Live', desc: 'We deploy to ultra-fast hosting (free), connect your domain, and submit to Google. Most sites are live within 7–14 days.' },
                            ].map((step) => (
                                <div key={step.num} className="text-center">
                                    <div className="w-14 h-14 rounded-full bg-blue-500 text-white text-xl font-bold flex items-center justify-center mx-auto mb-5">{step.num}</div>
                                    <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <a href="#lead-form" className="btn btn-lg">Start With a Free Consultation</a>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    9. YOUTUBE VIDEO SECTION
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-10">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Learn More</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                SEO and Affordable Web Design for Small Businesses
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Watch this overview of how SEO and smart web design work together to help small businesses get found online, build trust, and turn visitors into real enquiries — even on a budget.
                            </p>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-black aspect-video">
                            <iframe
                                src="https://www.youtube-nocookie.com/embed/nU-IIXBWlS4?rel=0"
                                title="SEO for Small Business — Web Design and SEO Best Practices"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                loading="lazy"
                                className="absolute inset-0 w-full h-full"
                            />
                        </div>
                        <p className="text-gray-400 text-xs text-center mt-4">
                            Video: SEO fundamentals and web design best practices for small businesses and affordable websites.
                        </p>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    LOCAL RELEVANCE NZ
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Built for New Zealand</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Local Relevance Matters for NZ Small Businesses
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                For NZ businesses, local relevance still matters. People want to know that the website and business understand their market. The more relevant your page feels, the more likely users are to trust it.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
                            {[
                                { icon: '🇳🇿', title: 'NZ-Focused Wording', desc: 'Content, tone, and messaging that feel local and relatable to Kiwi businesses' },
                                { icon: '🔧', title: 'Tradie-Specific Relevance', desc: 'Designed for the practical needs of NZ trades and service businesses' },
                                { icon: '📍', title: 'Local Service References', desc: 'Service area mentions and location-relevant content that builds trust' },
                                { icon: '💬', title: 'Realistic Messaging', desc: 'Practical, honest business messaging — not generic overseas agency copy' },
                                { icon: '🎯', title: 'Conversion-Led Structure', desc: 'Pages built to turn NZ visitors into real enquiries and customers' },
                                { icon: '📈', title: 'Local SEO Readiness', desc: 'Structured for Google Maps and local search visibility in New Zealand' },
                            ].map((item) => (
                                <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                                    <div className="text-2xl mb-3">{item.icon}</div>
                                    <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    REAL EXAMPLES
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Real Affordable Website Examples for NZ Businesses
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                These aren&apos;t mockups. They&apos;re live sites built for real businesses. Click through and see exactly what you&apos;d get.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                            {[
                                {
                                    tag: 'Trades · NZ',
                                    title: 'PlumbFix Services',
                                    desc: 'A plumber with zero web presence. We built a fast, SEO-optimised site with service pages and click-to-call. Now ranking Page 1 for local plumbing searches.',
                                    stats: [{ val: 'Page 1', label: 'Google ranking' }, { val: '3x', label: 'more enquiries' }],
                                    url: 'https://plumbfix-site.netlify.app/',
                                },
                                {
                                    tag: 'Cleaning · NZ',
                                    title: 'Everclean Services',
                                    desc: 'A cleaning business that went from no online presence to 20+ monthly enquiries with service-area pages, a quote form, and local SEO.',
                                    stats: [{ val: '20+', label: 'leads/month' }, { val: '5 days', label: 'to launch' }],
                                    url: 'https://cleaning-site-001.netlify.app/',
                                },
                            ].map((example) => (
                                <div key={example.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                                    <p className="text-blue-600 text-sm font-semibold mb-2">{example.tag}</p>
                                    <h3 className="text-lg font-bold mb-3">{example.title}</h3>
                                    <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-1">{example.desc}</p>
                                    <div className="flex gap-4 mb-4">
                                        {example.stats.map((s) => (
                                            <div key={s.label} className="text-center">
                                                <p className="text-2xl font-extrabold text-blue-600">{s.val}</p>
                                                <p className="text-xs text-gray-500">{s.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <a href={example.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline inline-block">
                                        View Live Site →
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    LONG-TERM GROWTH
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-10">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Beyond Launch Day</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Long-Term Growth Starts With a Better Website
                            </h2>
                        </div>
                        <div className="space-y-4 text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            <p>
                                A better website creates a stronger foundation for everything else. It supports SEO, improves user experience, helps convert traffic, and makes future marketing more effective. Whether you later invest in Google Ads, content marketing, local SEO, or social media, a <strong>strong site helps those efforts perform better</strong>.
                            </p>
                            <p>
                                For growing businesses, affordable websites are often the most practical first step. They let you improve your online presence now without waiting until you can justify a premium custom project later. And in many cases, a well-designed affordable website is more than enough to support strong business growth.
                            </p>
                            <p>
                                Your website is often the first impression people get of your business. It should make you look credible, professional, and worth contacting. It should not feel like a compromise — it should feel like a <strong>smart, strategic investment that supports your growth</strong>.
                            </p>
                        </div>
                        <div className="text-center mt-8">
                            <a href="#lead-form" className="text-blue-600 font-semibold hover:underline">
                                Let&apos;s discuss your project — free consultation →
                            </a>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    10. FAQ
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24">
                    <div className="max-w-2xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Common Questions</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Affordable Websites NZ — Frequently Asked Questions
                            </h2>
                        </div>
                        <div className="border-t border-gray-200">
                            {faqs.map((faq) => (
                                <details key={faq.q} className="border-b border-gray-200 group">
                                    <summary className="flex items-center justify-between py-5 cursor-pointer font-semibold text-gray-900 list-none">
                                        <span>{faq.q}</span>
                                        <span className="text-blue-600 text-xl transition-transform duration-200 group-open:rotate-45 flex-shrink-0 ml-4">+</span>
                                    </summary>
                                    <p className="pb-5 text-gray-500 text-sm leading-relaxed pr-8">{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    11. FINAL CTA — LEAD CAPTURE FORM
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 text-white" id="lead-form" style={{ background: 'linear-gradient(135deg, #0b1220 0%, #0d1f3c 50%, #0b2e6e 100%)' }}>
                    <div className="max-w-xl mx-auto px-4 text-center">
                        <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">Ready to Get Started?</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Get a Free Website Consultation
                        </h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Tell us about your business and goals. We&apos;ll review your current setup, recommend the right approach, and provide a clear plan for building an affordable website that actually performs. No obligation. No jargon.
                        </p>

                        <LeadCaptureForm
                            formName="affordable-websites-nz-lead"
                            ctaText="Get My Free Consultation"
                            showWebsite={true}
                            darkMode={true}
                        />
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    INTERNAL LINKS + RESOURCES
                ═══════════════════════════════════════════════════ */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="mb-10">
                            <h3 className="text-lg font-bold mb-4">Our Other Services</h3>
                            <div className="flex flex-wrap gap-3">
                                <Link href="/web-design-christchurch" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors">
                                    Web Design NZ
                                </Link>
                                <Link href="/website-design-for-small-business" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors">
                                    Website Design for Small Business NZ
                                </Link>
                                <Link href="/ecommerce-websites-nz" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors">
                                    Ecommerce Websites NZ
                                </Link>
                                <Link href="/services" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors">
                                    All Services
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
                                            <p className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                                                {a.label}
                                            </p>
                                            <span className="text-xs text-blue-600 font-medium mt-2 inline-block">
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
