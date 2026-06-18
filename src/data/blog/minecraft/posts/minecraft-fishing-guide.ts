import type { BlogPost } from '../../blogTypes';

export const minecraftFishingGuide: BlogPost = {
  slug: 'minecraft-fishing-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-survival',
  tags: ['fishing', 'fishing rod', 'enchantments', 'loot', 'food', 'afk farm'],
  title: 'Minecraft Fishing Guide: Loot Tables, Enchants & AFK Farms',
  metaDescription:
    'A complete Minecraft fishing guide: the real loot tables, open-water rules, Lure and Luck of the Sea, and why a properly enchanted rod is one of the best item sources in the game.',
  excerpt:
    "Fishing looks like the most boring thing in Minecraft until you read the loot table. A maxed-out rod pulls enchanted books, saddles, name tags, and nautilus shells out of a one-block puddle. Here is exactly how the catch math works and how to build a rig that prints treasure.",
  featuredImagePrompt:
    'A blocky Minecraft player standing on a wooden dock at dusk casting a fishing rod into calm blue water, the red-and-white bobber floating with fish particles trailing toward it, lily pads nearby',
  heroImage: '/images/blog/minecraft/minecraft-fishing-guide/fishing-scene.webp',
  heroImageAlt:
    'A Minecraft fishing scene — a cast bobber floating on open water, the setup that pulls fish, junk, and rare treasure.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-fishing-guide/fishing-scene.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Fishing',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-fishing-guide/fishing-rod.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Fishing_Rod',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-fishing-guide/cod.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Cod',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-fishing-guide/salmon.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Salmon',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-18T00:00:00.000Z',
  lastUpdated: '2026-06-18T00:00:00.000Z',
  primaryKeyword: 'minecraft fishing guide',
  secondaryKeywords: [
    'how to fish in minecraft',
    'minecraft fishing loot table',
    'luck of the sea minecraft',
    'minecraft lure enchantment',
    'minecraft afk fishing farm',
    'minecraft fishing rod enchantments',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'why-fishing-is-secretly-good', label: 'Why fishing is secretly good', level: 2 },
    { id: 'crafting-a-rod-and-casting', label: 'Crafting a rod and casting', level: 2 },
    { id: 'the-loot-table-fish-treasure-junk', label: 'The loot table: fish, treasure, junk', level: 2 },
    { id: 'the-open-water-rule-that-breaks-treasure', label: 'The open-water rule that breaks treasure', level: 2 },
    { id: 'lure-and-luck-of-the-sea', label: 'Lure and Luck of the Sea', level: 2 },
    { id: 'building-an-afk-fish-farm', label: 'Building an AFK fish farm', level: 2 },
    { id: 'rod-durability-and-mending', label: 'Rod durability and Mending', level: 2 },
    { id: 'java-vs-bedrock-fishing-notes', label: 'Java vs Bedrock fishing notes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Fishing has a reputation as the thing you do when you are bored and there is nothing else to grind. That reputation is wrong, and the loot table is the proof. A fully enchanted rod cast into open water has a real shot at pulling an enchanted book, a saddle, a name tag, or a nautilus shell — items you would otherwise chase across structures and trades — out of a puddle you dug next to your bed. The catch is that almost everyone fishes wrong and quietly disables the treasure half of the loot table without noticing.

This guide is the version with the actual numbers. We will cover crafting and casting, the three loot categories and their real percentages, the open-water rule that decides whether you ever see treasure, what Lure and Luck of the Sea genuinely do, how to build a hands-off farm, and the durability math. Everything here is checked against the Minecraft Wiki, because there is a lot of outdated fishing advice floating around from old versions.

## Why fishing is secretly good

Fishing is the cheapest renewable source of three things at once: food, enchanted gear, and experience. You catch raw cod and salmon for eating, you catch enchanted books and tools you can salvage or use, and every successful reel grants **1 to 6 experience points**. None of it costs you anything but a rod, and a rod with Mending repairs itself off that same XP.

The standout is treasure. The treasure pool includes **enchanted books, enchanted bows, enchanted fishing rods, name tags, nautilus shells, and saddles**. Name tags and saddles have no crafting recipe — fishing is one of the few reliable ways to farm them. Nautilus shells build conduits. Enchanted books pulled from water can roll high-value enchantments you would otherwise grind a librarian for. That is the whole pitch: fishing turns AFK time into rare loot.

## Crafting a rod and casting

A fishing rod is **3 sticks and 2 string**. Place the sticks diagonally up the right side of the crafting grid and the string down the right column — the classic diagonal-rod shape. String comes from spiders, cobwebs, or breaking tripwire; sticks are sticks. One rod, done.

![A Minecraft fishing rod item — three sticks and two string, the only tool you need to start fishing.](/images/blog/minecraft/minecraft-fishing-guide/fishing-rod.webp)

To fish, right-click (use) the rod while aiming at water to cast the bobber, then wait. After a random delay of **5 to 30 seconds**, a trail of fishing particles appears on the surface and swims toward the bobber. When that trail reaches the bobber, it **dips underwater** — that is your cue. Right-click again immediately to reel in. Your timing window is tight, roughly half a second on Bedrock and a beat longer on Java, so do not get distracted. Miss it and the fish gets away and you wait again.

## The loot table: fish, treasure, junk

Every successful catch rolls one of three categories. With an unenchanted rod the split is:

- **Fish — about 85%.** This is your bread and butter. Within the fish pool: **raw cod 60%, raw salmon 25%, pufferfish 13%, and tropical fish 2%**. Mostly food, plus the occasional pufferfish (useful for Water Breathing potions) and tropical fish (for breeding axolotls or just decorating an aquarium).
- **Treasure — about 5%.** The good stuff: **enchanted bow, enchanted book, enchanted fishing rod, name tag, nautilus shell, and saddle**, each roughly an equal slice of the treasure pool. This is the category you actually care about, and it is the one the open-water rule can switch off entirely.
- **Junk — about 10%.** **Lily pads, bowls, leather, leather boots, rotten flesh, water bottles, tripwire hooks, sticks, string, ink sacs, and a low chance at a damaged fishing rod.** Mostly garbage, though lily pads and the occasional bonus rod are not nothing.

So out of the box, roughly five in every hundred catches are treasure — *if* you set up correctly. Skip the open-water requirement and that 5% becomes 0%.

## The open-water rule that breaks treasure

This is the single most important fishing fact and the one that ruins most homemade fish farms. **Treasure can only be caught in open water.** Junk and fish still come up anywhere, so a player fishing in a tiny hole keeps catching cod and leather and assumes everything is fine — but they will never, ever pull a saddle, because they have silently disabled the treasure roll.

Open water is defined precisely: the bobber needs a **5×4×5 area centered on it** (5 wide, 5 long, 4 tall) that contains **only water source blocks, air, lily pads, or waterlogged non-solid blocks**. A single solid block, a wall, a slab, or even a floating boat inside that box flags the water as not-open, and treasure is off the table.

The practical takeaway: if you want treasure, fish in a body of water at least **5 blocks across in every direction** around your bobber, with nothing but air above. Cast toward the middle of a lake or build a dedicated pool that meets the dimensions. If you only want food, a one-block puddle still works fine — you just will not see treasure.

## Lure and Luck of the Sea

Two enchantments turn a casual rod into a loot machine, and they do completely different jobs.

**Lure (max level III)** reduces the wait time before a fish bites by **5 seconds per level**. At Lure III you shave up to 15 seconds off every cast, so bites come fast and your catches-per-hour skyrockets. Lure does *not* change what you catch — it only changes how often. It is the throughput enchantment.

**Luck of the Sea (max level III)** shifts the loot table toward treasure and away from fish and junk. Each level adds roughly **2% to your treasure chance** while trimming the fish and junk pools. With Luck of the Sea III you push treasure noticeably above the 5% baseline. It is the quality enchantment.

Run both. A rod with **Lure III + Luck of the Sea III + Mending + Unbreaking III** bites quickly, skews toward treasure, never breaks, and costs you nothing to maintain. That is the endgame fishing rod, and getting there is a great use of an XP stockpile — see our [Minecraft XP guide](/blog/minecraft/minecraft-xp-guide) for fast leveling, and the [best Minecraft enchantments](/blog/minecraft/best-minecraft-enchantments) for where these rank against everything else.

## Building an AFK fish farm

Because fishing is just two clicks separated by a wait, it automates beautifully — you hold the use button down and let the bobber recast itself when it dips. A simple, legitimate AFK setup:

1. **Dig or build an open-water pool** that satisfies the 5×4×5 rule so treasure stays enabled. A 5×5 pool one or two blocks deep is plenty.
2. **Stand at the edge** facing the center of the pool so your cast lands in open water, not against a wall.
3. **Hold the use action** (right-click) down. When a fish bites and the bobber dips, the rod reels in and immediately recasts, looping on its own.

![A Minecraft cod, one of the most common fish you reel in — raw cod makes up the bulk of the fish loot pool.](/images/blog/minecraft/minecraft-fishing-guide/cod.webp)

On Java you can wedge the button down (an item against the mouse, or a config binding) and walk away; the loop runs until the rod's durability or your patience runs out. Bedrock's timing is twitchier and many redstone-clock fish farms that worked in old versions were patched, so a held-button AFK setup is the most reliable cross-version approach today. Either way, with Mending on the rod the farm sustains itself.

If you would rather automate food and resources without the click loop, our [best Minecraft farms to build first](/blog/minecraft/best-minecraft-farms) covers higher-throughput options, and the [survival guide for beginners](/blog/minecraft/minecraft-survival-guide-beginners) covers where a fish farm fits in your early base.

## Rod durability and Mending

A fishing rod has **64 durability**, and the cost per use depends on what you reel:

- **Reeling in an item** (a normal catch) costs **1 durability**.
- **Reeling in a stuck bobber** (it hit a block) costs **3 durability**.
- **Hooking and pulling a non-item entity** — a mob, an item-frame, a boat — costs **5 durability**.

![A Minecraft salmon, the second most common fish — raw salmon is solid food and cooks up well.](/images/blog/minecraft/minecraft-fishing-guide/salmon.webp)

Sixty-four uses sounds low, but **Unbreaking III** roughly triples effective durability and **Mending** repairs the rod from the XP you earn fishing — and since every catch gives 1 to 6 XP, a Mending rod with even modest use stays topped up indefinitely. The first thing you should do with a treasure-pulled enchanted rod is check whether it rolled Mending; if it did, that is your forever-rod.

## Java vs Bedrock fishing notes

The systems are close but not identical:

- **Reel timing.** Java gives you a slightly more forgiving window after the bobber dips; Bedrock's is tighter (around half a second), so be ready.
- **AFK setups.** Many old Bedrock redstone fish-farm clocks were patched out; the held-use-button method is the reliable cross-edition approach now. Java's button-wedge AFK still works.
- **Loot pools.** Fish, treasure, and junk categories and the open-water requirement behave the same on both editions; minor percentage tweaks exist between versions but the 85/5/10 split and the 5×4×5 open-water box are the working model.
- **Enchantment caps.** Lure III and Luck of the Sea III are the maximums on both editions.

## Quick Action Checklist

- [ ] Craft a rod from 3 sticks + 2 string
- [ ] Cast into water, watch for the particle trail, reel the instant the bobber dips
- [ ] Fish in open water (5×4×5 box of only water/air) or you will never catch treasure
- [ ] Remember the split: ~85% fish, ~5% treasure, ~10% junk on an unenchanted rod
- [ ] Add Lure III to bite faster (−5s per level) and Luck of the Sea III for more treasure
- [ ] Put Mending + Unbreaking III on the rod so it repairs itself off fishing XP
- [ ] Build a 5×5 open-water pool and hold the use button for hands-off AFK fishing
- [ ] Save name tags and saddles you catch — fishing is one of the few ways to farm them
- [ ] Keep pufferfish for Water Breathing potions and tropical fish for axolotls`,
  faq: [
    {
      question: 'How do you fish in Minecraft?',
      answer:
        'Craft a fishing rod from 3 sticks and 2 string, then right-click (use) the rod while aiming at water to cast the bobber. After a random 5–30 second wait, a trail of particles swims toward the bobber and it dips underwater — right-click again immediately to reel in. The timing window is short (about half a second on Bedrock, a little longer on Java), so reel the instant the bobber goes under.',
    },
    {
      question: 'What can you catch fishing in Minecraft?',
      answer:
        'Catches fall into three categories. Fish (~85%): raw cod, raw salmon, pufferfish, and tropical fish. Treasure (~5%): enchanted bow, enchanted book, enchanted fishing rod, name tag, nautilus shell, and saddle. Junk (~10%): lily pads, bowls, leather, leather boots, rotten flesh, water bottles, tripwire hooks, sticks, string, ink sacs, and the occasional damaged rod. Treasure only appears when you fish in open water.',
    },
    {
      question: 'Why am I not catching treasure when fishing?',
      answer:
        'Because you are not in open water. Treasure only drops when the bobber sits in a 5×4×5 area (5 wide, 5 long, 4 tall) containing only water source blocks, air, lily pads, or waterlogged non-solid blocks. Any solid block, wall, slab, or boat inside that box flags the water as not-open and disables the treasure roll entirely — you keep catching fish and junk but never a saddle or enchanted book. Cast toward the middle of a lake or build a pool at least 5 blocks across.',
    },
    {
      question: 'What do Lure and Luck of the Sea do?',
      answer:
        'Lure (max III) reduces the wait time before a fish bites by 5 seconds per level, so you catch faster — it does not change what you catch. Luck of the Sea (max III) shifts the loot table toward treasure and away from fish and junk, adding roughly 2% treasure chance per level. Run both, plus Mending and Unbreaking III, for the ideal fishing rod.',
    },
    {
      question: 'How do you make an AFK fishing farm in Minecraft?',
      answer:
        'Build an open-water pool that satisfies the 5×4×5 rule so treasure stays enabled (a 5×5 pool one or two blocks deep works), stand at the edge facing the center, and hold the use button down. When a fish bites and the bobber dips, the rod reels in and recasts automatically, looping on its own. With Mending on the rod it repairs itself from fishing XP, so the farm sustains indefinitely. Held-button AFK is the most reliable method across both Java and Bedrock.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/best-minecraft-enchantments', anchor: 'Best Minecraft enchantments' },
    { href: '/blog/minecraft/minecraft-xp-guide', anchor: 'Minecraft XP farming guide' },
    { href: '/blog/minecraft/best-minecraft-farms', anchor: 'Best Minecraft farms to build first' },
    { href: '/blog/minecraft/minecraft-survival-guide-beginners', anchor: 'Minecraft survival guide for beginners' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Fishing',
      title: 'Minecraft Wiki — fishing mechanics, loot tables, and open water',
    },
    {
      url: 'https://minecraft.wiki/w/Fishing_Rod',
      title: 'Minecraft Wiki — fishing rod crafting, durability, and enchantments',
    },
    {
      url: 'https://minecraft.wiki/w/Luck_of_the_Sea',
      title: 'Minecraft Wiki — Luck of the Sea enchantment',
    },
  ],
  tldr:
    'Fishing is the cheapest renewable source of food, enchanted loot, and XP (1–6 per catch). Craft a rod from 3 sticks + 2 string, cast, and reel the instant the bobber dips. Catches split into fish (~85%), treasure (~5%), and junk (~10%) — but treasure ONLY drops in open water (a 5×4×5 box of just water and air around the bobber), which is why most homemade farms never pull saddles. Lure III makes bites 15 seconds faster; Luck of the Sea III skews the table toward treasure. Add Mending + Unbreaking III and the rod repairs itself off fishing XP, making a held-button AFK pool a self-sustaining treasure farm for name tags, saddles, nautilus shells, and enchanted books.',
  itemList: {
    name: 'Minecraft Fishing Loot Categories',
    items: [
      {
        name: 'Fish (~85%)',
        description: 'Raw cod 60%, raw salmon 25%, pufferfish 13%, tropical fish 2%. Food plus potion and breeding ingredients.',
      },
      {
        name: 'Treasure (~5%)',
        description: 'Enchanted book, enchanted bow, enchanted rod, name tag, nautilus shell, saddle. Open water only.',
      },
      {
        name: 'Junk (~10%)',
        description: 'Lily pads, bowls, leather, leather boots, rotten flesh, water bottles, tripwire hooks, sticks, string, ink sacs.',
      },
      {
        name: 'Lure III',
        description: 'Cuts the bite wait by 5 seconds per level (up to 15s), boosting catches per hour. Throughput enchant.',
      },
      {
        name: 'Luck of the Sea III',
        description: 'Adds roughly 2% treasure chance per level, skewing the loot table away from fish and junk. Quality enchant.',
      },
      {
        name: 'Mending + Unbreaking III',
        description: 'Repairs the 64-durability rod off fishing XP and triples its lifespan — the self-sustaining endgame rod.',
      },
    ],
  },
};
