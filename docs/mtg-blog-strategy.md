# Mythras Blog — Magic: The Gathering Strategy

*Last updated: 2026-05-24*

## What this is

The MTG arm of the Mythras blog. Same infrastructure as the CRK side — typed `BlogPost` TS files, react-markdown renderer, `/blog/[game]/[slug]` routes, auto-generated TOC anchors. Adding MTG was a 4-file infra change (`games.ts`, `categories.ts`, `blogTypes.ts`, a new game folder, plus a one-line tweak to `blogIndex.ts`).

The job:

1. Capture page-one search traffic for high-volume MTG queries: best [color] cards, Standard meta, set tier lists, deck guides.
2. Compete with MTGGoldfish (data-heavy, sterile), EDHREC (data-aggregated, no editorial), Draftsim (SEO listicles, thin), and ChannelFireball (obligation-flavored pro content) on **opinionated mid-length analysis with a real voice**.
3. Pair each post with the corresponding video from the appropriate Mythras YouTube channel as it lands.

Read this before adding an MTG post.

---

## Architecture (shared with CRK)

### URL structure

```
/blog                                    — global hub, both games
/blog/magic-the-gathering                — MTG hub, posts grouped by month
/blog/magic-the-gathering/[slug]         — single post
```

### Where files live

```
src/data/blog/magic-the-gathering/
├── index.ts                             — MTG_POSTS array
└── posts/
    └── <slug>.ts                        — one typed BlogPost per file
```

### Categories used by MTG

