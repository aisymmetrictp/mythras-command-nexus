import type { BlogPost } from '../../blogTypes';

export const pubgFlankingGuide: BlogPost = {
  slug: 'pubg-flanking-guide',
  game: 'pubg-battlegrounds',
  category: 'advanced-strategy',
  topicCluster: 'pubg-strategy',
  tags: ['flanking', 'rotations', 'positioning', 'squad-tactics', 'sound', 'fundamentals'],
  title: 'PUBG Flanking Guide: Win Fights From the Side',
  metaDescription:
    'How to flank in PUBG: when a flank is worth taking, reading rotations, quiet movement, crossing open ground, vehicle flanks, and the squad pincer that wins fights.',
  excerpt:
    "A head-on peek war between two decent players is a coin flip. A flank removes the coin. Here's how to get to an enemy's blind side, when it's worth it, and how to close the kill without handing it back.",
  featuredImagePrompt:
    'A PUBG player using a vehicle to rotate wide around an enemy position across open terrain, dust trail behind, setting up a flank from the blind side',
  heroImage: '/images/blog/pubg-battlegrounds/pubg-flanking-guide/uaz.webp',
  heroImageAlt:
    'An open-top UAZ in PUBG — the kind of vehicle you ride wide and dismount early to set up a flank on an enemy that never sees the angle coming.',
  imageSources: [
    {
      src: '/images/blog/pubg-battlegrounds/pubg-flanking-guide/uaz.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/UAZ',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-flanking-guide/akm-suppressed.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Suppressor_(AR,_DMR,_S12K)',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-flanking-guide/smoke-deployed.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Smoke_Grenade',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-flanking-guide/buggy.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/Buggy',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-12T00:00:00.000Z',
  lastUpdated: '2026-07-12T00:00:00.000Z',
  primaryKeyword: 'pubg flanking',
  secondaryKeywords: [
    'pubg flanking guide',
    'how to flank in pubg',
    'pubg rotations',
    'pubg squad flank',
    'pubg positioning',
    'pubg pincer tactics',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-flanking-actually-buys-you', label: 'What flanking actually buys you', level: 2 },
    { id: 'when-to-flank-and-when-its-a-trap', label: 'When to flank (and when it\'s a trap)', level: 2 },
    { id: 'reading-the-rotation-where-to-come-from', label: 'Reading the rotation: where to come from', level: 2 },
    { id: 'the-quiet-flank-sound-discipline', label: 'The quiet flank: sound discipline', level: 2 },
    { id: 'crossing-open-ground-on-a-flank', label: 'Crossing open ground on a flank', level: 2 },
    { id: 'vehicle-flanks-and-fast-repositioning', label: 'Vehicle flanks and fast repositioning', level: 2 },
    { id: 'squad-flanks-the-pincer', label: 'Squad flanks: the pincer', level: 2 },
    { id: 'committing-without-giving-it-back', label: 'Committing without giving it back', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Every PUBG player has the same death replay burned into their memory: you're mid-fight with someone across a field, you've got them one-clipped, and then a burst rips into your back from a direction you never checked. You didn't lose to the guy in front of you. You lost to the guy who flanked. Flanking is the difference between fighting on your terms and gambling on a head-on coin flip — and it's the most reliable way to win a fight you had no business winning.

Here's the uncomfortable part: a head-on peek war between two decent players is mostly a wash. Same guns, same cover, whoever pre-aimed better wins the toss. A flank removes the toss. You come from where they aren't looking, you shoot a stationary target that has to *find* you before it can shoot back, and by the time they've swung around they're already two-thirds of the way to dead. This guide is about how to reach that blind side without dying on the way, when the flank is actually worth taking, and how to close it out without handing the kill back.

## What flanking actually buys you

A flank isn't just "attack from the side" — it's a trade you're making, and it's worth understanding what you're buying. When you flank, you spend **time and map distance** to buy three concrete advantages:

- **First-shot initiative.** They're watching a threat that isn't you. Your opening burst lands before they've even registered a new direction of fire.
- **A stationary target.** A player holding an angle or dueling someone else is planted. You're shooting a still target while they have to relocate their whole aim to answer you.
- **A broken position.** Even if you don't kill them outright, a flank forces them off their cover and out into the open, which is exactly where the rest of the map — or your squad — punishes them.

The cost is that flanking is *slow* and it *exposes you while you move*. Every second you spend rotating wide is a second you're not in cover and not watching your own back. That trade is only worth it under the right conditions, which is the next question.

## When to flank (and when it's a trap)

Flanking a fight you should just leave alone is how good players hand themselves to a third party. Take the flank when:

- **The enemy is committed and looking the other way** — pinned in a duel, holding a window toward someone else, or reviving a teammate. A distracted target is the whole point.
- **You have cover or concealment to reach the angle.** A rotation across a tree line, a ridge, or a compound wall is a flank. A rotation across a bare field in the open is a suicide jog.
- **You have time.** The [blue zone](/blog/pubg-battlegrounds/pubg-blue-zone-rotation-guide) isn't about to eat your rotation and the fight won't be over before you arrive.

Skip the flank — or don't start one — when the circle is closing on your path, when reaching the angle means crossing open ground with no smoke, or when you're the one already being watched. And be honest about the biggest trap of all: if *you* can flank the fight in front of you, so can someone else flank *you* while you're focused on it. That's the core lesson of the [third-party guide](/blog/pubg-battlegrounds/pubg-third-party-guide) — the map is full of players doing to you exactly what you're trying to do to them.

## Reading the rotation: where to come from

The best flank angle is usually decided *before* you move, by reading where people have to go. PUBG's shrinking circle does half your work for you: it forces every player to rotate toward the next zone, which means their backs turn to whoever's already sitting in it. Get to the inside edge of the circle early and the flanks come to you.

To pick your angle, ask three questions:

- **Where is their attention pointed?** Come from 90 degrees off their front — the side or rear — not from the direction they're already shooting.
- **What's the covered path to get there?** Trace a route along hard cover and dead ground (dips, gullies, reverse slopes) that keeps you out of their sightline the whole way. If you can't draw that line, it's not a flank.
- **What are they going to do next?** A squad that just won a fight will loot the bodies — heads down, backs exposed, for a good ten seconds. That's your window. Time the flank to their vulnerable moment, the same read that drives good [movement and positioning](/blog/pubg-battlegrounds/pubg-movement-positioning-guide).

## The quiet flank: sound discipline

![A suppressed AKM in PUBG — a suppressor cuts how far your gunfire carries and hides the muzzle flash, so a flank stays a flank instead of announcing itself.](/images/blog/pubg-battlegrounds/pubg-flanking-guide/akm-suppressed.webp)

A flank lives and dies on sound, because PUBG's audio is precise enough that a careless step gives away your whole angle. The enemy is listening for exactly the thing you're doing — moving. Your job is to move without narrating it:

- **Walk, don't sprint, near the target.** Sprinting and hard footfalls carry. Ease off the stick or hold walk (default Left Alt with a bind, or just feather your movement) when you're inside earshot.
- **Mind the surface.** Concrete, metal, and water are loud; grass and dirt are quiet. Route your flank across soft ground where you can.
- **A suppressor keeps the flank secret.** A suppressor cuts how far your gunshots carry and hides your muzzle flash, so when you do open up, the rest of the lobby can't instantly triangulate you — and neither can the guy you're shooting until it's too late.
- **Use their noise as cover.** The loudest moment on the map is an active gunfight. Move while they're shooting; freeze when they stop. If you want the full breakdown of what carries how far, the [audio guide](/blog/pubg-battlegrounds/pubg-audio-guide) is the companion read.

## Crossing open ground on a flank

![Deployed smoke in PUBG creating a wall of concealment — the tool that turns an impossible open-ground flank into a survivable one.](/images/blog/pubg-battlegrounds/pubg-flanking-guide/smoke-deployed.webp)

Sooner or later a flank route has a gap with no cover, and this is where most flanks die. You do not sprint a bare 80-meter field in a straight line and hope. Options, best to worst:

- **Smoke the gap.** A [smoke grenade](/blog/pubg-battlegrounds/pubg-throwables-utility-guide) thrown across the open stretch gives you a moving wall to cross behind. Throw it, wait for it to bloom, then move — don't sprint out the instant it lands.
- **Wait for their eyes to be elsewhere.** Cross while they're reloading, repositioning, or trading fire with someone else. Patience beats a bold dash almost every time.
- **Zig, don't line.** If you must cross exposed, break your path — a moving target that changes direction is far harder to track and lead than one running a predictable straight line.
- **Cross prone or crouched at the edges.** Lowering your profile buys you a beat if someone's scanning that ground, and it keeps you off the skyline on a ridge.

The honest rule: if the only way to the angle is a naked sprint across open ground in someone's sightline, that's not a flank, that's a donation. Re-route or wait.

## Vehicle flanks and fast repositioning

![A buggy tearing across PUBG terrain — vehicles cover ground fast for a wide flank, but their engine noise means you dismount well out from the target.](/images/blog/pubg-battlegrounds/pubg-flanking-guide/buggy.webp)

Vehicles are the best flanking tool in the game and the easiest to misuse. They let you rotate a huge distance around a fight to hit it from a direction nobody's watching — but an engine broadcasts your position for hundreds of meters, so the vehicle gets you *near* the flank, never *into* it.

The method:

- **Ride wide, dismount early.** Take the long way around, well outside the fight, and get off the vehicle a few hundred meters out. Cover the last stretch on foot and quiet.
- **Park where it won't rat you out.** Leave the vehicle behind cover, not skylined on a hill where its silhouette announces "someone rotated here."
- **Never drive straight at the fight.** A vehicle charging a held position is a loud, slow, giant target — you'll get shredded before you're in range. That's a different skill set entirely, covered in the [vehicle combat guide](/blog/pubg-battlegrounds/pubg-vehicle-combat-guide).

Used right, a vehicle turns a flank that would take three minutes on foot into a thirty-second rotation. Used wrong, it's a klaxon telling the enemy exactly where to point.

## Squad flanks: the pincer

Solo flanking is powerful; a coordinated squad flank is a death sentence for whoever's on the receiving end. The play is the **pincer**: part of your squad holds the enemy's attention from the front while the rest swings around to hit them from the side or rear.

How to run it cleanly:

- **Anchor and mover.** One or two players pin the enemy — trade shots, hold the angle, keep their heads down and their aim forward. The rest quietly take the flank.
- **Call the timing.** The anchor keeps the pressure on until the flankers are in position, then everyone commits at once. A flank that fires early just warns the enemy before your teammates are set. Clean comms are the backbone here — see the [squad strategy guide](/blog/pubg-battlegrounds/pubg-squad-strategy).
- **Don't crossfire your own team.** The whole danger of a pincer is that the two halves are shooting toward each other. Know where your flankers are and check your target before you spray, especially when you're clearing into a building — the discipline from [compound clearing](/blog/pubg-battlegrounds/pubg-compound-clearing-guide) applies double.

A pincer works because it makes the enemy's cover useless: whichever way they turn to answer one threat, they expose their back to the other. There's no correct direction to face, and that's the point.

## Committing without giving it back

The flank isn't done when you reach the angle — it's done when they're dead and you're still alive, and plenty of good flanks fall apart at the finish. When you commit:

- **Open from cover, not from the open.** Reaching the blind side doesn't mean standing in a field to shoot. Post up on a wall, a tree, or a rock and peek the flank the same way you'd peek any angle — crosshair up, minimal exposure, per the [peeking guide](/blog/pubg-battlegrounds/pubg-peeking-guide).
- **Take the free damage, then reset if it turns.** If your opener doesn't drop them and they spin on you with a read, don't stand there trading — pull back behind cover, let them lose track, and re-peek from a slightly different spot.
- **Check your own flank the instant it's over.** You just did to them what someone can do to you. The second the fight ends, stop looting for a beat and scan the directions you weren't watching. The kill you never see coming comes from the side — don't become the replay.

## Quick Action Checklist

- [ ] Only flank a distracted, committed enemy — never one who's already watching you
- [ ] Trace a covered path to the angle before you move; if it's a bare-field sprint, don't
- [ ] Come from 90 degrees off their front, using the closing circle to turn their backs to you
- [ ] Walk near the target, route across soft ground, and run a suppressor to keep the flank quiet
- [ ] Smoke any open gap and cross behind it — or wait until their eyes are elsewhere
- [ ] Ride vehicles wide and dismount a few hundred meters out; the engine gives you away
- [ ] Run the pincer in squads: anchor pins the front, movers hit the side, everyone fires on the call
- [ ] Open from cover, reset if it turns, and check your own flank the second the fight ends`,
  faq: [
    {
      question: 'How do you flank in PUBG?',
      answer:
        "To flank in PUBG, you rotate around an enemy who is distracted or committed and attack from their side or rear instead of head-on. Trace a covered path — along tree lines, ridges, dead ground, or compound walls — that keeps you out of their sightline, move quietly across soft surfaces, and open fire from cover once you reach the blind side. The goal is to shoot a stationary target that has to find you before it can shoot back, which gives you the first-shot initiative that a head-on peek war never guarantees.",
    },
    {
      question: 'When should you flank versus fight head-on in PUBG?',
      answer:
        "Flank when the enemy is committed and looking elsewhere, when you have cover or smoke to reach the angle, and when you have time before the blue zone closes on your route. Fight head-on — or disengage entirely — when reaching the angle means crossing open ground with no concealment, when the circle is about to eat your rotation, or when you're the one already being watched. Remember that if you can flank a fight, someone can flank you while you're focused on it, so a flank you can't reach under cover usually isn't worth taking.",
    },
    {
      question: 'How do you flank without being heard in PUBG?',
      answer:
        "Sound discipline is everything. Walk instead of sprinting when you are near the target, since hard footfalls carry, and route your movement across quiet surfaces like grass and dirt rather than loud concrete, metal, or water. A suppressor cuts how far your gunfire travels and hides your muzzle flash, so your opening shots do not instantly reveal your position. Use the enemy's own noise as cover by moving while they are shooting and freezing when they stop.",
    },
    {
      question: 'How do you flank across open ground in PUBG?',
      answer:
        'Never sprint a bare field in a straight line. Throw a smoke grenade across the gap and cross behind the cloud once it blooms, or wait until the enemy is reloading, repositioning, or trading fire with someone else. If you must cross exposed, break your path with zig-zag movement so you are harder to track and lead, and stay low at the edges to keep off the skyline. If the only route is a naked sprint through an enemy sightline, re-route or wait instead.',
    },
    {
      question: 'What is a pincer flank in PUBG squads?',
      answer:
        'A pincer is a coordinated squad flank where one or two players pin the enemy from the front — trading shots and keeping their attention forward — while the rest of the squad swings around to hit them from the side or rear. The anchors hold pressure until the flankers are in position, then everyone commits on a call. It works because it makes the enemy cover useless: whichever direction they turn to answer one threat exposes their back to the other. The main risk is crossfiring your own teammates, so everyone must know where the flankers are before firing.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/pubg-battlegrounds', anchor: 'PUBG: Battlegrounds coverage hub' },
    { href: '/blog/pubg-battlegrounds/pubg-third-party-guide', anchor: 'PUBG third-party guide' },
    { href: '/blog/pubg-battlegrounds/pubg-audio-guide', anchor: 'PUBG audio and sound guide' },
    { href: '/blog/pubg-battlegrounds/pubg-squad-strategy', anchor: 'PUBG squad strategy' },
    { href: '/blog/pubg-battlegrounds/pubg-movement-positioning-guide', anchor: 'PUBG movement and positioning guide' },
    { href: '/blog/pubg-battlegrounds/pubg-throwables-utility-guide', anchor: 'PUBG throwables and utility guide' },
  ],
  externalSources: [
    {
      url: 'https://www.pubg.com/',
      title: 'PUBG: Battlegrounds — official site',
    },
    {
      url: 'https://pubg.fandom.com/wiki/Suppressor_(AR,_DMR,_S12K)',
      title: "Suppressor (AR, DMR, S12K) — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
    {
      url: 'https://pubg.fandom.com/wiki/Smoke_Grenade',
      title: "Smoke Grenade — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
  ],
  tldr:
    "Flanking wins fights a head-on peek war would leave to chance: you hit a distracted, stationary enemy from a direction they aren't watching. Only take the flank when you have a covered path, time before the circle closes, and a target that's committed elsewhere — then move quietly across soft ground, smoke any open gaps, and ride vehicles wide before dismounting early. In squads, run the pincer: anchors pin the front while movers hit the side. Open from cover, reset if it turns, and check your own flank the second the fight ends.",
};
