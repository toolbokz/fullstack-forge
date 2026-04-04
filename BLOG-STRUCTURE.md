# Blog System — Full Structural Analysis

**Date:** 4 April 2026  
**Source:** Full source code analysis of `/app/blog/`, `/lib/seo-data.js`, `/lib/internal-links.ts`, `/lib/schema.js`, `/components/BlogArticleLayout.js`, and all 10 individual blog post files.

---

# Blog System Summary

## Positioning
NZ-focused web design agency blog targeting small business owners, tradies, and service businesses. Core value proposition: "$1,000–$2,000 websites that generate leads, not just look pretty." All content funnels toward free website audit, pricing page, or contact form. Single author (Zachariah Pini, Hamilton-based).

## Strengths
1. **Engineered conversion funnel** — Every post is wrapped in `BlogArticleLayout`, a 10-section conversion template: Hero → Proof Bar → Featured Image → Article Body → Author Bio → Mid CTA → Lead Calculator → Lead Form → Related Content → End CTA. This is production-grade.
2. **Automated internal linking engine** — `internal-links.ts` auto-generates Related Posts (4), Service Links (3), Tool Links (3), and Pillar Links via `getArticleLinkPackageWithThumbnails()`. No post is orphaned at the component-rendered level.
3. **Centralized content plan** — `seo-data.js` drives both the blog index and sitemap from a single `contentPlan` array. Each entry has `slug`, `keyword`, `title`, `description`, `intent`, `linksTo`, and `imageQuery`. This is a scalable content registry.
4. **Schema scaffolding** — `schema.js` exports `articleSchema()`, `faqSchema()`, `breadcrumbSchema()`, `localBusinessSchema()`, and `serviceSchema()`. Every post uses `articleSchema` + `breadcrumbSchema`.
5. **Strong NZ localisation in top posts** — NZD pricing, GST, .co.nz, NoCowboys, Builderscrack, city names, NZ search volumes.
6. **Interactive tool embeds** — Posts embed Lead Loss Calculator, ROI Calculator, Pricing Estimator, and Conversion Rate Estimator via `<ToolEmbed>` component.

## Weaknesses
1. **5 of 10 posts are thin** — Rendered content under 500 words for posts #2, #3, #4, #5; under 550 for #7.
2. **8 of 10 posts have zero blog-to-blog in-body links** — Only Posts #1 and #10 cross-link to other blog posts in their body content.
3. **FAQ schema function exists but is never called** — `faqSchema()` is defined in `schema.js` but imported by zero blog posts.
4. **`dateModified` never passed** — Post #10 defines `UPDATED = '2026-03-28'` but doesn't pass it to `articleSchema()`. No other post has it.
5. **No taxonomy** — No categories, tags, topic pages, or archive pages exist. Labels ("Guide"/"Article") are UI-only, not clickable.
6. **No RSS feed**, no pagination, no author page.
7. **Active cannibalisation** between posts #4 vs #10 (customers vs leads), #8 vs #9 (DIY vs builder).

---

# TASK 1 — Full Blog Data Extraction

## Post 1: How Much Does a Website Cost in NZ? 2026 Pricing Guide

### Core Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/how-much-does-a-website-cost-in-nz` |
| Slug | `how-much-does-a-website-cost-in-nz` |
| Title | How Much Does a Website Cost in NZ? 2026 Pricing Guide |
| Meta title | `How Much Does a Website Cost in NZ? 2026 Pricing Guide — Fullstack Forge` |
| Meta description | "Complete NZ website pricing for 2026. Compare costs for small business, tradie, and ecommerce websites — from DIY to agency. Transparent pricing in NZD." (156 chars) |
| H1 | How Much Does a Website Cost in NZ? 2026 Pricing Guide |
| H2s | Quick Answer: Website Cost in NZ (2026) · Website Design Cost NZ: Full Pricing Breakdown · Website Cost by Type: What NZ Businesses Actually Pay · How to Calculate Your Website Cost · What Actually Affects Website Cost in NZ · Ongoing Website Costs in NZ: What You'll Pay After Launch · Shopify vs WordPress: Website Cost Comparison NZ · Real NZ Examples: What Businesses Actually Paid · Website Cost NZ: Frequently Asked Questions · Get Transparent Website Pricing — No Surprises |
| H3s | Small Business Website Cost NZ · Tradie Website Cost NZ · Ecommerce Website Cost NZ · WordPress Cost NZ · Shopify Cost NZ · Modern Static Sites (Next.js / Jamstack) · Auckland Tradie — $1,000 · Auckland Service Business — $1,500 · NZ Ecommerce Store — $2,000 · What’s the cheapest way to get a website in NZ? · Can I start with a basic site and upgrade later? · Are there hidden fees I should watch for? · Do I need to pay GST on my website? · How much should a small business spend on a website in NZ? · Is a $1,000 website any good? |
| Word count (rendered) | ~1,350 |
| File word count (raw) | 2,124 |
| Publish date | 2025-01-15 |
| Modified date | Not set |

### SEO Structure
| Field | Value |
|-------|-------|
| Primary keyword | `website cost NZ` |
| Secondary keywords | website design cost NZ, how much does a website cost in New Zealand, NZ website pricing, small business website cost NZ, tradie website cost NZ, ecommerce website cost NZ, website design pricing NZ 2026 |
| Search intent | **Commercial** |
| NZ localisation | **Yes** — NZD pricing throughout, GST 15% reference, .co.nz domain pricing, Auckland/Christchurch city examples, NZ platform references (Trade Me, NoCowboys implied) |

### Content Classification
| Field | Value |
|-------|-------|
| Funnel stage | **Decision** |
| Topic category | **Pricing** |
| Depth score | **9/10** |
| Uniqueness score | **8/10** |

### Linking + Conversion
| Field | Value |
|-------|-------|
| Internal links (in-body) | 5 → /affordable-websites-nz, /blog/website-for-tradies-nz, /ecommerce-websites-nz, /#contact, /#audit |
| External links | 0 |
| Links to — blog | 1 (→ tradies post) |
| Links to — services | /ecommerce-websites-nz |
| Links to — pricing/affordable | /affordable-websites-nz |
| Links to — contact | /#contact |
| Links to — audit | /#audit |
| CTA types | audit, pricing, contact |
| CTA positions | top (hero), mid (callout box + CTASection), bottom (lead form + end CTA) |
| ToolEmbed | pricing-estimator |
| showLeadCalculator | true |

---

## Post 2: Best Website Design for Small Businesses in 2026

### Core Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/best-website-design-for-small-businesses` |
| Slug | `best-website-design-for-small-businesses` |
| Title | Best Website Design for Small Businesses in 2026 |
| Meta title | `Best Website Design for Small Businesses in 2026 — Fullstack Forge` |
| Meta description | "What makes a great small business website? Learn the design principles that actually generate leads and customers." (113 chars) |
| H1 | Best Website Design for Small Businesses in 2026 |
| H2s | What Makes a "Good" Small Business Website? · The 7 Principles of High-Converting Small Business Design · Examples That Get It Right · Ready to Build Yours? |
| H3s | 1. Clear Value Proposition Above the Fold · 2. Mobile-First Design · 3. Fast Load Times · 4. Strategic CTAs (Calls to Action) · 5. Social Proof and Trust Signals · 6. Simple, Scannable Layout · 7. SEO Built In |
| Word count (rendered) | ~400 |
| File word count (raw) | 665 |
| Publish date | 2025-01-20 |
| Modified date | Not set |

### SEO Structure
| Field | Value |
|-------|-------|
| Primary keyword | `best website design for small businesses` |
| Secondary keywords | small business website design, high-converting website design, website design principles 2026 |
| Search intent | **Informational** |
| NZ localisation | **Weak** — single mention of "60% of NZ web traffic" |

### Content Classification
| Field | Value |
|-------|-------|
| Funnel stage | **Awareness** |
| Topic category | **Website Design** |
| Depth score | **3/10** |
| Uniqueness score | **2/10** |

