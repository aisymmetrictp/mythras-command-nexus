import type { BlogPost } from '../../blogTypes';

export const minecraftStatusEffectsGuide: BlogPost = {
  slug: 'minecraft-status-effects-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-guides',
  tags: ['status effects', 'potions', 'brewing', 'buffs', 'reference'],
  title: 'Minecraft Status Effects Guide: Every Buff and Debuff',
  metaDescription:
    'Every Minecraft status effect explained: what Speed, Haste, Regeneration, Poison, Wither, and the rest do, how to get them, and how to clear them with milk.',
  excerpt:
    "There are 40 status effects in Minecraft, and most players only ever meet a dozen of them. This is the full reference — every buff, every debuff, what actually does what, and the one rule that saves your life: milk clears everything.",
  featuredImagePrompt:
    "A Minecraft player's inventory screen showing several active status effect icons stacked down the left side, with a brewing stand and glowing potion bottles nearby",
  heroImage: '/images/blog/minecraft/minecraft-status-effects-guide/potion-effect-screen.webp',
  heroImageAlt:
    'A Minecraft screen showing active status effect icons and their timers — the buffs and debuffs that potions, food, beacons, and mobs apply.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-status-effects-guide/potion-effect-screen.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Potion',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-status-effects-guide/potion-colors.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Potion',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-status-effects-guide/brewing-chart.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Brewing',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-status-effects-guide/potion-table.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Potion',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-30T00:00:00.000Z',
  lastUpdated: '2026-06-30T00:00:00.000Z',
  primaryKeyword: 'minecraft status effects',
  secondaryKeywords: [
    'minecraft effects list',
    'minecraft potion effects',
    'minecraft buffs and debuffs',
    'how to remove status effects minecraft',
    'minecraft negative effects',
    'what does poison do minecraft',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'how-status-effects-actually-work', label: 'How status effects actually work', level: 2 },
    { id: 'the-positive-effects-worth-chasing', label: 'The positive effects worth chasing', level: 2 },
    { id: 'movement-and-mining-buffs', label: 'Movement and mining buffs', level: 3 },
    { id: 'combat-and-survival-buffs', label: 'Combat and survival buffs', level: 3 },
    { id: 'the-negative-effects-that-kill-you', label: 'The negative effects that kill you', level: 2 },
    { id: 'poison-vs-wither-the-key-difference', label: 'Poison vs Wither: the key difference', level: 3 },
    { id: 'the-newer-omen-and-mace-effects', label: 'The newer omen and mace effects', level: 2 },
    { id: 'how-to-remove-a-status-effect', label: 'How to remove a status effect', level: 2 },
    { id: 'amplifiers-and-the-level-vs-amplifier-trap', label: 'Amplifiers and the level-vs-amplifier trap', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Poison cannot kill you. Wither can. That one distinction has decided more Minecraft survival runs than any amount of diamond gear, and most players learn it the hard way — panicking over a green swirl that was never going to drop them below half a heart, or ignoring a black swirl that absolutely was. Status effects are the invisible layer of the game that quietly wins or loses fights, and knowing which swirl means what is the difference between chugging a milk bucket at the right moment and dying with a full inventory of potions you never drank.

As of the current version there are **40 status effects** in the game, and the newest one — Breath of the Nautilus — was added in the Mounts of Mayhem drop. The vast majority of players interact with maybe a dozen. This is the full reference: every buff, every debuff, what each one actually does, where it comes from, and the handful of rules (milk clears everything, amplifiers are off by one, opposing effects can stack) that separate people who understand the system from people who just drink whatever the witch dropped. Every effect and behavior here is checked against the Minecraft Wiki.

## How status effects actually work

An effect is a helpful or harmful condition applied to a living entity for a set duration. While it is active, spiral particles trail off the affected entity, and for most effects a higher level means a stronger effect. Effects come from a lot of sources: drinking potions, eating certain foods, standing near a [beacon](/blog/minecraft/minecraft-beacon-guide) or a [conduit](/blog/minecraft/minecraft-conduit-guide), getting hit by or standing near certain mobs, and special triggers like killing a raid captain.

A few core rules govern all of them:

- **You can hold many effects at once**, including opposing ones. Strength and Weakness can both be active — they just partially cancel. What you cannot do is stack two copies of the same effect; a higher level or longer duration simply overwrites the weaker one.
- **Effect damage bypasses armor.** Poison, Wither, and Instant Damage ignore your armor points entirely (though Protection enchantments still soften them). This is why a diamond-armored player can still get chipped down by a witch's poison.
- **Some mobs are immune.** The ender dragon and the wither are immune to every effect. Undead mobs (zombies, skeletons, etc.) are immune to Regeneration and Poison. Witches take 85% less effect damage in Java, 95% less in Bedrock.

![A Minecraft player's screen showing active potion effects in-game, each with its own icon and remaining timer.](/images/blog/minecraft/minecraft-status-effects-guide/potion-effect-screen.webp)

In Java, positive effects show blue text and sit on the top row of your HUD; negative and neutral effects show red or blue text on the bottom row. That color-coding is a quick way to read a stacked effect list at a glance.

## The positive effects worth chasing

These are the buffs you actively brew for or build beacons around. Most come from [potions](/blog/minecraft/minecraft-potion-brewing-guide), which are the primary delivery system for effects in the game.

### Movement and mining buffs

- **Speed** — increases walking speed and widens your field of view. The Potion of Swiftness, or Speed from a beacon.
- **Haste** — increases mining and attack speed. Haste II from a max beacon lets an Efficiency V pickaxe instamine deepslate.
- **Jump Boost** — raises jump height and reduces fall damage. From the Potion of Leaping.
- **Slow Falling** — drastically slows your descent and negates all fall damage. Brewed with a phantom membrane; it is the single best insurance against a bad Elytra landing.
- **Dolphin's Grace** (Java only) — a big swimming-speed boost, obtainable only by swimming next to dolphins.
- **Conduit Power** — the underwater bundle: water breathing, underwater night vision, and faster underwater mining, from an activated conduit.

### Combat and survival buffs

- **Strength** — increases melee damage. Turns a netherite sword into a blender.
- **Regeneration** — heals health over time; higher levels heal faster. From the Potion of Regeneration, golden apples, and the beacon secondary slot.
- **Instant Health** — heals immediately, and damages undead mobs (it is the reverse for them).
- **Resistance** — flatly reduces incoming damage. Resistance V makes you fully immune to most non-void damage.
- **Fire Resistance** — full immunity to fire, lava, and magma damage. Non-negotiable for Nether work.
- **Water Breathing** — you cannot drown and can breathe underwater.
- **Absorption** — extra yellow hearts that soak damage but do not regenerate. From golden apples.
- **Health Boost** — raises your maximum health above 20.
- **Night Vision** — see clearly in the dark and underwater.
- **Invisibility** — you go invisible (held items and worn armor still show) and mobs detect you at shorter range.
- **Saturation** — instantly restores hunger and saturation; mostly a command/food-only effect.
- **Luck** (Java only) — nudges loot tables toward better drops when fishing and opening certain chests.
- **Hero of the Village** — trade discounts from villagers, earned by winning a raid.
- **Breath of the Nautilus** — the newest effect; pauses your oxygen bar so you cannot drown.

![The full set of Minecraft potion colors, one per brewable effect — a quick visual key for what a given potion does.](/images/blog/minecraft/minecraft-status-effects-guide/potion-colors.webp)

## The negative effects that kill you

These are the debuffs mobs and traps throw at you. Some are annoying; a couple are genuinely lethal.

- **Slowness** — slower walking, narrower FOV. From witches, and useful thrown at enemies.
- **Mining Fatigue** — slower mining and attacking. Elder guardians inflict Mining Fatigue III to sabotage monument drains.
- **Instant Damage** — immediate damage (and it heals undead). The Potion of Harming.
- **Nausea** — warps and wobbles your screen. From pufferfish and the warden.
- **Blindness** — kills your vision range and disables sprinting and critical hits. From the warden and cave vibes.
- **Hunger** — drains your food bar faster. From rotten flesh and certain mobs.
- **Weakness** — reduces your melee damage (and is the effect you deliberately apply to cure a zombie villager).
- **Poison** — damage over time that cannot kill you (it stops at half a heart).
- **Wither** — damage over time that **can** kill you, straight to zero.
- **Levitation** — floats you upward involuntarily, from shulkers. Deadly indirectly, since you take fall damage when it ends.
- **Darkness** — pulses your screen dark. The warden's signature intimidation effect in the [deep dark](/blog/minecraft/minecraft-deep-dark-warden-guide).
- **Bad Luck** (Java only) — the inverse of Luck; worse loot.

### Poison vs Wither: the key difference

This is the single most important thing in this entire guide, so it gets its own section. **Poison inflicts damage over time but physically cannot kill you** — no matter how long it ticks, it stops when you hit half a heart. **Wither also inflicts damage over time, but it can and will take you to zero.** Both bypass armor. Both show a swirl.

The practical upshot: if you are poisoned and above half a heart, you are annoyed, not dying — you can finish the fight and heal after. If you are withered, drop everything and cure it, because it does not have a floor. Poison also does not affect undead mobs at all, and undead are immune to Regeneration too. If you want a green swirl that hurts, the Potion of Poison is your tool; if you want something that actually finishes a target, that is a different toolkit entirely.

## The newer omen and mace effects

Recent updates piled on a cluster of situational effects tied to raids, trial chambers, and the mace. These trip up players who have not touched the game in a while:

- **Bad Omen** — you get it from killing a raid captain. It is now a neutral "primed" state: walk into a village and it becomes **Raid Omen** (starts a pillager raid); walk near a [trial spawner](/blog/minecraft/minecraft-trial-chambers-guide) and it becomes **Trial Omen** (turns spawners ominous for tougher fights and better loot).
- **Raid Omen** — triggers an illager raid when you enter a village; higher levels mean a harder raid.
- **Trial Omen** — converts all trial spawners nearby into ominous trial spawners.
- **Wind Charged** — when a mob with this effect dies, it releases a wind charge explosion.
- **Weaving** — a dying mob spawns cobwebs, and lets you move through cobwebs faster.
- **Oozing** — a dying mob spawns slimes.
- **Infested** — a damaged mob has a chance to spawn silverfish.
- **Glowing** (Java) — outlines an entity so you can see it through blocks.

The four "on death" effects (Wind Charged, Weaving, Oozing, Infested) all come from the ominous trial chamber's ominous vaults and the bogged/breeze ecosystem — they are combat-modifier debuffs, applied to mobs, that change what happens when those mobs die.

## How to remove a status effect

When Poison, Wither, or any bad swirl is stacking up, you have one reliable panic button: **drink a milk bucket**. Milk instantly clears **all** status effects, good and bad. The catch is that it clears the good ones too, so if you are buffed for a boss fight, milk is a nuclear option that resets you to zero.

The other things that wipe every effect:

- **Dying** (obviously — you respawn clean).
- **Being saved by a Totem of Undying.**
- **Traveling through the End exit portal.**
- **The /effect clear command** (Java: \`effect clear <player>\`; Bedrock: \`effect <player> clear\`), which can even target a single effect in Java.

![The full Minecraft brewing chart — every potion recipe branching from Awkward Potion, showing what ingredient produces each effect.](/images/blog/minecraft/minecraft-status-effects-guide/brewing-chart.webp)

For a targeted cure without nuking your buffs, milk is blunt but instant. Keep a stack in your hotbar for the Nether and for cave dives — a single bucket has saved more players from a Wither swirl than any amount of golden apples.

## Amplifiers and the level-vs-amplifier trap

One last thing that trips up anyone messing with commands or custom potions. The game stores an **amplifier** value that is **one less than the displayed level**. Strength II is amplifier 1. Speed I is amplifier 0. So when you run \`/effect give @s strength 30 1\`, you are asking for Strength **II**, not Strength I — the number you type is the amplifier, and the game adds one for the display.

![The brewing stand interface where potions are made — the source of nearly every status effect in the game.](/images/blog/minecraft/minecraft-status-effects-guide/potion-table.webp)

There is a deeper gotcha in Java: because of how the amplifier is stored, amplifier values from 128 to 255 wrap around and behave like negative levels, which leads to bizarre results with hand-edited NBT potions. You will only ever hit this if you are building custom items, but it explains why some "Strength 200" potions do nothing useful. For normal play, just remember the display-level is always one higher than the amplifier you type into a command. If you are new to brewing and want the actual recipes rather than the effect list, start with the [potion brewing guide](/blog/minecraft/minecraft-potion-brewing-guide).

## Quick Action Checklist

- [ ] Keep a milk bucket in your hotbar — it clears every effect, good and bad, instantly
- [ ] Learn the one rule: Poison cannot kill you (stops at half a heart), Wither can (goes to zero)
- [ ] Remember effect damage bypasses armor — Protection enchantments still help
- [ ] Carry Fire Resistance for the Nether and Water Breathing (or a conduit) for the ocean
- [ ] Brew Slow Falling before any serious Elytra flight
- [ ] Do not drink milk mid-fight if you are relying on Strength or Resistance — it wipes those too
- [ ] When using /effect, remember the number you type is the amplifier (one below the displayed level)
- [ ] Kill a raid captain only when you are ready — Bad Omen turns into a raid or ominous trial spawners`,
  faq: [
    {
      question: 'How many status effects are in Minecraft?',
      answer:
        'There are 40 status effects in the current version of Minecraft, ranging from common buffs like Speed, Strength, and Regeneration to newer situational effects like Bad Omen, Trial Omen, and the on-death effects (Wind Charged, Weaving, Oozing, Infested). The newest, Breath of the Nautilus, was added in the Mounts of Mayhem drop. Effects come from potions, food, beacons, conduits, and mob interactions.',
    },
    {
      question: 'How do you remove a status effect in Minecraft?',
      answer:
        'The fastest way is to drink a milk bucket, which instantly clears all status effects — both good and bad. Effects are also wiped when you die, when a Totem of Undying saves you, and when you travel through the End exit portal. With cheats on, the /effect clear command removes effects (and in Java can target a single effect). The catch with milk is that it removes your buffs too, so avoid it mid-fight if you are relying on Strength or Resistance.',
    },
    {
      question: 'What is the difference between Poison and Wither in Minecraft?',
      answer:
        'Poison inflicts damage over time but cannot kill you — it stops when you drop to half a heart. Wither also inflicts damage over time but can take you all the way to zero. Both bypass armor and both show a swirl, but only Wither is actually lethal on its own. Poison also does not affect undead mobs at all, while Wither can. If you are poisoned above half a heart you are safe to finish a fight; if you are withered, cure it immediately.',
    },
    {
      question: 'What is the difference between a status effect level and amplifier?',
      answer:
        'The amplifier is an internal value that is always one less than the displayed level. Strength II has an amplifier of 1, and Speed I has an amplifier of 0. This matters when using the /effect command: the number you type is the amplifier, so "effect give @s strength 30 1" gives Strength II, not Strength I. In Java, very high amplifier values (128 and up) wrap around into negative-level behavior, which is why some hand-edited potions produce broken results.',
    },
    {
      question: 'Can you have opposing status effects at the same time?',
      answer:
        'Yes. Any number of different effects can be active at once, including opposing pairs like Strength and Weakness, which partially cancel each other. What you cannot do is stack two copies of the same effect — applying Strength while Strength II is active simply keeps the higher level, and a longer duration overwrites a shorter one of the same level. The ender dragon and wither are immune to all effects, and undead mobs are immune to Poison and Regeneration.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/minecraft-potion-brewing-guide', anchor: 'Potion brewing guide' },
    { href: '/blog/minecraft/minecraft-beacon-guide', anchor: 'Beacon guide' },
    { href: '/blog/minecraft/minecraft-conduit-guide', anchor: 'Conduit guide' },
    { href: '/blog/minecraft/minecraft-trial-chambers-guide', anchor: 'Trial chambers guide' },
    { href: '/blog/minecraft/minecraft-deep-dark-warden-guide', anchor: 'Deep dark and warden guide' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Effect',
      title: 'Minecraft Wiki — full status effect list and behavior',
    },
    {
      url: 'https://minecraft.wiki/w/Potion',
      title: 'Minecraft Wiki — potions and how effects are delivered',
    },
    {
      url: 'https://minecraft.wiki/w/Brewing',
      title: 'Minecraft Wiki — brewing recipes for every potion effect',
    },
  ],
  tldr:
    'Minecraft has 40 status effects. The most important rule: Poison cannot kill you (it stops at half a heart) but Wither can (it goes to zero), and both bypass armor. Positive effects like Speed, Haste, Strength, Regeneration, and Fire Resistance come mainly from potions, beacons, and conduits; negative ones like Slowness, Mining Fatigue, and Darkness come from mobs and traps. A milk bucket instantly clears every effect, good and bad — keep one in your hotbar. When using the /effect command, the number you type is the amplifier, which is one less than the displayed level.',
  itemList: {
    name: 'Key Minecraft Status Effects',
    items: [
      { name: 'Regeneration', description: 'Positive — heals health over time. From potions, golden apples, and beacons.' },
      { name: 'Fire Resistance', description: 'Positive — full immunity to fire and lava. Essential for the Nether.' },
      { name: 'Strength', description: 'Positive — increases melee damage.' },
      { name: 'Conduit Power', description: 'Positive — water breathing, underwater night vision, and faster underwater mining from a conduit.' },
      { name: 'Poison', description: 'Negative — damage over time that cannot kill you; stops at half a heart, ignores undead.' },
      { name: 'Wither', description: 'Negative — damage over time that CAN kill you, all the way to zero.' },
      { name: 'Mining Fatigue', description: 'Negative — slows mining and attacking. Elder guardians inflict Mining Fatigue III.' },
      { name: 'Bad Omen', description: 'Neutral — becomes a Raid Omen near villages or a Trial Omen near trial spawners.' },
    ],
  },
};
