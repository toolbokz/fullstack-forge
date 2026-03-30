const SITE_URL = 'https://fullstack-forge.netlify.app';

export function localBusinessSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#business`,
        name: 'Fullstack Forge',
        description: 'We build high-converting websites that generate customers for small businesses in New Zealand.',
        url: SITE_URL,
        logo: `${SITE_URL}/assets/logo.svg`,
        image: `${SITE_URL}/assets/hero.png`,
        telephone: '',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Christchurch',
            addressRegion: 'Canterbury',
            addressCountry: 'NZ',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: -43.532,
            longitude: 172.6306,
        },
        areaServed: [
            { '@type': 'Country', name: 'New Zealand' },
            { '@type': 'City', name: 'Christchurch' },
        ],
        priceRange: '$$',
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00',
        },
        sameAs: [
            'https://github.com/toolbokz',
            'https://www.facebook.com/fullstackforgeNZ',
            'https://x.com/fullstack_forge',
            'https://www.linkedin.com/in/fullstack-forge',
        ],
    };
}

export function serviceSchema({ name, description, url }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        description,
        url,
        provider: {
            '@type': 'LocalBusiness',
            name: 'Fullstack Forge',
            url: SITE_URL,
        },
        areaServed: {
            '@type': 'Country',
            name: 'New Zealand',
        },
    };
}

export function faqSchema(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: {
                '@type': 'Answer',
                text: a,
            },
        })),
    };
}

export function articleSchema({ title, description, url, datePublished, dateModified = null }) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        url,
        datePublished,
        dateModified: dateModified || datePublished,
        author: {
            '@type': 'Person',
            name: 'Zachariah Pini',
            url: SITE_URL,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Fullstack Forge',
            url: SITE_URL,
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/assets/logo.svg`,
            },
        },
    };
}

export function breadcrumbSchema(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

export { SITE_URL };
