'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, FadeInSection } from './motion'

const problems = [
    {
        icon: "🔍",
        title: "Invisible on Google",
        description:
            "Customers are searching for your services right now. But they're finding your competitors instead because your website doesn't show up.",
    },
    {
        icon: "📱",
        title: "Website That Doesn't Work",
        description:
            "Your site looks outdated, loads slowly on mobile, and doesn't have a way for customers to contact you easily. You're losing jobs every day.",
    },
    {
        icon: "📉",
        title: "Relying on Word-of-Mouth",
        description:
            "Referrals are great — but they dry up. Without a steady online presence, you've got no control over where your next job comes from.",
    },
];

export default function WhoThisIsFor() {
    return (
        <section className="bg-gray-50 py-20" id="problem">
            <div className="container center-all">
                <FadeInSection>
                    <p className="text-red-500 font-semibold text-sm uppercase tracking-widest mb-2">
                        Sound Familiar?
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        You&apos;re a Great Tradie. But Nobody Can Find You Online.
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mb-12">
                        You do excellent work. But if customers can&apos;t find you when they search Google, those jobs go to someone else.
                    </p>
                </FadeInSection>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {problems.map((p) => (
                        <motion.div
                            key={p.title}
                            className="bg-white rounded-xl p-8 shadow-sm border border-primary text-center hover:shadow-md transition-shadow"
                            variants={fadeUp}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        >
                            <div className="text-4xl mb-4">{p.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                            <p className="text-muted">{p.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <FadeInSection delay={0.2}>
                    <div className="mt-12 bg-red-50 border border-red-200 rounded-xl p-6 max-w-2xl">
                        <p className="text-red-700 font-semibold text-lg">
                            Every week without a proper online presence = jobs going to your competitors.
                        </p>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
}