### Linking + Conversion
| Field | Value |
|-------|-------|
| Internal links (in-body) | 2 → /#solutions, /website-design-for-small-business |
| External links | 0 |
| Links to — blog | 0 |
| Links to — services | 0 |
| Links to — pricing | ❌ |
| Links to — contact | ❌ |
| Links to — audit | ❌ (only via hero CTA) |
| CTA types | audit (hero + lead form), pricing (mid CTA secondary) |
| CTA positions | top, mid, bottom |
| ToolEmbed | None |
| showLeadCalculator | false |

---

## Post 3: Do Small Businesses Need a Website in 2026? (The Real Answer)

### Core Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/do-small-businesses-need-a-website` |
| Slug | `do-small-businesses-need-a-website` |
| Title | Do Small Businesses Need a Website in 2026? (The Real Answer) |
| Meta title | `Do Small Businesses Need a Website in 2026? (The Real Answer) — Fullstack Forge` |
| Meta description | "With social media everywhere, do you still need a website? We break down the data and the real impact on revenue." (114 chars) |
| H1 | Do Small Businesses Need a Website in 2026? (The Real Answer) |
| H2s | The Short Answer: Yes · "But I Have Facebook/Instagram" · What Happens Without a Website · It Doesn't Have to Be Expensive · The Bottom Line |
| H3s | None |
| Word count (rendered) | ~350 |
| File word count (raw) | 601 |
| Publish date | 2025-01-25 |
| Modified date | Not set |

### SEO Structure
| Field | Value |
|-------|-------|
| Primary keyword | `do small businesses need a website 2026` |
| Secondary keywords | small business website necessity, do I need a website for my business, website vs social media business |
| Search intent | **Informational** |
| NZ localisation | **Weak** — no NZ-specific stats; generic global data ("97% of consumers") |

### Content Classification
| Field | Value |
|-------|-------|
| Funnel stage | **Awareness** |
| Topic category | **Website Design** |
| Depth score | **2/10** |
| Uniqueness score | **2/10** |

### Linking + Conversion
| Field | Value |
|-------|-------|
| Internal links (in-body) | 1 → /affordable-websites-nz |
| External links | 0 |
| Links to — blog | 0 |
| CTA types | audit, pricing |
| CTA positions | top, mid, bottom |
| ToolEmbed | website-roi-calculator |
| showLeadCalculator | true |

---

## Post 4: How to Get Customers From Your Website (Proven Strategy)

### Core Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/how-to-get-customers-from-your-website` |
| Slug | `how-to-get-customers-from-your-website` |
| Title | How to Get Customers From Your Website (Proven Strategy) |
| Meta title | `How to Get Customers From Your Website (Proven Strategy) — Fullstack Forge` |
| Meta description | "Your website gets traffic but no leads? Here's the exact strategy to turn visitors into paying customers." (107 chars) |
| H1 | How to Get Customers From Your Website (Proven Strategy) |
| H2s | Why Most Websites Don't Generate Customers · The 5-Step Website Customer Machine · The Websites We Build Follow This Exact Framework |
| H3s | Step 1: Get Found (SEO) · Step 2: Make a Strong First Impression · Step 3: Build Trust Instantly · Step 4: Make the Next Step Obvious · Step 5: Capture Leads, Not Just Pageviews |
| Word count (rendered) | ~370 |
| File word count (raw) | 618 |
| Publish date | 2025-02-01 |
| Modified date | Not set |

### SEO Structure
| Field | Value |
|-------|-------|
| Primary keyword | `how to get customers from website` |
| Secondary keywords | website customer conversion, turn website visitors into customers, website not generating leads |
| Search intent | **Informational** |
| NZ localisation | **No** — zero NZ-specific references |

### Content Classification
| Field | Value |
|-------|-------|
| Funnel stage | **Awareness** |
| Topic category | **Lead Generation** |
| Depth score | **2/10** |
| Uniqueness score | **1/10** — fully superseded by Post #10 |

### Linking + Conversion
| Field | Value |
|-------|-------|
| Internal links (in-body) | 2 → /, /website-design-for-small-business |
| External links | 0 |
| Links to — blog | 0 |
| CTA types | audit, pricing |
| CTA positions | top, mid, bottom |
| ToolEmbed | conversion-rate-estimator |
| showLeadCalculator | true |

---

## Post 5: Website for Cleaning Business NZ — Get More Bookings Online

### Core Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/website-for-cleaning-business-nz` |
| Slug | `website-for-cleaning-business-nz` |
| Title | Website for Cleaning Business NZ — Get More Bookings Online |
| Meta title | `Website for Cleaning Business NZ — Get More Bookings Online — Fullstack Forge` |
| Meta description | "How a professional website helps cleaning businesses in NZ generate consistent bookings and grow beyond word-of-mouth." (119 chars) |
| H1 | Website for Cleaning Business NZ — Get More Bookings Online |
| H2s | Why Cleaning Businesses Need a Website · What Customers Search For · What Your Cleaning Website Needs · Real Example: Everclean Christchurch · Get Started for $1,000 |
| H3s | None |
| Word count (rendered) | ~340 |
| File word count (raw) | 589 |
| Publish date | 2025-02-05 |
| Modified date | Not set |

### SEO Structure
| Field | Value |
|-------|-------|
| Primary keyword | `website for cleaning business NZ` |
| Secondary keywords | cleaning business website, cleaning company website NZ, house cleaning website NZ, commercial cleaning website |
| Search intent | **Commercial** |
| NZ localisation | **Yes** — Christchurch case study, NZ search terms ("house cleaning [city]", "end of tenancy cleaning [city]"), Trade Me reference implied |

### Content Classification
| Field | Value |
|-------|-------|
| Funnel stage | **Decision** |
| Topic category | **Service Vertical** |
| Depth score | **3/10** |
| Uniqueness score | **7/10** — only post targeting cleaning niche |

### Linking + Conversion
| Field | Value |
|-------|-------|
| Internal links (in-body) | 1 → /affordable-websites-nz |
| External links | 0 |
| Links to — blog | 0 |
| CTA types | audit, pricing |
| CTA positions | top, mid, bottom |
| ToolEmbed | lead-loss-calculator |
| showLeadCalculator | true |

---

## Post 6: Tradie Website NZ: How Auckland Tradies Get More Jobs Online in 2026

### Core Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/website-for-tradies-nz` |
| Slug | `website-for-tradies-nz` |
| Title | Tradie Website NZ: How Auckland Tradies Get More Jobs Online in 2026 |
| Meta title | `Tradie Website NZ: How Auckland Tradies Get More Jobs Online in 2026 — Fullstack Forge` |
| Meta description | "The complete guide to tradie websites in New Zealand. Learn how plumbers, electricians, and builders use web design and local SEO to get more leads and higher-paying jobs." (171 chars) |
| H1 | Tradie Website NZ: How Auckland Tradies Get More Jobs Online in 2026 |
| H2s | Why Word-of-Mouth Alone Is Costing You Jobs · Tradie Website NZ: The Search Volume You're Missing · What Makes a High-Converting Tradie Website · Tradie SEO New Zealand: How to Rank on Google Locally · How Much Does a Tradie Website Cost in NZ? · Real Results: Auckland Tradies Getting More Jobs Online · 5 Mistakes Tradies Make With Their Websites · Get More Tradie Jobs Online — Starting This Week |
| H3s | 1. A Homepage That Converts in 5 Seconds · 2. Service Pages Optimised for Local SEO · 3. Photo Gallery of Real Work · 4. Click-to-Call and Simple Contact Form · 5. Google Reviews Front and Centre · 6. Google Business Profile Integration |
| Word count (rendered) | ~1,300 |
| File word count (raw) | 2,027 |
| Publish date | 2025-02-10 |
| Modified date | Not set |

