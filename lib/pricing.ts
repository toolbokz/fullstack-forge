/**
 * Canonical Pricing — single source of truth for all Fullstack Forge pricing.
 * Import from here instead of hardcoding prices across the codebase.
 *
 * Structure: each tier is its own service key so checkout, webhooks, and
 * notifications all resolve cleanly from a single serviceKey lookup.
 */

export type ServiceKey =
    | 'freeAudit'
    | 'optimisationLite'
    | 'optimisationPlus'
    | 'optimisationPro'
    | 'seoSetupBasic'
    | 'seoSetupLocal'
    | 'seoSetupComplete'
    | 'websiteBuildDeposit'
    | 'seoCare'
    | 'seoGrowth'
    | 'seoMomentum'
    | 'aiAutomation'

export type ServiceGroup =
    | 'audit'
    | 'optimisation'
    | 'seoSetup'
    | 'websiteBuilds'
    | 'monthlySeo'
    | 'aiAutomation'

export type BillingType = 'one-time' | '/month' | 'custom' | 'free'

export type CheckoutMode = 'direct' | 'subscription' | 'custom' | 'free'

export interface ServiceDefinition {
    name: string
    price: string
    /** Fixed numeric price in NZD (null for custom/free) */
    priceNum: number | null
    period: BillingType
    description: string
    cta: string
    popular?: boolean
    features: readonly string[]
    /** Which service category this belongs to */
    group: ServiceGroup
    /** How this service is purchased */
    checkoutMode: CheckoutMode
    /** Whether an intake form must be completed before checkout */
    intakeRequired: boolean
    /** Whether this uses a deposit rather than full payment */
    depositOnly?: boolean
    /** Stripe Price ID env var name — set in Stripe dashboard, referenced here */
    stripePriceEnv?: string
    /** For subscription services — Stripe Price ID env var for the recurring price */
    stripeSubscriptionPriceEnv?: string
    /** Helper text shown alongside the intake form */
    intakeHint?: string
}

