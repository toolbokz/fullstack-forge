'use client'

import { motion } from 'framer-motion'
import HeroVideo from './HeroVideo'

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <HeroVideo videoUrl="/assets/hero-bg.mp4" />
            <motion.div
                className="container center-all hero-content"
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
                </motion.div>
                <motion.p variants={fadeUp} className="text-white/60 text-sm mb-4">
                    Takes 30 seconds. No obligation. See exactly what&apos;s costing you jobs.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6 text-white/80 text-sm mt-2">
                    <span>✓ Built for tradies</span>
                    <span>✓ Results in 7 days</span>
                    <span>✓ No lock-in contracts</span>
                </motion.div>
                <motion.a
                    variants={fadeUp}
                    className="scroll-indicator"
                    href="#problem"
                    aria-label="Scroll down"
                >
                    <span className="scroll-indicator-arrow" aria-hidden="true">↓</span>
                </motion.a>
            </motion.div>
        </section>
    );
}