### SEO Structure
| Field | Value |
|-------|-------|
| Primary keyword | `tradie website New Zealand` |
| Secondary keywords | tradie website NZ, tradie web design, plumber website Auckland, electrician website NZ, builder website NZ, tradie SEO NZ |
| Search intent | **Commercial** |
| NZ localisation | **Excellent** — Auckland search volume data (6,600+ plumber, 4,400+ electrician, 2,900+ builder), Christchurch/Wellington/Hamilton mentions, NoCowboys, Builderscrack, Yellow Pages, NAP consistency, Google Business Profile NZ |

### Content Classification
| Field | Value |
|-------|-------|
| Funnel stage | **Consideration → Decision** |
| Topic category | **Service Vertical** |
| Depth score | **8/10** |
| Uniqueness score | **9/10** |

### Linking + Conversion
| Field | Value |
|-------|-------|
| Internal links (in-body) | 4 → /affordable-websites-nz (×2), /#contact (×2) |
| External links | 0 |
| Links to — blog | 0 |
| CTA types | audit, pricing, contact |
| CTA positions | top, mid (×2 callout boxes + CTASection), bottom |
| ToolEmbed | lead-loss-calculator |
| showLeadCalculator | true |

---

## Post 7: SEO for Small Business NZ — A Beginner's Guide to Ranking on Google

### Core Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/seo-for-small-business-nz` |
| Slug | `seo-for-small-business-nz` |
| Title | SEO for Small Business NZ — A Beginner's Guide to Ranking on Google |
| Meta title | `SEO for Small Business NZ — A Beginner's Guide to Ranking on Google — Fullstack Forge` |
| Meta description | "Learn the SEO basics every small business owner in NZ needs to know to get found on Google." (92 chars) |
| H1 | SEO for Small Business NZ — A Beginner's Guide to Ranking on Google |
| H2s | What Is SEO? · Why SEO Matters for NZ Small Businesses · The SEO Basics Every Business Owner Should Know · How Long Does SEO Take? · Need SEO Built Into Your Website? |
| H3s | 1. Keyword Research · 2. On-Page SEO · 3. Google Business Profile · 4. Site Speed · 5. Mobile Optimization · 6. Internal Linking |
| Word count (rendered) | ~470 |
| File word count (raw) | 751 |
| Publish date | 2025-02-15 |
| Modified date | Not set |

### SEO Structure
| Field | Value |
|-------|-------|
| Primary keyword | `SEO for small business NZ` |
| Secondary keywords | small business SEO New Zealand, Google ranking NZ, local SEO NZ, SEO basics |
| Search intent | **Informational** |
| NZ localisation | **Moderate** — "plumber Christchurch", "accountant Auckland" examples, reference to Netlify hosting |

### Content Classification
| Field | Value |
|-------|-------|
| Funnel stage | **Awareness** |
| Topic category | **SEO** |
| Depth score | **3/10** |
| Uniqueness score | **3/10** |

### Linking + Conversion
| Field | Value |
|-------|-------|
| Internal links (in-body) | 2 → /, /web-design-christchurch |
| External links | 0 |
| Links to — blog | 0 |
| CTA types | audit |
| CTA positions | top, mid, bottom |
| ToolEmbed | None |
| showLeadCalculator | false |

---

## Post 8: DIY Website vs Professional Website — Which Is Right for Your Business?

### Core Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/diy-vs-professional-website` |
| Slug | `diy-vs-professional-website` |
| Title | DIY Website vs Professional Website — Which Is Right for Your Business? |
| Meta title | `DIY Website vs Professional Website — Which Is Right for Your Business? — Fullstack Forge` |
| Meta description | "Wix, Squarespace, or hiring a pro? We compare cost, quality, and ROI so you can make the right choice." (104 chars) |
| H1 | DIY Website vs Professional Website — Which Is Right for Your Business? |
| H2s | The Real Comparison · DIY Website Builders (Wix, Squarespace, WordPress.com) · Professional Website · The ROI Question · When DIY Makes Sense · When to Go Professional · The Best of Both Worlds |
| H3s | Pros (×2) · Cons (×2) |
| Word count (rendered) | ~450 |
| File word count (raw) | 700 |
| Publish date | 2025-02-20 |
| Modified date | Not set |

### SEO Structure
| Field | Value |
|-------|-------|
| Primary keyword | `DIY website vs professional website` |
| Secondary keywords | Wix vs professional website, Squarespace vs custom, DIY vs hiring web designer |
| Search intent | **Informational** |
| NZ localisation | **Weak** — "NZ minimum wage" single reference |

### Content Classification
| Field | Value |
|-------|-------|
| Funnel stage | **Consideration** |
| Topic category | **Comparisons** |
| Depth score | **3/10** |
| Uniqueness score | **4/10** |

### Linking + Conversion
| Field | Value |
|-------|-------|
| Internal links (in-body) | 2 → /affordable-websites-nz, / |
| External links | 0 |
| Links to — blog | 0 |
| CTA types | audit, pricing |
| CTA positions | top, mid, bottom |
| ToolEmbed | None |
| showLeadCalculator | false |

---

## Post 9: Best Website Builder for Small Business NZ (2026 Comparison)

### Core Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/best-website-builder-for-small-business-nz` |
| Slug | `best-website-builder-for-small-business-nz` |
| Title | Best Website Builder for Small Business NZ (2026 Comparison) |
| Meta title | `Best Website Builder for Small Business NZ (2026 Comparison) — Fullstack Forge` |
| Meta description | "Comparing Wix, Squarespace, Shopify, and custom-built options for NZ small businesses." (87 chars) |
| H1 | Best Website Builder for Small Business NZ (2026 Comparison) |
| H2s | Quick Verdict · The Contenders · Cost Comparison Over 3 Years · Our Recommendation |
| H3s | Wix · Squarespace · Shopify · WordPress.org (Self-Hosted) · Custom-Built (Next.js / React) |
| Word count (rendered) | ~480 |
| File word count (raw) | 634 |
| Publish date | 2025-02-25 |
| Modified date | Not set |

### SEO Structure
| Field | Value |
|-------|-------|
| Primary keyword | `best website builder for small business NZ` |
| Secondary keywords | Wix vs Squarespace NZ, Shopify vs WordPress NZ, website builder comparison New Zealand |
| Search intent | **Informational** |
| NZ localisation | **Yes** — NZD pricing in table and per-platform reviews |

### Content Classification
| Field | Value |
|-------|-------|
| Funnel stage | **Consideration** |
| Topic category | **Comparisons** |
| Depth score | **4/10** |
| Uniqueness score | **5/10** |

### Linking + Conversion
| Field | Value |
|-------|-------|
| Internal links (in-body) | 2 → /affordable-websites-nz, /ecommerce-websites-nz |
| External links | 0 |
| Links to — blog | 0 |
| CTA types | audit, pricing |
| CTA positions | top, mid, bottom |
| ToolEmbed | None |
| showLeadCalculator | false |

---

## Post 10: How to Get More Leads From Your Website in 2026 (Without Paying for Ads)

### Core Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/how-to-get-more-leads-from-your-website` |
| Slug | `how-to-get-more-leads-from-your-website` |
| Title | How to Get More Leads From Your Website in 2026 (Without Paying for Ads) |
| Meta title | `How to Get More Leads From Your Website in 2026 (Without Paying for Ads) — Fullstack Forge` |
| Meta description | "Your website gets traffic but no enquiries? Here are 10 proven lead generation tactics NZ small businesses are using right now to turn visitors into paying customers." (166 chars) |
| H1 | How to Get More Leads From Your Website in 2026 (Without Paying for Ads) |
| H2s | Why Most NZ Business Websites Fail at Lead Generation · 10 Proven Ways to Get More Leads From Your Website · The Compound Effect: Small Fixes, Massive Results · Where to Start: A Priority Checklist · Real Example: A Christchurch Cleaning Business · For E-Commerce: Lead Generation Looks Different · Stop Losing Leads — Get a Free Website Audit |
| H3s | 1. Replace "Contact Us" With a Lead Magnet · 2. Write Benefit-Driven Headlines · 3. Add Social Proof Next to Every CTA · 4. Cut Your Form Fields to the Absolute Minimum · 5. Make Your CTA Impossible to Miss · 6. Fix Your Page Speed · 7. Use Multiple CTAs Per Page · 8. Build Trust With a Professional Design · 9. Optimise for Local Search · 10. Add Live Chat or a Quick-Response Promise |
| Word count (rendered) | ~1,500 |
| File word count (raw) | 2,278 |
| Publish date | 2025-03-01 |
| Modified date | 2026-03-28 (defined as `UPDATED` constant but **not passed to `articleSchema()`**) |

