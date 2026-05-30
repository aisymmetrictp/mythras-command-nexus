import type { BlogPost } from '../../blogTypes';

export const bestBlueCardsBraverse: BlogPost = {
  slug: 'best-blue-cards-cookie-run-braverse',
  game: 'cookie-run-braverse-tcg',
  category: 'card-guides',
  topicCluster: 'card-evaluation',
  tags: ['Blue', 'Combo'],
  title: "Best Blue Cards in Cookie Run: Braverse, Ranked",
  metaDescription:
    "The best Blue cards in Cookie Run: Braverse, ranked with real costs and effects - Frost Queen, Pure Vanilla, Sea Fairy and the engines that win combo games.",
  excerpt:
    "Blue is the brain color: draw deep, set up, then win the game in a single explosive sequence. Here are the real Blue cards worth building a combo deck around, ranked top to bottom.",
  featuredImagePrompt:
    "A deep-blue Cookie Run: Braverse Cookie card glowing mid-combo, a fan of cards arcing behind it like a drawn hand, cool blue light against a dark studio backdrop.",
  heroImage:
    '/images/blog/cookie-run-braverse-tcg/best-blue-cards-cookie-run-braverse/frost-queen-cookie.webp',
  heroImageAlt:
    'Official Frost Queen Cookie card (BS8-083), the Ultra Rare Blue freeze-and-refill engine that tops the best Blue cards list in Cookie Run: Braverse.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-braverse-tcg/best-blue-cards-cookie-run-braverse/frost-queen-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/ZG9voycvG6B1AyIrj0_ADw.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/best-blue-cards-cookie-run-braverse/pure-vanilla-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/VOu69gjKUn29SPzhHk_TXg.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/best-blue-cards-cookie-run-braverse/sea-fairy-cookie-official.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/swbKxU4iHoIKNoZCMLWGgA.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/best-blue-cards-cookie-run-braverse/sorbet-shark-cookie-official.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/yAPC4xcajfGooV6IAkhClA.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
  ],
  publishDate: '2026-05-30T00:00:00.000Z',
  lastUpdated: '2026-05-30T00:00:00.000Z',
  primaryKeyword: 'best braverse blue cards',
  secondaryKeywords: [
    'best blue cards cookie run braverse',
    'braverse blue combo cards',
    'best blue cookies braverse',
    'cookie run braverse blue deck cards',
    'braverse blue staples',
    'how to evaluate braverse blue cards',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 11,
  toc: [
    { id: 'what-makes-a-blue-card-good', label: 'What makes a Blue card good', level: 2 },
    { id: 'how-to-read-this-list', label: 'How to read this list', level: 2 },
    { id: 'the-card-draw-engines', label: 'The card draw engines', level: 2 },
    { id: 'the-cycle-and-filter-pieces', label: 'The cycle and filter pieces', level: 2 },
    { id: 'the-combo-payoffs', label: 'The combo payoffs', level: 2 },
    { id: 'the-cookies-blue-actually-wants', label: 'The Cookies Blue actually wants', level: 2 },
    { id: 'cards-that-look-good-but-underperform', label: 'Cards that look good but underperform', level: 2 },
    { id: 'how-many-of-each-to-run', label: 'How many of each to run', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Blue is the color you lose to and don't see coming. Where Red is a stopwatch and Yellow is a war of attrition, a Blue deck spends the early game looking like it's doing nothing - drawing, cycling, holding cards - and then dumps three turns of value into one. Played well, it's the most satisfying color in Cookie Run: Braverse. Played badly, it's a deck that durdles for ten turns and then dies with the perfect hand it never got to use.

This is a ranked tour of the real Blue cards worth building around, pulled from the official card database, plus the framework for evaluating any Blue card that drops next set. Stats below - cost, HP, and effect text - are quoted from the official listings; the {B} symbol is a single Blue resource, {N} is any color, so a cost like "two Blue, one any" is what a card actually demands to fire. If you're brand new, read [the five colors explained](/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained) and [deck archetypes](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-archetypes) first - Blue has the highest skill floor of the five colors, and it shows.

## What makes a Blue card good

Color identity is the lens, and Blue's identity is **card cycling, hand manipulation, and explosive combo turns**. Because Braverse ramps slowly - you only add one Support card per turn, so resources grow steadily rather than spiking - Blue's whole edge is squeezing more out of each turn than the resource curve says you should get. A Blue card is good when it either *finds* the pieces of your plan faster or *converts* a full hand into a game-ending sequence. Concretely, the best Blue cards tend to do one of these:

- **Draw real cards.** Raw card advantage is the engine. The deck that sees more of itself assembles its combo first and has answers to spare.
- **Cycle and filter.** Effects that let you dig past dead cards or swap a useless draw for a live one are what make a combo deck consistent instead of a coin flip.
- **Turn a downside into fuel.** Blue often *wants* to discard or spend cards, and the best Blue cards reward it - several draw conditionally only when your hand is small enough, so emptying your hand isn't a cost, it's the trigger.
- **Pay off the setup.** The combo finish - the card that takes the cards you dug for and ends the game in one sequence. Without a payoff, you're just a draw engine with no kill.

> The combo test: a Blue card earns its slot if it makes your payoff turn come *sooner* or hit *harder*. Card advantage you never cash in is just a slower way to lose.

A card that's "fine" value in a Yellow control shell can be a trap in Blue, because Blue isn't trying to grind - it's trying to spike. Consistency and payoff are the currency, not incremental advantage.

## How to read this list

We're grouping by *role*, not by raw power, because role is what survives a meta shift - but within each role the picks are ranked, real cards with their actual numbers. The buckets are: card-draw engines, cycle/filter pieces, combo payoffs, and the Cookies a Blue deck actually wants on the board. Costs and effects are quoted from the official database; the named cards span several sets (Age of Heroes and Kingdoms through Land of Fire & Ruin), so a few will rotate in relevance as new sets land. Treat the ranking as a snapshot of the current pool, not a "run exactly these" decklist.

## The card draw engines

![Official Pure Vanilla Cookie card (BS3-088), an Ultra Rare Blue draw engine that draws up to three cards and sets one back on top.](/images/blog/cookie-run-braverse-tcg/best-blue-cards-cookie-run-braverse/pure-vanilla-cookie.webp)

This is the slot that makes Blue, Blue. The entire color is built on seeing more cards than your opponent and using that information to win. Ranked top to bottom:

1. **Pure Vanilla Cookie** (BS3-088, Ultra Rare, LV.3, 4 HP). Its Healing Radiance skill costs one Blue and reads: "Draw up to 3 cards from your deck. Then, place 1 card from your hand on the top of your deck." That's net +2 cards *and* a top-deck setup for one resource - the best raw draw-to-cost ratio in the color. Its attack even heals a Cookie +1 HP, so it isn't dead weight on the board.
2. **Pure Vanilla Cookie** (BS11-070, Secret Super Rare, LV.2, 4 HP). A lower-Level reprint for decks that want the engine cheaper to deploy: discard an 【Ancient】 Cookie on play, draw up to 2. Run it when your curve can't afford the LV.3 body but you still want the dig.
3. **Lime Cookie** (BS10-095, Super Rare, LV.1, 2 HP). A one-cost body whose On Play draws up to 1, then up to 1 *more* if your hand is six or fewer. Cheap, early, and exactly the kind of repeatable card advantage the deck wants to chain off of turn one.

What you're looking for in this slot, set after set, is the best draw-per-resource you can find, and Pure Vanilla is the current benchmark. The discipline is that draw without a payoff is just a prettier way to deck yourself out, so every engine card has to be paired with something to *do* with the cards.

> A Blue deck wants to be drawing or filtering nearly every turn of the early game. If you're not adding cards or quality to your hand, you're falling behind your own clock.

## The cycle and filter pieces

![Official Sorbet Shark Cookie card (BS4-077), a one-HP Super Rare Blue Cookie that loops back into your deck to draw two.](/images/blog/cookie-run-braverse-tcg/best-blue-cards-cookie-run-braverse/sorbet-shark-cookie-official.webp)

Drawing more cards is half of it; the other half is making sure the cards you draw are the *right* ones, and that you can keep the engine running without flooding out. Ranked:

1. **Sorbet Shark Cookie** (BS4-077, Super Rare, LV.1, 1 HP). The defining Blue cycle piece. Its Shark Splash skill: "Place this Cookie on the bottom of your deck. If your hand contains 5 cards or less and there is a {B} Cookie in your battle area, draw up to 2 cards from your deck." It loops itself back into the deck and refills your hand - a one-HP body you're *happy* to recycle, which is the whole point.
2. **Sea Fairy Cookie** (BS11-069, Secret Super Rare, LV.2, 4 HP). A reactive filter: once per turn, when your opponent attacks, if your hand is five or fewer, draw up to 2 and place 1 back on top. Free card selection on the opponent's turn, which is exactly when a combo deck wants to be quietly improving its hand.
3. **Black Raisin Cookie** (BS9-077, Super Rare, LV.2, 3 HP). Its On Play draws 1 and puts 1 back on top, and its attack places the Cookie back on top or bottom of the deck - pure top-deck sculpting that smooths your next two turns.

These are the effects that let you discard a dead card to draw a fresh one, dig several cards deep, or rearrange the top of your deck. They're unglamorous, and new Blue players skip them for splashier cards - which is exactly why their combo never comes together. Note how many of these *only* draw when your hand is small: emptying your hand isn't a drawback in Blue, it's the unlock.

## The combo payoffs

This is the slot that wins the game and the one that defines whether your Blue deck is actually a deck or just a draw engine with no finisher. Ranked:

1. **Sea Fairy Cookie** (BS4-073, Ultra Rare, LV.3, 5 HP). The premier Blue board-clear payoff. Her Soaring Compassion skill, for one Blue plus bouncing a small Cookie, "Deals 1 damage to all of your opponent's Cookies," and her three-cost attack deals 2 - then 2 *more* if your hand is five or more. A full hand turns her into a one-card sweeper-plus-finisher, which is the entire Blue dream in a single card.
2. **Tide Shards** (BS4-085, Super Rare Item). The payoff for a loaded hand: "Discard 4 cards. Select up to 2 of your opponent's Cookies. Those Cookies receive 1 damage each. Then, draw up to 4 cards." A two-Blue Item that removes two threats and *refills the four cards you paid* - the cleanest "spend your hand, win the exchange" card in the color.
3. **Soul Jam: Light of Truth** (BS3-091, Super Rare Item). The dig-and-equip finisher: view the top 3, take up to 2, then equip it to Pure Vanilla Cookie so that Cookie draws a card every time it attacks. This is the card that turns a draw engine into an inevitability machine.

The best payoffs scale with the work you've put in - the recurring "if your hand is five or more / five or less" clauses mean your payoff hits *because* you set it up. The risk is real: misfire the combo, or get your payoff answered, and you've spent ten turns building toward nothing.

> If you can't point to the exact card that ends the game, you don't have a combo deck - you have a pile of cantrips. Build the payoff first, then build the engine that finds it.

## The Cookies Blue actually wants

![Official Sea Fairy Cookie card (BS4-073), an Ultra Rare LV.3 Blue Cookie that deals 1 damage to all opponent Cookies and rewards a full hand with extra attack damage.](/images/blog/cookie-run-braverse-tcg/best-blue-cards-cookie-run-braverse/sea-fairy-cookie-official.webp)

Blue is an effect-first color, but it still has to survive long enough to combo, which means the Cookies it runs have a specific job: buy time, disrupt, and carry effects. Here's what to look for, with the real cards that fill each lane:

| Card role | Real example | Why it matters |
| --- | --- | --- |
| **Disruptive bodies** | Frost Queen Cookie (BS8-083, UR) | Freeze and tempo-denial keeps you alive to your payoff |
| **Defensive walls** | Cream Soda Cookie (BS7-079, UR) | Soaks attacks and shrinks incoming damage |
| **Cookies with card skills** | Sorbet Shark Cookie (BS4-077, SR) | Doubles your engine onto your board |
| **Dragon / top-end** | Lotus Dragon Cookie (BS5-071, UR) | A higher-Level removal payoff as plan B |

The single best Blue Cookie for *surviving* to your combo is **Frost Queen Cookie** (BS8-083, Ultra Rare, LV.3, 5 HP). Her Freezing Aura skill, for one Blue on play, stops one of your opponent's Cookies from being set active next turn - a clean tempo tax - and her attack deals 3 and then refills your hand back up to three cards. She's a wall, a disruptor, and a draw engine on one body, which is why she's the hero of this list.

**Cream Soda Cookie** (BS7-079, Ultra Rare, LV.2, 4 HP) is the pure defensive anchor: once per turn, when an opponent's Cookie attacks, discard a card to make that Cookie deal -1 damage. In a deck that *wants* cards in the trash, that discard is barely a cost. And the confirmed Blue Dragon Cookie, **Lotus Dragon Cookie** (BS5-071, Ultra Rare, LV.3, 5 HP), is your board-based plan B: discard three or more Blue cards to deal 2 damage to a Cookie, with an attack that draws up to 2 when your hand is small. The discipline across all of these is the same: a Cookie earns its slot in Blue if it advances the combo, defends the combo, or *is* the combo.

## Cards that look good but underperform

A few archetypes of card consistently fool new Blue players:

- **Pure card advantage with no payoff.** Engines like Lime Cookie or Captain Caviar Cookie (ST4-013) feel great, but if your deck has no Sea Fairy or Tide Shards to *win* with the extra cards, you're just postponing the loss. Card advantage is a means, not the plan.
- **High-cost combo pieces that don't defend.** A flashy three-Blue payoff that costs your whole turn and leaves you with no board is how a fast Red deck steals the game before you go off. That's the case *for* Frost Queen and Cream Soda - bodies that defend while you set up.
- **Narrow combo cards with one use.** A piece that's only good in a specific two-card combo - say, a Soul Jam that's dead unless you've drawn its exact partner - is a liability in your other fifteen draws. Favor flexible cards that filter *or* pay off over rigid single-purpose pieces.

> Deckbuilding tip: when in doubt, cut the third niche combo piece for another Sorbet Shark or filter card. The most common reason a Blue deck loses is that it never drew its payoff - consistency fixes that, a fourth win condition doesn't.

## How many of each to run

A clean Blue combo shell, role by role, looks roughly like this. Treat it as a starting skeleton you tune, not gospel - and remember a legal deck is exactly 60 cards with up to four copies of any card number, at least one Cookie, and up to 16 FLIP cards.

| Role | Rough share of the deck | Anchor cards |
| --- | --- | --- |
| Card-draw engines | A large core block | Pure Vanilla, Lime |
| Cycle / filter pieces | A solid secondary block | Sorbet Shark, Black Raisin |
| Combo payoffs | A small, deliberate set | Sea Fairy (BS4-073), Tide Shards |
| Disruptive / defensive Cookies | A focused package | Frost Queen, Cream Soda |
| FLIP cards | Up to the 16-card cap | Blue FLIP draws like Moon Rabbit Cookie that buy combo time |

The 60-card, four-copy, and 16-FLIP figures are the standard deck-construction limits; confirm them against the official rulebook before a sanctioned event. For the full rules on ratios and curve, see [deck-building basics](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics), and for a cheaper way into the color, our [budget deck guide](/blog/cookie-run-braverse-tcg/budget-cookie-run-braverse-deck).

## Quick Action Checklist

- **Build the payoff first.** Decide how your Blue deck actually wins - Sea Fairy's board clear, Tide Shards' two-for-one - then build the engine that finds it.
- **Lead with Pure Vanilla.** The BS3-088 draw-3-set-1 skill is the best draw-per-resource in the color and the backbone of the deck.
- **Run real filtering, not just raw draw.** Sorbet Shark and Black Raisin turn your combo from a coin flip into a plan.
- **Keep enough defense to survive.** Frost Queen and Cream Soda are bodies that buy the turns your combo needs; a few beat a fourth payoff.
- **Don't over-stuff payoffs.** A small, deliberate finisher set is enough - too many clogs your hand before you've set up.
- **Mind the "small hand" clauses.** A huge share of Blue draw only fires when your hand is five or fewer; sequence your spends to stay under the line.
- **Respect the skill floor.** Blue rewards knowing your deck cold. Play your lines slowly until the sequencing is automatic.`,
  faq: [
    {
      question: "What are the best Blue cards in Cookie Run: Braverse?",
      answer:
        "The top Blue cards are Frost Queen Cookie (BS8-083) as a freeze-and-refill anchor, Pure Vanilla Cookie (BS3-088) as the best draw engine (draw up to 3, set 1 back), Sea Fairy Cookie (BS4-073) as a board-clear payoff that deals 1 to all opposing Cookies, Sorbet Shark Cookie (BS4-077) as the defining cycle piece, and Tide Shards (BS4-085) as a discard-and-refill removal Item. Cream Soda Cookie (BS7-079) and Lotus Dragon Cookie (BS5-071) round out the defensive and top-end roles.",
    },
    {
      question: "What makes a card good for a Braverse combo deck?",
      answer:
        "It has to either find your combo faster or hit harder when it lands. The best Blue cards draw real cards (Pure Vanilla), filter or cycle to dig for pieces (Sorbet Shark), turn discarding into fuel - several Blue effects only draw when your hand is five or fewer - or function as the payoff itself (Sea Fairy, Tide Shards). Raw card advantage with no win condition and narrow single-use combo pieces look strong but undercut Blue's plan.",
    },
    {
      question: "Is Blue good for beginners in Braverse?",
      answer:
        "Blue has the highest skill floor of the five colors. Its payoff turns require you to know your deck cold and sequence your draws and discards precisely - many of its draw effects only fire when your hand is small enough - so most new players are better off learning the game in Red or Green first and coming back to Blue once the fundamentals are automatic.",
    },
    {
      question: "How many combo payoffs should a Blue deck run?",
      answer:
        "A small, deliberate set. Too many payoffs like Sea Fairy (BS4-073) or Tide Shards clogs your hand with cards you can't cash until you've set up, and too few means you fizzle when your one finisher gets answered. The bulk of the deck should be draw engines (Pure Vanilla) and filtering (Sorbet Shark) that reliably find the payoff.",
    },
    {
      question: "Are Dragon Cookies good in Blue combo?",
      answer:
        "Lotus Dragon Cookie (BS5-071, Ultra Rare, LV.3) is the confirmed Blue Dragon Cookie and works as a higher-Level removal payoff - discard three or more Blue cards to deal 2 damage to a Cookie, with an attack that draws up to 2 when your hand is small. It's a board-based plan B for when the pure combo gets answered, so run it as a lean top end.",
    },
    {
      question: "Why does my Blue deck keep losing before it combos off?",
      answer:
        "Usually one of two reasons: not enough defense to survive to the payoff turn, or not enough filtering so the combo never assembles. Add disruptive bodies like Frost Queen Cookie (BS8-083) and the defensive Cream Soda Cookie (BS7-079), and lean toward cycle pieces like Sorbet Shark over extra niche combo cards. A fast Red deck will punish a Blue deck that does nothing but draw with no board.",
    },
  ],
  internalLinks: [
    { href: '/blog/cookie-run-braverse-tcg', anchor: 'Braverse hub' },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained',
      anchor: 'the five colors explained',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-red-cards-cookie-run-braverse',
      anchor: 'best Red cards',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-archetypes',
      anchor: 'deck archetypes',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics',
      anchor: 'deck-building basics',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/budget-cookie-run-braverse-deck',
      anchor: 'budget deck guide',
    },
  ],
  externalSources: [
    { url: 'https://cookierunbraverse.com/en/', title: 'Official Cookie Run: Braverse site' },
    { url: 'https://play.cookieruntcg.com/cards', title: 'Official Card Database' },
    {
      url: 'https://cookierun.fandom.com/wiki/Cookie_Run_Braverse',
      title: 'Cookie Run Braverse Wiki',
    },
  ],
  tldr:
    "The best Blue cards in Cookie Run: Braverse are the ones that find your combo faster or end the game harder. The headliners: Frost Queen Cookie (BS8-083) freezes and refills to three, Pure Vanilla Cookie (BS3-088) is the best draw engine (draw 3, set 1 back), Sea Fairy Cookie (BS4-073) is a board-clear payoff that deals 1 to every opposing Cookie, Sorbet Shark Cookie (BS4-077) is the defining cycle piece, and Tide Shards (BS4-085) is a discard-and-refill removal Item. Lean on small-hand draw clauses, keep Cream Soda and Lotus Dragon for defense and top end, and avoid pure card advantage with no payoff. Blue has the highest skill floor of the five colors.",
  itemList: {
    name: "Best Blue Cards in Cookie Run: Braverse",
    items: [
      { name: 'Frost Queen Cookie (BS8-083)', description: 'Ultra Rare LV.3 disruptive anchor - freeze a Cookie on play, attack for 3 and refill your hand to three. The hero pick: wall, disruptor, and draw engine in one body.' },
      { name: 'Pure Vanilla Cookie (BS3-088)', description: 'Ultra Rare LV.3 draw engine - one Blue to draw up to 3 and set 1 card back on top. The best draw-per-resource in the color.' },
      { name: 'Sea Fairy Cookie (BS4-073)', description: 'Ultra Rare LV.3 board-clear payoff - deals 1 damage to all opposing Cookies, with an attack that hits harder when your hand is full.' },
      { name: 'Sorbet Shark Cookie (BS4-077)', description: 'Super Rare LV.1 cycle piece - loops itself to the bottom of the deck to draw up to 2 when your hand is small. The defining Blue filter.' },
      { name: 'Tide Shards (BS4-085)', description: 'Super Rare Item payoff - discard 4 to deal 1 to two Cookies, then draw 4 back. A clean two-for-one that refills what it spends.' },
      { name: 'Cream Soda Cookie (BS7-079)', description: 'Ultra Rare LV.2 defensive wall - discard a card to make an attacking Cookie deal -1 damage, buying time for the combo.' },
      { name: 'Lotus Dragon Cookie (BS5-071)', description: 'Ultra Rare LV.3 Blue Dragon Cookie - discard three-plus Blue cards for 2 damage, a board-based plan B finisher.' },
    ],
  },
};
