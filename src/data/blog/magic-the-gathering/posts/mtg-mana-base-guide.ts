import type { BlogPost } from '../../blogTypes';

export const mtgManaBaseGuide: BlogPost = {
  slug: 'mtg-mana-base-guide',
  game: 'magic-the-gathering',
  category: 'format-guides',
  topicCluster: 'mana-base',
  title: 'MTG Mana Base Guide: How to Build Your Lands',
  metaDescription:
    'An MTG mana base guide: how many lands to run, counting color pips, dual/fetch/shock/fast lands, utility lands, and how Commander differs from 60-card decks.',
  excerpt:
    "The fastest way to lose a game of Magic is a mana base you eyeballed. Too few lands and you stumble; the wrong colors and your hand bricks. Here is how to count lands, count pips, and pick the right duals, fetches, and shocks for the deck you actually have.",
  featuredImagePrompt:
    'A sweeping fantasy landscape morphing between a snowy mountain pass and a flooded delta, glowing mana energy rising from the terrain, painterly Magic: The Gathering art style, blue and red palette, no text',
  heroImage: '/images/blog/magic-the-gathering/mtg-mana-base-guide/scalding-tarn.jpg',
  heroImageAlt:
    'Scalding Tarn, a blue-red fetchland that searches your library for an Island or Mountain card — a cornerstone of a two-color mana base.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-mana-base-guide/scalding-tarn.jpg',
      sourceUrl: 'https://scryfall.com/card/named?exact=Scalding%20Tarn',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-mana-base-guide/steam-vents.jpg',
      sourceUrl: 'https://scryfall.com/card/named?exact=Steam%20Vents',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-mana-base-guide/polluted-delta.jpg',
      sourceUrl: 'https://scryfall.com/card/named?exact=Polluted%20Delta',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
  ],
  publishDate: '2026-06-06T00:00:00.000Z',
  lastUpdated: '2026-06-06T00:00:00.000Z',
  primaryKeyword: 'mtg mana base guide',
  secondaryKeywords: [
    'how many lands in a deck mtg',
    'how to build a mana base mtg',
    'mtg dual lands explained',
    'fetch shock fast lands mtg',
    'mtg color pips mana base',
    'how many lands commander deck',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'evergreen',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'the-mana-base-is-the-deck', label: 'The mana base is the deck', level: 2 },
    { id: 'how-many-lands-should-you-run', label: 'How many lands should you run', level: 2 },
    { id: 'counting-color-requirements-pips-not-cards', label: 'Counting color requirements: pips, not cards', level: 2 },
    { id: 'the-land-types-explained', label: 'The land types, explained', level: 2 },
    { id: 'fetchlands-the-glue-of-a-real-mana-base', label: 'Fetchlands: the glue of a real mana base', level: 2 },
    { id: 'when-to-run-utility-lands', label: 'When to run utility lands', level: 2 },
    { id: 'commander-vs-60-card-mana-bases', label: 'Commander vs 60-card mana bases', level: 2 },
    { id: 'mana-base-mistakes-that-lose-games', label: 'Mana base mistakes that lose games', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `You can build a brilliant 60-card deck and lose every game to the dumbest opponent at the table because you ran 22 lands when you needed 24, or you splashed a third color off four untapped sources and your hand bricked. The mana base is not the boring part of deckbuilding you do last. It is the part that decides whether the rest of the deck ever gets to function.

The good news: building a mana base is mostly arithmetic, not taste. There are real numbers for how many lands a deck wants, a real method for counting which colors you need and how badly, and a clear hierarchy of which dual lands are worth the money. This guide walks all of it — land counts, color pips, the fetch/shock/fast/dual land families, when a utility land earns its slot, and where Commander breaks the 60-card rules. Card facts here are current as of the comprehensive rules and Scryfall's oracle text.

## The mana base is the deck

Every land you add is a card that does not cast a spell, and every land you cut is a turn you risk not having mana. That tension is the entire problem. A deck that floods (draws too many lands) does nothing; a deck that screws (draws too few) does nothing. Your job is to land in the narrow band where you hit your land drops on time and then stop drawing them.

The two questions that govern a mana base are separate and you solve them in order:

1. **How many lands** do I run, total? (Driven by your curve — how expensive your deck is.)
2. **Which lands**, in what colors? (Driven by your color pips — how demanding your spells are.)

Get the count wrong and you flood or screw. Get the colors wrong and you have plenty of lands but never the right ones. Both failures look the same from across the table: you sit there doing nothing.

## How many lands should you run

For a 60-card constructed deck, the baseline most competitive decks land on is **17 lands** for aggressive low-curve decks and **24-25 lands** for control. The honest default for a normal midrange 60-card deck is **24 lands** (plus a couple of cheap mana-fixing or card-filtering effects).

The rough breakdown for 60-card decks:

| Deck type | Lands | Why |
|-----------|-------|-----|
| Aggro (low curve, lots of 1-2 drops) | 16-18 | You want spells, not lands; you flood out fast otherwise |
| Midrange | 23-25 | The safe default for a 2-3 mana average curve |
| Control (top end 5-7 mana) | 25-27 | You must hit every land drop to cast your expensive spells |
| Ramp / big mana | 24-26 + ramp | Lands plus mana rocks/dorks to power out the top end |

The single most useful rule of thumb: count your **mana sources**, not just lands. A deck with 23 lands plus four cheap [mana rocks](/blog/magic-the-gathering/best-mana-rocks-commander-mtg) effectively has 27 sources. If you cut lands for ramp, you have to actually count the ramp — most flooding-and-screwing problems come from people who cut lands for spells and never added sources back.

## Counting color requirements: pips, not cards

This is the step most new builders skip, and it is the one that actually decides your land split. You do not split lands by "how many white cards versus blue cards" you have. You split by **pips** — the colored mana symbols in casting costs — weighted toward the cheap, early-game ones.

A spell that costs {W}{W}{1} has two white pips and *demands* white early. A spell that costs {4}{U} has one blue pip and you can cast it late off a single Island. Double-pip cards on turns 1-3 are what break unfocused mana bases.

The practical method:

- **Add up the colored pips** across your deck, but weight the early ones harder. A turn-1 {W} matters far more than a turn-6 {W}.
- **The more double-pip early cards a color has, the more sources it needs.** A common guideline: to reliably cast a double-pip card on curve, you want roughly 13-14+ sources of that color in a 60-card deck (in Commander, closer to 18-20+ for an early double pip).
- **Splashes are for late, single-pip cards only.** If your third color shows up only on a single-pip 5-drop, you can support it with a handful of sources. If it has a double-pip 2-drop, it is not a splash — it is a main color, and you must build for it.

The blunt version: do not splash a double-pip card. If a color demands two of its symbols early, commit to it with real sources or cut the card.

## The land types, explained

Beyond basics, the nonbasic lands sort into families. Here is what each one does and the cost it charges you.

![Steam Vents, an Izzet shockland that enters tapped unless you pay 2 life, and which counts as both an Island and a Mountain.](/images/blog/magic-the-gathering/mtg-mana-base-guide/steam-vents.jpg)

- **Shocklands** (Steam Vents, Hallowed Fountain, Watery Grave, the Ravnica cycle). Two colors. They enter the battlefield tapped *unless you pay 2 life* to have them enter untapped. Critically, they carry both basic land types (Steam Vents is an "Island Mountain"), which means fetchlands can find them. The backbone of most untapped two-color bases.
- **Dual lands ("original duals")** (Tropical Island, Underground Sea, Volcanic Island, the ABUR cycle). Two colors, two basic land types, enter untapped, no life cost, no drawback. They are strictly better than shocklands and priced like it — Reserved List, hundreds of dollars each. Legacy and Vintage only in 60-card play.
- **Fast lands** (Spirebluff Canal, Botanical Sanctum, the Kaladesh/Streets cycles). Two colors. They enter untapped *if you control two or fewer other lands* — so they are perfect in the early turns an aggro or low-curve deck cares about, and come in tapped later when you do not mind. The best untapped option for fast decks that do not want to pay life.
- **Check lands** (Glacial Fortress, Clifftop Retreat, the "buddy lands"). Enter untapped *if you control a land with the matching basic type.* Great in two-color decks with enough basics; awkward in three colors.
- **Pain lands** (Adarkar Wastes, Sulfurous Springs). Tap for colorless freely, or for either color by dealing you 1 damage. Untapped fixing on a budget, at the cost of a little life over the game.
- **Triomes / tri-lands** (Spara's Headquarters, the Ikoria and Capenna cycles). Three colors, three basic types (fetchable), always enter tapped, and can cycle away late. Non-negotiable in three-color decks, but the tapped cost means you cannot run too many.
- **Tapped duals / gain lands / scry lands** (guildgates, the Theros Temples, life-gain taplands). Always tapped, sometimes with a small upside (scry 1, gain 1 life). The budget fixing floor — fine in slow decks, a liability in fast ones.

The hierarchy for an untapped two-color base, best to worst on power: original duals → shocklands → fast lands (early) / check lands → pain lands → tapped duals. Most real decks blend several so they have untapped sources on the turns that matter.

## Fetchlands: the glue of a real mana base

Fetchlands deserve their own section because they do something no other land does. A fetchland (Scalding Tarn, Polluted Delta, the Zendikar/Onslaught cycles) reads, in effect: pay 1 life, tap, sacrifice this, and search your library for a land with the right basic land type, then shuffle.

![Polluted Delta, a fetchland that pays 1 life to search for an Island or Swamp card and shuffle the library.](/images/blog/magic-the-gathering/mtg-mana-base-guide/polluted-delta.jpg)

Why they are the glue:

- **They fix colors by fetching what you need.** A Scalding Tarn finds an Island *or* a Mountain — and because shocklands and original duals have basic land types, it can grab a Steam Vents or a Volcanic Island, not just basics. One fetch can find either of your colors and any dual that shares a type. (Note: fetchlands find lands by **type**, so a fetch only helps colors you have typed lands for. A Scalding Tarn cannot find a black source unless you run a typed land it can reach.)
- **They thin the deck slightly** and, more importantly, they let you run fewer total dual lands because each fetch is a flexible "find the right one."
- **They enable the rest of your toolbox** — shuffling for cards like Brainstorm, fueling graveyard and landfall effects, and turning on delirium.

The catch: fetchlands cost life (1 per crack, plus 2 more if you fetch a shock untapped), and they are only as good as the typed lands they can find. A fetch in a deck full of basics that share no type is just a worse basic that costs you a life. Run them when you have the dual lands to fetch — otherwise spend the money elsewhere.

## When to run utility lands

A utility land is one that does something beyond tapping for the right color. The temptation is to jam a bunch of them; the discipline is to run only as many as your color requirements can absorb, because every utility land is a land that might not tap for the color you need.

Run a utility land when:

- **It produces the right color anyway** (a "free" upside). A land that taps for your color *and* has a relevant ability is almost always worth it.
- **Your mana base can spare the consistency.** Two-color decks with clean fixing can afford a couple of colorless or off-color utility lands. A greedy three-color deck usually cannot — its color requirements eat the slots.
- **The effect closes a real gap** — a manland that becomes a creature against control, a creature-land for reach, graveyard hate against a graveyard meta.

Run *fewer* utility lands when your deck has demanding color costs (multiple double pips early) or a tight curve where a tapped or colorless land on turn 1-3 loses you the game. The rule: utility lands are a luxury you buy with leftover consistency. If you do not have consistency to spare, you do not get the luxury.

## Commander vs 60-card mana bases

Commander (a 100-card singleton format) changes the math in a few important ways:

- **You run far more lands in total: ~37-38** in a typical 99 (versus ~24 in a 60-card deck), because the deck is bigger and the games go longer. Landfall and lands-matter decks push to 40+.
- **Singleton means consistency comes from quantity and fixing, not four-ofs.** You cannot run four Steam Vents, so you lean on every dual, triome, fetch, and the format-defining fixers — Command Tower (any color in your commander's identity), Arcane Signet, and the like.
- **Color requirements scale up.** Because you only have one of each land, you need *more* sources of a color to reliably cast its double pips on time — closer to 18-20+ sources for an early double-pip in a three-color deck.
- **Tapped lands hurt less.** Slower, multiplayer games mean a triome entering tapped on turn 3 is rarely fatal the way it is in 60-card aggro, so Commander bases run more tapped fixing.
- **Utility lands get cheaper to include**, because the singleton deck wants variety and the long games reward toolboxes.

If you are building Commander specifically, we go deep on the staples, the budget swaps, and the exact land counts in the [best lands in MTG Commander](/blog/magic-the-gathering/best-lands-commander-mtg) guide and the [how to build a Commander deck](/blog/magic-the-gathering/how-to-build-a-commander-deck) walkthrough.

## Mana base mistakes that lose games

The patterns that quietly cost the most games:

- **Eyeballing the land count.** "Twenty-two feels right" is how you lose to mana screw. Count your [curve and your land-to-spell ratios](/blog/magic-the-gathering/mtg-deckbuilding-ratios), and your sources.
- **Splitting lands by card count instead of pips.** You do not need equal white and blue lands because you have equal white and blue cards — you need them weighted to wherever the early double pips are.
- **Splashing a double-pip card.** A {B}{B} two-drop is not a splash. Either commit real sources to black or cut the card.
- **Running fetchlands with nothing to fetch.** A fetch in an all-basics deck is a worse basic that costs a life. Run the duals first.
- **Too many tapped lands in a fast deck.** Three tapped lands in your opener means you are a full turn behind. Aggro and tempo decks want untapped sources; pay the life or the 2-or-fewer-lands condition instead.
- **Cutting lands for spells without adding [ramp](/blog/magic-the-gathering/best-ramp-spells-commander-mtg).** If you drop from 24 lands to 22 to fit two more spells, you just made the deck worse unless you added mana sources back.
- **Ignoring the legend rule on your fixers.** In Commander you cannot run two Command Towers — singleton fixing means redundancy comes from *different* good lands, not copies.

## Quick Action Checklist

- Pick your **land count from your curve**: ~17 for aggro, **24** for midrange, 25-27 for control, **~37** for Commander.
- Count **mana sources**, not just lands — add ramp back if you cut lands for spells.
- Split lands by **color pips**, weighted to early double-pip cards, not by card count.
- Want ~13-14+ sources of a color (60-card) to reliably cast its **early double pips**; ~18-20+ in Commander.
- For untapped two-color fixing, prioritize **shocklands and fast lands**; original duals if you can afford them.
- Run **fetchlands only when you have typed duals/shocks to fetch** — otherwise they are worse basics.
- **Do not splash a double-pip card.** Commit real sources or cut it.
- Keep **tapped lands low in fast decks**; they are fine in slow Commander games.
- Add **utility lands only with leftover consistency** — color requirements come first.`,
  faq: [
    {
      question: 'How many lands should I run in a Magic deck?',
      answer:
        'For a 60-card constructed deck, aggressive low-curve decks run about 16-18 lands, midrange decks run about 24, and control decks run 25-27. Count mana sources, not just lands — a deck with 23 lands and a few cheap mana rocks effectively has more. In Commander (a 100-card deck), the baseline is roughly 37-38 lands, scaling up to 40+ for landfall and lands-matter decks.',
    },
    {
      question: 'How do I figure out my land colors in MTG?',
      answer:
        'Count color pips — the colored mana symbols in casting costs — not the number of cards of each color, and weight the early-game pips harder. A double-pip card you want to cast on turn 2 needs many more sources of that color than a single-pip card you cast on turn 6. As a rule of thumb, you want roughly 13-14 or more sources of a color to reliably cast its early double-pip cards in a 60-card deck.',
    },
    {
      question: 'What is the difference between shocklands, fetchlands, and fast lands?',
      answer:
        'Shocklands (like Steam Vents) tap for two colors and enter untapped only if you pay 2 life; they carry both basic land types so fetchlands can find them. Fetchlands (like Scalding Tarn) sacrifice themselves and pay 1 life to search your library for a land with the right basic type, fixing colors and thinning the deck. Fast lands enter untapped only while you control two or fewer other lands, which makes them ideal early and worse late.',
    },
    {
      question: 'Do shocklands enter the battlefield tapped?',
      answer:
        'A shockland enters tapped unless you pay 2 life as it enters, in which case it enters untapped. That choice is made as the land enters the battlefield. Because shocklands also have both relevant basic land types (Steam Vents is an Island Mountain, for example), fetchlands can search them out, letting you grab an untapped dual at the cost of the 1 life from the fetch plus the 2 life from the shock.',
    },
    {
      question: 'How many lands does a Commander deck need?',
      answer:
        'About 37-38 lands for a typical 99-card Commander deck, more than a 60-card deck because the deck is larger and games run longer. Landfall and lands-matter decks push to 40 or more, while heavy-ramp decks with lots of mana rocks can drop to 35-36. Because Commander is singleton, you also need more sources of each color to reliably cast early double-pip spells — closer to 18-20 sources for a three-color deck.',
    },
    {
      question: 'Are fetchlands worth running?',
      answer:
        'Only if you have typed dual lands or shocklands for them to find. A fetchland fixes colors, thins the deck, and enables shuffle, landfall, and graveyard effects — but it searches by basic land type, so in a deck full of plain basics that share no type it is just a worse basic that costs you a life. Run the dual lands first, then add fetches to tie the mana base together.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/best-lands-commander-mtg', anchor: 'Best lands in MTG Commander' },
    { href: '/blog/magic-the-gathering/how-to-build-a-commander-deck', anchor: 'How to build a Commander deck' },
    { href: '/blog/magic-the-gathering/best-ramp-spells-commander-mtg', anchor: 'Best ramp spells in Commander' },
    { href: '/blog/magic-the-gathering/mtg-color-pie-explained', anchor: 'The MTG color pie explained' },
  ],
  externalSources: [
    {
      url: 'https://scryfall.com/search?q=type%3Aland',
      title: 'Scryfall — searching lands by type and ability',
    },
    {
      url: 'https://magic.wizards.com/en/rules',
      title: 'Wizards of the Coast — official comprehensive rules',
    },
    {
      url: 'https://www.channelfireball.com/article/frank-karsten-how-many-lands',
      title: 'ChannelFireball — Frank Karsten on land and source counts',
    },
  ],
  tldr:
    'A mana base is set by two numbers: how many lands (driven by your curve) and which colors (driven by your pips). Run about 17 lands for aggro, 24 for a 60-card midrange deck, 25-27 for control, and ~37 for Commander. Split lands by color pips weighted to early double-pip cards, not by card count, and aim for ~13-14+ sources of a color to cast its early double pips (18-20+ in Commander). For untapped fixing, prioritize shocklands and fast lands, add fetchlands only when you have typed duals to find, and run utility lands only with leftover consistency.',
  itemList: {
    name: 'MTG Land Types for Building a Mana Base',
    items: [
      { name: 'Shocklands', description: 'Two colors, both basic types; enter tapped unless you pay 2 life. Fetchable backbone of untapped two-color bases.' },
      { name: 'Fetchlands', description: 'Sacrifice and pay 1 life to search for a land of the right basic type. Fix colors, thin the deck, enable shuffle/landfall.' },
      { name: 'Fast lands', description: 'Enter untapped only while you control two or fewer other lands. Ideal early, worse late — best for aggro.' },
      { name: 'Original dual lands', description: 'Two colors, two basic types, untapped, no drawback. Strictly better than shocks but Reserved List expensive.' },
      { name: 'Check lands', description: 'Enter untapped if you control a land with the matching basic type. Strong in two-color decks with basics.' },
      { name: 'Triomes', description: 'Three colors and three basic types, always tapped, can cycle late. Essential in three-color decks.' },
      { name: 'Utility lands', description: 'Lands that do something beyond fixing. Run them only when color requirements leave room.' },
    ],
  },
};
