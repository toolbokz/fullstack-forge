'use client'

import { useEffect, useRef, useState } from 'react'

export default function HeroVideo({ videoUrl }) {
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

    // Play/pause video based on viewport
    useEffect(() => {
        if (!videoRef.current) return
        if (isDesktop) {
            videoRef.current.play().catch(() => { })
        } else {
            videoRef.current.pause()
        }
    }, [isDesktop])

    if (!videoUrl) return null

    return (
        <div className="hero-video-wrapper" aria-hidden="true">
            {isDesktop && (
                <video
                    ref={videoRef}
                    className="hero-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                >
                    <source src={videoUrl} type="video/mp4" />
                </video>
            )}
            <div className="hero-overlay" />
        </div>
    )
}
