"use client";

import React from "react";
import PriceCard from "./PriceCard";
import ServiceIntakeForm from "./ServiceIntakeForm";

/* ── Service groups with tiers ──────────────────────────── */

const freeAudit = {
    serviceKey: "freeAudit",
    name: "Free Website Audit",
    price: "Free",
    period: "free",
    description: "We review your site and show you exactly what to fix — no payment, no obligation",
    features: [
        "Performance & speed analysis",
        "SEO health check",
        "Mobile & accessibility review",
        "Conversion opportunity scan",
        "Prioritised action plan",
        "Personalised recommendations",
    ],
    cta: "Request Your Free Audit",
    popular: false,
    checkoutMode: "free",
};

const optimisationTiers = [
    {
        serviceKey: "optimisationLite",
        name: "Optimisation Lite",
        price: "$400",
        period: "one-time",
        description: "Essential speed and mobile fixes for your existing site",
        features: [
            "Page speed audit & fixes",
            "Mobile responsiveness improvements",
            "Image optimisation",
            "Core Web Vitals tuning",
            "Performance report",
        ],
        cta: "Get Optimisation Lite",
        popular: false,
        justification: {
            bestFor: "Businesses with an existing website that loads slowly or doesn\u2019t work well on mobile. A targeted fix, not a rebuild.",
            whyThisPrice: "Covers a focused speed and mobile audit with hands-on fixes. Scoped to the most impactful issues so you get results without overpaying.",
            expectedResult: "Faster load times, better mobile experience, and improved Core Web Vitals scores.",
        },
    },
    {
        serviceKey: "optimisationPlus",
        name: "Optimisation Plus",
        price: "$650",
        period: "one-time",
        description: "Speed, SEO, and conversion improvements for more leads",
        features: [
            "Everything in Lite",
            "Conversion rate tweaks",
            "Technical SEO tuning",
            "Accessibility fixes",
            "Metadata & structured data",
            "Detailed performance report",
        ],
        cta: "Get Optimisation Plus",
        popular: true,
        justification: {
            bestFor: "Businesses whose site looks okay but isn\u2019t converting visitors into enquiries. You need speed, SEO, and UX improvements working together.",
            whyThisPrice: "Includes everything in Lite plus conversion and SEO work. This is the sweet spot for most small businesses wanting more leads from existing traffic.",
            expectedResult: "Faster site, better Google visibility, and more visitor-to-lead conversions.",
        },
    },
    {
        serviceKey: "optimisationPro",
        name: "Optimisation Pro",
        price: "$900",
        period: "one-time",
        description: "Full-site overhaul — speed, SEO, UX, and content",
        features: [
            "Everything in Plus",
            "Content & copy refinement",
            "Schema markup implementation",
            "Advanced CRO analysis",
            "Priority turnaround",
            "Post-launch check-in",
        ],
        cta: "Get Optimisation Pro",
        popular: false,
        justification: {
            bestFor: "Businesses that want a comprehensive overhaul of their existing site \u2014 speed, SEO, content, and conversion all addressed together.",
            whyThisPrice: "This is a full-site optimisation including content refinement, schema markup, and CRO analysis. Priority turnaround and a post-launch check-in are included.",
            expectedResult: "A site that performs like a purpose-built lead generation machine, without the cost of a full rebuild.",
        },
    },
];

