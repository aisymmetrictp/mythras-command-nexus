# Mythras Blog — Cookie Run: Braverse TCG Strategy

*Last updated: 2026-05-28*

## What this is

The Cookie Run: Braverse arm of the Mythras blog. Same infrastructure as the CRK and MTG sides — typed `BlogPost` TS files, react-markdown renderer, `/blog/[game]/[slug]` routes, auto-generated TOC anchors. Adding Braverse was a registration change (`games.ts`, `categories.ts` got the new `collector-product` category, a new game folder + `index.ts`, and a one-line spread in `blogIndex.ts`).

The job:

1. Win page-one search for a young, fast-growing TCG **before** the big content mills formalize their coverage. The English market only launched **July 11, 2025**, so the search landscape is wide open.
2. Be the **most accurate** Braverse resource on the web. The single biggest content gap (per research) is that set codes, card counts, and product configs are reported inconsistently everywhere. Accuracy is our moat.
3. Serve four distinct audiences cleanly: beginners, deck-builders, competitive players, and collectors.
4. Pair posts with Mythras YouTube content as it lands.

Read this before adding a Braverse post.

---

## Architecture (shared infra)

### URL structure

```
/blog                                      — global hub, all games
/blog/cookie-run-braverse-tcg              — Braverse hub, posts grouped by month
/blog/cookie-run-braverse-tcg/[slug]       — single post
```

### Where files live

```
src/data/blog/cookie-run-braverse-tcg/
├── index.ts                               — BRAVERSE_POSTS array
└── posts/
    └── <slug>.ts                          — one typed BlogPost per file
```

Game slug is `cookie-run-braverse-tcg`. Every post sets `game: 'cookie-run-braverse-tcg'`.

### Categories used by Braverse → Tyler's 7-category spec

| Category slug | Tyler's category | Covers |
|---|---|---|
| `deck-guides` | 1. Deck Guides | Archetype deck techs, budget builds, upgrade guides, matchup guides, deck breakdowns |
| `card-guides` | 2. Card Guides | Best cards by archetype/color, best starter cards, promo guides, "is this card worth it", combo guides |
| `beginner-guides` | 3. Beginner Guides | How to play, rules, card types, turn structure, deck-building basics, mistakes, progression |
| `advanced-strategy` | 4. Meta & Competitive | Meta breakdowns, archetypes, counter-strategy, matchup analysis, event/ladder tips |
| `set-releases` | 5. Set & Release Coverage | Set reviews, best cards from a set, starter reviews, release timeline, "what to buy" |
| `collector-product` | 6. Collector & Product | Rarity guides, box value, promo tracking, product comparisons, storage, labeled speculation |
| `tier-lists` | 7. Tier Lists & Rankings | Best decks, best starter decks, best cards, monthly tier lists, best value products |

`collector-product` was added to `categories.ts` for this game (it pre-existed in the type union). The CRK-specific categories (`cookie-guides`, `team-builds`, `events-updates`) and the MTG-specific `format-guides` don't apply to Braverse.

### Topic clusters (the SEO spine)

Posts are grouped into clusters via the `topicCluster` field. Clusters drive related-post linking and tell us where the content web is thin.

| Cluster | Purpose | Launch posts |
|---|---|---|
| `fundamentals` | Rules and core literacy | how-to-play, colors-explained, beginner-mistakes |
| `deck-building` | Turning rules into decks | deck-building-basics, deck-archetypes |
| `starter-decks` | First-purchase funnel | best-starter-deck |
| `collecting` | Collector audience | rarities-collecting-guide |
| `set-coverage` | Product/release tracking | sets-release-timeline |
| `meta` | Competitive (planned) | — (calendar) |
| `card-evaluation` | Card-level guides (planned) | — (calendar) |
| `event-coverage` | Tournament/OP (planned) | — (calendar) |

---

## Blog architecture map (Deliverable A)

