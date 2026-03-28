import { fetchPixabayVideo } from '../lib/pixabay'
import HeroVideo from './HeroVideo'

const HERO_VIDEO_ID = '174086'

export default async function Hero() {
    const video = await fetchPixabayVideo(HERO_VIDEO_ID)
    const videoUrl = video?.medium || video?.large || null

    return (
        <section className="hero" id="hero">
            <HeroVideo videoUrl={videoUrl} />
            <div className="container center-all hero-content">
                <p className="text-primary-light bg-white/10 inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-white/20">
                    Trusted by 50+ small businesses across NZ
                </p>
                <h1>
                    We Build Websites That Generate Customers for Small Businesses
                </h1>
                <p className="hero-sub">
                    Get a high-converting website in 7 days — designed to bring in leads, calls, and sales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-2 mb-6">
                    <a className="btn btn-lg" href="#audit">
                        Get a Free Website Audit
                    </a>
                    <a className="btn btn-outline-light btn-lg" href="#solutions">
                        View Live Demos
                    </a>
                </div>
                <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm mt-4">
                    <span>✓ 7-Day Delivery</span>
                    <span>✓ Conversion Optimized</span>
                    <span>✓ No Lock-In Contracts</span>
                </div>
                <a className="scroll-indicator" href="#who-this-is-for" aria-label="Scroll down">
                    <span className="scroll-indicator-arrow" aria-hidden="true">↓</span>
                </a>
            </div>
        </section>
    );
}
