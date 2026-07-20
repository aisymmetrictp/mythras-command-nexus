import type { BlogPost } from '../../blogTypes';

export const bestMtgFlickerBlinkCommander: BlogPost = {
  slug: 'best-mtg-flicker-blink-commander',
  game: 'magic-the-gathering',
  category: 'card-guides',
  topicCluster: 'flicker-blink',
  tags: ['flicker', 'blink', 'commander', 'etb', 'value', 'azorius'],
  title: 'Best Flicker & Blink Cards in MTG Commander, Ranked',
  metaDescription:
    'The best flicker and blink cards in MTG Commander, ranked: Ephemerate, Restoration Angel, Soulherder, and the ETB payoffs that make blink broken.',
  excerpt:
    "Flicker decks turn 'enters the battlefield' triggers into a value engine that never stops. Here are the best blink enablers in Commander — ranked — plus the ETB payoffs that turn flicker from cute into oppressive.",
  featuredImagePrompt:
    'A spectral white-mana figure phasing out of existence and reappearing in a flash of light, radiant ethereal energy, painterly fantasy art style, no text',
  heroImage: '/images/blog/magic-the-gathering/best-mtg-flicker-blink-commander/ephemerate.jpg',
  heroImageAlt:
    'Ephemerate, a one-mana white instant that exiles and returns a creature with flashback — the most efficient blink spell in Commander.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-mtg-flicker-blink-commander/ephemerate.jpg',
      sourceUrl: 'https://scryfall.com/card/mh1/7/ephemerate',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-flicker-blink-commander/flickerwisp.jpg',
      sourceUrl: 'https://scryfall.com/card/2x2/11/flickerwisp',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-flicker-blink-commander/restoration-angel.jpg',
      sourceUrl: 'https://scryfall.com/card/inr/38/restoration-angel',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-flicker-blink-commander/eldrazi-displacer.jpg',
      sourceUrl: 'https://scryfall.com/card/ogw/13/eldrazi-displacer',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
  ],
  publishDate: '2026-06-23T00:00:00.000Z',
  lastUpdated: '2026-06-23T00:00:00.000Z',
  primaryKeyword: 'best flicker blink cards commander',
  secondaryKeywords: [
    'best blink cards mtg',
    'mtg flicker commander',
    'best etb creatures commander',
    'flicker deck commander',
    'ephemerate commander',
    'blink enablers mtg',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-flicker-and-blink-actually-do', label: 'What flicker and blink actually do', level: 2 },
    { id: 'what-makes-a-blink-enabler-good', label: 'What makes a blink enabler good', level: 2 },
    { id: 'the-best-flicker-and-blink-cards-ranked', label: 'The best flicker and blink cards, ranked', level: 2 },
    { id: 'repeatable-blink-engines', label: 'Repeatable blink engines', level: 2 },
    { id: 'the-etb-payoffs-that-make-it-broken', label: 'The ETB payoffs that make it broken', level: 2 },
    { id: 'a-word-on-the-stack-and-targeting', label: 'A word on the stack and targeting', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Flicker is the closest thing Magic has to a cheat code that's also a deckbuilding discipline. The pitch is simple: every creature with an "enters the battlefield" trigger is a one-time effect, until you start blinking it. Then it's an effect you get to trigger again, and again, and again — and the difference between "I drew two cards once" and "I draw two cards every turn" is the difference between a fair deck and a problem.

The catch is that flicker is only as good as the things you're flickering. A blink spell with no ETB targets is a do-nothing. A blink engine pointed at the right creatures is one of the most oppressive value engines in Commander. So this is two lists in one: the best blink enablers, ranked, and the ETB payoffs that turn them from cute to broken. Every card here has been checked on Scryfall and confirmed Commander-legal, with its real mana cost.

## What flicker and blink actually do

"Flicker" and "blink" are the same thing, used interchangeably: you exile a permanent (usually a creature) and immediately return it to the battlefield, under your control, as a new object. The mechanical payoff is threefold:

- **It re-triggers enters-the-battlefield (ETB) abilities.** Blink a creature that draws a card on entry, and you draw another card. This is the whole point.
- **It dodges removal and targeted effects.** Respond to a kill spell by blinking your creature — the spell loses its target and fizzles, and your creature comes back fine. The downside is it usually returns tapped-out of combat and with summoning sickness.
- **It resets the permanent.** Auras and counters fall off, the creature comes back fresh, and any "until end of turn" effects on it are wiped. Sometimes that's a drawback, sometimes (clearing an opponent's Control Magic, say) it's a feature.

One important rule wrinkle: a blinked permanent returns as a **brand-new object** with no memory of what came before. That's why blinking your own creature to dodge removal works, and also why most blink spells phrase it as "return to the battlefield" — the creature that comes back is, rules-wise, a different thing than the one that left.

## What makes a blink enabler good

Not all blink is created equal. Three levers decide whether an enabler earns its slot.

**Cost and efficiency.** A one-mana blink that you can hold up is wildly better than a five-mana sorcery-speed one. Cheap blink lets you re-trigger an ETB *and* hold protection on the same turn, which is the dream.

**Repeatability.** A one-shot blink spell is fine. A permanent that blinks something *every turn* — a Soulherder, a Conjurer's Closet, a Thassa — is an engine. Engines win games; one-shots smooth them out. The best decks run a mix, but the repeatable enablers are the backbone.

**Flexibility and protection.** The best enablers double as removal-protection at instant speed. Ephemerate saving your creature from a kill spell, then doing it again next turn off flashback, is two cards' worth of value off one mana. An enabler that can only blink at sorcery speed loses that whole second job.

The honest read: **a blink enabler is only as good as the ETB targets in your deck.** Build the payoffs first, then add enablers to abuse them — not the other way around.

## The best flicker and blink cards, ranked

Ranked on overall power as enablers in Commander. The payoffs get their own section below.

![Flickerwisp, a three-mana white Elemental with flash and flying that exiles a target permanent and returns it at the next end step.](/images/blog/magic-the-gathering/best-mtg-flicker-blink-commander/flickerwisp.jpg)

1. **Ephemerate** — {W} instant. Exile target creature you control, return it at the beginning of the next end step, and it has **flashback {1}{W}**. One mana to blink a creature *and* dodge a removal spell, then do it a second time next turn. The single most efficient blink card in the format — one card, two ETB triggers, two saves. If you run one blink spell, run this.
2. **Soulherder** — {1}{W}{U} Spirit. At your end step, exile another target creature you control, then return it; whenever a creature you control is exiled this way, Soulherder gets a +1/+1 counter. A two-mana repeatable blink engine that grows itself. It's the best dedicated enabler in the format because it's cheap, it's every-turn, and it builds a clock on the side.
3. **Restoration Angel** — {3}{W} Angel with flash and flying. When it enters, you may blink a non-Angel creature you control. A 3/4 flash flyer is already a fine card; stapling a one-shot blink (that saves a creature from removal at instant speed) onto it makes it a Commander staple in any white value deck.
4. **Eldrazi Displacer** — {2}{W} Eldrazi. {2}{C}: exile target creature, return it tapped. A repeatable blink for three mana — the catch is it needs **colorless mana** ({C}) to activate, so you want sources like Wastes or mana rocks that make {C}. With the right mana base it's a per-turn blink that doubles as removal (blink an opponent's attacker out of combat) and a token-killer (their token is exiled and doesn't return).
5. **Flickerwisp** — {1}{W}{W} Elemental with flying. When it enters, exile target permanent, then return it at the beginning of the next end step. Flexible: it can blink your own ETB creature, reset an opponent's permanent, or temporarily exile a blocker. The "next end step" return is a little awkward but the targeting flexibility is real.
6. **Charming Prince** — {1}{W} Human Noble. Choose one as it enters: scry 2, gain 3 life, or blink another target creature you control at the next end step. A modal two-drop that's never dead — and the blink mode makes it a budget enabler that also re-triggers your own ETBs as it enters.
7. **Brago, King Eternal** — {2}{W}{U} Spirit. Whenever Brago deals combat damage to a player, exile target nonland permanents you control, then return them. As a commander, Brago is a blink *army* — connect once and re-trigger every ETB on your board at the same time. He's a build-around, but in the right deck he's the most explosive blink payoff there is.
8. **Yorion, Sky Nomad** — {3}{W/U}{W/U} Bird Serpent with flying. When it enters, you may exile any number of other nonland permanents you control, then return them. A 4/5 flyer that blinks your whole board on entry — and as a commander or companion-style payoff, blinking ten ETBs at once ends games.
9. **Thassa, Deep-Dwelling** — {3}{U} Legendary God. At your end step, blink another target creature you control. Also taps a creature down each turn. A repeatable every-turn blink engine on an indestructible enchantment-creature body — hard to remove and quietly grinding value every end step.
10. **Conjurer's Closet** — {5} artifact. At your end step, you may blink target creature you control. Five mana is steep and it's a do-nothing the turn it lands, but it's a colorless, every-turn blink engine that fits any deck regardless of colors. The mono-artifact tax on consistency.

Past the top ten, one-shot spells like **Cloudshift** ({W}) and **Ghostly Flicker** ({2}{U}, blinks two permanents and combos with the right ETBs) round out the cheap-enabler package.

## Repeatable blink engines

If you want flicker to *win* and not just smooth your curve, the repeatable engines are non-negotiable. These are the cards that blink something every single turn for free:

- **Soulherder** ({1}{W}{U}) — every end step, and it grows. The gold standard.
- **Thassa, Deep-Dwelling** ({3}{U}) — every end step on an indestructible body.
- **Conjurer's Closet** ({5}) — every end step, colorless, fits any deck.
- **Eldrazi Displacer** ({2}{W}, needs {C}) — blink on demand at instant speed, as many times as you can pay.
- **Teleportation Circle** ({3}{W}) — at your end step, blink an artifact *or* creature you control. The enchantment cousin of Conjurer's Closet, and it can re-trigger artifact ETBs too.

The pattern: a sorcery-speed, every-end-step blink is a value faucet. Point any of these at a strong ETB creature and you've turned a one-time effect into an every-turn one. The instant-speed ones (Eldrazi Displacer) also double as protection and combat tricks, which is why Displacer ranks so highly despite the colorless-mana requirement.

## The ETB payoffs that make it broken

A blink engine with nothing good to blink is a waste of mana. The engine is only as strong as the ETB creatures feeding it. Build these first:

![Restoration Angel, a four-mana white Angel with flash and flying that blinks a non-Angel creature when it enters the battlefield.](/images/blog/magic-the-gathering/best-mtg-flicker-blink-commander/restoration-angel.jpg)

- **[Card draw](/blog/magic-the-gathering/best-card-draw-commander-mtg).** Mulldrifter ({4}{U}, draw two on entry) is the textbook payoff — blink it repeatedly and you draw two every turn. Any "draw a card when this enters" creature is a target.
- **[Removal on a stick](/blog/magic-the-gathering/best-removal-spells-mtg).** Solitude ({3}{W}{W}, exiles a creature on entry — and has a free evoke-style cast mode) turns your blink engine into repeatable exile removal. Blink it each turn and you're killing a creature every turn.
- **[Ramp](/blog/magic-the-gathering/best-ramp-spells-commander-mtg).** Creatures that fetch a land or make mana on entry turn flicker into an acceleration engine early and a mana sink late.
- **[Tokens and bodies](/blog/magic-the-gathering/best-mtg-token-generators-commander).** ETB-token-makers refill your board every blink, which pairs especially well with a board-wide blinker like Brago or Yorion.

Then there are the **multiplier** payoffs that make every blink hit twice as hard:

- **Panharmonicon** ({4} artifact) — your creatures' ETB abilities trigger an additional time. Blink a Mulldrifter under Panharmonicon and draw *four*. With a per-turn blink engine, this is where flicker decks turn oppressive.
- **Yarok, the Desecrated** ({2}{B}{G}{U}) — the same doubling effect, on a legendary body, in Sultai colors. A natural flicker commander for the doubling-payoff build.

The deckbuilding lesson is the same as the enabler one, inverted: **stack your deck with ETB value creatures and doublers first, then add enablers to abuse them.** A flicker deck is a payoff deck wearing an enabler costume.

## A word on the stack and targeting

Two things trip up new flicker players, and both come back to how the stack works.

**Blinking in response to removal.** When an opponent targets your creature with a kill spell, you blink it *in response*. Your creature leaves and a new object returns; the removal spell now has no legal target and is countered by the rules. This is the protective half of flicker, and it only works because you can respond at instant speed — which is why instant-speed enablers (Ephemerate, Restoration Angel's flash, Eldrazi Displacer) are worth more than sorcery-speed ones. If you're hazy on how responding and priority work, our [stack and priority guide](/blog/magic-the-gathering/mtg-stack-priority-explained) walks through it.

**The new-object rule.** Because the blinked creature returns as a fresh object, it loses counters, auras, and "until end of turn" effects, and it comes back with summoning sickness (so no attacking or tapping for abilities that turn unless it has haste). That's the cost of the protection and the re-triggering — plan around it, especially before you blink a creature you wanted to attack with.

Get those two interactions down and flicker stops feeling fiddly and starts feeling like the value engine it is.

## Quick Action Checklist

Apply this when building a flicker/blink deck in Commander:

- [ ] Build your ETB payoff creatures FIRST (draw, removal, ramp, tokens) — the enablers are worthless without targets
- [ ] Run Ephemerate as your one-mana cornerstone; it's one card, two triggers, two removal saves
- [ ] Anchor on at least one repeatable engine (Soulherder, Thassa, Conjurer's Closet, Teleportation Circle)
- [ ] Prioritize instant-speed enablers so blink doubles as removal protection
- [ ] Add a doubler (Panharmonicon or Yarok) once your ETB count is high enough to abuse it
- [ ] Remember blinked creatures come back summoning-sick and lose counters/auras — don't blink your attacker pre-combat
- [ ] If you run Eldrazi Displacer, build a mana base that produces colorless ({C}) mana to activate it
- [ ] Confirm legality and mana cost on Scryfall before sleeving anything new`,
  faq: [
    {
      question: 'What is the best flicker card in MTG Commander?',
      answer:
        'Ephemerate is the best single blink card for one mana — it blinks a creature to re-trigger its enters-the-battlefield ability and dodge removal, then does it again off flashback, so one card gives you two triggers and two saves. For a repeatable engine, Soulherder is the top pick: a two-mana enabler that blinks a creature every end step and grows itself with +1/+1 counters.',
    },
    {
      question: 'What is the difference between flicker and blink in MTG?',
      answer:
        'There is no difference — flicker and blink are interchangeable terms for the same effect: exiling a permanent and immediately returning it to the battlefield under your control. The returned permanent is a brand-new object, which is why blinking re-triggers enters-the-battlefield abilities, dodges targeted removal, and resets counters and auras.',
    },
    {
      question: 'Why are flicker decks so strong in Commander?',
      answer:
        'Because they convert one-time enters-the-battlefield abilities into repeatable value. A creature that draws two cards once becomes a creature that draws two every turn once you blink it each turn. Pair a repeatable blink engine like Soulherder or Thassa, Deep-Dwelling with strong ETB payoffs and a doubler like Panharmonicon, and the deck generates overwhelming card and board advantage while dodging removal.',
    },
    {
      question: 'What are the best ETB creatures to blink?',
      answer:
        'The best targets generate immediate value on entry: Mulldrifter (draw two), Solitude (exile a creature), ramp creatures that fetch lands, and token-makers that refill your board. Doublers like Panharmonicon and Yarok, the Desecrated make every ETB trigger an extra time, so a blinked Mulldrifter draws four. Build these payoffs before you add blink enablers — the enablers are worthless without good targets.',
    },
    {
      question: 'Does blinking a creature save it from removal?',
      answer:
        'Yes. If an opponent targets your creature with a removal spell, you can blink it in response. The creature is exiled and returns as a new object, so the removal spell loses its only legal target and is countered by the rules. This only works at instant speed, which is why instant-speed enablers like Ephemerate and Restoration Angel are more valuable than sorcery-speed ones. The trade-off is the creature returns summoning-sick and loses any counters or auras.',
    },
    {
      question: 'What colors are best for a flicker deck in MTG?',
      answer:
        'White is the core color for blink — Ephemerate, Restoration Angel, Flickerwisp, Eldrazi Displacer, and Charming Prince all live there. Blue adds repeatable engines (Soulherder, Thassa, Deep-Dwelling) and the best ETB draw payoffs, so Azorius (white-blue) is the classic flicker pairing. Adding black and green (for Yarok, the Desecrated) opens up the doubling payoffs and more ETB value creatures.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/best-commander-staples-mtg', anchor: 'best Commander staples' },
    { href: '/blog/magic-the-gathering/how-to-build-a-commander-deck', anchor: 'how to build a Commander deck' },
    { href: '/blog/magic-the-gathering/best-card-draw-commander-mtg', anchor: 'best card draw in Commander' },
    { href: '/blog/magic-the-gathering/mtg-stack-priority-explained', anchor: 'stack and priority guide' },
    { href: '/blog/magic-the-gathering/best-removal-spells-mtg', anchor: 'best removal spells guide' },
  ],
  externalSources: [
    { url: 'https://scryfall.com/search?q=o%3A%22exile+target+creature+you+control%22', title: 'Scryfall — blink and flicker card search' },
    { url: 'https://edhrec.com/', title: 'EDHREC — Commander flicker inclusion data' },
    { url: 'https://magic.wizards.com/en/rules', title: 'Wizards of the Coast — official comprehensive rules' },
  ],
  tldr:
    'The best flicker/blink cards in Commander turn enters-the-battlefield triggers into repeatable value. Top enablers: Ephemerate (one mana, two triggers, two removal saves), Soulherder (every-turn engine that grows), Restoration Angel, and Eldrazi Displacer. The repeatable engines (Soulherder, Thassa Deep-Dwelling, Conjurer\'s Closet, Teleportation Circle) are the backbone, and ETB payoffs like Mulldrifter and Solitude plus doublers like Panharmonicon and Yarok are what make blink broken. Build the payoffs first, then add enablers.',
  itemList: {
    name: 'Best Flicker & Blink Cards in MTG Commander, Ranked',
    items: [
      { name: 'Ephemerate', description: 'One-mana instant with flashback: blink a creature, dodge removal, and do it twice. The most efficient blink spell in Commander.' },
      { name: 'Soulherder', description: 'Two-mana repeatable engine that blinks a creature every end step and grows with +1/+1 counters. The best dedicated enabler.' },
      { name: 'Restoration Angel', description: 'A 3/4 flash flyer that blinks a non-Angel creature on entry — instant-speed value and removal protection in one.' },
      { name: 'Eldrazi Displacer', description: 'Repeatable instant-speed blink for {2}{C}; doubles as removal and a token-killer. Needs colorless mana.' },
      { name: 'Flickerwisp', description: 'Three-mana flyer that exiles and returns any permanent — flexible enough to blink your own ETB or reset an opponent\'s.' },
      { name: 'Charming Prince', description: 'Modal two-drop: scry 2, gain 3 life, or blink a creature. A budget enabler that is never a dead card.' },
      { name: 'Brago, King Eternal', description: 'Commander that blinks all your nonland permanents on combat damage — a board-wide ETB re-trigger.' },
      { name: 'Yorion, Sky Nomad', description: 'A 4/5 flyer that blinks any number of your nonland permanents on entry. Blinking ten ETBs ends games.' },
      { name: 'Thassa, Deep-Dwelling', description: 'Every-end-step blink engine on an indestructible God body that also taps down a creature each turn.' },
      { name: "Conjurer's Closet", description: 'Five-mana colorless artifact that blinks a creature every end step. Fits any deck regardless of colors.' },
    ],
  },
};
