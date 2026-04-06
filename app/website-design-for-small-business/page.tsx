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
    title: 'Website Design for Small Business NZ — Sites That Generate Leads | Fullstack Forge',
    description: 'Website design for small business NZ — professional, SEO-ready, mobile-optimised websites that help New Zealand small businesses and tradies look credible, rank on Google, and generate real leads.',
    alternates: {
        canonical: `${SITE_URL}/website-design-for-small-business`,
    },
    keywords: ['website design for small business nz', 'small business website design nz', 'website design nz for small business', 'seo-ready small business websites nz', 'lead-generating small business websites nz', 'small business web design for tradies nz'],
    openGraph: {
        title: 'Website Design for Small Business NZ — Professional Sites That Generate Leads',
        description: 'Professional, SEO-ready websites built to help NZ small businesses and tradies grow online. Mobile-first, conversion-focused, no inflated agency pricing.',
        url: `${SITE_URL}/website-design-for-small-business`,
        type: 'website',
        images: [{ url: '/assets/fallback-image.png', width: 2560, height: 1440, alt: 'Website Design for Small Business NZ — Fullstack Forge' }],
    },
    twitter: {
        card: 'summary_large_image' as const,
        title: 'Website Design for Small Business NZ — Sites That Generate Leads',
        description: 'Professional website design for NZ small businesses. SEO-ready, mobile-first, built to convert visitors into customers.',
        images: ['/assets/fallback-image.png'],
    },
}

const faqs = [
    { q: 'How much does a small business website cost in NZ?', a: 'Website builds start with a $500 NZD deposit. We scope your project and provide a fixed total price before further work begins — most sites fall in the $1,000–$2,000 range. For comparison, NZ agencies charge $5,000–$20,000 for comparable work. No hidden fees, no surprises.' },
    { q: 'Will a website actually help my small business?', a: 'Yes. Most New Zealand consumers research online before buying locally. A professional website lets you get found on Google, build credibility instantly, and capture leads 24/7. Businesses we\'ve worked with typically see significant enquiry growth within the first few months of launch.' },
    { q: 'How long does it take to build a small business website?', a: 'Most sites are live within 7–14 days. Simpler sites can be ready in under a week. We move fast because we start from proven, pre-built designs rather than a blank canvas — so you get speed without sacrificing quality.' },
    { q: 'I already have a website — should I redesign or start fresh?', a: 'It depends on the platform and condition. If your current site is underperforming, a fresh build is usually faster and more cost-effective than patching an old one. We\'ll audit your current site for free and recommend the best path forward.' },
    { q: 'Do I need to provide content and images?', a: 'Having your own photos is ideal — real images build more trust than stock. For written content, we guide you through a simple process and handle the copywriting. You approve everything before launch.' },
    { q: 'Are there ongoing fees?', a: 'Website builds are a one-time investment. We deploy to Netlify where hosting is free for most sites. Your only recurring cost is domain registration (around $20/year). Optional monthly SEO plans start at $150/month if you want ongoing ranking support.' },
    { q: 'Is SEO included in the website build?', a: 'Yes. Every site includes on-page SEO foundations — clean page structure, proper heading hierarchy, optimised metadata, image optimisation, structured data, fast load speeds, and mobile responsiveness. This gives you the best possible starting position for ranking on Google.' },
    { q: 'Do you build websites for tradies?', a: 'Tradies are one of our most common clients. Plumbers, electricians, builders, roofers, landscapers, painters — we build professional, SEO-ready websites that help tradies get found online and generate real enquiries from people in their service area.' },
    { q: 'What if I need e-commerce?', a: 'Our standard builds cover service businesses. For online stores with product catalogues, shopping carts, and payment processing, see our ecommerce websites NZ page or contact us for a custom quote.' },
    { q: 'Can I add SEO or marketing services later?', a: 'Absolutely. Start with a website build and add SEO setup (from $300), monthly SEO (from $150/mo), or website optimisation (from $400) as your business grows. Everything is modular — no lock-in contracts.' },
]

