import Head from 'next/head'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import TechStack from '../components/TechStack'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Fullstack Forge",
        "url": "https://fullstack-forge.netlify.app/",
        "logo": "https://fullstack-forge.netlify.app/",
        "sameAs": [
            "https://www.facebook.com/",
            "https://www.twitter.com/"
        ]
    }

    return (
        <>
            <Head>
                <title>Fullstack Forge</title>
                <meta name="description" content="We build SEO-optimized, responsive websites for small businesses and e‑commerce. Fast turnaround and affordable prices." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="canonical" href="https://fullstack-forge.netlify.app/" />

                {/* Open Graph */}
                <meta property="og:title" content="Professional Website Design — Affordable, Fast, Responsive" />
                <meta property="og:description" content="We build SEO-optimized, responsive websites for small businesses and e‑commerce." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://example.com/" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />

                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            </Head>
            <Nav />
            <main>
                <div id="hero"><Hero /></div>
                <div id="services"><Services /></div>
                <div id="portfolio"><Portfolio /></div>
                <div id="tech"><TechStack /></div>
                <div id="about"><About /></div>
                <div id="testimonials"><Testimonials /></div>
                <CTA />
                <div id="contact"><Contact /></div>
            </main>
            <Footer />
        </>
    )
}
