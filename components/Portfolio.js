"use client";

import React from "react";

const projects = [
    {
        name: "Comfy store",
        desc: "Fullstack e-commerce website for a small business, showcasing features and pricing.",
        tech: "Next.js, Tailwind, Netlify",
        url: "https://react-vite-comfy-store-v2.netlify.app/",
        img: "/assets/portfolio-1.jpeg"
    },
    {
        name: "The Warriors Call",
        desc: "Fullstack AI integratedwebsite for a bible community interested in faith and fellowship.",
        tech: "Next.js, Tailwind, Vercel",
        url: "https://www.thewarriorscall.org/",
        img: "/assets/portfolio-2.jpg"
    },
    {
        name: "Everclean Services",
        desc: "Single page website for a small cleaning business, showcasing contact information and services.",
        tech: "Next.js, Tailwind, Netlify",
        url: "https://cleaning-site-001.netlify.app/",
        img: "/assets/portfolio-3.jpeg"
    },
    {
        name: "Good For business Accountant",
        desc: "Single page website for an accounting business, showcasing contact information and services.",
        tech: "Next.js, Tailwind, Netlify",
        url: "https://accountant-good-for-business.netlify.app/",
        img: "/assets/portfolio-4.jpg"
    },
    {
        name: "PlumbFix Services",
        desc: "Single page website for a plumbing business, showcasing contact information and services.",
        tech: "Next.js, Tailwind, Netlify",
        url: "https://plumbfix-site.netlify.app/",
        img: "/assets/portfolio-5.jpg"
    },
    {
        name: "Builders App",
        desc: "Single page website for a Building business, showcasing contact information and services.",
        tech: "Next.js, Tailwind, Netlify",
        url: "https://builders-app.netlify.app/",
        img: "/assets/portfolio-6.jpg"
    },
    {
        name: "Electricians App",
        desc: "Single page website for an Electrician business, showcasing contact information and services.",
        tech: "Next.js, Tailwind, Netlify",
        url: "https://electrician-app-101.netlify.app/",
        img: "/assets/portfolio-7.jpg"
    },
    {
        name: "Real Estate Calculator",
        desc: "Single page real estate calculator particular to New Zealand pricing market.",
        tech: "Next.js, Tailwind, Netlify",
        url: "https://real-estate-calculator-001.netlify.app/",
        img: "/assets/portfolio-8.jpg"
    }

];

const PRICE_LABEL = "$1,000 NZD";

export default function Portfolio() {
    const [loadingProject, setLoadingProject] = React.useState(null);
    const [error, setError] = React.useState(null);

    async function startCheckout(proj) {
        setError(null);
        setLoadingProject(proj.name);

        try {
            const res = await fetch("/api/stripe/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    projectName: proj.name,
                    projectDescription: proj.desc,
                }),
            });

            const data = await res.json().catch(() => null);
            if (!res.ok) {
                throw new Error(data?.error || "Failed to start checkout.");
            }

            if (!data?.url) {
                throw new Error("Stripe Checkout session was not created.");
            }

            window.location.href = data.url;
        } catch (e) {
            setError(e?.message || "Something went wrong.");
        } finally {
            setLoadingProject(null);
        }
    }

    return (
        <section className="portfolio" id="portfolio">
            <div className="container center-all">
                <h2>Key Projects</h2>
                <div className="portfolio-list">
                    {projects.map((proj, idx) => (
                        <div className="portfolio-card" key={`${proj.name}-${idx}`}>
                            <img
                                className="portfolio-thumb"
                                src={proj.img}
                                alt="Project preview"
                                loading="lazy"
                            />
                            <h3>{proj.name}</h3>
                            <p>{proj.desc}</p>
                            <div className="portfolio-meta">
                                <span>{proj.tech}</span>
                            </div>
                            <div className="portfolio-links">
                                <a href={proj.url} target="_blank" rel="noopener" className="btn btn-sm">Live Site</a>
                                <button
                                    type="button"
                                    className="btn btn-sm"
                                    disabled={loadingProject === proj.name}
                                    onClick={() => startCheckout(proj)}
                                >
                                    {loadingProject === proj.name ? `Redirecting…` : `Buy Now – ${PRICE_LABEL}`}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {error ? (
                    <p style={{ color: "crimson", marginTop: "0.5rem" }}>{error}</p>
                ) : null}

                <div className="portfolio-secondary-cta">
                    <h3>Website Package — {PRICE_LABEL}</h3>
                    <p className="portfolio-meta" style={{ maxWidth: 820 }}>
                        One-time payment in NZD. Purchase includes project intake so we can confirm details and kick off the build.
                    </p>
                    <ul className="tech-list" aria-label="What’s included">
                        <li>Responsive, mobile-first design</li>
                        <li>Performance-focused Next.js build</li>
                        <li>Basic SEO setup (metadata + sitemap-friendly)</li>
                        <li>Contact form wiring (email delivery or provider integration)</li>
                        <li>Deployment support to your preferred host</li>
                    </ul>
                </div>

                <p>Real results for real clients. <a href="#contact" className="btn">Claim Your Quote</a></p>
            </div>
        </section>
    );
}
