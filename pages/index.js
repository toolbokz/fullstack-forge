import Head from 'next/head'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import WhoThisIsFor from '../components/WhoThisIsFor'
import Solutions from '../components/Solutions'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import WebsiteAudit from '../components/WebsiteAudit'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Fullstack Forge",
        "url": "https://fullstack-forge.netlify.app/",
        "logo": "https://fullstack-forge.netlify.app/assets/logo-1.png",
        "description": "We build high-converting websites that generate customers for small businesses.",
        "sameAs": []
    }

    return (
        <>
            <Head>
                <title>Fullstack Forge — Websites That Generate Customers for Small Businesses</title>
                <meta name="description" content="Get a high-converting website in 7 days designed to bring in leads, calls, and sales. Pre-built solutions for local services, e-commerce, and professional businesses." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://fullstack-forge.netlify.app/" />

                <meta property="og:title" content="Fullstack Forge — Websites That Generate Customers" />
                <meta property="og:description" content="Get a high-converting website in 7 days designed to bring in leads, calls, and sales." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://fullstack-forge.netlify.app/" />

                <meta name="twitter:card" content="summary_large_image" />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            </Head>
            <Nav />
            <main>
                <div id="hero"><Hero /></div>
                <WhoThisIsFor />
                <Solutions />
                <HowItWorks />
                <Pricing />
                <WhyChooseUs />
                <Testimonials />
                <WebsiteAudit />
                <CTA />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
