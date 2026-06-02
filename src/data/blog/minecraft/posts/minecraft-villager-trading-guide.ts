import type { BlogPost } from '../../blogTypes';

export const minecraftVillagerTradingGuide: BlogPost = {
  slug: 'minecraft-villager-trading-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-progression',
  tags: ['villagers', 'trading', 'emeralds', 'mending', 'economy', 'progression'],
  title: 'Minecraft Villager Trading Guide: Best Trades and Setups',
  metaDescription:
    'A Minecraft villager trading guide: how professions and leveling work, the best trades to chase, zombie-curing discounts, and a simple trading hall setup.',
  excerpt:
    "Villagers are the closest thing Minecraft has to a money printer. Done right, a few breeding-cured librarians hand you Mending books and enchanted gear for a fistful of emeralds. Here is how professions, leveling, and the must-have trades actually work.",
  featuredImagePrompt:
    'A blocky Minecraft trading hall interior, a row of librarian villagers behind lecterns next to a player holding emeralds, a green trade UI floating in the foreground, torchlit cobblestone walls',
  heroImage: '/images/blog/minecraft/minecraft-villager-trading-guide/villager.webp',
  heroImageAlt:
    'A Minecraft villager standing in a village — the trader you assign a profession and level up for Mending books and cheap enchanted gear.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-villager-trading-guide/villager.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Villager',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-villager-trading-guide/villager-professions.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Villager',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-villager-trading-guide/trading-interface.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Trading',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-villager-trading-guide/zombie-villager-curing.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Trading',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-02T00:00:00.000Z',
  lastUpdated: '2026-06-02T00:00:00.000Z',
  primaryKeyword: 'minecraft villager trading guide',
  secondaryKeywords: [
    'best villager trades minecraft',
    'minecraft villager professions',
    'minecraft librarian mending',
    'how to cure zombie villager',
    'minecraft trading hall',
    'minecraft villager leveling',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-villagers-are-the-real-endgame', label: 'Why villagers are the real endgame', level: 2 },
    { id: 'how-professions-and-workstations-work', label: 'How professions and workstations work', level: 2 },
    { id: 'how-trade-leveling-works', label: 'How trade leveling works', level: 2 },
    { id: 'the-best-trades-worth-chasing', label: 'The best trades worth chasing', level: 2 },
    { id: 'the-librarian-mending-trick', label: 'The librarian Mending trick', level: 2 },
    { id: 'curing-zombie-villagers-for-discounts', label: 'Curing zombie villagers for discounts', level: 2 },
    { id: 'building-a-simple-trading-hall', label: 'Building a simple trading hall', level: 2 },
    { id: 'java-vs-bedrock-trading-notes', label: 'Java vs Bedrock trading notes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Villagers are the closest thing Minecraft has to a money printer, and most players sleep on them until they have already done everything the hard way. You can mine for diamonds for hours, or you can level one armorer and buy a full set of enchanted diamond armor for emeralds and scrap iron. You can gamble at the enchanting table for Mending, or you can cure one zombie librarian and buy a Mending book for a single emerald, over and over, forever.

This guide covers the whole loop: how professions and workstations work, how trades level up, the trades actually worth chasing, the librarian Mending trick, why curing zombie villagers is the single best economy move in the game, and how to build a trading hall that does not require a redstone degree. Where Java and Bedrock differ in ways that matter, I will flag it.

## Why villagers are the real endgame

Emeralds are the villager currency, and once you have a working trade economy, emeralds become trivial to generate — a single farmer buying crops or a fletcher buying sticks turns your spare junk into stacks of green. Spend those emeralds back into the system and you are buying things that are otherwise a grind: Mending, Protection IV diamond gear, Efficiency books, glass, redstone, and (from a cleric) the experience bottles that level up your other enchants.

The falsifiable claim that sells people on this: a maxed-out librarian will reliably sell a single enchanted book for **as little as 1 emerald** after curing discounts, including treasure enchantments like Mending that you literally cannot roll at a table. No mob farm, no fishing for hours. That is the whole pitch.

## How professions and workstations work

A villager's job — and therefore its trades — is decided by the **workstation block** it claims. An unemployed adult villager (or a nitwit, which can never take a job) wanders until it finds an unclaimed station nearby, then locks into that profession. Break the station before it has traded, and you can reset it back to unemployed and re-roll a different job.

![A lineup of Minecraft villagers showing the different profession skins, from farmer to librarian to cleric.](/images/blog/minecraft/minecraft-villager-trading-guide/villager-professions.webp)

Here is the workstation-to-profession map you will actually use:

| Profession | Workstation block | Why you want them |
| --- | --- | --- |
| Librarian | Lectern | Enchanted books (including Mending), name tags, glass |
| Cleric | Brewing stand | Buys rotten flesh; sells ender pearls, redstone, glowstone, XP bottles |
| Armorer | Blast furnace | Enchanted diamond armor for emeralds + scrap iron |
| Toolsmith | Smithing table | Enchanted diamond tools, sells/buys iron and coal |
| Weaponsmith | Grindstone | Enchanted diamond swords and axes |
| Farmer | Composter | Buys crops for emeralds, sells bread/cakes/golden carrots |
| Fletcher | Fletching table | Buys sticks and gravel; sells arrows, bows, flint |
| Fisherman | Barrel | Buys string/coal; sells enchanted fishing rods, cooked cod |
| Cartographer | Cartography table | Woodland/ocean explorer maps, banners |
| Leatherworker | Cauldron | Leather armor, saddles, dyed gear |
| Mason / Stone Mason | Stonecutter | Polished stone, quartz, terracotta, glazed terracotta |

The two professions you build your early economy around are **librarian** (lectern) and **farmer** (composter). Librarians are the enchanted-book pipeline; farmers turn your auto-wheat into infinite emeralds.

## How trade leveling works

Every villager starts at **Novice** and climbs through five tiers: Novice, Apprentice, Journeyman, Expert, and Master. You level them by trading — each trade fills an experience bar, and crossing a threshold unlocks the next tier of trades and badge (the colored gemstone on their belt, from stone up to emerald at Master).

![The Minecraft villager trading interface, showing emerald costs on the left and the item the villager offers on the right.](/images/blog/minecraft/minecraft-villager-trading-guide/trading-interface.webp)

A few mechanics that trip people up:

- **You unlock the better trades by buying the cheap ones.** A librarian will not sell you a good enchanted book at Novice. You grind the paper-and-emerald basics to push them to Journeyman/Expert, which is where Mending and the high-level enchants live.
- **Trades go out of stock and restock.** A villager can only sell a given trade a limited number of times before it grays out. It restocks when the villager works at its station — so it needs access to its workstation at least once or twice a day.
- **Prices float on demand and reputation.** Buy the same trade a lot and the price creeps up. Cure a zombie villager or trigger Hero of the Village and prices crater. More on both below.
- **Locked trades on first roll are not permanent... until they trade once.** Break and replace a librarian's lectern before they have completed a single trade and you re-roll their entire offer list. The instant they trade once, their trades are locked for good.

## The best trades worth chasing

Not every trade is worth your emeralds. These are the ones that change your game:

- **Mending book (librarian, Journeyman+).** The headline. Treasure enchantment, table-impossible, and a cured librarian sells it for 1 emerald. Build a wall of these.
- **Protection IV / Efficiency V / Unbreaking III / Fortune III books (librarian).** Any high-level enchanted book a librarian offers beats gambling at the table because you get the exact enchant you want. Curing makes them dirt cheap.
- **Enchanted diamond armor (armorer, Expert/Master).** A few emeralds plus a few iron ingots for a randomly-enchanted diamond chestplate or leggings. With curing this is the fastest route to a full Protection set.
- **Ender pearls (cleric, Expert).** A renewable pearl source without grinding endermen — huge for stocking up before an End trip.
- **Glowstone and redstone (cleric).** Renewable glowstone is otherwise a Nether-only haul; buying it is a quality-of-life win for big builds.
- **Glass (librarian, Master) and emeralds-for-crops (farmer).** The boring backbone. The farmer trade is your emerald faucet — pipe an auto-wheat or carrot farm into a farmer and you fund everything else.
- **Explorer maps (cartographer).** Woodland mansion and ocean monument maps save you hours of blind searching.

If you only build two trade lines early, make them a **librarian for books** and a **farmer for emeralds**. Everything else is gravy you can add later.

## The librarian Mending trick

Mending is treasure-only — you cannot get it from an enchanting table no matter how many bookshelves you stack. Librarians are the reliable source, and the trick is in the re-roll:

1. Make an unemployed adult villager (cure one, breed one, or grab one from a village).
2. Place a **lectern** next to it. It becomes a librarian and rolls a random first set of trades.
3. Check the trade list **before trading anything.** If the level-appropriate enchanted-book trade is not Mending, break the lectern and place it again to re-roll.
4. Repeat until the librarian offers a Mending book, then trade once to lock it in.

That is it. You are not leveling it first — you are re-rolling its starting offer until Mending shows up, then locking it forever. One Mending librarian supplies your whole world; a row of them means you never craft replacement gear again. Pair this with the loadouts in our [best Minecraft enchantments](/blog/minecraft/best-minecraft-enchantments) breakdown and your gear becomes effectively permanent.

> Bedrock difference: the re-roll trick is finicky on Bedrock because of how trade locking is handled. On Bedrock it is often more reliable to level a librarian up to Master and accept whatever book trades it rolls, or to lean on curing for the discount rather than spamming lectern breaks.

## Curing zombie villagers for discounts

This is the most overpowered, least-used mechanic in survival Minecraft. Cure a zombie villager and that villager — plus nearby villagers who witness it — permanently slashes its prices. Stack it and Mending books drop to a single emerald.

![A Minecraft trading screen showing the steep price discounts on enchanted books after curing a zombie villager.](/images/blog/minecraft/minecraft-villager-trading-guide/zombie-villager-curing.webp)

Here is the exact recipe:

1. Find a **zombie villager** (they spawn naturally as a small fraction of zombies, or a zombie that kills a villager converts it). Trap it somewhere safe and lit so other zombies do not pile in.
2. Throw or apply a **Splash Potion of Weakness** on it.
3. Feed it a **golden apple** (the regular crafted one — eight gold ingots around an apple — not the enchanted version).
4. The zombie villager shakes and shudders for a few minutes, then converts back into a normal villager with its profession ready to assign.

The cured villager gives you a deep, **permanent discount** on its trades, and the discount is biggest the first time. Cure a librarian this way and its Mending book trade routinely lands at **1 emerald**. Do it inside a small village and the gossip spreads — nearby villagers also drop their prices for a while. This is why experienced players intentionally infect-and-cure their best traders.

> Hero of the Village stacks with this. Win a raid (trigger Bad Omen, then enter a village) and the Hero of the Village effect gives every villager a temporary discount on top of curing. Combine a cured librarian with a fresh Hero of the Village buff and the prices are absurd.

## Building a simple trading hall

You do not need a fancy build to make this work. A functional trading hall is just protected villagers, each next to its workstation, with you able to reach the trade UI.

The minimum viable hall:

- **Light everything.** Zombies that reach your villagers will kill or infect them. Walls, a roof, and torches — no spawn spots inside.
- **Give each villager a 1-block pen** with its workstation block adjacent, so it can reach the station to restock but cannot wander into a neighbor's job site.
- **Keep a bed near breeders, not near your trade row.** Beds plus food trigger breeding; you do not want random babies clogging your stalls. Separate your breeder pair from your traders.
- **Line up your librarians.** A row of cured Mending librarians plus one or two book specialists (Protection, Efficiency, Fortune) and you have a one-stop enchant shop.
- **Add a farmer fed by an auto-crop farm** for the emerald faucet, and a cleric if you want renewable redstone, glowstone, and ender pearls.

If you want the food side handled automatically so your breeders never starve and your farmer always has crops to buy, the auto-farms in our [best Minecraft farms](/blog/minecraft/best-minecraft-farms) guide plug straight into a trading hall. And if you are still establishing a base, our [survival guide for beginners](/blog/minecraft/minecraft-survival-guide-beginners) covers locking down a village before you start engineering it.

## Java vs Bedrock trading notes

The core loop is identical across editions, but a few specifics differ:

- **Lectern re-rolling** is reliable on Java and inconsistent on Bedrock. On Bedrock, lean harder on curing for discounts and on leveling librarians to Master.
- **Curing discounts** work on both editions, but the exact discount math and how far gossip spreads differs. The headline result — cured librarian Mending at roughly 1 emerald — holds on both.
- **Restock behavior** is slightly different, but on both editions a villager needs to reach its workstation to refill grayed-out trades.
- **Trade prices and demand** float on both, so spreading purchases across several librarians keeps any single one from gouging you.

## Quick Action Checklist

- [ ] Assign professions by placing the right workstation: lectern (librarian), composter (farmer), brewing stand (cleric)
- [ ] Push librarians to Journeyman+ by buying cheap trades to unlock the good books
- [ ] Re-roll a librarian's lectern (before its first trade) until it offers Mending, then lock it in
- [ ] Cure zombie villagers with a Splash Potion of Weakness + a regular golden apple for permanent discounts
- [ ] Cure your Mending librarian to get the book down toward 1 emerald
- [ ] Stack Hero of the Village on top of curing for the deepest prices
- [ ] Light and wall your trading hall so zombies cannot kill or infect your traders
- [ ] Feed a farmer with an auto-crop farm to make emeralds renewable`,
  faq: [
    {
      question: 'How do you get Mending from villagers in Minecraft?',
      answer:
        'Make an unemployed villager into a librarian by placing a lectern next to it, then check its first set of trades. If it does not offer a Mending book, break and replace the lectern to re-roll its trades (this only works before the villager has traded once). Repeat until Mending appears, then trade once to lock it in. Mending is a treasure enchantment, so a librarian is the only reliable way to buy it on demand. Cure that librarian from a zombie villager and the Mending book can cost as little as one emerald.',
    },
    {
      question: 'How do you cure a zombie villager?',
      answer:
        'Trap the zombie villager somewhere safe and lit, throw or apply a Splash Potion of Weakness on it, then feed it a regular golden apple (crafted from eight gold ingots and an apple — not the enchanted golden apple). It will shudder for a few minutes and then convert back into a normal villager. The cured villager gives a permanent, steep discount on its trades, which is the best way to make a Mending librarian cheap.',
    },
    {
      question: 'What is the best villager profession to trade with?',
      answer:
        'The librarian is the highest-value profession because it sells enchanted books — including Mending and other treasure-only enchants — for emeralds. Assign it with a lectern. The farmer is a close second since it buys your surplus crops for emeralds, making the whole economy renewable. Clerics (ender pearls, redstone, glowstone) and armorers (cheap enchanted diamond armor) round out a strong trading hall.',
    },
    {
      question: 'How do villager trades level up?',
      answer:
        'Villagers climb five tiers — Novice, Apprentice, Journeyman, Expert, Master — by completing trades. Each trade fills an experience bar; crossing a threshold unlocks the next tier of offers and upgrades the gemstone badge on the villager. You unlock the strong trades, like Mending books and enchanted diamond gear, by buying the cheap low-tier trades first to push the villager up the ladder.',
    },
    {
      question: 'Why are my villager trades grayed out?',
      answer:
        'A grayed-out trade is out of stock. Each trade can only be used a set number of times before it locks until the villager restocks. A villager restocks by working at its workstation, so it needs access to its lectern, composter, blast furnace, or other job block during the day. If trades never restock, the villager probably cannot reach its workstation.',
    },
    {
      question: 'Does curing a zombie villager discount other villagers too?',
      answer:
        'Yes. When you cure a zombie villager near a village, the cured villager gossips about it and nearby villagers temporarily lower their prices as well. The cured villager itself gets the deepest, permanent discount, but the surrounding traders get a shorter-lived price drop. Combine curing with the Hero of the Village effect from winning a raid for the cheapest possible prices.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/best-minecraft-enchantments', anchor: 'Best Minecraft enchantments, ranked' },
    { href: '/blog/minecraft/best-minecraft-farms', anchor: 'Best Minecraft farms to build first' },
    { href: '/blog/minecraft/minecraft-survival-guide-beginners', anchor: 'Minecraft survival guide for beginners' },
    { href: '/blog/minecraft/minecraft-potion-brewing-guide', anchor: 'Minecraft potion brewing guide' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Trading',
      title: 'Minecraft Wiki — trading, trade leveling, and discounts',
    },
    {
      url: 'https://minecraft.wiki/w/Villager',
      title: 'Minecraft Wiki — villager professions and workstations',
    },
    {
      url: 'https://minecraft.wiki/w/Zombie_Villager',
      title: 'Minecraft Wiki — curing zombie villagers',
    },
  ],
  tldr:
    'Villagers are Minecraft\'s best economy: assign professions with workstation blocks (lectern = librarian, composter = farmer), then level them by buying cheap trades to unlock the good ones. Re-roll a librarian\'s lectern until it offers a Mending book, then cure it from a zombie villager (Splash Potion of Weakness + a regular golden apple) for a permanent discount that drops Mending to about 1 emerald. Light and wall your trading hall so zombies cannot kill your traders.',
  itemList: {
    name: 'Best Minecraft Villager Trades to Chase',
    items: [
      { name: 'Mending book (librarian)', description: 'Treasure-only enchant, table-impossible. A cured librarian sells it for as little as 1 emerald.' },
      { name: 'High-level enchanted books (librarian)', description: 'Protection IV, Efficiency V, Unbreaking III, Fortune III — the exact enchant you want, cheap after curing.' },
      { name: 'Enchanted diamond armor (armorer)', description: 'A few emeralds plus scrap iron for enchanted diamond pieces. Fastest route to a full Protection set.' },
      { name: 'Emeralds for crops (farmer)', description: 'Your emerald faucet. Pipe an auto-wheat or carrot farm into a farmer to fund the whole economy.' },
      { name: 'Ender pearls (cleric)', description: 'Renewable pearls without grinding endermen — stock up before an End trip.' },
      { name: 'Glowstone and redstone (cleric)', description: 'Renewable glowstone and redstone, otherwise a Nether or mining haul.' },
      { name: 'Explorer maps (cartographer)', description: 'Woodland mansion and ocean monument maps that save hours of blind searching.' },
    ],
  },
};
