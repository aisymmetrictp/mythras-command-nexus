import type { BlogPost } from '../../blogTypes';

export const pubgVikendiMapGuide: BlogPost = {
  slug: 'pubg-vikendi-map-guide',
  game: 'pubg-battlegrounds',
  category: 'game-guides',
  topicCluster: 'pubg-maps',
  tags: ['vikendi', 'maps', 'snow', 'snowmobile', 'rotations', 'drops'],
  title: 'PUBG Vikendi Map Guide: Drops, Snow Tracks & Rotations',
  metaDescription:
    'A full PUBG Vikendi guide: the best drops on the 6x6 snow map, the footprints-in-snow tell, the snowmobile, cover, rotations and reading the endgame.',
  excerpt:
    "Vikendi is the snow map everyone either loves or forgets exists. Here's a real guide to the 6x6 — where to drop, how to use (and beat) the footprints-in-snow mechanic, when the snowmobile actually helps, and how to rotate and close out the map that punishes anyone who treats it like Erangel with a white coat of paint.",
  featuredImagePrompt:
    'The Vikendi 6x6 tactical map overview — a snowy Adriatic resort island in the shadow of Mount Kreznic, named towns and landmarks labeled, with a battle-royale flight path drawn across the snow',
  heroImage: '/images/blog/pubg-battlegrounds/pubg-vikendi-map-guide/vikendi-overview.webp',
  heroImageAlt:
    'The Vikendi map overview — PUBG’s 6x6 snow island in the shadow of Mount Kreznic, dense forest around the edges and a snowy mountain core.',
  imageSources: [
    {
      src: '/images/blog/pubg-battlegrounds/pubg-vikendi-map-guide/vikendi-overview.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Vikendi',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-vikendi-map-guide/snowmobile.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Snowmobile',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-vikendi-map-guide/vikendi-terrain.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Vikendi',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-23T00:00:00.000Z',
  lastUpdated: '2026-06-23T00:00:00.000Z',
  primaryKeyword: 'pubg vikendi map guide',
  secondaryKeywords: [
    'vikendi best drop spots',
    'vikendi snow tracks',
    'vikendi snowmobile',
    'vikendi rotations',
    'vikendi cosmodrome castle',
    'best vikendi landing spots',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'the-snow-map-that-keeps-coming-back', label: 'The snow map that keeps coming back', level: 2 },
    { id: 'how-vikendi-is-laid-out', label: 'How Vikendi is laid out', level: 2 },
    { id: 'the-footprints-problem', label: 'The footprints problem', level: 2 },
    { id: 'the-best-drop-spots', label: 'The best drop spots', level: 2 },
    { id: 'the-snowmobile-and-vehicles', label: 'The snowmobile and vehicles', level: 2 },
    { id: 'cover-and-the-rotation-game', label: 'Cover and the rotation game', level: 2 },
    { id: 'reading-the-vikendi-endgame', label: 'Reading the Vikendi endgame', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Vikendi is the map PUBG keeps un-shelving. It launched on PC in December 2018 as the fourth map, got pulled, got reworked, came back, got reworked again — and every time it returns, half the playerbase remembers it's actually great and the other half drops Cosmodrome, dies in ninety seconds, and goes back to queuing Erangel. The snow map isn't a gimmick. It's a 6x6 with a mechanic no other map has, and if you learn that mechanic instead of fighting it, Vikendi rewards you harder than any of the medium maps.

This is the island that leaves footprints. Vikendi is a snowy Adriatic resort in the shadow of Mount Kreznic, dense forest around the rim, open snowfields and a frozen mountain core in the middle — and the fresh snow records where everyone's been. Most players never think about that. The ones who do are reading the lobby's movement like a tracker reading a deer trail. Here's the actual guide: the layout, the snow tells, the drops worth taking, when the snowmobile saves you, and how to close out a map that quietly punishes lazy positioning.

![The Vikendi map overview — PUBG's 6x6 snow island in the shadow of Mount Kreznic, dense forest around the edges and a snowy mountain core.](/images/blog/pubg-battlegrounds/pubg-vikendi-map-guide/vikendi-overview.webp)

## The snow map that keeps coming back

Vikendi is a 6x6 — bigger than the 4x4s like [Sanhok](/blog/pubg-battlegrounds/pubg-sanhok-map-guide), smaller than the 8x8 Erangel and Miramar. That size is the whole personality of the map. It's big enough that you get real loot time and a proper rotation game, but small enough that fights find you faster than they do on the big maps. The pacing sits right in the middle, which is exactly why it's such a comfortable map once you stop playing it wrong.

The biggest Vikendi mistake is treating it like "Erangel but white." It isn't. The cover distribution is different, the snow narrates your movement, and the vehicles include a snow-specific ride that changes how edge drops work. Players who carry their [Erangel](/blog/pubg-battlegrounds/pubg-erangel-map-guide) habits straight over — sprint the open snowfields, ignore their own tracks, treat the mountain like a hill — get picked apart by anyone who's actually adapted to the terrain.

One note up front, because Vikendi is the most patch-variable map in PUBG: which maps are in the public queue, and which version of Vikendi is live, changes with the season. The map has been reworked more than once, so specific loot densities and exact POI layouts can shift between updates. The fundamentals below — size, the snow tell, the snowmobile, the cover logic, the rotation math — hold across versions. Always check the live map rotation and the current map in-game before you assume anything.

## How Vikendi is laid out

Picture a roughly 6 km island with a clear structure: dense forest wrapping the coast, snowfields and frozen water through the interior, and **Mount Kreznic dominating the central area** as the big terrain feature. The map's identity is Northern-resort-island — attractions and businesses scattered across the snow rather than a few big anonymous cities.

The named locations worth knowing:

| POI | Where | What it is |
| --- | --- | --- |
| Cosmodrome | North-center | A space-launch complex, huge open buildings, big loot, big fights |
| Castle | Center | A hilltop fortress — strong loot, commanding position, contested |
| Dino Park | Northeast | A prehistoric theme park, distinctive landmark, decent loot |
| Cement Factory | West | Industrial complex, dense vertical CQC loot |
| Goroka | Center-east | A major town, solid loot, central rotations |
| Dobro Mesto | North | A major town with good loot density |
| Volnova | East | A large town, one of the bigger gear stops |
| Podvosto | South | A major town toward the lower map |
| Winery / Villa / Hot Springs | Scattered | Attraction landmarks with pockets of good loot |
| Mount Kreznic | Dead center | The mountain — high ground, exposed, a rotation obstacle |

Between those sit the minor villages (Abbey, Cantra, Krichas, Trevno, Vihar and friends) that make perfectly good quiet loot stops, plus a hidden **Cave** for the people who like surprises. The mental model: **landmark "attraction" POIs for high loot and fights, the towns for reliable gear, and the mountain and snowfields as terrain you route around — not through.**

## The footprints problem

Here's the mechanic that makes Vikendi Vikendi: **fresh snow records footprints — yours and everyone else's.** The official line on the map is that the hunter becomes the hunted, and that's not marketing fluff. On a snowfield, you can see the trail a player left, and you can read which direction they went and roughly how recently.

That cuts both ways, and elite Vikendi play is about controlling which side of it you're on:

- **Read enemy tracks like a callout.** A fresh set of prints crossing a snowfield tells you a team came through, where they're headed, and that they're probably close. Before you cross open snow, scan it — a trail leading into the building you were about to push is a free heads-up that someone's home.
- **Hide your own trail.** Tracks on bare ground, road, or rock don't show the way they do on fresh snow. When you're rotating through contested ground, route along roads, rock, and hard surfaces instead of stamping a neon arrow across a white field that points straight at your position.
- **Don't get tunnel-visioned reading old prints.** Tracks fade and the snow gets churned up in busy areas. In a hot landmark with twenty players, the snow is a mess and tells you nothing. The tell is most useful in the quieter mid-game, on clean fields, when one fresh trail stands out.

The practical upshot: Vikendi rewards players who *think about the ground they're walking on* the way good players think about sound on every other map. Treat your footprints as information you're either leaking or denying.

## The best drop spots

Vikendi's drops split the usual way — land hot for fights and top loot, land quiet to gear up and rotate. Because it's a 6x6, even the "safe" spots aren't as safe as Erangel's far corners; the lobby is closer together.

**Cosmodrome** is the marquee hot drop. The space-launch complex has some of the best loot on the map crammed into big open structures, which means it's a magnet — expect a crowd and a brawl. Land here for action and a fast full kit, with the same caveat as any hot drop: get a gun first, clear methodically, and don't sprint into the open middle of the complex where three teams can see you.

**Castle** is the other premium contest. It's a hilltop fortress with strong loot *and* a commanding position, so it draws teams who want both gear and high ground. Win the Castle and you're geared and elevated; lose the drop and you're dead on a staircase. It's a confident-squad drop, not a safe one.

**Cement Factory** is the vertical CQC option — an industrial complex with dense loot and lots of tight angles. If you trust your close-range gunfighting, it kits you fast. **Dino Park** is the loot-and-landmark middle ground: distinctive, decent gear, usually a bit less brutal than Cosmodrome.

For gearing up with less heat, the **major towns carry the map**: **Volnova** in the east and **Dobro Mesto** in the north are big enough to fully kit a squad, **Goroka** sits central for flexible rotations, and **Podvosto** in the south is a solid lower-map option. The minor villages (Abbey, Cantra, Trevno and the rest) are the quietest loot of all — you'll rarely be contested, but you pay with a longer rotation across snow. Great for a methodical squad with a vehicle, riskier for a solo who draws a bad circle.

## The snowmobile and vehicles

![The Furo Snowmobile — Vikendi's snow-specific two-seat vehicle that outperforms everything else on snow and ice.](/images/blog/pubg-battlegrounds/pubg-vikendi-map-guide/snowmobile.webp)

Vikendi has a vehicle no other map does: the **[Furo Snowmobile](/blog/pubg-battlegrounds/best-pubg-vehicles)**, a two-seat ride built for exactly this terrain. It performs much better than any other vehicle on snow and ice, where normal cars slide and struggle — and it's correspondingly worse on regular roads and hard ground. (There's also a one-seat Snowbike with the same snow-terrain bias for the solo player who wants speed.)

The vehicle rules for Vikendi specifically:

- **The snowmobile is the snowfield specialist.** When your rotation crosses open snow or frozen water — which on this map is often — the snowmobile gets you there with the grip and acceleration a car won't. It's the ideal "I need out of the zone *now*" ride across the white stuff.
- **Cars still own the roads.** Vikendi has the standard vehicle roster too, and on the road network the four-seaters are faster and tankier. Match the ride to the ground: snowmobile for snow and ice, car for roads.
- **Vehicles are loud, and you leave tracks in the snow even in a vehicle.** Park in cover near the circle, kill the engine, and finish on foot. A running engine on a quiet snow map is a beacon, and a vehicle trail across a clean field is the same tell your footprints are.

The snowmobile is the single most map-specific decision on Vikendi. Knowing when to grab it — edge drop, snow-heavy rotation, late blue forcing you across the interior — is part of playing the map well rather than just driving whatever you trip over.

## Cover and the rotation game

Cover on Vikendi is feast-or-famine in a different shape than Erangel. The forested rim is thick — trees and terrain give you genuine concealment near the coast — but the interior snowfields and the area around Mount Kreznic are brutally open. The mountain in the center isn't a shortcut; it's a giant exposed obstacle that you mostly route *around*, not over, unless you specifically want the high ground and can survive the climb.

![Vikendi's terrain — dense forest along the rim giving way to open snowfields and the frozen mountain core, where cover goes from plentiful to almost none.](/images/blog/pubg-battlegrounds/pubg-vikendi-map-guide/vikendi-terrain.webp)

Rotation principles that win on the snow map:

- **Tree line to tree line, not field to field.** The forest is your friend. Hug the wooded edges and use the trees as moving cover; the open snowfields are where you get sniped, *and* where you stamp a trail that advertises your route.
- **Treat the mountain as a wall.** Mount Kreznic eats time and exposes you. Plan routes that skirt it unless holding its high ground is the actual play for the circle you've been handed.
- **Use the 6x6 pacing.** Because the map is mid-sized, you usually don't need to floor it across the whole island the way you do on an 8x8 — but you also can't dawdle the way a 4x4 lets you. Pick your circle line early, grab the right vehicle for the terrain in between, and move with purpose.
- **Mind the weather.** Vikendi's lighting runs day, moonlight and snow — visibility and how much your tracks pop against the ground shift with it. Don't assume the map looks the same every match.

## Reading the Vikendi endgame

Vikendi endgames reward the same discipline as the big maps, with a snow-specific wrinkle: **the ground is telling everyone where you are.** Late circles on a 6x6 close faster than Erangel's, so positioning beats roaming hard in the final phases.

What to look for as the circle shrinks:

- **Hold cover, not open snow.** The last thing you want in a final circle is to be the team caught crossing a white field while everyone else is tucked into a tree line, a building, or a rock cluster. Get to cover *early*, before the zone forces a panicked sprint that leaves a trail straight to you.
- **Watch the tracks in the final fields.** In a small final circle, fresh prints are gold — they show you exactly where the last teams repositioned. Read them, then push or hold accordingly.
- **High ground if you can take it cleanly.** Vikendi's hills and the elevated landmarks give strong final-circle positions, but the climb is exposed. Take elevation only if you can do it without stamping a trail across open snow into a sniper's scope.
- **Don't over-rely on vehicles in the last circles.** A snowmobile is great for getting *to* the endgame, but a running engine in a tiny final zone is a death sentence. Park early, finish on foot, let the cover do the work.

If you want the broader zone-reading framework that applies to every map, our [PUBG endgame circle strategy](/blog/pubg-battlegrounds/pubg-endgame-circle-strategy) goes deeper on circle prediction and final-circle positioning. Vikendi just adds one extra question on top of all of it: *what is the ground saying about where everyone's been?*

## Quick Action Checklist

- [ ] Play Vikendi as a 6x6 — real loot time, a proper rotation game, faster fights than the 8x8s
- [ ] Read enemy footprints in fresh snow like callouts, and route on roads/rock to hide your own
- [ ] Drop **Cosmodrome, Castle, or Cement Factory** for fights and top loot; **Volnova, Dobro Mesto, Goroka, or Podvosto** to gear up
- [ ] Grab the **snowmobile** for snow-and-ice rotations; use cars on roads; park in cover and kill the engine before the fight
- [ ] Rotate tree line to tree line — the forested rim is cover, the snowfields and Mount Kreznic are exposed
- [ ] Treat the central mountain as a wall to route around, not a shortcut
- [ ] In the endgame, get to cover early so you're not crossing open snow and leaving a trail when the circle closes
- [ ] Check the live map rotation and which Vikendi version is current in-game before you queue — it's the most patch-variable map in PUBG`,
  faq: [
    {
      question: 'What is the best drop spot on Vikendi?',
      answer:
        'It depends on your goal. For fights and top loot, Cosmodrome (the space-launch complex) is the marquee hot drop, with Castle (a hilltop fortress with loot plus high ground) and Cement Factory (vertical close-range loot) close behind. For gearing up with less heat, the major towns carry the map: Volnova in the east and Dobro Mesto in the north can fully kit a squad, Goroka sits central for flexible rotations, and Podvosto covers the south. The minor villages like Abbey, Cantra and Trevno are the quietest loot of all, at the cost of a longer rotation across snow.',
    },
    {
      question: 'How does the snow tracks mechanic work on Vikendi?',
      answer:
        'Fresh snow on Vikendi records footprints — yours and everyone else\'s. A trail across a snowfield shows that a team came through, roughly where they went, and that they may be close. You can use that to read enemy movement like a callout, but it works against you too: walking across clean snow stamps an arrow pointing at your position. The counter is to route along roads, rock, and hard surfaces where tracks don\'t show the same way. The tell is most useful in the quieter mid-game on clean fields; in a crowded hot landmark the snow is churned up and tells you little.',
    },
    {
      question: 'When should I use the snowmobile on Vikendi?',
      answer:
        'The Furo Snowmobile is a two-seat vehicle exclusive to Vikendi that performs much better than any other vehicle on snow and ice, but worse on regular roads. Use it when your rotation crosses open snow or frozen water — which on this map is often — especially when you need to escape the blue zone fast across the interior. On the road network, standard four-seat cars are faster and tankier, so match the ride to the ground. Whatever you drive, park in cover near the circle and kill the engine before the fight, because a running engine is loud and a vehicle leaves a trail in the snow just like your feet do.',
    },
    {
      question: 'How do you rotate on Vikendi?',
      answer:
        'Rotate tree line to tree line, not field to field. The forested rim of the island gives genuine cover, while the interior snowfields and the area around Mount Kreznic are brutally open — and crossing open snow both exposes you and stamps a trail that advertises your route. Treat the central mountain as a wall to route around rather than a shortcut. Because Vikendi is a mid-sized 6x6, pick your circle line early, grab the snowmobile for snow-heavy stretches or a car for roads, and move with purpose without flooring it the way an 8x8 demands.',
    },
    {
      question: 'Is Vikendi a good map in PUBG?',
      answer:
        'Yes, once you stop playing it like Erangel with a white coat of paint. Vikendi is a 6x6 that sits between the frantic 4x4s and the slow 8x8s, giving you real loot time and a proper rotation game with faster fights than the big maps. Its footprints-in-snow mechanic is unique in PUBG and rewards players who think about the ground they walk on, and the snowmobile adds a map-specific layer to rotations. The catch is that Vikendi is the most patch-variable map in the game — it has been reworked more than once and its availability in the queue rotates by season — so always check the live map rotation in-game.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/pubg-battlegrounds', anchor: 'PUBG: Battlegrounds coverage hub' },
    { href: '/blog/pubg-battlegrounds/best-pubg-maps-ranked', anchor: 'Best PUBG maps, ranked' },
    { href: '/blog/pubg-battlegrounds/pubg-erangel-map-guide', anchor: 'PUBG Erangel map guide' },
    { href: '/blog/pubg-battlegrounds/pubg-sanhok-map-guide', anchor: 'PUBG Sanhok map guide' },
    { href: '/blog/pubg-battlegrounds/best-pubg-vehicles', anchor: 'Best PUBG vehicles, ranked' },
    { href: '/blog/pubg-battlegrounds/pubg-endgame-circle-strategy', anchor: 'PUBG endgame circle strategy' },
  ],
  externalSources: [
    {
      url: 'https://www.pubg.com/en/game-info/maps',
      title: 'PUBG: Battlegrounds — official maps page',
    },
    {
      url: 'https://pubg.fandom.com/wiki/Vikendi',
      title: "Vikendi — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
    {
      url: 'https://pubg.fandom.com/wiki/Snowmobile',
      title: "Snowmobile — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
  ],
  tldr:
    'Vikendi is PUBG’s 6x6 snow map — bigger than Sanhok, smaller than Erangel, with a footprints-in-snow mechanic no other map has. Read enemy tracks like callouts and hide your own by routing on roads and rock. Drop Cosmodrome, Castle, or Cement Factory for fights, or the major towns (Volnova, Dobro Mesto, Goroka, Podvosto) to gear up safely. Grab the Vikendi-exclusive snowmobile for snow-and-ice rotations and cars for roads. Rotate tree line to tree line, treat Mount Kreznic as a wall, and in the endgame get to cover early so you’re not leaving a trail across open snow. It’s the most patch-variable map in PUBG, so check the live rotation in-game.',
};
