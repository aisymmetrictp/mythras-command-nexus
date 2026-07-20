import type { BlogPost } from '../../blogTypes';

export const witcher3BeginnerGuide: BlogPost = {
  slug: 'witcher-3-beginner-guide',
  game: 'the-witcher-3',
  category: 'beginner-guides',
  topicCluster: 'witcher3-guides',
  tags: ['beginner', 'signs', 'alchemy', 'quests', 'gwent'],
  title: 'The Witcher 3 Beginner\'s Guide: Your First 20 Hours',
  metaDescription:
    'A Witcher 3 beginner guide that skips the fluff: difficulty picks, why Quen carries you, oils, Places of Power, ability slots, and the traps that waste hours.',
  excerpt:
    'Most people who bounce off The Witcher 3 do it in White Orchard, and it is almost always the same three reasons: they never learned Quen, they never applied an oil, and they treated the skill tree like a shopping list. Here is the fix.',
  featuredImagePrompt:
    'A white-haired witcher riding a chestnut mare down a muddy road at dusk, two swords crossed on his back, storm clouds over distant marshland',
  heroImage: '/images/blog/the-witcher-3/witcher-3-beginner-guide/geralt-roach.webp',
  heroImageAlt: 'Geralt of Rivia riding Roach through the countryside in The Witcher 3: Wild Hunt.',
  imageSources: [
    {
      src: '/images/blog/the-witcher-3/witcher-3-beginner-guide/geralt-roach.webp',
      sourceUrl: 'https://witcher.fandom.com/wiki/Roach',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/the-witcher-3/witcher-3-beginner-guide/quen-sign.webp',
      sourceUrl: 'https://witcher.fandom.com/wiki/Quen',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/the-witcher-3/witcher-3-beginner-guide/geralt-and-roach.webp',
      sourceUrl: 'https://witcher.fandom.com/wiki/Roach',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/the-witcher-3/witcher-3-beginner-guide/gwent-leaders.webp',
      sourceUrl: 'https://witcher.fandom.com/wiki/Gwent',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-20T00:00:00.000Z',
  lastUpdated: '2026-07-20T00:00:00.000Z',
  primaryKeyword: 'witcher 3 beginner guide',
  secondaryKeywords: [
    'witcher 3 tips for beginners',
    'witcher 3 what to do first',
    'witcher 3 best difficulty',
    'witcher 3 places of power',
    'witcher 3 oils explained',
    'witcher 3 ability slots',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'pick-your-difficulty-like-you-mean-it', label: 'Pick your difficulty like you mean it', level: 2 },
    { id: 'quen-is-not-optional', label: 'Quen is not optional', level: 2 },
    { id: 'the-alchemy-you-actually-need-early', label: 'The alchemy you actually need early', level: 2 },
    { id: 'places-of-power-are-free-skill-points', label: 'Places of Power are free skill points', level: 2 },
    { id: 'the-ability-slot-rule-nobody-explains', label: 'The ability slot rule nobody explains', level: 2 },
    { id: 'side-quests-are-the-good-part', label: 'Side quests are the good part', level: 2 },
    { id: 'gwent-deserves-ten-minutes', label: 'Gwent deserves ten minutes', level: 2 },
    { id: 'mistakes-that-cost-new-players-hours', label: 'Mistakes that cost new players hours', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `A griffin killed me eleven times in White Orchard. Not because the fight is hard, but because I was playing The Witcher 3 like it was Skyrim with better writing: mash the light attack, roll when the health bar looks scary, ignore the little menus. The twelfth attempt I put Quen up, coated my silver sword in hybrid oil, and the fight lasted ninety seconds.

That is the whole beginner problem in one anecdote. The Witcher 3 hands you a full witcher's toolkit in the prologue, then never insists you use it. The game will happily let you brute-force forty hours with a steel sword and a bad attitude, and it will feel bad the entire time. This guide is the set of things I wish someone had shouted at me before I left White Orchard.

## Pick your difficulty like you mean it

The four difficulties are not cosmetic. Pulled from the game's own scripts, here is what actually changes:

| Difficulty | Enemy health | Enemy damage | XP gain |
| --- | --- | --- | --- |
| Just the Story! | -50% | +0% | 100% |
| Story and Sword! | +10% | +40% | 100% |
| Blood and Broken Bones! | +20% | +130% | 90% |
| Death March! | +80% | +230% | 80% |

Two things jump out. First, enemy *damage* scales far harder than enemy health, which means higher difficulties do not turn fights into slogs, they turn them into fights you lose in three hits. Second, there is a hidden rule that matters more than any of those numbers: **on Blood and Broken Bones and Death March, meditation no longer restores your health.** On the two lower difficulties you can meditate an hour and walk away topped off. Above that, healing means Swallow potions, food, and regeneration stats.

My honest recommendation for a first playthrough: Blood and Broken Bones. It is the difficulty where the systems in this guide become mandatory rather than optional, and where a witcher preparing for a contract feels like the point of the game rather than a menu you skip. If you have never played an action RPG, Story and Sword is not a failure state. You can change difficulty from the options menu at any point, so there is no wrong first pick.

## Quen is not optional

Quen is the shield sign. It absorbs damage totaling a percentage of your maximum Vitality, and it is the single most load-bearing button in the game. Cast it before every fight. Recast it the moment it pops. If you take one thing from this article, take that.

![The Quen sign forming a protective shield around Geralt.](/images/blog/the-witcher-3/witcher-3-beginner-guide/quen-sign.webp)

Two early Sign-tree abilities make it dramatically better:

- **Exploding Shield** costs zero points to unlock. At level 1 the shield shoves opponents back when it breaks; at level 2 it also deals damage; at level 3 it adds a knockdown chance. That turns your panic button into a crowd-control tool.
- **Active Shield** is the alternate Quen mode, and it needs 6 points invested in the Signs branch before the row opens. Hold the sign button and Geralt maintains a bubble that converts absorbed damage into Vitality. At level 3 maintaining it costs no Stamina at all, though blocked hits still drain some. You cannot run while holding it, only walk.

Active Shield is, functionally, a heal that runs on getting punched. Against a pack of drowners it is close to unfair. Note that since Patch 4.0, the next-gen update from December 14, 2022, Quen no longer strips existing negative effects like poison. Instead the effect drains your shield.

The other four signs earn their keep too. Igni is your damage and, with the Melt Armor ability, permanently strips up to 45% of an enemy's armor. Yrden slows enemies inside its circle and is flatly required against wraiths, which are otherwise near-immune. Aard staggers and knocks down, opening finishers. Axii charms one enemy out of the fight and, with Delusion, opens extra dialogue options that occasionally hand you experience or skip a fight.

## The alchemy you actually need early

You do not need to become an alchemist. You need three habits.

**Oils.** Coat your blade with the oil matching the enemy type. A basic oil adds +10% attack power against that type, enhanced +25%, superior +50%, and that bonus is multiplicative on top of everything else. Hanged Man's Venom is the steel-sword oil for humans; beast oil works on both blades; every other oil is silver-only. Oils wear off after a set number of hits, tracked by a counter under your Toxicity meter, and you can reapply mid-fight from the inventory. Craft an oil once and the formula stays with you forever.

**Potions before boss fights.** Swallow for regeneration, Thunderbolt for attack power, Cat for pitch-black caves. Potions and bombs are not consumables in the traditional sense: they refill automatically when you meditate for at least an hour, as long as you have alcohol in your inventory. The game consumes White Gull first, then Alcohest, then Dwarven Spirit. Keep a stack of Dwarven Spirit and you will never run dry.

**Read the bestiary.** Every monster entry lists its weaknesses. It is not flavor text.

![Geralt and Roach on the road in The Witcher 3.](/images/blog/the-witcher-3/witcher-3-beginner-guide/geralt-and-roach.webp)

## Places of Power are free skill points

Scattered across the map are glowing magical sites called Places of Power. Activating one for the first time grants **a permanent skill point**, on top of a temporary buff to the sign it is tied to. Each site is bound to one of the five signs and boosts that sign's intensity when you draw from it.

This matters because skill points in The Witcher 3 are finite. You get one per level, and Places of Power are one of the only other sources. White Orchard alone has six of them, and they are all reachable in the starter zone before you ever set foot in Velen. Velen and Novigrad share eight more, Skellige has nine.

Sweep them. It is the highest return-per-minute activity available to a new player, and the buff on top means you can walk into a contract with your Igni already boosted.

## The ability slot rule nobody explains

This is the system that quietly ruins new builds. Unlocking an ability in the skill tree does **nothing** until you drag it into one of the twelve activation slots on the character panel. At the start only one slot is open. They unlock as you level, and all twelve are available by level 30.

Next to those slots are four diamond-shaped mutagen sockets, unlocked at levels 4, 9, 16 and 28. Each socket sits next to a group of three ability slots, and here is the rule:

> Every ability placed next to a mutagen of the **same colour** increases that mutagen's bonus by 100%. Fill all three matching slots and the bonus goes up by 300%.

Red is Combat and gives attack power. Blue is Signs and gives sign intensity. Green is Alchemy and gives Vitality. A Greater blue mutagen gives +10% sign intensity on its own and +40% with three blue abilities beside it. Mismatched colours are not penalised, they simply do nothing for the mutagen.

The practical takeaway: do not scatter one point into everything. Pick two branches, group your abilities by colour, and match the mutagens. A focused level-20 build outperforms a level-30 build that spread itself thin. If you have already made a mess of it, merchants sell a Potion of Clearance that refunds every ability point.

For a full breakdown of the three build archetypes and how mutations change everything at endgame, see the [Witcher 3 build guide](/blog/the-witcher-3/witcher-3-build-guide).

## Side quests are the good part

The Witcher 3's reputation is built on its side content, and this is not a "well, it's optional but nice" situation. The Bloody Baron questline, the Novigrad witch hunts, the Skellige succession, and the Hearts of Stone expansion are better written than most games' entire main plots. Several are also the primary source of witcher gear diagrams via the Scavenger Hunt quests.

A practical exploration rule: question marks on the map are mostly loot piles and can be ignored guilt-free. Notice-board contracts and named side quests are where the writing lives. Do the contracts near your level, take the ones two or three levels above you if you are confident, and do not stress about missing content, because there is more of it than any one playthrough can hold.

## Gwent deserves ten minutes

The in-game card game is genuinely good, and it is the one minigame worth learning properly. The rules are short: a coin toss decides who starts, both players draw 10 cards and may discard up to two once for a redraw, and matches are best of three rounds decided by total unit Strength. Passing ends your turn permanently for that round, which makes card economy the whole game. Losing a round costs you a gem; losing both loses the match. A draw costs both players a gem, unless you are playing Nilfgaard, whose faction ability wins ties outright.

![The Gwent faction leaders in The Witcher 3.](/images/blog/the-witcher-3/witcher-3-beginner-guide/gwent-leaders.webp)

Four factions ship in the base game, plus Skellige added in Blood and Wine. Northern Realms draws an extra card whenever it wins a round, which is the most forgiving ability for a new player. Buy cards from every innkeeper and merchant you meet, because some strong ones become permanently unavailable once quests move on.

## Mistakes that cost new players hours

- **Selling monster parts.** You will need them for potions, oils and gear crafting. Sell trophies and jewellery instead.
- **Ignoring armour weight class.** Light armour boosts stamina regeneration and fast-attack playstyles, heavy soaks hits. Pick one and build into it rather than wearing whatever has the highest number.
- **Hoarding potions.** They restock on meditation. Drink them.
- **Overlevelling by grinding.** Enemies far below your level give almost nothing, and the game's pacing assumes you are roughly level-matched to the main quest.
- **Skipping the tutorial prompts on the loading screens.** They are the only place several systems are explained at all.
- **Not upgrading witcher gear.** The school sets scale through enhanced, superior, mastercrafted and grandmaster tiers. A base Griffin chestpiece at level 30 is dead weight. The full breakdown lives in our [Witcher 3 witcher gear guide](/blog/the-witcher-3/witcher-3-witcher-gear-guide).

## Quick Action Checklist

- Start on Blood and Broken Bones unless you want a pure story run, and remember meditation will not heal you there.
- Cast Quen before every fight, and take Exploding Shield early since it costs zero points to unlock.
- Craft and apply the correct oil for every enemy type. Basic +10%, enhanced +25%, superior +50%.
- Carry Dwarven Spirit so meditation refills your potions and bombs.
- Clear all six White Orchard Places of Power before leaving for Velen. Each is a permanent skill point.
- Drag unlocked abilities into activation slots, and group them by colour next to matching mutagens for the +300% bonus.
- Do the notice-board contracts and named side quests. Skip the anonymous map question marks if you are short on time.
- Buy Gwent cards from every merchant. Northern Realms is the friendliest starter deck.
- Keep monster parts. Sell trophies.`,
  faq: [
    {
      question: 'What difficulty should a Witcher 3 beginner play on?',
      answer:
        'Blood and Broken Bones is the sweet spot for most players, because it makes signs, oils and potions genuinely necessary rather than optional. Be aware that on Blood and Broken Bones and Death March, meditation no longer restores your health, so you rely on Swallow potions and regeneration stats. If you mainly want the story, Story and Sword is perfectly reasonable, and difficulty can be changed at any time from the options menu.',
    },
    {
      question: 'Which sign should I upgrade first in The Witcher 3?',
      answer:
        'Quen. It creates a shield that absorbs damage equal to a percentage of your maximum Vitality, and it prevents more deaths than every other sign combined. Exploding Shield requires no points invested in the branch, and Active Shield, the alternate mode that converts absorbed damage into healing, opens once you have 6 points in the Signs tree.',
    },
    {
      question: 'How do Places of Power work in The Witcher 3?',
      answer:
        'Each Place of Power is tied to one of the five signs. Activating one for the first time permanently grants a skill point and temporarily increases that sign\'s intensity. Because skill points are otherwise limited to one per level, sweeping Places of Power is the fastest way to get ahead. White Orchard has six, Velen and Novigrad share eight, and Skellige has nine.',
    },
    {
      question: 'Why are my Witcher 3 skills not doing anything?',
      answer:
        'Unlocking an ability in the skill tree does not activate it. You have to drag it into one of the twelve activation slots on the character panel. Only one slot is available at the start and all twelve unlock by level 30. Abilities sitting in the tree but not slotted have zero effect.',
    },
    {
      question: 'Do potions run out permanently in The Witcher 3?',
      answer:
        'No. Potions, bombs and oils are permanent once crafted. Potions and bombs refill their charges when you meditate for at least one hour, provided you have alcohol in your inventory. The game consumes White Gull first, then Alcohest, then Dwarven Spirit, so keeping a stack of Dwarven Spirit means you effectively never run out.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/the-witcher-3', anchor: 'The Witcher 3 coverage hub' },
    { href: '/blog/the-witcher-3/witcher-3-build-guide', anchor: 'Witcher 3 build guide' },
    { href: '/blog/the-witcher-3/witcher-3-witcher-gear-guide', anchor: 'Witcher 3 witcher gear guide' },
  ],
  externalSources: [
    {
      url: 'https://witcher.fandom.com/wiki/Difficulty_level',
      title: 'Witcher Wiki — difficulty levels and enemy scaling values',
    },
    {
      url: 'https://witcher.fandom.com/wiki/The_Witcher_3_abilities',
      title: 'Witcher Wiki — ability branches, activation slots and mutagen rules',
    },
    {
      url: 'https://witcher.fandom.com/wiki/Place_of_Power',
      title: 'Witcher Wiki — Places of Power locations and skill point rewards',
    },
  ],
  tldr:
    'Cast Quen before every fight and take Exploding Shield early. Apply the matching oil to your sword, since basic oils give +10% attack power and superior oils +50%. Activate every Place of Power for free permanent skill points. Drag abilities into activation slots and group them by colour next to matching mutagens for up to a +300% mutagen bonus. Blood and Broken Bones is the difficulty that makes all of this matter, but remember meditation will not heal you there.',
};
