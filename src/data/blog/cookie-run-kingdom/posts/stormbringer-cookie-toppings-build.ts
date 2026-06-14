import type { BlogPost } from '../../blogTypes';

export const stormbringerCookieToppingsBuild: BlogPost = {
  slug: 'stormbringer-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'stormbringer-build',

  title: 'Stormbringer Cookie Toppings Build & Guide',
  metaDescription:
    'Stormbringer Cookie build guide for June 2026: toppings, the CRIT% Supercharge threshold, substats, beascuit and tart picks, Magic Candy, and her best teams.',
  excerpt:
    "Stormbringer is a Legendary Charge frontliner who carries the whole Electricity archetype on her back — she Supercharges at 30% CRIT and turns every shock your team deals into team-wide buffs and a Max-HP-shredding Punishment. Build her wrong and the engine never starts. Here's the full sheet: toppings, substats, beascuit, tart, Magic Candy, and team fit.",
  featuredImagePrompt:
    'Stormbringer Cookie center frame as the ruler of the skies, a regal lightning goddess raising the Heaven Splitter polearm overhead as a storm of forked electricity arcs around her, deep storm-blue and electric-gold palette with crackling bolts and swirling thunderclouds, Cookie Run: Kingdom key-art style, painterly cel-shaded, dramatic rim lighting',
  heroImage: '/images/cookies/stormbringer-cookie.png',
  heroImageAlt: 'Stormbringer Cookie, the Legendary Charge-class Electricity frontliner this June 2026 toppings build guide is for.',
  imageSources: [
    { src: '/images/cookies/stormbringer-cookie.png', sourceUrl: 'owned-asset' },
    {
      src: '/images/blog/cookie-run-kingdom/stormbringer-cookie-toppings-build/stormbringer-illustration.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Stormbringer_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    { src: '/images/gear/toppings/apple-jelly.png', sourceUrl: 'owned-asset' },
    { src: '/images/gear/toppings/raspberry.png', sourceUrl: 'owned-asset' },
  ],

  publishDate: '2026-06-10T00:00:00.000Z',
  lastUpdated: '2026-06-10T00:00:00.000Z',

  primaryKeyword: 'stormbringer cookie toppings',
  secondaryKeywords: [
    'stormbringer cookie build',
    'best toppings stormbringer',
    'stormbringer beascuit',
    'stormbringer magic candy',
    'crk stormbringer guide',
    'stormbringer cookie team',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 11,

  toc: [
    { id: 'who-stormbringer-actually-is', label: 'Who Stormbringer actually is', level: 2 },
    { id: 'what-her-kit-actually-does', label: 'What her kit actually does', level: 2 },
    { id: 'the-crit-threshold-that-decides-everything', label: 'The CRIT threshold that decides everything', level: 2 },
    { id: 'the-standard-stormbringer-topping-build', label: 'The standard Stormbringer topping build', level: 2 },
    { id: 'substat-priorities-without-the-fake-numbers', label: 'Substat priorities without the fake numbers', level: 2 },
    { id: 'beascuit-and-tart-picks', label: 'Beascuit and tart picks', level: 2 },
    { id: 'magic-candy-for-stormbringer', label: 'Magic Candy for Stormbringer', level: 2 },
    { id: 'team-comps-and-where-she-fits', label: 'Team comps and where she fits', level: 2 },
    { id: 'common-stormbringer-build-mistakes', label: 'Common Stormbringer build mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Stormbringer is the cookie that turns "I have a couple of Electricity cookies" into "I have an Electricity team." She doesn't sit in the rear and snipe like Wind Archer, and she doesn't dive the backline like Black Pearl. She stands at the very front, takes the hits, and runs the engine — Supercharging your whole shock roster, converting every bolt your team throws into stacks, and detonating those stacks as a Max-HP-shredding Punishment that petrifies and stuns. She is the reason the Electricity archetype works at all, and if you build her like a generic tank or a generic carry, you never start the engine and the whole team underperforms.

This is the June 2026 build sheet for her: toppings, substats, beascuit, tart, Magic Candy, and team fit, plus the mistakes that turn the team's keystone into an expensive body that soaks damage and does nothing else. Where the community has invented exact substat roll-targets, I'm giving you the direction instead of a fake number — because the wrong number gets copy-pasted forever and the direction is what actually moves your results. The one number that genuinely matters on her isn't invented, and we'll get to it.

## Who Stormbringer actually is

![Stormbringer Cookie raising the Heaven Splitter, the Legendary Charge-class Electricity ruler of the skies this build is for.](/images/blog/cookie-run-kingdom/stormbringer-cookie-toppings-build/stormbringer-illustration.webp)

Get the identity right before you spend a single topping. Stormbringer Cookie is **Legendary rarity**, her class is **Charge**, and her position is prioritized in the **Front** of the formation. She's an **Electricity-element** cookie — the Sky God, one of the Guardians of Nature — and she's a Crystal Jam cookie, which is why she anchors so many high-tier discussions. She is not an Ancient and not a Beast; she's a Legendary, hard to pull but obtainable without the months-long soulstone grind an Ancient demands.

Here's the framing that the rest of the build hangs on: she is a **Charge frontliner who is also the buff engine for an entire element.** Charge cookies stand up front and absorb the opening exchange, so part of her job is survival. But the reason you run *her* specifically, over any other tanky front, is that her kit makes every Electricity cookie behind her hit harder and live longer — and it punishes the enemy through a stacking mechanic that your whole team feeds. Her listed stat focuses on the wiki are **Electricity DMG, CRIT%, DMG Resist Bypass, DMG Resist, and Cooldown**, and her recommended toppings are an **Apple Jelly / Raspberry** mix. Read those two facts together and the build is already half-written: she wants CRIT and damage, not pure bulk, because the engine she runs is a damage engine.

## What her kit actually does

Her skill is **Lightning Blitzstorm**, and it runs on a **13-second base cooldown**. The kit has more moving parts than most cookies, so here's what each piece actually does:

- **Supercharge.** At the *start of battle*, if her **CRIT% exceeds 30%**, Stormbringer becomes Supercharged and hands **Supercharge buffs to every Electricity-type ally** — bonus DMG Resist and Max HP that scale with how far over 30% her CRIT sits. This is the single most important line in her entire kit, and it's a hard threshold, not a soft suggestion. Below 30% CRIT, the engine doesn't turn on.
- **Heaven Splitter (the skill cast).** She swings her polearm for heavy Electricity damage with **35% DMG Resist Bypass** and inflicts **Zap** — a damage-over-time debuff that stacks up to five and nullifies HP Shields. The final hit scales partly off her own CRIT% (1% bonus damage per 1% CRIT, capped at 200%), so CRIT pays her twice: once at the threshold, again on the hit.
- **Stormbringer's Aura and Punishment.** Whenever *any* ally deals Electricity damage, it feeds Stormbringer's Aura. At max stacks the Aura fires **Stormbringer's Punishment** — a massive Electricity hit that **Petrifies**, scales bonus damage off the target's Zap stacks, and amplifies Zap into **Overcurrent**, which adds a damage-over-time tick plus a stun chance. The more your team shocks, the more often this detonates.
- **Chain Lightning.** While Supercharged, her regular attacks trigger chain lightning after a few hits, bouncing up to eight times and again scaling partly off her CRIT%.

Read it as a whole and the build writes itself: she's a frontliner whose value is starting and feeding an Electricity damage engine. The DMG Resist and Max HP she hands her allies cover the survival side; the Zap, Punishment, and Chain Lightning are the damage side. To make any of it function, you have to clear the CRIT threshold first.

## The CRIT threshold that decides everything

This is the number that isn't invented, and it's the one rule that separates a working Stormbringer from a wasted Legendary: **her CRIT% has to exceed 30% at the start of battle for Supercharge to activate.** Not after her first skill, not once stacks build — at the start, before anything happens.

Why it's non-negotiable: Supercharge is what hands the team-wide DMG Resist and Max HP buffs to your Electricity allies, and her own final-hit and chain-lightning damage scale off CRIT on top of that. Miss the threshold and you've equipped a tanky front that contributes a single skill cast — you've thrown away the entire reason she's on the team. Clear it comfortably and every shock cookie behind her gets tankier and hits harder for free.

The practical takeaway, which we'll cash out in the topping section: **build her to clear 30% CRIT with margin, then push past it.** Because her damage keeps scaling with CRIT beyond the threshold, extra CRIT isn't wasted once you're over the line — it's still feeding her hits. This is the rare CRK cookie where CRIT% is genuinely the priority stat rather than a nice-to-have, and it's exactly why the wiki lists CRIT% near the top of her stat focuses.

## The standard Stormbringer topping build

![Juicy Apple Jelly topping icon, the CRIT% set that clears Stormbringer's 30% Supercharge threshold and keeps scaling her damage.](/images/gear/toppings/apple-jelly.png)

The build follows the threshold. You need CRIT first to turn the engine on, and damage to make it hurt. Two routes, both legitimate:

**The CRIT-first build — 5x Juicy Apple Jelly (CRIT%).** This is the safest way to clear and blow past the 30% threshold, and because her damage keeps scaling with CRIT, the set never stops working. If you're worried about hitting the Supercharge line at all — and most players gearing her for the first time should be — go mono CRIT and you remove the doubt entirely. The 5-piece Apple Jelly set bonus stacks more CRIT on top, which makes the threshold trivial.

**The hybrid build — 3x Juicy Apple Jelly (CRIT%) + 2x Searing Raspberry (ATK).** This is the wiki-flavored route, leaning on the Apple Jelly / Raspberry mix her page recommends. Once your CRIT substats are strong enough that you clear 30% comfortably *without* needing all five toppings to be CRIT, you can hand two slots to ATK to push the raw size of her hits and her Punishment. The trade is real: you get bigger numbers, but only if your substats are doing the threshold work. Run this when you've actually verified your CRIT clears the line with margin — not before.

The honest default for most players: **lead with the CRIT-first build.** The cost of missing the threshold is the whole kit, so removing that risk is worth more than a few percent of ATK. Graduate to the hybrid once your CRIT substats can carry the 30% line on their own. Either way, **do not build her for pure survivability.** Her bulk is partly self-funded through the Supercharge Max HP and her own DMG Resist scaling — a tanky Stormbringer who never clears the CRIT threshold is a body, not an engine.

If you're new to how topping sets and substats interact, the [toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide) covers the fundamentals this build assumes.

## Substat priorities without the fake numbers

![Searing Raspberry topping icon, the ATK set that backs the hybrid Stormbringer build once her CRIT clears the threshold.](/images/gear/toppings/raspberry.png)

Substats are where most of a build's quality lives, and they're also where the CRK community most loves to invent exact percentages nobody can actually verify. I'm not going to hand you a fake "you need exactly 31.4% CRIT" target. Here's the honest version.

Priority order on her substats:

1. **CRIT%** — the priority, full stop, and on her it's not a preference, it's a gate. You need enough total CRIT to clear the 30% Supercharge threshold at battle start, and because her damage keeps scaling off CRIT past that, the stat never goes dead. Stack it across as many toppings as you can. This is the one cookie where I'd tell you to chase CRIT specifically rather than treating it as a coin-flip multiplier.
2. **ATK%** — your strong secondary. Once the threshold is handled, ATK% is what makes Heaven Splitter, the Punishment, and Chain Lightning land for real numbers. Take ATK% over flat ATK every time; the percentage scales with her base stat and the flat number doesn't.
3. **Cooldown** — a real third stat, because Lightning Blitzstorm and the Punishment both run on a 13-second timer. Shaving cooldown gets her skill, her Zap, and the Punishment detonation cycling faster, which keeps the engine fed. Take it where it doesn't cost you CRIT% or ATK%.

The practical rule: **roll CRIT% until you're safely over 30% with margin, then ATK% for the hits, then cooldown to keep the engine turning — and don't chase a perfect set.** Substats have diminishing returns past a healthy spread. Once she's Supercharging on turn one and her Punishment is detonating on a tight loop, the effort is better spent building the Electricity cookies she's buffing than rerolling for a fraction of a percent. Hit "she Supercharges reliably and the team notices" and stop.

## Beascuit and tart picks

The beascuit slot follows the same logic as the toppings: **lead with CRIT%, then ATK%.** It's another place to pad the CRIT you need for the threshold and to push her damage once you're over it. Stat priority on the beascuit: **CRIT% > ATK% > Cooldown or DMG Resist.** CRIT to help clear and exceed 30%, ATK% for the hits, and either a little cooldown to keep the Punishment cycling or a touch of resistance if she's getting bursted before she Supercharges. A high-quality CRIT/ATK beascuit is the ceiling, but any beascuit you can stack CRIT and ATK on does the core job. Don't bring a pure-DMG-Resist beascuit to her — it looks supportive and it's actually starving the engine.

For the tart, match it to your topping route:

- **CRIT tart.** The natural pairing if you're still leaning on gear to clear the threshold — it's more insurance that Supercharge fires. Strong default for the CRIT-first build.
- **ATK tart.** For when your CRIT already clears 30% comfortably and you want her hits and Punishment as large as they go. The pairing for the hybrid build. Don't run an ATK tart while you're still scraping to hit the threshold — get Supercharge online first, then chase damage.

For treasures, lead with anything that amplifies damage or gets her casting sooner — battle-start cooldown reduction so the first skill and the Punishment loop land in the opening window, and damage-amp treasures that multiply every shock. The [treasures guide](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide) covers the current best-in-slot options and how they stack.

## Magic Candy for Stormbringer

Magic Candy is where a Legendary engine cookie goes from "good" to "why is the entire enemy team petrified and on fire with lightning," and Stormbringer is a textbook case. Her Magic Candy deepens the kit that's already her identity — more out of her Electricity damage, the Zap-to-Overcurrent conversion, and the Punishment mechanic — which on a cookie that's feeding off her whole team's shock output compounds across the entire fight, not just her opening cast.

Leveling priority is the usual: get it equipped and leveled to a functional baseline before you call the build done, then push it higher if she's the anchor of your serious Arena or Beast-Yeast Electricity team. Because her value builds across a fight rather than landing in one burst, every level of Magic Candy is amplifying a cookie that's working the whole exchange. For where she should sit in your overall Soul Essence spending, the [Magic Candy priority guide](/blog/cookie-run-kingdom/crk-magic-candy-priority-guide) has the framework — and a buff-engine Legendary you actually build a team around generally earns a spot near the front of that line.

## Team comps and where she fits

![Hollyberry Cookie raising her shield, the kind of durable secondary front line that pairs with Stormbringer anchoring an Electricity team.](/images/cookies/hollyberry-cookie.png)

Stormbringer is the keystone, not a plug-and-play carry. The team is built *around* her — specifically, around the fact that she rewards stacking Electricity cookies, because every shock they deal feeds her Aura and Punishment and every one of them receives her Supercharge buffs:

- **Electricity damage dealers.** This is the whole point. The more Electricity cookies you run behind her, the more her Aura fills, the more often the Punishment detonates, and the more allies benefit from her team-wide DMG Resist and Max HP buffs. An Electricity-stacked team is where she goes from "a tanky front" to "the reason the comp works." Pull from the [DPS tier list](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked) for the shock cookies your roster can field.
- **A second front or a healer.** She's a Charge frontliner, but she's also your most valuable cookie, so you don't want her as the *only* thing standing between the enemy and your backline. A second durable body from the [tank tier list](/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked) — a Hollyberry or a damage-reduction tank — or a healer keeps her alive long enough to keep the engine running across a long fight.
- **A buffer or debuffer.** Her Electricity damage is multiplicative with a team ATK buff and stacks cleanly with a DEF-shred, and she already brings 35% DMG Resist Bypass herself, so a support from the [support tier list](/blog/cookie-run-kingdom/best-crk-support-cookies-ranked) compounds nicely against tanky enemy front lines without competing for her slot.

She slots into the shells the [Kingdom Arena meta team](/blog/cookie-run-kingdom/kingdom-arena-meta-team) and the [Guild Battle teams guide](/blog/cookie-run-kingdom/guild-battle-teams) lay out — except the version built around her leans into the element. Keep her up front where her Charge kit is designed to work; she's the anchor, not a backliner you tuck away.

## Common Stormbringer build mistakes

In rough order of how often they show up:

1. **Missing the 30% CRIT threshold.** This is the big one, and it's invisible if you don't know to look — your Stormbringer just quietly never Supercharges, the team-wide buffs never fire, and her damage scaling never kicks in. Build CRIT first and verify you clear 30% at battle start. Everything else on her is secondary to this.

2. **Building her as a pure tank.** She stands up front, so people gear her for raw survivability and skip CRIT. That gives you a body that soaks the opening exchange and does nothing else. Her bulk is partly self-funded through Supercharge Max HP and her DMG Resist scaling — spend your slots on the engine, not on redundant bulk.

3. **Running her without Electricity cookies behind her.** Her Aura, Punishment, and Supercharge buffs all key off Electricity damage and Electricity allies. Drop her into a mixed-element team and you've left most of her kit on the table. She's an archetype anchor; give her the archetype.

4. **Going ATK-first before CRIT clears the threshold.** Raw ATK looks like more damage, but if your CRIT doesn't hit 30% the engine never starts and the ATK is amplifying a fraction of her output. CRIT first, ATK once the line is handled.

5. **A DMG-Resist-flavored beascuit on an engine cookie.** Same mistake as the toppings, different slot. The beascuit is a CRIT/ATK slot first; survivability is the rider, not the headline.

6. **Taking flat ATK over ATK% on the hybrid build.** The percentage scales with her base ATK; the flat value doesn't. On a Legendary with a high base stat, ATK% is meaningfully better — and it's the stat that powers the Punishment, too.

## Quick Action Checklist

- The one rule above all others: build her CRIT% high enough to exceed 30% at the start of battle, or Supercharge never fires and the kit does almost nothing
- Equip 5x Juicy Apple Jelly (CRIT%) as the safe default; graduate to 3x Apple Jelly + 2x Searing Raspberry only once your CRIT clears 30% on substats alone
- Prioritize CRIT% substats until you're safely over the threshold, then ATK% for the hits, then cooldown to keep the 13-second Punishment loop cycling — and don't reroll forever
- Take ATK% over flat ATK every time on the hybrid build
- Run a CRIT/ATK beascuit (CRIT% > ATK% > Cooldown / DMG Resist), not a survivability one
- Pair a CRIT tart while you still need help clearing the threshold; switch to an ATK tart once Supercharge is reliable
- Lead with damage-amp and battle-start cooldown treasures
- Equip and level Magic Candy; push it higher if she's your Electricity-team anchor — it deepens the Electricity damage and the Punishment
- Keep her up front as the Charge anchor, never tucked in the rear
- Build the team around the element: stack Electricity cookies to feed her Aura, add a second front or healer, and a buffer to compound her 35% DMG Resist Bypass`,

  faq: [
    {
      question: 'What are the best toppings for Stormbringer Cookie?',
      answer:
        "Lead with CRIT%, because Stormbringer only becomes Supercharged — and only hands her team-wide buffs to Electricity allies — when her CRIT% exceeds 30% at the start of battle. The safe default is 5x Juicy Apple Jelly (CRIT%), which clears that threshold without doubt and keeps scaling her damage past it. Once your CRIT substats can carry the 30% line on their own, you can switch to the hybrid the wiki leans toward: 3x Juicy Apple Jelly (CRIT%) + 2x Searing Raspberry (ATK) for bigger hits. Don't build her for pure survivability — her bulk is partly self-funded through her Supercharge Max HP and DMG Resist scaling.",
    },
    {
      question: 'What class and rarity is Stormbringer Cookie?',
      answer:
        "Stormbringer Cookie is a Legendary-rarity, Charge-class cookie whose position is prioritized in the Front of the formation. She's an Electricity-element Guardian of Nature — the Sky God — and a Crystal Jam cookie. She is not an Ancient and not a Beast; she's a Legendary, hard to pull but obtainable without the months-long soulstone grind an Ancient demands. The key thing about her is that she's a Charge frontliner who doubles as the buff engine for the entire Electricity archetype, so she's built around CRIT and damage rather than pure bulk.",
    },
    {
      question: "What does Stormbringer Cookie's skill do?",
      answer:
        "Her skill, Lightning Blitzstorm, runs on a 13-second base cooldown. If her CRIT% exceeds 30% at the start of battle she becomes Supercharged, granting bonus DMG Resist and Max HP to all Electricity-type allies. Her cast, Heaven Splitter, deals heavy Electricity damage with 35% DMG Resist Bypass and inflicts Zap (a stacking damage-over-time that nullifies HP Shields). Whenever any ally deals Electricity damage it feeds Stormbringer's Aura, which at max stacks fires Stormbringer's Punishment — a large hit that Petrifies, scales off Zap stacks, and amplifies Zap into Overcurrent (extra damage-over-time plus a stun chance). While Supercharged, her regular attacks also trigger chain lightning.",
    },
    {
      question: 'Why does Stormbringer need CRIT to work?',
      answer:
        "Because her Supercharge — the buff that hands DMG Resist and Max HP to every Electricity ally and turns on her damage scaling — only activates when her CRIT% exceeds 30% at the start of battle. It's a hard threshold, not a soft bonus. Below 30% CRIT, Supercharge never fires, the team-wide buffs never land, and most of her kit sits idle. On top of that, her final skill hit and her chain lightning scale extra damage off her CRIT%, so CRIT pays her twice. Build CRIT first, clear 30% with margin, then push past it.",
    },
    {
      question: 'What team should I run with Stormbringer Cookie?',
      answer:
        "Build the team around the Electricity element, because that's what her kit feeds on. Stack Electricity damage dealers behind her — every shock they deal fills her Aura and triggers her Punishment, and they all receive her Supercharge DMG Resist and Max HP buffs. Add a second durable front or a healer so your most valuable cookie isn't the only wall, and a buffer or debuffer to compound her 35% DMG Resist Bypass against tanky enemies. Keep her up front as the Charge anchor; she's the keystone the comp is built around, not a backliner.",
    },
    {
      question: 'Does Stormbringer Cookie need Magic Candy?',
      answer:
        "If she's the anchor of your serious Arena or Beast-Yeast Electricity team, yes. Her Magic Candy deepens her Electricity damage, the Zap-to-Overcurrent conversion, and the Punishment mechanic, and because her value builds across a whole fight rather than landing in one burst, every level compounds. Get it equipped and leveled to a functional baseline first, then push it higher as she becomes a cookie you build a team around. As a buff-engine Legendary you actually rely on, she generally earns a spot near the front of your Magic Candy priority order.",
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/crk-toppings-guide', anchor: 'toppings guide' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide', anchor: 'treasures guide' },
    { href: '/blog/cookie-run-kingdom/crk-magic-candy-priority-guide', anchor: 'Magic Candy priority guide' },
    { href: '/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked', anchor: 'DPS tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked', anchor: 'tank tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-support-cookies-ranked', anchor: 'support tier list' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team' },
    { href: '/blog/cookie-run-kingdom/guild-battle-teams', anchor: 'Guild Battle teams guide' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Stormbringer_Cookie', title: 'Cookie Run: Kingdom Wiki — Stormbringer Cookie' },
    { url: 'https://www.pocketgamer.com/cookie-run-kingdom/', title: 'Pocket Gamer — Cookie Run: Kingdom guides' },
    { url: 'https://www.thegamer.com/cookie-run-kingdom-best-toppings/', title: 'TheGamer — Cookie Run: Kingdom toppings guides' },
  ],

  tldr:
    "Stormbringer Cookie is a Legendary Charge frontliner who anchors the entire Electricity archetype — she Supercharges only when her CRIT% exceeds 30% at the start of battle, which hands DMG Resist and Max HP to all Electricity allies and turns on her own CRIT-scaling damage. Her Lightning Blitzstorm (13-second cooldown) inflicts Zap with 35% DMG Resist Bypass, and every shock your team deals feeds her Aura toward Stormbringer's Punishment, a Petrifying, Zap-scaling nuke. Build CRIT first: 5x Juicy Apple Jelly (CRIT%) is the safe default, with a 3x Apple Jelly + 2x Searing Raspberry (ATK) hybrid once your substats clear 30% on their own. Prioritize CRIT% > ATK% > Cooldown substats, run a CRIT/ATK beascuit and tart, level her Magic Candy, keep her up front, and stack Electricity cookies behind her.",
};
