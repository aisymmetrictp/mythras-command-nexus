import type { BlogPost } from '../../blogTypes';

export const minecraftElytraGuide: BlogPost = {
  slug: 'minecraft-elytra-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-progression',
  tags: ['elytra', 'the end', 'end city', 'flying', 'fireworks', 'endgame'],
  title: 'Minecraft Elytra Guide: How to Get Wings and Fly',
  metaDescription:
    'How to get the elytra in Minecraft: reach the outer End, find an End ship, grab the wings, equip them, and fly with firework rockets. Java vs Bedrock included.',
  excerpt:
    "The elytra turns Minecraft from a walking sim into a flying game. There is exactly one place to get it — an End ship in the outer End — and getting there means beating the dragon first. Here is the full route, how to actually fly, and how to keep the wings from dying on you.",
  featuredImagePrompt:
    'A player in diamond armor gliding on green elytra wings over a pale yellow End stone island, the purple void below, distant End city towers on the horizon in blocky Minecraft style',
  heroImage: '/images/blog/minecraft/minecraft-elytra-guide/gliding-with-elytra.webp',
  heroImageAlt:
    'A Minecraft player gliding over the End with the elytra equipped, the membrane wings spread out behind the character.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-elytra-guide/gliding-with-elytra.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Elytra',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-elytra-guide/end-city.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/End_City',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-elytra-guide/end-ship.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/End_City',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-elytra-guide/end-gateway.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/End_Gateway_(block)',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-06T00:00:00.000Z',
  lastUpdated: '2026-06-06T00:00:00.000Z',
  primaryKeyword: 'minecraft elytra guide',
  secondaryKeywords: [
    'how to get the elytra',
    'how to fly in minecraft',
    'where to find the elytra',
    'elytra firework rockets',
    'how to get to the outer end',
    'elytra durability mending',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 10,
  toc: [
    { id: 'what-the-elytra-actually-is', label: 'What the elytra actually is', level: 2 },
    { id: 'the-one-place-it-lives-end-ships', label: 'The one place it lives: End ships', level: 2 },
    { id: 'getting-to-the-outer-end', label: 'Getting to the outer End', level: 2 },
    { id: 'raiding-the-end-city-and-grabbing-the-wings', label: 'Raiding the End city and grabbing the wings', level: 2 },
    { id: 'equipping-and-flying', label: 'Equipping and flying', level: 2 },
    { id: 'firework-rockets-are-your-engine', label: 'Firework rockets are your engine', level: 2 },
    { id: 'the-durability-problem-and-how-to-fix-it', label: 'The durability problem and how to fix it', level: 2 },
    { id: 'launch-tricks-riptide-and-otherwise', label: 'Launch tricks: riptide and otherwise', level: 2 },
    { id: 'java-vs-bedrock-notes', label: 'Java vs Bedrock notes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `The elytra is the single biggest upgrade to how you move in Minecraft, full stop. The moment you strap on a pair of wings, the world shrinks — trips that used to eat twenty minutes of sprinting become a thirty-second glide, and bases that felt far apart suddenly feel like neighbors. There is no crafting recipe, no villager who sells them, and no enchanting-table shortcut. There is exactly one source: an End ship floating in the outer End, and you only get there after you have already killed the Ender Dragon.

This is the full route — where the wings are, how to actually reach them, how to fly once you have them, and the durability trap that catches every new flyer. We will flag the Java-versus-Bedrock differences as they come up, because flying is one of the areas where the two editions genuinely diverge.

## What the elytra actually is

The elytra is a glider, not a jetpack. By itself it does not generate thrust — it converts your existing momentum and altitude into a controlled glide. You jump off something high, deploy the wings, and you trade height for horizontal distance, steering by aiming your camera. Point down to gain speed, level out to extend your range, pull up to bleed speed and climb briefly.

It occupies your chestplate slot, which is the catch: while you are wearing the elytra, you are not wearing a chestplate. You give up that armor protection for mobility. Most players keep both in their inventory and swap depending on whether they are traveling or fighting.

On its own the elytra is a one-way ticket down. To fly level or climb indefinitely, you pair it with firework rockets — more on that below.

## The one place it lives: End ships

Elytra spawn in **End ships**, which are the floating galleon-shaped structures that generate alongside some (not all) **End cities** out in the outer End islands. An End city without a ship has no elytra. The ship hangs off the side of the city, usually reachable by a bridge of purpur blocks or a short glide across.

![A Minecraft End city — tall purpur towers in the outer End, where End ships and the elytra generate.](/images/blog/minecraft/minecraft-elytra-guide/end-city.webp)

Inside the ship, the elytra is mounted in an **item frame** hanging on a wall, guarded by a **shulker** — the box-shaped mob that fires homing levitation projectiles. You take the wings straight out of the frame; they are not in a chest. The ship also holds two loot chests (often with diamonds, enchanted gear, and an enchanted iron pickaxe or sword) and the **dragon head** mounted on the bow, which you can mine and wear or use as a mob-head decoration.

Crucially: there is only ever **one elytra per ship**. If you want multiple pairs, you raid multiple ships. The good news is the outer End is effectively infinite, so once you can fly out there, you can farm as many as you have patience for.

## Getting to the outer End

You cannot reach the outer End islands until you have dealt with the dragon. Here is the chain:

1. **Beat the Ender Dragon.** Killing her spawns an **End gateway portal** near the edge of the central island — a small black bedrock frame with a tiny portal in the middle.
2. **Reach the gateway.** It hangs in the air, so you either pillar up to it, build a bridge, or throw an ender pearl through it. The opening is small; an ender pearl is the reliable way in.
3. **Go through.** The gateway teleports you roughly a thousand blocks out, dropping you on (or near) the outer End islands where the cities and ships generate.

![An End gateway portal — the small bedrock-framed portal that teleports you from the central island to the outer End.](/images/blog/minecraft/minecraft-elytra-guide/end-gateway.webp)

> Pack ender pearls before you fight the dragon. The gateway is a tight target, and an ender pearl thrown straight into it teleports you through cleanly. Throwing a pearl is also how you get *back* — the same gateway works in both directions.

Once you are out there, you travel between islands across gaps of **void** — the instant-death drop below. Until you have wings, you cross those gaps by carefully bridging with blocks or using ender pearls. Bring a big stack of blocks (ender chest contents, a few stacks of cobble or end stone) and do not look down more than you have to.

## Raiding the End city and grabbing the wings

End cities are vertical purpur mazes, and the threat inside them is the **shulker**. Shulkers fire projectiles that inflict **Levitation**, floating you upward; when the effect wears off, you fall. In the End, that fall can drop you into the void. Treat levitation as the real danger, not the bullet's modest damage.

Fight shulkers from cover, pop them quickly (a bow or crossbow helps), and never let yourself get levitated over a gap. A bucket of water or a slow-falling potion is a cheap insurance policy against a bad levitation drop. Drinking **milk** clears the levitation early if you get tagged.

When you reach the ship, clear the shulkers on board, then take the elytra out of the item frame. Loot the two chests, grab the dragon head if you want it, and get out. That is the whole prize: one pair of wings, plus whatever the chests rolled.

## Equipping and flying

Put the elytra in your **chestplate slot** — same slot as armor, either by equipping it from your inventory or right-clicking it while held.

To fly:

- **Get some height.** Climb a tower, a hill, or pillar up. Higher start = longer glide.
- **Jump, then press the jump key again (space / the A button) while falling** to deploy the wings. You will hear the wings snap open and you will start gliding instead of falling.
- **Steer with your camera.** Look down to dive and gain speed; level out to glide far and flat; pull up to climb briefly and slow down.
- **To land**, aim for a gentle descent and touch down at a shallow angle. Hitting terrain at high speed deals fall/kinetic damage, so flare out before you arrive.

That is the glider half. On its own you will always trend downward — which is where rockets come in.

## Firework rockets are your engine

A **firework rocket** used while gliding gives you a burst of forward thrust in the direction you are facing. This is what turns the elytra from a glider into actual flight: rocket, glide, rocket, glide, and you can hold altitude or climb across the whole map.

Key facts that matter:

- **Use plain rockets, not the explosive star ones.** A firework rocket *with a firework star* explodes and **damages you** when used for elytra flight. Craft travel rockets from **paper + gunpowder only** — no star. The number of gunpowder (1 to 3) sets the flight duration; **3 gunpowder = longest boost** and the standard travel rocket.
- **One rocket = several seconds of thrust.** With 3-gunpowder rockets you cover enormous distances per rocket. A single stack will fly you across most of a survival map.
- **Set up a gunpowder farm.** Rockets are cheap but you burn through them constantly once you are addicted to flying. A creeper farm (or a witch farm, which also drops gunpowder) keeps you stocked. Paper comes from sugar cane, which is trivial to farm.

The practical loop: jump, deploy, then spam rockets while keeping your camera roughly level or slightly up to climb. Watch your speed — flying full-tilt into a mountain or a tree at rocket speed is the number-one way pilots die.

## The durability problem and how to fix it

Here is the trap. The elytra has only **432 durability**, and gliding drains it **one point per second of flight**. That sounds like a lot until you realize a long cross-country flight can be several real minutes — and a freshly looted elytra can wear down faster than you expect. When it hits 1 durability it becomes a **broken elytra** that *cannot* be used to fly until repaired. It does not vanish; it just stops working as wings.

The fix is **Mending**. Put Mending on your elytra (from an enchanted book via an anvil — Mending is a treasure enchantment you cannot roll at a table) and it repairs itself with the XP you pick up. Combined with **Unbreaking III**, a Mending elytra effectively never breaks as long as you keep gaining experience. This is the difference between a tool you baby and a tool you forget about.

If you do not have Mending yet, you repair a damaged elytra on an anvil using **phantom membrane** (one membrane restores a chunk of durability). That is the bridge fix until you get the enchanted book — but realistically, getting Mending onto your wings should be a top priority the moment you start flying seriously.

## Launch tricks: riptide and otherwise

You do not always need a tall tower to take off. A few proven launch methods:

- **Riptide trident.** A trident enchanted with **Riptide** launches you when you use it in **water or rain**. Deploy your elytra, throw the riptide trident while it is raining or while standing in water, and you get flung forward into a glide — no rockets or tower needed for the initial launch. Riptide only works when you are wet, so it is weather/water dependent, but it is the slickest no-rocket launch in the game.
- **Rocket off the ground.** On flat ground you can sometimes deploy and immediately rocket, but it is unreliable; you usually need a little height first. A two- or three-block jump platform helps.
- **Slime/honey block bounce or a TNT/wind charge launch.** Bouncing off a slime block, or riding a wind charge burst, can pop you high enough to deploy. These are situational, but useful for fixed launch pads at a base.
- **Pillar-and-dive.** The lowest-tech method: pillar up a dozen blocks, jump off, deploy, and rocket. Always works.

A riptide trident plus a Mending elytra plus a stack of 3-gunpowder rockets is the complete travel kit. Keep it in your ender chest and you can launch from anywhere it rains.

## Java vs Bedrock notes

Flying is one of the areas where the editions actually differ:

- **Firing rockets while flying** is the same idea on both, but the exact thrust/handling feel differs slightly, and Bedrock's input handling for deploying the elytra can feel different on touch and controller. The double-jump-to-deploy concept holds on both.
- **Durability and the broken-elytra state** work the same on both editions: 432 durability, repair with phantom membrane on an anvil, or use Mending.
- **The outer-End route is identical** on both: kill the dragon, take the gateway, find an End city with a ship, take the wings from the item frame.
- **Riptide launching** works on both editions when you are in water or rain.

The mechanics that matter — where the wings are, how to deploy, rockets, durability, Mending — are consistent across Java and Bedrock. Tune your sensitivity to your input device and you fly the same on either.

## Quick Action Checklist

The fastest path from no wings to free flight:

- [ ] Beat the Ender Dragon to spawn the End gateway portal
- [ ] Throw an ender pearl through the gateway to reach the outer End
- [ ] Bring blocks and pearls to cross the void between islands
- [ ] Find an End city that has an End ship attached (only those have elytra)
- [ ] Clear the shulkers — fear the Levitation, not the damage; carry milk
- [ ] Take the elytra out of the item frame on the ship; loot the chests
- [ ] Equip it in your chestplate slot
- [ ] Craft travel rockets: paper + 3 gunpowder, NO firework star
- [ ] Get Mending + Unbreaking III on the elytra ASAP (432 durability is not much)
- [ ] Build a riptide trident for rain/water launches anywhere`,
  faq: [
    {
      question: 'Where do you find the elytra in Minecraft?',
      answer:
        'The elytra is found only in an End ship — the floating galleon-shaped structure that generates next to some (not all) End cities out in the outer End islands. The wings are mounted in an item frame on the ship, guarded by shulkers. You take them straight out of the frame; they are not in a chest. There is only one elytra per ship, and there is no crafting recipe or villager that sells them.',
    },
    {
      question: 'How do you get to the outer End to find the elytra?',
      answer:
        'You have to beat the Ender Dragon first. Killing her spawns an End gateway portal near the edge of the central End island. Throw an ender pearl through that small portal and it teleports you about a thousand blocks out to the outer End islands, where the End cities and ships generate. The same gateway works in reverse to get you back home.',
    },
    {
      question: 'How do you fly with the elytra?',
      answer:
        'Equip the elytra in your chestplate slot, get some height (a tower, hill, or by pillaring up), jump, then press the jump key again while falling to deploy the wings. Steer with your camera — look down to dive and speed up, level out to glide far. On its own the elytra only glides downward; to fly level or climb, use firework rockets while gliding for forward thrust.',
    },
    {
      question: 'What fireworks do you use for elytra flight?',
      answer:
        'Use plain travel rockets crafted from paper and gunpowder only — no firework star. Three gunpowder gives the longest boost and is the standard travel rocket. Never use rockets that contain a firework star for flying: the star makes them explode and damage you. Each rocket gives a few seconds of forward thrust, so a single stack covers most of a survival map.',
    },
    {
      question: 'Why does my elytra keep breaking, and how do I fix it?',
      answer:
        'The elytra has only 432 durability and loses one point per second of flight, so it wears down faster than people expect. When it hits 1, it becomes a broken elytra that cannot fly until repaired. Fix it with Mending (an enchanted book applied on an anvil), which repairs the wings with the XP you collect — pair it with Unbreaking III and it effectively never breaks. Without Mending, repair it on an anvil using phantom membrane.',
    },
    {
      question: 'Can you launch the elytra without a tower using Riptide?',
      answer:
        'Yes. A trident enchanted with Riptide launches you forward when you use it in water or rain. Deploy the elytra and throw the riptide trident while wet, and you get flung into a glide with no tower or starting rocket needed. The catch is that Riptide only works while you are in water or being rained on, so it is weather dependent — but it is the cleanest no-rocket launch in the game and works on both Java and Bedrock.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/how-to-beat-the-ender-dragon', anchor: 'How to beat the Ender Dragon' },
    { href: '/blog/minecraft/best-minecraft-enchantments', anchor: 'Best Minecraft enchantments' },
    { href: '/blog/minecraft/minecraft-armor-guide', anchor: 'Minecraft armor guide' },
    { href: '/blog/minecraft/best-minecraft-farms', anchor: 'Best Minecraft farms' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Elytra',
      title: 'Minecraft Wiki — Elytra mechanics, durability, and flight',
    },
    {
      url: 'https://minecraft.wiki/w/End_City',
      title: 'Minecraft Wiki — End city and End ship loot',
    },
    {
      url: 'https://minecraft.wiki/w/Firework_Rocket',
      title: 'Minecraft Wiki — firework rockets and elytra propulsion',
    },
  ],
  tldr:
    'The elytra is the only way to fly in survival Minecraft, and it spawns in exactly one place: an item frame aboard an End ship in the outer End. Beat the Ender Dragon, throw an ender pearl through the End gateway to reach the outer islands, find an End city with a ship, clear the shulkers, and take the wings. Equip them in your chestplate slot, deploy by double-pressing jump while falling, and use plain (no firework star) 3-gunpowder rockets for thrust. The elytra only has 432 durability, so put Mending and Unbreaking III on it fast.',
  itemList: {
    name: 'How to Get the Elytra in Minecraft, Step by Step',
    items: [
      { name: 'Beat the Ender Dragon', description: 'Killing her spawns the End gateway portal that leads to the outer End.' },
      { name: 'Throw an ender pearl through the gateway', description: 'Teleports you ~1,000 blocks out to the outer End islands where cities generate.' },
      { name: 'Find an End city with an End ship', description: 'Only cities that have a ship attached contain an elytra. No ship, no wings.' },
      { name: 'Clear the shulkers', description: 'Their Levitation projectiles can drop you into the void — that is the real threat, not the damage.' },
      { name: 'Take the elytra from the item frame', description: 'The wings hang in a frame on the ship, not in a chest. One per ship.' },
      { name: 'Equip it in the chestplate slot', description: 'You trade chestplate armor for flight while wearing it.' },
      { name: 'Craft 3-gunpowder rockets (no star)', description: 'Paper + 3 gunpowder = longest boost. Star rockets explode and hurt you.' },
      { name: 'Enchant with Mending + Unbreaking III', description: 'Only 432 durability means it breaks fast; Mending makes it effectively permanent.' },
    ],
  },
};
