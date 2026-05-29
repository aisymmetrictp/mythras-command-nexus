import type { BlogPost } from '../../blogTypes';

export const braverseCardTypesExplained: BlogPost = {
  slug: 'cookie-run-braverse-card-types-explained',
  game: 'cookie-run-braverse-tcg',
  category: 'beginner-guides',
  topicCluster: 'fundamentals',
  tags: ['Card Types', 'FLIP', 'Cookie', 'Item', 'Trap', 'Stage'],
  title: "Cookie Run: Braverse Card Types Explained: Cookie, Item, Trap, Stage & FLIP",
  metaDescription:
    "A deep dive into every Cookie Run: Braverse card type - Cookie, Item, Trap, Stage, and the FLIP mechanic - what each does, how they interact, and how they fit in a deck.",
  excerpt:
    "The how-to-play guide gives you the speed-run. This is the deep dive: what every Braverse card type actually does, how FLIP changes the math, and how to think about each in your deck.",
  featuredImagePrompt:
    "Four Cookie Run: Braverse cards laid out to show each card type - a standing Cookie, an Item, a Trap, and a Stage - with a face-down HP stack beneath the Cookie showing a FLIP card mid-reveal, clean instructional lighting on a dark mat.",
  heroImage: '/images/cookies/gingerbrave.png',
  heroImageAlt: 'GingerBrave, a Cookie card - the central card type around which every other Braverse card type revolves.',
  imageSources: [
    { src: '/images/cookies/gingerbrave.png', sourceUrl: 'owned-asset' },
    { src: '/images/cookies/strawberry-crepe-cookie.png', sourceUrl: 'owned-asset' },
    { src: '/images/cookies/pitaya-dragon-cookie.png', sourceUrl: 'owned-asset' },
  ],
  publishDate: '2026-05-29T00:00:00.000Z',
  lastUpdated: '2026-05-29T00:00:00.000Z',
  primaryKeyword: 'cookie run braverse card types',
  secondaryKeywords: [
    'braverse flip card',
    'braverse trap card',
    'braverse stage card',
    'cookie run braverse item card',
    'cookie run braverse cookie card',
    'what are the card types in braverse',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'evergreen',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'the-card-types-at-a-glance', label: 'The card types at a glance', level: 2 },
    { id: 'cookie-cards-the-stars-of-the-game', label: 'Cookie cards: the stars of the game', level: 2 },
    { id: 'item-cards-your-instant-effects', label: 'Item cards: your instant effects', level: 2 },
    { id: 'trap-cards-the-reactive-layer', label: 'Trap cards: the reactive layer', level: 2 },
    { id: 'stage-cards-the-persistent-layer', label: 'Stage cards: the persistent layer', level: 2 },
    { id: 'flip-the-mechanic-that-changes-everything', label: 'FLIP: the mechanic that changes everything', level: 2 },
    { id: 'how-the-card-types-work-together', label: 'How the card types work together', level: 2 },
    { id: 'how-many-of-each-belong-in-a-deck', label: 'How many of each belong in a deck', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `If you've read [how to play Cookie Run: Braverse](/blog/cookie-run-braverse-tcg/how-to-play-cookie-run-braverse), you got the speed-run: here are the card types, here's how a turn goes, now play. This guide is the slower, deeper pass - the one that turns "I know what the cards are called" into "I know what each card type is *for* and how to use it." Understanding the card types properly is the difference between a beginner who reads each card cold and a player who already knows what to expect from a face-down Trap.

A quick discipline note, because Braverse is a young game and accuracy is the point of this blog: the *shapes* of the card types below are well-corroborated, but a few exact rules - especially around FLIP timing and how Traps are set and triggered - couldn't be fully confirmed against the official rulebook. Where that's true, we describe how it works and flag the specifics with [Verify against the official rulebook]. Don't quote an edge-case ruling to a judge from memory; confirm it.

## The card types at a glance

Braverse has four card types, plus FLIP, which is a property certain cards carry rather than a fifth type on its own. Here's the cheat sheet before we go deep on each:

| Card type | Role | When it acts |
| --- | --- | --- |
| **Cookie** | Your fighters; the only cards that attack and hold HP | On the board, across turns |
| **Item** | One-shot effects | When you play them |
| **Trap** | Reactive effects, set face-down | Triggered by a condition, often on the opponent's turn |
| **Stage** | Persistent battlefield effects | Continuously, while in play |
| **FLIP** | A trigger baked into a card in an HP stack | When damage flips the card |

[Verify the exact official names and any additional sub-types against the current rulebook and card database; the four-type structure plus FLIP is corroborated across sources but confirm before a sanctioned event.]

## Cookie cards: the stars of the game

![GingerBrave, a Cookie card - Cookies are the only cards that attack, hold HP, and win you the game.](/images/cookies/gingerbrave.png)

Everything in Braverse revolves around Cookies. They're the only cards that:

- **Attack** and trade in the Battle Area.
- **Hold HP** - a Cookie's hit points are a stack of cards placed face-down beneath it from your deck.
- **Win the game** - you win by filling the opponent's Break Area to a combined Cookie Level of 10, or by leaving them with no Cookie to replace an empty Battle Area.

Every legal deck must contain at least one Cookie, and in practice Cookies are the largest share of any deck. A Cookie card carries a Level (which feeds both win conditions and curve), a cost (paid by resting Support cards), an attack value, and usually a skill. When a Cookie's HP stack is exhausted and it faints, it goes to the Break Area - and its Level counts toward your opponent's win.

There are also special Cookie variants. **Dragon Cookies** were introduced in the Operation Timeguard set and appear as starter headliners (Pitaya Dragon, Longan Dragon, Lotus Dragon in the Arena of Glory wave). Purple's **Dark Cacao Cookie** anchors a trash-based "Awakening" strategy. These variants follow the Cookie rules but carry extra mechanics. [Verify the exact rules for Dragon Cookies and the Awakening mechanic against the official rulebook - the names and existence are confirmed, the specific rules are not.]

> The mental model: Cookies are your board and your clock. Every other card type exists to make your Cookies better or your opponent's Cookies worse.

## Item cards: your instant effects

![Strawberry Crepe Cookie attacking - Items are the cards you play to push damage, remove a blocker, or swing a combat.](/images/cookies/strawberry-crepe-cookie.png)

Items are your one-shot effects - the cards you play for an immediate impact and then they're done. Think of them as the "spell" layer in most TCGs. A typical Item does something like push extra damage, remove or weaken an opposing Cookie, draw or cycle cards, or buff one of your Cookies for a turn.

Because Braverse resources ramp slowly (one Support card per turn), Items compete directly with Cookies for your limited resources. The skill is knowing when an Item's tempo swing is worth spending a turn's resources that *aren't* going onto the board. Aggressive decks want cheap, damage-pushing Items; control and combo decks want Items that generate card advantage or set up a payoff. [Verify the exact timing windows in which Items can be played against the official rulebook.]

## Trap cards: the reactive layer

Traps are the game's reactive layer. You set them face-down ahead of time, and they trigger when a condition is met - frequently on your *opponent's* turn, punishing them for an attack or a play they were going to make anyway. They're the "gotcha" cards, and they're what make a face-down card on the other side of the table something to respect.

The strategic value of a Trap is information warfare: a set Trap forces your opponent to play around something that might not even be there. Even a bluffed empty zone changes how the opponent attacks. The cost is tempo - you're spending resources on a card that does nothing until its condition fires, and a dead Trap is a wasted card.

> Traps reward reading the opponent. The best Trap is one you set when you can predict what they'll do next turn - so it's almost guaranteed to fire.

[Verify exactly how Traps are set, what zone they occupy, and the precise timing of their triggers against the official rulebook; the reactive, face-down nature is corroborated but the mechanical specifics should be confirmed.]

## Stage cards: the persistent layer

Stages are the persistent layer - cards that stay in play and apply a continuous effect rather than resolving once. Where an Item is a single swing and a Trap is a single reaction, a Stage keeps working every turn it remains on the table.

Stages are typically build-around or value cards: a passive damage buff, an ongoing resource benefit, or a static rule change that nudges the whole game in your favor. Because their value compounds the longer they stick, they fit slower decks better than aggro - a Stage that pays off over five turns is worth more to a control or ramp deck than to a Red deck trying to end the game in four. [Verify how many Stages can be in play at once and whether they can be removed, against the official rulebook.]

## FLIP: the mechanic that changes everything

![Pitaya Dragon Cookie, a higher-Level Dragon Cookie whose larger HP stack hides more potential FLIP triggers.](/images/cookies/pitaya-dragon-cookie.png)

FLIP is the mechanic that makes Braverse feel different from every other TCG, and it's why "card type" is only half the story. Here's the core of it:

A Cookie's HP is a stack of face-down cards beneath it. As the Cookie takes damage, those cards flip face-up one at a time. Some of those cards are **FLIP cards** - and when damage flips one, its FLIP effect triggers. So damaging a Cookie isn't purely good for the attacker: you might be the one setting off the defender's tucked-away FLIP effect.

This does a few remarkable things to the game:

- **Defense fights back.** Attacking into a Cookie can trigger a FLIP that punishes you. You can't always just swing freely.
- **HP stacks carry hidden information.** Neither player knows exactly which HP cards are FLIP cards until they flip, so combat has a built-in element of risk.
- **It rewards deckbuilding.** You can load your decks with FLIP cards - up to a cap of 16 - to make your Cookies dangerous to attack.

The 16-FLIP-card maximum is a corroborated deck-construction rule. The exact *timing* of when a FLIP triggers relative to damage and other effects is the part to confirm. [Verify the precise FLIP trigger timing and any stacking/ordering rules against the official rulebook - this is the most-cited rules ambiguity in the game.]

> Practical takeaway: when you attack, you're gambling that the defender's HP stack won't punish you. When you defend, FLIP cards are how you make attacking you a bad idea.

## How the card types work together

A good Braverse deck isn't a pile of card types - it's a system. Here's the interplay:

- **Cookies** are the board and the win condition.
- **Items** create the tempo swings that win individual combats.
- **Traps** tax the opponent's turn and protect your board.
- **Stages** generate compounding value for the long game.
- **FLIP cards** turn your HP stacks into a second defensive layer that hits back.

Your color and archetype decide the mix. Red aggro leans Cookie-and-Item heavy with early-relevant FLIP. Yellow control wants more Traps, Stages, and value Items. See [deck archetypes](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-archetypes) for how each color weights these.

## How many of each belong in a deck

There's no universal ratio, but here's a sane starting frame for a 60-card deck. Tune from your archetype, not from this table.

| Card type | Rough share | Notes |
| --- | --- | --- |
| **Cookies** | The majority | Your board and clock; at least one is mandatory, in practice many |
| **Items** | A solid secondary block | Tempo and reach; aggro wants cheap ones |
| **Traps** | A focused set | More in reactive/control decks, fewer in aggro |
| **Stages** | A small number | Build-arounds; value compounds, so slower decks want more |
| **FLIP cards** | Up to 16 (the cap) | A separate axis - many cards of other types can also be FLIP cards |

Note that FLIP overlaps with the other types: a Cookie or Item can also be a FLIP card, so the 16-FLIP cap is a constraint layered on top of your type mix, not a separate slice of the pie. [Verify deck-construction limits - 60 cards, four copies max of a card number, at least one Cookie, up to 16 FLIP cards - against the official rulebook.] For the full ratio discussion, see [deck-building basics](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics).

## Quick Action Checklist

- **Build around Cookies first** - they're your board, your HP, and your win condition. Everything else supports them.
- **Treat Items as tempo** - only spend a turn's resources on one when the swing beats developing a Cookie.
- **Use Traps to tax the opponent's turn** - set them when you can predict the play that triggers them.
- **Save Stages for slower decks** - their value compounds, so aggro usually wants fewer.
- **Respect FLIP on both sides** - attacking risks the defender's flips; defending uses flips to punish attackers.
- **Mind the 16-FLIP cap** - it's a layer on top of your type mix, not a separate slice.
- **Confirm edge-case rules** - FLIP timing and Trap triggers are the most ambiguous; check the official rulebook before a sanctioned game.`,
  faq: [
    {
      question: "What are the card types in Cookie Run: Braverse?",
      answer:
        "There are four card types - Cookie, Item, Trap, and Stage - plus FLIP, which is a triggered property certain cards carry rather than a separate type. Cookies are your fighters and the only cards that attack and hold HP; Items are one-shot effects; Traps are reactive cards set face-down; Stages are persistent battlefield effects.",
    },
    {
      question: "What is a FLIP card in Braverse?",
      answer:
        "A FLIP card is a card with an effect that triggers when it gets flipped face-up - which happens when a Cookie takes damage and the cards in its HP stack flip one at a time. Because FLIP cards sit hidden in HP stacks, attacking a Cookie can set off a defensive FLIP effect that punishes the attacker. Decks can run up to 16 FLIP cards.",
    },
    {
      question: "How is a Trap card different from an Item in Braverse?",
      answer:
        "An Item is a one-shot effect you play for an immediate impact on your turn. A Trap is set face-down ahead of time and triggers reactively when a condition is met, often on the opponent's turn. Items create proactive tempo swings; Traps tax and punish the opponent's plays.",
    },
    {
      question: "What does a Stage card do in Braverse?",
      answer:
        "A Stage stays in play and applies a continuous effect every turn it remains, rather than resolving once. Because its value compounds the longer it sticks, Stages favor slower control and ramp decks over fast aggro decks that aim to end the game quickly.",
    },
    {
      question: "How many of each card type should my deck have?",
      answer:
        "There's no universal ratio, but Cookies should be the majority of a 60-card deck, with a solid block of Items, a focused set of Traps, a few Stages, and up to 16 FLIP cards (which overlap with the other types). Your color and archetype shift the mix - aggro is Cookie-and-Item heavy, control wants more Traps and Stages.",
    },
    {
      question: "Are Dragon Cookies a separate card type?",
      answer:
        "No. Dragon Cookies are a Cookie variant - introduced in the Operation Timeguard set and featured as starter headliners like Pitaya Dragon Cookie - that follow the Cookie rules but carry extra mechanics. Verify the exact Dragon Cookie rules against the official rulebook, since the name is confirmed but the specifics are not.",
    },
  ],
  internalLinks: [
    { href: '/blog/cookie-run-braverse-tcg', anchor: 'Braverse hub' },
    {
      href: '/blog/cookie-run-braverse-tcg/how-to-play-cookie-run-braverse',
      anchor: 'how to play Cookie Run: Braverse',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics',
      anchor: 'deck-building basics',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-archetypes',
      anchor: 'deck archetypes',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained',
      anchor: 'the five colors explained',
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
    "Cookie Run: Braverse has four card types plus FLIP. Cookies are your fighters and the only cards that attack, hold HP (a face-down stack beneath them), and win the game. Items are one-shot effects; Traps are reactive cards set face-down that trigger on a condition, often on the opponent's turn; Stages are persistent effects that compound over time. FLIP is a triggered property carried by up to 16 cards in a deck - when damage flips a card in a Cookie's HP stack, its FLIP effect fires, so attacking carries hidden risk. Confirm FLIP timing and Trap trigger specifics against the official rulebook.",
  itemList: {
    name: "Cookie Run: Braverse Card Types",
    items: [
      { name: 'Cookie', description: 'Your fighters - the only cards that attack, hold HP, and win the game. Every deck needs at least one.' },
      { name: 'Item', description: 'One-shot effects played for immediate impact; the tempo and reach layer.' },
      { name: 'Trap', description: 'Reactive cards set face-down that trigger on a condition, often punishing the opponent on their turn.' },
      { name: 'Stage', description: 'Persistent battlefield effects that apply continuously and compound over time, favoring slower decks.' },
      { name: 'FLIP', description: "A triggered property (up to 16 per deck) that fires when damage flips a card in a Cookie's HP stack, making attacks risky." },
    ],
  },
};
