import type { BlogPost } from '../../blogTypes';

export const pubgScopeZeroingGuide: BlogPost = {
  slug: 'pubg-scope-zeroing-guide',
  game: 'pubg-battlegrounds',
  category: 'game-guides',
  topicCluster: 'pubg-weapons',
  tags: ['zeroing', 'bullet-drop', 'scopes', 'long-range', 'ballistics', 'dmr'],
  title: 'PUBG Scope Zeroing Guide: Beat Bullet Drop at Range',
  metaDescription:
    'Zeroing in PUBG explained: how bullet drop works, which scopes adjust with Page Up and Page Down, reading rangefinder reticles, and landing long-range shots.',
  excerpt:
    "Your long-range shots keep landing low because PUBG bullets fall the whole way there. Here's how zeroing, holdover, and the right scope turn a 300-meter guess into a repeatable kill.",
  featuredImagePrompt:
    'A first-person PUBG view down an 8x scope reticle zeroed on a distant ridgeline target, hash marks and rangefinder lines visible, long-range sniping moment',
  heroImage: '/images/blog/pubg-battlegrounds/pubg-scope-zeroing-guide/8x-scope.webp',
  heroImageAlt:
    "The view down a PUBG 8x CQBSS scope — the high-power glass whose zeroing you dial with Page Up and Page Down to compensate for bullet drop at long range.",
  imageSources: [
    {
      src: '/images/blog/pubg-battlegrounds/pubg-scope-zeroing-guide/8x-scope.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/8x_CQBSS_Scope',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-scope-zeroing-guide/4x-acog.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/4x_ACOG_Scope',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-scope-zeroing-guide/6x-scope.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/6x_Scope',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-scope-zeroing-guide/awm.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/AWM',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-12T00:00:00.000Z',
  lastUpdated: '2026-07-12T00:00:00.000Z',
  primaryKeyword: 'pubg scope zeroing',
  secondaryKeywords: [
    'pubg zeroing guide',
    'pubg bullet drop',
    'how to change zeroing pubg',
    'pubg long range shooting',
    'pubg 8x scope zeroing',
    'pubg holdover vs zeroing',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'zeroing-in-one-sentence', label: 'Zeroing, in one sentence', level: 2 },
    { id: 'how-bullet-drop-actually-works-in-pubg', label: 'How bullet drop actually works in PUBG', level: 2 },
    { id: 'which-scopes-let-you-adjust-zeroing', label: 'Which scopes let you adjust zeroing', level: 2 },
    { id: 'fixed-100-meter-scopes', label: 'Fixed 100-meter scopes', level: 3 },
    { id: 'adjustable-scopes-6x-8x-15x', label: 'Adjustable scopes: 6x, 8x, 15x', level: 3 },
    { id: 'how-to-change-your-zeroing-page-up-and-page-down', label: 'How to change your zeroing (Page Up and Page Down)', level: 2 },
    { id: 'reading-range-the-rangefinder-reticles', label: 'Reading range: the rangefinder reticles', level: 2 },
    { id: 'muzzle-velocity-and-why-it-changes-everything', label: 'Muzzle velocity and why it changes everything', level: 2 },
    { id: 'common-zeroing-mistakes', label: 'Common zeroing mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `You spot a guy jogging along a ridge 300 meters out, put your dot dead center on his chest, fire, and watch the tracer sail *under his feet* into the dirt. He keeps running. You weren't wrong about your aim — you were wrong about gravity. That bullet started dropping the instant it left the barrel, and by 300 meters it had fallen well below where you were pointing.

That gap between where you aim and where the round lands is the entire reason zeroing exists, and it's the most common reason mid- and long-range shots miss in PUBG: Battlegrounds. Up close it doesn't matter — the bullet arrives before it can fall. Past roughly 150 meters it matters a lot, and past 300 it *is* the fight. This guide covers how bullet drop works, which scopes let you dial it out, how to actually change your zeroing, and how to read the rangefinder reticles baked into every optic so your long shots stop landing in the mud.

None of this is patch-dependent trivia — ballistics are core to how the game has fired a bullet since launch. Pair it with your [recoil control](/blog/pubg-battlegrounds/pubg-recoil-control-guide) and the right glass from the [attachments guide](/blog/pubg-battlegrounds/pubg-attachments-guide), and your effective range jumps without your raw aim changing at all.

## Zeroing, in one sentence

Zeroing is the distance at which your scope's center point of aim equals your point of impact. Set your zero to 300 and, at 300 meters, putting the center of the reticle on a target's chest lands the round on their chest — the game has pre-compensated for how far the bullet falls over that distance. Aim center, hit center. That's the whole idea.

The catch: zeroing is only *correct* at the one distance you set. Zero to 300 and shoot someone at 100, and the round lands high. Zero to 100 and shoot someone at 400, and it lands low. Zeroing isn't a magic "always hit" toggle — it's you telling the scope how far away you expect to be shooting, so the reticle does the drop math for that range and nothing else.

## How bullet drop actually works in PUBG

Every bullet in PUBG is a physical projectile, not a hitscan line. When you fire, the round leaves the muzzle at a fixed speed (its muzzle velocity), travels across real time and distance, and falls the whole way under gravity. Two things follow from that:

- **The farther the target, the more the bullet falls.** Drop isn't linear — it accelerates. The difference between 100 and 200 meters is small; the difference between 300 and 400 is brutal.
- **Travel time is real.** At long range the bullet takes a noticeable fraction of a second to arrive, which is why you have to lead a moving target — aim where they'll *be*, not where they are.

Without any compensation, hitting a distant target means **holdover**: manually aiming *above* the target so the round arcs down onto them. Zeroing is the alternative — instead of eyeballing how high to hold, you tell the scope the range and aim dead center. Good players use both: zeroing for the range they're set up on, holdover for the in-between shots.

## Which scopes let you adjust zeroing

Here's the part that trips people up, because not every optic can be zeroed — and the rules changed a few updates back.

### Fixed 100-meter scopes

![The 4x ACOG scope reticle in PUBG, locked to a fixed 100-meter zero with a built-in rangefinder and holdover chevrons.](/images/blog/pubg-battlegrounds/pubg-scope-zeroing-guide/4x-acog.webp)

The **Red Dot, Holographic, 2x, 3x, and 4x ACOG are all locked at a fixed 100-meter zero.** As of the Miramar update, the 4x — along with the red dot and holo — lost its adjustable zeroing entirely and now sits permanently at 100. On these optics you cannot dial the drop out; you compensate the old-fashioned way, with holdover, using the hash marks and rangefinder lines on the reticle (covered below).

That's not a downgrade in disguise — the 4x is still one of the best all-round optics in the game and you grab it on sight. It just means that past ~150 meters with a 4x, you're holding over, not zeroing. For where each optic sits in a kit, the [attachments guide](/blog/pubg-battlegrounds/pubg-attachments-guide) and [best loadouts](/blog/pubg-battlegrounds/best-pubg-loadouts) lay it out.

### Adjustable scopes: 6x, 8x, 15x

![The 6x scope reticle in PUBG, an adjustable-zeroing optic that also dials down to 3x magnification for closer work.](/images/blog/pubg-battlegrounds/pubg-scope-zeroing-guide/6x-scope.webp)

The high-power glass — the **6x, the 8x CQBSS, and the 15x PM II** — is where zeroing lives. These are the scopes you adjust with Page Up and Page Down, stepping the zero out in 100-meter increments to match the range you're shooting. The 6x is a rare world spawn and the best zoomable optic for ARs and SMGs (it dials down to 3x for closer work); the 8x is a must-grab for long-range weapons; and the 15x is air-drop-only extreme-range glass. If you're running a DMR or a bolt-action — see the [best DMRs](/blog/pubg-battlegrounds/best-pubg-dmrs) and [best sniper rifles](/blog/pubg-battlegrounds/best-pubg-sniper-rifles) — this is the tier you want bolted on top.

## How to change your zeroing (Page Up and Page Down)

On PC, the default binds are **Page Up to increase your zeroing distance and Page Down to decrease it**, moving in 100-meter steps. Every scope starts at 100. On console it lives on the D-pad while aiming — check your control scheme, since the exact binding varies.

The routine in a real fight:

1. **Range the target.** Use the rangefinder reticle (next section) or estimate off the terrain. Call it 300 meters.
2. **Dial to match.** Tap Page Up twice to step 100 → 200 → 300.
3. **Aim center-mass and fire.** The scope has now compensated for 300 meters of drop, so a center hold lands center.
4. **Re-dial as the fight moves.** If they close to 150, your 300 zero now shoots high — drop it back down, or hold slightly low.

The honest reality: dialing mid-fight is slow, and against a moving target the range is changing constantly. Most players set a sensible standing zero for the band they're holding — say 200 for a mid-range ridge — and use holdover for shots off that number. Dialing shines when *you* are initiating on a static target and have a second to set up.

## Reading range: the rangefinder reticles

Zeroing is useless if you don't know the range, and PUBG builds a rangefinder into most scopes so you don't have to guess. Each reticle uses the size of a standing player to tell you how far away they are:

- **2x Aimpoint:** a standing person fills the outer circle at 100 meters, fits between the center dot and the outer ring at 200, and is obscured by the center dot at 300.
- **3x:** the horizontal hash marks range shoulder-width targets from roughly 100 out to 400 meters.
- **4x ACOG:** a built-in stadiametric rangefinder plus holdover chevrons down the reticle — the reason it punches above its zoom.
- **6x:** a stadiametric rangefinder tuned for standing targets between about 300 and 800 meters, which is exactly the band where you'll be dialing zero.

The takeaway isn't to memorize every hash — it's to understand that the lines *below* your center dot are holdover marks. On a fixed-100 scope, you range the target, then place the correct lower chevron on them instead of the center dot. On an adjustable scope, you range them, dial the zero, and use center. Same information, two ways to apply it — and knowing your target's range first is what makes either one work.

## Muzzle velocity and why it changes everything

![The AWM bolt-action sniper rifle in PUBG, whose .300 Magnum rounds carry superior ballistics and the least drag of any sniper.](/images/blog/pubg-battlegrounds/pubg-scope-zeroing-guide/awm.webp)

Here's the piece most guides skip: **two guns zeroed to the same distance do not shoot the same**, because bullet drop depends on how fast the round is moving. A faster bullet spends less time falling, so it drops less over the same distance.

The extremes are worth knowing. The **Mini-14 has the fastest initial bullet velocity of any gun in PUBG — quicker off the barrel than even the AWM** — which is a big part of why it's such a forgiving long-range DMR: less drop, less lead, more margin for a sloppy range estimate. The **AWM**, meanwhile, fires .300 Magnum rounds with superior ballistics and the least drag of any sniper, so it holds its velocity downrange better than anything else in the crate.

What this means practically: the slower your gun's bullet, the more drop and lead you eat at range, and the more your zeroing and holdover have to do. A 7.62mm DMR arcs harder than a 5.56mm one. High-velocity guns paired with an 8x are the easiest long-range platform because they need the least compensation. If your shots keep landing low even after you zero correctly, your gun's bullet is slower than you assumed — respect the arc.

## Common zeroing mistakes

- **Forgetting you dialed.** You zeroed to 400 for one shot, the fight collapsed to 80 meters, and now every round sails over their head. Reset to 100 after a long-range engagement so your next close fight isn't a surprise.
- **Trying to zero a fixed scope.** Mashing Page Up with a 4x does nothing — it's locked at 100. Know which glass you're running before you rely on dialing.
- **Ignoring lead.** Zeroing fixes vertical drop, not horizontal travel time. A target sprinting perpendicular at 300 meters still needs you to aim ahead of them; the bullet takes time to get there.
- **Over-dialing on a moving fight.** Micro-adjusting zero every 50 meters during a live duel just gets you killed mid-keystroke. Pick a band, hold it, and use holdover for the rest — the same read-the-fight discipline as [peeking and crosshair placement](/blog/pubg-battlegrounds/pubg-peeking-guide).
- **Never practicing in the range.** The Camp Jackal training range exists specifically to let you feel drop, zeroing, and holdover with every scope. Ten minutes there beats learning it at 400 meters with someone shooting back — and dial in your [sensitivity](/blog/pubg-battlegrounds/pubg-settings-sensitivity-guide) while you're at it.

## Quick Action Checklist

- [ ] Remember bullets fall the whole way — hold or zero for drop past ~150 meters
- [ ] Grab a 6x or 8x for any long-range weapon; those are the scopes you can actually zero
- [ ] Know your fixed glass: red dot, holo, 2x, 3x, and 4x are locked at 100 meters
- [ ] Range the target off the reticle, then Page Up / Page Down in 100-meter steps to match
- [ ] Aim center-mass once zeroed; use the lower chevrons as holdover on fixed scopes
- [ ] Reset your zero to 100 after a long shot so your next close fight isn't a whiff
- [ ] Lead moving targets — zeroing kills drop, not travel time
- [ ] Prefer high-velocity guns like the Mini-14 and AWM at range; they need the least compensation`,
  faq: [
    {
      question: 'What does zeroing do in PUBG?',
      answer:
        "Zeroing sets the distance at which your scope's center point of aim matches your point of impact, compensating for bullet drop over that range. If you zero to 300 meters and put the center of your reticle on a target 300 meters away, the round lands where you aimed instead of falling short. It only compensates correctly at the distance you set — a 300-meter zero shoots high on a close target and still low on a much farther one, so you match your zero to the range you expect to fight at.",
    },
    {
      question: 'How do you change zeroing in PUBG?',
      answer:
        'On PC, the default keys are Page Up to increase your zeroing distance and Page Down to decrease it, moving in 100-meter steps. Every scope starts zeroed at 100 meters. On console the adjustment is mapped to the D-pad while aiming down sights, though the exact binding depends on your control scheme. Range your target first, dial the zero to match, then aim center-mass and fire.',
    },
    {
      question: 'Which PUBG scopes have adjustable zeroing?',
      answer:
        'Only the high-power scopes let you adjust zeroing: the 6x, the 8x CQBSS, and the 15x PM II. The Red Dot Sight, Holographic Sight, 2x, 3x, and 4x ACOG are all locked at a fixed 100-meter zero — the 4x lost its adjustable zeroing back in the Miramar update. On those fixed optics you compensate for range with holdover, using the reticle chevrons and rangefinder lines instead of dialing.',
    },
    {
      question: 'What is the difference between zeroing and holdover in PUBG?',
      answer:
        'Zeroing tells the scope a distance so a center-of-reticle aim lands on target at that range, doing the drop math for you. Holdover is when you manually aim above the target — using the lower hash marks or chevrons on the reticle — to arc the bullet down onto them without changing the zero. Adjustable scopes let you zero and aim center; fixed 100-meter scopes force you to hold over. Skilled players use both: a standing zero for their expected range and holdover for shots off that number.',
    },
    {
      question: 'Why do my long-range shots land low in PUBG even when I aim right?',
      answer:
        'Because PUBG bullets are physical projectiles that fall under gravity the entire way to the target, so at range they land below where you pointed unless you compensate. Fix it by zeroing an adjustable 6x or 8x scope to the target range, or by holding over with a fixed scope. The effect is worse with slower rounds — a 7.62mm DMR drops harder than a fast 5.56mm one, and the Mini-14 and AWM have among the flattest trajectories in the game because their bullets are fast.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/pubg-battlegrounds', anchor: 'PUBG: Battlegrounds coverage hub' },
    { href: '/blog/pubg-battlegrounds/best-pubg-sniper-rifles', anchor: 'Best PUBG sniper rifles' },
    { href: '/blog/pubg-battlegrounds/best-pubg-dmrs', anchor: 'Best PUBG DMRs' },
    { href: '/blog/pubg-battlegrounds/pubg-attachments-guide', anchor: 'PUBG attachments guide' },
    { href: '/blog/pubg-battlegrounds/pubg-recoil-control-guide', anchor: 'PUBG recoil control guide' },
    { href: '/blog/pubg-battlegrounds/pubg-settings-sensitivity-guide', anchor: 'PUBG settings and sensitivity guide' },
  ],
  externalSources: [
    {
      url: 'https://www.pubg.com/',
      title: 'PUBG: Battlegrounds — official site',
    },
    {
      url: 'https://pubg.fandom.com/wiki/4x_ACOG_Scope',
      title: "4x ACOG Scope (fixed 100m zeroing) — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
    {
      url: 'https://pubg.fandom.com/wiki/8x_CQBSS_Scope',
      title: "8x CQBSS Scope — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
  ],
  tldr:
    "Zeroing sets the range at which a center-reticle aim lands on target, compensating for the bullet drop PUBG applies to every shot. Only the 6x, 8x, and 15x scopes adjust zeroing — with Page Up and Page Down in 100-meter steps — while the red dot, holo, 2x, 3x, and 4x are locked at 100 meters and rely on holdover. Range your target off the reticle, dial or hold to match, and remember faster guns like the Mini-14 and AWM drop the least.",
};
