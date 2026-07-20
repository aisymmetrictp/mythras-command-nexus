import type { BlogPost } from '../../blogTypes';

export const superMario64BeginnerGuide: BlogPost = {
  slug: 'super-mario-64-beginner-guide',
  game: 'super-mario-64',
  category: 'beginner-guides',
  topicCluster: 'mario64-guides',
  tags: ['beginner', 'power-stars', 'peachs-castle', 'bowser', 'n64'],
  title: 'Super Mario 64 Beginner Guide: Your First 30 Power Stars',
  metaDescription:
    'A Super Mario 64 beginner guide for the N64 original: the moves that matter, how castle star doors gate you, a clean 30-star route, and both early Bowsers.',
  excerpt:
    'Super Mario 64 does not gate you on difficulty, it gates you on Power Stars. Here is exactly which doors need what, which stars are fastest to grab, and the route that gets a first-timer from one star to thirty without wandering the castle in circles.',
  featuredImagePrompt:
    'The interior foyer of Peach\'s Castle in Super Mario 64, sun mosaic on the floor, Mario standing in front of the Bob-omb Battlefield painting, warm N64-era lighting',
  heroImage: '/images/blog/super-mario-64/super-mario-64-beginner-guide/mushroom-castle.webp',
  heroImageAlt:
    'The Mushroom Castle hub in Super Mario 64, the central room whose star doors gate access to every course.',
  imageSources: [
    {
      src: '/images/blog/super-mario-64/super-mario-64-beginner-guide/mushroom-castle.webp',
      sourceUrl: 'https://mario.wiki.gallery/images/6/6c/SM64_Screenshot_Mushroom_Castle.png',
      license: 'Super Mario Wiki',
    },
    {
      src: '/images/blog/super-mario-64/super-mario-64-beginner-guide/bob-omb-battlefield.webp',
      sourceUrl: 'https://mario.wiki.gallery/images/6/65/SM64_Screenshot_Bob-omb_Battlefield.png',
      license: 'Super Mario Wiki',
    },
    {
      src: '/images/blog/super-mario-64/super-mario-64-beginner-guide/star-door.webp',
      sourceUrl: 'https://mario.wiki.gallery/images/3/36/SM64_Screenshot_-_Star_Door.png',
      license: 'Super Mario Wiki',
    },
    {
      src: '/images/blog/super-mario-64/super-mario-64-beginner-guide/cool-cool-mountain.webp',
      sourceUrl: 'https://mario.wiki.gallery/images/8/84/SM64_Screenshot_Cool%2C_Cool_Mountain.png',
      license: 'Super Mario Wiki',
    },
  ],
  publishDate: '2026-07-20T00:00:00.000Z',
  lastUpdated: '2026-07-20T00:00:00.000Z',
  primaryKeyword: 'super mario 64 beginner guide',
  secondaryKeywords: [
    'super mario 64 how many stars',
    'super mario 64 star door requirements',
    'super mario 64 first stars',
    'super mario 64 bowser in the dark world',
    'super mario 64 30 stars',
    'super mario 64 n64 guide',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'the-only-painting-that-works-and-why-that-is-the-whole-design', label: 'The only painting that works, and why that is the whole design', level: 2 },
    { id: 'the-controls-that-actually-matter', label: 'The controls that actually matter', level: 2 },
    { id: 'how-the-castle-star-doors-really-gate-you', label: 'How the castle star doors really gate you', level: 2 },
    { id: 'your-first-eight-stars-in-order', label: 'Your first eight stars, in order', level: 2 },
    { id: 'beating-bowser-in-the-dark-world', label: 'Beating Bowser in the Dark World', level: 2 },
    { id: 'stars-nine-through-thirty-the-efficient-block', label: 'Stars nine through thirty, the efficient block', level: 2 },
    { id: 'the-30-star-door-and-dire-dire-docks', label: 'The 30-star door and Dire, Dire Docks', level: 2 },
    { id: 'mistakes-that-stall-new-players', label: 'Mistakes that stall new players', level: 2 },
    { id: 'n64-3d-all-stars-and-ds-are-not-the-same-game', label: 'N64, 3D All-Stars, and DS are not the same game', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `You walk into Peach's castle and every painting is a wall. One is not. That single unsealed portrait — Bob-omb Battlefield, guarded by a Toad who tells you exactly where to go — is the most honest tutorial Nintendo ever shipped, because it teaches you the actual rule of the game: **Super Mario 64 does not gate you on difficulty, it gates you on Power Stars.**

There are 120 Power Stars in the N64 version. Fifteen courses hold seven each (six named missions plus a 100-coin star), which is 105, and the castle itself hides the remaining 15 as secret stars. You need exactly **70 to break the spell on the endless stairs** and reach Bowser in the Sky. Everything between star one and star seventy is a routing problem, not a skill wall.

This guide gets a first-timer from zero to thirty stars without wandering the castle in circles, and it is written for the **Nintendo 64 original**. Where the DS remake or the Super Mario 3D All-Stars port changes the numbers, I flag it.

## The only painting that works, and why that is the whole design

Bob-omb Battlefield is not a tutorial level in the modern sense. Nobody stops you and explains the long jump. It is an open cone — a spiral mountain with a boss at the top, a Chain Chomp on a post at the bottom, floating islands, a cannon network — and you are meant to poke at it, fail, and come back with a better idea.

That structure repeats for all 15 courses. Each is a box of six named missions plus a 100-coin star, and the mission you select changes what actually spawns. Pick "Footrace with Koopa the Quick" and Koopa is standing at the entrance. Pick a different mission and he is gone.

![Bob-omb Battlefield, the first and only unsealed painting when you start Super Mario 64.](/images/blog/super-mario-64/super-mario-64-beginner-guide/bob-omb-battlefield.webp)

One thing that trips up newcomers immediately: **you can collect any star in a course regardless of which mission you selected.** The mission select controls the level's setup, not which star you are allowed to take. If you enter on mission 1 and find the 8 red coins anyway, you get the red coin star. This is the single most useful fact in the entire game for cutting down on backtracking.

## The controls that actually matter

You will get through the first 30 stars with about six inputs. Learn these before you learn anything clever.

| Move | Input (N64) | What it is for |
| --- | --- | --- |
| Jump | A | Baseline. Three chained jumps while moving becomes a Triple Jump, the highest standing-ish jump you have |
| Punch / grab / throw | B | Kills most small enemies. Grabs Bob-ombs and King Bob-omb |
| Crouch | Z | The gateway to every advanced move |
| Ground Pound | Z in midair | Breaks posts and pillars, activates switches, kills Whomps and Thwomps |
| Long Jump | Run, hold Z, press A | Distance and speed. Your primary travel tool |
| Backflip | Crouch with Z standing still, then A | Straight-up height with no runway |
| Wall Kick | Jump into a wall, press A the instant you touch it | Vertical recovery in any narrow gap |
| Dive | B while running or in midair | Speed, plus it lets you roll out of a landing |

Two of these carry more weight than the rest. The **Long Jump** is how you cross the game — it covers far more horizontal distance than a triple jump and it is faster than running. The **Wall Kick** is how you recover from mistakes; press right as Mario contacts the wall, not after the bounce animation starts. And if you are about to eat a huge drop, dive — rolling out of the landing cancels fall damage.

## How the castle star doors really gate you

The castle is four areas — ground floor, basement, second floor, third floor — and the star requirements are specific numbers, not vibes. Here is the actual gating on N64:

- **1-star door** (ground floor): opens the room with the Whomp's Fortress painting.
- **Two 3-star doors** (ground floor): one leads to the snowy room with Cool, Cool Mountain, the other to the aquarium room with Jolly Roger Bay.
- **Big Star Door, 8 stars** (ground floor mezzanine): Bowser in the Dark World.
- **Basement stairs**: unlocked by the key Bowser drops after the Dark World.
- **Big Star Door, 30 stars** (basement): the hallway holding Dire, Dire Docks and, behind it, Bowser in the Fire Sea.
- **Second floor**: unlocked by the key from Bowser in the Fire Sea.
- **Third floor**: through the Big Star Door on the second floor.
- **Endless stairs, 70 stars**: the final gate to Bowser in the Sky.

![A Big Star Door in Peach's castle. The number on the door is the hard gate, not a suggestion.](/images/blog/super-mario-64/super-mario-64-beginner-guide/star-door.webp)

There are two more numbers that matter early and nobody tells you. **The courtyard fills with Boos once you have at least 12 stars**, and the Big Boo out there is holding the birdcage that opens Big Boo's Haunt. And **the Toad near the Hazy Maze Cave entrance in the basement does not appear until you have 12 stars either** — he hands over a free Power Star for talking to him. Two more Toads do the same thing: one near the Tall, Tall Mountain painting on the second floor, one to the right of the clock on the third floor. Three free stars for walking up and pressing B.

## Your first eight stars, in order

You need 8 for the first Bowser. Bob-omb Battlefield alone can supply almost all of them, and it is the fastest opening block in the game.

1. **Big Bob-omb on the Summit** — climb the spiral. King Bob-omb throws you if you approach head-on, so circle behind him, press B to pick him up, and throw. Three throws ends it. Do not fight near the edge.
2. **Footrace with Koopa the Quick** — talk to Koopa at the entrance, then take the same spiral up. You cannot use a cannon; Koopa calls it cheating and withholds the star. Warps are fine.
3. **Shoot to the Island in the Sky** — talk to the Bob-omb Buddy to open a cannon, or triple jump up the long way.
4. **Find the 8 Red Coins** — most sit on and around the spiral path and the floating island.
5. **Behind Chain Chomp's Gate** — ground pound the Chain Chomp's wooden post three times. It rips free, lunges, and smashes the cage open for you.
6. **Mario Wings to the Sky** — needs the Wing Cap, which needs the red switch (see below).
7. **100 coins in Bob-omb Battlefield** — dense enough here that it falls out on your third or fourth run.
8. **Whomp's Fortress, "Chip Off Whomp's Block"** — ground pound the Whomp King's back after he slams down.

At **10 stars**, stand on the sun mosaic in the middle of the castle foyer and look up. Sunlight warps you to the **Tower of the Wing Cap**, where the red switch makes every red block in the game solid — that is what unlocks "Mario Wings to the Sky" and a pile of later stars. Do it the moment you hit ten.

## Beating Bowser in the Dark World

Behind the 8-star door is a corridor with a Peach portrait that morphs into Bowser as you approach, then a trapdoor. The level is a platforming course over an abyss — moving squares, flamethrowers, a wooden octagon with three Goombas, a spinning maze — and then a pipe to the arena.

The fight is a grab-and-throw. Run behind Bowser, press B to grab his tail, spin the control stick, and release toward one of the four bombs ringing the arena. **One bomb hit ends the first Bowser.** He drops the key to the basement.

The mistake everyone makes is mashing the stick in tiny circles. Wide, steady rotations build more spin. And release when you are actually aimed at a bomb — Bowser flies in the direction you let go, not the direction you are facing.

## Stars nine through thirty, the efficient block

After the basement key, the fastest 22 stars come from the four courses that are already open plus the freebies.

- **Whomp's Fortress** (7 available) — the tower, the owl, the pole, the red coins. Nothing here is a wall.
- **Cool, Cool Mountain** (7 available) — learn the slide properly, since "Slip Slidin' Away" and the penguin race both run it. Steer with light stick inputs; hard inputs bounce you off the walls.
- **Jolly Roger Bay** (7 available, 3-star door) — the eel star and the sunken ship. Watch your air meter; surfacing resets it.
- **Big Boo's Haunt** (unlocked at 12 stars via the courtyard Big Boo) — punch Boos from behind.

![Cool, Cool Mountain, one of the two courses behind the 3-star doors on the ground floor.](/images/blog/super-mario-64/super-mario-64-beginner-guide/cool-cool-mountain.webp)

Add the three Toad stars, the Tower of the Wing Cap star (collect the eight red coins while flying), and **The Princess's Secret Slide**, reachable through the stained glass Peach window on the right side of the Princess's room upstairs. That slide has two stars: one for finishing, and a second that spawns in front of the yellow block **only if you finish in under 21 seconds.**

Do all of that and you are past 30 without touching a hard course. If you want the full accounting of the 15 castle secret stars, that is its own project — see the [Super Mario 64 secret stars guide](/blog/super-mario-64/super-mario-64-secret-stars-guide).

## The 30-star door and Dire, Dire Docks

The basement Big Star Door needs 30 Power Stars. Behind it is a long hallway with a rippling blue portal at the front — that is Dire, Dire Docks. The Bowser in the Fire Sea entrance is in the same room but blocked until you clear **"Board Bowser's Sub"**, the first Dire, Dire Docks mission. Finish it and the blue portal slides to the back of the room, exposing the Fire Sea entrance.

Bowser in the Fire Sea is a real step up: mesh platforms that sink under lava, tilting platforms, Bullies that shove you off the edge. Same grab-and-throw fight, except **the arena floor breaks apart after the first bomb hit**, so you have less room and need two throws. Beating it hands you the second key and unlocks the second floor.

## Mistakes that stall new players

- **Grinding one course for all seven stars before moving on.** Star doors care about the total, not the source. Take the easy stars across four courses instead of the hard star in one.
- **Ignoring 100-coin stars.** You are already collecting coins for health, so on the early courses this is a near-freebie on a mission you were running anyway.
- **Forgetting the mission-select rule.** If you spot the red coins while doing something else, grab them.
- **Not pressing the red switch at 10 stars.** Wing Cap stars sit locked forever otherwise.
- **Fighting the camera instead of using it.** The C-buttons rotate Lakitu around Mario, and R toggles to a fixed Mario cam that is far less likely to swing on you mid-jump on tight ledges.

## N64, 3D All-Stars, and DS are not the same game

Worth knowing before you follow any guide, including this one:

- **Super Mario 64 DS** raises the total to 150 stars, adds Yoshi, Luigi and Wario as playable characters, and changes requirements across the board — the Tower of the Wing Cap needs 14 stars instead of 10, the Bowser in the Dark World door needs 12 stars and Mario specifically, and the endless stairs need 80. It also replaces MIPS the rabbit with a whole rabbit-hunting system. Treat DS numbers as a separate game.
- **Super Mario 3D All-Stars** is the N64 game, so the star counts and door requirements above hold. What it is *not* is the original code: it is based on the Rumble Pak revision, which patched the backwards long jump. If you were planning to speedrun with the classic glitch, that version will not let you.

## Quick Action Checklist

- Enter Bob-omb Battlefield first, remember that mission select changes the level setup but never restricts which star you can take.
- Learn Long Jump (run, Z, A), Wall Kick (A on wall contact) and Ground Pound (Z in air) before anything else.
- Sweep Bob-omb Battlefield and Whomp's Fortress to 8 stars, then open the Big Star Door on the mezzanine.
- Beat Bowser in the Dark World with wide stick rotations, release toward a bomb, take the basement key.
- At exactly 10 stars, stand on the foyer sun mosaic and look up to reach the Tower of the Wing Cap and press the red switch.
- At 12 stars, collect the basement Toad's free star and pop the courtyard Big Boo to open Big Boo's Haunt.
- Grab the second and third Toad stars on the second and third floors as soon as those floors open.
- Run The Princess's Secret Slide twice — once for the finish star, once under 21 seconds for the second.
- Hit 30 stars, open the basement Big Star Door, clear "Board Bowser's Sub" to expose Bowser in the Fire Sea.
- If you are on Super Mario 3D All-Stars the numbers above hold; if you are on DS, they do not.`,
  faq: [
    {
      question: 'How many stars do you need to beat Super Mario 64?',
      answer:
        'You need 70 Power Stars to break the spell on the endless stairs and reach Bowser in the Sky in the N64 original. There are 120 total: 105 across the 15 main courses (seven each) and 15 castle secret stars. Super Mario 64 DS raises the requirement to 80 out of 150.',
    },
    {
      question: 'What star requirements do the castle doors have?',
      answer:
        'On N64: a 1-star door and two 3-star doors on the ground floor, an 8-star Big Star Door for Bowser in the Dark World, a 30-star Big Star Door in the basement for Dire, Dire Docks and Bowser in the Fire Sea, and 70 stars for the endless stairs. The basement and second floor also need keys dropped by the first two Bowser fights.',
    },
    {
      question: 'Do I have to select a mission to get that specific star?',
      answer:
        'No. Mission select determines how the course is set up — whether Koopa the Quick is standing at the entrance, for example — but you can collect any Power Star that exists in the level while you are in it. Grabbing the eight red coins during mission 1 still awards the red coin star.',
    },
    {
      question: 'When can I get the Wing Cap in Super Mario 64?',
      answer:
        'At 10 Power Stars, sunlight shines onto the rug in the middle of the castle foyer. Stand in it, look up, and you are warped to the Tower of the Wing Cap, where pressing the red switch makes every red block in the game solid. In Super Mario 64 DS the requirement is 14 stars.',
    },
    {
      question: 'How do you beat the first Bowser fight?',
      answer:
        'Run behind Bowser, press B to grab his tail, rotate the control stick in wide circles to build spin, and release when he is aimed at one of the four bombs around the arena. One bomb hit ends Bowser in the Dark World; the Fire Sea fight needs two and the floor breaks apart between them.',
    },
  ],
  externalSources: [
    { url: 'https://www.mariowiki.com/Super_Mario_64', title: 'Super Mario 64 — Super Mario Wiki' },
    {
      url: 'https://www.mariowiki.com/Mushroom_Castle_(Super_Mario_64)',
      title: 'Mushroom Castle (Super Mario 64) — Super Mario Wiki',
    },
    { url: 'https://www.mariowiki.com/Bob-omb_Battlefield', title: 'Bob-omb Battlefield — Super Mario Wiki' },
  ],
  tldr:
    'Super Mario 64 gates progress on Power Star totals, not skill: 1-star and 3-star doors on the ground floor, 8 stars for Bowser in the Dark World, 30 for the basement Big Star Door, and 70 for the endless stairs. Sweep Bob-omb Battlefield and Whomp\'s Fortress to 8, press the red Wing Cap switch at exactly 10 stars, and collect the three free Toad stars plus the courtyard Big Boo at 12. All numbers here are for the N64 original and Super Mario 3D All-Stars — the DS remake uses different ones.',
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/super-mario-64', anchor: 'Super Mario 64 coverage hub' },
    {
      href: '/blog/super-mario-64/super-mario-64-movement-guide',
      anchor: 'Super Mario 64 movement guide',
    },
    {
      href: '/blog/super-mario-64/super-mario-64-secret-stars-guide',
      anchor: 'Super Mario 64 secret stars guide',
    },
  ],
};
