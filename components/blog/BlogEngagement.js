'use client'

import { useState, useEffect } from 'react'

const SITE_URL = 'https://fullstack-forge.netlify.app'

function getLikeKey(slug) {
    return `blog-like-${slug}`
}

/**
 * BlogEngagement — Share + Like section for blog posts.
 * Renders X share, Facebook share, and a localStorage-backed like toggle.
 */
export default function BlogEngagement({ slug, title }) {
    const shareUrl = `${SITE_URL}/blog/${slug}`
    const encodedUrl = encodeURIComponent(shareUrl)
    const encodedTitle = encodeURIComponent(title)

    const xShareUrl = `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`

    const [liked, setLiked] = useState(false)

    useEffect(() => {
        try {
            const stored = localStorage.getItem(getLikeKey(slug))
            if (stored === 'true') setLiked(true)
        } catch {
            // localStorage unavailable
        }
    }, [slug])

    function handleLike() {
        const next = !liked
        setLiked(next)
        try {
            if (next) {
                localStorage.setItem(getLikeKey(slug), 'true')
            } else {
                localStorage.removeItem(getLikeKey(slug))
            }
        } catch {
            // localStorage unavailable
        }
    }

    return (
        <section className="py-10 bg-gray-50 border-t border-gray-200">
            <div className="max-w-3xl mx-auto px-4">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Share this post</p>
                <div className="flex flex-wrap items-center gap-3">
                    <a
                        href={xShareUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Share "${title}" on X`}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                        Share on X
                    </a>
                    <a
                        href={fbShareUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Share "${title}" on Facebook`}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Share on Facebook
                    </a>
                    <button
                        type="button"
                        onClick={handleLike}
                        aria-label={liked ? 'Unlike this post' : 'Like this post'}
                        aria-pressed={liked}
                        className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${liked
                                ? 'bg-primary text-white border-primary'
                                : 'text-gray-700 bg-white border-gray-200 hover:border-primary hover:text-primary'
                            }`}
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={liked ? 0 : 2} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                        </svg>
                        {liked ? 'Liked' : 'Like'}
                    </button>
                </div>
            </div>
        </section>
    )
}
