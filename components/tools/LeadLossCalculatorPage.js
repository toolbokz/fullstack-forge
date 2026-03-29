'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import LeadCaptureForm from '../LeadCaptureForm'

// ─── ANIMATION VARIANTS ────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i = 0) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
}

// ─── COUNT-UP HOOK ──────────────────────────────────
function useCountUp(target, duration = 1200, enabled = true) {
    const [value, setValue] = useState(0)
    const frameRef = useRef(null)

    useEffect(() => {
        if (!enabled) { setValue(0); return }
        const start = performance.now()
        const from = 0

        function tick(now) {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
            setValue(Math.round(from + (target - from) * eased))
            if (progress < 1) frameRef.current = requestAnimationFrame(tick)
        }

        frameRef.current = requestAnimationFrame(tick)
        return () => { if (frameRef.current) cancelAnimationFrame(frameRef.current) }
    }, [target, duration, enabled])

    return value
}

// ─── FORMAT HELPERS ─────────────────────────────────
const formatNZD = (n) => new Intl.NumberFormat('en-NZ', { style: 'currency', currency: 'NZD', maximumFractionDigits: 0 }).format(n)
const formatNum = (n) => new Intl.NumberFormat('en-NZ').format(n)

// ─── RATE LABEL ─────────────────────────────────────
function getRateLabel(rate) {
    if (rate <= 1) return { text: 'Very low — most visitors leave without enquiring', color: 'text-red-500' }
    if (rate <= 2) return { text: 'Below average for NZ businesses', color: 'text-orange-500' }
    if (rate <= 3) return { text: 'Average — room for significant improvement', color: 'text-yellow-500' }
    if (rate <= 5) return { text: 'Above average — good foundation', color: 'text-blue-500' }
    return { text: 'High-performing — well optimised', color: 'text-green-500' }
}

// ─── BENCHMARKS DATA ────────────────────────────────
const benchmarks = [
    { industry: 'Tradespeople', rate: '1.5–3%', avg: 2.2 },
    { industry: 'Professional Services', rate: '2–5%', avg: 3.5 },
    { industry: 'E-commerce', rate: '1.5–3%', avg: 2.1 },
    { industry: 'Real Estate', rate: '1–3%', avg: 2.0 },
    { industry: 'Health & Wellness', rate: '2–5%', avg: 3.2 },
    { industry: 'Optimised sites (our target)', rate: '5–10%', avg: 7.0 },
]

