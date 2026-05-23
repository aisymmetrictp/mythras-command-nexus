# Mythras Blog — Strategy & Architecture

*Last updated: 2026-05-23*

## What this is

The Mythras blog is the editorial layer of [gamertagmythras.com](https://gamertagmythras.com). Its job is to:

1. Capture page-one search traffic for high-volume Cookie Run: Kingdom queries (codes, tier lists, reroll, team comps, patch overviews).
2. Build long-term topical authority that compounds across months of updates.
3. Feed the existing Gear Guide and Cake Tower tools with inbound traffic and contextual cross-links.
4. Be expandable to additional games (Pokemon, MTG, Lorcana, etc.) without re-architecting.

Read this doc before adding a post.

---

## Architecture

### URL structure

```
/blog                                    — global hub, lists games + recent posts
/blog/[game]                             — per-game hub, posts grouped by month
/blog/[game]/[slug]                      — single post
```

Game and post slugs are kebab-case. Game slug = canonical short name (`cookie-run-kingdom`). Post slugs use a clear, evergreen-friendly format (`timekeeper-toppings`, not `the-best-timekeeper-toppings-guide-2026`).

We deliberately skipped monthly archive routes (`/blog/[game]/2026-05/`) — they create thin pages and dilute SEO. Monthly buckets surface as sections on the game hub instead.

### Content model

Posts are typed TypeScript files exporting a `BlogPost` (see `src/data/blog/blogTypes.ts`). Each post lives at:

```
src/data/blog/<game-slug>/posts/<post-slug>.ts
```

And is registered in:

```
src/data/blog/<game-slug>/index.ts
```

The body is markdown rendered by `react-markdown` + `remark-gfm` (tables, task lists). This stays consistent with the rest of the site's typed-data convention while giving us long-form prose ergonomics. We don't use MDX — the toolchain cost wasn't worth it for the body weight we needed.

### Data fields, why each one matters

| Field | Used for |
|---|---|
| `slug` | URL path |
| `game` | Routing + filtering |
| `category` | Topic filter on `/blog`, future category pages |
| `topicCluster` | Internal — drives "related posts" pairing |
| `title` | `<title>` tag, h1, social shares |
| `metaDescription` | `<meta name="description">`, search-snippet |
| `excerpt` | Card preview on hub pages |
| `featuredImagePrompt` | Concept brief for the OG image / featured asset |
| `publishDate` | Sort order, schema, sitemap |
| `lastUpdated` | Freshness signal, schema `dateModified` |
| `primaryKeyword` | SEO target, used in `og:keywords` |
| `secondaryKeywords` | Long-tail capture |
| `schemaType` | JSON-LD type (`BlogPosting` for almost everything) |
| `updateFrequency` | Tells future-us when to refresh — `weekly` (codes), `monthly` (tier lists, meta), `quarterly` (deep-dive guides), `evergreen` (timeless beginner content) |
| `evergreen` | Used by hub filtering and refresh-priority queues |
| `readingTimeMin` | UI signal, snippet-trust |
| `toc` | In-post navigation, scannability |
| `content` | Markdown body |
| `faq` | FAQ component + `FAQPage` JSON-LD (rich snippets) |
| `internalLinks` | Manually-curated link block at bottom |
| `externalSources` | Citation footer (builds trust + E-E-A-T) |

### Components

| Path | Purpose |
|---|---|
| `src/components/blog/BlogMarkdown.tsx` | Brand-styled `react-markdown` renderer |
| `src/components/blog/BlogPostBody.tsx` | Full post page including breadcrumbs, header, schema, related |
| `src/components/blog/BlogCard.tsx` | Preview card used in hub lists |
| `src/components/blog/BlogTOC.tsx` | Table of contents (links to H2/H3 anchors) |
| `src/components/blog/BlogFAQ.tsx` | Accordion FAQ (client) |

Schema components live in `src/components/StructuredData.tsx` and are reused — `BreadcrumbSchema`, `FAQSchema`, `WebPageSchema`, plus inline `BlogPosting` JSON-LD in `BlogPostBody.tsx`.

---

## Categories

Every post must belong to exactly one of these six categories. Each category has a clear job.

| Slug | Job |
|---|---|
| `cookie-guides` | Per-Cookie deep dives — toppings, beascuits, skill breakdowns, pull-worth verdicts |
| `team-builds` | Comps for Arena, Guild Battle, World Exploration, Beast-Yeast, Alliance, F2P |
| `events-updates` | Patch notes, new Cookie release coverage, banner reviews, codes, limited rewards |
| `beginner-guides` | Reroll, progression roadmap, system explainers, mistakes to avoid |
| `advanced-strategy` | Meta analysis, damage optimization, investment priority, niche systems (CookieChat, etc.) |
| `tier-lists` | Overall, PvE, PvP, Guild Battle, rarity-specific, monthly meta |

---

## SEO approach

### What we optimize for (priority order)

1. **Search intent match.** Title and H1 should mirror the user's actual phrasing.
2. **Long-tail keywords in H2s.** Subheads are where mid-funnel queries get captured.
3. **Featured snippet & FAQ snippets.** Every post has a 5-7 entry FAQ array with `FAQPage` JSON-LD.
4. **Internal linking.** Every post links to 4-8 other pages on the site (gear guides, sibling posts).
5. **Freshness.** `lastUpdated` is visible on the page and in schema. Refresh cadence is encoded per-post.
6. **Authority signals.** Citations to first-party sources (Devsisters, PlayCookieRun) + secondary (PocketGamer, Game8) build E-E-A-T.

### What we deliberately do NOT do

- Keyword-stuff. Each post mentions the primary keyword 3-6 times naturally.
- Generic intros. "In this article" / "Welcome to" / "Cookie Run: Kingdom is a mobile game" — all banned.
- Conclusion paragraphs. We stop after the last useful section.
- Outdated date-stuffing. "Best X in 2026" is fine; "Best X in May 2026" only goes in titles where time-sensitivity is the entire selling point (codes, monthly tier list).
- AI-isms. "Delve into", "elevate", "in today's fast-paced world", "leverage" → flagged in review.

### Schema deployed per post

- `BlogPosting` (inline, with `headline`, `datePublished`, `dateModified`, `author`, `publisher`, `keywords`, `wordCount`)
- `BreadcrumbList` (Home → Blog → Game → Post)
- `FAQPage` (when post has `faq` entries)

---

## Refresh cadence

The `updateFrequency` field drives the refresh queue:

| Frequency | Examples | Refresh trigger |
|---|---|---|
| `weekly` | Codes | Every Monday — verify active list, swap expired codes |
| `monthly` | Tier lists, meta comps, current-banner reviews | First Tuesday of each month after Devsisters patch drop |
| `quarterly` | Cookie deep-dives, system guides | Once per quarter or when meta shifts hard |
| `evergreen` | Beginner guides, reroll, system explainers | Once per quarter sanity-check; rewrite on major UI change |

When refreshing, bump `lastUpdated` AND change the visible "Last updated" line. Don't bump `publishDate` — that breaks long-term canonical signals.

---

## Voice spec

If a post doesn't pass this bar, send it back.

- **2nd person**, never "the player" / "we" / "users".
- **Open with a punchy hook** — a fact, an observation, a hot take. Not a definition.
- **Specific over vague.** Name Cookies, treasures, version numbers, dates.
- **Tables > paragraphs** for any comparison or list of ≥3 items.
- **Blockquotes for tips/warnings.** 2-4 per post.
- **End with a "Quick Action Checklist"** (3-7 bullets) before the FAQ.
- **No conclusion paragraph.** Stop when you're done.
- **Tone: friend-with-strats**, not "comprehensive guide". Authoritative but never condescending.

---

## Adding a new post (workflow)

1. Pick the slug. Kebab-case, evergreen-friendly. **Never put dates in canonical slugs** — they make every refresh require a rename + 301. Use `cookie-run-kingdom-codes`, not `codes-may-2026`; `timekeeper-toppings`, not `timekeeper-toppings-2026`. Dates belong in the post title (which can update freely), not the URL.
2. Create `src/data/blog/cookie-run-kingdom/posts/<slug>.ts` exporting a typed `BlogPost`.
3. Add `import { yourExport } from './posts/<slug>'` and append to `CRK_POSTS` in `src/data/blog/cookie-run-kingdom/index.ts`.
4. Add a `<url>` entry to `public/sitemap.xml` with appropriate `priority` and `changefreq`.
5. `npm run build` to verify static generation succeeds.
6. Commit + push. Netlify auto-deploys to gamertagmythras.com.

---

## Adding a new game (later)

1. Add a `Game` to `src/data/blog/games.ts`.
2. Create `src/data/blog/<new-game>/index.ts` and `posts/` folder.
3. Update `src/data/blog/blogIndex.ts` to spread the new game's posts into `ALL_POSTS`.
4. The `Blog` dropdown in Navbar automatically picks up active games — no nav edit needed.

---

## Known gaps (May 2026)

- **No tag system.** If we exceed 100 posts per game, we'll need tag pages. Don't pre-build it.
- **No author bios per post.** Currently attributed to "Mythras" org-wide. Add per-author when contributors join.
- **No comment system.** Discord link in footer is the deliberate substitute.
- **No RSS feed.** Add `app/blog/rss.xml/route.ts` when audience size justifies it.
- **No content search inside `/blog`.** Skip until ≥30 posts.

---

## Competitive positioning

Our edge over Game8, Fandom, PocketGamer, Gamerant, theclashify, ldplayer:

1. **Speed.** Fewer ads. No autoplay video. Sub-1s LCP on Netlify CDN.
2. **Internal-link depth.** Every guide cross-links to 4-8 other pages on this site — competitor sites mostly link out to YouTube.
3. **Specificity.** We commit to concrete comps and version numbers; many competitors hedge.
4. **Freshness signal.** `lastUpdated` is shown prominently. Codes refresh weekly.
5. **Brand authority.** Five YouTube channels driving organic backlinks; we're a creator brand, not an SEO content farm.

The biggest gaps competitors leave open right now (May 2026): **post-anniversary 6-star Legendary build paths**, **detailed CookieChat affection guides**, **Guild Battle boss-specific team-building in writing** (YouTube dominates this segment; SEO is wide open).
