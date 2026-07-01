import type { BlogPost } from '../../blogTypes';

export const bestMtgReanimationSpells: BlogPost = {
  slug: 'best-mtg-reanimation-spells',
  game: 'magic-the-gathering',
  category: 'card-guides',
  topicCluster: 'commander-staples',
  tags: ['commander', 'reanimator', 'graveyard', 'black', 'combo'],
  title: 'Best Reanimation Spells in MTG Commander, Ranked',
  metaDescription:
    'The best reanimation spells in MTG Commander, ranked. Reanimate, Animate Dead, Necromancy, Living Death — cheat huge creatures into play and break the curve.',
  excerpt:
    'One mana. That is what it costs to put a ten-mana creature onto the battlefield with Reanimate. Reanimation is the most efficient cheat in Commander, and here are the spells that do it best, ranked, with the enablers that make them live.',
  featuredImagePrompt:
    'A robed necromancer dragging a colossal armored creature up out of a black graveyard on chains of dark mana, embers and bone dust swirling, painterly Magic: The Gathering art style, no text',
  heroImage: '/images/blog/magic-the-gathering/best-mtg-reanimation-spells/reanimate.jpg',
  heroImageAlt:
    "Reanimate, the one-mana black sorcery that puts any creature card from a graveyard onto the battlefield for life equal to its mana value.",
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-mtg-reanimation-spells/reanimate.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-reanimation-spells/animate-dead.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-reanimation-spells/necromancy.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-reanimation-spells/living-death.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
  ],
  publishDate: '2026-06-30T00:00:00.000Z',
  lastUpdated: '2026-06-30T00:00:00.000Z',
  primaryKeyword: 'best reanimation spells mtg',
  secondaryKeywords: [
    'best reanimation spells commander',
    'mtg reanimator commander',
    'best cheat into play spells mtg',
    'reanimate vs animate dead',
    'commander reanimator staples',
    'best mtg graveyard reanimation',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'the-one-mana-cheat-that-breaks-the-curve', label: 'The one-mana cheat that breaks the curve', level: 2 },
    { id: 'reanimation-is-not-recursion', label: 'Reanimation is not recursion', level: 2 },
    { id: 'the-best-reanimation-spells-ranked', label: 'The best reanimation spells, ranked', level: 2 },
    { id: 'single-target-cheats', label: 'Single-target cheats', level: 3 },
    { id: 'mass-and-symmetric-reanimation', label: 'Mass and symmetric reanimation', level: 3 },
    { id: 'the-enablers-that-make-it-work', label: 'The enablers that make it work', level: 2 },
    { id: 'how-many-reanimation-spells-to-run', label: 'How many reanimation spells to run', level: 2 },
    { id: 'playing-around-graveyard-hate', label: 'Playing around graveyard hate', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `One mana. That's the entire cost of putting a ten-mana creature onto the battlefield with Reanimate — you lose some life, but you skip the other nine mana and every turn it would've taken to get there. No other card-advantage engine in Commander bends the game like that. A ramp spell moves you one land ahead. A tutor finds one card. Reanimation takes the single biggest, dumbest, most unfair creature you own, drops it in the bin for free, and yanks it back into play years before you were supposed to have it.

That's why reanimator is one of the oldest and most feared archetypes in the format. It doesn't try to win the fair game — it refuses to play the fair game at all. What follows is a ranked list of the best reanimation spells in Commander, every card legality-checked against Scryfall, plus the enablers that turn a dead one-mana sorcery into a turn-three haymaker. If you want the return-to-hand value side of the graveyard instead, that lives in our [graveyard recursion guide](/blog/magic-the-gathering/best-graveyard-recursion-commander-mtg) — this post is strictly about cheating creatures directly onto the battlefield.

## The one-mana cheat that breaks the curve

Here's the math that makes reanimator terrifying. A "fair" Commander deck casts its threats. If your bomb costs nine, you either ramp to nine or you wait until turn seven or eight and hope nobody killed you first. Reanimator ignores the entire cost line. You discard the nine-drop on turn two, cast a one-mana reanimation spell, and now there's a nine-mana creature swinging while everyone else is still playing mana rocks.

The falsifiable claim, if you want one: a turn-two Reanimate onto a discarded Griselbrand — a 7/7 flying creature that reads "Pay 7 life: Draw seven cards" — lets you draw fourteen cards on turn two for the price of some life, and that's frequently game over before the pod has untapped four lands. That's not a value play. That's a different game speed entirely.

The trade you're making is real, though. Reanimation is a two-card combo: you need the reanimation spell *and* a fat target already in your graveyard. Draw one without the other and you're holding half a play. The whole art of the archetype is making those two halves show up together and reliably enough that you're not just durdling with a dead card in hand.

## Reanimation is not recursion

Players smash these two together constantly, and the distinction actually matters for deckbuilding.

**Recursion** (regrowth) returns a card to your *hand*. You still have to pay its mana cost to recast it. Eternal Witness, Regrowth, that whole family. It's flexible — grab any card type — but you're paying twice.

**Reanimation** puts a creature card directly onto the *battlefield*, skipping the mana cost entirely. That skip is the whole point. It's why reanimation is explosive and recursion is grindy. The catch: reanimation only ever targets creatures, and it needs the target in the graveyard first. You can't reanimate a counterspell or a land.

So the archetypes diverge. A value/midrange deck wants a couple of cheap regrowth effects for flexibility. A reanimator deck is built backwards: pick the two or three unfair creatures you want to cheat out, load up on ways to bin them, and run a stack of reanimation spells to drag them back. The reanimation spells below are the drag-them-back half. The [best tutors in Commander](/blog/magic-the-gathering/best-tutors-commander-mtg) help you assemble both halves, and if you want a body that buys back your bombs on a loop instead of a burst, look at [repeatable recursion engines](/blog/magic-the-gathering/best-graveyard-recursion-commander-mtg).

## The best reanimation spells, ranked

Ranked on power and reliability across the decks that actually want to cheat creatures into play. Every card here is legal in Commander as of this writing.

![Animate Dead, the two-mana black Aura that returns a creature card from a graveyard to the battlefield with -1/-0.](/images/blog/magic-the-gathering/best-mtg-reanimation-spells/animate-dead.jpg)

### Single-target cheats

1. **Reanimate** — B. The most efficient reanimation spell ever printed. One mana, put target creature card from *any* graveyard onto the battlefield under your control, lose life equal to its mana value. "Any graveyard" is the sleeper clause: you can steal the bomb an opponent just milled or discarded. The life loss is genuinely a downside on a huge target, but you're usually winning before it matters. This is the number-one reanimation spell in the format, full stop.
2. **Animate Dead** — 1B. Two mana, no life cost, returns a creature from any graveyard as an Aura that gives it -1/-0. That -1/-0 is almost always irrelevant, and skipping the life payment makes it strictly friendlier than Reanimate on the biggest targets. It's an enchantment, so it dodges creature removal and eats graveyard-hate windows differently. Run it right alongside Reanimate — the redundancy is the point.
3. **Necromancy** — 2B. Three mana, and the flexibility monster of the group. You may cast it as though it had flash; do that at instant speed and the creature gets sacrificed at the next cleanup, but you can flash in a blocker or an end-step haymaker and untap with it if you cast it on your own turn. It returns a creature from any graveyard and, like Animate Dead, becomes an Aura. The instant-speed option is what pushes it into cEDH shells.
4. **Goryo's Vengeance** — 1B. Two mana, instant speed, returns a *legendary* creature from your graveyard with haste — then exiles it at the next end step. That "exile at end step" clause looks like a drawback until you realize the best targets (Griselbrand, huge Eldrazi with cast triggers, creatures that win on ETB) do their damage the moment they land. It's the premier fast-combo reanimation spell.
5. **Persist** — 1B. Two mana, returns a *nonlegendary* creature from your graveyard with a -1/-1 counter. The nonlegendary restriction stings for commander targets, but for a deck full of nonlegendary bombs it's a clean, cheap two-mana reanimation spell with no life cost. A newer role-player that's quietly excellent.
6. **Unburial Rites** — 4B. Five mana feels expensive next to a one-mana Reanimate, but Unburial Rites has flashback for 3W, so you can hard-cast it once and then *discard it and flash it back* for a second reanimation. In a mill/self-discard shell it's effectively two reanimation spells stapled together, and it's a big reason white-black reanimator decks exist.
7. **Victimize** — 2B. Three mana: sacrifice a creature, return *two* creature cards from your graveyard to the battlefield tapped. Turn one small creature into two big ones — enormous swing, and it plays beautifully with creatures that have death or enter triggers. The "tapped" clause means no immediate attack, but the two-for-one is worth it.

### Mass and symmetric reanimation

![Living Death, the five-mana black sorcery that has every player exile creatures from their graveyard, sacrifice their board, and return the exiled creatures to play.](/images/blog/magic-the-gathering/best-mtg-reanimation-spells/living-death.jpg)

8. **Living Death** — 3BB. Five mana, and the archetype-defining bomb. Every player exiles all creatures from their graveyard, sacrifices all creatures they control, then returns the exiled ones. Dump your hand of fatties into the bin, keep your board thin, cast Living Death, and swing the entire creature economy of the table onto your side of the board. It's symmetric on paper and lopsided in practice when you build for it.
9. **Exhume** — 1B. Two mana, each player puts a creature card from their graveyard onto the battlefield. Symmetric, so your opponents get one too — but you paid two mana to cheat out a game-ender and they got a random dork. In a deck where your bin is stacked and theirs isn't, the symmetry is a formality. Cheap, fast, and a real cEDH consideration.
10. **Chainer, Nightmare Adept** — 2BR. Not a spell, a commander-grade *engine*: discard a card to cast a creature from your graveyard once per turn, and anything you didn't cast from hand gets haste. That's a reanimation outlet, a discard outlet, and a haste enabler on one legendary body. Build a Rakdos deck around him and every turn is a fresh reanimation.

Past the top ten, the format is deep with narrower options — Dance of the Dead, Corpse Dance, Dread Return, Balthor the Defiled, Bruna-style tricks — that earn slots in the specific shells built to abuse them.

## The enablers that make it work

A reanimation spell with an empty graveyard is a blank card. The enablers are half the archetype, and skimping on them is the number-one reason home-brew reanimator decks stall out.

- **Discard outlets.** Faithless Looting, Entomb (the best — it *searches* your library for the exact creature and puts it straight in the bin), Careful Study, and any "discard a card" ability. Entomb plus Reanimate is the classic two-card, two-mana kill.
- **Self-mill.** Buried Alive, Stitcher's Supplier, and mill effects fill the yard in bulk, giving you targets and enabling threshold/delve as a bonus.
- **Sacrifice/free targets.** Creatures that want to die (or come back) let you loop, and Victimize-style spells turn a token into a bomb.
- **Haste.** A reanimated attacker that can't swing until next turn gives the table a full rotation to answer it. Chainer, or any haste anthem, closes that window.

The tightest builds run a small, redundant set of enablers so that any opening hand with a reanimation spell also has a way to get a target into the graveyard. If you're new to assembling these pieces, our [how to build a Commander deck](/blog/magic-the-gathering/how-to-build-a-commander-deck) walkthrough covers the ratios, and the [best black cards](/blog/magic-the-gathering/best-black-cards-magic-the-gathering) rundown lists more of the discard and tutor pieces that feed this plan.

## How many reanimation spells to run

There's no universal count, but the framework is clear.

**Dedicated reanimator: build the whole shell around it.** Six to ten reanimation-and-enabler pieces, a tight core of two or three fat payoffs, and enough card selection to find both halves. Here reanimation isn't a package — it's the deck's entire game plan.

**Reanimation as a subtheme: three to five spells.** A black midrange deck that happens to run big creatures can slot Reanimate, Animate Dead, and one mass effect as a value option without committing to the full archetype. You're not comboing off — you're just occasionally cheating out your best creature.

**Fair decks: one or two, or none.** If you win by casting your threats honestly, a single Reanimate as insurance against a board wipe is fine. More than that and you're building toward an archetype you're not actually playing.

The trap is running reanimation spells with nothing worth reanimating. If your fattest creature is a six-drop that does nothing special on entry, you don't have a reanimator deck — you have a slightly-faster-than-fair deck. Reanimation is only as good as the best target in your bin, so the payoffs come first and the reanimation spells come second.

## Playing around graveyard hate

Reanimator has one glass jaw, and everybody at a high-power table knows it: the graveyard is a public zone anyone can attack. A single Rest in Peace, Bojuka Bog, or Soul-Guide Lantern can exile your target the instant you telegraph it, and your one-mana Reanimate becomes a one-mana do-nothing.

How to keep your plan alive:

- **Don't set up a turn early.** Discard-and-reanimate in the *same* turn wherever possible so there's no window for an opponent to exile the target in between.
- **Value instant-speed pieces.** Necromancy, Goryo's Vengeance, and Corpse Dance let you reanimate in response to a graveyard wipe or on the end step before your turn, shrinking the window.
- **Keep a backup plan.** If reanimation is your *only* line, one Rest in Peace ends your game. Pair it with a fair way to win so hate slows you instead of stopping you.
- **Bait it.** At competitive tables, an early cheap creature in the bin can draw out the graveyard hate before your real target hits it.

The takeaway: reanimation is the most explosive card advantage in Commander and the most fragile. Respect that a one-mana exile effect can undo your whole turn, build in a second half to every play, and you'll cheat out game-enders while the fair decks are still counting lands. For the mirror problem of stopping *other* people's unfair plays, see the [best counterspells](/blog/magic-the-gathering/best-counterspells-mtg) and [best removal spells](/blog/magic-the-gathering/best-removal-spells-mtg) guides.

## Quick Action Checklist

Apply this when adding a reanimator package to a Commander deck:

- [ ] Reanimate and Animate Dead are the two-mana floor — run both for redundancy
- [ ] Add Necromancy or Goryo's Vengeance if you want instant-speed / fast-combo reach
- [ ] Pick your payoffs first: creatures that win on entry or attack, not just big vanillas
- [ ] Run enough enablers (Entomb, Buried Alive, discard outlets) that every hand can bin a target
- [ ] Consider Living Death or Victimize for a mass/two-for-one blowout in a dedicated shell
- [ ] Discard-and-reanimate in the same turn to dodge graveyard-hate windows
- [ ] Keep a backup win so a single Rest in Peace doesn't end your game
- [ ] Double-check Commander legality on Scryfall before sleeving anything up`,
  faq: [
    {
      question: 'What is the best reanimation spell in MTG Commander?',
      answer:
        'Reanimate is the best reanimation spell in the format — one mana to put any creature card from any graveyard onto the battlefield, losing life equal to its mana value. Animate Dead is a nearly-as-good second at two mana with no life cost, and most reanimator decks run both for redundancy. For instant-speed or fast-combo lines, Necromancy and Goryo\'s Vengeance are the top picks.',
    },
    {
      question: 'What is the difference between Reanimate and Animate Dead?',
      answer:
        'Reanimate is a one-mana sorcery that puts a creature onto the battlefield and makes you lose life equal to its mana value. Animate Dead is a two-mana Aura that does the same thing with no life cost but gives the creature -1/-0. Reanimate is faster and cheaper; Animate Dead is friendlier on giant targets because you skip the life payment, and being an enchantment it interacts differently with removal. Run both.',
    },
    {
      question: 'Do I need creatures in my graveyard to reanimate?',
      answer:
        'Yes. Reanimation spells only work on creature cards that are already in a graveyard, so a reanimator deck needs enablers — discard outlets like Faithless Looting, tutors-to-graveyard like Entomb, and self-mill like Buried Alive — to put a fat target into the bin first. A reanimation spell with an empty graveyard is a blank card, which is why enablers are half the archetype.',
    },
    {
      question: 'How do I protect a reanimator deck from graveyard hate?',
      answer:
        'Discard your target and reanimate it in the same turn so there is no window for an opponent to exile it with Rest in Peace, Bojuka Bog, or Soul-Guide Lantern. Value instant-speed reanimation like Necromancy and Goryo\'s Vengeance so you can respond to a graveyard wipe, and keep a fair backup win condition so a single piece of graveyard hate slows you rather than stopping you outright.',
    },
    {
      question: 'How many reanimation spells should I run in Commander?',
      answer:
        'A dedicated reanimator deck runs six to ten reanimation-and-enabler pieces built around a tight core of two or three payoffs. A black midrange deck using reanimation as a subtheme wants three to five spells. Fair decks run one or two at most as insurance. The key rule is to only run reanimation if you have creatures worth cheating into play — the payoffs come first.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/best-graveyard-recursion-commander-mtg', anchor: 'best graveyard recursion in Commander' },
    { href: '/blog/magic-the-gathering/best-tutors-commander-mtg', anchor: 'best tutors in Commander' },
    { href: '/blog/magic-the-gathering/how-to-build-a-commander-deck', anchor: 'how to build a Commander deck' },
    { href: '/blog/magic-the-gathering/best-black-cards-magic-the-gathering', anchor: 'best black cards guide' },
    { href: '/blog/magic-the-gathering/best-counterspells-mtg', anchor: 'best counterspells in Commander' },
  ],
  externalSources: [
    { url: 'https://scryfall.com/search?q=o%3A%22onto+the+battlefield%22+t%3Acreature+f%3Acommander', title: 'Scryfall — reanimation spell search and legality data' },
    { url: 'https://edhrec.com/', title: 'EDHREC — Commander reanimator inclusion data' },
    { url: 'https://magic.wizards.com/en/banned-restricted-list', title: 'Wizards of the Coast — official banned and restricted list' },
  ],
  tldr:
    "Reanimation cheats big creatures directly onto the battlefield from the graveyard, skipping their mana cost, which makes it the most explosive card advantage in Commander. Reanimate and Animate Dead are the two-mana floor; Necromancy and Goryo's Vengeance add instant-speed reach; Living Death and Victimize offer mass or two-for-one blowouts. Run enablers to fill your graveyard, pick payoffs that win on entry, and play around graveyard hate by discarding and reanimating in the same turn.",
  itemList: {
    name: 'Best Reanimation Spells in MTG Commander, Ranked',
    items: [
      { name: 'Reanimate', description: 'One-mana black sorcery that puts any creature from any graveyard onto the battlefield for life. The most efficient reanimation ever printed.' },
      { name: 'Animate Dead', description: 'Two-mana Aura that reanimates with no life cost and a token -1/-0. The redundant partner to Reanimate.' },
      { name: 'Necromancy', description: 'Three-mana reanimation with an instant-speed flash option, pushing it into cEDH shells.' },
      { name: "Goryo's Vengeance", description: 'Two-mana instant that reanimates a legendary creature with haste, then exiles it — the premier fast-combo reanimation spell.' },
      { name: 'Persist', description: 'Two-mana sorcery that reanimates a nonlegendary creature with a -1/-1 counter and no life cost.' },
      { name: 'Unburial Rites', description: 'Five-mana reanimation with flashback, effectively two spells in a self-discard shell.' },
      { name: 'Victimize', description: 'Three-mana spell that sacrifices one creature to return two from the graveyard tapped.' },
      { name: 'Living Death', description: 'Five-mana mass reanimation that swaps every graveyard and board — the archetype-defining bomb.' },
      { name: 'Exhume', description: 'Two-mana symmetric reanimation that is lopsided when your graveyard is stacked and theirs is not.' },
      { name: 'Chainer, Nightmare Adept', description: 'Rakdos commander that reanimates a creature every turn with a discount and haste. A whole engine on one body.' },
    ],
  },
};
