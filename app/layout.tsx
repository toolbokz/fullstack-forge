import '../styles/globals.css'
import type { Metadata } from 'next'
import AuthProvider from '../components/AuthProvider'

export const metadata: Metadata = {
    metadataBase: new URL('https://fullstack-forge.netlify.app'),
    title: 'Fullstack Forge — Websites That Generate Customers for Small Businesses',
    description:
        'Get a high-converting website in 7 days designed to bring in leads, calls, and sales. Pre-built solutions for local services, e-commerce, and professional businesses.',
    openGraph: {
        title: 'Fullstack Forge — Websites That Generate Customers',
        description:
            'Get a high-converting website in 7 days designed to bring in leads, calls, and sales.',
        type: 'website',
        url: 'https://fullstack-forge.netlify.app/',
    },
    twitter: {
        card: 'summary_large_image',
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
                <link rel="icon" href="/assets/favicon.ico" sizes="any" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Zalando+Sans+Expanded:ital,wght@0,200..900;1,200..900&display=swap"
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
