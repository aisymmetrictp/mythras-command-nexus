import type { BlogPost } from '../../blogTypes';

export const minecraftSnifferGuide: BlogPost = {
  slug: 'minecraft-sniffer-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-guides',
  tags: ['sniffer', 'sniffer egg', 'torchflower', 'pitcher plant', 'archaeology', 'mobs'],
  title: 'Minecraft Sniffer Guide: Eggs, Digging, and Ancient Seeds',
  metaDescription:
    'How to get a sniffer in Minecraft: find sniffer eggs in warm ocean ruins, hatch them faster on moss, and farm torchflower seeds and pitcher pods from digging.',
  excerpt:
    'The sniffer won the 2022 mob vote and then quietly became the only source of two plants in the game. Here is how to find its egg, hatch it fast, and actually get seeds out of the big lug.',
  featuredImagePrompt:
    'A large red and green sniffer mob pressing its nose into a grassy meadow to dig, with torchflowers blooming nearby and an egg resting on a moss block',
  heroImage: '/images/blog/minecraft/minecraft-sniffer-guide/sniffer-digging-hero.webp',
  heroImageAlt:
    'A red and green Minecraft sniffer splooting on the ground and digging into grass with its nose, searching for ancient seeds.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-sniffer-guide/sniffer-digging-hero.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Sniffer',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-sniffer-guide/sniffer-size-comparison.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Sniffer',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-sniffer-guide/sniffer-egg-placed.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Sniffer_Egg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-sniffer-guide/torchflower-growth-stages.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Torchflower_Seeds',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-sniffer-guide/sniffer-plant-farm.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Sniffer',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-13T00:00:00.000Z',
  lastUpdated: '2026-07-13T00:00:00.000Z',
  primaryKeyword: 'minecraft sniffer guide',
  secondaryKeywords: [
    'how to get a sniffer in minecraft',
    'sniffer egg minecraft',
    'how to hatch a sniffer egg',
    'torchflower seeds minecraft',
    'pitcher pod minecraft',
    'sniffer breeding',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'what-the-sniffer-actually-is', label: 'What the sniffer actually is', level: 2 },
    { id: 'finding-your-first-sniffer-egg', label: 'Finding your first sniffer egg', level: 2 },
    { id: 'hatching-the-moss-block-trick', label: 'Hatching: the moss block trick', level: 2 },
    { id: 'snifflets-the-slowest-babies-in-the-game', label: 'Snifflets: the slowest babies in the game', level: 2 },
    { id: 'how-sniffing-and-digging-actually-work', label: 'How sniffing and digging actually work', level: 2 },
    { id: 'torchflower-seeds-and-pitcher-pods', label: 'Torchflower seeds and pitcher pods', level: 2 },
    { id: 'torchflowers', label: 'Torchflowers', level: 3 },
    { id: 'pitcher-plants', label: 'Pitcher plants', level: 3 },
    { id: 'breeding-sniffers-for-more-eggs', label: 'Breeding sniffers for more eggs', level: 2 },
    { id: 'building-a-sniffer-pen-that-actually-produces', label: 'Building a sniffer pen that actually produces', level: 2 },
    { id: 'sniffer-tips-most-players-miss', label: 'Sniffer tips most players miss', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Here is a stat that should be printed on the sniffer's forehead: it is the only renewable source of two entire plants. Torchflowers and pitcher plants do not drop their own seeds when harvested — break a mature torchflower crop and you get the flower, not the seed. Every torchflower in your world traces back to a sniffer pressing its giant nose into the dirt. The 2022 mob vote winner is not just a walking plush toy; it is a piece of agricultural infrastructure with exactly one job.

The catch is that almost everything about the sniffer is slow, and the game explains none of it: where the eggs actually are, why yours is taking twenty minutes to hatch, why your sniffer suddenly stopped digging, and what the seeds are even for. This guide covers the whole pipeline — egg, hatch, dig, farm — with every number checked against the Minecraft Wiki.

## What the sniffer actually is

The sniffer is an **ancient, extinct mob** — the in-game lore is that it died out long before your world began, which is why it **never spawns naturally**. The only way one exists in your world is you hatching an egg. It was added in 1.20 (Trails and Tales) after winning the Minecraft Live 2022 mob vote against the rascal and the tuff golem, and it is enormous: adults stand about 1.75 blocks tall and 1.9 blocks wide, a six-legged wall of red and green feathers.

![A Minecraft sniffer standing beside a warden and a player, showing the sniffer is comparable in bulk to the warden.](/images/blog/minecraft/minecraft-sniffer-guide/sniffer-size-comparison.webp)

Despite the warden-class bulk, it is completely **passive** and surprisingly fragile at **14 HP** (7 hearts). It cannot be attacked into retaliating, cannot be ridden, and drops nothing but 1-3 XP if killed — there is zero reason to hurt one, and every reason to build it a paddock.

## Finding your first sniffer egg

Sniffer eggs come from exactly one natural source: **suspicious sand in warm ocean ruins**, excavated with a brush. Not cold ruins, not trail ruins, not desert temples — the sandy ruin clusters in warm ocean biomes. That means your shopping list is a brush (feather + copper ingot + stick) and a trip to a lukewarm-or-warmer ocean; the [archaeology guide](/blog/minecraft/minecraft-archaeology-guide) covers brushing mechanics and how to spot suspicious sand's slightly rougher texture, and the [biomes guide](/blog/minecraft/minecraft-biomes-guide) helps you identify warm oceans by their coral.

Practical notes from doing this more times than I care to admit:

- Suspicious sand is fragile — it breaks and drops **nothing** if you mine it, push it, or let it fall. Brush only.
- Underwater excavation is miserable without help. Bring Water Breathing potions from the [brewing guide](/blog/minecraft/minecraft-potion-brewing-guide), or set up a [conduit](/blog/minecraft/minecraft-conduit-guide) if you are clearing a whole ruin field.
- The egg is one of several possible finds in warm-ruin suspicious sand, so expect to brush multiple blocks. Ruins generate in clusters — sweep the whole site.
- Once you have **one egg** you technically never need another; two hatched sniffers breed more eggs. Grab two if the ocean is generous, because a pair saves you forty minutes of growing time later.

The egg itself is refreshingly forgiving: it mines instantly by hand, always drops itself (no Silk Touch needed), stacks to 64, and can even float in midair when placed.

## Hatching: the moss block trick

A placed sniffer egg cracks twice, then hatches. The timing is the part everyone gets wrong:

- On a **moss block: about 10 minutes**.
- On **anything else: about 20 minutes** — exactly twice as long.

![A sniffer egg placed in the world, showing its speckled green and brown shell.](/images/blog/minecraft/minecraft-sniffer-guide/sniffer-egg-placed.webp)

That is not a rounding error, it is a designed mechanic, and it is the single best reason to keep moss in your inventory. If you do not have any, the [lush caves guide](/blog/minecraft/minecraft-lush-caves-guide) covers where moss generates and how one block plus bone meal becomes infinite moss. Hatch speed is also **not** affected by random tick speed — the egg runs its own timer, so there is no cheesing it.

One more quirk: sniffer eggs are dropped as **items** when breeding (like chicken eggs), not placed into the world like turtle eggs. You place them yourself, which means you choose the hatchery — and the hatchery should be moss.

## Snifflets: the slowest babies in the game

The baby sniffer is officially called a **snifflet**, and it takes **40 minutes** (48,000 ticks — two full in-game days) to grow up. That is **double** the usual 20-minute baby timer, the longest natural growth time of any breedable mob. You can speed it up: each **torchflower seed** fed to a snifflet cuts the remaining growth time by **10%**.

Two behavioral warnings: snifflets **do not follow their parents** like other baby mobs, so they will happily wander off a cliff while the adults graze; and they cannot dig for anything until grown. Wall the nursery.

## How sniffing and digging actually work

An adult sniffer alternates between wandering, sniffing the air, and — when it locks onto a buried seed — splooting flat and digging with its nose. The mechanics under the hood are specific, and they explain every "my sniffer stopped working" complaint:

- Sniffers can only dig **8 block types**: dirt, grass blocks, podzol, coarse dirt, rooted dirt, moss blocks, mud, and muddy mangrove roots. Mycelium is deliberately excluded — a mushroom island sniffer ranch produces nothing.
- The sniffer digs at the block under its **head**, which sits about **2.25 blocks in front of its body center**. It needs to reach that spot, so cramped one-block channels stall it.
- It remembers the **last 20 places it dug** and refuses to reuse them. A tiny pen goes barren fast.
- After a successful dig it does a happy head-shake and starts an **8-minute cooldown** before it will dig again.
- It will not dig while in water, riding a boat or minecart, or otherwise occupied.

Each dig produces one of exactly two items: **torchflower seeds** or a **pitcher pod**. No sculk-sensor RNG, no rare table — two possible outputs, both exclusive to the sniffer.

## Torchflower seeds and pitcher pods

Both finds are crops, and both share a quirk that makes the sniffer permanently relevant: **the mature crop does not return its seed**. Every planting consumes a seed that only a sniffer can replace.

![All growth stages of the torchflower crop planted on farmland, from seedling to full orange bloom.](/images/blog/minecraft/minecraft-sniffer-guide/torchflower-growth-stages.webp)

### Torchflowers

Torchflower seeds go on **farmland** and grow through three stages into a torchflower. Break the mature crop and you get the flower — usable as decoration, in a flower pot, or crafted into **1 orange dye**. Breaking the crop early refunds the seed, so harvest timing actually matters. Beyond farming, torchflower seeds **breed chickens**, **tame parrots**, compost at 30%, and — most importantly — breed and heal sniffers (2 HP per seed). Farmer villagers will plant torchflower seeds but never harvest them, which is a genuinely funny piece of villager AI.

### Pitcher plants

Pitcher pods grow on farmland into the **pitcher plant**, a dramatic two-block-tall blue-green trumpet that crafts into **2 cyan dye**. Same rules: break early for the pod back, break mature for the plant and no pod. Pitcher pods also breed chickens and tame parrots on Bedrock. Neither plant is food for players — these are decoration and dye crops, full stop.

## Breeding sniffers for more eggs

Feed **torchflower seeds** to two adult sniffers and, instead of a baby appearing, one of them **lays a sniffer egg that drops as an item** — the only breedable mob in the game that works this way. Breeding grants 1-7 XP, and the parents go on a **5-minute cooldown** before they can breed again.

This creates a tidy loop: sniffers dig up torchflower seeds, seeds breed more sniffers, more sniffers dig more seeds. Two eggs from one ocean ruin bootstrap an infinite population. General breeding mechanics (love mode, cooldowns, baby growth) work as described in the [taming and breeding guide](/blog/minecraft/minecraft-taming-breeding-guide) — the egg-drop step is the sniffer's one exception.

## Building a sniffer pen that actually produces

Because of the 20-location memory and the 8-minute cooldown, sniffer output is entirely a function of pen design. What works:

![A sniffer standing in a farm surrounded by torchflowers and pitcher plants it helped produce.](/images/blog/minecraft/minecraft-sniffer-guide/sniffer-plant-farm.webp)

- **Go big and flat.** A pen of at least 20x20 diggable surface per sniffer keeps fresh blocks in range despite the 20-spot memory. Bigger is better; cute little 5x5 pens choke within an hour.
- **Use cheap diggable blocks.** Plain dirt or grass is fine — there is no yield difference between block types, so save your moss for the hatchery.
- **Fence it properly.** Sniffers are 1.9 blocks wide and pathfind badly on one-block ledges; a two-block-wide gate and flat terrain prevent the big lug from stranding itself.
- **Keep water out of the floor.** Sniffers refuse to dig in water, and pond edges eat into your effective area.
- **Run multiple sniffers.** Cooldowns are per-sniffer, so four sniffers quadruple seed income in the same (larger) pen.
- **Expect honest numbers.** One sniffer averages at best one dig per 8+ minutes, and not every dig is the seed you want. This is a background farm — check it between projects, not a machine you stand and watch.

## Sniffer tips most players miss

- **Hold torchflower seeds to lead them.** Sniffers and snifflets follow a player holding seeds, and they can be leashed — that is how you walk one home from the beach.
- **Moss doubles as pen and hatchery.** Moss blocks are diggable AND halve egg hatch time, so a moss corner serves both jobs.
- **Feed seeds back to snifflets.** Each seed shaves 10% off the remaining 40-minute growth timer; a handful of seeds turns a snifflet into a worker in minutes.
- **Sniffers can ride minecarts.** Comically, they fit — a rail line beats walking one across a continent.
- **Eggs are portable insurance.** Eggs stack to 64 and place anywhere (even floating), so carry spares; a killed sniffer is a 40-minute setback, an egg is 10 minutes on moss.
- **They dig up seeds, not blocks.** Digging does not consume or convert the ground block, so the pen never degrades — the same dirt yields forever.

## Quick Action Checklist

- [ ] Craft a brush (feather + copper ingot + stick) and find a warm ocean ruin
- [ ] Brush suspicious sand until you have 1-2 sniffer eggs (never mine it)
- [ ] Place eggs on moss blocks: about 10 minutes to hatch instead of 20
- [ ] Feed snifflets torchflower seeds to cut the 40-minute growth timer by 10% per seed
- [ ] Build a 20x20+ flat pen of dirt or grass per sniffer, fenced, no water
- [ ] Collect torchflower seeds and pitcher pods after each dig (8-minute cooldown per sniffer)
- [ ] Plant on farmland; break mature crops for torchflowers (1 orange dye) and pitcher plants (2 cyan dye)
- [ ] Breed two adults with torchflower seeds for another egg every 5 minutes
- [ ] Remember: harvested crops never return seeds — the sniffers are the farm`,
  faq: [
    {
      question: 'How do you get a sniffer in Minecraft?',
      answer:
        'Sniffers never spawn naturally. The only natural source is sniffer eggs brushed out of suspicious sand in warm ocean ruins using a brush (feather + copper ingot + stick). Place the egg and it hatches into a snifflet, which grows into an adult in 40 minutes. After that, two adults can be bred with torchflower seeds to lay more eggs, making sniffers renewable from a single ocean trip.',
    },
    {
      question: 'How do you hatch a sniffer egg faster?',
      answer:
        'Place it on a moss block. A sniffer egg hatches in about 10 minutes on moss and about 20 minutes on any other block — exactly twice as long. The egg cracks twice before hatching, does not need a supporting block, and its timer is not affected by random tick speed, so moss is the only legitimate way to speed it up.',
    },
    {
      question: 'What do sniffers dig up?',
      answer:
        'Exactly two items: torchflower seeds and pitcher pods, both exclusive to the sniffer. An adult digs in dirt, grass blocks, podzol, coarse dirt, rooted dirt, moss blocks, mud, and muddy mangrove roots (never mycelium), then waits out an 8-minute cooldown before digging again. It also remembers its last 20 dig spots and will not reuse them, so bigger pens produce more.',
    },
    {
      question: 'What are torchflowers and pitcher plants used for?',
      answer:
        'Both are decorative dye crops grown on farmland. A mature torchflower crop drops a torchflower, which crafts into 1 orange dye; a mature pitcher crop becomes a two-block pitcher plant, which crafts into 2 cyan dye. Neither crop returns its seed when mature — breaking the crop early refunds the seed instead — so sniffers are the only renewable source of both plants.',
    },
    {
      question: 'How do you breed sniffers?',
      answer:
        'Feed torchflower seeds to two adult sniffers. Instead of spawning a baby directly, one sniffer lays a sniffer egg that drops as an item, and the parents enter a 5-minute breeding cooldown. Place the egg (ideally on moss) to hatch a snifflet, which takes 40 minutes to mature — twice as long as most baby mobs — unless you speed it up with more torchflower seeds at 10% off the remaining time per seed.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/minecraft-archaeology-guide', anchor: 'Archaeology guide (brushing suspicious sand)' },
    { href: '/blog/minecraft/minecraft-lush-caves-guide', anchor: 'Lush caves guide (moss blocks)' },
    { href: '/blog/minecraft/minecraft-taming-breeding-guide', anchor: 'Taming and breeding guide' },
    { href: '/blog/minecraft/minecraft-conduit-guide', anchor: 'Conduit guide (underwater excavation)' },
    { href: '/blog/minecraft/minecraft-biomes-guide', anchor: 'Biomes guide (finding warm oceans)' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Sniffer',
      title: 'Minecraft Wiki — sniffer behavior, digging blocks, and breeding',
    },
    {
      url: 'https://minecraft.wiki/w/Sniffer_Egg',
      title: 'Minecraft Wiki — sniffer egg sources and hatch times',
    },
    {
      url: 'https://minecraft.wiki/w/Torchflower_Seeds',
      title: 'Minecraft Wiki — torchflower seed uses and crop behavior',
    },
  ],
  tldr:
    'Sniffers never spawn naturally — brush sniffer eggs from suspicious sand in warm ocean ruins, and hatch them on moss blocks (about 10 minutes instead of 20). Adults dig torchflower seeds and pitcher pods out of dirt-type blocks on an 8-minute cooldown, remembering their last 20 dig spots, so big flat pens produce best. Since mature torchflower and pitcher crops never return seeds, sniffers are the only renewable source of both plants, and breeding two adults with torchflower seeds lays a new egg as an item.',
};
