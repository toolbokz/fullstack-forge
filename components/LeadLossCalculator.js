'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── COUNT-UP HOOK ──────────────────────────────────
function useCountUp(target, duration = 900, enabled = true) {
    const [value, setValue] = useState(0)
    const frameRef = useRef(null)

    useEffect(() => {
        if (!enabled) { setValue(0); return }
        const start = performance.now()
        function tick(now) {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(target * eased))
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
    if (rate <= 1) return { text: 'Low', color: '#ef4444' }
    if (rate <= 2) return { text: 'Below Average', color: '#f97316' }
    if (rate <= 3) return { text: 'Average', color: '#eab308' }
    if (rate <= 5) return { text: 'Above Average', color: '#3b82f6' }
    return { text: 'High', color: '#10b981' }
}

const TARGET_RATE = 5

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i = 0) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }),
}

/**
 * LeadLossCalculator — premium SaaS-level interactive calculator.
 * Live calculation, slider inputs, animated results, metric cards.
 */
export default function LeadLossCalculator() {
    const [visitors, setVisitors] = useState(500)
    const [conversionRate, setConversionRate] = useState(1.5)
    const [jobValue, setJobValue] = useState(800)
    const [hasInteracted, setHasInteracted] = useState(false)

    // ─── Live calculations ──────────────────────────
    const currentLeads = Math.round(visitors * (conversionRate / 100))
    const potentialLeads = Math.round(visitors * (TARGET_RATE / 100))
    const lostLeads = Math.max(0, potentialLeads - currentLeads)
    const lostRevenue = lostLeads * jobValue
    const yearlyLoss = lostRevenue * 12

    // ─── Animated values ────────────────────────────
    const animCurrent = useCountUp(currentLeads, 800, hasInteracted)
    const animPotential = useCountUp(potentialLeads, 800, hasInteracted)
    const animLost = useCountUp(lostLeads, 800, hasInteracted)
    const animRevenue = useCountUp(lostRevenue, 1100, hasInteracted)
    const animYearly = useCountUp(yearlyLoss, 1100, hasInteracted)

    const rateLabel = getRateLabel(conversionRate)

    function handleInteraction() {
        if (!hasInteracted) setHasInteracted(true)
    }

    return (
        <div className="llc-calc-wrapper">
            {/* ── INPUT SECTION ── */}
            <div className="llc-calc-inputs">
                {/* Monthly Visitors */}
                <div className="llc-input-group">
                    <div className="llc-input-header">
                        <label className="llc-input-label" htmlFor="calc-visitors">Monthly Website Visitors</label>
                        <span className="llc-input-value-badge">{formatNum(visitors)}</span>
                    </div>
                    <input
                        id="calc-visitors"
                        type="range"
                        min="50"
                        max="10000"
                        step="50"
                        value={visitors}
                        onChange={(e) => { setVisitors(Number(e.target.value)); handleInteraction() }}
                        className="llc-slider"
                        style={{ '--pct': `${((visitors - 50) / (10000 - 50)) * 100}%` }}
                    />
                    <div className="llc-slider-labels"><span>50</span><span>10,000</span></div>
                </div>

                {/* Conversion Rate */}
                <div className="llc-input-group">
                    <div className="llc-input-header">
                        <label className="llc-input-label" htmlFor="calc-rate">Current Conversion Rate</label>
                        <span className="llc-input-value-badge">{conversionRate}%</span>
                    </div>
                    <input
                        id="calc-rate"
                        type="range"
                        min="0.5"
                        max="10"
                        step="0.5"
                        value={conversionRate}
                        onChange={(e) => { setConversionRate(Number(e.target.value)); handleInteraction() }}
                        className="llc-slider"
                        style={{ '--pct': `${((conversionRate - 0.5) / (10 - 0.5)) * 100}%` }}
                    />
                    <div className="llc-slider-labels"><span>0.5%</span><span>10%</span></div>
                    <p className="llc-rate-dynamic" style={{ color: rateLabel.color }}>{rateLabel.text}</p>
                </div>

                {/* Job Value */}
                <div className="llc-input-group">
                    <div className="llc-input-header">
                        <label className="llc-input-label" htmlFor="calc-job">Average Job Value</label>
                        <span className="llc-input-value-badge">{formatNZD(jobValue)}</span>
                    </div>
                    <input
                        id="calc-job"
                        type="range"
                        min="100"
                        max="20000"
                        step="100"
                        value={jobValue}
                        onChange={(e) => { setJobValue(Number(e.target.value)); handleInteraction() }}
                        className="llc-slider"
                        style={{ '--pct': `${((jobValue - 100) / (20000 - 100)) * 100}%` }}
                    />
                    <div className="llc-slider-labels"><span>$100</span><span>$20,000</span></div>
                </div>
            </div>

            {/* ── RESULTS SECTION ── */}
            <AnimatePresence mode="wait">
                {hasInteracted ? (
                    <motion.div
                        key="results"
                        className="llc-calc-results"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="llc-results-grid">
                            {/* Current Leads */}
                            <motion.div className="llc-result-card" variants={scaleIn} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className="llc-result-icon llc-result-icon--gray">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
                                </div>
                                <span className="llc-result-label">Current Leads/mo</span>
                                <span className="llc-result-value">{animCurrent}</span>
                            </motion.div>

                            {/* Potential Leads */}
                            <motion.div className="llc-result-card" variants={scaleIn} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className="llc-result-icon llc-result-icon--green">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                </div>
                                <span className="llc-result-label">Potential Leads/mo</span>
                                <span className="llc-result-value" style={{ color: '#10b981' }}>{animPotential}</span>
                                <span className="llc-result-badge llc-result-badge--green">at {TARGET_RATE}%</span>
                            </motion.div>

                            {/* Missed Leads */}
                            <motion.div className="llc-result-card" variants={scaleIn} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className="llc-result-icon llc-result-icon--orange">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                </div>
                                <span className="llc-result-label">Missed Leads/mo</span>
                                <span className="llc-result-value" style={{ color: '#f59e0b' }}>{animLost}</span>
                            </motion.div>

                            {/* HERO — Lost Revenue */}
                            <motion.div className="llc-result-card llc-result-card--hero" variants={scaleIn} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                                <div className="llc-result-icon llc-result-icon--red">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                </div>
                                <span className="llc-result-label">Lost Revenue/mo</span>
                                <span className="llc-result-value-hero">{formatNZD(animRevenue)}</span>
                            </motion.div>
                        </div>

                        {/* Yearly Loss */}
                        <motion.div
                            className="llc-yearly-loss"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="llc-yearly-loss-inner">
                                <span className="llc-yearly-loss-label">Yearly Loss</span>
                                <span className="llc-yearly-loss-amount">{formatNZD(animYearly)}</span>
                                <span className="llc-yearly-loss-sub">per year in lost revenue</span>
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <div className="llc-results-cta">
                            <motion.a
                                href="/#audit"
                                className="tpt-btn-primary"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Get My Free Website Audit →
                            </motion.a>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="placeholder"
                        className="llc-calc-placeholder"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3"><path d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" /></svg>
                        <p style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.75rem' }}>
                            Adjust the sliders to see your results
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
