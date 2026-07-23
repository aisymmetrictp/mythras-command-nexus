import type { BlogPost } from '../../blogTypes';

export const botwShrineGuide: BlogPost = {
  slug: 'botw-shrine-guide',
  game: 'zelda-breath-of-the-wild',
  category: 'game-guides',
  topicCluster: 'botw-guides',
  tags: ['shrines', 'spirit-orbs', 'shrine-quests', 'exploration', 'progression'],
  title: 'Breath of the Wild Shrine Guide: All 120, Sorted by What They Actually Give You',
  metaDescription:
    'A Breath of the Wild shrine guide that sorts all 120 shrines by type: puzzle, Test of Strength, blessing, and the 42 shrine quests. Plus how to find them fast.',
  excerpt:
    'There are 120 shrines in Breath of the Wild and they are not interchangeable. Some are ten-minute puzzles, some are the best weapon farm in the game, and 42 of them are hidden behind overworld quests you can miss entirely.',
  featuredImagePrompt:
    'The glowing orange entrance of an ancient Sheikah shrine at dusk, ornate stone architecture with blue circuitry lines, Hyrule wilderness behind it',
  heroImage: '/images/blog/zelda-breath-of-the-wild/botw-shrine-guide/shrine-entrance.webp',
  heroImageAlt:
    'The entrance to an Ancient Shrine in Breath of the Wild, glowing orange with the Sheikah Slate terminal at its center.',
  imageSources: [
    {
      src: '/images/blog/zelda-breath-of-the-wild/botw-shrine-guide/shrine-entrance.webp',
      sourceUrl: 'https://zelda.fandom.com/wiki/Ancient_Shrine',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/zelda-breath-of-the-wild/botw-shrine-guide/shrine-rising.webp',
      sourceUrl: 'https://zelda.fandom.com/wiki/Ancient_Shrine',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/zelda-breath-of-the-wild/botw-shrine-guide/guardian-scout.webp',
      sourceUrl: 'https://zelda.fandom.com/wiki/Guardian_Scout',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/zelda-breath-of-the-wild/botw-shrine-guide/eventide-island.webp',
      sourceUrl: 'https://zelda.fandom.com/wiki/Eventide_Island',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-22T00:00:00.000Z',
  lastUpdated: '2026-07-22T00:00:00.000Z',
  primaryKeyword: 'breath of the wild shrine guide',
  secondaryKeywords: [
    'botw all 120 shrines',
    'breath of the wild shrine quests',
    'botw test of strength shrines',
    'how to find shrines botw',
    'botw spirit orbs guide',
    'breath of the wild blessing shrines',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'the-four-kinds-of-shrine-and-why-it-matters', label: 'The four kinds of shrine and why it matters', level: 2 },
    { id: 'puzzle-shrines', label: 'Puzzle shrines', level: 3 },
    { id: 'tests-of-strength', label: 'Tests of Strength', level: 3 },
    { id: 'blessing-shrines', label: 'Blessing shrines', level: 3 },
    { id: 'shrine-quest-shrines', label: 'Shrine quest shrines', level: 3 },
    { id: 'tests-of-strength-are-the-best-weapon-farm-in-the-game', label: 'Tests of Strength are the best weapon farm in the game', level: 2 },
    { id: 'the-42-shrine-quests-are-where-the-real-game-hides', label: 'The 42 shrine quests are where the real game hides', level: 2 },
    { id: 'the-three-archetypes-of-shrine-quest', label: 'The three archetypes of shrine quest', level: 3 },
    { id: 'how-to-find-shrines-without-opening-a-checklist', label: 'How to find shrines without opening a checklist', level: 2 },
    { id: 'the-orb-economy-and-what-120-shrines-actually-buy', label: 'The orb economy and what 120 shrines actually buy', level: 2 },
    { id: 'shrines-worth-a-detour-early', label: 'Shrines worth a detour early', level: 2 },
    { id: 'cheese-the-puzzles-the-game-expects-it', label: 'Cheese the puzzles. The game expects it', level: 2 },
    { id: 'what-you-get-for-clearing-all-120', label: 'What you get for clearing all 120', level: 2 },
    { id: 'mistakes-that-stall-shrine-hunting', label: 'Mistakes that stall shrine hunting', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Here is the thing nobody tells you about Breath of the Wild's 120 shrines: roughly a third of them are not puzzles at all. Some hand you a Spirit Orb for simply walking in the door. Some are combat arenas that exist purely to pay you in the strongest early-game weapons in Hyrule. And 42 of the 120 do not appear on your map until you solve something out in the overworld first — a song, a maze, a rock you have to bomb, an island that strips your entire inventory.

Treating all 120 as one undifferentiated checklist is why shrine hunting feels like a grind for some players and like the best part of the game for others. Sort them by what they actually give you and the whole system snaps into focus.

## The four kinds of shrine and why it matters

Every Ancient Shrine ends the same way: an elevator platform lowers you in, you cross the trial, and a Monk resting on a pedestal hands you a Spirit Orb. What changes is everything in between.

The Sheikah built the shrines as training grounds for the hero, and they only started glowing after you activated the Great Plateau Tower. That glow is a status light and it is worth learning to read: **orange means unopened, orange-and-blue means opened but not cleared, blue means done.** Once you press the Sheikah Slate to the terminal outside, the shrine's Travel Gate is live — you can warp there forever after, whether or not you ever solve the thing inside.

![An Ancient Shrine rising out of the ground in Breath of the Wild after its shrine quest condition is met.](/images/blog/zelda-breath-of-the-wild/botw-shrine-guide/shrine-rising.webp)

### Puzzle shrines

The default and the majority. A themed physics or rune problem — magnetic cranes, ball mazes on tilting floors, Stasis timing, Cryonis pillar-work, wind and fire and electricity. Each contains one or more treasure chests, and once you have looted every chest inside, a small chest icon appears next to that shrine's name on your map. That icon is your completion tracker; you do not need a spreadsheet.

### Tests of Strength

Combat arenas with no puzzle whatsoever. You fight a Guardian Scout, you win, you take its gear. They come in three tiers — **A Minor Test of Strength**, **A Modest Test of Strength**, and **A Major Test of Strength** — and the tier tells you exactly which Scout is waiting and exactly how much loot drops.

### Blessing shrines

The free ones. A blessing shrine has no trial at all: the Monk greets you with some version of "merely being able to enter is proof of your worth," and there is a straight path to the pedestal with a single treasure chest along the way. Zuna Kai's Blessing on Skull Lake, Shae Katha's Blessing behind the Spring of Courage, Qaza Tokki's Blessing in the middle of the North Lomei Labyrinth — the trial in these was the journey. The chests are usually worth the walk on their own: Shae Katha's holds a Thunderspear, Qaza Tokki's holds Barbarian Leg Wraps.

### Shrine quest shrines

Not a separate room design, but a separate way in. These are shrines you cannot see, cannot scan, and cannot warp to until an overworld condition is satisfied. There are **42 shrine quests** in the base game and they are the single largest reason players finish Breath of the Wild sitting at 90-something shrines with no idea what they missed.

## Tests of Strength are the best weapon farm in the game

Guardian gear is the most efficient loot in the first half of a playthrough, and Tests of Strength are how you get it without ever facing a Guardian Stalker.

| Trial tier | Enemy | What it carries | Drops on death |
| --- | --- | --- | --- |
| A Minor Test of Strength | Guardian Scout II | One basic Guardian weapon | Exactly 2 ancient parts |
| A Modest Test of Strength | Guardian Scout III | Two intermediate pieces, sometimes a Guardian Shield | 1 rare part plus 3-4 ancient parts |
| A Major Test of Strength | Guardian Scout IV | Three advanced pieces, highest health pool | 1 rare part plus 4-5 ancient parts |

![Link fighting a Guardian Scout II inside an Ancient Shrine, the enemy that guards every Minor Test of Strength.](/images/blog/zelda-breath-of-the-wild/botw-shrine-guide/guardian-scout.webp)

The Guardian Sword++ a Scout IV drops is a genuine endgame-adjacent weapon you can hold before touching a single Divine Beast. Guardian gear also has properties normal weapons do not: it is non-metallic, so it will not attract lightning, will not conduct electricity, will not burn in Death Mountain's heat, and floats in water. It deals bonus damage against Guardians themselves. The tradeoff is that Magnesis cannot pick it up.

How to beat them: Scouts are wide open to elements. Shock stuns them outright, fire sets them alight, ice freezes them solid. When a Scout burns the floor in a circle around itself, the flames create an updraft — pop the paraglider, get above it, take the free bow-time-slow window. When it drops low it charges an uninterruptible mega-laser, so back off and block rather than greeding the kill. If your parry timing is shaky, the [Breath of the Wild combat tips](/blog/zelda-breath-of-the-wild/botw-combat-tips) breakdown fixes it before you walk into a Major.

There is also a shrine that teaches the fight: **Ta'loh Naeg's Teaching**, on the hill above Kakariko Village, walks you through side-hop dodges into Flurry Rush, backflip dodges into Flurry Rush, a perfect guard parry, and a charged attack — against a friendly translucent Guardian Scout II that cannot kill you. Two chests by the entrance hand you an Eightfold Blade and a Shield of the Mind's Eye.

## The 42 shrine quests are where the real game hides

A shrine quest is Breath of the Wild's answer to a dungeon key. Instead of a locked door, the shrine simply is not there yet.

### The three archetypes of shrine quest

**Kass songs.** Kass the Rito minstrel wanders Hyrule with an accordion and a backlog of ancient songs, and most of them are riddles with a shrine at the end. "Under a Red Moon" is the meanest one in the game: stand on the pedestal below his tree at Washa's Bluff, during a Blood Moon, with no armor and no weapons equipped. Mijah Rokee Shrine rises out of the ground. If you are the type who reflexively keeps a full loadout on, you will fail this a dozen times without understanding why.

**Environmental riddles.** Someone tells you a half-remembered rumor and you go dig. Clavia in Hateno Village points at three cedar trees on Madorna Mountain; line them up, look toward the sea, bomb a rock wall, and Tahno O'ah Shrine is inside a cave with Climbing Boots in the chest. Jerrin at the Akkala Ancient Tech Lab sends you to the eastern eye of Skull Lake for Zuna Kai. In the pitch-black Thyphlo Ruins you follow torchlights to a sleeping Blue Hinox with an Ancient Orb hanging from its neck, and either fight it or steal the orb and run.

**Trials and challenges.** The Korok Forest hosts three of these under "The Korok Trials," including The Test of Wood, where Damia hands you a Forest Dweller's Sword, Shield, and Bow and disqualifies you if any break or get unequipped before Maag Halan Shrine. In Eldin, Bayge charges 20 Rupees a run to climb Gut Check Rock and collect 100 Rupees inside a time limit before he will step off the Gorae Torr Shrine platform.

![Eventide Island in Breath of the Wild, the site of the Stranded on Eventide shrine quest that strips Link of every item.](/images/blog/zelda-breath-of-the-wild/botw-shrine-guide/eventide-island.webp)

And then there is **Stranded on Eventide**, the best hour in Breath of the Wild. Set foot on Eventide Island and the Monk Korgu Chideh confiscates everything except your Sheikah Slate and key items. You have to find three Ancient Orbs — one on top of a monster stronghold, one dangling from a Blue Hinox's neck, one out on Koholit Rock under a slab you need Stasis to move — and slot them into three pedestals using only what you scavenge on the island. You cannot warp out. Swimming away ends the trial and returns your gear, but coming back means starting over from zero.

Two details make Eventide forgiving once you know them: its treasure chests respawn after being looted, which is true almost nowhere else in Hyrule, and its monsters regenerate whenever you leave regardless of the Blood Moon. It is a self-contained survival sandbox, and our [Breath of the Wild cooking guide](/blog/zelda-breath-of-the-wild/botw-cooking-guide) covers the one skill that carries it: turning whatever grows on the ground into hearts.

## How to find shrines without opening a checklist

The intended tool is the **Sheikah Sensor**, which unlocks either by activating any Sheikah Tower after you leave the Great Plateau or by having the Slate repaired at the Hateno Ancient Tech Lab. It beeps faster and louder as you close on an unfound shrine, which turns "somewhere on this mountain" into "twenty paces that way." Upgrade it to the Sensor + and it will track any object you have logged in the Hyrule Compendium, which is a materials-farming tool as much as a shrine one.

The workflow that beats everything else:

1. Climb the region's tower first and download the map.
2. From the top, scope the horizon and drop a pin on every orange light you can see. Orange lights are shrines you have not opened.
3. Glide toward the pins, opening doors as you pass. **Opening the door banks the fast travel point even if you leave immediately.**
4. Turn the Sensor on and let it catch the ones no line of sight reaches — cave mouths, canyon floors, the inside of labyrinths.
5. Talk to every stable NPC and every Kass sighting. That is where the 42 hidden ones come from.

If you are still early enough that towers feel dangerous, our [Breath of the Wild beginner's guide](/blog/zelda-breath-of-the-wild/botw-beginner-guide) covers the traversal and survival order of operations first.

## The orb economy and what 120 shrines actually buy

Each Monk gives one Spirit Orb. Four Spirit Orbs traded at a Goddess Statue buys one Heart Container or one Stamina Vessel. 120 shrines therefore equals **30 total upgrades** across an entire base-game playthrough — that is the whole budget, and there is no other source in the base game.

The Champions' Ballad DLC pushes the shrine count to **136**, but read the fine print: only the four new Great Plateau shrines pay in Spirit Orbs. The other twelve, three in each Champion's region, pay in Divine Beast emblems instead. So the DLC gives you one extra upgrade, not four.

Spend accordingly. Hearts gate the Master Sword at 13, but raw survivability comes from defense, not heart count, which is the argument the [Breath of the Wild armor guide](/blog/zelda-breath-of-the-wild/botw-best-armor-guide) makes in numbers. Stamina, meanwhile, is what lets you reach the shrines in the first place, which makes it the upgrade that compounds.

## Shrines worth a detour early

- **Ta'loh Naeg (Kakariko Village)** — the combat tutorial, plus an Eightfold Blade and a Shield of the Mind's Eye sitting in the entryway.
- **Any Minor Test of Strength you stumble across** — a Guardian weapon at hour six is a bigger power spike than two extra hearts.
- **The blessing shrines** — free orbs. Shae Katha behind the Spring of Courage and Tahno O'ah on Mount Lanayru both cost you a hike and nothing else.
- **Anything near a Great Fairy Fountain** — you are going there anyway, and shrine travel gates make the return trips for armor upgrades painless.

## Cheese the puzzles. The game expects it

Breath of the Wild's shrines are physics problems, not scripted sequences, and the developers knew you would break them.

- Metal crates and slabs can be carried across most of a room with Magnesis instead of solved around.
- Stasis plus repeated hits stores kinetic energy and launches objects across gaps that had an intended bridge.
- Cryonis pillars are climbable stairs anywhere there is water, including some shrine floors.
- Octo Balloons stuck to a heavy object float it upward, trivializing a startling number of weight-plate puzzles.
- If a ball has to reach a hole, sometimes you can just pick it up and walk.

None of it locks you out. If a shrine has beaten you three times, look for the ugly solution.

## What you get for clearing all 120

Finish every base-game shrine and you are directed to the Goddess Statue inside the Forgotten Temple in the far northwest, where treasure chests hold the **Wild Set** — a cap, tunic, and trousers styled after the classic hero outfit. It is a cosmetic trophy with real defense values, not a gameplay unlock, and that is fine. The 120 orbs were the reward.

Worth knowing on the way there: the Master Trials DLC hides a **Travel Medallion** in a chamber under Lomei Labyrinth Island, letting you register one custom fast travel point anywhere. Combined with 120 shrine gates, Hyrule stops having any travel time at all.

More Hyrule systems get taken apart on the [Breath of the Wild coverage hub](/blog/zelda-breath-of-the-wild), and the rest of what we cover lives on the [Mythras blog](/blog).

## Mistakes that stall shrine hunting

- **Skipping stable conversations.** Shrine quests come from NPC dialogue almost exclusively.
- **Never listening to Kass.** He is not flavor text. He is a quest giver with a bandoneon.
- **Leaving chests behind.** The map chest icon only appears once a shrine is fully looted, and nobody enjoys warping back for one Opal.
- **Treating a Major Test of Strength like a Minor.** A Guardian Scout IV has three weapons and the largest health pool of any Scout.
- **Ignoring the Sensor.** Plenty of shrines sit in caves and canyon floors you will never see from a tower.

## Quick Action Checklist

- Read the glow: orange is unopened, orange-and-blue is opened but uncleared, blue is complete.
- Open every shrine door on sight to bank the travel gate, even if you skip the trial.
- Unlock the Sheikah Sensor as soon as you leave the Plateau, then upgrade it to Sensor + at the Hateno lab.
- Farm Minor and Modest Tests of Strength early for Guardian gear that does not burn, conduct, or attract lightning.
- Stun Guardian Scouts with shock, ride the fire-ring updraft, and back off when they charge the final laser.
- Talk to every stable NPC and chase every Kass song — that is where the 42 shrine quests come from.
- Do Eventide Island once, deliberately, with no preparation. It is the best hour in the game.
- Budget your 30 upgrades: stamina early, hearts toward 13 for the Master Sword, defense from armor rather than orbs.
- Clear all 120 and collect the Wild Set from the Forgotten Temple's Goddess Statue.
`,
  faq: [
    {
      question: 'How many shrines are there in Breath of the Wild?',
      answer:
        'There are 120 Ancient Shrines in the base game. The Champions Ballad DLC adds 16 more for a total of 136, but only the four new Great Plateau shrines award Spirit Orbs — the other twelve, three per Champion region, award Divine Beast emblems instead.',
    },
    {
      question: 'What are the different types of shrines in Breath of the Wild?',
      answer:
        'Four practical types. Puzzle shrines are the standard themed rune and physics trials. Tests of Strength are combat arenas against Guardian Scouts, in Minor, Modest, and Major tiers. Blessing shrines have no trial at all — a straight path to the Monk plus one treasure chest, awarded for reaching them. Shrine quest shrines are hidden until you solve an overworld condition, and there are 42 shrine quests in the base game.',
    },
    {
      question: 'How many Spirit Orbs do I need for a Heart Container?',
      answer:
        'Four. Each shrine Monk gives one Spirit Orb, and four traded at any Goddess Statue buys either one Heart Container or one Stamina Vessel. With 120 base-game shrines that is exactly 30 upgrades for an entire playthrough, so plan the split rather than spending on impulse.',
    },
    {
      question: 'Which Test of Strength has the best rewards?',
      answer:
        'A Major Test of Strength. It pits you against a Guardian Scout IV, which carries three advanced pieces of Guardian gear including weapons like the Guardian Sword++, has the largest health pool of any Scout, and drops one rare ancient part plus four to five standard ancient parts. Minor tiers use Guardian Scout II with a single basic weapon, and Modest tiers use Guardian Scout III with two pieces.',
    },
    {
      question: 'How do I find hidden shrines in Breath of the Wild?',
      answer:
        'Use the Sheikah Sensor, unlocked by activating any Sheikah Tower after leaving the Great Plateau or by repairing the Sheikah Slate at the Hateno Ancient Tech Lab. It beeps faster as you approach an unfound shrine. Upgrading it to the Sensor + lets you track any Hyrule Compendium entry. Beyond that, climb region towers and scope for orange lights, and talk to stable NPCs and Kass, since the 42 shrine quests are almost entirely gated behind dialogue.',
    },
    {
      question: 'What happens on Eventide Island?',
      answer:
        'Stepping onto Eventide Island starts the Stranded on Eventide shrine quest, which strips every item except the Sheikah Slate and key items. You must find three Ancient Orbs on the island and place them in three pedestals using only scavenged gear. Warping is disabled, and swimming away returns your equipment but resets the trial if you come back. Uniquely, Eventide treasure chests respawn and its monsters regenerate whenever you leave, independent of the Blood Moon.',
    },
    {
      question: 'Do I get anything for completing all 120 shrines?',
      answer:
        'Yes. After all 120 base-game shrines are complete you are directed to the Goddess Statue in the Forgotten Temple, where treasure chests contain the Wild Set — the Cap, Tunic, and Trousers of the Wild. It is a cosmetic-style armor set with real defense values rather than a gameplay unlock.',
    },
    {
      question: 'Does opening a shrine door count if I do not finish the trial?',
      answer:
        'It counts for fast travel. Pressing the Sheikah Slate to the terminal outside activates the shrine Travel Gate immediately, so you can warp there from your map forever after even if you walk away without touching the puzzle. Completion, the Spirit Orb, and the blue-only glow still require reaching the Monk.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/zelda-breath-of-the-wild', anchor: 'Breath of the Wild coverage hub' },
    { href: '/blog/zelda-breath-of-the-wild/botw-beginner-guide', anchor: "Breath of the Wild beginner's guide" },
    { href: '/blog/zelda-breath-of-the-wild/botw-combat-tips', anchor: 'Breath of the Wild combat tips' },
    { href: '/blog/zelda-breath-of-the-wild/botw-cooking-guide', anchor: 'Breath of the Wild cooking guide' },
    { href: '/blog/zelda-breath-of-the-wild/botw-best-armor-guide', anchor: 'Breath of the Wild armor guide' },
  ],
  externalSources: [
    {
      url: 'https://zelda.fandom.com/wiki/Ancient_Shrine',
      title: 'Zelda Wiki — Ancient Shrines, shrine counts, travel gates, and the Wild Set',
    },
    {
      url: 'https://zelda.fandom.com/wiki/Guardian_Scout',
      title: 'Zelda Wiki — Guardian Scout tiers and Test of Strength drops',
    },
    {
      url: 'https://zelda.fandom.com/wiki/Stranded_on_Eventide',
      title: 'Zelda Wiki — Stranded on Eventide shrine quest rules',
    },
    {
      url: 'https://zelda.fandom.com/wiki/Sheikah_Sensor',
      title: 'Zelda Wiki — Sheikah Sensor and Sensor + unlock conditions',
    },
  ],
  tldr:
    'Breath of the Wild has 120 shrines in four practical flavors: puzzle trials, Tests of Strength in Minor, Modest, and Major tiers, blessing shrines that hand you a Spirit Orb just for arriving, and 42 shrine quests hidden behind overworld conditions. Open every door you pass to bank the fast travel gate even if you skip the trial, unlock the Sheikah Sensor the moment you leave the Great Plateau, and farm Tests of Strength early because Guardian gear does not burn, conduct electricity, or attract lightning. Four Spirit Orbs buy one Heart Container or Stamina Vessel, which means 120 shrines equals exactly 30 upgrades for the whole playthrough.',
};
