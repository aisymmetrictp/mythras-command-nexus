import type { BlogPost } from '../../blogTypes';

export const braverseMillDeckGuide: BlogPost = {
  slug: 'cookie-run-braverse-mill-deck-guide',
  game: 'cookie-run-braverse-tcg',
  category: 'deck-guides',
  topicCluster: 'deck-building',
  tags: ['Mill', 'Deck-out', 'Purple', 'Control', 'Deck Building'],
  title: "Cookie Run: Braverse Mill Deck Guide (Build & Pilot Purple Deck-Out)",
  metaDescription:
    "Build and pilot a Purple mill / deck-out control deck in Cookie Run: Braverse: a real 60-card decklist, the trash-threshold engine, and how to starve them out.",
  excerpt:
    "Mill in Braverse won't deck someone to zero for an instant win - the game doesn't work that way. But a Purple deck-out shell weaponizes the opponent's trash, fuels its own payoffs, and starves their Cookie supply. Here's the real list.",
  featuredImagePrompt:
    "A Purple Cookie Run: Braverse board where the opponent's deck is being fed card-by-card into an overflowing trash pile, Black Sapphire Cookie and Moonlight Cookie looming over it, cold violet light and a 'milling' motif to signal a deck-out control deck.",
  heroImage:
    '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-mill-deck-guide/black-sapphire-cookie.webp',
  heroImageAlt:
    "Official Black Sapphire Cookie card (BS9-100), a Purple LV.2 Cookie whose On Play mills five cards off the opponent's deck into their trash - the headline mill engine of a Cookie Run: Braverse deck-out deck.",
  imageSources: [
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-mill-deck-guide/black-sapphire-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/p52hMJ6jTXHZwqfEppFsGQ.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-mill-deck-guide/moonlight-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/SWMrryev2_S4xfEQmjFJew.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-mill-deck-guide/roiling-licorice-sea.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/ZDxiUfoFE_T0I1Wi04yWpw.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-mill-deck-guide/wolf-in-sheeps-clothing.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/cYOyau5jEXs0MR4gUn30xQ.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
  ],
  publishDate: '2026-06-24T00:00:00.000Z',
  lastUpdated: '2026-06-24T00:00:00.000Z',
  primaryKeyword: 'cookie run braverse mill deck',
  secondaryKeywords: [
    'braverse deck out deck',
    'cookie run braverse mill guide',
    'how to build mill braverse',
    'braverse purple control deck',
    'cookie run braverse trash strategy',
    'best mill cards cookie run braverse',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'what-mill-actually-does-in-braverse', label: 'What mill actually does in Braverse', level: 2 },
    { id: 'the-honest-truth-about-deck-out', label: 'The honest truth about deck-out', level: 2 },
    { id: 'why-purple-is-the-mill-color', label: 'Why Purple is the mill color', level: 2 },
    { id: 'the-trash-threshold-engine', label: 'The trash-threshold engine', level: 2 },
    { id: 'a-sample-purple-mill-decklist', label: 'A sample Purple mill decklist', level: 2 },
    { id: 'how-to-pilot-the-deck', label: 'How to pilot the deck', level: 2 },
    { id: 'mulligan-and-opening-hands', label: 'Mulligan and opening hands', level: 2 },
    { id: 'mill-mistakes-to-avoid', label: 'Mill mistakes to avoid', level: 2 },
    { id: 'how-to-tune-it-as-you-learn', label: 'How to tune it as you learn', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Every card game has the player who saw "place cards from the top of your opponent's deck into the trash" and immediately tried to build a deck that wins by emptying the other library. In a lot of games that works. In Cookie Run: Braverse, it mostly doesn't - and pretending otherwise would set you up to lose a lot of games. So let's do this honestly: here's what a Purple mill deck *actually* does, why it's a control shell and not an instant-kill, and the real 60-card list that weaponizes the trash anyway.

If you want the broad map first, our [deck archetypes guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-archetypes) frames where control and mill sit next to aggro and combo. And the usual disclaimer: this is an *informed* build, not a tournament-proven netdeck. The English meta is young, so treat the list as a strong, fact-checked starting point and verify the current card pool against the official database before an event.

## What mill actually does in Braverse

"Mill" means placing cards from a deck into the trash without playing them. Braverse has a real, dedicated mill package - almost all of it Purple - that does this to the opponent. So the question isn't "do the cards exist." They do. The question is "what does milling *win* you," and the answer is more interesting than a deck-out counter:

- **It fuels your own payoffs.** A huge chunk of Purple's best cards check *your opponent's trash size* and get stronger as it grows - removal that only fires once they hit 10, 15, or 20 cards in the trash, and card draw that rewards a fat opposing trash.
- **It shrinks their Cookie supply.** Every Cookie you mill is a Cookie they can't deploy. That feeds Braverse's real second win condition: the no-Cookie-to-deploy loss (more on that below).
- **It buys time as a control deck.** Mill decks are control decks with a clock attached. You stall, you remove, and the opponent's trash quietly climbing past your thresholds turns your whole deck on.

> The mill truth: you're not racing to empty their deck. You're turning their trash into a resource *you* spend - and starving their board while you do it.

## The honest truth about deck-out

Let's be blunt, because the [win conditions](/blog/cookie-run-braverse-tcg/cookie-run-braverse-win-conditions) of this game matter here. Braverse does not have a clean "you drew from an empty deck, you lose" rule the way some TCGs do. Its second win condition is the **no-Cookie-to-deploy loss**: if a player's Battle Area is empty and they have *no Cookie in hand* to field, they lose on the spot.

Mill supports that, but indirectly. Burning the opponent's deck thins the pool of Cookies they can draw and forces some of their bodies into the trash before they're ever cast. Pair that with removal that clears their board, and you can engineer the spot where their Battle Area is empty and their hand has no Cookie left. That's a real win - it's just a *finisher you set up*, not a counter you tick to zero.

And there's a catch that keeps mill honest: Purple itself has cards like **Old Milk Villager Cookie** (BS8-114) that "return all cards from your trash to your deck and shuffle it" - the game has a *refresh* mechanic, so a stuffed trash isn't always permanent. That's exactly why pure deck-them-out is fragile and why this build is a **control-mill**, not a one-trick deck-out. You win on attrition, with mill as the engine and the no-Cookie starve as the cleanest closer. Take it as informed opinion: I'd build this to grind, not to gamble the whole game on running them to zero.

## Why Purple is the mill color

![Official Moonlight Cookie card (BS4-089), a Purple LV.3 Cookie whose ability mills five cards off the opponent's deck and can trash one of their Cookies - the durable mill-plus-removal threat of a Cookie Run: Braverse deck-out deck.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-mill-deck-guide/moonlight-cookie.webp)

Braverse's five colors each have a lane (the full rundown is in [colors explained](/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained)), and Purple's is disruption, trash synergy, and the dark-magic toolbox. Mill is one of its signature plans, and the card pool backs it:

- Purple owns essentially **all of the "mill the opponent's deck" effects** - the cards that place cards off the top of the opponent's deck into their trash live in Purple and nowhere else.
- Purple has the **trash-threshold payoffs** that make milling matter - removal and draw that scale off the opponent's (or your own) trash count.
- Purple has the **removal and stall** a control-mill needs to survive to the late game, where its engine takes over.

That self-contained package - mill, payoff, control - is why mill is a mono-Purple deck. For the wider Purple toolbox beyond the mill core, our [best Purple cards guide](/blog/cookie-run-braverse-tcg/best-purple-cards-cookie-run-braverse) goes broader; this guide stays locked on the deck-out build.

## The trash-threshold engine

The reason mill is more than "annoy the opponent" is a set of cards that explicitly *check trash size* and pay off. A few real examples from the official database:

- **Black Sapphire Cookie** (BS9-100, LV.2) has an On Play that mills the opponent 5, and its attack mills *both* players 3 more. It's your headline mill body.
- **Moonlight Cookie** (BS4-089, LV.3) mills the opponent 5 and, if they have two Cookies out, trashes one of them outright. Mill *and* removal on a durable LV.3.
- **Wolf in Sheep's Clothing** (BS9-115, Item) draws you a card, then mills the opponent 3 - a cantrip that advances the plan.
- **Roiling Licorice Sea** (BS3-119, Stage) is a repeatable engine: rest it to mill 3 off the opponent's deck, every turn.
- **Moonlight Shards** (BS4-107, Item) reads: "If your opponent's trash contains 15 cards or more," deal 2 damage to a Cookie - removal that *only* turns on once you've milled enough.
- **Beet Cookie** (BS2-060) and **BONUS Coin** (ST5-016) reward a fat opposing trash with extra cards, so milling literally draws you closer to your answers.

The throughline: the mill cards build a number (the opponent's trash count), and the payoff cards spend that number. That's the engine - your "ramp" is their graveyard.

## A sample Purple mill decklist

Here's a complete 60-card mono-Purple control-mill shell built entirely from real, verified cards. It respects the construction rules: exactly 60 cards, at least one Cookie, and up to 4 copies of any card number. Card numbers are cited so you can find each one in the official database.

**Cookies - LV.1 (the early bodies + small mill):**

- 4x Latte Cookie (BS9-098) - with 3 {P} in your support area, sacs itself to mill the opponent 3. Repeatable chip-mill.
- 4x Affogato Cookie (BS3-105) - sacs to mill both players 2; its attack mills the opponent 1 more.
- 4x Beet Cookie (BS2-060) - cheap body that draws you a card when it faints into a fat opposing trash.
- 4x Sugar Glass Cookie (BS4-096) - cheap LV.1 that turns its own HP into card draw to dig for engine pieces.

**Cookies - LV.2 (the mill engines):**

- 4x Black Sapphire Cookie (BS9-100) - the headline mill body; mills 5 on play, more on attack.
- 4x Candlelight Cookie (BS6-090) - self-mills 2 each turn end, feeding your own trash-count payoffs.

**Cookies - LV.3 (the mill + removal top end):**

- 3x Moonlight Cookie (BS4-089) - mills 5 and can trash a Cookie; your durable threat.
- 2x Old Milk Villager Cookie (BS8-114) - a sturdy LV.3 wall that recycles your trash if you over-mill yourself.

**Items (mill + draw + threshold removal):**

- 4x Wolf in Sheep's Clothing (BS9-115) - draw 1, mill the opponent 3. Smooth, repeatable.
- 4x Flipped Coin (BS9-114) - self-mills you early, mills the opponent once your own trash is fat; flexible fuel.
- 4x First Watcher's Bow (BS3-116) - trash a card off a Cookie's HP, or mill a card from their hand. Flexible disruption.
- 2x Moonlight Shards (BS4-107) - 2 damage to a Cookie once their trash hits 15; threshold removal.
- 2x BONUS Coin (ST5-016) - draw 2 once the opponent's trash hits 30; a late-game refuel the mill plan enables.

**Stages (the repeatable mill):**

- 4x Roiling Licorice Sea (BS3-119) - rest to mill 3 off the opponent every turn. Your steady drip.
- 4x Endless Game of Chess (BS9-118) - discard 1 to strip a card off an opposing Cookie's HP each turn; grinds their board.

**Traps (the control + threshold payoff):**

- 3x Light of False Truths (BS9-116) - once their trash hits 15, forces them to trash a card off one of their own Cookies.
- 2x Truth Stained With Lies (BS9-117) - shrinks an attacker, harder once their trash hits 20; defensive tempo.
- 2x Abandoned Cloud Nest (BS2-080) - big attack-debuff once your trash hits 15; a cheap blowout speed bump.

That's 4+4+4+4 + 4+4 + 3+2 + 4+4+4+2+2 + 4+4 + 3+2+2 = **60 cards.** It's a coherent mono-Purple control-mill with a steady mill drip, trash-threshold payoffs, removal, and enough draw to never flood out. Swap counts are taste; which Purple pieces sit at common versus chase rarity shifts with the pool, so confirm current printings against the official database. For the build philosophy behind these ratios, pair this with [deck-building basics](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics).

## How to pilot the deck

![Official Roiling Licorice Sea card (BS3-119), a Purple Stage you rest each turn to mill three cards off the opponent's deck - the steady, repeatable mill drip of a Cookie Run: Braverse deck-out deck.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-mill-deck-guide/roiling-licorice-sea.webp)

Building the deck is the easy half. Piloting a control-mill well is what separates a grind-out win from a deck that gets run over before its engine comes online. The principles:

- **Survive first, mill second.** You're a control deck. The opening turns are about not dying - trade, debuff, and stall with your Traps and Stages while you set up. A mill engine that's dead on board mills nothing.
- **Get a repeatable mill source down early.** Roiling Licorice Sea milling 3 a turn, or Candlelight self-feeding your thresholds, is what builds the number your payoffs need. Land one and protect it.
- **Track the threshold numbers.** Your removal and draw turn on at specific opposing-trash counts - 15 for Moonlight Shards and Light of False Truths, 20 for the big debuffs, 30 for BONUS Coin. Mill *toward* those breakpoints, then cash them in. (The phase-by-phase rules are in the [turn structure guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-turn-structure-guide).)
- **Hunt the no-Cookie finish, don't count to zero.** When you've milled their Cookies, cleared their board, and stripped their hand, watch for the spot where they have an empty Battle Area and nothing to deploy. That's your win - it's a finisher you engineer, not a deck-out counter. ([Win conditions](/blog/cookie-run-braverse-tcg/cookie-run-braverse-win-conditions) covers exactly when it triggers.)
- **Mind the Break Area both ways.** You can still win the normal way - pushing their Break Area to a combined Cookie Level of 10 - and Moonlight's "trash a Cookie" line helps. But don't feed *your own* Break Area with reckless trades; a control deck that hands the opponent the Level-10 win was never in control.

> The pilot's mantra: their trash is my ramp, their empty board is my win. I survive, I drip mill every turn, and I let the thresholds do the killing.

## Mulligan and opening hands

This deck wants a *stable* opener that can survive and start the engine, not a fast one. You're keeping hands that can defend and get a mill source online. Specifically, you want:

- **A mill source or a way to start one** - Roiling Licorice Sea, Black Sapphire, Wolf in Sheep's Clothing, or Candlelight. Something that starts the trash climbing.
- **A defensive piece** - a Trap or a cheap blocker-body so you're not dead before the engine turns on.
- **Not all top-end.** A hand of three LV.3 Moonlights and no early plays gets run over; the control-mill needs to *reach* the late game it's built for.

Throw back all-payoff hands (threshold cards with nothing to feed them) and hands with no early defense. Our full [mulligan and opening hand guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-mulligan-guide) covers the framework; for this deck, the short version is "keep the hand that survives and starts milling, ship the one that does neither."

## Mill mistakes to avoid

![Official Wolf in Sheep's Clothing card (BS9-115), a Purple Item that draws you a card and mills three off the opponent's deck - the smooth, repeatable cantrip-mill of a Cookie Run: Braverse deck-out deck.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-mill-deck-guide/wolf-in-sheeps-clothing.webp)

The classic ways mill pilots throw away winnable games:

- **Treating it like a deck-out race.** You will almost never mill an opponent to zero before they refresh or kill you. Mill to hit your *thresholds* and to starve their Cookies, not to empty their library.
- **Forgetting the refresh.** Cards like Old Milk Villager Cookie exist on both sides; an opponent can recycle a big trash back into a deck. Don't assume your mill is permanent - convert the lead into a board-clear and a no-Cookie finish.
- **Milling them a gift.** Some decks *want* cards in the trash (the Purple combo deck rebuys from it). Read your opponent - milling a recursion deck can hand them fuel. Against those, lean on removal and the no-Cookie line instead of raw mill.
- **Ignoring the board.** A control-mill that doesn't defend just dies to aggro on turn six. Your Stages, Traps, and removal are not optional flavor - they're how you live to spend your engine.
- **Splashing a second color.** The thresholds and mill all key on {P}, and your resource base wants to be clean. Mono-Purple is the deck; a splash just makes your early survival worse.

> The cheapest mistake to avoid is greed for the deck-out itself. The win is attrition - thresholds, removal, and an empty enemy board - not a number ticking to zero.

## How to tune it as you learn

Once the core is humming, upgrade *surgically* rather than chasing every shiny new Purple card:

- **Tune your threshold density to the meta.** More aggro around you means more Traps and cheap removal to survive; a slower field means you can run more pure mill and lean on the grind.
- **Trim mill you can't pay off.** If you're milling fast but never reaching the spot where it matters, swap a mill source for a finisher - more removal or a way to close the no-Cookie line.
- **Watch new sets, but wait.** New Purple mill and threshold pieces can quietly upgrade the deck, but the card pool's verdict takes a week or two to settle after a set drops. Track releases via the [set release timeline](/blog/cookie-run-braverse-tcg/cookie-run-braverse-sets-release-timeline) and upgrade one slot at a time so you can actually feel the change.

Mill is the deck that teaches you patience and resource math - it's the most "control" thing Braverse offers right now. Build it, play it slow, and let each loss show you whether you needed more defense, more payoff, or a faster path to the no-Cookie finish.

## Quick Action Checklist

- **Build mono-Purple as a control-mill** - mill sources, trash-threshold payoffs, removal, and draw, all on {P}.
- **Survive first, mill second** - your Traps and Stages keep you alive until the engine turns on.
- **Land a repeatable mill source early** - Roiling Licorice Sea or Candlelight builds the number your payoffs need.
- **Track the thresholds** - 15, 20, 30 cards in the opponent's trash unlock removal and draw; mill toward them, then cash in.
- **Hunt the no-Cookie finish** - clear their board and strip their hand so an empty Battle Area becomes a win.
- **Don't race to zero** - the refresh mechanic and full Cookie counts make pure deck-out fragile; win on attrition.
- **Mulligan for survival plus a mill start** - ship all-payoff and no-defense hands.
- **Verify current printings against the official database** - the English card pool is young and shifts set to set.`,
  faq: [
    {
      question: "Is there a mill deck in Cookie Run: Braverse?",
      answer:
        "Yes - Braverse has a real, dedicated mill package, almost all of it Purple, that places cards from the opponent's deck into their trash. But it's a control-mill, not an instant deck-out. The deck weaponizes the opponent's trash to fuel its own trash-threshold payoffs (removal and draw that scale with trash size) and starves their Cookie supply toward the no-Cookie-to-deploy loss. It wins on attrition, not by emptying the opposing library. Treat any list as a starting point and confirm current cards against the official database.",
    },
    {
      question: "Can you win by milling your opponent's deck to zero in Braverse?",
      answer:
        "Not cleanly. Braverse doesn't have a clear 'draw from an empty deck and lose' rule the way some TCGs do - its second win condition is the no-Cookie-to-deploy loss, where a player loses if their Battle Area is empty and they have no Cookie in hand to field. Mill supports that indirectly by thinning the Cookie pool and forcing bodies into the trash, but Purple also has refresh effects like Old Milk Villager Cookie (BS8-114) that shuffle a trash back into the deck. So treat deck-out as a finisher you engineer through attrition, not a counter you tick to zero.",
    },
    {
      question: "How do you build a Purple mill deck in Braverse?",
      answer:
        "Build a 60-card mono-Purple control-mill: mill sources (Black Sapphire BS9-100, Moonlight BS4-089, Wolf in Sheep's Clothing BS9-115, Roiling Licorice Sea BS3-119), trash-threshold payoffs that scale off the opponent's trash (Moonlight Shards BS4-107, Light of False Truths BS9-116, BONUS Coin ST5-016), plus removal and Traps to survive to the late game. Add self-mill like Candlelight (BS6-090) and Flipped Coin (BS9-114) to feed your own thresholds. Respect the rules: exactly 60 cards, at least one Cookie, up to 4 copies per card number.",
    },
    {
      question: "Why is Purple the mill color in Cookie Run: Braverse?",
      answer:
        "Purple's color identity is disruption and trash synergy, and it owns essentially all of the 'mill the opponent's deck' effects in the game - the cards that place cards off the top of the opponent's deck into their trash live in Purple and nowhere else. Purple also has the trash-threshold payoffs that make milling matter and the removal and stall a control deck needs to survive. That self-contained mill-payoff-control package is why mill is a mono-Purple archetype.",
    },
    {
      question: "How do you pilot a mill deck in Cookie Run: Braverse?",
      answer:
        "Survive first and mill second - you're a control deck, so trade, debuff, and stall while you set up. Land a repeatable mill source like Roiling Licorice Sea (BS3-119) early to build the opponent's trash count, and track the threshold breakpoints (15, 20, 30 cards) where your removal and draw turn on. Don't race to empty their deck; instead, clear their board and strip their hand to engineer the no-Cookie-to-deploy win, and avoid feeding combo opponents who want cards in their trash.",
    },
  ],
  internalLinks: [
    { href: '/blog/cookie-run-braverse-tcg', anchor: 'Braverse hub' },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-archetypes',
      anchor: 'deck archetypes guide',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-win-conditions',
      anchor: 'win conditions',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained',
      anchor: 'colors explained',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-purple-cards-cookie-run-braverse',
      anchor: 'best Purple cards guide',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-control-deck-guide',
      anchor: 'control deck guide',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics',
      anchor: 'deck-building basics',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-turn-structure-guide',
      anchor: 'turn structure guide',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-mulligan-guide',
      anchor: 'mulligan and opening hand guide',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-sets-release-timeline',
      anchor: 'set release timeline',
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
    "Mill in Cookie Run: Braverse is a mono-Purple control-mill, not an instant deck-out - the game has no clean 'empty deck = lose' rule, so you win on attrition. The sample 60-card list weaponizes the opponent's trash to fuel trash-threshold payoffs (Moonlight Shards BS4-107, Light of False Truths BS9-116, BONUS Coin ST5-016) and starves their Cookie supply toward the no-Cookie-to-deploy loss. Core mill comes from Black Sapphire (BS9-100), Moonlight (BS4-089), Wolf in Sheep's Clothing (BS9-115), and the repeatable Roiling Licorice Sea (BS3-119), backed by removal, Traps, and self-mill like Candlelight (BS6-090) and Flipped Coin (BS9-114). Pilot it as control: survive first, drip mill every turn, hit your thresholds (15/20/30 opposing trash), and engineer the empty-board no-Cookie finish - don't race to zero, since refresh effects and full Cookie counts make pure deck-out fragile. Verify current printings against the official database.",
  itemList: {
    name: "Purple Control-Mill Deck-Building Plan",
    items: [
      { name: '1. Build mono-Purple as a control-mill', description: 'Mill sources, trash-threshold payoffs, removal, and draw, all keyed on {P}.' },
      { name: '2. Land a repeatable mill source', description: 'Roiling Licorice Sea (BS3-119) and Black Sapphire Cookie (BS9-100) build the opponent\'s trash count.' },
      { name: '3. Pay off the trash', description: 'Threshold cards like Moonlight Shards (BS4-107) and BONUS Coin (ST5-016) turn on at 15-30 cards in the opponent\'s trash.' },
      { name: '4. Survive to the late game', description: 'Traps and Stages keep a control deck alive until the mill engine takes over.' },
      { name: '5. Win on attrition', description: 'Clear the board and strip the hand to engineer the no-Cookie-to-deploy loss; do not race to empty their deck.' },
    ],
  },
};