const seoSetupTiers = [
    {
        serviceKey: "seoSetupBasic",
        name: "SEO Setup Basic",
        price: "$300",
        period: "one-time",
        description: "Get indexed and visible with foundational SEO",
        features: [
            "Keyword research (up to 10 terms)",
            "On-page SEO for up to 5 pages",
            "Google Search Console setup",
            "Sitemap & robots.txt",
            "SEO health report",
        ],
        cta: "Get SEO Basic",
        popular: false,
        justification: {
            bestFor: "Businesses that have never set up SEO. No Search Console, no keyword targeting, no sitemap. This is the technical foundation Google needs.",
            whyThisPrice: "A one-time setup covering the essentials. We do the keyword research, configure your pages, and make sure Google can find and index your site.",
            expectedResult: "Your site gets indexed properly and starts appearing in relevant search results.",
        },
    },
    {
        serviceKey: "seoSetupLocal",
        name: "SEO Setup Local",
        price: "$500",
        period: "one-time",
        description: "Full local SEO foundation to rank in your area",
        features: [
            "Everything in Basic",
            "Google Analytics setup",
            "Google Business Profile optimisation",
            "Local business citations",
            "Location-targeted content",
            "Competitor gap analysis",
        ],
        cta: "Get SEO Local",
        popular: true,
        justification: {
            bestFor: "Local businesses and tradies that want to rank in their area. If you serve a specific region, this is the one to get.",
            whyThisPrice: "Includes foundation SEO plus local-specific work: Google Business Profile, citations, location content, and competitor analysis. Built for NZ local markets.",
            expectedResult: "Better visibility in local search results, Google Maps presence, and more enquiries from people searching in your area.",
        },
    },
    {
        serviceKey: "seoSetupComplete",
        name: "SEO Setup Complete",
        price: "$800",
        period: "one-time",
        description: "Comprehensive SEO build — technical, local, and content",
        features: [
            "Everything in Local",
            "Schema markup implementation",
            "Content strategy & initial blog posts",
            "Internal linking structure",
            "Backlink outreach plan",
            "Priority turnaround",
        ],
        cta: "Get SEO Complete",
        popular: false,
        justification: {
            bestFor: "Businesses in competitive markets that need a thorough SEO foundation \u2014 technical, local, and content strategy all done properly from day one.",
            whyThisPrice: "A full SEO buildout including schema, initial content, internal linking, and a backlink plan. This sets you up for long-term organic growth.",
            expectedResult: "A search-optimised site with content, local presence, and a plan for growing organic traffic month over month.",
        },
    },
];

const websiteBuild = {
    serviceKey: "websiteBuildDeposit",
    name: "Website Build",
    price: "$500",
    period: "deposit",
    description: "High-converting website for your business — pay a fixed deposit to start",
    features: [
        "Custom responsive design",
        "SEO-friendly page structure",
        "Speed & performance optimisation",
        "Mobile-first layout",
        "Lead-capture forms & CTAs",
        "Launch within 7\u201314 days",
    ],
    cta: "Pay $500 Deposit",
    popular: true,
    depositOnly: true,
    justification: {
        bestFor: "Tradies, local service businesses, and small companies that need a professional site built to generate leads \u2014 not just look pretty.",
        whyThisPrice: "A $500 deposit locks in your build slot. The total project cost (typically $1,000\u2013$2,000) is confirmed after we review your brief \u2014 the remainder is invoiced on completion. No surprises.",
        expectedResult: "A fast, mobile-friendly website that ranks locally, captures leads through forms and CTAs, and starts generating enquiries within weeks of launch.",
    },
};

const monthlySeoTiers = [
    {
        serviceKey: "seoCare",
        name: "SEO Care",
        price: "$150",
        period: "/month",
        description: "Keep your site healthy and monitored month to month",
        features: [
            "Rank monitoring & alerts",
            "Monthly technical health check",
            "Quarterly content update",
            "Google Search Console monitoring",
            "Monthly performance snapshot",
        ],
        cta: "Start SEO Care \u2014 $150/mo",
        popular: false,
        justification: {
            bestFor: "Businesses that already have a decent site and just need someone watching the SEO health, keeping things ticking over.",
            whyThisPrice: "$150/month covers rank monitoring, technical checks, and quarterly content refreshes. It\u2019s maintenance-level SEO that keeps your site from sliding.",
            expectedResult: "Consistent search performance. No nasty ranking drops. Quarterly improvements to keep your content fresh.",
        },
    },
    {
        serviceKey: "seoGrowth",
        name: "SEO Growth",
        price: "$275",
        period: "/month",
        description: "Active SEO work to grow your rankings and traffic",
        features: [
            "Everything in Care",
            "Monthly blog content",
            "Link building outreach",
            "Competitor tracking",
            "Monthly strategy call",
            "Detailed monthly report",
        ],
        cta: "Start SEO Growth \u2014 $275/mo",
        popular: true,
        justification: {
            bestFor: "Businesses that want to actively grow their organic traffic. You\u2019re ready to invest in content, links, and strategy every month.",
            whyThisPrice: "$275/month covers monthly content creation, link building, competitor monitoring, and a strategy call. This is active SEO, not just monitoring.",
            expectedResult: "Compounding organic visibility \u2014 more local traffic, higher rankings, and a steady increase in inbound enquiries over time.",
        },
    },
    {
        serviceKey: "seoMomentum",
        name: "SEO Momentum",
        price: "$400",
        period: "/month",
        description: "Aggressive growth — content, links, and strategy every week",
        features: [
            "Everything in Growth",
            "Weekly content creation",
            "Advanced competitive analysis",
            "Conversion rate monitoring",
            "Priority support & turnaround",
            "Quarterly strategy workshop",
        ],
        cta: "Start SEO Momentum \u2014 $400/mo",
        popular: false,
        justification: {
            bestFor: "Businesses in competitive markets that want aggressive organic growth. You need weekly content, active link building, and hands-on strategy.",
            whyThisPrice: "$400/month covers weekly content, advanced analysis, CRO monitoring, and quarterly workshops. This is the most intensive plan for businesses serious about dominating local search.",
            expectedResult: "Rapid organic growth, dominant local rankings, and a content library that builds long-term authority.",
        },
    },
];

