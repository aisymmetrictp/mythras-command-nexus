import type { BlogPost } from '../../blogTypes';

export const genshinResinManagementGuide: BlogPost = {
  slug: 'genshin-resin-management-guide',
  game: 'genshin-impact',
  category: 'game-guides',
  topicCluster: 'genshin-guides',

  tags: ['resin', 'condensed-resin', 'fragile-resin', 'farming', 'progression'],

  title: 'Genshin Impact Resin Management Guide — Stop Wasting Your Cap',
  metaDescription:
    'How Original Resin actually works in Genshin Impact: the 200 cap, the 8-minute tick, Condensed Resin math, the weekly boss discount, and how to never overflow.',
  excerpt:
    'Original Resin regenerates at exactly one unit every eight minutes, which means a full 200 cap takes 26 hours and 40 minutes to refill. If you sleep on it, you are quietly throwing away progression every single day.',
  featuredImagePrompt:
    'A Genshin Impact domain interior with a glowing challenge blossom, warm painterly lighting, resin energy motif, no UI overlays',

  heroImage: '/images/blog/genshin-impact/genshin-resin-management-guide/hero-domain.webp',
  heroImageAlt:
    'The interior of a Genshin Impact Domain, where Petrified Trees are revitalised with Original Resin to claim artifact and talent-material rewards.',
  imageSources: [
    {
      src: '/images/blog/genshin-impact/genshin-resin-management-guide/hero-domain.webp',
      sourceUrl: 'https://genshin-impact.fandom.com/wiki/Domains',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/genshin-impact/genshin-resin-management-guide/original-resin.webp',
      sourceUrl: 'https://genshin-impact.fandom.com/wiki/Original_Resin',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/genshin-impact/genshin-resin-management-guide/condensed-resin.webp',
      sourceUrl: 'https://genshin-impact.fandom.com/wiki/Condensed_Resin',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/genshin-impact/genshin-resin-management-guide/fragile-resin.webp',
      sourceUrl: 'https://genshin-impact.fandom.com/wiki/Fragile_Resin',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/genshin-impact/genshin-resin-management-guide/artifact-strongbox.webp',
      sourceUrl: 'https://genshin-impact.fandom.com/wiki/Artifact',
      license: 'Fandom CC-BY-SA',
    },
  ],

  publishDate: '2026-07-23T00:00:00.000Z',
  lastUpdated: '2026-07-23T00:00:00.000Z',

  primaryKeyword: 'genshin resin management',
  secondaryKeywords: [
    'genshin original resin cap',
    'genshin condensed resin',
    'genshin fragile resin',
    'genshin resin regeneration rate',
    'genshin how much resin per day',
    'genshin weekly boss resin discount',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,

  toc: [
    { id: 'resin-is-the-real-currency', label: 'Resin Is the Real Currency', level: 2 },
    { id: 'how-original-resin-actually-works', label: 'How Original Resin Actually Works', level: 2 },
    { id: 'the-numbers-you-have-to-memorise', label: 'The Numbers You Have to Memorise', level: 3 },
    { id: 'what-everything-costs', label: 'What Everything Costs', level: 3 },
    { id: 'condensed-resin-is-not-optional', label: 'Condensed Resin Is Not Optional', level: 2 },
    { id: 'the-condensed-resin-math', label: 'The Condensed Resin Math', level: 3 },
    { id: 'where-condensed-resin-does-not-work', label: 'Where Condensed Resin Does Not Work', level: 3 },
    { id: 'the-weekly-boss-discount-people-ignore', label: 'The Weekly Boss Discount People Ignore', level: 2 },
    { id: 'fragile-resin-and-when-to-burn-it', label: 'Fragile Resin and When to Burn It', level: 2 },
    { id: 'should-you-ever-spend-primogems-on-resin', label: 'Should You Ever Spend Primogems on Resin', level: 2 },
    { id: 'a-daily-routine-that-never-overflows', label: 'A Daily Routine That Never Overflows', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `## Resin Is the Real Currency

Primogems get all the attention because pulling is loud and exciting. But the thing actually gating your account is quieter and more ruthless: Original Resin. It is the energy you spend to claim rewards from Domains, Ley Line Outcrops and bosses, and it regenerates so slowly that if you ignore it for a day you have permanently deleted progression that you cannot buy back at any sane price.

Here is the claim this whole guide rests on: Original Resin regenerates at exactly one unit every eight minutes, up to a cap of 200. That means a completely empty tank refills in 26 hours and 40 minutes, and a full one overflows the moment you stop paying attention. Over a week the game hands you 1,260 resin whether you spend it or not — and every point you let sit at the cap is a point you threw in the bin.

Managing resin well is not glamorous. It is also the single biggest lever a non-whale account has. Let's break down the mechanics, then the routine.

![The Original Resin item icon, the energy resource spent to claim challenge rewards in Genshin Impact.](/images/blog/genshin-impact/genshin-resin-management-guide/original-resin.webp)

## How Original Resin Actually Works

Every account regenerates resin passively as long as it is below the cap. The clock only runs while you are under 200 — once you hit the ceiling, regeneration stops entirely and the timer sits there mocking you. Click the resin icon at the top of the map screen to see the countdown to your next unit and to a full refill.

One detail that quietly rewards you for spending: any use of Original Resin, except converting it into Condensed Resin, awards Adventure EXP at a 1:5 ratio. Spend 20 resin and you pocket 100 Adventure EXP on top of the drops. It is a small nudge, but it is real, and it is another reason to keep the tank moving.

### The Numbers You Have to Memorise

These are the load-bearing figures for the entire economy:

- **Cap:** 200 Original Resin.
- **Regeneration:** 1 unit every 8 minutes.
- **Per day:** 180 resin.
- **Per week:** 1,260 resin.
- **Empty to full:** 26 hours and 40 minutes.

Notice the mismatch: the cap is 200 but you generate 180 a day. That gap is why "log in once a day" is fine but "log in once every 30 hours" is not — the moment your refill time exceeds a day, you start overflowing before you next open the game.

### What Everything Costs

Resin costs are fixed and worth knowing cold:

- **Ley Line Outcrops** (Blossoms of Wealth for Mora, Blossoms of Revelation for EXP books): 20 or 40, or 1 Condensed Resin.
- **Domains** (artifacts, talent books, weapon ascension materials): 20 or 40, or 1 Condensed Resin.
- **Normal (world) Bosses:** 40 resin for the boss drops.
- **Weekly (Trounce) Bosses:** 30 resin — and this one has a catch we'll get to.

The 20-versus-40 choice on Domains and Ley Lines is a reward-tier toggle: 40 resin pulls a full haul, 20 pulls a reduced one. On a healthy account you almost always take the 40 option and get more per resin spent.

## Condensed Resin Is Not Optional

If you are past the early game and not crafting Condensed Resin, you are leaving efficiency on the table every day. Condensed Resin lets you run a Domain or Ley Line Outcrop once and collect three sets of rewards at one time, including triple Adventure EXP and Companionship EXP.

![The Condensed Resin item icon, crafted from Original Resin to claim triple rewards in one Domain run.](/images/blog/genshin-impact/genshin-resin-management-guide/condensed-resin.webp)

The value is not more rewards per resin — the drops are the same per unit. The value is your *time*. One Domain run with a Condensed Resin plus your regular 40 nets you the equivalent of running that Domain four times, without the loading screens, the walk back to the door, and the re-clearing. When you are farming a specific artifact set for weeks, that saved friction is the whole point.

### The Condensed Resin Math

To unlock it you need the recipe, Instructions: Condensed Resin, which you get by reaching Reputation Level 3 in Liyue or by buying it from the blacksmith in Mondstadt or Liyue. After that:

- Each Condensed Resin costs **60 Original Resin**, **1 Crystal Core**, and **100 Mora** to craft.
- You can hold a **maximum of 5** at once.
- Spending one grants **300 Adventure EXP** (versus the 200 you'd get spending 40 raw resin, because the 1:5 ratio applies to the three sets).

Crystal Cores come from Crystalflies and Cryo Crystalflies out in the overworld, so keep a habit of catching them. Five held Condensed Resin is a nice buffer for a farming session, or a safety net for a day you know you can only log in briefly.

### Where Condensed Resin Does Not Work

This trips up a lot of players. Condensed Resin **cannot** be used on Trounce Blossoms — that is, neither Normal Bosses' overworld drops that cost 40 nor Weekly Bosses. It also cannot be used to claim rewards during most limited-time Events that cost Original Resin, unless that specific event says otherwise. So Condensed Resin is a Domain-and-Ley-Line tool exclusively. Plan your crafting around that.

## The Weekly Boss Discount People Ignore

Here is a genuine free lunch that a shocking number of players walk past. Weekly Bosses (Trounce Domains — Stormterror, Childe, Azhdaha, the Raiden Shogun narrative boss, and so on) cost **30 resin for your first three claimed rewards each week**, then jump to **60 resin** for any claim after that.

![A Genshin Impact Domain interior, where weekly boss and artifact farming both consume your Original Resin.](/images/blog/genshin-impact/genshin-resin-management-guide/hero-domain.webp)

The lesson is simple and strict: claim your three discounted weekly boss rewards every single week before the Monday 04:00 server reset, and stop at three unless you have a very specific reason to pay double. Those first three claims are the cheapest talent-level-up materials in the game per resin spent. Skipping a week is not a small miss — weekly boss materials gate every character's talents past level six, so a missed week is a character that stays underleveled longer.

## Fragile Resin and When to Burn It

Fragile Resin is the premium refill. Each one instantly restores 60 Original Resin, and Transient Resin (from the Serenitea Pot's Realm Currency) does the same. You earn Fragile Resin from the Battle Pass, Spiral Abyss progress, events, and Reputation rewards, so a steady account accumulates a stash over time.

![The Fragile Resin item icon, a consumable that instantly restores 60 Original Resin.](/images/blog/genshin-impact/genshin-resin-management-guide/fragile-resin.webp)

The discipline: **do not hoard Fragile Resin forever, and do not spray it aimlessly.** Two situations justify cracking it open. First, a new artifact Domain or character-material crunch where you need to farm hard for a limited window. Second, a double-drop event — HoYoverse periodically runs "Ley Line Overflow" style events that double Domain or Ley Line rewards for a set number of runs. Burning Fragile Resin during a double-drop window literally doubles the value of that refill. Saving your stack for those events is the closest thing to free efficiency the game offers.

![The Artifact Strongbox and inventory menu, where farmed Domain artifacts pile up and get managed.](/images/blog/genshin-impact/genshin-resin-management-guide/artifact-strongbox.webp)

## Should You Ever Spend Primogems on Resin

You can pay Primogems to refill 60 resin at a time, up to six times a day, and the price climbs each refill: 50, then 100, then 100, then 150, then 200, then 200 Primogems. That first refill — 60 resin for 50 Primogems — is the only one that is even close to reasonable, and even that is a bad trade for most players, because 50 Primogems is a third of a wish.

For a free-to-play account chasing pulls, the answer is almost always no. Primogems are your pull currency; converting them into resin is converting your five-star odds into artifact farming, and artifacts come back every day while banners do not. The math on where those Primogems are better spent lives in our [Genshin wish and gacha guide](/blog/genshin-impact/genshin-gacha-wish-guide). Spenders occasionally take the first refill during a hard farming push, but treat it as an exception, not a routine.

One more note for the min-maxers: manual refills from Fragile Resin or Primogems can push you *over* the 200 cap, up to a hard ceiling of 2,000 Original Resin. Refilling is blocked once you are above 1,940, since another 60 would break the ceiling. That overflow buffer is how dedicated players bank resin ahead of a known artifact grind.

## A Daily Routine That Never Overflows

Put it together and the daily loop is short:

1. **Log in at least once every 24 hours.** Your tank fills 180 a day against a 200 cap, so a single daily login keeps you from overflowing. Missing a day is a guaranteed loss.
2. **Spend down to a low number, not zero.** Leaving a little headroom is fine; leaving 200 sitting is not.
3. **Craft Condensed Resin when you're farming Domains or Ley Lines**, and catch Crystalflies so you always have Crystal Cores for it.
4. **Claim three Weekly Boss rewards before Monday reset**, every week, at the 30-resin discount.
5. **Bank Fragile Resin for double-drop events** instead of spending it on an ordinary day.

Where your resin should actually go depends on what your account needs — talent books, weapon materials, or the artifact grind that never truly ends. The [Genshin artifact guide](/blog/genshin-impact/genshin-artifact-guide) covers which Domains are worth the resin, and the [Genshin best F2P teams](/blog/genshin-impact/genshin-best-f2p-teams) piece points free accounts at the characters whose materials are worth farming first. More Genshin coverage lives on the [Genshin Impact coverage hub](/blog/genshin-impact), and the rest of our guides are on the [Mythras blog](/blog).

## Quick Action Checklist

- Memorise the core numbers: 200 cap, 1 unit per 8 minutes, 180 per day, 1,260 per week, 26h40m from empty to full.
- Log in at least once a day so you never overflow past the 200 cap.
- Take the 40-resin option on Domains and Ley Line Outcrops for the full reward tier.
- Unlock Condensed Resin (Liyue Reputation Level 3 or buy the recipe) and craft it for Domain and Ley Line runs — 60 resin, 1 Crystal Core, 100 Mora each, hold up to 5.
- Remember Condensed Resin does not work on bosses or most events.
- Claim exactly three Weekly Boss rewards each week at the 30-resin discount before Monday 04:00 reset; the 4th costs 60.
- Hoard Fragile Resin for double-drop events, then spend it to double the value.
- Don't convert Primogems to resin as an F2P player; the first refill (60 for 50 Primogems) is the only tolerable one.
- Catch Crystalflies for Crystal Cores so Condensed Resin crafting never stalls.
`,

  faq: [
    {
      question: 'How fast does Original Resin regenerate in Genshin Impact?',
      answer:
        'Original Resin regenerates at a rate of one unit every eight minutes, as long as you are below the cap of 200. That works out to 180 resin per day and 1,260 per week, and a full refill from zero to 200 takes 26 hours and 40 minutes. Regeneration stops entirely once you hit the 200 cap, so any resin left sitting at maximum is wasted.',
    },
    {
      question: 'What is the maximum Original Resin cap?',
      answer:
        'The passive cap is 200 Original Resin. However, manual refills from Fragile Resin, Transient Resin, or Primogems can push you above 200, up to a hard ceiling of 2,000. Manual refilling is blocked once your count is above 1,940, because another 60-resin refill would exceed the 2,000 hard cap.',
    },
    {
      question: 'How does Condensed Resin work?',
      answer:
        'Condensed Resin lets you claim three sets of rewards from a Domain or Ley Line Outcrop in a single run, including triple Adventure EXP and Companionship EXP. Each one costs 60 Original Resin, 1 Crystal Core, and 100 Mora to craft, and you can hold a maximum of 5 at a time. You unlock the recipe by reaching Reputation Level 3 in Liyue or buying it from the blacksmith in Mondstadt or Liyue.',
    },
    {
      question: 'Can Condensed Resin be used on bosses?',
      answer:
        'No. Condensed Resin can only be used on Domains and Ley Line Outcrops. It cannot be used on Normal Bosses or Weekly Boss Trounce Blossoms, and it also cannot be used to claim rewards during most limited-time events that cost Original Resin, unless that event specifically allows it.',
    },
    {
      question: 'How much resin do Weekly Bosses cost?',
      answer:
        'Weekly Bosses cost 30 Original Resin for your first three claimed rewards each week, then 60 resin for any claim after that. Since the discounted three claims reset with the weekly reset on Monday at 04:00 server time, you should claim your three discounted rewards every week and generally stop at three.',
    },
    {
      question: 'When should I use Fragile Resin?',
      answer:
        'Save Fragile Resin, which each restores 60 Original Resin, for double-drop events like Ley Line Overflow, where Domain or Ley Line rewards are doubled for a set number of runs. Spending it during those windows literally doubles its value. The other good time is a hard farming crunch for a new artifact set or character materials. Avoid spraying it on ordinary days.',
    },
    {
      question: 'Is it worth spending Primogems on resin refills?',
      answer:
        'For free-to-play players, almost never. Primogem refills give 60 resin at escalating costs of 50, 100, 100, 150, 200, and 200 Primogems per day, up to six times. Only the first refill is close to reasonable, and even 50 Primogems is a third of a wish. Primogems are far better spent on pulls, since artifacts come back every day while banners do not.',
    },
    {
      question: 'How much resin do I get per day?',
      answer:
        'You passively generate 180 Original Resin over a full 24-hour day, since the rate is one unit every eight minutes. Because the cap is 200 and you generate 180 daily, logging in once a day is enough to avoid overflowing, but skipping a full day guarantees you waste resin at the cap.',
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/genshin-impact', anchor: 'Genshin Impact coverage hub' },
    { href: '/blog/genshin-impact/genshin-gacha-wish-guide', anchor: 'Genshin wish and gacha guide' },
    { href: '/blog/genshin-impact/genshin-artifact-guide', anchor: 'Genshin artifact guide' },
    { href: '/blog/genshin-impact/genshin-best-f2p-teams', anchor: 'Genshin best F2P teams' },
  ],

  externalSources: [
    {
      url: 'https://genshin-impact.fandom.com/wiki/Original_Resin',
      title: 'Genshin Impact Wiki — Original Resin cap, regeneration rate and activity costs',
    },
    {
      url: 'https://genshin-impact.fandom.com/wiki/Condensed_Resin',
      title: 'Genshin Impact Wiki — Condensed Resin recipe, hold limit and usage restrictions',
    },
    {
      url: 'https://genshin-impact.fandom.com/wiki/Fragile_Resin',
      title: 'Genshin Impact Wiki — Fragile Resin refill value and sources',
    },
    {
      url: 'https://genshin.hoyoverse.com/en/',
      title: 'HoYoverse — official Genshin Impact site',
    },
  ],

  tldr: 'Original Resin caps at 200 and regenerates one unit every 8 minutes — 180 per day, 1,260 per week, 26h40m from empty to full — so log in at least once a day or you overflow. Craft Condensed Resin (60 resin, 1 Crystal Core, 100 Mora; hold 5) for triple Domain and Ley Line rewards, but note it does not work on bosses. Claim three Weekly Boss rewards each week at the 30-resin discount before the 4th jumps to 60, and bank Fragile Resin for double-drop events.',
};
