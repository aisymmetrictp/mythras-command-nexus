import type { BlogPost } from '../../blogTypes';

export const bestMtgHatebears: BlogPost = {
  slug: 'best-mtg-hatebears',
  game: 'magic-the-gathering',
  category: 'card-guides',
  topicCluster: 'commander-staples',
  tags: ['commander', 'hatebears', 'stax', 'white', 'creatures', 'card-guide'],
  title: 'Best Hatebears in MTG Commander, Ranked',
  metaDescription:
    'The best hatebears in MTG Commander, ranked. Thalia, Drannith Magistrate, Esper Sentinel, Opposition Agent and the small creatures that tax the whole table.',
  excerpt:
    'A hatebear is a two-mana creature that costs your opponents more than it cost you. Here are the best of them, ranked — the taxers, the lockdown pieces, and the ones that quietly delete an entire deck at the table.',
  featuredImagePrompt:
    'A small determined armored cleric standing alone against a wave of oncoming magic, warm white light forming a barrier, painterly fantasy art, no text',
  heroImage: '/images/blog/magic-the-gathering/best-mtg-hatebears/thalia-guardian-of-thraben.jpg',
  heroImageAlt:
    'Thalia, Guardian of Thraben, the two-mana white Human Soldier with first strike whose static ability makes every noncreature spell cost one more to cast.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-mtg-hatebears/thalia-guardian-of-thraben.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-hatebears/drannith-magistrate.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-hatebears/esper-sentinel.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-hatebears/opposition-agent.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-hatebears/archon-of-emeria.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
  ],
  publishDate: '2026-07-15T00:00:00.000Z',
  lastUpdated: '2026-07-15T00:00:00.000Z',
  primaryKeyword: 'best hatebears mtg commander',
  secondaryKeywords: [
    'best hatebear creatures commander',
    'mtg hatebears ranked',
    'thalia guardian of thraben commander',
    'best taxing creatures mtg',
    'white hatebears commander',
    'hatebear deck mtg',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-a-hatebear-actually-is', label: 'What a hatebear actually is', level: 2 },
    { id: 'taxing-vs-shutting-off', label: 'Taxing vs shutting off', level: 2 },
    { id: 'the-best-hatebears-ranked', label: 'The best hatebears, ranked', level: 2 },
    { id: 'the-noncreature-hate-pieces-worth-knowing', label: 'The noncreature hate pieces worth knowing', level: 2 },
    { id: 'building-a-hatebear-deck', label: 'Building a hatebear deck', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `The most demoralizing card in Commander isn't a Craterhoof or an Armageddon. It's a 2/1 for two mana that makes the combo player's turn cost one extra, so their line comes up a single mana short and they pass. You spent two mana. They spent the game. That's a hatebear, and it is the best mana-for-mana deal in the format when you point it at the right table.

The name is a joke that stuck — Magic's oldest "small creature with a taxing ability" cards were literally Bears (2/2 for two), so a creature that hates on your opponents while being a bear-sized body became a hatebear. The joke stuck; the archetype got terrifying. Every card here has been verified against Scryfall for exact mana cost, type line, oracle text, and current Commander legality.

## What a hatebear actually is

A hatebear is a **cheap creature whose static ability makes your opponents' game worse**. Three things have to be true:

1. **It's cheap.** One to three mana. If it costs five, it's just a creature with text. The whole point is that it costs you less than it costs them.
2. **It's a body.** This is the part that separates hatebears from [stax pieces](/blog/magic-the-gathering/best-mtg-stax-pieces-commander). A Sphere of Resistance sits there and taxes. Thalia taxes **and attacks for two with first strike.** The body means your hate piece also closes the game, which is why hatebear decks win and pure prison decks stall out.
3. **It's asymmetrical, or you're built to ignore the symmetry.** Some hatebears only hit opponents (Esper Sentinel, Drannith Magistrate). Others hit everyone (Thalia, Archon of Emeria) and the deck is built to not care — which is why hatebear decks run creature-heavy, low-curve lists.

That third point is the whole design philosophy. Thalia taxes noncreature spells, so you build a deck of creatures. Archon of Emeria limits everyone to one spell per turn, so you build a deck that only wants to cast one spell per turn anyway. You're not playing a fair game and hoping — you're changing the rules to ones you already follow.

The reason this beats a traditional control deck: a counterspell answers one spell for one card. Thalia taxes **every** noncreature spell **every** turn for the rest of the game, for two mana, while beating down. Hate is just interaction with a much better rate, paid up front.

## Taxing vs shutting off

Every hatebear falls into one of two buckets, and mixing them badly is how people build hatebear decks that don't work.

**Taxers** make things cost more. Thalia, Guardian of Thraben, Esper Sentinel, Aura of Silence. These are soft — a determined opponent just pays. Their job is **tempo**: they make turn-four combos happen on turn six, and in a format where you're also attacking, two extra turns is often the whole game. Taxers are safe includes because they rarely make the table hate you personally; they just slow everything to your speed.

**Shutoffs** make things impossible. Drannith Magistrate, Collector Ouphe, Containment Priest, Grafdigger's Cage. These are binary — they don't slow a deck down, they **delete** it. Drannith Magistrate against a Commander deck means their commander stays in the command zone forever. That's not a tax, that's a concession request.

The tradeoff is real: shutoffs draw removal immediately, and they're dead cards against tables that weren't doing that thing. Collector Ouphe is a house against artifact ramp and a blank against a Bant creature deck. Taxers are always live but never win alone.

The build rule: **taxers in the maindeck, shutoffs matched to your meta.** If your pod is four combo decks, Drannith Magistrate and Grand Abolisher are your best cards. If your pod is battlecruiser creature decks, they're vanilla 2/1s and you should be running Thalia, Heretic Cathar instead. Know your table.

## The best hatebears, ranked

Ranked on cost-to-impact ratio, how often the ability is live in an average pod, and whether the body does real work.

![Drannith Magistrate, a two-mana white Human Wizard whose static ability stops opponents casting spells from anywhere except their hands — including the command zone.](/images/blog/magic-the-gathering/best-mtg-hatebears/drannith-magistrate.jpg)

1. **Drannith Magistrate** — {1}{W}. "Your opponents can't cast spells from anywhere other than their hands." In a format defined by the command zone, this is the single most brutal two-mana creature in Magic. It locks every opponent's commander out of the game, plus flashback, escape, adventure, foretell, and every graveyard-cast engine at the table. It is one-sided, it costs two, and it will get killed the instant somebody draws a removal spell. Worth it every time.
2. **Esper Sentinel** — {W}. A one-mana 1/1 artifact creature: whenever an opponent casts their **first noncreature spell each turn**, you draw a card unless they pay {X}, where X is Sentinel's power. This is the rare hate piece that's never a dead draw — either it taxes the table or it draws you a stack of cards, and pumping its power makes the tax brutal. One mana, one-sided, always live. The best white one-drop in Commander.
3. **Opposition Agent** — {2}{B}. Flash. "You control your opponents while they're searching their libraries," and they exile what they find and **you** may play it. Flash it in response to a fetchland or a Demonic Tutor and you don't just stop the [tutor](/blog/magic-the-gathering/best-tutors-commander-mtg) — you take the card. It punishes the single most common action in Commander, and the flash makes it a genuine trap.
4. **Grand Abolisher** — {W}{W}. "During your turn, your opponents can't cast spells or activate abilities of artifacts, creatures, or enchantments." Two mana for total protection on your own turn. Your combo can't be countered, your creatures can't be removed in response, your attack can't be fogged. This is the card that lets a combo deck just win.
5. **Thalia, Guardian of Thraben** — {1}{W}. First strike, and noncreature spells cost {1} more. The archetype's namesake and the purest expression of it: a symmetrical tax that a creature deck barely notices while every control and combo deck at the table feels it on every single spell. A 2/1 first striker also attacks fine. The default include.
6. **Collector Ouphe** — {1}{G}. "Activated abilities of artifacts can't be activated." Green's best hate piece. This blanks every [mana rock](/blog/magic-the-gathering/best-mana-rocks-commander-mtg), every Sol Ring, every artifact combo, and every equip cost at the table. It's devastating against the artifact-heavy decks that define high-power Commander and useless against a deck with four artifacts. Pure meta call, but when it's live it's a Armageddon that doesn't touch your lands.
7. **Archon of Emeria** — {2}{W}. Flying, "each player can't cast more than one spell each turn," and opponents' nonbasic lands enter tapped. A three-mana 2/3 flyer that shuts off storm, ruins every ramp-into-multiple-spells turn, and taxes the mana base on top. Two strong effects and an evasive body — this is what a modern hatebear looks like.
8. **Aven Mindcensor** — {2}{W}. Flash, flying, "if an opponent would search a library, that player searches the top four cards instead." Flash it in on someone's Demonic Tutor and watch them dig four cards deep for nothing. It's the sharper, cheaper cousin of Opposition Agent, and the flash means it's a trap rather than a target.
9. **Containment Priest** — {1}{W}. Flash, and any nontoken creature entering **that wasn't cast** gets exiled instead. This is a one-card answer to every [reanimation](/blog/magic-the-gathering/best-mtg-reanimation-spells) and [flicker](/blog/magic-the-gathering/best-mtg-flicker-blink-commander) strategy in the format. Flash it in during a Reanimate and the target is exiled. Narrow but absolutely lethal to the decks it hits.
10. **Sanctum Prelate** — {1}{W}{W}. Choose a number as it enters; noncreature spells with that mana value **can't be cast**. Naming 2 shuts off most of the format's counterspells and removal. Naming 1 turns off Swords, Path, and every one-mana ritual. It's a shutoff you aim with surgical precision, and it's brutal in the right pod.

Four more that earn slots: **Lavinia, Azorius Renegade** ({W}{U}) stops opponents casting noncreature spells with mana value greater than their land count **and** counters anything cast for free — a real answer to fast mana. **Spirit of the Labyrinth** ({1}{W}) limits each player to one draw per turn, which wrecks every draw engine at the table. **Ethersworn Canonist** ({1}{W}) limits each player to one nonartifact spell per turn — a sharper Archon of Emeria for artifact decks. And **Thalia, Heretic Cathar** ({2}{W}) makes opponents' creatures and nonbasic lands enter tapped, which is the anti-battlecruiser hatebear when the combo hate is dead.

## The noncreature hate pieces worth knowing

Hatebear decks don't run only bears. A few noncreature pieces do the same job better, and a good list mixes them in:

![Esper Sentinel, a one-mana white artifact creature that draws you a card whenever an opponent casts their first noncreature spell each turn unless they pay the tax.](/images/blog/magic-the-gathering/best-mtg-hatebears/esper-sentinel.jpg)

- **Grafdigger's Cage** — {1}. Creature cards in graveyards and libraries can't enter the battlefield, and no casting from graveyards or libraries. One mana, hits reanimator and every tutor-to-battlefield effect.
- **Rule of Law** — {2}{W} and **Deafening Silence** — {W}. One spell per turn (Deafening Silence only hits noncreature spells). The enchantment versions of Archon of Emeria — no body, but much harder to remove in a creature-removal-heavy meta.
- **Cursed Totem** — {2}. Activated abilities of creatures can't be activated. Blanks every [mana dork](/blog/magic-the-gathering/best-mana-dorks-mtg) and every creature combo at the table.
- **Aura of Silence** — {1}{W}{W}. Taxes opponents' artifact and enchantment spells {2} more, and sacrifices to destroy one. A tax that cashes out as removal.
- **Torpor Orb** — {2}. Creatures entering don't cause abilities to trigger. A two-mana wall against the entire ETB-value half of Commander.

The reason to prefer the creature versions when they're close: creatures can be tutored with creature tutors, blinked for value, and they attack. The reason to prefer the noncreature versions: they dodge board wipes and the creature removal everyone is already holding. Run both.

## Building a hatebear deck

**Colors.** White is the home, and it isn't close — roughly two-thirds of the good hatebears are white, because taxing and rule-setting is white's slice of [the color pie](/blog/magic-the-gathering/mtg-color-pie-explained). Green adds Collector Ouphe and Gaddock Teeg-style pieces plus the ramp to deploy faster than the tax hurts. Black adds Opposition Agent. Blue adds Lavinia and Spirit of the Labyrinth. Selesnya (green-white) and Azorius (blue-white) are the two classic shells; Bant adds all three.

**The curve is the whole deck.** Hatebears live or die on being **ahead** when the tax lands. A Thalia on turn two is a beating; a Thalia on turn six is a 2/1. Your curve should top out around four, and you want the hate on the battlefield before opponents have the mana to shrug it off. This is a deck where a turn-one Esper Sentinel genuinely matters.

**Build the deck that ignores your own taxes.** This is the part people miss. If you're running Thalia and Archon of Emeria, don't also run twelve instants. Lean creature-heavy, keep the noncreature count low, and every symmetrical tax becomes one-sided in practice. Same logic for Spirit of the Labyrinth — don't run it next to your own draw engine.

**You must have a clock.** This is the failure mode that kills hatebear decks. You tax the table, nobody can do anything, and then... nothing happens, because you're a pile of 2/1s and the game goes to turn 30 until someone topdecks a board wipe and unwinds your whole board. The hate buys you a window. You need to actually use it. Run [anthem effects](/blog/magic-the-gathering/best-mtg-anthem-effects) or [equipment](/blog/magic-the-gathering/best-equipment-mtg) to turn your little creatures into a real clock, and close the game inside that window.

**Know the social cost.** Hatebears make you the archenemy. Drannith Magistrate turns off three commanders and three people will point three removal spells at it. That's fine — it's a two-mana card that ate three cards' worth of attention. But go in knowing that a hate deck plays the politics game on hard mode, and the right table matters. Check where your pod sits on the [Commander bracket](/blog/magic-the-gathering/mtg-commander-brackets) scale before you show up with a lock deck to a precon night.

![Opposition Agent, a three-mana black Human Rogue with flash that hijacks opponents' library searches and lets you play what they find.](/images/blog/magic-the-gathering/best-mtg-hatebears/opposition-agent.jpg)

**Legality note.** Hate pieces get evaluated against the current banned list, and it moves. Mana Crypt, Jeweled Lotus, and Dockside Extortionist are all banned in Commander now, which took some of the fast-mana pressure off — that slightly lowers the value of artifact hate like Collector Ouphe and raises the value of generic taxers. Always confirm a card's current legality on Scryfall before you buy it.

![Archon of Emeria, a three-mana white 2/3 flyer limiting each player to one spell per turn while making opponents' nonbasic lands enter tapped.](/images/blog/magic-the-gathering/best-mtg-hatebears/archon-of-emeria.jpg)

## Quick Action Checklist

- [ ] Start with the one-sided pieces: Drannith Magistrate, Esper Sentinel, and Opposition Agent hurt only your opponents and cost one to three mana.
- [ ] Match shutoffs to your meta — Collector Ouphe and Containment Priest are house cards against the right deck and blanks against the wrong one.
- [ ] Keep taxers (Thalia, Esper Sentinel) in the maindeck; they are always live even when the shutoffs are dead.
- [ ] Build the deck that ignores your own symmetry: creature-heavy, low noncreature count, curve topping out around four.
- [ ] Deploy hate EARLY. A turn-two Thalia wins games; a turn-six Thalia is a 2/1.
- [ ] Run a real clock — anthems or equipment. Hate buys a window; it does not win the game by itself.
- [ ] Mix in noncreature hate (Grafdigger's Cage, Rule of Law, Cursed Totem) so board wipes do not undo your whole plan.
- [ ] Expect to be archenemy, and check your pod's bracket before bringing a lock deck to a casual table.
- [ ] Verify current Commander legality on Scryfall before buying anything.`,
  faq: [
    {
      question: 'What is a hatebear in MTG?',
      answer:
        'A hatebear is a cheap creature — usually one to three mana — whose static ability makes your opponents\' game worse. The name comes from Magic\'s old 2/2-for-two "bear" creatures; a bear-sized body with a taxing or shutoff ability became a "hatebear." The defining feature is the body: unlike a pure stax artifact, a hatebear taxes the table AND attacks, so your prison piece is also your clock. Thalia, Guardian of Thraben is the archetypal example.',
    },
    {
      question: 'What is the best hatebear in Commander?',
      answer:
        'Drannith Magistrate ({1}{W}) is the most brutal — "your opponents can\'t cast spells from anywhere other than their hands" locks every opponent\'s commander in the command zone permanently, plus flashback, escape, and every graveyard engine. In a format built around the command zone, that is close to a concession request for two mana. Esper Sentinel ({W}) is the best all-around pick because it is never dead: it either taxes the table or draws you cards.',
    },
    {
      question: 'What is the difference between hatebears and stax?',
      answer:
        'Overlap is heavy, but the distinction is the body and the severity. Stax pieces are usually noncreature permanents (Winter Orb, Sphere of Resistance) that lock the game down hard and do not advance a clock. Hatebears are creatures with softer, cheaper taxing abilities that let you keep attacking while the tax slows everyone else. Stax decks aim to stop the game; hatebear decks aim to slow the game just enough to win it with combat damage.',
    },
    {
      question: 'What colors are best for a hatebear deck?',
      answer:
        'White, by a wide margin — roughly two-thirds of the strong hatebears are white, because taxing and rule-setting is white\'s slice of the color pie. Green adds Collector Ouphe plus the ramp to deploy hate ahead of curve, black adds Opposition Agent, and blue adds Lavinia, Azorius Renegade and Spirit of the Labyrinth. Selesnya (green-white) and Azorius (blue-white) are the classic shells, and Bant gets all of it.',
    },
    {
      question: 'Why do hatebear decks lose even when the lock is working?',
      answer:
        'Because they forget the clock. Taxing the table buys you a window, not a win — if you are just a pile of 2/1s, the game grinds to turn 30 and someone eventually topdecks a board wipe and unwinds the whole board. Hatebear decks need anthem effects, equipment, or an evasive threat to actually convert the window into damage. Hate is the setup, not the wincon.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/best-mtg-stax-pieces-commander', anchor: 'best stax pieces in Commander' },
    { href: '/blog/magic-the-gathering/best-tutors-commander-mtg', anchor: 'best tutors in Commander' },
    { href: '/blog/magic-the-gathering/best-mtg-reanimation-spells', anchor: 'best reanimation spells' },
    { href: '/blog/magic-the-gathering/mtg-commander-brackets', anchor: 'the Commander bracket system' },
    { href: '/blog/magic-the-gathering/best-mtg-anthem-effects', anchor: 'best anthem effects' },
  ],
  externalSources: [
    { url: 'https://scryfall.com/search?q=t%3Acreature+cmc%3C%3D3+f%3Acommander', title: 'Scryfall — cheap creature search and legality data' },
    { url: 'https://magic.wizards.com/en/banned-restricted-list', title: 'Wizards of the Coast — official banned and restricted list' },
    { url: 'https://edhrec.com/', title: 'EDHREC — Commander hatebear inclusion data' },
  ],
  tldr:
    'The best hatebears in MTG Commander are Drannith Magistrate (locks opponents out of the command zone), Esper Sentinel (a one-mana tax that is never a dead draw), Opposition Agent, Grand Abolisher, and Thalia, Guardian of Thraben. A hatebear is a cheap creature whose static ability taxes or shuts off what your opponents want to do, while still attacking. Build white-based, keep the curve low, deploy early, and always pair the hate with a real clock — hate buys a window, it does not win alone.',
  itemList: {
    name: 'Best Hatebears in MTG Commander, Ranked',
    items: [
      { name: 'Drannith Magistrate', description: 'Two mana to stop every opponent casting from anywhere but their hand — locking commanders in the command zone. The most brutal two-drop in the format.' },
      { name: 'Esper Sentinel', description: 'A one-mana artifact creature that taxes every opponent\'s first noncreature spell each turn or draws you a card. One-sided and never a dead draw.' },
      { name: 'Opposition Agent', description: 'Flash creature that hijacks opponents\' library searches and lets you play what they find. Punishes the most common action in Commander.' },
      { name: 'Grand Abolisher', description: 'Two mana for total protection during your turn — no counterspells, no removal, no interaction from opponents. The card that lets combos resolve.' },
      { name: 'Thalia, Guardian of Thraben', description: 'A 2/1 first striker taxing every noncreature spell {1} more. The archetype namesake and the default include for any creature-based white deck.' },
      { name: 'Collector Ouphe', description: 'Green\'s best hate piece — shuts off every artifact activated ability at the table, blanking mana rocks and artifact combos alike.' },
      { name: 'Archon of Emeria', description: 'A 2/3 flyer limiting each player to one spell per turn and taxing opponents\' nonbasic lands. Two strong effects on an evasive body.' },
      { name: 'Aven Mindcensor', description: 'Flash flyer that cuts every opponent library search down to the top four cards. A cheap trap that blanks tutors and fetches.' },
      { name: 'Containment Priest', description: 'Flash creature exiling any nontoken creature that enters without being cast. A one-card answer to reanimator and flicker decks.' },
      { name: 'Sanctum Prelate', description: 'Names a number on entry and stops all noncreature spells of that mana value from being cast. A surgical shutoff aimed at your pod\'s key costs.' },
    ],
  },
};
