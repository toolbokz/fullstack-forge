import { MetadataRoute } from 'next'
import { getAllServiceLocationPairs } from '../lib/location-data'
import { getAllTools } from '../lib/tools-data'
import { getAllServices } from '../lib/services-data'

const SITE_URL = 'https://fullstack-forge.netlify.app'

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date().toISOString()

    // Core pages
    const corePages: MetadataRoute.Sitemap = [
        { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${SITE_URL}/web-design-christchurch`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${SITE_URL}/ecommerce-websites-nz`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${SITE_URL}/website-design-for-small-business`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${SITE_URL}/affordable-websites-nz`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${SITE_URL}/tools`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ]

    // Blog articles
    const blogSlugs = [
        'how-much-does-a-website-cost-in-nz',
        'best-website-design-for-small-businesses',
        'do-small-businesses-need-a-website',
        'how-to-get-customers-from-your-website',
        'website-for-cleaning-business-nz',
        'website-for-tradies-nz',
        'seo-for-small-business-nz',
        'diy-vs-professional-website',
        'best-website-builder-for-small-business-nz',
        'how-to-get-more-leads-from-your-website',
    ]

    const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
        url: `${SITE_URL}/blog/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Programmatic SEO: all 70 service × location pages
    const locationPages: MetadataRoute.Sitemap = getAllServiceLocationPairs().map((pair) => ({
        url: `${SITE_URL}/${pair.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    // Tool pages (12 tools)
    const toolPages: MetadataRoute.Sitemap = getAllTools().map((tool) => ({
        url: `${SITE_URL}/tools/${tool.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Service pages
    const servicePages: MetadataRoute.Sitemap = getAllServices().map((service) => ({
        url: `${SITE_URL}/services/${service.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }))

    return [...corePages, ...blogPages, ...locationPages, ...toolPages, ...servicePages]
}
