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
    title: 'Web Design NZ — Lead-Generating Websites for Small Businesses & Tradies | Fullstack Forge',
    description: 'Professional web design in New Zealand that generates leads, calls, and sales for tradies and small businesses. SEO-ready, conversion-focused, fast. $500 deposit to start.',
    alternates: {
        canonical: `${SITE_URL}/web-design-christchurch`,
    },
    keywords: ['web design nz', 'small business web design nz', 'tradie websites nz', 'lead-generating websites nz', 'seo-ready web design nz', 'web design for tradies new zealand'],
    openGraph: {
        title: 'Web Design NZ — Lead-Generating Websites for NZ Small Businesses & Tradies',
        description: 'Professional web design that ranks on Google, converts visitors into enquiries, and grows your business. Built for NZ tradies and small businesses.',
        url: `${SITE_URL}/web-design-christchurch`,
        type: 'website',
        images: [{ url: '/assets/hero.png', width: 2560, height: 1440, alt: 'Web Design NZ — Fullstack Forge' }],
    },
    twitter: {
        card: 'summary_large_image' as const,
        title: 'Web Design NZ — Lead-Generating Websites for NZ Businesses',
        description: 'Professional web design that ranks on Google and converts visitors into leads. Built for NZ tradies and small businesses.',
        images: ['/assets/hero.png'],
    },
}

const faqs = [
    { q: 'How much does web design cost in New Zealand?', a: 'Professional web design in NZ ranges from $500 for a basic freelancer site to $15,000+ from a large agency. At Fullstack Forge, website builds start with a $500 deposit — we then scope your project and provide a fixed total price before you commit. Local SEO and lead capture are included with every build.' },
    { q: 'How long does it take to build a website?', a: 'Most agencies take 6–12 weeks. We deliver in 5–7 business days. We achieve this by using proven, pre-built designs that we customise for your brand — rather than starting from scratch every time. Starter sites can be ready in as little as 5 days.' },
    { q: 'Will my website actually rank on Google in my area?', a: 'Every site we build includes on-page SEO foundations — proper heading structure, meta tags, structured data, fast loading, and mobile optimisation. Local SEO targeting for your city and region is included with every website build. We can\'t guarantee #1 (no one honestly can), but we build every site to give you the best possible shot at ranking for local searches.' },
    { q: 'Do I need to provide content and images?', a: 'It helps if you have photos of your work, team, or van — real images outperform stock photos every time. For written content, we\'ll guide you through a simple questionnaire to capture your key messages, and we handle the rest. You review and approve everything before launch.' },
    { q: 'What is the difference between a nice website and a lead-generating website?', a: 'A nice website gets compliments. A lead-generating website gets enquiries. Every section on a lead-generating site is designed with intention — strategic calls to action, trust signals near decision points, benefit-driven copy, and conversion-focused layouts. That is the standard we build to.' },
    { q: 'How do web design and SEO work together?', a: 'Web design and SEO should never be separate. A well-designed site that cannot rank is limited. A site that ranks but does not convert is also limited. We build every website with proper heading hierarchy, clean URLs, internal linking, mobile responsiveness, fast performance, image optimisation, keyword-relevant pages, and strong metadata from day one.' },
    { q: 'What happens if I need changes after the site launches?', a: 'Our monthly SEO plan includes ongoing updates and support. Every build includes a handoff walkthrough so you understand how to make basic updates. We also offer one-off support for businesses that want changes down the track.' },
    { q: 'I already have a website — can you fix it?', a: 'Absolutely. We\'ll audit your current site first (for free), identify what\'s working and what\'s not, and recommend whether an optimisation or a full rebuild makes more sense. Many NZ tradies come to us after outgrowing their DIY site or being let down by another provider.' },
    { q: 'Do you work with businesses outside Christchurch?', a: 'Yes — we work with tradies and local businesses right across New Zealand. Auckland, Wellington, Hamilton, Tauranga, Dunedin, and everywhere in between. Everything is done remotely, so your location doesn\'t matter. We optimise your site for your specific town or region.' },
    { q: 'Do you offer hosting?', a: 'We deploy all sites to Netlify — a fast, reliable hosting platform used by major companies worldwide. Hosting is free for most sites. Your only ongoing cost is your domain name (roughly $20/year). No hidden monthly fees.' },
]

