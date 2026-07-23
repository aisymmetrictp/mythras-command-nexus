import type { BlogPost } from '../../blogTypes';

export const residentEvil4RemakeCharmsGuide: BlogPost = {
  slug: 'resident-evil-4-remake-charms-guide',
  game: 'resident-evil-4',
  category: 'game-guides',
  topicCluster: 're4-guides',
  tags: ['resident-evil-4', 'remake', 'charms', 'shooting-range', 'crafting'],
  title: 'RE4 Remake Charms Guide: Best Charms and Where to Get Them',
  metaDescription:
    'Every charm slot in the Resident Evil 4 remake, how the shooting-range token machine works, and the best charms — Cute Bear, Iluminados Emblem and Striker — ranked.',
  excerpt:
    "Charms look like a cosmetic gacha you hang on your briefcase. One of them removes a full unit of gunpowder from every single craft you make for the rest of the run. That is not cosmetic — that is the best economy upgrade in the game, and it costs three tokens.",
  featuredImagePrompt:
    'A small enameled charm shaped like a religious emblem hanging from the handle of a worn leather attache case, warm light, shallow depth of field',
  heroImage: '/images/blog/resident-evil-4/resident-evil-4-remake-charms-guide/iluminados-emblem.webp',
  heroImageAlt: 'The Iluminados Emblem charm from the Resident Evil 4 remake, an ornate red-and-gold cult emblem attache-case charm.',
  imageSources: [
    {
      src: '/images/blog/resident-evil-4/resident-evil-4-remake-charms-guide/iluminados-emblem.webp',
      sourceUrl: 'https://residentevil.fandom.com/wiki/File:RE4RE_Iluminados_Emblem_Charm.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/resident-evil-4/resident-evil-4-remake-charms-guide/gold-token.webp',
      sourceUrl: 'https://residentevil.fandom.com/wiki/File:RE4R_Gold_Token.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/resident-evil-4/resident-evil-4-remake-charms-guide/cute-bear.webp',
      sourceUrl: 'https://residentevil.fandom.com/wiki/File:RE4RE_Cute_Bear_Charm.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/resident-evil-4/resident-evil-4-remake-charms-guide/striker.webp',
      sourceUrl: 'https://residentevil.fandom.com/wiki/File:RE4RE_Striker_Charm.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/resident-evil-4/resident-evil-4-remake-charms-guide/rhinoceros-beetle.webp',
      sourceUrl: 'https://residentevil.fandom.com/wiki/File:RE4RE_Rhinoceros_Beetle_Charm.png',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-23T00:00:00.000Z',
  lastUpdated: '2026-07-23T00:00:00.000Z',
  primaryKeyword: 'resident evil 4 remake charms guide',
  secondaryKeywords: [
    're4 remake best charms',
    're4 remake shooting range charms',
    'resident evil 4 remake cute bear charm',
    're4 remake iluminados emblem charm',
    'resident evil 4 remake charm tokens',
    're4 remake how to get charms',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 10,
  toc: [
    { id: 'how-charms-actually-work', label: 'How charms actually work', level: 2 },
    { id: 'the-reward-machine-is-a-gacha', label: 'The reward machine is a gacha', level: 2 },
    { id: 'how-to-farm-tokens-fast', label: 'How to farm tokens fast', level: 2 },
    { id: 'the-charms-that-actually-matter', label: 'The charms that actually matter', level: 2 },
    { id: 'cute-bear-the-economy-breaker', label: 'Cute Bear: the economy breaker', level: 3 },
    { id: 'iluminados-emblem-for-a-knife-build', label: 'Iluminados Emblem for a knife build', level: 3 },
    { id: 'the-resale-and-discount-tier', label: 'The resale and discount tier', level: 3 },
    { id: 'the-common-crafting-charms', label: 'The common crafting charms', level: 2 },
    { id: 'my-three-slot-loadouts', label: 'My three-slot loadouts', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `The first time you clear a shooting range and the machine spits out a little enameled figure you hang on your briefcase, it reads as filler. A cosmetic. A reason to keep playing the target minigame. So most people shrug, hang whatever dropped, and never think about charms again.

That is a mistake, and here is the one number that proves it: the Cute Bear charm removes one full unit of gunpowder from the cost of every single craft you make for the rest of the run. Over a full playthrough that is hundreds of resources you keep. Nothing else you bolt onto that case comes close.

The whole system is a small gacha with a couple of genuinely game-changing prizes buried in it. Below is how the machine works, how to feed it efficiently, and which of the 30-plus charms are worth the three slots you actually get. Effects and rarities here are pulled from the Resident Evil Wiki charm entries.

## How charms actually work

Charms are passive modifiers you attach to your attaché case. You get **three slots** — center, left and right — and you swap them at any typewriter through the Customize Case menu, the same screen where you change the case skin for its own bonus. There is no cooldown and no cost to switch, so you can run a crafting loadout in the village and a combat loadout for a boss.

Every charm does exactly one thing, and it does it for the whole run as long as it is equipped. The effects fall into a few buckets: crafting cost and yield, healing potency, item resale value, and repair or upgrade discounts. A few outliers do something weirder, like the Striker's flat **+8% running speed** or the Iluminados Emblem's **+20% melee critical hit rate**.

The key framing: charms are not loot you collect for a checklist. They are three permanent perks, and picking the right three changes how much ammo and cash you have for the entire game.

## The reward machine is a gacha

![A gold token from the Resident Evil 4 remake shooting range, used to roll for charms at the reward machine.](/images/blog/resident-evil-4/resident-evil-4-remake-charms-guide/gold-token.webp)

You do not buy specific charms. You feed a reward machine that sits by the door of every shooting range and it rolls you a random one. Each pull costs **three tokens**, and tokens come in two flavors:

- **Silver Tokens** — the standard drop. A pull of three silvers weights toward common and rare charms.
- **Gold Tokens** — rarer. Loading gold tokens raises your odds of a higher-rarity result, so the Epic and Legendary charms come out of gold pulls far more often than silver ones.

Charms sort into four rarities — Common, Rare, Epic, Legendary — and the good stuff (Cute Bear, Striker) sits at the top of that ladder. That is the catch of a gacha: the two best charms in the game are Legendary, so you are chasing them through the machine rather than picking them off a shelf. You can mix silver and gold in a single three-token pull, and stacking gold is how you actually fish for the top tier instead of drowning in duplicate commons.

Duplicates are the tax. With 30-plus charms in the pool you will absolutely re-roll ones you already own, which is why token efficiency matters more than raw luck.

## How to farm tokens fast

Tokens have two sources. The first is the shooting range itself: each range has a set of challenges, and clearing challenge objectives pays out tokens, with better performance paying gold instead of silver. The ranges are scattered across the campaign — one shows up in the village, more in the castle and island — and the targets escalate, so a range you steamrolled early is worth revisiting once your aim and weapons have improved.

The second source is the **Merchant**. In later chapters he stocks tokens you can buy with Spinels, the blue gemstone currency you also spend on his request rewards. That matters because Spinels are the one resource pesetas cannot buy, so there is a real opportunity cost — the same Spinels could go toward an exclusive weapon ticket. My rule: grind the ranges for tokens while you are there anyway, and only buy tokens from the Merchant late, once your weapon upgrades are locked in and Spinels are just piling up.

If you want the parallel breakdown on what else those blue stones should fund first, the [Merchant and spinel guide](/blog/resident-evil-4/resident-evil-4-remake-merchant-guide) covers the priority order.

## The charms that actually matter

Thirty-plus charms exist. You have three slots. Ruthless triage is the whole game here, so ignore the ones that buff resale on fish you will never sell and focus on these.

### Cute Bear: the economy breaker

![The Cute Bear charm from the Resident Evil 4 remake, a small brown teddy bear attache-case charm and one of two Legendary charms.](/images/blog/resident-evil-4/resident-evil-4-remake-charms-guide/cute-bear.webp)

**Cute Bear (Legendary): -1 gunpowder used when crafting.** This is the best charm in the game and it is not close. Gunpowder is the bottleneck resource behind almost every ammo type you craft, and shaving a full unit off each recipe compounds over hundreds of crafts. On a run where you are hand-loading shotgun shells and magnum rounds, that is effectively free ammo for the entire campaign. If you pull it, it never leaves your case. Full stop.

### Iluminados Emblem for a knife build

**Iluminados Emblem (Epic): +20% melee critical hit rate.** Melee is already one of Leon's best tools in the remake — a kick or suplex after a stagger clears crowds and costs no ammo. Bumping the crit rate on those follow-ups by a fifth means more instant kills and more knife durability saved, because critical melee finishers do not chew your blade. If you lean on parries and the roundhouse the way the remake wants you to, this is your second slot. It pairs naturally with the knife-heavy approach the [beginner guide](/blog/resident-evil-4/resident-evil-4-remake-beginner-guide) pushes for conserving ammo early.

### The resale and discount tier

![The Rhinoceros Beetle charm from the Resident Evil 4 remake, which doubles the resale value of recovery items.](/images/blog/resident-evil-4/resident-evil-4-remake-charms-guide/rhinoceros-beetle.webp)

![The Striker charm from the Resident Evil 4 remake, a Legendary charm that grants a flat running-speed bonus.](/images/blog/resident-evil-4/resident-evil-4-remake-charms-guide/striker.webp)

The rest of the standouts are money charms (plus the Striker), and money buys the weapon upgrades that actually win fights:

| Charm | Rarity | Effect |
| --- | --- | --- |
| Striker | Legendary | +8% running speed |
| Ashley Graham | Epic | +50% health recovery from green herbs |
| Merchant | Epic | 5% off weapon upgrades |
| Rhinoceros Beetle | Epic | +100% recovery item resale value |
| Luis Sera | Rare | +20% weapon resale value |
| Leon w/ Shotgun | Rare | +40% ammo resale value |
| Ada Wong | Rare | 30% off body armor repairs |
| Chicken | Rare | +100% health recovery from all egg types |

The Striker's +8% speed sounds minor until you are kiting Garrador or sprinting a chainsaw-woman gauntlet; extra distance is extra safety with zero downside. Ashley Graham turning a green herb into a 50% stronger heal is quietly excellent on higher difficulties where herbs are scarce. And the Merchant charm's flat 5% off upgrades pays for itself many times over across a full run of maxing weapons — pair it with the [weapon upgrade guide](/blog/resident-evil-4/resident-evil-4-remake-weapon-upgrade-guide) to decide where that saved cash goes.

## The common crafting charms

The bottom rarity is stuffed with charms that read like "+15% Handgun Ammo Craft Bonus Frequency" or "+20% Shotgun Shells Craft Bonus Frequency." These do not lower the cost of a craft — they raise the chance that a given craft rolls a **bonus yield**, handing you extra rounds for the same materials. Examples off the common tier include Don Jose (+15% handgun ammo craft bonus frequency), Don Diego (+15% rifle ammo craft bonus frequency) and Soldier w/ Hammer (+20% handgun ammo craft bonus frequency).

They are fine, and if you main one weapon you can slot the matching one. But they are strictly worse than Cute Bear, because a guaranteed -1 gunpowder on every craft beats a percentage chance at a bonus on one ammo type. Treat the crafting-frequency commons as filler for your third slot until something better drops.

## My three-slot loadouts

Because switching is free at any typewriter, there is no single correct answer — but here are the two setups I actually run.

**Economy run (default):** Cute Bear + Merchant + Luis Sera. You craft cheaper, upgrade cheaper, and sell weapons you replace for more. This is the loadout that snowballs your peseta count and gets weapons maxed fastest, which matters most against the game's [bigger bosses](/blog/resident-evil-4/resident-evil-4-remake-boss-guide).

**Combat run (bosses and Professional):** Cute Bear + Iluminados Emblem + Striker. Keep the free ammo from the Bear, add melee crits and movement speed for the fights where positioning and stagger windows decide whether you live. Swap Striker for Ashley Graham if herbs are your bottleneck instead of ammo.

Notice Cute Bear is in both. That is the point — pull it, keep it, and only ever debate the other two slots.

If you are still sitting on a pile of unsold treasure to fund all this, the [treasure combination guide](/blog/resident-evil-4/resident-evil-4-remake-treasure-guide) is where the real money is; charms just help you keep more of it.

## Quick Action Checklist

- You get **three charm slots** and can swap them free at any typewriter — no reason not to re-tune per area.
- The reward machine costs **three tokens per pull** and gives a random charm. It is a gacha; expect duplicates.
- **Gold Tokens** weight the roll toward Epic and Legendary charms. Save them to fish for the top tier.
- Earn tokens by clearing shooting-range challenges; buy more from the Merchant with Spinels only in late chapters.
- **Cute Bear (-1 gunpowder per craft)** is the best charm in the game. Equip it the second you pull it and never remove it.
- Iluminados Emblem (+20% melee crit) is your combat pick; Striker (+8% run speed) is pure survivability.
- Money charms — Merchant (5% off upgrades), Luis Sera (+20% weapon resale) — snowball your economy for weapon maxing.
- The common "+X% craft bonus frequency" charms are filler. A guaranteed gunpowder discount beats a chance at bonus yield.
`,
  faq: [
    {
      question: 'What is the best charm in the Resident Evil 4 remake?',
      answer:
        'Cute Bear, a Legendary charm that reduces the gunpowder used when crafting by one unit. Because gunpowder is the shared bottleneck behind almost every ammo type, shaving a full unit off every recipe compounds across hundreds of crafts over a run, effectively handing you free ammunition for the whole campaign. It is the single most valuable charm in the game and should stay equipped permanently once you pull it.',
    },
    {
      question: 'How do you get charms in the Resident Evil 4 remake?',
      answer:
        'Charms come from the reward machine next to each shooting range. Each pull costs three tokens and gives a random charm. You earn tokens by completing shooting-range challenges, and in later chapters you can also buy tokens from the Merchant using Spinels. There are over 30 charms across four rarities — Common, Rare, Epic and Legendary — so expect duplicates as you roll.',
    },
    {
      question: 'What is the difference between Silver and Gold Tokens in RE4 remake?',
      answer:
        'Both are used at the reward machine, three tokens per pull, and you can mix them in a single pull. Gold Tokens weight the result toward higher rarities, so loading gold gives a much better chance at Epic and Legendary charms like the Iluminados Emblem, Striker and Cute Bear. Silver Tokens are more common and lean toward Common and Rare charms.',
    },
    {
      question: 'How many charms can you equip at once in the RE4 remake?',
      answer:
        'Three. The attaché case has a center, left and right charm slot, and you assign or swap charms for free at any typewriter through the Customize Case menu. Since there is no cost to switch, you can run an economy loadout while exploring and change to a combat setup before a boss.',
    },
    {
      question: 'Is the Iluminados Emblem charm worth using in RE4 remake?',
      answer:
        'Yes, if you use melee. The Iluminados Emblem is an Epic charm that raises Leon\'s melee critical hit rate by 20%. Melee finishers after a stagger cost no ammo and do not consume knife durability, so a higher crit rate means more instant kills and more resources saved. It is one of the strongest combat charms and a natural second slot behind Cute Bear on a melee-focused run.',
    },
    {
      question: 'Should I buy charm tokens from the Merchant in RE4 remake?',
      answer:
        'Only late. Merchant tokens cost Spinels, the blue-gem currency you also spend on exclusive weapon-upgrade tickets, so buying tokens early competes with far more impactful purchases. Farm tokens from the shooting ranges while you are there anyway, and spend Spinels on tokens only once your key weapon upgrades are locked in and the blue stones are piling up.',
    },
    {
      question: 'Do crafting charms lower the cost of ammo in RE4 remake?',
      answer:
        'Only Cute Bear lowers the actual cost, by removing one unit of gunpowder per craft. The common "craft bonus frequency" charms, like +15% Handgun Ammo Craft Bonus Frequency, instead raise the chance that a craft produces a bonus yield of extra rounds for the same materials. A guaranteed gunpowder discount is more reliable than a percentage chance at a bonus, which is why Cute Bear outclasses the frequency charms.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/resident-evil-4', anchor: 'Resident Evil 4 coverage hub' },
    { href: '/blog/resident-evil-4/resident-evil-4-remake-beginner-guide', anchor: 'Resident Evil 4 remake beginner guide' },
    { href: '/blog/resident-evil-4/resident-evil-4-remake-merchant-guide', anchor: 'Resident Evil 4 remake Merchant and spinel guide' },
    { href: '/blog/resident-evil-4/resident-evil-4-remake-weapon-upgrade-guide', anchor: 'Resident Evil 4 remake weapon upgrade guide' },
    { href: '/blog/resident-evil-4/resident-evil-4-remake-treasure-guide', anchor: 'Resident Evil 4 remake treasure guide' },
    { href: '/blog/resident-evil-4/resident-evil-4-remake-boss-guide', anchor: 'Resident Evil 4 remake boss guide' },
  ],
  externalSources: [
    {
      url: 'https://residentevil.fandom.com/wiki/Cute_Bear_(charm)',
      title: 'Resident Evil Wiki — Cute Bear charm effect and rarity',
    },
    {
      url: 'https://residentevil.fandom.com/wiki/Iluminados_Emblem_(charm)',
      title: 'Resident Evil Wiki — Iluminados Emblem charm effect',
    },
    {
      url: 'https://residentevil.fandom.com/wiki/Gold_Token_(RE4_Remake)',
      title: 'Resident Evil Wiki — Gold Token and reward machine odds',
    },
    {
      url: 'https://residentevil.fandom.com/wiki/Striker_(charm)',
      title: 'Resident Evil Wiki — Striker charm running speed bonus',
    },
  ],
  tldr:
    'Charms are three swappable passive perks you hang on your attaché case, rolled from a gacha-style reward machine at each shooting range (three tokens per pull; Gold Tokens improve rarity odds). The best charm is Cute Bear (Legendary), which removes one gunpowder per craft — keep it equipped for the whole run. Round it out with Iluminados Emblem (+20% melee crit) or Striker (+8% run speed) for combat, and Merchant (5% off upgrades) or Luis Sera (+20% weapon resale) for economy. The common craft-bonus-frequency charms are filler.',
};
