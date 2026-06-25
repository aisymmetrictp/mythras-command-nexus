import type { BlogPost } from '../../blogTypes';

export const crkSuperMayhemGuide: BlogPost = {
  slug: 'crk-super-mayhem-guide',
  game: 'cookie-run-kingdom',
  category: 'advanced-strategy',
  topicCluster: 'super-mayhem',

  tags: ['pvp', 'arena', 'super-mayhem', 'competitive'],

  title: 'Cookie Run: Kingdom Super Mayhem Guide — 3 Teams, Moon Aspects & Ranking Up',
  metaDescription:
    'Cookie Run: Kingdom Super Mayhem guide: how the 3-team best-of-three PvP mode works, Moon Aspects, the rarity caps, ranking from Chocolate to Grandmaster.',
  excerpt:
    "Super Mayhem looks like the chaotic, twitchy PvP mode the name promises. It isn't — it's still auto-battle, and that's the first thing most players get wrong about it. The real game is drafting three teams, reading the seasonal Moon Aspect, and spreading your good cookies across a roster that can only use each one once. Here's how it actually works and how to climb.",
  featuredImagePrompt:
    'Dark fantasy painterly illustration of three distinct Cookie Run: Kingdom squads arrayed in formation under a glowing crescent moon wreathed in arcane Moon Aspect energy, a Super Mayhem rank emblem glinting above, cinematic 16:9 hero banner, dramatic moonlit rim lighting',
  heroImage: '/images/blog/cookie-run-kingdom/crk-super-mayhem-guide/super-mayhem-mode.webp',
  heroImageAlt: 'The Super Mayhem PvP mode loading screen, the seasonal three-team auto-battle ladder this Cookie Run: Kingdom guide covers.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/crk-super-mayhem-guide/super-mayhem-mode.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Super_Mayhem',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/crk-super-mayhem-guide/mayhem-trophy.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Super_Mayhem',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/crk-super-mayhem-guide/grandmaster-rank.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Kingdom_Arena',
      license: 'Fandom CC-BY-SA',
    },
  ],

  publishDate: '2026-06-25T00:00:00.000Z',
  lastUpdated: '2026-06-25T00:00:00.000Z',

  primaryKeyword: 'cookie run kingdom super mayhem guide',
  secondaryKeywords: [
    'crk super mayhem',
    'super mayhem teams',
    'moon aspect cookie run',
    'super mayhem ranking',
    'how to win super mayhem',
    'super mayhem vs arena',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,

  toc: [
    { id: 'super-mayhem-is-not-manual-pvp', label: 'Super Mayhem is not manual PvP', level: 2 },
    { id: 'what-super-mayhem-actually-is', label: 'What Super Mayhem actually is', level: 2 },
    { id: 'how-the-three-team-best-of-three-works', label: 'How the three-team best-of-three works', level: 2 },
    { id: 'the-roster-rules-rarity-caps-and-no-duplicates', label: 'The roster rules: rarity caps and no duplicates', level: 2 },
    { id: 'moon-aspects-the-seasonal-meta-tax', label: 'Moon Aspects: the seasonal meta tax', level: 2 },
    { id: 'how-super-mayhem-differs-from-kingdom-arena', label: 'How Super Mayhem differs from Kingdom Arena', level: 2 },
    { id: 'ranks-rewards-and-the-medal-shop', label: 'Ranks, rewards, and the Medal Shop', level: 2 },
    { id: 'how-to-build-three-teams-that-climb', label: 'How to build three teams that climb', level: 2 },
    { id: 'common-super-mayhem-mistakes', label: 'Common Super Mayhem mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Super Mayhem has a name that promises chaos — twitchy, hands-on, time-your-bursts PvP — and that name is the single biggest reason players misunderstand it. Here's the truth up front: **Super Mayhem is auto-battle.** You do not manually fire skills. You do not control anything once the fight starts. There is no manual-control PvP mode anywhere in Cookie Run: Kingdom, and Super Mayhem is no exception. The "mayhem" isn't in your thumbs — it's in the drafting.

So if it's not a reflex game, what is it? It's a deckbuilding game wearing a brawler's name. The skill expression is entirely pre-battle: you build *three* teams, you can only use each cookie *once* across all three, and a rotating seasonal modifier called a Moon Aspect quietly reshuffles which cookies are good. This is the full guide to the mode — what it really is, how the best-of-three structure works, the rarity caps, Moon Aspects, how it differs from regular Arena, the rank ladder and rewards, and how to draft three teams that actually climb. Where season names, exact reward amounts, and tuning shift patch to patch, I'll flag it as variable rather than hand you a number that's wrong by next season.

## Super Mayhem is not manual PvP

Let's kill the myth first, because building around it wastes your whole run. Super Mayhem battles resolve automatically. You pick your teams, you hit go, and the engine plays it out — you can set the speed to roughly 1x, 1.5x, or 2.5x to watch it faster, but that's the only "input" you have during a fight. Skills fire on their own cooldowns. There's no holding a burst for the right moment, no manual targeting, none of it.

That matters because it changes what "good at Super Mayhem" means. It's not about execution — it's about **composition and counter-drafting.** The fight is decided the instant you lock your teams, by cookies, toppings, treasures, and how well your comps answer the meta. If you came in expecting to outplay people with your fingers, you came to the wrong mode. You win here at the team-select screen.

## What Super Mayhem actually is

![The Super Mayhem PvP mode loading screen, the seasonal three-team auto-battle ladder.](/images/blog/cookie-run-kingdom/crk-super-mayhem-guide/super-mayhem-mode.webp)

Super Mayhem is a **seasonal, asynchronous PvP ladder.** It first arrived back in the v2.2 Interdimensional Super Mayhem update in October 2021 — the same update that added Twizzly Gummy Cookie — and it runs in limited-time seasons rather than being always on. Asynchronous means you're not fighting a live opponent in real time; you're matched against other players' set teams, and the engine resolves it.

The hook that separates it from the rest of the game's PvP is the **three-team format.** Where regular Kingdom Arena asks for one perfect team of five, Super Mayhem asks for three — and because of the no-duplicates rule, that means your roster depth, not just your best five, decides how far you climb. It's the same "your bench finally matters" pressure that Cookie Alliance applies in PvE, pointed at PvP instead.

## How the three-team best-of-three works

Each match is a **best-of-three.** You field three teams of five cookies; your opponent fields theirs. The teams square off in sequence, and **the first player to win two of the three rounds takes the match** — so if you win the first two, the third never even plays out. That's the core loop.

The strategic consequence of best-of-three is that you don't need three god teams — you need to win *two.* That reframes how you build. Your two strongest comps should be genuinely competitive; your third team's only job is to either steal a round when the opponent's third is weak or, at minimum, not be the reason you lose the two you should win. A lot of high-rank players treat the third slot as a "bait" or throwaway team and pour their good cookies into the first two — and that's a legitimate read once you're deep enough that opponents are stacking their own first two as well. Lower down, just make all three functional and let your better roster win the math.

## The roster rules: rarity caps and no duplicates

![A Super Mayhem trophy icon, the currency that determines your rank in the mode.](/images/blog/cookie-run-kingdom/crk-super-mayhem-guide/mayhem-trophy.webp)

Two rules define the whole drafting puzzle:

- **No duplicates across teams.** A cookie can appear on only one of your three teams. Your best healer heals one team. Your S-tier carry carries one team. This is what forces roster depth — you can't just run three copies of the meta squad.
- **Rarity caps per team.** Each team is limited to **up to three Legendary, Ancient, or Dragon cookies, plus up to one Beast cookie.** The remaining slots fill with Epic, Special, or lower-rarity cookies. So a team is still five bodies, but you can't cram it full of top-rarity units — you have to integrate well-built Epics and the rest of your roster.

On top of that, **every cookie you field must meet the level and skill-level minimums** the mode enforces (Level 60 and a high skill level), so half-built cookies can't fill out your third team. The practical effect of all this: Super Mayhem rewards the player who has *breadth* — lots of cookies built to a real standard — over the player who has two perfect units and a shallow bench.

## Moon Aspects: the seasonal meta tax

This is the mechanic that keeps the mode from going stale, and the one that quietly decides who's good each season. A **Moon Aspect** is a battle-wide modifier applied during the season's fights. It buffs cookies that fit the Aspect's condition and can debuff the field generally — for example, an Aspect might apply a blanket damage reduction to everyone while granting cookies that meet its criteria bonus Max HP, reduced crowd-control duration, and a chunk of DMG Resist Bypass when they use their skill.

The takeaway is that **the Moon Aspect reshuffles the tier list every season.** Cookies that are mid-tier in regular Arena can spike in value when an Aspect happens to favor them, and your usual best team might be running *against* the season's buff. Reading the active Aspect and building toward the cookies it rewards is the difference between climbing smoothly and grinding against the current. Don't just import your Arena team and assume it's optimal — check what the moon is doing this season first.

## How Super Mayhem differs from Kingdom Arena

If you already grind regular Arena, here's the clean contrast, because the differences change your strategy:

- **One team vs three.** Arena is a single five-cookie team. Super Mayhem is three teams, best-of-three, no duplicates. Roster depth matters far more here.
- **Revenge vs no revenge.** In Arena you can see who attacked you and hit them back. In Super Mayhem there's **no revenge feature** — you don't see your attackers and you don't lose trophies to them. The ladder is friendlier and lower-stakes.
- **No stat boosts.** Unlike Cookie Alliance, Super Mayhem **doesn't buff your cookies** — they fight at their built stats. What you geared is what you get.
- **Moon Aspects.** Arena doesn't have a rotating seasonal modifier reshaping the meta. Super Mayhem does, and it's central.

Both are auto-resolved — neither lets you control the fight — so the skill in both is roster and gearing. Super Mayhem just multiplies that by three and adds a seasonal wrinkle. For the single-team side of CRK PvP, the [Kingdom Arena meta team](/blog/cookie-run-kingdom/kingdom-arena-meta-team) breakdown is the companion read.

## Ranks, rewards, and the Medal Shop

![The Grandmaster rank emblem, the top tier of the Super Mayhem ladder.](/images/blog/cookie-run-kingdom/crk-super-mayhem-guide/grandmaster-rank.webp)

You climb a **trophy-based rank ladder** that runs from the bottom tiers (Chocolate) up through the mid tiers and into **Master and Grandmaster**, with Grandmaster reserved for the very top of the leaderboard. You gain trophies for winning matches and the higher tiers gate behind trophy thresholds — reaching the upper Master tiers takes thousands of trophies, and Grandmaster is a leaderboard-position tier, not just a trophy count.

Rewards come in two streams. **Season-end rank rewards** pay out based on how high you finished — the top tiers hand out large piles of Crystals, PvP Medals, and Rainbow Cubes, scaling down as you go lower. And **Medals**, earned from victories along the way, are spent in the **Medal Shop**, which is one of the better non-gacha sources of Soulstones in the game — a real reason to grind the mode even if you don't care about the leaderboard. Because exact reward amounts shift between seasons, treat any specific number you see as a snapshot, not a fixed promise; the *shape* (push your rank higher for better season rewards, win matches for Medals to spend) is what holds. For where those Soulstones fit into your roster plans, the [gacha and pull guide](/blog/cookie-run-kingdom/crk-gacha-pull-guide) covers the broader economy.

## How to build three teams that climb

The whole skill of the mode is making three competitive teams out of a roster that can only use each cookie once. The framework:

- **Win two, not three.** Build your two best comps to genuinely compete, and don't agonize over a perfect third team — it only needs to steal a round or hold serve. Spread your anchors so two teams are strong rather than one being stacked.
- **Spread your anchors, don't stack them.** Your best tank and best healer belong on *different* teams. One excellent support holding a team of solid Epics together is worth more than two anchors on one squad and a third team that folds on contact. Lean on the [best PvE teams](/blog/cookie-run-kingdom/best-crk-pve-teams) and [support tier list](/blog/cookie-run-kingdom/best-crk-support-cookies-ranked) for who can anchor a team built around them.
- **Respect the rarity cap by building Epics.** Three Legendaries/Ancients/Dragons plus one Beast is the ceiling per team — the rest of every team is Epic-or-lower. Well-geared Epics aren't filler here; they're mandatory, and a deep, built-out Epic roster is what separates climbers from stallers.
- **Read the Moon Aspect first.** Check what this season's Aspect rewards and build toward the cookies it buffs. A worse cookie riding the season's buff often beats a better cookie running off-Aspect.
- **Counter-build the meta.** Because fights are decided at team-select, your edge is answering what the ladder is running — a [strong DPS](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked) the current meta can't deal with, or a [tank](/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked) that walls the popular damage comps. Cross-reference the [CRK tier list](/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list) when deciding who to invest in next.

## Common Super Mayhem mistakes

In rough order of how often they sink runs:

1. **Expecting manual control.** It's auto-battle. The fight is won at team-select, not with your thumbs. Build comps, don't plan to outplay.

2. **Stacking all your good cookies into one team.** No-duplicates means depth wins. Two strong teams beat one perfect team and two piles of leftovers — spread your anchors.

3. **Ignoring the Moon Aspect.** Importing your Arena team and assuming it's optimal is how you grind against the season's buff instead of riding it. Read the Aspect, build toward it.

4. **Treating Epics as filler.** The rarity cap means most of every team is Epic-or-lower by rule. A shallow, ungeared Epic bench is the real reason most accounts stall in Super Mayhem.

5. **Over-investing in the third team.** Best-of-three means you only need to win two. Pour your effort into making two teams genuinely competitive before you fuss over the third.

6. **Skipping the mode entirely.** The Medal Shop is one of the better non-gacha Soulstone sources in the game, and the season rewards are real. Even casual play pays.

## Quick Action Checklist

- Understand it's auto-battle — the fight is decided at team-select, not by manual input
- Build three teams of five; you can use each cookie on only one team (no duplicates)
- Respect the rarity cap: up to three Legendary/Ancient/Dragon plus one Beast per team, the rest Epic-or-lower
- Make sure every cookie meets the level and skill-level minimums before you field it
- Aim to win two of three rounds — build two genuinely strong teams over three mediocre ones
- Spread your best tank and best healer across different teams, never the same squad
- Read the season's Moon Aspect and build toward the cookies it buffs
- Counter-build what the ladder is running, since you can't outplay anything live
- Climb the trophy ladder from Chocolate toward Master and Grandmaster for better season rewards
- Spend the Medals you earn in the Medal Shop — it's a strong non-gacha Soulstone source`,

  faq: [
    {
      question: 'Is Super Mayhem manual or auto-battle in Cookie Run: Kingdom?',
      answer:
        "Super Mayhem is auto-battle, despite the chaotic name. You don't manually fire skills or control anything once a fight begins — you can only set the playback speed to roughly 1x, 1.5x, or 2.5x to watch it resolve faster. Cookie Run: Kingdom has no manual-control PvP mode at all. That means being good at Super Mayhem is about composition and counter-drafting, not execution: the match is decided the instant you lock in your three teams, based on your cookies, toppings, treasures, and how well your comps answer the season's meta.",
    },
    {
      question: 'How does Super Mayhem work in Cookie Run: Kingdom?',
      answer:
        "Super Mayhem is a seasonal, asynchronous PvP ladder where you field three teams of five cookies against an opponent's three teams in a best-of-three — the first player to win two rounds takes the match. You can use each cookie on only one of your three teams (no duplicates), and each team is capped at up to three Legendary, Ancient, or Dragon cookies plus up to one Beast, with the rest filled by Epic-or-lower cookies that meet the level and skill-level minimums. A rotating seasonal Moon Aspect modifier buffs certain cookies and reshapes the meta each season.",
    },
    {
      question: 'What is a Moon Aspect in Super Mayhem?',
      answer:
        "A Moon Aspect is the seasonal battle-wide modifier in Super Mayhem. It buffs cookies that fit the Aspect's condition and often applies a blanket effect to the field — for example, reducing everyone's damage while granting cookies that meet its criteria bonus Max HP, reduced crowd-control duration, and DMG Resist Bypass when they use their skill. The practical effect is that the Moon Aspect reshuffles the tier list every season: mid-tier cookies can spike in value when the Aspect favors them. Reading the active Aspect and building toward the cookies it rewards, rather than just importing your regular Arena team, is what separates a smooth climb from grinding against the current.",
    },
    {
      question: 'How is Super Mayhem different from Kingdom Arena?',
      answer:
        "Both are auto-resolved PvP, but Super Mayhem is structurally different. Kingdom Arena is a single five-cookie team with a revenge system where you can lose trophies to attackers; Super Mayhem is three teams in a best-of-three with no duplicates across them, no revenge feature, and no trophy loss from being attacked, making it a lower-stakes ladder. Super Mayhem also doesn't buff your cookies the way Cookie Alliance does, and it layers in seasonal Moon Aspects that reshape the meta — something Arena doesn't have. The shared skill is roster depth and gearing; Super Mayhem just multiplies it by three.",
    },
    {
      question: 'What rewards does Super Mayhem give?',
      answer:
        "Two streams. Season-end rank rewards pay out based on how high you finish — the top Master and Grandmaster tiers hand out large amounts of Crystals, PvP Medals, and Rainbow Cubes, scaling down at lower ranks. Separately, you earn Medals from match victories that you spend in the Medal Shop, which is one of the better non-gacha sources of Soulstones in the game, making the mode worth grinding even if you don't chase the leaderboard. Exact reward amounts shift between seasons, so treat any specific number as a snapshot — but the structure of higher rank for better season rewards plus Medals for the shop holds.",
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team' },
    { href: '/blog/cookie-run-kingdom/best-crk-pve-teams', anchor: 'best PvE teams' },
    { href: '/blog/cookie-run-kingdom/best-crk-support-cookies-ranked', anchor: 'support tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked', anchor: 'DPS tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked', anchor: 'tank tier list' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list', anchor: 'CRK tier list' },
    { href: '/blog/cookie-run-kingdom/crk-gacha-pull-guide', anchor: 'gacha and pull guide' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Super_Mayhem', title: 'Cookie Run: Kingdom Wiki — Super Mayhem' },
    { url: 'https://gamerant.com/cookie-run-kingdom-super-mayhem-guide-best-teams/', title: 'Game Rant — Cookie Run: Kingdom Super Mayhem guide and best teams' },
    { url: 'https://gamingonphone.com/guides/cookie-run-kingdom-the-complete-super-mayhem-mode-guide-and-tips/', title: 'GamingonPhone — The complete Super Mayhem mode guide and tips' },
  ],

  tldr:
    "Super Mayhem is Cookie Run: Kingdom's seasonal three-team PvP ladder, and despite the name it's auto-battle — the match is decided at team-select, not by manual input. You field three teams of five in a best-of-three (win two rounds to win the match), can use each cookie on only one team, and each team is capped at three Legendary/Ancient/Dragon plus one Beast, so a deep, well-geared Epic roster is mandatory. A rotating seasonal Moon Aspect buffs certain cookies and reshapes the meta each season. Unlike Kingdom Arena it has no revenge, no trophy loss from attackers, and no stat boosts. Climb the Chocolate-to-Grandmaster trophy ladder for season rewards, and spend Medals in the Medal Shop — one of the better non-gacha Soulstone sources. To climb: spread your anchors across two strong teams, read the Moon Aspect, and counter-build the meta.",
};
