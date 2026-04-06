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

const SLUG = 'cleaning-business-seo-nz'
const TITLE = 'Cleaning Business SEO NZ: How to Get More Bookings From Google'
const DESCRIPTION = 'Learn how cleaning businesses in New Zealand can use SEO to get more bookings from Google, rank locally, and turn website traffic into steady enquiries.'
const DATE = '2026-04-04'
const UPDATED = '2026-04-04'
const THUMBNAIL_QUERY = contentPlan.find((a: any) => a.slug === SLUG)?.imageQuery ?? SLUG

const FAQ_ITEMS = [
    { q: 'Does SEO work for cleaning businesses in New Zealand?', a: 'Yes. SEO is especially valuable for local service searches tied to bookings — terms like "house cleaner Christchurch" or "commercial cleaning Auckland" carry strong hiring intent.' },
    { q: 'What is more important: Google reviews or the website?', a: 'Both matter. Reviews help trust and local visibility in the map pack. Your website helps structure, service relevance, and conversions from organic search. The strongest setup uses both together.' },
    { q: 'Should a cleaning business have separate pages for each service?', a: 'Usually yes, if those services are important enough to target and sell separately. A dedicated "end of tenancy cleaning Christchurch" page has a much better chance of ranking than a generic services list.' },
    { q: 'Is SEO better than Facebook for a cleaning business?', a: 'They do different jobs. Facebook helps visibility and social proof. SEO helps search visibility and generates more stable, booking-intent traffic over time. Most cleaning businesses benefit from both.' },
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
            images: [thumbnail ? { url: thumbnail.url, alt: thumbnail.alt, width: 1080, height: 720 } : { url: "/assets/fallback-image.png", alt: "Fullstack Forge", width: 1200, height: 630 }],
        },
        twitter: {
            card: 'summary_large_image',
            title: TITLE,
            description: DESCRIPTION,
            images: [thumbnail ? thumbnail.url : "/assets/fallback-image.png"],
        },
    }
}

