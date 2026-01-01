import React from "react";

const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#tech", label: "Tech Stack" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" }
];

export default function Nav() {
    return (
        <nav className="nav">
            <div className="container nav-inner">
                <a href="#hero" className="logo">Fullstack Forge</a>
                <ul>
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
