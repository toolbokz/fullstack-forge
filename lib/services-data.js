/**
 * Services Data System
 * Central registry for all services offered by Fullstack Forge.
 * Each service has: slug, name, shortName, description, icon (SVG path), column, keywords.
 */

// SVG icon paths (24x24 viewBox)
const serviceIcons = {
    // Code / Web Design
    code: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
    // Search / SEO
    search: 'M21 21l-5.197-5.197M15.803 15.803A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z',
    // Sparkles / AI
    sparkles: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423z',
    // Device Phone Mobile / Mobile Dev
    mobile: 'M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 18h6',
    // Bolt / Speed Optimisation
    bolt: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    // Trending Up / CRO
    trending: 'M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941',
    // Megaphone / Ads
    megaphone: 'M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38a.954.954 0 0 1-1.347-.542 32.372 32.372 0 0 1-.89-3.1 40.024 40.024 0 0 1-.12-1.032m2.492 0a48.276 48.276 0 0 0 7.41-6.09 6.004 6.004 0 0 0 0-7.5 48.267 48.267 0 0 0-7.41-6.09M10.34 6.66a49.04 49.04 0 0 0-.85-1.32',
    // Server / Hosting
    server: 'M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z',
}

export function ServiceIcon({ icon, size = 20, className = '' }) {
    const path = serviceIcons[icon]
    if (!path) return null
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width={size}
            height={size}
            className={className}
            aria-hidden="true"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d={path} />
        </svg>
    )
}

// ─── SERVICE DEFINITIONS (grouped by dropdown column) ───
export const serviceColumns = [
    {
        title: 'Build',
        services: [
            {
                slug: 'web-design',
                name: 'Web Design & Development',
                shortName: 'Web Design',
                icon: 'code',
                description: 'High-converting websites built in 7 days.',
                keywords: ['web design nz', 'website for tradies', 'web development nz'],
            },
            {
                slug: 'mobile-development',
                name: 'Mobile Development',
                shortName: 'Mobile Dev',
                icon: 'mobile',
                description: 'Mobile-first apps and blazing fast sites.',
                keywords: ['mobile development nz', 'mobile app development', 'responsive web design'],
            },
            {
                slug: 'website-optimisation',
                name: 'Website Optimisation',
                shortName: 'Speed & UX',
                icon: 'bolt',
                description: 'Speed, performance, and Core Web Vitals fixes.',
                keywords: ['website optimisation nz', 'page speed optimisation', 'core web vitals'],
            },
        ],
    },
    {
        title: 'Grow',
        services: [
            {
                slug: 'seo',
                name: 'SEO',
                shortName: 'SEO',
                icon: 'search',
                description: 'Get found on Google by local customers.',
                keywords: ['seo nz', 'local seo nz', 'search engine optimisation'],
            },
            {
                slug: 'conversion-rate-optimisation',
                name: 'CRO (Conversion Rate Optimisation)',
                shortName: 'CRO',
                icon: 'trending',
                description: 'Turn more visitors into paying customers.',
                keywords: ['conversion rate optimisation nz', 'cro nz', 'website conversions'],
            },
            {
                slug: 'ad-campaigns',
                name: 'Ad Campaigns',
                shortName: 'Ads',
                icon: 'megaphone',
                description: 'Google & Facebook Ads that generate leads.',
                keywords: ['google ads nz', 'facebook ads nz', 'ppc management'],
            },
        ],
    },
    {
        title: 'Automate & Maintain',
        services: [
            {
                slug: 'ai-automation',
                name: 'AI Automation',
                shortName: 'AI',
                icon: 'sparkles',
                description: 'Automate lead capture, follow-ups, and workflows.',
                keywords: ['ai automation nz', 'business automation', 'ai chatbot'],
            },
            {
                slug: 'site-maintenance-hosting',
                name: 'Site Maintenance & Hosting',
                shortName: 'Hosting',
                icon: 'server',
                description: 'Uptime, security, and performance — handled.',
                keywords: ['website hosting nz', 'website maintenance', 'managed hosting nz'],
            },
        ],
    },
]

/** Flat list of all services */
export function getAllServices() {
    return serviceColumns.flatMap((col) => col.services)
}

/** Find a service by slug */
export function getServiceBySlug(slug) {
    return getAllServices().find((s) => s.slug === slug) || null
}
