import type { BlogPost } from '../../blogTypes';

export const minecraftTntGuide: BlogPost = {
  slug: 'minecraft-tnt-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-guides',
  tags: ['tnt', 'explosives', 'redstone', 'gunpowder', 'mining', 'tnt minecart'],
  title: 'Minecraft TNT Guide: Blast Mechanics, Fuses, and Real Uses',
  metaDescription:
    'How Minecraft TNT really works: the 4-second fuse, explosion power 4, the 1,352-ray blast model, water cancelling block damage, TNT minecarts, and cannons.',
  excerpt:
    "Most players treat TNT like a party trick — light it, run, giggle. But the explosion is a precisely defined system with a power value, 1,352 rays, and a fuse that changes length depending on how you set it off. Learn the actual numbers and TNT stops being a gag and starts being a tool.",
  featuredImagePrompt:
    'A Minecraft TNT block rendered large and centered, fuse lit and blinking white, with a redstone dust line running toward it and a crater visible in the background',
  heroImage: '/images/blog/minecraft/minecraft-tnt-guide/tnt-block.webp',
  heroImageAlt:
    'A Minecraft TNT block render — the red-and-white striped explosive that detonates with a power value of 4.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-tnt-guide/tnt-block.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/TNT',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-tnt-guide/falling-tnt.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/TNT',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-tnt-guide/tnt-minecart.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Minecart_with_TNT',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-tnt-guide/activator-rail.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Minecart_with_TNT',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-15T00:00:00.000Z',
  lastUpdated: '2026-07-15T00:00:00.000Z',
  primaryKeyword: 'minecraft tnt guide',
  secondaryKeywords: [
    'minecraft tnt fuse time',
    'minecraft tnt blast radius',
    'how to craft tnt minecraft',
    'minecraft tnt minecart damage',
    'minecraft tnt underwater',
    'minecraft tnt cannon basics',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'crafting-tnt-and-where-gunpowder-comes-from', label: 'Crafting TNT and where gunpowder comes from', level: 2 },
    { id: 'the-fuse-is-4-seconds-except-when-it-isnt', label: 'The fuse is 4 seconds, except when it isn\'t', level: 2 },
    { id: 'how-the-blast-actually-works', label: 'How the blast actually works', level: 2 },
    { id: 'every-way-to-prime-tnt', label: 'Every way to prime TNT', level: 2 },
    { id: 'mining-with-tnt', label: 'Mining with TNT', level: 2 },
    { id: 'water-cancels-block-damage', label: 'Water cancels block damage', level: 3 },
    { id: 'the-sand-trick', label: 'The sand trick', level: 3 },
    { id: 'tnt-minecarts-hit-harder', label: 'TNT minecarts hit harder', level: 2 },
    { id: 'tnt-cannons-briefly', label: 'TNT cannons, briefly', level: 2 },
    { id: 'the-duping-question', label: 'The duping question', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `A TNT explosion has a power value of **4**. A creeper also has a power of 4. That means the block-destroying half of the scariest sound in Minecraft is, mathematically, a creeper you asked for — and it's why a single TNT will never scratch obsidian no matter how many you stack on top of it. Explosion damage is evaluated per explosion, and blast resistance never gets "worn down" by the previous blast.

That one fact reframes the whole block. TNT isn't chaos. It's a system with defined inputs and outputs, and once you know them you can use it as a mining tool, a mob-farm component, and a delivery mechanism instead of a way to blow a hole in your own storage room. Here's everything that actually matters, with the real numbers.

## Crafting TNT and where gunpowder comes from

The recipe is five gunpowder and four sand in a checkerboard: gunpowder in the four corners and the center, sand in the four edge slots. **Red sand works exactly as well as regular sand** — there's no difference in the output, so don't hoard one over the other.

Gunpowder is the bottleneck, and the drop rates are worth knowing before you plan a farm:

- **Creepers** drop 0–2 gunpowder. Looting adds up to 1 per level, capping at 5.
- **Ghasts** drop 0–2, same Looting scaling, same cap of 5.
- **Witches** drop 0–6 — by far the best per-kill rate. Looting adds 3 per level, capping at **15**.
- **Wandering traders** have a 1-in-6 chance of offering gunpowder for a single emerald.

That witch number is the one people sleep on. A witch farm out-produces a creeper farm on gunpowder per kill by a wide margin, and witch huts generate in regular swamps. If you're building one dedicated farm to feed a TNT habit, build that one — our [best Minecraft farms](/blog/minecraft/best-minecraft-farms) breakdown covers where it sits against the other big earners.

You can also just find TNT. **Nine TNT blocks generate naturally in every desert pyramid**, sitting under the floor as the classic pressure-plate trap. Two more flank a trapped chest in a secret [woodland mansion](/blog/minecraft/minecraft-woodland-mansion-guide) room.

![A Minecraft TNT block falling through the air after being primed, showing its entity form.](/images/blog/minecraft/minecraft-tnt-guide/falling-tnt.webp)

## The fuse is 4 seconds, except when it isn't

This is where most players get hurt. The fuse is **40 redstone ticks — 4 seconds, or 80 game ticks** — when TNT is activated by a redstone signal or by fire. That's the number everyone memorizes.

But when TNT is primed by *another explosion*, the fuse becomes a random value between **10 and 30 game ticks — 0.5 to 1.5 seconds**. That's the chain-reaction rule, and it's why a stack of TNT going off next to you doesn't give you the four seconds you were counting on. The first one gives you four. Everything it lights gives you half a second to a second and a half.

A few more fuse details that bite:

- Once primed, TNT becomes an **entity** affected by gravity — a cube 0.98 blocks on a side. You can't break it anymore. Only \`/kill\` removes it.
- It spawns with a small kick: 0.2 blocks per tick vertically and 0.02 horizontally in a random direction. It drifts about **0.166 blocks** sideways before settling, which is roughly six pixels. Not enough to save you, enough to matter in tight redstone.
- If it's primed in the air, it falls roughly **77 blocks** before detonating. Every **19.75 blocks** of fall burns one second off the timer.
- In Java Edition, TNT summoned by command explodes immediately, because the fuse defaults to zero if you don't specify one. If you're scripting anything in a [command block](/blog/minecraft/minecraft-command-blocks-guide), set the fuse explicitly.

## How the blast actually works

The explosion model is more interesting than "sphere of destruction." The game draws a cube around the explosion, splits it into a 16×16×16 grid, and fires a ray from the center to every point on that cube's outer surface — **1,352 rays total**.

Each ray gets an intensity of (0.7 + a random value from 0 to 0.6) × power. Then it walks outward in 0.3-block steps. Every step drops the intensity by 0.225. If the step passes through anything other than air, it drops *further* by (blast resistance + 0.3) × 0.3. A block gets destroyed if the ray still has intensity left when it reaches it.

Two consequences fall straight out of that:

1. **Destruction is non-deterministic.** That random 0-to-0.6 term means the same TNT in the same spot carves a slightly different crater every time. Anyone promising you an exact block count is guessing.
2. **Blast radius is capped by power.** The maximum radius, assuming nothing absorbs the ray, works out to **6.9 blocks for TNT**, 5.2 for a normal creeper, 10.4 for a charged creeper, and 1.7 for a ghast fireball. In practice, a TNT explosion can knock out a torch about 7 blocks away.

Also worth knowing: fireworks and wind charges deal entity damage but **do not destroy terrain**, so they don't count as conventional explosions at all. And stacking explosions gets you more *knockback* — multiple close blasts propel objects further — but zero extra digging power, for the per-explosion reason up top.

## Every way to prime TNT

The ignition list is longer than most people realize, which is both a toolkit and a list of ways to lose a base:

- Flint and steel, or a fire charge
- Any item enchanted with **Fire Aspect** — including just a Fire Aspect enchanted book
- A powered redstone signal
- A flaming or explosive projectile, including a Flame-enchanted bow's arrow
- An arrow that has traveled through lava or fire
- A ghast or blaze fireball, or a fire charge from a dispenser
- An explosive skull from [the Wither](/blog/minecraft/how-to-beat-the-wither)
- Spreading fire or lava touching it
- Any nearby explosion — TNT, creeper, bed, respawn anchor, or end crystal
- Being placed by a dispenser, or lit by a dispenser holding flint and steel
- A lightning bolt

Two odd ones for the collection: flint and steel can't start fires in Adventure Mode but **can still ignite TNT**, and primed TNT normally gets stuck in cobwebs — unless it's moving fast enough, in which case it passes through without slowing at all.

For redstone, the rule is simple: the signal has to either lead directly into the TNT or power a block adjacent to it. If you're fuzzy on how power travels through blocks, [redstone basics](/blog/minecraft/minecraft-redstone-basics) is the prerequisite here.

## Mining with TNT

TNT is a legitimate mining tool, particularly for clearing large volumes fast. It's not efficient for [finding diamonds](/blog/minecraft/how-to-find-diamonds-minecraft) — the ore drops get destroyed by the same blast that exposes them often enough to hurt — but for hollowing out a room, clearing gravel, or opening a quarry, nothing beats it on time spent.

### Water cancels block damage

Here's the rule that surprises people: **when primed TNT detonates while in water or lava, it doesn't break any blocks at all.** It still damages players, mobs, and entities — the shockwave is fine — but the terrain survives completely.

This cuts both ways. It means water is a perfect blast shield for your build. It also means you can't just drop TNT into the ocean and expect a hole. Note the asymmetry, though: TNT detonating *outside* water can still destroy submerged blocks. It's the TNT's own immersion that matters, not the target's.

### The sand trick

Which leads to the workaround, and it's genuinely clever. Place sand or gravel **on top of** the TNT before you prime it. The moment you prime it, the TNT block becomes an entity and vacates its space — so the sand above falls one block and engulfs the primed TNT.

Now the TNT is no longer immersed in water. It's inside a sand block. The blast lands normally.

This is the standard technique for breaching an [ocean monument](/blog/minecraft/minecraft-ocean-monument-guide) from the roof, and it's the kind of mechanic that only exists because two systems — gravity blocks and entity conversion — happen to interact on exactly the same tick.

![A Minecraft minecart with TNT sitting on rails, ready to be triggered.](/images/blog/minecraft/minecraft-tnt-guide/tnt-minecart.webp)

## TNT minecarts hit harder

A minecart with TNT is not just TNT on wheels. Its explosion scales with **speed**, and that changes everything about how it's used.

The base power is 4, same as a TNT block. But the game adds a random bonus of up to **1.5 × velocity**, capped at 7.5. At a speed of 5 or higher, the resulting power is a random value between **4 and 11.5** — meaning a fast TNT minecart can hit nearly three times as hard as a stationary TNT block.

Which velocity gets used depends on the trigger. An activator rail or damage trigger uses the cart's horizontal velocity. A flaming arrow uses the *arrow's* velocity. Fall damage uses fall distance divided by 10.

The trigger conditions split into delayed and instant. **Delayed** (4 seconds, exactly like a TNT block) happens when it rolls over a powered activator rail. Destroyed while in motion, or destroyed by fire, lava, or an explosion gives a random delay between 0 and 1.9 seconds, most likely landing near 1. **Instant** detonation happens when it hits the ground after falling more than three blocks (unless it lands on rail), takes a curved track too fast with a solid block or entity beside it, gets hit by a flaming arrow, or is pressed into a block or entity while it still has velocity.

Two exploitable quirks:

- Detonating via an activator rail **does not destroy its own rails** or the blocks under them — though other nearby carts still can. That's what makes repeatable rail-based demolition possible.
- **Multiple minecarts fit on a single rail block.** They stack. Merged TNT minecarts explode when touched and deal enormous damage — a direct hit from three merged carts can reduce a player in full diamond armor to half a heart.

TNT minecarts bounce off other minecarts and can't be linked to furnace minecarts, so any delivery system has to push them with rails, not chains. If you're building the track for one, the [transportation guide](/blog/minecraft/minecraft-transportation-guide) has the powered-rail spacing.

![A TNT minecart positioned on a powered activator rail, the standard delayed-detonation trigger setup.](/images/blog/minecraft/minecraft-tnt-guide/activator-rail.webp)

## TNT cannons, briefly

TNT cannons exploit the propulsion half of explosions rather than the destruction half. Since multiple close explosions propel objects further without adding destructive power, you can use a bank of "charge" TNT to fling a single "projectile" TNT a long distance.

The basic anatomy: a water trough holds the charge TNT so its blast doesn't destroy the cannon itself (water cancels block damage, remember), the projectile TNT sits outside the water at the muzzle, and the charges fire slightly before the projectile so the shockwave throws it. Range comes from charge count and firing timing, not from any special block.

The same propulsion trick shoots gravity-affected blocks, which is where a lot of the more creative contraptions live. If that's your thing, [redstone contraptions](/blog/minecraft/minecraft-redstone-contraptions-guide) goes deeper on the timing circuits that make it repeatable.

One caution: primed TNT is **not** teleported by a Nether portal — it passes straight through the portal blocks. End portals do teleport it correctly, preserving direction and speed.

## The duping question

You'll see TNT duplicators in a lot of technical Minecraft builds. They rely on a piston-and-observer interaction with gravity blocks that produces more TNT than it consumes, and they are a **Java Edition** phenomenon — Bedrock's piston behavior doesn't support the same setups.

Be honest with yourself about what it is: it's an unintended interaction that Mojang has left in place because the technical community depends on it, not a documented feature. It can change in any update, and it's a fast way to get kicked from a server that bans exploits. Check the rules before you build one, and don't design a base that only functions if the dupe survives the next patch.

If you want TNT at scale without the asterisk, build the witch farm. It's slower to set up and it never breaks.

## Quick Action Checklist

- Craft TNT with **5 gunpowder + 4 sand** in a checkerboard. Red sand is identical to regular sand.
- Farm **witches** for gunpowder, not creepers — 0–6 per kill, up to 15 with Looting III.
- Loot the **9 free TNT** in every desert pyramid, carefully.
- Remember two fuse lengths: **4 seconds** from redstone or fire, **0.5–1.5 seconds** from another explosion.
- Never expect TNT to break obsidian. Explosions don't stack destructively — power 4 is power 4.
- Assume a working blast radius near **6.9 blocks**, and expect a different crater every time thanks to the random intensity term.
- Use water as a blast shield; TNT detonating in water does **zero** block damage.
- To blast underwater anyway, drop **sand or gravel on top** of the TNT before priming it.
- Get TNT minecarts moving before they blow — speed 5+ turns power 4 into a random **4 to 11.5**.
- Stack multiple TNT minecarts on one rail block for burst damage; they detonate on touch.
- Don't route primed TNT through a **Nether portal**. It won't teleport.
- Specify the fuse explicitly when summoning TNT by command in Java, or it detonates instantly.`,
  faq: [
    {
      question: 'How long is the TNT fuse in Minecraft?',
      answer:
        'The fuse is 40 redstone ticks — 4 seconds, or 80 game ticks — when TNT is activated by a redstone signal or by fire. However, if TNT is primed by another explosion, the fuse is a random value between 10 and 30 game ticks (0.5 to 1.5 seconds), which is why chain reactions give you far less time to escape than the first blast does.',
    },
    {
      question: 'What is the blast radius of TNT in Minecraft?',
      answer:
        'TNT has an explosion power of 4, giving a maximum blast radius of 6.9 blocks assuming no blocks absorb the explosion rays. In practice a TNT explosion can destroy a torch about 7 blocks away. The exact crater is non-deterministic because each of the 1,352 explosion rays gets a random intensity multiplier between 0.7 and 1.3 times the power.',
    },
    {
      question: 'Why does TNT not break blocks underwater?',
      answer:
        'When primed TNT detonates while submerged in water or lava, it does not break any blocks at all, though it still damages players, mobs, and other entities. To make TNT destroy blocks underwater, place sand or gravel on top of it before priming. Priming turns the TNT into an entity, the sand falls one block and engulfs it, and the now-unsubmerged TNT explodes normally.',
    },
    {
      question: 'Are TNT minecarts stronger than regular TNT?',
      answer:
        'They can be. A TNT minecart has the same base power of 4, but the game adds a random bonus of up to 1.5 times its velocity, capped at 7.5. At a speed of 5 or higher, the explosion power becomes a random value between 4 and 11.5. Stationary TNT minecarts are no stronger than TNT blocks — the extra power comes entirely from speed.',
    },
    {
      question: 'Can TNT destroy obsidian in Minecraft?',
      answer:
        'No. Obsidian has high enough blast resistance to be immune to normal explosions, and no amount of TNT will change that. Explosion damage to blocks is evaluated independently for each explosion, and blast resistance never becomes weakened by previous blasts, so stacking hundreds of TNT gets you nothing extra against obsidian.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'GamerTagMythras blog' },
    { href: '/blog/minecraft', anchor: 'all Minecraft guides' },
    { href: '/blog/minecraft/minecraft-redstone-basics', anchor: 'Minecraft redstone basics' },
    { href: '/blog/minecraft/minecraft-redstone-contraptions-guide', anchor: 'redstone contraptions guide' },
    { href: '/blog/minecraft/best-minecraft-farms', anchor: 'best Minecraft farms' },
    { href: '/blog/minecraft/minecraft-ocean-monument-guide', anchor: 'ocean monument guide' },
    { href: '/blog/minecraft/minecraft-transportation-guide', anchor: 'Minecraft transportation guide' },
  ],
  externalSources: [
    { url: 'https://minecraft.fandom.com/wiki/TNT', title: 'TNT — Minecraft Wiki' },
    { url: 'https://minecraft.fandom.com/wiki/Explosion', title: 'Explosion — Minecraft Wiki' },
    { url: 'https://minecraft.fandom.com/wiki/Minecart_with_TNT', title: 'Minecart with TNT — Minecraft Wiki' },
  ],
  tldr: "Minecraft TNT has an explosion power of 4 — identical to a creeper — and a fuse of 4 seconds from redstone or fire, but only 0.5 to 1.5 seconds when primed by another explosion. Its maximum blast radius is 6.9 blocks, and craters vary every time because each of the 1,352 explosion rays gets a random intensity. TNT detonating in water does no block damage at all, which you can bypass by dropping sand on top before priming. TNT minecarts scale with speed, reaching a random power of 4 to 11.5 at velocity 5 or higher.",
};
