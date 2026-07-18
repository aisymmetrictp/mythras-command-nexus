import type { BlogPost } from '../../blogTypes';

export const peppermintCookieToppingsBuild: BlogPost = {
  slug: 'peppermint-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'cookie-deep-dive',

  tags: ['peppermint-cookie', 'toppings', 'epic-cookies', 'support', 'healer'],

  title: 'Peppermint Cookie Toppings Build & Full Guide',
  metaDescription:
    'Peppermint Cookie build guide for July 2026: the 5x Swift Chocolate cooldown spread, substats, resonant Sea Salt toppings, Magic Candy, and Water-team fit.',
  excerpt:
    "Peppermint is the Epic support most players underrate right up until a Burn-heavy boss deletes their healer. Heals, shields, DMG Resist, Debuff Resist, and a full Burn dispel — all on one Cookie. Here is the cooldown-first build, the Magic Candy case, and why she is secretly a mono-Water linchpin.",
  featuredImagePrompt:
    'Peppermint Cookie center frame, a small sailor-suited Cookie with turquoise hair and a peppermint-striped hat, blowing a spiral conch shell as a translucent blue whale of water arcs behind them, cool aqua and white palette, Cookie Run: Kingdom key-art style, painterly cel-shaded, soft sea-light',
  heroImage: '/images/cookies/peppermint-cookie.png',
  heroImageAlt:
    'Peppermint Cookie, the Epic-rarity Water Support healer and shielder this July 2026 toppings build guide is for.',
  imageSources: [
    { src: '/images/cookies/peppermint-cookie.png', sourceUrl: 'owned-asset' },
    { src: '/images/gear/toppings/chocolate.png', sourceUrl: 'owned-asset' },
    { src: '/images/cookies/sorbet-shark-cookie.png', sourceUrl: 'owned-asset' },
    { src: '/images/cookies/sea-fairy-cookie.png', sourceUrl: 'owned-asset' },
  ],

  publishDate: '2026-07-18T00:00:00.000Z',
  lastUpdated: '2026-07-18T00:00:00.000Z',

  primaryKeyword: 'peppermint cookie toppings',
  secondaryKeywords: [
    'peppermint cookie build',
    'best toppings peppermint',
    'peppermint cookie magic candy',
    'peppermint cookie guide',
    'peppermint cookie team',
    'peppermint cookie substats',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,

  toc: [
    { id: 'who-peppermint-actually-is', label: 'Who Peppermint actually is', level: 2 },
    { id: 'why-cooldown-is-the-whole-build', label: 'Why cooldown is the whole build', level: 2 },
    { id: 'the-standard-peppermint-topping-build', label: 'The standard Peppermint topping build', level: 2 },
    { id: 'substat-priorities-without-the-fake-numbers', label: 'Substat priorities without the fake numbers', level: 2 },
    { id: 'resonant-toppings-and-gear', label: 'Resonant toppings and gear', level: 2 },
    { id: 'the-magic-candy-is-the-real-reason-to-build-her', label: 'The Magic Candy is the real reason to build her', level: 2 },
    { id: 'tart-beascuit-and-treasures', label: 'Tart, beascuit, and treasures', level: 2 },
    { id: 'team-comps-and-where-she-fits', label: 'Team comps and where she fits', level: 2 },
    { id: 'where-to-farm-her-soulstones', label: 'Where to farm her Soulstones', level: 2 },
    { id: 'common-peppermint-build-mistakes', label: 'Common Peppermint build mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Peppermint Cookie is the support players skip until a Burn-heavy boss cooks their team and they realize she is the Cookie who could have dispelled all of it. She heals, she shields, she hands out DMG Resist and Debuff Resist, and with her Magic Candy she strips Burn off the entire team — including the undispellable kind. That is a genuinely rare toolkit, and it is wasted on the "eh, she's just an Epic" pile.

This is the July 2026 build sheet for her: toppings, substats, resonant gear, Magic Candy, team fit, and the mistakes that keep her a bench support. The short version is that she is a cooldown Cookie — her whole value is uptime — and once you accept that, the build gets simple.

## Who Peppermint actually is

Peppermint Cookie is **Epic rarity**, **Support** class, and their position is prioritized to the **Rear**. Their element is **Water**, and they released in the A Mermaid's Tale update as the 100th non-limited-time Cookie in the game. Pronouns are they/them, and the whole kit is themed around a conch-shell ocarina that summons the Peppermint Whale.

Their skill is **Freshness of the Sea**, on a 17-second cooldown, and it is a genuine Swiss-army support:

- **A team heal** based on their ATK.
- **Debuff Resist +35%** and **DMG Resist +14.5%**, both for 15 seconds.
- **An HP Shield** blocking damage equal to 15% of Max HP for 5 seconds.
- The **Peppermint Whale** deals Water-type damage to enemies in front and heals allies for a chunk of that damage.
- **Endless Flow**, which now applies to enemies (as of the Premonition of Doom patch).

On top of that, their regular attack heals the two lowest-HP allies. So even between skill casts they are trickling healing into the team. This is a support that does four jobs — heal, shield, mitigate, cleanse — which is exactly why cooldown matters so much on them.

## Why cooldown is the whole build

Here is the thing about a Cookie who does four things on one button: the more often you press the button, the more value you extract, linearly. A DPS Cookie has a damage ceiling; a support like Peppermint has an *uptime* ceiling. Every second you shave off Freshness of the Sea means more shield coverage, more DMG Resist windows, more heals, and — once you have the Magic Candy — more Burn cleanses.

That is why the build is not a debate. She is not stacking ATK to hit a damage number; her ATK feeds her heal, but her survival value comes from keeping the skill flowing. So you build cooldown, you keep her alive in the back row, and you let the toolkit do the rest. If you are still shaky on how topping main-stats and substats split, the [toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide) covers the fundamentals this build assumes.

## The standard Peppermint topping build

![Swift Chocolate topping icon, the Cooldown set that forms the entire backbone of the standard Peppermint build.](/images/gear/toppings/chocolate.png)

**5x Swift Chocolate (Cooldown).** That is the standard, and it is the consensus for getting the most out of a support whose value is uptime.

The build:

- **Toppings:** 5x Swift Chocolate (Cooldown)
- **Resonant gear:** Refreshing Peppermint (their signature artifact)
- **Tart:** a cooldown tart
- **Magic Candy:** equipped and leveled — this is the priority, more below

There is a defensive alternate worth knowing: **5x Solid Almond (DMG Resist)** if you specifically need Peppermint to survive a mode where the back row gets focused and you already have cooldown covered elsewhere. But for the general case, Swift Chocolate wins because every cast is worth so much on her. You are not choosing between offense and defense here — cooldown *is* her defense, because her shields and mitigation only protect the team while the skill is actually up.

## Substat priorities without the fake numbers

Substats are where the CRK community loves to invent exact percentages nobody can verify. I am not going to hand you a fake "you need exactly 74.1% cooldown" target. Here is the honest version.

Priority order:

1. **Cooldown** — yes, on top of the Swift Chocolate main stat. On a support this valuable per cast, more cooldown is almost never wasted. Roll for it first.
2. **ATK%** — her heal and the Peppermint Wave healing scale off ATK, so ATK% raises how much each heal actually restores. Take ATK% over flat ATK; the percentage scales with her base stat.
3. **DMG Resist** — a survivability backstop so a stray hit does not delete her before the next cast. She is rear-line, so this is third, not first.

The practical rule: **roll Cooldown, back it with ATK% for heal output, keep a little DMG Resist so she survives, and stop chasing a perfect set.** Substats have diminishing returns past a reasonable spread. Once her skill is up often and her heals are landing for a meaningful amount, your effort is better spent building your next Cookie.

## Resonant toppings and gear

Peppermint has access to the **Sea Salt** resonant topping set — the ocean-themed resonant toppings tied to her conch — and her resonant artifact is **Refreshing Peppermint**. Resonant toppings and gear are a deeper investment layer that pays off once you are optimizing a specific Cookie rather than spreading resources thin, so treat them as the polish on top of the standard Swift Chocolate build, not the starting point. If you are not there yet, the plain 5x Swift Chocolate set does her job perfectly well. When you are ready to specialize her, the resonant layer is where the extra squeeze lives.

## The Magic Candy is the real reason to build her

If you take one thing from this guide: Peppermint's Magic Candy, **Refreshing Waves**, is what turns her from a fine generic healer into a targeted counter. It does several things:

- **Dispels all Burn from allies — including undispellable Burn** (the one exception is Explosive Burn). Against a Burn-stacking boss, that is a hard counter, not a nice-to-have.
- Casts an **HP Shield relative to the target's HP**, and drops the skill cooldown from 17 seconds to **13 seconds**.
- For **Water-type allies specifically**, the buffs from Freshness of the Sea are amplified and the HP Shield becomes twice as powerful (up to 35% of Max HP for 7 seconds).
- The Peppermint Wave deals **big extra damage to monsters in PvE**, so she chips in real damage against bosses instead of being pure utility.

That Water-type amplification is the quiet reason she is a mono-Water linchpin — on an all-Water team her shields roughly double and her buffs get stronger. Level her Magic Candy to a functional baseline before you call her built, then push it if she anchors a Water team or you are hitting Burn-heavy content. The [Magic Candy priority guide](/blog/cookie-run-kingdom/crk-magic-candy-priority-guide) has the framework for where she sits in your Soul Essence spending — a support this specialized earns the investment on the right team.

## Tart, beascuit, and treasures

Match the tart to the build: the standard cooldown build wants a **cooldown tart** to push uptime even further, which is the entire point of how you gear her. For the beascuit slot, lean into cooldown and ATK so her heals land harder and her skill recurs faster — do not bring a beascuit tuned for a damage role that has nothing to do with a support.

For treasures, the through-line is uptime and survivability: a battle-start cooldown treasure gets her first shield out sooner, and anything that reduces skill cooldown compounds with everything else on her. The [treasures guide](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide) covers the current best-in-slot cooldown and defensive options and how they stack.

## Team comps and where she fits

![Sorbet Shark Cookie, one of the Water allies Peppermint can understand and whose mono-Water team her Magic Candy doubles shields for.](/images/cookies/sorbet-shark-cookie.png)

Peppermint is a rear-line support, so she slots behind your damage and holds the team together:

- **A mono-Water core.** This is her best home. Her Magic Candy roughly doubles shields and amplifies buffs for Water-type allies, so a team built around Water carries gets disproportionate value out of her. She literally understands Sorbet Shark's bubble-speak in lore, and mechanically she loves the company.
- **A Water DPS to protect.** Pair her with a carry from the [DPS tier list](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked) — a Water nuker like Sea Fairy benefits from both the shield uptime and the amplified buffs, letting the carry stay aggressive without dying.
- **A second healer or a tank for Burn content.** Against a Burn boss she is the cleanse; pair her with a Cookie from the [healer tier list](/blog/cookie-run-kingdom/best-crk-healers-ranked) or a wall so the front line survives while she strips Burn and shields.

![Sea Fairy Cookie, the kind of aggressive Water carry whose survival Peppermint's amplified shields and buffs enable.](/images/cookies/sea-fairy-cookie.png)

She fits the support slot in the shells the [best PvE teams guide](/blog/cookie-run-kingdom/best-crk-pve-teams) and the [Kingdom Arena meta team](/blog/cookie-run-kingdom/kingdom-arena-meta-team) lay out, and she is at her absolute best in longer PvE fights where cleanse, shields, and healing all have time to pay off. Keep her in the rear where her Support kit is designed to work.

## Where to farm her Soulstones

If you did not pull Peppermint, they are farmable. Their Soulstones drop in **Goddess of Eternal Gold, stage 18-27 on Dark Mode**. It is a slow grind like every Soulstone farm, but Peppermint is one of the more worthwhile Epic supports to unlock this way because the Burn cleanse and Water-team amplification give them a job no amount of Legendaries fully replaces.

## Common Peppermint build mistakes

In rough order of how often they show up:

1. **Building ATK over cooldown.** Her ATK feeds her heal, but a bigger heal you cast half as often is worse than a solid heal you cast constantly. Cooldown first, always.
2. **Skipping the Magic Candy.** The Burn dispel and Water-team shield doubling are the reason to run her over a generic healer. Without the Magic Candy she is just okay.
3. **Running her off a Water team and expecting the amplification.** The doubled shields and stronger buffs only apply to Water-type allies. On a mixed team she is still fine, but you are leaving her best trait unused.
4. **Full DMG Resist as the default.** The Solid Almond set is a niche defensive pick, not the standard. Only reach for it when the back row is getting focused and cooldown is handled elsewhere.
5. **Treating her as pure utility.** Her Magic Candy Peppermint Wave does real extra damage to monsters — she chips in against bosses, so do not write off her ATK entirely.
6. **Pulling her to the front.** She is a rear-line Support. Up front she gets focused and dies before her toolkit matters. Keep her in the back.

## Quick Action Checklist

- Equip 5x Swift Chocolate (Cooldown) as the standard build
- Roll Cooldown substats first, then ATK% for heal output, then a little DMG Resist — and do not reroll forever
- Take ATK% over flat ATK every time
- Run her Refreshing Peppermint resonant gear (and Sea Salt resonant toppings) once you are optimizing her
- Pair a cooldown tart with the standard build
- Level her Magic Candy — the Burn dispel and Water-team shield doubling are the whole point
- Build her into a mono-Water core to double shields and amplify buffs for Water allies
- Bring her specifically against Burn-heavy bosses as a hard cleanse
- The 5x Solid Almond (DMG Resist) set is the niche pick when the back row is getting focused
- Keep her in the rear where her Support kit works
- Farm Soulstones at Goddess of Eternal Gold 18-27 (Dark) if you did not pull her`,

  faq: [
    {
      question: 'What are the best toppings for Peppermint Cookie?',
      answer:
        'The standard build is 5x Swift Chocolate (Cooldown). Peppermint is a Water Support whose value is uptime — heals, shields, DMG Resist, Debuff Resist, and a Burn cleanse all ride on one skill, so the more often it casts, the more value you get. Roll Cooldown substats first, then ATK% to raise heal output, then a little DMG Resist to survive. A 5x Solid Almond (DMG Resist) set is a niche defensive alternate for when the back row is getting focused and cooldown is handled elsewhere.',
    },
    {
      question: 'What class and rarity is Peppermint Cookie?',
      answer:
        'Peppermint Cookie is an Epic-rarity, Support-class Cookie whose position is prioritized to the Rear line, with the Water element. They released in the A Mermaid\'s Tale update as the 100th non-limited-time Cookie in the game. Their skill, Freshness of the Sea, summons the Peppermint Whale to heal the team, grant Debuff Resist and DMG Resist, cast an HP Shield, and deal Water damage.',
    },
    {
      question: 'Is Peppermint Cookie\'s Magic Candy worth it?',
      answer:
        'Yes — the Magic Candy, Refreshing Waves, is the main reason to build her. It dispels all Burn from allies including undispellable Burn (except Explosive Burn), drops her cooldown from 17 to 13 seconds, casts an HP Shield relative to the target\'s HP, and for Water-type allies specifically it amplifies her buffs and roughly doubles the shield (up to 35% of Max HP). It also makes the Peppermint Wave deal big extra damage to monsters in PvE. Against Burn-heavy bosses she becomes a hard counter, and on a mono-Water team she is a linchpin.',
    },
    {
      question: 'What team should I run with Peppermint Cookie?',
      answer:
        'Her best home is a mono-Water team, because her Magic Candy amplifies buffs and doubles shields for Water-type allies. Pair her with a Water carry like Sea Fairy to protect, plus a tank or second healer for tougher content. She is also a targeted answer to Burn-stacking bosses thanks to her full Burn dispel. Keep her in the rear where her Support kit is designed to work, and lean on her most in longer PvE fights where cleanse, shields, and healing all pay off.',
    },
    {
      question: 'Where do I farm Peppermint Cookie Soulstones?',
      answer:
        'Peppermint Cookie Soulstones drop in Goddess of Eternal Gold stage 18-27 on Dark Mode. It is a slow grind, but Peppermint is one of the more worthwhile Epic supports to unlock through Soulstones because the Burn cleanse and Water-team amplification fill a role that Legendaries do not fully replace.',
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/crk-toppings-guide', anchor: 'toppings guide' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide', anchor: 'treasures guide' },
    { href: '/blog/cookie-run-kingdom/crk-magic-candy-priority-guide', anchor: 'Magic Candy priority guide' },
    { href: '/blog/cookie-run-kingdom/best-crk-healers-ranked', anchor: 'healer tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked', anchor: 'DPS tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-pve-teams', anchor: 'best PvE teams guide' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Peppermint_Cookie', title: 'Cookie Run: Kingdom Wiki — Peppermint Cookie' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Toppings', title: 'Cookie Run: Kingdom Wiki — Toppings' },
  ],

  tldr:
    "Peppermint Cookie is an Epic Water Support on the rear line whose skill, Freshness of the Sea, heals, shields, and grants DMG Resist and Debuff Resist all at once — so cooldown is the whole build. Run 5x Swift Chocolate (Cooldown) with Cooldown substats first, then ATK% for heal output and a little DMG Resist. Her Magic Candy, Refreshing Waves, is the real reason to build her: it dispels all Burn (even undispellable), drops her cooldown to 13 seconds, and for Water-type allies amplifies buffs and doubles shields, making her a mono-Water linchpin and a hard counter to Burn bosses. Farm her Soulstones at Goddess of Eternal Gold 18-27 on Dark Mode.",
};
