import type { BlogPost } from '../../blogTypes';

export const silentSaltCookieToppingsBuild: BlogPost = {
  slug: 'silent-salt-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'silent-salt-build',

  title: 'Silent Salt Cookie Toppings Build & Guide',
  metaDescription:
    'Silent Salt Cookie build guide for June 2026: the ATK-and-cooldown topping spread, substat priorities, beascuit and tart picks, Magic Candy, and team comps.',
  excerpt:
    "Silent Salt is the last of the Five Beasts, and the one people most often misread. He sits on the front line like a tank but plays like an Ambush assassin who deletes the enemy's strongest cookie. Build him like a wall and you waste the kill; build him pure ATK and he gets focused down before the eclipse lands. Here is the build that threads it — toppings, substats, beascuit, Magic Candy, and team fit.",
  featuredImagePrompt:
    'Silent Salt Cookie center frame, the Devil of Silence astride his shadow steed Nox Black Salt under an eclipsed moon, a steel blade cutting the dark moon in half as it shatters, deep indigo and obsidian palette with cold steel highlights and silver moonlight, Cookie Run: Kingdom key-art style, painterly cel-shaded, dramatic backlighting',
  heroImage: '/images/blog/cookie-run-kingdom/silent-salt-cookie-toppings-build/silent-salt-cookie.webp',
  heroImageAlt: 'Silent Salt Cookie, the Beast-rarity Ambush-class cookie and front-line assassin this June 2026 toppings build guide is for.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/silent-salt-cookie-toppings-build/silent-salt-cookie.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Silent_Salt_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/silent-salt-cookie-toppings-build/silent-salt-cookie-standing.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Silent_Salt_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    { src: '/images/gear/toppings/raspberry.png', sourceUrl: 'owned-asset' },
    { src: '/images/gear/toppings/chocolate.png', sourceUrl: 'owned-asset' },
  ],

  publishDate: '2026-06-06T00:00:00.000Z',
  lastUpdated: '2026-06-06T00:00:00.000Z',

  primaryKeyword: 'silent salt cookie toppings',
  secondaryKeywords: [
    'silent salt cookie build',
    'best toppings silent salt',
    'silent salt beascuit',
    'silent salt magic candy',
    'crk silent salt guide',
    'silent salt cookie team',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 11,

  toc: [
    { id: 'who-silent-salt-actually-is', label: 'Who Silent Salt actually is', level: 2 },
    { id: 'why-he-is-an-assassin-wearing-a-tanks-position', label: 'Why he is an assassin wearing a tank\'s position', level: 2 },
    { id: 'the-standard-silent-salt-topping-build', label: 'The standard Silent Salt topping build', level: 2 },
    { id: 'substat-priorities-without-the-fake-numbers', label: 'Substat priorities without the fake numbers', level: 2 },
    { id: 'the-cooldown-leaning-alternate-build', label: 'The cooldown-leaning alternate build', level: 2 },
    { id: 'beascuit-pick-atk-and-his-elements', label: 'Beascuit pick — ATK and his elements', level: 2 },
    { id: 'tart-and-treasure-picks', label: 'Tart and treasure picks', level: 2 },
    { id: 'magic-candy-for-silent-salt', label: 'Magic Candy for Silent Salt', level: 2 },
    { id: 'team-comps-and-where-he-fits', label: 'Team comps and where he fits', level: 2 },
    { id: 'common-silent-salt-build-mistakes', label: 'Common Silent Salt build mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Silent Salt is the fifth and final Beast, and the one people misbuild more than any of the others — because his class label and his battlefield position openly contradict each other. He stands on the **Front line** like a tank, so the instinct is to gear him for bulk. But his class is **Ambush**, and his whole kit is built to find the enemy's biggest threat and erase it. Gear him like a wall and you've spent one of the rarest cookies in the game to soak hits instead of getting the kill. Stack him pure ATK like a back-row nuker and he gets focused down up front before the eclipse ever falls. The correct build threads both — and once you see what his skill is actually doing, the topping sheet is straightforward.

This is the June 2026 build sheet for him: toppings, substats, beascuit, tart, Magic Candy, team fit, and the specific mistakes that turn a Beast into a benchwarmer. Where the community has invented precise substat roll-targets, I'm going to give you the direction instead of a fake number — because the wrong number gets copy-pasted forever, and the direction is what actually moves a build.

## Who Silent Salt actually is

![Silent Salt Cookie astride his shadow steed under an eclipsed moon, the Beast-rarity Ambush cookie this build is for.](/images/blog/cookie-run-kingdom/silent-salt-cookie-toppings-build/silent-salt-cookie.webp)

Get the identity right before you spend a single topping. Silent Salt Cookie is **Beast rarity** — the fifth and final of the Five Beasts, and among the hardest cookies in the game to pull — and his class is **Ambush**, positioned on the **Front** line. His elements are **Darkness** and **Steel**, and he goes by the Devil of Silence. He released on the global server in late September 2025 as the closer to the Beast-Yeast arc, and he plays nothing like the front-line bruiser his position suggests.

His skill, **End of Silence**, is a targeted execution. He summons his steed, **Nox Black Salt**, locks enemies into **Silence Eternal** (a recurring Silence that shuts down their skills), then charges forward and cuts the eclipsed moon in half to make it explode. The damage is split: a big **Lunar Slash** that hits cookies for a chunk of ATK **plus a percentage of their Max HP**, then a multi-hit **Moon Explosion** that does the same. Both phases come with a hefty **DMG Resist Bypass** (around 40%), so DEF-stacked enemies don't get to hide. The slash also **Petrifies** the target and stacks a **Taken DMG amplification** debuff, and the explosion drops enemy damage output afterward.

The part that defines him as an Ambush cookie is **Fury of the Catacombs**: from the start of the fight he hangs a stacking debuff on the **enemy with the highest ATK**, and once it's fully stacked the target takes Punishment. When that target dies, Fury jumps to the next-highest-ATK enemy. And once your own team's HP dips below a threshold, the seven highest-ATK enemies get hit with a finisher that triggers an instant Silent Demise effect. On top of that, his **Forsaken Freedom** makes him immune to all cooldown-impairing effects — and when something tries to slow his cooldown, he instead gains an **HP Shield plus DMG Resist and Cooldown Recovery buffs.** Read it together: he's a front-positioned assassin who hunts the enemy carry, bypasses resistances, locks down skills, and turns enemy disruption into his own survivability.

## Why he is an assassin wearing a tank's position

Here's the fork that trips people up. His position says "front line," which screams tank. His class says "Ambush," which means his job is to kill — specifically to delete the enemy's highest-ATK cookie through Fury of the Catacombs and the eclipse burst. Those two facts pull the build in opposite directions, and the wrong resolution is to pick one and ignore the other.

A pure-ATK glass-cannon build maximizes the kill but ignores that he's standing where the enemy's damage lands first — he gets deleted before the payoff. A pure-bulk wall build keeps him alive but wastes the entire reason you'd run a Beast assassin over a normal front-liner: the execution. The resolution the community has landed on matches the wiki's own recommended stats for him — **ATK, Cooldown, DMG Resist Bypass, and HP together.** You build him as a **bruiser-assassin**: enough ATK that the eclipse actually kills, enough bulk that he survives the front row long enough to cast, and DMG Resist Bypass to make sure his damage lands through DEF.

His own kit funds part of the survival side, which is what makes this work. The shield-and-buff trigger off Forsaken Freedom and the cooldown-impairment immunity mean enemy disruption *helps* him instead of stopping him, so you don't have to fully pay for his survivability with gear. That's exactly why you can afford to keep real ATK on a front-line cookie here instead of going full brick.

## The standard Silent Salt topping build

![Searing Raspberry topping icon, the ATK half of the standard Silent Salt build.](/images/gear/toppings/raspberry.png)

**An ATK-and-cooldown split — Searing Raspberry (ATK) plus Swift Chocolate (cooldown).** That's the standard, and it matches the wiki's own recommended topping flavors for him (a Raspberry/Chocolate mix).

The standard:

- **Toppings:** a Searing Raspberry / Swift Chocolate split — lean Raspberry-heavy for damage, with cooldown in the mix to get the eclipse online
- **Beascuit:** an ATK-priority beascuit, ideally one touching his Darkness or Steel element
- **Tart:** an ATK tart for the damage build (a cooldown tart for the tempo-leaning alternate)
- **Magic Candy:** equipped and leveled

The reason a split wins over a single pure set is everything above: he needs ATK so the execution actually kills, but he also needs his cooldown low enough that End of Silence lands before the enemy carry has done its work — and Fury of the Catacombs starts stacking from the opening, so getting to the cast matters. A common, clean ratio is leaning Raspberry-heavy with a couple of cooldown pieces, but the exact split flexes with your content. There's a more cooldown-heavy alternate below, but for the general case, the ATK-leaning split is the build.

If you're new to how topping sets and substats interact, the [toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide) covers the fundamentals this build assumes.

## Substat priorities without the fake numbers

Substats are where most of a build's quality lives, and they're also where the CRK community most loves to invent exact percentages nobody can actually verify. I'm not going to hand you a fake "you need exactly 38.4% ATK" target. Here's the honest version, ordered to match the stats the wiki lists for him:

1. **ATK%** — the priority, because the kill is the point. His Lunar Slash and Moon Explosion scale off ATK (on top of a Max-HP component), and Fury of the Catacombs is only a threat if the follow-up damage is real. Take ATK% over flat ATK every time — the percentage scales with his base stat, the flat number doesn't.
2. **Cooldown** — your strong secondary. The faster End of Silence comes up, the sooner the Silence lockdown, the DMG Resist Bypass, and the execution land, and the sooner Fury's payoff arrives. On a front-line assassin, casting on time is survival as much as damage.
3. **DMG Resist Bypass** — a high-value rider that the wiki explicitly lists for him. His skill already bypasses a chunk of resist, so stacking more reinforces a built-in strength and makes him brutal against DEF-stacked PvP and tanky bosses.
4. **HP** — the survivability backstop, since he's standing up front. His own shield-and-buff kit covers part of the floor, so HP is the fourth stat that keeps him on the board long enough to cast — not the thing you build around.

The practical rule: **roll for ATK first, back it with cooldown, take DMG Resist Bypass where you can, and don't chase a perfect set.** A bruiser-assassin wants a healthy spread serving both halves of his job, not one maxed stat. Substats have diminishing returns past a reasonable spread — hit "kills the carry and survives to do it" and go build your next cookie.

## The cooldown-leaning alternate build

There's a real second build worth knowing: a **cooldown-leaning set** (more Swift Chocolate, less Raspberry) for players who want End of Silence online as early and as often as possible. Getting the Silence lockdown, the Petrify, and the execution up faster has obvious value in fast Arena exchanges and any fight where shutting down the enemy carry *first* matters more than the raw size of one hit — and his cooldown-impairment immunity means nobody can stall the rotation once it's tight.

It's a legitimate option, not a trap — but it's the situational pick. For most content, the ATK-leaning split is the default because the execution is his entire identity, and an eclipse that comes up half a second sooner but doesn't kill is worse than one that lands a beat later and does. If you only gear him one way, gear him ATK-leaning. If you specifically need his lockdown earlier in a particular bracket, the cooldown set is the deliberate trade — commit to it instead of mixing the two halfway.

## Beascuit pick — ATK and his elements

The beascuit slot follows the same logic as the toppings: **prioritize ATK**, and where you can, lean into his **Darkness** or **Steel** element, since those are the damage types his eclipse deals. A beascuit tuned to amplify those scales the exact thing his kit is built around, which beats a generic stat beascuit.

Stat priority on the beascuit: **ATK% > Cooldown > DMG Resist Bypass > HP** — the same shape as his substats, because the beascuit is just one more place to feed the bruiser-assassin profile. A high-quality Beast-tier beascuit is the ceiling here, but any beascuit you can stack ATK on does the core job. Don't bring a pure-HP or pure-defense beascuit to this build — it looks like more survival and is actually a weaker kill, and his kit already covers a chunk of the survival floor on its own.

## Tart and treasure picks

Two routes, matched to your topping build:

**ATK tart (Searing Raspberry tart).** The pairing for the standard ATK-leaning split — it stacks with your Raspberry toppings to push the eclipse damage as high as it goes, which is what you want when the kill is the priority and his kit covers part of the survival floor. This is the default.

**Cooldown tart (Swift Chocolate tart).** Only for the cooldown-leaning alternate, when getting the lockdown and execution online faster genuinely wins the fight. Don't mix a cooldown tart into a damage set without a reason — pick a lane.

For treasures, the through-line holds: lead with anything that amplifies damage or speeds his cooldown so the eclipse lands sooner, plus a survivability treasure because he's a frontliner who has to live to cast. Battle-start cooldown is especially good on him since Fury of the Catacombs is already working from the opening — getting his skill into that window faster compounds. The [treasures guide](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide) covers the current best-in-slot options and how they stack.

## Magic Candy for Silent Salt

![Silent Salt Cookie in his default battle pose, the front-positioned Ambush Beast whose Magic Candy deepens his execution kit.](/images/blog/cookie-run-kingdom/silent-salt-cookie-toppings-build/silent-salt-cookie-standing.webp)

Magic Candy is where a Beast cookie goes from "good" to "why is that carry already dead," and Silent Salt is no exception. His Magic Candy deepens the kit that's already pulling double duty as a front-line body and a carry-killer — more out of the eclipse damage and the effects around End of Silence — which on a bruiser-assassin compounds with both halves of what he does.

Leveling priority is the usual: get it equipped and leveled to a functional baseline before you call the build done, then push it higher if he's a fixture in your serious Arena or high-tier PvE teams. Because his value is split across damage and front-line survival, every level reinforces a cookie you'll keep deployed for a long time. For where he should sit in your overall Soul Essence spending, the [Magic Candy priority guide](/blog/cookie-run-kingdom/crk-magic-candy-priority-guide) has the framework — and as a pulled Beast, he generally sits near the front of that line.

## Team comps and where he fits

Silent Salt is an unusual front-liner: he's standing where your tank usually goes, but he's there to assassinate, not to soak. That changes how you build around him — you still want a real anchor, and you want to make sure his execution has a target worth killing:

- **A real tank to share the front:** he survives well thanks to his shield-and-buff kit, but he's an assassin, not a wall, so a damage-reduction anchor from the [tank tier list](/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked) — a Hollyberry type — keeps the whole front standing while End of Silence comes up. Don't ask him to solo-tank just because he's positioned up front.
- **A second carry or amplifier:** Fury of the Catacombs and the Taken DMG amplification debuff he stacks on the enemy carry are a force multiplier — pair him with a hard hitter from the [DPS tier list](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked) or an amplifier from the [support tier list](/blog/cookie-run-kingdom/best-crk-support-cookies-ranked) who can cash in while the enemy is Silenced, Petrified, and amplified.
- **A healer, flexed by mode:** his kit shields and buffs himself, so in fast Arena you can often skip a dedicated healer for more damage; in long PvE you'll want sustain to keep the front topped while he recurs his skill.

He slots into the shells the [Kingdom Arena meta team](/blog/cookie-run-kingdom/kingdom-arena-meta-team) and the [Guild Battle teams guide](/blog/cookie-run-kingdom/guild-battle-teams) lay out — except he's the front line *and* the assassin closing out the enemy carry. He's also a top-tier reason to pull a Beast at all, which the [Beast cookies worth pulling](/blog/cookie-run-kingdom/beast-cookies-ranked-worth-pulling) breakdown covers. Keep him on the front row. He's an Ambush cookie tuned to work from that position — pulling him to the back wastes the front-line shielding his kit is designed around.

## Common Silent Salt build mistakes

In rough order of how often they show up:

1. **Building him as a pure tank because he's on the front.** Position isn't role. He's an Ambush cookie whose entire value is executing the enemy carry. Stack only HP and resist and you've spent a Beast to do a normal tank's job while throwing away the kill. He needs real ATK.

2. **Building him as a pure glass cannon.** The opposite error. Stack only ATK and skip the bulk and he gets focused down up front before the eclipse lands. Keep HP and his self-shielding in the picture, and lean on cooldown so he casts on time.

3. **Skipping DMG Resist Bypass.** It's one of the stats the wiki lists for him for a reason — his damage already ignores a chunk of resist, and more makes him devastating against DEF-stacked enemies. Leaving it off is leaving free damage on the table against exactly the tanky targets he's meant to punch through.

4. **A pure-HP or defensive beascuit on the damage build.** Same mistake as #1, different slot. The beascuit is an ATK-and-element slot first.

5. **Mixing a cooldown tart into the ATK split (or vice versa).** Pick a lane. The standard build wants the ATK tart; only the deliberate cooldown-leaning route wants the cooldown tart.

6. **Pulling him off the front row.** He's an Ambush cookie tuned to fight from the front, with shield-and-buff mechanics that assume he's there. Put him in the back and you expose him outside the position his kit is built for and lose part of his survivability. Keep him up front.

## Quick Action Checklist

- Equip an ATK-leaning Searing Raspberry / Swift Chocolate split as the standard build (lean Raspberry-heavy)
- Prioritize ATK% substats, then Cooldown, then DMG Resist Bypass, then HP — and don't reroll forever
- Take ATK% over flat ATK every time
- Don't skip DMG Resist Bypass — it's on his recommended stat list and shreds tanky targets
- Run an ATK-priority beascuit, ideally one leaning into his Darkness or Steel element
- Pair an ATK tart with the standard build; only use a cooldown tart for the deliberate cooldown-leaning route
- The cooldown-heavy set is the situational pick for earlier, more frequent lockdowns
- Lead with damage-amp, battle-start cooldown, and survivability treasures
- Equip and level Magic Candy; push it higher if he's a core fixture
- Keep him on the front row, never the back
- Build the team with a real tank to share the front and a second carry or amplifier to cash in his debuffs`,

  faq: [
    {
      question: 'What are the best toppings for Silent Salt Cookie?',
      answer:
        "An ATK-leaning split of Searing Raspberry (ATK) and Swift Chocolate (cooldown) is the standard build, which matches the wiki's own recommended topping flavors for him. Silent Salt is a Beast Ambush cookie whose value is executing the enemy's highest-ATK carry, so you want ATK for the kill plus enough cooldown that his End of Silence skill lands on time. Prioritize ATK% substats, then Cooldown, then DMG Resist Bypass, then HP. A more cooldown-heavy variant is a legitimate alternate for getting his lockdown online earlier, but the ATK-leaning split is the default.",
    },
    {
      question: 'What class and rarity is Silent Salt Cookie?',
      answer:
        "Silent Salt Cookie is a Beast-rarity, Ambush-class cookie positioned on the Front line, with Darkness and Steel elements. He is the fifth and final of the Five Beasts and the closer to the Beast-Yeast storyline, released globally in late September 2025. Despite standing on the front line where a tank usually goes, he plays as an assassin: his kit hunts the enemy's highest-ATK cookie, Silences and Petrifies targets, bypasses a chunk of their DMG Resist, and executes through his Fury of the Catacombs and eclipse burst.",
    },
    {
      question: 'Should I build Silent Salt for attack or for tankiness?',
      answer:
        "Both, leaning attack — he's a bruiser-assassin, not a pure DPS or a pure wall. The wiki lists ATK, Cooldown, DMG Resist Bypass, and HP as his stats, and that's the shape of the build: ATK so the execution actually kills, cooldown so his skill lands on time, DMG Resist Bypass to punch through DEF, and HP to survive the front row. His own kit covers part of the survival floor — a shield plus DMG Resist and Cooldown Recovery buffs when enemies try to slow his cooldown — which is why you can keep real ATK on a front-line cookie instead of going full tank.",
    },
    {
      question: 'What does Silent Salt Cookie\'s skill do?',
      answer:
        "His skill, End of Silence, summons his steed Nox Black Salt, locks enemies into a recurring Silence (Silence Eternal), then charges in and cuts the eclipsed moon to make it explode for heavy damage that scales off his ATK plus a portion of the target's Max HP, with about 40% DMG Resist Bypass on both hits. It Petrifies and stacks a Taken DMG amplification on the target. From the start of the fight, Fury of the Catacombs stacks a punishing debuff on the highest-ATK enemy and jumps to the next when that target dies, and once your team's HP drops low it triggers a finisher on the strongest enemies. His Forsaken Freedom also makes him immune to cooldown-impairing effects, converting them into a shield and buffs.",
    },
    {
      question: 'What team should I run with Silent Salt Cookie?',
      answer:
        "Pair him with a real damage-reduction tank to share the front line — like a Hollyberry type — so he isn't asked to solo-tank just because he's positioned up front, plus a second carry or an amplifier to cash in the Silence, Petrify, and Taken DMG amplification he stacks on the enemy carry. Flex the last slot by mode: in fast Arena his self-shielding lets you skip a dedicated healer for more damage, while long PvE fights want sustain to keep the front topped while he recurs End of Silence. Keep him on the front row, where his Ambush kit is designed to work.",
    },
    {
      question: 'Does Silent Salt Cookie need Magic Candy?',
      answer:
        "If he's a fixture in your serious Arena or high-tier PvE teams, yes. His Magic Candy deepens a kit that already pulls double duty as a front-line body and a carry-killer, so it reinforces both halves of what he does. Get it equipped and leveled to a functional baseline first, then push it higher as he becomes a core part of your roster. As a pulled Beast, he generally sits near the front of the Magic Candy priority order, since a Beast you've committed to is worth investing in.",
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/crk-toppings-guide', anchor: 'toppings guide' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide', anchor: 'treasures guide' },
    { href: '/blog/cookie-run-kingdom/crk-magic-candy-priority-guide', anchor: 'Magic Candy priority guide' },
    { href: '/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked', anchor: 'tank tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked', anchor: 'DPS tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-support-cookies-ranked', anchor: 'support tier list' },
    { href: '/blog/cookie-run-kingdom/beast-cookies-ranked-worth-pulling', anchor: 'Beast cookies worth pulling' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team' },
    { href: '/blog/cookie-run-kingdom/guild-battle-teams', anchor: 'Guild Battle teams guide' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Silent_Salt_Cookie', title: 'Cookie Run: Kingdom Wiki — Silent Salt Cookie' },
    { url: 'https://www.pocketgamer.com/cookie-run-kingdom/silent-salt-cookie-guide-beascuits-toppings/', title: 'Pocket Gamer — Silent Salt Cookie Beascuits and Toppings guide' },
    { url: 'https://gamerant.com/cookie-run-kingdom-silent-salt-cookie-build-best-toppings/', title: 'Game Rant — Silent Salt Cookie Build and Best Toppings' },
  ],

  tldr:
    "Silent Salt Cookie is the fifth and final Beast — a Beast-rarity Ambush cookie positioned on the Front line, with Darkness and Steel elements. Despite his front-line spot, he's an assassin: his End of Silence skill hunts the enemy's highest-ATK carry (Fury of the Catacombs), Silences and Petrifies, bypasses ~40% DMG Resist, and executes for ATK plus a portion of Max HP, while his Forsaken Freedom turns cooldown disruption into a shield and buffs. Build him as a bruiser-assassin, not a wall or a glass cannon: an ATK-leaning Searing Raspberry / Swift Chocolate topping split with substats prioritizing ATK%, then Cooldown, then DMG Resist Bypass, then HP, plus an ATK-and-element beascuit and an ATK tart. A cooldown-heavy variant is a situational alternate. Level his Magic Candy if he's a core fixture, keep him on the front row, and pair him with a real tank to share the front and a second carry to cash in his debuffs.",

  itemList: {
    name: 'Silent Salt Cookie Build Summary',
    items: [
      { name: 'Toppings — ATK / Cooldown split (Searing Raspberry + Swift Chocolate)', description: 'The standard build, matching his wiki-recommended flavors. Lean Raspberry-heavy for the execution, with cooldown to land End of Silence on time.' },
      { name: 'Substats — ATK% > Cooldown > DMG Resist Bypass > HP', description: 'ATK% for the kill, cooldown for tempo, DMG Resist Bypass to punch through DEF, HP to survive the front row. Take ATK% over flat ATK.' },
      { name: 'Beascuit — ATK priority, Darkness/Steel lean', description: 'ATK% > Cooldown > DMG Resist Bypass > HP, ideally amplifying his Darkness or Steel damage. Never a pure-defense beascuit.' },
      { name: 'Tart — ATK (Searing Raspberry)', description: 'Stacks with the Raspberry toppings to push eclipse damage. A cooldown tart only for the deliberate cooldown-leaning variant.' },
      { name: 'Treasures — damage-amp, battle-start cooldown, survivability', description: 'Battle-start cooldown gets the eclipse into the Fury of the Catacombs window sooner; survivability keeps a frontliner alive to cast.' },
      { name: 'Magic Candy — equip and level', description: 'Deepens the execution-and-survival kit. A pulled Beast sits near the front of the priority order.' },
    ],
  },
};
