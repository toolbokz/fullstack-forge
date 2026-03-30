'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, FadeInSection } from './motion'

const testimonials = [
    {
        quote: "I was getting zero calls from my website. Two weeks after Fullstack Forge rebuilt it, I had 15 new enquiries. It literally paid for itself in the first month.",
        name: "Dave R.",
        business: "DR Plumbing, Auckland",
        result: "15 new leads in 2 weeks",
        trade: "Plumber",
    },
    {
        quote: "I didn't even show up on Google before. Now I'm on page 1 for 'electrician Christchurch' and getting consistent work every week without spending a cent on ads.",
        name: "Sarah T.",
        business: "Elite Electrical, Christchurch",
        result: "Page 1 on Google",
        trade: "Electrician",
    },
    {
        quote: "Best money I've spent on my business. The website looks professional, loads fast, and the quote request forms are bringing in jobs I never would have got before.",
        name: "Mike K.",
        business: "MK Builders, Wellington",
        result: "3x more quote requests",
        trade: "Builder",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-gray-50 py-20" id="testimonials">
            <div className="container center-all">
                <FadeInSection>
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                        Tradies Who Made the Switch
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Don&apos;t Take Our Word For It
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mb-12">
                        Here&apos;s what happens when tradies stop relying on word-of-mouth and start getting found online.
                    </p>
                </FadeInSection>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {testimonials.map((t) => (
                        <motion.blockquote
                            key={t.name}
                            className="bg-white p-8 rounded-xl border border-primary shadow-sm text-left flex flex-col"
                            variants={fadeUp}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        >
                            <div className="text-primary text-3xl mb-3">&ldquo;</div>
                            <p className="text-gray-700 mb-6 flex-1">{t.quote}</p>
                            <div className="border-t border-gray-100 pt-4">
                                <span className="inline-block bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                                    {t.result}
                                </span>
                                <p className="font-bold text-sm">{t.name}</p>
                                <p className="text-muted text-sm">{t.business}</p>
                            </div>
                        </motion.blockquote>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
