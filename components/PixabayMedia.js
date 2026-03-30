'use client'

/**
 * Renders a Pixabay image with attribution.
 * Falls back gracefully if no src is provided.
 */
export function PixabayImage({ src, alt, user, pageURL, className = '', priority = false }) {
    if (!src) return null

    return (
        <figure className={className}>
            <img
                src={src}
                alt={alt || 'Stock photo'}
                loading={priority ? 'eager' : 'lazy'}
                className="w-full h-auto rounded-lg object-cover"
            />
            {user && (
                <figcaption className="text-center text-xs text-gray-500 mt-2">
                    Photo by{' '}
                    <a href={pageURL} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
                        {user}
                    </a>{' '}
                    on{' '}
                    <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
                        Pixabay
                    </a>
                </figcaption>
            )}
        </figure>
    )
}

/**
 * Renders a Pixabay video with attribution.
 * Uses medium quality by default.
 */
export function PixabayVideo({ video, className = '', autoPlay = true, loop = true }) {
    const url = video?.medium || video?.small
    if (!url) return null

    return (
        <figure className={className}>
            <video
                src={url}
                autoPlay={autoPlay}
                loop={loop}
                muted
                playsInline
                className="w-full h-auto rounded-lg object-cover"
            />
            {video.user && (
                <figcaption className="text-center text-xs text-gray-500 mt-2">
                    Video by{' '}
                    <a href={video.pageURL} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
                        {video.user}
                    </a>{' '}
                    on{' '}
                    <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">
                        Pixabay
                    </a>
                </figcaption>
            )}
        </figure>
    )
}

/**
 * Renders a grid of Pixabay images.
 */
export function PixabayImageGrid({ images, columns = 2 }) {
    if (!images || images.length === 0) return null

    const gridCols = columns === 3 ? 'md:grid-cols-3' : columns === 4 ? 'md:grid-cols-4' : 'md:grid-cols-2'

    return (
        <div className={`grid grid-cols-1 ${gridCols} gap-4`}>
            {images.map((img) => (
                <PixabayImage
                    key={img.id}
                    src={img.src || img.largeSrc}
                    alt={img.alt}
                    user={img.user}
                    pageURL={img.pageURL}
                />
            ))}
        </div>
    )
}

/**
 * Renders a grid of Pixabay videos.
 */
export function PixabayVideoGrid({ videos, columns = 3 }) {
    if (!videos || videos.length === 0) return null

    const gridCols = columns === 3 ? 'md:grid-cols-3' : columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-1'

    return (
        <div className={`grid grid-cols-1 ${gridCols} gap-6`}>
            {videos.map((video) => (
                <PixabayVideo
                    key={video.id}
                    video={video}
                    className=""
                />
            ))}
        </div>
    )
}

/**
 * Full-bleed hero section with a looping video background + overlay.
 */
export function PixabayHeroVideo({ video, children }) {
    const url = video?.medium || video?.large || video?.small
    if (!url) return null

    return (
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
            <video
                src={url}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative z-10 w-full">
                {children}
            </div>
            {video.user && (
                <p className="absolute bottom-2 right-3 text-[10px] text-white/40 z-10">
                    Video by{' '}
                    <a href={video.pageURL} target="_blank" rel="noopener noreferrer" className="underline hover:text-white/60">
                        {video.user}
                    </a>{' '}
                    on Pixabay
                </p>
            )}
        </section>
    )
}
