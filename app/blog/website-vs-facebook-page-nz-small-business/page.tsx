import type { Metadata } from 'next'
import Nav from '../../../components/Nav'
import Footer from '../../../components/Footer'
import BlogArticleLayout from '../../../components/BlogArticleLayout'
import { articleSchema, breadcrumbSchema, faqSchema, SITE_URL } from '../../../lib/schema'
import { contentPlan } from '../../../lib/seo-data'
import { getArticleLinkPackageWithThumbnails } from '../../../lib/internal-links'
import Link from 'next/link'
import { fetchUnsplashImage } from '../../../lib/unsplash'
import UnsplashImage from '../../../components/UnsplashImage'
import ToolEmbed from '../../../components/tools/ToolEmbed'

const SLUG = 'website-vs-facebook-page-nz-small-business'
const TITLE = 'Website vs Facebook Page for NZ Small Businesses: Which Do You Really Need?'
const DESCRIPTION = 'Should a NZ small business rely on Facebook or build a website? Here\'s the real difference in trust, control, SEO, and lead generation.'
const DATE = '2026-04-04'
const UPDATED = '2026-04-04'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

const FAQ_ITEMS = [
    { q: 'Can a Facebook page replace a website?', a: 'For a very early-stage or casual business, maybe temporarily. For a business that wants to grow, attract search traffic, and control its online presence, usually no. A Facebook page limits your SEO, design flexibility, and lead capture ability.' },
    { q: 'Do customers trust a website more than Facebook?', a: 'Often yes. A website usually signals a more established, professional business — especially when it includes clear service information, reviews, and a proper contact or quote form.' },
    { q: 'Should I stop using Facebook if I get a website?', a: 'No. Facebook still has value for updates and community presence. The strongest setup is using both — website for trust, SEO, and lead capture; Facebook for visibility and engagement.' },
    { q: 'What should a small business website include?', a: 'At minimum: a clear homepage explaining what you do and where, service information, trust signals like reviews, a contact or quote form, mobile-friendly layout, and local relevance for search engines.' },
]

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
        fetchUnsplashImage('small business website social media'),
        fetchUnsplashImage('business owner laptop phone'),
    ])

    const linkPackage = await getArticleLinkPackageWithThumbnails(SLUG)

    const schemas = [
        articleSchema({ title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/blog/${SLUG}`, datePublished: DATE, dateModified: UPDATED }),
        breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Blog', url: `${SITE_URL}/blog` },
            { name: TITLE, url: `${SITE_URL}/blog/${SLUG}` },
        ]),
        faqSchema(FAQ_ITEMS),
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
                    showLeadCalculator={true}
                    relatedLinks={[] as any}
                    midCta={{
                        headline: 'Ready to Move Beyond Social-Only Marketing?',
                        body: 'A website gives your business a permanent home on the internet. We build small business sites from $1,000 — designed to work with your social presence, not against it.',
                    } as any}
                    linkPackage={linkPackage as any}
                >
                    <p>
                        A lot of NZ small business owners ask some version of this question:{' '}
                        <strong>Do I really need a website, or is a Facebook page enough?</strong>
                    </p>
                    <p>
                        It is a fair question. If you are getting some enquiries through Facebook, posting photos of
                        your work, and keeping costs tight, a website can feel optional.
                    </p>
                    <p>But the reality is this:</p>
                    <p>
                        A Facebook page and a website <strong>do different jobs</strong>. A Facebook page can help you
                        stay visible and social. A website helps you look credible, show up in search, and convert
                        interested people into actual leads.
                    </p>
                    <p>
                        For most serious small businesses in New Zealand, relying only on Facebook means giving up too
                        much control over your visibility, credibility, and long-term growth.
                    </p>

                    <h2>The Short Answer</h2>
                    <p>
                        If you are just testing an idea or doing a few casual jobs here and there, a Facebook page may
                        be enough for now.
                    </p>
                    <p>If you want to:</p>
                    <ul>
                        <li>Look established</li>
                        <li>Get found on Google</li>
                        <li>Control your message</li>
                        <li>Capture more enquiries</li>
                        <li>Build a real business asset</li>
                    </ul>
                    <p>
                        Then you need a website. That does not mean abandoning Facebook — it means using Facebook as a
                        support channel, not your whole online presence.
                    </p>

                    <h2>Why This Question Matters So Much</h2>
                    <p>
                        Many NZ service businesses start with Facebook, Instagram, word-of-mouth, and maybe a Google
                        Business Profile. That can work early on. The problem is what happens later.
                    </p>
                    <p>At some point, customers start checking:</p>
                    <ul>
                        <li>Do you have a real website?</li>
                        <li>Do you look credible?</li>
                        <li>Can I easily see your services?</li>
                        <li>Can I request a quote properly?</li>
                        <li>Do you show up in Google when I search for your business?</li>
                    </ul>
                    <p>
                        That is where a website starts to matter a lot more. This is closely related to the broader
                        question of whether small businesses still need websites at all, which we cover in{' '}
                        <Link href="/blog/do-small-businesses-need-a-website" className="text-primary hover:underline">
                            Do Small Businesses Need a Website?
                        </Link>. This article focuses specifically on the Facebook comparison.
                    </p>

                    <h2>What a Facebook Page Is Good At</h2>
                    <p>Facebook still has value. A Facebook page can help with:</p>
                    <ul>
                        <li>Basic visibility in your local community</li>
                        <li>Community engagement and updates</li>
                        <li>Sharing photos of your work</li>
                        <li>Messaging potential customers</li>
                        <li>Social proof through comments and reviews</li>
                    </ul>
                    <p>
                        For some businesses — especially early-stage or highly social local brands — Facebook can be
                        useful. But that does not mean it is enough on its own.
                    </p>

                    <h2>What a Website Is Good At</h2>
                    <p>A website gives you things Facebook cannot fully give you:</p>

                    <h3>1. Ownership</h3>
                    <p>
                        Your website is <strong>yours</strong>. Facebook can change its layout, reach, rules, and how
                        your audience sees your posts — at any time, without asking. Your website is a business asset
                        you control.
                    </p>

                    <h3>2. Search Visibility</h3>
                    <p>A good website can rank for searches like:</p>
                    <ul>
                        <li>website design Hamilton</li>
                        <li>electrician Auckland</li>
                        <li>cleaning company Christchurch</li>
                        <li>SEO for small business NZ</li>
                    </ul>
                    <p>A Facebook page is much weaker for that kind of search visibility.</p>

                    <h3>3. Better Conversion Structure</h3>
                    <p>A website can be built around:</p>
                    <ul>
                        <li>Clear service descriptions</li>
                        <li>Quote forms and structured CTAs</li>
                        <li>Trust signals like reviews and case studies</li>
                        <li>Local SEO for geographic targeting</li>
                        <li>Better mobile conversion flow</li>
                    </ul>
                    <p>That is much harder to control properly on Facebook.</p>

                    <h3>4. Stronger Credibility</h3>
                    <p>
                        When someone is referred to you, they often Google you. If they find only a Facebook page, that
                        can feel less established than finding a real website that clearly explains what you do, where you
                        work, why they should trust you, and how to contact you.
                    </p>

                    <h3>5. Better Long-Term Value</h3>
                    <p>
                        A website builds over time. It can gain authority, support SEO, connect pages together, and
                        become more valuable as you add content. A Facebook page does not build long-term search equity
                        in the same way.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Business owner reviewing their online presence on laptop and phone"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h2>Website vs Facebook Page: Side-by-Side</h2>
                    <table>
                        <thead>
                            <tr><th>Factor</th><th>Facebook Page</th><th>Website</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Ownership/control</td><td>Limited</td><td>Full control</td></tr>
                            <tr><td>Google search visibility</td><td>Weak</td><td>Stronger</td></tr>
                            <tr><td>Lead capture</td><td>Basic</td><td>Much better</td></tr>
                            <tr><td>Credibility</td><td>Moderate</td><td>Higher</td></tr>
                            <tr><td>Design flexibility</td><td>Limited</td><td>Full</td></tr>
                            <tr><td>SEO value</td><td>Very limited</td><td>Strong</td></tr>
                            <tr><td>Long-term asset value</td><td>Low</td><td>High</td></tr>
                        </tbody>
                    </table>
                    <p>
                        That table is really the heart of the issue. <strong>Facebook is rented ground. A website is
                            owned ground.</strong>
                    </p>

                    <h2>What Happens When a Business Relies Only on Facebook</h2>
                    <p>Here is the common pattern:</p>
                    <ul>
                        <li>They post fairly often</li>
                        <li>Some people engage</li>
                        <li>They get a few messages</li>
                        <li>Business feels active enough</li>
                    </ul>
                    <p>But then:</p>
                    <ul>
                        <li>Posts stop reaching people consistently</li>
                        <li>Customers struggle to find clear service info</li>
                        <li>Google visibility stays weak</li>
                        <li>The business looks smaller than it really is</li>
                        <li>Enquiries depend too much on social activity</li>
                    </ul>
                    <p>
                        That creates a ceiling. For many businesses, the issue is not that Facebook is bad — it is that
                        Facebook alone is too limited.
                    </p>

                    <h2>Best Setup for NZ Small Businesses</h2>
                    <p>
                        The best approach is usually not &quot;website <em>or</em> Facebook.&quot; It is:{' '}
                        <strong>website + Facebook, with each doing a different job</strong>.
                    </p>
                    <p>Use Facebook for:</p>
                    <ul>
                        <li>Social updates and photos</li>
                        <li>Engagement and community presence</li>
                        <li>Promotions and quick announcements</li>
                    </ul>
                    <p>Use your website for:</p>
                    <ul>
                        <li>Credibility and SEO</li>
                        <li>Service detail and pricing</li>
                        <li>Quote capture and conversion</li>
                    </ul>
                    <p>
                        That is a much stronger system. If your site is also meant to drive enquiries, it should follow
                        the same conversion principles covered in{' '}
                        <Link href="/blog/how-to-get-more-leads-from-your-website" className="text-primary hover:underline">
                            How to Get More Leads From Your Website
                        </Link>.
                    </p>

                    <h2>Which Businesses Need a Website Most?</h2>
                    <p>A website is especially valuable for:</p>
                    <ul>
                        <li>Tradies (plumbers, electricians, builders)</li>
                        <li>Cleaners</li>
                        <li>Consultants</li>
                        <li>Local service businesses</li>
                        <li>Businesses with higher-value enquiries</li>
                        <li>Any business wanting to show up in Google</li>
                    </ul>
                    <p>
                        If a job is worth a few hundred dollars or more, a proper website usually makes commercial sense.
                        That is also why the cost question matters less than many owners think. If you want a realistic
                        NZ pricing picture, see{' '}
                        <Link href="/blog/how-much-does-a-website-cost-in-nz" className="text-primary hover:underline">
                            How Much Does a Website Cost in NZ?
                        </Link>.
                    </p>

                    <ToolEmbed slug="website-roi-calculator" context="See what a website could be worth to your business compared to social media alone" />

                    <h2>A Simple Example</h2>
                    <p>Imagine two cleaning businesses in Christchurch.</p>
                    <p><strong>Business A:</strong></p>
                    <ul>
                        <li>Facebook page only</li>
                        <li>Some photos</li>
                        <li>Occasional posts</li>
                        <li>Basic contact info</li>
                    </ul>
                    <p><strong>Business B:</strong></p>
                    <ul>
                        <li>Facebook page</li>
                        <li>Professional website</li>
                        <li>Clear service pages</li>
                        <li>Quote form and trust signals</li>
                        <li>Local SEO basics</li>
                    </ul>
                    <p>
                        Business B is more likely to show up in search, look established, convert visitors better, and
                        win more direct enquiries. That does not mean Business A cannot survive — it means Business B
                        has a stronger growth setup.
                    </p>

                    <h2>Common Objections</h2>

                    <h3>&quot;My customers are already on Facebook.&quot;</h3>
                    <p>
                        They may be. But many still Google you before contacting. A website catches the people who
                        search, not just those who scroll.
                    </p>

                    <h3>&quot;A website is too expensive.&quot;</h3>
                    <p>
                        Not compared with the value of even a few extra enquiries. For many small businesses, the right
                        website pays for itself within the first few months.
                    </p>

                    <h3>&quot;I do not need anything fancy.&quot;</h3>
                    <p>
                        You probably do not. Most NZ small businesses need a simple, effective site — not a giant custom
                        build.
                    </p>

                    <h3>&quot;Facebook is easier to update.&quot;</h3>
                    <p>
                        That is true. But ease of posting is not the same as having a strong business asset. Facebook
                        updates disappear down the feed. Website content builds lasting value.
                    </p>

                    <h2>Frequently Asked Questions</h2>

                    <h3>Can a Facebook page replace a website?</h3>
                    <p>
                        For a very early-stage or casual business, maybe temporarily. For a business that wants to grow,
                        attract search traffic, and control its online presence, usually no.
                    </p>

                    <h3>Do customers trust a website more than Facebook?</h3>
                    <p>
                        Often yes. A website usually signals a more established, professional business — especially when
                        it includes clear service information, reviews, and a proper contact or quote form.
                    </p>

                    <h3>Should I stop using Facebook if I get a website?</h3>
                    <p>
                        No. Facebook still has value for updates and community presence. The strongest setup is using
                        both — website for trust, SEO, and lead capture; Facebook for visibility and engagement.
                    </p>

                    <h3>What should a small business website include?</h3>
                    <p>Usually:</p>
                    <ul>
                        <li>Clear homepage explaining what you do and where</li>
                        <li>Service information</li>
                        <li>Trust signals like reviews</li>
                        <li>Contact or quote form</li>
                        <li>Mobile-friendly layout</li>
                        <li>Local relevance for search engines</li>
                    </ul>

                    <h2>Want a Website That Works With Your Social Presence?</h2>
                    <p>
                        At Fullstack Forge, we build small-business websites that complement your Facebook and social
                        presence instead of replacing it. That means a site that helps you look more professional, rank
                        better, convert more visitors, and make your social traffic actually go somewhere useful.
                    </p>
                    <p>
                        If you want to see what your current online presence is missing, start with a{' '}
                        <Link href="/#audit" className="text-primary hover:underline font-semibold">
                            free website audit
                        </Link>. Or if you are ready to move beyond social-only marketing, check out our{' '}
                        <Link href="/website-design-for-small-business" className="text-primary hover:underline font-semibold">
                            small business website packages
                        </Link>.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
