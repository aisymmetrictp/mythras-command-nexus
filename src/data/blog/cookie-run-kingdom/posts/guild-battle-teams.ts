import type { BlogPost } from '../../blogTypes';

export const guildBattleTeams: BlogPost = {
  slug: 'guild-battle-teams',
  game: 'cookie-run-kingdom',
  category: 'team-builds',
  topicCluster: 'guild-battle',

  title: 'Guild Battle Teams (May 2026) — Best Comps for All 4 Bosses',
  metaDescription:
    'Best Guild Battle teams in Cookie Run: Kingdom for May 2026. Top comps, treasure picks, and F2P swaps for Red Velvet Dragon, Avatar of Destiny, Machine-God, and Living Abyss.',
  excerpt:
    'A boss-by-boss breakdown of the strongest Guild Battle teams in CRK right now, including the Stinging Fizz Seltzer + Menthol combo, the Poison stack for Red Velvet Dragon, and F2P swaps that still clear top tiers.',
  featuredImagePrompt:
    'A widescreen Cookie Run: Kingdom Guild Battle scene with four boss silhouettes (a red dragon, a celestial avatar, a mechanical god, and a void abyss) facing off against a glowing five-cookie team formation, lit in candy-neon colors against a dark cosmic background — vibrant, cinematic, no text overlays.',

  publishDate: '2026-05-23T00:00:00.000Z',
  lastUpdated: '2026-05-23T00:00:00.000Z',

  primaryKeyword: 'guild battle teams cookie run kingdom',
  secondaryKeywords: [
    'CRK guild battle',
    'red velvet dragon team',
    'avatar of destiny team',
    'machine god guild battle',
    'seltzer menthol comp',
    'living abyss guild battle',
    'best guild battle teams',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'monthly',
  evergreen: false,
  readingTimeMin: 12,

  toc: [
    { id: 'boss-team-cheat-sheet', label: 'Boss-team cheat sheet', level: 2 },
    { id: 'how-guild-battle-scoring-works-in-2026', label: 'How Guild Battle scoring works in 2026', level: 2 },
    { id: 'red-velvet-dragon-poison-comp', label: 'Red Velvet Dragon — Poison comp', level: 2 },
    { id: 'avatar-of-destiny-sustain-comp', label: 'Avatar of Destiny — Sustain comp', level: 2 },
    { id: 'machine-god-stinging-fizz-comp', label: 'Machine-God — Stinging Fizz comp', level: 2 },
    { id: 'living-abyss-standard-comp', label: 'Living Abyss — Standard comp', level: 2 },
    { id: 'f2p-friendly-swaps-for-each-boss', label: 'F2P-friendly swaps for each boss', level: 2 },
    { id: 'treasures-by-boss', label: 'Treasures by boss', level: 2 },
    { id: 'how-to-maximize-damage-per-attempt', label: 'How to maximize damage per attempt', level: 2 },
    { id: 'warm-up-rotations', label: 'Warm-up rotations', level: 3 },
    { id: 'manual-vs-auto', label: 'Manual vs auto', level: 3 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Three attempts per boss, four bosses, one weekly leaderboard — and the gap between a top-cut guild and a mid-tier one usually comes down to whether you brought the right anchor cookie. Guild Battle in **v7.4 Timeline of Fate** rewards specialization harder than ever: bringing a generic "good team" into Red Velvet Dragon when you should be stacking Poison is the difference between 30B damage and 80B+ on the same roster.

This is the cheat sheet — comps, treasures, cooldown order, and the F2P swaps that still clear S-tier scores — for every Guild Battle boss in CRK as of **May 2026**. If you're not sure which cookie to pull next, this guide will tell you which boss they unlock and how much they'll lift your score.

## Boss-team cheat sheet
Skim this first. Each row tells you the boss, what it's vulnerable to, the anchor cookie that defines the comp, and why that pick is non-negotiable.

| Boss | Weakness | Anchor cookie | Why it wins |
|---|---|---|---|
| **Red Velvet Dragon** | Poison | [Pomegranate Cookie](/gear-guide/pomegranate-cookie) | Stacks Poison faster than any other DPS; multiplies [Poison Mushroom Cookie](/gear-guide/poison-mushroom-cookie) damage. |
| **Avatar of Destiny** | Sustain checks (HP drain phases) | [Sugar Swan Cookie](/gear-guide/sugar-swan-cookie) | Strongest single-target healer in the game; carries the team through drain windows. |
| **Machine-God** | Bomber + Support synergy | [Seltzer Cookie](/gear-guide/seltzer-cookie) | Pairs with [Menthol Cookie](/gear-guide/menthol-cookie) for the "Stinging Fizz" buff loop — S-tier damage ceiling. |
| **Living Abyss** | Chaos / debuff stacking | [Dark Enchantress Cookie](/gear-guide/dark-enchantress-cookie) | Chaos DPS that doubles as a debuffer; pairs cleanly with [Timekeeper Cookie](/blog/cookie-run-kingdom/timekeeper-toppings) lock windows. |

> **Tip:** If your guild assigns bosses, lock in your anchor cookie before anyone else builds. The whole team formation rotates around them — picking the wrong anchor wastes everyone's treasure investment for the week.

## How Guild Battle scoring works in 2026
The fundamentals haven't shifted much since the early CRK days — three attempts per boss per reset, with your total damage feeding both your personal score and the guild's collective rank. What _has_ shifted in 2026 is how the **damage multiplier window** behaves, plus how aggressively the seasonal Battle Power rating caps your effective output if you bring an underleveled cookie.

A clean attempt now looks like this:

1. **Pre-battle**: lock in your treasures, confirm your beascuits are slotted, and check that every cookie is at least one level above the boss's recommended Power.
2. **Opener (0-10 seconds)**: stack initial buffs and trigger your warm-up rotation (more below) so your first damage tick lands inside the multiplier window.
3. **Mid-fight (10-45 seconds)**: cycle treasure cooldowns and anchor-cookie skills in the order their effects compound, not the order they come off cooldown.
4. **Burst window (final 15 seconds)**: pop everything left. Almost all top-cut damage shows up here.

Each boss has a "soft cap" — a damage threshold past which scaling drops sharply. Knowing where yours sits stops you from over-investing skill cubes into a comp that's already plateaued.

> **Warning:** If your Battle Power is more than 30% below the recommended threshold, your damage gets _heavily_ penalized regardless of skill execution. Level cookies and gear toppings before chasing top comps.

## Red Velvet Dragon — Poison comp
Red Velvet Dragon is the original Guild Battle boss and still one of the most lopsided in terms of element advantage. He takes massively amplified damage from **Poison stacks**, which is why the canonical comp packs two Poison-applying cookies plus a tank that survives the breath phases.

| Position | Cookie | Role | Notes |
|---|---|---|---|
| Front | [Hollyberry Cookie](/gear-guide/hollyberry-cookie) | Tank | Aegis variant if you have it; soaks breath phase chip damage. |
| Front | [Black Sapphire Cookie](/gear-guide/black-sapphire-cookie) | Bruiser / debuffer | Adds defense shred so Poison ticks for more. |
| Middle | [Poison Mushroom Cookie](/gear-guide/poison-mushroom-cookie) | DoT enabler | Primary Poison applier — keep stacks rolling. |
| Back | [Pomegranate Cookie](/gear-guide/pomegranate-cookie) | DPS amplifier | Boosts Poison damage; this is your real damage source. |
| Back | [Millennial Tree Cookie](/gear-guide/millennial-tree-cookie) | Buff / heal | Keeps the front line up and amplifies damage on top of Pom. |

**Cooldown order**: open with Poison Mushroom to lay stacks, follow with Pomegranate to amplify, then Black Sapphire for the defense shred, Hollyberry as needed for survival, Millennial Tree for the late burst window. Re-cycle in the same order — Poison stacks decay fast if you let them lapse.

> **Tip:** If your Pomegranate Cookie is below 6-star, lean harder on Poison Mushroom's uptime instead of trying to burst with Pom. The DoT floor on Red Velvet Dragon is more forgiving than the burst ceiling.

## Avatar of Destiny — Sustain comp
Avatar of Destiny is the Guild Battle's sustain check — repeated HP-drain windows that wipe under-healed teams in seconds. The comp is structured around keeping a single front-line tank alive through the worst windows while two DPS cookies pump damage uninterrupted.

| Position | Cookie | Role | Notes |
|---|---|---|---|
| Front | [Hollyberry Cookie](/gear-guide/hollyberry-cookie) | Tank | Highest single-target HP/DEF stat package in the game. |
| Middle | [Sugar Swan Cookie](/gear-guide/sugar-swan-cookie) | Primary healer | Carries the comp through drain phases — non-negotiable anchor. |
| Middle | [Millennial Tree Cookie](/gear-guide/millennial-tree-cookie) | Secondary heal / buff | Damage buff plus the chunk-heal that closes drain windows. |
| Back | DPS pick #1 | Sustained DPS | Burst DPS performs worse here — pick a long-uptime cookie. |
| Back | DPS pick #2 | Sustained DPS | Pair with #1 so their skill rotations overlap during burst. |

The trick on Avatar of Destiny is that Sugar Swan and Millennial Tree's heals **don't fully overlap** — you want to stagger them so the next heal is available the moment the previous one drops off. If you cast both at once, you waste 8-10 seconds of effective uptime and lose the next drain window.

> **Tip:** [Pure Vanilla Cookie](/gear-guide/pure-vanilla-cookie) is a hard substitute in for the Sugar Swan slot if you don't have her, but his shield is reactive rather than proactive — expect a 10-15% score drop on the same roster.

## Machine-God — Stinging Fizz comp
The "Stinging Fizz" comp is the highest-ceiling team in Guild Battle right now and the cleanest example of why pair synergy matters more than raw rarity. **Seltzer Cookie** (Epic Bomber, released in v6.8) and **Menthol Cookie** (Epic Support) buff each other on every skill rotation, producing a damage loop that out-scores Legendary-only teams against Machine-God.

| Position | Cookie | Role | Notes |
|---|---|---|---|
| Front | [Hollyberry Cookie](/gear-guide/hollyberry-cookie) | Tank | Standard pick; Machine-God's beam phases hit hard. |
| Middle | [Menthol Cookie](/gear-guide/menthol-cookie) | Support / Stinging Fizz pair | Buffs Seltzer's bomb damage on every rotation. |
| Middle | [Seltzer Cookie](/gear-guide/seltzer-cookie) | Bomber DPS | Primary damage; bombs scale with Menthol's debuff stack. |
| Back | [Millennial Tree Cookie](/gear-guide/millennial-tree-cookie) | Buff / sustain | Amplifies the bomb window. |
| Back | [Pure Vanilla Cookie](/gear-guide/pure-vanilla-cookie) | Rally / shield | Keeps the front line through beam phases. |

The rotation order is what makes Stinging Fizz tick: **Menthol opens, Seltzer follows inside her debuff window, then Millennial Tree buffs into the next Seltzer cycle**. Done correctly, you get 3-4 Stinging Fizz procs in a single attempt — done sloppily, you get one and a half.

> **Warning:** Stinging Fizz is finicky on auto. Manual the first 20 seconds at minimum to land the opening Menthol → Seltzer → buff loop; you can let auto coast the back half if you need to. Expect a 20-30% score gap between manual and full-auto on the same comp.

## Living Abyss — Standard comp
Living Abyss is the newest of the four Guild Battle bosses and the meta on it is still shifting. The widely-accepted core right now is a Chaos-leaning team that stacks debuffs and uses Timekeeper to lock the boss's heavier-hitting phases.

| Position | Cookie | Role | Notes |
|---|---|---|---|
| Front | [Aegis Hollyberry Cookie](/gear-guide/hollyberry-cookie) | Tank | Aegis variant preferred for the void-damage phases. |
| Middle | [Timekeeper Cookie](/blog/cookie-run-kingdom/timekeeper-toppings) | Lockdown / control | Stalls the boss's strongest cast windows. |
| Middle | [Dark Enchantress Cookie](/gear-guide/dark-enchantress-cookie) | Chaos DPS / debuffer | Primary damage; debuff stacks compound through the fight. |
| Back | [Eternal Sugar Cookie](/gear-guide/eternal-sugar-cookie) | Secondary DPS | |
| Back | [Sugar Swan Cookie](/gear-guide/sugar-swan-cookie) | Healer | Sustains through the late-fight burst phase. |

Living Abyss is the boss where roster depth matters most. If you don't have Timekeeper, the comp loses a huge chunk of its ceiling — the lockdown window is when most of your damage actually lands.

## F2P-friendly swaps for each boss
Not every guild member has a six-star Dark Enchantress or a built Sugar Swan. These swaps maintain roughly 70-85% of the optimal score on the same boss with significantly easier-to-obtain cookies.

| Boss | Optimal pick | F2P swap | Expected score retention |
|---|---|---|---|
| Red Velvet Dragon | Pomegranate Cookie | [Frost Queen Cookie](/gear-guide/frost-queen-cookie) (Freeze-locks instead of Poison-amps) | ~75% |
| Avatar of Destiny | Sugar Swan Cookie | [Pure Vanilla Cookie](/gear-guide/pure-vanilla-cookie) | ~85% |
| Machine-God | Seltzer + Menthol pair | Any Epic Bomber + Support pair you've built | ~70% |
| Living Abyss | Timekeeper Cookie | [Sea Fairy Cookie](/gear-guide/sea-fairy-cookie) (burst DPS in place of lockdown) | ~75% |

Two patterns to internalize: never skip the **tank** slot (you'll wipe), and never skip the **healer** slot on Avatar of Destiny specifically (the drain phases will eat you regardless of DPS). Everywhere else, raw damage cookies you've actually invested in usually outperform unbuilt meta picks.

## Treasures by boss
Treasure picks shift the damage ceiling more than most players realize. Generic "always pack" treasures like Old Pilgrim's Scroll work everywhere; the boss-specific picks below are where you squeeze out extra percentage points.

| Boss | Treasure 1 | Treasure 2 | Treasure 3 |
|---|---|---|---|
| Red Velvet Dragon | Bear Jelly's Lollipop (defense shred) | Old Pilgrim's Scroll (ATK on entry) | Squishy Jelly Watch (cooldown) |
| Avatar of Destiny | Disco Ball (heal amp) | Old Pilgrim's Scroll | Bear Jelly's Lollipop |
| Machine-God | Squishy Jelly Watch (rotation speed) | Old Pilgrim's Scroll | Bear Jelly's Lollipop |
| Living Abyss | Squishy Jelly Watch | Disco Ball | Old Pilgrim's Scroll |

The treasure meta in 2026 leans heavily on **rotation-speed** treasures rather than flat-damage ones — getting an extra Seltzer or Pomegranate cast inside a 60-second window is worth more than 10% added damage on every other cast.

## How to maximize damage per attempt
Three attempts is not many. Burning one to "learn the boss" is fine on the first week of a season; doing it every week is leaving 15-20% of your score on the table.

### Warm-up rotations
Most cookies have a buff effect on their first skill cast that decays over time. Casting your buff/support skills in the first 5 seconds — even if no damage skills come off cooldown for another 8 — frontloads multiplier value for the entire rest of the attempt. Specifically: open with Menthol, Millennial Tree, or Pure Vanilla before your damage cookies, never after.

### Manual vs auto
Auto-battle in 2026 is meaningfully better than it was in 2024, but it still misses two things consistently:

- **Pair synergies**: Stinging Fizz, Menthol → Seltzer, and Pomegranate → Poison Mushroom all need a specific cast order that auto sometimes inverts.
- **Burst window timing**: auto fires skills the moment they come off cooldown, which means your final 15-second burst is often half-spent before the boss enters its damage-amped state.

Manual the opening 20 seconds and the final 20 seconds; the middle is fine on auto. That single change is worth 15-25% in most rosters.

> **Tip:** Record one of your attempts with screen capture and rewatch it. Spotting one mis-timed skill is usually worth more than a week of treasure grinding.

## Quick Action Checklist
- Assign anchor cookies in your guild **before** the weekly reset — Pomegranate, Sugar Swan, Seltzer, Dark Enchantress.
- Build at least one tank (preferably **Hollyberry**) and one universal buffer (**Millennial Tree** or **Pure Vanilla**).
- Lock treasures per boss — don't reuse one loadout across all four.
- Manual the first and last 20 seconds of every attempt; auto the middle if you must.
- Open every fight with your buff/support skill, not your damage skill.
- Track your damage per attempt in a guild sheet; the trend matters more than the single best run.
- Don't waste your third attempt "retrying for a perfect run" — bank it on a boss your guild is short on.
- If you just unlocked a new cookie, check the [tier list](/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list) before slotting them into a Guild Battle comp.`,

  faq: [
    {
      question: 'What is the best Guild Battle team for Red Velvet Dragon in CRK?',
      answer:
        'The strongest Red Velvet Dragon comp pairs Pomegranate Cookie and Poison Mushroom Cookie for stacked Poison damage, with Black Sapphire Cookie for defense shred, Hollyberry Cookie as the tank, and Millennial Tree Cookie for late-fight amplification. Red Velvet Dragon is weak to Poison, which makes that pair non-negotiable as the damage core.',
    },
    {
      question: 'What is the Stinging Fizz comp in Guild Battle?',
      answer:
        'Stinging Fizz is the Seltzer Cookie + Menthol Cookie pair that buffs each other on skill rotation. It is the strongest team for Machine-God in CRK right now: Menthol debuffs the boss, Seltzer bombs into the debuff window, and Millennial Tree buffs the loop. The cycle produces an S-tier damage ceiling even though both cookies are Epic, not Legendary.',
    },
    {
      question: 'How many attempts do I get per Guild Battle boss?',
      answer:
        'Three attempts per boss per weekly reset, across all four Guild Battle bosses. Your total damage feeds both your personal weekly score and your guild rank on the seasonal leaderboard.',
    },
    {
      question: 'Do I need Sugar Swan Cookie for Avatar of Destiny?',
      answer:
        'Sugar Swan Cookie is the optimal anchor for Avatar of Destiny because of her healing throughput during the HP-drain phases. Pure Vanilla Cookie is a viable substitute that retains about 85% of the score on the same roster, but the fight is built around proactive healing windows that Sugar Swan covers more cleanly.',
    },
    {
      question: 'Is manual play really worth it over auto in Guild Battle?',
      answer:
        'Yes — typically 15-25% more damage on the same comp, mostly from landing pair synergies (Menthol → Seltzer, Pomegranate → Poison Mushroom) in the correct order and saving burst skills for the final damage-amped window. Manual the first and last 20 seconds at minimum; auto-battle the middle is usually fine.',
    },
    {
      question: 'What is the F2P-friendly comp for Machine-God?',
      answer:
        'If you don\'t have both Seltzer Cookie and Menthol Cookie built, any Epic Bomber + Support pair will retain about 70% of the optimal score against Machine-God. Keep the rest of the team standard (Hollyberry tank, Millennial Tree buff, Pure Vanilla rally) and focus on rotation-speed treasures.',
    },
    {
      question: 'Which Guild Battle boss should I focus on first?',
      answer:
        'Red Velvet Dragon if you already have Pomegranate Cookie and Poison Mushroom Cookie — the Poison weakness is the most lopsided element advantage in the game. Machine-God if you have Seltzer + Menthol. Otherwise, lean Avatar of Destiny since the sustain comp uses cookies (Hollyberry, Pure Vanilla, Millennial Tree) most rosters already have.',
    },
  ],

  internalLinks: [
    { href: '/gear-guide', anchor: 'CRK gear guide hub' },
    { href: '/gear-guide/pomegranate-cookie', anchor: 'Pomegranate Cookie build' },
    { href: '/gear-guide/sugar-swan-cookie', anchor: 'Sugar Swan Cookie build' },
    { href: '/gear-guide/seltzer-cookie', anchor: 'Seltzer Cookie build' },
    { href: '/gear-guide/menthol-cookie', anchor: 'Menthol Cookie build' },
    { href: '/gear-guide/hollyberry-cookie', anchor: 'Hollyberry Cookie build' },
    { href: '/blog/cookie-run-kingdom/timekeeper-toppings', anchor: 'Timekeeper Cookie build' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list', anchor: 'CRK tier list May 2026' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team guide' },
  ],

  externalSources: [
    {
      url: 'https://cookierunkingdom.fandom.com/wiki/Cookie_Run:_Kingdom_Wiki',
      title: 'Cookie Run: Kingdom Wiki (Fandom)',
    },
    {
      url: 'https://www.pocketgamer.com/cookie-run-kingdom/',
      title: 'Pocket Gamer — Cookie Run: Kingdom coverage',
    },
    {
      url: 'https://www.devsisters.com/en/',
      title: 'Devsisters official site',
    },
    {
      url: 'https://playcookierun.com/',
      title: 'Play Cookie Run — official portal',
    },
  ],
};
