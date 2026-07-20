import type { BlogPost } from '../../blogTypes';

export const pubgDestonMapGuide: BlogPost = {
  slug: 'pubg-deston-map-guide',
  game: 'pubg-battlegrounds',
  category: 'game-guides',
  topicCluster: 'pubg-maps',
  tags: ['deston', 'maps', 'drops', 'rotations', 'recall', 'ascender'],
  title: 'PUBG Deston Map Guide: Drops, Recall & Endgame',
  metaDescription:
    'A full PUBG Deston guide: the best drops, using the Ascender and gliders, the Blue Chip recall system, the swamp and flood terrain, rotations, and the endgame.',
  excerpt:
    "Deston is the 8x8 that broke PUBG's rulebook — Ascenders up skyscrapers, gliders off rooftops, a Blue Chip recall system that brings dead teammates back, and swamps that aren't quite land or water. Here's where to drop, how to use the gadgets, and how to read the endgame.",
  featuredImagePrompt:
    'The full Deston 8x8 tactical map overview, a flooded near-future North American city with named towns labeled, swamp and grassland regions, and a battle-royale flight path drawn across it',
  heroImage: '/images/blog/pubg-battlegrounds/pubg-deston-map-guide/deston-overview.webp',
  heroImageAlt:
    'The full Deston overview map — PUBG’s 8x8 post-hurricane North American city, with flooded urban sprawl, swamplands, and grassland regions across the island.',
  imageSources: [
    {
      src: '/images/blog/pubg-battlegrounds/pubg-deston-map-guide/deston-overview.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Deston',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-deston-map-guide/deston-skyline.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Deston',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-deston-map-guide/deston-swamp.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Deston',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-deston-map-guide/deston-lodge.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Deston',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-24T00:00:00.000Z',
  lastUpdated: '2026-06-24T00:00:00.000Z',
  primaryKeyword: 'pubg deston map guide',
  secondaryKeywords: [
    'deston best drop spots',
    'deston blue chip recall',
    'deston ascender',
    'deston gliders',
    'deston rotations',
    'deston endgame',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'the-map-that-rewrote-the-rules', label: 'The map that rewrote the rules', level: 2 },
    { id: 'how-deston-is-laid-out', label: 'How Deston is laid out', level: 2 },
    { id: 'the-blue-chip-recall-system', label: 'The Blue Chip recall system', level: 2 },
    { id: 'ascenders-gliders-and-vertical-play', label: 'Ascenders, gliders, and vertical play', level: 2 },
    { id: 'the-best-drops', label: 'The best drops', level: 2 },
    { id: 'the-swamp-and-flood-terrain', label: 'The swamp and flood terrain', level: 2 },
    { id: 'rotations-on-deston', label: 'Rotations on Deston', level: 2 },
    { id: 'reading-the-deston-endgame', label: 'Reading the Deston endgame', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Deston is the map where PUBG stopped pretending it was a milsim. It's the 9th Battleground — codename Kiki, a near-future North American city bankrupted and drowned by a hurricane — and it shipped with more new toys than any map before it: Ascenders that zip you up the side of a skyscraper, gliders stashed on rooftops, a Blue Chip recall system that yanks dead teammates back into the match, and swamps that are neither solid ground nor deep water. If you queue into it expecting Erangel-with-skyscrapers, the map will eat you. The gadgets aren't gimmicks; they're the whole point, and the players who ignore them lose to the players who don't.

This is one of PUBG's biggest maps — officially an 8x8, the developers actually called it the largest they'd ever built and hinted it runs "a little over" 8x8. That size, plus the verticality and the recall mechanic, makes Deston a fundamentally different read from the classic maps. Here's the real guide: the layout, how to actually use the recall and the Ascenders, where to drop, how to survive the swamps, and how the endgame plays out on the most three-dimensional map in the game.

![The full Deston overview map — a flooded near-future North American city with labeled towns, swamp, and grassland regions across the 8x8 island.](/images/blog/pubg-battlegrounds/pubg-deston-map-guide/deston-overview.webp)

## The map that rewrote the rules

Most PUBG maps ask one question: where's the cover between me and the circle? Deston asks three. Where's my cover, sure — but also, which way is *up*, and can I get my dead teammate back before the next fight? The map is built around verticality and second chances, and that changes how aggressive you can afford to be.

The honest take: Deston is divisive for a reason. The recall system rewards teams that play to revive, which can drag out games and reward sloppy pushes that "should" have been punished. The flooded terrain slows rotations. And not every building is fully enterable — taking a lesson from Haven, the developers left many structures with only single floors or single rooms open, with the playable sniper perches highlighted so ground players can learn where shots come from. Once you internalize that the city is a designed shooting gallery rather than a free-roam sandbox, it clicks. Fight it, and you'll spend every match confused about where you just got shot from.

## How Deston is laid out

Picture an 8x8 island with a drowned city core and nature reclaiming everything around it: rocky highlands, flat floral plains, and dense swampland, with bits of 21st-century civilization dotted throughout. The named cities you actually need to know:

| POI | Type | What it is |
| --- | --- | --- |
| Ripton | City | A major urban hub with real verticality and dense loot |
| Buxley | City | Large town, strong loot, room to fight |
| Cavala | City | Sprawling urban cluster |
| El Koro | City | Coastal/urban POI |
| Los Arcos | City | Town-tier loot, mid-map presence |
| Sancarna | City | Urban cluster with multi-level fights |

And the landmarks — the named non-city spots that anchor rotations and loot:

| Landmark | What it is |
| --- | --- |
| Hydroelectric Dam | Big industrial structure, strong loot, chokepoint terrain |
| Ten Forts | Compound cluster |
| Wind Farms | Open turbine field, exposed but distinct |
| Arena | Stadium-style structure |
| Assembly | Civic interior, layered fights |
| Concert | Event-venue POI |
| Construction Site | Vertical, half-built structures |
| Lodge | A high-end estate landmark |
| Swamp | The signature flooded-nature zone |

The mental model: **dense, vertical cities scattered across an 8x8, big industrial landmarks as the loot anchors, and swamp/grassland filling the gaps.** Unlike Erangel's single defining river, Deston's defining feature is everywhere at once — the water and the verticality.

## The Blue Chip recall system

This is the mechanic that defines squad play on Deston, so learn it cold. When a teammate is fully eliminated, they drop a **Blue Chip** — a chip carrying their biometric signature — in their deathbox. Pick it up, and you have two ways to bring them back:

1. **Blue Chip Tower (Recall).** Towers spawn randomly each match with their locations marked on your map. Register the chip at a tower to recall your teammate. Activation takes around 10 seconds, makes a loud noise, and is canceled if you move, get knocked, get killed, or hit cancel. Your recalled teammate boards a recall plane and re-enters in the next Blue Zone phase — which means they parachute back in, exposed, just like a fresh drop.
2. **Blue Chip Transmitter.** A lootable item that lets you recall on the fly instead of trekking to a tower. Pop it from your inventory, eat the ~10-second activation animation, and the same recall-plane process kicks off.

The Deston-specific wrinkle: the **Blue Chip Detector** (a piece of Tactical Gear) doesn't just ping nearby players within a radius — on Deston it also detects Blue Chips, flagging them in deathboxes, on the ground, or stashed in vehicle trunks. So a smart enemy can grab *your* dead teammate's chip to deny your recall, and a Detector helps you find chips to deny theirs.

How to actually play it:

- **Loot the chip first, fight later.** If a teammate dies, securing their Blue Chip is often worth more than the immediate trade. No chip, no recall.
- **Recall on your terms.** A recalled teammate drops from the sky into the live circle — don't recall mid-fight when they'll land into crossfire. Recall when you control the area or right after you've won a fight.
- **Deny enemy recalls.** If you wipe most of a squad, grab the chip off the body. It costs them the recall and tells you exactly how aggressive you can be.

## Ascenders, gliders, and vertical play

Deston's verticality is a toolset, not just scenery.

![A clean Deston city skyline with an elevated highway running into the towers — the kind of multi-level urban core where Ascenders and rooftop gliders matter.](/images/blog/pubg-battlegrounds/pubg-deston-map-guide/deston-skyline.webp)

**Ascenders** are zip-up devices at special points on the map that let you ascend or descend great distances quickly — the fast way onto a rooftop sniper perch or down off one without taking fall damage. Use them to take the high ground in a city fight, but know that an Ascender is loud and predictable; an enemy watching the building knows exactly where you'll pop out.

**Gliders** (motor gliders) spawn at airstrips, and Deston rooftops are loaded with emergency/utility parachutes specifically so you can redeploy off a tall building. The combination is the Deston rotation cheat code: get high, glide or parachute toward the next circle, and skip the slow ground crossing entirely. It's also the cleanest way to beat the swamp — fly over the slow terrain instead of slogging through it.

**The [Airboat](/blog/pubg-battlegrounds/best-pubg-vehicles)** is the map's signature vehicle, built for both land and sea traversal — genuinely useful on a map this wet. The trade-off is real: it offers poor cover for passengers, so it's a transport tool, not a fighting platform. Take it across water and swamp; bail before the shooting starts.

The verticality also reshapes gunfights. Because many buildings are only partially enterable with highlighted sniper perches, the question in every city fight is "which windows can actually shoot me?" Learn the playable perches and you'll stop dying to angles you didn't know existed.

## The best drops

**Ripton** is the marquee city drop — a dense, vertical urban core with strong loot and the kind of multi-level fights Deston was built for. It's hot and it's committal: great gear if you win the building, a death sentence if you land roofless into a third party. Take it if you trust your CQC and want to be fully kitted fast.

**Buxley and the other cities (Cavala, Sancarna, Los Arcos, El Koro)** give you city-tier loot with varying heat depending on the flight path. Buxley in particular is a large, fight-friendly town. Land on an edge building, gun up, then decide whether to hold or rotate.

![The Lodge on Deston — a high-end estate landmark with strong loot, the kind of named compound that anchors a safer drop and rotation.](/images/blog/pubg-battlegrounds/pubg-deston-map-guide/deston-lodge.webp)

**The Lodge, Ten Forts, and the Hydroelectric Dam** are the landmark drops — concentrated loot at named compounds, often with less lobby pressure than the marquee cities. The Dam doubles as a rotation chokepoint, so it's loot-and-position in one. For a safer gear-up, the Lodge and the smaller landmarks let you kit a squad without the full city lobby on top of you.

**Wind Farms and the open grassland POIs** are the quiet drops: distinct, low-traffic, and fine for a methodical squad with a vehicle or a glider plan — but exposed, with longer rotations. Don't take them as a solo who might draw a bad circle and have to cross open ground on foot.

## The swamp and flood terrain

![A Deston swamp — a rusted boat half-sunk in algae-green shallow water with dead trees, the map’s signature flooded-nature terrain.](/images/blog/pubg-battlegrounds/pubg-deston-map-guide/deston-swamp.webp)

The swamplands are unique to Deston, and they're a genuine tactical environment, not just a texture. The water is ankle-to-shin deep — you wade through it rather than swimming, so you keep your gun up and your speed mostly intact — and the dense trees and reeds give real cover. That combination makes the swamp a cat-and-mouse zone: you can fight in it without the "I'm swimming and defenseless" death that deep water forces.

How to play it:

- **Use the cover, respect the slowdown.** The swamp's dense foliage hides you, but the water still drags your movement. Don't get caught crossing an open stretch of flooded ground with an enemy on a ridge above you.
- **Sound and ripples give you away.** Moving through water is audible and visible. Pick your line through the dense cover, not the open shallows.
- **Flooded urban sprawl is the same idea, scaled up.** The drowned city blocks combine swamp slowdown with building cover — strong to hold, slow to leave.

The broader point: Deston's water everywhere is why the glider/parachute redeploy is so strong. Anything that lets you fly over the slow terrain instead of wading through it is worth real value.

## Rotations on Deston

Rotations here are a three-way negotiation between distance, water, and verticality.

- **Plan to fly when you can.** The single best Deston rotation is "get high, glide toward the circle." Rooftop parachutes and gliders turn a slow, exposed ground crossing into a fast aerial one. If you're in a tall city and the circle is far, look up before you look for a car.
- **Airboat the wet stretches.** When the route crosses swamp or open water, the Airboat is faster and safer than wading. Just remember it's a transport, not cover — park and finish on foot.
- **Don't ground-slog the swamp under pressure.** Wading across flooded ground while a team holds high ground is the classic Deston death. Route around it, fly over it, or push through dense cover — never the open shallows.
- **Cities are vertical chokepoints.** Rotating through a city means clearing levels, not just streets. If you don't need the fight, route around the urban core rather than through it.

Because the map is so large, a vehicle or glider is close to mandatory on edge drops — the same big-map rule as [Erangel](/blog/pubg-battlegrounds/pubg-erangel-map-guide), just with more interesting ways to cover the distance.

## Reading the Deston endgame

Deston endgames reward the team that controls verticality and still has its full squad — which is exactly what the recall system is designed to encourage. A few map-specific tells:

- **High ground means literal buildings here.** Unlike the classic maps where late circles pull off towns into fields, a Deston final circle in or near a city makes rooftops and upper floors the premium real estate. Hold a playable perch with a covered approach and you watch everyone below get funneled.
- **Know which windows can shoot back.** Because many buildings are only partially enterable, the defensible perches are limited and known. Take one of the real ones; don't assume every window is a threat or a refuge.
- **Bank your recalls before the final circles.** A full four-stack beats a recovering one. If you're going to recall, do it earlier when there's time to reposition, not in the last circle when your teammate parachutes into crossfire.
- **Respect the [Red Zone](/blog/pubg-battlegrounds/pubg-red-zone-guide) and open flooded ground.** Late zones that pull onto swamp or grassland turn the slow terrain into a kill box — get to cover or elevation before the circle forces you across it.
- **Verticality cuts both ways.** Holding a roof is strong, but an enemy with an Ascender or a glider can contest your height. Watch the access points to your perch as carefully as the streets below.

If you want the zone-reading framework that applies to every map, our [PUBG endgame circle strategy](/blog/pubg-battlegrounds/pubg-endgame-circle-strategy) goes deeper on circle prediction and final-circle positioning. Deston just adds a vertical axis and a reset button to the usual math.

> Note: PUBG's ranked and normal map pools rotate by patch, so which maps are queueable on a given day changes. Check the in-game map selection before you assume Deston is available.

## Quick Action Checklist

- [ ] Treat Deston as a vertical, watery 8x8 — use the gadgets, don't fight the map
- [ ] Secure a fallen teammate's **Blue Chip** before anything else, then recall at a **tower** or with a **transmitter** when you control the area
- [ ] Use a **Blue Chip Detector** to find or deny chips; grab enemy chips to kill their recall
- [ ] Drop **Ripton** or **Buxley** for fights; the **Lodge, Ten Forts, or the Dam** to gear up with less heat
- [ ] Get high and **glide/parachute** toward the circle instead of slow ground crossings
- [ ] **Airboat** the swamp and open water, but bail before the fight — it's transport, not cover
- [ ] In the swamp, use the dense cover and avoid the open shallows; the water slows you and gives you away
- [ ] In the endgame, hold a real playable rooftop perch, bank your recalls early, and watch your Ascender access points
- [ ] Check the in-game map rotation before you assume Deston is queueable`,
  faq: [
    {
      question: 'How does the Blue Chip recall system work on Deston?',
      answer:
        'When a teammate is fully eliminated, they drop a Blue Chip in their deathbox. Pick it up and you can revive them in one of two ways: register the chip at a Blue Chip Tower (these spawn randomly each match with their locations marked on your map, take about 10 seconds to activate, make a loud noise, and cancel if you move or get knocked), or use a lootable Blue Chip Transmitter to recall on the fly without trekking to a tower. Either way, the recalled teammate boards a recall plane and re-enters the match in the next Blue Zone phase, parachuting back in exposed like a fresh drop. The Deston Blue Chip Detector also detects chips, so enemies can grab your teammate\'s chip to deny the recall.',
    },
    {
      question: 'What are the best drop spots on Deston?',
      answer:
        'For fights and dense city-tier loot, Ripton is the marquee vertical drop and Buxley is a large fight-friendly town — both hot and committal. For strong loot with less lobby pressure, the landmark drops are better: the Lodge estate, Ten Forts, and the Hydroelectric Dam (which doubles as a rotation chokepoint) all gear you up without the full city on top of you. Wind Farms and the open grassland POIs are the quiet, low-traffic drops, fine for a methodical squad with a vehicle or glider plan but exposed with longer rotations.',
    },
    {
      question: 'How do you use Ascenders and gliders on Deston?',
      answer:
        'Ascenders are zip-up devices at special points on the map that let you ascend or descend great distances quickly — the fast, fall-damage-free way onto a rooftop perch or back down. They are loud and predictable, so an enemy watching the building knows where you will appear. Gliders spawn at airstrips, and Deston rooftops are stocked with emergency parachutes so you can redeploy off a tall building. The strongest Deston rotation is to get high, then glide or parachute toward the next circle, skipping the slow ground crossing entirely. It is also the cleanest way to beat the swamp by flying over it.',
    },
    {
      question: 'How big is Deston and what is its theme?',
      answer:
        'Deston is an 8x8 map — the 9th playable Battleground, codename Kiki — and the developers described it as the largest map they had ever built, hinting it runs a little over 8x8. The theme is a near-future North American city bankrupted and drowned by a catastrophic hurricane: flooded urban sprawl, hulking desalination plants, and overgrown algae farms, with nature reclaiming the surrounding rocky highlands, floral plains, and dense swamplands. It is the most vertical map PUBG has built, with skyscrapers, rooftop sniper perches, and partially enterable buildings.',
    },
    {
      question: 'How do you fight in the Deston swamp?',
      answer:
        'The swamplands are ankle-to-shin deep water, so you wade rather than swim — you keep your gun up and most of your speed, and the dense trees and reeds give real cover, which makes the swamp a cat-and-mouse fighting zone rather than a defenseless deep-water crossing. Use the foliage for cover but avoid the open shallows, because the water still slows your movement and moving through it is audible and visible. The flooded urban sprawl works the same way at a larger scale, combining swamp slowdown with building cover. When possible, fly over the slow terrain with a glider or rooftop parachute instead of slogging through it.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/pubg-battlegrounds', anchor: 'PUBG: Battlegrounds coverage hub' },
    { href: '/blog/pubg-battlegrounds/best-pubg-maps-ranked', anchor: 'Best PUBG maps, ranked' },
    { href: '/blog/pubg-battlegrounds/pubg-erangel-map-guide', anchor: 'PUBG Erangel map guide' },
    { href: '/blog/pubg-battlegrounds/pubg-taego-map-guide', anchor: 'PUBG Taego map guide' },
    { href: '/blog/pubg-battlegrounds/pubg-endgame-circle-strategy', anchor: 'PUBG endgame circle strategy' },
    { href: '/blog/pubg-battlegrounds/best-pubg-vehicles', anchor: 'Best PUBG vehicles, ranked' },
  ],
  externalSources: [
    {
      url: 'https://pubg.com/en/game-info/maps/deston',
      title: 'Deston — PUBG: Battlegrounds official map page',
    },
    {
      url: 'https://pubg.fandom.com/wiki/Deston',
      title: "Deston — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
    {
      url: 'https://pubg.fandom.com/wiki/Bluechip_Detector',
      title: "Bluechip Detector — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
  ],
  tldr:
    'Deston is PUBG’s 8x8 near-future North American city (Map 9, codename Kiki) and its most gadget-driven map. Secure a fallen teammate’s Blue Chip and recall them at a tower or with a transmitter — they parachute back in the next Blue Zone phase, so do it when you control the area. Use Ascenders and rooftop gliders to take height and skip slow rotations, and the Airboat to cross swamp and water. Drop Ripton or Buxley for fights, or the Lodge, Ten Forts, and the Dam to gear up quieter. The swamp is shallow, fightable cover; fly over it when you can. In the endgame, hold a real rooftop perch and bank recalls early.',
};
