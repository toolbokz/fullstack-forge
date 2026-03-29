'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, FadeInSection } from './motion'

const beforeAfter = [
    {
        icon: "🔍",
        before: "Page 5 on Google — invisible to customers",
        after: "Page 1 for 'plumber Auckland' — phone ringing daily",
        stat: "Page 1",
        statLabel: "Google ranking",
    },
    {
        icon: "📞",
        before: "2–3 enquiries per month from the website",
        after: "15–25+ qualified leads every month",
        stat: "10x",
        statLabel: "more leads",
    },
    {
        icon: "⏱️",
        before: "6-second load time — visitors leave immediately",
        after: "Under 1.5 seconds — fast, professional, trustworthy",
        stat: "< 1.5s",
        statLabel: "load time",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-20" id="results">
            <div className="container center-all">
                <FadeInSection>
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                        Real Results
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Before vs. After — What Actually Changes
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mb-14">
                        No vague promises. Here&apos;s what our clients see after we optimise their online presence.
                    </p>
                </FadeInSection>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {beforeAfter.map((r) => (
                        <motion.div
                            key={r.stat}
                            className="text-center p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                            variants={fadeUp}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        >
                            <div className="text-4xl mb-4">{r.icon}</div>
                            <div className="mb-4">
                                <span className="text-3xl font-extrabold text-primary">
                                    {r.stat}
                                </span>
                                <p className="text-sm text-muted">{r.statLabel}</p>
                            </div>
                            <div className="text-left space-y-2 mt-4">
                                <div className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold text-sm mt-0.5 shrink-0">✗</span>
                                    <span className="text-sm text-muted line-through">{r.before}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-green-500 font-bold text-sm mt-0.5 shrink-0">✓</span>
                                    <span className="text-sm text-green-700 font-semibold">{r.after}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
