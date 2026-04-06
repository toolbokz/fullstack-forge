"use client";

import React from "react";
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, FadeInSection } from './motion'
import UnsplashAttribution from './UnsplashAttribution'

const solutions = [
    {
        icon: "🔍",
        title: "Get Found on Google",
        oldWay: "Nobody can find you when they search",
        newWay: "Show up on page 1 when local customers search for your services",
        description:
            "We optimise your website so you rank for searches like 'plumber near me' or 'electrician [your city]'. More visibility = more calls.",
        fallbackImage: "/assets/portfolio-4.jpg",
        fallbackAlt: "Search engine optimisation analytics",
    },
    {
        icon: "📱",
        title: "A Website That Actually Works",
        oldWay: "Slow, outdated site that looks dodgy on mobile",
        newWay: "Fast, professional site that makes customers pick up the phone",
        description:
            "Your website becomes your best salesperson — clean, fast, mobile-friendly, with clear calls-to-action that turn visitors into enquiries.",
        fallbackImage: "/assets/portfolio-5.jpg",
        fallbackAlt: "Modern responsive website on mobile device",
    },
    {
        icon: "📞",
        title: "Leads on Autopilot",
        oldWay: "Relying on word-of-mouth and hoping the phone rings",
        newWay: "Consistent flow of enquiries from people ready to hire",
        description:
            "Built-in lead capture, click-to-call buttons, and quote request forms mean your website generates jobs for you — even while you sleep.",
        fallbackImage: "/assets/portfolio-6.jpg",
        fallbackAlt: "Customer enquiry notifications on phone",
    },
    {
        icon: "🤖",
        title: "AI-Powered Follow-Up",
        oldWay: "Leads fall through the cracks when you're on the tools",
        newWay: "Automatic responses and follow-ups so no job slips away",
        description:
            "Smart automation handles initial enquiries instantly, so potential customers never wait. You focus on the work, we handle the leads.",
        fallbackImage: "/assets/portfolio-7.jpg",
        fallbackAlt: "AI automation technology concept",
    },
];

export default function Solutions({ images = [] }) {
    return (
        <section className="py-24" id="solutions">
            <div className="container center-all">
                <FadeInSection>
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                        What We Do For You
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        We Turn Your Website Into a Job-Getting Machine
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mb-14">
                        No jargon. No fluff. Here&apos;s exactly what changes when we work on your online presence.
                    </p>
                </FadeInSection>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {solutions.map((s, i) => {
                        const img = images[i]
                        return (
                            <motion.div
                                key={s.title}
                                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden text-left hover:shadow-lg transition-all duration-300 group relative flex flex-col h-full"
                                variants={fadeUp}
                                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                            >
                                {/* Card image */}
                                <div className="relative h-44 overflow-hidden">
                                    <Image
                                        src={img?.url || img?.smallUrl || s.fallbackImage}
                                        alt={img?.alt || s.fallbackAlt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <div className="absolute bottom-3 left-5 text-3xl bg-white/90 backdrop-blur-sm rounded-xl w-14 h-14 flex items-center justify-center shadow-md">
                                        {s.icon}
                                    </div>
                                    {img?.photographer && (
                                        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded px-2 py-0.5 text-white">
                                            <UnsplashAttribution photographer={img.photographer} profileUrl={img.profileUrl} />
                                        </div>
                                    )}
                                </div>

                                {/* Card content */}
                                <div className="p-8 flex-1 flex flex-col">
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
                                    <p className="text-muted text-sm leading-relaxed flex-1">{s.description}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>

                <FadeInSection delay={0.2}>
                    <a href="#audit" className="btn btn-lg mt-14">
                        See What We&apos;d Fix on Your Site →
                    </a>
                </FadeInSection>
            </div>
        </section>
    );
}
