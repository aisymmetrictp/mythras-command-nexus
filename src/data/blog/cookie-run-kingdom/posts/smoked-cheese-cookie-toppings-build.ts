import type { BlogPost } from '../../blogTypes';

export const smokedCheeseCookieToppingsBuild: BlogPost = {
  slug: 'smoked-cheese-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'cookie-deep-dive',

  tags: ['toppings', 'smoked-cheese', 'earth', 'magic', 'golden-cheese'],

  title: 'Smoked Cheese Cookie Toppings Build — The Earth Enabler Done Right',
  metaDescription:
    'The best Smoked Cheese Cookie toppings build in Cookie Run: Kingdom: Searing Raspberry vs Swift Chocolate, Radiant Cheese resonants, and the Golden Cheese synergy.',
  excerpt:
    "Smoked Cheese Cookie stole his queen's Soul Jam in the story, then came back as the Epic who makes her hit harder. Here's the build that keeps his smoke — and her damage — rolling.",
  featuredImagePrompt:
    'Painterly portrait of Smoked Cheese Cookie in his falcon hood raising a hooked staff, golden smoke coiling around Egyptian-styled ruins, dramatic amber rim light, Cookie Run: Kingdom hero banner, cinematic 16:9',
  heroImage: '/images/blog/cookie-run-kingdom/smoked-cheese-cookie-toppings-build/hero.webp',
  heroImageAlt:
    'Smoked Cheese Cookie official illustration, the Epic Earth-type Magic cookie this Cookie Run: Kingdom toppings build covers.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/smoked-cheese-cookie-toppings-build/hero.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Smoked_Cheese_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/smoked-cheese-cookie-toppings-build/smoked-cheese-sprite.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Smoked_Cheese_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/smoked-cheese-cookie-toppings-build/searing-raspberry.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Toppings',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/smoked-cheese-cookie-toppings-build/swift-chocolate.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Toppings',
      license: 'Fandom CC-BY-SA',
    },
  ],

  publishDate: '2026-07-14T00:00:00.000Z',
  lastUpdated: '2026-07-14T00:00:00.000Z',

  primaryKeyword: 'smoked cheese cookie toppings',
  secondaryKeywords: [
    'smoked cheese cookie build',
    'smoked cheese cookie toppings cookie run',
    'best toppings smoked cheese cookie',
    'smoked cheese cookie golden cheese team',
    'smoked cheese cookie guide',
    'crk smoked cheese cookie',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,

  toc: [
    { id: 'the-general-who-smoked-his-own-kingdom', label: 'The general who smoked his own kingdom', level: 2 },
    { id: 'smoked-cheese-cookies-vitals', label: 'Smoked Cheese Cookie\'s vitals', level: 2 },
    { id: 'what-get-smoked-actually-does', label: 'What Get Smoked! actually does', level: 2 },
    { id: 'the-damage-build-5x-searing-raspberry', label: 'The damage build: 5x Searing Raspberry', level: 2 },
    { id: 'the-uptime-build-5x-swift-chocolate', label: 'The uptime build: 5x Swift Chocolate', level: 2 },
    { id: 'radiant-cheese-resonant-toppings', label: 'Radiant Cheese resonant toppings', level: 2 },
    { id: 'substats-that-matter', label: 'Substats that matter', level: 2 },
    { id: 'the-golden-cheese-package', label: 'The Golden Cheese package', level: 2 },
    { id: 'is-he-worth-building', label: 'Is he worth building?', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Smoked Cheese Cookie is the rare CRK character who committed full treason in the story — stole Golden Cheese Cookie's Soul Jam, went mad with power, got put down by his own queen — and then shipped as a playable Epic whose entire kit is about making that same queen stronger. Devsisters released him alongside Awakened Golden Cheese in the version 5.11 update on October 30, 2024, a full year after he first appeared as an NPC villain, and the redemption arc is baked directly into his numbers: his best buff literally prioritizes her.

Mechanically he's a Charm-and-amplify support with a real damage line, and that split personality creates a genuine toppings decision. One build makes his smoke explosion hurt; the other keeps his crowd control and his Earth-damage buff running near-permanently. Here's the full breakdown: both sets, the Radiant Cheese resonant advantage, the substats, and why he's a different cookie depending on whether Golden Cheese is standing next to him.

## The general who smoked his own kingdom

The short pitch: Smoked Cheese Cookie Charms a chunk of the enemy team out of the fight, stacks a damage-amplification debuff on them, deals a surprisingly violent Earth-element explosion, and hands his strongest ally a package of Earth DMG, Earth CRIT DMG, and CRIT% buffs. If that ally is Golden Cheese Cookie, the package gets bigger, and everyone from the Golden Cheese Kingdom — him, her, and Burnt Cheese — walks into battle with permanent, undispellable stat bonuses.

He's a support who scales a specific archetype, in the same way Sherbet enables Ice teams. The toppings question is the classic enabler dilemma: damage or uptime.

## Smoked Cheese Cookie's vitals

![Smoked Cheese Cookie's in-game standing sprite in his falcon hood with hooked staff.](/images/blog/cookie-run-kingdom/smoked-cheese-cookie-toppings-build/smoked-cheese-sprite.webp)

The stat sheet: he's an **Epic**, **Magic**-type, **Rear**-position cookie with the **Earth** element and the Tenacious and Sharp-eyed traits. Rear position means he casts from the back line, well clear of frontline pressure — which suits a cooldown-heavy caster whose value is in casting on schedule.

He arrived in the Wings of Eternity era as part of the Golden Cheese Kingdom push, and he's a gacha Epic — no farmable soulstone stage, so promotion comes from pulls and [Mileage Points](/blog/cookie-run-kingdom/crk-mileage-points-guide). Story-wise he's the war general and monster-tamer of the Golden Cheese court, and yes, the Horus-inspired falcon hood is doing exactly what you think it's doing.

## What Get Smoked! actually does

His skill is **Get Smoked!** on a **15-second base cooldown**, and it front-loads a lot:

- **Smoke barrage: 7 hits over 1.4 seconds**, each dealing Earth damage and each inflicting **Charm** for 2.5 seconds — enemies caught in the smoke spend the barrage fighting for the wrong team.
- **Weakness** on the first hit: enemies take **+30% damage for 12 seconds, stacking up to 2 times**. At two stacks, everything your team does to those targets hits dramatically harder.
- **A finishing explosion** that deals heavy Earth damage, knocks targets Airborne, and adds a large extra damage line against enemies in PvE — his numbers are notably fatter in PvE than Arena by design.
- **Guardian's Return** to the ally with the highest ATK (prioritizing Golden Cheese Cookie if she's on the team): **Earth-type DMG +11%, Earth-type CRIT DMG +17.5%, CRIT% +12.5% for 13 seconds**.
- **Earth's Protection** on himself: Debuff Resist and DEF up for 10 seconds, stacking twice.

One important quirk: he **cannot give Guardian's Return to himself**, so he always needs a carry worth buffing. And while he casts, he resists interruption — the smoke gets off even under pressure.

## The damage build: 5x Searing Raspberry

![A Searing Raspberry topping icon in Cookie Run: Kingdom, the ATK topping for Smoked Cheese Cookie's damage build.](/images/blog/cookie-run-kingdom/smoked-cheese-cookie-toppings-build/searing-raspberry.webp)

The first wiki-recommended set is **5x Searing Raspberry**, the ATK build. His damage output is not a rounding error: seven smoke hits plus an explosion with a bonus PvE damage line adds up to a genuine second-DPS contribution, all of it Earth-element, all of it scaling off ATK. In PvE content especially — world exploration bosses, guild battle — the extra damage line makes an ATK-stacked Smoked Cheese hit far above his support billing.

Run Searing Raspberry when he's on a team that already has its amplification needs covered or when you're using him as a hybrid damage-support in PvE. It's the same "the support also shoots" logic covered in the [support cookies ranking](/blog/cookie-run-kingdom/best-crk-support-cookies-ranked) — a buffer whose personal damage is real is worth more than the sum of the parts.

## The uptime build: 5x Swift Chocolate

![A Swift Chocolate topping icon in Cookie Run: Kingdom, the cooldown topping for Smoked Cheese Cookie's uptime build.](/images/blog/cookie-run-kingdom/smoked-cheese-cookie-toppings-build/swift-chocolate.webp)

The second set is **5x Swift Chocolate**, and for most teams it's the sharper choice. Look at his durations against his 15-second cooldown: Weakness lasts 12 seconds, Guardian's Return lasts 13. Uncompressed, there's a dead window where your carry loses its Earth buffs and the enemy sheds its damage amp. Stack cooldown and those windows close — the Weakness stacks stay at 2, the Charm comes back sooner, and Guardian's Return approaches permanent uptime on your carry.

Charm uptime is its own argument. A 2.5-second Charm on multiple enemies every cast is soft crowd control that wins Arena rounds by itself, and more casts means more of the fight where the enemy team is part-time working for you. If Smoked Cheese is on the team *because* of Golden Cheese — which is the usual reason — Swift Chocolate is the build that maximizes what she gets out of him.

## Radiant Cheese resonant toppings

Like the other Golden Cheese Kingdom cookies, Smoked Cheese can equip **Radiant Cheese resonant toppings** — a privilege shared by only seven cookies: Golden Cheese, Burnt Cheese, Black Raisin, Fettuccine, Olive, Mozzarella, and him. Resonant toppings are special single-rarity variants with **better odds of rolling useful bonus effects at the +6/+9/+12 upgrade breakpoints**, locked to their themed cookies.

So the real best-in-slot answer is: **Radiant Cheese Searing Raspberry** or **Radiant Cheese Swift Chocolate**, depending on which build you chose above. If you've been hoarding Radiant Cheese selectors from Golden Cheese Kingdom events, he's a legitimate place to spend them — especially since his most common teammate, Golden Cheese herself, competes for the same pool. Buff the queen first; he understands. The mechanics of resonants and upgrade bonuses are covered in the [toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide).

## Substats that matter

The wiki's stat priority is **Cooldown, ATK, DMG Resist, Earth DMG**:

- **Cooldown** — closes the gap between his 15-second cooldown and his 12- and 13-second buff/debuff durations. The single most valuable stat on either build.
- **ATK** — feeds seven smoke hits and the explosion. Core on the Raspberry build, still useful on Chocolate.
- **DMG Resist** — he's Rear-position but not immortal, and his value compounds the longer he keeps casting. A few resist rolls are insurance on the whole engine.
- **Earth DMG** — every damage line in his kit is Earth-element, so elemental substats (and an Earth DMG beascuit — see the [beascuit tier list](/blog/cookie-run-kingdom/beascuit-tier-list)) multiply his entire output.

## The Golden Cheese package

This is the part that decides whether he's on your roster at all. **Protector of the Golden City** activates when he enters battle with Golden Cheese Cookie on the team, and every piece of it is **undispellable**:

- **Guardian's Return upgrades** to Earth-type DMG +15% and Earth-type CRIT DMG +25% — and it targets her.
- **Golden Cheese** gets +11% ATK just for showing up with him.
- **Smoked Cheese himself** gets +16.3% DMG Resist and +11.3% ATK.
- **Burnt Cheese**, if present, gets a massive +32.5% DMG Resist and +31% Max HP.

That's a three-cookie national buff package, and it makes the Golden Cheese Kingdom core one of the most self-synergistic archetypes in the game. If you run Golden Cheese as a carry — and her [toppings build](/blog/cookie-run-kingdom/golden-cheese-cookie-toppings-build) makes the case for it — Smoked Cheese is the cheapest way to add double-digit percentage multipliers to everything she does. Without her, he's still a functional Charm support with Weakness amp; with her, he's a keystone.

## Is he worth building?

If you run Golden Cheese: **yes, without hesitation**. Guardian's Return plus the Protector package is a permanent, undispellable damage system for one Epic slot, and his Charm-plus-Weakness combo independently makes any team's damage land harder. In guild battle and PvE boss content, the extra PvE damage line means he pulls his weight even before the buffs — worth remembering when you're filling slots from the [guild battle teams](/blog/cookie-run-kingdom/guild-battle-teams) sheet.

If you don't run Golden Cheese, temper expectations. He's a solid Charm/amp support — Weakness at 2 stacks is +30% team-wide damage amplification on key targets, which is nothing to sneeze at — but his ceiling lives in the Earth/Golden-Cheese package, and without a carry that exploits Earth buffs, Guardian's Return is half-wasted. Build him as part of the kingdom, not as a mercenary.

## Quick Action Checklist

- [ ] Decide his job: hybrid damage-support in PvE (Searing Raspberry) or full-time enabler (Swift Chocolate)
- [ ] Equip 5x Swift Chocolate on Golden Cheese teams to keep Guardian's Return and Weakness near-permanent
- [ ] Equip 5x Searing Raspberry when his smoke barrage and PvE explosion are real damage for your comp
- [ ] Upgrade to Radiant Cheese resonant versions if you have selectors — he's one of seven cookies who can wear them
- [ ] Chase Cooldown substats first, then ATK, DMG Resist, and Earth DMG
- [ ] Pair him with Golden Cheese Cookie to unlock the undispellable Protector of the Golden City bonuses
- [ ] Add Burnt Cheese for the full three-cookie kingdom package
- [ ] Remember he can't buff himself — always field a carry worth his Guardian's Return`,

  faq: [
    {
      question: 'What are the best toppings for Smoked Cheese Cookie?',
      answer:
        'The two recommended sets are 5x Swift Chocolate (Cooldown) and 5x Searing Raspberry (ATK). Swift Chocolate is the default on Golden Cheese teams because his Weakness debuff (12 seconds) and Guardian\'s Return buff (13 seconds) run against a 15-second cooldown — cooldown reduction pushes both toward permanent uptime. Searing Raspberry is the pick when his seven-hit smoke barrage and PvE explosion damage matter to your comp. Prioritize Cooldown, ATK, DMG Resist, and Earth DMG substats, and use Radiant Cheese resonant versions if available.',
    },
    {
      question: 'Is Smoked Cheese Cookie good in Cookie Run: Kingdom?',
      answer:
        'Yes, especially with Golden Cheese Cookie. His skill Charms enemies for 2.5 seconds per smoke hit, stacks a +30% damage amplification (Weakness, up to 2 stacks), deals real Earth-element damage with a bonus PvE line, and grants Guardian\'s Return — Earth DMG, Earth CRIT DMG, and CRIT% buffs — to his highest-ATK ally, prioritizing Golden Cheese. With her on the team, the undispellable Protector of the Golden City package buffs him, her, and Burnt Cheese further.',
    },
    {
      question: 'How do you get Smoked Cheese Cookie?',
      answer:
        'Smoked Cheese Cookie is a gacha Epic released alongside Awakened Golden Cheese Cookie in the version 5.11 update on October 30, 2024. He has no farmable soulstone stage, so copies come from the gacha and Mileage Point purchases when he is featured.',
    },
    {
      question: 'Does Smoked Cheese Cookie need Golden Cheese Cookie?',
      answer:
        'He functions without her — Charm crowd control and stacking Weakness amplification help any team — but his ceiling requires her. Entering battle with Golden Cheese activates Protector of the Golden City, which upgrades Guardian\'s Return to +15% Earth DMG and +25% Earth CRIT DMG, gives her +11% ATK, gives him +16.3% DMG Resist and +11.3% ATK, and gives Burnt Cheese +32.5% DMG Resist and +31% Max HP. All of it is undispellable.',
    },
    {
      question: 'Can Smoked Cheese Cookie use resonant toppings?',
      answer:
        'Yes — he is one of only seven cookies who can equip Radiant Cheese resonant toppings, alongside Golden Cheese, Burnt Cheese, Black Raisin, Fettuccine, Olive, and Mozzarella. Resonant toppings have better odds of rolling useful bonus effects at the +6, +9, and +12 upgrade levels, so a Radiant Cheese Swift Chocolate or Searing Raspberry set out-rolls the ordinary versions.',
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/golden-cheese-cookie-toppings-build', anchor: 'Golden Cheese toppings build' },
    { href: '/blog/cookie-run-kingdom/crk-toppings-guide', anchor: 'toppings guide' },
    { href: '/blog/cookie-run-kingdom/best-crk-support-cookies-ranked', anchor: 'support cookies ranked' },
    { href: '/blog/cookie-run-kingdom/guild-battle-teams', anchor: 'guild battle teams' },
    { href: '/blog/cookie-run-kingdom/crk-mileage-points-guide', anchor: 'Mileage Points guide' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Smoked_Cheese_Cookie', title: 'Cookie Run: Kingdom Wiki — Smoked Cheese Cookie' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Toppings', title: 'Cookie Run: Kingdom Wiki — Toppings' },
  ],

  tldr:
    "The best Smoked Cheese Cookie toppings build is 5x Swift Chocolate (Cooldown) on Golden Cheese teams, because his 12-second Weakness amp and 13-second Guardian's Return buff run against a 15-second cooldown and want maximum uptime; 5x Searing Raspberry (ATK) is the alternative when his seven-hit smoke barrage and bonus PvE explosion damage matter. Use Radiant Cheese resonant versions if you have them, and chase Cooldown, ATK, DMG Resist, and Earth DMG substats. He's an Epic Earth-type Rear Magic cookie whose Charm, stacking +30% Weakness, and undispellable Protector of the Golden City package make him a keystone of Golden Cheese comps.",
};
