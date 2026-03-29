export default function PriceCard({ name, price, period = "one-time", description, features, cta, popular }) {
    return (
        <div
            className={`rounded-2xl p-8 flex flex-col border-2 transition-all duration-300 ${popular
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
                <span className="text-5xl font-extrabold text-gray-900 tracking-tight">
                    {price}
                </span>
                <span className="text-muted text-sm ml-1.5">{period}</span>
            </div>

            <p className="text-muted text-sm mb-6 leading-relaxed">
                {description}
            </p>

            <a
                href="#contact"
                className={`btn text-center w-full py-3.5 text-base font-bold rounded-xl transition-all duration-200 mb-6 ${popular
                    ? "bg-primary hover:bg-primary-dark text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
            >
                {cta}
            </a>

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
        </div>
    );
}
