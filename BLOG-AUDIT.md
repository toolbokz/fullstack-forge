# Blog Audit — Fullstack Forge

**Audit Date:** 4 April 2026  
**Scope:** https://fullstack-forge.netlify.app/blog (full blog architecture, all 10 posts, SEO, conversions, internal linking)

---

# Blog Audit Summary

## Overall Positioning
The blog targets NZ small business owners, tradies, and service businesses with content focused on web design, SEO, lead generation, and website pricing. All content is authored by Zachariah Pini (Hamilton-based). The positioning is clear: "we build $1,000–$2,000 websites that generate leads — not just look pretty." Every post funnels toward the free website audit, pricing page, or contact form.

## Strengths
1. **Consistent conversion framework** — Every post uses the `BlogArticleLayout` component with a 10-section funnel: Hero → Proof Bar → Featured Image → Article Body → Author Bio → Mid CTA → Lead Calculator → Lead Form → Related Content → End CTA. This is well-engineered.
2. **Automated internal linking engine** — The `internal-links.ts` system auto-generates Related Posts, Service Links, Tool Links, and Pillar Links for every post. No post is truly orphaned at the UI level.
3. **Strong technical SEO foundation** — Every post has: Article schema, BreadcrumbList schema, OG tags, Twitter cards, canonical URLs, proper `<h1>`, and Unsplash images with alt text.
4. **NZ localisation** — Pricing in NZD, GST references, specific city names (Auckland, Christchurch, Hamilton), NZ-specific platforms (NoCowboys, Builderscrack, Trade Me), and `.co.nz` domain references.
5. **Clear topic-service alignment** — Each blog post's `linksTo` field maps to specific service/pillar pages, creating a coherent silo structure.
6. **Embedded interactive tools** — Posts use `ToolEmbed` to surface Lead Loss Calculator, ROI Calculator, Pricing Estimator, and Conversion Rate Estimator inline.
7. **Sitemap includes all blog URLs** — All 10 posts are present in `sitemap.xml` with monthly changefreq and 0.7 priority.

