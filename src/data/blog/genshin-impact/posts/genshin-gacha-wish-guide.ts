import type { BlogPost } from '../../blogTypes';

export const genshinGachaWishGuide: BlogPost = {
  slug: 'genshin-gacha-wish-guide',
  game: 'genshin-impact',
  category: 'beginner-guides',
  topicCluster: 'genshin-guides',

  tags: ['gacha', 'wishes', 'pity', 'primogems', 'free-to-play'],

  title: 'Genshin Wish Guide — Pity, Rates and Real Primogem Costs',
  metaDescription:
    'Genshin Impact wish guide with official rates: 90-pity, soft pity at 74, Capturing Radiance, and exactly how many primogems a guaranteed five-star costs.',
  excerpt:
    'The base five-star rate is 0.6 percent, which sounds brutal until you learn that almost nobody actually pulls at 0.6 percent. The rate ramps hard starting at wish 74, and that single fact should change how you save.',
  featuredImagePrompt:
    'Genshin Impact wish banner artwork with a starry constellation sky, glowing blue and gold wish stone in the foreground, cinematic anime style',

  heroImage: '/images/blog/genshin-impact/genshin-gacha-wish-guide/hero-wish-banner.webp',
  heroImageAlt:
    'A Genshin Impact Character Event Wish banner backdrop, the limited-time gacha banner where promotional five-star characters are featured.',
  imageSources: [
    {
      src: '/images/blog/genshin-impact/genshin-gacha-wish-guide/hero-wish-banner.webp',
      sourceUrl: 'https://genshin-impact.fandom.com/wiki/Character_Event_Wish',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/genshin-impact/genshin-gacha-wish-guide/intertwined-fate.webp',
      sourceUrl: 'https://genshin-impact.fandom.com/wiki/Intertwined_Fate',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/genshin-impact/genshin-gacha-wish-guide/acquaint-fate.webp',
      sourceUrl: 'https://genshin-impact.fandom.com/wiki/Acquaint_Fate',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/genshin-impact/genshin-gacha-wish-guide/welkin-moon.webp',
      sourceUrl: 'https://genshin-impact.fandom.com/wiki/Blessing_of_the_Welkin_Moon',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/genshin-impact/genshin-gacha-wish-guide/ayaka-wish.webp',
      sourceUrl: 'https://genshin-impact.fandom.com/wiki/Kamisato_Ayaka',
      license: 'Fandom CC-BY-SA',
    },
  ],

  publishDate: '2026-07-20T00:00:00.000Z',
  lastUpdated: '2026-07-20T00:00:00.000Z',

  primaryKeyword: 'genshin wish guide',
  secondaryKeywords: [
    'genshin pity system explained',
    'genshin soft pity 74',
    'genshin capturing radiance',
    'genshin primogems per five star',
    'genshin epitomized path fate points',
    'genshin f2p primogem income',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,

  toc: [
    { id: 'the-banner-is-not-random-the-way-you-think-it-is', label: 'The Banner Is Not Random the Way You Think It Is', level: 2 },
    { id: 'the-four-banner-types', label: 'The Four Banner Types', level: 2 },
    { id: 'character-event-wish', label: 'Character Event Wish', level: 3 },
    { id: 'weapon-event-wish', label: 'Weapon Event Wish', level: 3 },
    { id: 'wanderlust-invocation', label: 'Wanderlust Invocation', level: 3 },
    { id: 'chronicled-wish', label: 'Chronicled Wish', level: 3 },
    { id: 'pity-explained-with-the-real-numbers', label: 'Pity Explained With the Real Numbers', level: 2 },
    { id: 'soft-pity-is-where-almost-every-five-star-comes-from', label: 'Soft Pity Is Where Almost Every Five-Star Comes From', level: 3 },
    { id: 'the-fifty-fifty-and-capturing-radiance', label: 'The Fifty-Fifty and Capturing Radiance', level: 3 },
    { id: 'what-a-character-actually-costs-in-primogems', label: 'What a Character Actually Costs in Primogems', level: 2 },
    { id: 'primogem-income-for-a-free-to-play-account', label: 'Primogem Income for a Free-to-Play Account', level: 2 },
    { id: 'the-weapon-banner-and-why-epitomized-path-changes-the-math', label: 'The Weapon Banner and Why Epitomized Path Changes the Math', level: 2 },
    { id: 'pulling-discipline-that-keeps-your-account-healthy', label: 'Pulling Discipline That Keeps Your Account Healthy', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `## The Banner Is Not Random the Way You Think It Is

Open any Genshin banner and the posted five-star rate is 0.6 percent. Roughly one in 167. That number makes the game look like a slot machine, and it is the reason people talk about "getting lucky" as if pulling were a coin flip repeated until something good happens.

It is not. Here is the specific, checkable claim: the 0.6 percent rate holds for exactly 73 wishes. On wish 74 it jumps to 6.6 percent, and it climbs by another 6 percentage points every wish after that until it hits 100 percent at wish 90.

That means the official published rate — 1.6 percent average including pity — describes a distribution where the overwhelming majority of five-stars arrive in a sixteen-pull window that you can see coming. Genshin's gacha is far more deterministic than its marketing implies, and once you know where the walls are you can plan around them instead of praying.

![An Intertwined Fate, the wishing currency used on limited Character and Weapon Event Wish banners.](/images/blog/genshin-impact/genshin-gacha-wish-guide/intertwined-fate.webp)

## The Four Banner Types

Wishes unlock after completing the Knights of Favonius quest, at roughly Adventure Rank 5. From there you are choosing between four banner types, each with its own pity counter that does not talk to the others.

### Character Event Wish

The limited banner, and the one that matters most. One promotional five-star character and three featured four-star characters. Costs Intertwined Fates.

Official rates: 0.6 percent base for a five-star, rising to a 1.6 percent average once pity is included. Four-star base rate 5.1 percent, 13 percent average with pity. Three-star weapons make up the remaining 94.3 percent base.

Character Event Wish banners contain no five-star weapons in their pool, so every five-star you pull from one is guaranteed to be a character.

### Weapon Event Wish

Two promotional five-star weapons and five featured four-star weapons. Also costs Intertwined Fates.

Rates are slightly better on paper and considerably worse in practice. Five-star base rate is 0.7 percent, 1.85 percent average with pity. Hard pity arrives at 80 rather than 90, with soft pity starting at wish 63.

### Wanderlust Invocation

The permanent standard banner, which never ends and never features anyone. Costs Acquaint Fates. Same rates as the Character Event Wish: 0.6 percent base, 90 hard pity.

Its pool contains all non-event-exclusive characters and weapons, with new four-star characters added one update after their banner debut. Worth knowing: the characters shown in the banner artwork are not featured and have no increased chance whatsoever. That image is decoration.

![An Acquaint Fate, the currency used exclusively on the permanent Wanderlust Invocation standard banner.](/images/blog/genshin-impact/genshin-gacha-wish-guide/acquaint-fate.webp)

### Chronicled Wish

The rerun banner, which appears periodically rather than continuously. It uses Intertwined Fates and works differently from everything else.

Before pulling you choose a Chronicled Path — a designated five-star character or weapon from the available list. If you designate a character, every five-star you pull from that banner will be a character. If you designate a weapon, they will all be weapons. Rates match the Character Event Wish at 0.6 percent base and 90 hard pity, and each five-star has a 50 percent chance of being your designated item.

The pool only includes event-exclusive five-star characters that have already appeared on a Character Event Wish at least twice and have not shown up on a recent banner. If you missed someone two years ago, this is the banner that eventually brings them back.

## Pity Explained With the Real Numbers

Pity in Genshin is two separate systems that get conflated constantly: a counter that guarantees a rarity, and a counter that guarantees the featured item.

### Soft Pity Is Where Almost Every Five-Star Comes From

On the Character Event Wish the rate curve looks like this:

- **Wishes 1 through 73:** 0.6 percent per pull, flat.
- **Wishes 74 through 89:** 0.6 percent plus 6 percentage points per wish past 73. So wish 74 sits at 6.6 percent, wish 80 at 42.6 percent, wish 89 at 96.6 percent.
- **Wish 90:** 100 percent. Hard pity.

The Weapon Event Wish uses the same shape on a shorter timeline: flat 0.7 percent through wish 62, then plus 7 percentage points per wish from 63, hitting 100 percent at wish 80.

The four-star counter runs independently. Nine wishes without a four-star or better makes the tenth guaranteed — and on that guarantee wish, the four-star chance is 99.4 percent with a 0.6 percent chance of a five-star instead.

The single most useful consequence: **pity carries over between banners of the same type.** If you end a banner at 80 pity, the next Character Event Wish starts you at 80. That counter does not reset, does not expire, and does not transfer across banner types. A stored 80 pity is a real, bankable asset, and it is why "saving pity" is a coherent strategy rather than superstition.

### The Fifty-Fifty and Capturing Radiance

Winning a five-star is only half the battle. Every five-star you pull from a Character Event Wish has a 50 percent base chance of being the promotional character rather than a standard-pool one.

Lose that fifty-fifty and your next five-star on a Character Event Wish is guaranteed to be the promotional character. That guarantee also carries between banners. Maximum 180 wishes to guarantee a specific promotional five-star.

Since version 5.0 there is an additional mechanic layered on top called **Capturing Radiance**. When you win a five-star that was not already guaranteed — that is, when the fifty-fifty applies — Capturing Radiance can trigger and convert that pull into the promotional character anyway.

The details HoYoverse published:

- Base trigger probability is 0.018 percent.
- Including Capturing Radiance, the consolidated chance that a non-guaranteed five-star is the promotional character rises from 50 percent to **55 percent**.
- If the promotional five-star has been your *second* five-star on three consecutive occasions — meaning you lost the fifty-fifty three times in a row — Capturing Radiance is guaranteed to trigger on the next five-star.
- It never affects the existing guarantee. It only improves outcomes in cases where the fifty-fifty was already in play.

That last bullet is the practical one. Genshin now has a floor on catastrophic fifty-fifty luck. You cannot lose it indefinitely.

![Kamisato Ayaka, a five-star character whose acquisition depends entirely on the Character Event Wish pity and fifty-fifty systems.](/images/blog/genshin-impact/genshin-gacha-wish-guide/ayaka-wish.webp)

## What a Character Actually Costs in Primogems

One Intertwined Fate costs 160 primogems from Paimon's Bargains, with no purchase limit. That single number converts every pity figure above into a budget.

- **Hard pity, one five-star:** 90 wishes, 14,400 primogems.
- **Guaranteed specific promotional five-star (worst case):** 180 wishes, 28,800 primogems.
- **Weapon banner hard pity:** 80 wishes, 12,800 primogems.
- **Guaranteed specific promotional weapon (worst case):** 160 wishes, 25,600 primogems.

The number to actually plan around is 28,800. That is the true worst case for a character you specifically want, assuming zero stored pity and losing the fifty-fifty. Anything better than that is upside.

Intertwined Fates also come from sources other than primogems, and free-to-play players should be using all of them: 5 Masterless Starglitter each with no limit, or 75 Masterless Stardust each with a cap of five per month that refreshes on the first of the month. The Battle Pass Gnostic Hymn track hands out Intertwined Fates at levels 10, 20, 30 and 40.

## Primogem Income for a Free-to-Play Account

Knowing what a five-star costs is only useful next to what you actually earn.

The reliable daily floor is 60 primogems from Daily Commissions. Four commissions plus the completion bonus, every day, forever. That alone is 1,800 per month.

On top of that sit the sources that vary but recur: the Spiral Abyss on its twice-monthly reset, event rewards which are usually the largest single chunk in any patch, mail from maintenance compensation and livestream codes, and one-time exploration rewards from chests, Statues of the Seven, and quest completions.

The paid option worth actually discussing is the **Blessing of the Welkin Moon**. It is a US$4.99 thirty-day subscription that grants 300 Genesis Crystals immediately and 90 primogems on each day you log in for the next 30 days. That totals 3,000 primogems over the period, or 18.75 wishes, for five dollars. Missing a login day deducts a day without granting the primogems, and it does not auto-renew. It can be stacked up to a maximum of 180 days across six purchases.

Whatever you think about spending money in gacha games, that is the best primogem-per-dollar rate in the store by a wide margin, and it is the only purchase that rewards the behaviour you were doing anyway.

![The Blessing of the Welkin Moon, the thirty-day subscription granting 90 primogems per login day.](/images/blog/genshin-impact/genshin-gacha-wish-guide/welkin-moon.webp)

## The Weapon Banner and Why Epitomized Path Changes the Math

The weapon banner has a reputation as a trap. That reputation was earned under an older system and is now partly out of date.

The current mechanic is **Epitomized Path**. You designate one of the two promotional five-star weapons before pulling. If you then win a five-star weapon that is not your designated one, you receive 1 Fate Point. Once you hold 1 Fate Point, the next five-star weapon is guaranteed to be your chosen one.

Practically: worst case, you pull one unwanted five-star weapon, bank the Fate Point, and the following five-star is the one you wanted. That is the 160-wish, 25,600-primogem ceiling.

The caveats that still make it dangerous:

- Fate Points reset when the current Epitome Invocation ends. Partial progress does not carry to the next weapon banner even though the pity counter does.
- Changing or cancelling your weapon selection resets accumulated Fate Points to zero.
- If you never designate a weapon, you accumulate no Fate Points at all. Wishing without setting your path is strictly worse.

The four-star situation on the weapon banner is genuinely better than on character banners: 75 percent chance a four-star is one of the five featured weapons, versus 50 percent for featured four-star characters. Combined with a 6 percent base four-star rate, the weapon banner is the more generous banner at four-star rarity.

## Pulling Discipline That Keeps Your Account Healthy

Everything above is mechanics. This part is the actual advice.

**Never pull with a partial budget.** If you cannot cover 90 wishes plus your current pity gap, you are gambling on soft pity landing early. Wait one more patch.

**Track your pity.** The in-game wish history shows every pull. Knowing you are at 68 rather than "somewhere in the sixties" is the difference between an informed decision and a hopeful one.

**Guaranteed pity is the best time to pull.** If you lost your last fifty-fifty, your next five-star is locked in. That is when a banner you moderately want becomes worth committing to — you are buying a certainty rather than a coin flip.

**Skip the weapon banner unless the weapon is transformative for a character you already own.** A five-star weapon is typically a modest damage increase over a well-built four-star alternative. That same 25,600 primogems is nearly a guaranteed character.

**Four-stars win Abyss floors.** Bennett, Xiangling, Xingqiu, Fischl and Sucrose have carried accounts through every version of the endgame. Building the four-stars you already own is free power, and it is why our [Genshin elemental reactions guide](/blog/genshin-impact/genshin-elemental-reactions-guide) spends as much time on Xiangling as on any five-star.

**Artifacts beat constellations.** Before spending 28,800 primogems on a second copy of a character, check whether your existing build is actually finished. The [Genshin Impact artifact guide](/blog/genshin-impact/genshin-artifact-guide) covers the stat targets that usually deliver more than a constellation would.

More Genshin coverage lands on the [Genshin Impact coverage hub](/blog/genshin-impact), and everything else we cover lives on the [Mythras blog](/blog).

## Quick Action Checklist

- Base five-star rate is 0.6 percent for exactly 73 wishes, then climbs 6 points per wish from 74 to a guaranteed five-star at 90.
- Weapon banner: 0.7 percent flat to wish 62, then 7 points per wish, hard pity at 80.
- Pity carries between banners of the same type but never across types. Stored pity is a bankable asset.
- Every five-star has a 50 percent fifty-fifty, raised to a 55 percent consolidated chance by Capturing Radiance.
- Lose the fifty-fifty and your next five-star on a Character Event Wish is guaranteed promotional. Maximum 180 wishes.
- Budget 28,800 primogems as the true worst case for a specific character; 25,600 for a specific weapon.
- One Intertwined Fate is 160 primogems, 5 Masterless Starglitter, or 75 Masterless Stardust (five per month).
- Free-to-play floor is 60 primogems per day from Daily Commissions — 1,800 per month before events.
- Welkin Moon gives 3,000 primogems over 30 days for US$4.99. Log in daily or you lose days.
- Always set your Epitomized Path before pulling the weapon banner. No path means no Fate Points.
- Do not pull unless you can cover 90 wishes minus your current pity. Wait a patch instead.
- Build the four-stars you already own before chasing constellations.
`,

  faq: [
    {
      question: 'When does soft pity start in Genshin Impact?',
      answer:
        'On the Character Event Wish and Wanderlust Invocation, the five-star rate stays at 0.6 percent through wish 73, then rises by roughly 6 percentage points per wish starting at wish 74, reaching a guaranteed five-star at wish 90. The Weapon Event Wish starts its ramp at wish 63 with about 7 percentage points per wish and hard pity at 80. The vast majority of five-stars are pulled inside that soft pity window.',
    },
    {
      question: 'What is Capturing Radiance and how does it work?',
      answer:
        'Capturing Radiance was added in version 5.0. When you win a five-star that is not already guaranteed to be the promotional character, the mechanic can trigger and turn that pull into the promotional character anyway. Base trigger probability is 0.018 percent, and including it the consolidated chance of a non-guaranteed five-star being promotional is 55 percent rather than 50. If the promotional character has been your second five-star on three consecutive occasions, Capturing Radiance is guaranteed to trigger on the next one.',
    },
    {
      question: 'How many primogems do I need to guarantee a specific five-star character?',
      answer:
        'The worst case is 180 wishes, which at 160 primogems per Intertwined Fate is 28,800 primogems. That assumes zero stored pity, hitting hard pity at 90, losing the fifty-fifty, and hitting hard pity again. If you carry stored pity into the banner or already have a guaranteed from a previous loss, the real cost drops substantially.',
    },
    {
      question: 'Does pity carry over between Genshin banners?',
      answer:
        'Yes, within the same banner type. Character Event Wish pity carries to the next Character Event Wish, including the guaranteed-promotional flag from a lost fifty-fifty. It does not carry across types, so Character Event Wish pity does not transfer to the Weapon Event Wish or Wanderlust Invocation. Each type maintains its own independent counter.',
    },
    {
      question: 'Is the Blessing of the Welkin Moon worth buying?',
      answer:
        'On pure primogems per dollar it is the best value in the shop. For US$4.99 you receive 300 Genesis Crystals immediately plus 90 primogems on each day you log in for 30 days, totalling 3,000 primogems or about 18.75 wishes. The catch is that missing a login day deducts a day without paying out, and it does not auto-renew, so you have to repurchase manually.',
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/genshin-impact', anchor: 'Genshin Impact coverage hub' },
    { href: '/blog/genshin-impact/genshin-elemental-reactions-guide', anchor: 'Genshin elemental reactions guide' },
    { href: '/blog/genshin-impact/genshin-artifact-guide', anchor: 'Genshin Impact artifact guide' },
  ],

  externalSources: [
    {
      url: 'https://genshin-impact.fandom.com/wiki/Wish',
      title: 'Genshin Impact Wiki — Wish system, rates and pity rules',
    },
    {
      url: 'https://genshin-impact.fandom.com/wiki/Character_Event_Wish',
      title: 'Genshin Impact Wiki — Character Event Wish rates and Capturing Radiance',
    },
    {
      url: 'https://genshin.hoyoverse.com/en/news/detail/125274',
      title: 'HoYoverse — official Capturing Radiance mechanic explainer',
    },
  ],

  tldr: 'Genshin five-star rates are 0.6 percent flat for 73 wishes, then ramp about 6 points per wish from 74 to a guaranteed five-star at 90. Each five-star has a 50 percent fifty-fifty, raised to a 55 percent consolidated chance by Capturing Radiance, and losing it guarantees the next one. Budget 28,800 primogems as the worst case for a specific character. Pity carries between banners of the same type but never across types.',
};
