import type { BlogPost } from '../../blogTypes';

export const mtgPauperFormatGuide: BlogPost = {
  slug: 'mtg-pauper-format-guide',
  game: 'magic-the-gathering',
  category: 'format-guides',
  topicCluster: 'pauper-format',
  title: 'Magic: The Gathering Pauper Format Guide: Where to Start',
  metaDescription:
    'New to MTG Pauper? What commons-only Magic is, why it is the cheapest real format, the meta pillars, the banned list, and how to build your first deck in 2026.',
  excerpt:
    "Pauper is real Magic for the price of a pizza — every card is a common, and the games are still cutthroat. Here is what Pauper actually is, the pillars of the meta, and how a newcomer gets in for almost nothing.",
  featuredImagePrompt:
    'A pair of azure water elementals rising from a stormy sea conjured by a blue spellcaster, mist and spray catching cold light, painterly Magic: The Gathering art style, no text',
  heroImage: '/images/blog/magic-the-gathering/mtg-pauper-format-guide/mulldrifter.jpg',
  heroImageAlt:
    'Mulldrifter, the five-mana blue Elemental that flies and draws two cards, the iconic value common that defines the spirit of the Pauper format.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-pauper-format-guide/mulldrifter.jpg',
      sourceUrl: 'https://scryfall.com/card/ecc/67/mulldrifter',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-pauper-format-guide/lightning-bolt.jpg',
      sourceUrl: 'https://scryfall.com/card/clu/141/lightning-bolt',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-pauper-format-guide/counterspell.jpg',
      sourceUrl: 'https://scryfall.com/card/dsc/114/counterspell',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-pauper-format-guide/lorien-revealed.jpg',
      sourceUrl: 'https://scryfall.com/card/ltr/60/lorien-revealed',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
  ],
  publishDate: '2026-06-02T00:00:00.000Z',
  lastUpdated: '2026-06-02T00:00:00.000Z',
  primaryKeyword: 'mtg pauper format guide',
  secondaryKeywords: [
    'what is pauper mtg',
    'how to start playing pauper mtg',
    'cheapest mtg format',
    'pauper banned list mtg',
    'best pauper decks for beginners',
    'pauper commons only format',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-is-pauper-in-mtg', label: 'What is Pauper in MTG', level: 2 },
    { id: 'the-commons-only-rule-and-the-catch', label: 'The commons-only rule and the catch', level: 2 },
    { id: 'why-pauper-is-the-best-budget-entry', label: 'Why Pauper is the best budget entry', level: 2 },
    { id: 'the-pillars-of-the-pauper-meta', label: 'The pillars of the Pauper meta', level: 2 },
    { id: 'the-banned-list-and-why-it-matters', label: 'The banned list and why it matters', level: 2 },
    { id: 'how-to-pick-your-first-deck', label: 'How to pick your first deck', level: 2 },
    { id: 'getting-in-for-almost-nothing', label: 'Getting in for almost nothing', level: 2 },
    { id: 'common-new-player-mistakes', label: 'Common new-player mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Pauper is the format you reach for when you want real, tournament-grade Magic and you do not want to spend a car payment to get it. The rule is simple to the point of being a joke: every card in your deck has to have been printed at common at some point in Magic's history. No rares, no mythics, no chase planeswalkers. And yet the games are some of the most refined, grindy, decision-dense Magic you can play, because two decades of "filler" commons turn out to include a frightening number of genuinely powerful cards.

That is the whole pitch. Commons are cheap, so a competitive Pauper deck often costs less than a single staple rare in another format. But the power level is not "kitchen table" — it is a real constructed format with a metagame, a banned list, premier events, and a community that takes deckbuilding seriously. Here is what Pauper actually is, the pillars the metagame sorts into, the banned list you have to respect, and a realistic plan for getting in for almost nothing. Every card and legality call below was checked against Scryfall, because Pauper legality has a wrinkle that trips up newcomers constantly.

## What is Pauper in MTG

Pauper is a non-rotating 60-card constructed format. You build a minimum 60-card deck with a 15-card sideboard, run up to four copies of any card, and play one-on-one, usually best-of-three with sideboarding between games. Structurally it is identical to Standard, Pioneer, and Modern — the deck size, the mulligan rules, the turn structure are all the same.

The one thing that changes is the card pool, and it changes hard: **a card is Pauper-legal only if it has been printed at common rarity in a set Magic recognizes.** That single rarity gate defines everything. It is not a power-level restriction (some commons are absurd) and not a price restriction (the format polices itself through rarity, not dollars). The result feels nothing like a "budget version" of anything else — Pauper has its own metagame, pillars, and deckbuilding logic.

Because the pool is non-rotating, every common ever printed stays legal forever unless it gets banned. That makes Pauper deep and stable at once: a deck you build today does not expire next fall the way a Standard deck does.

## The commons-only rule and the catch

Here is the wrinkle that catches everyone: **Pauper legality follows the card, not the specific printing in your binder.** If a card has *ever* been printed at common in any set, it is Pauper-legal — even if the copy you own is the fancy uncommon or rare version, and even if it is currently printed at a higher rarity.

That is why cards like Lightning Bolt and Counterspell are Pauper staples despite showing up at uncommon in recent sets. Both have been printed at common somewhere in their long history, so both are legal. The reverse also holds: a card that has only ever been printed at uncommon or rare is *not* Pauper-legal, no matter how cheap it is to buy.

![Lightning Bolt, the one-mana red instant that deals three damage to any target, a Pauper-legal common that anchors the format's aggressive red decks.](/images/blog/magic-the-gathering/mtg-pauper-format-guide/lightning-bolt.jpg)

The practical rule for a newcomer: **do not assume legality from the version you own or the price tag.** Check the card on Scryfall — its legality line tells you flatly whether it is Pauper-legal, mirroring Magic Online's official common list. When in doubt, search the card; do not eyeball it.

This rarity-follows-the-card design is also why Pauper has so much firepower. Workhorse cards that were printed at common in their original set — efficient removal, clean counterspells, two-for-one creatures — are all on the table, even the ones that later got bumped to uncommon to gatekeep them out of Limited.

## Why Pauper is the best budget entry

If you want into competitive 60-card Magic and money is the obstacle, Pauper is the answer, and it is not close:

- **The cards are commons, so they are cheap.** A full competitive Pauper deck frequently lands in the range of a single chase rare from another format. You are buying playsets of cards that come four-to-a-box in bulk.
- **No manabase tax.** Pauper has no fetchlands, no Reserved List duals, and no shocklands, because none of those are commons. The fixing is basics, common dual lands, cycling lands, and artifacts like Prophetic Prism — so the most expensive part of most decks is its cheapest part here.
- **It does not rotate.** Buy the deck once and it stays legal indefinitely — no yearly upgrade treadmill like Standard.
- **It plays like real Magic, not training wheels.** Pauper is tight, interactive, and skill-intensive. You are not playing a watered-down format, you are playing a deeply explored one where small edges decide games.

The honest caveat: "cheap" does not mean "free," and a few heavily-played commons have crept up in price over the years. But compared to building into Modern or Legacy the gap is enormous — Pauper is where you can own multiple competitive decks for what one Modern deck costs.

## The pillars of the Pauper meta

Rather than chase a specific top-deck list — those move with every set and ban, and a stale list is worse than no list — it is more useful to understand the pillars the metagame sorts into. These are durable; the exact decks inside them rotate.

**Aggro.** Cheap creatures and burn that close the game before the slower decks set up. Mono-red and Boros (red-white) shells lean on efficient one-drops and direct damage like Lightning Bolt; white-based "go wide" decks flood the board with small bodies and pump them. Aggro is consistently the cheapest pillar to build and the most forgiving to pilot, which makes it the classic Pauper on-ramp.

![Counterspell, the two-mana blue instant that counters target spell with no strings attached, a Pauper-legal common that anchors the format's control and tempo decks.](/images/blog/magic-the-gathering/mtg-pauper-format-guide/counterspell.jpg)

**Tempo and control.** Blue is a real color in Pauper, which surprises people coming from other budget environments. Counterspell is legal, so are clean card-advantage commons, and the format rewards decks that trade efficiently and pull ahead on cards. Tempo decks pair cheap evasive threats with countermagic and bounce to ride a small lead to the finish; dedicated control decks lean on removal, card draw, and a slow inevitability to grind the game out. Mulldrifter — a five-mana flier that draws you two cards — is the spirit animal of this whole pillar.

**Midrange and value.** The "good cards, good removal, two-for-ones" decks. These run efficient creatures that replace themselves, a flexible removal suite, and enough card advantage to win the long game. Black-based value decks are a perennial pillar because black's common removal is some of the cleanest in the format. If you like grinding opponents out one trade at a time, this is home.

**Combo and engine decks.** Pauper has genuine combo and engine decks built around commons that do something busted when assembled — affinity-style artifact decks and storm-adjacent shells. They go over the top of fair decks but fold to disruption and a fast clock, and this pillar is where the banlist does the most work, because a commons-only combo deck can get genuinely degenerate.

**Big mana / Tron.** Decks built to assemble Urza's Tower, Mine, and Power Plant for a mountain of colorless mana, then bury the table under oversized commons and card advantage. It is one of Pauper's most distinctive and longest-running archetypes.

If you only remember one framing: Pauper is **a tight, interactive format where aggro sets the clock, blue-based tempo and control fight over card advantage, and combo lives or dies by how much disruption the fair decks are running.** That tension is the heart of it.

## The banned list and why it matters

Pauper has a banned list, and it is more active than the "it's just commons" reputation suggests. When a common — or a combination of commons — warps the metagame by being too fast, too consistent, or too oppressive, it gets banned, and the format resets around the hole.

This matters more than anything else in this guide, because **a banned card is not a deck you can build.** Plenty of older "best Pauper cards" lists still recommend cards that have since been banned. As examples of how real this is: aggressive engine pieces like Kuldotha Rebirth and Basking Broodscale have been banned out of the format, and burst-mana and storm enablers like Galvanic Relay have been hit when they made a combo deck too consistent. Each of those was a centerpiece of a strong deck right up until the announcement.

The lesson is simple: **confirm a card's current Pauper legality on Scryfall before you buy a playset.** Cheap and famous does not mean legal. The official banlist lives in the Magic Online Pauper documentation, and Scryfall's legality line reflects it. The flip side is that an active banlist is the format's caretakers keeping any one commons-combo from running away with everything — which is exactly what you want in a format you plan to invest in for years.

## How to pick your first deck

Pick by how you like to win, not by what spiked the last big event. The most common new-player mistake is netdecking the format's flashiest combo deck, piloting it badly, and bouncing off the format.

- **If you like attacking and want to spend the least, start aggro.** Mono-red and other aggressive shells are the cheapest pillar, the games are short, and the decisions are forgiving. You learn the format's clock from the front foot.
- **If you like trading resources and grinding, start a midrange or value deck.** Black-based value teaches you the format's removal and card advantage, and it stays relevant through bans because cheap interaction rarely gets banned out.
- **If you like answering everything, start blue tempo or control — but know it is the hardest to pilot.** Counterspell-based decks reward repetition and game knowledge. Save pure control for your second deck unless you already love it in other formats.
- **If you like puzzles and explosive turns, start an engine or Tron deck.** These reward learning the lines cold; once you know the sequencing you pilot them on autopilot.

![Lorien Revealed, a blue common that cycles to fetch an Island early or draws three cards late, exemplifying the high-quality card advantage available in Pauper.](/images/blog/magic-the-gathering/mtg-pauper-format-guide/lorien-revealed.jpg)

Whatever you pick, play 20 to 30 games before you judge it. Every archetype has a learning curve, and the first ten games are mostly you learning what your own deck does. Card advantage commons like Mulldrifter and Lorien Revealed are why the blue decks reward patience — they bury you in resources if you let the game go long.

## Getting in for almost nothing

Cost is Pauper's entire selling point, so here is the honest plan to spend as little as possible.

- **Aggro is the cheapest door.** A competitive mono-red or aggressive build is consistently among the least expensive ways into any constructed format, because its threats and burn are bulk commons.
- **Mine your bulk first.** You almost certainly already own Pauper cards — years of draft chaff and bulk commons in a shoebox are exactly what the format is built from. Dig through it before you buy anything.
- **Magic Online is the home format.** Pauper's premier scene runs largely on Magic Online, where commons cost pennies, so it is the cheapest lab there is for testing decks before you commit to paper.
- **Buy a proven list, not a brew.** For your first deck, copy a recent tournament list rather than home-brewing. You will lose less, learn faster, and avoid buying commons that turn out to be traps.
- **Watch for bans before bulk-buying a combo deck.** If a deck's entire plan rests on one engine common, a ban can gut it. Check current legality first.

The bigger picture: Pauper lets you own *several* competitive decks for the price of one deck in almost any other constructed format. That is why a lot of grinders keep a Pauper deck around even when they mainly play something pricier.

## Common new-player mistakes

- **Assuming commons means weak.** Pauper is a real, deeply-explored format — the decks are tuned and the games are decided by small edges. Treat it like a budget toy and you will get run over.
- **Eyeballing legality.** Legality follows the card across all printings, not the version in your hand. A cheap uncommon might never have been a common (illegal); a card you think is rare-only might have a common printing (legal). Always check Scryfall.
- **Playing a stale list.** The format moves with every set and ban. A list from a year ago may be running banned cards or be a tier behind.
- **Ignoring the sideboard and interaction.** Best-of-three makes the sideboard a third of your deckbuilding, and the fair decks win by trading — new players over-invest in threats and skimp on removal and counters. Run your interaction.

If you are coming from another format, our [Modern format guide](/blog/magic-the-gathering/mtg-modern-format-guide) and [Pioneer format guide](/blog/magic-the-gathering/mtg-pioneer-format-guide) cover those entry points, the [Limited draft guide](/blog/magic-the-gathering/mtg-limited-draft-guide-beginners) covers drafting, and the [MTG deck archetypes explained](/blog/magic-the-gathering/mtg-deck-archetypes-explained) post breaks the aggro/midrange/control/combo families down in more depth.

## Quick Action Checklist

- Decide how you like to win: attacking (aggro), trading (midrange/value), answering (tempo/control), or comboing off (engine/Tron).
- For the cheapest, most forgiving start, pick a mono-red or aggressive deck.
- Dig through your bulk commons first — Pauper is built from exactly the cards most players throw in a shoebox.
- Check every card's current Pauper legality on Scryfall — legality follows the card across all printings, and the banlist is more active than people expect.
- Do not worry about an expensive manabase; Pauper fixing is commons by definition.
- Use Magic Online to test decks for pennies before committing to paper.
- Copy a proven tournament list from a recent results site instead of brewing your own.
- Build the sideboard, not just the main 60 — best-of-three rewards it.
- Run your removal and interaction; the fair decks win by trading, not by goldfishing.
- Play 20 to 30 games before judging the deck — every archetype has a learning curve.`,
  faq: [
    {
      question: 'What is the Pauper format in MTG?',
      answer:
        'Pauper is a non-rotating 60-card constructed format where every card must have been printed at common rarity at some point in Magic\'s history. You build a minimum 60-card deck with a 15-card sideboard, run up to four copies of a card, and play one-on-one, usually best-of-three. It is a real, tournament-grade format with its own metagame and banned list — not a watered-down version of another format — but because every card is a common, it is by far the cheapest way into competitive 60-card Magic.',
    },
    {
      question: 'Why is Pauper so cheap?',
      answer:
        'Because every card in a Pauper deck is a common, and commons are the cheapest cards Magic prints. There are no rares, mythics, or chase planeswalkers, and the manabase has no fetchlands or shocklands (those are not commons), so even the fixing is inexpensive. A full competitive Pauper deck often costs less than a single staple rare from another format, and the cards do not rotate, so you buy in once.',
    },
    {
      question: 'How do I know if a card is Pauper-legal?',
      answer:
        'A card is Pauper-legal if it has ever been printed at common rarity in any set, regardless of which printing you own. That means cards like Lightning Bolt and Counterspell are legal even though recent printings are uncommon, because they have common printings in their history. The reverse is also true: a card that has never been a common is not legal no matter how cheap it is. The reliable way to check is Scryfall, whose legality line mirrors the official Magic Online common list.',
    },
    {
      question: 'What are the main Pauper archetypes?',
      answer:
        'Pauper decks sort into a handful of pillars: aggro (cheap creatures and burn that win fast, like mono-red and Boros), tempo and control (blue-based decks built around Counterspell and card advantage like Mulldrifter), midrange and value (good creatures and removal that grind you out, often black-based), combo and engine decks (commons assembled into something busted), and big-mana Tron (assembling Urza lands for a pile of colorless mana). Aggro is the cheapest and most forgiving place to start.',
    },
    {
      question: 'Does Pauper have a banned list?',
      answer:
        'Yes, and it is more active than the "it is just commons" reputation suggests. When a common or a combination of commons warps the metagame, it gets banned — examples over the years include aggressive engine pieces like Kuldotha Rebirth and Basking Broodscale, and combo enablers like Galvanic Relay. A banned card cannot be played, so always confirm a card\'s current Pauper legality on Scryfall before buying a playset, especially if a deck\'s whole plan rests on one engine common.',
    },
    {
      question: 'Is Pauper a good format for beginners?',
      answer:
        'It is one of the best. The low cost means a mistake in deck choice does not cost much, you can own several decks to experiment with, and the games are genuinely interactive and skill-rewarding, so you learn real Magic fundamentals. Start with a cheap aggro deck to learn the clock, test on Magic Online where commons cost pennies, and copy a proven list before brewing your own.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/mtg-modern-format-guide', anchor: 'Modern format guide' },
    { href: '/blog/magic-the-gathering/mtg-pioneer-format-guide', anchor: 'Pioneer format guide' },
    { href: '/blog/magic-the-gathering/mtg-limited-draft-guide-beginners', anchor: 'MTG Limited draft guide' },
    { href: '/blog/magic-the-gathering/mtg-deck-archetypes-explained', anchor: 'MTG deck archetypes explained' },
    { href: '/blog/magic-the-gathering/best-counterspells-mtg', anchor: 'Best counterspells in MTG' },
  ],
  externalSources: [
    { url: 'https://magic.wizards.com/en/formats/pauper', title: 'Wizards: Official Pauper Format Page' },
    { url: 'https://magic.wizards.com/en/banned-restricted-list', title: 'Wizards: Official Banned and Restricted List' },
    { url: 'https://scryfall.com/', title: 'Scryfall: MTG Card Database and Legality Data' },
  ],
  tldr:
    'Pauper is a non-rotating 60-card MTG format where every card must have been printed at common, making it the cheapest way into competitive constructed Magic — full decks often cost less than a single staple rare elsewhere. Legality follows the card across all printings, so staples like Lightning Bolt and Counterspell are legal. The meta sorts into aggro, blue-based tempo/control, midrange value, combo/engine, and Tron. To start, pick a cheap mono-red aggro list, mine your bulk commons, and check every card on the active banned list before buying.',
};
