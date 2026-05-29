import type { BlogPost } from '../../blogTypes';

export const mtgMulliganGuideLondonMulligan: BlogPost = {
  slug: 'mtg-mulligan-guide-london-mulligan',
  game: 'magic-the-gathering',
  category: 'beginner-guides',
  topicCluster: 'fundamentals',
  title: 'MTG Mulligan Guide (2026) — How the London Mulligan Works and When to Take It',
  metaDescription:
    'A complete MTG mulligan guide for 2026. How the London mulligan works, when to keep or ship a hand, and the land-count rules of thumb that win games before you draw a card.',
  excerpt:
    "More games are lost to bad keeps than to bad draws. The mulligan is the most important decision you make all game, and most players punt it. Here's how to stop.",
  featuredImagePrompt:
    'A Magic: The Gathering player at a wooden table studying an opening hand of seven cards fanned out, a library deck and lands beside them, focused expression, warm game-store lighting, painterly illustration style',
  heroImage: '/images/blog/magic-the-gathering/mtg-mulligan-guide-london-mulligan/brainstorm.jpg',
  heroImageAlt: 'Brainstorm, the iconic blue cantrip that draws three and rearranges the top of your library, a card-selection staple.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-mulligan-guide-london-mulligan/brainstorm.jpg',
      sourceUrl: 'https://scryfall.com/card/dsc/113/brainstorm',
      license: 'WotC Fan Content Policy / Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-mulligan-guide-london-mulligan/ponder.jpg',
      sourceUrl: 'https://scryfall.com/card/tdc/159/ponder',
      license: 'WotC Fan Content Policy / Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-mulligan-guide-london-mulligan/thoughtseize.jpg',
      sourceUrl: 'https://scryfall.com/card/2xm/109/thoughtseize',
      license: 'WotC Fan Content Policy / Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-mulligan-guide-london-mulligan/llanowar-elves.jpg',
      sourceUrl: 'https://scryfall.com/card/fdn/227/llanowar-elves',
      license: 'WotC Fan Content Policy / Scryfall',
    },
  ],
  publishDate: '2026-05-29T00:00:00.000Z',
  lastUpdated: '2026-05-29T00:00:00.000Z',
  primaryKeyword: 'mtg mulligan guide',
  secondaryKeywords: [
    'london mulligan explained',
    'when to mulligan mtg',
    'how does the london mulligan work',
    'mtg mulligan rules',
    'when to keep a hand mtg',
    'mtg keep or mulligan',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'evergreen',
  evergreen: true,
  readingTimeMin: 10,
  toc: [
    { id: 'how-the-london-mulligan-works', label: 'How the London mulligan works', level: 2 },
    { id: 'the-only-question-that-matters', label: 'The only question that matters', level: 2 },
    { id: 'the-land-count-rule', label: 'The land-count rule', level: 2 },
    { id: 'hands-you-keep', label: 'Hands you keep', level: 2 },
    { id: 'hands-you-ship', label: 'Hands you ship', level: 2 },
    { id: 'mulligans-in-commander', label: 'Mulligans in Commander', level: 2 },
    { id: 'which-cards-to-bottom', label: 'Which cards to bottom', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `More games are lost to bad keeps than to bad draws. You can't control what you topdeck, but you have total control over which seven cards you start with — and most players punt that decision out of impatience or hope. They keep a two-land hand with no plays because shipping it "feels bad," then lose to their own greed.

The mulligan is the single highest-leverage decision in Magic, and the math is settled. Modern Magic uses the London mulligan, a system that makes mulliganing far less punishing than the old rules and changes the keep/ship calculus completely. If you learned to mulligan before 2019, throw out your instincts.

This guide covers exactly how the London mulligan works, the one question that decides every keep, the land-count rules of thumb, and the format-specific tweaks for Commander. No theory for theory's sake — just the decision framework that wins games before you draw a card.

## How the London mulligan works

The London mulligan, adopted by Wizards in 2019, is the current standard across all formats. Here's the full procedure:

1. Draw seven cards. Decide to keep or mulligan.
2. If you mulligan, **shuffle your hand back, draw a fresh seven.** Decide again.
3. Repeat as many times as you want. Each time you mulligan, you draw a full seven.
4. When you finally keep, **put a number of cards from your hand on the bottom of your library equal to the number of times you mulliganed.** Keep after one mulligan, bottom one card. Keep after two, bottom two.

The key insight: you always look at seven fresh cards, every single time. The old "Vancouver" and "Paris" mulligans gave you one fewer card on every mulligan, so going to five was brutal. Under London, a mulligan to six means you see seven cards and choose the best six. You get to *select*, not just draw less.

> The London mulligan rewards aggression. Because you see a full seven every time and only pay the cost when you keep, mulliganing a bad hand to six is much cheaper than it used to be. Ship marginal hands more often than your gut tells you to.

This matters most for combo and aggressive decks that need specific cards. They can dig hard for their key piece, see seven cards twice, and only lose one card off a six-card keep. The system is built to let consistent decks find their gameplan.

## The only question that matters

Forget complicated keep/ship heuristics. The entire decision collapses to one question:

**Can this hand cast its spells on time?**

That's it. A hand needs to do two things: make its land drops to reach the mana you need, and have spells worth casting with that mana. A hand with seven lands can't win. A hand with seven spells and no lands can't cast anything. The keepable hands live in the middle, and the question is whether the lands and spells line up on the curve.

Three sub-questions feed into it:

- **Do I have enough lands to function?** (The land-count rule, below.)
- **Do those lands cast the spells in my hand?** A hand with two Mountains and three blue spells is a mulligan, not a keep.
- **Does the hand do something in the first three to four turns?** A hand of all six-drops with two lands does nothing until turn six. You'll be dead.

If you can answer yes to all three, keep. If you're talking yourself into a "maybe," it's almost always a ship under the London rules.

## The land-count rule

![Llanowar Elves, the one-mana green creature that taps for mana and functions as an extra land in your opening hand.](/images/blog/magic-the-gathering/mtg-mulligan-guide-london-mulligan/llanowar-elves.jpg)

For a normal 60-card deck running ~17 lands, the rough math:

| Lands in opening 7 | Verdict |
| --- | --- |
| 0-1 lands | Mulligan, almost always. One-landers need a perfect curve to function |
| 2 lands | Keep IF you have early plays and a way to find a third land |
| 3-4 lands | The ideal range. Keep nearly every time |
| 5 lands | Keep if the spells are good; you'll flood slightly |
| 6-7 lands | Mulligan. You can't win on lands alone |

Two-land hands are the entire skill of mulliganing. A two-land hand is keepable when your spells cost one and two mana and you have a cantrip or a turn-three play that lets you keep developing. A two-land hand is a ship when your spells cost three-plus and you have no way to find land four. The difference is whether the hand functions if you never draw another land for two turns.

Mana dorks count as half a land. Llanowar Elves, Birds of Paradise, and Sylvan Caryatid all turn a marginal land count into a keepable one, because they ramp you to your spells and fix colors. A "two-land" hand with a turn-one Llanowar Elves is really a two-and-a-half-land hand — keep it.

The same logic runs in reverse for cheap card selection. A hand with two lands and a Ponder, Serum Visions, or Brainstorm is far more keepable than one without, because the cantrip digs you toward your third land. Card selection turns shaky keeps into solid ones.

## Hands you keep

![Ponder, the one-mana blue cantrip that lets you reorder the top three of your library and draw, smoothing out shaky keeps.](/images/blog/magic-the-gathering/mtg-mulligan-guide-london-mulligan/ponder.jpg)

The textbook keeps share a pattern: lands that match the spells, a curve that does something early, and ideally a way to keep finding gas.

- **Three lands, a two-drop, a three-drop, and two more spells.** The dream. Curve out, apply pressure, keep your options open.
- **Two lands, a one-mana cantrip (Ponder/Serum Visions), and cheap spells.** The cantrip finds land three. Keep.
- **Two lands, a mana dork, and a curve.** The dork is your third mana. Keep.
- **Four lands, two spells, and a card-draw engine.** Slightly land-heavy but the draw engine cashes the flood into action. Keep.

The unifying thread: every one of these hands *does something on time*. It isn't about raw card quality — a hand of four mediocre-but-castable cards beats a hand of three bombs you can't cast until turn seven.

## Hands you ship

These are the seductive mulligans — hands that look fine until you ask whether they actually function.

- **The greedy two-lander.** Two lands, all four-and-five drops. It does nothing until turn four and dies if you miss a land drop. Ship it.
- **The color-screwed keep.** Plenty of lands, but they're the wrong colors for your spells. Two Forests and a hand of blue cards is a mulligan even though you have "enough lands."
- **The all-gas-no-land hand.** Six spells, one land. You need to draw two lands in a row to function. The math says ship.
- **The flooded keep.** Six lands, one spell. You'll draw nothing but lands and lose to anyone doing something. Ship.
- **The "I'll draw into it" hope keep.** Any hand where your plan starts with "if I draw the right card next turn." Hope is not a keep. Ship.

> The most expensive mistake in Magic is keeping a hand you know is bad because the mulligan "feels worse." Under the London rules, a fresh seven is a real second chance. A bad keep is a loss you chose.

## Mulligans in Commander

![Thoughtseize, the one-mana black spell that strips a card from an opponent's hand, the kind of proactive play a keepable hand wants.](/images/blog/magic-the-gathering/mtg-mulligan-guide-london-mulligan/thoughtseize.jpg)

Commander changes the math in three ways.

First, the **free first mulligan.** In multiplayer Commander, your first mulligan is free — you draw a fresh seven and don't bottom a card for it. This is part of the official Commander rules, not just a house rule (the one exception is 1v1 Duel Commander, where the first mulligan is not free). It means you should aggressively ship any non-functional opening hand, because the first ship costs you nothing.

Second, **the land count shifts up.** Commander decks run 36-38 lands, far more than a 60-card deck's proportion, and games go long. A four-land hand is comfortable; even five lands with a ramp piece is fine. You're playing a 100-card singleton deck, so you need lands to reliably hit your curve into the midgame. For the full manabase breakdown, see our [best Commander lands](/blog/magic-the-gathering/best-lands-commander-mtg) guide.

Third, **you can keep slower hands.** A 40-life multiplayer game gives you time. A Commander hand that does nothing until turn four isn't the death sentence it is in 60-card formats — the table is slower and you have life to spare. Keep hands with a ramp piece and a plan even if the early turns are quiet.

The constant across formats: a keepable hand makes its land drops and has something worth doing. Commander just widens the acceptable land count and forgives a slower start. New to the format? Our [Commander format guide](/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start) walks through the rules from scratch.

## Which cards to bottom

When you keep after a mulligan, you bottom cards equal to the number of times you mulliganed. Bottoming well is its own skill.

- **Bottom your most expensive card first.** You've already lost a card; you want the cheapest functional hand possible. The six-drop goes back before the two-drop.
- **Keep your lands unless you're flush.** A six-card keep with one land needs that land. Don't bottom your only land to keep a spell.
- **Bottom redundant copies.** Two removal spells in a six-card hand? Bottom one. You'll draw into more.
- **Keep card selection.** A Ponder or Brainstorm in a six-card hand is worth keeping because it refinds whatever you bottomed.

The goal of bottoming is to leave yourself the most functional smaller hand, not the highest total card quality. A clean curve of cheap cards beats a clump of expensive bombs every time you're down a card.

## Quick Action Checklist

Run this every time you look at an opening hand.

- [ ] Count your lands. 3-4 is ideal; 2 is conditional; 0-1 or 6-7 is almost always a ship
- [ ] Confirm those lands cast the spells in your hand — wrong colors is still a mulligan
- [ ] Ask: does this hand do something in the first 3-4 turns? If not, ship
- [ ] Count mana dorks and cantrips as half-lands — they upgrade shaky keeps
- [ ] If you're talking yourself into a "maybe," it's a ship under the London rules
- [ ] In Commander, use the free first mulligan (verify with your pod) and accept higher land counts
- [ ] When bottoming, ship your most expensive cards first and keep your lands and card selection
- [ ] Never make a "hope keep" that needs a perfect next draw to function`,
  faq: [
    {
      question: 'How does the London mulligan work in MTG?',
      answer:
        'You draw seven cards and decide to keep or mulligan. Each time you mulligan, you shuffle your hand back and draw a fresh seven — you always see a full seven cards. When you finally keep, you put a number of cards on the bottom of your library equal to the number of times you mulliganed. Keep after one mulligan, bottom one card; keep after two, bottom two. You see a full seven every time and only pay the cost when you keep.',
    },
    {
      question: 'When should I mulligan a hand in Magic?',
      answer:
        "Mulligan whenever your hand can't cast its spells on time. That means: zero or one land, six or seven lands, lands of the wrong colors for your spells, or a hand that does nothing in the first three to four turns. The London mulligan makes shipping cheap — you see a fresh seven each time and only pay one card off your final keep. If you're unsure, ship.",
    },
    {
      question: 'Is it okay to keep a two-land hand?',
      answer:
        'Yes, conditionally. A two-land hand is a keep when your spells cost one and two mana and you have a cantrip or mana dork to find your third land. It is a ship when your spells cost three-plus and you have no way to develop or find more lands. The test is whether the hand still functions if you draw no lands for two turns. Mana dorks like Llanowar Elves and cantrips like Ponder turn shaky two-landers into keeps.',
    },
    {
      question: 'How many lands should be in an opening hand?',
      answer:
        'For a 60-card deck with about 17 lands, three or four lands in your opening seven is ideal and a near-automatic keep. Two lands is conditional on having early plays and a way to find more. Five lands is keepable if the spells are good. Zero, one, six, or seven lands is almost always a mulligan. Commander decks run more lands, so a four or five-land hand is comfortable there.',
    },
    {
      question: 'What is the free mulligan in Commander?',
      answer:
        "In multiplayer Commander, your first mulligan is free — you draw a fresh seven and don't bottom a card for it. This is part of the official Commander rules, not a house rule; the exception is 1v1 Duel Commander, where the first mulligan is not free. Either way you should aggressively ship any non-functional opening hand, because the first mulligan costs you nothing (or very little).",
    },
    {
      question: 'Which cards should I put on the bottom after a mulligan?',
      answer:
        'Bottom your most expensive cards first — you want the cheapest functional hand possible since you are already down a card. Keep your lands unless you have plenty, keep card selection like Ponder or Brainstorm since it refinds what you bottomed, and bottom redundant copies of effects. The goal is the most functional smaller hand, not the highest total card quality. A clean cheap curve beats a clump of uncastable bombs.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start', anchor: 'Commander format guide for beginners' },
    { href: '/blog/magic-the-gathering/best-lands-commander-mtg', anchor: 'Best Commander lands' },
    { href: '/blog/magic-the-gathering/how-to-build-a-commander-deck', anchor: 'How to build a Commander deck' },
    { href: '/blog/magic-the-gathering/mtg-deck-archetypes-explained', anchor: 'MTG deck archetypes explained' },
    { href: '/blog/magic-the-gathering/best-blue-cards-magic-the-gathering', anchor: 'Best blue cards in MTG' },
  ],
  externalSources: [
    {
      url: 'https://magic.wizards.com/en/news/feature/mulligan-rule-london-test',
      title: 'Wizards of the Coast — the London mulligan announcement',
    },
    {
      url: 'https://media.wizards.com/2024/downloads/MagicCompRules.pdf',
      title: 'Wizards of the Coast — Magic Comprehensive Rules (mulligan procedure)',
    },
    {
      url: 'https://scryfall.com/',
      title: 'Scryfall — MTG card database and rules text',
    },
    {
      url: 'https://articles.starcitygames.com/',
      title: 'Star City Games — strategy articles archive',
    },
  ],
  tldr:
    'The London mulligan lets you see a fresh seven cards each time you mulligan and only bottom cards equal to your mulligan count when you keep. The keep decision reduces to one question: can this hand cast its spells on time? Keep 3-4 land hands, ship 0-1 and 6-7 land hands, and treat two-landers as conditional. Mana dorks and cantrips count as half-lands; in Commander, use the free first mulligan and accept higher land counts.',
  itemList: {
    name: 'MTG Mulligan Decision Rules',
    items: [
      { name: 'Count your lands first', description: '3-4 lands is the ideal keep; 0-1 or 6-7 is almost always a ship.' },
      { name: 'Check color alignment', description: 'Lands must cast the spells in hand — wrong colors is still a mulligan.' },
      { name: 'Demand early action', description: 'The hand must do something in the first 3-4 turns or it ships.' },
      { name: 'Count dorks and cantrips as half-lands', description: 'Llanowar Elves and Ponder upgrade shaky two-land keeps.' },
      { name: 'Ship the maybes', description: 'Under the London rules a fresh seven is cheap — if unsure, mulligan.' },
      { name: 'Bottom expensive cards first', description: 'Keep the cheapest functional hand; protect your lands and card selection.' },
      { name: 'Use the Commander free mulligan', description: 'Most pods give a free first mulligan and forgive higher land counts.' },
    ],
  },
};
