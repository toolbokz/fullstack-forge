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
    title: 'Ecommerce Websites NZ — High-Converting Online Stores for NZ Businesses | Fullstack Forge',
    description: 'Ecommerce websites NZ built to sell. Fast, SEO-ready, mobile-optimized online stores for New Zealand small businesses. Secure checkout, product SEO, and conversion-focused design.',
    alternates: {
        canonical: `${SITE_URL}/ecommerce-websites-nz`,
    },
    keywords: ['ecommerce websites nz', 'ecommerce web design nz', 'online store design nz', 'ecommerce websites for small business nz', 'seo-ready ecommerce websites nz', 'high-converting ecommerce websites new zealand'],
    openGraph: {
        title: 'Ecommerce Websites NZ — High-Converting Online Stores for NZ Businesses',
        description: 'Ecommerce websites built to sell. Fast, SEO-ready online stores for NZ small businesses with secure checkout and conversion-focused design.',
        url: `${SITE_URL}/ecommerce-websites-nz`,
        type: 'website',
        images: [{ url: '/assets/hero.png', width: 2560, height: 1440, alt: 'Ecommerce Websites NZ — Fullstack Forge' }],
    },
    twitter: {
        card: 'summary_large_image' as const,
        title: 'Ecommerce Websites NZ — Online Stores Built to Sell',
        description: 'Ecommerce websites built to sell. Fast, SEO-ready online stores for NZ small businesses.',
        images: ['/assets/hero.png'],
    },
}

const faqs = [
    { q: 'How much does an ecommerce website cost in NZ?', a: 'Ecommerce builds are custom-quoted based on your product count, features, and integrations. Contact us for a free consultation and we\'ll provide a fixed quote before you commit — no surprises. Builds start with a $500 deposit.' },
    { q: 'Which payment gateways do you support?', a: 'We integrate with Stripe, PayPal, and other major gateways. All transactions are secure, PCI compliant, and fully encrypted. Customers can pay with credit cards, debit cards, and digital wallets.' },
    { q: 'Can I manage products myself?', a: 'Absolutely. We set up an intuitive product management system so you can add, edit, and remove products on your own — including images, pricing, variants, and inventory levels.' },
    { q: 'Will my store work with Shopify or WooCommerce?', a: 'We build custom stores using Next.js for maximum performance and SEO — significantly faster than Shopify or WooCommerce. We can also integrate with Shopify\'s backend API if you prefer to keep your existing product catalogue.' },
    { q: 'How long does it take to launch an online store?', a: 'Most ecommerce stores launch within 7–14 business days depending on the number of products and custom features. Simpler stores with under 50 products can be ready in under a week.' },
    { q: 'Do you handle shipping and tax setup?', a: 'Yes. We configure NZ-specific shipping zones, flat-rate or calculated shipping, and GST handling so your store is compliant from day one.' },
    { q: 'What if I already have a store on Shopify/WooCommerce?', a: 'We can migrate your products, customers, and order history to a faster, custom-built platform. We\'ll audit your current store first (free) and recommend whether a migration or optimisation makes more sense.' },
    { q: 'Can I sell both physical and digital products?', a: 'Yes. Our stores support physical products with shipping, digital downloads with instant delivery, services with booking, and subscription products with recurring billing.' },
    { q: 'Do you include SEO for my online store?', a: 'Every ecommerce build includes on-page SEO foundations — optimised product pages, category structure, metadata, structured data for Google Shopping, image optimisation, and clean URLs. We build every store to give you the best possible shot at ranking for product searches.' },
    { q: 'Is hosting included?', a: 'We deploy all stores to Netlify — a fast, reliable hosting platform with a global CDN. Hosting is free for most sites. Your only ongoing cost is your domain name (roughly $20/year). No hidden monthly fees.' },
]

