"use client";

import React from "react";
import PriceCard from "./PriceCard";

const plans = [
    {
        name: "Starter",
        price: "$699",
        description:
            "For small businesses that need a professional online presence",
        features: [
            "1–3 page website",
            "Mobile optimized",
            "Basic SEO setup",
            "Contact form",
            "Fast delivery (2–4 days)",
        ],
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Growth",
        price: "$1,199",
        description:
            "For businesses that want consistent leads and customers",
        features: [
            "Everything in Starter",
            "4–6 pages",
            "Conversion-focused design",
            "Lead capture system",
            "SEO structure",
            "Performance optimization",
        ],
        cta: "Get More Customers",
        popular: true,
    },
    {
        name: "Pro",
        price: "$2,499",
        description:
            "For businesses ready to scale aggressively",
        features: [
            "Everything in Growth",
            "Full funnel setup (landing pages)",
            "Advanced SEO",
            "Analytics integration",
            "Custom features",
            "Priority support",
        ],
        cta: "Scale My Business",
        popular: false,
    },
];

const faqs = [
    {
        q: "How long does it take?",
        a: "Starter sites launch in 2–4 days. Growth and Pro packages take 5–7 business days depending on scope. We always confirm your timeline before we start.",
    },
    {
        q: "Can I customize the design?",
        a: "Absolutely. Every site is customized to your brand — your colors, fonts, images, and content. These aren't cookie-cutter templates.",
    },
    {
        q: "Do you provide hosting?",
        a: "We deploy to fast, reliable hosting (Netlify or Vercel) included at no extra charge. You own everything — domain, code, and content.",
    },
    {
        q: "Will my site rank on Google?",
        a: "Every plan includes SEO fundamentals. Growth and Pro plans include advanced SEO structure designed to help you rank for local and industry searches.",
    },
    {
        q: "What happens after launch?",
        a: "Pro plan includes 30 days of post-launch support. All plans include deployment and a handoff walkthrough. Additional support packages are available.",
    },
    {
        q: "Is there a money-back guarantee?",
        a: "Yes. If we don't deliver within the agreed timeline, you get a full refund. No risk, no hassle.",
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
                {/* ── Header ── */}
                <div className="text-center mb-14">
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                        Pricing
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Simple pricing. Built to grow your business.
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Choose a plan that fits your needs — all designed to generate
                        leads, customers, and sales.
                    </p>
                </div>

                {/* ── Price Cards ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center mb-16">
                    {plans.map((plan) => (
                        <PriceCard key={plan.name} {...plan} />
                    ))}
                </div>

                {/* ── Custom callout ── */}
                <p className="text-center text-muted text-sm mb-20">
                    All prices in NZD. Need something custom?{" "}
                    <a
                        href="#contact"
                        className="text-primary font-semibold hover:underline"
                    >
                        Let&apos;s talk
                    </a>
                </p>

                {/* ── Guarantee / Risk Reversal ── */}
                <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 text-center mb-20 max-w-3xl mx-auto">
                    <div className="text-4xl mb-4">🛡️</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Our Promise to You
                    </h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2 justify-center">
                            <span className="text-green-500 font-bold text-base">✓</span>
                            <span className="text-gray-700">
                                Launch in days or your money back
                            </span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                            <span className="text-green-500 font-bold text-base">✓</span>
                            <span className="text-gray-700">
                                Built to generate leads, not just look good
                            </span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                            <span className="text-green-500 font-bold text-base">✓</span>
                            <span className="text-gray-700">
                                You own everything — code, content, domain
                            </span>
                        </div>
                    </div>
                </div>

                {/* ── FAQ ── */}
                <div className="max-w-2xl mx-auto mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
                        Frequently Asked Questions
                    </h3>
                    <div className="border-t border-gray-200">
                        {faqs.map((faq) => (
                            <FAQItem key={faq.q} {...faq} />
                        ))}
                    </div>
                </div>

                {/* ── Final CTA ── */}
                <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Ready to grow your business?
                    </h3>
                    <p className="text-muted text-lg max-w-xl mx-auto mb-8">
                        Stop losing customers to a website that doesn&apos;t work.
                        Find out exactly what&apos;s holding you back — for free.
                    </p>
                    <a
                        href="#audit"
                        className="btn btn-lg text-lg px-10 py-4 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
                    >
                        Get Your Free Website Audit
                    </a>
                </div>
            </div>
        </section>
    );
}
