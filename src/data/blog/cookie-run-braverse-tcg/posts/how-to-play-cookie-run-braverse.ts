import type { BlogPost } from '../../blogTypes';

export const howToPlayBraverse: BlogPost = {
  slug: 'how-to-play-cookie-run-braverse',
  game: 'cookie-run-braverse-tcg',
  category: 'beginner-guides',
  topicCluster: 'fundamentals',
  title: "How to Play Cookie Run: Braverse - A Complete Beginner Guide",
  metaDescription:
    "Learn how to play Cookie Run: Braverse from scratch: the card types, game setup, turn phases, the rest-to-pay cost system, the FLIP mechanic, and both win conditions explained for new players.",
  excerpt:
    "Cookie Run: Braverse is the rare TCG you can teach in a single match. This guide covers everything a first-time player needs: card types, setup, turn structure, how you pay for cards, the FLIP mechanic, and how to win.",
  featuredImagePrompt:
    "Two players facing off across a wooden table with colorful Cookie Run: Braverse cards laid out in neat play areas, face-down HP cards stacked beneath standing Cookie cards, a GingerBrave card front and center mid-attack, warm tournament-hall lighting.",
  heroImage: '/images/cookies/gingerbrave.png',
  heroImageAlt: 'GingerBrave, the cheap opening Cookie used in the sample first turn of a Cookie Run: Braverse game.',
  imageSources: [
    { src: '/images/cookies/gingerbrave.png', sourceUrl: 'owned-asset' },
    { src: '/images/cookies/strawberry-crepe-cookie.png', sourceUrl: 'owned-asset' },
  ],
  publishDate: '2026-05-28T00:00:00.000Z',
  lastUpdated: '2026-05-28T00:00:00.000Z',
  primaryKeyword: 'how to play cookie run braverse',
  secondaryKeywords: [
    'cookie run braverse rules',
    'cookie run braverse beginner guide',
    'cookie run braverse turn structure',
    'cookie run braverse flip mechanic',
    'cookie run braverse win conditions',
    'cookie run braverse how to set up',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'evergreen',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'what-cookie-run-braverse-is', label: 'What Cookie Run: Braverse is', level: 2 },
    { id: 'what-you-need-to-start', label: 'What you need to start', level: 2 },
    { id: 'the-four-card-types', label: 'The four card types', level: 2 },
    { id: 'the-play-areas-explained', label: 'The play areas explained', level: 2 },
    { id: 'how-to-set-up-a-game', label: 'How to set up a game', level: 2 },
    { id: 'how-a-turn-works', label: 'How a turn works', level: 2 },
    { id: 'paying-costs-the-support-area', label: 'Paying costs: the Support Area', level: 2 },
    { id: 'hp-damage-and-the-flip-mechanic', label: 'HP, damage, and the FLIP mechanic', level: 2 },
    { id: 'how-to-win-a-game', label: 'How to win a game', level: 2 },
    { id: 'a-sample-first-turn', label: 'A sample first turn', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Most trading card games make you read a 40-page rulebook before your first real game. Cookie Run: Braverse is the rare one you can teach across a single match, and the 60-card deck inside a Starter box is genuinely playable straight out of the wrapper. No proxy hunting, no "okay but you need three more boosters before this is fun." You open it, you shuffle, you fight.

This guide walks a brand-new player through everything you need to sit down and play a full game today: the card types, how the table is set up, how a turn flows, how you pay for your cards, the signature FLIP mechanic, and the two ways to win. By the time you hit the checklist at the bottom, you'll be ready to teach somebody else.

## What Cookie Run: Braverse is

Cookie Run: Braverse is a two-player paper trading card game from Devsisters, built on the Cookie Run video-game IP. It launched in South Korea in September 2023 and reached North America on July 11, 2025, so the English-language card pool and community are still young and easy to catch up on.

The fantasy is simple: you field a team of Cookies who throw down in the Battle Area. You play fighters, swing for damage, spring traps, and stack effects until your opponent runs out of Cookies to deploy or piles up too many fallen ones. The whole thing leans on a clean five-color identity system and one standout twist (FLIP) that gives every match a few "did NOT see that coming" moments.

If you want to dig deeper after this, the [Braverse hub](/blog/cookie-run-braverse-tcg) collects our full coverage, and the official sources at the bottom have the canonical rulebook.

## What you need to start

The good news for your wallet: you don't need to build anything to start. A single Starter Deck gives you a legal, ready-to-play 60-card deck.

Here's what you're working with the moment you sit down:

- **A 60-card deck** (exactly 60, no more, no less).
- **A second player** with their own deck.
- **A flat surface** with room for both players' play areas.
- Optional but nice: dice or counters as a backup HP tracker, and sleeves if you care about your cards.

If you want to move past the pre-built deck later, the construction rules are worth memorizing now:

- Your deck must contain **exactly 60 cards**.
- It must include **at least one Cookie card** (in practice, a lot more than one).
- You can run **up to 4 copies** of any single card number.
- You can include **up to 16 FLIP cards** in that 60 (a cap that can move via errata, so check the current rulebook before a sanctioned event).
- **Multicolor decks are allowed**, so you're not locked into one color.

That's the entire deck-building law. We turn it into actual list decisions in our [deck-building basics](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics) guide, and if you're shopping for a first product, our [best starter deck ranked](/blog/cookie-run-braverse-tcg/best-cookie-run-braverse-starter-deck) post tells you which box to grab.

> **Beginner tip:** Don't touch deck-building until you've played 3 to 5 games with a Starter Deck as-is. The pre-built lists are tuned to teach the game, and you'll make far smarter swaps once you understand why each card is there.

## The four card types

Almost every card in Braverse is one of four types. Learn these four and you've learned most of the game.

| Card type | What it does | Where it lives |
| --- | --- | --- |
| **Cookie** | Your fighters. Each has a **Level** (1, 2, or 3), **HP**, and attacks/skills with costs. These are the cards that battle. | Battle Area |
| **Item** | Boosts, healing, and utility effects you activate by resting Support cards. | Resolved, then to Trash (unless the card says otherwise) |
| **Trap** | Reactive cards you set ahead of time that trigger when your opponent attacks. | Set in the Support Area, revealed when triggered |
| **Stage** | Field effects that change the rules of the board while in play. | Stage zone (one active Stage at a time) |

On top of those four, **FLIP cards** are a special subtype: cards that live inside a Cookie's HP stack and fire a surprise effect when damage flips them face-up. More on that below, because FLIP is the mechanic that makes Braverse feel different from Pokemon or Lorcana.

Cookies are the heart of the game. They go to the **Battle Area**, take and deal damage, and they're the things your opponent has to remove to set up a win. Items, Traps, and Stages are the spice: they protect your Cookies, punish your opponent's plays, and tilt the board.

![Strawberry Crepe Cookie, a Red starter staple and example of an aggressive Battle Area fighter in Cookie Run: Braverse.](/images/cookies/strawberry-crepe-cookie.png)

Color matters too. Braverse uses five colors, each with a clear identity:

- **Red** - aggressive battle pressure and fast damage.
- **Yellow** - Break Area control, tempo, and grindy late-game.
- **Green** - resource growth and ramp.
- **Blue** - card cycling and big combo turns.
- **Purple** - disruption and recursion.

We go deep on what each color wants to do in [the 5 colors explained](/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained). For now, just know your colors shape your whole game plan.

## The play areas explained

Before your first turn, you need to know what goes where. Braverse splits your side of the table into named zones:

- **Battle Area** - where your active Cookies stand and fight. The main stage.
- **Support Area** - where you place cards that get rested (tapped) to pay costs and activate Items and Traps. This is your resource engine.
- **Break Area** - the running pile of defeated Cookies, and the zone that drives the main win condition. Think of it as the scoreboard.
- **Trash** - the discard pile for spent Items, Traps, and other used cards.
- **Deck Area** - your face-down 60-card deck. It also feeds the HP stacks under your Cookies.
- **Hand** - the cards only you can see, played during your turn.

The two zones beginners trip on are the **Support Area** and the **Break Area**. Support is your engine; Break is your scoreboard. Keep one eye on each all game.

## How to set up a game

Setup is quick once you've done it once:

1. **Decide who goes first.** A quick game of rock-paper-scissors usually settles it.
2. **Shuffle and draw an opening hand of 6 cards.**
3. **Place your first Cookie face-down** in your Battle Area. Both players do this at the same time, then **reveal simultaneously**.
4. **Build that Cookie's HP.** Take cards off the top of your deck and place them face-down underneath your Cookie, equal to its **HP value**. That stack of cards *is* its health.

Braverse is a young game and the English-language rules are still settling, so where an exact setup step or starting-Cookie ruling matters, confirm it against the official rulebook before a sanctioned event.

One rule to internalize early: **the player who goes first cannot draw or attack on turn 1.** That's the balancing tax for the first-turn advantage, and forgetting it is the single most common new-player rules slip.

## How a turn works

A Braverse turn moves through clear phases in order. You finish one before moving to the next:

| Phase | What happens |
| --- | --- |
| **Refresh** | Stand up (un-rest) your rested Support cards so they're ready to pay costs again. |
| **Draw** | Draw a card from your deck. (The first player skips this on turn 1.) |
| **Main** | The meat of the turn: play Cookies, add one card to your Support Area, drop a Stage, set Traps, use Items, and attack. |
| **End** | Resolve any end-of-turn effects and pass to your opponent. |

Some community guides label these phases slightly differently, so if a precise phase name or ordering matters for a ruling, check it against the official rulebook.

The Main phase is where the decisions live. A typical flow: refresh your Support, draw, add a Support card to grow your resources, play a Cookie or two into the Battle Area, maybe set a Trap or drop a Stage, then declare attacks. You don't have to do all of that every turn. Sometimes the right play is to develop your board and Support, then swing big next turn.

## Paying costs: the Support Area

Here's the part that surprises players coming from other TCGs: **Braverse has no mana cards and no energy pool.** You pay for things by resting cards you've already committed to your **Support Area**.

The loop works like this:

- During your **Main phase**, you may add **one card to your Support Area** per turn. That's how your resource base grows: one card at a time.
- To pay a cost (playing a Cookie, using an attack or skill, activating an Item or Trap), you **rest** that many cards in your Support Area.
- At the start of your next turn, your rested Support cards **stand back up** in the Refresh phase, ready to pay again.

Because you only add one Support card per turn, your economy ramps slowly and steadily. That makes **early tempo** matter: a Cookie that costs less gets onto the board sooner, and being a turn ahead on development is a real edge. It also means you should think before you spend: hold a little back if you're running Traps or reactive Items, because a Trap you can't pay for is just a card sitting there.

One detail community guides describe inconsistently is whether costs require color-matched Support or any rested Support card, so confirm the exact color rules against the official rulebook before you rely on them in a tournament.

> **Beginner tip:** Don't reflexively dump your whole Support every turn. Leaving one or two cards active lets you answer your opponent's turn with a Trap or instant-speed Item.

## HP, damage, and the FLIP mechanic

This is the section that makes Braverse click.

Every Cookie's **HP is a literal stack of face-down cards** sitting underneath it, set up from the top of your deck. When a Cookie takes damage, you remove cards from that stack. When the stack hits zero, the Cookie **faints** and goes to its owner's **Break Area**.

Now the twist. Some of the cards in that HP stack are **FLIP cards**. When damage flips a FLIP card face-up, its effect triggers immediately, mid-combat. That might heal, deal damage back, disrupt the attacker, or swing a fight you looked like you were losing. The precise FLIP trigger timing is the most-cited rules ambiguity in Braverse, so confirm exactly how it resolves against the official rulebook before a sanctioned event.

Two practical things to remember:

- You can run **up to 16 FLIP cards** in your 60, and they get shuffled into your deck, so which Cookies end up "protected" by a FLIP is partly luck and partly deck-building.
- Because FLIP triggers off **damage**, the threat lives inside the health bar. An opponent swinging into your Cookie might be walking straight into a FLIP.

This is why experienced players hesitate before attacking a healthy Cookie they can't read. The FLIP could be nothing, or it could blow up their attacker. That tension is the heart of Braverse combat, and it's why even a "simple" game stays spicy.

## How to win a game

There are **two ways to win** in Braverse, and a smart player keeps both in mind:

1. **Fill the opponent's Break Area to a Level total of 10+.** Every Cookie you defeat goes to its owner's Break Area, and each Cookie has a **Level** (1, 2, or 3). When the combined Level of the Cookies in your opponent's Break Area reaches **10 or more**, you win. This is the path that decides most games.
2. **Leave the opponent unable to field a Cookie.** If a player's Battle Area is empty, they must immediately reveal a new Cookie from hand, even on the opponent's turn. If they have no Cookie in hand to deploy, **they lose.**

Win condition #1 means you should think in terms of **Level**: high-Level Cookies are worth more toward your opponent's loss when they fall, but they're also tougher to remove. Trading a small Cookie to take down a big one is often great math. Win condition #2 is why running too few Cookies (or losing them all at once) can suddenly end a game you thought was close. The exact win-condition wording and the Break Area Level threshold are worth confirming against the official rulebook before a sanctioned event.

## A sample first turn

![GingerBrave, the iconic low-cost Cookie deployed into the Battle Area on a sample first turn in Cookie Run: Braverse.](/images/cookies/gingerbrave.png)

Let's walk a clean opening so the phases click. Say you won rock-paper-scissors and chose to go first with a Red Starter Deck.

1. **Setup:** You drew 6, placed a Cookie face-down, revealed it, and stacked HP cards underneath it from the top of your deck.
2. **Refresh:** Nothing to stand yet, it's turn one. Skip.
3. **Draw:** You're the first player, so you **skip your draw** this turn.
4. **Main:**
   - You add a card to your **Support Area** to start building resources.
   - You rest Support to pay for and play **GingerBrave** (or whatever your cheap opener is) into the Battle Area.
   - You're the first player, so you **can't attack** this turn anyway. You develop and hold.
5. **End:** Pass the turn.

Turn two, your Support card stands back up in Refresh, you draw (no more first-turn restriction), you add another Support card, you deploy a second Cookie, and now you've got a board worth attacking with. That's the whole engine: develop, ramp Support, then start pressuring your opponent's Break Area total toward 10.

Notice how little you have to memorize to do all that. The game front-loads the fun and lets the depth (FLIP timing, color synergy, Level math, win-con flexibility) reveal itself over your first handful of games.

When you're ready to start tweaking cards, our [rarities guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-rarities-collecting-guide) covers what's worth chasing, and [deck-building basics](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics) turns these rules into actual list decisions.

## Quick Action Checklist

- Grab a **Starter Deck** (60 cards, ready to play) and a friend with their own deck.
- Set up your zones: **Battle Area, Support Area, Break Area, Trash, Deck Area, hand**.
- To set up: RPS for first player, draw **6**, place a Cookie face-down, reveal, and stack HP cards under it from your deck.
- Remember: **the first player skips their turn-1 draw and attack.**
- Each turn: **Refresh -> Draw -> Main -> End.**
- In Main: add **one** Support card, **rest Support to pay costs**, play Cookies, set Traps, use Items, drop a Stage, then attack.
- Track your opponent's **Break Area Level total**; reach **10** and you win.
- The other win: your opponent has **no Cookie in hand** to replace a fainted one.
- Respect **FLIP**: damaging a Cookie can flip a hidden card and trigger an effect, so read before you swing.
- Play 3 to 5 games with the deck as-is before you change a single card.`,
  faq: [
    {
      question: "How long does a game of Cookie Run: Braverse take?",
      answer:
        "A typical game runs roughly 20 to 40 minutes once both players know the rules. First games while you're still learning the phases take longer, but the pace picks up fast.",
    },
    {
      question: "How many players can play Cookie Run: Braverse?",
      answer:
        "It's a two-player head-to-head game. You and one opponent each bring a 60-card deck and play across the table from each other.",
    },
    {
      question: "Is Cookie Run: Braverse like Pokemon or Lorcana?",
      answer:
        "It shares DNA with both, since it's a two-player TCG where you build a board of fighters and remove your opponent's. What sets it apart is the FLIP mechanic, where cards hidden in a Cookie's HP stack trigger surprise effects when damage flips them, and the fact that your HP is a stack of cards rather than a number you track.",
    },
    {
      question: "Do I need to build a deck before I can start playing?",
      answer:
        "No. A Starter Deck gives you a legal, ready-to-play 60-card deck right out of the box. You can play full games immediately and learn deck-building later once you understand why each card is there.",
    },
    {
      question: "How many cards are in a Cookie Run: Braverse deck?",
      answer:
        "Exactly 60 cards. You need at least one Cookie card, you can run up to 4 copies of any single card number, and up to 16 FLIP cards. Multicolor decks are allowed.",
    },
    {
      question: "How do you pay for cards if there's no mana?",
      answer:
        "You pay costs by resting (tapping) cards in your Support Area. You may add one card to your Support Area each turn, and your rested Support cards stand back up at the start of your next turn. There's no separate mana or energy card.",
    },
    {
      question: "What are the win conditions in Cookie Run: Braverse?",
      answer:
        "There are two. One, the combined Level of your opponent's Cookies in their Break Area reaches 10 or more. Two, your opponent's Battle Area is empty and they have no Cookie in hand to deploy, so they cannot continue.",
    },
  ],
  internalLinks: [
    { href: '/blog/cookie-run-braverse-tcg', anchor: 'Braverse hub' },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained',
      anchor: 'the 5 colors explained',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-cookie-run-braverse-starter-deck',
      anchor: 'best starter deck ranked',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics',
      anchor: 'deck-building basics',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-rarities-collecting-guide',
      anchor: 'rarities guide',
    },
  ],
  externalSources: [
    { url: 'https://cookierunbraverse.com/en/', title: 'Official Cookie Run: Braverse site' },
    { url: 'https://play.cookieruntcg.com/', title: 'Official Play Hub & Card Database' },
    {
      url: 'https://cookierun.fandom.com/wiki/Cookie_Run_Braverse',
      title: 'Cookie Run Braverse Wiki',
    },
  ],
  tldr:
    "Cookie Run: Braverse is a two-player TCG you can learn in one match. Each player runs a 60-card deck, places Cookie fighters in the Battle Area with their HP represented as a stack of cards underneath, and pays for cards by resting cards in the Support Area (there's no mana). There are four card types plus FLIP cards, five colors, and two ways to win - the main one being to fill the opponent's Break Area to a combined Cookie Level of 10. The signature FLIP mechanic triggers surprise effects when damage flips a hidden card in a Cookie's HP stack. Starter Decks are legal and playable straight out of the box.",
  itemList: {
    name: "Cookie Run: Braverse Rules at a Glance",
    items: [
      {
        name: 'Players & deck size',
        description: 'Two players, each with a deck of exactly 60 cards (at least one Cookie, up to 4 copies of a card number, up to 16 FLIP cards).',
      },
      {
        name: 'Card types',
        description: 'Four types - Cookie fighters, Items, Traps, and Stages - plus FLIP cards as a special subtype, across five colors.',
      },
      {
        name: 'Setup',
        description: 'RPS for first player, draw 6, place a Cookie face-down, reveal, and stack HP cards under it from your deck. First player skips their turn-1 draw and attack.',
      },
      {
        name: 'Paying costs',
        description: 'No mana. Add one card to your Support Area per turn and rest cards there to pay costs; they refresh on your next turn.',
      },
      {
        name: 'FLIP',
        description: "Cards hidden in a Cookie's HP stack that trigger a surprise effect when damage flips them face-up.",
      },
      {
        name: 'Win conditions',
        description: "Two paths: the opponent's Break Area Level total hits 10+, or the opponent has no Cookie in hand to replace a fainted one.",
      },
    ],
  },
};
