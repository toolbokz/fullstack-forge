import type { Metadata } from 'next'
import RegisterForm from './RegisterForm'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
    title: 'Create Account — Fullstack Forge',
    description: 'Create your Fullstack Forge account.',
    robots: { index: false, follow: false },
}

export default function RegisterPage() {
    return (
        <>
            <Nav />
            <main className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
                <div className="w-full max-w-md">
                    <div className="text-center mb-8">
                        <Link href="/" className="inline-block mb-6">
                            <img src="/assets/logo-1.png" alt="Fullstack Forge" className="h-10 mx-auto" />
                        </Link>
                        <h1 className="text-2xl font-bold text-gray-900">Create your account</h1>
                        <p className="text-muted mt-2">Get started with Fullstack Forge</p>
                    </div>
                    <RegisterForm />
                    <p className="text-center text-sm text-muted mt-6">
                        Already have an account?{' '}
                        <Link href="/login" className="text-primary font-semibold hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}
