'use client'

import { motion } from 'framer-motion'

// ─── VARIANTS ───────────────────────────────────────
export const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
}

export const scaleUp = {
    hidden: { opacity: 0, scale: 0.92 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export const slideLeft = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export const staggerContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
}

export const staggerContainerSlow = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
}

// ─── REUSABLE COMPONENTS ────────────────────────────

/** Fades + slides up children when entering the viewport. */
export function FadeInSection({ children, className = '', delay = 0 }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    )
}

/** A container that staggers its motion.div children. */
export function StaggerContainer({ children, className = '', amount = 0.1 }) {
    return (
        <motion.div
            className={className}
            variants={{ hidden: {}, show: { transition: { staggerChildren: amount } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
        >
            {children}
        </motion.div>
    )
}

/** A card with fade-up on scroll + hover scale. */
export function AnimatedCard({ children, className = '' }) {
    return (
        <motion.div
            className={className}
            variants={fadeUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
        >
            {children}
        </motion.div>
    )
}

/** Animated heading — slide from left on scroll. */
export function AnimatedHeading({ children, as: Tag = 'h2', className = '' }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <Tag className={className}>{children}</Tag>
        </motion.div>
    )
}