const storeFeatures = [
    { icon: '🛒', title: 'Conversion-Optimized Checkout', desc: 'Reduce cart abandonment with a frictionless, mobile-friendly checkout flow. Stripe and PayPal integration included.' },
    { icon: '📱', title: 'Mobile-First Shopping', desc: 'Over 70% of online shopping is mobile. Your store will look flawless and load instantly on any device — phones, tablets, desktops.' },
    { icon: '⚡', title: 'Lightning-Fast Load Times', desc: 'Built on Next.js and deployed to a global CDN. Sub-2-second load times that Google rewards with higher rankings.' },
    { icon: '🔒', title: 'Secure Payments', desc: 'Stripe, PayPal, or your preferred gateway — PCI compliant and fully encrypted. Customers buy with confidence.' },
    { icon: '🔍', title: 'Product & Category SEO', desc: 'Optimised product pages, structured data for Google Shopping, clean URLs, and category architecture that drives organic traffic.' },
    { icon: '📊', title: 'Analytics & Tracking', desc: 'Know exactly where your sales come from. Revenue tracking, funnel analysis, and customer journey insights baked in.' },
]

const productPageElements = [
    'High-quality product images',
    'Clear pricing in NZD',
    'Persuasive, benefit-focused descriptions',
    'Size, spec, or variation details',
    'Shipping and delivery information',
    'Return or guarantee details',
    'Related products and cross-sells',
    'Customer reviews where possible',
    'Clear add-to-cart buttons',
    'Mobile-optimised layout',
]

const commonProblems = [
    { icon: '❌', label: 'Outdated or generic store design' },
    { icon: '❌', label: 'Poor navigation and hard-to-find products' },
    { icon: '❌', label: 'Weak product pages with thin descriptions' },
    { icon: '❌', label: 'Confusing or multi-step checkout' },
    { icon: '❌', label: 'Low-trust presentation — no reviews or proof' },
    { icon: '❌', label: 'Slow loading speeds that kill sales' },
    { icon: '❌', label: 'Little SEO structure — invisible on Google' },
    { icon: '❌', label: 'Poor mobile experience on phones' },
]

