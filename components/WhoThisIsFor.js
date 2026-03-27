const audiences = [
    {
        icon: "🏠",
        title: "Local Service Businesses",
        description:
            "Plumbers, cleaners, electricians, builders — get a website that turns local searches into booked jobs.",
        examples: "Cleaning, plumbing, electrical, construction",
    },
    {
        icon: "🛒",
        title: "E-Commerce & Online Stores",
        description:
            "Sell more products with fast-loading, conversion-optimized online stores that customers love.",
        examples: "Retail, fashion, home goods, specialty products",
    },
    {
        icon: "💼",
        title: "Professional Services",
        description:
            "Accountants, consultants, agencies — build credibility online and convert visitors into clients.",
        examples: "Accounting, consulting, legal, real estate",
    },
];

export default function WhoThisIsFor() {
    return (
        <section className="bg-gray-50 py-20" id="who-this-is-for">
            <div className="container center-all">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                    Who This Is For
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Built for Businesses That Need Results
                </h2>
                <p className="text-muted text-lg max-w-2xl mb-12">
                    We don&apos;t build generic websites. Every site is designed to generate
                    leads, bookings, and sales for your specific industry.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                    {audiences.map((a) => (
                        <div
                            key={a.title}
                            className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                        >
                            <div className="text-4xl mb-4">{a.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{a.title}</h3>
                            <p className="text-muted mb-4">{a.description}</p>
                            <p className="text-sm text-primary font-medium">
                                {a.examples}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
