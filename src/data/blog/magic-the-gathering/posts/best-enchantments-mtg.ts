import type { BlogPost } from '../../blogTypes';

export const bestEnchantmentsMtg: BlogPost = {
  slug: 'best-enchantments-mtg',
  game: 'magic-the-gathering',
  category: 'card-guides',
  topicCluster: 'commander-staples',
  title: 'Best Enchantments in Magic: The Gathering, Ranked',
  metaDescription:
    'The best enchantments in MTG, ranked for Commander and eternal formats. Rhystic Study, Smothering Tithe, Sylvan Library, Doubling Season, Necropotence and more.',
  excerpt:
    "Enchantments are the cards opponents forget to kill — quiet permanents that bury you in value one turn at a time. Here are the best enchantments in Magic, ranked, with the color, cost, and legality on each one verified.",
  featuredImagePrompt:
    'A glowing arcane enchantment radiating golden treasure light, coins and motes of mana swirling in the air, painterly Magic: The Gathering art style, deep gold and white tones, no text',
  heroImage: '/images/blog/magic-the-gathering/best-enchantments-mtg/smothering-tithe.jpg',
  heroImageAlt:
    'Smothering Tithe, the four-mana white enchantment that makes a Treasure token whenever an opponent draws a card unless they pay two mana.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-enchantments-mtg/smothering-tithe.jpg',
      sourceUrl: 'https://scryfall.com/card/cmm/57/smothering-tithe',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-enchantments-mtg/rhystic-study.jpg',
      sourceUrl: 'https://scryfall.com/card/j22/114/rhystic-study',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-enchantments-mtg/sylvan-library.jpg',
      sourceUrl: 'https://scryfall.com/card/dmr/179/sylvan-library',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-enchantments-mtg/doubling-season.jpg',
      sourceUrl: 'https://scryfall.com/card/fdn/216/doubling-season',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
  ],
  publishDate: '2026-06-05T00:00:00.000Z',
  lastUpdated: '2026-06-05T00:00:00.000Z',
  primaryKeyword: 'best enchantments mtg',
  secondaryKeywords: [
    'best enchantments magic the gathering',
    'best enchantments commander',
    'best enchantments edh',
    'top mtg enchantments',
    'best enchantment cards mtg',
    'strongest enchantments commander',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-enchantments-are-the-sneakiest-power-in-the-game', label: 'Why enchantments are the sneakiest power in the game', level: 2 },
    { id: 'the-untouchable-tier', label: 'The untouchable tier', level: 2 },
    { id: 'the-best-tax-and-resource-enchantments', label: 'The best tax and resource enchantments', level: 2 },
    { id: 'the-best-payoff-and-doubler-enchantments', label: 'The best payoff and doubler enchantments', level: 2 },
    { id: 'the-best-defensive-enchantments', label: 'The best defensive enchantments', level: 2 },
    { id: 'high-power-high-risk-the-life-payers', label: 'High-power, high-risk: the life-payers', level: 2 },
    { id: 'what-about-auras-and-the-cards-that-arent-enchantments', label: 'What about auras and the cards that arent enchantments', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Enchantments are the cards your opponents forget to kill. A creature gets removed the turn it lands. A planeswalker eats every burn spell on the table. But an enchantment sits there quietly, generating value every single turn, and most decks do not run nearly enough enchantment removal to keep up. That asymmetry is the whole pitch: the best enchantments are permanents that bury you in advantage while the rest of the table is busy fighting over the board.

This is a ranked breakdown of the best enchantments in Magic, weighted toward Commander and eternal formats where these cards actually live. Every card on this list has been checked against Scryfall — that it is genuinely an enchantment (not an artifact wearing a disguise) and what its current legality is. Where a card is banned or restricted somewhere, I say so, because calling a Legacy-banned card a "staple" without the asterisk is how you get blindsided at a tournament.

A note on scope before we rank: a few cards people lump in with "best enchantments" are not enchantments at all. The One Ring is a Legendary Artifact. Skullclamp is an Equipment. Esper Sentinel is an Artifact Creature. They are great, but they are not on this list, because this list is actually about enchantments.

## Why enchantments are the sneakiest power in the game

Enchantments win games through accumulation, not impact. A single enchantment rarely swings a turn the way a board wipe or a big creature does. Instead it changes the rate at which you generate a resource — cards, mana, life, Treasure — and over a ten-turn Commander game that rate compounds into a lead nobody can catch.

Three reasons they punch above their weight:

1. **They dodge the most common removal.** Most decks are stuffed with creature kill and a couple of "destroy target creature or planeswalker" spells. Dedicated enchantment removal is comparatively rare, so an enchantment often resolves and then never gets answered.
2. **They are repeatable by default.** A sorcery does its thing once. An enchantment that draws you a card or makes you a Treasure does it every turn it survives, which means turn-one and turn-two enchantments can generate a dozen-plus cards or mana over a game.
3. **The best ones tax the whole table.** In multiplayer Commander, an enchantment that triggers off what your opponents do — drawing, casting, attacking — scales with the number of players. Three opponents means three times the triggers.

> The mistake new players make is treating enchantments as "win-more." The good ones are the opposite — they are engines you deploy early so the rest of your deck has more fuel. Play them on turn two, not turn ten.

## The untouchable tier

These are the enchantments that go in nearly every deck of their color, full stop. If you are in the color and not running these, you usually need a specific reason.

![Rhystic Study, a three-mana blue enchantment that draws you a card whenever an opponent casts a spell unless they pay one extra mana.](/images/blog/magic-the-gathering/best-enchantments-mtg/rhystic-study.jpg)

| Card | Cost | Color | Why it is here |
| --- | --- | --- | --- |
| Rhystic Study | {2}{U} | Blue | Draws a card on each opponent spell unless they each pay 1. A flood in a four-player pod |
| Smothering Tithe | {3}{W} | White | Makes a Treasure on each opponent's draw unless they pay 2. Generates absurd mana |
| Sylvan Library | {1}{G} | Green | Look at the top three each upkeep; draw extras for 4 life each. The best green engine |

Rhystic Study is the most famous "tax" enchantment in the format for a reason. Three mana, and from then on every time an opponent casts a spell they either pay you an extra mana or you draw a card. In a four-player game, "do you pay the one?" becomes a running joke, because they will not pay every time, and you draw, and draw, and draw. It is the single best repeatable card-advantage enchantment blue has.

Smothering Tithe is the white parallel and arguably even more backbreaking. Every card every opponent draws — including their natural draw step every turn — makes you a Treasure token unless they pay two mana. Nobody pays two every turn, so by turn six or seven you are sitting on a pile of Treasures that powers out your entire hand. It is the best ramp white has ever gotten and it is legal everywhere it is legal to play it, including Modern and Pioneer.

Sylvan Library is green's answer and one of the best draw engines outside blue. Each upkeep you look at the top three cards; you can draw two of them for four life apiece. In a 40-life format, paying eight life for two extra cards is a fine rate when you are ahead, and even when you pay nothing it sculpts every draw. It is a near-auto-include in green, though note it is **not legal in Modern or Pioneer** — it lives in Commander, Legacy, and Vintage.

## The best tax and resource enchantments

Past the untouchable tier, the next-best enchantments are the ones that turn your opponents' normal actions into your resources, or quietly print value off your own.

![Sylvan Library, a two-mana green enchantment that lets you draw extra cards each upkeep by paying life, widely regarded as the best green card-advantage engine.](/images/blog/magic-the-gathering/best-enchantments-mtg/sylvan-library.jpg)

- **Mystic Remora ({U}).** One mana, draws you a card whenever an opponent casts a noncreature spell unless they pay four. It has cumulative upkeep, so the cost to keep it climbs each turn — but played turn one it can draw four or more cards before you happily let it fall off. The best one-mana enchantment investment in blue.
- **Phyrexian Arena ({1}{B}{B}).** The classic black engine: draw an extra card every upkeep, pay one life for it. No opponent can turn it off, which makes it more reliable than the tax engines. One life a turn in a 40-life format is almost nothing.
- **Black Market Connections ({2}{B}).** Each upkeep you choose any combination of three modes — make a Treasure, draw a card and lose life, or make a 1/1 — paying life for each one you pick. Flexible, fast, and one of the best black enchantments printed in years.
- **Land Tax ({W}).** Whenever an opponent controls more lands than you, search up three basics. It never stops fixing and refueling, and it pairs with discard-for-value to become a genuine engine. A staple in white control and a card so good it is still talked about decades after printing.

The throughline: these all generate a resource every single turn for a small up-front cost. That is the enchantment sweet spot. You spend one card now to draw, ramp, or fix for the rest of the game.

## The best payoff and doubler enchantments

Some enchantments do not generate value on their own — they multiply what your deck already does. In the right shell these are the most explosive cards on the list.

![Doubling Season, a five-mana green enchantment that doubles tokens and counters, a cornerstone of token and +1/+1-counter decks.](/images/blog/magic-the-gathering/best-enchantments-mtg/doubling-season.jpg)

- **Doubling Season ({4}{G}).** Doubles the tokens you create and the +1/+1 counters you place, and — the famous part — doubles the loyalty counters a planeswalker enters with, which usually means you can ultimate it the turn it lands. In a tokens, +1/+1-counter, or superfriends deck it is a cornerstone. Legal in Commander, Legacy, Vintage, Modern, and Pioneer.
- **Cathars' Crusade ({3}{W}{W}).** Every creature you cast puts a +1/+1 counter on each creature you control. In a go-wide white deck the board snowballs out of control within two turns. Five mana is real, but the payoff is a game-ending board state.
- **Mirari's Wake ({3}{G}{W}).** Your creatures get +1/+1, and — the reason it is here — your lands tap for an extra mana of the same type. It is a mana doubler stapled to an anthem, and doubling your mana in a Commander deck means casting two big things a turn instead of one.

Doublers are deck-defining, not generically good. Doubling Season in a deck with no tokens and no counters is a dead five-mana enchantment. But slot any of these into the archetype they were built for and they are among the most powerful cards you can run. Build around them, or leave them out.

## The best defensive enchantments

Not every great enchantment generates value — some just keep you alive long enough for your value engines to take over. In multiplayer Commander, being a less attractive target is its own kind of advantage.

- **Ghostly Prison ({2}{W}) and Propaganda ({2}{U}).** Functionally the same card in two colors: creatures can't attack you unless their controller pays two mana per attacker. In a four-player pod that tax redirects the beatdown toward easier targets. Cheap, sticky, and exactly the kind of enchantment opponents underrate until it has saved you ten times.
- **Greater Auramancy ({1}{W}).** Gives your other enchantments shroud and makes your enchanted permanents harder to target. In an enchantment-heavy or enchantress deck it is a bodyguard for your whole board.
- **Sterling Grove ({G}{W}).** Protects your other enchantments from targeted removal and can tutor an enchantment to the top of your library. A glue card for any deck built around enchantments.

These are role-players, not bombs. You run one or two in a deck that has something worth protecting — a combo piece, a stack of value enchantments — not as standalone power. But a single Ghostly Prison has won more Commander games than its reputation suggests, simply by making you the player nobody wants to swing at.

## High-power, high-risk: the life-payers

The most raw-powerful enchantment in Magic's history is also one of the most dangerous to pilot. This tier is high-ceiling, high-variance, and demands you know what you are doing.

**Necropotence ({B}{B}{B})** is, in raw card-generation power, arguably the best draw enchantment ever printed. Pay one life, set a card aside, draw it at end of turn — as many times as you want, every turn. Your life total is your hand size. In a dedicated low-curve black deck it draws absurd numbers of cards. Played carelessly it kills you or leaves you wide open at one life.

The asterisks are big. Necropotence is **banned in Legacy and restricted in Vintage** — it is so powerful it is leashed in eternal constructed. It is legal in Commander, where the 40-life buffer makes the life payments more forgiving, but it skips your normal draw step and the cards arrive at end of turn, which takes real practice to sequence. It is a format-warping engine for the player who can manage the life total and a trap for the player who can't.

> The rule on life-payer enchantments: the cost is fine only if your deck is built to absorb it. Necropotence in a low-curve deck that empties its hand is a powerhouse. The same card in a slow, grindy deck that needs its life total is how you deck-build yourself to death.

## What about auras and the cards that aren't enchantments

Two quick clarifications, because they trip people up.

**Auras are enchantments, but they are usually worse than other enchantments** for one reason: they attach to something, so when that something dies, the Aura dies too, and you have been two-for-oned. The exceptions are auras that replace themselves or generate value on their own — the reanimation aura Animate Dead ({1}{B}) brings a creature straight back from any graveyard, which is so much value that the card-disadvantage risk is irrelevant. As a category, though, prefer standalone enchantments over auras unless the aura's effect is worth the fragility.

**And the impostors.** A lot of "best enchantment" lists quietly include cards that are not enchantments at all. The One Ring is a Legendary Artifact. Skullclamp and the equipment package are Artifact — Equipment. Esper Sentinel, despite acting like a tax enchantment, is an Artifact Creature. They are all excellent — Skullclamp and Esper Sentinel show up in our [best card draw in Commander](/blog/magic-the-gathering/best-card-draw-commander-mtg) breakdown — but if you are specifically loading up on enchantments to dodge artifact removal or to trigger enchantress payoffs, double-check the type line first.

## Quick Action Checklist

Use this as a starting enchantment package and adjust to your colors:

- [ ] In blue: run Rhystic Study and Mystic Remora — the best repeatable tax enchantments in the format.
- [ ] In white: run Smothering Tithe for explosive Treasure ramp, and Land Tax in a control shell.
- [ ] In green: run Sylvan Library — top-tier draw, but note it is not legal in Modern or Pioneer.
- [ ] In black: run Phyrexian Arena and Black Market Connections for steady, opponent-proof value.
- [ ] In a tokens or +1/+1-counter deck: build around Doubling Season, Cathars' Crusade, or Mirari's Wake.
- [ ] Add a defensive enchantment (Ghostly Prison or Propaganda) if you are the deck that gets attacked.
- [ ] Run Necropotence only if your deck can manage the life cost — and know it is banned in Legacy, restricted in Vintage.
- [ ] Double-check the type line: The One Ring, Skullclamp, and Esper Sentinel are artifacts, not enchantments.`,
  faq: [
    {
      question: 'What is the best enchantment in Magic: The Gathering?',
      answer:
        'For multiplayer Commander, Rhystic Study and Smothering Tithe are the two best enchantments — both tax the whole table and generate cards or Treasure nearly every turn. In green, Sylvan Library is the premier card-advantage enchantment. The "best" depends on your colors: blue wants Rhystic Study, white wants Smothering Tithe, green wants Sylvan Library, and black wants Phyrexian Arena. All four are legal in Commander.',
    },
    {
      question: 'Is The One Ring an enchantment?',
      answer:
        'No. The One Ring is a Legendary Artifact, not an enchantment. It is one of the strongest cards in modern Magic and a Commander staple, but it does not count as an enchantment for type-matters effects, enchantress payoffs, or enchantment tutors. It is also banned in Modern. If you are building a deck specifically around enchantments, The One Ring does not belong in that count.',
    },
    {
      question: 'Is Necropotence still good, and is it banned anywhere?',
      answer:
        'Necropotence is, in raw power, arguably the best card-draw enchantment ever printed — pay one life per card with no limit, every turn. It is banned in Legacy and restricted in Vintage because of that power, but it is legal in Commander, where the 40-life total makes the cost more manageable. It skips your normal draw step and the cards arrive at end of turn, so it rewards careful sequencing and punishes sloppy play. Great in a dedicated low-curve black deck, risky everywhere else.',
    },
    {
      question: 'How many enchantments should I run in a Commander deck?',
      answer:
        'There is no fixed number — enchantments compete for slots with every other card type. A typical deck might run a handful of value enchantments (Rhystic Study, Smothering Tithe, Phyrexian Arena) as part of its overall package of card advantage and ramp. A dedicated enchantress deck built around enchantment synergies can run 25 or more. Lead with the ones that generate a resource every turn, and play them early so they have time to pay off.',
    },
    {
      question: 'Are auras good enchantments in Commander?',
      answer:
        'Most auras are weaker than standalone enchantments because they attach to a permanent — if that permanent dies, the aura dies too, costing you two cards for one removal spell. The exceptions are auras that generate enough value to ignore the risk, like reanimation auras such as Animate Dead that bring a creature back from any graveyard. As a rule, prefer standalone enchantments over auras unless the aura is worth the fragility.',
    },
    {
      question: 'Why are enchantments hard for opponents to remove?',
      answer:
        'Most decks are loaded with creature removal and a couple of catch-all spells for creatures and planeswalkers, but dedicated enchantment removal is comparatively rare. That means an enchantment often resolves and then sits on the battlefield unanswered for the rest of the game, generating value every turn. Green and white have the best enchantment removal, so against those colors your enchantments are more at risk than against mono-blue or mono-black.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/best-card-draw-commander-mtg', anchor: 'Best card draw in Commander' },
    { href: '/blog/magic-the-gathering/best-ramp-spells-commander-mtg', anchor: 'Best ramp spells in Commander' },
    { href: '/blog/magic-the-gathering/best-removal-spells-mtg', anchor: 'Best removal spells in MTG' },
    { href: '/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start', anchor: 'Commander format guide for beginners' },
  ],
  externalSources: [
    {
      url: 'https://scryfall.com/search?q=t%3Aenchantment+f%3Acommander',
      title: 'Scryfall — enchantment search and current legality data',
    },
    {
      url: 'https://edhrec.com/top/cards',
      title: 'EDHREC — most-played Commander cards by inclusion rate',
    },
    {
      url: 'https://magic.wizards.com/en/banned-restricted-list',
      title: 'Wizards of the Coast — official banned and restricted list',
    },
  ],
  tldr:
    'The best enchantments in MTG are repeatable value engines that dodge most removal. In Commander, Rhystic Study (blue) and Smothering Tithe (white) are the top picks — both tax the whole table — with Sylvan Library (green) and Phyrexian Arena (black) close behind. Doubling Season is the best payoff enchantment for token and counter decks. Necropotence is the highest-power option but is banned in Legacy and restricted in Vintage. Note that The One Ring, Skullclamp, and Esper Sentinel are artifacts, not enchantments.',
  itemList: {
    name: 'Best Enchantments in Magic: The Gathering, Ranked',
    items: [
      { name: 'Rhystic Study', description: 'Three-mana blue enchantment that draws a card on each opponent spell unless they pay 1. The best tax engine in multiplayer.' },
      { name: 'Smothering Tithe', description: 'Four-mana white enchantment that makes a Treasure on each opponent draw unless they pay 2. Explosive ramp.' },
      { name: 'Sylvan Library', description: 'Two-mana green enchantment that draws extra cards each upkeep for 4 life. The best green card-advantage enchantment. Not legal in Modern/Pioneer.' },
      { name: 'Phyrexian Arena', description: 'Three-mana black enchantment that draws an extra card each upkeep for 1 life. Steady, reliable, uninteractive.' },
      { name: 'Mystic Remora', description: 'One-mana blue enchantment that draws on opponent noncreature spells unless they pay 4. Explosive early; let it die as upkeep climbs.' },
      { name: 'Doubling Season', description: 'Five-mana green enchantment that doubles tokens, +1/+1 counters, and planeswalker loyalty. A cornerstone of token and counter decks.' },
      { name: 'Black Market Connections', description: 'Three-mana black enchantment offering Treasure, card draw, or a creature each upkeep for life. Flexible and fast.' },
      { name: 'Necropotence', description: 'Triple-black enchantment that trades 1 life per card with no limit. The highest-power draw, banned in Legacy, restricted in Vintage.' },
    ],
  },
};
