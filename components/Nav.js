"use client";

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

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
    const { data: session } = useSession();

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
                    <li className="nav-auth">
                        {session ? (
                            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                {session.user?.image ? (
                                    <img
                                        src={session.user.image}
                                        alt=""
                                        width={28}
                                        height={28}
                                        style={{ borderRadius: "50%" }}
                                    />
                                ) : null}
                                <Link href="/dashboard" onClick={() => setIsOpen(false)} style={{ fontWeight: 600 }}>
                                    {session.user?.name || "Dashboard"}
                                </Link>
                                <button
                                    onClick={() => signOut({ callbackUrl: "/" })}
                                    style={{ marginLeft: "0.25rem", fontSize: "0.85rem", opacity: 0.7 }}
                                >
                                    Log out
                                </button>
                            </span>
                        ) : (
                            <Link href="/login" onClick={() => setIsOpen(false)} className="btn btn-sm">
                                Login
                            </Link>
                        )}
                    </li>
                </ul>
            </div>
        </nav>
    );
}
