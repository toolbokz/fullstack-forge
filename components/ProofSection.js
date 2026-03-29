'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from './motion'

/**
 * ProofSection — metrics/outcomes display for conversion pages.
 * Shows headline stats in a high-contrast row with optional heading.
 */
export default function ProofSection({ heading, subheading, stats, dark = false }) {
    if (!stats || stats.length === 0) return null

    return (
        <section className={`py-16 ${dark ? 'bg-dark text-white' : 'bg-gray-50'}`}>
            <div className="max-w-4xl mx-auto px-4 text-center">
                {heading && (
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        {heading}
                    </h2>
                )}
                {subheading && (
                    <p className={`text-lg mb-10 ${dark ? 'text-gray-400' : 'text-muted'}`}>
                        {subheading}
                    </p>
                )}
                <motion.div
                    className={`grid gap-6 ${stats.length === 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-3'}`}
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {stats.map((stat) => (
                        <motion.div key={stat.label} className={`rounded-xl p-6 ${dark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-100 shadow-sm'}`} variants={fadeUp}>
                            <p className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{stat.value}</p>
                            <p className={`text-sm ${dark ? 'text-gray-400' : 'text-muted'}`}>{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
