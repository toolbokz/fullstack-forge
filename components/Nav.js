"use client";

import React from "react";
import Link from "next/link";

const navLinks = [
    { href: "/#hero", label: "Home" },
    { href: "/#solutions", label: "Solutions" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
    { href: "/#audit", label: "Free Audit" },
    { href: "/#contact", label: "Contact" },
];

export default function Nav() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="nav">
            <div className="container nav-inner">
                <Link href="/" className="logo">
                    <img className="logo-mark" src="/assets/logo-1.png" alt="Fullstack Forge" />
                    <span className="logo-text">Fullstack Forge</span>
                </Link>
                <button
                    type="button"
                    className="nav-toggle"
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-controls="primary-nav"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((v) => !v)}
                >
                    <span className="nav-toggle-icon" aria-hidden="true">{isOpen ? "✕" : "☰"}</span>
                </button>

                <ul id="primary-nav" className={`nav-links${isOpen ? " is-open" : ""}`}>
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} onClick={() => setIsOpen(false)}>{link.label}</Link>
                        </li>
                    ))}

                </ul>
            </div>
        </nav>
    );
}
