import type { BlogPost } from '../../blogTypes';

export const cs2MovementCounterStrafingGuide: BlogPost = {
  slug: 'cs2-movement-counter-strafing-guide',
  game: 'counter-strike-2',
  category: 'game-guides',
  topicCluster: 'cs2-guides',
  tags: ['movement', 'counter-strafing', 'peeking', 'mechanics', 'accuracy'],
  title: 'CS2 Movement Guide: Counter-Strafing, Peeking, and Why You Keep Losing First Shot',
  metaDescription:
    'How CS2 movement really works: per-weapon run speeds, the 34% velocity accuracy threshold, how to counter-strafe in one frame, jiggle vs shoulder peeks, and jump-shot myths.',
  excerpt:
    'You lose most of your duels before you ever pull the trigger, because you shoot while you are still sliding. Here is how CS2 ties accuracy to velocity, why counter-strafing wins the first shot, and how to peek without feeding.',
  featuredImagePrompt:
    'A CS2 operator strafing behind cover with motion-blur streaks under their feet, an AK-47 raised, a velocity meter overlay dropping to zero at the instant of the shot',
  heroImage: '/images/blog/counter-strike-2/cs2-movement-counter-strafing-guide/ak-47.webp',
  heroImageAlt:
    'The CS2 AK-47, the rifle whose first bullet only lands when your velocity drops under the accuracy threshold.',
  imageSources: [
    {
      src: '/images/blog/counter-strike-2/cs2-movement-counter-strafing-guide/ak-47.webp',
      sourceUrl: 'https://counterstrike.fandom.com/wiki/File:CS2_AK-47_Inventory.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/counter-strike-2/cs2-movement-counter-strafing-guide/knife.webp',
      sourceUrl: 'https://counterstrike.fandom.com/wiki/File:CS2_CT_knife.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/counter-strike-2/cs2-movement-counter-strafing-guide/awp.webp',
      sourceUrl: 'https://counterstrike.fandom.com/wiki/File:CS2_AWP_Inventory.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/counter-strike-2/cs2-movement-counter-strafing-guide/glock.webp',
      sourceUrl: 'https://counterstrike.fandom.com/wiki/File:CS2_Glock-18_Inventory.png',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-23T00:00:00.000Z',
  lastUpdated: '2026-07-23T00:00:00.000Z',
  primaryKeyword: 'cs2 counter-strafing',
  secondaryKeywords: [
    'cs2 movement guide',
    'how to counter-strafe cs2',
    'cs2 peeking guide',
    'cs2 movement speed',
    'cs2 accuracy while moving',
    'counter strike 2 counter strafe',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 10,
  toc: [
    { id: 'the-shot-you-lose-before-you-fire', label: 'The shot you lose before you fire', level: 2 },
    { id: 'accuracy-is-a-speedometer-not-a-crosshair', label: 'Accuracy is a speedometer, not a crosshair', level: 2 },
    { id: 'every-weapon-runs-at-a-different-speed', label: 'Every weapon runs at a different speed', level: 3 },
    { id: 'the-34-rule', label: 'The 34% rule', level: 3 },
    { id: 'counter-strafing-the-one-frame-brake', label: 'Counter-strafing: the one-frame brake', level: 2 },
    { id: 'how-to-actually-do-it', label: 'How to actually do it', level: 3 },
    { id: 'why-cs2-sub-tick-changed-the-feel', label: 'Why CS2 sub-tick changed the feel', level: 3 },
    { id: 'peeking-jiggle-shoulder-and-wide', label: 'Peeking: jiggle, shoulder, and wide', level: 2 },
    { id: 'the-jump-shot-myth', label: 'The jump-shot myth', level: 2 },
    { id: 'walking-crouching-and-noise', label: 'Walking, crouching, and noise', level: 2 },
    { id: 'a-practice-routine-that-sticks', label: 'A practice routine that sticks', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `You are standing still, they run around the corner already firing, and somehow their spray lands and yours does not. It feels like a hit-registration scam. It usually is not. In nine out of ten of those trades you pulled the trigger while your character was still sliding to a stop, and CS2 threw your first bullet somewhere into the wall behind them. Counter-Strike has always hidden its hardest skill in plain sight: the game does not care where your crosshair is if your feet are still moving. Movement is the shot.

This is the mechanic almost nobody in the low-and-mid ranks actually trains, which is exactly why fixing it climbs you faster than any crosshair tweak. Here is how CS2 ties your accuracy to your velocity, and how to stop losing duels you already won on paper.

## The shot you lose before you fire

Standing accuracy in Counter-Strike is near-perfect. Moving accuracy is a joke — your bullets cone out into a random spread the moment you have real velocity. That has been true since 1.6, but CS2's damage model and the way it renders your first shot make the punishment feel more brutal, because the one bullet that matters most in a rifle duel is the first one, and the first one is the one you fire mid-slide.

The mental model to burn in: in CS2 you do not "shoot when your crosshair is on them." You shoot when you have *stopped*, and your crosshair happens to be on them. Reverse the order in your head and half of your losses disappear.

![CS2 AK-47 weapon render](/images/blog/counter-strike-2/cs2-movement-counter-strafing-guide/ak-47.webp)

## Accuracy is a speedometer, not a crosshair

Your inaccuracy scales with how fast you are moving. Sit at zero velocity and a rifle's first bullet goes exactly where you aim. Move at full run speed and that same bullet could go almost anywhere in a wide cone. There is a threshold in between: drop below it and the game treats you as accurate enough to trust the first shot.

### Every weapon runs at a different speed

This is the part that quietly wrecks people who swap weapons: your run speed changes with what you are holding, so the exact same movement input leaves you sliding for a different amount of time depending on the gun. Knife out, you are a sprinter. AWP out, you are wading through mud.

| Weapon class | Run speed (units/sec) |
| --- | --- |
| Knife | 250 |
| Pistols (Glock, USP-S) | 240 |
| SMGs (MP9, MAC-10) | 240 |
| Rifles (AK-47, M4) | 215 |
| AWP | 200 |

The AWP being the slowest at 200 units per second is not a flavor detail — it is why AWPers can afford to be so deliberate. A slower top speed means a shorter slide to a full stop, which is one reason a good AWPer can flick-and-fire out of a peek faster than it looks like they should be able to. The knife at 250 is your fastest rotation tool, which is why you always see pros pull it to sprint between bomb sites.

![CS2 CT knife render](/images/blog/counter-strike-2/cs2-movement-counter-strafing-guide/knife.webp)

### The 34% rule

The number worth memorizing: your first shot becomes trustworthy once you slow to roughly **34% of your weapon's max speed**. With a rifle that is somewhere in the neighborhood of 88 units per second — a jog, not a full sprint. You do not have to be perfectly frozen to land the shot; you have to be *under the line*.

That distinction is everything, because getting from full speed to a dead stop naturally takes around ten frames of deceleration as your character slides. Getting *under 34%* can happen almost instantly if you kill your momentum on purpose instead of waiting for friction to do it. Which is the entire point of counter-strafing.

## Counter-strafing: the one-frame brake

Counter-strafing is tapping the opposite movement key to cancel your velocity on command instead of coasting to a stop. Strafe right with D, then tap A for a fraction of a second, and your character's momentum zeroes out almost immediately rather than sliding for another ten frames. You go from "inaccurate and moving" to "under the threshold and shootable" in roughly **one to two frames instead of ten**.

That gap is the whole ballgame. A player who counter-strafes fires an accurate first shot maybe eight frames sooner than a player who just lets go of the key. Eight frames is the difference between winning the peek and respawning next round.

### How to actually do it

The muscle-memory pattern for a right-hand peek:

- Hold **D** to strafe out from cover.
- The instant your crosshair crosses the enemy, **tap A** — a quick brush, not a hold.
- **Fire on that tap.** The click and the counter-strafe tap should feel simultaneous.
- Release everything and re-center.

Mirror it for a left peek (hold A, tap D). The classic training tell: if your character visibly slides *past* where you wanted to stop, you tapped too late or held the counter key too long. If you shoot and the shot sprays wide despite a centered crosshair, you fired before the tap registered. The rhythm you are chasing is *move, tap-and-shoot, reset* — one clean beat.

![CS2 AWP weapon render](/images/blog/counter-strike-2/cs2-movement-counter-strafing-guide/awp.webp)

### Why CS2 sub-tick changed the feel

If you came from CS:GO and counter-strafing feels slightly *off* in CS2, you are not imagining it. CS2's sub-tick system timestamps your inputs at the exact instant they happen inside a tick rather than rounding them to the start of the next tick. In practice that means the game reads the precise moment your velocity crosses under the accuracy threshold, so a clean counter-strafe is rewarded more sharply and a sloppy one is punished more honestly. The mechanic is the same one from every previous Counter-Strike; sub-tick just made the timing window feel more literal. Players who "cheated" the old tick rounding sometimes find their inputs need to be crisper now.

## Peeking: jiggle, shoulder, and wide

Movement is not only about stopping — it is about *how you show yourself*. Three peeks cover most situations:

- **Jiggle peek.** Strafe out and immediately counter-strafe back behind cover without firing. You are baiting information and drawing an AWP shot, not trying to kill. If they whiff, the angle is now yours. This is the single safest way to check a suspected AWP hold.
- **Shoulder peek.** Expose only your shoulder for a beat, then pull back. Same purpose as a jiggle but even lower commitment — you are pulling the trigger *out of them*, not offering a body.
- **Wide peek.** Swing far off the angle so you take the fight in open space where their pre-aim is wrong. High risk, high reward, and it only works if you counter-strafe at the end of the swing to actually land your shot. A wide peek without a stop is just running at someone.

The rule threading all three: peek with a *plan for your feet*. Every peek should end in either a counter-strafe (you are taking the fight) or a return to cover (you are not). The players who feed are the ones whose peeks end in a slide with the trigger held down.

## The jump-shot myth

Someone in your lobby will insist jump-shotting is viable. With rifles and the AWP, it is not — airborne accuracy is the worst in the game, and a jumping rifle shot is close to a coin flip against a random spread. The pistols and a couple of specific guns are more forgiving in the air, but "forgiving" is not "reliable," and building a habit around jump-shots will cost you far more rounds than the occasional highlight is worth.

The one place air time earns its keep is **movement**, not shooting: bunny-hop-style strafes and long jumps to reposition, cross a gap, or surprise an angle. Move through the air, land, counter-strafe, *then* shoot. Never trust the bullet you fire with both feet off the ground.

![CS2 Glock-18 pistol render](/images/blog/counter-strike-2/cs2-movement-counter-strafing-guide/glock.webp)

## Walking, crouching, and noise

Two more inputs round out your movement kit:

- **Walk (Shift).** Holding Shift drops you to a slower, silent pace with no footstep audio. It is your tool for holding a quiet angle, sneaking a rotate, or repositioning during a post-plant without announcing yourself. The trade is obvious — you are slow and easy to trade if spotted, so walk to stay hidden, not to fight.
- **Crouch (Ctrl).** Crouching slows you and lowers your profile. It does *not* give you some magic accuracy buff that fixes bad movement — a crouch mid-slide is still inaccurate. Its real uses are peeking under boosts, holding a tight off-angle, and playing around specific map geometry, not "crouch-spraying" every duel. New players who crouch in every fight turn themselves into a slow, predictable target.

The through-line: sound is information you are constantly leaking. Sprinting into a site tells the defenders exactly where you are and how many. Good movement is as much about *when to be silent* as it is about how fast you can stop.

## A practice routine that sticks

You do not fix movement by reading about it. Ten focused minutes before you queue:

- **Counter-strafe reps on a wall.** Strafe left-right along a flat wall, counter-strafing and firing a single shot at each change of direction. Watch the bullet holes — they should be tight dots, not sprayed smears. This is the single most valuable warm-up in the game.
- **A movement or "prefire" community map.** These drill peek-stop-shoot on real angles with bots on the timings you will see in a match.
- **Deathmatch with a rule.** Play a round of DM where you refuse to fire unless you have counter-strafed first. It feels slow and you will die a lot at first. That discomfort is the habit forming.

Pair this with the shooting side and it compounds fast: a clean stop plus disciplined [spray control](/blog/counter-strike-2/cs2-spray-control-guide) is what actually wins the rifle duels that decide rounds, and winning rounds by wider margins is literally worth more in [CS Rating](/blog/counter-strike-2/cs2-rank-system-explained). Movement is the cheapest rating in the game because almost nobody below the top colors trains it on purpose.

For the rest of the fundamentals, the [Counter-Strike 2 hub](/blog/counter-strike-2) has the companions: the [economy guide](/blog/counter-strike-2/cs2-economy-guide) for the buys that decide half your rounds, the [utility guide](/blog/counter-strike-2/cs2-utility-guide) for the smokes and flashes that open the angles you peek, and the [spray control guide](/blog/counter-strike-2/cs2-spray-control-guide) for the shots your counter-strafe sets up.

## Quick Action Checklist

- Shoot *stopped*, not "when the crosshair is on them." Your feet decide the first bullet, not your aim.
- Memorize your run speeds: Knife 250, pistols/SMGs 240, rifles 215, AWP 200 units per second — the gun changes how long you slide.
- First shot becomes trustworthy at roughly 34% of max speed (about 88 u/s with a rifle). You need to be under the line, not frozen.
- Counter-strafe by tapping the opposite key — it drops you under the threshold in one to two frames instead of about ten.
- Peek with a plan for your feet: jiggle and shoulder peeks for info, wide peeks for the kill, every one ending in a counter-strafe or a return to cover.
- Do not jump-shot with rifles or the AWP; airborne accuracy is the worst in the game. Use air time to reposition, then land and stop.
- Walk (Shift) to move silently; crouch (Ctrl) for geometry and off-angles, not as an accuracy crutch.
- Warm up with ten minutes of wall counter-strafe reps before you queue.
`,
  faq: [
    {
      question: 'What is counter-strafing in CS2?',
      answer:
        'Counter-strafing is tapping the opposite movement key to instantly cancel your velocity so you can fire an accurate first shot. If you strafe right with D, you tap A for a fraction of a second to zero out your momentum. This drops you under the accuracy threshold in about one to two frames instead of the roughly ten frames it takes to coast to a stop, which is why it wins so many first-shot duels.',
    },
    {
      question: 'Why are my bullets inaccurate while moving in CS2?',
      answer:
        'CS2 ties weapon accuracy to your velocity. At full run speed your bullets spread into a wide random cone, and only once you slow to roughly 34% of your weapon\'s max speed does the first shot become trustworthy. If you fire while still sliding after a peek, the game throws your first and most important bullet somewhere off target even if your crosshair is perfectly placed.',
    },
    {
      question: 'What are the movement speeds in CS2?',
      answer:
        'Run speed depends on what you are holding: the knife is fastest at 250 units per second, pistols and SMGs run at about 240, rifles like the AK-47 and M4 at 215, and the AWP is slowest at 200. Because the gun changes your top speed, the same movement input leaves you sliding for a different amount of time depending on your weapon.',
    },
    {
      question: 'How did CS2 sub-tick change counter-strafing?',
      answer:
        'Sub-tick timestamps your inputs at the exact instant they occur within a tick instead of rounding them to the next tick boundary. That means CS2 reads the precise moment your velocity crosses under the accuracy threshold, so a clean counter-strafe is rewarded more sharply and a sloppy one is punished more honestly. The mechanic itself is the same as in older Counter-Strike games; the timing window just feels more literal.',
    },
    {
      question: 'Can you jump-shot in CS2?',
      answer:
        'Not reliably with rifles or the AWP. Airborne accuracy is the worst in the game, so a jumping rifle shot is close to a random spread. Some pistols are more forgiving in the air, but building a habit around jump-shots costs more rounds than the occasional highlight is worth. Use air time to reposition, then land, counter-strafe, and shoot.',
    },
    {
      question: 'What is the difference between a jiggle peek and a wide peek in CS2?',
      answer:
        'A jiggle peek strafes out and immediately counter-strafes back behind cover without firing, used to gather information or bait an AWP shot at minimal risk. A wide peek swings far off the angle to take the fight in open space where the enemy\'s pre-aim is wrong; it is high risk and only works if you counter-strafe at the end of the swing to land your shot. Jiggle peeks are for info, wide peeks are for the kill.',
    },
    {
      question: 'Does crouching improve accuracy in CS2?',
      answer:
        'No. Crouching slows you and lowers your profile, but it does not fix bad movement — a crouch performed mid-slide is still inaccurate. Its real value is peeking under boosts, holding tight off-angles, and playing specific map geometry, not crouch-spraying every duel. Standing still and counter-strafing does far more for your first-shot accuracy than crouching does.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/counter-strike-2', anchor: 'Counter-Strike 2 coverage hub' },
    { href: '/blog/counter-strike-2/cs2-spray-control-guide', anchor: 'CS2 spray control guide' },
    { href: '/blog/counter-strike-2/cs2-rank-system-explained', anchor: 'CS2 rank system explained' },
    { href: '/blog/counter-strike-2/cs2-utility-guide', anchor: 'CS2 utility guide' },
  ],
  externalSources: [
    {
      url: 'https://counterstrike.fandom.com/wiki/Movement',
      title: 'Movement — Counter-Strike Wiki',
    },
    {
      url: 'https://www.steamanalyst.com/guides/cs2-shooting-peeking-movement-guide',
      title: 'CS2 Shooting, Peeking & Movement Guide — SteamAnalyst',
    },
    {
      url: 'https://www.counter-strike.net/cs2',
      title: 'Counter-Strike 2 — official Valve site',
    },
  ],
  tldr:
    'CS2 ties accuracy to velocity: your bullets spread wildly while moving and only the first shot is trustworthy once you slow under about 34% of your weapon\'s max speed (~88 u/s with a rifle). Run speed depends on your gun — knife 250, pistols/SMGs 240, rifles 215, AWP 200 units per second. Counter-strafing (tapping the opposite key) drops you under that threshold in one to two frames instead of ten, which is why it wins first-shot duels. Peek with a plan for your feet, never jump-shot rifles, and warm up with wall counter-strafe reps.',
};