| Slug | Maps to (Tyler's spec) |
|---|---|
| `card-guides` | Best cards by color, format staples, new-set standouts |
| `deck-guides` | Commander deck techs, Standard / Modern / Pioneer / Pauper builds, sideboards, mana bases |
| `format-guides` | Commander / Standard / Modern / Pioneer / Pauper / Limited primers |
| `set-releases` | New set previews, mechanics breakdowns, precon reviews, draft archetypes |
| `beginner-guides` | Shared with CRK — how to build a deck, mana curve, mulligans |
| `advanced-strategy` | Shared with CRK — mulligan theory, sideboarding, threat assessment |
| `tier-lists` | Shared with CRK — best commanders, best removal, format tier lists |

CRK-specific categories (`cookie-guides`, `team-builds`, `events-updates`) don't apply to MTG. Posts simply use the category that fits.

---

## SEO approach (MTG-specific)

### What we optimize for

1. **Color-keyword domination.** "Best [color] cards mtg" is one of the most-searched MTG queries. Each color post targets that primary keyword + 4-6 long-tail variants ("best white commander cards," "best blue counterspells," etc.).
2. **Set tier lists on release week.** New set drops every ~3 months. The first 7 days after release is peak search volume; ship a "best cards from [set]" piece within that window.
3. **Standard meta refresh at every B&R.** Bans/unbans publish quarterly. Each one resets search volume for "best Standard decks" overnight.
4. **Commander evergreen.** EDH/Commander is the largest MTG format by player count. Every color post + every set review should have a Commander angle.
5. **Featured snippets via FAQ.** Each post ships with 5-7 FAQ entries, marked up with `FAQPage` JSON-LD.
6. **Authority signals.** Cite Wizards, Scryfall, MTGGoldfish, magic.gg (the official tournament site), and EDHREC — not random forum threads.

### What we deliberately do NOT do

- **Invent prices.** Card prices change weekly. We mark `[Verify current price]` and never assert a number.
- **Invent ban status.** Bans change quarterly. We mark `[Verify current legality]` for any specific format-legality claim outside the verified facts list.
- **Invent tournament results.** Beyond the published Pro Tour winner facts in our research brief, we don't claim "this deck won X tournament."
- **Quote rules text verbatim.** Wizards changes rules wording with Comprehensive Rules updates. We paraphrase carefully.

### Schema deployed per post

Same as CRK:
- `BlogPosting` inline
- `BreadcrumbList` (Home → Blog → MTG → Post)
- `FAQPage` when FAQ entries exist

---

## Refresh cadence

| Category | Frequency | Trigger |
|---|---|---|
| Standard meta posts | Monthly | Within 7 days of any B&R announcement |
| Set tier lists | Quarterly | New set release |
| Color guides | Quarterly | Sanity check after major rotation; rewrite if new staples |
| Commander deck guides | Quarterly | Refresh on EDHREC top commander shifts |
| Beginner / format guides | Evergreen | Once per quarter sanity check |
| Tournament coverage | Time-sensitive | Within 48 hours of major events |

When refreshing, bump `lastUpdated` only. Don't bump `publishDate` (kills canonical signal). Use the same pattern documented in `blog-strategy.md` for CRK.

---

## Voice spec (same as CRK)

Reuse the GamerTagMythras voice. Not re-documented here — see `blog-strategy.md` for the full bar. Key MTG-flavored additions:

- **Assume the reader knows what mana is.** Don't explain basic Magic concepts.
- **Define Pro Tour acronyms.** PT, PTQ, GP — spell out on first use.
- **Call cards overrated.** Mythics get hyped at preview time and disappoint. Be willing to say which ones flopped (see the Strixhaven tier list).
- **Be format-aware.** "Best in Commander" ≠ "best in Standard" ≠ "best in Pauper." Always specify which format you're judging in.
- **Honor the Commander tax.** Fierce Guardianship is Commander-only. Sol Ring is colorless. Dockside is banned. Mention these footnotes; readers will catch any sloppiness.

---

## Adding a new MTG post (workflow)

1. Pick the slug. Kebab-case, evergreen-friendly. Set names spelled out (e.g. `secrets-of-strixhaven-best-standard-cards`). For color posts: `best-[color]-cards-magic-the-gathering`.
2. Pick the category from the 7 valid options (4 MTG-specific + 3 shared).
3. Create `src/data/blog/magic-the-gathering/posts/<slug>.ts` exporting a typed `BlogPost` with `game: 'magic-the-gathering'`.
4. Add `import { yourExport } from './posts/<slug>'` and append to `MTG_POSTS` in `src/data/blog/magic-the-gathering/index.ts`.
5. Add a `<url>` entry to `public/sitemap.xml`. Priority 0.85 default; 0.9 for high-traffic (meta, codes equivalents).
6. **Run `node scripts/verify-blog-toc.js`** — should report 0 issues. Fix any TOC mismatches before committing.
7. `npm run build` to verify static generation.
8. Commit + push. Run `netlify deploy --prod --dir=out` until Netlify git-link is enabled.

---

## Competitive positioning

| Site | Their strength | Their weakness | Our angle |
|---|---|---|---|
| **MTGGoldfish** | Data-heavy meta breakdowns, deck pricing | Sterile voice, auto-generated deck pages | Real personality, opinionated takes |
| **EDHREC** | Commander-only crowd-sourced staples | No Standard, no editorial | Cover both, with judgment |
| **MTGTop8** | Tournament results database | No narrative whatsoever | Translate tournament data into reader-useful analysis |
| **Draftsim** | "Best X cards" listicle SEO | AI-flavored, thin analysis, filler | Mid-length analysis with real recommendations |
| **MTGAzone** | Standard metagame, Arena | Slow on hot takes, safe | Faster, more opinionated |
| **ChannelFireball** | Pro player content, tournament reports | Reads as paid obligation | Enthusiast voice, not Pro Tour bias |
| **Star City Games** | Big tent — finance, strategy, news | Volume drowns voice; legacy skew | Tighter editorial, Standard/Commander focus |
| **Hipsters of the Coast** | Strong indie voice | Inconsistent posting, dated design | Match the voice, ship on cadence, modern design |

**The gap:** Most sites are either data dumps or SEO content mills. The lane is opinionated mid-length analysis from a player who actually plays the formats, refreshed on the cadence the format demands. Hipsters occupies this lane inconsistently. We can own it by shipping weekly.

---

## Known gaps (May 2026)

- **No Limited / Draft coverage yet.** Draft archetype guides per set would capture a real long-tail. Add when the next set drops.
- **No Arena-specific content.** Bo1 Arena meta is a separate beast from paper Standard. Worth a series.
- **No format primers.** "What is Commander?" "What is Modern?" Beginner format intros are evergreen high-value posts.
- **No price-tracking content.** "Cards that spiked this week" is huge SEO, but requires a live data source (we won't fake it).
- **No precon review series.** Each Commander precon release is a natural blog beat we haven't started yet.
- **No deck-tech video pairing.** Once a post + corresponding YouTube video both exist, link them bidirectionally.

The 12-month calendar at `mtg-blog-editorial-calendar-2026-2027.md` addresses the first 4 gaps.
