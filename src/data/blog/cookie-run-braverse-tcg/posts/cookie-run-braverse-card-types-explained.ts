import type { BlogPost } from '../../blogTypes';

export const braverseCardTypesExplained: BlogPost = {
  slug: 'cookie-run-braverse-card-types-explained',
  game: 'cookie-run-braverse-tcg',
  category: 'beginner-guides',
  topicCluster: 'fundamentals',
  tags: ['Card Types', 'Cookie', 'FLIP', 'Item', 'Trap', 'Stage', 'EXTRA'],
  title: "Cookie Run: Braverse Card Types Explained: Cookie, FLIP, Item, Trap, Stage, EXTRA & NPC",
  metaDescription:
    "All seven Cookie Run: Braverse card types from the official database - Cookie, FLIP, Item, Trap, Stage, EXTRA, and NPC - what each does and how it fits a deck.",
  excerpt:
    "The how-to-play guide gives you the speed-run. This is the deep dive: what every Braverse card type actually does - all seven, straight from the official card database - and how to think about each in your deck.",
  featuredImagePrompt:
    "A spread of Cookie Run: Braverse cards laid out to show the card types - a standing Cookie, an Item, a Trap, a Stage, and a FLIP card mid-reveal beneath a face-down HP stack - clean instructional lighting on a dark mat.",
  heroImage: '/images/cookies/gingerbrave.png',
  heroImageAlt: 'GingerBrave, a Cookie card - the central card type around which every other Braverse card type revolves.',
  imageSources: [
    { src: '/images/cookies/gingerbrave.png', sourceUrl: 'owned-asset' },
    { src: '/images/cookies/strawberry-crepe-cookie.png', sourceUrl: 'owned-asset' },
    { src: '/images/cookies/pitaya-dragon-cookie.png', sourceUrl: 'owned-asset' },
  ],
  publishDate: '2026-05-29T00:00:00.000Z',
  lastUpdated: '2026-05-30T00:00:00.000Z',
  primaryKeyword: 'cookie run braverse card types',
  secondaryKeywords: [
    'braverse flip card',
    'braverse trap card',
    'braverse stage card',
    'cookie run braverse item card',
    'cookie run braverse extra card',
    'how many card types in braverse',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'evergreen',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'the-seven-card-types-at-a-glance', label: 'The seven card types at a glance', level: 2 },
    { id: 'cookie-cards-the-stars-of-the-game', label: 'Cookie cards: the stars of the game', level: 2 },
    { id: 'flip-cards-the-hp-stack-layer', label: 'FLIP cards: the HP-stack layer', level: 2 },
    { id: 'item-cards-your-instant-effects', label: 'Item cards: your instant effects', level: 2 },
    { id: 'trap-cards-the-reactive-layer', label: 'Trap cards: the reactive layer', level: 2 },
    { id: 'stage-cards-the-persistent-layer', label: 'Stage cards: the persistent layer', level: 2 },
    { id: 'extra-cards-the-conditional-payoffs', label: 'EXTRA cards: the conditional payoffs', level: 2 },
    { id: 'npc-cards-the-rare-special-type', label: 'NPC cards: the rare special type', level: 2 },
    { id: 'how-the-card-types-work-together', label: 'How the card types work together', level: 2 },
    { id: 'how-many-of-each-belong-in-a-deck', label: 'How many of each belong in a deck', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `If you've read [how to play Cookie Run: Braverse](/blog/cookie-run-braverse-tcg/how-to-play-cookie-run-braverse), you got the speed-run: here are the card types, here's how a turn goes, now play. This guide is the slower, deeper pass - the one that turns "I know what the cards are called" into "I know what each card type is *for* and how to use it." Understanding the card types properly is the difference between a beginner who reads each card cold and a player who already knows what to expect from a face-down Trap.

Here's the thing a lot of beginner guides get wrong, so let's get it right up front: the official card database lists **seven** card types, not four. There's a tight core of five you'll build around every game - Cookie, FLIP, Item, Trap, and Stage - plus two you'll meet less often: EXTRA (a conditional payoff Cookie) and NPC (a rare special type). And yes, FLIP is its own card type, with hundreds of dedicated cards, *and* it doubles as an ability some Cookies carry. We'll untangle that.

A quick discipline note, because Braverse is a young game and a few exact rules - especially FLIP trigger timing and how Traps are set - aren't pinned down consistently across community sources. Where a specific ruling matters, confirm it against the official rulebook before a sanctioned event, and don't quote an edge-case ruling to a judge from memory. The card-type *list* below, though, comes straight from the official database.

## The seven card types at a glance

Braverse has seven card types in the official database. Five are the everyday core; two (EXTRA and NPC) show up far less often. Here's the cheat sheet before we go deep on each:

| Card type | Role | When it acts |
| --- | --- | --- |
| **Cookie** | Your fighters; the only cards that attack and hold HP | On the board, across turns |
| **FLIP** | Cards built to live in an HP stack and fire when flipped | When damage flips them face-up |
| **Item** | One-shot effects | When you play them |
| **Trap** | Reactive effects, set face-down | Triggered by a condition, often on the opponent's turn |
| **Stage** | Persistent battlefield effects | Continuously, while in play |
| **EXTRA** | High-impact Cookies gated behind a board-state condition | When you play them, if the condition is met |
| **NPC** | A rare special type (only a handful of cards exist) | When you play them |

That's the full set. The big mental adjustment from other TCGs is that FLIP isn't an afterthought - it's a first-class card type with its own slice of the pool, which is why it gets its own section right after Cookies instead of being tacked on at the end.

## Cookie cards: the stars of the game

![GingerBrave, a Cookie card - Cookies are the only cards that attack, hold HP, and win you the game.](/images/cookies/gingerbrave.png)

Everything in Braverse revolves around Cookies. They're the only cards that:

- **Attack** and trade in the Battle Area.
- **Hold HP** - a Cookie's hit points are a stack of cards placed face-down beneath it from your deck.
- **Win the game** - you win by filling the opponent's Break Area to a combined Cookie Level of 10, or by leaving them with no Cookie to replace an empty Battle Area.

Every legal deck must contain at least one Cookie, and in practice Cookies are the largest share of any deck. A Cookie card carries a Level (which feeds both win conditions and curve), a cost (paid by resting Support cards), an attack value, and usually a skill. When a Cookie's HP stack is exhausted and it faints, it goes to the Break Area - and its Level counts toward your opponent's win.

There are also special Cookie variants. **Dragon Cookies** were reportedly introduced in the Operation Timeguard set and appear as starter headliners (Pitaya Dragon, Longan Dragon, Lotus Dragon in the Arena of Glory wave). Purple's **Dark Cacao Cookie** anchors a trash-based "Awakening" strategy. These variants follow the Cookie rules but carry extra mechanics. The names are well-established, but the specific rules for Dragon Cookies and the Awakening mechanic are worth confirming against the official rulebook before a sanctioned event.

> The mental model: Cookies are your board and your clock. Every other card type exists to make your Cookies better or your opponent's Cookies worse.

## FLIP cards: the HP-stack layer

![Pitaya Dragon Cookie, a higher-Level Dragon Cookie whose larger HP stack hides more potential FLIP triggers.](/images/cookies/pitaya-dragon-cookie.png)

This is the type that makes Braverse feel unlike any other TCG, and it's the one beginner guides most often get wrong. FLIP is a genuine card type - the official database lists over 240 FLIP cards, more than Item, Trap, and Stage combined. But FLIP also exists as an *ability* that some ordinary Cookies carry. Both halves are real, and keeping them straight is the whole trick.

A Cookie's HP isn't a number - it's a face-down stack of cards from your deck, placed beneath it. As the Cookie takes damage, those cards flip face-up one at a time. When a flipped card has a flip effect, that effect triggers right then, mid-combat, for the *defender*. So attacking a Cookie isn't pure upside: you might be the one setting off the defender's tucked-away effect.

The two ways a flip effect gets into your HP stack:

- **Dedicated FLIP-type cards.** **Licorice Cookie** (BS8-001, a Red FLIP-type card) carries the flip effect "Draw up to 1 card from your deck." Its whole reason to exist is to sit in an HP stack and pay you off when it flips. There are over 240 cards like it.
- **Regular Cookies that also have a flip ability.** **Sorbet Shark Cookie** (BS5-074) is a Blue *Cookie* - it attacks and holds HP like any Cookie - but it also carries the flip ability "Draw up to 1 card from your deck." So it does its normal Cookie job on the board and *also* fires that effect if it ends up buried in someone's HP stack.

That's why "what type is this card?" is only half the question in Braverse. The other half is "does it have a flip ability, and where is it right now?" For the full breakdown - exact trigger timing, deckbuilding, and the misplays that lose games - see the dedicated [FLIP mechanic guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-flip-mechanic).

The deckbuilding lever: you can run **up to 16 cards with a flip ability**, counting both dedicated FLIP-type cards and flip-carrying Cookies. A deck near that cap turns every HP stack into a minefield. The 16-card cap is well-corroborated; the precise *timing* of a flip trigger relative to the rest of combat is the most-cited rules ambiguity in the game, so confirm it against the official rulebook before a sanctioned event.

> Practical takeaway: when you attack, you're gambling that the defender's HP stack won't punish you. When you defend, FLIP cards are how you make attacking you a bad idea.

## Item cards: your instant effects

![Strawberry Crepe Cookie attacking - Items are the cards you play to push damage, remove a blocker, or swing a combat.](/images/cookies/strawberry-crepe-cookie.png)

Items are your one-shot effects - the cards you play for an immediate impact and then they're done. Think of them as the "spell" layer in most TCGs. A typical Item does something like push extra damage, remove or weaken an opposing Cookie, draw or cycle cards, or buff one of your Cookies for a turn.

Because Braverse resources ramp slowly (one Support card per turn), Items compete directly with Cookies for your limited resources. The skill is knowing when an Item's tempo swing is worth spending a turn's resources that *aren't* going onto the board. Aggressive decks want cheap, damage-pushing Items; control and combo decks want Items that generate card advantage or set up a payoff. The exact timing windows in which Items can be played are worth confirming against the official rulebook before a sanctioned event.

## Trap cards: the reactive layer

Traps are the game's reactive layer. You set them face-down ahead of time, and they trigger when a condition is met - frequently on your *opponent's* turn, punishing them for an attack or a play they were going to make anyway. They're the "gotcha" cards, and they're what make a face-down card on the other side of the table something to respect.

The strategic value of a Trap is information warfare: a set Trap forces your opponent to play around something that might not even be there. Even a bluffed empty zone changes how the opponent attacks. The cost is tempo - you're spending resources on a card that does nothing until its condition fires, and a dead Trap is a wasted card.

> Traps reward reading the opponent. The best Trap is one you set when you can predict what they'll do next turn - so it's almost guaranteed to fire.

The reactive, face-down nature of Traps is well-corroborated, but the mechanical specifics - exactly how they're set, what zone they occupy, and the precise timing of their triggers - are worth confirming against the official rulebook before a sanctioned event.

## Stage cards: the persistent layer

Stages are the persistent layer - cards that stay in play and apply a continuous effect rather than resolving once. Where an Item is a single swing and a Trap is a single reaction, a Stage keeps working every turn it remains on the table.

Stages are typically build-around or value cards: a passive damage buff, an ongoing resource benefit, or a static rule change that nudges the whole game in your favor. Because their value compounds the longer they stick, they fit slower decks better than aggro - a Stage that pays off over five turns is worth more to a control or ramp deck than to a Red deck trying to end the game in four. How many Stages can be in play at once, and whether they can be removed, are details worth confirming against the official rulebook before a sanctioned event.

## EXTRA cards: the conditional payoffs

EXTRA is the type most beginner guides forget exists - the database lists 35 of them - and they're worth knowing because they're some of the most powerful cards in the game. An EXTRA card is essentially a high-impact Cookie locked behind a condition: you can only play it once a specific board state is true, and in exchange the effect is well above curve.

The condition is the whole identity. **Will of Nature** (BS8-090, a Blue EXTRA) can only be played if you have two cards or fewer in hand - it rewards the empty-handed, top-decking style Blue likes. **Jagae Cookie** (BS10-098, Blue) flips that: you can play it if you have seven cards or more in hand, by discarding two. **Dark Cacao Cookie** (BS8-104, Purple) is the trash-fueled Awakening payoff - it can be played from your trash and Awakened, anchoring Purple's graveyard strategy. There's also a full cycle of EXTRA boss Cookies like **Shadow Milk Cookie** across multiple colors, each with its own brutal condition.

The strategic point: EXTRA cards aren't free. You build *toward* their condition - dumping your hand, filling your trash, fainting your own Cookies - and the payoff is a haymaker your opponent can see coming but can't easily stop. They reward decks built around a plan, not a pile of good cards.

> The mental model: an EXTRA is a Cookie with a price of admission. Pay the board-state cost, and you get an effect no normal Cookie of that Level would be allowed to have.

## NPC cards: the rare special type

NPC is the rarest type on the list - the official database holds just three NPC cards (the BS6 set's Yellow "TBD" trio, BS6-028 through BS6-030). They function like small support Cookies with an On Play effect: one draws a card if your Break Area is stocked, one buffs a Cookie's HP, one draws based on the Cookies in your Break Area.

You don't build a deck around NPCs, and you may never see one in casual play. They exist mostly as set flavor, and they're here for completeness - so when someone insists "Braverse only has a handful of card types," you can point at the real seven, NPC included. Treat it as trivia, not a deckbuilding pillar.

## How the card types work together

A good Braverse deck isn't a pile of card types - it's a system. Here's the interplay:

- **Cookies** are the board and the win condition.
- **FLIP cards** turn your HP stacks into a second defensive layer that hits back.
- **Items** create the tempo swings that win individual combats.
- **Traps** tax the opponent's turn and protect your board.
- **Stages** generate compounding value for the long game.
- **EXTRA cards** are the haymaker payoffs you build your whole plan toward.
- **NPC cards** barely register - a rare bit of set flavor you'll seldom touch.

Your color and archetype decide the mix. Red aggro leans Cookie-and-Item heavy with early-relevant FLIP. Yellow control wants more Traps, Stages, and value Items. Purple builds toward its EXTRA Awakening payoffs out of the trash. See [deck archetypes](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-archetypes) for how each color weights these.

## How many of each belong in a deck

There's no universal ratio, but here's a sane starting frame for a 60-card deck. Tune from your archetype, not from this table.

| Card type | Rough share | Notes |
| --- | --- | --- |
| **Cookies** | The majority | Your board and clock; at least one is mandatory, in practice many |
| **FLIP cards** | Up to 16 (the cap) | An overlapping axis - counts dedicated FLIP cards and flip-carrying Cookies |
| **Items** | A solid secondary block | Tempo and reach; aggro wants cheap ones |
| **Traps** | A focused set | More in reactive/control decks, fewer in aggro |
| **Stages** | A small number | Build-arounds; value compounds, so slower decks want more |
| **EXTRA** | A few payoffs | Only if your deck builds toward their condition; pure top-end |
| **NPC** | Effectively none | A rare special type; not a deckbuilding consideration |

A wrinkle worth repeating: FLIP overlaps with the Cookie type. A dedicated FLIP-type card occupies its own slot, but a flip-carrying Cookie (like Sorbet Shark Cookie) counts as *both* a Cookie in your board math *and* one of your up-to-16 flip cards. So the 16-flip cap is a constraint layered on top of your type mix, not a separate slice of the pie. These deck-construction limits - 60 cards, four copies max of a card number, at least one Cookie, up to 16 flip cards - are well-corroborated, but confirm them against the official rulebook before a sanctioned event. For the full ratio discussion, see [deck-building basics](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics).

## Quick Action Checklist

- **Know there are seven types** - Cookie, FLIP, Item, Trap, and Stage are the core; EXTRA and NPC round it out.
- **Build around Cookies first** - they're your board, your HP, and your win condition. Everything else supports them.
- **Treat FLIP as a type, not a footnote** - it's the second-largest type in the game and the reason combat carries risk.
- **Treat Items as tempo** - only spend a turn's resources on one when the swing beats developing a Cookie.
- **Use Traps to tax the opponent's turn** - set them when you can predict the play that triggers them.
- **Save Stages for slower decks** - their value compounds, so aggro usually wants fewer.
- **Build toward your EXTRA condition** - they're haymakers, but only if your deck sets up the board state they demand.
- **Mind the 16-flip cap** - it counts dedicated FLIP cards and flip-carrying Cookies alike, layered on top of your type mix.
- **Confirm edge-case rules** - FLIP timing and Trap triggers are the most ambiguous; check the official rulebook before a sanctioned game.`,
  faq: [
    {
      question: "How many card types are in Cookie Run: Braverse?",
      answer:
        "Seven, according to the official card database: Cookie, FLIP, Item, Trap, and Stage are the everyday core, plus EXTRA (high-impact Cookies gated behind a board-state condition) and NPC (a rare special type with only three cards). Cookies are your fighters and the only cards that attack and hold HP; FLIP cards live in HP stacks and fire when flipped; Items are one-shot effects; Traps are reactive face-down cards; Stages are persistent effects.",
    },
    {
      question: "Is FLIP a card type or just an ability in Braverse?",
      answer:
        "Both. FLIP is a genuine card type - the official database lists over 240 FLIP cards, like Licorice Cookie (BS8-001), built to sit in an HP stack and fire when flipped. But FLIP is also an ability that some ordinary Cookies carry, such as Sorbet Shark Cookie (BS5-074), a Cookie that attacks and holds HP normally but also triggers a flip effect if it ends up buried in an HP stack. Either way, the effect fires when damage flips the card face-up, and a deck can run up to 16 cards with a flip ability.",
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
      question: "What is an EXTRA card in Braverse?",
      answer:
        "EXTRA is a real card type - 35 of them in the database - for high-impact Cookies you can only play once a specific board state is met. Will of Nature (BS8-090, Blue) needs two cards or fewer in hand; Jagae Cookie (BS10-098, Blue) needs seven or more; Dark Cacao Cookie (BS8-104, Purple) is played from your trash and Awakened. You build toward the condition, and the payoff is a Cookie far above the usual power curve.",
    },
    {
      question: "How many of each card type should my deck have?",
      answer:
        "There's no universal ratio, but Cookies should be the majority of a 60-card deck, with a solid block of Items, a focused set of Traps, a few Stages, and up to 16 cards with a flip ability (which overlap with the Cookie type). EXTRA cards are a few top-end payoffs only if you build toward their condition, and NPC is a rare type you can ignore for deckbuilding. Your color and archetype shift the mix - aggro is Cookie-and-Item heavy, control wants more Traps and Stages.",
    },
    {
      question: "Are Dragon Cookies a separate card type?",
      answer:
        "No. Dragon Cookies are a Cookie variant - reportedly introduced in the Operation Timeguard set and featured as starter headliners like Pitaya Dragon Cookie - that follow the Cookie rules but carry extra mechanics. They are not one of the seven card types (Cookie, FLIP, Item, Trap, Stage, EXTRA, NPC). Verify the exact Dragon Cookie rules against the official rulebook, since the specifics are not fully confirmed.",
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
    "Cookie Run: Braverse has seven card types in the official database, not four. The core five: Cookies are your fighters and the only cards that attack, hold HP (a face-down stack beneath them), and win the game; FLIP cards live in HP stacks and fire when damage flips them face-up, so attacking carries hidden risk; Items are one-shot effects; Traps are reactive face-down cards that trigger on a condition; Stages are persistent effects that compound. The two rarer types: EXTRA cards are high-impact Cookies gated behind a board-state condition (like Will of Nature or Dark Cacao Cookie), and NPC is a rare special type with only three cards. FLIP is both a card type and an ability some Cookies (like Sorbet Shark Cookie) also carry, with a deck cap of 16 cards that have a flip ability. Confirm FLIP timing and Trap trigger specifics against the official rulebook.",
  itemList: {
    name: "Cookie Run: Braverse Card Types",
    items: [
      { name: 'Cookie', description: 'Your fighters - the only cards that attack, hold HP, and win the game. Every deck needs at least one.' },
      { name: 'FLIP', description: "Its own card type (240+ cards) and an ability some Cookies also carry; fires when damage flips it face-up in an HP stack, capped at 16 per deck." },
      { name: 'Item', description: 'One-shot effects played for immediate impact; the tempo and reach layer.' },
      { name: 'Trap', description: 'Reactive cards set face-down that trigger on a condition, often punishing the opponent on their turn.' },
      { name: 'Stage', description: 'Persistent battlefield effects that apply continuously and compound over time, favoring slower decks.' },
      { name: 'EXTRA', description: 'High-impact Cookies gated behind a board-state condition you build toward, like Will of Nature or Dark Cacao Cookie.' },
      { name: 'NPC', description: 'A rare special type with only three cards in the database; set flavor, not a deckbuilding consideration.' },
    ],
  },
};
