'use client'

import { useState } from 'react'

const formatNZD = (n) =>
    new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD', maximumFractionDigits: 0 }).format(n)

const FEATURE_COSTS = {
    pages: {
        label: 'Number of Pages', options: [
            { label: '1–5 pages (brochure site)', value: 0, cost: 0 },
            { label: '6–10 pages', value: 1, cost: 800 },
            { label: '11–20 pages', value: 2, cost: 1800 },
            { label: '20+ pages', value: 3, cost: 3000 },
        ]
    },
    design: {
        label: 'Design Level', options: [
            { label: 'Template-based', value: 0, cost: 0 },
            { label: 'Custom design', value: 1, cost: 1500 },
            { label: 'Premium custom design', value: 2, cost: 3000 },
        ]
    },
    ecommerce: {
        label: 'E-Commerce', options: [
            { label: 'No online store', value: 0, cost: 0 },
            { label: 'Simple store (< 20 products)', value: 1, cost: 1500 },
            { label: 'Full e-commerce (20+ products)', value: 2, cost: 3500 },
        ]
    },
    seo: {
        label: 'SEO Package', options: [
            { label: 'Basic on-page SEO', value: 0, cost: 0 },
            { label: 'Local SEO setup', value: 1, cost: 600 },
            { label: 'Full SEO strategy + content', value: 2, cost: 1500 },
        ]
    },
    extras: {
        label: 'Extra Features', options: [
            { label: 'None', value: 0, cost: 0 },
            { label: 'Blog + contact forms', value: 1, cost: 400 },
            { label: 'Booking system / integrations', value: 2, cost: 1200 },
            { label: 'Custom functionality', value: 3, cost: 2500 },
        ]
    },
}

const BASE_PRICE = 1500

export default function PricingEstimator() {
    const [selections, setSelections] = useState({
        pages: 0, design: 0, ecommerce: 0, seo: 0, extras: 0,
    })
    const [showResult, setShowResult] = useState(false)

    const totalCost = BASE_PRICE + Object.entries(selections).reduce((sum, [key, val]) => {
        const feature = FEATURE_COSTS[key]
        const option = feature.options.find((o) => o.value === val)
        return sum + (option?.cost || 0)
    }, 0)

    function handleChange(key, value) {
        setSelections((prev) => ({ ...prev, [key]: parseInt(value, 10) }))
    }

    return (
        <div>
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm space-y-6">
                {Object.entries(FEATURE_COSTS).map(([key, feature]) => (
                    <div key={key}>
                        <label htmlFor={`pe-${key}`} className="block text-sm font-semibold text-gray-900 mb-2">
                            {feature.label}
                        </label>
                        <select
                            id={`pe-${key}`}
                            value={selections[key]}
                            onChange={(e) => handleChange(key, e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                            {feature.options.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label} {opt.cost > 0 ? `(+${formatNZD(opt.cost)})` : '(included)'}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}

                <button
                    onClick={() => setShowResult(true)}
                    className="w-full btn btn-lg btn-cta-pulse text-center"
                >
                    Get My Estimate
                </button>
            </div>

            {showResult && (
                <div className="mt-8 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="bg-primary/5 border-b border-primary/10 p-6 text-center">
                        <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">
                            Your Estimated Project Cost
                        </p>
                        <p className="text-4xl md:text-5xl font-extrabold text-gray-900">
                            {formatNZD(totalCost)}
                        </p>
                        <p className="text-muted text-sm mt-2">Starting from {formatNZD(BASE_PRICE)} base price</p>
                    </div>
                    <div className="p-6 space-y-3">
                        {Object.entries(FEATURE_COSTS).map(([key, feature]) => {
                            const opt = feature.options.find((o) => o.value === selections[key])
                            return (
                                <div key={key} className="flex justify-between text-sm border-b border-gray-100 pb-2">
                                    <span className="text-gray-600">{feature.label}</span>
                                    <span className="font-semibold">{opt?.label}</span>
                                </div>
                            )
                        })}
                        <div className="pt-4 text-center">
                            <p className="text-xs text-muted mb-4">
                                This is an estimate only. Every project is unique — get in touch for an accurate quote tailored to your business.
                            </p>
                            <a href="/#contact" className="btn btn-lg btn-cta-pulse w-full block text-center mb-3">
                                Get My Exact Quote — Free
                            </a>
                            <button
                                onClick={() => setShowResult(false)}
                                className="text-muted text-sm hover:text-gray-900 underline mt-2 inline-block"
                            >
                                Adjust selections
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
