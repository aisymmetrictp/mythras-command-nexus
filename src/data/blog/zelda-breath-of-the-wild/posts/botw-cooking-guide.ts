import type { BlogPost } from '../../blogTypes';

export const botwCookingGuide: BlogPost = {
  slug: 'botw-cooking-guide',
  game: 'zelda-breath-of-the-wild',
  category: 'game-guides',
  topicCluster: 'botw-guides',
  tags: ['cooking', 'recipes', 'elixirs', 'survival', 'resources'],
  title: 'Breath of the Wild Cooking Guide: The Recipes That Matter',
  metaDescription:
    'A Breath of the Wild cooking guide with real numbers: effect stacking rules, monster part duration tiers, Hearty math, elixirs, and five recipes to memorize.',
  excerpt:
    'Cooking in Breath of the Wild is not flavor text. It is your entire healing economy, your climate gear, and your damage buff — and almost every failed dish comes down to one rule people never get told.',
  featuredImagePrompt:
    'Link crouched beside a lit stone cooking pot at night, ingredients hovering above the flame, warm orange firelight on his face',
  heroImage: '/images/blog/zelda-breath-of-the-wild/botw-cooking-guide/link-cooking.webp',
  heroImageAlt:
    'Link cooking at a lit stone cooking pot in Breath of the Wild, dropping ingredients into the flame.',
  imageSources: [
    {
      src: '/images/blog/zelda-breath-of-the-wild/botw-cooking-guide/link-cooking.webp',
      sourceUrl: 'https://zelda.fandom.com/wiki/Cooking',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/zelda-breath-of-the-wild/botw-cooking-guide/cooking-pot.webp',
      sourceUrl: 'https://zelda.fandom.com/wiki/Cooking_Pot',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/zelda-breath-of-the-wild/botw-cooking-guide/old-mans-cabin.webp',
      sourceUrl: 'https://zelda.fandom.com/wiki/Great_Plateau',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/zelda-breath-of-the-wild/botw-cooking-guide/spore-store.webp',
      sourceUrl: 'https://zelda.fandom.com/wiki/Hearty_Truffle',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-20T00:00:00.000Z',
  lastUpdated: '2026-07-20T00:00:00.000Z',
  primaryKeyword: 'breath of the wild cooking guide',
  secondaryKeywords: [
    'botw best recipes',
    'breath of the wild elixir guide',
    'botw hearty recipes',
    'breath of the wild cooking effects',
    'botw stamina recipes',
    'breath of the wild dubious food fix',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'the-one-rule-that-fixes-most-failed-dishes', label: 'The one rule that fixes most failed dishes', level: 2 },
    { id: 'how-cooking-actually-works', label: 'How cooking actually works', level: 2 },
    { id: 'roasting-freezing-and-the-pot', label: 'Roasting, freezing, and the pot', level: 3 },
    { id: 'the-effect-list-and-what-each-one-is-for', label: 'The effect list and what each one is for', level: 2 },
    { id: 'hearty-is-the-strongest-effect-in-the-game', label: 'Hearty is the strongest effect in the game', level: 2 },
    { id: 'stamina-food-energizing-vs-enduring', label: 'Stamina food: Energizing vs Enduring', level: 2 },
    { id: 'elixirs-monster-parts-and-duration-math', label: 'Elixirs, monster parts, and duration math', level: 2 },
    { id: 'five-recipes-worth-memorizing', label: 'Five recipes worth memorizing', level: 2 },
    { id: 'ingredients-to-stockpile-and-where-they-grow', label: 'Ingredients to stockpile and where they grow', level: 2 },
    { id: 'cooking-mistakes-that-waste-ingredients', label: 'Cooking mistakes that waste ingredients', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Most people who complain that Breath of the Wild's cooking is random have hit the same wall: they threw five good ingredients into a pot and got a dish with no effect, or worse, the purple horror the game calls Dubious Food. It is not random. There is one rule underneath the whole system, and it is never stated on screen.

**A dish carries exactly one effect, and it only carries that effect if every effect-bearing ingredient in the pot shares it.** Spicy Pepper plus Hydromelon is cold resistance plus heat resistance, which cancels to nothing. Five Spicy Peppers is a long cold-resistance dish. Once you internalize that, cooking stops being a slot machine and turns into the most powerful system in the game — one that trivializes climate zones, doubles your effective health bar, and buffs your damage more than most weapon upgrades.

## The one rule that fixes most failed dishes

Say it once more, because it is the whole guide in a sentence: **do not mix effects**. Neutral ingredients — apples, meat, rice, mushrooms without a prefix, fish without a prefix — are free. They add hearts and never dilute the effect. Effect ingredients only stack with their own kind.

The specific failure states are documented and predictable. You get Dubious Food from:

- Food combined with monster parts **or** critters, but not both
- Monster parts on their own
- Critters on their own
- Any elixir recipe whose effects cancel out — a monster part plus a Chilly critter plus a Spicy critter
- Seasonings with no actual food

Notice that "food plus critters" is a failure. Critters belong in elixirs, and elixirs require at least one monster part. Keep those two ingredient families in a separate mental bucket from everything you eat.

## How cooking actually works

You need a lit cooking pot — a stone bowl on a metal frame over a fire. Hold up to **five materials**, drop them in, and the pot resolves them into a single dish.

![A stone cooking pot over its furnace base, the only way to combine up to five ingredients into a single dish.](/images/blog/zelda-breath-of-the-wild/botw-cooking-guide/cooking-pot.webp)

Two practical notes about pots themselves. **Rain puts them out of commission** until the weather clears, so if you are planning a big cook, do it under cover or wait. And you can sit at a cooking pot to pass time to morning, noon, or night — which is the fastest way to skip a storm, dodge a Blood Moon, or wait out a merchant's schedule.

### Roasting, freezing, and the pot

There are three ways to process an ingredient, and they are not interchangeable:

| Method | What it does | Trade-off |
| --- | --- | --- |
| **Roasting** (direct flame) | +50% health restoration | Strips the ingredient's effect entirely |
| **Freezing** (cold climate or ice arrow) | Adds heat resistance, sometimes more health | Only works in cold environments |
| **Cooking pot** | Doubles heart recovery and preserves effects | Requires a lit pot and up to five slots |

Roasting is the emergency option. It is strictly better than eating raw when you only care about hearts, and it is strictly worse when you need the effect. Freezing is the one most players never touch — leaving food out on the Hebra Mountains, or shooting it with an ice arrow, converts it into a heat-resistant snack, which is a free workaround if you are heading to Gerudo without cold gear.

One inventory quirk worth knowing: dishes and elixirs made in a pot each take **one slot** in the Food tab, while roasted and frozen items of the same type stack. If your food inventory is bulging, roasting is more space-efficient than cooking.

## The effect list and what each one is for

Breath of the Wild has a fixed set of cooking effects. Here is what each one actually solves:

- **Hearty** — refills your entire health bar and adds temporary yellow hearts on top. The best effect in the game.
- **Energizing** — instantly restores stamina. Your mid-climb rescue.
- **Enduring** — adds temporary stamina wheels beyond your maximum. Your long-climb enabler.
- **Hasty** — movement speed. Underrated for traversal, useful in shrine timing puzzles.
- **Sneaky** — stealth. Makes sneakstrikes and night hunting dramatically easier.
- **Mighty** — attack up. Straight damage multiplier on your melee and bow.
- **Tough** — defense up. Cheap insurance against Lynels and Guardians.
- **Spicy** — cold resistance. Hebra, Mount Lanayru, Gerudo desert at night.
- **Chilly** — heat resistance. Gerudo desert in daylight, Eldin foothills.
- **Electro** — shock resistance. Vah Naboris, Thunder Helm country, Yiga territory.
- **Fireproof** — flame guard, so you do not spontaneously ignite on Death Mountain.

**Fireproof is elixir-only.** There is no food ingredient that grants Flame Guard — you have to cook a Fireproof Lizard or a Smotherwing Butterfly with a monster part. If you would rather buy your way out, Gaile at Foothill Stable sells Fireproof Elixirs at 60 rupees for one, 110 for two, and 150 for three, and Offrak in Goron City sells them for 60 rupees each.

## Hearty is the strongest effect in the game

Hearty ingredients do two things at once: they fully restore your health regardless of how much damage you took, and they grant temporary yellow hearts stacked above your maximum. The full heal is the part people undervalue. A Hearty dish cooked from a single ingredient heals exactly as much as one cooked from five — full — so the marginal ingredients only buy you extra yellow hearts.

![The Spore Store, one of the shops that sells Hearty Truffles for temporary-heart cooking.](/images/blog/zelda-breath-of-the-wild/botw-cooking-guide/spore-store.webp)

The Hearty family:

| Ingredient | Raw heal | Where to find it |
| --- | --- | --- |
| Hearty Durian | 3 hearts | Trees in the Faron Grasslands; the merchant Chumin; Lorn's Fruit Stand in Gerudo Town; dropped by Red Hinox |
| Hearty Truffle | 2 hearts | Under trees in Great Hyrule Forest and Hyrule Field; the Spore Store, the East Wind, the merchant Cambo |
| Big Hearty Truffle, Hearty Radish, Big Hearty Radish | varies | Scattered overworld; radishes cluster in Hyrule Field and Akkala |
| Hearty Salmon, Hearty Bass, Hearty Blueshell Snail | varies | Rivers and coastlines |

The Hearty Durian is the one worth building a routine around. The Faron Grasslands have trees that drop them in bulk, they cost nothing, and five of them in a pot is a dish that fully heals you and hands you a stack of extra hearts on top. That single recipe is the reason a lot of players never lose a fight they were going to lose — it is the closest thing this game has to a revive.

## Stamina food: Energizing vs Enduring

These two get confused constantly, and they solve different problems.

**Energizing** refills the stamina wheel you already have. Cook Stamella Shrooms or Staminoka Bass. Use it mid-climb when the wheel is flashing and you are forty meters up a cliff face with nothing below you.

**Enduring** grants temporary extra stamina wheels stacked on top of your maximum. Cook Endura Carrots or Endura Shrooms. Use it *before* a climb you already know is too long, or before a paraglide you are not sure you can finish.

Endura Carrots grow at Malanya Spring, near the peak of Satori Mountain, and around the edges of Great Fairy Fountains. Raw, they heal two hearts, which is a waste — put them in a pot. They also double as premium horse food: feed one to a horse and it temporarily gains three extra yellow spurs beyond its normal count, which is genuinely useful for outrunning a Lynel.

If you are still deciding where your Spirit Orbs should go, read the stamina argument in our [Breath of the Wild beginner guide](/blog/zelda-breath-of-the-wild/botw-beginner-guide) — Enduring food is a big part of why stamina vessels pay off faster than hearts.

## Elixirs, monster parts, and duration math

Elixirs are cooked from **critters plus at least one monster part**. The split is clean:

- **Critters control potency** — how strong the effect tier is.
- **Monster parts control duration** — how long it lasts.

Monster parts fall into three duration tiers, and the numbers are exact:

| Tier | Time added | Examples |
| --- | --- | --- |
| Tier 1 | **1:10** | Bokoblin Horn, Chuchu Jelly, Keese Wing, Lizalfos Horn, Moblin Horn, Octorok Balloon, Hinox Toenail, Ancient Screw |
| Tier 2 | **1:50** | Bokoblin Fang, Red/White/Yellow Chuchu Jelly, Electric/Fire/Ice Keese Wing, Lizalfos Talon, Moblin Fang, Octorok Eyeball, Hinox Tooth, Ancient Gear, Ancient Shaft |
| Tier 3 | **3:10** | Bokoblin Guts, Lizalfos Tail, Moblin Guts, Keese Eyeball, Ancient Core, Giant Ancient Core |

So the optimization is obvious once you see it laid out: **four critters plus one Tier 3 monster part** gives you maximum potency with the longest single-part duration. Flip it — one critter plus four monster parts — and you get a long, weak elixir. Neither is wrong, they just answer different questions.

A **critical success** adds a flat **5:00** to the elixir's duration on top of everything else. Criticals happen more often when cooking during a Blood Moon, which is one more reason to treat that event as a resource window rather than a horror set piece.

One wildcard: **Monster Extract**, sold by Kilton at the Fang and Bone shop at night. Adding it to a dish randomizes the effect strength up or down. It is a gamble that produces the Monster Cake, Monster Curry, Monster Rice Balls, Monster Soup, and Monster Stew recipes. Fun to experiment with, terrible to rely on before a boss.

## Five recipes worth memorizing

You do not need a spreadsheet. You need five combinations you can assemble from memory when a pot is in front of you.

![The Old Man's cabin on the Great Plateau, home to one of the first cooking pots most players ever use.](/images/blog/zelda-breath-of-the-wild/botw-cooking-guide/old-mans-cabin.webp)

1. **Five Hearty Durians.** Full heal plus a stack of temporary yellow hearts. Your panic button and your boss prep.
2. **Five Endura Carrots.** Extra stamina wheels. The dish that lets you climb anything you can see.
3. **Five Spicy Peppers.** Long cold resistance. Solves Hebra, Mount Lanayru, and the Gerudo night without touching your armor loadout.
4. **Four Fireproof Lizards plus one Tier 3 monster part.** A long, strong Fireproof Elixir. Death Mountain becomes a walk.
5. **Four Mighty ingredients (Mighty Bananas, Mighty Thistle, Mighty Carp) plus meat.** Attack up. The meat is neutral filler that boosts healing without diluting the buff.

That last one pairs directly with the technique work in our [Breath of the Wild combat tips](/blog/zelda-breath-of-the-wild/botw-combat-tips) — a Mighty dish plus a flurry rush is how you shorten a Lynel fight from three minutes to one.

## Ingredients to stockpile and where they grow

- **Spicy Peppers** — the Great Plateau, near Gerudo Canyon Stable, and across the Tabantha Frontier. Raw they heal half a heart; charred by flame they heal three quarters. Cook them instead.
- **Hearty Durians** — Faron Grasslands trees. Farm a full stack on one loop.
- **Endura Carrots** — Malanya Spring, Satori Mountain's peak, and the edges of Great Fairy Fountains.
- **Hearty Truffles** — under trees in Great Hyrule Forest and Hyrule Field, or bought from the Spore Store and the East Wind.
- **Monster parts** — every enemy camp you clear. Keep the guts. Tier 3 parts are the currency of good elixirs.
- **Rock Salt, Goron Spice, Hylian Rice** — neutral bulk. They inflate healing without touching the effect.

## Cooking mistakes that waste ingredients

- **Mixing two effects.** The dish loses both. Cook single-effect batches only.
- **Cooking one Hearty ingredient at a time.** The full heal is the same at one ingredient or five, so a single durian and five durians heal identically — the extras only buy yellow hearts. Match the batch to the fight.
- **Putting critters in food dishes.** Critters plus food without a monster part is Dubious Food, guaranteed.
- **Eating Hearty and Endura ingredients raw.** A raw Hearty Durian is three hearts. Cooked, it is a full heal plus overflow. That is a brutal conversion rate to throw away.
- **Cooking in the rain.** Pots do not work wet. Sit and wait, or find shelter.
- **Selling monster parts for rupees.** They are your elixir duration budget. Sell gemstones you have surplus of instead.

More Hyrule systems breakdowns live on the [Breath of the Wild coverage hub](/blog/zelda-breath-of-the-wild), and the rest of our game coverage sits on the [Mythras blog](/blog).

## Quick Action Checklist

- Never mix two different effects in one pot. Neutral ingredients are always safe filler.
- Keep critters and monster parts mentally separate from food — elixirs need at least one monster part.
- Carry a batch of five-durian Hearty dishes before every boss and every Lynel.
- Carry Endura Carrot dishes for climbs and Stamella Shroom dishes for mid-climb rescues.
- Use a Tier 3 monster part (guts, Ancient Core, Lizalfos Tail) for 3:10 of elixir duration per part.
- Remember Fireproof is elixir-only — Fireproof Lizard or Smotherwing Butterfly plus a monster part.
- Roast when you only need hearts; roasted and frozen items stack in your inventory, cooked dishes do not.
- Freeze food in cold climates for a free heat-resistance snack.
- Do not try to cook in the rain, and sit at a pot to skip weather or time.
- Bank Spicy Peppers, Hearty Durians, and Endura Carrots on every overworld loop.
`,
  faq: [
    {
      question: 'Why does my food have no effect in Breath of the Wild?',
      answer:
        'Because you mixed two different effects in the same pot. A dish carries exactly one effect, and every effect-bearing ingredient must share it. Spicy Pepper (cold resistance) plus Hydromelon (heat resistance) cancels to a plain dish. Neutral ingredients like meat, rice, apples, and unprefixed mushrooms are always safe filler that adds hearts without diluting the effect.',
    },
    {
      question: 'How do I stop making Dubious Food?',
      answer:
        'Dubious Food comes from five specific combinations: food with monster parts or critters but not both, monster parts alone, critters alone, an elixir recipe whose effects cancel each other out, and seasonings with no food. The fix is to keep critters and monster parts in their own bucket — elixirs require at least one monster part alongside your critters, and food dishes should contain neither.',
    },
    {
      question: 'What is the difference between Energizing and Enduring food?',
      answer:
        'Energizing instantly refills the stamina wheel you already have — cook Stamella Shrooms or Staminoka Bass and eat it mid-climb. Enduring grants temporary extra stamina wheels stacked above your maximum — cook Endura Carrots or Endura Shrooms and eat it before a climb you know is too long. Energizing is a rescue, Enduring is preparation.',
    },
    {
      question: 'How long do elixirs last in Breath of the Wild?',
      answer:
        'Duration comes entirely from monster parts, in three fixed tiers. Tier 1 parts like Bokoblin Horn and Chuchu Jelly add 1:10 each. Tier 2 parts like Bokoblin Fang and Octorok Eyeball add 1:50. Tier 3 parts like Bokoblin Guts, Lizalfos Tail, and Ancient Core add 3:10. A critical success adds a flat 5:00 on top. Critters control potency, not duration.',
    },
    {
      question: 'How do I get fireproof protection for Death Mountain?',
      answer:
        'Fireproof is elixir-only — no food ingredient grants Flame Guard. Cook a Fireproof Lizard or a Smotherwing Butterfly with at least one monster part. If you would rather buy it, Gaile at Foothill Stable sells Fireproof Elixirs at 60 rupees for one, 110 for two, and 150 for three, and Offrak in Goron City sells them at 60 rupees each. The Flamebreaker armor set is the permanent alternative.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/zelda-breath-of-the-wild', anchor: 'Breath of the Wild coverage hub' },
    { href: '/blog/zelda-breath-of-the-wild/botw-beginner-guide', anchor: 'Breath of the Wild beginner guide' },
    { href: '/blog/zelda-breath-of-the-wild/botw-combat-tips', anchor: 'Breath of the Wild combat tips' },
  ],
  externalSources: [
    {
      url: 'https://zelda.fandom.com/wiki/Cooking',
      title: 'Zelda Wiki — cooking mechanics, roasting, and freezing',
    },
    {
      url: 'https://zelda.fandom.com/wiki/Elixir',
      title: 'Zelda Wiki — elixir ingredients and monster part duration tiers',
    },
    {
      url: 'https://zelda.fandom.com/wiki/Dubious_Food',
      title: 'Zelda Wiki — the exact combinations that produce Dubious Food',
    },
  ],
  tldr:
    'A Breath of the Wild dish carries exactly one effect, and only if every effect-bearing ingredient shares it — mixing Spicy and Chilly cancels both. Cooking pots take five ingredients and double heart recovery; roasting adds 50% healing but strips effects. Elixirs need critters plus at least one monster part, where critters set potency and monster parts set duration at 1:10, 1:50, or 3:10 per tier. Memorize five Hearty Durians for a full heal plus yellow hearts, five Endura Carrots for extra stamina wheels, and five Spicy Peppers for cold resistance.',
};
