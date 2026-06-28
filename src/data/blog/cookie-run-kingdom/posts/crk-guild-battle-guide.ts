import type { BlogPost } from '../../blogTypes';

export const crkGuildBattleGuide: BlogPost = {
  slug: 'crk-guild-battle-guide',
  game: 'cookie-run-kingdom',
  category: 'advanced-strategy',
  topicCluster: 'game-modes',

  tags: ['guild-battle', 'pve', 'co-op', 'heroic-medals', 'bosses'],

  title: 'Cookie Run: Kingdom Guild Battle Guide — 4 Bosses, Rounds & Rewards',
  metaDescription:
    'How Guild Battle works in Cookie Run: Kingdom: the four shared-damage bosses, the four-round season, Guild Trophies, Heroic Medals, and the routine that maxes rewards.',
  excerpt:
    "Guild Battle is the closest thing CRK has to a co-op raid, and most players leave Heroic Medals on the table by not using all 18 tickets. Here's how the season actually works.",
  featuredImagePrompt:
    'Epic painterly Cookie Run: Kingdom banner of a guild of cookies charging four towering raid bosses — a red dragon, a cosmic avatar, an abyssal horror, and a mechanical god — beacons of unity blazing behind them, cinematic 16:9 hero art',
  heroImage: '/images/blog/cookie-run-kingdom/crk-guild-battle-guide/hero.webp',
  heroImageAlt:
    'Cookie Run: Kingdom Guild Battle promotional art showing the guild update where cookies raid shared bosses.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/crk-guild-battle-guide/hero.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Guild_Battle',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/crk-guild-battle-guide/red-velvet-dragon.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Guild_Battle',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/crk-guild-battle-guide/avatar-of-destiny.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Guild_Battle',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/crk-guild-battle-guide/living-abyss.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Guild_Battle',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/crk-guild-battle-guide/machine-god.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Guild_Battle',
      license: 'Fandom CC-BY-SA',
    },
  ],

  publishDate: '2026-06-28T00:00:00.000Z',
  lastUpdated: '2026-06-28T00:00:00.000Z',

  primaryKeyword: 'cookie run kingdom guild battle guide',
  secondaryKeywords: [
    'crk guild battle',
    'guild battle bosses',
    'heroic medals cookie run',
    'guild battle rewards',
    'how guild battle works',
    'guild trophies crk',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,

  toc: [
    { id: 'the-co-op-mode-you-keep-half-playing', label: 'The co-op mode you keep half-playing', level: 2 },
    { id: 'what-guild-battle-actually-is', label: 'What Guild Battle actually is', level: 2 },
    { id: 'the-four-bosses', label: 'The four bosses', level: 2 },
    { id: 'how-the-season-and-rounds-work', label: 'How the season and rounds work', level: 2 },
    { id: 'tickets-and-the-60-second-clock', label: 'Tickets and the 60-second clock', level: 2 },
    { id: 'shared-damage-and-why-it-changes-everything', label: 'Shared damage and why it changes everything', level: 2 },
    { id: 'guild-trophies-ranking-and-rewards', label: 'Guild Trophies, ranking, and rewards', level: 2 },
    { id: 'the-medal-shop-and-heroic-medals', label: 'The Medal Shop and Heroic Medals', level: 2 },
    { id: 'how-to-actually-max-your-rewards', label: 'How to actually max your rewards', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `If you're in a guild and you're not clearing all your Guild Battle tickets every round, you are throwing away one of the steadiest reward streams in Cookie Run: Kingdom. Here's the falsifiable hook: **using all 18 of your tickets in a single round nets you 400 Heroic Medals** on top of everything else those battles drop — and a huge share of players quietly skip it because the mode looks like just another boss fight. It isn't. Guild Battle is the closest thing CRK has to a co-op raid, where your damage and your guildmates' damage stack against shared bosses, and your collective effort feeds a guild ranking that pays everyone.

This is the full mechanics guide: what the mode is, the four bosses, how the four-round season is structured, the ticket and timer rules, why shared damage changes how you play, Guild Trophies and the ranking rewards, and the Medal Shop that makes it all worth grinding. Exact reward numbers shift between updates, so I'll give you the structure and flag the tiers rather than hand you a Crystal count that's stale by next season.

## The co-op mode you keep half-playing

Guild Battle is **permanent and seasonal** — it's always in the game, but it runs in defined seasons rather than being available at all hours. It first showed up in beta way back in the **Beacons of Unity update (v1.2)**, alongside the launch of Guilds themselves, and got a full overhaul and proper release in the **Festival of Dreams and Wishes mid-update (v3.5)**. The version you're playing now is that revamp.

The reason so many players "half-play" it is that it doesn't demand a perfect single clear like a tower does. You just keep throwing teams at bosses, your damage banks, and you tally up at the end of the round. That low-pressure structure is also why it's easy to forget — there's no dramatic fail screen pushing you to optimize, so casual players fire a couple of teams and wander off. The players who treat it as a routine, on the other hand, walk away with piles of Heroic Medals, Crystals, and Topping Pieces every season.

## What Guild Battle actually is

The core idea: your guild collectively fights a rotating set of raid bosses, and **damage inflicted on any boss is shared between guildmates.** Everyone in the guild chips at the same boss HP toward the same goals and the same rewards. It's cooperative, not competitive *within* your guild — you're all on the same side, racing other guilds.

You attack with normal five-cookie teams, the same rosters you'd build for [PvE](/blog/cookie-run-kingdom/best-crk-pve-teams). There's also a **practice mode** that lets you test teams against a boss with no ticket cost, no rewards, and no effect on the real boss or rankings — use it to dial in a comp before you spend a real ticket. That practice option is genuinely underused and it's free, so there's no excuse for blind-firing a bad team into a live boss.

## The four bosses

![Red Velvet Dragon poised for a Guild Battle in Cookie Run: Kingdom, one of the four shared raid bosses.](/images/blog/cookie-run-kingdom/crk-guild-battle-guide/red-velvet-dragon.webp)

Guild Battle runs **four distinct bosses**, each with its own skills, strengths, weaknesses, and the strategy needed to beat it:

- **Red Velvet Dragon** — the original Guild Battle boss and the one most players cut their teeth on.
- **Avatar of Destiny** — a different damage profile and timing that rewards a different team than the Dragon.
- **Living Abyss** — its own mechanics and counters.
- **Machine-God of the Eternal Void** — the newest of the set, with its own puzzle to solve.

![Avatar of Destiny ready for Guild Battle, a boss with a distinct damage profile from the Red Velvet Dragon.](/images/blog/cookie-run-kingdom/crk-guild-battle-guide/avatar-of-destiny.webp)

The practical point is that **no single team beats all four.** Each boss has weaknesses you exploit — different element pressure, different need for sustain versus burst, different tolerance for crowd control. You'll want a couple of flexible damage cores and the willingness to swap pieces per boss. This is exactly where the [Guild Battle team comps](/blog/cookie-run-kingdom/guild-battle-teams) breakdown earns its keep — that guide is about *who to bring*, while this one is about *how the mode works around them*.

![Living Abyss prepared for Guild Battle, one of the four bosses each requiring its own counter strategy.](/images/blog/cookie-run-kingdom/crk-guild-battle-guide/living-abyss.webp)

## How the season and rounds work

The season structure is rigid and worth memorizing because it dictates your routine:

- A season is **four rounds, one per week.**
- That's **24 playable days plus 4 tallying days** across the season.
- Each round, **two bosses** are available to battle, and you can fight each of those bosses up to **9 times** — so **18 battles maximum per player per round.**
- A guild as a whole can fight up to **540 battles per round.**
- On each round's **tallying day**, all battles close while results compute, and every boss **resets to Level 1** for the next round.
- Players get **round rewards weekly** and **season rewards every four weeks** based on the guild's ranking.

![Machine-God of the Eternal Void readied for Guild Battle, the newest of the four shared bosses.](/images/blog/cookie-run-kingdom/crk-guild-battle-guide/machine-god.webp)

The boss reset every round is important: each boss starts at **Level 1** at the start of each round and **levels up as you defeat it**, getting stronger as the round goes on (the game flags every 50 levels that the boss just got tougher). So early in a round the bosses are soft and you farm clears fast; later in the round they're beefy and each kill is harder but worth more. Front-load your attempts when you can.

## Tickets and the 60-second clock

You play with **Guild Battle Tickets.** You get **18 tickets at the start of each new round** (refreshed at midnight GMT+9). Two rules about spending them matter:

- **No-damage exits are free.** If you enter a battle and leave without dealing any damage, no ticket is consumed. But the instant you deal even **1 point of damage**, the ticket is spent. So you can peek at a boss, bail, and not pay — but don't fire a skill unless you mean it.
- **Every battle has a 60-second time limit.** When you enter, the timer freezes briefly while your cookies run in and all skill cooldowns reset, then it starts after the boss notice flashes. Active Treasures have their initial cooldown frozen during that intro too. Sixty seconds is your damage window — comps that take forever to ramp lose to comps that dump damage fast.

That 60-second cap is the single biggest team-building constraint in the mode. You're not building for endurance; you're building for **damage density inside one minute.** Burst and fast-ramping cores beat slow grinders here, which is a different calculus from a tower run. Treasures matter too — get the right ones from the [treasures guide](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide) loaded before you spend tickets.

## Shared damage and why it changes everything

The shared-damage system is the heart of the mode and it changes your incentives in two ways.

First, **your contribution is visible and ranked.** Results are organized by both individual boss damage and round total, archived per round, and there's a detailed battle log showing each fight's team, Treasures, power level, damage dealt, boss level, and timestamp — yours and your guildmates'. You can't hide a lazy week; the log shows it. That's social pressure to actually pull your weight, and it's how good guilds spot members who aren't contributing.

Second, because damage stacks toward shared boss kills and shared rewards, **everyone clearing their tickets lifts the whole guild's ranking** — and the ranking is what determines the big season payouts for every member. Your 18 battles aren't just your own loot; they push the guild up the tier ladder that pays everyone. This is the same "your roster depth feeds the group" pressure that [Cookie Alliance](/blog/cookie-run-kingdom/crk-cookie-alliance-guide) applies, pointed at a co-op raid instead.

## Guild Trophies, ranking, and rewards

Clearing boss levels awards the guild **Guild Trophies**, which determine your guild's **overall ranking** and therefore the tier of rewards everyone receives after each tallying day. The reward currencies you're chasing:

- **Heroic Torches** — a Guild Battle currency.
- **Flames of Unity** — the other Guild Battle currency.
- **Heroic Medals** — the Medal Shop currency (the big one).
- Plus **Coins, Crystals, Topping Pieces, Rainbow Cubes, and Butter Amber** scaling by tier.

Round rewards land weekly; **season rewards** land on the final tallying day. The catch on season rewards: you must have **participated in 15 or more Guild Battles** before the Guild Trophies reset to claim them. That's the hard floor — miss 15 battles in a season and you forfeit the season payout entirely. Since you get 18 tickets *per round* across four rounds, hitting 15 total is easy if you simply show up, which is exactly why skipping is such a waste.

Higher guild tiers (Top #10, Top #30, Top tiers within Master, and so on) pay dramatically more — the top brackets hand out tens of thousands of Heroic Torches, thousands of Crystals and Heroic Medals, hundreds of Topping Pieces, thousands of Rainbow Cubes, and Butter Amber for the season reward. A well-organized guild grinding hard is a serious, recurring resource engine.

## The Medal Shop and Heroic Medals

The Heroic Medals you bank go into the **Guild Battle Medal Shop**, and that's the real long-term reason to grind the mode. Like the [Arena Medal Shop](/blog/cookie-run-kingdom/best-f2p-arena-team), it's a non-gacha source of high-value materials — Soulstones and other progression goods you'd otherwise gamble for. Clearing all 18 tickets in a round alone nets **400 Heroic Medals**, and that adds up fast across a four-round season.

The takeaway: even if your guild isn't top-tier and your ranking rewards are modest, the per-battle Heroic Medals flow regardless, and the Medal Shop converts them into real account progress. Grind the mode for the Medals even when the leaderboard is out of reach.

## How to actually max your rewards

The routine that wrings the most out of every season:

- **Use all 18 tickets every round.** That's the 400-Heroic-Medal bonus plus all the per-battle drops. This is the whole ballgame — clear your tickets.
- **Hit 15+ battles before season's end** to qualify for season rewards. With 18 per round, you only need to play most of one round, but don't cut it close.
- **Front-load attempts early in a round** while bosses are at lower levels and clears are fast, then grind the higher levels for bigger per-kill rewards.
- **Use practice mode** to tune a team against a boss before spending real tickets — it's free.
- **Build for 60-second burst,** not endurance. Fast-ramping damage cores and the right Treasures beat slow grinders.
- **Bring different teams per boss** — no single comp beats all four, so lean on the [Guild Battle team comps](/blog/cookie-run-kingdom/guild-battle-teams) and the [DPS tier list](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked) to cover each one.
- **Spend Heroic Medals in the Medal Shop** on Soulstones and high-value mats — it's a non-gacha progression source.

## Quick Action Checklist

- [ ] Join an active guild that actually clears Guild Battle each round
- [ ] Use all 18 tickets every round for the 400 Heroic Medal bonus plus per-battle drops
- [ ] Play at least 15 battles before the season ends to qualify for season rewards
- [ ] Front-load your attempts early in a round while bosses are low-level and quick to clear
- [ ] Use the free practice mode to dial in a team before spending real tickets
- [ ] Build burst-focused teams that dump damage inside the 60-second limit
- [ ] Swap teams per boss — no single comp beats all four
- [ ] Load the right Treasures before each battle, since their intro cooldown is frozen
- [ ] Spend Heroic Medals in the Medal Shop on Soulstones and high-value materials`,

  faq: [
    {
      question: 'How does Guild Battle work in Cookie Run: Kingdom?',
      answer:
        "Guild Battle is a permanent, seasonal co-op mode where your guild fights four shared raid bosses — Red Velvet Dragon, Avatar of Destiny, Living Abyss, and Machine-God of the Eternal Void — and damage dealt is shared between guildmates toward the same goals and rewards. A season runs four weekly rounds; each round has two available bosses you can each fight up to 9 times (18 battles per player). Every battle uses a Guild Battle Ticket and has a 60-second time limit, and clearing boss levels earns the guild Guild Trophies that set its ranking and reward tier.",
    },
    {
      question: 'How many Guild Battle tickets do you get per round?',
      answer:
        'You receive 18 Guild Battle Tickets at the start of each new round, refreshed at midnight GMT+9. You can fight each of the round\'s two bosses up to 9 times, for 18 battles total. Using all 18 tickets in a round rewards you with 400 Heroic Medals on top of the per-battle drops. Importantly, leaving a battle without dealing any damage does not consume a ticket, but dealing even 1 point of damage spends it.',
    },
    {
      question: 'What are the four Guild Battle bosses in Cookie Run: Kingdom?',
      answer:
        'The four Guild Battle bosses are the Red Velvet Dragon, the Avatar of Destiny, the Living Abyss, and the Machine-God of the Eternal Void. Each has its own skills, strengths, weaknesses, and the strategy needed to defeat it, so no single team beats all four. Each boss starts at Level 1 at the beginning of a round and levels up as your guild defeats it, getting stronger as the round goes on.',
    },
    {
      question: 'What rewards does Guild Battle give?',
      answer:
        "Guild Battle pays out Heroic Torches, Flames of Unity, and Heroic Medals per battle based on boss level and damage, plus Coins, Crystals, Topping Pieces, Rainbow Cubes, and Butter Amber scaling with your guild's ranking. Round rewards arrive weekly and season rewards arrive every four weeks, but you must have played at least 15 Guild Battles before the Guild Trophies reset to claim season rewards. Heroic Medals are spent in the Guild Battle Medal Shop, a strong non-gacha source of Soulstones and high-value materials.",
    },
    {
      question: 'Why does my team keep losing in Guild Battle?',
      answer:
        'The most common reason is the 60-second time limit. Guild Battle rewards damage density inside one minute, so slow-ramping or endurance-focused teams underperform compared to burst and fast-ramping damage cores. Make sure you are bringing a team suited to that specific boss, since each of the four has different weaknesses, and load the right Treasures before entering. Use the free practice mode to test a comp against a boss before spending a real ticket.',
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/guild-battle-teams', anchor: 'Guild Battle team comps' },
    { href: '/blog/cookie-run-kingdom/crk-cookie-alliance-guide', anchor: 'Cookie Alliance guide' },
    { href: '/blog/cookie-run-kingdom/best-crk-pve-teams', anchor: 'best PvE teams' },
    { href: '/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked', anchor: 'DPS tier list' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide', anchor: 'treasures guide' },
    { href: '/blog/cookie-run-kingdom/best-f2p-arena-team', anchor: 'F2P Arena team' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Guild_Battle', title: 'Cookie Run: Kingdom Wiki — Guild Battle' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Guilds', title: 'Cookie Run: Kingdom Wiki — Guilds' },
  ],

  tldr:
    "Guild Battle is Cookie Run: Kingdom's permanent, seasonal co-op raid where your guild fights four shared bosses — Red Velvet Dragon, Avatar of Destiny, Living Abyss, and Machine-God of the Eternal Void — and everyone's damage stacks toward shared kills and rewards. A season is four weekly rounds; you get 18 tickets per round (two bosses, up to 9 fights each), and clearing all 18 nets 400 Heroic Medals. Every battle has a 60-second time limit, so build for burst, not endurance, and bring a different team per boss since none beats all four. Clearing boss levels earns Guild Trophies that set your guild's ranking and the size of weekly round and four-weekly season rewards (you need 15+ battles a season to claim season rewards). Spend Heroic Medals in the Medal Shop — a strong non-gacha source of Soulstones.",
};
