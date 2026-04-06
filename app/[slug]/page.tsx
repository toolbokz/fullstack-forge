import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LocationPageTemplate from '../../components/LocationPageTemplate'
import { getAllServiceLocationPairs, getServiceLocationPair } from '../../lib/location-data'
import { serviceSchema, faqSchema, breadcrumbSchema, localBusinessSchema, SITE_URL } from '../../lib/schema'

// Generate all 70 service×location routes at build time
export function generateStaticParams() {
    return getAllServiceLocationPairs().map((pair) => ({
        slug: pair.slug,
    }))
}

// Generate unique metadata for every page
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const pair = getServiceLocationPair(params.slug)
    if (!pair) return {}

    const { service, location } = pair
    const title = `${service.name} ${location.name} — Get More Customers | Fullstack Forge`
    const description = `Professional ${service.name.toLowerCase()} for ${location.name} businesses. We build fast, SEO-optimised websites that rank on Google and generate leads for tradies and local businesses in ${location.region}.`
    const url = `${SITE_URL}/${pair.slug}`

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: 'website',
            images: [{ url: '/assets/fallback-image.png', width: 2560, height: 1440, alt: title }],
        },
        twitter: {
            card: 'summary_large_image' as const,
            title,
            description,
            images: ['/assets/fallback-image.png'],
        },
    }
}

// Build localised FAQs per page
function buildFaqs(serviceName: string, cityName: string) {
    return [
        {
            q: `How much does ${serviceName.toLowerCase()} cost in ${cityName}?`,
            a: `Our ${serviceName.toLowerCase()} packages for ${cityName} businesses start with a $500 NZD deposit. Total website build costs typically run $1,000–$2,000 depending on scope, with local SEO, lead capture, and conversion optimisation included. We confirm the full price after reviewing your brief — no surprises.`,
        },
        {
            q: `How long does it take to get a website built for my ${cityName} business?`,
            a: `We deliver in 5–7 business days — not the 6–12 weeks most agencies take. We use proven, conversion-focused frameworks customised for your ${cityName} business, so you're live fast without sacrificing quality.`,
        },
        {
            q: `Will my website rank on Google for "${serviceName.toLowerCase()} ${cityName}"?`,
            a: `Every site we build includes on-page SEO optimised for your location. We structure your site with local schema markup, ${cityName}-specific keywords, fast loading speeds, and mobile optimisation. While no one can guarantee #1, we build every site to maximise your chances of ranking for local searches.`,
        },
        {
            q: `Do you work with businesses in ${cityName}?`,
            a: `Yes — we work with businesses right across New Zealand, including ${cityName} and the surrounding areas. Everything is done remotely so your location doesn't matter. We optimise your site specifically for ${cityName} searches.`,
        },
        {
            q: `What makes Fullstack Forge different from other ${serviceName.toLowerCase()} agencies in ${cityName}?`,
            a: `We specialise in conversion-focused websites for tradies and local businesses. Unlike generic agencies, every site we build is designed to generate leads — not just look pretty. We use modern technology (Next.js), include local SEO, and deliver in days not months.`,
        },
        {
            q: `Do I need to provide my own content and images?`,
            a: `It helps if you have photos of your work or team — real images outperform stock. We handle all the copywriting through a simple questionnaire, and you review everything before launch.`,
        },
    ]
}

export default function LocationPage({ params }: { params: { slug: string } }) {
    const pair = getServiceLocationPair(params.slug)
    if (!pair) notFound()

    const { service, location, slug } = pair
    const faqs = buildFaqs(service.name, location.name)

    const schemas = [
        localBusinessSchema(),
        serviceSchema({
            name: `${service.name} ${location.name}`,
            description: `Professional ${service.name.toLowerCase()} for ${location.name} businesses. Fast, SEO-optimised websites that generate leads.`,
            url: `${SITE_URL}/${slug}`,
        }),
        faqSchema(faqs),
        breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: service.name, url: `${SITE_URL}/${slug}` },
            { name: location.name, url: `${SITE_URL}/${slug}` },
        ]),
    ]

    return (
        <LocationPageTemplate
            service={service}
            location={location}
            faqs={faqs}
            schemas={schemas}
        />
    )
}
