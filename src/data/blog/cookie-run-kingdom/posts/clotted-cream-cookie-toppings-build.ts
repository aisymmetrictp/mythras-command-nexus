import type { BlogPost } from '../../blogTypes';

export const clottedCreamCookieToppingsBuild: BlogPost = {
  slug: 'clotted-cream-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'cookie-deep-dive',

  tags: ['toppings', 'clotted-cream', 'arena-meta', 'super-epic', 'pvp'],

  title: 'Clotted Cream Cookie Toppings Build — The Arena Disruptor, Geared Right',
  metaDescription:
    'The best Clotted Cream Cookie toppings build in Cookie Run: Kingdom: Searing Raspberry vs Solid Almond, the ATK/Cooldown/DMG Resist debate, and where he fits.',
  excerpt:
    "Clotted Cream Cookie is the Super Epic that walls buffs and locks down a target in Arena — but only if his toppings are right. Here's the build that makes his Light Cage land.",
  featuredImagePrompt:
    'Dramatic painterly portrait of Clotted Cream Cookie in his Crème Republic Consul attire projecting a glowing Light Cage of arcane geometry onto an off-screen enemy, gold and white rim lighting, Cookie Run: Kingdom hero banner, cinematic 16:9',
  heroImage: '/images/blog/cookie-run-kingdom/clotted-cream-cookie-toppings-build/hero.webp',
  heroImageAlt:
    'Clotted Cream Cookie official illustration, the Super Epic Light-type Magic cookie this Cookie Run: Kingdom toppings build covers.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/clotted-cream-cookie-toppings-build/hero.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Clotted_Cream_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/clotted-cream-cookie-toppings-build/clotted-cream-sprite.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Clotted_Cream_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/clotted-cream-cookie-toppings-build/searing-raspberry.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Toppings',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/clotted-cream-cookie-toppings-build/solid-almond.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Toppings',
      license: 'Fandom CC-BY-SA',
    },
  ],

  publishDate: '2026-06-28T00:00:00.000Z',
  lastUpdated: '2026-06-28T00:00:00.000Z',

  primaryKeyword: 'clotted cream cookie toppings',
  secondaryKeywords: [
    'clotted cream cookie build',
    'clotted cream toppings cookie run',
    'best toppings clotted cream',
    'clotted cream arena',
    'clotted cream cookie guide',
    'crk clotted cream',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,

  toc: [
    { id: 'the-consul-who-shuts-buffs-off', label: 'The Consul who shuts buffs off', level: 2 },
    { id: 'what-clotted-cream-actually-does', label: 'What Clotted Cream actually does', level: 2 },
    { id: 'the-recommended-build-searing-raspberry', label: 'The recommended build: Searing Raspberry', level: 2 },
    { id: 'the-survivability-build-solid-almond', label: 'The survivability build: Solid Almond', level: 2 },
    { id: 'which-stats-to-chase-on-substats', label: 'Which stats to chase on substats', level: 2 },
    { id: 'cooldown-vs-atk-the-real-decision', label: 'Cooldown vs ATK: the real decision', level: 2 },
    { id: 'where-clotted-cream-fits-on-a-team', label: 'Where Clotted Cream fits on a team', level: 2 },
    { id: 'is-clotted-cream-worth-building', label: 'Is Clotted Cream worth building?', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Most Super Epic cookies are a half-step behind the Legendaries and you build them grudgingly. Clotted Cream Cookie is not that. He's the youngest Consul of the Crème Republic, he's a centerpiece of the Cookie Odyssey arc, and in PvP he does something a lot of expensive Legendaries can't: he **shuts off the enemy's buffs entirely.** His Light Cage blocks the target from receiving removable buffs, can't be dispelled, and lands even on cookies that resist interruption. That's not a damage gimmick — that's a hard counter to every shield-and-stack comp in the [Arena meta](/blog/cookie-run-kingdom/kingdom-arena-meta-team).

But a disruptor only disrupts if his skill is up when it matters and his Cage is actually doing damage. That's where toppings decide whether he's a wall or wallpaper. This is the full build guide: the wiki-recommended setup, the survivability alternative, the substats to chase, the genuinely contested Cooldown-versus-ATK question, and where he slots on a real team. I'll keep skill percentages out of the toppings math because the game retunes them — what holds is the *shape* of the build.

## The Consul who shuts buffs off

First, the vitals, because they dictate everything about his gearing. Clotted Cream Cookie is a **Super Epic**, **Magic-type**, **Middle-position** cookie with the **Light** element. He carries the Independent and Mysterious traits. Middle position means he sits in the back half of the formation — he's not soaking front-line hits, so you don't gear him like a tank, but he also isn't a glass ranged carry you can leave naked.

The other thing that defines him: his **Soulstones come from the Kingdom Arena Medal Shop.** He's not a gacha-rate gamble. If you grind Arena (and you should — see the [F2P Arena team](/blog/cookie-run-kingdom/best-f2p-arena-team) for a cheap way in), you can buy him to unlock and slowly Promote him with Medals. That makes him one of the more accessible high-impact cookies in the game, which is a big part of why building him correctly is worth your topping pieces.

## What Clotted Cream actually does

![Clotted Cream Cookie's in-game battle sprite in his Crème Republic Consul outfit.](/images/blog/cookie-run-kingdom/clotted-cream-cookie-toppings-build/clotted-cream-sprite.webp)

His skill is **Consul's Orders**, and it's a disruption-plus-damage package. On cast he projects a **Light Cage** onto the nearest enemy — targeting other Cookies first — that does three jobs at once:

- **Blocks buffs.** The caged target can't receive removable buffs for the Cage's duration. Against comps that win by stacking ATK and shields, this is brutal.
- **Can't be dispelled, ignores interrupt resistance.** The Cage sticks even on cookies that normally shrug off crowd control, and the enemy can't cleanse it off.
- **Deals area damage plus a delayed hit.** He does periodic area damage while channeling, and the Cage inflicts extra damage relative to the target's Max HP when it expires — with the Max-HP-proportional portion capped so it doesn't trivialize tanks.

On top of that he buffs his **own team's Light-type damage**, hands out **DMG Resist**, and stacks a **Blessing of Light** buff. So he's a support-disruptor hybrid: he neuters one key enemy while propping up his own side. The reason he's a Light-team enabler and not just a generic debuffer is that Light-DMG boost — he's at his best surrounded by other Light cookies who cash it in.

## The recommended build: Searing Raspberry

![A Searing Raspberry topping icon in Cookie Run: Kingdom, the ATK-boosting topping recommended for Clotted Cream Cookie.](/images/blog/cookie-run-kingdom/clotted-cream-cookie-toppings-build/searing-raspberry.webp)

The wiki-recommended primary build is **5x Searing Raspberry** (the ATK topping set). The logic is straightforward: Clotted Cream's Light Cage and his channeled area damage both scale off ATK, and a full Searing Raspberry set is the cleanest way to make his disruption hit hard enough that the cage damage matters and the True-DMG component on the expiry bites. If you want him to *do something* when his skill lands rather than just inconvenience the enemy, ATK is the engine.

This is the build I'd point most players to by default, especially if you're using him on a damage-leaning Light team where his ATK buff and his own contribution both feed the same plan. Five Searing Raspberry, then chase the right substats (below), and you've got the standard, effective Clotted Cream. It's the same ATK-stacking philosophy that powers most offensive [DPS cookies](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked) — he just happens to come with a buff-lock attached.

## The survivability build: Solid Almond

The wiki also flags **Solid Almond** (the DMG Resist set) as a recommended option, and this is the one to reach for when his *uptime* matters more than his damage. In PvP, a Clotted Cream who dies before he can recast is worthless — and Middle position doesn't make him immortal. A full **5x Solid Almond** set, or a hybrid, keeps him alive long enough to land a second and third Light Cage in a drawn-out Arena fight.

When do you go Almond over Raspberry? When you're running him primarily as a **disruptor**, not a damage source — the buff-lock and the team support are the value, and you just need him breathing to keep applying them. In high-end Arena and [Guild Battle](/blog/cookie-run-kingdom/guild-battle-teams) where fights run long and burst is flying, survivability often wins you more value than the extra cage damage. If you only have one good topping set's worth of investment, decide which job he's doing first.

## Which stats to chase on substats

Whichever set you pick, the substats are where a good build becomes a great one. The wiki-recommended stat priorities for Clotted Cream are **ATK, DMG Resist, and Cooldown** — and those three are exactly what your topping substats should roll toward:

- **Cooldown** — the highest-impact substat for a disruptor. Every point shaves time off Consul's Orders, and more casts means more buff-lock uptime and more cage damage. Stack Cooldown substats hard.
- **ATK** — makes the cage and channeled damage hurt. Essential on a Searing Raspberry build, still useful on Almond.
- **DMG Resist** — keeps him alive to recast, which is the whole game for a support-disruptor.

The general topping mechanics (substat rolls, set bonuses, how to read the percentages) are covered in the [toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide) if you're still learning the system. For Clotted Cream specifically, prioritize Cooldown substats above almost everything once your set is chosen.

## Cooldown vs ATK: the real decision

Here's the one genuinely debatable call, and it's worth being honest about. Some players run Clotted Cream with a **Cooldown-focused build** — leaning on Cooldown substats and even mixing in toward faster casts — over a pure-ATK Searing Raspberry setup, because his *value is the Light Cage being up*, not the cage hitting like a truck. A buff-lock that lands every few seconds disrupts the enemy far more than one that lands hard but rarely.

My read: on a **support-disruptor** Clotted Cream, prioritize Cooldown and survivability — get the cage up constantly and keep him alive, because the buff-block is the win condition. On a **damage-leaning Light team** where he's also a contributor, the Searing Raspberry ATK build with heavy Cooldown substats is the better balance. There's no single "correct" set here, which is exactly why the wiki lists both Searing Raspberry and Solid Almond — the right answer depends on his job in *your* comp. Don't let anyone tell you it's settled.

## Where Clotted Cream fits on a team

He is a **Light-team payoff piece** first and a generic debuffer second. His Light-DMG buff wants other Light cookies cashing it in, and his buff-lock is most valuable against the buff-stacking comps that dominate Arena. Slot him into:

- **Arena offense and defense**, where shutting off an enemy carry's buffs flips fights. Cross-reference the [Arena meta team](/blog/cookie-run-kingdom/kingdom-arena-meta-team) and the [F2P Arena team](/blog/cookie-run-kingdom/best-f2p-arena-team) for the cookies he pairs with.
- **Light-focused comps**, where his team buff and his disruption both land on the same plan.
- **PvE where buff-heavy bosses are a problem** — though in pure PvE the [best PvE teams](/blog/cookie-run-kingdom/best-crk-pve-teams) often want raw damage over disruption, so he's situational there.

He is not a frontline tank, not a healer, and not a self-sufficient solo carry. Pair him with a real frontline from the [tank tier list](/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked) and a healer, and let him do the one thing he's elite at.

## Is Clotted Cream worth building?

Yes, with a caveat. As a **Medal Shop cookie**, he's accessible — you don't need to gamble for him — and a buff-locking disruptor that the enemy can't dispel is a real, meta-relevant tool that doesn't go out of style as long as buff-stacking comps exist. For an Arena grinder, he's one of the best returns on your PvP Medals.

The caveat: he shines hardest on a Light team and in PvP. If you're a pure-PvE player with no Arena ambitions, your topping pieces are probably better spent on a [DPS carry](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked) first. But if you touch Arena at all — and the rewards mean you should — Clotted Cream geared with Searing Raspberry (or Solid Almond for the disruptor role), heavy Cooldown substats, and a Light-leaning team around him is a genuinely strong, budget-friendly build. Build him.

## Quick Action Checklist

- [ ] Confirm his role on your team: damage contributor (Searing Raspberry) or pure disruptor (Solid Almond)
- [ ] For the standard build, equip 5x Searing Raspberry for ATK scaling on the Light Cage
- [ ] For the survivability/disruptor build, equip 5x Solid Almond for DMG Resist uptime
- [ ] Chase Cooldown substats first — more casts means more buff-lock and more cage damage
- [ ] Then prioritize ATK and DMG Resist substats per the wiki's recommended stats
- [ ] Buy his Soulstones from the Kingdom Arena Medal Shop and Promote him with Medals
- [ ] Pair him with other Light cookies so his Light-DMG team buff isn't wasted
- [ ] Give him a real frontline and a healer — he's Middle position, not a tank
- [ ] Use him to hard-counter buff-stacking comps in Arena offense and defense`,

  faq: [
    {
      question: 'What are the best toppings for Clotted Cream Cookie?',
      answer:
        "The wiki-recommended primary set is 5x Searing Raspberry (ATK), since his Light Cage and channeled area damage both scale off ATK. Solid Almond (DMG Resist) is the recommended alternative when you're running him purely as a disruptor and need him to survive long enough to recast. Whichever set you choose, prioritize Cooldown substats heavily, followed by ATK and DMG Resist — those are his recommended stat priorities.",
    },
    {
      question: 'Is Clotted Cream Cookie good in Cookie Run: Kingdom?',
      answer:
        "Yes, particularly in PvP. Clotted Cream is a Super Epic Light-type disruptor whose Light Cage blocks the target from receiving removable buffs, can't be dispelled, and lands even on cookies that resist interruption — a hard counter to the buff-stacking comps that dominate Kingdom Arena. He also buffs his team's Light-type damage and grants DMG Resist. He shines most on a Light-focused team and in Arena; in pure PvE, raw-damage carries often take priority.",
    },
    {
      question: 'How do you get Clotted Cream Cookie?',
      answer:
        'Clotted Cream Cookie is not a standard gacha pull — his Soulstones and Soulcores are acquired in the Kingdom Arena Medal Shop. You earn PvP Medals by playing Kingdom Arena and spend them to unlock and Promote him over time. That makes him one of the more accessible high-impact cookies for players who grind Arena, since you can target him directly rather than relying on gacha luck.',
    },
    {
      question: 'Should you build Clotted Cream for Cooldown or ATK?',
      answer:
        "It depends on his job. As a pure disruptor, prioritize Cooldown so his buff-locking Light Cage is up as often as possible, with DMG Resist to keep him alive to recast — the buff-block is the win condition, not the damage. As a damage contributor on a Light team, a Searing Raspberry ATK build with heavy Cooldown substats gives the better balance. The wiki lists both Searing Raspberry and Solid Almond as recommended because the right call depends on your comp.",
    },
    {
      question: 'What team does Clotted Cream Cookie fit in?',
      answer:
        "Clotted Cream is a Light-team payoff piece and an Arena specialist. His Light-DMG team buff wants other Light cookies cashing it in, and his undispellable buff-lock is most valuable against the buff-stacking comps common in Kingdom Arena offense and defense. He's a Middle-position support-disruptor, so pair him with a real frontline tank and a healer rather than expecting him to survive or carry alone.",
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team' },
    { href: '/blog/cookie-run-kingdom/best-f2p-arena-team', anchor: 'F2P Arena team' },
    { href: '/blog/cookie-run-kingdom/crk-toppings-guide', anchor: 'toppings guide' },
    { href: '/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked', anchor: 'DPS tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked', anchor: 'tank tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-pve-teams', anchor: 'best PvE teams' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Clotted_Cream_Cookie', title: 'Cookie Run: Kingdom Wiki — Clotted Cream Cookie' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Toppings', title: 'Cookie Run: Kingdom Wiki — Toppings' },
  ],

  tldr:
    "The standard Clotted Cream Cookie toppings build is 5x Searing Raspberry (ATK) so his undispellable Light Cage and channeled area damage hit hard; Solid Almond (DMG Resist) is the alternative when you run him as a pure disruptor who just needs to survive and recast. Either way, prioritize Cooldown substats heavily, then ATK and DMG Resist — his recommended stats. Clotted Cream is a Super Epic, Light-type, Middle-position support-disruptor whose Light Cage blocks the enemy from receiving removable buffs, making him a hard counter to buff-stacking Arena comps, and his Soulstones come from the Kingdom Arena Medal Shop rather than gacha. Build him on a Light-focused Arena team with a real frontline and a healer.",
};
