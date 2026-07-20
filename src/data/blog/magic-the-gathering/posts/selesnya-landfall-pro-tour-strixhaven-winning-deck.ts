import type { BlogPost } from '../../blogTypes';

export const selesnyaLandfallProTourStrixhavenWinningDeck: BlogPost = {
  slug: 'selesnya-landfall-pro-tour-strixhaven-winning-deck',
  game: 'magic-the-gathering',
  category: 'deck-guides',
  topicCluster: 'pro-tour-decks',
  title: 'How Nathan Steuer Won Pro Tour Strixhaven With Selesnya Landfall',
  metaDescription:
    "Nathan Steuer won Pro Tour Strixhaven on Selesnya Landfall in an Izzet meta. Decklist breakdown, sideboard plan, and how to tune it post-bans for paper Standard.",
  excerpt:
    "Nathan Steuer brought Selesnya Landfall to a Pro Tour where 49% of the field was Izzet. Then he won the mirror in the finals. Here is how the deck actually works and how to build it now that the bans hit.",
  tldr: 'Nathan Steuer won Pro Tour Strixhaven with Selesnya Landfall — beating a field that was roughly 49% Izzet and taking the mirror final against Christoffer Larsen. The deck chains fetchland landfall triggers into free-scaling creatures that outpace spell-based tempo, and after the May 18 Cori-Steel Cutter ban it\'s the benchmark deck in Standard. Full list runs $400+, budget builds $80-150.',
  featuredImagePrompt:
    'A triumphant Selesnya-aligned planeswalker standing on a battlefield of cracked fetchlands, surrounded by towering green creatures and white spirit tokens, golden Pro Tour trophy in the foreground, Strixhaven campus silhouette in the distance, dark fantasy painterly style, gold and forest-green lighting',
  heroImage: '/images/blog/magic-the-gathering/selesnya-landfall-pro-tour-strixhaven-winning-deck/scute-swarm.jpg',
  heroImageAlt: "Scute Swarm, the green landfall insect that copies itself every time a land enters, the engine of Selesnya Landfall.",
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/selesnya-landfall-pro-tour-strixhaven-winning-deck/scute-swarm.jpg',
      sourceUrl: 'https://scryfall.com/card/dsc/197/scute-swarm',
      license: 'WotC Fan Content Policy / Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/selesnya-landfall-pro-tour-strixhaven-winning-deck/felidar-retreat.jpg',
      sourceUrl: 'https://scryfall.com/card/fdn/574/felidar-retreat',
      license: 'WotC Fan Content Policy / Scryfall',
    },
  ],
  publishDate: '2026-05-24T00:00:00.000Z',
  lastUpdated: '2026-05-24T00:00:00.000Z',
  primaryKeyword: 'pro tour secrets of strixhaven winning deck',
  secondaryKeywords: [
    'nathan steuer selesnya landfall',
    'selesnya landfall standard deck',
    'pro tour strixhaven decklist',
    'selesnya landfall guide',
    'best standard landfall deck',
    'post ban standard deck',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 9,
  toc: [
    { id: 'the-decklist-at-a-glance', label: 'The decklist at a glance', level: 2 },
    { id: 'why-landfall-in-an-izzet-dominated-meta', label: 'Why Landfall in an Izzet-dominated meta', level: 2 },
    { id: 'the-core-engine', label: 'The core engine', level: 2 },
    { id: 'key-cards-and-matchups', label: 'Key cards and matchups', level: 2 },
    { id: 'sideboarding-plan', label: 'Sideboarding plan', level: 2 },
    { id: 'how-to-tune-for-paper-standard-now', label: 'How to tune for paper Standard now', level: 2 },
    { id: 'budget-alternatives', label: 'Budget alternatives', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Nathan Steuer won Pro Tour Strixhaven by playing the deck no one else expected anyone to play.

Going into the event, 30.5% of the field registered Izzet Prowess. Stack the Izzet variants on top and roughly 49% of the Pro Tour was some flavor of red-blue spell deck pointed at the same Cori-Steel Cutter shell. The metagame consensus going in was simple. Play Izzet, or play something that beats Izzet, or lose. Steuer chose option three and brought Selesnya Landfall, a deck that occupied about 9.94% of the broader Standard meta and almost none of the testing house spreadsheets.

He went through the bracket, beat enough Izzet decks to make a point, and met Christoffer Larsen in a mirror match for the trophy. Two Selesnya Landfall pilots in the finals of the most Izzet-saturated Pro Tour of the year. That is the kind of result that retroactively rewrites the meta, and it did. Then the May 18 bans hit, Cori-Steel Cutter went to the shadow realm, and Selesnya Landfall walked out of the wreckage as the new format benchmark.

If you want to pick up the deck for paper Standard right now, this is the breakdown.

## The decklist at a glance

The list Steuer registered is a fairly classic Selesnya midrange landfall shell. Heavy on fetches, heavy on ramp creatures that double as landfall triggers, and built to chain land drops from turn one through turn six without ever running out of fuel.

Rather than pretend to know the exact 75 by count, here is the composition by role. This matches what mtgdecks.net and magic.gg coverage have published, with specific counts cropped because the post-ban list will shift them anyway.

| Role                              | Approx. Count | Notes                                                                     |
| --------------------------------- | ------------- | ------------------------------------------------------------------------- |
| Fetchlands (Bloomburrow surveil)  | ~8            | The engine. Every fetch crack is a landfall trigger.                      |
| Basic Plains / Forests            | ~10           | Fetch targets. Heavy on Forests for early ramp curves.                    |
| Utility / dual lands              | ~6-8          | Selesnya duals plus a handful of utility lands; exact mix varies by build. |
| Ramp / landfall enablers          | ~8            | One-drop and two-drop creatures that ramp and trigger landfall.           |
| Landfall payoffs (creatures)      | ~10           | Mid-cost threats that grow with every land drop.                          |
| Removal (instants / sorceries)    | ~6            | Selesnya-colored removal. Get Lost-style answers.                         |
| Flex / win condition              | ~4            | Go-wide finishers and game-closing landfall triggers.                     |
| Sideboard                         | 15            | Control hate, graveyard hate, mirror tools.                               |

The reason this looks like 25-26 lands and still functions like a 20-land aggro deck is the ramp suite. You are routinely playing turn one ramp, turn two extra land drop, turn three double land drop, and landfall triggers stack the entire way up the curve.

> Steuer's list does not try to out-grind control. It tries to out-pace Izzet by landing more permanent stuff per turn than they can answer with one-shot spells.

## Why Landfall in an Izzet-dominated meta

Pre-ban Standard had a problem. Cori-Steel Cutter plus Flow State plus a 50-card Izzet engine produced more cards per turn than most fair decks could keep up with. The metagame's instinct was to either join the Izzet team or play a control deck that could counter every relevant spell.

Selesnya Landfall ignored both options. Here is the math Steuer was working with.

1. Izzet Prowess has to spend mana to do anything. Even with Flow State drawing extra cards, every threat costs a tempo unit and most of the deck's removal is point-and-shoot at small creatures.
2. Landfall creatures get bigger every turn for zero mana. A 3/3 that becomes a 6/6 by turn five for free trades brutally against a Prowess creature that needs spell support to stay relevant.
3. Selesnya removal hits the threats Izzet cares about. Get Lost-style permanent answers strip the 1/1 Prowess creatures that Cori-Steel Cutter was buffing into lethal range.
4. The deck has a clock. By turn five, the landfall payoffs are big enough that one or two unanswered creatures end the game.

The matchup was not 50/50. It was tilted toward Selesnya because Izzet Prowess decks were built to race other tempo decks, not to keep up with permanent-based value engines. Steuer essentially showed up with the rock to Izzet's scissors and a sideboard that punished the paper decks too.

You can read [Magic.gg's full Pro Tour Strixhaven coverage](https://magic.gg/) for the round-by-round, but the short version is that the Izzet players who built their decks for the mirror got blown out by every Selesnya pilot who passed the lobby on the way in.

## The core engine

![Scute Swarm, a green Zendikar Rising insect that creates a copy of itself every time a land enters under your control.](/images/blog/magic-the-gathering/selesnya-landfall-pro-tour-strixhaven-winning-deck/scute-swarm.jpg)

The reason this deck works is that every land drop does two things. It is mana for next turn, and it is a free trigger this turn. Once you understand that, every other card in the list makes sense.

The fetchland suite is the spine. Cracking a Bloomburrow surveil land is two landfall triggers in one turn for two mana of input. Stack that on top of a one-drop ramp creature and you are getting three to four landfall triggers between turns two and three.

The payoffs come in two flavors:

- **Scaling creatures.** Threats that get +1/+1 counters, or just permanently grow, every time a land enters under your control. These are your mid-game finishers.
- **Trigger creatures.** Threats that produce a Plant token, deal damage, or scry every time you play a land. These are your card advantage engine and your incidental clock.

The deck is built so that even your bad hands have a plan. A hand with no early threats but five lands and two fetches still wins the long game because every fetch crack chains into another trigger and another land drop.

> If you are playing a turn where you are not cracking a fetch, you are probably losing that turn. Sequence fetches into your most impactful trigger windows.

The third pillar is the removal package. Selesnya is the strongest color combo right now for permanent-based removal. Get Lost-style cards exile threats without giving the opponent a flashback or a recursion target, which matters a lot against the graveyard-leaning decks like Witherbloom and the post-ban Dimir builds.

## Key cards and matchups

![Felidar Retreat, a white enchantment that makes a Cat Beast token or anthems your board every time a land enters.](/images/blog/magic-the-gathering/selesnya-landfall-pro-tour-strixhaven-winning-deck/felidar-retreat.jpg)

The cards that did the heavy lifting at the Pro Tour were the ones that solved specific Izzet problems. Here is how the matchup matrix looked across the top eight, paraphrased from [MTGGoldfish's metagame breakdown](https://www.mtggoldfish.com/).

| Matchup            | Pre-Board   | Post-Board  | Key swing card                       |
| ------------------ | ----------- | ----------- | ------------------------------------ |
| Izzet Prowess      | Favored     | Strong      | Permanent-based removal              |
| Izzet Control      | Even        | Favored     | Uncounterable threats from sideboard |
| Selesnya mirror    | 50/50       | 50/50       | Card advantage engine, lands matter  |
| Mono-Black Demons  | Slight dog  | Even        | Lifegain and go-wide finishers       |
| 4/5C Control       | Slight dog  | Favored     | Sideboard hate, mana denial          |

The numbers above are vibes-tier reads from the Pro Tour weekend, not statistical models. The point is that Selesnya Landfall was either favored or close to even in every realistic top-eight matchup. That is the dream scenario for any non-mirror tournament deck.

The cards that mattered most in those matchups:

- Permanent-based removal that does not give value back to the opponent.
- Sideboard creatures that cannot be countered, for the control matchup.
- A go-wide closer that ends the game from 20 life. The Plant token plan is the trapdoor that turns a 15-life-each board state into a four-turn clock.

## Sideboarding plan

Sideboard strategy for this deck is mostly about deciding which removal slots stay and which come out for the matchup-specific hate cards.

General principles for the sideboard transition:

1. **Against Izzet Prowess pre-bans:** Bring in extra spot removal, trim the late-game ramp pieces. You want the curve flatter and faster.
2. **Against any control deck:** Bring in uncounterable threats and trim the cheap removal you do not need against a deck with no creatures.
3. **Against graveyard decks:** Bring in the graveyard hate (a Rest in Peace effect or whatever the current Standard equivalent is) and trim the slot of removal that does not interact with their best plan.
4. **Against the mirror:** Mostly trim removal, bring in extra card advantage and any sideboard threats that fight on a different axis than landfall.

The deck does not transform after sideboard. It stays Selesnya Landfall. You are tuning the dials, not rebuilding the engine.

## How to tune for paper Standard now

The May 18 bans changed which version of this deck you should be building. Cori-Steel Cutter is gone, which means Izzet Prowess no longer exists as a deck to beat. The metagame shifted toward Mono-Green Landfall (which jumped from about 5% to 12% of the field), 4/5C Control, and Jeskai Control.

Here is what to swap relative to the Pro Tour list:

- **Trim aggressive Izzet hate.** Cards that were specifically pointed at Prowess shells are dead slots now. Cut them for more flexible removal.
- **Add a control plan.** With 4/5C and Jeskai both in tier 1.5, you need more sideboard threats that survive counters and removal. Uncounterable creatures, planeswalkers if you can fit them.
- **Increase the mirror tax.** Mono-Green Landfall is going to be everywhere. Cards that punish lands-matter decks (land destruction, mass-bounce, or whatever the current legal options are) earn a sideboard slot.
- **Watch for Witherbloom.** Secrets of Strixhaven gave Witherbloom the Dina's Guidance plus Elder Dragon midrange shell that wants to grind through your creature-heavy deck. Graveyard hate is non-negotiable.

If you want a deeper look at the broader format math after the bans, check the companion piece on the [standard post-ban meta for May 2026](/blog/magic-the-gathering/standard-post-ban-meta-may-2026). It walks through the tier list as of this week.

## Budget alternatives

If you cannot afford the full fetchland suite, here is how to build a budget version that still functions. You lose probably 10-15% of the deck's power, but you keep the core engine intact.

- **Cut fetches for tapped duals and basics.** You lose triggers, but you keep the mana base honest.
- **Replace expensive mythic finishers with rare payoffs.** Most landfall payoffs at rare or uncommon do 70% of the job for 10% of the price.
- **Skip the planeswalker package.** Walkers are the most expensive part of the deck and the most replaceable. A budget version can run extra creature threats in those slots.
- **Build the sideboard last.** Sideboards are where budget players hemorrhage value. Start with three flexible hate cards and add specific tech as you climb.

Total budget build runs roughly $80-150 in paper (prices vary — check a current retailer) versus $400+ for the full list. The budget version still beats the casual meta on Arena and the Friday Night Magic crowd, which is what most readers actually need.

If you want a primer on what to play against this kind of deck, the [best green cards in Magic: The Gathering](/blog/magic-the-gathering/best-green-cards-magic-the-gathering) breakdown covers the green staples that show up in every landfall list. The [best white cards in Magic: The Gathering](/blog/magic-the-gathering/best-white-cards-magic-the-gathering) piece does the same for the white side.

## Quick Action Checklist

- Decide which version you are building: full Pro Tour list, post-ban tuned list, or budget.
- Lock in your fetchland suite first. The deck does not function below six fetches.
- Pick your removal package based on this week's meta, not last week's.
- Build a sideboard with at least one hate card per tier 1 archetype.
- Practice the mirror. Most of your win rate at FNM will come from beating other Selesnya pilots.
- Read the [Secrets of Strixhaven tier list](/blog/magic-the-gathering/secrets-of-strixhaven-best-standard-cards) before finalizing your 75. Some SSH cards slot directly into this deck.
`,
  faq: [
    {
      question: "Is Selesnya Landfall still the best deck in Standard after the May 18 bans?",
      answer: "Selesnya Landfall is the new benchmark deck in post-ban Standard. It survived the bans untouched, and the Cori-Steel Cutter ban removed its only consistently bad matchup. Mono-Green Landfall surged to roughly 12% of the meta as a leaner alternative, and 4/5C and Jeskai Control are tier 1.5 contenders, but Selesnya is the deck you have to beat right now.",
    },
    {
      question: "Did Nathan Steuer actually win Pro Tour Strixhaven on this deck?",
      answer: "Yes. Steuer registered Selesnya Landfall in a Pro Tour where Izzet Prowess was 30.5% of the field and combined Izzet variants made up roughly 49%. He went through the bracket and won the mirror final against Christoffer Larsen, who was also on Selesnya Landfall.",
    },
    {
      question: "How much does this deck cost to build in paper?",
      answer: "The full Pro Tour-style list runs in the $400-plus range, with the fetchland suite making up most of the cost (prices vary — check a current retailer). A budget version using tapped duals and rare-tier payoffs instead of mythics comes in around $80-150 and still plays the same game plan, just slower and with fewer trigger windows.",
    },
    {
      question: "What is the worst matchup for Selesnya Landfall right now?",
      answer: "Post-bans, the toughest matchups are the mirror against Mono-Green Landfall, which gets to ignore the white splash and run a cleaner mana base, and Witherbloom midrange, which uses Dina's Guidance and grindy creature value to outlast you. Both are winnable but require sideboard tuning.",
    },
    {
      question: "Can I play this deck on MTG Arena instead of paper?",
      answer: "Yes. The deck exists in MTG Arena Standard and the fetchland engine works the same. Crafting it costs a meaningful pile of wildcards, especially for the rare mana base, but it is one of the most rewarded ladder decks in the current Standard environment.",
    },
    {
      question: "Do I need the exact 75 from the Pro Tour winning list?",
      answer: "No. Copying the exact list works, but the post-ban metagame is different enough that a tuned list does better. The most important pieces are the fetchland suite, the ramp curve, and the scaling landfall payoffs. Swap freely between flex slots, removal options, and sideboard tech based on your local meta.",
    },
    {
      question: "Is Selesnya Landfall a good deck for new players?",
      answer: "It is a great deck for players who want to learn sequencing and resource management. The decisions are complex (when to crack which fetch, when to hold a land for a trigger window, when to play around removal) but the deck does not have a high mechanical skill floor. A beginner can pilot it competently in a week of reps.",
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog home' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering hub' },
    { href: '/blog/magic-the-gathering/standard-post-ban-meta-may-2026', anchor: 'Standard post-ban meta for May 2026' },
    { href: '/blog/magic-the-gathering/secrets-of-strixhaven-best-standard-cards', anchor: 'Secrets of Strixhaven tier list' },
    { href: '/blog/magic-the-gathering/best-green-cards-magic-the-gathering', anchor: 'best green cards in Magic: The Gathering' },
    { href: '/blog/magic-the-gathering/best-white-cards-magic-the-gathering', anchor: 'best white cards in Magic: The Gathering' },
  ],
  externalSources: [
    { url: 'https://magic.gg/', title: 'Magic.gg Pro Tour Strixhaven coverage' },
    { url: 'https://www.mtggoldfish.com/', title: 'MTGGoldfish Standard metagame data' },
    { url: 'https://www.mtgdecks.net/', title: 'MTGDecks.net Pro Tour deck archive' },
    { url: 'https://magic.wizards.com/en/news', title: 'Wizards of the Coast news and ban announcements' },
  ],
};
