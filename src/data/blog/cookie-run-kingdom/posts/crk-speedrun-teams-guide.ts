import type { BlogPost } from '../../blogTypes';

export const crkSpeedrunTeamsGuide: BlogPost = {
  slug: 'crk-speedrun-teams-guide',
  game: 'cookie-run-kingdom',
  category: 'advanced-strategy',
  topicCluster: 'pve-strategy',

  tags: ['speedrun', 'farming', 'pve-strategy', 'team-builds', 'world-exploration'],

  title: 'CRK Speedrun Teams — Fast Auto-Clear Farming Comps That Work',
  metaDescription:
    'Build the fastest Cookie Run: Kingdom speedrun teams for auto-clearing and farming: which DPS cookies delete stages, the 2.5x speed settings, and comps to copy.',
  excerpt:
    "Farming World Exploration at a crawl is a waste of your life. Here are the speedrun comps and the exact settings that turn a 40-second clear into a 12-second one.",
  featuredImagePrompt:
    'Cookie Run: Kingdom Burning Spice Cookie unleashing a wide wave of hellfire that incinerates a row of stage enemies, motion-blur speed lines, orange-and-black cinematic 16:9',
  heroImage: '/images/blog/cookie-run-kingdom/crk-speedrun-teams-guide/hero.webp',
  heroImageAlt:
    'Burning Spice Cookie official illustration, the go-to nuke DPS for fast Cookie Run: Kingdom speedrun and farming teams.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/crk-speedrun-teams-guide/hero.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Burning_Spice_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/crk-speedrun-teams-guide/stormbringer.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Stormbringer_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/crk-speedrun-teams-guide/sugar-swan.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Sugar_Swan_Cookie',
      license: 'Fandom CC-BY-SA',
    },
  ],

  publishDate: '2026-06-30T00:00:00.000Z',
  lastUpdated: '2026-06-30T00:00:00.000Z',

  primaryKeyword: 'crk speedrun team',
  secondaryKeywords: [
    'cookie run kingdom speedrun team',
    'fast farming team cookie run',
    'best auto clear team crk',
    'world exploration farming team',
    'fastest cookies crk',
    'crk speed farm comp',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'monthly',
  evergreen: true,
  readingTimeMin: 11,

  toc: [
    { id: 'why-a-farming-team-is-not-a-fighting-team', label: 'Why a farming team is not a fighting team', level: 2 },
    { id: 'the-settings-that-actually-save-time', label: 'The settings that actually save time', level: 2 },
    { id: 'the-nuke-carries-that-delete-stages', label: 'The nuke carries that delete stages', level: 2 },
    { id: 'cookies-to-avoid-on-a-speed-comp', label: 'Cookies to avoid on a speed comp', level: 2 },
    { id: 'the-full-speedrun-comp-template', label: 'The full speedrun comp template', level: 2 },
    { id: 'where-speed-farming-pays-off-most', label: 'Where speed farming pays off most', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Do the math on your farming and it'll ruin your day. If you re-run a stage a hundred times for materials and each clear takes 40 seconds instead of 12, that's roughly 45 extra minutes staring at the same animation for zero extra reward. A speedrun team isn't about flexing a hard clear — it's about giving that time back to yourself. The goal is a comp that opens with a screen-wide nuke, deletes the stage before your carry's skill even needs a second cast, and does it on autopilot at max speed so you can tab out.

The trick most players miss: your best *fighting* team is usually not your best *farming* team. A durable, well-rounded comp that beats hard content is overkill on a trivial farm stage — you don't need to survive, you need to *end the round now*. This guide covers the specific cookies that delete stages, the settings that shave real seconds off every run, the cookies that quietly slow you down without you noticing, and a copy-paste comp template. If you want the raw damage rankings behind these picks, keep the [DPS tier list](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked) open in another tab.

## Why a farming team is not a fighting team

A fighting team optimizes for surviving a fight it might lose. A farming team optimizes for *ending a fight it can't lose, faster.* Different job, different picks:

- **Front-loaded burst beats sustained DPS.** On a trivial stage, a cookie that dumps huge damage in the first two seconds clears faster than one that ramps over ten. You want the nuke that fires on entry, not the carry that's strongest at second 20.
- **Wide beats single-target.** Farm stages are full of trash mobs, so area damage that hits the whole row outperforms a precision nuke aimed at one enemy.
- **Survivability is nearly worthless.** If the stage can't kill your team before you clear it, every point of tankiness is wasted. Trade it for more damage or faster casts.

Once you internalize that, the roster shrinks fast. You're hunting for wide, front-loaded, cast-fast nukers — and a couple of specialists who add damage without adding delay.

## The settings that actually save time

Before you touch your roster, fix your settings, because this is free speed most players never turn on. To get rounds quicker:

- **Turn Skill effects OFF.** The flashy full-screen skill cutscenes cost you real seconds every cast.
- **Turn Skill videos OFF.** Same deal — the cinematic skill intros are pure time tax on a farm run.
- **Run at 2.5x speed.** Max battle speed is the single biggest time-saver, and on stages your comp trivializes there's no downside to it.

That combination alone can cut a farm run's length dramatically before you've changed a single cookie. If you're grinding daily material stages, fold this into your routine — the [daily checklist](/blog/cookie-run-kingdom/crk-daily-checklist) is a good place to make speed-farming a habit rather than an afterthought.

## The nuke carries that delete stages

![Stormbringer Cookie official illustration, a summon-based DPS that adds damage to speedrun comps without a slow skill windup.](/images/blog/cookie-run-kingdom/crk-speedrun-teams-guide/stormbringer.webp)

These are the cookies a speed comp is actually built around. The standouts for fast clears and World Exploration farming:

- **Burning Spice Cookie** — widely regarded as the best cookie for killing and World Exploration in general. His wide, front-loaded burst is exactly the profile a farm comp wants: he opens the round by deleting the enemy row. If you own him, he's the centerpiece — the [Burning Spice toppings build](/blog/cookie-run-kingdom/burning-spice-cookie-toppings-build) gets his damage where it needs to be for one-shot clears.
- **Stormbringer Cookie** — valuable because she can summon thunder without spending her skill, so she adds passive damage to the comp instead of stalling it with a long cast. Her [toppings build](/blog/cookie-run-kingdom/stormbringer-cookie-toppings-build) tunes that output.
- **Star Coral Cookie** — a speedrun-friendly pick that casts Stun Resistance and deals damage, keeping the run smooth on stages that would otherwise interrupt your carry. Her [toppings build](/blog/cookie-run-kingdom/star-coral-cookie-toppings-build) is worth setting up if she's your anchor.
- **A mid/back-line cleaner.** A cookie that reaches the middle or back rows (an ambush-style threat) mops up the enemies your front-line nuke doesn't reach, so nothing survives to drag the timer out.

The common thread: every one of these adds damage *without* adding a slow, mandatory skill windup. That's the whole selection rule.

## Cookies to avoid on a speed comp

This is the part that quietly costs people time. Some cookies are strong in a real fight but *slow you down* on a farm run because their attacks have a delayed start. When you're replacing cookies in a speed comp, check that their attacks do **not** have any form of windup at the start — cookies like Lemon Cookie, Pudding à la Mode, and Raspberry Cookie are called out specifically for exactly this delay.

The logic is brutal but simple: on a stage you're going to clear in a handful of seconds, a cookie who spends the first second winding up is a cookie contributing almost nothing before the round ends. It's not that these cookies are *bad* — it's that their value shows up on a timescale your farm run never reaches. Swap them for instant-impact cookies and your clear time drops. When you're auditing a comp for speed, "does this cookie do damage in the first second?" is the only question that matters.

## The full speedrun comp template

![Sugar Swan Cookie official illustration, an optional revive-support insurance piece for borderline speed-farm stages.](/images/blog/cookie-run-kingdom/crk-speedrun-teams-guide/sugar-swan.webp)

Here's the shape to copy, then fill with whoever you own:

- **1 wide nuke carry (the core).** Burning Spice is the gold standard; any front-loaded, area-damage DPS from the [DPS tier list](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked) works.
- **1–2 no-windup damage adders.** Stormbringer (passive thunder), Star Coral (damage + stun resist), or an ambush cleaner for the back rows. The rule: instant impact, no long cast.
- **1 speed/utility enabler.** A stun-resist or minor buff cookie that keeps the run from getting interrupted, so your nuke always lands clean.
- **Optional insurance for borderline stages.** If a stage is *almost* a free clear but occasionally kills a cookie, a revive support like Sugar Swan (who can bring heroes back) buys the run without slowing the easy clears much. On truly trivial stages, drop the insurance entirely and run five damage-relevant cookies — you don't need to survive what can't hurt you.

Don't over-engineer it. On easy farm content the "team" is really just one nuke and four cookies that help it land faster. The premium, well-rounded comps belong in hard content — for that, see the [best PvE teams](/blog/cookie-run-kingdom/best-crk-pve-teams). For farming, ruthless speed wins.

## Where speed farming pays off most

Not all farming is equal, so point your speed comp where the time savings compound. **World Exploration** is a prime target — clearing its stages hands you huge chunks of Kingdom EXP, so a fast comp levels your Kingdom noticeably quicker across a session. The full mode is covered in the [World Exploration guide](/blog/cookie-run-kingdom/crk-world-exploration-guide) if you're mapping out what to farm.

Beyond that, any repeatable material or resource stage you re-run in bulk is where a 3x faster clear turns into real saved minutes — the more reps, the bigger the payoff. Set your speed comp, flip on 2.5x with skill effects off, and let it run while you do something that isn't watching the same animation for the hundredth time. That's the entire point of a speedrun team: it hands you back the time the grind was quietly stealing.

## Quick Action Checklist

- [ ] Turn Skill effects and Skill videos OFF in battle settings
- [ ] Set battle speed to 2.5x on any stage your comp trivializes
- [ ] Build around one wide, front-loaded nuke carry (Burning Spice is the gold standard)
- [ ] Add no-windup damage: Stormbringer's passive thunder, Star Coral's damage + stun resist
- [ ] Include a back-row cleaner so nothing survives to stall the timer
- [ ] Cut cookies with delayed attack starts (e.g. Lemon, Pudding à la Mode, Raspberry) from speed comps
- [ ] Drop tankiness and survivability on stages that can't kill you — run damage-relevant cookies instead
- [ ] Add a revive support like Sugar Swan only on borderline stages, not trivial ones
- [ ] Point your speed comp at World Exploration and bulk material stages for the biggest time savings`,

  faq: [
    {
      question: 'What is the best speedrun team in Cookie Run: Kingdom?',
      answer:
        'The best speedrun teams are built around a wide, front-loaded nuke carry — Burning Spice Cookie is widely considered the best for killing and World Exploration — supported by no-windup damage adders like Stormbringer (who summons thunder without spending her skill) and Star Coral (damage plus stun resistance). Fill the rest with instant-impact cookies and drop survivability, since the goal is ending an easy stage as fast as possible rather than surviving it.',
    },
    {
      question: 'How do you clear stages faster in Cookie Run: Kingdom?',
      answer:
        'Turn Skill effects and Skill videos off in your battle settings and set the battle speed to 2.5x — those settings alone shave real seconds off every run. Then build a farming team of front-loaded, area-damage cookies with no attack windup, so the enemy row is deleted almost immediately. Avoid cookies whose attacks have a delayed start, because they contribute little before a fast clear is already over.',
    },
    {
      question: 'Which cookies are bad for a speedrun team?',
      answer:
        'Cookies whose attacks have a delayed start slow down a speed comp because they contribute almost nothing before an easy stage is already cleared. Lemon Cookie, Pudding à la Mode, and Raspberry Cookie are specifically called out for this kind of windup. They are not weak cookies overall, but their value shows up on a timescale a fast farm run never reaches, so swap them for instant-impact damage dealers.',
    },
    {
      question: 'Is a farming team different from a regular battle team?',
      answer:
        'Yes. A regular battle team optimizes for surviving hard content, while a farming team optimizes for ending easy content as fast as possible. On a stage that cannot kill you, survivability is wasted, so you trade tankiness for front-loaded, wide damage and faster casts. That is why your strongest fighting comp is usually overkill and slower than a purpose-built speedrun comp.',
    },
    {
      question: 'Where should I use a speedrun team in Cookie Run: Kingdom?',
      answer:
        'Point your speedrun team at World Exploration, whose stages give large chunks of Kingdom EXP and level your Kingdom faster, and at any repeatable material or resource stage you re-run in bulk. The more times you repeat a stage, the more a faster clear compounds into saved minutes. Set the comp, enable 2.5x speed with skill effects off, and let it run in the background.',
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked', anchor: 'DPS tier list' },
    { href: '/blog/cookie-run-kingdom/burning-spice-cookie-toppings-build', anchor: 'Burning Spice toppings build' },
    { href: '/blog/cookie-run-kingdom/crk-world-exploration-guide', anchor: 'World Exploration guide' },
    { href: '/blog/cookie-run-kingdom/best-crk-pve-teams', anchor: 'best PvE teams' },
    { href: '/blog/cookie-run-kingdom/crk-daily-checklist', anchor: 'daily checklist' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/World_Exploration', title: 'Cookie Run: Kingdom Wiki — World Exploration' },
    { url: 'https://cookierun.fandom.com/wiki/Auto_Farming', title: 'Cookie Run Wiki — Auto Farming' },
  ],

  tldr:
    "Cookie Run: Kingdom speedrun teams are built to end easy stages as fast as possible, not to survive them, so you drop tankiness for wide, front-loaded damage. Turn Skill effects and Skill videos off and run 2.5x speed for free time savings, then build around a nuke carry like Burning Spice (the go-to for killing and World Exploration), plus no-windup adders like Stormbringer and Star Coral. Cut cookies with delayed attack starts (e.g. Lemon, Pudding à la Mode, Raspberry) since they contribute little before a fast clear ends. Point the comp at World Exploration and bulk material stages, where faster clears compound into real saved minutes.",
};
