import type { BlogPost } from '../../blogTypes';

export const genshinSpiralAbyssGuide: BlogPost = {
  slug: 'genshin-spiral-abyss-guide',
  game: 'genshin-impact',
  category: 'advanced-strategy',
  topicCluster: 'genshin-endgame',

  tags: ['spiral-abyss', 'endgame', 'teams', 'primogems', 'floor-12'],

  title: 'Genshin Spiral Abyss Guide — Floors 9-12, Two Teams and 1,200 Primogems a Month',
  metaDescription:
    'How the Genshin Spiral Abyss actually works: the reset schedule, the 36-star target, ley line disorders, and how to build two Floor 12 teams as a near-F2P player.',
  excerpt:
    'A full 36-star Spiral Abyss clear pays 600 Primogems per reset, twice a month, for the cost of zero resin. That is 1,200 free primogems monthly that most accounts leave on the table because nobody explained the two-team tax.',
  featuredImagePrompt:
    'The glowing entrance to the Spiral Abyss floating tower over a starlit void, violet and gold cosmic lighting, ornate Genshin Impact domain architecture, painterly fantasy style',

  heroImage: '/images/blog/genshin-impact/genshin-spiral-abyss-guide/hero-spiral-abyss.webp',
  heroImageAlt:
    'The unlocked entrance to the Spiral Abyss, the endgame combat tower where Floors 9 through 12 reset twice a month for Primogem rewards.',
  imageSources: [
    {
      src: '/images/blog/genshin-impact/genshin-spiral-abyss-guide/hero-spiral-abyss.webp',
      sourceUrl: 'https://genshin-impact.fandom.com/wiki/Spiral_Abyss',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/genshin-impact/genshin-spiral-abyss-guide/bennett.webp',
      sourceUrl: 'https://genshin-impact.fandom.com/wiki/Bennett',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/genshin-impact/genshin-spiral-abyss-guide/kazuha.webp',
      sourceUrl: 'https://genshin-impact.fandom.com/wiki/Kaedehara_Kazuha',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/genshin-impact/genshin-spiral-abyss-guide/abyss-lector.webp',
      sourceUrl: 'https://genshin-impact.fandom.com/wiki/Abyss_Lector:_Violet_Lightning',
      license: 'Fandom CC-BY-SA',
    },
  ],

  publishDate: '2026-07-21T00:00:00.000Z',
  lastUpdated: '2026-07-21T00:00:00.000Z',

  primaryKeyword: 'genshin spiral abyss guide',
  secondaryKeywords: [
    'genshin spiral abyss floor 12',
    'genshin abyss reset schedule',
    'genshin 36 stars primogems',
    'genshin spiral abyss teams',
    'genshin abyss ley line disorder',
    'genshin two teams abyss',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'monthly',
  evergreen: true,
  readingTimeMin: 12,

  toc: [
    { id: 'the-abyss-is-a-two-team-tax-not-a-skill-wall', label: 'The Abyss Is a Two-Team Tax, Not a Skill Wall', level: 2 },
    { id: 'how-the-abyss-is-actually-built', label: 'How the Abyss Is Actually Built', level: 2 },
    { id: 'the-corridor-floors-1-to-8', label: 'The Corridor — Floors 1 to 8', level: 3 },
    { id: 'the-moon-spire-floors-9-to-12', label: 'The Moon Spire — Floors 9 to 12', level: 3 },
    { id: 'the-reset-schedule-nobody-reads-carefully', label: 'The Reset Schedule Nobody Reads Carefully', level: 2 },
    { id: 'stars-the-clock-and-the-36-star-target', label: 'Stars, the Clock and the 36-Star Target', level: 2 },
    { id: 'ley-line-disorders-and-the-blessing-of-the-abyssal-moon', label: 'Ley Line Disorders and the Blessing of the Abyssal Moon', level: 2 },
    { id: 'building-two-teams-without-two-whales', label: 'Building Two Teams Without Two Whales', level: 2 },
    { id: 'archetypes-that-actually-clear-floor-12', label: 'Archetypes That Actually Clear Floor 12', level: 3 },
    { id: 'the-support-overlap-problem', label: 'The Support Overlap Problem', level: 3 },
    { id: 'why-people-wall-at-33-stars', label: 'Why People Wall at 33 Stars', level: 2 },
    { id: 'a-realistic-clear-plan', label: 'A Realistic Clear Plan', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `## The Abyss Is a Two-Team Tax, Not a Skill Wall

Here is the number that should reframe how you think about the Spiral Abyss: a full clear of Floors 9 through 12 pays out 600 Primogems per reset, the Abyss resets twice a month, and none of it costs a single point of Original Resin. That is 1,200 free primogems every month — roughly seven and a half wishes — sitting behind a wall most players assume is about being good at combat.

It usually isn't. Floor 12 filters accounts less on execution than on a boring structural requirement: you need two teams, not one. Eight built characters, not four. The players who wall at the top of the Abyss are almost never bad at dodging. They have one gorgeous main team and a second team held together with duct tape, and the Abyss makes them field both.

Understand the structure and the two-team tax, and Floor 12 stops being a skill check and becomes a planning exercise. So here is exactly how the tower is built and how to beat it without owning half the roster.

## How the Abyss Is Actually Built

The Spiral Abyss unlocks at Adventure Rank 20 and lives inside the Musk Reef, reached from the Cape Oath teleport waypoint. It is single-player only — co-op is disabled the moment you step in — and it splits cleanly into two halves that behave nothing alike.

### The Corridor — Floors 1 to 8

Floors 1 through 8 make up the Abyss Corridor, and this is the part people forget exists once they've cleared it. The Corridor is permanent. You beat each floor once, collect a one-time Primogem payout, and it never resets. The enemy lineups are fixed, the difficulty ramps gently, and the star conditions are usually forgiving things like "clear with the party's remaining HP above a threshold" rather than a hard stopwatch.

Treat the Corridor as your onboarding. It gates the real content — you cannot enter Floor 9 until you've cleared Floor 8, Chamber 3 — but once it's done, it's done. If you're new, grinding the Corridor's one-time rewards is some of the easiest primogem income in the game.

### The Moon Spire — Floors 9 to 12

Floors 9 through 12 are the Abyssal Moon Spire, and this is the endgame everyone actually means when they say "the Abyss." Every floor has three chambers. Every chamber is worth up to three stars. That's nine stars per floor, 36 stars across the four floors — the famous target.

The Moon Spire resets on a schedule, and every reset it swaps its enemy lineup, its environmental effects, and a rotating global buff. Unlike the Corridor, you can re-run it as many times as you want, and you'll want to, because the primogems refresh every cycle.

![The Abyss Lector: Violet Lightning, an Electro shield-carrier of the type that regularly headlines Moon Spire chambers and forces specific element and break tooling.](/images/blog/genshin-impact/genshin-spiral-abyss-guide/abyss-lector.webp)

## The Reset Schedule Nobody Reads Carefully

The Moon Spire resets on the 1st and the 16th of every month, at 04:00 your server's local time. That's two full clears available per month, which is where the 1,200-primogem figure comes from — 600 per reset, twice.

Two things trip people up here. First, only Floors 9 through 12 reset. The Corridor stays cleared forever; you never re-earn those one-time rewards. Second, the reset is not "sometime on the 1st." It's 04:00 server time exactly, and if you clear at 03:55 on reset day you've essentially wasted that clear because the same 600 primogems become available five minutes later. If you're grinding down to the wire, know when your reset lands.

There's no entry cost, no cooldown, and no daily limit on attempts. You can fail Floor 12 Chamber 3 forty times in a row and the game shrugs. That's the good news buried in the difficulty: the Abyss is pure practice with no resource sink, so a wall is always temporary.

## Stars, the Clock and the 36-Star Target

In the Moon Spire, stars come down almost entirely to one thing — speed. Each chamber gives you a time budget, and your star count is decided by how much time is left on the clock when the last enemy drops. Beat the chamber with comfortable time to spare and you take all three stars. Squeak in at the buzzer and you might walk away with one.

That single fact reorganizes the whole endgame. The Abyss does not reward tanky, safe, grind-them-down teams. It rewards teams that delete enemies fast. A comp that clears Floor 12 with health to spare but no time to spare is a two-star comp, and two stars per chamber across four floors leaves you short of the 36 you need for the full payout.

The math on rewards: each of the four Moon Spire floors is worth 150 Primogems at a full nine stars, so 36 stars totals 600 per reset. You do not need to be perfect on the way up — the Corridor and lower Moon Spire floors are gentle — but the top-end primogems specifically demand that you three-star Floors 11 and 12, and that means killing on the clock.

Because the score is speed, damage per second is king, and damage per second in this game is mostly a function of how well your characters are geared. If your carries are underperforming the clock, the fix is usually artifacts before it's anything else — our [Genshin artifact guide](/blog/genshin-impact/genshin-artifact-guide) walks through the substat math that separates a Floor 11 team from a Floor 12 one, and it's a cheaper fix than pulling a new character.

## Ley Line Disorders and the Blessing of the Abyssal Moon

Two rotating systems shape every cycle, and reading them is half the battle.

**Ley Line Disorders** are per-floor environmental effects, listed on the floor's info screen before you enter. Some help you — "characters deal increased Pyro DMG," say — and some are pure hazard, like periodic elemental fields or enemies gaining shields. These are fixed for the duration of a cycle but change with each reset, and they are the single biggest hint about which elements the developers want you to bring this time around. If the disorder buffs Electro damage, that's not a coincidence; it's a nudge toward an Electro-forward roster.

**The Blessing of the Abyssal Moon** is the global buff that applies across the whole Moon Spire for the cycle. It's a rotating condition — historically things like "gain a damage bonus after picking up an elemental particle" or "increased damage for a few seconds after using an Elemental Burst." The Blessing rewards a specific playstyle each cycle, and building your rotation around it is often the difference between a two-star and a three-star chamber. Read it before you queue, not after you've lost.

The takeaway: never walk into a fresh reset blind. Spend thirty seconds reading the disorder on each floor and the Blessing at the top of the screen, and build toward what the cycle is asking for. The enemies rotate too, so a team that hard-cleared last cycle can genuinely struggle this one if the lineup shifts against its element.

## Building Two Teams Without Two Whales

Now the actual wall. Floors 9 through 12 split every chamber into two halves. The first half is fought by your first team, the second half by your second team, and — this is the part that hurts — a character placed on one team cannot be used on the other. Floor 12 demands eight distinct, functional characters, all built well enough to hit the clock.

![Bennett, the Pyro healer and attack-buffer whose presence on one Abyss team means the other half needs its own answer to survival and damage.](/images/blog/genshin-impact/genshin-spiral-abyss-guide/bennett.webp)

This is why the Abyss feels so much harder than the open world. Overworld combat lets you funnel every good character and every artifact into one immaculate team. The Abyss says: now do it twice, and no sharing.

### Archetypes That Actually Clear Floor 12

You don't need meta-defining five-stars in both slots. You need two teams that each have a clear damage plan. The reliable near-F2P archetypes:

- **An amplifying reaction team** — Vaporize or Melt, pairing a Pyro or Cryo carry with a Hydro or Pyro enabler to multiply hits. Huge per-hit damage, ideal for the burst windows the clock rewards.
- **A Hyperbloom or Aggravate team** — Dendro-based reaction cores that spread damage across a whole enemy pack. Excellent on the multi-target chambers that eat single-target comps alive.
- **A Freeze team** — locks enemies in place while a Cryo or Hydro carry deletes them. Trivializes chambers full of mobile, annoying enemies.

Which one you can field depends on who you own, and reactions are the engine under all three. If you're fuzzy on why a Dendro core spreads damage or why Freeze shuts down crowd control, the [Genshin elemental reactions guide](/blog/genshin-impact/genshin-elemental-reactions-guide) breaks down every reaction and which stat feeds it — reaction literacy is what lets you build a functional second team out of characters you'd otherwise call benchwarmers.

### The Support Overlap Problem

Here's the trap that quietly kills most first attempts at 36 stars. The best supports in the game are so good that you want them on both teams — and you can't have them.

Bennett is the classic example. His burst is one of the strongest attack buffs and heals in the game, so instinct says put him on your strongest team. Fine. But that means your second team gets no Bennett, and it has to solve healing and damage buffing with someone else. Same story with an anemo grouper like Kazuha, whose crowd-control and damage amplification you'd love in both halves but only get in one.

![Kaedehara Kazuha, an Anemo support whose grouping and elemental damage buff are so valuable that having only one of him forces a real choice between your two Abyss teams.](/images/blog/genshin-impact/genshin-spiral-abyss-guide/kazuha.webp)

The discipline: build your two teams as a pair, not as "best team plus leftovers." Split your premium supports deliberately — one burst-buffer and one grouper per side if you can — so neither half is carrying dead weight. This is also why account-building advice always says pull for breadth before depth. Before you spend on a sixth copy of a carry you already own, ask whether a single new support would let you field a genuine second team. Our [Genshin wish and gacha guide](/blog/genshin-impact/genshin-gacha-wish-guide) covers pity and the fifty-fifty so you can plan those pulls instead of praying through them.

## Why People Wall at 33 Stars

The 33-to-36 gap is the most common plateau in the game, and it's almost always one of these:

**One team is real, the other is cardboard.** You three-star the first half of every chamber and bleed stars on the second. Fix: pour artifact upgrades into your weakest built character until the second team can hit the clock. It's usually a gearing problem, not a roster problem.

**You're too slow, not too fragile.** Players see themselves dying and assume they need more survivability, so they slot a second healer and lose even more time. If you're finishing chambers alive but out of clock, the answer is more damage, not more comfort. Drop the redundant healer for a damage sub-DPS.

**Wrong elements for the cycle.** The enemy lineup and ley line disorders shifted and your go-to team is now fighting into a resistance or a shield it can't break. Read the cycle and rotate elements to match rather than forcing the team that worked last time — and if you're not sure which reaction beats which enemy type, the [Genshin elemental reactions guide](/blog/genshin-impact/genshin-elemental-reactions-guide) maps every pairing so you can counter-pick instead of guessing.

**Energy problems.** A carry who can't cast their burst every rotation does a fraction of their damage. If your damage feels randomly inconsistent between attempts, it's usually Energy Recharge — you're not building enough particles to power the rotation the clock demands. That's an artifact fix as much as a team one; the Energy Recharge thresholds in our [Genshin artifact guide](/blog/genshin-impact/genshin-artifact-guide) explain how much you actually need before you over-invest.

## A Realistic Clear Plan

If you're staring at Floor 9 for the first time, or stuck at Floor 11, here's the order of operations that actually moves the needle:

1. **Clear the entire Corridor first.** Floors 1 to 8 are one-time primogems and free practice against the difficulty curve. Don't skip them to bash your head on Floor 12.
2. **Take stock of eight characters, not four.** Write down your best two teams honestly, splitting premium supports across both. If one team has no healer and no buffer, that's your problem, and it's fixable with gear or one targeted pull.
3. **Gear the weak link.** The lowest-damage character on your second team is your ceiling. Farm artifacts specifically for them before anything else.
4. **Read the cycle every reset.** Ley line disorder per floor, Blessing of the Abyssal Moon up top. Match your elements to what the tower is rewarding.
5. **Chase speed, not safety.** Once you can survive a chamber, every subsequent improvement should be about killing faster. Swap comfort picks for damage.
6. **Re-clear twice a month.** The moment the calendar hits the 1st or the 16th, Floors 9-12 refresh. That's your recurring 600 primogems — set a reminder if you have to.

Do that and 36 stars stops being a milestone you're chasing and becomes a twice-monthly chore you barely think about. That's the goal: the Abyss should feel like collecting a paycheck, not clearing a raid.

More Genshin coverage lives on the [Genshin Impact coverage hub](/blog/genshin-impact), and the rest of our game guides are on the [Mythras blog](/blog).

## Quick Action Checklist

- The Spiral Abyss unlocks at Adventure Rank 20 and is single-player only.
- Floors 1-8 (the Corridor) are permanent one-time rewards; Floors 9-12 (the Moon Spire) reset and repeat.
- The Moon Spire resets on the 1st and 16th of each month at 04:00 server time — 600 Primogems per full clear, 1,200 a month.
- 36 stars means three-starring all twelve Moon Spire chambers. Stars are decided by clear speed, not survival.
- Floors 9-12 need two separate teams; a character on one team cannot be used on the other. That's eight built characters.
- Split your best supports across both teams — don't stack Bennett and your grouper on one side and leave the other bare.
- Read the ley line disorder on each floor and the Blessing of the Abyssal Moon before you enter; match your elements to the cycle.
- Walling at 33 stars is almost always a weak second team, too little damage, or wrong elements — rarely a skill issue.
- If you're surviving but out of clock, add damage, not another healer.
- Gear the weakest character on your second team before you spend anywhere else.
`,

  faq: [
    {
      question: 'When does the Spiral Abyss reset in Genshin Impact?',
      answer:
        'The Abyssal Moon Spire — Floors 9 through 12 — resets on the 1st and the 16th of every month at 04:00 your server\'s local time. That gives you two full clears per month. The Abyss Corridor, Floors 1 through 8, does not reset; those are permanent one-time rewards you collect once.',
    },
    {
      question: 'How many Primogems do you get from the Spiral Abyss?',
      answer:
        'A full 36-star clear of Floors 9 through 12 pays 600 Primogems per reset. Because the Moon Spire resets twice a month, that is up to 1,200 Primogems monthly, plus a large one-time payout from clearing the permanent Corridor floors 1 through 8. None of it costs Original Resin.',
    },
    {
      question: 'Why do I need two teams for the Spiral Abyss?',
      answer:
        'Every chamber on Floors 9 through 12 is split into two halves, each fought by a different team, and a character placed on one team cannot be used on the other. Reaching 36 stars therefore requires eight distinct, well-built characters rather than a single strong team of four. That two-team requirement is the real difficulty of the endgame.',
    },
    {
      question: 'How are Spiral Abyss stars earned?',
      answer:
        'In the Moon Spire (Floors 9-12), stars are awarded based on how fast you clear each chamber. Each chamber gives a time budget and up to three stars, and finishing with more time left on the clock earns more stars. The lower Corridor floors use gentler conditions like keeping the party\'s HP above a threshold. Speed, not survival, is what earns the top stars.',
    },
    {
      question: 'What are ley line disorders and the Blessing of the Abyssal Moon?',
      answer:
        'Ley line disorders are per-floor environmental effects shown before you enter — some buff a specific element, some add hazards. The Blessing of the Abyssal Moon is a global buff that applies across all of Floors 9-12 for the cycle and rewards a particular playstyle. Both rotate every reset, so you should read them and match your team elements to the cycle rather than forcing the same team every time.',
    },
    {
      question: 'Do I need five-star characters to clear Floor 12?',
      answer:
        'No. Floor 12 rewards well-built teams with a clear damage plan far more than it rewards rarity. Amplifying reaction teams, Hyperbloom or Aggravate teams, and Freeze teams built largely from four-star characters all clear 36 stars regularly. What matters is that both of your teams can hit the clock — which usually comes down to artifacts and correct elements, not constellations.',
    },
    {
      question: 'Why am I stuck at 33 stars?',
      answer:
        'The 33-to-36 plateau is almost always one of four things: a weak second team you neglected to build, too little damage to beat the clock (even while surviving comfortably), wrong elements for the current cycle\'s enemies and disorders, or energy problems keeping a carry from bursting every rotation. It is rarely a mechanical-skill wall. Gear your weakest character and match the cycle before you blame your reflexes.',
    },
    {
      question: 'Is the Spiral Abyss worth doing as a free-to-play player?',
      answer:
        'Absolutely. It is the single largest source of free Primogems in the game outside of events — up to 1,200 a month for two clears — and it costs no resin, has no daily limit, and lets you retry endlessly. Even partial clears pay out. For an account trying to save toward a banner, consistent Abyss runs are close to mandatory income.',
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/genshin-impact', anchor: 'Genshin Impact coverage hub' },
    { href: '/blog/genshin-impact/genshin-artifact-guide', anchor: 'Genshin artifact guide' },
    { href: '/blog/genshin-impact/genshin-elemental-reactions-guide', anchor: 'Genshin elemental reactions guide' },
    { href: '/blog/genshin-impact/genshin-gacha-wish-guide', anchor: 'Genshin wish and gacha guide' },
  ],

  externalSources: [
    {
      url: 'https://genshin-impact.fandom.com/wiki/Spiral_Abyss',
      title: 'Genshin Impact Wiki — Spiral Abyss structure, floors and rewards',
    },
    {
      url: 'https://genshin-impact.fandom.com/wiki/Spiral_Abyss/Abyssal_Moon_Spire',
      title: 'Genshin Impact Wiki — Abyssal Moon Spire reset, blessings and disorders',
    },
    {
      url: 'https://genshin.hoyoverse.com/en/',
      title: 'HoYoverse — official Genshin Impact site',
    },
  ],

  tldr: 'The Spiral Abyss unlocks at Adventure Rank 20 and splits into the permanent Corridor (Floors 1-8) and the resetting Abyssal Moon Spire (Floors 9-12). Floors 9-12 reset on the 1st and 16th of each month at 04:00 server time and pay 600 Primogems per 36-star clear — 1,200 a month, resin-free. Stars are earned by clear speed, not survival, and every chamber needs two separate teams, so 36 stars requires eight built characters. Read the ley line disorders and Blessing each cycle, split your best supports across both teams, and gear your weakest character first.',
};
