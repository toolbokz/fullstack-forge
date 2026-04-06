'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, FadeInSection } from './motion'
import UnsplashAttribution from './UnsplashAttribution'

const steps = [
    {
        number: "01",
        title: "We Audit Your Website",
        description:
            "Run our free audit tool. In 30 seconds you'll see exactly what's broken — speed, SEO, mobile, and lead capture. No guesswork.",
        icon: "🔍",
        fallbackImage: "/assets/portfolio-8.png",
        fallbackAlt: "Website analytics dashboard showing audit results",
    },
    {
        number: "02",
        title: "We Fix & Optimise Everything",
        description:
            "We rebuild or optimise your site for speed, local search rankings, and lead generation. Done for you — you don't lift a finger.",
        icon: "🔧",
        fallbackImage: "/assets/portfolio-1.jpeg",
        fallbackAlt: "Developer coding a professional website",
    },
    {
        number: "03",
        title: "You Get More Jobs",
        description:
            "Your phone starts ringing. Enquiries come in through your website. You pick the jobs you want. That's it.",
        icon: "📞",
        fallbackImage: "/assets/portfolio-2.jpg",
        fallbackAlt: "Tradesperson receiving a phone call from a new customer",
    },
];

export default function HowItWorks({ images = [] }) {
    return (
        <section className="text-white py-24" id="how-it-works" style={{ background: 'linear-gradient(135deg, #0b1220 0%, #0d1f3c 50%, #0b2e6e 100%)' }}>
            <div className="container center-all">
                <FadeInSection>
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                        How It Works
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        From Invisible to Fully Booked — In 3 Steps
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mb-16">
                        No tech talk. No months of waiting. Just a simple process that gets more jobs coming through your door.
                    </p>
                </FadeInSection>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {steps.map((step, i) => {
                        const img = images[i]
                        return (
                            <motion.div key={step.number} className="text-center relative group flex flex-col h-full" variants={fadeUp}>
                                {/* Step image */}
                                <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[3/2]">
                                    <Image
                                        src={img?.url || img?.smallUrl || step.fallbackImage}
                                        alt={img?.alt || step.fallbackAlt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-widest">
                                        STEP {step.number}
                                    </div>
                                    {img?.photographer && (
                                        <div className="absolute bottom-2 right-2 bg-black/50 backdrop-blur-sm rounded px-2 py-0.5 text-white">
                                            <UnsplashAttribution photographer={img.photographer} profileUrl={img.profileUrl} />
                                        </div>
                                    )}
                                </div>
                                {/* Connector line between steps (desktop only) */}
                                {i < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-[25%] -right-5 w-10 border-t-2 border-dashed border-blue-500/40 z-10" />
                                )}
                                <h3 className="text-xl font-bold mt-2 mb-3">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed flex-1">{step.description}</p>
                            </motion.div>
                        )
                    })}
                </motion.div>

                <FadeInSection delay={0.2}>
                    <a href="#audit" className="btn btn-lg mt-14">
                        Start With Your Free Audit →
                    </a>
                </FadeInSection>
            </div>
        </section>
    );
}
