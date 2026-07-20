import type { BlogPost } from '../../blogTypes';

export const bestMtgDoubleStrikeCards: BlogPost = {
  slug: 'best-mtg-double-strike-cards',
  game: 'magic-the-gathering',
  category: 'card-guides',
  topicCluster: 'commander-strategy',
  tags: ['commander', 'double-strike', 'combat', 'voltron', 'card-guide'],
  title: 'Best Double Strike Cards in MTG Commander, Ranked',
  metaDescription:
    'The best double strike cards in MTG Commander, ranked. Embercleave, True Conviction, Fireshrieker, Rafiq and the enablers that turn one attack into lethal.',
  excerpt:
    "Double strike is the only keyword that literally doubles your damage, and it multiplies with every buff you have already committed. Here are the best double strike cards in Commander, ranked — the equipment, enchantments, instants and creatures that turn a fair attack into a dead opponent.",
  featuredImagePrompt:
    'A crimson demonic axe crashing down mid-swing with two overlapping motion trails of fire, painterly fantasy art, dark battlefield backdrop, no text',
  heroImage: '/images/blog/magic-the-gathering/best-mtg-double-strike-cards/embercleave.jpg',
  heroImageAlt:
    'Embercleave, the {4}{R}{R} flash Equipment that costs {1} less per attacking creature and grants +1/+1, double strike and trample.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-mtg-double-strike-cards/embercleave.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-double-strike-cards/true-conviction.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-double-strike-cards/fireshrieker.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-double-strike-cards/berserkers-onslaught.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
  ],
  publishDate: '2026-07-20T00:00:00.000Z',
  lastUpdated: '2026-07-20T00:00:00.000Z',
  primaryKeyword: 'best double strike cards mtg',
  secondaryKeywords: [
    'best double strike commander',
    'mtg double strike enablers',
    'embercleave commander',
    'double strike voltron mtg',
    'how does double strike work mtg',
    'best double strike equipment',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-double-strike-is-the-best-damage-multiplier-in-magic', label: 'Why double strike is the best damage multiplier in Magic', level: 2 },
    { id: 'enablers-versus-payoffs', label: 'Enablers versus payoffs', level: 2 },
    { id: 'one-shot-grants-worth-holding-up', label: 'One-shot grants worth holding up', level: 3 },
    { id: 'permanent-grants-that-scale', label: 'Permanent grants that scale', level: 3 },
    { id: 'the-best-double-strike-cards-in-mtg-ranked', label: 'The best double strike cards in MTG, ranked', level: 2 },
    { id: 'what-double-strike-stacks-with', label: 'What double strike stacks with', level: 2 },
    { id: 'common-mistakes-with-double-strike', label: 'Common mistakes with double strike', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `The turn I stopped underrating double strike, my opponent flashed in Embercleave for {R}{R} — three attackers on board, so the {4} generic vanished entirely — attached it to an 8/8 trampler, and killed me from 34 through a blocker. Not a combo. Not an infinite. Just a two-mana instant that turned a fair swing into seventeen damage.

That is the case for double strike in one sentence: it is the only combat keyword that multiplies everything you have already spent. Trample gets damage past a chump blocker. Flying dodges the ground. Double strike takes whatever number your creature is at — after every equipment, every counter, every [anthem effect](/blog/magic-the-gathering/best-mtg-anthem-effects) — and doubles it. Stack it on a Voltron commander at 12 power and you are not adding 12 damage, you are adding a second lethal swing.

This is a ranking of the best double strike cards in Commander: the equipment, the enchantments, the instants worth holding up, and the creatures that come with it built in. Every mana cost, type line, and Commander legality below is verified against Scryfall.

## Why double strike is the best damage multiplier in Magic

Mechanically, double strike means the creature deals its combat damage twice: once in the first-strike damage step, then again in the normal damage step. That's the whole rule, and three consequences fall out of it.

**It scales with your investment, not against it.** A pump spell adds a flat number. Double strike multiplies the number you already have. On a 2/2 it's worth two extra damage — mediocre. On a 14/14 [Voltron commander](/blog/magic-the-gathering/best-mtg-voltron-equipment-commander) it's worth fourteen. This is why double strike is a bad early-game card and an absurd late-game one, and why it belongs in decks that build one big threat rather than decks that go wide.

**It kills the blocker before it can hit back.** First-strike damage resolves in its own step. If your creature's first hit destroys the blocker, that blocker never deals damage at all — and your creature still connects for full in the normal step if it has trample. Double strike is defensive and offensive in the same breath.

**It doubles triggers, not just damage.** This is the part people miss. Lifelink triggers twice. "Whenever this creature deals combat damage to a player" triggers twice. Infect counters land twice. Any of those combat-damage triggers on your commander is now happening two times per attack, which is how a lot of value engines and [combo](/blog/magic-the-gathering/best-commander-combos-mtg) lines actually close.

![Embercleave, the flash Equipment granting +1/+1, double strike and trample](/images/blog/magic-the-gathering/best-mtg-double-strike-cards/embercleave.jpg)

## Enablers versus payoffs

Double strike cards split cleanly into two groups, and a good deck runs both.

### One-shot grants worth holding up

Instants that give double strike until end of turn are ambush cards. They cost almost nothing, they're invisible until damage, and they punish the opponent who blocked "correctly" based on the board they could see.

Temur Battle Rage at {1}{R} is the standard-bearer: double strike until end of turn, plus trample if you control a creature with power 4 or greater — a condition your deck should trivially meet. Boros Charm at {R}{W} is more flexible, offering double strike as one of three modes alongside 4 damage to a player and a table-wide indestructible that also functions as [board wipe protection](/blog/magic-the-gathering/best-mtg-protection-spells).

The advantage is surprise and mana efficiency. The disadvantage is that they're one-and-done: draw one on a board with no threat and it's a blank.

### Permanent grants that scale

Equipment and enchantments cost more up front and pay off every combat afterward. Fireshrieker at {3} with a {2} equip is the cleanest, most colorless version — any deck can run it, and it moves between creatures freely. True Conviction at {3}{W}{W}{W} is the nuclear option: *every* creature you control gets double strike and lifelink, which in a token deck is genuinely game-ending.

The tension is speed versus reliability. A Fireshrieker takes five total mana to get online. A Temur Battle Rage takes two and wins the same turn. Run three or four total across both categories and you'll have the right one when it matters.

![True Conviction, the enchantment granting all your creatures double strike and lifelink](/images/blog/magic-the-gathering/best-mtg-double-strike-cards/true-conviction.jpg)

## The best double strike cards in MTG, ranked

**1. Embercleave.** {4}{R}{R} legendary Equipment. It has flash, costs {1} less for each attacking creature you control, attaches free when it enters, and grants +1/+1, double strike, and trample. Every one of those clauses is doing work. Declare four attackers and it costs {R}{R}. The flash means it resolves after blocks. The trample means chump-blocking doesn't save anyone. It is the single most efficient way to convert a normal combat into a kill in red, and it's the reason experienced players count your untapped mana before blocking.

**2. True Conviction.** {3}{W}{W}{W} enchantment. Creatures you control have double strike and lifelink. Six mana with a triple-white cost is a real ask, but the effect is not a "buff," it's a win condition — in any deck making [tokens](/blog/magic-the-gathering/best-mtg-token-generators-commander) or running a wide board, resolving this and untapping ends the game. The lifelink half also puts you so far out of racing range that nobody can respond by attacking you back.

**3. Berserkers' Onslaught.** {3}{R}{R} enchantment. Attacking creatures you control have double strike. Cheaper than True Conviction, mono-red instead of triple-white, and the "attacking" restriction genuinely doesn't matter because you weren't blocking with your team anyway. Five mana for a permanent, unconditional damage double across your whole board is one of the best rates in red.

**4. Fireshrieker.** {3} Equipment, {2} equip. Equipped creature has double strike. No color requirement, no restriction, reusable, and movable — that's the entire pitch, and it's enough. Fireshrieker goes in literally every [equipment](/blog/magic-the-gathering/best-equipment-mtg) deck and most Voltron builds regardless of colors. The five total mana to get it online is the only real cost.

**5. Rafiq of the Many.** {1}{G}{W}{U} legendary creature with exalted. Whenever a creature you control attacks alone, it gains double strike until end of turn. The classic Voltron commander for a reason: attacking alone is what Voltron does anyway, so the "drawback" is free, and the exalted pump stacks on top. Four mana in the command zone that permanently doubles your single attacker is a foundation, not a role-player.

![Fireshrieker, the colorless Equipment that grants double strike for a two-mana equip](/images/blog/magic-the-gathering/best-mtg-double-strike-cards/fireshrieker.jpg)

**6. Temur Battle Rage.** {1}{R} instant. Target creature gains double strike; ferocious grants trample too if you control a creature with power 4 or greater. Two mana to double a fattened-up threat and give it trample is the best damage-per-mana ratio on this list. Hold it up, let them block a 9/9 with a 3/3, and watch fifteen damage go through.

**7. Boros Charm.** {R}{W} instant. Choose one: 4 damage to a player or planeswalker, permanents you control gain indestructible, or target creature gains double strike. Three modes at two mana means it is never dead — the indestructible mode alone justifies the slot in a deck afraid of [board wipes](/blog/magic-the-gathering/best-board-wipes-mtg), and the double strike mode makes it a surprise kill.

**8. Silverblade Paladin.** {1}{W}{W} creature with soulbond. As long as it's paired, both it and the paired creature have double strike. Three mana that doubles two creatures' damage — including your commander — is a rate white rarely offers. The catch is that it's a 2/2 body carrying the effect, so any removal or wipe undoes the pairing.

**9. Duelist's Heritage.** {2}{W} enchantment. Whenever one or more creatures attack, you may have target attacking creature gain double strike until end of turn. Three mana, works every combat, and critically it says "creatures" not "creatures you control" — you can hand double strike to an opponent's attacker to push a political attack elsewhere, which pairs nicely with [goad](/blog/magic-the-gathering/best-mtg-goad-cards) and pillowfort strategies.

**10. Mirran Crusader.** {1}{W}{W} creature. Double strike, protection from black and from green. A 2/2 for three that hits for four and cannot be blocked or targeted by two of the format's five colors. In practice it's a resilient Voltron target — stack equipment on it and a huge slice of the format's removal simply can't answer it.

**11. Grappling Hook.** {4} Equipment, {4} equip. Equipped creature has double strike, and when it attacks you may force a creature to block it. Eight total mana is genuinely expensive, but the forced block turns your double striker into repeatable removal — first-strike damage kills the blocker, then the creature survives untouched. A niche pick that does two jobs.

**12. Ajani, Caller of the Pride.** {1}{W}{W} planeswalker. The −3 gives a creature flying and double strike until end of turn. Three mana for a one-shot evasion-plus-doubling package on a permanent that can also grind out +1/+1 counters if the coast is clear. Flying *and* double strike together is often lethal out of nowhere on a Voltron board.

![Berserkers Onslaught, the red enchantment giving all your attacking creatures double strike](/images/blog/magic-the-gathering/best-mtg-double-strike-cards/berserkers-onslaught.jpg)

## What double strike stacks with

Double strike is a multiplier, so it wants to be next to things that raise the base number or add per-hit effects.

**Trample.** The single best partner. Without trample, a chump blocker eats both damage steps. With it, first-strike damage kills the blocker and the excess plus the entire second hit spills to the player. Embercleave and Temur Battle Rage both bundle trample in for exactly this reason.

**Damage doublers.** Gratuitous Violence at {2}{R}{R}{R} makes your creatures deal double damage to permanents and players. Combined with double strike, a 6/6 deals 12 in the first-strike step and 12 in the normal step — 24 from a six-power creature. Multiplicative, not additive.

**Combat-damage triggers.** Anything reading "whenever this deals combat damage to a player" fires twice. Bloodforged Battle-Axe at {1} copies itself on each connection, so a double striker with it makes two copies per attack and snowballs absurdly.

**Lifelink.** Two damage steps means two lifelink triggers. True Conviction bundles both keywords for this reason, and Bruse Tarl, Boorish Herder at {2}{R}{W} hands out double strike and lifelink together on enter-or-attack.

**Extra combats.** Godo, Bandit Warlord at {5}{R} tutors an Equipment on entry and grants an additional combat phase when it attacks. Two combats with a double striker equals four damage steps — which is why Godo decks find Fireshrieker or Embercleave with that tutor trigger.

## Common mistakes with double strike

**Granting it to a small creature.** Double strike on a 2/2 is worth two damage. It's a multiplier — apply it after your pumps and equipment, not before, and never spend a card on it unless the target's power justifies it.

**Forgetting first-strike damage happens in its own step.** If your creature is a 5/5 with double strike blocked by a 5/5, your first hit kills the blocker and you take zero. But it also means removal in response to the first-strike step can still kill your creature *before* the normal damage step. Holding a [protection spell](/blog/magic-the-gathering/best-mtg-protection-spells) matters more with double strike, not less.

**Ignoring the blocker math.** A double striker without trample walks into a 1/1 chump and deals zero to the player. If you have no trample and no evasion, a single token blanks your entire multiplier. Solve evasion first, doubling second.

**Overloading on grants and skipping threats.** Four double strike enablers and no creature big enough to matter is a common brew failure. Build the threat, then double it — not the other way around.

**Casting the aura or equipping into open mana.** Committing a Fireshrieker equip or True Conviction into an untapped blue player is how you lose two cards to one. Deploy the doubler when you can actually attack with it that turn.

## Quick Action Checklist

- [ ] Run Fireshrieker in any equipment or Voltron deck — colorless, reusable, and it moves between creatures
- [ ] Play Embercleave in any red deck that attacks with multiple creatures; the cost reduction plus flash makes it a surprise kill
- [ ] Add True Conviction or Berserkers' Onslaught if you go wide — a board-wide double is a win condition, not a buff
- [ ] Keep one or two cheap instant grants (Temur Battle Rage, Boros Charm) for ambush kills after blocks
- [ ] Always solve trample or evasion before adding double strike — a chump blocker blanks the multiplier entirely
- [ ] Apply double strike last, after your pumps and equipment, so you double the biggest possible number
- [ ] Look for combat-damage triggers and lifelink on your commander; double strike fires them twice
- [ ] Hold protection when you attack with a doubled threat — removal in the first-strike step still eats it
- [ ] Verify each card's exact mana cost and Commander legality on Scryfall before finalizing your list`,
  faq: [
    {
      question: 'How does double strike work in Magic: The Gathering?',
      answer:
        'A creature with double strike deals its combat damage twice: once during the first-strike damage step and again during the normal combat damage step. If its first hit destroys a blocker, that blocker never deals damage back. Crucially, this also doubles any combat-damage triggers and lifelink, since both damage steps count as separate instances of combat damage.',
    },
    {
      question: 'What is the best double strike card in Commander?',
      answer:
        'Embercleave is the strongest overall — a {4}{R}{R} Equipment with flash that costs {1} less per attacking creature, attaches for free, and grants +1/+1, double strike and trample. For board-wide effects, True Conviction ({3}{W}{W}{W}) gives every creature you control double strike and lifelink, and Berserkers\' Onslaught ({3}{R}{R}) does the same for attacking creatures at a lower cost.',
    },
    {
      question: 'Does double strike work with trample?',
      answer:
        'Yes, and they are the best pairing in combat. Without trample, a single chump blocker absorbs both damage steps and the defending player takes nothing. With trample, your first-strike damage kills the blocker and the excess tramples through, then the entire second hit goes to the player unblocked. Embercleave and Temur Battle Rage both grant trample alongside double strike for exactly this reason.',
    },
    {
      question: 'Does double strike double lifelink and combat damage triggers?',
      answer:
        'Yes. Because double strike creates two separate instances of combat damage, lifelink gains you life twice and any ability reading "whenever this creature deals combat damage to a player" triggers twice. This is why double strike is so strong on commanders with damage triggers — it effectively doubles your value engine on top of doubling your damage.',
    },
    {
      question: 'Is double strike good on small creatures?',
      answer:
        'Not really. Double strike is a multiplier, so its value scales with the creature\'s power. On a 2/2 it adds two damage, which rarely justifies a card. On a 12-power Voltron commander it adds twelve. Always apply double strike after your pump spells, equipment and counters so you are doubling the largest number possible.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/best-mtg-voltron-equipment-commander', anchor: 'Voltron equipment guide' },
    { href: '/blog/magic-the-gathering/best-equipment-mtg', anchor: 'best equipment in MTG' },
    { href: '/blog/magic-the-gathering/best-mtg-anthem-effects', anchor: 'best anthem effects' },
    { href: '/blog/magic-the-gathering/best-mtg-protection-spells', anchor: 'best protection spells' },
    { href: '/blog/magic-the-gathering/mtg-combat-explained', anchor: 'how combat works in MTG' },
    { href: '/blog/magic-the-gathering/best-mtg-token-generators-commander', anchor: 'best token generators' },
  ],
  externalSources: [
    { url: 'https://scryfall.com/search?q=o%3A%22double+strike%22+f%3Acommander&unique=cards', title: 'Scryfall — double strike card search and Commander legality data' },
    { url: 'https://magic.wizards.com/en/rules', title: 'Wizards of the Coast — official comprehensive rules on first strike and double strike damage steps' },
    { url: 'https://edhrec.com/', title: 'EDHREC — double strike card inclusion data by archetype' },
  ],
  tldr:
    'The best double strike cards in MTG Commander are Embercleave (flash Equipment with trample and scaling cost), True Conviction and Berserkers\' Onslaught (board-wide doubling), Fireshrieker (colorless and reusable), Rafiq of the Many, Temur Battle Rage and Boros Charm (cheap instant ambushes), Silverblade Paladin, Duelist\'s Heritage, Mirran Crusader, Grappling Hook and Ajani, Caller of the Pride. Double strike multiplies whatever power you have already built and doubles lifelink and combat-damage triggers — just solve trample or evasion first, or a chump blocker blanks it.',
  itemList: {
    name: 'Best Double Strike Cards in MTG Commander, Ranked',
    items: [
      { name: 'Embercleave', description: 'A {4}{R}{R} flash Equipment that costs {1} less per attacking creature, attaches free, and grants +1/+1, double strike and trample.' },
      { name: 'True Conviction', description: 'A {3}{W}{W}{W} enchantment giving every creature you control double strike and lifelink. A win condition in any wide board.' },
      { name: 'Berserkers\' Onslaught', description: 'A {3}{R}{R} enchantment granting all your attacking creatures double strike. Cheaper and easier to cast than True Conviction.' },
      { name: 'Fireshrieker', description: 'A {3} colorless Equipment with a {2} equip that grants double strike. Goes in any deck, moves between creatures freely.' },
      { name: 'Rafiq of the Many', description: 'A {1}{G}{W}{U} legend with exalted that gives double strike to any creature attacking alone. The definitive Voltron commander.' },
      { name: 'Temur Battle Rage', description: 'A {1}{R} instant granting double strike, plus trample if you control a creature with power 4 or greater. Best damage per mana on the list.' },
      { name: 'Boros Charm', description: 'An {R}{W} instant with three modes: 4 damage to a player, table-wide indestructible, or double strike. Never a dead card.' },
      { name: 'Silverblade Paladin', description: 'A {1}{W}{W} creature with soulbond that gives both itself and its paired creature double strike for as long as they stay paired.' },
      { name: 'Duelist\'s Heritage', description: 'A {2}{W} enchantment giving double strike to a target attacking creature each combat — including an opponent\'s, for political plays.' },
      { name: 'Mirran Crusader', description: 'A {1}{W}{W} creature with double strike and protection from black and green. A resilient Voltron target most removal cannot answer.' },
      { name: 'Grappling Hook', description: 'A {4} Equipment with a {4} equip granting double strike and forcing a creature to block it, turning your attacker into repeatable removal.' },
      { name: 'Ajani, Caller of the Pride', description: 'A {1}{W}{W} planeswalker whose −3 grants flying and double strike until end of turn. Sudden lethal on a built-up Voltron board.' },
    ],
  },
};
