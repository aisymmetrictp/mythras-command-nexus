import type { BlogPost } from '../../blogTypes';

export const pubgThrowablesUtilityGuide: BlogPost = {
  slug: 'pubg-throwables-utility-guide',
  game: 'pubg-battlegrounds',
  category: 'advanced-strategy',
  topicCluster: 'pubg-strategy',
  tags: ['throwables', 'grenades', 'smoke', 'molotov', 'utility'],
  title: 'Best PUBG Throwables: Grenades, Smokes & Utility Guide',
  metaDescription:
    'A practical PUBG throwables guide: how to cook frags, run smoke rotations, clear rooms with Molotovs, blind with stuns, and use the map-specific utility items.',
  excerpt:
    "Most players treat throwables as the thing they hold until the bag's full. That's backwards. A cooked frag, a smoke wall, and a well-placed Molotov win more fights than a third AR. Here's how to actually use every PUBG throwable.",
  featuredImagePrompt:
    'A first-person PUBG view of a hand pulling the pin on a frag grenade, mid-cook, with a smoke grenade and Molotov on the gear belt, a contested compound in the background',
  heroImage: '/images/blog/pubg-battlegrounds/pubg-throwables-utility-guide/frag-grenade.webp',
  heroImageAlt:
    "The frag grenade, PUBG's highest-damage throwable — a cooked frag clears cover that bullets can't.",
  imageSources: [
    {
      src: '/images/blog/pubg-battlegrounds/pubg-throwables-utility-guide/frag-grenade.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Frag_Grenade',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-throwables-utility-guide/smoke-grenade.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Smoke_Grenade',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-throwables-utility-guide/molotov.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Molotov_Cocktail',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-throwables-utility-guide/stun-grenade.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Stun_Grenade',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-02T00:00:00.000Z',
  lastUpdated: '2026-06-02T00:00:00.000Z',
  primaryKeyword: 'pubg throwables guide',
  secondaryKeywords: [
    'best pubg throwables',
    'pubg grenade guide',
    'how to cook grenade pubg',
    'pubg smoke grenade rotation',
    'pubg molotov clear room',
    'pubg stun grenade',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'throwables-are-not-pocket-filler', label: 'Throwables are not pocket filler', level: 2 },
    { id: 'the-frag-grenade-cooking-and-arcs', label: 'The frag grenade: cooking and arcs', level: 2 },
    { id: 'smoke-grenades-the-most-underused-item', label: 'Smoke grenades: the most underused item', level: 2 },
    { id: 'molotov-cocktails-area-denial-and-room-clearing', label: 'Molotov cocktails: area denial and room clearing', level: 2 },
    { id: 'stun-grenades-blind-the-room-before-you-enter', label: 'Stun grenades: blind the room before you enter', level: 2 },
    { id: 'the-situational-and-map-specific-throwables', label: 'The situational and map-specific throwables', level: 2 },
    { id: 'utility-items-blue-chips-and-comeback-tools', label: 'Utility items: blue chips and comeback tools', level: 2 },
    { id: 'throwables-ranked-by-value', label: 'Throwables ranked by value', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Most players treat throwables like the stuff they pick up to fill the bag and then forget about until they die holding three frags they never threw. That's the single most common piece of unused free power in PUBG: Battlegrounds. A grenade you cook and land behind a rock kills a guy that bullets physically cannot reach. A smoke wall lets you cross a road four other squads are watching. A Molotov flushes a camper out of the one corner you can't push. These aren't gimmicks — they're the tools that decide compound fights and open rotations, and they're sitting in your inventory doing nothing.

This is a practical guide to every throwable that matters: how the frag cook timer actually works, how to run smoke rotations, when to burn a room with a Molotov, how to blind a building with a stun, and the situational and map-specific throwables worth knowing. PUBG tunes exact damage and timing values over time and locks some throwables to specific maps, so treat the numbers here as ballpark and the *how to use it* as the durable part.

## Throwables are not pocket filler

The reframe that fixes most players' throwable game: **a throwable is a tool for a problem your gun can't solve.** Your rifle is great at "enemy I can see in the open." It's useless against an enemy behind hard cover, a teammate you need to revive in the open, a corner you have to push blind, or a road you have to cross under watch. That's the entire job of throwables, and each one solves a different version of it.

So the question isn't "should I carry grenades?" It's "which problem am I likely to face, and what do I throw at it?" A balanced [loadout](/blog/pubg-battlegrounds/best-pubg-loadouts) for most fights is roughly **two smokes, one or two frags, and a Molotov or stun depending on whether you're attacking buildings.** Smokes first — they're the most useful and the most underused, and we'll get to why. Carry them like ammo, not like souvenirs.

## The frag grenade: cooking and arcs

The frag grenade is the heavy hitter — PUBG's highest-damage throwable, and its blast damage isn't reduced by helmets or vests the way bullets are, which is exactly why it kills people hiding behind cover that's beating your rifle. It's available on every map.

![The frag grenade, PUBG's highest-damage throwable — a cooked frag clears cover that bullets can't, and it ignores helmet and vest protection.](/images/blog/pubg-battlegrounds/pubg-throwables-utility-guide/frag-grenade.webp)

The two skills that make a frag lethal instead of decorative:

- **Cooking.** A frag has roughly a five-second fuse from the moment you pull the pin. If you throw it raw, the enemy hears it land and simply walks away before it goes off — a thrown grenade is a suggestion. **Cooking** means holding the grenade for a couple of seconds after you pull the pin so it detonates shortly after it lands, giving the enemy no time to escape. Hold it too long and it cooks off in your hand and kills you, so the discipline is "pull, count a beat or two, throw" — practice the timing in the range until it's muscle memory, because there's no undo.
- **Arcs and aim modes.** PUBG gives you an overhand throw (long, high arc — for distance and lobbing over walls), an underhand throw (a short, soft toss — for dropping a grenade just over a nearby wall or into a window a few meters away), and a roll (sends it along the ground — for bowling it under a vehicle or into the bottom of a stairwell). Use overhand to reach a far compound, underhand to drop it right behind the wall you're stacked on, and the roll to skip the bounce-back that gets you killed throwing into tight rooms.

Where frags win games: digging an enemy out of hard cover (a frag behind their rock does what your bullets can't), denying a doorway or the top of a staircase, and finishing a knocked enemy whose teammates are trying to revive. The cardinal frag sin is throwing one into a small room you're standing next to — it bounces off the doorframe and lands at your feet. Roll it or underhand it, and never throw blind into a wall a few feet away.

## Smoke grenades: the most underused item

If you take one thing from this guide: **carry smokes and actually use them.** The smoke grenade does no damage and that's why people ignore it, but it's the throwable that wins the most fights by making them not happen. It pops a dense cloud that blocks vision for several seconds, and that simple effect solves an enormous number of problems.

![The smoke grenade — it deals no damage but blocks vision long enough to cross open ground, revive a teammate, or reset a fight you're losing.](/images/blog/pubg-battlegrounds/pubg-throwables-utility-guide/smoke-grenade.webp)

What smoke is actually for:

- **Crossing open ground.** Pop a smoke across the road or field you need to traverse and walk through the cloud instead of sprinting through an open kill lane. The single best use of a smoke is making a dangerous rotation a non-event.
- **[Reviving safely](/blog/pubg-battlegrounds/pubg-reviving-dbno-guide).** Drop a smoke between you and the threat before you pick up a knocked teammate. The revive animation leaves you exposed and unable to shoot; smoke turns a suicidal pickup into a routine one.
- **Resetting a fight you're losing.** When a gunfight goes bad, a smoke wall breaks line of sight so you can disengage, heal, or reposition instead of trading your way to death in the open.
- **Smoke chaining for long crossings.** For a genuinely long open stretch, throw a second smoke before the first fully fades and walk the moving wall across — a smoke rotation that keeps you covered the whole way. This is why you carry two or three, not one.

One honest caveat: smoke blinds you too, and good players will pre-fire or push through a smoke they know you're hiding behind. Smoke buys time and breaks line of sight — it is not an invincibility bubble. Use it to move and reset, not to stand still inside and feel safe.

## Molotov cocktails: area denial and room clearing

The Molotov is your area-denial throwable. It doesn't have a fuse you cook — it breaks on impact and spreads a pool of fire that burns for several seconds, dealing damage over time to anyone standing in it or passing through. Available on every map. Its whole value is **controlling space you can't shoot into.**

![The Molotov cocktail — it breaks on impact and spreads burning fuel, dealing damage over time and denying any space you can't push directly.](/images/blog/pubg-battlegrounds/pubg-throwables-utility-guide/molotov.webp)

Where the Molotov earns its slot:

- **Flushing campers out of corners.** An enemy holding the one corner of a room you can't safely peek? Molotov the corner. The fire forces them to move or burn, and now they're peeking on your terms instead of theirs.
- **Denying a revive.** Throw it on a knocked enemy. Their teammates can't crawl into a fire to pick them up, and the burn finishes the down for you.
- **Blocking a doorway or stairwell.** A wall of fire across the only entrance to your position buys you the time to heal or reposition — nobody's sprinting through flames to push you.
- **Denying ground in the [final circle](/blog/pubg-battlegrounds/pubg-endgame-circle-strategy).** On a tiny endgame play area, a Molotov on the patch of cover an enemy needs forces them out of it and into the open.

The catch: fire on a wooden floor or in dry grass can spread, and it'll burn you just as happily as the enemy. Don't Molotov the room you're about to push *into*, and don't drop one at your own feet to "block" a doorway you're standing in. It's for space you want to deny, not space you want to occupy.

## Stun grenades: blind the room before you enter

The stun grenade (sometimes labeled a flashbang) does no damage. It detonates with a blinding flash and a disorienting ring that whites out the screen and muffles audio for anyone looking near it — for several seconds, which is an eternity in a gunfight. It has a short fuse like a frag, so you can cook it to detonate the instant it lands.

![The stun grenade — it deals no damage but blinds and deafens anyone looking at the flash, the room-clearing partner to the frag.](/images/blog/pubg-battlegrounds/pubg-throwables-utility-guide/stun-grenade.webp)

The classic use is **breaching a building.** Cook a stun, toss it through the door or window of the room you're about to enter, and push in the moment it pops while the defenders are blind and deaf. A stunned enemy can't aim at you and can't hear your footsteps, so you turn a coin-flip room entry into a free one. It's the room-clearing partner to the frag: frag to kill what's behind hard cover, stun to blind what's around the corner you're pushing.

Two warnings. First, it blinds your own team too if they're looking at it, so call "stun out" before you throw and have your squad look away. Second, the stun only works if the enemy is actually facing it — a defender staring at the back wall barely notices. Aim it where they're looking, which is usually the entrance you're about to come through.

## The situational and map-specific throwables

Beyond the four staples, PUBG has throwables that are either niche or locked to certain maps. Knowing they exist matters; building a strategy around them usually doesn't.

- **Decoy grenade.** Detonates into a burst of fake gunfire sounds for several seconds, designed to bait enemies into thinking a fight is happening somewhere it isn't. A genuine mind-game tool for repositioning or drawing a push the wrong way. It appears on a limited set of maps rather than everywhere, so don't plan around finding one.
- **BZ grenade.** A gas-style grenade that creates a lingering cloud causing disorientation and damage over time to anyone inside it — think of it as a longer-lasting area-denial throwable in the stun/gas family. Useful for holding ground or denying a chokepoint over time. Availability varies by map and mode.
- **Sticky bomb.** A breaching tool found on [Karakin](/blog/pubg-battlegrounds/pubg-karakin-map-guide), where the map's destructible walls are a core mechanic. It sticks to a surface and blows a hole in it, letting you breach into compounds from unexpected angles. You can throw it at players in a pinch, but it's a tool for the wall, not the man.
- **C4.** A heavy demolition charge with a long automatic fuse (around sixteen seconds) and a big blast radius that can penetrate cover. It auto-detonates and can't be triggered early, so it's a deliberate area-denial and breaching tool — cut off a building entrance or force a camped squad out of a position — rather than something you frag with mid-fight. It's limited to certain maps.

The honest takeaway: master the four staples (frag, smoke, Molotov, stun) because they're on most maps and they win most fights. Treat the decoy, BZ, sticky bomb, and C4 as bonus tools you use well when the map hands them to you, not as the core of your kit.

## Utility items: blue chips and comeback tools

PUBG's "utility" extends past throwables into the items that bring teammates back and reveal enemies — the stuff that quietly decides squad games. These aren't grenades, but they belong in any honest utility discussion.

- **Blue Chip Transmitter.** On Erangel, Miramar, and Deston, when a teammate dies fully you can collect their Blue Chip from their loot box and activate the transmitter to recall them — they parachute back in during a later zone phase. The activation takes time and makes noise, locking you in place, so use it from a safe position. The recall window closes in the later phases of the match, so don't sit on a dead teammate's chip forever.
- **Blue Chip Detector.** A tactical-slot gadget introduced with Deston that pings nearby enemy positions on a delay (not real-time), and on Deston also detects Blue Chips on the ground, in deathboxes, and in vehicle trunks. It's an information tool — worth running when you find one, because knowing roughly where the enemy is beats walking in blind.
- **[Taego](/blog/pubg-battlegrounds/pubg-taego-map-guide) comeback tools.** Taego has its own system: the self-AED lets a player who's been eliminated come back on their own, and the Comeback BR is a deathmatch round where eliminated players fight for a slot back into the match. These change how aggressively you can spend a knock on that map, because death isn't necessarily final.

The throughline with all of these: utility is information and second chances. Throwables solve the problem in front of you; the blue-chip and comeback tools decide whether a lost teammate stays lost. Both matter more than the third gun you were going to carry.

## Throwables ranked by value

If you're prioritizing what to pick up and carry, here's the order that holds for most players on most maps:

1. **Smoke grenade** — the most useful and most underused; carry two or three.
2. **Frag grenade** — your highest-damage tool, and the only one that beats hard cover and ignores armor.
3. **Stun grenade** — turns a coin-flip room entry into a free one; essential if you push buildings.
4. **Molotov cocktail** — area denial that flushes campers and blocks revives and doorways.
5. **C4** — heavy breaching and area denial where the map offers it.
6. **BZ grenade** — lingering gas-style area denial; situational and map-dependent.
7. **Decoy grenade** — a fun mind-game tool, low priority, map-limited.
8. **Sticky bomb** — Karakin wall-breaching specialist.

## Quick Action Checklist

- [ ] Carry **two to three smokes** and treat them like ammo — they win fights by preventing them
- [ ] **Cook your frags** (pull, count a beat or two, throw) so the enemy can't walk away from them
- [ ] Use the **roll or underhand** throw into tight rooms so the frag doesn't bounce back at you
- [ ] **Smoke the revive** and smoke open rotations; chain a second smoke for long crossings
- [ ] **Molotov** the corner or doorway you can't push to flush campers and deny revives
- [ ] **Stun and breach** — cook a stun into a room and push the instant it pops, after calling "stun out"
- [ ] Don't plan around map-specific throwables (decoy, BZ, sticky bomb, C4) — use them well when you find them
- [ ] Grab a teammate's **Blue Chip** to recall them on Erangel, Miramar, and Deston
- [ ] Run a **Blue Chip Detector** when you find one — delayed enemy intel beats walking in blind`,
  faq: [
    {
      question: 'How do you cook a grenade in PUBG?',
      answer:
        'Cooking means holding the frag grenade for a moment after you pull the pin so it detonates shortly after it lands, instead of giving the enemy time to run away from it. The frag has roughly a five-second fuse, so the technique is "pull, count a beat or two, then throw" — the grenade goes off almost as soon as it reaches the target. The danger is holding it too long: it cooks off in your hand and kills you, with no undo. Practice the timing in the training range until it is muscle memory before you rely on it in a fight.',
    },
    {
      question: 'What is the best throwable in PUBG?',
      answer:
        'The smoke grenade, for most players. It deals no damage, which is why people ignore it, but it wins more fights than any other throwable by making them not happen — you use it to cross open ground, revive teammates safely, reset fights you are losing, and chain a moving wall across long crossings. The frag grenade is the best damage throwable because it ignores helmet and vest protection and kills enemies behind hard cover. A good carry is two or three smokes plus a frag or two, adding a stun or Molotov for building fights.',
    },
    {
      question: 'How do you use smoke grenades in PUBG?',
      answer:
        'Use smoke to break line of sight, not to deal damage. The main jobs are crossing open ground (pop a cloud across the road and walk through it instead of sprinting an open lane), reviving safely (drop smoke between you and the threat before you pick up a downed teammate), and resetting a losing fight (a smoke wall lets you disengage and heal). For long crossings, throw a second smoke before the first fades and walk the moving wall across. Just remember smoke blinds you too and good players will pre-fire through it, so use it to move, not to stand still.',
    },
    {
      question: 'When should you use a Molotov in PUBG?',
      answer:
        'Use the Molotov for area denial — controlling space you cannot shoot into. It breaks on impact and spreads fire that burns for several seconds, so it is ideal for flushing a camper out of a corner you cannot safely peek, denying a revive by burning the spot a knocked enemy is lying in, blocking a doorway or stairwell to buy time, and denying a key piece of cover in a tight final circle. The catch is the fire burns you too and can spread on wood or dry grass, so never Molotov the room you are about to push into.',
    },
    {
      question: 'How do you use a stun grenade in PUBG?',
      answer:
        'Use the stun grenade to breach buildings. Cook it like a frag, toss it through the door or window of the room you are about to enter, and push in the instant it pops while the defenders are blinded and deafened — a stunned enemy cannot aim or hear your footsteps. It does no damage; its whole value is the few seconds of disorientation. Two cautions: it blinds your own teammates if they look at it, so call "stun out" first, and it only works on enemies actually facing the flash, so aim it where they are looking.',
    },
    {
      question: 'Which PUBG throwables are map-specific?',
      answer:
        'The four staples — frag, smoke, stun, and Molotov — are on essentially every map. Several others are limited. The sticky bomb is a Karakin wall-breaching tool. C4 (a long-fuse demolition charge with a big cover-penetrating blast) appears on a subset of maps. The decoy grenade, which fakes gunfire to bait enemies, shows up on a limited map set. The BZ grenade (a lingering gas cloud) varies by map and mode. Utility items also differ: the Blue Chip Transmitter is on Erangel, Miramar, and Deston, the Blue Chip Detector came with Deston, and Taego has the self-AED and Comeback BR.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/pubg-battlegrounds', anchor: 'PUBG: Battlegrounds coverage hub' },
    { href: '/blog/pubg-battlegrounds/pubg-endgame-circle-strategy', anchor: 'PUBG endgame circle strategy' },
    { href: '/blog/pubg-battlegrounds/pubg-squad-strategy', anchor: 'PUBG squad strategy guide' },
    { href: '/blog/pubg-battlegrounds/best-pubg-loadouts', anchor: 'Best PUBG loadouts and attachments' },
    { href: '/blog/pubg-battlegrounds/pubg-beginners-guide', anchor: "PUBG beginner's guide" },
  ],
  externalSources: [
    {
      url: 'https://www.pubg.com/en/game-info/weapons/throwable',
      title: 'PUBG: Battlegrounds — official throwable weapons page',
    },
    {
      url: 'https://pubg.fandom.com/wiki/Throwables',
      title: "Throwables — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
    {
      url: 'https://pubg.fandom.com/wiki/Frag_Grenade',
      title: "Frag Grenade — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
  ],
  tldr:
    'PUBG throwables are tools for problems your gun cannot solve, not pocket filler. Carry two or three smokes (the most useful throwable) to cross open ground, revive safely, and reset fights. Cook your frags so enemies cannot escape them, and use the roll or underhand throw into tight rooms. Molotovs flush campers and deny revives; stuns blind a room so you can breach it. The decoy, BZ grenade, sticky bomb, and C4 are situational and map-specific. Utility items like the Blue Chip Transmitter and Detector decide squad games.',
  itemList: {
    name: 'Best PUBG Throwables, Ranked by Value',
    items: [
      { name: 'Smoke Grenade', description: 'No damage but the most useful throwable — cross open ground, revive safely, and reset fights. Carry two or three.' },
      { name: 'Frag Grenade', description: 'Highest-damage throwable; ignores helmet and vest and kills enemies behind hard cover. Cook it before you throw.' },
      { name: 'Stun Grenade', description: 'Blinds and deafens a room for several seconds — cook it, toss it in, and breach the instant it pops.' },
      { name: 'Molotov Cocktail', description: 'Area denial that flushes campers out of corners, blocks revives and doorways, and denies cover in the final circle.' },
      { name: 'C4', description: 'Heavy breaching and area-denial charge with a long auto fuse and a big cover-penetrating blast. Map-specific.' },
      { name: 'BZ Grenade', description: 'Lingering gas-style cloud that disorients and damages over time. Situational and map-dependent.' },
      { name: 'Decoy Grenade', description: 'Fakes gunfire to bait enemies into pushing the wrong direction. A mind-game tool, low priority, map-limited.' },
      { name: 'Sticky Bomb', description: 'Karakin wall-breaching specialist — sticks to a surface and blows a hole in it for unexpected entry angles.' },
    ],
  },
};
