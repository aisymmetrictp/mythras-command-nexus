import type { BlogPost } from '../../blogTypes';

export const crkStarJellyGuide: BlogPost = {
  slug: 'crk-star-jelly-guide',
  game: 'cookie-run-kingdom',
  category: 'beginner-guides',
  topicCluster: 'pve-strategy',

  tags: ['star-jelly', 'leveling', 'resources', 'f2p', 'progression'],

  title: 'CRK Star Jelly Guide — The Leveling Economy You Keep Botching',
  metaDescription:
    'Cookie Run: Kingdom EXP Star Jellies explained: the exact EXP each size gives, where to farm them, the free +10% Lab upgrade, and who to level first.',
  excerpt:
    "EXP Star Jelly is the single biggest bottleneck between you and a maxed roster — and most players pour it into the wrong cookies. Here's the leveling economy, by the numbers.",
  featuredImagePrompt:
    'Cookie Run: Kingdom leveling screen with a glowing pile of star-shaped EXP Star Jelly candies feeding into a cookie level-up ring, warm gold and blue UI glow, clean mobile-game interface, 16:9 banner',
  heroImage: '/images/blog/cookie-run-kingdom/crk-star-jelly-guide/hero.webp',
  heroImageAlt:
    'A large EXP Star Jelly icon from Cookie Run: Kingdom, the leveling item this guide breaks down by EXP value.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/crk-star-jelly-guide/hero.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/EXP_Star_Jelly',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/crk-star-jelly-guide/exp-star-jelly-small.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/EXP_Star_Jelly',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/crk-star-jelly-guide/exp-star-jelly-large.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/EXP_Star_Jelly',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/crk-star-jelly-guide/star-jelly-concentrate.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/EXP_Star_Jelly',
      license: 'Fandom CC-BY-SA',
    },
  ],

  publishDate: '2026-07-12T00:00:00.000Z',
  lastUpdated: '2026-07-12T00:00:00.000Z',

  primaryKeyword: 'crk star jelly',
  secondaryKeywords: [
    'cookie run kingdom star jelly',
    'exp star jelly guide',
    'how to level cookies crk',
    'star jelly concentrate',
    'crk leveling guide',
    'where to farm star jelly',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'monthly',
  evergreen: true,
  readingTimeMin: 11,

  toc: [
    { id: 'the-real-bottleneck-in-your-kingdom', label: 'The real bottleneck in your kingdom', level: 2 },
    { id: 'what-exp-star-jellies-actually-are', label: 'What EXP Star Jellies actually are', level: 2 },
    { id: 'the-exact-exp-each-jelly-gives', label: 'The exact EXP each jelly gives', level: 2 },
    { id: 'where-to-farm-star-jellies', label: 'Where to farm Star Jellies', level: 2 },
    { id: 'the-sugar-gnome-lab-upgrade-you-are-ignoring', label: 'The Sugar Gnome Lab upgrade you are ignoring', level: 2 },
    { id: 'star-jelly-concentrate-the-level-shortcut', label: 'Star Jelly Concentrate: the level shortcut', level: 2 },
    { id: 'who-to-pour-your-star-jelly-into-first', label: 'Who to pour your Star Jelly into first', level: 2 },
    { id: 'star-jelly-mistakes-that-stall-your-account', label: 'Star Jelly mistakes that stall your account', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Ask a stalled Cookie Run: Kingdom player why their teams keep dying and the answer is almost never "wrong cookies." It's that their cookies are under-leveled — and the thing standing between them and a maxed roster is a pile of star-shaped candy called EXP Star Jelly. It's the leveling currency, it's perpetually in short supply, and most players spend it on impulse instead of treating it like the economy it is. The difference between an efficient account and a stuck one is rarely luck; it's whether you understand the Star Jelly numbers.

So let's understand them. This is the guide to the entire leveling economy: what EXP Star Jellies are, the exact EXP each of the eight sizes hands out, where to actually farm them, the free Sugar Gnome Lab upgrade that quietly gives you more EXP per jelly, the Concentrate shortcut that skips grinding entirely, and — the part everyone gets wrong — who to pour your jelly into first. Get this right and your power level climbs noticeably faster with zero extra pulls.

## The real bottleneck in your kingdom

Here's the honest framing most guides skip: in the early and mid game, **Star Jelly, not crystals, is your binding constraint.** You can pull a fantastic cookie and still lose every fight because you can't afford to level them. Cookie levels drive base HP, ATK, and everything your toppings and buffs multiply on top of — an under-leveled Legendary loses to a well-leveled Epic more often than the gacha screen would suggest.

That makes Star Jelly a budgeting problem, not a spending impulse. Every jelly you dump into a cookie you'll never field is EXP you can't get back, and it directly slows the cookies you actually need. Treat it like the scarce resource it is and it stops being a bottleneck. This is the same efficiency mindset behind the [F2P crystal optimization](/blog/cookie-run-kingdom/f2p-crystal-optimization) guide — winning isn't about having more, it's about wasting less.

## What EXP Star Jellies actually are

![A small Level 1 EXP Star Jelly icon from Cookie Run: Kingdom.](/images/blog/cookie-run-kingdom/crk-star-jelly-guide/exp-star-jelly-small.webp)

EXP Star Jellies are **items used to increase the level of your Cookies.** They come in eight sizes, from a tiny Lv.1 jelly up to a hefty Lv.8, and each size grants a fixed amount of EXP when you feed it to a cookie on the level-up screen. They're categorized as **Free** items in your Storage and stack up to a massive **99,999** each, so you never have to worry about hoarding them — bank as many as you like.

The mental model that matters: Star Jelly is **fungible EXP.** A cookie doesn't care whether you feed it one big jelly or a handful of small ones — only the total EXP matters. That means your job is purely to move the largest efficient pile of EXP into the *right* cookie, which makes knowing the per-jelly values (next section) genuinely useful for planning. If you're brand new and still figuring out which cookies deserve that EXP, start with the [best beginner cookies](/blog/cookie-run-kingdom/best-beginner-cookies-crk) so you don't misfire early.

## The exact EXP each jelly gives

![A large Level 8 EXP Star Jelly icon from Cookie Run: Kingdom, the biggest single leveling item.](/images/blog/cookie-run-kingdom/crk-star-jelly-guide/exp-star-jelly-large.webp)

Here are the base EXP values for each of the eight jelly sizes. This is the hard number the game never puts in front of you:

- **Lv.1 jelly** — 14 EXP
- **Lv.2 jelly** — 60 EXP
- **Lv.3 jelly** — 150 EXP
- **Lv.4 jelly** — 400 EXP
- **Lv.5 jelly** — 800 EXP
- **Lv.6 jelly** — 1,600 EXP
- **Lv.7 jelly** — 3,000 EXP
- **Lv.8 jelly** — 8,000 EXP

Look at the curve: a single Lv.8 jelly is worth over 570 of the Lv.1 tiddlers, and each tier is a big jump over the last. The practical read is that **the big jellies do almost all the heavy lifting** — when you're pushing a cookie up a lot of levels, a stack of Lv.7 and Lv.8 jellies moves the bar far faster than a mountain of small ones. Don't sneer at the little ones though; they're perfectly good for topping a cookie off to an exact level without overshooting. Knowing these numbers lets you plan a level push instead of guessing, the same way the [magic candy priority guide](/blog/cookie-run-kingdom/crk-magic-candy-priority-guide) turns a fuzzy "upgrade stuff" into an actual plan.

## Where to farm Star Jellies

Star Jelly comes from a handful of reliable taps you should be checking constantly:

- **Cookie Houses.** Your Kingdom's Cookie Houses passively generate EXP Star Jelly over time — collect them every time you log in. This is your steady baseline income, so build and upgrade them (see the [kingdom building guide](/blog/cookie-run-kingdom/crk-kingdom-building-guide)).
- **The Fountain of Abundance.** A production building that yields Star Jelly among other resources — another passive tap to keep flowing.
- **World Exploration stages.** Clearing and re-running [World Exploration](/blog/cookie-run-kingdom/crk-world-exploration-guide) stages drops EXP Star Jelly, making it a farmable source when you need a burst.
- **Events.** EXP Star Jelly is a common reward in most events — grab every event jelly you can, because event income dwarfs passive trickle.
- **Shop packages.** Certain Shop packages include Star Jelly, though you should rarely pay real money purely for leveling fuel.

The takeaway: your passive buildings are your floor, and events are your spikes. If you're logging in daily and clearing your [daily checklist](/blog/cookie-run-kingdom/crk-daily-checklist), you're already collecting most of the Star Jelly the game hands out — the question is just whether you spend it well.

## The Sugar Gnome Lab upgrade you are ignoring

Here's a free EXP boost most players walk right past. The **Sugar Gnome Laboratory** has a research line — the **Tastier Star Jellies** upgrade — that increases the amount of EXP each jelly gives, by **up to 10%** at max rank. That's a permanent, account-wide multiplier on every single jelly you'll ever spend, and it costs nothing but Lab research to unlock.

Ten percent doesn't sound huge until you realize it applies to *all* your leveling forever. Over the lifetime of an account that's spending millions of EXP across dozens of cookies, a standing 10% discount on the grind is enormous — it's the definition of a compounding upgrade. If you haven't prioritized this in your Lab, do it: it pays for itself almost immediately and never stops paying. The [Sugar Gnome Lab guide](/blog/cookie-run-kingdom/crk-sugar-gnome-lab-guide) covers where it sits in the broader research priority list, but for leveling specifically, Tastier Star Jellies is one of the highest-value passive picks in the game.

## Star Jelly Concentrate: the level shortcut

![A Star Jelly Concentrate Lv.50 icon from Cookie Run: Kingdom, an item that instantly levels a cookie.](/images/blog/cookie-run-kingdom/crk-star-jelly-guide/star-jelly-concentrate.webp)

Separate from regular jellies, **Star Jelly Concentrate** is a premium item that **instantly raises a cookie to a set level** — the versions cover Lv.50, 60, 70, 80, and 90. Unlike normal jellies, Concentrate can be used **directly from your Storage**, and it only works on cookies **below** its listed level, so a Concentrate Lv.50 does nothing to a level-55 cookie.

The right way to use these: **spend them on a freshly obtained cookie you want to field immediately**, not on one that's already close to the Concentrate's level (which wastes most of the value). They're mostly package-exclusive, occasionally show up in events, and a **Concentrate Lv.50 can be bought for 1,000 Dragon Catnip Coins** in the Dragon City Shop from the Legend of the Red Dragon content. If you're farming that mode anyway (the [Dragon's Lair guide](/blog/cookie-run-kingdom/crk-dragons-lair-guide) covers the loop), a Concentrate is a strong way to skip the tedious early-level grind on a new key cookie.

## Who to pour your Star Jelly into first

This is where players hemorrhage progress, so be disciplined. The priority order for spending Star Jelly:

1. **Cookies on your actual main team.** Level the five cookies you run in your hardest content first, to the level cap you can currently reach. A cohesive, high-level team beats a roster of half-leveled favorites.
2. **A second-team or event-specific cookie** you genuinely need for a piece of content you're stuck on.
3. **Long-term investments** — a Legendary or Ancient you know you'll build eventually and are actively promoting.
4. **Everyone else — later.** Collection cookies and situational picks can wait; they don't need to be capped to sit in your kingdom.

The single rule underneath all of it: **level the cookies you play, not the cookies you like.** Cross-reference your roster against the [best PvE teams](/blog/cookie-run-kingdom/best-crk-pve-teams) and pour your jelly into that core. Spreading EXP thinly across your whole collection is the classic way to have a big roster and a weak account at the same time.

## Star Jelly mistakes that stall your account

A few traps that quietly cost players weeks of progress:

- **Leveling too many cookies at once.** The number-one killer. Focus your EXP on a tight main team instead of thin-spreading it — it's right up there with the errors in the [beginner mistakes guide](/blog/cookie-run-kingdom/crk-beginner-mistakes-to-avoid).
- **Skipping the Tastier Star Jellies Lab upgrade.** You're leaving a permanent 10% EXP boost on the table every day you don't have it.
- **Wasting Concentrate on nearly-capped cookies.** It only works below its listed level, so using a Lv.50 Concentrate on a level-48 cookie throws away most of its value.
- **Ignoring passive taps.** Uncollected Cookie Houses and Fountain of Abundance output is free EXP rotting in your kingdom — sweep them daily.
- **Leveling a cookie you won't field.** Every jelly is one-way; spend it on cookies that earn their slot, and check a [tier list](/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list) before you commit a big pile.

## Quick Action Checklist

- [ ] Treat Star Jelly as your real bottleneck, not crystals, in the early and mid game
- [ ] Remember the big values: Lv.6 = 1,600, Lv.7 = 3,000, Lv.8 = 8,000 EXP
- [ ] Use large jellies for big level pushes and small ones to top off to an exact level
- [ ] Collect Cookie Houses and the Fountain of Abundance every single login
- [ ] Grind World Exploration stages and grab every event jelly for burst income
- [ ] Prioritize the Tastier Star Jellies upgrade in the Sugar Gnome Lab for a free +10%
- [ ] Save Star Jelly Concentrate for freshly obtained cookies well below its level
- [ ] Level the cookies you actually play first — your main team to the current cap
- [ ] Stop thin-spreading EXP across your whole collection`,

  faq: [
    {
      question: 'How much EXP does each Star Jelly give in Cookie Run: Kingdom?',
      answer:
        'The eight EXP Star Jelly sizes give fixed base EXP: Lv.1 = 14, Lv.2 = 60, Lv.3 = 150, Lv.4 = 400, Lv.5 = 800, Lv.6 = 1,600, Lv.7 = 3,000, and Lv.8 = 8,000. The larger jellies do almost all the heavy lifting for big level pushes, while the small ones are useful for topping a cookie off to an exact level. The Sugar Gnome Laboratory Tastier Star Jellies upgrade increases these amounts by up to 10%.',
    },
    {
      question: 'Where do you farm Star Jelly in Cookie Run: Kingdom?',
      answer:
        'EXP Star Jelly is primarily produced passively by Cookie Houses and the Fountain of Abundance in your Kingdom, and it drops from World Exploration stages. It is also a common reward in most events and appears in certain Shop packages. Collect your passive buildings on every login and grab every event jelly, since event income far outpaces the passive trickle.',
    },
    {
      question: 'What is Star Jelly Concentrate and how should you use it?',
      answer:
        'Star Jelly Concentrate is a premium item that instantly raises a cookie to a set level — the versions cover Lv.50, 60, 70, 80, and 90 — and can be used directly from Storage. It only works on cookies below its listed level, so the best use is on a freshly obtained cookie you want to field right away, not one already near that level. Concentrate is mostly package-exclusive, with a Lv.50 version buyable for 1,000 Dragon Catnip Coins in the Dragon City Shop.',
    },
    {
      question: 'Who should you level first in Cookie Run: Kingdom?',
      answer:
        'Level the cookies you actually play, not the ones you like. Prioritize the five cookies on your main team, pushing them to your current level cap, before spending EXP anywhere else. After your core team, level a second-team or event-specific cookie you need to clear stuck content, then long-term Legendary or Ancient investments. Thin-spreading Star Jelly across your whole collection is the fastest way to have a big roster and a weak account.',
    },
    {
      question: 'Does the Sugar Gnome Lab boost Star Jelly EXP?',
      answer:
        'Yes. The Sugar Gnome Laboratory has a Tastier Star Jellies research line that increases the EXP each jelly gives by up to 10% at max rank. It is a permanent, account-wide multiplier that applies to every jelly you will ever spend, which makes it one of the highest-value passive upgrades in the game. Prioritize it early because it pays for itself almost immediately and keeps paying for the life of the account.',
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/crk-sugar-gnome-lab-guide', anchor: 'Sugar Gnome Lab guide' },
    { href: '/blog/cookie-run-kingdom/crk-kingdom-building-guide', anchor: 'kingdom building guide' },
    { href: '/blog/cookie-run-kingdom/crk-world-exploration-guide', anchor: 'World Exploration guide' },
    { href: '/blog/cookie-run-kingdom/best-crk-pve-teams', anchor: 'best PvE teams' },
    { href: '/blog/cookie-run-kingdom/crk-daily-checklist', anchor: 'daily checklist' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/EXP_Star_Jelly', title: 'Cookie Run: Kingdom Wiki — EXP Star Jelly' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Sugar_Gnome_Laboratory', title: 'Cookie Run: Kingdom Wiki — Sugar Gnome Laboratory' },
  ],

  tldr:
    "EXP Star Jelly is the leveling currency in Cookie Run: Kingdom and usually your real early-game bottleneck. The eight sizes give fixed EXP — Lv.1 = 14 up to Lv.8 = 8,000 — and it's farmed passively from Cookie Houses and the Fountain of Abundance, plus World Exploration stages and events. Prioritize the Sugar Gnome Lab's Tastier Star Jellies upgrade for a permanent +10% EXP boost, use Star Jelly Concentrate to instantly level freshly obtained key cookies, and spend your jelly on the cookies you actually play — your main team to the current cap — rather than thin-spreading it across your whole collection.",
};