| Category | Topic cluster | SEO intent | Priority | Internal links (hub) | Update frequency |
|---|---|---|---|---|---|
| Beginner Guides | fundamentals | Informational — "how to play / rules / what does X do" | **P0** | colors, deck-building, mistakes, starter ranking | Evergreen (quarterly sanity check) |
| Beginner Guides | deck-building | Informational — "how to build a deck / ratios" | **P0** | how-to-play, colors, archetypes, rarities | Evergreen |
| Tier Lists | starter-decks | Commercial — "best / which starter deck to buy" | **P0** | colors, deck-building, set timeline, rarities | Quarterly (new starter waves) |
| Set & Release | set-coverage | Informational + commercial — "sets in order / what to buy / new set" | **P1** | starter ranking, rarities, deck-building | Monthly (refresh on each release) |
| Collector & Product | collecting | Commercial + informational — "rarities / box value / collecting" | **P1** | set timeline, deck-building, starter ranking | Quarterly |
| Meta & Competitive | meta | Informational — "best deck / meta / matchups" | **P1** | colors, deck-building, set timeline | Quarterly (per set) / Monthly tier refresh |
| Card Guides | card-evaluation | Informational + commercial — "best [color/archetype] cards / is X worth it" | **P2** | archetypes, deck-building, set reviews | Quarterly (per set) |
| Deck Guides | deck-building | Informational — "[archetype] deck guide / budget / upgrade / matchup" | **P2** | archetypes, deck-building basics, card guides | Quarterly (per set) |
| Meta & Competitive | event-coverage | News — "World Championship / Brave League results" | **P2** | meta, archetypes | Time-sensitive (within 48h of confirmed results) |

Priority key: **P0** = launch foundation (done), **P1** = first 2 months, **P2** = ongoing depth.

---

## SEO approach (Braverse-specific)

### What we optimize for

1. **Beginner-intent domination.** "How to play cookie run braverse," "best starter deck," "braverse colors," "braverse rules" are the highest-volume, lowest-competition queries for a young game. We own these first (the 8 launch posts).
2. **The accuracy moat.** Set codes, card counts, and pack configs are a mess across the web. A clean, corrected, *maintained* [set release timeline](/blog/cookie-run-braverse-tcg/cookie-run-braverse-sets-release-timeline) and rarity guide is a genuine differentiator. Keep these refreshed.
3. **New-set capture on release week.** The first 7 days after a set drops is peak search. Ship a "best cards from [set]" / set-review piece in that window.
4. **NA-specific meta.** Almost all public competitive data is Southeast Asian. As the English/NA scene matures, NA-focused meta and event coverage is an unclaimed lane.
5. **Featured snippets via FAQ + ItemList.** Every post ships 5–7 FAQ entries (`FAQPage` JSON-LD) and, where it's a ranking/list, an `itemList` (`ItemList` JSON-LD) for AI Overview / rich-result extraction. Use the `tldr` field for a direct-answer summary above the TOC.
6. **Keyword glossary land-grab.** Lock in the proper nouns before competitors formalize them: FLIP, Break Area, Support Area, Dragon Cookie, Awakening, Shadow Milk variants, the rarity abbreviations.

### What we deliberately do NOT do

