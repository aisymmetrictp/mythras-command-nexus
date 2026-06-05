import type { BlogPost } from '../../blogTypes';

export const mtgCombatExplained: BlogPost = {
  slug: 'mtg-combat-explained',
  game: 'magic-the-gathering',
  category: 'format-guides',
  topicCluster: 'archetypes',
  title: 'How Combat Works in Magic: The Gathering, Explained',
  metaDescription:
    'How combat works in MTG, step by step: declare attackers and blockers, combat damage, first strike, double strike, trample, deathtouch, and the stack in combat.',
  excerpt:
    "Combat is where most Magic games are won, and it is also where most new players misplay. Here is the combat phase broken down step by step — attackers, blockers, damage, and the keywords like first strike, trample, and deathtouch that bend the rules.",
  featuredImagePrompt:
    'A winged angel warrior diving into battle with sword drawn, dramatic combat lighting, painterly Magic: The Gathering art style, white and gold tones, no text',
  heroImage: '/images/blog/magic-the-gathering/mtg-combat-explained/serra-angel.jpg',
  heroImageAlt:
    'Serra Angel, a flying creature with vigilance that can attack without tapping — a classic illustration of evasion and a combat keyword in Magic.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-combat-explained/serra-angel.jpg',
      sourceUrl: 'https://scryfall.com/card/fdn/740/serra-angel',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-combat-explained/glissa-sunslayer.jpg',
      sourceUrl: 'https://scryfall.com/card/ecc/122/glissa-sunslayer',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-combat-explained/questing-beast.jpg',
      sourceUrl: 'https://scryfall.com/card/eld/171/questing-beast',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
  ],
  publishDate: '2026-06-05T00:00:00.000Z',
  lastUpdated: '2026-06-05T00:00:00.000Z',
  primaryKeyword: 'how combat works mtg',
  secondaryKeywords: [
    'mtg combat explained',
    'magic the gathering combat phase',
    'mtg declare attackers blockers',
    'mtg first strike double strike',
    'mtg trample deathtouch',
    'mtg combat damage step',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'evergreen',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'the-combat-phase-at-a-glance', label: 'The combat phase at a glance', level: 2 },
    { id: 'step-1-beginning-of-combat', label: 'Step 1 — beginning of combat', level: 2 },
    { id: 'step-2-declare-attackers', label: 'Step 2 — declare attackers', level: 2 },
    { id: 'step-3-declare-blockers', label: 'Step 3 — declare blockers', level: 2 },
    { id: 'step-4-combat-damage', label: 'Step 4 — combat damage', level: 2 },
    { id: 'first-strike-and-double-strike', label: 'First strike and double strike', level: 2 },
    { id: 'trample-deathtouch-and-the-keywords-that-bend-the-rules', label: 'Trample, deathtouch, and the keywords that bend the rules', level: 2 },
    { id: 'the-stack-during-combat-when-can-you-respond', label: 'The stack during combat: when can you respond', level: 2 },
    { id: 'common-combat-mistakes-to-stop-making', label: 'Common combat mistakes to stop making', level: 2 },
  ],
  content: `Most Magic games are decided in combat, and most new players misplay it — not because the rules are hard, but because the combat phase has a strict order of operations that the cards assume you already know. When you attack, when your opponent can block, when damage actually happens, and when each of you gets to cast a spell are all fixed points in a sequence. Once you internalize that sequence, "wait, can I do that?" stops being a question and trample, deathtouch, and first strike stop being mysteries.

This is the combat phase broken down step by step, the way it actually resolves at a table, plus the handful of keywords that bend the normal rules. It is a beginner-to-intermediate primer: if you know what a creature and a tap symbol are, you are ready for this. Everything here matches the current comprehensive rules.

## The combat phase at a glance

A turn in Magic has phases, and combat is one of them. The combat phase itself is divided into five steps, always in this order:

1. **Beginning of combat** — last chance to act before attackers are chosen.
2. **Declare attackers** — the active player picks which creatures attack and what they attack.
3. **Declare blockers** — the defending player assigns blockers.
4. **Combat damage** — attackers and blockers deal damage simultaneously.
5. **End of combat** — a final window before combat closes.

The two key ideas to hold onto: only the player whose turn it is can attack, and damage does not happen the instant you declare attackers — there are two whole steps (declare blockers, then a chance to respond) between "I attack" and "damage is dealt." That gap is where most of the skill in combat lives.

![Serra Angel, a flying creature with vigilance — flying limits who can block it, and vigilance lets it attack without tapping.](/images/blog/magic-the-gathering/mtg-combat-explained/serra-angel.jpg)

## Step 1 — beginning of combat

The combat phase opens with the beginning of combat step. Nothing automatic happens here, but both players get priority — meaning a chance to cast instants and activate abilities — before any attackers are declared.

This is the window for effects that need to happen *before* attacks are locked in. The classic example: tapping down an opponent's creature so it cannot attack, or using an ability that says "at the beginning of combat." If you want to remove a potential blocker before your own attack, though, that usually waits until after you have declared attackers — more on timing in the stack section below.

For most turns, beginning of combat passes quietly and you move straight to declaring attackers. But knowing the step exists matters, because some cards specifically reference it.

## Step 2 — declare attackers

Now the active player chooses attackers, all at once. To attack with a creature, it must meet two conditions:

- **It has been under your control continuously since your turn began** (this is "summoning sickness" — a creature you played this turn cannot attack unless it has haste).
- **It is untapped** — and attacking taps it, unless it has vigilance.

When you declare attackers, you also choose what each one is attacking: the defending player, or one of their planeswalkers or battles. In multiplayer formats like Commander you pick which opponent each attacker is hitting. All of this is declared simultaneously — you do not attack "one creature at a time."

Two important consequences of this step:

- **Attacking taps the creature** (no vigilance), which means it cannot block on the opponent's next turn. Swinging with everything leaves you open. Vigilance — like the kind Serra Angel has — sidesteps this by letting a creature attack without tapping.
- **"Attack triggers" go on the stack now.** Abilities that say "whenever this creature attacks" trigger as attackers are declared, and both players get priority before moving on.

Once attackers are declared and any triggers resolve, the attack is locked. The defending player now knows exactly what is coming at them.

## Step 3 — declare blockers

The defending player chooses blockers, again all at once. The rules here trip up new players constantly, so be precise:

- **Each blocker can block exactly one attacker** (unless a card specifically says otherwise). One creature, one block.
- **Multiple creatures can gang-block a single attacker.** You can throw three blockers at one big threat to kill it.
- **Blocking does not require tapping.** A tapped creature simply cannot block, but blocking itself never taps the blocker.
- **Evasion limits who can block.** Flying creatures can only be blocked by creatures with flying or reach. Menace requires two or more blockers. Other keywords ("can't be blocked by creatures with power 2 or less," and so on) restrict the pool further.

Once an attacker is blocked, it stays "blocked" even if that blocker later leaves combat — a blocked creature with no blocker deals no damage unless it has trample or a similar effect. That single rule is the engine behind a lot of combat tricks: block the big attacker, then kill or bounce your own blocker, and the attacker still deals zero.

After blockers are declared, both players get priority again. This is the second major window for instants and tricks before damage.

## Step 4 — combat damage

Now everyone deals damage **simultaneously.** This is the part new players most often get backwards: in normal combat there is no "my creature hits first." An attacker and the creature blocking it deal their damage to each other at the same time, and if both have lethal power, both die.

How damage is assigned:

- **An unblocked attacker** deals its damage to the player, planeswalker, or battle it was attacking.
- **A blocked attacker** deals its damage to the creature(s) blocking it. If it is blocked by multiple creatures, the attacking player chooses the order and assigns at least lethal damage to one before moving to the next.
- **A blocking creature** deals its damage to the attacker it blocked.

Damage is marked on creatures and stays until the end of the turn. A creature dies (is put into the graveyard as a "state-based action") the moment the damage marked on it is equal to or greater than its toughness. So a 3/3 that takes 3 damage dies; a 3/3 that takes 2 damage survives but carries that 2 damage for the rest of the turn, meaning one more point will finish it.

![Glissa Sunslayer, a creature with both first strike and deathtouch — it deals its damage early, and any damage it deals is lethal.](/images/blog/magic-the-gathering/mtg-combat-explained/glissa-sunslayer.jpg)

## First strike and double strike

The two keywords that break the "simultaneous damage" rule are first strike and double strike, and they are why the combat damage step sometimes happens twice.

- **First strike:** A creature with first strike deals its combat damage *before* creatures without it. If there is at least one creature with first strike or double strike in combat, the game creates an extra combat damage step. First-strikers deal damage in that first step; everything else deals damage in the normal step that follows. The payoff: a 3/3 first striker blocked by a 3/3 without it deals 3 first, kills the blocker, and takes zero in return — because the dead blocker never gets to its damage step.
- **Double strike:** A creature with double strike deals damage in *both* the first-strike step and the regular step. It effectively hits twice. A 3/3 with double strike deals 3, then another 3 — six total — and it kills a first-strike blocker in the first step before ever taking damage.

This is where deathtouch gets terrifying. A creature with **both first strike and deathtouch** — like Glissa Sunslayer — deals its damage early, and because deathtouch makes any nonzero damage lethal, it destroys whatever blocked it before that blocker can swing back. The blocker dies in the first-strike step and never deals its damage. First strike plus deathtouch is one of the best defensive combinations in the game.

## Trample, deathtouch, and the keywords that bend the rules

Beyond first and double strike, a cluster of evergreen keywords change how combat math works. The ones you will see constantly:

![Questing Beast, which has vigilance, deathtouch, and haste, and whose combat damage to a player can't be prevented — a stack of combat keywords on one card.](/images/blog/magic-the-gathering/mtg-combat-explained/questing-beast.jpg)

- **Deathtouch.** Any amount of damage from a deathtouch creature is lethal. A 1/1 with deathtouch trades with a 10/10. When assigning combat damage, the attacker only has to assign *one* damage to each blocker to count as lethal, which combines viciously with trample.
- **Trample.** When a creature with trample is blocked, the attacker assigns lethal damage to the blockers and may send the *rest* through to the player. A 6/6 trampler blocked by a 2/2 assigns 2 to the blocker and 4 to your face. With deathtouch added, "lethal" becomes just 1 damage per blocker — so a deathtouch-trample 6/6 blocked by a 2/2 can assign 1 to the blocker and 5 to the player.
- **Vigilance.** The creature does not tap when it attacks, so it can attack and still block on the following turn. Pure tempo: you get the offense without dropping your guard.
- **Flying.** Can only be blocked by creatures with flying or reach. The most common form of evasion.
- **Menace.** Can only be blocked by two or more creatures, making it hard to stop without committing multiple blockers.
- **Lifelink.** Damage this creature deals also gains you that much life. In combat, a lifelink attacker that connects swings the life totals both directions at once.
- **Indestructible.** The creature is not destroyed by lethal damage or "destroy" effects — combat damage still gets marked, but it does not die from it. (It can still be killed by sacrifice, -X/-X effects dropping its toughness to zero, or exile.)

The reason these matter is that they stack. Questing Beast carries vigilance, deathtouch, and haste at once, plus combat damage it deals can't be prevented — a single card that ignores half the usual defensive options. When you read a creature, read its keywords first, because they tell you how its combat will actually play out.

## The stack during combat: when can you respond

Here is the part that unlocks "combat tricks." Combat is not one big event — it is a series of windows where players get priority and can cast instants or activate abilities. The stack is fully active throughout combat. The windows, in order:

1. **Beginning of combat** — before attackers.
2. **After attackers are declared** (and after attack triggers go on the stack) — before blockers. This is when you might kill a blocker so it cannot block, or pump an attacker.
3. **After blockers are declared** — before damage. The biggest trick window. Block assignments are locked, so now you pump, protect, or kill creatures knowing exactly how combat is set up.
4. **After combat damage** — before end of combat.

The classic sequence: your opponent attacks, you declare a blocker, and *then* — knowing the block is locked — they cast a pump spell or removal in the post-block window to win the fight. Because a blocked creature stays blocked even if its blocker dies, killing your own blocker after blocks are declared makes the attacker deal no damage at all. Conversely, the defender can wait until after blocks to fire off a trick of their own.

> The single most useful habit in combat: before you declare attackers or blockers, ask "what could they do in response, and am I still happy?" Most blowouts happen because a player committed to an attack or block without accounting for the open mana across the table. Combat is a bluffing game as much as a math game.

Two timing notes that matter:

- **You cannot cast a sorcery-speed spell during combat.** Only instants and abilities with the timing of an instant. If a card does not say "instant" or "flash," it waits for your main phase.
- **Tapping out before combat is a tell.** A player who taps all their mana usually cannot cast a trick, which is information you can attack into. Holding mana up — even with no trick in hand — is a bluff that wins games.

## Common combat mistakes to stop making

The errors that cost new players the most:

- **Attacking with everything every turn.** Without vigilance, attackers tap and cannot block. Read the board and leave back enough defense.
- **Forgetting blocked stays blocked.** Killing or bouncing your own blocker after blocks are declared makes the attacker deal zero — use it, and watch for opponents using it on you.
- **Misplaying simultaneous damage.** In normal combat both creatures deal damage at the same time; a 3/3 versus a 3/3 means both die. Only first strike changes that.
- **Wasting deathtouch on overkill.** A deathtouch creature only needs to assign one damage per blocker to kill it — assign the rest elsewhere with trample, or pick a more valuable block.
- **Tapping out and then wanting to bluff.** Hold mana up when you can. The threat of a trick is often as good as the trick.

Combat rewards patience and punishes autopilot. If you want to go deeper on how creatures and removal interact around the combat step, our [best removal spells in MTG](/blog/magic-the-gathering/best-removal-spells-mtg) breakdown covers what to kill and when, and the [MTG color pie guide](/blog/magic-the-gathering/mtg-color-pie-explained) explains which colors get which combat keywords. New to the game entirely? Start with the [Commander format guide](/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start), where most beginners learn combat in practice.`,
  faq: [
    {
      question: 'What are the steps of the combat phase in MTG?',
      answer:
        'The combat phase has five steps, always in this order: beginning of combat, declare attackers, declare blockers, combat damage, and end of combat. The active player declares attackers, then the defending player declares blockers, then both sides deal damage simultaneously. Players get priority — a chance to cast instants and activate abilities — at multiple points throughout, which is what makes combat tricks possible.',
    },
    {
      question: 'Does combat damage happen at the same time in Magic?',
      answer:
        'Yes, in normal combat all combat damage is dealt simultaneously. An attacker and the creature blocking it deal damage to each other at the same moment, so if both have lethal power, both die. The only things that break this are first strike and double strike, which create an extra combat damage step where first-strikers deal their damage before everyone else.',
    },
    {
      question: 'How do first strike and double strike work?',
      answer:
        'First strike means a creature deals its combat damage before creatures without it, in a separate first combat damage step. If a first striker kills its blocker in that step, the blocker never gets to deal damage back. Double strike means the creature deals damage in both the first-strike step and the regular step, effectively hitting twice. Combined with deathtouch, first strike becomes a near-unbeatable defensive combination.',
    },
    {
      question: 'How does trample work with deathtouch?',
      answer:
        'Trample lets a blocked creature assign lethal damage to its blockers and send the rest to the defending player. Deathtouch makes any nonzero damage lethal, so when the two combine, "lethal" to a blocker is just 1 damage. A 6/6 with trample and deathtouch blocked by a 2/2 can assign 1 damage to the blocker and 5 to the player — one of the most efficient damage outputs in the game.',
    },
    {
      question: 'When can I cast spells during combat?',
      answer:
        'You can cast instants and use activated abilities at several points: at the beginning of combat, after attackers are declared (before blockers), after blockers are declared (before damage), and after combat damage. You cannot cast sorcery-speed spells during combat — only instants or cards with flash. The window after blocks are declared is the most powerful, because block assignments are locked and you know exactly how combat is set up.',
    },
    {
      question: 'Why does a blocked creature deal no damage if its blocker dies?',
      answer:
        'Once a creature is declared as blocked, it stays blocked for the rest of combat even if the blocking creature later leaves the battlefield. A blocked creature with no remaining blocker deals no combat damage — unless it has trample or an effect that says otherwise. This is why a common trick is to block a big attacker and then kill or bounce your own blocker after blocks are declared, making the attacker deal zero.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/mtg-color-pie-explained', anchor: 'The MTG color pie explained' },
    { href: '/blog/magic-the-gathering/best-removal-spells-mtg', anchor: 'Best removal spells in MTG' },
    { href: '/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start', anchor: 'Commander format guide for beginners' },
    { href: '/blog/magic-the-gathering/mtg-deck-archetypes-explained', anchor: 'MTG deck archetypes explained' },
  ],
  externalSources: [
    {
      url: 'https://magic.wizards.com/en/rules',
      title: 'Wizards of the Coast — official comprehensive rules',
    },
    {
      url: 'https://mtg.fandom.com/wiki/Combat_phase',
      title: 'MTG Wiki — the combat phase and its steps',
    },
    {
      url: 'https://scryfall.com/docs/syntax',
      title: 'Scryfall — searching cards by keyword and ability',
    },
  ],
  tldr:
    "Magic's combat phase runs in five steps: beginning of combat, declare attackers, declare blockers, combat damage, and end of combat. Only the active player attacks, attacking taps creatures (unless they have vigilance), and in normal combat all damage is dealt simultaneously. First strike and double strike add an extra damage step; trample sends excess damage past blockers; deathtouch makes any damage lethal. Players can cast instants at several points during combat, and the window after blocks are declared is the key one for combat tricks.",
  itemList: {
    name: 'The Steps of the MTG Combat Phase',
    items: [
      { name: 'Beginning of combat', description: 'Both players get priority before attackers are declared. The window for "at beginning of combat" effects.' },
      { name: 'Declare attackers', description: 'The active player chooses untapped, non-summoning-sick creatures to attack. Attacking taps them unless they have vigilance.' },
      { name: 'Declare blockers', description: 'The defending player assigns blockers. Each blocker blocks one attacker; multiple creatures can gang-block one.' },
      { name: 'Combat damage', description: 'Attackers and blockers deal damage simultaneously. First strike and double strike create an extra earlier damage step.' },
      { name: 'End of combat', description: 'A final priority window before the combat phase ends and the turn moves to the second main phase.' },
    ],
  },
};
