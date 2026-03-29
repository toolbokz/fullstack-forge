'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ToolIcon } from '../lib/tools-data'
import LeadCaptureForm from './LeadCaptureForm'

// ─── ANIMATION VARIANTS ────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
}
const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

/**
 * ToolPageTemplate — premium SaaS-level tool page shell.
 *
 * Props:
 * - tool: tool object from tools-data.js
 * - children: the interactive tool UI (form + results)
 */
export default function ToolPageTemplate({ tool, children }) {
    const [showGate, setShowGate] = useState(false)
    const toolRef = useRef(null)

    const scrollToTool = useCallback(() => {
        toolRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [])

    return (
        <div className="tpt-page">

            {/* ═══════ 1. HERO — Gradient + Glow + Animated Entrance ═══════ */}
            <section className="tpt-hero">
                {/* Soft glow blobs */}
                <div className="tpt-hero-glow tpt-hero-glow--1" />
                <div className="tpt-hero-glow tpt-hero-glow--2" />

                <div className="tpt-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/tools" className="tpt-hero-back">
                            ← All Free Tools
                        </Link>
                    </motion.div>

                    <motion.div
                        className="tpt-hero-icon"
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <ToolIcon icon={tool.icon} size={32} />
                    </motion.div>

                    <motion.h1
                        className="tpt-hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                    >
                        {tool.name}
                    </motion.h1>

                    <motion.p
                        className="tpt-hero-sub"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                    >
                        {tool.description}
                    </motion.p>

                    <motion.p
                        className="tpt-hero-trust"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                    >
                        100% free · No signup required · Instant results
                    </motion.p>

                    <motion.button
                        onClick={scrollToTool}
                        className="tpt-hero-cta"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Start Calculating
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
                    </motion.button>
                </div>
            </section>

            {/* ═══════ 2. TOOL CONTAINER — Glassmorphism Card ═══════ */}
            <section className="tpt-tool-section" ref={toolRef} id="tool-body">
                <div className="tpt-container">
                    <motion.div
                        className="tpt-tool-card"
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {children}
                    </motion.div>
                </div>
            </section>

            {/* ═══════ 3. IMPACT SECTION ═══════ */}
            <ImpactSection />

            {/* ═══════ 4. EMAIL CAPTURE SECTION ═══════ */}
            <section className="tpt-email-section">
                <div className="tpt-container">
                    <motion.div
                        className="tpt-email-card"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="tpt-email-title">
                            Get a Full Breakdown of How to Fix Your Website
                        </h2>
                        <p className="tpt-email-sub">
                            Enter your details below and we&apos;ll send you a personalised report with actionable steps to improve your website.
                        </p>

                        {!showGate ? (
                            <motion.button
                                onClick={() => setShowGate(true)}
                                className="tpt-email-cta"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Unlock Full Report — Free
                            </motion.button>
                        ) : (
                            <LeadCaptureForm
                                formName={`tool-${tool.slug}-lead`}
                                ctaText="Send My Free Report"
                                showWebsite={true}
                                darkMode={false}
                            />
                        )}
                    </motion.div>
                </div>
            </section>

            {/* ═══════ 5. FINAL CTA SECTION ═══════ */}
            <section className="tpt-final-cta">
                <div className="tpt-container">
                    <motion.div
                        className="tpt-final-cta-inner"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <h2 className="tpt-final-cta-title">Want Us to Fix These Issues For You?</h2>
                        <p className="tpt-final-cta-sub">
                            Most business owners see the problems but never get around to fixing them. Let us handle it — you focus on running your business.
                        </p>
                        <div className="tpt-final-cta-buttons">
                            <motion.a
                                href="/#audit"
                                className="tpt-btn-primary"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Get My Free Website Audit
                            </motion.a>
                            <motion.a
                                href="/#contact"
                                className="tpt-btn-outline"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Talk to Us Today
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════ 6. STICKY FLOATING CTA ═══════ */}
            <motion.a
                href="/#audit"
                className="tpt-floating-cta"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
            >
                Free Audit
            </motion.a>
        </div>
    )
}

// ─── Impact Section sub-component ───────────────────
function ImpactSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, amount: 0.3 })

    return (
        <section className="tpt-impact-section" ref={ref}>
            <div className="tpt-container">
                <motion.div
                    className="tpt-impact-card"
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <p className="tpt-impact-eyebrow">The Hard Truth</p>
                    <h2 className="tpt-impact-title">
                        Your Website Might Be Costing You Thousands
                    </h2>
                    <p className="tpt-impact-text">
                        Most NZ business websites convert at just 1–2%. That means for every 100 visitors, 98 leave without ever contacting you. A high-converting website targets 5–10% — that&apos;s the difference between struggling and thriving.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
