'use client'

import { useState } from 'react'

const formatNZD = (n) =>
    new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD', maximumFractionDigits: 0 }).format(n)

export default function WebsiteRoiCalculator() {
    const [investment, setInvestment] = useState('')
    const [monthlyLeads, setMonthlyLeads] = useState('')
    const [avgJobValue, setAvgJobValue] = useState('')
    const [closeRate, setCloseRate] = useState('30')
    const [result, setResult] = useState(null)

    function calculate(e) {
        e.preventDefault()
        const inv = parseInt(investment, 10) || 0
        const leads = parseInt(monthlyLeads, 10) || 0
        const job = parseInt(avgJobValue, 10) || 0
        const rate = parseInt(closeRate, 10) || 30
        if (inv <= 0 || leads <= 0 || job <= 0) return

        const monthlyCustomers = Math.round(leads * (rate / 100))
        const monthlyRevenue = monthlyCustomers * job
        const yearlyRevenue = monthlyRevenue * 12
        const roi = Math.round(((yearlyRevenue - inv) / inv) * 100)
        const paybackMonths = monthlyRevenue > 0 ? Math.ceil(inv / monthlyRevenue) : 0

        setResult({ monthlyCustomers, monthlyRevenue, yearlyRevenue, roi, paybackMonths })
    }

    return (
        <div>
            {!result ? (
                <form onSubmit={calculate} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm space-y-6">
                    <div>
                        <label htmlFor="investment" className="block text-sm font-semibold text-gray-900 mb-1">
                            Website Investment (NZD)
                        </label>
                        <p className="text-xs text-muted mb-2">How much would a new website cost? (e.g. $3,000 – $10,000)</p>
                        <input id="investment" type="number" min="1" required placeholder="e.g. 5000"
                            value={investment} onChange={(e) => setInvestment(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent" />
                    </div>
                    <div>
                        <label htmlFor="leads" className="block text-sm font-semibold text-gray-900 mb-1">
                            Expected Monthly Leads
                        </label>
                        <p className="text-xs text-muted mb-2">How many enquiries per month would a good website generate?</p>
                        <input id="leads" type="number" min="1" required placeholder="e.g. 15"
                            value={monthlyLeads} onChange={(e) => setMonthlyLeads(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent" />
                    </div>
                    <div>
                        <label htmlFor="jobval" className="block text-sm font-semibold text-gray-900 mb-1">
                            Average Job Value (NZD)
                        </label>
                        <input id="jobval" type="number" min="1" required placeholder="e.g. 800"
                            value={avgJobValue} onChange={(e) => setAvgJobValue(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent" />
                    </div>
                    <div>
                        <label htmlFor="closerate" className="block text-sm font-semibold text-gray-900 mb-1">
                            Close Rate (%)
                        </label>
                        <p className="text-xs text-muted mb-2">What percentage of leads turn into paying customers?</p>
                        <select id="closerate" value={closeRate} onChange={(e) => setCloseRate(e.target.value)}
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent">
                            <option value="10">10%</option>
                            <option value="20">20%</option>
                            <option value="30">30% (Average)</option>
                            <option value="40">40%</option>
                            <option value="50">50%</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full btn btn-lg btn-cta-pulse text-center">
                        Calculate My ROI
                    </button>
                </form>
            ) : (
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="bg-green-50 border-b border-green-100 p-6 text-center">
                        <p className="text-green-600 font-bold text-sm uppercase tracking-wider mb-2">
                            Your Estimated ROI
                        </p>
                        <p className="text-4xl md:text-5xl font-extrabold text-green-700">
                            {result.roi}%
                        </p>
                        <p className="text-green-600 text-sm mt-1">return on investment in year one</p>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 rounded-lg p-4 text-center">
                                <p className="text-2xl font-extrabold text-gray-900">{result.monthlyCustomers}</p>
                                <p className="text-xs text-muted">new customers/month</p>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-4 text-center">
                                <p className="text-2xl font-extrabold text-gray-900">{formatNZD(result.monthlyRevenue)}</p>
                                <p className="text-xs text-muted">monthly revenue</p>
                            </div>
                        </div>
                        <div className="bg-green-50/50 rounded-lg p-4 text-center border border-green-100">
                            <p className="text-lg font-bold text-green-700">
                                {formatNZD(result.yearlyRevenue)} projected annual revenue
                            </p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
                            <p className="text-sm font-semibold text-blue-800">
                                Your {formatNZD(parseInt(investment, 10))} investment pays for itself in ~{result.paybackMonths} month{result.paybackMonths !== 1 ? 's' : ''}
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
