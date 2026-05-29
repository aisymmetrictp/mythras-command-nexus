import type { BlogPost } from '../../blogTypes';

export const mtgDeckArchetypesExplained: BlogPost = {
  slug: 'mtg-deck-archetypes-explained',
  game: 'magic-the-gathering',
  category: 'beginner-guides',
  topicCluster: 'archetypes',
  title: 'MTG Deck Archetypes Explained — Aggro, Midrange, Control & Combo',
  metaDescription: 'Aggro, midrange, control, and combo are the four pillars every MTG deck is built on. Learn the gameplans, the curves, and which one fits how you play.',
  excerpt: 'Every Magic deck ever built is a variation on four ideas. Here is what aggro, midrange, control, and combo actually do, when each one wins, and how to find the archetype that matches the way you like to play.',
  featuredImagePrompt: 'Four stylized Magic: The Gathering decks laid out on a dark wooden table under dramatic lighting, each pile color-coded, aggressive red, balanced green, defensive blue-white, and a glowing combo pair of cards mid-spark, fantasy art style, high detail',
  heroImage: '/images/blog/magic-the-gathering/mtg-deck-archetypes-explained/monastery-swiftspear.jpg',
  heroImageAlt: 'Monastery Swiftspear, a one-mana red prowess creature and a defining threat of the aggro archetype.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-deck-archetypes-explained/monastery-swiftspear.jpg',
      sourceUrl: 'https://scryfall.com/card/bro/144/monastery-swiftspear',
      license: 'WotC Fan Content Policy / Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-deck-archetypes-explained/supreme-verdict.jpg',
      sourceUrl: 'https://scryfall.com/card/clu/211/supreme-verdict',
      license: 'WotC Fan Content Policy / Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-deck-archetypes-explained/splinter-twin.jpg',
      sourceUrl: 'https://scryfall.com/card/mm2/129/splinter-twin',
      license: 'WotC Fan Content Policy / Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-deck-archetypes-explained/delver-of-secrets.jpg',
      sourceUrl: 'https://scryfall.com/card/inr/60/delver-of-secrets-insectile-aberration',
      license: 'WotC Fan Content Policy / Scryfall',
    },
  ],
  publishDate: '2026-05-28T00:00:00.000Z',
  lastUpdated: '2026-05-28T00:00:00.000Z',
  primaryKeyword: 'mtg deck archetypes',
  secondaryKeywords: [
    'aggro vs control mtg',
    'mtg midrange decks',
    'what is a combo deck mtg',
    'mtg tempo archetype',
    'commander archetypes',
    'best mtg archetype for beginners',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'evergreen',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'why-archetypes-matter', label: 'Why archetypes matter', level: 2 },
    { id: 'aggro-race-to-zero', label: 'Aggro — race to zero', level: 2 },
    { id: 'midrange-the-grindy-middle', label: 'Midrange — the grindy middle', level: 2 },
    { id: 'control-win-the-long-game', label: 'Control — win the long game', level: 2 },
    { id: 'combo-win-out-of-nowhere', label: 'Combo — win out of nowhere', level: 2 },
    { id: 'tempo-and-the-in-between-archetypes', label: 'Tempo and the in-between archetypes', level: 2 },
    { id: 'the-metagame-rock-paper-scissors', label: 'The metagame rock-paper-scissors', level: 2 },
    { id: 'which-archetype-fits-your-playstyle', label: 'Which archetype fits your playstyle', level: 2 },
    { id: 'archetypes-in-commander-vs-60-card-formats', label: 'Archetypes in Commander vs 60-card formats', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Every Magic deck ever built is a variation on four ideas. Aggro, midrange, control, combo. That is the whole list. Twenty years of sets, thousands of cards, a hundred banned spells, and it still all bends back to those four shapes. Knowing which one you're playing is the difference between a deck and a pile of good cards you happened to like.

This trips up new players constantly. Somebody opens a few packs, grabs the splashiest rares, jams a counterspell next to a 6-drop next to a one-mana goblin, and wonders why the thing falls apart. The cards are fine. The deck has no plan. Every card in a real deck answers one question: how does this help me execute my gameplan? If you can't answer that, the card doesn't go in.

So let's lay out the four pillars, how each one wins, how each one loses, and how to figure out which one is actually you.

## Why archetypes matter

An archetype is a gameplan with a clock attached. It tells you what your deck is trying to do, on what turn it's trying to do it, and what it's willing to give up to get there.

Aggro wants the game over fast. Control wants the game to last forever. Midrange wants it to last exactly as long as midrange is winning. Combo doesn't care how long it takes as long as it gets to its kill. Once you know your archetype, every deckbuilding decision gets easier. Aggro cuts the expensive removal spell because it costs a turn of pressure. Control runs it main-deck because trading mana for tempo is the whole point.

The other reason this matters is sideboarding and matchups, which we'll get to. You can't beat what you can't name. When you sit down across from a Mono-Red player and recognize the deck on turn one, you already know to keep your life total high and your removal cheap. Recognition is half the game.

## Aggro — race to zero

![Monastery Swiftspear, a one-mana red creature with haste and prowess that grows when you cast a spell.](/images/blog/magic-the-gathering/mtg-deck-archetypes-explained/monastery-swiftspear.jpg)

Aggro is the simplest plan in Magic and the hardest to play perfectly. Curve out, attack, win before the opponent stabilizes. You are a clock, and the whole deck is built to tick faster than the other guy can answer it.

**The gameplan:** Deploy cheap, efficient threats every turn and point them at the opponent's face. Burn spells finish the job when creatures stall. You usually want the game decided by turn five or six. If it goes past turn eight, you've probably lost.

**The curve:** Brutally low. A classic Mono-Red list runs a fistful of one-drops, a pile of two-drops, and tops out around three or four mana. You rarely see anything cost more than four. Every slot is pressure.

**Signature cards:** One-mana hasty creatures, efficient two-drops that hit hard, and reach in the form of burn, Lightning Bolt and its descendants, Lava Spike effects, Monastery Swiftspear. Red has owned this lane forever, but white aggro and various Boros builds live here too.

**When it wins:** Against slow decks that stumble on their early turns. Against combo decks that need until turn five to assemble their kill, when you've already dealt 18 by turn four. Against anyone who keeps a greedy hand with no early plays.

**When it loses:** Against decks that gain life and block well, against cheap efficient removal stacked on a low curve, and against itself when you flood out and draw lands instead of gas. Aggro's nightmare is running out of cards while the opponent is still alive.

**Real example:** Mono-Red has been a Standard staple basically forever. It's cheap to build, it punishes greedy metagames, and it's the deck most pros recommend new players learn first because it teaches you to think about tempo and the clock.

## Midrange — the grindy middle

Midrange is the most flexible archetype and, honestly, the one most decks default to when they don't commit. It plays the best individual cards in the format and grinds you out with raw quality.

**The gameplan:** Trade efficiently, then win with bigger, better threats once the boards are even. Midrange doesn't have aggro's speed or control's reach. What it has is a deck full of cards that are each a little better than yours, and it wins by trading down until its quality advantage takes over.

**The curve:** Spread out and a little higher than aggro. Plenty of two- and three-mana removal and threats, a strong four-drop or two, and a top-end finisher that ends games when nothing's stopping it.

**Signature cards:** Flexible removal that kills almost anything, efficient threats that also generate value, and planeswalkers or recursive creatures that refuse to die for free. Jund and Golgari are the textbook color combinations, black-green-red or black-green decks loaded with discard, removal, and threats that won't quit.

**When it wins:** Against aggro, which it grinds to dust with removal and lifegain, and against control if it applies just enough pressure to stay ahead of the wraths. Midrange preys on decks that play fair.

**When it loses:** Against dedicated combo, which ignores your fair-game value and just wins, and against control that has time to set up. The classic midrange problem is being a little too slow for aggro and a little too fair for combo. The grindy middle is also the squeezed middle.

**Real example:** Jund and its Golgari cousins have been midrange royalty across Modern and Standard for over a decade. Our [Standard post-ban meta breakdown](/blog/magic-the-gathering/standard-post-ban-meta-may-2026) is a snapshot of how midrange and aggro keep trading the top spot whenever the format settles.

## Control — win the long game

![Supreme Verdict, an uncounterable Azorius board wipe that destroys all creatures, a staple control sweeper.](/images/blog/magic-the-gathering/mtg-deck-archetypes-explained/supreme-verdict.jpg)

Control is the archetype people love to hate and hate to play against. The plan is simple to state and brutal to execute: say no to everything, then win when the opponent has nothing left.

**The gameplan:** Counter the threats you can, kill the ones you can't, sweep the board when it gets out of hand, and refill your hand while the opponent runs dry. You win with one or two finishers that close the game out over a few turns once you've taken total control.

**The curve:** Reactive and back-loaded. Cheap interaction early, counterspells, removal, and expensive payoffs late, like board wipes, card-draw engines, and a small number of game-ending threats. Control runs the fewest win conditions of any archetype on purpose. You don't need eight finishers when you've answered everything else.

**Signature cards:** Counterspells, wraths like Supreme Verdict and Damn, card-advantage engines, and a tight package of finishers. Azorius (white-blue) is the classic two-color shell. Jeskai (white-blue-red) adds burn to the counters and wraths.

> Control is the only archetype where doing nothing on your turn is often the correct play. Every other deck wants to be advancing its plan. Control wants to hold up answers and react. If you find that boring, you already know control isn't for you. If you find it thrilling to leave mana open and dare your opponent to walk into it, congratulations, you're a control player.

**When it wins:** Against combo, if it has the counterspells up, and against midrange, which it out-grinds with superior card advantage over a long game. Control loves a deck that plays one threat at a time.

**When it loses:** Against aggro that's faster than its wraths, and against combo decks that can win through countermagic or simply go over the top. The other failure mode is its own pilot, control is the hardest archetype to play, and a single wrong sequence can lose a game you'd already won.

**Real example:** Azorius and Jeskai Control have anchored Standard and Pioneer for years. When the format is full of fair midrange decks, control eats well. When aggro takes over, control gets pushed out, which is exactly the rock-paper-scissors we'll get to in a second.

## Combo — win out of nowhere

![Splinter Twin, the blue-red aura that made infinite hasty copies and was banned for warping Modern combo.](/images/blog/magic-the-gathering/mtg-deck-archetypes-explained/splinter-twin.jpg)

Combo is the archetype that scares people, and it should. A combo deck doesn't beat you in combat or grind you out. It assembles a specific set of cards and wins the game on the spot, often from a board state where you thought you were fine.

**The gameplan:** Find your pieces, protect them, and execute. Most combos are two or three cards that do something broken together, infinite damage, infinite mana into a draw spell, an instant board-clear-plus-win. The rest of the deck is dedicated to digging for those pieces and stopping the opponent from interfering.

**The curve:** Whatever the combo needs. Combo decks are built around their kill, not around a smooth mana curve. Often that means lots of cheap cantrips and tutors to find pieces, plus interaction to clear the path on the turn you go off.

**Signature cards:** The combo pieces themselves, plus tutors, card selection, and protection. Historically, Splinter Twin (Splinter Twin plus Deceiver Exarch for infinite hasty copies) defined Modern combo so hard it got banned. In Commander, Thassa's Oracle plus Demonic Consultation is the classic two-card win that exiles your library and hands you the game.

**When it wins:** Against decks with no disruption, against slow durdly metagames, and any time it's allowed to assemble its pieces in peace. A combo deck that resolves its kill doesn't care what your board looks like.

**When it loses:** Against aggro that kills it before it sets up, and against control with countermagic and disruption in hand. Combo is also fragile to its own variance, when it doesn't draw the pieces, it can do nothing while a fair deck rolls over it.

**Real example:** Splinter Twin is the cautionary tale every veteran cites, a deck so dominant in Modern that Wizards banned it to open the format back up. Modern Storm and Commander's Thoracle lines are the spiritual heirs.

## Tempo and the in-between archetypes

![Delver of Secrets, a one-mana blue creature that flips into a 3/2 flying Insectile Aberration, the tempo archetype's mascot.](/images/blog/magic-the-gathering/mtg-deck-archetypes-explained/delver-of-secrets.jpg)

The four pillars are clean, but real decks blur the lines, and the most famous blur is tempo.

Tempo is aggro-control: a hybrid that plays a few cheap, efficient threats and then defends them with cheap interaction. You're not trying to grind out card advantage like control. You're trying to land one or two threats, deal damage, and use counterspells and bounce spells to deny the opponent the time to recover. Delver of Secrets is the archetype's mascot, a one-mana creature that flips into a 3/2 flier, backed by Brainstorm, Daze, and Wasteland. Tempo wins by being slightly ahead and refusing to let the opponent catch up.

Then there's prison and stax, which are control offshoots with a nastier attitude. Instead of answering individual threats, these decks lock the game down, taxing every spell, blowing up lands, denying untap steps, and grinding the opponent's options to nothing before winning slowly. It's control that doesn't wait to react. It stops you from playing the game at all.

You'll also hear "ramp," which accelerates into expensive threats faster than fair decks can, and "aristocrats," which sacrifices its own creatures for value and damage. Most of these are just specialized midrange or combo builds wearing a hat. When you're learning, file them under the closest pillar and you'll rarely be wrong.

## The metagame rock-paper-scissors

Here's the model everyone references, and it's roughly true: aggro beats control, control beats combo, combo beats aggro. Around the triangle it goes.

| Archetype | Beats | Loses to |
| --- | --- | --- |
| Aggro | Control, durdly combo | Midrange, lifegain decks |
| Midrange | Aggro, fair decks | Dedicated combo, set-up control |
| Control | Midrange, combo (with answers) | Fast aggro |
| Combo | Slow durdly decks | Aggro, disruption-heavy control |

The nuance is where it gets interesting. Aggro beats control because it kills before the wraths come online, but a control deck with cheap early interaction and lifegain flips that matchup hard. Control beats combo because it has counterspells, unless the combo deck plays its own protection and wins through them. And midrange is the wildcard that doesn't sit cleanly on the triangle. It preys on aggro with removal and lifegain, but folds to combo and gets ground out by dedicated control.

This is why the metagame moves in cycles. A field full of midrange invites control. A field full of control invites aggro. A field full of aggro invites midrange and the lifegain decks that punish it. The format never settles, which is exactly why reading it is a skill. MTGGoldfish's metagame pages exist for precisely this reason, you check what's winning, then bring the deck that beats it.

## Which archetype fits your playstyle

Pick the deck that matches how your brain works, not the deck that won last weekend. A quick self-assessment:

- **You want to make decisions fast and end games faster.** You're aggro. You like applying pressure, you don't want to agonize over lines, and you'd rather lose quickly than durdle for an hour. Aggro rewards aggression and decisiveness.
- **You want the most powerful cards and the most reps deciding when to trade.** You're midrange. You like having an answer for everything and winning the long fair game on raw quality. Midrange is the best skill-building archetype because every game is a sequence of small correct decisions.
- **You want to feel in control and don't mind being hated.** You're control. You enjoy holding up mana, reading the opponent, and winning games that looked unwinnable. Be warned, it's the hardest archetype to pilot well.
- **You like puzzles and the thrill of winning from nowhere.** You're combo. You'd rather solve a deck than play a fair game, and you don't mind the games where you draw the wrong half and lose doing nothing.

Most players have a natural lean. If you've ever been called a control player as an insult, you know who you are. The trick is to lean into it instead of fighting it, you'll play your preferred archetype better than a "stronger" deck you don't enjoy.

## Archetypes in Commander vs 60-card formats

Everything above assumes a 1v1, 20-life game. Commander breaks the math, and the archetypes warp accordingly.

The big change is the starting life total and the player count. In a four-person Commander pod, you're trying to kill three opponents with 40 life each. That's 120 damage. Aggro, which thrives on racing a single 20-life opponent, is dramatically weaker, you simply can't punch through 120 life before the table teams up on you. Pure aggro is the worst archetype in casual Commander.

Combo and value midrange, on the other hand, get stronger. Combo doesn't care about life totals; a deck that wins on the spot wins whether the table has 20 life or 200. And value-grinding midrange thrives in long multiplayer games where card advantage compounds across more turns. Control exists but plays differently, since you can't hold up answers for three opponents at once, single-target counterspells are weaker when three people are casting spells.

Commander also has its own archetype that barely exists in 60-card play: "battlecruiser." Big splashy expensive spells, haymakers, durdly value engines, games that go long and end with something absurd. It's not really aggro, control, or combo. It's everyone building toward their most powerful turn and seeing who gets there first. If you're new to the format, our [Commander format guide](/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start) walks through how the singleton, multiplayer rules reshape everything, and our [budget Commander decks under $100](/blog/magic-the-gathering/best-budget-commander-decks-under-100) list gives you an on-ramp into each archetype without selling a kidney.

For a clean comparison of how the four pillars behave across formats:

| Archetype | Best clock (60-card) | Curve top | Commander viability |
| --- | --- | --- | --- |
| Aggro | Turn 4-6 | 3-4 mana | Weak (too much life to race) |
| Midrange | Turn 6-10 | 5-6 mana | Strong (value compounds) |
| Control | Turn 10+ | 6-7 mana | Tricky (one-for-ones scale badly) |
| Combo | Whenever pieces land | Varies | Very strong (life total irrelevant) |

Want to see an archetype in action with a real winning list? Our breakdown of the [Selesnya Landfall Pro Tour winner](/blog/magic-the-gathering/selesnya-landfall-pro-tour-strixhaven-winning-deck) is a perfect example of an aggressive-midrange deck, cheap creatures that snowball off lands hitting the battlefield, which is exactly the kind of curve-plus-payoff plan we described in the midrange and aggro sections.

## Quick Action Checklist

- **Name your archetype before you build.** Decide what your deck is trying to do and on what turn before you sleeve a single card.
- **Make every card serve the plan.** If a card doesn't advance your gameplan, cut it, no matter how cool the rare is.
- **Match the curve to the archetype.** Aggro tops at three or four. Control back-loads. Build the curve your plan needs.
- **Learn to recognize the four pillars across the table.** Identifying the opponent's deck on turn one tells you how to keep your life total, your removal, and your sequencing.
- **Pick the archetype that matches how you think,** not the one that won last weekend. You'll always play your preferred style better than a borrowed "best deck."
- **Check the metagame before an event.** Use [MTGGoldfish](https://www.mtggoldfish.com/metagame/) to see what's winning, then bring the archetype that preys on it.
- **In Commander, downgrade aggro and upgrade combo and value.** The 40-life, multiplayer math rewards different decks than 1v1 does.`,
  faq: [
    {
      question: 'What is the best MTG archetype for beginners?',
      answer: "Aggro, specifically Mono-Red. It's cheap to build, it has a clear plan (deploy cheap threats and attack), and it teaches you the most important concept in Magic, the clock. You learn to value tempo, sequence your plays, and respect your opponent's life total. Midrange is the better long-term skill-builder, but aggro is the fastest way to start winning and understanding why you won.",
    },
    {
      question: 'Aggro vs control — which is better?',
      answer: "Neither, and that's the point. Aggro generally beats control because it kills before the wraths come online, but a control deck with cheap early interaction and lifegain can flip that matchup. Which one is 'better' depends entirely on the metagame around it. In a field full of slow fair decks, control eats well. In a field full of combo and durdle, aggro punishes everyone. Bring the one the field is weak to.",
    },
    {
      question: 'What is a combo deck in MTG?',
      answer: "A combo deck wins by assembling a specific set of cards that do something broken together, infinite damage, infinite mana, or an instant win on the spot. Instead of beating you in combat, it ignores the board and executes its kill. Classic examples are Splinter Twin in Modern (now banned) and Thassa's Oracle plus Demonic Consultation in Commander. The rest of the deck digs for the combo pieces and protects them.",
    },
    {
      question: 'What is the difference between midrange and tempo?',
      answer: "Midrange wins by grinding out card advantage with individually powerful threats and removal, playing a long fair game and winning on quality. Tempo (aggro-control) plays a few cheap threats and then defends them with cheap interaction like counterspells and bounce, winning by staying slightly ahead rather than out-carding the opponent. Midrange wants the long game; tempo wants to be ahead early and never let go.",
    },
    {
      question: 'Why is aggro weaker in Commander?',
      answer: "Because of the math. A four-player Commander pod has three opponents at 40 life each, which is 120 total damage you need to deal. Aggro is built to race a single 20-life opponent, and it simply can't punch through that much life before the rest of the table stabilizes or teams up on you. Combo and value midrange get stronger in Commander for the opposite reason, they don't depend on a fast clock.",
    },
    {
      question: 'Do MTG archetypes work in Limited and Draft?',
      answer: "Yes, but compressed. Limited formats lean heavily toward midrange and aggro because you rarely have the consistency for a dedicated combo or the card quality for true control. You'll hear 'aggressive deck' and 'controlling deck' in draft, but most Limited decks are some flavor of midrange that trades efficiently and wins with bombs. The same gameplan thinking applies, know what your deck is trying to do and on what turn.",
    },
  ],
  internalLinks: [
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering blog hub' },
    { href: '/blog/magic-the-gathering/standard-post-ban-meta-may-2026', anchor: 'Standard post-ban meta breakdown' },
    { href: '/blog/magic-the-gathering/selesnya-landfall-pro-tour-strixhaven-winning-deck', anchor: 'Selesnya Landfall Pro Tour winning deck' },
    { href: '/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start', anchor: 'Commander format guide' },
    { href: '/blog/magic-the-gathering/best-budget-commander-decks-under-100', anchor: 'Best budget Commander decks under $100' },
    { href: '/glossary/magic-the-gathering', anchor: 'Magic: The Gathering glossary' },
  ],
  externalSources: [
    { url: 'https://magic.wizards.com/en/formats', title: 'Wizards Formats' },
    { url: 'https://www.mtggoldfish.com/metagame/', title: 'MTGGoldfish Metagame' },
    { url: 'https://draftsim.com/', title: 'Draftsim' },
    { url: 'https://scryfall.com/', title: 'Scryfall' },
  ],
  tldr: 'Every MTG deck is a variation on four archetypes: aggro (race the opponent to zero on a low curve), midrange (grind with efficient threats and removal), control (counter, wrath, and out-card the long game), and combo (assemble a few cards to win on the spot). They form a rough rock-paper-scissors: aggro beats control beats combo beats aggro, with midrange preying on fair decks. Pick the one that matches how you think, and remember Commander warps the math: aggro gets weaker, combo and value midrange get stronger.',
  itemList: {
    name: 'The Four Core MTG Archetypes',
    items: [
      { name: 'Aggro', description: 'Low-curve decks that deploy cheap, efficient threats and race the opponent to zero, usually winning by turn five or six.' },
      { name: 'Midrange', description: 'Flexible decks packed with efficient threats and removal that trade down and win the long fair game on raw card quality.' },
      { name: 'Control', description: 'Reactive decks that counter, kill, and sweep everything, then win late with one or two finishers after out-carding the opponent.' },
      { name: 'Combo', description: 'Decks built to assemble a specific two- or three-card interaction that wins the game on the spot, ignoring the board state entirely.' },
    ],
  },
};
