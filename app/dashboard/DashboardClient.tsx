'use client'

import { signOut } from 'next-auth/react'
import Image from 'next/image'

interface DashboardClientProps {
    session: {
        user?: {
            id?: string
            name?: string | null
            email?: string | null
            image?: string | null
        }
    }
}

export default function DashboardClient({ session }: DashboardClientProps) {
    const user = session.user

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-5 mb-8">
                {user?.image ? (
                    <Image
                        src={user.image}
                        alt={user.name || 'User'}
                        width={64}
                        height={64}
                        className="rounded-full"
                    />
                ) : (
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
                        {user?.name?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase() || '?'}
                    </div>
                )}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900">{user?.name || 'User'}</h2>
                    <p className="text-muted">{user?.email}</p>
                </div>
            </div>

            <div className="grid gap-4 border-t border-gray-100 pt-6">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">User ID</span>
                    <span className="text-gray-900 font-mono text-xs">{user?.id}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Auth Provider</span>
                    <span className="text-gray-900">{user?.image ? 'Google' : 'Email'}</span>
                </div>
            </div>

            <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="mt-8 px-6 py-2.5 bg-red-50 text-red-600 rounded-lg font-medium hover:bg-red-100 transition-colors"
            >
                Sign Out
            </button>
        </div>
    )
}
