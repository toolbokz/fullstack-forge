'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { serviceColumns, ServiceIcon } from '../lib/services-data'

export default function ServicesDropdown({ onNavigate }) {
    const [open, setOpen] = useState(false)
    const wrapperRef = useRef(null)
    const timeoutRef = useRef(null)

    function isMobile() {
        return typeof window !== 'undefined' && window.innerWidth <= 768
    }

    function handleMouseEnter() {
        if (isMobile()) return
        clearTimeout(timeoutRef.current)
        setOpen(true)
    }

    function handleMouseLeave() {
        if (isMobile()) return
        timeoutRef.current = setTimeout(() => setOpen(false), 200)
    }

    function handleClick() {
        setOpen((v) => !v)
    }

    function handleLinkClick() {
        setOpen(false)
        onNavigate?.()
    }

    useEffect(() => {
        function onKey(e) {
            if (e.key === 'Escape') setOpen(false)
        }
        if (open) document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [open])

    useEffect(() => {
        function onClick(e) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        if (open) document.addEventListener('mousedown', onClick)
        return () => document.removeEventListener('mousedown', onClick)
    }, [open])

    return (
        <li
            ref={wrapperRef}
            className="tools-dropdown-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                type="button"
                className="tools-dropdown-trigger"
                onClick={handleClick}
                aria-expanded={open}
                aria-haspopup="true"
            >
                Services
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    width="14"
                    height="14"
                    className={`tools-dropdown-chevron${open ? ' is-open' : ''}`}
                    aria-hidden="true"
                >
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
                </svg>
            </button>

            {open && (
                <div className="tools-mega-dropdown" role="menu">
                    <div className="tools-mega-grid">
                        {serviceColumns.map((column) => (
                            <div key={column.title} className="tools-mega-column">
                                <h4 className="tools-mega-heading">{column.title}</h4>
                                <ul className="tools-mega-list">
                                    {column.services.map((service) => (
                                        <li key={service.slug}>
                                            <Link
                                                href={`/services/${service.slug}`}
                                                className="tools-mega-item"
                                                onClick={handleLinkClick}
                                                role="menuitem"
                                            >
                                                <span className="tools-mega-icon">
                                                    <ServiceIcon icon={service.icon} size={18} />
                                                </span>
                                                <span className="tools-mega-text">
                                                    <span className="tools-mega-name">
                                                        {service.name}
                                                    </span>
                                                    <span className="tools-mega-desc">{service.description}</span>
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="tools-mega-footer">
                        <Link href="/services" onClick={handleLinkClick} className="tools-mega-footer-link">
                            View All Services →
                        </Link>
                    </div>
                </div>
            )}
        </li>
    )
}
