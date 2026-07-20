import type { BlogPost } from '../../blogTypes';

export const minecraftBeaconGuide: BlogPost = {
  slug: 'minecraft-beacon-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-progression',
  tags: ['beacon', 'nether star', 'wither', 'endgame', 'progression'],
  title: 'Minecraft Beacon Guide: How to Build and Power One',
  metaDescription:
    'How to build and power a Minecraft beacon: the nether star from the Wither, the pyramid tiers (9/34/83/164 blocks), effects, range, and the regen option.',
  excerpt:
    "A beacon is the closest Minecraft gets to a permanent buff station — stand near one and you get Haste, Speed, or Resistance for free, forever. The catch is everything in front of it: kill the Wither for a nether star, then stack up to 164 mineral blocks into a pyramid. Here is the whole build, tier by tier.",
  featuredImagePrompt:
    'A Minecraft beacon firing a bright vertical beam of light into a blue sky from a small pyramid of iron and diamond blocks on a grassy hill, the beacon block glowing cyan through glass',
  heroImage: '/images/blog/minecraft/minecraft-beacon-guide/beacon-tower.webp',
  heroImageAlt:
    'A Minecraft beacon firing its signature beam of light into the sky from a built structure — the endgame buff station you power with a pyramid of mineral blocks.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-beacon-guide/beacon-tower.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Beacon',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-beacon-guide/beacon-pyramid.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Beacon',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-beacon-guide/beacon-gui.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Beacon',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-10T00:00:00.000Z',
  lastUpdated: '2026-06-10T00:00:00.000Z',
  primaryKeyword: 'minecraft beacon guide',
  secondaryKeywords: [
    'how to make a beacon minecraft',
    'how to power a beacon',
    'beacon pyramid blocks',
    'minecraft beacon range',
    'how to get a nether star',
    'beacon effects minecraft',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'what-a-beacon-actually-does', label: 'What a beacon actually does', level: 2 },
    { id: 'step-1-get-a-nether-star-from-the-wither', label: 'Step 1: get a nether star from the Wither', level: 2 },
    { id: 'step-2-craft-the-beacon', label: 'Step 2: craft the beacon', level: 2 },
    { id: 'step-3-build-the-pyramid', label: 'Step 3: build the pyramid', level: 2 },
    { id: 'the-power-effects-and-range', label: 'The power effects and range', level: 2 },
    { id: 'the-secondary-effect-and-regen', label: 'The secondary effect and regen', level: 2 },
    { id: 'activating-and-changing-the-beacon', label: 'Activating and changing the beacon', level: 2 },
    { id: 'which-blocks-to-build-with', label: 'Which blocks to build with', level: 2 },
    { id: 'beacon-tips-most-players-miss', label: 'Beacon tips most players miss', level: 2 },
    { id: 'beacon-build-checklist', label: 'Beacon build checklist', level: 2 },
  ],
  content: `A beacon is the closest Minecraft gets to a permanent buff station. Build one, stand near it, and you get a status effect — Haste, Speed, Resistance, Jump Boost, or Strength — that just keeps applying for as long as you are in range, with no potion to brew and no timer to babysit. Haste II next to a mining base makes deepslate crumble. Resistance plus Regeneration around your home turns it into a place where almost nothing can kill you. That beam of light shooting into the sky is the flex; the buffs are the actual reason you do it.

The reason most players do not have one is that the entry fee is steep. A beacon needs a **nether star**, and the only thing in the game that drops a nether star is the **Wither** — a boss you have to summon and beat yourself. After that you still have to stack up to **164 blocks of refined metal and gems** into a pyramid to unlock everything. This guide walks the whole chain in order: get the star, craft the beacon, build the pyramid tier by tier, and pick the right effect. Every block count here is verified against the Minecraft Wiki, because the internet is full of pyramid math that is off by a layer.

## What a beacon actually does

A beacon is a single block that, once placed on a pyramid of mineral blocks and fed one ingot, projects a vertical beam of light and grants a chosen status effect to every player inside a radius around it. The effect refreshes constantly while you stand in range, so it never actually runs out — step away and it lingers for several seconds, then fades.

Two things make it special compared to potions:

- **It is hands-off.** No brewing stand, no ingredients, no re-drinking every few minutes. Set it once and forget it.
- **It scales.** A bigger pyramid unlocks stronger effects, a longer range, and a second effect on top of the first.

The beam itself is cosmetic — but you can dye it by dropping stained glass into the beam path, and it can shine straight through glass, water, leaves, and even bedrock. Functionally, the beam does nothing; the buffs are the payoff.

## Step 1: get a nether star from the Wither

There is no shortcut here. A nether star drops only from the **Wither**, and it drops **every single time** you kill one — guaranteed, no luck involved. One Wither, one star, one beacon. (The star is even immune to explosions, so the Wither's own death blast will not destroy it.)

The Wither is a boss you build:

- Farm **3 wither skeleton skulls** from wither skeletons in [nether fortresses](/blog/minecraft/minecraft-nether-fortress-bastion-guide) (a 2.5% base drop, so bring a Looting III sword to speed it up).
- Place **4 blocks of soul sand or soul soil in a T shape**, then put the 3 skulls on top of the upper row. The third skull triggers the spawn.
- Fight it inside a contained arena — it explodes on spawn, so never summon it in your base.

The full boss fight, including the big Java-versus-Bedrock difference at half health, is its own project. If you have not done it yet, read the [full Wither walkthrough](/blog/minecraft/how-to-beat-the-wither) before you commit. The short version: full diamond or netherite armor, a **Smite** sword (the Wither is undead), Strength and Healing potions, and **milk buckets** to clear the lethal Wither effect. Win, and the star is yours.

## Step 2: craft the beacon

Once you have the nether star, the beacon recipe is a 3x3 grid:

- **Top row:** 3 glass blocks
- **Middle row:** glass, nether star, glass
- **Bottom row:** 3 obsidian

That is **5 glass + 1 nether star + 3 obsidian** for one beacon. The glass is trivial (sand plus a furnace), and obsidian you make by pouring water onto lava source blocks and mining it with a diamond or netherite pickaxe. The whole limiting factor is the star, which is why a beacon is treated as an endgame trophy: the recipe is cheap, but the one ingredient that matters costs you a boss fight.

One star makes exactly one beacon. If you want multiple beacons running different effects, you fight the Wither once per beacon.

## Step 3: build the pyramid

A beacon does nothing sitting on the ground. It has to be placed on **top of a pyramid of solid mineral blocks**, centered, with the beacon block one layer above the smallest tier. The size of the pyramid decides everything: how strong the effect is, how far it reaches, and whether you get a second effect.

There are four pyramid tiers. Here are the exact block counts:

| Tier | Pyramid layers (top to base) | Mineral blocks needed | Total if single material |
| --- | --- | --- | --- |
| 1 | 3x3 | **9** | 9 |
| 2 | 3x3 + 5x5 | **34** | 34 |
| 3 | 3x3 + 5x5 + 7x7 | **83** | 83 |
| 4 | 3x3 + 5x5 + 7x7 + 9x9 | **164** | 164 |

So a full four-tier beacon is **164 blocks** — which, in raw ingots, is 1,476 of them if you build it out of a single metal. Each tier sits directly under the one above it, growing outward by one block on every side as you go down. The beacon block goes on top of the center of the smallest (3x3) layer, with clear sky above it so the beam can escape.

![A full four-tier beacon pyramid built from mixed iron, gold, diamond, and emerald blocks, with the beacon beam rising from the top — the 164-block build that unlocks every effect.](/images/blog/minecraft/minecraft-beacon-guide/beacon-pyramid.webp)

Two rules people get wrong:

- **The pyramid must be solid and complete at each tier.** A hole or a wrong block in a layer drops you down a tier. The game counts the largest fully-built pyramid underneath.
- **The beacon needs a clear line to the sky.** Anything other than transparent blocks (glass, water, leaves, bedrock) directly above the beacon blocks the beam and switches it off — including a slab, a roof, or even a torch overhead.

## The power effects and range

Each tier unlocks more effects and a wider radius. The range grows by a flat **10 blocks per tier**, following the formula **10 + (tier x 10) blocks horizontally**, and extends a bit above and below the beacon's height too. Here is what each tier gives you:

| Tier | Range | Effects unlocked |
| --- | --- | --- |
| 1 (9 blocks) | 20 blocks | Speed I, Haste I |
| 2 (34 blocks) | 30 blocks | + Resistance I, Jump Boost I |
| 3 (83 blocks) | 40 blocks | + Strength I |
| 4 (164 blocks) | 50 blocks | All of the above, plus the secondary slot |

The five primary effects are **Speed, Haste, Resistance, Jump Boost, and Strength.** You pick exactly one as the primary at any given time (you can switch later for the cost of one ingot).

![The beacon menu, showing the five primary powers — Speed, Haste, Resistance, Jump Boost, Strength — on the left and the Regeneration secondary on the right, with the ingot payment slot below.](/images/blog/minecraft/minecraft-beacon-guide/beacon-gui.webp)

The two effects worth building toward:

- **Haste** is the mining buff. Haste I from a tier-2+ beacon noticeably speeds up every swing; **Haste II** (only available at a full pyramid via the level-II secondary option) lets an Efficiency V pickaxe instamine deepslate, which is why serious [mining bases](/blog/minecraft/minecraft-mining-guide) park a max beacon at their dig site.
- **Resistance** flatly reduces incoming damage. Around a base, Resistance plus Regeneration is a survivability blanket that makes most mobs a non-threat.

Speed is great for traversal, Strength turns a melee build into a blender, and Jump Boost is mostly niche.

## The secondary effect and regen

The four-tier beacon is the only one that unlocks the second slot, and it gives you a choice. Once you have a full 164-block pyramid, you can either:

1. **Add Regeneration** as a second effect alongside your primary — so you could run, say, Haste I *and* Regeneration at the same time, or
2. **Upgrade your primary to level II** — turning Haste I into the deepslate-shredding Haste II, or Strength I into Strength II.

You cannot do both at once. Regeneration is only ever available as that secondary option — there is no Regeneration "primary." So the real decision at a full beacon is: do you want a passive heal on top of your buff, or do you want that buff cranked to level II? For a mining beacon, the answer is almost always Haste II. For a home/base beacon, Resistance plus Regeneration is the cozy pick.

## Activating and changing the beacon

With the pyramid built and the beacon placed on top, right-click the beacon to open its menu. You will see the available primary effects (greyed out if your tier does not reach them) and, at a full pyramid, the secondary slot.

To activate or change it, you **pay one ingot** — a single **iron ingot, gold ingot, emerald, diamond, or netherite ingot** — into the payment slot, pick your effect(s), and confirm. That one ingot is the entire activation cost; it does not consume ingots continuously. Switching effects later costs one more ingot each time, so it is cheap to retune the beacon for whatever you are doing that session.

If the beacon ever goes dark, it is almost always one of two things: a block got placed over the beam (breaking its line to the sky) or a block in the pyramid got removed or replaced with a non-mineral block, dropping you below the tier you need.

## Which blocks to build with

The pyramid can be made of any mix of these five block types, and **mixing is totally fine** — the game does not care if your pyramid is half iron and half diamond. The valid blocks are:

- **Block of Iron**
- **Block of Gold**
- **Block of Diamond**
- **Block of Emerald**
- **Block of Netherite**

Each of those is 9 ingots/gems crafted into a solid block (netherite blocks are 9 netherite ingots, which is brutally expensive). Because mixing is allowed, the standard advice is simple: **build it out of iron.** A tier-4 beacon is 164 blocks, and iron is by far the most farmable of the five — an [iron farm](/blog/minecraft/minecraft-iron-farm-guide) can pump out blocks for days, while 164 diamond blocks (1,476 diamonds) is a fantasy for most worlds.

A common move is to build the bulk in iron and trim the visible top layer in diamond or emerald purely for looks. The effect is identical no matter what it is made of; the pretty blocks are a vanity tax. If you want a flex pyramid, mixed-material builds (the iron/gold/diamond/emerald checkerboard look) are a popular show-off project once you are rich.

## Beacon tips most players miss

A few things that save real time and resources:

- **Build with iron, not diamond.** The effect is the same. Spend diamonds on gear, not on a pyramid nobody mines.
- **Dye the beam with stained glass.** Drop a stained-glass block anywhere in the beam's path and the beam takes that color from that point up. Stack multiple colors for a gradient.
- **The beam pierces glass, water, leaves, and bedrock.** You can build a roof over the beacon out of glass and it still works — handy for an indoor beacon room.
- **One beacon, one effect at a time** (until tier 4). If you want both Haste *and* Speed up constantly, that is two separate beacons, which means two Withers.
- **Range stacks across beacons.** Park two beacons close together and stand where their radii overlap to get both effects at once.
- **Put the mining beacon at your dig site, not your base.** A beacon's buff only reaches 50 blocks at most; it does you no good at home while you mine a thousand blocks away.

## Beacon build checklist

- [ ] Beat the Wither for a guaranteed nether star (full walkthrough linked above)
- [ ] Craft the beacon: 5 glass + 1 nether star + 3 obsidian
- [ ] Decide your tier: 9 / 34 / 83 / 164 mineral blocks for tiers 1-4
- [ ] Build the pyramid solid and centered, beacon on top of the 3x3 layer
- [ ] Keep clear sky (or only glass/water/leaves) directly above the beacon
- [ ] Build it from iron blocks — the effect is identical and iron is farmable
- [ ] Right-click, pay one ingot, pick your effect (Haste for mining, Resistance for base)
- [ ] At a full tier-4 pyramid, choose Regeneration OR a level-II primary
- [ ] Place the beacon's buff where you actually play — its range tops out at 50 blocks`,
  faq: [
    {
      question: 'How do you make a beacon in Minecraft?',
      answer:
        'Craft a beacon with 5 glass blocks, 1 nether star, and 3 obsidian in a 3x3 grid (glass across the top and the two upper corners of the middle row, the nether star in the center, and obsidian across the bottom). The only hard part is the nether star, which drops exclusively from the Wither boss. Once crafted, the beacon must be placed on top of a pyramid of mineral blocks to actually work.',
    },
    {
      question: 'How many blocks do you need to power a beacon?',
      answer:
        'It depends on the tier. A tier-1 beacon needs 9 mineral blocks (a 3x3 base), tier 2 needs 34, tier 3 needs 83, and a full tier-4 beacon needs 164 blocks stacked as a pyramid (9x9, 7x7, 5x5, then 3x3 with the beacon on top). You can use any mix of iron, gold, diamond, emerald, and netherite blocks — the effect is identical regardless, so most players build it entirely out of iron.',
    },
    {
      question: 'How do you get a nether star for a beacon?',
      answer:
        'A nether star drops only from the Wither, and it drops every time — one Wither equals one star equals one beacon. To summon the Wither you need 3 wither skeleton skulls (farmed from wither skeletons in nether fortresses) and 4 soul sand or soul soil placed in a T shape with the skulls on top. Beat the boss in a contained arena, grab the guaranteed star, and you have your beacon ingredient.',
    },
    {
      question: 'What effects can a beacon give you?',
      answer:
        'The five primary effects are Speed, Haste, Resistance, Jump Boost, and Strength, unlocked progressively by tier (Speed and Haste at tier 1; Resistance and Jump Boost at tier 2; Strength at tier 3). At a full tier-4 pyramid you can also either add Regeneration as a second effect or upgrade your chosen primary to level II — for example, Haste II to instamine deepslate. You pick one primary at a time and activate it by paying a single ingot.',
    },
    {
      question: 'What is the range of a beacon?',
      answer:
        'Beacon range grows by 10 blocks per tier, following the formula 10 + (tier x 10): 20 blocks at tier 1, 30 at tier 2, 40 at tier 3, and 50 blocks at tier 4 (plus a small vertical reach above and below). Because even a max beacon only covers 50 blocks horizontally, you should place it where you actually spend time — at your mining site for Haste, or at your base for Resistance and Regeneration.',
    },
    {
      question: 'Can you mix blocks in a beacon pyramid?',
      answer:
        'Yes. A beacon pyramid can be built from any combination of iron, gold, diamond, emerald, and netherite blocks, in any arrangement, with no penalty — the effects and range are exactly the same. Because of this, the practical advice is to build the whole pyramid out of iron, since it is by far the easiest of the five to farm in bulk. Mixed-material pyramids are purely cosmetic flexes.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/how-to-beat-the-wither', anchor: 'How to beat the Wither (the nether star source)' },
    { href: '/blog/minecraft/minecraft-nether-guide', anchor: 'Minecraft Nether guide' },
    { href: '/blog/minecraft/how-to-find-diamonds-minecraft', anchor: 'How to find diamonds in Minecraft' },
    { href: '/blog/minecraft/best-minecraft-enchantments', anchor: 'Best Minecraft enchantments for your gear' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Beacon',
      title: 'Minecraft Wiki — beacon recipe, pyramid tiers, effects, and range',
    },
    {
      url: 'https://minecraft.wiki/w/Nether_Star',
      title: 'Minecraft Wiki — nether star drop and uses',
    },
    {
      url: 'https://minecraft.wiki/w/Wither',
      title: 'Minecraft Wiki — the Wither, the only source of the nether star',
    },
  ],
  tldr:
    'To build a Minecraft beacon: beat the Wither for a guaranteed nether star, then craft the beacon with 5 glass + 1 nether star + 3 obsidian. Place it on a pyramid of mineral blocks — 9 blocks for tier 1, up to 164 for the full tier 4 — and pay one ingot to pick an effect. Tiers unlock Speed/Haste, then Resistance/Jump Boost, then Strength, with 10 more blocks of range per tier (up to 50). A full pyramid lets you add Regeneration or bump your primary to level II (like Haste II for instamining deepslate). Build the pyramid from iron — mixing blocks is allowed and the effect is identical.',
  itemList: {
    name: 'Minecraft Beacon Pyramid Tiers',
    items: [
      { name: 'Tier 1 — 9 blocks', description: '3x3 base. Unlocks Speed I and Haste I. 20-block range.' },
      { name: 'Tier 2 — 34 blocks', description: 'Adds a 5x5 layer. Unlocks Resistance I and Jump Boost I. 30-block range.' },
      { name: 'Tier 3 — 83 blocks', description: 'Adds a 7x7 layer. Unlocks Strength I. 40-block range.' },
      { name: 'Tier 4 — 164 blocks', description: 'Adds a 9x9 base. 50-block range, plus a secondary slot: add Regeneration or upgrade the primary to level II.' },
    ],
  },
};
