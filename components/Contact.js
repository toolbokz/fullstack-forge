import LeadCaptureForm from "./LeadCaptureForm";

export default function Contact() {
    return (
        <section className="py-20" id="contact">
            <div className="container center-all">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                    Get Started
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Let&apos;s Build Your Lead-Generating Website
                </h2>
                <p className="text-muted text-lg max-w-2xl mb-10">
                    Tell us about your business and we&apos;ll get back to you within 24
                    hours with a plan to grow your online presence.
                </p>

                <LeadCaptureForm
                    formName="lead-capture"
                    ctaText="Get My Free Consultation"
                    showWebsite={true}
                />

                <p className="text-muted text-sm mt-6">
                    No spam. No obligation. Just a conversation about growing your business.
                </p>
            </div>
        </section>
    );
}
