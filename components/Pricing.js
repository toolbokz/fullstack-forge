"use client";

import React from "react";
import PriceCard from "./PriceCard";

const plans = [
    {
        name: "Starter",
        price: "$699",
        period: "one-time",
        description:
            "Get online fast with a professional site that makes the phone ring",
        features: [
            "1–3 page website",
            "Mobile-friendly design",
            "Click-to-call buttons",
            "Google Maps integration",
            "Basic local SEO setup",
            "Live in 5–7 days",
        ],
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Growth",
        price: "$1,499",
        period: "one-time",
        description:
            "For tradies serious about getting consistent leads from Google",
        features: [
            "Everything in Starter",
            "4–6 pages",
            "Full local SEO optimisation",
            "Lead capture forms + quote requests",
            "Google Business Profile setup",
            "Speed & performance tuning",
            "Live in 7–10 days",
        ],
        cta: "Get More Jobs",
        popular: true,
    },
    {
        name: "Monthly Growth",
        price: "$299",
        period: "/month",
        description:
            "Ongoing optimisation so you keep ranking and keep getting jobs",
        features: [
            "Monthly SEO updates",
            "Content & blog posts for rankings",
            "Google ranking monitoring",
            "Lead tracking & reporting",
            "Website updates & maintenance",
            "Priority support",
        ],
        cta: "Start Growing Monthly",
        popular: false,
    },
];

const tabs = ["Plans", "Custom"];

const faqs = [
    {
        q: "I already have a website. Can you just fix it?",
        a: "Absolutely. We'll audit your existing site (for free) and tell you exactly what needs fixing. Often we can optimise what you have rather than starting from scratch.",
    },
    {
        q: "How long before I see results?",
        a: "Your site goes live within 7–10 days. Most clients see increased enquiries within the first 2–4 weeks. SEO rankings typically improve within 4–8 weeks.",
    },
    {
        q: "I'm not tech-savvy. Is that a problem?",
        a: "Not at all. We handle everything. You just tell us about your business and we do the rest. No technical knowledge needed — that's literally what you're paying us for.",
    },
    {
        q: "What if it doesn't work?",
        a: "We offer a results guarantee. If your website doesn't generate more leads within 30 days, we'll keep working on it for free until it does.",
    },
    {
        q: "Do I need the monthly plan?",
        a: "The one-time plans get you a great website. But Google rewards sites that are regularly updated. The monthly plan keeps you climbing the rankings and bringing in more work.",
    },
    {
        q: "Can I cancel the monthly plan?",
        a: "Yes. No lock-in contracts. Cancel anytime. But most clients stay because it keeps the jobs coming in.",
    },
];

