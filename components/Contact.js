'use client'

import { FadeInSection } from './motion'
import LeadCaptureForm from "./LeadCaptureForm";

export default function Contact() {
    return (
        <section className="py-20" id="contact">
            <div className="container center-all">
                <FadeInSection>
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                        Let&apos;s Get You More Jobs
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Tell Us About Your Business
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mb-10">
                        Fill in a few details and we&apos;ll get back to you within 24 hours with a clear plan to get more customers from your website. No hard sell. No jargon.
                    </p>
                </FadeInSection>

                <FadeInSection delay={0.15}>
                    <LeadCaptureForm
                        formName="lead-capture"
                        ctaText="Get My Free Consultation"
                        showWebsite={true}
                    />

                    <p className="text-muted text-sm mt-6">
                        No spam. No obligation. Just a straight-up conversation about getting you more work.
                    </p>
                </FadeInSection>
            </div>
        </section>
    );
}
