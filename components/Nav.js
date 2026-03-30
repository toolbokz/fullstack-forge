"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import ToolsDropdown from "./ToolsDropdown";
import ServicesDropdown from "./ServicesDropdown";

const navLinks = [
    { href: "/#hero", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/tools", label: "Tools" },
    { href: "/blog", label: "Blog" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
];

export default function Nav() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const { data: session } = useSession();
    const pathname = usePathname();

    // Close mobile drawer on route change
    React.useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Lock body scroll when mobile drawer is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const closeDrawer = () => setIsOpen(false);

    return (
        <>
            {/* Floating mobile toggle — visible only on mobile */}
            <button
                type="button"
                className="nav-toggle-mobile"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-controls="primary-nav"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((v) => !v)}
            >
                <span className="nav-toggle-icon" aria-hidden="true">
                    {isOpen ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    ) : (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                    )}
                </span>
            </button>

            {/* Desktop fixed navbar — hidden on mobile */}
            <nav className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
                <div className="container nav-inner">
                    <Link href="/" className="logo">
                        <img className="logo-mark" src="/assets/logo.svg" alt="Fullstack Forge" />
                        <span className="logo-text">Fullstack Forge</span>
                    </Link>

                    {/* Desktop nav */}
                    <ul id="primary-nav" className="nav-links nav-links-desktop">
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                        <ServicesDropdown onNavigate={closeDrawer} />
                        <ToolsDropdown onNavigate={closeDrawer} />
                        <li className="nav-socials">
                            <a href="https://www.facebook.com/fullstackforgeNZ" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a href="https://x.com/fullstack_forge" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/fullstack-forge" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                        </li>
                        <li className="nav-auth">
                            {session ? (
                                <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                    {session.user?.image ? (
                                        <img src={session.user.image} alt="" width={28} height={28} style={{ borderRadius: "50%" }} />
                                    ) : null}
                                    <Link href="/dashboard" style={{ fontWeight: 600 }}>
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
                                <Link href="/login" className="btn btn-sm">Login</Link>
                            )}
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Mobile overlay — outside <nav> so it's not hidden on mobile */}
            <div
                className={`mobile-nav-overlay${isOpen ? " is-visible" : ""}`}
                onClick={closeDrawer}
                aria-hidden="true"
            />

            {/* Mobile slide-in drawer — outside <nav> so it's not hidden on mobile */}
            <div className={`mobile-nav-drawer${isOpen ? " is-open" : ""}`}>
                <ul className="mobile-nav-list">
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} onClick={closeDrawer}>{link.label}</Link>
                        </li>
                    ))}
                    <ServicesDropdown onNavigate={closeDrawer} />
                    <ToolsDropdown onNavigate={closeDrawer} />
                    <li className="nav-socials">
                        <a href="https://www.facebook.com/fullstackforgeNZ" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="https://x.com/fullstack_forge" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                        </a>
                        <a href="https://www.linkedin.com/in/fullstack-forge" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        </a>
                    </li>
                    <li className="nav-auth">
                        {session ? (
                            <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                {session.user?.image ? (
                                    <img src={session.user.image} alt="" width={28} height={28} style={{ borderRadius: "50%" }} />
                                ) : null}
                                <Link href="/dashboard" onClick={closeDrawer} style={{ fontWeight: 600 }}>
                                    {session.user?.name || "Dashboard"}
                                </Link>
                                <button
                                    onClick={() => { signOut({ callbackUrl: "/" }); closeDrawer(); }}
                                    style={{ marginLeft: "0.25rem", fontSize: "0.85rem", opacity: 0.7 }}
                                >
                                    Log out
                                </button>
                            </span>
                        ) : (
                            <Link href="/login" onClick={closeDrawer} className="btn btn-sm">Login</Link>
                        )}
                    </li>
                </ul>
            </div>
        </>
    );
}
