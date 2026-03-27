const reasons = [
    {
        icon: "⚡",
        title: "Launched in Days, Not Months",
        description:
            "Most agencies take 8–12 weeks. We deliver in 7 days or less because we use proven, pre-built solutions — not generic templates.",
        stat: "7-day",
        statLabel: "average delivery",
    },
    {
        icon: "📈",
        title: "Built for Conversions, Not Just Looks",
        description:
            "Every element is designed to turn visitors into leads. Strategic CTAs, fast load times, mobile-first design, and SEO baked in.",
        stat: "3x",
        statLabel: "more leads vs average sites",
    },
    {
        icon: "💰",
        title: "Agency Quality, Freelancer Price",
        description:
            "Get the same quality a $10K+ agency delivers, at a fraction of the cost. No bloated teams, no overhead — just results.",
        stat: "70%",
        statLabel: "less than agencies",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-20" id="why-us">
            <div className="container center-all">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                    Why Fullstack Forge
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Why Smart Businesses Choose Us
                </h2>
                <p className="text-muted text-lg max-w-2xl mb-14">
                    We&apos;re not another web design agency. We&apos;re a conversion-focused
                    team that builds websites as growth tools.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                    {reasons.map((r) => (
                        <div
                            key={r.title}
                            className="text-center p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="text-4xl mb-4">{r.icon}</div>
                            <div className="mb-4">
                                <span className="text-3xl font-extrabold text-primary">
                                    {r.stat}
                                </span>
                                <p className="text-sm text-muted">{r.statLabel}</p>
                            </div>
                            <h3 className="text-xl font-bold mb-3">{r.title}</h3>
                            <p className="text-muted">{r.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
