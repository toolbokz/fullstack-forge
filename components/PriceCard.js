export default function PriceCard({ name, price, period = "one-time", description, features, cta, popular, serviceKey, onSelect, justification }) {
    return (
        <div
            className={`rounded-2xl p-8 flex flex-col border-2 transition-all duration-300 w-full ${popular
                ? "border-primary bg-white shadow-xl shadow-primary/10 relative scale-[1.03] z-10"
                : "border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-gray-300"
                }`}
        >
            {popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                    Most Popular
                </span>
            )}

            <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>

            <div className="mb-3">
                <span className="text-4xl font-extrabold text-gray-900 tracking-tight">
                    {price}
                </span>
                <span className="text-muted text-sm ml-1.5">{period}</span>
            </div>

            <p className="text-muted text-sm mb-6 leading-relaxed">
                {description}
            </p>

            <button
                type="button"
                onClick={() => onSelect?.(serviceKey)}
                className={`btn text-center w-full py-3.5 text-base font-bold rounded-xl transition-all duration-200 mb-6 ${popular
                    ? "bg-primary hover:bg-primary-dark text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
            >
                {cta}
            </button>

            <div className="border-t border-gray-100 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                    What&apos;s included
                </p>
                <ul className="flex flex-col gap-3 text-left">
                    {features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                            <span className="text-green-500 mt-0.5 shrink-0 font-bold">✓</span>
                            <span>{f}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {justification && (
                <details className="mt-6 border-t border-gray-100 pt-4 group">
                    <summary className="flex items-center justify-between cursor-pointer text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-gray-600 transition-colors list-none">
                        <span>Why this price?</span>
                        <span className="text-primary text-base transition-transform duration-200 group-open:rotate-45">+</span>
                    </summary>
                    <div className="mt-4 space-y-3 text-sm text-muted leading-relaxed">
                        <div>
                            <p className="font-semibold text-gray-700 text-xs uppercase tracking-wide mb-1">Best for</p>
                            <p>{justification.bestFor}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700 text-xs uppercase tracking-wide mb-1">Why it costs this</p>
                            <p>{justification.whyThisPrice}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700 text-xs uppercase tracking-wide mb-1">What to expect</p>
                            <p>{justification.expectedResult}</p>
                        </div>
                    </div>
                </details>
            )}
        </div>
    );
}
