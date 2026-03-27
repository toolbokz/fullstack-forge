"use client";

import React from "react";

const solutions = [
    {
        name: "E-Commerce Store",
        businessType: "Online Retail & E-Commerce",
        problem: "Losing sales to slow pages, clunky checkout, and poor mobile experience",
        outcome: "Increase conversions by up to 40% with optimized product pages and seamless checkout",
        url: "https://react-vite-comfy-store-v2.netlify.app/",
        img: "/assets/portfolio-1.jpeg",
        tag: "Most Popular",
    },
    {
        name: "Community & Organization Site",
        businessType: "Churches, Nonprofits & Communities",
        problem: "No digital hub for engagement, events, or growing your community",
        outcome: "Grow active membership and keep your community connected 24/7",
        url: "https://www.thewarriorscall.org/",
        img: "/assets/portfolio-2.jpg",
        tag: "Community",
    },
    {
        name: "Cleaning Business Website",
        businessType: "Cleaning & Home Services",
        problem: "Relying solely on word-of-mouth with zero online lead generation",
        outcome: "Generate 20+ qualified leads per month through local SEO and booking forms",
        url: "https://cleaning-site-001.netlify.app/",
        img: "/assets/portfolio-3.jpeg",
        tag: "Local Service",
    },
    {
        name: "Accounting Firm Website",
        businessType: "Accountants & Financial Services",
        problem: "No credible online presence — prospects can't verify your expertise",
        outcome: "Build trust instantly and convert website visitors into booked consultations",
        url: "https://accountant-good-for-business.netlify.app/",
        img: "/assets/portfolio-4.jpg",
        tag: "Professional",
    },
    {
        name: "Plumbing Business Website",
        businessType: "Plumbing & Trade Services",
        problem: "Depending on referrals alone — missing out on customers searching online",
        outcome: "Capture local search traffic and turn it into a consistent flow of service calls",
        url: "https://plumbfix-site.netlify.app/",
        img: "/assets/portfolio-5.jpg",
        tag: "Local Service",
    },
    {
        name: "Construction Business Website",
        businessType: "Builders & Contractors",
        problem: "No easy way for potential clients to see your work and request quotes",
        outcome: "Showcase completed projects and generate more quote requests automatically",
        url: "https://builders-app.netlify.app/",
        img: "/assets/portfolio-6.jpg",
        tag: "Trade",
    },
    {
        name: "Electrician Business Website",
        businessType: "Electricians & Electrical Services",
        problem: "Competing on price alone because customers can't see your value online",
        outcome: "Stand out from competitors and attract higher-quality jobs through your website",
        url: "https://electrician-app-101.netlify.app/",
        img: "/assets/portfolio-7.jpg",
        tag: "Local Service",
    },
    {
        name: "Real Estate Tools & Landing Pages",
        businessType: "Real Estate & Property",
        problem: "Losing prospects who want quick answers before committing to an agent",
        outcome: "Engage prospects with interactive tools and capture qualified leads",
        url: "https://real-estate-calculator-001.netlify.app/",
        img: "/assets/portfolio-8.png",
        tag: "Real Estate",
    },
];

export default function Solutions() {
    const [showAll, setShowAll] = React.useState(false);
    const visible = showAll ? solutions : solutions.slice(0, 6);

    return (
        <section className="py-20" id="solutions">
            <div className="container center-all">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                    Pre-Built Solutions
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready-to-Launch Websites for Your Industry
                </h2>
                <p className="text-muted text-lg max-w-2xl mb-12">
                    Don&apos;t start from scratch. Pick a proven design built for your
                    business type — customized and launched in days, not months.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                    {visible.map((s) => (
                        <div
                            key={s.name}
                            className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                        >
                            <div className="relative">
                                <img
                                    src={s.img}
                                    alt={`${s.businessType} website preview`}
                                    className="w-full h-48 object-cover"
                                    loading="lazy"
                                />
                                <span className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    {s.tag}
                                </span>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <p className="text-primary text-sm font-semibold mb-1">
                                    {s.businessType}
                                </p>
                                <h3 className="text-lg font-bold mb-3">{s.name}</h3>

                                <div className="mb-3">
                                    <p className="text-sm text-red-500 font-medium mb-1">
                                        ✗ Problem:
                                    </p>
                                    <p className="text-sm text-muted">{s.problem}</p>
                                </div>
                                <div className="mb-5">
                                    <p className="text-sm text-green-600 font-medium mb-1">
                                        ✓ Expected Result:
                                    </p>
                                    <p className="text-sm text-muted">{s.outcome}</p>
                                </div>

                                <div className="mt-auto flex gap-3">
                                    <a
                                        href={s.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm btn-outline flex-1 text-center"
                                    >
                                        View Live Demo
                                    </a>
                                    <a
                                        href="#contact"
                                        className="btn btn-sm flex-1 text-center"
                                    >
                                        Use This Design
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {solutions.length > 6 && (
                    <button
                        type="button"
                        className="btn btn-outline mt-8"
                        onClick={() => setShowAll((v) => !v)}
                    >
                        {showAll ? "Show Less" : `View All ${solutions.length} Solutions`}
                    </button>
                )}
            </div>
        </section>
    );
}
