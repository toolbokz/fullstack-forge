'use client'

import { motion } from 'framer-motion'
import { FadeInSection, scaleUp } from './motion'

export default function CTA() {
    return (
        <section className="cta text-white py-16" style={{ background: 'linear-gradient(135deg, #0b1220 0%, #0d1f3c 50%, #0b2e6e 100%)' }}>
            <div className="container center-all">
                <FadeInSection>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Your Competitors Are Getting the Jobs You Should Have
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mb-3">
                        Right now, someone in your area is searching for exactly what you do.
                        If they can&apos;t find you, they&apos;re hiring someone else.
                    </p>
                    <p className="text-white/90 font-semibold text-lg mb-8">
                        How many more jobs do you need to lose before you fix this?
                    </p>
                </FadeInSection>
                <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    variants={scaleUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <motion.a className="btn btn-cta-pulse px-8 py-3 text-lg" href="#audit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                        Get My Free Audit Now
                    </motion.a>
                    <motion.a className="btn btn-outline-light px-8 py-3 text-lg" href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                        Talk to Us Today
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
