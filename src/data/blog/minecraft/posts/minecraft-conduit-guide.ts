import type { BlogPost } from '../../blogTypes';

export const minecraftConduitGuide: BlogPost = {
  slug: 'minecraft-conduit-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-ocean',
  tags: ['conduit', 'conduit power', 'ocean monument', 'underwater', 'prismarine'],
  title: 'Minecraft Conduit Guide: Build and Power the Ocean Beacon',
  metaDescription:
    'How to craft and activate a Minecraft conduit: 8 nautilus shells + 1 heart of the sea, the 16-42 block prismarine frame, Conduit Power range, and the mob attack.',
  excerpt:
    'A conduit is the ocean version of a beacon — it hands you unlimited underwater breathing, night vision, and faster mining, then punches nearby drowned to death on its own. The catch is the prismarine frame and the nautilus shells. Here is the whole build, block by block.',
  featuredImagePrompt:
    'A glowing activated Minecraft conduit floating in the center of a prismarine frame underwater, its orange heart-of-the-sea eye open, cyan particles radiating out through dark ocean water',
  heroImage: '/images/blog/minecraft/minecraft-conduit-guide/powered-conduit.webp',
  heroImageAlt:
    'An activated Minecraft conduit glowing inside its prismarine frame underwater, the heart-of-the-sea eye open — the ocean equivalent of a beacon.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-conduit-guide/powered-conduit.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Conduit',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-conduit-guide/conduit-16-blocks.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Conduit',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-conduit-guide/conduit-setup.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Conduit',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-conduit-guide/conduit-attack.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Conduit',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-30T00:00:00.000Z',
  lastUpdated: '2026-06-30T00:00:00.000Z',
  primaryKeyword: 'minecraft conduit guide',
  secondaryKeywords: [
    'how to make a conduit minecraft',
    'how to activate a conduit',
    'conduit power minecraft',
    'conduit prismarine frame',
    'how to get a heart of the sea',
    'conduit range minecraft',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'what-a-conduit-actually-does', label: 'What a conduit actually does', level: 2 },
    { id: 'step-1-craft-the-conduit-block', label: 'Step 1: craft the conduit block', level: 2 },
    { id: 'where-to-find-nautilus-shells-and-hearts-of-the-sea', label: 'Where to find nautilus shells and hearts of the sea', level: 2 },
    { id: 'step-2-build-the-prismarine-frame', label: 'Step 2: build the prismarine frame', level: 2 },
    { id: 'the-16-block-minimum-and-the-range-math', label: 'The 16-block minimum and the range math', level: 2 },
    { id: 'conduit-power-what-you-actually-get', label: 'Conduit Power: what you actually get', level: 2 },
    { id: 'the-underwater-guard-dog-mob-damage', label: 'The underwater guard dog: mob damage', level: 2 },
    { id: 'java-vs-bedrock-differences', label: 'Java vs Bedrock differences', level: 2 },
    { id: 'conduit-tips-most-players-miss', label: 'Conduit tips most players miss', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `A conduit is the ocean's answer to a beacon, and it is the single best reason to stop dreading underwater work. Activate one and every player nearby gets unlimited breath, sees in the dark underwater, and mines faster — all at once, forever, with nothing to re-drink. Then it does the thing beacons never could: it hunts. Any drowned, guardian, or elder guardian that drifts within 8 blocks of a fully-built conduit takes damage on a timer until it dies. For anyone who has ever tried to drain an ocean monument and spent the whole time watching their oxygen bar, a conduit changes the entire job.

The build is genuinely cheap compared to a beacon — no boss fight, no 164-block pyramid. The whole cost is 8 nautilus shells, one heart of the sea, and a stack of prismarine. The hard part is that both special ingredients come from fishing and buried treasure, which are RNG. This guide walks the full chain: craft the block, source the shells and the heart, build the frame in the right shape, and understand exactly how the range scales. Every number here is checked against the Minecraft Wiki, because the internet is full of conduit "facts" that are off by several blocks.

## What a conduit actually does

A conduit is a single block that, once surrounded by enough prismarine in the right shape, projects the **Conduit Power** status effect to every player touching water or rain inside a spherical radius. That radius runs from 32 blocks at the minimum frame up to 96 blocks at a full frame. The effect refreshes constantly while you are in range, so it never actually times out — it lasts about 13 seconds after you leave the field, then fades.

Two things make it fundamentally different from a beacon:

- **It is an ocean-only power source.** Conduit Power only helps you underwater (or in the rain). On dry land it does almost nothing useful.
- **It fights for you.** A complete conduit deals damage to hostile aquatic mobs on its own. No beacon, no other block in the game, does this.

The conduit also emits a light level of **15** — the maximum in the game — whether it is activated or not, and it does so even on land. So even a naked, un-framed conduit is a decent light source, though that is a wild waste of a heart of the sea.

## Step 1: craft the conduit block

The conduit recipe fills a 3x3 grid almost completely:

- **Center slot:** 1 heart of the sea
- **All 8 surrounding slots:** nautilus shells

That is **8 nautilus shells + 1 heart of the sea** for one conduit. There is no cheaper recipe and no alternative ingredient. One heart of the sea makes exactly one conduit, so if you want multiple conduits — for a big monument drain, say — you need a heart of the sea for each.

The conduit is not renewable in the strict sense: hearts of the sea only come from buried treasure, of which there is a finite (if large) amount per world. Nautilus shells are effectively renewable through fishing and wandering trader trades, so shells are never the bottleneck. The heart is.

## Where to find nautilus shells and hearts of the sea

**Nautilus shells** come from three places:

- **Fishing.** They are part of the treasure loot pool, so a rod with **Luck of the Sea** improves your odds. This is the steady, renewable source.
- **Drowned.** Any drowned holding a nautilus shell drops it when killed. In Java, roughly 3% of naturally-spawned drowned spawn holding one; that shell is a guaranteed drop. Kill enough drowned near a river or ocean and shells pile up.
- **Wandering traders.** They occasionally sell nautilus shells for emeralds, which is the most reliable non-random way to stockpile the eight you need.

**Hearts of the sea** come from exactly one place: **buried treasure**. You find these by getting a **buried treasure map**, which drops from shipwreck supply chests and ocean ruin chests. Follow the map's red X, dig down, and the loot chest contains exactly one heart of the sea, guaranteed. That is the entire supply line — no fishing, no mob, no trade gives you a heart. If you have not done a treasure hunt yet, the [maps and cartography guide](/blog/minecraft/minecraft-maps-cartography-guide) covers how buried treasure maps actually work.

So the realistic path is: raid a couple of shipwrecks for a treasure map, dig up the heart, and fish or trade your way to eight shells while you are out there anyway.

## Step 2: build the prismarine frame

Here is where people get it wrong. A conduit does nothing floating in open water. It has to sit inside a **water pocket** that is itself wrapped in a **prismarine frame**, and the frame has a very specific geometry.

The setup, from the inside out:

1. **Water around the conduit.** The conduit must be surrounded by water source blocks (or flowing water, or waterlogged blocks) — think of it as sitting inside a 3x3x3 pocket of water.
2. **The frame.** The activation frame is made of three **5x5 open squares**, one centered on each axis (X, Y, Z), all intersecting at the conduit. Picture three big square rings crossing at the middle. Only the blocks that form those ring edges count.

![The minimal 16-block prismarine arrangement that activates a conduit — the smallest legal frame, giving a 32-block effective range.](/images/blog/minecraft/minecraft-conduit-guide/conduit-16-blocks.webp)

The blocks that count toward activation are **only** these four:

- **Prismarine**
- **Prismarine bricks**
- **Dark prismarine**
- **Sea lanterns**

Crucially, these must be **full blocks**. Prismarine slabs, stairs, and walls do **not** activate a conduit, even though they are made of prismarine — this is by design. And any other block you stuff into that 5x5x5 outer shell (stone, glass, whatever) contributes nothing. Only the four prismarine-family full blocks, sitting on the frame edges, count.

![One complete conduit setup with a full prismarine frame around the central water pocket, ready to activate.](/images/blog/minecraft/minecraft-conduit-guide/conduit-setup.webp)

Once the frame hits the minimum block count, the conduit's eye opens and it starts pulsing. Remove any single frame block after that and it deactivates instantly.

## The 16-block minimum and the range math

This is the part worth memorizing. A conduit will not turn on until the frame contains at least **16** of the qualifying prismarine blocks. That minimum gives you an effective range of **32 blocks**.

From there, the range scales by a clean rule: the effective radius is **16 blocks for every 7 blocks in the frame, rounded down**. So more prismarine equals more reach, in steps:

| Frame blocks | Effective range |
| --- | --- |
| 16 (minimum) | 32 blocks |
| 21 | 48 blocks |
| 28 | 64 blocks |
| 35 | 80 blocks |
| 42 (full frame) | 96 blocks |

The maximum is a complete frame of **42 blocks**, giving a **96-block** spherical radius. That is the number to aim for if you are draining an ocean monument, because 96 blocks covers most of a monument's footprint from a single well-placed conduit. If you just want to breathe while building a small underwater base, the 16-block minimum is plenty and saves you a lot of prismarine.

## Conduit Power: what you actually get

Standing in range of an activated conduit gives you the **Conduit Power** effect, which is a bundle of three benefits rolled into one:

- **Water Breathing.** Your breath meter stops draining, so you cannot drown. On Bedrock it even refills your oxygen bar.
- **Night Vision (underwater).** You can see clearly underwater as if it were daylight. This is the one that makes monument-draining bearable.
- **Faster underwater mining.** Your mining speed underwater goes up by **16.7% (one sixth)** — identical to Haste I.

That mining boost matters more than it sounds. Mining underwater is normally punishingly slow (you dig at a fraction of your land speed unless you have Aqua Affinity and are standing on solid ground). Conduit Power's Haste-equivalent bump takes some of that sting out. If you want the full picture on how underwater mining penalties work and which enchantments fix them, the [armor guide](/blog/minecraft/minecraft-armor-guide) covers Aqua Affinity and Respiration, which stack beautifully with a conduit.

One important note: Conduit Power's Night Vision only kicks in underwater, and Conduit Power does **not** stack with a separately-brewed Water Breathing or Haste potion — the game just applies whichever is stronger. So do not waste potions when you are already inside a conduit field.

## The underwater guard dog: mob damage

Here is the feature that makes a conduit better than a beacon for ocean work. A **fully-activated** conduit — one with the complete 42-block frame — attacks hostile mobs on its own.

The rules:

- It damages any hostile mob (drowned, guardians, elder guardians) within **8 blocks** of the conduit.
- The mob has to be in contact with water or rain to be hit.
- It deals **4 health (2 hearts) every 2 seconds** to its target.

![A conduit attacking a drowned underwater — the beam of damage that lets it clear hostile mobs on its own.](/images/blog/minecraft/minecraft-conduit-guide/conduit-attack.webp)

There is one big caveat straight from the wiki: a conduit only attacks **one mob at a time**. It is not an area-of-effect turret that melts a whole swarm; it picks a target, chips at it, and moves on. Against a full guardian swarm in a monument, that is not going to save you — you still need to fight. But it is excellent passive pest control for a base, and it will steadily grind down anything that lingers near it. Note that the 8-block attack radius is completely separate from the 32-to-96-block Conduit Power radius; the buff reaches far, the teeth reach 8 blocks.

## Java vs Bedrock differences

The core mechanic is identical across editions, but a few details differ:

- **Oxygen refill.** In Bedrock, Conduit Power actually refills your oxygen bar while underwater; in Java it prevents the bar from draining but the refill behavior differs. Either way, you will not drown.
- **Rain behavior.** Conduits grant Conduit Power to players in rain (not just water) in both current editions, but this was a Bedrock feature first (added in 1.16.0) before parity.
- **Above-water duration.** On Bedrock, Conduit Power lingers for 12 seconds above water, during which Night Vision is technically active but does not show the usual borders.

None of these change the build. Craft it the same, frame it the same, and it activates the same in both editions. The differences are minor enough that the same 42-block max frame is the target regardless of what you play.

## Conduit tips most players miss

A few things that save real time and prismarine:

- **You do not need a full frame to breathe.** The 16-block minimum gives you 32 blocks of Conduit Power — enough for almost any small underwater build. Only go to 42 blocks if you want the 96-block range or the mob-attack feature.
- **Prismarine comes from the thing you are draining.** Ocean monuments are built almost entirely of prismarine, dark prismarine, and sea lanterns. Break down the monument you are clearing and you will have frame material to spare — so bring the conduit block in early and power it off the monument's own walls.
- **Slabs and stairs do not count.** If your frame will not activate, check that every counting block is a full prismarine-family block, not a slab, stair, or wall.
- **Guardian farms love conduits.** A conduit near a guardian farm gives you permanent breath and Night Vision while you AFK, and passively picks off stray mobs. If you are eyeing a monument for a farm, read the [ocean monument guide](/blog/minecraft/minecraft-ocean-monument-guide) first.
- **It is a max-brightness light.** At light level 15 even on land, a conduit is technically the brightest block in the game — but using one purely for light burns a heart of the sea, so do not.
- **One heart, one conduit.** Multi-conduit monument drains mean multiple treasure hunts. Plan your heart-of-the-sea supply before you commit to a big underwater project.

## Quick Action Checklist

- [ ] Raid shipwrecks and ocean ruins for a buried treasure map, then dig up a heart of the sea
- [ ] Fish, trade with wandering traders, or kill drowned to collect 8 nautilus shells
- [ ] Craft the conduit: 8 nautilus shells around 1 heart of the sea
- [ ] Place the conduit in a 3x3x3 water pocket
- [ ] Build the frame from three 5x5 squares of prismarine, dark prismarine, prismarine bricks, or sea lanterns
- [ ] Use full blocks only — no slabs, stairs, or walls count
- [ ] Hit at least 16 frame blocks to activate (32-block range); go to 42 for the full 96-block range
- [ ] Complete the full frame if you want the auto-attack on drowned and guardians (4 HP every 2s within 8 blocks)
- [ ] Break down the monument's own prismarine to finish the frame on site`,
  faq: [
    {
      question: 'How do you make a conduit in Minecraft?',
      answer:
        'Craft a conduit with 8 nautilus shells surrounding 1 heart of the sea in a 3x3 crafting grid (the heart in the center, a nautilus shell in every other slot). The nautilus shells come from fishing, drowned, or wandering traders, while the heart of the sea comes only from buried treasure. Once crafted, the conduit still has to be placed inside a water pocket wrapped in a prismarine frame to actually work.',
    },
    {
      question: 'How many blocks do you need to activate a conduit?',
      answer:
        'A conduit activates once its frame contains at least 16 qualifying blocks, which gives a 32-block effective range. The frame is built from three 5x5 open squares of prismarine, dark prismarine, prismarine bricks, or sea lanterns (full blocks only — no slabs, stairs, or walls). Adding more blocks extends the range up to a maximum of 96 blocks with a complete 42-block frame.',
    },
    {
      question: 'What does Conduit Power do?',
      answer:
        'Conduit Power is a bundle of three effects: Water Breathing so you never drown, Night Vision underwater so you can see clearly, and a 16.7% (one sixth) boost to underwater mining speed, identical to Haste I. It applies to every player touching water or rain within the conduit range. A fully-built conduit also damages hostile mobs like drowned and guardians within 8 blocks, dealing 2 hearts every 2 seconds to one target at a time.',
    },
    {
      question: 'Where do you get a heart of the sea?',
      answer:
        'A heart of the sea comes exclusively from buried treasure chests. You find those by getting a buried treasure map — which drops from shipwreck supply chests and ocean ruin chests — then following the map to the red X and digging down. Each buried treasure chest contains exactly one heart of the sea, guaranteed. There is no fishing, mob, or trade that provides one, so buried treasure is the only supply.',
    },
    {
      question: 'What is the maximum range of a conduit?',
      answer:
        'A conduit reaches a maximum effective range of 96 blocks with a complete 42-block prismarine frame. The range scales at 16 blocks per 7 frame blocks (rounded down): 32 blocks at the 16-block minimum, 48 at 21, 64 at 28, 80 at 35, and 96 at the full 42. Note that the separate mob-attack radius is only 8 blocks — the buff reaches far, but the conduit only damages hostiles that get close.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/minecraft-ocean-monument-guide', anchor: 'Ocean monument guide' },
    { href: '/blog/minecraft/minecraft-maps-cartography-guide', anchor: 'Maps and buried treasure guide' },
    { href: '/blog/minecraft/minecraft-armor-guide', anchor: 'Armor and underwater enchantments guide' },
    { href: '/blog/minecraft/minecraft-beacon-guide', anchor: 'Beacon guide (the land equivalent)' },
    { href: '/blog/minecraft/minecraft-fishing-guide', anchor: 'Fishing guide for nautilus shells' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Conduit',
      title: 'Minecraft Wiki — conduit recipe, frame, range, and mob attack',
    },
    {
      url: 'https://minecraft.wiki/w/Conduit_Power',
      title: 'Minecraft Wiki — the Conduit Power status effect',
    },
    {
      url: 'https://minecraft.wiki/w/Heart_of_the_Sea',
      title: 'Minecraft Wiki — heart of the sea and buried treasure',
    },
  ],
  tldr:
    'To build a Minecraft conduit: craft the block from 8 nautilus shells and 1 heart of the sea (the heart comes only from buried treasure), place it in a water pocket, and wrap it in a prismarine frame. Sixteen prismarine-family full blocks activate it for a 32-block range; a complete 42-block frame maxes out at 96 blocks. Conduit Power gives water breathing, underwater night vision, and a 16.7% underwater mining boost, and a full frame also damages drowned and guardians within 8 blocks for 2 hearts every 2 seconds.',
  itemList: {
    name: 'Minecraft Conduit Frame Sizes and Range',
    items: [
      { name: '16 blocks (minimum)', description: 'The smallest frame that activates. 32-block Conduit Power range.' },
      { name: '21 blocks', description: '48-block range. Range scales at 16 blocks per 7 frame blocks.' },
      { name: '28 blocks', description: '64-block range.' },
      { name: '35 blocks', description: '80-block range.' },
      { name: '42 blocks (full frame)', description: 'Maximum 96-block range, plus the auto-attack on hostile mobs within 8 blocks.' },
    ],
  },
};
