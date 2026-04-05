'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeInSection, scaleUp } from './motion'
import UnsplashAttribution from './UnsplashAttribution'

export default function CTA({ image }) {
    return (
        <section className="cta text-white py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0b1220 0%, #0d1f3c 50%, #0b2e6e 100%)' }}>
            {/* Subtle background image */}
            <div className="absolute inset-0 opacity-10">
                <Image
                    src={image?.url || '/assets/hero.png'}
                    alt=""
                    fill
                    className="object-cover"
                    loading="lazy"
                    aria-hidden="true"
                />
            </div>
            {/* Radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,95,255,0.15)_0%,transparent_70%)]" />

            {/* Unsplash attribution for background */}
            {image?.photographer && (
                <div className="absolute bottom-2 right-3 z-10 bg-black/30 backdrop-blur-sm rounded px-2 py-0.5 text-white/60">
                    <UnsplashAttribution photographer={image.photographer} profileUrl={image.profileUrl} />
                </div>
            )}

            <div className="container center-all relative z-10">
                <FadeInSection>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white max-w-3xl leading-tight">
                        Your Competitors Are Getting the Jobs You Should Have
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mb-3 leading-relaxed">
                        Right now, someone in your area is searching for exactly what you do.
                        If they can&apos;t find you, they&apos;re hiring someone else.
                    </p>
                    <p className="text-white/90 font-semibold text-lg mb-10">
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
                    <motion.a className="btn btn-cta-pulse px-10 py-4 text-lg font-bold" href="#audit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                        Get My Free Audit Now
                    </motion.a>
                    <motion.a className="btn btn-outline-light px-10 py-4 text-lg" href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                        Talk to Us Today
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
