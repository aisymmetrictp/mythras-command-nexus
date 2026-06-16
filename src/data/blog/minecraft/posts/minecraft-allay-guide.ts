import type { BlogPost } from '../../blogTypes';

export const minecraftAllayGuide: BlogPost = {
  slug: 'minecraft-allay-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-automation',
  tags: ['allay', 'item-sorting', 'duplication', 'automation', 'mobs', 'farms'],
  title: 'Minecraft Allay Guide: Item Sorting and Duplication',
  metaDescription:
    'Minecraft allay guide: where to find allays, how to free and use them, item collection with note blocks, and duplication via dancing and amethyst shards.',
  excerpt:
    "The allay is the best item-sorting tool in Minecraft and one of the only mobs you can clone. Free a couple from a pillager cage, hand them an item, and they fetch every matching drop on the floor. Then duplicate them with amethyst until you have a whole fleet. Here is the full system.",
  featuredImagePrompt:
    'A blocky blue Minecraft allay hovering in a swamp at dusk, glowing softly, carrying a single item in its tiny hands, with a note block and a jukebox visible on a nearby platform',
  heroImage: '/images/blog/minecraft/minecraft-allay-guide/allay.webp',
  heroImageAlt:
    'A blue Minecraft allay hovering in a swamp biome — the flying mob that collects dropped items for you and can be duplicated with amethyst shards.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-allay-guide/allay.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Allay',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-allay-guide/pillager-outpost.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Pillager_Outpost',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-allay-guide/woodland-prison.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Woodland_Mansion',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-allay-guide/allay-dancing.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Allay',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-11T00:00:00.000Z',
  lastUpdated: '2026-06-11T00:00:00.000Z',
  primaryKeyword: 'minecraft allay guide',
  secondaryKeywords: [
    'how to duplicate allay minecraft',
    'where to find allays minecraft',
    'minecraft allay item sorting',
    'minecraft allay note block',
    'minecraft allay farm',
    'how to use an allay',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'why-the-allay-is-worth-the-trip', label: 'Why the allay is worth the trip', level: 2 },
    { id: 'where-to-find-and-free-allays', label: 'Where to find and free allays', level: 2 },
    { id: 'how-item-collection-works', label: 'How item collection works', level: 2 },
    { id: 'note-blocks-and-where-items-get-dropped', label: 'Note blocks and where items get dropped', level: 2 },
    { id: 'duplicating-allays-with-amethyst', label: 'Duplicating allays with amethyst', level: 2 },
    { id: 'building-an-allay-item-sorter', label: 'Building an allay item sorter', level: 2 },
    { id: 'allay-care-and-limits', label: 'Allay care and limits', level: 2 },
    { id: 'java-vs-bedrock-notes', label: 'Java vs Bedrock notes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `The allay is the rare Minecraft mob that is genuinely useful *and* adorable, and most players still only have one or two because they never bothered to clone them. That is the mistake. The allay is the best soft item-sorter in the game — hand it an item and it scoops every matching drop off the floor and brings them back — and unlike a wolf or a horse, you can **duplicate it on demand** until you have a swarm. One trip to a pillager outpost plus a jukebox and a stack of amethyst gets you an entire workforce.

This guide covers the full loop: where allays live and how to free them, exactly how the item-collection behavior works, how note blocks redirect where they drop loot, the duplication trick (and the part people get wrong about it), and a simple sorter build that turns a couple of allays into automation. Where Java and Bedrock diverge, I will flag it.

## Why the allay is worth the trip

An allay does one job extremely well: you give it a single item, and it flies around picking up every dropped instance of that item nearby, then returns to you (or to a note block — more on that below) and hands them over. It does not pick up items from chests, it does not mine, and it cannot sort *into* containers by itself. What it does is **gather scattered drops**, which solves a very specific set of problems beautifully:

- **Crop and mob farms** that fling drops across a wide floor — an allay sweeps them into one spot.
- **Fishing or AFK setups** where items would otherwise despawn before you collect them.
- **Cleaning up after a big mining or building session** — toss an allay a cobblestone and it tidies the whole area.

The reason it is worth a special trip: there is no crafting recipe for an allay. You have to free one from a structure, and then if you want more, you duplicate the ones you freed. Get this right once and you never have to go back.

## Where to find and free allays

Allays spawn captive in exactly two structures, trapped and waiting to be released:

- **Pillager outposts** — held in **dark oak cages** scattered around the outpost. Each cage has a 50% chance of containing 1-3 allays.
- **Woodland mansions** — held in small **jail cells / dark prison rooms** inside the mansion, again with a 50% chance of 1-3 allays per room.

![A Minecraft pillager outpost tower in a plains biome, with the dark oak allay cages that hold captive allays around its base.](/images/blog/minecraft/minecraft-allay-guide/pillager-outpost.webp)

Freeing them is the easy part: **just break the cage open.** Mine away the dark oak bars or planks holding them in and the allays float free. They are passive — they will not attack you and pillagers do not "own" them — so the only real danger is the pillagers and the captain guarding the outpost.

Pillager outposts are far easier to raid than woodland mansions (which are huge, maze-like, and full of evokers and vindicators), so for your first allays, **clear an outpost.** Bring a bucket of water or a way to deal with the crossbow pillagers, smash the cages, and leash or lure your freed allays home.

![The interior jail cell of a Minecraft woodland mansion, one of the dark rooms where captive allays are held behind bars.](/images/blog/minecraft/minecraft-allay-guide/woodland-prison.webp)

## How item collection works

Once you have an allay near you, putting it to work takes one action: **hold the item you want collected and press use (right-click) on the allay.** It takes that single item into its hands and immediately starts hunting for more of the same.

The mechanics that actually matter:

- **It collects matching dropped items only.** Hand it a diamond and it grabs loose diamonds off the ground; it ignores everything else. Items must be the same type (and, where it matters, the same data) as the one it is holding.
- **The search radius is generous.** The allay seeks matching items within roughly a **32-block radius** of you, and stays within about a **64-block radius** of the player while it does. In practice it covers a large farm floor.
- **It has one storage slot holding up to a stack (64).** Beyond the item you handed it, an allay can carry a full stack of what it collects. When it is loaded up — or after a short delay — it flies back and drops the items at your feet.
- **To make it drop what it is holding**, press use on it with an empty hand and it hands the item back.

It will not pull items out of chests, hoppers, or item frames, and it cannot collect items it physically cannot reach (it does not path through solid walls, and it cannot grab items underwater even though it tries). It is a floor-sweeper, not a logistics network — but for a floor-sweeper, it is excellent.

## Note blocks and where items get dropped

Here is the feature that turns one allay from a cute helper into a sorting machine, and the one people most often confuse with duplication: the **note block redirect.**

Normally an allay brings collected items back to **you**. But if it hears a **note block play within 16 blocks** while it is on a return trip, it instead **delivers its items to that note block** and then hangs around it for about **30 seconds**, dropping there, before going back to following you.

What this unlocks:

- **A fixed drop point.** Put a note block over a hopper-and-chest collection system, play it once, and from then on the allay deposits everything at that note block instead of chasing you around. Now it is feeding a chest, hands-free.
- **Multiple allays, multiple destinations.** Give each allay a different item and a different note block, and each one sorts its assigned item into its own chest. That is a passive item sorter built entirely out of mobs.

The thing to be crystal clear on: **the note block does not duplicate anything and is not part of cloning.** It only changes *where* the allay drops what it already collected. Players constantly mix this up — "do I use a note block to clone allays?" No. Note block = drop location. Jukebox = duplication. Keep them separate in your head.

## Duplicating allays with amethyst

This is the headline trick, and it is the reason you only ever need to find a couple of allays. You can clone them with amethyst:

1. **Place a jukebox** and put **any music disc** in it so it starts playing.
2. **Get an allay near the playing jukebox.** Within range of the music, the allay starts **dancing** (spinning happily in the air — it is unmistakable).
3. **While it is dancing, press use on it with an amethyst shard.** The allay splits into **two allays.**

![A Minecraft allay glowing and floating near a music source, the dancing state in which feeding it an amethyst shard splits it into two.](/images/blog/minecraft/minecraft-allay-guide/allay-dancing.webp)

The rules to know:

- **It must be dancing because of a jukebox playing a music disc** — not a note block, not just any sound. No dancing, no duplication.
- **One amethyst shard per duplicate.** Each successful clone consumes a single shard.
- **There is a 5-minute cooldown** on both the original and the new allay after a split. During that window neither can be duplicated again, even if they are still dancing. You will see particles and the allay stops accepting shards until the timer is up.
- **It scales.** Each new allay is a fresh duplicator after its own cooldown, so the population doubles roughly every five minutes. Two allays become four, then eight — going from a single freed allay to a fleet of a dozen is an afternoon with a stack of amethyst.

Amethyst comes from amethyst geodes (those purple crystal pockets in caves); break the clusters with anything but Silk Touch and they drop shards. Stock up before you start cloning.

## Building an allay item sorter

You do not need redstone wizardry to make allays earn their keep. A minimal "mob-powered sorter" looks like this:

- **A collection point:** a hopper feeding a chest, with a **note block placed on top** (or directly beside) the hopper.
- **A confined space** so your allays do not wander off — a glass or fence enclosure around the farm output and the drop point keeps the 32-block search working on just the items you care about.
- **One allay per item type.** Hand allay A a piece of cobblestone, allay B a piece of dirt, allay C an iron ingot, and so on.
- **Play the note block once for each allay** so they each lock onto that drop point. Now every allay collects its assigned item and deposits it at the note block, which funnels into the chest.

Point the output of a [mob or crop farm](/blog/minecraft/best-minecraft-farms) at the floor near that enclosure and the allays sweep the drops into the chest automatically — no item-filter hopper lines required. It is the easiest "automatic" sorter in the game to build, and it scales with how many allays you have duplicated.

## Allay care and limits

A few things that keep your allay fleet alive and working:

- **They do not despawn.** Allays are persistent — once freed, they will not vanish like a wandering hostile mob, so you can leave them at a farm and come back later.
- **They are fragile and passive.** An allay has only a few hearts and will not defend itself. Keep them away from hostile mobs, lava, and fall hazards.
- **Water stops them.** They cannot enter water and will not collect submerged items, so keep your collection floor dry.
- **They glow faintly and emit a soft sound**, which makes a lost allay findable in the dark — useful when one drifts off chasing a drop.
- **Leashes work.** You can leash an allay to move it, which is how you walk your first ones home from the outpost.

## Java vs Bedrock notes

The allay behaves the same on both editions for the things that matter, with minor wrinkles:

- **Spawn locations, freeing, item collection, the note-block redirect, and amethyst duplication are identical** across Java and Bedrock, including the 5-minute duplication cooldown.
- **Search and follow radii** are functionally the same (~32-block item search, ~64-block follow), though exact pathing can feel slightly different between editions.
- **The dancing trigger is a jukebox playing a music disc on both editions** — this is the part to get right regardless of platform.
- **Performance with large fleets** can vary; a swarm of dozens of allays is more taxing on some Bedrock devices, so clone what you need rather than the maximum you can.

## Quick Action Checklist

- [ ] Raid a pillager outpost (easier than a mansion) and break the dark oak cages to free allays
- [ ] Give an allay a single item with use/right-click — it collects matching drops within ~32 blocks
- [ ] Place a note block over a hopper-and-chest and play it so the allay drops there, not on you
- [ ] Remember: note block = drop location, jukebox = duplication (they are not the same)
- [ ] Put a music disc in a jukebox, let the allay dance, then feed it an amethyst shard to clone it
- [ ] Respect the 5-minute duplication cooldown on both allays after each split
- [ ] Stock amethyst shards from geodes before you start cloning a fleet
- [ ] Keep allays dry, lit, and away from hostile mobs — they are fragile but never despawn`,
  faq: [
    {
      question: 'Where do you find allays in Minecraft?',
      answer:
        'Allays spawn captive in two structures: pillager outposts, where they are held in dark oak cages around the outpost, and woodland mansions, where they are kept in small jail cells. Each cage or cell has a 50% chance of containing 1 to 3 allays. To free them, just break the cage or bars open. Pillager outposts are far easier to raid than woodland mansions, so they are the best place to get your first allays.',
    },
    {
      question: 'How do you duplicate an allay?',
      answer:
        'Place a jukebox and put any music disc in it so it plays. Bring an allay near the jukebox until it starts dancing, then press use on it with an amethyst shard. The allay splits into two. Both the original and the new allay then have a 5-minute cooldown before either can be duplicated again. Because each new allay becomes a duplicator after its own cooldown, your fleet roughly doubles every five minutes.',
    },
    {
      question: 'Do you need a note block or a jukebox to duplicate an allay?',
      answer:
        'A jukebox. Duplication only works when the allay is dancing because of a jukebox playing a music disc, and you feed it an amethyst shard during that dance. A note block does something completely different — it only changes where an allay drops the items it has collected. Players often confuse the two, but the note block is for item delivery, not cloning.',
    },
    {
      question: 'How does an allay collect items?',
      answer:
        'Hold the item you want gathered and press use (right-click) on the allay. It takes that one item and then flies around collecting every matching dropped item within roughly a 32-block radius, staying within about 64 blocks of you. It can carry up to a full stack in addition to the item you handed it, then returns and drops the items at your feet. Press use with an empty hand to make it give back what it is holding.',
    },
    {
      question: 'What does a note block do with an allay?',
      answer:
        'If an allay hears a note block play within 16 blocks while it is returning with collected items, it delivers those items to the note block instead of to you, and lingers there for about 30 seconds. This lets you set a fixed drop point — place a note block over a hopper-and-chest system, play it once, and the allay deposits everything into that chest hands-free. It does not duplicate items or allays.',
    },
    {
      question: 'Do allays despawn or need feeding?',
      answer:
        'No. Allays are persistent and do not despawn once freed, and they do not need to be fed to keep working. They are passive and fragile (only a few hearts), so the real risks are hostile mobs, lava, and water — allays cannot enter water and will not collect submerged items. Keep them in a dry, lit, enclosed space near your farm output and they will work indefinitely.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/best-minecraft-farms', anchor: 'Best Minecraft farms to build first' },
    { href: '/blog/minecraft/minecraft-woodland-mansion-guide', anchor: 'Minecraft woodland mansion guide' },
    { href: '/blog/minecraft/minecraft-redstone-basics', anchor: 'Redstone basics for beginners' },
    { href: '/blog/minecraft/minecraft-taming-breeding-guide', anchor: 'How to tame and breed every animal' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Allay',
      title: 'Minecraft Wiki — allay behavior, item collection, and duplication',
    },
    {
      url: 'https://minecraft.wiki/w/Pillager_Outpost',
      title: 'Minecraft Wiki — pillager outpost and allay cages',
    },
    {
      url: 'https://minecraft.wiki/w/Amethyst_Shard',
      title: 'Minecraft Wiki — amethyst shards and geodes',
    },
  ],
  tldr:
    'Allays are Minecraft\'s best soft item-sorter: free them from dark oak cages at pillager outposts or jail cells in woodland mansions, then hand one an item and it collects every matching drop within ~32 blocks and returns it. Play a note block within 16 blocks to redirect where it drops items (e.g. into a hopper-and-chest) — that is delivery, not cloning. To duplicate an allay, put a music disc in a jukebox so the allay dances, then feed it an amethyst shard; both allays then share a 5-minute cooldown. Allays are passive, never despawn, and cannot enter water.',
  itemList: {
    name: 'Minecraft Allay Essentials',
    items: [
      { name: 'Find allays', description: 'Free them from dark oak cages at pillager outposts or jail cells in woodland mansions (50% chance of 1-3 each).' },
      { name: 'Assign an item', description: 'Right-click an allay with an item and it collects matching drops within ~32 blocks, carrying up to a stack.' },
      { name: 'Note block redirect', description: 'A note block played within 16 blocks makes the allay deliver items there for ~30 seconds — a fixed drop point.' },
      { name: 'Jukebox duplication', description: 'A dancing allay (jukebox + music disc) fed an amethyst shard splits into two. 5-minute cooldown after.' },
      { name: 'Allay item sorter', description: 'One allay per item type, each dropping at its own note-block-over-hopper, makes a mob-powered passive sorter.' },
    ],
  },
};
