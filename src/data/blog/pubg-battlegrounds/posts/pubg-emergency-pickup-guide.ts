import type { BlogPost } from '../../blogTypes';

export const pubgEmergencyPickupGuide: BlogPost = {
  slug: 'pubg-emergency-pickup-guide',
  game: 'pubg-battlegrounds',
  category: 'game-guides',
  topicCluster: 'pubg-strategy',
  tags: ['emergency pickup', 'mechanics', 'rotation', 'blue zone', 'utility'],
  title: 'PUBG Emergency Pickup Guide: Fly Out of Trouble',
  metaDescription:
    'The PUBG Emergency Pickup can yank your whole squad out of a losing blue zone — or get you sniped out of the sky. Here is how it works, when to use it, and its rules.',
  excerpt:
    "It looks like a party balloon and it saves games. The Emergency Pickup fultons your squad across the map to the safe zone, but it has strict rules and it hangs you in the open air. Here is how to use it without turning into target practice.",
  featuredImagePrompt:
    'A PUBG squad attached to a Fulton balloon rope being hoisted into the sky by a passing aircraft over open terrain, parachute silhouettes trailing below',
  heroImage: '/images/blog/pubg-battlegrounds/pubg-emergency-pickup-guide/emergency-pickup.webp',
  heroImageAlt:
    'A PUBG Emergency Pickup in action — a Fulton balloon lifting players toward an incoming plane to carry them to the safe zone.',
  imageSources: [
    {
      src: '/images/blog/pubg-battlegrounds/pubg-emergency-pickup-guide/emergency-pickup.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Emergency_Pickup.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-emergency-pickup-guide/emergency-pickup-icon.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Icon_equipment_Emergency_Pickup.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-emergency-pickup-guide/motor-glider.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Motor_Glider.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-emergency-pickup-guide/parachuting.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Parachuting.jpg',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-18T00:00:00.000Z',
  lastUpdated: '2026-07-18T00:00:00.000Z',
  primaryKeyword: 'pubg emergency pickup',
  secondaryKeywords: [
    'how to use emergency pickup pubg',
    'pubg emergency pickup guide',
    'pubg fulton balloon',
    'where to find emergency pickup pubg',
    'pubg emergency pickup rules',
    'pubg blue zone escape',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'what-the-emergency-pickup-does', label: 'What the Emergency Pickup does', level: 2 },
    { id: 'where-to-find-it-and-when-you-can-use-it', label: 'Where to find it and when you can use it', level: 2 },
    { id: 'how-to-deploy-it-without-wasting-it', label: 'How to deploy it without wasting it', level: 2 },
    { id: 'what-happens-once-the-plane-grabs-you', label: 'What happens once the plane grabs you', level: 2 },
    { id: 'the-risks-youre-a-sitting-duck-up-there', label: 'The risks: you\'re a sitting duck up there', level: 2 },
    { id: 'motor-gliders-are-your-worst-enemy', label: 'Motor Gliders are your worst enemy', level: 3 },
    { id: 'when-its-actually-worth-using', label: 'When it\'s actually worth using', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Picture the run that should have been over: your squad is stuck on the wrong side of the map, the blue zone is eating your health bars, and there's no vehicle and no time. In old PUBG that's a wipe. Now one player pulls out what looks like a deflated party balloon, drops it, and sixty seconds later a plane snatches all four of you into the sky and flies you to the safe zone. That's the Emergency Pickup, and it's one of the most underrated pieces of utility in PUBG: Battlegrounds — a get-out-of-jail card that most players never bother to loot.

It's not free, though. The Emergency Pickup has a strict rulebook about where and when it works, and while you're dangling under that balloon you can't shoot back and you're a slow-moving target painted against the sky. Used well, it steals games. Used badly, it's a highlight reel for whoever's holding a DMR. Here's the full breakdown.

## What the Emergency Pickup does

The Emergency Pickup is a deployable item, introduced back in Update 11.1, that carries you and your squad to the safe zone. When you deploy it, a Fulton balloon inflates out of the bag. Once that balloon is fully inflated and high in the air, a plane arrives in 60 seconds. During that window, up to four players can attach themselves to the balloon's rope. The plane catches the balloon, hoists everyone up, and flies toward the center of the current safe zone. At any point in the flight, players can detach and parachute down wherever they want.

![The Emergency Pickup item icon as it appears in your PUBG inventory — a lootable deployable you carry until you need to escape.](/images/blog/pubg-battlegrounds/pubg-emergency-pickup-guide/emergency-pickup-icon.webp)

So it's not a teleport and it's not instant. It's a 60-second commitment followed by a flight, and both halves have risk attached. But the payoff is enormous: it converts "we can't possibly cross that ground in time" into "we're now floating over the middle of the circle picking a landing spot." No other single item repositions an entire squad that far, that fast. Think of it as a one-shot rotation tool that trades airtime and vulnerability for distance you could never cover on foot — the ultimate answer to a brutal [blue zone rotation](/blog/pubg-battlegrounds/pubg-blue-zone-rotation-guide).

## Where to find it and when you can use it

The Emergency Pickup is a lootable item you carry in your inventory, and it only spawns on four maps: Erangel, Miramar, Sanhok, and Vikendi. If you're on one of the other maps, it's simply not in the loot pool, so don't go hunting for it.

Just as important is the timing window, because this is where players waste them. The Emergency Pickup **cannot be used before the first circle appears, and it cannot be used after the fourth circle.** That's a deliberate design choice — it's a mid-game rotation tool, not an endgame escape hatch. If you're sitting on one waiting for the perfect final-circle moment, you've already missed your window; by the time the fights get truly desperate, the item is disabled. Plan to spend it in the early-to-mid rotations, and read the [endgame circle strategy](/blog/pubg-battlegrounds/pubg-endgame-circle-strategy) guide for how the late game changes once this tool is off the table.

A few hard restrictions round out the rules:

- It **will not deploy indoors.** You need open sky above you.
- It **won't work on ferries or trains** — moving map objects break it.
- The deployment area has to be **clear of obstacles** — terrain, vehicles, buildings — with a clear view of the sky, or the deploy simply fails.

## How to deploy it without wasting it

Deploying an Emergency Pickup is a commitment, so the setup matters more than the button press. The single biggest cause of a failed deploy is trying to pop it in a bad spot. The balloon needs vertical clearance and the surrounding area needs to be open, so pick your ground deliberately:

- **Find flat, open terrain with nothing overhead.** No tree canopy, no building eaves, no cliff wall right beside you. If there's an obstacle in the way, the deploy fails and you've announced your position for nothing.
- **Get away from vehicles.** Parked cars near the deploy point can block it. Ditch the ride and step into the open before you drop the balloon.
- **Deploy as a squad, together.** Since up to four players attach to one rope, you want everyone within reach when the balloon goes up. One person deploys, the rest gather on it. Nobody wants to be the guy still running toward the balloon when the plane arrives. Tight coordination here is exactly the kind of thing our [squad strategy](/blog/pubg-battlegrounds/pubg-squad-strategy) guide drills.

Remember the 60-second timer. That's a full minute where the balloon is up, visible, and loud, telling everyone in the area exactly where you are and that you're about to be helpless. Deploy somewhere the local threats can't easily reach you in that minute, not in the middle of a hot compound.

## What happens once the plane grabs you

The moment the plane hooks the balloon and lifts you, the rules of engagement change completely. You are now cargo, and cargo has limits:

- **You cannot shoot.** Weapons are disabled for the entire ride. You can't fight back, you can't return fire, you can only watch.
- **The camera locks to third person.** For the whole journey you're in TPP whether you normally play it or not — worth knowing if you're an [FPP purist](/blog/pubg-battlegrounds/pubg-tpp-vs-fpp-guide), because your view changes for the duration.
- **You can detach and parachute at any time.** You're not locked in until the destination. If you see danger, or you spot a landing zone you like better than the safe-zone center, cut loose and drop.
- **Below 50 meters altitude, the parachute won't open.** This is the killer detail. If you wait too long to detach and you're already low, you can't deploy the chute — so make your detach decision while you still have altitude to spare.

![A player descending under a parachute — from the Emergency Pickup you can detach and drop at any point, but only while you're above 50 meters.](/images/blog/pubg-battlegrounds/pubg-emergency-pickup-guide/parachuting.webp)

The practical upshot: treat the flight like a second drop from the plane at match start. You get to choose where you come down, but you have to commit to the detach early enough that the parachute has room to deploy. Plan your landing the same way you'd plan a hot drop — pick the spot, watch for other players already on the ground, and don't float down into the middle of an enemy squad.

## The risks: you're a sitting duck up there

Let's be blunt about the downside, because it's real. From the second the balloon inflates to the second you touch ground, you are exposed. Players on the rope can take damage. You're a slow, predictable, silhouetted target with no ability to shoot back, and anyone with a scoped rifle who spots you gets a leisurely shot at a squad that can't do anything about it. A well-positioned enemy can pick your whole team apart mid-air.

That's why *where and when* you deploy is the entire skill. You want to pop the Emergency Pickup somewhere the enemies who could shoot you either aren't looking or aren't in range. Deploying in the open next to a contested compound is how you feed an entire squad to a camper on a hillside.

### Motor Gliders are your worst enemy

The specific nightmare is the Motor Glider. It's a flying vehicle, and against a squad hanging helplessly from a balloon rope it's a flying execution. The glider can close distance, line you up, and attack you mid-air while you have zero ability to respond. If you know there's an active Motor Glider in your area, seriously reconsider deploying the Emergency Pickup at all — you'd be handing them the easiest multi-kill in the game.

![A PUBG Motor Glider in flight — the flying vehicle that turns a squad hanging under an Emergency Pickup balloon into easy mid-air targets.](/images/blog/pubg-battlegrounds/pubg-emergency-pickup-guide/motor-glider.webp)

If you must fly with a glider nearby, at least stagger your detaches and get to the ground fast rather than riding the full flight and giving them a long, slow window. Airtime is danger time.

## When it's actually worth using

The Emergency Pickup shines in a few specific spots, and it's dead weight everywhere else. Spend it when:

- **You're stuck deep in the blue zone and can't outrun it.** This is the flagship use. No vehicle, too far to run, health draining — the balloon is your only realistic path to the circle. It beats dying in the blue every time.
- **You need to cross a huge open field while a team is engaging you.** Sometimes the ground route is a death march across a sniper's dream. Flying over it — carefully, and away from that team's sightlines — sidesteps the whole gauntlet.
- **Your squad wants a safer looting spot.** If you dropped somewhere picked-clean or too hot, the Emergency Pickup relocates the whole team to greener pastures without a long, exposed overland trek.

Outside those situations, you're usually better off keeping your inventory slot for heals and ammo. The Emergency Pickup is a *specialist* tool: it's incredible in the exact moment it's designed for, and it's a wasted slot the rest of the time. Loot it, hold it for the mid-game blue-zone emergency, and if that emergency never comes, so be it — the game where it saves your run more than pays for the slot. And when the pickup isn't the answer, fall back on smart overland movement from the [movement and positioning guide](/blog/pubg-battlegrounds/pubg-movement-positioning-guide).

## Quick Action Checklist

- [ ] Loot the Emergency Pickup on Erangel, Miramar, Sanhok, or Vikendi — it's not on other maps
- [ ] Use it in the mid-game: it's disabled before the first circle and after the fourth
- [ ] Deploy on flat, open ground with clear sky — never indoors, on ferries, trains, or near obstacles
- [ ] Step away from vehicles before you drop the balloon or the deploy can fail
- [ ] Gather your whole squad on the rope — up to four players ride one balloon
- [ ] Expect a 60-second wait before the plane arrives; deploy where enemies can't reach you in that minute
- [ ] Detach and parachute while you're above 50 meters — below that the chute won't open
- [ ] Do not deploy with a Motor Glider active nearby; you can't shoot back mid-flight
- [ ] Best uses: escaping a blue zone you can't outrun, crossing open ground, or relocating to safer loot`,
  faq: [
    {
      question: 'How does the Emergency Pickup work in PUBG?',
      answer:
        'You deploy it on open ground and a Fulton balloon inflates. Once the balloon is fully up, a plane arrives in 60 seconds. During that window up to four players can attach to the balloon rope. The plane then catches the balloon, hoists everyone into the air, and flies toward the center of the safe zone. Players can detach and parachute down at any point during the flight, as long as they are above 50 meters when they cut loose.',
    },
    {
      question: 'Where do you find the Emergency Pickup in PUBG?',
      answer:
        'It is a lootable item that you carry in your inventory, and it only spawns on four maps: Erangel, Miramar, Sanhok, and Vikendi. It is not in the loot pool on the other maps, so there is no point searching for it there. Once you find one, hold onto it for a mid-game blue-zone emergency rather than spending it casually.',
    },
    {
      question: 'When can you use the Emergency Pickup in PUBG?',
      answer:
        'It is a mid-game tool with a strict window: it cannot be used before the first circle appears, and it cannot be used after the fourth circle. It also will not deploy indoors, on ferries or trains, or in an area blocked by obstacles like terrain, vehicles, or buildings — you need flat, open ground with a clear view of the sky. If you save it for the final circles, you will find it is already disabled.',
    },
    {
      question: 'Can you get shot while using the Emergency Pickup?',
      answer:
        'Yes, and this is its biggest weakness. From the moment the balloon inflates until you land, you are exposed, and once the plane lifts you, you cannot shoot back and the camera locks to third person. Players on the rope can take damage, so a scoped rifle or especially a Motor Glider can pick your whole squad apart mid-air. Deploy only where enemies who could shoot you are out of range or not looking.',
    },
    {
      question: 'Why is my Emergency Pickup failing to deploy in PUBG?',
      answer:
        'The deploy fails when the area is not clear. You need flat, open terrain with nothing overhead and a clear view of the sky — no tree canopy, building eaves, or cliff walls, and no vehicles parked next to you. It also will not work indoors or on moving objects like ferries and trains. Step into the open, away from obstacles and vehicles, and try again. If it is before the first circle or after the fourth, it is disabled entirely.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/pubg-battlegrounds', anchor: 'PUBG: Battlegrounds coverage hub' },
    { href: '/blog/pubg-battlegrounds/pubg-blue-zone-rotation-guide', anchor: 'PUBG blue zone rotation guide' },
    { href: '/blog/pubg-battlegrounds/pubg-endgame-circle-strategy', anchor: 'PUBG endgame circle strategy' },
    { href: '/blog/pubg-battlegrounds/pubg-squad-strategy', anchor: 'PUBG squad strategy' },
    { href: '/blog/pubg-battlegrounds/pubg-movement-positioning-guide', anchor: 'PUBG movement and positioning guide' },
    { href: '/blog/pubg-battlegrounds/pubg-tpp-vs-fpp-guide', anchor: 'PUBG TPP vs FPP guide' },
  ],
  externalSources: [
    {
      url: 'https://www.pubg.com/',
      title: 'PUBG: Battlegrounds — official site',
    },
    {
      url: 'https://pubg.fandom.com/wiki/Emergency_Pickup',
      title: "Emergency Pickup — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
  ],
  tldr:
    'The PUBG Emergency Pickup deploys a Fulton balloon that a plane hooks 60 seconds later, flying up to four squadmates to the safe zone. It only spawns on Erangel, Miramar, Sanhok, and Vikendi, only works between the first and fourth circles, and needs flat open ground with clear sky — never indoors or near obstacles. While airborne you cannot shoot and you are exposed, so avoid deploying near a Motor Glider, and detach to parachute while still above 50 meters. Best used to escape a blue zone you cannot outrun.',
};
