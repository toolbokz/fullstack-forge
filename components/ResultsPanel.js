'use client'

/**
 * ResultsPanel — displays tool results in a formatted card.
 * Props:
 * - title: string
 * - score: number (0-100, optional)
 * - items: array of { label, value, status ('pass'|'warning'|'critical'), detail? }
 * - children: optional extra content below items
 */
export default function ResultsPanel({ title, score, items = [], children }) {
    const scoreColor =
        score >= 70 ? 'text-green-500 bg-green-50 border-green-200'
            : score >= 40 ? 'text-yellow-500 bg-yellow-50 border-yellow-200'
                : 'text-red-500 bg-red-50 border-red-200'

    const statusColors = {
        pass: 'bg-green-50 text-green-700 border-green-200',
        warning: 'bg-yellow-50 text-yellow-700 border-yellow-200',
        critical: 'bg-red-50 text-red-700 border-red-200',
    }

    const statusIcons = { pass: '✓', warning: '⚠', critical: '✕' }

    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Score header */}
            {score !== undefined && score !== null && (
                <div className={`flex items-center justify-center gap-3 p-6 border-b ${scoreColor}`}>
                    <span className="text-4xl font-extrabold">{score}</span>
                    <span className="text-sm font-medium opacity-80">/100</span>
                    <span className="text-sm font-semibold ml-2">
                        {score >= 70 ? 'Good' : score >= 40 ? 'Needs Work' : 'Critical'}
                    </span>
                </div>
            )}

            {title && (
                <div className="px-6 pt-5 pb-2">
                    <h3 className="text-lg font-bold">{title}</h3>
                </div>
            )}

            {/* Items */}
            {items.length > 0 && (
                <div className="px-6 pb-4 space-y-3">
                    {items.map((item, i) => (
                        <div key={i} className={`rounded-lg p-4 border ${statusColors[item.status] || 'bg-gray-50 border-gray-200'}`}>
                            <div className="flex items-center justify-between mb-1">
                                <span className="font-semibold text-sm flex items-center gap-2">
                                    <span>{statusIcons[item.status] || '•'}</span>
                                    {item.label}
                                </span>
                                <span className="font-bold text-sm">{item.value}</span>
                            </div>
                            {item.detail && (
                                <p className="text-xs opacity-75 mt-1">{item.detail}</p>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {children && (
                <div className="px-6 pb-6">
                    {children}
                </div>
            )}
        </div>
    )
}
