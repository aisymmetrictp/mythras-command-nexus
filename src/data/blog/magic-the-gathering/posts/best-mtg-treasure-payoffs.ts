import type { BlogPost } from '../../blogTypes';

export const bestMtgTreasurePayoffs: BlogPost = {
  slug: 'best-mtg-treasure-payoffs',
  game: 'magic-the-gathering',
  category: 'card-guides',
  topicCluster: 'commander-strategy',
  tags: ['commander', 'treasure', 'ramp', 'artifacts', 'red', 'card-guide'],
  title: 'Best Treasure Payoffs in MTG Commander, Ranked',
  metaDescription:
    'The best Treasure cards in MTG Commander, ranked. Smothering Tithe, Goldspan Dragon, Old Gnawbone and the generators, doublers, and payoffs that turn gold into wins.',
  excerpt:
    "A Treasure token is a Dark Ritual that also counts as an artifact, a sacrifice, and a permanent. Here are the best Treasure cards in Commander — ranked, from the engines that flood the board with gold to the payoffs that turn that gold into damage.",
  featuredImagePrompt:
    'A radiant white enchantment conjuring piles of glittering treasure hoards as an opponent draws cards, golden coins spilling across a marble hall, painterly fantasy art, no text',
  heroImage: '/images/blog/magic-the-gathering/best-mtg-treasure-payoffs/smothering-tithe.jpg',
  heroImageAlt:
    'Smothering Tithe, the four-mana white enchantment that mints a Treasure every time an opponent draws unless they pay {2} — the best Treasure engine in Commander.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-mtg-treasure-payoffs/smothering-tithe.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-treasure-payoffs/goldspan-dragon.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-treasure-payoffs/old-gnawbone.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-treasure-payoffs/academy-manufactor.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
  ],
  publishDate: '2026-07-12T00:00:00.000Z',
  lastUpdated: '2026-07-12T00:00:00.000Z',
  primaryKeyword: 'best treasure payoffs mtg commander',
  secondaryKeywords: [
    'best treasure cards commander',
    'mtg treasure generators ranked',
    'treasure token payoffs',
    'best treasure doublers mtg',
    'treasure ramp commander',
    'best red treasure cards',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-treasure-is-the-best-token-in-commander', label: 'Why Treasure is the best token in Commander', level: 2 },
    { id: 'generators-multipliers-and-payoffs', label: 'Generators, multipliers, and payoffs', level: 2 },
    { id: 'the-best-treasure-cards-ranked', label: 'The best Treasure cards, ranked', level: 2 },
    { id: 'the-payoffs-that-turn-gold-into-damage', label: 'The payoffs that turn gold into damage', level: 2 },
    { id: 'the-two-banned-kings-dockside-and-jeweled-lotus', label: 'The two banned kings: Dockside and Jeweled Lotus', level: 2 },
    { id: 'colors-commanders-and-budget', label: 'Colors, commanders, and budget', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `A Treasure token is the most flexible ramp in Magic, and most players still underrate it. Think about what it actually is: a Dark Ritual that doesn't expire at end of turn, that fixes any color, that counts as an artifact on the battlefield until you spend it, and that reads as "a permanent sacrificed" the moment you crack it. That's four different card types' worth of relevance stapled onto one little gold coin. A pile of Treasures isn't just mana — it's fuel for artifact synergies, sacrifice payoffs, and a burst of explosive mana exactly when you need it.

This is a ranking of the best Treasure cards in Commander: the generators that flood your board with gold, the multipliers that turn one coin into three, and the payoffs that convert all that treasure into damage and wins. Every card here is legality-checked against Scryfall, with exact mana costs and effects confirmed — and because two of the format's most famous Treasure cards were banned by the Commander Rules Committee, this list is honest about which staples you can actually still play.

## Why Treasure is the best token in Commander

Clue, Food, and Treasure are the three big artifact-token types, but Treasure is the one that warps deckbuilding, and it's worth being precise about why. A Treasure is an artifact token with "{T}, Sacrifice this token: Add one mana of any color." That plain text hides four separate upsides:

- **It's ramp that fixes.** One Treasure is one mana of *any* color. In a three- or four-color deck, that's better fixing than most lands, and it lets you cast off-color bombs a turn early.
- **It's an artifact while it sits there.** Every Treasure on the battlefield powers Affinity, metalcraft, improvise, and "whenever an artifact enters" triggers. A board of five Treasures is a board of five artifacts until you decide to spend them.
- **It's a sacrifice waiting to happen.** Cracking a Treasure is "a player sacrificed a permanent" and "an artifact went to the graveyard" — which turns every coin into a trigger for aristocrat-style payoffs.
- **It's stored explosiveness.** Unlike a mana rock, a Treasure doesn't announce itself. You can sit on six of them and dump them all in one turn to hard-cast a game-ender out of nowhere. That burst potential is why Treasure decks feel like combo decks even when they aren't.

Compare that to a basic land or a two-mana rock, and Treasure is doing three extra jobs. The catch is that each one is single-use, so a Treasure deck lives or dies on *volume* — you want engines that mint them by the fistful, and payoffs that make cracking them do more than just pay for a spell. If you're new to how artifact-mana ramp fits a deck, our [mana rocks guide](/blog/magic-the-gathering/best-mana-rocks-commander-mtg) and broader [ramp spells roundup](/blog/magic-the-gathering/best-ramp-spells-commander-mtg) set the baseline this archetype builds on.

## Generators, multipliers, and payoffs

A working Treasure deck has three moving parts, and the classic mistake is loading up on one and forgetting the other two.

**Generators** make the Treasures. These range from one-shot bursts (Brass's Bounty dumping a coin per land) to repeatable engines (Smothering Tithe minting one every time an opponent draws). You want a mix: burst to enable an explosive turn, drip to keep the board stocked.

**Multipliers** turn each Treasure into several. Xorn adds one to every batch you make; Academy Manufactor turns every Treasure into a Treasure plus a Clue plus a Food; Goldspan Dragon makes each Treasure tap for two mana instead of one. These are force multipliers — dead on their own, backbreaking on top of a generator.

**Payoffs** convert gold into a win. Some are combat (Goldspan's mana fuels a giant turn), some are aristocrat pings (Mayhem Devil and Reckless Fireweaver turn each Treasure into a point of damage), and some are outright alternate win conditions (Revel in Riches just wins the game if you hoard ten). Without payoffs, you're ramping toward nothing in particular.

The balance that works: a solid base of generators, one or two multipliers, and at least one real payoff so all that mana has a target. Treasure decks that skip the payoffs end up as durdly ramp piles that make a lot of mana and lose slowly.

## The best Treasure cards, ranked

Ranked on impact in Commander, weighing how many Treasures each card produces or how hard it multiplies them, whether it's repeatable, and how close it comes to just winning.

![Goldspan Dragon, a five-mana red Dragon with flying and haste that mints a Treasure on attack or when targeted and makes every Treasure tap for two mana.](/images/blog/magic-the-gathering/best-mtg-treasure-payoffs/goldspan-dragon.jpg)

1. **Smothering Tithe** — {3}{W}. The best Treasure engine in the format and it isn't close. Every time an opponent draws a card, they pay {2} or you get a Treasure — and in a four-player game with everyone drawing for turn plus card-draw spells, that's a torrent of gold for one enchantment. It taxes the table and ramps you at the same time. If white is in your colors, run it.
2. **Goldspan Dragon** — {3}{R}{R}. A generator and a multiplier stapled to a 5/5 flying haste body. It makes a Treasure when it attacks *or* when it's targeted (so opponents' removal literally pays you), and every Treasure you control taps for two mana of one color. It effectively doubles your entire Treasure output. One of the best red five-drops, period.
3. **Old Gnawbone** — {5}{G}{G}. The green haymaker: whenever a creature you control deals combat damage to a player, make that many Treasures. A single connect with a beefy attacker mints a fistful of gold, and it snowballs into hard-cast game-enders fast. The premier "make an absurd amount of Treasure" card in green.
4. **Academy Manufactor** — {3}. Colorless, so it slots anywhere. If you'd make a Clue, Food, or Treasure, you make one of each instead — so every Treasure engine now also draws you cards and gains you life, and every coin is three artifacts for your artifact synergies. It triples the *breadth* of every token you make and fits any deck.
5. **Professional Face-Breaker** — {2}{R}. A generator with built-in card advantage: whenever your creatures deal combat damage to a player, make a Treasure, and you can sacrifice a Treasure to exile-and-play the top of your library. Menace means it connects, and it turns gold into gas so you never run out of cards. A three-mana engine that pulls double duty.
6. **Storm-Kiln Artist** — {3}{R}. The spellslinger's dream. Magecraft: every instant or sorcery you cast or copy makes a Treasure. In a deck full of cheap spells and copy effects, it goes near-infinite-adjacent, refunding your spells and powering the next one. The centerpiece of any Treasure-plus-spells build.
7. **Xorn** — {2}{R}. The pure doubler. If you'd make one or more Treasures, make that many plus one more. It's cheap, it's a body, and it quietly turns every generator up a notch — a two-Treasure trigger becomes three, a Gnawbone connect becomes even more absurd. Run it in any dedicated Treasure list.
8. **Revel in Riches** — {4}{B}. Payoff and alternate win condition in one card. Every time an opponent's creature dies you make a Treasure, and if you control ten or more Treasures at your upkeep, you just win the game. In a grindy pod full of dying creatures it accumulates gold on its own and hands you a wincon that dodges combat entirely.
9. **Mahadi, Emporium Master** — {1}{B}{R}. The aristocrat bridge: at your end step, make a Treasure for each creature that died this turn. Pair it with a sacrifice deck and it mints a small mountain of gold every turn, tying Treasure ramp directly to the [aristocrats and sacrifice](/blog/magic-the-gathering/best-mtg-aristocrats-sacrifice-commander) plan. A cheap Rakdos engine that overperforms.
10. **Brass's Bounty** — {6}{R}. The burst finisher: make a Treasure for each land you control. Cast it on seven-plus lands and you've suddenly got a pile of gold plus your lands untapped — enough to chain into a game-ending turn. Expensive, one-shot, and explosive in exactly the right deck.

## The payoffs that turn gold into damage

Generators and multipliers fill your board with coins. If you never cash them for more than mana, though, you're just a ramp deck. These are the payoffs that make Treasures lethal.

![Old Gnawbone, a seven-mana green Dragon that creates a Treasure for each point of combat damage your creatures deal to players.](/images/blog/magic-the-gathering/best-mtg-treasure-payoffs/old-gnawbone.jpg)

**Sacrifice pings.** Mayhem Devil ({1}{B}{R}) deals 1 damage to any target whenever *any* player sacrifices a permanent — and cracking a Treasure is a sacrifice. In a deck making and spending gold constantly, Mayhem Devil is a slow-drip win condition that also doubles as removal. Reckless Fireweaver ({1}{R}) does the mirror-image version, dealing 1 to each opponent whenever an artifact you control enters — so every Treasure you *make* is a ping. Run both and your Treasure churn becomes a burn spell that never stops.

**Alternate win conditions.** Revel in Riches (from the ranked list) is the cleanest: hoard ten Treasures, win at your upkeep. It's a wincon that ignores blockers, board wipes, and life totals entirely.

**Explosive mana into a finisher.** The oldest payoff is the simplest — dump six Treasures into a single haymaker turn. A Treasure deck can hard-cast an X-spell, an overloaded Torment of Hailfire, or a game-ending [combo piece](/blog/magic-the-gathering/best-commander-combos-mtg) a full turn ahead of the table because all that stored gold comes down at once. This is why Treasure decks feel combo-adjacent: the mana isn't spread across turns, it's a spring you compress and release.

**Artifact-count synergies.** Because Treasures are artifacts until spent, they quietly turn on affinity, improvise, and "whenever an artifact enters" cards. Every coin on your board is doing work for your [artifact package](/blog/magic-the-gathering/best-artifacts-mtg) before you ever crack it.

Match the payoff to the engine. Sac pings reward decks that crack gold constantly; Revel rewards grindy control shells; the explosive-finisher plan rewards decks that ramp hard and want one big turn.

## The two banned kings: Dockside and Jeweled Lotus

Here's where honesty matters, because a lot of older Treasure guides will steer you wrong. The two most powerful Treasure-adjacent cards ever printed are both **banned in Commander** as of the 2024 Rules Committee update, and presenting them as legal would be flat wrong:

- **Dockside Extortionist** ({1}{R}) — a 1/2 Goblin Pirate that, on entry, made a Treasure for each artifact and enchantment your opponents controlled. In a normal Commander pod that was frequently four, six, eight-plus Treasures off a two-mana creature, and it enabled turn-three wins in cEDH. It is now **banned** — do not put it in a legal deck.
- **Jeweled Lotus** ({0}) — a zero-cost artifact that sacrificed for three mana of any one color to cast your commander. It made explosive early commanders far too consistent and is likewise **banned**.

If you're coming back to the format or copying an old list, pull both. They're gone, along with Mana Crypt, from the legal card pool — our rundown of what's left in the [fast mana tier](/blog/magic-the-gathering/best-mtg-fast-mana-commander) covers the legal replacements. Always cross-check the official banned list before you buy; the Treasure archetype survives their loss just fine on the generators ranked above.

## Colors, commanders, and budget

Treasure lives primarily in **red**, with a strong secondary home in **black** and a couple of premium white and green pieces. Red owns the raw generation (Goldspan Dragon, Storm-Kiln Artist, Professional Face-Breaker, Brass's Bounty) and most of the doublers (Xorn). Black brings the payoffs and the aristocrat bridge (Revel in Riches, Mahadi). White contributes the single best engine in Smothering Tithe, and green brings the biggest burst in Old Gnawbone. **Rakdos (black-red)** is the canonical two-color home, and Jund or Mardu shells splash green or white for the top-end.

For commanders that headline the deck: **Prosper, Tome-Bound** ({2}{B}{R}) makes a Treasure every time you play a card from exile and fills your hand with impulse draw — the definitive budget-friendly Treasure commander. **Magda, Brazen Outlaw** ({1}{R}) mints a Treasure whenever a Dwarf you control taps and can sacrifice five Treasures to tutor an artifact or Dragon onto the battlefield, bridging Treasure into a combo finish. Both are cheap to build around.

On budget: the archetype is friendly. Storm-Kiln Artist, Xorn, Reckless Fireweaver, Mayhem Devil, Mahadi, Prosper, and Brass's Bounty are all inexpensive, and a fully functional Treasure deck needs no chase cards. The pricier slots are Smothering Tithe and Goldspan Dragon — both worth it, both optional. Pair this with our [Commander staples](/blog/magic-the-gathering/best-commander-staples-mtg) list for the interaction and card draw every deck needs, and you've got a gold-fueled engine that plays like a combo deck on a budget.

## Quick Action Checklist

- [ ] Build generators, multipliers, and payoffs together — never stack generators with nothing to spend the gold on
- [ ] Run Smothering Tithe in any white deck; it out-ramps almost everything for one enchantment
- [ ] Add multipliers (Xorn, Academy Manufactor, Goldspan Dragon) once you already make a lot of Treasures
- [ ] Include at least one real payoff — sac pings (Mayhem Devil, Reckless Fireweaver), Revel in Riches, or a burst finisher
- [ ] Remember Dockside Extortionist and Jeweled Lotus are BANNED in Commander — do not run them
- [ ] Base the deck in Rakdos (black-red); splash white for Tithe or green for Gnawbone
- [ ] Double-check Commander legality on Scryfall before buying any staple`,
  faq: [
    {
      question: 'What is the best Treasure card in MTG Commander?',
      answer:
        'Smothering Tithe is the best Treasure engine — for {3}{W} it mints a Treasure every time an opponent draws a card unless they pay {2}, which in a four-player pod is a constant torrent of gold. Goldspan Dragon is the best red option because it generates Treasures and doubles the mana every Treasure produces, and Old Gnawbone is the best green generator. Note that the two most powerful Treasure cards ever printed, Dockside Extortionist and Jeweled Lotus, are now banned in Commander.',
    },
    {
      question: 'What is a Treasure token in Magic: The Gathering?',
      answer:
        'A Treasure token is an artifact token with the ability "{T}, Sacrifice this token: Add one mana of any color." It is one-time ramp that fixes any color, but it also counts as an artifact while it sits on the battlefield and reads as a sacrifice when you crack it, so it feeds artifact synergies and aristocrat payoffs in addition to making mana.',
    },
    {
      question: 'Is Dockside Extortionist banned in Commander?',
      answer:
        'Yes. Dockside Extortionist was banned by the Commander Rules Committee in the 2024 update, alongside Jeweled Lotus and Mana Crypt. It made a Treasure for each artifact and enchantment your opponents controlled, which regularly produced explosive, game-ending mana off a two-mana creature. Do not include it in a legal Commander deck — always verify against the official banned list.',
    },
    {
      question: 'What are the best Treasure payoffs?',
      answer:
        'The top payoffs are the sacrifice pings — Mayhem Devil deals 1 damage whenever any permanent is sacrificed (including cracking a Treasure), and Reckless Fireweaver deals 1 to each opponent whenever an artifact you control enters. Revel in Riches is the best alternate win condition, letting you win the game if you control ten or more Treasures at your upkeep. Beyond those, dumping a pile of Treasures into one explosive finisher turn is the classic payoff.',
    },
    {
      question: 'What colors are best for a Treasure deck?',
      answer:
        'Red is the core color for Treasure generation and doublers, and black brings the best payoffs and the aristocrat bridge, so Rakdos (black-red) is the canonical two-color home. White adds the single best engine in Smothering Tithe and green adds the biggest burst in Old Gnawbone, so many Treasure decks are Rakdos splashing one of those. Prosper, Tome-Bound and Magda, Brazen Outlaw are the two most popular Treasure commanders.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/best-mana-rocks-commander-mtg', anchor: 'best mana rocks in Commander' },
    { href: '/blog/magic-the-gathering/best-ramp-spells-commander-mtg', anchor: 'best ramp spells' },
    { href: '/blog/magic-the-gathering/best-mtg-aristocrats-sacrifice-commander', anchor: 'aristocrats and sacrifice' },
    { href: '/blog/magic-the-gathering/best-artifacts-mtg', anchor: 'best artifacts guide' },
    { href: '/blog/magic-the-gathering/best-commander-staples-mtg', anchor: 'best Commander staples' },
  ],
  externalSources: [
    { url: 'https://scryfall.com/search?q=o%3A%22create%22+o%3A%22treasure%22+f%3Acommander', title: 'Scryfall — Treasure card search and legality data' },
    { url: 'https://edhrec.com/', title: 'EDHREC — Commander Treasure-card inclusion data' },
    { url: 'https://magic.wizards.com/en/banned-restricted-list', title: 'Wizards of the Coast — official banned and restricted list' },
  ],
  tldr:
    'The best Treasure cards in MTG Commander are Smothering Tithe (the top engine), Goldspan Dragon and Old Gnawbone (generators), Academy Manufactor and Xorn (multipliers), and Revel in Riches plus sac-pings like Mayhem Devil and Reckless Fireweaver (payoffs). Build generators, multipliers, and payoffs together, base the deck in Rakdos, and remember Dockside Extortionist and Jeweled Lotus are now BANNED in Commander.',
  itemList: {
    name: 'Best Treasure Cards in MTG Commander, Ranked',
    items: [
      { name: 'Smothering Tithe', description: 'Mints a Treasure every time an opponent draws unless they pay {2}. The best Treasure engine in the format.' },
      { name: 'Goldspan Dragon', description: 'Makes a Treasure on attack or when targeted and makes every Treasure tap for two mana. A generator and multiplier on a 5/5 flyer.' },
      { name: 'Old Gnawbone', description: 'Creates a Treasure for each point of combat damage your creatures deal. The premier green Treasure haymaker.' },
      { name: 'Academy Manufactor', description: 'Turns every Treasure into a Treasure, Clue, and Food. A colorless multiplier that fits any deck and triples token breadth.' },
      { name: 'Professional Face-Breaker', description: 'Generates Treasure on combat damage and sacrifices it for impulse draw. A three-mana engine with built-in card advantage.' },
      { name: 'Storm-Kiln Artist', description: 'Magecraft makes a Treasure on every instant or sorcery cast or copied. The centerpiece of Treasure-plus-spells decks.' },
      { name: 'Xorn', description: 'A cheap doubler: every batch of Treasures you make gets one extra. Quietly upgrades every generator in the deck.' },
      { name: 'Revel in Riches', description: 'Makes a Treasure when opponents\' creatures die and wins the game at ten Treasures. Payoff and alternate win condition in one.' },
      { name: 'Mahadi, Emporium Master', description: 'Mints a Treasure for each creature that died this turn. The cheap Rakdos bridge between aristocrats and Treasure ramp.' },
      { name: 'Brass\'s Bounty', description: 'Makes a Treasure for each land you control. A one-shot burst that fuels a game-ending turn out of nowhere.' },
    ],
  },
};
