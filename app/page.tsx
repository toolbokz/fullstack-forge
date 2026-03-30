import { Metadata } from 'next'
import Nav from '../components/Nav'
import Hero from '../components/Hero'

export const metadata: Metadata = {
    title: 'Fullstack Forge — Websites That Get NZ Tradies More Jobs',
    description: 'We build high-converting websites for NZ tradies and small businesses. SEO, AI automation, and lead generation systems that get you found on Google and book more jobs. Free audit.',
    alternates: { canonical: 'https://fullstack-forge.netlify.app/' },
    keywords: ['website design for small business nz', 'tradie website nz', 'web design nz', 'seo nz', 'small business website nz', 'websites that generate leads'],
    openGraph: {
        title: 'Fullstack Forge — Websites That Get NZ Tradies More Jobs',
        description: 'We build high-converting websites for NZ tradies and small businesses. Free website audit. Results in 7 days.',
        url: 'https://fullstack-forge.netlify.app/',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fullstack Forge — Websites That Get NZ Tradies More Jobs',
        description: 'We build high-converting websites for NZ tradies and small businesses.',
    },
}
import ToolSlider from '../components/ToolSlider'
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

export default function HomePage() {
    return (
        <>
            <Nav />
            <main>
                <div id="hero">
                    <Hero />
                </div>
                <ToolSlider />
                <div className="section-float">
                    <WhoThisIsFor />
                </div>
                <div className="section-float">
                    <Solutions />
                </div>
                <div className="section-float section-float-dark">
                    <HowItWorks />
                </div>
                <div className="section-float">
                    <Testimonials />
                </div>
                <div className="section-float section-float-dark">
                    <WebsiteAudit />
                </div>
                <div className="section-float">
                    <Pricing />
                </div>
                <div className="section-float">
                    <WhyChooseUs />
                </div>
                <div className="section-float section-float-dark">
                    <CTA />
                </div>
                <div className="section-float">
                    <Contact />
                </div>
            </main>
            <Footer />
        </>
    )
}
