import type { BlogPost } from '../../blogTypes';

export const crkMileagePointsGuide: BlogPost = {
  slug: 'crk-mileage-points-guide',
  game: 'cookie-run-kingdom',
  category: 'beginner-guides',
  topicCluster: 'pve-strategy',

  tags: ['mileage', 'gacha', 'currency', 'f2p', 'soulstones'],

  title: 'CRK Mileage Points Guide — The F2P Currency You Keep Wasting',
  metaDescription:
    'Cookie Run: Kingdom Mileage Points explained: how you earn them, exact per-pull values, what to buy in the Mileage Shop, and the F2P priority order.',
  excerpt:
    "Every gacha pull quietly hands you Mileage Points — and most players let them rot. Here's exactly how the currency works and the priority order that turns it into free Soulstones.",
  featuredImagePrompt:
    'Cookie Run: Kingdom gacha pull screen with GingerBrave, glowing crystals and a stack of Mileage Point tokens, warm gold UI glow, clean mobile-game interface, 16:9 banner',
  heroImage: '/images/blog/cookie-run-kingdom/crk-mileage-points-guide/hero.webp',
  heroImageAlt:
    'A Cookie Run: Kingdom Cookie Gacha pull screen, the source of the Mileage Points this guide explains how to spend.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/crk-mileage-points-guide/hero.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Gacha',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/crk-mileage-points-guide/mileage-point.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Currencies',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/crk-mileage-points-guide/crystal.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Currencies',
      license: 'Fandom CC-BY-SA',
    },
  ],

  publishDate: '2026-07-01T00:00:00.000Z',
  lastUpdated: '2026-07-01T00:00:00.000Z',

  primaryKeyword: 'crk mileage points',
  secondaryKeywords: [
    'cookie run kingdom mileage',
    'mileage shop cookie run',
    'mileage points guide',
    'how to earn mileage crk',
    'crk mileage shop priority',
    'cookie run kingdom soulstones free',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'monthly',
  evergreen: true,
  readingTimeMin: 11,

  toc: [
    { id: 'the-currency-hiding-in-plain-sight', label: 'The currency hiding in plain sight', level: 2 },
    { id: 'what-mileage-points-actually-are', label: 'What Mileage Points actually are', level: 2 },
    { id: 'how-you-earn-mileage-points', label: 'How you earn Mileage Points', level: 2 },
    { id: 'the-exact-per-pull-values', label: 'The exact per-pull values', level: 2 },
    { id: 'what-to-buy-in-the-mileage-shop', label: 'What to buy in the Mileage Shop', level: 2 },
    { id: 'the-f2p-priority-order', label: 'The F2P priority order', level: 2 },
    { id: 'mileage-vs-the-pity-system', label: 'Mileage vs the pity system', level: 2 },
    { id: 'mistakes-that-waste-your-mileage', label: 'Mistakes that waste your Mileage', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Here's a number that should bother you: if you've been pulling gacha for a few months and never opened the Mileage Shop, you're sitting on a pile of free Epic Soulstones you've done nothing with. Mileage Points are the currency the game hands you on *every single pull* — win or lose, dupe or new — and they never expire. They're the closest thing Cookie Run: Kingdom has to a guaranteed-progress currency, and the reason most players waste them is that the game barely tells you they exist.

This is the guide to fixing that. I'll cover exactly what Mileage Points are, how you earn them, the precise per-pull values (Common Soulstone = 1 point, Rare = 2, Epic = 5, and a full Cookie counts as 20 of its rarity's stones), what the Mileage Shop actually sells, and the priority order that turns this ignored currency into real roster progress. If you're still learning the gacha itself, start with the [gacha pull guide](/blog/cookie-run-kingdom/crk-gacha-pull-guide) and come back — this is the layer most people skip.

## The currency hiding in plain sight

Let's be honest about why this currency gets ignored: the game buries it. You pull, you get your cookies, you see the crystals you spent — and the little Mileage Point tally slides by without ceremony. There's no banner announcing "you now have enough for an Epic Soulstone." The Mileage Shop sits inside the Gacha menu, one tab over, and if you never tap it, it never bugs you.

That's a design quirk you should exploit. Because Mileage accrues passively and never expires, it's effectively a savings account that fills every time you gacha. The players who treat it that way — check the shop, spend deliberately — pull ahead of players with identical luck who let it rot. This is the same F2P discipline that separates efficient accounts in the [F2P crystal optimization](/blog/cookie-run-kingdom/f2p-crystal-optimization) guide: it's not about pulling more, it's about wasting less.

## What Mileage Points actually are

![A Mileage Point token icon from Cookie Run: Kingdom.](/images/blog/cookie-run-kingdom/crk-mileage-points-guide/mileage-point.webp)

Mileage Points are a **secondary gacha currency** earned automatically whenever you draw from the Cookie Gacha, a Featured Gacha, or the Treasure Gacha. Every draw grants points based on what you pulled, and you spend them in the **Mileage Shop** (found inside the Gacha menu) on rare items — most importantly, Soulstones for Epic Cookies.

Three things make them uniquely valuable:

- **They're guaranteed.** Unlike the pull itself, which is RNG, the Mileage is a fixed reward every time. Bad luck on the banner still fills your Mileage bar.
- **They never expire.** You can bank them across months and cash out on exactly the Epic you want.
- **Dupes actively feed them.** Pulling a maxed-out Cookie or Treasure — normally the most frustrating gacha outcome — instead converts into *bonus* Mileage. Your "wasted" dupes aren't wasted at all.

That last point is the mental shift. In most gachas a maxed dupe is dead weight. Here it's fuel. Don't confuse this with the crystals you spend to pull — those are the [premium currency you optimize separately](/blog/cookie-run-kingdom/f2p-crystal-optimization); Mileage is the byproduct that accumulates on the side.

## How you earn Mileage Points

You earn Mileage from exactly three sources, all of them gacha draws:

- **Cookie Gacha and Featured Gacha pulls.** Every cookie or Soulstone you draw grants points based on its rarity.
- **Treasure Gacha pulls.** Every Treasure draw grants points the same way.
- **Duplicate overflow.** When you pull a Cookie already promoted to its highest grade, or a Treasure already at max level, the dupe converts into additional Mileage instead of being lost.

There's no daily quest, no login bonus, no side activity for it — Mileage is purely a function of how much you gacha. That's why it compounds for active players: the more you pull (efficiently), the faster your Mileage savings account fills, and the more free Soulstones you can cash out later. If you're pulling on new banners anyway, you're earning Mileage whether you notice or not.

## The exact per-pull values

Here are the concrete numbers, because "you earn some points" is useless for planning. Mileage is granted per Soulstone by rarity:

- **Common Soulstone** — 1 Mileage Point
- **Rare Soulstone** — 2 Mileage Points
- **Epic Soulstone** — 5 Mileage Points

And the key multiplier: **each full Cookie you pull counts as 20 of that rarity's Soulstones/Soulcores** for Mileage purposes. So pulling a full Epic Cookie is worth 20 x 5 = 100 Mileage Points; a full Rare Cookie is 20 x 2 = 40. Special and Super Epic cookies and treasures grant Mileage at the **same rate as Epic** (they're bucketed with Epic for this calculation). Treasures follow the same rarity-based scaling as cookies.

The practical read: Epic and higher pulls are where your Mileage really accumulates, and a run of dupes on a Featured banner quietly builds a serious point balance. Track roughly how many Epic-tier pulls you've made and you'll know you're due for a Mileage Shop trip. This is the kind of hard number the game hides, and knowing it lets you plan instead of guess — the same reasoning behind the [magic candy priority guide](/blog/cookie-run-kingdom/crk-magic-candy-priority-guide), where knowing the exact cost changes what you spend on.

## What to buy in the Mileage Shop

![A Crystal currency icon from Cookie Run: Kingdom, the premium gacha currency Mileage is earned alongside.](/images/blog/cookie-run-kingdom/crk-mileage-points-guide/crystal.webp)

The Mileage Shop stocks a rotating and standing set of rare items. The categories that matter:

- **Epic Cookie Soulstones.** The headline offer and the main reason to save Mileage — you pick the Epic and buy stones directly, dodging gacha RNG entirely to promote a cookie you actually want.
- **EXP Star Jellies.** Leveling fuel, always useful, never wasted.
- **Speed-Ups.** For building your [Kingdom](/blog/cookie-run-kingdom/crk-kingdom-building-guide) and shortening timers.
- **Arena Tickets.** More PvP runs means more Medals for Arena-shop cookies.
- **Treasure Tickets.** Extra Treasure Gacha pulls, which — nicely — earn you *more* Mileage in turn.

The Soulstones are the prize; everything else is filler you buy with overflow. The whole point of the shop is targeted, RNG-free progress: instead of praying a specific Epic drops, you grind Mileage and *buy* their stones. That's a genuinely powerful F2P lever, and it's why letting Mileage rot is such a common, costly mistake.

## The F2P priority order

If you're free-to-play (or just efficient), here's the order I'd spend Mileage in:

1. **Epic Cookie Soulstones for a cookie you're actively promoting.** This is the single best use — targeted, RNG-free roster progress. Pick an Epic that's on your real teams (cross-reference the [best PvE teams](/blog/cookie-run-kingdom/best-crk-pve-teams)) and funnel stones into them.
2. **Arena Tickets** — but only if you're grinding Arena for Medal-shop cookies. More runs, more Medals, compounding value.
3. **EXP Star Jellies** — reliable leveling fuel when you have no urgent Soulstone target.
4. **Treasure Tickets** — situationally, when you're chasing a specific Treasure (see the [treasures guide](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide)), and they loop back into more Mileage.
5. **Speed-Ups** — last, as overflow, when your Kingdom build queue needs it.

The one hard rule: **Soulstones first.** Everything else is what you buy once your Epic-promotion needs are covered. Spending Mileage on Speed-Ups while an Epic you use sits under-promoted is the classic beginner misfire — right up there with the errors in the [beginner mistakes guide](/blog/cookie-run-kingdom/crk-beginner-mistakes-to-avoid).

## Mileage vs the pity system

Don't confuse Mileage with the gacha's **pity system** — they're two separate safety nets that work together. The pity system guarantees you a Cookie of any rarity every 10 draws, an Epic every 100 draws, and (on Legendary/Ancient event gachas) one of the featured cookies after 250 draws. That's the game protecting you from catastrophic RNG *within* a pull session.

Mileage is the *other* net: it converts the value of every pull — including the dupes pity can't help with — into a currency you spend on your terms. Pity gets you cookies you didn't choose; Mileage lets you buy Soulstones you did. Together they mean no pull is ever fully wasted: bad luck still fills your Mileage bar, and enough draws still trip pity. Understanding both is core gacha literacy — the [gacha pull guide](/blog/cookie-run-kingdom/crk-gacha-pull-guide) covers when to pull to make the most of each.

## Mistakes that waste your Mileage

A few traps that quietly cost players progress:

- **Never opening the Mileage Shop.** The big one. If you don't check it, you can't spend it, and Soulstones you could have bought months ago sit unclaimed.
- **Buying Speed-Ups over Soulstones.** Speed-Ups feel productive but are the lowest-value spend. Cover your Epic promotions first.
- **Treating dupes as pure losses.** A maxed dupe is Mileage fuel, not a bad pull — factor that into how you feel about "bad" ten-pulls.
- **Spending on Epics you'll never field.** Buy Soulstones for cookies on your actual teams, not whoever's cheapest. Check a [tier list](/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list) before you commit.
- **Ignoring it as a newer player.** Mileage compounds — the earlier you start spending it deliberately, the further ahead you get.

## Quick Action Checklist

- [ ] Open the Mileage Shop inside the Gacha menu right now and check your balance
- [ ] Spend Mileage on Epic Cookie Soulstones for a cookie on your real teams first
- [ ] Remember the values: Common stone = 1, Rare = 2, Epic = 5 Mileage Points
- [ ] Remember a full Cookie counts as 20 of its rarity's stones (a full Epic = 100 points)
- [ ] Treat maxed-out dupes as Mileage fuel, not wasted pulls
- [ ] Buy Arena Tickets only if you're grinding Arena for Medal-shop cookies
- [ ] Use EXP Star Jellies, Treasure Tickets, and Speed-Ups as overflow, not priorities
- [ ] Don't confuse Mileage with pity — bank Mileage, let pity handle bad-luck pulls`,

  faq: [
    {
      question: 'How do you earn Mileage Points in Cookie Run: Kingdom?',
      answer:
        'Mileage Points are earned automatically from every draw in the Cookie Gacha, Featured Gacha, and Treasure Gacha. Each pull grants points based on the rarity of what you drew, and pulling a Cookie or Treasure that is already maxed out converts the duplicate into bonus Mileage instead of being lost. There is no daily quest or login bonus — Mileage is purely a function of how much you gacha, and it never expires.',
    },
    {
      question: 'How many Mileage Points does each pull give?',
      answer:
        'Mileage is granted per Soulstone by rarity: a Common Soulstone gives 1 point, a Rare gives 2, and an Epic gives 5. Each full Cookie you pull counts as 20 of that rarity\'s Soulstones, so a full Epic Cookie is worth 100 Mileage Points and a full Rare Cookie is worth 40. Special and Super Epic cookies and treasures grant Mileage at the same rate as Epic.',
    },
    {
      question: 'What should you buy with Mileage Points?',
      answer:
        'Buy Epic Cookie Soulstones first — they let you promote a cookie you actually want without gacha RNG, which is the single best use of Mileage. After that, spend overflow on Arena Tickets (if you grind Arena), EXP Star Jellies, Treasure Tickets, and Speed-Ups. The Mileage Shop, found inside the Gacha menu, is the RNG-free way to make targeted roster progress.',
    },
    {
      question: 'Do Mileage Points expire in Cookie Run: Kingdom?',
      answer:
        'No. Mileage Points never expire, which is what makes them so valuable — you can bank them across months and cash out on exactly the Epic Cookie Soulstones you want. Because they accrue from every pull (including duplicates) and never decay, Mileage effectively works like a savings account that fills every time you gacha. The main mistake is simply never opening the Mileage Shop to spend them.',
    },
    {
      question: 'Is Mileage the same as the gacha pity system?',
      answer:
        'No, they are two separate safety nets. The pity system guarantees a Cookie of any rarity every 10 draws, an Epic every 100 draws, and one featured cookie after 250 draws on Legendary/Ancient event gachas. Mileage instead converts the value of every pull — including dupes — into a currency you spend on your own terms in the Mileage Shop. Pity gives you cookies you did not choose; Mileage lets you buy Soulstones you did.',
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/crk-gacha-pull-guide', anchor: 'gacha pull guide' },
    { href: '/blog/cookie-run-kingdom/f2p-crystal-optimization', anchor: 'F2P crystal optimization' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide', anchor: 'treasures guide' },
    { href: '/blog/cookie-run-kingdom/crk-beginner-mistakes-to-avoid', anchor: 'beginner mistakes to avoid' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list', anchor: 'CRK tier list' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Currencies', title: 'Cookie Run: Kingdom Wiki — Currencies' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Gacha', title: 'Cookie Run: Kingdom Wiki — Gacha' },
  ],

  tldr:
    'Mileage Points are a secondary gacha currency earned automatically from every Cookie, Featured, and Treasure Gacha pull — including maxed-out duplicates — and they never expire. The values are fixed: Common Soulstone = 1 point, Rare = 2, Epic = 5, and each full Cookie counts as 20 of its rarity\'s stones (a full Epic = 100). Spend them in the Mileage Shop, prioritizing Epic Cookie Soulstones for cookies on your real teams to make RNG-free roster progress, with Arena Tickets, Star Jellies, and Speed-Ups as overflow. Mileage is a separate safety net from the pity system.',
};