## Weaknesses
1. **5 of 10 posts are thin** — Posts #2, #3, #4, #5, #7 are estimated at 450–700 words. Google's helpful content system penalises thin content that doesn't comprehensively answer the query.
2. **No FAQ schema on any post** — The `faqSchema()` function exists in `schema.js` but is never called from any blog post, even the ones that have FAQ sections (Post #1 has 6 FAQ questions with no FAQ schema).
3. **No `dateModified` in Article schema** — Post #10 has `UPDATED = '2026-03-28'` but the `articleSchema()` call doesn't pass `dateModified`. No other post passes it either.
4. **Extremely weak blog-to-blog linking** — Only Post #1 links to Post #6, and Post #10 links to 6 other posts. The remaining 8 posts link to zero other blog posts in their body copy. The auto-generated `RelatedPosts` component provides some links but these are in a footer section with lower SEO weight.
5. **No categories, tags, or archive pages** — Content is labelled "Guide" or "Article" on the index page but these aren't clickable categories. No taxonomy exists.
6. **No pagination** — All 10 posts are shown on one page. This works now but won't scale past ~15 posts.
7. **No RSS feed** — Missing for syndication and podcast/newsletter integrations.
8. **No `dateModified`, no author page, no author schema URI** — Author is hardcoded as "Zachariah Pini" with a link to `/about` but there's no dedicated author page or Person schema URL.
9. **Heavy content overlap between Posts #4, #8, and #10** — "How to Get Customers", "DIY vs Professional", and "How to Get More Leads" all cover conversion/design principles with significant conceptual overlap.

## Biggest SEO Gaps
| Gap | Impact | Effort |
|-----|--------|--------|
| No FAQ schema on any post | High — losing rich snippet opportunities for featured snippets | Low |
| 5 thin posts under 700 words | High — likely suppressed in rankings by comprehensive competitors | Medium |
| Missing `dateModified` in schema | Medium — Google uses freshness signals | Low |
| No blog-to-blog contextual links | High — wastes link equity and reduces crawlability | Medium |
| No keyword in H1 for 3 posts | Medium — H1 should match target keyword | Low |
| No author page / Person entity | Low-Medium — E-E-A-T signal | Medium |

## Biggest Conversion Gaps
| Gap | Impact |
|-----|--------|
| Thin posts (#2, #3, #4, #5, #7) don't build enough trust to convert | High |
| No pricing mentioned in 5 of 10 posts | Medium |
| No case study / results data in 6 of 10 posts | High |
| Lead magnet is same across all posts (free audit) — no variety | Medium |
| No exit-intent popup or sticky CTA on scroll | Medium |
| No testimonials embedded in blog posts | Medium |

---

# Blog Index Audit

| Element | Finding |
|---------|---------|
| **URL** | `/blog` |
| **Page title** | `Blog — Fullstack Forge \| Website Tips for NZ Small Businesses` |
| **Meta description** | "Practical guides and insights on website design, SEO, and lead generation for small businesses in New Zealand." |
| **H1** | "Website Tips for NZ Small Businesses" |
| **Intro copy** | "Practical guides on web design, SEO, and turning your website into a lead-generating machine." |
| **Posts shown** | 10 (all posts, no pagination) |
| **Card structure** | Unsplash image → Category label ("Guide" or "Article") → H2 title → Excerpt (from `contentPlan.description`) → Photographer credit → "Read more →" |
| **Categories/labels** | "Guide" (for `intent: 'commercial'`) and "Article" (for `intent: 'informational'`). Not clickable. |
| **Featured images** | Unsplash API images fetched at build time using `imageQuery` per article. Dynamic, not static. |
| **Excerpt usage** | Uses `description` field from `contentPlan` in `seo-data.js`. Short (1-2 sentences). |
| **CTA blocks** | 1 CTA section after post grid: "Ready to Grow Your Business Online?" → "Get My Free Audit" button linking to `/#audit`. |
| **Footer links** | Full sitewide footer: Services (4), Free Tools (5), Resources (4), Web Design by City (6), SEO by City (6), expandable "All Service Areas" accordion (14 cities × 5 services = 70 links). |
| **Indexable** | Yes — no `noindex` directives |
| **Canonical** | `https://fullstack-forge.netlify.app/blog` |
| **Schema** | BreadcrumbList only (Home → Blog). No CollectionPage or Blog schema. |
| **OG tags** | Yes — title, description, URL, type: "website", image: `/assets/fallback-image.png` |
| **Twitter tags** | Yes — summary_large_image card |
| **Grid layout** | 2-column on desktop, 1-column on mobile |
| **Pagination** | None |
| **Categories/tags pages** | None |
| **Author pages** | None |
| **RSS feed** | Not detected |

### Blog Index Issues
1. No `BlogPosting` or `CollectionPage` schema — missed opportunity for search appearance
2. H1 "Website Tips for NZ Small Businesses" doesn't contain a high-value keyword like "web design blog NZ"
3. No visible publish dates on cards — freshness signal hidden from users
4. No word count or read time shown on cards
5. Meta description (155 chars) is adequate but could be more compelling
6. No search/filter functionality for posts

---

# Post Inventory Table

| # | Title | URL | Primary Keyword | Intent | Est. Words | CTA? | In-Content Blog Links | Conversion (1–10) | SEO (1–10) | Priority |
|---|-------|-----|-----------------|--------|-----------|------|----------------------|-------------------|------------|----------|
| 1 | How Much Does a Website Cost in NZ? 2026 Pricing Guide | `/blog/how-much-does-a-website-cost-in-nz` | website cost NZ | Commercial | ~2,300 | Yes (4 CTAs) | 1 (→ tradies) | 9 | 8 | Low |
| 2 | Best Website Design for Small Businesses in 2026 | `/blog/best-website-design-for-small-businesses` | best website design for small businesses | Informational | ~600 | Yes (3 CTAs) | 0 | 4 | 5 | High |
| 3 | Do Small Businesses Need a Website in 2026? (The Real Answer) | `/blog/do-small-businesses-need-a-website` | do small businesses need a website 2026 | Informational | ~500 | Yes (3 CTAs) | 0 | 5 | 5 | High |
| 4 | How to Get Customers From Your Website (Proven Strategy) | `/blog/how-to-get-customers-from-your-website` | how to get customers from website | Informational | ~550 | Yes (3 CTAs) | 0 | 4 | 4 | High |
| 5 | Website for Cleaning Business NZ — Get More Bookings Online | `/blog/website-for-cleaning-business-nz` | website for cleaning business NZ | Commercial | ~500 | Yes (3 CTAs) | 0 | 5 | 5 | High |
| 6 | Tradie Website NZ: How Auckland Tradies Get More Jobs Online in 2026 | `/blog/website-for-tradies-nz` | tradie website New Zealand | Commercial | ~1,800 | Yes (4 CTAs) | 0 | 8 | 7 | Med |
| 7 | SEO for Small Business NZ — A Beginner's Guide to Ranking on Google | `/blog/seo-for-small-business-nz` | SEO for small business NZ | Informational | ~650 | Yes (3 CTAs) | 0 | 4 | 5 | High |
| 8 | DIY Website vs Professional Website — Which Is Right for Your Business? | `/blog/diy-vs-professional-website` | DIY website vs professional website | Informational | ~700 | Yes (3 CTAs) | 0 | 5 | 5 | Med |
| 9 | Best Website Builder for Small Business NZ (2026 Comparison) | `/blog/best-website-builder-for-small-business-nz` | best website builder for small business NZ | Informational | ~750 | Yes (3 CTAs) | 0 | 5 | 6 | Med |
| 10 | How to Get More Leads From Your Website in 2026 (Without Paying for Ads) | `/blog/how-to-get-more-leads-from-your-website` | how to get more leads from website | Informational | ~2,500 | Yes (4 CTAs) | 6 (→ #1,2,5,6,7,8) | 9 | 8 | Low |

---

# Individual Post Audits

---

## Post 1: How Much Does a Website Cost in NZ? 2026 Pricing Guide

### Core Page Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/how-much-does-a-website-cost-in-nz` |
| Slug | `how-much-does-a-website-cost-in-nz` |
| Title tag | "How Much Does a Website Cost in NZ? 2026 Pricing Guide — Fullstack Forge" |
| Meta description | "Complete NZ website pricing for 2026. Compare costs for small business, tradie, and ecommerce websites — from DIY to agency. Transparent pricing in NZD." |
| Canonical | `https://fullstack-forge.netlify.app/blog/how-much-does-a-website-cost-in-nz` |
| Robots directives | None (indexable) |
| H1 | "How Much Does a Website Cost in NZ? 2026 Pricing Guide" |
| Publish date | 2025-01-15 |
| Modified date | Not passed to schema |
| Author | Zachariah Pini |
| Category/label | "Guide" (commercial intent) |
| Featured image | Unsplash image (query: "website design pricing"), alt: article title |

### Content Structure
| Element | Detail |
|---------|--------|
| Word count | ~2,300 |
| Intro length | ~80 words (quick answer format) |
| H2s | "Quick Answer: Website Cost in NZ (2026)", "Website Design Cost NZ: Full Pricing Breakdown", "Website Cost by Type: What NZ Businesses Actually Pay", "How to Calculate Your Website Cost", "What Actually Affects Website Cost in NZ", "Ongoing Website Costs in NZ: What You'll Pay After Launch", "Shopify vs WordPress: Website Cost Comparison NZ", "Real NZ Examples: What Businesses Actually Paid", "Website Cost NZ: Frequently Asked Questions", "Get Transparent Website Pricing — No Surprises" |
| H3s | "Small Business Website Cost NZ", "Tradie Website Cost NZ", "Ecommerce Website Cost NZ", "WordPress Cost NZ", "Shopify Cost NZ", "Modern Static Sites (Next.js / Jamstack)", "Auckland Tradie — $1,000", "Auckland Service Business — $1,500", "NZ Ecommerce Store — $2,000", 6× FAQ question headings |
| FAQ section | Yes — 6 questions under H3 headings |
| Conclusion | "Get Transparent Website Pricing — No Surprises" with package price list |
| CTA sections | Hero ("Get a Free Website Audit →"), callout box ("Request pricing →"), mid-CTA ("Want a Transparent Quote for Your Website?"), lead form, end CTA |
| Tables | 2 tables: Pricing breakdown (5 rows), Ongoing costs (6 rows) |
| Intent | Commercial — user is comparing prices, ready to buy |
| Primary keyword | "website cost NZ" |
| Secondary keywords | website design cost NZ, how much does a website cost in New Zealand, small business website cost NZ, tradie website cost NZ, ecommerce website cost NZ |
| NZ localisation | NZD pricing, GST mentions, .co.nz domains, Auckland/Christchurch examples, NZ platform references |
| Industry relevance | Tradies, cleaners, service businesses, ecommerce |

### On-Page SEO
| Check | Result |
|-------|--------|
| Title contains keyword | ✅ "Website Cost in NZ" in title |
| H1 aligns with title | ✅ Identical |
| Single H1 | ✅ |
| Keyword in intro | ✅ "website costs anywhere from" in first paragraph |
| Internal links (in-content) | 5 — /affordable-websites-nz, /blog/website-for-tradies-nz, /ecommerce-websites-nz, /#contact, /#audit |
| External links | 0 |
| Anchor text quality | Good — descriptive: "website builds from $1,000", "tradie website in NZ", "ecommerce packages start at $1,500" |
| Image alt coverage | ✅ Hero, mid, bottom images all have descriptive alt text |
| Article schema | ✅ Present |
| FAQ schema | ❌ Missing (6 FAQ items with no `faqSchema()` call) |
| Breadcrumb schema | ✅ Present (Home → Blog → Title) |
| OG tags | ✅ title, description, url, type: article, image |
| Twitter tags | ✅ summary_large_image |

### Conversion Analysis
| Element | Finding |
|---------|---------|
| CTAs used | "Get a Free Website Audit →" (hero), "Request pricing →" (callout), "Want a Transparent Quote" (mid CTA), "Get My Free Audit" (lead form), "Ready to Get More Customers From Your Website?" (end CTA) |
| CTA placement | Top (hero), mid (callout + CTA section), bottom (lead form + end CTA) — excellent |
| CTA matches intent | ✅ User researching cost → offer transparent quote / pricing |
| Links to pricing | ✅ Via /affordable-websites-nz |
| Links to contact | ✅ /#contact |
| Links to audit | ✅ /#audit |
| Links to services | ✅ /ecommerce-websites-nz |
| Links to blog | ✅ /blog/website-for-tradies-nz |
| Links to tools | ✅ Pricing Estimator embedded via ToolEmbed |
| Lead magnet | Free website audit |
| Lead calculator | ✅ showLeadCalculator: true |
| Likely to generate enquiries | ✅ Very high — commercial intent + transparent pricing + multiple CTAs |

### Content Quality
| Dimension | Assessment |
|-----------|------------|
| Thin or comprehensive | **Comprehensive** — detailed pricing tables, real examples, FAQ, platform comparisons |
| Examples | ✅ 3 real NZ examples with specific ROI numbers |
| NZ-specific content | ✅ Strong — NZD prices, GST, .co.nz, city-specific examples |
| Original insight | ✅ "Pro tip" about maintenance fees, honest comparison including own pricing |
| Repetitive sections | Minor overlap between "Cost by Type" and pricing table |
| Overlaps with other posts | Some overlap with Post #8 (DIY vs Professional) and #9 (Best Builder) on platform pricing |
| Missing | External links to authoritative NZ stats sources, comparison with more NZ-specific agencies, schema FAQ markup |

---

## Post 2: Best Website Design for Small Businesses in 2026

### Core Page Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/best-website-design-for-small-businesses` |
| Slug | `best-website-design-for-small-businesses` |
| Title tag | "Best Website Design for Small Businesses in 2026 — Fullstack Forge" |
| Meta description | "What makes a great small business website? Learn the design principles that actually generate leads and customers." |
| Canonical | `https://fullstack-forge.netlify.app/blog/best-website-design-for-small-businesses` |
| Robots | None (indexable) |
| H1 | "Best Website Design for Small Businesses in 2026" |
| Publish date | 2025-01-20 |
| Modified date | Not set |
| Author | Zachariah Pini |
| Category | "Article" (informational) |
| Featured image | Unsplash (query: "modern website design") |

### Content Structure
| Element | Detail |
|---------|--------|
| Word count | ~600 |
| Intro | ~40 words |
| H2s | "What Makes a 'Good' Small Business Website?", "The 7 Principles of High-Converting Small Business Design", "Examples That Get It Right", "Ready to Build Yours?" |
| H3s | "1. Clear Value Proposition Above the Fold", "2. Mobile-First Design", "3. Fast Load Times", "4. Strategic CTAs", "5. Social Proof and Trust Signals", "6. Simple, Scannable Layout", "7. SEO Built In" |
| FAQ | None |
| Tables | None |
| Intent | Informational |
| Primary keyword | "best website design for small businesses" |
| Secondary | small business website design, high-converting website design, website design principles |
| NZ localisation | Weak — only "60% of NZ web traffic" mention. No NZ-specific examples. |
| Industry relevance | General small business |

### On-Page SEO
| Check | Result |
|-------|--------|
| Title contains keyword | ✅ "Best Website Design for Small Businesses" |
| H1 aligns | ✅ |
| Single H1 | ✅ |
| Keyword in intro | ❌ Not in first paragraph ("small business website" appears but not exact keyword) |
| Internal links (body) | 2 — /#solutions, /website-design-for-small-business |
| External links | 0 |
| Anchor text | OK — "live demos", "websites for small businesses" |
| Image alts | ✅ |
| Article schema | ✅ |
| FAQ schema | N/A (no FAQ content) |
| OG/Twitter | ✅ |

### Conversion Analysis
| Element | Finding |
|---------|---------|
| CTAs | Hero ("Get a Free Website Audit →"), mid CTA ("Want a Website That Actually Converts?"), lead form, end CTA |
| CTA placement | Top, mid, bottom |
| CTA matches intent | Partially — user seeking design info, CTA offers audit/build |
| Links to pricing | ❌ No direct pricing link in content |
| Links to blog posts | ❌ None |
| Lead calculator | ❌ Not enabled |
| Likely to generate enquiries | Low-moderate — content is too thin to establish authority |

### Content Quality
| Dimension | Assessment |
|-----------|------------|
| Thin or comprehensive | **Thin** — 7 principles each get 2-3 sentences. No depth, no examples, no data. |
| Examples | ❌ Links to "live demos" but doesn't show actual examples in the post |
| NZ-specific | ❌ Very weak NZ signal — essentially generic advice |
| Original insight | ❌ Standard web design advice repeated across thousands of sites |
| Repetitive | No |
| Overlaps | Significant overlap with Post #4 (Get Customers) and #10 (More Leads) on CTAs, trust, mobile design |
| Missing | Real before/after examples, NZ case studies, screenshots, design checklist, competitor analysis, specific data points, links to other blog posts |

---

## Post 3: Do Small Businesses Need a Website in 2026? (The Real Answer)

### Core Page Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/do-small-businesses-need-a-website` |
| Slug | `do-small-businesses-need-a-website` |
| Title tag | "Do Small Businesses Need a Website in 2026? (The Real Answer) — Fullstack Forge" |
| Meta description | "With social media everywhere, do you still need a website? We break down the data and the real impact on revenue." |
| Canonical | `https://fullstack-forge.netlify.app/blog/do-small-businesses-need-a-website` |
| Robots | None (indexable) |
| H1 | "Do Small Businesses Need a Website in 2026? (The Real Answer)" |
| Publish date | 2025-01-25 |
| Modified date | Not set |
| Author | Zachariah Pini |
| Category | "Article" |
| Featured image | Unsplash (query: "small business owner laptop") |

### Content Structure
| Element | Detail |
|---------|--------|
| Word count | ~500 |
| H2s | "The Short Answer: Yes", '"But I Have Facebook/Instagram"', "What Happens Without a Website", "It Doesn't Have to Be Expensive", "The Bottom Line" |
| H3s | None |
| FAQ | None |
| Tables | None |
| Intent | Informational (awareness stage) |
| Primary keyword | "do small businesses need a website 2026" |
| NZ localisation | Weak — "Kiwis" not mentioned, no NZ stats |
| Tool embed | website-roi-calculator |

### On-Page SEO
| Check | Result |
|-------|--------|
| Title contains keyword | ✅ |
| H1 aligns | ✅ |
| Keyword in intro | ✅ "97% of consumers search online" |
| Internal links (body) | 1 — /affordable-websites-nz |
| External links | 0 |
| Article schema | ✅ |
| FAQ schema | N/A |

### Conversion Analysis
| Element | Finding |
|---------|---------|
| CTAs | Hero, mid CTA ("Still On the Fence About Getting a Website?"), lead form, end CTA |
| Links to pricing | ❌ Not directly |
| Links to blog | ❌ None |
| Lead calculator | ✅ enabled |
| Likely to generate enquiries | Low — awareness-stage users rarely convert immediately |

### Content Quality
| Dimension | Assessment |
|-----------|------------|
| Thin or comprehensive | **Thin** — ~500 words covering a topic that competitors write 2,000+ words on |
| Examples | ❌ No specific examples |
| NZ-specific | ❌ Weak — "97% search online" is a global stat, not NZ-specific |
| Original insight | ❌ Standard "yes you need a website" argument |
| Missing | NZ-specific stats (MBIE data, NZ digital economy stats), cost analysis, ROI examples, social proof, links to other blog posts, industry-specific examples |

---

## Post 4: How to Get Customers From Your Website (Proven Strategy)

### Core Page Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/how-to-get-customers-from-your-website` |
| Slug | `how-to-get-customers-from-your-website` |
| Title tag | "How to Get Customers From Your Website (Proven Strategy) — Fullstack Forge" |
| Meta description | "Your website gets traffic but no leads? Here's the exact strategy to turn visitors into paying customers." |
| Canonical | `https://fullstack-forge.netlify.app/blog/how-to-get-customers-from-your-website` |
| H1 | "How to Get Customers From Your Website (Proven Strategy)" |
| Publish date | 2025-02-01 |
| Author | Zachariah Pini |
| Category | "Article" |

### Content Structure
| Element | Detail |
|---------|--------|
| Word count | ~550 |
| H2s | "Why Most Websites Don't Generate Customers", "The 5-Step Website Customer Machine", "The Websites We Build Follow This Exact Framework" |
| H3s | "Step 1: Get Found (SEO)", "Step 2: Make a Strong First Impression", "Step 3: Build Trust Instantly", "Step 4: Make the Next Step Obvious", "Step 5: Capture Leads, Not Just Pageviews" |
| FAQ | None |
| Tables | None |
| Intent | Informational |
| Primary keyword | "how to get customers from website" |
| Tool embed | conversion-rate-estimator |

### On-Page SEO
| Check | Result |
|-------|--------|
| Title keyword | ✅ |
| Internal links (body) | 2 — /, /website-design-for-small-business |
| External links | 0 |
| Article schema | ✅ |

### Conversion Analysis
CTAs at hero, mid, lead form, end. No links to pricing or other blog posts.

### Content Quality
| Dimension | Assessment |
|-----------|------------|
| Thin or comprehensive | **Thin** — 5-step framework with 2-3 sentences each. No depth. |
| Examples | ❌ None |
| NZ-specific | ❌ None |
| Overlaps | **Heavy overlap with Post #10** (More Leads) which covers the same topic in much more detail |
| Missing | Real examples, conversion data, NZ case studies, tool recommendations, links to relevant blog posts |

---

## Post 5: Website for Cleaning Business NZ — Get More Bookings Online

### Core Page Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/website-for-cleaning-business-nz` |
| Slug | `website-for-cleaning-business-nz` |
| Title tag | "Website for Cleaning Business NZ — Get More Bookings Online — Fullstack Forge" |
| Meta description | "How a professional website helps cleaning businesses in NZ generate consistent bookings and grow beyond word-of-mouth." |
| Canonical | `https://fullstack-forge.netlify.app/blog/website-for-cleaning-business-nz` |
| H1 | "Website for Cleaning Business NZ — Get More Bookings Online" |
| Publish date | 2025-02-05 |
| Author | Zachariah Pini |
| Category | "Guide" (commercial) |

### Content Structure
| Element | Detail |
|---------|--------|
| Word count | ~500 |
| H2s | "Why Cleaning Businesses Need a Website", "What Customers Search For", "What Your Cleaning Website Needs", "Real Example: Everclean Christchurch", "Get Started for $1,000" |
| H3s | None |
| FAQ | None |
| Tables | None |
| Intent | Commercial |
| Primary keyword | "website for cleaning business NZ" |
| NZ localisation | ✅ — Christchurch example, NZ search terms, Trade Me reference |
| Tool embed | lead-loss-calculator |

### On-Page SEO
| Check | Result |
|-------|--------|
| Title keyword | ✅ "Website for Cleaning Business NZ" |
| Internal links (body) | 1 — /affordable-websites-nz |
| External links | 0 |
| Article schema | ✅ |

### Conversion Analysis
| Element | Finding |
|---------|---------|
| CTAs | Hero, mid CTA ("Get a Website That Books Cleaning Jobs 24/7"), lead form, end CTA |
| CTA matches intent | ✅ Direct match — cleaning business owner looking for a website |
| Links to pricing | ✅ /affordable-websites-nz |
| Links to blog | ❌ None |
| Lead calculator | ✅ |
| Likely to generate enquiries | Moderate — good intent match but thin content |

### Content Quality
| Dimension | Assessment |
|-----------|------------|
| Thin or comprehensive | **Thin** — ~500 words for a commercial page targeting a specific niche. Competitors likely have 1,500+ words. |
| Examples | 1 brief example (Everclean Christchurch — 40+ monthly enquiries) |
| NZ-specific | ✅ Good — cleaning-specific NZ search terms, Christchurch case study |
| Missing | Before/after screenshots, pricing table, comparison with competitors, service-specific website features, cleaning industry stats for NZ, checklist, FAQ, links to related posts (tradies, small biz) |

---

## Post 6: Tradie Website NZ: How Auckland Tradies Get More Jobs Online in 2026

### Core Page Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/website-for-tradies-nz` |
| Slug | `website-for-tradies-nz` |
| Title tag | "Tradie Website NZ: How Auckland Tradies Get More Jobs Online in 2026 — Fullstack Forge" |
| Meta description | "The complete guide to tradie websites in New Zealand. Learn how plumbers, electricians, and builders use web design and local SEO to get more leads and higher-paying jobs." |
| Canonical | `https://fullstack-forge.netlify.app/blog/website-for-tradies-nz` |
| H1 | "Tradie Website NZ: How Auckland Tradies Get More Jobs Online in 2026" |
| Publish date | 2025-02-10 |
| Author | Zachariah Pini |
| Category | "Guide" (commercial) |

### Content Structure
| Element | Detail |
|---------|--------|
| Word count | ~1,800 |
| Intro | ~150 words — strong hook about Google search volume |
| H2s | "Why Word-of-Mouth Alone Is Costing You Jobs", "Tradie Website NZ: The Search Volume You're Missing", "What Makes a High-Converting Tradie Website", "Tradie SEO New Zealand: How to Rank on Google Locally", "How Much Does a Tradie Website Cost in NZ?", "Real Results: Auckland Tradies Getting More Jobs Online", "5 Mistakes Tradies Make With Their Websites", "Get More Tradie Jobs Online — Starting This Week" |
| H3s | "1. A Homepage That Converts in 5 Seconds", "2. Service Pages Optimised for Local SEO", "3. Photo Gallery of Real Work", "4. Click-to-Call and Simple Contact Form", "5. Google Reviews Front and Centre", "6. Google Business Profile Integration" |
| FAQ | None |
| Tables | None |
| Intent | Commercial |
| Primary keyword | "tradie website New Zealand" |
| Secondary | tradie website NZ, tradie web design, tradie SEO NZ, plumber website Auckland, electrician website NZ |
| NZ localisation | ✅ Excellent — specific search volume data, Auckland/Christchurch/Wellington mentions, NoCowboys/Builderscrack references, NAP, Google Business Profile NZ |
| Industry relevance | ✅ Highly specific — plumbers, electricians, builders, roofers, landscapers, painters |

### On-Page SEO
| Check | Result |
|-------|--------|
| Title keyword | ✅ "Tradie Website NZ" |
| H1 aligns | ✅ |
| Keyword in intro | ✅ "tradie in New Zealand" in first paragraph |
| Internal links (body) | 2 — /affordable-websites-nz (×2), /#contact (×2) |
| External links | 0 |
| Anchor text | Good — "See our tradie website packages", "Get a free SEO audit" |
| Article schema | ✅ |
| FAQ schema | N/A |

### Conversion Analysis
| Element | Finding |
|---------|---------|
| CTAs | Hero, 2× callout boxes, mid CTA ("Want a Website That Actually Gets You Jobs?"), lead form, end CTA |
| CTA matches intent | ✅ Perfect match for tradies looking for a website |
| Links to pricing | ✅ /affordable-websites-nz |
| Lead calculator | ✅ |
| Real results shown | ✅ Plumber 25 enquiries, electrician 340% GBP increase |
| Likely to generate enquiries | ✅ High — strong social proof, specific pricing, clear next steps |

### Content Quality
| Dimension | Assessment |
|-----------|------------|
| Comprehensive | ✅ Good — well-structured, multiple sections, real data |
| Examples | ✅ 2 real examples with specific numbers |
| NZ-specific | ✅ Excellent |
| Original insight | ✅ — search volume data, specific mistakes, GBP integration advice |
| Missing | FAQ section (huge opportunity for featured snippets), more case studies, screenshot examples, specific trade type breakdowns (plumber vs electrician vs builder), comparison table, links to other blog posts |

---

## Post 7: SEO for Small Business NZ — A Beginner's Guide to Ranking on Google

### Core Page Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/seo-for-small-business-nz` |
| Slug | `seo-for-small-business-nz` |
| Title tag | "SEO for Small Business NZ — A Beginner's Guide to Ranking on Google — Fullstack Forge" |
| Meta description | "Learn the SEO basics every small business owner in NZ needs to know to get found on Google." |
| H1 | "SEO for Small Business NZ — A Beginner's Guide to Ranking on Google" |
| Publish date | 2025-02-15 |
| Category | "Article" |

### Content Structure
| Element | Detail |
|---------|--------|
| Word count | ~650 |
| H2s | "What Is SEO?", "Why SEO Matters for NZ Small Businesses", "The SEO Basics Every Business Owner Should Know", "How Long Does SEO Take?", "Need SEO Built Into Your Website?" |
| H3s | "1. Keyword Research", "2. On-Page SEO", "3. Google Business Profile", "4. Site Speed", "5. Mobile Optimization", "6. Internal Linking" |
| FAQ | None |
| Intent | Informational |
| Primary keyword | "SEO for small business NZ" |
| NZ localisation | Moderate — "plumber Christchurch", "accountant Auckland" examples |

### On-Page SEO
| Check | Result |
|-------|--------|
| Title keyword | ✅ "SEO for Small Business NZ" |
| Internal links (body) | 2 — /, /web-design-christchurch |
| External links | 0 |
| Article schema | ✅ |

### Conversion Analysis
No lead calculator. No tool embeds. Mid CTA present. No links to pricing, other blog posts, or tools.

### Content Quality
| Dimension | Assessment |
|-----------|------------|
| Thin or comprehensive | **Thin** — 650 words for "SEO for Small Business NZ" which is a high-competition keyword. Competitors have 3,000+ words. |
| Examples | ❌ No specific examples or case studies |
| NZ-specific | Moderate — some city mentions but no NZ-specific SEO data |
| Missing | Technical SEO section, link building, content strategy, Google Search Console setup, schema markup examples, NZ directory listings, real ranking examples, FAQ, links to other blog posts, tool embeds (SEO audit tool) |

---

## Post 8: DIY Website vs Professional Website — Which Is Right for Your Business?

### Core Page Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/diy-vs-professional-website` |
| Slug | `diy-vs-professional-website` |
| Title tag | "DIY Website vs Professional Website — Which Is Right for Your Business? — Fullstack Forge" |
| Meta description | "Wix, Squarespace, or hiring a pro? We compare cost, quality, and ROI so you can make the right choice." |
| H1 | "DIY Website vs Professional Website — Which Is Right for Your Business?" |
| Publish date | 2025-02-20 |
| Category | "Article" |

### Content Structure
| Element | Detail |
|---------|--------|
| Word count | ~700 |
| H2s | "The Real Comparison", "DIY Website Builders", "Professional Website", "The ROI Question", "When DIY Makes Sense", "When to Go Professional", "The Best of Both Worlds" |
| H3s | "Pros" (×2), "Cons" (×2) |
| FAQ | None |
| Tables | None (missed opportunity for comparison table) |
| Intent | Informational (consideration stage) |
| Primary keyword | "DIY website vs professional website" |

### On-Page SEO
| Check | Result |
|-------|--------|
| Title keyword | ✅ |
| Internal links (body) | 2 — /affordable-websites-nz, / |
| Article schema | ✅ |

### Conversion Analysis
Mid CTA ("Skip the Guesswork"), lead form, end CTA. No links to other blog posts, tools, or pricing page directly.

### Content Quality
| Dimension | Assessment |
|-----------|------------|
| Thin or comprehensive | Moderate — pros/cons format is useful but ~700 words is too short |
| NZ-specific | Weak — "NZ minimum wage" mention, no NZ platform pricing |
| Overlaps | **Heavy overlap with Post #9** (Best Website Builder) and **Post #1** (Website Cost) on platform pricing and ROI |
| Missing | Comparison table, side-by-side feature matrix, speed benchmark data, SEO comparison data, real NZ case study, FAQ, links to related posts (#1, #9) |

---

## Post 9: Best Website Builder for Small Business NZ (2026 Comparison)

### Core Page Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/best-website-builder-for-small-business-nz` |
| Slug | `best-website-builder-for-small-business-nz` |
| Title tag | "Best Website Builder for Small Business NZ (2026 Comparison) — Fullstack Forge" |
| Meta description | "Comparing Wix, Squarespace, Shopify, and custom-built options for NZ small businesses." |
| H1 | "Best Website Builder for Small Business NZ (2026 Comparison)" |
| Publish date | 2025-02-25 |
| Category | "Article" |

### Content Structure
| Element | Detail |
|---------|--------|
| Word count | ~750 |
| H2s | "Quick Verdict", "The Contenders", "Cost Comparison Over 3 Years", "Our Recommendation" |
| H3s | "Wix", "Squarespace", "Shopify", "WordPress.org (Self-Hosted)", "Custom-Built (Next.js / React)" |
| FAQ | None |
| Tables | 1 — 3-year cost comparison (5 rows) |
| Intent | Informational (consideration) |
| Primary keyword | "best website builder for small business NZ" |
| NZ localisation | ✅ — NZD pricing in table and platform reviews |

### On-Page SEO
| Check | Result |
|-------|--------|
| Title keyword | ✅ |
| Internal links (body) | 2 — /affordable-websites-nz, /ecommerce-websites-nz |
| Article schema | ✅ |

### Conversion Analysis
Mid CTA ("Skip the Builder — Get a Custom Website Instead"), lead form, end CTA. Cost comparison table naturally funnels toward custom option.

### Content Quality
| Dimension | Assessment |
|-----------|------------|
| Thin or comprehensive | Moderate — comparison format is good but each builder gets only a bullet list |
| NZ-specific | ✅ NZD pricing, NZ-relevant platforms |
| Overlaps | **Heavy overlap with Post #8** (DIY vs Professional) on platform comparison |
| Missing | Feature comparison table, speed/performance data, SEO comparison, real NZ examples on each platform, FAQ, more in-depth analysis per platform, links to related posts (#1, #8) |

---

## Post 10: How to Get More Leads From Your Website in 2026 (Without Paying for Ads)

### Core Page Data
| Field | Value |
|-------|-------|
| URL | `https://fullstack-forge.netlify.app/blog/how-to-get-more-leads-from-your-website` |
| Slug | `how-to-get-more-leads-from-your-website` |
| Title tag | "How to Get More Leads From Your Website in 2026 (Without Paying for Ads) — Fullstack Forge" |
| Meta description | "Your website gets traffic but no enquiries? Here are 10 proven lead generation tactics NZ small businesses are using right now to turn visitors into paying customers." |
| Canonical | `https://fullstack-forge.netlify.app/blog/how-to-get-more-leads-from-your-website` |
| H1 | "How to Get More Leads From Your Website in 2026 (Without Paying for Ads)" |
| Publish date | 2025-03-01 |
| Modified date | 2026-03-28 (defined as `UPDATED` but **not passed to `articleSchema()`**) |
| Author | Zachariah Pini |
| Category | "Article" |

### Content Structure
| Element | Detail |
|---------|--------|
| Word count | ~2,500 |
| Intro | ~130 words — identifies pain point, establishes conversion gap, promises 10 tactics |
| H2s | "Why Most NZ Business Websites Fail at Lead Generation", "10 Proven Ways to Get More Leads From Your Website", "The Compound Effect: Small Fixes, Massive Results", "Where to Start: A Priority Checklist", "Real Example: A Christchurch Cleaning Business", "For E-Commerce: Lead Generation Looks Different", "Stop Losing Leads — Get a Free Website Audit" |
| H3s | 10× numbered tactics: "Replace 'Contact Us' With a Lead Magnet", "Write Benefit-Driven Headlines", "Add Social Proof Next to Every CTA", "Cut Your Form Fields to the Absolute Minimum", "Make Your CTA Impossible to Miss", "Fix Your Page Speed", "Use Multiple CTAs Per Page", "Build Trust With a Professional Design", "Optimise for Local Search", "Add Live Chat or a Quick-Response Promise" |
| FAQ | None |
| Tables | None |
| Intent | Informational |
| Primary keyword | "how to get more leads from website" |
| Secondary | website lead generation, get more enquiries from website, lead generation NZ small business |
| NZ localisation | ✅ Strong — NZ-specific examples, Christchurch case study, Auckland/Wellington references |

### On-Page SEO
| Check | Result |
|-------|--------|
| Title keyword | ✅ "Get More Leads From Your Website" |
| H1 aligns | ✅ |
| Keyword in intro | ✅ "lead generation tactics" |
| Internal links (body) | **12** — /website-design-for-small-business, /blog/best-website-design-for-small-businesses, /blog/website-for-tradies-nz, /#audit, /blog/seo-for-small-business-nz, /affordable-websites-nz, /blog/diy-vs-professional-website, /web-design-christchurch, /blog/how-much-does-a-website-cost-in-nz, /blog/website-for-cleaning-business-nz, /ecommerce-websites-nz, /#contact |
| External links | 0 |
| Anchor text | Excellent — contextual, descriptive |
| Article schema | ✅ (but `dateModified` not passed despite `UPDATED` being defined) |
| FAQ schema | N/A (no FAQ section) |

### Conversion Analysis
| Element | Finding |
|---------|---------|
| CTAs | Hero, ToolEmbed (lead-loss-calculator inline), mid CTA ("See How Many Leads Your Website Is Losing"), lead form, end CTA |
| CTA placement | Excellent distribution throughout |
| Links to pricing | ✅ /affordable-websites-nz |
| Links to contact | ✅ /#contact |
| Links to audit | ✅ /#audit |
| Links to services | ✅ /website-design-for-small-business, /web-design-christchurch, /ecommerce-websites-nz |
| Links to blog | ✅ 6 other blog posts |
| Links to tools | ✅ Lead Loss Calculator embedded |
| Lead calculator | ✅ |
| Likely to generate enquiries | ✅ High — comprehensive, multiple CTAs, strong case study |

### Content Quality
| Dimension | Assessment |
|-----------|------------|
| Comprehensive | ✅ Excellent — 10 detailed tactics, real examples, priority checklist |
| Examples | ✅ Christchurch cleaning business case study with specific numbers |
| NZ-specific | ✅ Strong |
| Original insight | ✅ Compound effect math, priority order framework |
| Overlaps | **Significant overlap with Post #4** (Get Customers) — Post #10 effectively supersedes it |
| Missing | FAQ section, downloadable checklist as lead magnet, infographic, external reference links |

---

# Internal Linking Map

## Blog-to-Blog Links (In-Content Only)

```
Post #10 (More Leads) ──→ Post #1 (Website Cost)
Post #10 (More Leads) ──→ Post #2 (Best Design)
Post #10 (More Leads) ──→ Post #5 (Cleaning)
Post #10 (More Leads) ──→ Post #6 (Tradies)
Post #10 (More Leads) ──→ Post #7 (SEO)
Post #10 (More Leads) ──→ Post #8 (DIY vs Pro)
Post #1  (Website Cost) ──→ Post #6 (Tradies)
```

### All Other Posts Link to Zero Blog Posts in Content
Posts #2, #3, #4, #5, #6, #7, #8, #9 contain **zero** in-content links to other blog posts.

## Blog-to-Service/Pillar Page Links

| Post | Service/Pillar Pages Linked |
|------|-----------------------------|
| #1 (Cost) | /affordable-websites-nz, /ecommerce-websites-nz, /#contact, /#audit |
| #2 (Design) | /website-design-for-small-business, /#solutions |
| #3 (Need Website) | /affordable-websites-nz |
| #4 (Customers) | /, /website-design-for-small-business |
| #5 (Cleaning) | /affordable-websites-nz |
| #6 (Tradies) | /affordable-websites-nz (×2), /#contact (×2) |
| #7 (SEO) | /, /web-design-christchurch |
| #8 (DIY vs Pro) | /affordable-websites-nz, / |
| #9 (Builder) | /affordable-websites-nz, /ecommerce-websites-nz |
| #10 (Leads) | /website-design-for-small-business, /affordable-websites-nz, /web-design-christchurch, /ecommerce-websites-nz, /#audit, /#contact |

### Auto-Generated Links (via `RelatedPosts` Component)
Every post also gets auto-generated footer links via `getArticleLinkPackageWithThumbnails()`:
- 4× Related Blog Posts (thumbnail cards)
- 3× Service Links
- 3× Tool Links
- Pillar page pills (based on `linksTo` in `contentPlan`)

These are supplementary but carry less SEO weight than in-content contextual links.

## Orphaned Posts (No Incoming Blog-to-Blog Links in Content)
- **Post #3** (Do Small Businesses Need a Website) — receives 0 incoming blog links
- **Post #4** (How to Get Customers) — receives 0 incoming blog links
- **Post #9** (Best Website Builder) — receives 0 incoming blog links

## Internal Linking Opportunities

| From | To | Suggested Anchor |
|------|----|------------------|
| Post #1 (Cost) | Post #9 (Builder) | "Compare website builders for NZ businesses" |
| Post #1 (Cost) | Post #8 (DIY vs Pro) | "whether DIY or professional is the better investment" |
| Post #1 (Cost) | Post #3 (Need Website) | "why every small business needs a website" |
| Post #2 (Design) | Post #10 (Leads) | "how to generate more leads from your design" |
| Post #2 (Design) | Post #7 (SEO) | "SEO fundamentals for NZ businesses" |
| Post #3 (Need Website) | Post #1 (Cost) | "how much a website costs in NZ" |
| Post #3 (Need Website) | Post #8 (DIY vs Pro) | "DIY vs professional website options" |
| Post #4 (Customers) | Post #10 (Leads) | "10 proven lead generation tactics" |
| Post #4 (Customers) | Post #7 (SEO) | "SEO basics for getting found on Google" |
| Post #5 (Cleaning) | Post #6 (Tradies) | "tradie websites that generate leads" |
| Post #5 (Cleaning) | Post #1 (Cost) | "what a cleaning business website costs" |
| Post #5 (Cleaning) | Post #7 (SEO) | "local SEO for service businesses" |
| Post #6 (Tradies) | Post #1 (Cost) | "full NZ website pricing breakdown" |
| Post #6 (Tradies) | Post #7 (SEO) | "SEO guide for NZ small businesses" |
| Post #6 (Tradies) | Post #5 (Cleaning) | "cleaning business websites" |
| Post #7 (SEO) | Post #6 (Tradies) | "tradie SEO success stories" |
| Post #7 (SEO) | Post #10 (Leads) | "converting that traffic into leads" |
| Post #7 (SEO) | Post #9 (Builder) | "choosing a platform with good SEO capabilities" |
| Post #8 (DIY vs Pro) | Post #9 (Builder) | "full builder comparison for NZ" |
| Post #8 (DIY vs Pro) | Post #1 (Cost) | "complete website cost breakdown for NZ" |
| Post #9 (Builder) | Post #8 (DIY vs Pro) | "when to DIY vs hiring a professional" |
| Post #9 (Builder) | Post #1 (Cost) | "NZ website pricing in detail" |

---

# Content Cannibalisation Risks

## Risk 1: Post #4 vs Post #10 — HIGH RISK
| Dimension | Post #4 (Get Customers) | Post #10 (More Leads) |
|-----------|------------------------|-----------------------|
| Keyword | "how to get customers from website" | "how to get more leads from website" |
| Intent | Getting customers from a website | Getting leads from a website |
| Content | 5-step framework (~550 words) | 10-tactic guide (~2,500 words) |

**Why it's a risk:** These target nearly identical search intent. Google will struggle to differentiate "customers" from "leads" in this context. Post #10 is vastly superior in depth and quality. Post #4 provides no unique value that isn't covered better by Post #10.

**Recommendation:** Merge Post #4 into Post #10, or redirect #4 to #10 and add a "Customer Acquisition" section within #10.

## Risk 2: Post #8 vs Post #9 — MODERATE RISK
| Dimension | Post #8 (DIY vs Pro) | Post #9 (Best Builder) |
|-----------|---------------------|----------------------|
| Keyword | "DIY website vs professional website" | "best website builder for small business NZ" |
| Content | Pros/cons of DIY vs professional | Platform comparison (Wix, Squarespace, etc.) |

**Why it's a risk:** Both discuss the same platforms (Wix, Squarespace, WordPress) with overlapping pros/cons/costs. A user searching for either keyword would find both posts address their question.

**Recommendation:** Differentiate clearly. Post #8 should focus purely on the DIY vs hiring decision (time, ROI, opportunity cost) and link to #9 for the platform comparison. Post #9 should focus purely on builder-specific features and link to #8 for the meta-decision.

## Risk 3: Post #2 vs Post #4 vs Post #10 — LOW-MODERATE RISK
Posts #2 (Best Design), #4 (Get Customers), and #10 (More Leads) all overlap on: CTAs, mobile design, trust signals, page speed, and conversion principles.

**Recommendation:** Post #2 should be expanded to focus exclusively on **visual design** (layout, typography, colour, imagery) with screenshots and examples. Post #4 should be absorbed into #10. Post #10 remains the conversion pillar page.

---

# Missing Content Opportunities

Based on the current blog strategy (NZ small business, web design, SEO, tradies, lead generation), the following 25 topics are missing:

## Niche Industry Pages (Commercial Intent)
| # | Topic | Target Keyword | Why It Matters |
|---|-------|---------------|----------------|
| 1 | Website for Plumber NZ | plumber website NZ | Most searched trade — currently only covered as subsection in tradies post |
| 2 | Website for Electrician NZ | electrician website NZ | High search volume, highly specific |
| 3 | Website for Builder NZ | builder website NZ | Same pattern — dedicated page beats generic tradie page |
| 4 | Website for Landscaping Business NZ | landscaping website NZ | Visual portfolio opportunity |
| 5 | Website for Restaurant NZ | restaurant website NZ | Distinct requirements (menus, booking) |
| 6 | Website for Real Estate Agent NZ | real estate agent website NZ | High-value lead niche |
| 7 | Website for Accountant NZ | accountant website NZ | Professional services niche |
| 8 | Website for Dental Practice NZ | dental website NZ | Healthcare niche with regulatory nuances |

## SEO & Marketing (Informational Intent)
| # | Topic | Target Keyword |
|---|-------|---------------|
| 9 | Google Business Profile Guide for NZ Businesses | Google Business Profile NZ |
| 10 | Local SEO for Tradies NZ | local SEO tradies NZ |
| 11 | How to Get Google Reviews for Your NZ Business | how to get Google reviews NZ |
| 12 | Website Speed Optimisation Guide | website speed optimisation NZ |
| 13 | How to Write Website Copy That Converts | website copywriting small business |
| 14 | What is Schema Markup & Why Your NZ Business Needs It | schema markup NZ business |
| 15 | How to Track Website Leads (Google Analytics Setup) | track website leads NZ |

## Decision/Comparison Content
| # | Topic | Target Keyword |
|---|-------|---------------|
| 16 | Shopify vs WooCommerce NZ (2026) | Shopify vs WooCommerce NZ |
| 17 | WordPress vs Custom Website NZ | WordPress vs custom website NZ |
| 18 | How to Choose a Web Designer in NZ | how to choose web designer NZ |
| 19 | Website Maintenance Costs NZ | website maintenance costs NZ |
| 20 | What to Look for in a Website Quote NZ | website quote NZ |

## Awareness Content
| # | Topic | Target Keyword |
|---|-------|---------------|
| 21 | Why Most Small Business Websites Fail | why websites fail small business |
| 22 | Website ROI: How to Measure It | website ROI calculator guide |
| 23 | Is Your Website Losing You Customers? (Signs) | website losing customers |
| 24 | Website Redesign Checklist NZ | website redesign checklist |
| 25 | AI and Small Business Websites in 2026 | AI website small business NZ |

---

# What Each Post Includes / Entails

## How Much Does a Website Cost in NZ? 2026 Pricing Guide
- **About:** Comprehensive pricing guide covering every website type and build method available to NZ businesses, from DIY ($0) to full agency ($30,000+), with specific NZD pricing, ongoing cost breakdowns, and platform comparisons (WordPress vs Shopify vs Next.js/Jamstack).
- **For:** NZ small business owners, tradies, and ecommerce owners actively budgeting for a website.
- **Search intent:** Commercial — "how much does a website cost in NZ" / "website pricing NZ 2026"
- **Sections:** Quick answer, full pricing breakdown table, cost by business type (small business, tradie, ecommerce), cost calculator framework, 7 cost factors, ongoing costs table, WordPress vs Shopify vs static site comparison, 3 real NZ examples with ROI, 6-question FAQ, final pricing CTA.
- **Contains:** 2 pricing tables, 1 ordered list (5-step calculator), 3 case studies, 6 FAQ items, 2 callout boxes, ToolEmbed (pricing-estimator), Lead Loss Calculator, hero/mid/bottom images.
- **SEO strength:** 8/10 — Comprehensive, keyword-rich, good structure. Missing FAQ schema.
- **Conversion strength:** 9/10 — Perfect intent-CTA alignment, transparent pricing builds trust, multiple conversion paths.
- **Missing:** FAQ schema markup, external authoritative sources, link to #8 and #9, more recent (2026) data.
- **Improve next:** Add FAQ schema. Add links to Posts #8 and #9. Update case study dates to 2026.

## Best Website Design for Small Businesses in 2026
- **About:** High-level overview of 7 design principles that make small business websites effective: clear value proposition, mobile-first, fast load times, strategic CTAs, social proof, scannable layout, SEO.
- **For:** Small business owners curious about what makes a website effective.
- **Search intent:** Informational — "best website design for small businesses"
- **Sections:** What makes a good website (single paragraph), 7 numbered principles (each 2-3 sentences), examples section (link only), CTA.
- **Contains:** 7 H3 subsections, 1 mid-article image, no tables, no FAQ, no case studies.
- **SEO strength:** 5/10 — Right keyword in title/H1 but content is far too thin (~600 words) to rank.
- **Conversion strength:** 4/10 — Too thin to build trust or demonstrate expertise.
- **Missing:** Real screenshots/examples, before/after comparisons, NZ-specific references, data points, related blog links, expanded content (needs 1,500+ words minimum).
- **Improve next:** Expand to 2,000+ words with real NZ examples, screenshots, and cross-links to related posts.

## Do Small Businesses Need a Website in 2026? (The Real Answer)
- **About:** Argues that websites are still essential despite social media, covering the owned vs rented digital asset distinction, consequences of not having a website, and affordability.
- **For:** NZ small business owners who haven't invested in a website yet.
- **Search intent:** Informational (awareness) — "do small businesses need a website"
- **Sections:** Short answer, Facebook/Instagram counterargument, consequences of no website, it doesn't have to be expensive, bottom line.
- **Contains:** 2 bulleted lists, 1 ToolEmbed (ROI calculator), Lead Loss Calculator, 1 image.
- **SEO strength:** 5/10 — Good title match but extremely thin (~500 words). Competitors have 2,000+ word articles with data, charts, and case studies.
- **Conversion strength:** 5/10 — Awareness-stage users are far from converting, but the ROI calculator embed is smart.
- **Missing:** NZ-specific statistics (e.g., MBIE digital adoption data), industry-specific examples, cost breakdown, FAQ, comparison with competitors, cross-links to other posts.
- **Improve next:** Expand to 1,800+ words with NZ stats, case studies, and links to Posts #1 and #8.

## How to Get Customers From Your Website (Proven Strategy)
- **About:** 5-step framework for turning website visitors into customers: SEO, first impressions, trust building, clear CTAs, lead capture.
- **For:** Business owners with existing websites that aren't converting.
- **Search intent:** Informational — "how to get customers from website"
- **Sections:** Why most websites fail, 5-step "Customer Machine" framework, self-promotion CTA.
- **Contains:** 5 H3 subsections, 1 ToolEmbed (conversion-rate-estimator), 1 image.
- **SEO strength:** 4/10 — Thin (~550 words), generic advice, no unique value vs competitors or vs Post #10.
- **Conversion strength:** 4/10 — Too thin to demonstrate expertise. CTA feels premature.
- **Missing:** Everything. This post is largely superseded by Post #10.
- **Improve next:** Either merge into Post #10 (redirect this URL) or completely rewrite as a distinct, actionable guide with specific NZ examples, tools, and data.

## Website for Cleaning Business NZ — Get More Bookings Online
- **About:** Explains why cleaning businesses need a website, what customers search for, what a cleaning website should include, and a brief case study.
- **For:** NZ cleaning business owners (house cleaning, commercial, end of tenancy).
- **Search intent:** Commercial — "website for cleaning business NZ"
- **Sections:** Why cleaning businesses need a website, customer search behaviour, 6-point website requirements list, Christchurch case study, pricing CTA.
- **Contains:** 1 ordered list (6 items), 1 bulleted list (search terms), 1 case study, 1 ToolEmbed (lead-loss-calculator), 1 image.
- **SEO strength:** 5/10 — Good keyword targeting but too thin (~500 words) for a commercial page.
- **Conversion strength:** 5/10 — Good intent match but needs more social proof and detail to convert.
- **Missing:** Pricing comparison table, before/after screenshots, more detailed case study, cleaning industry stats, FAQ section, checklist, links to Posts #1, #6, #7.
- **Improve next:** Expand to 1,500+ words with pricing table, detailed case study, FAQ, and cross-links.

## Tradie Website NZ: How Auckland Tradies Get More Jobs Online in 2026
- **About:** Comprehensive guide for NZ tradies covering why websites beat word-of-mouth, real search volume data, what a tradie website needs (6 features), local SEO strategy, pricing, real results, and common mistakes.
- **For:** Plumbers, electricians, builders, roofers, landscapers, painters across NZ — primarily Auckland.
- **Search intent:** Commercial — "tradie website NZ" / "tradie website New Zealand"
- **Sections:** Word-of-mouth limitation argument, search volume data, 6 conversion features (homepage, service pages, gallery, click-to-call, reviews, GBP), tradie SEO, pricing breakdown, 2 case studies, 5 mistakes list, closing CTA.
- **Contains:** 8 H2s, 6 H3s, 2 callout boxes, 2 bulleted lists, 1 ordered list, 1 ToolEmbed (lead-loss-calculator), 3 images, 2 case studies.
- **SEO strength:** 7/10 — Good depth, NZ-specific data, keyword coverage. Missing FAQ schema and FAQ section.
- **Conversion strength:** 8/10 — Strong social proof (25 enquiries, 340% GBP increase), clear pricing, industry-specific language.
- **Missing:** FAQ section (rich snippet opportunity for "how much does a tradie website cost"), comparison table, screenshot examples, cross-links to other blog posts, individual trade type breakdowns.
- **Improve next:** Add FAQ section with FAQ schema. Add links to Posts #1, #5, #7. Add trade-specific sub-sections.

## SEO for Small Business NZ — A Beginner's Guide to Ranking on Google
- **About:** Beginner-level SEO guide covering what SEO is, why it matters, 6 basics (keyword research, on-page SEO, GBP, site speed, mobile, internal linking), and timeline expectations.
- **For:** NZ small business owners with no SEO knowledge.
- **Search intent:** Informational — "SEO for small business NZ"
- **Sections:** What is SEO, why it matters, 6 basics (each a short subsection), timeline, CTA.
- **Contains:** 6 H3 subsections, 1 bulleted list (on-page elements), 1 image, no FAQ, no tables, no tools.
- **SEO strength:** 5/10 — Good title/keyword match but far too thin (~650 words) for a competitive keyword. No tool embeds despite having an SEO audit tool available.
- **Conversion strength:** 4/10 — Too shallow to establish expertise. No pricing, no case studies.
- **Missing:** Technical SEO section, link building, content strategy, Google Search Console, NZ-specific directory listings (Yellow, Finda, NoCowboys), real ranking case studies, FAQ, ToolEmbed (SEO audit), cross-links to Posts #6, #10.
- **Improve next:** Expand to 2,500+ words. Add FAQ schema. Embed SEO audit tool. Add NZ-specific directory list. Add case study.

## DIY Website vs Professional Website — Which Is Right for Your Business?
- **About:** Pros/cons comparison of DIY website builders (Wix, Squarespace, WordPress.com) versus professionally built websites, with ROI analysis and decision guidance.
- **For:** NZ business owners deciding between building it themselves or hiring a developer.
- **Search intent:** Informational (consideration) — "DIY website vs professional website"
- **Sections:** Overview, DIY pros/cons, professional pros/cons, ROI question, when DIY makes sense, when to go professional, best of both worlds CTA.
- **Contains:** 4 bulleted lists, 1 image, no table, no FAQ.
- **SEO strength:** 5/10 — Good keyword match but thin (~700 words). Missing comparison table format.
- **Conversion strength:** 5/10 — Decent consideration-stage content but lacks supporting evidence.
- **Missing:** Side-by-side comparison table, cost over 3 years (exists in Post #9 but not here), speed benchmarks, SEO comparison, NZ examples, FAQ, cross-links to #1, #9.
- **Improve next:** Add comparison table. Expand to 1,500+ words. Cross-link to Posts #1 and #9.

## Best Website Builder for Small Business NZ (2026 Comparison)
- **About:** Comparison of 5 website building options (Wix, Squarespace, Shopify, WordPress.org, Custom/Next.js) for NZ small businesses, with a 3-year cost comparison table.
- **For:** NZ small business owners evaluating which platform to use.
- **Search intent:** Informational (consideration) — "best website builder for small business NZ"
- **Sections:** Quick verdict, 5 platform reviews (each with bullet points), 3-year cost comparison table, recommendation.
- **Contains:** 5 H3 subsections, 5 bulleted lists, 1 comparison table, 1 image.
- **SEO strength:** 6/10 — Good keyword match, useful table. But still relatively thin (~750 words). Missing feature comparison.
- **Conversion strength:** 5/10 — Cost table naturally favours custom build. Could be stronger with case studies.
- **Missing:** Feature comparison table (SEO, speed, flexibility, support), NZ-specific platform examples, FAQ, pros/cons for each, cross-links to #1, #8.
- **Improve next:** Add feature comparison table. Expand each platform review. Add FAQ schema. Cross-link to Posts #1 and #8.

## How to Get More Leads From Your Website in 2026 (Without Paying for Ads)
- **About:** The most comprehensive blog post. Covers why websites fail at conversion, 10 specific lead generation tactics, compound effect math, priority checklist, NZ case study, and ecommerce considerations.
- **For:** NZ small business owners (all industries) who have websites but aren't generating leads.
- **Search intent:** Informational — "how to get more leads from website"
- **Sections:** Conversion gap diagnosis, 10 detailed tactics, compound effect math, priority checklist, Christchurch cleaning case study, ecommerce note, closing CTA.
- **Contains:** 7 H2s, 10 H3 tactics, multiple bulleted lists, 1 ordered priority checklist, 1 ToolEmbed (lead-loss-calculator), 3 images, 1 detailed case study, 12 internal links, 6 blog cross-links.
- **SEO strength:** 8/10 — Excellent depth, keyword coverage, internal linking. Missing FAQ section/schema.
- **Conversion strength:** 9/10 — Multiple CTAs, embedded calculator, real case study, strong internal linking.
- **Missing:** FAQ section with schema, downloadable resource (checklist PDF), external authoritative links, `dateModified` in schema despite being recently updated.
- **Improve next:** Add FAQ schema. Pass `dateModified: '2026-03-28'` to `articleSchema()`. Add downloadable checklist.

---

# Priority Recommendations

## Quick Wins (Low effort, immediate impact)

| # | Action | Posts Affected | Expected Impact |
|---|--------|---------------|----------------|
| 1 | **Add FAQ schema** to Post #1 (Website Cost) — it already has 6 FAQ items as H3s. Import `faqSchema()` from `schema.js` and add it to the schema array. | Post #1 | Rich snippet eligibility for pricing queries |
| 2 | **Pass `dateModified`** to `articleSchema()` in Post #10 — the `UPDATED` constant (`'2026-03-28'`) is already defined but unused. | Post #10 | Freshness signal for Google |
| 3 | **Add blog-to-blog links** to all 8 orphan posts. Each post should link to at least 2-3 other blog posts in-content. Use the link map above. | Posts #2-9 | Improved crawlability, lower bounce, higher page authority flow |
| 4 | **Add CollectionPage or Blog schema** to the blog index page (`/blog`). | Blog index | Better SERP appearance |
| 5 | **Add publish dates to blog cards** on the index page — freshness signal for users. | Blog index | Increased CTR from index page |
| 6 | **Embed SEO Audit tool** in Post #7 (SEO guide) — the tool exists at `/tools/seo-audit` but isn't referenced. Add `<ToolEmbed slug="seo-audit" context="..." />`. | Post #7 | Higher engagement, tool adoption, conversion path |

## Medium-Effort Improvements (1-3 hours each)

| # | Action | Posts Affected | Expected Impact |
|---|--------|---------------|----------------|
| 7 | **Expand Post #2** (Best Website Design) from ~600 to 2,000+ words. Add real NZ examples with screenshots, before/after comparisons, and data points. | Post #2 | Rank improvement for competitive keyword |
| 8 | **Expand Post #3** (Do SMBs Need a Website) from ~500 to 1,800+ words. Add NZ MBIE stats, industry-specific examples, cost comparison, and FAQ. | Post #3 | Featured snippet opportunity for question-based query |
| 9 | **Expand Post #5** (Cleaning Business) from ~500 to 1,500+ words. Add pricing table, detailed case study, before/after gallery, FAQ, and cleaning industry NZ stats. | Post #5 | Improved ranking for niche commercial keyword |
| 10 | **Expand Post #7** (SEO Guide) from ~650 to 2,500+ words. Add technical SEO, link building, NZ directory listing, Google Search Console setup, ranking case study, FAQ. | Post #7 | Rank improvement for high-value keyword |
| 11 | **Add FAQ sections and FAQ schema** to Posts #6, #8, #9. Each should have 5-8 industry-specific FAQs. | Posts #6, #8, #9 | Featured snippet eligibility |
| 12 | **Add comparison tables** to Posts #8 (DIY vs Pro), #9 (Builder). Post #8 needs an ROI comparison table. Post #9 needs a feature comparison matrix alongside the cost table. | Posts #8, #9 | Better user engagement, higher conversion |
| 13 | **Differentiate Posts #8 and #9** to reduce cannibalisation. Rewrite #8 to focus on the decision framework (time, skill, ROI) and #9 on platform features. Remove platform overlap. | Posts #8, #9 | Clearer ranking signals for each keyword |

## High-Impact Strategic Changes

| # | Action | Scope | Expected Impact |
|---|--------|-------|----------------|
| 14 | **Merge or redirect Post #4** (Get Customers) into Post #10 (More Leads). Post #4 is a thin, inferior version of Post #10. Redirect `/blog/how-to-get-customers-from-your-website` → `/blog/how-to-get-more-leads-from-your-website`. | Post #4, #10 | Eliminates cannibalisation, consolidates authority |
| 15 | **Create industry-specific niche pages** for plumber, electrician, builder, landscaper, restaurant, and accountant websites. These are high-intent commercial keywords currently only covered as subsections. Model on Post #6 (Tradies) quality. | 6-8 new posts | Major expansion of commercial keyword coverage |
| 16 | **Create a "Google Business Profile NZ" pillar post.** GBP is referenced in 3 posts but has no dedicated guide. This is a high-search-volume, low-competition keyword in NZ. | 1 new post | New traffic channel, supports tradie/service content |
| 17 | **Build category/tag taxonomy.** Create clickable categories (e.g., "Web Design", "SEO", "Industry Guides", "Pricing & Cost") and implement category archive pages. | Architecture | Better UX, crawlability, topical organisation |
| 18 | **Add RSS feed** at `/blog/feed.xml` or `/rss.xml`. | Architecture | Syndication, newsletter integration |
| 19 | **Create a content calendar** publishing 2-4 posts/month to build topical authority. Priority topics from the Missing Content table above. | Strategy | Domain authority growth, keyword coverage expansion |
| 20 | **Add author page** at `/about/zachariah-pini` or `/author/zachariah-pini` with Person schema and bi-directional linking to all posts. | Architecture | E-E-A-T signal for Google |