The Braverse research is **WebSearch-only** (the official rulebook PDF and card DB couldn't be fully read), so discipline matters more here than on CRK/MTG.

- **Invent card counts or set codes.** Reported numbers conflict. Mark `[Verify ...]` and point to the official card DB.
- **Invent prices, pull rates, or box values.** Never assert a number; mark `[Verify current pricing]`.
- **Invent tournament results or standings.** Only the World Championship result (below) is confirmed. Everything else is `[Verify]`.
- **State unverified rules as fact.** Where the rulebook couldn't be confirmed (FLIP timing details, multicolor cost rules, Awakening/Dragon/Pet mechanics, exact phase names), assert the *shape* and mark the specifics `[Verify ... against the official rulebook]`.
- **Assert future products as shipped.** The 2026 Q3/Q4 sets and "Legendary Pets" starters are roadmap, not fact.

### Schema deployed per post

- `BlogPosting` inline (never `Article` — same rule as CRK/MTG).
- `BreadcrumbList` (Home → Blog → Cookie Run: Braverse → Post).
- `FAQPage` when FAQ entries exist.
- `ItemList` when `itemList` is populated (rankings, rules-at-a-glance, tier lists).
- `speakable` driven by the `tldr` field.

---

## Verified facts (use freely) vs. [Verify] (flag it)

This is the Braverse equivalent of the crk-blog-writer agent's facts list. **Treat anything not on the "verified" side as needing a `[Verify]` placeholder.**

### Verified (High confidence — corroborated across multiple sources)

- **Maker:** Devsisters. US/Canada distributor: ACD Distribution. Physical paper TCG (not digital — don't confuse with the digital game *CookieRun: OvenSmash*).
- **Launch dates:** Korea Sept 1, 2023 · Taiwan Feb 1, 2024 · SEA Dec 21, 2024 · **US/Canada July 11, 2025**.
- **Players & deck:** 2-player. Deck = exactly **60 cards**, ≥1 Cookie, up to **4 copies** of a card number, up to **16 FLIP** cards, multicolor allowed.
- **Setup:** RPS for first player; first player **cannot draw or attack on turn 1**; draw 6; place a Cookie face-down; reveal; stack HP cards from the deck under it.
- **Resource system:** No mana. Pay costs by **resting cards in the Support Area**; add **one Support card per turn**; rested cards refresh on your turn.
- **HP/FLIP:** A Cookie's HP is a stack of cards beneath it; FLIP cards in that stack trigger when damage flips them; faint → Break Area.
- **Win conditions (TWO):** (1) opponent's Break Area combined Cookie **Level ≥ 10**; (2) opponent has **no Cookie in hand** to replace an empty Battle Area.
- **Five colors / archetypes:** Red = Aggro · Yellow = Control · Green = Ramp · Blue = Combo · Purple = Disruption/recursion.
- **Rarity ladder:** C → U → R → SR → UR → EXR, plus Secret tiers SEC / SSR / SUR. Sets list "regular" + "hidden" cards (hidden ≈ premium/alt-art pool).
- **Current EN box config:** 28 packs × 9 cards.
- **EN set release order:** Brave Beginning (Jul 2025) → Operation Timeguard (2025, introduced Dragon Cookies) → Age of Heroes and Kingdoms (Oct 2025) → Arena of Glory (Jan 16, 2026, + starter wave) → A Game of Truth and Deceit (Mar 27, 2026, Shadow Milk variants).
- **Arena of Glory starter Cookies:** Red = Jalapeño + Pitaya Dragon · Yellow = Kouign-Amann + Croissant · Green = Pudding à la Mode + Longan Dragon · Blue = Cream Soda + Lotus Dragon · Purple = Dark Cacao (trash-based Awakening).
- **Organized play:** Brave League (local) → Champion Cup (regional, twice yearly) → World Championship (annual). **First World Championship: April 11–12, 2026, Seoul; Christian Jay Quintana (Philippines) def. Jo Yung Chen (Taiwan) 2–1.**

### Always [Verify] (conflicting, region-dependent, or unread sources)

- Set **codes** (BS1–BS10) ↔ EN set mapping. EN order ≠ ascending codes.
- Per-set **card counts** (regular/hidden). Sources conflict badly.
- **Prices, box value, pull rates.** Never assert.
- **Exact rules** for FLIP timing, multicolor costs, color-cost matching, Awakening, Dragon Cookie, Pet, and Shadow Milk "skin" mechanics.
- **Exact official phase names** and game-length figures.
- **Competitive standings / tier placements.** Public data is community-tracked and SEA-centric.
- **2026 Q3/Q4 sets and "Legendary Pets" starters** — roadmap, confirm before treating as shipped.

Official source of truth: `cookierunbraverse.com/en/` and `play.cookieruntcg.com/cards`.

---

## Refresh cadence

| Content | Frequency | Trigger |
|---|---|---|
| Set release timeline | Monthly | Within 7 days of any new set/product announcement or release |
| New-set review / best cards | Per set | Within 7 days of set release |
| Starter deck ranking | Quarterly | New starter wave |
| Meta breakdown / tier list | Quarterly + monthly tier refresh | New set; confirmed event results |
| Rarities / collecting | Quarterly | New rarity treatments or box configs |
| Beginner / fundamentals | Evergreen | Quarterly sanity check; rewrite if rules errata lands |
| Event coverage | Time-sensitive | Within 48h of *confirmed* results only |

When refreshing, bump `lastUpdated` only — never `publishDate` (kills the canonical/freshness signal). Same rule as CRK/MTG.

---

## Voice spec (same GamerTagMythras voice)

Reuse the house voice (see `blog-strategy.md`). Braverse-flavored notes:

- **Second person, punchy hook, no "in conclusion."** End on a Quick Action Checklist or a forward link, not a summary paragraph.
- **Assume TCG literacy but not Braverse literacy.** Readers may know Pokémon/Lorcana; they don't know FLIP or the Break Area. Define Braverse-specific terms; don't explain what "aggro" means in general.
- **Lead with the accuracy moat.** When a competitor's number is wrong or conflicting, *say so* and point to the official source. That honesty is the brand.
- **Compare to known TCGs sparingly and usefully** (the HP-stack and FLIP are genuinely novel — lean on that).
- **Never bluff a ruling.** "Here's how it works, verify the edge case in the rulebook" beats a confident wrong answer that a judge will dunk on.

---

## Adding a new Braverse post (workflow)

1. Pick the slug. Kebab-case, evergreen-friendly, **no dates in canonical slugs**. Game/brand prefix where it helps the keyword (e.g. `cookie-run-braverse-...`).
2. Pick the category from the 7 valid options and a `topicCluster`.
3. Create `src/data/blog/cookie-run-braverse-tcg/posts/<slug>.ts` exporting a typed `BlogPost` with `game: 'cookie-run-braverse-tcg'`, `schemaType: 'BlogPosting'` (or `HowTo` for step guides).
4. **Strings with apostrophes:** use double quotes (`"a Cookie's HP"`), never single quotes with `\'` — a stray `\\'` will break the build.
5. Add the import + push to `BRAVERSE_POSTS` in the game `index.ts`.
6. Add a `<url>` to `public/sitemap.xml` after the Braverse block (priority 0.9 for hub/high-traffic, 0.85 otherwise).
7. **Run `node scripts/verify-blog-toc.js`** — expect 0 issues. Every H2 must have a matching TOC entry; TOC ids must equal the slugified heading text.
8. `npm run build` to confirm static generation.
9. Deploy: `netlify deploy --prod --dir=out` (the site is **not** git-connected; `git push` alone does nothing).

---

## Competitive positioning

| Site | Their strength | Their weakness | Our angle |
|---|---|---|---|
| **Official site / card DB** | Canonical data | Not a teaching resource; sparse editorial | Translate canon into helpful, structured guides |
| **cookierun.fandom.com** | Broad reference | Wiki tone; conflicting/uneven detail | Curated, corrected, opinionated |
| **cookierun.gg / DotGG** | Meta + new-player guides | SEA-centric meta; content-mill cadence | NA focus, real voice, accuracy moat |
| **Store blogs (retailers)** | Exist early, decent SEO | Afterthought content, sales-first | Player-first depth, no sales agenda |
| **Generic TCG aggregators** | SEO machinery | No Braverse depth, thin/AI-flavored | Specialist depth + honesty about uncertainty |

**The gap:** Braverse is young enough that *nobody* owns clean, accurate, NA-focused, well-structured coverage yet. The lane is "the resource that's actually right and actually helpful." We win it by shipping weekly and refreshing the volatile pages on cadence.

---

## Known gaps (May 2026) — addressed by the calendar

- **No card-level guides yet** (`card-guides` empty at launch). Best [color] cards, best starter cards, "is X worth it."
- **No archetype deck guides yet** (`deck-guides` empty at launch). Per-color deck techs with sample lists ([Verify] decklists).
- **No event coverage.** World Championship recap, Brave League primer.
- **No monthly tier list.** A refreshed meta tier list is a recurring traffic driver (with heavy `[Verify]` discipline).
- **No new-set review series.** Each set release is a natural beat.

The 12-month calendar at `braverse-blog-editorial-calendar-2026-2027.md` fills all of these.
