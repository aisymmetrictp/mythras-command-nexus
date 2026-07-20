import type { BlogPost } from '../../blogTypes';

export const mtgKeywordsExplained: BlogPost = {
  slug: 'mtg-keywords-explained',
  game: 'magic-the-gathering',
  category: 'beginner-guides',
  topicCluster: 'rules-basics',
  title: 'MTG Keyword Abilities Explained: From Flying to Ward',
  metaDescription:
    'Every common MTG keyword ability in plain English: flying, trample, deathtouch, lifelink, vigilance, first strike, haste, hexproof, ward, menace, and more.',
  excerpt:
    "Magic packs whole rules into single words. Flying, trample, deathtouch, ward — each keyword is shorthand for a specific effect, and knowing them is the difference between reading a card and understanding it. Here is every common keyword, grouped and explained.",
  featuredImagePrompt:
    'A radiant winged angel warrior hovering above a battlefield with sword raised, dramatic golden light, painterly Magic: The Gathering art style, no text',
  heroImage: '/images/blog/magic-the-gathering/mtg-keywords-explained/serra-angel.jpg',
  heroImageAlt:
    'Serra Angel, a creature with flying and vigilance — two of Magic\'s most common keyword abilities on a single classic card.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-keywords-explained/serra-angel.jpg',
      sourceUrl: 'https://scryfall.com/card/fdn/740/serra-angel',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-keywords-explained/vampire-nighthawk.jpg',
      sourceUrl: 'https://scryfall.com/card/fdn/757/vampire-nighthawk',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-keywords-explained/questing-beast.jpg',
      sourceUrl: 'https://scryfall.com/card/eld/171/questing-beast',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
  ],
  publishDate: '2026-06-06T00:00:00.000Z',
  lastUpdated: '2026-06-06T00:00:00.000Z',
  primaryKeyword: 'mtg keyword abilities',
  secondaryKeywords: [
    'mtg keywords explained',
    'magic the gathering keywords list',
    'what does ward do mtg',
    'mtg evergreen keywords',
    'deathtouch trample mtg',
    'ward vs hexproof mtg',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'evergreen',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-keywords-exist', label: 'Why keywords exist', level: 2 },
    { id: 'evasion-keywords-getting-damage-through', label: 'Evasion keywords: getting damage through', level: 2 },
    { id: 'combat-math-keywords-changing-how-damage-works', label: 'Combat-math keywords: changing how damage works', level: 2 },
    { id: 'tempo-keywords-haste-vigilance-and-flash', label: 'Tempo keywords: haste, vigilance, and flash', level: 2 },
    { id: 'protection-keywords-hexproof-ward-and-indestructible', label: 'Protection keywords: hexproof, ward, and indestructible', level: 2 },
    { id: 'value-and-defensive-keywords', label: 'Value and defensive keywords', level: 2 },
    { id: 'how-keywords-stack-on-one-card', label: 'How keywords stack on one card', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Magic does something clever: it packs an entire paragraph of rules into a single word. When a card says "flying," that one word means "this can only be blocked by creatures with flying or reach," and the game expects you to know that without it being spelled out. These shorthand words are **keyword abilities**, and learning them is the single biggest jump from "I can read a card" to "I understand what this card does."

The ones that show up in nearly every set are called **evergreen keywords** — the permanent vocabulary of Magic — and a handful of common non-evergreen ones round out the list you actually need. This guide covers all of them, grouped by what they do rather than alphabetically, because "flying and menace are both evasion" is far more useful to learn than "flying comes before menace in the dictionary." Every definition here matches the current comprehensive rules.

## Why keywords exist

A keyword is just a name for a packaged rule. Instead of printing "this creature can only be blocked by creatures that also have flying or have reach" on every flier, the card says "Flying" and you supply the rest. New-frame cards often print the reminder text in parentheses for beginners — that italic explanation after the keyword — but experienced players read the word and move on.

There are two big reasons to learn them as a group. First, **most keywords interact with combat**, so they only make sense once you understand the combat phase. Second, **keywords combine**, and the combinations are where games are won — a creature with two keywords is often far more than twice as good as one with a single keyword. We will build up to the combinations at the end.

![Serra Angel, a 4/4 flier with vigilance — flying keeps it hard to block, and vigilance lets it attack without tapping so it can still defend.](/images/blog/magic-the-gathering/mtg-keywords-explained/serra-angel.jpg)

## Evasion keywords: getting damage through

Evasion keywords restrict who can block a creature, which is how you make sure your attacker connects. These are the keywords that turn a small creature into a reliable clock.

- **Flying.** The most common evasion in the game. A creature with flying can only be blocked by creatures that also have flying or have reach. On the ground, fliers connect almost every turn, which is why a small evasive flier can outrace a much bigger creature stuck on the ground.
- **Reach.** The answer to flying. A creature with reach can block creatures with flying (think of a giant spider catching a flier in its web). Reach does nothing on offense — it is purely a defensive keyword that lets ground creatures stop fliers.
- **Menace.** A creature with menace can only be blocked by two or more creatures. Against a board with one or two blockers, menace is effectively unblockable, and it forces your opponent to commit multiple creatures to stop one of yours — a bad trade for them.
- **Trample.** Half evasion, half combat math. When a creature with trample is blocked, the attacker assigns lethal damage to the blockers and sends the *rest* through to the player. A 6/6 trampler blocked by a 2/2 puts 2 on the blocker and 4 on the opponent's face. Trample means chump-blocking a big creature no longer fully stops it.

The cleanest way to think about evasion: blockers are how your opponent defends, and evasion is how you take the blocking option away from them.

## Combat-math keywords: changing how damage works

These keywords do not change *who* can block — they change what happens when damage is dealt. This is where new players make the most mistakes, because these rules quietly rewrite the normal "both creatures hit at the same time" math.

![Vampire Nighthawk, a 2/3 with flying, deathtouch, and lifelink at once — it evades, kills anything it touches, and gains you life, all on a single cheap card.](/images/blog/magic-the-gathering/mtg-keywords-explained/vampire-nighthawk.jpg)

- **Deathtouch.** Any amount of damage a deathtouch creature deals to a creature is enough to destroy it. A 1/1 with deathtouch trades with a 10/10 — one point is lethal. When assigning combat damage, a deathtouch attacker only needs to assign *one* damage to each blocker to count as lethal, which is what makes it terrifying alongside trample.
- **First strike.** A creature with first strike deals its combat damage *before* creatures without it, in a separate earlier damage step. If a 3/3 first striker is blocked by a 3/3 without it, the first striker deals 3 and kills the blocker before the blocker ever deals damage back — so it takes zero. First strike is a one-sided fight as long as it kills what it is facing.
- **[Double strike](/blog/magic-the-gathering/best-mtg-double-strike-cards).** The creature deals combat damage in *both* the first-strike step and the regular step — it effectively hits twice. A 3/3 with double strike deals 3, then another 3, for six total, and kills a first-strike blocker before taking any damage.
- **Lifelink.** Damage a lifelink creature deals also gains you that much life. It works on any damage, not just combat — a lifelink creature that deals 5 to anything gains you 5 life. In a race, a lifelink attacker swings the life totals both directions at once, which can flip a game you were losing.

The deathtouch-plus-trample combo is the famous one: because deathtouch makes "lethal" just 1 damage, a 6/6 with both, blocked by a 2/2, assigns 1 to the blocker and **5** to the player. Keep that interaction in your head — it comes up constantly.

## Tempo keywords: haste, vigilance, and flash

These three change *when* you get to act, which is what "tempo" means — doing things sooner than your opponent expects.

- **[Haste](/blog/magic-the-gathering/best-mtg-haste-enablers).** A creature with haste can attack and use tap abilities the turn it comes under your control, ignoring "summoning sickness." Normally a creature has to wait a turn before it can attack; haste removes that delay. It is how aggressive red decks deal damage the moment a threat hits the board, and how a creature you flash or reanimate can swing immediately.
- **Vigilance.** A creature with vigilance does not tap when it attacks, so it can attack *and* still be available to block on the opponent's next turn. Pure value: you get offense without dropping your defense. Serra Angel's vigilance is exactly why it has been a strong creature for thirty years.
- **Flash.** A spell or creature with flash can be cast any time you could cast an instant — including on your opponent's turn or in response to something. Flashing in a blocker after attackers are declared is a classic blowout, and a flash creature like Snapcaster Mage lets you hold up mana and react instead of committing on your own turn.

Tempo keywords do not win games by themselves, but they decide *when* your creatures matter, and timing is most of the skill in Magic.

## Protection keywords: hexproof, ward, and indestructible

These keywords protect a creature from removal, and the differences between them are subtle but important — especially the difference between hexproof and ward, which trips up almost everyone.

- **Hexproof.** A creature with hexproof can't be the target of spells or abilities your *opponents* control. They simply cannot point a removal spell at it. You can still target your own hexproof creature (to buff it, for example). Note the limits: hexproof does not stop board wipes that say "destroy all creatures" (those don't target), and it does not stop your opponent's creatures from blocking or fighting it.
- **Ward.** Ward is the "soft" version, and the distinction is the whole point. A creature with ward *can* be targeted, but when an opponent targets it with a spell or ability, that spell or ability is **countered unless they pay the ward cost** (which might be mana, life, or discarding a card). Ward does not make a creature untargetable — it makes targeting it expensive. The practical difference: hexproof says "you can't," ward says "you can, but it'll cost you."
- **Indestructible.** An indestructible creature is not destroyed by lethal damage or by effects that say "destroy." Combat damage still gets marked on it, but it does not die from it, and a board wipe that says "destroy all creatures" leaves it standing. It is *not* immune to everything, though — it still dies to sacrifice effects, to -X/-X effects that drop its toughness to 0, and to exile (exile doesn't "destroy"). The reliable way to kill an indestructible creature is to [exile it](/blog/magic-the-gathering/best-removal-spells-mtg) or shrink it to zero toughness.

If you remember one thing here: **hexproof can't be targeted by opponents at all; ward can be targeted but taxes them; indestructible survives damage and "destroy" but not exile or sacrifice.** Those three are answered in completely different ways.

## Value and defensive keywords

A few more common keywords round out the list — the ones that generate advantage or anchor a defense rather than win combat outright.

- **Defender.** A creature with defender can't attack. That sounds purely negative, but defender shows up on cheap, high-toughness "wall" creatures that exist to block and often come with a bonus, like drawing a card. You play a defender to survive the early game, not to deal damage.
- **Reach** (covered above under evasion) is the natural partner to defender on defensive creatures — a wall with reach blocks both ground threats and fliers.
- **Lifelink and deathtouch** (covered above) also pull double duty as defensive keywords: a small lifelink or deathtouch blocker is a brutal speed bump for an attacker, since it either gains you life on the trade or kills whatever it blocks.

There are dozens of set-specific and mechanic keywords beyond these (flashback, prowess, convoke, and so on), but the ones above are the permanent core that appears across formats. Learn these first; the set mechanics are easier once the evergreen vocabulary is automatic.

## How keywords stack on one card

The reason to learn keywords as a system is that **they combine, and the combinations are where the power lives.** A single card carrying the right pair of keywords can be worth far more than its mana cost suggests.

![Questing Beast, which carries vigilance, deathtouch, and haste at once, can't be blocked by small creatures, and whose combat damage can't be prevented — a stack of keywords on one body.](/images/blog/magic-the-gathering/mtg-keywords-explained/questing-beast.jpg)

The classic combinations to recognize on sight:

- **Deathtouch + trample.** "Lethal" becomes 1 damage per blocker, so almost all of the creature's power tramples through. The premier "you can't profitably block this" combo.
- **First strike + deathtouch.** The creature deals its damage early, and because any damage is lethal, it kills the blocker before that blocker can swing back. One of the best defensive packages in the game — it wins almost every fight it gets into.
- **Flying + deathtouch + lifelink.** Vampire Nighthawk's exact line-up. It evades, it kills anything that dares block it, and it gains you life every time it connects — three keywords that turn a cheap creature into a problem in every phase.
- **Vigilance + haste.** Attack the turn it lands *and* keep it back to block — offense and defense from one creature with no downside.

When you read a creature, **read its keywords first.** They tell you how it attacks, whether it can be blocked, what happens when it fights, how hard it is to kill, and when it can act. The stats matter, but the keywords are the instructions. A 2/3 looks unremarkable until you notice it has flying, deathtouch, and lifelink — and then it is one of the most annoying two-drops in the game.

For more on how these keywords play out in the heat of battle, our [how combat works in MTG](/blog/magic-the-gathering/mtg-combat-explained) guide walks through the combat phase step by step, and the [MTG color pie explained](/blog/magic-the-gathering/mtg-color-pie-explained) post covers which colors get which keywords and why.

## Quick Action Checklist

- Learn evasion first: flying (blocked only by flying/reach), reach (blocks fliers), menace (needs two blockers), trample (excess damage spills to the player).
- Memorize the combat-math keywords: deathtouch (any damage is lethal), first strike (hits first), double strike (hits twice), lifelink (gain life equal to damage dealt).
- Know the tempo keywords: haste (attack immediately), vigilance (attack without tapping), flash (cast at instant speed).
- Nail the protection trio: hexproof (opponents can't target it), ward (they can target it but must pay a tax), indestructible (survives damage and "destroy," but not exile or sacrifice).
- Remember the killer combos: deathtouch + trample, first strike + deathtouch, and vigilance + haste.
- When you read any creature, read its keywords before its stats — they tell you how it actually plays.`,
  faq: [
    {
      question: 'What are keyword abilities in Magic: The Gathering?',
      answer:
        'Keyword abilities are single words that stand in for a packaged rule. Instead of printing the full rules text, a card says "flying" or "trample" and you supply the rest. Evergreen keywords are the permanent set that appears in nearly every release — flying, trample, deathtouch, lifelink, vigilance, first strike, double strike, haste, hexproof, ward, menace, reach, flash, defender, and indestructible are the core ones every player should know.',
    },
    {
      question: 'What is the difference between ward and hexproof in MTG?',
      answer:
        'Hexproof means a creature can\'t be the target of spells or abilities your opponents control at all — they simply cannot point removal at it. Ward is softer: the creature can be targeted, but when an opponent targets it, that spell or ability is countered unless they pay the ward cost (mana, life, or a discard, depending on the card). In short, hexproof says "you can\'t target this," while ward says "you can, but it\'ll cost you."',
    },
    {
      question: 'How do deathtouch and trample work together?',
      answer:
        'Trample lets a blocked creature assign lethal damage to its blockers and send the rest to the defending player. Deathtouch makes any nonzero damage lethal, so when both are on one creature, "lethal" to a blocker is just 1 damage. A 6/6 with trample and deathtouch blocked by a 2/2 assigns 1 damage to the blocker and 5 to the player — almost all of its power tramples through. It is one of the most efficient damage outputs in the game.',
    },
    {
      question: 'Does indestructible stop everything in MTG?',
      answer:
        'No. Indestructible only prevents a creature from being destroyed by lethal damage or by effects that say "destroy," and it survives board wipes that destroy all creatures. It does not stop exile, sacrifice effects, or -X/-X effects that drop the creature\'s toughness to 0 (a creature with 0 toughness dies as a state-based action, which isn\'t "destruction"). To remove an indestructible creature, exile it or shrink it to zero toughness.',
    },
    {
      question: 'What does haste do in Magic: The Gathering?',
      answer:
        'Haste lets a creature attack and use its tap abilities the turn it comes under your control, ignoring summoning sickness. Normally a creature must be under your control continuously since the start of your turn before it can attack; haste removes that delay. It is core to aggressive red decks and to any strategy that cheats a creature into play and wants to attack immediately.',
    },
    {
      question: 'What is the difference between flying and reach?',
      answer:
        'Flying is an evasion keyword: a creature with flying can only be blocked by creatures that also have flying or have reach. Reach is the defensive counter to it: a creature with reach can block creatures with flying, but reach does nothing on offense. Think of flying as how you get damage past blockers in the air, and reach as how ground creatures (like a giant spider) reach up to stop them.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/mtg-combat-explained', anchor: 'How combat works in MTG' },
    { href: '/blog/magic-the-gathering/mtg-color-pie-explained', anchor: 'The MTG color pie explained' },
    { href: '/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start', anchor: 'Commander format guide for beginners' },
    { href: '/blog/magic-the-gathering/best-removal-spells-mtg', anchor: 'Best removal spells in MTG' },
  ],
  externalSources: [
    {
      url: 'https://magic.wizards.com/en/rules',
      title: 'Wizards of the Coast — official comprehensive rules',
    },
    {
      url: 'https://mtg.fandom.com/wiki/Evergreen',
      title: 'MTG Wiki — evergreen keyword abilities',
    },
    {
      url: 'https://scryfall.com/docs/syntax',
      title: 'Scryfall — searching cards by keyword and ability',
    },
  ],
  tldr:
    'Keyword abilities are single words that pack a whole rule into a card. The evergreen core: evasion keywords (flying, reach, menace, trample) control who can block; combat-math keywords (deathtouch, first strike, double strike, lifelink) change how damage works; tempo keywords (haste, vigilance, flash) control when you act; and protection keywords differ in a key way — hexproof can\'t be targeted by opponents, ward can be targeted but taxes them, and indestructible survives damage and "destroy" but not exile or sacrifice. The combinations, like deathtouch + trample, are where games are won.',
  itemList: {
    name: 'Common MTG Keyword Abilities, Explained',
    items: [
      { name: 'Flying', description: 'Can only be blocked by creatures with flying or reach. The most common form of evasion.' },
      { name: 'Reach', description: 'Can block creatures with flying. Defensive only — does nothing on offense.' },
      { name: 'Menace', description: 'Can only be blocked by two or more creatures.' },
      { name: 'Trample', description: 'Excess combat damage past lethal on blockers is dealt to the defending player.' },
      { name: 'Deathtouch', description: 'Any amount of damage it deals to a creature is enough to destroy it.' },
      { name: 'First strike', description: 'Deals combat damage before creatures without it, in a separate earlier step.' },
      { name: 'Double strike', description: 'Deals combat damage in both the first-strike step and the regular step — hits twice.' },
      { name: 'Lifelink', description: 'Damage it deals also gains you that much life.' },
      { name: 'Vigilance', description: 'Does not tap when attacking, so it can attack and still block.' },
      { name: 'Haste', description: 'Can attack and use tap abilities the turn it comes under your control.' },
      { name: 'Flash', description: 'Can be cast any time you could cast an instant, including on an opponent\'s turn.' },
      { name: 'Hexproof', description: 'Can\'t be the target of spells or abilities opponents control.' },
      { name: 'Ward', description: 'When an opponent targets it, that spell or ability is countered unless they pay the ward cost.' },
      { name: 'Indestructible', description: 'Not destroyed by lethal damage or "destroy" effects. Still dies to exile, sacrifice, or 0 toughness.' },
      { name: 'Defender', description: 'Can\'t attack. Found on cheap, high-toughness walls that block and often draw a card.' },
    ],
  },
};
