import type { BlogPost } from '../../blogTypes';

export const mtgCommanderBrackets: BlogPost = {
  slug: 'mtg-commander-brackets',
  game: 'magic-the-gathering',
  category: 'format-guides',
  topicCluster: 'commander-format',
  tags: ['commander', 'power-level', 'rule-0', 'deckbuilding'],
  title: 'MTG Commander Brackets Explained (The Power-Level System)',
  metaDescription:
    'WotC\'s official MTG Commander Bracket system explained: Brackets 1-5 (Exhibition to cEDH), the Game Changers list, and how to set up fair, balanced pods.',
  excerpt:
    "\"What's your power level?\" used to be the most useless question in Commander. WotC's official Bracket system finally gives it real numbers. Here's what Brackets 1 through 5 actually mean and how to use them so nobody gets stomped.",
  featuredImagePrompt:
    'A row of five glowing Magic: The Gathering command zones rising in intensity from a calm candlelit table to a blazing high-power arena, a power meter overlay climbing from green to red, painterly fantasy art style, no text',
  heroImage: '/images/blog/magic-the-gathering/mtg-commander-brackets/sol-ring.jpg',
  heroImageAlt:
    'Sol Ring, the one-mana artifact legal across every Commander bracket — a reference point for how the power-level system frames cards.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-commander-brackets/sol-ring.jpg',
      sourceUrl: 'https://scryfall.com/card/msc/211/sol-ring',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-commander-brackets/jeweled-lotus.jpg',
      sourceUrl: 'https://scryfall.com/card/cmm/396/jeweled-lotus',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-commander-brackets/thassas-oracle.jpg',
      sourceUrl: 'https://scryfall.com/card/thb/73/thassas-oracle',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
  ],
  publishDate: '2026-06-17T00:00:00.000Z',
  lastUpdated: '2026-06-17T00:00:00.000Z',
  primaryKeyword: 'mtg commander brackets',
  secondaryKeywords: [
    'commander brackets explained',
    'commander power level system',
    'commander bracket 1 2 3 4 5',
    'commander game changers list',
    'mtg commander power levels',
    'what bracket is my commander deck',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'evergreen',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'why-the-bracket-system-exists', label: 'Why the bracket system exists', level: 2 },
    { id: 'the-five-brackets-at-a-glance', label: 'The five brackets at a glance', level: 2 },
    { id: 'bracket-1-exhibition', label: 'Bracket 1: Exhibition', level: 2 },
    { id: 'bracket-2-core', label: 'Bracket 2: Core', level: 2 },
    { id: 'bracket-3-upgraded', label: 'Bracket 3: Upgraded', level: 2 },
    { id: 'bracket-4-optimized', label: 'Bracket 4: Optimized', level: 2 },
    { id: 'bracket-5-cedh', label: 'Bracket 5: cEDH', level: 2 },
    { id: 'what-the-game-changers-list-is', label: 'What the Game Changers list is', level: 2 },
    { id: 'how-to-use-brackets-for-a-fair-pod', label: 'How to use brackets for a fair pod', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `"What's your power level, 1 to 10?" was, for a decade, the most useless question in Commander. Everyone's answer was a 7. The scale was made up, nobody calibrated it the same way, and the result was a turn-three combo deck sitting down across from a precon that hadn't been touched since the box was opened. The whole "Rule 0" pre-game talk was supposed to fix this and mostly didn't, because nobody had shared language to talk about how strong a deck actually was.

WotC's official **Commander Bracket system**, introduced in 2025, is the attempt to fix that. Instead of a vibes-based 1-to-10, it gives you five named tiers with actual definitions attached — built around how fast a deck wins, how it wins, and which high-impact cards it runs. It's not a rulebook and it's not enforced; it's a shared vocabulary so the pre-game conversation produces a fair game instead of a stomp. This guide walks through all five brackets, the Game Changers list that anchors the upper tiers, and how to actually use the system at a table.

A note on accuracy up front: the bracket system is an evolving framework maintained by Wizards and the Commander format leadership, and the exact card lists shift over time. Where a specific detail could change, this guide describes it as defined by WotC's bracket guidelines rather than treating it as fixed forever. Always check the current official list before a tournament-adjacent game.

## Why the bracket system exists

Commander is a social format with no built-in matchmaking. You sit down with three strangers or three friends, and the single biggest factor in whether the game is fun is whether the four decks are roughly the same strength. A balanced pod is a great game; a mismatched pod is one person winning on turn four while everyone else watches.

The old tools didn't work:

- **The 1-to-10 scale** had no shared anchor. My 7 was your 4. The number carried no information.
- **"Casual vs competitive"** was too coarse — there's an enormous range between a precon and a tuned cEDH list, and "casual" covered most of it.
- **Rule 0 conversations** depended on everyone being honest and calibrated, which they rarely were, sometimes by accident.

The brackets replace the made-up number with definitions tied to observable things: how early the deck can win, whether it runs infinite combos, how much fast mana and tutoring it packs, and how many cards from the Game Changers list it includes. Two players who've never met can say "Bracket 2" and "Bracket 4" and immediately know they shouldn't sit down together — or can adjust before they do.

> The bracket isn't a grade. A Bracket 2 deck isn't "worse" than a Bracket 4 deck — it's built for a different kind of game. The point is matching, not ranking. The best pod is four decks in the same bracket, whatever that bracket is.

## The five brackets at a glance

Here's the shape of the whole system before we go tier by tier. The names are WotC's official bracket labels.

| Bracket | Name | The vibe | Game Changers |
| --- | --- | --- | --- |
| 1 | Exhibition | Ultra-casual, themed, jank, "for the bit" decks | None |
| 2 | Core | Precon-level — an unmodified or lightly tuned preconstructed deck | None |
| 3 | Upgraded | A precon meaningfully upgraded; stronger but still fair | A small number permitted |
| 4 | Optimized | High-power, no restrictions short of cEDH | No limit |
| 5 | cEDH | Competitive EDH — winning is the only goal, metagame-tuned | No limit |

The cleanest mental model: **Bracket 2 is the precon baseline.** Everything below it (Bracket 1) is intentionally weaker or weirder; everything above it gets progressively more powerful, faster, and less restricted. The Game Changers list (more on that below) is the main lever WotC uses to separate the middle brackets — how many of those high-impact cards a deck runs helps place it in 2, 3, or 4.

## Bracket 1: Exhibition

![Sol Ring, the one-mana artifact that taps for two and is legal in every Commander bracket — the kind of staple that anchors how the system frames card power.](/images/blog/magic-the-gathering/mtg-commander-brackets/sol-ring.jpg)

Bracket 1 is the ultra-casual floor. These are decks built around a theme, a joke, a single beloved card, or a deliberate constraint — not around winning. Think a deck where every creature is a Goblin, a "group hug" deck that helps everyone, or a pile built entirely from one set's draft chaff.

The defining traits, per WotC's guidelines:

- **Winning is not the priority.** The deck is built for an experience — a theme, a story, a gimmick.
- **No Game Changers** and no infinite combos as a primary plan.
- **Games are slow and grindy** by design. Nobody's racing.

You don't see Bracket 1 at most tables, and that's fine — it's an explicit "we are here to mess around" signal. If three people brought Bracket 3 decks and one brought a Bracket 1 theme pile, that's a mismatch the pre-game talk should catch.

## Bracket 2: Core

Bracket 2 is the anchor of the whole system: **the power level of a modern preconstructed deck**, unmodified or only lightly tuned. This is the most common bracket in casual play and the baseline everything else is measured against.

What a Bracket 2 deck looks like:

- **Roughly precon-strength.** A current Commander precon out of the box lands here, as do home-brews built to that ceiling.
- **No Game Changers** (or essentially none) and **no early infinite combos.**
- **A reasonable game length** — wins come together in the mid-to-late game, not on turn four.
- **Some fast mana like Sol Ring is fine** — Sol Ring is in nearly every precon and is legal at every bracket. The line isn't any single staple; it's the overall package.

If you bought a precon, swapped a few cards for ones you owned, and called it a night, you're playing Bracket 2. The vast majority of kitchen-table Commander lives here, which is exactly why it's the baseline.

## Bracket 3: Upgraded

![Jeweled Lotus, a high-impact fast-mana artifact of the kind the Game Changers list is built to flag.](/images/blog/magic-the-gathering/mtg-commander-brackets/jeweled-lotus.jpg)

Bracket 3 is where most engaged players actually live: a deck that's been **meaningfully upgraded past precon level** — better mana base, tighter curve, stronger removal, a real gameplan — but still built for fair, interactive games rather than the fastest possible kill.

Per WotC's guidelines, Bracket 3 decks:

- **Are noticeably stronger than a precon** but not fully optimized.
- **May run a limited number of Game Changers** — a small handful, not a pile. The exact cap is set by the official guidelines and is the key thing separating Bracket 3 from Bracket 4.
- **Can have [combos](/blog/magic-the-gathering/best-commander-combos-mtg), but generally not the cheapest, fastest game-ending ones**, and not as the entire deck.
- **Still expect interactive, multi-turn games.**

This is the bracket the system arguably exists to define, because "upgraded but not cutthroat" is the single biggest band of decks and the one the old 1-to-10 scale handled worst. If you've spent real money tuning a deck but you're not trying to win on turn four, you're probably Bracket 3.

## Bracket 4: Optimized

Bracket 4 is **high power with no restrictions short of full cEDH**. These decks are built to win as efficiently as the pilot can manage, with no limit on Game Changers, [fast mana](/blog/magic-the-gathering/best-mtg-fast-mana-commander), [tutors](/blog/magic-the-gathering/best-tutors-commander-mtg), or combos — but they aren't necessarily tuned against a competitive metagame the way Bracket 5 is.

The Bracket 4 profile:

- **No restrictions on the Game Changers list** — run as many as you want.
- **Fast mana, heavy tutoring, and efficient combos are all on the table.**
- **Games can end quickly** if the deck draws well.
- **The difference from cEDH is intent and tuning,** not a hard card restriction. A Bracket 4 deck is optimized; a Bracket 5 deck is optimized *and* metagamed against the best decks in the room.

If your deck has every fast-mana piece you can legally run, a tutor package, and a tight combo finish, but you built it for your local high-power table rather than a cEDH tournament, that's Bracket 4.

## Bracket 5: cEDH

![Thassa's Oracle, a premier cEDH win condition that ends games the instant a deck empties its library.](/images/blog/magic-the-gathering/mtg-commander-brackets/thassas-oracle.jpg)

Bracket 5 is **competitive EDH** — the top of the system, where winning is the only goal and decks are tuned against the current cEDH metagame. This is the tournament tier: fast combos, dense interaction, premier win conditions like Thassa's Oracle, and games that are often decided in the first few turns by whoever resolves their plan or counters everyone else's.

Bracket 5 decks:

- **Are built to win as fast and consistently as the format allows.**
- **Run the full suite of fast mana, tutors, free interaction, and the strongest win conditions** (Thassa's Oracle combos, Demonic Consultation lines, and the rest of the cEDH toolbox).
- **Are tuned against other top-tier decks,** not just built strong in a vacuum — that metagame-awareness is what separates Bracket 5 from Bracket 4.

cEDH is its own scene with its own deck lists, tournaments, and theory. If you're not deliberately playing it, you're not in Bracket 5 by accident — these decks are unmistakable at the table.

## What the Game Changers list is

The **Game Changers list** is WotC's curated list of cards considered powerful enough to meaningfully push a deck up the bracket scale. It's the main mechanical lever the bracket system uses to separate the middle tiers.

How it works:

- **It's a list of high-impact cards** — think powerful fast mana, efficient tutors, and cards that warp games (cards in the spirit of Jeweled Lotus, premier tutors, and the strongest staples).
- **Brackets 1 and 2 run none.** Bracket 3 permits a limited number. Brackets 4 and 5 have no limit.
- **The count is the signal.** Saying "I'm running two Game Changers" immediately tells the table roughly where your deck sits, without you having to defend a made-up number.
- **The list is maintained and updated by Wizards** as the format evolves — cards get added or removed, so check the current official list rather than relying on a snapshot.

The list does *not* replace the Commander ban list. Banned cards (Mana Crypt, Jeweled Lotus, and others banned in 2024-2025) are simply illegal in the format — the Game Changers list governs *legal* cards that are strong enough to define a deck's bracket. A card can be perfectly legal and still be a Game Changer that bumps you from Bracket 2 to Bracket 3.

> The smart way to read the list: it's not a "naughty cards" list, it's a calibration tool. If your deck runs five Game Changers and your opponent's runs zero, you're not in the same game, and now you both know it before a card is played.

## How to use brackets for a fair pod

The bracket system is only worth anything if you actually use it in the pre-game talk. Here's the practical version.

1. **State your bracket before decks come out.** "I've got a Bracket 3 deck" is a one-sentence Rule 0 conversation that used to take five minutes of hedging.
2. **Match the table, don't out-build it.** The goal is four decks in the same bracket. If everyone's at 2 and you brought a 4, sleeve a different deck or play to the table's level.
3. **Use Game Changer counts to settle disputes.** When two people disagree on a deck's bracket, count the Game Changers and fast mana. The number is more honest than the vibe.
4. **Bracket up or down for the night.** Many players keep multiple decks across brackets specifically so they can match whatever pod forms. That's the system working.
5. **Don't weaponize it.** The brackets are for matching, not for policing or sandbagging. Calling your tuned deck a "Bracket 2" to ambush a casual table is exactly the behavior the system exists to stop.

The honest takeaway: the brackets don't make Commander competitive, and they don't make casual decks weaker. They give four people a shared language to set up a game where everyone has a real chance to win, which is the entire point of a social format. For the broader rules and color-identity basics underneath all of this, our [Commander format guide](/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start) covers how the format actually works, and the [how to build a Commander deck](/blog/magic-the-gathering/how-to-build-a-commander-deck) guide walks through assembling a list at any bracket.

## Quick Action Checklist

- [ ] Learn the five brackets: 1 Exhibition, 2 Core, 3 Upgraded, 4 Optimized, 5 cEDH
- [ ] Treat Bracket 2 as the precon baseline — most casual decks live in 2 or 3
- [ ] Count your Game Changers — zero for Brackets 1-2, a small number for 3, unlimited for 4-5
- [ ] State your bracket out loud before decks come out, every game
- [ ] Aim for a pod where all four decks share a bracket
- [ ] Keep decks at more than one bracket so you can match the table
- [ ] Check the current official Game Changers list before a tournament-adjacent game — it updates
- [ ] Never sandbag your bracket to stomp a casual pod`,
  faq: [
    {
      question: 'What are the MTG Commander brackets?',
      answer:
        "They are WotC's official five-tier power-level system for Commander, introduced in 2025: Bracket 1 (Exhibition) for ultra-casual themed and jank decks, Bracket 2 (Core) for precon-level decks, Bracket 3 (Upgraded) for meaningfully tuned but still fair decks, Bracket 4 (Optimized) for high-power decks with no restrictions short of cEDH, and Bracket 5 (cEDH) for competitive, metagame-tuned tournament decks. The system gives players shared language to set up balanced pods instead of guessing a 1-to-10 power level.",
    },
    {
      question: 'What is the Game Changers list?',
      answer:
        "It is WotC's curated list of legal cards powerful enough to push a deck up the bracket scale — high-impact fast mana, efficient tutors, and game-warping staples. Brackets 1 and 2 run none, Bracket 3 allows a limited number, and Brackets 4 and 5 have no limit, so the count of Game Changers in a deck is a quick signal of its bracket. The list is separate from the ban list (banned cards are simply illegal) and is updated by Wizards as the format evolves, so check the current official version.",
    },
    {
      question: 'What bracket is a precon Commander deck?',
      answer:
        'Bracket 2 (Core). A modern preconstructed Commander deck, unmodified or only lightly tuned, is the anchor for the entire system — everything else is measured against it. Bracket 1 is intentionally weaker or more gimmicky than a precon, while Bracket 3 and up are progressively upgraded. If you bought a precon and swapped a few cards, you are playing Bracket 2.',
    },
    {
      question: "What's the difference between Bracket 4 and Bracket 5?",
      answer:
        'Both are high-power with no card restrictions, so the difference is intent and tuning rather than a hard rule. A Bracket 4 (Optimized) deck is built to win as efficiently as possible but for a local high-power table. A Bracket 5 (cEDH) deck is optimized and specifically tuned against the current competitive metagame — premier win conditions like Thassa\'s Oracle, dense free interaction, and lines built to beat the best decks in the room. Bracket 5 is the tournament tier; Bracket 4 is everything just below it.',
    },
    {
      question: 'Are the Commander brackets enforced rules?',
      answer:
        'No. The bracket system is a shared vocabulary for the Rule 0 pre-game conversation, not an enforced rulebook. It does not change which cards are legal — that is still the Commander ban list. Brackets exist so players can describe their decks honestly and build balanced pods. The system works best when everyone states their bracket up front and matches the table instead of out-building it.',
    },
    {
      question: 'How do I figure out which bracket my deck is in?',
      answer:
        'Look at three things, per WotC\'s guidelines: how early and how consistently the deck can win, whether it runs infinite combos as a primary plan, and how many cards from the Game Changers list it includes. Zero Game Changers and a slow, fair gameplan points to Bracket 1 or 2; a tuned deck with a small number of Game Changers is Bracket 3; an unrestricted high-power list is Bracket 4; and a metagame-tuned competitive deck is Bracket 5. When in doubt, count your Game Changers and fast mana.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start', anchor: 'Commander format guide for beginners' },
    { href: '/blog/magic-the-gathering/how-to-build-a-commander-deck', anchor: 'How to build a Commander deck' },
    { href: '/blog/magic-the-gathering/best-budget-commander-decks-under-100', anchor: 'Best budget Commander decks under $100' },
    { href: '/blog/magic-the-gathering/best-commanders-for-beginners-mtg', anchor: 'Best commanders for beginners' },
  ],
  externalSources: [
    {
      url: 'https://magic.wizards.com/en/news/announcements',
      title: 'Wizards of the Coast — official Magic news and Commander announcements',
    },
    {
      url: 'https://mtgcommander.net/',
      title: 'Commander format — official rules and philosophy',
    },
    {
      url: 'https://www.mtggoldfish.com/format/commander',
      title: 'MTGGoldfish — Commander format metagame data',
    },
  ],
  tldr:
    "MTG Commander brackets are WotC's official five-tier power-level system (launched 2025): Bracket 1 Exhibition (ultra-casual jank), Bracket 2 Core (precon level), Bracket 3 Upgraded (tuned but fair), Bracket 4 Optimized (high-power, no limits short of cEDH), and Bracket 5 cEDH (competitive, metagame-tuned). The Game Changers list — a curated set of high-impact legal cards — is the main lever: none in Brackets 1-2, a limited number in Bracket 3, unlimited in 4-5. State your bracket before decks come out and aim for a pod where all four decks share one.",
  itemList: {
    name: 'The Five MTG Commander Brackets',
    items: [
      { name: 'Bracket 1 — Exhibition', description: 'Ultra-casual themed, jank, or gimmick decks. Winning is not the goal. No Game Changers.' },
      { name: 'Bracket 2 — Core', description: 'Precon-level power. The baseline the whole system is measured against. No Game Changers.' },
      { name: 'Bracket 3 — Upgraded', description: 'A meaningfully tuned deck that is still fair and interactive. A limited number of Game Changers allowed.' },
      { name: 'Bracket 4 — Optimized', description: 'High-power with no restrictions short of full cEDH. Unlimited Game Changers, fast mana, and combos.' },
      { name: 'Bracket 5 — cEDH', description: 'Competitive EDH tuned against the metagame. Premier win conditions and the fastest, most consistent kills.' },
    ],
  },
};
