import type { BlogPost } from '../../blogTypes';

export const bestMtgWheelEffects: BlogPost = {
  slug: 'best-mtg-wheel-effects',
  game: 'magic-the-gathering',
  category: 'card-guides',
  topicCluster: 'commander-strategy',
  tags: ['commander', 'wheel', 'card-draw', 'red', 'blue', 'card-guide'],
  title: 'Best Wheel Effects in MTG Commander, Ranked',
  metaDescription:
    'The best wheel effects in MTG Commander, ranked. Wheel of Fortune, Windfall, Timetwister and the discard-draw spells that refill you and wreck the table.',
  excerpt:
    'A wheel is the only card in Magic that hands three opponents seven fresh cards and still counts as a great play. Here are the best wheel effects, ranked — plus the payoffs that turn a symmetrical refill into a completely one-sided beating.',
  featuredImagePrompt:
    'A great burning wheel of fate spinning above a card table, hands of cards dissolving into embers and reforming, red and blue arcane energy, painterly fantasy art, no text',
  heroImage: '/images/blog/magic-the-gathering/best-mtg-wheel-effects/wheel-of-fortune.jpg',
  heroImageAlt:
    'Wheel of Fortune, the three-mana red sorcery that makes each player discard their hand and draw seven — the original and still the best wheel effect in Commander.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-mtg-wheel-effects/wheel-of-fortune.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-wheel-effects/windfall.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-wheel-effects/timetwister.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-wheel-effects/narset-parter-of-veils.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-wheel-effects/notion-thief.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
  ],
  publishDate: '2026-07-15T00:00:00.000Z',
  lastUpdated: '2026-07-15T00:00:00.000Z',
  primaryKeyword: 'best wheel effects mtg commander',
  secondaryKeywords: [
    'best wheel cards commander',
    'mtg wheel effects ranked',
    'wheel of fortune commander',
    'windfall mtg commander',
    'best mass discard draw cards mtg',
    'nekusar wheel deck',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-counts-as-a-wheel', label: 'What counts as a wheel', level: 2 },
    { id: 'discard-wheels-vs-shuffle-wheels', label: 'Discard wheels vs shuffle wheels', level: 2 },
    { id: 'the-best-wheel-effects-ranked', label: 'The best wheel effects, ranked', level: 2 },
    { id: 'the-payoffs-that-make-a-wheel-one-sided', label: 'The payoffs that make a wheel one-sided', level: 2 },
    { id: 'building-around-wheels', label: 'Building around wheels', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `There is exactly one category of card in Magic where the correct play is to hand each of your three opponents a fresh grip of seven cards, and somehow still be the person who profits. That's a wheel. On paper it's the most generous thing you can do at a Commander table. In practice, a well-built wheel deck casts Wheel of Fortune on turn four, throws away two lands, draws seven, and the three people who just got "gifted" a new hand spend the rest of the game wondering why they're at 22 life and you're holding a full grip.

The trick is that a wheel is only symmetrical if you let it be. Every card on this list is symmetrical text — and every serious wheel deck is built to break that symmetry in half. All costs, oracle text, and Commander legality checked against Scryfall.

## What counts as a wheel

The name comes from Wheel of Fortune, a {2}{R} sorcery from 1993 that reads, in its entirety: "Each player discards their hand, then draws seven cards." That's the template. A wheel is any effect that makes every player dump their current hand and refill.

The important thing to understand is that a wheel is doing **three separate jobs at once**, and different decks care about different ones:

1. **It refills you.** You empty your hand playing threats, then wheel and draw seven more. This is the obvious use, and it's why red — a color with famously bad long-term [card draw](/blog/magic-the-gathering/best-card-draw-commander-mtg) — gets the best wheel in the game. Wheel of Fortune is red's answer to being colorless from the neck up.
2. **It's mass discard.** Every opponent loses their current hand. That control player sandbagging two counterspells and a board wipe? Gone. This is the part people underrate. A wheel is a Mind Rot pointed at the entire table that also happens to draw you seven.
3. **It's a fuel line to your graveyard.** You're discarding a hand, not exiling it. If your deck wants cards in the yard, a wheel is the cheapest bulk-discard outlet in the format.

The catch, and the reason wheels aren't just auto-includes in every deck: job one and job two are in tension with job three's beneficiaries. You just gave three people seven cards. If you have no plan for what happens next, you didn't play a wheel, you played a group hug spell with extra steps.

## Discard wheels vs shuffle wheels

There's a real distinction here that changes which card you want, and most people gloss over it.

![Timetwister, the three-mana blue sorcery that shuffles each player's hand and graveyard into their library before they draw seven — the only Power Nine card legal in Commander.](/images/blog/magic-the-gathering/best-mtg-wheel-effects/timetwister.jpg)

**Discard wheels** — Wheel of Fortune, Windfall, Magus of the Wheel, Reforge the Soul — put the discarded hands into graveyards. That fuels your own [reanimation and recursion](/blog/magic-the-gathering/best-graveyard-recursion-commander-mtg) and turns on discard payoffs like Waste Not — but it fills opponents' graveyards too, which is a genuine downside if the table has a Meren or a Muldrotha who'd love you to keep doing that.

**Shuffle wheels** — Timetwister, Echo of Eons, Time Reversal, Winds of Change, Molten Psyche — shuffle hands (and sometimes graveyards) back into libraries instead. Timetwister and Echo of Eons shuffle **hand and graveyard** back in, making them a legitimate anti-graveyard tool at a table full of recursion decks, plus a soft reset on your own library.

The practical rule: discard wheels if you have a graveyard plan, shuffle wheels if you're fighting one. Most decks want a mix weighted toward the gameplan.

## The best wheel effects, ranked

Ranked on cost, impact in a four-player pod, and how reliably the card advances a real gameplan rather than just churning cards.

![Windfall, a three-mana blue sorcery that makes each player discard their hand and draw cards equal to the largest hand discarded.](/images/blog/magic-the-gathering/best-mtg-wheel-effects/windfall.jpg)

1. **Wheel of Fortune** — {2}{R}. Three mana: everyone dumps their hand, everyone draws seven. It's the best because it's the cheapest full-size wheel with no conditions, no drawback, and no "up to." You can cast it at three mana with an empty hand and net seven cards while stripping the table. The only reason not to run it is price — it's on the Reserved List and it costs real money. Every other red wheel in this list exists because Wheel of Fortune is too expensive for most people to own.
2. **Windfall** — {2}{U}. The best-value wheel in the format and the one you should actually buy. Each player discards their hand, then everyone draws cards equal to the **greatest** number of cards a player discarded. Read that carefully: if an opponent is hoarding an eight-card hand and you're empty, you draw eight. It scales off the table's greediest player, which is a beautiful thing. It's also three mana, blue, and costs a couple of dollars.
3. **Timetwister** — {2}{U}. Each player shuffles hand and graveyard into their library and draws seven. It's a wheel, a graveyard hate spell, and a library reset in one three-mana card. It's also a Power Nine card that costs about as much as a used car, so this ranking is theoretical for 99% of players. Echo of Eons is the version you can afford.
4. **Echo of Eons** — {4}{U}{U}, flashback {2}{U}. A functional Timetwister with a worse front cost and a much better back one. Six mana is a lot, but the flashback is where the card actually lives: discard it to a rummage or a wheel, then flash it back for {2}{U}. Casting it from the graveyard for three mana is the real card. This is the budget Timetwister and it's genuinely excellent.
5. **Magus of the Wheel** — {2}{R}. Wheel of Fortune on a 3/3 body with a one-turn delay: {1}{R}, tap, sacrifice, each player discards and draws seven. The delay is real — everyone sees it coming and it dies to any removal — but a creature is a card you can blink, reanimate, or tutor with a creature tutor. In decks that recur creatures, it's a repeatable Wheel of Fortune.
6. **Reforge the Soul** — {3}{R}{R}, miracle {1}{R}. Five mana is a bad rate for a wheel and you should not be paying it. The miracle cost of {1}{R} is one of the best rates in the game — but it only works if it's the first card you draw that turn, which is a coin flip you don't control. Play it if you have top-of-library manipulation; it's a fine seventh wheel otherwise.
7. **Jace's Archivist** — {1}{U}{U}. A 2/2 with "{U}, tap: each player discards their hand, then draws cards equal to the greatest number discarded." A **repeatable Windfall for one blue mana every single turn.** That's absurd if it survives, and it's a 2/2 in a format full of board wipes, so it usually doesn't. Untap effects turn it into a genuine engine.
8. **Whispering Madness** — {2}{U}{B}. Windfall's text with cipher, which lets you encode it on a creature and wheel the table **every time that creature connects with a player**. Four mana up front, then free repeatable wheels off an unblockable body. It's slow and fragile and it's also the most degenerate thing on this list if it gets going.
9. **Wheel of Misfortune** — {2}{R}. Each player secretly picks a number, the card deals damage equal to the highest number to whoever chose it, and the players who chose the lowest number wheel. It's a genuine mind game and it can be built to be one-sided, but "my wheel works if I win a guessing game" is a lot of variance for a card that's otherwise a worse Wheel of Fortune.
10. **Molten Psyche** — {1}{R}{R}. Everyone shuffles their hand into their library and draws that many. The metalcraft clause — three or more artifacts and it deals damage to each opponent equal to the number of cards you drew — turns it into a legitimate finisher in an artifact deck. Outside of one, it's a symmetrical shuffle with no payoff.

Two more worth naming: **Winds of Change** at {R} is the cheapest wheel in the game (shuffle hands into libraries, redraw that many) and a fine turn-one storm enabler, though it draws you nothing extra. **Dark Deal** at {2}{B} makes everyone discard and redraw **that many minus one**, which is a slow table-wide grind that's great in a Nekusar shell and bad everywhere else. And **Memory Jar** at {5} is a five-mana artifact that gives everyone seven cards for a turn — it's Commander-legal despite its reputation, but it's clunky and mostly a storm card.

## The payoffs that make a wheel one-sided

This is the whole ballgame. A wheel without payoffs is a group hug spell. A wheel with payoffs is a Time Walk plus a Mind Rot.

![Narset, Parter of Veils, a three-mana blue planeswalker whose static ability stops each opponent from drawing more than one card per turn — the best wheel-breaking payoff in Commander.](/images/blog/magic-the-gathering/best-mtg-wheel-effects/narset-parter-of-veils.jpg)

**Draw-denial: the good stuff.** These break the symmetry completely.

- **Narset, Parter of Veils** — {1}{U}{U}. "Each opponent can't draw more than one card each turn." Cast Narset, then wheel. Every opponent discards their hand and draws **one card**. You draw seven. This is not a synergy, it's a two-card combo that puts the table in the dirt, and it's the single best wheel payoff in Commander.
- **Notion Thief** — {2}{U}{B}. Flash. Every extra card an opponent would draw, **you** draw instead. Flash it in response to somebody's Windfall and draw twenty-one cards. It's the same effect as Narset but pointed at your own hand, and the flash makes it a trap you can spring on other people's draw spells.
- **Alms Collector** — {3}{W}. Flash. If an opponent would draw two or more cards, you and that player each draw one instead. The white version, weaker than the other two but a fine include if you're in white.

**Damage payoffs: the fun stuff.**

- **Nekusar, the Mindrazer** — {2}{U}{B}{R}. Every player draws an extra card each draw step, and whenever an opponent draws, Nekusar deals 1 damage to them. Wheel with Nekusar out and each opponent takes seven. Two wheels is 14 damage to a whole table, and that is a real clock. He's the archetype's poster child for a reason.
- **Niv-Mizzet, Parun** — {U}{U}{U}{R}{R}{R}. Whenever **you** draw a card, ping any target for 1. Wheel yourself into seven cards and you get seven pings to distribute. Six pips of colored mana is a serious cost, but he can't be countered and he ends games.

**Discard payoffs: the sneaky stuff.**

- **Waste Not** — {1}{B}. Whenever an opponent discards a creature you make a 2/2 Zombie, a land gives you {B}{B}, and a noncreature nonland card draws you a card. Wheel with this out and you get roughly seven of those triggers **per opponent** — that's a board, a pile of mana, and a fistful of cards off one enchantment.
- **Bone Miser** — {4}{B}. The same template but for **your own** discards. Wheel away a fat hand and turn it into Zombies, mana, and cards.

The combination you actually want in a dedicated deck is a draw-denier (Narset/Notion Thief) plus a damage payoff (Nekusar) plus a couple of discard payoffs (Waste Not). Land two of those three before you wheel and the game usually ends inside two turns.

## Building around wheels

![Notion Thief, a four-mana Dimir Rogue with flash that redirects every extra card an opponent would draw to you instead — the trap you spring on someone else's wheel.](/images/blog/magic-the-gathering/best-mtg-wheel-effects/notion-thief.jpg)

**Colors.** Izzet (blue-red) is the natural home — red owns the best wheels, blue owns the best payoffs and the shuffle wheels. Grixis (blue-black-red) is the full version: black adds Waste Not, Bone Miser, and Nekusar himself. Nekusar, the Mindrazer is the default commander and the reason the archetype has a name.

**The empty-hand rule.** Wheels are best when your hand is empty and everyone else's is full. That means you want a low curve and you want to dump your hand before you wheel — the opposite of how most Commander players sequence. Playing a wheel with five cards in hand is throwing five cards away. Play out your hand first, then wheel. This is also why wheel decks lean on cheap [mana rocks](/blog/magic-the-gathering/best-mana-rocks-commander-mtg): the faster you empty your hand, the sooner the wheel is a pure profit.

**The timing rule.** Cast wheels on **your own turn, precombat**, or in response to an opponent's end step. Casting a wheel on an opponent's upkeep gives them a full turn to use the seven cards you just handed them. Casting it on your turn means you untap with seven and they have to survive your turn before they get to use theirs.

**The defensive reality.** You are giving three people cards. Some will be removal pointed at you, and some will be [counterspells](/blog/magic-the-gathering/best-counterspells-mtg) they didn't have thirty seconds ago. A wheel deck without interaction arms its own executioners — budget a real slice of the list for it, alongside the usual [Commander staples](/blog/magic-the-gathering/best-commander-staples-mtg).

**One legality note.** The banned list moves. The fast-mana bans (Mana Crypt, Jeweled Lotus, and Dockside Extortionist are all banned) took the explosive turn-two wheel starts off the table. A card sitting in an old decklist online means nothing about whether it's legal today — check Scryfall.

## Quick Action Checklist

- [ ] Start with Windfall — it's three mana, scales off the table's greediest hand, and costs a couple of dollars. Wheel of Fortune is better but Reserved List expensive.
- [ ] Empty your hand BEFORE you wheel. Wheeling with five cards in hand throws five cards away.
- [ ] Cast wheels on your own turn precombat, never on an opponent's upkeep — don't give them a full turn with the seven cards you just handed them.
- [ ] Never run wheels without payoffs. Narset, Parter of Veils or Notion Thief turn a symmetrical refill into a one-sided beating.
- [ ] Match the wheel type to your plan: discard wheels (Wheel of Fortune, Windfall) for graveyard and Waste Not synergy, shuffle wheels (Echo of Eons, Timetwister) to fight graveyard decks.
- [ ] Echo of Eons is the budget Timetwister — the {2}{U} flashback is the real card, not the six-mana front side.
- [ ] Run real interaction. You are handing three opponents fresh removal every time you wheel.
- [ ] Verify Commander legality and current bans on Scryfall and the official banned list before buying anything.`,
  faq: [
    {
      question: 'What is the best wheel effect in MTG Commander?',
      answer:
        'Wheel of Fortune ({2}{R}) is the strongest — three mana, everyone discards and draws seven, no conditions. But it is on the Reserved List and costs hundreds of dollars, so the best wheel you should actually buy is Windfall ({2}{U}). Windfall makes each player discard and then draw cards equal to the greatest number of cards a player discarded, so it scales off whichever opponent is hoarding the biggest hand — often drawing you more than seven for the same three mana.',
    },
    {
      question: 'Why would I give my opponents seven new cards?',
      answer:
        'Because a wheel is only symmetrical if you let it be. You cast it with an empty hand after dumping your own, so you gain seven cards and they mostly break even. More importantly, you strip every counterspell and board wipe they were sandbagging. And with a payoff like Narset, Parter of Veils or Notion Thief on the battlefield, opponents draw one card (or zero) while you draw the full seven — that is not a group hug, that is a beating.',
    },
    {
      question: 'What is the difference between a discard wheel and a shuffle wheel?',
      answer:
        'Discard wheels like Wheel of Fortune and Windfall put the discarded hands into graveyards, which fuels your own recursion and turns on discard payoffs like Waste Not — but it also feeds opponents with graveyard decks. Shuffle wheels like Timetwister and Echo of Eons shuffle hands (and graveyards) back into libraries instead, which makes them graveyard hate as well as card draw. Pick based on whether your deck wants a full graveyard or wants to fight one.',
    },
    {
      question: 'What is the best commander for a wheel deck?',
      answer:
        'Nekusar, the Mindrazer ({2}{U}{B}{R}) is the archetype default. Every player draws an extra card each draw step and every opponent draw pings them for 1, so a single wheel deals 7 damage to each opponent. Grixis colors also give you the full payoff suite — Waste Not and Bone Miser from black, Narset and Notion Thief from blue, and the best wheels from red. Niv-Mizzet, Parun is the Izzet alternative if you want the pings pointed off your own draws.',
    },
    {
      question: 'Is Timetwister legal in Commander?',
      answer:
        'Yes. Timetwister is the only card of the Power Nine that is legal in Commander — the other eight (the Moxen, Black Lotus, Ancestral Recall, Time Walk) are all banned. It costs a fortune, though. Echo of Eons is the functional budget replacement: same shuffle-and-draw-seven text, and its {2}{U} flashback cost makes casting it from the graveyard cheaper than Timetwister ever was.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/best-card-draw-commander-mtg', anchor: 'best card draw in Commander' },
    { href: '/blog/magic-the-gathering/best-graveyard-recursion-commander-mtg', anchor: 'graveyard recursion staples' },
    { href: '/blog/magic-the-gathering/best-mana-rocks-commander-mtg', anchor: 'best mana rocks' },
    { href: '/blog/magic-the-gathering/best-counterspells-mtg', anchor: 'best counterspells' },
    { href: '/blog/magic-the-gathering/best-commander-staples-mtg', anchor: 'best Commander staples' },
  ],
  externalSources: [
    { url: 'https://scryfall.com/search?q=o%3A%22discards+their+hand%22+f%3Acommander', title: 'Scryfall — wheel effect card search and legality data' },
    { url: 'https://magic.wizards.com/en/banned-restricted-list', title: 'Wizards of the Coast — official banned and restricted list' },
    { url: 'https://edhrec.com/', title: 'EDHREC — Commander wheel-card inclusion data' },
  ],
  tldr:
    'The best wheel effects in MTG Commander are Wheel of Fortune (the gold standard, but Reserved List expensive), Windfall (the one you should actually buy), Timetwister and its budget clone Echo of Eons, Magus of the Wheel, and Jace\'s Archivist. A wheel refills you, strips every opponent\'s sandbagged hand, and fuels your graveyard. Never run them without payoffs — Narset, Parter of Veils and Notion Thief break the symmetry entirely, and Nekusar, the Mindrazer turns each wheel into 7 damage per opponent.',
  itemList: {
    name: 'Best Wheel Effects in MTG Commander, Ranked',
    items: [
      { name: 'Wheel of Fortune', description: 'Three mana, each player discards and draws seven. The cheapest unconditional full-size wheel in Magic, and the archetype\'s namesake. Reserved List expensive.' },
      { name: 'Windfall', description: 'Three mana blue wheel that draws everyone cards equal to the largest hand discarded. Scales off the table\'s greediest player and costs a couple of dollars.' },
      { name: 'Timetwister', description: 'Shuffles every hand and graveyard into libraries, then draws seven. A wheel, a graveyard hate spell and a library reset for {2}{U}. The only legal Power Nine card in Commander.' },
      { name: 'Echo of Eons', description: 'A functional Timetwister whose {2}{U} flashback is the real card. Discard it, then cast it from the graveyard for three mana. The budget Timetwister.' },
      { name: 'Magus of the Wheel', description: 'Wheel of Fortune stapled to a 3/3 body with a one-turn delay. Blink or reanimate it for a repeatable wheel in creature-recursion shells.' },
      { name: 'Reforge the Soul', description: 'A bad five-mana wheel with a great {1}{R} miracle cost. Only worth it with top-of-library manipulation to set up the miracle.' },
      { name: 'Jace\'s Archivist', description: 'A repeatable Windfall for {U} every turn on a 2/2 body. Absurd if it survives a board wipe, which it usually does not.' },
      { name: 'Whispering Madness', description: 'Windfall with cipher — encode it on an evasive creature and wheel the table free every time it connects. Slow, fragile, and degenerate if it lands.' },
      { name: 'Wheel of Misfortune', description: 'A secret-number mind game that wheels the lowest bidders and burns the highest. Buildable to be one-sided but high variance.' },
      { name: 'Molten Psyche', description: 'A shuffle wheel whose metalcraft clause burns each opponent for the cards drawn. A real finisher in artifact decks, filler outside them.' },
    ],
  },
};
