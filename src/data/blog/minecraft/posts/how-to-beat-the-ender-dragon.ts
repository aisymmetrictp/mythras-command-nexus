import type { BlogPost } from '../../blogTypes';

export const howToBeatTheEnderDragon: BlogPost = {
  slug: 'how-to-beat-the-ender-dragon',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-progression',
  tags: ['endgame', 'ender dragon', 'the end', 'boss fight'],
  title: 'How to Beat the Ender Dragon: A Complete Guide',
  metaDescription:
    'A complete Ender Dragon guide: the prep checklist, finding the stronghold and End portal, destroying the End crystals, the fight phases, and the elytra route.',
  excerpt:
    "The Ender Dragon is the closest thing Minecraft has to a final boss, and the fight is genuinely winnable on your first try if you prep right. Here is the full run: gear checklist, finding the portal, killing the crystals that heal her, the two fight phases, and what to grab after.",
  featuredImagePrompt:
    'The blocky black Ender Dragon flying over the central obsidian pillars of the End, purple End crystals glowing on the towers, a player in diamond armor aiming a bow upward, the void and End stone island below',
  heroImage: '/images/blog/minecraft/how-to-beat-the-ender-dragon/ender-dragon.webp',
  heroImageAlt:
    'The Ender Dragon, the black winged boss of the End dimension and the closest thing Minecraft has to a final boss.',
  imageSources: [
    {
      src: '/images/blog/minecraft/how-to-beat-the-ender-dragon/ender-dragon.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Ender_Dragon',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/how-to-beat-the-ender-dragon/end-crystal.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/End_Crystal',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/how-to-beat-the-ender-dragon/end-portal.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/End_Portal',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-05-30T00:00:00.000Z',
  lastUpdated: '2026-05-30T00:00:00.000Z',
  primaryKeyword: 'how to beat the ender dragon',
  secondaryKeywords: [
    'ender dragon guide',
    'how to find the stronghold',
    'how to kill the ender dragon',
    'ender dragon fight phases',
    'how to destroy end crystals',
    'how to get to the end minecraft',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'what-youre-actually-fighting', label: 'What you\'re actually fighting', level: 2 },
    { id: 'the-prep-checklist', label: 'The prep checklist', level: 2 },
    { id: 'finding-the-stronghold-and-the-end-portal', label: 'Finding the stronghold and the End portal', level: 2 },
    { id: 'activating-the-portal-and-entering-the-end', label: 'Activating the portal and entering the End', level: 2 },
    { id: 'step-one-destroy-the-end-crystals', label: 'Step one: destroy the End crystals', level: 2 },
    { id: 'the-fight-phases-and-what-to-do', label: 'The fight: phases and what to do', level: 2 },
    { id: 'common-ways-people-die', label: 'Common ways people die', level: 2 },
    { id: 'after-the-kill-egg-gateway-and-elytra', label: 'After the kill: egg, gateway, and elytra', level: 2 },
    { id: 'java-vs-bedrock-notes', label: 'Java vs Bedrock notes', level: 2 },
    { id: 'ender-dragon-prep-checklist', label: 'Ender Dragon prep checklist', level: 2 },
  ],
  content: `The Ender Dragon is the closest thing Minecraft has to a final boss, and here is the part nobody tells nervous first-timers: it is genuinely beatable on your first attempt. The fight rewards preparation over reflexes. If you show up with the right gear and you understand the one mechanic that actually matters — the crystals that heal her — you will win. Show up with iron armor and a stone sword because you got impatient, and you will feed the void a full inventory.

This is the complete run from "I have never been to the End" to "I'm standing on the egg." Prep, finding the portal, the crystals, the two phases, and what to grab on the way out.

## What you're actually fighting

The Ender Dragon lives in the End, a separate dimension of pale End stone islands floating in a black void. The boss arena is a central island studded with tall obsidian pillars. On top of most pillars sits an **End crystal**, and those crystals are the whole reason the fight has any difficulty.

Each crystal continuously heals the dragon. As long as one is active, she regenerates faster than you can realistically damage her. The fight is really two jobs: **destroy every crystal**, then kill the now-unhealed dragon. New players who ignore the crystals and just swing at the dragon are wondering why her health bar refuses to drop. That is the entire trick.

She attacks by swooping at you, knocking you back with her body and wings, and breathing a cloud of purple Dragon's Breath that lingers on the ground and hurts to stand in. She can also shoot a damaging acid-like fireball. None of it is fast — it is the void below and the chip damage that kill you, not raw burst.

## The prep checklist

Do not skimp here. The single biggest predictor of a clean kill is what you walked in with.

**Armor and weapons:**
- **Full diamond armor at minimum, netherite if you have it.** Protection enchantments matter a lot; Feather Falling on the boots is close to mandatory because fall and knockback are constant.
- **A good sword** (Sharpness-enchanted diamond or netherite) for the melee phase.
- **A bow or crossbow with a stack-plus of arrows.** This is your primary tool for shooting the high crystals and chipping the dragon when she perches. Power and Punch help.

**Consumables and tools:**
- **A stack of blocks you can pillar with** — cobblestone, dirt, or End stone work. You will tower up to reach crystals.
- **A water bucket** to break your fall and cancel fall damage when you come down.
- **Food** — golden carrots or steak, plenty of it.
- **Ender pearls**, 6–10 if you can. They are an emergency "get back onto the island" button if you get knocked toward the void.
- **A bed is a trap.** Beds explode in the End and Nether. Do not sleep; do not try to use one as a weapon unless you specifically know the bed-bombing technique and accept the risk.

**Strongly recommended potions:**
- **Healing or Regeneration splash potions** for emergencies.
- **Slow Falling potions** — these turn the scariest part of the fight (getting launched off a pillar) into a non-event.
- **Strength** for faster melee kills.

You also need a **pile of Eyes of Ender — bring at least 12 to 15.** You spend some finding the stronghold and need exactly enough to fill the End portal frame (up to 12). Eyes are crafted from blaze powder (from blaze rods) plus ender pearls.

![An Eye of Ender, which you throw to locate the stronghold and then place to activate the End portal.](/images/blog/minecraft/how-to-beat-the-ender-dragon/eye-of-ender.webp)

## Finding the stronghold and the End portal

The End portal is not something you build — it already exists, sitting inside a **stronghold**, an underground structure generated somewhere in your world. The portal frame is there; you just have to find it and activate it.

You find it with **Eyes of Ender**. Throw one into the air and it floats in the direction of the nearest stronghold, then either drops to the ground (so you can pick it back up — there is a chance it shatters) or hovers. The technique:

1. Throw an Eye of Ender and note the direction it flies.
2. Walk that way for a few hundred blocks.
3. Throw another. When the eyes start flying **downward** instead of across, you are basically on top of the stronghold.
4. Dig down carefully (not straight down) and tunnel around until you hit the mossy stone-brick rooms of the stronghold.

Inside, find the **portal room**: a chamber with a square End portal frame suspended over a pool of lava, usually with a silverfish spawner nearby. The frame has 12 slots, some of which may already have Eyes of Ender in them naturally.

## Activating the portal and entering the End

![An active End portal, the starry gateway inside the stronghold that drops you into the End dimension.](/images/blog/minecraft/how-to-beat-the-ender-dragon/end-portal.webp)

Each empty slot in the frame needs an **Eye of Ender** placed into it. Walk around the frame and fill every slot that is missing one — when the last eye goes in, the center fills with a starry portal field and you hear it activate. That is why you bring extra eyes: you do not know in advance how many slots come pre-filled.

Before you jump in, **set your spawn point near the stronghold** (a bed in the Overworld, or just remember the coordinates), because if you die in the End you respawn in the Overworld and have to run all the way back. Mine out the silverfish spawner or wall it off so you are not getting chewed on while you prep. Then step into the portal. There is no going back through the same portal — to leave the End you either die or use the exit portal that appears after the kill.

## Step one: destroy the End crystals

The moment you arrive, you are on a small spawn platform a short distance from the main island. Bridge over to the island. Then, before you throw a single hit at the dragon, deal with the crystals.

![A glowing End crystal, the device perched on the obsidian pillars that heals the Ender Dragon until you destroy it.](/images/blog/minecraft/how-to-beat-the-ender-dragon/end-crystal.webp)

Look up at the obsidian pillars. The crystals sit on top. There are two kinds:

- **Exposed crystals** you can shoot off with a single arrow (or a snowball). Easy — just aim and fire.
- **Caged crystals** behind iron bars on the taller pillars. You cannot shoot these through the cage. You have to tower up the pillar with your blocks, walk to the crystal, and hit it directly — then get down fast, because **destroying a crystal causes an explosion**, so don't be hugging it when it pops. Slow Falling potions make the climb-and-drop safe.

Every active crystal heals the dragon, so until they are all gone her health bar barely moves. Clear them all first. Watch for **Endermen** — do not look directly at them or they aggro, and an angry Enderman during the crystal phase is a real problem. Wear a carved pumpkin on your head if Endermen keep provoking you (it blocks the aggro-on-eye-contact, at the cost of vision).

## The fight: phases and what to do

With the crystals down, the dragon can no longer heal, and the fight becomes a war of attrition you are now winning.

**Perching phase (melee window):** Periodically the dragon flies to the central bedrock fountain in the middle of the island and perches, hovering low. **This is your damage window.** Run in and hit her with your Sharpness sword as fast as you can. A few perches with a strong sword will gut her health bar. Watch for the Dragon's Breath cloud she leaves around the fountain — back out of the purple before it ticks you down.

**Flying phase (ranged window):** When she is airborne, swooping and circling, switch to your bow. Lead your shots and tag her whenever she lines up. You will not do as much damage as the perch melee, but it keeps the bar moving and you whittle her down between perches. Dodge her swoops by sidestepping; the body-slam knockback is what flings people toward the void.

Alternate: bow her in the air, sword her on the perch. Keep your feet on solid ground, keep eating to stay topped up, and do not chase her over the edge. The fight ends when the bar empties — she rises into the air, beams of light burst out of her, and she explodes into a massive shower of experience.

## Common ways people die

- **The void.** Getting knocked off the island or off a pillar with no Slow Falling, no water bucket, and no ender pearl. This is the number one killer. Bring the safety tools and stay away from edges.
- **Forgetting the crystals.** Swinging at the dragon while she heals to full off four caged crystals. You will run out of arrows and patience before she runs out of health.
- **Angry Endermen.** Looking at them, getting swarmed mid-crystal-climb. Pumpkin head or careful eyes.
- **Standing in Dragon's Breath.** The purple cloud does steady damage. It looks harmless. It is not.
- **A bed.** Trying to sleep, or mishandling a bed bomb, and blowing yourself up. Beds detonate in the End.

## After the kill: egg, gateway, and elytra

When the dragon dies the first time, three things appear:

1. **The exit portal** opens at the central fountain — step into it to return to the Overworld with your loot and the win.
2. **The Dragon Egg** spawns on top of the fountain as a trophy. Heads up: you cannot mine it directly — it teleports when you hit it. The standard grab is to break the block under it so it drops, or use a piston to push it. It is purely a trophy, but it is the one in the world unless you respawn the dragon.
3. **An End Gateway portal** appears off to the side. Throw an ender pearl into it to teleport to the **outer End islands** — the sprawling End stone islands where End cities generate.

Those End cities are the reason the dragon is not really the end of the game: they contain **End ships**, and on an End ship hangs the **elytra**, the wings that let you glide and (with firework rockets) fly across the world. Beating the dragon is the gate to the elytra, which is the single biggest upgrade to how you travel in Minecraft. So clear the dragon, grab the egg for the mantel, then pearl through the gateway and go hunting for your wings.

## Java vs Bedrock notes

The fight is essentially the same on both editions, with small differences:

- **Dragon health and damage feel slightly different** between editions, and Java's attack-cooldown timer means your sword only deals full damage on a fully charged swing — time your perch hits. Bedrock has no cooldown.
- **Bed bombing** (using exploding beds as a high-damage weapon against the perched dragon) works on both but the timing and damage differ; it is an advanced, risky tactic, not a beginner plan.
- **Respawning the dragon** with four End crystals around the exit portal works on both editions if you want another egg-less rematch (you only ever get one egg per world from the first kill).
- **Elytra and End cities** generate and work the same way on both — the gateway-to-outer-islands route is identical.

## Ender Dragon prep checklist

- [ ] Full diamond/netherite armor, ideally with Protection and Feather Falling
- [ ] Sharpness sword + bow/crossbow with a stack-plus of arrows
- [ ] 12–15 Eyes of Ender (find the stronghold AND fill the portal)
- [ ] Blocks to pillar up, a water bucket, and 6–10 ender pearls
- [ ] Slow Falling, Healing/Regen, and Strength potions
- [ ] Plenty of food (golden carrots or steak)
- [ ] Set your spawn near the stronghold before entering the End
- [ ] In the End: destroy EVERY crystal first, then fight
- [ ] Sword her on the perch, bow her in the air, stay off the edges
- [ ] After: step into the exit portal, grab the egg, pearl through the gateway for elytra`,
  faq: [
    {
      question: 'How do I find the Ender Dragon?',
      answer:
        'You reach the Ender Dragon through an End portal, which sits inside a stronghold somewhere underground in your world. Find the stronghold by throwing Eyes of Ender — they float toward the nearest one. Follow them until they start flying downward, dig down nearby, and find the portal room. Fill any empty slots in the portal frame with Eyes of Ender to activate it, then step through into the End, where the dragon lives.',
    },
    {
      question: 'Why does the Ender Dragon keep healing?',
      answer:
        'The End crystals on top of the obsidian pillars heal her. As long as even one crystal is active, she regenerates faster than you can damage her, which is why new players feel like her health bar never drops. Before attacking the dragon, destroy every crystal — shoot the exposed ones with arrows and climb the pillars to hit the caged ones (stand back, they explode). Once all crystals are gone, she can no longer heal and the fight becomes straightforward.',
    },
    {
      question: 'What gear do I need to beat the Ender Dragon?',
      answer:
        'At minimum: full diamond armor (netherite is better) with Protection and Feather Falling, a Sharpness sword, and a bow with a full stack of arrows. Also bring blocks to pillar up to the caged crystals, a water bucket to cancel fall damage, ender pearls to recover from the void, food, and ideally Slow Falling and Healing potions. You also need 12 to 15 Eyes of Ender to find the stronghold and activate the portal.',
    },
    {
      question: 'How do the Ender Dragon fight phases work?',
      answer:
        'After the crystals are down, the dragon alternates between flying and perching. When she perches on the central bedrock fountain she hovers low — that is your melee window, so rush in and hit her with your sword. When she is flying and swooping, switch to your bow and tag her between passes. Avoid the purple Dragon’s Breath cloud she leaves behind, dodge her body-slam knockback so you are not flung into the void, and keep alternating until her health bar empties.',
    },
    {
      question: 'What do I get for beating the Ender Dragon?',
      answer:
        'A huge burst of experience, an exit portal back to the Overworld, the Dragon Egg trophy on top of the fountain, and an End Gateway portal off to the side. Throw an ender pearl into the gateway to reach the outer End islands, where End cities and End ships generate. The big prize there is the elytra, the wings on End ships that let you glide and fly across the world — the single biggest travel upgrade in the game.',
    },
    {
      question: 'Can you respawn the Ender Dragon?',
      answer:
        'Yes. Place four End crystals around the central exit portal (one on each side) and they will resummon the dragon for another fight, restoring the pillars and crystals. This works on both Java and Bedrock. Note that you only ever get one Dragon Egg per world from the very first kill — respawned dragons do not drop another egg, though they do give experience and let you practice the fight.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/best-minecraft-enchantments', anchor: 'Best Minecraft enchantments for your endgame gear' },
    { href: '/blog/minecraft/how-to-find-diamonds-minecraft', anchor: 'How to find diamonds fast for your armor' },
    { href: '/blog/minecraft/minecraft-survival-guide-beginners', anchor: 'Minecraft survival guide for beginners' },
    { href: '/blog/minecraft/best-minecraft-seeds', anchor: 'Best Minecraft seeds' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Ender_Dragon',
      title: 'Minecraft Wiki — Ender Dragon mechanics, phases, and crystals',
    },
    {
      url: 'https://minecraft.wiki/w/Stronghold',
      title: 'Minecraft Wiki — strongholds and locating the End portal',
    },
    {
      url: 'https://minecraft.wiki/w/Eye_of_Ender',
      title: 'Minecraft Wiki — Eyes of Ender, finding strongholds, activating the portal',
    },
  ],
  tldr:
    'To beat the Ender Dragon: prep full diamond/netherite armor, a Sharpness sword, a bow with arrows, blocks, a water bucket, ender pearls, and potions, plus 12–15 Eyes of Ender. Throw eyes to find the stronghold, fill the End portal, and enter the End. Destroy every End crystal first (they heal her), then sword her on the perch and bow her in the air while dodging the void. After the kill, grab the egg and pearl through the End Gateway to find elytra in an End city.',
};
