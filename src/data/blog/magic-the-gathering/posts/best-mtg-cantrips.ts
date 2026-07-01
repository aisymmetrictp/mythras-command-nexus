import type { BlogPost } from '../../blogTypes';

export const bestMtgCantrips: BlogPost = {
  slug: 'best-mtg-cantrips',
  game: 'magic-the-gathering',
  category: 'card-guides',
  topicCluster: 'card-rankings',
  tags: ['commander', 'cantrips', 'card-selection', 'blue', 'combo'],
  title: 'Best Cantrips in MTG, Ranked: Cheap Card Selection',
  metaDescription:
    'The best cantrips in MTG, ranked. Ponder, Preordain, Brainstorm, Serum Visions and the cheap card-selection spells that smooth every draw and fuel combo decks.',
  excerpt:
    'A cantrip replaces itself and fixes your next few draws for one mana. That is the quiet engine under every consistent blue deck. Here are the best cantrips in Magic, ranked — and the trap of running them in a deck that does not want them.',
  featuredImagePrompt:
    'A single blue mana sigil glowing over three fanned cards lifting off the top of a library, arcane sorting light, painterly Magic: The Gathering blue-magic style, no text',
  heroImage: '/images/blog/magic-the-gathering/best-mtg-cantrips/ponder.jpg',
  heroImageAlt:
    'Ponder, the one-mana blue sorcery that looks at the top three cards, reorders them, and draws a card — the gold-standard cantrip.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-mtg-cantrips/ponder.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-cantrips/brainstorm.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-cantrips/preordain.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-cantrips/serum-visions.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
  ],
  publishDate: '2026-07-01T00:00:00.000Z',
  lastUpdated: '2026-07-01T00:00:00.000Z',
  primaryKeyword: 'best cantrips mtg',
  secondaryKeywords: [
    'best cantrips magic the gathering',
    'best card selection spells mtg',
    'mtg cantrips ranked',
    'ponder vs preordain',
    'cheap card draw mtg',
    'best blue cantrips commander',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'what-a-cantrip-actually-does', label: 'What a cantrip actually does', level: 2 },
    { id: 'card-selection-vs-card-advantage', label: 'Card selection vs card advantage', level: 2 },
    { id: 'the-best-cantrips-ranked', label: 'The best cantrips, ranked', level: 2 },
    { id: 'the-blue-gold-standard', label: 'The blue gold standard', level: 3 },
    { id: 'the-supporting-cast', label: 'The supporting cast', level: 3 },
    { id: 'the-off-color-and-free-cantrips', label: 'The off-color and free cantrips', level: 3 },
    { id: 'brainstorm-is-a-trap-without-shuffles', label: 'Brainstorm is a trap without shuffles', level: 2 },
    { id: 'how-many-cantrips-to-run', label: 'How many cantrips to run', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Every consistent blue deck you have ever lost to was quietly running eight to twelve cards that did nothing on the board. No creatures, no removal, no impact you can point at in the replay. They just drew a card, fixed the next few draws, and moved on. That is a cantrip, and it is the least flashy, most format-defining card type in Magic. A cantrip does not win the game. It makes sure you draw the cards that do.

The word is old slang — a cheap spell that replaces itself. In practice a cantrip is any spell that costs one or two mana, does something small, and draws you a card so it does not cost you a card. The best ones do more than replace themselves: they let you sculpt what you draw next, which is worth far more than the raw card. This is a ranked list of the best cantrips in Magic, every card checked against Scryfall for cost, text, and Commander legality, split into the premium blue selection spells, the solid supporting cast, and the off-color and free options that show up in specific shells. If you want the bigger-ticket draw that refills your whole hand, our [best card draw in Commander](/blog/magic-the-gathering/best-card-draw-commander-mtg) guide covers the engines; this list is about the cheap smoothing that keeps a deck from stumbling.

## What a cantrip actually does

Here is the part people underrate: a cantrip's value is not the card it draws. It is the *consistency* it buys.

A 100-card Commander deck or a 60-card Constructed deck is a probability machine. Some draws are a dream, some are a fistful of lands and nothing to do with them. A cantrip smooths that curve. Ponder, for one blue mana, looks at your top three cards, lets you order them however you want, and then draws one. You are not just drawing a card — you are choosing which of your next several draws you see and in what order, and you can bin a bad top-of-library with a shuffle. That is the difference between a hand that functions and a hand that flatlines.

The math backs it up. A deck running a healthy package of cheap selection spells effectively behaves like a smaller, more consistent deck — you dig to your key pieces faster and you mulligan less because the cantrips fix keepable-but-clunky hands. Combo decks live and die on this. If your deck needs to assemble two specific cards, cantrips are how you find them turn after turn, which is exactly why they cluster in the same lists as our [best Commander combos](/blog/magic-the-gathering/best-commander-combos-mtg) and [best tutors](/blog/magic-the-gathering/best-tutors-commander-mtg) guides.

## Card selection vs card advantage

Two terms get muddled here, and the distinction decides which cantrips are good.

**Card advantage** is ending up with *more* cards than you started with. Drawing three off one spell is card advantage. Most cantrips do not do this — they replace themselves one-for-one, so your card count stays flat.

**Card selection** is improving the *quality* of the cards you have without necessarily gaining any. A cantrip that scrys or reorders your library before drawing is pure selection: same number of cards, better cards. This is the entire point of the premium cantrips. Preordain does not net you a card — you spend one, you draw one. What it buys is a scry 2 first, so the card you draw is one you chose from the top three, and the two you did not want are gone.

The reason selection beats raw advantage at one mana is efficiency. A one-mana cantrip that improves your next two draws costs you almost nothing in tempo and pays off every single game. A big draw spell is stronger in a vacuum but costs real mana you would rather spend developing. In a low-curve deck — combo, tempo, control — cheap selection is the correct tool, and it pairs naturally with the cheap interaction in our [best counterspells](/blog/magic-the-gathering/best-counterspells-mtg) rundown.

## The best cantrips, ranked

Ranked on how much they smooth your draws per mana, how flexible the timing is, and how universally they slot into the decks that want cantrips. Every card here is Commander-legal as of this writing.

![Brainstorm, the one-mana blue instant that draws three cards then puts two back on top of your library.](/images/blog/magic-the-gathering/best-mtg-cantrips/brainstorm.jpg)

### The blue gold standard

1. **Ponder** — U. Look at the top three, put them back in any order, then draw a card — and you may shuffle first. That optional shuffle is the hidden power: if the top three are all bad, you shuffle them away and draw off a fresh library. It is the most flexible one-mana selection spell in the game and the default best cantrip.
2. **Preordain** — U. Scry 2, then draw a card. You look at the top two, bin any number to the bottom, then draw. No shuffle, but the bin-to-bottom is cleaner than Ponder's reorder in a deck without shuffle effects — you get rid of the duds permanently. Neck-and-neck with Ponder and better in some builds.
3. **Brainstorm** — U. Draw three, then put two back on top in any order. At instant speed. The ceiling here is the highest of any cantrip — you can hide cards from discard, set up your next two draws perfectly, and dig three deep — but the floor is a trap. Those two cards go back on *top*, so without a way to shuffle them away you will draw them again. More on that below.
4. **Serum Visions** — U. Draw a card, then scry 2. The inverse order of Preordain — you draw first, then fix the next two draws. Slightly weaker than Preordain because you commit the draw before you see the scry, but a premium one-mana sorcery-speed cantrip and a staple wherever the format allows.

### The supporting cast

![Preordain, the one-mana blue sorcery that scrys 2 then draws a card — the cleanest pure selection cantrip.](/images/blog/magic-the-gathering/best-mtg-cantrips/preordain.jpg)

5. **Opt** — U. Scry 1, then draw a card, at instant speed. The most modest of the premium blue one-drops — only one card of selection — but instant speed and the lowest possible cost make it a fine filler in tempo and control decks that want cantrip density without overcommitting card slots.
6. **Consider** — U. Look at the top card; you may put it into your graveyard; then draw a card. At instant speed. A one-card scry that can *choose* to mill a card into the yard — which is upside, not downside, in any deck that wants graveyard fuel. A quietly excellent modern cantrip.
7. **Sleight of Hand** — U. Look at the top two cards, put one in your hand and the other on the bottom. It is a draw-plus-select that bottoms the card you skip, which is genuinely strong selection — comparable to Preordain in a shuffle-light deck — held back only by being sorcery speed.
8. **Frantic Search** — 2U. Draw two, discard two, untap up to three lands. It costs three mana but untaps up to three, so it is functionally *free* to cast — a card-neutral loot that filters two cards and effectively costs zero net mana. Absurd in graveyard and combo decks that want the discards and the free spell trigger.

### The off-color and free cantrips

9. **Faithless Looting** — R. Draw two, then discard two. Red's premier cantrip-adjacent looter. It does not gain selection so much as *dig* — you see two cards and dump two, which is exactly what a graveyard or reanimator deck wants. Not true selection, but the best red has in this slot.
10. **Gitaxian Probe** — U/P. Look at target player's hand, draw a card — and the cost can be paid with two life instead of the blue mana. A functionally free cantrip: you pay life, replace the card, and get information. In storm and combo decks it is a zero-mana library-thinner that also fuels prowess and spell-count payoffs.
11. **Mishra's Bauble** — 0. A zero-cost artifact: sacrifice it to look at the top card of a library and draw a card at the beginning of the next turn's upkeep. Free to cast, replaces itself, and thins your deck by one — a staple free cantrip in any deck that cares about spell count or wants a costless library-thinner.

Beyond the top eleven, the pool runs deep: Sleight of Hand's cousins like Impulse and Anticipate (dig several, take one), Night's Whisper and Sign in Blood on the black side (pay life to draw two — technically card advantage, not a one-for-one cantrip, but the same cheap-smoothing role), and set-specific one-drops that rotate in and out of the premium list. When in doubt, check the current printing and legality on Scryfall before you build.

## Brainstorm is a trap without shuffles

Brainstorm is the most misunderstood card on this list, so it earns its own section. On paper it is the best cantrip in Magic — draw three, put two back, at instant speed, for one mana. In the right deck it is exactly that.

The catch is those two cards go back on *top* of your library. If you have no way to shuffle them away, your next two draws are locked to whatever you put back. Cast Brainstorm with two lands you do not want, put them back, and you just guaranteed you draw two lands. That is Brainstorm turning into a downgrade — you paid a card and a mana to see three and got stuck with the worst two.

Brainstorm is elite *only* when your deck can shuffle. Fetchlands are the classic enabler — crack a fetch after Brainstorm and the two bad cards on top get shuffled into oblivion, replaced by fresh draws. Any shuffle effect works: Ponder's optional shuffle, a tutor that shuffles, a shuffle land. In a deck with a healthy fetch or shuffle count, Brainstorm is a top-three cantrip. In a deck with none, it is a worse Opt that occasionally strands you. Know which deck you have before you sleeve it up. For the fixing side of that equation, our [best lands in Commander](/blog/magic-the-gathering/best-lands-commander-mtg) guide covers the fetch and shuffle lands that make Brainstorm sing.

## How many cantrips to run

The count scales with how much your deck cares about consistency and how low your curve is.

**Combo and storm: as many as you can fit.** These decks need to find and assemble specific cards, and every cantrip digs and thins toward the pieces while fueling spell-count payoffs. Eight to twelve cheap selection spells is normal, and the free ones (Gitaxian Probe, Mishra's Bauble, Frantic Search) are close to strictly-positive includes.

**Control and tempo: a healthy package.** Six to ten cantrips keep your interaction live and your draws smooth, letting you hit land drops while holding up answers. Prioritize the instant-speed ones (Brainstorm with shuffles, Opt, Consider) so you can cantrip on the opponent's turn when you have no better play.

**Midrange and battlecruiser Commander: a light touch.** A few selection spells help any deck function, but a battlecruiser deck that wins on raw power wants impactful cards, not eight one-drops that do nothing to the board. Two to four of the best (Ponder, Preordain) as consistency glue, then spend the rest of your slots on threats and answers. In these decks, lean on the bigger refills from our [best card draw in Commander](/blog/magic-the-gathering/best-card-draw-commander-mtg) guide instead.

The through-line: cantrips are consistency, not power. They make a focused deck more reliable and a combo deck actually functional, but they do nothing on the board, so a deck that wins on board presence should run few of them. Match your cantrip count to how much you need to *find* specific cards, not to how blue your deck is.

## Quick Action Checklist

Apply this when adding cantrips to a deck:

- [ ] Ponder and Preordain are the default best cantrips — run them in almost any blue deck
- [ ] Value selection (scry, reorder, bottom the duds) over raw draw at one mana
- [ ] Only run Brainstorm if your deck can shuffle — fetches or shuffle effects, or it strands you
- [ ] Free cantrips (Gitaxian Probe, Mishra's Bauble, Frantic Search) are near-auto-includes in combo and storm
- [ ] Instant-speed cantrips (Opt, Consider, Brainstorm) let control decks cantrip on the opponent's turn
- [ ] Load up (8–12) in combo and storm; run a light touch (2–4) in battlecruiser decks
- [ ] Remember cantrips are consistency, not board impact — don't over-slot them in a power-based deck
- [ ] Check current printings and Commander legality on Scryfall before building`,
  faq: [
    {
      question: 'What is a cantrip in Magic: The Gathering?',
      answer:
        'A cantrip is a cheap spell — usually one or two mana — that does something small and draws you a card, so it replaces itself and does not cost you a card. The best cantrips, like Ponder and Preordain, also let you sculpt your next few draws with scry or library reordering, buying consistency for almost no tempo cost. They do not win games directly; they make sure you draw the cards that do.',
    },
    {
      question: 'What is the best cantrip in MTG?',
      answer:
        'Ponder is the default best cantrip — for one blue mana it looks at the top three cards, lets you reorder them, and draws one, with an optional shuffle to bin a bad top of library. Preordain is neck-and-neck and better in shuffle-light decks because its scry 2 bins the duds to the bottom permanently. Brainstorm has the highest ceiling but only in decks that can shuffle away the two cards it puts back on top.',
    },
    {
      question: 'What is the difference between card selection and card advantage?',
      answer:
        'Card advantage means ending up with more cards than you started with — drawing three off one spell. Card selection means improving the quality of the cards you have without necessarily gaining any, like scrying before you draw. Most cantrips are pure selection: they replace themselves one-for-one but let you choose better cards. At one mana, selection is more efficient than raw advantage because it costs almost no tempo and pays off every game.',
    },
    {
      question: 'Why is Brainstorm bad without fetchlands?',
      answer:
        'Brainstorm draws three cards and puts two back on top of your library. Without a way to shuffle those two cards away, your next two draws are locked to whatever you put back — so if you bin two lands you did not want, you are guaranteed to draw them again. Fetchlands and other shuffle effects fix this by shuffling the unwanted cards into the deck. In a deck with no shuffles, Brainstorm is often worse than a simple Opt.',
    },
    {
      question: 'How many cantrips should I run in a Commander deck?',
      answer:
        'It scales with your game plan. Combo and storm decks want eight to twelve cheap selection spells to find and assemble their pieces, plus the near-free ones like Gitaxian Probe and Mishra\'s Bauble. Control and tempo decks want six to ten, favoring instant-speed cantrips. A battlecruiser deck that wins on raw board power should run only two to four of the best cantrips as consistency glue and spend the rest of its slots on impactful cards.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/best-card-draw-commander-mtg', anchor: 'best card draw in Commander' },
    { href: '/blog/magic-the-gathering/best-counterspells-mtg', anchor: 'best counterspells' },
    { href: '/blog/magic-the-gathering/best-commander-combos-mtg', anchor: 'best Commander combos' },
    { href: '/blog/magic-the-gathering/best-tutors-commander-mtg', anchor: 'best tutors in Commander' },
    { href: '/blog/magic-the-gathering/best-lands-commander-mtg', anchor: 'best lands in Commander' },
  ],
  externalSources: [
    { url: 'https://scryfall.com/search?q=o%3A%22draw+a+card%22+cmc%3D1+f%3Acommander', title: 'Scryfall — one-mana cantrip search and legality data' },
    { url: 'https://mtg.fandom.com/wiki/Cantrip', title: 'MTG Wiki — cantrip definition and history' },
    { url: 'https://edhrec.com/', title: 'EDHREC — Commander cantrip inclusion data' },
  ],
  tldr:
    "A cantrip is a cheap spell that replaces itself and, at its best, sculpts your next few draws — buying consistency for almost no tempo. Ponder and Preordain are the gold-standard one-mana selection spells; Serum Visions, Opt, and Consider round out the supporting cast; Brainstorm is elite only in decks that can shuffle. Free cantrips like Gitaxian Probe and Mishra's Bauble shine in combo and storm. Value card selection over raw draw at one mana, and scale your count to how much your deck needs to find specific cards.",
  itemList: {
    name: 'Best Cantrips in MTG, Ranked',
    items: [
      { name: 'Ponder', description: 'One blue mana: look at the top three, reorder, optionally shuffle, then draw. The most flexible selection cantrip.' },
      { name: 'Preordain', description: 'One blue mana: scry 2, then draw. Bins the duds to the bottom permanently — the cleanest pure selection.' },
      { name: 'Brainstorm', description: 'One blue mana, instant: draw three, put two back on top. The highest ceiling — but only with shuffle effects.' },
      { name: 'Serum Visions', description: 'One blue mana: draw a card, then scry 2. A premium sorcery-speed cantrip, just behind Preordain.' },
      { name: 'Opt', description: 'One blue mana, instant: scry 1, then draw. The lowest-commitment premium blue cantrip.' },
      { name: 'Consider', description: 'One blue mana, instant: look at the top card, optionally mill it, then draw. Selection with graveyard upside.' },
      { name: 'Sleight of Hand', description: 'One blue mana: look at the top two, take one, bottom the other. Strong selection at sorcery speed.' },
      { name: 'Frantic Search', description: 'Draw two, discard two, untap up to three lands — functionally free. A combo and graveyard staple.' },
      { name: 'Gitaxian Probe', description: 'Draw a card and see a hand, payable with two life. A functionally free cantrip for storm and combo.' },
      { name: "Mishra's Bauble", description: 'Zero-cost artifact: sacrifice to peek at a library and draw next upkeep. A free deck-thinner and spell-count fuel.' },
    ],
  },
};
