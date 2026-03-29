import type { Metadata } from 'next'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import ServicePageLayout from '../../components/ServicePageLayout'
import { searchPixabayImages, searchPixabayVideos } from '../../lib/pixabay'
import { serviceSchema, faqSchema, breadcrumbSchema, SITE_URL } from '../../lib/schema'

export const metadata: Metadata = {
    title: 'E-Commerce Websites NZ — Online Stores Built to Sell',
    description: 'Custom e-commerce websites for New Zealand businesses. Fast-loading, mobile-optimized online stores with secure checkout — built to convert browsers into buyers.',
    alternates: {
        canonical: `${SITE_URL}/ecommerce-websites-nz`,
    },
    openGraph: {
        title: 'E-Commerce Websites NZ — Online Stores Built to Sell',
        description: 'Custom e-commerce websites for NZ businesses. Fast, secure, conversion-optimized.',
        url: `${SITE_URL}/ecommerce-websites-nz`,
        type: 'website',
    },
}

const features = [
    { icon: '🛒', title: 'Conversion-Optimized Checkout', description: 'Reduce cart abandonment with a frictionless, mobile-friendly checkout flow.' },
    { icon: '📱', title: 'Mobile-First Shopping', description: 'Over 70% of online shopping is mobile. Your store will look flawless on any device.' },
    { icon: '⚡', title: 'Lightning-Fast Load Times', description: 'Every second of load time costs you sales. We build stores that load in under 2 seconds.' },
    { icon: '🔒', title: 'Secure Payments', description: 'Stripe, PayPal, or your preferred gateway — all PCI compliant and fully encrypted.' },
    { icon: '🔍', title: 'Product SEO', description: 'Optimized product pages, structured data, and category architecture for Google Shopping visibility.' },
    { icon: '📊', title: 'Analytics & Tracking', description: 'Know exactly where your sales come from with conversion tracking and analytics baked in.' },
]

const faqs = [
    { q: 'How much does an e-commerce website cost in NZ?', a: 'Our e-commerce builds start from $1,199 NZD (Growth plan). Complex stores with custom features may use our Pro plan at $2,499.' },
    { q: 'Which payment gateways do you support?', a: 'We integrate with Stripe, PayPal, and other major gateways. All transactions are secure and PCI compliant.' },
    { q: 'Can I manage products myself?', a: 'Absolutely. We set up an easy-to-use product management system so you can add, edit, and remove products on your own.' },
    { q: 'Will my store work with Shopify or WooCommerce?', a: 'We build custom stores using Next.js for maximum performance and SEO. We can also integrate with Shopify\'s backend if you prefer.' },
    { q: 'How long does it take to launch an online store?', a: 'Most e-commerce stores launch within 5–10 business days depending on the number of products and custom features.' },
]

const caseStudies = [
    {
        name: 'Comfy Store', industry: 'Online Retail · NZ',
        description: 'A full-featured e-commerce store with product filtering, wishlist, and optimized checkout flow.',
        stats: [{ value: '40%', label: 'conversion lift' }, { value: '<2s', label: 'load time' }],
        url: 'https://react-vite-comfy-store-v2.netlify.app/',
    },
]

const relatedPages = [
    { url: '/website-design-for-small-business', label: 'Website Design for Small Business' },
    { url: '/affordable-websites-nz', label: 'Affordable Websites NZ' },
    { url: '/web-design-christchurch', label: 'Web Design Christchurch' },
]

const relatedArticles = [
    { url: '/blog/best-website-builder-for-small-business-nz', label: 'Best Website Builder for Small Business NZ' },
    { url: '/blog/how-much-does-a-website-cost-in-nz', label: 'How Much Does a Website Cost in NZ?' },
    { url: '/blog/diy-vs-professional-website', label: 'DIY vs Professional Website' },
]

export default async function EcommerceWebsitesNZ() {
    const [images, videos] = await Promise.all([
        searchPixabayImages('online shopping ecommerce store', 3),
        searchPixabayVideos('online shopping cart', 1),
    ])

    const schemas = [
        serviceSchema({
            name: 'E-Commerce Website Design NZ',
            description: 'Custom e-commerce websites for New Zealand businesses. Online stores built to convert.',
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
                    heroImage={images[0] || null}
                    images={images.slice(1)}
                    video={videos[0] || null}
                />
            </main>
            <Footer />
        </>
    )
}
