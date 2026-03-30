import { Metadata } from 'next'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import UnsplashImage from '../../components/UnsplashImage'
import { fetchUnsplashImage } from '../../lib/unsplash'

export const metadata: Metadata = {
    title: 'Portfolio — Fullstack Forge',
    description:
        'Browse real websites we have built for NZ tradies and small businesses. E-commerce, service pages, calculators, and more.',
    alternates: { canonical: 'https://fullstack-forge.netlify.app/portfolio' },
}

const projects = [
    {
        name: 'Comfy Store',
        desc: 'Fullstack e-commerce website for a small business, showcasing features and pricing.',
        tech: 'Next.js, Tailwind, Netlify',
        url: 'https://react-vite-comfy-store-v2.netlify.app/',
        query: 'ecommerce online shop',
    },
    {
        name: 'The Warriors Call',
        desc: 'Fullstack AI integrated website for a bible community interested in faith and fellowship.',
        tech: 'Next.js, Tailwind, Vercel',
        url: 'https://www.thewarriorscall.org/',
        query: 'church community gathering',
    },
    {
        name: 'Everclean Services',
        desc: 'Single page website for a small cleaning business, showcasing contact information and services.',
        tech: 'Next.js, Tailwind, Netlify',
        url: 'https://cleaning-site-001.netlify.app/',
        query: 'professional cleaning service',
    },
    {
        name: 'Good For Business Accountant',
        desc: 'Single page website for an accounting business, showcasing contact information and services.',
        tech: 'Next.js, Tailwind, Netlify',
        url: 'https://accountant-good-for-business.netlify.app/',
        query: 'accountant office business',
    },
    {
        name: 'PlumbFix Services',
        desc: 'Single page website for a plumbing business, showcasing contact information and services.',
        tech: 'Next.js, Tailwind, Netlify',
        url: 'https://plumbfix-site.netlify.app/',
        query: 'plumber working pipes',
    },
    {
        name: 'Builders App',
        desc: 'Single page website for a building business, showcasing contact information and services.',
        tech: 'Next.js, Tailwind, Netlify',
        url: 'https://builders-app.netlify.app/',
        query: 'construction builder house',
    },
    {
        name: 'Electricians App',
        desc: 'Single page website for an electrician business, showcasing contact information and services.',
        tech: 'Next.js, Tailwind, Netlify',
        url: 'https://electrician-app-101.netlify.app/',
        query: 'electrician wiring work',
    },
    {
        name: 'Real Estate Calculator',
        desc: 'Single page real estate calculator particular to New Zealand pricing market.',
        tech: 'Next.js, Tailwind, Netlify',
        url: 'https://real-estate-calculator-001.netlify.app/',
        query: 'real estate property house',
    },
]

export default async function PortfolioPage() {
    const images = await Promise.all(
        projects.map((p) => fetchUnsplashImage(p.query))
    )

    return (
        <>
            <Nav />
            <main className="py-24">
                <div className="container center-all">
                    <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                        Our Work
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Websites We&apos;ve Built
                    </h1>
                    <p className="text-muted text-lg max-w-2xl mb-14">
                        Real projects for real businesses. Browse our portfolio and see the quality we deliver.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                        {projects.map((proj, idx) => {
                            const img = images[idx]
                            return (
                                <div
                                    key={proj.name}
                                    className="bg-white rounded-xl border border-primary shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden"
                                >
                                    <UnsplashImage
                                        src={img?.url ?? null}
                                        alt={`${proj.name} preview`}
                                        photographer={img?.photographer}
                                        profileUrl={img?.profileUrl}
                                        width={600}
                                        height={340}
                                        compact
                                        className="w-full"
                                    />

                                    <div className="p-6 flex flex-col flex-1">
                                        <h2 className="text-xl font-bold mb-2">{proj.name}</h2>
                                        <p className="text-muted text-sm mb-4 flex-1">
                                            {proj.desc}
                                        </p>
                                        <span className="text-xs text-gray-400 mb-4">
                                            {proj.tech}
                                        </span>
                                        <a
                                            href={proj.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-sm text-center"
                                        >
                                            View Live Site →
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-muted mb-4">
                            Like what you see? Let&apos;s build something for your business.
                        </p>
                        <a href="/contact" className="btn btn-lg">
                            Get a Free Quote →
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
