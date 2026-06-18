import type { BlogPost } from '../../blogTypes';

export const minecraftFoodHungerGuide: BlogPost = {
  slug: 'minecraft-food-hunger-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-survival',
  tags: ['food', 'hunger', 'saturation', 'health', 'survival', 'farming'],
  title: 'Minecraft Food & Hunger Guide: Saturation, Best Foods & Regen',
  metaDescription:
    'How hunger and saturation actually work in Minecraft: the hidden saturation stat, exhaustion math, health regen rules, and the best foods to keep your bar full.',
  excerpt:
    "Everyone knows you eat when the drumsticks run low. Almost nobody knows about saturation — the hidden stat that decides how long you stay full and whether you regen health fast or slow. Get this right and you carry steak, not bread, and you stop starving on long expeditions.",
  featuredImagePrompt:
    'A blocky Minecraft player at a campfire with cooked steak and a roasted pig nearby, the hunger bar of ten drumsticks shown full at the bottom of the screen, warm evening light',
  heroImage: '/images/blog/minecraft/minecraft-food-hunger-guide/pig.webp',
  heroImageAlt:
    'A Minecraft pig — the source of porkchops, one of the highest-saturation foods in the game.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-food-hunger-guide/pig.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Pig',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-food-hunger-guide/hunger-bar.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Hunger',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-food-hunger-guide/steak.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Steak',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-food-hunger-guide/golden-carrot.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Golden_Carrot',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-18T00:00:00.000Z',
  lastUpdated: '2026-06-18T00:00:00.000Z',
  primaryKeyword: 'minecraft food and hunger guide',
  secondaryKeywords: [
    'minecraft saturation explained',
    'best food in minecraft',
    'minecraft hunger mechanics',
    'how does health regen work minecraft',
    'minecraft golden carrot saturation',
    'minecraft food saturation chart',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'the-stat-you-cannot-see', label: 'The stat you cannot see', level: 2 },
    { id: 'how-hunger-and-saturation-actually-work', label: 'How hunger and saturation actually work', level: 2 },
    { id: 'exhaustion-what-drains-the-bar', label: 'Exhaustion: what drains the bar', level: 2 },
    { id: 'health-regen-fast-vs-slow', label: 'Health regen: fast vs slow', level: 2 },
    { id: 'the-best-foods-ranked-by-saturation', label: 'The best foods, ranked by saturation', level: 2 },
    { id: 'foods-to-avoid-or-handle-carefully', label: 'Foods to avoid or handle carefully', level: 2 },
    { id: 'what-to-actually-carry', label: 'What to actually carry', level: 2 },
    { id: 'java-vs-bedrock-hunger-notes', label: 'Java vs Bedrock hunger notes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Here is the trap almost every new player falls into: they fill their hotbar with bread and apples, eat constantly, and still find themselves starving halfway through a mining trip wondering what they did wrong. The answer is a stat the game never shows you. Hunger — the ten drumsticks — is only half the system. Behind it sits **saturation**, an invisible reserve that empties before your visible hunger does and quietly controls whether you heal fast or slow. Once you understand saturation, you stop carrying bread and start carrying steak, and you basically never think about food again.

This guide breaks down the whole hunger system with the real numbers: what saturation is, how exhaustion drains it, the two different health-regeneration modes, and a ranked food list by what actually matters. It is all checked against the Minecraft Wiki, because food saturation values are exact and surprisingly easy to get wrong.

## The stat you cannot see

Your hunger bar holds **20 points**, shown as **10 drumsticks** (each icon is 2 points). That part is visible. What is not visible is saturation: a separate hidden value that is **capped at your current hunger level** and sits on top of it like a buffer.

![The Minecraft hunger bar — ten drumstick icons worth 20 points total, with a hidden saturation reserve sitting behind them.](/images/blog/minecraft/minecraft-food-hunger-guide/hunger-bar.webp)

Think of it as two tanks. Saturation is the front tank, hunger is the back tank. Every action that costs energy drains the **saturation tank first**, and only once saturation hits zero does your visible hunger bar start dropping. This is why a player who just ate a steak can sprint for ages without the drumsticks moving — they are burning saturation, not hunger. When you eat, you refill both: the food's hunger value tops up the bar, and the food's **saturation value** refills that hidden reserve (capped at your current hunger). High-saturation food means a deeper buffer and longer between meals.

## How hunger and saturation actually work

The mechanic that ties it together is **exhaustion**. Every energy-costing action adds a small amount of exhaustion to an accumulator. When that accumulator reaches **4.0**, it resets to zero and removes **1 point of saturation** — or, if saturation is already empty, **1 point of hunger** (half a drumstick).

So the chain is: actions → exhaustion builds → at 4.0 it converts to −1 saturation → when saturation is gone, the same trigger starts eating hunger. Nothing drains your visible bar until the hidden reserve is dry. That single fact explains the entire feel of food management in Minecraft.

A fresh spawn or respawn starts you at **full hunger (20) with only 5 saturation**, which is why you feel hungry surprisingly fast right after death — your buffer starts almost empty.

## Exhaustion: what drains the bar

Different actions cost different amounts of exhaustion. The ones worth knowing (per the wiki):

- **Sprinting:** 0.1 per meter — by far the biggest everyday drain. Sprinting everywhere is what empties most players.
- **Sprint-jumping:** 0.2 per jump — the bunny-hop travel meta is fast but the hungriest way to move.
- **Jumping:** 0.05 per jump (normal), so casual jumping is cheap.
- **Attacking a mob:** 0.1 per hit.
- **Taking damage** (that armor does not fully absorb): 0.1 per instance.
- **Swimming:** 0.01 per meter.
- **Breaking blocks:** 0.005 per block — mining is nearly free, hunger-wise.
- **Natural health regeneration:** 6.0 exhaustion per 1 HP healed — the sneaky one. Healing up after a fight burns a lot of food.

The headline: **sprinting and regenerating health are your two big costs.** Mining and walking are cheap. If you are constantly hungry, you are either sprint-jumping everywhere or taking enough damage that passive regen is eating your food to heal you.

## Health regen: fast vs slow

Natural regeneration has **two modes**, and the difference is huge:

- **Fast (saturation) regen:** when your hunger bar is **completely full (20)** *and* you still have **saturation above zero**, you heal **1 HP every half-second** (Java Edition). This is the burst-heal — eat a high-saturation food to full and you patch up almost instantly. It is why veterans top off before a fight.
- **Slow (hunger) regen:** when your hunger is **18 or above** (9 drumsticks) but the bar is not full, you heal **1 HP every 4 seconds**. Steady, but slow.

Below **18 hunger**, you do not naturally regenerate at all (without effects like Regeneration potions or a beacon). And at **6 hunger or below**, you **lose the ability to sprint** entirely.

The practical rule: to heal fast, eat a **high-saturation** food until the bar is fully topped — the saturation buffer drives the half-second regen. A high-hunger but low-saturation food (looking at you, pumpkin pie) fills the bar but gives a shallow buffer that drains quickly, so you slip out of fast-regen fast. For more on staying alive in fights where this matters, gear up via the [best Minecraft enchantments](/blog/minecraft/best-minecraft-enchantments) and our [survival guide for beginners](/blog/minecraft/minecraft-survival-guide-beginners).

## The best foods, ranked by saturation

A food's true value is its **saturation**, not just how many drumsticks it refills. Saturation roughly equals hunger restored × the food's saturation modifier × 2, which is why two foods that both fill 4 drumsticks can leave you full for wildly different lengths of time. The standouts:

- **Golden Carrot — 6 hunger, 14.4 saturation.** The single best saturation food in the game. Cheap to mass-produce once you have a gold and carrot supply, and the go-to for serious players and Hardcore runs.
- **Cooked Porkchop — 8 hunger, 12.8 saturation.** Top-tier and easy: breed pigs, cook the chops. Tied with steak for best meat.
- **Steak (Cooked Beef) — 8 hunger, 12.8 saturation.** Identical to porkchop. Cows give leather too, so steak is often the more practical farm.
- **Cooked Mutton — 8 hunger, 9.6 saturation.** Excellent, and sheep double as wool.
- **Cooked Salmon — 8 hunger, 9.6 saturation.** Great if you fish; pairs perfectly with an [AFK fishing setup](/blog/minecraft/minecraft-fishing-guide).
- **Rabbit Stew — 10 hunger, 12.0 saturation.** Highest raw hunger refill in the game and big saturation, but fiddly to craft (needs a bowl, and you only get one stew per bowl).
- **Bread — 5 hunger, 6.0 saturation.** Fine early-game filler from a wheat farm, but you will outgrow it.

![Cooked steak — tied with porkchop for the best meat in the game at 8 hunger and 12.8 saturation.](/images/blog/minecraft/minecraft-food-hunger-guide/steak.webp)

If you only memorize one line: **golden carrots and cooked meat (porkchop/steak) are the foods to live on.** Everything else is a stopgap.

![A golden carrot — the highest-saturation food in Minecraft at 14.4, the endgame survival staple.](/images/blog/minecraft/minecraft-food-hunger-guide/golden-carrot.webp)

## Foods to avoid or handle carefully

Some foods fill drumsticks but barely touch saturation, and a few are actively risky:

- **Pumpkin Pie — 8 hunger, only 4.8 saturation.** Refills the bar nicely but a shallow buffer, so you get hungry again quickly. Convenient, not efficient.
- **Cookie — 2 hunger, 0.4 saturation** and **Melon Slice — 2 hunger, 1.2 saturation.** Snack tier. You will eat a stack and still be hungry.
- **Rotten Flesh — 4 hunger, 0.8 saturation, 80% chance of Hunger effect.** Edible in an emergency but the Hunger effect drains you, partly defeating the point. Survival-only desperation food.
- **Pufferfish — 1 hunger, 0.2 saturation, and gives Poison + Hunger + Nausea.** Do not eat it for food. It is a brewing ingredient (Water Breathing potions), full stop.
- **Spider Eye — 2 hunger but inflicts Poison.** Also a brewing ingredient, not a meal.
- **Suspicious Stew — 6 hunger, 7.2 saturation,** but the effect depends entirely on the flower used to craft it; some flowers add Poison or Wither. Know your recipe before you eat it.

## What to actually carry

For a normal survival run, your food loadout should be one of:

1. **Golden carrots** if you have an iron/gold farm or a villager who trades them — best buffer, never think about food again.
2. **Cooked porkchops or steak** from a basic animal farm — the realistic default for most players, near-best saturation with zero special ingredients.

Keep a stack of one of those in your hotbar, eat the moment you drop below full *before* a fight (to bank the saturation buffer for fast regen), and you are set. Skip the bread-and-apple hoarding. For setting up the farms that feed this, our [best Minecraft farms to build first](/blog/minecraft/best-minecraft-farms) and the [taming and breeding guide](/blog/minecraft/minecraft-taming-breeding-guide) cover automated meat and crop supply.

## Java vs Bedrock hunger notes

The hunger system is largely shared, with a couple of edition quirks:

- **Saturation/fast regen.** The full-bar 1-HP-per-half-second saturation regen is most precisely documented in **Java**; Bedrock's natural regen timing differs slightly but the principle — keep the bar full with high-saturation food to heal faster — holds on both.
- **Difficulty and starvation.** At 0 hunger, starvation deals 1 HP every 4 seconds. On **Easy** it stops at 10 HP, on **Normal** it stops near death (about 1 HP), and on **Hard** it can **kill you**. This is the same across editions; only the floor changes with difficulty.
- **Peaceful.** On Peaceful difficulty, hunger does not drain at all and health regenerates on its own — food is purely optional.
- **Food values.** Hunger and saturation values for foods are consistent across Java and Bedrock.

## Quick Action Checklist

- [ ] Remember the hunger bar is 20 points (10 drumsticks) with a hidden saturation buffer on top
- [ ] Saturation drains before your visible hunger ever moves
- [ ] Sprinting (0.1/m) and healing (6.0 per HP) are your biggest food costs; mining is nearly free
- [ ] Eat high-saturation food: golden carrot (14.4), porkchop/steak (12.8) — not bread
- [ ] Top the bar fully before a fight to trigger fast saturation regen (1 HP per half-second)
- [ ] You stop regenerating below 18 hunger and stop sprinting at 6 or below
- [ ] Never eat pufferfish or spider eyes for food — they are brewing ingredients
- [ ] Treat pumpkin pie, cookies, and melon as snacks, not staples (shallow saturation)
- [ ] Build an animal or carrot farm so you always carry steak or golden carrots`,
  faq: [
    {
      question: 'What is saturation in Minecraft?',
      answer:
        'Saturation is a hidden stat that sits on top of your visible hunger bar, capped at your current hunger level. It acts as a buffer that drains before your hunger does — every energy-costing action removes saturation first, and only when saturation hits zero does your drumstick bar start dropping. High-saturation foods give a deeper buffer, so you stay full longer and can trigger fast health regen. A fresh spawn starts with full hunger but only 5 saturation, which is why you get hungry quickly after dying.',
    },
    {
      question: 'What is the best food in Minecraft?',
      answer:
        'By saturation — the stat that actually matters — the golden carrot is best at 6 hunger and 14.4 saturation. Cooked porkchop and steak tie for the best meat at 8 hunger and 12.8 saturation each. Cooked mutton and cooked salmon are excellent at 9.6 saturation. For most players, a stack of cooked porkchops or steak from a basic animal farm is the realistic default; golden carrots are the endgame staple once you have a gold and carrot supply.',
    },
    {
      question: 'How does health regeneration work in Minecraft?',
      answer:
        'There are two modes. Fast (saturation) regen heals 1 HP every half-second when your hunger bar is completely full (20) and you still have saturation left — this is the burst-heal you trigger by eating high-saturation food to full. Slow (hunger) regen heals 1 HP every 4 seconds when hunger is 18 or above but the bar is not full. Below 18 hunger you do not naturally regenerate at all, and at 6 hunger or below you cannot sprint.',
    },
    {
      question: 'What drains hunger the fastest in Minecraft?',
      answer:
        'Exhaustion from actions drains it. Sprinting costs 0.1 exhaustion per meter and sprint-jumping 0.2 per jump, making travel the biggest everyday drain. Natural health regeneration is the sneaky one at 6.0 exhaustion per HP healed, so recovering after a fight burns a lot of food. Attacking and taking unblocked damage cost 0.1 each. Mining (0.005 per block) and walking are nearly free. Every 4.0 exhaustion removes 1 saturation, then 1 hunger once saturation is gone.',
    },
    {
      question: 'Why do I keep starving even though I eat a lot?',
      answer:
        'Almost always because you are eating low-saturation food like bread, apples, or cookies. They fill the visible bar but leave a shallow hidden buffer that empties fast, especially if you sprint-jump everywhere (0.2 exhaustion per jump) or take damage that forces passive healing (6.0 exhaustion per HP). Switch to golden carrots or cooked meat for a deep saturation buffer and the constant hunger problem disappears.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/best-minecraft-farms', anchor: 'Best Minecraft farms to build first' },
    { href: '/blog/minecraft/minecraft-fishing-guide', anchor: 'Minecraft fishing guide' },
    { href: '/blog/minecraft/minecraft-taming-breeding-guide', anchor: 'Taming and breeding guide' },
    { href: '/blog/minecraft/minecraft-survival-guide-beginners', anchor: 'Minecraft survival guide for beginners' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Hunger',
      title: 'Minecraft Wiki — hunger, saturation, and exhaustion mechanics',
    },
    {
      url: 'https://minecraft.wiki/w/Food',
      title: 'Minecraft Wiki — food hunger and saturation values',
    },
    {
      url: 'https://minecraft.wiki/w/Health',
      title: 'Minecraft Wiki — natural health regeneration',
    },
  ],
  tldr:
    'Hunger is only half the system — behind your 20-point (10-drumstick) bar sits a hidden saturation reserve, capped at current hunger, that drains BEFORE the visible bar via exhaustion (4.0 exhaustion = −1 saturation, then −1 hunger). Sprinting (0.1/m) and healing (6.0 per HP) drain you most; mining is nearly free. Health regen has two modes: a fast 1-HP-per-half-second burst when the bar is full with saturation left, and a slow 1-HP-per-4s when hunger is 18+. You stop regenerating below 18 and stop sprinting at 6 or below. Eat by saturation: golden carrot (14.4) and cooked porkchop/steak (12.8) are the staples; bread, pies, and cookies have shallow buffers; pufferfish and spider eyes are brewing ingredients, not food.',
  itemList: {
    name: 'Best Minecraft Foods by Saturation',
    items: [
      {
        name: 'Golden Carrot',
        description: '6 hunger, 14.4 saturation — the highest in the game and the endgame survival staple.',
      },
      {
        name: 'Cooked Porkchop',
        description: '8 hunger, 12.8 saturation — tied for best meat; breed pigs and cook the chops.',
      },
      {
        name: 'Steak (Cooked Beef)',
        description: '8 hunger, 12.8 saturation — identical to porkchop, and cows also give leather.',
      },
      {
        name: 'Rabbit Stew',
        description: '10 hunger (highest refill), 12.0 saturation — strong but fiddly, one stew per bowl.',
      },
      {
        name: 'Cooked Mutton / Cooked Salmon',
        description: '8 hunger, 9.6 saturation each — excellent secondary staples from sheep or fishing.',
      },
      {
        name: 'Bread',
        description: '5 hunger, 6.0 saturation — fine early-game wheat-farm filler you will outgrow.',
      },
    ],
  },
};
