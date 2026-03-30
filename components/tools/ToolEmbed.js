'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { getToolBySlug, ToolIcon } from '../../lib/tools-data'
import { trackToolUsed } from '../../lib/analytics'

// Lazy-load tool components to keep blog bundles lean
const toolComponents = {
    'lead-loss-calculator': dynamic(() => import('../LeadLossCalculator')),
    'website-roi-calculator': dynamic(() => import('../tools/WebsiteRoiCalculator')),
    'conversion-rate-estimator': dynamic(() => import('../tools/ConversionRateEstimator')),
    'pricing-estimator': dynamic(() => import('../tools/PricingEstimator')),
}

/**
 * ToolEmbed — drop into any blog post to embed an interactive tool.
 *
 * Usage in blog content:
 *   <ToolEmbed slug="lead-loss-calculator" />
 *   <ToolEmbed slug="website-roi-calculator" context="See what a new website would return:" />
 *
 * If the tool has no embeddable component, renders a CTA card linking to the full tool page.
 */
export default function ToolEmbed({ slug, context }) {
    const tool = getToolBySlug(slug)
    if (!tool) return null

    const ToolComponent = toolComponents[slug]

    return (
        <div className="tool-embed my-10 rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 px-6 py-4 bg-white border-b border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <ToolIcon icon={tool.icon} size={18} />
                </div>
                <div>
                    <h3 className="text-base font-bold text-gray-900 m-0">{tool.name}</h3>
                    <p className="text-xs text-gray-500 m-0">{context || tool.description}</p>
                </div>
            </div>

            {/* Tool body or CTA fallback */}
            {ToolComponent ? (
                <div
                    className="p-6"
                    onClick={() => trackToolUsed(slug)}
                    onKeyDown={() => { }}
                    role="presentation"
                >
                    <ToolComponent />
                </div>
            ) : (
                <div className="p-6 text-center">
                    <p className="text-gray-600 mb-4">{tool.description}</p>
                    <Link
                        href={`/tools/${slug}`}
                        className="inline-block btn text-sm"
                        onClick={() => trackToolUsed(slug)}
                    >
                        Try {tool.shortName} Free →
                    </Link>
                </div>
            )}

            {/* Footer link to full tool page */}
            {ToolComponent && (
                <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 text-center">
                    <Link href={`/tools/${slug}`} className="text-sm text-primary hover:underline font-medium">
                        Open full {tool.shortName} tool →
                    </Link>
                </div>
            )}
        </div>
    )
}
