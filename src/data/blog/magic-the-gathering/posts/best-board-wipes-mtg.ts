import type { BlogPost } from '../../blogTypes';

export const bestBoardWipesMtg: BlogPost = {
  slug: 'best-board-wipes-mtg',
  game: 'magic-the-gathering',
  category: 'card-guides',
  topicCluster: 'board-wipes',
  title: 'Best Board Wipes in Magic: The Gathering, Ranked',
  metaDescription:
    'The best board wipes in MTG ranked for Commander and eternal play. Toxic Deluge, Wrath of God, Blasphemous Act, Farewell, Cyclonic Rift, and when to run each.',
  excerpt:
    "A board wipe is the reset button you press when the table got out of hand and it's your fault for not pressing it sooner. Here are the best mass removal spells in MTG, ranked, with the format context and the trap of running too few.",
  featuredImagePrompt:
    'A battlefield of armored soldiers and beasts being annihilated at once by a wave of divine white light sweeping across the field, painterly fantasy art, cinematic high contrast, no text',
  heroImage: '/images/blog/magic-the-gathering/best-board-wipes-mtg/wrath-of-god.jpg',
  heroImageAlt:
    'Wrath of God, the four-mana white sorcery that destroys all creatures with no regeneration — the board wipe every other sweeper is measured against.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-board-wipes-mtg/wrath-of-god.jpg',
      sourceUrl: 'https://scryfall.com/card/cmm/70/wrath-of-god',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-board-wipes-mtg/toxic-deluge.jpg',
      sourceUrl: 'https://scryfall.com/card/soc/120/toxic-deluge',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-board-wipes-mtg/blasphemous-act.jpg',
      sourceUrl: 'https://scryfall.com/card/soc/238/blasphemous-act',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-board-wipes-mtg/cyclonic-rift.jpg',
      sourceUrl: 'https://scryfall.com/card/rvr/40/cyclonic-rift',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
  ],
  publishDate: '2026-06-02T00:00:00.000Z',
  lastUpdated: '2026-06-02T00:00:00.000Z',
  primaryKeyword: 'best board wipes mtg',
  secondaryKeywords: [
    'best board wipes commander',
    'mtg board wipes ranked',
    'best mass removal mtg',
    'best wrath effects commander',
    'cheap board wipes mtg',
    'one sided board wipe commander',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-makes-a-board-wipe-good', label: 'What makes a board wipe good', level: 2 },
    { id: 'how-many-board-wipes-should-you-run', label: 'How many board wipes should you run', level: 2 },
    { id: 'the-best-board-wipes-ranked', label: 'The best board wipes, ranked', level: 2 },
    { id: 'the-one-sided-and-asymmetric-wipes', label: 'The one-sided and asymmetric wipes', level: 2 },
    { id: 'the-best-budget-board-wipes', label: 'The best budget board wipes', level: 2 },
    { id: 'board-wipes-by-color', label: 'Board wipes by color', level: 2 },
    { id: 'when-not-to-run-a-board-wipe', label: 'When not to run a board wipe', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `A board wipe is the reset button you press when the table got out of hand, and it is your fault for not pressing it sooner. Every Commander player has lived this: three opponents develop, you sit on a Wrath you are saving for "the right moment," the right moment never comes, and you die to a swing you could have blanked two turns earlier. The card was in your hand the whole time.

So this is two arguments in one. First, you are almost certainly running too few sweepers. Second, the ones you do run should be chosen on purpose, because "destroy all creatures" is a much wider design space than it looks. Some wipes scale, some dodge indestructible, some only hit your opponents, and a few exile so the graveyard decks get nothing back. Picking the wrong one for your deck is how you blow up your own board and lose the race anyway.

Here is the whole category ranked, framed mostly through a Commander and eternal lens since that is where mass removal does the heaviest lifting. I have legality-checked every card, and I will flag where something is Commander-friendly but not legal in 60-card formats like Modern, because plenty of you build across both. Prices and ban lists move every set, so treat any dollar figure as a rough guide and confirm a card's legal window before you sleeve it for sanctioned play.

## What makes a board wipe good

Four things separate a great sweeper from a card that sits dead in your hand.

**Cost versus impact.** Four mana to kill everything (Wrath of God) is the baseline rate. Anything cheaper is premium; anything more expensive needs to do something extra, like exiling or hitting multiple permanent types. A wipe you cannot afford to cast on the turn the board gets scary is not interaction, it is a prayer.

**What it kills, and how.** "Destroy all creatures" is the floor. The best wipes go further: minus-X/minus-X effects (Toxic Deluge) get around indestructible and creatures with high toughness; exile effects (Farewell, Sunfall) beat death triggers, recursion, and graveyard decks; and damage-based wipes (Blasphemous Act) ignore the word "destroy" entirely but whiff on big toughness.

**Symmetry.** Most wipes hit your stuff too, which is fine if you are the control deck with an empty board. It is a disaster if you just spent four turns building a wide army. The one-sided wipes — Cyclonic Rift's overload chief among them — are priced and feared precisely because they break the symmetry.

> A board wipe you never cast is worse than no board wipe, because it cost you a card slot and a draw. If you are holding a sweeper "for the right moment" three turns running, the right moment was three turns ago. Cast it.

The fourth factor is the one casual players skip: **flexibility on a dead board.** A pure creature wipe is a brick when nobody has creatures out. That is why modal wipes (Farewell, Austere Command) and the overload bounce (Cyclonic Rift) are so prized — they still do something useful when the creature count is low.

## How many board wipes should you run

For a typical 100-card Commander deck, run **two to four** mass removal pieces. Three is the sweet spot for most midrange and control decks. Token, aristocrats, and other go-wide strategies can run fewer (and want the asymmetric ones), while a dedicated control deck happily runs five or six.

If you are below two wipes, you have no answer to a board that goes wide faster than you can pick off threats one at a time — which describes every elf deck, every token deck, and every "I cast my five-drop and made three bodies" turn you will ever sit across from. Single-target [removal](/blog/magic-the-gathering/best-removal-spells-mtg) answers one problem. A wipe answers all of them at once, and that is the whole point.

## The best board wipes, ranked

Ranked on overall power and how often they are the right include across the formats where they are legal. Context matters more than raw position here, so read the notes.

![Toxic Deluge, the black sorcery that gives every creature minus-X/minus-X for three mana plus X life, beating indestructible and hexproof in one cast.](/images/blog/magic-the-gathering/best-board-wipes-mtg/toxic-deluge.jpg)

1. **Toxic Deluge** — 2B, plus X life. Each creature gets -X/-X. The best sweeper in the format on flexibility. It scales to kill exactly what you need, it costs only three mana, and the -X/-X means it walks straight through indestructible, regeneration, and hexproof — three things "destroy all creatures" effects cannot touch. The life payment is real but rarely matters at 40. Legal in Commander, Modern, and Legacy.
2. **Cyclonic Rift** — 1U, or 7 to overload. Not a kill spell, but the overload bounces every nonland permanent your opponents control to their hands at instant speed, and only theirs. It is the most backbreaking mass removal in Commander because it is completely one-sided and resets nothing of yours. Consistently one of the priciest blue staples, so check a retailer before buying in. Legal in Commander, Modern, Pioneer, and Legacy.
3. **Wrath of God** — 2WW. Destroy all creatures; they cannot be regenerated. The original, the baseline, and still one of the cleanest four-mana wipes in the game. No frills, no payment, no symmetry tricks — it just kills everything and nothing comes back via regeneration. Legal in Commander, Modern, and Legacy. (Note: not Pioneer-legal — it predates the format's card pool.)
4. **Farewell** — 4WW. Modal exile: choose any combination of artifacts, creatures, enchantments, and graveyards. This is a board wipe, a targeted reset, an artifact/enchantment sweep, and a graveyard hoser stapled into one card. Six mana is a lot, but it ends games and it is never a dead card. Legal in Commander, Modern, Pioneer, and Legacy.
5. **Blasphemous Act** — 8R, but it costs 1 less for each creature on the battlefield. 13 damage to each creature. In a clogged Commander board it almost always costs one or two mana, making it the cheapest "destroy almost everything" effect in the format. The catch: it is damage, so indestructible creatures and anything with 14+ toughness survive. Legal in Commander, Modern, and Legacy.
6. **Damnation** — 2BB. Destroy all creatures, no regeneration. Wrath of God in black. Functionally identical, splits between the two best wrath colors, and gives black decks the clean four-mana sweeper white has always had. Legal in Commander, Modern, and Legacy.
7. **Supreme Verdict** — 1WWU. Destroy all creatures; this spell can't be countered. Same four-mana rate as Wrath with an uncounterable clause baked in, which matters enormously in blue-heavy metagames and any pod with active counterspell players. The cost is that it locks you into Azorius (white-blue) colors. Legal in Commander, Modern, Pioneer, and Legacy.
8. **Austere Command** — 4WW. Modal: choose two of destroy all artifacts, destroy all enchantments, destroy creatures of mana value 3 or less, destroy creatures of mana value 4 or greater. The mana-value split is the trick — you can wipe the table's big threats while keeping your small creatures, or vice versa, turning a symmetric wipe into a near-one-sided one. Legal in Commander, Modern, and Legacy.
9. **Vanquish the Horde** — 6WW, costing 1 less for each attacking creature. Destroy all creatures. A late catch-up wipe that gets dramatically cheaper when the board is wide and aggressive — exactly when you need it. Often a three- or four-mana wipe against a developed table. Legal in Commander, Modern, and Pioneer.
10. **Living Death** — 3BB. Each player exiles the creatures they control, then puts all creature cards from their graveyard onto the battlefield. A wipe that doubles as a mass reanimation engine — devastating in a deck that fills its own graveyard. Note this one is **Commander- and Legacy-legal but not Modern-legal**, so it is a Commander/eternal pick only.

Past the top ten, the format-specific and budget wipes get their own sections below, because the "best" wipe genuinely changes depending on your deck and your wallet.

## The one-sided and asymmetric wipes

A symmetric wipe is a tempo-neutral reset. A one-sided wipe is a beating. These are the cards that hit the table and leave yours standing.

![Cyclonic Rift, the blue instant whose seven-mana overload bounces every nonland permanent your opponents control at instant speed while leaving your own board untouched.](/images/blog/magic-the-gathering/best-board-wipes-mtg/cyclonic-rift.jpg)

- **Cyclonic Rift (overload)** — 7 mana to bounce every nonland permanent your opponents control. The gold standard for asymmetry and the reason it is so feared. Their board goes to hand; yours stays put. It is not permanent removal — they get the cards back — but the tempo swing usually ends the game.
- **Austere Command** — pick the mana-value split that kills their creatures and spares yours. With a little deckbuilding, this is a one-sided wipe disguised as a modal sorcery.
- **Sunfall** — 3WW. Exile all other creatures, then make an X/X Incubator token where X is the number exiled. You wipe the board, then get a fresh threat from the wreckage. Exile beats death triggers and recursion, and you come out ahead on bodies. Legal in Commander, Pioneer, and Modern.
- **Plague Wind / In Garruk's Wake** — expensive (eight and nine mana), but they destroy all creatures you do not control. Pure one-sided kills. The cost is steep, so these are top-end haymakers for decks that ramp hard, not early-game answers. In Garruk's Wake is Commander-, Pioneer-, and Modern-legal.

The deckbuilding lesson: if your deck wants to keep its own board, build toward the asymmetric wipes and skip the symmetric ones. If your deck is control and runs few creatures, the symmetry never hurts you and you can run the cheapest, cleanest options instead.

## The best budget board wipes

You do not need a Cyclonic Rift budget to run good mass removal. These are functional, table-respected wipes that usually cost a couple of dollars or less per copy, though reprints and spikes move them around.

![Blasphemous Act, the red sorcery that deals 13 damage to each creature and costs one less for every creature in play, usually resolving for a single mana on a crowded board.](/images/blog/magic-the-gathering/best-board-wipes-mtg/blasphemous-act.jpg)

- **Blasphemous Act** — often the cheapest wipe to cast in the game, and cheap to buy thanks to heavy reprinting.
- **Crux of Fate** — 3BB. Destroy all creatures, or destroy all non-Dragon creatures. The Dragon mode makes it a near-one-sided wipe in a Dragon deck. Commander-, Pioneer-, and Modern-legal.
- **Languish** — 2BB. Each creature gets -4/-4 until end of turn. A cheap, repeatable-rate scaled wipe that kills the entire support cast and most midrange threats while sparing your big stuff. Commander-, Pioneer-, and Modern-legal.
- **Vanquish the Horde** — gets cheap to cast against a wide board and cheap to buy.
- **Mutual Destruction / Ritual of Soot / Flaying Tendrils** — assorted budget black sweepers that hit small-to-midsize creatures or exile, perfect for catching token swarms.

The most underrated budget bucket is the **scaled wipes** (Languish, Toxic Deluge if you catch a reprint window) because they let you wipe the board without nuking your own bombs. Almost nobody runs enough of them.

## Board wipes by color

Wipes are not evenly distributed across the color pie. Knowing where your deck's sweepers live tells you what you can and cannot lean on.

| Color | Identity | Premier wipes |
| --- | --- | --- |
| White | The wrath color | Wrath of God, Farewell, Supreme Verdict, Austere Command, Sunfall, Vanquish the Horde |
| Black | Scaled and reanimating | Toxic Deluge, Damnation, Languish, Crux of Fate, Living Death |
| Red | Damage-based | Blasphemous Act, Chain Reaction, Star of Extinction |
| Blue | Bounce, not destroy | Cyclonic Rift (overload), Evacuation, Devastation Tide |
| Green | Almost none | Green does not get true creature wipes — it answers boards with fight effects and big blockers instead |

White owns the category, full stop — it has the most wipes, the cleanest rates, and the modal options. Black is a close second and brings the two tricks white lacks: scaling (Toxic Deluge, Languish) and reanimation (Living Death). Red wipes through damage, which is great against go-wide but bad against fat. Blue does not destroy; it bounces, and Cyclonic Rift is the single best mass-removal card in the color despite "removing" nothing permanently. Green is the odd one out — if you are mono-green, you are not running a board wipe, you are running bigger creatures and Beast Within. That color gap is exactly why so many Commander decks splash white or black.

## When not to run a board wipe

Sweepers are not free includes. There are decks where the wrong wipe actively loses you the game.

- **You are the go-wide deck.** If your plan is tokens, elves, or an aristocrats swarm, a symmetric wipe blows up your own board harder than anyone's. Run the asymmetric ones (Cyclonic Rift, Austere Command with the right split) or lean on single-target removal and protection instead.
- **You are racing.** A wipe is a tempo reset, and resets help whoever is behind. If you are the aggressive deck ahead on board, wiping hands the game back to the durdle decks. Sometimes the correct play is to not own a wipe at all and just kill people faster.
- **Your threats are creatures you cannot replace.** If your wincon is a single hard-to-recast creature, a wipe that kills it alongside everything else is a bad trade unless you can protect it or sit it out.

The honest read: wipes are insurance for decks that fall behind on board and grind, and traps for decks that get ahead and race. Know which one yours is before you slot four sweepers into it.

For the rules context on why pods build wide so fast, our [Commander format guide](/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start) covers the 40-life multiplayer math. And if a term like "overload," "modal," or "indestructible" trips you up, check the [MTG glossary](/glossary/magic-the-gathering).

## Quick Action Checklist

- Count your board wipes right now. Aim for two to four; three is the default sweet spot.
- Match the wipe to your deck: symmetric wipes for control decks with few creatures, asymmetric ones (Cyclonic Rift, Austere Command) for go-wide decks.
- Run at least one wipe that beats indestructible — Toxic Deluge or Farewell — since "destroy all creatures" whiffs on it.
- Include one exile-based wipe (Farewell, Sunfall) as your answer to recursion and graveyard decks.
- Do not hoard your wipe for the perfect moment. The moment you are scared of the board is the moment to cast it.
- On a budget, Blasphemous Act, Languish, Crux of Fate, and Vanquish the Horde cover the category for a few dollars.
- Cross-check current prices and format legality before you buy — Living Death is not Modern-legal, and both ban lists and prices move every set.`,
  faq: [
    {
      question: 'What is the best board wipe in MTG?',
      answer:
        "Toxic Deluge is the best board wipe in most decks. For three mana plus X life it gives every creature -X/-X, which lets you scale the kill exactly and walk straight through indestructible, regeneration, and hexproof — three things that 'destroy all creatures' effects like Wrath of God cannot touch. If you want the single most backbreaking mass-removal effect, Cyclonic Rift's overload is stronger because it only bounces your opponents' permanents.",
    },
    {
      question: 'How many board wipes should a Commander deck run?',
      answer:
        'Run two to four, with three being the sweet spot for most midrange and control decks. Dedicated control decks can run five or six. Go-wide decks (tokens, elves, aristocrats) should run fewer and lean on the asymmetric wipes like Cyclonic Rift so they do not blow up their own board. Most casual decks are below two wipes and lose to wide boards they cannot answer.',
    },
    {
      question: 'What is the best one-sided board wipe in Commander?',
      answer:
        "Cyclonic Rift, overloaded for seven mana, bounces every nonland permanent your opponents control to their hands at instant speed and touches nothing of yours. It is the gold standard for asymmetric mass removal and a soft 'I win' button in Commander. Austere Command can also be near-one-sided if you pick the mana-value split that kills their creatures and spares yours.",
    },
    {
      question: 'What is the cheapest board wipe to cast in MTG?',
      answer:
        'Blasphemous Act. It costs 8R but is reduced by one mana for each creature on the battlefield, so in a clogged Commander board it almost always costs one or two mana to deal 13 damage to every creature. The only catch is that it is damage-based, so indestructible creatures and anything with 14 or more toughness survive it.',
    },
    {
      question: 'Are board wipes that exile better than ones that destroy?',
      answer:
        'For graveyard and recursion-heavy tables, yes. Exile wipes like Farewell and Sunfall get around death triggers, regeneration, and reanimation, and they strip graveyards so the aristocrats and reanimator decks get nothing back. Destroy effects like Wrath of God are cheaper and cleaner against normal boards, so most decks run a mix: a cheap destroy wipe plus one exile wipe as the catch-all.',
    },
    {
      question: 'Does green have board wipes in MTG?',
      answer:
        'Not really. Green has essentially no true mass creature removal — it answers wide boards with bigger creatures, fight effects, and flexible single-target removal like Beast Within instead. If you want sweepers, you need white, black, red, or blue in your color identity, which is a big reason so many green Commander decks splash a second color.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/best-removal-spells-mtg', anchor: 'best removal spells guide' },
    { href: '/blog/magic-the-gathering/best-counterspells-mtg', anchor: 'best counterspells guide' },
    { href: '/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start', anchor: 'Commander format guide' },
    { href: '/blog/magic-the-gathering/best-black-cards-magic-the-gathering', anchor: 'best black cards guide' },
    { href: '/glossary/magic-the-gathering', anchor: 'MTG glossary' },
  ],
  externalSources: [
    { url: 'https://scryfall.com/', title: 'Scryfall — MTG card database and legality data' },
    { url: 'https://edhrec.com/', title: 'EDHREC — Commander board wipe inclusion data' },
    { url: 'https://www.mtggoldfish.com/format-staples/commander', title: 'MTGGoldfish — Commander staples and pricing' },
  ],
  tldr:
    "The best board wipe in MTG is Toxic Deluge for most decks — it scales and beats indestructible for three mana plus life. Cyclonic Rift's overload is the strongest one-sided wipe in Commander. Run two to four wipes total, match symmetric ones to control decks and asymmetric ones to go-wide decks, and always include one that beats indestructible plus one exile wipe.",
  itemList: {
    name: 'Best Board Wipes in MTG, Ranked',
    items: [
      { name: 'Toxic Deluge', description: 'Three mana plus X life for -X/-X to every creature. Scales and beats indestructible, regeneration, and hexproof.' },
      { name: 'Cyclonic Rift', description: 'Overload for seven to bounce every opponent permanent at instant speed. The best one-sided mass removal in Commander.' },
      { name: 'Wrath of God', description: 'The clean four-mana default: destroy all creatures, no regeneration. The baseline every other wipe is measured against.' },
      { name: 'Farewell', description: 'Modal exile of artifacts, creatures, enchantments, and graveyards. A wipe that is never a dead card.' },
      { name: 'Blasphemous Act', description: '13 damage to all creatures, usually for one or two mana on a wide board. The cheapest wipe to cast in the format.' },
      { name: 'Damnation', description: 'Wrath of God in black. Clean four-mana destroy-all with no regeneration.' },
      { name: 'Supreme Verdict', description: 'Four-mana destroy-all that cannot be countered. The premier Azorius control wipe.' },
      { name: 'Austere Command', description: 'Modal wipe with a mana-value split that can spare your creatures while killing theirs.' },
      { name: 'Vanquish the Horde', description: 'Gets one mana cheaper per attacker — a cheap late catch-up wipe against wide aggressive boards.' },
      { name: 'Living Death', description: 'Mass reanimation wipe for graveyard decks. Commander- and Legacy-legal, not Modern-legal.' },
    ],
  },
};
