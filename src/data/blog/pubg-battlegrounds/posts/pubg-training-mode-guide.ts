import type { BlogPost } from '../../blogTypes';

export const pubgTrainingModeGuide: BlogPost = {
  slug: 'pubg-training-mode-guide',
  game: 'pubg-battlegrounds',
  category: 'game-guides',
  topicCluster: 'pubg-strategy',
  tags: ['training-mode', 'camp-jackal', 'practice', 'aim', 'warmup'],
  title: 'PUBG Training Mode Guide: Drills That Actually Work',
  metaDescription:
    'Camp Jackal explained — session rules, the 400m and 800m ranges, CQC and parachute courses, plus five structured drills and a 15-minute warmup routine.',
  excerpt:
    'Most people load Training Mode, spray a wall for ninety seconds, get bored, and queue ranked. That is not practice, that is fidgeting. Here is what Camp Jackal actually contains and the drills that convert range time into wins.',
  featuredImagePrompt:
    'A wide shot of the PUBG training island shooting range, target boards receding into the distance at marked intervals, a player prone behind a scoped rifle',
  heroImage: '/images/blog/pubg-battlegrounds/pubg-training-mode-guide/shooting-range.webp',
  heroImageAlt:
    'The Camp Jackal shooting range in PUBG Training Mode, with target lanes stretching out to the long-distance markers.',
  imageSources: [
    {
      src: '/images/blog/pubg-battlegrounds/pubg-training-mode-guide/shooting-range.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Training-shooting_range.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-training-mode-guide/range-map.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Range_Map.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-training-mode-guide/parachute-practice.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Training-Parachute_practice.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-training-mode-guide/racetrack.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Training-racetrack.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-training-mode-guide/overview.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Training-overview.jpg',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-20T00:00:00.000Z',
  lastUpdated: '2026-07-20T00:00:00.000Z',
  primaryKeyword: 'pubg training mode',
  secondaryKeywords: [
    'pubg training mode guide',
    'pubg camp jackal',
    'pubg training range drills',
    'how to practice aim in pubg',
    'pubg warmup routine',
    'pubg shooting range 800m',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-your-aim-never-improves-in-ranked', label: 'Why your aim never improves in ranked', level: 2 },
    { id: 'what-training-mode-actually-is', label: 'What Training Mode actually is', level: 2 },
    { id: 'getting-in-and-setting-up', label: 'Getting in and setting up', level: 2 },
    { id: 'the-five-drills-that-matter', label: 'The five drills that matter', level: 2 },
    { id: 'drill-1-the-100-meter-pull-down', label: 'Drill 1: The 100-meter pull-down', level: 3 },
    { id: 'drill-2-zeroing-at-400m-and-800m', label: 'Drill 2: Zeroing at 400m and 800m', level: 3 },
    { id: 'drill-3-the-cqc-clear', label: 'Drill 3: The CQC clear', level: 3 },
    { id: 'drill-4-throwables-and-cooking', label: 'Drill 4: Throwables and cooking', level: 3 },
    { id: 'drill-5-parachute-and-landing-precision', label: 'Drill 5: Parachute and landing precision', level: 3 },
    { id: 'vehicles-ramps-and-the-stuff-you-can-only-break-here', label: 'Vehicles, ramps, and the stuff you can only break here', level: 2 },
    { id: 'building-a-15-minute-warmup', label: 'Building a 15-minute warmup', level: 2 },
    { id: 'what-training-mode-cannot-teach-you', label: 'What Training Mode cannot teach you', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `You have played four hundred hours. Your sensitivity is dialed in. You still lose the 90-meter duel against a guy with a red dot and a naked M416, and you still tell yourself it was desync.

It probably was not. It was that the last time you fired a controlled burst at a stationary target with a known distance was some time in your second week of playing, and every rep since has been in a live match where you had one chance, adrenaline, and no feedback loop. PUBG ships a free, dedicated 2x2 kilometer practice island — Camp Jackal — and most players treat it like a lobby screensaver.

This is the guide to using it properly: what is actually on the island, how sessions work, and five drills with defined success conditions so you can tell whether you got better or just had fun.

## Why your aim never improves in ranked

Ranked is a terrible place to learn mechanics, and the reason is feedback density. In a 30-minute match you might take four or five real gunfights. Half of them end before you learn anything — a third party arrives, someone reconnects, the blue eats you. You get maybe a hundred meaningful trigger pulls per hour of play, spread across random ranges, random guns, and random attachments.

The range gives you a hundred meaningful trigger pulls in four minutes, at a range you chose, with a gun you built on purpose, and with bullet holes on a board telling you exactly where the spray went. That is the entire argument. It is not that practice mode is fun — it mostly is not — it is that the information-per-minute is roughly twenty times higher.

The catch is that unstructured range time reproduces the ranked problem. Spraying at a wall with no target distance, no gun plan, and no success condition is just noise with better graphics. Drills fix that.

## What Training Mode actually is

Camp Jackal is a **2x2 km unranked island** built specifically to test weapons and teach recoil control, and it has been in the game since the 2018 training update. It is not a solo sandbox — it is a shared multiplayer space, which surprises people the first time they get shot in the back mid-drill.

![Overview of the Camp Jackal training island in PUBG, showing the range, courses, and vehicle tracks laid out across the map.](/images/blog/pubg-battlegrounds/pubg-training-mode-guide/overview.webp)

The session rules that matter:

- **Sessions hold 5 to 20 players.** You solo queue into it from the lobby; matchmaking assembles the session for you.
- **If five or more players are queued, the session starts immediately**, and others can keep joining for up to five minutes after it opens. If fewer than five are queued, matchmaking runs for five minutes and then starts with whoever is there.
- **Total session time is 30 minutes.** If you dropped into an instantly-started session, that is a five-minute join window plus the standard 25 minutes of training time.
- **You cannot be killed.** Players cannot drop below 1 HP in Training Mode. Someone can absolutely still ruin your concentration, but they cannot end your session.
- **Vehicle tires cannot be damaged**, which is why the stunt ramps do not turn into a graveyard ten minutes in.

That last pair is the underrated part. The no-death rule means you can practice peeking a live human being — an actual thinking opponent who is trying to shoot back — with zero cost to a rep gone wrong. There is no other mode in PUBG where you get that.

Everything on the island is grouped into three categories: the shooting ranges, the skill courses, and the vehicle tracks.

**Shooting ranges.** Incremental target lanes at **400m and 800m**, plus a dedicated **1,000-meter target** for people who want to argue about bullet drop with actual evidence.

**Courses.** A shooting course, close-quarters combat courses in both outdoor and indoor variants, a melee course, a throwables course, a parkour route for vaulting and climbing practice, and a parachute practice area with landing targets.

**Vehicle tracks.** A long track, a racing track, an off-road section, stunt ramps, and water ramps.

![The Camp Jackal training map layout in PUBG, showing the ranges, courses, and vehicle tracks.](/images/blog/pubg-battlegrounds/pubg-training-mode-guide/range-map.webp)

## Getting in and setting up

Queue Training Mode from the lobby. Once you land, do not sprint to the nearest gun. Spend the first sixty seconds doing setup, because a badly configured range session teaches you the wrong lesson at high speed.

**Build the gun you actually run.** If your ranked loadout is a compensated M416 with a vertical grip and a 4x, practice with a compensated M416 with a vertical grip and a 4x. Training with a bare gun and then fighting with a kitted one means your pull-down muscle memory is calibrated to a weapon you never touch. Our [PUBG attachments guide](/blog/pubg-battlegrounds/pubg-attachments-guide) covers which slots actually change behavior versus which are placebo.

**Set your zero before you shoot.** Half the value of the 400m and 800m lanes is learning what your reticle does when you change zeroing distance. If you have never deliberately re-zeroed mid-fight, read the [scope zeroing guide](/blog/pubg-battlegrounds/pubg-scope-zeroing-guide) first, then come here and prove it to yourself.

**Pick one thing per session.** Two drills, maybe three. A 25-minute session where you did recoil and only recoil beats one where you touched every course and consolidated nothing.

## The five drills that matter

Each of these has a success condition. Write it down or say it out loud. If you cannot tell whether you passed, it was not a drill.

### Drill 1: The 100-meter pull-down

Kit your primary AR the way you fight with it. Stand at roughly 100 meters from a target board, ADS, and fire a **full magazine in one continuous hold**, dragging your aim down at the rate the muzzle climbs.

Then walk up and look at the holes.

- **Fail:** a vertical line stitched up the board, or a line stitched into the dirt below it.
- **Pass:** a cluster roughly the size of a torso, with the tail of the spray no more than a body-width from the first shots.

Do five magazines. Then repeat the whole thing with a 7.62mm gun — the AKM or the Beryl M762 — and watch your tidy cluster fall apart, because those two kick considerably harder than the 5.56 rifles. That contrast is the lesson. Full mechanics are in the [recoil control guide](/blog/pubg-battlegrounds/pubg-recoil-control-guide).

### Drill 2: Zeroing at 400m and 800m

Take a DMR or a bolt-action to the long lanes. Start at the 400m targets with your zero set correctly and hit five in a row. Then move to 800m without changing anything and watch every round drop short.

Now fix it, and notice how much you had to hold or re-zero. Then go find the 1,000-meter target and figure out how far off the board your holdover actually is. Most players have never once ranged a shot deliberately; they hold "a bit high" and hope. The point of this drill is converting "a bit high" into a number you can repeat.

**Success condition:** three consecutive hits at 800m on a first-shot cold attempt, no walking your rounds in.

### Drill 3: The CQC clear

The indoor and outdoor CQC courses are where you fix the thing that actually kills you most: entering a building badly. Run the indoor course with a shotgun, then an SMG, then your AR, and pay attention to how differently each one wants you to move through a doorway.

Practice the specific mechanics: pre-aiming the corner before you swing it, holding the angle rather than pushing it, clearing a stairwell from the bottom versus the top. If you are fuzzy on the framework, the [compound clearing guide](/blog/pubg-battlegrounds/pubg-compound-clearing-guide) has the room-by-room version and [crosshair placement](/blog/pubg-battlegrounds/pubg-crosshair-placement-guide) covers where your dot should already be.

**Success condition:** clear the indoor course twice without your crosshair ever pointing at the floor or the ceiling.

### Drill 4: Throwables and cooking

The throwables course exists so you can learn grenade arcs somewhere other than a real endgame, where a bad throw bounces off a window frame and kills your whole squad.

Three reps to run: a flat throw at a fixed distance to calibrate your baseline arc, an underhand throw around a corner or through a doorway, and a cooked frag timed so it detonates on arrival rather than giving the target three seconds to walk away. Then throw smokes and actually stand behind them, because the gap between where you think a smoke lands and where it lands is bigger than you expect. More on utility usage in the [throwables guide](/blog/pubg-battlegrounds/pubg-throwables-utility-guide).

### Drill 5: Parachute and landing precision

![The parachute practice area in PUBG Training Mode, with landing targets scattered below the drop structures.](/images/blog/pubg-battlegrounds/pubg-training-mode-guide/parachute-practice.webp)

The island has parachute practice structures with scattered landing targets. This is the only place in the game where you can attempt a precision landing twenty times in a row without spending twenty matches to do it.

Drop and try to touch down on a specific target, not just "near it." Then try to land on a specific rooftop. Then try landing on one while steering the last two hundred meters of descent, which is exactly what decides whether you get the AR on the top floor or the guy above you does. Pair it with the [hot drop guide](/blog/pubg-battlegrounds/pubg-hot-drop-guide) for the part about which roof to want in the first place.

There is also a known easter egg here: a Ghillie Suit sits on a rock you can only reach by using the parachute drop building near the racetrack entrance. Chasing it is a decent accuracy test for your steering, and there is a second Ghillie spawn on top of a Tukshai at the starting spawn point.

## Vehicles, ramps, and the stuff you can only break here

![The racetrack on the PUBG training island, used for vehicle handling and cornering practice.](/images/blog/pubg-battlegrounds/pubg-training-mode-guide/racetrack.webp)

The vehicle section gets dismissed as goofing off, and to be fair, most of the people on the stunt ramps are goofing off. But there is real transferable skill in it.

Take the racing track and the off-road section and learn how each vehicle behaves at speed — where the UAZ understeers, how badly the Dacia bottoms out on a slope, how a Motor Glider handles being pushed. Learn the exit speed you can carry into a compound before the vehicle flips. Learn what happens when you bail out at 60 versus 100. In a real match that knowledge is the difference between a clean rotation and a squad wipe, and here it costs you nothing because tires do not pop and you cannot die. See [vehicle combat](/blog/pubg-battlegrounds/pubg-vehicle-combat-guide) for the fighting half of that skillset.

The water ramps and boat sections are worth ten minutes if you play maps with real water crossings.

## Building a 15-minute warmup

You do not need a 25-minute session before every play night. You need a repeatable warmup that gets your hands calibrated. Here is one that fits inside a queue.

| Minutes | Drill | Goal |
| --- | --- | --- |
| 0–2 | Setup | Build your exact ranked loadout, set zero |
| 2–6 | 100m pull-down | Five magazines, tight clusters |
| 6–9 | Long-range taps | 400m then 800m, first-shot hits |
| 9–12 | CQC course | Two clean runs, crosshair discipline |
| 12–15 | Free peek reps | Trade peeks with another player on the island |

That last block is the one nobody uses. There are up to nineteen other people on the island who cannot kill you. Find someone willing and just trade peeks at a wall corner for three minutes. Live opponents who react are worth more than any static target, and there is no other setting in PUBG where the rep is free. Pair it with the [peeking guide](/blog/pubg-battlegrounds/pubg-peeking-guide) so you know what you are trying to build.

## What Training Mode cannot teach you

Being honest about the ceiling here matters, because a lot of players grind the range and then get confused when their rank does not move.

The range teaches **mechanics**: recoil, drop, zero, arcs, movement, vehicle feel. It teaches none of the things that actually decide most PUBG matches. It does not teach rotation timing, when to take a fight versus when to leave, how to read a circle edge, how to hear a third party coming, or how to hold a compound with a squad. Those are decision skills and they only come from real matches with review afterward.

The correct split is roughly 80/20: play matches, and spend a small dedicated slice on the range fixing the specific mechanical thing that lost you a fight this week. If you died three times to people out-spraying you at 80 meters, that is a range problem. If you died three times to the blue zone, no amount of range time will help, and you should read the [blue zone rotation guide](/blog/pubg-battlegrounds/pubg-blue-zone-rotation-guide) instead.

Also worth saying plainly: Training Mode is not where you go to feel good. A drill you pass every time is a drill that has stopped teaching you anything. Set the range further out. Pick the gun you are bad with. If your session was comfortable, it was wasted.

## Quick Action Checklist

- Queue Training Mode from the lobby and expect a shared session of 5 to 20 players lasting 30 minutes.
- Build your exact ranked loadout before you shoot anything — same gun, same attachments, same scope.
- Set your zero deliberately, then test it at 400m and 800m instead of guessing holdover.
- Run five full-magazine pull-down reps at 100m and inspect the bullet holes; a torso-sized cluster passes, a climbing line fails.
- Repeat the same drill with the AKM or Beryl M762 to feel how much harder 7.62 kicks.
- Use the indoor CQC course for doorway and stairwell discipline with three different weapon classes.
- Cook one frag per session on the throwables course so the timing stops being a guess.
- Take twenty parachute reps at the landing targets — precision landings are the cheapest skill to buy here.
- Trade peeks with a live player; nobody can drop below 1 HP, so the reps are free.
- Cap it at 15 focused minutes before a session, then go play actual matches, because the range cannot teach rotations.
`,
  faq: [
    {
      question: 'How do you get into Training Mode in PUBG?',
      answer:
        'Queue Training Mode from the lobby and matchmaking places you on Camp Jackal, the dedicated 2x2 km training island. It is a shared session rather than a solo sandbox: sessions hold 5 to 20 players. If five or more players are already queued the session starts immediately and stays open to new joiners for five minutes; if fewer are queued, matchmaking runs for five minutes and then starts with whoever is present.',
    },
    {
      question: 'How long does a PUBG Training Mode session last?',
      answer:
        'Total session time is 30 minutes. If you joined a session that started immediately, that breaks down as a five-minute window where other players can still join plus roughly 25 minutes of training time. Plan your drills around that: two or three focused drills fit comfortably, while trying to touch every course on the island usually means you consolidate nothing.',
    },
    {
      question: 'Can you die in PUBG Training Mode?',
      answer:
        'No. Players cannot drop below 1 HP in Training Mode, so other people on the island can shoot you but cannot end your session. That rule is the mode’s most underused feature, because it means you can practice peeking, trading, and holding angles against a live thinking opponent at zero cost. Vehicle tires also cannot be damaged, which keeps the stunt ramps and race tracks usable for the full session.',
    },
    {
      question: 'What ranges does the PUBG training shooting range have?',
      answer:
        'The shooting range has incremental target lanes at 400 meters and 800 meters, plus a dedicated 1,000-meter target for testing extreme-range holdover. Those distances make it the only reliable place to calibrate zeroing and bullet drop, since in a live match you rarely know the exact distance to a target and never get a second identical attempt to correct your hold.',
    },
    {
      question: 'Is Training Mode actually worth it for improving at PUBG?',
      answer:
        'For mechanics, yes — recoil control, bullet drop, grenade arcs, parachute precision, and vehicle handling all improve far faster on the range than in matches, because the feedback loop is enormously denser. For decision-making it does nothing. Rotation timing, fight selection, circle reading, and squad play only come from real matches. Treat the range as a short targeted warmup that fixes the specific mechanical failure that cost you fights this week.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/pubg-battlegrounds', anchor: 'PUBG: Battlegrounds coverage hub' },
    { href: '/blog/pubg-battlegrounds/pubg-recoil-control-guide', anchor: 'PUBG recoil control guide' },
    { href: '/blog/pubg-battlegrounds/pubg-scope-zeroing-guide', anchor: 'PUBG scope zeroing guide' },
    { href: '/blog/pubg-battlegrounds/pubg-attachments-guide', anchor: 'PUBG attachments guide' },
    { href: '/blog/pubg-battlegrounds/pubg-compound-clearing-guide', anchor: 'PUBG compound clearing guide' },
    { href: '/blog/pubg-battlegrounds/pubg-peeking-guide', anchor: 'PUBG peeking guide' },
  ],
  externalSources: [
    {
      url: 'https://pubg.fandom.com/wiki/Range',
      title: "Range (Camp Jackal) — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
    {
      url: 'https://www.pubg.com/',
      title: 'PUBG: Battlegrounds — official site',
    },
  ],
  tldr:
    'PUBG Training Mode drops you on Camp Jackal, a 2x2 km island with 400m and 800m shooting lanes, a 1,000-meter target, CQC and throwables and parachute courses, and full vehicle tracks. Sessions hold 5 to 20 players for 30 minutes and nobody can drop below 1 HP, so live peek reps are free. Use it for mechanics — recoil, zeroing, grenade arcs, precision landings — in short structured drills with pass/fail conditions, not aimless wall spraying. It will not teach you rotations or fight selection; only real matches do that.',
};
