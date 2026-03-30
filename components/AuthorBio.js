import Image from 'next/image'
import Link from 'next/link'

export default function AuthorBio() {
    return (
        <div className="author-bio">
            <div className="author-bio-header">
                <Image
                    src="/assets/headshot.jpg"
                    alt="Zachariah Pini — Fullstack Forge"
                    width={96}
                    height={96}
                    className="author-bio-img"
                />
                <p className="author-bio-name">
                    Written by{' '}
                    <Link href="/about">Zachariah Pini</Link>
                </p>
            </div>
            <div className="author-bio-columns">
                <p className="author-bio-desc">
                    I build high-converting websites and AI-powered lead systems that help NZ
                    tradies and small businesses get more jobs — without relying on word of mouth.
                </p>
                <p className="author-bio-desc">
                    Based in Hamilton, I specialise in web design, SEO, and automation
                    for trades and service businesses across New Zealand.
                </p>
            </div>
        </div>
    )
}