const aiAutomation = {
    serviceKey: "aiAutomation",
    name: "AI Automation Systems",
    price: "Custom",
    period: "custom",
    description: "Automate workflows, lead handling, and operations with AI tools",
    features: [
        "Custom automation planning",
        "Integration with existing tools",
        "Ongoing optimisation support",
        "Performance dashboards",
        "Chatbot & outreach automation",
        "Revenue-focused automation strategy",
    ],
    cta: "Request AI Automation Quote",
    popular: false,
    justification: {
        bestFor: "Businesses handling repetitive tasks manually \u2014 lead follow-ups, quoting, scheduling, client onboarding \u2014 that could be automated to save hours.",
        whyThisPrice: "Pricing is custom because every automation project is different. A simple chatbot is a different job from a full lead-routing pipeline. We scope every project individually.",
        expectedResult: "Less manual busywork, faster response times, and fewer leads falling through the cracks.",
    },
};

const SERVICE_CONFIG = {
    freeAudit: { checkoutMode: "free", depositOnly: false, intakeHint: "Share your website URL and any concerns. We\u2019ll review your site and recommend the right next step \u2014 no cost, no obligation." },
    optimisationLite: { checkoutMode: "direct", depositOnly: false, intakeHint: "Tell us your website URL so we can scope the optimisation work." },
    optimisationPlus: { checkoutMode: "direct", depositOnly: false, intakeHint: "Tell us your website URL and any specific issues you want fixed." },
    optimisationPro: { checkoutMode: "direct", depositOnly: false, intakeHint: "Tell us your website URL, biggest pain points, and any deadlines." },
    seoSetupBasic: { checkoutMode: "direct", depositOnly: false, intakeHint: "Share your website URL and the location or keywords you want to rank for." },
    seoSetupLocal: { checkoutMode: "direct", depositOnly: false, intakeHint: "Share your website URL, business location, and target service area." },
    seoSetupComplete: { checkoutMode: "direct", depositOnly: false, intakeHint: "Share your website URL, location, competitors, and growth goals." },
    websiteBuildDeposit: { checkoutMode: "direct", depositOnly: true, intakeHint: "Describe your business, desired pages, and design preferences. The $500 deposit secures your build slot \u2014 the remaining balance is confirmed after scope review and invoiced on completion." },
    seoCare: { checkoutMode: "subscription", depositOnly: false, intakeHint: "Tell us your website URL and current SEO concerns so we can start monitoring." },
    seoGrowth: { checkoutMode: "subscription", depositOnly: false, intakeHint: "Tell us about your business, target keywords, and growth goals." },
    seoMomentum: { checkoutMode: "subscription", depositOnly: false, intakeHint: "Tell us about your business, competitors, and how aggressively you want to grow." },
    aiAutomation: { checkoutMode: "custom", depositOnly: false, intakeHint: "Describe the workflows you want to automate. We\u2019ll review your requirements and provide a custom scope and quote." },
};

