/**
 * Programmatic SEO Data System
 * Locations × Services = unique landing pages
 *
 * Each page gets unique content via content generators below.
 * No duplicate content — every city/service combo has its own copy.
 */

// ─── LOCATIONS ─────────────────────────────────────────────
export const locations = [
    {
        slug: 'auckland',
        name: 'Auckland',
        region: 'Auckland Region',
        population: '1.7 million',
        businessFact: 'Auckland is home to over 180,000 businesses — more than any other city in New Zealand.',
        searchBehaviour: 'Auckland customers search online before hiring — 87% check Google first.',
        localKeyword: 'Auckland CBD, North Shore, West Auckland, South Auckland, East Auckland',
        subAreas: ['CBD', 'North Shore', 'West Auckland', 'South Auckland', 'East Auckland', 'Manukau', 'Takapuna', 'Henderson'],
    },
    {
        slug: 'wellington',
        name: 'Wellington',
        region: 'Wellington Region',
        population: '215,000',
        businessFact: `Wellington's compact urban layout means customers expect fast, mobile-friendly websites they can browse on the go.`,
        searchBehaviour: 'Wellington has one of the highest per-capita internet usage rates in NZ.',
        localKeyword: 'Wellington CBD, Lower Hutt, Upper Hutt, Porirua, Kapiti Coast',
        subAreas: ['CBD', 'Lower Hutt', 'Upper Hutt', 'Porirua', 'Kapiti Coast', 'Petone', 'Johnsonville'],
    },
    {
        slug: 'christchurch',
        name: 'Christchurch',
        region: 'Canterbury',
        population: '395,000',
        businessFact: `Christchurch's post-rebuild economy has created a boom in new businesses — and fierce online competition.`,
        searchBehaviour: 'Canterbury residents are highly active online shoppers and service seekers.',
        localKeyword: 'Christchurch CBD, Riccarton, Papanui, Hornby, Rolleston',
        subAreas: ['CBD', 'Riccarton', 'Papanui', 'Hornby', 'Rolleston', 'Addington', 'Merivale'],
    },
    {
        slug: 'hamilton',
        name: 'Hamilton',
        region: 'Waikato',
        population: '180,000',
        businessFact: `Hamilton is the Waikato's economic hub with a growing trade and construction sector.`,
        searchBehaviour: 'Hamilton businesses face increasing competition online as more tradies get websites.',
        localKeyword: 'Hamilton CBD, Hamilton East, Hillcrest, Dinsdale, Te Rapa',
        subAreas: ['CBD', 'Hamilton East', 'Hillcrest', 'Dinsdale', 'Te Rapa', 'Rototuna'],
    },
    {
        slug: 'tauranga',
        name: 'Tauranga',
        region: 'Bay of Plenty',
        population: '155,000',
        businessFact: `Tauranga is one of NZ's fastest-growing cities, with a surge in new builds and home renovations.`,
        searchBehaviour: 'Bay of Plenty residents increasingly use Google to find local trades and services.',
        localKeyword: 'Tauranga CBD, Mount Maunganui, Papamoa, Bethlehem, Welcome Bay',
        subAreas: ['Mount Maunganui', 'Papamoa', 'Bethlehem', 'Welcome Bay', 'Greerton'],
    },
    {
        slug: 'dunedin',
        name: 'Dunedin',
        region: 'Otago',
        population: '135,000',
        businessFact: `Dunedin's student population and historic housing stock create steady demand for trades.`,
        searchBehaviour: 'Otago customers rely heavily on Google Maps and local search to find tradespeople.',
        localKeyword: 'Dunedin CBD, South Dunedin, Mosgiel, St Kilda, Andersons Bay',
        subAreas: ['CBD', 'South Dunedin', 'Mosgiel', 'St Kilda', 'Andersons Bay'],
    },
    {
        slug: 'napier',
        name: 'Napier',
        region: "Hawke's Bay",
        population: '65,000',
        businessFact: "Hawke's Bay's strong tourism and agriculture sectors drive demand for professional services.",
        searchBehaviour: "Napier and Hastings residents search for local services online more than the national average.",
        localKeyword: 'Napier CBD, Taradale, Hastings, Havelock North',
        subAreas: ['Taradale', 'Hastings', 'Havelock North', 'Greenmeadows'],
    },
    {
        slug: 'palmerston-north',
        name: 'Palmerston North',
        region: 'Manawatū',
        population: '90,000',
        businessFact: 'Palmerston North is a key regional hub with a growing services sector.',
        searchBehaviour: 'Manawatū businesses are rapidly moving online to compete for local customers.',
        localKeyword: 'Palmerston North CBD, Hokowhitu, Kelvin Grove, Fitzherbert',
        subAreas: ['Hokowhitu', 'Kelvin Grove', 'Fitzherbert', 'Terrace End'],
    },
    {
        slug: 'nelson',
        name: 'Nelson',
        region: 'Nelson / Tasman',
        population: '55,000',
        businessFact: `Nelson's thriving tourism and lifestyle economy means local businesses need strong online presence.`,
        searchBehaviour: 'Nelson and Tasman residents actively search for services during peak holiday seasons.',
        localKeyword: 'Nelson CBD, Stoke, Richmond, Tasman',
        subAreas: ['Stoke', 'Richmond', 'Tasman', 'Motueka'],
    },
    {
        slug: 'rotorua',
        name: 'Rotorua',
        region: 'Bay of Plenty',
        population: '75,000',
        businessFact: `Rotorua's tourism-driven economy creates unique opportunities for service businesses.`,
        searchBehaviour: 'Both tourists and locals use Google to find services in Rotorua daily.',
        localKeyword: 'Rotorua CBD, Ngongotaha, Fairy Springs, Western Heights',
        subAreas: ['Ngongotaha', 'Fairy Springs', 'Western Heights', 'Owhata'],
    },
    {
        slug: 'new-plymouth',
        name: 'New Plymouth',
        region: 'Taranaki',
        population: '60,000',
        businessFact: `Taranaki's energy sector and growing population fuel demand for trades and services.`,
        searchBehaviour: 'New Plymouth customers expect modern, mobile-friendly websites from local businesses.',
        localKeyword: 'New Plymouth CBD, Bell Block, Fitzroy, Merrilands',
        subAreas: ['Bell Block', 'Fitzroy', 'Merrilands', 'Brooklands'],
    },
    {
        slug: 'queenstown',
        name: 'Queenstown',
        region: 'Otago',
        population: '50,000',
        businessFact: `Queenstown's booming tourism and construction sectors make online visibility essential.`,
        searchBehaviour: 'Queenstown businesses compete for both tourist and local customer attention online.',
        localKeyword: 'Queenstown CBD, Frankton, Arrowtown, Wanaka',
        subAreas: ['Frankton', 'Arrowtown', 'Wanaka', 'Jacks Point'],
    },
    {
        slug: 'invercargill',
        name: 'Invercargill',
        region: 'Southland',
        population: '57,000',
        businessFact: `Invercargill's growing retail and construction sectors need strong digital presence.`,
        searchBehaviour: 'Southland customers increasingly choose Google over word-of-mouth to find trades.',
        localKeyword: 'Invercargill CBD, Bluff, Otatara, Hawthorndale',
        subAreas: ['Bluff', 'Otatara', 'Hawthorndale', 'Windsor'],
    },
    {
        slug: 'whangarei',
        name: 'Whangarei',
        region: 'Northland',
        population: '55,000',
        businessFact: `Whangarei's growing economy as Northland's centre drives rising demand for professional services.`,
        searchBehaviour: 'Northland businesses need websites that convert — many still rely only on word-of-mouth.',
        localKeyword: 'Whangarei CBD, Tikipunga, Kamo, Onerahi',
        subAreas: ['Tikipunga', 'Kamo', 'Onerahi', 'Regent'],
    },
]

