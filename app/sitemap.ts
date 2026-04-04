import { MetadataRoute } from 'next'
import { getAllServiceLocationPairs } from '../lib/location-data'
import { getAllTools } from '../lib/tools-data'
import { getAllServices } from '../lib/services-data'
import { contentPlan } from '../lib/seo-data'

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
        { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${SITE_URL}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${SITE_URL}/tools`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    ]

    // Blog articles (driven by contentPlan – single source of truth)
    const blogPages: MetadataRoute.Sitemap = contentPlan.map((article: any) => ({
        url: `${SITE_URL}/blog/${article.slug}`,
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