export default async function EcommerceWebsitesNZPage() {
    const helpfulArticles = [
        { url: '/blog/best-website-builder-for-small-business-nz', label: 'Best Website Builder for Small Business NZ', imageQuery: 'website builder platform' },
        { url: '/blog/how-much-does-a-website-cost-in-nz', label: 'How Much Does a Website Cost in NZ? (2026 Price Guide)', imageQuery: 'website design pricing' },
        { url: '/blog/diy-vs-professional-website', label: 'DIY vs Professional Website', imageQuery: 'web developer coding laptop' },
        { url: '/blog/how-to-get-customers-from-your-website', label: 'How to Get Customers From Your Website', imageQuery: 'digital marketing strategy' },
        { url: '/blog/seo-for-small-business-nz', label: 'SEO for Small Business NZ — A Beginner\'s Guide', imageQuery: 'search engine optimization' },
    ]

    const [heroImg, storeImg, seoImg, trustImg, ...thumbnails] = await Promise.all([
        fetchUnsplashImage('ecommerce online store laptop mockup shopping'),
        fetchUnsplashImage('modern online shopping cart checkout'),
        fetchUnsplashImage('SEO analytics dashboard ecommerce growth'),
        fetchUnsplashImage('small business owner packaging products'),
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
            name: 'Ecommerce Website Design NZ',
            description: 'High-converting ecommerce websites for New Zealand businesses. SEO-ready online stores built to sell products, build trust, and grow your business online.',
            url: `${SITE_URL}/ecommerce-websites-nz`,
        }),
        faqSchema(faqs),
        breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Ecommerce Websites NZ', url: `${SITE_URL}/ecommerce-websites-nz` },
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
                                    Ecommerce Websites for NZ Businesses
                                </p>
                                <h1 className="text-3xl md:text-5xl lg:text-[3.4rem] font-bold text-white mb-6 leading-tight">
                                    Ecommerce Websites NZ That Help Your Business Sell More Online
                                </h1>
                                <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
                                    Fast, modern, SEO-ready online stores built to convert visitors into customers across New Zealand. Secure checkout, mobile-first design, and product SEO included.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <a href="#lead-form" className="btn btn-lg btn-cta-pulse">
                                        Get a Free Store Consultation
                                    </a>
                                    <Link href="/pricing" className="btn btn-outline-light btn-lg">
                                        View Pricing
                                    </Link>
                                </div>
                                <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-white/60 text-sm mt-8">
                                    <span>✓ Secure Checkout</span>
                                    <span>✓ Product SEO Included</span>
                                    <span>✓ Mobile-First Design</span>
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
                                                alt={heroImg.alt || 'Ecommerce website design on laptop'}
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
                                            <span className="text-6xl">🛒</span>
                                        </div>
                                    )}
                                    {/* Floating stat cards */}
                                    <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 hidden md:block">
                                        <p className="text-2xl font-extrabold text-emerald-600">+40%</p>
                                        <p className="text-xs text-gray-500 font-medium">Conversion Lift</p>
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
                                { stat: '7–14 Days', label: 'Store launch' },
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
                    3. WHY ECOMMERCE MATTERS IN NZ
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
                                            alt={trustImg.alt || 'Small business owner packaging orders'}
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
                                    Why Ecommerce Matters More Than Ever for NZ Businesses
                                </h2>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        Consumer behaviour has changed dramatically. People now compare products, prices, reviews, and delivery options online before making decisions. Even when they eventually buy in-store, <strong>their journey often starts with a search</strong>. Your online presence plays a major role in whether people trust your business enough to take the next step.
                                    </p>
                                    <p>
                                        A well-built ecommerce website gives your business more than an online storefront. It gives you the ability to attract customers through search, explain your products properly, create a better brand experience, and <strong>sell outside normal business hours</strong>. It gives you a presence that works even when you are not actively selling.
                                    </p>
                                    <p>
                                        For New Zealand businesses, ecommerce can expand your reach beyond a single suburb or city. A local business can serve customers nationwide if the website is built properly, shipping is handled well, and the store experience feels reliable.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <a href="#lead-form" className="text-blue-600 font-semibold hover:underline">
                                        Discuss your store project — free consultation →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    4. WHAT MAKES A HIGH-PERFORMING STORE — 6 FEATURES
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">What Makes the Difference</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                What Makes a High-Performing Ecommerce Website in NZ
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                A strong ecommerce website should present products clearly, load quickly, look professional, build trust, and remove friction from the buying journey. Every part of the site should support conversion.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {storeFeatures.map((item) => (
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
                    5. ECOMMERCE FOR SMALL BUSINESSES
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                            {/* Left — Content */}
                            <div className="flex-1">
                                <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Built for NZ Small Business</p>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                    Ecommerce Websites for Small Businesses in New Zealand
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Small businesses often need their ecommerce website to do a lot of heavy lifting. Your store may be the main place customers first discover your products, compare options, and decide whether your business feels legitimate. That means your website is not just a technical platform — it is a <strong>sales tool, a trust tool, and a branding tool</strong> all at once.
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    A small business ecommerce website should help answer questions quickly. What do you sell? Who is it for? Why should someone buy from you? How much does shipping cost? How long does delivery take? Can people trust your store?
                                </p>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    If your site does not answer those questions clearly, visitors bounce. If it does answer them clearly and persuasively, your conversion rate improves. The businesses that win online are not always the biggest — they are the ones with the clearest product messaging, the best store usability, and the easiest buying experience.
                                </p>
                                <h3 className="font-bold text-lg mb-4">A Good Ecommerce Site Helps You:</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        'Create a stronger first impression',
                                        'Make products easier to discover',
                                        'Increase customer trust',
                                        'Improve checkout completion',
                                        'Support SEO traffic growth',
                                        'Present a more professional image',
                                        'Make business growth more scalable',
                                        'Sell 24/7 across New Zealand',
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
                                {storeImg ? (
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                        <Image
                                            src={storeImg.url}
                                            alt={storeImg.alt || 'Online store checkout experience'}
                                            width={600}
                                            height={400}
                                            className="w-full h-auto object-cover"
                                            loading="lazy"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                        {storeImg.photographer && (
                                            <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm rounded px-2 py-0.5 text-white">
                                                <UnsplashAttribution photographer={storeImg.photographer} profileUrl={storeImg.profileUrl} />
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="aspect-[3/2] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl" />
                                )}
                                {/* Benefit callout */}
                                <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-6">
                                    <p className="text-blue-800 font-semibold text-sm leading-relaxed">
                                        💡 A smaller brand can still win by offering a cleaner, more trustworthy, and more enjoyable store experience than bigger retailers. Your ecommerce website is your competitive advantage.
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
                            Stop Losing Sales to a Slow, Outdated Online Store
                        </h2>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Every day with a poorly performing store means lost revenue. Get a free consultation and see exactly how a better ecommerce website can grow your business.
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
                    6. ECOMMERCE + SEO SYNERGY
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
                                            alt={seoImg.alt || 'Ecommerce SEO analytics dashboard'}
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
                                <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Design + SEO = Sales</p>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                                    How Ecommerce Web Design and SEO Work Together
                                </h2>
                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    <p>
                                        A visually attractive ecommerce site is valuable, but if customers cannot find it, growth becomes much harder. That is why SEO matters. <strong>Ecommerce SEO</strong> helps your products, category pages, and supporting content appear in search results when customers are actively looking to buy.
                                    </p>
                                    <p>
                                        SEO-ready ecommerce websites are built with structure in mind — clean category architecture, keyword-relevant collection pages, optimised product pages, internal linking, fast loading speeds, descriptive metadata, image optimisation, and logical navigation.
                                    </p>
                                    <p>
                                        This is why <strong>ecommerce web design NZ</strong> and SEO should work together from the beginning. A store that looks good but has weak structure will struggle. A store designed for both people and search engines is in a far better position to grow organically.
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
                    7. PRODUCT PAGES + CONVERSION SECTION
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Where Sales Are Won</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Product Pages Are Where Buying Decisions Happen
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Product pages are often the most important pages in an ecommerce website. They need to do far more than display a name, image, and price. A strong product page builds confidence and moves the customer toward purchase.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                            {productPageElements.map((el) => (
                                <div key={el} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                                    <span className="text-emerald-500 font-bold shrink-0 mt-0.5">✓</span>
                                    <span className="text-sm text-gray-700">{el}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 text-center mt-8 max-w-2xl mx-auto leading-relaxed">
                            This is where many ecommerce stores underperform. They rely on thin descriptions and weak visuals. <strong>Strong product pages can dramatically improve conversion rates</strong> by helping customers feel informed and confident.
                        </p>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    BASIC STORE vs HIGH-CONVERTING STORE
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Know the Difference</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Basic Online Store vs High-Converting Ecommerce Website
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Basic Store */}
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                                <div className="text-2xl mb-3">🏪</div>
                                <h3 className="text-lg font-bold mb-4 text-gray-600">Basic Online Store</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Simply displays products',
                                        'Generic template design',
                                        'Thin product descriptions',
                                        'Multi-step confusing checkout',
                                        'No upsell or cross-sell',
                                        'Weak SEO structure',
                                        'No social proof or reviews',
                                        'Slow and bloated',
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                                            <span className="text-gray-400 shrink-0 mt-0.5">–</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* High-Converting Store */}
                            <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200 relative">
                                <div className="absolute -top-3 right-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">WHAT WE BUILD</div>
                                <div className="text-2xl mb-3">🚀</div>
                                <h3 className="text-lg font-bold mb-4 text-blue-900">High-Converting Store</h3>
                                <ul className="space-y-3">
                                    {[
                                        'Guides people toward purchase',
                                        'Custom design that builds trust',
                                        'Persuasive, benefit-focused copy',
                                        'Streamlined one-page checkout',
                                        'Smart upsells and cross-sells',
                                        'SEO-optimised category + product pages',
                                        'Reviews, proof, and trust signals',
                                        'Lightning-fast on every device',
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
                                Common Problems With Underperforming Online Stores
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Many NZ online stores share the same issues. These problems quietly reduce sales — they create friction, confusion, and hesitation that drive customers away.
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
                            Investing in better <strong>ecommerce web design NZ</strong> helps remove those barriers and gives your store a stronger chance of converting traffic into customers.
                        </p>
                    </div>
                </section>

                {/* ═══════════════════════════════════════════════════
                    8. INFOGRAPHIC — VISITOR TO CUSTOMER JOURNEY
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">The 5 Pillars</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                What Makes Effective Ecommerce Web Design in NZ
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Every high-performing online store is built on these five foundations. Miss one, and sales suffer.
                            </p>
                        </div>

                        {/* Infographic — 5 Pillars */}
                        <div className="relative">
                            {/* Connecting line (desktop) — aligned to center of 64px icon boxes */}
                            <div className="hidden lg:block absolute left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 rounded-full z-0" style={{ top: '32px' }} />

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
                                {[
                                    { num: '01', title: 'Speed', desc: 'Sub-2s load times. Faster stores = higher revenue and better SEO rankings.', gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)' },
                                    { num: '02', title: 'Trust', desc: 'Professional design, secure checkout cues, reviews, and guarantees.', gradient: 'linear-gradient(135deg, #2563eb, #4f46e5)' },
                                    { num: '03', title: 'Product SEO', desc: 'Structured data, clean URLs, and optimised pages that Google can rank.', gradient: 'linear-gradient(135deg, #4f46e5, #7c3aed)' },
                                    { num: '04', title: 'Conversion', desc: 'Frictionless checkout, smart CTAs, and upsells that boost order value.', gradient: 'linear-gradient(135deg, #7c3aed, #9333ea)' },
                                    { num: '05', title: 'Mobile UX', desc: 'Thumb-friendly navigation, easy browsing, and smooth mobile checkout.', gradient: 'linear-gradient(135deg, #9333ea, #ec4899)' },
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

                        {/* Visitor → Customer Journey */}
                        <div className="mt-20">
                            <h3 className="text-xl font-bold text-center mb-10">The Journey From Visitor to Customer</h3>
                            <div className="flex flex-col md:flex-row items-stretch gap-0">
                                {[
                                    { step: 'Discovers Store', icon: '🔍', detail: 'Customer finds your products via Google or social media', bg: 'bg-blue-50 border-blue-200' },
                                    { step: 'Browses Products', icon: '🛍️', detail: 'Clean categories and filters make discovery easy', bg: 'bg-indigo-50 border-indigo-200' },
                                    { step: 'Builds Trust', icon: '🤝', detail: 'Reviews, professional design, and secure checkout cues', bg: 'bg-violet-50 border-violet-200' },
                                    { step: 'Adds to Cart', icon: '🛒', detail: 'Persuasive product pages with clear CTAs and upsells', bg: 'bg-purple-50 border-purple-200' },
                                    { step: 'Completes Purchase', icon: '✅', detail: 'Frictionless checkout with secure payment processing', bg: 'bg-emerald-50 border-emerald-200' },
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
                    TRUST + DESIGN SECTION
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Trust Drives Revenue</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Building Trust in Your Ecommerce Website
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Trust is central to ecommerce. People are being asked to spend money, provide their details, and rely on your business to deliver. If the site feels unclear or untrustworthy, conversion drops.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {[
                                { icon: '🎨', title: 'Professional Design', desc: 'Modern, polished visuals that signal credibility from the first second' },
                                { icon: '🔒', title: 'Secure Checkout', desc: 'SSL, PCI compliance, and payment badges that reassure buyers' },
                                { icon: '⭐', title: 'Reviews & Proof', desc: 'Customer testimonials and ratings that validate purchase decisions' },
                                { icon: '📋', title: 'Clear Policies', desc: 'Shipping, returns, and contact information that remove doubt' },
                                { icon: '📸', title: 'Quality Photography', desc: 'Professional product images that build confidence and showcase detail' },
                                { icon: '🏷️', title: 'Consistent Branding', desc: 'Cohesive colours, fonts, and tone that create a polished experience' },
                                { icon: '❓', title: 'Helpful FAQs', desc: 'Common questions answered proactively to remove purchase anxiety' },
                                { icon: '💬', title: 'Transparent Messaging', desc: 'Honest pricing, clear delivery times, and no hidden surprises' },
                            ].map((b) => (
                                <div key={b.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="text-2xl mb-3">{b.icon}</div>
                                    <h3 className="font-bold text-sm mb-2">{b.title}</h3>
                                    <p className="text-gray-500 text-xs leading-relaxed">{b.desc}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 text-center mt-10 max-w-2xl mx-auto text-sm leading-relaxed">
                            For small businesses in NZ, trust is often one of the biggest differentiators. Customers may not know your brand yet, so your website has to bridge that gap quickly.
                        </p>
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
                                From Idea to Live Store — In 3 Steps
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                No 12-week timelines. No endless revisions. Here&apos;s how we get your online store live and generating sales.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { num: '1', title: 'We Consult & Plan', desc: 'Tell us about your products and goals. We\'ll scope the project, plan your store structure, and provide a fixed quote before you commit.' },
                                { num: '2', title: 'We Build Your Store', desc: 'We design and build your custom ecommerce site — product pages, checkout, shipping, payments, and SEO all configured for your business.' },
                                { num: '3', title: 'You Start Selling', desc: 'We deploy to ultra-fast hosting (free), connect your domain, and submit to Google. Most stores are live within 7–14 days.' },
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
                                SEO and Web Design for Online Stores
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Watch this overview of how SEO and web design work together to help small businesses get found online, build trust, and generate more sales from their ecommerce website.
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
                            Video: SEO fundamentals and web design best practices for small businesses and online stores.
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
                                Why Local Relevance Matters for Ecommerce in NZ
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                Even though ecommerce can reach wider audiences, local relevance still matters. New Zealand customers want clarity around shipping, support, service quality, and trust.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
                            {[
                                { icon: '🇳🇿', title: 'NZ-Specific Wording', desc: 'Content, tone, and messaging that feel local and relatable' },
                                { icon: '🚚', title: 'NZ Shipping Info', desc: 'Delivery times and zones tailored to New Zealand customers' },
                                { icon: '💵', title: 'Pricing in NZD', desc: 'All prices displayed in New Zealand Dollars — no confusion' },
                                { icon: '🛡️', title: 'Local Trust Signals', desc: 'NZ business credentials, reviews, and relatable proof' },
                                { icon: '📞', title: 'Local Support', desc: 'Contact and messaging that feel accessible and practical' },
                                { icon: '🎯', title: 'NZ Market Alignment', desc: 'Content and products positioned for the local market' },
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
                                Real Ecommerce Examples for NZ Businesses
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                These aren&apos;t mockups. They&apos;re live sites built for real businesses. Click through and see exactly what you&apos;d get.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                            {[
                                {
                                    tag: 'Online Retail',
                                    title: 'Comfy Store',
                                    desc: 'A full-featured ecommerce store with product filtering, wishlist, and optimised checkout flow. 40% faster than their previous platform with significantly higher conversion rates.',
                                    stats: [{ val: '40%', label: 'conversion lift' }, { val: '<2s', label: 'load time' }],
                                    url: 'https://comfy-store-nz.netlify.app/',
                                },
                                {
                                    tag: 'Trades & Services',
                                    title: 'Builder Business Site',
                                    desc: 'A construction business with an integrated quote request system and project gallery. SEO-optimised service pages drive a consistent flow of qualified leads.',
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
                    LONG-TERM GROWTH
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="text-center mb-14">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Beyond Launch Day</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Long-Term Growth Through Better Ecommerce
                            </h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                A professionally built ecommerce website is not just for today&apos;s sales. It supports long-term growth and becomes a core business asset.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {[
                                { icon: '📈', title: 'Increase Conversions', desc: 'Better UX, trust, and product pages that turn more browsers into buyers' },
                                { icon: '🛒', title: 'Reduce Abandonment', desc: 'Streamlined checkout and clear shipping that prevent drop-offs' },
                                { icon: '💎', title: 'Higher Order Value', desc: 'Smart upsells, cross-sells, and bundles that increase basket size' },
                                { icon: '🔍', title: 'Grow Search Visibility', desc: 'SEO-optimised structure that attracts organic product searches' },
                                { icon: '🏆', title: 'Professional Branding', desc: 'A store that reflects the quality of your products and business' },
                                { icon: '😊', title: 'Better Experience', desc: 'A store that customers enjoy using and return to again' },
                                { icon: '📢', title: 'Better Ad Performance', desc: 'Landing pages that convert paid traffic more effectively' },
                                { icon: '🚀', title: 'Scale Confidently', desc: 'A solid foundation for product expansion and marketing campaigns' },
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
                    10. FAQ
                ═══════════════════════════════════════════════════ */}
                <section className="py-20 md:py-24">
                    <div className="max-w-2xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Common Questions</p>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Ecommerce Websites NZ — Frequently Asked Questions
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
                        <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">Ready to Sell More?</p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Get a Free Ecommerce Consultation
                        </h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Tell us about your products and goals. We&apos;ll review your current setup, recommend the right approach, and provide a clear plan for building an online store that actually sells. No obligation. No jargon.
                        </p>

                        <LeadCaptureForm
                            formName="ecommerce-nz-lead"
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
                                <Link href="/affordable-websites-nz" className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors">
                                    Affordable Websites NZ
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
