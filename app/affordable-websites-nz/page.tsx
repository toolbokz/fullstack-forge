import type { Metadata } from 'next'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import ServicePageLayout from '../../components/ServicePageLayout'
import { searchPixabayVideos } from '../../lib/pixabay'
import { fetchUnsplashImage } from '../../lib/unsplash'
import { serviceSchema, faqSchema, breadcrumbSchema, SITE_URL } from '../../lib/schema'

export const metadata: Metadata = {
    title: 'Affordable Websites NZ — Professional Sites From a $500 Deposit | Fullstack Forge',
    description: 'Affordable website design in New Zealand — secure your build with a $500 deposit. Professional, fast, mobile-optimized websites for small businesses. No monthly fees.',
    alternates: {
        canonical: `${SITE_URL}/affordable-websites-nz`,
    },
    openGraph: {
        title: 'Affordable Websites NZ — $500 Deposit to Start',
        description: 'Professional website design in NZ from a $500 deposit. No hidden fees. Live in 7–14 days.',
        url: `${SITE_URL}/affordable-websites-nz`,
        type: 'website',
    },
}

const features = [
    { icon: '💰', title: '$500 Deposit — No Surprises', description: 'Pay a fixed $500 deposit to lock in your build. Final price quoted upfront before you commit — no hidden costs, no scope creep.' },
    { icon: '🏆', title: 'Agency Quality, Freelancer Price', description: 'Get the same quality agencies charge $5K–$15K for — at a fraction of the cost. Modern tech, proven designs, real results.' },
    { icon: '⚡', title: 'Live in 7–14 Days', description: 'We don\'t waste time with endless revisions. Your website launches in days, not weeks or months.' },
    { icon: '📱', title: 'Mobile-First Design', description: 'Over 60% of NZ web traffic is mobile. Every site is built mobile-first and tested across devices.' },
    { icon: '🔍', title: 'SEO Baked In', description: 'On-page SEO, meta tags, structured data, and fast loading come standard. Add monthly SEO for ongoing ranking growth.' },
    { icon: '🤝', title: 'You Own Everything', description: 'Your code, your content, your domain. No vendor lock-in, no ongoing commitments. Walk away any time.' },
    { icon: '🚀', title: 'Free Hosting on Netlify', description: 'We deploy to a global CDN used by Nike and Spotify. Hosting is free for most sites — your only cost is ~$20/year for your domain.' },
    { icon: '🎯', title: 'Built to Convert', description: 'Every page is designed to turn visitors into enquiries. Lead-capture forms, clear CTAs, and trust signals — not just a brochure.' },
]

const faqs = [
    { q: 'How does the $500 deposit work?', a: 'You pay a $500 NZD deposit to secure your build slot. We then scope your project and provide a fixed total price before any further work begins. The deposit is applied toward your total — so there are no surprises.' },
    { q: 'What does a full website build typically cost?', a: 'Most small business websites fall in the $1,000–$2,000 range depending on the number of pages and features. You\'ll know the exact total before committing beyond the deposit. For comparison, NZ agencies charge $5,000–$20,000 for comparable work.' },
    { q: 'Is an affordable website actually any good?', a: 'Yes. We use pre-built, battle-tested designs customised for your brand. You get the same modern tech stack (Next.js, Tailwind, Netlify CDN) and conversion-focused approach as a $10K agency build — without the agency overhead.' },
    { q: 'Are there any ongoing costs?', a: 'Hosting is free on Netlify for most sites. Domain registration (about $20/year) is the only recurring cost. No monthly fees, no maintenance contracts, no hidden charges.' },
    { q: 'How is this so much cheaper than agencies?', a: 'No bloated teams, no CBD office rent, no project managers managing project managers. We use efficient systems and proven designs to deliver faster and cheaper — without cutting corners on quality.' },
    { q: 'Can I add SEO or optimisation later?', a: 'Absolutely. Start with a website build and add SEO setup (from $300), monthly SEO (from $150/mo), or website optimisation (from $400) as your business grows. Everything is modular.' },
    { q: 'What if I already have a website?', a: 'We\'ll audit your current site for free and recommend whether an optimisation (from $400) or a fresh build makes more sense. Many clients come to us after outgrowing a DIY site or being let down by another provider.' },
    { q: 'How long does it take?', a: 'Most sites are live within 7–14 days. Simple sites can be ready in under a week. We move fast because we start from proven, pre-built designs rather than a blank canvas.' },
]

const caseStudies = [
    {
        name: 'PlumbFix Services', industry: 'Trades · NZ',
        description: 'A plumber with zero web presence. We built a fast, SEO-optimised site with service pages and click-to-call. Now ranking Page 1 for local plumbing searches.',
        stats: [{ value: 'Page 1', label: 'Google ranking' }, { value: '3x', label: 'more enquiries' }],
        url: 'https://plumbfix-site.netlify.app/',
    },
    {
        name: 'Everclean Services', industry: 'Cleaning · NZ',
        description: 'A cleaning business that went from no online presence to 20+ monthly enquiries with service-area pages, a quote form, and local SEO.',
        stats: [{ value: '20+', label: 'leads/month' }, { value: '5 days', label: 'to launch' }],
        url: 'https://cleaning-site-001.netlify.app/',
    },
]

const relatedPages = [
    { url: '/website-design-for-small-business', label: 'Website Design for Small Business' },
    { url: '/web-design-christchurch', label: 'Web Design NZ' },
    { url: '/ecommerce-websites-nz', label: 'E-Commerce Websites NZ' },
    { url: '/pricing', label: 'Full Pricing Breakdown' },
]

const relatedArticlesData = [
    { url: '/blog/how-much-does-a-website-cost-in-nz', label: 'How Much Does a Website Cost in NZ?', imageQuery: 'website design pricing' },
    { url: '/blog/diy-vs-professional-website', label: 'DIY vs Professional Website — Which Is Right?', imageQuery: 'web developer coding laptop' },
    { url: '/blog/best-website-builder-for-small-business-nz', label: 'Best Website Builder for Small Business NZ', imageQuery: 'website builder platform' },
]

export default async function AffordableWebsitesNZ() {
    const [videos, ...thumbnails] = await Promise.all([
        searchPixabayVideos('laptop website startup office bright', 4),
        ...relatedArticlesData.map(a => fetchUnsplashImage(a.imageQuery)),
    ])
    const relatedArticles = relatedArticlesData.map((a, i) => ({
        url: a.url,
        label: a.label,
        thumbnail: thumbnails[i] ? { url: thumbnails[i].smallUrl, alt: thumbnails[i].alt } : null,
    }))

    const schemas = [
        serviceSchema({
            name: 'Affordable Website Design NZ',
            description: 'Affordable, professional website design in New Zealand. Secure your build with a $500 deposit — fixed pricing, no hidden fees.',
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
                    headline="Professional Websites From a $500 Deposit — No Compromises"
                    subheadline="Affordable doesn't mean cheap. Lock in your build with a $500 deposit, get a fixed quote upfront, and launch a conversion-focused website in days — without the agency price tag."
                    keyword="website"
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
