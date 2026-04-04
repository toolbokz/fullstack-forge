'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FadeInSection, scaleUp } from './motion'
import { trackCta } from '../lib/analytics'

/**
 * CTASection — reusable conversion block with pain/urgency messaging.
 * Multiple variants: default (primary bg), dark, subtle.
 */
export default function CTASection({
    headline = 'Your Competitors Are Getting the Jobs You Should Have',
    body = 'Right now, someone in your area is searching for the exact services you offer. They\'re finding your competitors instead. Every day without a high-performing website is another day of lost revenue.',
    primaryCta = { text: 'Get My Free Audit Now', href: '#audit' },
    secondaryCta = { text: 'Talk to Us Today', href: '#contact' },
    variant = 'primary',
}) {
    const colorVariants = {
        primary: 'bg-primary text-white',
        dark: 'bg-dark text-white',
        subtle: 'bg-gray-50 text-gray-900',
    }

    return (
        <section className={`py-20 ${colorVariants[variant] || colorVariants.primary}`}>
            <div className="max-w-3xl mx-auto px-4 text-center">
                <FadeInSection>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">
                        {headline}
                    </h2>
                    <p className={`text-lg mb-8 ${variant === 'subtle' ? 'text-muted' : 'text-white/90'}`}>
                        {body}
                    </p>
                </FadeInSection>
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    variants={scaleUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {primaryCta.href.startsWith('/') ? (
                        <Link href={primaryCta.href} className={`btn btn-lg btn-cta-pulse ${variant === 'primary' ? '!bg-white !text-primary hover:!bg-gray-100' : ''}`} onClick={() => trackCta(primaryCta.text, variant)}>
                            {primaryCta.text}
                        </Link>
                    ) : (
                        <a href={primaryCta.href} className={`btn btn-lg btn-cta-pulse ${variant === 'primary' ? '!bg-white !text-primary hover:!bg-gray-100' : ''}`} onClick={() => trackCta(primaryCta.text, variant)}>
                            {primaryCta.text}
                        </a>
                    )}
                    {secondaryCta && (
                        secondaryCta.href.startsWith('/') ? (
                            <Link href={secondaryCta.href} className="btn btn-outline-light btn-lg">
                                {secondaryCta.text}
                            </Link>
                        ) : (
                            <a href={secondaryCta.href} className="btn btn-outline-light btn-lg">
                                {secondaryCta.text}
                            </a>
                        )
                    )}
                </motion.div>
            </div>
        </section>
    )
}
