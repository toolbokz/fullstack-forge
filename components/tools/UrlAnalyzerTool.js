'use client'

import { useState } from 'react'
import ResultsPanel from '../ResultsPanel'

/**
 * UrlAnalyzerTool — shared URL-based tool.
 * Calls /api/audit and displays filtered Lighthouse results.
 *
 * @param {Object} props
 * @param {string[]|null} [props.filterCategories] - category names to display
 * @param {string} [props.tipHeading] - heading above tips
 * @param {string[]} [props.tips] - actionable advice shown after results
 */
export default function UrlAnalyzerTool({ filterCategories = null, tipHeading = 'Recommendations', tips = /** @type {string[]} */ ([]) }) {
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')
        setData(null)

        let cleanUrl = url.trim()
        if (!cleanUrl) return
        if (!/^https?:\/\//i.test(cleanUrl)) cleanUrl = 'https://' + cleanUrl

        try { new URL(cleanUrl) } catch {
            setError('Please enter a valid URL (e.g. example.co.nz)')
            return
        }

        setLoading(true)
        try {
            const res = await fetch('/api/audit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: cleanUrl }),
            })
            const json = await res.json()
            if (!res.ok) throw new Error(json.error || 'Analysis failed')
            setData(json)
        } catch (err) {
            setError(err.message || 'Something went wrong. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    const filteredResults = data?.results
        ? filterCategories
            ? data.results.filter((r) => filterCategories.includes(r.category))
            : data.results
        : []

    const overallScore = filteredResults.length
        ? Math.round(filteredResults.reduce((s, r) => s + r.score, 0) / filteredResults.length)
        : null

    return (
        <div>
            {/* URL Input Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-8">
                <label htmlFor="tool-url" className="block text-sm font-semibold text-gray-900 mb-2">
                    Enter your website URL
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                    <input
                        id="tool-url"
                        type="text"
                        placeholder="e.g. mywebsite.co.nz"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                        className="flex-1 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-cta-pulse whitespace-nowrap disabled:opacity-50"
                    >
                        {loading ? 'Analyzing…' : 'Run Analysis'}
                    </button>
                </div>
                {error && <p className="text-red-600 text-sm mt-3">{error}</p>}
            </form>

            {/* Loading Indicator */}
            {loading && (
                <div className="text-center py-12">
                    <div className="inline-block w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4" />
                    <p className="text-muted">Scanning your website… this can take 15–30 seconds.</p>
                </div>
            )}

            {/* Results */}
            {data && !loading && (
                <div className="space-y-6">
                    <ResultsPanel
                        title="Your Results"
                        score={overallScore}
                        items={filteredResults.map((r) => ({
                            label: `${r.icon} ${r.category}`,
                            value: `${r.score}/100`,
                            status: r.status,
                            detail: r.detail,
                        }))}
                    />

                    {tips.length > 0 && (
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                            <h3 className="font-bold text-blue-900 mb-3">{tipHeading}</h3>
                            <ul className="space-y-2">
                                {tips.map((tip, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
                                        <span className="text-blue-500 mt-0.5">→</span>
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="text-center">
                        <button
                            onClick={() => { setData(null); setUrl('') }}
                            className="text-muted text-sm hover:text-gray-900 underline"
                        >
                            Scan another website
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
