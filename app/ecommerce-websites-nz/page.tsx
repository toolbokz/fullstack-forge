import type { Metadata } from 'next'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import ServicePageLayout from '../../components/ServicePageLayout'
import { searchPixabayVideos } from '../../lib/pixabay'
import { fetchUnsplashImage } from '../../lib/unsplash'
import { serviceSchema, faqSchema, breadcrumbSchema, SITE_URL } from '../../lib/schema'

export const metadata: Metadata = {
    title: 'E-Commerce Websites NZ — Online Stores Built to Sell | Fullstack Forge',
    description: 'Custom e-commerce websites for New Zealand businesses. Fast-loading, mobile-optimized online stores with secure checkout — built to convert browsers into buyers.',
    alternates: {
        canonical: `${SITE_URL}/ecommerce-websites-nz`,
    },
    openGraph: {
        title: 'E-Commerce Websites NZ — Online Stores Built to Sell',
        description: 'Custom e-commerce websites for NZ businesses. Fast, secure, conversion-optimized online stores.',
        url: `${SITE_URL}/ecommerce-websites-nz`,
        type: 'website',
    },
}

const features = [
    { icon: '🛒', title: 'Conversion-Optimized Checkout', description: 'Reduce cart abandonment with a frictionless, mobile-friendly checkout flow. Stripe and PayPal integration included.' },
    { icon: '📱', title: 'Mobile-First Shopping', description: 'Over 70% of online shopping is mobile. Your store will look flawless and load instantly on any device.' },
    { icon: '⚡', title: 'Lightning-Fast Load Times', description: 'Every second of load time costs you sales. We build on Next.js and deploy to a global CDN — stores load in under 2 seconds.' },
    { icon: '🔒', title: 'Secure Payments', description: 'Stripe, PayPal, or your preferred gateway — all PCI compliant and fully encrypted. Customers buy with confidence.' },
    { icon: '🔍', title: 'Product & Category SEO', description: 'Optimized product pages, structured data for Google Shopping, clean URLs, and category architecture that drives organic traffic.' },
    { icon: '📊', title: 'Analytics & Conversion Tracking', description: 'Know exactly where your sales come from. Revenue tracking, funnel analysis, and customer journey insights baked in.' },
    { icon: '📦', title: 'Product Management', description: 'Add, edit, and manage products through an intuitive interface. Inventory tracking, variants, and bulk operations supported.' },
    { icon: '🎯', title: 'Upsell & Cross-Sell', description: 'Related products, "customers also bought", and cart upsells to increase your average order value automatically.' },
]

const faqs = [
    { q: 'How much does an e-commerce website cost in NZ?', a: 'E-commerce builds are custom-quoted based on your product count, features, and integrations. Contact us for a free consultation and we\'ll provide a fixed quote before you commit — no surprises.' },
    { q: 'Which payment gateways do you support?', a: 'We integrate with Stripe, PayPal, and other major gateways. All transactions are secure, PCI compliant, and fully encrypted. Customers can pay with credit cards, debit cards, and digital wallets.' },
    { q: 'Can I manage products myself?', a: 'Absolutely. We set up an intuitive product management system so you can add, edit, and remove products on your own — including images, pricing, variants, and inventory levels.' },
    { q: 'Will my store work with Shopify or WooCommerce?', a: 'We build custom stores using Next.js for maximum performance and SEO — significantly faster than Shopify or WooCommerce. We can also integrate with Shopify\'s backend API if you prefer to keep your existing product catalog.' },
    { q: 'How long does it take to launch an online store?', a: 'Most e-commerce stores launch within 7–14 business days depending on the number of products and custom features. Simpler stores with under 50 products can be ready in under a week.' },
    { q: 'Do you handle shipping and tax setup?', a: 'Yes. We configure NZ-specific shipping zones, flat-rate or calculated shipping, and GST handling so your store is compliant from day one.' },
    { q: 'What if I already have a store on Shopify/WooCommerce?', a: 'We can migrate your products, customers, and order history to a faster, custom-built platform. We\'ll audit your current store first (free) and recommend whether a migration or optimisation makes more sense.' },
    { q: 'Can I sell both physical and digital products?', a: 'Yes. Our stores support physical products with shipping, digital downloads with instant delivery, services with booking, and subscription products with recurring billing.' },
]

const caseStudies = [
    {
        name: 'Comfy Store', industry: 'Online Retail · NZ',
        description: 'A full-featured e-commerce store with product filtering, wishlist, and optimized checkout flow. 40% faster than their previous platform with significantly higher conversion rates.',
        stats: [{ value: '40%', label: 'conversion lift' }, { value: '<2s', label: 'load time' }],
        url: 'https://react-vite-comfy-store-v2.netlify.app/',
    },
    {
        name: 'Builder Business Site', industry: 'Trades · NZ',
        description: 'A construction business with an integrated quote request system and project gallery. SEO-optimised service pages drive a consistent flow of qualified leads.',
        stats: [{ value: '1.2s', label: 'load time' }, { value: '40%', label: 'more quote requests' }],
        url: 'https://builders-app.netlify.app/',
    },
]

const relatedPages = [
    { url: '/website-design-for-small-business', label: 'Website Design for Small Business' },
    { url: '/affordable-websites-nz', label: 'Affordable Websites NZ' },
    { url: '/web-design-christchurch', label: 'Web Design NZ' },
    { url: '/pricing', label: 'Full Pricing Breakdown' },
]

const relatedArticlesData = [
    { url: '/blog/best-website-builder-for-small-business-nz', label: 'Best Website Builder for Small Business NZ', imageQuery: 'website builder platform' },
    { url: '/blog/how-much-does-a-website-cost-in-nz', label: 'How Much Does a Website Cost in NZ?', imageQuery: 'website design pricing' },
    { url: '/blog/diy-vs-professional-website', label: 'DIY vs Professional Website', imageQuery: 'web developer coding laptop' },
]

export default async function EcommerceWebsitesNZ() {
    const [videos, ...thumbnails] = await Promise.all([
        searchPixabayVideos('ecommerce online store website', 4),
        ...relatedArticlesData.map(a => fetchUnsplashImage(a.imageQuery)),
    ])
    const relatedArticles = relatedArticlesData.map((a, i) => ({
        url: a.url,
        label: a.label,
        thumbnail: thumbnails[i] ? { url: thumbnails[i].smallUrl, alt: thumbnails[i].alt } : null,
    }))

    const schemas = [
        serviceSchema({
            name: 'E-Commerce Website Design NZ',
            description: 'Custom e-commerce websites for New Zealand businesses. Online stores built to convert browsers into buyers.',
            url: `${SITE_URL}/ecommerce-websites-nz`,
        }),
        faqSchema(faqs),
        breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'E-Commerce Websites NZ', url: `${SITE_URL}/ecommerce-websites-nz` },
        ]),
    ]

    return (
        <>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <Nav />
            <main>
                <ServicePageLayout
                    badge="E-Commerce Websites NZ"
                    headline="Online Stores Built to Sell — Not Just Look Good"
                    subheadline="We build fast, secure, conversion-optimised e-commerce websites for NZ businesses. Stop losing sales to slow pages and clunky checkout."
                    keyword="online store"
                    features={features}
                    faqs={faqs}
                    caseStudies={caseStudies}
                    relatedPages={relatedPages}
                    relatedArticles={relatedArticles}
                    heroVideo={videos[0] || null}
                    sectionVideos={videos.slice(1)}
                />
            </main>
            <Footer />
        </>
    )
}
