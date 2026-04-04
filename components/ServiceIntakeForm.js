"use client";

import React from "react";

/**
 * ServiceIntakeForm — collects customer details before Stripe checkout.
 *
 * Props:
 *  - serviceKey: string (matches a key in SERVICES)
 *  - serviceName: string
 *  - checkoutMode: 'direct' | 'subscription' | 'custom'
 *  - depositOnly?: boolean
 *  - intakeHint?: string
 *  - onBack?: () => void  (return to pricing)
 */
export default function ServiceIntakeForm({
    serviceKey,
    serviceName,
    checkoutMode = "direct",
    depositOnly = false,
    intakeHint = "",
    onBack,
}) {
    const [submitting, setSubmitting] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [customSubmitted, setCustomSubmitted] = React.useState(false);

    // Form fields
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [businessName, setBusinessName] = React.useState("");
    const [website, setWebsite] = React.useState("");
    const [goals, setGoals] = React.useState("");
    const [notes, setNotes] = React.useState("");

    const isCustom = checkoutMode === "custom";
    const isFree = checkoutMode === "free";

    async function handleSubmit(e) {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        const payload = {
            serviceKey,
            name,
            email,
            phone: phone || undefined,
            businessName: businessName || undefined,
            website: website || undefined,
            goals: goals || undefined,
            notes: notes || undefined,
        };

        try {
            if (isCustom || isFree) {
                // Custom and free services → send as a lead/enquiry, not checkout
                const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        formName: isFree ? `free-audit-request` : `service-enquiry-${serviceKey}`,
                        name,
                        email,
                        businessType: businessName,
                        website,
                        message: [
                            `Service: ${serviceName}`,
                            goals ? `Goals: ${goals}` : "",
                            notes ? `Notes: ${notes}` : "",
                        ]
                            .filter(Boolean)
                            .join("\n\n"),
                    }),
                });
                if (res.ok) {
                    setCustomSubmitted(true);
                } else {
                    throw new Error("Submission failed");
                }
            } else {
                // Direct or subscription → create Stripe checkout session
                const res = await fetch("/api/stripe/checkout", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                });

                const data = await res.json();
                if (data.url) {
                    window.location.href = data.url;
                } else {
                    throw new Error(data.error || "Checkout failed");
                }
            }
        } catch (err) {
            setError(err.message || "Something went wrong. Please try again.");
        } finally {
            setSubmitting(false);
        }
    }

    // Custom/free enquiry success state
    if (customSubmitted) {
        return (
            <div className="text-center py-12">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">
                    {isFree ? "Audit Request Received" : "Enquiry Received"}
                </h3>
                <p className="text-muted mb-6">
                    {isFree
                        ? "We\u2019ll review your website and get back to you within 24 hours with a personalised assessment and recommended next steps."
                        : `We\u2019ll review your ${serviceName.toLowerCase()} requirements and get back to you within 24 hours with a custom scope and quote.`}
                </p>
                {onBack && (
                    <button
                        type="button"
                        onClick={onBack}
                        className="text-primary font-semibold hover:underline"
                    >
                        ← Back to pricing
                    </button>
                )}
            </div>
        );
    }

    const inputClass =
        "w-full px-4 py-3 rounded-lg border bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary text-base";

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Context hint */}
            {intakeHint && (
                <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 text-sm text-blue-800">
                    {intakeHint}
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                    name="name"
                    placeholder="Your name *"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClass}
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email address *"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClass}
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                    name="phone"
                    type="tel"
                    placeholder="Phone number (optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputClass}
                />
                <input
                    name="businessName"
                    placeholder="Business name (optional)"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className={inputClass}
                />
            </div>

            <input
                name="website"
                type="url"
                placeholder="Current website URL (optional)"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className={inputClass}
            />

            <textarea
                name="goals"
                placeholder="What are your main goals for this service?"
                rows={3}
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
                className={inputClass + " resize-y"}
            />

            <textarea
                name="notes"
                placeholder="Anything else we should know? (design preferences, timeline, etc.)"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className={inputClass + " resize-y"}
            />

            {error && (
                <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
                type="submit"
                disabled={submitting}
                className="btn w-full text-center text-base font-bold py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white shadow-md shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
            >
                {submitting
                    ? "Processing…"
                    : isFree
                        ? "Request Free Audit"
                        : isCustom
                            ? "Submit Enquiry"
                            : depositOnly
                                ? `Pay Deposit → Checkout`
                                : checkoutMode === "subscription"
                                    ? `Subscribe → Checkout`
                                    : `Continue to Payment`}
            </button>

            {isFree && (
                <p className="text-muted text-xs text-center">
                    100% free — no payment required. We&apos;ll review your site and recommend the right next step.
                </p>
            )}

            {!isCustom && !isFree && (
                <p className="text-muted text-xs text-center">
                    {depositOnly
                        ? "Secure deposit via Stripe — remainder invoiced on completion."
                        : checkoutMode === "subscription"
                            ? "Secure monthly subscription via Stripe. Cancel anytime."
                            : "Secure payment via Stripe. You won't be charged until checkout completes."}
                </p>
            )}

            {isCustom && (
                <p className="text-muted text-xs text-center">
                    No payment required now. We&apos;ll review your project and
                    provide a custom quote within 24 hours.
                </p>
            )}

            {onBack && (
                <button
                    type="button"
                    onClick={onBack}
                    className="text-muted text-sm hover:text-gray-900 transition-colors text-center"
                >
                    ← Back to all services
                </button>
            )}
        </form>
    );
}
