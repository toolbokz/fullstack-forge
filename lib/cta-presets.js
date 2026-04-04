/**
 * CTA Presets — ready-to-use CTA configurations for different contexts.
 * Import and spread into CTASection for instant conversion blocks.
 */

export const ctaPresets = {
    /** After blog posts about website design / tradies */
    audit: {
        headline: 'Find Out What\'s Holding Your Website Back',
        body: 'Get a free, no-obligation website audit. We\'ll show you exactly what\'s costing you customers — with real data, not guesswork.',
        primaryCta: { text: 'Get My Free Audit', href: '/contact' },
        secondaryCta: { text: 'See Our Work', href: '/#portfolio' },
        variant: 'primary',
    },

    /** After tool usage — nudge toward human help */
    toolFollowUp: {
        headline: 'Want Us to Fix These Issues For You?',
        body: 'Most business owners see the problems but never get around to fixing them. Our team can turn these insights into real results.',
        primaryCta: { text: 'Book a Free Consultation', href: '/contact' },
        secondaryCta: { text: 'See Pricing', href: '/pricing' },
        variant: 'dark',
    },

    /** Generic lead capture — works anywhere */
    contact: {
        headline: 'Ready to Get More Customers From Your Website?',
        body: 'Stop losing leads to competitors with better websites. Let\'s build something that actually works for your business.',
        primaryCta: { text: 'Get Started Today', href: '/contact' },
        secondaryCta: { text: 'View Services', href: '/services' },
        variant: 'primary',
    },

    /** Calculator/ROI focused */
    calculator: {
        headline: 'How Much Revenue Is Your Website Losing?',
        body: 'Use our free calculators to see exactly what a better website would mean for your bottom line.',
        primaryCta: { text: 'Calculate Your ROI', href: '/tools/website-roi-calculator' },
        secondaryCta: { text: 'Try Lead Loss Calculator', href: '/tools/lead-loss-calculator' },
        variant: 'subtle',
    },

    /** SEO-focused for blog articles about SEO */
    seo: {
        headline: 'Stop Losing Customers to Competitors Who Rank Higher',
        body: 'Our SEO-focused web design gets NZ businesses on page 1 of Google. No fluff — just results backed by data.',
        primaryCta: { text: 'Get My Free SEO Audit', href: '/contact' },
        secondaryCta: { text: 'Learn About Our SEO', href: '/services/seo' },
        variant: 'primary',
    },

    /** Pricing-focused for commercial intent posts */
    pricing: {
        headline: 'Fixed-Price Websites — $500 Deposit to Start',
        body: 'No hidden fees. No vague ranges. Fixed pricing on every service. Pay a deposit, we confirm the scope, and build your site in 7–14 days.',
        primaryCta: { text: 'See Our Plans', href: '/pricing' },
        secondaryCta: { text: 'Get a Custom Quote', href: '/contact' },
        variant: 'dark',
    },
}

/**
 * Get CTA preset by name. Falls back to audit preset.
 */
export function getCtaPreset(name) {
    return ctaPresets[name] || ctaPresets.audit
}
