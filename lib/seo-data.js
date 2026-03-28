const SITE_URL = 'https://fullstack-forge.netlify.app';

// Keyword map: each entry is one page targeting one keyword
export const keywordMap = {
    home: {
        primary: 'website design for small business NZ',
        secondary: ['small business website NZ', 'websites that generate customers'],
        url: '/',
        title: 'Fullstack Forge — Websites That Generate Customers for Small Businesses',
    },
    webDesignChristchurch: {
        primary: 'web designer Christchurch',
        secondary: ['web developer Christchurch', 'website design Christchurch NZ', 'Christchurch web design'],
        url: '/web-design-christchurch',
        title: 'Web Design Christchurch — Fast, Affordable Websites That Get Results',
    },
    ecommerceWebsites: {
        primary: 'ecommerce website NZ',
        secondary: ['online store NZ', 'ecommerce websites New Zealand', 'build online store NZ'],
        url: '/ecommerce-websites-nz',
        title: 'E-Commerce Websites NZ — Online Stores Built to Sell',
    },
    websiteDesignSmallBusiness: {
        primary: 'affordable website design for small business NZ',
        secondary: ['small business website cost NZ', 'cheap website design NZ', 'website for small business NZ'],
        url: '/website-design-for-small-business',
        title: 'Website Design for Small Business NZ — Affordable, Fast, Effective',
    },
    affordableWebsites: {
        primary: 'affordable websites NZ',
        secondary: ['cheap websites NZ', 'budget website design New Zealand', 'low cost website NZ'],
        url: '/affordable-websites-nz',
        title: 'Affordable Websites NZ — Professional Sites From $699',
    },
};

// Content plan: blog articles targeting long-tail keywords
export const contentPlan = [
    {
        slug: 'how-much-does-a-website-cost-in-nz',
        keyword: 'website cost NZ',
        title: 'How Much Does a Website Cost in NZ? 2026 Pricing Guide',
        description: 'Complete NZ website pricing for 2026. Compare costs for small business, tradie, and ecommerce websites — from DIY to agency. Transparent pricing in NZD.',
        intent: 'commercial',
        linksTo: ['/affordable-websites-nz', '/website-design-for-small-business'],
        imageQuery: 'website design pricing',
    },
    {
        slug: 'best-website-design-for-small-businesses',
        keyword: 'best website design for small businesses',
        title: 'Best Website Design for Small Businesses in 2026',
        description: 'What makes a great small business website? Learn the design principles that actually generate leads and customers.',
        intent: 'informational',
        linksTo: ['/website-design-for-small-business', '/'],
        imageQuery: 'modern website design',
    },
    {
        slug: 'do-small-businesses-need-a-website',
        keyword: 'do small businesses need a website 2026',
        title: 'Do Small Businesses Need a Website in 2026? (The Real Answer)',
        description: 'With social media everywhere, do you still need a website? We break down the data and the real impact on revenue.',
        intent: 'informational',
        linksTo: ['/affordable-websites-nz', '/'],
        imageQuery: 'small business owner laptop',
    },
    {
        slug: 'how-to-get-customers-from-your-website',
        keyword: 'how to get customers from website',
        title: 'How to Get Customers From Your Website (Proven Strategy)',
        description: 'Your website gets traffic but no leads? Here\'s the exact strategy to turn visitors into paying customers.',
        intent: 'informational',
        linksTo: ['/', '/website-design-for-small-business'],
        imageQuery: 'digital marketing strategy',
    },
    {
        slug: 'website-for-cleaning-business-nz',
        keyword: 'website for cleaning business NZ',
        title: 'Website for Cleaning Business NZ — Get More Bookings Online',
        description: 'How a professional website helps cleaning businesses in NZ generate consistent bookings and grow beyond word-of-mouth.',
        intent: 'commercial',
        linksTo: ['/affordable-websites-nz', '/web-design-christchurch'],
        imageQuery: 'professional cleaning service',
    },
    {
        slug: 'website-for-tradies-nz',
        keyword: 'tradie website New Zealand',
        title: 'Tradie Website NZ: How Auckland Tradies Get More Jobs Online in 2026',
        description: 'The complete guide to tradie websites in New Zealand. Learn how plumbers, electricians, and builders use web design and local SEO to get more leads and higher-paying jobs.',
        intent: 'commercial',
        linksTo: ['/affordable-websites-nz', '/website-design-for-small-business'],
        imageQuery: 'construction worker tools',
    },
    {
        slug: 'seo-for-small-business-nz',
        keyword: 'SEO for small business NZ',
        title: 'SEO for Small Business NZ — A Beginner\'s Guide to Ranking on Google',
        description: 'Learn the SEO basics every small business owner in NZ needs to know to get found on Google.',
        intent: 'informational',
        linksTo: ['/', '/web-design-christchurch'],
        imageQuery: 'search engine optimization',
    },
    {
        slug: 'diy-vs-professional-website',
        keyword: 'DIY website vs professional website',
        title: 'DIY Website vs Professional Website — Which Is Right for Your Business?',
        description: 'Wix, Squarespace, or hiring a pro? We compare cost, quality, and ROI so you can make the right choice.',
        intent: 'informational',
        linksTo: ['/affordable-websites-nz', '/website-design-for-small-business'],
        imageQuery: 'web developer coding laptop',
    },
    {
        slug: 'best-website-builder-for-small-business-nz',
        keyword: 'best website builder for small business NZ',
        title: 'Best Website Builder for Small Business NZ (2026 Comparison)',
        description: 'Comparing Wix, Squarespace, Shopify, and custom-built options for NZ small businesses.',
        intent: 'informational',
        linksTo: ['/ecommerce-websites-nz', '/affordable-websites-nz'],
        imageQuery: 'website builder platform',
    },
    {
        slug: 'how-to-get-more-leads-from-your-website',
        keyword: 'how to get more leads from website',
        title: 'How to Get More Leads From Your Website in 2026 (Without Paying for Ads)',
        description: 'Your website gets traffic but no enquiries? Here are 10 proven lead generation tactics NZ small businesses are using right now to turn visitors into paying customers.',
        intent: 'informational',
        linksTo: ['/', '/website-design-for-small-business', '/affordable-websites-nz', '/web-design-christchurch', '/ecommerce-websites-nz'],
        imageQuery: 'lead generation business growth',
    },
];

export { SITE_URL };
