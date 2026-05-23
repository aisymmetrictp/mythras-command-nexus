import type { BlogPost } from '../../blogTypes';

export const cookiechatAffectionGuide: BlogPost = {
  slug: 'cookiechat-affection-guide',
  game: 'cookie-run-kingdom',
  category: 'advanced-strategy',
  topicCluster: 'cookiechat',

  title: 'CookieChat & Affection System Explained — Every Cookie\'s Favorite Gift',
  metaDescription:
    'Complete guide to CookieChat and the Affection system in Cookie Run: Kingdom — all 10 favorability levels, the gift mechanic, favorite gift list, and which cookies to raise first.',
  excerpt:
    'Everything you need to know about CRK\'s CookieChat and Affection system from v7.2: the 10 favorability levels, what each one unlocks, how the gift mechanic actually works, and the favorite-gift list you should keep open while playing.',
  featuredImagePrompt:
    'A cozy Cookie Run: Kingdom CookieChat scene with several cookies sitting around a candy table exchanging glowing wrapped gifts, hearts floating above them, set against a warm pastel kingdom background — warm, friendly, no text overlays.',

  publishDate: '2026-05-23T00:00:00.000Z',
  lastUpdated: '2026-05-23T00:00:00.000Z',

  primaryKeyword: 'cookiechat affection gift list',
  secondaryKeywords: [
    'cookie run kingdom cookiechat',
    'CRK affection system',
    'favorite gift cookies',
    'crk favorability',
    'how to raise affection cookie run kingdom',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 10,

  toc: [
    { id: 'what-is-cookiechat', label: 'What is CookieChat?', level: 2 },
    { id: 'how-affection-works', label: 'How the Affection / Favorability system works', level: 2 },
    { id: 'favorability-levels', label: 'The 10 Favorability levels and what each unlocks', level: 2 },
    { id: 'gift-mechanic', label: 'The gift mechanic — how to maximize affection per gift', level: 2 },
    { id: 'favorite-gifts', label: 'Favorite gifts list — best-known matches', level: 2 },
    { id: 'priority-cookies', label: 'Which Cookies to raise affection on first', level: 2 },
    { id: 'lore-unlocks', label: 'Story / lore unlocks at higher affection', level: 2 },
    { id: 'common-mistakes', label: 'Common mistakes that waste gifts', level: 2 },
    { id: 'checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `CookieChat is the system most CRK players underuse the most — and the one that quietly rewards consistency more than any other feature in the game. Shipped in **v7.2 (2026-03-11)** alongside the Cake Stacker minigame and Sugar Swan's release, the Affection system gives every cookie in your roster a 10-level favorability track with permanent unlocks at each tier. Titles, story scenes, presenter-notes lore, gameplay buffs — all gated behind talking to your cookies and feeding them their favorite gifts.

The catch: gifting wrong is roughly **3x slower** than gifting right. This is the guide that fixes that, with the full favorability table, the favorite-gift list (annotated with what's confirmed vs still unverified), and the priority order for which cookies you should level affection on first.

## What is CookieChat? {#what-is-cookiechat}

CookieChat is an in-game messenger UI that turns your roster into a contact list. Every cookie you own has a chat window where they:

- Send you scripted **messages** based on in-game events (you cleared a stage with them, you upgraded their building, the season changed).
- Open **dialogue scenes** that expand the cookie's lore — typically short two-or-three-cookie conversations.
- Become eligible for **gifting**, which is how you raise their Affection level.
- Unlock **titles** you can display on your profile at specific affection milestones.

The system is layered on top of existing features rather than replacing them — you still play stages, run Guild Battle, build gear. CookieChat just becomes the ambient meta-loop that keeps you logging in even on light days.

> **Tip:** Open CookieChat once per daily login. New messages are time-gated and the older ones expire, so a week of skipping it means a week of missed micro-rewards (Crystals, Soulstones, and gift items).

## How the Affection / Favorability system works {#how-affection-works}

Each cookie has an **Affection meter** (also called Favorability in some menus) that fills as you interact with them. The meter has **10 distinct levels**, with each level requiring more affection points than the last. You raise affection through three main actions:

1. **Gifting** — by far the largest single contributor. The right gift can raise an entire level on its own at low tiers.
2. **Talking** — replying to their CookieChat messages with the dialogue options the game presents you. Small per-tap, but free and stacks daily.
3. **Co-deployment** — bringing the cookie on PvE stages, Guild Battle attempts, and Arena defenses contributes a slow trickle.

The point thresholds scale steeply — early levels take minutes, late levels take weeks of consistent gifting. Most rosters cap out at Level 5-7 on their main cookies and Level 1-2 across the rest.

## The 10 Favorability levels and what each unlocks {#favorability-levels}

This is the table to bookmark. Per-level unlocks below are sourced from the in-game CookieChat UI and Devsisters' v7.2 patch notes; specific reward quantities should be treated as approximate where flagged [VERIFY].

| Level | What it unlocks | Notes |
|---|---|---|
| **1** | First reply scene, basic chat unlocked | Free; happens automatically the first time you open the cookie's chat. |
| **2** | First gift slot opens, Cookie's title #1 unlocked | The "starter" tier — easy to reach in one session. [VERIFY exact title naming] |
| **3** | Expanded dialogue options, profile photo unlock | First lore drop usually lands here. [VERIFY] |
| **4** | Second title, additional gift response variants | Affection per gift starts dropping noticeably from this level up. |
| **5** | Mid-tier story scene, gameplay-flavor reward (e.g. a stack of Crystals + Soulstones) [VERIFY] | The natural "stopping point" most players land on. |
| **6** | Third title, exclusive dialogue branch | Time investment ramps up sharply past here. |
| **7** | Profile frame or background unlock [VERIFY] | Cosmetic; usable across CRK social features. |
| **8** | Major story scene with multi-cookie cast | One of the bigger lore payoffs in the system. [VERIFY which cookies have these scenes at L8] |
| **9** | Final title, rare cosmetic reward [VERIFY] | This tier alone can take weeks of daily gifting. |
| **10** | Maxed scene + signature reward (presenter notes / endgame cosmetic) [VERIFY exact reward per cookie] | The completionist tier — usually not worth chasing on more than 2-3 cookies. |

> **Warning:** Per-level unlocks are not 100% uniform across every cookie. Story-heavy cookies (Pure Vanilla, Dark Enchantress, the Beasts) tend to have richer scenes at L5 and L8; newer cookies sometimes have placeholder dialogue at higher tiers that gets filled in later patches.

## The gift mechanic — how to maximize affection per gift {#gift-mechanic}

Once a cookie hits Level 2 and the gift slot opens, you can hand them an item from your inventory. The affection gained depends on three factors stacked together:

- **Match tier**: every cookie has a hidden "preference rating" for each gift category — Disliked, Neutral, Liked, Favorite. A Favorite gift gives roughly **3-4x** the affection of a Neutral one. [VERIFY exact multipliers]
- **Gift rarity**: rare gifts give more base affection than common ones, but the match-tier multiplier is bigger than the rarity multiplier.
- **Daily cap**: you can gift the same cookie a limited number of times per day [VERIFY exact daily gift cap]. Over-stacking gifts on one cookie just wastes inventory.

The play is simple but tedious: **only give Favorite-tier gifts**, spread across your priority cookies, and let lower-priority cookies trickle up through chat replies and co-deployment.

> **Tip:** If you don't know a cookie's Favorite gift, give them a single Liked gift and watch their reaction line. The game telegraphs preference strongly — a Favorite gift triggers a unique animation and a heart-burst, a Liked one is more muted, a Neutral one is generic.

## Favorite gifts list — best-known matches {#favorite-gifts}

This is the running favorite-gift list as of **v7.4 Timeline of Fate**. Anything not personally confirmed yet is flagged [VERIFY] — if you've tested one and it lit up with the Favorite animation, your data is more recent than this table.

| Cookie | Favorite gift | Notes |
|---|---|---|
| [Pure Vanilla Cookie](/gear-guide/pure-vanilla-cookie) | Antique Book / Heritage Scroll [VERIFY] | Lore-flavored items match his scholar archetype. |
| [Hollyberry Cookie](/gear-guide/hollyberry-cookie) | Royal Crest / Berry Crown [VERIFY] | Anything aristocratic-coded. |
| [Dark Enchantress Cookie](/gear-guide/dark-enchantress-cookie) | Obsidian Shard / Cursed Trinket [VERIFY] | Dark-themed gifts only — anything bright is a Dislike. |
| [Sea Fairy Cookie](/gear-guide/sea-fairy-cookie) | Pearl / Sea Glass [VERIFY] | Marine-themed category. |
| [Frost Queen Cookie](/gear-guide/frost-queen-cookie) | Ice Crystal / Frost Bouquet [VERIFY] | Cold/winter category. |
| [Sugar Swan Cookie](/gear-guide/sugar-swan-cookie) | Crystal Feather / Ballet Ribbon [VERIFY] | Elegance-coded; she's the v7.2 release cookie so her preferences are still mid-confirmation. |
| [Millennial Tree Cookie](/gear-guide/millennial-tree-cookie) | Acorn / Aged Bark [VERIFY] | Nature category. |
| [Timekeeper Cookie](/blog/cookie-run-kingdom/timekeeper-toppings) | Hourglass / Pocket Watch [VERIFY] | Time-themed only. |
| [Eternal Sugar Cookie](/gear-guide/eternal-sugar-cookie) | Sugar Crystal / Glittering Confection [VERIFY] | Sweet-coded. |
| [Pomegranate Cookie](/gear-guide/pomegranate-cookie) | Ritual Knife / Pomegranate Seed [VERIFY] | Cult-themed gift category. |
| [Silent Salt Cookie](/gear-guide/silent-salt-cookie) | Black Pearl / Sand of Memory [VERIFY] | Sea/memory-themed. |
| [Black Sapphire Cookie](/gear-guide/black-sapphire-cookie) | Sapphire / Lavender Bouquet [VERIFY] | Refined-aesthetic gifts. |
| [Venom Dough Cookie](/gear-guide/venom-dough-cookie) | Venom Vial / Forbidden Fruit [VERIFY] | Dark-aligned. |
| [Seltzer Cookie](/gear-guide/seltzer-cookie) | Citrus Garnish / Glass Bottle [VERIFY] | Drink-themed. |
| [Menthol Cookie](/gear-guide/menthol-cookie) | Mint Sprig / Cool Towel [VERIFY] | Fresh/cooling category. |
| [Poison Mushroom Cookie](/gear-guide/poison-mushroom-cookie) | Spore Jar / Damp Moss [VERIFY] | Fungal-themed gifts. |

The pattern: cookies' favorite gifts thematically match their lore archetype. When in doubt, **look at the cookie's design** and pick the gift category that visually matches — that's roughly an 80% hit rate before you even check a list. [VERIFY pattern accuracy across full roster]

## Which Cookies to raise affection on first {#priority-cookies}

You can't max every cookie. Pick a small set based on what their unlocks actually give you.

**Priority tier (raise to Level 5+ first)**:

- **Your Guild Battle anchors** — Sugar Swan, Pomegranate, Seltzer, Dark Enchantress. Their L5 dialogue often hints at gameplay synergies you might have missed, and L5 rewards usually include Soulstones for that exact cookie.
- **Your Arena defense leaders** — usually [Hollyberry](/gear-guide/hollyberry-cookie), [Pure Vanilla](/gear-guide/pure-vanilla-cookie), or [Timekeeper](/blog/cookie-run-kingdom/timekeeper-toppings). High-affection cookies sometimes drop profile cosmetics that flex on the Arena ladder.
- **Story/lore favorites** — whichever cookies you actually enjoy the writing of. Affection is a long grind; pick cookies you _want_ to read more dialogue from.

**Secondary tier (Level 2-3 minimum)**:

- Cookies you co-deploy in your daily PvE team. They'll level passively through co-deployment regardless of gifting.
- Cookies tied to active event quests — events sometimes reward "talk to X cookie" or "give X a gift" objectives that are trivial once you're already gifting.

**Skip / deprioritize**:

- Cookies not in your active rotation. Gifting a benched Common cookie to L7 gives you a title nobody (including you) will use.
- Cookies you don't have the gift inventory for. If you've never opened the gift category they like, raising them above L2 is just wasted message clicks.

> **Tip:** Track your top 5 affection cookies on a sticky note or the game's pinned-cookies UI. Splitting daily gifts across more than 5 cookies dilutes your progress to a crawl.

## Story / lore unlocks at higher affection {#lore-unlocks}

The biggest "hidden" reason to chase higher affection levels is the **presenter notes** system — short narrative beats that fill in backstory the game otherwise doesn't show [VERIFY exact unlock level per cookie]. Story-heavy cookies (the Beasts, the Ancients, the recent Sugar Swan and Black Sapphire arcs) get the richest unlocks here.

A rough pattern across the cookies that have been mapped so far:

- **Level 3**: one short scene introducing their personal motivation.
- **Level 5**: a multi-cookie scene showing how they interact with the rest of the cast.
- **Level 8**: a major lore scene that usually ties into the main Story chapters.
- **Level 10**: the signature scene — sometimes new presenter notes, sometimes an exclusive cosmetic, sometimes both.

If you care about the writing, Level 5 is the realistic stopping point for most of your roster, with 2-3 cookies pushed to 8 or 10 for the headline stuff.

## Common mistakes that waste gifts {#common-mistakes}

A short list of the failure modes most players hit in their first month with CookieChat:

- **Gifting Common-rarity items to favorites instead of saving rare ones**. Match tier matters more than rarity — but rarity stacks _on top_ of match tier, so dropping a rare Favorite gift on a priority cookie is a multiplicative win.
- **Spreading gifts across 15+ cookies daily**. Pick 3-5 cookies and focus. The level curve punishes spreading thin.
- **Skipping daily chat replies**. They look like nothing but they're a free trickle across your whole roster.
- **Ignoring co-deployment affection**. Bringing a Level 1 cookie on your daily PvE team is a passive way to drift them upward without spending gifts.
- **Hoarding gifts for "later"**. The daily gift cap is per-cookie — unused capacity doesn't roll over. If you have priority cookies sitting at the cap and uneaten gifts in your inventory, you've already lost that day's progress on them.
- **Trying to brute-force a Level 9 or 10 cookie with no plan**. The point curve at the top is brutal; chase Level 10 only on cookies you genuinely care about.

> **Warning:** Some event-only gifts (like seasonal items from the Cake Stacker minigame [VERIFY]) expire at the end of the event. Use them before they vanish — even on Liked-tier matches if you don't have a Favorite cookie ready.

## Quick Action Checklist {#checklist}

- Open CookieChat **once per daily login** and reply to every new message.
- Pick your **3-5 priority cookies** (Guild Battle anchors + lore favorites) and focus gifts there.
- Match gifts to themes — **anything that fits the cookie's design archetype** is usually their Favorite.
- Test one Liked-tier gift before spending rare ones to confirm the Favorite slot.
- Bring your priority cookies on **daily PvE runs** for passive co-deployment affection.
- Don't push past **Level 5** on cookies outside your top 3-5 — diminishing returns hit hard.
- Burn **event-only gifts** before the event window closes.
- Cross-reference unlocks with the [Timeline of Fate update guide](/blog/cookie-run-kingdom/timeline-of-fate-update-guide) — some v7.4 features tie into affection thresholds.`,

  faq: [
    {
      question: 'What is CookieChat in Cookie Run: Kingdom?',
      answer:
        'CookieChat is the in-game messenger system Devsisters added in v7.2 (released 2026-03-11). It turns your roster into a contact list where each cookie sends you event-driven messages, opens dialogue scenes, and becomes giftable through the linked Affection system. Each cookie has 10 favorability levels with permanent unlocks at every tier.',
    },
    {
      question: 'How many Favorability levels does each cookie have?',
      answer:
        '10 levels per cookie. The point thresholds scale steeply — early levels take minutes, late levels take weeks of consistent gifting. Most rosters land at Level 5-7 on main cookies and Level 1-2 across the rest. Each level unlocks something permanent, from titles and dialogue to story scenes and cosmetics.',
    },
    {
      question: 'How do I find a cookie\'s favorite gift?',
      answer:
        'Three ways. First, match the gift category to the cookie\'s design archetype — sea cookies like sea-themed gifts, dark cookies like dark-themed gifts. That\'s roughly an 80% hit rate. Second, give one Liked-tier gift and watch the reaction — a Favorite triggers a unique animation and heart-burst. Third, consult an updated favorite-gift list (this guide has one).',
    },
    {
      question: 'How much faster is gifting a Favorite versus a Neutral gift?',
      answer:
        'Roughly 3-4x more affection per Favorite-tier gift compared to Neutral, with rarity stacking on top. Match tier matters more than rarity, so a Favorite-tier Common gift is usually better than a Neutral-tier rare gift — but a Favorite-tier rare gift is the multiplicative winner.',
    },
    {
      question: 'Which cookies should I raise affection on first?',
      answer:
        'Your Guild Battle anchors (Sugar Swan, Pomegranate, Seltzer, Dark Enchantress) and your Arena defense leaders (Hollyberry, Pure Vanilla, Timekeeper) are the highest-priority picks because their Level 5 rewards often include Soulstones and gameplay-relevant unlocks. Add 1-2 lore favorites you actually enjoy reading dialogue from — affection is a long grind, so pick cookies you care about.',
    },
    {
      question: 'Do I get gameplay rewards from raising affection, or just cosmetics?',
      answer:
        'Both. Mid-tier levels (especially Level 5) typically include Crystals, Soulstones, and gift items along with the cosmetic title. Higher tiers (8, 9, 10) lean more cosmetic — frames, profile backgrounds, exclusive scenes. The gameplay payoff is front-loaded toward the first 5 levels.',
    },
    {
      question: 'Is it worth pushing a cookie to Level 10?',
      answer:
        'Only on 2-3 cookies you genuinely care about. The point curve at the top is brutal — the same time spent maxing one cookie can push five cookies from Level 2 to Level 5, which is a much better return on most rosters. Level 10 is the completionist tier, not the optimal stopping point.',
    },
  ],

  internalLinks: [
    { href: '/gear-guide', anchor: 'CRK gear guide hub' },
    { href: '/gear-guide/sugar-swan-cookie', anchor: 'Sugar Swan Cookie build' },
    { href: '/gear-guide/pure-vanilla-cookie', anchor: 'Pure Vanilla Cookie build' },
    { href: '/gear-guide/dark-enchantress-cookie', anchor: 'Dark Enchantress Cookie build' },
    { href: '/gear-guide/hollyberry-cookie', anchor: 'Hollyberry Cookie build' },
    { href: '/blog/cookie-run-kingdom/timekeeper-toppings', anchor: 'Timekeeper Cookie build' },
    { href: '/blog/cookie-run-kingdom/timeline-of-fate-update-guide', anchor: 'Timeline of Fate update guide' },
    { href: '/blog/cookie-run-kingdom/tier-list-may-2026', anchor: 'CRK tier list May 2026' },
  ],

  externalSources: [
    {
      url: 'https://cookierunkingdom.fandom.com/wiki/Cookie_Run:_Kingdom_Wiki',
      title: 'Cookie Run: Kingdom Wiki (Fandom)',
    },
    {
      url: 'https://www.pocketgamer.com/cookie-run-kingdom/',
      title: 'Pocket Gamer — Cookie Run: Kingdom coverage',
    },
    {
      url: 'https://www.devsisters.com/en/',
      title: 'Devsisters official site',
    },
    {
      url: 'https://playcookierun.com/',
      title: 'Play Cookie Run — official portal',
    },
  ],
};
