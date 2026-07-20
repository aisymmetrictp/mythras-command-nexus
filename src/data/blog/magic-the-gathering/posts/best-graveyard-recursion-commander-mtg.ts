import type { BlogPost } from '../../blogTypes';

export const bestGraveyardRecursionCommanderMtg: BlogPost = {
  slug: 'best-graveyard-recursion-commander-mtg',
  game: 'magic-the-gathering',
  category: 'card-guides',
  topicCluster: 'commander-staples',
  tags: ['commander', 'graveyard', 'recursion', 'card-advantage', 'black', 'green'],
  title: 'Best Graveyard Recursion Spells in Commander, Ranked',
  metaDescription:
    'The best graveyard recursion in MTG Commander, ranked. Eternal Witness, Reanimate, Sun Titan, Yawgmoth, and why your graveyard is a second hand.',
  excerpt:
    "Your graveyard is a second hand you already paid for. In a 40-life format, the deck that keeps buying its best cards back wins the long game. Here is the best graveyard recursion in Commander, ranked, with the color and cost that decides whether it belongs in your deck.",
  featuredImagePrompt:
    'A green-robed shaman raising a glowing spirit from a misty graveyard, tendrils of green and white mana lifting a fallen card back to life, painterly Magic: The Gathering art style, no text',
  heroImage: '/images/blog/magic-the-gathering/best-graveyard-recursion-commander-mtg/eternal-witness.jpg',
  heroImageAlt:
    'Eternal Witness, the three-mana green creature that returns any card from your graveyard to your hand when it enters the battlefield.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-graveyard-recursion-commander-mtg/eternal-witness.jpg',
      sourceUrl: 'https://scryfall.com/card/cmm/286/eternal-witness',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-graveyard-recursion-commander-mtg/reanimate.jpg',
      sourceUrl: 'https://scryfall.com/card/dsc/155/reanimate',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-graveyard-recursion-commander-mtg/sun-titan.jpg',
      sourceUrl: 'https://scryfall.com/card/soc/178/sun-titan',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-graveyard-recursion-commander-mtg/yawgmoth-thran-physician.jpg',
      sourceUrl: 'https://scryfall.com/card/dmr/110/yawgmoth-thran-physician',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
  ],
  publishDate: '2026-06-18T00:00:00.000Z',
  lastUpdated: '2026-06-18T00:00:00.000Z',
  primaryKeyword: 'best graveyard recursion commander',
  secondaryKeywords: [
    'best recursion spells commander',
    'best reanimation spells commander',
    'graveyard recursion edh',
    'best graveyard recursion mtg',
    'commander reanimator staples',
    'best card recursion edh',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-the-graveyard-is-a-second-hand', label: 'Why the graveyard is a second hand', level: 2 },
    { id: 'reanimation-vs-regrowth-effects', label: 'Reanimation vs regrowth effects', level: 2 },
    { id: 'the-best-graveyard-recursion-ranked', label: 'The best graveyard recursion, ranked', level: 2 },
    { id: 'the-best-reanimation-spells', label: 'The best reanimation spells', level: 2 },
    { id: 'the-best-repeatable-recursion-engines', label: 'The best repeatable recursion engines', level: 2 },
    { id: 'how-much-recursion-should-you-run', label: 'How much recursion should you run', level: 2 },
    { id: 'graveyard-hate-and-how-to-play-around-it', label: 'Graveyard hate and how to play around it', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Your graveyard is a second hand you already paid for. Every creature that traded in combat, every spell you cast on turn three, every board wipe that caught your own stuff — all of it is sitting in a resource pile that most decks just ignore. Recursion is the act of cashing that pile back in, and in a 40-life multiplayer format where games run fifteen turns, the deck that keeps buying its best cards back is usually the deck that's still drawing live on turn twelve.

That's the real reason graveyard recursion is card advantage and not just a cute trick. A regular draw spell gives you a random card off the top. Eternal Witness hands you the single best card you've already lost — your tutor, your board wipe, your combo piece — on demand. You're not drawing more cards; you're drawing the *right* cards, twice. What follows is a ranked list of the strongest recursion in Commander, every card legality-checked, with the color and cost that decides whether it earns a slot.

## Why the graveyard is a second hand

Three things make recursion better in Commander than in any 60-card format.

**The games are long.** A spell you bring back on turn ten was free to put in the bin on turn three. Sixty-card formats often end before recursion matters; Commander rewards you for grinding, and the grind is exactly where a regrowth effect shines.

**Your best cards are singletons.** You run one Cyclonic Rift, one [Demonic Tutor](/blog/magic-the-gathering/best-tutors-commander-mtg), one game-ending bomb. In a deck where you can't run four copies, the ability to recur the one copy you have is the closest thing the format has to redundancy. Recursion turns a singleton into a soft two-of.

**Sacrifice and ETB synergies stack.** Cards that die and come back power [sacrifice outlets](/blog/magic-the-gathering/best-mtg-sacrifice-outlets-commander), blink decks, and [aristocrat engines](/blog/magic-the-gathering/best-mtg-aristocrats-sacrifice-commander). A creature that loops in and out of the graveyard isn't card advantage once — it's card advantage every turn.

> The honest catch: recursion is a value play, not a tempo play. You spend mana and a card to get a card back, which is card-neutral at best in the moment. It pays off over time. If your deck wins fast, you want interaction and threats, not a regrowth toolbox. If your deck wins late, recursion is some of the best card advantage in the game.

## Reanimation vs regrowth effects

Two families, and players conflate them constantly.

**Regrowth effects** return a card from your graveyard to your *hand*. Eternal Witness, Regrowth, Sevinne's Reclamation. You pay the card's full cost again when you recast it. The upside is flexibility — you can grab any card type and decide later — and the downside is that you're paying twice.

**Reanimation effects** put a creature directly onto the *battlefield* from the graveyard, skipping its mana cost entirely. Reanimate, Animate Dead, the whole "cheat a huge thing into play" plan. This is where the format-warping power lives: pay one mana to put a ten-mana creature into play, and you've broken the curve. The downside is that reanimation only works on creatures and depends on getting a fat target into the bin first.

The rule of thumb: **regrowth for a value/midrange toolbox deck, reanimation for a deck built around a small number of huge payoffs.** Most grindy Commander decks want a couple of cheap regrowth effects for flexibility. Reanimator decks lean hard into the cheat-it-into-play plan and build the whole shell around enabling it.

## The best graveyard recursion, ranked

Ranked on overall power across the Commander decks that want recursion, with context. This is the headline list — every card here is legal in Commander.

![Reanimate, the one-mana black sorcery that returns any creature from any graveyard to the battlefield, paying life equal to its mana value.](/images/blog/magic-the-gathering/best-graveyard-recursion-commander-mtg/reanimate.jpg)

1. **Eternal Witness** — 1GG. The gold standard. A 2/1 that returns any card from your graveyard to your hand on entry — instant, sorcery, artifact, land, whatever you lost. It's a creature, so it loops with [blink and flicker](/blog/magic-the-gathering/best-mtg-flicker-blink-commander), dodges instant-speed counterspells aimed at sorceries, and chains with itself. If you're in green, this is the floor.
2. **Reanimate** — B. One mana to put any creature from any graveyard onto the battlefield; you pay life equal to its mana value. The most efficient reanimation spell ever printed and the engine of every black reanimator deck. "Any graveyard" means you can steal the bomb your opponent just lost, too.
3. **Yawgmoth, Thran Physician** — 2BB. Not pure recursion, but the best graveyard *engine* in black. Pay a life, sacrifice a creature, draw a card, and put a -1/-1 counter somewhere — repeat. With any token maker or a creature that returns itself, Yawgmoth turns your graveyard into an infinite-feeling card-draw and removal machine. A cEDH and high-power staple.
4. **Sun Titan** — 4WW. A 6/6 that returns a permanent with mana value 3 or less from your graveyard to the battlefield every time it attacks. Lands, mana rocks, removal creatures, your commander's support pieces — it's a repeatable engine on a beater, and it loops absurdly well with blink.
5. **Regrowth** — 1G. Two mana, return any card from your graveyard to your hand. No body, no rider, just the cleanest, cheapest regrowth effect in the game. It's a sorcery, so it doesn't loop like Eternal Witness, but at two mana it's pure efficiency.
6. **Meren of Clan Nel Toth** — 2BG. A commander-grade engine: whenever a creature you control dies you gain an experience counter, and at your end step you return a creature from your graveyard — to hand if its mana value is too high, to the battlefield for free if your experience count is high enough. A whole archetype on a four-drop.
7. **Sevinne's Reclamation** — 2W. Return a permanent card with mana value 3 or less from your graveyard to your hand — and it has flashback, so you get to do it twice. Two-for-one recursion in white, which is historically the color with the weakest card advantage, so it punches above its rate there.
8. **Animate Dead** — 1B. The original cheap reanimation Aura: two mana, return a creature from any graveyard to the battlefield (it gets -1/0). It's slightly clunkier than Reanimate but doesn't cost life, and it's a staple alongside it in any black reanimator build.
9. **Karmic Guide** — 3WW. A 2/2 flyer with echo that reanimates a creature when it enters. The combo enabler — it loops with sacrifice outlets and reanimation targets in countless white-based engines, and it brings a creature back at full size.
10. **Timeless Witness** — 2GG. Eternal Witness with eternalize. You cast it for value, and when it's in the graveyard you can pay to bring it back as a 4/4 token that recurs another card. Built-in redundancy for the best regrowth effect in the format.

Past the top ten, the format runs dozens of narrower or color-specific options — Body Double, Archaeomancer, Genesis, Eternal Scourge — that earn slots in the specific shells built to abuse them.

## The best reanimation spells

[Reanimation](/blog/magic-the-gathering/best-mtg-reanimation-spells) is the format's most explosive card-advantage play because it ignores mana cost. The plan: get a giant creature into your graveyard cheaply (discard, mill, self-sacrifice), then cheat it into play for a fraction of its cost.

- **Reanimate** — B. One mana, any creature, any graveyard. The most efficient reanimation in the game; the life payment is real but rarely matters when you're putting a game-winner into play.
- **Animate Dead** — 1B. Two mana, no life cost, slight stat reduction. Run it alongside Reanimate for redundancy in the reanimator shell.
- **Karmic Guide** — 3WW. Reanimates on a flying body, loops with sacrifice outlets, and combos in the right builds.
- **Body Double** — 4U. Enters as a copy of any creature card in any graveyard — so it dodges "return target creature" hate and copies the best thing in any bin, yours or an opponent's.

The whole reanimator package lives or dies on its enablers. You need ways to get fat creatures into the graveyard reliably, or your one-mana reanimation spell sits dead. Pair the spells above with discard outlets and self-mill, and respect that this plan folds hard to graveyard hate (more on that below).

## The best repeatable recursion engines

One-shot recursion is fine. Engines that recur *every turn* are what take over a long game.

![Sun Titan, the six-mana white 6/6 that returns a permanent with mana value three or less from your graveyard to the battlefield each time it attacks.](/images/blog/magic-the-gathering/best-graveyard-recursion-commander-mtg/sun-titan.jpg)

- **Sun Titan** — 4WW. Recurs a 3-or-less permanent on every attack. Endless value from lands, rocks, and small creatures; blink it to retrigger.
- **Meren of Clan Nel Toth** — 2BG. Returns a creature every end step, scaling from hand to battlefield as your experience grows. A recursion engine that's also your commander.
- **Yawgmoth, Thran Physician** — 2BB. Converts dying creatures into cards and removal on a loop; the best black graveyard engine.
- **Genesis** — 4G. From the graveyard, pay 2G on your upkeep to return a creature to your hand. It recurs itself indirectly and turns your bin into a card-a-turn engine in any green grindfest.

Engines are slower than burst recursion but win attrition wars outright. In a deck that plans to grind three opponents into the dirt, one of these in play is often the actual win condition — you simply never run out of cards while they do.

## How much recursion should you run

There's no universal number, but here's the framework.

**Value/midrange decks: three to six recursion pieces.** A couple of cheap regrowth effects (Eternal Witness, Regrowth) plus a repeatable engine or two (Sun Titan, Genesis). Enough to grind, not so much that your deck has no threats.

**Dedicated reanimator decks: build the shell around it.** Multiple reanimation spells, multiple enablers to fill the graveyard, and a tight set of fat payoffs. Here recursion isn't a package, it's the deck.

**Aggro/combo decks: little to none.** If you win by turn six or assemble a combo, a regrowth toolbox is just durdling. Recursion competes with interaction and threats for slots, and fast decks would rather have those.

The trap is overloading on recursion in a deck with nothing worth recurring. A graveyard full of vanilla creatures isn't a resource — it's just a pile. Recursion is only as good as the best card in your bin, so it earns its slot in decks loaded with singleton bombs, tutors, and answers worth buying back.

## Graveyard hate and how to play around it

Every recursion plan has the same Achilles heel: the graveyard is a public zone anyone can attack. A single Bojuka Bog, Soul-Guide Lantern, or Rest in Peace can blank your whole strategy, and at competitive tables, graveyard hate is everywhere.

How to insulate yourself:

- **Don't telegraph.** Keep your key reanimation target in hand until you're ready to discard-and-reanimate in one turn, so there's no window for an opponent to exile it.
- **Run instant-speed recursion** where you can, so you can respond to a graveyard wipe by recurring in response.
- **Diversify your card advantage.** If recursion is your *only* engine, hate shuts you off entirely. Pair it with regular draw so a single Rest in Peace doesn't end your game.
- **Hold up interaction at cEDH tables**, where a graveyard-based win is one Bojuka Bog away from fizzling on the stack.

The takeaway: recursion is some of the most efficient card advantage in Commander, but it's the most fragile, too. Build it as a strong second engine, not your only plan, and respect that a one-mana exile effect can undo your whole turn.

## Quick Action Checklist

Apply this when adding recursion to a Commander deck:

- [ ] Decide your family: regrowth (return to hand) for flexible value decks, reanimation (cheat onto battlefield) for big-payoff decks
- [ ] Eternal Witness and Regrowth are the green floor; start there if you're in green
- [ ] In black, run Reanimate and Animate Dead together for reanimator redundancy
- [ ] Add at least one repeatable engine (Sun Titan, Genesis, Meren, Yawgmoth) for the long game
- [ ] Only run recursion if your deck has singleton bombs and answers worth buying back
- [ ] Keep it to three to six pieces in a midrange deck; build the whole shell around it only in dedicated reanimator
- [ ] Diversify your card advantage so one Rest in Peace doesn't end your game
- [ ] Double-check Commander legality on Scryfall before sleeving anything up`,
  faq: [
    {
      question: 'What is the best graveyard recursion in Commander?',
      answer:
        "For return-to-hand value, Eternal Witness is the gold standard — a three-mana green creature that buys back any card from your graveyard and loops with blink. For cheating creatures into play, Reanimate is the most efficient reanimation spell ever printed at one mana. Which one you want depends on whether your deck is a value/midrange toolbox (regrowth) or a big-payoff reanimator deck (reanimation).",
    },
    {
      question: 'What is the difference between reanimation and regrowth?',
      answer:
        'A regrowth effect (Eternal Witness, Regrowth) returns a card from your graveyard to your hand, so you pay its mana cost again when you recast it, but you can grab any card type. A reanimation effect (Reanimate, Animate Dead) puts a creature directly onto the battlefield from the graveyard and skips its mana cost entirely — which is far more explosive, but only works on creatures and needs a big target in the graveyard first.',
    },
    {
      question: 'Is graveyard recursion card advantage?',
      answer:
        "Yes, over the length of a game. A recursion spell is roughly card-neutral in the moment — you spend a card to get a card back — but it lets you re-buy the single best card you have already lost, like a board wipe or a tutor, instead of drawing a random card off the top. In a long Commander game, that adds up to a meaningful card-advantage edge, especially with repeatable engines like Sun Titan or Genesis.",
    },
    {
      question: 'How much recursion should I run in a Commander deck?',
      answer:
        'A value or midrange deck wants roughly three to six recursion pieces — a couple of cheap regrowth effects plus a repeatable engine or two. A dedicated reanimator deck builds the entire shell around recursion with multiple reanimation spells and enablers. Aggro and fast combo decks usually run little or none, because recursion competes with interaction and threats for slots and is too slow for a deck that wins early.',
    },
    {
      question: 'How do I protect my graveyard recursion from hate?',
      answer:
        "Graveyard hate like Bojuka Bog, Soul-Guide Lantern, and Rest in Peace can blank a recursion plan, so don't telegraph your reanimation target — keep it in hand until you can discard and reanimate in one turn. Run instant-speed recursion where possible so you can respond to a graveyard wipe, and diversify your card advantage so a single exile effect doesn't shut off your only engine.",
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/best-card-draw-commander-mtg', anchor: 'best card draw spells in Commander' },
    { href: '/blog/magic-the-gathering/best-tutors-commander-mtg', anchor: 'best tutors in Commander' },
    { href: '/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start', anchor: 'Commander format guide' },
    { href: '/blog/magic-the-gathering/best-black-cards-magic-the-gathering', anchor: 'best black cards guide' },
    { href: '/blog/magic-the-gathering/best-commander-combos-mtg', anchor: 'best Commander combos' },
  ],
  externalSources: [
    { url: 'https://scryfall.com/search?q=o%3A%22from+your+graveyard%22+f%3Acommander', title: 'Scryfall — graveyard recursion search and legality data' },
    { url: 'https://edhrec.com/', title: 'EDHREC — Commander recursion inclusion data' },
    { url: 'https://magic.wizards.com/en/banned-restricted-list', title: 'Wizards of the Coast — official banned and restricted list' },
  ],
  tldr:
    "Graveyard recursion is some of the best card advantage in Commander because it lets you re-buy your best singleton cards in a long game. Eternal Witness and Regrowth are the green floor for value decks; Reanimate and Animate Dead power black reanimator decks by cheating fat creatures into play; Sun Titan, Meren, and Yawgmoth are the best repeatable engines. Run three to six pieces in a midrange deck and protect against graveyard hate.",
  itemList: {
    name: 'Best Graveyard Recursion in Commander, Ranked',
    items: [
      { name: 'Eternal Witness', description: 'Three-mana green 2/1 that returns any card from your graveyard to hand on entry. The gold standard.' },
      { name: 'Reanimate', description: 'One-mana black sorcery that puts any creature from any graveyard onto the battlefield for life. The best reanimation spell.' },
      { name: 'Yawgmoth, Thran Physician', description: 'Sacrifice creatures to draw and place -1/-1 counters on a loop. The best black graveyard engine.' },
      { name: 'Sun Titan', description: 'Six-mana 6/6 that recurs a 3-or-less permanent on every attack. A repeatable engine on a beater.' },
      { name: 'Regrowth', description: 'Two-mana green sorcery that returns any card to hand. The cleanest, cheapest regrowth effect.' },
      { name: 'Meren of Clan Nel Toth', description: 'Commander that returns a creature every end step, scaling with experience counters. A whole archetype on a four-drop.' },
      { name: "Sevinne's Reclamation", description: 'Two-for-one white recursion with flashback for permanents of mana value 3 or less.' },
      { name: 'Animate Dead', description: 'Two-mana reanimation Aura with no life cost. A reanimator staple alongside Reanimate.' },
      { name: 'Karmic Guide', description: 'Flying reanimator body that loops with sacrifice outlets in white-based engines.' },
      { name: 'Timeless Witness', description: 'Eternal Witness with eternalize — built-in redundancy for the best regrowth effect in the format.' },
    ],
  },
};
