import type { BlogPost } from '../../blogTypes';

export const burningSpiceCookieToppingsBuild: BlogPost = {
  slug: 'burning-spice-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'burning-spice-build',

  title: 'Burning Spice Cookie Toppings Build & Guide',
  metaDescription:
    'Burning Spice Cookie build guide for June 2026: the Searing Raspberry topping spread, substat priorities, beascuit and tart picks, Magic Candy, and team fit.',
  excerpt:
    "Burning Spice is the Beast cookie that does two jobs at once — he tanks the front line and deals enormous Fire damage by burning his own lifeforce. Build him like a glass cannon and he dies; build him like a pure wall and you waste the damage. Here is the build that threads it — toppings, substats, beascuit, Magic Candy, and team fit.",
  featuredImagePrompt:
    'Burning Spice Cookie center frame, the God of Destruction mid-transformation with molten cracks across his armor and a wall of flame erupting behind him, deep crimson and obsidian palette with ember sparks, Cookie Run: Kingdom key-art style, painterly cel-shaded, dramatic backlighting',
  heroImage: '/images/blog/cookie-run-kingdom/burning-spice-cookie-toppings-build/burning-spice-cookie.webp',
  heroImageAlt: 'Burning Spice Cookie, the Beast-rarity Charge cookie and front-line damage-tank this June 2026 build guide is for.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/burning-spice-cookie-toppings-build/burning-spice-cookie.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Burning_Spice_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/burning-spice-cookie-toppings-build/hollyberry-cookie.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Hollyberry_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    { src: '/images/gear/toppings/raspberry.png', sourceUrl: 'owned-asset' },
  ],

  publishDate: '2026-06-02T00:00:00.000Z',
  lastUpdated: '2026-06-02T00:00:00.000Z',

  primaryKeyword: 'burning spice cookie toppings',
  secondaryKeywords: [
    'burning spice cookie build',
    'best toppings burning spice',
    'burning spice beascuit',
    'burning spice magic candy',
    'crk burning spice guide',
    'burning spice cookie team',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 10,

  toc: [
    { id: 'who-burning-spice-actually-is', label: 'Who Burning Spice actually is', level: 2 },
    { id: 'the-tension-that-defines-his-build', label: 'The tension that defines his build', level: 2 },
    { id: 'the-standard-burning-spice-topping-build', label: 'The standard Burning Spice topping build', level: 2 },
    { id: 'substat-priorities-without-the-fake-numbers', label: 'Substat priorities without the fake numbers', level: 2 },
    { id: 'the-cooldown-alternate-build', label: 'The cooldown alternate build', level: 2 },
    { id: 'beascuit-pick-burn-and-fire-damage', label: 'Beascuit pick — burn and Fire damage', level: 2 },
    { id: 'tart-and-treasure-picks', label: 'Tart and treasure picks', level: 2 },
    { id: 'magic-candy-for-burning-spice', label: 'Magic Candy for Burning Spice', level: 2 },
    { id: 'team-comps-and-where-he-fits', label: 'Team comps and where he fits', level: 2 },
    { id: 'common-burning-spice-build-mistakes', label: 'Common Burning Spice build mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Burning Spice is the cookie that refuses to pick a lane, and that's the whole reason people misbuild him. He stands on the front line and eats hits like a tank, then turns around and deletes the enemy back row with Fire damage that scales off his own lifeforce. So players reflexively gear him one of two wrong ways: full damage like a glass cannon, in which case he dies before the payoff, or full bulk like a wall, in which case you've thrown away the reason to run a Beast over a normal tank. The correct build threads both, and it's not complicated once you see what his kit is doing.

This is the June 2026 build sheet for him: toppings, substats, beascuit, tart, Magic Candy, team fit, and the specific mistakes that turn a Beast into a benchwarmer. Where the community has fabricated precise substat roll-targets, I'm going to tell you the direction instead of a fake number — because the wrong number gets copy-pasted forever and the direction is what actually matters.

## Who Burning Spice actually is

![Burning Spice Cookie mid-transformation in front of a wall of flame, the Beast-rarity Charge damage-tank this build is for.](/images/blog/cookie-run-kingdom/burning-spice-cookie-toppings-build/burning-spice-cookie.webp)

Get the identity right before you spend a single topping. Burning Spice Cookie is **Beast rarity** — one of the Five Beasts, among the hardest cookies in the game to pull — and his class is **Charge**, which positions him on the **Front** line. That's the key fact: he is a frontliner, not a back-row nuker. He's a damage-dealing tank in the same mold as Dark Cacao, except dialed up to Beast power, and he was added in the "Shadow of the Destroyer" update.

His skill, **Tyrant's Wrath**, is a self-sacrifice engine. He spends his own lifeforce to release his inner God of Destruction: he dispels debuffs off himself, gains a **Berserker** buff, and becomes immune to most debuffs (Curse being the exception) for a stretch. While transformed he **steals ATK from his allies** to fuel a large attack boost, then deals Fire damage in a series of hits capped by a ground slam that stuns. He layers a **burn debuff** that lowers enemy attack and speed, and — the part that makes him durable — if he's defeated, he gets a one-time **immortality window** before actually going down.

So read the kit as a whole: he's a frontline body that survives focus fire through the immortality window and the Berserker buff, while putting out real Fire damage and shutting down the enemy with burn and a stun. He soaks *and* threatens. That dual identity is the entire build.

## The tension that defines his build

Here's the fork. A pure DPS cookie like Sea Fairy is easy — stack ATK, protect the cast. A pure tank like Hollyberry is easy too — stack HP and damage resist, hold the line. Burning Spice is neither, because he needs to *live on the front line long enough to deal his damage*, and those two needs pull in different directions.

The resolution most of the community has converged on: **build him as a damage-tank, with ATK and damage resistance together, not one at the expense of the other.** You want enough survivability that he isn't deleted the moment he's exposed up front, and enough attack that the Fire damage actually hurts when Tyrant's Wrath goes off. His own kit helps — the immortality window and the Berserker debuff-immunity buy him survival time the build doesn't have to fully fund — which is exactly why you can afford to keep real ATK on a frontliner here.

The takeaway: don't gear him like a glass cannon and don't gear him like a brick. Gear him to be a fire-breathing wall that punishes whatever's hitting it.

## The standard Burning Spice topping build

![Searing Raspberry topping icon, the ATK-and-resistance set that forms the backbone of the standard Burning Spice build.](/images/gear/toppings/raspberry.png)

**5x Searing Raspberry (ATK) toppings.** That's the standard, and it's the consensus pick.

The standard:

- **Toppings:** 5x Searing Raspberry (ATK)
- **Beascuit:** a Fire-damage / burn-oriented beascuit
- **Tart:** an ATK tart for the damage-tank build
- **Magic Candy:** equipped and leveled

The reason Searing Raspberry wins over a pure-defense set is that his survivability is partly *baked into his kit* — the immortality window and Berserker buff cover the front-line risk — so the toppings are where you push his damage, while substats backfill the resistance. You're not choosing damage over survival; you're letting his skill handle the survival floor and using gear to raise the damage ceiling. There's a legitimate cooldown-leaning alternate (more on that below), but for the general case, Searing Raspberry is the build.

If you're new to how topping sets and substats interact, the [toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide) covers the fundamentals this build assumes.

## Substat priorities without the fake numbers

Substats are where most of a build's quality lives, and they're also where the CRK community most loves to invent exact percentages nobody can actually verify. I'm not going to hand you a fake "you need exactly 41.3% DMG Resist" target. Here's the honest version.

Priority order on your substats:

1. **DMG Resist** — the survivability stat that keeps a front-line Beast standing through focus fire. On a frontliner this matters more than it would on a back-row nuker, because he's the one actually getting hit. Roll for it first.
2. **Cooldown** — so Tyrant's Wrath comes online sooner and recurs in longer fights. The faster he transforms, the faster the immortality window and the damage are available.
3. **ATK%** — the multiplier on his Fire damage. Take ATK% over flat ATK; the percentage scales with his base stat and the flat number doesn't.

The practical rule: **roll for DMG Resist and Cooldown to keep him alive and casting, take ATK% as your damage multiplier, and don't chase a perfect set.** A frontline damage-tank wants a healthy spread, not a single maxed stat — he's doing two jobs, so his substats serve both. Substats have diminishing returns past a reasonable spread, so once he survives the opening and his skill is firing, the effort is better spent building your next cookie. Hit "tanky enough to live, hitting hard enough to matter" and stop.

## The cooldown alternate build

There's a real second build worth knowing: a **cooldown-leaning set** (the Destructive Swift Chocolate route) for players who want Tyrant's Wrath up as early and as often as possible. Getting the transformation, the stun, and the immortality window online faster has obvious value in fast Arena exchanges and in any fight where his crowd control matters more than the raw size of his hits.

It's a real option, not a trap — but it's the situational pick. For most content, the Searing Raspberry damage-tank build is the default because his survivability comes partly from his kit, so spending your topping slots on raw damage pays off harder than shaving seconds off a cooldown he can already reach. If you only gear him one way, gear him Searing Raspberry. If you specifically need his skill earlier in a particular bracket, the cooldown set is the deliberate trade — just commit to it rather than mixing the two halfway.

## Beascuit pick — burn and Fire damage

The beascuit slot is where Burning Spice gets to specialize, because his damage is **Fire** damage and he stacks **burn**. A burn-and-Fire-oriented beascuit — the kind tuned to amplify Fire damage and burn effects — scales the exact thing his kit is built around, which makes it a better fit than a generic stat beascuit.

Stat priority on the beascuit follows the same logic as the rest of the build: lean on the effects that boost his Fire damage and burn, then back it with DMG Resist to keep the front-line body alive, with ATK% underneath as the multiplier. A high-quality Beast-tier beascuit is the ceiling here, but any beascuit you can stack his core effects on does the job. Don't bring a beascuit tuned for a damage type or role that has nothing to do with him — match the beascuit to the Fire-and-burn identity.

## Tart and treasure picks

Two routes, matched to your topping build:

**ATK tart.** This is the pairing for the standard Searing Raspberry damage-tank build. It stacks with your ATK toppings to push his Fire damage as high as it goes, which is what you want when his survivability is already handled by the kit and the resist substats. This is the default.

**Cooldown tart.** This is for the cooldown-leaning alternate build, when getting Tyrant's Wrath online faster genuinely wins the fight. Don't mix a cooldown tart into a full damage-tank set unless you've deliberately chosen the tempo route — pick a lane.

For treasures, the through-line is the same as his build: lead with anything that amplifies damage or improves his front-line survivability, plus a battle-start cooldown treasure if you want his transformation sooner. Because he's a frontliner who has to live to deal his damage, durability-and-tempo treasures pull double duty for him. The [treasures guide](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide) covers the current best-in-slot options and how they stack.

## Magic Candy for Burning Spice

Magic Candy is where a Beast cookie goes from "good" to "why is he doing that much," and Burning Spice is no exception. His Magic Candy deepens the kit that's already pulling double duty — more out of his Fire damage and the effects around Tyrant's Wrath — which on a damage-tank compounds with both halves of what he does.

Leveling priority is the usual: get it equipped and leveled to a functional baseline before you call the build done, then push it higher if he's a front-line anchor in your serious Arena or high-tier PvE teams. Because his value is split across damage and survival, every level of Magic Candy is reinforcing a cookie you'll keep on the front line for a long time. For where he should sit in your overall Soul Essence spending, the [Magic Candy priority guide](/blog/cookie-run-kingdom/crk-magic-candy-priority-guide) has the framework. A pulled Beast generally sits near the front of that line.

## Team comps and where he fits

![Hollyberry Cookie raising her shield, the kind of team-wide damage reduction that lets Burning Spice survive and deal his damage on the front line.](/images/blog/cookie-run-kingdom/burning-spice-cookie-toppings-build/hollyberry-cookie.webp)

Burning Spice is unusual because he's both your front line and a real damage source, which frees up a slot most teams spend on a separate tank. But "he can tank" isn't "he should solo the front" — build the rest of the team to let him survive and swing:

- **A second durable body or a damage-reduction support:** he steals ATK from allies during Tyrant's Wrath, so pair him with cookies that can absorb that brief cost. A damage-reduction tank like Hollyberry from the [tank tier list](/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked) keeps the whole front standing while he transforms, and the team-wide reduction stacks cleanly with his own survivability.
- **A buffer or debuffer:** his Fire damage is multiplicative with a team ATK buff and a DEF-shred debuff, so a support from the [support tier list](/blog/cookie-run-kingdom/best-crk-support-cookies-ranked) raises his ceiling without competing for his slot. Watch the ATK-steal interaction — the buff still helps net, but plan around the brief drain.
- **A healer or second damage source:** flex this by mode. In long PvE fights a healer keeps the front line topped while he recurs his skill; in fast Arena you might bring more burst to close before the immortality window even matters.

He slots into the kind of shells the [Kingdom Arena meta team](/blog/cookie-run-kingdom/kingdom-arena-meta-team) and the [Guild Battle teams guide](/blog/cookie-run-kingdom/guild-battle-teams) lay out — except he's the front line *and* part of the damage. Keep him up front. He's a Charge cookie; that's where his kit is designed to work, and pulling him off the front wastes the tank half of his identity.

## Common Burning Spice build mistakes

In rough order of how often they show up:

1. **Building him as a pure glass-cannon DPS.** He's a frontliner. Stack only ATK and skip the resistance and he gets deleted before Tyrant's Wrath pays off, immortality window or not. Keep DMG Resist in the mix.

2. **Building him as a pure brick.** The opposite error. Stack only HP and resist and you've spent a Beast to do a normal tank's job while throwing away the Fire damage that's the whole reason to run him. He needs real ATK too.

3. **A mismatched beascuit.** His damage is Fire and he stacks burn — a beascuit tuned to amplify those scales his kit far better than a generic one. Don't waste the slot on effects that don't touch his identity.

4. **Mixing a cooldown tart into the damage-tank set (or vice versa).** Pick a lane. The Searing Raspberry build wants the ATK tart; only the deliberate cooldown route wants the cooldown tart.

5. **Ignoring the ATK-steal interaction with his team.** Tyrant's Wrath pulls ATK from allies. It nets out fine, but don't pair him in a way that cripples a teammate who depends on every point of their own attack at the wrong moment — plan the comp around the brief drain.

6. **Pulling him off the front row.** He's a Charge cookie built to tank and brawl up front. Put him in the back and you lose the tank half of his value and expose him outside the position his kit is tuned for. Keep him on the front line.

## Quick Action Checklist

- Equip 5x Searing Raspberry (ATK) as the standard damage-tank build
- Prioritize DMG Resist and Cooldown substats to keep him alive and casting, then ATK% as the damage multiplier — and don't reroll forever
- Take ATK% over flat ATK every time
- Run a burn / Fire-damage-oriented beascuit, matched to his kit
- Pair an ATK tart with the standard build; only use a cooldown tart for the deliberate cooldown route
- The cooldown-leaning (Destructive Swift Chocolate) set is the situational pick for earlier, more frequent casts
- Lead with damage-amp, survivability, and battle-start cooldown treasures
- Equip and level Magic Candy; push it higher if he's a front-line anchor
- Keep him on the front row, never the back
- Build the team to support the front and account for his ally ATK-steal`,

  faq: [
    {
      question: 'What are the best toppings for Burning Spice Cookie?',
      answer:
        "5x Searing Raspberry (ATK) is the standard build, because Burning Spice is a front-line damage-tank whose survivability is partly baked into his kit — the immortality window and Berserker buff — so you spend topping slots pushing his Fire damage and backfill resistance through substats. Prioritize DMG Resist and Cooldown substats to keep him alive and casting, then ATK% as the multiplier. There's a legitimate cooldown-leaning alternate (Destructive Swift Chocolate) for getting his skill online earlier, but Searing Raspberry is the default.",
    },
    {
      question: 'What class and rarity is Burning Spice Cookie?',
      answer:
        "Burning Spice Cookie is a Beast-rarity, Charge-class cookie positioned on the Front line. He is one of the Five Beasts — among the hardest cookies in the game to obtain — and was added in the Shadow of the Destroyer update. As a Charge cookie he's a damage-tank in the mold of Dark Cacao but at Beast power: he holds the front line, eats hits, and deals heavy Fire damage with his skill, so he fills both the tank and a damage role at once.",
    },
    {
      question: 'What does Burning Spice Cookie\'s skill do?',
      answer:
        "His skill, Tyrant's Wrath, spends his own lifeforce to release his inner God of Destruction. He dispels debuffs off himself, gains a Berserker buff, and becomes immune to most debuffs except Curse for a stretch, while stealing ATK from his allies to fuel a large attack boost. He then deals Fire damage in a series of hits ending in a ground slam that stuns, and applies a burn debuff that lowers enemy attack and speed. Crucially, if he's defeated he gets a one-time immortality window before going down, which is a big part of his front-line survivability.",
    },
    {
      question: 'Should I build Burning Spice for attack or for tankiness?',
      answer:
        "Both — he's a damage-tank, not a pure DPS or a pure wall. Build him as a frontliner who survives long enough to deal his Fire damage: Searing Raspberry (ATK) toppings for the damage, with DMG Resist and Cooldown as your priority substats for survival and tempo, then ATK% as the multiplier. His own kit covers part of the survival floor through the immortality window and debuff-immunity, which is exactly why you can afford to keep real attack on a front-line cookie instead of going full brick.",
    },
    {
      question: 'What team should I run with Burning Spice Cookie?',
      answer:
        "Build the team to support the front line and account for his ally ATK-steal. He tanks and deals damage himself, which frees a slot, but pair him with a damage-reduction support like Hollyberry to keep the whole front standing while he transforms, plus a buffer or DEF-shred debuffer to multiply his Fire damage. Flex a healer for long PvE fights or extra burst for fast Arena. Keep him on the front row where his Charge kit is designed to work — pulling him to the back wastes the tank half of his value.",
    },
    {
      question: 'Does Burning Spice Cookie need Magic Candy?',
      answer:
        "If he's a front-line anchor in your serious Arena or high-tier PvE teams, yes. His Magic Candy deepens a kit that already pulls double duty as both a tank and a damage dealer, so it reinforces both halves of what he does. Get it equipped and leveled to a functional baseline first, then push it higher as he becomes a core part of your roster. As a pulled Beast, he generally sits near the front of the Magic Candy priority order, since a Beast you've committed to is worth investing in.",
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/crk-toppings-guide', anchor: 'toppings guide' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide', anchor: 'treasures guide' },
    { href: '/blog/cookie-run-kingdom/crk-magic-candy-priority-guide', anchor: 'Magic Candy priority guide' },
    { href: '/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked', anchor: 'tank tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-support-cookies-ranked', anchor: 'support tier list' },
    { href: '/blog/cookie-run-kingdom/beast-cookies-ranked-worth-pulling', anchor: 'Beast cookies worth pulling' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team' },
    { href: '/blog/cookie-run-kingdom/guild-battle-teams', anchor: 'Guild Battle teams guide' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Burning_Spice_Cookie', title: 'Cookie Run: Kingdom Wiki — Burning Spice Cookie' },
    { url: 'https://www.pocketgamer.com/cookie-run-kingdom/burning-spice-cookie-guide-beascuits-toppings/', title: 'Pocket Gamer — Burning Spice Cookie Beascuits and Toppings guide' },
    { url: 'https://gamerant.com/cookie-run-kingdom-burning-spice-cookie-build-best-toppings/', title: 'Game Rant — Burning Spice Cookie Build and Best Toppings' },
  ],

  tldr:
    "Burning Spice Cookie is a Beast-rarity Charge cookie on the front line — a damage-tank that holds the front and deals heavy Fire damage with his Tyrant's Wrath skill (which grants a Berserker buff, debuff immunity, an ally ATK-steal, a burn debuff, and a one-time immortality window). Build him as a damage-tank, not a glass cannon or a pure wall: 5x Searing Raspberry (ATK) toppings, with DMG Resist and Cooldown as priority substats and ATK% as the multiplier, plus a burn/Fire-oriented beascuit and an ATK tart. A cooldown-leaning Destructive Swift Chocolate set is a situational alternate for earlier casts. Level his Magic Candy if he's a front-line anchor, keep him on the front row, and build the team to support the front and account for his ATK-steal.",
};
