import type { BlogPost } from '../../blogTypes';

export const eldenRingAshesOfWarGuide: BlogPost = {
  slug: 'elden-ring-ashes-of-war-guide',
  game: 'elden-ring',
  category: 'game-guides',
  topicCluster: 'elden-ring-builds',
  tags: ['ashes-of-war', 'affinities', 'whetblades', 'weapons', 'builds'],
  title: 'Elden Ring Ashes of War Guide: Affinities, Whetblades, and the Ashes Worth Farming',
  metaDescription:
    'How Ashes of War and affinities really work in Elden Ring, all five Whetblade locations, and the specific Ashes worth detouring for on a first run.',
  excerpt:
    'There are 91 Ashes of War in the base game and thirteen affinities to bolt onto them, and the game explains almost none of it. Here is the system, the five Whetblade locations, and the short list of Ashes that are actually worth a detour.',
  featuredImagePrompt:
    'A whetstone knife and glowing ember-lit ash resting on a stone altar beside a longsword, golden Site of Grace light, dark fantasy',
  heroImage: '/images/blog/elden-ring/elden-ring-ashes-of-war-guide/whetstone-knife.webp',
  heroImageAlt:
    'The Whetstone Knife key item in Elden Ring, found in the Gatefront Ruins cellar chest, which unlocks applying Ashes of War at any Site of Grace.',
  imageSources: [
    {
      src: '/images/blog/elden-ring/elden-ring-ashes-of-war-guide/whetstone-knife.webp',
      sourceUrl: 'https://eldenring.fandom.com/wiki/File:ER_Icon_Key_Item_Whetstone_Knife.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/elden-ring/elden-ring-ashes-of-war-guide/iron-whetblade.webp',
      sourceUrl: 'https://eldenring.fandom.com/wiki/File:ER_Icon_Key_Item_Whetblade_Iron.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/elden-ring/elden-ring-ashes-of-war-guide/black-whetblade.webp',
      sourceUrl: 'https://eldenring.fandom.com/wiki/File:ER_Icon_Key_Item_Whetblade_Black.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/elden-ring/elden-ring-ashes-of-war-guide/bloodhounds-step.webp',
      sourceUrl: "https://eldenring.fandom.com/wiki/File:ER_Icon_ash_of_war_Bloodhound's_Step.png",
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/elden-ring/elden-ring-ashes-of-war-guide/seppuku-scarab-location.webp',
      sourceUrl: "https://eldenring.fandom.com/wiki/File:Ash_of_War-_Seppuku_-_Scarab_Location_-_Photo.jpg",
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-22T00:00:00.000Z',
  lastUpdated: '2026-07-22T00:00:00.000Z',
  primaryKeyword: 'elden ring ashes of war guide',
  secondaryKeywords: [
    'elden ring affinities explained',
    'elden ring whetblade locations',
    'best ashes of war elden ring',
    'elden ring whetstone knife location',
    'elden ring black whetblade',
    'elden ring bloodhounds step location',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-ashes-of-war-actually-do', label: 'What Ashes of War actually do', level: 2 },
    { id: 'get-the-whetstone-knife-in-the-first-hour', label: 'Get the Whetstone Knife in the first hour', level: 2 },
    { id: 'the-13-affinities-and-the-four-that-matter-most', label: 'The 13 affinities, and the four that matter most', level: 2 },
    { id: 'the-basic-four-standard-heavy-keen-quality', label: 'The basic four: Standard, Heavy, Keen, Quality', level: 3 },
    { id: 'the-nine-that-cost-you-your-buffs', label: 'The nine that cost you your buffs', level: 3 },
    { id: 'every-whetblade-and-where-it-hides', label: 'Every Whetblade and where it hides', level: 2 },
    { id: 'the-ashes-worth-a-detour', label: 'The Ashes worth a detour', level: 2 },
    { id: 'damage-lions-claw-flame-of-the-redmanes-seppuku', label: 'Damage — Lion\'s Claw, Flame of the Redmanes, Seppuku', level: 3 },
    { id: 'survival-bloodhounds-step-endure-barbaric-roar', label: 'Survival — Bloodhound\'s Step, Endure, Barbaric Roar', level: 3 },
    { id: 'buffs-golden-vow-royal-knights-resolve-determination', label: 'Buffs — Golden Vow, Royal Knight\'s Resolve, Determination', level: 3 },
    { id: 'the-scaling-trap-nobody-warns-you-about', label: 'The scaling trap nobody warns you about', level: 2 },
    { id: 'mistakes-that-cost-people-hours', label: 'Mistakes that cost people hours', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `There is a chest in a cellar at Gatefront Ruins, maybe six minutes from where the game starts, and it contains the single most build-relevant item in Elden Ring. Not a weapon. A whetstone. Miss it and you spend forty hours swinging weapons with whatever skill FromSoftware bolted on at the factory.

Ashes of War are the closest thing Elden Ring has to a build editor. There are 91 of them in the base game, thirteen affinities to pair them with, and five Whetblades scattered across the map that gate which of those affinities you're even allowed to pick. The game tells you none of this. So here it is.

## What Ashes of War actually do

An Ash of War does two things at once, and people consistently only think about the first.

**It replaces the weapon's skill.** Your Longsword's default Square Off becomes Lion's Claw, or Bloodhound's Step, or Golden Vow. That's the flashy part.

**It also sets the weapon's affinity** — the damage type and stat scaling. Every Ash has a "native" affinity it applies by default (Bloody Slash is Blood, Lion's Claw is Heavy, Sacred Blade is Sacred), but if you own the right Whetblade you can override that and keep the skill while choosing a different infusion. This is the part that quietly rebuilds your character.

Three rules that save you a lot of grief:

- **Ashes are not consumed.** They slot in, and you can pull them back out or move them to another weapon whenever you want, for free, at a Site of Grace. There is no penalty for experimenting.
- **Ashes only work on regular Smithing Stone weapons.** Anything upgraded with Somber Smithing Stones — most unique and boss weapons — cannot take an Ash of War or change affinity at all. That Moonveil you were planning to slap Bloodhound's Step onto? No.
- **Each Ash has a weapon-type whitelist.** Kick goes on any melee armament. Piercing Fang needs something that thrusts. Prelate's Charge only fits large and colossal axes and hammers.

You apply them at any Site of Grace once you have the Whetstone Knife, or through Smithing Master Hewg at Roundtable Hold. And if you find an Ash you want two copies of, Hewg will duplicate it in exchange for a Lost Ashes of War — a consumable you'll pick up naturally from map exploration.

## Get the Whetstone Knife in the first hour

Gatefront Ruins, Limgrave. It's the ruined camp on the road north of the first Site of Grace, the one crawling with soldiers and a couple of dogs. Ride past them on Torrent, find the stairs down into the cellar, open the chest. Inside: the Whetstone Knife and **Ash of War: Storm Stomp**.

That's it. No boss, no key, no gate. It should be a mandatory stop on [any sensible opening route through Limgrave](/blog/elden-ring/elden-ring-early-game-route), and the fact that thousands of players walk past that camp on their way to Stormveil is the reason so many first playthroughs feel stiff.

Storm Stomp itself is a genuinely good early Ash — a Quality-affinity stomp that staggers crowds and costs almost nothing — but the knife is the prize. From that moment, every regular weapon in your inventory is reconfigurable.

## The 13 affinities, and the four that matter most

Thirteen affinities exist: Standard, Heavy, Keen, Quality, Magic, Cold, Fire, Flame Art, Lightning, Sacred, Poison, Blood, and Occult. They split into two groups with very different rules.

### The basic four: Standard, Heavy, Keen, Quality

Standard (the default), Heavy, Keen, and Quality are the physical infusions, and they are the only four that **let you keep using weapon buffs**. Grease, Bloodflame Blade, Golden Vow's weapon-buff cousins, sorceries and incantations that coat your blade — all of that is locked out the moment you infuse anything outside these four. That's not a small footnote; a Faith build that buffs its own weapon frequently does more damage on a Standard or Heavy blade than on a Sacred one.

- **Heavy** boosts Strength scaling, cuts base damage, and removes Dexterity scaling entirely.
- **Keen** boosts Dexterity scaling and cuts both base damage and Strength scaling.
- **Quality** splits the difference across Strength and Dexterity, lowering base damage.

Those trade-offs are why [understanding how scaling letters convert stats into damage](/blog/elden-ring/elden-ring-weapon-scaling-explained) matters more than the affinity name. Heavy on a weapon with poor base Strength scaling is a downgrade, not an upgrade.

![The Iron Whetblade, the Stormveil Castle key item that unlocks the Heavy, Keen and Quality affinities for Ashes of War.](/images/blog/elden-ring/elden-ring-ashes-of-war-guide/iron-whetblade.webp)

### The nine that cost you your buffs

Everything else adds a damage type or a status effect and takes something away:

| Affinity | Adds | Costs you |
| --- | --- | --- |
| Magic | Magic damage, Intelligence scaling | Physical damage, Str/Dex scaling |
| Cold | Magic damage, Int scaling, Frostbite buildup | Physical damage, Str/Dex scaling, other buildups |
| Fire | Fire damage, boosts Strength scaling | Physical damage, Dexterity scaling |
| Flame Art | Fire damage, Faith scaling | Physical damage, Str/Dex scaling |
| Lightning | Lightning damage, boosts Dexterity scaling | Physical damage, Strength scaling |
| Sacred | Holy damage, Faith scaling | Physical damage, Str/Dex scaling |
| Poison | Poison buildup, Arcane scaling | Physical damage, Str/Dex scaling, other buildups |
| Blood | Blood loss buildup, Arcane scaling | Physical damage, Str/Dex scaling, other buildups |
| Occult | Arcane scaling | All physical and other stat scaling |

There's a second restriction people trip over constantly: **non-basic affinities restrict which skills you can pair them with.** Magic and Cold skills only combine with the basic four or with each other. Fire and Flame Art likewise. Lightning and Sacred pair together. Poison, Blood, and Occult form the last cluster. So you cannot take a Sacred-affinity skill and infuse it Cold — the menu simply won't offer it.

## Every Whetblade and where it hides

The Whetstone Knife alone only gives you Standard plus each Ash's native affinity. Everything else needs a Whetblade, and each one is a physical item in the world. All five carry over into NG+.

| Whetblade | Unlocks | Location |
| --- | --- | --- |
| Iron Whetblade | Heavy, Keen, Quality | Stormveil Castle — armory off the main hall with the Grafted Scion, behind an Imp Statue (1 Stonesword Key) |
| Glintstone Whetblade | Magic, Cold | Academy of Raya Lucaria — side room west of the Debate Parlor grace, guarded by two Glintstone Sorcerers |
| Red-Hot Whetblade | Fire, Flame Art | Redmane Castle, Caelid — small building northwest of the Chamber Outside the Plaza grace |
| Sanctified Whetblade | Sacred, Lightning | Leyndell, Royal Capital — second floor of the Fortified Manor |
| Black Whetblade | Poison, Blood, Occult | Nokron, Eternal City — by the altar overlooking the Giant Silver Tear, reached from the Ancestral Woods grace |

Two of those deserve warnings.

**The Red-Hot Whetblade is missable-adjacent.** If you reach the Altus Plateau before grabbing it, Redmane Castle transitions to its festival state and the item becomes unavailable until you've killed Starscourge Radahn and exhausted Castellan Jerren's dialogue. If you're running a Fire or Flame Art build, get it before you ride the Grand Lift.

**The Black Whetblade is behind Nokron**, which means it's behind Radahn as well, since beating him is what opens the starscourge crater into the underground city. Bleed builds do not come fully online until then — which is worth knowing when you're [planning which bosses to fight in what order](/blog/elden-ring/elden-ring-boss-order-guide).

![The Black Whetblade, found in Nokron, Eternal City, which unlocks the Poison, Blood and Occult affinities.](/images/blog/elden-ring/elden-ring-ashes-of-war-guide/black-whetblade.webp)

## The Ashes worth a detour

You will collect dozens of these passively — most Ashes of War drop from Teardrop Scarabs, the little glowing beetles that scuttle away when you approach, and the rest come from chests, merchants, Night's Cavalry drops, and the occasional Remembrance. These are the ones worth going out of your way for.

### Damage — Lion's Claw, Flame of the Redmanes, Seppuku

**Lion's Claw** (Heavy, 20 FP) is a forward somersault slam that fits swords, axes and hammers above dagger size. It's the default answer for any Strength weapon because it does big poise damage, closes distance, and has enough forward momentum to punish a boss's recovery frames. Kill the Elder Lion at Fort Gael in Caelid — it can't leave the fort's dirt floor, so it's safe to whittle down from range.

**Flame of the Redmanes** (Fire, 14 FP) is a wide frontal burst of flame on any melee armament, and it is the cheapest reliable stagger tool in the game. Two casts break most humanoid enemies' poise outright. Invisible scarab northeast of the Fort Gael North grace, also in Caelid.

**Seppuku** (Blood) is the bleed build. You stab yourself, take chip damage, and get a large attack-power boost plus massively improved blood loss buildup for the duration. Pair it with a Blood-affinity Nagakiba or a Rivers of Blood-adjacent setup and things melt. Invisible scarab on the north side of the Frozen Lake in the Mountaintops of the Giants — late, but the payoff is real.

![The Frozen Lake in the Mountaintops of the Giants, where the invisible scarab carrying Ash of War: Seppuku patrols.](/images/blog/elden-ring/elden-ring-ashes-of-war-guide/seppuku-scarab-location.webp)

### Survival — Bloodhound's Step, Endure, Barbaric Roar

**Bloodhound's Step** (Keen, 5 FP) is the most quietly overpowered thing in this article. Five FP for a dodge that goes further than a normal roll, moves faster, and makes you briefly invisible with generous invincibility frames. It is not subtle and it trivializes several fights. Kill the Night's Cavalry that patrols the eastern bridge in Dragonbarrow at night — bring a horse and a lot of patience.

**Endure** (Heavy, 9 FP) plants your feet, spikes your poise, and reduces incoming damage while active. It's the trade tool: hold Endure, eat the hit, keep swinging through it with a colossal weapon. Bernahl sells it for 600 runes at the Warmaster's Shack in Stormhill, which makes it the earliest premium Ash in the game.

**Barbaric Roar** (Heavy) buffs your attack power and converts your heavy attacks into savage combos for the duration. On greataxes and colossal weapons it turns a slow, committal moveset into something that actually finishes an enemy inside one opening. Scarab at Ravine-Veiled Village in northern Liurnia.

![Ash of War: Bloodhound's Step, a Keen-affinity skill costing 5 FP that grants a fast, invisible dodge.](/images/blog/elden-ring/elden-ring-ashes-of-war-guide/bloodhounds-step.webp)

### Buffs — Golden Vow, Royal Knight's Resolve, Determination

**Golden Vow** (Sacred, 40 FP) raises attack and defense for you and nearby allies — including your summoned spirit ash. Forty FP is steep, but a pre-boss Golden Vow on a swapped-in cheap weapon is one of the highest-value fifteen seconds in the game. Drops from a mounted Godrick Knight on a hill northeast of the Warmaster's Shack.

**Royal Knight's Resolve** (Quality) greatly powers up your next attack. Combine it with a slow, enormous weapon and you get one of the most satisfying single hits available. It's on a corpse in Volcano Manor, behind an Imp Statue.

**Determination** (Quality) is the same idea at a smaller magnitude, and you can have it in your first two hours — the scarab on the stone bridge north of Agheel Lake carries it. Slap it on whatever your [starting class](/blog/elden-ring/best-elden-ring-starting-class) handed you and your damage per opening roughly doubles against tough early enemies.

## The scaling trap nobody warns you about

Here's the part that separates people who understand Ashes of War from people who just like the animations: **skill damage does not all scale the same way.**

Some skills scale off your weapon's total attack rating and your stats, meaning the best infusion for the skill is whatever infusion maximizes the weapon. Lion's Claw behaves this way — a Keen-infused, fully upgraded Flamberge in the hands of a Dexterity character will out-damage the same weapon carrying Lion's Claw's default Heavy infusion, because Keen is the better fit for that character's stats.

Other skills are hard-tied to their native affinity's damage type. Ground Slam does less damage under any infusion other than Heavy, even when a different infusion would give the weapon a higher attack rating on paper.

There is no in-game indicator for which is which. The practical rule: **if the skill's damage looks physical and comes off your blade, infuse for your stats; if it produces its own effect — flames, frost, a shockwave — respect its native affinity.** When in doubt, apply both, hit the same enemy twice, and compare. Ashes cost nothing to swap, which makes this a thirty-second test rather than a theory argument.

## Mistakes that cost people hours

- **Infusing off the basic four while running a buff-heavy build.** Losing access to grease and weapon-buff incantations is a bigger DPS hit than any elemental infusion gives back.
- **Forgetting Somber weapons are locked.** If you're building around a unique weapon, your Ashes of War collection is irrelevant to it. Plan around the skill it comes with.
- **Chasing Bloodhound's Step at level 30.** The Dragonbarrow Night's Cavalry will erase you. Come back.
- **Not testing.** Because Ashes and affinities are free to swap and free to remove, the correct workflow is to carry two copies of your main weapon at similar upgrade levels and A/B them.
- **Overlooking pre-equipped Ashes.** Some weapons ship with an Ash already slotted — the Nagakiba comes with Piercing Fang despite Unsheathe being its true base skill — which means you can strip it off and put it on something else.

## Quick Action Checklist

- **Loot the Gatefront Ruins cellar chest first.** Whetstone Knife plus Ash of War: Storm Stomp, no boss required.
- **Grab the Iron Whetblade inside Stormveil** — one Stonesword Key for Heavy, Keen and Quality is the best key spend in the early game.
- **Get the Red-Hot Whetblade before the Grand Lift of Dectus** if you want Fire or Flame Art, or you'll be waiting on Radahn.
- **Stay on the basic four** if your build buffs its own weapon. Infuse elemental only if you don't.
- **Buy Endure from Bernahl for 600 runes** the first time you have the spare currency.
- **Test, don't theorize.** Ashes are free to apply, free to remove, and free to move — there is no wrong answer you can't undo in ten seconds at a Grace.
`,
  faq: [
    {
      question: 'Where do you get the Whetstone Knife in Elden Ring?',
      answer:
        'In a chest in the underground cellar at Gatefront Ruins in Limgrave, a few minutes north of the game\'s opening area. The same chest holds Ash of War: Storm Stomp. There is no boss or key requirement — just get past the soldiers camped there. The Whetstone Knife is what lets you apply Ashes of War at any Site of Grace instead of needing a blacksmith.',
    },
    {
      question: 'How many Ashes of War are there in Elden Ring?',
      answer:
        'There are 91 Ashes of War in the base game, spread across thirteen affinities. Heavy has the most at 14, followed by Standard and Quality at 12 each, Keen and Sacred at 11, and Magic at 10. The rarest native affinities are Flame Art and Poison with two Ashes each.',
    },
    {
      question: 'Where are all five Whetblades in Elden Ring?',
      answer:
        'Iron Whetblade (Heavy, Keen, Quality) is in Stormveil Castle behind an Imp Statue near the main hall. Glintstone Whetblade (Magic, Cold) is west of the Debate Parlor grace in the Academy of Raya Lucaria. Red-Hot Whetblade (Fire, Flame Art) is in Redmane Castle in Caelid. Sanctified Whetblade (Sacred, Lightning) is on the second floor of the Fortified Manor in Leyndell. Black Whetblade (Poison, Blood, Occult) is in Nokron, Eternal City.',
    },
    {
      question: 'Why can I not put an Ash of War on my weapon?',
      answer:
        'Almost always because the weapon upgrades with Somber Smithing Stones. Unique and boss weapons use Somber stones and cannot accept Ashes of War or change affinity at all. The other possibility is a weapon-type mismatch — each Ash has a whitelist, so a thrusting-only skill will not go on an axe.',
    },
    {
      question: 'What is the best Ash of War in Elden Ring?',
      answer:
        'Bloodhound\'s Step for general survivability — it costs only 5 FP and gives a long, fast, briefly invisible dodge. For damage, Lion\'s Claw is the default pick on Strength weapons and Seppuku is the backbone of bleed builds. Golden Vow is the best pre-fight buff since it also buffs your spirit ash summon.',
    },
    {
      question: 'Do Ashes of War get consumed when you apply them?',
      answer:
        'No. Ashes of War are slotted into a weapon, not spent. You can remove one at any Site of Grace to get it back, or move it directly to another weapon. That means there is no cost to experimenting with different skills and affinities on the same weapon.',
    },
    {
      question: 'Which affinities let you still use weapon buffs?',
      answer:
        'Only the basic four — Standard, Heavy, Keen, and Quality. Every other affinity blocks weapon buffs like greases and buff incantations, apart from buffs applied by a skill itself. If your build relies on coating your weapon before a fight, staying on the basic four is usually a damage gain, not a loss.',
    },
    {
      question: 'Can you get two copies of the same Ash of War?',
      answer:
        'Yes. Smithing Master Hewg at Roundtable Hold will duplicate an Ash of War you already own in exchange for a Lost Ashes of War, which is consumed in the process. This works whether the Ash is sitting in your inventory or already equipped on a weapon.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/elden-ring', anchor: 'Elden Ring coverage hub' },
    { href: '/blog/elden-ring/elden-ring-weapon-scaling-explained', anchor: 'Elden Ring weapon scaling explained' },
    { href: '/blog/elden-ring/elden-ring-early-game-route', anchor: 'Elden Ring early game route' },
    { href: '/blog/elden-ring/elden-ring-boss-order-guide', anchor: 'Elden Ring boss order guide' },
    { href: '/blog/elden-ring/best-elden-ring-starting-class', anchor: 'Best Elden Ring starting class' },
  ],
  externalSources: [
    {
      url: 'https://eldenring.fandom.com/wiki/Ashes_of_War',
      title: 'Ashes of War — Elden Ring Wiki',
    },
    {
      url: 'https://eldenring.fandom.com/wiki/Affinities',
      title: 'Affinities — Elden Ring Wiki',
    },
    {
      url: 'https://eldenring.fandom.com/wiki/Whetblades',
      title: 'Whetblades — Elden Ring Wiki',
    },
  ],
  tldr:
    'Loot the Gatefront Ruins cellar chest in Limgrave for the Whetstone Knife, which lets you apply any of the game\'s 91 Ashes of War at a Site of Grace. Ashes swap a weapon\'s skill and its affinity, they are never consumed, and they only work on regular Smithing Stone weapons — Somber weapons are locked out. Five Whetblades unlock the other twelve affinities; the Iron Whetblade in Stormveil is the first and most important. Stay on Standard, Heavy, Keen or Quality if your build uses weapon buffs, and prioritise Bloodhound\'s Step, Lion\'s Claw, Endure and Golden Vow.',
  itemList: {
    name: 'Best Elden Ring Ashes of War',
    items: [
      { name: "Bloodhound's Step", description: 'Keen, 5 FP. A long, fast, briefly invisible dodge. Night\'s Cavalry on the eastern Dragonbarrow bridge at night.' },
      { name: "Lion's Claw", description: 'Heavy, 20 FP. Somersault slam with heavy poise damage. Elder Lion at Fort Gael, Caelid.' },
      { name: 'Golden Vow', description: 'Sacred, 40 FP. Attack and defence buff for you and nearby allies, including spirit ashes. Mounted Godrick Knight near the Warmaster\'s Shack.' },
      { name: 'Seppuku', description: 'Blood. Self-damaging buff that raises attack power and blood loss buildup. Invisible scarab at the Frozen Lake, Mountaintops of the Giants.' },
      { name: 'Endure', description: 'Heavy, 9 FP. Poise spike and damage reduction for trading hits. Sold by Bernahl for 600 runes at the Warmaster\'s Shack.' },
      { name: 'Flame of the Redmanes', description: 'Fire, 14 FP. Wide frontal flame burst and the cheapest reliable stagger tool. Invisible scarab near Fort Gael North, Caelid.' },
      { name: 'Barbaric Roar', description: 'Heavy. Attack buff that converts heavy attacks into savage combos. Scarab at Ravine-Veiled Village, northern Liurnia.' },
      { name: "Royal Knight's Resolve", description: 'Quality. Greatly powers up your next attack. Volcano Manor, behind an Imp Statue.' },
      { name: 'Determination', description: 'Quality. Early-game version of Royal Knight\'s Resolve. Scarab on the stone bridge north of Agheel Lake.' },
      { name: 'Storm Stomp', description: 'Quality. Free with the Whetstone Knife at Gatefront Ruins, and a strong crowd-stagger tool all through Limgrave.' },
    ],
  },
};
