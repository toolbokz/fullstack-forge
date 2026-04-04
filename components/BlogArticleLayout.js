'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, FadeInSection } from './motion'
import LeadCaptureForm from './LeadCaptureForm'
import AuthorBio from './AuthorBio'
import UnsplashImage from './UnsplashImage'
import ProofSection from './ProofSection'
import CTASection from './CTASection'
import LeadLossCalculator from './LeadLossCalculator'
import RelatedPosts from './blog/RelatedPosts'
import BlogEngagement from './blog/BlogEngagement'
import { trackCta } from '../lib/analytics'

/**
 * BlogArticleLayout — 10-section conversion funnel wrapper.
 *
 * Props for funnel features (all backward compatible):
 * - proofStats: array of {value, label} — proof bar after hero
 * - midCta: {headline, body} — mid-article CTA section
 * - showLeadCalculator: boolean — show Lead Loss Calculator before lead form
 * - slug: string — for form tracking
 * - linkPackage: { relatedPosts, serviceLinks, toolLinks, pillarLinks } — from internal-links.ts
 */
export default function BlogArticleLayout({
    title,
    description,
    datePublished,
    readTime,
    children,
    relatedLinks,
    heroImage,
    proofStats = null,
    midCta = null,
    showLeadCalculator = false,
    slug = '',
    linkPackage = null,
}) {
    return (
        <div>
            {/* ═══════ 1. ARTICLE HERO ═══════ */}
            <section className="blog-header text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#0d1f3c] to-[#0b5fff]" />
                <div className="absolute inset-0 bg-black/40" />
                <motion.div
                    className="max-w-3xl mx-auto px-4 text-center relative z-10"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div variants={fadeUp}>
                        <Link href="/blog" className="text-primary text-sm font-semibold hover:underline mb-4 inline-block">
                            ← Back to Blog
                        </Link>
                    </motion.div>
                    <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{title}</motion.h1>
                    <motion.p variants={fadeUp} className="text-gray-300 text-lg mb-4">{description}</motion.p>
                    <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 text-sm text-gray-400">
                        <span>By Zachariah Pini</span>
                        <span>•</span>
                        <time dateTime={datePublished}>{new Date(datePublished).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                        {readTime && (
                            <>
                                <span>•</span>
                                <span>{readTime} min read</span>
                            </>
                        )}
                    </motion.div>
                    <motion.a variants={fadeUp} href="#lead-form" className="inline-block mt-6 btn btn-cta-pulse text-sm">
                        Get a Free Website Audit →
                    </motion.a>
                </motion.div>
            </section>

            {/* ═══════ 2. PROOF BAR (optional) ═══════ */}
            {proofStats && proofStats.length > 0 && (
                <ProofSection stats={proofStats} />
            )}

            {/* ═══════ 3. FEATURED IMAGE ═══════ */}
            {heroImage && heroImage.url && (
                <FadeInSection>
                    <section className="bg-gray-50 py-8">
                        <div className="max-w-3xl mx-auto px-4">
                            <UnsplashImage
                                src={heroImage.url}
                                alt={heroImage.alt || title}
                                photographer={heroImage.photographer}
                                profileUrl={heroImage.profileUrl}
                                width={960}
                                height={540}
                                priority={true}
                                className="my-0"
                            />
                        </div>
                    </section>
                </FadeInSection>
            )}

            {/* ═══════ 4. ARTICLE BODY (main content) ═══════ */}
            <article className="py-16">
                <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray">
                    {children}
                </div>
            </article>

            {/* ═══════ AUTHOR BIO ═══════ */}
            <section className="py-10 bg-white">
                <div className="max-w-3xl mx-auto px-4">
                    <AuthorBio />
                </div>
            </section>

            {/* ═══════ ENGAGEMENT (Share + Like) ═══════ */}
            <BlogEngagement slug={slug} title={title} />

            {/* ═══════ 5. MID-ARTICLE CTA (optional) ═══════ */}
            {midCta && (
                <CTASection
                    headline={midCta.headline || 'Want Us to Do This for You?'}
                    body={midCta.body || 'Most business owners read this and think "I should do this" — then never do. Let us handle it. You focus on running your business.'}
                    primaryCta={{ text: 'Get My Free Audit', href: '#lead-form' }}
                    secondaryCta={{ text: 'See Pricing', href: '/pricing' }}
                    variant="primary"
                />
            )}

            {/* ═══════ 6. LEAD LOSS CALCULATOR (optional) ═══════ */}
            {showLeadCalculator && (
                <section className="py-16 bg-gray-50">
                    <div className="max-w-3xl mx-auto px-4">
                        <LeadLossCalculator />
                    </div>
                </section>
            )}

            {/* ═══════ 7. LEAD CAPTURE FORM ═══════ */}
            <FadeInSection>
                <section className="py-16 bg-dark text-white" id="lead-form">
                    <div className="max-w-xl mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold mb-4">Need Help With Your Website?</h2>
                        <p className="text-gray-400 mb-8">Get a free audit and personalised plan — we&apos;ll show you exactly what to fix, with real data.</p>

                        <LeadCaptureForm
                            formName={slug ? `blog-${slug}-lead` : 'blog-lead'}
                            ctaText="Get My Free Audit"
                            showWebsite={true}
                            darkMode={true}
                        />
                    </div>
                </section>
            </FadeInSection>

            {/* ═══════ 8. SMART RELATED CONTENT (from internal linking engine) ═══════ */}
            {linkPackage ? (
                <RelatedPosts
                    relatedPosts={linkPackage.relatedPosts || []}
                    serviceLinks={linkPackage.serviceLinks || []}
                    toolLinks={linkPackage.toolLinks || []}
                    pillarLinks={linkPackage.pillarLinks || []}
                />
            ) : relatedLinks && relatedLinks.length > 0 ? (
                <FadeInSection>
                    <section className="py-12 bg-gray-50">
                        <div className="max-w-3xl mx-auto px-4">
                            <h3 className="text-lg font-bold mb-4">Keep Reading</h3>
                            <ul className="flex flex-col gap-2">
                                {relatedLinks.map((link) => (
                                    <li key={link.url}>
                                        <Link href={link.url} className="text-primary hover:underline text-sm font-medium">
                                            {link.label} →
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </FadeInSection>
            ) : null}

            {/* ═══════ 9. END CTA ═══════ */}
            <CTASection
                headline="Ready to Get More Customers From Your Website?"
                body="Most business owners read this and think 'I should do this' — then never do. Let us handle it. You focus on running your business."
                primaryCta={{ text: 'Get My Free Audit', href: '/contact' }}
                secondaryCta={{ text: 'See Pricing', href: '/pricing' }}
                variant="dark"
            />
        </div>
    )
}
