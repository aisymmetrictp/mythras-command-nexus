import type { BlogPost } from '../../blogTypes';

export const moonlightCookieToppingsBuild: BlogPost = {
  slug: 'moonlight-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'cookie-deep-dive',

  tags: ['moonlight cookie', 'toppings builds', 'legendary cookies', 'crystal jam', 'arena defense'],

  title: 'Moonlight Cookie Toppings Build and Crystal Jam Guide',
  metaDescription:
    'Moonlight Cookie toppings build: Swift Chocolate vs Searing Raspberry, the Crystal Jam beascuit trick that converts Cooldown into DMG Resist Bypass, and team fits.',
  excerpt:
    "Moonlight Cookie has been putting entire Arena teams to sleep since January 2023, and her 2024 Crystal Jam quietly turned her into one of the best-scaling Legendaries in the game. Here's the build sheet — including the beascuit interaction that literally converts Cooldown into DMG Resist Bypass.",
  featuredImagePrompt:
    'Moonlight Cookie floating asleep above a dreaming city of wizards, deep indigo night sky full of falling stars, a giant crescent moon behind her, wavy silver-blue hair drifting like water, Cookie Run: Kingdom key-art style, painterly cel-shaded, soft starlight glow',
  heroImage: '/images/blog/cookie-run-kingdom/moonlight-cookie-toppings-build/moonlight-illustration.webp',
  heroImageAlt: 'Moonlight Cookie, the Legendary Magic-class sleep specialist from the City of Wizards, in her official illustration.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/moonlight-cookie-toppings-build/moonlight-illustration.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Moonlight_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/moonlight-cookie-toppings-build/moonlight-sprite.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Moonlight_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/moonlight-cookie-toppings-build/moonlight-soulstone.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Moonlight_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    { src: '/images/gear/toppings/chocolate.png', sourceUrl: 'owned-asset' },
    { src: '/images/cookies/star-coral-cookie.png', sourceUrl: 'owned-asset' },
  ],

  publishDate: '2026-07-13T00:00:00.000Z',
  lastUpdated: '2026-07-13T00:00:00.000Z',

  primaryKeyword: 'moonlight cookie toppings',
  secondaryKeywords: [
    'moonlight cookie build',
    'best toppings moonlight cookie',
    'moonlight cookie crystal jam',
    'moonlight cookie beascuit',
    'crk moonlight guide',
    'moonlight cookie arena defense',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,

  toc: [
    { id: 'the-legendary-that-naps-mid-fight', label: 'The Legendary that naps mid-fight', level: 2 },
    { id: 'dream-of-the-night-sky-decoded', label: 'Dream of the Night Sky, decoded', level: 2 },
    { id: 'the-topping-build-swift-chocolate-first', label: 'The topping build: Swift Chocolate first', level: 2 },
    { id: 'substat-priorities-for-both-lanes', label: 'Substat priorities for both lanes', level: 2 },
    { id: 'the-beascuit-trick-cooldown-becomes-bypass', label: 'The beascuit trick: Cooldown becomes Bypass', level: 2 },
    { id: 'what-her-crystal-jam-actually-adds', label: 'What her Crystal Jam actually adds', level: 2 },
    { id: 'where-she-fits-teams-and-modes', label: 'Where she fits: teams and modes', level: 2 },
    { id: 'soulstones-and-moonkissed-resonant-toppings', label: 'Soulstones and Moonkissed resonant toppings', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Moonlight Cookie fights by falling asleep. That's not flavor text — her skill animation is her drifting off mid-battle, going intangible, and dreaming stars onto the enemy team's heads while they collectively pass out. She's been a defensive Arena menace since she launched with the Invitation from the Slumbering Moon update in January 2023, and her August 2024 Crystal Jam upgrade is one of the biggest glow-ups any Legendary has received: it added team-wide debuff resistance, a self damage amplifier, and an enchantment that converts beascuit Cooldown directly into DMG Resist Bypass at a 1.7-to-1 rate.

That last sentence is the single most build-relevant fact about her, and most topping guides don't mention it at all. Here's the full sheet: toppings, substats, the beascuit interaction, what the Crystal Jam changes, and where she actually wins games.

## The Legendary that naps mid-fight

![Moonlight Cookie's default standing sprite, drifting asleep with her staff.](/images/blog/cookie-run-kingdom/moonlight-cookie-toppings-build/moonlight-sprite.webp)

The card: Moonlight Cookie is **Legendary rarity**, **Magic class**, position prioritized to the **Middle**. She released on January 19, 2023 alongside Milky Way Cookie in the Invitation from the Slumbering Moon update (v4.0), and she's the celestial custodian of the City of Wizards — a Guardian of Nature built by the ancient Wizards to protect their city while she dreams.

Class and position matter here. As a Magic cookie in the Middle, she's a caster who wants the fight to run long enough for her 15-second skill to fire at least twice. She isn't a burst mage like Frost Queen, and she isn't a pure controller — she's a damage-dealing disruptor whose crowd control (Sleep and Drowsiness) doubles as her survival plan, because a sleeping enemy is an enemy not hitting your team.

Her wiki-listed stat focuses tell you the build before any guide does: **Cooldown, DMG Resist Bypass, and ATK.**

## Dream of the Night Sky, decoded

Her base skill, **Dream of the Night Sky**, runs on a **15-second base cooldown** and lands in three layers:

- **Star of the Nightsky.** Stars fall on the enemy team, ticking up to **x10 times over 1.8 seconds at 119.6% damage per tick at max level**, plus an additional 5.5% of Max HP against Cookies. The starlight **ignores 40% of DMG Resist** and stamps a **+25% incoming damage debuff for 12 seconds** on everything it hits. That debuff is the quiet team-wide value: everyone on your side hits 25% harder into marked targets.
- **Moonlight of the Nightsky.** A follow-up moonbeam that deals 125% ATK plus 3% true damage proportional to Max HP against Cookies (255% against everything else) and applies **Sleep for 2 seconds**. Enemies that resist the Sleep become **Drowsy** instead — ATK SPD and MOV SPD -15% for 15 seconds — and will eventually fall asleep when their resistance statuses wear off. You don't dodge her nap; you postpone it.
- **Dreaming Moon.** When she wakes, she restores **29.8% of her ATK as self-healing** — and she also self-heals whenever she wakes from an enemy's Sleep effect. Sleeping her is feeding her.

Two riders: she's **intangible while casting**, and as a dweller of the World of Dreams she's unaffected by the Beckoning Dreams and Dream of Doom mechanics. The Max HP damage is capped at 300,000, like every effect of its kind.

## The topping build: Swift Chocolate first

![Swift Chocolate topping, the cooldown set that keeps Moonlight Cookie's sleep loop running.](/images/gear/toppings/chocolate.png)

The wiki's topping row for her lists exactly two families — **Swift Chocolate and Searing Raspberry**, both shown in their Moonkissed resonant variants — and that matches how she actually plays:

**Build 1 — 5x Swift Chocolate (Cooldown).** The default, and it isn't close for most players. Everything she does — the +25% damage amp, the Sleep wave, the Drowsy slow, the self-heal — is gated behind that 15-second cooldown. Every point of Cooldown compresses the window where the enemy team is awake and functioning. On Arena defense, a faster second cast is routinely the difference between a hold and a loss. And if you run her Crystal Jam at enchant level 20, Cooldown gets a second job entirely (next section).

**Build 2 — 5x Searing Raspberry (ATK).** The damage lane. Her max-level star shower ticks at 119.6% per hit up to ten times with 40% resist bypass — that's real carry damage, and ATK also scales her self-heal. Run this only when she's your primary damage source and something else on the team covers disruption. In most comps she generates more wins from casting sooner than from hitting harder.

Split sets are the one thing I'd avoid: her value spikes on skill cast, so a half-committed 3/2 between Chocolate and Raspberry waters down both plans. Pick a lane. The [toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide) has the general framework if you're new to set bonuses.

## Substat priorities for both lanes

For the Swift Chocolate build:

1. **Cooldown** — the whole plan. Stack it on toppings, substats, and beascuit.
2. **ATK%** — the strong second. Damage amp plus her own ticks means ATK is never wasted on her.
3. **DMG Resist** — she's intangible while casting but very much tangible between casts; Middle-position casters still eat splash and dive damage.
4. **CRIT%** — take it where it lands, don't chase it.

For the Searing Raspberry build, swap the top two: ATK% first, Cooldown a close second.

The honest stopping point: once her skill loop feels continuous — cast, sleep wave, short awake window, cast again — extra Cooldown rerolls are vanity. Her power comes from the loop existing, not from perfecting it.

## The beascuit trick: Cooldown becomes Bypass

Here's the fact that should headline every Moonlight guide written after August 2024. Her Crystal Jam skill's **level 20 enchantment reads: Skill DMG Resist Bypass +1.7% for each 1% of Cooldown reduced by Beascuits, capped at 30%.**

Sit with that. A Cooldown-line beascuit on Crystal Jam Moonlight isn't just tempo — the game converts those beascuit Cooldown percentages into up to **30% additional DMG Resist Bypass on her skill**, stacked on top of the 35% bypass her Crystal Jam starlight already carries. No other stat on a beascuit does double duty like that for her. The build instruction writes itself: **give her a Cooldown-primary beascuit and treat every Cooldown line on it as a damage stat.** The [beascuit tier list](/blog/cookie-run-kingdom/beascuit-tier-list) covers which beascuit frames are worth this kind of investment.

Tart: **Cooldown** on the default build, ATK on the Raspberry lane. Same logic as everywhere else — don't mix a tart that fights your toppings.

## What her Crystal Jam actually adds

Her Crystal Jam skill, **Twinkling Starry Sky**, arrived August 14, 2024 with the Song of the Night Sea update (v5.8) and replaces her base skill outright:

- **Rally Effect (Moonlight's Protection):** the whole team gains **Debuff Resist on entering battle — 7% at base, 22.5% at max** — plus an extra undispellable +20% for 3 seconds every time she casts. Passive, team-wide, always on. This alone changes her from a specialist into glue.
- **Brilliant Starlight:** ten ticks at 33% each, up to 2.5% of Max HP against Cookies, **35% DMG Resist Bypass**, the +25% incoming-damage debuff, **Sleep for 2.5 seconds refreshing on every tick** (so the real sleep duration per cast runs longer than the tooltip), and a heavier Drowsy at -20% ATK SPD and MOV SPD.
- **Gleaming Moonlight:** a three-tick follow-up at up to 70.7% per tick plus 2% true Max HP damage against Cookies.
- **Night Sky:** her own buffs amplified by +30%, full immunity to Sleep and Drowsy, and she heals when enemies try to sleep her.

The enchantments keep scaling: level 10 adds a Radiant Crescent hit (103.2% ATK with 35% bypass), level 20 adds **Falling Stars on the five highest-ATK targets at 144% ATK** plus the Cooldown-to-Bypass conversion, and level 30 gives Falling Stars area damage at 107.7%. On top of that, the September 2024 balance patch buffed Brilliant Starlight's ticks from 25.5% to 33% and added the 35% bypass — Devsisters has actively invested in keeping her relevant. If you're deciding which Legendary to awaken next, the [awakening guide](/blog/cookie-run-kingdom/crk-awakening-guide) covers the resource math; Moonlight is one of the higher-payoff Crystal Jams among the Legendaries because it upgrades her damage, her control, and her team utility in one purchase.

## Where she fits: teams and modes

She's on the shortlist of [best Legendary cookies](/blog/cookie-run-kingdom/best-legendary-cookies-crk-ranked) for three jobs:

- **Arena defense.** Her signature. An attacker's team that spends 2.5-plus seconds asleep while carrying a +25% damage amp debuff loses tempo it never gets back, and her Drowsy slow degrades everything that resisted the nap. She has anchored [Arena defense teams](/blog/cookie-run-kingdom/best-crk-arena-defense-teams) for three years because auto-battle AI has no answer to losing control of its own cookies.
- **Long PvE fights.** The +25% amp is a team damage multiplier, the Crystal Jam debuff resist blunts boss mechanics, and her self-healing keeps her standing without healer attention. She slots into guild boss teams as a hybrid second-support — the [Guild Battle guide](/blog/cookie-run-kingdom/crk-guild-battle-guide) covers where amp debuffers rank against pure buffers.
- **Anything with sleep or dream mechanics.** She's immune to Sleep and Drowsy (Crystal Jam), heals off enemy sleep attempts, and ignores Beckoning Dreams and Dream of Doom outright. When the content is dream-themed, she's a hard counter by design.

Team shape: a real front line (she's Middle, not a tank), one hard carry to cash in the +25% amp window, and a healer that appreciates her buying dead time. She pairs naturally with the Dream-world roster she shares resonant toppings with — including [Star Coral Cookie](/blog/cookie-run-kingdom/star-coral-cookie-toppings-build), whose own kit loves an enemy team that's asleep.

## Soulstones and Moonkissed resonant toppings

![Moonlight Cookie's Soulstone, available through the Rainbow Shell Gallery and Guild Medal Shop.](/images/blog/cookie-run-kingdom/moonlight-cookie-toppings-build/moonlight-soulstone.webp)

![Star Coral Cookie, a fellow Moonkissed-topping user from the World of Dreams roster.](/images/cookies/star-coral-cookie.png)

Getting her: she's pulled from her dedicated Moonlight Shard gacha when it runs, and her **soulstones are purchasable in the Rainbow Shell Gallery and the Guild Medal Shop** — both guild-adjacent currencies, so an active guild directly accelerates her ascension. That's unusually friendly for a Legendary; most of her peers make you wait on gacha luck alone.

On the topping ceiling: Moonlight is a **Moonkissed Resonant Topping** user — fittingly, the very first resonant topping family ever added (same v4.0 update she launched in), shared with Milky Way, Blueberry Pie, Stardust, Space Doughnut, and Star Coral. Resonant toppings roll bonuses only from the six meta stats with higher minimum values than regular toppings — Cooldown rolls 1.5-2% per bonus, ATK 2-3%, DMG Resist 4.5-6%. A Moonkissed Swift Chocolate set is the endgame version of her default build; pick the pieces up from events and the event shop whenever they cycle in.

## Quick Action Checklist

- Default build: 5x Swift Chocolate with Cooldown, then ATK%, then DMG Resist substats
- Only run 5x Searing Raspberry if she's your primary damage source and disruption is covered elsewhere
- Give her a Cooldown-primary beascuit: at Crystal Jam enchant 20, beascuit Cooldown converts to skill DMG Resist Bypass at 1.7x, capped at +30%
- Cooldown tart on the default lane; never split sets 3/2
- Prioritize her Crystal Jam if she anchors your Arena defense — it adds team Debuff Resist (up to 22.5%), refreshing 2.5-second Sleep ticks, and a +30% self buff amplifier
- Upgrade to Moonkissed resonant toppings (Swift Chocolate) as the endgame version of the build
- Buy her soulstones from the Rainbow Shell Gallery and Guild Medal Shop — guild activity directly ascends her
- Build the team to cash the +25% damage amp window: front line, one hard carry, healer
- Remember she wins by casting often, not by hitting hardest — protect the loop`,

  faq: [
    {
      question: 'What are the best toppings for Moonlight Cookie?',
      answer:
        "5x Swift Chocolate (Cooldown) is the default. Her entire kit — the +25% incoming damage amplification, the Sleep wave, the Drowsy slow, and her self-heal — cycles on a 15-second cooldown, so casting more often generates more value than hitting harder. Substats: Cooldown first, then ATK%, then DMG Resist. The alternative is 5x Searing Raspberry (ATK) when she's your primary damage dealer, since her max-level starlight ticks at 119.6% up to ten times with 40% DMG Resist bypass. Avoid 3/2 split sets; her value spikes on cast, so commit to one lane. Moonkissed resonant versions of either set are the endgame upgrade.",
    },
    {
      question: "What does Moonlight Cookie's Crystal Jam do?",
      answer:
        'Twinkling Starry Sky (added August 2024) replaces her base skill. It grants a team-wide Rally Effect — Debuff Resist up to 22.5% on entering battle plus an undispellable +20% for 3 seconds on every cast — and upgrades her starlight to ten 33% ticks with 35% DMG Resist Bypass, a 2.5-second Sleep that refreshes on each tick, a -20% ATK SPD/MOV SPD Drowsy, and a follow-up moonbeam at up to 70.7% per tick with true damage. Enchantments add Radiant Crescent (level 10), Falling Stars on the five highest-ATK targets plus a Cooldown-to-Bypass conversion (level 20), and Falling Stars area damage (level 30). She also becomes immune to Sleep and Drowsy.',
    },
    {
      question: 'What beascuit should Moonlight Cookie use?',
      answer:
        "A Cooldown-primary beascuit, and it's not close. Her Crystal Jam's level 20 enchantment grants +1.7% Skill DMG Resist Bypass for every 1% of Cooldown reduced by beascuits, capped at +30%. That means Cooldown lines on her beascuit do double duty — they compress her 15-second skill loop and simultaneously convert into bonus damage penetration stacked on top of the 35% bypass her Crystal Jam starlight already has. No other beascuit stat gives her two effects for one roll.",
    },
    {
      question: 'Is Moonlight Cookie good for Arena defense?',
      answer:
        "She's one of the best defensive Legendaries in the game and has been since 2023. Her skill puts attackers to Sleep for 2.5 seconds (refreshing per starlight tick on Crystal Jam) while stamping a +25% incoming damage debuff, and enemies that resist the sleep get slowed by 20% ATK SPD and MOV SPD and fall asleep later anyway when their resistance wears off. Attacking AI teams lose their skill tempo and never recover it. Pair her with a durable front line and a hard carry that can cash in the amp window while the enemy team naps.",
    },
    {
      question: 'How do I get Moonlight Cookie and her soulstones?',
      answer:
        "She's a Legendary pulled from her dedicated Moonlight Shard gacha when the banner cycles around. Her soulstones are unusually accessible for a Legendary: they can be purchased in both the Rainbow Shell Gallery and the Guild Medal Shop, which are fed by guild activity. That means an active guild lets you ascend her steadily without gacha luck — a meaningful edge over Legendaries whose soulstones only come from pulls.",
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/crk-toppings-guide', anchor: 'toppings guide' },
    { href: '/blog/cookie-run-kingdom/beascuit-tier-list', anchor: 'beascuit tier list' },
    { href: '/blog/cookie-run-kingdom/crk-awakening-guide', anchor: 'awakening guide' },
    { href: '/blog/cookie-run-kingdom/best-legendary-cookies-crk-ranked', anchor: 'best Legendary cookies ranked' },
    { href: '/blog/cookie-run-kingdom/best-crk-arena-defense-teams', anchor: 'Arena defense teams' },
    { href: '/blog/cookie-run-kingdom/crk-guild-battle-guide', anchor: 'Guild Battle guide' },
    { href: '/blog/cookie-run-kingdom/star-coral-cookie-toppings-build', anchor: 'Star Coral Cookie build' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Moonlight_Cookie', title: 'Cookie Run: Kingdom Wiki — Moonlight Cookie' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Toppings', title: 'Cookie Run: Kingdom Wiki — Toppings (Moonkissed Resonants)' },
    { url: 'https://www.pocketgamer.com/cookie-run-kingdom/', title: 'Pocket Gamer — Cookie Run: Kingdom guides' },
  ],

  tldr:
    "Moonlight Cookie is a Legendary Magic-class Middle cookie whose 15-second skill amps incoming damage by 25%, puts enemies to Sleep, slows resisters with Drowsy, and self-heals on waking. Build 5x Swift Chocolate (Cooldown) with a Cooldown-primary beascuit — her Crystal Jam's level 20 enchant converts beascuit Cooldown into skill DMG Resist Bypass at 1.7x, capped at +30%. Her August 2024 Crystal Jam also adds team-wide Debuff Resist up to 22.5% and refreshing 2.5-second Sleep ticks, keeping her a top-tier Arena defense anchor. Soulstones come from the Rainbow Shell Gallery and Guild Medal Shop, and Moonkissed resonant toppings are the endgame upgrade.",
};
