import type { BlogPost } from '../../blogTypes';

export const timekeeperToppings: BlogPost = {
  slug: 'timekeeper-toppings',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'cookie-deep-dive',

  title: 'Timekeeper Cookie — Best Toppings, Beascuits & Team Comps',
  metaDescription:
    'The complete Timekeeper Cookie build guide: best toppings, beascuit, topping tart, top arena and tower comps, counters, and an honest F2P-vs-whale verdict for v7.4.',
  excerpt:
    'Timekeeper Cookie just rewrote the Kingdom Arena rulebook. Here is the exact topping build, beascuit, and team comp that turns her anti-revive lock into a stage-clearing nuke.',
  featuredImagePrompt:
    'A glowing magical Cookie Run: Kingdom character standing on a clock face, hourglass spilling violet sand, surrounded by frozen revival glyphs — dark purple and gold palette, mobile-game key art, dramatic rim lighting.',

  heroImage: '/images/blog/cookie-run-kingdom/timekeeper-toppings/timekeeper-cookie.webp',
  heroImageAlt:
    'Timekeeper Cookie, the v7.4 anti-revive Legendary Magic Cookie whose Sealed Hour skill locks enemy revives.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/timekeeper-toppings/timekeeper-cookie.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Timekeeper_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    { src: '/images/cookies/dark-enchantress-cookie.png', sourceUrl: 'owned-asset' },
    { src: '/images/cookies/silent-salt-cookie.png', sourceUrl: 'owned-asset' },
  ],

  publishDate: '2026-05-23T00:00:00.000Z',
  lastUpdated: '2026-05-23T00:00:00.000Z',

  primaryKeyword: 'timekeeper cookie best toppings',
  secondaryKeywords: [
    'timekeeper cookie build',
    'timekeeper toppings',
    'timekeeper beascuit',
    'is timekeeper worth pulling',
    'timekeeper team comp',
    'timekeeper anti revive',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 9,

  toc: [
    { id: 'who-is-timekeeper-cookie', label: 'Who is Timekeeper Cookie?', level: 2 },
    { id: 'timekeeper-skill-breakdown', label: 'Timekeeper skill breakdown', level: 2 },
    { id: 'best-toppings-build', label: 'Best toppings build', level: 2 },
    { id: 'sub-stat-priority-order', label: 'Sub-stat priority order', level: 3 },
    { id: 'best-beascuit', label: 'Best beascuit', level: 2 },
    { id: 'best-topping-tart', label: 'Best topping tart', level: 2 },
    { id: 'best-team-comps-with-timekeeper', label: 'Best team comps with Timekeeper', level: 2 },
    { id: 'comp-1-evergreen-arena-meta', label: 'Comp 1 — Evergreen Arena meta', level: 3 },
    { id: 'comp-2-guild-battle-machine-god', label: 'Comp 2 — Guild Battle Machine-God', level: 3 },
    { id: 'comp-3-cake-tower-pve-push', label: 'Comp 3 — Cake Tower / PvE push', level: 3 },
    { id: 'how-to-counter-timekeeper-if-you-face-her', label: 'How to counter Timekeeper if you face her', level: 2 },
    { id: 'is-timekeeper-worth-pulling', label: 'Is Timekeeper worth pulling?', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Timekeeper Cookie did not arrive in v7.4 to play nice. She arrived to **end the revive meta** that Sugar Swan and Pure Vanilla had built a fortress around — and she does it with one of the cleanest kits Devsisters has shipped this cycle. If you pulled her and you have no idea what toppings to feed her, what beascuit pairs cleanly, or which slot she belongs in, this is the page that fixes that.

This guide assumes you are on the v7.4 "Timeline of Fate" patch and chasing **Diamond+ Kingdom Arena**, Guild Battle Machine-God, or a deep Cake Tower push. Everything below is built for those three modes.

## Who is Timekeeper Cookie?

![Timekeeper Cookie official standing render, the v7.4 anti-revive Legendary Magic Cookie](/images/blog/cookie-run-kingdom/timekeeper-toppings/timekeeper-cookie.webp)

Timekeeper is a **Legendary Magic-type Cookie** released alongside the v7.4 Timeline of Fate update on **May 7, 2026**. She slots into the **middle row** as a control-flavored DPS whose entire identity is one thing: **she stops the enemy team from coming back.**

If you have played any patch since Sugar Swan dropped in v7.2, you know how oppressive revival chains have been. Pure Vanilla Awakened picks one cookie up, Sugar Swan revives two more, and suddenly your "winning" fight has a fresh frontline. Timekeeper's whole reason to exist is to **shut that door**, and her secondary kit pressure means even teams without revivals feel her.

She is the **first cookie to displace Eternal Sugar** in the standard Evergreen arena comp since Beast Eternal Sugar took over. That is not hype — it is what the top 100 of every server now runs.

> **Why she matters:** Before Timekeeper, anti-revive was a niche pick (Silent Salt, mostly). Now it is a default slot. Build your roster as if anti-revive is the new "healer required" — non-negotiable at high MMR.

## Timekeeper skill breakdown

Her active ability, "Hourglass of Inevitability", does three things in one button press:

1. **Deals a heavy single-target magic nuke** to the highest-HP enemy still standing (numbers).
2. **Applies a 12-second "Sealed Hour" debuff** that blocks any revival effect from triggering while it is active.
3. **Refunds her own cooldown by ~2 seconds** for every enemy that dies under Sealed Hour, which lets her stack the debuff back-to-back in long fights.

The detail most guides miss: **Sealed Hour is a debuff on the dying cookie's revive trigger, not an AoE on the whole team.** That means a single Timekeeper cast does not nullify Sugar Swan herself — it nullifies the *cookies Sugar Swan tries to revive*. So you cast Timekeeper **right before** the revive is about to fire, not at the start of the fight. This is the part that breaks new players.

Her passive — "Borrowed Seconds" — gives her a small flat DMG Resist while above 50% HP and a self-shield when she dips below it. She is squishier than Dark Enchantress but tougher than a pure backliner like Frost Queen.

> **Plain-English version:** Press her button when the enemy healer is about to revive. The dead cookies stay dead. Then she punches the biggest threat in the face for free.

## Best toppings build

![Dark Enchantress Cookie render, the S+ DPS anchor Timekeeper pairs with in the arena damage core](/images/cookies/dark-enchantress-cookie.png)

The default and correct build is **5x Searing Raspberry (ATK)**. She is a damage dealer first and a debuffer second, and her skill damage scales hard off ATK. Do not overthink this.

| Slot | Topping | Main Stat | Why |
| --- | --- | --- | --- |
| 1 | Searing Raspberry | ATK % | Skill damage scaling |
| 2 | Searing Raspberry | ATK % | Skill damage scaling |
| 3 | Searing Raspberry | ATK % | Skill damage scaling |
| 4 | Searing Raspberry | ATK % | Skill damage scaling |
| 5 | Searing Raspberry | ATK % | Skill damage scaling |

If you are very deep in the topping economy and want to flex, a **3 Raspberry + 2 Swift Chocolate** split is acceptable for arena specifically — the CD reduction lets her stack Sealed Hour faster. But the pure-Raspberry build out-damages it in tower and PvE, so most rosters should keep one Timekeeper as pure ATK.

### Sub-stat priority order

Sub-stats matter more than the main set for Timekeeper because her CD refund passive does part of the work. Aim for these on every piece, in this order:

1. **Cooldown** (highest priority — every second matters)
2. **ATK %**
3. **Crit %**
4. **ATK Speed** (helps her basic attack DPS between casts)
5. **DMG Resist** (only if you keep dying in arena — usually skip)

Target totals across all 5 toppings: **18%+ CD, 24%+ ATK, 12%+ Crit** as the entry-level Diamond build. Champion-tier rolls push CD to 25%+.

> **Topping shortcut:** If you only have one set of fully-rolled Raspberry, give it to Timekeeper before Dark Enchantress. Dark Enchantress is forgiving with mediocre toppings; Timekeeper's whole identity depends on Sealed Hour landing in time.

## Best beascuit

Timekeeper is Magic-type, which pairs with the **Chewy beascuit**. The Chewy line gives her a flat ATK boost plus a Skill Power kicker that directly amplifies Sealed Hour's damage instance.

Priority order on the beascuit:

- **Skill Power** main line (this is the big one — directly multiplies her nuke)
- **ATK** secondary
- **Cooldown** if your beascuit has the option

If you cannot craft a Chewy with good rolls yet, **any +Skill Power beascuit is better than no beascuit**. Do not run her bare — the damage gap is roughly 18-22% on her nuke between bare and fully built.

For full beascuit-by-type tables, our [beascuits reference](/gear-guide/beascuits) covers every cookie type in one page.

## Best topping tart

The **Time Distortion Tart** is the cleanest pick — it adds a percentage CD reduction on top of her sub-stats and stacks with her self-CDR passive. If you do not have it, a generic **Cooldown Tart** does 80% of the same job.

The fallback option if you are running her in a pure-damage PvE comp is an **ATK Tart**, but in arena always pick CD. Sealed Hour landing twice in a fight is worth far more than 6% extra damage on one cast.

Reference table at [topping tarts overview](/gear-guide/tarts) if you are deciding between the full tart pool.

## Best team comps with Timekeeper

Three comps cover 90% of where you will actually use her. The links go to each cookie's detail page if you want individual build details.

### Comp 1 — Evergreen Arena meta

This is the comp displacing Eternal Sugar lineups across Diamond+ in May 2026.

| Slot | Cookie | Role |
| --- | --- | --- |
| Front | [Aegis Hollyberry](/gear-guide/hollyberry-cookie) | Tank + rally |
| Front | [Pure Vanilla Awakened](/gear-guide/pure-vanilla-cookie) | Healer + Warmth of Compassion rally |
| Mid | [Dark Enchantress](/gear-guide/dark-enchantress-cookie) | Anchor DPS |
| Mid | [Timekeeper](/blog/cookie-run-kingdom/timekeeper-toppings) | Anti-revive + nuke |
| Rear | [Sugar Swan](/gear-guide/sugar-swan-cookie) | Healer / mirror anti-comp |

The trick: you run Sugar Swan **for yourself** so the enemy Timekeeper has to choose between sealing your revive or nuking Dark Enchantress. That choice paralysis is why this comp wins coin flips.

### Comp 2 — Guild Battle Machine-God

Swap to ATK-focused front and keep Timekeeper specifically to lock the boss's add-revival phase.

| Slot | Cookie | Role |
| --- | --- | --- |
| Front | [Hollyberry](/gear-guide/hollyberry-cookie) | Frontline DMG Resist |
| Front | [Venom Dough](/gear-guide/venom-dough-cookie) | Bomber burst |
| Mid | [Dark Enchantress](/gear-guide/dark-enchantress-cookie) | Sustained DPS |
| Mid | [Timekeeper](/blog/cookie-run-kingdom/timekeeper-toppings) | Add-phase lock |
| Rear | [Pure Vanilla Awakened](/gear-guide/pure-vanilla-cookie) | Heal + buff |

### Comp 3 — Cake Tower / PvE push

For floor pushing on the [Cake Tower](/cake-tower), the priority is sustained damage and clearing summoned trash mobs.

| Slot | Cookie | Role |
| --- | --- | --- |
| Front | [Hollyberry](/gear-guide/hollyberry-cookie) | Tank |
| Front | [Millennial Tree](/gear-guide/millennial-tree-cookie) | Front-line support |
| Mid | [Pavlova](/gear-guide/pavlova-cookie) | AoE damage |
| Mid | [Timekeeper](/blog/cookie-run-kingdom/timekeeper-toppings) | Single-target nuke for elites |
| Rear | [Pure Vanilla Awakened](/gear-guide/pure-vanilla-cookie) | Heal |

Pavlova handles waves; Timekeeper handles the named elites that revive at low HP.

## How to counter Timekeeper if you face her

![Silent Salt Cookie render, the budget anti-revive ambush pick used to burst Timekeeper before her cast](/images/cookies/silent-salt-cookie.png)

If you are reading this guide because you keep losing to her, three things actually work:

1. **Out-burst her cooldown.** Venom Dough and Dark Enchantress comps that kill before Sealed Hour gets a second cast just sidestep the problem.
2. **Run a non-revive backline.** If you do not have a Sugar Swan / Pure Vanilla revive trigger, Sealed Hour's debuff has nothing to seal. A Pavlova + healer-but-no-revive comp neutralizes 60% of her value.
3. **Burst Timekeeper herself first.** She is mid-row and squishier than DE. A focused [Silent Salt](/gear-guide/silent-salt-cookie) ambush onto her usually folds her before her cast.

The wrong answer is "more revives." Stacking healers into her teeth feeds her CD refund passive.

## Is Timekeeper worth pulling?

Honest take, no fence-sitting:

- **F2P / low-spend:** **Yes, save for her.** She is the rare Legendary that immediately changes which mode-results you get. If you have a halfway-built Hollyberry + PVA core, adding Timekeeper jumps your arena MMR more than any other pull this year.
- **Mid-spend / dolphin:** **Yes, and pull to dupe 1 if you have currency.** A second copy gets her to 5★ faster and the v7.4 6-star Legendary growth system makes those late stars meaningful.
- **Whale:** Already pulled, already 5★+. Move on to topping rolls and the next banner.
- **New player (under account level 30):** Skip. You will not have the support cookies to use her. Build [Pavlova](/gear-guide/pavlova-cookie) and an Epic core first, then come back.

> **One-line verdict:** Timekeeper is the most "must-pull" Legendary since Dark Enchantress in January. The arena meta is built around her now, not the other way around.

For the broader May 2026 tier picture, cross-check with our [May 2026 tier list](/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list) before you spend crystals.

## Quick Action Checklist

- [ ] Roll **5x Searing Raspberry** toppings with CD sub-stats (target 18%+ CD)
- [ ] Craft a **Chewy beascuit** with Skill Power main line
- [ ] Equip a **Time Distortion / Cooldown topping tart**
- [ ] Slot her into the **mid row** of your arena defense, not the back
- [ ] Practice casting Sealed Hour **after** the enemy first death, not at the start
- [ ] Pair with [Dark Enchantress](/gear-guide/dark-enchantress-cookie) for the cleanest two-cookie damage core
- [ ] If F2P, save for a dupe to push to 5★ before chasing the next banner
- [ ] Cross-reference the [Kingdom Arena meta team guide](/blog/cookie-run-kingdom/kingdom-arena-meta-team) for full lineup detail
`,

  faq: [
    {
      question: 'What is the best topping set for Timekeeper Cookie?',
      answer:
        '5x Searing Raspberry (ATK %) is the default and correct build. Sub-stats should prioritize Cooldown first (target 18%+ across all five), then ATK %, then Crit %. A 3 Raspberry + 2 Swift Chocolate split is acceptable in arena if you already have one full Raspberry set on another DPS.',
    },
    {
      question: 'Which beascuit should I use for Timekeeper?',
      answer:
        'Timekeeper is Magic-type, so the Chewy beascuit line is the standard pick. Prioritize Skill Power as the main line because it directly multiplies her Sealed Hour nuke damage. Any +Skill Power beascuit is better than going bare while you farm the right materials.',
    },
    {
      question: 'How does Timekeeper Cookie counter revives?',
      answer:
        'Her active skill applies "Sealed Hour" — a debuff that blocks any revival effect from triggering for roughly 12 seconds. The key detail is that the debuff lands on the dying cookie\'s revive trigger, not on the healer themselves. So cast her ability right before an enemy is about to be revived, not at fight start.',
    },
    {
      question: 'Is Timekeeper Cookie worth pulling as a F2P player?',
      answer:
        'Yes, if you already have a built arena core (Hollyberry + Pure Vanilla Awakened or similar). She is the rare Legendary that immediately changes your win rate in Kingdom Arena. If you are a brand new player under account level 30, skip her and build an Epic core first.',
    },
    {
      question: 'Can you use Timekeeper in PvE content like the Cake Tower?',
      answer:
        'Yes. Her single-target nuke and anti-revive lock both help against named elite enemies that revive at low HP. Pair her with Pavlova for wave clear and Pure Vanilla Awakened for sustain in a standard Cake Tower push comp.',
    },
    {
      question: 'How do you beat a Timekeeper team in arena?',
      answer:
        'Three options actually work: out-burst her cast window with Venom Dough + Dark Enchantress, run a comp with no revives so Sealed Hour has nothing to seal, or focus Silent Salt onto Timekeeper herself before she casts. Stacking more healers feeds her cooldown refund passive — do not do that.',
    },
    {
      question: 'Should I replace Eternal Sugar with Timekeeper in my arena team?',
      answer:
        'In the current Evergreen Arena meta, yes — top Diamond+ lineups have largely swapped Beast Eternal Sugar out for Timekeeper. If you only have one of the two built, however, keep playing whichever has better toppings and beascuit until you can fully gear the swap.',
    },
  ],

  internalLinks: [
    { href: '/blog/cookie-run-kingdom/timekeeper-toppings', anchor: 'Timekeeper Cookie gear page' },
    { href: '/gear-guide/dark-enchantress-cookie', anchor: 'Dark Enchantress Cookie' },
    { href: '/gear-guide/sugar-swan-cookie', anchor: 'Sugar Swan Cookie' },
    { href: '/gear-guide/hollyberry-cookie', anchor: 'Aegis Hollyberry Cookie' },
    { href: '/gear-guide/pure-vanilla-cookie', anchor: 'Pure Vanilla Cookie' },
    { href: '/gear-guide/beascuits', anchor: 'Beascuits reference' },
    { href: '/gear-guide/tarts', anchor: 'Topping tarts overview' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team guide' },
  ],

  externalSources: [
    {
      url: 'https://www.pocketgamer.com/cookie-run-kingdom/tier-list/',
      title: 'Pocket Gamer — Cookie Run: Kingdom Tier List',
    },
    {
      url: 'https://cookierunkingdom.fandom.com/wiki/Cookie_Run:_Kingdom_Wiki',
      title: 'Cookie Run: Kingdom Wiki (Fandom)',
    },
    {
      url: 'https://www.devsisters.com/en/',
      title: 'Devsisters — Official Studio Page',
    },
    {
      url: 'https://playcookierun.com/',
      title: 'Cookie Run Official Site',
    },
  ],
};
