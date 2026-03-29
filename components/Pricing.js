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

                {/* Price Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center mb-16">
                    {plans.map((plan) => (
                        <PriceCard key={plan.name} {...plan} />
                    ))}
                </div>

                {/* Custom callout */}
                <p className="text-center text-muted text-sm mb-20">
                    All prices in NZD. Need something different?{" "}
                    <a
                        href="#contact"
                        className="text-primary font-semibold hover:underline"
                    >
                        Let&apos;s have a yarn
                    </a>
                </p>

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