### SEO Structure
| Field | Value |
|-------|-------|
| Primary keyword | `how to get more leads from website` |
| Secondary keywords | website lead generation, get more enquiries from website, lead generation NZ small business, convert website visitors, website conversion optimization |
| Search intent | **Informational** |
| NZ localisation | **Strong** — Christchurch case study, Auckland/Wellington references, NZ-specific examples (plumbers, cafés), conversion data in NZD |

### Content Classification
| Field | Value |
|-------|-------|
| Funnel stage | **Consideration** |
| Topic category | **Lead Generation** |
| Depth score | **9/10** |
| Uniqueness score | **8/10** |

### Linking + Conversion
| Field | Value |
|-------|-------|
| Internal links (in-body) | 12 → /website-design-for-small-business, /blog/best-website-design-for-small-businesses, /blog/website-for-tradies-nz, /#audit, /blog/seo-for-small-business-nz, /affordable-websites-nz, /blog/diy-vs-professional-website, /web-design-christchurch, /blog/how-much-does-a-website-cost-in-nz, /blog/website-for-cleaning-business-nz, /ecommerce-websites-nz, /#contact |
| External links | 0 |
| Links to — blog | 6 (→ posts #1, #2, #5, #6, #7, #8) |
| Links to — services | /website-design-for-small-business, /web-design-christchurch, /ecommerce-websites-nz |
| Links to — pricing | /affordable-websites-nz |
| Links to — contact | /#contact |
| Links to — audit | /#audit |
| CTA types | audit, pricing, contact, tool |
| CTA positions | top, mid (ToolEmbed + CTASection), bottom (lead form + end CTA) |
| ToolEmbed | lead-loss-calculator |
| showLeadCalculator | true |

---

# TASK 2 — Structured Dataset Table

| # | Title | Slug | Primary Keyword | Intent | Funnel Stage | Topic Category | Words (rendered) | Depth | Unique | Int. Links (body) | Blog→Blog Links | CTA Types | Conv. Strength | SEO Strength |
|---|-------|------|----------------|--------|-------------|----------------|----------|-------|--------|-------------------|----------------|-----------|---------------|-------------|
| 1 | How Much Does a Website Cost in NZ? 2026 Pricing Guide | how-much-does-a-website-cost-in-nz | website cost NZ | Commercial | Decision | Pricing | ~1,350 | 9 | 8 | 5 | 1 | audit, pricing, contact | 9 | 8 |
| 2 | Best Website Design for Small Businesses in 2026 | best-website-design-for-small-businesses | best website design for small businesses | Informational | Awareness | Website Design | ~400 | 3 | 2 | 2 | 0 | audit, pricing | 3 | 4 |
| 3 | Do Small Businesses Need a Website in 2026? | do-small-businesses-need-a-website | do small businesses need a website 2026 | Informational | Awareness | Website Design | ~350 | 2 | 2 | 1 | 0 | audit, pricing | 3 | 3 |
| 4 | How to Get Customers From Your Website (Proven Strategy) | how-to-get-customers-from-your-website | how to get customers from website | Informational | Awareness | Lead Generation | ~370 | 2 | 1 | 2 | 0 | audit, pricing | 3 | 3 |
| 5 | Website for Cleaning Business NZ — Get More Bookings Online | website-for-cleaning-business-nz | website for cleaning business NZ | Commercial | Decision | Service Vertical | ~340 | 3 | 7 | 1 | 0 | audit, pricing | 5 | 5 |
| 6 | Tradie Website NZ: How Auckland Tradies Get More Jobs Online | website-for-tradies-nz | tradie website New Zealand | Commercial | Consideration→Decision | Service Vertical | ~1,300 | 8 | 9 | 4 | 0 | audit, pricing, contact | 8 | 7 |
| 7 | SEO for Small Business NZ — A Beginner's Guide | seo-for-small-business-nz | SEO for small business NZ | Informational | Awareness | SEO | ~470 | 3 | 3 | 2 | 0 | audit | 3 | 4 |
| 8 | DIY Website vs Professional Website | diy-vs-professional-website | DIY website vs professional website | Informational | Consideration | Comparisons | ~450 | 3 | 4 | 2 | 0 | audit, pricing | 4 | 4 |
| 9 | Best Website Builder for Small Business NZ | best-website-builder-for-small-business-nz | best website builder for small business NZ | Informational | Consideration | Comparisons | ~480 | 4 | 5 | 2 | 0 | audit, pricing | 5 | 5 |
| 10 | How to Get More Leads From Your Website in 2026 | how-to-get-more-leads-from-your-website | how to get more leads from website | Informational | Consideration | Lead Generation | ~1,500 | 9 | 8 | 12 | 6 | audit, pricing, contact, tool | 9 | 8 |

---

# TASK 3 — Blog Graph

## Internal Link Graph (in-body content only)

### Blog → Blog Links
```
#10 (More Leads) ──→ #1  (Website Cost)
#10 (More Leads) ──→ #2  (Best Design)
#10 (More Leads) ──→ #5  (Cleaning)
#10 (More Leads) ──→ #6  (Tradies)
#10 (More Leads) ──→ #7  (SEO)
#10 (More Leads) ──→ #8  (DIY vs Pro)
#1  (Website Cost) ──→ #6  (Tradies)
```

All other posts (2, 3, 4, 5, 6, 7, 8, 9) → **zero blog-to-blog links in body content**.

### Blog → Pillar/Service Page Links
```
#1  ──→ /affordable-websites-nz, /ecommerce-websites-nz, /#contact, /#audit
#2  ──→ /website-design-for-small-business, /#solutions
#3  ──→ /affordable-websites-nz
#4  ──→ /, /website-design-for-small-business
#5  ──→ /affordable-websites-nz
#6  ──→ /affordable-websites-nz (×2), /#contact (×2)
#7  ──→ /, /web-design-christchurch
#8  ──→ /affordable-websites-nz, /
#9  ──→ /affordable-websites-nz, /ecommerce-websites-nz
#10 ──→ /website-design-for-small-business, /affordable-websites-nz, /web-design-christchurch, /ecommerce-websites-nz, /#audit, /#contact
```

### Incoming Blog Links Count
| Post | Incoming from other blog posts |
|------|-------------------------------|
| #1 (Cost) | 1 (from #10) |
| #2 (Design) | 1 (from #10) |
| #3 (Need Website) | **0 — orphaned** |
| #4 (Customers) | **0 — orphaned** |
| #5 (Cleaning) | 1 (from #10) |
| #6 (Tradies) | 2 (from #1, #10) |
| #7 (SEO) | 1 (from #10) |
| #8 (DIY vs Pro) | 1 (from #10) |
| #9 (Builder) | **0 — orphaned** |
| #10 (Leads) | **0 — orphaned (hub with no incoming)** |

### Auto-Generated Component Links (via `RelatedPosts`)
Every post additionally receives 4 related blog post cards, 3 service links, 3 tool links, and pillar page pills via the footer `RelatedPosts` component. These are rendered client-side and carry less SEO weight than in-body contextual links.

---

## Keyword Clusters

### Cluster A: Website Pricing & Cost
| Post | Keyword | Overlap |
|------|---------|---------|
| #1 | website cost NZ | Primary |
| #6 | tradie website NZ (cost section inside) | Subsection overlap |
| #8 | DIY website vs professional website (ROI/cost comparison) | Partial overlap |
| #9 | best website builder NZ (3-year cost table) | Partial overlap |

### Cluster B: Lead Generation & Conversion
| Post | Keyword | Overlap |
|------|---------|---------|
| #10 | how to get more leads from website | Primary |
| #4 | how to get customers from website | **Direct cannibalisation** |
| #2 | best website design small businesses (CTA/trust principles) | Conceptual overlap |

### Cluster C: Website Necessity & Strategy
| Post | Keyword | Overlap |
|------|---------|---------|
| #3 | do small businesses need a website 2026 | Primary |
| #2 | best website design for small businesses | Same audience, different question |

### Cluster D: Platform & Build Comparisons
| Post | Keyword | Overlap |
|------|---------|---------|
| #8 | DIY website vs professional website | **Overlaps with #9** |
| #9 | best website builder for small business NZ | **Overlaps with #8** |

### Cluster E: SEO
| Post | Keyword | Overlap |
|------|---------|---------|
| #7 | SEO for small business NZ | Standalone |

### Cluster F: Service Verticals
| Post | Keyword | Overlap |
|------|---------|---------|
| #5 | website for cleaning business NZ | Standalone |
| #6 | tradie website New Zealand | Standalone |

---

# TASK 4 — Structural Problems

## 1. Cannibalisation Clusters

### CRITICAL: Post #4 vs Post #10
| Dimension | #4 (Get Customers) | #10 (More Leads) |
|-----------|---------------------|-------------------|
| Keyword | how to get customers from website | how to get more leads from website |
| Content | 5-step framework, ~370 words | 10 tactics, ~1,500 words |
| Depth | 2/10 | 9/10 |
| Internal links | 2 | 12 |
| Blog cross-links | 0 | 6 |

**Diagnosis:** Same search intent, same audience. Google has no reason to rank both. Post #10 is categorically superior. Post #4 is a diluted duplicate that splits ranking signals.

**Resolution:** 301 redirect `/blog/how-to-get-customers-from-your-website` → `/blog/how-to-get-more-leads-from-your-website`. Remove from `contentPlan`. Add a "Customer Acquisition" H2 to Post #10 if not already covered.

### HIGH: Post #8 vs Post #9
| Dimension | #8 (DIY vs Pro) | #9 (Best Builder) |
|-----------|------------------|--------------------|
| Keyword | DIY website vs professional website | best website builder small business NZ |
| Content | Wix/Squarespace/WordPress pros/cons, ROI | Wix/Squarespace/Shopify/WordPress/Custom reviews, cost table |
| Depth | 3/10 | 4/10 |

**Diagnosis:** Both discuss Wix, Squarespace, WordPress with overlapping points. User searching "best website builder NZ" will also see "DIY vs professional" results. Platform-specific content overlaps.

**Resolution:** Differentiate by angle:
- **#8** → Rewrite as pure decision framework: "Should I DIY or hire a professional?" Focus on time, skill, ROI, opportunity cost. Remove specific platform reviews. Link to #9 for platform details.
- **#9** → Expand into comprehensive platform guide. Add feature matrix, speed benchmarks, SEO comparison. Link to #8 for the meta-decision.

### LOW: Post #2 overlaps conceptually with #4 and #10
Posts #2, #4, and #10 all discuss CTAs, mobile design, trust signals, page speed. With #4 redirected to #10, #2 should be repositioned to focus exclusively on **visual design** (typography, layout, color, imagery) and avoid overlapping with conversion/lead generation topics.

---

## 2. Thin Content Nodes

| Post | Rendered Words | Depth Score | Status |
|------|---------------|-------------|--------|
| #3 (Need Website) | ~350 | 2/10 | **CRITICAL THIN** |
| #4 (Customers) | ~370 | 2/10 | **CRITICAL THIN** (merge into #10) |
| #5 (Cleaning) | ~340 | 3/10 | **CRITICAL THIN** |
| #2 (Design) | ~400 | 3/10 | **THIN** |
| #8 (DIY vs Pro) | ~450 | 3/10 | **THIN** |
| #7 (SEO) | ~470 | 3/10 | **THIN** |
| #9 (Builder) | ~480 | 4/10 | **BORDERLINE** |

7 of 10 posts are thin or critically thin. Only posts #1, #6, and #10 are at competitive depth.

---

## 3. Weak Conversion Nodes

| Post | Conv. Score | Why Weak |
|------|------------|----------|
| #2 (Design) | 3 | No pricing link in body, no case study, no tool embed, no lead calculator |
| #3 (Need Website) | 3 | Awareness-stage readers don't convert; content too thin to build trust |
| #4 (Customers) | 3 | Generic advice, no NZ examples, superseded by #10 |
| #7 (SEO) | 3 | No tool embed (despite SEO audit tool existing), no pricing link, no case study |
| #8 (DIY vs Pro) | 4 | No comparison table, no case study, missing pricing link in body |

CTA infrastructure is strong (every post has hero + mid + lead form + end CTA), but **content quality is too low to earn the conversion**. Users won't fill out a form after reading 350 words of generic advice.

---

## 4. Missing Structure

| Structure Element | Status |
|-------------------|--------|
| Categories | **Missing** — "Guide"/"Article" labels are UI-only display, not clickable taxonomy |
| Tags | **Missing** |
| Category/archive pages | **Missing** |
| Pillar pages (blog-level) | **Missing** — pillar pages exist as service pages (affordable, ecommerce, etc.) but not as blog pillar content |
| Cluster hierarchy | **Missing** — no formal hub-spoke structure between blog posts |
| RSS feed | **Missing** |
| Pagination | **Missing** (not needed at 10 posts, but no infrastructure for scale) |
| Author page | **Missing** — author bio links to `/about` which is a company page, not an author page |
| Search / filter | **Missing** |
| `dateModified` in schema | **Missing** on all posts |
| `faqSchema` | **Missing** on all posts (function exists but is never called) |

---

# TASK 5 — Rebuilt Blog Architecture

## Pillar Pages (5 pillars)

| Pillar | Anchor Post(s) | Target Keyword Cluster | Funnel Coverage |
|--------|----------------|----------------------|-----------------|
| **Pillar 1: Website Cost NZ** | Post #1 (Website Cost) | website cost NZ, website pricing NZ, how much website cost NZ | Decision |
| **Pillar 2: Web Design for Small Business** | Post #2 (Best Design) — *needs expansion to 2,000+ words* | best website design small business, small business website NZ | Awareness → Consideration |
| **Pillar 3: SEO for NZ Small Business** | Post #7 (SEO Guide) — *needs expansion to 2,500+ words* | SEO for small business NZ, local SEO NZ, Google ranking NZ | Awareness → Consideration |
| **Pillar 4: Lead Generation from Websites** | Post #10 (More Leads) — *absorbs Post #4* | how to get more leads from website, website conversion, lead generation NZ | Consideration |
| **Pillar 5: Websites for Tradies & Service Businesses** | Post #6 (Tradies) | tradie website NZ, service business website NZ | Consideration → Decision |

---

## Cluster Mapping

### Pillar 1: Website Cost NZ
```
[PILLAR] #1 — How Much Does a Website Cost in NZ? 2026 Pricing Guide
    ├── [CLUSTER] #8 — DIY Website vs Professional (rewritten: decision framework only)
    ├── [CLUSTER] #9 — Best Website Builder NZ (expanded: full comparison)
    ├── [CLUSTER] NEW — Website Maintenance Costs NZ
    └── [CLUSTER] NEW — What to Look for in a Website Quote NZ
```

### Pillar 2: Web Design for Small Business
```
[PILLAR] #2 — Best Website Design for Small Businesses (expanded to 2,000+ words)
    ├── [CLUSTER] #3 — Do Small Businesses Need a Website (expanded)
    ├── [CLUSTER] NEW — Website Redesign Checklist NZ
    ├── [CLUSTER] NEW — How to Choose a Web Designer in NZ
    └── [CLUSTER] NEW — Why Most Small Business Websites Fail
```

### Pillar 3: SEO for NZ Small Business
```
[PILLAR] #7 — SEO for Small Business NZ (expanded to 2,500+ words)
    ├── [CLUSTER] NEW — Google Business Profile Guide NZ
    ├── [CLUSTER] NEW — Local SEO for Tradies NZ
    ├── [CLUSTER] NEW — How to Get Google Reviews NZ
    ├── [CLUSTER] NEW — Website Speed Optimisation Guide
    └── [CLUSTER] NEW — What is Schema Markup (for NZ Business)
```

### Pillar 4: Lead Generation from Websites
```
[PILLAR] #10 — How to Get More Leads From Your Website (absorbs #4)
    ├── [CLUSTER] NEW — How to Write Website Copy That Converts
    ├── [CLUSTER] NEW — Is Your Website Losing You Customers? (Signs)
    ├── [CLUSTER] NEW — How to Track Website Leads (Analytics Setup)
    └── [CLUSTER] NEW — Website ROI: How to Measure It
```

### Pillar 5: Websites for Tradies & Service Businesses
```
[PILLAR] #6 — Tradie Website NZ (existing strong post)
    ├── [CLUSTER] #5 — Website for Cleaning Business NZ (expanded)
    ├── [CLUSTER] NEW — Website for Plumber NZ
    ├── [CLUSTER] NEW — Website for Electrician NZ
    ├── [CLUSTER] NEW — Website for Builder NZ
    ├── [CLUSTER] NEW — Website for Landscaping Business NZ
    ├── [CLUSTER] NEW — Website for Restaurant NZ
    └── [CLUSTER] NEW — Website for Real Estate Agent NZ
```

---

## Post Disposition Plan

| Post | Action | Details |
|------|--------|---------|
| #1 (Cost) | **Keep as Pillar** | Add FAQ schema, link to #8 + #9. Minor content refresh. |
| #2 (Design) | **Expand to Pillar** | Rewrite from ~400 → 2,000+ words. Add screenshots, case studies, NZ examples. Focus on visual design to avoid overlap with #10. |
| #3 (Need Website) | **Expand as Cluster** under Pillar 2 | Rewrite from ~350 → 1,500+ words. Add NZ MBIE stats, industry examples, cost section, FAQ. Link to #1, #8. |
| #4 (Customers) | **Merge → Redirect** to #10 | 301 redirect. Remove from `contentPlan`. All unique content already covered better in #10. |
| #5 (Cleaning) | **Expand as Cluster** under Pillar 5 | Rewrite from ~340 → 1,500+ words. Add pricing table, detailed case study, before/after, FAQ, cross-links to #1, #6, #7. |
| #6 (Tradies) | **Keep as Pillar** | Add FAQ section + FAQ schema, link to #1, #5, #7. Add trade-specific breakdowns. |
| #7 (SEO) | **Expand to Pillar** | Rewrite from ~470 → 2,500+ words. Add technical SEO, link building, NZ directories, Search Console, case study, FAQ. Embed SEO audit tool. |
| #8 (DIY vs Pro) | **Reposition as Cluster** under Pillar 1 | Rewrite to focus on decision framework only. Remove platform reviews (defer to #9). Add comparison table, case study. Link to #1 and #9. |
| #9 (Builder) | **Expand as Cluster** under Pillar 1 | Expand from ~480 → 1,500+ words. Add feature matrix, speed data, SEO comparison, per-platform NZ examples. Link to #1, #8. |
| #10 (Leads) | **Keep as Pillar** (absorb #4) | Pass `dateModified` to schema. Add FAQ. Add downloadable checklist. |

---

## Category Taxonomy (to implement)

| Category Slug | Label | Posts |
|---------------|-------|-------|
| `pricing` | Pricing & Cost | #1, #8, #9 |
| `web-design` | Website Design | #2, #3 |
| `seo` | SEO | #7 |
| `lead-generation` | Lead Generation | #10 |
| `comparisons` | Comparisons | #8, #9 |
| `service-verticals` | Industry Guides | #5, #6, + future niche posts |

Implementation: Add `category` field to `contentPlan` array. Create `/blog/category/[slug]` dynamic route that filters `contentPlan` entries.

---

# TASK 6 — Individual Post Breakdowns

---

## How Much Does a Website Cost in NZ? 2026 Pricing Guide

- **What it's about:** Comprehensive pricing guide comparing every website build method available to NZ businesses — from free DIY ($0) to full agency ($30,000+) — broken down by business type (small biz, tradie, ecommerce), platform (WordPress, Shopify, Next.js), and ongoing costs.
- **Who it targets:** NZ small business owners actively budgeting for a website. Secondary: tradies, ecommerce owners, anyone searching "website cost NZ."
- **Search intent:** Commercial → Decision. Users are comparing prices and ready to buy.
- **Funnel stage:** Decision.
- **Key sections:** Quick answer pricing summary, full pricing breakdown table (5 rows), cost by business type (3 subsections), 5-step cost calculator framework, 7 cost factors, ongoing cost table (6 rows), Shopify vs WordPress vs Jamstack comparison, 3 NZ case studies with ROI, 6-item FAQ, final pricing CTA.
- **What it does well:** Extremely comprehensive. Two pricing tables. Three case studies with specific numbers ($1,000 plumber → 25 enquiries/month). Transparent pricing that builds trust. Multiple CTAs with perfect intent alignment. Pricing Estimator embedded. NZD + GST references. Covers the entire decision space from cheapest to most expensive.
- **What it lacks:** FAQ schema markup (6 FAQ items exist but no `faqSchema()` call). No cross-links to Posts #8 (#9 (platform comparisons). No external authoritative links. Case study dates are 2025.
- **How to improve:** 1) Add `faqSchema()` — 5 minutes, immediate rich snippet opportunity. 2) Add lines linking to #8 ("See our full DIY vs professional comparison") and #9 ("Compare website builders side-by-side"). 3) Update case studies to 2026 timeframe. 4) Add external links to NZ stats sources.
- **Disposition:** **Keep as Pillar 1**. Minor enhancements needed.

