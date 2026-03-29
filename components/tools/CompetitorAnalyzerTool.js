'use client'

import { useState } from 'react'
import ResultsPanel from '../ResultsPanel'

/**
 * CompetitorAnalyzerTool — runs /api/audit on two URLs and compares scores side-by-side.
 */
export default function CompetitorAnalyzerTool() {
    const [yourUrl, setYourUrl] = useState('')
    const [competitorUrl, setCompetitorUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [results, setResults] = useState(null)

    function cleanUrl(raw) {
        let u = raw.trim()
        if (!/^https?:\/\//i.test(u)) u = 'https://' + u
        new URL(u) // throws if invalid
        return u
    }

    async function fetchAudit(url) {
        const res = await fetch('/api/audit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url }),
        })
        const json = await res.json()
        if (!res.ok) throw new Error(json.error || `Failed to analyze ${url}`)
        return json
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')
        setResults(null)

        let cleanYours, cleanTheirs
        try { cleanYours = cleanUrl(yourUrl) } catch {
            setError('Please enter a valid URL for your website')
            return
        }
        try { cleanTheirs = cleanUrl(competitorUrl) } catch {
            setError('Please enter a valid URL for the competitor website')
            return
        }

        setLoading(true)
        try {
            const [yours, theirs] = await Promise.all([
                fetchAudit(cleanYours),
                fetchAudit(cleanTheirs),
            ])
            setResults({ yours, theirs })
        } catch (err) {
            setError(err.message || 'Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    function renderComparison() {
        if (!results) return null

        const categories = results.yours.results.map((r) => r.category)

        return (
            <div className="space-y-6">
                {/* Score comparison header */}
                <div className="grid grid-cols-2 gap-4">
                    <ResultsPanel title="Your Website" score={results.yours.score} />
                    <ResultsPanel title="Competitor" score={results.theirs.score} />
                </div>

                {/* Category-by-category */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-100">
                        <h3 className="font-bold">Category Breakdown</h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {categories.map((cat) => {
                            const yours = results.yours.results.find((r) => r.category === cat)
                            const theirs = results.theirs.results.find((r) => r.category === cat)
                            if (!yours || !theirs) return null

                            const diff = yours.score - theirs.score
                            const diffColor = diff > 0 ? 'text-green-600' : diff < 0 ? 'text-red-600' : 'text-gray-500'

                            return (
                                <div key={cat} className="px-6 py-4 flex items-center justify-between">
                                    <span className="font-medium text-sm">{yours.icon} {cat}</span>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-bold w-12 text-right">{yours.score}</span>
                                        <span className="text-gray-300">vs</span>
                                        <span className="text-sm font-bold w-12">{theirs.score}</span>
                                        <span className={`text-xs font-semibold w-16 text-right ${diffColor}`}>
                                            {diff > 0 ? `+${diff}` : diff === 0 ? 'Tied' : diff}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={() => { setResults(null); setYourUrl(''); setCompetitorUrl('') }}
                        className="text-muted text-sm hover:text-gray-900 underline"
                    >
                        Compare again
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div>
            {!results && (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-8 space-y-4">
                    <div>
                        <label htmlFor="your-url" className="block text-sm font-semibold text-gray-900 mb-1">Your Website</label>
                        <input
                            id="your-url"
                            type="text"
                            placeholder="e.g. mywebsite.co.nz"
                            value={yourUrl}
                            onChange={(e) => setYourUrl(e.target.value)}
                            required
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label htmlFor="competitor-url" className="block text-sm font-semibold text-gray-900 mb-1">Competitor Website</label>
                        <input
                            id="competitor-url"
                            type="text"
                            placeholder="e.g. competitor.co.nz"
                            value={competitorUrl}
                            onChange={(e) => setCompetitorUrl(e.target.value)}
                            required
                            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full btn btn-lg btn-cta-pulse disabled:opacity-50"
                    >
                        {loading ? 'Analyzing Both Sites…' : 'Compare Websites'}
                    </button>
                    {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                </form>
            )}

            {loading && (
                <div className="text-center py-12">
                    <div className="inline-block w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4" />
                    <p className="text-muted">Scanning both websites… this can take up to a minute.</p>
                </div>
            )}

            {renderComparison()}
        </div>
    )
}
