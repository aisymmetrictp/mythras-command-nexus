import type { BlogPost } from '../../blogTypes';

export const minecraftFireworkGuide: BlogPost = {
  slug: 'minecraft-firework-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-guides',
  tags: ['fireworks', 'firework rocket', 'firework star', 'elytra', 'crossbow'],
  title: 'Minecraft Firework Guide: Rockets, Elytra Boosts, and Stars',
  metaDescription:
    'How Minecraft fireworks work: crafting rockets and firework stars, flight duration, boosting your elytra, using rockets as crossbow ammo, and building firework shows.',
  excerpt:
    'Firework rockets are three things at once in Minecraft: your elytra engine, a surprisingly nasty crossbow shell, and a light show. Here is how flight duration, stars, and shapes actually work, with the real numbers.',
  featuredImagePrompt:
    'Colorful Minecraft firework rockets exploding in a night sky over a build, their launch trails streaking up from the ground, with a player gliding on an elytra nearby',
  heroImage: '/images/blog/minecraft/minecraft-firework-guide/firework-display-hero.webp',
  heroImageAlt:
    'Two Minecraft firework rockets bursting into pale starbursts in a dark sky, their dotted launch trails still visible streaking up from the ground below.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-firework-guide/firework-display-hero.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Firework_Rocket',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-firework-guide/creeper-firework.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Firework_Star',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-firework-guide/elytra-gliding.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Elytra',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-firework-guide/firework-crossbow.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Crossbow',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-12T00:00:00.000Z',
  lastUpdated: '2026-07-12T00:00:00.000Z',
  primaryKeyword: 'minecraft firework guide',
  secondaryKeywords: [
    'how to make fireworks minecraft',
    'firework rocket flight duration',
    'firework star recipe minecraft',
    'boost elytra with fireworks',
    'firework crossbow damage',
    'minecraft firework shapes',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'what-a-firework-rocket-is-made-of', label: 'What a firework rocket is made of', level: 2 },
    { id: 'flight-duration-what-the-gunpowder-does', label: 'Flight duration: what the gunpowder does', level: 2 },
    { id: 'crafting-firework-stars-colors-and-shapes', label: 'Crafting firework stars: colors and shapes', level: 2 },
    { id: 'shape-modifiers', label: 'Shape modifiers', level: 3 },
    { id: 'twinkle-trail-and-fade-effects', label: 'Twinkle, trail, and fade effects', level: 3 },
    { id: 'boosting-your-elytra-with-rockets', label: 'Boosting your elytra with rockets', level: 2 },
    { id: 'fireworks-as-a-crossbow-weapon', label: 'Fireworks as a crossbow weapon', level: 2 },
    { id: 'building-a-firework-show-with-dispensers', label: 'Building a firework show with dispensers', level: 2 },
    { id: 'java-vs-bedrock-differences', label: 'Java vs Bedrock differences', level: 2 },
    { id: 'firework-tips-most-players-miss', label: 'Firework tips most players miss', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Most players meet firework rockets exactly once — the first time they strap on an elytra, run off a cliff, and realize they have no idea how to actually go anywhere. Fireworks are the answer, and they are quietly one of the most versatile items in the game. The same rocket that launches a light show over your base is the engine that lets you cross a thousand blocks in a minute, and, loaded into a crossbow, a shell that hits harder than a diamond sword. Almost nobody uses all three.

This guide breaks the whole system down: what goes into a rocket, how flight duration actually scales, the firework-star recipe with every shape and effect, and the three real jobs a rocket does — elytra fuel, crossbow ammo, and decoration. Every number here is checked against the Minecraft Wiki, because "just add more gunpowder" is the extent of most firework advice online, and it leaves out the parts that matter.

## What a firework rocket is made of

A firework rocket has a dead-simple base recipe:

- **1 paper + 1 to 3 gunpowder**, crafted anywhere in the grid, yields **3 firework rockets**.

That plain rocket has no explosion — it launches, flies, and fizzles out with no burst. It is the version you want for flying, and the version that comes out cheapest. Paper comes from sugar cane; gunpowder drops from creepers, witches, and ghasts, and hides in desert temple and dungeon chests. If gunpowder is your bottleneck, a creeper-focused mob farm is the fix — the [hostile mobs guide](/blog/minecraft/minecraft-hostile-mobs-guide) covers what spawns where.

To make a rocket that actually explodes, you add **firework stars**:

- **1 paper + 1 to 3 gunpowder + 1 to 7 firework stars** yields **3 firework rockets** that burst with effects.

Each star you pack in becomes one explosion in the sky, so a single rocket can throw up to seven separate bursts at once. Stars are also what turn a rocket into a weapon — more on that below. The gunpowder count still controls flight duration exactly as it does for a plain rocket; the stars just ride along.

## Flight duration: what the gunpowder does

The single most important number on a rocket is its **flight duration**, and it is set entirely by how much gunpowder you used: **1, 2, or 3**. That is the whole dial. More gunpowder means the rocket flies longer and higher before it detonates.

Roughly how high a rocket climbs when launched from the ground:

| Gunpowder | Flight duration | Rise height |
| --- | --- | --- |
| 1 | Duration 1 | 8 to 20 blocks |
| 2 | Duration 2 | 18 to 34 blocks |
| 3 | Duration 3 | 32 to 52 blocks |

Under the hood, the rocket's lifetime in ticks is **10 x (gunpowder + 1) + a random 0 to 5 + a random 0 to 6**. So a duration-3 rocket lives around 40 to 51 game ticks (roughly 2 to 2.5 seconds), while a duration-1 rocket burns out in about 1 second. That randomness is why a stack of identical rockets does not all pop at exactly the same height — handy for a natural-looking show, less handy when you want precise timing.

For flying, the takeaway is simple: **duration 3 (three gunpowder) is the flight rocket.** It gives the longest sustained push per rocket, which means fewer rockets burned per trip and less inventory churn.

## Crafting firework stars: colors and shapes

The firework star is where the customization lives. The base recipe is one **gunpowder plus at least one dye**, which produces a single firework star in that color. Add more dyes in the same craft — up to **eight** — and the burst comes out as a blended mix of all of them.

![A green creeper-shaped firework exploding in the night sky, its launch trail of sparks still visible below it — the shape you get from adding a mob head to the star.](/images/blog/minecraft/minecraft-firework-guide/creeper-firework.webp)

On top of color, one shape modifier and any number of effect modifiers can go into the same star. That is a lot of combinations from one crafting slot.

### Shape modifiers

Add **one** of these to the star recipe to change the explosion shape (you can only use one shape per star):

- **Nothing** — a small ball, the default.
- **Fire charge** — a large ball.
- **Gold nugget** — a star shape.
- **Feather** — a burst (the willow, drooping shape).
- **Any mob head** — a creeper-shaped explosion, like the one above.

### Twinkle, trail, and fade effects

These stack freely — you can add both to one star:

- **Glowstone dust** — adds the **twinkle** (crackle/flicker) effect, so the burst pops and sparkles at the end.
- **Diamond** — adds a **trail**, leaving a comet-like streak behind each particle.

There is also a **fade**: take a finished firework star, craft it together with one or more dyes, and the explosion will fade from its original color to the new one as it dies. Combine shape, mixed base colors, a fade, twinkle, and a trail, and you can build a genuinely custom burst — then pack up to seven of those into one rocket for a layered explosion. It is the closest Minecraft gets to a crafting toy with no wrong answers.

## Boosting your elytra with rockets

This is the job most players actually care about. While you are **gliding on an elytra**, using a firework rocket lights it as a booster: it shoves you forward in the direction you are looking at a speed of roughly **33.5 blocks per second** for as long as the boost lasts. Chain rockets one after another and you cruise indefinitely, turning the elytra from a slow glide into real fast travel.

![A player gliding through the air on an elytra, wings spread, the standard way to fly once you pair it with firework rockets.](/images/blog/minecraft/minecraft-firework-guide/elytra-gliding.webp)

Two things to get right:

- **Use plain, star-less rockets for flying.** A rocket with firework stars **explodes when you use it mid-glide and damages you** — the same explosion that makes it a weapon will chew through your health if you boost with it. Flight rockets should be pure paper-and-gunpowder, no stars.
- **Flight duration controls the push.** A duration-3 rocket boosts longest (about 50 ticks of thrust), so three-gunpowder rockets are the standard flight fuel: fewer rockets per journey, less time spent re-igniting.

If you are still hunting for the wings themselves, they only come from End cities — the [elytra guide](/blog/minecraft/minecraft-elytra-guide) and the [End cities guide](/blog/minecraft/minecraft-end-cities-guide) cover the trip. Once you have both wings and a rocket stack, fireworks quietly become the best transportation in the game, as the [transportation guide](/blog/minecraft/minecraft-transportation-guide) lays out against boats and rails.

## Fireworks as a crossbow weapon

Here is the trick most people never try: **a firework rocket loads into a crossbow as ammunition.** Only rockets **with firework stars** deal damage (a plain rocket just flies out and fizzles), but a loaded star-rocket turns a crossbow into a small artillery piece.

![A crossbow loaded with a firework rocket, the rocket's tip poking out of the flight groove, ready to fire as an explosive shell.](/images/blog/minecraft/minecraft-firework-guide/firework-crossbow.webp)

How the damage works:

- The explosion deals about **7 HP (3.5 hearts) with a single star**, and **each additional star adds roughly 2 more HP**, up to about **19 HP (9.5 hearts)** at point blank with the maximum seven stars.
- Damage falls off with distance across a blast radius of about **5 blocks**, so a direct hit hurts far more than a near miss.
- **More gunpowder gives the shot longer range**; **more stars give it more damage.** A three-gunpowder, seven-star rocket is the heavy shell.

Two crossbow enchantments make this nasty: **Quick Charge** slashes the reload time so you can fire rockets in quick succession, and **Multishot** launches three rockets in a spread from a single shot. The [best enchantments guide](/blog/minecraft/best-minecraft-enchantments) covers both. Crossbows themselves drop from pillagers, so a raid can arm you before you even craft one — the [raids and pillagers guide](/blog/minecraft/minecraft-raids-pillagers-guide) has the details.

## Building a firework show with dispensers

Fireworks are also just fun to set off, and a **dispenser** launches them for you. Load a dispenser with firework rockets, wire it to redstone, and every pulse fires one into the sky — the backbone of any automated fireworks display.

A few show-building notes:

- Aim the dispenser upward (they fire in the direction they face) so rockets climb instead of skittering along the ground.
- Vary the flight durations across different dispensers so bursts pop at different heights instead of a flat line.
- A repeater clock or an observer loop paces the launches; if timed circuits are new to you, start with the [redstone basics guide](/blog/minecraft/minecraft-redstone-basics) before wiring a big finale.

Because a single rocket can carry seven stars, and each star can have its own color, shape, twinkle, trail, and fade, even a small dispenser array can throw up a genuinely varied show. It is the one place in Minecraft where over-engineering a build has zero downside.

## Java vs Bedrock differences

The core system is identical across editions, but the crossbow behavior differs in a way that matters if you are aiming at mobs:

- In **Java Edition**, a firework rocket fired from a crossbow **explodes instantly the moment it hits an entity** — point, click, boom.
- In **Bedrock Edition**, the rocket can **pass through the entity** instead of detonating on contact, so you have to lead your shots and rely on the timed detonation rather than an impact trigger.

Everything else — the recipes, flight duration, star effects, and elytra boosting — works the same way in both. The gunpowder-to-flight-duration relationship and the star damage scaling are shared across editions, so the flight rocket you build on Java is the same one you build on Bedrock.

## Firework tips most players miss

- **Keep two rocket types on hand.** Star-less duration-3 rockets for flying, and a few loaded star-rockets for the crossbow. Never fly with star-rockets — they hurt.
- **Batch your flight fuel.** One craft makes three rockets, so a full inventory of gunpowder and paper produces stacks fast. Fly far more than you think you will, and top up before long trips.
- **Multishot triples your firepower.** A Multishot crossbow fires three star-rockets in one pull — brutal against groups, and a fast way to burn through a stack of shells.
- **Seven stars, seven bursts.** For a show, pack a rocket with several differently-designed stars; they all detonate together in one layered explosion.
- **Fireworks can slow your fall.** Using a rocket while gliding low can bail you out of a bad landing, since the boost redirects your momentum — an emergency trick worth remembering.
- **Gunpowder is the real cost.** Everything firework-related eats gunpowder. A creeper farm is what unlocks unlimited flying and unlimited shows.

## Quick Action Checklist

- [ ] Craft flight rockets: 1 paper + 3 gunpowder (no stars) for the longest elytra boost
- [ ] Craft firework stars: 1 gunpowder + dye, adding a shape modifier and twinkle/trail as desired
- [ ] Combine up to 7 stars into one rocket for a multi-burst explosion
- [ ] Fly by gliding on an elytra and using star-less rockets to boost forward (about 33.5 blocks per second)
- [ ] Never boost mid-glide with a star-rocket — the explosion damages you
- [ ] Load star-rockets into a crossbow for 7 to 19 HP explosive shots; add Quick Charge and Multishot
- [ ] Build a dispenser show with varied flight durations for bursts at different heights
- [ ] Set up a creeper farm so gunpowder never limits your flying or your fireworks`,
  faq: [
    {
      question: 'How do you make a firework rocket in Minecraft?',
      answer:
        'Craft 1 paper with 1 to 3 gunpowder anywhere in the grid to get 3 firework rockets. That plain rocket has no explosion and is what you use for flying. To make rockets that burst, add 1 to 7 firework stars to the same recipe. The amount of gunpowder (1, 2, or 3) sets the flight duration, with 3 gunpowder giving the longest flight.',
    },
    {
      question: 'What is the best firework rocket for flying with an elytra?',
      answer:
        'A rocket made from 1 paper and 3 gunpowder, with no firework stars. Three gunpowder gives the maximum flight duration, which means the longest forward boost per rocket (around 50 ticks of thrust at roughly 33.5 blocks per second), so you burn fewer rockets over a trip. Leaving out firework stars is critical, because a star-rocket explodes and damages you if you use it while gliding.',
    },
    {
      question: 'How do you change the color and shape of a firework?',
      answer:
        'Both are set when you craft the firework star. Add one or more dyes (up to eight) with the gunpowder to set the color, mixing dyes for blended colors. For the shape, add one modifier: a fire charge makes a large ball, a gold nugget makes a star shape, a feather makes a burst, and any mob head makes a creeper-shaped explosion. Glowstone dust adds a twinkle and a diamond adds a trail, and both can be combined.',
    },
    {
      question: 'How much damage does a firework rocket do from a crossbow?',
      answer:
        'Only rockets with firework stars deal damage. A single star does about 7 HP (3.5 hearts), and each additional star adds roughly 2 more, up to about 19 HP (9.5 hearts) at point blank with seven stars. Damage falls off with distance over a blast radius of about 5 blocks. In Java Edition the rocket explodes instantly when it hits an entity, while in Bedrock it can pass through, so aim differs by edition.',
    },
    {
      question: 'Where do you get gunpowder for fireworks?',
      answer:
        'Gunpowder drops from creepers, witches, and ghasts, and generates in chests in desert temples, dungeons, and other structures. Since every firework recipe needs gunpowder, a creeper-focused mob farm is the most reliable way to keep flying and building shows without running dry. Paper, the other ingredient, comes from crafting sugar cane.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/minecraft-elytra-guide', anchor: 'Elytra guide' },
    { href: '/blog/minecraft/minecraft-end-cities-guide', anchor: 'End cities guide (where elytra come from)' },
    { href: '/blog/minecraft/best-minecraft-enchantments', anchor: 'Best enchantments (Quick Charge, Multishot)' },
    { href: '/blog/minecraft/minecraft-hostile-mobs-guide', anchor: 'Hostile mobs guide (gunpowder sources)' },
    { href: '/blog/minecraft/minecraft-transportation-guide', anchor: 'Transportation guide' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Firework_Rocket',
      title: 'Minecraft Wiki — firework rocket recipe, flight duration, and damage',
    },
    {
      url: 'https://minecraft.wiki/w/Firework_Star',
      title: 'Minecraft Wiki — firework star colors, shapes, and effects',
    },
    {
      url: 'https://minecraft.wiki/w/Elytra',
      title: 'Minecraft Wiki — elytra flight and rocket boosting',
    },
  ],
  tldr:
    'A firework rocket is 1 paper plus 1 to 3 gunpowder (yielding 3 rockets), with the gunpowder count setting flight duration — use star-less duration-3 rockets to boost an elytra at about 33.5 blocks per second. Firework stars (gunpowder plus dyes, with optional shape, twinkle, and trail modifiers) add up to seven colored bursts per rocket and turn rockets into crossbow ammo dealing 7 to 19 HP. Never boost mid-glide with a star-rocket, since the explosion damages you.',
  itemList: {
    name: 'Minecraft Firework Star Shape Modifiers',
    items: [
      { name: 'No modifier', description: 'Default small ball explosion.' },
      { name: 'Fire charge', description: 'Large ball explosion.' },
      { name: 'Gold nugget', description: 'Star-shaped explosion.' },
      { name: 'Feather', description: 'Burst (willow) explosion.' },
      { name: 'Any mob head', description: 'Creeper-shaped explosion.' },
    ],
  },
};