---

## Best Website Design for Small Businesses in 2026

- **What it's about:** High-level overview of 7 design principles (value proposition, mobile-first, speed, CTAs, social proof, layout, SEO) that make small business websites effective.
- **Who it targets:** Small business owners curious about good web design. Broad audience, NZ implied but not strongly present.
- **Search intent:** Informational — early-funnel design education.
- **Funnel stage:** Awareness.
- **Key sections:** Single intro paragraph, 7 H3 subsections (each 2-3 sentences), "Examples" section (just a link), closing CTA.
- **What it does well:** Clear structure. Correct principles. Title matches keyword.
- **What it lacks:** Depth (only ~400 words). Zero real examples. Zero screenshots. Zero NZ-specific references beyond one stat. Zero data points. Zero links to other blog posts. No FAQ. No comparison table. No case study. No tool embed. No lead calculator.
- **How to improve:** Expand to 2,000+ words. Add real NZ before/after examples with screenshots. Add data ("mobile traffic accounts for X% in NZ"). Add cross-links to #10 (lead gen) and #7 (SEO). Embed a tool. Add FAQ. Focus content on **visual design** specifically (typography, color, layout, imagery) to avoid overlap with #10's conversion content.
- **Disposition:** **Expand to Pillar 2** (Web Design for Small Business).

