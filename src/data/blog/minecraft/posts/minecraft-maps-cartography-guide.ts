import type { BlogPost } from '../../blogTypes';

export const minecraftMapsCartographyGuide: BlogPost = {
  slug: 'minecraft-maps-cartography-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-exploration',
  tags: ['maps', 'cartography', 'exploration', 'navigation', 'item frames', 'banners'],
  title: 'Minecraft Maps & Cartography Guide: Zoom, Walls & More',
  metaDescription:
    'A complete Minecraft maps and cartography guide: crafting maps, the cartography table, zoom levels, explorer maps, item-frame map walls, and banner markers.',
  excerpt:
    "Maps are the navigation system Minecraft never bothered to explain. Here is how they actually work: the 9-paper vs locator-map split, the cartography table that zooms for an eighth of the paper, the five zoom levels up to 2,048 blocks, explorer maps from cartographers, and how to tile maps into a wall-sized world map.",
  featuredImagePrompt:
    'A blocky Minecraft filled map held in first person, showing explored green terrain, blue water, and a white player-position pointer in the center, with a cartography table and stacks of paper on a wooden surface in the background',
  heroImage: '/images/blog/minecraft/minecraft-maps-cartography-guide/map.webp',
  heroImageAlt:
    'A filled Minecraft map showing explored terrain and the white player-position pointer at its center.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-maps-cartography-guide/map.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Map',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-maps-cartography-guide/empty-map.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Map',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-maps-cartography-guide/cartography-table.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Cartography_Table',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-maps-cartography-guide/ocean-explorer-map.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Explorer_Map',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-25T00:00:00.000Z',
  lastUpdated: '2026-06-25T00:00:00.000Z',
  primaryKeyword: 'minecraft maps and cartography guide',
  secondaryKeywords: [
    'how to craft a map in minecraft',
    'minecraft cartography table uses',
    'minecraft map zoom levels',
    'minecraft locator map vs explorer map',
    'minecraft item frame map wall',
    'how to put banners on a map minecraft',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'why-maps-still-matter', label: 'Why maps still matter', level: 2 },
    { id: 'crafting-a-map-and-the-locator-catch', label: 'Crafting a map (and the locator catch)', level: 2 },
    { id: 'the-cartography-table', label: 'The cartography table', level: 2 },
    { id: 'zoom-levels-explained', label: 'Zoom levels explained', level: 2 },
    { id: 'explorer-maps-from-cartographers', label: 'Explorer maps from cartographers', level: 2 },
    { id: 'locator-vs-explorer-vs-regular-maps', label: 'Locator vs explorer vs regular maps', level: 2 },
    { id: 'item-frames-and-map-walls', label: 'Item frames and map walls', level: 2 },
    { id: 'banners-on-maps', label: 'Banners on maps', level: 2 },
    { id: 'java-vs-bedrock-map-notes', label: 'Java vs Bedrock map notes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Minecraft will hand you a sprawling, procedurally generated world and then offer you exactly zero navigation tools out of the box. The map is the fix, and it is wildly under-used because the game never explains the parts that matter — the difference between a plain map and a locator map, why the cartography table is an eight-to-one paper exploit, or how to staple a dozen maps into a single wall-sized world map. People wander back to a torch trail when a level-4 map would have shown them the whole region at a glance.

This guide untangles the entire cartography system: crafting maps, the cartography table and what each slot does, the five zoom levels and exactly how many blocks each covers, explorer maps from cartographer villagers, and the item-frame and banner tricks that turn a stack of paper into a real navigation rig. Everything is checked against the Minecraft Wiki, including the Java-versus-Bedrock split that trips up half the tutorials online.

## Why maps still matter

Even with newer tools like the locator bar, a physical map is the only thing that draws you a top-down picture of *terrain* — coastlines, biome edges, your base, the ravine you keep falling into. It is the difference between knowing a teammate's direction and knowing the actual shape of the land between you and them. Maps are cheap (paper is sugarcane), they update passively while you hold or carry them, and at high zoom one map can cover a chunk of world bigger than most players ever explore on foot. If you build, trade, or run a multiplayer base, you want maps.

## Crafting a map (and the locator catch)

Here is the single most-confused point in all of map crafting, so let's kill it first: **the plain-map-versus-locator-map split is a Bedrock thing. On Java, your map always shows your position.**

![A Minecraft empty map item — the blank map you craft from paper before filling it in by exploring.](/images/blog/minecraft/minecraft-maps-cartography-guide/empty-map.webp)

- **Java Edition:** craft an empty map from **9 paper** in a 3×3 grid. That's it — there is no separate locator map, and the white player-position pointer is always on. Java players who go hunting for a "compass + paper" recipe are chasing a Bedrock mechanic that doesn't exist for them.
- **Bedrock Edition:** you get two versions. An **Empty Map** (no position marker) is **9 paper**, or just **1 paper at a cartography table**. An **Empty Locator Map** (adds the white player pointer) is **8 paper + 1 compass**, with the compass in the center. You can also add a compass to an existing Bedrock map later to upgrade it.

Either way, the map starts blank. **Use it (right-click / use control) to activate it**, and it draws the area you are standing in. A fresh map is **zoom level 0**: one pixel per block, covering a **128×128-block** area. One catch worth knowing — the map does not center perfectly on you. The world is divided into a fixed invisible grid of 128×128 squares and the map snaps to whichever square you activated it in, so where you first use it determines the borders, not your exact footstep.

## The cartography table

The crafting grid can do everything maps need, but the **cartography table** does it cheaper and with a clean UI. You craft it from **2 paper + 4 planks** (any wood) — paper across the top, planks filling the block below.

![A Minecraft cartography table — the block used to zoom, clone, and lock maps far more cheaply than the crafting grid.](/images/blog/minecraft/minecraft-maps-cartography-guide/cartography-table.webp)

Drop a map in the top slot and an ingredient in the bottom slot to do one of four things:

- **Zoom out:** map + **1 paper** → bumps the map up one zoom level. This is the headline feature — the crafting grid needs **8 paper** to zoom one level, so the table is literally eight times cheaper per step.
- **Clone/copy:** map + **1 empty map** → a duplicate that stays synced with the original (both update as either is carried around). Perfect for handing copies to teammates.
- **Lock:** map + **1 glass pane** → a locked map. Locked maps freeze their contents — they stop updating, can't be zoomed, and their banner markers survive even if the banners are destroyed. Great for a permanent record of a build.
- **Add a marker (Bedrock):** Bedrock players can add a compass marker here too; Java handles markers via banners instead.

If you map seriously, build a cartography table. The paper savings on a single full zoom-out pay for it instantly.

## Zoom levels explained

A map has **five zoom levels, 0 through 4** (shown in-game as 0/4 up to 4/4). Each level doubles the side length, so the area quadruples each step:

| Level | Scale | Blocks per side | Area |
|---|---|---|---|
| 0/4 | 1:1 | 128 | 128 × 128 |
| 1/4 | 1:2 | 256 | 256 × 256 |
| 2/4 | 1:4 | 512 | 512 × 512 |
| 3/4 | 1:8 | 1,024 | 1,024 × 1,024 |
| 4/4 | 1:16 | **2,048** | 2,048 × 2,048 |

A maxed-out level-4 map covers a **2,048 × 2,048-block** region — roughly four million blocks of surface on one piece of paper. The trade-off is detail: at level 4 each pixel represents a 16×16 area, so individual blocks blur into color blobs. The sweet spot for most bases is level 2 or 3 — big enough to see the whole neighborhood, sharp enough to navigate. You zoom one level at a time, and you can't zoom back *in*; once a map is at level 4 it stays there, so don't over-zoom a map you wanted detailed.

## Explorer maps from cartographers

You don't have to make every map yourself. **Cartographer villagers** sell pre-marked **explorer maps** that point you straight at two of the game's best structures:

![An ocean explorer map — bought from a journeyman cartographer, it marks the nearest ocean monument.](/images/blog/minecraft/minecraft-maps-cartography-guide/ocean-explorer-map.webp)

- **Ocean Explorer Map** — sold by a **Journeyman** cartographer (tier 3) for roughly **13 emeralds + 1 compass**. It marks the nearest **ocean monument** (the home of guardians, prismarine, and sponges).
- **Woodland Explorer Map** — sold by a **Master** cartographer (tier 5) for roughly **14 emeralds + 1 compass**. It marks the nearest **woodland mansion**, which is otherwise a brutal find.

An explorer map starts mostly blank with a marker on the target structure, and it fills in terrain as you travel toward it — even passively from your inventory. Note that **buried treasure maps are NOT a cartographer trade**: those come from shipwreck and ocean-ruin chests, not villagers. If you're chasing the structures these maps point to, our [ocean monument guide](/blog/minecraft/minecraft-ocean-monument-guide) and [woodland mansion guide](/blog/minecraft/minecraft-woodland-mansion-guide) cover what's waiting at the X.

## Locator vs explorer vs regular maps

The terminology gets muddy, so here's the clean version:

- **Regular map** — the one you craft. On Java it always tracks you; on Bedrock the plain version has no marker.
- **Locator map** — a **Bedrock-only** map with the white player pointer added (8 paper + compass). On Java this is just what a normal map already is.
- **Explorer map** — a special pre-marked map from a cartographer (or treasure), starting blank with a structure marker and revealing terrain as you approach.

So a Java player only ever deals with "regular" and "explorer." A Bedrock player juggles all three. If a tutorial tells a Java player to craft a locator map, the tutorial is wrong for their edition.

## Item frames and map walls

This is where maps go from handy to genuinely cool. Put a map **in an item frame** and it renders **full-size** on the wall, and it shows a **green marker** at the item frame's own location (in Bedrock the framed map must be a locator map for this). Your usual white pointer doesn't show on a framed map — only that green "you-are-here" dot when you're inside the mapped area.

Tile several frames together and you get a **map wall**: a seamless, room-sized view of your world. The trick is alignment. Because maps snap to a fixed world grid by zoom level, adjacent maps only line up if they are the **same zoom level** and were created from grid-aligned coordinates — for zoom-level-1 maps, that means starting points at multiples of 256 blocks. Get it right and a 2×2 grid of level-2 maps shows a clean **1,024 × 1,024-block** region; get it wrong and your maps overlap or leave gaps. Unexplored chunks render transparent, so the picture fills in as you explore. Glow item frames work too if you want the wall lit, and Java's invisible-frame option (use a glow ink sac trick) makes the maps look like they're floating seamlessly.

## Banners on maps

One of the most slept-on navigation tools — and it's **Java-only**. Place a banner in the world, then **use a held map on it** to stamp a **colored marker** onto that map at the banner's exact location. The marker matches the banner's base color, and if you **name the banner** (in an anvil) before placing it, that name shows up under the marker on the map. Use the banner again to remove the marker.

This turns a map into a labeled atlas: a red banner at "Mob Farm," a blue one at "Trading Hall," a black one at "Nether Portal." Lock the map at a cartography table and the markers stay even if the banners get destroyed. Bedrock players don't get this feature, so the workaround there is building recognizable wool landmarks or using the compass-marker option at the cartography table. For more on banners themselves — patterns, looms, and shields — they tie into the [villager trading guide](/blog/minecraft/minecraft-villager-trading-guide) since cartographers sell banner patterns.

## Java vs Bedrock map notes

The two editions diverge more on maps than almost any other system, so know your platform:

- **Position marker:** Java maps always show it; Bedrock splits into plain (no marker) and locator (8 paper + compass) maps.
- **Cartography table:** both editions zoom (1 paper), clone (1 empty map), and lock (1 glass pane). Bedrock adds a compass-marker function; Java uses banners for markers instead.
- **Banner markers:** Java only. Bedrock can't stamp banners onto maps.
- **Framed map markers:** both show a green location marker, but Bedrock requires the framed map to be a locator map.
- **Zoom levels and block coverage** (0–4, up to 2,048 blocks per side) are identical across editions.

## Quick Action Checklist

- [ ] Craft an empty map: 9 paper (Java always tracks you); on Bedrock add a compass for a locator map
- [ ] Use the map to activate it — it draws the 128×128 grid square you're standing in
- [ ] Build a cartography table (2 paper + 4 planks) — it zooms for 1 paper vs the grid's 8
- [ ] Zoom up to level 4 (2,048 blocks per side) for region maps; stop at level 2–3 for detail
- [ ] Clone maps (map + empty map) to hand synced copies to teammates
- [ ] Lock maps (map + glass pane) to freeze a permanent record
- [ ] Buy explorer maps from cartographers — ocean (journeyman, ~13 emeralds) and woodland (master, ~14 emeralds)
- [ ] Frame maps for a green location marker; tile same-zoom, grid-aligned maps into a wall
- [ ] On Java, use a held map on a named banner to stamp a labeled colored marker
- [ ] Remember buried-treasure maps come from shipwrecks/ocean ruins, not cartographers`,
  faq: [
    {
      question: 'How do you make a map in Minecraft?',
      answer:
        'In Java Edition, craft an empty map from 9 paper in a 3x3 grid; it always shows the white player-position pointer. In Bedrock Edition, 9 paper makes a plain Empty Map with no marker, while 8 paper plus 1 compass makes an Empty Locator Map that does show your position. Bedrock can also craft an empty map from a single paper at a cartography table. Use (right-click) the map to activate it, and it draws the 128x128-block area you are standing in at zoom level 0.',
    },
    {
      question: 'What does the cartography table do in Minecraft?',
      answer:
        'A cartography table (crafted from 2 paper and 4 planks) zooms, clones, and locks maps. Map plus 1 paper zooms out one level; map plus 1 empty map clones a synced copy; map plus 1 glass pane locks the map so it stops updating. It is far cheaper than the crafting grid for zooming — the grid needs 8 paper to zoom one level, the table needs just 1. On Bedrock it can also add a compass position marker to a map.',
    },
    {
      question: 'What are the map zoom levels in Minecraft?',
      answer:
        'Maps have five zoom levels, 0 through 4. Level 0 covers 128x128 blocks at one pixel per block, and each level doubles the side length: 256 (level 1), 512 (level 2), 1,024 (level 3), and 2,048 (level 4). A maxed level-4 map covers a 2,048 x 2,048-block region — about four million blocks — but each pixel then represents a 16x16 area, so detail blurs. You can only zoom out, never back in.',
    },
    {
      question: 'How do you get explorer maps in Minecraft?',
      answer:
        'Explorer maps come from cartographer villagers. A journeyman cartographer (tier 3) sells an Ocean Explorer Map for roughly 13 emeralds and a compass, marking the nearest ocean monument; a master cartographer (tier 5) sells a Woodland Explorer Map for roughly 14 emeralds and a compass, marking the nearest woodland mansion. The map reveals terrain as you travel toward the marker. Buried treasure maps are different — they come from shipwreck and ocean-ruin chests, not from cartographers.',
    },
    {
      question: 'How do you make a map wall in Minecraft?',
      answer:
        'Place maps into item frames on a wall; each framed map renders full-size and shows a green marker at the frame location. To tile them seamlessly, all maps must be the same zoom level and created from grid-aligned starting coordinates (multiples of 256 blocks for zoom level 1). A 2x2 grid of zoom-level-2 maps displays a clean 1,024 x 1,024-block region. Unexplored chunks appear transparent and fill in as you explore. Glow or invisible item frames can make the wall look seamless.',
    },
    {
      question: 'How do you put banners on a map in Minecraft?',
      answer:
        'This is a Java Edition feature. Place a banner in the world, then use a held map on the banner to stamp a colored marker onto that map at the banner location — the marker matches the banner base color. Name the banner in an anvil before placing it and the name appears under the marker. Use the banner again to remove the marker, and lock the map at a cartography table to keep markers even if the banners are destroyed. Bedrock does not support banner markers.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/minecraft-ocean-monument-guide', anchor: 'Ocean monument guide' },
    { href: '/blog/minecraft/minecraft-woodland-mansion-guide', anchor: 'Woodland mansion guide' },
    { href: '/blog/minecraft/minecraft-villager-trading-guide', anchor: 'Villager trading guide' },
    { href: '/blog/minecraft/minecraft-survival-guide-beginners', anchor: 'Minecraft survival guide for beginners' },
    { href: '/blog/minecraft/minecraft-biomes-guide', anchor: 'Minecraft biomes guide' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Map',
      title: 'Minecraft Wiki — maps, crafting, zoom levels, and markers',
    },
    {
      url: 'https://minecraft.wiki/w/Cartography_Table',
      title: 'Minecraft Wiki — cartography table uses',
    },
    {
      url: 'https://minecraft.wiki/w/Explorer_Map',
      title: 'Minecraft Wiki — ocean and woodland explorer maps',
    },
  ],
  tldr:
    'A Minecraft map is crafted from 9 paper. On Java it always shows your position; on Bedrock you need a locator map (8 paper + compass) for the marker. A level-0 map covers 128x128 blocks, and the five zoom levels (0–4) double the side length up to 2,048 blocks at level 4. The cartography table zooms (1 paper), clones (empty map), and locks (glass pane) maps, and is eight times cheaper than the crafting grid for zooming. Cartographers sell ocean (journeyman) and woodland (master) explorer maps. Framed maps show a green location marker and tile into seamless map walls when same-zoom and grid-aligned, and on Java you can stamp named, colored banner markers onto a map.',
  itemList: {
    name: 'Minecraft Cartography Table Functions',
    items: [
      { name: 'Zoom out (map + 1 paper)', description: 'Bumps the map up one zoom level — 8x cheaper than the crafting grid.' },
      { name: 'Clone (map + 1 empty map)', description: 'Creates a synced duplicate; both copies update as either is carried.' },
      { name: 'Lock (map + 1 glass pane)', description: 'Freezes the map so it stops updating and keeps its banner markers.' },
      { name: 'Add marker (Bedrock, + compass)', description: 'Bedrock-only — adds a position marker to a map.' },
    ],
  },
};
