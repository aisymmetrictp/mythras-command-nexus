import type { BlogPost } from '../../blogTypes';

export const howToBuildACommanderDeck: BlogPost = {
  slug: 'how-to-build-a-commander-deck',
  game: 'magic-the-gathering',
  category: 'beginner-guides',
  topicCluster: 'commander-format',
  title: 'How to Build a Commander Deck — The 10/10/10 Template',
  metaDescription: 'Learn how to build a Commander deck with the 10/10/10 template: 37 lands, 10 ramp, 10 card draw, 10 removal. A simple skeleton for a winning EDH deck.',
  excerpt: 'Most bad Commander decks fail on category balance, not card choice. Here is the 10/10/10 skeleton that fixes ramp, draw, removal, and lands in one move.',
  featuredImagePrompt: 'A clean overhead flat-lay of a Magic: The Gathering Commander deck spread into labeled stacks on a dark wood table, one stack of lands, one of mana rocks, one of card-draw spells, one of removal, with a foil commander card propped upright in the center under warm lamp light, shallow depth of field, no text overlays',
  heroImage: '/images/blog/magic-the-gathering/how-to-build-a-commander-deck/sol-ring.jpg',
  heroImageAlt: 'Sol Ring, the two-mana artifact that taps for two colorless and is the cornerstone ramp piece in Commander.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/how-to-build-a-commander-deck/sol-ring.jpg',
      sourceUrl: 'https://scryfall.com/card/soc/128/sol-ring',
      license: 'WotC Fan Content Policy / Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/how-to-build-a-commander-deck/cultivate.jpg',
      sourceUrl: 'https://scryfall.com/card/soc/265/cultivate',
      license: 'WotC Fan Content Policy / Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/how-to-build-a-commander-deck/rhystic-study.jpg',
      sourceUrl: 'https://scryfall.com/card/j22/114/rhystic-study',
      license: 'WotC Fan Content Policy / Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/how-to-build-a-commander-deck/swords-to-plowshares.jpg',
      sourceUrl: 'https://scryfall.com/card/soc/179/swords-to-plowshares',
      license: 'WotC Fan Content Policy / Scryfall',
    },
  ],
  publishDate: '2026-05-28T00:00:00.000Z',
  lastUpdated: '2026-05-28T00:00:00.000Z',
  primaryKeyword: 'how to build a commander deck',
  secondaryKeywords: [
    'commander deck template',
    'how many lands in a commander deck',
    'edh deckbuilding guide',
    'commander deck ramp and card draw',
    'mtg commander deck skeleton',
    'commander 10/10/10 template',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'evergreen',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'the-101010-template', label: 'The 10/10/10 template', level: 2 },
    { id: 'step-1-pick-your-commander', label: 'Step 1 — pick your commander', level: 2 },
    { id: 'step-2-lock-your-win-conditions', label: 'Step 2 — lock your win conditions', level: 2 },
    { id: 'step-3-10-ramp-pieces', label: 'Step 3 — 10 ramp pieces', level: 2 },
    { id: 'step-4-10-card-draw-pieces', label: 'Step 4 — 10 card-draw pieces', level: 2 },
    { id: 'step-5-10-removal-and-interaction', label: 'Step 5 — 10 removal and interaction', level: 2 },
    { id: 'step-6-37-lands', label: 'Step 6 — 37 lands', level: 2 },
    { id: 'step-7-the-flex-slots', label: 'Step 7 — the flex slots', level: 2 },
    { id: 'curve-color-balance-and-the-final-cut', label: 'Curve, color balance, and the final cut', level: 2 },
    { id: 'upgrading-from-a-precon', label: 'Upgrading from a precon', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Most bad Commander decks don't lose because someone picked the wrong commander or jammed a sub-optimal removal spell. They lose because the deck is structurally broken. Too few lands, so it stumbles on mana. Almost no ramp, so it's a turn behind the whole game. Three card-draw spells in the entire 99, so once the opening hand is gone, the player is top-decking by turn six. And exactly three removal spells, which means the table's biggest threat sits there unchallenged.

You can fix all of that before you ever argue about which sweeper is best. The fix is category balance, and the easiest way to get it is a template.

## The 10/10/10 template

![Cultivate, a green sorcery that fetches two basic lands, the classic Cultivate-style ramp spell that lets you trim lands.](/images/blog/magic-the-gathering/how-to-build-a-commander-deck/cultivate.jpg)

Here's the skeleton. A reliable 100-card Commander deck is roughly 37 lands, 10 ramp pieces, 10 card-draw pieces, 10 removal and interaction spells, and about 3 board wipes. That accounts for 70 cards. Your commander takes one slot. That leaves around 29 to 30 cards for your actual theme: the synergy, the wincons, the protection, the fun.

| Category | Count | What it buys you |
|---|---|---|
| Lands | 37 | Hitting your drops every turn (the whole engine) |
| Ramp | 10 | Getting ahead on mana and recovering from a wipe |
| Card draw | 10 | Refueling so you don't run out of gas |
| Removal + interaction | 10 | Answering the things that beat you |
| Board wipes | 3 | Resetting a board you can't win |
| Theme / wincons | ~30 | The commander + everything that makes the deck yours |

Two things before anyone in the comments points them out. First, the numbers add to 100 with your commander included, and yes, board wipes are a subset of "interaction" that I'm breaking out on purpose because people forget them. Second, this is a starting point, not the law. A heavy ramp deck running Cultivate-style spells will push lands down to 35 and ramp up to 13. A landfall deck might run 40 lands and lean on fetch effects as ramp. Shift the dials for your strategy. But if you have no idea where to start, start here and you will already beat most kitchen-table decks on consistency alone.

> The single most-skipped category in new Commander decks is card draw. People build 10 ramp pieces because Sol Ring feels good, and they build 10 removal spells because removal is obvious. Then they run four cantrips and wonder why they're hellbent by turn seven. Treat card draw with the same respect you give lands.

## Step 1 — pick your commander

Your commander is the one card you always have access to, so it sets the entire color identity and tone of the deck. Pick by two things: the colors you want to play and the playstyle you actually enjoy.

Color identity is strict in Commander. If your commander is Jeskai (white, blue, red), every card in your 99 has to fit inside those colors. No black removal, no green ramp creatures with green mana symbols. New to that rule and the format's structure in general? Our [Commander format starter guide](/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start) walks through color identity, the singleton rule, and the 40-life starting point before you buy a single card.

Playstyle matters more than power level for your first build. If you like attacking, pick a commander that wants to attack. If you like casting a hundred spells, pick a spellslinger. Don't pick the "best" commander on a tier list and then realize you hate the way it plays. A two-color commander is also easier to build than a five-color one, because your mana base and card pool are simpler. There is no shame in starting Golgari (black/green) instead of jumping straight to a four-color soup deck.

## Step 2 — lock your win conditions

Decide how the deck actually wins before you fill the 99. Name one to three win conditions and build toward them. Spreading across five wincons usually means you're mediocre at all of them.

Common routes:

- **Combat damage:** go wide with tokens or go tall with one giant creature (Voltron). Attack until people die.
- **Tokens:** flood the board with bodies, then push it all through with an overrun effect.
- **Voltron:** stack equipment and auras on one creature, suit up your commander, and connect for 21 commander damage.
- **Combo:** assemble two or three pieces that produce infinite mana, damage, or loops.
- **Life drain:** small, repeatable damage from effects like Blood Artist that bleed the table out.
- **Mill:** deck your opponents out by emptying their libraries.

Pick the one that matches your commander and call it the primary plan. A secondary route is healthy insurance. A third is optional. If you can't explain how your deck wins in one sentence, it doesn't have a wincon yet, it has 99 random cards.

## Step 3 — 10 ramp pieces

![Sol Ring, the two-mana colorless artifact that taps for two, an auto-include ramp piece in nearly every Commander deck.](/images/blog/magic-the-gathering/how-to-build-a-commander-deck/sol-ring.jpg)

Ramp gets you ahead of the curve and, just as importantly, helps you recover after a board wipe nukes your stuff. Ten pieces is the floor for a deck that wants to do anything ambitious.

Ramp comes in a few flavors:

- **Mana rocks:** Sol Ring (an auto-include in basically every deck, and cheap — prices vary, so check a current retailer), Arcane Signet, Fellwar Stone, the color-pair Signets and Talismans.
- **Mana dorks:** in green, creatures like Llanowar Elves and Birds of Paradise that tap for mana.
- **Ramp spells:** Cultivate and Kodama's Reach in green fetch lands directly to the battlefield and fix colors at the same time.
- **Rituals and big rocks:** for higher-cost decks, things like a Worn Powerstone or a Mind Stone that cantrips later.

Cheap vs premium: the budget version of ramp is mostly Signets, Talismans, and common green spells, and it costs almost nothing. The premium upgrades are fast mana like Mana Crypt or Jeweled Lotus, which run into real money and aren't necessary for a casual table. Sol Ring and Arcane Signet alone are worth their slots in any color.

## Step 4 — 10 card-draw pieces

![Rhystic Study, a blue enchantment that draws a card whenever an opponent casts a spell unless they pay one, a top draw engine.](/images/blog/magic-the-gathering/how-to-build-a-commander-deck/rhystic-study.jpg)

This is the category that separates decks that grind out wins from decks that fizzle. You want repeatable card advantage, not one-shot cantrips. Aim for ten, and weight it toward engines that draw across multiple turns.

By color, your reliable options look like this:

| Color | Strong repeatable draw |
|---|---|
| Blue | Rhystic Study, Mystic Remora, Fact or Fiction |
| Black | Phyrexian Arena, Night's Whisper, Read the Bones |
| Green | Beast Whisperer, Guardian Project, Harmonize |
| White | Welcoming Vampire, Mentor of the Meek (historically white's weak spot) |
| Red | Outpost Siege, the impulse-draw "exile and play" effects |
| Colorless | The cantrip Signets and rocks like Mind Stone that replace themselves |

Rhystic Study is the poster child for a reason: it draws a card nearly every turn at a four-player table because nobody wants to pay the one extra mana. Phyrexian Arena draws an extra card every upkeep for one life. Those are engines. A single Divination is fine filler, but if your whole draw package is one-shot spells, you'll run dry. Budget builds lean on Night's Whisper, Read the Bones, and Harmonize, all of which are cheap and excellent. The premium end is mostly the same cards in foil, honestly. Good card draw is one of the most affordable categories in the game.

## Step 5 — 10 removal and interaction

![Swords to Plowshares, a one-mana white instant that exiles any creature, the most efficient catch-all removal in Commander.](/images/blog/magic-the-gathering/how-to-build-a-commander-deck/swords-to-plowshares.jpg)

You need answers, and you need them to cover different problems. Split this slot roughly into 8 single-target removal spells plus 2 to 3 board wipes (which live in their own line on the skeleton).

Single-target interaction wants variety so you aren't stuck. A creature you can only kill if it's also an artifact is a dead card half the time. Spread across:

- **Catch-all kill spells:** Swords to Plowshares and Path to Exile (white), Beast Within (green), Chaos Warp (red), Generous Gift.
- **Targeted spot removal:** black's Murder and Go for the Throat, blue's bounce like Pongify and Rapid Hybridization.
- **Artifact and enchantment hate:** Disenchant, Nature's Claim, Krosan Grip so you can break up degenerate engines.

For board wipes, your three should be flexible: Wrath of God or Damnation for creatures, a Cyclonic Rift or Toxic Deluge for asymmetry, and something like Vandalblast or Blasphemous Act depending on colors. Our [best removal spells breakdown](/blog/magic-the-gathering/best-removal-spells-mtg) ranks the most efficient picks by color and tells you which to prioritize on a budget. The cheap versions of removal are some of the best cards in the format, Swords to Plowshares included.

## Step 6 — 37 lands

Thirty-seven is the number that keeps the whole machine running, and shorting it is the most common way new decks brick. If you cut to 34 lands to fit more spells, you will lose more games to mana screw than you'll ever win with the extra spell.

A clean 37-land base for a two-color deck looks something like:

- **Command Tower:** taps for any color in your identity, an auto-include in every multicolor deck.
- **Basics:** the backbone. Split them roughly by your color demands.
- **Dual lands:** shocks, the cycling triomes, check lands, and any budget tapped duals you can afford.
- **A few utility lands:** something like Reliquary Tower (no hand-size limit), a creature land, or a Bojuka Bog for graveyard hate.

Don't over-stuff utility lands. Every nonbasic that enters tapped or can't make your colors is a small tax on consistency. Three to five utility lands is plenty for most decks. For the full rundown on which fixing lands are worth it at every budget, see our [best lands for Commander guide](/blog/magic-the-gathering/best-lands-commander-mtg). The good news: a functional mana base can be built almost entirely from basics, Command Tower, and a handful of budget duals.

## Step 7 — the flex slots

After 37 lands, 10 ramp, 10 draw, 10 removal, and 3 wipes, you've got your commander and roughly 29 to 30 open slots. This is where the deck stops being a template and becomes a deck.

Fill these with:

- **Theme and synergy:** the payoffs that match your wincon. If you're a token deck, this is your anthem effects and token generators. If you're Voltron, this is your equipment package.
- **Protection:** counterspells, ward effects, and instants like Heroic Intervention that save your board from a wipe.
- **Tutors:** if your deck has key pieces, a few tutors raise consistency. Use sparingly at casual tables.
- **The fun stuff:** the splashy haymakers and pet cards that make you want to play the deck.

These 30 cards are the most personal part of the build, and they're where archetype knowledge pays off. If you're not sure what payoffs your strategy wants, our [deck archetypes explainer](/blog/magic-the-gathering/mtg-deck-archetypes-explained) breaks down what each style needs in its flex slots.

## Curve, color balance, and the final cut

A skeleton can still be clunky if your mana curve is a mess. Aim for an average mana value around 3. That means most of your nonland cards cost between 1 and 4, with a small number of expensive bombs at the top. If your curve is a wall of 5- and 6-drops, you'll spend the early game doing nothing while the aggressive deck across the table wins.

Color balance matters too. Count your colored pips, not just your card colors. A "two-color deck" that's 80% blue cards with a few double-black bombs will choke on those double-pip costs unless your land base supports it. Match your basics and fixing to where the demand actually is. If you have eight cards with double-blue costs and three with double-black, your mana should reflect that ratio, not a flat 50/50.

Then comes the part nobody loves: cutting to exactly 100. Commander demands precisely 100 cards including your commander, no sideboard, no fudging. You will build a 105-card pile and have to cut five. Cut the highest-cost cards that don't advance your wincon first. Cut situational answers you'll rarely want. Cut the second copy of an effect you already have. A deckbuilder like [Archidekt](https://www.archidekt.com/) or [Moxfield](https://moxfield.com/) makes this painless by graphing your curve and flagging your pip counts automatically, and [EDHREC](https://edhrec.com/) shows you what cards similar commanders run if you're stuck on a slot.

## Upgrading from a precon

If building from scratch sounds like a lot, don't. A preconstructed Commander deck is the single easiest on-ramp in the game. You get 100 legal cards, a tested commander, and a working (if mediocre) mana base out of the box for the price of a typical precon.

The upgrade path is the 10/10/10 template in reverse. Most precons are already light on ramp and card draw, so:

1. Identify the 10 weakest cards. Precons are padded with filler that does nothing for the strategy. Those are your cuts.
2. Add ramp and card draw first. Slot in Arcane Signet, a couple of Talismans or Signets, and two or three repeatable draw engines like Night's Whisper or Phyrexian Arena.
3. Fix the mana base. Precons run too many tapped lands. Swap a few for Command Tower and untapped duals as your budget allows.

That alone turns a sluggish out-of-box deck into something that holds its own at most tables, often for under $30 in upgrades. For decks built entirely around tight budgets, our [best budget Commander decks under $100](/blog/magic-the-gathering/best-budget-commander-decks-under-100) breaks down full lists that already follow this structure. If a term in any of this tripped you up, the [Magic glossary](/glossary/magic-the-gathering) has plain-language definitions, and the official [Wizards Commander page](https://magic.wizards.com/en/formats/commander) has the current ban list and rules.

## Quick Action Checklist

- Pick a commander by colors and playstyle, not by tier list.
- Write your win condition in one sentence before building the 99.
- Lock in 37 lands. Do not cut below 35 without a reason.
- Run 10 ramp pieces, starting with Sol Ring and Arcane Signet.
- Run 10 card-draw pieces, weighted toward repeatable engines.
- Run 8 to 10 single-target removal plus 3 board wipes.
- Fill the remaining ~30 slots with theme, protection, and wincons.
- Target an average mana value around 3 and count your colored pips.
- Cut high-cost, off-plan cards first to hit exactly 100.
- Building on a budget? Start with a precon and upgrade ramp, draw, and lands first.`,
  faq: [
    {
      question: 'How many lands should be in a Commander deck?',
      answer: "Run 37 lands as your default. That number keeps a typical deck hitting its land drops without flooding. Heavy-ramp or low-curve decks can drop to 35, and landfall or top-end decks can climb to 39 or 40, but 37 is the safe starting point for almost any build.",
    },
    {
      question: 'How much ramp does a Commander deck need?',
      answer: "Aim for about 10 ramp pieces. That covers getting ahead on mana early and recovering after a board wipe. Mana-hungry or high-curve decks can push to 12 or 13, while aggressive low-curve decks can sit closer to 8. Sol Ring and Arcane Signet belong in nearly every deck.",
    },
    {
      question: 'Why does my Commander deck run out of cards?',
      answer: "You're almost certainly short on card draw, which is the most-skipped category in new decks. Cantrips that draw one card and stop won't cut it. Run around 10 draw pieces and weight them toward repeatable engines like Rhystic Study, Phyrexian Arena, or Beast Whisperer so you refuel every turn instead of just once.",
    },
    {
      question: 'Is it cheaper to build a Commander deck or buy a precon?',
      answer: "Buying a precon is cheaper and faster for a first deck. You get 100 legal cards and a working mana base for one set price, then upgrade over time. Building from scratch only beats a precon on cost if you already own a large collection. The smart budget move is buying a precon and upgrading its ramp, draw, and lands.",
    },
    {
      question: 'What is the 10/10/10 Commander template?',
      answer: "It's a deckbuilding skeleton: 10 ramp pieces, 10 card-draw pieces, and 10 removal and interaction spells, layered on top of 37 lands and about 3 board wipes. That structure handles the consistency categories so the remaining ~30 slots can focus on your theme and win conditions. It's a starting point you adjust per strategy, not a hard rule.",
    },
    {
      question: 'How many board wipes should a Commander deck have?',
      answer: "Two to three board wipes is the sweet spot for most decks. They reset a board you can't win and buy time when you fall behind. Run fewer if your deck wants to keep its own creatures on the field, and run more in control-style decks. Make the ones you do run flexible, covering creatures, artifacts, or asymmetric resets.",
    },
  ],
  internalLinks: [
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering blog hub' },
    { href: '/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start', anchor: 'Commander format starter guide' },
    { href: '/blog/magic-the-gathering/best-lands-commander-mtg', anchor: 'best lands for Commander guide' },
    { href: '/blog/magic-the-gathering/best-removal-spells-mtg', anchor: 'best removal spells breakdown' },
    { href: '/blog/magic-the-gathering/best-budget-commander-decks-under-100', anchor: 'best budget Commander decks under $100' },
    { href: '/blog/magic-the-gathering/mtg-deck-archetypes-explained', anchor: 'deck archetypes explainer' },
    { href: '/glossary/magic-the-gathering', anchor: 'Magic glossary' },
  ],
  externalSources: [
    { url: 'https://edhrec.com/', title: 'EDHREC' },
    { url: 'https://www.archidekt.com/', title: 'Archidekt Deckbuilder' },
    { url: 'https://moxfield.com/', title: 'Moxfield' },
    { url: 'https://magic.wizards.com/en/formats/commander', title: 'Wizards Commander' },
  ],
  tldr: "Most weak Commander decks fail on category balance, not card choice. Use the 10/10/10 template: 37 lands, 10 ramp, 10 card draw, 10 removal and interaction, ~3 board wipes, leaving ~30 slots for your commander, theme, and win conditions. It's a starting skeleton you adjust for ramp-heavy or landfall strategies. Pick your commander by playstyle, name your wincon in one sentence, target an average mana value around 3, and cut to exactly 100. Building on a budget? Start with a precon and upgrade its ramp, draw, and mana base first.",
  itemList: {
    name: 'The 10/10/10 Commander Deck Skeleton',
    items: [
      { name: '37 Lands', description: 'The mana backbone that keeps you hitting land drops; cut below 35 only with a deliberate reason.' },
      { name: '10 Ramp', description: 'Mana rocks, dorks, and ramp spells that get you ahead and help recover after a board wipe.' },
      { name: '10 Card Draw', description: 'Repeatable engines like Rhystic Study and Phyrexian Arena so the deck never runs out of gas.' },
      { name: '10 Removal + Interaction', description: 'Flexible single-target answers to kill the threats that beat you, spread across card types.' },
      { name: '3 Board Wipes', description: 'Flexible sweepers to reset a board you cannot otherwise win and buy time when behind.' },
      { name: '~30 Theme/Wincon slots', description: 'Your commander plus the synergy, protection, and payoffs that make the deck actually yours.' },
    ],
  },
};
