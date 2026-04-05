import { Metadata } from 'next'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import { fetchUnsplashImage } from '../lib/unsplash'

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
        images: [{ url: '/assets/hero.png', width: 2560, height: 1440, alt: 'Fullstack Forge — Websites That Get NZ Tradies More Jobs' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fullstack Forge — Websites That Get NZ Tradies More Jobs',
        description: 'We build high-converting websites for NZ tradies and small businesses.',
        images: ['/assets/hero.png'],
    },
}
import ToolSlider from '../components/ToolSlider'
import WhoThisIsFor from '../components/WhoThisIsFor'
import Solutions from '../components/Solutions'
import HowItWorks from '../components/HowItWorks'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import WebsiteAudit from '../components/WebsiteAudit'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default async function HomePage() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [
        whoThisImg1, whoThisImg2, whoThisImg3,
        solutionImg1, solutionImg2, solutionImg3, solutionImg4,
        howItWorksImg1, howItWorksImg2, howItWorksImg3,
        whyChooseImg,
        ctaImg,
    ]: any[] = await Promise.all([
        fetchUnsplashImage('google search results laptop'),
        fetchUnsplashImage('broken mobile website slow loading'),
        fetchUnsplashImage('tradesperson waiting for phone call'),
        fetchUnsplashImage('search engine optimisation analytics'),
        fetchUnsplashImage('modern website design mobile responsive'),
        fetchUnsplashImage('business lead generation enquiry phone'),
        fetchUnsplashImage('AI automation chatbot technology'),
        fetchUnsplashImage('website audit analytics dashboard'),
        fetchUnsplashImage('web developer coding laptop'),
        fetchUnsplashImage('happy contractor phone call customer'),
        fetchUnsplashImage('analytics dashboard performance growth'),
        fetchUnsplashImage('modern office team collaboration'),
    ])

    return (
        <>
            <Nav />
            <main>
                <div id="hero">
                    <Hero />
                </div>
                <ToolSlider />
                <div className="section-float">
                    {/* @ts-expect-error -- JS component default param infers never[] */}
                    <WhoThisIsFor images={[whoThisImg1, whoThisImg2, whoThisImg3]} />
                </div>
                <div className="section-float">
                    {/* @ts-expect-error -- JS component default param infers never[] */}
                    <Solutions images={[solutionImg1, solutionImg2, solutionImg3, solutionImg4]} />
                </div>
                <div className="section-float section-float-dark">
                    {/* @ts-expect-error -- JS component default param infers never[] */}
                    <HowItWorks images={[howItWorksImg1, howItWorksImg2, howItWorksImg3]} />
                </div>
                <div className="section-float">
                    <Testimonials />
                </div>
                <div className="section-float">
                    <WhyChooseUs image={whyChooseImg} />
                </div>
                <div className="section-float section-float-dark">
                    <WebsiteAudit />
                </div>
                <div className="section-float section-float-dark">
                    <CTA image={ctaImg} />
                </div>
                <div className="section-float">
                    <Contact />
                </div>
            </main>
            <Footer />
        </>
    )
}
