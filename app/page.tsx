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

export default function HomePage() {
    return (
        <>
            <Nav />
            <main>
                <div id="hero">
                    <Hero />
                </div>
                <div id="services">
                    <Services />
                </div>
                <div id="portfolio">
                    <Portfolio />
                </div>
                <div id="tech">
                    <TechStack />
                </div>
                <div id="about">
                    <About />
                </div>
                <div id="testimonials">
                    <Testimonials />
                </div>
                <CTA />
                <div id="contact">
                    <Contact />
                </div>
            </main>
            <Footer />
        </>
    )
}
