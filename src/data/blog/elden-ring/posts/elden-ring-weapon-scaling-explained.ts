import type { BlogPost } from '../../blogTypes';

export const eldenRingWeaponScalingExplained: BlogPost = {
  slug: 'elden-ring-weapon-scaling-explained',
  game: 'elden-ring',
  category: 'advanced-strategy',
  topicCluster: 'elden-ring-builds',
  tags: ['scaling', 'upgrades', 'ashes-of-war', 'affinities', 'weapons', 'builds'],
  title: 'Elden Ring Weapon Scaling Explained: Letters to Damage',
  metaDescription:
    'What S, A, B, C, D and E actually mean in Elden Ring, the hidden numbers behind them, where stat points stop paying, and how affinities and upgrades rewrite it.',
  excerpt:
    'An S in Strength does not mean a weapon is good, and a D does not mean it is bad. Here is the real math behind Elden Ring scaling letters, upgrade multipliers, and affinity infusion — and where your stat points quietly stop being worth spending.',
  featuredImagePrompt:
    'A whetstone knife and a glowing smithing stone resting on a blacksmith anvil in a dim forge, sparks and golden light, close macro shot',
  heroImage: '/images/blog/elden-ring/elden-ring-weapon-scaling-explained/whetstone-knife.webp',
  heroImageAlt:
    'The Whetstone Knife key item in Elden Ring, found in the Gatefront Ruins cellar chest, which unlocks Ashes of War and affinity infusion at any Site of Grace.',
  imageSources: [
    {
      src: '/images/blog/elden-ring/elden-ring-weapon-scaling-explained/whetstone-knife.webp',
      sourceUrl: 'https://eldenring.fandom.com/wiki/File:ER_Icon_Key_Item_Whetstone_Knife.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/elden-ring/elden-ring-weapon-scaling-explained/smithing-stone-1.webp',
      sourceUrl: 'https://eldenring.fandom.com/wiki/File:ER_Icon_smithing_stone_1.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/elden-ring/elden-ring-weapon-scaling-explained/bloodhounds-fang.webp',
      sourceUrl: "https://eldenring.fandom.com/wiki/File:ER_Icon_weapon_Bloodhound's_Fang.png",
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/elden-ring/elden-ring-weapon-scaling-explained/iron-whetblade.webp',
      sourceUrl: 'https://eldenring.fandom.com/wiki/File:ER_Icon_Key_Item_Whetblade_Iron.png',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-20T00:00:00.000Z',
  lastUpdated: '2026-07-20T00:00:00.000Z',
  primaryKeyword: 'elden ring weapon scaling explained',
  secondaryKeywords: [
    'elden ring scaling letters',
    'elden ring soft caps',
    'elden ring affinity guide',
    'elden ring smithing stones',
    'elden ring somber smithing stone scaling',
    'elden ring whetblade locations',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-the-scaling-letters-actually-mean', label: 'What the scaling letters actually mean', level: 2 },
    { id: 'the-invisible-number-behind-the-letter', label: 'The invisible number behind the letter', level: 2 },
    { id: 'why-requirements-matter-more-than-scaling', label: 'Why requirements matter more than scaling', level: 2 },
    { id: 'where-your-stat-points-stop-paying', label: 'Where your stat points stop paying', level: 2 },
    { id: 'upgrades-are-the-real-damage-multiplier', label: 'Upgrades are the real damage multiplier', level: 2 },
    { id: 'standard-smithing-stones', label: 'Standard smithing stones', level: 3 },
    { id: 'somber-smithing-stones', label: 'Somber smithing stones', level: 3 },
    { id: 'affinities-rewrite-the-whole-equation', label: 'Affinities rewrite the whole equation', level: 2 },
    { id: 'the-basic-four', label: 'The basic four', level: 3 },
    { id: 'everything-else', label: 'Everything else', level: 3 },
    { id: 'where-to-find-every-whetblade', label: 'Where to find every whetblade', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Two players stand in the Roundtable Hold. One is holding a weapon with S-rank Strength scaling. The other is holding a D. The D is doing more damage. Nothing is broken, nobody is cheating, and this happens constantly — because the scaling letter on your weapon screen is a rounded summary of one variable in a three-variable equation, and most players treat it like the whole answer.

The letters are not a ranking of weapons. They rank how steeply a specific weapon converts one specific attribute into bonus damage on top of its base damage. If the base damage is low, a great conversion rate on a small number is still a small number.

## What the scaling letters actually mean

Every weapon that scales carries a hidden decimal called the scaling value, and the letter you see is just a bucket that value falls into:

| Letter | Hidden scaling value |
| --- | --- |
| S | above 1.75 |
| A | 1.4 to 1.75 |
| B | 0.9 to 1.3999 |
| C | 0.6 to 0.8999 |
| D | 0.25 to 0.5999 |
| E | below 0.25 |

Notice how uneven those buckets are. B runs from 0.9 all the way to 1.3999 — a weapon at the bottom of B and one at the top are more than 50% apart in conversion rate and display the same letter.

The bonus damage works out to roughly the scaling value multiplied by the weapon's base damage, multiplied by your stat scaling divided by 100. That middle term is why the letter alone is useless: a weapon with low base damage and an S will often lose to a weapon with high base damage and a C.

One more thing the letter does not touch: **scaling does not affect poise damage or stamina damage at all.** A colossal weapon staggers exactly as hard at 20 Strength as at 60. That is a huge part of why heavy weapons feel good long before your stats catch up.

## The invisible number behind the letter

The second variable is stat scaling — a value derived from your attribute that ramps up on a curve, not a line. Crucially, that curve differs by affinity type. For physical affinities (Standard, Heavy, Keen, Quality, and Occult) against everything else:

| Stat | Physical | Non-physical |
| --- | --- | --- |
| 10 | 15 | 19 |
| 20 | 35 | 40 |
| 30 | 46.5 | 53 |
| 40 | 57.5 | 66.5 |
| 50 | 67.5 | 80 |
| 60 | 75 | 85 |
| 70 | 82.5 | 90 |
| 80 | 90 | 95 |
| 99 | 96 | 100 |

Non-physical affinities are Fire, Flame Art, Lightning, Sacred, Magic, Cold, Blood, and Poison.

Read the columns side by side and one thing jumps out: **a non-physical infusion at 50 in the relevant stat has roughly the same scaling multiplier a physical infusion does not reach until nearly 70.** Building a Sacred or Lightning weapon, the points between 40 and 50 are the best value in the game. Building Heavy or Keen, those same points have already started to disappoint.

Both curves share the same headline: the run from 10 to 20 is the biggest jump anywhere on the chart, worth 20 points of scaling on the physical curve and 21 on the non-physical one. The run from 90 to 99 — nine full levels — is worth 3.5 and 2.5. There is a reason nobody sane runs 99 in a damage stat.

## Why requirements matter more than scaling

If you do not meet a weapon's attribute requirement, you do not just lose the scaling bonus. You take a flat **40% penalty** to the damage that stat governs.

The wiki's example is the humble Club: 103 base physical attack power, Strength requirement 10. A character at 9 Strength — one point short — swings that Club for 61 physical attack power. You lose 42 damage for being one point under.

![A Smithing Stone, the standard upgrade material that takes weapons to +25 in tiers of three levels.](/images/blog/elden-ring/elden-ring-weapon-scaling-explained/smithing-stone-1.webp)

This is the most common invisible mistake in early builds. Someone picks up the Bloodhound's Fang from Bloodhound Knight Darriwil in the Forlorn Hound Evergaol — an excellent early curved greatsword at 141 base physical, D Strength and C Dexterity scaling, with 55 Blood Loss buildup — and swings it at 14 Strength when the requirement is 18. It feels terrible, they conclude the weapon is bad, they shelve it. It was never the weapon.

Check the requirements. Meet the requirements. Only then judge the weapon.

## Where your stat points stop paying

Elden Ring's soft caps are not a myth and they are not the same everywhere. The ones worth memorizing:

- **Vigor** soft caps at 40 and again at 60. At 15 Vigor you have 522 HP, at 30 you have 994, at 40 you have 1,450. Past 40 the curve flattens hard.
- **Mind** soft caps at 50 and 60 for FP. Focus, which resists Sleep and Madness, does not gain anything at all until 31 Mind.
- **Endurance** soft caps at 15, 30, and 50 for stamina; at 25 and 60 for Equip Load. Robustness gains do not begin until 31.
- **Damage stats** follow the two curves above. Practical answer for most builds: stop around 55 to 60 in your primary damage stat unless you are pushing a very specific breakpoint.

Spell tools behave differently enough to call out. Staves and Seals that scale off a single stat gain *stronger* scaling after 25 and stronger again after 60, before falling off hard at 80 — a back-loaded curve that rewards committing. Catalysts scaling with more than one stat scale poorly below 15, spike between 15 and 30, then become nearly meaningless past 45.

The Meteorite Staff is a clean case study. S-rank Intelligence scaling, a Strength requirement of 6 — below the starting Strength of every origin in the game — and no upgrade path at all. It sits at 138 sorcery scaling at its minimum 18 Intelligence, 193 at 40 Int, 244 at 60, and 272 at 80. That S is real, but with no upgrades it goes from the strongest catalyst you can hold in Limgrave to a stat stick you keep only for the +30% it gives gravity sorceries.

## Upgrades are the real damage multiplier

Every upgrade level raises both base damage and scaling. This is where the actual power comes from, and it dwarfs stat investment early.

### Standard smithing stones

Nine variants exist, and they take a weapon to **+25**. Each tier of stone covers three upgrade levels, and the cost inside a tier is 2 stones, then 4, then 6. Ancient Dragon Smithing Stones are the exception — they are used exactly once, to go from +24 to +25.

Every standard upgrade level adds **2% of the weapon's base scaling.** Modest per level, but 25 levels of it compounds.

You do not have to farm these forever. Four **Smithing-Stone Miner's Bell Bearings** are scattered across the Lands Between, and handing them to the Twin Maiden Husks at the Roundtable Hold unlocks unlimited purchase of the corresponding tiers. The first two are arguably a bigger power spike than any single boss weapon.

### Somber smithing stones

Special weapons — Bloodhound's Fang, most boss weapons, most uniques — use Somber Smithing Stones instead. These cap at **+10**, and each level takes exactly one stone rather than 2/4/6.

Here is the part people miss: **somber weapons gain 8% of their base scaling per upgrade level, four times the standard rate.** A +10 somber weapon and a +25 standard weapon are meant to be roughly equivalent power, and a somber weapon reaches its ceiling far faster and far cheaper in materials.

![Bloodhound's Fang, a curved greatsword with 141 base physical attack power, D Strength and C Dexterity scaling, and 55 Blood Loss buildup.](/images/blog/elden-ring/elden-ring-weapon-scaling-explained/bloodhounds-fang.webp)

The trade-off is that somber weapons **cannot take Ashes of War and cannot be infused with an affinity.** What you see is what you get, forever. That is the real cost of the fast upgrade path.

## Affinities rewrite the whole equation

Once you have the Whetstone Knife — sitting in a chest in the underground cellar at Gatefront Ruins in Limgrave, alongside Ash of War: Storm Stomp — you can apply any of the 91 base-game Ashes of War at any Site of Grace, and optionally infuse an affinity while you do it.

Affinities do not just add an element. They rewrite the weapon's base damage split *and* its scaling letters, and there is no universal formula for how — different weapons respond to the same infusion in completely different ways. The only reliable method is to hold the infusion menu open and read the before-and-after numbers the game shows you. Ashes of War are not consumed either: they slot in, come out, and transfer between weapons freely. Experiment aggressively.

### The basic four

Standard, Heavy, Keen, and Quality. Heavy pushes scaling toward Strength, Keen toward Dexterity, Quality splits between both.

These four are special for a reason that matters enormously in practice: **only the basic four allow weapon buffs.** Every other affinity blocks grease, buff incantations, and buff sorceries from being applied to that weapon. If your build revolves around Bloodflame Blade or Black Flame's Protection or a good grease, you are locked into the basic four whether you like the damage numbers or not.

### Everything else

Magic, Fire, Flame Art, Lightning, Sacred, Poison, Blood, Cold, and Occult. These convert part of your damage to an element or add a status buildup, they swap your scaling onto Intelligence, Faith, or Arcane, and they lock out buffs.

They also constrain which skills pair with them. Magic and Cold pair with each other and the basic four; Fire and Flame Art likewise; Lightning and Sacred likewise; Poison, Blood, and Occult pair among themselves and the basic four. Try to put a Sacred ash on a Blood weapon and the game will simply not offer it.

One genuinely underused interaction: **Arcane scaling boosts Poison, Blood Loss, Sleep, and Madness buildup**, not just damage. An Occult infusion on a bleed weapon with 40+ Arcane makes the status proc land measurably faster, which is the entire reason Arcane bleed builds are as strong as they are.

## Where to find every whetblade

You need the corresponding whetblade in your inventory before the game will even show you an affinity. All five carry over into New Game Plus.

![The Iron Whetblade, found in Stormveil Castle behind an Imp Statue, which unlocks Heavy, Keen and Quality infusions.](/images/blog/elden-ring/elden-ring-weapon-scaling-explained/iron-whetblade.webp)

- **Whetstone Knife** — Gatefront Ruins, Limgrave. Chest in the underground cellar. Unlocks Ashes of War at Sites of Grace at all.
- **Iron Whetblade** — Stormveil Castle. On a corpse in an armory off the main hall with the Grafted Scion. The doorway is sealed by an Imp Statue and needs one Stonesword Key. Unlocks Heavy, Keen, and Quality.
- **Glintstone Whetblade** — Academy of Raya Lucaria. On a corpse in the side room west of the Debate Parlor Site of Grace, guarded by two Glintstone Sorcerers. Unlocks Magic and Cold.
- **Red-Hot Whetblade** — Redmane Castle, Caelid. Inside a small building northwest of the Chamber Outside the Plaza Site of Grace, past an Abductor Virgin. Unlocks Fire and Flame Art. Be careful with this one: reaching the Altus Plateau before you grab it makes it unobtainable until you have beaten Starscourge Radahn and exhausted Castellan Jerren's dialogue.
- **Sanctified Whetblade** — Fortified Manor, Leyndell. On the second floor beside the Hammer. Unlocks Lightning and Sacred.
- **Black Whetblade** — Night's Sacred Ground in Nokron, Eternal City. On a corpse beside the altar overlooking a Giant Silver Tear, reached from the Ancestral Woods Site of Grace. Unlocks Poison, Blood, and Occult.

The practical routing takeaway is that the Iron Whetblade is very early and very cheap — one Stonesword Key inside a castle you are already clearing — and Heavy or Keen on a good early weapon is usually a bigger damage jump than the next ten levels you were about to spend. Grab it on the way through Stormveil.

## Quick Action Checklist

- Stop reading the letter in isolation. **Open the infusion preview and compare the actual attack power numbers** before committing.
- **Meet every attribute requirement.** One point short costs you a flat 40% on that damage type.
- Level a **non-physical infusion stat to 50** and a **physical one toward 60**, then stop and put points into Vigor.
- Get **Vigor to 40** before optimizing anything else. 522 HP to 1,450 HP is the biggest survivability swing in the game.
- Grab the **Whetstone Knife at Gatefront Ruins** in your first hour and the **Iron Whetblade in Stormveil** for one Stonesword Key.
- Prioritize **Smithing-Stone Miner's Bell Bearings** — unlimited stones from the Twin Maiden Husks is a bigger power spike than most boss drops.
- Remember somber weapons gain **8% scaling per level** and cap at +10, but can never take an Ash of War or affinity.
- If you rely on weapon buffs or greases, stay on **Standard, Heavy, Keen, or Quality.** Everything else locks buffs out.
`,
  faq: [
    {
      question: 'Is S scaling always better than A or B in Elden Ring?',
      answer:
        'No. The letter only describes how steeply a weapon converts one attribute into bonus damage — it says nothing about the weapon’s base damage, which the bonus is calculated from. A weapon with low base damage and S scaling frequently loses to a weapon with high base damage and C scaling. Compare the actual attack power numbers in the upgrade or infusion preview instead of the letters.',
    },
    {
      question: 'What happens if I do not meet a weapon requirement in Elden Ring?',
      answer:
        'You take a flat 40% penalty to the damage type that attribute governs, on top of losing all scaling from it. The Club, for example, has 103 base physical attack power and a Strength requirement of 10; at 9 Strength it swings for 61. Being one point short is enormously expensive, so always meet the listed requirements before judging how a weapon feels.',
    },
    {
      question: 'What are the soft caps in Elden Ring?',
      answer:
        'Vigor soft caps at 40 and 60, Mind at 50 and 60 for FP, and Endurance at 15, 30, and 50 for stamina plus 25 and 60 for Equip Load. Damage stats follow a curve where the jump from 10 to 20 is the largest anywhere; non-physical infusions plateau around 50 while physical infusions keep paying until roughly 60 to 70.',
    },
    {
      question: 'Are somber weapons better than regular weapons in Elden Ring?',
      answer:
        'They are not stronger at their ceiling, but they get there far cheaper. Somber weapons cap at +10, cost one Somber Smithing Stone per level, and gain 8% of their base scaling per upgrade level — four times the 2% a standard weapon gains on its way to +25. The trade is that somber weapons can never take an Ash of War or an affinity infusion.',
    },
    {
      question: 'Which affinity should I use in Elden Ring?',
      answer:
        'If your build uses weapon buffs, greases, or buff spells, you must stay on Standard, Heavy, Keen, or Quality — every other affinity blocks buffs entirely. Otherwise pick the affinity that shifts scaling onto the stat you are actually leveling: Heavy for Strength, Keen for Dexterity, Magic for Intelligence, Sacred for Faith, and Occult or Blood for Arcane-driven status builds.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/elden-ring', anchor: 'Elden Ring coverage hub' },
    { href: '/blog/elden-ring/best-elden-ring-starting-class', anchor: 'Best Elden Ring starting class' },
    { href: '/blog/elden-ring/elden-ring-early-game-route', anchor: 'Elden Ring early game route' },
  ],
  externalSources: [
    {
      url: 'https://eldenring.fandom.com/wiki/Weapon_Scaling',
      title: 'Weapon Scaling — Elden Ring Wiki',
    },
    {
      url: 'https://eldenring.fandom.com/wiki/Ashes_of_War',
      title: 'Ashes of War — Elden Ring Wiki',
    },
    {
      url: 'https://eldenring.fandom.com/wiki/Smithing_Stones',
      title: 'Smithing Stones — Elden Ring Wiki',
    },
  ],
  tldr:
    'Scaling letters in Elden Ring are buckets for a hidden decimal — S is anything above 1.75, D is 0.25 to 0.5999 — and the bonus damage is that value multiplied by the weapon’s base damage, so a high-base C weapon routinely beats a low-base S. Meet every requirement (one point short costs a flat 40%), push non-physical infusions to about 50 and physical ones toward 60, and remember upgrades matter more than stats: somber weapons gain 8% scaling per level to +10 while standard weapons gain 2% per level to +25.',
};
