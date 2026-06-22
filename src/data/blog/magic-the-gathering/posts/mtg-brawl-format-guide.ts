import type { BlogPost } from '../../blogTypes';

export const mtgBrawlFormatGuide: BlogPost = {
  slug: 'mtg-brawl-format-guide',
  game: 'magic-the-gathering',
  category: 'format-guides',
  topicCluster: 'brawl-format',
  tags: ['brawl', 'arena', 'singleton', 'commander', 'format-guide'],
  title: 'MTG Brawl Format Guide: Standard Brawl vs Historic Brawl',
  metaDescription:
    'What MTG Brawl actually is: Standard Brawl vs Historic Brawl, deck size, the 25-life rule, picking a commander, the banlist, and how to start on Arena.',
  excerpt:
    "Brawl is singleton Commander squeezed into a one-on-one Arena format that doesn't take forty minutes a game. Here's what Brawl is, how Standard Brawl and Historic Brawl differ, how to pick a commander, and how to build your first deck.",
  featuredImagePrompt:
    'A radiant Phyrexian angel commander descending over a battlefield, white and green divine light against a corrupted metallic sky, painterly fantasy art style, no text',
  heroImage: '/images/blog/magic-the-gathering/mtg-brawl-format-guide/atraxa-grand-unifier.jpg',
  heroImageAlt:
    'Atraxa, Grand Unifier, a seven-mana Phyrexian Angel and one of the most popular Historic Brawl commanders on MTG Arena.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-brawl-format-guide/atraxa-grand-unifier.jpg',
      sourceUrl: 'https://scryfall.com/card/one/196/atraxa-grand-unifier',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-brawl-format-guide/the-wandering-emperor.jpg',
      sourceUrl: 'https://scryfall.com/card/neo/42/the-wandering-emperor',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-brawl-format-guide/esika-god-of-the-tree.jpg',
      sourceUrl: 'https://scryfall.com/card/khm/168/esika-god-of-the-tree-the-prismatic-bridge',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
  ],
  publishDate: '2026-06-21T00:00:00.000Z',
  lastUpdated: '2026-06-21T00:00:00.000Z',
  primaryKeyword: 'mtg brawl format guide',
  secondaryKeywords: [
    'what is brawl mtg',
    'standard brawl vs historic brawl',
    'how to start playing brawl mtg',
    'brawl deck size mtg',
    'brawl banlist arena',
    'best brawl commanders',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-is-brawl-in-mtg', label: 'What is Brawl in MTG', level: 2 },
    { id: 'standard-brawl-vs-historic-brawl', label: 'Standard Brawl vs Historic Brawl', level: 2 },
    { id: 'the-rules-that-actually-change-how-you-play', label: 'The rules that actually change how you play', level: 2 },
    { id: 'picking-your-commander', label: 'Picking your commander', level: 2 },
    { id: 'the-banlist-and-why-it-exists', label: 'The banlist and why it exists', level: 2 },
    { id: 'how-to-build-your-first-brawl-deck', label: 'How to build your first Brawl deck', level: 2 },
    { id: 'common-new-player-mistakes', label: 'Common new-player mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Brawl is what you get when you take everything people love about Commander — building a deck around one legendary card, singleton variety, the political "what's my commander going to do this time" energy — and then strip out the two things that keep a lot of players away: the four-player pod that takes forty minutes to resolve, and the 100-card paper collection you have to physically assemble. Brawl lives on MTG Arena, runs one-on-one, and a game is over in the time it takes to finish a coffee.

If you have ever wanted to play Commander but couldn't get three friends in the same room, or you bounced off Standard because it felt like the same five decks every season, Brawl is the format you should be trying. Here's exactly what it is, how the two flavors of it differ, how to pick a commander, and how to build a first deck without wasting wildcards. Every card, legality, and banlist call below was checked against Scryfall's current data.

## What is Brawl in MTG

Brawl is a singleton, commander-led format that plays primarily on MTG Arena. The core rules are borrowed straight from Commander:

- You pick **one legendary creature or planeswalker** as your commander. It starts in the command zone, and you can cast it from there throughout the game.
- Your deck is **singleton** — exactly one copy of every card except basic lands.
- Your commander's color identity restricts the whole deck. If your commander is mono-white, every card in the deck has to be white or colorless.

![Atraxa, Grand Unifier, a seven-mana Phyrexian Angel with flying, vigilance, deathtouch, and lifelink that refills your hand the turn it lands — one of the format's defining commanders.](/images/blog/magic-the-gathering/mtg-brawl-format-guide/atraxa-grand-unifier.jpg)

The part that makes Brawl feel like its own thing rather than "Commander lite" is the speed. Where Commander starts you at 40 life and expects a long, multiplayer grind, Brawl is built for snappy one-on-one games. You start at **25 life** in a one-on-one match, there is **no sideboard**, and queue play is best-of-one with a free first mulligan. That combination — low-ish life total, single game, one opponent — means Brawl games are decisive. Aggression actually closes games, and the "durdle for twenty turns building an engine" plan that works in a four-player pod gets punished fast.

The other genuine selling point: because it lives on Arena, you are not buying singles. You craft cards with wildcards from a collection you build by playing. That removes the single biggest barrier to Commander for new and returning players — no $400 manabase, no tracking down an out-of-print legendary.

## Standard Brawl vs Historic Brawl

This is the one thing people get confused about, so let's be precise. Brawl comes in two flavors that share the commander-singleton skeleton but use completely different card pools.

**Standard Brawl** uses the **Standard card pool** — the same rotating set of recent expansions that powers the Standard constructed format — and decks are **60 cards** (your commander plus 59). Because it shares Standard's pool, Standard Brawl **rotates**: when a set leaves Standard, it leaves Standard Brawl with it. The power ceiling is lower, the metagame is fresher and churns with each set, and it is the friendlier of the two for a brand-new player because there are fewer busted old cards to run into.

**Historic Brawl** — which on Arena is now often labeled simply **"Brawl"** — uses the much larger **Historic card pool** (the full pool of cards available on Arena, including supplemental and Alchemy-era cards), and decks are **100 cards** (commander plus 99). It does not rotate. This is the deep, high-power version: every strong legendary and every powerful card Arena has ever printed is on the table, so the format is closer in feel to a competitive Commander pod compressed into one-on-one.

![The Wandering Emperor, a four-mana white planeswalker with flash — proof that planeswalkers, not just creatures, can sit in the command zone as your Brawl commander.](/images/blog/magic-the-gathering/mtg-brawl-format-guide/the-wandering-emperor.jpg)

Here's the quick way to remember which is which:

- **Standard Brawl** = Standard pool, 60 cards, rotates, lower power, easier on-ramp.
- **Historic Brawl ("Brawl")** = Historic pool, 100 cards, no rotation, higher power, deeper builds.

Both are singleton, both are commander-led, both start you at 25 life in one-on-one, and neither uses the commander-damage rule that Commander does. If a guide ever tells you Brawl is 40 life or uses commander damage, it is describing paper Commander, not Brawl — that is the most common piece of bad info out there, so trust the in-client rules.

## The rules that actually change how you play

A handful of Brawl-specific rules quietly reshape your deckbuilding and your in-game decisions. These are the ones that matter:

**25 life, not 40.** This is the big one. A third less life than Commander means aggressive starts are genuinely lethal and you cannot afford to durdle. Pay-life effects, shocklands, and fetch-style life loss all hurt more proportionally. Build with a real game plan to close, not just an engine that wins "eventually."

**Singleton kills consistency crutches.** You get one Counterspell, one of your best removal spell, one of everything. That means redundancy in effect matters more than the single best card — you want eight removal spells that do similar jobs, not four copies of the perfect one. It also means your commander, which you can always cast from the command zone, is your most reliable card, so it should be doing real work.

**No sideboard.** Best-of-one queue play means you build one deck that has to handle everything. You can't board in graveyard hate against the reanimator deck — your maindeck has to carry a little interaction for the things that beat you cold.

**The free mulligan.** Brawl queues give you a free first mulligan (you draw a fresh seven and only bottom a card if you mulligan again). That makes keeping greedy, two-lander hands a worse idea than it looks, because you can afford to ship a bad opener once at no cost.

## Picking your commander

In Brawl your commander is the one card you are guaranteed to have every game, so it defines your deck more than any single card defines a Standard or Modern list. Two ways to think about the pick:

![Esika, God of the Tree, a three-mana Snow legendary whose back face cheats permanents into play — the kind of five-color enabler that lets a Brawl deck rainbow into every color.](/images/blog/magic-the-gathering/mtg-brawl-format-guide/esika-god-of-the-tree.jpg)

**Pick for color identity, then for effect.** Your commander sets your colors. A mono-color commander gives you a tight, consistent manabase and a deck that is cheap to build — great for a first deck. A two- or three-color commander opens up more powerful cards at the cost of a clunkier manabase. Five-color enablers like Esika, God of the Tree let you run literally any card in the game, which is a blast, but the mana is a real cost and not where a beginner should start.

**Pick a commander that wins games, not just one that's "good value."** Because you cast it every game, your commander should either threaten to win on its own, generate an advantage opponents have to answer, or protect your plan. A strong Brawl commander is one that, left unanswered for two turns, just wins. Planeswalkers like The Wandering Emperor are popular precisely because they generate value and pressure the moment they hit, and they sit in the command zone so you always have access to that effect.

For a first deck, mono-white, mono-black, or mono-red aggro/midrange commanders are the easiest to pilot and the cheapest to assemble. Save the five-color goodstuff piles for after you understand the format's clock.

## The banlist and why it exists

Both Brawl formats have a banlist, and the bans are about keeping one-on-one games from being decided on turn one by a single card. Cards that are fine spread across a four-player table become oppressive heads-up.

The classic examples are cards like **Oko, Thief of Crowns** and **Lutri, the Spellchaser**, both of which are banned in Brawl. Oko was banned almost everywhere for being a three-mana planeswalker that took over any game; Lutri was banned because, as the only legal "companion" that fits a singleton deck, it gave certain decks a free eighth card in hand every game with no real cost. The throughline is the same: a card that is too consistent or too swingy in a one-on-one singleton format gets the axe.

Wildcard-crafting tip: **check a card's current Brawl legality before you spend wildcards on it.** Arena will usually flag illegal cards when you try to add them to a deck, but the official [banned and restricted list](https://magic.wizards.com/en/banned-restricted-list) and a quick Scryfall search are the authoritative sources, and the list shifts as new sets drop and new problem cards emerge. Don't craft four mythics' worth of a strategy around a card that's about to rotate or get banned.

## How to build your first Brawl deck

A clean, repeatable build order that won't waste wildcards:

- **Pick the commander first.** Choose one that wins games on its own and whose colors you actually want to play. Mono-color for your first deck.
- **Build the manabase to the color count.** A mono-color deck wants roughly 24-25 lands in a 60-card Standard Brawl deck (scale up for 100-card Historic Brawl). Add dual lands and fixing as you add colors — bad mana loses more Brawl games than bad spells do.
- **Run real removal.** With no sideboard, your maindeck has to answer threats. Pack a healthy spread of removal — single-target and a sweeper or two — because singleton means variety beats raw power.
- **Add a curve, not a pile of bombs.** You need cheap plays for the early turns, not just expensive haymakers. A deck of seven-drops dies to anything aggressive at 25 life.
- **Lean on your commander.** Build the 59 (or 99) to support what your commander does. The deck's job is to keep your commander relevant and protected.
- **Fill out with flexible, evergreen cards.** Card draw, a couple of counters or protection spells, and ramp if you're in green. These are the cards that keep working across every matchup.

If you have built a Commander deck before, the muscle memory mostly transfers — just remember the lower life total rewards a faster, leaner build than your paper EDH deck. If you haven't, our [how to build a Commander deck](/blog/magic-the-gathering/how-to-build-a-commander-deck) walkthrough covers the singleton-deckbuilding fundamentals that carry straight over to Brawl.

## Common new-player mistakes

- **Treating it like four-player Commander.** Brawl is one-on-one at 25 life. The slow value engine that wins a pod loses to the aggressive deck across the table. Build to actually close the game.
- **Confusing the two formats.** Standard Brawl (60 cards, Standard pool, rotates) and Historic Brawl (100 cards, Historic pool, no rotation) are different beasts. Pick which queue you're building for before you craft anything.
- **Over-investing in a rotating card for Standard Brawl.** Standard Brawl rotates with Standard. Crafting four mythics around a card that leaves the pool in a few months is how you burn wildcards.
- **Skimping on the manabase.** Singleton plus multicolor is a recipe for color screw if you cheap out on lands and fixing. Get the mana right first; it's the part that loses the most games.
- **Ignoring removal because "my deck does its own thing."** With no sideboard, the maindeck is your only line of defense. Every deck needs a way to interact with the opponent's threats.

If you're coming from a constructed background, our [Standard format guide](/blog/magic-the-gathering/mtg-standard-format-guide) covers the rotating pool Standard Brawl draws from, and the [Commander format guide](/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start) covers the singleton-and-commander framework Brawl borrows from.

## Quick Action Checklist

- Decide which format you're building for: Standard Brawl (60 cards, rotates, lower power) or Historic Brawl (100 cards, no rotation, higher power).
- Pick a commander that wins games on its own — mono-color for your first deck.
- Build the manabase to your color count before you touch the spells.
- Run a real removal package; there's no sideboard to bail you out.
- Build a curve with cheap early plays, not a pile of seven-drops — 25 life punishes slow starts.
- Check current Brawl legality on Scryfall and the official banlist before crafting expensive cards.
- Take the free first mulligan when your opener is greedy — it costs you nothing.`,
  faq: [
    {
      question: 'What is the Brawl format in MTG?',
      answer:
        'Brawl is a singleton, commander-led format that plays primarily on MTG Arena, one-on-one. You build a deck around a single legendary creature or planeswalker (your commander, which lives in the command zone), run only one copy of every other card except basic lands, and start at 25 life. It takes the Commander deckbuilding feel and compresses it into fast, decisive heads-up games with no sideboard.',
    },
    {
      question: 'What is the difference between Standard Brawl and Historic Brawl?',
      answer:
        'Standard Brawl uses the rotating Standard card pool and 60-card decks (commander plus 59), so it has a lower power level and a fresher metagame. Historic Brawl — now often just called "Brawl" on Arena — uses the much larger Historic card pool and 100-card decks (commander plus 99), does not rotate, and is a higher-power format. Both are singleton, commander-led, and start players at 25 life in one-on-one.',
    },
    {
      question: 'How many cards are in a Brawl deck?',
      answer:
        'It depends on the version. A Standard Brawl deck is 60 cards total — your commander plus 59 others. A Historic Brawl deck is 100 cards total — your commander plus 99 others. Both are singleton, meaning exactly one copy of every card except basic lands, and the whole deck must fit your commander\'s color identity.',
    },
    {
      question: 'What can be a commander in Brawl?',
      answer:
        'Any legendary creature or planeswalker that is legal in the format you are playing can be your Brawl commander. It starts in the command zone and can be cast from there throughout the game, and its color identity restricts what cards the rest of your deck can run. Planeswalker commanders are popular because they generate value and pressure the turn they land.',
    },
    {
      question: 'Does Brawl have a banlist?',
      answer:
        'Yes. Both Standard Brawl and Historic Brawl have banlists aimed at stopping single cards from dominating one-on-one singleton games. Notable bans include Oko, Thief of Crowns and Lutri, the Spellchaser. The list changes as new sets release and new problem cards emerge, so always check current legality on Scryfall or the official Wizards banned and restricted list before crafting expensive cards.',
    },
    {
      question: 'Is Brawl a good format for beginners?',
      answer:
        'Yes, especially Standard Brawl. Games are fast one-on-one matches, you build the deck on Arena with wildcards rather than buying paper singles, and the rotating Standard pool keeps the power level approachable. Start with a mono-color commander that wins games on its own, build a clean manabase, and pack real removal since there is no sideboard.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start', anchor: 'Commander format guide' },
    { href: '/blog/magic-the-gathering/mtg-standard-format-guide', anchor: 'Standard format guide' },
    { href: '/blog/magic-the-gathering/how-to-build-a-commander-deck', anchor: 'how to build a Commander deck' },
    { href: '/blog/magic-the-gathering/best-commanders-for-beginners-mtg', anchor: 'best commanders for beginners' },
  ],
  externalSources: [
    { url: 'https://magic.wizards.com/en/formats/brawl', title: 'Wizards: Official Brawl Format Page' },
    { url: 'https://magic.wizards.com/en/banned-restricted-list', title: 'Wizards: Official Banned and Restricted List' },
    { url: 'https://scryfall.com/', title: 'Scryfall: MTG Card Database and Legality Data' },
  ],
  tldr:
    'Brawl is a singleton, commander-led MTG format that plays one-on-one on Arena at 25 life with no sideboard. Standard Brawl uses the rotating Standard pool and 60-card decks; Historic Brawl (now just "Brawl") uses the larger Historic pool and 100-card decks and does not rotate. Pick a commander that wins on its own, build a clean manabase and a real removal package, and check the banlist before crafting.',
};
