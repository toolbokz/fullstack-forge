import Image from 'next/image'

/**
 * Renders an Unsplash image with proper attribution.
 * Handles null/missing data gracefully with a placeholder.
 *
 * @param {object} props
 * @param {string} props.src - Image URL
 * @param {string} props.alt - Descriptive alt text
 * @param {string} props.photographer - Photographer name
 * @param {string} props.profileUrl - Photographer Unsplash profile URL
 * @param {number} [props.width=800] - Image width
 * @param {number} [props.height=450] - Image height
 * @param {boolean} [props.priority=false] - Priority loading (above fold)
 * @param {string} [props.className=''] - Additional CSS classes on figure
 * @param {boolean} [props.compact=false] - Smaller attribution for thumbnails
 */
export default function UnsplashImage({
    src,
    alt,
    photographer,
    profileUrl,
    width = 800,
    height = 450,
    priority = false,
    className = '',
    compact = false,
}) {
    if (!src) {
        return (
            <figure className={`my-8 ${className}`}>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center w-full aspect-video">
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
            </figure>
        )
    }

    return (
        <figure className={`${compact ? 'my-0' : 'my-8'} ${className}`}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`${compact ? 'rounded-t-xl' : 'rounded-lg'} w-full h-auto object-cover`}
                loading={priority ? 'eager' : 'lazy'}
                priority={priority}
                sizes="(max-width: 768px) 100vw, 800px"
            />
            {photographer && !compact && (
                <figcaption className="text-center text-xs text-gray-500 mt-2">
                    Photo by{' '}
                    <a
                        href={profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-gray-700"
                    >
                        {photographer}
                    </a>{' '}
                    on{' '}
                    <a
                        href="https://unsplash.com?utm_source=fullstack_forge&utm_medium=referral"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-gray-700"
                    >
                        Unsplash
                    </a>
                </figcaption>
            )}
        </figure>
    )
}
