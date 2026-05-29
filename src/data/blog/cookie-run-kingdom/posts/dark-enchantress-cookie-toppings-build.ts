import type { BlogPost } from '../../blogTypes';

export const darkEnchantressCookieToppingsBuild: BlogPost = {
  slug: 'dark-enchantress-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'dark-enchantress-build',

  title: 'Dark Enchantress Cookie Toppings & Build Guide (May 2026)',
  metaDescription:
    'Dark Enchantress Cookie build guide for May 2026. The full 5x Searing Raspberry topping spread, Chewy beascuit, tart and treasure picks, Magic Candy notes, and the May 2026 Arena meta team.',
  excerpt:
    'Dark Enchantress has been the S+ DPS anchor since v7.0 and Timeline of Fate did not move her. If she is built right, she ends fights. If she is built wrong, she gets out-damaged by an Epic. Here is the May 2026 build sheet.',
  featuredImagePrompt:
    'Dark Enchantress Cookie standing center frame with purple flame aura, surrounded by glowing Searing Raspberry topping icons, Cookie Run: Kingdom key-art style, painterly cel-shaded, deep purple and crimson palette, dramatic backlighting',
  heroImage: '/images/cookies/dark-enchantress-cookie.png',
  heroImageAlt: 'Dark Enchantress Cookie, the S+ Magic DPS anchor and headline subject of this May 2026 toppings build.',
  imageSources: [
    { src: '/images/cookies/dark-enchantress-cookie.png', sourceUrl: 'owned-asset' },
    { src: '/images/gear/toppings/raspberry.png', sourceUrl: 'owned-asset' },
    { src: '/images/gear/beascuits/chewy.png', sourceUrl: 'owned-asset' },
    {
      src: '/images/blog/cookie-run-kingdom/dark-enchantress-cookie-toppings-build/timekeeper-cookie.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Timekeeper_Cookie',
      license: 'Fandom CC-BY-SA',
    },
  ],

  publishDate: '2026-05-27T00:00:00.000Z',
  lastUpdated: '2026-05-27T00:00:00.000Z',

  primaryKeyword: 'dark enchantress cookie toppings',
  secondaryKeywords: [
    'dark enchantress cookie build',
    'best toppings dark enchantress',
    'dark enchantress beascuit',
    'dark enchantress magic candy',
    'crk dark enchantress guide',
    'dark enchantress arena team',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 10,

  toc: [
    { id: 'why-dark-enchantress-is-still-s-in-may-2026', label: 'Why Dark Enchantress is still S+ in May 2026', level: 2 },
    { id: 'the-standard-dark-enchantress-topping-build', label: 'The standard Dark Enchantress topping build', level: 2 },
    { id: 'sub-stat-priorities-and-roll-targets', label: 'Sub-stat priorities and roll targets', level: 2 },
    { id: 'beascuit-pick-skill-power-vs-atk', label: 'Beascuit pick — Skill Power vs ATK', level: 2 },
    { id: 'tart-and-treasure-picks', label: 'Tart and treasure picks', level: 2 },
    { id: 'magic-candy-for-dark-enchantress', label: 'Magic Candy for Dark Enchantress', level: 2 },
    { id: 'team-comps-that-maximize-her-damage-windows', label: 'Team comps that maximize her damage windows', level: 2 },
    { id: 'pve-vs-arena-build-differences', label: 'PvE vs Arena build differences', level: 2 },
    { id: 'common-dark-enchantress-build-mistakes', label: 'Common Dark Enchantress build mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Dark Enchantress Cookie has been the S+ damage anchor since v7.0 dropped in January 2026, and the v7.4 Timeline of Fate patch did not move her an inch. If she is built right, she ends fights. If she is built wrong, she gets out-damaged by an Epic, and I have watched it happen in Arena screenshots more times than I want to count.

This guide is the May 2026 build sheet. Toppings, beascuit, tart, Magic Candy, team comp, and the specific mistakes that drop her from carry to bench.

## Why Dark Enchantress is still S+ in May 2026

![Dark Enchantress Cookie, the corrupted Witch of Darkness who has held the #1 Magic DPS slot since v7.0.](/images/cookies/dark-enchantress-cookie.png)

Three reasons, in order of importance.

Her v7.0 kit rework added a multi-target debuff on top of her existing AoE nuke, which means she scales into more enemies, not fewer. Most legacy DPS cookies (looking at you, Frost Queen) lose damage when the screen is crowded. Dark Enchantress gains it.

Her ult animation timing got shaved by roughly 0.4 seconds [VERIFY] in v7.2, which sounds tiny until you realize Arena fights are decided in under 15 seconds. That is one extra rotation in a long match.

She still counters the current Arena meta. Pure Vanilla Awakened shields, Hollyberry walls, Sea Fairy chip. None of it matters if Dark Enchantress lands a critted ult on the back row. The only thing that genuinely threatens her is Timekeeper, and Timekeeper happens to be her best teammate. We will get there.

If you want the full ranking context, the [May 2026 tier list](/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list) has her at S+ alongside two other cookies, and she is the only one of the three that has held that spot for the full patch cycle.

## The standard Dark Enchantress topping build

![Searing Raspberry topping icon, the ATK topping you run five of on Dark Enchantress with no splits.](/images/gear/toppings/raspberry.png)

5x Searing Raspberry. Full stop.

Every other configuration is a downgrade. I know the Discord theorycrafters keep posting 3+2 hybrid builds with Solid Almond for defense or Juicy Apple Jelly for Cooldown, and every single one of those builds underperforms in actual logs. Dark Enchantress is a glass cannon. You build her to break the glass faster, not to reinforce it.

The standard:

- **Toppings:** 5x Searing Raspberry (ATK)
- **Beascuit:** Chewy (Skill Power priority)
- **Tart:** Strawberry tart for Arena, Almond tart for sustained PvE
- **Magic Candy:** Equipped, leveled to at least 15

If you only memorize one line from this post, memorize that one. The rest of this guide is about hitting the sub-stat targets and choosing between the two tart options.

For the gear loadout that goes on top of these toppings, the [Dark Enchantress gear page](/gear-guide/dark-enchantress-cookie) has the current best-in-slot relics and bonus stats.

## Sub-stat priorities and roll targets

Sub-stats are where 90% of build quality lives. Two players with identical 5x Searing Raspberry sets can have a 30% damage gap based purely on sub-stat rolls.

Here is what you want, in priority order:

| Sub-stat | Target | Notes |
|----------|--------|-------|
| Crit Chance | 18%+ | Below this and her damage variance becomes a problem |
| Cooldown | 12%+ | Drives her ult uptime in long Arena fights |
| ATK% | As much as you can roll | Multiplicative with Searing Raspberry |
| DMG Resist | Nice to have | Only on toppings where you missed the above three |

18% Crit from toppings puts her at roughly 50% total Crit Chance once you factor in her cookie passive and a Strawberry tart. That is the floor where her burst windows stop missing.

12% Cooldown is the Arena threshold. Below that, you will finish one full rotation per match and lose to teams that finish two. PvE you can live with 8-10%.

Do not chase ATK Flat. The number looks bigger, but ATK% scales with her base stat and Flat ATK does not. This is the second most common mistake after the topping type itself.

## Beascuit pick — Skill Power vs ATK

![Chewy beascuit icon, the Skill Power beascuit that scales Dark Enchantress's ult damage.](/images/gear/beascuits/chewy.png)

Chewy beascuit with Skill Power priority. That is the answer.

But the reasoning matters, because the answer flips in one specific scenario.

Her ult does roughly 70-80% of her total damage in a standard Arena fight [VERIFY]. Skill Power directly multiplies that number. ATK multiplies her ult too, but it also multiplies her basic attacks, and her basic attacks are not what is winning you matches.

The trade-off looks like this:

- **Skill Power beascuit:** Bigger ult, slightly weaker autos. Best for Arena, raid burst phases, Cake Tower clear runs.
- **ATK beascuit:** Smaller ult, stronger autos. Only better in fights that last 30+ seconds where she gets 3+ rotations and her basics actually matter.

The 30+ second fight is rare. Cake Tower trays 40+ can get there, and a handful of Guild Battle raids stretch that long. For everything else, Skill Power wins.

Stat priority on the Chewy beascuit itself: Skill Power > ATK% > Crit Damage > Cooldown.

## Tart and treasure picks

Two tart options, both correct depending on team:

**Strawberry tart.** Crit Chance and Crit Damage. This is the Arena pick. You stack it with your topping Crit sub-stats to push past the 50% threshold, and the Crit Damage makes your burst windows lethal.

**Almond tart.** Flat ATK and ATK%. This is the PvE pick for long fights where consistent damage beats burst spikes. Cake Tower runs past tray 50 and Guild Boss DPS slots are where Almond tart pulls ahead.

For treasures, the May 2026 meta is:

- **Old Pilgrim's Scroll** (first-skill damage boost) — Arena
- **Sugar Swan's Shining Feather** (cooldown reduction at battle start) — Arena
- **Searing Raspberry Sugar Gnome Statue** (sustained DPS multiplier) — PvE

The Arena double-treasure of Old Pilgrim's Scroll plus Sugar Swan's Shining Feather is what makes the burst comp work. She gets her ult off in the first three seconds, deletes the back row, and the rest of the fight is cleanup.

## Magic Candy for Dark Enchantress

Mandatory if you are pushing top 100 Arena or Cake Tower past tray 50.

Her Magic Candy adds an AoE component to her damage rotation and extends her debuff duration by roughly 2 seconds [VERIFY]. The AoE piece is what matters most against spread Arena teams where her single-target nuke would otherwise miss the squishies.

The leveling priority is straightforward. Get her Magic Candy to 15 minimum, push to 20 if you are a serious Arena player, max it if you are top 50.

For the full priority order of which cookies should get Magic Candy first, the [Magic Candy priority guide](/blog/cookie-run-kingdom/crk-magic-candy-priority-guide) has Dark Enchantress in the top 3, and the math on why.

## Team comps that maximize her damage windows

![Timekeeper Cookie, Dark Enchantress's best teammate who covers enemy revives in the standard May 2026 Arena comp.](/images/blog/cookie-run-kingdom/dark-enchantress-cookie-toppings-build/timekeeper-cookie.webp)

Three comps to know in May 2026:

**The Standard (Arena).** Pure Vanilla Awakened + Aegis Hollyberry + Dark Enchantress + Sugar Swan + Timekeeper. PVA shields keep your back row alive, Hollyberry walls the front, Sugar Swan provides cooldown reduction, and Timekeeper covers anti-revive. Dark Enchantress sits mid-row and ults on a 4-second timer. This is the comp that wins the [Kingdom Arena meta team](/blog/cookie-run-kingdom/kingdom-arena-meta-team) breakdowns most weeks.

**The Burst Alt.** [Venom Dough](/gear-guide/venom-dough-cookie) replaces Sugar Swan. You lose the cooldown utility but gain a second nuke that goes off in the same window as Dark Enchantress. Best for one-shotting glass-cannon comps. Weak to defensive teams.

**The Anti-Revive Hammer.** [Pure Vanilla Awakened](/gear-guide/pure-vanilla-cookie) + Hollyberry + Dark Enchantress + Timekeeper + your flex pick. Timekeeper is the May 2026 meta because half the Arena ladder is running Hollyberry revives, and her kit just deletes that interaction. If you do not have Timekeeper built, the [Timekeeper toppings guide](/blog/cookie-run-kingdom/timekeeper-toppings) walks through her build.

Dark Enchantress is a mid-row DPS in all three comps. Do not put her front row. I will say it again later because people keep doing it.

## PvE vs Arena build differences

The toppings stay 5x Searing Raspberry. The sub-stats and treasures shift.

**PvE build:**
- ATK% over Cooldown in sub-stats
- Almond tart for sustained damage
- Searing Raspberry Sugar Gnome Statue treasure
- Magic Candy level 15 minimum

PvE fights last longer, so you want raw damage per second over rotation speed. Cake Tower trays 40+ are burst windows inside long fights, and Almond tart plus high ATK% lets her hit hard every rotation instead of one massive opener and nothing after.

**Arena build:**
- Cooldown over ATK% in sub-stats
- Strawberry tart for crit burst
- Old Pilgrim's Scroll + Sugar Swan's Shining Feather treasures
- Magic Candy level 20+

Arena matches end in 15-25 seconds. You need her ult off twice, you need it critting, and you need the second rotation to land before the enemy Timekeeper or Pure Vanilla Awakened resets the fight. Every Cooldown sub-stat is one millisecond closer to that second ult.

The trap is running an Arena build in PvE or vice versa. They look similar on paper, and the damage difference is roughly 20-25% in the wrong mode [VERIFY].

## Common Dark Enchantress build mistakes

In order of how often I see them:

1. **Not enough Cooldown sub-stats.** People max Crit and ATK%, forget Cooldown, and then wonder why their second ult never lands. 12% Cooldown is the Arena floor.

2. **Wrong beascuit type.** Crunchy beascuit with Crit Damage looks attractive on paper and undersells her ult by 10-15%. Stick with Chewy + Skill Power.

3. **Skipping Magic Candy.** Magic Candy doubles her output against spread teams. Skipping it because you are saving Soul Essence is fine until you hit master Arena and get walled.

4. **Slotting her front row.** She is a mid-row DPS. Front row gets her killed in two hits because her HP pool is paper. I do not care how good your Hollyberry is, do not test this.

5. **Hybrid topping builds.** 3 Searing Raspberry + 2 Juicy Apple Jelly looks clever and is just worse. Run the full 5.

6. **Sub-stat hoarding.** Players reroll forever waiting for a perfect 25% Crit topping. Hit your 18% Crit and 12% Cooldown floors and move on to building the next cookie. Diminishing returns are real.

For the broader build philosophy that applies to every cookie, the [gear guide hub](/gear-guide) covers the framework.

## Quick Action Checklist

- Equip 5x Searing Raspberry toppings (not 3+2, not 4+1, full 5)
- Hit 18%+ Crit Chance from topping sub-stats
- Hit 12%+ Cooldown from topping sub-stats
- Equip Chewy beascuit with Skill Power priority stat
- Equip Strawberry tart for Arena, Almond tart for PvE
- Equip Old Pilgrim's Scroll + Sugar Swan's Shining Feather for Arena treasures
- Level Magic Candy to 15 minimum, 20+ for serious Arena
- Run her mid-row, never front row
- Pair with Pure Vanilla Awakened + Aegis Hollyberry + Timekeeper for the standard meta comp
- Swap to Venom Dough comp for burst Arena pushes
- Rebuild sub-stats if you switch between PvE and Arena focus`,

  faq: [
    {
      question: 'What is the best topping set for Dark Enchantress Cookie?',
      answer:
        "5x Searing Raspberry is the only correct answer in May 2026. You want ATK as the flat boost and Crit Chance plus Cooldown as the sub-stat rolls. Anything else (Juicy Apple Jelly, Solid Almond) trades away the damage ceiling you need for Arena and high Cake Tower trays.",
    },
    {
      question: 'Should I use a Skill Power or ATK beascuit on Dark Enchantress?',
      answer:
        "Chewy beascuit with Skill Power priority is the meta pick. Her ult is where 80% of her damage lives, so scaling that number scales everything. ATK beascuits are only better if you are running her in extremely long sustained fights where basic-attack damage actually matters, which is a niche case.",
    },
    {
      question: 'Is Dark Enchantress still good after Timekeeper released?',
      answer:
        "Yes, and they are actually best friends. Timekeeper covers her biggest weakness (enemy revives and rewinds) so Dark Enchantress can commit to her burst window without worrying about a Hollyberry Cookie popping back up. The Reddit thread that called her dead the week Timekeeper dropped aged like milk.",
    },
    {
      question: 'Which team should I run Dark Enchantress in?',
      answer:
        "Standard May 2026 comp is Pure Vanilla Awakened + Aegis Hollyberry + Dark Enchantress + Sugar Swan + Timekeeper. For burst Arena you can swap Sugar Swan for Venom Dough and trade survivability for one-shot potential.",
    },
    {
      question: 'How much Crit Chance does Dark Enchantress need?',
      answer:
        "Aim for 18% from toppings minimum, which puts her around 50%+ total Crit with her treasure and cookie buffs factored in. Below 18% her damage variance gets ugly and she will whiff burst windows in Arena where every hit needs to crit.",
    },
    {
      question: 'Does Dark Enchantress need Magic Candy?',
      answer:
        "If you are in the top 100 of Kingdom Arena or pushing Cake Tower past tray 50, yes. The Magic Candy adds an AoE component to her rotation that doubles her usefulness against spread teams. For casual PvE she can survive without it, but you are leaving damage on the table.",
    },
    {
      question: 'Can I use Juicy Apple Jelly toppings on Dark Enchantress?',
      answer:
        "No. Cooldown toppings look tempting because her ult is everything, but the ATK loss is too steep. Get your Cooldown from sub-stats, not the main topping type. This is the most common build mistake I see in screenshots.",
    },
  ],

  internalLinks: [
    { href: '/gear-guide/dark-enchantress-cookie', anchor: 'Dark Enchantress gear page' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list', anchor: 'May 2026 tier list' },
    { href: '/blog/cookie-run-kingdom/timekeeper-toppings', anchor: 'Timekeeper toppings' },
    { href: '/blog/cookie-run-kingdom/crk-magic-candy-priority-guide', anchor: 'Magic Candy priority guide' },
    { href: '/gear-guide/venom-dough-cookie', anchor: 'Venom Dough Cookie' },
    { href: '/gear-guide/pure-vanilla-cookie', anchor: 'Pure Vanilla Cookie' },
    { href: '/gear-guide', anchor: 'Gear guide hub' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Cookie_Run:_Kingdom_Wiki', title: 'Cookie Run: Kingdom Wiki' },
    { url: 'https://www.pocketgamer.com/cookie-run-kingdom/', title: 'PocketGamer CRK coverage' },
    { url: 'https://www.devsisters.com/en/', title: 'Devsisters' },
    { url: 'https://playcookierun.com/', title: 'Official Cookie Run site' },
  ],

  tldr:
    "Run 5x Searing Raspberry toppings with at least 18% Crit and 12% Cooldown sub-stats, a Chewy beascuit with Skill Power priority, and a Strawberry or Almond tart. Pair her with Pure Vanilla Awakened + Aegis Hollyberry for the standard May 2026 meta comp, or with Venom Dough for the burst alt build. Magic Candy is mandatory if you are running her at top-100 Arena.",

  itemList: {
    name: 'Dark Enchantress Cookie Standard Build (May 2026)',
    items: [
      { name: 'Toppings — 5x Searing Raspberry', description: 'ATK toppings with Crit % and Cooldown sub-stats.' },
      { name: 'Beascuit — Chewy', description: 'Skill Power priority for ult damage scaling.' },
      { name: 'Tart — Strawberry (Crit) or Almond (ATK)', description: 'Strawberry for Arena burst, Almond for sustained PvE.' },
      { name: 'Sub-stat targets', description: 'Crit 18%+, Cooldown 12%+, ATK% where rollable.' },
      { name: 'Magic Candy', description: 'Adds an AoE component to her damage rotation. Mandatory at top-100 Arena.' },
      { name: 'Team — Pure Vanilla Awakened + Aegis Hollyberry + Sugar Swan + Timekeeper', description: 'Standard May 2026 meta comp; Dark Enchantress as mid-row DPS anchor.' },
    ],
  },
};
