'use client'

import { useState } from 'react'

const formatNZD = (n) =>
    new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD', maximumFractionDigits: 0 }).format(n)

export default function ConversionRateEstimator() {
    const [visitors, setVisitors] = useState('')
    const [currentRate, setCurrentRate] = useState('1')
    const [targetRate, setTargetRate] = useState('5')
    const [avgJobValue, setAvgJobValue] = useState('')
    const [result, setResult] = useState(null)

    function calculate(e) {
        e.preventDefault()
        const v = parseInt(visitors, 10) || 0
        const cr = parseFloat(currentRate) || 1
        const tr = parseFloat(targetRate) || 5
        const job = parseInt(avgJobValue, 10) || 0
        if (v <= 0 || job <= 0) return

        const currentLeads = Math.round(v * (cr / 100))
        const targetLeads = Math.round(v * (tr / 100))
        const extraLeads = targetLeads - currentLeads
        const extraRevenue = extraLeads * job
        const yearlyGain = extraRevenue * 12

        setResult({ currentLeads, targetLeads, extraLeads, extraRevenue, yearlyGain })
    }

    return (
        <div>
            {!result ? (
                <form onSubmit={calculate} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm space-y-6">
                    <div>
                        <label htmlFor="cre-visitors" className="block text-sm font-semibold text-gray-900 mb-1">
                            Monthly Website Visitors
                        </label>
                        <input id="cre-visitors" type="number" min="1" required placeholder="e.g. 500"
                            value={visitors} onChange={(e) => setVisitors(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent" />
                    </div>
                    <div>
                        <label htmlFor="cre-current" className="block text-sm font-semibold text-gray-900 mb-1">
                            Current Conversion Rate (%)
                        </label>
                        <p className="text-xs text-muted mb-2">Most small business sites sit between 1–2%.</p>
                        <select id="cre-current" value={currentRate} onChange={(e) => setCurrentRate(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent">
                            <option value="0.5">0.5%</option>
                            <option value="1">1%</option>
                            <option value="2">2%</option>
                            <option value="3">3%</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="cre-target" className="block text-sm font-semibold text-gray-900 mb-1">
                            Target Conversion Rate (%)
                        </label>
                        <p className="text-xs text-muted mb-2">Our sites target 5–7% with proper CRO.</p>
                        <select id="cre-target" value={targetRate} onChange={(e) => setTargetRate(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent">
                            <option value="3">3%</option>
                            <option value="5">5%</option>
                            <option value="7">7%</option>
                            <option value="10">10%</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="cre-job" className="block text-sm font-semibold text-gray-900 mb-1">
                            Average Job Value (NZD)
                        </label>
                        <input id="cre-job" type="number" min="1" required placeholder="e.g. 800"
                            value={avgJobValue} onChange={(e) => setAvgJobValue(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent" />
                    </div>
                    <button type="submit" className="w-full btn btn-lg btn-cta-pulse text-center">
                        Estimate My Revenue Uplift
                    </button>
                </form>
            ) : (
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="bg-green-50 border-b border-green-100 p-6 text-center">
                        <p className="text-green-600 font-bold text-sm uppercase tracking-wider mb-2">
                            Extra Revenue Potential
                        </p>
                        <p className="text-4xl md:text-5xl font-extrabold text-green-700">
                            {formatNZD(result.yearlyGain)}
                        </p>
                        <p className="text-green-600 text-sm mt-1">additional revenue per year</p>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="grid grid-cols-3 gap-3">
                            <div className="bg-gray-50 rounded-lg p-4 text-center">
                                <p className="text-2xl font-extrabold text-gray-900">{result.currentLeads}</p>
                                <p className="text-xs text-muted">leads now</p>
                            </div>
                            <div className="bg-green-50 rounded-lg p-4 text-center">
                                <p className="text-2xl font-extrabold text-green-700">{result.targetLeads}</p>
                                <p className="text-xs text-muted">target leads</p>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-4 text-center">
                                <p className="text-2xl font-extrabold text-blue-700">+{result.extraLeads}</p>
                                <p className="text-xs text-muted">extra/month</p>
                            </div>
                        </div>
                        <div className="bg-green-50/50 rounded-lg p-4 text-center border border-green-100">
                            <p className="text-lg font-bold text-green-700">
                                +{result.extraLeads} leads × {formatNZD(parseInt(avgJobValue, 10))} = {formatNZD(result.extraRevenue)}/month extra
                            </p>
                        </div>
                        <div className="text-center pt-2">
                            <a href="/#audit" className="btn btn-lg btn-cta-pulse w-full block text-center mb-3">
                                Get My Free Website Audit →
                            </a>
                            <button onClick={() => setResult(null)} className="text-muted text-sm hover:text-gray-900 underline mt-2 inline-block">
                                Recalculate
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
