'use client'

import { useState, useEffect, useCallback } from 'react'

export default function HeroSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [loaded, setLoaded] = useState({})

    const advance = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }, [images.length])

    // Auto-advance every 5 seconds
    useEffect(() => {
        if (images.length <= 1) return
        const timer = setInterval(advance, 5000)
        return () => clearInterval(timer)
    }, [advance, images.length])

    // Preload next image
    useEffect(() => {
        if (images.length <= 1) return
        const nextIndex = (currentIndex + 1) % images.length
        const img = new Image()
        img.src = images[nextIndex].url
    }, [currentIndex, images])

    function handleLoad(index) {
        setLoaded((prev) => ({ ...prev, [index]: true }))
    }

    if (!images || images.length === 0) return null

    const current = images[currentIndex]

    return (
        <>
            {/* Background image layers */}
            <div className="hero-slider" aria-hidden="true">
                {images.map((img, i) => (
                    <div
                        key={i}
                        className={`hero-slide${i === currentIndex ? ' hero-slide-active' : ''}`}
                    >
                        <img
                            src={img.url}
                            alt=""
                            onLoad={() => handleLoad(i)}
                            style={{ opacity: loaded[i] ? 1 : 0 }}
                            loading={i === 0 ? 'eager' : 'lazy'}
                        />
                    </div>
                ))}
                <div className="hero-overlay" />
            </div>

            {/* Slide indicators */}
            <div className="hero-indicators" aria-hidden="true">
                {images.map((_, i) => (
                    <button
                        key={i}
                        className={`hero-dot${i === currentIndex ? ' hero-dot-active' : ''}`}
                        onClick={() => setCurrentIndex(i)}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Credit */}
            <div className="hero-credit">
                Photo by{' '}
                <a href={current.profileUrl} target="_blank" rel="noopener noreferrer">
                    {current.photographer}
                </a>{' '}
                / Unsplash
            </div>
        </>
    )
}
