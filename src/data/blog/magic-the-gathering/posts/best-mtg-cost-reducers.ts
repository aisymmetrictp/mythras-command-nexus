import type { BlogPost } from '../../blogTypes';

export const bestMtgCostReducers: BlogPost = {
  slug: 'best-mtg-cost-reducers',
  game: 'magic-the-gathering',
  category: 'card-guides',
  topicCluster: 'commander-staples',
  tags: ['commander', 'cost-reduction', 'artifacts', 'ramp', 'card-guide'],
  title: 'Best Cost Reducers in MTG Commander, Ranked',
  metaDescription:
    'The best cost reducers in MTG Commander, ranked. Urza\'s Incubator, Semblance Anvil, the Medallion cycle, Animar and the cards that make your whole deck cheaper.',
  excerpt:
    "A Sol Ring gives you two mana once. Urza's Incubator gives you two mana on every creature spell you cast for the rest of the game. Here are the best cost reducers in Commander, ranked — and the honest math on when they beat a mana rock and when they are a trap.",
  featuredImagePrompt:
    'An ancient artificer workshop where glowing runic sigils strip weight from floating spell scrolls, painterly fantasy art, warm amber light, no text',
  heroImage: '/images/blog/magic-the-gathering/best-mtg-cost-reducers/urzas-incubator.jpg',
  heroImageAlt:
    'Urza\'s Incubator, the {3} artifact that makes creature spells of a chosen type cost {2} less to cast, the strongest tribal cost reducer in Commander.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-mtg-cost-reducers/urzas-incubator.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-cost-reducers/semblance-anvil.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-cost-reducers/ruby-medallion.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-cost-reducers/animar-soul-of-elements.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
  ],
  publishDate: '2026-07-20T00:00:00.000Z',
  lastUpdated: '2026-07-20T00:00:00.000Z',
  primaryKeyword: 'best cost reducers mtg',
  secondaryKeywords: [
    'best cost reducers commander',
    'mtg cost reduction cards',
    'urzas incubator commander',
    'medallion cycle mtg',
    'cheapest spells commander',
    'mtg spells cost less to cast',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-cost-reduction-beats-another-mana-rock', label: 'Why cost reduction beats another mana rock', level: 2 },
    { id: 'the-three-flavors-of-cost-reduction', label: 'The three flavors of cost reduction', level: 2 },
    { id: 'type-and-tribe-reducers', label: 'Type and tribe reducers', level: 3 },
    { id: 'color-and-blanket-reducers', label: 'Color and blanket reducers', level: 3 },
    { id: 'the-best-cost-reducers-in-mtg-ranked', label: 'The best cost reducers in MTG, ranked', level: 2 },
    { id: 'where-cost-reducers-go-wrong', label: 'Where cost reducers go wrong', level: 2 },
    { id: 'how-many-should-your-deck-run', label: 'How many should your deck run', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Sol Ring is the most-played card in Commander and it produces exactly two mana per turn. Urza's Incubator, one mana more expensive, produces zero mana — and in a Dragon deck it is flatly better, because it shaves {2} off every single creature spell you cast for the rest of the game. Cast three Dragons and you have generated six mana of value out of one card. Cast eight and you have lapped every rock in the format.

That is the pitch for cost reduction, and it is a genuinely different axis from ramp. Ramp adds mana to your pool. Cost reduction shrinks the bill. The end result looks the same on a single turn, but the scaling is completely different: a rock is linear and a good reducer is multiplicative with your spell count. The catch — and there is always a catch — is that cost reducers do nothing on their own. A Medallion on an empty board is a blank. Knowing which side of that trade you are on is the whole skill.

Every card below is verified on Scryfall for exact mana cost, type line, and Commander legality. And a note before anyone asks: the format's banned fast-mana pieces — Mana Crypt, Jeweled Lotus, and Dockside Extortionist — are illegal and are not on this list. These are the legal ways to make your deck cheaper.

## Why cost reduction beats another mana rock

The math is worth doing properly because it is not intuitive.

A [mana rock](/blog/magic-the-gathering/best-mana-rocks-commander-mtg) like Signet or Talisman costs {2} and returns one mana per turn. Break-even is turn two after it lands, and from there it prints roughly one mana per turn cycle. Solid, reliable, boring.

Ruby Medallion also costs {2} and reduces every red spell you cast by {1}. If you cast one red spell per turn, it is exactly a Signet — with the significant downside that it does nothing when you are casting artifacts or lands. But Commander games routinely see turns where you cast three or four spells, and on those turns the Medallion is a three-or-four-mana rock. In a deck built to chain cheap spells, it swings games.

The general rule: **cost reducers scale with spells cast per turn, rocks scale with turns**. If your deck is a big-mana pile casting one fat threat per turn, rocks are better. If your deck is a swarm of creatures, a storm-adjacent chain of [cantrips](/blog/magic-the-gathering/best-mtg-cantrips), or a tribal army, reducers pull ahead fast and never look back.

There's a second, quieter advantage: reducers dodge *mana-denial* entirely. A [stax piece](/blog/magic-the-gathering/best-mtg-stax-pieces-commander) that taps your lands doesn't touch the fact that your Dragons now cost {2} less.

![Urza's Incubator, the artifact that makes creature spells of a chosen type cost 2 less to cast](/images/blog/magic-the-gathering/best-mtg-cost-reducers/urzas-incubator.jpg)

## The three flavors of cost reduction

Not all reducers are the same shape, and mixing them up is how people end up with dead cards.

### Type and tribe reducers

These name a card type or creature type and hit hard within it. Urza's Incubator is the headliner at {2} off chosen-type creature spells; Herald's Horn is the same idea for {1} off, plus a repeatable upkeep card-advantage trigger. Semblance Anvil imprints a card from your hand and gives {2} off everything sharing a type with it, which is the most flexible {2}-reduction in the format and the most fragile — kill the Anvil and the imprint goes with it.

The discount is bigger here, but the coverage is narrower. In a dedicated tribal deck they're staples. In a good-stuff pile they're mediocre.

### Color and blanket reducers

The Medallion cycle — Ruby, Sapphire, Jet, Emerald, Pearl, all {2} artifacts giving {1} off spells of their color — is the cleanest version. Every spell of that color, no type restrictions, no setup. Goblin Anarchomancer at {R}{G} does the same for two colors at once on a creature body, which is absurd rate in Gruul.

Then the true blanket effects: The Immortal Sun at {6} makes *everything* you cast cost {1} less while also drawing you an extra card and anthem-ing your board. Helm of Awakening at {2} makes all spells cost {1} less — including your opponents' spells, which is why it is a fringe card outside of dedicated storm shells.

The third flavor is worth naming separately: **snowballing reducers**, where the discount grows. Animar, Soul of Elements is the whole category by itself. Every creature spell you cast puts a +1/+1 counter on it, and creature spells cost {1} less *for each counter*. Three creatures in and you are casting the rest of your deck for close to free.

![Semblance Anvil, the artifact that imprints a card and reduces spells sharing its type by two mana](/images/blog/magic-the-gathering/best-mtg-cost-reducers/semblance-anvil.jpg)

## The best cost reducers in MTG, ranked

**1. Urza's Incubator.** {3} artifact. Choose a creature type as it enters; those creature spells cost {2} less. Two full mana off every relevant creature, forever, with no upkeep, no conditions, and no body to get killed by a creature wipe. In any tribal deck this is the single most impactful non-land mana card you can play, and it is frequently better on turn three than Sol Ring. The only knock is that it is dead in a deck without a critical mass of one type.

**2. Semblance Anvil.** {3} artifact with imprint. Exile a nonland card from hand; spells sharing a card type with it cost {2} less. Imprint a creature in a creature deck, an artifact in an artifact deck, an instant in a spellslinger deck — it is Urza's Incubator with the tribal restriction replaced by a card-type restriction, which in most decks is *wider*. Costs you a card up front and dies to artifact removal with the imprint gone, which is the only reason it's not first.

**3. Animar, Soul of Elements.** {G}{U}{R} legendary creature with protection from white and black. The counters make creature spells cheaper by {1} each, so the third creature is {2} off and the sixth is {5} off. This is the most explosive reducer ever printed, doubles as a commander, and the pro-white-and-black clause blanks a huge slice of the format's [removal](/blog/magic-the-gathering/best-removal-spells-mtg). Not #1 only because it's three colors and needs a turn to get going.

**4. The Medallion cycle (Ruby, Sapphire, Jet, Emerald, Pearl).** {2} artifacts, {1} off all spells of their color. The most reliable, lowest-variance reducers in the game. No type restrictions, no imprint, nothing to remember. In a mono-colored deck a Medallion is a strictly-improving Signet the moment you cast two spells in a turn. Ruby and Sapphire are the most-played because red and blue cast the most spells per turn.

**5. Goblin Anarchomancer.** {R}{G} creature. Each spell you cast that's red or green costs {1} less. A two-mana body that reduces two colors is silly rate — in a Gruul deck it is effectively a Medallion that costs less and covers twice as much. It is a 1/1-sized creature, so it dies to everything, but at two mana you don't care.

![Ruby Medallion, the two-mana artifact that makes red spells cost one less to cast](/images/blog/magic-the-gathering/best-mtg-cost-reducers/ruby-medallion.jpg)

**6. Herald's Horn.** {3} artifact. {1} off chosen-type creature spells, plus at the beginning of your upkeep look at the top card and put it into your hand if it's that type. Half the discount of Urza's Incubator, but the upkeep trigger is real recurring [card advantage](/blog/magic-the-gathering/best-card-draw-commander-mtg) — in a deck with 35 creatures of one type you're hitting well over half the time. Tribal decks run both.

**7. Goreclaw, Terror of Qal Sisma.** {3}{G} legendary Bear. Creature spells with power 4 or greater cost {2} less, and when it attacks your big creatures get +1/+1 and trample. Green's best reducer because green's whole deck is creatures with power 4 or greater. It is a discount and a combat threat stapled together, which is exactly what you want out of a four-drop.

**8. Cloud Key.** {3} artifact. Choose artifact, creature, enchantment, instant, or sorcery; those spells cost {1} less. Semblance Anvil's smaller cousin, but it doesn't cost you a card and there's no imprint to lose. Reliable filler in any deck that is heavily weighted toward one card type.

**9. Foundry Inspector / Etherium Sculptor.** {3} artifact creature and {1}{U} artifact creature respectively, both giving {1} off artifact spells you cast. In an artifact deck these stack and turn a hand of cheap rocks and equipment into a genuine explosive turn. Etherium Sculptor at two mana is one of the best turn-two plays available to a blue [artifact](/blog/magic-the-gathering/best-artifacts-mtg) deck.

**10. Baral, Chief of Compliance.** {1}{U} legendary creature. Instant and sorcery spells cost {1} less, and whenever a spell or ability you control counters a spell you may loot. In a control shell built around [counterspells](/blog/magic-the-gathering/best-counterspells-mtg) this is a two-mana Medallion that also refuels you every time you say no. Fragile, but two mana for that package is a bargain.

**11. Dragonspeaker Shaman.** {1}{R}{R} creature. Dragon spells cost {2} less. Narrow by design, absurd inside the archetype — it turns a seven-mana Dragon into a five-mana Dragon on turn four. If your commander has "Dragon" in the type line, run it.

**12. The Immortal Sun.** {6} legendary artifact. Spells cost {1} less, you draw an extra card each turn, creatures get +1/+1, and nobody can activate planeswalker loyalty abilities. Six mana is a lot, and the discount alone doesn't justify it — but as a four-in-one value engine that also happens to blank an opposing [planeswalker](/blog/magic-the-gathering/best-planeswalkers-magic-the-gathering) deck, it earns its slot in slower lists.

![Animar, Soul of Elements, the Temur legendary whose counters make creature spells progressively cheaper](/images/blog/magic-the-gathering/best-mtg-cost-reducers/animar-soul-of-elements.jpg)

## Where cost reducers go wrong

**They can't reduce colored pips.** This is the rule that kills more brews than any other. Cost reduction only ever shaves generic mana. Ruby Medallion turns a {2}{R}{R} spell into {1}{R}{R} and stops there — it can never make it {R}{R} minus anything, and it does nothing at all for a {R}{R} spell like Boros Charm's red half or a double-pip two-drop. If your curve is full of heavily pipped cheap spells, your Medallion is a Sol Ring that forgot to produce mana.

**They're blanks on an empty board.** A rock drawn on turn twelve still makes mana. A Medallion drawn on turn twelve when your hand is one land does nothing. Reducers are early-game cards that get worse the later you draw them, which is the exact opposite of how most Commander staples behave.

**They're a two-for-one waiting to happen.** Semblance Anvil is the worst offender: killing it eats both the Anvil and the card you exiled. Don't build a line that only works if the reducer survives a turn cycle.

**Blanket effects are symmetrical.** Helm of Awakening reduces *everyone's* spells. Arcane Melee at {4}{U} takes {2} off all instants and sorceries — for the table. If you're not winning the turn you untap with it, you just handed three opponents a free ritual.

## How many should your deck run

Three to five is the range for a deck that actually wants them. Fewer than three and you'll rarely see one early enough to matter; more than five and you're diluting a deck full of cards that don't affect the board.

Weight them by archetype. A tribal deck wants the type reducers — Incubator, Horn, and the relevant tribal-specific one — because the discount is large and the coverage is total. A spellslinger or [combo](/blog/magic-the-gathering/best-commander-combos-mtg) deck wants Medallions and Baral, because chaining four cheap spells in a turn is where {1} discounts compound. An artifact deck wants Foundry Inspector and Etherium Sculptor and will happily run both plus Cloud Key.

And run them *alongside* real ramp, not instead of it. The dream curve is a rock on two, a reducer on three, and a hand full of spells that suddenly cost less than they should. Cost reduction is a multiplier — you still need something to multiply. Pair it with the [ramp package](/blog/magic-the-gathering/best-ramp-spells-commander-mtg) that fits your colors and the two halves cover each other's weaknesses: the rocks keep working when the board gets wiped, and the reducers keep working when your lands get locked down.

## Quick Action Checklist

- [ ] Run Urza's Incubator and Herald's Horn in any deck with 25+ creatures of a single type
- [ ] Play Semblance Anvil if one card type dominates your deck, and imprint carefully — you lose the card if it's destroyed
- [ ] Add the Medallion of your primary color to any deck that casts two or more spells per turn
- [ ] Count your colored pips before committing — reducers only shave generic mana, never colored costs
- [ ] Prefer Goblin Anarchomancer over a Medallion in any Gruul or Temur shell; two colors for two mana is better rate
- [ ] Treat Animar, Soul of Elements as a commander first and a reducer second — the protection is half the value
- [ ] Skip symmetrical reducers like Helm of Awakening and Arcane Melee unless you're winning the turn you untap
- [ ] Keep the count at three to five and pair them with real mana rocks, not as a replacement for them
- [ ] Verify every reducer's exact cost and Commander legality on Scryfall before locking your list`,
  faq: [
    {
      question: 'What is the best cost reducer in MTG Commander?',
      answer:
        'Urza\'s Incubator is the strongest in any tribal deck — a {3} artifact that takes {2} off every creature spell of a chosen type, permanently and unconditionally. For decks without a tribal theme, Semblance Anvil gives the same {2} discount based on card type instead, and the Medallion cycle (Ruby, Sapphire, Jet, Emerald, Pearl) offers the most reliable {1}-off-per-color effect at two mana.',
    },
    {
      question: 'Can cost reducers reduce colored mana costs?',
      answer:
        'No. Cost reduction only ever removes generic mana from a spell\'s cost. Ruby Medallion turns a {2}{R}{R} spell into {1}{R}{R}, but it cannot touch either red pip and does nothing at all for a spell that costs {R}{R}. This is the single biggest trap with cost reducers — if your curve is full of cheap, heavily pipped spells, the discount is far smaller than it looks.',
    },
    {
      question: 'Are cost reducers better than mana rocks?',
      answer:
        'It depends on how many spells you cast per turn. A mana rock scales with turns and gives you roughly one mana each turn cycle regardless of what you do. A cost reducer scales with spells cast, so it is worse on a one-spell-per-turn big-mana deck and much better in a swarm, tribal, or spellslinger deck that chains three or four spells in a turn. Most decks want a mix of both.',
    },
    {
      question: 'How many cost reducers should a Commander deck run?',
      answer:
        'Three to five for a deck that genuinely wants them. Fewer than three and you rarely draw one early enough to matter; more than five and you dilute your deck with cards that do nothing to the board. Weight them toward the effects that match your deck: type reducers for tribal, Medallions and Baral for spellslinger, Foundry Inspector and Etherium Sculptor for artifacts.',
    },
    {
      question: 'Is Mana Crypt a cost reducer?',
      answer:
        'No — Mana Crypt is a fast-mana artifact that produces mana, and it is currently banned in Commander along with Jeweled Lotus and Dockside Extortionist. Cost reducers are a different effect entirely: they lower what your spells cost rather than adding mana to your pool. Every card in this guide is Commander-legal as verified on Scryfall.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/best-mana-rocks-commander-mtg', anchor: 'best mana rocks' },
    { href: '/blog/magic-the-gathering/best-ramp-spells-commander-mtg', anchor: 'best ramp spells' },
    { href: '/blog/magic-the-gathering/best-artifacts-mtg', anchor: 'best artifacts in MTG' },
    { href: '/blog/magic-the-gathering/best-mtg-cantrips', anchor: 'best cantrips' },
    { href: '/blog/magic-the-gathering/best-commander-combos-mtg', anchor: 'Commander combos guide' },
    { href: '/blog/magic-the-gathering/best-mtg-stax-pieces-commander', anchor: 'best stax pieces' },
  ],
  externalSources: [
    { url: 'https://scryfall.com/search?q=o%3A%22cost%22+o%3A%22less+to+cast%22+f%3Acommander&unique=cards', title: 'Scryfall — cost-reduction card search and Commander legality data' },
    { url: 'https://edhrec.com/', title: 'EDHREC — cost reducer inclusion rates by archetype' },
    { url: 'https://magic.wizards.com/en/banned-restricted-list', title: 'Wizards of the Coast — official Commander banned list' },
  ],
  tldr:
    'The best cost reducers in MTG Commander are Urza\'s Incubator and Semblance Anvil ({2} off by type), Animar, Soul of Elements (a snowballing discount that grows every creature), the Medallion cycle ({1} off per color for two mana), Goblin Anarchomancer, Herald\'s Horn, Goreclaw, Cloud Key, Foundry Inspector, Etherium Sculptor, and Baral. They scale with spells cast per turn rather than turns elapsed, so they beat mana rocks in tribal, artifact, and spellslinger decks — just remember they only shave generic mana, never colored pips.',
  itemList: {
    name: 'Best Cost Reducers in MTG Commander, Ranked',
    items: [
      { name: 'Urza\'s Incubator', description: 'A {3} artifact that takes {2} off every creature spell of a chosen type. The single most impactful cost reducer in any tribal deck.' },
      { name: 'Semblance Anvil', description: 'A {3} artifact that imprints a nonland card and gives {2} off everything sharing its card type. Wider than tribal, but you lose the card if it dies.' },
      { name: 'Animar, Soul of Elements', description: 'A {G}{U}{R} legend with protection from white and black whose +1/+1 counters make creature spells cheaper by {1} each. The most explosive reducer printed.' },
      { name: 'The Medallion cycle', description: 'Ruby, Sapphire, Jet, Emerald and Pearl Medallion — {2} artifacts giving {1} off all spells of their color. The most reliable, lowest-variance option.' },
      { name: 'Goblin Anarchomancer', description: 'An {R}{G} creature that takes {1} off every red or green spell. Two colors of reduction on a two-mana body is exceptional rate in Gruul.' },
      { name: 'Herald\'s Horn', description: 'A {3} artifact giving {1} off chosen-type creature spells plus an upkeep trigger that puts matching creatures from the top of your library into hand.' },
      { name: 'Goreclaw, Terror of Qal Sisma', description: 'A {3}{G} legend that takes {2} off creature spells with power 4 or greater and pumps your big creatures with trample when it attacks.' },
      { name: 'Cloud Key', description: 'A {3} artifact that takes {1} off spells of a chosen card type. No imprint to lose and no card cost, making it safe filler in focused decks.' },
      { name: 'Foundry Inspector and Etherium Sculptor', description: 'A {3} artifact creature and a {1}{U} artifact creature, each taking {1} off artifact spells. They stack, and artifact decks run both.' },
      { name: 'Baral, Chief of Compliance', description: 'A {1}{U} legend giving {1} off instants and sorceries plus a loot trigger whenever you counter a spell. A two-mana Medallion for control shells.' },
      { name: 'Dragonspeaker Shaman', description: 'A {1}{R}{R} creature that takes {2} off Dragon spells. Extremely narrow, but format-warping inside a dedicated Dragon deck.' },
      { name: 'The Immortal Sun', description: 'A {6} legendary artifact that reduces all your spells by {1}, draws an extra card each turn, anthems your board, and shuts off planeswalker abilities.' },
    ],
  },
};