---

## Do Small Businesses Need a Website in 2026? (The Real Answer)

- **What it's about:** Argumentative piece making the case that websites are still essential despite social media prevalence. Covers owned vs rented digital assets, consequences of no website, and affordability.
- **Who it targets:** NZ small business owners who haven't invested in a website. Fence-sitters, especially older small business owners or those relying on Facebook.
- **Search intent:** Informational — awareness-stage question.
- **Funnel stage:** Awareness.
- **Key sections:** Short yes answer, Facebook/Instagram counterargument (4 bullets), consequences without a website (4 bullets), affordability note, bottom line.
- **What it does well:** Directly answers the search query in the first paragraph. ROI calculator embed is smart for this audience. Lead calculator enabled.
- **What it lacks:** Depth (~350 words). No NZ-specific statistics. No industry-specific examples. No cost breakdown. No FAQ. No cross-links to any blog posts. No case study. Stat ("97% of consumers") is generic with no source. No before/after or business outcome data.
- **How to improve:** Expand to 1,500+ words. Add NZ MBIE digital adoption data. Add 3 industry examples (tradie, café, accountant). Add cost section linking to #1. Add FAQ section. Cross-link to #1 (cost), #8 (DIY vs pro), #2 (design principles).
- **Disposition:** **Expand as Cluster post** under Pillar 2 (Web Design).

