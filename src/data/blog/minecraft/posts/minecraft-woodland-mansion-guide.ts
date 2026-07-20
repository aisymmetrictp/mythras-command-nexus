import type { BlogPost } from '../../blogTypes';

export const minecraftWoodlandMansionGuide: BlogPost = {
  slug: 'minecraft-woodland-mansion-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-worlds',
  tags: ['woodland-mansion', 'vindicator', 'evoker', 'totem-of-undying', 'illager', 'loot'],
  title: 'Minecraft Woodland Mansion Guide: Loot, Vindicators & the Totem',
  metaDescription:
    'How to find and clear a Minecraft woodland mansion: explorer maps, vindicators, evokers and vexes, the Totem of Undying, secret loot rooms, and a safe plan.',
  excerpt:
    "A woodland mansion is the only structure where you can punch an evoker to death and walk out with a Totem of Undying — the item that revives you the next time something one-shots you. It's also a maze full of axe-wielding vindicators and hidden rooms with diamonds behind fake walls. Here's how to find one, clear it without dying, and grab everything worth grabbing.",
  featuredImagePrompt:
    'A massive dark oak woodland mansion looming in a dark forest at dusk in blocky Minecraft style, cobblestone foundation, lit windows, an illager silhouette in a doorway',
  heroImage: '/images/blog/minecraft/minecraft-woodland-mansion-guide/woodland-mansion.webp',
  heroImageAlt:
    'A Minecraft woodland mansion — the huge dark oak structure that generates rarely in dark forest biomes far from spawn.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-woodland-mansion-guide/woodland-mansion.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Woodland_Mansion',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-woodland-mansion-guide/vindicator.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Vindicator',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-woodland-mansion-guide/evoker.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Evoker',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-woodland-mansion-guide/totem-of-undying.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Totem_of_Undying',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-07T00:00:00.000Z',
  lastUpdated: '2026-06-07T00:00:00.000Z',
  primaryKeyword: 'minecraft woodland mansion guide',
  secondaryKeywords: [
    'how to find woodland mansion',
    'woodland mansion loot',
    'how to get totem of undying',
    'woodland explorer map',
    'minecraft vindicator evoker',
    'woodland mansion secret rooms',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-bother-with-a-mansion', label: 'Why bother with a mansion', level: 2 },
    { id: 'how-to-find-a-woodland-mansion', label: 'How to find a woodland mansion', level: 2 },
    { id: 'gear-up-before-you-knock', label: 'Gear up before you knock', level: 2 },
    { id: 'the-vindicator-the-axe-with-legs', label: 'The vindicator: the axe with legs', level: 2 },
    { id: 'the-evoker-vexes-fangs-and-the-totem', label: 'The evoker: vexes, fangs, and the totem', level: 2 },
    { id: 'the-secret-loot-rooms', label: 'The secret loot rooms', level: 2 },
    { id: 'how-to-clear-a-mansion-safely', label: 'How to clear a mansion safely', level: 2 },
    { id: 'whats-actually-worth-grabbing', label: 'What\'s actually worth grabbing', level: 2 },
    { id: 'java-vs-bedrock-notes', label: 'Java vs Bedrock notes', level: 2 },
    { id: 'mansion-raid-checklist', label: 'Mansion raid checklist', level: 2 },
  ],
  content: `A woodland mansion is the only structure in the game where you can kill an evoker and walk out with a **Totem of Undying** — the single best panic button in Minecraft. Hold one in your hand, and the next hit that would kill you instead drops you to 1 health, clears your debuffs, and hands you Regeneration II. Get jumped by the warden, fall into lava, eat a creeper at point blank — the totem buys you a second chance. That alone is why people hike for hours to find a mansion.

The catch is that the mansion does not want you to have it. It is a sprawling dark oak maze full of axe-swinging vindicators, spellcasting evokers that summon flying vexes through the walls, dark rooms where regular hostile mobs spawn because the place is barely lit, and secret rooms hidden behind fake walls — some with diamonds, one with a fake End portal rigged to dump silverfish and TNT on you. This is how to find one, clear it without throwing your run, and leave with the totems, the diamonds, and everything else that matters.

## Why bother with a mansion

Three things pull players to a mansion, in order of importance:

- **Totems of Undying.** Evokers are one of only two sources (the other is [raids](/blog/minecraft/minecraft-raids-pillagers-guide)), and a mansion typically has several evokers, so a single clear can net you two, three, or more totems. Every totem is a free "do not die" charge. For PvP, hardcore worlds, or pushing into the End and the deep dark, this is the most valuable loot in the building.
- **Guaranteed diamonds.** Two of the secret rooms hide a **diamond block** (that's nine diamonds each) — one buried inside an obsidian box, one sealed in a glass case in a lava room. If you find them, that's free netherite-tier gear progress with zero mining.
- **It's a finite, clearable dungeon.** The vindicators and evokers do not respawn once you kill them, so a mansion is something you can fully clear and then loot at your leisure, or even claim as a base. It's one of the few "raid the dungeon" experiences Minecraft has.

There's also a pile of ordinary chest loot, dark oak by the truckload, and the sheer novelty of the most over-the-top structure the game generates. But the totems are the reason. Everything else is gravy.

## How to find a woodland mansion

Mansions generate **rarely**, only in **dark forest** biomes (and, on Bedrock, the pale garden and dark forest hills variants), and they spawn **far from the world origin** — you are not stumbling onto one near spawn. Wandering won't cut it. You have two real options:

1. **Buy a woodland explorer map.** This is the intended method. A **[cartographer villager](/blog/minecraft/minecraft-villager-trading-guide)** sells a woodland explorer map for emeralds and a compass at one of its higher trade tiers (master-level). The map points you toward a mansion and fills in as you travel. One honest caveat the wiki is explicit about: the map does **not** always point to the *nearest* mansion — it points to *a* mansion, which can still be thousands of blocks away. Bring food, a boat, and patience.
2. **Use \`/locate structure mansion\`** if you play with cheats on. It spits out coordinates to the closest one instantly. Obviously not for legit survival, but great for testing, creative, or a relaxed world where you just want to go.

![A Minecraft woodland mansion, the enormous dark oak structure that only generates in dark forest biomes far from spawn.](/images/blog/minecraft/minecraft-woodland-mansion-guide/woodland-mansion.webp)

The trek is genuinely the hard part. A woodland explorer map can send you 5,000-plus blocks out, often across oceans. Set up a horse or a boat, pack a stack of food and a bed, and treat getting there as its own expedition. The mansion itself, once you arrive, is the fun part.

## Gear up before you knock

A mansion will punish you for showing up underleveled. Bring:

- **[Diamond or netherite armor](/blog/minecraft/minecraft-armor-guide) with Protection IV.** Vindicators hit hard in melee; you want the buffer.
- **A strong sword** (Sharpness V) and ideally **a bow or crossbow** for evokers and for shooting through doorways.
- **A shield.** Vindicators are melee-only, so a raised shield turns their charge into a non-event. This is the most important single item.
- **Food and a few golden apples.** Evoker fights get chaotic; the heals matter.
- **Torches — a lot of them.** The mansion is dimly lit, which means [regular hostile mobs](/blog/minecraft/minecraft-hostile-mobs-guide) (zombies, skeletons, creepers) spawn *inside* on top of the illagers. Lighting rooms as you clear them stops the place from re-populating behind you.
- **Blocks to wall off doorways**, plus a water bucket and a bed to set your spawn nearby.

The mob that earns the gear is the evoker, but the thing that quietly kills careless players is the darkness spawning a creeper behind them mid-fight. Light is armor here.

## The vindicator: the axe with legs

The **vindicator** is the mansion's standard guard — a gray-skinned illager in a dark coat carrying an **iron axe.** It's melee-only, but it's fast and it hits *hard*: a vindicator can shred unarmored players in a couple of swings, and on harder difficulties the axe damage is no joke even through iron. They patrol the first floor and the corridors, and they're the ones guarding the cages of imprisoned **allays** in the jail rooms.

![A Minecraft vindicator, the axe-wielding illager that guards the mansion's halls and rooms.](/images/blog/minecraft/minecraft-woodland-mansion-guide/vindicator.webp)

How to handle them:

- **Raise your shield.** A vindicator's whole offense is the melee swing. Block it and it does nothing, then drop the shield and counter. Against one or two vindicators, the shield-and-stab loop is almost free.
- **Fight in doorways.** A one-block choke means only one vindicator reaches you at a time, even if three are coming. Never let them surround you in an open room.
- **Pull, don't push.** Back into a corridor you've already lit and cleared rather than charging deeper into a dark room with unknown spawns.

Vindicators do **not respawn** once killed, so every one you drop is gone for good — the mansion gets safer with every room you clear. They occasionally drop emeralds and (rarely) an iron axe.

## The evoker: vexes, fangs, and the totem

The **evoker** is the real boss of the building and the reason you came. It's a robed illager spellcaster with only **24 health** — low, but it never lets you near it. Evokers **flee from you** when you get within about 10 blocks, kiting backward while they cast two nasty spells:

- **Evoker fangs.** It summons rows of biting jaws that erupt from the ground around you and snap shut for **6 damage** a hit. At range they appear in a line marching toward you; up close they ring the evoker in two circles. You can't block fangs with a shield, so you have to move out of the lines.
- **Vex summoning.** This is the dangerous one. The evoker spawns **three vexes** at a time — small, fast, flying hostile mobs that **fly straight through walls and floors** to dive at you with their little swords. An evoker keeps topping the swarm up (it can maintain up to eight vexes nearby), so if you let the fight drag, you're swatting at ghosts coming through the architecture while the evoker calmly kites you into more fangs.

![A Minecraft evoker, the spellcasting illager that summons vexes and always drops a Totem of Undying.](/images/blog/minecraft/minecraft-woodland-mansion-guide/evoker.webp)

The counter is **speed and aggression.** Because the evoker flees and resummons, chipping at it slowly is the worst thing you can do — you just eat more vexes. Instead:

- **Close the gap and burst it down.** With only 24 health, a Sharpness V sword or a couple of strong arrows ends an evoker in seconds. Corner it against a wall so it can't kite, then delete it.
- **Ignore the vexes until the evoker is dead.** Vexes despawn over time and stop being replaced the moment the evoker dies, so killing the caster is the actual solution to its minions.
- **Don't stand still in fangs.** Keep moving perpendicular to the fang lines while you advance.

When the evoker dies, it **always drops one Totem of Undying** (this drop is not affected by Looting), plus a few emeralds. That's the payoff. A totem only works while it's **in your hand** — main hand or offhand — so the habit is to keep one in your offhand slot at all times once you have them. The next lethal hit consumes it instead of killing you: you snap back to 1 health, all negative effects clear, and you get Regeneration II for 45 seconds, Fire Resistance for 40, and Absorption for 5. One totem, one saved run.

![A Minecraft Totem of Undying, the green item dropped by evokers that revives you once when held.](/images/blog/minecraft/minecraft-woodland-mansion-guide/totem-of-undying.webp)

## The secret loot rooms

Half the fun of a mansion is that it's riddled with **secret rooms hidden behind fake walls and decorative blocks.** Eight types can generate, and they're worth hunting for because two of them hold diamonds. Tap around suspicious dead-end walls, decorative wool patterns, and oddly thick sections — secret rooms are usually sealed behind a thin facade.

| Secret room | What's inside |
| --- | --- |
| Lava room | A **diamond block** sealed in a glass case over lava — the rarest room, and the best find |
| Obsidian room | A **diamond block** hidden inside a box of obsidian — mine in to reach it |
| "Attic" loot room | **Two loot chests** (generates on the upper two floors) |
| "Clean" chest room | A loot chest (first floor only) |
| X-marks room | A chest with loot |
| Spider room | A **spider spawner** in a cobweb-filled room — a threat, not a reward |
| Fake End portal room | A **trapped chest** rigged to drop you onto silverfish, with TNT and 2 ender pearls — a trap |
| Birch pillar room | Purely decorative — no loot |

Two warnings. The **fake End portal room** is a deliberate troll: the portal frame is non-functional, the chest is a *trapped* chest wired to spawn silverfish and detonate TNT, so approach it carefully and break the redstone or mine in from the side. And the **spider room** is a spawner, not loot — light it up or break the spawner before it floods the area. The rooms you actually want are the **lava room and obsidian room** for their diamond blocks (nine diamonds apiece) and the **attic rooms** for double chests.

## How to clear a mansion safely

Put it all together into a method instead of a brawl:

1. **Enter on the ground floor and light the foyer.** The giant entry staircase is your landmark and your fallback. Torch it heavily.
2. **Clear room by room, lighting as you go.** Don't sprint deep. Open a room, deal with whatever's inside (usually a vindicator or two, sometimes a wandering zombie/skeleton from the dark), light it, then move on. Lighting prevents the mansion re-spawning mobs behind you.
3. **Fight in doorways.** Always pull illagers into a one-block choke so only one reaches you at a time, shield up.
4. **Handle evokers immediately and aggressively.** When you hear the spellcasting or see the robe, rush it before the vex swarm builds. Corner it, burst it, grab the totem.
5. **Wall off the floor you're done with.** Block the staircase between floors so nothing follows you up, then clear the next floor the same way. The top floor is about half the size of the lower two.
6. **Sweep for secret rooms last.** Once the mob threat is gone, go back and tap walls for the hidden rooms. No pressure, no time limit — the place is yours now.

Because nothing respawns, a methodical clear is genuinely safe. The deaths happen when players rush an evoker into a vex swarm in a dark room with an unspotted creeper. Slow, lit, and shield-first wins.

## What's actually worth grabbing

Priorities on the way out:

- **Every Totem of Undying.** Non-negotiable. These are the whole reason the trip is worth it.
- **The two diamond blocks** from the lava and obsidian secret rooms, if you find them — 18 diamonds for the price of mining through a wall.
- **Chest loot.** Mansion chests roll a grab bag: emeralds, iron and gold ingots, enchanted books, lead, name tags, music discs, the occasional diamond hoe/tool, and on Java a guaranteed Efficiency I iron axe in the tree-chopping room. Nothing build-defining, but solid mid-game material.
- **Dark oak.** The entire mansion is dark oak logs and planks — one of the rarer woods, available in bulk only here and in the dark forest around it. If you build, strip it.
- **[Allays](/blog/minecraft/minecraft-allay-guide)**, if there are caged ones — these helpful little item-collecting mobs are great for sorting and farms. Free them by breaking the cage.

What to skip: the decorative birch pillar rooms, most of the bulk cobblestone and generic blocks, and the spider spawner unless you specifically want a mob farm.

## Java vs Bedrock notes

The mansion is mostly identical across editions, with a few differences worth knowing:

- **Generation biomes differ slightly.** Both editions generate mansions in dark forests. **Bedrock** additionally generates them in the pale garden and dark forest hills variants.
- **The tree-chopping room loot has a known Bedrock quirk:** on Java it contains a guaranteed Efficiency I iron axe, while on Bedrock that slot is a leather cap instead.
- **Totem and evoker mechanics are the same** on both — evokers always drop a totem, summon three vexes per cast, and the totem revives you once when held in hand. (One tiny Java-only edge case: a tipped arrow of Harming can sometimes punch through the totem's revive.)
- **\`/locate\`** works on both editions with cheats enabled; the woodland explorer map is sold by cartographers on both.

## Mansion raid checklist

- [ ] Buy a woodland explorer map from a master-level cartographer (or use \`/locate structure mansion\`)
- [ ] Pack diamond/netherite Protection IV armor, a Sharpness sword, a bow, and a shield
- [ ] Bring a full stack of torches — the mansion is dark and spawns mobs inside
- [ ] Carry food, golden apples, a bed, and blocks to wall off floors
- [ ] Clear room by room, lighting each room, fighting illagers in doorways
- [ ] Rush evokers aggressively and burst them before the vex swarm builds
- [ ] Grab every Totem of Undying — keep one in your offhand from now on
- [ ] Tap walls for secret rooms; prioritize the lava and obsidian rooms (diamond blocks)
- [ ] Avoid the trapped fake End portal chest; break the spider spawner before it floods
- [ ] Strip the dark oak and clear the chests on your way out`,
  faq: [
    {
      question: 'How do you find a woodland mansion in Minecraft?',
      answer:
        'Woodland mansions only generate in dark forest biomes (plus the pale garden and dark forest hills variants on Bedrock) and they spawn far from the world origin, so you cannot reliably stumble onto one. The intended method is to buy a woodland explorer map from a master-level cartographer villager for emeralds and a compass — it points you toward a mansion, though not always the nearest one, and it can be thousands of blocks away. With cheats enabled you can also run /locate structure mansion to get exact coordinates.',
    },
    {
      question: 'How do you get a Totem of Undying?',
      answer:
        'Totems of Undying are dropped only by evokers, which spawn in woodland mansions and in raids. Every evoker always drops exactly one totem when killed, and the drop is not affected by Looting, so a single mansion clear can net several totems. To use one, hold it in your main hand or offhand — the next hit that would kill you is consumed instead, reviving you to 1 health, clearing debuffs, and granting Regeneration II, Fire Resistance, and Absorption. It does not work sitting in your hotbar unless that slot is selected.',
    },
    {
      question: 'How do you beat an evoker in a woodland mansion?',
      answer:
        'Evokers have only 24 health but they flee from you and cast two spells: evoker fangs that erupt from the ground for 6 damage (you cannot shield these, so move out of the lines), and vex summoning, which spawns three flying vexes at a time that pass through walls. The counter is speed: close the gap, corner the evoker against a wall so it cannot kite, and burst it down with a Sharpness sword or arrows before the vex swarm grows. Ignore the vexes until the evoker is dead, since they stop being replaced once the caster dies.',
    },
    {
      question: 'What loot is in a woodland mansion?',
      answer:
        'The headline loot is Totems of Undying from the evokers. The mansion also hides secret rooms behind fake walls: a lava room and an obsidian room each contain a diamond block (nine diamonds), and attic rooms hold two chests each. Ordinary chests roll emeralds, iron and gold, enchanted books, leads, name tags, music discs, and on Java a guaranteed Efficiency I iron axe. The whole structure is built from dark oak you can harvest, and some mansions cage allays you can free.',
    },
    {
      question: 'Do vindicators and evokers respawn in a mansion?',
      answer:
        'No. The vindicators and evokers that generate inside a woodland mansion spawn once and do not respawn after they are killed, which means a mansion can be permanently cleared and even claimed as a base. The only thing that keeps spawning is regular hostile overworld mobs (zombies, skeletons, creepers, spiders) in the dark, unlit rooms — so lighting the mansion as you clear it stops it from repopulating behind you.',
    },
    {
      question: 'What are the secret rooms in a woodland mansion?',
      answer:
        'Eight secret room types can generate behind fake walls. The two best are the lava room (a diamond block in a glass case over lava, the rarest) and the obsidian room (a diamond block inside an obsidian box). Attic rooms hold two loot chests, and there are simpler chest rooms too. Watch for traps: the fake End portal room has a trapped chest wired to spawn silverfish and detonate TNT, and the spider room contains a spider spawner. The birch pillar room is purely decorative.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/minecraft-hostile-mobs-guide', anchor: 'Minecraft hostile mobs guide' },
    { href: '/blog/minecraft/best-minecraft-enchantments', anchor: 'Best enchantments for your raid gear' },
    { href: '/blog/minecraft/minecraft-villager-trading-guide', anchor: 'Villager trading guide for explorer maps' },
    { href: '/blog/minecraft/minecraft-armor-guide', anchor: 'Minecraft armor guide' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Woodland_Mansion',
      title: 'Minecraft Wiki — woodland mansion generation, rooms, and loot',
    },
    {
      url: 'https://minecraft.wiki/w/Evoker',
      title: 'Minecraft Wiki — evoker spells, vexes, and totem drop',
    },
    {
      url: 'https://minecraft.wiki/w/Totem_of_Undying',
      title: 'Minecraft Wiki — Totem of Undying effects and mechanics',
    },
  ],
  tldr:
    'A woodland mansion is a rare dark oak structure in dark forest biomes, far from spawn — find one with a woodland explorer map from a cartographer or /locate structure mansion. Inside, vindicators (axe-wielding illagers) guard the halls and evokers (24 HP spellcasters that summon vexes and conjure fangs) drop the Totem of Undying, which revives you once when held in hand. Clear it room by room with a shield, light everything to stop mob spawns, and rush evokers aggressively to cut off the vex swarm. Hunt the secret rooms for two hidden diamond blocks, but avoid the trapped fake End portal room.',
  itemList: {
    name: 'Woodland Mansion Raid — Threats and Loot',
    items: [
      { name: 'Find the mansion', description: 'Buy a woodland explorer map from a master cartographer; mansions only generate in dark forests far from spawn.' },
      { name: 'Vindicator', description: 'Axe-wielding melee illager guarding the halls. Block with a shield and fight in doorways. Does not respawn.' },
      { name: 'Evoker', description: '24 HP spellcaster that flees, casts fangs, and summons 3 vexes at a time. Rush and burst it; always drops a Totem of Undying.' },
      { name: 'Totem of Undying', description: 'Hold in hand to revive once from a lethal hit at 1 HP with Regeneration II, Fire Resistance, and Absorption. The main reward.' },
      { name: 'Secret diamond rooms', description: 'The lava room and obsidian room each hide a diamond block (9 diamonds) behind fake walls.' },
      { name: 'Avoid the fake End portal', description: 'A trapped chest rigged with silverfish and TNT — break the redstone or mine in from the side.' },
    ],
  },
};
