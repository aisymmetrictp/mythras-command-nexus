import type { BlogPost } from '../../blogTypes';

export const minecraftNetherFortressBastionGuide: BlogPost = {
  slug: 'minecraft-nether-fortress-bastion-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-survival',
  tags: ['nether', 'fortress', 'bastion', 'blaze', 'wither-skeleton', 'piglin', 'loot'],
  title: 'Minecraft Nether Fortress & Bastion Guide: Loot Safely',
  metaDescription:
    'How to find and loot Minecraft Nether fortresses (blaze rods, wither skeleton skulls) and bastion remnants (all four types, piglin brutes, bartering) without dying.',
  excerpt:
    "Two structures hold the keys to the late game: the fortress (blaze rods, wither skulls) and the bastion (netherite templates, gold to barter). Both will also delete you in seconds if you walk in blind. Here's how to clear them on purpose.",
  featuredImagePrompt:
    'A sprawling dark red Minecraft Nether fortress of nether brick spanning a lava ocean, blaze spawner platforms glowing on the exterior, a separate blackstone bastion remnant looming in the background with piglins guarding a gold-block hoard',
  heroImage: '/images/blog/minecraft/minecraft-nether-fortress-bastion-guide/nether-fortress.webp',
  heroImageAlt:
    'A Minecraft Nether fortress built from nether brick spanning a lava sea — the only place blazes and wither skeletons spawn.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-nether-fortress-bastion-guide/nether-fortress.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Nether_Fortress',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-nether-fortress-bastion-guide/blaze.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Blaze',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-nether-fortress-bastion-guide/wither-skeleton.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Wither_Skeleton',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-nether-fortress-bastion-guide/bastion-remnant.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Bastion_Remnant',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-nether-fortress-bastion-guide/piglin-brute.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Piglin_Brute',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-23T00:00:00.000Z',
  lastUpdated: '2026-06-23T00:00:00.000Z',
  primaryKeyword: 'minecraft nether fortress and bastion guide',
  secondaryKeywords: [
    'how to find a nether fortress',
    'minecraft bastion remnant types',
    'how to get blaze rods',
    'wither skeleton skull farming',
    'minecraft piglin bartering',
    'how to loot a bastion safely',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'why-these-two-structures-matter', label: 'Why these two structures matter', level: 2 },
    { id: 'how-fortresses-and-bastions-generate', label: 'How fortresses and bastions generate', level: 2 },
    { id: 'finding-a-nether-fortress', label: 'Finding a Nether fortress', level: 2 },
    { id: 'looting-the-fortress-blazes-wither-skeletons-wart', label: 'Looting the fortress: blazes, wither skeletons, wart', level: 2 },
    { id: 'the-four-bastion-remnant-types', label: 'The four bastion remnant types', level: 2 },
    { id: 'piglins-gold-armor-and-bartering', label: 'Piglins, gold armor, and bartering', level: 2 },
    { id: 'piglin-brutes-and-treasure-rooms', label: 'Piglin brutes and treasure rooms', level: 2 },
    { id: 'how-to-loot-a-bastion-without-dying', label: 'How to loot a bastion without dying', level: 2 },
    { id: 'gear-and-prep-checklist', label: 'Gear and prep checklist', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Two structures in the Nether gate basically everything that comes after. The **fortress** is the only place blazes and wither skeletons spawn, which means it's your only source of blaze rods (brewing, Eyes of Ender) and wither skeleton skulls (summoning the Wither). The **bastion remnant** is where netherite upgrade templates, stacks of gold, and the best Nether loot live — behind some of the meanest mobs in the game. Clear both and you've unlocked potions, the End, and beacons.

Walk into either one unprepared and you'll be sprinting back to your bed wondering where your diamond armor went. This guide is the difference between those two outcomes. Every number here is checked against the Minecraft Wiki — fortress and bastion mechanics are exactly the kind of thing people misremember, so I pinned them down.

## Why these two structures matter

Short version of what's at stake:

- **Nether fortress** — blaze rods (the *only* source), wither skeleton skulls, nether wart for brewing, plus chest loot. Without the fortress there's no [potion brewing](/blog/minecraft/minecraft-potion-brewing-guide), no Eyes of Ender, and no [fighting the Wither](/blog/minecraft/how-to-beat-the-wither).
- **Bastion remnant** — netherite upgrade templates (you need one to make netherite gear), gold blocks, gilded blackstone, enchanted books, the Pigstep music disc, and the gold you'll feed piglins to barter for ender pearls and other goodies.

You generally want to hit the fortress first for blaze rods and brewing, then tackle a bastion once you've got a few potions and decent armor.

## How fortresses and bastions generate

This is the part that saves you hours of aimless flying. The game splits the Nether into large regions, and each region rolls **either a fortress or a bastion** — they compete for the same space. In Java Edition, the fortress has roughly a 40% chance and the bastion the other 60%; on Bedrock it's about 33% fortress. Both generate **in any Nether biome**.

Practically, that means if you find a bastion, a fortress is likely in a *neighboring* region, and vice versa. Fly in a straight line at a decent altitude and you'll cross region boundaries quickly. Fortresses are tall nether-brick bridges that often span lava seas; bastions are hulking blackstone-and-basalt fortifications. You can usually tell which is which from a long way off.

## Finding a Nether fortress

A fortress is built from **nether brick** and sprawls in long corridors and bridges, frequently over a lava ocean. Tips that actually speed up the hunt:

- **Fly or bridge in straight lines.** Pick a cardinal direction and commit. Fortresses are long and thin, so a straight sweep crosses them eventually.
- **Look for nether brick against the terrain.** The dark purple-brown brick stands out hard against netherrack, soul sand valleys, and crimson forests.
- **Sound is a tell.** Blaze fireballs and the rattle of skeletons often reach you before you see the structure.
- **Bring a fire-resistance potion** if you're crossing lava on a thin bridge — one knockback fireball into the lava is how most fortress runs end.

Once inside, your priorities are the blaze spawner platforms (exterior) and the dark interior corridors where wither skeletons lurk.

![A Minecraft blaze — spawns only at fortress spawners at light level 11 or below and drops the blaze rods you need for brewing.](/images/blog/minecraft/minecraft-nether-fortress-bastion-guide/blaze.webp)

## Looting the fortress: blazes, wither skeletons, wart

**Blazes** spawn from up to **two blaze spawner platforms** on the fortress exterior — three-step nether-brick "stairs" leading to a fenced platform with a spawner in the middle. They spawn at **light level 11 or below**, float, and **shoot fireballs in volleys of three** from up to 48 blocks away. Each kill drops **0–1 blaze rod** (up to 0–4 with Looting III). A blaze rod crafts into **2 blaze powder**, which you need for brewing stands, potions, and Eyes of Ender. Snowballs deal 3 damage per hit to blazes, which is a cheap ranged option. Wall off the spawner to a 1-block gap and farm it safely — that's the standard blaze-rod grind.

**Wither skeletons** spawn in the **dark interior** at light level 0–7, in groups of up to 5 on Java (2–3 on Bedrock). They're **2.4 blocks tall**, so they can't fit through a 2-block-high gap — that height is your best defense, because a corridor ceiling lowered to 2 blocks lets you hit them while they can't path to you. Their sword hit inflicts the **Wither effect for 10 seconds** (damage over time, turns your health bar black). Skulls drop at a brutal **2.5% base chance**, rising 1% per Looting level to **5.5% with Looting III** — bring a Looting III sword and expect to grind. You need **3 skulls + 4 soul sand** to summon the Wither for your beacon.

![A Minecraft wither skeleton — 2.4 blocks tall, inflicts the Wither effect, and drops the rare skull needed to summon the Wither boss.](/images/blog/minecraft/minecraft-nether-fortress-bastion-guide/wither-skeleton.webp)

**Nether wart** grows on **soul sand at the base of the fortress stairwells** — grab the wart *and* the soul sand. Wart is the base ingredient for nearly every useful potion, so this is non-negotiable loot. Fortress chests (tucked in corridor turns) add gold, diamonds, obsidian, and the occasional saddle or horse armor.

## The four bastion remnant types

Bastions come in exactly **four variants**, and which one you find decides your strategy:

1. **Bridge** — a large ruined rampart with a piglin face carved into it. Loot chests sit in the rampart sections and the entrance piece. Lots of open lava-edge ledges, so fall risk is real.
2. **Hoglin Stables** — a three-part rampart with damaged hoglin stables on either side; chests are in the stable structures. Expect hoglins (which piglins hunt) wandering around.
3. **Housing Units** — chests are distributed throughout the modular housing. More cover, more corners for piglins to ambush from.
4. **Treasure Room** — the jackpot and the deathtrap. It holds the most valuable loot, including **gilded blackstone**, the **Pigstep disc**, and netherite-relevant gear, and it's **guarded by piglin brutes** plus a **magma cube monster spawner**. The treasure is stacked behind gold blocks you have to mine — which, naturally, makes every piglin in the building want you dead.

All four can drop netherite upgrade templates and gold, so none are a waste, but the Treasure Room is where the run is won or lost.

![A Minecraft bastion remnant of blackstone and basalt — home to piglins, brutes, and the four-variant loot rooms.](/images/blog/minecraft/minecraft-nether-fortress-bastion-guide/bastion-remnant.webp)

## Piglins, gold armor, and bartering

Piglins are neutral *if* you respect their two rules:

- **Wear at least one piece of gold armor** and adult piglins stay neutral. With no gold on, they go hostile within about 15 blocks on sight.
- **Don't touch their stuff.** Piglins turn hostile the instant you **open or break a chest**, **mine gold blocks / gold ore / gilded blackstone / nether gold ore**, or attack one of them. This is the catch nobody warns you about: gold armor keeps them calm right up until you crack the loot chest, and then the whole room aggros.

**Bartering** is the friendly use: drop or right-click a **gold ingot** to an adult piglin and after a few seconds (6 on Java, 8 on Bedrock) it tosses you a random item. The barter table includes **ender pearls, obsidian, crying obsidian, string, fire charges, Soul Speed enchanted books, splash potions of Fire Resistance, spectral arrows, gravel, leather, nether quartz, glowstone dust, and magma cream**. Ender pearls and crying obsidian (for respawn anchors) are the big draws — bartering is often the *fastest* pearl source for the End. Note: **baby piglins don't barter**, and any piglin dragged to the Overworld or End **zombifies in 15 seconds**.

## Piglin brutes and treasure rooms

The piglin brute is a different animal. It spawns **only in bastion remnants** at generation (non-renewable), wields a **golden axe**, and has **50 HP (25 hearts)**. Critically, **gold armor does nothing** — brutes attack on sight no matter what you wear, **can't be distracted**, and **don't barter**. They exist for one reason: to guard the treasure. Like regular piglins, a brute hauled to the Overworld or End **zombifies after 15 seconds**.

You'll meet brutes guarding the Treasure Room's gold-block hoard. Plan to fight them — there's no talking your way past. A diamond/netherite sword with a few hits, or a shield to block the axe swing while you whittle them down, is the play. Don't try to tank a brute *and* a freshly-aggroed room of regular piglins at the same time; pull the brutes first.

![A Minecraft piglin brute wielding a golden axe — ignores gold armor, can't be bartered with, and guards bastion treasure.](/images/blog/minecraft/minecraft-nether-fortress-bastion-guide/piglin-brute.webp)

## How to loot a bastion without dying

A repeatable approach that keeps you alive:

1. **Suit up in gold accents.** Wear a gold helmet or boots over your real armor so piglins stay neutral while you scout. (Gold armor is weak, so don't wear a full gold set into a fight.)
2. **Build to the chests.** Bridge across gaps with cobble or blackstone — bastions are riddled with lava drops and open ledges, and fall/lava deaths outnumber mob deaths here.
3. **Pull brutes first** in a Treasure Room. Bait them into a corridor where you can fight one or two at a time.
4. **Crack chests last, and be ready to bolt.** The moment you open a chest or mine gold, every piglin in line of sight aggros. Have an escape block, a fire-res potion, and ideally a stack of gold ingots to throw — tossing gold can briefly distract regular piglins (not brutes).
5. **Take the soul sand and magma cream you find** — both feed brewing and the Wither fight.

For getting *to* the Nether and the wider overview, the [general Nether guide](/blog/minecraft/minecraft-nether-guide) covers portals and biomes; for what comes after a bastion, see [how to find netherite](/blog/minecraft/how-to-find-netherite-minecraft) since the upgrade template you grabbed is half the recipe.

## Gear and prep checklist

Before either run, pack:

- **Fire Resistance potions** — the single most valuable item in the Nether. Blaze fireballs, lava, and ghasts all stop mattering.
- **Gold armor piece** for the bastion (helmet or boots over your kit).
- **A Looting III sword** if you're after wither skeleton skulls or blaze rods at volume.
- **Blocks to bridge** (a stack-plus of cobble or blackstone) and a **water-free** mindset (water evaporates in the Nether — no clutch placement).
- **A bow with Power**, and **snowballs** for blazes if you've got them.
- **A bed only as a last resort** — beds explode in the Nether. Set your spawn with a respawn anchor instead.

Solid [armor with the right enchantments](/blog/minecraft/minecraft-armor-guide) — Protection, Fire Protection, Blast Protection — turns both structures from lethal to manageable.

## Quick Action Checklist

- [ ] Know the rule: each Nether region rolls either a fortress (~40% Java) or a bastion — find one, the other is nearby
- [ ] Hunt fortresses by flying/bridging in a straight line and watching for nether brick over lava
- [ ] Wall blaze spawners to a 1-block gap; blazes drop 0–1 rod (0–4 with Looting III), each rod = 2 blaze powder
- [ ] Lower a corridor ceiling to 2 blocks to fight 2.4-block-tall wither skeletons safely
- [ ] Grind skulls with Looting III — 2.5% base, only 5.5% at Looting III; you need 3 skulls + 4 soul sand for the Wither
- [ ] Grab nether wart AND the soul sand it grows on at the fortress stairwells
- [ ] Wear one piece of gold armor in a bastion so piglins stay neutral — until you open a chest or mine gold
- [ ] Barter gold ingots with adult piglins for ender pearls, crying obsidian, and fire-res potions (baby piglins don't barter)
- [ ] Treat piglin brutes (50 HP, golden axe, ignore gold armor) as mandatory fights — pull them first in Treasure Rooms
- [ ] Carry Fire Resistance potions and bridging blocks; never bring a bed (it explodes), use a respawn anchor`,
  faq: [
    {
      question: 'How do you find a Nether fortress in Minecraft?',
      answer:
        'The Nether is divided into large regions that each generate either a fortress or a bastion remnant, in any Nether biome. Pick a cardinal direction and fly or bridge in a straight line — fortresses are long, thin nether-brick structures that often span lava seas, so a straight sweep crosses one eventually. Watch for the dark nether brick standing out against netherrack, and listen for blaze fireballs and skeletons. Because fortresses and bastions compete for the same regions, finding one means the other type is likely in a neighboring region.',
    },
    {
      question: 'What are the four types of bastion remnant?',
      answer:
        'The four bastion remnant variants are the Bridge, the Hoglin Stables, the Housing Units, and the Treasure Room. The Bridge has a carved piglin face with chests in the ramparts; the Hoglin Stables has hoglin pens with chests in the stables; the Housing Units spreads chests through modular housing; and the Treasure Room holds the most valuable loot (gilded blackstone, the Pigstep disc, netherite-relevant gear) guarded by piglin brutes and a magma cube spawner. All four can yield netherite upgrade templates and gold.',
    },
    {
      question: 'How do you get blaze rods and wither skeleton skulls?',
      answer:
        'Both come from a Nether fortress — the only place blazes and wither skeletons spawn. Blazes spawn from up to two exterior spawner platforms at light level 11 or below and drop 0–1 blaze rod each (up to 0–4 with Looting III); one rod crafts into 2 blaze powder for brewing and Eyes of Ender. Wither skeletons spawn in the dark interior and drop their skull at only a 2.5% base chance, rising to 5.5% with Looting III. You need 3 skulls plus 4 soul sand to summon the Wither, so a Looting III sword and patience are essential.',
    },
    {
      question: 'How does piglin bartering work and when do piglins attack?',
      answer:
        'Adult piglins stay neutral as long as you wear at least one piece of gold armor; with none on, they go hostile within about 15 blocks. To barter, give an adult piglin a gold ingot and after a few seconds it drops a random item — the table includes ender pearls, crying obsidian, obsidian, string, fire charges, Soul Speed books, splash Fire Resistance potions, spectral arrows, gravel, leather, nether quartz, glowstone dust, and magma cream. Piglins turn hostile the moment you open or break a chest, mine gold blocks or gilded blackstone, or attack one — gold armor keeps them calm right up until you touch their loot. Baby piglins do not barter.',
    },
    {
      question: 'Can you barter with or distract piglin brutes?',
      answer:
        'No. Piglin brutes attack on sight no matter what armor you wear, cannot be bartered with, and cannot be distracted by dropped gold. They spawn only in bastion remnants during world generation, wield a golden axe, and have 50 HP (25 hearts), existing solely to guard the treasure. Plan to fight them — pull them into a corridor and fight one or two at a time with a strong sword and a shield. Like regular piglins, a brute taken to the Overworld or End zombifies after 15 seconds.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/minecraft-nether-guide', anchor: 'General Nether guide' },
    { href: '/blog/minecraft/how-to-find-netherite-minecraft', anchor: 'How to find netherite' },
    { href: '/blog/minecraft/minecraft-potion-brewing-guide', anchor: 'Potion brewing guide' },
    { href: '/blog/minecraft/how-to-beat-the-wither', anchor: 'How to beat the Wither' },
    { href: '/blog/minecraft/minecraft-armor-guide', anchor: 'Armor and enchantment guide' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Nether_Fortress',
      title: 'Minecraft Wiki — Nether fortress generation and mobs',
    },
    {
      url: 'https://minecraft.wiki/w/Bastion_Remnant',
      title: 'Minecraft Wiki — bastion remnant types and loot',
    },
    {
      url: 'https://minecraft.wiki/w/Piglin',
      title: 'Minecraft Wiki — piglin aggro rules and bartering table',
    },
    {
      url: 'https://minecraft.wiki/w/Piglin_Brute',
      title: 'Minecraft Wiki — piglin brute behavior and health',
    },
  ],
  tldr:
    'The Nether fortress is the only source of blaze rods (0–1 per blaze, each = 2 blaze powder) and wither skeleton skulls (2.5% base, 5.5% with Looting III; you need 3 + 4 soul sand for the Wither), plus nether wart for brewing. Bastion remnants come in four types — Bridge, Hoglin Stables, Housing Units, and Treasure Room — and hold netherite templates and gold. Fortresses and bastions compete for the same Nether regions, so finding one means the other is nearby. Wear one piece of gold armor so piglins stay neutral, but they aggro the instant you open a chest or mine gold; barter gold ingots for ender pearls and crying obsidian. Piglin brutes (50 HP, golden axe) ignore gold armor and must be fought. Bring Fire Resistance potions and bridging blocks; never bring a bed.',
  itemList: {
    name: 'Minecraft Nether Fortress & Bastion Loot Priorities',
    items: [
      {
        name: 'Blaze rods (fortress)',
        description: 'Only source in the game; each rod makes 2 blaze powder for brewing and Eyes of Ender.',
      },
      {
        name: 'Wither skeleton skulls (fortress)',
        description: 'Rare 2.5% drop (5.5% with Looting III); 3 skulls + 4 soul sand summon the Wither.',
      },
      {
        name: 'Nether wart (fortress)',
        description: 'Grows on soul sand at the stairwells; the base ingredient for nearly every potion.',
      },
      {
        name: 'Netherite upgrade template (bastion)',
        description: 'Needed to craft netherite gear; can drop from any of the four bastion types.',
      },
      {
        name: 'Gilded blackstone & Pigstep (Treasure Room)',
        description: 'The bastion jackpot, guarded by piglin brutes and a magma cube spawner.',
      },
      {
        name: 'Gold ingots for bartering',
        description: 'Trade with adult piglins for ender pearls, crying obsidian, and Fire Resistance potions.',
      },
    ],
  },
};
