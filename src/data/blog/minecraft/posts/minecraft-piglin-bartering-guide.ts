import type { BlogPost } from '../../blogTypes';

export const minecraftPiglinBarteringGuide: BlogPost = {
  slug: 'minecraft-piglin-bartering-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-nether',
  tags: ['piglin', 'bartering', 'nether', 'gold', 'ender pearls'],
  title: 'Minecraft Piglin Bartering Guide: Best Trades & Odds',
  metaDescription:
    'Minecraft piglin bartering explained: the full Java loot table with real percentages, how to barter gold safely, gold armor rules, zombification, and what to farm.',
  excerpt:
    "Trade one gold ingot to a piglin and you might get an ender pearl, a stack of obsidian, or eleven iron nuggets. The catch is the loot table is brutal RNG, and most of it is junk you already have. Here are the real odds and how to barter without getting your face caved in.",
  featuredImagePrompt:
    'A Minecraft piglin in the crimson forest examining a gold ingot held up to its face, with scattered bartered items like ender pearls and obsidian on the netherrack ground nearby',
  heroImage: '/images/blog/minecraft/minecraft-piglin-bartering-guide/piglin-render.webp',
  heroImageAlt:
    'A Minecraft piglin render — the gold-obsessed Nether mob that drops random loot when you trade it a gold ingot.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-piglin-bartering-guide/piglin-render.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Piglin',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-piglin-bartering-guide/piglin-admiring-gold.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Piglin',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-piglin-bartering-guide/piglin-bartering.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Piglin',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-piglin-bartering-guide/piglin-brute.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Piglin_Brute',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-28T00:00:00.000Z',
  lastUpdated: '2026-06-28T00:00:00.000Z',
  primaryKeyword: 'minecraft piglin bartering',
  secondaryKeywords: [
    'piglin bartering loot table',
    'piglin trade chances minecraft',
    'how to barter with piglins',
    'piglin gold armor',
    'best piglin barter items',
    'piglin bartering ender pearls',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-bartering-actually-is', label: 'What bartering actually is', level: 2 },
    { id: 'how-to-barter-without-getting-killed', label: 'How to barter without getting killed', level: 2 },
    { id: 'the-full-bartering-loot-table', label: 'The full bartering loot table', level: 2 },
    { id: 'the-items-worth-bartering-for', label: 'The items worth bartering for', level: 2 },
    { id: 'the-items-that-are-basically-junk', label: 'The items that are basically junk', level: 2 },
    { id: 'what-makes-piglins-angry', label: 'What makes piglins angry', level: 2 },
    { id: 'piglins-vs-piglin-brutes', label: 'Piglins vs piglin brutes', level: 2 },
    { id: 'zombification-the-15-second-clock', label: 'Zombification: the 15-second clock', level: 2 },
    { id: 'building-a-bartering-setup', label: 'Building a bartering setup', level: 2 },
    { id: 'java-vs-bedrock-differences', label: 'Java vs Bedrock differences', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Throw a gold ingot at a piglin and one of two things happens: it hands you back an ender pearl that just saved you a stronghold expedition, or it hands you eleven iron nuggets like it's mocking you. Bartering is the only renewable source of ender pearls and crying obsidian in the game, which makes it genuinely important — but the loot table is a slot machine, and the house wins more than the YouTube clips suggest. The single most quoted number gamers get wrong: ender pearls are only about a **4.26% chance per barter** in Java, and you get 2-4 at a time. Plan around that, not around the highlight reel.

This guide is built off the actual Java Edition bartering loot table, verified against the Minecraft Wiki, with the Bedrock differences flagged where they matter. No vibes, no "I think it's around 10%." Real weights, real quantities, and a clear answer to the only question that matters: is it worth your gold?

## What bartering actually is

Bartering is the mechanic where an **adult piglin** takes a gold ingot from you and, after examining it, drops a random item in return. It is not a fixed-price trade like villager trading — you give one gold ingot and roll the loot table for whatever comes out. You cannot pick the item; the piglin picks it for you.

A few hard rules up front:

- Only **adult** piglins barter. Baby piglins will grab the ingot, examine it, and then run off without giving you anything — a pure scam.
- The piglin holds and examines the ingot for **about 6 seconds in Java** (8 seconds in Bedrock) before dropping the reward.
- You hand over gold either by **dropping an ingot near the piglin** or by **using (right-click / use) a gold ingot while looking at it.**

![A Minecraft piglin admiring a gold ingot — the examination animation that plays for about 6 seconds in Java before it drops a bartered item.](/images/blog/minecraft/minecraft-piglin-bartering-guide/piglin-admiring-gold.webp)

Piglins spawn in the **nether wastes** and **crimson forest** biomes, plus inside **bastion remnants**, which are also covered in the [nether fortress and bastion guide](/blog/minecraft/minecraft-nether-fortress-bastion-guide). If you want a steady supply to barter with, those biomes are where you set up shop.

## How to barter without getting killed

The cardinal rule of bartering: **wear at least one piece of gold armor.** Adult piglins are neutral toward a player wearing any single piece of golden armor — boots, leggings, chestplate, or helmet, any one will do. Take all of it off and nearby piglins turn hostile and swarm you.

So the standard bartering loadout is simple: enchant a pair of **golden boots** (gold takes enchantments easily and is the cheapest slot to dedicate), wear them, and keep your real armor on the other three slots. One gold boot is your safe-conduct pass through a piglin crowd.

Two more things that will get you killed if you ignore them:

- **Do not break gold-related blocks near piglins.** More on the full anger list below — but mining a single block of gold ore in front of a group will turn every piglin in sight hostile, gold boots or not.
- **Do not open chests near them.** Same deal. Loot the bastion's chests *after* you've cleared the piglins, or do it out of their line of sight.

## The full bartering loot table

Here is the verified **Java Edition** bartering table — every possible result, its real drop chance, and the quantity you get. The chances are expressed as weight out of 459 total weight; the percentages are rounded.

| Item | Chance (Java) | Quantity per barter |
| --- | --- | --- |
| Blackstone | ~13.6% | 8-16 |
| Gravel | ~13.6% | 8-16 |
| Spectral Arrow (Java only) | ~12.8% | 6-12 |
| Crying Obsidian / Fire Charge | ~8.5% each | 1-3 |
| Obsidian | ~8.5% | 1 |
| Nether Brick | ~8.5% | 2-8 |
| Soul Sand | ~6.2% | 2-8 |
| Nether Quartz | ~5.3% | 5-12 |
| Iron Nugget | ~4.9% | 10-36 |
| Ender Pearl | ~4.3% | 2-4 |
| String | ~4.3% | 3-9 |
| Leather | ~4.3% | 2-4 |
| Splash Potion of Fire Resistance | ~2.1% | 1 |
| Potion of Fire Resistance | ~2.1% | 1 |
| Water Bottle | ~2.1% | 1 |
| Iron Boots w/ Soul Speed | ~1.7% | 1 |
| Enchanted Book (Soul Speed) | ~1.1% | 1 |

A couple of things to internalize from that table. Over **half** your barters are blackstone, gravel, spectral arrows, and various nether building blocks — the bulk filler. The genuinely valuable rolls (ender pearls, crying obsidian, Soul Speed gear, fire-resistance potions) are the rare slices. **Magma cream is no longer obtainable from bartering** — it was removed back in snapshot 20w28a, so any old guide listing it is out of date.

## The items worth bartering for

If you're farming piglins, these are the results you're actually praying for:

- **Ender pearls (2-4, ~4.3%).** The headliner. Bartering is the only *renewable* ender pearl source that doesn't require killing endermen, so it's the go-to method before you've built an enderman farm — and it's how speedrunners stock pearls for the [End and ender dragon fight](/blog/minecraft/how-to-beat-the-ender-dragon). Expect to spend a lot of gold per pearl on average.
- **Crying obsidian (1-3, ~8.5%).** Required to craft **respawn anchors**, the Nether's answer to a bed. If you live in the Nether at all, this is your supply line.
- **Soul Speed gear (~1.1% book, ~1.7% boots).** The Soul Speed enchantment — which only exists via bartering — makes you sprint across soul sand and soul soil instead of slogging through it. Combined with the [best enchantments](/blog/minecraft/best-minecraft-enchantments) on your boots it transforms Nether traversal.
- **Fire Resistance potions (~2.1% each for the splash and the drinkable).** Effectively free fire-immunity, which is enormous in the Nether and clutch when you've fallen near lava.
- **Obsidian (1, ~8.5%).** Handy for portals and emergency builds without hauling a water bucket to a lava lake.

The honest read: bartering is an *RNG resource pipeline*, not a shopping list. You barter in bulk and take the good rolls as they come.

## The items that are basically junk

Plenty of the table is stuff you'll watch pile up and sigh at:

- **Gravel and blackstone (8-16 each, ~13.6% apiece).** Combined, more than a quarter of all barters. Blackstone at least makes nice decorative blocks; gravel you'll mostly toss.
- **Spectral arrows (6-12, ~12.8%, Java only).** Genuinely useful for the glowing-outline effect on whatever you shoot, but rarely worth the gold.
- **Nether brick, soul sand, nether quartz, string, leather.** All things you can gather faster by hand than by feeding gold into a slot machine.
- **Iron nuggets (10-36, ~4.9%).** Ten to thirty-six nuggets is one to four iron ingots' worth — a slap in the face when an [iron farm](/blog/minecraft/minecraft-iron-farm-guide) makes iron trivial anyway.

Knowing the junk matters because it tells you the *true cost* of the good stuff: most of your gold buys filler, so you need a real gold supply to fish out the pearls and crying obsidian.

## What makes piglins angry

Gold armor only protects you from the "you're not wearing gold" aggression. Several actions anger piglins **regardless of your armor**, and these are the ones that turn a calm bartering session into a brawl:

- **Attacking any piglin or piglin brute.** Heavy, long-range aggravation — the whole nearby group comes for you.
- **Opening or breaking a container near them:** chest, trapped chest, ender chest, shulker box, barrel, or a chest minecart/boat.
- **Breaking gold-related blocks:** a block of gold, gold ore, deepslate gold ore, nether gold ore, gilded blackstone, or a block of raw gold.

That last category is the sneaky one. Gilded blackstone is *everywhere* in bastions, and mining it is a coin-flip to drop gold nuggets — but break it in front of piglins and they swarm. Either clear the area first or mine gold-bearing blocks out of their sight.

## Piglins vs piglin brutes

Don't confuse the two. A **piglin** is the neutral, barter-able mob. A **piglin brute** is a different, always-hostile guard that spawns in bastion remnants — it carries a golden axe, **ignores gold armor entirely, and cannot be bartered with or distracted by gold.** Brutes are pure combat; they exist to wreck you while you loot a bastion.

![A Minecraft piglin brute render — the axe-wielding bastion guard that's always hostile, ignores your gold armor, and cannot be bartered with.](/images/blog/minecraft/minecraft-piglin-bartering-guide/piglin-brute.webp)

The practical takeaway: in a bastion, deal with brutes as a fight (they're tanky and hit hard, so bring good armor from the [armor guide](/blog/minecraft/minecraft-armor-guide)), and treat the regular piglins as either bartering partners or threats depending on whether you're wearing gold. For the wider roster of things trying to kill you down there, the [hostile mobs guide](/blog/minecraft/minecraft-hostile-mobs-guide) has the full list.

## Zombification: the 15-second clock

Piglins are Nether mobs, and the Nether is the only place they're safe. Take a piglin into **the Overworld or the End** and it begins to convert — after **15 seconds** it transforms into a **zombified piglin**, which is hostile and cannot barter. It keeps its equipment and any items it's holding, but it's no longer useful to you.

This matters if you ever try to drag piglins through a portal for a base-side bartering hall: you have a 15-second window, and any portal-based piglin transport farm has to keep them in Nether conditions or use the portal trick to interrupt the timer. The simplest answer is just to barter **in the Nether**, where the clock never starts.

## Building a bartering setup

For casual play, you don't need a contraption — find a crimson forest, put on a gold boot, and start tossing ingots at adult piglins. But if you want bulk ender pearls and crying obsidian, the standard approach is a **piglin bartering farm**:

- A platform in the Nether (or a portal-fed system) that spawns piglins into a holding area.
- An automated dispenser dropping gold ingots to them on a timer.
- Hoppers and water streams collecting the dropped barter items into sorted chests, often using the wiring patterns from the [redstone contraptions guide](/blog/minecraft/minecraft-redstone-contraptions-guide).

![A bartering setup in the crimson forest — piglins fed gold ingots, dropping a random pile of bartered items onto the netherrack.](/images/blog/minecraft/minecraft-piglin-bartering-guide/piglin-bartering.webp)

The bottleneck is always **gold**. A serious bartering farm pairs with a gold supply — bartering near a bastion (gilded blackstone), a gold farm, or zombified-piglin gold drops. Without a gold pipeline, you'll run dry long before the loot table gives you the pearls you want.

## Java vs Bedrock differences

The mechanic is nearly identical across editions, but a few details differ:

- **Examination time:** ~6 seconds in Java, ~8 seconds in Bedrock before the item drops.
- **Spectral arrows:** Java drops **spectral** arrows; Bedrock drops regular **arrows** in that slot.
- **Spawn light level:** piglins spawn at light level 11 or below in Java, 7 or below in Bedrock — relevant if you're lighting an area to control spawns.

Beyond those, the gold-armor rule, the anger triggers, the 15-second zombification, and the overall "one ingot, random reward" loop are the same. Build your bartering plan around the Java odds above and you'll be in the right ballpark on either edition.

## Quick Action Checklist

- [ ] Wear at least one piece of gold armor (golden boots are the cheapest slot) before approaching piglins
- [ ] Only barter with adult piglins — babies steal the ingot and give nothing
- [ ] Hand over one gold ingot at a time; wait ~6 seconds (Java) for the reward
- [ ] Target the valuable rolls: ender pearls (~4.3%, 2-4), crying obsidian (~8.5%, 1-3), Soul Speed gear, Fire Resistance potions
- [ ] Accept that gravel, blackstone, and spectral arrows make up over a third of all results
- [ ] Never break gold ore, gilded blackstone, or open chests near piglins — it angers them regardless of armor
- [ ] Treat piglin brutes as a fight — they ignore gold and can't be bartered with
- [ ] Barter in the Nether so the 15-second zombification clock never starts
- [ ] Secure a gold supply (bastion, gold farm) before committing to a bartering farm`,
  faq: [
    {
      question: 'How do you barter with piglins in Minecraft?',
      answer:
        'Wear at least one piece of gold armor so adult piglins stay neutral, then either drop a gold ingot near a piglin or use (right-click) a gold ingot while looking at it. The piglin examines the ingot for about 6 seconds in Java (8 in Bedrock) and then drops a random item from the bartering loot table. Only adult piglins barter — baby piglins take the ingot and run off without giving you anything.',
    },
    {
      question: 'What are the odds of getting ender pearls from piglin bartering?',
      answer:
        'In Java Edition, ender pearls drop from roughly 4.3% of barters, and you get 2 to 4 pearls when they do drop. That makes bartering the only renewable ender pearl source that does not require killing endermen, but it is expensive in gold per pearl on average. If you need a large pearl stockpile, an enderman farm is more efficient, but bartering is the standard early-game and speedrun method.',
    },
    {
      question: 'Do you need gold armor to barter with piglins?',
      answer:
        'You need at least one piece of gold armor to be near piglins safely — any single piece (boots, leggings, chestplate, or helmet) keeps adult piglins neutral. You do not technically need it to perform the barter itself, but without it the piglins turn hostile and attack you, so in practice everyone wears at least golden boots. Note that gold armor does not protect you if you attack a piglin, open a chest, or break gold-related blocks near them.',
    },
    {
      question: 'What angers piglins even if you wear gold armor?',
      answer:
        'Gold armor only stops the "not wearing gold" aggression. Piglins will still turn hostile if you attack any piglin or piglin brute, open or break a chest or other container near them, or break gold-related blocks such as a block of gold, gold ore, deepslate or nether gold ore, gilded blackstone, or a block of raw gold. Gilded blackstone is the common trap in bastions, so mine gold blocks out of their line of sight.',
    },
    {
      question: 'What is the difference between a piglin and a piglin brute?',
      answer:
        'A piglin is the neutral, gold-loving mob you can barter with as long as you wear gold armor. A piglin brute is a separate, always-hostile mob that spawns guarding bastion remnants — it wields a golden axe, completely ignores gold armor, and cannot be bartered with or distracted by gold. Brutes are pure combat and hit hard, so treat them as a fight while regular piglins are trading partners.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/minecraft-nether-fortress-bastion-guide', anchor: 'Nether fortress and bastion guide' },
    { href: '/blog/minecraft/how-to-beat-the-ender-dragon', anchor: 'How to beat the ender dragon' },
    { href: '/blog/minecraft/minecraft-iron-farm-guide', anchor: 'Minecraft iron farm guide' },
    { href: '/blog/minecraft/minecraft-hostile-mobs-guide', anchor: 'Minecraft hostile mobs guide' },
    { href: '/blog/minecraft/best-minecraft-enchantments', anchor: 'Best Minecraft enchantments' },
    { href: '/blog/minecraft/minecraft-redstone-contraptions-guide', anchor: 'Minecraft redstone contraptions guide' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Bartering',
      title: 'Minecraft Wiki — full piglin bartering loot table and weights',
    },
    {
      url: 'https://minecraft.wiki/w/Piglin',
      title: 'Minecraft Wiki — piglin behavior, anger triggers, and zombification',
    },
    {
      url: 'https://minecraft.wiki/w/Piglin_Brute',
      title: 'Minecraft Wiki — piglin brute behavior and bastion spawns',
    },
  ],
  tldr:
    'Piglin bartering means giving an adult piglin one gold ingot and getting a random item back from a loot table. Wear at least one piece of gold armor or piglins attack you. The valuable but rare rolls are ender pearls (~4.3%, 2-4 each), crying obsidian (~8.5%, 1-3), Soul Speed gear, and Fire Resistance potions; over a third of barters are gravel, blackstone, and spectral arrows. Never break gold blocks or open chests near piglins, and barter in the Nether so the 15-second overworld zombification clock never starts. Piglin brutes are a separate always-hostile mob that ignores gold and cannot be bartered with.',
};
