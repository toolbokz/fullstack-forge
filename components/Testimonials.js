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
        initials: "DR",
        color: "bg-blue-500",
    },
    {
        quote: "I didn't even show up on Google before. Now I'm on page 1 for 'electrician Christchurch' and getting consistent work every week without spending a cent on ads.",
        name: "Sarah T.",
        business: "Elite Electrical, Christchurch",
        result: "Page 1 on Google",
        trade: "Electrician",
        initials: "ST",
        color: "bg-emerald-500",
    },
    {
        quote: "Best money I've spent on my business. The website looks professional, loads fast, and the quote request forms are bringing in jobs I never would have got before.",
        name: "Mike K.",
        business: "MK Builders, Wellington",
        result: "3x more quote requests",
        trade: "Builder",
        initials: "MK",
        color: "bg-amber-500",
    },
];

export default function Testimonials() {
    return (
        <section className="bg-gray-50 py-24" id="testimonials">
            <div className="container center-all">
                <FadeInSection>
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                        Tradies Who Made the Switch
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Don&apos;t Take Our Word For It
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mb-14">
                        Here&apos;s what happens when tradies stop relying on word-of-mouth and start getting found online.
                    </p>
                </FadeInSection>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {testimonials.map((t) => (
                        <motion.blockquote
                            key={t.name}
                            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-left flex flex-col h-full hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                            variants={fadeUp}
                            whileHover={{ y: -6, transition: { duration: 0.25 } }}
                        >
                            {/* Accent stripe */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600" />

                            {/* Star rating */}
                            <div className="flex gap-0.5 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-gray-700 mb-6 flex-1 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>

                            <div className="border-t border-gray-100 pt-5 flex items-center gap-4">
                                <div className={`${t.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                                    {t.initials}
                                </div>
                                <div>
                                    <span className="inline-block bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-1.5">
                                        {t.result}
                                    </span>
                                    <p className="font-bold text-sm">{t.name}</p>
                                    <p className="text-muted text-sm">{t.business}</p>
                                </div>
                            </div>
                        </motion.blockquote>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
