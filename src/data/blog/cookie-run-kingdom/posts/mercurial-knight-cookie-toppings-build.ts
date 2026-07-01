import type { BlogPost } from '../../blogTypes';

export const mercurialKnightCookieToppingsBuild: BlogPost = {
  slug: 'mercurial-knight-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'cookie-deep-dive',

  tags: ['toppings', 'mercurial-knight', 'steel', 'epic', 'front-line'],

  title: 'Mercurial Knight Cookie Toppings Build — Silver Wall, Geared Right',
  metaDescription:
    'The best Mercurial Knight Cookie toppings build in Cookie Run: Kingdom: Solid Almond vs Searing Raspberry, the DMG Resist debate, Mercury Poison scaling, and fit.',
  excerpt:
    "Mercurial Knight Cookie is the Epic front-liner who dispels his own debuffs and hits harder the longer he lives — but only geared right. Here's the build that works.",
  featuredImagePrompt:
    'Dramatic painterly portrait of Mercurial Knight Cookie in silver armor, liquid-metal mercury swirling around a two-handed sword, cold steel and teal rim lighting, Cookie Run: Kingdom hero banner, cinematic 16:9',
  heroImage: '/images/blog/cookie-run-kingdom/mercurial-knight-cookie-toppings-build/hero.webp',
  heroImageAlt:
    'Mercurial Knight Cookie official illustration, the Epic Steel-type Charge cookie this Cookie Run: Kingdom toppings build covers.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/mercurial-knight-cookie-toppings-build/hero.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Mercurial_Knight_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/mercurial-knight-cookie-toppings-build/mercury-storm-sprite.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Mercurial_Knight_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/mercurial-knight-cookie-toppings-build/solid-almond.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Toppings',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/mercurial-knight-cookie-toppings-build/searing-raspberry.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Toppings',
      license: 'Fandom CC-BY-SA',
    },
  ],

  publishDate: '2026-06-30T00:00:00.000Z',
  lastUpdated: '2026-06-30T00:00:00.000Z',

  primaryKeyword: 'mercurial knight cookie toppings',
  secondaryKeywords: [
    'mercurial knight cookie build',
    'mercurial knight toppings cookie run',
    'best toppings mercurial knight',
    'mercurial knight cookie skill',
    'mercurial knight cookie guide',
    'crk mercurial knight',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,

  toc: [
    { id: 'the-knight-who-eats-debuffs', label: 'The knight who eats debuffs', level: 2 },
    { id: 'what-mercurial-knight-actually-does', label: 'What Mercurial Knight actually does', level: 2 },
    { id: 'the-recommended-build-solid-almond', label: 'The recommended build: Solid Almond', level: 2 },
    { id: 'the-damage-build-searing-raspberry', label: 'The damage build: Searing Raspberry', level: 2 },
    { id: 'the-hybrid-split-nobody-agrees-on', label: 'The hybrid split nobody agrees on', level: 2 },
    { id: 'which-substats-to-chase', label: 'Which substats to chase', level: 2 },
    { id: 'where-mercurial-knight-fits', label: 'Where Mercurial Knight fits', level: 2 },
    { id: 'is-mercurial-knight-worth-building', label: 'Is Mercurial Knight worth building?', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Most Epic front-liners get shelved the moment you pull a decent Legendary tank. Mercurial Knight Cookie is the rare exception who keeps earning a slot, and the reason is a mechanic almost nobody else has: he turns getting debuffed into a *win condition*. Land a stun, a poison, a burn on him and he doesn't just shrug it off — he banks it, and once he's stacked enough, he dispels every debuff on himself and powers up. That's not a gimmick. That's a hard answer to the crowd-control comps that wall normal tanks.

But a self-cleansing bruiser only cleanses if he survives long enough to stack, and only threatens if his final strike actually lands damage. That's where toppings decide whether he's a silver wall or a silver speed bump. This is the full build guide: the wiki-recommended survivability set, the aggressive alternative, the genuinely contested hybrid split, the substats that matter, and where he slots on a real team. I'm keeping skill percentages out of the topping math on purpose — the game retunes those. What holds is the *shape*.

## The knight who eats debuffs

First the vitals, because they dictate the entire build. Mercurial Knight Cookie is an **Epic**, **Charge-type**, **Front-position** cookie with the **Steel** element. He was released in the second half of the Secrets of the Silver Kingdom update (v5.1) as the commander of the Silver Tree Knights. Charge plus Front means exactly what it sounds like: he wants to be at the tip of your formation soaking hits and dealing area damage, not tucked in the back.

Being an **Epic** matters for two reasons. One, his Soulstones come from the standard Cookie gacha, so he's reachable without whaling — you're not hunting a Legendary rate. Two, an Epic that stays relevant on end-game teams is a genuine value pick, and building him well is how you cash that in. If you're still learning how rarity affects investment, the [cookie rarity explainer](/blog/cookie-run-kingdom/crk-cookie-rarity-explained) covers why an Epic like this can punch above his tier.

## What Mercurial Knight actually does

![Mercurial Knight Cookie's Mercury Storm battle sprite, silver armor wreathed in liquid metal.](/images/blog/cookie-run-kingdom/mercurial-knight-cookie-toppings-build/mercury-storm-sprite.webp)

His skill is **Mercurial Knight's Oath**, and per the wiki it runs on an 11-second cooldown. Here's what it does, in plain terms:

- **Strengthened attacks + Mercury Poisoning.** With the power of mercury, his regular attacks are strengthened to deal area damage and inflict **Mercury Poisoning** stacks on enemies.
- **A stack-scaling finisher.** He then lands a final strike that deals damage plus *additional* damage based on how many Mercury Poisoning stacks the target has racked up. More stacks, bigger finish.
- **The Amalgamation loop.** When Mercurial Knight is inflicted with a debuff, he gains an **Amalgamation** buff. Once he has enough stacks, he **dispels all debuffs on himself and enters Mercury Storm mode.** While in Mercury Storm, he won't gain further Amalgamation.
- **Built-in immunities.** Thanks to his mercurial armor, he's immune to the **Spore Dispersal** and **Mushroom Mutation** effects — relevant against specific PvE enemies. He also becomes briefly resistant to interrupting effects while using his skill.

Read that loop again, because it's the whole cookie: **debuffs feed him.** A comp that tries to lock him down with crowd control is handing him the fuel to cleanse and power up. That's why he's not geared like a dumb wall — he's geared to survive the initial pressure, absorb the debuffs, and then start hitting.

## The recommended build: Solid Almond

![A Solid Almond topping icon, the DMG Resist topping recommended for Mercurial Knight Cookie.](/images/blog/cookie-run-kingdom/mercurial-knight-cookie-toppings-build/solid-almond.webp)

The wiki lists **Solid Almond** (the DMG Resist set) first among his recommended toppings, and for a front-line Charge cookie whose value is staying alive to complete the Amalgamation loop, that's the correct default. A full **5x Solid Almond** set stacks flat damage reduction that keeps him standing through the burst window where he'd otherwise fold before he ever reaches Mercury Storm.

This is the build I'd point most players to, especially in PvP and in longer PvE fights. Mercurial Knight's payoff is on a delay — he needs to eat debuffs and stack Amalgamation before he's at full power — so anything that extends his life expectancy is directly extending his damage window. If you only have one clean topping set to give him, make it Solid Almond and don't overthink it. The general set-bonus and rolling mechanics live in the [toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide) if you're still learning the system.

## The damage build: Searing Raspberry

The wiki's other recommended set is **Searing Raspberry** (ATK), and this is the one to reach for when he's surviving fine and you want his finisher to actually hurt. His strengthened attacks and his stack-scaling final strike both benefit from ATK, so a full **5x Searing Raspberry** turns him from a durable nuisance into a durable *threat*.

When do you go Raspberry over Almond? When your team already has enough peel and healing that Mercurial Knight isn't in danger of dying — at that point his survivability is "solved" and the marginal value shifts to damage. On a well-supported PvE team clearing content he isn't going to lose, ATK stacking lets him contribute real chip damage on top of the tanking. It's the same offensive philosophy that powers most [DPS carries](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked) — he just brings a debuff-cleanse to the party.

## The hybrid split nobody agrees on

Here's the genuinely contested call, and it's worth being honest about. A lot of players don't run him at 5x anything — they split **3x Solid Almond + 2x Searing Raspberry**, buying most of the DMG Resist while grabbing a slice of ATK so his finisher isn't limp. The argument is that pure Almond can leave his damage feeling like wet cardboard, and pure Raspberry can get him killed before the loop completes, so the split threads the needle.

My read: the split is the *safest* general-purpose build, and if you're not sure which job he's doing, run 3 Almond / 2 Raspberry and move on. But it's not automatically *optimal* — on a burst-heavy Arena defense where he just needs to eat the alpha strike, pure Almond is better; on a coddled PvE clear team, pure Raspberry is better. There's no single correct answer here, which is exactly why the wiki lists both Solid Almond and Searing Raspberry rather than crowning one. Anyone who tells you the split is mandatory is overstating it.

## Which substats to chase

Whichever set you land on, substats separate a good Mercurial Knight from a great one. The wiki's recommended stats for him are **DMG Resist, ATK, Steel DMG, and ATK SPD** — so those are what your topping substats should roll toward, roughly in that order:

- **DMG Resist** — the single highest-value substat for him, because it stacks multiplicatively with the base Solid Almond bonus and keeps him alive to reach Mercury Storm. Chase this first.
- **ATK** — makes the strengthened attacks and the stack-scaling finisher hit. Essential on a Raspberry build, still useful on Almond.
- **ATK SPD** — faster attacks mean faster Mercury Poisoning application, which means a bigger finisher and a quicker Amalgamation loop. Underrated on him specifically.
- **Steel DMG** — a niche but real damage line for a Steel-element cookie; take it where it rolls but don't force it over the big three.

The practical priority for most players: DMG Resist first, then ATK, and treat ATK SPD as a strong bonus when it appears.

## Where Mercurial Knight fits

He is a **debuff-shrugging front-liner**, so he's at his best exactly where crowd control and damage-over-time are trying to disable your tank:

- **Arena offense and defense**, where enemy stuns and debuffs are constant. His Amalgamation cleanse turns their control against them — cross-reference the [Kingdom Arena meta team](/blog/cookie-run-kingdom/kingdom-arena-meta-team) and the [best Arena defense teams](/blog/cookie-run-kingdom/best-crk-arena-defense-teams) for the cookies he anchors.
- **PvE against debuff-heavy enemies**, including content that throws Spore Dispersal or Mushroom Mutation — he's flatly immune to those two. The [best PvE teams](/blog/cookie-run-kingdom/best-crk-pve-teams) show where a durable front bruiser slots.
- **Any comp missing a cleanse.** If your team has no answer to being locked down, he brings his own.

He is not a healer and not a back-line carry. Pair him with a real healer from the [healer tier list](/blog/cookie-run-kingdom/best-crk-healers-ranked) and let him do the one thing he's elite at: standing in front and getting stronger the more they try to stop him.

## Is Mercurial Knight worth building?

Yes — with the honest caveat that he's a role player, not a universal auto-include. As an **Epic** he's accessible through the standard gacha, and a front-liner who dispels his own debuffs and hits harder the longer a fight drags is a genuinely useful, meta-relevant tool wherever crowd control is the problem. For the topping cost of one Epic, that's strong value.

The caveat: on a team that already has a dominant Legendary tank and a cleanse, he can be redundant, and a pure-PvE player with no Arena ambitions might spend their first topping sets on a [carry](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked) instead. But if you fight anything that leans on debuffs — and in Arena, you always do — Mercurial Knight geared with Solid Almond (or the 3/2 split), DMG Resist substats first, and a healer behind him is a build that keeps paying off. Build him.

## Quick Action Checklist

- [ ] Confirm his role: pure wall (Solid Almond), damage threat (Searing Raspberry), or generalist (3 Almond / 2 Raspberry)
- [ ] For the default survivability build, equip 5x Solid Almond for stacked DMG Resist
- [ ] For a coddled team where he won't die, equip 5x Searing Raspberry for finisher damage
- [ ] If unsure, run 3x Solid Almond + 2x Searing Raspberry as the safe generalist split
- [ ] Chase DMG Resist substats first, then ATK, then ATK SPD, then Steel DMG
- [ ] Put him at the Front — he's a Charge cookie who wants to soak the alpha strike
- [ ] Lean on him against debuff/crowd-control comps so his Amalgamation cleanse pays off
- [ ] Give him a real healer behind him and let the debuffs feed his Mercury Storm`,

  faq: [
    {
      question: 'What are the best toppings for Mercurial Knight Cookie?',
      answer:
        "The wiki lists Solid Almond (DMG Resist) and Searing Raspberry (ATK) as his recommended sets. For most players, 5x Solid Almond is the safest default because his value is surviving long enough to dispel debuffs and enter Mercury Storm. Run 5x Searing Raspberry when he's already well-protected and you want his stack-scaling finisher to hit harder, or split 3x Solid Almond + 2x Searing Raspberry as a generalist. Prioritize DMG Resist substats first, then ATK and ATK SPD.",
    },
    {
      question: 'What does Mercurial Knight Cookie do?',
      answer:
        "His skill, Mercurial Knight's Oath, strengthens his regular attacks to deal area damage and inflict Mercury Poisoning stacks, then lands a final strike that deals more damage the more stacks are on the target. When he's inflicted with a debuff he gains an Amalgamation buff, and once he has enough stacks he dispels all his debuffs and enters Mercury Storm mode. He's also immune to the Spore Dispersal and Mushroom Mutation effects and resists interruption while casting.",
    },
    {
      question: 'Is Mercurial Knight Cookie good in Cookie Run: Kingdom?',
      answer:
        'Yes, especially against crowd-control and debuff-heavy comps. He is an Epic, Steel-type, Front-position Charge cookie whose Amalgamation mechanic turns being debuffed into a self-cleanse and power-up, making him a strong front-liner in Kingdom Arena and against debuff-throwing PvE enemies. He is a role player rather than a universal auto-include, but he punches above his Epic rarity when the enemy relies on stuns and status effects.',
    },
    {
      question: 'Should you build Mercurial Knight for DMG Resist or ATK?',
      answer:
        "It depends on his job. Default to DMG Resist (Solid Almond) because his payoff is delayed — he has to survive the early burst and eat debuffs before Mercury Storm comes online. Lean into ATK (Searing Raspberry) only when your team already keeps him alive, so the extra damage on his stack-scaling finisher is free value. When in doubt, the 3x Solid Almond + 2x Searing Raspberry split covers both jobs.",
    },
    {
      question: 'How do you get Mercurial Knight Cookie?',
      answer:
        'Mercurial Knight Cookie is an Epic Cookie obtained through the standard Cookie gacha, released in the second half of the Secrets of the Silver Kingdom update (v5.1). Because he is an Epic rather than a Legendary, his pull rate is more forgiving than the top-rarity cookies, and you can also accumulate his Soulstones over time to promote him.',
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/crk-toppings-guide', anchor: 'toppings guide' },
    { href: '/blog/cookie-run-kingdom/crk-cookie-rarity-explained', anchor: 'cookie rarity explained' },
    { href: '/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked', anchor: 'DPS tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-healers-ranked', anchor: 'healer tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-arena-defense-teams', anchor: 'best Arena defense teams' },
    { href: '/blog/cookie-run-kingdom/best-crk-pve-teams', anchor: 'best PvE teams' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Mercurial_Knight_Cookie', title: 'Cookie Run: Kingdom Wiki — Mercurial Knight Cookie' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Toppings', title: 'Cookie Run: Kingdom Wiki — Toppings' },
  ],

  tldr:
    "The default Mercurial Knight Cookie toppings build is 5x Solid Almond (DMG Resist) so he survives long enough to dispel his debuffs and enter Mercury Storm mode; run 5x Searing Raspberry (ATK) when he's already protected and you want his stack-scaling finisher to hit harder, or split 3 Almond / 2 Raspberry as a generalist. Prioritize DMG Resist substats first, then ATK and ATK SPD. Mercurial Knight is an Epic, Steel-type, Front-position Charge cookie whose Amalgamation mechanic turns enemy debuffs into a self-cleanse and power-up, making him a strong, gacha-accessible front-liner against crowd-control comps in Kingdom Arena and debuff-heavy PvE.",
};
