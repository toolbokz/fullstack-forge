'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { toolCategories, ToolIcon } from '../lib/tools-data'

export default function ToolsDropdown({ onNavigate }) {
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

    // Close on Escape
    useEffect(() => {
        function onKey(e) {
            if (e.key === 'Escape') setOpen(false)
        }
        if (open) document.addEventListener('keydown', onKey)
        return () => document.removeEventListener('keydown', onKey)
    }, [open])

    // Close on outside click (mobile)
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
                Tools
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
                        {toolCategories.map((category) => (
                            <div key={category.title} className="tools-mega-column">
                                <h4 className="tools-mega-heading">{category.title}</h4>
                                <ul className="tools-mega-list">
                                    {category.tools.map((tool) => (
                                        <li key={tool.slug}>
                                            <Link
                                                href={`/tools/${tool.slug}`}
                                                className={`tools-mega-item${tool.highlight ? ' is-highlight' : ''}`}
                                                onClick={handleLinkClick}
                                                role="menuitem"
                                            >
                                                <span className={`tools-mega-icon${tool.highlight ? ' is-highlight' : ''}`}>
                                                    <ToolIcon icon={tool.icon} size={18} />
                                                </span>
                                                <span className="tools-mega-text">
                                                    <span className="tools-mega-name">
                                                        {tool.name}
                                                        {tool.highlight && <span className="tools-mega-badge">Popular</span>}
                                                    </span>
                                                    <span className="tools-mega-desc">{tool.description}</span>
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="tools-mega-footer">
                        <Link href="/tools" onClick={handleLinkClick} className="tools-mega-footer-link">
                            View All Free Tools →
                        </Link>
                    </div>
                </div>
            )}
        </li>
    )
}
