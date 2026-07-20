import type { BlogPost } from '../../blogTypes';

export const minaTheHollowerBeginnerGuide: BlogPost = {
  slug: 'mina-the-hollower-beginner-guide',
  game: 'mina-the-hollower',
  category: 'beginner-guides',
  topicCluster: 'mina-guides',
  tags: ['beginner', 'burrow', 'bones', 'sidearms', 'combat'],

  title: 'Mina the Hollower Beginner Guide: Burrow, Bones, and Sparks',
  metaDescription:
    'A no-nonsense Mina the Hollower beginner guide: how burrowing works, what Bones and Sparks actually do on death, plus sidearms, trinkets, and modifiers.',
  excerpt:
    'Mina the Hollower is not the Souls game people keep calling it. Here is what burrowing, Bones, Sparks, and sidearms really do before you lose a dungeon run to a knockback into a pit.',
  featuredImagePrompt:
    'Gothic Game Boy Color styled pixel art of a mouse heroine swinging a chain mace at a ghost on a moonlit stone rampart',

  heroImage: '/images/blog/mina-the-hollower/mina-the-hollower-beginner-guide/hero.webp',
  heroImageAlt:
    'Mina swinging the Nightstar chain mace at a pale ghost enemy on a brick rampart above moonlit water in Mina the Hollower',
  imageSources: [
    {
      src: '/images/blog/mina-the-hollower/mina-the-hollower-beginner-guide/hero.webp',
      sourceUrl: 'https://www.yachtclubgames.com/press/mina-the-hollower',
      license: 'Official Yacht Club Games press kit screenshot, provided for editorial/press use. (c) Yacht Club Games.',
    },
    {
      src: '/images/blog/mina-the-hollower/mina-the-hollower-beginner-guide/bone-up.webp',
      sourceUrl: 'https://www.yachtclubgames.com/press/mina-the-hollower',
      license: 'Official Yacht Club Games press kit screenshot, provided for editorial/press use. (c) Yacht Club Games.',
    },
    {
      src: '/images/blog/mina-the-hollower/mina-the-hollower-beginner-guide/frozen-combat.webp',
      sourceUrl: 'https://www.yachtclubgames.com/press/mina-the-hollower',
      license: 'Official Yacht Club Games press kit screenshot, provided for editorial/press use. (c) Yacht Club Games.',
    },
    {
      src: '/images/blog/mina-the-hollower/mina-the-hollower-beginner-guide/shop-interior.webp',
      sourceUrl: 'https://www.yachtclubgames.com/press/mina-the-hollower',
      license: 'Official Yacht Club Games press kit screenshot, provided for editorial/press use. (c) Yacht Club Games.',
    },
  ],

  publishDate: '2026-07-20T00:00:00.000Z',
  lastUpdated: '2026-07-20T00:00:00.000Z',

  primaryKeyword: 'mina the hollower beginner guide',
  secondaryKeywords: [
    'mina the hollower burrow',
    'mina the hollower bones',
    'mina the hollower sparks',
    'mina the hollower tips',
    'mina the hollower sidearms',
    'how to play mina the hollower',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'monthly',
  evergreen: true,
  readingTimeMin: 11,

  toc: [
    { id: 'what-mina-the-hollower-actually-is', label: 'What Mina the Hollower Actually Is', level: 2 },
    { id: 'burrowing-is-your-dodge-your-jump-and-your-escape', label: 'Burrowing Is Your Dodge, Your Jump, and Your Escape', level: 2 },
    { id: 'the-long-jump-nobody-reads-about', label: 'The Long Jump Nobody Reads About', level: 3 },
    { id: 'burrow-out-of-a-hit', label: 'Burrow Out of a Hit', level: 3 },
    { id: 'bones-boning-up-and-the-spark-system', label: 'Bones, Boning Up, and the Spark System', level: 2 },
    { id: 'why-this-is-not-a-souls-death-penalty', label: 'Why This Is Not a Souls Death Penalty', level: 3 },
    { id: 'picking-your-first-weapon-it-barely-matters', label: 'Picking Your First Weapon (It Barely Matters)', level: 2 },
    { id: 'sidearms-and-joules', label: 'Sidearms and Joules', level: 2 },
    { id: 'trinkets-one-slot-until-you-find-more', label: 'Trinkets: One Slot Until You Find More', level: 2 },
    { id: 'the-knockback-problem', label: 'The Knockback Problem', level: 2 },
    { id: 'modifiers-are-the-difficulty-slider', label: 'Modifiers Are the Difficulty Slider', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Every review of Mina the Hollower reached for the word "Soulslike," and every one of them was slightly wrong. Yes, you bank a bone-shaped currency and yes, dying can cost it. But Mina hands your levels out automatically, refills your health when you rank up, and only takes your currency if you die in a specific vulnerable state. That is a meaningfully softer contract than Dark Souls ever offered, and misreading it is the fastest way to play the first three hours badly.

Here is what actually matters before you commit to a run.

## What Mina the Hollower Actually Is

Mina the Hollower is a top-down action-adventure from Yacht Club Games, the Shovel Knight studio, released in late May 2026 for Windows, macOS, Linux, Nintendo Switch, Switch 2, PlayStation 5, and Xbox Series X/S at 19.99 USD on Steam. It spent roughly six years in development after starting as a personal coding project by Alec Faulkner under the working title "Gothic," then went to Kickstarter on February 2, 2022, where it pulled 1,239,584 dollars from 21,439 backers.

That budget went somewhere specific: the art. Yacht Club committed to Game Boy Color technical constraints on purpose, with no 3D assets and a four-colors-per-tile discipline. The result reviewed extremely well. Metacritic landed at 90 on PC and Switch 2 and 91 on PS5, OpenCritic showed 98 percent of 109 critics recommending it, and it moved over 300,000 copies in three days and past 500,000 inside two weeks.

Worth flagging the one number that does not match the hype: the Steam user score sits at 89 percent Very Positive. That gap between a 90-plus critical average and an 89 percent player score is not noise, and most of it traces back to two things this guide will cover directly, knockback and the one-button control scheme.

You play Mina, a mouse, across Tenebrous Isle. The island holds eleven main dungeons, each capped by a Spark Generator, with the city of Ossex sitting at the center as your hub.

![Mina swinging the Nightstar chain mace at a pale ghost enemy on a brick rampart above moonlit water in Mina the Hollower](/images/blog/mina-the-hollower/mina-the-hollower-beginner-guide/hero.webp)

## Burrowing Is Your Dodge, Your Jump, and Your Escape

Hollowing, the burrow, is the whole game. Mina digs underground for a short time, moves quickly while she is down there, and is invincible during it. That is not a dodge roll with a burrow flavor. It is the dodge, full stop. There is no separate roll button, and hunting for one will get you killed.

The design decision underneath this is the one people argue about: jump, dig, and dodge all share a single contextual button. Press it standing and you jump. Hold it on landing and you burrow. Yacht Club collapsed three verbs into one input, which is exactly why critics called the movement sublime and why a recurring Steam complaint is "too many actions on one button." Same decision, two conclusions. Give it ninety minutes before you form an opinion, because the muscle memory does eventually click.

### The Long Jump Nobody Reads About

This is the single most useful thing a new player can learn, and the game buries it in the manual: release the jump input while you are burrowed and Mina launches much farther than a standing jump. That is the intended tool for crossing big gaps, not the standing hop you have been mashing. You can also attack while airborne.

If you have been staring at a gap thinking it is not crossable yet and waiting for an upgrade, try burrowing into it and releasing. A large number of "I need an item for this" walls in the early game are actually just long jumps you have not learned.

### Burrow Out of a Hit

Second mechanic worth drilling: while Mina is flashing from taking damage, those invulnerability frames chain straight into a burrow if you hold jump. You take the hit, you immediately go underground, you come up somewhere safer.

This matters enormously because of how the game punishes getting hit, which we will get to. Learning to reflexively burrow the instant you flash is the difference between losing one health chunk and losing three.

Enemies have the same courtesy extended to them, incidentally: when an enemy is flashing after being hit, it cannot hurt you. Aggression is rewarded. Trading hits and then continuing to press is often correct.

## Bones, Boning Up, and the Spark System

Bones are the currency. They drop from enemies, bosses, challenges, and world pickups, they get spent at shops, and they can be converted into Bonestone at generators, which shops also accept.

Leveling is where the Souls comparison breaks. You do not walk to a bonfire and spend souls. Earn enough Bones and you automatically Bone Up, at which point you choose a stat to raise. The manual lists Attack, Defense, and Sidearms.

![The Bone Up level-up screen in Mina the Hollower showing Attack increasing from 7 to 8 alongside Defense and other stat costs in Bones](/images/blog/mina-the-hollower/mina-the-hollower-beginner-guide/bone-up.webp)

The screenshot above is a real Bone Up in progress: Attack going from 7 to 8, with the sword line priced at 6,000 Bones against a 7,800 Bone balance. Note the second half of that transaction, because it is the part new players sleep on. Boning Up also restores your health, your Joules, and your Sparks.

Read that again. Your level-up is also a full heal and a resource refill. If you are one small enemy pack away from a Bone Up and you are sitting at a sliver of health in front of a boss door, clearing that pack is a free reset. Track your Bone total like it is a healing item, because functionally it is one.

### Why This Is Not a Souls Death Penalty

The death rule is conditional. You lose all your Bones only if Mina dies while Sparkless. Spark Orbs protect your Bones on death, and enemies can absorb Sparks you drop.

So the practical loop is not "never die." It is "never die empty." If you are Sparkless and carrying a large Bone balance deep in a dungeon, the correct play is to go spend it or go find Sparks, not to push one more room. That is a genuinely different risk calculation from the genre it keeps getting compared to, and it rewards players who treat Sparks as their real health bar.

## Picking Your First Weapon (It Barely Matters)

The game opens by making you choose between three weapons: the Nightstar, a crushing mace on a flexible chain; Whisper and Vesper, a pair of nimble daggers; and the Blaststrike Maul, a hammer with explosive force.

This choice feels weighty. It is not. You can test all three in the starting area with no penalty, you eventually gain access to every weapon regardless of your pick, and there are two more that unlock later, the Guardian Casket and the Battery Buster. Weapons are swapped at Weapon Chests and merchants, and only one is equipped at a time.

Pick the one that feels good and move on. If you want the full breakdown of all five including the two unlockables, we went deep on that in the [Mina the Hollower weapons guide](/blog/mina-the-hollower/mina-the-hollower-weapons-guide).

One thing worth knowing early: there is no universal parry in this game. Parrying exists, but it is a property of the Guardian Casket specifically, not a mechanic you have access to from the start. If you are trying to time blocks with the Nightstar, stop. Burrow instead.

![Mina fighting snowman enemies on an icy path in a frozen mountain region of Mina the Hollower](/images/blog/mina-the-hollower/mina-the-hollower-beginner-guide/frozen-combat.webp)

## Sidearms and Joules

Sidearms are your secondary tools, and they do not run on cooldowns. They run on Joules, a resource you top up from Joule Jars and from breaking flowers and candles and killing enemies. Your maximum Joule capacity increases via Joule Boxes.

Two purchases reshape how you use them:

- **Dual Sidearm Permit.** You start with one sidearm slot. This unlocks a second.
- **Sidearm Recoverer.** Sidearms are lost on death by default, along with your remaining Joules. This purchase negates that entirely.

Get the Sidearm Recoverer as early as your Bone budget allows. Losing a sidearm you liked to a bad pit death is the most demoralizing thing the game does to new players, and it is a solvable problem.

There are fourteen sidearms, and a few are worth naming now because they solve specific beginner walls. The Mist Jar is the only sidearm that heals. The Fishing Rod hooks an enemy and warps you to it. The Hollower's Rocks cost one Joule and skip across water. The Iron Steed rides across gaps. If a room looks impossible, the answer is frequently a sidearm you already own and forgot about.

## Trinkets: One Slot Until You Find More

Trinkets are passive. There are sixty of them. You start with a single trinket slot and expand it with Trinket Bags found across Tenebrous Isle, and you equip them at Trinket Chests or at the moment you pick one up.

For a first playthrough the boring ones are the right ones. Lace Glove raises your Attack level by one. Twill Weave raises Defense. Smelling Salts raises your Sidearm level. A flat stat bump in your one slot beats a clever conditional effect you will forget to trigger.

Once you have two or three slots, the interesting ones open up: Keri the Wisp lets you hold jump while airborne to float and extend a fall, Spring Heels grants consecutive high jumps, Bellows Bustle gives a mid-air dash, and Deboning Wand makes enemies drop far more Bones. That last one is the farming trinket, and if you are grinding toward a Bone Up before a boss, it is the correct equip.

![A shop interior in Mina the Hollower with an orange cat shopkeeper, a purple rug, and shelves of goods](/images/blog/mina-the-hollower/mina-the-hollower-beginner-guide/shop-interior.webp)

## The Knockback Problem

Time for the honest part. The most specific, most reproducible criticism of Mina the Hollower is that knockback on taking damage is excessive, and it is corroborated by professional reviews, not just frustrated Steam threads. You get hit, you get launched, and in a game full of pits and cramped screens, you frequently get launched into a second source of damage or straight off the map.

You cannot patch this out yourself, but you can play around it:

1. **Fight with your back to solid ground.** Positioning relative to pits matters more here than in most top-down action games. Before you engage, notice where you will be sent if you eat a hit.
2. **Burrow out of the flash.** As covered above, chaining the damage invulnerability into a burrow cuts off follow-up contact damage.
3. **Do not fight in doorways or on ledges.** Pull enemies into open rooms. The screen-by-screen design means a bad arena is often one screen away from a good one.

This is not you being bad. It is the game's sharpest design edge, and knowing it exists means you stop attributing every death to reflexes.

## Modifiers Are the Difficulty Slider

Mina the Hollower ships with no traditional difficulty selector. Instead it has over 200 modifiers, spanning easier, harder, weirder, and randomized. On the easier end there are options like Auto Jump, Infinite Burrow, Jump to Exit Burrow, Walk on Spikes, Walk on Pits, No Pit Damage, and More Inv Time.

Two caveats. Most modifiers are locked behind New Game Plus, so your first playthrough gets a subset rather than the full 200-plus buffet. And assist modifiers disable Feats, the internal achievement system wired to Steam, PlayStation, and Xbox achievements, so turning on the heavy assists means giving up completion on that save.

If pits are what is killing you, No Pit Damage exists and you should use it. Yacht Club shipped one of the most granular accessibility suites of the year. Using it is not cheating.

## Quick Action Checklist

- Learn the burrow long jump immediately: burrow, then release jump. It crosses gaps a standing jump cannot.
- When you flash from damage, hold jump to chain the invulnerability into a burrow.
- Treat your Bone total as a healing item. Boning Up restores health, Joules, and Sparks.
- Never carry a big Bone balance while Sparkless. That is the only state where death takes everything.
- Buy the Sidearm Recoverer early so deaths stop costing you sidearms and Joules.
- Do not agonize over your starting weapon. You get all five eventually and can test the first three for free.
- Put a flat stat trinket in your single early slot. Lace Glove, Twill Weave, or Smelling Salts.
- Equip the Deboning Wand when you are deliberately farming Bones toward a Bone Up.
- Fight in open rooms, away from pit edges, because knockback is severe and will launch you.
- If pits are the wall, turn on No Pit Damage. Just know assist modifiers disable Feats.
`,

  faq: [
    {
      question: 'Is Mina the Hollower a Soulslike?',
      answer:
        'Only loosely. It shares a currency-on-death concept, but leveling is automatic rather than manual, Boning Up restores health, Joules, and Sparks, and you only lose your Bones if you die while Sparkless. The death penalty is significantly softer than the genre standard.',
    },
    {
      question: 'How does burrowing work in Mina the Hollower?',
      answer:
        'Hollowing lets Mina dig underground for a short time, move quickly, and be invincible while below. It is the game\'s dodge, its traversal tool, and its escape. Jump, dig, and dodge share one contextual button. Releasing jump while burrowed performs a long jump that crosses gaps a standing jump cannot.',
    },
    {
      question: 'What happens when you die in Mina the Hollower?',
      answer:
        'You lose all your Bones only if you die while Sparkless. Spark Orbs protect your Bones, and enemies can absorb Sparks you drop. Sidearms and remaining Joules are also lost on death unless you have purchased the Sidearm Recoverer.',
    },
    {
      question: 'Which starting weapon should I choose in Mina the Hollower?',
      answer:
        'Whichever feels best. You can test the Nightstar, Whisper and Vesper, and the Blaststrike Maul in the starting area with no penalty, and you gain access to all five weapons eventually, including the later Guardian Casket and Battery Buster.',
    },
    {
      question: 'Does Mina the Hollower have difficulty settings?',
      answer:
        'There is no traditional difficulty selector. Instead the game offers over 200 modifiers covering easier, harder, weirder, and randomized play, including No Pit Damage and Infinite Burrow. Most are locked behind New Game Plus, and assist modifiers disable Feats, which are tied to platform achievements.',
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/mina-the-hollower', anchor: 'Mina the Hollower coverage hub' },
    { href: '/blog/mina-the-hollower/mina-the-hollower-weapons-guide', anchor: 'Mina the Hollower weapons guide' },
    { href: '/blog/mina-the-hollower/mina-the-hollower-sidearms-trinkets-guide', anchor: 'Mina the Hollower sidearms and trinkets guide' },
  ],

  externalSources: [
    { url: 'https://www.yachtclubgames.com/games/mina-the-hollower/', title: 'Mina the Hollower official game page (Yacht Club Games)' },
    { url: 'https://minathehollower.wiki.gg/wiki/Manual', title: 'Mina the Hollower in-game manual reference (wiki.gg)' },
    { url: 'https://store.steampowered.com/app/1875580/Mina_the_Hollower/', title: 'Mina the Hollower on Steam' },
  ],

  tldr:
    'Mina the Hollower is not really a Soulslike: leveling is automatic, Boning Up restores health, Joules, and Sparks, and you only lose Bones if you die while Sparkless. Burrowing is your dodge, your traversal, and your escape from a hit, and the burrow long jump crosses gaps a standing jump cannot. Buy the Sidearm Recoverer early, fight away from pit edges because knockback is severe, and use the 200-plus modifiers if pits are the wall.',
};
