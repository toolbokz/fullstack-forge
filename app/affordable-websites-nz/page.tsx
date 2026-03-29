import type { Metadata } from 'next'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import ServicePageLayout from '../../components/ServicePageLayout'
import { searchPixabayImages, searchPixabayVideos } from '../../lib/pixabay'
import { serviceSchema, faqSchema, breadcrumbSchema, SITE_URL } from '../../lib/schema'

export const metadata: Metadata = {
    title: 'Affordable Websites NZ — Professional Sites From $699',
    description: 'Affordable website design in New Zealand from $699. Professional, fast, mobile-optimized websites for small businesses — no hidden fees, no monthly retainers.',
    alternates: {
        canonical: `${SITE_URL}/affordable-websites-nz`,
    },
    openGraph: {
        title: 'Affordable Websites NZ — From $699',
        description: 'Professional website design in NZ from $699. No hidden fees. Launching in 7 days.',
        url: `${SITE_URL}/affordable-websites-nz`,
        type: 'website',
    },
}

const features = [
    { icon: '💰', title: 'From $699 — No Hidden Costs', description: 'One-time payment. No monthly fees, no surprise charges. You know exactly what you\'re paying.' },
    { icon: '🏆', title: 'Agency Quality, Freelancer Price', description: 'Get the same quality agencies charge $5K+ for — at a fraction of the cost.' },
    { icon: '⚡', title: 'Live in 2–7 Days', description: 'We don\'t waste time. Your website launches in days, not weeks or months.' },
    { icon: '📱', title: 'Mobile-Ready', description: 'Responsive design that works on phones, tablets, and desktops out of the box.' },
    { icon: '🔍', title: 'SEO Included', description: 'Basic SEO comes standard. Upgrade to Growth for advanced local SEO and conversion optimization.' },
    { icon: '🤝', title: 'You Own Everything', description: 'Your code, your content, your domain. No vendor lock-in, no ongoing commitments.' },
]

const faqs = [
    { q: 'What\'s the cheapest website option?', a: 'Our Starter package at $699 NZD includes a 1–3 page professional website with mobile optimization, basic SEO, and a contact form.' },
    { q: 'Is a $699 website any good?', a: 'Yes. We use pre-built, proven designs that we customise for your brand. You get the same tech stack and quality as a $5K agency build.' },
    { q: 'Are there any ongoing costs?', a: 'Hosting is free on Netlify for most sites. Domain registration (about $20/year) is the only recurring cost. No hidden fees.' },
    { q: 'How is this cheaper than agencies?', a: 'No bloated teams, no office overhead. We use efficient systems and proven designs to deliver faster and cheaper without sacrificing quality.' },
    { q: 'Can I upgrade later?', a: 'Absolutely. Start with Starter and upgrade to Growth or Pro anytime. We build with scalability in mind.' },
]

const relatedPages = [
    { url: '/website-design-for-small-business', label: 'Website Design for Small Business' },
    { url: '/web-design-christchurch', label: 'Web Design Christchurch' },
    { url: '/ecommerce-websites-nz', label: 'E-Commerce Websites NZ' },
]

const relatedArticles = [
    { url: '/blog/how-much-does-a-website-cost-in-nz', label: 'How Much Does a Website Cost in NZ?' },
    { url: '/blog/diy-vs-professional-website', label: 'DIY vs Professional Website — Which Is Right?' },
    { url: '/blog/best-website-builder-for-small-business-nz', label: 'Best Website Builder for Small Business NZ' },
]

export default async function AffordableWebsitesNZ() {
    const [images, videos] = await Promise.all([
        searchPixabayImages('affordable website design laptop', 3),
        searchPixabayVideos('website development design', 1),
    ])

    const schemas = [
        serviceSchema({
            name: 'Affordable Website Design NZ',
            description: 'Affordable, professional website design in New Zealand from $699 NZD.',
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
                <ServicePageLayout
                    badge="Affordable Websites NZ"
                    headline="Professional Websites From $699 — No Compromises"
                    subheadline="Affordable doesn't mean cheap. Get a fast, professional, conversion-focused website without the agency price tag."
                    keyword="website"
                    features={features}
                    faqs={faqs}
                    caseStudies={[]}
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