export const SERVICES: Record<ServiceKey, ServiceDefinition> = {
    /* ── Free Website Audit ─────────────────────────────── */
    freeAudit: {
        name: 'Free Website Audit',
        price: 'Free',
        priceNum: null,
        period: 'free' as const,
        description: 'We review your site and show you exactly what to fix — no payment, no obligation',
        cta: 'Request Your Free Audit',
        features: [
            'Performance & speed analysis',
            'SEO health check',
            'Mobile & accessibility review',
            'Conversion opportunity scan',
            'Prioritised action plan',
            'Personalised recommendations',
        ],
        group: 'audit',
        checkoutMode: 'free',
        intakeRequired: true,
        intakeHint: 'Share your website URL and any concerns. We\'ll review your site and recommend the right next step — no cost, no obligation.',
    },

    /* ── Website Optimisation — 3 fixed tiers ───────────── */
    optimisationLite: {
        name: 'Optimisation Lite',
        price: '$400',
        priceNum: 400,
        period: 'one-time' as const,
        description: 'Essential speed and mobile fixes for your existing site',
        cta: 'Get Optimisation Lite',
        features: [
            'Page speed audit & fixes',
            'Mobile responsiveness improvements',
            'Image optimisation',
            'Core Web Vitals tuning',
            'Performance report',
        ],
        group: 'optimisation',
        checkoutMode: 'direct',
        intakeRequired: true,
        stripePriceEnv: 'STRIPE_PRICE_OPTIMISATION_LITE',
        intakeHint: 'Tell us your website URL so we can scope the optimisation work.',
    },
    optimisationPlus: {
        name: 'Optimisation Plus',
        price: '$650',
        priceNum: 650,
        period: 'one-time' as const,
        description: 'Speed, SEO, and conversion improvements for more leads',
        cta: 'Get Optimisation Plus',
        popular: true,
        features: [
            'Everything in Lite',
            'Conversion rate tweaks',
            'Technical SEO tuning',
            'Accessibility fixes',
            'Metadata & structured data',
            'Detailed performance report',
        ],
        group: 'optimisation',
        checkoutMode: 'direct',
        intakeRequired: true,
        stripePriceEnv: 'STRIPE_PRICE_OPTIMISATION_PLUS',
        intakeHint: 'Tell us your website URL and any specific issues you want fixed.',
    },
    optimisationPro: {
        name: 'Optimisation Pro',
        price: '$900',
        priceNum: 900,
        period: 'one-time' as const,
        description: 'Full-site overhaul — speed, SEO, UX, and content',
        cta: 'Get Optimisation Pro',
        features: [
            'Everything in Plus',
            'Content & copy refinement',
            'Schema markup implementation',
            'Advanced CRO analysis',
            'Priority turnaround',
            'Post-launch check-in',
        ],
        group: 'optimisation',
        checkoutMode: 'direct',
        intakeRequired: true,
        stripePriceEnv: 'STRIPE_PRICE_OPTIMISATION_PRO',
        intakeHint: 'Tell us your website URL, biggest pain points, and any deadlines.',
    },

    /* ── SEO Setup — 3 fixed tiers ──────────────────────── */
    seoSetupBasic: {
        name: 'SEO Setup Basic',
        price: '$300',
        priceNum: 300,
        period: 'one-time' as const,
        description: 'Get indexed and visible with foundational SEO',
        cta: 'Get SEO Basic',
        features: [
            'Keyword research (up to 10 terms)',
            'On-page SEO for up to 5 pages',
            'Google Search Console setup',
            'Sitemap & robots.txt',
            'SEO health report',
        ],
        group: 'seoSetup',
        checkoutMode: 'direct',
        intakeRequired: true,
        stripePriceEnv: 'STRIPE_PRICE_SEO_BASIC',
        intakeHint: 'Share your website URL and the location or keywords you want to rank for.',
    },
    seoSetupLocal: {
        name: 'SEO Setup Local',
        price: '$500',
        priceNum: 500,
        period: 'one-time' as const,
        description: 'Full local SEO foundation to rank in your area',
        cta: 'Get SEO Local',
        popular: true,
        features: [
            'Everything in Basic',
            'Google Analytics setup',
            'Google Business Profile optimisation',
            'Local business citations',
            'Location-targeted content',
            'Competitor gap analysis',
        ],
        group: 'seoSetup',
        checkoutMode: 'direct',
        intakeRequired: true,
        stripePriceEnv: 'STRIPE_PRICE_SEO_LOCAL',
        intakeHint: 'Share your website URL, business location, and target service area.',
    },
    seoSetupComplete: {
        name: 'SEO Setup Complete',
        price: '$800',
        priceNum: 800,
        period: 'one-time' as const,
        description: 'Comprehensive SEO build — technical, local, and content',
        cta: 'Get SEO Complete',
        features: [
            'Everything in Local',
            'Schema markup implementation',
            'Content strategy & initial blog posts',
            'Internal linking structure',
            'Backlink outreach plan',
            'Priority turnaround',
        ],
        group: 'seoSetup',
        checkoutMode: 'direct',
        intakeRequired: true,
        stripePriceEnv: 'STRIPE_PRICE_SEO_COMPLETE',
        intakeHint: 'Share your website URL, location, competitors, and growth goals.',
    },

    /* ── Website Builds — fixed deposit model ───────────── */
    websiteBuildDeposit: {
        name: 'Website Build',
        price: '$500',
        priceNum: 500,
        period: 'one-time' as const,
        description: 'High-converting website for your business — pay a fixed deposit to start',
        cta: 'Pay $500 Deposit',
        popular: true,
        features: [
            'Custom responsive design',
            'SEO-friendly page structure',
            'Speed & performance optimisation',
            'Mobile-first layout',
            'Lead-capture forms & CTAs',
            'Launch within 7–14 days',
        ],
        group: 'websiteBuilds',
        checkoutMode: 'direct',
        intakeRequired: true,
        depositOnly: true,
        stripePriceEnv: 'STRIPE_PRICE_WEBSITE_BUILD_DEPOSIT',
        intakeHint: 'Describe your business, desired pages, and design preferences. The $500 deposit secures your build slot — the remaining balance is confirmed after scope review and invoiced on completion.',
    },

    /* ── Monthly SEO — 3 fixed subscription tiers ───────── */
    seoCare: {
        name: 'SEO Care',
        price: '$150',
        priceNum: 150,
        period: '/month' as const,
        description: 'Keep your site healthy and monitored month to month',
        cta: 'Start SEO Care — $150/mo',
        features: [
            'Rank monitoring & alerts',
            'Monthly technical health check',
            'Quarterly content update',
            'Google Search Console monitoring',
            'Monthly performance snapshot',
        ],
        group: 'monthlySeo',
        checkoutMode: 'subscription',
        intakeRequired: true,
        stripeSubscriptionPriceEnv: 'STRIPE_PRICE_SEO_CARE',
        intakeHint: 'Tell us your website URL and current SEO concerns so we can start monitoring.',
    },
    seoGrowth: {
        name: 'SEO Growth',
        price: '$275',
        priceNum: 275,
        period: '/month' as const,
        description: 'Active SEO work to grow your rankings and traffic',
        cta: 'Start SEO Growth — $275/mo',
        popular: true,
        features: [
            'Everything in Care',
            'Monthly blog content',
            'Link building outreach',
            'Competitor tracking',
            'Monthly strategy call',
            'Detailed monthly report',
        ],
        group: 'monthlySeo',
        checkoutMode: 'subscription',
        intakeRequired: true,
        stripeSubscriptionPriceEnv: 'STRIPE_PRICE_SEO_GROWTH',
        intakeHint: 'Tell us about your business, target keywords, and growth goals.',
    },
    seoMomentum: {
        name: 'SEO Momentum',
        price: '$400',
        priceNum: 400,
        period: '/month' as const,
        description: 'Aggressive growth — content, links, and strategy every week',
        cta: 'Start SEO Momentum — $400/mo',
        features: [
            'Everything in Growth',
            'Weekly content creation',
            'Advanced competitive analysis',
            'Conversion rate monitoring',
            'Priority support & turnaround',
            'Quarterly strategy workshop',
        ],
        group: 'monthlySeo',
        checkoutMode: 'subscription',
        intakeRequired: true,
        stripeSubscriptionPriceEnv: 'STRIPE_PRICE_SEO_MOMENTUM',
        intakeHint: 'Tell us about your business, competitors, and how aggressively you want to grow.',
    },

    /* ── AI Automation — custom quote ───────────────────── */
    aiAutomation: {
        name: 'AI Automation Systems',
        price: 'Custom',
        priceNum: null,
        period: 'custom' as const,
        description: 'Automate workflows, lead handling, and operations with AI tools',
        cta: 'Request AI Automation Quote',
        features: [
            'Custom automation planning',
            'Integration with existing tools',
            'Ongoing optimisation support',
            'Performance dashboards',
            'Chatbot & outreach automation',
            'Revenue-focused automation strategy',
        ],
        group: 'aiAutomation',
        checkoutMode: 'custom',
        intakeRequired: true,
        intakeHint: 'Describe the workflows you want to automate. We\'ll review your requirements and provide a custom scope and quote.',
    },
} as const

/** Shorthand pricing strings for use in copy */
export const PRICE = {
    /** Website builds — deposit model */
    buildDeposit: '$500 deposit',
    buildsFrom: 'From $1,000',
    /** Website optimisation tiers */
    optimisationFrom: 'From $400',
    /** SEO setup tiers */
    seoSetupFrom: 'From $300',
    /** Monthly SEO tiers */
    monthlySeoFrom: 'From $150/month',
    /** Free audit */
    audit: 'Free',
} as const
