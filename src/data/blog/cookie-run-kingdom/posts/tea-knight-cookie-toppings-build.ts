import type { BlogPost } from '../../blogTypes';

export const teaKnightCookieToppingsBuild: BlogPost = {
  slug: 'tea-knight-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'cookie-deep-dive',

  tags: ['tea-knight-cookie', 'toppings', 'epic-cookies', 'charge', 'buffer'],

  title: 'Tea Knight Cookie Toppings Build & Full Guide',
  metaDescription:
    'Tea Knight Cookie build guide for July 2026: the Solid Almond + Searing Raspberry topping spread, substat priorities, Magic Candy, resonant gear, and team fit.',
  excerpt:
    "Tea Knight is the Epic front-liner who gets scarier the worse the fight goes — every ally that falls stacks his Wrath of the Commander and turns him into a buffing, self-healing wall. Build him wrong and you waste that. Here is the topping build, substats, Magic Candy, and team fit that actually leans into his kit.",
  featuredImagePrompt:
    'Tea Knight Cookie center frame, an aging silver-armored knight with an X-shaped scar and a worn royal-blue cape, chain-axe raised, warm steel highlights against a battlefield of fallen banners, Cookie Run: Kingdom key-art style, painterly cel-shaded, dramatic rim light',
  heroImage: '/images/blog/cookie-run-kingdom/tea-knight-cookie-toppings-build/tea-knight-cookie.webp',
  heroImageAlt:
    'Tea Knight Cookie, the Epic-rarity Charge front-liner and ally buffer this July 2026 toppings build guide is for.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/tea-knight-cookie-toppings-build/tea-knight-cookie.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Tea_Knight_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    { src: '/images/gear/toppings/almond.png', sourceUrl: 'owned-asset' },
    { src: '/images/gear/toppings/raspberry.png', sourceUrl: 'owned-asset' },
    { src: '/images/cookies/hollyberry-cookie.png', sourceUrl: 'owned-asset' },
  ],

  publishDate: '2026-07-18T00:00:00.000Z',
  lastUpdated: '2026-07-18T00:00:00.000Z',

  primaryKeyword: 'tea knight cookie toppings',
  secondaryKeywords: [
    'tea knight cookie build',
    'best toppings tea knight',
    'tea knight magic candy',
    'tea knight cookie guide',
    'tea knight cookie team',
    'tea knight substats',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,

  toc: [
    { id: 'who-tea-knight-actually-is', label: 'Who Tea Knight actually is', level: 2 },
    { id: 'why-wrath-of-the-commander-changes-the-build', label: 'Why Wrath of the Commander changes the build', level: 2 },
    { id: 'the-standard-tea-knight-topping-build', label: 'The standard Tea Knight topping build', level: 2 },
    { id: 'substat-priorities-without-the-fake-numbers', label: 'Substat priorities without the fake numbers', level: 2 },
    { id: 'the-cooldown-leaning-alternate', label: 'The cooldown-leaning alternate', level: 2 },
    { id: 'resonant-gear-beascuit-and-tart', label: 'Resonant gear, beascuit, and tart', level: 2 },
    { id: 'magic-candy-for-tea-knight', label: 'Magic Candy for Tea Knight', level: 2 },
    { id: 'team-comps-and-where-he-fits', label: 'Team comps and where he fits', level: 2 },
    { id: 'where-to-farm-his-soulstones', label: 'Where to farm his Soulstones', level: 2 },
    { id: 'common-tea-knight-build-mistakes', label: 'Common Tea Knight build mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Tea Knight is the rare Epic that a lot of endgame players still keep built, and the reason is counterintuitive: he gets *better* the worse a fight is going. Every ally that dies stacks his Wrath of the Commander, and by the time your team is down to two Cookies he is buffing them, resisting interrupts, and hitting like a cookie two rarities above his own. Most players never see that because they gear him like a generic tank, cap out the survivability, and never let the snowball happen.

This is the July 2026 build sheet for him: toppings, substats, resonant gear, Magic Candy, team fit, and the mistakes that keep him a benchwarmer. He was reworked to be all-Steel damage in the Garden of Sweet Delights patch, so if you are reading an older guide that calls his hits "Physical," throw it out — that changes which effects amplify him.

## Who Tea Knight actually is

![Tea Knight Cookie in silver tea-strainer armor with an X-shaped scar, the Epic-rarity Charge front-liner this build is for.](/images/blog/cookie-run-kingdom/tea-knight-cookie-toppings-build/tea-knight-cookie.webp)

Get the identity right before you spend a topping. Tea Knight Cookie is **Epic rarity**, **Charge** class, and his position is prioritized to the **Front**. His element is **Steel** — as of the Garden of Sweet Delights update his skill damage was converted entirely to Steel, which matters because Steel-damage amplification now scales him where it did nothing before. He was released back in the War Under Shattered Skies update alongside Eclair, and his release completed the Second Cookie Legion.

His skill is **Battlemaster**, on a 13-second cooldown. It does three things at once: it hits the nearest enemy (targeting Cookies first) for Steel damage, it hands out buffs, and it plants a stacking mechanic. The buffs are ATK +6% to your two highest-ATK allies and CRIT% +12% to your two highest-CRIT allies, both for 8 seconds. The stacking mechanic is the interesting part.

**Wrath of the Commander** triggers every time one of your allies is defeated. It cannot be dispelled and stacks up to four times. Each stack gives Tea Knight ATK +50% and ATK SPD +20%. The fourth stack jumps to ATK +100% and ATK SPD +150%, and at max stacks he becomes resistant to interrupting effects. Read that again: a fully-stacked Tea Knight is a self-buffing, interrupt-immune bruiser, and he only gets there when your team is falling apart. He is designed for attrition.

## Why Wrath of the Commander changes the build

Here is the fork most guides skip. Tea Knight is not a pure tank and not a pure DPS — he is a **front-line buffer who threatens damage once the fight goes long**. Those two jobs pull in different directions. You want him alive on the front line to keep casting Battlemaster and feeding buffs, but you also want his own attacks to matter once Wrath of the Commander is rolling.

The resolution the community landed on: build him as a **survivable buffer with real attack behind it**, not a brick and not a glass cannon. His kit does part of the work — at max Wrath stacks he is interrupt-immune and hitting for double ATK, so you do not need to fund every point of his damage through gear. What gear needs to guarantee is that he *lives long enough* to reach those stacks, because a dead Tea Knight buffs nobody.

That is why the standard build is a hybrid rather than a single-stat stack. If you have read the [toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide), this is the same logic it teaches applied to a Cookie who genuinely wants two stats at once.

## The standard Tea Knight topping build

![Solid Almond topping icon, the DMG Resist half of the standard hybrid Tea Knight build.](/images/gear/toppings/almond.png)

**3x Solid Almond (DMG Resist) + 2x Searing Raspberry (ATK).** That is the standard hybrid, and it is the consensus for using him as a front-line buffer that survives.

The spread:

- **Toppings:** 3x Solid Almond (DMG Resist), 2x Searing Raspberry (ATK)
- **Resonant gear:** Sleek Silver Infusers (his signature set)
- **Tart:** an ATK tart for the hybrid build
- **Magic Candy:** equipped and leveled

Why the split rather than five of one topping? Solid Almond keeps him standing on the front line through the early game before Wrath of the Commander ever triggers — he cannot snowball if he dies at stack zero. Searing Raspberry gives his own hits and his true-damage Magic Candy something to scale off, so that when the stacks land he actually does something with them. You are not choosing survival over damage; you are buying enough survival to unlock the damage his kit hands you for free.

![Searing Raspberry topping icon, the ATK half of the hybrid Tea Knight build.](/images/gear/toppings/raspberry.png)

If you want him as a pure enabler who never really attacks, you can flip the ratio toward more DMG Resist. But the 3-and-2 hybrid is the default because it respects both halves of what he does.

## Substat priorities without the fake numbers

Substats are where a build's real quality lives, and they are also where the CRK community loves to invent exact percentages nobody can verify. I am not going to hand you a fake "you need exactly 63.2% Cooldown" target. Here is the honest version.

Priority order:

1. **Cooldown** — the single most valuable substat on a buffer. The faster Battlemaster recurs, the more often your carries get the ATK and CRIT% buffs, and the sooner his Magic Candy stun and heal come back around. This is your first roll target.
2. **DMG Resist** — keeps a front-line body alive to the point where Wrath of the Commander starts stacking. On a frontliner this matters more than it would on a back-row Cookie.
3. **ATK%** — the multiplier on his own damage and his HP-based true damage. Take ATK% over flat ATK; the percentage scales with his base stat and the flat number does not.

The practical rule: **roll Cooldown first for buff uptime, DMG Resist to survive, ATK% as your damage multiplier, and stop chasing a perfect set.** A hybrid Cookie wants a healthy spread, not one maxed stat, and substats have diminishing returns past a reasonable point. Once he casts often and lives long enough to stack, your effort is better spent on your next Cookie.

## The cooldown-leaning alternate

There is a legitimate second build: **5x Swift Chocolate (Cooldown)** for players who value Tea Knight purely as a buff engine. If his only job on your team is keeping the ATK/CRIT% buffs glued to your carry and spamming the Magic Candy stun, maximizing cooldown makes his one contribution happen as often as possible.

It is a real option, not a trap — but it is the situational pick. You give up the front-line survivability of the Solid Almond half, so it only works when you have a separate tank soaking the damage and Tea Knight is safely tucked behind them casting on loop. For general use, the hybrid is the default because it lets him hold the front *and* buff. If you only gear him one way, gear him the 3-and-2 hybrid. If you have a dedicated wall and want him as a pure metronome, the cooldown set is the deliberate trade.

## Resonant gear, beascuit, and tart

His resonant gear set is **Sleek Silver Infusers**, tuned to his kit — run it when you can. For the beascuit slot, lean into what he actually does: he is a Steel-damage buffer, so pick a beascuit that reinforces cooldown and attack rather than a mismatched damage type. Back it with DMG Resist so the front-line body survives, same as the toppings.

For the tart, match your topping build. The hybrid Solid Almond and Searing Raspberry set pairs with an **ATK tart** to push his damage; the pure cooldown set pairs with a **cooldown tart** to squeeze buff uptime. Do not mix a cooldown tart into a hybrid damage set unless you have deliberately committed to the metronome route — pick a lane. The [treasures guide](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide) covers the battle-start cooldown and survivability treasures that pull double duty on a front-line buffer like him.

## Magic Candy for Tea Knight

Magic Candy is what pushes Tea Knight from "nice buffer" to "why is that Epic doing that." His Magic Candy skill, **Knight's Virtue**, layers a genuinely nasty toolkit on top of Battlemaster:

- Whenever an ally falls, he gains **two** Wrath of the Commander stacks instead of one, so he reaches max stacks twice as fast in an attrition fight.
- His skill now deals **true damage relative to the target's Max HP** — 10% of a Cookie's Max HP, capped at 300,000 — and **Stuns** the target for 2 seconds. Stun-immune targets eat extra Steel damage instead.
- When his skill target is defeated, his cooldown drops and he heals himself.
- He gets a self passive: ATK +1.5% for every 5% of the team's total HP lost, capped at 30%.

That is a huge amount of value: percent-HP true damage that ignores defenses, a stun for control, self-sustain, and a passive that literally pays out as the team takes damage. It is the strongest argument for keeping a built Tea Knight around at endgame. Level it to a functional baseline before you call the build done, then push it higher if he is a fixture in your serious teams. The [Magic Candy priority guide](/blog/cookie-run-kingdom/crk-magic-candy-priority-guide) has the framework for where he sits in your Soul Essence spending — for a Cookie this many players keep built, he is worth it.

## Team comps and where he fits

![Hollyberry Cookie raising her shield, the kind of durable front-line partner that lets Tea Knight survive to stack Wrath of the Commander.](/images/cookies/hollyberry-cookie.png)

Tea Knight is a support-flavored frontliner, so build the team to cash in his buffs:

- **A hard carry who wants ATK and CRIT%.** His Battlemaster buff targets your two highest-ATK and two highest-CRIT allies, so pair him with a DPS from the [DPS tier list](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked) who actually benefits from those exact stats. A CRIT-hungry carry is his best friend.
- **A second durable body or healer.** Because his own survivability build is partial, a wall like Hollyberry or a healer keeps the front line standing long enough for his kit to come online. That said, in attrition modes his Wrath stacks *want* allies to eventually fall — he is one of the few Cookies who is not ruined by losing a teammate.
- **A second buffer or debuffer.** His value is multiplicative with team buffs, so a support from the [support tier list](/blog/cookie-run-kingdom/best-crk-support-cookies-ranked) stacks cleanly on top without competing for his slot.

He slots into the kind of shells the [Kingdom Arena meta team](/blog/cookie-run-kingdom/kingdom-arena-meta-team) and the [Guild Battle teams guide](/blog/cookie-run-kingdom/guild-battle-teams) lay out, and he especially shines in long boss fights where the true-damage Magic Candy and the HP-loss passive have time to pay off. Keep him on the front — he is a Charge Cookie and that is where his kit is tuned to work.

## Where to farm his Soulstones

If you did not pull him, he is farmable. His Soulstones drop in **Citadel of the Frozen Cliff, stage 14-30 on Dark Mode**, and in **Hero's Gate, stage 4-28 on Master Mode**. Both are grindy, but he is one of the more valuable Epics to slowly build through Soulstones precisely because he holds up at endgame — an unlockable Cookie who still earns a team slot is a good use of your farming stamina.

## Common Tea Knight build mistakes

In rough order of how often they show up:

1. **Full DMG Resist, zero ATK.** You turn a buffer with a genuinely scary Magic Candy into a wall that does nothing. Keep the Searing Raspberry pieces so his true damage and stun actually threaten.
2. **Full ATK, zero survivability.** The opposite error. He dies at Wrath stack zero and never snowballs. On the front line he needs the Solid Almond half.
3. **Ignoring Cooldown substats.** His entire contribution is on a timer. Skimp on cooldown and your carry spends half the fight without buffs.
4. **Treating his old kit as current.** He is all-Steel damage now. Building or teaming him as if he still deals Physical damage means you are stacking the wrong amplifiers.
5. **Mixing a cooldown tart into the hybrid set.** Pick a lane. Hybrid wants the ATK tart; only the deliberate metronome build wants the cooldown tart.
6. **Benching him because he is "just an Epic."** He keeps a slot in real endgame teams because of percent-HP true damage and the attrition snowball. Rarity is not the whole story.

## Quick Action Checklist

- Equip 3x Solid Almond (DMG Resist) + 2x Searing Raspberry (ATK) as the standard hybrid build
- Roll Cooldown substats first, then DMG Resist, then ATK% — and do not reroll forever
- Take ATK% over flat ATK every time
- Run his Sleek Silver Infusers resonant gear when you can
- Pair an ATK tart with the hybrid build; only use a cooldown tart for the pure buff-engine route
- The 5x Swift Chocolate (Cooldown) set is the situational pick when he sits behind a dedicated tank
- Level his Magic Candy — the percent-HP true damage and stun are the reason to keep him built
- Pair him with a CRIT-hungry carry who wants his ATK and CRIT% buffs
- Keep him on the front row where his Charge kit works
- Farm Soulstones at Citadel of the Frozen Cliff 14-30 (Dark) and Hero's Gate 4-28 (Master) if you did not pull him`,

  faq: [
    {
      question: 'What are the best toppings for Tea Knight Cookie?',
      answer:
        'The standard build is 3x Solid Almond (DMG Resist) + 2x Searing Raspberry (ATK). Tea Knight is a front-line Charge buffer whose Wrath of the Commander snowballs the longer a fight goes, so you want enough DMG Resist to survive to those stacks and enough ATK for his own hits and his percent-HP true damage to matter. Prioritize Cooldown substats first for buff uptime, then DMG Resist, then ATK%. A full 5x Swift Chocolate (Cooldown) set is a legitimate alternate if he sits behind a dedicated tank as a pure buff engine.',
    },
    {
      question: 'What class and rarity is Tea Knight Cookie?',
      answer:
        'Tea Knight Cookie is an Epic-rarity, Charge-class Cookie whose position is prioritized to the Front line. His element is Steel — his skill damage was converted entirely to Steel in the Garden of Sweet Delights update, so any older guide calling his hits Physical is out of date. He was released in the War Under Shattered Skies update alongside Eclair and completed the Second Cookie Legion.',
    },
    {
      question: 'What does Tea Knight Cookie\'s skill do?',
      answer:
        'His skill, Battlemaster (13-second cooldown), hits the nearest enemy for Steel damage while buffing his two highest-ATK allies with ATK +6% and his two highest-CRIT allies with CRIT% +12% for 8 seconds. Its signature is Wrath of the Commander: every time an ally is defeated he gains a stack (up to four, undispellable), each granting ATK +50% and ATK SPD +20%, with the fourth stack jumping to ATK +100%, ATK SPD +150% and making him resistant to interrupts. He is built for attrition — he gets stronger as your team falls.',
    },
    {
      question: 'Is Tea Knight Cookie still worth building in 2026?',
      answer:
        'Yes, especially with his Magic Candy. Knight\'s Virtue gives him true damage equal to 10% of a target Cookie\'s Max HP (capped at 300,000), a 2-second stun, self-healing, double Wrath of the Commander stacks on ally defeat, and a passive that grants ATK as the team loses HP. Percent-HP true damage ignores defenses, which is why a well-built Tea Knight keeps a slot in real endgame teams and long boss fights despite being an Epic. He is one of the better Epics to invest Magic Candy into.',
    },
    {
      question: 'Where do I farm Tea Knight Cookie Soulstones?',
      answer:
        'His Soulstones drop in Citadel of the Frozen Cliff stage 14-30 on Dark Mode and in Hero\'s Gate stage 4-28 on Master Mode. Both are slow grinds, but he is one of the more worthwhile Epics to build through Soulstones because he holds up at endgame rather than getting benched once you have Legendaries.',
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/crk-toppings-guide', anchor: 'toppings guide' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide', anchor: 'treasures guide' },
    { href: '/blog/cookie-run-kingdom/crk-magic-candy-priority-guide', anchor: 'Magic Candy priority guide' },
    { href: '/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked', anchor: 'DPS tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-support-cookies-ranked', anchor: 'support tier list' },
    { href: '/blog/cookie-run-kingdom/best-epic-cookies-crk-ranked', anchor: 'best Epic cookies ranked' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team' },
    { href: '/blog/cookie-run-kingdom/guild-battle-teams', anchor: 'Guild Battle teams guide' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Tea_Knight_Cookie', title: 'Cookie Run: Kingdom Wiki — Tea Knight Cookie' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Toppings', title: 'Cookie Run: Kingdom Wiki — Toppings' },
  ],

  tldr:
    "Tea Knight Cookie is an Epic Charge front-liner and buffer whose Wrath of the Commander stacks (up to four, undispellable) make him stronger the more allies fall — at max stacks he is interrupt-immune with ATK +100% and ATK SPD +150%. Build him as a survivable buffer: 3x Solid Almond (DMG Resist) + 2x Searing Raspberry (ATK), with Cooldown substats first, then DMG Resist and ATK%. His element is now Steel, and his Magic Candy (Knight's Virtue) adds percent-HP true damage capped at 300,000, a stun, and self-healing that keep him in endgame teams. A 5x Swift Chocolate (Cooldown) set is the alternate for a pure buff engine behind a dedicated tank.",
};
