export default function UnsplashAttribution({ photographer, profileUrl, className = '' }) {
    if (!photographer) return null
    return (
        <span className={`text-[10px] opacity-80 ${className}`}>
            Photo by{' '}
            <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-100"
            >
                {photographer}
            </a>{' '}
            on{' '}
            <a
                href="https://unsplash.com?utm_source=fullstack_forge&utm_medium=referral"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-100"
            >
                Unsplash
            </a>
        </span>
    )
}