const features = [
    { icon: '🎯', title: 'Lead-Focused Design', desc: 'Every page is structured to turn visitors into enquiries. Clear CTAs, lead-capture forms, and trust signals — not just a digital brochure.' },
    { icon: '📱', title: 'Mobile-First Build', desc: 'Over 60% of NZ web traffic is mobile. Your site will look flawless and load instantly on phones, tablets, and desktops.' },
    { icon: '🔍', title: 'SEO Built In From Day One', desc: 'On-page SEO, metadata, structured data, heading hierarchy, and fast load speeds come standard. Built to get found on Google.' },
    { icon: '⚡', title: 'Lightning-Fast Performance', desc: 'Sub-2-second load times on a global CDN. Fast sites keep visitors engaged and rank higher in search results.' },
    { icon: '🤝', title: 'Trust-Building Layout', desc: 'Professional design, testimonials, proof sections, and credibility signals that make visitors confident enough to contact you.' },
    { icon: '💰', title: 'Sensible Pricing', desc: 'Agency-quality websites at a fraction of the cost. $500 deposit, fixed quote upfront, no hidden fees, no ongoing commitments.' },
]

const commonProblems = [
    { icon: '❌', label: 'Outdated design that hurts credibility' },
    { icon: '❌', label: 'Generic templates that weaken your brand' },
    { icon: '❌', label: 'Slow speeds that drive visitors away' },
    { icon: '❌', label: 'Poor mobile experience on phones' },
    { icon: '❌', label: 'Weak headings and unconvincing copy' },
    { icon: '❌', label: 'No clear calls to action' },
    { icon: '❌', label: 'Little or no SEO structure' },
    { icon: '❌', label: 'No trust elements or social proof' },
]

