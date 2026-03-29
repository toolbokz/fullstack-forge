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
