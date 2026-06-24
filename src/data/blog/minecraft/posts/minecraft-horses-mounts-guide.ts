import type { BlogPost } from '../../blogTypes';

export const minecraftHorsesMountsGuide: BlogPost = {
  slug: 'minecraft-horses-mounts-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-survival',
  tags: ['horses', 'mounts', 'camels', 'llamas', 'striders', 'transportation', 'breeding'],
  title: 'Minecraft Horses & Mounts Guide: Every Rideable Animal',
  metaDescription:
    'Minecraft horses and mounts guide: taming, breeding fast horses, donkey and llama storage, camel dashes, strider lava travel, plus armor and leads.',
  excerpt:
    "Every rideable mob in Minecraft does one job better than the rest — horses for speed and fences, llamas for caravans, striders for lava, camels for two-up desert travel. Here is how to tame each one, what its real stats are, and how to breed a horse that actually clears a five-block wall.",
  featuredImagePrompt:
    'A lineup of blocky Minecraft horses in different coat colors — white, chestnut, black, brown, gray — standing on a grassy plains hill under a bright sky, one wearing diamond horse armor',
  heroImage: '/images/blog/minecraft/minecraft-horses-mounts-guide/horse-breeds.webp',
  heroImageAlt:
    'A row of Minecraft horses in their different coat colors and markings — speed, jump, and health vary from horse to horse.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-horses-mounts-guide/horse-breeds.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Horse',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-horses-mounts-guide/donkey-mule.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Donkey',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-horses-mounts-guide/llama.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Llama',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-horses-mounts-guide/camel.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Camel',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-24T00:00:00.000Z',
  lastUpdated: '2026-06-24T00:00:00.000Z',
  primaryKeyword: 'minecraft horses and mounts guide',
  secondaryKeywords: [
    'how to tame a horse in minecraft',
    'how to breed fast horses minecraft',
    'minecraft donkey chest',
    'minecraft llama caravan',
    'minecraft camel guide',
    'minecraft strider warped fungus on a stick',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-mounts-matter', label: 'Why mounts matter', level: 2 },
    { id: 'horses-taming-the-fast-one', label: 'Horses: taming the fast one', level: 2 },
    { id: 'horse-stats-and-breeding-for-speed', label: 'Horse stats and breeding for speed', level: 2 },
    { id: 'horse-armor-and-leads', label: 'Horse armor and leads', level: 2 },
    { id: 'donkeys-and-mules-the-pack-animals', label: 'Donkeys and mules: the pack animals', level: 2 },
    { id: 'llamas-and-caravans', label: 'Llamas and caravans', level: 2 },
    { id: 'camels-two-up-desert-travel', label: 'Camels: two-up desert travel', level: 2 },
    { id: 'striders-riding-on-lava', label: 'Striders: riding on lava', level: 2 },
    { id: 'pigs-the-meme-mount', label: 'Pigs: the meme mount', level: 2 },
    { id: 'which-mount-for-which-job', label: 'Which mount for which job', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Walking is for the first ten minutes of a world. After that, every serious survival run is a question of what you ride. Minecraft has more rideable mobs than most players ever bother with, and each one is genuinely the best tool for a specific job — horses outrun anything on land and clear fences, llamas haul a wagon train of loot, striders are the only way to cruise a lava ocean, and camels let you ride two-up while shrugging off zombies. The trick is knowing which animal to grab and how to actually tame and equip it.

This guide covers every mount: how taming works, the real stats (checked against the Minecraft Wiki, because there is a lot of made-up "best horse" advice floating around), how to breed a horse worth keeping, and which mob to reach for in which biome.

## Why mounts matter

A player walks at about 4.3 blocks per second and sprints at roughly 5.6. The fastest horse moves at around **14.57 blocks per second** — nearly three times sprint speed — and can leap walls a player would have to pillar up. That gap is the whole point. A mount turns a ten-minute overland slog into a 90-second ride, lets you escape a bad fight, and in the case of pack animals, doubles as a mobile chest so you do not have to leave loot behind on a long expedition.

Different mounts also unlock terrain. Striders walk on lava. Camels are tall enough that most melee mobs can't hit you. Llamas form caravans so one player can move ten animals' worth of storage at once. Pick the mob to match the trip.

## Horses: taming the fast one

Horses spawn in herds of 2–6 in **plains and savannas**, and generate in village stables. To tame one, you ride it bare — no saddle needed yet.

Here is the mechanic most guides get vague about. Every horse starts with a **temper of 0 out of 100**. When you mount it (press use with an empty hand), the game rolls a random taming threshold between 0 and 99. If the horse's temper beats that roll, it's tamed and hearts pop up. If not, it bucks you off and its temper rises by **5**. So each failed attempt makes the next one more likely. Feeding the horse also raises temper, which is why bringing food speeds taming up dramatically.

Best taming foods, roughly in order of temper gain: **sugar, wheat, apples, golden carrots, and golden apples**. Golden apples and golden carrots give the biggest temper boost (and are also your breeding food later). Once hearts appear, open the horse's inventory and equip a **saddle** — saddles can't be crafted, so you find them in chests, fishing, or villager trades — and you're riding.

One quirk worth knowing: horses take fall damage only after **7 blocks** (most mobs start at 3), and a rider safely falls 7 blocks too. So you can drop off small cliffs on horseback without splatting.

## Horse stats and breeding for speed

This is where horses get interesting. Every horse rolls three hidden "equine stats" at birth or spawn:

- **Health:** ranges from **15 to 30** health points (avg ~22.5).
- **Movement speed:** roughly **4.86 to 14.57 blocks/second** (avg ~9.71). The single most important stat for travel.
- **Jump strength:** clears between **1.15 and 5.92 blocks** (avg ~3.12). High jump lets you hop fences and small cliffs without a path.

These stats are fixed at spawn and **food does not change them** — feeding only heals and tames. The only way to improve a horse is **breeding**.

Feed two tamed horses **golden carrots or golden apples** (regular apples and carrots do not trigger breeding) to enter love mode and produce a foal, granting **1–7 XP**. The foal's stats are not a simple average. For each of the three stats, the game takes the average of the two parents, then adds a random spread of up to about **30% of the stat's full range** — meaning the baby can land higher *or* lower than both parents.

The practical breeding loop: tame a big herd, ride each one to find your fastest and highest-jumping individuals, breed those two together, and keep the best foal. Repeat across a couple of generations and you'll push a horse toward that ~14.5 b/s, ~5-block-jump ceiling. There's no guaranteed perfect horse, but selective breeding gets you close. Foals take **20 minutes** to grow up naturally, or feed them to speed it along.

## Horse armor and leads

A tamed horse has two equipment slots: a saddle slot and a **horse armor** slot. Horse armor reduces incoming damage and comes in six tiers — **leather, copper, iron, gold, diamond, and netherite**. Only **leather and netherite** horse armor can be crafted or smithed; the rest (copper, iron, gold, diamond) are **chest loot** from structures like dungeons, temples, and mineshafts. Equip it by pressing use on the horse with the armor in hand, or drop it into the armor slot. Leather horse armor also stops a horse freezing in powder snow.

**Leads** are essential mount-management gear. Attach a lead to any horse, donkey, mule, or llama and you can tow it behind you on foot or even behind a boat. A mounted horse can be pulled by a lead, and you can hitch a mount to a fence post to park it. Leads are how you relocate a good horse home without riding it the whole way. For the wider picture of getting around, see our [Minecraft transportation guide](/blog/minecraft/minecraft-transportation-guide).

## Donkeys and mules: the pack animals

Donkeys spawn in **plains, meadows, and savannas**. They're slower and jump worse than horses, but they have one killer feature: **storage**. Tame a donkey the same way (ride it bare until hearts), saddle it, then press use with a **chest** in hand to give it **15 slots** of inventory. Now it's a horse you can also pack full of loot. Open the storage by sneaking and using the donkey, or while riding it.

![A Minecraft donkey beside a mule — both can wear a chest for 15 slots of storage but neither can equip horse armor.](/images/blog/minecraft/minecraft-horses-mounts-guide/donkey-mule.webp)

**Mules** are the cross-breed: feed a tamed horse and a tamed donkey golden carrots/apples and you get a baby mule instead of a foal. Mules also carry a 15-slot chest. The catch — exactly like real life — **mules are sterile and cannot breed**, so every mule you want has to come from a fresh horse-plus-donkey pairing. Neither donkeys nor mules can wear horse armor; the chest is their whole identity.

## Llamas and caravans

Llamas are the bulk-haul specialists. They spawn in **savanna plateaus and windswept hills** in herds of 4–6. Tame one by riding it (it has a lower max temper than horses, capping at 30, so taming is quick), then equip a **chest**. A llama's storage scales with its hidden **strength stat (1 to 5)**: weaker llamas get just 3 slots, the strongest get **15**. You can't saddle or steer a llama directly — you don't ride them anywhere useful — so their job is hauling, not commuting.

The magic is **caravans**. Attach a **lead** to one llama and up to **nine** nearby unleashed llamas automatically chain behind it, forming a caravan of up to **ten**. Lead the front llama and the whole train follows. One player can move a small fortune in storage across the map this way — it's the closest thing vanilla Minecraft has to a pack train. Decorate them with **carpets** (16 colors) if you want, purely cosmetic.

![A Minecraft llama, the bulk-storage mob — its chest holds 3 to 15 slots depending on strength, and it forms caravans of up to ten.](/images/blog/minecraft/minecraft-horses-mounts-guide/llama.webp)

One warning: llamas are **neutral**, not passive. Provoke one and it **spits**, dealing damage, and an angry llama in a caravan can be a nuisance. They're also natural wolf-deterrents — wolves flee strength-4 and -5 llamas. For more on raising every animal, including which are worth your time, see the [taming and breeding guide](/blog/minecraft/minecraft-taming-breeding-guide).

## Camels: two-up desert travel

Camels are the newest and arguably most player-friendly mount. They spawn uncommonly in **deserts**, and one always generates in the center of every **desert village** (that one is persistent and won't despawn — easy free camel). Crucially, **camels are naturally tame** — no bucking-off ritual. Just slap a **saddle** on and ride.

![A tall Minecraft camel — naturally tame, seats two riders, and can dash up to 12 blocks forward.](/images/blog/minecraft/minecraft-horses-mounts-guide/camel.webp)

Two things make camels special:

- **Two riders.** A camel seats **two players** at once — the only vanilla mount that does. The back-seat player can't steer or hurt the driver, but it's genuinely useful for traveling with a friend on one animal.
- **Dashing.** Press the jump control to **dash**: the camel launches up to **12 blocks forward** and one block up, on a **2.75-second cooldown**. Hold the control to charge a longer dash. It's a burst of distance that also clears gaps.

Camels are also **tall enough that most melee mobs can't reach a mounted rider** — zombies, piglins, vindicators, and the like swing and miss. (Spiders, slimes, and wolves jump, so they're still a threat.) Heal a camel by feeding it **cactus** (2 HP each). They sit down to idle and stand when you ride.

## Striders: riding on lava

Striders are your **Nether** lava taxi, and the only mob that can walk on lava without burning. They spawn in groups of 2–4 on lava in any Nether biome. To ride one, equip a **saddle**, then steer it with a **warped fungus on a stick** (the Nether's version of a carrot on a stick — craft it from a fishing rod and a warped fungus). Hold the fungus stick and the strider walks toward where you point.

A strider on a flat lava surface (like the central lava sea) moves at about **4.24 blocks/second** in Java — slow, but it's *lava travel*, so any speed beats burning to death. Each use of the warped fungus on a stick triggers a temporary boost and costs durability. On land, striders crawl (~1.78 b/s) and shiver, turning purple in the cold — keep them on lava.

Breed striders by feeding two of them **warped fungus** for a baby. They're also a renewable **string** source. For everything else about surviving the dimension, see the [Nether guide](/blog/minecraft/minecraft-nether-guide).

## Pigs: the meme mount

Yes, you can ride a pig. Saddle one (no taming needed — just use a saddle on it) and steer it with a **carrot on a stick**. It's slow, defaulting to about **2.42 blocks/second**, boosting to a peak of around **5.2 b/s** while the carrot-on-a-stick boost lasts (each boost burns 7 durability off the stick). Speed potions push that higher.

The honest take: a pig is **worse than walking** most of the time and exists mainly for the **"When Pigs Fly" achievement** (ride a pig off a cliff and take fall damage, or land safely). Nobody commutes on a pig. It's a novelty — but it's a fun one, and the carrot-on-a-stick steering is the same idea as the strider's fungus stick, so it's a decent way to learn the mechanic.

## Which mount for which job

Quick decision guide:

- **Fastest land travel:** a bred-up **horse**. Nothing else competes on the surface.
- **Hauling loot on an expedition:** a **donkey or mule** (15-slot chest, rides like a slow horse).
- **Moving a ton of storage at once:** a **llama caravan** (up to ten llamas on one lead).
- **Desert travel or riding with a friend:** a **camel** (two riders, dash, mob-proof height).
- **Crossing lava in the Nether:** a **strider** (the only option).
- **Bragging rights:** a **pig**.

A practical loadout for a big base: keep one fast horse for scouting, a couple of donkeys or a llama caravan for hauling, a camel parked in the desert, and a saddled strider stashed near your Nether lava routes.

## Quick Action Checklist

- [ ] Tame a horse by riding it bare; feed sugar/apples/golden carrots to raise temper faster
- [ ] Equip a saddle (chest/fishing/trade loot — not craftable) once hearts appear
- [ ] Breed your two fastest, highest-jumping horses with golden carrots or golden apples
- [ ] Keep the best foal; repeat over generations toward ~14.5 b/s and ~5-block jumps
- [ ] Slap horse armor (leather/netherite craftable, others are loot) in the armor slot
- [ ] Use a lead to tow or park any horse, donkey, mule, or llama
- [ ] Give a donkey or mule a chest for 15 slots of mobile storage (mules can't breed)
- [ ] Lead one llama to chain a caravan of up to ten; chest = 3–15 slots by strength
- [ ] Saddle a desert camel (naturally tame), ride two-up, and dash with the jump key
- [ ] Ride striders on Nether lava with a warped fungus on a stick`,
  faq: [
    {
      question: 'How do you tame a horse in Minecraft?',
      answer:
        'Find a horse in plains or savanna, press use on it with an empty hand to mount it, and keep remounting after it bucks you off. Each horse starts with a temper of 0 out of 100; mounting rolls a random threshold (0–99) and the horse is tamed if its temper beats the roll, otherwise temper rises by 5. Feeding sugar, wheat, apples, or golden carrots/apples raises temper and tames it faster. Once hearts appear, open its inventory and equip a saddle to ride. Saddles cannot be crafted — they come from chest loot, fishing, or villager trades.',
    },
    {
      question: 'How do you breed a fast horse in Minecraft?',
      answer:
        "Feed two tamed horses golden carrots or golden apples (not regular ones) to produce a foal. Each foal's speed, jump, and health are based on the average of its parents plus a random spread of up to about 30% of the stat range, so the baby can roll higher or lower than both parents. Tame a big herd, ride each to find the fastest and highest-jumping individuals, breed those, and keep the best foal. Over a few generations you can push a horse toward the ~14.57 blocks/second top speed and a roughly 5-block jump.",
    },
    {
      question: 'What is the difference between a donkey and a mule in Minecraft?',
      answer:
        'Both donkeys and mules can wear a chest for 15 slots of storage and neither can equip horse armor. The difference is breeding: donkeys spawn naturally and can breed, while a mule is only created by breeding a tamed horse with a tamed donkey. Mules are sterile and cannot breed with anything, so every mule has to come from a fresh horse-plus-donkey pairing.',
    },
    {
      question: 'How do llama caravans work in Minecraft?',
      answer:
        'Attach a lead to one llama and up to nine nearby unleashed llamas automatically follow it, forming a caravan of up to ten. Lead the front llama and the whole chain follows, letting one player move a lot of storage at once. A tamed llama equipped with a chest holds 3 to 15 slots depending on its hidden strength stat (1–5). Llamas are neutral and spit when provoked, but they also scare off wolves.',
    },
    {
      question: 'What can a camel do in Minecraft?',
      answer:
        'Camels spawn in deserts and desert villages and are naturally tame, so you only need a saddle to ride one. They seat two players at once, can dash up to 12 blocks forward (and one block up) using the jump control on a 2.75-second cooldown, and are tall enough that most melee mobs cannot reach a mounted rider. Feed them cactus to heal (2 HP each). They are the most versatile travel mount for open terrain.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/minecraft-transportation-guide', anchor: 'Minecraft transportation guide' },
    { href: '/blog/minecraft/minecraft-taming-breeding-guide', anchor: 'Taming and breeding guide' },
    { href: '/blog/minecraft/minecraft-nether-guide', anchor: 'Minecraft Nether guide' },
    { href: '/blog/minecraft/minecraft-armor-guide', anchor: 'Minecraft armor guide' },
    { href: '/blog/minecraft/minecraft-survival-guide-beginners', anchor: 'Minecraft survival guide for beginners' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Horse',
      title: 'Minecraft Wiki — horse taming, stats, and breeding',
    },
    {
      url: 'https://minecraft.wiki/w/Llama',
      title: 'Minecraft Wiki — llamas, strength, and caravans',
    },
    {
      url: 'https://minecraft.wiki/w/Camel',
      title: 'Minecraft Wiki — camel riding and dashing',
    },
    {
      url: 'https://minecraft.wiki/w/Strider',
      title: 'Minecraft Wiki — striders and lava travel',
    },
  ],
  tldr:
    'Every Minecraft mount is best at one job. Horses are the fastest land travel (top speed ~14.57 blocks/sec, jump up to ~5.9 blocks); tame by riding bare until hearts appear, then breed your two best with golden carrots/apples to improve stats. Donkeys and mules carry a 15-slot chest (mules are sterile). Llamas haul storage and chain into caravans of up to ten on one lead. Camels are naturally tame, seat two riders, and dash 12 blocks. Striders are the only way to ride on Nether lava, steered with a warped fungus on a stick. Pigs are a novelty. Use leads to tow or park any mount, and slot horse armor for protection.',
  itemList: {
    name: 'Minecraft Mounts by Best Use',
    items: [
      {
        name: 'Horse — fastest land travel',
        description: 'Top speed ~14.57 blocks/sec and jumps up to ~5.9 blocks. Tame by riding, improve via selective breeding.',
      },
      {
        name: 'Donkey / Mule — pack animal',
        description: 'Wears a chest for 15 slots of mobile storage. Mules come from horse+donkey breeding and are sterile.',
      },
      {
        name: 'Llama — bulk caravan hauler',
        description: 'Chest holds 3–15 slots by strength. One lead chains a caravan of up to ten llamas.',
      },
      {
        name: 'Camel — two-up desert mount',
        description: 'Naturally tame, seats two riders, dashes 12 blocks, and is tall enough to dodge most melee mobs.',
      },
      {
        name: 'Strider — lava travel',
        description: 'The only mob that walks on lava. Steer with a warped fungus on a stick in the Nether.',
      },
      {
        name: 'Pig — novelty mount',
        description: 'Saddle and steer with a carrot on a stick. Slow and mostly for the "When Pigs Fly" achievement.',
      },
    ],
  },
};
