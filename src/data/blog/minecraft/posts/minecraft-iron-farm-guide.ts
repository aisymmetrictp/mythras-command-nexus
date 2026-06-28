import type { BlogPost } from '../../blogTypes';

export const minecraftIronFarmGuide: BlogPost = {
  slug: 'minecraft-iron-farm-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-farms',
  tags: ['iron farm', 'iron golem', 'villagers', 'automation', 'progression'],
  title: 'Minecraft Iron Farm Guide: Build an Iron Golem Farm',
  metaDescription:
    'Build a Minecraft iron farm: how villagers spawn iron golems, the zombie scare trick, the 3-villager core, drop rates (3-5 iron per golem), and the kill chamber.',
  excerpt:
    "An iron golem drops 3 to 5 iron ingots every single time it dies, guaranteed, and your villagers will manufacture them for free if you set the scene right. Here is how to weaponize the panic mechanic into a farm that buries you in iron.",
  featuredImagePrompt:
    'A Minecraft iron golem standing inside a small village farm structure with beds and villagers behind glass, a zombie visible nearby to trigger the panic spawn, iron ingots scattered on the floor below',
  heroImage: '/images/blog/minecraft/minecraft-iron-farm-guide/iron-golem-render.webp',
  heroImageAlt:
    'A Minecraft iron golem render — the mob your villagers spawn on a timer, and the source of the 3-5 guaranteed iron ingots an iron farm is built to harvest.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-iron-farm-guide/iron-golem-render.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Iron_Golem',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-iron-farm-guide/iron-golem-village-siege.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Iron_Golem',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-iron-farm-guide/iron-golem-artwork.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Iron_Golem',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-28T00:00:00.000Z',
  lastUpdated: '2026-06-28T00:00:00.000Z',
  primaryKeyword: 'minecraft iron farm',
  secondaryKeywords: [
    'iron golem farm minecraft',
    'how to make an iron farm',
    'minecraft iron golem spawning',
    'iron farm villager trick',
    'how much iron does an iron golem drop',
    'minecraft iron farm java vs bedrock',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-an-iron-farm-is-the-best-early-build-you-can-make', label: 'Why an iron farm is the best early build you can make', level: 2 },
    { id: 'how-villagers-actually-spawn-iron-golems', label: 'How villagers actually spawn iron golems', level: 2 },
    { id: 'the-panic-trick-that-makes-it-a-farm', label: 'The panic trick that makes it a farm', level: 2 },
    { id: 'what-an-iron-golem-drops', label: 'What an iron golem drops', level: 2 },
    { id: 'the-simplest-farm-that-works', label: 'The simplest farm that works', level: 2 },
    { id: 'building-the-spawn-platform', label: 'Building the spawn platform', level: 3 },
    { id: 'building-the-kill-chamber', label: 'Building the kill chamber', level: 3 },
    { id: 'java-vs-bedrock-the-differences-that-matter', label: 'Java vs Bedrock: the differences that matter', level: 2 },
    { id: 'common-reasons-your-iron-farm-isnt-working', label: 'Common reasons your iron farm isn\'t working', level: 2 },
    { id: 'scaling-up-and-what-to-do-with-the-iron', label: 'Scaling up and what to do with the iron', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Most Minecraft "farms" are really just convenience machines — a mob grinder saves you a fight, a crop farm saves you a walk. An iron farm is different. It turns a resource that is supposed to be scarce into something you measure by the stack. Three villagers, a couple of beds, one scared zombie behind glass, and your base starts coughing up iron ingots on a timer with you barely paying attention. Once it is running, rails, hoppers, anvils, buckets, and a full iron-block beacon pyramid stop being decisions and start being defaults.

The reason it works comes down to one mechanic almost nobody reads the fine print on: villagers spawn iron golems to protect themselves, and the game does not care *why* they feel threatened. Scare them on purpose, on a loop, and you have a farm. The single most important number in this whole guide is this one: **an iron golem drops 3 to 5 iron ingots, 100% of the time, with no luck and no Looting bonus.** That guaranteed drop is the entire reason iron farms are worth building. Everything below is verified against the Minecraft Wiki, because iron farm tutorials are notorious for half-remembered villager counts that quietly don't trigger.

## Why an iron farm is the best early build you can make

Iron is the connective tissue of a Minecraft world. You need it for buckets (water, lava, milk), rails and minecarts, anvils, hoppers, shields, the iron tier of tools and armor, and the bulk blocks for a [beacon pyramid](/blog/minecraft/minecraft-beacon-guide). Strip-mining for all of that is slow and boring. An iron farm front-loads the grind once and then never stops paying.

Compared to the other workhorse builds on our [best Minecraft farms](/blog/minecraft/best-minecraft-farms) list, the iron farm has the best ratio of "annoying to set up" against "absurdly useful forever." It is not the simplest farm — that title goes to a mob tower or a sugarcane line — but nothing else hands you a renewable supply of the game's most-used metal.

![An iron golem standing between villagers and a hostile mob in a village — the natural defense behavior an iron farm hijacks and runs on a timer.](/images/blog/minecraft/minecraft-iron-farm-guide/iron-golem-village-siege.webp)

The catch is that "iron farm" is a slightly misleading name. You are not farming iron. You are farming *iron golems*, by convincing villagers they are under threat. Understand the spawn rules and the build designs itself.

## How villagers actually spawn iron golems

Villagers summon iron golems as bodyguards, but the exact trigger differs between editions, and this is where most builds go wrong.

In **Java Edition**, a villager attempts to spawn an iron golem when it is **gossiping with other villagers, or every 5 seconds while it is panicking** — provided five conditions are all true at once:

- The villager has slept in a bed within the last 20 minutes.
- No iron golem has been detected within 16 blocks in the last 30 seconds.
- It is not too close (within 10 blocks) to another recent golem summon.
- Enough villagers are present: **5 for the gossip trigger, but only 3 while panicking.**
- A valid spawn space exists nearby.

That "3 while panicking" line is the whole game. You do not need a 20-villager megavillage for a working Java iron farm — you need **3 villagers and a way to make them panic on demand.**

In **Bedrock Edition** the rules are coarser. A "village" needs at least **10 villagers and 20 beds**, with all villagers linked to a bed and at least 75% of them having worked at a job site block in the past day. When those conditions hold, the game runs a spawn attempt at roughly **1 in 700 per game tick — about one attempt every 35 seconds.** Bedrock golems spawn in a 17x13x17 box centered on the village, which is why Bedrock farms care a lot more about controlling valid spawn spaces.

The short version: **Java rewards a tiny, panic-driven farm; Bedrock wants a denser village and tighter spawn-space control.** Build for your edition.

## The panic trick that makes it a farm

Here is the lever. Villagers panic — and start the 5-second golem spawn attempts — when they detect a **zombie** (or other threatening mob) nearby. So every reliable iron farm puts a single zombie in a sealed glass cell where the villagers can *see* it but it can never reach them.

The villagers stare at the zombie, register a permanent threat, and panic continuously. With 3+ villagers in range (Java) they roll golem-spawn attempts every 5 seconds, and golems start appearing on the spawn platform you have prepared. You are not breeding endless mobs; you are keeping a handful of villagers in a state of low-grade terror, forever. (It is a little dark when you say it out loud.)

A few practical notes on the scare cell:

- **Glass or glass panes only.** Villagers need line of sight to the zombie. A solid wall breaks the panic.
- **Light it or keep it sealed.** The zombie must survive — if daylight burns it or it pathfinds away, your farm stops. A fully enclosed, name-tagged zombie (name tags prevent despawn) is the standard, set-and-forget move.
- **One zombie is enough.** You are triggering the panic flag, not running a damage simulation.

## What an iron golem drops

This is the payoff, and it is worth stating precisely so you can do the math on a farm:

- **Iron ingots: 3 to 5 per golem, dropped 100% of the time.** Looting does **not** increase this — the drop is fixed.
- **Poppies: 0 to 2**, with roughly a 66.67% chance to drop at least one (averaging about 1 poppy per kill).

So every golem your farm produces is, on average, **4 iron ingots in the hopper.** A farm pushing out a golem every couple of minutes is doing the work of a long, dull mining session every hour, while you do literally anything else.

![Official Minecraft iron golem artwork — each one you harvest is a flat 3 to 5 iron ingots in the collection chest, no enchantment required.](/images/blog/minecraft/minecraft-iron-farm-guide/iron-golem-artwork.webp)

One more critical detail for the kill design: **iron golems are immune to fall damage and drowning.** You cannot just drop them down a shaft and collect drops at the bottom like a zombie or skeleton. They have **100 HP (50 hearts)**, so the farm needs a real damage source to finish them — which is the next problem to solve.

## The simplest farm that works

You can overbuild an iron farm into a flying-machine megastructure, but you do not need to. The minimum viable Java build is three pieces stacked together: a **villager pod** (the 3 villagers plus beds and the scare zombie), a **spawn platform** above or beside them where golems appear, and a **kill chamber** that funnels golems to their death and the drops to a chest.

### Building the spawn platform

Golems need a valid, open space to spawn into — solid floor, two blocks of vertical air, and within range of the villagers. The cleanest approach is to leave the area immediately around the villager pod mostly *blocked off* except for one deliberate spawn platform, so golems can only appear where you want them. Fill stray flat surfaces with slabs, carpets, or non-full blocks; golems won't spawn on those.

A common, compact layout: villagers in a glass-walled box up top with their beds, the scare zombie in an adjacent glass cell, and a single open platform directly beneath or beside the villagers as the only legal spawn surface. New golems appear there, then get nudged into the kill chamber.

### Building the kill chamber

Because golems shrug off fall damage, you have two reliable options:

- **Lava blade.** A common design floats a lava source behind a sign or trapdoor so it burns golems without torching the loot. The drops survive if you collect them outside the burn zone — funnel everything onto hoppers feeding a chest. This is fully AFK once tuned.
- **Manual / soft-kill.** Drop golems a short distance to a holding cell (the fall won't hurt them) and hit them yourself with a sharp sword. Slower and hands-on, but trivially simple to build and great for a first farm. Bonus: you keep the XP.

Either way, put **hoppers under the kill zone feeding into a collection chest** so iron and poppies pipe themselves into storage. For a refresher on hopper-and-chest collection, the [redstone basics guide](/blog/minecraft/minecraft-redstone-basics) covers the wiring.

## Java vs Bedrock: the differences that matter

If you copy a Java tutorial in Bedrock (or vice versa) and it doesn't work, this is almost always why:

- **Trigger count.** Java needs only **3 villagers panicking**; Bedrock wants a full **10-villager, 20-bed village** with job-site activity before it spawns golems at all.
- **Spawn logic.** Bedrock rolls a per-tick chance (~1/700) inside a fixed 17x13x17 volume around village center, so controlling spawn spaces is critical. Java ties spawning to villager gossip/panic behavior.
- **Spawn timing.** Roughly **one attempt every 30-35 seconds** of in-game logic — but in a panic-driven Java farm the 5-second panic attempts make it feel far faster.

If you are on Bedrock and a small 3-villager build refuses to produce golems, that is expected — scale it up to a proper village footprint. On Java, the tiny build is the *intended* meta.

## Common reasons your iron farm isn't working

Run through this list before you tear the whole thing down:

- **The zombie died or wandered off.** No threat, no panic, no golems. Name-tag it and seal the cell.
- **Villagers can't see the zombie.** Solid block in the line of sight kills the panic. Use glass.
- **Not enough villagers.** Java needs 3 panicking; Bedrock needs the full village. Recount.
- **Villagers haven't slept.** Java golem spawning requires a villager to have slept in the **last 20 minutes** — make sure beds are reachable and claimed.
- **A golem is already nearby.** The game suppresses new spawns if one exists within 16 blocks. If a golem is stuck in your collection system, clear it.
- **No valid spawn space.** Slabs, carpets, lit areas, or a fully sealed platform with no open 2-block air pocket all block spawns. Leave exactly one clean platform.
- **Villagers turned into zombie villagers.** If your scare zombie ever reaches them (gap in the glass), it can convert your workforce. Double-check the cell is sealed.

## Scaling up and what to do with the iron

Once one cell works, you scale by **stacking or tiling more villager pods** within range of shared spawn platforms — more panicking villagers means more golem attempts per minute. Big public iron farms run multiple pods feeding one central kill chamber, pushing thousands of ingots an hour.

What to actually do with a mountain of iron:

- **Build a [beacon pyramid](/blog/minecraft/minecraft-beacon-guide) out of iron blocks** — it is the most farmable of the five valid pyramid blocks, and the effect is identical to a diamond pyramid.
- **Mass-produce rails and minecarts** for the transport network in our [transportation guide](/blog/minecraft/minecraft-transportation-guide).
- **Trade iron blocks to toolsmith and armorer villagers** for emeralds, then funnel those into the deals in the [villager trading guide](/blog/minecraft/minecraft-villager-trading-guide).
- **Stockpile anvils and buckets** so repairing gear and hauling lava stop being chores.

An iron farm is one of those builds that quietly changes how you play the whole game. Iron stops being a constraint, and you start thinking in terms of "what can I automate next." That is usually the moment a survival world goes from a campsite to a base.

## Quick Action Checklist

- [ ] Confirm your edition's spawn rule: Java needs 3 panicking villagers; Bedrock needs a 10-villager, 20-bed village
- [ ] Gather and house 3+ villagers with claimed beds (Java) within range of the spawn platform
- [ ] Seal a single zombie in a glass cell where villagers can see it — name-tag it so it never despawns
- [ ] Build exactly one open spawn platform (solid floor, 2 blocks of air) and block off all other valid surfaces with slabs/carpet
- [ ] Add a lava-blade or soft-kill chamber — remember golems are immune to fall damage and have 100 HP
- [ ] Put hoppers under the kill zone feeding a collection chest for the iron and poppies
- [ ] Expect 3-5 guaranteed iron ingots per golem (no Looting bonus) plus 0-2 poppies
- [ ] If it's dead, check: zombie alive? villagers can see it? slept recently? spawn space clear? no golem within 16 blocks?
- [ ] Funnel the iron into a beacon pyramid, rails, and villager trades`,
  faq: [
    {
      question: 'How does a Minecraft iron farm work?',
      answer:
        'An iron farm exploits the fact that villagers spawn iron golems to defend themselves when they panic. You seal a zombie in a glass cell where the villagers can see but never reach it, which keeps them in a permanent panic state. In Java Edition, just 3 panicking villagers will attempt to spawn an iron golem every 5 seconds. The golems appear on a spawn platform, get funneled into a kill chamber, and their guaranteed 3-5 iron ingots drop into a collection chest.',
    },
    {
      question: 'How much iron does an iron golem drop?',
      answer:
        'An iron golem drops 3 to 5 iron ingots every single time it dies, 100% of the time, with no luck involved. The Looting enchantment does not increase this amount. It also drops 0 to 2 poppies, with about a 66.67% chance to drop at least one. So on average each golem is worth roughly 4 iron ingots, which is why iron farms produce iron by the stack.',
    },
    {
      question: 'How many villagers do you need for an iron farm?',
      answer:
        'It depends on your edition. In Java Edition you only need 3 villagers, as long as you keep them panicking by showing them a zombie — that triggers golem-spawn attempts every 5 seconds. In Bedrock Edition you need a full village: at least 10 villagers and 20 beds, with all villagers linked to a bed and most of them having worked at a job site recently. This Java-vs-Bedrock gap is the number-one reason copied tutorials fail.',
    },
    {
      question: 'Why does fall damage not kill iron golems in a farm?',
      answer:
        'Iron golems are immune to both fall damage and drowning, so you cannot kill them by dropping them down a shaft the way you would with zombies or skeletons. They have 100 HP (50 hearts), so your farm needs a real damage source. The two standard solutions are a lava blade that burns them without destroying the dropped iron, or simply dropping them a short distance into a holding cell and finishing them with a sword by hand.',
    },
    {
      question: 'Why is my iron farm not spawning golems?',
      answer:
        'The most common causes are: the scare zombie died or wandered off (no threat, no panic), the villagers cannot see the zombie because a solid block blocks their line of sight, you do not have enough villagers (3 panicking in Java, a full village in Bedrock), the villagers have not slept in the last 20 minutes, an existing golem is sitting within 16 blocks and suppressing new spawns, or there is no valid open spawn space because slabs, carpets, or lighting are blocking it.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/best-minecraft-farms', anchor: 'The best Minecraft farms to build' },
    { href: '/blog/minecraft/minecraft-villager-trading-guide', anchor: 'Minecraft villager trading guide' },
    { href: '/blog/minecraft/minecraft-beacon-guide', anchor: 'Minecraft beacon guide' },
    { href: '/blog/minecraft/minecraft-redstone-basics', anchor: 'Minecraft redstone basics' },
    { href: '/blog/minecraft/minecraft-transportation-guide', anchor: 'Minecraft transportation guide' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Iron_Golem',
      title: 'Minecraft Wiki — iron golem spawning conditions and drops',
    },
    {
      url: 'https://minecraft.wiki/w/Tutorials/Iron_golem_farming',
      title: 'Minecraft Wiki — iron golem farming tutorial',
    },
    {
      url: 'https://minecraft.wiki/w/Villager',
      title: 'Minecraft Wiki — villager panic and gossip mechanics',
    },
  ],
  tldr:
    'A Minecraft iron farm works by keeping villagers in a permanent panic so they spawn iron golems, which you then kill for a guaranteed 3-5 iron ingots each (Looting does not help). Seal a zombie in a glass cell where villagers can see but not reach it. In Java you need just 3 villagers panicking, which triggers spawn attempts every 5 seconds; in Bedrock you need a full 10-villager, 20-bed village. Iron golems are immune to fall damage and have 100 HP, so use a lava blade or a manual sword kill, and pipe the drops into a hopper-fed chest.',
};
