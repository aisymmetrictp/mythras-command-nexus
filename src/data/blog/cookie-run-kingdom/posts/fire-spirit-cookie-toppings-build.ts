import type { BlogPost } from '../../blogTypes';

export const fireSpiritCookieToppingsBuild: BlogPost = {
  slug: 'fire-spirit-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'fire-spirit-build',

  title: 'Fire Spirit Cookie Toppings Build & Guide',
  metaDescription:
    'Fire Spirit Cookie build for July 2026: Flaming toppings, substats, the 4-Fire-Cookie damage cliff, beascuit and tart picks, and the teams that pay him off.',
  excerpt:
    "Fire Spirit Cookie is the rare Legendary whose team sheet matters more than his topping sheet. Every number in his kit gets multiplied by how many Fire-type Cookies are standing next to him, and the jump from three to four isn't a nudge — it's a x1.10 multiplier turning into x2.75. Build him perfectly on a team with two Fire allies and you've still built him wrong. Here's the July 2026 sheet: toppings, substats, beascuit, tart, and the roster math that decides everything.",
  featuredImagePrompt:
    'Fire Spirit Cookie mid-flight above a scorched trail, black staff raised with the glowing Red Dragon Bead, a charging fire orb spiraling ahead of him and a wall of flame arcing behind, molten orange and ember-red palette against dark volcanic sky, Cookie Run: Kingdom key-art style, painterly cel-shaded, dramatic backlighting',
  heroImage: '/images/cookies/fire-spirit-cookie.png',
  heroImageAlt: 'Fire Spirit Cookie, the Legendary Magic-type rear-line Fire nuker this July 2026 toppings build guide covers.',
  imageSources: [
    { src: '/images/cookies/fire-spirit-cookie.png', sourceUrl: 'owned-asset' },
    { src: '/images/gear/toppings/raspberry.png', sourceUrl: 'owned-asset' },
    { src: '/images/gear/toppings/chocolate.png', sourceUrl: 'owned-asset' },
    { src: '/images/cookies/agar-agar-cookie.png', sourceUrl: 'owned-asset' },
  ],

  publishDate: '2026-07-22T00:00:00.000Z',
  lastUpdated: '2026-07-22T00:00:00.000Z',

  primaryKeyword: 'fire spirit cookie toppings',
  secondaryKeywords: [
    'fire spirit cookie build',
    'best toppings fire spirit',
    'fire spirit flaming toppings',
    'fire spirit beascuit',
    'crk fire spirit guide',
    'fire spirit cookie team',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 11,

  toc: [
    { id: 'who-fire-spirit-cookie-actually-is', label: 'Who Fire Spirit Cookie actually is', level: 2 },
    { id: 'the-4-fire-cliff-that-decides-his-whole-build', label: 'The 4-Fire cliff that decides his whole build', level: 2 },
    { id: 'the-standard-fire-spirit-topping-build', label: 'The standard Fire Spirit topping build', level: 2 },
    { id: 'why-flaming-resonant-toppings-matter-here', label: 'Why Flaming resonant toppings matter here', level: 2 },
    { id: 'substat-priorities-honestly', label: 'Substat priorities, honestly', level: 2 },
    { id: 'the-cooldown-leaning-alternate', label: 'The cooldown-leaning alternate', level: 2 },
    { id: 'beascuit-and-tart-picks', label: 'Beascuit and tart picks', level: 2 },
    { id: 'does-fire-spirit-need-magic-candy', label: 'Does Fire Spirit need Magic Candy?', level: 2 },
    { id: 'team-comps-built-around-him', label: 'Team comps built around him', level: 2 },
    { id: 'common-fire-spirit-build-mistakes', label: 'Common Fire Spirit build mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Most build guides start with toppings because toppings are the thing you control. Fire Spirit Cookie breaks that habit, and he breaks it hard. His entire damage profile is gated behind a team-composition multiplier, and the step from **three Fire-type Cookies to four** takes his skill from a **x1.10 multiplier to x2.75**. That is not a rounding difference. That is the same cookie, the same toppings, the same level, doing roughly two and a half times the damage because you swapped one ally.

So yes, this is a topping guide, and the topping answer is clean. But if you read only one section, read the one about the roster — you can gear him flawlessly and still be running a mid Legendary if your team sheet is wrong.

## Who Fire Spirit Cookie actually is

![Fire Spirit Cookie, the Legendary rear-line Magic-type Fire nuker this build guide is for.](/images/cookies/fire-spirit-cookie.png)

Nail the identity before you spend a topping piece. Fire Spirit Cookie is a **Legendary**, his type is **Magic**, his position is prioritized in the **Rear**, and his element is **Fire** — a single element, which is unusual and matters more here than usual. He released in the v6.3 update on **April 9, 2025**, alongside Agar Agar Cookie, and he is one of the Guardians of Nature, the elemental Cookies overseeing the flow of Life Energy across Earthbread.

His skill, **Ever-Burning Flames**, runs on a **14-second base cooldown** and has more moving parts than most Legendaries:

- **Flame Explosion.** He flies at the enemy line — intangible while he flies — scorching a path for periodic damage, then detonates. The explosion inflicts **Explosive Burn**, which ticks Fire damage and raises the target's Fire-type damage taken by **45%**, stacking up to x2.
- **Fire Orb.** He then charges and launches an orb at the nearest enemy for area damage, which chains to nearby targets and keeps chaining until it runs out of targets (capped at five chain hits). It also applies a **Weakness** debuff worth **+30% for 20 seconds** — worth noting because the in-game text mislabels it as a "DMG Buff."
- **Wall of Fire.** At the start of battle he hands the whole team five HP Shield stacks scaling off Fire ally count, which together grant a flat **40% DMG Resist** on entry. Your Legendary nuker is also your opening-seconds defensive cooldown.
- **Unquenchable Flames.** If he dies, he **revives once at 70% HP with his cooldown reset and two seconds of invulnerability**. When allies fall, he summons **Flame Hydras** — up to five, each surviving 25 hits, shooting at the two lowest-HP targets and applying Burn.

Every damage number in that list carries **40% DMG Resist Bypass**, and he is flatly immune to Burn and Explosive Burn himself. Read that whole package together and he is not a glass rear-line nuke. He is a nuke that shields the team, punches through DEF stacking, and refuses to stay dead.

## The 4-Fire cliff that decides his whole build

Here is the number that should reorganize your roster. All of Fire Spirit's skill damage is amplified by how many Fire-type Cookies are on his team:

- 1 Fire Cookie — **x1.05**
- 2 Fire Cookies — **x1.07**
- 3 Fire Cookies — **x1.10**
- 4 Fire Cookies — **x2.75**
- 5 Fire Cookies — **x3.00**
- 6 Fire Cookies — **x3.50**

Look at the shape of that curve. Going from one Fire ally to three buys you about **five percent**. Going from three to four buys you **two and a half times**. Devsisters built a cliff, not a ramp, and everything below the cliff is decoration. At max level his Flame Explosion reads roughly **1,099% of ATK with three Fire Cookies and about 2,748% with four**. Same build, same investment, one roster slot.

The Wall of Fire shield scales the same way — around **7.7% of Max HP per stack at three Fire Cookies versus 19.25% at four** — so crossing the cliff makes him a dramatically better team protector too, not just a bigger nuke.

The practical takeaway: **do not equip Fire Spirit until you can field four Fire-type Cookies.** Per the wiki, the Cookies that count as Fire sources include Agar Agar, Burning Spice, Capsaicin, Chili Pepper, Fire Spirit himself, Mala Sauce, Nutmeg Tiger, Olive, Pitaya Dragon, Rye, Street Urchin, Tarte Tatin, and Cream Unicorn through her Magic Candy. He counts toward his own total, so you only need three Fire allies to hit four. That is a very achievable ask for most mid-game accounts, and it is worth restructuring a team around.

## The standard Fire Spirit topping build

![Searing Raspberry topping icon, the ATK core of the standard Fire Spirit build.](/images/gear/toppings/raspberry.png)

**A Searing Raspberry / Swift Chocolate split, leaning heavily Raspberry** — and specifically the **Flaming** resonant versions of those toppings, which are the flavors the wiki lists on his page.

The standard:

- **Toppings:** Flaming Searing Raspberry (ATK) with Flaming Swift Chocolate (cooldown) mixed in; a full five-piece Raspberry set gives **+10% ATK**, while a Chocolate-heavy set caps at **-5% cooldown** on five pieces
- **Beascuit:** ATK priority, ideally Fire-aligned
- **Tart:** ATK tart for the standard build
- **Team requirement:** four or more Fire-type Cookies, non-negotiable

The logic is straightforward once you have seen the cliff. Every one of his damage components — Flame Explosion, Fire Orb, Chain Explosion, Flame Hydras — is a percentage of ATK, then multiplied by the Fire count. ATK is the stat those multipliers eat, so ATK is the stat you feed. No CRIT trick to chase, no DEF interaction to exploit.

Cooldown earns its place because his **14-second** rotation carries the opening team shield and a 20-second Weakness debuff, so a tighter cycle means more overlap with your other carries' damage. If you are still learning how set bonuses and substat rolls interact, the [toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide) covers the fundamentals this build assumes.

## Why Flaming resonant toppings matter here

![Agar Agar Cookie, the other Cookie who can equip the Flaming resonant topping set.](/images/cookies/agar-agar-cookie.png)

Resonant toppings are single-rarity variants with better odds of rolling useful bonus effects when you upgrade them, and the trade is that only specific Cookies can equip them. The **Flaming** set is restricted to **Fire Spirit Cookie and Agar Agar Cookie** — the two Cookies released together in that patch.

That restriction is a gift, not a tax. The pool of eligible Cookies is tiny, so any Flaming topping you pull has exactly two homes — no agonizing over whether someone else deserves it more. And since Fire Spirit's damage is a raw ATK multiplication problem, better bonus-effect odds translate directly into output instead of some situational stat.

Regular Searing Raspberry M toppings still work fine. But if you are choosing where to spend limited resonant material, a Legendary whose entire kit scales off one stat is close to the ideal recipient.

## Substat priorities, honestly

The wiki lists his recommended stats as **DMG Resist Bypass, ATK, Cooldown, and DMG Resist**. I am not going to invent a precise roll target you can never verify — here is the ordering and the reasoning:

1. **ATK%** — the priority, full stop. Every damage line in his kit is a percentage of ATK before the Fire multiplier is applied, which means ATK gets multiplied twice over on a four-Fire team. Take ATK% over flat ATK every single time; the percentage scales off his base stat, the flat number does not.
2. **DMG Resist Bypass** — listed first on the wiki for a reason. His skill already bypasses 40%, and stacking more compounds against exactly the DEF-piled Arena defenses and tanky bosses that would otherwise eat a rear-line nuke.
3. **Cooldown** — his 14-second rotation carries the team shield, the Weakness debuff, and the Explosive Burn amplification. Faster cycles mean more overlap with your other carries. Strong but genuinely third.
4. **DMG Resist** — the survivability backstop. He sits in the Rear and revives once on his own, so he does not need much, but he is not immortal either.

The practical rule: **roll for ATK, take DMG Resist Bypass where it shows up, keep cooldown healthy, and stop rerolling.** Substats hit diminishing returns fast. The thing that actually doubles his damage is on the team screen, not the topping screen.

## The cooldown-leaning alternate

There is a legitimate second lane: **more Flaming Swift Chocolate, less Raspberry**, for players who want Ever-Burning Flames cycling as fast as possible.

![Swift Chocolate topping icon, the cooldown half of the Fire Spirit build.](/images/gear/toppings/chocolate.png)

The case is real. His skill is not just damage — it applies Explosive Burn (raising Fire damage taken by 45%, stacking twice), a 30% Weakness debuff for 20 seconds, and a team-wide shield. On a mono-Fire team where three other Fire Cookies are all cashing in that amplification, casting more often can beat casting bigger.

But it is the situational pick. A five-piece Chocolate set caps at **-5% cooldown** while a five-piece Raspberry set gives **+10% ATK**, and on a cookie whose damage is multiplied x2.75 or higher, ATK is the number that compounds. Gear him ATK-leaning unless you specifically need the tempo — and if you commit, commit, because half-mixing gives you neither set bonus.

## Beascuit and tart picks

The beascuit follows the toppings: **ATK priority**, and lean into **Fire** where the option exists, since Fire is the only element he deals and the only element his multiplier cares about. Stat priority on the beascuit mirrors his substats — **ATK% > DMG Resist Bypass > Cooldown > DMG Resist**. A defensive beascuit on him looks like insurance and is actually a damage cut on a Cookie who already revives himself and hands out a 40% DMG Resist shield at battle start. The [beascuit tier list](/blog/cookie-run-kingdom/beascuit-tier-list) covers which ones are actually worth the investment right now.

For tarts, take the **ATK tart** with the standard build so it stacks with the Raspberry set, and the cooldown tart only if you have deliberately committed to the tempo lane. Do not mix.

Treasures follow the same through-line: anything amplifying damage or shortening his cooldown so the Wall of Fire and Explosive Burn windows land sooner. **Torch** deserves a specific mention — it deals Fire-type damage and makes targets take **15% to 75% more Fire damage**, which stacks with his own Explosive Burn amp on a team where everything is Fire. The [treasures guide](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide) has the current best-in-slot ordering.

## Does Fire Spirit need Magic Candy?

He cannot have one. **Fire Spirit Cookie does not have a Magic Candy** as of this writing — Magic Candies exist for a specific and slowly expanding subset of Cookies, and he is not on the list. Neither is Agar Agar.

That is genuinely useful budgeting information. Your Soul Essence and Sugar Crystals go elsewhere, which makes Fire Spirit comparatively cheap to bring to his ceiling: level him, gear him, feed him a Fire team, done — versus a Magic Candy Legendary that keeps demanding Resonant Ingredients forever. The [Magic Candy priority guide](/blog/cookie-run-kingdom/crk-magic-candy-priority-guide) covers where that budget should go instead. Fire Spirit simply is not competing for it, which quietly makes him one of the better value Legendaries to invest in.

## Team comps built around him

This is the section that matters. Fire Spirit does not slot into a team — you build the team for him.

- **Four Fire Cookies minimum, and count him.** Three Fire allies plus Fire Spirit clears the cliff. Realistic partners include [Pitaya Dragon](/blog/cookie-run-kingdom/pitaya-dragon-cookie-toppings-build) as your Fire front-liner, [Burning Spice](/blog/cookie-run-kingdom/burning-spice-cookie-toppings-build) as a second heavy Fire hitter, and [Capsaicin](/blog/cookie-run-kingdom/capsaicin-cookie-toppings-build), whose Magma debuff stacks to make targets take up to 60% more Fire damage.
- **Amplifiers over generalists.** Because the whole team is Fire, Fire-specific amplification multiplies everyone at once. Nutmeg Tiger's The Great General buff raises Fire damage for Fire-type Cookies, and Capsaicin's Magma raises Fire damage taken. Layer those with Fire Spirit's own Explosive Burn and the numbers get silly.
- **A real front line.** He is rear-positioned and Magic-typed, and his Wall of Fire shield covers the opening but expires. You still want an anchor from the [tank tier list](/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked) so the mono-Fire core survives long enough to reach the second rotation.
- **Sustain flexes by mode.** His self-revive at 70% HP with a cooldown reset covers a lot of PvE emergencies. In longer fights you still want a healer; in fast Arena exchanges you can often skip one for another damage body.

He is a strong argument for keeping a dedicated mono-Fire team on your roster instead of forcing him into a generalist shell — and if you are weighing him against the rest of the pool, the [Legendary rankings](/blog/cookie-run-kingdom/best-legendary-cookies-crk-ranked) and the [PvE team guide](/blog/cookie-run-kingdom/best-crk-pve-teams) cover where a mono-element core earns its slot.

## Common Fire Spirit build mistakes

1. **Running him on a team with fewer than four Fire Cookies.** The single biggest mistake, by a mile. At three Fire Cookies you are getting a x1.10 multiplier; at four you are getting x2.75. Perfect toppings on a two-Fire team lose to mediocre toppings on a four-Fire team. Fix the roster first.
2. **Building him defensively because he dies to focus fire.** He revives at 70% HP with a cooldown reset and hands the team a 40% DMG Resist shield at battle start. He does not need your topping slots for survival. He needs ATK.
3. **Skipping DMG Resist Bypass.** It is the first stat the wiki lists for him. His kit already carries 40% bypass on every hit; more of it is what lets a rear-line nuke actually hurt DEF-stacked Arena defenses.
4. **Mixing Raspberry and Chocolate evenly.** Set bonuses need real counts. Half-and-half gives you weak versions of both instead of a strong version of one. Lean.
5. **Hoarding Flaming toppings for someone else.** Only Fire Spirit and Agar Agar can equip them. There is no better home waiting.
6. **Waiting on his Magic Candy.** He does not have one. Gear him now and spend your Soul Essence on a Cookie who can actually use it.

## Quick Action Checklist

- Field four or more Fire-type Cookies before you deploy him — he counts toward the total, so three Fire allies is enough
- Equip an ATK-leaning Flaming Searing Raspberry set, with Flaming Swift Chocolate mixed in for cooldown
- Prioritize ATK% substats, then DMG Resist Bypass, then Cooldown, then DMG Resist
- Take ATK% over flat ATK every time
- Give him Flaming resonant toppings when you have them — only he and Agar Agar can use them
- Run an ATK-priority, Fire-aligned beascuit; never a pure defensive one
- Pair an ATK tart with the standard build; cooldown tart only for the deliberate tempo lane
- Slot Torch as a treasure to stack Fire vulnerability on top of Explosive Burn
- Do not budget Soul Essence for a Magic Candy — he does not have one
- Add a real tank so the mono-Fire core survives to the second rotation
- Layer Fire-specific amplifiers like Capsaicin and Nutmeg Tiger to multiply the whole team at once`,

  faq: [
    {
      question: 'What are the best toppings for Fire Spirit Cookie?',
      answer:
        "An ATK-leaning Searing Raspberry build with Swift Chocolate mixed in for cooldown, using the Flaming resonant versions where possible — those are the flavors listed on his wiki page. Every damage component in his kit is a percentage of ATK before his Fire-count multiplier is applied, so ATK compounds harder on him than on almost anyone. A five-piece Searing Raspberry set gives +10% ATK, while five Swift Chocolate caps at -5% cooldown. Prioritize ATK% substats, then DMG Resist Bypass, then Cooldown, then DMG Resist.",
    },
    {
      question: 'Why does Fire Spirit Cookie need four Fire Cookies on the team?',
      answer:
        "Because his damage multiplier has a cliff, not a ramp. With one, two, or three Fire-type Cookies on the team he gets x1.05, x1.07, and x1.10 multipliers respectively — essentially nothing. At four Fire Cookies it jumps to x2.75, then x3.00 at five and x3.50 at six. His Wall of Fire shield scales the same way, going from roughly 7.7% of Max HP per stack at three Fire Cookies to 19.25% at four. He counts toward his own total, so you only need three Fire allies alongside him to clear the cliff.",
    },
    {
      question: 'What class and rarity is Fire Spirit Cookie?',
      answer:
        "Fire Spirit Cookie is a Legendary Cookie of the Magic type, with his position prioritized in the Rear and Fire as his only element. He released in the v6.3 update on April 9, 2025, alongside Agar Agar Cookie, and he is one of the Guardians of Nature — the elemental Cookies overseeing the flow of Life Energy across Earthbread. Despite being a rear-line nuker, his kit also shields the team at battle start and revives him once if he falls.",
    },
    {
      question: 'Does Fire Spirit Cookie have a Magic Candy?',
      answer:
        "No. Fire Spirit Cookie does not have a Magic Candy — Magic Candies only exist for a specific subset of Cookies, and neither he nor Agar Agar is on that list. That is actually good news for your resource budget: he reaches his ceiling on levels, toppings, and a correct Fire team alone, without an ongoing Soul Essence, Sugar Crystal, and Resonant Ingredient commitment. It makes him one of the better value Legendary investments in the game right now.",
    },
    {
      question: 'What does Fire Spirit Cookie skill do?',
      answer:
        "Ever-Burning Flames is a 14-second cooldown skill with several phases. He flies at the enemy line dealing periodic damage while intangible, then triggers Flame Explosion, which inflicts Explosive Burn — Fire damage over time that also raises the target's Fire damage taken by 45% and stacks twice. He then launches a Fire Orb for area damage that chain-explodes to nearby targets and applies a 30% Weakness debuff for 20 seconds. At battle start he grants the team five Wall of Fire HP Shield stacks worth 40% DMG Resist, and if he is defeated he revives once at 70% HP with his cooldown reset, summoning Flame Hydras when allies fall. Every damage instance carries 40% DMG Resist Bypass.",
    },
    {
      question: 'What are the Flaming toppings and who can use them?',
      answer:
        "Flaming toppings are a Resonant Topping set, meaning single-rarity variants with better odds of rolling useful bonus effects on upgrade, restricted to specific Cookies. The Flaming set can only be equipped by Fire Spirit Cookie and Agar Agar Cookie, the two Cookies released together in that patch. Because the eligible pool is that small, there is no reason to hoard them — give them to Fire Spirit, whose damage is a pure ATK multiplication problem and therefore converts better bonus rolls directly into output.",
    },
    {
      question: 'Which Cookies count as Fire-type for Fire Spirit multiplier?',
      answer:
        "Per the Cookie Run: Kingdom wiki, the Cookies that count as Fire-type sources include Agar Agar, Burning Spice, Capsaicin, Chili Pepper, Fire Spirit himself, Mala Sauce, Nutmeg Tiger, Olive, Pitaya Dragon, Rye, Street Urchin, Tarte Tatin, and Cream Unicorn via her Magic Candy. Fire is currently tied as the second most common element with 13 Cookies, so building a four-Fire team is realistic for most mid-game accounts. Pitaya Dragon works well as the Fire front-liner, with Burning Spice and Capsaicin filling out the damage.",
    },
    {
      question: 'Should I build Fire Spirit Cookie for attack or survivability?',
      answer:
        "Attack, clearly. His kit already covers survival on its own: Wall of Fire gives the whole team a 40% DMG Resist shield at the start of battle, he revives once at 70% HP with a full cooldown reset and two seconds of invulnerability, and he is flatly immune to Burn and Explosive Burn. Spending topping slots on defense buys you something he already has while starving the one stat that gets multiplied by his Fire count. Keep DMG Resist as a fourth-priority substat and let the rest ride on ATK and DMG Resist Bypass.",
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/crk-toppings-guide', anchor: 'toppings guide' },
    { href: '/blog/cookie-run-kingdom/beascuit-tier-list', anchor: 'beascuit tier list' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide', anchor: 'treasures guide' },
    { href: '/blog/cookie-run-kingdom/crk-magic-candy-priority-guide', anchor: 'Magic Candy priority guide' },
    { href: '/blog/cookie-run-kingdom/pitaya-dragon-cookie-toppings-build', anchor: 'Pitaya Dragon' },
    { href: '/blog/cookie-run-kingdom/burning-spice-cookie-toppings-build', anchor: 'Burning Spice' },
    { href: '/blog/cookie-run-kingdom/capsaicin-cookie-toppings-build', anchor: 'Capsaicin' },
    { href: '/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked', anchor: 'tank tier list' },
    { href: '/blog/cookie-run-kingdom/best-legendary-cookies-crk-ranked', anchor: 'Legendary rankings' },
    { href: '/blog/cookie-run-kingdom/best-crk-pve-teams', anchor: 'PvE team guide' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Fire_Spirit_Cookie', title: 'Cookie Run: Kingdom Wiki — Fire Spirit Cookie' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Fire', title: 'Cookie Run: Kingdom Wiki — Fire element' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Toppings', title: 'Cookie Run: Kingdom Wiki — Toppings and Resonant Toppings' },
  ],

  tldr:
    "Fire Spirit Cookie is a Legendary Magic-type rear-line Fire nuker whose build is decided by his team, not his toppings: his skill multiplier jumps from x1.10 at three Fire-type Cookies to x2.75 at four. Field four Fire Cookies, run an ATK-leaning Flaming Searing Raspberry set with Swift Chocolate mixed in, prioritizing ATK%, DMG Resist Bypass, Cooldown, then DMG Resist. He has no Magic Candy, so he is cheap to max.",

  itemList: {
    name: 'Fire Spirit Cookie Build Summary',
    items: [
      { name: 'Team requirement — 4+ Fire-type Cookies', description: 'The multiplier cliff: x1.10 at three Fire Cookies versus x2.75 at four. He counts himself, so three Fire allies clears it. Fix this before touching toppings.' },
      { name: 'Toppings — ATK-leaning Flaming Searing Raspberry + Swift Chocolate', description: 'Five Raspberry gives +10% ATK; Chocolate adds cooldown for the 14-second rotation. Use the Flaming resonant versions, restricted to him and Agar Agar.' },
      { name: 'Substats — ATK% > DMG Resist Bypass > Cooldown > DMG Resist', description: 'ATK gets multiplied twice over by the Fire count. DMG Resist Bypass stacks on the 40% his kit already carries.' },
      { name: 'Beascuit — ATK priority, Fire-aligned', description: 'Same ordering as his substats. Never a defensive beascuit on a Cookie who already self-revives and shields the team.' },
      { name: 'Tart — ATK (Searing Raspberry)', description: 'Stacks with the Raspberry set. Cooldown tart only if you commit fully to the tempo-leaning alternate.' },
      { name: 'Treasures — Torch and damage amplifiers', description: 'Torch raises Fire damage taken by 15% to 75%, stacking with his own Explosive Burn amplification on a mono-Fire team.' },
      { name: 'Magic Candy — none exists', description: 'Fire Spirit has no Magic Candy, so he reaches his ceiling without an ongoing Soul Essence commitment. Cheap Legendary to max.' },
    ],
  },
};