---

## How to Get Customers From Your Website (Proven Strategy)

- **What it's about:** 5-step framework for turning website visitors into customers: SEO, first impressions, trust, CTAs, lead capture.
- **Who it targets:** Business owners with existing websites that don't convert.
- **Search intent:** Informational — same intent as Post #10.
- **Funnel stage:** Awareness.
- **Key sections:** 1 paragraph on why websites fail, 5-step framework (each 2-3 sentences), self-promotion CTA.
- **What it does well:** Clean framework structure. ToolEmbed (conversion-rate-estimator) is relevant.
- **What it lacks:** Everything. ~370 words. No examples. No NZ references. No data. No case studies. No cross-links. Completely superseded by Post #10 which covers the same topic at 4x the depth with 6 blog cross-links, real case study, and interactive tools.
- **How to improve:** Do not improve. Redirect to #10.
- **Disposition:** **Merge into Post #10. 301 redirect.**

---

## Website for Cleaning Business NZ — Get More Bookings Online

- **What it's about:** Why cleaning businesses need a website, what customers search for, 6 essential website features for cleaners, and a brief Christchurch case study.
- **Who it targets:** NZ cleaning business owners — house cleaning, commercial cleaning, end of tenancy.
- **Search intent:** Commercial — cleaning business owner looking for a website to generate bookings.
- **Funnel stage:** Decision.
- **Key sections:** Why cleaners need a website, customer search terms list, 6-point requirements list, Everclean Christchurch case study (40+ monthly enquiries), pricing CTA ($1,000).
- **What it does well:** Correct niche targeting. Good keyword match. Relevant search terms list. One real case study. Lead Loss Calculator embedded. Direct pricing CTA.
- **What it lacks:** Depth (~340 words). Case study is only 2 sentences. No before/after screenshots. No pricing comparison. No FAQ. No cross-links to other posts. No Google review strategy. No online booking integration guidance.
- **How to improve:** Expand to 1,500+ words. Add detailed case study with specific numbers and timeline. Add pricing table. Add before/after gallery. Add FAQ section (5+ questions) with FAQ schema. Cross-link to #1 (cost), #6 (tradies — related niche), #7 (SEO). Add section on online booking tools.
- **Disposition:** **Expand as Cluster post** under Pillar 5 (Service Verticals).

---

## Tradie Website NZ: How Auckland Tradies Get More Jobs Online in 2026

- **What it's about:** Comprehensive guide covering why tradies need websites, real search volume data, 6 high-converting website features, local SEO strategy, pricing, real results, and common mistakes.
- **Who it targets:** NZ tradies — plumbers, electricians, builders, roofers, landscapers, painters. Primary focus: Auckland, but references Christchurch, Wellington.
- **Search intent:** Commercial — tradie actively considering a website investment.
- **Funnel stage:** Consideration → Decision.
- **Key sections:** Word-of-mouth limitation argument, NZ search volume data (6 figures), 6 conversion features (homepage, service pages, gallery, click-to-call, reviews, GBP), tradie SEO strategy (5 tactics), cost breakdown (4 options), 2 case studies (plumber: 25 enquiries; electrician: 340% GBP increase), 5 mistakes list, closing CTA.
- **What it does well:** Depth (~1,300 words). Specific NZ search volume data. Two case studies with concrete numbers. Industry-specific language ("on the tools", "quote requests"). Multiple callout boxes. Strong NZ localisation (NoCowboys, Builderscrack). Lead Loss Calculator embedded. Good CTA alignment (tradie sees cost → see packages).
- **What it lacks:** FAQ section (huge missed opportunity for "how much does a tradie website cost" rich snippets). No trade-specific breakdowns (plumber vs electrician vs builder as separate sections). No cross-links to other blog posts. No comparison table format. No external links to trade directories.
- **How to improve:** Add FAQ section with FAQ schema (6+ questions). Add 2-3 blog cross-links (#1, #5, #7). Add trade-specific subsections or plan dedicated posts. Add screenshot examples.
- **Disposition:** **Keep as Pillar 5** (Tradies & Service Verticals).

---

## SEO for Small Business NZ — A Beginner's Guide to Ranking on Google

- **What it's about:** Beginner-level introduction to SEO: definition, why it matters, 6 basics (keyword research, on-page SEO, GBP, speed, mobile, internal linking), timeline expectations.
- **Who it targets:** NZ small business owners with zero SEO knowledge.
- **Search intent:** Informational — educational, awareness-stage.
- **Funnel stage:** Awareness.
- **Key sections:** What is SEO definition, why it matters (page 1 stat), 6 basics (each 2-4 sentences), "3-6 months" timeline note, CTA.
- **What it does well:** Title/keyword alignment. Correct fundamentals covered. References specific NZ city examples ("plumber Christchurch").
- **What it lacks:** Depth (~470 words). No tool embeds (despite SEO audit tool at `/tools/seo-audit`). No case studies. No NZ directory listings (Yellow, Finda, NoCowboys). No screenshot examples. No FAQ. No Google Search Console guidance. No link building section. No content strategy section. No cross-links to other blog posts.
- **How to improve:** Expand to 2,500+ words. Add `<ToolEmbed slug="seo-audit" />`. Add NZ directory listing section. Add Google Search Console setup walkthrough. Add link building basics. Add FAQ section with FAQ schema. Cross-link to #6 (tradie SEO success), #10 (converting SEO traffic to leads), #1 (cost of SEO setup in pricing).
- **Disposition:** **Expand to Pillar 3** (SEO for NZ Small Business).

---

## DIY Website vs Professional Website — Which Is Right for Your Business?

- **What it's about:** Pros/cons comparison of DIY website builders (Wix, Squarespace, WordPress.com) vs professionally built websites, with ROI analysis and decision guidance.
- **Who it targets:** NZ business owners weighing the build-vs-buy decision.
- **Search intent:** Informational — consideration-stage comparison.
- **Funnel stage:** Consideration.
- **Key sections:** Intro, DIY pros/cons (3 pros, 6 cons), professional pros/cons (6 pros, 2 cons), ROI calculation, when DIY works, when to go pro, CTA.
- **What it does well:** Clear pros/cons structure. ROI calculation with NZ minimum wage reference. Honest about when DIY is appropriate.
- **What it lacks:** No comparison table (the single most important element for this query type). No cost-over-time data (Post #9 has this but #8 doesn't). No speed or SEO benchmark data. No NZ examples. No FAQ. No cross-links to #1 or #9.
- **How to improve:** Rewrite to focus on the **decision framework** only: when to DIY, when to hire, ROI model, time cost, opportunity cost. Remove platform-specific reviews (defer to #9). Add comparison table. Add NZ case study. Cross-link to #1 (full pricing) and #9 (platform comparison). Expand to 1,200+ words.
- **Disposition:** **Reposition as Cluster** under Pillar 1 (Website Cost).

---

## Best Website Builder for Small Business NZ (2026 Comparison)

- **What it's about:** Head-to-head comparison of 5 options (Wix, Squarespace, Shopify, WordPress, Custom/Next.js) for NZ businesses, with 3-year cost comparison table.
- **Who it targets:** NZ small business owners deciding which platform to use.
- **Search intent:** Informational — consideration-stage platform research.
- **Funnel stage:** Consideration.
- **Key sections:** Quick verdict, 5 platform reviews (each 4-6 bullet points), 3-year cost comparison table, recommendation.
- **What it does well:** Useful cost comparison table (Custom = $1,000 vs Squarespace = $1,440 over 3 years). NZD pricing. Clear verdict. Good keyword match.
- **What it lacks:** Feature comparison table (speed, SEO, flexibility, support, learning curve). No per-platform NZ examples. No FAQ. No cross-links to #1 or #8. Need deeper per-platform analysis.
- **How to improve:** Expand to 1,500+ words. Add feature comparison matrix alongside cost table. Add speed benchmark data. Add per-platform NZ use case example. Add FAQ with FAQ schema. Cross-link to #1 (deeper pricing) and #8 (the build-vs-buy decision).
- **Disposition:** **Expand as Cluster** under Pillar 1 (Website Cost).

---

## How to Get More Leads From Your Website in 2026 (Without Paying for Ads)

- **What it's about:** The blog's most comprehensive guide. Diagnoses why NZ business websites fail at conversion, then provides 10 specific, actionable lead generation tactics with NZ examples, compound effect math, priority checklist, and a detailed Christchurch case study.
- **Who it targets:** NZ small business owners across all industries who have websites but aren't getting enquiries. Secondary: tradies, service businesses, ecommerce.
- **Search intent:** Informational — mid-funnel user looking for tactical advice.
- **Funnel stage:** Consideration.
- **Key sections:** Conversion gap diagnosis (5 common problems), 10 detailed tactics (each 100-150 words), compound effect math (2% → 6% = 3x leads), priority checklist (7-step order), Christchurch cleaning business case study (400 visitors, 3 → 22 enquiries), ecommerce note, closing CTA.
- **What it does well:** Everything. Depth (~1,500 words). 10 detailed, actionable tactics. 12 internal links (6 blog cross-links). Lead Loss Calculator embedded. Real case study with before/after numbers. Compound math creates urgency. NZ-specific throughout. Multiple CTA placements. Links to pricing, audit, contact, services, and 6 other blog posts. This is the blog's strongest post.
- **What it lacks:** FAQ section. `dateModified` not passed to schema despite `UPDATED` being defined. No downloadable resource (checklist PDF would be a strong lead magnet). No external authoritative links.
- **How to improve:** 1) Pass `dateModified: UPDATED` to `articleSchema()`. 2) Add FAQ section with `faqSchema()`. 3) Add downloadable checklist as a dedicated lead magnet. 4) Consider adding an infographic of the 10 tactics.
- **Disposition:** **Keep as Pillar 4** (Lead Generation). Absorb Post #4.

