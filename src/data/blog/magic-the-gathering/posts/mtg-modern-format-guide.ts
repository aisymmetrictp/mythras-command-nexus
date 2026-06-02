import type { BlogPost } from '../../blogTypes';

export const mtgModernFormatGuide: BlogPost = {
  slug: 'mtg-modern-format-guide',
  game: 'magic-the-gathering',
  category: 'format-guides',
  topicCluster: 'modern-format',
  title: 'Magic: The Gathering Modern Format Guide: Where to Start',
  metaDescription:
    'New to MTG Modern? What the format is, the card pool, the banned list, the five archetype families, and how to get into Modern without going broke in 2026.',
  excerpt:
    "Modern is the deepest 60-card format Magic has, and it is the one where your old cards never rotate out. Here is what Modern actually is, the archetypes that define it, and how a new player gets in without lighting a paycheck on fire.",
  featuredImagePrompt:
    'A nimble monkey thief leaping across a battlefield clutching a stolen treasure, dynamic motion, painterly fantasy art, warm light, no text',
  heroImage: '/images/blog/magic-the-gathering/mtg-modern-format-guide/ragavan-nimble-pilferer.jpg',
  heroImageAlt:
    'Ragavan, Nimble Pilferer, the one-mana red creature that defined a generation of Modern aggro and tempo decks.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-modern-format-guide/ragavan-nimble-pilferer.jpg',
      sourceUrl: 'https://scryfall.com/card/mh2/138/ragavan-nimble-pilferer',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-modern-format-guide/psychic-frog.jpg',
      sourceUrl: 'https://scryfall.com/card/mh3/199/psychic-frog',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-modern-format-guide/sheoldred-the-apocalypse.jpg',
      sourceUrl: 'https://scryfall.com/card/dmu/107/sheoldred-the-apocalypse',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-modern-format-guide/lightning-bolt.jpg',
      sourceUrl: 'https://scryfall.com/card/clu/141/lightning-bolt',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
  ],
  publishDate: '2026-06-02T00:00:00.000Z',
  lastUpdated: '2026-06-02T00:00:00.000Z',
  primaryKeyword: 'mtg modern format guide',
  secondaryKeywords: [
    'what is modern mtg',
    'how to start playing modern mtg',
    'mtg modern archetypes',
    'modern format card pool',
    'best modern decks for beginners',
    'modern banned list mtg',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'what-is-modern-in-mtg', label: 'What is Modern in MTG', level: 2 },
    { id: 'the-card-pool-and-why-it-matters', label: 'The card pool and why it matters', level: 2 },
    { id: 'the-banned-list-and-how-it-shapes-the-format', label: 'The banned list and how it shapes the format', level: 2 },
    { id: 'what-makes-modern-tick', label: 'What makes Modern tick', level: 2 },
    { id: 'the-archetype-families', label: 'The archetype families', level: 2 },
    { id: 'how-to-pick-your-first-deck', label: 'How to pick your first deck', level: 2 },
    { id: 'getting-in-without-going-broke', label: 'Getting in without going broke', level: 2 },
    { id: 'common-new-player-mistakes', label: 'Common new-player mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Modern is the format where your cards never rotate out. Buy a deck in 2026 and, banned-list permitting, it is still legal in 2030. That single fact is why Modern has been Magic's premier non-rotating 60-card format for over a decade: it rewards you for learning a deck deeply instead of rebuying a new one every fall.

It is also the format that scares new players off, usually for two reasons. One, the decks are fast and the games are decided in the first four turns, so a misplay on turn one can matter. Two, the price tags on tournament staples look terrifying. Both concerns are real and both are solvable, and this guide is about solving them.

Here is what Modern actually is, the card pool and banned list that define it, the handful of archetype families everything sorts into, and a realistic plan for getting in without setting a paycheck on fire. Everything here has been legality-checked against the current banned list, which matters, because Modern's banned list moves more than any other eternal format's and half the "Modern staples" lists online are citing cards that got banned.

## What is Modern in MTG

Modern is a 60-card constructed format. You build a minimum 60-card deck plus a 15-card sideboard, run up to four copies of any non-basic card, and play one-on-one. Standard tournament structure is best-of-three with sideboarding between games, which makes the sideboard a real part of deckbuilding rather than an afterthought.

The defining trait is the card pool. Modern is **non-rotating**: cards are legal forever once they enter the pool, unlike Standard where sets rotate out every year or so. That permanence is the whole pitch. It also means the power level only ever climbs, because every new set adds to the pool and nothing leaves except via bans.

Modern sits in the middle of the "eternal" ladder. Standard is the smallest and newest card pool; Pioneer is bigger; Modern is bigger still; Legacy and Vintage use nearly the entire history of the game. Modern is the sweet spot for most competitive players because the card pool is deep and powerful without requiring the dual lands and power-level cards that make Legacy and Vintage cost a car.

## The card pool and why it matters

Modern's card pool starts at **Eighth Edition and the Mirrodin block (2003)** — the first sets printed with the modern card frame — and runs forward to every set released since, with one important addition. Wizards prints **Modern Horizons** sets, supplemental products designed specifically to inject new cards straight into Modern without ever passing through Standard. Modern Horizons 1, 2, and 3 are where a huge share of the format's current staples come from.

![Ragavan, Nimble Pilferer, a one-mana 2/1 from Modern Horizons 2 that makes Treasure and steals cards on combat damage — the archetypal Modern Horizons power card.](/images/blog/magic-the-gathering/mtg-modern-format-guide/ragavan-nimble-pilferer.jpg)

This is the thing to internalize: a lot of the cards defining Modern were never in Standard. Ragavan, Nimble Pilferer, Psychic Frog, Solitude, Urza's Saga — these came from Modern Horizons sets or Commander products and went straight into competitive 60-card play. If you are coming from Standard or Arena and recognize none of the format-defining cards, that is why. The Modern Horizons sets are a parallel power pipeline, and they raise the floor every time one releases.

The practical upshot: you cannot evaluate Modern by what is good in Standard. The format has its own pool, its own staples, and its own power level, and the best way to learn it is to look at recent tournament results rather than assume your Standard knowledge transfers.

## The banned list and how it shapes the format

Modern has a **banned list** that Wizards updates several times a year, and it is the single most active eternal-format banlist in Magic. When a card warps the format — too fast, too consistent, too oppressive — it gets banned, and the metagame resets around the hole it leaves.

This matters for new players more than anything else in this guide, because **a banned card is not a deck you can build.** Plenty of "best Modern cards" lists online are stale and still recommend cards that have since been banned. As of mid-2026, notable bans include cards that were format pillars not long ago — among them The One Ring, Grief, Fury, and several Modern Horizons heavy-hitters that proved too strong. Always confirm a card's current legality on Scryfall before you buy a playset for Modern. The card being expensive and famous does not mean it is still legal.

The flip side: bans keep the format healthy and beatable. A banlist that moves is a sign Wizards is actively keeping any one deck from running away with the format, which is exactly what you want in a format you plan to invest in for years. When a ban lands, expect a few weeks of metagame churn, then a new equilibrium. Follow the [Wizards banned and restricted announcements](https://magic.wizards.com/en/banned-restricted-list) so a ban never catches you mid-purchase.

## What makes Modern tick

Three things define how Modern games actually play out, and understanding them is more useful than memorizing any decklist.

**Speed.** Modern is fast. The good decks are doing powerful, synergistic things by turn three or four, and a fair number can win outright by turn four under the right draw. This is why your mulligan decisions and your first three turns matter so much — there is far less room to durdle than in Commander or even Standard.

**Interaction is cheap and premium.** Because the games are fast, the best interaction is the cheapest. One-mana answers like [Lightning Bolt](/blog/magic-the-gathering/best-removal-spells-mtg), Fatal Push, and Unholy Heat, and one-mana disruption like Thoughtseize, define the "fair" side of the format. Free spells — counters and removal you can cast for an alternate cost like exiling a card — let you interact while tapped out, which is a huge deal in a format this fast.

![Sheoldred, the Apocalypse, a four-mana black creature that punishes every draw step and rewards your own — a premier midrange threat across formats.](/images/blog/magic-the-gathering/mtg-modern-format-guide/sheoldred-the-apocalypse.jpg)

**The fair-versus-unfair axis.** Every Modern deck sits somewhere on a spectrum. "Fair" decks (aggro, midrange, control) play creatures, removal, and disruption and try to win the normal way. "Unfair" decks (combo, ramp, big-mana) ignore the normal game and assemble something explosive — an infinite combo, a turn-three giant threat, a one-card lock. The format's health depends on the fair decks having enough cheap interaction to punish the unfair ones, and the unfair decks being fast enough to punish slow draws. That tension is what makes Modern Modern.

## The archetype families

Almost every Modern deck sorts into one of five families. Learning these is more durable than learning any single list, because specific decks rise and fall with each set and ban while the families stay constant.

**Aggro.** Cheap creatures, cheap burn, end the game fast. The classic is some flavor of red-based aggro built around one-drops and Lightning Bolt, plus prowess and energy-aggro shells that flood the board with cheap spells and efficient threats. Aggro punishes slow and greedy decks and is usually the cheapest archetype to build.

**Midrange.** The "good cards, good removal, grind you out" decks. These run efficient threats like Sheoldred, the Apocalypse and Psychic Frog, a full suite of cheap removal and hand disruption (Thoughtseize, Fatal Push), and they win by trading one-for-one until their card quality pulls ahead. Black-based midrange is a perennial pillar of the format because its interaction is the cheapest and most flexible.

![Psychic Frog, a two-mana blue-black creature that grows, draws cards, and protects itself — a defining midrange and tempo threat in current Modern.](/images/blog/magic-the-gathering/mtg-modern-format-guide/psychic-frog.jpg)

**Control.** Counterspells, removal, card advantage, and a small number of finishers. Control decks (usually blue-based, often Azorius or a three-color build) answer everything the opponent does and win late with a couple of threats. The hardest family to pilot well because every turn is a decision tree, but enormously rewarding once it clicks.

**Combo.** Decks built to assemble a specific game-winning interaction rather than win through combat. Some are dedicated (cast a giant creature you cheated into play; loop a card to win), others are "combo-midrange" hybrids that play fair until they pivot. Combo punishes decks that lack disruption and folds to cheap interaction like Thoughtseize and counters.

**Big mana / ramp.** Decks that cheat on mana to cast things far ahead of curve. The archetype standard-bearer is Tron — Urzatron lands (Urza's Tower, Mine, and Power Plant) that together tap for huge colorless mana to power out planeswalkers and giant threats — alongside other ramp shells. They go over the top of fair decks but stumble against fast aggro and land disruption.

If you only remember one thing here: Modern is **rock-paper-scissors with cheap interaction as the tiebreaker.** Aggro beats slow combo, combo beats durdly midrange, control beats aggro, and everyone's cheap removal and disruption keeps the matchups from being purely on rails.

## How to pick your first deck

Pick by how you like to win, not by what is winning the most tournaments this week. The most common new-player mistake is buying the format's most expensive top deck, playing it badly, and bouncing off the format.

- **If you like attacking and want to spend the least, start aggro.** Red-based aggro and prowess decks are the cheapest competitive archetypes, the games are short, and the decisions are forgiving. You learn the format's clock from the front foot.
- **If you like grinding and trading resources, start midrange.** Black-based midrange is the most flexible "good cards" deck, it teaches you the format's removal and disruption, and it stays relevant through bans because its core (cheap interaction) never gets banned out.
- **If you like answering everything, start control — but know it is the hardest to pilot.** Save it for your second deck unless you already love control in other formats.
- **If you like puzzles and explosive turns, start a combo or big-mana deck like Tron.** These reward repetition: once you know the lines, you pilot them on autopilot, which makes them great for grinders.

Whatever you pick, play 20 to 30 games before you judge it. Modern decks have a learning curve, and the first ten games of any archetype are mostly you learning what your own deck does.

## Getting in without going broke

The price tag is the real barrier, so here is the honest plan.

- **Aggro is the cheap entry point.** A competitive red-based aggro or prowess deck is consistently among the least expensive ways into the format, because its threats and burn are commons and uncommons, not chase mythics.
- **Buy the manabase last and reuse it.** Fetchlands and shocklands are the most expensive part of most decks and the most reusable. They hold value, they go in many decks, and they are the smartest long-term purchase. If you must cut a corner at first, run fewer fetches and more basics while you learn.
- **Proxy to test, then buy what you keep.** Before you drop money, test the deck on a free simulator or with proxies in casual play. Cockatrice and similar tools let you trial a list for nothing. Buy paper only once you know you actually like the deck.
- **Watch for bans before big purchases.** Never buy a four-of right before a banlist announcement if the card is a format pillar — that is how people get caught holding a playset of a freshly-banned card. Check the [official banned list](https://magic.wizards.com/en/banned-restricted-list) first.
- **Buy a known list, not a brew.** For your first deck, copy a proven tournament list from a results site rather than home-brewing. You will lose less, learn faster, and avoid buying cards that turn out to be traps.

Modern's cost is front-loaded and then it stops, which is the opposite of Standard. You pay once, the cards never rotate, and barring a ban you are set for years. That is the trade the format offers, and for a lot of players it is the best deal in competitive Magic.

## Common new-player mistakes

- **Mulliganing badly.** Modern punishes greedy keeps harder than slower formats. A hand with no early plays against an unknown field is usually a mulligan. Learn the [London mulligan](/blog/magic-the-gathering/mtg-mulligan-guide-london-mulligan) and use it.
- **Ignoring the sideboard.** Best-of-three means the sideboard is a third of your deckbuilding. Plenty of matchups are decided in games two and three by your sideboard cards, not your main deck.
- **Playing a stale list.** The format moves with every set and ban. A list from a year ago may be running banned cards or be a tier behind. Check recent results before you build.
- **Buying the most expensive deck first.** Top-tier price does not mean beginner-friendly. The hardest decks to pilot are often the priciest, which is the worst possible combination for a new player.
- **Forgetting that your Standard knowledge does not transfer.** Modern has its own pool and its own staples, many from Modern Horizons sets that never touched Standard. Evaluate cards by Modern results, not by what was good in Standard.

If you are coming from another format, our [Commander format guide](/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start) and [Limited draft guide](/blog/magic-the-gathering/mtg-limited-draft-guide-beginners) cover those entry points, and the [MTG deck archetypes explained](/blog/magic-the-gathering/mtg-deck-archetypes-explained) post breaks the aggro/midrange/control/combo families down in more depth.

## Quick Action Checklist

- Decide how you like to win: attacking (aggro), grinding (midrange), answering (control), or comboing off (combo/ramp).
- For a cheap, forgiving start, pick a red-based aggro or prowess deck.
- Copy a proven tournament list from a recent results site instead of brewing your own.
- Check every card's current Modern legality on Scryfall before buying — the banlist moves often.
- Build the sideboard, not just the main 60. Best-of-three rewards it.
- Buy your fetchlands and shocklands last; they are the most expensive and most reusable pieces.
- Test on a free simulator or with proxies before spending real money.
- Play 20 to 30 games before judging the deck — Modern has a real learning curve.
- Follow Wizards' banned-list announcements so a ban never catches you mid-purchase.`,
  faq: [
    {
      question: 'What is the Modern format in MTG?',
      answer:
        'Modern is a non-rotating 60-card constructed format. You build a minimum 60-card deck with a 15-card sideboard, run up to four copies of any non-basic card, and play one-on-one, usually best-of-three. The card pool starts at Eighth Edition and the Mirrodin block (2003) and runs forward, so cards stay legal forever unless they are banned.',
    },
    {
      question: 'How is Modern different from Standard?',
      answer:
        'Standard rotates — sets leave the format every year or so — while Modern is non-rotating, so your cards never become illegal unless they are banned. Modern also has a far larger and more powerful card pool, including cards from Modern Horizons sets that were printed straight into Modern and never appeared in Standard. The practical effect is that Modern is faster and more powerful, and your Standard card knowledge does not transfer directly.',
    },
    {
      question: 'What is the cheapest Modern deck for a beginner?',
      answer:
        'Aggro is consistently the cheapest competitive entry point. Red-based aggro and prowess decks are built mostly from commons and uncommons rather than chase mythics, the games are short and forgiving, and they teach you the format clock. The most expensive part of most other decks is the fetchland and shockland manabase, which aggro decks lean on less.',
    },
    {
      question: 'Why does Modern have so many banned cards?',
      answer:
        "Because the card pool only grows and never rotates, power creep accumulates, and Wizards bans cards that warp the format to keep it healthy and beatable. Modern's banned list is the most active among eternal formats. A banned card cannot be played, so always confirm a card's current legality on Scryfall before buying — plenty of online lists still recommend cards that have since been banned.",
    },
    {
      question: 'What are the main Modern archetypes?',
      answer:
        'Almost every Modern deck is aggro (cheap creatures and burn, win fast), midrange (efficient threats plus cheap removal and disruption, grind you out), control (counters, removal, card advantage, win late), combo (assemble a game-winning interaction), or big mana/ramp (cheat on mana to cast things ahead of curve, like Tron). Cheap interaction is the tiebreaker that keeps the matchups from being purely rock-paper-scissors.',
    },
    {
      question: 'How fast do Modern games end?',
      answer:
        'Fast. The strong decks are doing powerful, synergistic things by turn three or four, and some can win outright by turn four on a good draw. This is why mulligan decisions and the first few turns matter so much more than in slower formats like Commander, and why the cheapest interaction is the most valuable.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start', anchor: 'Commander format guide' },
    { href: '/blog/magic-the-gathering/mtg-limited-draft-guide-beginners', anchor: 'MTG Limited draft guide' },
    { href: '/blog/magic-the-gathering/mtg-deck-archetypes-explained', anchor: 'MTG deck archetypes explained' },
    { href: '/blog/magic-the-gathering/best-removal-spells-mtg', anchor: 'best removal spells guide' },
    { href: '/blog/magic-the-gathering/mtg-mulligan-guide-london-mulligan', anchor: 'London mulligan guide' },
    { href: '/glossary/magic-the-gathering', anchor: 'MTG glossary' },
  ],
  externalSources: [
    { url: 'https://magic.wizards.com/en/formats/modern', title: 'Wizards: Official Modern Format Page' },
    { url: 'https://magic.wizards.com/en/banned-restricted-list', title: 'Wizards: Official Banned and Restricted List' },
    { url: 'https://scryfall.com/', title: 'Scryfall: MTG Card Database and Legality Data' },
  ],
  tldr:
    'Modern is a non-rotating 60-card MTG format running from 2003 forward, plus cards printed straight into it via Modern Horizons sets. It is fast, powerful, and built on cheap interaction, and it sorts into five archetype families: aggro, midrange, control, combo, and big mana. To start cheaply, copy a proven red-based aggro list, build the sideboard, and check every card on the active banned list before buying.',
};
