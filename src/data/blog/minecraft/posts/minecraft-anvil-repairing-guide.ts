import type { BlogPost } from '../../blogTypes';

export const minecraftAnvilRepairingGuide: BlogPost = {
  slug: 'minecraft-anvil-repairing-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-progression',
  tags: ['anvil', 'repairing', 'enchanting', 'grindstone', 'xp', 'tools'],
  title: 'Minecraft Anvil & Repairing Guide: Beat "Too Expensive!"',
  metaDescription:
    'Minecraft anvil guide: how to repair gear, combine enchanted books, dodge the prior-work penalty and "Too Expensive!" cap, plus grindstone vs anvil.',
  excerpt:
    "The anvil is the most misunderstood block in Minecraft. Half of players burn levels in the wrong order and then watch their netherite sword hit \"Too Expensive!\" forever. Here is exactly how repairing, combining, and the prior-work penalty work — and the order of operations that keeps your gear fixable.",
  featuredImagePrompt:
    'A dark iron Minecraft anvil sitting on a stone floor in a torchlit base, an enchanted diamond sword resting beside it with a faint purple enchantment glint',
  heroImage: '/images/blog/minecraft/minecraft-anvil-repairing-guide/anvil.webp',
  heroImageAlt:
    'A Minecraft anvil block — used to repair gear, combine enchantments, and rename items, all at an XP cost.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-anvil-repairing-guide/anvil.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Anvil',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-anvil-repairing-guide/anvil-gui.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Anvil',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-anvil-repairing-guide/enchanted-book.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Enchanted_Book',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-anvil-repairing-guide/grindstone-ui.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Grindstone',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-24T00:00:00.000Z',
  lastUpdated: '2026-06-24T00:00:00.000Z',
  primaryKeyword: 'minecraft anvil repairing guide',
  secondaryKeywords: [
    'minecraft anvil too expensive',
    'minecraft prior work penalty',
    'how to combine enchanted books minecraft',
    'minecraft repair tools anvil',
    'grindstone vs anvil minecraft',
    'minecraft anvil xp cost',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-the-anvil-actually-does', label: 'What the anvil actually does', level: 2 },
    { id: 'repairing-with-materials-vs-combining', label: 'Repairing with materials vs combining', level: 2 },
    { id: 'combining-enchanted-books', label: 'Combining enchanted books', level: 2 },
    { id: 'the-prior-work-penalty', label: 'The prior-work penalty', level: 2 },
    { id: 'the-too-expensive-wall', label: 'The \"Too Expensive!\" wall', level: 2 },
    { id: 'the-right-order-of-operations', label: 'The right order of operations', level: 2 },
    { id: 'renaming-items', label: 'Renaming items', level: 2 },
    { id: 'grindstone-vs-anvil', label: 'Grindstone vs anvil', level: 2 },
    { id: 'anvil-durability-and-degrading', label: 'Anvil durability and degrading', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Here's the scenario every Minecraft player eventually hits: you've got a perfect netherite pickaxe — Efficiency V, Fortune III, Unbreaking III, Mending — and one day you go to top off its durability or add a fresh enchant, and the anvil throws up the dreaded red text: **"Too Expensive!"** Now the tool you spent hours building can never touch an anvil again. That's not a bug. That's the prior-work penalty doing exactly what it's designed to do, and almost nobody understands it until it bites them.

The anvil isn't complicated once you see the rules. It does three jobs — repair, combine, and rename — each costs experience levels, and every operation quietly stacks a penalty that doubles. Master the *order* you do things in and you'll keep gear repairable far longer. This guide breaks down every mechanic, verified against the Minecraft Wiki.

## What the anvil actually does

An anvil has three core functions, all done in its two-slot interface. The item on the **left is the "target,"** the item on the **right is the "sacrifice"** (it gets consumed), and the result appears in the output slot with an XP cost shown below it:

- **Repair** a damaged tool, weapon, or [armor](/blog/minecraft/minecraft-armor-guide) piece — either with raw material or with another copy of the item.
- **Combine** two items of the same type, merging their durability *and* their enchantments.
- **Rename** any item (even non-tools, even blocks and stacks).

![The Minecraft anvil interface — a target item on the left, a sacrifice or material on the right, and the level cost shown below the output.](/images/blog/minecraft/minecraft-anvil-repairing-guide/anvil-gui.webp)

The anvil's superpower over an enchanting table is that it **preserves enchantments** while it works, and it can apply **treasure enchantments** (like Mending and Frost Walker) that a table can never roll. You craft an anvil from **3 blocks of iron plus 4 iron ingots** (31 ingots total). That's expensive, but you only need one.

## Repairing with materials vs combining

There are two distinct ways to repair durability, and they cost differently.

**Unit repair (with raw material).** Some tiered items can be fixed using their base material — iron tools with iron ingots, diamond gear with diamonds, netherite with netherite ingots, and so on. Each unit of material restores **up to 25% of the item's max durability** and costs **1 level per unit** (plus any prior-work penalty). Because the penalty climbs fast, the wiki-backed best practice is to **run the item nearly to breaking, then repair with up to four units at once** for a near-full fix in a single operation.

**Combine repair (with a second copy).** Put two of the same item in the anvil and the target absorbs the sacrifice's remaining durability **plus a 12% bonus** of max durability. That repair portion costs **2 levels**. This is how you fix items that have *no* material repair — like a bow, fishing rod, or elytra (an elytra is repaired with phantom membrane as its "material," but many items rely on combining a second copy).

The key difference: unit repair is cheap per fix but adds a prior-work penalty each time. Combining two enchanted copies also merges their enchantments, which is powerful — but it stacks penalties from *both* items. Choose based on whether you also want to move enchantments around.

## Combining enchanted books

The cleanest way to enchant gear is to **combine an enchanted book onto it**. Put your tool in the target slot, the enchanted book in the sacrifice slot, and the book's enchantments transfer to the tool.

![A Minecraft enchanted book — drop it in the anvil's sacrifice slot to add or upgrade enchantments on your gear.](/images/blog/minecraft/minecraft-anvil-repairing-guide/enchanted-book.webp)

The rules for stacking enchantments:

- If the target **doesn't have** that enchantment, it gains all of the book's levels — unless the enchantment is **incompatible** with one the item already carries (you can't put Sharpness and Smite on the same sword, or Silk Touch and Fortune on the same tool).
- If the target **already has** the same enchantment at a **lower** level, it's raised to the book's level.
- If both are the **same** level and not at max, the result goes **up one level** (two Sharpness IV books make Sharpness V).
- If the book's level is **lower**, nothing changes — but you still pay.

You can also **combine two enchanted books** together to build a single super-book before ever touching your gear. This is the pro move: merge all your books first, then apply one finished book to the tool in a single anvil operation. Fewer operations on the actual tool means a lower prior-work penalty on the thing you care about. For which enchantments are worth chasing in the first place, see our [best Minecraft enchantments guide](/blog/minecraft/best-minecraft-enchantments).

## The prior-work penalty

Here's the mechanic that ruins gear if you ignore it. **Every time an item goes through the anvil** (except a pure rename), it accumulates a **prior-work penalty** that's added to the XP cost of its *next* anvil operation. And it roughly **doubles each time**.

The penalty follows the formula **2^c − 1**, where *c* is the number of times that item has been worked. So the penalty progression is:

- 0 prior uses → **0** extra levels
- 1 prior use → **1**
- 2 → **3**
- 3 → **7**
- 4 → **15**
- 5 → **31**
- 6 → **63**

That sixth use alone would add 63 levels of cost before you've paid for the repair or enchant itself. When two items are combined, the new penalty is based on the **larger** of the two items' penalties, then bumped up — so combining a heavily-worked item into a fresh one poisons the fresh one too. This exponential climb is *why* an over-worked tool eventually becomes untouchable.

## The "Too Expensive!" wall

In Survival and Adventure mode, an anvil **refuses any operation that would cost 40 levels or more** — once the total hits **40+**, it shows **"Too Expensive!"** in red and won't proceed. The maximum allowed operation is **39 levels**.

Combine that cap with the doubling penalty and the math is brutal: after just a handful of operations, the prior-work penalty alone clears 40, and the item is permanently locked out of anvils in survival (only Creative mode can work past the cap). There is **no way to lower an item's prior-work penalty on an anvil** — once it's high, it's high. The only escapes reset it entirely (crafting-table repair or a grindstone), and both of those **strip your enchantments**. So the real defense isn't fixing a maxed-out item — it's never letting the penalty climb that far in the first place.

## The right order of operations

This is the whole point of the guide. To keep an item repairable as long as possible, **minimize the number of anvil operations on the final item**, because each one doubles its penalty.

The optimal build order for a piece of gear:

1. **Combine all your enchanted books into one master book first.** Merge book + book repeatedly until you have a single book holding every enchantment you want. The penalties stack on the *books*, not your tool.
2. **Apply that one finished book to your tool** in a single operation. Your tool now has every enchant for the price of one anvil use (penalty: 1).
3. **Rename the tool in that same operation** if you want a custom name — renaming alongside an enchant is free of an extra operation.
4. **Repair only when nearly broken,** using up to four units of material at once, so you do it as rarely as possible.

Run Mending on your gear (it's a treasure enchant only the anvil can apply) and most tools self-repair from XP, meaning you rarely need to anvil-repair at all — which sidesteps the penalty problem entirely. Mending is the single best answer to "Too Expensive!" For the bigger leveling picture, see the [Minecraft XP guide](/blog/minecraft/minecraft-xp-guide).

## Renaming items

Renaming is the anvil's quietest feature and the one with the friendliest rules. Drop any item — even non-tools, even a stack — into the target slot, type a name, and it costs a flat **1 level** (plus any existing prior-work penalty). Custom names render in italics.

The good news: **renaming alone does NOT add to the prior-work penalty.** You can rename an item over and over without making it more expensive to enchant later. (The existing penalty is still *charged* on each rename, so renaming a heavily-worked tool is pricey — but it doesn't make things worse.) Because of that, the economical move is to rename a tool **at the same time** you repair or enchant it, folding the rename into an operation you were doing anyway. In Java Edition, a pure rename is also capped at 39 levels max. Renamed [name tags](/blog/minecraft/minecraft-name-tags-guide), by the way, are how you label mobs.

## Grindstone vs anvil

The **grindstone** is the anvil's opposite number, and people confuse them constantly. A grindstone does two things:

![The Minecraft grindstone interface — it strips enchantments off gear and refunds some XP, and wipes the prior-work penalty.](/images/blog/minecraft/minecraft-anvil-repairing-guide/grindstone-ui.webp)

- **Repairs** two of the same item together (combining durability) **without** any enchantments or XP cost — purely mechanical.
- **Strips all enchantments** off an item and **refunds a little XP** for them.

The crucial detail for our topic: putting an item through a grindstone **wipes its prior-work penalty back to zero** — but it also **removes every enchantment** (it keeps the custom name). So a grindstone is the nuclear reset for a "Too Expensive!" tool: you lose the enchants but get a clean, fixable base item back, plus some XP. Crafting-table repair (combining two of the same item in the crafting grid) does the same penalty reset, but strips the name too.

Rule of thumb: **anvil to build and preserve, grindstone to disenchant and reset.** Use the grindstone to recover XP from junk enchanted loot, or to salvage a tool you've over-worked.

## Anvil durability and degrading

Anvils don't last forever. Each time you repair, enchant, or rename, there's a **12% chance** the anvil **degrades** by one stage. It steps through three visual states — **Anvil → Chipped Anvil → Damaged Anvil** — and a fourth degrade **destroys it** entirely. So expect to replace an anvil roughly every couple dozen uses on average.

You **cannot repair an anvil** with iron — there's no anvil-repair mechanic — so just keep a spare stack of iron for crafting new ones, or stockpile a couple of anvils. A damaged anvil still works exactly the same; it's only cosmetic until it breaks. (As a bonus, anvils are gravity blocks and deal damage if dropped on a mob, but that's a different trick.)

## Quick Action Checklist

- [ ] Craft an anvil from 3 iron blocks + 4 iron ingots (31 ingots)
- [ ] Combine all enchanted books into ONE master book before touching your tool
- [ ] Apply the finished book (and any rename) to the tool in a single operation
- [ ] Repair with material only when nearly broken — up to 4 units at once (25% each)
- [ ] Remember the prior-work penalty doubles each use: 0, 1, 3, 7, 15, 31, 63...
- [ ] Stop before any operation hits 40 levels or you'll get "Too Expensive!" forever
- [ ] Put Mending on gear so it self-repairs and you rarely anvil-repair at all
- [ ] Rename freely — it never raises the prior-work penalty (but is still charged)
- [ ] Use a grindstone to disenchant + reset penalty (loses enchants, refunds XP)
- [ ] Keep spare iron — anvils have a 12% degrade chance per use and can't be repaired`,
  faq: [
    {
      question: 'Why does my Minecraft anvil say "Too Expensive!"?',
      answer:
        'In Survival and Adventure mode, an anvil refuses any operation costing 40 levels or more, showing "Too Expensive!" in red — the maximum allowed cost is 39 levels. This usually happens because of the prior-work penalty, which is added to every anvil operation and roughly doubles each time an item is worked (0, 1, 3, 7, 15, 31, 63...). After enough operations the penalty alone exceeds 40, permanently locking the item out of anvils in survival. You cannot lower an item\'s prior-work penalty on an anvil; only a grindstone or crafting-table repair resets it, and both strip enchantments.',
    },
    {
      question: 'How do you repair items in Minecraft with an anvil?',
      answer:
        'There are two ways. Unit repair uses the item\'s raw material (iron ingots for iron gear, diamonds for diamond, etc.), with each unit restoring up to 25% of max durability for 1 level apiece — repair near breaking with up to four units at once for efficiency. Combine repair puts two of the same item together; the target absorbs the sacrifice\'s durability plus a 12% bonus for 2 levels, and also merges enchantments. Both add a prior-work penalty, so combining enchanted copies stacks penalties faster.',
    },
    {
      question: 'How do you combine enchanted books in Minecraft?',
      answer:
        'Place one enchanted book in the target (left) slot and another in the sacrifice (right) slot of an anvil. Matching enchantments at the same non-max level go up one level; a lower-level enchant is raised to the higher; new compatible enchantments are added. Combining all your books into one master book first, then applying that single book to your tool, keeps the prior-work penalty on the books instead of the tool — the most XP-efficient way to enchant gear.',
    },
    {
      question: 'What is the difference between a grindstone and an anvil in Minecraft?',
      answer:
        'An anvil builds and preserves gear — it repairs, combines enchantments, and renames items at an XP cost while keeping enchantments. A grindstone does the opposite: it strips all enchantments off an item (refunding some XP) and can repair two items together for free with no enchanting. Critically, a grindstone resets an item\'s prior-work penalty to zero while keeping its custom name, making it the way to recover a "Too Expensive!" tool — at the cost of losing every enchantment.',
    },
    {
      question: 'How do you avoid the prior-work penalty in Minecraft?',
      answer:
        'You can\'t remove it from an item without a grindstone or crafting-table repair (both strip enchantments), so the goal is to minimize anvil operations on the final item. Combine all enchanted books into one master book first, apply it (and any rename) to the tool in a single operation, and repair only when nearly broken using four material units at once. Best of all, put Mending on your gear so it self-repairs from XP and rarely needs the anvil. Renaming never raises the penalty, so fold renames into other operations.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/best-minecraft-enchantments', anchor: 'Best Minecraft enchantments' },
    { href: '/blog/minecraft/minecraft-xp-guide', anchor: 'Minecraft XP guide' },
    { href: '/blog/minecraft/minecraft-armor-guide', anchor: 'Minecraft armor guide' },
    { href: '/blog/minecraft/minecraft-villager-trading-guide', anchor: 'Minecraft villager trading guide' },
    { href: '/blog/minecraft/minecraft-survival-guide-beginners', anchor: 'Minecraft survival guide for beginners' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Anvil_mechanics',
      title: 'Minecraft Wiki — anvil mechanics, costs, and prior-work penalty',
    },
    {
      url: 'https://minecraft.wiki/w/Anvil',
      title: 'Minecraft Wiki — anvil crafting and degrading',
    },
    {
      url: 'https://minecraft.wiki/w/Grindstone',
      title: 'Minecraft Wiki — grindstone disenchanting and repair',
    },
  ],
  tldr:
    'The Minecraft anvil repairs, combines, and renames items for XP — and preserves enchantments, unlike an enchanting table. The catch is the prior-work penalty: every operation (except renaming) roughly doubles the item\'s next cost (0, 1, 3, 7, 15, 31, 63...). Once a total operation hits 40+ levels, the anvil shows "Too Expensive!" (max is 39) and the item is locked out of survival anvils forever. To avoid it, combine all enchanted books into one master book first, apply it to the tool in a single operation, repair only when nearly broken (4 material units at once), and run Mending so gear self-repairs. A grindstone strips enchantments and resets the penalty as a last resort. Anvils have a 12% degrade chance per use and cannot be repaired.',
  itemList: {
    name: 'Minecraft Anvil Operations & Costs',
    items: [
      {
        name: 'Unit repair (material)',
        description: 'Each material unit restores up to 25% durability for 1 level. Repair near-broken with 4 units at once.',
      },
      {
        name: 'Combine repair (second copy)',
        description: 'Target absorbs sacrifice durability plus a 12% bonus for 2 levels, and merges enchantments.',
      },
      {
        name: 'Apply enchanted book',
        description: 'Transfers the book\'s enchantments to gear; combine books first, then apply once to the tool.',
      },
      {
        name: 'Prior-work penalty',
        description: 'Added every operation and doubles each time (2^c − 1): 0, 1, 3, 7, 15, 31, 63 levels.',
      },
      {
        name: '"Too Expensive!" cap',
        description: 'Any operation costing 40+ levels is refused in survival; max allowed is 39 levels.',
      },
      {
        name: 'Grindstone reset',
        description: 'Strips all enchantments (refunds XP) and wipes the prior-work penalty, keeping the custom name.',
      },
    ],
  },
};
