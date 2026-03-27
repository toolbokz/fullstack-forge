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

export default function HomePage() {
    return (
        <>
            <Nav />
            <main>
                <div id="hero">
                    <Hero />
                </div>
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
