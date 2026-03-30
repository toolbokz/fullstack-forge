import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllTools, getToolBySlug } from '../../../lib/tools-data'
import ToolPageTemplate from '../../../components/ToolPageTemplate'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'

// Tool-specific interactive components
import UrlAnalyzerTool from '../../../components/tools/UrlAnalyzerTool'
import CompetitorAnalyzerTool from '../../../components/tools/CompetitorAnalyzerTool'
import LeadLossCalculator from '../../../components/LeadLossCalculator'
import WebsiteRoiCalculator from '../../../components/tools/WebsiteRoiCalculator'
import ConversionRateEstimator from '../../../components/tools/ConversionRateEstimator'
import PricingEstimator from '../../../components/tools/PricingEstimator'

// ─── Static params for all 12 tools ────────────────
export function generateStaticParams() {
    return getAllTools().map((t) => ({ slug: t.slug }))
}

// ─── Per-tool metadata ──────────────────────────────
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const tool = getToolBySlug(params.slug)
    if (!tool) return {}
    return {
        title: tool.metaTitle,
        description: tool.metaDescription,
        keywords: tool.keywords,
        alternates: { canonical: `https://fullstack-forge.netlify.app/tools/${tool.slug}` },
        openGraph: {
            title: tool.metaTitle,
            description: tool.metaDescription,
            url: `https://fullstack-forge.netlify.app/tools/${tool.slug}`,
        },
    }
}

// ─── Tool-specific rendering logic ──────────────────
function ToolBody({ slug }: { slug: string }) {
    switch (slug) {
        // ── Website Audit Tools (URL-based, filtered Lighthouse results) ──
        case 'seo-audit':
            return (
                <UrlAnalyzerTool
                    tipHeading="Quick SEO Wins"
                    tips={[
                        'Add unique meta titles and descriptions to every page',
                        'Submit your sitemap to Google Search Console',
                        'Get listed on Google Business Profile for local SEO',
                        'Aim for page load times under 3 seconds on mobile',
                    ]}
                />
            )
        case 'page-speed-checker':
            return (
                <UrlAnalyzerTool
                    filterCategories={['Performance', 'Best Practices']}
                    tipHeading="Speed Optimisation Tips"
                    tips={[
                        'Compress and serve images in WebP format',
                        'Enable browser caching and GZIP compression',
                        'Minimise render-blocking JavaScript and CSS',
                        'Use a CDN to serve assets closer to your visitors',
                    ]}
                />
            )
        case 'mobile-friendly-test':
            return (
                <UrlAnalyzerTool
                    filterCategories={['Mobile Friendly', 'Performance']}
                    tipHeading="Mobile Optimisation Tips"
                    tips={[
                        'Ensure tap targets (buttons, links) are at least 48px',
                        'Use responsive design that adapts to all screen sizes',
                        'Avoid horizontal scrolling on mobile devices',
                        'Test your site on real devices, not just desktop resize',
                    ]}
                />
            )
        case 'technical-seo-scanner':
            return (
                <UrlAnalyzerTool
                    filterCategories={['SEO', 'Best Practices', 'SSL Security', 'Accessibility']}
                    tipHeading="Technical SEO Fixes"
                    tips={[
                        'Fix broken links and 404 errors immediately',
                        'Ensure every page has a unique title tag and meta description',
                        'Add structured data (Schema.org) for rich search results',
                        'Set up proper 301 redirects for moved pages',
                    ]}
                />
            )

        // ── SEO & Analytics Tools ──
        case 'keyword-opportunity-finder':
            return (
                <UrlAnalyzerTool
                    filterCategories={['SEO']}
                    tipHeading="Keyword Opportunities"
                    tips={[
                        'Target long-tail keywords with local intent (e.g. "plumber christchurch")',
                        'Create dedicated pages for each service + location you serve',
                        'Write blog posts answering questions your customers actually ask',
                        'Check Google Search Console for queries you rank on page 2 for — these are quick wins',
                        'Add your business to Google Business Profile with accurate categories',
                    ]}
                />
            )
        case 'seo-score-checker':
            return (
                <UrlAnalyzerTool
                    filterCategories={['SEO', 'Accessibility', 'Performance']}
                    tipHeading="Improve Your SEO Score"
                    tips={[
                        'Write compelling meta descriptions that encourage clicks',
                        'Use descriptive heading tags (H1, H2, H3) in logical order',
                        'Add alt text to every image on your site',
                        'Improve Core Web Vitals scores for a ranking boost',
                    ]}
                />
            )
        case 'competitor-analyzer':
            return <CompetitorAnalyzerTool />
        case 'backlink-checker':
            return (
                <UrlAnalyzerTool
                    filterCategories={['SEO', 'SSL Security']}
                    tipHeading="Link Building Tips"
                    tips={[
                        'Get listed in NZ business directories (e.g. Yellow, Finda, NoCowboys)',
                        'Ask suppliers and partners to link to your website',
                        'Create valuable content that others want to link to',
                        'Check competitors\' backlinks for opportunities you can replicate',
                        'Guest post on local industry blogs to build authority',
                    ]}
                />
            )

        // ── Conversion & Business Tools ──
        case 'lead-loss-calculator':
            return <LeadLossCalculator />
        case 'website-roi-calculator':
            return <WebsiteRoiCalculator />
        case 'conversion-rate-estimator':
            return <ConversionRateEstimator />
        case 'pricing-estimator':
            return <PricingEstimator />

        default:
            return null
    }
}

// ─── Page component ─────────────────────────────────
export default function ToolPage({ params }: { params: { slug: string } }) {
    const tool = getToolBySlug(params.slug)
    if (!tool) notFound()

    return (
        <>
            <Nav />
            <ToolPageTemplate tool={tool}>
                <ToolBody slug={tool.slug} />
            </ToolPageTemplate>
            <Footer />
        </>
    )
}