const whyItMatters = [
    { icon: '⚡', title: 'Speed That Keeps Visitors', desc: 'Sites built on modern technology and deployed to a global CDN. Under 1-second load times. No WordPress bloat, no heavy page builders — just clean, fast code that Google rewards with higher rankings.' },
    { icon: '🔍', title: 'Local SEO That Ranks', desc: 'Every page gets unique meta titles, proper heading hierarchy, schema markup, image optimisation, and clean URLs. We build the technical foundation that makes ranking possible for your specific town or city.' },
    { icon: '🎯', title: 'Conversion Design That Sells', desc: 'Every page is designed to guide visitors toward one action: contacting you. Clear headlines, click-to-call buttons, trust signals, testimonials, and lead capture forms that target 5–10x the industry average.' },
    { icon: '📱', title: 'Mobile-First Layouts', desc: 'Over 70% of NZ web traffic is mobile. Your site will look flawless and load instantly on any device — phones, tablets, desktops. No pinching, no zooming, no frustration.' },
    { icon: '🛡️', title: 'Trust Signals That Convert', desc: 'Reviews, credentials, results, professional imagery, and clear service descriptions placed strategically to build confidence at every scroll point.' },
    { icon: '📊', title: 'Analytics & Tracking', desc: 'Know exactly where your visitors come from, which pages they view, and how they convert. Data-driven insights so you can measure real ROI from your website.' },
]

const tradieFeatures = [
    'Location-based service pages',
    'Clear service lists with pricing guides',
    'Mobile-first click-to-call functionality',
    'Trust-building project photos and galleries',
    'Quote request and lead capture forms',
    'Customer testimonials and reviews',
    'FAQ sections that handle objections',
    'SEO structure for local searches',
    'Google Business Profile integration',
    'Fast loading on any connection',
]

const genericProblems = [
    { icon: '❌', label: 'Weak messaging that doesn\'t speak to your customer' },
    { icon: '❌', label: 'Poor mobile layouts that frustrate visitors' },
    { icon: '❌', label: 'Slow loading speeds that drive people away' },
    { icon: '❌', label: 'Low-trust design that makes your business look unestablished' },
    { icon: '❌', label: 'Bad navigation and no clear calls to action' },
    { icon: '❌', label: 'Little SEO structure — invisible on Google' },
    { icon: '❌', label: 'Stock-standard visuals with no personality' },
    { icon: '❌', label: 'Thin service pages that say nothing useful' },
]

