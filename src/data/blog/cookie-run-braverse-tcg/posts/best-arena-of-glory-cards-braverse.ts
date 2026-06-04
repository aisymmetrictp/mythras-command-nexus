import type { BlogPost } from '../../blogTypes';

export const bestArenaOfGloryCardsBraverse: BlogPost = {
  slug: 'best-arena-of-glory-cards-braverse',
  game: 'cookie-run-braverse-tcg',
  category: 'card-guides',
  topicCluster: 'set-coverage',
  tags: ['Arena of Glory', 'BS7', 'Arena', 'Set Review'],
  title: "Best Cards from Cookie Run: Braverse — Arena of Glory",
  metaDescription:
    "A set review of Cookie Run: Braverse's Arena of Glory booster (BS7): the standout Arena cards ranked by color and role, with real cost, HP, and skill text.",
  excerpt:
    "Arena of Glory (BS7) is the set that made the Arena keyword a real archetype - a synergy tribe that rewards a wide board of Arena Cookies. Here are the standouts, ranked by color and role, with their actual effects.",
  featuredImagePrompt:
    "A row of Cookie Run: Braverse Arena of Glory cards fanned across colors - red, yellow, green, blue, purple - with a coliseum backdrop and a gold rank badge centered over the spread.",
  heroImage:
    '/images/blog/cookie-run-braverse-tcg/best-arena-of-glory-cards-braverse/capsaicin-cookie.webp',
  heroImageAlt:
    'Official Capsaicin Cookie card (BS7-014), the Red Ultra Rare Arena Cookie that headlines the Arena of Glory set in Cookie Run: Braverse.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-braverse-tcg/best-arena-of-glory-cards-braverse/capsaicin-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/c3tCEACUyj7WYFNVAszO5A.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/best-arena-of-glory-cards-braverse/choco-drizzle-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/XZczqyw50atH2sIMWrYw_w.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/best-arena-of-glory-cards-braverse/cream-soda-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/JHHgo3kCtERRMun31jwHOw.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/best-arena-of-glory-cards-braverse/arena-of-glory-trap.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/3eSG2VgOuok2nUKtOsysXQ.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
  ],
  publishDate: '2026-06-04T00:00:00.000Z',
  lastUpdated: '2026-06-04T00:00:00.000Z',
  primaryKeyword: 'best arena of glory cards braverse',
  secondaryKeywords: [
    'arena of glory braverse',
    'cookie run braverse bs7',
    'arena of glory set review',
    'braverse arena keyword cards',
    'best arena cookies braverse',
    'capsaicin cookie braverse',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 12,
  toc: [
    { id: 'what-arena-of-glory-adds', label: 'What Arena of Glory adds', level: 2 },
    { id: 'how-the-arena-keyword-works', label: 'How the Arena keyword works', level: 2 },
    { id: 'how-we-ranked-these', label: 'How we ranked these', level: 2 },
    { id: 'the-red-arena-package', label: 'The Red Arena package', level: 2 },
    { id: 'the-yellow-arena-package', label: 'The Yellow Arena package', level: 2 },
    { id: 'the-green-arena-package', label: 'The Green Arena package', level: 2 },
    { id: 'the-blue-arena-package', label: 'The Blue Arena package', level: 2 },
    { id: 'the-purple-arena-package', label: 'The Purple Arena package', level: 2 },
    { id: 'the-arena-of-glory-trap', label: 'The Arena of Glory Trap', level: 2 },
    { id: 'who-should-chase-what', label: 'Who should chase what', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Most Braverse boosters hand a few strong Cookies to each color and let the colors stay in their lanes. Arena of Glory - BS7 - does something different: it ships an entire keyword, **Arena**, that runs across all five colors and rewards you for fielding a *wide board of Arena Cookies*. It's the closest thing the game has to a true synergy tribe, where the cards explicitly name each other and check "is there another Arena Cookie in your battle area?" before they pay off.

This is the set review: what BS7 adds, how the Arena keyword actually functions, and the standout cards ranked by color and role, all quoted off the official card database. The {R}/{Y}/{G}/{B}/{P} symbols are each color's resource, {N} is any color, and a number after an attack name is its damage. "MIX" in a cost means the card wants a mixed-color spread. If you're new to set codes and release order, our [set release timeline](/blog/cookie-run-braverse-tcg/cookie-run-braverse-sets-release-timeline) lays out where BS7 sits.

## What Arena of Glory adds

Two things make BS7 stand out as a product.

First, it's **the Arena set**. Where earlier boosters scattered keywords thinly, Arena of Glory commits - nearly every high-rarity Cookie in the set carries the **Arena** keyword, and the cards are written to be played *together*. Capsaicin wants Kouign-Amann or Prune Juice on the board; Kouign-Amann wants Capsaicin or Prune Juice; Prune Juice cares whether Capsaicin or Kouign-Amann is out. That's a deliberate cross-color synergy web, and it's the most interconnected design Braverse had shipped at the time.

Second, it leans into **board-state payoffs over raw stats**. The Arena Cookies are mostly fair bodies (2-6 HP) whose ceilings come from conditions: "if there's another Arena Cookie in your battle area," "if an Arena Cookie has been placed in your break area," "if there are 7+ Arena cards in your trash." BS7 rewards a deck that goes wide and stays committed to the theme, not one that jams the single biggest body.

## How the Arena keyword works

Read the cards as a group and the engine becomes obvious. The keyword has no hardwired rules effect - instead, Arena Cookies *check for each other* in three recurring ways:

- **"Another Arena Cookie in your battle area"** - the most common gate. Crushed Pepper, Jalapeño, Kouign-Amann, and Cherry Cola add damage, draw, or a ping only when they have an Arena buddy alongside them.
- **"An Arena Cookie placed in your break area"** - Madeleine and Financier reward you for *losing* Arena Cookies, turning trades into damage.
- **Named-card synergy** - Capsaicin, Kouign-Amann, and Prune Juice form a triangle that names each other for bonus HP, attack, or cost reduction.

The upshot: an Arena deck wants quantity, and doesn't mind its Cookies dying, because half the payoffs trigger on the way to the break area. It's a go-wide tempo deck that converts board presence and trades into reach - a different feel from the slow, grindy BEAST decks. Arena wants the board busy.

## How we ranked these

Same discipline as our [overall card ranking](/blog/cookie-run-braverse-tcg/best-cookie-run-braverse-cards-ranked): rarity, raw effect impact read off the official text, and competitive relevance inside an Arena shell. Because these cards depend on each other, relevance leans hard on synergy - a card that's mediocre alone but central to the engine can outrank a flashier standalone. This is our evaluation, not an official tier list; nothing in BS7 is banned.

## The Red Arena package

![Official Capsaicin Cookie card (BS7-014), a Red Ultra Rare Arena Cookie that gains attack alongside Kouign-Amann or Prune Juice and pings LV.2+ Cookies.](/images/blog/cookie-run-braverse-tcg/best-arena-of-glory-cards-braverse/capsaicin-cookie.webp)

Red is the aggressive heart of the Arena set, and its standouts are the best the booster offers.

1. **Capsaicin Cookie** (BS7-014, Red, Ultra Rare, 5 HP, Red Mix cost). The set's headline Cookie and the anchor of the named-card triangle. If Kouign-Amann or Prune Juice is in your battle area, Capsaicin gains **+1 attack damage**. Its Activate (once per turn, discard a card) deals 1 damage to an opponent's LV.2+ Cookie - targeted removal that scales into the mid-game. Its attack hits for 3 (4 with the synergy bonus). A 5-HP body that does removal *and* hits harder for being in the right deck - this is the chase.
2. **Jalapeño Cookie** (BS7-018, Red, Ultra Rare, 5 HP, Red Mix). The closer. Its attack deals **4**, and if there's another Arena Cookie in your battle area, it pings an opponent's Cookie for 1 more. 4 attack on a 5-HP body is genuinely big for the color, and the rider is trivial to meet in an Arena deck. The cleanest damage in the Red package.
3. **Chili Pepper Cookie** (BS7-013, Red, Super Rare, 2 HP). The enabler. If it's in the battle area, your Red Arena Cookies at LV.2 or higher deal **+1 effect damage** - a static buff that turns every ping in the deck up a notch. A 2-HP body you protect, not attack with, but it makes the whole Red engine hit harder.
4. **Crushed Pepper Cookie** (BS7-015, Red, Super Rare, 4 HP, Red Mix). The cheap aggressor: attack deals 1, then 2 *more* if there's another Arena Cookie out. Three damage on a Super Rare body the moment your board is set. Solid filler that rewards going wide.

The Red Arena deck is the most coherent build out of BS7: Chili Pepper buffs the pings, Capsaicin removes and swings, Jalapeño closes. Our [best Red cards](/blog/cookie-run-braverse-tcg/best-red-cards-cookie-run-braverse) guide covers the rest of the shell.

## The Yellow Arena package

Yellow's Arena cards are built around a clever twist - they pay you for your Arena Cookies *dying*.

1. **Financier Cookie** (BS7-039, Yellow, Super Rare, 5 HP, Yellow Mix). The board-wide payoff. Its Activate places a Cookie from your hand into the break area to gain +1 HP, and its attack deals 3, then - if an Arena Cookie has been placed in your break area this turn - deals **1 damage to all** of the opponent's Cookies. A 5-HP body that turns your own trades into a board sweep. The best Yellow card in the set.
2. **Madeleine Cookie** (BS7-029, Yellow, Super Rare, 4 HP, Yellow Mix). The same engine, smaller: Activate for a Yellow resource, and if an Arena Cookie has hit your break area this turn, deal **2 damage** to an opponent's Cookie. Repeatable removal that's live whenever the deck does what it wants to do anyway.
3. **Kouign-Amann Cookie** (BS7-035, Yellow, Ultra Rare, 2 HP, Yellow Mix). The synergy glue and second corner of the named triangle. On Play it gains +1 HP if Capsaicin or Prune Juice is out, and its Activate - rest it, pay {N} - pings for 1 when another Arena Cookie is out. It's connective tissue between the Red and Purple corners more than a standalone bomb, but the engine needs it.

Yellow's identity here is "trade aggressively, get paid for it" - every Arena Cookie you lose is a Madeleine ping or a Financier sweep on the way out.

## The Green Arena package

![Official Choco Drizzle Cookie card (BS7-059), a Green Ultra Rare Arena Cookie with 6 HP that pings on entry from the support area and bounces small Cookies back.](/images/blog/cookie-run-braverse-tcg/best-arena-of-glory-cards-braverse/choco-drizzle-cookie.webp)

Green is the deepest single-color package in the set, and it plays the support area like an instrument.

1. **Choco Drizzle Cookie** (BS7-059, Green, Ultra Rare, **6 HP**). The biggest body in the set and the best Green card. When played from the support area, it deals **2 damage** to an opponent's Cookie immediately. Its attack deals 3, then lets you place a small Green Cookie from your battle area back into your support area - resetting your other Arena Cookies' on-enter triggers. A 6-HP wall that pings on arrival and recycles your board. Excellent.
2. **Pudding à la Mode Cookie** (BS7-057, Green, Ultra Rare, 3 HP, Green Mix). The engine. Its Activate, for {G}{G}, rests it into the support area and **plays a LV.2+ Arena Cookie from your support area for free**. That's how you cheat Choco Drizzle (and its on-enter ping) onto the board ahead of schedule. The combo piece that makes the Green deck tick.
3. **Green Tea Mousse Cookie** (BS7-046, Green, Super Rare, 4 HP, Green Mix). The smoother. Played from the support area, discard a card to stock your support area with the top of your deck; its attack deals 3 then plays an Arena Cookie from support. Pure consistency - it keeps the support area fed so Pudding and Choco Drizzle always have a target.
4. **Poison Mushroom Cookie** (BS7-048, Green, Super Rare, 2 HP). When it faints, it can stock an Arena card from your hand into your support area as active - a 2-HP body that turns its own death into fuel.

Green's Arena build is the most "engine-y" of the five: stock the support area, then flicker LV.2+ Arena Cookies out of it for repeated on-enter value. Choco Drizzle plus Pudding à la Mode is the core loop.

## The Blue Arena package

![Official Cream Soda Cookie card (BS7-079), a Blue Ultra Rare Arena Cookie that weakens an attacking opponent's Cookie on their turn.](/images/blog/cookie-run-braverse-tcg/best-arena-of-glory-cards-braverse/cream-soda-cookie.webp)

Blue is the disruption color, and its Arena cards play defense and card flow.

1. **Cream Soda Cookie** (BS7-079, Blue, Ultra Rare, 4 HP, Blue Mix). The disruptor. Once per turn, when your opponent's Cookie attacks, discard a card to make that Cookie deal **-1 attack damage** this turn - reactive defense that blunts their best swing. Its attack deals 3. A 4-HP body that taxes the opponent's offense every turn. The best Blue Arena card.
2. **Dark Choco Cookie** (BS7-067, Blue, Super Rare, **6 HP**). The big swordsman. Its Activate, for {B}, sets it active again if your hand is 5 or fewer cards - so it can attack twice. Its attack deals 1, then discard an Arena card to deal **2 damage to an opponent's LV.2+ Cookie**. A 6-HP body that re-arms itself and pumps out removal. Outstanding for a Super Rare.
3. **Cherry Cola Cookie** (BS7-076, Blue, Super Rare, 3 HP, Blue Mix). The cantrip. Its Activate - if there's another Blue Arena Cookie out, bottom-deck itself to draw a card - keeps the hand flowing. A small body whose job is card velocity, not combat.

Blue's plan is grindier than the others: tax their attacks with Cream Soda, double-swing and remove with Dark Choco, keep the cards coming with Cherry Cola. The Arena package for a player who wins on attrition.

## The Purple Arena package

Purple's Arena cards revolve around the third corner of the named triangle and a stocked trash.

1. **Prune Juice Cookie** (BS7-104, Purple, Ultra Rare, 4 HP, Purple Mix). The payoff. If your break area is LV.3+, or Capsaicin or Kouign-Amann is in your battle area, **every cost for its attack becomes {N}** - a hard cost reduction on a 3-damage swing. Its Activate, with 7+ Arena cards in your trash, fires for {N}. It's the third named-triangle corner and a genuine reward for committing to the Arena theme across colors.
2. **Cream Puff Cookie** (BS7-093, Purple, Super Rare, 3 HP). The filtering: Activate, pay {P}, trash itself to draw 2 and discard 2 - it digs and fills the trash that Prune Juice cares about. A 3-HP body whose value is in the graveyard it leaves behind.
3. **Latte Cookie** (BS7-089, Purple, Super Rare, 4 HP, Purple Mix). The hand attacker: attack deals 2, then if the opponent is holding 6+ cards, mills 2 random cards from their hand. Niche punisher for control mirrors, clean 4-HP body otherwise.

Purple is the trash-and-disruption corner: Cream Puff stocks the trash, Latte attacks the hand, and Prune Juice turns a full graveyard and the triangle Cookies into a cost-free swing.

## The Arena of Glory Trap

![Official Arena of Glory Trap card (BS7-108), a Pure Super Rare Trap that weakens an opponent's Cookie and rewards a break-area lead.](/images/blog/cookie-run-braverse-tcg/best-arena-of-glory-cards-braverse/arena-of-glory-trap.webp)

**Arena of Glory** (BS7-108, Pure, Super Rare, Trap, Mix cost) is the set's namesake card and its one non-Cookie standout. For {N} it makes an opponent's Cookie deal -1 attack damage this turn, then pays off extra if your break area is at least 3 levels higher than your opponent's - it rewards the player who's *ahead* on the Arena race. As a Pure card it slots into any deck, but it's clearly designed for the go-wide Arena shell that builds a break-area lead fast. A tempo Trap that protects your board while you're winning. For more on how Pure and Trap cards fit a deck, see our [best Item, Trap, and Stage cards](/blog/cookie-run-braverse-tcg/best-braverse-item-trap-stage-cards) guide.

## Who should chase what

If you're **collecting**, the Ultra Rares are the pulls: Capsaicin (BS7-014) and Jalapeño (BS7-018) in Red, Kouign-Amann (BS7-035) in Yellow, Choco Drizzle (BS7-059) and Pudding à la Mode (BS7-057) in Green, Cream Soda (BS7-079) in Blue, and Prune Juice (BS7-104) in Purple. Capsaicin and Choco Drizzle are the visual and competitive headliners. For the full rarity ladder, see our [rarities and collecting guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-rarities-collecting-guide).

If you're **building to win**, the strongest single-color build out of BS7 is **Green** (Choco Drizzle + Pudding à la Mode + Green Tea Mousse is a real engine), with **Red** close behind as the most aggressive, coherent package. The named triangle - Capsaicin, Kouign-Amann, Prune Juice - is the set's marquee combo, but it spans three colors, so it's a deckbuilding puzzle more than a plug-and-play package. Pick the color whose plan you like, then grab its Arena standouts.

## Quick Action Checklist

- **Arena of Glory (BS7) is the Arena-keyword set** - its high-rarity Cookies are written to be played together and reward a wide Arena board.
- **The Arena engine checks for "another Arena Cookie"** in your battle area or break area; half the payoffs trigger when your Arena Cookies trade away.
- **Best overall cards:** Capsaicin (BS7-014, Red), Choco Drizzle (BS7-059, Green), Jalapeño (BS7-018, Red), Cream Soda (BS7-079, Blue), Prune Juice (BS7-104, Purple).
- **Strongest single-color build is Green** (Choco Drizzle + Pudding à la Mode loop), with Red the most aggressive and coherent.
- **The named triangle** - Capsaicin, Kouign-Amann, Prune Juice - is the marquee combo, but it spans three colors.
- **Don't sleep on the Trap.** Arena of Glory (BS7-108) is a Pure tempo Trap that rewards a break-area lead.
- **Collect for the Ultra Rares, build for fit** - pick a color's Arena package rather than scattering across all five.`,
  faq: [
    {
      question: "What is the best card in the Arena of Glory set?",
      answer:
        "It's a close call between Capsaicin Cookie (BS7-014, Red, Ultra Rare, 5 HP) and Choco Drizzle Cookie (BS7-059, Green, Ultra Rare, 6 HP). Capsaicin is the anchor of the set's named-card triangle - it gains +1 attack with Kouign-Amann or Prune Juice out, and its Activate removes an opponent's LV.2+ Cookie. Choco Drizzle is the biggest body in the set, pings for 2 when played from the support area, and recycles your board on attack. Capsaicin is the headline; Choco Drizzle anchors the strongest single-color build.",
    },
    {
      question: "How does the Arena keyword work in Cookie Run: Braverse?",
      answer:
        "The Arena keyword doesn't have a hardwired rules effect on its own - instead, Arena Cookies check for each other. The common gates are 'another Arena Cookie in your battle area' (which turns on bonus damage, draw, or pings) and 'an Arena Cookie placed in your break area' (which rewards you for trading them away). A few cards - Capsaicin, Kouign-Amann, and Prune Juice - name each other directly for bonus HP, attack, or cost reduction. The deck wants a wide board of Arena Cookies and doesn't mind losing them.",
    },
    {
      question: "What set code is Arena of Glory?",
      answer:
        "Arena of Glory is the BS7 booster set in Cookie Run: Braverse. Nearly every high-rarity Cookie in it carries the Arena keyword, making it the closest thing the game has to a true synergy tribe that runs across all five colors.",
    },
    {
      question: "Which Arena of Glory cards should I chase?",
      answer:
        "For collecting, chase the Ultra Rares: Capsaicin (BS7-014) and Jalapeño (BS7-018) in Red, Kouign-Amann (BS7-035) in Yellow, Choco Drizzle (BS7-059) and Pudding à la Mode (BS7-057) in Green, Cream Soda (BS7-079) in Blue, and Prune Juice (BS7-104) in Purple. For deckbuilding, the strongest single-color build is Green (Choco Drizzle plus Pudding à la Mode), with Red close behind for aggression.",
    },
    {
      question: "Is Arena of Glory good for new players?",
      answer:
        "It's a solid set to learn synergy with, because the Arena cards clearly tell you to play them together. The catch is that the marquee combo - the Capsaicin, Kouign-Amann, Prune Juice triangle - spans three colors, which is awkward for a beginner deck that wants color focus. A new player is best off building one color's Arena package (Green or Red are the most coherent) rather than chasing the cross-color triangle.",
    },
    {
      question: "What does the Arena of Glory Trap card do?",
      answer:
        "Arena of Glory (BS7-108) is a Pure Super Rare Trap. For {N} it makes one of the opponent's Cookies deal -1 attack damage that turn, then pays off extra if your break area is at least 3 levels higher than your opponent's. It rewards the player who's ahead on the Arena race, so it's designed for the go-wide Arena shell that builds a break-area lead quickly. Being Pure, it can slot into any color deck.",
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-braverse-tcg', anchor: 'Braverse hub' },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-sets-release-timeline',
      anchor: 'set release timeline',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-cookie-run-braverse-cards-ranked',
      anchor: 'best cards overall',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-red-cards-cookie-run-braverse',
      anchor: 'best Red cards',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-braverse-item-trap-stage-cards',
      anchor: 'best Item, Trap, and Stage cards',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-rarities-collecting-guide',
      anchor: 'rarities and collecting guide',
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
    "Arena of Glory (BS7) is Cookie Run: Braverse's Arena-keyword set - its high-rarity Cookies are written to be played together and reward a wide board of Arena Cookies. The standouts: Capsaicin (BS7-014, Red, the named-triangle anchor with removal), Choco Drizzle (BS7-059, Green, a 6-HP body that pings on entry and anchors the best single-color build with Pudding à la Mode), Jalapeño (BS7-018, Red, a 4-damage closer), Cream Soda (BS7-079, Blue, a reactive attack-taxer), and Prune Juice (BS7-104, Purple, a cost-reducing triangle corner). The Arena engine rewards going wide and even profits when its Cookies trade away. Build Green or Red for the most coherent single-color package; the cross-color Capsaicin/Kouign-Amann/Prune Juice triangle is the marquee combo.",
  itemList: {
    name: "Best Cards from Arena of Glory (BS7)",
    items: [
      { name: 'Capsaicin Cookie (BS7-014)', description: 'Red, Ultra Rare, 5 HP. Gains +1 attack with Kouign-Amann or Prune Juice out; Activate removes an opponent\'s LV.2+ Cookie. The set\'s named-triangle anchor and headline card.' },
      { name: 'Choco Drizzle Cookie (BS7-059)', description: 'Green, Ultra Rare, 6 HP. Pings for 2 when played from the support area, attacks for 3, and recycles a small Green Cookie. The biggest body and best single-color anchor in the set.' },
      { name: 'Jalapeño Cookie (BS7-018)', description: 'Red, Ultra Rare, 5 HP. Attacks for 4, plus 1 more ping with another Arena Cookie out. The cleanest damage in the set.' },
      { name: 'Cream Soda Cookie (BS7-079)', description: 'Blue, Ultra Rare, 4 HP. Once per turn, discard a card to give an attacking opponent Cookie -1 attack. A reactive disruptor that taxes their offense.' },
      { name: 'Prune Juice Cookie (BS7-104)', description: 'Purple, Ultra Rare, 4 HP. Its attack costs become {N} with a LV.3+ break area or the right triangle Cookies out. The third corner of the named triangle.' },
      { name: 'Financier Cookie (BS7-039)', description: 'Yellow, Super Rare, 5 HP. Attacks for 3, then sweeps all opponent Cookies for 1 if an Arena Cookie hit your break area. The best Yellow Arena card.' },
      { name: 'Dark Choco Cookie (BS7-067)', description: 'Blue, Super Rare, 6 HP. Re-arms itself to attack twice and discards an Arena card to remove a LV.2+ Cookie. Outstanding for a Super Rare.' },
      { name: 'Pudding à la Mode Cookie (BS7-057)', description: 'Green, Ultra Rare, 3 HP. Free-plays a LV.2+ Arena Cookie from your support area - the combo piece that cheats out Choco Drizzle.' },
      { name: 'Arena of Glory (BS7-108)', description: 'Pure, Super Rare Trap. Weakens an opponent\'s attack and pays off a break-area lead. A splashable tempo Trap for the go-wide shell.' },
    ],
  },
};
