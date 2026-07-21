import type { BlogPost } from '../../blogTypes';

export const bestMtgPlaneswalkerCommanders: BlogPost = {
  slug: 'best-mtg-planeswalker-commanders',
  game: 'magic-the-gathering',
  category: 'card-guides',
  topicCluster: 'commander-strategy',
  title: 'Best Planeswalker Commanders in MTG, Ranked',
  metaDescription:
    'The best planeswalker commanders in MTG Commander, ranked. Only 21 planeswalkers can be your commander — here are the ones worth building around, and the traps.',
  excerpt:
    "Only 21 planeswalkers in all of Magic can legally sit in your command zone, and most of them are traps that die before they do anything. Here are the ones that actually earn the slot — ranked, with the deck each one wants to be.",
  featuredImagePrompt:
    'A weathered ranger and his glowing miniature hamster companion charging into battle, warm orange and green Gruul energy, dynamic fantasy oil-painting style, no text',
  heroImage: '/images/blog/magic-the-gathering/best-mtg-planeswalker-commanders/minsc-and-boo.jpg',
  heroImageAlt:
    'Minsc & Boo, Timeless Heroes — the Gruul planeswalker commander that makes a Hamster token and sacrifices it for damage and cards.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-mtg-planeswalker-commanders/minsc-and-boo.jpg',
      sourceUrl: 'https://scryfall.com/card/clb/285/minsc-boo-timeless-heroes',
      license: 'Card art © Wizards of the Coast; image via Scryfall (WotC Fan Content Policy)',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-planeswalker-commanders/teferi-temporal-archmage.jpg',
      sourceUrl: 'https://scryfall.com/card/cmm/125/teferi-temporal-archmage',
      license: 'Card art © Wizards of the Coast; image via Scryfall (WotC Fan Content Policy)',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-planeswalker-commanders/aminatou-the-fateshifter.jpg',
      sourceUrl: 'https://scryfall.com/card/2x2/169/aminatou-the-fateshifter',
      license: 'Card art © Wizards of the Coast; image via Scryfall (WotC Fan Content Policy)',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-planeswalker-commanders/lord-windgrace.jpg',
      sourceUrl: 'https://scryfall.com/card/c18/43/lord-windgrace',
      license: 'Card art © Wizards of the Coast; image via Scryfall (WotC Fan Content Policy)',
    },
  ],
  publishDate: '2026-07-21T00:00:00.000Z',
  lastUpdated: '2026-07-21T00:00:00.000Z',
  primaryKeyword: 'best planeswalker commanders mtg',
  secondaryKeywords: [
    'planeswalker commanders',
    'planeswalkers that can be your commander',
    'best superfriends commander',
    'minsc and boo commander deck',
    'teferi temporal archmage cedh',
    'aminatou commander',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-planeswalker-commanders-play-differently', label: 'Why planeswalker commanders play differently', level: 2 },
    { id: 'what-makes-a-planeswalker-commander-good', label: 'What makes a planeswalker commander good', level: 2 },
    { id: 'the-best-planeswalker-commanders-ranked', label: 'The best planeswalker commanders, ranked', level: 2 },
    { id: 'the-best-planeswalker-commander-for-cedh', label: 'The best planeswalker commander for cEDH', level: 2 },
    { id: 'the-best-budget-and-beginner-picks', label: 'The best budget and beginner picks', level: 2 },
    { id: 'the-partner-planeswalkers', label: 'The partner planeswalkers', level: 2 },
    { id: 'planeswalker-commanders-that-disappoint', label: 'Planeswalker commanders that disappoint', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Here is the whole problem with planeswalker commanders in one sentence: your commander sits on the battlefield with a loyalty number stapled to its head, and every creature at the table gets to punch it. A legendary creature blocks, dodges removal in the command zone, and comes back for two more mana. A planeswalker commander just gets swung at by three opponents until it dies, and then you have paid commander tax to redeploy a permanent that will immediately get swung at again. Most of the 21 planeswalkers that can legally be your commander are traps for exactly this reason.

But "most" is not "all." A handful of these are genuinely excellent — they generate value the turn they land, they protect themselves, or they come with Partner so losing one doesn't collapse the deck. This is a ranking of which planeswalker commanders actually earn the slot, and which ones look cool in the deck-builder and get you blown out in real games. Everything here has been legality-checked; all 21 are Commander-legal, and I'll be honest about the ones you should leave in the binder.

## Why planeswalker commanders play differently

A planeswalker in the command zone is not a creature, and that changes almost everything about how it plays inside the [Commander format](/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start).

**They get attacked.** Any opponent can send creatures at your commander instead of at you. In a three-opponent pod, a 3-loyalty planeswalker often does not survive a full turn cycle. Your commander is a magnet, and it has no toughness — only loyalty that ticks down every time a creature connects.

**Their abilities are sorcery-speed and once per turn.** You get one loyalty activation per planeswalker per turn, on your own turn, at sorcery speed. A creature commander can attack, block, tap for effects, and hold up interaction. A planeswalker commander does exactly one thing per turn and then sits there being fragile.

**Loyalty is a resource you rarely get to bank.** The dream of ultimate-ing your commander mostly stays a dream. If a planeswalker's plan is "survive six turns and hit the -8," assume it never happens across a real pod. The plus and the first minus ability are what you are actually buying.

The upside that keeps them relevant: a planeswalker generates its effect from the command zone every single game, with total consistency, and it does so without dying to creature removal aimed at the board. If the plus ability is strong enough on turn one, that reliability is worth the fragility. That is the entire evaluation.

## What makes a planeswalker commander good

Three things separate the keepers from the traps, and the best commanders here hit at least two of them.

**Immediate impact.** The good ones do something the turn they resolve — make a body, draw cards, tutor, deal damage. A planeswalker whose plus ability is a slow grind gives your opponents a free turn to kill it before it matters. Minsc & Boo makes a hamster and swings for damage right now; that is the standard.

**Self-protection or a body.** Commanders that leave a blocker behind (or make attacking them a bad trade) survive to activate again. Sivitri taxes attackers, Ob Nixilis makes a 5/5 flier, Minsc leaves Boo behind every upkeep. Naked planeswalkers with no board presence are the first to die.

**Partner, or a deep engine.** Two of the strongest picks come with Partner, which lets you run a second commander so a removal spell on one does not end your game. The rest need to be an engine so powerful that rebuilding around them is still worth the tax. If a commander is neither resilient nor an engine, it belongs in the 99, not the command zone. This is the same logic that governs [how you build any Commander deck](/blog/magic-the-gathering/how-to-build-a-commander-deck) — the command zone card has to do work every game.

## The best planeswalker commanders, ranked

Ranked on how good they actually are as commanders — reliability, deck ceiling, and how many games they carry — not on raw mana value.

1. **Minsc & Boo, Timeless Heroes** (Gruul, RG) — The best planeswalker commander, full stop. It enters and makes Boo, a 1/1 Hamster with trample and haste, then every upkeep makes another if Boo has died. The +1 slaps three +1/+1 counters on a creature with trample or haste, and the -2 sacrifices a creature to deal damage equal to its power — drawing that many cards if the creature was a Hamster. Buff Boo, sacrifice Boo, deal a pile of damage, draw a pile of cards, repeat. It is aggressive, resilient, and refills your hand. Nothing else on this list does that much the turn it lands.
2. **Teferi, Temporal Archmage** (mono-blue, U) — The cEDH pick, covered in full below. Even in a casual deck, a +1 that digs two deep every turn and a -1 that untaps four permanents is a control engine that never stops. Its ceiling is the highest of any planeswalker commander because of the combo it enables.
3. **Aminatou, the Fateshifter** (Esper, WUB) — The best value engine of the group. The -1 exiles a permanent you own and returns it under your control — a repeatable [flicker/blink](/blog/magic-the-gathering/best-commander-combos-mtg) effect from the command zone that abuses enters-the-battlefield triggers every turn, resets your own planeswalkers' loyalty, and dodges removal. The +1 smooths your draws. Esper gives you the removal and card draw to protect her. A quietly brutal grind commander.
4. **Lord Windgrace** (Jund, BRG) — The premier lands-matter commander. The +2 loots and draws an extra card when you pitch a land, the -3 returns two lands from the graveyard to the battlefield, and he plusses himself into a huge loyalty count fast. Pair him with fetch lands, Crucible-style recursion, and landfall payoffs and he is a card-advantage machine in three colors that all want to sacrifice and rebuild lands.
5. **Tasha, the Witch Queen** (Dimir, UB) — Every time you cast a spell you do not own, you make a 3/3 Demon. The +1 draws and exiles instants and sorceries from opponents' graveyards, and the -3 casts those stolen spells for free. A theft-and-spellslinger commander with a built-in board presence, which is exactly the self-protection the fragile ones lack.
6. **Dihada, Binder of Wills** (Mardu, RWB) — A legendary-matters payoff with real card advantage. The -3 digs four deep, keeps every legendary card, and makes Treasure for the rest; the +2 keeps a legend alive with vigilance, lifelink, and indestructible. In a deck stuffed with legends it draws cards, ramps, and protects your best threat.
7. **Elminster** (Azorius, WU) — A spellslinger commander whose scry triggers shave mana off your next instant or sorcery. The +2 draws and scries 2 (fueling itself), and the -3 exiles a card to make a flight of Faerie Dragons scaled to its mana value. Cast big spells cheaply, build a board of fliers. It climbs loyalty while doing it.
8. **Freyalise, Llanowar's Fury** (mono-green, G) — The best budget and beginner pick, detailed below. A +2 that makes a mana Elf every turn is ramp, a board, and chump blockers in one button.
9. **Sivitri, Dragon Master** (Dimir, UB) — A dragon-tribal commander that repeatably tutors any Dragon to hand with the -3 and protects itself with a +1 that taxes attackers 2 life each. Consistent, self-protecting, and it turns every game into "which dragon do I want this turn."
10. **Jared Carthalion** (five-color, WUBRG) — The only five-color planeswalker commander in the game, which is the entire pitch. If you want a Superfriends or five-color goodstuff deck fronted by a planeswalker, he is your only option, and he is a fine one: a 3/3 all-colors token every turn plus counters and recursion.

Below the top ten, the pool thins out into narrow or underpowered options fast — which is why the "disappoints" section exists.

## The best planeswalker commander for cEDH

![Teferi, Temporal Archmage, the mono-blue planeswalker commander whose minus-one untaps four permanents to fuel the Chain Veil combo.](/images/blog/magic-the-gathering/best-mtg-planeswalker-commanders/teferi-temporal-archmage.jpg)

**Teferi, Temporal Archmage** is the one planeswalker commander with a serious competitive pedigree, and it is entirely down to one interaction. His -1 untaps up to four target permanents. Pair him with The Chain Veil — an artifact that lets you activate each planeswalker's loyalty abilities one additional time — and enough mana rocks, and you get a loop: activate the Veil, use the extra Teferi activation to untap four rocks, net positive mana, and repeat for infinite mana and infinite loyalty activations. From there any mana sink or draw outlet closes the game.

That combo is why Teferi has been a staple cEDH commander for years. But you do not have to play the combo to run him — as a straight mono-blue control commander he is still excellent, digging two cards deep every turn with the +1 and untapping your lands or rocks for extra interaction. He is the rare planeswalker commander whose floor is "great value engine" and whose ceiling is "wins the game outright." If you are eyeing a high-power build, read up on [Commander power brackets](/blog/magic-the-gathering/mtg-commander-brackets) first so the Chain Veil line lands at the right table.

## The best budget and beginner picks

Not everyone wants to sleeve up a cEDH combo deck, and planeswalker commanders have some of the most beginner-friendly options in the format.

![Aminatou, the Fateshifter, the Esper planeswalker commander whose minus-one blinks a permanent you own every turn.](/images/blog/magic-the-gathering/best-mtg-planeswalker-commanders/aminatou-the-fateshifter.jpg)

**Freyalise, Llanowar's Fury** is the best entry point. Mono-green is the cheapest color to build well, her +2 makes a mana Elf every single turn — which is ramp, chump blockers, and a growing board all at once — and the deck writes itself: elves, ramp, big green creatures. It is forgiving, it snowballs, and it teaches you how a planeswalker commander wants to be protected. If you are still deciding on a first deck at all, cross-reference our [best commanders for beginners](/blog/magic-the-gathering/best-commanders-for-beginners-mtg) guide.

**Minsc & Boo** doubles as a great beginner commander despite topping the overall list — the game plan (make Boo, buff Boo, throw Boo, draw cards) is legible on turn four and the deck is cheap Gruul aggro. **Aminatou** is a step up in complexity but rewards players who like value: her blink loop is one of the most satisfying engines in casual Commander, and Esper staples are widely reprinted and affordable.

Steer clear of the mono-color narrow ones (Nahiri, Daretti, Ob Nixilis) as first decks — they ask you to build a very specific archetype to function, and they punish a loose 99.

## The partner planeswalkers

Four planeswalker commanders come with Partner, and this is a bigger deal than it looks. Partner lets you run two commanders, which solves the single greatest weakness of the archetype: if one commander eats a removal spell, you still have the other. It also lets you splash colors a mono-color planeswalker could never reach.

- **Jeska, Thrice Reborn** (mono-red) enters with a loyalty counter for each time you have cast a commander from the command zone, and her -X deals damage to up to three targets. Paired with a value partner, she is a removal-and-reach engine that gets scarier every time your other commander dies and comes back.
- **Tevesh Szat, Doom of Fools** (mono-black) is a sacrifice-value machine: two Thrull tokens on the +2, then a +1 that sacrifices creatures to draw two. As a partner he glues onto any black deck that wants fuel and card advantage.
- **Rowan Kenrith** (mono-red) and **Will Kenrith** (mono-blue) are designed to partner with each other into an Izzet chaos-control deck — Rowan forces attacks and burns tapped creatures, Will shrinks threats and reduces your spell costs. Together they are a flavorful, resilient two-headed command zone.

Because Partner mostly sidesteps the fragility problem, these are underrated picks. Jeska plus a strong black or green partner is one of the more resilient planeswalker-fronted decks you can build.

## Planeswalker commanders that disappoint

Not every planeswalker that can wear the crown should. These are the ones that look playable and let you down.

![Lord Windgrace, the Jund lands-matter planeswalker commander who recurs lands from the graveyard.](/images/blog/magic-the-gathering/best-mtg-planeswalker-commanders/lord-windgrace.jpg)

- **Nahiri, the Lithomancer** (mono-white) makes a 1/1 and wants a dedicated Equipment deck to matter, but as a commander she is slow and the payoff (the -10 Stoneforged Blade) is a fantasy in most pods. Great as a card in an equipment deck; underwhelming in the command zone.
- **Ob Nixilis of the Black Oath** (mono-black) drains 1 and gains life on the +2, which is glacial, and the 5/5 Demon costs loyalty and life. Mono-black has far better commanders.
- **Saheeli, the Gifted** (Izzet) is a fine artifact-tokens engine but does not protect itself and gets run over.
- **Estrid, the Masked** (Bant) is a narrow enchantress/Auras commander whose best ability untaps enchanted permanents — cute, but it demands a very specific build to do anything.
- **Quintorius, History Chaser** (Boros) and **Commodore Guff** (Jeskai) are build-arounds — Quintorius wants graveyard churn, Guff wants a dedicated planeswalker-tribal Superfriends shell. Guff in particular is only worth it if your whole deck is other planeswalkers, at which point he is a genuine payoff rather than a generically good commander.

None of these are unplayable. They are just cards that are better in the 99, or that need a hyper-focused deck to justify the command-zone slot. If you love the archetype anyway, the [Oathbreaker format](/blog/magic-the-gathering/mtg-oathbreaker-format-guide) — where planeswalkers are the whole point — is often a better home for them than Commander.

## Quick Action Checklist

Use this when you are deciding whether a planeswalker deserves your command zone:

- [ ] Does its plus or first minus ability do something meaningful the turn it lands? If not, skip it.
- [ ] Does it protect itself with a body, a tax, or a repeatable removal effect? Naked planeswalkers die first.
- [ ] If it is fragile, does it have Partner? Two commanders beats one glass cannon.
- [ ] Default to Minsc & Boo for aggro, Aminatou for value, Teferi for high power, Freyalise for budget.
- [ ] Ignore the ultimate. Build as if you will never hit the -8 or -10, because you usually won't.
- [ ] Load the deck with cheap interaction and blockers to keep your commander alive an extra turn.
- [ ] If the planeswalker needs a hyper-specific archetype (Nahiri, Estrid, Guff), consider running it in the 99 or in Oathbreaker instead.
- [ ] Match the build to your pod's power level before you commit to a combo line like Chain Veil Teferi.`,
  faq: [
    {
      question: 'How many planeswalkers can be your commander?',
      answer:
        'Twenty-one. Only planeswalkers whose text explicitly reads "[this card] can be your commander" are legal in the command zone. That includes the original Commander 2014 five (Teferi, Freyalise, Daretti, Nahiri, Ob Nixilis) plus later designs like Minsc & Boo, Aminatou, Lord Windgrace, Tasha, Elminster, Dihada, Sivitri, Jared Carthalion, and the Partner planeswalkers. A normal legendary planeswalker without that line cannot be your commander.',
    },
    {
      question: 'What is the best planeswalker commander?',
      answer:
        'Minsc & Boo, Timeless Heroes is the best all-around pick. It makes a Hamster token and has immediate board impact, buffs and sacrifices creatures for damage and cards, and rebuilds Boo every upkeep — so it is resilient, aggressive, and refills your hand. Teferi, Temporal Archmage has the highest ceiling because of its cEDH combo potential, and Aminatou is the best pure value engine.',
    },
    {
      question: 'Why are planeswalker commanders considered weak?',
      answer:
        'Because they get attacked. Any opponent can send creatures at your commander instead of at your face, and a planeswalker has no toughness — only loyalty that drops every time a creature connects. They also activate only once per turn at sorcery speed. The good ones survive by leaving a body behind, taxing attackers, or coming with Partner so losing one does not end your game.',
    },
    {
      question: 'Is Teferi, Temporal Archmage good in cEDH?',
      answer:
        'Yes. Teferi, Temporal Archmage is a longstanding cEDH commander because of The Chain Veil combo: the Veil grants an extra loyalty activation, Teferi\'s -1 untaps four permanents, and with enough mana rocks that loops into infinite mana and infinite activations. Even without the combo he is a strong mono-blue control commander that digs two cards deep and untaps your mana every turn.',
    },
    {
      question: 'What is the best budget planeswalker commander for beginners?',
      answer:
        'Freyalise, Llanowar\'s Fury. Mono-green is the cheapest color to build well, her +2 makes a mana Elf every turn (ramp, blockers, and a growing board in one button), and the deck plan — elves, ramp, big green creatures — is beginner-friendly and snowballs naturally. Minsc & Boo is another cheap, legible option for players who prefer aggression.',
    },
    {
      question: 'What does Partner do for planeswalker commanders?',
      answer:
        'Partner lets you run two commanders at once, which fixes the archetype\'s biggest weakness: if one commander is removed, the other keeps your game plan intact. Jeska, Thrice Reborn; Tevesh Szat, Doom of Fools; and the Rowan Kenrith / Will Kenrith pair all have Partner. It also lets you combine colors a mono-color planeswalker could never reach on its own.',
    },
    {
      question: 'Is there a five-color planeswalker commander?',
      answer:
        'Yes, exactly one: Jared Carthalion, whose color identity is all five colors (WUBRG). If you want a five-color Superfriends or goodstuff deck fronted by a planeswalker rather than a creature, he is your only legal option. He makes an all-colors 3/3 every turn and offers counters and multicolored recursion.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start', anchor: 'Commander format guide' },
    { href: '/blog/magic-the-gathering/how-to-build-a-commander-deck', anchor: 'how to build a Commander deck' },
    { href: '/blog/magic-the-gathering/best-commanders-for-beginners-mtg', anchor: 'best commanders for beginners' },
    { href: '/blog/magic-the-gathering/best-planeswalkers-magic-the-gathering', anchor: 'best planeswalkers overall' },
    { href: '/blog/magic-the-gathering/best-commander-combos-mtg', anchor: 'best Commander combos' },
    { href: '/blog/magic-the-gathering/mtg-commander-brackets', anchor: 'Commander power brackets' },
    { href: '/blog/magic-the-gathering/mtg-oathbreaker-format-guide', anchor: 'Oathbreaker format guide' },
  ],
  externalSources: [
    { url: 'https://scryfall.com/search?q=oracle%3A%22can+be+your+commander%22+type%3Aplaneswalker', title: 'Scryfall — every planeswalker that can be your commander' },
    { url: 'https://edhrec.com/commanders/planeswalkers', title: 'EDHREC — planeswalker commander inclusion data' },
    { url: 'https://mtgcommander.net/index.php/rules/', title: 'Commander Rules Committee — official format rules' },
  ],
  tldr:
    'Only 21 planeswalkers can be your commander, and most are traps that die before they act. The best are Minsc & Boo (aggressive, resilient, draws cards), Teferi, Temporal Archmage (the cEDH pick via the Chain Veil combo), Aminatou (a blink value engine), and Lord Windgrace (lands matter). Freyalise is the best budget/beginner choice, and the Partner planeswalkers (Jeska, Tevesh Szat, the Kenriths) sidestep the archetype\'s fragility.',
  itemList: {
    name: 'Best Planeswalker Commanders in MTG, Ranked',
    items: [
      { name: 'Minsc & Boo, Timeless Heroes', description: 'Gruul. Makes a Hamster, buffs and sacrifices it for damage and cards. The best all-around planeswalker commander.' },
      { name: 'Teferi, Temporal Archmage', description: 'Mono-blue control with the highest ceiling — enables the Chain Veil infinite-mana combo in cEDH.' },
      { name: 'Aminatou, the Fateshifter', description: 'Esper value engine; the -1 blinks a permanent you own every turn to abuse ETB triggers.' },
      { name: 'Lord Windgrace', description: 'Jund lands-matter commander that loots, draws off lands, and recurs lands from the graveyard.' },
      { name: 'Tasha, the Witch Queen', description: 'Dimir theft/spellslinger; makes 3/3 Demons and casts stolen instants and sorceries for free.' },
      { name: 'Dihada, Binder of Wills', description: 'Mardu legendary-matters payoff with card advantage, Treasure ramp, and a protection +2.' },
      { name: 'Elminster', description: 'Azorius spellslinger; scry triggers reduce spell costs and it builds a board of Faerie Dragons.' },
      { name: 'Freyalise, Llanowar\'s Fury', description: 'Mono-green. The best budget/beginner pick — a mana Elf every turn is ramp, blockers, and board.' },
      { name: 'Sivitri, Dragon Master', description: 'Dimir dragon tribal; repeatable Dragon tutor plus a self-protecting attacker tax.' },
      { name: 'Jared Carthalion', description: 'The only five-color planeswalker commander — the pick for WUBRG Superfriends or goodstuff.' },
    ],
  },
};
