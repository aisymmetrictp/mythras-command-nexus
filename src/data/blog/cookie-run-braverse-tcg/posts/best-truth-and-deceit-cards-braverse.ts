import type { BlogPost } from '../../blogTypes';

export const bestTruthAndDeceitCardsBraverse: BlogPost = {
  slug: 'best-truth-and-deceit-cards-braverse',
  game: 'cookie-run-braverse-tcg',
  category: 'card-guides',
  topicCluster: 'set-coverage',
  tags: ['A Game of Truth and Deceit', 'BS9', 'Beast', 'Ancient', 'FLIP', 'Soul Jam', 'Set Review'],
  title: 'Best Cards from Cookie Run: Braverse — A Game of Truth and Deceit',
  metaDescription:
    'A set review of A Game of Truth and Deceit (BS9) for Cookie Run: Braverse: the five Shadow Milk Beasts, the best Ancients, the Soul Jam, and what to chase.',
  excerpt:
    "A Game of Truth and Deceit is the Shadow Milk Cookie set - one new Beast in every color, each a different deck. Here are the standouts ranked by color and role, with real cost, HP, and skill text off the official database.",
  featuredImagePrompt:
    'A fan of Cookie Run: Braverse A Game of Truth and Deceit cards centered on Shadow Milk Cookie, jester-villain art in five color variants, masks and theater motifs, a gold rank badge against a dark stage-curtain backdrop.',
  heroImage:
    '/images/blog/cookie-run-braverse-tcg/best-truth-and-deceit-cards-braverse/shadow-milk-cookie-purple.webp',
  heroImageAlt:
    'Official Purple Shadow Milk Cookie card (BS9-102), the headline Beast of A Game of Truth and Deceit in Cookie Run: Braverse, a 6-HP LV.3 mill payoff that needs 20 cards in each trash to deploy.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-braverse-tcg/best-truth-and-deceit-cards-braverse/shadow-milk-cookie-purple.webp',
      sourceUrl: 'https://cookierunbraverse.com',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/best-truth-and-deceit-cards-braverse/shadow-milk-cookie-blue.webp',
      sourceUrl: 'https://cookierunbraverse.com',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/best-truth-and-deceit-cards-braverse/soul-jam-light-of-deceit.webp',
      sourceUrl: 'https://cookierunbraverse.com',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/best-truth-and-deceit-cards-braverse/black-sapphire-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/best-truth-and-deceit-cards-braverse/truthless-recluse.webp',
      sourceUrl: 'https://cookierunbraverse.com',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
  ],
  publishDate: '2026-06-07T00:00:00.000Z',
  lastUpdated: '2026-06-07T00:00:00.000Z',
  primaryKeyword: 'best a game of truth and deceit cards',
  secondaryKeywords: [
    'a game of truth and deceit braverse',
    'cookie run braverse shadow milk cookie',
    'truth and deceit set review',
    'best bs9 cards braverse',
    'soul jam light of deceit',
    'braverse beast cookies',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 12,
  toc: [
    { id: 'what-a-game-of-truth-and-deceit-adds', label: 'What A Game of Truth and Deceit adds', level: 2 },
    { id: 'how-we-ranked-these', label: 'How we ranked these', level: 2 },
    { id: 'the-headliners-the-five-shadow-milk-beasts', label: 'The headliners: the five Shadow Milk Beasts', level: 2 },
    { id: 'the-soul-jam-and-the-returning-ancients', label: 'The Soul Jam and the returning Ancients', level: 2 },
    { id: 'the-best-support-cookies-and-role-players', label: 'The best support Cookies and role-players', level: 2 },
    { id: 'the-flip-package-this-set-runs-on', label: 'The FLIP package this set runs on', level: 2 },
    { id: 'who-should-chase-what', label: 'Who should chase what', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Every Cookie Run: Braverse set so far has handed you a row of legends to collect. A Game of Truth and Deceit (the official BS9 booster, out January 29, 2026) does something nastier: it hands you a *villain*, and prints him five times. Shadow Milk Cookie - the jester Beast of Deceit - shows up once in every color, and the trick is that each version is a completely different card built for a completely different deck. There is no "the good Shadow Milk." There is the Red one, the Yellow one, the Green one, the Blue one, and the Purple one, and which is best depends entirely on what you're trying to do.

This is the set review: what the booster actually adds, the standout cards ranked off the official card-database text, and a straight answer on what to chase whether you're collecting or building. Quick notation refresher before we start - the {R}/{Y}/{G}/{B}/{P} symbols are each color's resource, {N} is any color, a number after an attack name is its damage, and "FLIP" is the face-down-HP mechanic the whole set leans on (full breakdown in our [FLIP mechanic guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-flip-mechanic)). All costs, HP, and skill text below are quoted directly from the official database. One honest rarity note up front: the database labels these five Shadow Milks as **SUR (Secret Ultra Rare)** and most of the other chase cards as **SSR (Secret Super Rare / Super Rare)** - we'll use those labels rather than the plain "UR/SR" some community trackers use, because that's what the official data says.

## What A Game of Truth and Deceit adds

Three things define this set as a product.

First, the **five Shadow Milk Cookies**. This is the marquee: the Beast-keyword villain printed one per color (BS9-010 Red, BS9-030 Yellow, BS9-055 Green, BS9-079 Blue, BS9-102 Purple), each a Secret Ultra Rare and each its own build-around. They aren't reprints of one effect with a recolored frame - the Red one rewards your Cookies *fainting*, the Yellow one is a FLIP engine, the Purple one is a 20-trash mill payoff. Five villains, five decks.

Second, the **"truth and deceit" theme** running through the commons and uncommons: cards that manipulate HP stacks directly. The set is full of effects that *add* cards to a Cookie's HP, *move* HP between Cookies, and add cards from your **opponent's hand face-up into your Cookie's HP** - a genuinely new angle on the FLIP system. This isn't flavor text; it's the mechanical spine that makes the rare cards work.

Third, it's a **returning-Ancient set with a single Soul Jam**. Unlike Age of Heroes and Kingdoms, which printed five Ancients and five Soul Jams at once, Truth and Deceit reprints fresh versions of the legendary Ancients (Hollyberry, Golden Cheese, Pure Vanilla, White Lily, Dark Cacao all appear) but ships only one Soul Jam - Soul Jam: Light of Deceit (BS9-092) - tied specifically to Shadow Milk. For the broader Ancient context, see our [best Ancient cards ranking](/blog/cookie-run-braverse-tcg/best-ancient-cards-cookie-run-braverse).

## How we ranked these

Same three-axis discipline as our [overall card ranking](/blog/cookie-run-braverse-tcg/best-cookie-run-braverse-cards-ranked): **rarity** (where it sits on the ladder), **raw effect impact** (what the official text actually does on the board), and **competitive relevance** (how reliably it fires and how many decks want it). A card has to score on more than one axis to climb. A splashy Secret Ultra Rare that needs a whole deck built around a 20-card trash count ranks below a Cookie that's just good the moment it hits the table. As always, this is our read, not an official tier list - Devsisters publishes none - and nothing in this set is on the ban list.

## The headliners: the five Shadow Milk Beasts

The five Shadow Milks are the face of the set, so they lead. Ranked among themselves by how easily they actually win games:

1. **Shadow Milk Cookie (BS9-030, Yellow, Secret Ultra Rare, 6 HP, Beast, LV.3).** The best of the five and a FLIP payoff engine. His Journey Toward Truth is an EXTRA play - discard 3 {Y} Cookies that have FLIP from your hand to put him down - and his Light of Truth attack deals 3, then lets you discard a Cookie with FLIP to **activate that card's FLIP effect on demand.** That's the whole point: he turns FLIP cards, which normally only fire defensively when *you* get attacked, into effects you fire on your own terms. A 6-HP body that also draws/buffs/pings through your FLIP suite is the cleanest engine in the set.
2. **Shadow Milk Cookie (BS9-102, Purple, Secret Ultra Rare, 6 HP, Beast, LV.3).** The mill finisher. Spectacular Finale is an EXTRA play that can only happen once **there are 20 or more cards in each player's trash**, and once he's down his Once Per Turn skill forces the opponent to pitch a card from a full hand. His False Persona attack deals 2, then 1 more if the opponent's trash is 20+. The biggest body in the set tied with the Yellow one, and the obvious top-end for a Purple "trash matters" deck - but he's a payoff, not a starter, so he ranks behind the engine.
3. **Shadow Milk Cookie (BS9-010, Red, Secret Ultra Rare, 4 HP, Beast, LV.2).** The aggro sacrifice payoff. Time for Deceit can be played if **2 or more of your Red LV.1 Cookies fainted during the opponent's previous turn** - so he rewards an aggressive Red board that trades bodies. On play he buries a card from the opponent's hand into his own HP, and Puppet Theater of Fear deals 2 then steals an HP card off an opposing Cookie. A genuinely scary cheap finisher for a deck already throwing Cookies away.
4. **Shadow Milk Cookie (BS9-079, Blue, Secret Ultra Rare, 5 HP, Beast, LV.3).** The Extra-Deck combo piece. He has no skill - his whole identity is the attack, Ahh, welcome, welcome!, which deals 3 then **reveals a Shadow Milk Cookie from your Extra Deck and activates that Cookie's attack effect.** A second attack trigger stapled to a swing, which is explosive in a dedicated Shadow Milk shell and dead weight outside one. High ceiling, narrow floor.
5. **Shadow Milk Cookie (BS9-055, Green, Secret Ultra Rare, 5 HP, Beast, LV.3).** The ramp-engine version. Stage Opening is an EXTRA play gated behind the opponent having 3+ Support cards *and* you having trashed 2+ Support this turn, and his skill recycles Support when you're low. It's a fine Green engine body, but it asks the most setup of the five for the least immediate payoff, so it's the one to chase last on power.

The honest read: like the Age of Heroes Ancients, all five are *playable*, which is rare - but unlike that set, they're not equal. The Yellow and Purple Shadow Milks are real archetype centerpieces; the Red one is a great aggro top-end; the Blue and Green ones need a built deck to shine.

## The Soul Jam and the returning Ancients

![Official Soul Jam: Light of Deceit card (BS9-092), the only Soul Jam in A Game of Truth and Deceit, which deals 2 damage and then equips to Shadow Milk Cookie for a damage-reduction shield in Cookie Run: Braverse.](/images/blog/cookie-run-braverse-tcg/best-truth-and-deceit-cards-braverse/soul-jam-light-of-deceit.webp)

This set's Soul Jam is a single, focused card rather than a five-color cycle:

- **Soul Jam: Light of Deceit (BS9-092, Blue, Item, Secret Super Rare).** Pay {B}{N} and discard 2 cards to deal 2 damage to an opposing Cookie, then **equip it to your Shadow Milk Cookie**; while equipped, if you have 5 or fewer cards in hand, that Cookie takes -3 damage on your turn. So it's a removal spell *and* a near-unkillable shield for whichever Shadow Milk you mount it on - and the "5 or fewer cards in hand" clause lines up perfectly with the discard-heavy decks Shadow Milk already wants to play. It's the glue of the archetype, and a real card before it's ever equipped.

On the Ancient side, Truth and Deceit reprints the legendary lineup with new numbers and tweaked text. The two worth knowing:

| Card | Color | Notes |
| --- | --- | --- |
| **Hollyberry Cookie** (BS9-017) | Red | SSR, 5 HP, Ancient. Reduces 3+ hits against your Ancients down to 2 and pumps her own attack with another Ancient out - a wall and a beater. |
| **Pure Vanilla Cookie** (BS9-088) | Blue | SUR, 0 base HP, Ancient. An Awaken payoff that reveals the top of your deck for HP and a draw, and Love & Peace deals 4 then heals. The set's premium Blue centerpiece. |

The Ancients here are good cards, but they're returning faces, not the set's identity. If you're chasing this booster for the legends, the Age of Heroes set is still the cleaner Ancient product; Truth and Deceit is the *Beast* set.

## The best support Cookies and role-players

![Official Black Sapphire Cookie card (BS9-100), a Purple Secret Super Rare from A Game of Truth and Deceit whose Stage Broadcast skill mills five cards off both decks - a fast engine for the Purple trash plan in Cookie Run: Braverse.](/images/blog/cookie-run-braverse-tcg/best-truth-and-deceit-cards-braverse/black-sapphire-cookie.webp)

Below the headliners, this set is genuinely deep in cards that fill out a deck:

- **Black Sapphire Cookie (BS9-100, Purple, Secret Super Rare, 4 HP).** The mill enabler that makes the Purple Shadow Milk reachable. Stage Broadcast mills 5 off your deck *and* 5 off your opponent's on play, and Showtime! deals 3 then mills 3 off both decks. The single best card for hitting the "20 cards in each trash" gate. If you build Purple mill, this is a four-of before you even think about the Beast.
- **Truthless Recluse (BS9-035, Yellow, Secret Ultra Rare, 5 HP, LV.3).** A control hate-piece. Truth Seeker discards a card to **stop your opponent from adding HP to their Cookies via effects** for the turn - a hard counter to the entire "add to HP" theme this set is built around - and Shadow of Despair deals 3 with a removal rider when your Break Area is stocked. A nasty answer card with real stats.
- **Black Raisin Cookie (BS9-077, Blue, Secret Super Rare, 3 HP).** Clean card filtering: Reconnaissance Time draws 1 and tucks a card on top, and her cheap attack can put her back on the deck. A tidy Blue cog for any draw-cycle plan.
- **Wind Archer Cookie (BS9-050, Green, Secret Super Rare, 4 HP).** Green's Support-recursion piece - Crow Storm reactivates a Support card when you've trashed 2+, and Arrow of Darkness pings the whole opposing board for 1 at the cost of trashing Support. Exactly the fuel the Green engine wants.
- **Candy Apple Cookie (BS9-014, Red, Secret Super Rare, 2 HP) and Parfait Cookie (BS9-015, Red, Secret).** Two cheap Red enablers - Candy Apple buries an opponent's HP card into her own stack, and Parfait replays a Cookie from hand when she faints, feeding the Red Shadow Milk's "Cookies fainted" trigger.

None of these are the box art, but the depth is the point: this is a set you can build three different decks out of (Yellow FLIP, Purple mill, Red sacrifice-aggro) and have each one feel distinct.

## The FLIP package this set runs on

![Official Truthless Recluse card (BS9-035), a Yellow Secret Ultra Rare from A Game of Truth and Deceit whose Truth Seeker skill stops the opponent from adding HP to their Cookies - a hard answer to the set's HP-manipulation theme in Cookie Run: Braverse.](/images/blog/cookie-run-braverse-tcg/best-truth-and-deceit-cards-braverse/truthless-recluse.webp)

The thing that makes the Yellow Shadow Milk engine actually function is the wall of cheap FLIP-type cards this set prints. Because the Yellow Beast discards FLIP Cookies to fire their effects on demand, the set gives you a deep menu of FLIP triggers to feed him:

- **Draw-on-flip** commons in every color - Cherry Blossom (BS9-007), Burnt Cheese (BS9-026), Butter Roll (BS9-051), Candy Diver (BS9-071), Prophet (BS9-104) - all read "Draw up to 1 card from your deck." These are the bread-and-butter fuel: a FLIP card that draws is good defensively *and* good when Shadow Milk discards it for value.
- **HP-buff FLIP cards** like Macaron (BS9-005), Financier (BS9-042), Matcha (BS9-048), and Crunchy Chip (BS9-110) discard a card to give the Cookie they're attached to +1 HP - cheap, reusable defense.
- **The standout FLIP commons** are the ones with a rider when fired on *your* turn: Pistachio Cookie (BS9-041) draws then pings a Cookie for 1, and Yoga Cookie (BS9-032) draws then sets one of your Cookies active. Those "if activated during your turn" clauses are written specifically for the Shadow Milk engine that activates FLIP on your own turn.
- **Apple Faerie Cookie (BS9-037, Yellow, SSR)** ties it together - when she faints, she returns up to 2 {Y} FLIP Cookies from your trash to hand, refilling the engine's ammo.

The takeaway for builders: Truth and Deceit is the first set where the *commons* are the engine. You don't chase the FLIP commons, but you absolutely run a stack of them, and the Yellow Shadow Milk is only as good as the FLIP suite you feed it.

## Who should chase what

If you're **collecting**, the five Shadow Milk Cookies are the obvious targets - they're the set's signature Secret Ultra Rares and the debut of a major Cookie Run villain in the TCG. After the Beasts, the reprinted Ancients (especially the Blue Pure Vanilla, BS9-088) and Soul Jam: Light of Deceit round out the prestige pulls. For the full rarity ladder, see our [rarities and collecting guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-rarities-collecting-guide).

If you're **building to win**, chase by deck. Yellow FLIP wants the Yellow Shadow Milk (BS9-030), Apple Faerie, and a deep FLIP-common suite. Purple mill wants the Purple Shadow Milk (BS9-102) plus Black Sapphire (BS9-100) as the engine that gets you to 20 trash. Red sacrifice-aggro wants the Red Shadow Milk (BS9-010) and the cheap fainters that turn it on. Blue Shadow Milk is for players who want to build the dedicated Extra-Deck combo and nothing less. Pick the plan you like, then grab that color's Beast - and leave the other four for the binder unless you're switching decks.

> The honest read on A Game of Truth and Deceit: it's the most *deck-focused* set Braverse has shipped. Age of Heroes was about collecting five legends; this one is about picking one villain and building the machine around him. The Yellow and Purple Shadow Milks are the real centerpieces, the FLIP commons are secretly the most important cards in the set, and Soul Jam: Light of Deceit is the glue. It's a builder's set first and a collector's set second.

## Quick Action Checklist

- **The Yellow Shadow Milk (BS9-030) is the best card in the set.** A FLIP engine that fires your face-down effects on your own terms - chase it first if you're building to win.
- **The Purple Shadow Milk (BS9-102) is the best finisher.** A 6-HP mill payoff, but he needs 20 cards in each trash, so he's an endgame, not an opener.
- **Black Sapphire (BS9-100) makes the Purple plan work.** Mill 5 off both decks on play; it's the engine that reaches the Purple Beast's trash gate.
- **Soul Jam: Light of Deceit (BS9-092) is the archetype glue.** Removal plus a -3 damage shield that equips to any Shadow Milk.
- **The FLIP commons are the real engine.** Run a deep suite of draw-on-flip Cookies; the Yellow Beast is only as good as its FLIP fuel.
- **Truthless Recluse (BS9-035) is the set's best answer card.** It shuts off "add HP" effects - the exact thing this set tries to do to you.
- **Collect for the Beasts, build for one villain.** Chase the five Shadow Milks if you're collecting; commit to one color's plan if you're winning.`,
  faq: [
    {
      question: 'What is the best card in A Game of Truth and Deceit?',
      answer:
        "The Yellow Shadow Milk Cookie (BS9-030), a Secret Ultra Rare Beast with 6 HP, is the strongest card for competitive decks. His Light of Truth attack lets you discard a Cookie that has FLIP to activate that card's FLIP effect on demand, which turns your defensive FLIP cards into effects you can fire on your own turn. The Purple Shadow Milk (BS9-102) is the best finisher, but it needs 20 cards in each player's trash to deploy, so it ranks behind the Yellow engine.",
    },
    {
      question: 'How many Shadow Milk Cookies are in the set?',
      answer:
        'Five - one in every color, all Secret Ultra Rare Beasts: Red (BS9-010), Yellow (BS9-030), Green (BS9-055), Blue (BS9-079), and Purple (BS9-102). Each is a different card built for a different deck: the Red one rewards your Cookies fainting, the Yellow one is a FLIP engine, the Purple one is a mill payoff, the Blue one chains an Extra-Deck attack, and the Green one is a Support-ramp engine.',
    },
    {
      question: 'What set is A Game of Truth and Deceit in Cookie Run: Braverse?',
      answer:
        'It is the official BS9 booster, released January 29, 2026. In the official card database every card carries a BS9 prefix, so the whole set sits in one number range - there is no second prefix to track like the BS3/BS4 split in Age of Heroes and Kingdoms.',
    },
    {
      question: 'What does Soul Jam: Light of Deceit do?',
      answer:
        "Soul Jam: Light of Deceit (BS9-092) is a Blue Item. You pay {B}{N} and discard 2 cards to deal 2 damage to an opposing Cookie, then you can equip it to your Shadow Milk Cookie. While equipped, if you have 5 or fewer cards in hand, that Cookie takes -3 damage on your turn - so it is both a removal spell and a near-unkillable shield for your Beast. It is the only Soul Jam in the set.",
    },
    {
      question: 'Which Truth and Deceit cards should I chase?',
      answer:
        'For collecting: the five Shadow Milk Cookies are the signature Secret Ultra Rare pulls, with the reprinted Ancients (especially Blue Pure Vanilla, BS9-088) and Soul Jam: Light of Deceit behind them. For deckbuilding, chase by plan - the Yellow Shadow Milk (BS9-030) for FLIP, the Purple Shadow Milk (BS9-102) plus Black Sapphire (BS9-100) for mill, and the Red Shadow Milk (BS9-010) for sacrifice-aggro.',
    },
    {
      question: 'Is A Game of Truth and Deceit good for new players?',
      answer:
        'It is a builder-focused set more than a beginner set. The FLIP-common engine that powers the Yellow Shadow Milk demands you understand the FLIP mechanic well, and the Purple mill payoff requires careful setup. New players are better served starting with a single-color starter and our colors guide first, then coming back to Truth and Deceit once they want to build around a specific Shadow Milk.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-braverse-tcg', anchor: 'Braverse hub' },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-flip-mechanic',
      anchor: 'FLIP mechanic guide',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-ancient-cards-cookie-run-braverse',
      anchor: 'best Ancient cards ranking',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-cookie-run-braverse-cards-ranked',
      anchor: 'best cards overall',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-rarities-collecting-guide',
      anchor: 'rarities and collecting guide',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-age-of-heroes-cards-braverse',
      anchor: 'Age of Heroes and Kingdoms set review',
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
    "A Game of Truth and Deceit (BS9, released January 29, 2026) is the Shadow Milk Cookie set: the Beast villain is printed once in every color as a Secret Ultra Rare, and each version is a different deck. The best card is the Yellow Shadow Milk (BS9-030), a FLIP engine that activates your face-down HP effects on your own turn; the Purple Shadow Milk (BS9-102) is the best finisher but needs 20 cards in each trash. Black Sapphire (BS9-100) is the mill engine that gets you there, Soul Jam: Light of Deceit (BS9-092) is the archetype glue, and the deep suite of draw-on-flip FLIP commons is secretly the most important part of the set. Collect for the five Beasts; build around one villain.",
  itemList: {
    name: 'Best Cards from A Game of Truth and Deceit',
    items: [
      { name: 'Shadow Milk Cookie (BS9-030, Yellow)', description: 'Secret Ultra Rare, 6 HP, Beast - a FLIP engine that discards FLIP Cookies to fire their effects on your own turn. The best card in the set.' },
      { name: 'Shadow Milk Cookie (BS9-102, Purple)', description: 'Secret Ultra Rare, 6 HP, Beast - a mill payoff that deploys once both trashes hit 20 cards. The best finisher for Purple.' },
      { name: 'Shadow Milk Cookie (BS9-010, Red)', description: 'Secret Ultra Rare, 4 HP, Beast - a cheap aggro top-end that rewards your Red LV.1 Cookies fainting and steals from the opponent.' },
      { name: 'Black Sapphire Cookie (BS9-100, Purple)', description: 'Secret Super Rare, 4 HP - mills 5 off both decks on play. The engine that reaches the Purple Shadow Milk trash gate.' },
      { name: 'Soul Jam: Light of Deceit (BS9-092, Blue)', description: 'Secret Super Rare Item - deals 2, then equips to a Shadow Milk for a -3 damage shield. The archetype glue.' },
      { name: 'Truthless Recluse (BS9-035, Yellow)', description: 'Secret Ultra Rare, 5 HP - shuts off the opponent adding HP via effects. The set\'s best answer card.' },
      { name: 'Shadow Milk Cookie (BS9-079, Blue)', description: 'Secret Ultra Rare, 5 HP, Beast - chains an Extra-Deck Shadow Milk\'s attack effect. Explosive in a dedicated shell, narrow outside one.' },
      { name: 'Pure Vanilla Cookie (BS9-088, Blue)', description: 'Secret Ultra Rare, 0 base HP, Ancient - an Awaken payoff that draws and heals. The set\'s premium reprinted Ancient.' },
    ],
  },
};
