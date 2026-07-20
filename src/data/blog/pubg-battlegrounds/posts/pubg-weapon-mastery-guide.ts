import type { BlogPost } from '../../blogTypes';

export const pubgWeaponMasteryGuide: BlogPost = {
  slug: 'pubg-weapon-mastery-guide',
  game: 'pubg-battlegrounds',
  category: 'game-guides',
  topicCluster: 'pubg-weapons',
  tags: ['weapon-mastery', 'survival-mastery', 'progression', 'charms', 'stats'],
  title: 'PUBG Weapon Mastery Guide: Levels, Tiers, and Rewards',
  metaDescription:
    'How PUBG Weapon Mastery works — 100 levels and 10 tiers per gun, what earns XP, Expert Levels, charms and medals, plus Survival Mastery and reading your stats.',
  excerpt:
    'Weapon Mastery is usually written off as a cosmetic treadmill. It is that, but it is also the only free per-weapon performance dashboard in the game, and most players never open the tab that would tell them which gun they should actually be running.',
  featuredImagePrompt:
    'The PUBG Weapon Mastery progression screen showing a rifle with a tier emblem, level bar, and attached charm, dark UI with gold accents',
  heroImage: '/images/blog/pubg-battlegrounds/pubg-weapon-mastery-guide/mastery-screen.webp',
  heroImageAlt:
    'The PUBG Weapon Mastery progression screen, showing per-weapon level progress and tier emblems after a match.',
  imageSources: [
    {
      src: '/images/blog/pubg-battlegrounds/pubg-weapon-mastery-guide/mastery-screen.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Weapon_Mastery_Last_Match.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-weapon-mastery-guide/mk47-mastery.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Weapon_Mastery_MK47_Mutant.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-weapon-mastery-guide/m416.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:M416.PNG',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-weapon-mastery-guide/beryl-m762.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Beryl_M762.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-weapon-mastery-guide/mini14.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Mini-14.jpg',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-20T00:00:00.000Z',
  lastUpdated: '2026-07-20T00:00:00.000Z',
  primaryKeyword: 'pubg weapon mastery',
  secondaryKeywords: [
    'pubg weapon mastery guide',
    'pubg mastery tiers explained',
    'pubg expert level weapon mastery',
    'pubg survival mastery',
    'pubg weapon charms',
    'how to level weapon mastery pubg',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'the-free-coaching-tool-sitting-in-your-lobby', label: 'The free coaching tool sitting in your lobby', level: 2 },
    { id: 'how-weapon-mastery-is-built', label: 'How Weapon Mastery is built', level: 2 },
    { id: 'what-actually-earns-weapon-xp', label: 'What actually earns Weapon XP', level: 2 },
    { id: 'the-rewards-ranked-by-whether-you-should-care', label: 'The rewards, ranked by whether you should care', level: 2 },
    { id: 'charms', label: 'Charms', level: 3 },
    { id: 'tier-emblems-and-nameplates', label: 'Tier emblems and nameplates', level: 3 },
    { id: 'medals', label: 'Medals', level: 3 },
    { id: 'survival-mastery-is-the-other-half', label: 'Survival Mastery is the other half', level: 2 },
    { id: 'reading-your-mastery-stats-like-a-coach', label: 'Reading your mastery stats like a coach', level: 2 },
    { id: 'leveling-a-weapon-without-tanking-your-rank', label: 'Leveling a weapon without tanking your rank', level: 2 },
    { id: 'mistakes-that-stall-your-mastery', label: 'Mistakes that stall your mastery', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `There is a tab in your PUBG lobby that tracks, per weapon, how much damage you have done with it, how many headshots you have landed, how accurate you are, and how many enemies it has actually put on the floor. It is free, it updates every match, and roughly nobody looks at it except to see if a new keychain unlocked.

Weapon Mastery gets dismissed as a cosmetic treadmill because the visible rewards are cosmetic. That is a bad read. The rewards are the wrapper; the useful part is that PUBG has been quietly keeping a scorecard on every gun you have ever picked up, and that scorecard will tell you — with numbers, not vibes — that you are worse with the Beryl than you think and better with the Mini 14 than you have ever given yourself credit for.

Here is how the system is built, what actually moves the bar, and how to use the data underneath it.

## The free coaching tool sitting in your lobby

Most improvement advice in PUBG is self-reported. You think you are good at close range. You think the AKM is fine for you. You think your long-range taps land. You have no evidence for any of it, because a battle royale gives you almost no repeat trials and a memory that heavily weights the last thing that happened.

The Mastery tab is the antidote. Per weapon it accumulates level, kills, knockdowns, damage dealt, headshots and more, and because it never resets with seasons, it builds a genuinely large sample over time. A player with 300 hours has thousands of engagements logged in there.

![The Weapon Mastery progression screen for the MK47 Mutant in PUBG, showing level progress and weapon stats.](/images/blog/pubg-battlegrounds/pubg-weapon-mastery-guide/mk47-mastery.webp)

Use it the way a coach would: look for the gap between the gun you believe is your best and the gun the numbers say is your best. That gap is usually where a few free percentage points of win rate are hiding.

## How Weapon Mastery is built

The structure is simple and worth knowing precisely, because a lot of secondhand explanations get it wrong.

- **Every weapon has 100 levels.** Progression is per weapon, not shared. Your M416 level does nothing for your Beryl.
- **Every ten levels promotes you to the next Mastery Tier**, and there are **10 tiers in total.** Level 1 to 10 is tier one, 11 to 20 is tier two, and so on to level 100.
- **It is permanent and season-agnostic.** Unlike your competitive rank, which resets each season, Weapon Mastery just keeps accumulating. This is why it is a better long-term measure of your gun skill than your rank badge is.
- **At level 100 you can reset for an Expert Level.** Hitting the cap on a weapon lets you reset that weapon back down and bank an Expert Level, which comes with a medal and an upgraded weapon nameplate. That change came in the 2022 Weapon Mastery overhaul, which turned a one-time max of 100 into a repeatable prestige loop.

Two quality-of-life features that are worth knowing about because they are buried in the UI:

- **Favorite Weapon.** You can star one weapon in the Mastery tab, and it pins to the top of your list and shows first on your PUBG ID regardless of whether it is your highest level. Exactly one favorite, no categories.
- **Weapon zoom.** You can zoom in and out on a weapon model in the Mastery tab, which exists so you can look at the charm you spent forty hours unlocking.

One historical note worth having: the studio rebalanced the curve so that **early Weapon Mastery levels require less XP than they used to**, which is why the first few tiers on a new weapon go by quickly and then progress noticeably slows. That is intended, not a bug in your grind.

## What actually earns Weapon XP

Weapon XP comes from dealing damage and defeating opponents with that specific gun. The multiplier logic is what people miss:

**XP scales up with difficulty and with how long you survive.** Hitting harder shots, defeating more enemies, and surviving longer all earn XP at a faster rate. Winning the match is the single best XP outcome you can produce with a weapon.

The practical consequence is that **the fastest way to level a gun is to play well with it**, which is an unusually healthy incentive structure for a progression system. There is no farming exploit that beats "get a chicken dinner while holding this rifle." Hot-dropping for three quick kills and dying at minute four is worse XP than surviving to top ten with two kills, because the survival multiplier is doing heavy lifting.

Also worth knowing how "defeats" are counted, since it trips people up: in solo modes it is kills, and in team modes it counts knockdowns and final eliminations. **Finishing a player who was already knocked by someone else does not count as a defeat for you.** So squad-mopping downed enemies feels productive and does approximately nothing for your mastery bar.

![The M416, the assault rifle most players end up leveling first in PUBG Weapon Mastery.](/images/blog/pubg-battlegrounds/pubg-weapon-mastery-guide/m416.webp)

The studio has also tested **bonus XP events** that temporarily multiply Weapon XP for specific weapon classes — a Test Server trial ran triple XP for handguns, SMGs and sniper rifles for three days. If a live bonus window shows up for a class you have neglected, that is the cheapest time to close the gap.

## The rewards, ranked by whether you should care

All Weapon Mastery rewards are free. There is nothing in this system behind a paywall, which is genuinely rare in a game with PUBG's cosmetic economy.

### Charms

Charms are keychain-style trinkets that hang off the left side of a weapon barrel. You unlock them through mastery progression and equip them from inside the Mastery tab, and you can swap them in-game the same way you swap weapon skins.

The 2022 overhaul changed the important part: **charms became player-owned rather than weapon-locked**, meaning a charm you earned on one gun can be used on any gun. Before that, grinding a charm on a weapon you never ran was wasted effort. Now it is not.

Should you care? Only aesthetically. A charm has zero effect on handling, hitbox, or visibility. It is a hat for your rifle.

### Tier emblems and nameplates

Every ten levels triggers a tier emblem animation marking your promotion, and you can earn emblems corresponding to each of the ten level brackets per weapon. Expert Levels upgrade your weapon nameplate visually each time you bank one.

These are the closest thing the system has to a flex. Someone with a high Expert Level nameplate on the Kar98K has demonstrably put in the reps with it, in a way a purchased skin never demonstrates.

### Medals

Medals mark notable accomplishments with a weapon, and each one can be earned repeatedly with a counter tracking how many times you have hit it. Post-overhaul, Weapon Mastery medals also unlock with each Expert Level increase.

Medals are the most useful cosmetic in the set precisely because they are countable. A medal with a high counter is a record of a thing you did many times, not a thing you did once.

## Survival Mastery is the other half

Weapon Mastery only measures what you did with a gun. **Survival Mastery** is the parallel system that measures everything else, and if you play a careful, rotation-heavy style it is the one that reflects you accurately.

Survival XP comes from the non-shooting side of the game: looting, using combat items, engaging in combat, reviving teammates, surviving blue zone phases, and simply staying alive deep into a match. The overwhelming driver is **survival time** — playing to consistently reach the late phases levels Survival Mastery faster than anything else.

- **The level cap is 500**, and it is permanent progression rather than seasonal.
- **Survival Tiers sit on top of levels**, and reaching the top of a tier resets your level so you climb again inside a new tier.
- Rewards are exclusive cosmetics — clothing, weapon skins, and PUBG ID customization options — that you cannot get anywhere else.

The two systems together are a decent diagnostic of what kind of player you are. High Weapon Mastery and low Survival Mastery means you fight a lot and die at minute twelve. The reverse means you are surviving without contributing damage. The players who climb ranked fastest tend to move both bars at once, which is the whole argument behind our [mid-game guide](/blog/pubg-battlegrounds/pubg-mid-game-guide).

## Reading your mastery stats like a coach

This is the part worth your actual attention. Open the Mastery tab and do three comparisons.

**1. Headshot rate versus your assumption.** Find your two most-used ARs and compare headshot counts against total kills. If one gun has a visibly worse ratio, your crosshair placement or recoil control with that specific weapon is the problem, not your aim in general. Take it straight to the range with the [recoil control guide](/blog/pubg-battlegrounds/pubg-recoil-control-guide) and fix that one gun.

**2. Damage dealt versus kills.** A gun with a mountain of damage and few kills is a gun you are getting people low with and failing to close. That is usually a mid-range weapon you should be bursting rather than spraying, or an engagement-distance problem rather than a weapon problem.

![The Mini 14, a marksman rifle whose mastery stats often reveal players are better at range than they assume.](/images/blog/pubg-battlegrounds/pubg-weapon-mastery-guide/mini14.webp)

**3. Your neglected classes.** Almost everyone has a class sitting near zero. If your DMRs and snipers are barely leveled, you are not taking mid-to-long-range fights, which means you are fighting exclusively on terms other people set. The [best DMRs](/blog/pubg-battlegrounds/best-pubg-dmrs) and [best sniper rifles](/blog/pubg-battlegrounds/best-pubg-sniper-rifles) rankings are a reasonable place to pick one and commit to it for a week.

The honest framing: mastery level itself is a measure of time spent, not skill. **The stats underneath it are the skill measure.** A level 60 M416 with a poor headshot ratio tells you more than a level 90 with no context.

## Leveling a weapon without tanking your rank

The obvious failure mode is deciding to grind the Deagle in competitive and throwing forty matches into a handgun. Do not do that. A better approach:

**Commit to one weapon per week, and only as your secondary priority.** Take the gun when it appears in loot, run your normal reliable primary alongside it, and use the target weapon in the situations it is genuinely good at. Your mastery moves and your rank does not suffer.

**Use unranked and casual queues for the aggressive experiments.** Weapon Mastery is not restricted to competitive, so the XP is identical in casual, but the cost of a bad experiment is not. See the [ranked guide](/blog/pubg-battlegrounds/pubg-ranked-guide) for what actually moves rank points, and don't spend those points on cosmetics.

**Play for placement, not for the kill counter.** Because XP scales with survival time and match result, the "grind" and "playing properly" are the same activity. A player who consistently reaches top ten with a gun levels it faster than a player who drops hot and racks kills with it. That is the most useful single fact in this whole system.

**Convert the range into confidence, not XP.** Training Mode grants no mastery progression, but it is where you make a new weapon feel usable before you take it into a match where it costs you. Build it there first, then take it live.

## Mistakes that stall your mastery

- **Finishing already-knocked enemies and expecting credit.** It does not count as a defeat for you. Damage still counts, so the assist work is not wasted, but the kill credit goes elsewhere.
- **Switching guns constantly.** Progression is per weapon. Spreading five hundred hours across fourteen weapons produces fourteen mediocre bars and no expertise.
- **Chasing kills at the expense of placement.** The survival multiplier means dying early with three kills often loses to living long with one.
- **Ignoring Survival Mastery entirely.** It is a separate 500-level track with cosmetics you cannot get any other way, and it levels off behavior you should be doing anyway.
- **Treating mastery level as a skill rating.** It measures hours. The headshot rate, accuracy and damage figures underneath it measure skill.

![The Beryl M762, a high-recoil 7.62mm rifle whose mastery stats often expose a gap between confidence and results.](/images/blog/pubg-battlegrounds/pubg-weapon-mastery-guide/beryl-m762.webp)

## Quick Action Checklist

- Open the Mastery tab and note your top three weapons by level, then by damage — if the lists differ, believe the damage.
- Compare headshot counts against kills on your two most-used ARs and take the worse one to the training range.
- Pick one neglected weapon class and commit to it for a full week as a secondary, never as your only gun.
- Play for placement over kills; XP scales with survival time, so top-ten finishes level guns faster than hot-drop kill sprees.
- Stop expecting mastery credit for finishing enemies someone else knocked — it does not count as your defeat.
- Star a Favorite Weapon so it pins to the top of your list and your PUBG ID.
- Bank an Expert Level once a weapon hits 100 to claim the medal and upgraded nameplate.
- Watch for bonus Weapon XP windows on weapon classes you have neglected and use them to close the gap cheaply.
- Track Survival Mastery alongside it; if that bar is stalled, your problem is rotation and survival, not aim.
- Treat every charm and emblem as decoration — none of them change how a gun handles.
`,
  faq: [
    {
      question: 'How many levels does PUBG Weapon Mastery have?',
      answer:
        'Every weapon has 100 individual levels, and progression is tracked per weapon rather than shared across your account. Every ten levels promotes you to the next Mastery Tier, so there are 10 tiers in total. Once you reach level 100 on a weapon you can reset that weapon to bank an Expert Level, which comes with a medal and an upgraded weapon nameplate, turning the cap into a repeatable prestige loop.',
    },
    {
      question: 'How do you earn Weapon XP fastest in PUBG?',
      answer:
        'Weapon XP comes from dealing damage and defeating opponents with that specific gun, and the rate scales up with difficulty and survival. Hitting harder shots, defeating more enemies, and surviving longer all increase XP earned, so a top-ten finish with a couple of kills typically beats an early hot-drop death with three. There is no shortcut that beats simply playing well with the weapon you want to level.',
    },
    {
      question: 'Does finishing a knocked enemy count for Weapon Mastery?',
      answer:
        'No. Defeats are counted as kills in solo modes and as knockdowns plus final eliminations in team modes, but finishing a player who was already knocked down by someone else does not count as a defeat for you. The damage you deal still registers, so the effort is not entirely wasted, but do not expect mastery kill credit for mopping up teammates’ knocks.',
    },
    {
      question: 'What is the difference between Weapon Mastery and Survival Mastery in PUBG?',
      answer:
        'Weapon Mastery measures what you do with each individual gun — damage, headshots, and defeats — across 100 levels and 10 tiers per weapon. Survival Mastery is a separate account-wide track capped at level 500 that rewards the non-shooting side of the game: looting, using items, reviving teammates, surviving blue zone phases, and staying alive deep into matches. Both are permanent rather than seasonal, and both pay out exclusive free cosmetics.',
    },
    {
      question: 'Are PUBG Weapon Mastery charms purely cosmetic?',
      answer:
        'Yes. Charms are keychain-style trinkets that attach to the left side of a weapon barrel and have no effect on recoil, handling, damage, or visibility. Since the 2022 Weapon Mastery overhaul they became player-owned rather than weapon-locked, so a charm earned on one gun can be equipped on any gun. You can also equip and unequip them in-game the same way you swap weapon skins.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/pubg-battlegrounds', anchor: 'PUBG: Battlegrounds coverage hub' },
    { href: '/blog/pubg-battlegrounds/pubg-recoil-control-guide', anchor: 'PUBG recoil control guide' },
    { href: '/blog/pubg-battlegrounds/pubg-ranked-guide', anchor: 'PUBG ranked guide' },
    { href: '/blog/pubg-battlegrounds/best-pubg-dmrs', anchor: 'Best PUBG DMRs' },
    { href: '/blog/pubg-battlegrounds/best-pubg-sniper-rifles', anchor: 'Best PUBG sniper rifles' },
    { href: '/blog/pubg-battlegrounds/pubg-mid-game-guide', anchor: 'PUBG mid-game guide' },
  ],
  externalSources: [
    {
      url: 'https://pubg.fandom.com/wiki/Weapon_Mastery',
      title: "Weapon Mastery — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
    {
      url: 'https://pubg.com/en/news/1610',
      title: 'Weapon Mastery Overhaul — PUBG: Battlegrounds official news',
    },
    {
      url: 'https://support.pubg.com/hc/en-us/articles/360021861573-Weapon-Mastery',
      title: 'Weapon Mastery — PUBG Support',
    },
  ],
  tldr:
    'PUBG Weapon Mastery gives every weapon 100 levels split into 10 tiers, with XP earned from damage and defeats and scaled up by how long you survive — so playing for placement levels guns faster than hot-dropping for kills. Hitting 100 lets you reset for an Expert Level with a medal and upgraded nameplate, and all rewards (charms, emblems, medals) are free and purely cosmetic. Survival Mastery is the parallel 500-level track covering looting, reviving, and survival. The real value is the per-weapon stats underneath: use headshot rate and damage-to-kill ratios to find the gun you are quietly bad with.',
};