// ─── SERVICES ──────────────────────────────────────────────
export const services = [
    {
        slug: 'web-design',
        name: 'Web Design',
        shortName: 'Web Design',
        verb: 'design',
        description: 'Conversion-focused web design that turns visitors into paying customers.',
        keywords: (city) => [`web design ${city}`, `web designer ${city}`, `website design ${city}`, `${city} web design company`],
        headline: (city) => `Web Design ${city} That Gets You More Jobs`,
        subheadline: (city) => `Most ${city} businesses have a website that looks "okay" but brings in zero leads. We build websites that rank on Google in ${city}, convert visitors into enquiries, and fill your calendar.`,
        problem: (city) => `You're invisible on Google in ${city}. Potential customers search for your services every day — but they're finding your competitors instead. Your current website was built without SEO, loads too slowly on mobile, and has no clear call-to-action. Every day it stays like this, you're losing jobs to businesses with better websites.`,
        solution: (city) => `We build fast, conversion-focused websites designed specifically for ${city} businesses. Every page is optimised for local search, structured to convert visitors into leads, and built to load in under 2 seconds. You get a professional website that ranks for "${city}" searches and turns traffic into real enquiries.`,
        proofStats: [
            { value: 'Page 1', label: 'Google ranking' },
            { value: '3x', label: 'more leads' },
            { value: '<1.5s', label: 'load time' },
        ],
    },
    {
        slug: 'web-development',
        name: 'Web Development',
        shortName: 'Development',
        verb: 'develop',
        description: 'Custom web development with modern technology for speed, SEO, and conversions.',
        keywords: (city) => [`web development ${city}`, `web developer ${city}`, `website developer ${city}`, `${city} web development`],
        headline: (city) => `Web Development ${city} — Custom Sites Built for Speed & Leads`,
        subheadline: (city) => `Off-the-shelf templates won't cut it. We build custom websites for ${city} businesses using modern technology that loads fast, ranks on Google, and converts visitors into customers.`,
        problem: (city) => `Your ${city} business deserves more than a template. DIY builders like Wix and Squarespace produce bloated, slow websites that Google ignores. WordPress with 30 plugins is a security risk that loads in 5+ seconds. Every second of delay costs you 7% of conversions.`,
        solution: (city) => `We build custom websites for ${city} businesses using Next.js — the same technology used by Netflix, Nike, and TikTok. Your site loads instantly, scores 90+ on Google PageSpeed, and is built to convert. No bloat, no plugins, no maintenance headaches.`,
        proofStats: [
            { value: '95+', label: 'PageSpeed score' },
            { value: '5-7', label: 'day delivery' },
            { value: '$0', label: 'hosting/month' },
        ],
    },
    {
        slug: 'seo',
        name: 'SEO',
        shortName: 'SEO',
        verb: 'optimise',
        description: 'Local SEO that gets your business found on Google in your city.',
        keywords: (city) => [`seo ${city}`, `seo services ${city}`, `seo company ${city}`, `local seo ${city}`, `${city} seo agency`],
        headline: (city) => `SEO ${city} — Get Found on Google & Get More Jobs`,
        subheadline: (city) => `75% of people never scroll past page 1 of Google. If your ${city} business isn't ranking, you're invisible to the customers actively searching for what you do.`,
        problem: (city) => `You're spending money on a website that nobody can find. When someone in ${city} searches for your services, your competitors appear first. You have no Google Business Profile, no local schema markup, no keyword strategy, and your site structure is killing your rankings.`,
        solution: (city) => `We implement technical SEO, local search optimisation, and content strategy specifically for ${city} businesses. From Google Business Profile setup to on-page optimisation and schema markup — we build the foundation that gets you ranking for "${city}" searches and drives qualified leads to your site.`,
        proofStats: [
            { value: '42%', label: 'of clicks go to map pack' },
            { value: '3-6', label: 'months to rank' },
            { value: '10x', label: 'ROI vs paid ads' },
        ],
    },
    {
        slug: 'digital-strategy',
        name: 'Digital Strategy',
        shortName: 'Strategy',
        verb: 'strategise',
        description: 'Data-driven digital strategy to grow your online presence and generate leads.',
        keywords: (city) => [`digital strategy ${city}`, `digital marketing ${city}`, `online marketing ${city}`, `${city} digital agency`],
        headline: (city) => `Digital Strategy ${city} — A Clear Plan to Grow Online`,
        subheadline: (city) => `Most ${city} businesses waste money on random marketing tactics. We create a focused digital strategy that turns your website into a lead generation system.`,
        problem: (city) => `You've tried Facebook ads, Googled "how to get more customers," maybe even hired a social media manager. Nothing's working because you don't have a strategy — you have scattered tactics. Without a clear plan connecting your website, SEO, content, and lead capture, you're burning money in ${city}'s competitive market.`,
        solution: (city) => `We audit your entire online presence and build a strategy specifically for your ${city} business. Website audit, competitor analysis, keyword mapping, conversion funnel design, and a 90-day action plan. You'll know exactly what to do, in what order, to start generating leads from Google.`,
        proofStats: [
            { value: '90-day', label: 'action plan' },
            { value: '5x', label: 'lead increase' },
            { value: 'Free', label: 'initial audit' },
        ],
    },
    {
        slug: 'cro',
        name: 'CRO',
        shortName: 'CRO',
        verb: 'optimise',
        description: 'Conversion rate optimisation to turn more website visitors into paying customers.',
        keywords: (city) => [`conversion rate optimisation ${city}`, `cro ${city}`, `website optimisation ${city}`, `improve website conversions ${city}`],
        headline: (city) => `CRO ${city} — Turn More Visitors Into Paying Customers`,
        subheadline: (city) => `Your ${city} website gets traffic but no leads? The average NZ business website converts at just 1-2%. We get you to 5-10%.`,
        problem: (city) => `You're already getting visitors to your ${city} business website — but they leave without contacting you. Your conversion rate is probably under 2%, which means 98 out of every 100 visitors leave without doing anything. No clear CTA, no trust signals, no urgency, no reason to act now. You're paying for traffic and getting nothing back.`,
        solution: (city) => `We analyse your ${city} website's conversion funnel, identify where visitors drop off, and rebuild the experience to maximise leads. Strategic CTA placement, trust signals, urgency triggers, simplified forms, and clear value propositions. The same traffic, 3-5x more leads.`,
        proofStats: [
            { value: '3-5x', label: 'more leads' },
            { value: '5-10%', label: 'target conversion' },
            { value: '30 days', label: 'to see results' },
        ],
    },
]