export default async function WebsiteDesignSmallBusinessPage() {
    const helpfulArticles = [
        { url: '/blog/do-small-businesses-need-a-website', label: 'Do Small Businesses Need a Website in 2026?', imageQuery: 'small business owner laptop' },
        { url: '/blog/best-website-design-for-small-businesses', label: 'Best Website Design for Small Businesses', imageQuery: 'modern website design' },
        { url: '/blog/how-much-does-a-website-cost-in-nz', label: 'How Much Does a Website Cost in NZ? (2026 Guide)', imageQuery: 'website design pricing' },
        { url: '/blog/diy-vs-professional-website', label: 'DIY Website vs Professional — Which Is Right?', imageQuery: 'web developer coding laptop' },
        { url: '/blog/how-to-get-more-leads-from-your-website', label: 'How to Get More Leads Without More Traffic', imageQuery: 'lead generation business growth' },
    ]

    const [heroImg, trustImg, seoImg, tradieImg, ...thumbnails] = await Promise.all([
        fetchUnsplashImage('professional website design laptop modern workspace'),
        fetchUnsplashImage('small business owner confident success professional'),
        fetchUnsplashImage('SEO analytics dashboard search engine rankings'),
        fetchUnsplashImage('tradesman electrician builder professional NZ'),
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
            name: 'Website Design for Small Business NZ',
            description: 'Professional, SEO-ready website design for small businesses across New Zealand. Conversion-focused websites that help small businesses and tradies look credible, rank on Google, and generate real leads.',
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
                                    Website Design for NZ Small Businesses
                                </p>
                                <h1 className="text-3xl md:text-5xl lg:text-[3.4rem] font-bold text-white mb-6 leading-tight">
                                    Website Design for Small Business NZ That Helps You Get More Leads
                                </h1>
                                <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
                                    Modern, mobile-friendly, SEO-ready websites built to help New Zealand small businesses and tradies grow online. Professional design that turns visitors into real enquiries.
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
                                    <span>✓ SEO Built In</span>
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
                                                alt={heroImg.alt || 'Website design for small business on laptop'}
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
                    3. WHY WEBSITE DESIGN MATTERS FOR SMALL BUSINESSES
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                            {/* Left — Image */}
                            <div className="flex-1 w-full">
                                {trustImg ? (
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                        <Image
                                            src={trustImg.url}
                                            alt={trustImg.alt || 'Small business owner with professional website'}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto object-cover"
                                            loading="lazy"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                        {trustImg.photographer && (
                                            <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm rounded px-2 py-0.5 text-white">
                                                <UnsplashAttribution photographer={trustImg.photographer} profileUrl={trustImg.profileUrl} />
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
                                    Why Small Businesses in New Zealand Need a Strong Website
                                </h2>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        The way people choose businesses has changed. Before they call, book, or request a quote, they usually search online first. They compare options, browse websites, read reviews, and make <strong>quick judgments based on what they see</strong>. If your business has no proper website, or your website looks weak, many potential customers will leave without ever contacting you.
                                    </p>
                                    <p>
                                        For small businesses, this is especially important because your website often forms the first real impression. A clear, polished website immediately increases confidence. A cluttered, slow, or outdated site does the opposite — it <strong>creates doubt and sends people to your competitors</strong>.
                                    </p>
                                    <p>
                                        A strong website works for you even when you are not actively selling. It helps potential customers find your business, understand what you offer, and decide whether they trust you enough to get in touch. It acts as a salesperson, credibility builder, and marketing platform all at once.
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
                    4. WHAT GOOD WEBSITE DESIGN LOOKS LIKE — 6 FEATURES
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">What You Get</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                What Good Small Business Website Design Looks Like
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                The best websites are not defined by flashy design or unnecessary complexity. They are defined by effectiveness — making it easy for users to understand what you do, trust you, and take action.
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
                    5. WEBSITE DESIGN FOR TRADIES & SMALL BUSINESSES
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                            {/* Left — Content */}
                            <div className="flex-1">
                                <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Built for NZ Businesses</p>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                    Website Design for Tradies and Small Businesses in New Zealand
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Whether you are a tradie, consultant, retailer, local service provider, or another small business owner in New Zealand, the right website can make a measurable difference to your visibility and results. Your website should not just look modern — it should <strong>support growth</strong>.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    For tradies and service businesses, this is especially relevant. Many customers are searching with clear intent. They want a solution. Your website should help them <strong>choose you with confidence</strong>. If a visitor lands on your homepage and does not immediately understand what you do, who you help, and how to reach you, the website is losing effectiveness.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    The businesses that win online are not always the biggest — they are the ones with the clearest messaging, the best usability, and the easiest path to making contact. A well-designed small business website helps you compete far more effectively against bigger competitors.
                                </p>
                                <h3 className="font-bold text-lg mb-4">A Strong Small Business Website Helps You:</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        'Look more credible to customers',
                                        'Explain your services clearly',
                                        'Rank better in Google',
                                        'Capture leads more effectively',
                                        'Convert more existing traffic',
                                        'Compete against larger businesses',
                                        'Build trust before first contact',
                                        'Generate enquiries 24/7',
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
                                            alt={tradieImg.alt || 'Tradesman professional builder NZ'}
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
                                        💡 A poor website does the opposite of helping your business. It makes you look behind the times, creates doubt, and causes people to click away to a competitor. If your current site is weak, upgrading may be one of the best decisions you make.
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
                            Stop Losing Customers to a Weak Website
                        </h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Every day with an underperforming website means missed enquiries and lost revenue. Get a free consultation and find out exactly how a better website can grow your business.
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
                    6. WEBSITE DESIGN + SEO SYNERGY
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
                                            alt={seoImg.alt || 'SEO analytics dashboard for small business'}
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
                                <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Design + SEO = Growth</p>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                    Website Design and SEO Work Best Together
                                </h2>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        A website can look great, but if it is invisible in Google, its value is limited. That is why SEO and <strong>website design for small business NZ</strong> should work together from the beginning. SEO-ready design gives your business a better chance to show up when potential customers are searching.
                                    </p>
                                    <p>
                                        Google needs to understand what your website is about, and visitors need to find the content useful. The best website design combines visual quality with strong search foundations — this gives your business a better chance to both <strong>attract traffic and convert it</strong>.
                                    </p>
                                    <p>
                                        For example, if your business targets New Zealand small business customers, your website should reflect that in the way pages are structured and written. Location relevance, service-specific pages, and keyword-aware content all contribute to visibility.
                                    </p>
                                </div>
                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        'Clear page structure',
                                        'Logical heading hierarchy',
                                        'Optimised metadata',
                                        'Internal linking',
                                        'Mobile responsiveness',
                                        'Fast loading speed',
                                        'Keyword-aware content',
                                        'Image optimisation',
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
                    7. LEAD GENERATION & BUSINESS GROWTH
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Built to Convert</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Website Design Should Be Lead-Focused
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                A lot of businesses treat web design as an appearance project. They focus on whether the site looks good, but not on whether it helps generate results. For small businesses, the website should be designed to support leads — not just aesthetics.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {[
                                { icon: '📋', title: 'Explain What You Offer Quickly', desc: 'Visitors should understand your services and value within seconds of landing on your site.' },
                                { icon: '✨', title: 'Highlight Key Benefits', desc: 'Show what makes your business worth choosing — not just what you do, but why it matters.' },
                                { icon: '👥', title: 'Show Who the Service Is For', desc: 'Help visitors self-identify as your ideal customer so they feel the site speaks directly to them.' },
                                { icon: '🛡️', title: 'Reduce Doubt and Hesitation', desc: 'Testimonials, trust signals, and clear information remove barriers to making contact.' },
                                { icon: '📞', title: 'Make It Easy to Contact You', desc: 'Prominent forms, click-to-call, and visible CTAs on every page ensure no lead is lost.' },
                                { icon: '🧭', title: 'Guide Visitors to Action', desc: 'Strategic calls to action placed throughout the page move people toward the next step.' },
                            ].map((item) => (
                                <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex gap-4">
                                    <div className="text-2xl shrink-0">{item.icon}</div>
                                    <div>
                                        <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                                        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 text-center mt-10 max-w-2xl mx-auto text-sm leading-relaxed">
                            If a visitor lands on your homepage and does not immediately understand what you do, who you help, and how to reach you, the website is losing effectiveness. A strong <strong>small business website</strong> should remove confusion and make next steps obvious.
                        </p>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    WEAK vs LEAD-GENERATING — COMPARISON
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Know the Difference</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Weak Website vs Lead-Generating Website
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                A site may technically exist, but still fail to support the business. Here is the difference between a weak website and one that actually works.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Weak Website */}
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                                <div className="text-2xl mb-3">🏪</div>
                                <h3 className="text-lg font-bold mb-4 text-gray-600">Weak Small Business Website</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Outdated, generic template design',
                                        'Slow loading and poor mobile UX',
                                        'Vague messaging and weak copy',
                                        'No clear calls to action',
                                        'No trust signals or social proof',
                                        'Little or no SEO structure',
                                        'No lead capture or forms',
                                        'Hurts credibility instead of building it',
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                                            <span className="text-gray-400 shrink-0 mt-0.5">–</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Lead-Generating Website */}
                            <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200 relative">
                                <div className="absolute -top-3 right-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">WHAT WE BUILD</div>
                                <div className="text-2xl mb-3">🚀</div>
                                <h3 className="text-lg font-bold mb-4 text-blue-900">Lead-Generating Website</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Clean, professional, modern design',
                                        'Lightning-fast and mobile-first',
                                        'Clear, persuasive, benefit-driven copy',
                                        'Prominent CTAs on every page',
                                        'Testimonials, proof, and trust signals',
                                        'SEO-optimised from day one',
                                        'Lead-capture forms throughout',
                                        'Builds credibility and drives enquiries',
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
                    COMMON PROBLEMS
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-3">Warning Signs</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Common Problems With Weak Small Business Websites
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Many small business websites underperform because they share the same weaknesses. These problems quietly reduce trust and lead generation.
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
                            Investing in better <strong>website design for small business NZ</strong> can create strong returns. Improving the website can immediately strengthen how your business is perceived online.
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
                                5 Pillars of Effective Small Business Website Design in NZ
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Every high-performing small business website is built on these five foundations. Miss one, and your site underperforms.
                            </p>
                        </div>

                        {/* Infographic — 5 Pillars */}
                        <div className="relative">
                            {/* Connecting line (desktop) — aligned to center of 64px icon boxes */}
                            <div className="hidden lg:block absolute left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 rounded-full z-0" style={{ top: '32px' }} />

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                                {[
                                    { num: '01', title: 'Trust', desc: 'Professional design, trust signals, and credibility cues that convince visitors to contact you.', gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)' },
                                    { num: '02', title: 'Speed', desc: 'Sub-2s load times. Faster sites keep visitors engaged and rank higher on Google.', gradient: 'linear-gradient(135deg, #2563eb, #4f46e5)' },
                                    { num: '03', title: 'SEO', desc: 'Clean structure, metadata, and keyword-aware content that helps you get found.', gradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)' },
                                    { num: '04', title: 'Conversion', desc: 'Clear CTAs, lead-capture forms, and strategic layout that drives real enquiries.', gradient: 'linear-gradient(135deg, #7c3aed, #9333ea)' },
                                    { num: '05', title: 'Mobile UX', desc: 'Flawless experience on phones and tablets where most visitors browse and convert.', gradient: 'linear-gradient(135deg, #9333ea, #ec4899)' },
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
                            <h3 className="text-xl font-bold text-center mb-10">The Journey From Visitor to Customer</h3>
                            <div className="flex flex-col md:flex-row items-stretch gap-0">
                                {[
                                    { step: 'Finds Your Site', icon: '🔍', detail: 'Customer searches Google for your service in their area', bg: 'bg-blue-50 border-blue-200' },
                                    { step: 'First Impression', icon: '👀', detail: 'Professional design and clear messaging build instant trust', bg: 'bg-indigo-50 border-indigo-200' },
                                    { step: 'Explores Services', icon: '📋', detail: 'Clean pages answer their questions and show your credibility', bg: 'bg-violet-50 border-violet-200' },
                                    { step: 'Builds Confidence', icon: '🤝', detail: 'Testimonials, proof, and local relevance reassure them', bg: 'bg-purple-50 border-purple-200' },
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
                    MOBILE DESIGN + VISUAL DESIGN
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Mobile &amp; Visual</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Mobile Design and Visual Quality Still Matter
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                A large amount of website traffic comes from mobile devices. If your website is not easy to use on a phone, you are losing leads. And even though performance and clarity matter most, visual design plays a major role in trust and engagement.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {[
                                { icon: '📱', title: 'Responsive Layout', desc: 'Looks and works perfectly on every screen size — phones, tablets, desktops' },
                                { icon: '👆', title: 'Touch-Friendly', desc: 'Buttons, menus, and forms designed for thumb-friendly mobile interaction' },
                                { icon: '⚡', title: 'Fast Mobile Loading', desc: 'Optimised assets and efficient code for instant mobile load times' },
                                { icon: '📞', title: 'Click-to-Call', desc: 'One-tap calling on mobile so customers can reach you instantly' },
                                { icon: '🎨', title: 'Clean Typography', desc: 'Professional fonts and spacing that establish credibility immediately' },
                                { icon: '🖼️', title: 'Quality Imagery', desc: 'Professional photos and graphics that reinforce your brand quality' },
                                { icon: '📐', title: 'Strong Structure', desc: 'Clear sections and visual hierarchy that guide visitors through the page' },
                                { icon: '✨', title: 'Polished Design', desc: 'Modern, elegant design that makes your business look established' },
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
                                No 12-week timelines. No endless revisions. Here&apos;s how we get your small business website live and generating leads.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { num: '1', title: 'We Consult & Plan', desc: 'Tell us about your business and goals. We\'ll scope the project, plan your site structure, and provide a fixed quote before you commit. $500 deposit to start.' },
                                { num: '2', title: 'We Build Your Site', desc: 'We design and build your professional website — service pages, lead forms, SEO foundations, mobile optimisation, and trust-building elements all included.' },
                                { num: '3', title: 'You Go Live', desc: 'We deploy to ultra-fast hosting (free), connect your domain, and submit to Google. Most sites are live within 7–14 days and working for you immediately.' },
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
                                SEO and Web Design for Small Businesses
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Watch this overview of how SEO and web design work together to help small businesses get found online, build trust, and turn website visitors into real enquiries and customers.
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
                            Video: SEO fundamentals and web design best practices for small businesses.
                        </p>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    WHAT CUSTOMERS WANT TO SEE
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Customer Perspective</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                What Small Business Customers Want to See on Your Website
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                When a potential customer lands on your site, they are looking for reassurance. Your website should answer these questions clearly and quickly.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
                            {[
                                { icon: '🔧', title: 'What You Do', desc: 'Clear explanation of your services so visitors immediately understand your offering' },
                                { icon: '👥', title: 'Who You Help', desc: 'Show visitors they are in the right place and your service is designed for them' },
                                { icon: '🛡️', title: 'Why You\'re Trustworthy', desc: 'Testimonials, proof of work, and professional presentation that builds confidence' },
                                { icon: '📍', title: 'Where You Serve', desc: 'Service area information and local relevance that resonates with NZ customers' },
                                { icon: '📞', title: 'How to Contact You', desc: 'Visible, easy-to-use contact options on every page — forms, phone, email' },
                                { icon: '⭐', title: 'Why Choose You', desc: 'Clear differentiation that explains what makes your business worth contacting over others' },
                            ].map((item) => (
                                <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                                    <div className="text-2xl mb-3">{item.icon}</div>
                                    <h3 className="font-bold text-sm mb-2">{item.title}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 text-center mt-8 max-w-2xl mx-auto text-sm leading-relaxed">
                            The best sites feel easy to understand. They do not force the user to work to piece together the message. <strong>Simplicity, clarity, and confidence</strong> are far more effective than complexity.
                        </p>
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
                                Real Small Business Website Examples
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                These aren&apos;t mockups. They&apos;re live sites built for real businesses. Click through and see exactly what you&apos;d get.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {[
                                {
                                    tag: 'Trades · NZ',
                                    title: 'PlumbFix Services',
                                    desc: 'A plumber with zero web presence — now ranking Page 1 for local plumbing searches with service pages, click-to-call, and a quick-quote form.',
                                    stats: [{ val: 'Page 1', label: 'Google ranking' }, { val: '3x', label: 'more enquiries' }],
                                    url: 'https://plumbfix-site.netlify.app/',
                                },
                                {
                                    tag: 'Cleaning · NZ',
                                    title: 'Everclean Services',
                                    desc: 'A cleaning business that went from no online presence to 20+ monthly enquiries with service-area pages and local SEO.',
                                    stats: [{ val: '20+', label: 'leads/month' }, { val: '5 days', label: 'to launch' }],
                                    url: 'https://cleaning-site-001.netlify.app/',
                                },
                                {
                                    tag: 'E-Commerce',
                                    title: 'Comfy Store',
                                    desc: 'A full-featured online store with product filtering, optimised checkout, and 40% faster performance than the previous platform.',
                                    stats: [{ val: '1.2s', label: 'load time' }, { val: '40%', label: 'conversion lift' }],
                                    url: 'https://react-vite-comfy-store-v2.netlify.app/',
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
                                A Better Website Supports Long-Term Growth
                            </h2>
                        </div>
                        <div className="space-y-4 text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            <p>
                                A strong website is not just useful at launch. It continues to support your business over time. It gives you a better platform for future SEO, content, Google Ads, social campaigns, and service expansion. It improves your first impression and helps <strong>convert traffic more effectively month after month</strong>.
                            </p>
                            <p>
                                Many small businesses worry that a professional website will be too expensive. In reality, strong design does not have to mean inflated agency pricing. What matters is that the site includes the right strategic elements — not unnecessary complexity. Affordable but professional <strong>website design for small business NZ</strong> should still provide modern appearance, strong structure, mobile optimisation, SEO foundations, and lead-focused content.
                            </p>
                            <p>
                                Whether you later invest in Google Ads, content marketing, local SEO, or social media, a strong site helps those efforts perform better. This makes it one of the most important digital investments a small business can make — and one of the smartest steps you can take for long-term growth.
                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
                            {[
                                { icon: '🔍', label: 'Better search visibility' },
                                { icon: '📈', label: 'Stronger lead flow' },
                                { icon: '🤝', label: 'Improved trust' },
                                { icon: '🏆', label: 'Professional branding' },
                                { icon: '🎯', label: 'Better conversion rates' },
                                { icon: '🚀', label: 'Stronger marketing ROI' },
                            ].map((b) => (
                                <div key={b.label} className="text-center bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                                    <div className="text-2xl mb-2">{b.icon}</div>
                                    <p className="text-xs font-semibold text-gray-700">{b.label}</p>
                                </div>
                            ))}
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
                                Website Design for Small Business NZ — Frequently Asked Questions
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
                            Tell us about your business and goals. We&apos;ll review your current setup, recommend the right approach, and provide a clear plan for building a website that actually generates leads. No obligation. No jargon.
                        </p>

                        <LeadCaptureForm
                            formName="small-biz-website-lead"
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
                                <Link href="/affordable-websites-nz" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors">
                                    Affordable Websites NZ
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
