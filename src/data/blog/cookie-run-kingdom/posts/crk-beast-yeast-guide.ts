import type { BlogPost } from '../../blogTypes';

export const crkBeastYeastGuide: BlogPost = {
  slug: 'crk-beast-yeast-guide',
  game: 'cookie-run-kingdom',
  category: 'advanced-strategy',
  topicCluster: 'beast-yeast',
  title: 'Cookie Run: Kingdom Beast-Yeast Guide — Episode Runs, Boss Comps & Investment Path',
  metaDescription: 'Cookie Run: Kingdom Beast-Yeast guide for 2026: episode walls, Beast Raid bosses, best team comps, treasure picks, and where to spend soulstones.',
  excerpt: 'Beast-Yeast is the second continent in Cookie Run: Kingdom and the highest-EV farm in the game once you can clear it. This is the comp, treasure, and investment guide.',
  featuredImagePrompt: 'Dark fantasy painterly illustration of a towering moonlit beast-yeast continent with five glowing beast cookies silhouetted in front, mist and dough-like terrain, cinematic lighting, 16:9 hero banner',
  publishDate: '2026-05-24T00:00:00.000Z',
  lastUpdated: '2026-05-24T00:00:00.000Z',
  primaryKeyword: 'cookie run kingdom beast yeast guide',
  secondaryKeywords: [
    'crk beast yeast',
    'beast yeast episodes',
    'beast raid guide',
    'beast yeast bosses',
    'how to beat beast yeast',
    'beast yeast team comps',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'what-is-beast-yeast-and-why-it-matters', label: 'What is Beast-Yeast (and why it matters)', level: 2 },
    { id: 'how-episode-progression-actually-works', label: 'How episode progression actually works', level: 2 },
    { id: 'beast-raid-bosses-and-what-they-drop', label: 'Beast Raid bosses and what they drop', level: 2 },
    { id: 'recommended-comps-by-tier', label: 'Recommended comps by tier', level: 2 },
    { id: 'episode-by-episode-difficulty-walls-and-how-to-push-through', label: 'Episode-by-episode difficulty walls and how to push through', level: 2 },
    { id: 'treasures-for-beast-yeast-different-from-arena', label: 'Treasures for Beast-Yeast (different from Arena)', level: 2 },
    { id: 'beast-cookies-when-to-invest-soulstones', label: 'Beast Cookies — when to invest soulstones', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
    { id: 'faq', label: 'FAQ', level: 2 },
  ],
  content: `Beast-Yeast is where your account graduates from "I have Legendaries" to "I can actually use them." It is the second continent in Cookie Run: Kingdom, and it is brutal in a way the original story never bothered to be. The first map taught you how to put five cookies in a row. Beast-Yeast teaches you that those five cookies need to be built, geared, treasured, and positioned correctly or they get vaporized in under twelve seconds. Most of my friends bounced off it somewhere around Episode 10 and concluded the game "got too hard." It didn't get harder. It just stopped accepting half-finished teams.

That is also exactly why it is the most valuable mode in the game. The bosses drop resources nothing else drops. Beast Raid hands out beascuit dough you cannot farm anywhere else. And if you push the latest episode the week it launches, you walk away with currency, soulstones, and prestige that compounds for months. This guide is the comp ladder, the boss notes, the treasure picks, and the investment path I would give my own account if I had to start Beast-Yeast over today.

## What is Beast-Yeast (and why it matters)

Beast-Yeast unlocks after you finish the original World Map and clear the gate fight in the Hollyberry Kingdom region. From there it opens as a full second continent with its own story episodes, its own permanent boss mode (Beast Raid), and its own currency economy.

Episodes are story-mode stages with a final boss at the end of each. They drop the bulk of your **Beast soulstones** for the five Beast Cookies, the magic candy mats those cookies need, and a steady trickle of crystals. Beast Raid is a parallel weekly-cadence boss mode that rewards **beascuit dough** for attuning your Beast Cookies and rare gear lines that only roll in this mode. Together they form the late-game resource backbone.

The reason hardcore players obsess over Beast-Yeast is simple math. Crystal-per-hour from grinding old story maps is essentially zero past account level 65. Crystal-per-hour from completing Beast-Yeast episodes the week they drop is the best the game offers outside of paid passes. Skipping Beast-Yeast is leaving the most valuable F2P income source on the floor.

> If you only have time for one piece of content per week in CRK, do the Beast Raid weekly. The dough drops are the single biggest constraint on Beast Cookie power, and nothing else in the game gives them to you.

## How episode progression actually works

Episodes are released in batches with each major version. As of v7.4, Episode 15 is the current ceiling (it shipped with v7.2 in March 2026), Episode 14 came in v7.1 in February, and Episode 13 in v7.0 in January. Devsisters typically adds one new episode per major patch, so plan on a new wall every six to ten weeks.

Each episode follows the same structure. You play through roughly a dozen story stages with light puzzle elements and standard squad fights, then a final boss with a unique gimmick. Clear the boss and the episode unlocks a hard-mode rerun that drops higher-tier resources for one clear per day per stage. That dailies layer is the actual reason to push.

Crucially, episode rewards are front-loaded. The first time you clear an episode hands you a fat lump of crystals, beast soulstones, and dough. The dailies after that are smaller per-run but consistent. If a new episode drops on Monday and you clear it Monday night, you bank both the first-clear chest and the entire week of dailies. Clearing it three weeks late means three weeks of missed dailies you will never get back.

| Episode | Patch | Approx. Release | First-Clear Crystals | Difficulty Spike |
|---|---|---|---|---|
| 10 | v6.6 | June 2025 | ~3,000 | Major (sustain wall) |
| 11 | v6.7 | July 2025 | ~3,000 | Moderate |
| 12 | v6.8 | August 2025 | ~3,500 | Moderate |
| 13 | v7.0 | January 2026 | ~4,000 | Major (need Awakened) |
| 14 | v7.1 | February 2026 | ~4,000 | Moderate |
| 15 | v7.2 | March 2026 | ~4,500 | Major (boss DPS check) |

Crystal numbers vary by event overlays and login bonuses but the relative shape holds. Three episodes per quarter, two of those have a real wall, plan your roster around clearing both.

## Beast Raid bosses and what they drop

Beast Raid is the engine room. It is a co-op boss mode where you fight one of several rotating Beast Raid bosses, contribute damage in a single attempt window, and collect rewards based on damage tier. It is gated behind Beast-Yeast Episode 5, runs on a weekly reset, and uses its own currency (Beast Raid coins) plus direct drops.

The bosses are not the same as Guild Battle bosses. They have their own kits, their own counters, and their own loot tables. The roster expands over time. Here is what currently rotates.

- **Spectral Warmaster** added in v6.9 (Sep 2025) with the Chains of Silence mechanic. Punishes ability-spam comps because chains lock out skill use for a window. Bring an ability cooldown reducer and burst windows around the chain breaks.
- **Avatar of Destiny** the original Beast Raid boss. Heavy AoE, two-phase fight, weak to debuff stacking.
- **Living Abyss** introduced shortly after launch. Reflects single-target damage above a threshold. AoE-heavy teams dominate this fight.
- **Eternal Eclipse** Beast Raid version of the eclipse fight. Mostly a DPS check.

Damage tiers cap the rewards. Hitting the top tier gets you the full payout including the rare beascuit pattern drops, and the top tier scales up with the meta, so a Spectral Warmaster top-tier clear in v6.9 is a mid-tier clear by v7.4.

> Do not skip a Beast Raid week to "save up." The currency you earn this week is gone if you skip. Even a low-damage run is free dough.

## Recommended comps by tier

There is no single Beast-Yeast comp. The mode favors flexibility. But here are the three reference comps I run on rotation depending on episode difficulty and what I have leveled.

| Tier | Comp | Best For | Cost to Build |
|---|---|---|---|
| Mid-game | Aegis Hollyberry / Dark Enchantress / Pavlova / Pure Vanilla / Sugar Swan | Episodes 8-12 dailies | Medium |
| Endgame | Aegis Hollyberry / Dark Enchantress / Timekeeper / Sugar Swan / Venom Dough | Episodes 13-15 first clears | High |
| Beast-Core | Aegis Hollyberry / Eternal Sugar / Mystic Flour / Burning Spice / Sugar Swan | All-Beast push and showcase | Very High |

The mid-game comp is the workhorse. Two healers plus a damage-reducer front means you survive almost any sustained-damage boss, Dark Enchantress sweeps trash and contributes consistent DPS, and Sugar Swan covers the rare statuses you have not learned to react to yet.

The endgame comp swaps in Timekeeper for Pavlova when you need burst windows lined up with boss mechanics, and Venom Dough when stacking debuffs matters more than raw heals. Aegis Hollyberry stays. Sugar Swan stays. Those two are the spine.

The Beast-Core comp is what you graduate to. Eternal Sugar tanks better than most dedicated tanks once attuned. Mystic Flour and Burning Spice trade off magic-damage roles. Shadow Milk slots in over Burning Spice for fights that punish AoE. This is the showcase comp. It also costs months of investment.

For positioning fundamentals and gear priority on these cookies individually, see the [Aegis Hollyberry build](/gear-guide), the [Sugar Swan gear guide](/gear-guide/sugar-swan-cookie), and the [Eternal Sugar Cookie page](/gear-guide/eternal-sugar-cookie).

## Episode-by-episode difficulty walls and how to push through

You do not hit walls evenly. There are two main spikes that filter the player base, plus one early grinder.

**Episode 6** is the first time Beast-Yeast says "your jungle of half-leveled epics will not cut it anymore." Power up your front line, finish ascending your healer, and it falls quickly.

**Episode 10** is the first real wall. The mid-stage trash is fine. The boss has a sustained-damage phase that one-shots dry teams. The fix is double healer plus a damage-reduction frontliner. If you have Aegis Hollyberry, level her now. If not, sub in your best tank with a defense set and run Pure Vanilla plus Pavlova or Cream Unicorn for double sustain. Brute force works here. You do not need anything exotic, just enough HP and healing throughput.

**Episode 13** is the wall that filters serious accounts from casual ones. The boss has a phase transition that requires either an Awakened Ancient cookie (most commonly Dark Enchantress Cookie Awakened) or one of the Beast Cookies leveled past attune 3. There is no F2P-friendly way around this without months of soulstone farming. The playable workarounds: borrow a friend's Awakened DEC if your roster supports a buddy slot in the relevant mode, or hard-grind Beast Raid for soulstones on whichever Beast Cookie matches your existing comp.

**Episodes 14 and 15** are tuning passes on Episode 13's bar. If you can clear 13, you can clear 14 and 15 with the same comp and slightly more gear refinement.

The pattern is clear. The big walls are 10 and 13. Everything between them is a question of investment depth, not roster width. If you have one strong endgame comp, you can push through, full stop.

> The single biggest mistake players make at Episode 10 is trying to brute-force it with a one-healer comp because Pavlova is "fine." Pavlova is not fine. Run two healers. Lose nothing.

## Treasures for Beast-Yeast (different from Arena)

The treasure meta inside Beast-Yeast diverges sharply from what you run in [Kingdom Arena](/blog/cookie-run-kingdom/best-f2p-arena-team). Arena is short, bursty, and rewards opening-skill manipulation. Beast-Yeast is long, attritional, and rewards sustain and DPS uptime.

For PvE Beast-Yeast pushes, the treasure trio I run is **Old Pilgrim's Scroll** for the consistent damage amp, **Squishy Jelly Watch** for the early shield buffer that lets your healers ramp without losing a DPS first, and **Sugar Gnome Coin Bank** for the heal-on-attack passive that compounds with your healer's regular casts.

Swap Sugar Gnome for **Shimmering Glass Watch** on boss-only stages where the fight ends before the heal-on-attack passive would catch up. For mid-stages with heavy trash, swap Squishy Jelly for **Pilgrim's Slingshot** to clear chunks faster and conserve healer casts.

| Slot | Default Pick | Swap For |
|---|---|---|
| Damage | Old Pilgrim's Scroll | Pilgrim's Slingshot (trash-heavy) |
| Sustain | Sugar Gnome Coin Bank | Shimmering Glass Watch (boss-only) |
| Defense | Squishy Jelly Watch | Disco-Ball Crystal (anti-burst boss) |

For the full treasure leveling roadmap, the [CRK treasures guide](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide) covers which to upgrade first and how to handle priority conflicts between Arena and PvE.

## Beast Cookies — when to invest soulstones

Here is the hard truth about Beast Cookies. They are the strongest cookies in the game. They also cost obscene amounts of soulstones, dough, and time to make functional. Pulling one to a usable state from zero is a 4-6 month F2P investment.

So which one do you invest in first? The answer depends on your existing roster and your goals.

- **Silent Salt Cookie** is the best opener pick for PvE-focused accounts. He hits like a truck, scales with both attack speed and crit, and his kit punishes single-target bosses, which is exactly what Beast-Yeast episodes throw at you. Topping priority is covered in the [Silent Salt toppings article](/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list) and the [Silent Salt Cookie gear guide](/gear-guide/silent-salt-cookie).
- **Eternal Sugar Cookie** is the answer if your tank line is weak. She is the best front-line cookie in the game once attuned, and she frees a slot for a second DPS or healer. Build her if your current tank is Hollyberry-tier or worse. See the [Eternal Sugar Cookie gear guide](/gear-guide/eternal-sugar-cookie).
- **Mystic Flour Cookie** is the magic-damage backline pick. She trades raw burst for sustained DoT and control. Best for accounts that already have a physical-DPS spine and need a flex magic slot. The [Mystic Flour Cookie page](/gear-guide/mystic-flour-cookie) has the topping math.
- **Burning Spice Cookie** is the AoE crusher. If you are still farming trash-heavy episodes, he turns 90-second clears into 40-second clears. Less essential for boss fights. See the [Burning Spice Cookie guide](/gear-guide/burning-spice-cookie).
- **Shadow Milk Cookie** is the control specialist. He is the best counter-pick into bosses with reactive mechanics. Skip him unless you specifically struggle with Spectral Warmaster or the Episode 13 boss. The [Shadow Milk Cookie page](/gear-guide/shadow-milk-cookie) has the kit breakdown.

The investment order I would recommend for a new Beast-Yeast pusher: Eternal Sugar first (defense unlocks everything), then Silent Salt (DPS scales your clear times), then situational picks based on which episode boss is filtering you. Beascuit dough is the bottleneck. Plan on running every Beast Raid weekly without exception.

For broader roster context on which Beasts are top-tier this patch, the [CRK tier list](/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list) ranks them against the rest of the Legendary pool. And if you also push [Guild Battle](/blog/cookie-run-kingdom/guild-battle-teams), Beast Cookies will eventually replace half of that comp too.

## Quick Action Checklist

- [ ] Beast Raid every weekly reset, full attempts, no skips
- [ ] Episode dailies on every cleared episode for the crystal trickle
- [ ] Push new episodes the week they launch to bank first-clear chests plus dailies
- [ ] Run double healer on any Episode 10+ first-clear attempt
- [ ] Equip Old Pilgrim's Scroll plus Sugar Gnome Coin Bank plus Squishy Jelly Watch as your default Beast-Yeast treasure trio
- [ ] Pick one Beast Cookie to invest in based on your roster gap, not hype
- [ ] Save beascuit dough for that one Beast Cookie, do not spread it
- [ ] Borrow an Awakened DEC from a friend slot if you hit the Episode 13 wall without one
- [ ] Cross-check current meta against the [tier list](/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list) every major patch
`,
  faq: [
    {
      question: 'How long does it take to clear all current Beast-Yeast episodes?',
      answer: "For a fresh account, plan on three to five months of consistent play to reach Episode 10, and another two to four months to push from 10 to the current ceiling at 15. Returning accounts with a built mid-game roster can usually clear up to Episode 12 in two to three weeks and then grind soulstones toward the Episode 13 wall.",
    },
    {
      question: 'Is Beast-Yeast worth doing if I am still pushing the original story map?',
      answer: "Yes, the moment you have access. Beast-Yeast crystal income dwarfs anything you get from continuing to grind original-map dailies, and the Beast Raid weekly is the highest-value single piece of content in the game. Run them in parallel.",
    },
    {
      question: 'Which Beast Cookie should I build first as a free-to-play player?',
      answer: "Eternal Sugar Cookie if your current tank line is weak, Silent Salt Cookie if your tank is fine but your DPS is the limiting factor. Both are the safest investments because they slot into nearly every comp. Avoid spreading dough across multiple Beast Cookies at once.",
    },
    {
      question: 'Do I need Awakened Ancient cookies to clear Beast-Yeast?',
      answer: "Not for Episodes 1 through 12. Episode 13 effectively requires either an Awakened Ancient (most commonly Awakened Dark Enchantress Cookie) or a Beast Cookie leveled past attune 3. Episodes 14 and 15 are tuned around having one of those answers in your team.",
    },
    {
      question: 'How does Beast Raid differ from Guild Battle?',
      answer: "Beast Raid is solo per-attempt with a damage-tier reward structure, weekly reset, and a roster of unique bosses that do not appear in Guild Battle. Guild Battle is team-coordinated, daily-reset, and uses a different boss pool. They share the goal of pushing damage but the rewards, mechanics, and counter teams are completely separate.",
    },
    {
      question: 'What treasures should I prioritize upgrading for Beast-Yeast?',
      answer: "Old Pilgrim's Scroll, Squishy Jelly Watch, and Sugar Gnome Coin Bank are the core three. Get all three to at least level 9 before chasing PvP treasures. Shimmering Glass Watch is the fourth priority for boss-focused runs.",
    },
    {
      question: 'How often does Devsisters add new Beast-Yeast episodes?',
      answer: "Roughly one new episode per major patch, which lands every six to ten weeks. That cadence has been stable through 2025 and into 2026. Plan your investment cycles around banking enough crystals and dough to clear each new episode within its launch week.",
    },
  ],
  internalLinks: [
    { href: '/gear-guide', anchor: 'Aegis Hollyberry build' },
    { href: '/gear-guide/sugar-swan-cookie', anchor: 'Sugar Swan gear guide' },
    { href: '/gear-guide/eternal-sugar-cookie', anchor: 'Eternal Sugar Cookie page' },
    { href: '/gear-guide/silent-salt-cookie', anchor: 'Silent Salt Cookie gear guide' },
    { href: '/gear-guide/mystic-flour-cookie', anchor: 'Mystic Flour Cookie page' },
    { href: '/gear-guide/burning-spice-cookie', anchor: 'Burning Spice Cookie guide' },
    { href: '/gear-guide/shadow-milk-cookie', anchor: 'Shadow Milk Cookie page' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list', anchor: 'CRK tier list' },
    { href: '/blog/cookie-run-kingdom/guild-battle-teams', anchor: 'Guild Battle' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide', anchor: 'CRK treasures guide' },
    { href: '/blog/cookie-run-kingdom/best-f2p-arena-team', anchor: 'Kingdom Arena' },
  ],
  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Cookie_Run:_Kingdom_Wiki', title: 'Cookie Run: Kingdom Wiki — Beast-Yeast continent overview' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Beast_Raid', title: 'Cookie Run: Kingdom Wiki — Beast Raid mode' },
    { url: 'https://www.pocketgamer.com/cookie-run-kingdom/', title: 'Pocket Gamer — Cookie Run: Kingdom coverage hub' },
    { url: 'https://www.devsisters.com/en/', title: 'Devsisters — Official studio site' },
    { url: 'https://www.playcookierun.com/', title: 'Play Cookie Run — Official franchise portal' },
  ],
};
