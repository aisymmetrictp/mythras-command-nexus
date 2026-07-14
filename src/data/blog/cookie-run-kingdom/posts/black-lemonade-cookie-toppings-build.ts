import type { BlogPost } from '../../blogTypes';

export const blackLemonadeCookieToppingsBuild: BlogPost = {
  slug: 'black-lemonade-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'cookie-deep-dive',

  tags: ['toppings', 'black-lemonade', 'electricity', 'bomber', 'epic'],

  title: 'Black Lemonade Cookie Toppings Build — Zap Engine, Geared Right',
  metaDescription:
    'The best Black Lemonade Cookie toppings build in Cookie Run: Kingdom: Searing Raspberry vs Swift Chocolate, Tropical Rock resonants, and why her team charge matters.',
  excerpt:
    "Black Lemonade Cookie is the rock star who quietly became one of the best Electricity enablers in the game. Here's the toppings build that keeps her whole band playing.",
  featuredImagePrompt:
    'Painterly portrait of Black Lemonade Cookie shredding an electric yellow guitar on a dark stage, purple lightning arcing off the strings, moody concert lighting, Cookie Run: Kingdom hero banner, cinematic 16:9',
  heroImage: '/images/blog/cookie-run-kingdom/black-lemonade-cookie-toppings-build/hero.webp',
  heroImageAlt:
    'Black Lemonade Cookie official illustration, the Epic Electricity-type Bomber cookie this Cookie Run: Kingdom toppings build covers.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/black-lemonade-cookie-toppings-build/hero.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Black_Lemonade_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/black-lemonade-cookie-toppings-build/black-lemonade-sprite.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Black_Lemonade_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/black-lemonade-cookie-toppings-build/searing-raspberry.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Toppings',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/black-lemonade-cookie-toppings-build/swift-chocolate.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Toppings',
      license: 'Fandom CC-BY-SA',
    },
  ],

  publishDate: '2026-07-14T00:00:00.000Z',
  lastUpdated: '2026-07-14T00:00:00.000Z',

  primaryKeyword: 'black lemonade cookie toppings',
  secondaryKeywords: [
    'black lemonade cookie build',
    'black lemonade cookie toppings cookie run',
    'best toppings black lemonade cookie',
    'black lemonade cookie zap team',
    'black lemonade cookie guide',
    'crk black lemonade cookie',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,

  toc: [
    { id: 'the-rock-star-who-became-a-zap-engine', label: 'The rock star who became a Zap engine', level: 2 },
    { id: 'black-lemonade-cookies-vitals', label: 'Black Lemonade Cookie\'s vitals', level: 2 },
    { id: 'what-electrifying-rock-actually-does', label: 'What Electrifying Rock! actually does', level: 2 },
    { id: 'the-damage-build-5x-searing-raspberry', label: 'The damage build: 5x Searing Raspberry', level: 2 },
    { id: 'the-uptime-build-5x-swift-chocolate', label: 'The uptime build: 5x Swift Chocolate', level: 2 },
    { id: 'tropical-rock-resonant-toppings', label: 'Tropical Rock resonant toppings', level: 2 },
    { id: 'substats-that-matter', label: 'Substats that matter', level: 2 },
    { id: 'where-she-fits-on-a-team', label: 'Where she fits on a team', level: 2 },
    { id: 'is-she-worth-building', label: 'Is she worth building?', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Black Lemonade Cookie debuted as a festival NPC two weeks before you could pull her — she headlined the Summer Soda Rock Festa in July 2023 as the frontwoman of SparkL, then dropped into the Epic pool on July 21. For a while she read as a themed gacha filler. Then the Heaven-Splitting Lightning patch in April 2024 converted every number in her kit to the Electricity element, and suddenly the rock star had a real job: she's one of the cleanest Zap enablers in the game, with a team-wide buff that turns your allies' crits and Zap ticks into free extra damage attributed to her.

That last mechanic — the Electrifying Rock Spirit charge system — is the reason her toppings decision matters more than most Epics'. Gear her wrong and she's a decent nuke on a 10-second cooldown. Gear her right and she's a metronome that keeps three debuffs and a team buff running for entire fights. This is the full build: both viable sets, the resonant topping only six cookies can wear, and the substats that decide which version of her you get.

## The rock star who became a Zap engine

The pitch in one paragraph: Black Lemonade Cookie hits the highest-HP enemy on the board, slaps three debuffs on it — Zap damage over time, minus 25% DEF, and plus 22.5% CRIT DMG received — then splashes nearby enemies with an ATK-down on top. While all that is ticking, her whole team carries a buff that converts their crits and Zap ticks into bonus damage scaled off *her* ATK. She is a Bomber who moonlights as a support, and both halves of the kit scale with the same two stats: ATK and cooldown.

That dual identity is the whole build question. Everything below is about deciding which half you're feeding.

## Black Lemonade Cookie's vitals

![Black Lemonade Cookie's in-game standing sprite with her electric guitar and purple-and-yellow look.](/images/blog/cookie-run-kingdom/black-lemonade-cookie-toppings-build/black-lemonade-sprite.webp)

The stat sheet before the theorycrafting: she's an **Epic**, **Bomber**-type, **Middle**-position cookie with the **Electricity** element, carrying the Handy and Musical traits. Middle position keeps her out of tank range without leaving her naked in the rear line.

Acquisition is the underrated part. Her Soulstones drop from **Dark Mode stage 18-24** in the Goddess of Eternal Gold episode — a farmable World Exploration stage, not an event-limited banner. That makes her one of the more realistic Epics to promote for players who missed her feature banner. If you're still working through the map, the [World Exploration guide](/blog/cookie-run-kingdom/crk-world-exploration-guide) covers pushing Dark Mode efficiently.

## What Electrifying Rock! actually does

Her skill is **Electrifying Rock!** on a **10-second base cooldown** — already short for a kit this loaded. The full sequence:

- **Guitar strike on the highest-HP enemy** (targeting Cookies first) for Electricity damage plus a percentage of her Max HP against Cookies — a stat line built to delete fat Arena frontlines.
- **Zap** on the target: Electricity damage every 0.5 seconds for 10 seconds. With her cooldown, that DoT can have near-permanent uptime.
- **DEF down 25% and received CRIT DMG up 22.5%** on the target for 10 seconds — the two debuffs every crit-based carry in your comp wants on a boss.
- **Splash damage to nearby enemies** with a 13.5% ATK down for 10 seconds.
- **Enhanced regular attacks** for 5 seconds that chase the highest-HP enemy and chain to up to 5 nearby targets.
- **Electrifying Rock Spirit** on the whole team for 15 seconds: every 2 crit hits or Zap ticks an ally deals builds a charge that detonates for bonus Electricity damage worth 61.9% of *Black Lemonade's* ATK.

Read that last line again, because it drives the whole build. The team charge scales off her ATK and refreshes on her cast schedule. Both of her jobs — debuffer and damage battery — want the same things: more ATK, more casts.

## The damage build: 5x Searing Raspberry

![A Searing Raspberry topping icon in Cookie Run: Kingdom, the ATK topping for Black Lemonade Cookie's damage build.](/images/blog/cookie-run-kingdom/black-lemonade-cookie-toppings-build/searing-raspberry.webp)

The wiki-standard first option is **5x Searing Raspberry**, the flat ATK set. The math case is unusually clean for her: ATK feeds her guitar strike, her splash, her enhanced regular attacks, her Zap ticks, *and* the 61.9%-of-her-ATK team detonations that other cookies trigger for her. There is no wasted stat — every point of ATK you stack pays out in five places at once.

Run Searing Raspberry when Black Lemonade is a primary or secondary damage dealer — when you don't have a bigger Electricity carry outshining her and you want her contributing real numbers, not just debuffs. On most mixed PvE teams that's exactly her role, and the same logic that powers the [top DPS cookies](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked) applies here with a team-damage kicker on top.

## The uptime build: 5x Swift Chocolate

![A Swift Chocolate topping icon in Cookie Run: Kingdom, the cooldown topping for Black Lemonade Cookie's uptime build.](/images/blog/cookie-run-kingdom/black-lemonade-cookie-toppings-build/swift-chocolate.webp)

The second wiki-recommended set is **5x Swift Chocolate**, the cooldown build. Her debuff package — Zap, DEF down, CRIT DMG amp, ATK down — all lasts 10 seconds against a 10-second base cooldown. Stack cooldown reduction and those debuffs approach permanent uptime, plus her 15-second team buff gets refreshed before it ever expires.

Choose Swift Chocolate when she's the *enabler* on a team with a dedicated carry: your damage cookie appreciates a boss that permanently sits at minus 25% DEF and plus 22.5% CRIT DMG received far more than it appreciates Black Lemonade's own numbers. In longer fights — guild bosses, drawn-out Arena matches — uptime usually beats burst. If your roster's carries are covered in the [Arena meta team](/blog/cookie-run-kingdom/kingdom-arena-meta-team) mold, this is the version to gear.

## Tropical Rock resonant toppings

Here's her gearing cheat code: Black Lemonade is one of only **six cookies** who can equip **Tropical Rock resonant toppings** — the Summer Soda Rock Festa set shared by Shining Glitter, Rockstar, Parfait, Mango, and Werewolf. Resonant toppings are single-rarity variants of the normal toppings with **better odds of rolling useful bonus effects on upgrade**, at the cost of being locked to their themed cookies.

Practically, that means a Tropical Rock Searing Raspberry or Tropical Rock Swift Chocolate is strictly better on her than the ordinary version, because the +6/+9/+12 upgrade bonuses are likelier to land on stats she wants. If you have Tropical Rock pieces sitting in storage from the Festa events, she's one of the few cookies who can actually cash them in — don't let them rot. The [toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide) covers how resonants and upgrade bonuses work under the hood.

## Substats that matter

The wiki's stat priority for her is **Cooldown, Electricity DMG, ATK, DMG Resist** — and it maps exactly onto her kit:

- **Cooldown** — the king stat on either set. Every cast refreshes four debuffs and the team charge buff. Even on the Searing Raspberry build, hunt cooldown substats first.
- **Electricity DMG** — since the April 2024 patch, *everything* she does is Electricity-typed, including the team detonations. Elemental damage substats multiply her entire output, which most Epics can't say.
- **ATK** — feeds all five damage lines. Core on the Raspberry build, welcome on the Chocolate build.
- **DMG Resist** — she's Middle position, not untouchable. A few resist rolls keep her alive through Arena AoE so the buff keeps playing.

If you're pairing her with a beascuit, an Electricity DMG or ATK piece slots straight in — the [beascuit tier list](/blog/cookie-run-kingdom/beascuit-tier-list) covers which shapes are worth the grind.

## Where she fits on a team

Her natural home is any comp that crits often or runs other Zap appliers, because that's what feeds Electrifying Rock Spirit charges:

- **Electricity/Zap comps** — she stacks Zap herself and detonates off allied Zap ticks, so other Electricity cookies compound her value in both directions.
- **Crit-heavy teams** — every ally crit is half a charge. A crit-stacked carry standing next to her generates constant bonus damage that gets attributed to her.
- **Arena offense** — her strike targets the highest-HP enemy and Cookies first, with bonus scaling off Max HP against Cookies. She was designed to punish fat defensive walls; see the [Arena defense meta](/blog/cookie-run-kingdom/best-crk-arena-defense-teams) for exactly the kind of teams she's built to crack.

She is not a frontline, not a healer, and her personal survivability is ordinary. Give her a real tank, keep her in Middle, and let the debuffs run.

## Is she worth building?

Yes, with a specific pitch: she's a **farmable Epic that plays like a Super Epic support-DPS hybrid**. The Dark Mode 18-24 soulstone farm means you can promote her on a schedule, the Tropical Rock resonance means her gear can out-roll other Epics' gear, and the 2024 Electricity conversion aged her kit up rather than down. Against the rest of the [Epic tier](/blog/cookie-run-kingdom/best-epic-cookies-crk-ranked), her combination of DEF shred, CRIT DMG amp, and team-scaling bonus damage is genuinely rare at her rarity.

The honest caveat: on a team with no crit synergy and no Zap, her charge mechanic idles and she's just a good — not great — Bomber. She rewards deliberate teambuilding. Build her when you have the band; she doesn't play solo shows.

## Quick Action Checklist

- [ ] Decide her job: damage contributor (Searing Raspberry) or debuff metronome (Swift Chocolate)
- [ ] Equip 5x Searing Raspberry for the ATK-scaling default build
- [ ] Equip 5x Swift Chocolate if a bigger carry wants her debuffs at permanent uptime
- [ ] Use Tropical Rock resonant versions of either topping if you have them — she's one of six cookies who can
- [ ] Chase Cooldown substats first, then Electricity DMG and ATK, with a splash of DMG Resist
- [ ] Farm her Soulstones from Dark Mode stage 18-24 in Goddess of Eternal Gold
- [ ] Slot her beside crit-heavy or Zap-applying allies so Electrifying Rock Spirit actually charges
- [ ] Keep a real tank in front — she's a Middle-position Bomber, not a bruiser`,

  faq: [
    {
      question: 'What are the best toppings for Black Lemonade Cookie?',
      answer:
        'The two recommended sets are 5x Searing Raspberry (ATK) when she is a damage contributor, and 5x Swift Chocolate (Cooldown) when she is a debuff enabler for a bigger carry. Both benefit from her Tropical Rock resonant topping access, which gives better upgrade bonus odds. Prioritize Cooldown, Electricity DMG, ATK, and DMG Resist substats.',
    },
    {
      question: 'Is Black Lemonade Cookie good in Cookie Run: Kingdom?',
      answer:
        'Yes. She is an Epic Bomber whose skill applies Zap, a 25% DEF reduction, a 22.5% received CRIT DMG increase, and an ATK down, while also granting the team the Electrifying Rock Spirit buff, which converts allied crits and Zap ticks into bonus Electricity damage scaling off her ATK. Since the April 2024 patch, her entire kit is Electricity-element, which lets elemental damage bonuses multiply everything she does.',
    },
    {
      question: 'How do you get Black Lemonade Cookie?',
      answer:
        'She is available in the standard Epic gacha pool, and her Soulstones are farmable from Dark Mode stage 18-24 in the Goddess of Eternal Gold episode of World Exploration. The farmable soulstone stage makes her one of the more realistic Epics to promote without banner luck.',
    },
    {
      question: 'Can Black Lemonade Cookie use resonant toppings?',
      answer:
        'Yes — she is one of only six cookies who can equip Tropical Rock resonant toppings, alongside Shining Glitter, Rockstar, Parfait, Mango, and Werewolf. Resonant toppings are special single-rarity variants with better chances of rolling useful bonus effects when upgraded, so a Tropical Rock Searing Raspberry or Swift Chocolate is strictly better on her than the ordinary version.',
    },
    {
      question: 'What team does Black Lemonade Cookie fit in?',
      answer:
        'She wants allies who crit often or apply Zap, because both feed her Electrifying Rock Spirit charge system for bonus team damage. She is strong in Electricity comps, crit-stacked teams, and Arena offense, where her skill targets the highest-HP enemy with bonus scaling against Cookies. She needs a real tank in front since she is a Middle-position Bomber with ordinary bulk.',
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/crk-toppings-guide', anchor: 'toppings guide' },
    { href: '/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked', anchor: 'DPS tier list' },
    { href: '/blog/cookie-run-kingdom/best-epic-cookies-crk-ranked', anchor: 'best Epic cookies ranked' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team' },
    { href: '/blog/cookie-run-kingdom/beascuit-tier-list', anchor: 'beascuit tier list' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Black_Lemonade_Cookie', title: 'Cookie Run: Kingdom Wiki — Black Lemonade Cookie' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Toppings', title: 'Cookie Run: Kingdom Wiki — Toppings' },
  ],

  tldr:
    "The best Black Lemonade Cookie toppings build is 5x Searing Raspberry (ATK) when she's a damage contributor, since her guitar strike, Zap ticks, splash, enhanced attacks, and team-charge detonations all scale off ATK; 5x Swift Chocolate (Cooldown) is the alternative when she's a pure enabler and you want her 10-second debuff package — Zap, 25% DEF down, 22.5% received CRIT DMG up — at permanent uptime against her 10-second cooldown. Use Tropical Rock resonant versions if you have them, chase Cooldown, Electricity DMG, and ATK substats, and farm her Soulstones from Dark Mode 18-24 in Goddess of Eternal Gold.",
};
