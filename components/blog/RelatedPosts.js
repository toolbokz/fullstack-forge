'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FadeInSection } from '../motion'
import { trackCta } from '../../lib/analytics'

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }),
}

/**
 * RelatedPosts — thumbnail card grid for related blog content.
 *
 * Props:
 * - relatedPosts: { url, label, type, thumbnail? }[]
 * - serviceLinks: { url, label }[]
 * - toolLinks: { url, label }[]
 * - pillarLinks: { url, label }[]
 */
export default function RelatedPosts({
    relatedPosts = [],
    serviceLinks = [],
    toolLinks = [],
    pillarLinks = [],
}) {
    const hasContent = relatedPosts.length > 0 || serviceLinks.length > 0 || toolLinks.length > 0 || pillarLinks.length > 0

    if (!hasContent) return null

    return (
        <FadeInSection>
            <section className="py-14 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-xl font-bold mb-8 text-gray-900">Keep Reading</h2>

                    {/* ── Related Blog Post Thumbnails ── */}
                    {relatedPosts.length > 0 && (
                        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 mb-10">
                            {relatedPosts.map((post, i) => (
                                <motion.div
                                    key={post.url}
                                    custom={i}
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <Link
                                        href={post.url}
                                        className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
                                        onClick={() => trackCta('related-post', 'blog-footer')}
                                    >
                                        <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-[#0d1f3c] to-[#0b5fff] relative">
                                            {post.thumbnail?.url ? (
                                                <img
                                                    src={post.thumbnail.url}
                                                    alt={post.thumbnail.alt || post.label}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <svg className="w-10 h-10 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <p className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                                                {post.label}
                                            </p>
                                            <span className="text-xs text-primary font-medium mt-2 inline-block">
                                                Read article →
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* ── Tools + Services row ── */}
                    {(toolLinks.length > 0 || serviceLinks.length > 0) && (
                        <div className="grid gap-6 md:grid-cols-2 mb-8">
                            {toolLinks.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Free Tools</h3>
                                    <ul className="flex flex-col gap-2">
                                        {toolLinks.map((link) => (
                                            <li key={link.url}>
                                                <Link
                                                    href={link.url}
                                                    className="text-sm text-gray-700 hover:text-primary transition-colors font-medium"
                                                    onClick={() => trackCta('related-tool', 'blog-footer')}
                                                >
                                                    {link.label} →
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {serviceLinks.length > 0 && (
                                <div>
                                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Our Services</h3>
                                    <ul className="flex flex-col gap-2">
                                        {serviceLinks.map((link) => (
                                            <li key={link.url}>
                                                <Link
                                                    href={link.url}
                                                    className="text-sm text-gray-700 hover:text-primary transition-colors font-medium"
                                                    onClick={() => trackCta('related-service', 'blog-footer')}
                                                >
                                                    {link.label} →
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {/* ── Pillar page pills ── */}
                    {pillarLinks.length > 0 && (
                        <div className="pt-6 border-t border-gray-200">
                            <div className="flex flex-wrap gap-3">
                                {pillarLinks.map((link) => (
                                    <Link
                                        key={link.url}
                                        href={link.url}
                                        className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold hover:bg-primary/20 transition-colors"
                                        onClick={() => trackCta('pillar-link', 'blog-footer')}
                                    >
                                        {link.label} →
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </FadeInSection>
    )
}
