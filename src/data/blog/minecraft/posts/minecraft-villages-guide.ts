import type { BlogPost } from '../../blogTypes';

export const minecraftVillagesGuide: BlogPost = {
  slug: 'minecraft-villages-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-survival',
  tags: ['villages', 'villagers', 'iron golem', 'raids', 'zombie villager', 'survival'],
  title: 'Minecraft Villages Guide: Types, Golems & Defense',
  metaDescription:
    'A complete Minecraft villages guide: village types by biome, every villager profession and workstation, iron golems, raids, and curing zombie villagers.',
  excerpt:
    "A village is the single best piece of free real estate in the game — beds, food, an iron golem bodyguard, and a 13-profession economy you didn't have to build. Here is how villages actually work: the biome types, every job-site block, golem spawning, raid defense, and the zombie-villager cure that quietly breaks trade prices.",
  featuredImagePrompt:
    'A blocky Minecraft plains village at golden hour — oak houses with hay-bale roofs around a central well, villagers in brown robes wandering dirt paths, a tall iron golem standing guard near the meeting bell',
  heroImage: '/images/blog/minecraft/minecraft-villages-guide/plains-village.webp',
  heroImageAlt:
    'A Minecraft plains village with oak houses around a central well — the default village type and the easiest free base in the game.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-villages-guide/plains-village.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Village',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-villages-guide/desert-village.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Village',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-villages-guide/iron-golem.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Iron_Golem',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-villages-guide/raid.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Raid',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-villages-guide/zombie-villager.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Zombie_Villager',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-25T00:00:00.000Z',
  lastUpdated: '2026-06-25T00:00:00.000Z',
  primaryKeyword: 'minecraft villages guide',
  secondaryKeywords: [
    'minecraft village types',
    'villager professions and workstations',
    'how do iron golems spawn',
    'how to defend a village minecraft',
    'how to cure a zombie villager',
    'minecraft village biomes',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-a-village-is-the-best-base-in-the-game', label: 'Why a village is the best base in the game', level: 2 },
    { id: 'village-types-by-biome', label: 'Village types by biome', level: 2 },
    { id: 'villager-professions-and-workstations', label: 'Villager professions and workstations', level: 2 },
    { id: 'iron-golems-the-free-bodyguard', label: 'Iron golems, the free bodyguard', level: 2 },
    { id: 'raids-and-the-bad-omen-trigger', label: 'Raids and the Bad Omen trigger', level: 2 },
    { id: 'defending-a-village', label: 'Defending a village', level: 2 },
    { id: 'curing-zombie-villagers', label: 'Curing zombie villagers', level: 2 },
    { id: 'gossip-and-why-prices-move', label: 'Gossip and why prices move', level: 2 },
    { id: 'building-or-claiming-your-own-village', label: 'Building or claiming your own village', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Stumbling onto a village in your first few in-game days is the single biggest swing of luck Minecraft hands out. You get beds you did not have to find wool for, a farm that is already growing, an iron golem who will body anything that walks in, and a 13-profession economy bolted onto a town someone else built. The catch is that a village you do not understand is a village you will accidentally wreck — leave a hole in a wall, anger a golem, or let a zombie convert half the population overnight.

This guide is the version that treats a village like the resource it actually is. We will cover the village types by biome, every profession and the exact job-site block that creates it, how iron golems spawn (the Java and Bedrock rules are genuinely different), how raids get triggered and survived, how to defend the place, and the zombie-villager cure that quietly turns trading into the most broken legit economy in the game. Everything below is checked against the Minecraft Wiki, because village mechanics are a swamp of outdated advice.

## Why a village is the best base in the game

A village hands you, for free, the things that normally eat your first week: a bed to skip the night and set spawn, a food source, and protection. Move in, fence the gaps, and you have a defensible home base on day one. The villagers themselves are the long game — a librarian alone can sell you Mending and Efficiency books, which is reason enough to protect the place like it owes you money.

The mental model that matters: a village is a cluster of **claimed beds, job-site blocks, and bells**. Villagers link to those points of interest, and the game treats the area around them as a village for spawning golems, triggering raids, and running sieges. Everything else in this guide flows from that.

## Village types by biome

Villages generate naturally in six biomes, and the architecture changes to match: **plains** (oak, the default), **desert** (sandstone), **savanna** (acacia), **taiga** (spruce), **snowy plains** (spruce with snow and ice), and **meadow** (oak, plains-style). What style you get is decided by the biome at the village's center.

![A Minecraft desert village built from sandstone and cut sandstone, with flat-roofed houses and cactus around the edges.](/images/blog/minecraft/minecraft-villages-guide/desert-village.webp)

The villagers themselves also dress for the biome. There are **seven villager appearance types** — plains, desert, savanna, taiga, snowy, swamp, and jungle — and a villager's outfit is set by the biome it was *born* in, not where it currently stands. (Swamp and jungle do not spawn villages, but you will see those skins if you breed villagers there.) That matters for one practical reason: if you cart a villager off to a new biome and breed it, the baby inherits the *breeding* biome's outfit, not the parent's. Purely cosmetic, but it trips people up.

A few quick notes by type:
- **Plains and meadow** villages are the roomiest and easiest to fortify.
- **Desert** villages have no wooden doors to break, which actually changes your zombie defense math (more on that below).
- **Savanna and taiga** villages tend to sprawl across hills, so they are harder to wall but great for spread-out builds.
- **Snowy** villages come with ice and igloo-adjacent vibes and the same spruce build set as taiga.

## Villager professions and workstations

A villager picks up a profession by claiming an unworked **job-site block**. Place the block within range of an unemployed adult, green particles pop over both, and it takes the job. There are **13 employable professions**, each tied to exactly one block:

- **Armorer** — Blast Furnace
- **Butcher** — Smoker
- **Cartographer** — Cartography Table
- **Cleric** — Brewing Stand
- **Farmer** — Composter
- **Fisherman** — Barrel
- **Fletcher** — Fletching Table
- **Leatherworker** — Cauldron
- **Librarian** — Lectern
- **Mason** (Stone Mason) — Stonecutter
- **Shepherd** — Loom
- **Toolsmith** — Smithing Table
- **Weaponsmith** — Grindstone

Two non-jobs round out the list. A **nitwit** wears a green-topped robe and is permanently useless — it cannot take a profession or trade, ever, so it is purely breeding stock or a bed-filler. An **unemployed** villager wears plain biome clothing and *can* claim a job site. If a villager has never traded, breaking its workstation lets it switch jobs freely; once it has locked in a trade, that profession is permanent unless you cure it from a zombie. Our full [villager trading guide](/blog/minecraft/minecraft-villager-trading-guide) covers how to roll for the trades you actually want.

## Iron golems, the free bodyguard

The iron golem is the reason villages feel safe. It is a big neutral mob that patrols the village and beats down hostile mobs and raiders, and a healthy village spawns one (or several) on its own. The spawning rules are where people get tripped up, because **Java and Bedrock work differently**.

![A Minecraft iron golem — the tall iron-and-vine guardian that villages spawn to defend themselves.](/images/blog/minecraft/minecraft-villages-guide/iron-golem.webp)

On **Java**, golems are summoned by the villagers themselves. When at least **five villagers gossip together** (or **three villagers panic** during an attack), a villager can attempt a summon — provided it has slept in the last 20 minutes, has not seen a golem in the last 30 seconds, and has worked. The game then makes up to 10 attempts to place the golem in a 17×13×17 box around that villager.

On **Bedrock**, it is a flat threshold: the village needs at least **20 beds and 10 villagers**, with the population linked to beds and working, and the game rolls a spawn around the village center roughly every 35 seconds.

If you do not want to wait, **build one yourself**: stack **4 iron blocks in a T-shape** and place a **carved pumpkin or jack o'lantern** on top last. It spawns instantly and is the standard move for any base that needs a guard. Just know a player-built golem will turn hostile if you hit it, same as a natural one — golems track your reputation, so do not farm-punch them.

## Raids and the Bad Omen trigger

Raids are the village's boss event, and the trigger changed in 1.21, so scrub the old advice from your memory. Here is the current chain:

1. Kill an **illager raid captain** (the one carrying the ominous banner) out in the world. In current versions it drops an **Ominous Bottle** instead of zapping you directly.
2. **Drink the Ominous Bottle** to get the **Bad Omen** effect.
3. Walk into a village while you have Bad Omen. It converts to **Raid Omen**, and about **30 seconds later the raid begins**.

![A Minecraft raid in progress — pillagers and a ravager assaulting a village while the Bad Omen meter counts down.](/images/blog/minecraft/minecraft-villages-guide/raid.webp)

A raid throws **waves** of illagers at the village: pillagers, vindicators, witches, evokers, and the wrecking-ball ravagers. Wave count scales with difficulty — **3 on Easy, 5 on Normal, 7 on Hard** — and a higher omen level tacks on an extra wave plus nastier enchanted gear. Clear every wave and you earn **Hero of the Village**, a 40-minute buff that slashes trade prices (up to ~55% off at the max level on Java). Triggering a raid on purpose, surviving it, and then shopping is a legitimate discount engine. For the full breakdown of waves, outposts, and farming raids, see our [raids and pillagers guide](/blog/minecraft/minecraft-raids-pillagers-guide).

## Defending a village

Left alone, a village gets ground down by two threats: **zombie sieges** and **raids**. Defense is mostly about denying spawns and sealing gaps.

- **Light everything.** Hostile mobs spawn in the dark, and a single unlit alley behind a house is enough to lose villagers overnight. Torch the interiors, the paths, and the rooftops.
- **Wall the perimeter and gate it.** Fences, walls, or a moat around the village stop mobs wandering in. Leave villagers a way to path but raiders no easy lane.
- **Mind your doors.** On **Hard difficulty, zombies can break down wooden doors** — a real threat in plains and taiga villages. Swap exposed wooden doors for iron doors (with a button or plate villagers can't use, if you want them contained) or use the fact that **desert villages have no wooden doors** to begin with.
- **Keep an iron golem on station.** One golem handles routine zombies; for raids you want either several golems or to fight alongside them, because ravagers chew golems up fast.
- **Zombie sieges** are a Java thing: a village with 20+ beds has about a 10% chance at midnight to spawn zombies *inside* the walls regardless of lighting. You cannot fully prevent it, so lighting plus golems plus your own sword is the answer.

The nightmare scenario is a zombie killing a villager: on Normal there is a 50% chance the dead villager **turns into a zombie villager**, and on Hard it is **100%**. That is how a thriving village empties out in two nights. Which leads directly to the most valuable trick in the whole game.

## Curing zombie villagers

A zombie villager is not a loss — it is an opportunity, and curing one is the best price hack Minecraft has. The cure is a two-step combo:

1. **Hit the zombie villager with a Splash Potion of Weakness.**
2. **Feed it a regular Golden Apple** (the cheap one — 8 gold ingots + apple; you do *not* need the enchanted version).

You will see red swirly particles and shaking. The conversion takes a random **3 to 5 minutes** (3,600–6,000 ticks). Trap the zombie villager somewhere safe and sunlight-proof while it converts — it is still a zombie that burns in daylight and will path toward you. Iron bars or a one-deep pit work great.

![A Minecraft zombie villager — cure it with a Splash Potion of Weakness and a golden apple for a permanent trade discount.](/images/blog/minecraft/minecraft-villages-guide/zombie-villager.webp)

When it cures, two things happen. First, a villager that already had a profession and traded **gets its old job and trades back** — and baby zombie villagers cure into baby villagers, so nothing is wasted. Second, and this is the payoff: the cured villager gives **you, personally, a massive permanent discount** on its trades, and a smaller discount bleeds to nearby villagers through gossip. Cure a librarian and that Mending book can drop to a single emerald. Curing the *same* villager again does not stack, but curing several different ones in a town stacks discounts across the whole place. This is why serious players deliberately convert and re-cure villagers.

## Gossip and why prices move

Villager prices are not random; they run on a hidden **gossip/reputation** system the targeted villager remembers about you.

- **Curing a zombie villager** is the big one — major positive reputation that doesn't decay, which is why it slashes prices.
- **Trading** nudges reputation up a little each time, so prices drift down slightly the more you do business.
- **Attacking or killing villagers or golems** tanks your reputation, and prices climb. On Bedrock, negative reputation can only cancel out positive — it won't push prices *above* baseline — but on Java it absolutely can.

The practical takeaway: be nice to your town. Don't punch golems for fun, don't bow-snipe villagers by accident, and cure every zombie villager you can. Reputation is per-villager, so a town you've cured is a town that loves you and prices accordingly.

## Building or claiming your own village

You do not have to find a village — you can manufacture one anywhere by recreating the parts villagers care about: **beds, job-site blocks, and a bell** as the meeting point.

The minimum recipe for your own working village:
1. **Bring villagers.** Lead two with a boat or minecart, or cure zombie villagers on site.
2. **Place beds.** Villagers claim a bed each at night; beds are also what the game counts for population caps and sieges. Stack up to **20+ beds** if you want the Bedrock iron-golem threshold and a breeding buffer.
3. **Drop job-site blocks** for the professions you want — a lectern for a librarian, a cartography table for a cartographer, and so on.
4. **Add a bell** as the central meeting point; villagers gather there and it helps define the village center.
5. **Set up a breeder.** Villagers breed when they have enough food (bread, carrots, potatoes, beetroots) and a free bed each. A simple farmer-fed breeding hall scales the town fast — see the [best Minecraft farms to build first](/blog/minecraft/best-minecraft-farms) for the food side, and the [survival guide for beginners](/blog/minecraft/minecraft-survival-guide-beginners) if you are still setting up a first base.

Build it tight, light it, wall it, and let a golem patrol it, and you have a self-defending trading hub you engineered on purpose.

## Quick Action Checklist

- [ ] Identify the village type by biome — plains/meadow (oak), desert (sandstone), savanna (acacia), taiga/snowy (spruce)
- [ ] Light every interior, path, and rooftop to kill spawns
- [ ] Wall and gate the perimeter; swap exposed wooden doors for iron on Hard difficulty
- [ ] Assign professions by placing the right job-site block near an unemployed villager
- [ ] Keep an iron golem on station — build one with 4 iron blocks (T-shape) + a carved pumpkin
- [ ] Stockpile Splash Potions of Weakness + regular golden apples to cure zombie villagers
- [ ] Cure zombie villagers for permanent trade discounts (3–5 min conversion, sunlight-proof the zombie)
- [ ] Never punch golems or hit villagers — reputation drives your prices
- [ ] Trigger a raid with an Ominous Bottle, win it, and shop with Hero of the Village for up to ~55% off
- [ ] To build your own: beds + job blocks + a bell + a food source, then breed up`,
  faq: [
    {
      question: 'What biomes have villages in Minecraft?',
      answer:
        'Villages generate naturally in six biomes, each with its own architecture: plains (oak), meadow (oak, plains-style), desert (sandstone), savanna (acacia), taiga (spruce), and snowy plains (spruce with snow and ice). The build style is set by the biome at the village center. Villagers also have seven appearance types — plains, desert, savanna, taiga, snowy, swamp, and jungle — though swamp and jungle do not spawn their own villages.',
    },
    {
      question: 'What are all the villager professions and their workstations?',
      answer:
        'There are 13 employable professions, each assigned by one job-site block: Armorer (Blast Furnace), Butcher (Smoker), Cartographer (Cartography Table), Cleric (Brewing Stand), Farmer (Composter), Fisherman (Barrel), Fletcher (Fletching Table), Leatherworker (Cauldron), Librarian (Lectern), Mason/Stone Mason (Stonecutter), Shepherd (Loom), Toolsmith (Smithing Table), and Weaponsmith (Grindstone). Nitwit and unemployed are separate states — a nitwit can never take a job, and an unemployed villager can claim any open workstation.',
    },
    {
      question: 'How do iron golems spawn in a village?',
      answer:
        'On Java Edition, villagers summon a golem when at least five villagers gossip together (or three panic during an attack), provided they have slept recently and worked; the game then tries up to 10 placements in a 17x13x17 box. On Bedrock, a village needs at least 20 beds and 10 villagers linked to beds and working, and it rolls a spawn around the village center roughly every 35 seconds. You can also build one anytime with 4 iron blocks in a T-shape and a carved pumpkin or jack o\'lantern placed on top last.',
    },
    {
      question: 'How do you cure a zombie villager?',
      answer:
        'Throw a Splash Potion of Weakness on the zombie villager, then feed it a regular Golden Apple (the enchanted version is not required). It shakes with red particles and converts in a random 3 to 5 minutes — keep it out of sunlight and trapped so it does not burn or attack. A cured villager that previously traded keeps its profession and trades, baby zombie villagers cure into babies, and curing grants you a large permanent trade discount through the gossip system.',
    },
    {
      question: 'How do you trigger and survive a raid in Minecraft?',
      answer:
        'Kill an illager raid captain (the one with the ominous banner) to get an Ominous Bottle, drink it for the Bad Omen effect, then enter a village — Bad Omen becomes Raid Omen and a raid starts about 30 seconds later. Raids run 3 waves on Easy, 5 on Normal, and 7 on Hard, sending pillagers, vindicators, witches, evokers, and ravagers. Light and wall the village, keep iron golems on station, and fight alongside them. Clearing every wave grants Hero of the Village for cheap trades.',
    },
    {
      question: 'How do you defend a village from zombies?',
      answer:
        'Light every interior, path, and rooftop to stop mob spawns, wall and gate the perimeter, and keep at least one iron golem patrolling. On Hard difficulty zombies can break wooden doors, so use iron doors or rely on desert villages that have none. Zombie sieges (Java) can still spawn zombies inside a 20+ bed village regardless of lighting, so back up your defenses with your own sword. If a zombie kills a villager it can convert it (50% on Normal, 100% on Hard), so respond fast.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/minecraft-villager-trading-guide', anchor: 'Minecraft villager trading guide' },
    { href: '/blog/minecraft/minecraft-raids-pillagers-guide', anchor: 'Raids and pillagers guide' },
    { href: '/blog/minecraft/minecraft-survival-guide-beginners', anchor: 'Minecraft survival guide for beginners' },
    { href: '/blog/minecraft/best-minecraft-farms', anchor: 'Best Minecraft farms to build first' },
    { href: '/blog/minecraft/minecraft-biomes-guide', anchor: 'Minecraft biomes guide' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Village',
      title: 'Minecraft Wiki — village types, generation, and sieges',
    },
    {
      url: 'https://minecraft.wiki/w/Villager',
      title: 'Minecraft Wiki — professions, workstations, and gossip',
    },
    {
      url: 'https://minecraft.wiki/w/Iron_Golem',
      title: 'Minecraft Wiki — iron golem spawning and building',
    },
    {
      url: 'https://minecraft.wiki/w/Zombie_Villager',
      title: 'Minecraft Wiki — curing zombie villagers',
    },
    {
      url: 'https://minecraft.wiki/w/Raid',
      title: 'Minecraft Wiki — raids, waves, and Bad Omen',
    },
  ],
  tldr:
    'A village is a cluster of claimed beds, job-site blocks, and bells. It generates in six biomes (plains, meadow, desert, savanna, taiga, snowy plains) with matching architecture. Villagers take one of 13 professions by claiming a workstation (e.g. Librarian/Lectern, Cleric/Brewing Stand). Iron golems spawn from villager gossip on Java, or from a 20-bed/10-villager threshold on Bedrock — or build one with 4 iron blocks plus a carved pumpkin. Raids start when you drink an Ominous Bottle for Bad Omen and enter a village (3/5/7 waves by difficulty). Cure zombie villagers with a Splash Potion of Weakness plus a golden apple for a permanent trade discount, and defend the town with lighting, walls, iron doors, and golems.',
  itemList: {
    name: 'Minecraft Villager Professions & Workstations',
    items: [
      { name: 'Librarian — Lectern', description: 'Sells enchanted books including Mending and Efficiency; the priority profession.' },
      { name: 'Cleric — Brewing Stand', description: 'Trades redstone, glowstone, lapis, ender pearls, and bottles o\' enchanting.' },
      { name: 'Farmer — Composter', description: 'Buys crops and sells bread, pumpkin pie, and golden carrots; feeds breeders.' },
      { name: 'Armorer — Blast Furnace', description: 'Sells diamond armor and chainmail; key early-game gear source.' },
      { name: 'Toolsmith — Smithing Table', description: 'Sells enchanted diamond tools and bells.' },
      { name: 'Cartographer — Cartography Table', description: 'Sells ocean and woodland explorer maps plus banner patterns.' },
      { name: 'Fletcher — Fletching Table', description: 'Buys sticks, sells arrows, bows, and crossbows cheaply.' },
      { name: 'Mason — Stonecutter', description: 'Sells polished stone, terracotta, quartz, and glazed blocks for building.' },
    ],
  },
};
