'use client'

import Image from 'next/image'
import { FadeInSection } from './motion'
import LeadCaptureForm from "./LeadCaptureForm";

export default function Contact() {
    return (
        <section className="py-24" id="contact">
            <div className="container center-all">
                <FadeInSection>
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                        Let&apos;s Get You More Jobs
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Tell Us About Your Business
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mb-12">
                        Fill in a few details and we&apos;ll get back to you within 24 hours with a clear plan to get more customers from your website. No hard sell. No jargon.
                    </p>
                </FadeInSection>

                <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-12 items-start">
                    {/* Left: form */}
                    <FadeInSection delay={0.15} className="flex-1 w-full">
                        <LeadCaptureForm
                            formName="lead-capture"
                            ctaText="Get My Free Consultation"
                            showWebsite={true}
                            showMessage={true}
                        />

                        <p className="text-muted text-sm mt-6 text-center">
                            No spam. No obligation. Just a straight-up conversation about getting you more work.
                        </p>
                    </FadeInSection>

                    {/* Right: trust signals */}
                    <FadeInSection delay={0.3} className="flex-1 w-full hidden lg:block">
                        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                            <h3 className="text-xl font-bold mb-6">What happens next?</h3>
                            <div className="space-y-5">
                                {[
                                    { step: "1", text: "We review your business and website within 24 hours" },
                                    { step: "2", text: "We send you a clear action plan with priorities" },
                                    { step: "3", text: "Quick call to discuss (no pressure, no jargon)" },
                                    { step: "4", text: "If it's a good fit, we get to work — results in 7 days" },
                                ].map((item) => (
                                    <div key={item.step} className="flex items-start gap-4">
                                        <div className="shrink-0 w-8 h-8 rounded-full bg-blue-50 text-primary text-sm font-bold flex items-center justify-center">
                                            {item.step}
                                        </div>
                                        <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                                        <Image
                                            src="/assets/headshot.jpg"
                                            alt="Fullstack Forge founder"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold text-sm">Zac — Founder, Fullstack Forge</p>
                                        <p className="text-muted text-xs">Helping NZ tradies get more jobs online since 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
}
