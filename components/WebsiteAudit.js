"use client";

import React from "react";

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
    const [error, setError] = React.useState(null);

    async function runAudit(e) {
        e.preventDefault();
        setLoading(true);
        setResults(null);
        setError(null);

        try {
            const res = await fetch("/api/audit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Audit failed. Please try again.");
                setLoading(false);
                return;
            }

            setResults(data.results);
            setScore(data.score);
            setLoading(false);

            // Send lead data via Resend email
            fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    formName: "website-audit",
                    email,
                    url,
                    score: data.score,
                }),
            }).catch(() => { });
        } catch {
            setError("Something went wrong. Please check the URL and try again.");
            setLoading(false);
        }
    }

    return (
        <section className="text-white py-20" id="audit" style={{ background: 'linear-gradient(135deg, #0b1220 0%, #0d1f3c 50%, #0b2e6e 100%)' }}>
            <div className="container center-all">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                    Free Tool
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    See What&apos;s Costing You Jobs — In 30 Seconds
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mb-10">
                    Enter your website URL and we&apos;ll instantly show you what&apos;s broken — speed, Google visibility, mobile experience, and lead capture.
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

                        {error && (
                            <p className="text-red-400 text-sm bg-red-400/10 rounded-lg px-4 py-3">{error}</p>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn w-full py-3 text-lg disabled:opacity-60"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                                    Analyzing your website… this may take 15–30s
                                </span>
                            ) : (
                                "Run Free Audit"
                            )}
                        </button>
                        {loading && (
                            <p className="text-gray-500 text-sm text-center">
                                We&apos;re running a real Google Lighthouse audit on your site.
                            </p>
                        )}
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
                                            <span className="text-xs text-gray-400 font-mono">{r.score}/100</span>
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
                                Want Us to Fix These Issues?
                            </h3>
                            <p className="text-gray-400 mb-4">
                                We&apos;ll rebuild your website to score 90+ across all categories — and actually bring in jobs.
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