// ═════════════════════════════════════════════════════
// MAIN COMPONENT
// ═════════════════════════════════════════════════════
export default function LeadLossCalculatorPage() {
    // ─── State ──────────────────────────────────────
    const [visitors, setVisitors] = useState(500)
    const [conversionRate, setConversionRate] = useState(1.5)
    const [jobValue, setJobValue] = useState(800)
    const [hasInteracted, setHasInteracted] = useState(false)
    const [showEmailGate, setShowEmailGate] = useState(false)

    const calculatorRef = useRef(null)
    const resultsRef = useRef(null)
    const resultsInView = useInView(resultsRef, { once: false, amount: 0.3 })

    const TARGET_RATE = 5 // optimised conversion rate %

    // ─── Calculations (live) ────────────────────────
    const currentLeads = Math.round(visitors * (conversionRate / 100))
    const potentialLeads = Math.round(visitors * (TARGET_RATE / 100))
    const lostLeads = Math.max(0, potentialLeads - currentLeads)
    const lostRevenue = lostLeads * jobValue
    const yearlyLoss = lostRevenue * 12

    // ─── Animated values ────────────────────────────
    const animCurrentLeads = useCountUp(currentLeads, 800, hasInteracted)
    const animPotentialLeads = useCountUp(potentialLeads, 800, hasInteracted)
    const animLostLeads = useCountUp(lostLeads, 800, hasInteracted)
    const animLostRevenue = useCountUp(lostRevenue, 1200, hasInteracted)
    const animYearlyLoss = useCountUp(yearlyLoss, 1200, hasInteracted)

    const rateLabel = getRateLabel(conversionRate)

    const scrollToCalculator = useCallback(() => {
        calculatorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [])

    function handleInteraction() {
        if (!hasInteracted) setHasInteracted(true)
    }

    // ────────────────────────────────────────────────
    // RENDER
    // ────────────────────────────────────────────────
    return (
        <div className="llc-page">

            {/* ═══════════════════════════════════════
                1. HERO SECTION
            ═══════════════════════════════════════ */}
            <section className="llc-hero">
                {/* Animated background orbs */}
                <div className="llc-hero-orb llc-hero-orb--1" />
                <div className="llc-hero-orb llc-hero-orb--2" />
                <div className="llc-hero-orb llc-hero-orb--3" />

                <div className="llc-hero-content">
                    <motion.p
                        className="llc-hero-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Free Tool
                    </motion.p>

                    <motion.h1
                        className="llc-hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        How Much Revenue Is Your<br />
                        <span className="llc-hero-title-accent">Website Losing?</span>
                    </motion.h1>

                    <motion.p
                        className="llc-hero-sub"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                    >
                        Most NZ business websites convert at just 1–2%. High-performing sites reach 5–10%.
                        <br className="hidden md:block" />
                        Find out exactly how much money you&apos;re leaving on the table.
                    </motion.p>

                    <motion.button
                        onClick={scrollToCalculator}
                        className="llc-hero-cta"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Start Calculating
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
                    </motion.button>

                    {/* Floating preview card */}
                    <motion.div
                        className="llc-hero-preview"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="llc-preview-grid">
                            <div className="llc-preview-card">
                                <span className="llc-preview-label">Current Leads</span>
                                <span className="llc-preview-value">5</span>
                            </div>
                            <div className="llc-preview-card">
                                <span className="llc-preview-label">Potential Leads</span>
                                <span className="llc-preview-value llc-text-green">25</span>
                            </div>
                            <div className="llc-preview-card llc-preview-card--danger">
                                <span className="llc-preview-label">Lost Revenue</span>
                                <span className="llc-preview-value llc-text-red">$16,000/mo</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                2. INTERACTIVE CALCULATOR
            ═══════════════════════════════════════ */}
            <section className="llc-calculator-section" ref={calculatorRef} id="calculator">
                <div className="llc-container">
                    <motion.div
                        className="llc-section-header"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <h2 className="llc-section-title">Calculate Your Lost Revenue</h2>
                        <p className="llc-section-sub">Adjust the sliders below — results update instantly.</p>
                    </motion.div>

                    <div className="llc-calc-layout">
                        {/* ── Input Panel ── */}
                        <motion.div
                            className="llc-input-panel"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {/* Monthly Visitors */}
                            <div className="llc-input-group">
                                <div className="llc-input-header">
                                    <label className="llc-input-label" htmlFor="llc-visitors">Monthly Website Visitors</label>
                                    <span className="llc-input-value-badge">{formatNum(visitors)}</span>
                                </div>
                                <input
                                    id="llc-visitors"
                                    type="range"
                                    min="50"
                                    max="10000"
                                    step="50"
                                    value={visitors}
                                    onChange={(e) => { setVisitors(Number(e.target.value)); handleInteraction() }}
                                    className="llc-slider"
                                    style={{ '--pct': `${((visitors - 50) / (10000 - 50)) * 100}%` }}
                                />
                                <div className="llc-slider-labels">
                                    <span>50</span>
                                    <span>10,000</span>
                                </div>
                            </div>

                            {/* Conversion Rate */}
                            <div className="llc-input-group">
                                <div className="llc-input-header">
                                    <label className="llc-input-label" htmlFor="llc-rate">Current Conversion Rate</label>
                                    <span className="llc-input-value-badge">{conversionRate}%</span>
                                </div>
                                <input
                                    id="llc-rate"
                                    type="range"
                                    min="0.5"
                                    max="10"
                                    step="0.5"
                                    value={conversionRate}
                                    onChange={(e) => { setConversionRate(Number(e.target.value)); handleInteraction() }}
                                    className="llc-slider"
                                    style={{ '--pct': `${((conversionRate - 0.5) / (10 - 0.5)) * 100}%` }}
                                />
                                <div className="llc-slider-labels">
                                    <span>0.5%</span>
                                    <span>10%</span>
                                </div>
                                <p className={`llc-rate-label ${rateLabel.color}`}>{rateLabel.text}</p>
                            </div>

                            {/* Average Job Value */}
                            <div className="llc-input-group">
                                <div className="llc-input-header">
                                    <label className="llc-input-label" htmlFor="llc-job">Average Job Value</label>
                                    <span className="llc-input-value-badge">{formatNZD(jobValue)}</span>
                                </div>
                                <input
                                    id="llc-job"
                                    type="range"
                                    min="100"
                                    max="20000"
                                    step="100"
                                    value={jobValue}
                                    onChange={(e) => { setJobValue(Number(e.target.value)); handleInteraction() }}
                                    className="llc-slider"
                                    style={{ '--pct': `${((jobValue - 100) / (20000 - 100)) * 100}%` }}
                                />
                                <div className="llc-slider-labels">
                                    <span>$100</span>
                                    <span>$20,000</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* ── Results Panel ── */}
                        <div className="llc-results-panel" ref={resultsRef}>
                            <AnimatePresence mode="wait">
                                {hasInteracted ? (
                                    <motion.div
                                        key="results"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="llc-results-inner"
                                    >
                                        {/* Metric cards */}
                                        <div className="llc-metric-grid">
                                            <motion.div className="llc-metric-card" variants={scaleIn} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                                <div className="llc-metric-icon llc-metric-icon--gray">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                                                </div>
                                                <span className="llc-metric-label">Current Leads/mo</span>
                                                <span className="llc-metric-value">{animCurrentLeads}</span>
                                            </motion.div>

                                            <motion.div className="llc-metric-card" variants={scaleIn} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                                <div className="llc-metric-icon llc-metric-icon--green">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                                </div>
                                                <span className="llc-metric-label">Potential Leads/mo</span>
                                                <span className="llc-metric-value llc-text-green">{animPotentialLeads}</span>
                                                <span className="llc-metric-badge llc-metric-badge--green">↑ at {TARGET_RATE}%</span>
                                            </motion.div>

                                            <motion.div className="llc-metric-card" variants={scaleIn} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                                <div className="llc-metric-icon llc-metric-icon--orange">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                                </div>
                                                <span className="llc-metric-label">Missed Leads/mo</span>
                                                <span className="llc-metric-value llc-text-orange">{animLostLeads}</span>
                                                <span className="llc-metric-badge llc-metric-badge--orange">↓ lost</span>
                                            </motion.div>

                                            {/* Hero metric — Lost Revenue */}
                                            <motion.div className="llc-metric-card llc-metric-card--hero" variants={scaleIn} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                                <div className="llc-metric-icon llc-metric-icon--red">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                                </div>
                                                <span className="llc-metric-label">Lost Revenue/mo</span>
                                                <span className="llc-metric-value-hero">{formatNZD(animLostRevenue)}</span>
                                                <span className="llc-metric-badge llc-metric-badge--red">That&apos;s {formatNZD(animYearlyLoss)}/year</span>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="placeholder"
                                        className="llc-results-placeholder"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <div className="llc-results-placeholder-icon">
                                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4"><path d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>
                                        </div>
                                        <p className="llc-results-placeholder-text">
                                            Adjust the sliders to see<br />your results instantly
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                3. IMPACT SECTION (EMOTIONAL TRIGGER)
            ═══════════════════════════════════════ */}
            <AnimatePresence>
                {hasInteracted && lostRevenue > 0 && (
                    <motion.section
                        className="llc-impact-section"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="llc-container">
                            <motion.div
                                className="llc-impact-card"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <p className="llc-impact-pretext">Based on your numbers, you could be losing</p>
                                <p className="llc-impact-amount">{formatNZD(lostRevenue)}</p>
                                <p className="llc-impact-period">every single month</p>
                                <div className="llc-impact-divider" />
                                <div className="llc-impact-yearly">
                                    <span className="llc-impact-yearly-label">That&apos;s</span>
                                    <span className="llc-impact-yearly-amount">{formatNZD(yearlyLoss)}</span>
                                    <span className="llc-impact-yearly-label">per year in lost revenue</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* ═══════════════════════════════════════
                4. VISUAL COMPARISON
            ═══════════════════════════════════════ */}
            <AnimatePresence>
                {hasInteracted && (
                    <motion.section
                        className="llc-comparison-section"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="llc-container">
                            <motion.div
                                className="llc-section-header"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <h2 className="llc-section-title">Your Website vs. Optimised</h2>
                                <p className="llc-section-sub">See the difference a high-converting website could make.</p>
                            </motion.div>

                            <div className="llc-comparison-grid">
                                {/* Current */}
                                <motion.div
                                    className="llc-comparison-col llc-comparison-col--current"
                                    variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                >
                                    <h3 className="llc-comparison-heading">Current Website</h3>
                                    <div className="llc-comparison-stat">
                                        <span className="llc-comparison-stat-label">Conversion Rate</span>
                                        <div className="llc-bar-wrap">
                                            <motion.div
                                                className="llc-bar llc-bar--gray"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${Math.min((conversionRate / 10) * 100, 100)}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                            />
                                        </div>
                                        <span className="llc-comparison-stat-value">{conversionRate}%</span>
                                    </div>
                                    <div className="llc-comparison-stat">
                                        <span className="llc-comparison-stat-label">Leads / Month</span>
                                        <div className="llc-bar-wrap">
                                            <motion.div
                                                className="llc-bar llc-bar--gray"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${potentialLeads > 0 ? Math.min((currentLeads / potentialLeads) * 100, 100) : 0}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                            />
                                        </div>
                                        <span className="llc-comparison-stat-value">{currentLeads}</span>
                                    </div>
                                    <div className="llc-comparison-stat">
                                        <span className="llc-comparison-stat-label">Monthly Revenue</span>
                                        <span className="llc-comparison-revenue">{formatNZD(currentLeads * jobValue)}</span>
                                    </div>
                                </motion.div>

                                {/* VS divider */}
                                <div className="llc-comparison-vs">
                                    <span>VS</span>
                                </div>

                                {/* Optimised */}
                                <motion.div
                                    className="llc-comparison-col llc-comparison-col--optimised"
                                    variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                >
                                    <h3 className="llc-comparison-heading llc-text-green">Optimised Website</h3>
                                    <div className="llc-comparison-stat">
                                        <span className="llc-comparison-stat-label">Conversion Rate</span>
                                        <div className="llc-bar-wrap">
                                            <motion.div
                                                className="llc-bar llc-bar--green"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${Math.min((TARGET_RATE / 10) * 100, 100)}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                            />
                                        </div>
                                        <span className="llc-comparison-stat-value llc-text-green">{TARGET_RATE}%</span>
                                    </div>
                                    <div className="llc-comparison-stat">
                                        <span className="llc-comparison-stat-label">Leads / Month</span>
                                        <div className="llc-bar-wrap">
                                            <motion.div
                                                className="llc-bar llc-bar--green"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '100%' }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                            />
                                        </div>
                                        <span className="llc-comparison-stat-value llc-text-green">{potentialLeads}</span>
                                    </div>
                                    <div className="llc-comparison-stat">
                                        <span className="llc-comparison-stat-label">Monthly Revenue</span>
                                        <span className="llc-comparison-revenue llc-text-green">{formatNZD(potentialLeads * jobValue)}</span>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* ═══════════════════════════════════════
                5. BENCHMARKS (TRUST + AUTHORITY)
            ═══════════════════════════════════════ */}
            <section className="llc-benchmarks-section">
                <div className="llc-container">
                    <motion.div
                        className="llc-section-header"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="llc-section-title">Industry Benchmarks</h2>
                        <p className="llc-section-sub">How does your website stack up against these NZ industry averages?</p>
                    </motion.div>

                    <div className="llc-benchmarks-grid">
                        {benchmarks.map((b, i) => (
                            <motion.div
                                key={b.industry}
                                className={`llc-benchmark-card ${i === benchmarks.length - 1 ? 'llc-benchmark-card--highlight' : ''}`}
                                variants={scaleIn}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <span className="llc-benchmark-industry">{b.industry}</span>
                                <span className="llc-benchmark-rate">{b.rate}</span>
                                <div className="llc-benchmark-bar-wrap">
                                    <motion.div
                                        className={`llc-benchmark-bar ${i === benchmarks.length - 1 ? 'llc-benchmark-bar--accent' : ''}`}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${(b.avg / 10) * 100}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                6. EMAIL CAPTURE (SMART GATE)
            ═══════════════════════════════════════ */}
            <section className="llc-email-section">
                <div className="llc-container">
                    <motion.div
                        className="llc-email-card"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="llc-email-title">Want a Full Breakdown of How to Fix This?</h2>
                        <p className="llc-email-sub">
                            We&apos;ll send you a personalised report with actionable steps to stop losing leads and start growing your revenue.
                        </p>

                        {!showEmailGate ? (
                            <motion.button
                                onClick={() => setShowEmailGate(true)}
                                className="llc-email-cta"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Get My Free Audit Report
                            </motion.button>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="llc-email-form-wrap"
                            >
                                <LeadCaptureForm
                                    formName="lead-loss-calculator-lead"
                                    ctaText="Send My Free Report"
                                    showWebsite={true}
                                    darkMode={false}
                                />
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                7. FINAL CTA
            ═══════════════════════════════════════ */}
            <section className="llc-final-cta">
                <div className="llc-container">
                    <motion.div
                        className="llc-final-cta-inner"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h2 className="llc-final-cta-title">Stop Losing Leads</h2>
                        <p className="llc-final-cta-sub">
                            Every day your website underperforms is money left on the table.
                            Let us show you exactly what to fix.
                        </p>
                        <div className="llc-final-cta-buttons">
                            <motion.a
                                href="/#audit"
                                className="llc-btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Get My Free Website Audit
                            </motion.a>
                            <motion.a
                                href="/#contact"
                                className="llc-btn-outline"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Talk to Us Today
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
