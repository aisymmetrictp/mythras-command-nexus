import type { BlogPost } from '../../blogTypes';

export const bestMtgExtraTurnSpells: BlogPost = {
  slug: 'best-mtg-extra-turn-spells',
  game: 'magic-the-gathering',
  category: 'card-guides',
  topicCluster: 'extra-turns',
  title: 'Best Extra-Turn Spells in MTG, Ranked',
  metaDescription:
    'The best extra-turn spells in MTG, ranked — Time Warp, Capture of Jingzhou, Nexus of Fate, and how to take extra turns without being the table durdle.',
  excerpt:
    "An extra turn is the most powerful thing five mana can buy — and the fastest way to make a table hate you. Here are the best extra-turn spells in Magic, ranked, with the one rule that separates a winning Time Warp from a pointless durdle: an extra turn is only worth taking if you do something with it.",
  featuredImagePrompt:
    'A robed time mage reversing a giant clock as glowing sand flows upward, arcane blue runes spiraling around a frozen battlefield, deep blue and violet light, painterly fantasy art style, no text',
  heroImage: '/images/blog/magic-the-gathering/best-mtg-extra-turn-spells/time-warp.jpg',
  heroImageAlt:
    'Time Warp, the five-mana blue sorcery that takes an extra turn after this one — the cleanest and most-copied extra-turn spell in Magic.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-mtg-extra-turn-spells/time-warp.jpg',
      sourceUrl: 'https://scryfall.com/card/msc/788/time-warp',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-extra-turn-spells/capture-of-jingzhou.jpg',
      sourceUrl: 'https://scryfall.com/card/cmm/79/capture-of-jingzhou',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-extra-turn-spells/nexus-of-fate.jpg',
      sourceUrl: 'https://scryfall.com/card/plst/M19-306/nexus-of-fate',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-extra-turn-spells/alrunds-epiphany.jpg',
      sourceUrl: 'https://scryfall.com/card/khm/41/alrunds-epiphany',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
  ],
  publishDate: '2026-06-24T00:00:00.000Z',
  lastUpdated: '2026-06-24T00:00:00.000Z',
  primaryKeyword: 'best extra turn spells mtg',
  secondaryKeywords: [
    'best extra turn spells commander',
    'mtg extra turn cards ranked',
    'time warp commander',
    'extra turn combo mtg',
    'best time walk effects mtg',
    'taking extra turns commander',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-an-extra-turn-is-actually-worth', label: 'What an extra turn is actually worth', level: 2 },
    { id: 'dont-be-the-durdle', label: 'Don\'t be the durdle', level: 2 },
    { id: 'the-best-extra-turn-spells-ranked', label: 'The best extra-turn spells, ranked', level: 2 },
    { id: 'the-best-budget-extra-turn-spells', label: 'The best budget extra-turn spells', level: 2 },
    { id: 'extra-turn-combos-and-loops', label: 'Extra-turn combos and loops', level: 2 },
    { id: 'the-ones-you-cant-play-banned-and-restricted', label: 'The ones you can\'t play (banned and restricted)', level: 2 },
    { id: 'how-to-use-extra-turns-without-getting-archenemied', label: 'How to use extra turns without getting archenemied', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `An extra turn is the single most powerful thing five mana can buy. Another untap, another draw, another full attack, another land drop — you double everything you can do in a game, and you do it before anyone else gets a chance to respond. It's also the single fastest way to convince three other people at the table to point all their removal and all their alpha strikes at you specifically. Both of those things are true at once, and the gap between them is whether you actually *did something* with the turn.

That's the whole post in one sentence: extra turns are busted, and they're worthless if you waste them. Below are the best extra-turn spells in Magic, ranked by power and how reliably they convert into a win, plus the budget options, the combos that take infinite turns, the ones that are flat-out banned, and the etiquette that keeps you from becoming the table's archenemy. Everything is legality-checked.

## What an extra-turn is actually worth

Strip the romance off it. An extra turn gives you, in rough order of value:

**A full untap and a full turn of mana, twice.** This is the real engine. Extra turns are how combo and big-mana decks chain a payoff — you untap your [mana rocks](/blog/magic-the-gathering/best-mana-rocks-commander-mtg), your dorks, your lands, and suddenly your "one spell per turn" becomes two or three. In a ramp deck the extra mana is often worth more than the extra attack.

**A second attack step.** Obvious, and the reason aggro and [Voltron decks](/blog/magic-the-gathering/best-mtg-voltron-equipment-commander) love them — swing, take another turn, swing again before blockers recover or the table stabilizes. With a big enough commander, two combats is lethal.

**A second draw and land drop.** Quietly the most underrated. Over a game, a couple of extra turns is just raw card and mana advantage stacked on top of everything else.

The thing to internalize: an extra turn doesn't *do* anything by itself. It multiplies whatever you were already going to do. Cast Time Warp on an empty board with nothing to develop and you paid five mana to draw a card and play a land. Cast it with a lethal board or a combo half-assembled and you just won.

## Don't be the durdle

Here's the caveat the whole archetype lives under. The classic mistake — and I've watched people do this for fifteen years — is taking an extra turn because you *can*, with no plan for what it accomplishes. You durdle. You untap, you draw, you pass. The table sat through a turn that changed nothing except making you the most threatening-looking player at the table for zero payoff.

An extra turn is only worth casting if at least one of these is true: you have a lethal or near-lethal board, you're chaining toward an infinite-turns loop, you need the untap to combo off this turn, or the extra draws/mana materially close out your game plan. If none of those are true, hold the spell. A Time Warp in hand is a threat; a Time Warp wasted on a do-nothing turn is five mana you'll never see again — and now everyone knows you're the extra-turns player and treats you accordingly.

The corollary in multiplayer: **the turn after your extra turn, you have to survive three opponents who just watched you take two turns in a row.** If your extra turn didn't end the game or set up an unbreakable position, you've painted a target on yourself for nothing. Take extra turns to *win*, not to feel powerful.

## The best extra-turn spells, ranked

Ranked on power and reliability in the formats where they matter — primarily Commander, where extra turns are at their strongest.

![Capture of Jingzhou, the five-mana sorcery that takes an extra turn after this one — a functional reprint of Time Warp, but a sorcery you can buyback in some lines.](/images/blog/magic-the-gathering/best-mtg-extra-turn-spells/capture-of-jingzhou.jpg)

1. **Time Warp** — 3UU. Take an extra turn after this one. The clean five-mana benchmark every other extra-turn spell is measured against. No drawback, no rider, just another turn. It's the most-copied template in the category and the first extra-turn spell most decks add. Commander-legal and a Vintage staple.
2. **Capture of Jingzhou** — 3UU. A functional reprint of Time Warp — take an extra turn after this one. Same cost, same effect, different name and art. You run it as the fourth, fifth, or sixth "Time Warp" in a turns deck because the effect is so strong you want all the copies you can get. Commander-legal.
3. **Temporal Manipulation** — 3UU. The third copy of Time Warp's effect at the same cost. Take an extra turn after this one, full stop. Together, Time Warp, Capture, and Temporal Manipulation give a dedicated turns deck three clean five-mana extra turns — the core of the archetype.
4. **Nexus of Fate** — 5UU. Take an extra turn after this one; instant speed; *shuffle Nexus into your library instead of putting it in the graveyard.* The shuffle clause is everything — it never runs out. With enough mana and a way to draw it back, Nexus of Fate is the format's premier *infinite-turns* enabler, and being an instant means you can hold up [interaction](/blog/magic-the-gathering/best-counterspells-mtg) and only fire it when you untap into the win. Commander-legal.
5. **Alrund's Epiphany** — 5UU. Take two extra turns after this one, and create two 1/1 flying Bird tokens for each — and it has foretell, so you can cast it over two turns to hide the cost. Two turns *and* a board of evasive attackers means it actually closes games by itself, which most extra-turn spells don't. The standout modern printing.

![Nexus of Fate, the instant-speed extra-turn spell that shuffles itself back into your library instead of going to the graveyard — the premier infinite-turns enabler.](/images/blog/magic-the-gathering/best-mtg-extra-turn-spells/nexus-of-fate.jpg)

6. **Karn's Temporal Sundering** — 4UU. Take an extra turn after this one, then untap up to two lands; *if you control a legendary creature, also return target nonland permanent to its owner's hand.* In Commander you almost always control a legendary creature (your commander), so this is an extra turn plus a free bounce — a tempo swing on top of the turn. Six mana, Commander-legal.
7. **Expropriate** — 7UU. Each player votes Time or Money; you take an extra turn for each Time vote and steal a permanent for each Money vote. Nine mana is steep, but the voting is rigged in your favor in multiplayer — you'll usually bank multiple extra turns or a pile of stolen permanents, and it frequently just wins on resolution. A cEDH and high-power Commander finisher.
8. **Part the Waterveil** — 4UU. Take an extra turn after this one; has awaken 6 (pay 6UU to also turn a land into a 6/6 creature). Six mana, but the awaken mode gives you the turn *and* a haste-ready threat to actually use it. A solid extra-turn-plus-bodies option.
9. **Time Stretch** — 8UU. Take *two* extra turns after this one. Ten mana is a lot, but two turns off one card in a ramp deck is often game-ending, and it's a classic top-end for big-mana Commander builds. Pure payoff, no frills.
10. **Beacon of Tomorrows** — 6UU. Take an extra turn after this one, then shuffle Beacon into your library. The shuffle-back means it's recurring like Nexus, just at sorcery speed and eight mana. A budget-friendly recurring turn for casual turns decks.

## The best budget extra-turn spells

You don't need to drop $50 on a Time Warp to take extra turns. These keep the archetype accessible.

- **Beacon of Tomorrows** — 6UU. The recurring extra turn (it shuffles back in) at a budget price. Slower and pricier in mana than Time Warp, but it never leaves your deck.
- **Walk the Aeons** — 4UU. Take an extra turn; *buyback by sacrificing three Islands*, so you can recast it from your hand if you're island-heavy. The buyback turns one card into a repeatable engine in a mono-blue or island-stuffed deck. Cheap to acquire.
- **Part the Waterveil** — 4UU. Often inexpensive, and the awaken mode means you get a body to use the turn. A great value pick for a deck that wants the turn to *do* something immediately.
- **Karn's Temporal Sundering** — 4UU. Usually a budget price, and the commander-keyed bounce makes it punch above its cost in any Commander deck.

The honest budget read: a turns deck doesn't need the expensive copies to function. Three or four reasonably-priced extra-turn spells plus the payoffs to use them beats a single premium Time Warp with nothing to do afterward.

## Extra-turn combos and loops

This is where extra turns go from strong to oppressive. A handful of pieces turn "an extra turn" into "all the turns."

**Nexus of Fate + enough mana + card draw.** Because Nexus shuffles itself back in, a deck that can generate ~7+ mana and reliably [draw into it](/blog/magic-the-gathering/best-card-draw-commander-mtg) each turn just takes infinite turns. This was the infamous engine behind the Standard "Turbo Nexus" decks, and it lives on in Commander.

**Time Warp effects + a way to recur them.** Loop a Time Warp with any reanimation or [copy effect](/blog/magic-the-gathering/best-mtg-clones-copy-commander) that returns it — for example, copying or flashing back an extra-turn spell each turn — and you take repeated turns until you find the kill. Mizzix of the Izmagnus, Narset, and Jeleva-style commanders famously abuse this.

**Lighthouse Chronologist** — 1U. A leveled-up Chronologist (level 7+) gives you an extra turn at the beginning of *each* other player's turn — effectively, you take all the turns. Slow to set up, but in mono-blue it's a one-card extra-turn engine.

**Magosi, the Waterveil** — a land that, with enough setup, takes an extra turn and can loop with the right shuffle/recursion. A land-based extra-turn source that flies under removal aimed at spells.

The caveat scales with the combo: an infinite-turns loop is a *win the game right now* button, and it will make you the archenemy of every pod that isn't built for it. Save the loops for high-power and cEDH tables. At a casual table, taking infinite turns to grind out a slow win is the fastest way to never get invited back.

## The ones you can't play (banned and restricted)

The most famous extra-turn spell in Magic is one you cannot run:

- **Time Walk** — 1U. Take an extra turn after this one, for *two mana*. It's so absurdly efficient that it's **banned in Commander** and **restricted in Vintage** (you may run exactly one copy in a Vintage deck, and it's not legal anywhere else). It's a Power Nine card — don't try to sleeve it up in EDH, the deck is illegal. Time Warp at 3UU is the legal, "fair" version of the same effect.

The lesson: Wizards prices extra turns at five mana for a reason. Two mana for a free turn broke the game, so every modern extra-turn spell costs at least five. Anything cheaper is either banned, restricted, or has a real drawback — always check Scryfall legality before you build, because extra turns are exactly the category bans target.

## How to use extra turns without getting archenemied

Multiplayer etiquette and self-preservation, because this archetype gets you killed if you play it wrong:

- **Take the turn to win, not to flex.** If it doesn't close the game or lock up an unbreakable position, you've just made yourself the target for free.
- **Hold the spell as a threat.** An uncast Time Warp deters removal and combat against you more than a wasted one ever could. Instant-speed turns (Nexus of Fate) let you bluff interaction.
- **Sequence the kill, not the turn.** Set up your lethal board or combo *first*, then take the extra turn to execute, so the turn is the finisher rather than the setup that telegraphs the kill.
- **Read the bracket.** Three clean Time Warps in a casual pod makes you the durdle everyone resents. Infinite turns belongs at high-power and cEDH. Match the package to the table.

## Quick Action Checklist

Apply this when adding extra turns to a deck:

- [ ] Only cast an extra turn if it wins, combos, or materially advances your plan — never just because you can
- [ ] Time Warp is the floor; run Capture of Jingzhou and Temporal Manipulation as copies in a dedicated turns deck
- [ ] Nexus of Fate is your infinite-turns enabler thanks to the shuffle-back clause
- [ ] Pick spells that bring a payoff (Alrund's Epiphany makes Birds; Part the Waterveil makes a body) so the turn isn't empty
- [ ] Don't try to play Time Walk — it's banned in Commander and restricted in Vintage
- [ ] On a budget, lean on Walk the Aeons, Beacon of Tomorrows, and Part the Waterveil
- [ ] Save infinite-turns loops for high-power and cEDH tables, not casual pods
- [ ] Hold an extra-turn spell as a threat; the uncast one protects you more than a wasted one`,
  faq: [
    {
      question: 'What is the best extra-turn spell in MTG?',
      answer:
        'Time Warp is the benchmark — a clean five-mana (3UU) extra turn with no drawback, and the template every other extra-turn spell copies. Nexus of Fate is the best for dedicated turns decks because it shuffles itself back into your library and can take infinite turns, and Alrund\'s Epiphany is the best at actually closing a game because it grants two turns plus flying Bird tokens.',
    },
    {
      question: 'Is Time Walk banned in Commander?',
      answer:
        'Yes. Time Walk is banned in Commander and restricted in Vintage (one copy allowed). At just two mana for a full extra turn it is one of the Power Nine and far too efficient for fair play. The legal version of the same effect is Time Warp at 3UU, which is Commander-legal and the standard extra-turn spell.',
    },
    {
      question: 'How do extra-turn spells take infinite turns?',
      answer:
        'Nexus of Fate shuffles itself back into your library instead of going to the graveyard, so a deck with enough mana and reliable card draw can recast it every turn for infinite turns. Alternatively, you can loop a Time Warp effect with a recursion or copy engine — many Izzet and Grixis commanders abuse this. Both lines effectively win the game on the spot.',
    },
    {
      question: 'Are extra-turn spells worth it in Commander?',
      answer:
        'Yes, but only with a payoff. An extra turn multiplies what you were already going to do — it untaps your mana, gives a second attack, and adds a draw and land drop — so it is busted with a lethal board or a combo half-assembled and worthless on an empty board. Take extra turns to win, not to feel powerful, or you just become the table\'s archenemy for nothing.',
    },
    {
      question: 'What are the best budget extra-turn spells?',
      answer:
        'Walk the Aeons (buyback by sacrificing three Islands), Beacon of Tomorrows (shuffles back in for a recurring turn), Part the Waterveil (awaken makes a body to use the turn), and Karn\'s Temporal Sundering (commander-keyed bounce) are all inexpensive and Commander-legal. A turns deck functions fine on a few budget copies plus good payoffs — you do not need a premium Time Warp.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/best-counterspells-mtg', anchor: 'best counterspells guide' },
    { href: '/blog/magic-the-gathering/best-commander-combos-mtg', anchor: 'best Commander combos guide' },
    { href: '/blog/magic-the-gathering/best-commander-staples-mtg', anchor: 'best Commander staples guide' },
    { href: '/blog/magic-the-gathering/best-card-draw-commander-mtg', anchor: 'best card draw in Commander' },
    { href: '/blog/magic-the-gathering/how-to-build-a-commander-deck', anchor: 'how to build a Commander deck' },
  ],
  externalSources: [
    { url: 'https://scryfall.com/search?q=o%3A%22extra+turn%22+f%3Acommander', title: 'Scryfall — extra-turn spell search and legality data' },
    { url: 'https://edhrec.com/', title: 'EDHREC — Commander extra-turn inclusion data' },
    { url: 'https://magic.wizards.com/en/banned-restricted-list', title: 'Wizards of the Coast — official banned and restricted list' },
  ],
  tldr:
    "Extra turns are the most powerful thing five mana can buy and worthless if you waste them. Time Warp (3UU) is the clean benchmark; Capture of Jingzhou and Temporal Manipulation are its copies; Nexus of Fate enables infinite turns via its shuffle-back clause; Alrund's Epiphany closes games with two turns plus Birds. Time Walk is banned in Commander. The rule: only take an extra turn if it wins, combos, or materially advances your plan — never just because you can.",
  itemList: {
    name: 'Best Extra-Turn Spells in MTG, Ranked',
    items: [
      { name: 'Time Warp', description: 'The clean five-mana (3UU) extra turn with no drawback — the benchmark every other copies.' },
      { name: 'Capture of Jingzhou', description: 'A functional reprint of Time Warp; run it as another copy in a dedicated turns deck.' },
      { name: 'Temporal Manipulation', description: 'A third copy of Time Warp\'s effect at 3UU; the core of the turns archetype.' },
      { name: 'Nexus of Fate', description: 'Instant-speed extra turn that shuffles itself back in — the premier infinite-turns enabler.' },
      { name: "Alrund's Epiphany", description: 'Two extra turns plus two Bird tokens per turn, with foretell — actually closes games.' },
      { name: "Karn's Temporal Sundering", description: 'Extra turn plus a free bounce when you control a legendary creature (your commander).' },
      { name: 'Expropriate', description: 'Vote-rigged extra turns and stolen permanents in multiplayer; a high-power finisher.' },
      { name: 'Part the Waterveil', description: 'Extra turn with awaken 6 to make a 6/6 land creature that can use the turn.' },
      { name: 'Time Stretch', description: 'Two extra turns for ten mana — a classic big-mana top-end finisher.' },
      { name: 'Beacon of Tomorrows', description: 'Budget recurring extra turn that shuffles itself back into your library.' },
    ],
  },
};
