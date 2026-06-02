import type { BlogPost } from '../../blogTypes';

export const minecraftPotionBrewingGuide: BlogPost = {
  slug: 'minecraft-potion-brewing-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-progression',
  tags: ['brewing', 'potions', 'alchemy', 'nether', 'progression'],
  title: 'Minecraft Potion Brewing Guide: Every Potion Worth Making',
  metaDescription:
    'A Minecraft brewing guide: the brewing stand workflow, the Awkward base, key ingredients, the potions worth making, and Redstone/Glowstone/Gunpowder modifiers.',
  excerpt:
    "Most of the potion list is filler you'll never brew. A handful — Fire Resistance, Healing, Strength, Regen, Swiftness — carry your whole game. Here is the brewing stand workflow, the ingredients that matter, and the modifiers that turn a sip into a splash.",
  featuredImagePrompt:
    'A blocky Minecraft brewing stand on a stone table, three glass bottles of glowing red, blue, and orange potion sitting in it, blaze powder fuel beside it, a glowing nether wart in a stone trough in the background',
  heroImage: '/images/blog/minecraft/minecraft-potion-brewing-guide/brewing-stand.webp',
  heroImageAlt:
    'A Minecraft brewing stand, the block you fuel with blaze powder and load with water bottles to brew every potion in the game.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-potion-brewing-guide/brewing-stand.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Brewing_Stand',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-potion-brewing-guide/nether-wart.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Nether_Wart',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-potion-brewing-guide/blaze-powder.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Blaze_Powder',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-02T00:00:00.000Z',
  lastUpdated: '2026-06-02T00:00:00.000Z',
  primaryKeyword: 'minecraft potion brewing guide',
  secondaryKeywords: [
    'minecraft brewing guide',
    'how to brew potions minecraft',
    'best potions minecraft',
    'minecraft potion recipes',
    'how to make splash potions minecraft',
    'awkward potion minecraft',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-you-need-before-you-brew-anything', label: 'What you need before you brew anything', level: 2 },
    { id: 'the-brewing-stand-workflow', label: 'The brewing stand workflow', level: 2 },
    { id: 'the-awkward-potion-is-the-base-for-everything', label: 'The Awkward potion is the base for everything', level: 2 },
    { id: 'the-key-ingredients-and-where-they-come-from', label: 'The key ingredients and where they come from', level: 2 },
    { id: 'the-potions-actually-worth-brewing', label: 'The potions actually worth brewing', level: 2 },
    { id: 'modifiers-extend-amplify-splash-linger', label: 'Modifiers: extend, amplify, splash, linger', level: 2 },
    { id: 'the-corrupted-potions-fermented-spider-eye', label: 'The corrupted potions (fermented spider eye)', level: 2 },
    { id: 'a-starter-brewing-loadout', label: 'A starter brewing loadout', level: 2 },
    { id: 'java-vs-bedrock-notes', label: 'Java vs Bedrock notes', level: 2 },
    { id: 'quick-brewing-checklist', label: 'Quick brewing checklist', level: 2 },
  ],
  content: `Brewing is the part of Minecraft most players bounce off, and it's a shame, because a single Fire Resistance potion makes the entire Nether trivial and a Strength splash potion can decide a boss fight. The reason people bounce off it is the menu: there are dozens of potions, half of them are useless, and the wiki recipe table looks like a chemistry exam. So most people brew one Healing potion, get confused, and never come back.

Here's the thing — you don't need most of it. The brewing system is wide but shallow: learn one workflow, one base potion, and about eight ingredients, and you've covered every potion that actually matters. This guide cuts the filler. You'll get the brewing stand workflow, the Awkward base that everything is built on, the ingredients worth farming, the specific potions that earn a slot in your inventory, and the modifiers that turn a basic potion into the splash and lingering versions you actually want in combat.

## What you need before you brew anything

Brewing has a hard gate, and it's the Nether. You cannot brew without:

- **A brewing stand**, crafted from 3 cobblestone and **1 blaze rod.** Blaze rods only drop from blazes in nether fortresses, so a [Nether trip](/blog/minecraft/minecraft-nether-guide) is mandatory before you brew anything.
- **Blaze powder**, made by crafting a blaze rod into 2 powder. This is the **fuel** that runs the stand — it does not go into the potion, it powers the burner. One blaze powder fuels roughly 20 brewing operations on Java.
- **Nether wart**, the base ingredient for nearly every potion. It grows on soul sand and you usually find your first batch in nether fortress stairwells. Grab some and farm it at home — you'll need a steady supply.
- **Glass bottles**, three at a time, filled with **water** from a water source or cauldron. Water bottles are the blank canvas every potion starts as.

![A glowing nether wart — grown on soul sand, this is the ingredient that turns a water bottle into the Awkward base for almost every potion.](/images/blog/minecraft/minecraft-potion-brewing-guide/nether-wart.webp)

Notice the theme: blaze rods, blaze powder, nether wart, soul sand — brewing is gated almost entirely behind the Nether. That's not a coincidence. The game wants you geared and through a fortress before you get access to potions, because potions are a serious power spike.

## The brewing stand workflow

The stand has four slots and they're easy to mix up, so here's exactly what goes where:

1. **Bottom three slots:** your **water bottles** (or the potions you're modifying). Always brew three at once — same ingredient cost as brewing one, so brewing singles is pure waste.
2. **Top slot:** the **ingredient** being added (nether wart, then the effect ingredient, then any modifier).
3. **Left fuel slot:** **blaze powder.** Top this up; an empty fuel slot means nothing brews no matter what else you load.

![Blaze powder — crafted from blaze rods, this is the fuel in the brewing stand's burner slot, not an ingredient in the potion itself.](/images/blog/minecraft/minecraft-potion-brewing-guide/blaze-powder.webp)

The brew runs on a timer (about 20 seconds per ingredient), consuming one fuel charge and applying the ingredient to all three bottles at once. The mental model that makes brewing click: **you brew in stages.** Water bottle, then add wart to make the base, then add an effect ingredient to make the potion, then optionally add a modifier to upgrade it. Each step is a separate ingredient and a separate 20-second brew. Load three bottles, walk away, come back to three finished potions.

## The Awkward potion is the base for everything

Here's the single most important fact in brewing: **almost every useful potion starts as an Awkward potion.** Awkward potion has no effect on its own — it's just the activated base. You make it by brewing **nether wart into a water bottle.** That's it. Three water bottles plus one nether wart, one brew cycle, three Awkward potions.

From there, you add an effect ingredient to the Awkward base to get the real potion. Healing, Strength, Swiftness, Fire Resistance, Night Vision — all of them are "Awkward potion + one specific ingredient." So the workflow is always the same two steps:

1. **Water bottle + nether wart → Awkward potion.**
2. **Awkward potion + effect ingredient → the potion you want.**

If you ever brew an ingredient straight into a water bottle and get a weird useless potion (Mundane or Thick), that's the game telling you that you skipped the nether wart step. Don't skip the wart. Awkward is the foundation, full stop.

## The key ingredients and where they come from

You only need to remember a handful of ingredients. Here's where each one comes from:

| Ingredient | Makes | Where to get it |
| --- | --- | --- |
| Nether wart | Awkward base | Grows on soul sand; found in nether fortresses |
| Glistering melon slice | Healing | Craft a melon slice with 8 gold nuggets |
| Ghast tear | Regeneration | Dropped by ghasts in the Nether |
| Blaze powder | Strength | From blaze rods (also your fuel) |
| Magma cream | Fire Resistance | Dropped by magma cubes, or craft slimeball + blaze powder |
| Sugar | Swiftness | Craft from sugar cane |
| Golden carrot | Night Vision | Craft a carrot with 8 gold nuggets |
| Phantom membrane | Slow Falling | Dropped by phantoms (the night-time flyers) |
| Pufferfish | Water Breathing | Fish it up, or find it in ocean biomes |

Most of these you can farm or craft once and have forever. Gold nuggets (for glistering melon and golden carrots) come fast from a few gold ingots, sugar cane is trivial, and the Nether drops (ghast tear, magma cream, blaze powder) you collect on your fortress and bastion runs. Stockpile nether wart and gold nuggets and you can brew most of the list on demand.

## The potions actually worth brewing

Dozens of potions exist. These are the ones that earn inventory space. The recipe is always **Awkward potion + the ingredient listed.**

- **Fire Resistance (magma cream).** The best potion in the game for utility. Makes lava and fire do zero damage for the duration. It's what makes the Nether, netherite mining, and lava swimming safe. If you brew one type of potion, brew this.
- **Healing (glistering melon slice).** Instant health on drink — no timer, just immediate hearts. The clutch combat heal. As a *splash* potion it also hurts undead, so it doubles as a weapon against zombies and skeletons.
- **Regeneration (ghast tear).** Heals over time instead of instantly. Great for sustained fights and recovering between encounters. Pairs well with Healing — Healing for the burst, Regen for the tail.
- **Strength (blaze powder).** Adds flat melee damage. Turns a tough fight (the Wither, a raid, PvP) from a grind into a clean win. A Strength splash before a boss is standard practice.
- **Swiftness (sugar).** Movement speed boost. Underrated — it makes exploring, fleeing, and kiting dramatically better, and it's cheap as dirt to brew.
- **Night Vision (golden carrot).** See perfectly in the dark and underwater without torches. Invaluable for caving, mining, and ocean exploration. No more squinting at deepslate.
- **Slow Falling (phantom membrane).** You drift down gently and take no fall damage while it's active. A lifesaver for mountains, the End islands, and any high build work. Cancels the most common dumb death in the game.
- **Water Breathing (pufferfish).** Breathe underwater for the duration. Mandatory for ocean monuments and long underwater builds. Pair it with Night Vision and the ocean floor becomes a stroll.

That's the whole worthwhile list. Everything else — Leaping, Invisibility, the Turtle Master potion, Luck — is situational or niche. Brew the eight above and you're covered for 99% of what the game throws at you.

## Modifiers: extend, amplify, splash, linger

This is where new brewers get lost, so here's the clean version. After you've made a base potion, you can add **one modifier** to change how it behaves:

- **Redstone dust → extends the duration.** A 3-minute potion becomes 8 minutes. Use this on the long-utility potions: Fire Resistance, Night Vision, Swiftness, Water Breathing, Slow Falling. You want those lasting as long as possible.
- **Glowstone dust → amplifies the strength (level II).** Stronger effect, but shorter duration. Use this on the power potions: Healing II, Strength II, Regeneration II. You want a big effect now, not a long weak one. Note: Redstone and Glowstone are mutually exclusive — a potion can be extended *or* amplified, not both.
- **Gunpowder → makes it a splash potion.** Now you can throw it. Splash potions apply the effect in an area where they shatter, which lets you hit enemies (splash Healing hurts undead, splash Poison, etc.) or buff a group. This is how Strength and Healing become combat tools.
- **Dragon's breath → makes a splash potion into a lingering potion.** Lingering potions leave a cloud on the ground that applies the effect over time to anything standing in it. Great for area denial. Dragon's breath is collected by scooping the Ender Dragon's breath attack with an empty bottle, so it's a late-game modifier.

The order matters: build the full base potion first (Awkward → effect → extend/amplify), *then* add gunpowder for splash, *then* dragon's breath for lingering if you want it. You can't splash a water bottle into anything useful — finish the potion, then convert it.

## The corrupted potions (fermented spider eye)

One ingredient deserves its own note: the **fermented spider eye** (spider eye + sugar + brown mushroom). It "corrupts" a potion into its opposite or a related negative effect:

- Awkward + fermented spider eye → **Weakness** (reduces attack damage — also the potion you use to cure zombie villagers).
- Healing + fermented spider eye → **Harming** (instant damage — a splash weapon).
- Night Vision + fermented spider eye → **Invisibility.**
- Swiftness + fermented spider eye → **Slowness.**

Most of these are for throwing at enemies as splash potions, or for specific tricks like the zombie villager cure (Weakness splash + golden apple). You won't brew them often, but the fermented spider eye is the key to the whole "negative potion" branch, so it's worth knowing it exists.

## A starter brewing loadout

When you get back from your first fortress run with blaze rods and nether wart, here's what to brew first:

1. **A batch of Fire Resistance** (extended with Redstone) so your next Nether and netherite trips are safe.
2. **A few Healing potions** for emergencies, and make some of them splash for the undead bonus.
3. **A stack of Awkward potions** sitting ready, so you can convert to whatever you need on the fly.
4. **Strength splash potions** before any boss fight or raid.
5. **Night Vision** (extended) for your next caving or [diamond run](/blog/minecraft/how-to-find-diamonds-minecraft).

Set up a brewing station near your storage with a water source (or a cauldron), a chest of nether wart, and a chest of gold nuggets, and brewing stops being a chore. Add a [nether wart farm](/blog/minecraft/best-minecraft-farms) and you'll never run dry.

## Java vs Bedrock notes

Brewing is nearly identical across editions, with a couple of differences:

- **Fuel duration** is the headline one: on Java, one blaze powder fuels about 20 brewing operations; on Bedrock the fuel mechanic works slightly differently, but blaze powder is the fuel on both.
- **Recipe set** is the same — same ingredients, same Awkward base, same modifiers — across Java and Bedrock.
- **Lingering potions and tipped arrows** (you craft tipped arrows from lingering potions + arrows) work the same on both editions.
- **A few exclusive potions** like the Turtle Master potion exist on both, and remain niche on both.

Wherever you play: blaze powder is fuel, nether wart makes the Awkward base, and the eight potions above are the ones worth your ingredients.

## Quick brewing checklist

- [ ] Get blaze rods from a nether fortress and craft a brewing stand (3 cobble + 1 rod)
- [ ] Keep the fuel slot topped with blaze powder
- [ ] Always brew three bottles at once — same ingredient cost as one
- [ ] Water bottle + nether wart = Awkward potion (the base for everything)
- [ ] Awkward + effect ingredient = the potion (Fire Res, Healing, Strength, etc.)
- [ ] Redstone extends duration; Glowstone amplifies strength (pick one)
- [ ] Gunpowder makes it splash; Dragon's breath makes splash into lingering
- [ ] Stockpile nether wart and gold nuggets so you can brew on demand
- [ ] Brew Fire Resistance before your next Nether or netherite trip`,
  faq: [
    {
      question: 'What do I need to start brewing potions in Minecraft?',
      answer:
        'You need a brewing stand (3 cobblestone and 1 blaze rod), blaze powder to fuel it, nether wart for the base potion, and glass bottles filled with water. Blaze rods only drop from blazes in nether fortresses, so a Nether trip is required before you can brew anything. The blaze powder goes in the fuel slot to power the stand and is not an ingredient in the potion itself.',
    },
    {
      question: 'What is the Awkward potion in Minecraft?',
      answer:
        'The Awkward potion is the base that almost every useful potion is built from. You make it by brewing nether wart into a water bottle, and on its own it has no effect. To make a real potion you add an effect ingredient to the Awkward base — for example Awkward plus magma cream gives Fire Resistance, Awkward plus blaze powder gives Strength. If you brew an ingredient straight into water without the nether wart step, you get a useless Mundane or Thick potion instead.',
    },
    {
      question: 'What are the best potions to brew in Minecraft?',
      answer:
        'The most useful potions are Fire Resistance (magma cream), which makes lava and fire harmless; Healing (glistering melon slice) for instant health; Regeneration (ghast tear) for healing over time; Strength (blaze powder) for extra melee damage; Swiftness (sugar) for speed; Night Vision (golden carrot) to see in the dark and underwater; Slow Falling (phantom membrane) to cancel fall damage; and Water Breathing (pufferfish) for underwater exploration. Each is made by adding the listed ingredient to an Awkward potion.',
    },
    {
      question: 'How do you make a splash potion in Minecraft?',
      answer:
        'Brew a normal potion first, then add gunpowder to it in the brewing stand to turn it into a splash potion. Splash potions can be thrown and apply their effect in the area where they shatter, which lets you hit enemies or buff a group at once. To go one step further, add dragon\'s breath to a splash potion to make a lingering potion, which leaves an effect cloud on the ground. Build the full base potion before converting it to splash.',
    },
    {
      question: 'What do Redstone and Glowstone do in brewing?',
      answer:
        'Redstone dust extends a potion\'s duration, turning a few-minute effect into a much longer one, which is best on utility potions like Fire Resistance, Night Vision, and Swiftness. Glowstone dust amplifies a potion to level II for a stronger effect but a shorter duration, which is best on power potions like Healing II and Strength II. The two are mutually exclusive, so a potion can be extended or amplified but not both.',
    },
    {
      question: 'How much blaze powder do I need to brew?',
      answer:
        'Blaze powder is the fuel for the brewing stand, loaded into the left fuel slot. On Java Edition one blaze powder fuels about 20 brewing operations, so a few rods worth of powder lasts a long time. Crafting one blaze rod gives 2 blaze powder. Keep the fuel slot topped up — if it is empty, nothing will brew no matter what bottles and ingredients you load.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/minecraft-nether-guide', anchor: 'Minecraft Nether guide (blaze rods and nether wart live here)' },
    { href: '/blog/minecraft/how-to-find-diamonds-minecraft', anchor: 'How to find diamonds (brew Night Vision first)' },
    { href: '/blog/minecraft/best-minecraft-farms', anchor: 'Best Minecraft farms (build a nether wart farm)' },
    { href: '/blog/minecraft/how-to-beat-the-ender-dragon', anchor: 'How to beat the Ender Dragon (potions help)' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Brewing',
      title: 'Minecraft Wiki — brewing mechanics, recipes, and modifiers',
    },
    {
      url: 'https://minecraft.wiki/w/Potion',
      title: 'Minecraft Wiki — full potion list, effects, and durations',
    },
    {
      url: 'https://minecraft.wiki/w/Brewing_Stand',
      title: 'Minecraft Wiki — brewing stand crafting, slots, and fuel',
    },
  ],
  tldr:
    'To brew in Minecraft you need a brewing stand (3 cobble + 1 blaze rod), blaze powder for fuel, nether wart, and water bottles — so brewing is gated behind a Nether trip. Brew nether wart into water to make the Awkward base, then add an effect ingredient: magma cream (Fire Resistance), glistering melon (Healing), blaze powder (Strength), ghast tear (Regen), sugar (Swiftness), golden carrot (Night Vision), phantom membrane (Slow Falling), or pufferfish (Water Breathing). Use Redstone to extend duration, Glowstone to amplify, gunpowder to make it a splash potion, and dragon\'s breath for lingering.',
  itemList: {
    name: 'Minecraft Potions Worth Brewing',
    items: [
      { name: 'Fire Resistance', description: 'Awkward + magma cream. Makes lava and fire harmless — the best utility potion, essential for the Nether and netherite mining.' },
      { name: 'Healing', description: 'Awkward + glistering melon slice. Instant health on drink; as a splash potion it also damages undead.' },
      { name: 'Strength', description: 'Awkward + blaze powder. Adds flat melee damage. A Strength splash before a boss fight or raid is standard.' },
      { name: 'Regeneration', description: 'Awkward + ghast tear. Heals over time. Pairs with Healing for burst-plus-sustain.' },
      { name: 'Swiftness', description: 'Awkward + sugar. Movement speed boost. Cheap and underrated for exploring and kiting.' },
      { name: 'Night Vision', description: 'Awkward + golden carrot. See in the dark and underwater without torches. Invaluable for caving and ocean dives.' },
      { name: 'Slow Falling', description: 'Awkward + phantom membrane. Drift down gently with no fall damage. Cancels the most common dumb death in the game.' },
      { name: 'Water Breathing', description: 'Awkward + pufferfish. Breathe underwater. Mandatory for ocean monuments and underwater builds.' },
    ],
  },
};
