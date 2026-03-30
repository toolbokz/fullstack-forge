import '../styles/globals.css'
import type { Metadata } from 'next'
import AuthProvider from '../components/AuthProvider'

export const metadata: Metadata = {
    metadataBase: new URL('https://fullstack-forge.netlify.app'),
    title: 'Fullstack Forge — Get More Jobs From Your Website | NZ Tradies',
    description:
        'We help NZ tradies and local businesses get found on Google, generate leads, and book more jobs. Free website audit. Results in 7 days.',
    openGraph: {
        title: 'Fullstack Forge — Get More Jobs From Your Website',
        description:
            'We help NZ tradies get found on Google and generate leads on autopilot. Free website audit available.',
        type: 'website',
        url: 'https://fullstack-forge.netlify.app/',
        images: [{ url: '/assets/hero.png', width: 2560, height: 1440, alt: 'Fullstack Forge — More Jobs for NZ Tradies' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fullstack Forge — Get More Jobs From Your Website',
        description: 'We help NZ tradies get found on Google and generate leads on autopilot.',
        images: ['/assets/hero.png'],
    },
    alternates: {
        canonical: 'https://fullstack-forge.netlify.app/',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Inter:wght@300;400;500;600;700;800&family=Zalando+Sans+Expanded:ital,wght@0,200..900;1,200..900&display=swap"
                    rel="stylesheet"
                />
                <script src="/section-animate.js" defer></script>
            </head>
            <body>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    )
}
