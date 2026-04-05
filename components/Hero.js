'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import HeroVideo from './HeroVideo'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }
const fadeRight = { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 } } }

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <HeroVideo videoUrl="/assets/hero-bg.mp4" />
            <div className="container hero-content hero-split">
                {/* Left — Copy */}
                <motion.div
                    className="hero-split-left"
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                >
                    <motion.p variants={fadeUp} className="text-white/90 bg-white/10 inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-white/20">
                        🔥 Only 3 spots left this month
                    </motion.p>
                    <motion.h1 variants={fadeUp}>
                        Get More Jobs From Google — Without Lifting a Finger
                    </motion.h1>
                    <motion.p variants={fadeUp} className="hero-sub">
                        We help NZ tradies get found online, generate leads on autopilot, and stop relying on word-of-mouth alone.
                    </motion.p>
                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mt-2 mb-6">
                        <motion.a
                            className="btn btn-lg btn-cta-pulse"
                            href="#audit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Get My Free Website Audit
                        </motion.a>
                        <motion.a
                            className="btn btn-lg btn-outline-light"
                            href="#solutions"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            See How It Works
                        </motion.a>
                    </motion.div>
                    <motion.p variants={fadeUp} className="text-white/60 text-sm mb-4">
                        Takes 30 seconds. No obligation. See exactly what&apos;s costing you jobs.
                    </motion.p>
                    <motion.div variants={fadeUp} className="flex flex-wrap gap-x-6 gap-y-2 text-white/80 text-sm mt-2">
                        <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Built for tradies</span>
                        <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> Results in 7 days</span>
                        <span className="flex items-center gap-1.5"><span className="text-green-400">✓</span> No lock-in contracts</span>
                    </motion.div>
                </motion.div>

                {/* Right — Visual mockup */}
                <motion.div
                    className="hero-split-right"
                    variants={fadeRight}
                    initial="hidden"
                    animate="show"
                >
                    <div className="hero-mockup">
                        <div className="hero-mockup-browser">
                            <div className="hero-mockup-dots">
                                <span /><span /><span />
                            </div>
                            <div className="hero-mockup-url">yourtradiebusiness.co.nz</div>
                        </div>
                        <div className="hero-mockup-body">
                            <div className="hero-mockup-stat-row">
                                <div className="hero-mockup-stat">
                                    <span className="hero-mockup-stat-number text-green-400">↑ 312%</span>
                                    <span className="hero-mockup-stat-label">More Traffic</span>
                                </div>
                                <div className="hero-mockup-stat">
                                    <span className="hero-mockup-stat-number text-blue-400">47</span>
                                    <span className="hero-mockup-stat-label">Leads / Month</span>
                                </div>
                                <div className="hero-mockup-stat">
                                    <span className="hero-mockup-stat-number text-amber-400">0.8s</span>
                                    <span className="hero-mockup-stat-label">Load Time</span>
                                </div>
                            </div>
                            <div className="hero-mockup-chart">
                                <svg viewBox="0 0 200 60" fill="none" className="w-full">
                                    <defs>
                                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#0b5fff" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#0b5fff" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path d="M0 55 Q20 50 40 42 T80 30 T120 18 T160 10 T200 3" stroke="#0b5fff" strokeWidth="2" fill="none" />
                                    <path d="M0 55 Q20 50 40 42 T80 30 T120 18 T160 10 T200 3 V60 H0Z" fill="url(#chartGrad)" />
                                </svg>
                            </div>
                            <div className="hero-mockup-bar-row">
                                <div className="hero-mockup-bar"><div className="hero-mockup-bar-fill" style={{ width: '92%' }} /><span>Google Ranking</span></div>
                                <div className="hero-mockup-bar"><div className="hero-mockup-bar-fill" style={{ width: '85%' }} /><span>Site Speed</span></div>
                                <div className="hero-mockup-bar"><div className="hero-mockup-bar-fill" style={{ width: '78%' }} /><span>Lead Capture</span></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.a
                className="scroll-indicator"
                href="#problem"
                aria-label="Scroll down"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <span className="scroll-indicator-arrow" aria-hidden="true">↓</span>
            </motion.a>
        </section>
    );
}
