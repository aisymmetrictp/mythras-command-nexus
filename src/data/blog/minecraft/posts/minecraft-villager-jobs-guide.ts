import type { BlogPost } from '../../blogTypes';

export const minecraftVillagerJobsGuide: BlogPost = {
  slug: 'minecraft-villager-jobs-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-guides',
  tags: ['villagers', 'professions', 'workstations', 'trading', 'jobs', 'villages'],
  title: 'Minecraft Villager Jobs Guide: Professions & Workstations',
  metaDescription:
    'A complete Minecraft villager jobs guide: all 13 professions, the workstation each one needs, how villagers claim jobs, and how to assign the profession you want.',
  excerpt:
    "Every villager job comes down to one block. Put down a lectern and you get a librarian; put down a composter and you get a farmer. Here is the full profession-to-workstation map, how the claiming actually works, and how to force the exact villager you want.",
  featuredImagePrompt:
    'A blocky Minecraft villager with a big nose and crossed arms standing beside a lectern and a composter inside a village house, other job-site blocks visible on the wall behind',
  heroImage: '/images/blog/minecraft/minecraft-villager-jobs-guide/villager.webp',
  heroImageAlt:
    'A Minecraft plains villager — its profession is decided entirely by the job-site block it claims.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-villager-jobs-guide/villager.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Villager',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-villager-jobs-guide/composter.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Composter',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-villager-jobs-guide/lectern.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Lectern',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-villager-jobs-guide/farmer.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Villager',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-01T00:00:00.000Z',
  lastUpdated: '2026-07-01T00:00:00.000Z',
  primaryKeyword: 'minecraft villager jobs guide',
  secondaryKeywords: [
    'minecraft villager professions',
    'minecraft villager workstations',
    'how to change villager job minecraft',
    'minecraft job site blocks',
    'minecraft villager not taking job',
    'minecraft nitwit villager',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'one-block-decides-everything', label: 'One block decides everything', level: 2 },
    { id: 'the-full-profession-workstation-map', label: 'The full profession-workstation map', level: 2 },
    { id: 'how-a-villager-claims-a-job', label: 'How a villager claims a job', level: 2 },
    { id: 'how-to-assign-the-job-you-want', label: 'How to assign the job you want', level: 2 },
    { id: 'resetting-a-villager-to-re-roll-trades', label: 'Resetting a villager to re-roll trades', level: 2 },
    { id: 'nitwits-and-the-green-robe-trap', label: 'Nitwits and the green-robe trap', level: 2 },
    { id: 'the-jobs-worth-prioritizing', label: 'The jobs worth prioritizing', level: 2 },
    { id: 'why-your-villager-wont-take-the-job', label: 'Why your villager won\'t take the job', level: 2 },
    { id: 'java-vs-bedrock-notes', label: 'Java vs Bedrock notes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Here is the whole villager economy in one sentence: a villager's job is decided entirely by the block you put in front of it. Not its clothes, not its village, not a menu — a single workstation. Drop a lectern and an unemployed villager becomes a librarian selling enchanted books. Drop a composter and you get a farmer. Break the block and change your mind, and you can re-roll the whole thing. Once that clicks, the entire trading game opens up.

This guide is the complete profession-to-workstation map — all 13 jobs and the exact block each one needs — plus how the claiming mechanic actually works, how to force the specific villager you want, how to reset trades, and why your villager sometimes stubbornly refuses to take a job. Every number and mapping here is checked against the Minecraft Wiki. If you want the deep dive on the *trades* themselves, that lives in our [villager trading guide](/blog/minecraft/minecraft-villager-trading-guide); this post is about the jobs.

## One block decides everything

A villager has one of three states: **unemployed**, **employed** (has a profession), or **nitwit** (a permanent no-job villager in a green robe). Baby villagers have no job until they grow up.

An **unemployed** adult villager — brown robe, no apron or props — is looking for work. Put an unclaimed **job-site block** within range and it will walk over, claim it, and instantly change into that profession, complete with new clothes and a fresh trade list. That is the entire mechanic. The block is the job.

![A Minecraft plains villager — profession, clothing, and trades all come from whichever job-site block it claims.](/images/blog/minecraft/minecraft-villager-jobs-guide/villager.webp)

The important consequence: **you** control what your villagers do. You are not stuck with whatever a village spawned. Bring the right blocks and you can build a librarian for books, a cleric for redstone dust and XP bottles, a farmer for emeralds-from-crops, whatever your base needs.

## The full profession-workstation map

There are 13 working professions, each tied to exactly one job-site block. Memorize the ones you use; here is all of them:

- **Armorer** → **Blast Furnace** — sells armor and buys coal, ingots.
- **Butcher** → **Smoker** — buys meat, sells cooked meat and emeralds.
- **Cartographer** → **Cartography Table** — sells maps, including explorer maps to mansions and monuments.
- **Cleric** → **Brewing Stand** — buys rotten flesh, sells redstone, lapis, glowstone, ender pearls, XP bottles.
- **Farmer** → **Composter** — buys crops for emeralds, sells bread, cake, golden carrots, glass bottles.
- **Fisherman** → **Barrel** — buys string and coal, sells cooked fish and enchanted fishing rods.
- **Fletcher** → **Fletching Table** — buys sticks and flint, sells arrows, bows, crossbows.
- **Leatherworker** → **Cauldron** — sells leather armor and horse armor.
- **Librarian** → **Lectern** — sells enchanted books, name tags, bookshelves, glass, clocks, compasses.
- **Mason** (Stone Mason) → **Stonecutter** — sells polished stones, terracotta, quartz.
- **Shepherd** → **Loom** — buys wool, sells wool, dye, beds, banners, paintings.
- **Toolsmith** → **Smithing Table** — sells stone/iron/diamond tools and bells.
- **Weaponsmith** → **Grindstone** — sells axes, swords, including enchanted diamond gear.

Two blocks pull double duty as reminders: the **composter** (farmer) and the **lectern** (librarian) are the two you will place most, because farmers and librarians are the highest-value everyday trades.

![A Minecraft composter — place one near an unemployed villager and it becomes a farmer.](/images/blog/minecraft/minecraft-villager-jobs-guide/composter.webp)

## How a villager claims a job

Claiming is not instant hand-waving — there is a real pathfinding routine, and knowing it saves you a lot of "why won't this work" frustration.

In **Java Edition**, an unemployed adult villager searches for the nearest unclaimed job-site block within a **48-block sphere**. When it finds one, it pathfinds toward it and stakes a provisional claim. If it cannot reach the block within **90 seconds**, it drops the claim (and can immediately try again). To *fully* claim the block and switch profession, the villager has to get within a **2-block radius** of the block's center. When the claim locks in, the villager emits **green particles** — that is your confirmation it worked, and no other villager can take that block unless the owner gives it up.

In **Bedrock Edition**, villagers search a **16-block radius and 4-block height** instead, and the claimed block gets added to a shared village list. The green-particle confirmation is the same.

Two things every villager needs before it will even look for a job:

- **It must be daytime and the villager must be awake** (Java claims happen while awake; Bedrock villagers can claim while sleeping, but you still want it near the block).
- **The path has to be clear.** If the villager physically cannot walk to within 2 blocks of the workstation, it never claims it. This is the single most common reason a job assignment "fails."

## How to assign the job you want

Controlling professions is easy once you cage the randomness. The reliable method:

1. **Get an unemployed adult villager alone.** Trap one in a small pen — a 1×1 boat, a fenced booth, or a doorway you block off. Isolation means no competing job blocks.
2. **Place a single job-site block** right next to it, within the 2-block claim radius. Only that block should be reachable.
3. **Wait for the green particles.** The villager walks up, the sparkles pop, and it changes profession and clothing on the spot.
4. **Break the block once claimed** if you want to move it — but only *before* the villager makes its first trade (more on that below).

The trick to farming enchanted books cheaply is to give a librarian a lectern, check its book offer, and if you do not like the enchantment, break and replace the lectern to re-roll — repeat until you get Mending, Unbreaking III, or whatever you are after. The full re-roll routine is in the [trading guide](/blog/minecraft/minecraft-villager-trading-guide), and it pairs beautifully with a [beacon](/blog/minecraft/minecraft-beacon-guide) base for a proper trading hall.

## Resetting a villager to re-roll trades

There is a hard line you cannot cross: **once a villager makes its first trade, its profession is locked**. Break the workstation after that and it becomes "unhappy" but it does not change job, and its trades are permanent.

Before the first trade, though, everything is fluid:

- **Break the job-site block** and the villager reverts to unemployed, dropping its trade list.
- **Place a new block** (same or different type) and it claims again with a **freshly rolled set of trades**.
- This is how you cycle a librarian's book offers or a cleric's prices until the numbers are good.

![A Minecraft lectern — the librarian's workstation and the block you re-roll to hunt for cheap enchanted books.](/images/blog/minecraft/minecraft-villager-jobs-guide/lectern.webp)

So the golden rule of trade-hunting: **do not trade with a villager until you like its offers.** One accidental purchase and you are stuck with those trades forever.

## Nitwits and the green-robe trap

Not every villager can work. A **nitwit** is a permanent, jobless villager identifiable by its **green robe** — it will never claim a workstation no matter what you do. Nitwits generate naturally and can also result from a **zombie villager** you cured that happened to be a nitwit.

The trap: green-robe nitwits look a little like unemployed villagers to a new player, and you can waste real time trying to give one a lectern. If a villager flatly refuses every job block you place, check the robe. Green means nitwit — cull it from your breeder or wall it off, because it will never trade and it still eats breeding slots.

For building a proper villager population, note that **only employed and unemployed villagers matter** to your economy; nitwits are dead weight. Our [villages guide](/blog/minecraft/minecraft-villages-guide) covers keeping a healthy village that breeds workers instead of nitwits.

## The jobs worth prioritizing

You do not need all 13. If you are building a trading hall, these earn their spot first:

- **Librarian (lectern)** — the single best profession. Enchanted books, especially **Mending**, are the reason most players build villager halls at all.
- **Cleric (brewing stand)** — sells **redstone, lapis, glowstone, and ender pearls** for emeralds, and buys rotten flesh you have piles of. A renewable ender pearl source is huge for [end city](/blog/minecraft/minecraft-end-cities-guide) trips.
- **Farmer (composter)** — the easiest emerald engine. Buys your surplus crops, so a wheat or carrot [farm](/blog/minecraft/best-minecraft-farms) turns into an emerald printer.
- **Toolsmith / Weaponsmith / Armorer** — enchanted diamond gear for emeralds, cheaper than enchanting it yourself once you factor in the [XP](/blog/minecraft/minecraft-xp-guide) cost.
- **Cartographer (cartography table)** — the *only* way to buy woodland mansion and ocean monument explorer maps, which is how you find those structures without wandering.

Everything else is situational. Fisherman, fletcher, shepherd, mason, butcher, and leatherworker are nice-to-haves, not priorities.

## Why your villager won't take the job

Nine times out of ten it is one of these, in order of likelihood:

1. **It's a nitwit.** Green robe. It will never work. Check first.
2. **It can't reach the block.** The villager must path within 2 blocks of the workstation's center. A block on the far side of a wall, a fence, or up a step it can't climb never gets claimed.
3. **The block is already claimed.** Each job-site block serves one owner. If another villager grabbed it, no one else can — space workstations out.
4. **It already traded once and is locked.** Post-first-trade, the profession is permanent. You cannot re-job it.
5. **It's a baby.** Babies have no profession until they grow up. Wait it out.
6. **It's asleep or it's night** (Java). Claims happen while awake in the daytime. Come back in the morning.

Fix the reachability issue and most "broken" job assignments start working immediately.

## Java vs Bedrock notes

The profession system is the same across editions, with a few mechanical differences that matter when you build:

- **Search range.** Java uses a **48-block sphere**; Bedrock uses a **16-block radius, 4-block height**. Keep your workstations closer to villagers on Bedrock.
- **Claiming while asleep.** Bedrock villagers can claim a job while sleeping; Java villagers claim while awake. Practically, keep the block reachable on both.
- **Profession-to-workstation mappings are identical** — every block in the map above works the same on both editions.
- **Trade content varies slightly** by edition and version (prices and exact offers), but the job each block produces does not change.

If a technique from a Java tutorial isn't working on Bedrock, the range difference is usually why — pull the workstation closer.

## Quick Action Checklist

- [ ] Remember: one job-site block = one profession (lectern = librarian, composter = farmer)
- [ ] Isolate an unemployed adult villager so it can only reach the block you want
- [ ] Place a single unclaimed workstation within the 2-block claim radius
- [ ] Watch for green particles — that confirms the job is claimed
- [ ] Re-roll trades by breaking and replacing the block BEFORE the first trade
- [ ] Never trade until you like the offers — the first trade locks the profession forever
- [ ] Check for a green robe (nitwit) if a villager refuses every job
- [ ] Prioritize librarian, cleric, and farmer for a trading hall
- [ ] If a villager won't claim, confirm it can physically path within 2 blocks of the block
- [ ] On Bedrock, keep workstations close — the search range is only 16 blocks`,
  faq: [
    {
      question: 'How do you give a villager a job in Minecraft?',
      answer:
        'Place an unclaimed job-site block within reach of an unemployed adult villager (brown robe, no apron). It will pathfind to the block, and once it gets within about 2 blocks of the center it claims the block, emits green particles, and instantly changes into that profession with new clothes and a trade list. Each profession has one specific block — a lectern makes a librarian, a composter makes a farmer, and so on. The villager must be able to physically walk to the block, or it never claims it.',
    },
    {
      question: 'What are all the villager professions and their workstations?',
      answer:
        'There are 13 working professions, each tied to one block: Armorer (Blast Furnace), Butcher (Smoker), Cartographer (Cartography Table), Cleric (Brewing Stand), Farmer (Composter), Fisherman (Barrel), Fletcher (Fletching Table), Leatherworker (Cauldron), Librarian (Lectern), Mason (Stonecutter), Shepherd (Loom), Toolsmith (Smithing Table), and Weaponsmith (Grindstone). Nitwits (green robe) never take a job, and baby villagers have no profession until they grow up.',
    },
    {
      question: 'How do you change a villager\'s job in Minecraft?',
      answer:
        'You can only change a job before the villager makes its first trade. Break its current job-site block and it reverts to unemployed, then place a different workstation and it claims the new profession with a freshly rolled trade list. Once a villager completes even one trade, its profession is locked permanently and breaking the block will not re-job it — so decide the job before you buy anything.',
    },
    {
      question: 'Why won\'t my villager take a job in Minecraft?',
      answer:
        'The usual causes, in order: it is a nitwit (green robe, never works); it physically cannot path to within 2 blocks of the workstation (a wall, fence, or step blocks it); the block is already claimed by another villager; it already traded once and is locked into its current job; it is still a baby; or it is night/asleep in Java Edition. Fixing reachability solves most cases — make sure the villager has a clear walking path right up to the block.',
    },
    {
      question: 'What is a nitwit villager?',
      answer:
        'A nitwit is a permanent jobless villager wearing a green robe. It can never claim a workstation or offer trades, no matter what block you place. Nitwits generate naturally and can also appear when you cure a zombie villager that was a nitwit. Because they take up breeding and housing slots without contributing trades, most players wall them off or remove them from a breeder to keep the village producing workable villagers.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/minecraft-villager-trading-guide', anchor: 'Villager trading guide' },
    { href: '/blog/minecraft/minecraft-villages-guide', anchor: 'Minecraft villages guide' },
    { href: '/blog/minecraft/best-minecraft-farms', anchor: 'Best Minecraft farms to build first' },
    { href: '/blog/minecraft/minecraft-beacon-guide', anchor: 'Minecraft beacon guide' },
    { href: '/blog/minecraft/minecraft-xp-guide', anchor: 'Minecraft XP guide' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Villager',
      title: 'Minecraft Wiki — villager professions and job-site claiming',
    },
    {
      url: 'https://minecraft.wiki/w/Trading',
      title: 'Minecraft Wiki — villager trading and profession trades',
    },
  ],
  tldr:
    'A villager\'s job is set entirely by the job-site block it claims: lectern makes a librarian, composter makes a farmer, and so on across all 13 professions. Place an unclaimed workstation an unemployed adult can walk within 2 blocks of, wait for the green particles, and it takes the job. You can re-roll trades by breaking and replacing the block — but only before the villager\'s first trade, which locks the profession forever. Green-robe nitwits never work. Prioritize librarian, cleric, and farmer for a trading hall.',
  itemList: {
    name: 'Minecraft Villager Professions & Workstations',
    items: [
      { name: 'Librarian → Lectern', description: 'Enchanted books (including Mending), name tags, bookshelves, glass, clocks, compasses. The top-priority job.' },
      { name: 'Cleric → Brewing Stand', description: 'Sells redstone, lapis, glowstone, and ender pearls; buys rotten flesh. A renewable ender pearl source.' },
      { name: 'Farmer → Composter', description: 'Buys surplus crops for emeralds and sells bread, cake, and golden carrots. The easiest emerald engine.' },
      { name: 'Toolsmith → Smithing Table', description: 'Sells stone through diamond tools and bells, often enchanted, for emeralds.' },
      { name: 'Weaponsmith → Grindstone', description: 'Sells axes and swords, including enchanted diamond gear.' },
      { name: 'Armorer → Blast Furnace', description: 'Sells armor and buys coal and ingots.' },
      { name: 'Cartographer → Cartography Table', description: 'The only source of woodland mansion and ocean monument explorer maps.' },
      { name: 'Fisherman → Barrel', description: 'Sells cooked fish and enchanted fishing rods; buys string and coal.' },
      { name: 'Fletcher → Fletching Table', description: 'Sells arrows, bows, and crossbows; buys sticks and flint.' },
      { name: 'Shepherd → Loom', description: 'Sells wool, dye, beds, banners, and paintings; buys wool.' },
      { name: 'Mason → Stonecutter', description: 'Sells polished stones, terracotta, and quartz.' },
      { name: 'Butcher → Smoker', description: 'Buys raw meat and sells cooked meat and emeralds.' },
      { name: 'Leatherworker → Cauldron', description: 'Sells leather armor and horse armor.' },
    ],
  },
};
