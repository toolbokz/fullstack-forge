'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeUp, staggerContainer, FadeInSection } from './motion'
import UnsplashAttribution from './UnsplashAttribution'

const problems = [
    {
        icon: "🔍",
        title: "Invisible on Google",
        description:
            "Customers are searching for your services right now. But they're finding your competitors instead because your website doesn't show up.",
        fallbackImage: "/assets/portfolio-1.jpeg",
        fallbackAlt: "Google search results on laptop screen",
    },
    {
        icon: "📱",
        title: "Website That Doesn't Work",
        description:
            "Your site looks outdated, loads slowly on mobile, and doesn't have a way for customers to contact you easily. You're losing jobs every day.",
        fallbackImage: "/assets/portfolio-2.jpg",
        fallbackAlt: "Person frustrated with slow mobile website",
    },
    {
        icon: "📉",
        title: "Relying on Word-of-Mouth",
        description:
            "Referrals are great — but they dry up. Without a steady online presence, you've got no control over where your next job comes from.",
        fallbackImage: "/assets/portfolio-3.jpeg",
        fallbackAlt: "Tradesperson waiting for phone to ring",
    },
];

export default function WhoThisIsFor({ images = [] }) {
    return (
        <section className="bg-gray-50 py-24" id="problem">
            <div className="container center-all">
                <FadeInSection>
                    <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-3">
                        Sound Familiar?
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        You&apos;re a Great Tradie. But Nobody Can Find You Online.
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mb-14">
                        You do excellent work. But if customers can&apos;t find you when they search Google, those jobs go to someone else.
                    </p>
                </FadeInSection>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {problems.map((p, i) => {
                        const img = images[i]
                        return (
                            <motion.div
                                key={p.title}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 text-center hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
                                variants={fadeUp}
                                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                            >
                                <div className="relative h-44 overflow-hidden">
                                    <Image
                                        src={img?.url || img?.smallUrl || p.fallbackImage}
                                        alt={img?.alt || p.fallbackAlt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-3xl bg-white/90 backdrop-blur-sm rounded-xl w-14 h-14 flex items-center justify-center shadow-md">
                                        {p.icon}
                                    </div>
                                    {img?.photographer && (
                                        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded px-2 py-0.5 text-white">
                                            <UnsplashAttribution photographer={img.photographer} profileUrl={img.profileUrl} />
                                        </div>
                                    )}
                                </div>
                                <div className="p-7 flex-1 flex flex-col">
                                    <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                                    <p className="text-muted leading-relaxed flex-1">{p.description}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>

                <FadeInSection delay={0.2}>
                    <div className="mt-14 bg-red-50 border border-red-200 rounded-2xl p-8 max-w-2xl">
                        <p className="text-red-700 font-semibold text-lg leading-relaxed">
                            ⚠️ Every week without a proper online presence = jobs going to your competitors.
                        </p>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
}
