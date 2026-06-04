import type { BlogPost } from '../../blogTypes';

export const windArcherCookieToppingsBuild: BlogPost = {
  slug: 'wind-archer-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'wind-archer-build',

  title: 'Wind Archer Cookie Toppings Build & Guide',
  metaDescription:
    'Wind Archer Cookie build guide for June 2026: the topping spread, substat priorities, beascuit and tart picks, Magic Candy notes, and his best Arena teams.',
  excerpt:
    "Wind Archer is a Legendary Ranged carry who hunts the enemy's highest-ATK cookies, stuns them, and ignores a chunk of their DMG Resist on the way through. He's a precision sniper, not an AoE wave — and the build follows. Here is the full sheet: toppings, substats, beascuit, tart, Magic Candy, and team fit.",
  featuredImagePrompt:
    'Wind Archer Cookie center frame, a green-cloaked archer drawing a glowing arrow of wind with a swirling cyclone behind him, emerald and pale-green palette with gusting leaves and light streaks, Cookie Run: Kingdom key-art style, painterly cel-shaded, dramatic rim lighting',
  heroImage: '/images/cookies/wind-archer-cookie.png',
  heroImageAlt: 'Wind Archer Cookie, the Legendary Ranged Wind-element carry this June 2026 toppings build guide is for.',
  imageSources: [
    { src: '/images/cookies/wind-archer-cookie.png', sourceUrl: 'owned-asset' },
    {
      src: '/images/blog/cookie-run-kingdom/wind-archer-cookie-toppings-build/wind-archer-cookie.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Wind_Archer_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    { src: '/images/gear/toppings/caramel.png', sourceUrl: 'owned-asset' },
    { src: '/images/cookies/hollyberry-cookie.png', sourceUrl: 'owned-asset' },
  ],

  publishDate: '2026-06-04T00:00:00.000Z',
  lastUpdated: '2026-06-04T00:00:00.000Z',

  primaryKeyword: 'wind archer cookie toppings',
  secondaryKeywords: [
    'wind archer cookie build',
    'best toppings wind archer',
    'wind archer beascuit',
    'wind archer magic candy',
    'crk wind archer guide',
    'wind archer cookie team',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 11,

  toc: [
    { id: 'who-wind-archer-actually-is', label: 'Who Wind Archer actually is', level: 2 },
    { id: 'what-his-kit-actually-does', label: 'What his kit actually does', level: 2 },
    { id: 'the-standard-wind-archer-topping-build', label: 'The standard Wind Archer topping build', level: 2 },
    { id: 'substat-priorities-without-the-fake-numbers', label: 'Substat priorities without the fake numbers', level: 2 },
    { id: 'the-atk-spd-alternate-build', label: 'The ATK SPD alternate build', level: 2 },
    { id: 'beascuit-and-tart-picks', label: 'Beascuit and tart picks', level: 2 },
    { id: 'magic-candy-for-wind-archer', label: 'Magic Candy for Wind Archer', level: 2 },
    { id: 'team-comps-and-where-he-fits', label: 'Team comps and where he fits', level: 2 },
    { id: 'common-wind-archer-build-mistakes', label: 'Common Wind Archer build mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Wind Archer is the cookie that decides Arena games by who he chooses to shoot. He doesn't drop a screen-wide nuke like Sea Fairy and he doesn't brawl on the front line like a Beast. He's a Ranged sniper who locks onto the enemies with the highest ATK — usually their carry — stuns them, and punches through a slice of their damage resistance on the way in. Build him to take advantage of that targeting and he wins fights before the enemy line ever fires. Build him like a generic DPS and you waste the most interesting thing about him.

This is the June 2026 build sheet for him: toppings, substats, beascuit, tart, Magic Candy, and team fit, plus the mistakes that turn a precision carry into a body that flings arrows at nothing. Where the community has invented exact substat roll-targets, I'm giving you the direction instead of a fake number — because the wrong number gets copy-pasted forever and the direction is what actually moves your damage.

## Who Wind Archer actually is

![Wind Archer Cookie drawing his Arrow of Gale, the Legendary Ranged Wind-element carry this build is for.](/images/blog/cookie-run-kingdom/wind-archer-cookie-toppings-build/wind-archer-cookie.webp)

Get the identity right before you spend a single topping. Wind Archer Cookie is **Legendary rarity**, his class is **Ranged**, and his position is prioritized in the **Rear** of the formation. He's a Wind-element cookie — one of the Guardians of Nature — and he's a Crystal Jam cookie, which is why he shows up in so many high-tier Arena and Beast-Yeast discussions. He is not an Ancient and not a Beast; he's a Legendary, which makes him hard to pull but obtainable without the months-long soulstone grind an Ancient demands.

The important framing: he's a **damage dealer**, full stop. The stun and the debuffs on his kit make him look like a hybrid control cookie, and people misbuild him because of it. They're riders. His job is to delete the enemy's most dangerous cookie, and everything he brings — the stun, the resistance bypass, the targeting — exists to make that one kill happen cleanly. His official recommended toppings on the wiki are the Caramel / Raspberry / Apple Jelly wind set, which already tells you the build is about damage and survivability, not utility.

## What his kit actually does

His skill is **Last Wind**, and it has a short **6-second base cooldown** — unusually fast for a Legendary carry, which matters a lot for how you gear him. When it fires, he transforms, strips all debuffs off himself, and becomes immune to debuffs (Curse being the exception) for the duration. That self-cleanse plus immunity window is real survivability baked into the kit.

The damage comes in layers:

- **Arrow of Gale** opens with Wind damage that **ignores 40% of the target's DMG Resist**, applies a **2.5-second stun**, and stamps the *Trace of the Wind* debuff that lowers the damage the hit enemy can deal. A 2.5-second stun on the enemy's biggest threat is the swing that wins fast Arena exchanges.
- **Pursuer's Arrow** is the part that defines his targeting: while transformed, his attacks hunt **up to five enemies with the highest ATK** and stack a Pursuer debuff. When Pursuer maxes out it explodes for damage proportional to the target's Max HP, splashing nearby enemies. Translation: he naturally aims at the enemy carry and tanky bricks, not whatever's standing closest.
- He buffs **himself** the whole time — a **+30% Max HP** boost on entering battle, a *Tailwind* stack (DMG Resist and ATK SPD, up to five stacks) from his regular attacks, and *Mighty Gale* stacks that raise his own ATK and his resistance-bypass as he keeps shooting.

Read it as a whole and the build writes itself: he's a self-sufficient Ranged carry who ramps his own damage and survivability while sniping the enemy's win condition. The Max HP boost and Tailwind mean you don't have to fully fund his survival through gear, which frees your toppings to push the part that wins — his damage.

## The standard Wind Archer topping build

![Caramel topping icon, part of the ATK-and-survivability set that backs the standard Wind Archer build.](/images/gear/toppings/caramel.png)

**5x ATK toppings (the Searing Raspberry set).** That's the standard, and it's the consensus pick for a Ranged carry whose value is the size of his hits.

The standard:

- **Toppings:** 5x Searing Raspberry (ATK)
- **Beascuit:** an ATK-priority beascuit
- **Tart:** an ATK tart for max damage; a cooldown tart only if you specifically want his transform up sooner
- **Magic Candy:** equipped and leveled

The reason ATK wins over a defensive set is that his survivability is partly *baked into his kit* — the +30% Max HP, the Tailwind DMG Resist stacks, and the debuff-immunity window during Last Wind all cover his front of the risk. So you spend your topping slots pushing the damage and let his own skill handle the survival floor, then backfill a little resistance through substats. You're not choosing damage over survival; you're letting his kit fund the survival and using gear to raise the ceiling.

If you're new to how topping sets and substats interact, the [toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide) covers the fundamentals this build assumes.

## Substat priorities without the fake numbers

Substats are where most of a build's quality lives, and they're also where the CRK community most loves to invent exact percentages nobody can actually verify. I'm not going to hand you a fake "you need exactly 22.4% ATK" target. Here's the honest version.

Priority order on your substats:

1. **ATK%** — the priority, on as many toppings as you can manage. This is the stat that makes every arrow hit harder, including the Max-HP-proportional Pursuer explosion. Take ATK% over flat ATK every time; the percentage scales with his base stat and the flat number doesn't.
2. **Cooldown** — his secondary, and it matters more on him than on a slow nuker because Last Wind is already a short 6-second skill. Shaving cooldown gets the stun, the transform, and the debuff-immunity window back online faster, which in Arena is the difference between locking the enemy carry down on a loop and leaving a gap. Take it where it doesn't cost you ATK%.
3. **ATK SPD** — a real consideration on him specifically, because his Pursuer's Arrow fires with his regular attacks while transformed. More attack speed means more Pursuer stacks and more Mighty Gale ramp. It's a legitimate third stat here in a way it isn't on a pure-burst cookie.

The practical rule: **roll for ATK% first, take cooldown where it doesn't cost you ATK%, value ATK SPD as a real bonus, and don't chase a perfect set.** Substats have diminishing returns past a healthy spread — once his arrows are hitting hard and his skill is cycling on a tight timer, the effort is better spent building your next cookie than rerolling for a fraction of a percent. Hit "he kills the enemy carry on a loop" and stop.

## The ATK SPD alternate build

There's a legitimate second route worth knowing: an **ATK SPD-leaning build** (the Swift Chocolate set, or an ATK SPD split) that leans into how his Pursuer's Arrow rides his regular attacks. The more often he auto-attacks while transformed, the faster he stacks Pursuer toward its explosion and the faster Mighty Gale ramps his own ATK and resistance-bypass.

It's a real option, not a trap — but it's the situational pick. For the general case, the Searing Raspberry ATK build is the default because raw ATK% scales *every* part of his kit, including the Max-HP-proportional Pursuer hit, while attack speed only accelerates the ramp. If you only gear him one way, gear him ATK. If you're specifically building around the Pursuer ramp in a long fight or a particular Arena bracket, the ATK SPD route is the deliberate trade — just commit to it rather than mixing the two halfway and ending up with a build that does neither well.

## Beascuit and tart picks

The beascuit slot follows the same logic as the toppings: **prioritize ATK.** It's another place to push the size of his hits, and that's the lever that scales his value as a carry.

Stat priority on the beascuit: **ATK% > Cooldown > ATK SPD or DMG Resist.** ATK% for the damage, cooldown to keep Last Wind cycling, and either a touch of attack speed to feed the Pursuer ramp or a little resistance if he's getting sniped before he transforms. A high-quality ATK beascuit is the ceiling here, but any beascuit you can stack ATK on does the core job. Don't bring a utility-flavored beascuit to a carry build — it looks supportive and it's actually a smaller arrow.

For the tart, two routes matched to your topping build:

- **ATK tart.** The pairing for the standard ATK build. It stacks with your ATK toppings to push every arrow as hard as it goes. This is the default.
- **Cooldown tart.** For when getting Last Wind — and its stun and debuff-immunity — online sooner genuinely wins the game, typically in a fast Arena bracket. Don't mix a cooldown tart into a full ATK set unless you've deliberately chosen tempo over raw damage. Pick a lane.

For treasures, lead with anything that amplifies damage or gets him casting sooner — battle-start cooldown reduction so the stun lands in the opening window, and damage-amp treasures that multiply every hit. The [treasures guide](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide) covers the current best-in-slot options and how they stack.

## Magic Candy for Wind Archer

Magic Candy is where a Legendary carry goes from "good" to "why did their whole back row just evaporate," and Wind Archer is no exception. His Magic Candy deepens the kit that's already his identity — more out of his Wind damage and the Pursuer mechanic — which on a ramping carry compounds across every attack he gets off, not just the opening cast.

Leveling priority is the usual: get it equipped and leveled to a functional baseline before you call the build done, then push it higher if he's a main carry in your serious Arena or Beast-Yeast teams. Because his damage builds across a fight rather than landing in one burst, every level of Magic Candy is amplifying a cookie that's shooting on a loop — it pays off cleanly. For where he should sit in your overall Soul Essence spending, the [Magic Candy priority guide](/blog/cookie-run-kingdom/crk-magic-candy-priority-guide) has the framework. A built Legendary carry generally sits near the front of that line.

## Team comps and where he fits

![Hollyberry Cookie raising her shield, the kind of durable front line that buys Wind Archer the room to ramp his attacks in the rear.](/images/cookies/hollyberry-cookie.png)

Wind Archer is more self-sufficient than most Legendary carries — the Max HP boost, the Tailwind resistance, and the debuff-immunity window mean he doesn't fold the instant he's looked at. But "harder to kill than a glass cannon" isn't "build him solo." The team's job is to buy him the seconds he needs to transform and start ramping:

- **Front line:** a real tank so he's never the first thing the enemy reaches. Anything from the [tank tier list](/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked) works — Hollyberry or a damage-reduction tank to eat the opening exchange while he gets Last Wind off.
- **A buffer or debuffer:** his Wind damage is multiplicative with a team ATK buff and stacks cleanly with a DEF-shred debuff, so a support from the [support tier list](/blog/cookie-run-kingdom/best-crk-support-cookies-ranked) — Cotton's team ATK buff is the classic pairing — raises his ceiling without competing for his slot. Note that he already ignores 40% of the target's DMG Resist himself, so a resistance-shred debuff and his own bypass compound nicely against tanky enemy front lines.
- **A healer or a second damage source:** flex this by mode. In long Beast-Yeast fights a healer keeps the team standing while he ramps; in fast Arena you might bring a second threat so the enemy can't simply body-block him off their carry.

He slots cleanly into the shells the [Kingdom Arena meta team](/blog/cookie-run-kingdom/kingdom-arena-meta-team) and the [Guild Battle teams guide](/blog/cookie-run-kingdom/guild-battle-teams) lay out — a durable front, an amplifier, and Wind Archer in the rear hunting the enemy carry. Keep him in the rear. He's Ranged; up front he eats hits meant for a tank and loses the ramp time his kit is built around.

## Common Wind Archer build mistakes

In rough order of how often they show up:

1. **Building him as a control cookie because of the stun.** The stun is a rider on a damage skill, not the point. Stacking utility or survivability over ATK keeps the crowd control and throws away the kills, which is the entire reason to run him. Build the damage.

2. **Ignoring cooldown entirely.** Last Wind is a short 6-second skill, and a lot of his value is getting the stun and the debuff-immunity window back on a loop. Pure ATK with zero cooldown leaves tempo on the table, especially in Arena. ATK% first, but don't zero out cooldown.

3. **An ATK SPD-only build for the general case.** The attack-speed route is real but situational. Raw ATK% scales every part of his kit, including the Max-HP-proportional Pursuer hit; attack speed only accelerates the ramp. Lead with ATK unless you've deliberately chosen the Pursuer-ramp build.

4. **A utility-flavored beascuit on a carry.** Same mistake as the toppings, different slot. The beascuit is an ATK slot first; cooldown and a little attack speed are the secondaries.

5. **Mixing a cooldown tart into a full ATK set without a reason.** Pick a lane. The ATK build wants the ATK tart; only the deliberate tempo variant wants cooldown.

6. **Taking flat ATK over ATK%.** The percentage scales with his base ATK; the flat value doesn't. On a Legendary with a high base stat, ATK% is meaningfully better — and it's the stat that powers the Pursuer explosion too.

## Quick Action Checklist

- Equip 5x Searing Raspberry (ATK) as the standard build; the ATK SPD / Swift Chocolate route is the situational alternate
- Prioritize ATK% substats, then cooldown where it doesn't cost ATK% (his skill is short, so tempo matters), then value ATK SPD to feed the Pursuer ramp — and don't reroll forever
- Take ATK% over flat ATK every time
- Run an ATK-priority beascuit (ATK% > Cooldown > ATK SPD / DMG Resist), not a utility one
- Pair an ATK tart with the standard build; only use a cooldown tart for the deliberate tempo variant
- Lead with damage-amp and battle-start cooldown treasures
- Equip and level Magic Candy; push it higher if he's a main carry — it deepens the Wind damage and the Pursuer mechanic
- Keep him in the rear, never front
- Build the team to buy him ramp time: a real tank, an ATK buffer like Cotton, and a flex slot — and remember his 40% DMG Resist bypass stacks with a DEF-shred debuff`,

  faq: [
    {
      question: 'What are the best toppings for Wind Archer Cookie?',
      answer:
        "5x Searing Raspberry (ATK) is the standard build, because Wind Archer is a Ranged carry whose value is the size of his hits — including the Max-HP-proportional Pursuer explosion. Prioritize ATK% substats, then cooldown where it doesn't cost you ATK% (his Last Wind skill is a short 6-second cooldown, so tempo matters), then ATK SPD to feed his Pursuer ramp. An ATK SPD-leaning Swift Chocolate set is a legitimate alternate for building around the Pursuer mechanic, but the ATK build is the default for most content.",
    },
    {
      question: 'What class and rarity is Wind Archer Cookie?',
      answer:
        "Wind Archer Cookie is a Legendary-rarity, Ranged-class cookie whose position is prioritized in the Rear of the formation. He is a Wind-element Guardian of Nature and a Crystal Jam cookie. He is not an Ancient and not a Beast — he's a Legendary, which makes him hard to pull but obtainable without the months-long soulstone grind an Ancient demands. Despite the stun on his skill, he's a damage dealer, not a control cookie: his job is to snipe the enemy's highest-ATK threats.",
    },
    {
      question: "What does Wind Archer Cookie's skill do?",
      answer:
        "His skill, Last Wind, has a short 6-second base cooldown. On cast he transforms, removes all debuffs from himself, and becomes immune to debuffs except Curse for the duration. His Arrow of Gale deals Wind damage that ignores 40% of the target's DMG Resist, stuns for 2.5 seconds, and applies a debuff that lowers the enemy's damage. While transformed, his Pursuer's Arrow hunts up to five of the highest-ATK enemies and stacks a Pursuer debuff that explodes for Max-HP-proportional damage. He also buffs himself with +30% Max HP on entry plus Tailwind (DMG Resist and ATK SPD) and Mighty Gale (ATK and resistance-bypass) stacks.",
    },
    {
      question: 'Should I build Wind Archer for ATK or cooldown?',
      answer:
        "ATK first, but don't ignore cooldown. ATK% scales every part of his kit, including the Max-HP-proportional Pursuer explosion, so it's the priority. But Last Wind is a short 6-second skill and much of his value is keeping the stun and debuff-immunity window cycling, so cooldown is a stronger secondary on him than on a slow nuker — take it where it doesn't cost you ATK%. Attack speed is a real third consideration because his Pursuer's Arrow fires with his regular attacks.",
    },
    {
      question: 'What team should I run with Wind Archer Cookie?',
      answer:
        "Build the team to buy him the seconds he needs to transform and ramp, since his damage builds across a fight. Put a real tank up front — Hollyberry or a damage-reduction tank — so he's never the first one reached, add an ATK buffer like Cotton to multiply his damage, and flex a healer or a second threat by mode. He already ignores 40% of the target's DMG Resist, so a DEF-shred debuffer stacks cleanly with his own bypass against tanky front lines. Keep him in the rear where his Ranged kit is designed to work.",
    },
    {
      question: 'Does Wind Archer Cookie need Magic Candy?',
      answer:
        "If he's a main carry in your serious Arena or Beast-Yeast teams, yes. His Magic Candy deepens his Wind damage and the Pursuer mechanic, and because his damage builds across a fight rather than landing in one burst, every level compounds across the attacks he gets off. Get it equipped and leveled to a functional baseline first, then push it higher as he becomes a core carry. As a built Legendary carry, he generally sits near the front of the Magic Candy priority order.",
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/crk-toppings-guide', anchor: 'toppings guide' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide', anchor: 'treasures guide' },
    { href: '/blog/cookie-run-kingdom/crk-magic-candy-priority-guide', anchor: 'Magic Candy priority guide' },
    { href: '/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked', anchor: 'DPS tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked', anchor: 'tank tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-support-cookies-ranked', anchor: 'support tier list' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team' },
    { href: '/blog/cookie-run-kingdom/guild-battle-teams', anchor: 'Guild Battle teams guide' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Wind_Archer_Cookie', title: 'Cookie Run: Kingdom Wiki — Wind Archer Cookie' },
    { url: 'https://www.pocketgamer.com/cookie-run-kingdom/', title: 'Pocket Gamer — Cookie Run: Kingdom guides' },
    { url: 'https://www.thegamer.com/cookie-run-kingdom-best-toppings/', title: 'TheGamer — Cookie Run: Kingdom toppings guides' },
  ],

  tldr:
    "Wind Archer Cookie is a Legendary Ranged carry, not a control cookie — his stun and debuffs are riders on a kit built to snipe the enemy's highest-ATK threats. His Last Wind skill (a short 6-second cooldown) stuns, ignores 40% of the target's DMG Resist, and fires Pursuer's Arrows that hunt up to five high-ATK enemies for Max-HP-proportional damage, while self-buffing his Max HP, DMG Resist, and ATK. Run 5x Searing Raspberry (ATK) toppings with ATK%-priority substats — then cooldown (his skill is short, so tempo matters) and ATK SPD to feed the Pursuer ramp — plus an ATK beascuit and ATK tart. An ATK SPD / Swift Chocolate set is a situational alternate. Level his Magic Candy if he's a carry, keep him in the rear, and pair him with a tank and an ATK buffer like Cotton.",
};
