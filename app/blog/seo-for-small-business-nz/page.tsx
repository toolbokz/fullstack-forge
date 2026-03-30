import type { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import BlogArticleLayout from '../../../components/BlogArticleLayout'
import { articleSchema, breadcrumbSchema, SITE_URL } from '../../../lib/schema'
import { contentPlan } from '../../../lib/seo-data'
import { getArticleLinkPackageWithThumbnails } from '../../../lib/internal-links'
import Link from 'next/link'
import { fetchUnsplashImage } from '../../../lib/unsplash'
import UnsplashImage from '../../../components/UnsplashImage'

const SLUG = 'seo-for-small-business-nz'
const TITLE = 'SEO for Small Business NZ — A Beginner\'s Guide to Ranking on Google'
const DESCRIPTION = 'Learn the SEO basics every small business owner in NZ needs to know to get found on Google.'
const DATE = '2025-02-15'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

export async function generateMetadata(): Promise<Metadata> {
    const thumbnail = await fetchUnsplashImage(THUMBNAIL_QUERY)
    return {
        title: `${TITLE} — Fullstack Forge`,
        description: DESCRIPTION,
        alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
        openGraph: {
            title: TITLE,
            description: DESCRIPTION,
            url: `${SITE_URL}/blog/${SLUG}`,
            type: 'article',
            ...(thumbnail ? { images: [{ url: thumbnail.url, alt: thumbnail.alt }] } : {}),
        },
        twitter: {
            card: 'summary_large_image',
            title: TITLE,
            description: DESCRIPTION,
            ...(thumbnail ? { images: [thumbnail.url] } : {}),
        },
    }
}

export default async function Article() {
    const [heroImage, midImage] = await Promise.all([
        fetchUnsplashImage('search engine optimization'),
        fetchUnsplashImage('keyword research SEO strategy'),
    ])

    const linkPackage = await getArticleLinkPackageWithThumbnails(SLUG)

    const schemas = [
        articleSchema({ title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: DATE }),
        breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Blog', url: `${SITE_URL}/blog` },
            { name: TITLE, url: `${SITE_URL}/blog/${SLUG}` },
        ]),
    ]

    return (
        <>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <Nav />
            <main>
                <BlogArticleLayout
                    title={TITLE}
                    description={DESCRIPTION}
                    datePublished={DATE}
                    readTime={10}
                    heroImage={heroImage}
                    slug={SLUG}
                    midCta={{
                        headline: 'Want SEO Built Into Your Website From Day One?',
                        body: 'Every site we build is optimised for Google from the ground up — fast, mobile-first, and structured for local search.',
                    } as any}
                    linkPackage={linkPackage as any}
                    relatedLinks={[] as any}
                >
                    <h2>What Is SEO?</h2>
                    <p>
                        SEO (Search Engine Optimization) is the process of making your website show up higher in Google
                        search results. When someone searches &quot;plumber Christchurch&quot; or &quot;accountant Auckland,&quot; SEO
                        determines who appears on page 1 — and who gets buried on page 5.
                    </p>

                    <h2>Why SEO Matters for NZ Small Businesses</h2>
                    <p>
                        <strong>75% of users never scroll past the first page of Google.</strong> If you&apos;re not on page 1
                        for your key search terms, you&apos;re essentially invisible. SEO is the most cost-effective way to
                        get found by customers who are actively looking for what you offer.
                    </p>

                    <h2>The SEO Basics Every Business Owner Should Know</h2>

                    <h3>1. Keyword Research</h3>
                    <p>
                        Find what your customers actually search for. Tools like Google&apos;s free Keyword Planner can show
                        you search volume. Focus on <strong>specific, local terms</strong> like &quot;web designer Christchurch&quot;
                        rather than broad terms like &quot;web designer.&quot;
                    </p>

                    <h3>2. On-Page SEO</h3>
                    <p>For every page on your site, optimise these elements:</p>
                    <ul>
                        <li><strong>Title tag</strong> — Include your keyword. Keep it under 60 characters.</li>
                        <li><strong>Meta description</strong> — Compelling summary with keyword. Under 160 characters.</li>
                        <li><strong>H1 heading</strong> — One per page, with your primary keyword.</li>
                        <li><strong>Content</strong> — 500+ words of useful content with natural keyword usage.</li>
                        <li><strong>Images</strong> — Compressed, with descriptive alt text.</li>
                    </ul>

                    <h3>3. Google Business Profile</h3>
                    <p>
                        This is free and essential. Set up your Google Business Profile with accurate info, photos, and
                        encourage customers to leave reviews. This is what shows up in the map results.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="SEO keyword research and content strategy planning for small business visibility"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h3>4. Site Speed</h3>
                    <p>
                        Google uses page speed as a ranking factor. Compress images, use modern hosting (we use Netlify
                        for near-instant load times), and minimise heavy scripts.
                    </p>

                    <h3>5. Mobile Optimization</h3>
                    <p>
                        Google uses mobile-first indexing — meaning it judges your site based on the mobile version.
                        If your site isn&apos;t mobile-friendly, your rankings will suffer.
                    </p>

                    <h3>6. Internal Linking</h3>
                    <p>
                        Link between your pages. This helps Google understand your site structure and keeps visitors
                        engaged longer. For example, your services page should link to relevant blog posts and vice versa.
                    </p>

                    <h2>How Long Does SEO Take?</h2>
                    <p>
                        Expect to see results in <strong>3–6 months</strong> for local keywords. SEO is a marathon, not a sprint.
                        But once you rank, you get free, organic traffic every month.
                    </p>

                    <h2>Need SEO Built Into Your Website?</h2>
                    <p>
                        Every website we build at <Link href="/" className="text-primary hover:underline">Fullstack Forge</Link> includes
                        on-page SEO as standard — proper meta tags, heading structure, fast hosting, and schema markup.
                        Our <Link href="/web-design-christchurch" className="text-primary hover:underline">Christchurch clients</Link> see
                        real ranking improvements within months.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
