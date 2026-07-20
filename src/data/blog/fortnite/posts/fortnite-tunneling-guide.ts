import type { BlogPost } from '../../blogTypes';

export const fortniteTunnelingGuide: BlogPost = {
  slug: 'fortnite-tunneling-guide',
  game: 'fortnite',
  category: 'advanced-strategy',
  topicCluster: 'fortnite-fundamentals',
  title: 'Fortnite Tunneling Guide: Cross Open Ground Without Dying',
  metaDescription:
    'Master Fortnite tunneling: cone and tarp tunnels, the move-and-rebuild rhythm, double-tunneling, tunneling under pressure, and when to tunnel vs rotate.',
  excerpt:
    "Tunneling is how good players cross open ground while being shot at and live to fight in the next zone. It's the move-and-rebuild rhythm that turns a death-march across a field into a moving box nobody can crack. Here's how to actually do it.",
  featuredImagePrompt:
    'A Fortnite player tunneling across open ground inside a moving box of cones and walls while the purple storm closes behind, tracer fire bouncing off the build pieces, tense protected movement, vibrant stylized game art',
  heroImage: '/images/blog/fortnite/fortnite-tunneling-guide/storm-gameplay.webp',
  heroImageAlt:
    'The Fortnite storm closing over open ground — tunneling is how you cross that ground under fire without dying.',
  imageSources: [
    {
      src: '/images/blog/fortnite/fortnite-tunneling-guide/storm-gameplay.webp',
      sourceUrl: 'https://fortnite.fandom.com/wiki/The_Storm',
      license: 'Fandom CC-BY-SA / Epic Games',
    },
    {
      src: '/images/blog/fortnite/fortnite-tunneling-guide/build-wall.webp',
      sourceUrl: 'https://fortnite.fandom.com/wiki/Building',
      license: 'Fandom CC-BY-SA / Epic Games',
    },
    {
      src: '/images/blog/fortnite/fortnite-tunneling-guide/build-cone.webp',
      sourceUrl: 'https://fortnite.fandom.com/wiki/Building',
      license: 'Fandom CC-BY-SA / Epic Games',
    },
    {
      src: '/images/blog/fortnite/fortnite-tunneling-guide/build-ramp.webp',
      sourceUrl: 'https://fortnite.fandom.com/wiki/Building',
      license: 'Fandom CC-BY-SA / Epic Games',
    },
  ],
  publishDate: '2026-06-23T00:00:00.000Z',
  lastUpdated: '2026-06-23T00:00:00.000Z',
  primaryKeyword: 'fortnite tunneling guide',
  secondaryKeywords: [
    'how to tunnel in fortnite',
    'fortnite cone tunneling',
    'fortnite tarp tunneling',
    'fortnite double tunnel',
    'tunneling vs rotating fortnite',
    'how to cross open ground fortnite',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'monthly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'tunneling-is-how-you-survive-the-open', label: 'Tunneling is how you survive the open', level: 2 },
    { id: 'the-move-and-rebuild-rhythm', label: 'The move-and-rebuild rhythm', level: 2 },
    { id: 'cone-tunneling-the-default', label: 'Cone tunneling: the default', level: 2 },
    { id: 'tarp-tunneling-when-youre-pushing', label: 'Tarp tunneling when you\'re pushing', level: 2 },
    { id: 'double-tunneling-and-mats', label: 'Double-tunneling and mats', level: 2 },
    { id: 'tunneling-under-pressure', label: 'Tunneling under pressure', level: 2 },
    { id: 'tunneling-vs-rotating', label: 'Tunneling vs rotating', level: 2 },
    { id: 'common-tunneling-mistakes', label: 'Common tunneling mistakes', level: 2 },
    { id: 'drills-to-build-the-habit', label: 'Drills to build the habit', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `You've watched it happen and you've been the guy it happened to: someone bolts across an open field to make zone, takes fire from two directions, and is dead before they reach the next tree line. Tunneling is the answer to that. It's the skill of moving across exposed ground inside a self-built box that travels with you — so the people shooting at you are shooting at walls and cones instead of your head. Done right, you cross a field that would otherwise kill you and pop out the other side at full health, ready to fight.

This guide breaks tunneling all the way down, separate from raw [movement](/blog/fortnite/fortnite-movement-guide) and [zone-reading](/blog/fortnite/fortnite-rotation-guide): the move-and-rebuild rhythm that makes it work, cone tunneling as your default, tarp tunneling when you're pushing toward someone, double-tunneling for the safest crossings, tunneling while you're actively under fire, and the real decision of when to tunnel versus just rotate. None of this changes with the season — walls, cones, ramps, and floors have behaved the same way for years. Get the rhythm into your hands and open ground stops being where you die.

## Tunneling is how you survive the open

![The Fortnite storm closing over open ground — open terrain is where unprotected players get picked off.](/images/blog/fortnite/fortnite-tunneling-guide/storm-gameplay.webp)

Here's the core idea: a tunnel is a **moving box.** Instead of sprinting across the open and hoping nobody's watching, you build cover around yourself and walk it forward, replacing pieces as you go so there's always a wall between you and every angle a shot can come from. The box isn't static — it slides across the map with you, one piece at a time.

Why it works comes down to one fact about Fortnite: **bullets hit structures, not you, when a structure is in the way.** A wall eats the shot and the shooter has to break it before they can touch you — and by the time they do, you've already placed a fresh one and moved a tile forward. A player tunneling well is functionally un-shootable from the sides; the only way to stop them is to get above the tunnel or break it faster than they can rebuild it, and most players can't do either.

Two mental shifts separate people who tunnel from people who run:

- **Stop thinking "get to cover," start thinking "bring cover with you."** The natural terrain doesn't have to exist if you build your own as you move.
- **The box never fully opens.** The instant one piece comes down, the next is going up. There is no moment where you're standing in the open — that moment is what gets you killed.

## The move-and-rebuild rhythm

![A Fortnite wall build piece — the wall is the front and side cover of every tunnel.](/images/blog/fortnite/fortnite-tunneling-guide/build-wall.webp)

Tunneling is a rhythm before it's anything else: **place, step, replace, place, step, replace.** You're not building a fortress, you're maintaining a small box of cover that drifts forward at walking speed. The cleanest mental model is a floor under you, walls on the exposed sides, a cone or floor over your head, and you constantly re-placing the front and trailing pieces as you advance into the next tile.

The basic loop, broken into beats:

- **Place the wall on your new front edge.** As you move toward where you're going, the leading edge needs a wall before you step onto that tile, not after.
- **Step forward into the protected tile.** Your character moves up one grid square into the space the new wall now guards.
- **Replace the piece the enemy is shooting.** Whichever wall is taking fire, refresh it before it breaks — a fresh wall is full HP and resets their damage to zero.

The whole thing only works if it's smooth. A tunnel with gaps — where you place a wall, run two tiles, then remember to build again — is just a series of brief open-ground sprints with extra steps. The pieces have to overlap in time so the box is *always* closed. That smoothness is entirely muscle memory, which is why the drills at the bottom matter more than anything you can read.

## Cone tunneling: the default

![The Fortnite cone (roof) piece — coning the top of the tunnel stops anyone shooting or editing in from above.](/images/blog/fortnite/fortnite-tunneling-guide/build-cone.webp)

Cone tunneling is the version you'll use 90% of the time, and it's exactly what it sounds like: you tunnel forward with a **cone over your head** instead of a flat floor or open top. The cone is the most important piece in the whole tunnel because the one angle a side-wall tunnel doesn't cover is *above* you — and a cone seals that off.

Why the cone on top is non-negotiable:

- **It stops the height punish.** The single biggest threat to a tunneling player is someone with high ground who can shoot or edit straight down into the box. A cone over your head means they're hitting the cone, not you, and a cone is annoying to edit through cleanly.
- **It self-refreshes as you move.** Each step forward you place a new cone on the new tile, so the roof is always fresh over your current position. The trailing cone can break behind you — you've already left it.
- **It's cheap protection.** A cone plus a wall on each threatened side is a tiny material cost for total enclosure. You're not building a full box every tile; you're building just enough to be sealed in the direction shots are coming from, plus the cone up top.

The default crossing, then, is: walls on the exposed sides, cone overhead, refresh the piece taking fire, repeat. If you only learn one form of tunneling, learn this one — it's the safe, mat-efficient way to get from A to B when you're being watched but not hard-pressured.

## Tarp tunneling when you're pushing

A **tarp tunnel** is a more aggressive variant where, instead of a cone overhead, you run a flat roof — a floor piece laid over the top of the tunnel like a tarp. You use it when you're not just crossing ground but *pushing toward* an enemy or a specific point, because the flat top behaves differently than a cone when you reach the destination.

When the tarp version earns its keep:

- **You're tunneling into a fight, not away from one.** A flat-roof tunnel sets you up to convert directly into a box or a ramp-up when you arrive, because the floor over your head is already the bottom of your next level.
- **You want a cleaner ceiling to build off.** A floor on top gives you a flat surface to ramp or wall up from the instant you stop moving, which matters when you're tunneling up to someone's box to take the fight.
- **You're committing to the push.** Tarp tunneling tends to cost slightly more mats and locks you into forward momentum, so it's the choice when the plan is to arrive and fight, not to slip past.

The trade-off is straightforward: cones are the cheaper, safer, more defensive roof for pure crossings; the flat tarp is the more committal roof for when the tunnel ends in a fight. Most rotations want the cone. Pushes want the tarp. Knowing which situation you're in tells you which roof to run.

## Double-tunneling and mats

![A Fortnite ramp/stair piece — ramps and floors give a double-tunnel its second layer of protection.](/images/blog/fortnite/fortnite-tunneling-guide/build-ramp.webp)

A **double tunnel** is exactly what it sounds like: two layers of cover instead of one. You run a second wall or a second roof outside the first, so an enemy who breaks your outer piece still hits an inner piece before they reach you. It's the gold standard for crossing the most exposed ground — wide-open fields late-game with several squads watching — at the cost of more materials and a slightly slower pace.

How double-tunneling actually plays:

- **Two walls deep on the threatened side.** The enemy breaks the outer wall, you've still got the inner one up, and you replace the outer before they can break through to you. They never get a clean line.
- **It buys reaction time, not invulnerability.** The point of the second layer is the half-second it costs the enemy to chew through twice the structure — that's the time you use to refresh and keep moving.
- **It eats mats fast.** This is the expensive option. A double tunnel across a big field can run you a serious chunk of your [wood](/blog/fortnite/fortnite-mats-management-guide), so you only spend on it when the crossing genuinely warrants it.

Which brings up the thing that governs all tunneling: **materials.** Every tunnel is a steady drain on your mats, and a double tunnel is that drain doubled. Build pieces cost materials per piece — a wall, ramp, floor, or cone each costs the same flat amount of whatever material you're using, and tunneling places a *lot* of them. The discipline is to carry enough mats before you commit to a long crossing, and to step down to a single tunnel or cone-only when you can't afford the double. A builder who tunnels themselves out of mats halfway across a field is worse off than one who never tunneled at all — at least the latter still has walls for the next fight.

## Tunneling under pressure

Crossing while nobody's shooting is the easy version. The real skill is **tunneling while you're actively taking fire**, where panic makes people drop the rhythm and start running. The fix is to lean *harder* on the rhythm, not abandon it.

How to hold it together when shots are landing:

- **Refresh the piece that's getting shot, immediately.** When a wall starts taking damage, replace it before it breaks — a fresh full-HP wall resets their progress and they have to start over. The player who refreshes faster than the enemy can break wins the exchange by default.
- **Don't peek to shoot back unless it's free.** The temptation under pressure is to crack a wall, return fire, and "win" the duel. Mostly that just opens your box and gets you hit. Keep moving; you fight when you arrive somewhere with the advantage, not in the middle of a contested field.
- **Cone the top religiously.** Pressure usually means someone has an angle, and the worst angle is from above. The cone overhead is what keeps a height advantage from turning your tunnel into a coffin.
- **Beat the storm with the tunnel, not against it.** If the storm is also pushing you, your tunnel direction and the safe zone should be the same direction. Tunneling into the storm to dodge a player is how you trade a gunfight for a storm death.

Tunneling under pressure is just the normal rhythm executed when your hands want to panic. The players who survive contested crossings aren't doing anything fancier than a clean cone tunnel — they're just doing it without flinching while three people shoot at them.

## Tunneling vs rotating

This is the decision that actually matters, and it's distinct from rotation itself. **Rotating** is the larger question of *where and when* you move to take zone and reach cover. **Tunneling** is one specific *method* of executing a rotation — the protected-box method — and it's not always the right one. Knowing when to spend the mats on a tunnel versus when to just move is its own skill.

When to tunnel:

- **You're crossing genuinely open ground with eyes on you.** No natural cover, late game, multiple squads alive — this is what tunneling is for.
- **You've got the mats to spare.** A tunnel you can't afford to finish is worse than a fast natural rotation.
- **The crossing is short-to-medium.** Tunneling a reasonable gap is fine; tunneling across half the map is a mat bankruptcy.

When to just rotate normally:

- **Natural cover exists.** Tree lines, rocks, buildings, terrain folds — if the map gives you cover, use it for free instead of building your own.
- **You have mobility.** A launch pad, a vehicle, or any [movement item](/blog/fortnite/fortnite-mobility-items-guide) often beats a tunnel: it gets you across faster, costs no mats, and skips the exposed window entirely. Use mobility to *avoid* the open rather than tunnel through it.
- **You're low on mats or early game.** Early, when you should be farming and repositioning cheaply, full tunnels are a waste. Save them for the late-game crossings that actually demand them.

The honest summary: tunneling is a tool inside rotating, not a replacement for it. Good players rotate early and smart so they rarely *need* to tunnel — and when they do need it, they've got the mats and the rhythm to do it clean.

## Common tunneling mistakes

The fastest way to get better is to stop doing the things that get tunneling players killed:

- **Tunneling with no roof.** Walls on the sides but an open top means the first person with height drops in and ends you. Cone or floor the top, always.
- **Breaking rhythm and running.** The moment you stop building and start sprinting, you're in the open. Keep the place-step-replace loop unbroken.
- **Refreshing too late.** Waiting until a wall shatters leaves a window with no cover — that's the window you die in. Refresh before it pops, not after.
- **Tunneling across the whole map.** Mats are finite. A crossing too long for your wood supply leaves you broke for the fight that follows. Use mobility for the long hauls.
- **Tunneling into the storm.** Dodging a player by tunneling the wrong way trades a gunfight you might win for a storm death you definitely lose.
- **Peeking to fight mid-tunnel.** Cracking your own box to return fire usually just opens you up. Move now, fight when you arrive with the advantage.

## Drills to build the habit

Tunneling is pure muscle memory, and muscle memory comes from focused reps in Creative, not from hoping it clicks mid-match. Put time into these:

- **Straight-line cone tunnel.** On a free-build island, tunnel from one end to the other with a cone overhead and side walls, focused only on never breaking the place-step-replace rhythm. Smooth beats fast until it's automatic.
- **Refresh-under-fire reps.** Have a bot or a teammate shoot your tunnel while you cross, and drill refreshing the shot wall before it breaks so a full-HP wall is always between you and the fire.
- **Double-tunnel reps.** Practice running two layers of cover so the second-wall habit is there for the wide-open late-game crossings that need it.
- **Tunnel-to-box transition.** Tarp-tunnel toward a target and practice converting the tunnel directly into a box or ramp-up the instant you arrive, so pushing into a fight is one continuous motion.

There's no shortcut. Players who tunnel clean across a contested field have thousands of place-step-replace reps in their hands. Twenty focused minutes a day beats two unfocused hours, and within a couple weeks the rhythm stops being something you think about and becomes something you just do under fire.

## Quick Action Checklist

The habits that get you across the open alive:

- [ ] Think **bring cover with you** — build a moving box, don't sprint to terrain
- [ ] Run the **place-step-replace** rhythm so the box is never fully open
- [ ] **Cone the top** by default — the height angle is what kills tunneling players
- [ ] Use a **tarp (floor) roof** when you're pushing into a fight, not just crossing
- [ ] **Double-tunnel** the most exposed crossings when you can afford the mats
- [ ] **Refresh the shot wall** before it breaks — never after
- [ ] Don't **peek to fight mid-tunnel**; move now, fight on arrival with the advantage
- [ ] **Tunnel with the storm**, never into it
- [ ] **Tunnel vs rotate:** use natural cover and mobility for free; save tunnels for open ground you can afford to cross
- [ ] Drill the **cone tunnel and refresh-under-fire** loop in Creative until it's reflex`,
  faq: [
    {
      question: 'What is tunneling in Fortnite?',
      answer:
        'Tunneling is moving across open ground inside a self-built box of cover that travels with you, so anyone shooting at you hits walls and cones instead of your character. You place pieces, step forward into the protected tile, and replace the piece taking fire — over and over — so there is always a wall between you and every angle a shot can come from. It is how good players cross exposed fields under fire and arrive at the next zone alive and at full health, instead of getting picked off in the open.',
    },
    {
      question: 'What is the difference between cone tunneling and tarp tunneling?',
      answer:
        'Cone tunneling uses a cone (the roof piece) over your head as you cross, and it is the default — it is cheaper, more defensive, and the angled roof is annoying for enemies to edit through, making it the safe choice for pure rotations. Tarp tunneling uses a flat floor piece as the roof instead, which is slightly more committal but sets you up to convert straight into a box or ramp-up when you arrive. Use cones when you are crossing ground to escape or reposition, and the tarp (flat roof) when you are pushing toward an enemy and plan to fight on arrival.',
    },
    {
      question: 'What is double-tunneling in Fortnite?',
      answer:
        'Double-tunneling means running two layers of cover instead of one — a second wall or roof outside the first — so an enemy who breaks your outer piece still hits an inner piece before reaching you. It is the safest way to cross the most exposed late-game ground because it buys you the extra reaction time it takes the enemy to chew through twice the structure. The trade-off is materials: a double tunnel drains mats fast, so you only spend on it for crossings that genuinely warrant the protection.',
    },
    {
      question: 'When should you tunnel instead of just rotating in Fortnite?',
      answer:
        'Tunnel when you are crossing genuinely open ground with players watching, you have the mats to finish the crossing, and the gap is short-to-medium. Just rotate normally when natural cover exists (tree lines, rocks, buildings), when you have mobility like a launch pad or vehicle that gets you across faster for no mats, or when you are early-game or low on materials. Tunneling is one method of rotating, not a replacement for it — good players rotate early and smart so they rarely need to tunnel at all.',
    },
    {
      question: 'How do you tunnel while being shot at in Fortnite?',
      answer:
        'Lean harder on the rhythm instead of panicking. Refresh whichever wall is taking fire before it breaks — a fresh full-HP wall resets the enemy damage to zero, so the player who refreshes faster than the enemy can break wins by default. Keep a cone over your head to deny the height angle, do not peek to shoot back unless it is free, and tunnel with the storm rather than into it. Tunneling under pressure is just a clean cone tunnel executed without flinching while people shoot at you.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/fortnite', anchor: 'Fortnite coverage hub' },
    { href: '/blog/fortnite/fortnite-rotation-guide', anchor: 'Fortnite rotation guide' },
    { href: '/blog/fortnite/fortnite-piece-control-guide', anchor: 'Fortnite piece control guide' },
    { href: '/blog/fortnite/fortnite-advanced-building-techniques', anchor: 'Fortnite advanced building techniques' },
    { href: '/blog/fortnite/fortnite-mats-management-guide', anchor: 'Fortnite mats management guide' },
    { href: '/blog/fortnite/fortnite-mobility-items-guide', anchor: 'Fortnite mobility items guide' },
  ],
  externalSources: [
    {
      url: 'https://www.fortnite.com/',
      title: 'Fortnite — official site and game modes',
    },
    {
      url: 'https://fortnite.fandom.com/wiki/Building',
      title: 'Fortnite Wiki — Building pieces and materials',
    },
    {
      url: 'https://www.epicgames.com/fortnite/en-US/news',
      title: 'Epic Games — official Fortnite news and patch notes',
    },
  ],
  tldr:
    'Tunneling is moving across open ground inside a self-built box of cover that travels with you, so shots hit walls and cones instead of you. The whole skill is the place-step-replace rhythm: build the front edge, step into the protected tile, and refresh the piece taking fire before it breaks. Cone-tunnel by default for safe crossings, tarp-tunnel (flat roof) when pushing into a fight, and double-tunnel the most exposed ground when you can afford the mats. Always cone the top to deny the height angle, tunnel with the storm not into it, and remember tunneling is one method of rotating — use natural cover and mobility for free when you can, and save tunnels for open ground you have the materials to cross.',
};
