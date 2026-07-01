import type { BlogPost } from '../../blogTypes';

export const pubgVehicleCombatGuide: BlogPost = {
  slug: 'pubg-vehicle-combat-guide',
  game: 'pubg-battlegrounds',
  category: 'advanced-strategy',
  topicCluster: 'pubg-combat',
  tags: ['vehicle-combat', 'driving', 'drive-by', 'rotations', 'cover', 'fundamentals'],
  title: 'PUBG Vehicle Combat Guide: Driving, Drive-Bys, Cover',
  metaDescription:
    'How to fight from and around vehicles in PUBG — drive-bys, using a car as cover, dodging a chase, ramming, and knowing when to bail before it explodes.',
  excerpt:
    "A vehicle in PUBG is a weapon, a wall, and a coffin depending on how you use it. Here's how to drive under fire, land drive-bys, use the engine block as cover, and bail before the thing cooks off underneath you.",
  featuredImagePrompt:
    'A PUBG UAZ mid-rotation across open Erangel terrain, dust kicking up behind it, players hanging out the sides ready to fire — the vehicle as a mobile fighting platform',
  heroImage: '/images/blog/pubg-battlegrounds/pubg-vehicle-combat-guide/uaz.webp',
  heroImageAlt:
    'A PUBG UAZ, the armored four-seat off-roader that doubles as mobile cover and a drive-by platform when the circle pulls away.',
  imageSources: [
    {
      src: '/images/blog/pubg-battlegrounds/pubg-vehicle-combat-guide/uaz.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/UAZ',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-vehicle-combat-guide/buggy.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Buggy',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-vehicle-combat-guide/dacia.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Dacia_1300',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-vehicle-combat-guide/motorcycle.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Motorcycle',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-01T00:00:00.000Z',
  lastUpdated: '2026-07-01T00:00:00.000Z',
  primaryKeyword: 'pubg vehicle combat',
  secondaryKeywords: [
    'pubg vehicle combat guide',
    'pubg drive-by',
    'pubg using vehicle as cover',
    'pubg how to drive under fire',
    'pubg vehicle explosion',
    'pubg ramming players',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'the-car-that-saves-you-is-the-one-that-kills-you', label: 'The car that saves you is the one that kills you', level: 2 },
    { id: 'driving-under-fire', label: 'Driving under fire', level: 2 },
    { id: 'the-drive-by-shooting-from-a-vehicle', label: 'The drive-by: shooting from a vehicle', level: 2 },
    { id: 'using-a-vehicle-as-cover', label: 'Using a vehicle as cover', level: 2 },
    { id: 'the-engine-block-is-the-only-real-armor', label: 'The engine block is the only real armor', level: 3 },
    { id: 'ramming-the-desperation-play', label: 'Ramming: the desperation play', level: 2 },
    { id: 'when-to-bail', label: 'When to bail', level: 2 },
    { id: 'picking-the-right-vehicle-for-the-fight', label: 'Picking the right vehicle for the fight', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `You hear the engine before you see it — a Dacia flooring it across the open field toward the compound you're holding, and you've got maybe four seconds to decide whether the two players inside are about to flank you or about to die in a fireball. That decision, on both sides of it, is what vehicle combat in PUBG: Battlegrounds actually is. Not the taxi ride to the circle. The moment the taxi becomes a weapon or a target.

Most players treat vehicles as pure transport: get in, drive to the zone, get out, forget about it. That's leaving a huge amount of value on the table — and getting people killed. A vehicle is simultaneously the loudest thing you can do, a slab of mobile hard cover, a drive-by platform, and a fuel-tank bomb that will delete your whole squad if someone lands a few rounds in the right spot. Learning to fight *with* and *around* cars is the difference between a clean rotation and a highlight-reel death.

None of this rides on a specific patch. Engine blocks have always been the tough part, tires have always been the soft part, and a burning car has always been a countdown. Pair this with your [movement and positioning](/blog/pubg-battlegrounds/pubg-movement-positioning-guide) and your [blue zone rotation](/blog/pubg-battlegrounds/pubg-blue-zone-rotation-guide) habits and you stop dying to the thing that was supposed to save you.

## The car that saves you is the one that kills you

Here's the core tension every vehicle decision comes down to: a vehicle solves your positioning problem (you're outside the circle, you need to be inside it) by creating an exposure problem (now everyone within 300 meters knows exactly where you are and roughly where you're going).

An engine is the loudest sound in the game. The instant you start one, you've broadcast your position to every player who can hear it — and in the mid-to-late game, on a tight circle, that's a lot of players, all of whom now have a large, slow, noisy target painted for them. So the first rule of vehicle combat isn't a mechanic, it's a mindset: **every second you're in a vehicle you are trading stealth for speed, and you should only make that trade when speed is what you actually need.**

That means:

- **Drive when you're behind the circle and need to catch up** — speed matters more than stealth because you're already losing.
- **Drive when you're crossing genuinely open ground** where being on foot is a slower death anyway.
- **Don't drive the last stretch into a hot final circle.** Park early, approach quiet. The engine noise that saved you at range gets you third-partied up close. More on that in the [third-party guide](/blog/pubg-battlegrounds/pubg-third-party-guide).

Get the *when* right and everything else in this guide is about executing the fight once you've committed to the trade.

## Driving under fire

The moment someone opens up on your car, most players do one of two panic things: floor it in a straight line (predictable, you eat every bullet) or slam the brakes (now you're a stationary target). Both are wrong.

![A PUBG Buggy, the fast open-frame off-roader — great for dodging fire and rough terrain, but it offers almost no cover to the people riding it.](/images/blog/pubg-battlegrounds/pubg-vehicle-combat-guide/buggy.webp)

What actually works when you're taking fire on the move:

- **Serpentine, don't sprint straight.** Weave left and right. A moving, unpredictable target at range is genuinely hard to lead, especially for anyone shooting a bolt-action. Straight-line driving is how you get one-tapped by a [Kar98k or an AWM](/blog/pubg-battlegrounds/best-pubg-sniper-rifles).
- **Put terrain between you and the shooter.** Angle your drive so a hill, a treeline, or a building breaks their line of sight even for a second or two. Every second they can't see you is a second they're not chipping your tires or your health.
- **Protect your tires by presenting the right angle.** Shots to the tires will flatten them and wreck your handling. You can't armor them, but you can avoid driving broadside across a shooter's view — drive *at* or *away from* them so fewer tires are exposed to the angle.
- **Know that the driver takes reduced damage but the vehicle doesn't.** You can survive a surprising amount of incoming fire personally while the *car* is dying under you. Watch the vehicle health, not just your own — a car at low health is about to become the explosion in the next section.

The goal of driving under fire is rarely to win the fight from the car. It's to reach cover, or reach a spot where you can bail and fight on your terms, without the vehicle cooking off first.

## The drive-by: shooting from a vehicle

You can shoot out of most vehicles as a passenger, and a coordinated drive-by can shred a squad caught in the open. But it's a genuinely hard shot, and doing it wrong just makes noise and wastes ammo.

The realities of shooting from a moving vehicle:

- **The passenger shoots, not the driver.** The driver can't fire while driving. This is fundamentally a squad play — one person drives a stable line, the others hang out the sides and shoot. Solo, a "drive-by" means stopping, and a stopped car is a target.
- **Your shots inherit the vehicle's movement.** Recoil and sway are dramatically worse from a moving car. Expect to hose, not snipe. A high-mag-capacity spray weapon — an [M416, a Beryl, an LMG](/blog/pubg-battlegrounds/best-pubg-assault-rifles) — beats a precision rifle here because volume of fire covers for the instability.
- **Have the driver slow or match speed for the shooting window.** The cleanest squad drive-by isn't at full throttle — the driver eases off or drives parallel to the target at a steady speed so the shooters get a usable window, then punches it again to break off.
- **Lean on it against players who are already committed.** A drive-by is devastating on a squad that's mid-fight with someone else, looting a drop, or crossing open ground — people who can't immediately relocate to cover. Against a dug-in squad in a compound, driving past just donates your car.

Done right by a squad, the drive-by is one of the highest-impact plays in the game. Done wrong by a solo, it's a great way to hand someone a free vehicle kill.

## Using a vehicle as cover

This is the most underused vehicle skill, and it doesn't require the engine to even be running. A parked car, flipped or not, is a big piece of hard cover you can drag into a fight where there's no natural cover at all.

![A PUBG Dacia 1300 sedan — four seats, decent speed, and a body you can crouch behind, but a loud engine and a fuel tank that punishes anyone who lingers next to it under fire.](/images/blog/pubg-battlegrounds/pubg-vehicle-combat-guide/dacia.webp)

How to use a vehicle as cover well:

- **Park it deliberately, then get out and fight on foot.** In a final circle with no rocks or buildings, a vehicle can be the only hard cover available. Position it between you and the threat, crouch behind it, and peek over or around it like any other wall.
- **Crouch behind the wheels and engine, not the doors.** The passenger cabin and doors are thin — bullets pass through or the glass shatters. The wheels and the front engine mass are what actually stop rounds.
- **Never fully rely on it — because it can explode.** This is the catch that separates a car from a rock. A rock doesn't catch fire. If the vehicle takes enough damage while you're hugging it, it detonates and the blast can kill you. Use it as cover, but be ready to peel off it the moment it starts smoking.

### The engine block is the only real armor

Worth saying flat out because it changes how you position around any vehicle, yours or theirs: **the front engine block is the only part of a car that reliably stops bullets. Everything behind it — cabin, doors, bed, rear — is soft.**

That has two consequences. When you're using a car as cover, put the engine between you and the shooter and crouch low behind the front wheel. When you're shooting *at* someone hiding behind a car, don't waste rounds on the engine — shoot through the thin rear and cabin, or better, put fire into the car itself until it's smoking and force them off it. And when you're driving toward a threat, angling the *front* of the vehicle at them means the engine soaks the incoming fire instead of your fuel tank and tires.

## Ramming: the desperation play

Yes, you can run people over, and yes, it feels amazing when it works. It also gets you killed more often than it gets you kills, so treat it as a situational tool, not a strategy.

When ramming actually makes sense:

- **A lone target caught flat in the open** with no cover to dive behind — you can close the distance and flatten them before they relocate.
- **Breaking up a revive.** A squad hunched over a knocked teammate in the open is momentarily stationary and distracted — a ram scatters them and can finish the downed player.
- **You're already dead otherwise.** Last man, low health, someone's about to win the trade on foot — sometimes the car is your only remaining weapon.

Why it usually fails: your target only has to sidestep, and a whiffed ram leaves you a stationary, exposed vehicle right next to an armed enemy — the worst possible position. Ramming also does chip damage to *your* car and can flip you on rough terrain, turning your escape vehicle into a smoking wreck. Ram with intent and an exit plan, or don't ram at all.

## When to bail

The single most important vehicle-combat instinct is knowing the exact moment to get out — because staying one second too long is how squads get wiped in a single explosion.

Bail immediately when:

- **The vehicle starts smoking.** Smoke means it's near death and about to blow. Everyone out, now, and put distance between yourselves and it before it goes.
- **You've reached usable cover.** The car got you to the treeline or the edge of the compound — its job is done. Don't sit in it as a stationary target while you decide what to do next. Park behind cover, or bail and let it roll.
- **You're entering the final circles.** A running engine in a tight endgame is a beacon. Ditch the vehicle at the last piece of cover and go quiet on foot for the [endgame](/blog/pubg-battlegrounds/pubg-endgame-circle-strategy).
- **The tires are shot out.** A vehicle on flat tires handles like a shopping cart and can't outrun anything. Its usefulness is over — bail before it becomes a coffin.

The mistake that kills squads is treating the vehicle as safety right up until it explodes. It stops being safety the instant it starts taking damage. Reading that moment — smoke, flames, flat tires, a tight circle — and getting out *before* the blast is the whole skill.

## Picking the right vehicle for the fight

Different vehicles ask for completely different combat approaches, and grabbing the wrong one for the situation is its own mistake. For the full ranking, see the [best PUBG vehicles list](/blog/pubg-battlegrounds/best-pubg-vehicles) — but here's the combat-relevant summary.

![A PUBG motorcycle — the fastest way across the map and a nightmare to hit at speed, but it offers zero cover and one solid burst dumps you off it.](/images/blog/pubg-battlegrounds/pubg-vehicle-combat-guide/motorcycle.webp)

- **Enclosed cars (Dacia, UAZ, Mirado, Coupe RB):** the best all-round fighting and cover vehicles. Four seats for a squad drive-by, a real body to crouch behind, decent durability. The UAZ in particular is a rolling fortress for a squad rotation.
- **Open vehicles (Buggy, Pickup bed, motorcycle with sidecar):** fast and great for dodging fire and rough terrain, but they offer almost no cover to riders. You're exposed the whole time — good for speed, bad for a stand-up fight.
- **Motorcycle:** the fastest thing on wheels and brutally hard to hit at speed, which makes it a superb *escape* and rotation tool. But it's a coffin in a firefight — no cover, and a single well-placed burst dumps you off it. Use it to run, not to fight.
- **Boats and amphibious vehicles:** situational. A boat is loud and exposed on open water — the last place you want to be caught. Cross fast, land, and get off it.

Match the vehicle to the job: enclosed cars when you might have to fight from or behind them, fast open vehicles and bikes when the plan is purely to move and you'll do your fighting on foot.

## Quick Action Checklist

- [ ] Only start an engine when you actually need speed over stealth — it broadcasts your position to everyone in earshot
- [ ] Under fire, serpentine and put terrain between you and the shooter — never drive a straight line past a sniper
- [ ] Watch the *vehicle's* health, not just yours — a car at low health is about to explode under you
- [ ] For drive-bys, have passengers spray high-capacity guns while the driver holds a steady, slowed line — solo drive-bys mean stopping, and stopping means dying
- [ ] Use a parked car as hard cover, but crouch behind the wheels and engine block, never the thin doors
- [ ] Ram only a lone, exposed target or as a last-ditch weapon — a whiffed ram leaves you stationary next to an armed enemy
- [ ] Bail the instant the car smokes, the tires go flat, or you hit the tight endgame circle — before the explosion, not after
- [ ] Match the vehicle to the plan: enclosed cars to fight from, bikes and open vehicles to move and fight on foot`,
  faq: [
    {
      question: 'Can you shoot while driving in PUBG?',
      answer:
        "No — the driver cannot fire while driving. Only passengers can shoot from a vehicle, which makes the drive-by fundamentally a squad play: one person drives a steady line while the others lean out the sides and shoot. As a solo, a 'drive-by' really means stopping the vehicle first, and a stopped car is an easy target. Shots fired from a moving vehicle also have much worse recoil and sway, so a high-capacity spray weapon that lets you hose the target beats a precision rifle.",
    },
    {
      question: 'What part of a PUBG vehicle stops bullets?',
      answer:
        'The front engine block is the only part of a car that reliably stops rounds. Everything behind it — the cabin, doors, bed, and rear — is thin and lets bullets through or shatters. When you use a vehicle as cover, put the engine between you and the shooter and crouch low behind the front wheel. When shooting at someone hiding behind a car, fire through the soft rear and cabin, or pour rounds into the vehicle itself until it smokes and forces them off it.',
    },
    {
      question: 'How do you drive under fire in PUBG?',
      answer:
        'Serpentine instead of driving a straight line — weaving left and right makes you genuinely hard to lead, especially for bolt-action snipers. Angle your route so hills, trees, or buildings break the shooter\'s line of sight, and drive at or away from them rather than broadside so fewer tires are exposed. The driver personally takes reduced damage, but the vehicle does not, so watch the car\'s health: the goal is almost always to reach cover or a good bail spot, not to win the fight from the car before it explodes.',
    },
    {
      question: 'When should you get out of a vehicle in PUBG?',
      answer:
        'Bail the instant the vehicle starts smoking, because smoke means it is near death and about to explode — an explosion that can kill your whole squad. Also get out once you have reached usable cover (do not sit in a stationary car), when the tires are shot flat and it can no longer outrun anything, and before you enter the tight final circles where a running engine is a beacon. The fatal mistake is treating the car as safety right up until it detonates; it stops being safety the moment it starts taking damage.',
    },
    {
      question: 'Is it worth running people over in PUBG?',
      answer:
        'Ramming is a situational tool, not a strategy. It works against a lone target caught flat in the open with no cover, to break up a squad hunched over a revive, or as a last-ditch weapon when you are already losing on foot. But it fails often: the target only has to sidestep, and a whiffed ram leaves you a stationary, exposed vehicle right next to an armed enemy — the worst position in the game. Ramming also damages your own car and can flip you on rough terrain, so only do it with clear intent and an exit plan.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/pubg-battlegrounds', anchor: 'PUBG: Battlegrounds coverage hub' },
    { href: '/blog/pubg-battlegrounds/best-pubg-vehicles', anchor: 'Best PUBG vehicles ranked' },
    { href: '/blog/pubg-battlegrounds/pubg-movement-positioning-guide', anchor: 'PUBG movement and positioning guide' },
    { href: '/blog/pubg-battlegrounds/pubg-blue-zone-rotation-guide', anchor: 'PUBG blue zone rotation guide' },
    { href: '/blog/pubg-battlegrounds/pubg-third-party-guide', anchor: 'PUBG third-party guide' },
    { href: '/blog/pubg-battlegrounds/pubg-endgame-circle-strategy', anchor: 'PUBG endgame circle strategy' },
  ],
  externalSources: [
    {
      url: 'https://www.pubg.com/',
      title: 'PUBG: Battlegrounds — official site',
    },
    {
      url: 'https://pubg.fandom.com/wiki/Vehicles',
      title: "Vehicles — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
    {
      url: 'https://pubg.fandom.com/wiki/UAZ',
      title: "UAZ — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
  ],
  tldr:
    "A vehicle in PUBG is a weapon, mobile cover, and a bomb all at once. Only start an engine when you need speed over stealth. Under fire, serpentine and use terrain — never drive a straight line past a sniper. Drive-bys are a squad play (passengers spray, the driver holds a slowed line). Use a parked car as cover but crouch behind the engine block, the only part that stops bullets. Above all, bail the instant it smokes or the tires go flat — staying one second too long is how squads die in a single explosion.",
  itemList: {
    name: 'PUBG Vehicle Combat — Core Skills',
    items: [
      { name: 'Driving under fire', description: 'Serpentine, use terrain to break line of sight, and watch the vehicle\'s health, not just your own.' },
      { name: 'The drive-by', description: 'A squad play: passengers spray high-capacity guns while the driver holds a steady, slowed line.' },
      { name: 'Vehicle as cover', description: 'Park deliberately and crouch behind the front wheels and engine block — the only part that stops bullets.' },
      { name: 'Ramming', description: 'Situational: only a lone exposed target or a last-ditch weapon, never a plan.' },
      { name: 'Knowing when to bail', description: 'Get out the instant it smokes, the tires flatten, or you hit the tight endgame — before the explosion.' },
      { name: 'Picking the vehicle', description: 'Enclosed cars to fight from or behind; bikes and open vehicles to move fast and fight on foot.' },
    ],
  },
};
