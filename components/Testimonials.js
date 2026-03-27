const testimonials = [
    {
        quote: "Our old website got zero leads. Within 2 weeks of launching the new one, we had 15 new inquiries. The ROI paid for itself in the first month.",
        name: "Jane D.",
        business: "Acme Cleaning Services",
        result: "15 new leads in 2 weeks",
    },
    {
        quote: "Professional, fast, and they actually understand what small businesses need. Our site loads in under a second and bookings have doubled.",
        name: "Mike S.",
        business: "StartupX Consulting",
        result: "2x increase in bookings",
    },
    {
        quote: "We went from being invisible on Google to ranking on page 1 for our local area. The lead capture forms are generating consistent enquiries every week.",
        name: "Sarah T.",
        business: "Elite Electrical",
        result: "Page 1 Google ranking",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-gray-50 py-20" id="testimonials">
            <div className="container center-all">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                    Results That Speak
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    What Our Clients Say
                </h2>
                <p className="text-muted text-lg max-w-2xl mb-12">
                    Real businesses. Real results. Here&apos;s what happens when your website
                    is built for conversions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
                    {testimonials.map((t) => (
                        <blockquote
                            key={t.name}
                            className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-left flex flex-col"
                        >
                            <div className="text-primary text-3xl mb-3">&ldquo;</div>
                            <p className="text-gray-700 mb-6 flex-1">{t.quote}</p>
                            <div className="border-t border-gray-100 pt-4">
                                <span className="inline-block bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                                    {t.result}
                                </span>
                                <p className="font-bold text-sm">{t.name}</p>
                                <p className="text-muted text-sm">{t.business}</p>
                            </div>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
}
