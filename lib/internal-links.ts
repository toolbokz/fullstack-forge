/**
 * Internal Linking Engine
 * Auto-generates contextual internal links for blog posts, tools, and services.
 * Uses seo-data.js contentPlan and services-data.js for link graph.
 */

import { contentPlan } from './seo-data'
import { getAllTools } from './tools-data'
import { serviceColumns } from './services-data'
import { fetchUnsplashImage } from './unsplash'

const SITE_URL = 'https://fullstack-forge.netlify.app'

export interface InternalLink {
    url: string
    label: string
    type: 'blog' | 'service' | 'tool' | 'page'
    imageQuery?: string
    thumbnail?: { url: string; alt: string } | null
}

// ─── All services flattened ────────────────────────
const allServices = serviceColumns.flatMap((col: any) =>
    col.services.map((s: any) => ({
        slug: s.slug,
        name: s.name,
        shortName: s.shortName,
        url: `/services/${s.slug}`,
    }))
)

// ─── All tools flattened ───────────────────────────
const allTools = getAllTools().map((t: any) => ({
    slug: t.slug,
    name: t.name,
    shortName: t.shortName,
    url: `/tools/${t.slug}`,
}))

// ─── Pillar pages ──────────────────────────────────
const pillarPages: InternalLink[] = [
    { url: '/affordable-websites-nz', label: 'Affordable Websites NZ', type: 'page' },
    { url: '/website-design-for-small-business', label: 'Website Design for Small Business', type: 'page' },
    { url: '/web-design-christchurch', label: 'Web Design Christchurch', type: 'page' },
    { url: '/ecommerce-websites-nz', label: 'E-Commerce Websites NZ', type: 'page' },
]

/**
 * Get related blog posts for a given slug (excludes self).
 * Uses the contentPlan linksTo overlap to find related articles.
 */
export function getRelatedPosts(currentSlug: string, limit = 4): InternalLink[] {
    const current = contentPlan.find((a: any) => a.slug === currentSlug)
    if (!current) return []

    const currentLinks = new Set((current as any).linksTo || [])

    // Score each article by shared linksTo targets
    const scored = contentPlan
        .filter((a: any) => a.slug !== currentSlug)
        .map((a: any) => {
            const shared = ((a as any).linksTo || []).filter((l: string) => currentLinks.has(l)).length
            // Bonus for same intent
            const intentBonus = (a as any).intent === (current as any).intent ? 1 : 0
            // Bonus for same category (strengthens cluster cohesion)
            const categoryBonus = (a as any).category && (a as any).category === (current as any).category ? 1 : 0
            return { article: a, score: shared + intentBonus + categoryBonus }
        })
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)

    return scored.map(({ article }) => ({
        url: `/blog/${(article as any).slug}`,
        label: (article as any).title,
        type: 'blog' as const,
        imageQuery: (article as any).imageQuery || null,
    }))
}

/**
 * Get contextual service links based on blog article's linksTo targets.
 */
export function getServiceLinks(currentSlug: string, limit = 3): InternalLink[] {
    const current = contentPlan.find((a: any) => a.slug === currentSlug)
    const linksTo = (current as any)?.linksTo || []

    // Find services that match any linksTo path
    const matched = allServices.filter((s: any) =>
        linksTo.some((l: string) => l.includes(s.slug))
    )

    if (matched.length >= limit) return matched.slice(0, limit).map((s: any) => ({
        url: s.url,
        label: s.name,
        type: 'service' as const,
    }))

    // Fallback: return top services
    return allServices.slice(0, limit).map((s: any) => ({
        url: s.url,
        label: s.name,
        type: 'service' as const,
    }))
}

/**
 * Get tool links relevant to an article (based on keyword overlap).
 */
export function getToolLinks(currentSlug: string, limit = 3): InternalLink[] {
    const current = contentPlan.find((a: any) => a.slug === currentSlug)
    if (!current) return allTools.slice(0, limit).map((t: any) => ({
        url: t.url, label: t.name, type: 'tool' as const,
    }))

    const keyword = ((current as any).keyword || '').toLowerCase()

    // Score tools by keyword relevance
    const scored = allTools.map((t: any) => {
        const nameMatch = keyword.includes(t.slug.replace(/-/g, ' ')) ? 2 : 0
        const slugMatch = t.slug.includes('lead') && keyword.includes('lead') ? 2 : 0
        const seoMatch = (keyword.includes('seo') || keyword.includes('website')) && t.slug.includes('seo') ? 1 : 0
        return { tool: t, score: nameMatch + slugMatch + seoMatch }
    })
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)

    return scored.map(({ tool }) => ({
        url: tool.url,
        label: tool.name,
        type: 'tool' as const,
    }))
}

/**
 * Get pillar page links that an article should link to.
 * Uses the contentPlan linksTo field directly.
 */
export function getPillarLinks(currentSlug: string): InternalLink[] {
    const current = contentPlan.find((a: any) => a.slug === currentSlug)
    if (!current) return pillarPages.slice(0, 2)

    const linksTo = (current as any).linksTo || []
    return pillarPages.filter((p) => linksTo.includes(p.url))
}

/**
 * Get a complete link package for a blog article.
 * Returns all link types combined for maximum internal linking.
 */
export function getArticleLinkPackage(slug: string) {
    return {
        relatedPosts: getRelatedPosts(slug, 4),
        serviceLinks: getServiceLinks(slug, 3),
        toolLinks: getToolLinks(slug, 3),
        pillarLinks: getPillarLinks(slug),
    }
}

/**
 * Async version that fetches Unsplash thumbnails for related posts.
 * Call from server components (blog pages) for thumbnail support.
 */
export async function getArticleLinkPackageWithThumbnails(slug: string) {
    const pkg = getArticleLinkPackage(slug)

    const enriched = await Promise.all(
        pkg.relatedPosts.map(async (post) => {
            if (!post.imageQuery) return { ...post, thumbnail: null }
            const img = await fetchUnsplashImage(post.imageQuery)
            return {
                ...post,
                thumbnail: img ? { url: img.smallUrl, alt: img.alt } : null,
            }
        })
    )

    return { ...pkg, relatedPosts: enriched }
}
