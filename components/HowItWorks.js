'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, FadeInSection } from './motion'

const steps = [
    {
        number: "01",
        title: "We Audit Your Website",
        description:
            "Run our free audit tool. In 30 seconds you'll see exactly what's broken — speed, SEO, mobile, and lead capture. No guesswork.",
        icon: "🔍",
    },
    {
        number: "02",
        title: "We Fix & Optimise Everything",
        description:
            "We rebuild or optimise your site for speed, local search rankings, and lead generation. Done for you — you don't lift a finger.",
        icon: "🔧",
    },
    {
        number: "03",
        title: "You Get More Jobs",
        description:
            "Your phone starts ringing. Enquiries come in through your website. You pick the jobs you want. That's it.",
        icon: "📞",
    },
];

export default function HowItWorks() {
    return (
        <section className="text-white py-20" id="how-it-works" style={{ background: 'linear-gradient(135deg, #0b1220 0%, #0d1f3c 50%, #0b2e6e 100%)' }}>
            <div className="container center-all">
                <FadeInSection>
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                        How It Works
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        From Invisible to Fully Booked — In 3 Steps
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mb-14">
                        No tech talk. No months of waiting. Just a simple process that gets more jobs coming through your door.
                    </p>
                </FadeInSection>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {steps.map((step) => (
                        <motion.div key={step.number} className="text-center relative" variants={fadeUp}>
                            <div className="text-5xl mb-4">{step.icon}</div>
                            <span className="text-primary text-sm font-bold tracking-widest">
                                STEP {step.number}
                            </span>
                            <h3 className="text-xl font-bold mt-2 mb-3">{step.title}</h3>
                            <p className="text-gray-400">{step.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <FadeInSection delay={0.2}>
                    <a href="#audit" className="btn btn-lg mt-12">
                        Start With Your Free Audit →
                    </a>
                </FadeInSection>
            </div>
        </section>
    );
}
