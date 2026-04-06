import type { Metadata } from 'next'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { SITE_URL } from '../../lib/schema'

export const metadata: Metadata = {
    title: 'Privacy Policy — Fullstack Forge',
    description: 'Learn how Fullstack Forge collects, uses, and protects your personal information.',
    alternates: {
        canonical: `${SITE_URL}/privacy-policy`,
    },
    openGraph: {
        title: 'Privacy Policy — Fullstack Forge',
        description: 'Learn how Fullstack Forge collects, uses, and protects your personal information.',
        url: `${SITE_URL}/privacy-policy`,
        type: 'website',
        images: [{ url: '/assets/fallback-image.png', width: 2560, height: 1440, alt: 'Privacy Policy — Fullstack Forge' }],
    },
    twitter: {
        card: 'summary_large_image' as const,
        title: 'Privacy Policy — Fullstack Forge',
        description: 'Learn how Fullstack Forge collects, uses, and protects your personal information.',
        images: ['/assets/fallback-image.png'],
    },
}

export default function PrivacyPolicyPage() {
    return (
        <>
            <Nav />
            <main className="pt-32 pb-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-muted text-sm mb-10">
                        Effective date: 30 March 2026
                    </p>

                    <div className="prose prose-gray max-w-none">

                        {/* ── 1. INTRODUCTION ──────────────────────────── */}
                        <h2>1. Introduction</h2>
                        <p>
                            Fullstack Forge (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a New Zealand-based digital
                            services business. We build websites, deliver search-engine optimisation
                            (SEO), and create AI-powered lead-generation systems for tradies and small
                            businesses across New Zealand.
                        </p>
                        <p>
                            We understand that your personal information matters. This privacy policy
                            explains, in plain English, what information we collect, why we collect it,
                            how we look after it, and what rights you have under the{' '}
                            <strong>New Zealand Privacy Act 2020</strong>. It applies whenever you visit
                            our website at <a href={SITE_URL}>{SITE_URL}</a>, use any of our free
                            online tools, submit a form, or engage us for services.
                        </p>
                        <p>
                            By using our website or services you acknowledge that you have read and
                            understood this policy. If anything is unclear, please get in touch — our
                            contact details are at the bottom of this page.
                        </p>

                        {/* ── 2. INFORMATION WE COLLECT ─────────────────── */}
                        <h2>2. Information We Collect</h2>
                        <p>
                            We only collect information that is reasonably necessary to operate our
                            business and provide you with the services you have asked for. The types
                            of personal information we may hold include:
                        </p>
                        <ul>
                            <li>
                                <strong>Contact &amp; business details</strong> — your name, email
                                address, phone number, business name, and business type, collected when
                                you fill in a contact form, request a quote, or book a consultation.
                            </li>
                            <li>
                                <strong>Website URL</strong> — the address of your existing website,
                                provided when you request a free website audit or use one of our
                                analysis tools.
                            </li>
                            <li>
                                <strong>Account credentials</strong> — your email address and name if
                                you register for a client dashboard or log in via a social provider
                                (e.g. Google).
                            </li>
                            <li>
                                <strong>Tool inputs &amp; results</strong> — data you enter into our
                                free online tools (for example, a URL submitted to a site-speed checker
                                or SEO analyser) and the results those tools generate.
                            </li>
                            <li>
                                <strong>AI-processed data</strong> — information you provide that is
                                sent to AI services (such as OpenAI) for processing. This may include
                                business descriptions, website content, or enquiry details used to
                                generate automated reports, recommendations, or lead-qualification
                                insights.
                            </li>
                            <li>
                                <strong>Payment information</strong> — billing details processed
                                securely by our payment provider, Stripe. We never see or store your
                                full card number on our servers.
                            </li>
                            <li>
                                <strong>Device &amp; usage data</strong> — technical information
                                collected automatically when you browse our site, including IP address,
                                browser type, operating system, pages viewed, time on page, and
                                referring URL.
                            </li>
                        </ul>

                        {/* ── 3. HOW WE COLLECT INFORMATION ────────────── */}
                        <h2>3. How We Collect Information</h2>
                        <p>We collect personal information in the following ways:</p>
                        <ul>
                            <li>
                                <strong>Directly from you</strong> — when you complete a contact form,
                                request a free audit, use an online tool, register an account, place an
                                order, or communicate with us by email, phone, or social media.
                            </li>
                            <li>
                                <strong>Automatically via our website</strong> — through cookies,
                                server logs, and analytics tools when you browse our pages (see
                                Section 8 below).
                            </li>
                            <li>
                                <strong>From third-party platforms</strong> — for example, Google or
                                Facebook if you choose to log in with a social account, or from
                                publicly available business directories when we perform research on
                                your behalf as part of a paid service engagement.
                            </li>
                        </ul>
                        <p>
                            Where possible, we collect information directly from you and will let you
                            know at the point of collection what is required and what is optional.
                        </p>

                        {/* ── 4. PURPOSE OF COLLECTION ──────────────────── */}
                        <h2>4. Purpose of Collection</h2>
                        <p>We use the personal information we hold to:</p>
                        <ul>
                            <li>Respond to your enquiries and provide consultations.</li>
                            <li>
                                Deliver the services you have purchased — including website design,
                                SEO, and AI-powered lead-generation systems.
                            </li>
                            <li>
                                Process data through AI services to generate automated reports, content
                                drafts, competitor analyses, or lead-qualification scoring on your
                                behalf.
                            </li>
                            <li>
                                Run our free online tools and return results to you (e.g. website
                                audits, SEO checks, speed tests).
                            </li>
                            <li>Process payments and issue invoices.</li>
                            <li>
                                Send project updates, account notifications, and service-related
                                communications.
                            </li>
                            <li>
                                Send marketing emails where you have opted in (see Section 9).
                            </li>
                            <li>
                                Monitor and improve our website performance, security, and user
                                experience.
                            </li>
                            <li>
                                Comply with our legal obligations under New Zealand law.
                            </li>
                        </ul>
                        <p>
                            We will not use your personal information for a purpose that is
                            materially different from the purpose for which it was collected, unless
                            you give us permission or the law allows it.
                        </p>

                        {/* ── 5. SHARING OF INFORMATION ─────────────────── */}
                        <h2>5. Sharing of Information</h2>
                        <p>
                            <strong>We do not sell, rent, or trade your personal information.</strong>{' '}
                            We may share limited data with the following trusted third-party service
                            providers who help us deliver our services:
                        </p>
                        <ul>
                            <li>
                                <strong>Netlify</strong> — website hosting, serverless functions, and
                                form submissions (United States).
                            </li>
                            <li>
                                <strong>Stripe</strong> — secure payment processing (United States).
                            </li>
                            <li>
                                <strong>Google Analytics</strong> — anonymised website usage
                                statistics (United States).
                            </li>
                            <li>
                                <strong>Mailchimp (Intuit)</strong> — email marketing and
                                newsletters, only if you have opted in (United States).
                            </li>
                            <li>
                                <strong>OpenAI</strong> — AI-powered processing for automated
                                reports, content generation, and lead-qualification analysis
                                (United States). Inputs you provide (such as business descriptions or
                                website content) may be sent to OpenAI&apos;s API for processing. We use
                                their API tier, which means your data is{' '}
                                <strong>not used to train their models</strong>.
                            </li>
                        </ul>
                        <p>
                            Each provider only receives the minimum data needed to perform its
                            function and is bound by its own privacy policy and contractual
                            obligations. We also require that our providers maintain appropriate
                            security safeguards.
                        </p>
                        <p>
                            We may also disclose personal information where required or permitted by
                            New Zealand law — for example, in response to a lawful request from a
                            government agency.
                        </p>

                        {/* ── 6. OVERSEAS DATA TRANSFERS ────────────────── */}
                        <h2>6. Overseas Data Transfers</h2>
                        <p>
                            Some of the third-party services listed above are based in the United
                            States. This means your personal information may be transferred to, and
                            processed in, countries outside New Zealand.
                        </p>
                        <p>
                            In accordance with <strong>Information Privacy Principle 12</strong> of the
                            Privacy Act 2020, we take reasonable steps to ensure that overseas
                            recipients protect your information in a way that is comparable to New
                            Zealand privacy standards. This includes choosing providers that offer
                            robust privacy and security commitments and, where available, using data
                            processing agreements.
                        </p>

                        {/* ── 7. DATA SECURITY ─────────────────────────── */}
                        <h2>7. Data Security</h2>
                        <p>
                            We take the security of your information seriously and apply reasonable
                            safeguards to protect it from unauthorised access, loss, misuse, or
                            disclosure. Our measures include:
                        </p>
                        <ul>
                            <li>HTTPS (TLS) encryption across the entire website.</li>
                            <li>Secure, hashed authentication for user accounts.</li>
                            <li>Restricted access — only authorised personnel can view personal data.</li>
                            <li>Regular software updates and security monitoring.</li>
                            <li>Use of environment variables and secrets management for API keys.</li>
                        </ul>
                        <p>
                            No method of electronic storage is 100% secure. While we strive to
                            protect your data, we cannot guarantee absolute security. If we become
                            aware of a privacy breach that poses a risk of serious harm, we will
                            notify the Office of the Privacy Commissioner and affected individuals as
                            required by the Privacy Act 2020.
                        </p>

                        {/* ── 8. COOKIES AND ANALYTICS ──────────────────── */}
                        <h2>8. Cookies and Analytics</h2>
                        <p>
                            Our website uses cookies — small text files stored on your device — to
                            help the site function properly and to understand how visitors use it.
                        </p>
                        <h3>Types of cookies we use</h3>
                        <ul>
                            <li>
                                <strong>Essential cookies</strong> — required for authentication,
                                session management, and core site functionality. These cannot be
                                disabled without breaking the experience.
                            </li>
                            <li>
                                <strong>Analytics cookies</strong> — set by Google Analytics to collect
                                anonymised usage data such as pages visited, time on site, and referral
                                source. This helps us understand what content is useful and where we
                                can improve.
                            </li>
                        </ul>
                        <p>
                            You can control or delete cookies through your browser settings. Blocking
                            analytics cookies will not affect your ability to use the site, but some
                            features that rely on essential cookies (such as the client dashboard) may
                            not work correctly if those are disabled.
                        </p>

                        {/* ── 9. MARKETING COMMUNICATIONS ──────────────── */}
                        <h2>9. Marketing Communications</h2>
                        <p>
                            We may send you marketing emails — such as tips, guides, or service
                            updates — only if you have explicitly opted in (for example, by ticking a
                            checkbox on a form or subscribing to our mailing list).
                        </p>
                        <p>
                            Every marketing email includes a clear <strong>unsubscribe link</strong>.
                            You can opt out at any time and we will remove you from the mailing list
                            promptly.
                        </p>
                        <p>
                            Transactional communications — such as project updates, invoices, or
                            account notifications — are not marketing and will be sent as needed to
                            fulfil our service obligations.
                        </p>

                        {/* ── 10. ACCESS AND CORRECTION RIGHTS ─────────── */}
                        <h2>10. Access and Correction Rights</h2>
                        <p>
                            Under <strong>Information Privacy Principles 6 and 7</strong> of the
                            Privacy Act 2020, you have the right to:
                        </p>
                        <ul>
                            <li>
                                <strong>Access</strong> the personal information we hold about you.
                            </li>
                            <li>
                                <strong>Request correction</strong> if any information is inaccurate,
                                incomplete, or misleading.
                            </li>
                            <li>
                                <strong>Request deletion</strong> of your personal information where
                                there is no lawful reason for us to retain it.
                            </li>
                        </ul>
                        <p>
                            To make a request, email us at the address below. We will respond within
                            20 working days, as required by law. If we refuse a request, we will
                            explain why and inform you of your right to complain to the{' '}
                            <a
                                href="https://privacy.org.nz"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Office of the Privacy Commissioner
                            </a>.
                        </p>

                        {/* ── 11. DATA RETENTION ───────────────────────── */}
                        <h2>11. Data Retention</h2>
                        <p>
                            We keep your personal information only for as long as we need it for the
                            purposes described in this policy, or as required by law. As a general
                            guide:
                        </p>
                        <ul>
                            <li>
                                <strong>Enquiry &amp; contact form data</strong> — retained for up to
                                24 months after your last interaction, then deleted.
                            </li>
                            <li>
                                <strong>Client project data</strong> — retained for the duration of
                                the engagement plus 7 years to meet tax and accounting obligations.
                            </li>
                            <li>
                                <strong>Account data</strong> — retained while your account is active.
                                You may request deletion at any time.
                            </li>
                            <li>
                                <strong>Analytics data</strong> — anonymised and retained in
                                accordance with Google Analytics&apos; data-retention settings (currently
                                set to 14 months).
                            </li>
                            <li>
                                <strong>AI processing data</strong> — inputs sent to AI APIs are
                                processed in real time. We do not store AI-generated outputs beyond
                                what is needed to deliver results to you, unless you request otherwise
                                as part of a paid engagement.
                            </li>
                        </ul>
                        <p>
                            When personal information is no longer required, we securely delete or
                            de-identify it.
                        </p>

                        {/* ── 12. CHANGES TO THIS POLICY ───────────────── */}
                        <h2>12. Changes to This Policy</h2>
                        <p>
                            We may update this privacy policy from time to time to reflect changes in
                            our services, technology, or legal requirements. When we make material
                            changes, we will update the &quot;Effective date&quot; at the top of this page.
                        </p>
                        <p>
                            We encourage you to review this policy periodically. Continued use of our
                            website or services after changes are published constitutes acceptance of
                            the updated policy.
                        </p>

                        {/* ── 13. CONTACT INFORMATION ──────────────────── */}
                        <h2>13. Contact Information</h2>
                        <p>
                            If you have any questions about this privacy policy, want to make an
                            access or correction request, or wish to raise a concern about how we
                            have handled your personal information, please contact us:
                        </p>
                        <ul>
                            <li>
                                <strong>Email:</strong>{' '}
                                <a href="mailto:hello@fullstackforge.co.nz">
                                    hello@fullstackforge.co.nz
                                </a>
                            </li>
                            <li>
                                <strong>Website:</strong>{' '}
                                <a href={`${SITE_URL}/#contact`}>Contact form</a>
                            </li>
                        </ul>
                        <p>
                            If you are not satisfied with our response, you have the right to
                            lodge a complaint with the{' '}
                            <a
                                href="https://privacy.org.nz"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Office of the Privacy Commissioner
                            </a>{' '}
                            (Te Mana Mātāpono Matatapu).
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
