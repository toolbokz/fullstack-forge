import { NextResponse } from "next/server";

const PSI_API = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";

interface LighthouseCategory {
    score: number | null;
    title: string;
}

interface LighthouseAudit {
    score: number | null;
    title: string;
    description: string;
    displayValue?: string;
}

interface PSIResponse {
    lighthouseResult?: {
        categories: Record<string, LighthouseCategory>;
        audits: Record<string, LighthouseAudit>;
    };
    error?: { message: string };
}

export async function POST(request: Request) {
    try {
        const { url } = await request.json();

        if (!url || typeof url !== "string") {
            return NextResponse.json({ error: "URL is required" }, { status: 400 });
        }

        // Validate URL format
        try {
            new URL(url);
        } catch {
            return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
        }

        const key = process.env.GOOGLE_PSI_API_KEY;
        let apiUrl = `${PSI_API}?url=${encodeURIComponent(url)}&strategy=mobile&category=performance&category=seo&category=accessibility&category=best-practices`;
        if (key) apiUrl += `&key=${encodeURIComponent(key)}`;

        const res = await fetch(apiUrl);

        if (!res.ok) {
            const errData = await res.json().catch(() => ({}));
            console.error("PSI API error:", errData);

            const code = errData?.error?.code;
            if (code === 429) {
                return NextResponse.json(
                    { error: "Our audit service is temporarily busy. Please try again in a minute." },
                    { status: 429 }
                );
            }

            return NextResponse.json(
                { error: "Could not analyze this website. Please check the URL and try again." },
                { status: 422 }
            );
        }

        const data: PSIResponse = await res.json();
        const lh = data.lighthouseResult;

        if (!lh) {
            return NextResponse.json(
                { error: "Could not retrieve audit results" },
                { status: 502 }
            );
        }

        const cats = lh.categories;
        const audits = lh.audits;

        // Map Lighthouse data into our audit results format
        const results = [
            {
                category: "Performance",
                icon: "⚡",
                score: Math.round((cats.performance?.score ?? 0) * 100),
                status: scoreToStatus(cats.performance?.score),
                detail: perfDetail(cats.performance?.score, audits),
            },
            {
                category: "SEO",
                icon: "🔍",
                score: Math.round((cats.seo?.score ?? 0) * 100),
                status: scoreToStatus(cats.seo?.score),
                detail: seoDetail(cats.seo?.score, audits),
            },
            {
                category: "Accessibility",
                icon: "♿",
                score: Math.round((cats.accessibility?.score ?? 0) * 100),
                status: scoreToStatus(cats.accessibility?.score),
                detail: a11yDetail(cats.accessibility?.score),
            },
            {
                category: "Best Practices",
                icon: "✅",
                score: Math.round((cats["best-practices"]?.score ?? 0) * 100),
                status: scoreToStatus(cats["best-practices"]?.score),
                detail: bpDetail(cats["best-practices"]?.score),
            },
            {
                category: "Mobile Friendly",
                icon: "📱",
                score: mobileScore(audits),
                status: scoreToStatus(mobileScore(audits) / 100),
                detail: mobileDetail(audits),
            },
            {
                category: "SSL Security",
                icon: "🔒",
                score: sslScore(audits),
                status: sslScore(audits) >= 90 ? "pass" : "critical",
                detail: sslScore(audits) >= 90
                    ? "HTTPS is enabled — your site is secure"
                    : "Your site is not using HTTPS — visitors see a 'Not Secure' warning",
            },
        ];

        const overallScore = Math.round(
            results.reduce((sum, r) => sum + r.score, 0) / results.length
        );

        return NextResponse.json({ results, score: overallScore });
    } catch (err) {
        console.error("Audit API error:", err);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

function scoreToStatus(score: number | null | undefined): string {
    const s = score ?? 0;
    if (s >= 0.9) return "pass";
    if (s >= 0.5) return "warning";
    return "critical";
}

function perfDetail(
    score: number | null | undefined,
    audits: Record<string, LighthouseAudit>
): string {
    const s = (score ?? 0) * 100;
    const fcp = audits["first-contentful-paint"]?.displayValue || "";
    const lcp = audits["largest-contentful-paint"]?.displayValue || "";

    if (s >= 90) return `Great performance! First paint in ${fcp}.`;
    if (s >= 50)
        return `Page could be faster — First Contentful Paint: ${fcp}, Largest Contentful Paint: ${lcp}. Slow sites lose 53% of mobile visitors.`;
    return `Critical speed issues — FCP: ${fcp}, LCP: ${lcp}. Google penalises slow sites in search rankings.`;
}

function seoDetail(
    score: number | null | undefined,
    audits: Record<string, LighthouseAudit>
): string {
    const s = (score ?? 0) * 100;
    const issues: string[] = [];

    if (audits["meta-description"]?.score === 0) issues.push("missing meta description");
    if (audits["document-title"]?.score === 0) issues.push("missing page title");
    if (audits["link-text"]?.score === 0) issues.push("non-descriptive link text");

    if (s >= 90) return "Strong SEO fundamentals — meta tags and structure look good.";
    if (issues.length)
        return `SEO issues found: ${issues.join(", ")}. These hurt your Google rankings.`;
    return `SEO score is ${s}/100 — there's room to improve your search visibility.`;
}

function a11yDetail(score: number | null | undefined): string {
    const s = (score ?? 0) * 100;
    if (s >= 90) return "Good accessibility — your site is usable for most visitors.";
    if (s >= 50)
        return `Accessibility score: ${s}/100 — some users may have difficulty using your site.`;
    return `Major accessibility gaps (${s}/100) — you may be excluding visitors and risking compliance issues.`;
}

function bpDetail(score: number | null | undefined): string {
    const s = (score ?? 0) * 100;
    if (s >= 90) return "Following modern web best practices.";
    if (s >= 50) return `Some best-practice issues found (${s}/100) — could affect trust and reliability.`;
    return `Significant best-practice violations (${s}/100) — may affect user trust and browser compatibility.`;
}

function mobileScore(audits: Record<string, LighthouseAudit>): number {
    const viewport = audits["viewport"]?.score ?? 0;
    const fontSz = audits["font-size"]?.score ?? 1;
    const tapTargets = audits["tap-targets"]?.score ?? 1;
    return Math.round(((viewport + fontSz + tapTargets) / 3) * 100);
}

function mobileDetail(audits: Record<string, LighthouseAudit>): string {
    const issues: string[] = [];
    if (audits["viewport"]?.score === 0) issues.push("no viewport meta tag");
    if (audits["font-size"]?.score === 0) issues.push("text too small on mobile");
    if (audits["tap-targets"]?.score === 0) issues.push("tap targets too close together");

    if (issues.length === 0) return "Your site is mobile-friendly — responsive viewport and readable text.";
    return `Mobile issues: ${issues.join(", ")}. Over 60% of NZ web traffic is mobile.`;
}

function sslScore(audits: Record<string, LighthouseAudit>): number {
    return (audits["is-on-https"]?.score ?? 0) * 100;
}
