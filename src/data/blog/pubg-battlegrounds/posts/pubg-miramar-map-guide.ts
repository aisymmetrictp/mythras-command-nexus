import type { BlogPost } from '../../blogTypes';

export const pubgMiramarMapGuide: BlogPost = {
  slug: 'pubg-miramar-map-guide',
  game: 'pubg-battlegrounds',
  category: 'game-guides',
  topicCluster: 'pubg-maps',
  tags: ['miramar', 'maps', 'drops', 'rotations', 'desert'],
  title: 'PUBG Miramar Map Guide: Drops, Rotations & Endgame',
  metaDescription:
    'A full PUBG Miramar guide: best hot and safe drops, the open-desert sightline problem, vehicle and mountain rotations, and reading the 8x8 endgame.',
  excerpt:
    "Miramar is the map most players claim to hate and almost none play correctly. Here's a real guide to PUBG's 8x8 desert — where to drop, why the open terrain keeps killing you, how to rotate through the canyons, and how to win the endgame on the cover-starved map.",
  featuredImagePrompt:
    'The full Miramar 8x8 tactical map overview, a sun-baked Mexican desert split by canyons and mountains, named cities labeled, with a battle-royale flight path drawn across it',
  heroImage: '/images/blog/pubg-battlegrounds/pubg-miramar-map-guide/miramar-overview.webp',
  heroImageAlt:
    "The full Miramar overview map — PUBG's 8x8 desert, a city-centric Mexican landscape cut by canyons and mountains, with named cities and the southeastern prison island labeled.",
  imageSources: [
    {
      src: '/images/blog/pubg-battlegrounds/pubg-miramar-map-guide/miramar-overview.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Miramar',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-miramar-map-guide/miramar-desert.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Miramar',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-miramar-map-guide/miramar-city.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Miramar',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-miramar-map-guide/miramar-terrain.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Miramar',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-22T00:00:00.000Z',
  lastUpdated: '2026-06-22T00:00:00.000Z',
  primaryKeyword: 'pubg miramar map guide',
  secondaryKeywords: [
    'miramar best drop spots',
    'miramar hot drops',
    'miramar rotations',
    'best miramar landing spots',
    'pubg desert map guide',
    'miramar hacienda del patron',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'the-map-everyone-says-they-hate', label: 'The map everyone says they hate', level: 2 },
    { id: 'how-miramar-is-laid-out', label: 'How Miramar is laid out', level: 2 },
    { id: 'the-hot-drops', label: 'The hot drops', level: 2 },
    { id: 'the-safe-loot-drops', label: 'The safe loot drops', level: 2 },
    { id: 'the-open-terrain-problem', label: 'The open-terrain problem', level: 2 },
    { id: 'rotations-canyons-and-mountains', label: 'Rotations, canyons, and mountains', level: 2 },
    { id: 'vehicles-are-not-optional-here', label: 'Vehicles are not optional here', level: 2 },
    { id: 'reading-the-endgame-terrain', label: 'Reading the endgame terrain', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Ask a random lobby what the worst map in PUBG is and half of them will say Miramar before you finish the question. It's the desert map people queue-dodge, the one that "ruins the rotation," the one where you supposedly get sniped from across the county before you ever see a fight. And almost all of that reputation comes from players treating Miramar exactly like Erangel and then acting surprised when the open desert eats them alive.

Miramar isn't Erangel with a beige reskin. It's PUBG's 8x8 desert — a city-centric Mexican map of dense towns wedged between brutal open plains, hard canyons, and mountains that wall off whole sections of the island. The cover rules are different, the rotations are different, and the endgame rewards a completely different kind of patience. Learn it on its own terms and Miramar goes from "the map I dodge" to one of the most satisfying, skill-expressive maps in the game. Here's the actual guide: the layout, the drops worth taking, why the terrain keeps killing you, and how to read the endgame on the cover-starved 8x8.

![The full Miramar overview map — PUBG's 8x8 desert, a city-centric Mexican landscape cut by canyons and mountains, with the southeastern prison island below.](/images/blog/pubg-battlegrounds/pubg-miramar-map-guide/miramar-overview.webp)

## The map everyone says they hate

The core Miramar complaint is "you get sniped from nowhere." That's not a map flaw — it's a player flaw. Miramar is built around long sightlines and feast-or-famine cover, so the open desert plain between towns is genuinely lethal if you wander into it without a plan. The players who hate the map are the ones who sprint across open ground the same way they would on Erangel's fields, except Miramar's "fields" are wider, flatter, and ringed by elevation that hands snipers a buffet.

Play it correctly and the long sightlines work *for* you. Miramar rewards the team that loots up, owns a piece of high ground, and forces everyone else to cross the open ground first. The terrain that punishes the impatient is the same terrain that hands the patient team free kills. Once that clicks, the map stops feeling unfair and starts feeling like the most positional map in PUBG — where *where you stand* matters more than how fast you can flick.

## How Miramar is laid out

Miramar is an 8x8 km map, the same footprint as Erangel, but the layout could not be more different. It's a city-centric desert based in Mexico, with dense urban areas sitting in pockets of harsh, open terrain. The whole island is cut off from the west and north-east by enormous canyons and mountains, with a wall to the north, and there's a separate island to the southeast that's home to the **Prison** and smaller villages. That geography — towns as cover-islands inside a sea of open desert — is the entire personality of the map.

The named locations you actually need to know:

| POI | Where | What it is |
| --- | --- | --- |
| Los Leones | South | The biggest city on the map — sprawling, multi-block, top loot |
| Pecado | Center | The iconic hot drop — boxing arena plus casino, dead-center |
| Hacienda del Patrón | North-center | A compact hilltop estate landmark with dense, rich loot |
| San Martin | Central-west | Large town with strong loot, central enough to fight over |
| El Pozo | West | Big town with an arena, solid loot, frequent traffic |
| Chumacera | Southwest | Mid-size town, often quieter |
| La Cobreria | North-center | Mid-size town near the map's middle |
| Valle del Mar | East coast | Coastal town, more out of the way |
| Monte Nuevo | Northwest | Town tucked toward the western canyons |
| Prison | Southeast island | Smaller, committal spot on its own island |

Everything between those is open desert, rocky hills, dry riverbeds, and the occasional cluster of villas. The mental model: **dense loot-towns scattered like islands across an open, elevated desert, with canyons and mountains forcing your rotations through predictable gaps.**

## The hot drops

Want fights immediately? These are where a big slice of the lobby commits and the early game turns into a brawl.

![A dense urban block in Miramar — the multi-story buildings and tight streets where the map's close-range fights actually happen.](/images/blog/pubg-battlegrounds/pubg-miramar-map-guide/miramar-city.webp)

**Pecado** is Miramar's signature hot drop. It sits near the center of the map, so it's reachable from most flight paths, and it packs a boxing arena and a casino into a tight footprint — exactly the kind of multi-level CQC playground that produces frantic early fights. Drop here to get your reps in close range. Land on a roof or an edge building, grab a gun before anything else, and clear methodically instead of sprinting into the middle and getting third-partied.

**Los Leones** is the biggest city on Miramar, down in the south, and it can absolutely run hot. The loot is excellent and there's enough of it to kit multiple squads, but it's *huge* — you can land on one edge and gear up in relative calm while the fights cluster elsewhere, or you can dive the dense core and brawl. It's the closest thing Miramar has to a "drop hot or drop safe, your call" city.

**Hacienda del Patrón** is the high-value gamble. It's a compact estate built on a hill with dense, rich loot crammed into a small area, which means everyone who drops it lands on top of each other. Win the early scrap and you walk out kitted with a commanding hilltop position; lose the coin flip and you're dead in ninety seconds. Take it when you trust your aim and want max gear fast.

## The safe loot drops

If your goal is placement and RP rather than a highlight clip, you want to land alive, gear up, and be set before the first circle. These spots get you geared without the whole lobby on your head.

**San Martin** in the central-west is one of the most useful drops on the map — a large town with strong loot that's central enough to matter but rarely as packed as Pecado. Gear up fully here and you can rotate almost anywhere.

**El Pozo** on the west side is a big town with its own arena and solid loot. It draws some traffic but it's roomy enough that you can often loot a section in peace before deciding whether to fight or roll out.

**Chumacera, La Cobreria, Valle del Mar, and Monte Nuevo** are the quieter options. Chumacera in the southwest and Valle del Mar on the east coast in particular tend to be lower-traffic — you'll usually gear up uncontested or against just one team. The trade is a longer, more exposed desert rotation toward the center, so only take the edge towns if you've got a vehicle lined up or an early circle that's already kind to you.

## The open-terrain problem

![The open Miramar desert — flat, exposed ground broken only by scattered rocks and rolling hills, the terrain that punishes anyone caught crossing it.](/images/blog/pubg-battlegrounds/pubg-miramar-map-guide/miramar-desert.webp)

Here's the thing the haters are actually mad about, stated honestly: **Miramar's open desert is a kill zone, and there's a lot of it.** The plains between towns are wide, flat, and overlooked by hills and rocky outcrops, so crossing them in the open mid-game is how you die to someone you never saw. This is real. It's also completely manageable once you stop pretending it isn't there.

The fixes:

- **Plan rock to rock, not town to town.** Miramar's cover is the scattered boulders, ridgelines, and dry creek beds. Route your movement through them deliberately. The straight-line sprint across the flat is the single most common Miramar death.
- **Carry the optics for the map.** This is a long-range map — a 4x or 6x and a [DMR](/blog/pubg-battlegrounds/best-pubg-dmrs) or AR earn their slot far more here than on Sanhok. If you're going to get shot at from distance, you want to be able to shoot back.
- **Use smoke like it's mandatory, because it is.** When you *have* to cross open ground and there's no rock to chain to, a [smoke grenade](/blog/pubg-battlegrounds/pubg-throwables-utility-guide) is the difference between a rotation and a funeral. Pop it, cross behind it, don't admire the view.
- **Don't be the highest contrast thing on the hill.** Skyline yourself on a bare ridge and you're a black silhouette against the desert sky to every scope in range. Stay below crests, move along the slope, not over the top.

## Rotations, canyons, and mountains

Miramar's terrain doesn't just expose you — it funnels you. The enormous canyons and mountains that wall off the west and north-east mean you can't just beeline to the circle; you're pushed through valleys, passes, and a handful of usable roads. Smart teams know where those gaps are and watch them, which makes Miramar rotations a genuine puzzle rather than a straight drive.

The rotation rules that matter here:

1. **Commit to the circle early.** Because the terrain channels movement, being late on Miramar is far worse than being late on Erangel — you can get pinched in a canyon with no side exits. Read the first circle and start moving before everyone else is forced through the same gap.
2. **Respect elevation over distance.** The shortest path to the circle is often a high, exposed ridge; the safe path is the longer one through low ground and cover. Take the longer, lower route more often than your instincts want.
3. **The southeastern prison island is a trap if the circle leaves.** The Prison and its little island are committal in the same way Erangel's military base is — great if the zone stays, brutal if it pulls inland and you have to cross back over open ground. Drop there only with an early circle read or a vehicle staged to leave.

## Vehicles are not optional here

On a map this open and this big, a [vehicle](/blog/pubg-battlegrounds/best-pubg-vehicles) isn't a convenience — it's survival gear. Miramar spawns the usual desert-friendly roster, and crucially it has more vehicle spawns built into its rural sprawl than the green maps, because the developers know you can't foot-rotate this terrain.

The Miramar vehicle rules:

- **Grab one immediately on any edge drop.** Chumacera, Valle del Mar, Monte Nuevo, the prison island — all of them have a brutal walk to the center. A vehicle turns a deadly desert march into a quick, low-exposure drive.
- **Use the vehicle as mobile cover, then ditch it.** On open ground a moving car is sometimes the only cover you've got, but a parked car with the engine running near the final circles is a beacon. Drive to cover *near* the zone, kill the engine, finish on foot.
- **Mind the rollover terrain.** Miramar's hills and dunes will flip a fast vehicle that crests them wrong, and a flipped car in the open desert is a death sentence. Take the slopes at an angle, not straight up and over at full speed.

## Reading the endgame terrain

Miramar endgames are won by the team that solved the cover problem *before* the final circles, not during them. Late zones here often pull onto open or semi-open ground broken up by rocks, low walls, and the edges of towns, which means the winning position is almost always **a piece of high ground or hard cover with eyes on the open approaches.**

What to look for as the circle closes:

- **Claim cover and elevation early.** The good final-circle positions on Miramar are scarce — the rocks, the compound walls, the hilltops. Get to one before the zone forces a scramble, because there isn't enough cover for everyone and the teams left in the open lose.
- **Make the desert do your work.** If you hold covered high ground and the circle forces other teams to cross open desert to reach you, you're holding the best hand on the map. Patience plus elevation plus the open ground as a kill-box is the whole Miramar endgame.
- **Keep your long optics on.** Final circles can stay open enough that a 4x or 6x still matters at the death, unlike the close-quarters scrambles you get on small maps. Don't swap to a red dot just because the circle is shrinking.
- **Watch the rocks, not the buildings.** Late Miramar zones often leave the towns behind, so the rocks and folds in the terrain become your cover and theirs. The team still thinking "I need a building" gets caught in the open when the circle settles on bare desert.

If you want the broader zone-reading framework that applies to every map, our [PUBG endgame circle strategy](/blog/pubg-battlegrounds/pubg-endgame-circle-strategy) goes deeper on circle prediction and final-circle positioning. Miramar is just the map where solving cover early pays the biggest dividend.

## Quick Action Checklist

- [ ] Stop playing Miramar like Erangel — the open desert punishes the field-sprint habit hardest
- [ ] Drop **Pecado** or **Hacienda del Patrón** for fights; **San Martin, El Pozo, or Chumacera** to gear up safely; **Los Leones** plays either way
- [ ] Carry long optics (4x/6x) and a DMR or AR — this is a long-range map
- [ ] Route rock to rock and ridge to ridge; smoke any open crossing you can't chain cover across
- [ ] Commit to the circle early — the canyons funnel rotations and being late gets you pinched
- [ ] Grab a vehicle on every edge drop, use it as mobile cover, then kill the engine near the zone
- [ ] Only take the **Prison** island with an early circle read or a staged vehicle to leave
- [ ] In the endgame, claim covered high ground early and let the open desert funnel enemies into your scope`,
  faq: [
    {
      question: 'What is the best drop spot on Miramar?',
      answer:
        'It depends on your goal. For fights and aim practice, Pecado (dead-center, with a boxing arena and casino) and Hacienda del Patrón (a dense hilltop estate) are the classic hot drops. For gearing up safely with strong loot and less competition, San Martin in the central-west and El Pozo on the west are excellent, with Chumacera, Valle del Mar, and Monte Nuevo as quieter edge options. Los Leones in the south is the biggest city on the map and plays either way — dive the core for fights or land on an edge to gear up in calm. The southeastern prison island has good loot but is committal, like Erangel\'s military base.',
    },
    {
      question: 'Why does everyone hate the Miramar map?',
      answer:
        'The complaint is "you get sniped from nowhere," and it comes from players treating Miramar like Erangel. Miramar is an 8x8 desert built around long sightlines and feast-or-famine cover, so the wide open plains between towns are genuinely lethal if you sprint across them without a plan. The fix is to stop playing the open ground carelessly: route rock to rock and ridge to ridge, carry long optics so you can shoot back, smoke any crossing you cannot chain cover across, and let the long sightlines work for you by holding high ground and forcing enemies to cross the open first. Played correctly, the terrain that punishes the impatient hands free kills to the patient.',
    },
    {
      question: 'How do you rotate on Miramar?',
      answer:
        'Miramar\'s canyons and mountains wall off the west and north-east, so rotations are funneled through valleys, passes, and a few usable roads rather than straight lines. Commit to the circle early because being late can get you pinched in a canyon with no side exits, prioritize low, covered routes over the shortest high-and-exposed path, and treat the southeastern prison island as a trap if the circle pulls inland. A vehicle is close to mandatory because the open desert makes foot rotations slow and deadly, and the map spawns plenty of them across its rural sprawl.',
    },
    {
      question: 'What loadout is best for Miramar?',
      answer:
        'Miramar is a long-range map, so lean into optics and range. A 4x or 6x scope earns its slot far more here than on a small jungle map, and pairing an assault rifle with a DMR (or a sniper from a care package) lets you trade at the distances the desert forces. Always carry smoke grenades — they are effectively mandatory for crossing open ground when there is no rock to chain to. You still want a close-range option for the dense city fights in Pecado or Los Leones, but the defining Miramar kit is built to win the long sightlines, not lose them.',
    },
    {
      question: 'Is Hacienda del Patrón a good drop on Miramar?',
      answer:
        'Hacienda del Patrón is a high-value gamble. It is a compact estate on a hill with dense, rich loot packed into a small area, which means everyone who drops it lands on top of each other for a frantic early scrap. Win that fight and you walk out fully kitted with a commanding hilltop position that is excellent for the rest of the game. Lose the coin flip and you are dead in the first ninety seconds. Take it when you trust your aim and want maximum gear fast; pick San Martin or Los Leones instead if you would rather gear up with breathing room.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/pubg-battlegrounds', anchor: 'PUBG: Battlegrounds coverage hub' },
    { href: '/blog/pubg-battlegrounds/pubg-erangel-map-guide', anchor: 'PUBG Erangel map guide' },
    { href: '/blog/pubg-battlegrounds/best-pubg-maps-ranked', anchor: 'Best PUBG maps, ranked' },
    { href: '/blog/pubg-battlegrounds/best-pubg-landing-spots', anchor: 'Best PUBG landing spots' },
    { href: '/blog/pubg-battlegrounds/pubg-endgame-circle-strategy', anchor: 'PUBG endgame circle strategy' },
    { href: '/blog/pubg-battlegrounds/best-pubg-vehicles', anchor: 'Best PUBG vehicles, ranked' },
  ],
  externalSources: [
    {
      url: 'https://www.pubg.com/en/game-info/maps',
      title: 'PUBG: Battlegrounds — official maps page',
    },
    {
      url: 'https://pubg.fandom.com/wiki/Miramar',
      title: "Miramar — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
    {
      url: 'https://pubg.fandom.com/wiki/Maps',
      title: "Maps — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
  ],
  tldr:
    "Miramar is PUBG's 8x8 desert and the map people wrongly hate because they play it like Erangel. Drop Pecado or Hacienda del Patrón for fights, or San Martin, El Pozo, and Chumacera to gear up safely; Los Leones plays either way. The open desert between towns is a kill zone — route rock to rock, carry long optics, and smoke every crossing. Canyons and mountains funnel rotations, so commit to the circle early and bring a vehicle. In the endgame, claim covered high ground early and let the open desert funnel enemies into your scope.",
};
