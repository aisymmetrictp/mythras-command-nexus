import type { BlogPost } from '../../blogTypes';

export const darkCacaoCookieToppingsBuild: BlogPost = {
  slug: 'dark-cacao-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'dark-cacao-build',

  title: 'Dark Cacao Cookie Toppings Build & Guide',
  metaDescription:
    'Dark Cacao Cookie build guide for June 2026: the DMG Resist + Cooldown topping spread, substat priorities, beascuit, Magic Candy, the Dragon Lord Awakened form, and teams.',
  excerpt:
    "Dark Cacao is the Ancient that keeps getting filed under \"old front-liner\" and then keeps showing up in serious comps anyway. He's a Charge bruiser whose real value isn't his health bar — it's the pile of debuffs he stamps on the enemy line, including an Injury that ignores immunity. That changes how you gear him. Here's the build: toppings, substats, beascuit, Magic Candy, the Dragon Lord form, and where he wins.",
  featuredImagePrompt:
    'Dark Cacao Cookie center frame, the stoic warrior-king of the Dark Cacao Kingdom mid-swing with his greatsword wreathed in dark lightning, snow and ash swirling, deep purple and steel-gray palette with crackling electric-blue and darkness-violet highlights, Cookie Run: Kingdom key-art style, painterly cel-shaded, dramatic backlighting',
  heroImage: '/images/blog/cookie-run-kingdom/dark-cacao-cookie-toppings-build/dark-cacao-cookie.webp',
  heroImageAlt: 'Dark Cacao Cookie, the Ancient-rarity Charge front-line bruiser this June 2026 toppings build guide is for.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/dark-cacao-cookie-toppings-build/dark-cacao-cookie.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Dark_Cacao_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/dark-cacao-cookie-toppings-build/dragon-lord-dark-cacao-cookie.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Dark_Cacao_Cookie_(Dragon_Lord)',
      license: 'Fandom CC-BY-SA',
    },
    { src: '/images/gear/toppings/almond.png', sourceUrl: 'owned-asset' },
    { src: '/images/gear/toppings/chocolate.png', sourceUrl: 'owned-asset' },
  ],

  publishDate: '2026-06-18T00:00:00.000Z',
  lastUpdated: '2026-06-18T00:00:00.000Z',

  primaryKeyword: 'dark cacao cookie toppings',
  secondaryKeywords: [
    'dark cacao cookie build',
    'best toppings dark cacao',
    'dark cacao beascuit',
    'dark cacao magic candy',
    'dragon lord dark cacao toppings',
    'dark cacao cookie team',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 11,

  toc: [
    { id: 'who-dark-cacao-actually-is', label: 'Who Dark Cacao actually is', level: 2 },
    { id: 'why-his-debuffs-matter-more-than-his-health-bar', label: 'Why his debuffs matter more than his health bar', level: 2 },
    { id: 'the-standard-dark-cacao-topping-build', label: 'The standard Dark Cacao topping build', level: 2 },
    { id: 'substat-priorities-without-the-fake-numbers', label: 'Substat priorities without the fake numbers', level: 2 },
    { id: 'the-pure-mitigation-alternate', label: 'The pure-mitigation alternate', level: 2 },
    { id: 'beascuit-pick-dmg-resist-or-cooldown', label: 'Beascuit pick — DMG Resist or Cooldown', level: 2 },
    { id: 'tart-and-treasure-picks', label: 'Tart and treasure picks', level: 2 },
    { id: 'magic-candy-for-dark-cacao', label: 'Magic Candy for Dark Cacao', level: 2 },
    { id: 'the-dragon-lord-awakened-form', label: 'The Dragon Lord Awakened form', level: 2 },
    { id: 'team-comps-and-where-he-fits', label: 'Team comps and where he fits', level: 2 },
    { id: 'common-dark-cacao-build-mistakes', label: 'Common Dark Cacao build mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Dark Cacao is the Ancient everyone keeps writing off as a relic from 2022 — an old front-liner you ran before the roster got deep — and then he keeps turning up in real comps and quietly doing work. The reason people misread him is that they judge him on his health bar. His health bar is fine. It's not the point. The point is the stack of debuffs his greatsword stamps onto the enemy front when it lands: ATK down, DEF down, Zap, and an **Injury that reduces Max HP and ignores immunity and most dispels**. He's a front-line debuffer wearing a bruiser's coat, and gearing him to be "tankier" misses what actually makes him good.

This is the June 2026 build sheet for him: toppings, substats, beascuit, tart, Magic Candy, the Dragon Lord Awakened form, team fit, and the mistakes that bench one of the most under-appreciated Ancients in the game. Where the community has invented exact substat roll-targets, I'll give you the direction instead of a fake number — because the wrong number gets copy-pasted forever, and the direction is what actually moves a build. Confirm the live values in-game for your region and patch.

## Who Dark Cacao actually is

![Dark Cacao Cookie swinging his lightning-wreathed greatsword, the Ancient-rarity Charge front-liner this build is for.](/images/blog/cookie-run-kingdom/dark-cacao-cookie-toppings-build/dark-cacao-cookie.webp)

Get the identity right before you spend a single topping. Dark Cacao Cookie is **Ancient rarity** — one of the five original Ancients alongside Pure Vanilla, Hollyberry, Golden Cheese, and White Lily — and his role is **Charge**, positioned on the **Front line**. He's the warrior-king of the Dark Cacao Kingdom, the third Ancient released (February 24, 2022), and he carries a **dual element: Darkness and Electricity**.

His skill, **swinging the Grapejam Chocoblade**, is what you're actually building. He brings his blade down with thunder and lightning, dealing a two-hit Darkness blow to enemies in range and stacking a pile of debuffs on them: he **reduces enemy ATK and DEF**, inflicts **Zap** (periodic Electricity damage that nullifies HP shields), and inflicts **Injury** — and the Injury is the spicy part. Injured foes have their **Max HP reduced**, and the debuff **ignores immunity and most dispel effects**. That's an effect that doesn't care how the enemy is built; it just shrinks their health pool and shuts off their shields.

As an Ancient he also carries always-on passives and the durability you'd expect from a front-line Charge cookie. But for build purposes, lock onto the truth of his kit: **his value is the debuff package, delivered from the front, on a cooldown.** He doesn't need to out-DPS your carry and he doesn't need to out-tank your wall — he needs to land his skill, stick the debuffs, and do it again. The wiki even lists his core stats as **DMG Resist and Cooldown**, which is the kit telling you exactly how to gear him.

## Why his debuffs matter more than his health bar

Here's the fork that decides his whole topping sheet. New players see "front line, big sword, lots of HP" and reach for HP toppings to make him a sponge. That's not wrong so much as it's gearing the least valuable thing about him. His debuffs — the ATK/DEF reduction, the shield-nullifying Zap, and the immunity-ignoring Injury — are what tilt fights, and those land regardless of how chunky his health bar is. What you actually want is for him to **survive the front line long enough to keep re-applying them.**

That makes his build a survivability-and-uptime problem, not a damage problem and not a pure-tank problem. **DMG Resist** keeps him standing through the opening burst as a percentage reduction that stretches his HP and any healing. **Cooldown** gets his skill — and therefore the whole debuff package — back online faster. The wiki's listed stats of DMG Resist and Cooldown line up exactly: keep him alive, keep him casting. HP is a fine backup pool for DMG Resist to multiply, but it's the supporting stat, not the lead.

This is why HP-stacking him feels okay early and then plateaus: against scaling damage, flat HP loses value while percentage mitigation keeps working, and neither stat does anything to get his debuffs out faster. Build the uptime engine, not the bigger blob.

## The standard Dark Cacao topping build

![A DMG Resist (Solid Almond) topping icon — almond is the backbone of the standard Dark Cacao build.](/images/gear/toppings/almond.png)

**A DMG Resist + Cooldown split — the classic 3 Solid Almond + 2 Swift Chocolate.** That's the backbone, and it matches his listed stats one-to-one.

The standard:

- **Toppings:** 3x Solid Almond (DMG Resist) + 2x Swift Chocolate (Cooldown)
- **Beascuit:** a DMG Resist- or Cooldown-priority beascuit
- **Tart:** a survivability or cooldown tart depending on which lean you run
- **Magic Candy:** equipped and leveled

The reason this split wins is everything above: DMG Resist keeps him alive through the front-line beating so he survives to cast, and Cooldown gets his debuff package back up sooner. The wiki lists his stats as DMG Resist and Cooldown precisely because both pull weight — he needs to live *and* he needs to recast. If you skew the split, skew it toward whichever your content punishes more: more almond if he's dying before he casts twice, more chocolate if he's surviving fine but you want the debuffs cycling faster. There's a pure-mitigation lane (below) for when you only care about him standing, but the balanced split is the default.

If you're new to how topping sets and substats interact, the [toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide) covers the fundamentals this build assumes.

## Substat priorities without the fake numbers

Substats are where most of a build's quality lives, and where the CRK community most loves to invent exact percentages nobody can verify. No fake "you need exactly 52.6% Cooldown" target here — just the honest priority order:

1. **Cooldown** — co-lead, because his entire value is a debuff package on a cooldown. Faster recast means his ATK/DEF down, Zap, and Injury are up more of the fight, which is the whole reason he's in the comp. On debuff-uptime-critical content this is the stat that matters most.
2. **DMG Resist** — the other co-lead, and the reason he survives the front line to keep casting. As a percentage reduction it stretches his HP and any healing, and it's the stat that stops him getting deleted in the opening burst.
3. **HP** — the comfortable backup. It's the pool DMG Resist multiplies, so it's a fine stat to land where you missed Cooldown and DMG Resist. Just don't lead with it.

The practical rule: **chase Cooldown and DMG Resist together — they're his two listed stats for a reason — and let HP fill the gaps.** Which of the two you weight slightly heavier depends on whether your problem is uptime or survival. Don't reroll forever for a fraction of a percent; get both stats healthy and ship him.

## The pure-mitigation alternate

There's a real second lane worth knowing: a **5x Solid Almond (pure DMG Resist) set** for when you only need him to *stand there and tank* while a faster-cycling teammate carries the tempo. It's the wall build — maximum survivability, minimum compromise.

When is it worth it? In content where the front line is getting absolutely hammered and his job is simply to not fall over — letting his debuffs land whenever the skill happens to come up, rather than racing to recast — the extra two mitigation slots can keep him upright where a cooldown-leaning split would see him die mid-fight. The trade-off is obvious: slower debuff cycling, which undercuts the best part of his kit. It's the situational pick, not the default — the 3+2 balanced split gets more total value out of him in most content — but if survival is the whole problem, pure almond is a legitimate answer. Pick a lane and commit; don't run four almond and one chocolate and pretend it's a real cooldown build.

## Beascuit pick — DMG Resist or Cooldown

The beascuit slot follows the same logic as the toppings: **prioritize his two core stats, DMG Resist and Cooldown.** Mitigation keeps him alive to cast, cooldown gets the debuffs cycling — same two levers, different slot.

Stat priority on the beascuit: **Cooldown / DMG Resist > HP.** Lead with whichever your content demands more of, with HP as the pool underneath. A high-quality beascuit is the ceiling, but any beascuit you can stack his two core stats on does the real work. Don't bring a pure-ATK beascuit to Dark Cacao — he's not a damage carry, he's a debuff anchor, and a damage-only beascuit wastes the slot that should be reinforcing his uptime and survival.

## Tart and treasure picks

Two routes, matched to your topping lean:

**Survivability tart for the mitigation-heavy build.** Anything that makes him tankier stacks with the wall and keeps him alive to cast. The default if your problem is him dying.

**Cooldown tart for the uptime lean.** If you've skewed toward chocolate for faster debuff cycling, a cooldown tart pushes that lane further.

For treasures, the through-line holds: a battle-start cooldown treasure is genuinely strong on him because it gets his debuff package — the ATK/DEF down, the Zap, the Injury — online during the opening burst, which is exactly when stamping those on the enemy line pays off most. Pair that with survivability treasures so he lives to recast. The [treasures guide](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide) covers the current best-in-slot options and how they stack; confirm the current values in-game, since treasure tuning shifts between patches.

## Magic Candy for Dark Cacao

Magic Candy deepens a kit that's already doing real work on the enemy line — more debuff, more uptime, or more durability depending on what the candy reinforces — so on a cooldown-and-mitigation build it compounds with everything else you've stacked. For a debuff anchor you keep in serious teams, it's worth feeding.

That said, be honest about his place in your priority order. Damage dealers and key supports usually pay off Magic Candy faster than a front-line utility piece does, so unless Dark Cacao is a permanent fixture in your Arena or high-tier PvE shells, he can wait behind your carries. Get it equipped and leveled to a functional baseline first, then push it higher once he's earning a guaranteed slot. The [Magic Candy priority guide](/blog/cookie-run-kingdom/crk-magic-candy-priority-guide) has the framework for where he should sit relative to the rest of your roster.

## The Dragon Lord Awakened form

![Dark Cacao Cookie (Dragon Lord), the Awakened Ancient upgrade of the base bruiser, in his dragon-king armor.](/images/blog/cookie-run-kingdom/dark-cacao-cookie-toppings-build/dragon-lord-dark-cacao-cookie.webp)

Dark Cacao has an **Awakened form — Dark Cacao Cookie (Dragon Lord)**, rarity **Awakened Ancient**. It's a separate, more powerful version of him, and if you've awakened him, it's the one you run. Notably, on Awakening he **loses his Electricity element and becomes pure Darkness** — the opposite of what happened to Pure Vanilla, who *gained* an element — so the Zap-flavored part of his identity changes shape in the Awakened kit.

Because the Awakened form keeps his front-line job, the build philosophy doesn't flip — **he's still a DMG Resist and Cooldown cookie at heart**: survive the front, keep the skill cycling. The practical translation: keep those two as your lead substats, run the balanced 3 Solid Almond + 2 Swift Chocolate split (or lean it toward whichever your content punishes more), and let HP fill the gaps, exactly as you would on base Dark Cacao. Whether the Dragon Lord kit's specifics nudge the split is the kind of thing worth confirming against the current in-game numbers for your region, since Awakened skills get tuned over time. If you're working toward awakening him, the [Awakening guide](/blog/cookie-run-kingdom/crk-awakening-guide) covers the process and the resources it costs.

## Team comps and where he fits

Dark Cacao is a front-line utility anchor: he doesn't out-damage your carry and he doesn't have to out-tank your dedicated wall — he debuffs the enemy line and survives to do it again. Build the team to cash in that package:

- **Front line:** that's his home. Up front he eats the opening burst and stamps his debuffs where they matter; anywhere else he's wasted. If you want a second body up front, the [tank tier list](/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked) covers who pairs with him.
- **A carry to set up:** his ATK/DEF reduction, his shield-nullifying Zap, and his Max-HP-shredding Injury soften the enemy line so your damage dealer finishes faster. Pair him with a hard-hitter from the [DPS tier list](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked) — his debuffs are a multiplier on whatever they bring.
- **A healer behind the line:** he's standing in the worst of it, so sustain keeps him casting. The [healers ranked](/blog/cookie-run-kingdom/best-crk-healers-ranked) list covers who's worth the slot.

He slots into the durable-front shells the [Kingdom Arena meta team](/blog/cookie-run-kingdom/kingdom-arena-meta-team) and the [best PvE teams](/blog/cookie-run-kingdom/best-crk-pve-teams) lay out, and his immunity-ignoring Injury makes him especially nasty into enemies that rely on shields or cleanse to survive. As an Ancient he also rates on the [best Ancient cookies ranked](/blog/cookie-run-kingdom/best-ancient-cookies-crk-ranked) list — a front-line debuffer who's aged better than his "old Ancient" reputation suggests.

## Common Dark Cacao build mistakes

In rough order of how often they show up:

1. **Stacking HP to make him a sponge.** His value is debuffs and uptime, not a giant health bar. DMG Resist and Cooldown first; HP is the backup pool.

2. **Treating him as a damage carry.** He does some damage, but that's not why he's in the comp. Don't gear him ATK and judge him on a damage chart — judge him on whether his debuffs are landing and cycling.

3. **A pure-ATK beascuit.** Same mistake, different slot. The beascuit is a DMG Resist / Cooldown slot. Reinforce his survival and uptime.

4. **Running a fake hybrid.** Four almond and one chocolate isn't a cooldown build, and four chocolate and one almond isn't a survival build. Run the deliberate 3+2 balanced split, or commit to the pure-almond wall. Pick a lane.

5. **Moving him off the front line.** His debuffs and his durability only matter where he's eating the hits and within range to land the skill. Front row, always.

6. **Running base Dark Cacao when you've awakened him.** If you have Dragon Lord, run it — it's a strictly stronger version, even though it trades away the Electricity element for pure Darkness.

## Quick Action Checklist

- Equip the 3 Solid Almond (DMG Resist) + 2 Swift Chocolate (Cooldown) split as the standard build
- Prioritize Cooldown and DMG Resist substats together — his two core stats — then HP
- The 5x Solid Almond pure-mitigation set is the situational pick when you only need him to stand
- Run a DMG Resist- or Cooldown-priority beascuit; never a pure-ATK one
- Pair a survivability tart with the mitigation lean; a cooldown tart with the uptime lean
- Lead with battle-start cooldown and survivability treasures (confirm current values in-game)
- Equip and level Magic Candy, but let your carries take priority unless he's a fixture
- If you've awakened him (Dragon Lord), run that form — note it becomes pure Darkness, losing Electricity
- Keep him on the front line, never the back
- Build the team to cash in his debuffs: a carry he sets up, a healer behind him`,

  faq: [
    {
      question: 'What are the best toppings for Dark Cacao Cookie?',
      answer:
        "A 3 Solid Almond (DMG Resist) + 2 Swift Chocolate (Cooldown) split is the standard build, and it matches his listed core stats — DMG Resist and Cooldown — one-to-one. DMG Resist keeps him alive on the front line so he survives to cast, and Cooldown gets his debuff package back up faster, which is the whole reason he's in the comp. Prioritize Cooldown and DMG Resist substats together, with HP as the backup pool. A pure 5x Solid Almond wall build is a legitimate situational pick for when you only need him to stand and tank, but it slows his debuff cycling, which is his best feature.",
    },
    {
      question: 'What class and rarity is Dark Cacao Cookie?',
      answer:
        "Dark Cacao Cookie is an Ancient-rarity, Charge-class cookie positioned on the Front line, and he carries a dual element of Darkness and Electricity. He's one of the five original Ancient Cookies and the third one released, on February 24, 2022. His skill swings the Grapejam Chocoblade for a two-hit Darkness blow and stacks a debuff package: reduced enemy ATK and DEF, a Zap that deals periodic Electricity damage and nullifies HP shields, and an Injury that reduces enemy Max HP and ignores immunity and most dispel effects. He's a front-line debuffer first, not a pure tank or a damage carry.",
    },
    {
      question: 'Should I build Dark Cacao for HP or DMG Resist?',
      answer:
        "DMG Resist over HP, but the real answer is that his two co-lead stats are DMG Resist and Cooldown together. DMG Resist is a percentage reduction that keeps him alive through the front-line burst and stretches his HP and any healing, while flat HP just gives the enemy a bigger number to chew through. Cooldown matters just as much because his entire value is a debuff package on a cooldown — faster recast means his ATK/DEF down, Zap, and immunity-ignoring Injury are up more of the fight. HP is a fine backup stat to land where you missed the other two, but you should never lead with it.",
    },
    {
      question: 'Is Awakened (Dragon Lord) Dark Cacao different to build?',
      answer:
        "Not fundamentally, with one quirk worth knowing: Dark Cacao Cookie (Dragon Lord) is his Awakened Ancient form, and on Awakening he loses his Electricity element and becomes pure Darkness — the opposite of Pure Vanilla, who gained an element. The build philosophy stays the same because he keeps his front-line job: he's still a DMG Resist and Cooldown cookie at heart, so run the balanced 3 Solid Almond + 2 Swift Chocolate split with those two as your lead substats and HP filling the gaps. Whether the Dragon Lord kit's specifics nudge the split is worth confirming against the current in-game numbers for your region, since Awakened skills get tuned over time.",
    },
    {
      question: 'What team should I run with Dark Cacao Cookie?',
      answer:
        "Build around cashing in his debuffs. Keep him on the front line where his package lands and his durability matters, pair him with a hard-hitting carry whose damage his ATK/DEF reduction, shield-nullifying Zap, and Max-HP-shredding Injury all amplify, and put a healer behind the line since he's standing in the worst of it and needs sustain to keep casting. He slots into durable-front Arena and PvE shells, and his immunity-ignoring Injury makes him especially nasty into enemies that lean on shields or cleanse to survive.",
    },
    {
      question: 'Does Dark Cacao Cookie need Magic Candy?',
      answer:
        "If he's a permanent fixture in your serious Arena or high-tier PvE teams, it's worth it — his Magic Candy deepens his debuff package, uptime, or durability depending on what it reinforces. But be honest about his place in line: damage dealers and key supports usually pay off Magic Candy faster than a front-line utility piece does, so unless he's earning a guaranteed slot, he can wait behind your carries. Get it equipped and leveled to a functional baseline first, then push it higher once he's a fixture.",
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/crk-toppings-guide', anchor: 'toppings guide' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide', anchor: 'treasures guide' },
    { href: '/blog/cookie-run-kingdom/crk-magic-candy-priority-guide', anchor: 'Magic Candy priority guide' },
    { href: '/blog/cookie-run-kingdom/crk-awakening-guide', anchor: 'Awakening guide' },
    { href: '/blog/cookie-run-kingdom/best-ancient-cookies-crk-ranked', anchor: 'best Ancient cookies ranked' },
    { href: '/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked', anchor: 'DPS tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked', anchor: 'tank tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-healers-ranked', anchor: 'healers ranked' },
    { href: '/blog/cookie-run-kingdom/best-crk-pve-teams', anchor: 'best PvE teams' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Dark_Cacao_Cookie', title: 'Cookie Run: Kingdom Wiki — Dark Cacao Cookie' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Dark_Cacao_Cookie_(Dragon_Lord)', title: 'Cookie Run: Kingdom Wiki — Dark Cacao Cookie (Dragon Lord), the Awakened form' },
    { url: 'https://www.pocketgamer.com/cookie-run-kingdom/', title: 'Pocket Gamer — Cookie Run: Kingdom guides' },
  ],

  tldr:
    "Build Dark Cacao Cookie for DMG Resist and Cooldown together, not raw HP — he's an Ancient Charge front-liner whose real value is his debuff package, not his health bar. His Grapejam Chocoblade reduces enemy ATK and DEF, inflicts a shield-nullifying Zap, and stamps an Injury that cuts Max HP and ignores immunity and most dispels. Run the 3 Solid Almond (DMG Resist) + 2 Swift Chocolate (Cooldown) split — DMG Resist to survive the front, Cooldown to keep the debuffs cycling — with HP as backup, plus a DMG Resist/Cooldown beascuit. A 5x Solid Almond wall is the situational pick when you only need him to stand. His Awakened form, Dark Cacao Cookie (Dragon Lord), stays a DMG Resist/Cooldown cookie but becomes pure Darkness, losing Electricity. Keep him front-line, pair him with a carry he sets up and a healer behind him.",
};