---

# Priority Actions

## Quick Wins (< 30 minutes each)

| # | Action | File(s) | Impact |
|---|--------|---------|--------|
| 1 | **Add FAQ schema to Post #1.** Import `faqSchema` from `schema.js`. Create FAQ array from the 6 existing H3 question/answer pairs. Add to `schemas` array. | `app/blog/how-much-does-a-website-cost-in-nz/page.tsx` | Rich snippet eligibility for high-value pricing queries |
| 2 | **Pass `dateModified` to Post #10 schema.** Change `articleSchema({ ... datePublished: DATE })` to `articleSchema({ ... datePublished: DATE, dateModified: UPDATED })`. | `app/blog/how-to-get-more-leads-from-your-website/page.tsx` | Freshness signal in Google SERP |
| 3 | **Add `<ToolEmbed slug="seo-audit" />` to Post #7.** Insert after the "Site Speed" section. | `app/blog/seo-for-small-business-nz/page.tsx` | Tool engagement, conversion path, user retention |
| 4 | **Add blog cross-links to Post #6 (Tradies).** Insert 3 links: to #1 ("full pricing breakdown"), #5 ("cleaning business websites"), #7 ("SEO guide"). Use contextual anchor text within existing paragraphs. | `app/blog/website-for-tradies-nz/page.tsx` | Internal link equity, cross-pollination |
| 5 | **Add blog cross-links to Posts #2, #3, #5, #7, #8, #9.** Each needs 2-3 contextual links to other blog posts. Follow the link map in the audit. | 6 post files | Fixes the biggest structural gap |
| 6 | **Add `category` field to `contentPlan` entries.** E.g., `category: 'pricing'`. No UI changes needed yet — prepares data for future taxonomy routes. | `lib/seo-data.js` | Structural preparation for scaling |

## Structural Fixes (1–3 hours each)

| # | Action | Scope | Impact |
|---|--------|-------|--------|
| 7 | **Redirect Post #4 → Post #10.** Remove from `contentPlan`. Create 301 redirect in `next.config.js` or `middleware.ts`. Verify no broken links. | `seo-data.js`, `next.config.js`, remove post directory | Eliminates cannibalisation, consolidates authority |
| 8 | **Expand Post #5 (Cleaning) to 1,500+ words.** Add: detailed case study (timeline, specific numbers, before/after), pricing table, FAQ section with `faqSchema()`, cross-links to #1, #6, #7, online booking guidance, cleaning industry NZ stats. | `app/blog/website-for-cleaning-business-nz/page.tsx` | Rank improvement for niche commercial keyword |
| 9 | **Expand Post #3 (Need Website) to 1,500+ words.** Add: NZ digital adoption stats (MBIE), 3 industry-specific examples, cost section linking to #1, FAQ section, cross-links to #1, #2, #8. | `app/blog/do-small-businesses-need-a-website/page.tsx` | Rank improvement for awareness keyword |
| 10 | **Differentiate Posts #8 and #9.** Rewrite #8 as pure decision framework (remove platform reviews). Expand #9 with feature matrix and per-platform analysis. Cross-link between them. | 2 post files | Resolves second cannibalisation risk |
| 11 | **Implement category taxonomy.** Add `category` field to `contentPlan`. Create `/blog/category/[slug]/page.tsx` with filtered post grid. Add category links to blog index. | `seo-data.js`, new route | Improves navigation, crawlability, topical signals |
| 12 | **Add FAQ schema to Posts #6, #9, and new expanded posts.** Use existing `faqSchema()`. Each post needs 5-8 industry-specific FAQ items. | Multiple post files | Rich snippet eligibility across the blog |

## Scaling Strategy (Multi-week)

| # | Action | Scope | Impact |
|---|--------|-------|--------|
| 13 | **Expand Posts #2 and #7 into full pillars.** #2 → 2,000+ word visual design guide with NZ screenshots. #7 → 2,500+ word SEO pillar with NZ directories, Search Console, link building, case studies. | 2 posts, major rewrites | Creates 2 new pillar pages competing for high-volume keywords |
| 14 | **Launch 6 service vertical posts.** Plumber NZ, Electrician NZ, Builder NZ, Landscaper NZ, Restaurant NZ, Accountant NZ — each modeled on Post #6's depth and structure. Add each to `contentPlan`, sitemap, and link them from Pillar 5. | 6 new posts + `seo-data.js` updates | Major expansion of commercial keyword coverage. Each targets a specific industry with conversion-ready content. |
| 15 | **Launch SEO cluster posts.** Google Business Profile NZ, Local SEO for Tradies, How to Get Google Reviews, Schema Markup Guide. Each links to Pillar 3 (#7). | 4 new posts | Builds topical authority in SEO cluster |
| 16 | **Launch cost/comparison cluster posts.** Website Maintenance Costs NZ, What to Look for in a Website Quote, WordPress vs Custom Website NZ, Shopify vs WooCommerce NZ. Each links to Pillar 1 (#1). | 4 new posts | Deepens pricing/comparison cluster |
| 17 | **Add RSS feed.** Create `/app/blog/feed.xml/route.ts` that generates RSS from `contentPlan`. | 1 new file | Syndication, newsletter automation |
| 18 | **Add author page.** Create `/app/about/zachariah-pini/page.tsx` with Person schema, author bio, headshot, all posts list. Link from every blog post's author bio. | 1 new page + bio component update | E-E-A-T signal |
| 19 | **Establish publishing cadence.** 2 posts/month targeting the cluster topics above. Priority order: service verticals first (highest commercial intent), then SEO cluster, then cost/comparison cluster. | Ongoing | Compounds topical authority over time |
| 20 | **Build a blog-level `CollectionPage` schema** for `/blog` and each future category archive page. | `app/blog/page.tsx` | Improved SERP visibility for blog landing pages |
