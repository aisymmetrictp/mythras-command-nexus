import type { BlogPost } from '../../blogTypes';

export const mtgSideboardingGuide: BlogPost = {
  slug: 'mtg-sideboarding-guide',
  game: 'magic-the-gathering',
  category: 'advanced-strategy',
  topicCluster: 'fundamentals',
  title: 'MTG Sideboarding Guide: How to Win Games 2 and 3',
  metaDescription:
    'A complete MTG sideboarding guide. How sideboards work, building a 15, what to bring in and cut, common SB cards by archetype, and play/draw and mulligan tips.',
  excerpt:
    'Most players build a 75-card deck and only ever think about 60 of them. The 15-card sideboard is where matches are actually won — here is how to build one and how to side correctly in games 2 and 3.',
  featuredImagePrompt:
    'A Magic: The Gathering player between games at a tournament table, sliding cards from a 15-card sideboard into their deck, sleeved cards fanned out, focused expression, warm game-store lighting, painterly illustration style',
  heroImage: '/images/blog/magic-the-gathering/mtg-sideboarding-guide/leyline-of-the-void.jpg',
  heroImageAlt:
    'Leyline of the Void, a premier graveyard-hate enchantment and one of the most-played sideboard cards in eternal formats.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-sideboarding-guide/leyline-of-the-void.jpg',
      sourceUrl: 'https://scryfall.com/card/dsk/106/leyline-of-the-void',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-sideboarding-guide/rest-in-peace.jpg',
      sourceUrl: 'https://scryfall.com/card/big/4/rest-in-peace',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-sideboarding-guide/mystical-dispute.jpg',
      sourceUrl: 'https://scryfall.com/card/eld/58/mystical-dispute',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-sideboarding-guide/veil-of-summer.jpg',
      sourceUrl: 'https://scryfall.com/card/m20/198/veil-of-summer',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
  ],
  publishDate: '2026-06-07T00:00:00.000Z',
  lastUpdated: '2026-06-07T00:00:00.000Z',
  primaryKeyword: 'mtg sideboarding guide',
  secondaryKeywords: [
    'how to sideboard mtg',
    'mtg sideboard guide',
    'how to build a sideboard mtg',
    'mtg sideboarding tips',
    'what to sideboard out mtg',
    'mtg sideboard cards by archetype',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'evergreen',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'how-sideboards-actually-work', label: 'How sideboards actually work', level: 2 },
    { id: 'building-a-15-card-sideboard', label: 'Building a 15-card sideboard', level: 2 },
    { id: 'what-to-bring-in-and-what-to-cut', label: 'What to bring in and what to cut', level: 2 },
    { id: 'common-sideboard-cards-by-archetype', label: 'Common sideboard cards by archetype', level: 2 },
    { id: 'writing-a-sideboard-plan', label: 'Writing a sideboard plan', level: 2 },
    { id: 'play-draw-and-the-mulligan-interplay', label: 'Play, draw, and the mulligan interplay', level: 2 },
    { id: 'the-mistakes-that-lose-games-2-and-3', label: 'The mistakes that lose games 2 and 3', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Most players build a 75-card deck and only ever think about 60 of them. They sleeve up a maindeck, register a sideboard they barely tested, and then in game 2 they pull out whatever "feels" right against the opponent. That's how you lose a match you should have won. The sideboard is where best-of-three Magic is actually decided, and sideboarding well is a skill you can learn — most people just never bother.

Here's the thing about a competitive match: you only play game 1 blind. After that, both players know what they're up against, and the player who adjusts better usually takes the set. Your maindeck is a guess about the whole field; your sideboarded deck is a precise answer to the exact opponent in front of you. This guide covers how sideboards work, how to build a 15, the actual decision of what comes in and what goes out, the staple sideboard cards by archetype, and the play/draw and mulligan wrinkles that change how you board.

## How sideboards actually work

The rules are simple and worth getting exactly right, because people lose games to deck-construction errors that a judge will catch.

- **A sideboard is up to 15 cards**, separate from your minimum-60-card maindeck. You don't have to play all 15, but you can't go over.
- **You only board between games**, never mid-game. Game 1 is always your registered maindeck (your "main 60").
- **You can swap any number of cards**, one-for-one, between your maindeck and sideboard between games. Take out three, put in three. The deck must return to its registered 60-card minimum before the next game.
- **You must "de-sideboard" back to your maindeck** between matches (or as the rules require between rounds), so your registered decklist is the baseline you always return to.

That one-for-one constraint is the whole puzzle. You don't get to *add* cards — every card you bring in forces a card out. So sideboarding isn't "what good cards do I have against this deck," it's "which of my maindeck cards are weakest in this matchup, and is my sideboard card actually better than the thing I'm cutting?" If the answer is no, you don't board it in. Lots of players board in five hate cards and quietly gut their own game plan in the process.

## Building a 15-card sideboard

A sideboard isn't a junk drawer of cards that didn't make the maindeck. It's a set of targeted answers, and every slot should have a job. Build it against the metagame you expect, not against every theoretical deck.

Think in terms of what your maindeck is *bad* against. Your 60 is tuned to beat the field on average; your 15 patches the matchups where the average plan falls short:

- **Dedicated hate** for the matchups your maindeck genuinely loses to. If aggro runs you over, you want cheap removal and lifegain. If combo is faster than you, you want disruption or [counterspells](/blog/magic-the-gathering/best-counterspells-mtg).
- **Flex threats and answers** that improve grindy mirrors — extra card advantage, a haymaker the opponent can't easily answer, a planeswalker.
- **Catch-all answers** that hit multiple decks at once. A single card that's good against three archetypes is worth more than a card that's great against one fringe deck.

A common, healthy split for a tuned constructed sideboard is roughly: a few cards for the aggro matchups, a few for control/grind, a few for combo or graveyard decks, and a couple of flex slots for whatever's spiking your local meta. Avoid the trap of dedicating a card to a deck that's 2% of the field — those slots are nearly dead weight. Every card in your 15 should improve a matchup you'll actually play.

> The test for a sideboard card: "How many games does this realistically win me, and against how much of the field?" A four-of hate card against a deck nobody plays is worse than a flexible two-of that's solid against half the room.

## What to bring in and what to cut

This is the part people get wrong. Bringing the right cards *in* is the easy half. Knowing what to take *out* is where matches are won and lost.

![Rest in Peace, a two-mana enchantment that exiles both graveyards entirely — the cleanest graveyard hate in white.](/images/blog/magic-the-gathering/mtg-sideboarding-guide/rest-in-peace.jpg)

Start by identifying your **dead cards** in the matchup — the maindeck cards that do nothing or close to nothing against this specific opponent. Those are your cuts:

- **Removal with no targets.** Against a controlling, near-creatureless deck, your creature-removal spells are blanks. Cut them for cards that pressure or disrupt.
- **Slow, durdly value cards against aggro.** Your three-mana "draw a card" engine doesn't matter if you're dead on turn five. Cut it for cheap interaction.
- **Narrow cards that the matchup doesn't reward.** A card that only shines in long games is dead against the fast matchup, and vice versa.

Then bring in the answers that match. The key discipline: **don't over-sideboard.** It is almost always wrong to swap out 7+ cards. Your maindeck is a coherent, tested machine; gut too much of it and you create a clunky 60 with a broken curve and inconsistent draws that's worse than what you started with. Most good sideboard plans move 3 to 6 cards. If you find yourself wanting to change ten, your deck is probably wrong for the meta, not your sideboarding.

Two rules that keep you honest:

1. **Keep your curve intact.** If you cut three two-drops and add three four-drops, your deck now stumbles on early turns. Side in and out at similar mana values when you can.
2. **Don't cut your win condition.** Boarding into pure interaction with no way to close the game is how control players lose to decking or to a topdeck war they had no plan to win. Keep enough threats to actually end the game.

## Common sideboard cards by archetype

These are the workhorses you'll see in real sideboards across [Modern](/blog/magic-the-gathering/mtg-modern-format-guide), [Pioneer](/blog/magic-the-gathering/mtg-pioneer-format-guide), and Legacy. Names and exact legality shift with bans, so the categories matter more than any single card, but here are reliable, currently-legal examples by job.

![Mystical Dispute, a near-free counter against blue spells and a premier control-mirror sideboard card.](/images/blog/magic-the-gathering/mtg-sideboarding-guide/mystical-dispute.jpg)

| Job | What it does | Example cards |
| --- | --- | --- |
| Graveyard hate | Shuts down reanimator, delve, and recursion decks | Rest in Peace, Leyline of the Void, Tormod's Crypt, Surgical Extraction |
| Artifact / enchantment removal | Answers prison pieces, equipment, and value permanents | Reclamation Sage, Fragmentize, Abrade, Engineered Explosives |
| Anti-control / anti-counter | Protects your threats and punishes counterspell decks | Veil of Summer, Mystical Dispute, Negate, Disdainful Stroke |
| Anti-aggro / lifegain | Stabilizes against fast creature decks | Cheap removal, sweepers, and lifegain creatures or spells |
| Hand disruption | Strips combo pieces and key cards | Duress, Thoughtseize-style discard |
| Sweepers vs go-wide | Resets a flooded board | Color-appropriate [board wipes](/blog/magic-the-gathering/best-board-wipes-mtg) |

A few of these are MVPs worth calling out. **Rest in Peace** and **Leyline of the Void** are the gold standard for graveyard hate — Leyline can even start in your opening hand for free, locking out a reanimator deck before it does anything. **Veil of Summer** is one of the most efficient protective cards ever printed (and so good it's *banned in Pioneer* while legal in Modern and Legacy). **Mystical Dispute** is a near-free counter in the control mirror. **Abrade** is a flexible answer that kills a creature or an artifact, so it covers two jobs in one slot.

![Veil of Summer, a one-mana instant that blanks discard and blue interaction — so strong it is banned in Pioneer.](/images/blog/magic-the-gathering/mtg-sideboarding-guide/veil-of-summer.jpg)

The lesson here isn't to run all of these. It's to identify which *jobs* your sideboard needs based on your local meta, then pick the most flexible card that does each job. Two cards that each cover two matchups beat four cards that each cover one.

## Writing a sideboard plan

Top players don't improvise their sideboarding — they write it down before the event. A sideboard guide is just a short note for each expected matchup: what comes in, what goes out, and any play/draw tweak. Building one forces you to actually think through the cuts instead of fumbling them at the table with a clock running.

A simple format for each matchup:

- **Vs [Archetype]:**
- **IN:** the specific cards and counts
- **OUT:** the specific cards and counts (must match the IN count)
- **Notes:** on the play vs on the draw differences, what to play around, your win plan

Write these for the five or six decks you expect to face most. The act of writing them is half the value — it surfaces problems like "I have nothing to bring in against this deck" or "my cuts don't match my adds" before they cost you a match. Test the plans in practice games, not for the first time on camera. A plan you've never tried is a guess with extra steps.

## Play, draw, and the mulligan interplay

Sideboarding doesn't happen in a vacuum — it interacts with whether you're on the play or the draw, and with how you mulligan.

- **On the play, you're the aggressor.** Tempo matters more, you have less time to be reactive, and you generally want your proactive, cheap cards. Some plans cut a card on the play to lower the curve.
- **On the draw, you have the extra card** and usually a bit more time. You can afford a slightly more reactive configuration — an extra removal spell or counter — because you're a card up and trying to grind.
- **Your mulligan decisions shift after boarding.** Once you bring in dedicated hate (say, graveyard hate against reanimator), a hand that *has* that hate is more keepable, and a slow hand that doesn't is more shippable. Post-board games are often won by mulliganing aggressively toward your key answer. If you want the deeper framework on keeps and the London mulligan, see our [MTG mulligan guide](/blog/magic-the-gathering/mtg-mulligan-guide-london-mulligan).

The throughline: your sideboard plan should bake in a play/draw note. "On the draw, +1 removal, -1 threat" is a one-line adjustment that wins close games. And remember the choice itself — the winner of game 1 decides play or draw for game 2 (almost always choosing the play), and the game-3 choice goes to the game-2 loser. Knowing you'll likely be on the draw in game 2 if you won game 1 lets you plan your boarding around it.

## The mistakes that lose games 2 and 3

The same handful of errors cost players matches over and over:

- **Over-sideboarding.** Swapping 8+ cards and turning a tuned deck into a pile. Move 3 to 6 cards in most matchups.
- **Boarding to a fantasy opponent.** Bringing in hate based on what you *assume* they're playing instead of what you saw in game 1. Side to the deck in front of you, not the archetype's stereotype.
- **Cutting the win condition.** Loading up on answers until you can't actually close the game. Keep enough threats to win before you deck out.
- **Wrecking your own curve.** Cutting all your cheap plays for expensive hate and then stumbling on the early turns. Match mana values when you cut and add.
- **Forgetting to de-sideboard.** Starting the next match (or game 1 of the next round) with last round's sideboarded deck. Always reset to your registered 60.
- **Never testing the plan.** Sideboarding a card combination for the first time live. Test post-board configurations in practice — the post-board games are the majority of games you'll play in a best-of-three.

Sideboarding is the highest-leverage skill most players never practice. Game 1 you play blind; games 2 and 3 you get to be precise — and over a tournament, you play far more post-board games than game 1s. Treat the 15 like part of your deck, write your plans, test them, and you'll start winning the matches you used to split.

## Quick Action Checklist

Tightening your sideboard game? Run through this:

- [ ] Build your 15 against the meta you expect — every slot needs a job, no dead-weight cards for fringe decks
- [ ] Favor flexible cards that improve multiple matchups over narrow single-matchup hate
- [ ] Identify your dead maindeck cards in each matchup first — those are your cuts
- [ ] Move 3 to 6 cards in most matchups; if you want to change 10, your deck is wrong for the meta
- [ ] Keep your curve intact — swap at similar mana values, don't gut your early game
- [ ] Never cut your win condition into pure interaction with no way to close
- [ ] Write a one-line sideboard plan (IN / OUT / play-draw note) for your top 5-6 matchups and test it
- [ ] Side to the deck you actually saw in game 1, not to the archetype's stereotype
- [ ] Reset to your registered 60 between matches — don't forget to de-sideboard`,
  faq: [
    {
      question: 'How many cards are in an MTG sideboard?',
      answer:
        'A sideboard is up to 15 cards, kept separate from your minimum-60-card maindeck. You do not have to play all 15, but you cannot exceed it. Between games in a best-of-three match you may swap any number of cards one-for-one between your maindeck and sideboard, as long as your deck returns to its registered 60-card minimum before the next game. You always play game 1 with your registered maindeck and reset to it between matches.',
    },
    {
      question: 'When can you sideboard in Magic: The Gathering?',
      answer:
        'You only sideboard between games in a best-of-three (or longer) match, never during a game. Game 1 is always played with your registered maindeck. After game 1 — and again after game 2 — both players may adjust their decks by swapping cards with their sideboard before the next game begins. You must return your deck to its registered 60-card list between matches, so your maindeck is the baseline you always start from.',
    },
    {
      question: 'How many cards should I sideboard in and out?',
      answer:
        'In most matchups, 3 to 6 cards. Your maindeck is a coherent, tested machine, so over-sideboarding — swapping 8 or more cards — usually breaks your curve and consistency and leaves you worse off than you started. Bringing cards in is the easy half; the skill is identifying your dead maindeck cards in that specific matchup and cutting those. If you constantly want to change ten cards, your maindeck is probably wrong for the metagame, not your sideboarding.',
    },
    {
      question: 'What makes a good sideboard card?',
      answer:
        'Flexibility and impact across the field. The best sideboard cards either swing a matchup your maindeck genuinely loses, or answer several archetypes at once — a card that is good against three decks is worth more than a card that is great against one fringe deck. Cards like Abrade (kills a creature or an artifact) or Veil of Summer (blanks discard and blue interaction) earn slots because they cover multiple jobs. Avoid dedicating slots to decks that make up a tiny share of the field.',
    },
    {
      question: 'Should I sideboard differently on the play versus the draw?',
      answer:
        'Often, yes. On the play you are the aggressor with less time to be reactive, so you generally want your proactive, cheaper cards and may lower your curve. On the draw you have an extra card and a little more time, so you can afford a more reactive configuration — an additional removal spell or counter. A good sideboard plan includes a one-line play/draw note, such as "on the draw, +1 removal, -1 threat," because those small adjustments win close games.',
    },
    {
      question: 'How does sideboarding affect mulligan decisions?',
      answer:
        'A lot. Once you bring in dedicated hate — for example, graveyard hate against a reanimator deck — a post-board hand that contains that key answer becomes much more keepable, while a slow hand that lacks it is more shippable. Post-board games are frequently won by mulliganing aggressively toward your key sideboard card. Knowing your plan in advance lets you recognize which hands actually execute it and ship the ones that do not.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/mtg-mulligan-guide-london-mulligan', anchor: 'MTG mulligan guide' },
    { href: '/blog/magic-the-gathering/mtg-deck-archetypes-explained', anchor: 'MTG deck archetypes explained' },
    { href: '/blog/magic-the-gathering/mtg-modern-format-guide', anchor: 'MTG Modern format guide' },
    { href: '/blog/magic-the-gathering/best-counterspells-mtg', anchor: 'Best counterspells in MTG' },
  ],
  externalSources: [
    {
      url: 'https://magic.wizards.com/en/rules',
      title: 'Wizards of the Coast — official Magic comprehensive and tournament rules',
    },
    {
      url: 'https://media.wizards.com/2024/downloads/MTG_MTR_2024.pdf',
      title: 'Magic Tournament Rules — sideboard construction and procedure',
    },
    {
      url: 'https://www.mtggoldfish.com/metagame/',
      title: 'MTGGoldfish — current format metagame breakdowns for sideboard planning',
    },
  ],
  tldr:
    'A sideboard is up to 15 cards you swap one-for-one between games of a best-of-three, and it is where most matches are decided since you play more post-board games than game 1s. Build a 15 of flexible answers with a job each, identify and cut your dead maindeck cards rather than over-boarding (3 to 6 swaps is normal), keep your curve and win condition intact, write a short IN/OUT/play-draw plan for your top matchups, and mulligan aggressively toward your key sideboard cards.',
  itemList: {
    name: 'Common MTG Sideboard Cards by Archetype',
    items: [
      { name: 'Graveyard hate', description: 'Shuts down reanimator, delve, and recursion. Rest in Peace, Leyline of the Void, Tormod’s Crypt, Surgical Extraction.' },
      { name: 'Artifact / enchantment removal', description: 'Answers prison pieces, equipment, and value permanents. Reclamation Sage, Fragmentize, Abrade, Engineered Explosives.' },
      { name: 'Anti-control / anti-counter', description: 'Protects threats and punishes counter decks. Veil of Summer, Mystical Dispute, Negate, Disdainful Stroke.' },
      { name: 'Anti-aggro / lifegain', description: 'Stabilizes against fast creature decks with cheap removal, sweepers, and lifegain.' },
      { name: 'Hand disruption', description: 'Strips combo pieces and key cards before they resolve. Duress and Thoughtseize-style discard.' },
      { name: 'Sweepers vs go-wide', description: 'Resets a flooded board with a color-appropriate board wipe.' },
    ],
  },
};