function FAQItem({ q, a }) {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                aria-expanded={open}
            >
                <span className="font-semibold text-gray-900">{q}</span>
                <span
                    className={`text-primary text-xl shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""
                        }`}
                >
                    +
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${open ? "max-h-60 pb-5" : "max-h-0"
                    }`}
            >
                <p className="text-muted text-sm leading-relaxed pr-8">{a}</p>
            </div>
        </div>
    );
}

export default function Pricing() {
    const [activeTab, setActiveTab] = React.useState("Plans");
    const [customMessage, setCustomMessage] = React.useState("");
    const [customEmail, setCustomEmail] = React.useState("");
    const [customName, setCustomName] = React.useState("");
    const [customBusiness, setCustomBusiness] = React.useState("");
    const [customWebsite, setCustomWebsite] = React.useState("");
    const [customSubmitting, setCustomSubmitting] = React.useState(false);
    const [customSubmitted, setCustomSubmitted] = React.useState(false);
    const [customError, setCustomError] = React.useState(null);

    const wordCount = customMessage.trim() === "" ? 0 : customMessage.trim().split(/\s+/).length;

    function handleMessageChange(e) {
        const text = e.target.value;
        const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
        if (words <= 250) setCustomMessage(text);
    }

    async function handleCustomSubmit(e) {
        e.preventDefault();
        setCustomSubmitting(true);
        setCustomError(null);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    formName: "custom-project",
                    name: customName,
                    email: customEmail,
                    businessType: customBusiness,
                    website: customWebsite,
                    message: customMessage,
                }),
            });
            if (res.ok) {
                setCustomSubmitted(true);
            } else {
                throw new Error("Submission failed");
            }
        } catch {
            setCustomError("Something went wrong. Please try again.");
        } finally {
            setCustomSubmitting(false);
        }
    }

    return (
        <section className="py-20 bg-gray-50" id="pricing">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                        Pricing
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Simple Pricing. No Surprises. Just Results.
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Pick the plan that suits your business. Every option is built to get you more jobs.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-10">
                    <div className="inline-flex bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                type="button"
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${activeTab === tab
                                    ? "bg-primary text-white shadow-md"
                                    : "text-gray-600 hover:text-gray-900"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Plans Tab */}
                {activeTab === "Plans" && (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center mb-16">
                            {plans.map((plan) => (
                                <PriceCard key={plan.name} {...plan} />
                            ))}
                        </div>

                        <p className="text-center text-muted text-sm mb-20">
                            All prices in NZD. Need something different?{" "}
                            <button
                                type="button"
                                onClick={() => setActiveTab("Custom")}
                                className="text-primary font-semibold hover:underline"
                            >
                                Let&apos;s build a custom plan
                            </button>
                        </p>
                    </>
                )}

                {/* Custom Tab */}
                {activeTab === "Custom" && (
                    <div className="max-w-2xl mx-auto mb-20">
                        <div className="bg-white rounded-2xl border-2 border-primary/20 p-8 md:p-12 shadow-lg">
                            {customSubmitted ? (
                                <div className="text-center py-8">
                                    <div className="text-5xl mb-4">✓</div>
                                    <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
                                    <p className="text-muted">
                                        We&apos;ll review your project details and get back to you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <>
                                    <div className="text-center mb-8">
                                        <div className="text-4xl mb-4">🛠️</div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                            Need Something Tailored?
                                        </h3>
                                        <p className="text-muted max-w-lg mx-auto">
                                            Every business is different. Tell us what you need and we&apos;ll put together a custom plan with transparent pricing — no obligation.
                                        </p>
                                    </div>

                                    <ul className="flex flex-col gap-3 text-left max-w-md mx-auto mb-8">
                                        {[
                                            "E-commerce or booking systems",
                                            "Multi-location businesses",
                                            "App or portal development",
                                            "API integrations & automations",
                                            "Ongoing retainer arrangements",
                                            "Complete brand & digital overhaul",
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                                                <span className="text-primary mt-0.5 shrink-0 font-bold">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <form onSubmit={handleCustomSubmit} className="flex flex-col gap-4 max-w-lg mx-auto">
                                        <input
                                            name="name"
                                            placeholder="Your name"
                                            required
                                            value={customName}
                                            onChange={(e) => setCustomName(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg border bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-base"
                                        />
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="Email address"
                                            required
                                            value={customEmail}
                                            onChange={(e) => setCustomEmail(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg border bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-base"
                                        />
                                        <select
                                            name="business-type"
                                            required
                                            value={customBusiness}
                                            onChange={(e) => setCustomBusiness(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg border bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-base"
                                        >
                                            <option value="">What type of trade / business?</option>
                                            <option value="plumber">Plumber</option>
                                            <option value="electrician">Electrician</option>
                                            <option value="builder">Builder / Construction</option>
                                            <option value="painter">Painter</option>
                                            <option value="roofer">Roofer</option>
                                            <option value="cleaner">Cleaner</option>
                                            <option value="landscaper">Landscaper</option>
                                            <option value="hvac">HVAC / Gasfitter</option>
                                            <option value="other-trade">Other Trade</option>
                                            <option value="local-service">Other Local Service</option>
                                        </select>
                                        <input
                                            name="website"
                                            type="url"
                                            placeholder="Current website URL (optional)"
                                            value={customWebsite}
                                            onChange={(e) => setCustomWebsite(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg border bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-base"
                                        />
                                        <div>
                                            <textarea
                                                name="message"
                                                placeholder="Tell us about your project — what do you need, any specific features, timeline, budget, etc."
                                                required
                                                rows={5}
                                                value={customMessage}
                                                onChange={handleMessageChange}
                                                className="w-full px-4 py-3 rounded-lg border bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-base resize-y"
                                            />
                                            <p className={`text-xs mt-1.5 text-right ${wordCount >= 240 ? 'text-red-500' : 'text-gray-400'}`}>
                                                {wordCount}/250 words
                                            </p>
                                        </div>

                                        {customError && <p className="text-red-500 text-sm">{customError}</p>}

                                        <button
                                            type="submit"
                                            disabled={customSubmitting}
                                            className="btn w-full text-center text-base font-bold py-3.5 rounded-xl disabled:opacity-60 disabled:cursor-not-allowed"
                                        >
                                            {customSubmitting ? "Sending…" : "Discuss My Project"}
                                        </button>
                                        <p className="text-muted text-xs text-center">
                                            Free consultation · No obligation · Reply within 24 hours
                                        </p>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                )}

                {/* Guarantee / Risk Reversal */}
                <div className="bg-white rounded-2xl border-2 border-green-200 p-8 md:p-12 text-center mb-20 max-w-3xl mx-auto">
                    <div className="text-4xl mb-4">🛡️</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Our &quot;More Jobs&quot; Guarantee
                    </h3>
                    <p className="text-muted mb-6 max-w-xl mx-auto">
                        If your new website doesn&apos;t generate more enquiries within 30 days, we&apos;ll keep optimising it for free until it does. Zero risk.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2 justify-center">
                            <span className="text-green-500 font-bold text-base">✓</span>
                            <span className="text-gray-700">
                                30-day results guarantee
                            </span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                            <span className="text-green-500 font-bold text-base">✓</span>
                            <span className="text-gray-700">
                                No lock-in contracts
                            </span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                            <span className="text-green-500 font-bold text-base">✓</span>
                            <span className="text-gray-700">
                                You own everything
                            </span>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="max-w-2xl mx-auto mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
                        Questions Tradies Ask Us
                    </h3>
                    <div className="border-t border-gray-200">
                        {faqs.map((faq) => (
                            <FAQItem key={faq.q} {...faq} />
                        ))}
                    </div>
                </div>

                {/* Urgency CTA */}
                <div className="text-center bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
                    <p className="text-red-500 font-bold text-sm uppercase tracking-widest mb-3">
                        ⚠️ Limited Availability
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        We Only Take On 5 New Clients Per Month
                    </h3>
                    <p className="text-muted text-lg max-w-xl mx-auto mb-8">
                        To deliver quality results, we limit how many projects we take on. Don&apos;t wait until all spots are filled.
                    </p>
                    <a
                        href="#audit"
                        className="btn btn-lg btn-cta-pulse text-lg px-10 py-4"
                    >
                        Claim Your Free Audit Now
                    </a>
                </div>
            </div>
        </section>
    );
}
