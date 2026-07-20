import type { BlogPost } from '../../blogTypes';

export const mtgLimitedDraftGuideBeginners: BlogPost = {
  slug: 'mtg-limited-draft-guide-beginners',
  game: 'magic-the-gathering',
  category: 'format-guides',
  topicCluster: 'limited-draft',
  title: 'How to Draft: An MTG Limited Guide for Beginners',
  metaDescription:
    'Learn how to draft Magic: The Gathering Limited. Reading signals, BREAD, the 17-land 23-spell rule, staying two colors, and the beginner mistakes to avoid.',
  excerpt:
    "Your first draft goes badly because you pick the coolest card instead of the best card, and you stay open into three colors when you should have committed by pick five. Here is the fundamentals course that fixes both.",
  featuredImagePrompt:
    'A Magic: The Gathering draft table from above, three booster packs being passed between four players, cards fanned out, warm tournament-hall lighting, painterly fantasy art style, no text',
  heroImage: '/images/blog/magic-the-gathering/mtg-limited-draft-guide-beginners/pacifism.jpg',
  heroImageAlt:
    'Pacifism, a common white aura that shuts down an attacker — the kind of cheap, repeatable removal that wins Limited games.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-limited-draft-guide-beginners/pacifism.jpg',
      sourceUrl: 'https://scryfall.com/card/dmr/19/pacifism',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-limited-draft-guide-beginners/wind-drake.jpg',
      sourceUrl: 'https://scryfall.com/card/kld/70/wind-drake',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-limited-draft-guide-beginners/murder.jpg',
      sourceUrl: 'https://scryfall.com/card/dsk/110/murder',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
  ],
  publishDate: '2026-05-30T00:00:00.000Z',
  lastUpdated: '2026-05-30T00:00:00.000Z',
  primaryKeyword: 'how to draft mtg',
  secondaryKeywords: [
    'mtg limited draft guide',
    'mtg draft for beginners',
    'how to draft magic the gathering',
    'mtg draft signals',
    'bread mtg drafting',
    'how many lands in a draft deck',
  ],
  schemaType: 'HowTo',
  updateFrequency: 'evergreen',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-draft-actually-is', label: 'What draft actually is', level: 2 },
    { id: 'the-only-rule-that-matters-build-a-functional-deck', label: 'The only rule that matters: build a functional deck', level: 2 },
    { id: 'the-23-spells-17-lands-skeleton', label: 'The 23 spells, 17 lands skeleton', level: 2 },
    { id: 'pick-order-bread-and-the-bomb-removal-evasion-hierarchy', label: 'Pick order: BREAD and the bomb-removal-evasion hierarchy', level: 2 },
    { id: 'reading-signals-the-skill-that-separates-drafters', label: 'Reading signals: the skill that separates drafters', level: 2 },
    { id: 'commit-to-two-colors-fast', label: 'Commit to two colors, fast', level: 2 },
    { id: 'building-the-curve', label: 'Building the curve', level: 2 },
    { id: 'the-biggest-beginner-mistakes', label: 'The biggest beginner mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Your first draft goes badly for two reasons, and they are the same two reasons everybody's first draft goes badly. You pick the coolest-looking card instead of the card that wins games, and you stay "open" across three or four colors so long that you end up with a pile of cards that can't cast each other. By the time you realize your deck is a mess, you've already opened your third pack and it's too late to fix.

Draft is the purest skill test in Magic. You and seven other players open packs, take one card, pass the rest, and repeat until you've each built a 40-card deck from scratch. No netdecking, no wallet flex, no internet to bail you out. Just card evaluation, deck construction, and reading what the players around you are doing. This guide is the fundamentals course — the stuff that's true in every set, whether you're drafting the newest release or a Cube. We're staying evergreen on purpose, so none of this goes stale when the next set drops.

## What draft actually is

Eight players, three booster packs each. You open a pack, take one card, pass the rest to your left. You receive the pack your neighbor opened, take one, pass it on. The first pack circles the table to your left, the second pack goes right, the third goes left again. When the dust settles you'll have roughly 45 cards, and you build a 40-card deck out of them.

The format is **Limited**, as opposed to Constructed, where you build from your whole collection. In Limited, power levels are lower and games are slower. The busted combos and one-mana removal that define Commander or Modern mostly don't exist here. That changes everything about how you evaluate cards. A vanilla 3/3 that's mediocre in Constructed is a perfectly fine playable in Limited. A card that says "draw three cards" is a bomb.

The other half of draft is **Sealed**, where you open six packs and build from just those — no passing, no signals. Sealed is its own format, but most of the deckbuilding fundamentals below carry straight over. The signal-reading section is the part that's draft-only.

## The only rule that matters: build a functional deck

Here's the thing nobody tells you up front, so I will: **a clean, focused, two-color deck full of medium cards beats a "powerful" four-color pile every single time.** Consistency wins Limited. The player who can reliably cast their spells on curve, attack, block, and grind out card advantage will beat the player who opened three bombs they can't reliably cast until turn six.

So the goal of the entire draft is not "collect the best cards." It's "end up with a 40-card deck that does something on every turn and casts its spells on time." Every pick should serve that goal. The coolest mythic in the set is a trap if it's in your third color and you'll only cast it one game in five.

Internalize that and half the beginner mistakes disappear on their own.

## The 23 spells, 17 lands skeleton

Memorize this number: **23 spells and 17 lands.** That's the default skeleton of a 40-card Limited deck, and it's correct often enough that you should treat any deviation as something you have to justify.

- **40 cards total.** Don't go over. A 40-card deck draws its bombs and removal more often than a 45-card deck. Every extra card you jam dilutes the good stuff.
- **17 lands.** This supports a normal curve topping out around five or six mana. Go up to 18 lands if your curve is heavy (lots of five- and six-drops) or you have ways to use flooding mana. Drop to 16 only if you're an aggressive, low-curve deck with a couple of cheap card-filtering effects.
- **23 nonland cards.** These are your creatures and spells. In most decks that's roughly 15–17 creatures and 6–8 noncreature spells (removal, combat tricks, card draw). You win Limited primarily through combat, so creatures are the backbone.

That 23/17 split is the single most useful thing a new drafter can memorize. When you're deckbuilding after the draft and staring at a pile of 30 playable cards, you already know you're cutting down to 23 — so the question becomes *which* 23, not *how many*.

## Pick order: BREAD and the bomb-removal-evasion hierarchy

When two cards are staring at you and you don't know which to take, you need a default. The classic one is **BREAD**:

- **B — Bombs.** Cards that win the game by themselves if unanswered. A big flyer that also draws cards, a [planeswalker](/blog/magic-the-gathering/best-planeswalkers-magic-the-gathering), a creature that takes over the board. If you open a bomb, you take the bomb.
- **R — Removal.** Spells that kill or neutralize the opponent's stuff. The most consistently valuable category in Limited, because removal answers their bombs *and* trades up against their best creatures.
- **E — Evasion.** Creatures that can't be easily blocked — flyers, menace, trample, anything that gets damage through a clogged board. Limited games stall on the ground constantly, and evasion is how you actually close them out.
- **A — Aggro / Army.** Solid, efficient creatures that fill out your curve and your board. The bulk of your deck.
- **D — Duds / Dregs.** Situational cards, filler, cards that need a specific build to be good.

![Murder, an unconditional kill spell — the kind of removal that answers the opponent's best creature no matter what it is.](/images/blog/magic-the-gathering/mtg-limited-draft-guide-beginners/murder.jpg)

BREAD is a starting framework, not gospel. The most important practical refinement: **[premium removal](/blog/magic-the-gathering/best-removal-spells-mtg) often beats a mediocre bomb.** A clean two-mana "destroy target creature" answers their bomb, kills their best blocker, and trades up all game. A flashy seven-mana creature does nothing the turn you cast it and dies to that same removal spell. When in doubt, the cheap unconditional removal is almost never a wrong pick.

Evasion deserves more respect than beginners give it. Ground stalls are the default state of a Limited game — both players build a wall of creatures nobody wants to attack into. A 2/2 flyer that chips in two damage a turn ends those games. That's why a card as plain as a Wind Drake is a real playable in basically every blue deck.

![Wind Drake, a 2/3 flyer for three mana — unexciting on paper, but evasion that closes out stalled Limited games.](/images/blog/magic-the-gathering/mtg-limited-draft-guide-beginners/wind-drake.jpg)

## Reading signals: the skill that separates drafters

This is the part that turns a card-picker into a drafter. When a pack comes to you, it has already passed through the hands of the players upstream. **What's missing from that pack tells you what they're taking. What's still in it tells you what they're not.**

The core read: if a strong card in a color comes to you late — say, a good removal spell you'd expect to be gone by the fifth pick — that color is probably **open**. The players to your right aren't drafting it, which means more good cards in that color will keep flowing to you. Move in.

The flip side: if you never see a single good red card after the first few picks, red is being cut by someone upstream. Don't fight them for it. There are only so many playables of each color in a draft, and if two of you fight over red, you both end up with weak decks while the green drafter cruises.

A few practical signal rules:

- **Pack 1, picks 1–4 are about taking the best cards** and forming a loose lean. Don't commit hard yet.
- **Picks 5 onward, you're reading the room.** A premium card wheeling (coming back around the table) is a screaming signal that its color is wide open.
- **You're also sending signals.** When you take a blue card and pass the rest, the player to your left learns blue is being cut. Drafting is a conversation nobody speaks out loud.
- **Pack 2 reverses direction**, so the signals you read in pack 1 from your right now come from your left. Pay attention to who's feeding you.

The single biggest level-up for a new drafter is learning to abandon your pack-1 plan when the signals say a different color is wide open. The player who reads "nobody to my right is in black" and pivots into it ends up with the best deck at the table.

## Commit to two colors, fast

Two colors. That's the answer for almost every Limited deck you will ever draft. [Two colors](/blog/magic-the-gathering/mtg-color-pairs-guide) gives you access to the best cards in two thirds of the card pool while keeping your mana base clean enough that you actually cast your spells on time.

The trap is "staying open" too long. New drafters love the idea of keeping options across three colors deep into pack one. The problem is you end up with the eighth-best card in three colors instead of the third-best card in two. **By around pick five or six of pack one, you should know your two colors** — and from there you take cards in those colors unless something genuinely splashable and game-winning shows up.

Three colors is a thing experienced drafters do when the signals and fixing support it, usually as a two-color base with a light splash for one or two bomb cards. As a beginner, force yourself into a clean two-color deck for your first dozen drafts. Discipline here is worth more than flexibility. The [mana base](/blog/magic-the-gathering/mtg-mana-base-guide) of a strict two-color deck — 17 lands split roughly to match your spells — just works, and "my deck does things on time" beats "my deck has more powerful cards it can't cast."

## Building the curve

After the draft, you're holding a pile and cutting to 23 spells. The thing that separates a deck that wins from a deck that stumbles is the **mana curve** — how your spells are distributed across mana costs.

A healthy Limited curve looks roughly like this:

| Mana cost | How many cards | Why |
| --- | --- | --- |
| 1–2 | 6–8 | Early plays so you're not durdling turns one and two |
| 3 | 5–6 | The backbone of the curve, your bread-and-butter creatures |
| 4 | 4–5 | Your midgame threats |
| 5 | 3–4 | Your top-end, the creatures that take over |
| 6+ | 1–3 | A small number of finishers; too many clogs your draws |

The most common deckbuilding mistake is too many expensive cards. Six bombs in your deck feels great until you draw three of them in your opening hand and can't cast any until turn five while your opponent kills you on the ground. **A deck that does something on turns two, three, and four wins more than a deck stuffed with haymakers.** Prioritize having cheap plays. Cut your weakest expensive cards before you cut your cheap ones.

Removal and tricks don't sit cleanly on the creature curve, but count them in. A six- or seven-piece interaction package (removal plus a combat trick or two) is the right amount for most decks — enough to answer threats without leaving you with a hand full of reactive cards and no board.

## The biggest beginner mistakes

These are the errors that cost new drafters the most games. Catch yourself doing any of them and stop.

- **Drafting for "cool" instead of "good."** The flashy mythic in your off-color is worse than the boring removal spell in your colors. Take the card that wins games.
- **Staying three-plus colors too long.** Commit to two by pick five or six. A consistent two-color deck beats an inconsistent rainbow pile.
- **Ignoring removal.** Removal is the most reliably useful category in Limited. If you pass good removal early, you'll regret it when their bomb hits the table and you have no answer.
- **Too few creatures.** You win Limited through combat. Fewer than ~15 creatures and your deck has no board presence and nothing to do with its removal-light draws.
- **Too many expensive cards.** A top-heavy curve loses to a deck that's already attacked you for ten by the time you stabilize. Respect the two- and three-drops.
- **Fighting an obviously cut color.** If you haven't seen a playable in a color for five picks, someone upstream is in it. Move to where the cards are flowing.
- **Running 18+ "fun" lands or too few.** Default to 17. Don't shave to 16 unless you're genuinely low to the ground, and don't pad to 18 without a heavy top end.
- **Forgetting your sideboard exists.** In a best-of-three match you can swap cards between games. Bring in extra removal, evasion, or artifact-hate against the deck you just played.

## Quick Action Checklist

Run this every time you sit down to draft:

- [ ] Take the best card early; form a loose color lean by picks 3–4
- [ ] Use BREAD as your tiebreaker — Bombs, Removal, Evasion, Army, then Dregs
- [ ] Prioritize cheap unconditional removal over mediocre expensive bombs
- [ ] Read signals from pick 5 on — late premium cards mean that color is open
- [ ] Commit to exactly two colors by pick 5–6 and stay disciplined
- [ ] Build 23 spells and 17 lands; don't go over 40 cards
- [ ] Aim for ~15–17 creatures with a curve that peaks at three mana
- [ ] Keep your top end (6+ mana) to a small handful of cards
- [ ] Don't fight a color that's clearly being cut to your right
- [ ] In best-of-three, actually use your sideboard between games`,
  faq: [
    {
      question: 'How many lands should I run in an MTG draft deck?',
      answer:
        'Seventeen lands in a 40-card Limited deck is the default and it is correct for most decks. Move up to 18 if your curve is heavy with five- and six-mana cards, and drop to 16 only if you are an aggressive low-curve deck with some card filtering. The standard skeleton is 23 spells and 17 lands.',
    },
    {
      question: 'What does BREAD mean in MTG drafting?',
      answer:
        'BREAD is a pick-order priority: Bombs, Removal, Evasion, Army (efficient creatures), and Dregs (filler). It tells you what to value when two cards are close. In practice, premium cheap removal often beats a mediocre bomb, and evasive creatures are underrated by beginners because Limited games stall on the ground.',
    },
    {
      question: 'How many colors should I draft in MTG Limited?',
      answer:
        'Two colors for almost every deck. Two colors gives you access to the best cards in two thirds of the pool while keeping your mana base clean enough to cast your spells on time. Commit by around pick five or six of pack one. Experienced drafters sometimes splash a third color for a bomb or two, but a strict two-color deck is the right call until you have a lot of reps in.',
    },
    {
      question: 'How do you read signals in MTG draft?',
      answer:
        "Signals come from what is missing from the packs you receive and what keeps coming back. If a strong card in a color reaches you later than it should, the players to your right are not drafting that color, so it is open — move in. If you never see good cards in a color, someone upstream is cutting it, so don't fight them. Reading signals matters most from about pick five onward.",
    },
    {
      question: 'How many creatures should a draft deck have?',
      answer:
        'Roughly 15 to 17 creatures in a 23-spell deck, with the rest being removal, combat tricks, and card draw. You win Limited primarily through combat, so creatures are the backbone. Going much below 15 creatures usually leaves your deck without enough board presence to apply pressure or block effectively.',
    },
    {
      question: 'Is draft or sealed better for a beginner?',
      answer:
        'Sealed is more forgiving because you only build from your own six packs with no passing or signals, so the deckbuilding is simpler. Draft is the deeper skill test and teaches you card evaluation faster because every pick is a decision. Both share the same deckbuilding fundamentals — the 23/17 skeleton, the curve, two colors — so learning one helps the other.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/best-removal-spells-mtg', anchor: 'best removal spells guide' },
    { href: '/blog/magic-the-gathering/mtg-deck-archetypes-explained', anchor: 'MTG deck archetypes explained' },
    { href: '/blog/magic-the-gathering/mtg-mulligan-guide-london-mulligan', anchor: 'MTG mulligan guide' },
    { href: '/blog/magic-the-gathering/best-counterspells-mtg', anchor: 'best counterspells in MTG' },
  ],
  externalSources: [
    { url: 'https://scryfall.com/', title: 'Scryfall — card database and rules text' },
    { url: 'https://magic.wizards.com/en/formats/limited', title: 'Wizards of the Coast — official Limited format page' },
    { url: 'https://www.17lands.com/', title: '17Lands — Limited draft data and win rates' },
  ],
  tldr:
    'To draft MTG Limited well, build a clean two-color 40-card deck of 23 spells and 17 lands. Use BREAD (Bombs, Removal, Evasion, Army, Dregs) as your pick order, but take cheap removal over mediocre bombs. Read signals from pick five on — late premium cards mean a color is open. Commit to two colors by pick five or six, keep ~15–17 creatures, and build a curve that peaks at three mana.',
  itemList: {
    name: 'Biggest MTG Draft Mistakes Beginners Make',
    items: [
      { name: 'Drafting for cool instead of good', description: 'Taking the flashy off-color mythic over the boring in-color removal that actually wins games.' },
      { name: 'Staying three-plus colors too long', description: 'Commit to two colors by pick five or six; a consistent deck beats a powerful but inconsistent one.' },
      { name: 'Ignoring removal', description: 'Removal is the most reliably useful category in Limited. Passing it early loses games to bombs you can’t answer.' },
      { name: 'Running too few creatures', description: 'You win Limited through combat. Below ~15 creatures your deck has no board presence.' },
      { name: 'A top-heavy curve', description: 'Too many expensive cards lose to decks that already attacked you while you durdled. Respect the two- and three-drops.' },
      { name: 'Fighting a cut color', description: 'If a color has dried up for five picks, someone upstream is in it. Move to where cards are flowing.' },
    ],
  },
};
