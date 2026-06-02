import type { BlogPost } from '../../blogTypes';

export const bestPurpleCardsBraverse: BlogPost = {
  slug: 'best-purple-cards-cookie-run-braverse',
  game: 'cookie-run-braverse-tcg',
  category: 'card-guides',
  topicCluster: 'card-evaluation',
  tags: ['Purple', 'Graveyard'],
  title: "Best Purple Cards in Cookie Run: Braverse, Ranked",
  metaDescription:
    "The best Purple cards in Cookie Run: Braverse, ranked with real costs and effects - Dark Cacao, Moonlight, Shadow Milk and the trash-fueled engines that grind you out.",
  excerpt:
    "Purple is the graveyard color: fill your trash, mill theirs, then replay your dead and punish them for every card you've buried. Here are the real Purple cards worth building around, ranked top to bottom.",
  featuredImagePrompt:
    "A dark-violet Cookie Run: Braverse Cookie card rising over a pile of discarded cards, faint purple soul-light leaking up from the trash against a black studio backdrop.",
  heroImage:
    '/images/blog/cookie-run-braverse-tcg/best-purple-cards-cookie-run-braverse/dark-cacao-cookie.webp',
  heroImageAlt:
    'Official Dark Cacao Cookie card (BS3-100), the Ultra Rare Purple Ancient whose attack mills HP off opposing Cookies and tops the best Purple cards list in Cookie Run: Braverse.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-braverse-tcg/best-purple-cards-cookie-run-braverse/dark-cacao-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/RWSSLMshCw2ytNkZiNKelg.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/best-purple-cards-cookie-run-braverse/shadow-milk-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/IqWJeQWh2zW3FI1veimajw.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/best-purple-cards-cookie-run-braverse/moonlight-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/JPIA7ZV3FClRqX25jtt85A.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/best-purple-cards-cookie-run-braverse/silent-salt-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/sCmMVxPuH1NrYrvPxZn3gA.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
  ],
  publishDate: '2026-06-02T00:00:00.000Z',
  lastUpdated: '2026-06-02T00:00:00.000Z',
  primaryKeyword: 'best braverse purple cards',
  secondaryKeywords: [
    'best purple cards cookie run braverse',
    'braverse purple graveyard cards',
    'best purple cookies braverse',
    'cookie run braverse purple deck cards',
    'braverse purple staples',
    'how to evaluate braverse purple cards',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 11,
  toc: [
    { id: 'what-makes-a-purple-card-good', label: 'What makes a Purple card good', level: 2 },
    { id: 'how-to-read-this-list', label: 'How to read this list', level: 2 },
    { id: 'the-mill-and-trash-fillers', label: 'The mill and trash fillers', level: 2 },
    { id: 'the-recursion-engines', label: 'The recursion engines', level: 2 },
    { id: 'the-trash-threshold-payoffs', label: 'The trash-threshold payoffs', level: 2 },
    { id: 'the-cookies-purple-actually-wants', label: 'The Cookies Purple actually wants', level: 2 },
    { id: 'cards-that-look-good-but-underperform', label: 'Cards that look good but underperform', level: 2 },
    { id: 'how-many-of-each-to-run', label: 'How many of each to run', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Purple is the color that gets stronger every time something dies - including your own stuff. While Green is counting resources and Yellow is grinding the break area, a Purple deck in Cookie Run: Braverse spends the early turns dumping cards into the trash on purpose, because half its best effects don't even switch on until there are fifteen cards down there. Then it replays its dead, mills yours, and finishes you with a clock that's been getting bigger the whole game. It's the most patient color in the game, and the meanest once it's set up.

This finishes our five-color tour - we've already ranked [the best Red cards](/blog/cookie-run-braverse-tcg/best-red-cards-cookie-run-braverse), [Blue](/blog/cookie-run-braverse-tcg/best-blue-cards-cookie-run-braverse), [Green](/blog/cookie-run-braverse-tcg/best-green-cards-cookie-run-braverse) and [Yellow](/blog/cookie-run-braverse-tcg/best-yellow-cards-cookie-run-braverse), and Purple is the last one off the board. Stats below - cost, HP, and effect text - are quoted from the official card database; the {P} symbol is a single Purple resource and {N} is any color, so a cost like "two Purple, one any" is what a card actually demands. The one term that runs through the whole color is the **trash**: the discard pile where spent cards, fainted Cookies, and milled cards pile up, and the number a huge share of Purple cards check against ("15 cards or more in your trash"). If you're brand new, read [the five colors explained](/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained) and [deck archetypes](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-archetypes) first.

## What makes a Purple card good

Color identity is the lens, and Purple's identity is **milling, trash-fueled payoffs, and replaying Cookies out of the trash**. Braverse decks naturally fill the trash slowly as cards get spent; Purple's whole edge is filling it *fast* and getting paid for it. A Purple card is good when it either *grows* the trash, *cashes* a full trash into damage, or *recurs* a dead Cookie back into play. Concretely, the best Purple cards tend to do one of these:

- **Mill, on both sides.** Effects that place cards from a deck into the trash - yours to hit thresholds, theirs to set up other Purple cards and threaten a deck-out. Purple is the premier milling color.
- **Recur from the trash.** Replaying a Cookie you already paid for, or returning a key {P} card to hand, turns every faint into another play. This is the engine that out-grinds control.
- **Pay off a full trash.** A wide swath of Purple checks "if your trash contains 15 cards or more" (or 20, on the opponent's side) and rewards you with extra damage, board wipes, or a full reshuffle. The fuller the trash, the harder they hit.
- **Mill HP directly.** Purple's signature removal doesn't deal "damage" so much as *strip HP cards off* opposing Cookies - chip that ignores a lot of defensive math and adds up fast.

> The trash test: a Purple card earns its slot if it fills the trash, cashes the trash, or comes back from it. A generic beater that never touches the trash is wasting the color's whole point.

A card that's "fine" beatdown in a Red shell is a trap in Purple, because Purple isn't racing - it's burying you. Trash size and recursion are the currency, not tempo.

## How to read this list

We're grouping by *role*, not by raw power, because role is what survives a meta shift - but within each role the picks are ranked, real cards with their actual numbers. The buckets are: mill/trash fillers, recursion engines, trash-threshold payoffs, and the Cookies a Purple deck actually wants on the board. Costs and effects are quoted from the official database; the named cards span several sets (BRAVE BEGINNING through The Dark Enchantress War), so a few will rotate in relevance as new sets land. Treat the ranking as a snapshot of the current pool, not a "run exactly these" decklist.

## The mill and trash fillers

![Official Moonlight Cookie card (BS4-089), an Ultra Rare Purple six-HP Cookie that mills five cards off the opponent's deck and can place a Cookie in the trash.](/images/blog/cookie-run-braverse-tcg/best-purple-cards-cookie-run-braverse/moonlight-cookie.webp)

This is the slot that makes Purple, Purple. Everything else in the color scales off a full trash, so the first job is filling it - ideally while also milling the opponent toward a deck-out. Ranked top to bottom:

1. **Moonlight Cookie** (BS4-089, Ultra Rare, LV.3, 6 HP). The premier Purple mill body. Its Dreaming Moonlight skill places five cards off the *top of your opponent's deck* into their trash, and if they have two Cookies in their battle area it then sends one of those Cookies to the trash outright - mill plus removal on a six-HP frame. Its three-cost attack deals 3, then draws 2 and discards 1 if the opponent's trash is 15+. It feeds your plan and threatens theirs at once.
2. **Black Sapphire Cookie** (BS9-100, Super Rare, LV.3, 4 HP). The double-sided mill engine. On Play it places five off the top of *your* deck and five off the *opponent's*, and its three-cost attack deals 3 then mills another three from each player. One card hits everyone's trash threshold and pushes the opponent toward decking - exactly the symmetry Purple is happy to break.
3. **Affogato Cookie** (BS3-105, Super Rare, LV.1, 2 HP). The cheap accelerant - for one Purple, sacrifice it to make *both* players mill two, and its attack deals 2 then mills one off the opponent's deck. A one-cost body whose only job is to get your trash past 15 in a hurry, which is the most important thing a Purple deck does early.

What you're looking for in this slot, set after set, is the fastest, most efficient way to bury both decks, and Moonlight is the current benchmark. The discipline is that mill for its own sake is just shuffling cards around - every filler has to be pointed at a threshold payoff or a recursion target to actually matter.

> A Purple deck wants its trash at 15+ as early as it can manage. If you're past turn five and your trash is still thin, none of your payoffs are online and you're playing a worse version of every other color.

## The recursion engines

This is the half of Purple that turns a full trash into an unkillable board: replaying Cookies you already paid for and returning your best {P} cards to hand. Ranked:

1. **Dark Cacao Cookie** (BS3-100, Ultra Rare, LV.3, 5 HP, Ancient). The marquee Purple threat, and a recursion target as much as a payoff. Its Judgment of Resolution skill, for two Purple, selects up to two opposing Cookies and mills an HP card off each; its four-cost attack deals 3 and then mills another HP card off a Cookie. It's an Ancient that the rest of the Dark Cacao package exists to keep replaying - and the trash-fueled support around it (below) is built to bring it back over and over.
2. **Timekeeper Cookie** (BS6-093, Ultra Rare, LV.3, 5 HP). The replay engine. Its three-cost attack deals 3, then "can be used as {P}" to play a {P} Cookie with 2-or-less HP straight out of your trash - a body and a redeploy on every swing. (Its On Play even trashes one of your own LV.1 Cookies, which is upside in a deck that *wants* fuel in the trash.)
3. **Cream Unicorn Cookie** (BS2-068, Super Rare, LV.3, 5 HP). The recovery valve - discard a card to return a {P} card from your trash to your hand. It's how you get Dark Cacao or a key payoff back after it's been milled or fainted, turning the trash from a graveyard into a second hand.

The best recursion scales with the work you've already done - your trash fills naturally as you mill and trade, so these get better the longer the game runs. The risk is real: lean on recursion with no payoff and you'll just keep replaying small bodies into a wall, so the engine has to point at a threat like Dark Cacao that actually closes.

> If you can't point to the Cookie your trash exists to *replay*, you don't have a Purple deck - you have a mill deck with no kill. Build the recursion target alongside the engine, not after it.

## The trash-threshold payoffs

![Official Shadow Milk Cookie card (BS9-102), an Ultra Rare Purple BEAST EXTRA Cookie that can only be played once both players' trashes hit 20 cards and forces the opponent to discard.](/images/blog/cookie-run-braverse-tcg/best-purple-cards-cookie-run-braverse/shadow-milk-cookie.webp)

This is the slot that converts a full trash into a win, and the one new Purple players most often skip. "Payoff" means the card that, once your trash is fat, actually ends things. Ranked:

1. **Shadow Milk Cookie** (BS9-102, Ultra Rare, LV.3, 6 HP, BEAST EXTRA). The marquee late-game lock. It's an EXTRA Cookie that can only be played once *both* players' trashes hit 20 cards - which a real Purple deck reaches naturally - and its Spectacular Finale skill forces the opponent to discard when their hand is large, while its attack deals 2 and then 1 more if their trash is 20+. A six-HP BEAST that strips their hand and clock once the game's gone long is exactly the inevitability Purple wants.
2. **Caramel Arrow Cookie** (BS3-113, Ultra Rare, LV.3, 5 HP). The reset-and-sweep payoff. For one Purple, "if your trash contains 15 {P} cards or more, return all cards from your trash to your deck and shuffle it, then deal 2 damage to all of your opponent's Cookies" - a board wipe that *also* refuels your deck so you don't run out. It's the cleanest single-card "I've been milling all game, here's your reward."
3. **Stardust Cookie** (BS4-098, Ultra Rare, LV.3, 5 HP). The threshold finisher. Its skill shuts off a Cookie's HP-attached FLIP effects and pings it for 1, and its three-cost attack deals 2 then 2 *more* if your trash holds 15 {P} cards or more. Removal that becomes real reach the moment your trash is online.

The best payoffs reward the trash you've filled by playing the long game - the recurring "if your trash contains 15 cards or more" clauses mean these come online exactly when Purple wants to close. The risk: hold them when your trash is thin and they're blank, so you have to commit to the mill plan for the payoffs to fire.

## The Cookies Purple actually wants

![Official Silent Salt Cookie card (BS10-122), an Ultra Rare Purple BEAST that self-mills on play and strips an HP card off every opposing Cookie when you've refreshed your deck.](/images/blog/cookie-run-braverse-tcg/best-purple-cards-cookie-run-braverse/silent-salt-cookie.webp)

Purple is an engine-first color, but it still has to put bodies down that fill the trash, cash it, or get replayed out of it. Here's what to look for, with the real cards that fill each lane:

| Card role | Real example | Why it matters |
| --- | --- | --- |
| **Cheap trash fillers** | Affogato Cookie (BS3-105, SR) | Gets your trash to 15 fast and chip-mills the opponent |
| **Mill bodies** | Moonlight Cookie (BS4-089, UR) | Buries the opponent's deck while feeding your thresholds |
| **Recursion anchors** | Timekeeper Cookie (BS6-093, UR) | Replays a small {P} Cookie out of the trash every swing |
| **Trash-threshold threats** | Dark Cacao Cookie (BS3-100, UR) | HP-mill removal that the deck loops back repeatedly |

The single best Purple Cookie for *closing* a long game is **Silent Salt Cookie** (BS10-122, Ultra Rare, LV.3, 6 HP, BEAST). Its On Play self-mills five and draws 2 - pure trash-fuel and card flow on one body - and its four-cost attack deals 4, then, if you've refreshed (reshuffled) your deck during the game, strips an HP card off *every* opposing Cookie. In a mill deck that naturally laps its own deck, that board-wide mill is a recurring haymaker. **Lychee Dragon Cookie** (BS5-093, Ultra Rare, LV.3, 5 HP) is the confirmed Purple Dragon and the self-sustaining ping: once per turn, return three non-FLIP {P} Cookies from your trash to your deck to ping a Cookie for 1, which keeps you from milling yourself out while it grinds. And **Poison Mushroom Cookie** (BS2-055, Ultra Rare, LV.3, 5 HP) is the panic button - for one Purple, "place all LV.2 or lower Cookies from both battle areas into the trash," a symmetric sweep that resets a board you're losing *and* dumps fuel into both trashes. The discipline across all of these is the same: a Cookie earns its slot in Purple if it fills, cashes, or comes back from the trash.

## Cards that look good but underperform

A few archetypes of card consistently fool new Purple players:

- **Mill with no payoff.** Stacking Moonlight and Black Sapphire feels productive, but if your deck has no Caramel Arrow, Stardust, or Shadow Milk to *punish* a full trash, you've just helped both players draw closer to the bottom. Mill is a means, not the plan - and against another mill deck, an aimless one can deck *you* first.
- **Threshold payoffs in a deck that can't fill the trash.** Stardust's bonus damage and Caramel Arrow's wipe both need 15 {P} cards in the trash. Run them in a deck without enough cheap fillers and they're dead weight for the first six turns - exactly when you need to not be losing.
- **Generic beaters with no trash text.** A LV.3 body that just attacks for 3 is a worse Red card. Purple's threats should mill, recur, or scale off the trash (Dark Cacao, Stardust, Shadow Milk), not just be large.

> Deckbuilding tip: when in doubt, cut the third generic body for another cheap filler or a recursion piece. The most common reason a Purple deck loses is that its trash came online two turns too late - more fillers fix that, a fourth top-end threat doesn't.

## How many of each to run

A clean Purple mill shell, role by role, looks roughly like this. Treat it as a starting skeleton you tune, not gospel - and remember a legal deck is exactly 60 cards with up to four copies of any card number, at least one Cookie, and up to 16 FLIP cards.

| Role | Rough share of the deck | Anchor cards |
| --- | --- | --- |
| Mill / trash fillers | A large core block | Moonlight, Black Sapphire, Affogato |
| Recursion engines | A solid secondary block | Dark Cacao, Timekeeper, Cream Unicorn |
| Trash-threshold payoffs | A small, deliberate set | Caramel Arrow, Stardust, Shadow Milk |
| Closers / resets | A focused package | Silent Salt, Poison Mushroom |
| FLIP cards | Up to the 16-card cap | Purple FLIP draws that buy mill time |

The 60-card, four-copy, and 16-FLIP figures are the standard deck-construction limits; confirm them against the official rulebook before a sanctioned event. For the full rules on ratios and curve, see [deck-building basics](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics), and for a cheaper way into the color, our [budget deck guide](/blog/cookie-run-braverse-tcg/budget-cookie-run-braverse-deck).

## Quick Action Checklist

- **Fill the trash first.** Affogato, Moonlight, and Black Sapphire exist to get you to 15+ fast - prioritize them over top-end threats in your opening turns.
- **Always run a payoff.** Caramel Arrow's wipe-and-reshuffle and Stardust's bonus damage are why you mill; never build the engine without the cards that punish a full trash.
- **Mind the 15-card line.** A huge share of Purple reads "if your trash contains 15 {P} cards or more" - sequence your discards so the payoffs switch on when you need them.
- **Replay your dead.** Timekeeper and Cream Unicorn turn the trash into a second hand; recurring a Cookie is usually better than holding a fresh one.
- **Keep a reset.** Poison Mushroom and Caramel Arrow bail you out of a board you're losing - one or two beat a fourth generic threat.
- **Watch your own deck.** Mill cuts both ways; Lychee Dragon and Caramel Arrow return cards to your deck so you don't deck yourself before the opponent.
- **Mulligan slow openers.** A Purple hand with no early filler is a mulligan - the whole deck is built to start burying the game on turn one or two.`,
  faq: [
    {
      question: "What are the best Purple cards in Cookie Run: Braverse?",
      answer:
        "The top Purple cards are Dark Cacao Cookie (BS3-100) as the marquee HP-mill threat and recursion target, Moonlight Cookie (BS4-089) as the premier mill body, Shadow Milk Cookie (BS9-102) as a late-game BEAST lock that fires once both trashes hit 20, Caramel Arrow Cookie (BS3-113) as a reset-and-sweep payoff, and Silent Salt Cookie (BS10-122) as a board-wide mill closer. Timekeeper Cookie (BS6-093), Stardust Cookie (BS4-098), and Lychee Dragon Cookie (BS5-093) round out the recursion, threshold, and Dragon roles.",
    },
    {
      question: "What makes a card good for a Braverse Purple mill deck?",
      answer:
        "It has to fill the trash, cash it in, or come back from it. The best Purple cards mill both decks (Moonlight, Black Sapphire, Affogato), replay Cookies out of the trash (Timekeeper, Cream Unicorn), scale off a full trash via the recurring 15-card threshold (Stardust, Caramel Arrow, Shadow Milk), or strip HP cards directly off opposing Cookies (Dark Cacao). Mill with no payoff and generic beaters that ignore the trash look strong but undercut Purple's plan.",
    },
    {
      question: "What is the trash and why does Purple care about it?",
      answer:
        "The trash is Braverse's discard pile - where spent cards, milled cards, and fainted Cookies pile up. Purple is built around it twice over: it replays its own Cookies out of the trash to out-grind control, and a large share of its cards check 'if your trash contains 15 cards or more' (or 20 on the opponent's side) before they reward you with extra damage, board wipes, or a full deck refuel. Filling the trash fast is the most important thing a Purple deck does.",
    },
    {
      question: "How many mill cards should a Purple deck run?",
      answer:
        "Mill and trash fillers should be the largest single block of the deck - they switch on every other Purple card. A Purple deck wants its trash at 15 cards or more as early as possible, so prioritize cheap fillers like Affogato Cookie (BS3-105) and mill bodies like Moonlight Cookie (BS4-089) over a stack of late-game threats that do nothing while the trash is still thin.",
    },
    {
      question: "Are Dragon Cookies good in Purple?",
      answer:
        "Lychee Dragon Cookie (BS5-093, Ultra Rare, LV.3) is the confirmed Purple Dragon Cookie and a solid self-sustaining piece - once per turn it returns three non-FLIP {P} Cookies from your trash to your deck to ping an opposing Cookie for 1, which doubles as anti-mill insurance so you don't deck yourself. It fits the grind plan as a recurring source of chip that keeps your own deck stocked.",
    },
    {
      question: "Why does my Purple deck lose before its payoffs come online?",
      answer:
        "Usually because it can't fill the trash fast enough. Threshold cards like Stardust Cookie (BS4-098) and Caramel Arrow Cookie (BS3-113) need 15 {P} cards in the trash to do their best work, so a deck light on cheap fillers like Affogato Cookie (BS3-105) just sits there blank for the first several turns. Add more early mill and a reset like Poison Mushroom Cookie (BS2-055) to survive to the turn your trash switches everything on.",
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
      href: '/blog/cookie-run-braverse-tcg/best-blue-cards-cookie-run-braverse',
      anchor: 'best Blue cards',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-green-cards-cookie-run-braverse',
      anchor: 'best Green cards',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-yellow-cards-cookie-run-braverse',
      anchor: 'best Yellow cards',
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
    "The best Purple cards in Cookie Run: Braverse are the ones that fill the trash, cash it in, or come back from it. The headliners: Dark Cacao Cookie (BS3-100) is the marquee HP-mill threat the deck loops back, Moonlight Cookie (BS4-089) buries the opponent's deck while feeding your thresholds, Shadow Milk Cookie (BS9-102) is a BEAST lock once both trashes hit 20, Caramel Arrow Cookie (BS3-113) wipes the board and reshuffles your trash back in, and Silent Salt Cookie (BS10-122) strips HP off every opposing Cookie. Lean on the 15-card trash threshold, replay your dead with Timekeeper (BS6-093), and never run mill with no payoff. This finishes our five-color series.",
  itemList: {
    name: "Best Purple Cards in Cookie Run: Braverse",
    items: [
      { name: 'Dark Cacao Cookie (BS3-100)', description: 'Ultra Rare LV.3 Ancient - skill mills HP off two opposing Cookies, attack deals 3 and mills another HP card. The marquee Purple threat and the deck\'s main recursion target.' },
      { name: 'Moonlight Cookie (BS4-089)', description: 'Ultra Rare LV.3 mill body - places five off the opponent\'s deck and can trash a Cookie outright, on a six-HP frame that draws when their trash is full.' },
      { name: 'Shadow Milk Cookie (BS9-102)', description: 'Ultra Rare LV.3 BEAST EXTRA - plays only once both trashes hit 20, then forces discards and deals bonus damage off a full opposing trash. The late-game lock.' },
      { name: 'Caramel Arrow Cookie (BS3-113)', description: 'Ultra Rare LV.3 payoff - with 15 Purple cards in the trash, reshuffle the whole trash into your deck and deal 2 to all opposing Cookies. A wipe that refuels you.' },
      { name: 'Silent Salt Cookie (BS10-122)', description: 'Ultra Rare LV.3 BEAST closer - self-mills and draws on play, and strips an HP card off every opposing Cookie once you\'ve refreshed your deck. A recurring haymaker.' },
      { name: 'Timekeeper Cookie (BS6-093)', description: 'Ultra Rare LV.3 recursion engine - attack deals 3 and replays a small Purple Cookie straight out of your trash. A body and a redeploy on every swing.' },
      { name: 'Stardust Cookie (BS4-098)', description: 'Ultra Rare LV.3 threshold finisher - shuts off a Cookie\'s HP-FLIP effects and pings it, with an attack that deals 2 more when your trash holds 15 Purple cards.' },
      { name: 'Lychee Dragon Cookie (BS5-093)', description: 'Ultra Rare LV.3 Purple Dragon - returns three Purple Cookies from trash to deck to ping a Cookie, doubling as anti-mill insurance so you don\'t deck yourself.' },
    ],
  },
};
