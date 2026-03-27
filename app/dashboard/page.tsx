import { getServerSession } from 'next-auth'
import { authOptions } from '../../lib/auth'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import DashboardClient from './DashboardClient'

export const metadata: Metadata = {
    title: 'Dashboard — Fullstack Forge',
    description: 'Your Fullstack Forge dashboard.',
}

export default async function DashboardPage() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/login')
    }

    return (
        <>
            <Nav />
            <main className="min-h-screen bg-gray-50 py-20 px-4">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
                    <DashboardClient session={session} />
                </div>
            </main>
            <Footer />
        </>
    )
}
