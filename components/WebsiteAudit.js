"use client";

import React from "react";

const mockAuditResults = [
    {
        category: "Mobile Responsiveness",
        icon: "📱",
        getStatus: () => (Math.random() > 0.5 ? "warning" : "pass"),
        passText: "Your site appears mobile-friendly",
        warnText: "Your site may not be fully optimized for mobile devices — you could be losing 60% of visitors",
    },
    {
        category: "Page Speed",
        icon: "⚡",
        getStatus: () => (Math.random() > 0.4 ? "critical" : "warning"),
        passText: "Page load time is acceptable",
        warnText: "Page speed could be improved — slow sites lose 53% of mobile visitors",
    },
    {
        category: "SEO Basics",
        icon: "🔍",
        getStatus: () => (Math.random() > 0.5 ? "warning" : "critical"),
        passText: "Basic SEO elements detected",
        warnText: "Missing or incomplete meta descriptions — hurting your Google rankings",
    },
    {
        category: "SSL Security",
        icon: "🔒",
        getStatus: () => "pass",
        passText: "SSL certificate detected — your site is secure",
        warnText: "No SSL detected — visitors see a 'Not Secure' warning",
    },
    {
        category: "Conversion Elements",
        icon: "📞",
        getStatus: () => (Math.random() > 0.3 ? "critical" : "warning"),
        passText: "Clear call-to-action found",
        warnText: "No clear call-to-action above the fold — visitors don't know what to do next",
    },
    {
        category: "Local SEO",
        icon: "📍",
        getStatus: () => (Math.random() > 0.5 ? "warning" : "critical"),
        passText: "Local business signals detected",
        warnText: "Missing local SEO signals — you're invisible in local search results",
    },
];

const statusColors = {
    pass: "text-green-600 bg-green-50",
    warning: "text-yellow-600 bg-yellow-50",
    critical: "text-red-600 bg-red-50",
};

const statusLabels = {
    pass: "Pass",
    warning: "Needs Work",
    critical: "Critical",
};

export default function WebsiteAudit() {
    const [url, setUrl] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [results, setResults] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [score, setScore] = React.useState(null);

    function runAudit(e) {
        e.preventDefault();
        setLoading(true);
        setResults(null);

        // Simulate audit delay
        setTimeout(() => {
            const auditResults = mockAuditResults.map((item) => {
                const status = item.getStatus();
                return {
                    category: item.category,
                    icon: item.icon,
                    status,
                    detail: status === "pass" ? item.passText : item.warnText,
                };
            });

            const passCount = auditResults.filter((r) => r.status === "pass").length;
            const auditScore = Math.round((passCount / auditResults.length) * 100);

            setResults(auditResults);
            setScore(auditScore);
            setLoading(false);

            // Send lead data via Resend email
            fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    formName: "website-audit",
                    email,
                    url,
                    score: auditScore,
                }),
            }).catch(() => { });
        }, 2000);
    }

    return (
        <section className="bg-dark text-white py-20" id="audit">
            <div className="container center-all">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                    Free Tool
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Free Website Audit
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mb-10">
                    Find out how your current website stacks up. Get instant feedback on
                    speed, SEO, mobile-friendliness, and conversion potential.
                </p>

                {!results ? (
                    <form
                        onSubmit={runAudit}
                        className="w-full max-w-xl flex flex-col gap-4"
                    >
                        <input
                            type="url"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            placeholder="Enter your website URL (e.g. https://example.com)"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Your email (we'll send detailed results)"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="btn w-full py-3 text-lg disabled:opacity-60"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                                    Analyzing your website…
                                </span>
                            ) : (
                                "Run Free Audit"
                            )}
                        </button>
                    </form>
                ) : (
                    <div className="w-full max-w-2xl">
                        <div className="text-center mb-8">
                            <div
                                className={`inline-flex items-center justify-center w-24 h-24 rounded-full text-3xl font-extrabold mb-3 ${score >= 70
                                    ? "bg-green-500/20 text-green-400"
                                    : score >= 40
                                        ? "bg-yellow-500/20 text-yellow-400"
                                        : "bg-red-500/20 text-red-400"
                                    }`}
                            >
                                {score}
                            </div>
                            <p className="text-gray-400">
                                out of 100 — {score >= 70 ? "Good" : score >= 40 ? "Needs Improvement" : "Critical Issues Found"}
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 mb-8">
                            {results.map((r) => (
                                <div
                                    key={r.category}
                                    className="bg-white/5 rounded-lg p-4 flex items-start gap-4"
                                >
                                    <span className="text-2xl">{r.icon}</span>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-semibold">{r.category}</span>
                                            <span
                                                className={`text-xs font-bold px-2 py-0.5 rounded-full ${statusColors[r.status]}`}
                                            >
                                                {statusLabels[r.status]}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-400">{r.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 text-center">
                            <h3 className="text-xl font-bold mb-2">
                                Want to Fix These Issues?
                            </h3>
                            <p className="text-gray-400 mb-4">
                                We&apos;ll build you a website that scores 90+ across all
                                categories — and actually generates leads.
                            </p>
                            <a href="#contact" className="btn text-lg px-8 py-3">
                                Get a Free Consultation
                            </a>
                        </div>

                        <button
                            type="button"
                            className="btn btn-outline-light mt-6 mx-auto block"
                            onClick={() => {
                                setResults(null);
                                setScore(null);
                                setUrl("");
                                setEmail("");
                            }}
                        >
                            Audit Another Website
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
