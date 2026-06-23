import type { BlogPost } from '../../blogTypes';

export const braverseMidrangeDeckGuide: BlogPost = {
  slug: 'cookie-run-braverse-midrange-deck-guide',
  game: 'cookie-run-braverse-tcg',
  category: 'deck-guides',
  topicCluster: 'deck-building',
  tags: ['Midrange', 'Green', 'Yellow', 'Deck Building'],
  title: "Cookie Run: Braverse Midrange Deck Guide (Build & Pilot Green/Yellow Midrange)",
  metaDescription:
    "Build and pilot a Green/Yellow midrange deck in Cookie Run: Braverse: a real 60-card decklist, the value game plan, mulligan tips, and how to grind out wins.",
  excerpt:
    "Midrange is the deck that beats aggro because it's bigger and beats control because it's faster - and asks you to actually read the game to know which one you're being. Here's how to build a value-driven Green/Yellow midrange deck in Cookie Run: Braverse, a real 60-card list you can buy, and how to pilot it.",
  featuredImagePrompt:
    "A Green and Yellow Cookie Run: Braverse midrange board mid-game: Golden Cheese Cookie and a row of efficient Green value Cookies trading evenly with the opponent, warm gold and verdant lighting, the grounded feel of a fair deck that simply does more each turn.",
  heroImage:
    '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-midrange-deck-guide/golden-cheese-cookie.webp',
  heroImageAlt:
    'Official Golden Cheese Cookie card (BS9-024), a Yellow LV.3 Ancient Cookie that gains HP and deals extra damage - the durable, value-positive top end of a Cookie Run: Braverse midrange deck.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-midrange-deck-guide/golden-cheese-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/myHJ_NNKIX2pLS3YG2fVXg.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-midrange-deck-guide/elder-faerie-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/vCZh6kv-DX6oUMyZNf0Diw.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-midrange-deck-guide/wind-archer-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/zu03wvQnUMKJwWsre6Phow.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-midrange-deck-guide/chess-choco-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/_uJtxJkfv1i3LXSaR1Ulqw.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-midrange-deck-guide/concealer-of-truth.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/XxdLxLZkxF8TyYKgoCHkGA.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
  ],
  publishDate: '2026-06-23T00:00:00.000Z',
  lastUpdated: '2026-06-23T00:00:00.000Z',
  primaryKeyword: 'cookie run braverse midrange deck',
  secondaryKeywords: [
    'braverse green midrange deck',
    'cookie run braverse midrange guide',
    'how to build midrange braverse',
    'braverse value decklist',
    'best midrange cards cookie run braverse',
    'cookie run braverse green yellow deck',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'what-midrange-actually-wants-to-do', label: 'What midrange actually wants to do', level: 2 },
    { id: 'why-green-and-yellow-are-the-value-colors', label: 'Why Green and Yellow are the value colors', level: 2 },
    { id: 'the-value-engine-that-makes-midrange-tick', label: 'The value engine that makes midrange tick', level: 2 },
    { id: 'a-sample-greenyellow-midrange-decklist', label: 'A sample Green/Yellow midrange decklist', level: 2 },
    { id: 'how-to-pilot-the-deck', label: 'How to pilot the deck', level: 2 },
    { id: 'knowing-your-role-the-midrange-superpower', label: 'Knowing your role: the midrange superpower', level: 2 },
    { id: 'mulligan-and-opening-hands', label: 'Mulligan and opening hands', level: 2 },
    { id: 'midrange-mistakes-to-avoid', label: 'Midrange mistakes to avoid', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `There's a reason "just play midrange" is the most common advice handed to anyone who keeps losing in a card game. Midrange is the deck of fair, efficient threats backed by enough value that you rarely run out of gas - it beats aggro because your Cookies are bigger, and it beats control because you have a clock control can't fully answer. In Cookie Run: Braverse, the Green/Yellow value pair is the cleanest home for it.

One honesty note up front: this is an *informed* build, not a tournament-proven netdeck. The English meta is young, so treat the list as a strong, fact-checked starting point and confirm the current card pool against the official database before an event. If you want the format-wide map first, our [deck archetypes guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-archetypes) shows where midrange sits between [aggro](/blog/cookie-run-braverse-tcg/cookie-run-braverse-aggro-deck-guide) and [control](/blog/cookie-run-braverse-tcg/cookie-run-braverse-control-deck-guide) - the two decks midrange is built to prey on.

## What midrange actually wants to do

Midrange isn't "a deck with no plan that plays good cards." It's a real strategy with a clear shape:

- **Play efficient, self-sufficient threats.** Every Cookie should be worth its cost on its own - a fair body that also draws a card, buffs a teammate, or pings the opponent. You're not building toward one combo; you're stacking small advantages.
- **Win every trade by a margin.** Because your Cookies do a little extra, trading bodies with the opponent leaves you ahead - up a card, up an HP point, up a buff. Do that ten times and the game is over.
- **Apply a steady clock.** Braverse's main win condition is pushing your opponent's break area to a combined Cookie Level of 10. Midrange gets there at a measured pace: too fast for control to fully stabilize, with bodies too big for aggro to race.
- **Grind out the long game.** When the dust settles, your recursion and value engine mean you're the one still drawing live cards. Midrange's late game is quietly excellent.

> The midrange truth: you don't need the best card in any matchup. You need the *better average card every turn*. Consistent two-for-ones win more games than any single bomb.

## Why Green and Yellow are the value colors

![Official Elder Faerie Cookie card (BS9-060), a Green LV.2 Cookie that refreshes support cards and pressures the opponent's support area - the value-engine backbone of a Cookie Run: Braverse midrange deck.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-midrange-deck-guide/elder-faerie-cookie.webp)

Braverse's five colors each have an identity (the full rundown is in [colors explained](/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained)), and the two that define midrange are Green and Yellow:

- **Green is the value and support-engine color.** Its identity is the support area - banking resources, refreshing them, and turning a steady stream of cards into a board that snowballs. Elder Faerie Cookie (BS9-060) sets support cards active and pressures the opponent's; Strawberry Crepe Cookie (BS7-049) digs and stocks support every turn.
- **Yellow is the durable, resilient-body color.** Its identity is sticky Cookies that gain HP, refuse to die, and keep swinging. Golden Cheese Cookie (BS9-024), a Yellow Ancient, gains HP when it's low and tacks extra damage onto its attack; Dino-Sour Cookie (BS5-023) pumps its own attack and heals when wounded.

Together they give midrange exactly what it wants: Green keeps the cards flowing so you never run dry, and Yellow gives you bodies the opponent can't profitably remove. That's the recipe for a deck that grinds. For the wider toolboxes, our [best Green cards](/blog/cookie-run-braverse-tcg/best-green-cards-cookie-run-braverse) and [best Yellow cards](/blog/cookie-run-braverse-tcg/best-yellow-cards-cookie-run-braverse) guides go deeper; this one stays locked on the value-midrange shell.

## The value engine that makes midrange tick

The reason this deck is more than "a pile of fair Cookies" is the value engine humming underneath. Green's support-area mechanics and Yellow's resilience layer two kinds of advantage on top of every body.

- **Card flow.** Concealer of Truth (BS9-067) is a clean "draw up to 2," GingerBrave (BS9-033) refills your hand when it's low, and Strawberry Crepe Cookie (BS7-049) digs each turn. You almost never topdeck blanks.
- **Recursion and reuse.** Green's support area lets you set cards active again and replay value - Elder Faerie Cookie (BS9-060) refreshes two support cards a turn, and Shining Glitter Cookie (BS7-055) replays Cookies from support. Every turn you're effectively getting more cards than the opponent.
- **Resilient bodies.** Yellow's Cookies gain HP and stick around. Golden Cheese Cookie (BS9-024) heals itself, Dino-Sour (BS5-023) heals when low, and Chess Choco Cookie (BS9-038) buffs the whole team's HP with a second copy out. Sticky bodies mean your threats survive removal and keep applying pressure.
- **Built-in interaction.** You're not pure beatdown. Wind Archer Cookie (BS9-050) pings the opponent's whole board on attack, Candy Drop Cookie (BS7-033) deals 2 to a Cookie on play, and a small Trap package (Broken Seal BS9-069, Petrification BS5-065) blunts the swings you can't block. That's enough disruption to win the trades that matter.

> The engine truth: midrange wins by being *resource-positive*. If every Cookie you play either draws a card, buffs a teammate, or removes a threat, you'll simply have more board and more hand than the opponent by turn six - and that's the whole game.

## A sample Green/Yellow midrange decklist

Here's a complete 60-card Green/Yellow value-midrange shell built entirely from real, verified cards. It respects the construction rules: exactly 60 cards, at least one Cookie, and up to 4 copies of any card number. Card numbers are cited so you can find each one in the official database.

**Cookies - LV.1 (early plays & enablers):**

- 4x Mercurial Knight Cookie (BS9-054) - one-cost Green body that pumps a Cookie's attack each turn; cheap and flexible.
- 4x GingerBrave (BS9-033) - one-cost Yellow that refills your hand when it's low; your early card-flow piece.
- 3x Fig Cookie (BS9-049) - Green LV.1 that disrupts an opposing LV.1 when it faints; trades up.

**Cookies - LV.2 (the value core):**

- 4x Chess Choco Cookie (BS9-038) - swings for 3 and buffs the whole team's HP with a second copy out; a sticky two-drop.
- 3x Ring Candy Cookie (BS9-052) - scales its attack as your support area fills; a payoff for the value engine.
- 3x Dino-Sour Cookie (BS5-023) - pumps its own attack and heals when low; a resilient Yellow body.
- 3x Strawberry Crepe Cookie (BS7-049) - digs and stocks your support area every turn; the consistency engine.
- 4x Elder Faerie Cookie (BS9-060) - refreshes two support cards a turn and pressures the opponent's support; the backbone.
- 4x Wind Archer Cookie (BS9-050) - swings for 3, then pings the opponent's whole board for 1; board-wide reach.

**Cookies - LV.3 (the durable top end):**

- 3x Candy Drop Cookie (BS7-033) - deals 2 to an opposing Cookie on play; removal stapled to a body.
- 3x Clover Cookie (BS9-064) - a LV.3 body that strips the opponent's support when it faints; value even in death.
- 3x Golden Cheese Cookie (BS9-024) - the Yellow Ancient; self-healing, extra damage, near-impossible to trade with.
- 3x Pure Vanilla Cookie (BS9-065) - the Green Ancient; refreshes support and heals a Cookie on attack.

**Items (the glue):**

- 3x Meat Jelly (BS9-066) - +1 HP to a Cookie; wins a trade or saves a key body.
- 4x Concealer of Truth (BS9-067) - "Draw up to 2 cards from your deck"; your clean card-advantage Item.

**Traps (the interaction):**

- 3x Radiant Light of Protection (BS9-068) - shrinks all opposing attacks when you're behind on support; an anti-aggro speed bump.
- 3x Broken Seal (BS9-069) - -2 attack to a Cookie, with extra value when the opponent's hand is full.
- 2x Petrification (BS5-065) - cheap -2 attack to blunt the swing you can't block.

That's 4+4+3 + 4+3+3+3+4+4 + 3+3+3+3 + 3+4 + 3+3+2 = **60 cards.** It's a coherent two-color list: efficient LV.1 enablers, a deep LV.2 value core, durable Ancient-anchored LV.3 bodies, and just enough card draw and disruption to win the long grind. Counts are a matter of taste - which staples sit at common or uncommon shifts with the card pool, so confirm current printings against the official database. For the build philosophy behind these ratios, pair this with [deck-building basics](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics).

## How to pilot the deck

![Official Wind Archer Cookie card (BS9-050), a Green LV.2 Cookie that swings for 3 and then deals 1 damage to all opposing Cookies - the board-wide reach that lets a Cookie Run: Braverse midrange deck win crowded trades.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-midrange-deck-guide/wind-archer-cookie.webp)

Building the deck is the easy half. Midrange asks you to play *tightly* - it doesn't bail you out the way aggro's raw speed or control's wall of answers can. The principles:

- **Curve out, but with intent.** Play a one-drop that enables, a value two-drop, then a threat - and make sure each one is doing its job. Don't dump your hand; develop just enough to stay ahead while keeping cards for the trades to come.
- **Trade up relentlessly.** Your bodies are bigger and stickier, so initiate the trades you win and decline the ones you don't. Use Wind Archer Cookie's board ping (BS9-050) and Candy Drop's 2 damage (BS7-033) to break even fights in your favor.
- **Protect your engine.** Strawberry Crepe Cookie (BS7-049) and Elder Faerie Cookie (BS9-060) are why you'll out-card the opponent. If they're vulnerable, hold a Meat Jelly (BS9-066) or a Trap to keep them alive - a turn of their value is worth more than a marginal attack.
- **Bank value, then convert it.** Green wants you to stock the support area, but cards in support aren't winning the game by themselves. Once you're resource-ahead, start cashing that lead into board pressure and break-area damage.
- **Mind the break-area math.** The game ends at a combined Level of 10 in someone's break area. Your durable LV.3 Cookies are worth a lot when they die, so don't feed them into bad trades - make the opponent overspend to remove them. The [win conditions guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-win-conditions) covers the Level math in full.

## Knowing your role: the midrange superpower

The single most important midrange skill is figuring out, by turn three, whether you're the beatdown or the control deck *in this particular game* - and it flips by matchup.

- **Against aggro, you're the control deck.** Your Cookies are bigger and stickier, so trade aggressively, lean on Radiant Light of Protection (BS9-068) and your Traps, and let your card-flow bury them. Don't race a faster deck; out-size it.
- **Against control, you're the beatdown.** Now *you're* the fast one. Apply pressure before their answers come online, force them to use removal on bodies that already got their value, and don't durdle - a control deck left alone wins the truly long game. Deploy threats, attack, and make them react.
- **Against other midrange, value wins.** Mirror matches come down to who got the better trades and drew the better engine. Play tight, protect your Strawberry Crepe and Elder Faerie, and let the resource-positive cards do their work.

Misreading your role is the number-one way midrange loses: durdling against control or racing against aggro hands the game away. Read the matchup, pick a role, and commit.

> The pilot's mantra: every game, I decide whether I'm the hammer or the anvil - and then I play that role without flinching.

## Mulligan and opening hands

Midrange hands want a curve plus a value engine. You're looking for:

- **A one- or two-drop to start.** Mercurial Knight (BS9-054), GingerBrave (BS9-033), or Chess Choco (BS9-038) means you're not behind out of the gate.
- **An engine piece or card-flow card.** Strawberry Crepe Cookie (BS7-049), Elder Faerie Cookie (BS9-060), or Concealer of Truth (BS9-067) so the hand keeps growing.
- **A reasonable top end.** One LV.3 to land on is plenty - you don't want three.

Ship hands that are all top-end (you'll be behind before you cast them) or all low-impact one-drops with no follow-through (you'll run out of gas). The ideal keep curves out *and* refuels. Our full [mulligan and opening hand guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-mulligan-guide) covers the framework; for this deck, the short version is "keep the hand with a play, an engine, and a payoff."

## Midrange mistakes to avoid

![Official Concealer of Truth card (BS9-067), a Green Item that draws up to 2 cards - the clean card advantage that keeps a Cookie Run: Braverse midrange deck from ever running out of gas.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-midrange-deck-guide/concealer-of-truth.webp)

The classic ways midrange pilots throw away winning positions:

- **Misreading your role.** Durdling against control or trying to out-grind aggro is the cardinal sin. Decide whether you're the hammer or the anvil early, and play it.
- **Dumping your hand too fast.** Midrange isn't aggro. Over-committing into a board sweep or a key Trap loses you the resource edge that's your whole advantage. Develop enough to stay ahead, no more.
- **Hoarding value forever.** The flip side: a hand full of cards you never convert into board pressure just means you lose the long game to a deck that does. Bank value, then spend it.
- **Trading down.** Your Cookies are bigger - never initiate a trade you lose. If the math isn't in your favor, hold and pass; a fair deck that makes only good trades wins almost by default.
- **Forgetting your own break-area math.** Feeding your durable LV.3 bodies into bad fights can advance *your* break total and hand the opponent the alternate win. Always know whose break total a trade feeds.

> The cheapest mistake to avoid is autopilot. Aggro forgives a brain-off attack; midrange punishes every loose trade. Slow down half a second and ask who the trade favors.

## Quick Action Checklist

- **Build two-color Green/Yellow** - Green for the value and support engine, Yellow for durable, sticky bodies.
- **Make every card resource-positive** - a fair body that also draws, buffs, or removes; stack small advantages.
- **Curve out with intent** - develop just enough to stay ahead while keeping cards for the trades to come.
- **Trade up relentlessly** - initiate fights your bigger Cookies win, decline the ones you don't.
- **Protect the engine** - keep Strawberry Crepe and Elder Faerie alive; a turn of value beats a marginal attack.
- **Know your role** - control deck vs aggro, beatdown vs control; decide by turn three and commit.
- **Bank value, then convert it** - cash your resource lead into board pressure and break-area damage.
- **Verify current printings against the official database** - the English card pool is young and shifts set to set.`,
  faq: [
    {
      question: "What is the best midrange deck in Cookie Run: Braverse?",
      answer:
        "A two-color Green/Yellow value-midrange deck is the strongest fair build. Green supplies the value and support-area engine (Elder Faerie Cookie BS9-060, Strawberry Crepe Cookie BS7-049, Concealer of Truth BS9-067) while Yellow supplies durable, resilient bodies (Golden Cheese Cookie BS9-024, Dino-Sour Cookie BS5-023, Chess Choco Cookie BS9-038). The deck wins by playing efficient, self-sufficient threats, winning every trade by a margin, and grinding the opponent out. Treat any list as a starting point and confirm current cards against the official database.",
    },
    {
      question: "How do you build a midrange deck in Braverse?",
      answer:
        "Build a 60-card Green/Yellow shell of resource-positive cards: efficient LV.1 enablers (Mercurial Knight BS9-054, GingerBrave BS9-033), a deep LV.2 value core (Elder Faerie BS9-060, Wind Archer BS9-050, Chess Choco BS9-038, Strawberry Crepe BS7-049), durable LV.3 Ancients (Golden Cheese BS9-024, Pure Vanilla BS9-065), card draw (Concealer of Truth BS9-067), and a small Trap package (Broken Seal BS9-069). Respect the rules: exactly 60 cards, at least one Cookie, up to 4 copies per card number.",
    },
    {
      question: "How do you pilot midrange in Cookie Run: Braverse?",
      answer:
        "Curve out with intent, trade up relentlessly with your bigger bodies, and protect your value engine (Strawberry Crepe, Elder Faerie) so you out-card the opponent. The key skill is knowing your role: against aggro you're the control deck (trade and out-size them), and against control you're the beatdown (apply pressure before their answers come online). Bank value, then convert your resource lead into board pressure and break-area damage toward a combined Cookie Level of 10.",
    },
    {
      question: "Why are Green and Yellow the value colors in Braverse?",
      answer:
        "The two colors give midrange its two kinds of advantage. Green is the value and support-engine color - its identity is banking and refreshing support-area cards to turn a steady stream of resources into a snowballing board. Yellow is the durable-body color - sticky Cookies that gain HP, refuse to die, and keep swinging. Together they make a deck that never runs dry (Green) and whose threats survive removal (Yellow), which is exactly the recipe for a grinding midrange deck.",
    },
    {
      question: "What's the difference between midrange and aggro in Braverse?",
      answer:
        "Aggro is built to end the game fast with cheap, hard-hitting Cookies and front-loaded pressure - it wins before the late game matters. Midrange plays bigger, value-positive threats that win trades by a margin and grind the opponent out over a longer game. The trade-off: aggro is faster and more consistent but folds if it stalls, while midrange is slower to start but has a far better late game and beats aggro by simply being bigger. Midrange asks you to read the matchup and pick a role; aggro just attacks.",
    },
  ],
  internalLinks: [
    { href: '/blog/cookie-run-braverse-tcg', anchor: 'Braverse hub' },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-archetypes',
      anchor: 'deck archetypes guide',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-aggro-deck-guide',
      anchor: 'aggro deck guide',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-control-deck-guide',
      anchor: 'control deck guide',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained',
      anchor: 'colors explained',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-green-cards-cookie-run-braverse',
      anchor: 'best Green cards',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-yellow-cards-cookie-run-braverse',
      anchor: 'best Yellow cards',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics',
      anchor: 'deck-building basics',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-win-conditions',
      anchor: 'win conditions guide',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-mulligan-guide',
      anchor: 'mulligan and opening hand guide',
    },
  ],
  externalSources: [
    { url: 'https://cookierunbraverse.com/en/', title: 'Official Cookie Run: Braverse site' },
    { url: 'https://cookierunbraverse.com/en/cards', title: 'Official Card Database' },
    {
      url: 'https://cookierun.fandom.com/wiki/Cookie_Run_Braverse',
      title: 'Cookie Run Braverse Wiki',
    },
  ],
  tldr:
    "Green/Yellow midrange is the value deck in Cookie Run: Braverse: efficient, self-sufficient threats that win every trade by a margin and grind the opponent out. The sample 60-card list pairs Green's value and support engine (Elder Faerie BS9-060, Strawberry Crepe BS7-049, Wind Archer BS9-050, Concealer of Truth BS9-067) with Yellow's durable bodies (Golden Cheese BS9-024, Dino-Sour BS5-023, Chess Choco BS9-038) and Ancient-anchored LV.3 top end. Pilot it by curving out with intent, trading up relentlessly, protecting your engine, and - most important - knowing your role: be the control deck against aggro and the beatdown against control. Verify current printings against the official database.",
  itemList: {
    name: "Green/Yellow Midrange Deck-Building Plan",
    items: [
      { name: '1. Build two-color Green/Yellow', description: 'Green for the value and support-area engine, Yellow for durable, sticky bodies that survive removal.' },
      { name: '2. Make every card resource-positive', description: 'A fair body that also draws a card, buffs a teammate, or pings a threat - stack small advantages every turn.' },
      { name: '3. Anchor with Ancient LV.3 bodies', description: 'Run Golden Cheese Cookie (BS9-024) and Pure Vanilla Cookie (BS9-065) as durable, value-positive finishers.' },
      { name: '4. Trade up and protect the engine', description: 'Initiate fights your bigger Cookies win, and keep Strawberry Crepe and Elder Faerie alive to out-card the opponent.' },
      { name: '5. Know your role each matchup', description: 'Be the control deck against aggro and the beatdown against control - decide by turn three and commit.' },
    ],
  },
};
