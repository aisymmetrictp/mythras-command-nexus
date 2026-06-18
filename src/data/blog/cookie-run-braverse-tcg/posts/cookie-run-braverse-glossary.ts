import type { BlogPost } from '../../blogTypes';

export const cookieRunBraverseGlossary: BlogPost = {
  slug: 'cookie-run-braverse-glossary',
  game: 'cookie-run-braverse-tcg',
  category: 'beginner-guides',
  topicCluster: 'fundamentals',
  tags: ['Glossary', 'Terminology', 'Card Types', 'FLIP', 'Keywords', 'Rarities'],
  title: "Cookie Run: Braverse Glossary: Every Term Explained",
  metaDescription:
    "An A-Z Cookie Run: Braverse glossary: Battle Area, Break Area, Support Area, FLIP, the five colors, energy, Level, the seven card types, rarities, and keywords.",
  excerpt:
    "Every Cookie Run: Braverse term in one place, defined plainly and consistently with our rules guides. Play areas, the seven card types, FLIP, the five colors, energy, Level, rarities, and keywords like Arena, Ancient, Beast, and Dragon.",
  featuredImagePrompt:
    "A flat-lay of Cookie Run: Braverse cards arranged like a reference chart - a standing Cookie, a FLIP card mid-reveal, an Item, a Trap, and a Stage - each labelled, clean instructional lighting on a dark playmat with a soft glossary-page feel.",
  heroImage: '/images/cookies/gingerbrave.png',
  heroImageAlt: 'GingerBrave, a Cookie card used as the running example throughout this Cookie Run: Braverse glossary of terms.',
  imageSources: [
    { src: '/images/cookies/gingerbrave.png', sourceUrl: 'owned-asset' },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-glossary/licorice-cookie-flip.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/_cC48RpFCSabeQ-2GhbfJw.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-glossary/dark-cacao-cookie-extra.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/N3RN0rJZjNl4gpHPuFkMyw.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
  ],
  publishDate: '2026-06-17T00:00:00.000Z',
  lastUpdated: '2026-06-17T00:00:00.000Z',
  primaryKeyword: 'cookie run braverse glossary',
  secondaryKeywords: [
    'cookie run braverse terms',
    'cookie run braverse terminology',
    'braverse battle area break area support area',
    'what does flip mean cookie run braverse',
    'cookie run braverse keywords arena ancient beast dragon',
    'cookie run braverse rarities list',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'evergreen',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'how-to-use-this-glossary', label: 'How to use this glossary', level: 2 },
    { id: 'the-play-areas-zones', label: 'The play areas (zones)', level: 2 },
    { id: 'the-seven-card-types', label: 'The seven card types', level: 2 },
    { id: 'flip-the-signature-term', label: 'FLIP: the signature term', level: 2 },
    { id: 'the-five-colors-plus-two', label: 'The five colors (plus two)', level: 2 },
    { id: 'energy-and-paying-costs', label: 'Energy and paying costs', level: 2 },
    { id: 'level-hp-and-the-board', label: 'Level, HP, and the board', level: 2 },
    { id: 'turn-and-gameplay-terms', label: 'Turn and gameplay terms', level: 2 },
    { id: 'keywords-arena-ancient-beast-dragon', label: 'Keywords: Arena, Ancient, Beast, Dragon', level: 2 },
    { id: 'rarities-and-collecting-terms', label: 'Rarities and collecting terms', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Every trading card game builds its own private dictionary, and Cookie Run: Braverse is no exception. The first time someone tells you to "rest two Support to pay the cost, then watch the FLIP in their Break Area math," it can sound like a foreign language. It isn't. The vocabulary is small once it's laid out in one place, and that's exactly what this page is: a plain-English glossary of every term you'll actually run into, grouped so the related ones sit together.

This is a reference, not a tutorial. If you want the full walkthrough, start with [how to play Cookie Run: Braverse](/blog/cookie-run-braverse-tcg/how-to-play-cookie-run-braverse) and come back here when a word trips you up. Everything below stays consistent with our rules guides, and where Braverse is still a young game with edge-case rulings that aren't pinned down, the term says so rather than pretending the answer is settled.

## How to use this glossary

The terms are grouped by what they describe: the zones on the table, the card types, the FLIP mechanic, the colors, the energy and cost system, the board numbers (Level and HP), the turn structure, the keywords printed on cards, and the collecting rarities. Each section is short and skimmable. If you only learn three terms before your first game, make them **Support Area** (how you pay for things), **Break Area** (the main scoreboard), and **FLIP** (the surprise mechanic) - everything else clicks once those do.

A standing note for the whole page: Braverse's English-language rules are still settling, and a few specifics - FLIP trigger timing, exact Trap setup, color-cost rules - aren't reported consistently across community sources. Where that's true, we flag it and point you at the official rulebook for sanctioned play.

## The play areas (zones)

Your side of the table is split into named zones. Knowing what lives where is half of learning the game.

| Term | What it is |
| --- | --- |
| **Battle Area** | Where your active Cookies stand and fight. The main stage; the only place Cookies attack from. |
| **Support Area** | Where you place cards that get rested (tapped) to pay costs and to activate Items and Traps. Your resource engine. |
| **Break Area** | The running pile of defeated Cookies, and the zone that drives the main win condition. The scoreboard. |
| **Trash** | The discard pile for spent Items, Traps, and other used cards. Some Purple strategies treat it as fuel. |
| **Deck Area** | Your face-down 60-card deck. It also feeds the face-down HP stacks placed under your Cookies. |
| **Hand** | The cards only you can see, played during your turn. |

The two zones beginners trip over are the **Support Area** (your engine) and the **Break Area** (your scoreboard). Keep one eye on each all game. For how the zones interact in a full turn, see [how to play Braverse](/blog/cookie-run-braverse-tcg/how-to-play-cookie-run-braverse).

## The seven card types

The official card database lists **seven** card types, not the four or five some beginner guides claim. Five are the everyday core; two (EXTRA and NPC) show up far less often.

| Card type | What it does |
| --- | --- |
| **Cookie** | Your fighters. The only cards that attack, hold HP, and win the game. Each carries a Level, an HP value, a cost, an attack, and usually a skill. |
| **FLIP** | Cards built to live inside a Cookie's HP stack and fire a surprise effect when damage flips them face-up. Its own type *and* an ability some Cookies carry. |
| **Item** | One-shot effects you play for an immediate impact, then they're done. The "spell" layer. |
| **Trap** | Reactive cards set face-down ahead of time that trigger on a condition, often on the opponent's turn. |
| **Stage** | Persistent battlefield effects that apply continuously while in play, rather than resolving once. |
| **EXTRA** | High-impact Cookies gated behind a board-state condition you have to meet to play them. |
| **NPC** | A rare special type - the database holds only three NPC cards. Trivia, not a deckbuilding pillar. |

The full breakdown of each type, with example cards and deck ratios, lives in [card types explained](/blog/cookie-run-braverse-tcg/cookie-run-braverse-card-types-explained). The one term that needs its own section is FLIP, because it's both a type and a mechanic.

## FLIP: the signature term

![Official Licorice Cookie card (BS8-001), a Red FLIP-type card whose flip ability draws a card when it is flipped face-up in a Cookie Run: Braverse HP stack.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-glossary/licorice-cookie-flip.webp)

**FLIP** is the term you'll hear most, and it means two things at once:

- **FLIP (card type).** A dedicated card type with over 240 cards in the database, built to sit face-down in a Cookie's HP stack. **Licorice Cookie** (BS8-001) is a FLIP-type card whose flip effect is "Draw up to 1 card from your deck."
- **Flip (ability).** A property that some ordinary Cookies *also* carry. **Sorbet Shark Cookie** (BS5-074) is a Blue Cookie that attacks and holds HP normally but also fires a flip effect if it ends up buried in an HP stack.

The unifying idea: a flip effect is a triggered effect that fires the moment the card is flipped face-up by **damage**, from one specific place - a Cookie's HP stack - and the trigger belongs to the **defender**, the player whose Cookie took the hit. That's why attacking carries risk: you can set off your opponent's hidden effect just by swinging.

Two more FLIP-adjacent terms:

- **HP stack.** The face-down pile of cards beneath a Cookie that *is* its hit points (see below). Some of those cards are FLIP cards.
- **The 16-FLIP cap.** A deck can run up to 16 cards with a flip ability - counting both dedicated FLIP-type cards and flip-carrying Cookies. The exact *timing* of a flip trigger relative to the rest of combat is the most-cited rules ambiguity in the game, so confirm it against the official rulebook before a sanctioned event. The deep dive is in [the FLIP mechanic explained](/blog/cookie-run-braverse-tcg/cookie-run-braverse-flip-mechanic).

## The five colors (plus two)

Braverse uses **five colors**, each a full playstyle. They're the foundation of every Starter Deck.

| Color | Identity | Plays like |
| --- | --- | --- |
| **Red** | Aggro | Fast damage and board pressure. The most beginner-friendly. |
| **Yellow** | Control | Grindy late game and Break Area math. |
| **Green** | Ramp | Builds resources and snowballs. |
| **Blue** | Combo | Card cycling and explosive turns. Highest skill floor. |
| **Purple** | Disruption | Resource denial and recursion; home of trash-based strategies. |

Two more tags show up in the color filter that aren't colors in the normal sense:

- **Black.** A self-contained villain faction built around Dark Enchantress Cookie, running on its own {K} energy symbol rather than one of the five colors.
- **Pure.** A small set of universal "specials" that cost generic or rainbow energy and splash into any deck.

The full color breakdown is in [the five colors explained](/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained), and the two extras get their own piece in [Black and Pure cards explained](/blog/cookie-run-braverse-tcg/cookie-run-braverse-black-pure-cards).

## Energy and paying costs

Here's the system that surprises players from other TCGs: Braverse has **no mana cards and no energy pool**. You pay by resting cards you've already committed.

- **Energy / cost.** The price printed on a card, shown with color symbols like {R} (Red), {Y} (Yellow), {G}, {B}, {P}, plus {N} for generic "any color" and {K} for Black. You pay it by resting that many Support cards.
- **Support card.** A card you place into the Support Area to grow your resource base. You may add **one** per turn, so your economy ramps slowly and steadily.
- **Rest (tap).** To turn a card sideways to pay a cost or activate an effect. Rested Support cards can't pay again until they refresh.
- **Refresh / stand / un-rest.** At the start of your turn, your rested Support cards stand back up, ready to pay again.

Because you only add one Support card per turn, early tempo matters: a cheaper Cookie hits the board sooner. One detail community guides describe inconsistently is whether costs require color-matched Support or any rested Support card, so confirm the exact color rules against the official rulebook before you rely on them in a tournament.

## Level, HP, and the board

![Official Dark Cacao Cookie card (BS8-104), a Level-3 Purple EXTRA card that carries the Ancient keyword in Cookie Run: Braverse.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-glossary/dark-cacao-cookie-extra.webp)

These are the numbers and board states you track constantly.

- **Level.** A Cookie's rank: 1, 2, or 3. Level feeds your curve *and* the main win condition - a fainted Cookie's Level counts toward its owner's loss.
- **HP (hit points).** Not a number on the card but a face-down **stack of cards** placed beneath a Cookie from your deck, equal to its HP value. As the Cookie takes damage, those cards flip face-up one at a time.
- **Faint.** What happens when a Cookie's HP stack is exhausted. The Cookie goes to its owner's Break Area, and its Level counts toward the opponent's win.
- **Attack / skill.** A Cookie's offensive line and its special ability text. Many costs (attacks, skills, Items) are paid by resting Support.
- **Break Area Level total.** The combined Level of the Cookies sitting in a player's Break Area. When yours reaches the threshold, you lose.

For how Level math actually decides games, see [win conditions explained](/blog/cookie-run-braverse-tcg/cookie-run-braverse-win-conditions).

## Turn and gameplay terms

The rhythm of a turn, in the order it happens.

| Term | Meaning |
| --- | --- |
| **Refresh phase** | Stand up your rested Support cards so they can pay again. |
| **Draw phase** | Draw a card. (The first player skips this on turn 1.) |
| **Main phase** | The meat of the turn: play Cookies, add one Support card, drop a Stage, set Traps, use Items, and attack. |
| **End phase** | Resolve end-of-turn effects and pass to your opponent. |
| **Mulligan** | Adjusting a bad opening hand before the game starts. See our [mulligan guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-mulligan-guide). |
| **First-player tax** | The rule that the player who goes first cannot draw or attack on turn 1 - the balancing cost of going first. |

Some community guides label the phases slightly differently, so if a precise phase name matters for a ruling, check it against the official rulebook.

## Keywords: Arena, Ancient, Beast, Dragon

Beyond the colors and types, some cards carry a printed **keyword** that ties them to a theme or sub-archetype. These are the four you'll see most in the current pool.

- **Arena.** The largest keyword group by far. Arena cards are tied to the Arena of Glory set's competitive theme and tend to reward an aggressive, board-focused game plan.
- **Ancient.** The keyword on the game's legendary "Ancient Hero" Cookies - high-impact, often high-Level threats. **Dark Cacao Cookie** (BS8-104) is an Ancient-keyworded EXTRA, for example.
- **Beast.** The keyword on the powerful "Beast" Cookies (think the menacing late-game finishers), a smaller but high-ceiling group.
- **Dragon.** The keyword shared by the **Dragon Cookies** - a Cookie variant like Pitaya Dragon, Longan Dragon, and Lotus Dragon. Dragon Cookies follow normal Cookie rules but carry extra mechanics; the specifics are worth confirming against the official rulebook before a sanctioned event.

A keyword isn't a separate card type - a card is still a Cookie (or FLIP, etc.) that also *has* a keyword. We cover each group's best cards in our keyword guides, like [best Ancient cards](/blog/cookie-run-braverse-tcg/best-ancient-cards-cookie-run-braverse) and [best Dragon cards](/blog/cookie-run-braverse-tcg/best-dragon-cards-cookie-run-braverse).

## Rarities and collecting terms

The little symbol on each card tells you how rare it is. This is the collecting vocabulary.

| Tier | Abbreviation |
| --- | --- |
| Common | C |
| Uncommon | U |
| Rare | R |
| Super Rare | SR |
| Ultra Rare | UR |
| Secret Rare | SEC |
| Secret Super Rare | SSR |
| Secret Ultra Rare | SUR |
| Extra Rare | EXR |
| Genesis Extra Rare | GXR |
| Promotion | P |

A few notes: **EXR** and **GXR** aren't part of the regular base ladder - they're special chase rarities, and GXR is so exclusive that exactly one card in the whole game carries it. **Promotion (P)** cards come from events and product bundles, not booster packs. And **hidden cards** is the term for the premium/alt-art pool that sits on top of a set's base checklist. Rarity is not the same as power - plenty of Commons are deck staples. The full ladder and a sane collecting plan are in the [rarities and collecting guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-rarities-collecting-guide).

## Quick Action Checklist

- Learn the **zones** first: Battle Area (fight), Support Area (pay), Break Area (scoreboard), plus Trash, Deck Area, and Hand.
- Memorize the **seven card types**: Cookie, FLIP, Item, Trap, Stage, EXTRA, NPC. The first five are the core.
- Treat **FLIP** as both a card type and an ability; the effect fires for the **defender** when damage flips a card in an HP stack.
- Know the **five colors** - Red, Yellow, Green, Blue, Purple - plus the special **Black** faction and **Pure** specials.
- Remember there's **no mana**: add one **Support** card per turn and **rest** cards to pay costs; they **refresh** next turn.
- Track **Level** (1-3) and **HP** (a face-down stack of cards), because Level drives the Break Area win.
- Recognize the big **keywords** - Arena, Ancient, Beast, Dragon - as themes layered on top of a card's type.
- Read **rarities** (C through GXR, plus P) as a *collecting* ladder, not a power ranking.`,
  faq: [
    {
      question: "What is the Break Area in Cookie Run: Braverse?",
      answer:
        "The Break Area is the pile where a player's defeated (fainted) Cookies go, and it's the game's main scoreboard. Each Cookie has a Level (1, 2, or 3), and when the combined Level of the Cookies in a player's Break Area reaches the loss threshold, that player loses. It's separate from the Trash, which holds spent Items, Traps, and other used cards.",
    },
    {
      question: "What does FLIP mean in Cookie Run: Braverse?",
      answer:
        "FLIP is both a card type and an ability. As a type, the official database lists over 240 FLIP cards (like Licorice Cookie) built to sit in a Cookie's HP stack. As an ability, some ordinary Cookies (like Sorbet Shark Cookie) also carry a flip effect. Either way, the effect fires the moment damage flips the card face-up in an HP stack, and the trigger belongs to the defending player whose Cookie took the hit.",
    },
    {
      question: "What is the difference between the Support Area and the Break Area?",
      answer:
        "The Support Area is your resource engine: you add one card to it per turn and rest (tap) those cards to pay costs, and they refresh on your next turn. The Break Area is your scoreboard: it collects fainted Cookies, and the combined Level of the Cookies there drives the main win condition. One is how you pay for things; the other is how the game is won and lost.",
    },
    {
      question: "How many colors are in Cookie Run: Braverse?",
      answer:
        "Five core colors: Red (aggro), Yellow (control), Green (ramp), Blue (combo), and Purple (disruption). The color filter also shows two special tags that aren't colors in the normal sense - Black, a villain faction with its own {K} energy, and Pure, a small set of universal cards that splash into any deck.",
    },
    {
      question: "What do the keywords Arena, Ancient, Beast, and Dragon mean?",
      answer:
        "They're printed keywords that tie a card to a theme or sub-archetype on top of its card type. Arena is the largest group, tied to the Arena of Glory set; Ancient marks the legendary 'Ancient Hero' Cookies like Dark Cacao Cookie; Beast marks the powerful Beast Cookies; and Dragon marks the Dragon Cookie variant (Pitaya, Longan, Lotus). A keyword doesn't change a card's type - a card is still a Cookie or FLIP that also has the keyword.",
    },
    {
      question: "What does it mean to rest a card in Braverse?",
      answer:
        "Resting (also called tapping) means turning a card sideways to pay a cost or activate an effect. You pay for Cookies, attacks, skills, Items, and Traps by resting cards in your Support Area. Rested cards can't be used again until your next Refresh phase, when they stand back up.",
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-braverse-tcg', anchor: 'Braverse hub' },
    {
      href: '/blog/cookie-run-braverse-tcg/how-to-play-cookie-run-braverse',
      anchor: 'how to play Cookie Run: Braverse',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-card-types-explained',
      anchor: 'card types explained',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained',
      anchor: 'the five colors explained',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-flip-mechanic',
      anchor: 'the FLIP mechanic explained',
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
    "This is an A-Z glossary of Cookie Run: Braverse terms. The zones are the Battle Area (where Cookies fight), Support Area (where you rest cards to pay costs), Break Area (the scoreboard of fainted Cookies), plus Trash, Deck Area, and Hand. There are seven card types (Cookie, FLIP, Item, Trap, Stage, EXTRA, NPC) and five colors (Red, Yellow, Green, Blue, Purple) plus the special Black faction and Pure specials. FLIP is both a card type and an ability that fires when damage flips a card in a Cookie's HP stack. There's no mana - you add one Support card per turn and rest cards to pay. Level (1-3) and HP (a face-down stack of cards) are the key board numbers, and keywords like Arena, Ancient, Beast, and Dragon mark themes on top of a card's type. Rarities run C through GXR, plus Promotion (P).",
  itemList: {
    name: "Cookie Run: Braverse Key Terms",
    items: [
      { name: 'Battle Area', description: 'Where your active Cookies stand and fight - the only place Cookies attack from.' },
      { name: 'Support Area', description: 'Your resource engine: add one card per turn and rest cards there to pay costs.' },
      { name: 'Break Area', description: 'The pile of fainted Cookies and the main scoreboard; the combined Level there drives the win.' },
      { name: 'FLIP', description: "Both a card type and an ability; fires for the defender when damage flips a card in a Cookie's HP stack." },
      { name: 'HP stack', description: "A Cookie's hit points represented as a face-down stack of cards placed beneath it from your deck." },
      { name: 'Level', description: "A Cookie's rank (1, 2, or 3); a fainted Cookie's Level counts toward its owner's loss." },
      { name: 'Support / Rest / Refresh', description: 'Add one Support card per turn, rest (tap) cards to pay, and they stand back up (refresh) next turn. No mana.' },
      { name: 'Keywords', description: "Themes printed on cards - Arena, Ancient, Beast, Dragon - layered on top of a card's type." },
    ],
  },
};
