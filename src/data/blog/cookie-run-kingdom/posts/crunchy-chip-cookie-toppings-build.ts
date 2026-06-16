import type { BlogPost } from '../../blogTypes';

export const crunchyChipCookieToppingsBuild: BlogPost = {
  slug: 'crunchy-chip-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'crunchy-chip-build',

  title: 'Crunchy Chip Cookie Toppings Build & Guide',
  metaDescription:
    'Crunchy Chip Cookie build guide for June 2026: best toppings, the CRIT-vs-Almond debate, substats, beascuit, Magic Candy, and the teams where his wolf actually matters.',
  excerpt:
    "Crunchy Chip is the Epic Charge frontliner everyone owns and almost nobody builds right. He summons a wolf, strips enemy buffs, and slows their hardest hitter to a crawl — but only if you don't gear him like a generic tank. Here's the full sheet: toppings, the Almond-vs-Apple-Jelly split, substats, beascuit, Magic Candy, and where he earns a slot.",
  featuredImagePrompt:
    'Crunchy Chip Cookie center frame as the captain of the Cream Wolves, a battle-scarred Darkness frontliner mid-charge with his greatsword raised and a snarling spectral cream wolf lunging beside him, deep charcoal and crimson palette with cold blue claw-mark slashes streaking the air, Cookie Run: Kingdom key-art style, painterly cel-shaded, dramatic rim lighting',
  heroImage: '/images/cookies/crunchy-chip-cookie.png',
  heroImageAlt: 'Crunchy Chip Cookie, the Epic Charge-class Darkness frontliner this June 2026 toppings build guide is for.',
  imageSources: [
    { src: '/images/cookies/crunchy-chip-cookie.png', sourceUrl: 'owned-asset' },
    {
      src: '/images/blog/cookie-run-kingdom/crunchy-chip-cookie-toppings-build/crunchy-chip-illustration.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Crunchy_Chip_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    { src: '/images/gear/toppings/almond.png', sourceUrl: 'owned-asset' },
    { src: '/images/gear/toppings/apple-jelly.png', sourceUrl: 'owned-asset' },
  ],

  publishDate: '2026-06-11T00:00:00.000Z',
  lastUpdated: '2026-06-11T00:00:00.000Z',

  primaryKeyword: 'crunchy chip cookie toppings',
  secondaryKeywords: [
    'crunchy chip cookie build',
    'best toppings crunchy chip',
    'crunchy chip beascuit',
    'crunchy chip magic candy',
    'crk crunchy chip guide',
    'crunchy chip cookie team',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 11,

  toc: [
    { id: 'who-crunchy-chip-actually-is', label: 'Who Crunchy Chip actually is', level: 2 },
    { id: 'what-his-kit-actually-does', label: 'What his kit actually does', level: 2 },
    { id: 'the-build-question-tank-or-bruiser', label: 'The build question: tank or bruiser', level: 2 },
    { id: 'the-standard-crunchy-chip-topping-build', label: 'The standard Crunchy Chip topping build', level: 2 },
    { id: 'substat-priorities-without-the-fake-numbers', label: 'Substat priorities without the fake numbers', level: 2 },
    { id: 'beascuit-and-tart-picks', label: 'Beascuit and tart picks', level: 2 },
    { id: 'magic-candy-for-crunchy-chip', label: 'Magic Candy for Crunchy Chip', level: 2 },
    { id: 'team-comps-and-where-he-fits', label: 'Team comps and where he fits', level: 2 },
    { id: 'common-crunchy-chip-build-mistakes', label: 'Common Crunchy Chip build mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Crunchy Chip is the cookie almost every account owns and almost nobody builds correctly. He gets pulled early, parked on the front line as "a tank," geared with pure HP, and then quietly underperforms for the next year — because the player never figured out that he is not a tank. He is a disruptive Charge frontliner whose entire job is to charge in, summon a wolf, strip the enemy's buffs, and choke their biggest damage dealer with a stacking attack-speed slow. Build him like a wall and you throw away the disruption that's the whole point of running him; build him to do his job and a free Epic earns a slot in real teams.

This is the June 2026 build sheet for him: toppings, substats, beascuit, tart, Magic Candy, and team fit, plus the mistakes that turn a useful debuffer into a body that stands there. Where the community has invented exact substat roll-targets, I'm giving you the direction instead of a fake number, because the wrong number gets copy-pasted forever and the direction is what actually moves your results.

## Who Crunchy Chip actually is

![Crunchy Chip Cookie, captain of the Cream Wolves, the Epic Charge-class Darkness frontliner this build is for.](/images/blog/cookie-run-kingdom/crunchy-chip-cookie-toppings-build/crunchy-chip-illustration.webp)

Get the identity right before you spend a single topping. Crunchy Chip Cookie is **Epic rarity**, his class is **Charge**, and his position is prioritized in the **Front** of the formation. He's a **Darkness-element** cookie from the Dark Cacao Kingdom — the captain of the Cream Wolves and Dark Cacao's bodyguard — and his recommended toppings on the wiki are an **Almond / Apple Jelly** mix. Read his rarity and that topping pairing together and the build is already half-written: he's a farmable Epic who wants both durability and CRIT, not pure bulk.

Here's the framing the rest of the build hangs on: he is a **frontline disruptor, not a tank.** Yes, he stands up front and absorbs the opening exchange, so survival is part of the job. But the reason you run *him* over a dedicated wall is that his kit removes enemy buffs, summons a body that fights for you, and cripples the enemy's hardest hitter. That's disruption — and disruption is wasted if he dies before he applies it or if you gear him so defensively his hits and his CRIT-scaling damage never land. Being Epic is the underrated part of his value: his soulstones drop from regular content, so a free-to-play player can ascend him to full and Magic Candy him without a single lucky pull, which is exactly why he's a fixture on budget teams.

## What his kit actually does

His skill is **Wolf Squadron**, and it runs on a **13-second base cooldown**. The kit has more moving parts than a typical frontliner, so here's what each piece actually does:

- **The charge and the hit.** He charges in and slams the enemy for Darkness damage, and the hit scales partly off his own CRIT% — roughly 185% of his CRIT% is added on top of the base damage. That single line is why CRIT is on his recommended toppings at all: it isn't decoration, it's a real damage multiplier on his cast.
- **The Cream Wolf summon.** He summons a Cream Wolf that fights alongside the team, and its stats scale off Crunchy Chip's own. When the wolf is defeated it becomes enraged, fights independently, and resists interrupt effects — so the summon keeps contributing even after it "dies."
- **Claw Marks (the disruption).** His regular attacks apply Claw Marks to the **highest-ATK enemy.** At three stacks it triggers: it **removes the target's buffs**, reduces their **ATK SPD by 25%** (stacking up to twice), and deals bonus damage. Stripping buffs off the enemy carry and slowing it to a crawl is the reason he's more than a body.
- **Consuming Darkness.** A debuff that lowers the target's CRIT% and Healing, stacking up to three times. Against healers and CRIT-reliant carries that's a quiet but real drag on the enemy team.
- **Tamer passive.** He shares a slice — around 35% — of his summoned creature's buffs, tying his durability and the wolf together rather than treating them as separate pools.

Read it as a whole and the build writes itself: he's a frontliner whose value is disruption plus a self-funded second body. He needs to live long enough to land Claw Marks and keep the wolf out, and his cast wants enough CRIT and damage to actually hurt — so the build is a bruiser's blend of bulk and offense, never one or the other.

## The build question: tank or bruiser

This is the decision that separates a working Crunchy Chip from a wasted one, and it's the question his Almond / Apple Jelly recommendation is quietly answering: **is he a wall or a bruiser?**

The honest answer is bruiser. A pure-tank Crunchy Chip — five durability toppings, zero CRIT — survives fine and does almost nothing else. His Claw Marks still apply, but his cast hits for a fraction of its potential because the CRIT-scaling damage never kicks in, and the wolf, which scales off his stats, comes out softer than it should. You've built an expensive body that strips a few buffs. Meanwhile a pure-CRIT glass build hits harder but folds in the opening exchange, before he's stacked Claw Marks on the enemy carry — and a dead disruptor disrupts nothing.

So he wants both, in a deliberate split, which is exactly why the wiki pairs **Solid Almond (DMG Resist)** with **Juicy Apple Jelly (CRIT%).** Almond keeps him standing through the opening so the disruption lands; Apple Jelly turns his cast and his wolf into real damage instead of a tickle. The practical takeaway, which we cash out in the next section: gear him so he survives the first exchange *and* his hits matter — not one at the cost of the other.

## The standard Crunchy Chip topping build

![Solid Almond topping icon, the Damage Resist set that keeps Crunchy Chip standing through the opening so his Claw Marks disruption lands.](/images/gear/toppings/almond.png)

The build follows the bruiser logic. Two legitimate routes, depending on how much you trust his survivability:

**The balanced bruiser build — 3x Solid Almond (DMG Resist) + 2x Juicy Apple Jelly (CRIT%).** This is the wiki-flavored default and the right pick for most players. The three Almonds give him enough damage resistance to weather the opening and live to stack Claw Marks; the two Apple Jellies put real CRIT behind his cast and the wolf. It's the build that does both halves of his job, and it's the one I'd hand a new player without hesitation.

**The CRIT-leaning build — 3x Juicy Apple Jelly (CRIT%) + 2x Solid Almond (DMG Resist).** Flip the ratio when he's already propped up by a healer or a second front and you want his cast and wolf to bite harder. This is for PvE teams where something else is doing the surviving and you'd rather Crunchy Chip contribute damage and disruption than soak. Don't run this if he's your only front — the extra CRIT is wasted if he's dead before Claw Marks lands.

A note on the alternative people reach for: **5x Solid Almond (pure DMG Resist).** It's defensible only when his single job is to be an unkillable body in front of a precious backline and you genuinely do not care about his damage or his wolf's. That's a narrow case. Most of the time the all-Almond build is the "I geared him like a tank" mistake wearing a justification — you give up the CRIT-scaling cast and a chunk of the wolf's output for survivability he usually doesn't need that much of.

The honest default for most players: **lead with the 3 Almond / 2 Apple Jelly balanced build.** It's the safe, do-both pick, and you graduate to the CRIT-leaning ratio only once he has backup keeping him alive. Either way, **do not build him as a pure tank** — the disruption and the wolf are the reason he's on the team, and both want him alive *and* dangerous.

If you're new to how topping sets and substats interact, the [toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide) covers the fundamentals this build assumes.

## Substat priorities without the fake numbers

![Juicy Apple Jelly topping icon, the CRIT% set that powers Crunchy Chip's cast damage and his Cream Wolf summon.](/images/gear/toppings/apple-jelly.png)

Substats are where most of a build's quality lives, and they're also where the CRK community most loves to invent exact percentages nobody can verify. I'm not going to hand you a fake "you need exactly 27.3% CRIT" target. Here's the honest version, in priority order for a bruiser front:

1. **CRIT%** — your headline offensive stat. His cast adds damage scaled off his CRIT%, and the wolf inherits his stats, so CRIT pays him in two places. Roll it on the Apple Jelly slots and wherever else you can without gutting his survivability.
2. **ATK%** — the partner to CRIT. Once CRIT is landing his hits, ATK% scales the size of the slam and the wolf's damage. Take ATK% over flat ATK every time; the percentage scales with his base stat and the flat number doesn't.
3. **DMG Resist / HP** — the survival floor that lets the disruption happen at all. He has to live through the opening to stack Claw Marks, so a healthy chunk of resistance and HP from the Almond slots and substats is non-negotiable. This is the stat you protect when you're tempted to go all-in on CRIT.
4. **Cooldown** — a real but lower priority, because Wolf Squadron and the wolf both run on the 13-second timer. Shaving cooldown gets the wolf back out and the buff-strip cycling faster. Take it where it doesn't cost you the three stats above.

The practical rule: **roll enough DMG Resist/HP that he reliably survives the opening, then chase CRIT% and ATK% to make his cast and wolf matter, and pick up cooldown where it's free.** Don't chase a perfect set. Substats have diminishing returns past a healthy spread; once he's living through the first exchange and his Claw Marks are landing on the enemy carry, the effort is better spent building the cookies behind him than rerolling for a fraction of a percent.

## Beascuit and tart picks

The beascuit slot follows the same bruiser logic as the toppings: you want a blend, not an extreme. Stat priority on the beascuit: **CRIT% and ATK% for his damage, with DMG Resist or HP for the survival floor.** A CRIT/ATK beascuit with a resistance rider is the sweet spot — it pushes his cast and wolf while keeping him standing. Don't bring a pure-DMG-Resist beascuit unless he's running the narrow unkillable-wall job; on a disruptor it's leaving his damage and his wolf undertuned. Any beascuit you can stack a little CRIT, ATK, and survivability on does the core job — a perfect one is the ceiling, not the requirement.

For the tart, match it to your topping route:

- **CRIT or ATK tart.** The natural pairing for the balanced and CRIT-leaning builds — it backs the damage half of his kit and makes the wolf hit harder. Strong default.
- **Survivability tart.** Reach for this only if he's getting bursted down before Claw Marks lands and you can't fix it through a healer or a second front. It keeps him alive to disrupt, at the cost of his damage.

For treasures, lead with battle-start cooldown reduction so the first Wolf Squadron and the wolf land in the opening window, plus anything that amplifies damage. The [treasures guide](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide) covers the current best-in-slot options and how they stack.

## Magic Candy for Crunchy Chip

Magic Candy deepens a cookie's existing identity, and on Crunchy Chip that means more out of the disruption-plus-wolf package that's already the reason you run him. As a farmable Epic, he's also one of the cheaper Magic Candies to fund — his soulstones come from regular content, so you can finish his build without spending gacha luck on him.

Leveling priority is the usual: get it equipped and leveled to a functional baseline before you call the build done, then push it higher only if he's a fixture on a serious team. Be realistic about where he sits in line, though — he's an excellent budget frontliner and a genuinely useful disruptor, but he's competing for Soul Essence with your carries and your meta-defining cookies. The [Magic Candy priority guide](/blog/cookie-run-kingdom/crk-magic-candy-priority-guide) has the framework for where a utility Epic like him should fall in your spending order; on most accounts he's a "level it once the expensive cookies are handled" pick rather than a top priority.

## Team comps and where he fits

![Hollyberry Cookie raising her shield, the kind of durable secondary front that lets Crunchy Chip lean into disruption instead of pure survival.](/images/blog/cookie-run-kingdom/crk-cookie-rarity-explained/hollyberry-ancient.webp)

Crunchy Chip is a role player, not a keystone. He earns his slot by doing things other cookies don't — stripping buffs, slowing the enemy carry, and adding a body — so build the team to let him do that:

- **A real wall or a healer behind or beside him.** He survives the opening better with backup, and that backup is what lets you lean his build toward CRIT and damage instead of pure soak. A durable body from the [tank tier list](/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked) or a healer from the [healer tier list](/blog/cookie-run-kingdom/best-crk-healers-ranked) keeps him alive long enough to stack Claw Marks and keep the wolf out.
- **A damage core that benefits from the disruption.** His buff-strip and ATK-SPD slow hit the enemy's *highest-ATK* cookie — exactly the unit your own carry is racing. Pair him with a real damage dealer from the [DPS tier list](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked) and the disruption translates directly into your carry winning that race.
- **Anywhere you need to crack buff-stacking or CRIT-reliant enemies.** Against a Guild Boss or an Arena defense leaning on buffs and crit, his Claw Marks buff-removal and Consuming Darkness CRIT-shred are a clean answer. He's a counter-pick as much as a staple.

He's most valuable on **budget and early-to-mid teams** where a free, farmable Epic disruptor punches above its cost — and he stays relevant as a situational counter even after your roster fills out. He's not the cookie you build a comp around; he's the cookie you slot in when you need exactly what he does. For the wider new-account picture, our [best beginner cookies guide](/blog/cookie-run-kingdom/best-beginner-cookies-crk) shows where a free Epic front like him fits in a build order.

## Common Crunchy Chip build mistakes

In rough order of how often they show up:

1. **Building him as a pure tank.** The big one. People see "Charge frontliner" and gear five durability toppings with no CRIT. That gives you a body that strips a couple of buffs and does nothing else — his CRIT-scaling cast never fires and his wolf comes out soft. He's a bruiser; give him the offense his kit is built to use.

2. **Going full CRIT with no survivability.** The opposite error. A glass Crunchy Chip dies in the opening exchange before he's stacked Claw Marks on the enemy carry, and a dead disruptor disrupts nothing. Keep the DMG Resist/HP floor.

3. **Running him with no backup.** He's better as a *second* layer of front or with a healer behind him, because that's what frees his build to lean into disruption. Drop him in as your only wall against a heavy-burst team and he gets deleted before he's useful.

4. **Pairing him with a carry that doesn't care about the disruption.** His buff-strip and slow target the enemy's highest-ATK cookie. If your team has no damage dealer racing that enemy, the disruption still helps, but you're under-using him — he shines next to a carry that wins the trade once the enemy's hitter is slowed and stripped.

5. **A pure-DMG-Resist beascuit on a disruptor.** Same mistake as the all-Almond toppings, different slot. The beascuit is a blended CRIT/ATK/survivability slot; pure resistance starves his damage and his wolf.

6. **Over-investing Magic Candy too early.** He's a useful utility Epic, not a carry. Level his Magic Candy after your damage core and meta cookies are handled, not before.

## Quick Action Checklist

- He is a disruptor, not a tank — build him to survive the opening *and* land real damage, never one at the cost of the other
- Default toppings: 3x Solid Almond (DMG Resist) + 2x Juicy Apple Jelly (CRIT%), the balanced bruiser build the wiki recommends
- Flip to 3x Apple Jelly + 2x Almond only when a healer or second front is keeping him alive; reserve 5x Almond for the narrow unkillable-wall job
- Substats: roll enough DMG Resist/HP to survive the opening, then CRIT% and ATK% for his cast and wolf, then cooldown where it's free
- Take ATK% over flat ATK every time
- Run a blended CRIT/ATK beascuit with a survivability rider, not a pure-resist one
- Pair a CRIT or ATK tart for damage; reach for a survivability tart only if he's dying before Claw Marks lands
- Lead with battle-start cooldown and damage-amp treasures so the first Wolf Squadron lands early
- Level Magic Candy to a baseline, push it higher only after your carries and meta cookies are funded
- Slot him next to a real wall or healer and a damage carry that benefits from his buff-strip and ATK-SPD slow on the enemy's hardest hitter`,

  faq: [
    {
      question: 'What are the best toppings for Crunchy Chip Cookie?',
      answer:
        "The balanced bruiser build is 3x Solid Almond (DMG Resist) + 2x Juicy Apple Jelly (CRIT%), the pairing the wiki recommends. The three Almonds keep him alive through the opening exchange so his Claw Marks buff-strip and attack-speed slow land, while the two Apple Jellies power his cast — which scales damage off his CRIT% — and his Cream Wolf, which inherits his stats. You can flip to 3x Apple Jelly + 2x Almond when a healer or second front keeps him alive and you want more damage. Don't build him as a pure 5x Almond tank unless his only job is to be an unkillable body; that throws away his CRIT-scaling cast and a chunk of the wolf's output.",
    },
    {
      question: 'What class and rarity is Crunchy Chip Cookie?',
      answer:
        "Crunchy Chip Cookie is an Epic-rarity, Charge-class cookie whose position is prioritized in the Front of the formation. He's a Darkness-element cookie from the Dark Cacao Kingdom — the captain of the Cream Wolves and Dark Cacao's bodyguard. Being Epic is a big part of his appeal: his soulstones drop from regular content, so a free-to-play player can ascend and Magic Candy him without a single lucky pull. The key thing is that he's a frontline disruptor rather than a tank, so he's built as a bruiser with both durability and CRIT, not pure bulk.",
    },
    {
      question: "What does Crunchy Chip Cookie's skill do?",
      answer:
        "His skill, Wolf Squadron, runs on a 13-second base cooldown. He charges in and slams enemies for Darkness damage that scales partly off his own CRIT%, and he summons a Cream Wolf whose stats scale from his — when the wolf is defeated it becomes enraged and fights independently. His regular attacks apply Claw Marks to the highest-ATK enemy; at three stacks it removes that target's buffs, reduces their ATK SPD by 25% (stacking up to twice), and deals bonus damage. He also applies Consuming Darkness, which lowers the target's CRIT% and Healing, and his Tamer passive shares about 35% of the wolf's buffs with him.",
    },
    {
      question: 'Is Crunchy Chip Cookie a tank or a damage dealer?',
      answer:
        "Neither, exactly — he's a frontline disruptor, which is why you build him as a bruiser. He stands up front and needs to survive the opening, but his value is removing enemy buffs, slowing the enemy's hardest hitter, and adding a wolf that fights for you. Gear him as a pure tank and his CRIT-scaling cast and wolf come out weak; gear him as pure CRIT and he dies before his Claw Marks land. The answer is a deliberate split of durability and CRIT — exactly what his Almond / Apple Jelly topping recommendation is telling you to do.",
    },
    {
      question: 'What team should I run with Crunchy Chip Cookie?',
      answer:
        "Slot him next to a real wall or a healer so he survives long enough to disrupt, and pair him with a damage carry that benefits from his buff-strip and attack-speed slow — both of which hit the enemy's highest-ATK cookie, usually the unit your own carry is racing. He's most valuable on budget and early-to-mid teams, where a free, farmable Epic disruptor punches above its cost, and he stays useful as a counter-pick against buff-stacking or CRIT-reliant enemies thanks to his Claw Marks buff-removal and Consuming Darkness CRIT-shred. He's a role player you slot in for what he does, not a keystone you build around.",
    },
    {
      question: 'Does Crunchy Chip Cookie need Magic Candy?',
      answer:
        "Eventually, but he's not a priority. His Magic Candy deepens his disruption-plus-wolf package, and as a farmable Epic he's one of the cheaper Magic Candies to fund since his soulstones come from regular content. But he's a utility role player competing for Soul Essence with your carries and meta-defining cookies, so level his Magic Candy to a functional baseline and push it higher only once the expensive cookies on your account are handled. On most rosters he's a 'finish him after the carries' pick rather than a top priority.",
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
    { href: '/blog/cookie-run-kingdom/best-crk-healers-ranked', anchor: 'healer tier list' },
    { href: '/blog/cookie-run-kingdom/best-beginner-cookies-crk', anchor: 'best beginner cookies guide' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Crunchy_Chip_Cookie', title: 'Cookie Run: Kingdom Wiki — Crunchy Chip Cookie' },
    { url: 'https://www.pocketgamer.com/cookie-run-kingdom/', title: 'Pocket Gamer — Cookie Run: Kingdom guides' },
    { url: 'https://www.thegamer.com/cookie-run-kingdom-best-toppings/', title: 'TheGamer — Cookie Run: Kingdom toppings guides' },
  ],

  tldr:
    "Crunchy Chip Cookie is an Epic Charge frontliner who plays as a disruptor, not a tank: his Wolf Squadron skill (13-second cooldown) charges in for CRIT-scaling Darkness damage, summons a Cream Wolf that fights on after it dies, and his Claw Marks strip the highest-ATK enemy's buffs and cut their ATK SPD by 25%. Build him as a bruiser with the wiki's Almond / Apple Jelly pairing — default 3x Solid Almond (DMG Resist) + 2x Juicy Apple Jelly (CRIT%), flipping to 3x Apple Jelly + 2x Almond when a healer or second front keeps him alive. Prioritize CRIT% and ATK% for damage with a DMG Resist/HP survival floor, run a blended CRIT/ATK beascuit, and slot him beside a wall or healer and a carry that benefits from his disruption. As a farmable Epic he's a budget-team staple and a counter-pick, not a Magic Candy priority.",
};
