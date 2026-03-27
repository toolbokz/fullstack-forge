const steps = [
    {
        number: "01",
        title: "Choose Your Solution",
        description:
            "Browse our pre-built website designs tailored to your industry. Each one is already optimized for conversions and leads.",
        icon: "🎯",
    },
    {
        number: "02",
        title: "We Customize It For You",
        description:
            "We tailor the design to your brand — your colors, content, images, and business details. No cookie-cutter templates.",
        icon: "🎨",
    },
    {
        number: "03",
        title: "Launch & Start Getting Leads",
        description:
            "Your new website goes live in as little as 7 days. Built to rank on Google and convert visitors into customers.",
        icon: "🚀",
    },
];

export default function HowItWorks() {
    return (
        <section className="bg-dark text-white py-20" id="how-it-works">
            <div className="container center-all">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                    How It Works
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Your New Website in 3 Simple Steps
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mb-14">
                    No complicated process. No months of waiting. Just a proven system that
                    gets your business online fast.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">
                    {steps.map((step) => (
                        <div key={step.number} className="text-center relative">
                            <div className="text-5xl mb-4">{step.icon}</div>
                            <span className="text-primary text-sm font-bold tracking-widest">
                                STEP {step.number}
                            </span>
                            <h3 className="text-xl font-bold mt-2 mb-3">{step.title}</h3>
                            <p className="text-gray-400">{step.description}</p>
                        </div>
                    ))}
                </div>

                <a href="#solutions" className="btn mt-12 text-lg px-8 py-3">
                    Browse Solutions
                </a>
            </div>
        </section>
    );
}
