'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, FadeInSection } from './motion'
import UnsplashAttribution from './UnsplashAttribution'

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

export default function WhyChooseUs({ image }) {
    return (
        <section className="py-24" id="results">
            <div className="container center-all">
                <FadeInSection>
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                        Real Results
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Before vs. After — What Actually Changes
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mb-16">
                        No vague promises. Here&apos;s what our clients see after we optimise their online presence.
                    </p>
                </FadeInSection>

                {/* Split layout: stats + mockup image */}
                <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left: stat cards */}
                    <motion.div
                        className="grid grid-cols-1 gap-6 flex-1 w-full"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.15 }}
                    >
                        {beforeAfter.map((r) => (
                            <motion.div
                                key={r.stat}
                                className="flex items-start gap-6 p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
                                variants={fadeUp}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            >
                                <div className="shrink-0">
                                    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex flex-col items-center justify-center">
                                        <span className="text-2xl font-extrabold text-primary leading-none">
                                            {r.stat}
                                        </span>
                                        <span className="text-[10px] text-muted font-medium">{r.statLabel}</span>
                                    </div>
                                </div>
                                <div className="text-left space-y-2 flex-1">
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

                    {/* Right: visual showing a dashboard / results graphic */}
                    <FadeInSection className="flex-1 w-full hidden lg:block" delay={0.2}>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                            <Image
                                src={image?.url || '/assets/hero.png'}
                                alt={image?.alt || 'Analytics dashboard showing website performance improvements'}
                                width={600}
                                height={500}
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                            {/* Overlay with stats callout */}
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                <div className="flex justify-around text-white text-center">
                                    <div>
                                        <p className="text-2xl font-bold">92%</p>
                                        <p className="text-xs text-white/70">Performance</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">98%</p>
                                        <p className="text-xs text-white/70">SEO Score</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold">95%</p>
                                        <p className="text-xs text-white/70">Accessibility</p>
                                    </div>
                                </div>
                            </div>
                            {image?.photographer && (
                                <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded px-2 py-0.5 text-white">
                                    <UnsplashAttribution photographer={image.photographer} profileUrl={image.profileUrl} />
                                </div>
                            )}
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
}
