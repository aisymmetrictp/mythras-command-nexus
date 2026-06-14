import type { BlogPost } from '../../blogTypes';

export const bestCommanderCombosMtg: BlogPost = {
  slug: 'best-commander-combos-mtg',
  game: 'magic-the-gathering',
  category: 'deck-guides',
  topicCluster: 'commander-combos',
  title: 'Best Two-Card Combos in Commander, Ranked',
  metaDescription:
    'The best two-card infinite combos in Commander, ranked: Thassa\'s Oracle, Mikaeus + Triskelion, Isochron Scepter, Kiki-Jiki, and the key ban-list caveats.',
  excerpt:
    "A two-card combo wins the game the turn it assembles — no board state, no combat math, just two cards and an empty stack. Here are the most reliable and iconic ones in Commander, ranked, with the legality traps that get people game-loss'd.",
  featuredImagePrompt:
    'A glowing oracle figure rising from deep ocean water with arcane blue light spiraling around an empty library, painterly Magic: The Gathering art style, sense of an inevitable game-ending spell resolving, no text',
  heroImage: '/images/blog/magic-the-gathering/best-commander-combos-mtg/thassas-oracle.jpg',
  heroImageAlt:
    "Thassa's Oracle, the blue creature whose enters-the-battlefield trigger wins the game when your library is empty — half of the format's most popular two-card combo.",
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-commander-combos-mtg/thassas-oracle.jpg',
      sourceUrl: 'https://scryfall.com/card/thb/73/thassas-oracle',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-commander-combos-mtg/mikaeus-the-unhallowed.jpg',
      sourceUrl: 'https://scryfall.com/card/cmm/173/mikaeus-the-unhallowed',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-commander-combos-mtg/isochron-scepter.jpg',
      sourceUrl: 'https://scryfall.com/card/2xm/264/isochron-scepter',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-commander-combos-mtg/kiki-jiki-mirror-breaker.jpg',
      sourceUrl: 'https://scryfall.com/card/ima/136/kiki-jiki-mirror-breaker',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
  ],
  publishDate: '2026-06-10T00:00:00.000Z',
  lastUpdated: '2026-06-10T00:00:00.000Z',
  primaryKeyword: 'best commander combos',
  secondaryKeywords: [
    'best two card combos commander',
    'mtg infinite combos commander',
    'thassa\'s oracle combo',
    'mikaeus triskelion combo',
    'isochron scepter dramatic reversal',
    'best edh combos',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-makes-a-two-card-combo-good', label: 'What makes a two-card combo good', level: 2 },
    { id: 'the-best-two-card-combos-ranked', label: 'The best two-card combos, ranked', level: 2 },
    { id: 'thassas-oracle-demonic-consultation', label: 'Thassa\'s Oracle + Demonic Consultation', level: 2 },
    { id: 'mikaeus-the-unhallowed-triskelion', label: 'Mikaeus, the Unhallowed + Triskelion', level: 2 },
    { id: 'isochron-scepter-dramatic-reversal', label: 'Isochron Scepter + Dramatic Reversal', level: 2 },
    { id: 'kiki-jiki-and-the-untap-targets', label: 'Kiki-Jiki and the untap targets', level: 2 },
    { id: 'heliod-sun-crowned-walking-ballista', label: 'Heliod, Sun-Crowned + Walking Ballista', level: 2 },
    { id: 'devoted-druid-vizier-of-remedies', label: 'Devoted Druid + Vizier of Remedies', level: 2 },
    { id: 'the-life-drain-pairs', label: 'The life-drain pairs', level: 2 },
    { id: 'combos-that-are-actually-banned', label: 'Combos that are actually banned', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `A two-card combo wins the game the turn it comes together. That's the whole appeal and the whole problem. You don't need a board, you don't need to attack, you don't need the math to work out in combat — you just need two specific cards in play (or on the stack) at the same time, and the game ends. Everyone scoops, you shuffle up.

Ranking these isn't about raw power, because almost all of them "win the game" and you can't really out-win a win. The ranking that matters is **reliability**: how cheap is it, how easy is it to assemble, how resilient is it to a single piece of interaction, and how many ways do you have to find the pieces? A combo that costs eight mana and dies to one removal spell is worse than a two-mana combo you can tutor for at instant speed, even though both "win." Every combo here is two cards, every card has been legality-checked on Scryfall, and I'll flag the ones where a piece — or the whole combo — is actually banned in Commander, because that list trips people up constantly.

## What makes a two-card combo good

Four levers, and the best combos win on most of them at once.

**Mana cost to assemble.** The cheaper the combo, the earlier it comes online and the less it telegraphs. A combo you can complete with two mana up is a different threat than one that needs you to untap with eight.

**Tutorability.** A two-card combo is really a "find these two cards" puzzle. In a color with strong tutors (black especially), you can dig for either half, which effectively turns a two-card combo into something you assemble far more consistently than its raw card count suggests.

**Resilience.** How many pieces of interaction does it take to break up? A combo that dies to a single instant-speed removal spell on one creature is fragile. A combo you can hold and deploy at instant speed, in response to a board wipe, is much harder to stop.

**Color and slot cost.** Does the combo ask you to play cards you'd want anyway, or dead weight that only does anything with its partner? Walking Ballista is a fine card on its own. A narrow combo piece that's a blank without its other half costs you more than its one slot.

> A note on tables: combos are a power-level conversation, not a moral one. In cEDH they're the point. At a casual table, dropping a turn-four infinite is a great way to never get invited back. Read the room. Everything below works — whether it *should* come down on turn four is between you and your playgroup.

## The best two-card combos, ranked

Ranked on overall reliability across the Commander power spectrum — how cheap, how findable, how hard to stop. The top of this list is what cEDH is built on; the bottom is great for a focused 75%-power deck.

1. **Thassa's Oracle + Demonic Consultation** — the most popular win in the format. Exile your library, win on the Oracle trigger. Two mana, instant-speed, deck-agnostic.
2. **Isochron Scepter + Dramatic Reversal** — infinite mana and infinite untaps with enough rocks out. The engine behind countless blue combo decks.
3. **Mikaeus, the Unhallowed + Triskelion** — infinite damage to the whole table, all on cards you cast and leave in play.
4. **Heliod, Sun-Crowned + Walking Ballista** — infinite +1/+1 counters and pings, in two colors with easy tutors.
5. **Devoted Druid + Vizier of Remedies** — infinite green mana for two cards and three total mana.
6. **Kiki-Jiki, Mirror Breaker (or Splinter Twin) + a "tap to untap" creature** — infinite hasty tokens that swing for lethal.
7. **Sanguine Bond + Exquisite Blood** — a lifegain/life-loss loop that drains the table to zero.
8. **Mindcrank + Bloodchief Ascension** — a mill-and-drain loop that decks and drains everyone at once.

The first three are the backbone of competitive Commander. The rest are excellent payoffs you can build a whole deck around. Let me break down what each actually does and where it breaks.

## Thassa's Oracle + Demonic Consultation

This is the combo you'll see more than any other, and for good reason: it's two mana, it happens at instant speed, and it doesn't care what your deck is doing.

The line: cast **Demonic Consultation** (B) naming a card that isn't in your deck — say, "Black Lotus." Consultation exiles cards from the top of your library until it hits that name, and since nothing matches, it exiles your *entire* library. Now you have zero cards left. Then you cast **Thassa's Oracle** (1U). Its enters-the-battlefield trigger checks your library, sees it's empty, and you win the game on the spot.

Why it's number one:

- **It's two mana across two cards.** You can hold up the whole combo and go off on someone else's end step, dodging sorcery-speed answers.
- **Demonic Consultation is also a real tutor.** Need any card? Name it, pay 1 life per card revealed, and put it in your hand. The card isn't a dead combo piece — it's flexible.
- **Tainted Pact does the same job.** If you want redundancy, Tainted Pact (1B) exiles your library the same way (it stops at a duplicate, which a singleton Commander deck never has), so you effectively run two copies of half the combo.

The catch: the Oracle's trigger has to *resolve* with an empty library. If someone responds to the Oracle by making you draw a card, the trigger sees a non-empty library and does nothing — and you're now sitting at zero cards, one draw from decking yourself out. It folds to a counter on either piece, too. But two mana for "I win" is the gold standard, and that's why it's the format's most-played combo.

## Mikaeus, the Unhallowed + Triskelion

![Mikaeus, the Unhallowed, the black legendary whose undying grants creatures a free return-to-the-battlefield loop that powers the Triskelion combo.](/images/blog/magic-the-gathering/best-commander-combos-mtg/mikaeus-the-unhallowed.jpg)

This one is pure board-presence: both halves are creatures you cast and leave in play, which makes it harder to interrupt than a one-shot spell combo.

**Mikaeus, the Unhallowed** gives your other non-Human creatures undying — when they die, they come back with a +1/+1 counter (as long as they had none). **Triskelion** enters with three +1/+1 counters and can remove a counter to deal 1 damage anywhere.

The loop: ping with Triskelion three times to dump its counters (deal three damage), then remove the last counter to deal lethal-adjacent damage — actually, the clean version is: remove all three counters dealing damage, Triskelion now has zero counters and dies as a state-based action, Mikaeus's undying brings it back with one +1/+1 counter. Remove that counter to deal 1 damage; it has zero counters again; it dies; undying returns it with a counter. Repeat forever, dealing infinite damage split however you like across all opponents.

Why it's strong:

- **Both pieces are permanents.** Nobody can counter "the combo" — they have to kill a creature with the loop already going, at instant speed.
- **Mikaeus is a commander you can cast from the command zone**, so half the combo is always available. Build a mono-black or Golgari reanimator shell and you'll see both pieces constantly.
- **Triskelion has other homes.** It pairs with any "creatures you control get undying"-style effect.

The catch: Mikaeus only grants undying to **non-Human** creatures, and Triskelion is an artifact creature (not a Human), so it qualifies — but double-check any substitute you try. And because both pieces are creatures, the combo eats a lot of incidental removal. Mikaeus dying mid-loop stops everything.

## Isochron Scepter + Dramatic Reversal

![Isochron Scepter, the artifact that imprints an instant and recasts it each turn — the engine half of the Dramatic Reversal infinite-mana combo.](/images/blog/magic-the-gathering/best-commander-combos-mtg/isochron-scepter.jpg)

The premier blue infinite-mana engine, and the most "deckbuilding-dependent" combo on this list — it needs a little setup, but the payoff is unbounded.

**Isochron Scepter** (2) enters and you imprint an instant with mana value 2 or less — here, **Dramatic Reversal** (1U), which untaps all nonland permanents you control. Now, tap the Scepter (2 mana, paid by your mana rocks) to copy and cast Dramatic Reversal, which untaps... all your mana rocks. If your nonland mana sources produce **more than the 2 mana** it costs to activate the Scepter, you net positive every loop — which means **infinite mana**.

That infinite mana does nothing by itself, so you need a payoff: a mana sink like a big X-spell, an outlet like Walking Ballista or a "draw your deck" effect, or, most commonly in cEDH, you generate infinite mana *and* infinite untaps, then dump it into a wincon. With Dockside-style treasure swarms it's trivial; even with three or four basic mana rocks (Sol Ring alone gets you most of the way), you're in business.

Why it's a top-tier combo:

- **It's resilient and repeatable.** Once the Scepter has Reversal imprinted, you can go off at instant speed on any turn you have the rocks.
- **Both halves are individually useful.** The Scepter can imprint any cheap instant (a counter, a removal spell), and Dramatic Reversal is a fine combat trick / mana-untap effect on its own.

The catch: you need enough non-land mana on board to net positive, so it's the combo that asks the most of your mana base. And the Scepter is an artifact — artifact removal breaks it in half.

## Kiki-Jiki and the untap targets

![Kiki-Jiki, Mirror Breaker, the red legendary that taps to make a hasty copy of a creature — half of the classic infinite-token combo.](/images/blog/magic-the-gathering/best-commander-combos-mtg/kiki-jiki-mirror-breaker.jpg)

This is a whole *family* of two-card combos that all do the same thing: make infinite hasty creature tokens, then attack for lethal (or sacrifice them to an outlet).

**Kiki-Jiki, Mirror Breaker** (2RRR) taps to create a token copy of a target nonlegendary creature, and that copy has haste. Pair it with a creature whose enters-the-battlefield ability untaps Kiki-Jiki, and you loop:

- **Kiki-Jiki + Zealous Conscripts** — Conscripts' ETB untaps a target; untap Kiki, copy Conscripts again, repeat. Infinite hasty Conscripts, plus you can steal each opponent's stuff along the way.
- **Kiki-Jiki + Deceiver Exarch** — Exarch can untap a permanent on ETB; untap Kiki, copy Exarch, repeat. Infinite 1/4s.
- **Splinter Twin + Deceiver Exarch (or Pestermite)** — same loop, but Splinter Twin is an aura that gives the enchanted creature "tap: make a hasty copy." Twin's a tidy two-card package that's also infamous from its Modern days (it was banned there; it's perfectly legal in Commander).

Why it's good: it's a true win — infinite attackers with haste means lethal this turn — and red/blue both have the partners. The pieces double as value (Conscripts steals a thing; Exarch taps down a blocker).

The catch: Kiki-Jiki is a **legendary** creature, so it dies to legend-rule shenanigans and can't copy itself, and the whole thing folds to one instant-speed creature-removal spell with the loop assembled. It's also five colored pips across the two cards, so it's slower than the spell-based combos up top.

## Heliod, Sun-Crowned + Walking Ballista

A two-color combo (white plus colorless) that's beloved because both pieces are genuinely good cards on their own.

**Heliod, Sun-Crowned** gives you lifegain payoffs and can put a +1/+1 counter on a creature whenever you gain life. **Walking Ballista** enters with X +1/+1 counters and can remove a counter to deal 1 damage. Give Walking Ballista **lifelink** (Heliod can grant it for 1 mana), then:

- Remove a counter from Ballista to ping something for 1.
- That 1 damage has lifelink, so you gain 1 life.
- Heliod sees you gained life and puts a +1/+1 counter back on Ballista.
- Net counters: even. Repeat for infinite pings — infinite damage to the whole table.

Why it ranks high: it's only two cards in two colors, **Walking Ballista is a staple you'd run anyway**, and Heliod is a legendary you can run as your commander, so half the combo lives in the command zone. White also has good tutors for artifacts and creatures to find Ballista.

The catch: Ballista needs at least one counter on it to start the loop (so it has to enter for X≥1, i.e., you need 2+ mana into it), and Heliod's lifelink grant costs 1 mana. Kill either piece with the loop going and it stops.

## Devoted Druid + Vizier of Remedies

The cheapest infinite-mana combo in green, and a favorite of midrange Commander decks that want a mana engine without going full cEDH.

**Devoted Druid** (1G) taps for G, and can put a -1/-1 counter on itself to untap. **Vizier of Remedies** (1G) says the next -1/-1 counter that would be put on a creature you control... isn't. So with both out: tap Druid for G, untap it by "adding a -1/-1 counter" that Vizier prevents, tap again for another G, untap again, forever. **Infinite green mana.**

Why it's a great inclusion:

- **Three mana, two cards, both green.** It's the most color-efficient infinite-mana combo on the list.
- **Easy to find.** Green has excellent creature tutors, and both pieces are creatures, so a single Chord of Calling or Eldritch Evolution can grab a half.
- **The mana goes anywhere.** Dump it into an X-spell, a Walking Ballista, or a "draw your deck" engine.

The catch: it's infinite *colored mana*, not a win by itself, so you need an outlet. And Devoted Druid is a one-toughness creature — it dies to a stiff breeze, and the combo with it.

## The life-drain pairs

Two classic "the whole table loses" loops that are slower and more telegraphed than the combos above, but devastating in the right deck.

**Sanguine Bond + Exquisite Blood.** Sanguine Bond: when you gain life, target opponent loses that much. Exquisite Blood: when an opponent loses life, you gain that much. Trigger either one once — gain a single point of life, or make any opponent lose a single point — and the two enchantments feed each other in an infinite loop that drains every opponent to zero. It's six mana across two enchantments, so it's not fast, but in a lifegain or Vampire deck you're assembling it anyway, and enchantments dodge creature removal.

**Mindcrank + Bloodchief Ascension.** Mindcrank: whenever an opponent loses life, they mill that many cards. Bloodchief Ascension (once it has three quest counters and is "active"): whenever a card goes to an opponent's graveyard, they lose 2 life and you gain 2. Deal any damage to a charged-up Ascension player and the loop spins: they lose life → they mill → cards hit the graveyard → they lose 2 more → mill more → forever. It mills and drains the table out. The cost is Ascension needs to get going first (three counters), so it's the slowest entry here, but it's a brutal blue/black package.

These rank lower purely on speed and setup — both are "win next turn" rather than "win right now" — but they're resilient (enchantments) and run in decks that want the pieces anyway.

## Combos that are actually banned

This is the section people skip and then get a game-loss for. Some famous two-card combos use a piece that is **banned in Commander**, which means the combo is illegal in the format even though every other format might allow it.

- **Flash + Protean Hulk is illegal in Commander — Flash is banned.** This is the big one. The old cEDH line (cast Flash to cheat Protean Hulk in, sacrifice it, fetch a winning creature package) does not work because **Flash itself is on the Commander ban list**. Protean Hulk is legal; Flash is not. Don't sleeve up Flash for a Commander deck.
- **Anything relying on Dockside Extortionist is now ban-affected.** Dockside Extortionist is **banned in Commander** as of the September 2024 update. Older Isochron/Dramatic Reversal primers lean on Dockside to generate the rocks for infinite mana — it still works as a *concept* with other rocks, but you can't run Dockside itself anymore.
- **Combos using cards banned for other reasons.** The Commander ban list is its own thing, separate from every other format. A card being legal in Legacy or Modern tells you nothing about Commander. Before you build any combo, check **each piece** on Scryfall's legality panel or the official banned list.

The rule: a combo is only as legal as its least-legal card. One banned piece kills the whole line. The cards in the ranked list above are all currently Commander-legal as of this writing — but ban announcements happen a few times a year, so re-check before a competitive event.

## Quick Action Checklist

Use this when slotting a combo into a Commander deck:

- [ ] Check every piece on Scryfall — a combo is only legal if both halves are Commander-legal
- [ ] Do NOT run Flash + Protean Hulk; Flash is banned in Commander
- [ ] Don't build around Dockside Extortionist — it's banned as of September 2024
- [ ] For the most reliable win, run Thassa's Oracle + Demonic Consultation (add Tainted Pact for redundancy)
- [ ] Want an infinite-mana engine? Isochron Scepter + Dramatic Reversal (blue) or Devoted Druid + Vizier of Remedies (green)
- [ ] Prefer permanent-based combos (Mikaeus + Triskelion, Heliod + Ballista) if your meta has lots of counterspells
- [ ] Pick pieces that are good cards on their own (Walking Ballista, Sol Ring as a rock) so they aren't dead draws
- [ ] Read the table — a turn-four infinite is cEDH normal and casual-pod poison`,
  faq: [
    {
      question: 'What is the best two-card combo in Commander?',
      answer:
        "Thassa's Oracle + Demonic Consultation is the most popular and reliable two-card win in Commander. You cast Demonic Consultation naming a card not in your deck, which exiles your entire library, then cast Thassa's Oracle, whose enters-the-battlefield trigger wins the game when your library is empty. It costs only two mana across the two cards, happens at instant speed, and works in any blue-black deck regardless of theme.",
    },
    {
      question: 'Is Flash and Protean Hulk legal in Commander?',
      answer:
        'No. Flash + Protean Hulk is illegal in Commander because Flash is on the Commander banned list. Protean Hulk itself is legal, but you cannot cast Flash, so the classic Flash-Hulk combo line does not work in the format. Always check each piece of a combo on Scryfall or the official banned and restricted list before building, because the Commander ban list is separate from every other format.',
    },
    {
      question: 'How does the Mikaeus + Triskelion combo work?',
      answer:
        "Mikaeus, the Unhallowed gives your non-Human creatures undying (they return with a +1/+1 counter when they die without one). Triskelion enters with three +1/+1 counters and can remove a counter to deal 1 damage. Remove all of Triskelion's counters to deal damage; with no counters it dies, and Mikaeus's undying returns it with one counter. Remove that counter for 1 more damage, it dies again, undying returns it — repeat for infinite damage split across all opponents. Both pieces are creatures you leave in play, which makes it hard to interrupt.",
    },
    {
      question: 'What does Isochron Scepter + Dramatic Reversal do?',
      answer:
        'Isochron Scepter imprints Dramatic Reversal (which untaps all your nonland permanents). Activating the Scepter for 2 mana recasts Dramatic Reversal, untapping your mana rocks. If your rocks produce more than 2 mana, every loop nets you mana — giving you infinite mana and infinite untaps. You then dump that mana into a payoff like a giant X-spell or Walking Ballista. It is the premier blue infinite-mana engine but needs enough non-land mana on board to net positive.',
    },
    {
      question: 'Are infinite combos allowed at casual Commander tables?',
      answer:
        'They are legal under the rules, but whether they belong at a given table is a power-level and etiquette question. In competitive Commander (cEDH), fast two-card combos are the entire point. At a casual pod, dropping a turn-four infinite often feels bad for everyone and can sour the game. The combos themselves are fine; match their speed to your playgroup, and talk power level before the game if you are not sure.',
    },
    {
      question: 'What is the cheapest infinite-mana combo in Commander?',
      answer:
        'Devoted Druid + Vizier of Remedies is the most mana-efficient: three total mana across two green creatures for infinite green mana. Devoted Druid taps for green and untaps by adding a -1/-1 counter to itself, which Vizier of Remedies prevents, so you can untap and tap it forever. You still need a payoff to spend the mana on, such as a big X-spell or Walking Ballista, but no other infinite-mana combo costs less to assemble.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/how-to-build-a-commander-deck', anchor: 'how to build a Commander deck' },
    { href: '/blog/magic-the-gathering/best-tutors-commander-mtg', anchor: 'best tutors in Commander' },
    { href: '/blog/magic-the-gathering/best-counterspells-mtg', anchor: 'best counterspells to protect your combo' },
    { href: '/blog/magic-the-gathering/best-mana-rocks-commander-mtg', anchor: 'best mana rocks for Commander' },
  ],
  externalSources: [
    { url: 'https://magic.wizards.com/en/banned-restricted-list', title: 'Wizards of the Coast — official banned and restricted list' },
    { url: 'https://scryfall.com/', title: 'Scryfall — card legality and Oracle text lookup' },
    { url: 'https://commanderspellbook.com/', title: 'Commander Spellbook — searchable combo database' },
  ],
  tldr:
    "The most reliable two-card combo in Commander is Thassa's Oracle + Demonic Consultation: exile your library, win on the Oracle's trigger for two mana at instant speed. Other top combos are Isochron Scepter + Dramatic Reversal (infinite mana), Mikaeus + Triskelion (infinite damage), Heliod + Walking Ballista, and Devoted Druid + Vizier of Remedies. Always legality-check each piece — Flash (for Flash + Protean Hulk) and Dockside Extortionist are banned in Commander.",
  itemList: {
    name: 'Best Two-Card Combos in Commander, Ranked',
    items: [
      { name: "Thassa's Oracle + Demonic Consultation", description: 'Exile your library, win on the Oracle trigger. Two mana, instant-speed, the format\'s most-played combo.' },
      { name: 'Isochron Scepter + Dramatic Reversal', description: 'Imprint Dramatic Reversal, untap your rocks for net-positive mana — infinite mana and untaps.' },
      { name: 'Mikaeus, the Unhallowed + Triskelion', description: 'Undying loops Triskelion\'s pings for infinite damage to the whole table, all on permanents.' },
      { name: 'Heliod, Sun-Crowned + Walking Ballista', description: 'Lifelink pings feed Heliod\'s counters back onto Ballista for infinite damage. Two strong stand-alone cards.' },
      { name: 'Devoted Druid + Vizier of Remedies', description: 'Untap the Druid endlessly for infinite green mana. The cheapest infinite-mana combo at three total mana.' },
      { name: 'Kiki-Jiki, Mirror Breaker + Zealous Conscripts', description: 'Copy a creature that untaps Kiki for infinite hasty tokens and a lethal swing. Splinter Twin does the same.' },
      { name: 'Sanguine Bond + Exquisite Blood', description: 'A lifegain/life-loss loop that drains every opponent to zero. Slow but resilient enchantments.' },
      { name: 'Mindcrank + Bloodchief Ascension', description: 'A mill-and-drain loop that decks and drains the whole table once Ascension is charged.' },
    ],
  },
};
