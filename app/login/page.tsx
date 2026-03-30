import type { Metadata } from 'next'
import LoginForm from './LoginForm'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
    title: 'Login — Fullstack Forge',
    description: 'Sign in to your Fullstack Forge account.',
    robots: { index: false, follow: false },
}

export default function LoginPage() {
    return (
        <>
            <Nav />
            <main className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <Link href="/" className="inline-block mb-6">
                            <img src="/assets/logo-1.png" alt="Fullstack Forge" className="h-10 mx-auto" />
                        </Link>
                        <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
                        <p className="text-muted mt-2">Sign in to your account</p>
                    </div>
                    <LoginForm />
                    <p className="text-center text-sm text-muted mt-6">
                        Don&apos;t have an account?{' '}
                        <Link href="/register" className="text-primary font-semibold hover:underline">
                            Create one
                        </Link>
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}