// ─── HELPERS ───────────────────────────────────────────────

/** Get all service×location combinations for page generation */
export function getAllServiceLocationPairs() {
    const pairs = []
    for (const service of services) {
        for (const location of locations) {
            pairs.push({
                slug: `${service.slug}-${location.slug}`,
                service,
                location,
            })
        }
    }
    return pairs
}

/** Get a specific pair by composite slug */
export function getServiceLocationPair(slug) {
    const pairs = getAllServiceLocationPairs()
    return pairs.find((p) => p.slug === slug) || null
}

/** Get all pages for a specific service */
export function getLocationsByService(serviceSlug) {
    const service = services.find((s) => s.slug === serviceSlug)
    if (!service) return []
    return locations.map((loc) => ({
        slug: `${service.slug}-${loc.slug}`,
        service,
        location: loc,
    }))
}

/** Get all pages for a specific city */
export function getServicesByLocation(locationSlug) {
    const location = locations.find((l) => l.slug === locationSlug)
    if (!location) return []
    return services.map((svc) => ({
        slug: `${svc.slug}-${location.slug}`,
        service: svc,
        location,
    }))
}

/** Generate unique SEO content block per page (no duplication) */
export function generateSeoContent(service, location) {
    const { name: svc } = service
    const { name: city, region, businessFact, searchBehaviour } = location

    return {
        intro: `Looking for professional ${svc.toLowerCase()} in ${city}? Fullstack Forge helps ${city} tradies and local businesses get found on Google, generate leads, and book more jobs. We understand the ${region} market and build solutions specifically for businesses operating in ${city} and the surrounding areas including ${location.localKeyword}.`,
        whyLocal: `${businessFact} In this competitive landscape, having a professional website optimised for ${city} searches isn't optional — it's essential. ${searchBehaviour} Without a strong online presence, you're handing customers to competitors who invested in their digital presence.`,
        approach: `Our ${svc.toLowerCase()} service for ${city} businesses focuses on three things: speed (under 2-second load times), local SEO (ranking for "${svc.toLowerCase()} ${city}" and related searches), and conversion design (turning visitors into leads). We've helped businesses across ${region} generate consistent enquiries from their websites.`,
        cta: `Ready to see what's holding your ${city} business back? Get a free website audit and we'll show you exactly how to improve your online presence — with real data, no guesswork.`,
    }
}
