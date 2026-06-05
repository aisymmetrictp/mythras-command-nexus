import type { BlogPost } from '../../blogTypes';

export const minecraftArmorGuide: BlogPost = {
  slug: 'minecraft-armor-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-progression',
  tags: ['armor', 'netherite', 'armor-trims', 'enchanting', 'progression'],
  title: 'Minecraft Armor Guide: Netherite, Trims & Best Setups',
  metaDescription:
    'Minecraft armor guide: every tier from leather to netherite, how to upgrade with smithing templates, armor toughness and knockback resistance, plus armor trims and best enchant setups.',
  excerpt:
    "Armor in Minecraft isn't just 'more points = better.' Netherite adds toughness and knockback resistance that diamond doesn't, trims are pure cosmetics people treat like loot, and the enchant setup matters more than the material. Here's the whole stack, sorted.",
  featuredImagePrompt:
    'A blocky Minecraft player wearing a full set of dark netherite armor, standing in a stronghold corridor with torches, the armor faintly glowing from enchantments, gold and diamond trim accents on the chestplate',
  heroImage: '/images/blog/minecraft/minecraft-armor-guide/netherite-armor.webp',
  heroImageAlt:
    'A Minecraft player wearing a full set of netherite armor — the highest armor tier, with more toughness and knockback resistance than diamond.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-armor-guide/netherite-armor.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Armor',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-armor-guide/diamond-armor.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Armor',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-armor-guide/armor-trims.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Armor_Trim',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-armor-guide/smithing-table.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Smithing_Table',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-05T00:00:00.000Z',
  lastUpdated: '2026-06-05T00:00:00.000Z',
  primaryKeyword: 'minecraft armor guide',
  secondaryKeywords: [
    'minecraft netherite armor',
    'minecraft armor trims',
    'how to apply armor trims',
    'armor toughness minecraft',
    'best armor enchantments minecraft',
    'minecraft armor tiers',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'the-armor-tiers-ranked', label: 'The armor tiers, ranked', level: 2 },
    { id: 'armor-points-toughness-and-knockback-resistance', label: 'Armor points, toughness, and knockback resistance', level: 2 },
    { id: 'how-to-get-and-upgrade-netherite-armor', label: 'How to get and upgrade netherite armor', level: 2 },
    { id: 'armor-trims-the-cosmetic-endgame', label: 'Armor trims: the cosmetic endgame', level: 2 },
    { id: 'how-to-apply-an-armor-trim', label: 'How to apply an armor trim', level: 2 },
    { id: 'best-enchant-setups-per-piece', label: 'Best enchant setups per piece', level: 2 },
    { id: 'java-vs-bedrock-armor-notes', label: 'Java vs Bedrock armor notes', level: 2 },
    { id: 'quick-armor-checklist', label: 'Quick armor checklist', level: 2 },
  ],
  content: `Most players think armor is a straight ladder: leather is bad, iron is fine, diamond is good, netherite is best, done. That's true for the raw protection number, but it skips the two things that actually decide whether you survive a creeper at point-blank range — armor toughness and knockback resistance — and it completely ignores that the best diamond setup beats the worst netherite setup every single time. The material is the chassis. The enchantments and the toughness stat are the engine.

This guide walks the whole stack: what each tier is actually worth, the difference between armor points and the hidden toughness stat, exactly how to drag a diamond set up to netherite (yes, you need a specific smithing template now), how armor trims work as pure cosmetics, and the enchant loadout each piece should be wearing by the time you fight the dragon.

## The armor tiers, ranked

There are six armor materials. Each full set adds a different amount of armor points (each point is half an armor icon on your HUD, and the bar maxes at 20 points / 10 icons):

| Material | Full-set armor points | Where it comes from | Verdict |
| --- | --- | --- | --- |
| Leather | 7 | Crafted from leather, dyeable | Day-one stopgap, basically cosmetic after that |
| Golden | 11 | Crafted from gold ingots | Wastes gold, low durability. Skip |
| Chainmail | 12 | Not craftable — trades/loot only | A trivia answer, never a goal |
| Iron | 15 | Crafted from iron ingots | The real first set everyone should build |
| Diamond | 20 | Crafted from diamonds | Caps the armor bar. The workhorse |
| Netherite | 20 | Upgraded from diamond | Same points as diamond, but with toughness and knockback resistance |

Two things jump out. First, **diamond and netherite both hit the 20-point cap** — netherite does not give you a taller armor bar. Second, **gold and chainmail are traps.** Gold armor enchants well and looks shiny, but it has worse durability than iron and eats a precious resource. Chainmail can't even be crafted in survival; you only get it from trades, mob drops, or loot. The honest progression is iron, then diamond, then netherite, and you can comfortably skip everything in between.

![A Minecraft player in full diamond armor, which reaches the 20-point armor cap and is the standard mid-to-late-game set before netherite.](/images/blog/minecraft/minecraft-armor-guide/diamond-armor.webp)

## Armor points, toughness, and knockback resistance

Here's where "netherite is just a skin on diamond" falls apart. Netherite adds two stats diamond doesn't have:

- **Armor toughness.** This reduces how much big hits chew through your protection. With plain armor points, a single huge hit (a charged creeper, a fall, a Warden swing) ignores a chunk of your defense. Toughness softens that — the more toughness you have, the better your armor holds up against high-damage spikes. Diamond armor already has some toughness (2 per piece); **netherite has more (3 per piece)**, which is why a netherite set genuinely tanks burst damage better than diamond even though both show 20 armor points.
- **Knockback resistance.** Each netherite piece gives knockback resistance, and it stacks across the set. A full netherite set means mobs and players shove you around far less — you basically plant your feet. This is huge against hoglins, ravagers, and in PvP, where getting knocked into lava or off a ledge is how you actually die.

So the real reason to grind netherite isn't a bigger number. It's that the same 20 points absorbs spike damage better and you stop getting bullied around the arena. On top of that, **netherite armor floats in lava and won't burn**, which alone is worth the upgrade before any serious Nether or End run.

One more mechanic worth knowing: armor has **durability**, and every hit you take grinds it down. That's why **Unbreaking and Mending** (covered in the enchant section) aren't optional luxuries — without them you'll be re-crafting armor constantly. The protection value does not drop as armor gets damaged; it works at full strength until the piece breaks, then provides nothing.

## How to get and upgrade netherite armor

You don't craft netherite armor from scratch — you **upgrade an existing diamond set**. The chain looks like this:

1. **Mine ancient debris** in the Nether. It peaks at **Y 15** (band roughly Y 8–22) and never sits exposed to air or lava, so you blast it out with beds or TNT rather than spotting it in walls. Full walkthrough in our [netherite mining guide](/blog/minecraft/how-to-find-netherite-minecraft).
2. **Smelt each ancient debris** into netherite scrap in a furnace or blast furnace.
3. **Combine 4 netherite scrap + 4 gold ingots** in a crafting grid for **1 netherite ingot.** That's the bottleneck — every ingot costs 4 debris and 4 gold, and a full armor set needs 4 ingots, so 16 debris and 16 gold just for the armor.
4. **Upgrade at a smithing table** using a **Netherite Upgrade smithing template**, 1 netherite ingot, and the diamond piece you want to upgrade.

![The smithing table interface used to upgrade diamond gear to netherite — it takes the Netherite Upgrade template, a netherite ingot, and the diamond piece.](/images/blog/minecraft/minecraft-armor-guide/smithing-table.webp)

That **smithing template requirement** is the part old guides get wrong. Since the 1.20 update you can no longer upgrade with just an ingot — you need the **Netherite Upgrade template**, which is found in **bastion remnant** chests in the Nether. The good news: you only ever need to find one, because you can **duplicate it** by combining the template with 7 diamonds and a netherrack block at a smithing table. Find one, copy it as many times as you need.

The single best part of the upgrade: it **carries over every enchantment** on the diamond piece. So you should always enchant your diamond armor first, max it out, and only then upgrade the finished, enchanted set to netherite. The enchantments are the expensive, time-consuming part; netherite is the final coat of paint that makes good gear lava-proof and tougher.

## Armor trims: the cosmetic endgame

Armor trims are **purely cosmetic** — they change how your armor looks and do not add a single armor point, durability, or stat. That's worth saying twice, because people grind for them like they're upgrades: a trim is drip, not defense. What they're great for is making your set unmistakably yours, color-coordinating a team on a server, or just flexing that you cleared the structures that drop the rare templates.

![A row of netherite armor sets with different armor trims applied, each one a different pattern and material color — trims are cosmetic only and change the look, not the stats.](/images/blog/minecraft/minecraft-armor-guide/armor-trims.webp)

A trim is two choices stacked together:

- **The pattern**, set by a **smithing template** you find in a structure. There are many patterns (Coast, Dune, Eye, Rib, Sentry, Snout, Spire, Tide, Vex, Ward, Wild, plus the rarer Silence, Wayfinder, Raiser, Shaper, Host, Flow, and Bolt). Each comes from a specific structure — the Sentry trim from pillager outposts, the Eye trim from strongholds, the Vex trim from woodland mansions, the Snout from bastions, and so on. The rarest ones (like Silence from the deep dark / ancient cities and Flow/Bolt from trial chamber vaults) are genuine trophies.
- **The color**, set by the **material** you add: iron, copper, gold, lapis, emerald, diamond, netherite, redstone, amethyst, or quartz. Each tints the trim differently, so the same pattern looks completely different in gold versus amethyst.

Like the netherite template, **trim templates can be duplicated** — combine the template with 7 of the matching material's diamond-tier equivalent (7 diamonds, for the standard duplication) plus the base block, so once you've found a pattern you can apply it forever. The hunt is finding the pattern the first time.

## How to apply an armor trim

Applying a trim happens at the **smithing table**, the same station you use for the netherite upgrade. You drop three things in:

1. The **armor trim smithing template** (the pattern).
2. The **armor piece** you want to decorate.
3. The **material** that sets the color (1 ingot/gem of iron, gold, diamond, netherite, copper, lapis, emerald, redstone, amethyst, or quartz).

Out comes the same piece with the trim baked onto it. A few rules that trip people up:

- You can trim **any armor material**, including leather and netherite. A trimmed leather cap is a totally valid look.
- Each piece holds **one trim at a time.** Re-applying a new trim replaces the old one — there's no stacking patterns.
- The trim survives the netherite upgrade and vice versa, so the order doesn't matter; trim before or after upgrading, your call.
- It costs the template's worth nothing extra in stats — again, **zero gameplay effect.** It's drip.

If you want the full survivability stack instead of the cosmetic one, the stat that actually matters is the enchantment loadout — which is next.

## Best enchant setups per piece

This is where armor is won. The general rule: **Protection IV + Unbreaking III + Mending on every piece**, then a piece-specific enchant on top. Protection is the right baseline because it reduces most damage types at once; the specialized protections (Blast, Fire, Projectile) are better against one source but worse overall, and **you can only run one protection type per piece.**

| Piece | Core enchants | Piece-specific pick | Notes |
| --- | --- | --- | --- |
| Helmet | Protection IV, Unbreaking III, Mending | Respiration III + Aqua Affinity I | Underwater breathing + no mining penalty. Essential for ocean monuments |
| Chestplate | Protection IV, Unbreaking III, Mending | — | Your highest-defense slot; no special add-on needed |
| Leggings | Protection IV, Unbreaking III, Mending | Swift Sneak III (treasure) | Sneak at near-normal speed — huge in ancient cities |
| Boots | Protection IV, Unbreaking III, Mending | Feather Falling IV | Slashes fall damage. Add Depth Strider III for water or Soul Speed for the Nether |

The standard "best survival set" is therefore **Protection IV + Unbreaking III + Mending on all four pieces**, **Feather Falling IV on the boots**, **Respiration III + Aqua Affinity on the helmet** if you do ocean content, and **Swift Sneak III on the leggings** for ancient-city runs. We break down the full enchantment tier list — including why **Thorns is mostly a trap** (it reflects damage but burns durability fast) — in our [best Minecraft enchantments guide](/blog/minecraft/best-minecraft-enchantments).

Remember the upgrade order: **enchant your diamond armor fully, then upgrade to netherite** so the enchantments carry over. Don't waste an enchant on a fresh diamond piece you'll replace.

## Java vs Bedrock armor notes

The armor system is nearly identical across editions, with a few differences worth knowing:

- **Armor points and the 20-point cap** are the same on both — diamond and netherite both reach 20.
- **Toughness and knockback resistance** work on both editions; netherite's edge over diamond holds everywhere.
- **The Netherite Upgrade template requirement** (since 1.20) applies to both Java and Bedrock — you need the template either way.
- **Armor trims** exist on both editions, with the same pattern-plus-material system and the same smithing-table application.
- **Protection stacking math** differs slightly between editions, but **Protection IV on all four pieces** is the correct call on both.

Wherever you play: build iron, jump to enchanted diamond, upgrade to netherite for the toughness and lava-proofing, and trim it last if you want the look.

## Quick armor checklist

- [ ] Skip gold and chainmail — go iron, then diamond, then netherite
- [ ] Remember diamond and netherite both cap at 20 armor points; netherite's edge is toughness + knockback resistance + lava-proofing
- [ ] Mine ancient debris at Y 15, smelt to scrap, 4 scrap + 4 gold = 1 ingot
- [ ] Find one Netherite Upgrade template in a bastion, then duplicate it (7 diamonds + netherrack)
- [ ] Enchant your diamond set fully BEFORE upgrading — enchants carry over
- [ ] Protection IV + Unbreaking III + Mending on every piece
- [ ] Feather Falling IV on boots; Respiration + Aqua Affinity on helmet for oceans; Swift Sneak on leggings for ancient cities
- [ ] Treat armor trims as cosmetic only — they add zero stats
- [ ] Apply trims at the smithing table: template + armor piece + coloring material`,
  faq: [
    {
      question: 'Is netherite armor better than diamond armor?',
      answer:
        'Yes, but not because of armor points — diamond and netherite both hit the 20-point cap, so they show the same armor bar. Netherite is better because it adds two stats diamond lacks: more armor toughness (3 per piece versus diamond\'s 2), which absorbs high-damage hits like charged creepers and the Warden much better, and knockback resistance, which keeps you from being shoved around in PvP and by mobs. Netherite armor also floats in lava and does not burn, which diamond does. Same number, meaningfully better survival.',
    },
    {
      question: 'How do you upgrade diamond armor to netherite?',
      answer:
        'At a smithing table, combine a Netherite Upgrade smithing template, one netherite ingot, and the diamond armor piece. Since the 1.20 update you must have the template — you cannot upgrade with just an ingot anymore. The template is found in bastion remnant chests in the Nether, and you only need one because you can duplicate it by combining it with 7 diamonds and a netherrack block. The upgrade keeps every enchantment on the diamond piece, so always fully enchant your diamond armor before upgrading.',
    },
    {
      question: 'Do armor trims give any stats or protection?',
      answer:
        'No. Armor trims are purely cosmetic — they change how your armor looks and add zero armor points, zero durability, and zero gameplay effect. They exist to personalize your set, coordinate a team on a server, or show off that you cleared the structure that drops a rare pattern. If you are grinding trims expecting a defense boost, you are grinding for drip, not protection.',
    },
    {
      question: 'How do you apply an armor trim in Minecraft?',
      answer:
        'Use a smithing table. Place three items: the armor trim smithing template (which sets the pattern), the armor piece you want to decorate, and a coloring material (iron, copper, gold, lapis, emerald, diamond, netherite, redstone, amethyst, or quartz) that tints the trim. Each piece holds one trim at a time, and applying a new one replaces the old. Trim templates can be duplicated, so once you find a pattern you can reuse it forever — the hard part is finding each pattern, since they drop from specific structures.',
    },
    {
      question: 'What are the best armor enchantments?',
      answer:
        'Protection IV, Unbreaking III, and Mending on every piece is the core. Then add Feather Falling IV on the boots to cut fall damage, Respiration III plus Aqua Affinity on the helmet for underwater work, and Swift Sneak III on the leggings for ancient-city runs. Protection IV is the default because it reduces most damage types at once; the specialized protections only beat it against one specific source and you can only run one protection type per piece. Skip Thorns on most builds — it reflects damage but destroys durability.',
    },
    {
      question: 'What armor tier should I skip?',
      answer:
        'Gold and chainmail. Gold armor looks nice and enchants well, but it has worse durability than iron and wastes a valuable resource, so it is never worth crafting as a real set. Chainmail cannot even be crafted in survival — you only get it from villager trades, mob drops, or loot — so it is never a progression goal. The honest path is iron first, then diamond (which caps the armor bar at 20 points), then upgrade that diamond set to netherite.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/how-to-find-netherite-minecraft', anchor: 'How to find netherite (mine the debris for this set)' },
    { href: '/blog/minecraft/best-minecraft-enchantments', anchor: 'Best Minecraft enchantments for your armor' },
    { href: '/blog/minecraft/minecraft-nether-guide', anchor: 'Minecraft Nether survival guide' },
    { href: '/blog/minecraft/how-to-beat-the-wither', anchor: 'How to beat the Wither (gear up first)' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Armor',
      title: 'Minecraft Wiki — armor tiers, armor points, and toughness',
    },
    {
      url: 'https://minecraft.wiki/w/Smithing_Template',
      title: 'Minecraft Wiki — smithing templates (netherite upgrade and armor trims)',
    },
    {
      url: 'https://minecraft.wiki/w/Armor_Trim',
      title: 'Minecraft Wiki — armor trim patterns, materials, and application',
    },
  ],
  tldr:
    'Minecraft armor goes leather to netherite, but diamond and netherite both cap at 20 armor points — netherite is better only because it adds armor toughness, knockback resistance, and lava-proofing. Upgrade diamond to netherite at a smithing table with a Netherite Upgrade template (found in bastions, then duplicated). Armor trims are purely cosmetic, applied at the smithing table with a template plus a coloring material. The setup that actually matters is Protection IV, Unbreaking III, and Mending on every piece, with Feather Falling IV on boots.',
  itemList: {
    name: 'Minecraft Armor Tiers, Ranked',
    items: [
      { name: 'Netherite armor', description: '20 armor points plus extra toughness, knockback resistance, and lava immunity. Upgraded from diamond. The endgame set.' },
      { name: 'Diamond armor', description: '20 armor points — caps the armor bar. The workhorse set you enchant before upgrading to netherite.' },
      { name: 'Iron armor', description: '15 armor points. Cheap and craftable. The real first set everyone should build.' },
      { name: 'Chainmail armor', description: '12 armor points. Not craftable in survival — trades and loot only. Never a goal.' },
      { name: 'Golden armor', description: '11 armor points but low durability and a waste of gold. Skip it.' },
      { name: 'Leather armor', description: '7 armor points. A day-one stopgap; dyeable, so mostly cosmetic afterward.' },
    ],
  },
};
