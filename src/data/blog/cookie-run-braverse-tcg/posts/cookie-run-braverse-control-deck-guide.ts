import type { BlogPost } from '../../blogTypes';

export const braverseControlDeckGuide: BlogPost = {
  slug: 'cookie-run-braverse-control-deck-guide',
  game: 'cookie-run-braverse-tcg',
  category: 'deck-guides',
  topicCluster: 'deck-building',
  tags: ['Control', 'Blue', 'Purple', 'Deck Building'],
  title: "Cookie Run: Braverse Control Deck Guide (Build & Pilot Blue/Purple Control)",
  metaDescription:
    "Build and pilot a Blue/Purple control deck in Cookie Run: Braverse: a real 60-card decklist, removal and draw engine, mulligan plan, and how to win late.",
  excerpt:
    "Control is the deck that says \"go ahead, swing\" and then makes you regret it. Here's how to build a reactive Blue/Purple control shell in Cookie Run: Braverse, a real 60-card list of cards you can actually buy, and how to pilot it without drowning in your own clever answers.",
  featuredImagePrompt:
    "A Blue and Purple Cookie Run: Braverse control board: Pure Vanilla Cookie and Dark Cacao Cookie standing behind a wall of trap cards, cool blue and violet lighting, the slow-and-inevitable feel of a deck that wins by outlasting you.",
  heroImage:
    '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-control-deck-guide/pure-vanilla-cookie.webp',
  heroImageAlt:
    'Official Pure Vanilla Cookie card (BS3-088), a Blue LV.3 Ancient Cookie whose skill draws 3 cards - the late-game draw engine at the heart of a Cookie Run: Braverse control deck.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-control-deck-guide/pure-vanilla-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/v3sriD5Yu_o7COb4ttgqTw.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-control-deck-guide/dark-cacao-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/CMHoSF_U6LUYwYSH_9obrQ.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-control-deck-guide/string-gummy-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/KUS_NuMMNNpVH7fZKLbEow.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-control-deck-guide/knights-somber-lantern.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/v3GBM4flcbSLT_g_830eKw.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-control-deck-guide/reversed-prophecy.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/aoIKu0cWP9-XL0X6MIqAtg.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
  ],
  publishDate: '2026-06-23T00:00:00.000Z',
  lastUpdated: '2026-06-23T00:00:00.000Z',
  primaryKeyword: 'cookie run braverse control deck',
  secondaryKeywords: [
    'braverse blue control deck',
    'cookie run braverse control guide',
    'how to build control braverse',
    'braverse removal decklist',
    'best control cards cookie run braverse',
    'cookie run braverse late game deck',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'what-control-actually-wants-to-do', label: 'What control actually wants to do', level: 2 },
    { id: 'why-blue-and-purple-are-the-control-colors', label: 'Why Blue and Purple are the control colors', level: 2 },
    { id: 'the-three-engines-that-make-control-work', label: 'The three engines that make control work', level: 2 },
    { id: 'a-sample-bluepurple-control-decklist', label: 'A sample Blue/Purple control decklist', level: 2 },
    { id: 'how-to-pilot-the-deck', label: 'How to pilot the deck', level: 2 },
    { id: 'mulligan-and-opening-hands', label: 'Mulligan and opening hands', level: 2 },
    { id: 'control-mistakes-to-avoid', label: 'Control mistakes to avoid', level: 2 },
    { id: 'how-to-tune-it-as-you-learn', label: 'How to tune it as you learn', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Aggro decks want the game to end on turn five. Control wants the game to still be going on turn fifteen, because by then you've drawn twice as many cards as your opponent and every threat they played is sitting in their break area instead of yours. If you're the kind of player who'd rather answer the board than race it, this is your lane in Cookie Run: Braverse - and unlike a lot of TCGs, the game's reactive tools are deep enough to make it real.

Here's the honest version up front: this is an *informed* build, not a tournament-proven netdeck. The English meta is young, so treat the list as a strong, fact-checked starting point and confirm the current card pool against the official database before an event. If you want the format-wide map first, our [deck archetypes guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-archetypes) frames where control sits next to aggro and combo, and our [aggro deck guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-aggro-deck-guide) shows you exactly what you'll be answering.

## What control actually wants to do

Control isn't "play removal until I feel safe." It's a deliberate three-phase plan:

- **Survive the early turns.** Aggro's edge is front-loaded. Your job in the first few turns is to not die - trade efficiently, soak hits with bigger bodies, and answer the scariest attacker rather than every attacker.
- **Win the card-advantage war.** Every clean two-for-one - one of your cards killing one of theirs while drawing you a card - widens the gap. By the midgame you should simply have more resources than the opponent.
- **Close with inevitability, not speed.** Braverse's main win condition is pushing your opponent's break area to a combined Cookie Level of 10. Control gets there slowly with big, durable LV.3 Cookies that the opponent can't profitably trade with, while your removal keeps their board too thin to fight back.

> The control truth: you don't need to be ahead on board every turn. You need to be ahead on *cards*. Tempo is rented; card advantage is owned.

## Why Blue and Purple are the control colors

![Official Dark Cacao Cookie card (BS3-100), a Purple LV.3 Ancient Cookie whose skill places cards from the top of two opponent Cookies' HP into the trash - the premium removal piece of a Cookie Run: Braverse control deck.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-control-deck-guide/dark-cacao-cookie.webp)

Braverse's five colors each have a job (the full rundown is in [colors explained](/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained)), and the two that hand you a control deck are Blue and Purple. They divide the labor cleanly:

- **Blue is the card-advantage and tempo color.** It owns the deck's draw engine and its bounce - returning an opponent's Cookie to their hand to undo a turn of their development. Cards like Chocolate Bonbon Cookie (BS6-072) read "draw up to 3 cards" on play, and Peppermint Cookie (BS5-070) and Adventurer Cookie (BS6-080) both bounce a Cookie back to hand.
- **Purple is the removal color.** Its identity is killing things and grinding the opponent out - dealing direct damage to Cookies, placing cards from a Cookie's HP into the trash, and even milling the opponent's deck. String Gummy Cookie (BS6-074) deals 2 damage on play; Kumiho Cookie (BS3-098) and Lychee Dragon Cookie (BS5-093) both have repeatable ping skills.

Put them together and you get the full reactive toolkit: Blue keeps your hand full and resets their tempo, Purple makes their board disappear. That two-color pairing is also why this list runs no third color - splashing would wreck a manabase you need to be rock-solid so your answers come up on time. For the wider Blue and Purple toolboxes, our [best Blue cards](/blog/cookie-run-braverse-tcg/best-blue-cards-cookie-run-braverse) and [best Purple cards](/blog/cookie-run-braverse-tcg/best-purple-cards-cookie-run-braverse) guides go deeper; this one stays locked on the control shell.

## The three engines that make control work

A control deck is really three engines bolted together. Get the ratios right and the deck plays itself; get them wrong and you flood on answers with nothing to answer, or run dry and die.

**1. The removal suite.** This is your interaction. Direct-damage Cookies (String Gummy BS6-074, Schneeball BS6-073, Kumiho BS3-098), trash-the-HP effects (Dark Cacao Cookie BS3-100, an Ancient), bounce (Peppermint BS5-070), and cheap removal Items (Knight's Somber Lantern BS10-112) cover every kind of threat. The trick is matching the answer to the threat - don't spend a 3-damage swing on a LV.1 a bounce would handle.

**2. The draw engine.** Control wins by drawing more than the opponent, and Blue is overflowing with it. Sorbet Shark Cookie (BS5-074) draws 2 on play, Chocolate Bonbon Cookie (BS6-072) draws 3, and the Blue Ancient Pure Vanilla Cookie (BS3-088) draws 3 as a skill. This is what refuels you after you've spent answers, and it's what turns a stable board into an avalanche of resources.

**3. The reactive layer (Traps).** Traps are control's "no" button. Reversed Prophecy (BS9-093) shrinks an attacker by 2 *and* refills your hand; Truth Stained With Lies (BS9-117) does the same in Purple; Dino Greetings (BS5-087) is a cheap speed bump. These let you punish the opponent's combat math without spending a turn, which is exactly how control buys the time it needs.

> The engine-balance rule: if you ever draw a hand that's all answers and no draw, you'll win the early game and lose the long one. Build so your removal *replaces itself* - that's why so many of these cards draw a card while they interact.

## A sample Blue/Purple control decklist

Here's a complete 60-card Blue/Purple control shell built entirely from real, verified cards. It respects the construction rules: exactly 60 cards, at least one Cookie, and up to 4 copies of any card number. Card numbers are cited so you can find each one in the official database.

**Cookies - LV.1 (early survival & disruption):**

- 4x Adventurer Cookie (BS6-080) - one-cost Blue body that bounces an opposing Cookie when your hand is low.
- 4x Licorice Cookie (BS3-097) - Purple LV.1 that pings a Cookie for 1 and mills the opponent's deck.

**Cookies - LV.2 (the removal & draw core):**

- 4x Schneeball Cookie (BS6-073) - deals 1 damage to a Cookie on play; clean, repeatable interaction.
- 4x Clotted Cream Cookie (BS2-069) - discard a card to place an opposing LV.1 straight into the trash - hard removal.
- 3x Peppermint Cookie (BS5-070) - bounce an opposing Cookie to hand; a tempo answer that dodges "can't be destroyed" effects.
- 3x Sorbet Shark Cookie (BS5-074) - draw 2 on play, with a FLIP that draws another; your main refuel.
- 2x Dark Cacao Cookie (BS9-097) - the LV.2 Ancient; repeatable trash-the-HP removal that scales with another Ancient out.

**Cookies - LV.3 (the inevitable top end):**

- 4x String Gummy Cookie (BS6-074) - deals 2 damage on play, then draws you back up; the removal-plus-card-advantage all-star.
- 3x Kumiho Cookie (BS3-098) - durable body with a repeatable 1-damage ping.
- 3x Chocolate Bonbon Cookie (BS6-072) - draw 3 on play, swing for 3, draw 2 more on attack; the late-game card-advantage haymaker.
- 2x Croissant Cookie (BS6-079) - draws 2 and rests the opponent's support, denying them resources on the swing.
- 2x Dark Cacao Cookie (BS3-100) - the Purple Ancient finisher; trashes HP off two Cookies at once.
- 2x Pure Vanilla Cookie (BS3-088) - the Blue Ancient; a draw-3 skill plus a 4-damage attack that heals your board.
- 2x Lychee Dragon Cookie (BS5-093) - a Dragon with a repeatable 1-damage ping to grind small boards down.

**Items (cheap removal):**

- 4x Knight's Somber Lantern (BS10-112) - "Select up to 1 of your opponent's Cookies. That Cookie receives 1 damage." Flexible, instant interaction.
- 3x Plasma Crystal Ball (BS4-108) - returns a Purple card from your trash and pings a Cookie; removal that recurs your best answers.

**Traps (the reactive layer):**

- 4x Reversed Prophecy (BS9-093) - shrink an attacker by 2 and draw up to 2; the perfect control Trap.
- 4x Truth Stained With Lies (BS9-117) - Purple's version; -2 attack and a bigger effect when the opponent's trash is stocked.
- 3x Dino Greetings (BS5-087) - cheap -1 attack speed bump for the early turns.

That's 4+4 + 4+4+3+3+2 + 4+3+3+2+2+2+2 + 4+3 + 4+4+3 = **60 cards.** It's a coherent two-color list: a wall of cheap interaction up front, a deep draw engine in the middle, and Ancient-fueled LV.3 bodies that simply outlast the opponent. Counts are a matter of taste - which staples sit at common or uncommon shifts with the card pool, so confirm current printings against the official database. For the build philosophy behind these ratios, pair this with [deck-building basics](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics).

## How to pilot the deck

![Official String Gummy Cookie card (BS6-074), a Blue LV.3 Cookie that deals 2 damage on play and draws cards on attack - the removal-plus-card-advantage workhorse of a Cookie Run: Braverse control deck.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-control-deck-guide/string-gummy-cookie.webp)

Building the deck is the easy half. Piloting control is harder than aggro, because every turn is a decision instead of an attack. The principles:

- **Triage the early game.** You will take damage. That's fine. Spend answers only on the threats that actually matter - the buffed attacker, the engine Cookie - and let the small chip damage through. New control pilots burn removal on turn-one one-drops and then have nothing for the real threat on turn four.
- **Match the answer to the threat.** Bounce (Peppermint, Adventurer) is best against expensive Cookies you want to set back a whole turn. Hard removal (Clotted Cream trashing a LV.1, Dark Cacao trashing HP) is for things you need gone permanently. Cheap pings (Knight's Somber Lantern, Schneeball) finish wounded Cookies. Spending the wrong answer is how you run out.
- **Draw before you have to.** When you're stable, dump a draw spell to widen the gap *before* you're under pressure. A turn you spend on Chocolate Bonbon Cookie's draw-3 while you're safe is a turn you'll never regret; drawing for cards while you're being beaten down is reactive and worse.
- **Hold Traps for the swing that matters.** Reversed Prophecy and Truth Stained With Lies are best deployed against the attack that would otherwise kill your key Cookie or push lethal. Bait out small swings, then say no to the big one - and pocket the cards they draw you.
- **Mind the break-area math going both ways.** The game ends at a combined Level of 10 in someone's break area. Your big LV.3 Cookies are worth a lot when they die, so don't throw them into bad trades that feed *your* break total. Make the opponent spend two cards to remove one of yours, never the reverse. The [win conditions guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-win-conditions) breaks down the Level math in full.

> The pilot's mantra: I'm not trying to win this turn. I'm trying to make sure I'm the one with cards in hand on the turn that matters - and that turn is always later than my opponent wants.

## Mulligan and opening hands

Control hands are harder to evaluate than aggro hands because "good" depends on what you expect to face. The general rule: you want a hand that can interact early *and* a way to refuel.

- **Keep hands with cheap interaction.** A couple of one- or two-cost answers (Knight's Somber Lantern, Dino Greetings, Schneeball, Licorice) means you won't get run over before your engine comes online.
- **Keep at least one draw or value piece.** Sorbet Shark Cookie or a String Gummy Cookie down the line means you won't run out of gas. A hand of pure removal with no card draw will win the early game and lose the long one.
- **Ship hands that are all top-end.** Three LV.3 finishers and no early plays is a mulligan - you'll be dead before you can cast them.

Against an unknown opponent, lean toward the flexible hand: a little interaction, a little draw, a top-end card to land on. Our full [mulligan and opening hand guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-mulligan-guide) covers the framework; for control, the short version is "keep the hand that survives *and* refuels, ship the one that only does one."

## Control mistakes to avoid

![Official Knight's Somber Lantern card (BS10-112), a Purple Item that deals 1 damage to an opposing Cookie - the cheap, flexible removal that lets a Cookie Run: Braverse control deck answer threats every turn.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-control-deck-guide/knights-somber-lantern.webp)

The classic ways control pilots lose games they should win:

- **Over-answering early.** Spending three pieces of removal in the first three turns to "feel safe" leaves you defenseless when the real threat lands. Let chip damage through; save answers for what matters.
- **Hoarding cards forever.** Card advantage you never spend is just a bigger hand when you deck out. Convert your resources into board control and break-area damage at some point - control still has to actually win.
- **Running too few win conditions.** A deck that's all answers and no closers durdles to a draw or decks itself. The LV.3 Ancients and big bodies are there for a reason; respect their count.
- **Splashing a third color.** A "powerful" off-color card you can never reliably cast is worse than a fine on-color one you always can. Two colors, rock-solid manabase.
- **Forgetting your own break-area math.** Trading your durable LV.3 into a bad fight can advance *your* break total and hand the opponent the alternate win. Always know whose break total a trade feeds.

> The cheapest mistake to avoid is panic. Aggro punishes hesitation; control punishes *over*reaction. When in doubt, take the small hit and hold the answer.

## How to tune it as you learn

Once the core is humming, tune the ratios rather than chasing every new card:

- **Read your local meta.** A field full of aggro means more cheap Traps and early pings; a field full of other slow decks means more draw and more LV.3 inevitability. The reactive package is the part you flex hardest.
- **Track which answers feel dead.** If a removal type consistently sits uncast - say bounce against a board you'd rather kill permanently - swap a copy for hard removal or a draw spell.
- **Watch new sets, but wait.** New Blue draw and Purple removal print regularly, and they can quietly upgrade the deck, but let the card pool's verdict settle for a week or two after a set drops. Track releases via the [set release timeline](/blog/cookie-run-braverse-tcg/cookie-run-braverse-sets-release-timeline) and upgrade one slot at a time so you can feel the change.

Control is the most demanding archetype to pilot, but it teaches you the game's decision points faster than anything else: every turn is a real choice about what to answer, what to let through, and when to draw. Build it, lose a few while you learn the triage, and it'll quietly become the deck nothing in the format can race.

## Quick Action Checklist

- **Build two-color Blue/Purple** - Blue for draw and bounce, Purple for hard removal; no third-color splash.
- **Balance the three engines** - removal, a deep draw package, and a reactive Trap layer; build so answers replace themselves.
- **Triage the early game** - take chip damage, spend answers only on threats that matter.
- **Match the answer to the threat** - bounce big Cookies, hard-remove the permanent problems, ping the wounded ones.
- **Draw while you're safe** - widen the card gap before you're under pressure, not after.
- **Hold Traps for the swing that matters** - bait small attacks, say no to the lethal one.
- **Close with Ancient-fueled LV.3 bodies** - win on inevitability, not speed, and mind both break-area totals.
- **Verify current printings against the official database** - the English card pool is young and shifts set to set.`,
  faq: [
    {
      question: "What is the best control deck in Cookie Run: Braverse?",
      answer:
        "A two-color Blue/Purple control deck is the strongest reactive build. Blue supplies the card-advantage and bounce engine (Sorbet Shark Cookie BS5-074, Chocolate Bonbon Cookie BS6-072, Peppermint Cookie BS5-070) while Purple supplies the removal (String Gummy Cookie BS6-074, Dark Cacao Cookie BS3-100, Knight's Somber Lantern BS10-112). The deck survives the early turns, wins the card-advantage war, and closes with durable LV.3 Ancient bodies that push the opponent's break area to a combined Cookie Level of 10. Treat any list as a starting point and confirm current cards against the official database.",
    },
    {
      question: "How do you build a control deck in Braverse?",
      answer:
        "Build a 60-card Blue/Purple shell around three engines: a removal suite (String Gummy BS6-074, Schneeball BS6-073, Clotted Cream BS2-069, Knight's Somber Lantern BS10-112), a draw package (Sorbet Shark BS5-074, Chocolate Bonbon BS6-072, Pure Vanilla BS3-088), and a reactive Trap layer (Reversed Prophecy BS9-093, Truth Stained With Lies BS9-117). Cap it with LV.3 Ancient finishers like Dark Cacao Cookie (BS3-100). Respect the rules: exactly 60 cards, at least one Cookie, up to 4 copies per card number, and don't splash a third color.",
    },
    {
      question: "How do you pilot control in Cookie Run: Braverse?",
      answer:
        "Triage the early game - take chip damage and spend answers only on threats that matter. Match the answer to the threat: bounce expensive Cookies, hard-remove permanent problems, and ping wounded ones. Draw spells while you're safe to widen the card gap, hold Traps for the swing that would kill your key Cookie or push lethal, and close with durable LV.3 bodies. Control wins on card advantage and inevitability, not speed.",
    },
    {
      question: "Why are Blue and Purple the control colors in Braverse?",
      answer:
        "The two colors divide control's labor cleanly. Blue is the card-advantage and tempo color - it owns the deck's draw engine and bounce, returning opposing Cookies to hand to undo their development. Purple is the removal color - direct damage, placing cards from a Cookie's HP into the trash, and milling. Pairing them gives you the full reactive toolkit: Blue keeps your hand full and resets their tempo while Purple makes their board disappear.",
    },
    {
      question: "Is control good for beginners in Cookie Run: Braverse?",
      answer:
        "Control is the most demanding archetype to pilot because every turn is a decision rather than an attack - you're constantly choosing what to answer, what to let through, and when to draw. Beginners who want fast wins should start with aggro. But control is the best deck for learning the game's decision points: it forces you to read threats, manage resources, and respect the break-area math, which makes you a sharper player across every archetype.",
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
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained',
      anchor: 'colors explained',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-blue-cards-cookie-run-braverse',
      anchor: 'best Blue cards',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-purple-cards-cookie-run-braverse',
      anchor: 'best Purple cards',
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
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-sets-release-timeline',
      anchor: 'set release timeline',
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
    "Blue/Purple control is the reactive deck in Cookie Run: Braverse: it survives the early turns, wins the card-advantage war, and closes with durable LV.3 Ancient bodies that push the opponent's break area to a combined Cookie Level of 10. The sample 60-card list pairs Blue's draw and bounce (Sorbet Shark BS5-074, Chocolate Bonbon BS6-072, Peppermint BS5-070, Pure Vanilla BS3-088) with Purple's removal (String Gummy BS6-074, Dark Cacao BS3-100, Knight's Somber Lantern BS10-112) and a reactive Trap layer (Reversed Prophecy BS9-093, Truth Stained With Lies BS9-117). Pilot it by triaging the early game, matching answers to threats, drawing while you're safe, and holding Traps for the swing that matters. Verify current printings against the official database.",
  itemList: {
    name: "Blue/Purple Control Deck-Building Plan",
    items: [
      { name: '1. Build two-color Blue/Purple', description: 'Blue for the draw engine and bounce, Purple for hard removal; keep the manabase clean with no third-color splash.' },
      { name: '2. Balance the three engines', description: 'A removal suite, a deep draw package, and a reactive Trap layer - build so your answers replace themselves.' },
      { name: '3. Anchor the late game with Ancients', description: 'Run durable LV.3 bodies like Dark Cacao Cookie (BS3-100) and Pure Vanilla Cookie (BS3-088) as inevitable finishers.' },
      { name: '4. Pilot reactively', description: 'Triage early damage, match the answer to the threat, draw while safe, and hold Traps for the swing that matters.' },
      { name: '5. Flex the reactive package', description: 'Tune Trap and ping counts to your local meta - more against aggro, more draw and inevitability against slower decks.' },
    ],
  },
};
