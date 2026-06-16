import type { BlogPost } from '../../blogTypes';

export const bestCommanderStaplesMtg: BlogPost = {
  slug: 'best-commander-staples-mtg',
  game: 'magic-the-gathering',
  category: 'card-guides',
  topicCluster: 'commander-staples',
  tags: ['commander', 'staples', 'deckbuilding'],
  title: 'Best Commander Staples Every Deck Wants, Ranked',
  metaDescription:
    'The best Commander staples ranked by category: ramp, card draw, removal, protection, and lands. The near-universal EDH includes every deck quietly runs.',
  excerpt:
    "There's a short list of cards that show up in basically every Commander deck regardless of theme — the silent 25 that make the splashy 75 work. Here are the staples worth a slot in almost any list, sorted by the job they do, with the legality double-checked.",
  featuredImagePrompt:
    'A spread of glowing Magic: The Gathering artifacts and spell scrolls fanned out on a stone table — a ringed sun device, an ornate command tower, swirling counterspell energy — radiating multicolored mana, dramatic fantasy lighting, painterly Magic art style, no text',
  heroImage: '/images/blog/magic-the-gathering/best-commander-staples-mtg/sol-ring.jpg',
  heroImageAlt:
    'Sol Ring, the one-mana artifact that taps for two colorless and is the single most-played card in Commander.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-commander-staples-mtg/sol-ring.jpg',
      sourceUrl: 'https://scryfall.com/card/msc/211/sol-ring',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-commander-staples-mtg/swords-to-plowshares.jpg',
      sourceUrl: 'https://scryfall.com/card/msc/143/swords-to-plowshares',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-commander-staples-mtg/counterspell.jpg',
      sourceUrl: 'https://scryfall.com/card/dsc/114/counterspell',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-commander-staples-mtg/command-tower.jpg',
      sourceUrl: 'https://scryfall.com/card/msc/233/command-tower',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
  ],
  publishDate: '2026-06-11T00:00:00.000Z',
  lastUpdated: '2026-06-11T00:00:00.000Z',
  primaryKeyword: 'best commander staples',
  secondaryKeywords: [
    'commander staples ranked',
    'best edh staples',
    'commander auto includes',
    'best cards for every commander deck',
    'mtg commander staples list',
    'commander deck staples by category',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-makes-a-card-a-staple', label: 'What makes a card a staple', level: 2 },
    { id: 'ramp-the-card-that-defines-the-format', label: 'Ramp — the card that defines the format', level: 2 },
    { id: 'card-draw-the-engine-that-keeps-you-alive', label: 'Card draw — the engine that keeps you alive', level: 2 },
    { id: 'removal-an-answer-for-anything', label: 'Removal — an answer for anything', level: 2 },
    { id: 'protection-and-interaction', label: 'Protection and interaction', level: 2 },
    { id: 'lands-the-staples-people-forget', label: 'Lands — the staples people forget', level: 2 },
    { id: 'staples-that-are-actually-traps', label: 'Staples that are actually traps', level: 2 },
    { id: 'how-many-staple-slots-do-you-have', label: 'How many staple slots do you have', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Open any two Commander decks at the table and they'll share maybe ten cards before you even look at the theme. Different commanders, different colors, completely different gameplans — and yet both are running Sol Ring, both have an Arcane Signet, both packed Swords to Plowshares or its closest legal cousin. Those overlapping cards are the staples: the includes that earn a slot not because they fit a strategy, but because every strategy needs the job they do.

This is the honest list of those cards, sorted by category instead of crammed into one fake 1-to-50 ranking — because "best ramp" and "best removal" aren't competing for the same slot, they're competing for *different* slots in the same 99. Every card here is current Commander-legal (checked against Scryfall, which is also where I'll keep pointing you), and I'm deliberately leaving out the famous bans, because half the "staples" lists floating around still tell you to run Mana Crypt and Dockside Extortionist. Both got banned in September 2024. You can't play them. Moving on.

A quick framing note: a staple is not the same as a power-level pick. Sol Ring is a staple *and* a powerhouse. Command Tower is a staple and completely unexciting. The point of this guide is the unexciting ones too — the silent 25 that make the splashy 75 actually function.

## What makes a card a staple

A staple clears three bars at once:

1. **It does a job every deck needs.** Mana, cards, removal, protection, fixing. The five things that aren't optional in a 100-card singleton format.
2. **It's color-agnostic or nearly so.** Either it's colorless (Sol Ring, Command Tower) or it's the single most efficient card in its color at the job (Swords to Plowshares in white, Counterspell in blue).
3. **It's efficient enough to never feel bad to draw.** A staple is a card you're happy to see in your opening hand in any matchup. If it's situational, it's a tech card, not a staple.

> The tell for a real staple: you'd run it even if you forgot what your commander does. If the card only makes sense once you know the deck's theme, it's a build-around, not a staple. Staples are the cards you sleeve up *first*, before you've decided anything else.

The categories below are roughly the order you should fill them in a new deck: ramp first, then draw, then removal, then protection, then make the lands actually produce the right colors.

## Ramp — the card that defines the format

![Sol Ring, the colorless one-mana artifact that taps for two and shows up in nearly every Commander deck.](/images/blog/magic-the-gathering/best-commander-staples-mtg/sol-ring.jpg)

If a card belongs on a "literally every deck" list, it's Sol Ring. One mana for an artifact that taps for two colorless, every turn, forever. It's the most-played card in the entire format and it isn't close — a turn-one Sol Ring means you're casting four-drops on turn three while the table is still playing a land and passing. Any deck that can legally run it, runs it.

| Card | Cost | Job | Why it's a staple |
| --- | --- | --- | --- |
| Sol Ring | {1} | Colorless ramp | Two mana off one. The single most-played card in Commander |
| Arcane Signet | {2} | Color fixing + ramp | Taps for any color in your commander's identity. No downside |
| Cultivate | {2}{G} | Land ramp (green) | Two basics, one to the field, one to hand. Fixes and ramps |
| Fellwar Stone | {2} | Color fixing | Taps for any color an opponent's land makes — free fixing in most pods |
| Mind Stone | {2} | Ramp + late draw | Taps for one early, sacks for a card when you flood |

**Sol Ring and Arcane Signet are the two true near-universal artifacts.** Arcane Signet taps for any color in your commander's color identity, enters untapped, and has zero activation cost — it's the cleanest two-mana fixer ever printed, and every multicolor deck runs it. After those two, the slot count scales with your colors and whether you're green.

Green decks lean on land-based ramp like **Cultivate** and its functional twin Kodama's Reach, because lands survive board wipes in a way artifacts don't. Non-green decks lean harder on rocks. The full breakdown of both lives in our [best mana rocks guide](/blog/magic-the-gathering/best-mana-rocks-commander-mtg) and the [best ramp spells guide](/blog/magic-the-gathering/best-ramp-spells-commander-mtg) — for staple purposes, just know that Sol Ring plus Arcane Signet is the non-negotiable core, and everything else is volume tuned to your curve.

## Card draw — the engine that keeps you alive

Commander is a grindy, multi-hour format where the player who runs out of cards first usually loses. You're effectively fighting three opponents, so you burn through your hand fast — and the decks that keep refilling are the decks still in the game on turn twelve. Card draw is the staple category people *underbuild* most often.

| Card | Cost | Color | What it does |
| --- | --- | --- | --- |
| Rhystic Study | {2}{U} | Blue | Draw a card whenever an opponent casts a spell unless they pay 1. Nobody pays |
| Esper Sentinel | {W} | White | Taxes opponents' noncreature spells; draws you cards when they don't pay |
| Sylvan Library | {1}{G} | Green | See three cards a turn, keep extras by paying life. Card selection engine |
| Night's Whisper | {1}{B} | Black | Draw two, lose 2 life. The cleanest cheap black draw spell |
| Phyrexian Arena | {1}{B}{B} | Black | An extra card every upkeep for 1 life. Steady, relentless advantage |

**Rhystic Study is the most famous repeatable draw engine in the format** for a reason: in a four-player game, opponents either pay the "1" tax over and over or they hand you a card, and in practice the table gets tired of paying. It single-handedly answers blue's "do I have enough gas" question. **Esper Sentinel** does the white version of the same trick on a one-drop body.

The black draw spells (Night's Whisper, Phyrexian Arena, and the bigger payoffs) are staples because black is willing to convert life into cards, and 40 life is a lot of resource to spend. If you're in black, you should be running multiple. Our [best card draw guide](/blog/magic-the-gathering/best-card-draw-commander-mtg) ranks the whole category — the staple takeaway is simpler: every deck wants 8 to 12 sources of card advantage, and most under-built decks are short by half.

## Removal — an answer for anything

![Swords to Plowshares, the one-mana white instant that exiles a creature — the most efficient removal spell in Magic.](/images/blog/magic-the-gathering/best-commander-staples-mtg/swords-to-plowshares.jpg)

You will sit across from a commander that ends the game if it connects twice, and you need to be able to say no. Premium single-target removal is a staple in every color that gets it, and the best ones are absurdly cheap.

| Card | Cost | Color | Hits |
| --- | --- | --- | --- |
| Swords to Plowshares | {W} | White | Exiles a creature for one mana. The most efficient removal ever printed |
| Path to Exile | {W} | White | Exiles a creature; they get a basic land. The other premier white one-drop |
| Generous Gift | {2}{W} | White | Destroys *any* permanent; they get a 3/3. Flexible catch-all |
| Beast Within | {2}{G} | Green | Destroys any permanent; they get a 3/3. Green's universal answer |
| Chaos Warp | {2}{R} | Red | Shuffles any permanent away. Red's only clean answer to enchantments |

**Swords to Plowshares is the gold standard.** One white mana, exile the creature — no destroy, no regeneration, no death triggers, just gone. The lifegain drawback for your opponent is meaningless in a 40-life format. If you're in white, it's an auto-include alongside Path to Exile.

The reason removal sprawls across colors is the color pie: white and black get the cleanest creature kills, while green (**Beast Within**) and red (**Chaos Warp**) get flexible "destroy any permanent" effects that cost a little more and hand the opponent a token. Those catch-alls are staples specifically *because* they answer the things your color normally can't — a green deck has no other clean way to kill an opposing enchantment, so Beast Within earns its slot. For the full color-by-color rundown, see the [best removal spells guide](/blog/magic-the-gathering/best-removal-spells-mtg), and for the "kill everything at once" button, the [best board wipes guide](/blog/magic-the-gathering/best-board-wipes-mtg). Every deck wants a mix of both: spot removal for the one threat, a wrath or two for when you fall behind on board.

## Protection and interaction

This is the category newer players skip and lose to. You spend the whole game assembling an engine, and then someone Cyclonic Rifts your board or kills your commander in response to your big turn. Protection and reactive interaction are what keep your plan from getting deleted.

![Counterspell, the two-mana blue instant that stops any spell — blue's signature interaction.](/images/blog/magic-the-gathering/best-commander-staples-mtg/counterspell.jpg)

- **Counterspell.** {U}{U}, counter any spell. Blue's defining card and a staple in every blue deck. It answers the thing you couldn't have answered any other way — the combo piece, the board wipe aimed at you, the game-ending spell on the stack. (Arcane Denial is the budget-friendly near-twin: it counters anything and replaces itself.)
- **Heroic Intervention.** {1}{G}, your permanents gain hexproof and indestructible until end of turn. Two mana to blank a board wipe or a targeted kill spell on your whole team. The premier green protection card.
- **Lightning Greaves.** {2} artifact, equip for *zero*, granting haste and shroud. Slap it on your commander and it can't be targeted, and it can swing the turn it lands. The most-played protective equipment in the format.
- **Swiftfoot Boots.** The {2} sibling — hexproof and haste, equip 1. You can still target your own commander (to buff it), which Greaves doesn't allow. Most decks that want one want both.
- **Fierce Guardianship.** A free counterspell as long as you control your commander. Premium, pricey, and a staple in higher-power blue decks specifically because it protects your turn without costing you tempo.

The principle: if your deck has a single linchpin — usually the commander — you want at least two or three ways to protect it, and at least a couple of pieces of reactive interaction to stop the table's biggest spells. A deck with a great plan and no protection is a deck that does nothing the turn after it gets answered.

## Lands — the staples people forget

![Command Tower, the colorless land that taps for any color in your commander's identity — the most-played land in the format.](/images/blog/magic-the-gathering/best-commander-staples-mtg/command-tower.jpg)

Here's the most underrated staple of all: **Command Tower.** A land that taps for any color in your commander's color identity, with no drawback, that enters untapped. In any two-plus-color deck it's strictly better than a basic, costs basically nothing, and it's the single most-played *land* in Commander. There is no reason not to run it.

| Land | Job | Goes in |
| --- | --- | --- |
| Command Tower | Any color in your identity, untapped, no downside | Every multicolor deck |
| Exotic Orchard | Any color an opponent's land makes (usually most colors) | Multicolor decks in any pod |
| Reliquary Tower | No maximum hand size | Any draw-heavy deck |
| Bojuka Bog | Comes in tapped, exiles a graveyard | Decks wanting incidental graveyard hate |

**Command Tower and Exotic Orchard are the closest things to free fixing on a land.** Tower fixes your own identity; Orchard taps for any color an opponent's land can make, which in a normal four-color pod is nearly everything. Both belong in essentially every multicolor deck.

The utility-land staples (**Reliquary Tower** so you stop discarding to hand size, **Bojuka Bog** as a one-shot graveyard answer that costs you nothing but a tapped land) are the kind of slot you fill once your colored sources are solid. For building the manabase underneath these, the [best Commander lands guide](/blog/magic-the-gathering/best-lands-commander-mtg) covers the dual lands and fixing, and the [mana base guide](/blog/magic-the-gathering/mtg-mana-base-guide) covers the ratios. Staple-wise: Command Tower first, then count your colored sources before you get cute with utility lands.

## Staples that are actually traps

Not everything that *looks* like a staple earns the slot in your deck. A few cards get auto-included out of habit and quietly underperform.

| Card | The problem |
| --- | --- |
| Three-mana rocks that tap for one color | A two-mana Talisman or Signet does the same job a full turn earlier. Cut the vanilla three-drops |
| Manalith and friends | Three mana for one mana of any color is a bad rate in 2026. There are better fixers |
| "Good stuff" that doesn't fit | A card being a staple elsewhere doesn't make it a staple in *your* deck if it doesn't support your plan |
| Banned all-stars (Mana Crypt, Dockside Extortionist) | Banned in Commander since September 2024. They're not options, no matter how many old lists run them |

The biggest trap isn't a specific card — it's treating "staple" as "auto-include regardless of context." Sol Ring and Command Tower really are universal. But a card that's a staple in a spellslinger deck might be dead weight in a creature-heavy stompy build. The skill is knowing which staples are *format* staples (run everywhere) versus *archetype* staples (run in their lane). The five categories above are the format ones. Everything else, ask whether it actually does a job your deck needs.

## How many staple slots do you have

A 100-card Commander deck is your commander plus 99. A rough, battle-tested split for those 99:

- **~10 ramp** (Sol Ring, Arcane Signet, fixing rocks, green land ramp) — fewer in heavy-green decks, more in five-color.
- **~10 card draw** (Rhystic Study, the black draw suite, repeatable engines). Most decks under-run this.
- **~10 removal** (spot removal in your colors plus 2-3 board wipes).
- **~3-5 protection/interaction** (counters, your commander's hexproof package).
- **~36-38 lands** including Command Tower and your fixing.

That's roughly 70 of your 99 spoken for by staples and roles before you've added a single theme card. The remaining ~30 are where your deck actually becomes *your* deck — the synergy pieces, the build-arounds, the win conditions. That ratio surprises people, but it's why two decks with nothing in common still share a dozen cards.

If you want the full deckbuilding math, the [deckbuilding ratios guide](/blog/magic-the-gathering/mtg-deckbuilding-ratios) and the [how to build a Commander deck](/blog/magic-the-gathering/how-to-build-a-commander-deck) walkthrough take you from a commander to a finished 100. The staple takeaway: fill the jobs first, then build the theme on top.

## Quick Action Checklist

Use this as the staple skeleton for any new Commander deck, then layer your theme on top.

- [ ] Sol Ring and Arcane Signet in every deck that can legally run them
- [ ] Command Tower in every two-plus-color deck — it's free fixing
- [ ] Premium spot removal in your colors: Swords to Plowshares / Path to Exile (white), Beast Within (green), Chaos Warp (red)
- [ ] At least 8-12 sources of card draw — most decks run too few
- [ ] Counterspell or Arcane Denial in blue; Heroic Intervention in green
- [ ] Lightning Greaves and/or Swiftfoot Boots to protect a key commander
- [ ] 2-3 board wipes so you can reset when you fall behind on board
- [ ] Cut vanilla three-mana rocks and "good stuff" that doesn't fit your plan
- [ ] Never list Mana Crypt or Dockside Extortionist — both are banned in Commander`,
  faq: [
    {
      question: 'What are the most-played Commander staples?',
      answer:
        "Sol Ring is the single most-played card in Commander, followed closely by Arcane Signet and Command Tower — all three are colorless or color-identity fixers that go in essentially every deck. Beyond those, the near-universal includes are premium removal (Swords to Plowshares, Path to Exile, Beast Within, Chaos Warp), repeatable card draw (Rhystic Study, the black draw suite), and protection like Lightning Greaves. These cards earn their slots because every deck needs ramp, draw, removal, fixing, and protection regardless of theme.",
    },
    {
      question: 'Is Sol Ring banned in Commander?',
      answer:
        'No, Sol Ring is fully legal in Commander and is the most-played card in the format. The cards people sometimes confuse it with — Mana Crypt and Dockside Extortionist — were banned in September 2024 to rein in explosive starts, along with Jeweled Lotus and Nadu. Sol Ring itself was untouched and remains a near-universal include. Any deck that can run it, runs it.',
    },
    {
      question: 'How many staples should I run in a Commander deck?',
      answer:
        'A good rule of thumb for the 99 cards behind your commander: about 10 ramp, 10 card draw, 10 removal (including 2-3 board wipes), 3-5 protection/interaction, and 36-38 lands. That accounts for roughly 70 of your 99 cards as staples and roles before you add any theme cards. The remaining ~30 slots are where your deck becomes unique. Most under-built decks are short on card draw and protection specifically.',
    },
    {
      question: 'What is the best removal spell for a Commander deck?',
      answer:
        "Swords to Plowshares is the most efficient — one white mana to exile a creature with no death triggers, no regeneration, just gone. The opponent gaining life is irrelevant in a 40-life format. If you're not in white, the staple catch-alls are Beast Within (green) and Chaos Warp (red), which destroy any permanent for a few more mana. Every deck should also run 2-3 board wipes for when it falls behind on board.",
    },
    {
      question: 'Do all Commander decks need card draw staples?',
      answer:
        "Yes, and it's the category most decks under-build. Commander is a long, grindy format where you're fighting three opponents, so you empty your hand fast and the player who runs out of gas usually loses. Aim for 8-12 sources of repeatable card advantage. Rhystic Study and Esper Sentinel tax opponents into either paying or handing you cards, while black decks turn life into cards with Night's Whisper and Phyrexian Arena.",
    },
    {
      question: 'Why is Command Tower in every Commander deck?',
      answer:
        "Command Tower is a land that taps for any color in your commander's color identity, enters untapped, and has zero drawback. In any two-or-more-color deck it's strictly better than a basic land for fixing your mana, and it costs almost nothing to acquire. It's the most-played land in the format. The only deck that doesn't want it is a mono-color deck, where it just taps for that one color anyway.",
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/best-mana-rocks-commander-mtg', anchor: 'Best mana rocks in Commander' },
    { href: '/blog/magic-the-gathering/best-ramp-spells-commander-mtg', anchor: 'Best ramp spells in Commander' },
    { href: '/blog/magic-the-gathering/best-removal-spells-mtg', anchor: 'Best removal spells in MTG' },
    { href: '/blog/magic-the-gathering/best-card-draw-commander-mtg', anchor: 'Best card draw in Commander' },
    { href: '/blog/magic-the-gathering/how-to-build-a-commander-deck', anchor: 'How to build a Commander deck' },
  ],
  externalSources: [
    {
      url: 'https://edhrec.com/top/cards',
      title: 'EDHREC — most-played Commander cards by inclusion rate',
    },
    {
      url: 'https://scryfall.com/search?q=f%3Acommander+banned%3Acommander',
      title: 'Scryfall — current Commander banned list and card legalities',
    },
    {
      url: 'https://magic.wizards.com/en/news/announcements',
      title: 'Wizards of the Coast — official Magic news and ban announcements',
    },
  ],
  tldr:
    "The best Commander staples are the cards every deck runs regardless of theme: Sol Ring and Arcane Signet for ramp, Command Tower for fixing, premium removal like Swords to Plowshares (white), Beast Within (green), and Chaos Warp (red), repeatable card draw like Rhystic Study, and protection like Lightning Greaves and Counterspell. Fill these category jobs first — roughly 10 ramp, 10 draw, 10 removal, a few protection pieces, and 36-38 lands — then build your theme on top. Mana Crypt and Dockside Extortionist are banned, so ignore old lists that still include them.",
  itemList: {
    name: 'Best Commander Staples Every Deck Wants, Ranked',
    items: [
      { name: 'Sol Ring', description: 'One-mana artifact that taps for two colorless. The most-played card in Commander.' },
      { name: 'Arcane Signet', description: "Two-mana rock that taps for any color in your commander's identity. No downside." },
      { name: 'Command Tower', description: 'Land that taps for any color in your identity, untapped. The most-played land in EDH.' },
      { name: 'Swords to Plowshares', description: 'One-mana white instant that exiles a creature. The most efficient removal ever printed.' },
      { name: 'Rhystic Study', description: 'Repeatable blue draw engine — opponents pay 1 or you draw. Nobody pays for long.' },
      { name: 'Beast Within', description: "Green's universal answer: destroy any permanent for {2}{G}, they get a 3/3." },
      { name: 'Counterspell', description: "Two-mana hard counter for any spell. Blue's defining staple of interaction." },
      { name: 'Lightning Greaves', description: 'Two-mana equipment, equip 0, granting haste and shroud. Protects your commander.' },
    ],
  },
};
