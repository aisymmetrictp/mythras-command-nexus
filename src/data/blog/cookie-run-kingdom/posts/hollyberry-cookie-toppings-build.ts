import type { BlogPost } from '../../blogTypes';

export const hollyberryCookieToppingsBuild: BlogPost = {
  slug: 'hollyberry-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'hollyberry-build',

  title: 'Hollyberry Cookie Toppings Build & Guide',
  metaDescription:
    'Hollyberry Cookie build guide for June 2026: the DMG Resist topping spread, substat priorities, beascuit and tart picks, the Awakened form, and team comps.',
  excerpt:
    "Hollyberry is the Ancient tank people gear for raw HP and then wonder why she folds. She's a DMG Resist wall built around a team-wide shield, not a sponge — and that changes the whole topping sheet. Here's the build: toppings, substats, beascuit, Magic Candy, the Awakened (Aegis) form, and where she fits.",
  featuredImagePrompt:
    'Hollyberry Cookie center frame, the founder-queen of the Hollyberry Kingdom planting her enormous shield and letting out a war cry, allies glowing behind her shield wall, warm crimson and gold palette with Steel-blue rim light and drifting berry-red sparks, Cookie Run: Kingdom key-art style, painterly cel-shaded, dramatic backlighting',
  heroImage: '/images/blog/cookie-run-kingdom/hollyberry-cookie-toppings-build/hollyberry-cookie.webp',
  heroImageAlt: 'Hollyberry Cookie, the Ancient-rarity Defense-class front-line tank this June 2026 toppings build guide is for.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/hollyberry-cookie-toppings-build/hollyberry-cookie.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Hollyberry_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/hollyberry-cookie-toppings-build/awakened-hollyberry-cookie.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Hollyberry_Cookie_(Aegis)',
      license: 'Fandom CC-BY-SA',
    },
    { src: '/images/gear/toppings/almond.png', sourceUrl: 'owned-asset' },
    { src: '/images/gear/toppings/chocolate.png', sourceUrl: 'owned-asset' },
  ],

  publishDate: '2026-06-06T00:00:00.000Z',
  lastUpdated: '2026-06-06T00:00:00.000Z',

  primaryKeyword: 'hollyberry cookie toppings',
  secondaryKeywords: [
    'hollyberry cookie build',
    'best toppings hollyberry',
    'hollyberry beascuit',
    'hollyberry magic candy',
    'awakened hollyberry toppings',
    'hollyberry cookie team',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 11,

  toc: [
    { id: 'who-hollyberry-actually-is', label: 'Who Hollyberry actually is', level: 2 },
    { id: 'why-she-is-a-dmg-resist-wall-not-an-hp-sponge', label: 'Why she is a DMG Resist wall, not an HP sponge', level: 2 },
    { id: 'the-standard-hollyberry-topping-build', label: 'The standard Hollyberry topping build', level: 2 },
    { id: 'substat-priorities-without-the-fake-numbers', label: 'Substat priorities without the fake numbers', level: 2 },
    { id: 'the-hybrid-cooldown-leaning-build', label: 'The hybrid cooldown-leaning build', level: 2 },
    { id: 'beascuit-pick-dmg-resist-and-steel', label: 'Beascuit pick — DMG Resist and Steel', level: 2 },
    { id: 'tart-and-treasure-picks', label: 'Tart and treasure picks', level: 2 },
    { id: 'magic-candy-for-hollyberry', label: 'Magic Candy for Hollyberry', level: 2 },
    { id: 'the-awakened-hollyberry-aegis-form', label: 'The Awakened Hollyberry (Aegis) form', level: 2 },
    { id: 'team-comps-and-where-she-fits', label: 'Team comps and where she fits', level: 2 },
    { id: 'common-hollyberry-build-mistakes', label: 'Common Hollyberry build mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Hollyberry is the tank people gear like a punching bag — pile on HP, hope she eats hits, move on. Then she crumbles in serious content and they decide she's outdated. She isn't. The misread is treating her like a sponge that survives by being big. Her actual job is to be a wall the whole team hides behind: she charges out front, takes a slice of the damage your *other* cookies would have eaten, and reduces the crits coming at everyone. That's a mitigation engine, not a health pool, and it means the stat that makes her good is DMG Resist, not raw HP.

This is the June 2026 build sheet for her: toppings, substats, beascuit, tart, Magic Candy, the Awakened (Aegis) form, team fit, and the mistakes that bench one of the longest-tenured Ancients in the game. Where the community has invented precise substat roll-targets, I'll give you the direction instead of a fake number — because the wrong number gets copy-pasted forever, and the direction is what actually moves a build.

## Who Hollyberry actually is

![Hollyberry Cookie planting her shield with a war cry, the Ancient-rarity Defense tank this build is for.](/images/blog/cookie-run-kingdom/hollyberry-cookie-toppings-build/hollyberry-cookie.webp)

Get the identity right before you spend a single topping. Hollyberry Cookie is **Ancient rarity** — one of the five original Ancients, alongside Pure Vanilla, Dark Cacao, Golden Cheese, and White Lily — and her class is **Defense**, positioned on the **Front line**. Her element is **Steel**. She's the founder and Queen Mother of the Hollyberry Kingdom, and she's been a tank pillar since her September 2021 release.

Her skill, **Oath on the Shield**, is what you're actually building. She charges forward and becomes a shield for her allies, absorbing a portion of the damage they take (excluding periodic and indirect damage). While that **DMG Focus** is active she also reduces the **CRIT damage** her whole team receives — a quietly enormous effect in Arena, where crit bursts are how teams get deleted. On top of that she has a **Seed of Life / Berry of Life** mechanic: as she soaks damage during DMG Focus, she stacks Seed of Life, and once it blooms into Berry of Life her next skill is enhanced with bonus DMG Resist and a self-heal over time, plus her cooldown shrinks so she can re-shield faster.

As an Ancient she also carries passive bonuses that are always on: bonus **Max HP**, bonus **DMG Resist**, and bonus **Debuff Resist**. Read it all together and the picture is clear — she isn't a cookie who survives by being a big target. She's a cookie who survives by *converting* enemy damage into mitigation for the team, and who shrugs off the crits and debuffs that wreck a fragile front line. Build her to do that job, not to be a bigger blob of HP.

## Why she is a DMG Resist wall, not an HP sponge

Here's the fork that decides her whole topping sheet. New players see "tank" and reach for HP toppings, because more HP obviously means harder to kill, right? Mostly wrong, and it's wrong for the same reason it's wrong on almost every CRK tank: **DMG Resist is a percentage reduction, HP is a flat pool.** DMG Resist makes every hit smaller and stretches both your raw HP *and* your healing further. A wall of HP with no mitigation just gives the enemy a bigger number to chew through at full speed.

Hollyberry leans into this harder than most. Her DMG Focus shield already absorbs a share of team damage, her Ancient passive stacks more DMG Resist on top, and Berry of Life hands her even more when it blooms. Every point of DMG Resist you add compounds with that pile — you're reinforcing a strength, not patching a weakness. The official wiki lists her core stats as **DMG Resist and Cooldown**, in that order, and that's exactly the priority you want.

This is why HP-stacking her feels okay in early content and then quietly falls apart in Arena and high-tier PvE: against scaling damage, flat HP loses value while percentage mitigation keeps doing its job. Build the wall, not the sponge.

## The standard Hollyberry topping build

![A DMG Resist (Solid Almond) topping icon — the almond set is the backbone of the standard Hollyberry build.](/images/gear/toppings/almond.png)

**5x DMG Resist toppings (the Solid Almond set).** That's the backbone, and for the general case it isn't close.

The standard:

- **Toppings:** 5x Solid Almond (DMG Resist)
- **Beascuit:** a DMG Resist-priority beascuit, ideally one that leans into her Steel element
- **Tart:** a DMG Resist or cooldown tart depending on which build you run
- **Magic Candy:** equipped and leveled

The reason DMG Resist wins is everything above: her shield, her Ancient passive, and Berry of Life all stack with flat mitigation, and the 5-piece Solid Almond set bonus hands you even more DMG Resist on top. She's there to keep the front standing, and a full almond set is the cleanest way to do that. There's a legitimate hybrid (below) that trades two slots for cooldown, but if you only build her one way, build her for DMG Resist.

If you're new to how topping sets and substats interact, the [toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide) covers the fundamentals this build assumes.

## Substat priorities without the fake numbers

Substats are where most of a build's quality lives, and where the CRK community most loves to invent exact percentages nobody can verify. No fake "you need exactly 41.3% DMG Resist" target here — just the honest priority order:

1. **DMG Resist** — the priority, on as many toppings as you can manage. This is the stat that makes every incoming hit smaller and stretches her shield, her healing, and her HP all at once. Push it as high as it'll go.
2. **Cooldown** — your secondary. Her shield is only up while DMG Focus is active, and Berry of Life rewards her for re-casting, so faster cooldown means more shield uptime and more of those crit-reduction windows for the team.
3. **HP** — the comfortable backup. HP isn't useless on her — it's the pool that DMG Resist multiplies, and her Seed of Life stacks scale off HP lost — so it's a fine stat to land on toppings where you missed DMG Resist and cooldown. Just don't lead with it.

The practical rule: **roll for DMG Resist first, take cooldown where you can, and let HP fill the gaps.** DMG Resist has diminishing returns once it's very high, but for the vast majority of rosters you'll never get close to that ceiling — keep stacking it until she stops dying, then go build your next cookie. Don't reroll forever for a fraction of a percent.

## The hybrid cooldown-leaning build

There's a real second build worth knowing: a **3 Solid Almond + 2 Swift Chocolate hybrid** that trades two mitigation slots for cooldown. It's the same hybrid pattern that suits a lot of tanks who have to survive *and* keep an ability cycling — and Hollyberry qualifies, because her shield and her team's crit reduction only exist while she's actively skilling.

When is it worth it? In longer fights and against crit-heavy enemy teams, getting Oath on the Shield back up sooner means more total shield uptime and more crit-DMG reduction across the fight, which can matter more than the last few points of flat DMG Resist. The wiki's own listed toppings for her are DMG Resist and Cooldown precisely because both pull weight. It's the situational pick, not the default — pure almond is simpler and stronger for general use — but if your Hollyberry is surviving fine and you want more uptime on the team buff, the 3+2 is a legitimate lane. Pick one and commit; don't smear cooldown across an almond set and call it a build.

## Beascuit pick — DMG Resist and Steel

The beascuit slot follows the same logic as the toppings: **prioritize DMG Resist**, and where you can, lean into her **Steel** element. DMG Resist reinforces the wall, and a Steel-flavored beascuit scales the damage type her kit is built around.

Stat priority on the beascuit: **DMG Resist > Cooldown > HP.** Mitigation first because it's the stat that does her job, cooldown for shield uptime, HP as the pool underneath. A high-quality beascuit is the ceiling, but any beascuit you can stack DMG Resist on does the core work. Don't bring a pure-HP or pure-ATK beascuit to a tank — Hollyberry deals almost no damage and isn't trying to; her value is mitigation, and the beascuit should reinforce that.

## Tart and treasure picks

Two routes, matched to your topping build:

**DMG Resist or HP tart for the pure-almond build.** Anything that makes her tankier stacks with the wall. A survivability tart is the default here.

**Cooldown tart for the hybrid build.** If you've gone 3+2 for shield uptime, a cooldown tart pushes that lane further. Don't mix a cooldown tart into a pure-mitigation set unless you've deliberately chosen the uptime route — pick a lane.

For treasures, the through-line holds: lead with team-survivability and shield-amplifying treasures over raw damage, and a battle-start cooldown treasure is genuinely strong on her because it gets DMG Focus and the crit reduction online during the opening burst, which is exactly when an Arena team tries to delete your front. The [treasures guide](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide) covers the current best-in-slot options and how they stack.

## Magic Candy for Hollyberry

Magic Candy deepens a kit that's already doing two jobs at once — soaking damage for the team and suppressing crits — so on a cooldown-and-mitigation build it compounds with everything else you've stacked. For a front-line anchor you keep in serious teams, it's worth feeding.

That said, be honest about her place in your priority order. Damage dealers and key supports usually pay off Magic Candy faster than a pure tank does, so unless Hollyberry is a permanent fixture in your Arena or high-tier PvE shells, she can wait behind your carries. Get it equipped and leveled to a functional baseline first, then push it higher once she's earning a guaranteed slot. The [Magic Candy priority guide](/blog/cookie-run-kingdom/crk-magic-candy-priority-guide) has the framework for where she should sit relative to the rest of your roster.

## The Awakened Hollyberry (Aegis) form

![Awakened Hollyberry Cookie (Aegis) in her vanguard-general armor, the Awakened Ancient upgrade of the base tank.](/images/blog/cookie-run-kingdom/hollyberry-cookie-toppings-build/awakened-hollyberry-cookie.webp)

Hollyberry has an **Awakened form — Hollyberry Cookie (Aegis)**, rarity **Awakened Ancient**, added in the 6.5 update. It's a separate, more powerful version of her, and if you've awakened her, it's the one you run. Same role and position — **Defense, Front line, Steel** — but the kit gets a major upgrade.

Her Awakened skill, **Shield of Conviction**, keeps the core DMG Focus shield-wall identity and bolts on a **Rally** team buff and a set of escalating states. As she absorbs damage she builds toward **Steelbound** mechanics that, when triggered (or when her HP drops low enough), reset her cooldown, restore HP, and enhance her shield — so the more punishment the team takes, the more she ramps. The Rally effect grants Steel-type allies DMG Resist Bypass scaling off Max HP, which means on a Steel-heavy team she stops being a purely defensive piece and starts juicing your damage too.

The build shifts slightly to match. The wiki's recommended toppings for Aegis are **DMG Resist (Solid Almond), Cooldown (Swift Chocolate), and HP (Healthy Peanut)**, with listed stats of **Cooldown, DMG Resist, and HP**. That's a clear signal that on the Awakened form the cooldown-leaning hybrid carries more weight than it does on base Hollyberry — her ramp and her Rally both reward casting, and HP feeds the Max-HP-scaling parts of the Awakened kit. The practical translation: a **3 Solid Almond + 2 Swift Chocolate** spread (DMG Resist > Cooldown > HP on substats) is a strong default for Aegis, leaning harder into cooldown than you would on base Hollyberry. If you're working toward awakening her, the [Awakening guide](/blog/cookie-run-kingdom/crk-awakening-guide) covers the process and the resources it costs.

## Team comps and where she fits

Hollyberry is a classic anchor tank: she doesn't deal meaningful damage, she keeps everyone else alive long enough to. Build the team to cash in the protection she provides:

- **Front line:** she *is* the front line. Keep her there. Up front she soaks the opening burst and gets DMG Focus and the crit reduction online; anywhere else she's wasted. If you want a second body up front, the [tank tier list](/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked) covers who pairs with her.
- **A carry to protect:** her entire payoff is a damage dealer who lives long enough to win the fight. Pair her with a hard-hitter from the [DPS tier list](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked) — a glass cannon like Sea Fairy is exactly the kind of cookie her shield is built to keep standing.
- **A healer or amplifier in the back:** her DMG Resist multiplies incoming healing, so a healer behind her goes a long way. The [healers ranked](/blog/cookie-run-kingdom/best-crk-healers-ranked) list covers who's worth the slot, and the [support tier list](/blog/cookie-run-kingdom/best-crk-support-cookies-ranked) has the amplifiers.

She slots into the durable-front shells the [Kingdom Arena meta team](/blog/cookie-run-kingdom/kingdom-arena-meta-team) and the [Guild Battle teams guide](/blog/cookie-run-kingdom/guild-battle-teams) lay out, and she's a staple in plenty of the [best PvE teams](/blog/cookie-run-kingdom/best-crk-pve-teams) for exactly that crit-reduction-and-shield package. Her crit-DMG reduction is especially valuable against crit-burst Arena teams — she's a soft counter to the whole archetype.

## Common Hollyberry build mistakes

In rough order of how often they show up:

1. **Stacking HP instead of DMG Resist.** The single most common tank mistake, and it's worse on Hollyberry because her shield, passive, and Berry of Life all want a percentage to multiply. DMG Resist first; HP is the backup.

2. **A pure-HP or ATK beascuit.** Same mistake, different slot. The beascuit is a DMG Resist-and-Steel slot first. She isn't trying to deal damage.

3. **Smearing cooldown across an almond set without committing.** If you want shield uptime, run the deliberate 3+2 hybrid — don't half-and-half it. Pick a lane.

4. **Moving her off the front line.** Her shield and crit reduction only matter where she's eating the hits. Front row, always.

5. **Running base Hollyberry when you've awakened her.** If you have Aegis, run Aegis — it's a strictly stronger version with a Rally buff and a ramp mechanic, and it wants its own slightly more cooldown-leaning build.

6. **Treating her as a damage source.** She does almost none. Her value is mitigation and the team buff — build and judge her on that, not on a damage chart.

## Quick Action Checklist

- Equip 5x Solid Almond (DMG Resist) as the standard build
- Prioritize DMG Resist substats, then Cooldown, then HP — and don't reroll forever
- The 3 Solid Almond + 2 Swift Chocolate hybrid is the situational pick for more shield uptime
- Run a DMG Resist-priority beascuit, ideally one that leans into her Steel element
- Pair a survivability tart with the pure-almond build; a cooldown tart with the hybrid
- Lead with team-survivability and battle-start cooldown treasures over raw damage
- Equip and level Magic Candy, but let your carries take priority unless she's a fixture
- If you've awakened her (Aegis), run that form and lean harder into cooldown (3+2, DMG Resist > Cooldown > HP)
- Keep her on the front line, never the back
- Build the team to cash in her wall: a carry to protect, a healer behind her, an amplifier to flex`,

  faq: [
    {
      question: 'What are the best toppings for Hollyberry Cookie?',
      answer:
        "5x Solid Almond (DMG Resist) is the standard build, because Hollyberry's value is mitigation — her DMG Focus shield, her Ancient passive, and her Berry of Life buff all stack with flat DMG Resist, and the 5-piece almond set bonus adds more on top. Prioritize DMG Resist substats, then Cooldown for shield uptime, then HP as a backup. A 3 Solid Almond + 2 Swift Chocolate hybrid is a legitimate alternate for more shield and crit-reduction uptime in longer fights, and her Awakened (Aegis) form leans harder into that cooldown split.",
    },
    {
      question: 'What class and rarity is Hollyberry Cookie?',
      answer:
        "Hollyberry Cookie is an Ancient-rarity, Defense-class cookie positioned on the Front line, with a Steel element. She's one of the five original Ancient Cookies and the founder of the Hollyberry Kingdom. Despite being a tank, she doesn't survive by being a big HP sponge — she charges out front, absorbs a share of the damage her allies would take, reduces the team's incoming CRIT damage, and self-heals through her Berry of Life mechanic, which makes her a mitigation engine rather than a health pool.",
    },
    {
      question: 'Should I build Hollyberry for HP or DMG Resist?',
      answer:
        "DMG Resist, in almost every case. DMG Resist is a percentage reduction that makes every incoming hit smaller and stretches both her HP and her healing, while flat HP just gives the enemy a bigger number to chew through at full speed. Hollyberry leans into this even harder than most tanks because her shield, her Ancient passive, and her Berry of Life buff all stack additional DMG Resist on top of what your toppings provide. HP is a fine backup stat to land on toppings where you missed DMG Resist and Cooldown, but you should never lead with it.",
    },
    {
      question: 'Is Awakened Hollyberry (Aegis) different to build?',
      answer:
        "Yes, slightly. Hollyberry Cookie (Aegis) is her Awakened Ancient form, added in the 6.5 update, and it's a stronger version of the same Defense front-liner with a Rally team buff and an escalating Steelbound ramp that resets her cooldown and heals her as she absorbs damage. Because her ramp and her Rally both reward casting, the cooldown-leaning split carries more weight than it does on base Hollyberry — the wiki's recommended toppings for Aegis are DMG Resist, Cooldown, and HP. A 3 Solid Almond + 2 Swift Chocolate spread, with substats prioritizing DMG Resist then Cooldown then HP, is a strong default for the Awakened form.",
    },
    {
      question: 'What team should I run with Hollyberry Cookie?',
      answer:
        "Build around the protection she provides. Keep her on the front line where her shield and crit-DMG reduction actually matter, pair her with a hard-hitting carry — a glass cannon like Sea Fairy is exactly what her shield is built to keep alive — and put a healer or amplifier in the back, since her DMG Resist multiplies incoming healing. She slots into most durable-front Arena, Guild Battle, and PvE shells, and her team-wide crit reduction makes her a soft counter to crit-burst Arena teams.",
    },
    {
      question: 'Does Hollyberry Cookie need Magic Candy?',
      answer:
        "If she's a permanent fixture in your serious Arena or high-tier PvE teams, it's worth it — her Magic Candy deepens both the shield and the crit-suppression she brings. But be honest about her place in line: damage dealers and key supports usually pay off Magic Candy faster than a pure tank does, so unless she's earning a guaranteed slot, she can wait behind your carries. Get it equipped and leveled to a functional baseline first, then push it higher once she's a fixture.",
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/crk-toppings-guide', anchor: 'toppings guide' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide', anchor: 'treasures guide' },
    { href: '/blog/cookie-run-kingdom/crk-magic-candy-priority-guide', anchor: 'Magic Candy priority guide' },
    { href: '/blog/cookie-run-kingdom/crk-awakening-guide', anchor: 'Awakening guide' },
    { href: '/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked', anchor: 'tank tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked', anchor: 'DPS tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-healers-ranked', anchor: 'healers ranked' },
    { href: '/blog/cookie-run-kingdom/best-crk-support-cookies-ranked', anchor: 'support tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-pve-teams', anchor: 'best PvE teams' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team' },
    { href: '/blog/cookie-run-kingdom/guild-battle-teams', anchor: 'Guild Battle teams guide' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Hollyberry_Cookie', title: 'Cookie Run: Kingdom Wiki — Hollyberry Cookie' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Hollyberry_Cookie_(Aegis)', title: 'Cookie Run: Kingdom Wiki — Hollyberry Cookie (Aegis), the Awakened form' },
    { url: 'https://www.pocketgamer.com/cookie-run-kingdom/', title: 'Pocket Gamer — Cookie Run: Kingdom guides' },
  ],

  tldr:
    "Build Hollyberry Cookie for DMG Resist, not HP — she's an Ancient Defense tank whose value is mitigation, not a health pool. Her DMG Focus shield absorbs a share of team damage, reduces the team's incoming CRIT damage, and her Berry of Life mechanic self-heals, all of which stack with flat DMG Resist. Run 5x Solid Almond (DMG Resist) with DMG Resist-priority substats, then Cooldown, then HP, plus a DMG Resist-and-Steel beascuit. A 3 Solid Almond + 2 Swift Chocolate hybrid trades mitigation for shield uptime, and her Awakened form, Hollyberry Cookie (Aegis), leans harder into that cooldown split (DMG Resist > Cooldown > HP). Keep her front-line, pair her with a carry to protect and a healer behind her, and prioritize Magic Candy behind your damage dealers.",
};
