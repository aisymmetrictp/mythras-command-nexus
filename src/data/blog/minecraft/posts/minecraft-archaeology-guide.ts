import type { BlogPost } from '../../blogTypes';

export const minecraftArchaeologyGuide: BlogPost = {
  slug: 'minecraft-archaeology-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-exploration',
  tags: ['archaeology', 'brush', 'trail-ruins', 'sniffer', 'pottery-sherds', 'exploration'],
  title: 'Minecraft Archaeology Guide: Sniffer, Brushes & Trail Ruins',
  metaDescription:
    'Minecraft archaeology guide: craft the brush, dig suspicious sand and gravel in trail ruins and desert temples, collect pottery sherds, and hatch a Sniffer.',
  excerpt:
    "Archaeology turns mining's most ignorable blocks — plain sand and gravel — into loot tables. With one brush, the right structures, and a steady hand, you pull pottery sherds, a Sniffer egg, and armor trims out of the ground. Here is the whole system, with the real loot tables.",
  featuredImagePrompt:
    'A blocky Minecraft player crouched in a mossy jungle trail ruins structure, holding a brush against an exposed suspicious gravel block, pottery sherd patterns glowing faintly in the dusted surface, lush green canopy overhead',
  heroImage: '/images/blog/minecraft/minecraft-archaeology-guide/trail-ruins.webp',
  heroImageAlt:
    'A Minecraft trail ruins structure half-buried in a jungle biome — the dig site where you brush suspicious gravel for pottery sherds and armor trims.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-archaeology-guide/trail-ruins.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Trail_Ruins',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-archaeology-guide/brushing-suspicious-sand.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Brush',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-archaeology-guide/sniffer.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Sniffer',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-archaeology-guide/decorated-pot.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Decorated_Pot',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-11T00:00:00.000Z',
  lastUpdated: '2026-06-11T00:00:00.000Z',
  primaryKeyword: 'minecraft archaeology guide',
  secondaryKeywords: [
    'minecraft brush',
    'minecraft suspicious sand',
    'minecraft trail ruins loot',
    'minecraft pottery sherds',
    'how to hatch a sniffer minecraft',
    'minecraft decorated pot',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'what-archaeology-actually-is', label: 'What archaeology actually is', level: 2 },
    { id: 'crafting-and-using-the-brush', label: 'Crafting and using the brush', level: 2 },
    { id: 'where-suspicious-sand-and-gravel-generate', label: 'Where suspicious sand and gravel generate', level: 2 },
    { id: 'trail-ruins-the-best-dig-site', label: 'Trail ruins — the best dig site', level: 2 },
    { id: 'desert-temples-wells-and-ocean-ruins', label: 'Desert temples, wells, and ocean ruins', level: 2 },
    { id: 'pottery-sherds-and-decorated-pots', label: 'Pottery sherds and decorated pots', level: 2 },
    { id: 'the-sniffer-and-its-ancient-plants', label: 'The Sniffer and its ancient plants', level: 2 },
    { id: 'java-vs-bedrock-notes', label: 'Java vs Bedrock notes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Archaeology is the one Minecraft system that asks you to slow down. Everything else in this game rewards speed — mine fast, build fast, kill the dragon, get the Elytra. Archaeology hands you a brush and tells you to gently dust a block of sand for ten seconds while a hostile mob possibly walks up behind you. And the payoff is loot you cannot get any other way: a Sniffer egg, armor trim templates, and a wall of pottery sherds that tell tiny stories.

This guide covers the whole loop: crafting the brush, the blocks you can actually dig, every structure that hides them with its real loot table, how pottery sherds become decorated pots, and the headline prize — hatching a Sniffer and growing the two plants it digs up. The loot tables here are pulled straight from the wiki, because most "archaeology guides" hand-wave the percentages and it matters when you are grinding for a 6.7% Sniffer egg.

## What archaeology actually is

Archaeology is a non-destructive dig mechanic added in the Trails & Tales update. Instead of mining a block and getting its drop, you **brush** a special block — suspicious sand or suspicious gravel — and it slowly gives up a hidden item without you breaking it outright.

Two things make it different from normal mining:

- **The loot is structure-specific.** A suspicious gravel block in trail ruins rolls a completely different loot table than one in a cold ocean ruin. Where you dig decides what you get.
- **It is the only source for a handful of items.** Pottery sherds, the Sniffer egg, and several armor trim templates do not drop anywhere else. If you want them, you brush for them.

That is the whole pitch. It is slow, it is deliberate, and it is the only way into a corner of the game's loot most players never see.

## Crafting and using the brush

The brush is the entire toolset. The recipe is cheap:

- **1 feather** (top) + **1 copper ingot** (middle) + **1 stick** (bottom), stacked vertically in the crafting grid.

That is it — a feather, a copper ingot, and a stick. [Copper](/blog/minecraft/minecraft-copper-guide) is everywhere in the new cave generation, so a brush costs you basically nothing.

To use it, **hold use (right-click) on a suspicious block and keep holding.** The brush works through a short animation, the dust falls away in stages, and after a couple of seconds the hidden item pops out as a drop. Let go early and the block resets — you have to start the brushing over.

![A Minecraft player brushing a block of suspicious sand, the dusted surface slowly revealing a hidden item underneath.](/images/blog/minecraft/minecraft-archaeology-guide/brushing-suspicious-sand.webp)

A few practical notes that save you grief:

- **Suspicious blocks are fragile.** Break a suspicious sand or gravel block with anything other than a brush — a pickaxe, a shovel, gravity, an explosion — and you destroy the loot. Excavate the surrounding terrain carefully so you do not knock one loose.
- **They look almost normal.** Suspicious sand and gravel have a slightly cracked, speckled texture compared to the real thing. In a desert or a ruin, scan for that subtle difference before you go swinging a shovel.
- **The brush has durability** and wears down with use like any tool, but it is so cheap to recraft that this never matters in practice.

## Where suspicious sand and gravel generate

This is the part to memorize, because it dictates everything. Suspicious sand and suspicious gravel each generate in specific structures, and the structure sets the loot table.

| Block | Generates in |
| --- | --- |
| Suspicious sand | Desert pyramids (temples), desert wells, warm ocean ruins |
| Suspicious gravel | Trail ruins, cold ocean ruins |

So the rule of thumb: **sand is the desert-and-warm-water material; gravel is the trail-ruins-and-cold-water material.** If you want the Sniffer egg specifically, that is suspicious *sand* in *warm* ocean ruins only — no other block, no other structure.

## Trail ruins — the best dig site

Trail ruins are the structure that exists *for* archaeology. They generate partially buried underground, most visibly in taiga, snowy taiga, old-growth pine/spruce, jungle, and bamboo jungle [biomes](/blog/minecraft/minecraft-biomes-guide), and they are packed with suspicious gravel.

Why they are the priority dig:

- **Volume.** A single trail ruins has dozens of suspicious gravel blocks. You can fill an inventory with brushing material from one site.
- **Exclusive loot.** Trail ruins are the only source for the **Wayfinder, Raiser, Shaper, and Host [armor trim templates](/blog/minecraft/minecraft-smithing-templates-guide)**, plus a unique set of pottery sherds and the **Relic music disc**.

The trail ruins gravel pulls from a big common pool (wheat, a wooden hoe, dyes, candles, clay, brick, emeralds) plus a rare slice where the good stuff lives. The rare drops — pottery sherds like **Burn, Danger, Friend, Heart, Heartbreak, Howl, and Sheaf**, the four armor trim templates, and the Relic disc — each sit around a 1-in-12 chance per rare roll, so plan to brush a lot of blocks per template. Bring multiple brushes and dig the whole structure in one trip.

## Desert temples, wells, and ocean ruins

The other four structures each have their own loot table. Here is what each one actually drops, with the real odds.

**Desert pyramids (temples)** — suspicious sand here rolls one of 8 items at an equal 12.5% chance each:

- Diamond, Emerald, TNT, Gunpowder
- Archer, Miner, Prize, and Skull pottery sherds

**Desert wells** — easy to miss (a tiny sandstone structure with a single block of suspicious sand under it), but worth brushing for two sherds you cannot get elsewhere:

- **Arms Up** pottery sherd (25%), **Brewer** pottery sherd (25%)
- Brick, Emerald, Stick, Suspicious Stew (12.5% each)

**Warm ocean ruins** — the only place the Sniffer egg lives. Suspicious sand rolls a 10-item table:

- Coal, Emerald, Wheat, Wooden Hoe, Gold Nugget (about 13.3% each)
- **Sniffer Egg**, Angler sherd, Shelter sherd, Snort sherd, Iron Axe (about 6.7% each)

**Cold ocean ruins** — suspicious gravel, a 10-item table mirroring the warm version but with different sherds:

- Coal, Emerald, Wheat, Wooden Hoe, Gold Nugget (about 13.3% each)
- Blade, Explorer, Mourner, Plenty pottery sherds, Iron Axe (about 6.7% each)

The takeaway: if you are completing a pottery sherd collection, you need to hit **all five structure types** — desert temple, desert well, warm and cold ocean ruins, and trail ruins — because the sherds are split across them with zero overlap.

## Pottery sherds and decorated pots

Pottery sherds are the flat, painted clay fragments you pull out of suspicious blocks. There are 20-plus of them, each with a different stamped image (a skull, an angler, a heart, arms raised), and on their own they do nothing. The point is the **decorated pot**.

![A row of Minecraft decorated pots in-game, each displaying a different pottery sherd pattern on its sides.](/images/blog/minecraft/minecraft-archaeology-guide/decorated-pot.webp)

To craft a decorated pot, place **4 items in a diamond/rhombus shape** in the crafting grid (top-center, left-center, right-center, bottom-center). Each of those four slots can be either a **pottery sherd** or a plain **brick**:

- Use **four bricks** and you get a plain terracotta-colored pot.
- Use **pottery sherds** in any of the four slots and each sherd's image gets stamped onto the corresponding face of the pot.

So a single pot can show four different sherd designs — one per side — or mix sherds and bricks for blank faces. They are decorative storage with a twist: a decorated pot holds **a single stack of one item**, and if you break it by hand the sherds pop back out so you can reuse them. Hit it with a tool and it just shatters into its sherds. They are the trophy case for your dig finds, and players build entire museum walls out of themed pots.

> The "story" pots are the fun part: line up sherds so a pot reads like a tiny scene. The Trails & Tales designers stamped these with enough variety that the community treats sherd-hunting like collecting baseball cards.

## The Sniffer and its ancient plants

The [Sniffer](/blog/minecraft/minecraft-sniffer-guide) is the prize at the bottom of the archaeology rabbit hole — an "ancient," extinct passive mob you literally resurrect from a dig find.

The full pipeline:

1. **Get a Sniffer egg.** Brush suspicious sand in **warm ocean ruins** — it is roughly a 6.7% drop, so expect to dig a while. This is the only source.
2. **Hatch it.** Place the egg as a block and wait. It hatches in about **10 minutes on a moss block**, or roughly **20 minutes on any other block** — so use moss to halve the timer.
3. **A snifflet appears.** The baby Sniffer (a "snifflet") takes a long time to grow up — around **40 minutes**, about twice as long as a normal baby mob.
4. **Let it dig.** An adult Sniffer wanders and periodically buries its nose in the ground, then digs up an ancient seed. It can dig on dirt, grass, moss, coarse dirt, podzol, mud, and a few similar blocks (notably **not** mycelium), and it pulls up either a **torchflower seed** or a **pitcher pod**, roughly 50/50.

What the seeds grow:

- **Torchflower seeds** grow into a torchflower — a small orange-and-black ornamental plant. Bonus: torchflower seeds are also what you **breed Sniffers** with. Feed two adult Sniffers torchflower seeds and they produce another egg (with a 5-minute breeding cooldown), so once you have two, you have a renewable Sniffer farm.
- **Pitcher pods** plant and grow into a **pitcher plant**, a tall two-block ornamental. Pitcher pods are the rarer, showier payoff.

![A Minecraft Sniffer, the large ancient passive mob hatched from a Sniffer egg that digs up torchflower and pitcher plant seeds.](/images/blog/minecraft/minecraft-archaeology-guide/sniffer.webp)

Is the Sniffer "useful"? Honestly, no — the plants are purely decorative and the mob is slow. It is a collector's reward, a bragging-rights pet that exists because the community voted it in. But hatching the last extinct species in Minecraft from a fossilized egg you brushed out of the seafloor is exactly the kind of slow, deliberate payoff archaeology is built around.

## Java vs Bedrock notes

The archaeology system is shared across editions, but watch for the usual small differences:

- **The brush recipe, suspicious blocks, and structure loot tables are the same** on Java and Bedrock. The drop percentages above hold on both.
- **Exact loot weights can drift between updates** as Mojang rebalances, so if a wiki table and your in-game results disagree, the live game (and the current wiki revision) wins.
- **Suspicious blocks behave identically** — both editions destroy the loot if you break the block with anything but a brush, and both reset the brushing if you let go early.
- **Sniffer hatch and growth timers** match across editions; the moss-block speed-up applies on both.

## Quick Action Checklist

- [ ] Craft a brush: feather + copper ingot + stick, stacked vertically
- [ ] Learn the suspicious-block textures so you do not shovel one by mistake
- [ ] Only brush suspicious blocks — breaking them any other way destroys the loot
- [ ] Hit trail ruins first for volume plus exclusive armor trims and sherds
- [ ] Brush warm ocean ruins suspicious sand for the Sniffer egg (~6.7%)
- [ ] Collect pottery sherds across all five structure types — they do not overlap
- [ ] Craft decorated pots: 4 sherds/bricks in a diamond shape
- [ ] Hatch the Sniffer egg on a moss block (~10 min) and breed adults with torchflower seeds`,
  faq: [
    {
      question: 'How do you craft a brush in Minecraft?',
      answer:
        'Place a feather in the top slot, a copper ingot in the middle slot, and a stick in the bottom slot of the crafting grid, stacked vertically. That single recipe gives you the brush — the only tool that can dig suspicious sand and suspicious gravel without destroying the hidden loot. Copper is common in cave generation, so brushes are cheap to recraft when they wear out.',
    },
    {
      question: 'Where do you find suspicious sand and suspicious gravel?',
      answer:
        'Suspicious sand generates in desert pyramids (temples), desert wells, and warm ocean ruins. Suspicious gravel generates in trail ruins and cold ocean ruins. Each structure has its own loot table, so where you dig determines what you find. To get the Sniffer egg specifically, you must brush suspicious sand in warm ocean ruins — no other block or structure drops it.',
    },
    {
      question: 'How do you hatch a Sniffer egg?',
      answer:
        'Get a Sniffer egg by brushing suspicious sand in warm ocean ruins (about a 6.7% chance per block). Place the egg as a block and wait: it hatches in roughly 10 minutes on a moss block, or about 20 minutes on most other blocks, so use moss to cut the timer in half. It hatches into a baby Sniffer (a snifflet) that takes around 40 minutes to grow up. Adults dig up torchflower seeds and pitcher pods.',
    },
    {
      question: 'What do you do with pottery sherds in Minecraft?',
      answer:
        'Pottery sherds are used to craft decorated pots. Place four items in a diamond shape in the crafting grid (top, left, right, and bottom center slots); each slot can be a pottery sherd or a plain brick. Each sherd stamps its image onto the matching face of the pot, so one pot can display up to four different designs. Decorated pots are decorative storage that hold a single stack and drop their sherds back when broken by hand.',
    },
    {
      question: 'What does a Sniffer dig up?',
      answer:
        'An adult Sniffer periodically buries its nose in the ground and digs up either a torchflower seed or a pitcher pod, with roughly equal odds. It can dig on dirt, grass, moss, coarse dirt, podzol, mud, and similar blocks, but not mycelium. Torchflower seeds grow into torchflowers and are also used to breed more Sniffers; pitcher pods grow into the taller pitcher plant. Both plants are purely decorative.',
    },
    {
      question: 'Which structure has the best archaeology loot?',
      answer:
        'Trail ruins are the best overall dig site. They are packed with dozens of suspicious gravel blocks and are the only source for the Wayfinder, Raiser, Shaper, and Host armor trim templates, a unique set of pottery sherds, and the Relic music disc. The rare drops sit around a 1-in-12 chance per rare roll, so bring multiple brushes and excavate the whole structure in one trip.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/minecraft-biomes-guide', anchor: 'Minecraft biomes guide' },
    { href: '/blog/minecraft/minecraft-taming-breeding-guide', anchor: 'How to tame and breed every animal' },
    { href: '/blog/minecraft/minecraft-armor-guide', anchor: 'Minecraft armor and trims guide' },
    { href: '/blog/minecraft/minecraft-survival-guide-beginners', anchor: 'Minecraft survival guide for beginners' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Archaeology',
      title: 'Minecraft Wiki — archaeology, brushing, and structure loot tables',
    },
    {
      url: 'https://minecraft.wiki/w/Trail_Ruins',
      title: 'Minecraft Wiki — trail ruins generation and loot',
    },
    {
      url: 'https://minecraft.wiki/w/Sniffer',
      title: 'Minecraft Wiki — Sniffer egg, hatching, and ancient plants',
    },
  ],
  tldr:
    'Minecraft archaeology means brushing suspicious sand and gravel for hidden loot. Craft a brush (feather + copper ingot + stick), then dig the right structure: trail ruins (best, with exclusive armor trims) and cold ocean ruins hide suspicious gravel; desert temples, desert wells, and warm ocean ruins hide suspicious sand. Break a suspicious block any way but brushing and the loot is gone. Collect pottery sherds across all five structures and craft decorated pots (4 sherds/bricks in a diamond). The Sniffer egg only comes from warm ocean ruins (~6.7%); hatch it on moss (~10 min) and breed adults with torchflower seeds.',
  itemList: {
    name: 'Minecraft Archaeology Dig Sites and Their Loot',
    items: [
      { name: 'Trail ruins (suspicious gravel)', description: 'The best site: dozens of blocks plus exclusive Wayfinder/Raiser/Shaper/Host armor trims, rare sherds, and the Relic disc.' },
      { name: 'Warm ocean ruins (suspicious sand)', description: 'The only source of the Sniffer egg (~6.7%), plus Angler, Shelter, and Snort pottery sherds.' },
      { name: 'Cold ocean ruins (suspicious gravel)', description: 'Blade, Explorer, Mourner, and Plenty pottery sherds, plus iron axes and common materials.' },
      { name: 'Desert pyramids (suspicious sand)', description: 'Diamond, emerald, TNT, gunpowder, and the Archer, Miner, Prize, and Skull sherds at 12.5% each.' },
      { name: 'Desert wells (suspicious sand)', description: 'A single block hiding the Arms Up (25%) and Brewer (25%) sherds you cannot get elsewhere.' },
    ],
  },
};
