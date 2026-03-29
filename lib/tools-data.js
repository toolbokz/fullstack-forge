/**
 * Tools Data System
 * Central registry for all free tools offered on the site.
 * Each tool has: slug, name, shortName, description, category, icon (SVG path), keywords, highlight flag.
 */

// SVG icon paths (24x24 viewBox) — inline, zero dependencies
const icons = {
    // Magnifying glass
    search: 'M21 21l-5.197-5.197M15.803 15.803A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z',
    // Lightning bolt
    bolt: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    // Mobile phone
    mobile: 'M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-6 18h6',
    // Wrench / technical
    wrench: 'M11.42 15.17L17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743',
    // Key / keyword
    key: 'M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25z',
    // Chart bar
    chart: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z',
    // Users / competitor
    users: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0z',
    // Link / backlink
    link: 'M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244',
    // Fire / hot
    fire: 'M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48z',
    // Dollar / ROI
    dollar: 'M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
    // Arrow trending up / conversion
    trending: 'M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941',
    // Calculator
    calculator: 'M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25z',
}

// Helper to render an SVG icon component from a path
export function ToolIcon({ icon, size = 20, className = '' }) {
    const path = icons[icon]
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

// ─── TOOL DEFINITIONS ───────────────────────────────
export const toolCategories = [
    {
        title: 'Website Audit Tools',
        tools: [
            {
                slug: 'seo-audit',
                name: 'Website SEO Audit',
                shortName: 'SEO Audit',
                icon: 'search',
                description: 'Scan your site for SEO issues, speed problems, and mobile errors.',
                keywords: ['free seo audit tool nz', 'website audit tool', 'seo checker nz', 'website seo audit'],
                metaTitle: 'Free Website SEO Audit Tool NZ — Fullstack Forge',
                metaDescription: 'Run a free SEO audit on your website. Get instant scores for speed, mobile-friendliness, SEO, and accessibility. Built for NZ businesses.',
                inputType: 'url',
            },
            {
                slug: 'page-speed-checker',
                name: 'Page Speed Checker',
                shortName: 'Speed Checker',
                icon: 'bolt',
                description: 'Test how fast your website loads and get actionable fixes.',
                keywords: ['page speed checker', 'website speed test nz', 'page speed test'],
                metaTitle: 'Free Page Speed Checker — Test Your Website Speed | Fullstack Forge',
                metaDescription: 'Check your website speed for free. Get performance scores and actionable recommendations to make your site faster.',
                inputType: 'url',
            },
            {
                slug: 'mobile-friendly-test',
                name: 'Mobile-Friendly Test',
                shortName: 'Mobile Test',
                icon: 'mobile',
                description: 'Check if your website works properly on phones and tablets.',
                keywords: ['mobile friendly test', 'mobile website checker', 'responsive test'],
                metaTitle: 'Free Mobile-Friendly Test — Is Your Site Mobile Ready? | Fullstack Forge',
                metaDescription: 'Test if your website is mobile-friendly for free. See how your site performs on phones and tablets.',
                inputType: 'url',
            },
            {
                slug: 'technical-seo-scanner',
                name: 'Technical SEO Scanner',
                shortName: 'Tech SEO',
                icon: 'wrench',
                description: 'Deep scan for broken links, missing meta tags, and crawl issues.',
                keywords: ['technical seo checker', 'seo scanner', 'website crawler tool'],
                metaTitle: 'Free Technical SEO Scanner — Find Hidden Issues | Fullstack Forge',
                metaDescription: 'Scan your website for technical SEO issues like broken links, missing meta tags, and crawl errors. Free instant results.',
                inputType: 'url',
            },
        ],
    },
    {
        title: 'SEO & Analytics Tools',
        tools: [
            {
                slug: 'keyword-opportunity-finder',
                name: 'Keyword Opportunity Finder',
                shortName: 'Keywords',
                icon: 'key',
                description: 'Discover keywords your competitors rank for that you don\'t.',
                keywords: ['keyword research tool nz', 'free keyword tool', 'seo keyword finder'],
                metaTitle: 'Free Keyword Opportunity Finder NZ — Fullstack Forge',
                metaDescription: 'Find untapped keyword opportunities for your business. Discover what your NZ customers are searching for.',
                inputType: 'url',
            },
            {
                slug: 'seo-score-checker',
                name: 'SEO Score Checker',
                shortName: 'SEO Score',
                icon: 'chart',
                description: 'Get an overall SEO health score for any page on your site.',
                keywords: ['seo score checker', 'seo score tool', 'website seo score'],
                metaTitle: 'Free SEO Score Checker — Rate Your Website SEO | Fullstack Forge',
                metaDescription: 'Check your website SEO score for free. Get a detailed breakdown of what\'s working and what needs fixing.',
                inputType: 'url',
            },
            {
                slug: 'competitor-analyzer',
                name: 'Competitor Analyzer',
                shortName: 'Competitors',
                icon: 'users',
                description: 'See how your website stacks up against your local competitors.',
                keywords: ['competitor analysis tool', 'website comparison tool', 'competitor checker'],
                metaTitle: 'Free Competitor Analyzer — Compare Your Website | Fullstack Forge',
                metaDescription: 'Compare your website against competitors. See who\'s winning in speed, SEO, and conversions.',
                inputType: 'dual-url',
            },
            {
                slug: 'backlink-checker',
                name: 'Backlink Checker',
                shortName: 'Backlinks',
                icon: 'link',
                description: 'Check how many sites link to yours and find link-building opportunities.',
                keywords: ['backlink checker', 'backlink tool', 'link checker tool'],
                metaTitle: 'Free Backlink Checker — Check Your Website Links | Fullstack Forge',
                metaDescription: 'See who\'s linking to your website and find new backlink opportunities to boost your SEO.',
                inputType: 'url',
            },
        ],
    },
    {
        title: 'Conversion & Business Tools',
        tools: [
            {
                slug: 'lead-loss-calculator',
                name: 'Lead Loss Calculator',
                shortName: 'Lead Loss',
                icon: 'fire',
                description: 'Calculate how much revenue your website is losing every month.',
                keywords: ['lead loss calculator', 'website roi calculator', 'lead calculator'],
                metaTitle: 'Free Lead Loss Calculator — How Much Revenue Are You Losing? | Fullstack Forge',
                metaDescription: 'Calculate how many leads and how much revenue your website is losing every month. Free tool for NZ businesses.',
                inputType: 'calculator',
                highlight: true,
            },
            {
                slug: 'website-roi-calculator',
                name: 'Website ROI Calculator',
                shortName: 'ROI Calc',
                icon: 'dollar',
                description: 'See what return on investment a new website would generate.',
                keywords: ['website roi calculator', 'website investment calculator', 'roi calculator'],
                metaTitle: 'Free Website ROI Calculator — Is a New Website Worth It? | Fullstack Forge',
                metaDescription: 'Calculate the ROI of investing in a professional website. See how quickly your investment pays for itself.',
                inputType: 'calculator',
            },
            {
                slug: 'conversion-rate-estimator',
                name: 'Conversion Rate Estimator',
                shortName: 'CRO Estimator',
                icon: 'trending',
                description: 'Estimate what improving your conversion rate would mean in revenue.',
                keywords: ['conversion rate calculator', 'cro calculator', 'conversion estimator'],
                metaTitle: 'Free Conversion Rate Estimator — What If You Doubled Your Leads? | Fullstack Forge',
                metaDescription: 'Estimate how much more revenue you\'d generate by improving your website conversion rate.',
                inputType: 'calculator',
            },
            {
                slug: 'pricing-estimator',
                name: 'Pricing Estimator Tool',
                shortName: 'Pricing',
                icon: 'calculator',
                description: 'Get an instant estimate for your website project.',
                keywords: ['website pricing calculator nz', 'web design cost calculator', 'website quote tool'],
                metaTitle: 'Free Website Pricing Estimator NZ — Get an Instant Quote | Fullstack Forge',
                metaDescription: 'Get an instant website pricing estimate. Answer a few questions and see what your project would cost.',
                inputType: 'calculator',
            },
        ],
    },
]

/** Flat list of all tools */
export function getAllTools() {
    return toolCategories.flatMap((cat) => cat.tools)
}

/** Find a tool by slug */
export function getToolBySlug(slug) {
    return getAllTools().find((t) => t.slug === slug) || null
}
