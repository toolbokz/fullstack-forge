"use client";

import React from "react";

export default function LeadCaptureForm({
    formName = "lead-capture",
    ctaText = "Get Started",
    showWebsite = true,
    darkMode = false,
}) {
    const [submitted, setSubmitted] = React.useState(false);
    const [submitting, setSubmitting] = React.useState(false);
    const [error, setError] = React.useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        const form = e.target;
        const formData = new FormData(form);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    formName: formData.get("form-name"),
                    name: formData.get("name"),
                    email: formData.get("email"),
                    businessType: formData.get("business-type"),
                    website: formData.get("website") || "",
                }),
            });

            if (res.ok) {
                setSubmitted(true);
            } else {
                throw new Error("Submission failed");
            }
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    }

    if (submitted) {
        return (
            <div className="text-center py-12">
                <div className="text-5xl mb-4">✓</div>
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? "text-white" : "text-green-600"}`}>
                    Thank You!
                </h3>
                <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
                    We&apos;ll review your details and get back to you within 24 hours.
                </p>
            </div>
        );
    }

    const inputClass = `w-full px-4 py-3 rounded-lg border text-base ${darkMode
        ? "bg-white/10 border-white/20 text-white placeholder-gray-400"
        : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"
        } focus:outline-none focus:ring-2 focus:ring-primary`;

    return (
        <form
            name={formName}
            method="POST"
            onSubmit={handleSubmit}
            className="w-full max-w-lg mx-auto flex flex-col gap-4"
        >
            <input type="hidden" name="form-name" value={formName} />
            <p className="hidden">
                <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                </label>
            </p>

            <input
                name="name"
                placeholder="Your name"
                required
                className={inputClass}
            />
            <input
                name="email"
                type="email"
                placeholder="Email address"
                required
                className={inputClass}
            />
            <select name="business-type" required className={inputClass}>
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
            {showWebsite && (
                <input
                    name="website"
                    type="url"
                    placeholder="Current website URL (optional)"
                    className={inputClass}
                />
            )}

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
                type="submit"
                disabled={submitting}
                className="btn w-full text-center text-lg py-3 disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {submitting ? "Sending…" : ctaText}
            </button>
        </form>
    );
}
