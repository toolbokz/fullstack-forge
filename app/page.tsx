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
