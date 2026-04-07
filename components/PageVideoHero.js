'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Reusable hero section with a stock-video background.
 * Only plays the video on desktop (≥768 px); falls back to the gradient overlay on mobile.
 * Accepts children for the hero text / CTA content.
 */
export default function PageVideoHero({ videoUrl, children }) {
    const videoRef = useRef(null)
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 768px)')
        setIsDesktop(mq.matches)
        function handleChange(e) {
            setIsDesktop(e.matches)
        }
        mq.addEventListener('change', handleChange)
        return () => mq.removeEventListener('change', handleChange)
    }, [])

    useEffect(() => {
        if (!videoRef.current) return
        if (isDesktop) {
            videoRef.current.play().catch(() => { })
        } else {
            videoRef.current.pause()
        }
    }, [isDesktop])

    return (
        <section className="page-video-hero">
            {/* Video layer */}
            {videoUrl && isDesktop && (
                <div className="page-video-hero__bg" aria-hidden="true">
                    <video
                        ref={videoRef}
                        className="page-video-hero__video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        <source src={videoUrl} type="video/mp4" />
                    </video>
                </div>
            )}
            {/* Dark overlay */}
            <div className="page-video-hero__overlay" />
            {/* Content */}
            <div className="page-video-hero__content">{children}</div>
        </section>
    )
}
