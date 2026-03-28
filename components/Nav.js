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
                    <li className="nav-socials">
                        <a href="https://www.facebook.com/fullstackforgeNZ" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="https://x.com/fullstack_forge" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                    </li>
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
