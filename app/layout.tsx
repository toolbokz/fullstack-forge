import '../styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Fullstack Forge',
    description:
        'We build SEO-optimized, responsive websites for small businesses and e-commerce. Fast turnaround and affordable prices.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
