import type { BlogPost } from '../../blogTypes';

export const bestMtgLandfallPayoffs: BlogPost = {
  slug: 'best-mtg-landfall-payoffs',
  game: 'magic-the-gathering',
  category: 'card-guides',
  topicCluster: 'commander-strategy',
  tags: ['commander', 'landfall', 'lands-matter', 'green', 'ramp', 'card-guide'],
  title: 'Best Landfall Payoffs in MTG Commander, Ranked',
  metaDescription:
    'The best landfall payoffs in MTG Commander, ranked. Avenger of Zendikar, Scute Swarm, Lotus Cobra, Moraug and the cards that turn every land drop into a threat.',
  excerpt:
    "Playing a land is the one thing every deck does every turn — landfall payoffs are the cards that get paid for it. Here are the best landfall cards in Commander, ranked, from the token armies to the trigger-doublers that turn a fetchland into a game-winning play.",
  featuredImagePrompt:
    'A towering plant elemental rising from cracked earth as new terrain erupts around it, waves of green energy pulsing with each landmass forming, painterly fantasy art, no text',
  heroImage: '/images/blog/magic-the-gathering/best-mtg-landfall-payoffs/avenger-of-zendikar.jpg',
  heroImageAlt:
    'Avenger of Zendikar, the seven-mana Elemental that makes a Plant token for each land you control and grows the whole army on every land drop — the best landfall payoff in Commander.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-mtg-landfall-payoffs/avenger-of-zendikar.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-landfall-payoffs/scute-swarm.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-landfall-payoffs/tireless-provisioner.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-landfall-payoffs/ancient-greenwarden.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
  ],
  publishDate: '2026-07-14T00:00:00.000Z',
  lastUpdated: '2026-07-14T00:00:00.000Z',
  primaryKeyword: 'best landfall payoffs mtg',
  secondaryKeywords: [
    'best landfall cards commander',
    'mtg landfall payoffs ranked',
    'landfall commander deck',
    'lands matter commander cards',
    'scute swarm combo',
    'avenger of zendikar commander',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-landfall-is-the-best-build-around-in-commander', label: 'Why landfall is the best build-around in Commander', level: 2 },
    { id: 'how-landfall-triggers-actually-work', label: 'How landfall triggers actually work', level: 2 },
    { id: 'the-best-landfall-payoffs-ranked', label: 'The best landfall payoffs, ranked', level: 2 },
    { id: 'doubling-up-extra-lands-and-extra-triggers', label: 'Doubling up: extra lands and extra triggers', level: 2 },
    { id: 'building-the-landfall-shell', label: 'Building the landfall shell', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Every deck in Commander plays a land almost every turn. Most decks get exactly nothing for it beyond the mana. A landfall deck gets a 1/1 Insect that copies itself, a Treasure, four points of drain, or an entire extra combat step — off the same land drop everyone else is making for free. That's the pitch: landfall payoffs attach rewards to the single most reliable action in the game, and the good ones snowball so hard that a turn-six fetchland can represent twelve power hitting the battlefield.

The archetype has been printed deep enough across three Zendikar visits that the card pool is genuinely stacked, which means the gap between "good landfall card" and "wins the game on the spot" is wide. This ranking sorts it. Every card below has been verified against Scryfall for exact mana cost, type line, and Commander legality — all of them are legal, none of them are wishful thinking.

## Why landfall is the best build-around in Commander

Build-around archetypes usually carry a hidden tax. Aristocrats needs bodies AND sac outlets AND drain pieces before it does anything. Spellslinger needs a critical mass of instants and sorceries that don't do much on their own. Landfall's enabler is... lands. Cards you were playing anyway. The deck's floor is "a normal deck with good mana" and its ceiling is exponential.

That's also why landfall payoffs are unusually resilient to removal. If your opponent kills Avenger of Zendikar, you're sad, but the thirty-eight lands enabling it are still there, and the next payoff you draw plugs straight back into the same engine. Compare that to a Voltron deck losing its suited-up commander — the rebuild cost is a fraction.

The falsifiable version of the claim: Scute Swarm with six lands in play doesn't make one token per land drop, it makes a *copy of itself*, and every copy triggers on the next land. One Scute Swarm plus five land drops with six-plus lands out is 32 Scute Swarms — the growth is literally exponential, 2 to the power of your land drops. A fetchland cracked at that point doubles the army twice in one action. No other one-card payoff in the format scales like that off a resource every deck already runs.

## How landfall triggers actually work

Landfall reads simply — "whenever a land you control enters the battlefield" — but a few rules details decide games:

- **It doesn't care how the land arrived.** Played for turn, fetched, put in by Cultivate, bounced and replayed — every entry is a trigger. This is why fetchlands are secretly spells in a landfall deck: one card, two triggers.
- **Each land is a separate trigger.** Scapeshift-style effects or a Cultivate putting two lands in tapped means two full rounds of triggers, and you order them however you like on the stack.
- **Triggers stack per payoff.** With Avenger of Zendikar and Rampaging Baloths both out, every land gives you both effects. Payoffs multiply each other; that's the engine.
- **Instant-speed landfall exists.** Crack a fetch on an opponent's end step and Felidar Retreat still makes its Cat at instant speed. Holding a fetchland uncracked is holding a spell.

If the stack mechanics of multiple simultaneous triggers ever trip you up, our [stack and priority explainer](/blog/magic-the-gathering/mtg-stack-priority-explained) walks through exactly how ordering works.

## The best landfall payoffs, ranked

Ranked on raw impact in a four-player Commander game, weighted by how fast each card takes over, how well it scales with multiple land drops per turn, and how much it punishes the table for leaving it alone.

![Scute Swarm, a three-mana green Insect that copies itself on every land drop once you control six lands, growing exponentially.](/images/blog/magic-the-gathering/best-mtg-landfall-payoffs/scute-swarm.jpg)

1. **Avenger of Zendikar** — {5}{G}{G}. Enters with a 0/1 Plant for each land you control, then every landfall puts a +1/+1 counter on each Plant. Seven mana into eight-plus bodies that grow every turn is the defining top-end of the archetype. One untap with a fetchland and the Plants are lethal-sized. Still the best single payoff ever printed.
2. **Scute Swarm** — {2}{G}. Landfall makes a 1/1 Insect — but with six or more lands, it makes a token *copy of Scute Swarm* instead, and every copy has landfall too. Three mana, exponential growth, comes down turn two. It dies to everything and it does not matter, because by the time anyone reacts you have thirty insects.
3. **Tireless Provisioner** — {2}{G}. Landfall makes a Food or Treasure. It's Lotus Cobra with memory: the Treasures bank up instead of evaporating at end of phase, so a quiet turn still ramps you two mana ahead. In any deck with extra land drops it's one of the best three-drops in green, and it feeds [Treasure payoffs](/blog/magic-the-gathering/best-mtg-treasure-payoffs) as a bonus.
4. **Lotus Cobra** — {1}{G}. Landfall: add one mana of any color. A two-drop that makes every fetchland a Lotus Petal and every Cultivate a ritual. The explosive starts this card enables — land, fetch, Cobra mana into a four-drop on turn three — are why it's been a constructed all-star since 2009.
5. **Ancient Greenwarden** — {4}{G}{G}. Lands playable from your graveyard, and landfall triggers of your permanents trigger an additional time. It's a Panharmonicon for the whole engine: Avenger counters twice, Scute Swarm copies twice, Provisioner makes two Treasures. Six mana that doubles everything else on this list.
6. **Aesi, Tyrant of Gyre Strait** — {4}{G}{U}. An extra land drop every turn plus a card for every land that enters. As a commander it's the most reliable engine in the archetype — always castable, immediately replaces itself, and turns your land drops into a draw engine that out-grinds [dedicated card-draw packages](/blog/magic-the-gathering/best-card-draw-commander-mtg).
7. **Felidar Retreat** — {3}{W}. Landfall: create a 2/2 Cat Beast, or put a +1/+1 counter on each creature you control plus vigilance. The white payoff of choice — an enchantment (hard to kill), a token engine early, an anthem late. The mode flexibility is the point: it builds the board and then closes with it.
8. **Moraug, Fury of Akoum** — {4}{R}{R}. Each landfall during your main phase grants an *extra combat* with everything untapping. Crack a fetch after combat one and swing again; a Cultivate is three combats. In any deck with a wide board Moraug reads "double or triple your damage output this turn" and regularly just ends the game.
9. **Omnath, Locus of Creation** — {R}{G}{W}{U}. Draws a card on entry, then escalating landfall: first trigger gains 4 life, second makes four mana, third deals 4 damage to each opponent. Banned in multiple 60-card formats for a reason, still legal and excellent in Commander — but you need all four colors and multiple land drops to unlock the full line.
10. **Rampaging Baloths** — {4}{G}{G}. Landfall: a 4/4 Beast. The honest version of the archetype — no exponential tricks, just a 6/6 trampler that brings a 4/4 friend with every land. Budget-friendly and still genuinely strong; two land drops with Baloths out is 14 power for one card.

Honorable mentions that just missed: **Tatyova, Benthic Druid** ({3}{G}{U}) draws a card and gains a life per land and is a fine budget Aesi; **Retreat to Coralhelm** ({2}{U}) is a combo enabler with untap shenanigans; **Ob Nixilis, the Fallen** ({3}{B}{B}) drains an opponent for 3 and grows per land — the black deck's closer; and **Field of the Dead** is a land that pays you for playing lands, which is barely fair.

## Doubling up: extra lands and extra triggers

A landfall deck lives and dies on trigger count, and there are two multipliers: more lands per turn, and more triggers per land.

![Tireless Provisioner, a three-mana Elf Scout that creates a Food or Treasure token on every landfall trigger.](/images/blog/magic-the-gathering/best-mtg-landfall-payoffs/tireless-provisioner.jpg)

**More lands.** Extra-land-drop effects (Aesi, Exploration-style cards) and land-ramp sorceries do double duty here — a Cultivate is mana fixing in a normal deck and two payoff triggers in yours. Weight your [ramp package](/blog/magic-the-gathering/best-ramp-spells-commander-mtg) toward spells that put lands onto the battlefield rather than mana rocks; a Talisman never triggers Avenger.

**More triggers.** Ancient Greenwarden is the headliner, doubling every landfall trigger you control. Fetchlands and bounce lands stretch the count further — a fetch is two land entries across one card, and returning a land to hand means replaying it for another trigger tomorrow. This is also why your [land base](/blog/magic-the-gathering/best-lands-commander-mtg) matters more in this archetype than any other: every utility land you run is also a payoff activation.

The combination is where the deck goes from good to obnoxious: Greenwarden plus Provisioner plus a fetchland is four Treasures from one land. Stack Avenger on top and the same fetch adds eight counters across your Plants.

## Building the landfall shell

The skeleton for a dedicated landfall deck, using the [standard deckbuilding ratios](/blog/magic-the-gathering/mtg-deckbuilding-ratios) as a base:

- **38–40 lands.** Yes, really. The deck wants to hit every land drop forever, and flooding barely exists when every land is a spell. Cut the fortieth card, not the fortieth land.
- **8–10 payoffs.** The top of this list plus the ones that fit your colors. You want one by turn three most games; more than ten and you flood on payoffs with no gas.
- **10–12 ramp/extra-land effects,** weighted to battlefield land ramp: Cultivate, Kodama's Reach, extra-drop permanents. Every one is both acceleration and triggers.
- **Interaction stays honest.** The deck's weakness is a resolved board wipe the turn before you go off — pack [protection](/blog/magic-the-gathering/best-mtg-protection-spells) for your payoff permanents and don't tap out into open mana at a table that's seen your Scute Swarm trick before.

Green is non-negotiable as a base; the best second colors are blue (Aesi, draw), white (Felidar Retreat, Emeria-style value), and red (Moraug, Valakut effects). If you're newer to putting a 99 together, start with the [full Commander deckbuilding walkthrough](/blog/magic-the-gathering/how-to-build-a-commander-deck) and bolt this shell onto it.

![Ancient Greenwarden, a six-mana Elemental that lets you play lands from your graveyard and doubles all your landfall triggers.](/images/blog/magic-the-gathering/best-mtg-landfall-payoffs/ancient-greenwarden.jpg)

One last note on threat assessment: landfall decks look harmless for exactly two turns. Experienced tables kill Lotus Cobra on sight and save a wipe for the Avenger turn. Sequence around that — hold a payoff in hand rather than overextending into the obvious [board wipe](/blog/magic-the-gathering/best-board-wipes-mtg), and remember the engine rebuilds faster than any other archetype in the format.

## Quick Action Checklist

- Run 38–40 lands and 8–10 payoffs — the deck's consistency comes from never missing a land drop, not from extra payoff copies.
- Prioritize Avenger of Zendikar, Scute Swarm, and Tireless Provisioner as the core three; add Ancient Greenwarden the moment your trigger count matters.
- Weight ramp toward battlefield land ramp (Cultivate effects) over mana rocks — rocks don't trigger landfall.
- Treat fetchlands and bounce lands as spells: each one is extra triggers, and cracking a fetch at instant speed is a real play.
- Remember Scute Swarm's six-land threshold — sequence your turns so the copy mode is online before you deploy it into a developed board.
- Hold one payoff in reserve against board wipes; the lands survive the wipe, so the rebuild is one card deep.`,
  faq: [
    {
      question: 'What is the best landfall payoff in MTG Commander?',
      answer:
        'Avenger of Zendikar. For seven mana it creates a 0/1 Plant for each land you control, then every subsequent land drop puts a +1/+1 counter on each Plant. In a deck with 38-plus lands it routinely represents eight or more bodies that grow every turn, and it ends games within a turn or two if left unanswered.',
    },
    {
      question: 'How does Scute Swarm make so many tokens?',
      answer:
        'While you control six or more lands, Scute Swarm\'s landfall trigger creates a token copy of itself instead of a 1/1 Insect — and every copy also has landfall. Each land drop doubles the swarm, so growth is exponential: five land entries with six lands out turns one Scute Swarm into 32.',
    },
    {
      question: 'Do lands entering from effects like Cultivate trigger landfall?',
      answer:
        'Yes. Landfall triggers whenever a land enters the battlefield under your control, regardless of how it got there — played normally, fetched, or put in by a spell. A Cultivate that puts two lands onto the battlefield triggers each landfall ability twice.',
    },
    {
      question: 'Is Omnath, Locus of Creation legal in Commander?',
      answer:
        'Yes. Omnath, Locus of Creation is banned in several 60-card formats but fully legal in Commander. Its escalating landfall triggers — 4 life, then four mana, then 4 damage to each opponent — make it a strong payoff or commander for four-color landfall decks.',
    },
    {
      question: 'How many lands should a landfall Commander deck run?',
      answer:
        'Around 38 to 40, noticeably above the usual 36-37 baseline. Landfall decks convert every land into a payoff trigger, so flooding is nearly impossible, and the archetype depends on hitting a land drop every single turn of the game.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'All GamerTagMythras guides' },
    { href: '/blog/magic-the-gathering', anchor: 'All Magic: The Gathering guides' },
    { href: '/blog/magic-the-gathering/best-ramp-spells-commander-mtg', anchor: 'Best ramp spells in Commander' },
    { href: '/blog/magic-the-gathering/best-lands-commander-mtg', anchor: 'Best lands for Commander' },
    { href: '/blog/magic-the-gathering/best-mtg-treasure-payoffs', anchor: 'Best Treasure payoffs in MTG' },
    { href: '/blog/magic-the-gathering/how-to-build-a-commander-deck', anchor: 'How to build a Commander deck' },
    { href: '/blog/magic-the-gathering/mtg-deckbuilding-ratios', anchor: 'MTG deckbuilding ratios guide' },
  ],
  externalSources: [
    { url: 'https://scryfall.com/', title: 'Scryfall — card data, oracle text, and Commander legality' },
    { url: 'https://magic.wizards.com/en/formats/commander', title: 'Wizards of the Coast — official Commander format page' },
    { url: 'https://edhrec.com/themes/landfall', title: 'EDHREC — landfall theme statistics' },
  ],
  tldr:
    'The best landfall payoffs in Commander are Avenger of Zendikar, Scute Swarm, and Tireless Provisioner, with Ancient Greenwarden as the trigger-doubler that multiplies everything. Landfall attaches rewards to the land drop every deck already makes, so run 38-40 lands, weight ramp toward battlefield land ramp, and treat fetchlands as extra triggers.',
  itemList: {
    name: 'Best Landfall Payoffs in MTG Commander, Ranked',
    items: [
      { name: 'Avenger of Zendikar', description: 'Seven-mana Elemental that makes a Plant per land on entry, then grows every Plant on each land drop — the defining landfall finisher.' },
      { name: 'Scute Swarm', description: 'Three-mana Insect that copies itself on every landfall once you control six lands; exponential token growth.' },
      { name: 'Tireless Provisioner', description: 'Three-mana Elf that makes a Food or Treasure on every landfall — ramp that banks between turns.' },
      { name: 'Lotus Cobra', description: 'Two-mana Snake that adds a mana of any color per landfall, enabling explosive early turns.' },
      { name: 'Ancient Greenwarden', description: 'Six-mana Elemental that replays lands from the graveyard and doubles all your landfall triggers.' },
      { name: 'Aesi, Tyrant of Gyre Strait', description: 'Simic serpent granting an extra land drop each turn and drawing a card per land entry — the archetype\'s best engine commander.' },
      { name: 'Felidar Retreat', description: 'Four-mana white enchantment: each landfall makes a 2/2 Cat Beast or pumps your whole board with counters and vigilance.' },
      { name: 'Moraug, Fury of Akoum', description: 'Six-mana Minotaur granting an extra combat, with untaps, for each main-phase landfall.' },
      { name: 'Omnath, Locus of Creation', description: 'Four-color Elemental with escalating landfall: gain 4 life, make four mana, then deal 4 to each opponent.' },
      { name: 'Rampaging Baloths', description: 'Six-mana 6/6 trampler that creates a 4/4 Beast on every land drop — honest, budget-friendly power.' },
    ],
  },
};
