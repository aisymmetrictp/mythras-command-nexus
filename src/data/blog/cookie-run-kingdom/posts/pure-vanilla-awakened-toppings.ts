import type { BlogPost } from '../../blogTypes';

export const pureVanillaAwakenedToppings: BlogPost = {
  slug: 'pure-vanilla-awakened-toppings',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'cookie-deep-dive',
  title: 'Pure Vanilla Cookie (Awakened) — Best Toppings, Beascuit & Team Comps',
  metaDescription: 'Best Pure Vanilla Cookie Awakened toppings, beascuit, tart, and team comps. The Warmth of Compassion rally still defines arena and guild battle meta.',
  excerpt: 'Awakened Pure Vanilla has been S+ for over a year. Here is the build, the rally, and the comps that keep her on top of the Cookie Run: Kingdom ladder in 2026.',
  featuredImagePrompt: 'Pure Vanilla Cookie in her Awakened form, glowing white and gold robes, standing in front of the Vanilla Kingdom castle, soft radiant light, anime style, cinematic lighting, hero pose',
  heroImage: '/images/cookies/pure-vanilla-cookie.png',
  heroImageAlt: 'Pure Vanilla Cookie, the S+ Awakened Ancient healer who anchors arena, Guild Battle, and Cake Tower comps in CRK.',
  imageSources: [
    { src: '/images/cookies/pure-vanilla-cookie.png', sourceUrl: 'owned-asset' },
    { src: '/images/gear/toppings/raspberry.png', sourceUrl: 'owned-asset' },
    { src: '/images/gear/beascuits/sweet.png', sourceUrl: 'owned-asset' },
    { src: '/images/cookies/hollyberry-cookie.png', sourceUrl: 'owned-asset' },
  ],
  publishDate: '2026-05-24T00:00:00.000Z',
  lastUpdated: '2026-05-24T00:00:00.000Z',
  primaryKeyword: 'pure vanilla cookie awakened toppings',
  secondaryKeywords: [
    'pure vanilla awakened build',
    'pure vanilla beascuit',
    'pure vanilla team comp',
    'awakened pure vanilla guide',
    'is pure vanilla worth pulling',
    'warmth of compassion rally',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 9,
  toc: [
    { id: 'why-pure-vanilla-awakened-still-defines-the-meta', label: 'Why Pure Vanilla Awakened still defines the meta', level: 2 },
    { id: 'skill-breakdown-what-her-kit-actually-does', label: 'Skill breakdown — what her kit actually does', level: 2 },
    { id: 'best-toppings-build', label: 'Best toppings build', level: 2 },
    { id: 'best-beascuit-and-topping-tart', label: 'Best beascuit and topping tart', level: 2 },
    { id: 'team-comps-that-actually-win', label: 'Team comps that actually win', level: 2 },
    { id: 'the-warmth-of-compassion-rally-with-aegis-hollyberry', label: 'The Warmth of Compassion rally with Aegis Hollyberry', level: 2 },
    { id: 'f2p-investment-path-how-to-get-the-awakened-form', label: 'F2P investment path — how to get the Awakened form', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
    { id: 'faq', label: 'FAQ', level: 2 },
  ],
  content: `Awakened Pure Vanilla has been S+ for over a year now, and Timeline of Fate didn't dethrone her. That is the headline. Devsisters pushed three patches of supposed meta shakeups since June 2025, dropped a half-dozen new Ancients-tier kits, and quietly buffed every backline DPS that wasn't already broken. None of it mattered. Pure Vanilla in her Awakened form still walks into Arena and Guild Battle like she signed the lease.

If you pulled her base copy back in 2021 and stuck with the kingdom long enough to grind the v6.5 Awakening quest chain, congratulations, you own the most flexible healer in the game. If you didn't, this guide is going to make a strong case for fixing that.

## Why Pure Vanilla Awakened still defines the meta

The short version: she heals, she shields, she buffs ATK, and her ultimate cooldown is short enough that none of those things ever stop happening. The long version is a math problem most teams can't solve.

Pre-Awakening, Pure Vanilla was a B-tier nostalgia pick. Good for Cookie Odyssey, fine for early Cake Tower, completely outclassed in any serious arena environment. Awakening changed the entire identity of the kit. Her base heal became a sustained AoE that ticks for the full duration of the fight. Her ultimate now grants a 25% ATK buff to the entire team for 8 seconds, refreshing on every cast. And her passive resurrection effect, the thing that made her interesting in lore but useless in practice, now triggers automatically when any ally drops to 1 HP for the first time per match.

That last point is what broke the meta. Every other healer in the game is reactive. You take damage, they heal it back. Pure Vanilla is preventive. She keeps the whole team topped off, she keeps the buff stacking, and she keeps a one-time revive in her back pocket for the play that would have otherwise lost you the match.

> The thing nobody talks about: her resurrection passive doesn't share a cooldown with Sugar Swan's revive. You can run both. Two free revives per fight is not a fair number of revives.

She's also stupidly easy to gear. Five Truthful Raspberry toppings, a beascuit you can craft, and a tart you'll pull from the regular topping bakery. No Magic Candy gating, no exclusive event currency, no premium-only sub-stats. The kit does what it does regardless of how many resources you throw at it. More resources just make the numbers nastier.

For where she sits on the broader power curve, our [Cookie Run: Kingdom tier list](/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list) keeps her permanently pinned to the S+ healer slot, and the [Kingdom Arena meta team](/blog/cookie-run-kingdom/kingdom-arena-meta-team) breakdown shows her in something like 78% of top-1000 defense lineups. That number has not meaningfully moved since November 2025.

## Skill breakdown — what her kit actually does

Her Awakened skill is "Vanilla's Embrace," and it does four things in one button press.

First, it heals all allies for 35% of Pure Vanilla's max HP, then ticks an additional 8% per second for 8 seconds. The tick can crit, which most healing in the game cannot, and crits on her tick can reach absurd numbers if you stack CRIT Damage on her toppings (which you should, see below).

Second, it grants a 25% ATK buff to all allies for 8 seconds. The buff is multiplicative, not additive, which means it stacks cleanly with Aegis Hollyberry's defensive aura and Millennial Tree's flat ATK boost without hitting diminishing returns.

Third, it places a shield on the two allies with the lowest current HP. The shield is 20% of Pure Vanilla's max HP and lasts 5 seconds or until broken. This is the part of the kit that wins her Cake Tower fights. Tower bosses love to gib your backline with a single nuke. The shield turns those nukes into a heal trigger instead of a wipe.

Fourth, the passive resurrection. First ally to drop to 1 HP gets pulled back to 30% HP and 2 seconds of invulnerability. Once per match. No cooldown share with anything else. It's not flashy. It just wins matches.

Cooldown is 18 seconds, which is short for a heal kit of this magnitude. With Magic Candy invested (you should invest, she's a top-3 priority on any roster), the cooldown drops to 16 and the resurrection HP threshold raises to 40%.

> She does not do damage. Stop putting her on attack-focused builds. Every guide that recommends ATK SPD toppings for Pure Vanilla is wrong, and they have been wrong for over a year.

## Best toppings build

![A Raspberry topping, the Truthful Raspberry damage-resist set that defines Pure Vanilla Awakened's optimal build.](/images/gear/toppings/raspberry.png)

This is the build. There is no second-best build. Anyone telling you otherwise is either farming clicks or hasn't run her past floor 35 of Cake Tower.

| Slot | Topping | Sub-Stat Priority |
| --- | --- | --- |
| All 5 slots | Truthful Raspberry | DMG Resist 50% / HP 30% / CRIT Damage 15% |
| Bonus set | x5 Truthful Raspberry | +15% DMG Resist set bonus |
| Magic Candy | Required, Level 15+ | +CD reduction, +revive HP threshold |

The reasoning is straightforward. Truthful Raspberry's set bonus is 15% damage resistance, which scales with her already enormous HP pool and compounds with the shield she throws on allies. DMG Resist sub-stats stack into the same multiplier. HP sub-stats raise the value of every tick of her heal and every point of her shield. And the small CRIT Damage allocation is what turns her heal ticks from "fine" into "actually outpacing boss damage in Cake Tower."

Do not run Searing Raspberry on her. Do not run Solid Almond. Do not run a mixed 3-2 split. The set bonus is what makes the build work, and splitting toppings cuts her effective sustain by roughly 40% in long fights.

The HP/CRIT Damage split is the part most people miss. You want HP for shield value and tick magnitude, but you also want enough crit damage that her ticks meaningfully heal through Guild Battle boss attacks. Stop at 15% on the crit damage sub-stats. Past that you're sacrificing too much HP and DMG Resist for diminishing returns on the heal crit.

For comparison with how we build her sister Ancients, the [Hollyberry build guide](/gear-guide/hollyberry-cookie) covers the tank counterpart, and [Pure Vanilla's main gear page](/gear-guide/pure-vanilla-cookie) has the rune setup and treasure pairing recommendations.

## Best beascuit and topping tart

![A Sweet beascuit, the Tainted Gleaming Sweet that turns Pure Vanilla into a damage sink converting nukes into team heals.](/images/gear/beascuits/sweet.png)

Beascuit: **Tainted Gleaming Sweet**. Attunes: DMGRB x3 + CD x1.

Tainted Gleaming Sweet is the beascuit that drops from Beast-Yeast Episode 9 and crafts at the Beascuit Workshop once you've cleared Episode 10. Its base effect grants a flat 12% damage resist to the wearer and shares 40% of any incoming damage to the nearest 3 allies as a heal-instead-of-damage conversion. On a healer who is already running max HP and DMG Resist, this turns Pure Vanilla into a literal damage sink that converts boss nukes into team heals.

The DMGRB (Damage Resist from Beascuit) attunes stack into the same multiplier as her topping sub-stats. Three rolls of DMGRB combined with the topping set bonus pushes her effective damage resistance past 70%, which is the soft cap before Devsisters' diminishing-returns formula kicks in. The fourth attune slot goes to CD (Cooldown Reduction) to shave another second off her Vanilla's Embrace cast time.

Topping tart: **Raspberry**, stat priority **Attack**.

The Raspberry tart compounds the healing-from-damage-taken interaction the beascuit creates. Attack as the stat priority sounds counterintuitive on a healer, but her heal ticks scale off her ATK stat, not her HP. The tart bumps that scaling by enough to push her heal ticks ahead of all but the worst Guild Battle boss damage rotations.

| Slot | Item | Why |
| --- | --- | --- |
| Beascuit | Tainted Gleaming Sweet | Damage redirect, stacks with set bonus |
| Beascuit Attunes | DMGRB x3 + CD x1 | Hits the DMG Resist soft cap |
| Topping Tart | Raspberry | Compounds the damage-share heal loop |
| Tart Stat | Attack | Scales her heal tick magnitude |

## Team comps that actually win

Three comps cover roughly 90% of competitive content. Pure Vanilla anchors all of them. The other slots flex based on what you're fighting.

**Arena Defense (Warmth of Compassion core)**
- Front: Aegis Hollyberry
- Mid: Pure Vanilla Awakened, Burning Spice (or Eternal Sugar)
- Back: Dark Enchantress, Sugar Swan

This is the ladder-stomping comp. Hollyberry tanks, Pure Vanilla buffs and sustains, Burning Spice or Eternal Sugar provides the burst window, Dark Enchantress crowd-controls the enemy backline, Sugar Swan double-revives anything that dies. Sugar Swan's revive plus Pure Vanilla's passive resurrection means you get two free comebacks per match. For the deeper arena breakdown, the [Kingdom Arena meta team](/blog/cookie-run-kingdom/kingdom-arena-meta-team) post walks the rotations frame by frame.

**Guild Battle (Avatar of Destiny specialist)**
- Front: Aegis Hollyberry, Crunchy Chip
- Mid: Pure Vanilla Awakened
- Back: Frost Queen, Millennial Tree

For the Avatar of Destiny long-fight bosses, you want sustain over burst. Pure Vanilla and Millennial Tree stack buffs into Frost Queen's freeze rotations while Hollyberry and Crunchy Chip hold the front line. The whole comp is built to survive 90-second fights without losing a member. See the broader [Guild Battle team breakdowns](/blog/cookie-run-kingdom/guild-battle-teams) for boss-specific variants.

**Cake Tower (Floor 30+ sustain)**
- Front: Aegis Hollyberry, Black Sapphire
- Mid: Pure Vanilla Awakened
- Back: Dark Enchantress, Sugar Swan

For Cake Tower past floor 30, you need to survive nukes and stall out the timer. This comp is functionally unkillable when geared. The [Decadent Choco Tower walkthrough](/blog/cookie-run-kingdom/decadent-choco-tower-walkthrough) covers tower-specific positioning, but Pure Vanilla is the constant across every floor past 30.

If you're missing pieces, [Sugar Swan](/gear-guide/sugar-swan-cookie) and [Millennial Tree](/gear-guide/millennial-tree-cookie) are the most impactful flex slots to build first. Dark Enchantress is the long-term DPS investment, and her [gear guide](/gear-guide/dark-enchantress-cookie) lays out the build path.

## The Warmth of Compassion rally with Aegis Hollyberry

![Hollyberry Cookie, whose Aegis Awakened form pairs with Pure Vanilla to trigger the meta-defining Warmth of Compassion rally.](/images/cookies/hollyberry-cookie.png)

This is the pairing that broke the meta in v6.5, and it has not been answered.

The mechanic: when Pure Vanilla and Aegis Hollyberry are on the same team, casting either of their ultimates within 3 seconds of the other triggers the "Warmth of Compassion" rally. The rally grants the entire team a 30% damage reduction shield and a 20% ATK SPD buff for 6 seconds. It costs nothing. It's an automatic interaction.

The trick is rotating the ultimates so the rally is always active during enemy burst windows. Aegis Hollyberry casts first to set up the shield, Pure Vanilla casts within 2 seconds to trigger the rally and stack her own ATK buff on top. Six seconds of 30% DR plus 25% ATK plus 20% ATK SPD plus her heal tick plus the resurrection passive in reserve. That is what teams have to fight through every match, and most of them simply can't.

> The Warmth of Compassion rally is the closest thing Cookie Run: Kingdom has to a degenerate combo. It is two ultimates and you get a fourth ability for free. Devsisters has not nerfed it because they cannot nerf it without breaking the Ancients identity at the kit level.

The counter, for what it's worth, is hard burst from a Magic-type DPS while the rally is on cooldown. Sherbet Cookie's freeze chain interrupts the ultimate sync timing. Compound Cookie's stun if it lands on Hollyberry first prevents the rally trigger. Neither counter is reliable, and both require you to win the speed race off the opening cast.

If you're building toward this comp, prioritize Pure Vanilla's awakening first, then [Hollyberry's gear](/gear-guide/hollyberry-cookie). The two of them together are stronger than either piece individually by a margin that justifies the investment.

## F2P investment path — how to get the Awakened form

Base Pure Vanilla is fully F2P. She unlocks through the main story in World Exploration Episode 9. Her soulstones drop reliably from Story Stage 12-22 and the Vanilla Kingdom Cookie Odyssey rotation.

The Awakening is the longer grind. The v6.5 Awakening quest chain ("The Light That Remembers") unlocks after you've cleared Beast-Yeast Episode 7 and own a 5-star base Pure Vanilla. The chain requires:

- 300 Pure Vanilla soulstones (on top of what you used to 5-star her)
- 50 Ancient Soul Essences (drop from World Exploration hard-mode stages)
- 20 Crystal of Conviction (event-locked, but rotates back every 4-6 weeks)
- Clearing a solo gauntlet of 5 boss fights using only Pure Vanilla

The realistic timeline for a daily F2P player is 3-6 months from the moment you start the awakening quest. The soulstones are the slow part. Spend your Mileage Shop currency on her soulstones once she's available, and prioritize her in any soulstone selection chest the game hands out.

Magic Candy is the second investment hurdle. She's a top-3 Magic Candy priority on any roster, full stop. Save your Magic Powder for her even if you have to skip a candy on a DPS you're using more often.

Skip her in the standard gacha. Her base form pity rates aren't worth burning crystals on when she's available in the story, and the Awakened form doesn't drop from any banner. It's a soulstone grind no matter what you spend.

## Quick Action Checklist

- [ ] Pull and 5-star base Pure Vanilla via story drops + Mileage Shop soulstones
- [ ] Clear Beast-Yeast Episode 7 to unlock the Awakening quest chain
- [ ] Farm 300 awakening soulstones (3-6 months of daily play)
- [ ] Run all 5 toppings as Truthful Raspberry, sub-stats DMG Resist 50% / HP 30% / CRIT Damage 15%
- [ ] Craft Tainted Gleaming Sweet beascuit, attune DMGRB x3 + CD x1
- [ ] Equip Raspberry tart with Attack stat priority
- [ ] Invest Magic Candy to at least Level 15
- [ ] Pair her with Aegis Hollyberry to trigger Warmth of Compassion rally
- [ ] Build Sugar Swan as your secondary healer for double-revive comps
- [ ] Use her in Arena Defense, Guild Battle long fights, and Cake Tower past floor 30
`,
  faq: [
    {
      question: "Is Pure Vanilla Cookie Awakened worth the investment in 2026?",
      answer: "Yes, without qualification. She has been S+ for over a year, the Warmth of Compassion rally with Aegis Hollyberry has not been answered by any patch since v6.5, and she sits in roughly 78% of top-1000 arena defense lineups. She is also fully F2P-accessible if you put in the soulstone grind. There is no healer in the game with a better return on investment.",
    },
    {
      question: "What toppings should I run on Pure Vanilla Cookie Awakened?",
      answer: "Five Truthful Raspberry toppings, no exceptions. Sub-stats should prioritize DMG Resist (target 50% across all 5 toppings), then HP (target 30%), then CRIT Damage (cap at 15%). Mixed sets and Searing Raspberry builds are strictly worse because you lose the 15% DMG Resist set bonus that makes the kit work at high difficulty.",
    },
    {
      question: "Which beascuit is best for Pure Vanilla Awakened?",
      answer: "Tainted Gleaming Sweet, crafted at the Beascuit Workshop after clearing Beast-Yeast Episode 10. Attune slots should be DMGRB x3 + CD x1. This combination pushes her effective damage resistance past the 70% soft cap and shaves a full second off her ultimate cooldown, which is the difference between maintaining the Warmth of Compassion rally and missing a rotation.",
    },
    {
      question: "What is the Warmth of Compassion rally and how do I trigger it?",
      answer: "The Warmth of Compassion is an automatic interaction between Pure Vanilla Cookie Awakened and Aegis Hollyberry. When both are on your team and you cast their ultimates within 3 seconds of each other, the rally activates a 30% damage reduction shield and 20% ATK SPD buff for the entire team for 6 seconds. Cast Hollyberry first, then Pure Vanilla within 2 seconds for the optimal stack.",
    },
    {
      question: "How long does it take to get Awakened Pure Vanilla as F2P?",
      answer: "Expect 3-6 months of daily play from the moment you start the v6.5 Awakening quest chain. The bottleneck is the 300 additional soulstones required on top of the ones used to 5-star her base form. Spend Mileage Shop currency on her soulstones, prioritize her in selection chests, and the timeline gets meaningfully shorter.",
    },
    {
      question: "Can I run Pure Vanilla Awakened without Aegis Hollyberry?",
      answer: "Yes, she is still S+ tier on her own. The Warmth of Compassion rally is the strongest pairing in the game, but Pure Vanilla solo with any tank front line still outperforms most other healer kits. Cake Tower comps in particular use Black Sapphire or Crunchy Chip as the front line and lose very little compared to the Hollyberry pairing.",
    },
    {
      question: "Should I invest Magic Candy in Pure Vanilla Awakened?",
      answer: "Yes, top-3 priority on any roster. Magic Candy at Level 15 reduces her ultimate cooldown from 18 to 16 seconds and raises her passive resurrection HP threshold from 30% to 40%. Both upgrades compound across every game mode she's used in. Skip a candy on a DPS you use more often if you have to. She earns it back inside a week.",
    },
  ],
  internalLinks: [
    { href: '/gear-guide/pure-vanilla-cookie', anchor: "Pure Vanilla's main gear page" },
    { href: '/gear-guide/hollyberry-cookie', anchor: 'Hollyberry build guide' },
    { href: '/gear-guide/dark-enchantress-cookie', anchor: 'Dark Enchantress gear guide' },
    { href: '/gear-guide/sugar-swan-cookie', anchor: 'Sugar Swan' },
    { href: '/gear-guide/millennial-tree-cookie', anchor: 'Millennial Tree' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list', anchor: 'Cookie Run: Kingdom tier list' },
    { href: '/blog/cookie-run-kingdom/decadent-choco-tower-walkthrough', anchor: 'Decadent Choco Tower walkthrough' },
    { href: '/blog/cookie-run-kingdom/guild-battle-teams', anchor: 'Guild Battle team breakdowns' },
  ],
  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Pure_Vanilla_Cookie', title: 'Pure Vanilla Cookie — Cookie Run: Kingdom Wiki' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Cookie_Run:_Kingdom_Wiki', title: 'Cookie Run: Kingdom Wiki' },
    { url: 'https://www.pocketgamer.com/cookie-run-kingdom/', title: 'Cookie Run: Kingdom coverage — Pocket Gamer' },
    { url: 'https://www.playcookierun.com/', title: 'Official Cookie Run franchise site' },
    { url: 'https://www.devsisters.com/en/', title: 'Devsisters — Cookie Run: Kingdom developer' },
  ],
};
