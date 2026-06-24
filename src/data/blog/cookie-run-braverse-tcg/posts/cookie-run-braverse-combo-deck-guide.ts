import type { BlogPost } from '../../blogTypes';

export const braverseComboDeckGuide: BlogPost = {
  slug: 'cookie-run-braverse-combo-deck-guide',
  game: 'cookie-run-braverse-tcg',
  category: 'deck-guides',
  topicCluster: 'deck-building',
  tags: ['Combo', 'Purple', 'Recursion', 'Deck Building'],
  title: "Cookie Run: Braverse Combo Deck Guide (Build & Pilot Purple Recursion)",
  metaDescription:
    "Build and pilot a Purple recursion combo deck in Cookie Run: Braverse: a real 60-card decklist, the trash-loop engine, mulligan tips, and how to grind a win.",
  excerpt:
    "Combo in Braverse isn't a one-card instant-kill - it's a Purple value engine that replays Cookies out of your trash until the opponent runs out of answers. Here's the real decklist, the loop, and how to pilot it without bricking.",
  featuredImagePrompt:
    "A swirl of Purple Cookie Run: Braverse cards cycling out of a glowing trash pile back onto the board, Twizzly Gummy Cookie and Timekeeper Cookie front and center, dark violet light and a 'time rift' motif to signal a recursion combo engine.",
  heroImage:
    '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-combo-deck-guide/twizzly-gummy-cookie.webp',
  heroImageAlt:
    'Official Twizzly Gummy Cookie card (BS6-101), a Purple LV.1 Cookie that plays a {P} Cookie from your trash when it faints - the loop engine at the heart of a Cookie Run: Braverse recursion combo deck.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-combo-deck-guide/twizzly-gummy-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/YNvaMET6R2Qczv2NLYfi6w.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-combo-deck-guide/timekeeper-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/1GZuxasYChokPNKC_29SwA.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-combo-deck-guide/tbd-machine-room.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/paub8Qq6xz2zwadvn2mD9w.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-combo-deck-guide/golem-core.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/KTY2GbaCgubS0BYXWfyWnQ.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
  ],
  publishDate: '2026-06-24T00:00:00.000Z',
  lastUpdated: '2026-06-24T00:00:00.000Z',
  primaryKeyword: 'cookie run braverse combo deck',
  secondaryKeywords: [
    'braverse purple recursion deck',
    'cookie run braverse combo guide',
    'how to build combo braverse',
    'braverse trash loop deck',
    'best combo cards cookie run braverse',
    'cookie run braverse purple deck',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'what-combo-actually-means-in-braverse', label: 'What combo actually means in Braverse', level: 2 },
    { id: 'why-purple-is-the-combo-color', label: 'Why Purple is the combo color', level: 2 },
    { id: 'the-trash-loop-engine', label: 'The trash-loop engine', level: 2 },
    { id: 'a-sample-purple-recursion-decklist', label: 'A sample Purple recursion decklist', level: 2 },
    { id: 'how-to-pilot-the-deck', label: 'How to pilot the deck', level: 2 },
    { id: 'mulligan-and-opening-hands', label: 'Mulligan and opening hands', level: 2 },
    { id: 'combo-mistakes-to-avoid', label: 'Combo mistakes to avoid', level: 2 },
    { id: 'how-to-tune-it-as-you-learn', label: 'How to tune it as you learn', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Say "combo deck" to a lapsed Magic player and they brace for a turn-three loop that ends the game out of nowhere. Cookie Run: Braverse doesn't do that, and you should be glad it doesn't. What Braverse *does* give you is a real engine archetype: a Purple shell that keeps replaying Cookies out of its own trash, turning every defeated body into more value than the opponent can answer. It grinds rather than explodes - and once it gets rolling, slower decks simply run out of removal before you run out of Cookies.

If you want the broad map first, our [deck archetypes guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-archetypes) frames where combo sits next to aggro and control. One honesty note up front, same as every deck guide on this site: this is an *informed* build, not a tournament-proven netdeck. The English meta is young, so treat the list as a strong, fact-checked starting point and verify the current card pool against the official database before an event.

## What combo actually means in Braverse

Forget the "instant win out of nowhere" stereotype. In Braverse, the combo deck is a **recursion value engine.** Its plan looks like this:

- **Cycle Cookies through the trash.** Cards that get *played from the trash* trigger bonus effects, so your trash isn't a graveyard - it's a resource you keep spending.
- **Win the attrition war.** Every removal spell the opponent fires answers a Cookie you can just replay. They spend a card, you spend nothing new. That math compounds.
- **Close on the same two win conditions as everyone else.** You still win by pushing the opponent's Break Area to a combined Cookie Level of 10, or by starving them of Cookies to deploy. The engine just makes sure you always have a body and they always have a problem. (If those win conditions are fuzzy, read [win conditions](/blog/cookie-run-braverse-tcg/cookie-run-braverse-win-conditions) first.)

> The combo truth: you're not assembling a kill, you're assembling an engine. The "combo" is that your trash and your battle area feed each other until the opponent can't keep up.

This is a step up in difficulty from aggro - there's sequencing, there are decision trees, and a sloppy pilot stalls out. But it rewards the work. For the general synergy framework that underpins it, pair this with [combos and synergies](/blog/cookie-run-braverse-tcg/cookie-run-braverse-combos-synergies).

## Why Purple is the combo color

![Official Timekeeper Cookie card (BS6-093), a Purple LV.3 Cookie that sends one of your own LV.1 Cookies to the trash on play, then plays a low-HP {P} Cookie back from the trash on attack - the setup-and-replay heart of a Cookie Run: Braverse combo deck.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-combo-deck-guide/timekeeper-cookie.webp)

Braverse's five colors each have a lane (the full rundown is in [colors explained](/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained)), and Purple's is disruption, trash synergy, and the dark-magic toolbox. The combo engine lives almost entirely in one cluster of Purple cards - the "Time" / trash-loop package - and it shows up all over the card text:

- Purple has a deep bench of Cookies with a **"When this Cookie is played from the trash"** trigger, so every replay does *something* extra - draw, mill, ping, or buff.
- Purple owns the **enablers that load the trash on purpose** - Cookies and effects that send your own bodies down so you can bring them back up.
- Purple has the **payoff Items and Stages** that turn "a Cookie was played from the trash" into board-wide damage or recurring value.

That combination - a way in, a way back, and a payoff for doing it - is what makes a combo deck possible. No other color has all three in one place. For the wider Purple toolbox beyond the engine, our [best Purple cards guide](/blog/cookie-run-braverse-tcg/best-purple-cards-cookie-run-braverse) goes broader; this guide stays locked on the recursion build.

## The trash-loop engine

The reason this deck is more than "a pile of Purple Cookies" is a small set of pieces that explicitly feed each other. A few real examples from the official database:

- **Twizzly Gummy Cookie** (BS6-101, LV.1) reads: "When this Cookie faints, can be used as {P}, play up to 1 {P} Cookie from your trash." It dies, pays for itself, and refills your board for free. It's the cleanest engine card in the deck.
- **Cherry Cookie** (BS6-096, LV.2) attacks, and if you have a LV.3 Cookie out, sends itself to the trash to "play 1 {P} LV.1 Cookie from your trash." It attacks *and* recurs.
- **Timekeeper Cookie** (BS6-093, LV.3) has an On Play that sends one of *your own* LV.1 Cookies to the trash - that's the setup half - and an attack that plays a low-HP {P} Cookie back from the trash. It is the loop in a single card.
- **Currant Cream Cookie** (BS6-098, LV.1) and **Crowberry Cookie** (BS6-099, LV.1) are the payoff bodies: when *played from the trash*, Currant Cream mills the opponent five cards and Crowberry strips HP off one of their Cookies. You're not just rebuying value - you're rebuying disruption.
- **Golem Core** (BS7-105, Item) plays an Arena Cookie from your trash and gives it +1 HP - a colorless-cost on-demand replay.

The throughline: enablers (Timekeeper, Cherry, Half-Avocado) put Cookies *down*, replayers (Twizzly, Golem Core, Peeled Carrot) bring them *back*, and the payoffs (Currant Cream, Crowberry) make each round of the loop hurt. That's the engine.

## A sample Purple recursion decklist

Here's a complete 60-card mono-Purple recursion shell built entirely from real, verified cards. It respects the construction rules: exactly 60 cards, at least one Cookie, and up to 4 copies of any card number. Card numbers are cited so you can find each one in the official database.

**Cookies - LV.1 (the engine core):**

- 4x Twizzly Gummy Cookie (BS6-101) - dies, then plays a {P} Cookie back from the trash. Your best loop piece.
- 4x Schneeball Cookie (BS6-091) - on replay, banks another {P} LV.1 Cookie into the trash to fuel the next loop.
- 4x Currant Cream Cookie (BS6-098) - on replay, mills the opponent 5 cards. Disruption you rebuy.
- 4x Crowberry Cookie (BS6-099) - on replay, strips a card off an opposing Cookie's HP.

**Cookies - LV.2 (the replay enablers):**

- 4x Peeled Carrot Cookie (BS6-087) - on replay, returns a {P} card from your trash to your hand. Refuels the loop.
- 4x Toothpaste Cookie (BS6-097) - on replay, gains +2 HP, so it sticks as a wall while the engine turns.
- 4x Half-Avocado Cookie (BS6-094) - On Play sends one of your own LV.1 Cookies to the trash; a cheap enabler.

**Cookies - LV.3 (the setup + recursion engines):**

- 4x Timekeeper Cookie (BS6-093) - the loop in one card; sets up the trash and replays from it.
- 4x Mustard Cookie (BS6-089) - On Play returns a card from your trash to hand; a durable LV.3 body and a refuel.

**Engines / card flow:**

- 4x Cream Puff Cookie (BS7-093) - Activate to draw 2 and discard 2, sending fuel to the trash while digging.
- 4x Plain Yogurt Cookie (BS5-106) - attack draws 1 and self-mills 3, loading the trash.

**Items (the replay + reach):**

- 4x Golem Core (BS7-105) - play an Arena Cookie from your trash, +1 HP. On-demand recursion.
- 3x Butterfly Key Relic (BS6-105) - trade a {P} LV.1 Cookie for "draw 2, discard 1," converting the engine into cards.

**Stages (the payoff + draw):**

- 3x TBD Machine Room (BS6-107) - if a Cookie was played from your trash this turn, all opposing Cookies take 1 damage. Turns the loop into a board sweep.
- 2x City of Wizards (BS4-110) - rest and discard 2 to draw 2; smooths your draws.

**Traps (the defensive recursion):**

- 4x Peak Engineer Performance (BS6-106) - shrinks an attacker, then plays a low-HP {P} Cookie from your trash. Defense that *also* advances the engine.

That's 4+4+4+4 + 4+4+4 + 4+4 + 4+4 + 4+3 + 3+2 + 4 = **60 cards.** It's a coherent mono-Purple list with three layers - enablers, replayers, payoffs - plus enough card flow to find them. Swap counts are taste; which Purple pieces sit at common versus chase rarity shifts with the pool, so confirm current printings against the official database. For the build philosophy behind these ratios, pair this with [deck-building basics](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics).

## How to pilot the deck

![Official TBD Machine Room card (BS6-107), a Purple Stage that deals 1 damage to all opposing Cookies on a turn you played a Cookie from your trash - the payoff that converts a Cookie Run: Braverse recursion loop into board-wide damage.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-combo-deck-guide/tbd-machine-room.webp)

Building the deck is the easy half. Piloting an engine well is what separates a grind-out win from a deck that bricks on turn six. The principles:

- **Load the trash before you try to spend it.** The early turns are about *getting* Cookies into the trash - via Half-Avocado, Cream Puff, Plain Yogurt, or just normal trades - so that your replay cards have targets. A Golem Core with an empty trash is a dead card.
- **Sequence the loop, don't fire it blind.** The classic line is Timekeeper down (setup), then Twizzly trades or attacks (it dies, replays a body), then a payoff body comes back to mill or ping. Think one full rotation ahead before you commit.
- **Treat TBD Machine Room as your sweep.** On any turn you've already played a Cookie from the trash, the Stage pings *every* opposing Cookie for 1. Stacking a couple of replays plus the Stage in one turn can clear a small board outright - and clearing their board pressures the no-Cookie win.
- **Count to 10 the same as everyone.** The Break Area win doesn't change because you're a combo deck. Your replayed bodies still need to push the opponent's Break total toward 10. Don't get so lost in the engine that you forget to actually win. (The phase-by-phase rules are in the [turn structure guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-turn-structure-guide).)
- **Refuel before you run dry.** Peeled Carrot and Mustard return cards from trash to hand; Butterfly Key Relic and Cream Puff draw. Keep one refuel in reserve so the engine never stalls for lack of a piece.

> The pilot's mantra: my trash is my second hand. Every Cookie that dies is a Cookie I'll cast again - so I trade freely, I sweep with the Stage, and I out-grind anyone who thinks killing my board means something.

## Mulligan and opening hands

This deck wants a *functional* opener, not an explosive one. You're keeping hands that can start filling the trash and have a replay piece to spend it later. Specifically, you want:

- **At least one enabler or card-flow piece** - Half-Avocado, Cream Puff, or Plain Yogurt - so the trash starts filling on turn two or three.
- **At least one replay piece** - Twizzly Gummy, Golem Core, or Timekeeper - so the engine has a payoff to build toward.
- **Not an all-payoff hand.** Three Currant Creams and no way to play them from the trash is a brick. The payoffs are only good *replayed*; in hand they're vanilla one-drops.

Throw back hands that are all top-end or all payoff with no enabler. Our full [mulligan and opening hand guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-mulligan-guide) covers the framework; for this deck, the short version is "keep the hand that can fill the trash *and* spend it, ship the one that can only do one."

## Combo mistakes to avoid

![Official Golem Core card (BS7-105), a Purple Item that plays an Arena Cookie from your trash and gives it +1 HP - the on-demand replay that keeps a Cookie Run: Braverse combo deck refilling its board.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-combo-deck-guide/golem-core.webp)

The classic ways engine pilots throw away winning positions:

- **Spending replays into an empty trash.** Golem Core, Twizzly's death trigger, and Timekeeper's attack all need targets in the trash. Front-load the trash; don't try to loop on turn two.
- **Over-drawing into a dead hand.** Cream Puff and Butterfly Key Relic are great until you've dug to a hand of payoffs you can't enable. Draw with a plan, not on reflex.
- **Forgetting the actual win.** This is the big one. The engine is the means, not the end. If you're three loops deep and the opponent's Break Area is still at 2, you're durdling. Push damage onto their Cookies and count to 10.
- **Ignoring the no-Cookie line.** When you sweep their board with TBD Machine Room and they have no Cookie in hand to deploy, that's a *win* - not just a tempo swing. Watch their hand size; the starve-them finish is real, just situational. ([Win conditions](/blog/cookie-run-braverse-tcg/cookie-run-braverse-win-conditions) covers exactly when it triggers.)
- **Splashing a second color.** A few "powerful" off-color cards wreck your resource base and your trash synergies, which all key on {P}. Mono-Purple is the engine; keep it clean.

> The cheapest mistake to avoid is durdling. The engine is fun, but fun doesn't fill a Break Area. Loop *toward* a win, not for its own sake.

## How to tune it as you learn

Once the core is humming, upgrade *surgically* rather than chasing every shiny new Purple card:

- **Track which replays feel dead.** If a payoff body consistently sits in hand because you can never enable it, trim a copy for another enabler or a draw piece.
- **Tune your payoff mix to the meta.** More go-wide decks around you means more value in TBD Machine Room and Crowberry's HP-strip; a slower field means you lean harder on Currant Cream's mill and the grind.
- **Watch new sets, but wait.** New Purple recursion pieces can quietly upgrade the engine, but the card pool's verdict takes a week or two to settle after a set drops. Track releases via the [set release timeline](/blog/cookie-run-braverse-tcg/cookie-run-braverse-sets-release-timeline) and upgrade one slot at a time so you can actually feel the change.

Combo is the deck that teaches you to *think in turns*, not in cards. Build it, play it slowly, and let each stalled-out game show you exactly which enabler or refuel slot you were missing.

## Quick Action Checklist

- **Build mono-Purple and lean on the trash-loop engine** - enablers, replayers, and payoffs all keyed on {P}.
- **Run three layers:** enablers that load the trash, replayers that bring Cookies back, and payoffs that hurt when replayed.
- **Front-load the trash** - fill it with Half-Avocado, Cream Puff, and Plain Yogurt before you try to spend it.
- **Sequence the loop a rotation ahead** - setup, replay, payoff, then sweep with TBD Machine Room.
- **Keep refuel in reserve** - Peeled Carrot, Mustard, and Butterfly Key Relic stop the engine from stalling.
- **Loop toward a win** - push the opponent's Break Area toward 10 and watch for the no-Cookie starve-out; don't durdle.
- **Mulligan for an enabler plus a replay piece** - ship all-payoff or all-top-end hands.
- **Verify current printings against the official database** - the English card pool is young and shifts set to set.`,
  faq: [
    {
      question: "Is there a combo deck in Cookie Run: Braverse?",
      answer:
        "Yes, but not the one-card instant-kill kind. Braverse's combo archetype is a Purple recursion engine: a deck that keeps replaying Cookies out of its own trash, triggering bonus effects each time and out-grinding the opponent's removal. It wins on the normal win conditions - pushing the opponent's Break Area to a combined Cookie Level of 10, or starving them of Cookies to deploy - while the engine guarantees you always have a body to replay. Treat any list as a starting point and confirm current cards against the official database.",
    },
    {
      question: "How do you build a Purple recursion deck in Braverse?",
      answer:
        "Build a 60-card mono-Purple shell in three layers: enablers that load your trash (Half-Avocado BS6-094, Cream Puff BS7-093, Plain Yogurt BS5-106), replayers that bring Cookies back (Twizzly Gummy BS6-101, Golem Core BS7-105, Timekeeper BS6-093), and payoffs that trigger when played from the trash (Currant Cream BS6-098 mills, Crowberry BS6-099 strips HP). Add TBD Machine Room (BS6-107) as a board-sweep payoff and a few draw pieces. Respect the rules: exactly 60 cards, at least one Cookie, up to 4 copies per card number.",
    },
    {
      question: "How does the trash-loop engine work in Cookie Run: Braverse?",
      answer:
        "Several Purple Cookies have a 'When this Cookie is played from the trash' trigger, so your trash becomes a resource instead of a graveyard. Enablers like Timekeeper Cookie (BS6-093) and Half-Avocado (BS6-094) send your own Cookies to the trash, replayers like Twizzly Gummy Cookie (BS6-101) and Golem Core (BS7-105) bring them back, and the replay re-fires the payoff effect - milling, pinging, or buffing. TBD Machine Room (BS6-107) then pings every opposing Cookie on any turn you played a Cookie from the trash, turning the loop into board-wide damage.",
    },
    {
      question: "Why is Purple the combo color in Braverse?",
      answer:
        "Purple's color identity is disruption and trash synergy, and the recursion engine lives almost entirely in one Purple cluster - the 'Time' / trash-loop package. Purple is the only color that has all three combo ingredients in one place: a way to load the trash on purpose, a way to replay Cookies from it, and payoff effects and Stages that reward doing so. That self-contained loop is what makes a real combo deck possible, which is why the build is mono-Purple.",
    },
    {
      question: "How do you pilot a combo deck in Cookie Run: Braverse?",
      answer:
        "Load the trash before you try to spend it - the early turns are about getting Cookies into the trash so your replay cards have targets. Sequence each loop a full rotation ahead (setup, replay, payoff), use TBD Machine Room to sweep the board on a turn you've already replayed, and keep a refuel piece like Peeled Carrot (BS6-087) or Mustard (BS6-089) in reserve so the engine never stalls. Most importantly, loop toward an actual win: push the opponent's Break Area toward 10 and watch for the no-Cookie starve-out rather than durdling.",
    },
  ],
  internalLinks: [
    { href: '/blog/cookie-run-braverse-tcg', anchor: 'Braverse hub' },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-archetypes',
      anchor: 'deck archetypes guide',
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
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-combos-synergies',
      anchor: 'combos and synergies',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-win-conditions',
      anchor: 'win conditions',
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
    "Combo in Cookie Run: Braverse isn't a one-card kill - it's a mono-Purple recursion engine that keeps replaying Cookies out of its own trash, triggering bonus effects and out-grinding the opponent's removal. The sample 60-card list runs three layers: enablers that load the trash (Half-Avocado BS6-094, Cream Puff BS7-093, Plain Yogurt BS5-106), replayers that bring Cookies back (Twizzly Gummy BS6-101, Golem Core BS7-105, Timekeeper BS6-093), and payoffs that fire when replayed (Currant Cream BS6-098 mills, Crowberry BS6-099 strips HP), with TBD Machine Room (BS6-107) sweeping the board on any turn you replayed. Pilot it as a value engine: front-load the trash, sequence each loop a rotation ahead, keep a refuel in reserve, and loop toward a real win - the Break Area Level-10 race or the no-Cookie starve-out. Verify current printings against the official database.",
  itemList: {
    name: "Purple Recursion Combo Deck-Building Plan",
    items: [
      { name: '1. Build mono-Purple around the trash loop', description: 'Keep every card on {P} so the trash-synergy triggers all line up.' },
      { name: '2. Run three engine layers', description: 'Enablers that load the trash, replayers that bring Cookies back, and payoffs that hurt when replayed.' },
      { name: '3. Anchor the replay core', description: 'Twizzly Gummy Cookie (BS6-101), Golem Core (BS7-105), and Timekeeper Cookie (BS6-093) are the bring-it-back pieces.' },
      { name: '4. Add a sweep payoff', description: 'TBD Machine Room (BS6-107) pings every opposing Cookie on a turn you played a Cookie from the trash.' },
      { name: '5. Pilot toward a win', description: 'Front-load the trash, loop a rotation ahead, refuel before you run dry, and push the opponent toward the Break Area Level-10 or no-Cookie loss.' },
    ],
  },
};
