import type { BlogPost } from '../../blogTypes';

export const residentEvil4RemakeTreasureGuide: BlogPost = {
  slug: 'resident-evil-4-remake-treasure-guide',
  game: 'resident-evil-4',
  category: 'game-guides',
  topicCluster: 're4-guides',
  tags: ['resident-evil-4', 'remake', 'treasure', 'gemstones', 'pesetas'],
  title: 'RE4 Remake Treasure Guide: Every Gem Combination, Ranked',
  metaDescription:
    'Every gem-slotted treasure in the Resident Evil 4 remake, its base and max price, the full combination multiplier table, and the 108,000 peseta Elegant Crown build.',
  excerpt:
    "Selling a bare Elegant Crown gets you 19,000 pesetas. Selling the right one gets you 108,000. The gem combination system in the RE4 remake is the single biggest money multiplier in the game, and almost nobody uses it correctly.",
  featuredImagePrompt:
    'A gold jeweled crown set with red and yellow gemstones resting on a dark wooden merchant table, warm lantern light raking across the metal',
  heroImage: '/images/blog/resident-evil-4/resident-evil-4-remake-treasure-guide/elegant-crown.webp',
  heroImageAlt: 'The Elegant Crown treasure from the Resident Evil 4 remake with gemstones inlaid into all five of its recesses.',
  imageSources: [
    {
      src: '/images/blog/resident-evil-4/resident-evil-4-remake-treasure-guide/elegant-crown.webp',
      sourceUrl: 'https://residentevil.fandom.com/wiki/File:RE4R_Elegant_Crown_with_Gemstones.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/resident-evil-4/resident-evil-4-remake-treasure-guide/red-beryl.webp',
      sourceUrl: 'https://residentevil.fandom.com/wiki/File:RE4R_Red_Beryl.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/resident-evil-4/resident-evil-4-remake-treasure-guide/yellow-diamond.webp',
      sourceUrl: 'https://residentevil.fandom.com/wiki/File:RE4R_Yellow_Diamond.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/resident-evil-4/resident-evil-4-remake-treasure-guide/chalice.webp',
      sourceUrl: 'https://residentevil.fandom.com/wiki/File:RE4R_Chalice_of_Atonement_with_Gemstones.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/resident-evil-4/resident-evil-4-remake-treasure-guide/ornate-necklace.webp',
      sourceUrl: 'https://residentevil.fandom.com/wiki/File:RE4R_Ornate_Necklace_with_Gemstones.png',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-22T00:00:00.000Z',
  lastUpdated: '2026-07-22T00:00:00.000Z',
  primaryKeyword: 'resident evil 4 remake treasure guide',
  secondaryKeywords: [
    're4 remake gem combinations',
    're4 remake best treasure combinations',
    'resident evil 4 remake elegant crown',
    're4 remake astute appraiser',
    'resident evil 4 remake gemstone bonus',
    're4 remake treasure values',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'how-the-treasure-system-actually-works', label: 'How the treasure system actually works', level: 2 },
    { id: 'the-six-gems-three-round-three-rectangular', label: 'The six gems: three round, three rectangular', level: 2 },
    { id: 'the-full-combination-bonus-table', label: 'The full combination bonus table', level: 2 },
    { id: 'every-gem-slotted-treasure-and-its-ceiling', label: 'Every gem-slotted treasure and its ceiling', level: 2 },
    { id: 'the-elegant-crown-is-the-astute-appraiser-trophy', label: 'The Elegant Crown is the Astute Appraiser trophy', level: 2 },
    { id: 'the-108000-build', label: 'The 108,000 build', level: 3 },
    { id: 'the-100000-five-colors-build', label: 'The 100,000 five-colors build', level: 3 },
    { id: 'when-the-lower-multiplier-pays-more', label: 'When the lower multiplier pays more', level: 2 },
    { id: 'sell-only-treasures-no-thinking-required', label: 'Sell-only treasures: no thinking required', level: 2 },
    { id: 'how-to-spend-the-money', label: 'How to spend the money', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `A bare Elegant Crown sells to the Merchant for 19,000 pesetas. The exact same Crown, with five specific gems pushed into its five specific holes, sells for 108,000. That is an 89,000-peseta swing on one item, and it is entirely determined by a lookup table the game never shows you.

This is the mechanic most first playthroughs quietly waste. You pick up a Ruby, you see "3,000 ptas" on the Merchant's table, you sell it, you buy shotgun shells. Meanwhile the treasure that Ruby belonged in was worth more than a fully upgraded weapon.

Everything below is the 2023 remake. Base prices, max prices, and slot layouts are from the Resident Evil Wiki item entries, and every combination I list has been checked against those published max values so the arithmetic actually lands.

## How the treasure system actually works

There are two kinds of treasure in the remake. **Sell-only** treasures have a fixed price and a description line that literally reads "(For selling only.)" — the Staff of Royalty, Crystal Ore, Velvet Blue and friends. Take them to the Merchant, take the money, stop thinking about them.

The other kind has recesses. Their descriptions end with "(Can be inlaid with certain gemstones.)" and they list how many holes they have and what shape those holes are. Those treasures are the interesting ones, because their sale price is calculated like this:

**(base treasure value + total value of inserted gems) x combination multiplier**

That multiplier ranges from x1.1 to x2.0 depending on how many gems you fit and how their colors line up. Every slot has to be filled to earn a multiplier at all — a half-loaded treasure is just base plus gem value with no bonus, which is the same money you would have made selling the pieces separately.

The important consequence: **gems are not currency, they are ingredients.** A Yellow Diamond is worth 7,000 on its own. Inside a maxed Elegant Crown, that same Yellow Diamond contributes 7,000 x 1.8, which is 12,600. Selling gems raw is the mistake.

## The six gems: three round, three rectangular

![The Red Beryl gemstone item icon from the Resident Evil 4 remake, a rectangular-cut rose-red stone.](/images/blog/resident-evil-4/resident-evil-4-remake-treasure-guide/red-beryl.webp)

Shape is the hard constraint. A round recess takes a round-cut gem and nothing else. Six gems exist, split evenly:

| Gem | Cut | Color | Sells for |
| --- | --- | --- | --- |
| Ruby | Round | Crimson | 3,000 |
| Sapphire | Round | Azure | 4,000 |
| Yellow Diamond | Round | Yellow | 7,000 |
| Emerald | Rectangular | Green | 5,000 |
| Alexandrite | Rectangular | Violet | 6,000 |
| Red Beryl | Rectangular | Rose | 9,000 |

Two things fall straight out of that table. **The Yellow Diamond is the best round gem by a wide margin** — 7,000 against the Sapphire's 4,000 — and **the Red Beryl is the best rectangular gem**, at 9,000. Almost every maximum-value build in the game is some arrangement of Yellow Diamonds and Red Beryls, because color bonuses are multiplicative on a sum that those two gems inflate the most.

Red Beryl is also the one you have to hunt. It comes off the staff-wielding Zealots in the castle rather than sitting in a chest, so if you sprinted past those fights on your way to a [boss encounter](/blog/resident-evil-4/resident-evil-4-remake-boss-guide), you are short on the single most valuable rectangular stone.

## The full combination bonus table

Every complete set of gems has a named bonus. These do not stack — the game applies one multiplier, the highest one your arrangement qualifies for.

| Combination | What it means | Multiplier |
| --- | --- | --- |
| Two Colors | 2 gems, different colors | x1.1 |
| Duo | 2 gems, same color | x1.2 |
| Three Colors | 3 gems, all different | x1.3 |
| Trio | 3 gems, same color | x1.4 |
| Two Duos | 4 gems, two matching pairs | x1.5 |
| Four Colors | 4 gems, all different | x1.6 |
| Quartet | 4 gems, same color | x1.7 |
| Duo and Trio | 5 gems, a matching pair plus a matching triple | x1.8 |
| Quintet | 5 gems, same color | x1.9 |
| Five Colors | 5 gems, all different | x2.0 |

Note the shape of that list. At two, three and four gems, **matching colors beats mixing them**. At five gems it flips: Five Colors (x2.0) edges out Quintet (x1.9). That inversion is the single most counterintuitive thing about the system, and it is why people who correctly learned "match your colors" early get the biggest treasure in the game slightly wrong.

## Every gem-slotted treasure and its ceiling

![The Chalice of Atonement from the Resident Evil 4 remake with three rectangular gemstones set into its side.](/images/blog/resident-evil-4/resident-evil-4-remake-treasure-guide/chalice.webp)

Here is the whole set, with the arrangement that hits each treasure's published maximum:

| Treasure | Slots | Base | Max | Best fill |
| --- | --- | --- | --- | --- |
| Flagon | 2 round | 4,000 | 21,600 | Duo — 2 Yellow Diamonds |
| Splendid Bangle | 2 rectangular | 4,000 | 26,400 | Duo — 2 Red Beryls |
| Elegant Bangle | 2 round | 5,000 | 22,800 | Duo — 2 Yellow Diamonds |
| Elegant Mask | 3 round | 5,000 | 36,400 | Trio — 3 Yellow Diamonds |
| Butterfly Lamp | 3 round | 6,000 | 37,800 | Trio — 3 Yellow Diamonds |
| Chalice of Atonement | 3 rectangular | 7,000 | 47,600 | Trio — 3 Red Beryls |
| Extravagant Clock | 1 rect + 1 round | 9,000 | 27,500 | Two Colors — Red Beryl + Yellow Diamond |
| Golden Lynx | 1 rect + 2 round | 15,000 | 45,600 | Duo — Red Beryl + 2 Yellow Diamonds |
| Ornate Necklace | 2 rect + 2 round | 11,000 | 64,500 | Two Duos — 2 Red Beryls + 2 Yellow Diamonds |
| Elegant Crown | 3 rect + 2 round | 19,000 | 108,000 | Duo and Trio — 3 Red Beryls + 2 Yellow Diamonds |

Run the Chalice of Atonement to check the math: 7,000 base plus three Red Beryls at 9,000 each is 34,000, times the x1.4 Trio bonus is 47,600. That is exactly its listed maximum. The formula holds across all ten.

The Chalice, by the way, is a Village-chapter pickup sitting in a treasure box in a cabin before the Checkpoint area. You will find it long before you have three Red Beryls, which are a castle drop. **Do not sell it at 7,000 to fund an early upgrade.** Hold it. A 40,600-peseta difference is worth carrying three inventory squares for a few chapters, and if space is your problem, the [beginner guide](/blog/resident-evil-4/resident-evil-4-remake-beginner-guide) covers why case upgrades come before guns.

## The Elegant Crown is the Astute Appraiser trophy

![The Ornate Necklace from the Resident Evil 4 remake fitted with four gemstones in its rectangular and round recesses.](/images/blog/resident-evil-4/resident-evil-4-remake-treasure-guide/ornate-necklace.webp)

There is an award called **Astute Appraiser**: sell a single treasure for at least 100,000 pesetas. Exactly one treasure in the main game can clear that bar, and it is the Elegant Crown — 19,000 base, three rectangular recesses and two round ones. As of March 2026 only about 37% of Steam players had unlocked it, which tells you how many people sold the pieces instead.

Two builds get you there. One is the maximum; the other is the achievement floor and much easier to assemble.

### The 108,000 build

Fill it with a **Duo and Trio** — three matching rectangular gems and two matching round ones:

- 3x Red Beryl (rectangular, 9,000 each = 27,000)
- 2x Yellow Diamond (round, 7,000 each = 14,000)

That is 19,000 + 41,000 = 60,000 raw, times the x1.8 Duo and Trio bonus = **108,000 pesetas**. It is the highest single sale available in the game.

### The 100,000 five-colors build

If you cannot bank three Red Beryls, the x2.0 **Five Colors** bonus gets you over the line with cheaper stones, because the multiplier does the heavy lifting:

- Rectangular: Red Beryl (9,000) + Alexandrite (6,000) + Emerald (5,000)
- Round: Yellow Diamond (7,000) + Sapphire (4,000)

19,000 + 31,000 = 50,000 raw, times x2.0 = **exactly 100,000 pesetas**. It clears Astute Appraiser by a single peseta of margin and needs only one Red Beryl. If a Ruby is all you have left for the second round slot, you drop under the threshold — Sapphire or better is mandatory here.

Worth knowing: a Quintet (all five gems the same color) tops out lower than both. Three Red Beryls plus two Rubies is 33,000 in gems, 52,000 raw, times x1.9 = 98,800. The "all matching" instinct actively costs you the trophy.

## When the lower multiplier pays more

![The Yellow Diamond gemstone item icon from the Resident Evil 4 remake, a round-cut yellow stone.](/images/blog/resident-evil-4/resident-evil-4-remake-treasure-guide/yellow-diamond.webp)

The bonus table is not the whole answer, because the multiplier applies to a total that gem values already control. Two treasures make this obvious.

**Golden Lynx** (1 rectangular, 2 round, base 15,000). Chasing a bigger multiplier here means reaching for cheap stones. Even a x1.4 Trio built around Rubies only gets you to 42,000, because the three gems together are worth 15,000. Red Beryl plus two Yellow Diamonds is a plain x1.2 Duo, but 23,000 in gems makes it 38,000 raw and **45,600** at the register. The worse bonus wins by 3,600, because a Yellow Diamond is worth more than double a Ruby.

**Extravagant Clock** (1 rectangular, 1 round, base 9,000). The best x1.2 Duo pairing you can assemble tops out at 25,200. Red Beryl plus Yellow Diamond is a mere Two Colors at x1.1, and it still pays **27,500**.

The rule of thumb that survives all ten treasures: **load the most expensive legal gem into every slot first, then see which bonus you happen to have.** Only chase a specific color arrangement when it does not force you to downgrade a stone — which, in practice, means only on the Elegant Crown.

## Sell-only treasures: no thinking required

These have no recesses and no decisions attached. Sell them the moment you see the Merchant, since carrying them costs inventory space you would rather spend on ammo:

| Treasure | Value |
| --- | --- |
| Staff of Royalty | 25,000 |
| Iluminados Pendant | 18,000 |
| Depraved Idol | 15,000 |
| Crystal Ore | 14,000 |
| Elegant Chessboard | 13,000 |
| Justitia Statue | 12,000 |
| Ornate Beetle | 12,000 |
| Gold Bar | 10,000 |
| Golden Hourglass | 10,000 |
| Mirror with Pearls and Rubies | 10,000 |
| Elegant Headdress | 7,000 |
| Velvet Blue | 2,500 |

The Staff of Royalty is the fattest single sell-only payout at 25,000, tucked in an ornate chest down a ladder in the island ruins after the Novistador swarm in Chapter 15. It is genuinely easy to walk past.

## How to spend the money

A maxed Elegant Crown at 108,000 plus a maxed Ornate Necklace at 64,500 is 172,500 pesetas from two items. That is more than the 9x13 attaché case (64,000) and the Broken Butterfly (42,000) combined, with change left over.

Because treasure income arrives in these enormous lumps rather than a steady trickle, the right move is to decide your endgame loadout early and bank toward it instead of nibbling at cheap upgrades. The [weapon upgrade guide](/blog/resident-evil-4/resident-evil-4-remake-weapon-upgrade-guide) covers which exclusive upgrades justify the outlay, and the [Merchant and spinel guide](/blog/resident-evil-4/resident-evil-4-remake-merchant-guide) explains the parallel currency you cannot buy with pesetas at all.

One last piece of discipline: treasure prices are fixed, so there is never a reason to sell a gem-slotted item early "just in case." Nothing in the game devalues it, and the Merchant never runs out of money.

## Quick Action Checklist

- **Never sell a loose gem.** Inside a maxed treasure it is worth up to double.
- Round recesses take Ruby, Sapphire or Yellow Diamond. Rectangular take Emerald, Alexandrite or Red Beryl.
- Fill every slot. A partial fill earns no multiplier at all.
- Default to Yellow Diamond in round slots and Red Beryl in rectangular ones, then check which bonus you landed.
- Elegant Crown, 3 Red Beryls + 2 Yellow Diamonds = 108,000, the biggest sale in the game.
- No Red Beryls to spare? Five different colors in the Crown pays exactly 100,000 and still clears Astute Appraiser.
- Do not build a Quintet in the Crown — all-matching pays 98,800 and misses the trophy.
- Hang on to the Chalice of Atonement from the Village. Three Red Beryls turn 7,000 into 47,600.
- Sell-only treasures go the second you reach a Merchant. They only cost you case space.
- Farm staff-wielding Zealots in the castle. They are the Red Beryl source and the bottleneck on every big build.
`,
  faq: [
    {
      question: 'What is the most valuable treasure in the Resident Evil 4 remake?',
      answer:
        'The Elegant Crown. It sells for 19,000 pesetas bare, but with three Red Beryls in its rectangular recesses and two Yellow Diamonds in its round ones it triggers the x1.8 Duo and Trio bonus and sells for 108,000 pesetas. That is the single largest sale available in the main game and the only treasure that can clear the 100,000 threshold for the Astute Appraiser award.',
    },
    {
      question: 'How do gem combination bonuses work in RE4 remake?',
      answer:
        'The sale price is the treasure base value plus the total value of the inserted gems, multiplied by a combination bonus. You only earn a bonus if every recess is filled. The multipliers run from x1.1 for two gems of different colors up to x2.0 for five gems of five different colors. Only one bonus applies at a time — the highest your arrangement qualifies for.',
    },
    {
      question: 'Should I match gem colors in Resident Evil 4 remake?',
      answer:
        'Usually, but not always. At two, three and four gems, matching colors beats mixing them (x1.2 Duo over x1.1 Two Colors, x1.4 Trio over x1.3 Three Colors, x1.7 Quartet over x1.6 Four Colors). At five gems it inverts: Five Colors pays x2.0 while an all-matching Quintet pays only x1.9. And gem values can override the bonus entirely — a Golden Lynx filled with a Red Beryl and two Yellow Diamonds pays 45,600 at x1.2, beating any x1.4 Trio arrangement, which tops out at 42,000 because it forces cheaper stones into the round slots.',
    },
    {
      question: 'Which gems are round and which are rectangular in RE4 remake?',
      answer:
        'Round-cut gems are the Ruby (3,000 pesetas), Sapphire (4,000) and Yellow Diamond (7,000). Rectangular-cut gems are the Emerald (5,000), Alexandrite (6,000) and Red Beryl (9,000). A recess only accepts its matching shape, so the Yellow Diamond and Red Beryl are the highest-value option for round and rectangular slots respectively.',
    },
    {
      question: 'How do I get the Astute Appraiser award in Resident Evil 4 remake?',
      answer:
        'Sell a single treasure for at least 100,000 pesetas, which in the main game means the Elegant Crown. The maximum build is three Red Beryls plus two Yellow Diamonds for 108,000. If you are short on Red Beryls, five different colors — Red Beryl, Alexandrite and Emerald in the rectangular slots, Yellow Diamond and Sapphire in the round ones — hits exactly 100,000 thanks to the x2.0 Five Colors bonus.',
    },
    {
      question: 'Where do I find Red Beryl in the Resident Evil 4 remake?',
      answer:
        'Red Beryl is dropped by staff-wielding Zealots encountered throughout the castle rather than found in chests. At 9,000 pesetas it is the most valuable rectangular gem in the game, and because the best Chalice of Atonement and Elegant Crown builds each want three of them, those enemies are the practical bottleneck on your biggest treasure sales.',
    },
    {
      question: 'Should I sell treasures immediately in RE4 remake?',
      answer:
        'Sell-only treasures like the Staff of Royalty, Crystal Ore and Gold Bar should go at the first Merchant, since holding them only costs inventory space. Treasures with recesses should be held until you can fill every slot — a Chalice of Atonement sold bare is 7,000 pesetas, but the same Chalice with three Red Beryls is 47,600. Prices never change, so there is no risk in waiting.',
    },
    {
      question: 'Is the Ornate Necklace worth combining in Resident Evil 4 remake?',
      answer:
        'Yes. It has two rectangular and two round recesses, a base value of 11,000 pesetas, and a maximum of 64,500. Two Red Beryls plus two Yellow Diamonds forms a Two Duos combination at x1.5 on a 43,000 raw total. Note that the higher-multiplier Four Colors (x1.6) and Quartet (x1.7) arrangements both pay less here because they force you to use cheaper stones.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/resident-evil-4', anchor: 'Resident Evil 4 coverage hub' },
    { href: '/blog/resident-evil-4/resident-evil-4-remake-beginner-guide', anchor: 'Resident Evil 4 remake beginner guide' },
    { href: '/blog/resident-evil-4/resident-evil-4-remake-merchant-guide', anchor: 'Resident Evil 4 remake Merchant and spinel guide' },
    { href: '/blog/resident-evil-4/resident-evil-4-remake-weapon-upgrade-guide', anchor: 'Resident Evil 4 remake weapon upgrade guide' },
    { href: '/blog/resident-evil-4/resident-evil-4-remake-boss-guide', anchor: 'Resident Evil 4 remake boss guide' },
  ],
  externalSources: [
    {
      url: 'https://residentevil.fandom.com/wiki/Elegant_Crown_(RE4_Remake)',
      title: 'Resident Evil Wiki — Elegant Crown base and maximum sale value',
    },
    {
      url: 'https://residentevil.fandom.com/wiki/Chalice_of_Atonement_(RE4_Remake)',
      title: 'Resident Evil Wiki — Chalice of Atonement recesses and pricing',
    },
    {
      url: 'https://residentevil.fandom.com/wiki/Astute_Appraiser',
      title: 'Resident Evil Wiki — Astute Appraiser award requirements',
    },
    {
      url: 'https://residentevil.fandom.com/wiki/Red_Beryl_(RE4_Remake)',
      title: 'Resident Evil Wiki — Red Beryl value and source',
    },
  ],
  tldr:
    'Gem-slotted treasures sell for (base value + gem values) x a combination multiplier, and every recess must be filled to earn one. Default to Yellow Diamonds in round slots and Red Beryls in rectangular ones. The Elegant Crown with 3 Red Beryls and 2 Yellow Diamonds sells for 108,000 pesetas, the biggest sale in the game; five different colors in it pays exactly 100,000 and still earns the Astute Appraiser award. Never sell a loose gem.',
};
