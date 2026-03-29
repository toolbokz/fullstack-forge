"use client";

import React from "react";
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, FadeInSection } from './motion'

const solutions = [
    {
        icon: "🔍",
        title: "Get Found on Google",
        oldWay: "Nobody can find you when they search",
        newWay: "Show up on page 1 when local customers search for your services",
        description:
            "We optimise your website so you rank for searches like 'plumber near me' or 'electrician [your city]'. More visibility = more calls.",
    },
    {
        icon: "📱",
        title: "A Website That Actually Works",
        oldWay: "Slow, outdated site that looks dodgy on mobile",
        newWay: "Fast, professional site that makes customers pick up the phone",
        description:
            "Your website becomes your best salesperson — clean, fast, mobile-friendly, with clear calls-to-action that turn visitors into enquiries.",
    },
    {
        icon: "📞",
        title: "Leads on Autopilot",
        oldWay: "Relying on word-of-mouth and hoping the phone rings",
        newWay: "Consistent flow of enquiries from people ready to hire",
        description:
            "Built-in lead capture, click-to-call buttons, and quote request forms mean your website generates jobs for you — even while you sleep.",
    },
    {
        icon: "🤖",
        title: "AI-Powered Follow-Up",
        oldWay: "Leads fall through the cracks when you're on the tools",
        newWay: "Automatic responses and follow-ups so no job slips away",
        description:
            "Smart automation handles initial enquiries instantly, so potential customers never wait. You focus on the work, we handle the leads.",
    },
];

export default function Solutions() {
    return (
        <section className="py-20" id="solutions">
            <div className="container center-all">
                <FadeInSection>
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                        What We Do For You
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        We Turn Your Website Into a Job-Getting Machine
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mb-12">
                        No jargon. No fluff. Here&apos;s exactly what changes when we work on your online presence.
                    </p>
                </FadeInSection>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {solutions.map((s) => (
                        <motion.div
                            key={s.title}
                            className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-left hover:shadow-md transition-shadow"
                            variants={fadeUp}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        >
                            <div className="text-4xl mb-4">{s.icon}</div>
                            <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                            <div className="mb-4 space-y-2">
                                <div className="flex items-start gap-2">
                                    <span className="text-red-500 font-bold text-sm mt-0.5 shrink-0">✗</span>
                                    <span className="text-sm text-red-600 line-through">{s.oldWay}</span>
                                </div>
                                <div className="flex items-start gap-2">
                                    <span className="text-green-500 font-bold text-sm mt-0.5 shrink-0">✓</span>
                                    <span className="text-sm text-green-700 font-semibold">{s.newWay}</span>
                                </div>
                            </div>
                            <p className="text-muted text-sm">{s.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <FadeInSection delay={0.2}>
                    <a href="#audit" className="btn btn-lg mt-12">
                        See What We&apos;d Fix on Your Site →
                    </a>
                </FadeInSection>
            </div>
        </section>
    );
}
