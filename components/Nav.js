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
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav className="nav">
            <div className="container nav-inner">
                <a href="#hero" className="logo">
                    <img className="logo-mark" src="/assets/logo-1.png" alt="Fullstack Forge" />
                    <span className="logo-text">Fullstack Forge</span>
                </a>
                <button
                    type="button"
                    className="nav-toggle"
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-controls="primary-nav"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((v) => !v)}
                >
                    <span className="nav-toggle-icon" aria-hidden="true">{isOpen ? "✕" : "☰"}</span>
                    <span className="nav-toggle-text">Menu</span>
                </button>

                <ul id="primary-nav" className={`nav-links${isOpen ? " is-open" : ""}`}>
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a href={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