export default async function WebDesignNZPage() {
    const helpfulArticles = [
        { url: '/blog/how-much-does-a-website-cost-in-nz', label: 'How Much Does a Website Cost in NZ? (2026 Price Guide)', imageQuery: 'website design pricing' },
        { url: '/blog/seo-for-small-business-nz', label: 'SEO for Small Business NZ — A Beginner\'s Guide', imageQuery: 'search engine optimization' },
        { url: '/blog/how-to-get-customers-from-your-website', label: 'How to Get Customers From Your Website', imageQuery: 'digital marketing strategy' },
        { url: '/blog/website-for-tradies-nz', label: 'Why Every Tradie in NZ Needs a Website', imageQuery: 'construction worker tools' },
        { url: '/blog/website-for-cleaning-business-nz', label: 'Website for Cleaning Business NZ', imageQuery: 'professional cleaning service' },
    ]

    const [heroImg, tradieImg, seoImg, smallBizImg, ...thumbnails] = await Promise.all([
        fetchUnsplashImage('modern web design workspace laptop mockup'),
        fetchUnsplashImage('new zealand tradesperson construction worker'),
        fetchUnsplashImage('SEO analytics dashboard growth'),
        fetchUnsplashImage('small business owner professional office'),
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
            name: 'Web Design New Zealand',
            description: 'Professional web design services across New Zealand. Lead-generating, SEO-ready websites for tradies and local businesses that rank on Google and convert visitors into enquiries.',
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
                                    Web Design for NZ Businesses &amp; Tradies
                                </p>
                                <h1 className="text-3xl md:text-5xl lg:text-[3.4rem] font-bold text-white mb-6 leading-tight">
                                    Web Design NZ That Helps Small Businesses and Tradies Win More Leads
                                </h1>
                                <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
                                    Fast, SEO-ready websites built to rank on Google, convert visitors into enquiries, and grow your business in New Zealand. No templates. No fluff. Just results.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <a href="#lead-form" className="btn btn-lg btn-cta-pulse">
                                        Get a Free Website Audit
                                    </a>
                                    <Link href="/pricing" className="btn btn-outline-light btn-lg">
                                        View Pricing
                                    </Link>
                                </div>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-white/60 text-sm mt-8">
                                    <span>✓ 7-Day Delivery</span>
                                    <span>✓ Local SEO Included</span>
                                    <span>✓ $500 Deposit to Start</span>
                                    <span>✓ No Monthly Lock-In</span>
                                </div>
                            </div>
                            {/* Right — Hero Image */}
                            <div className="flex-1 w-full max-w-lg lg:max-w-none">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                    {heroImg ? (
                                        <>
                                            <Image
                                                src={heroImg.url}
                                                alt={heroImg.alt || 'Modern web design workspace'}
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
                                        <p className="text-2xl font-extrabold text-blue-600">98%</p>
                                        <p className="text-xs text-gray-500 font-medium">SEO Score</p>
                                    </div>
                                    <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 hidden md:block">
                                        <p className="text-2xl font-extrabold text-emerald-600">&lt;1s</p>
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
                                { stat: '5–7 Days', label: 'Average delivery' },
                                { stat: '$500', label: 'Deposit to start' },
                                { stat: '98+', label: 'Google PageSpeed' },
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
                    3. WHY WEB DESIGN MATTERS IN NZ
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                            {/* Left — Image */}
                            <div className="flex-1 w-full">
                                {smallBizImg ? (
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                        <Image
                                            src={smallBizImg.url}
                                            alt={smallBizImg.alt || 'Small business owner in New Zealand'}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto object-cover"
                                            loading="lazy"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                        {smallBizImg.photographer && (
                                            <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm rounded px-2 py-0.5 text-white">
                                                <UnsplashAttribution photographer={smallBizImg.photographer} profileUrl={smallBizImg.profileUrl} />
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
                                    Why Web Design Matters More Than Ever in New Zealand
                                </h2>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        Before most people call a business, they search online first. They compare websites, read reviews, look at service pages, and decide very quickly whether a business feels credible enough to contact. In many cases, <strong>your website forms a prospect&apos;s first impression</strong> before they ever speak to you.
                                    </p>
                                    <p>
                                        That means your site has to load quickly, look trustworthy, be easy to navigate, explain your offer clearly, and make it obvious how to take the next step. If your website is outdated, cluttered, too slow, or poorly written, people leave — they go back to Google and click on a competitor.
                                    </p>
                                    <p>
                                        For businesses in New Zealand, this is especially important in local service industries. Tradies compete in highly practical buying situations — a customer has a job to get done, a problem to solve, or a quote to request. They are not looking to admire a website for five minutes. They are looking for <strong>reassurance that your business is professional, legitimate, and worth contacting</strong>.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <a href="#lead-form" className="text-blue-600 font-semibold hover:underline">
                                        See how your website stacks up — free audit →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    4. WHAT MAKES A HIGH-PERFORMING WEBSITE — 6 PILLARS
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">What Makes the Difference</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                What Makes a High-Performing Website in NZ
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                A strong website is not built around appearance alone. It is built around performance — visual design, user experience, messaging, speed, and SEO working together.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {whyItMatters.map((item) => (
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
                    5. WEB DESIGN FOR TRADIES + SMALL BUSINESSES
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                            {/* Left — Tradie websites */}
                            <div className="flex-1">
                                <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Built for Your Industry</p>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                    Web Design for Tradies and Small Businesses in New Zealand
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Tradies need websites that are practical, clear, and focused on enquiries. When someone needs a plumber, they care about speed, trust, service area, and confidence the job will be handled properly. When someone is comparing builders or landscapers, they want proof of quality and reassurance of credibility. Your website should answer those concerns quickly.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    For small businesses, your website often has to do even more — educate visitors, build trust, explain multiple services, and move people through a longer buying process. The best websites guide the visitor smoothly from awareness to trust to action.
                                </p>
                                <h3 className="font-bold text-lg mb-4">What the Best NZ Tradie Websites Include:</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {tradieFeatures.map((f) => (
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
                                            alt={tradieImg.alt || 'New Zealand tradesperson'}
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
                                        💡 A good website can improve first impressions, increase enquiry rates, support SEO rankings, help you compete with larger brands, and improve your conversion rate from traffic you already receive — sometimes a business doesn&apos;t need more traffic first. It needs a better website.
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
                            Stop Losing Jobs to Competitors With Better Websites
                        </h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Every week without a proper online presence means jobs going to someone else. Get a free audit and see exactly what&apos;s holding your site back.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#lead-form" className="btn btn-lg !bg-white !text-blue-600 hover:!bg-gray-100 font-bold">
                                Get My Free Audit
                            </a>
                            <Link href="/pricing" className="btn btn-outline-light btn-lg">
                                See Pricing
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    6. WEB DESIGN + SEO SYNERGY
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
                                <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Design + SEO = Results</p>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                    How Web Design and SEO Work Together
                                </h2>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        Web design and SEO should never be treated as separate things. A well-designed website that cannot rank is limited. A site that ranks but does not convert is also limited. The real goal is to build a website that supports <strong>both visibility and lead generation</strong>.
                                    </p>
                                    <p>
                                        SEO-ready web design means your site is built with the right technical and structural foundations from the start — proper heading hierarchy, clean URLs, internal linking, mobile responsiveness, fast performance, image optimisation, crawlable content, keyword-relevant pages, strong metadata, and clear information architecture.
                                    </p>
                                    <p>
                                        If you want to rank for terms like <strong>web design NZ</strong>, <strong>small business web design NZ</strong>, or <strong>tradie websites NZ</strong>, your page structure matters. This is why the best web design projects are built with SEO in mind from day one. Retrofitting SEO onto a poorly structured site is always harder than building it in properly.
                                    </p>
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
                    7. LEAD-GENERATION BENEFITS
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Beyond Looking Good</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                The Difference Between a Nice Website and a Lead-Generating Website
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                A nice website may get compliments. A lead-generating website gets enquiries. Here&apos;s what a results-focused website supports for your business over time.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {[
                                { icon: '📈', title: 'Better Lead Flow', desc: 'Consistent enquiries from people actively searching for what you do' },
                                { icon: '🔍', title: 'Stronger SEO Presence', desc: 'Rank higher on Google for local searches in your area' },
                                { icon: '🤝', title: 'More Credibility', desc: 'Look professional and established to every visitor' },
                                { icon: '💰', title: 'Higher Conversion Rate', desc: 'Turn more existing traffic into phone calls and quote requests' },
                                { icon: '📍', title: 'Local Visibility', desc: 'Show up in Google Maps and the local 3-pack' },
                                { icon: '🏆', title: 'Stronger Brand', desc: 'A website that reflects the quality of your work' },
                                { icon: '📢', title: 'Better Ad Performance', desc: 'Landing pages that convert paid traffic more effectively' },
                                { icon: '🚀', title: 'Growth Foundation', desc: 'A solid base for SEO campaigns, content, and service expansion' },
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
                    COMMON PROBLEMS WITH CHEAP WEBSITES
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-3">Warning Signs</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Common Problems With Cheap or Generic Websites
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Many NZ small businesses end up with websites that simply do not perform. They were built cheaply, rushed, or based on generic templates.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                            {genericProblems.map((p) => (
                                <div key={p.label} className="flex items-start gap-3 bg-red-50/50 rounded-xl p-4 border border-red-100/50">
                                    <span className="text-red-500 shrink-0 mt-0.5">{p.icon}</span>
                                    <span className="text-sm text-gray-700">{p.label}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 text-center mt-8 max-w-2xl mx-auto leading-relaxed">
                            The result is a site that exists but does not help the business grow. This is one of the biggest reasons NZ businesses invest in professional <strong>web design NZ</strong> services — they want a site that reflects their professionalism and actively supports enquiries.
                        </p>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    8. INFOGRAPHIC — 5 PILLARS + VISITOR TO LEAD JOURNEY
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">The 5 Pillars</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                What Makes Effective Web Design in NZ
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Every high-performing website is built on these five foundations. Miss one, and the entire system underperforms.
                            </p>
                        </div>

                        {/* Infographic — 5 Pillars */}
                        <div className="relative">
                            {/* Connecting line (desktop) — aligned to center of 64px icon boxes */}
                            <div className="hidden lg:block absolute left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 rounded-full z-0" style={{ top: '32px' }} />

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                                {[
                                    { num: '01', title: 'Speed', desc: 'Under 2s load time. Fast sites keep visitors and rank higher.', gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)' },
                                    { num: '02', title: 'Trust', desc: 'Professional design, real reviews, credentials, and social proof.', gradient: 'linear-gradient(135deg, #2563eb, #4f46e5)' },
                                    { num: '03', title: 'SEO', desc: 'Built-in technical SEO so Google understands and ranks your pages.', gradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)' },
                                    { num: '04', title: 'Conversion', desc: 'Strategic CTAs, lead forms, and frictionless paths to contact.', gradient: 'linear-gradient(135deg, #7c3aed, #9333ea)' },
                                    { num: '05', title: 'Content', desc: 'Clear, benefit-driven copy that speaks to real customer intent.', gradient: 'linear-gradient(135deg, #9333ea, #ec4899)' },
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

                        {/* Visitor → Lead Journey */}
                        <div className="mt-20">
                            <h3 className="text-xl font-bold text-center mb-10">The Journey From Visitor to Lead</h3>
                            <div className="flex flex-col md:flex-row items-stretch gap-0">
                                {[
                                    { step: 'Searches Google', icon: '🔍', detail: 'Customer searches "plumber near me" or "web design NZ"', bg: 'bg-blue-50 border-blue-200' },
                                    { step: 'Finds Your Site', icon: '🌐', detail: 'SEO-optimised pages rank on page 1 of Google', bg: 'bg-indigo-50 border-indigo-200' },
                                    { step: 'Trusts Your Brand', icon: '🤝', detail: 'Professional design, reviews, and credentials build confidence', bg: 'bg-violet-50 border-violet-200' },
                                    { step: 'Takes Action', icon: '📞', detail: 'Click-to-call, quote forms, and clear CTAs make contact easy', bg: 'bg-purple-50 border-purple-200' },
                                    { step: 'Becomes a Lead', icon: '✅', detail: 'You receive an enquiry from a qualified, ready-to-hire customer', bg: 'bg-emerald-50 border-emerald-200' },
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
                    HOW IT WORKS — 3 STEPS
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 text-white" style={{ background: 'linear-gradient(135deg, #0b1220 0%, #0d1f3c 50%, #0b2e6e 100%)' }}>
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">How It Works</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                From Invisible to Fully Booked — In 3 Steps
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                No 12-week timelines. No endless revisions. Here&apos;s how we get your website live and generating jobs.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { num: '1', title: 'We Audit Your Site', desc: 'Run our free audit and we\'ll show you exactly what\'s broken — speed, SEO, mobile experience, and lead capture. No guesswork, just data.' },
                                { num: '2', title: 'We Build or Fix Your Site', desc: 'We customise a proven design for your brand, optimise for your local area, set up lead capture, and configure local SEO for your town or city.' },
                                { num: '3', title: 'You Start Getting Jobs', desc: 'We deploy to ultra-fast hosting (free), connect your domain, and submit to Google. Most sites are live within 7 days.' },
                            ].map((step) => (
                                <div key={step.num} className="text-center">
                                    <div className="w-14 h-14 rounded-full bg-blue-500 text-white text-xl font-bold flex items-center justify-center mx-auto mb-5">{step.num}</div>
                                    <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <a href="#lead-form" className="btn btn-lg">Start With a Free Audit</a>
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
                                Watch this overview of how SEO and web design work together to help small businesses get found online, build trust, and generate more leads.
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
                    WE WORK ACROSS NZ
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Nationwide Service</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Web Design for Businesses Right Across New Zealand
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Based in Christchurch, built for everywhere. We work remotely with tradies and local businesses in every corner of NZ. Local relevance helps with both user trust and SEO.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                            {[
                                'Auckland', 'Wellington', 'Christchurch', 'Hamilton',
                                'Tauranga', 'Dunedin', 'Napier / Hastings', 'Palmerston North',
                                'Nelson', 'Rotorua', 'New Plymouth', 'Invercargill',
                                'Whangarei', 'Queenstown', 'Kapiti Coast', 'Whanganui',
                            ].map((city) => (
                                <div key={city} className="bg-white rounded-lg px-4 py-3 text-center border border-gray-100 shadow-sm hover:border-blue-200 transition-colors">
                                    <span className="text-sm font-medium text-gray-700">{city}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-400 text-sm text-center mt-8">
                            Don&apos;t see your town? No worries — we work with businesses anywhere in New Zealand. We optimise your site for your specific location.
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
                                Real Web Design Examples for NZ Businesses
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                These aren&apos;t mockups. They&apos;re live sites built for real businesses. Click through and see exactly what you&apos;d get.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    tag: 'Cleaning Business',
                                    title: 'Cleaning Services Site',
                                    desc: 'A residential and commercial cleaning business that went from zero online presence to 20+ monthly enquiries. Features service area pages, quote request form, and before/after galleries.',
                                    stats: [{ val: '20+', label: 'leads/month' }, { val: '5 days', label: 'to launch' }],
                                    url: 'https://cleaning-site-001.netlify.app/',
                                },
                                {
                                    tag: 'Plumbing & Trades',
                                    title: 'PlumbFix Services',
                                    desc: 'A plumber who was relying entirely on word-of-mouth. New site captures local search traffic with service pages for each speciality and click-to-call on mobile.',
                                    stats: [{ val: 'Page 1', label: 'Google ranking' }, { val: '3x', label: 'more enquiries' }],
                                    url: 'https://plumbfix-site.netlify.app/',
                                },
                                {
                                    tag: 'Builders & Contractors',
                                    title: 'Builder Business Site',
                                    desc: 'A construction business that needed more than a basic template. Project galleries, quote request forms, and SEO-optimised service pages drive consistent enquiries.',
                                    stats: [{ val: '1.2s', label: 'load time' }, { val: '40%', label: 'more quotes' }],
                                    url: 'https://builders-app.netlify.app/',
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
                    PRICING COMPARISON
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-3xl mx-auto px-4">
                        <div className="text-center mb-10">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Transparent Pricing</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Web Design Pricing for NZ Businesses
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Choosing the right web design partner in NZ? Don&apos;t just compare on price or visual style — compare on outcomes, SEO capability, and conversion focus.
                            </p>
                        </div>
                        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                            <table className="w-full border-collapse text-sm">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-200">
                                        <th className="text-left py-4 px-5 font-bold text-gray-900">Provider</th>
                                        <th className="text-left py-4 px-5 font-bold text-gray-900">Typical Cost</th>
                                        <th className="text-left py-4 px-5 font-bold text-gray-900">Timeline</th>
                                        <th className="text-left py-4 px-5 font-bold text-gray-900">Ongoing Fees</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600">
                                    <tr className="border-b border-gray-100">
                                        <td className="py-4 px-5">Large NZ Agency</td>
                                        <td className="py-4 px-5">$8,000–$25,000</td>
                                        <td className="py-4 px-5">8–16 weeks</td>
                                        <td className="py-4 px-5">$50–$200/month</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-4 px-5">Freelancer</td>
                                        <td className="py-4 px-5">$1,500–$5,000</td>
                                        <td className="py-4 px-5">4–8 weeks</td>
                                        <td className="py-4 px-5">Varies</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="py-4 px-5">DIY (Wix/Squarespace)</td>
                                        <td className="py-4 px-5">$0–$500 + time</td>
                                        <td className="py-4 px-5">Weeks of struggling</td>
                                        <td className="py-4 px-5">$20–$50/month</td>
                                    </tr>
                                    <tr className="bg-blue-50/60 font-semibold text-gray-900">
                                        <td className="py-4 px-5 font-bold">Fullstack Forge</td>
                                        <td className="py-4 px-5 font-bold text-blue-600">$500 deposit</td>
                                        <td className="py-4 px-5 font-bold text-blue-600">5–7 days</td>
                                        <td className="py-4 px-5 font-bold text-blue-600">$0/month</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-400 text-sm mt-6 text-center">
                            All prices in NZD. See our full <Link href="/pricing" className="text-blue-600 hover:underline">pricing page</Link> for detailed feature breakdowns,
                            or check our guide on <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-blue-600 hover:underline">how much a website costs in NZ</Link>.
                        </p>
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
                                Web Design NZ — Frequently Asked Questions
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
                        <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">Ready to Grow?</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Get More Leads From Your Website
                        </h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Tell us about your business and we&apos;ll send you a free, personalised audit showing exactly what&apos;s holding your website back — and how to fix it. No obligation. No jargon. Just a clear plan.
                        </p>

                        <LeadCaptureForm
                            formName="web-design-nz-lead"
                            ctaText="Get My Free Audit"
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
                                <Link href="/website-design-for-small-business" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors">
                                    Website Design for Small Business NZ
                                </Link>
                                <Link href="/affordable-websites-nz" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors">
                                    Affordable Websites NZ
                                </Link>
                                <Link href="/ecommerce-websites-nz" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors">
                                    E-Commerce Websites NZ
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
