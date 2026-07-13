import type { BlogPost } from '../../blogTypes';

export const pubgCrosshairPlacementGuide: BlogPost = {
  slug: 'pubg-crosshair-placement-guide',
  game: 'pubg-battlegrounds',
  category: 'advanced-strategy',
  topicCluster: 'pubg-combat',
  tags: ['crosshair-placement', 'pre-aiming', 'aiming', 'gunplay', 'holding-angles', 'fundamentals'],
  title: 'PUBG Crosshair Placement Guide: Pre-Aim, Win First',
  metaDescription:
    'Crosshair placement wins PUBG fights before they start: head-level discipline, pre-aiming common angles, holding corners, and the reticle setup that helps.',
  excerpt:
    "The guy who killed you didn't aim faster — he aimed earlier. Crosshair placement is the cheapest aim upgrade in PUBG: keep the dot at head level, park it where enemies appear, and most of your duels are over before they start.",
  featuredImagePrompt:
    'First-person view through a red dot sight in PUBG, reticle held at head height on a doorway, finger on the trigger before the enemy appears',
  heroImage: '/images/blog/pubg-battlegrounds/pubg-crosshair-placement-guide/red-dot-reticle.webp',
  heroImageAlt:
    'The view through a PUBG red dot sight with the dot reticle centered — where that dot sits before a fight starts decides who shoots first.',
  imageSources: [
    {
      src: '/images/blog/pubg-battlegrounds/pubg-crosshair-placement-guide/red-dot-reticle.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Reflex-dot-red.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-crosshair-placement-guide/m416-irons.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Iron_sight_M416.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-crosshair-placement-guide/pochinki.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Erangel_Pochinki.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-crosshair-placement-guide/holo-reticle.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Holosight-red.png',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-13T00:00:00.000Z',
  lastUpdated: '2026-07-13T00:00:00.000Z',
  primaryKeyword: 'pubg crosshair placement',
  secondaryKeywords: [
    'pubg pre-aiming',
    'how to pre-aim in pubg',
    'pubg holding angles',
    'pubg head level aim',
    'pubg aim guide',
    'pubg peekers advantage',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-crosshair-placement-beats-raw-aim', label: 'Why crosshair placement beats raw aim', level: 2 },
    { id: 'head-level-is-a-discipline-not-a-tip', label: 'Head level is a discipline, not a tip', level: 2 },
    { id: 'pre-aiming-put-the-dot-where-theyll-be', label: 'Pre-aiming: put the dot where they\'ll be', level: 2 },
    { id: 'holding-angles-without-going-blind', label: 'Holding angles without going blind', level: 2 },
    { id: 'moving-with-your-crosshair-up', label: 'Moving with your crosshair up', level: 2 },
    { id: 'sights-and-reticles-make-the-dot-earn-its-slot', label: 'Sights and reticles: make the dot earn its slot', level: 2 },
    { id: 'leaning-peekers-advantage-and-tpp-quirks', label: 'Leaning, peeker\'s advantage, and TPP quirks', level: 2 },
    { id: 'a-training-routine-that-actually-sticks', label: 'A training routine that actually sticks', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `You push through a doorway in Pochinki and there's a guy standing in the kitchen. You both see each other at the same instant — and somehow his first bullet is already in your skull while your muzzle is still pointed at the floorboards. Watch the death cam and there it is: he wasn't faster than you. His sight was sitting at head height on the doorway before you ever walked through it. You brought reflexes to a fight he'd already finished setting up.

That's crosshair placement, and it's the single cheapest aim upgrade in PUBG. No settings to buy, no thousand hours of aim trainer grind — just the habit of keeping your dot where an enemy's head is going to be instead of where the ground is. This guide covers the head-level habit, pre-aiming angles before they open, holding positions without rotting, and the sight setup that makes all of it easier.

## Why crosshair placement beats raw aim

Every gunfight in PUBG is a race between two numbers: how far your crosshair has to travel to reach the target, and how far theirs does. Raw aim shrinks your travel time. Crosshair placement shrinks the *distance* — and distance is the number you control before the fight even exists.

Think about what actually happens when you die "instantly." The killer didn't flick 90 degrees in 80 milliseconds. His dot was parked within a few centimeters of where your head appeared, so his "flick" was a nudge and a click. Meanwhile your dot was at his kneecaps or on a wall, so you needed a real correction — and in PUBG's damage model, a head-first opener with almost any rifle ends the argument before your correction lands.

Here's the mindset shift: aim is what you do *during* a fight; crosshair placement is what you do the other 95 percent of the match. Most duels you lose aren't aim duels you lost — they're aim duels you never got to enter.

## Head level is a discipline, not a tip

![Aiming down the M416's iron sights in PUBG — even with no optic, the sight line should rest at head height on the nearest angle, not on the dirt.](/images/blog/pubg-battlegrounds/pubg-crosshair-placement-guide/m416-irons.webp)

"Keep your crosshair at head level" sounds like advice you master in an afternoon. It isn't, because head level in PUBG is a moving target. Head height on flat ground is not head height on a slope, on a staircase, behind a window sill, or on the crest of a ridge. The discipline is re-answering the question "where would a head be *right there*?" every time your screen changes.

The terrain cases that matter most:

- **Ridgelines and crests.** On PUBG's rolling maps, the first pixel of an enemy you ever see over a hill is the top of their head. Dot on the ridgeline itself wins that reveal; dot in the sky or the grass doesn't.
- **Stairs and inclines.** Aiming up a staircase, head level is the top step's headroom, not the landing. Aiming down, it's lower than feels natural.
- **Windows and sills.** Hold the top third of the window, because that's where a standing player's head sits — and a crouched one still peeks into it when they shoot.
- **Vehicles and rocks.** People peek over cover, not through it. Hold the top edge, plus a hair of clearance.

The most common failure isn't ignorance, it's drift: your dot sags to the dirt while you run, loot, and stare at the map. Fixing that sag is worth more than any tweak in the [settings guide](/blog/pubg-battlegrounds/pubg-settings-sensitivity-guide) — though a sensitivity you can control is the prerequisite for keeping the dot where you put it.

## Pre-aiming: put the dot where they'll be

Head level is the vertical half of crosshair placement. Pre-aiming is the horizontal half: pointing your gun at the exact spot an enemy will occupy before they occupy it.

Every space in PUBG has a short list of places a human can appear from — doorframes, stair turns, window edges, compound gates, the shoulder of a rock. Moving through any space, your dot should hop between those spots in priority order, not sweep smoothly across scenery. Smooth sweeps feel thorough; they're actually your crosshair spending most of its time aimed at nothing.

How to build the read:

- **Rank the angles.** Ask "if someone shoots me in the next three seconds, where from?" and hold that spot first. The second-most-likely angle gets your dot the moment the first is cleared. This is the same threat-ordering that drives [compound clearing](/blog/pubg-battlegrounds/pubg-compound-clearing-guide).
- **Use sound to move the dot.** Footsteps upstairs mean your crosshair lives on the top of the staircase, at head height, before you climb a single step. A door opening east means the east window. Audio tells you *where*; pre-aim makes the information lethal.
- **Pre-aim through the peek.** When you slice around cover, the dot should already be on the next sliver of space as it's revealed — you're not peeking then aiming, you're peeking *with* the aim done. The full mechanics are in the [peeking guide](/blog/pubg-battlegrounds/pubg-peeking-guide).

One warning: pre-aiming hard angles can tunnel you. Commit your eyes to the priority angle, but keep your ears on everything else — the dot can only be one place, your attention can't be.

## Holding angles without going blind

![Pochinki on Erangel — a compound fight where every doorway and fence corner is a known angle you can pre-place your crosshair on.](/images/blog/pubg-battlegrounds/pubg-crosshair-placement-guide/pochinki.webp)

Holding an angle is crosshair placement's passive mode: you've picked the doorway or the treeline gap someone must cross, your dot is parked at head level on it, and the first thing they ever see is your muzzle flash. Done right, it's the closest thing PUBG has to a free kill. Done wrong, it's you staring at a door while someone walks through the window behind you.

The rules that keep a held angle strong:

- **Back off your cover.** Standing three meters behind a window instead of hugging the sill shrinks what enemies can see of you while your crosshair still owns the whole gap. Distance from cover is free stealth.
- **Hold the off-angle.** Everyone checks the obvious corner-hugging spot. Holding the same doorway from an unusual depth or diagonal means their pre-aim — the same skill you're building — is pointed at the wrong pixel.
- **Relocate after you shoot.** The moment you fire from a held angle, that angle is burned. Take the knock, then move to the next window or corner; the guy pushing your last known position walks into a crosshair that's already waiting somewhere new.
- **Set a timer in your head.** Hold an angle only while the game state says someone should cross it — when the circle shifts or the footsteps stop, holding becomes hiding, and hiding with no information gets you flanked.

## Moving with your crosshair up

Crosshair placement dies the moment you sprint everywhere with your gun down. PUBG punishes this harder than most shooters: sprinting adds a raise-the-weapon delay before your first shot, and that delay plus a bad dot position is unwinnable against someone walking with their sight pre-placed.

The fix isn't to never sprint — the big maps are 8 kilometers across, sprint away in dead space. The fix is knowing when you're in *contact space*: inside compounds, crossing streets, approaching loot someone else might want, final circles. In contact space:

- **Walk or jog with the weapon ready,** dot at head level on the nearest angle. You're trading a little speed for winning every surprise meeting.
- **Let the dot lead you around corners.** Your crosshair should arrive at each new sightline as it opens, sweeping the arc at head height — not trailing behind your movement like a leash.
- **Stop before you shoot at range.** Moving throws your first shots wide; a half-second stop with the dot already placed beats spraying on the run. Movement and firing discipline are covered deeper in the [movement and positioning guide](/blog/pubg-battlegrounds/pubg-movement-positioning-guide).

## Sights and reticles: make the dot earn its slot

![The view through PUBG's holographic sight — a crisper reticle than the red dot, at the cost of a bulkier frame around your vision.](/images/blog/pubg-battlegrounds/pubg-crosshair-placement-guide/holo-reticle.webp)

Your reticle is the tool you're placing, so set it up properly. The concrete facts: the Red Dot Sight gives +20% ADS speed — a pre-placed dot plus faster aim-down-sights is a faster first accurate shot. The holographic sight trades a bulkier frame for a crisper reticle than the red dot's slightly blurrier one. And the red dot, holo, and 2x all support reticle brightness adjustment with the mouse wheel while aiming — if you've never touched it, your dot is probably washing out against Miramar sand or blooming over half the target's head.

Practical setup:

- **Pick a reticle shape you can place precisely.** The red dot lets you swap between dot, chevron, three-bar, and crosshair patterns in red or green. The plain dot or chevron gives the most precise placement point; the busier patterns cover more of exactly what you're trying to aim at.
- **Turn the brightness down** until the reticle is clearly visible but not blooming. A blooming dot hides heads at range.
- **Keep close-range glass on the gun you clear buildings with.** Head-level discipline through a 6x at four meters is a bad joke; match the optic to the space, per the [attachments guide](/blog/pubg-battlegrounds/pubg-attachments-guide).
- **Placement doesn't control recoil for you.** The first bullet goes where the dot is; bullets two through ten are your job — pair this guide with the [recoil control guide](/blog/pubg-battlegrounds/pubg-recoil-control-guide) or your perfect first shot becomes a lone warning shot.

## Leaning, peeker's advantage, and TPP quirks

PUBG adds three wrinkles that pure aim-theory guides skip.

**Leaning (Q/E on PC by default)** lets you expose a shoulder and head while your body stays behind cover — but its real crosshair value is that the lean pivots your view around your pre-placed dot. Place the crosshair on the angle first, then lean into it; don't lean out and then start hunting for head level in the open.

**Peeker's advantage** is the online-shooter reality that the mover around a corner sees the defender a beat before the defender's screen renders the mover. That makes passively holding a razor-thin angle weaker than it feels — the aggressive peek eats a slice of your reaction time. Counter it from depth and off-angles: the farther you are from where his pre-aim expects you, the more his latency head start is spent searching instead of shooting.

**TPP's camera changes where fights start.** In third-person you can see over cover without exposing your gun, which means both players often have full information before either can shoot. Crosshair placement still decides the winner — the player whose dot is already at head level on the swing spot converts the shared information first. In FPP there's no free camera, so pre-aim carries even more of the load. The full mode-by-mode breakdown is in the [TPP vs FPP guide](/blog/pubg-battlegrounds/pubg-tpp-vs-fpp-guide).

## A training routine that actually sticks

Crosshair placement isn't learned by reading — it's a habit, and habits are built with reps and audits.

- **Five-minute warmup.** In training mode, walk between buildings keeping the dot glued to head level on every doorway, window, and wall corner you pass. It's boring. It's also the whole skill.
- **Door drills.** Enter and clear a dead compound as if it were occupied: dot hops angle to angle in priority order, at head height, before your body enters. Ten buildings per session.
- **Audit your deaths.** Every death cam, look at one thing only: where was your crosshair the instant the fight started? If your dot is below chest height in more than half of your death replays, you've found the leak — no aim trainer required.
- **Grade the openers, not the kills.** After each fight ask: did my first shot come from a pre-placed dot, or did I aim after seeing him? Kills off flicks feel great and teach you nothing.

Two weeks of this and the Pochinki kitchen scene flips: you're the one whose bullet is already arriving while the other guy's muzzle is still pointed at the floor.

## Quick Action Checklist

- [ ] Keep your dot at head level on the nearest angle — re-check it on slopes, stairs, sills, and ridgelines
- [ ] Pre-aim the priority angle: ask "where would I get shot from in the next three seconds?" and park the dot there
- [ ] Hop the crosshair between known angles in priority order; don't sweep it across scenery
- [ ] Hold angles from depth and off-angles, and relocate the moment you fire
- [ ] Sprint only in dead space; in contact space, walk with the weapon ready and let the dot lead corners
- [ ] Tune your reticle: precise shape, brightness down (mouse wheel while aiming), close-range glass on your clearing gun
- [ ] Place the dot first, then lean into the angle with Q/E — never lean out and aim second
- [ ] Audit death cams for crosshair height, and grade fights on pre-placed first shots, not flick kills`,
  faq: [
    {
      question: 'What is crosshair placement in PUBG?',
      answer:
        "Crosshair placement is the habit of keeping your sight aimed where an enemy is most likely to appear — at head height, on the nearest doorway, window, corner, or ridgeline — before you ever see anyone. Instead of reacting and flicking to a target, you pre-position the dot so your first accurate shot only needs a tiny correction. It matters more in PUBG than most shooters because headshot damage is so high that whoever lands the first head-level bullet usually wins the fight outright.",
    },
    {
      question: 'How do you pre-aim in PUBG?',
      answer:
        'Pre-aiming means pointing your crosshair at the exact spot an enemy will occupy before they appear. Rank the angles around you by asking where you would get shot from in the next few seconds, and hold the most likely spot first — doorframes, stair turns, window edges, and compound gates. Move the dot between those spots in priority order rather than sweeping smoothly across the scene, and use audio cues like footsteps or doors to relocate the dot to the angle the sound came from at head height.',
    },
    {
      question: 'Where should your crosshair be in PUBG?',
      answer:
        "At head level on the nearest possible threat angle — but head level changes with the terrain. On ridgelines, hold the crest itself, because the top of an enemy's head is the first thing revealed. On staircases, aim where a head appears on the steps, not where a torso would be on flat ground. On windows, hold the top third, and on rocks or vehicles, hold the top edge with slight clearance, since players peek over cover rather than through it.",
    },
    {
      question: 'Is the red dot or holographic sight better for crosshair placement in PUBG?',
      answer:
        'Both work well; the differences are real but small. The red dot sight gives +20% ADS speed and a slimmer frame, but its reticle is slightly blurrier, while the holographic sight has a crisper reticle inside a bulkier housing. The red dot also lets you swap reticle shapes — dot, chevron, three-bar, or crosshair in red or green — and both sights support brightness adjustment with the mouse wheel while aiming. Pick whichever reticle you can place most precisely, and turn brightness down until the dot stops blooming over targets.',
    },
    {
      question: 'What is peeker\'s advantage in PUBG?',
      answer:
        "Peeker's advantage is a latency effect in online shooters: the player who moves around a corner sees the defender on their screen slightly before the defender's screen shows the peeker. In PUBG this means passively holding a razor-thin angle is weaker than it feels, because an aggressive peeker eats a slice of your reaction time. You counter it by holding angles from deeper in cover and from unusual off-angles, so the peeker's pre-aim is pointed at the wrong spot and their latency head start is wasted searching for you.",
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/pubg-battlegrounds', anchor: 'PUBG: Battlegrounds coverage hub' },
    { href: '/blog/pubg-battlegrounds/pubg-peeking-guide', anchor: 'PUBG peeking guide' },
    { href: '/blog/pubg-battlegrounds/pubg-recoil-control-guide', anchor: 'PUBG recoil control guide' },
    { href: '/blog/pubg-battlegrounds/pubg-settings-sensitivity-guide', anchor: 'PUBG settings and sensitivity guide' },
    { href: '/blog/pubg-battlegrounds/pubg-movement-positioning-guide', anchor: 'PUBG movement and positioning guide' },
    { href: '/blog/pubg-battlegrounds/pubg-compound-clearing-guide', anchor: 'PUBG compound clearing guide' },
  ],
  externalSources: [
    {
      url: 'https://www.pubg.com/',
      title: 'PUBG: Battlegrounds — official site',
    },
    {
      url: 'https://pubg.fandom.com/wiki/Red_Dot_Sight',
      title: "Red Dot Sight — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
    {
      url: 'https://pubg.fandom.com/wiki/Holographic_Sight',
      title: "Holographic Sight — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
  ],
  tldr:
    "Crosshair placement decides most PUBG duels before they start: keep your dot at head level on the nearest threat angle, and pre-aim the spots enemies must appear from — doorways, stair turns, window edges, ridgelines. Hold angles from depth and off-angles to blunt peeker's advantage, walk with your weapon ready in contact space, and tune your reticle so it's precise instead of blooming. Audit your death cams: if your crosshair was below chest height when the fight started, that's the leak to fix.",
};
