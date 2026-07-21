import type { BlogPost } from '../../blogTypes';

export const pitayaDragonCookieToppingsBuild: BlogPost = {
  slug: 'pitaya-dragon-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'pitaya-dragon-build',

  title: 'Pitaya Dragon Cookie Toppings Build & Guide',
  metaDescription:
    'Pitaya Dragon Cookie build for July 2026: the full-ATK Raspberry topping set that feeds its DMG Resist passive, substats, beascuit, tart, Magic Candy, and teams.',
  excerpt:
    "Pitaya Dragon Cookie has the weirdest scaling in the game: the more attack you pile on, the tankier it gets. That one passive rewrites every build rule you'd normally apply to a front-line DPS, and it's exactly why so many players gear it wrong — stacking defense to keep it alive and starving the stat that actually keeps it alive. Here's the July 2026 build that leans into the loop: toppings, substats, beascuit, tart, Magic Candy, and where it slots.",
  featuredImagePrompt:
    'Pitaya Dragon Cookie mid-transformation into dragon form, twin draconic blades of pink-magenta flame crossing overhead, molten fire breath charging, hot magenta and ember-orange palette against a dark volcanic backdrop, Cookie Run: Kingdom key-art style, painterly cel-shaded, dramatic backlighting',
  heroImage: '/images/cookies/pitaya-dragon-cookie.png',
  heroImageAlt: 'Pitaya Dragon Cookie, the Dragon-rarity Charge-class Fire front-liner this July 2026 toppings build guide is for.',
  imageSources: [
    { src: '/images/cookies/pitaya-dragon-cookie.png', sourceUrl: 'owned-asset' },
    { src: '/images/gear/toppings/raspberry.png', sourceUrl: 'owned-asset' },
    { src: '/images/gear/toppings/almond.png', sourceUrl: 'owned-asset' },
  ],

  publishDate: '2026-07-21T00:00:00.000Z',
  lastUpdated: '2026-07-21T00:00:00.000Z',

  primaryKeyword: 'pitaya dragon cookie toppings',
  secondaryKeywords: [
    'pitaya dragon cookie build',
    'best toppings pitaya dragon',
    'pitaya dragon beascuit',
    'pitaya dragon magic candy',
    'crk pitaya dragon guide',
    'pitaya dragon cookie team',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 10,

  toc: [
    { id: 'who-pitaya-dragon-actually-is', label: 'Who Pitaya Dragon actually is', level: 2 },
    { id: 'the-passive-that-rewrites-the-build', label: 'The passive that rewrites the build', level: 2 },
    { id: 'the-standard-pitaya-dragon-topping-build', label: 'The standard Pitaya Dragon topping build', level: 2 },
    { id: 'substat-priorities-without-the-fake-numbers', label: 'Substat priorities without the fake numbers', level: 2 },
    { id: 'the-tankier-almond-alternate', label: 'The tankier Almond alternate', level: 2 },
    { id: 'beascuit-pick-burning-chewy-first', label: 'Beascuit pick — Burning Chewy first', level: 2 },
    { id: 'tart-and-treasure-picks', label: 'Tart and treasure picks', level: 2 },
    { id: 'magic-candy-for-pitaya-dragon', label: 'Magic Candy for Pitaya Dragon', level: 2 },
    { id: 'team-comps-and-where-it-fits', label: 'Team comps and where it fits', level: 2 },
    { id: 'common-pitaya-dragon-build-mistakes', label: 'Common Pitaya Dragon build mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Most front-line DPS cookies force a trade-off: pile on attack and you win the damage race but fold the moment the enemy looks at you, or pad the health bar and watch your damage go limp. Pitaya Dragon Cookie doesn't play that game. It has a passive that converts its own boosted attack into damage resistance — so the harder you build for damage, the tankier it becomes. That single line of kit is the whole reason this build exists, and it's the exact reason so many players ruin it. They see a front-line cookie taking hits, panic, and start bolting defensive toppings onto it — which starves the ATK stat that was keeping it alive in the first place.

This is the July 2026 build sheet for Pitaya Dragon: toppings, substats, beascuit, tart, Magic Candy, team fit, and the specific mistakes that turn a self-sustaining brawler into a soggy front-liner. Where the community has invented exact substat roll-targets, I'll give you the direction instead of a fake number — because the direction is what actually moves a build, and the fake number just gets copy-pasted forever.

## Who Pitaya Dragon actually is

![Pitaya Dragon Cookie mid-transformation into dragon form, the Dragon-rarity Charge cookie this build is for.](/images/cookies/pitaya-dragon-cookie.png)

Get the identity straight before you spend a topping. Pitaya Dragon Cookie is **Dragon rarity** — one of the game's original marquee cookies, since reclassified into the top Dragon tier alongside the likes of [Black Sapphire](/blog/cookie-run-kingdom/black-sapphire-cookie-toppings-build). Its class is **Charge**, it sits on the **Front** line, and its element is **Fire**. It is a damage-dealer that lives up front and stays there, which is unusual and is the source of every build headache people have with it.

Its skill, **Draconic Bladestorm**, comes in two beats. First it fires off waves of draconic blade energy that deal damage and slap **Healing Down** on what they hit — a debuff that cuts how much healing the enemy receives, which is quietly enormous in drawn-out PvP and boss fights. Then Pitaya Dragon assumes dragon form and unleashes a **flaming breath** that deals damage **ignoring the target's DMG Resist** and applies **ATK Down**, softening the enemy's own offense. Every cast also banks a stack of **Pitaya Fury**; once those stacks max out, the next skill is **enhanced** — the flaming breath ignores DMG Resist and additionally drops the target's resistance to Fire-type damage, so the follow-up hits land even harder.

Read it together and Pitaya Dragon is a sustained-damage front-liner that shreds healing, punches through defense, and gets stronger the longer a fight runs. It's not a burst assassin and it's not a wall — it's a grinder that wants to be on the field for the long exchange. And the thing that lets it survive that long exchange is a passive most people underrate.

## The passive that rewrites the build

Here's the mechanic that flips the normal rulebook: Pitaya Dragon **converts its boosted ATK into DMG Resist**, up to roughly **35%**. When your toppings, buffs, and beascuit push its attack up, a chunk of that gain gets mirrored into damage reduction automatically. So on this cookie, ATK is a defensive stat as well as an offensive one. You are not choosing between "hit hard" and "stay alive" — the same stat buys both.

That's why the entire build points one direction: **stack ATK, and the tankiness comes for free.** Bolt on defensive toppings to make it survive and you get the worst of both worlds — you cap the ATK that fuels the damage *and* the ATK that fuels the resistance passive, so it hits softer and, past a point, actually gets squishier than a clean full-ATK set would have made it. This is the single most common way people misbuild Pitaya Dragon, and it comes from good instincts applied to a cookie whose kit inverts them.

If you're fuzzy on how topping sets and substats feed a stat like this, the [toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide) covers the fundamentals this whole build leans on.

## The standard Pitaya Dragon topping build

![Searing Raspberry topping icon, the ATK topping the standard full-set Pitaya Dragon build is built on.](/images/gear/toppings/raspberry.png)

**A full set of five ATK toppings — Searing Raspberry, or its upgraded Draconic Raspberry version.** That's it. That's the build. No clever split, no hybrid — five Raspberries, because on Pitaya Dragon a point of ATK is simultaneously a point of damage and a point of survivability through the passive.

The standard:

- **Toppings:** 5x Searing Raspberry (ATK). Use Draconic Raspberry if you have them — they're the upgraded flavor and squeeze more out of the same slot — but five Searing Raspberry M pieces get you the same shape and are perfectly fine if you're not swimming in Draconic mats.
- **Beascuit:** an ATK-priority beascuit — the Burning Chewy line is the target (more below).
- **Tart:** an ATK tart to keep pushing the same stat.
- **Magic Candy:** equipped and leveled.

The reason a full ATK set beats any mix here is the passive doing double duty. A player used to bruiser cookies will want to sneak in a couple of defensive pieces "for safety," but on Pitaya Dragon that safety is already baked into the Raspberries — every one of them is quietly adding DMG Resist on top of the attack. Give it the cleanest ATK set you can build and it comes out both harder-hitting and tankier than the "balanced" version. That's the whole trick, and it's why Pitaya Dragon punches above its age as a [top-tier DPS pick](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked).

## Substat priorities without the fake numbers

Substats are where most of a build's real quality lives, and also where CRK guides most love to invent precise percentages nobody can verify. No fake "you need exactly 42.7% ATK" targets here. The honest order, matched to how the passive works:

1. **ATK%** — the priority by a mile, because it's the stat that pays twice on this cookie. It fuels Draconic Bladestorm's damage *and* feeds the DMG Resist conversion. Always take ATK% over flat ATK — the percentage scales off the base stat, the flat number doesn't.
2. **DMG Resist** — the strong secondary, and it stacks *on top of* what the passive already gives you. A front-liner grinding through long fights wants a real resistance floor, and adding DMG Resist substats onto the passive's conversion makes Pitaya Dragon genuinely hard to kill.
3. **Cooldown** — the tempo stat. Faster Draconic Bladestorm means faster Pitaya Fury stacking, which means you reach the enhanced flaming breath sooner and cast it more often. On a cookie whose payoff snowballs with skill uptime, that matters, but it sits behind the two stats that define its survival-through-offense identity.

The practical rule: **roll for ATK first, back it with DMG Resist, take Cooldown where it lands, and stop chasing the perfect set.** Substats have diminishing returns past a healthy spread — get it to "hits hard and won't die" and go build your next cookie instead of rerolling into the void.

## The tankier Almond alternate

![Solid Almond topping icon, the DMG Resist option for the tankier Pitaya Dragon variant.](/images/gear/toppings/almond.png)

There's one legitimate alternate, and it's a deliberate trade rather than a trap: a full set of **Solid Almond (DMG Resist)** toppings, or a mostly-Almond spread. This is for when you specifically want Pitaya Dragon to be a near-immovable front wall — say, holding the line in a defensive Arena setup or eating a boss's biggest hits while your carries work — and you're happy to give up damage for it.

Be honest about what it costs, though. Because ATK feeds the resist passive, an Almond set doesn't make Pitaya Dragon *dramatically* tankier than a clean Raspberry set — it just trades away the damage half of the equation while the resist half was partly covered by ATK anyway. For the overwhelming majority of content, the full Raspberry build is the correct one; the Almond set is a niche pick for a specific defensive job. If you only gear Pitaya Dragon one way, gear it ATK. Don't split the difference and run two-and-three — pick a lane and commit, because a half-Almond, half-Raspberry set gets the downsides of both.

## Beascuit pick — Burning Chewy first

The beascuit slot follows the toppings exactly: **prioritize ATK.** The target is the **Burning Chewy Beascuit** (the Fire-flavored Chewy line), which leans into Pitaya Dragon's element on top of feeding the ATK the whole build wants; a standard **Chewy Beascuit** is the fine fallback if you don't have the Burning version. Both come out of [Beast-Yeast on Hard mode](/blog/cookie-run-kingdom/crk-beast-yeast-guide), so if you're serious about maxing Pitaya Dragon, that's where the farming happens.

Stat priority on the beascuit mirrors the substats: **ATK > DMG Resist > Cooldown**, because the beascuit is just one more slot feeding the same self-sustaining loop. Don't bring a pure-defense or pure-HP beascuit to this cookie — it looks like more survival and is actually a weaker version of the survival it already gets from ATK, and it costs you the damage. If you want to compare the Fire-flavored options against the rest of the pool, the [beascuit tier list](/blog/cookie-run-kingdom/beascuit-tier-list) lays out where each one lands.

## Tart and treasure picks

**ATK tart (Searing Raspberry tart).** The only pick that makes sense for the standard build — it stacks with the Raspberry toppings and the beascuit to push ATK as high as it goes, which on Pitaya Dragon means more damage *and* more passive resist. There's no reason to run anything else on the damage build.

For treasures, the through-line holds: lead with anything that amplifies damage or speeds cooldown so Pitaya Fury stacks and the enhanced flaming breath comes online sooner, plus a survivability or shield treasure so a front-liner has a floor while the passive does its thing. Battle-start cooldown treasures are strong here because they get you to that first enhanced cast faster in short fights. The [treasures guide](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide) covers the current best-in-slot options and how they stack together.

## Magic Candy for Pitaya Dragon

Magic Candy is what takes a good Dragon-rarity cookie and makes it a fixture, and Pitaya Dragon is a strong candidate because its value compounds with uptime. Its Magic Candy deepens the skill kit — more out of Draconic Bladestorm and the effects around it — which on a cookie built to grind through long exchanges means every fight it's in, it's contributing more of the healing-cut, DEF-ignoring, ATK-down pressure that makes it useful.

Leveling priority is the usual: get it equipped and to a functional baseline before you call the build done, then push it higher if Pitaya Dragon is a regular in your serious PvE or Arena teams. For where it should sit against everything else demanding your Magic Candy resources, the [Magic Candy priority guide](/blog/cookie-run-kingdom/crk-magic-candy-priority-guide) has the framework — as a long-serving Dragon cookie that stays relevant, it earns investment once it's a core part of your lineup.

## Team comps and where it fits

Pitaya Dragon is a front-line DPS, which means it competes for the front row with your tank and needs teammates that let it grind:

- **Sustain to fuel the long fight.** Pitaya Dragon's kit rewards drawn-out exchanges, so a healer or shielder from the [healer rankings](/blog/cookie-run-kingdom/best-crk-healers-ranked) keeps it on the field long enough for the passive resist and Pitaya Fury stacks to matter. The Healing Down it applies is offense, not a substitute for your own sustain.
- **A real front-line partner or a rear carry.** It survives well thanks to the ATK-into-resist passive, but it's still a DPS, not a dedicated wall. Depending on the mode you can either pair it with an anchor from the [tank tier list](/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked) or let Pitaya Dragon soak up front while a backline damage-dealer cleans up.
- **Debuff payoff.** The ATK Down and Fire-resistance shred it stacks are a force multiplier for the rest of your damage — build the team so someone is cashing in while the enemy is softened.

It slots naturally into the durable, sustain-heavy shells the [best PvE teams guide](/blog/cookie-run-kingdom/best-crk-pve-teams) lays out, and it's a genuinely good body for the endurance fights in the [Dragon's Lair](/blog/cookie-run-kingdom/crk-dragons-lair-guide), where its healing-cut and long-fight scaling both pull weight. Keep it on the front row — that's where its whole kit is designed to operate.

## Common Pitaya Dragon build mistakes

In rough order of how often they show up:

1. **Stacking defensive toppings to keep it alive.** The big one. Pitaya Dragon's survival comes *from ATK* via the resist passive, so defensive toppings both weaken its damage and, past a point, make it tankier on paper while it's actually squishier than a clean ATK set. Build ATK and let the passive do the defending.

2. **Running a hybrid Raspberry/Almond split.** Half-and-half gets the downsides of both — not enough ATK to max the passive and the damage, not enough Almond to be a true wall. Full Raspberry for the standard build; full Almond only if you specifically want it as a defensive brick.

3. **Taking flat ATK over ATK%.** ATK% scales with the base stat and feeds the passive harder. Flat ATK is a trap on the cookie that cares most about the percentage.

4. **A pure-HP or pure-defense beascuit.** Same mistake as #1, different slot. The beascuit is an ATK-and-element slot on this cookie — Burning Chewy first.

5. **Treating it as a burst nuker.** Pitaya Dragon's payoff comes from Pitaya Fury stacking into the enhanced skill over a fight, plus the healing-cut and ATK-down debuffs. Pull it into a burst-comp expecting a one-shot and you're using the wrong tool — it's a grinder.

6. **Benching it because it's an "old" cookie.** The Dragon-tier reclassification and its kit keep it relevant. Don't skip building it just because it isn't the newest release on the banner.

## Quick Action Checklist

- Run a full set of five Searing Raspberry (ATK) toppings — Draconic Raspberry if you have them
- Never bolt defensive toppings onto the damage build — ATK *is* its defense via the passive
- Prioritize ATK% substats, then DMG Resist, then Cooldown, and don't reroll forever
- Take ATK% over flat ATK every time
- The full-Almond (DMG Resist) set is the situational pick for a pure defensive wall — commit or skip it, never split
- Run a Burning Chewy Beascuit (Chewy as fallback), ATK-priority, from Beast-Yeast Hard
- Pair an ATK tart with the standard build
- Lead with damage-amp, battle-start cooldown, and survivability treasures
- Equip and level Magic Candy; push it higher once it's a core fixture
- Keep it on the front row and give it sustain plus a debuff-cashing carry`,

  faq: [
    {
      question: 'What are the best toppings for Pitaya Dragon Cookie?',
      answer:
        "A full set of five ATK toppings — Searing Raspberry, or the upgraded Draconic Raspberry if you have them. Pitaya Dragon Cookie has a passive that converts its boosted ATK into DMG Resist (up to around 35%), so every point of attack is also a point of survivability. That means the cleanest all-ATK set makes it both harder-hitting and tankier than any hybrid, which is why you should never split in defensive toppings. Prioritize ATK% substats, then DMG Resist, then Cooldown.",
    },
    {
      question: 'What class and rarity is Pitaya Dragon Cookie?',
      answer:
        "Pitaya Dragon Cookie is a Dragon-rarity, Charge-class cookie positioned on the Front line, with the Fire element. It's one of the game's original marquee cookies, since reclassified into the top Dragon rarity tier. Despite being a damage-dealer, it lives up front and stays there, which is unusual for a DPS and is the source of most of the confusion around how to build it.",
    },
    {
      question: 'Why does Pitaya Dragon get tankier when you build attack?',
      answer:
        "Because of its passive, which converts a portion of its boosted ATK into DMG Resist, up to roughly 35%. On Pitaya Dragon, attack is a defensive stat as well as an offensive one, so stacking ATK through toppings, beascuit, and tart raises both its damage and its survivability at the same time. This is exactly why bolting on defensive toppings backfires — it starves the ATK that was fueling the resist passive, so the cookie ends up hitting softer and, past a point, actually squishier than a clean all-ATK build.",
    },
    {
      question: "What does Pitaya Dragon Cookie's skill do?",
      answer:
        "Its skill, Draconic Bladestorm, first fires waves of draconic blade energy that deal damage and apply Healing Down (reducing how much healing enemies receive), then transforms Pitaya Dragon into dragon form to unleash a flaming breath that deals damage ignoring the target's DMG Resist and applies ATK Down. Each cast banks a stack of Pitaya Fury; at max stacks the next skill is enhanced, and the enhanced flaming breath ignores DMG Resist and additionally lowers the target's resistance to Fire-type damage.",
    },
    {
      question: 'What is the best beascuit for Pitaya Dragon Cookie?',
      answer:
        "The Burning Chewy Beascuit — the Fire-flavored Chewy line, which leans into Pitaya Dragon's element while feeding the ATK the whole build wants. A standard Chewy Beascuit is the fine fallback if you don't have the Burning version. Both come from Beast-Yeast on Hard mode. Keep the beascuit's stat priority ATK > DMG Resist > Cooldown, and never run a pure-defense or pure-HP beascuit on this cookie.",
    },
    {
      question: 'Is there an alternate tanky build for Pitaya Dragon?',
      answer:
        "Yes — a full set of Solid Almond (DMG Resist) toppings turns Pitaya Dragon into a near-immovable defensive wall for jobs like holding a defensive Arena line or eating a boss's biggest hits. But it's a deliberate trade: because ATK already feeds the resist passive, the Almond set doesn't make it dramatically tankier than the Raspberry build, it mostly just gives up the damage. For the vast majority of content the full ATK build is correct, and you should never run a half-Almond, half-Raspberry hybrid.",
    },
    {
      question: 'What team should I run with Pitaya Dragon Cookie?',
      answer:
        "Pitaya Dragon is a front-line DPS that rewards long fights, so pair it with real sustain — a healer or shielder — to keep it alive while its passive resist and Pitaya Fury stacks build up. Add a front-line tank partner or a rear carry depending on the mode, since it survives well but is still a DPS, not a dedicated wall. Its ATK Down and Fire-resistance shred are force multipliers, so make sure someone is cashing in on the softened enemy. It's especially good in endurance content like the Dragon's Lair.",
    },
    {
      question: 'Is Pitaya Dragon Cookie still worth building in 2026?',
      answer:
        "Yes. The reclassification into the top Dragon rarity tier and its kit keep it relevant well past its original release. Its healing-cut, DEF-ignoring flaming breath, ATK Down, and the ATK-into-resist passive make it a durable, self-sustaining front-line damage-dealer that stays useful in long PvE fights and defensive setups. Don't bench it just because newer cookies are on the banner.",
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
    { href: '/blog/cookie-run-kingdom/best-crk-healers-ranked', anchor: 'healer rankings' },
    { href: '/blog/cookie-run-kingdom/best-crk-pve-teams', anchor: 'best PvE teams' },
    { href: '/blog/cookie-run-kingdom/crk-beast-yeast-guide', anchor: 'Beast-Yeast guide' },
    { href: '/blog/cookie-run-kingdom/beascuit-tier-list', anchor: 'beascuit tier list' },
    { href: '/blog/cookie-run-kingdom/crk-dragons-lair-guide', anchor: 'Dragon\'s Lair' },
    { href: '/blog/cookie-run-kingdom/black-sapphire-cookie-toppings-build', anchor: 'Black Sapphire' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Pitaya_Dragon_Cookie', title: 'Cookie Run: Kingdom Wiki — Pitaya Dragon Cookie' },
    { url: 'https://www.allclash.com/best-pitaya-dragon-cookie-build-in-cookierun-kingdom-toppings-beascuit-tart-stats/', title: 'AllClash — Best Pitaya Dragon Cookie Build' },
    { url: 'https://www.pocketgamer.com/cookie-run-kingdom/pitaya-dragon-cookie-toppings-beascuits/', title: 'Pocket Gamer — Pitaya Dragon Cookie Toppings and Beascuits guide' },
  ],

  tldr:
    "Pitaya Dragon Cookie is a Dragon-rarity, Charge-class Fire cookie on the Front line whose passive converts boosted ATK into DMG Resist (up to ~35%) — so building damage also builds survivability. Run a full set of five ATK toppings (Searing or Draconic Raspberry), never defensive ones, with substats ATK% > DMG Resist > Cooldown. Its Draconic Bladestorm skill cuts enemy healing, ignores DMG Resist, and stacks ATK Down, with Pitaya Fury stacks enhancing the flaming breath. Use a Burning Chewy Beascuit and an ATK tart, level Magic Candy once it's a fixture, and give it sustain in long fights like the Dragon's Lair.",

  itemList: {
    name: 'Pitaya Dragon Cookie Build Summary',
    items: [
      { name: 'Toppings — 5x ATK (Searing / Draconic Raspberry)', description: 'A full ATK set, because the passive turns ATK into DMG Resist. No hybrid, no defensive pieces on the standard build.' },
      { name: 'Substats — ATK% > DMG Resist > Cooldown', description: 'ATK% pays twice (damage plus passive resist), DMG Resist stacks a real floor, Cooldown speeds Pitaya Fury. Take ATK% over flat ATK.' },
      { name: 'Beascuit — Burning Chewy (Chewy fallback)', description: 'ATK-priority, Fire-flavored, from Beast-Yeast Hard. Never a pure-defense or pure-HP beascuit.' },
      { name: 'Tart — ATK (Searing Raspberry)', description: 'Stacks with the Raspberry toppings to push ATK, which is both damage and resistance on this cookie.' },
      { name: 'Alt build — full Solid Almond (DMG Resist)', description: 'A situational defensive-wall variant. Commit fully or skip it — never a half-Almond, half-Raspberry hybrid.' },
      { name: 'Magic Candy — equip and level', description: 'Deepens the skill kit and compounds with uptime. A durable Dragon cookie worth investing once it is a fixture.' },
    ],
  },
};