/* All selectable plans for intake form lookup */
const allPlans = [freeAudit, ...optimisationTiers, ...seoSetupTiers, websiteBuild, ...monthlySeoTiers, aiAutomation];

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
    const [selectedService, setSelectedService] = React.useState(null);
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

    /** Renders a section heading */
    function SectionHeading({ tag, title, subtitle }) {
        return (
            <div className="text-center mb-8">
                <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">{tag}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h3>
                {subtitle && <p className="text-muted text-base max-w-2xl mx-auto">{subtitle}</p>}
            </div>
        );
    }

    return (
        <section className="w-full py-20 bg-gray-50" id="pricing">
            <div className="w-full mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                        Pricing
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Clear Pricing. Fixed Rates. No Surprises.
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Every service has a fixed price so you know exactly what you&apos;re paying before you commit. Start with a free audit or choose the service that fits your business.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-10">
                    <div className="inline-flex bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                type="button"
                                onClick={() => { setActiveTab(tab); setSelectedService(null); }}
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

                {/* Plans Tab — grouped sections */}
                {activeTab === "Plans" && !selectedService && (
                    <>
                        {/* ── Free Website Audit ── */}
                        <div className="mb-16">
                            <SectionHeading
                                tag="Start here — it's free"
                                title="Request Your Free Website Audit"
                                subtitle="We'll review your site and show you exactly what's holding you back — then recommend the right service if one fits. No payment, no obligation."
                            />
                            <div className="max-w-sm mx-auto">
                                <PriceCard {...freeAudit} onSelect={setSelectedService} />
                            </div>
                        </div>

                        {/* ── Website Optimisation Tiers ── */}
                        <div className="mb-16">
                            <SectionHeading
                                tag="Improve your existing site"
                                title="Website Optimisation"
                                subtitle="Choose the level of optimisation your site needs. Fixed pricing — no vague ranges."
                            />
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
                                {optimisationTiers.map((plan) => (
                                    <PriceCard key={plan.serviceKey} {...plan} onSelect={setSelectedService} />
                                ))}
                            </div>
                        </div>

                        {/* ── SEO Setup Tiers ── */}
                        <div className="mb-16">
                            <SectionHeading
                                tag="Get found on Google"
                                title="SEO Setup Packages"
                                subtitle="One-time setup to get your site indexed and ranking. Pick the depth that suits your market."
                            />
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
                                {seoSetupTiers.map((plan) => (
                                    <PriceCard key={plan.serviceKey} {...plan} onSelect={setSelectedService} />
                                ))}
                            </div>
                        </div>

                        {/* ── Website Build — Deposit ── */}
                        <div className="mb-16">
                            <SectionHeading
                                tag="Need a new website?"
                                title="Website Build — Deposit Model"
                                subtitle="Pay a fixed $500 deposit to secure your build slot. We review your brief, confirm the scope, and invoice the remainder on completion. Total builds typically run $1,000–$2,000."
                            />
                            <div className="max-w-sm mx-auto">
                                <PriceCard {...websiteBuild} onSelect={setSelectedService} />
                            </div>
                        </div>

                        {/* ── Monthly SEO Tiers ── */}
                        <div className="mb-16">
                            <SectionHeading
                                tag="Ongoing SEO support"
                                title="Monthly SEO Plans"
                                subtitle="Fixed monthly plans for ongoing SEO. No ranges, no lock-in. Cancel anytime."
                            />
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
                                {monthlySeoTiers.map((plan) => (
                                    <PriceCard key={plan.serviceKey} {...plan} onSelect={setSelectedService} />
                                ))}
                            </div>
                        </div>

                        {/* ── AI Automation — Custom Quote ── */}
                        <div className="mb-16">
                            <SectionHeading
                                tag="Automate your business"
                                title="AI Automation Systems"
                                subtitle="Every automation project is different. Tell us what you want to automate and we'll scope it with a custom quote — no payment upfront."
                            />
                            <div className="max-w-sm mx-auto">
                                <PriceCard {...aiAutomation} onSelect={setSelectedService} />
                            </div>
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

                {/* Service Intake Form — shown when a plan is selected */}
                {activeTab === "Plans" && selectedService && (() => {
                    const plan = allPlans.find((p) => p.serviceKey === selectedService);
                    const config = SERVICE_CONFIG[selectedService] || { checkoutMode: "custom", depositOnly: false, intakeHint: "" };
                    if (!plan) return null;
                    return (
                        <div className="max-w-2xl mx-auto mb-20">
                            <div className="bg-white rounded-2xl border-2 border-primary/20 p-8 md:p-12 shadow-lg">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                    <p className="text-muted">
                                        {plan.price}
                                        {plan.period !== "free" && plan.period !== "custom" && (
                                            <span className="text-sm ml-1">{plan.period === "deposit" ? "deposit" : plan.period}</span>
                                        )}
                                        {plan.period === "free" && <span className="text-sm ml-1 text-green-600 font-semibold">— no payment required</span>}
                                    </p>
                                </div>
                                <ServiceIntakeForm
                                    serviceKey={selectedService}
                                    serviceName={plan.name}
                                    checkoutMode={config.checkoutMode}
                                    depositOnly={config.depositOnly}
                                    intakeHint={config.intakeHint}
                                    onBack={() => setSelectedService(null)}
                                />
                            </div>
                        </div>
                    );
                })()}

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
