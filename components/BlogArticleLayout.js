import Link from 'next/link'
import LeadCaptureForm from './LeadCaptureForm'
import UnsplashImage from './UnsplashImage'

export default function BlogArticleLayout({
    title,
    description,
    datePublished,
    readTime,
    children,
    relatedLinks,
    heroImage,
}) {
    return (
        <div>
            {/* Article Header */}
            <section className="blog-header text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#0d1f3c] to-[#0b5fff]" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                    <Link href="/blog" className="text-primary text-sm font-semibold hover:underline mb-4 inline-block">
                        ← Back to Blog
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">{title}</h1>
                    <p className="text-gray-300 text-lg mb-4">{description}</p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                        <span>By Zachariah Pini</span>
                        <span>•</span>
                        <time dateTime={datePublished}>{new Date(datePublished).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                        {readTime && (
                            <>
                                <span>•</span>
                                <span>{readTime} min read</span>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            {heroImage && heroImage.url && (
                <section className="bg-gray-50 py-8">
                    <div className="max-w-3xl mx-auto px-4">
                        <UnsplashImage
                            src={heroImage.url}
                            alt={heroImage.alt || title}
                            photographer={heroImage.photographer}
                            profileUrl={heroImage.profileUrl}
                            width={960}
                            height={540}
                            priority={true}
                            className="my-0"
                        />
                    </div>
                </section>
            )}

            {/* Article Body */}
            <article className="py-16">
                <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray">
                    {children}
                </div>
            </article>

            {/* CTA */}
            <section className="py-16 bg-dark text-white" id="lead-form">
                <div className="max-w-xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">Need Help With Your Website?</h2>
                    <p className="text-gray-400 mb-8">Get a free audit and personalised plan for your business.</p>

                    <LeadCaptureForm
                        formName="blog-lead"
                        ctaText="Get My Free Audit"
                        showWebsite={true}
                        darkMode={true}
                    />
                </div>
            </section>

            {/* Related Links */}
            {relatedLinks && relatedLinks.length > 0 && (
                <section className="py-12 bg-gray-50">
                    <div className="max-w-3xl mx-auto px-4">
                        <h3 className="text-lg font-bold mb-4">Keep Reading</h3>
                        <ul className="flex flex-col gap-2">
                            {relatedLinks.map((link) => (
                                <li key={link.url}>
                                    <Link href={link.url} className="text-primary hover:underline text-sm font-medium">
                                        {link.label} →
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}
        </div>
    )
}
