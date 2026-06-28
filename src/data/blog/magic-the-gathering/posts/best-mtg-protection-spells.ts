import type { BlogPost } from '../../blogTypes';

export const bestMtgProtectionSpells: BlogPost = {
  slug: 'best-mtg-protection-spells',
  game: 'magic-the-gathering',
  category: 'card-guides',
  topicCluster: 'commander-staples',
  title: 'Best MTG Protection Spells, Ranked',
  metaDescription:
    'The best protection spells in MTG, ranked — Teferi\'s Protection, Heroic Intervention, Flawless Maneuver, Deflecting Swat, and how to protect your board without overloading on answers.',
  excerpt:
    'You spent the whole game assembling a winning board, then someone untapped and Cyclonic Rift\'d everything. A single protection spell prevents that. Here are the best ones in Magic, ranked, plus the trap of running too many.',
  featuredImagePrompt:
    'A lone planeswalker raising a translucent dome of white-gold light over a battlefield of allies as a wave of destruction breaks against it, dramatic fantasy art, warm protective glow against dark chaos, no text',
  heroImage: '/images/blog/magic-the-gathering/best-mtg-protection-spells/teferis-protection.jpg',
  heroImageAlt:
    'Teferi\'s Protection, the three-mana white instant that phases out all your permanents and makes your life total unchangeable — the gold standard for protecting a board in Commander.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-mtg-protection-spells/teferis-protection.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-protection-spells/heroic-intervention.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-protection-spells/flawless-maneuver.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-protection-spells/boromir-warden-of-the-tower.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
  ],
  publishDate: '2026-06-28T00:00:00.000Z',
  lastUpdated: '2026-06-28T00:00:00.000Z',
  primaryKeyword: 'best protection spells mtg',
  secondaryKeywords: [
    'best protection spells commander',
    'mtg protect your board',
    'teferis protection commander',
    'how to protect commander deck',
    'best instant speed protection mtg',
    'indestructible spells commander',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-protection-wins-more-games-than-removal', label: 'Why protection wins more games than removal', level: 2 },
    { id: 'the-four-things-youre-actually-protecting-against', label: 'The four things you\'re actually protecting against', level: 2 },
    { id: 'the-best-protection-spells-ranked', label: 'The best protection spells, ranked', level: 2 },
    { id: 'the-best-budget-protection-spells', label: 'The best budget protection spells', level: 2 },
    { id: 'single-target-vs-whole-board-protection', label: 'Single-target vs whole-board protection', level: 2 },
    { id: 'how-many-protection-spells-should-you-run', label: 'How many protection spells should you run', level: 2 },
    { id: 'when-to-hold-it-and-when-to-fire-it', label: 'When to hold it and when to fire it', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `You spent six turns assembling a board that wins next turn. Then the blue player untaps, casts Cyclonic Rift overloaded, and bounces every permanent you own back to your hand. Game over — not because they had a better deck, but because you had no answer to the one card that undoes an hour of work in a single resolution.

That moment is exactly what a protection spell exists for. One instant in your hand turns "I just lost the game" into "nice try" — Teferi's Protection phases your whole board out of the bounce, Heroic Intervention makes everything hexproof and indestructible through a board wipe, Flawless Maneuver costs zero because you control your commander. Protection is the most undervalued category in Commander, and the reason is psychological: answers feel proactive, protection feels reactive and "do-nothing." But the do-nothing card is the one that lets your actual game plan survive contact with three other players. Below are the best protection spells in Magic, ranked, with the one rule that separates a tight list from a pile of dead cards: protect a winning board, not a board.

Everything here is legality-checked against Scryfall, and every cost and effect is accurate as printed.

## Why protection wins more games than removal

Removal trades one-for-one. You spend a card to kill a card, and at a four-player table that's a losing exchange the moment a second opponent develops — you can't kill everything, and trying to is how you fall behind on cards while two other people build toward their own wins.

Protection does something removal can't: it lets *your* threats resolve, stick, and connect while everyone else's answers bounce off. A single Heroic Intervention can blank an opponent's Blasphemous Act or Toxic Deluge — that's their whole turn, their whole card, nullified by your two-mana instant while your board survives intact. That's not a one-for-one. When a board wipe would have killed four of your creatures, your one protection spell just two-for-one'd or three-for-one'd them.

The deeper reason protection over-performs in multiplayer: in a pod, *someone* always has the board wipe, the spot removal, the Cyclonic Rift. You're not playing against one deck's threats, you're playing against three decks' worth of answers aimed at whoever looks scariest — and if you're winning, that's you. A protection spell is insurance against the table's combined removal, bought for two or three mana. If you've ever lost a deck-defining game to a single wrath you saw coming and couldn't stop, you already understand why this category matters. For the flip side of this conversation, our [best board wipes guide](/blog/magic-the-gathering/best-board-wipes-mtg) covers the cards you're protecting against.

## The four things you're actually protecting against

Not all protection is the same, and the most common deckbuilding mistake is running four cards that all answer the same threat while leaving you wide open to the other three. The four things that kill your board:

**Targeted removal** — Swords to Plowshares, Beast Within, a counterspell on your key cast. Beaten by hexproof, "can't be targeted," or redirection (Deflecting Swat changes the target).

**Mass destruction (board wipes)** — Wrath of God, Blasphemous Act, Toxic Deluge. Beaten by indestructible, phasing, or flicker/blink that dodges the wipe entirely.

**Mass bounce** — Cyclonic Rift, Evacuation, River's Rebuke. Indestructible does *nothing* here. You need phasing (Teferi's Protection, Clever Concealment) or instant-speed flicker that resets the permanents under your control.

**Sacrifice and -X/-X effects** — edicts, Toxic Deluge, Massacre Girl. Indestructible doesn't stop "sacrifice a creature" or toughness reduction; you need hexproof, phasing, or protection-from-everything.

Memorize this, because it's the whole reason "best protection spell" isn't a single answer. Teferi's Protection beats all four. Indestructible-only effects (Flawless Maneuver) beat exactly one of them. A balanced deck wants coverage across the categories, not three copies of the same effect. The [best counterspells guide](/blog/magic-the-gathering/best-counterspells-mtg) covers the proactive way to stop a wipe before it resolves — protection is what you reach for when you didn't have the counter up.

## The best protection spells, ranked

Ranked on how much they protect, how reliably, and how cheaply — weighted toward Commander, where protection is at its most valuable.

![Heroic Intervention, the two-mana green instant that gives all your permanents hexproof and indestructible until end of turn — the best green protection spell in the game.](/images/blog/magic-the-gathering/best-mtg-protection-spells/heroic-intervention.jpg)

1. **Teferi's Protection** — {2}{W}. Until your next turn, your life total can't change, you gain protection from everything, and *all permanents you control phase out.* This is the ceiling of the category and it isn't close. Phasing dodges board wipes, mass bounce, sacrifice, targeted removal, and -X/-X all at once, the protection-from-everything clause makes you untouchable, and the life-can't-change line means you can Teferi's in response to a lethal swing or even a combo kill aimed at your life total. Three mana to say "no" to almost anything. Commander-legal and a top-tier staple.
2. **Heroic Intervention** — {1}{G}. Permanents you control gain hexproof and indestructible until end of turn. The best two-mana protection spell in the game, full stop. It beats targeted removal (hexproof) and board wipes (indestructible) for two mana at instant speed, and green decks have no excuse not to run it. The only things it misses are mass bounce and edict/sacrifice effects — but for the price, the coverage is absurd.
3. **Flawless Maneuver** — {2}{W}. If you control a commander, you may cast this *without paying its mana cost.* Creatures you control gain indestructible until end of turn. A free board wipe insurance policy — in a deck running your commander, this is effectively a zero-mana "your creatures survive the wrath." It only covers destruction (not bounce, not sacrifice, not -X/-X), but at zero mana you run it anyway. One of the best free spells in Commander.
4. **Deflecting Swat** — {2}{R}. If you control a commander, you may cast it for free; choose new targets for target spell or ability. Redirection rather than prevention — point that Swords to Plowshares at someone else, redirect a Beast Within, even redirect an opponent's tutor or a counterspell. Free, flexible, and it can be a tempo blowout. The premier red protection/interaction piece. Commander-legal.
5. **Clever Concealment** — {2}{W}{W}. Convoke; any number of target nonland permanents you control phase out. A second Teferi's-style phase-out for your nonland permanents that dodges board wipes *and* mass bounce — and convoke means you can often cast it for a fraction of its mana by tapping the creatures you're protecting. The best Teferi's backup in white.
6. **Akroma's Will** — {3}{W}. Choose one (or both if you control a commander): your creatures gain flying/vigilance/double strike, *or* lifelink/indestructible/protection from each color. The "both" mode is a protect-the-board-and-win button — indestructible plus protection from every color blanks targeted removal and combat, while the offensive half can be lethal. A Commander all-star that doubles as a finisher.
7. **Boromir, Warden of the Tower** — {2}{W}. A 3/3 with vigilance that counters any free-cast spell your opponents play, and you can *sacrifice him to give your creatures indestructible.* A permanent that protects your board on demand and taxes the free-spell decks. Repeatable presence plus a built-in Flawless Maneuver makes him quietly excellent.
8. **Eerie Interlude** — {2}{W}. Exile any number of target creatures you control; return them at the next end step. Instant-speed flicker that dodges board wipes and mass bounce *and* re-triggers your enters-the-battlefield effects. A blink protection spell that does double duty — see our [flicker and blink guide](/blog/magic-the-gathering/best-mtg-flicker-blink-commander) for the full toolbox.
9. **Spellskite** — {2}. {U/P}: change a target of target spell or ability to this creature (pay with blue *or* 2 life). A repeatable redirection body, playable in *any* deck thanks to the Phyrexian mana — soak up a Lightning Bolt, a targeted removal spell, or a key ability for two life. Colorless protection that goes in every list.
10. **Tamiyo's Safekeeping** — {G}. Target permanent you control gains hexproof and indestructible until end of turn, and you gain 2 life. A one-mana single-target version of Heroic Intervention that also protects against direct life-total combos via the lifegain. The cheapest premium single-target protection in green.

![Flawless Maneuver, the white instant that costs zero mana if you control your commander and gives all your creatures indestructible — free board wipe insurance.](/images/blog/magic-the-gathering/best-mtg-protection-spells/flawless-maneuver.jpg)

## The best budget protection spells

Protection is one of the most budget-friendly categories in Magic — most of these are a dollar or two and several are bulk.

- **Heroic Intervention** — {1}{G}. Reprinted constantly, so it's cheap relative to its power. The single best budget protection card in the game.
- **Tamiyo's Safekeeping** — {G}. A one-mana hexproof-and-indestructible single-target instant with upside. Bulk price.
- **Snakeskin Veil** — {G}. Put a +1/+1 counter on a creature and give it hexproof until end of turn. A one-mana single-target answer to spot removal that even grows your creature. Pennies.
- **Eerie Interlude** — {2}{W}. The budget blink-protection package, often a dollar or less, and the ETB re-triggers add real value.
- **Spellskite** — {2}. Colorless, fits any deck, repeatable redirection. Inexpensive and universally useful.

The honest budget read: you do not need Teferi's Protection to protect a deck. Heroic Intervention plus a one-mana single-target instant plus Spellskite covers most of what a casual or mid-power deck will face, for a few dollars total.

## Single-target vs whole-board protection

The split that decides which cards belong in your deck:

**Single-target protection** (Tamiyo's Safekeeping, Snakeskin Veil, Spellskite, Deflecting Swat) is cheap, mana-efficient, and perfect for protecting one key piece — your commander, a combo enabler, a single big threat. The downside is obvious: it does nothing against a board wipe. If your deck wins through one irreplaceable creature, you want a couple of cheap single-target answers and you want them early.

**Whole-board protection** (Teferi's Protection, Heroic Intervention, Flawless Maneuver, Clever Concealment, Akroma's Will) costs more or comes with conditions, but it's what saves a go-wide token army, an aristocrats board, or anything that loses its whole game plan to a single Wrath. If you're a go-wide or token deck — see our [token generators guide](/blog/magic-the-gathering/best-mtg-token-generators-commander) — whole-board protection isn't optional, it's the card that lets the deck function.

The right mix depends on what you're protecting. A Voltron deck stacking everything onto one commander wants single-target hexproof. A go-wide deck wants Heroic Intervention and Flawless Maneuver. A combo deck wants Teferi's Protection and redirection. Build the protection package to match your win condition, not a generic "good cards" list.

## How many protection spells should you run

Here's where most lists go wrong — in both directions. Run zero and your deck is a glass cannon that dies to the first wrath. Run eight and you've turned a deck that's supposed to *win* into a deck that survives without ever closing.

The working range for a focused Commander deck: **3 to 5 protection pieces.** Lean toward the higher end (4-5) if your deck is fragile — a combo deck that needs one specific creature alive, or a go-wide deck that folds to a board wipe. Lean toward the lower end (3) if your deck is resilient and grindy, recurring its threats from the graveyard or generating value regardless of the board state. A deck that can rebuild — see the [graveyard recursion guide](/blog/magic-the-gathering/best-graveyard-recursion-commander-mtg) — needs less dedicated protection because the wrath isn't as punishing.

The trap to avoid: redundant coverage. Four indestructible-granting spells leave you completely open to Cyclonic Rift and edicts. Spread your picks across the four threat categories from earlier — one or two destruction answers, a phase-out or flicker for bounce, a hexproof piece for targeted removal. Coverage beats raw count. For how protection fits into the overall 99, our [Commander deckbuilding ratios guide](/blog/magic-the-gathering/mtg-deckbuilding-ratios) has the full breakdown.

## When to hold it and when to fire it

A protection spell in hand is worth more than one already spent — knowing this changes how you play.

- **Bluff with it.** An open white or green mana and a known protection-heavy deck deters opponents from committing a board wipe or aiming removal at you. Sometimes the spell does its job without ever being cast.
- **Don't fire it on a non-winning board.** Protecting two creatures when you're not threatening to win wastes your insurance. Save it for the wipe that would actually cost you the game, or the swing that's lethal.
- **Hold for the play that ends you.** Teferi's Protection in response to a lethal combo or alpha strike is often better than using it proactively on a wrath you could rebuild from. Read which removal you can't recover from and save protection for that.
- **Sequence around free spells.** Flawless Maneuver and Deflecting Swat cost zero with your commander out — keep your commander on the battlefield and you're holding free answers all game. Losing your commander turns these into uncastable bricks.
- **Watch the stack.** Protection is instant-speed for a reason. Let the wipe or removal go on the stack, confirm it's actually coming, *then* respond — don't tip your hand early or waste it on a fake-out.

## Quick Action Checklist

Apply this when adding protection to a deck:

- [ ] Run 3-5 protection pieces — more if your deck is fragile, fewer if it grinds and recurs
- [ ] Spread coverage across the four threats: targeted removal, board wipes, mass bounce, sacrifice/-X/-X
- [ ] Don't stack four indestructible spells — that leaves you open to Cyclonic Rift and edicts
- [ ] Teferi's Protection is the ceiling; Heroic Intervention is the best two-mana option
- [ ] Run free protection (Flawless Maneuver, Deflecting Swat) and keep your commander on the battlefield
- [ ] Match the package to your win condition: single-target for Voltron, whole-board for go-wide
- [ ] Hold protection as a bluff and a threat — an uncast answer deters the table
- [ ] Save it for the play you can't recover from, not the first creature someone points removal at`,
  faq: [
    {
      question: 'What is the best protection spell in MTG?',
      answer:
        'Teferi\'s Protection ({2}{W}) is the best protection spell in Magic. For three mana at instant speed it phases out all your permanents, makes your life total unable to change, and gives you protection from everything until your next turn — beating board wipes, mass bounce, targeted removal, sacrifice effects, and even combo kills all at once. Heroic Intervention ({1}{G}) is the best two-mana option, granting your whole board hexproof and indestructible.',
    },
    {
      question: 'How many protection spells should I run in a Commander deck?',
      answer:
        'Run 3 to 5 protection pieces in a focused Commander deck. Lean toward 4-5 if your deck is fragile — a combo deck reliant on one creature or a go-wide deck that folds to a board wipe. Lean toward 3 if your deck grinds and recurs its threats. More important than the count is spreading coverage across the four threat types so you are not running four cards that all answer the same thing.',
    },
    {
      question: 'Does indestructible protect against Cyclonic Rift?',
      answer:
        'No. Indestructible only stops effects that destroy permanents or deal lethal damage. Cyclonic Rift bounces permanents to their owners\' hands, which indestructible does nothing against. To protect against mass bounce you need phasing (Teferi\'s Protection, Clever Concealment) or instant-speed flicker like Eerie Interlude that resets your permanents under your control.',
    },
    {
      question: 'Is protection better than removal in Commander?',
      answer:
        'Often, yes. Removal trades one-for-one, which is a losing exchange against three opponents. Protection lets your own threats resolve and survive while blanking the table\'s combined answers — a single Heroic Intervention can negate a board wipe that would have killed four of your creatures, which is a two- or three-for-one in your favor. A good deck runs both, but protection is the more undervalued category.',
    },
    {
      question: 'What are the best free protection spells in MTG?',
      answer:
        'Flawless Maneuver ({2}{W}, free if you control a commander) gives your creatures indestructible, and Deflecting Swat ({2}{R}, free with a commander) redirects a target spell or ability. Both cost zero mana as long as your commander is on the battlefield, making them premier protection in white and red. Keep your commander out to hold these as free answers all game.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/best-board-wipes-mtg', anchor: 'best board wipes guide' },
    { href: '/blog/magic-the-gathering/best-counterspells-mtg', anchor: 'best counterspells guide' },
    { href: '/blog/magic-the-gathering/best-mtg-flicker-blink-commander', anchor: 'flicker and blink guide' },
    { href: '/blog/magic-the-gathering/best-mtg-token-generators-commander', anchor: 'token generators guide' },
    { href: '/blog/magic-the-gathering/mtg-deckbuilding-ratios', anchor: 'Commander deckbuilding ratios guide' },
  ],
  externalSources: [
    { url: 'https://scryfall.com/search?q=o%3Ahexproof+OR+o%3Aindestructible+f%3Acommander', title: 'Scryfall — protection spell search and legality data' },
    { url: 'https://edhrec.com/', title: 'EDHREC — Commander protection inclusion data' },
    { url: 'https://magic.wizards.com/en/rules', title: 'Wizards of the Coast — official comprehensive rules' },
  ],
  tldr:
    'Protection spells beat board wipes, bounce, and removal for two or three mana, often turning into a multi-for-one in your favor. Teferi\'s Protection ({2}{W}) is the ceiling — it phases out your whole board and makes your life total unchangeable. Heroic Intervention ({1}{G}) is the best two-mana option, and Flawless Maneuver is free with your commander out. Run 3-5 pieces and spread them across the four threats: targeted removal, board wipes, mass bounce, and sacrifice/-X/-X. Protect a winning board, not a board.',
  itemList: {
    name: 'Best MTG Protection Spells, Ranked',
    items: [
      { name: "Teferi's Protection", description: 'Phases out your whole board, locks your life total, and grants protection from everything — beats all four threat types for three mana.' },
      { name: 'Heroic Intervention', description: 'Two-mana hexproof and indestructible for all your permanents — the best-value protection spell in the game.' },
      { name: 'Flawless Maneuver', description: 'Free with your commander out; gives your creatures indestructible — zero-mana board wipe insurance.' },
      { name: 'Deflecting Swat', description: 'Free redirection of a target spell or ability with your commander out — flexible interaction and protection.' },
      { name: 'Clever Concealment', description: 'Convoke phase-out for your nonland permanents — a Teferi\'s-style answer to wipes and bounce.' },
      { name: "Akroma's Will", description: 'Indestructible plus protection from every color, with an offensive mode that doubles as a finisher.' },
      { name: 'Boromir, Warden of the Tower', description: 'A vigilant body that taxes free spells and sacrifices for board-wide indestructible on demand.' },
      { name: 'Eerie Interlude', description: 'Instant-speed flicker that dodges wipes and bounce while re-triggering your ETB effects.' },
      { name: 'Spellskite', description: 'Colorless repeatable redirection playable in any deck via Phyrexian mana.' },
      { name: "Tamiyo's Safekeeping", description: 'One-mana single-target hexproof and indestructible with a 2-life buffer against life-total combos.' },
    ],
  },
};
