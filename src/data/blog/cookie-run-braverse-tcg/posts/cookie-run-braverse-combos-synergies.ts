import type { BlogPost } from '../../blogTypes';

export const braverseCombosSynergies: BlogPost = {
  slug: 'cookie-run-braverse-combos-synergies',
  game: 'cookie-run-braverse-tcg',
  category: 'advanced-strategy',
  topicCluster: 'deck-building',
  tags: ['Combo', 'Synergy', 'FLIP', 'Ancient', 'Beast', 'Soul Jam', 'Deck Building'],
  title: 'Cookie Run: Braverse Combos and Synergies Guide',
  metaDescription:
    'How Cookie Run: Braverse cards combo: Ancient and Beast tribal lines, FLIP payoffs, Soul Jam engines, and real card pairings off the official database.',
  excerpt:
    "A single good card rarely wins a Braverse game - a synergy does. Here's how the real engines fit together: Ancient and Beast tribal lines, FLIP payoffs, Soul Jam mounts, and trash engines, with actual card pairings from the official database.",
  featuredImagePrompt:
    'Two Cookie Run: Braverse cards mid-combo with glowing arrows linking them - an Ancient Cookie buffing another, FLIP cards flipping up from an HP stack, energy crackling between them on a dark tactical playmat with gold accents.',
  heroImage:
    '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-combos-synergies/shadow-milk-cookie-yellow.webp',
  heroImageAlt:
    'Official Yellow Shadow Milk Cookie card (BS9-030), a Beast whose attack discards a Cookie with FLIP to activate that FLIP effect on your own turn - the centerpiece of a Cookie Run: Braverse FLIP combo deck.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-combos-synergies/shadow-milk-cookie-yellow.webp',
      sourceUrl: 'https://cookierunbraverse.com',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-combos-synergies/shadow-milk-cookie-purple.webp',
      sourceUrl: 'https://cookierunbraverse.com',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-combos-synergies/soul-jam-light-of-deceit.webp',
      sourceUrl: 'https://cookierunbraverse.com',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-combos-synergies/shadow-milk-cookie-red.webp',
      sourceUrl: 'https://cookierunbraverse.com',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
  ],
  publishDate: '2026-06-07T00:00:00.000Z',
  lastUpdated: '2026-06-07T00:00:00.000Z',
  primaryKeyword: 'cookie run braverse combos',
  secondaryKeywords: [
    'cookie run braverse synergies',
    'braverse combo guide',
    'braverse ancient synergy',
    'braverse flip combo',
    'braverse soul jam combo',
    'how to combo in cookie run braverse',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 12,
  toc: [
    { id: 'what-a-combo-actually-means-in-braverse', label: 'What a combo actually means in Braverse', level: 2 },
    { id: 'ancient-tribal-the-another-ancient-engine', label: 'Ancient tribal: the another-Ancient engine', level: 2 },
    { id: 'flip-payoffs-firing-your-hp-on-your-own-turn', label: 'FLIP payoffs: firing your HP on your own turn', level: 2 },
    { id: 'soul-jam-engines-removal-stapled-to-a-shield', label: 'Soul Jam engines: removal stapled to a shield', level: 2 },
    { id: 'trash-engines-the-purple-mill-line', label: 'Trash engines: the Purple mill line', level: 2 },
    { id: 'the-red-sacrifice-line', label: 'The Red sacrifice line', level: 2 },
    { id: 'building-around-a-synergy', label: 'Building around a synergy', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Most of your Cookie Run: Braverse losses won't come from drawing bad cards. They'll come from drawing good cards that don't *talk to each other*. A pile of strong Cookies with no shared plan loses to a focused deck where every card pushes the same engine, because Braverse's resources grow one Support card per turn - you can't afford to play cards that don't multiply each other's value. A combo, in this game, isn't usually a flashy infinite loop. It's a quiet agreement between cards: "I set this up, you cash it in."

This guide is the strategic layer on top of our [deck archetypes](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-archetypes) and [colors explained](/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained) guides. We'll walk the real synergy lines that exist in the current card pool - Ancient and Beast tribal, FLIP payoffs, Soul Jam mounts, and trash engines - with actual card pairings quoted off the official database. Notation refresher: {R}/{Y}/{G}/{B}/{P} are each color's resource, {N} is any color, and a number after an attack is its damage. One honest caveat that applies throughout: Braverse is a young game, and the precise *timing* of triggered effects - especially FLIP - is the format's most-cited rules ambiguity, so confirm any combo that depends on a specific resolution order against the official rulebook before a sanctioned event.

## What a combo actually means in Braverse

Before the specific lines, the shape of a Braverse synergy. There are four kinds you'll build around, and almost every good deck is really one of these wearing a color:

- **Conditional buffs** - cards that get better when a *type* of card is also in play. The Ancient keyword is the cleanest example: half the Ancients read "if there is another Ancient Cookie in your battle area, do something extra." Pair them and they both level up.
- **Enabler-plus-payoff** - one card sets up a game state (cards in trash, FLIP cards in hand, your own Cookies fainting), and another card is dramatically better once that state exists. This is the heart of FLIP and trash decks.
- **Mount and equip** - Soul Jam Items that attach to a specific Cookie and turn it into a permanent threat. Removal on the way in, a shield once it's on.
- **Recursion loops** - cards that return your own pieces from the trash or Break Area so your engine keeps firing. Purple's whole identity.

The discipline that ties them together: a card earns its slot if it makes *another card in your deck* better, not just if it's strong alone. With that lens, here are the lines worth building.

## Ancient tribal: the another-Ancient engine

The most beginner-friendly synergy in the game is also one of the strongest, because the cards do the work for you. A huge slice of the legendary Ancient Cookies carry a clause that reads, almost word for word, "if there is another Ancient Cookie in your battle area" - so the synergy is just *running two Ancients and getting them both onto the board.*

Look at the actual text from A Game of Truth and Deceit's reprinted Ancients:

| Ancient | Color | The another-Ancient payoff |
| --- | --- | --- |
| **Hollyberry Cookie** (BS9-017) | Red | Skill: with another Ancient out, gains +2 attack damage. Attack: reduces 3+ hits against your Ancients to 2. |
| **Golden Cheese Cookie** (BS9-024) | Yellow | Skill: at 4-or-less HP with another Ancient out, gains +1 HP each turn - she heals herself back up. |
| **Pure Vanilla Cookie** (BS9-065) | Green | Skill: with another Ancient out, sets a Support card active - free resources every turn. |
| **White Lily Cookie** (BS9-078) | Blue | Skill: with another Ancient out, bottoms an opponent's LV.1 Cookie - repeatable soft removal. |
| **Dark Cacao Cookie** (BS9-097) | Purple | Skill: with another Ancient out, strips an HP card off an opposing Cookie - repeatable removal. |

Read those together and the combo writes itself. Drop **Hollyberry (BS9-017) + Dark Cacao (BS9-097)** and you have a Red wall that reduces incoming damage to 2 *while* a Purple engine strips an HP card off the opponent every turn - and both Cookies are switched "on" simply because the other one is standing there. Add **Golden Cheese (BS9-024)** and she heals herself indefinitely as long as a friend is out. The cost is the deckbuilding tax: these are mostly "MIX" costs (Hollyberry is RED MIX, Golden Cheese is YELLOW MIX), so an Ancient deck is naturally multicolor, which means a less consistent resource base - the classic [multicolor trade-off](/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained). The payoff is that few decks in the format snowball as hard once two Ancients are online together.

> Practical line: prioritize getting the *second* Ancient down. One Ancient is a vanilla body with a dead conditional; the second one turns both of them into engines at once. Mulligan toward a curve that lands two Ancients by the midgame.

## FLIP payoffs: firing your HP on your own turn

![Official Yellow Shadow Milk Cookie card (BS9-030), a Beast whose Light of Truth attack discards a Cookie that has FLIP to activate that card's FLIP effect on your turn - the payoff that makes a FLIP deck proactive in Cookie Run: Braverse.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-combos-synergies/shadow-milk-cookie-yellow.webp)

Here's the problem FLIP has, and the combo that solves it. Normally a FLIP effect only fires *defensively* - it triggers when a card in your HP stack gets flipped face-up by damage, which means it belongs to the **defender** and goes off on your opponent's terms, not yours (the full mechanic is in our [FLIP guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-flip-mechanic)). That's reactive. You can't plan a turn around an effect you don't control.

The Yellow Shadow Milk Cookie (BS9-030) breaks that rule. His Light of Truth attack deals 3, then lets you **discard a Cookie that has FLIP from your hand to activate that discarded card's FLIP effect** - on your own turn, the moment you choose. Suddenly your FLIP suite isn't a passive minefield; it's a hand full of on-demand effects. That single line is the centerpiece of a real combo deck, and the synergy is everything you feed it:

- **Draw-on-flip Cookies** like Cherry Blossom (BS9-007), Burnt Cheese (BS9-026), and Yoga Cookie (BS9-032) read "Draw up to 1 card." Discard one to Shadow Milk and you've turned a card in hand into a card off the top - the effect refunds itself.
- **The "if activated during your turn" riders are written for this.** Pistachio Cookie (BS9-041) draws *then pings a Cookie for 1* when its FLIP fires on your turn, and Yoga Cookie draws *then sets one of your Cookies active.* Those bonus clauses only trigger on your turn - exactly the window Shadow Milk creates. They're dead value defensively and live value through him.
- **Apple Faerie Cookie (BS9-037)** closes the loop: when she faints, she returns up to 2 {Y} FLIP Cookies from your trash to your hand, refilling the ammo you've been discarding.

So the full engine is: Apple Faerie refuels your FLIP Cookies → Shadow Milk discards them for value on your turn → the "during your turn" riders ping and dig → repeat. Remember the deckbuilding rule from the FLIP guide: a deck can run **up to 16 cards with a FLIP ability**, so you have room to load this engine heavily. Just don't forget those same FLIP cards still sit in your HP stacks as defensive triggers too - this combo deck is *also* a minefield to attack into.

## Soul Jam engines: removal stapled to a shield

![Official Soul Jam: Light of Deceit card (BS9-092), which deals 2 damage and then equips to your Shadow Milk Cookie for a damage-reduction shield when your hand is small - a mount-and-equip combo in Cookie Run: Braverse.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-combos-synergies/soul-jam-light-of-deceit.webp)

Soul Jams are the cleanest mount-and-equip synergy in the game: a one-card combo that does something useful immediately and then permanently upgrades a specific Cookie. **Soul Jam: Light of Deceit (BS9-092)** is the textbook example. Pay {B}{N}, discard 2 cards, deal 2 damage to an opposing Cookie, then **equip it to your Shadow Milk Cookie**; while it's on, if you have 5 or fewer cards in hand, that Cookie takes -3 damage on your turn.

Two things make this a real combo and not just a buff. First, it's removal on the front end - you get full value even if you never equip it - which is the same design that keeps the Age of Heroes [Soul Jams](/blog/cookie-run-braverse-tcg/best-cookie-run-braverse-soul-jam-cards) honest. Second, the "5 or fewer cards in hand" clause isn't a drawback in the deck that wants it. The Yellow and Purple Shadow Milk decks are *already* discarding cards constantly - to fire FLIP effects, to fuel mill - so a small hand is their natural state. The shield is effectively always on. That's the synergy: a clause that punishes most decks rewards the exact deck that mounts it. Pair Light of Deceit with whichever Shadow Milk you're building and you get a removal spell that becomes a near-unkillable threat.

The general mount-and-equip lesson applies to every Soul Jam: treat the equip as the upside, not the requirement. Cast it for the immediate effect when you need the effect; equip it when your matching Cookie is on the board and you want it to stick.

## Trash engines: the Purple mill line

Purple's signature synergy is enabler-plus-payoff built on a number: how many cards are in the trash. Several Purple cards read "if there are 20 cards or more in your opponent's trash" or "20 cards or more in each player's trash," and on their own those conditions look unreachable. The combo is the engine card that *fills* the trash fast enough to turn them on.

That engine is **Black Sapphire Cookie (BS9-100).** Her Stage Broadcast skill mills 5 cards off your deck *and* 5 off your opponent's the moment she hits play, and her Showtime! attack deals 3 then mills 3 more off both decks. One Black Sapphire can dump 8 cards into each trash across a couple of turns. Now look at the payoffs she enables:

- **Purple Shadow Milk Cookie (BS9-102)** can only be played as an EXTRA once **there are 20 or more cards in each player's trash** - Black Sapphire is the card that gets you there. His False Persona attack then deals an extra 1 when the opponent's trash hits 20+.
- **Dark Cacao Cookie (BS9-097)**'s Twilight Strike deals an extra point of damage when the opponent's trash is 20+.

So the line is: Black Sapphire mills both players toward 20 → the trash-count payoffs switch on → Purple Shadow Milk and Dark Cacao start dealing bonus damage and forcing discards. It's a slower combo than the FLIP engine, which is why the Purple Shadow Milk is a *finisher* and not an opener (more on that ranking in our [Truth and Deceit set review](/blog/cookie-run-braverse-tcg/best-truth-and-deceit-cards-braverse)). The recursion piece that keeps it grinding: cards like Prune Juice Cookie (BS9-113) return a Cookie from your trash to hand once your trash is stocked, so the mill that fuels your payoffs *also* fuels your recursion. That double-use is what makes a trash engine more than a gimmick.

## The Red sacrifice line

![Official Red Shadow Milk Cookie card (BS9-010), a Beast that can be played when two of your Red LV.1 Cookies fainted on the opponent's previous turn - the payoff for a Red sacrifice-aggro combo in Cookie Run: Braverse.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-combos-synergies/shadow-milk-cookie-red.webp)

Aggro decks combo too - they just do it with bodies instead of card advantage. The Red sacrifice line is enabler-plus-payoff where the "enabler" is *your own Cookies dying.* The **Red Shadow Milk Cookie (BS9-010)** can be played as an EXTRA only if **2 or more of your Red LV.1 Cookies fainted during your opponent's previous turn** - so you *want* the opponent to trade into your cheap Red attackers, because their deaths cheat out a 4-HP Beast that buries a card from the opponent's hand and steals HP cards on attack.

The pieces that enable it are the cheap Red Cookies from the same set:

- **Parfait Cookie (BS9-015)**: when she faints, she plays a Cookie from your hand - so her death both counts toward the trigger *and* replaces itself.
- **Candy Apple Cookie (BS9-014)** and other one-cost Red bodies are happy to trade; you're not trying to keep them alive, you're feeding them to the count.
- **Melted Choco Cookie (BS9-006)** even gets *harder to kill* the turn 2+ of your Cookies fainted, so it can survive a swing the rest of your board didn't.

The line: flood cheap Red Cookies → let the opponent trade into them (or attack into them yourself) → with two fainted, slam the Red Shadow Milk as a tempo finisher. It's the aggro answer to "what's my payoff turn?" - and it's a good reminder that a combo doesn't have to be slow or blue. Red's combo is just faster and louder.

## Building around a synergy

Picking a synergy is the easy part; building a deck that actually executes it is where games are won. Four rules that apply to every line above:

1. **Run enough enablers that the payoff is consistent, not lucky.** A Purple Shadow Milk with one Black Sapphire is a dead card most games. The payoff is only as good as the count of cards that turn it on - lean on the enabler, not the splashy finisher.
2. **Respect the resource curve.** Braverse adds one Support per turn, so an engine that wants three pieces online by turn five needs a low, smooth curve. Multicolor Ancient decks especially have to budget their resources; see [deck-building basics](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics) for ratios.
3. **Don't over-commit into the unknown.** Many of these engines (FLIP, trash) leave your Cookies sitting as fat HP stacks. That's defensively strong, but committing your whole hand to set up a combo turn against an open board is how Disruption decks blow you out - keep a hand.
4. **Know which piece is non-negotiable.** Every synergy has one card it can't function without (the second Ancient, the Yellow Shadow Milk, Black Sapphire, the Red fainting trigger). Protect that piece, dig for it, and don't tap out in a way that exposes it.

The broader point: Braverse rewards the player who picks *one* engine and runs the cleanest version of it over the player who jams every powerful card into one pile. Read our [archetypes guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-archetypes) to figure out which engine matches how you like to win, then build the synergy that serves it.

## Quick Action Checklist

- **Ancient tribal is the easiest synergy.** Run two Ancients (e.g. Hollyberry BS9-017 + Dark Cacao BS9-097) and prioritize landing the *second* one - it switches both "on."
- **FLIP becomes proactive through the Yellow Shadow Milk (BS9-030).** Feed it draw-on-flip Cookies and "if activated during your turn" riders; refuel with Apple Faerie (BS9-037).
- **Mount Soul Jam: Light of Deceit (BS9-092) on a Shadow Milk.** Removal up front, a -3 damage shield once your hand is small - which a discard deck always is.
- **Black Sapphire (BS9-100) is the Purple trash engine.** It mills both players toward the 20-trash gate that powers the Purple Shadow Milk (BS9-102) and Dark Cacao.
- **The Red sacrifice line uses your own deaths as fuel.** Let cheap Red Cookies trade, then cheat out the Red Shadow Milk (BS9-010) when two have fainted.
- **Run enough enablers to be consistent.** One copy of a payoff with no setup is a brick - the engine card matters more than the finisher.
- **Confirm FLIP timing before a tournament.** The trigger-on-flip is established; the exact resolution order is the format's biggest rules ambiguity - check the official rulebook before building a combo that depends on it.`,
  faq: [
    {
      question: 'What is the best combo deck in Cookie Run: Braverse?',
      answer:
        "The strongest dedicated combo line in the current pool is the Yellow FLIP engine built around Shadow Milk Cookie (BS9-030), whose attack lets you discard a Cookie that has FLIP to activate that FLIP effect on your own turn. Feed it draw-on-flip Cookies and the cards with 'if activated during your turn' riders, and refuel with Apple Faerie Cookie (BS9-037). The Ancient tribal synergy is the most beginner-friendly, and the Purple trash engine (Black Sapphire into the Purple Shadow Milk) is the slowest but grindiest.",
    },
    {
      question: 'How does the Ancient synergy work in Braverse?',
      answer:
        'Many legendary Ancient Cookies carry a clause that reads "if there is another Ancient Cookie in your battle area," which grants an extra effect when a second Ancient is on board. For example, with another Ancient out, Hollyberry Cookie (BS9-017) gains +2 attack, Pure Vanilla (BS9-065) frees a Support card, and Dark Cacao (BS9-097) strips an HP card off the opponent. The synergy is simply running two Ancients and getting both onto the battle area, which switches both conditionals on at once.',
    },
    {
      question: 'How do you combo with FLIP cards in Braverse?',
      answer:
        "Normally a FLIP effect only fires defensively, when a card in your HP stack is flipped face-up by damage, so it triggers on the opponent's terms. The Yellow Shadow Milk Cookie (BS9-030) changes that: his attack lets you discard a Cookie that has FLIP from your hand to activate that card's FLIP effect on your own turn. That turns your FLIP suite into on-demand effects, and several FLIP commons have bonus riders that only trigger 'during your turn' - exactly the window he creates.",
    },
    {
      question: 'How does Soul Jam: Light of Deceit combo with Shadow Milk?',
      answer:
        'Soul Jam: Light of Deceit (BS9-092) deals 2 damage to an opposing Cookie on cast, then can equip to your Shadow Milk Cookie. While equipped, if you have 5 or fewer cards in hand, that Cookie takes -3 damage on your turn. The synergy is that Shadow Milk decks already discard cards constantly to fuel FLIP and mill, so their hand is naturally small - meaning the shield is effectively always on. It is removal that becomes a near-unkillable buff in the exact deck that wants it.',
    },
    {
      question: 'What is the Purple trash combo in Braverse?',
      answer:
        "Several Purple cards reward having 20 or more cards in the trash. Black Sapphire Cookie (BS9-100) is the engine that gets you there - it mills 5 off both decks on play and 3 more on attack. Once both trashes hit 20, the Purple Shadow Milk Cookie (BS9-102) becomes playable and deals bonus damage, and Dark Cacao Cookie (BS9-097) hits harder. Recursion pieces like Prune Juice Cookie (BS9-113) reuse the stocked trash, so the mill fuels both the payoffs and the grind.",
    },
    {
      question: 'How many FLIP cards can a combo deck run?',
      answer:
        'Up to 16 cards with a FLIP ability, which is the same cap any deck follows. That ceiling is generous enough to build a heavy FLIP engine around the Yellow Shadow Milk Cookie while still leaving room for your finishers and answers. Remember those FLIP cards also sit in your HP stacks as defensive triggers, so a FLIP combo deck doubles as a board that is dangerous to attack into.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-braverse-tcg', anchor: 'Braverse hub' },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-archetypes',
      anchor: 'deck archetypes explained',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-flip-mechanic',
      anchor: 'FLIP mechanic guide',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained',
      anchor: 'the five colors explained',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-truth-and-deceit-cards-braverse',
      anchor: 'Truth and Deceit set review',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics',
      anchor: 'deck-building basics',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-cookie-run-braverse-soul-jam-cards',
      anchor: 'Soul Jam cards guide',
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
    "Combos in Cookie Run: Braverse are synergies where one card sets up a state and another cashes it in. The four main lines: Ancient tribal (run two Ancients to switch on their 'another Ancient in your battle area' clauses), FLIP payoffs (the Yellow Shadow Milk BS9-030 discards FLIP cards to fire their effects on your own turn), Soul Jam mounts (Light of Deceit BS9-092 is removal that becomes a shield on a Shadow Milk), and trash engines (Black Sapphire BS9-100 mills both decks to power the 20-trash Purple payoffs). Red also combos through sacrifice - the Red Shadow Milk BS9-010 deploys when two of your Red LV.1 Cookies have fainted. Build enough enablers to be consistent, respect the one-Support-per-turn curve, and confirm FLIP timing against the official rulebook before a tournament.",
  itemList: {
    name: 'Core Cookie Run: Braverse Synergy Lines',
    items: [
      { name: 'Ancient tribal', description: 'Run two Ancients so their "if there is another Ancient Cookie in your battle area" clauses both switch on. The easiest, most beginner-friendly synergy.' },
      { name: 'FLIP payoff (Yellow Shadow Milk)', description: 'Shadow Milk Cookie (BS9-030) discards FLIP Cookies to fire their effects on your own turn, turning a passive HP minefield into on-demand value.' },
      { name: 'Soul Jam mount', description: 'Soul Jam: Light of Deceit (BS9-092) deals 2 then equips to a Shadow Milk for a -3 damage shield - removal that becomes a wall in a small-hand deck.' },
      { name: 'Trash engine (Purple mill)', description: 'Black Sapphire Cookie (BS9-100) mills both decks to the 20-trash gate that powers the Purple Shadow Milk (BS9-102) and Dark Cacao.' },
      { name: 'Red sacrifice line', description: 'Cheap Red Cookies trade and faint to cheat out the Red Shadow Milk (BS9-010), an aggro combo that uses your own deaths as fuel.' },
    ],
  },
};