export default async function Article() {
    const [heroImage, midImage] = await Promise.all([
        fetchUnsplashImage('cleaning business seo'),
        fetchUnsplashImage('cleaning company google search'),
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
                    readTime={11}
                    heroImage={heroImage}
                    slug={SLUG}
                    showLeadCalculator={true}
                    relatedLinks={[] as any}
                    midCta={{
                        headline: 'Want Stronger SEO Foundations for Your Cleaning Business?',
                        body: 'We build cleaning business websites with local SEO, service pages, and lead-generation structure baked in from day one.',
                    } as any}
                    linkPackage={linkPackage as any}
                >
                    <p>
                        If you run a cleaning business in New Zealand, you probably already know how competitive the
                        market can feel. There are always more cleaners entering the market, more local businesses
                        running Facebook ads, and more companies relying on Trade Me, referrals, or word-of-mouth to
                        stay busy.
                    </p>
                    <p>
                        The problem is that word-of-mouth and social media alone often create <strong>inconsistent
                            work</strong>. Some weeks are packed. Other weeks go quiet.
                    </p>
                    <p>That is why SEO for cleaning businesses in NZ matters.</p>
                    <p>When someone searches for:</p>
                    <ul>
                        <li>house cleaner Christchurch</li>
                        <li>commercial cleaning Auckland</li>
                        <li>end of tenancy cleaning Wellington</li>
                        <li>office cleaners Hamilton</li>
                    </ul>
                    <p>
                        they are not casually browsing — they are usually looking for someone to hire. Done properly,
                        SEO helps your cleaning business get found by the right people, look more established, generate
                        more enquiries without relying only on paid ads, and build a steadier booking pipeline over time.
                    </p>

                    <h2>What SEO Means for a Cleaning Business</h2>
                    <p>
                        SEO stands for search engine optimisation. In plain language, it means improving your website
                        and online presence so Google is more likely to show your business when someone searches for
                        the services you offer.
                    </p>
                    <p>For a cleaning business, that usually means improving your ability to show up for searches tied to:</p>
                    <ul>
                        <li><strong>Service type</strong> — house cleaning, commercial cleaning, carpet cleaning</li>
                        <li><strong>Location</strong> — Christchurch, Auckland, Hamilton, Tauranga</li>
                        <li><strong>Urgency</strong> — end of tenancy, move out, deep clean</li>
                        <li><strong>Trust</strong> — reviews, credentials, local presence</li>
                    </ul>
                    <p>
                        These are not broad curiosity searches. These are often high-intent, local service searches.
                        That is why SEO can be such a strong fit for cleaning companies.
                    </p>

                    <h2>Why SEO Matters So Much for Cleaning Businesses in NZ</h2>
                    <p>
                        Cleaning is a <strong>trust-based service</strong>. People are often inviting you into their
                        home, their office, a rental property, or a commercial premises. That means they are usually
                        looking for signals that you are real, reliable, easy to contact, credible, and local.
                    </p>
                    <p>
                        A strong website and local SEO setup helps with all of that. When your business shows up
                        clearly in Google with a professional website, location relevance, reviews, clear service
                        information, and an easy quote path — you are already making the hiring decision easier.
                    </p>
                    <p>
                        This works especially well when paired with a site designed for lead generation, which is why
                        this article naturally supports your{' '}
                        <Link href="/blog/website-for-cleaning-business-nz" className="text-primary hover:underline">
                            cleaning business website
                        </Link>{' '}
                        strategy.
                    </p>

                    <h2>The Types of Searches Cleaning Businesses Should Care About</h2>
                    <p>
                        Not all search traffic is equal. The best cleaning keywords are usually tied to a service,
                        a location, and a need:
                    </p>
                    <ul>
                        <li>house cleaning Christchurch</li>
                        <li>end of tenancy cleaning Auckland</li>
                        <li>office cleaning Hamilton</li>
                        <li>commercial cleaning Wellington</li>
                        <li>deep cleaning Tauranga</li>
                    </ul>
                    <p>
                        These are often much better than broad generic terms like &quot;cleaning tips&quot; or
                        &quot;cleaning services&quot; on their own. The closer a search is to a real booking need,
                        the more valuable it usually is.
                    </p>

                    <h2>What a Cleaning Business Website Needs for SEO</h2>
                    <p>
                        A lot of cleaning websites are too vague. They say things like &quot;professional service,&quot;
                        &quot;high standards,&quot; &quot;reliable team,&quot; and &quot;quality results.&quot; None of
                        that is wrong — but none of it helps enough on its own.
                    </p>
                    <p>A better SEO-focused cleaning site should make it very clear:</p>
                    <ul>
                        <li>What type of cleaning you do</li>
                        <li>Where you work</li>
                        <li>What jobs you want</li>
                        <li>How people can request a quote</li>
                    </ul>
                    <table>
                        <thead>
                            <tr><th>Website Element</th><th>Why It Matters</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Clear service wording</td><td>Helps Google and users understand what you offer</td></tr>
                            <tr><td>Location relevance</td><td>Supports local rankings</td></tr>
                            <tr><td>Fast mobile design</td><td>Many enquiries happen on phones</td></tr>
                            <tr><td>Quote/contact form</td><td>Converts visits into bookings</td></tr>
                            <tr><td>Reviews/testimonials</td><td>Builds trust quickly</td></tr>
                            <tr><td>Internal links</td><td>Helps search engines understand your site structure</td></tr>
                            <tr><td>Useful service pages</td><td>Gives more opportunities to rank</td></tr>
                        </tbody>
                    </table>
                    <p>If your website is weak in most of those areas, SEO will be harder.</p>

                    <h2>Best Pages a Cleaning Business Website Should Have</h2>
                    <p>
                        If you want SEO to work, the site structure matters. A basic but effective cleaning website
                        often needs:
                    </p>
                    <ul>
                        <li>Homepage</li>
                        <li>About / trust section</li>
                        <li>House cleaning page</li>
                        <li>Commercial cleaning page</li>
                        <li>End of tenancy cleaning page</li>
                        <li>Contact / quote page</li>
                    </ul>
                    <p>
                        Not every business needs every service page. But the main idea is that the site should match
                        how people actually search. A homepage alone usually is not enough.
                    </p>
                    <p>
                        This is also part of the reason a better website structure leads to better results, which
                        connects directly with{' '}
                        <Link href="/blog/best-website-design-for-small-businesses" className="text-primary hover:underline">
                            best website design for small businesses
                        </Link>{' '}
                        and your broader lead-generation content.
                    </p>

                    {midImage && (
                        <UnsplashImage
                            src={midImage.url}
                            alt="Cleaning business appearing in Google search results"
                            photographer={midImage.photographer}
                            profileUrl={midImage.profileUrl}
                        />
                    )}

                    <h2>Local SEO for Cleaning Businesses</h2>
                    <p>
                        For most cleaning companies, local SEO is the highest-value form of SEO. That means showing
                        up when people search in your city or service area.
                    </p>

                    <h3>Google Business Profile</h3>
                    <p>Your Google Business Profile is critical. Make sure it has:</p>
                    <ul>
                        <li>Correct business category</li>
                        <li>Correct phone number and website link</li>
                        <li>Real photos of your work</li>
                        <li>Service area information</li>
                        <li>Active review collection</li>
                    </ul>

                    <h3>NAP Consistency</h3>
                    <p>
                        NAP means name, address, phone. These details should be consistent across your website and
                        major listings — Google, Facebook, Yellow Pages NZ, NoCowboys. Inconsistency can confuse
                        search engines and weaken your local trust signals.
                    </p>

                    <h3>Local Service Wording</h3>
                    <p>
                        If you work in Christchurch, say Christchurch. If you cover nearby suburbs, make that clear
                        naturally. Do not be vague. For a deeper dive on broader SEO strategy, see our{' '}
                        <Link href="/blog/seo-for-small-business-nz" className="text-primary hover:underline">
                            SEO for small business NZ guide
                        </Link>.
                    </p>

                    <h3>Reviews</h3>
                    <p>
                        Reviews help both rankings and conversion. For cleaners especially, trust is a major part of
                        the buying decision. After every job, send a text with your Google review link. Businesses
                        with 20+ reviews consistently outrank those with fewer.
                    </p>

                    <h2>Common SEO Mistakes Cleaning Businesses Make</h2>
                    <ol>
                        <li>
                            <strong>Relying only on Facebook or directories.</strong> That limits control and
                            long-term search growth. Facebook reach is unpredictable. Directories are rented space.
                        </li>
                        <li>
                            <strong>One generic page for everything.</strong> A single page trying to rank for every
                            cleaning service rarely performs well. Separate pages for residential, commercial, and
                            end-of-tenancy cleaning each have a better chance of ranking.
                        </li>
                        <li>
                            <strong>Weak trust signals.</strong> No reviews, no proof, no real images, no clear
                            contact flow. In a trust-heavy industry like cleaning, these are not optional.
                        </li>
                        <li>
                            <strong>No local targeting.</strong> If you are in Hamilton but your site does not
                            clearly say that, Google has less reason to rank you for Hamilton searches.
                        </li>
                        <li>
                            <strong>No internal linking.</strong> Pages should support each other. A service page
                            should link to pricing info, contact options, and relevant supporting content.
                        </li>
                    </ol>

                    <h2>Example: How SEO Can Improve Cleaning Bookings</h2>
                    <p>Imagine two cleaning businesses in Christchurch.</p>
                    <p><strong>Business A:</strong></p>
                    <ul>
                        <li>Simple site with little local wording</li>
                        <li>No clear service pages</li>
                        <li>Weak reviews</li>
                        <li>No SEO structure</li>
                    </ul>
                    <p><strong>Business B:</strong></p>
                    <ul>
                        <li>Clear cleaning service pages</li>
                        <li>Christchurch relevance throughout</li>
                        <li>Google reviews prominently displayed</li>
                        <li>Strong quote form and faster site</li>
                    </ul>
                    <p>
                        Business B is much more likely to get seen, get trusted, and get the enquiry. That is the
                        real value of SEO for a local service business.
                    </p>

                    <h2>How Long SEO Takes for a Cleaning Business</h2>
                    <p>
                        SEO is not instant. But that does not mean it is not worth doing. The value comes from
                        building visibility that keeps working over time. A stronger website, clearer service/location
                        structure, and better local trust signals all improve your chances month after month.
                    </p>
                    <p>
                        If you want immediate lead improvement too, SEO should not sit alone. It should support
                        conversion-focused design, as covered in{' '}
                        <Link href="/blog/how-to-get-more-leads-from-your-website" className="text-primary hover:underline">
                            how to get more leads from your website
                        </Link>.
                    </p>

                    <h2>SEO vs Paid Ads for Cleaning Businesses</h2>
                    <p>
                        Paid ads can work, but they stop the moment you stop paying. SEO takes longer, but it helps
                        create longer-term visibility.
                    </p>
                    <p>The strongest setup is often:</p>
                    <ul>
                        <li>A website that converts</li>
                        <li>Local SEO foundations</li>
                        <li>Strong reviews</li>
                        <li>Optional paid ads on top</li>
                    </ul>
                    <p>That way, you are not relying only on rented traffic.</p>

                    <ToolEmbed slug="lead-loss-calculator" context="See how many cleaning job enquiries your current website might be missing" />

                    <h2>A Simple SEO Checklist for Cleaning Businesses</h2>
                    <ol>
                        <li>Improve or rebuild your website if needed</li>
                        <li>Make your services clearer with dedicated pages</li>
                        <li>Make your location coverage clearer</li>
                        <li>Optimise your Google Business Profile</li>
                        <li>Collect more reviews consistently</li>
                        <li>Improve site speed and mobile usability</li>
                        <li>Create stronger supporting content and internal links</li>
                    </ol>

                    <h2>Frequently Asked Questions</h2>

                    <h3>Does SEO work for cleaning businesses in New Zealand?</h3>
                    <p>
                        Yes. It is especially valuable for local service searches tied to bookings — terms like
                        &quot;house cleaner Christchurch&quot; or &quot;commercial cleaning Auckland&quot; carry
                        strong hiring intent.
                    </p>

                    <h3>What is more important: Google reviews or the website?</h3>
                    <p>
                        Both matter. Reviews help trust and local visibility in the map pack. Your website helps
                        structure, service relevance, and conversions from organic search. The strongest setup uses
                        both together.
                    </p>

                    <h3>Should a cleaning business have separate pages for each service?</h3>
                    <p>
                        Usually yes, if those services are important enough to target and sell separately. A dedicated
                        &quot;end of tenancy cleaning Christchurch&quot; page has a much better chance of ranking than
                        a generic services list.
                    </p>

                    <h3>Is SEO better than Facebook for a cleaning business?</h3>
                    <p>
                        They do different jobs. Facebook helps visibility and social proof. SEO helps search visibility
                        and generates more stable, booking-intent traffic over time. Most cleaning businesses benefit
                        from both.
                    </p>

                    <h2>Want a Cleaning Website That Is Built to Rank and Convert?</h2>
                    <p>
                        At Fullstack Forge, we build websites for NZ service businesses that are designed to do more
                        than just look tidy. They are built to show up better, make your services clearer, turn visits
                        into quote requests, and support long-term growth.
                    </p>
                    <p>
                        If your current cleaning website is not doing that, start with a{' '}
                        <Link href="/#audit" className="text-primary hover:underline font-semibold">
                            free website audit
                        </Link>. Or if you want a better foundation for SEO, look at our{' '}
                        <Link href="/affordable-websites-nz" className="text-primary hover:underline font-semibold">
                            website packages
                        </Link>{' '}
                        and see what fits.
                    </p>
                </BlogArticleLayout>
            </main>
            <Footer />
        </>
    )
}
