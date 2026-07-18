import type { BlogPost } from '../../blogTypes';

export const camelliaCookieToppingsBuild: BlogPost = {
  slug: 'camellia-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'arena-meta',

  tags: ['toppings', 'charge', 'front-line', 'arena', 'super-epic'],

  title: 'Camellia Cookie Toppings Build & Guide (2026)',
  metaDescription:
    'Camellia Cookie toppings build: the two real spreads for the Super Epic Charge disruptor, substat priorities, beascuit and tart picks, Magic Candy notes, and his best Arena team comps.',
  excerpt:
    'Camellia is a Super Epic Charge front-liner who stuns the whole enemy line, strips buffs off their two biggest carries, and stacks a damage-amp debuff. Build the disruption. Here is the full sheet.',
  featuredImagePrompt:
    'Camellia Cookie, an elegant Super Epic front-line Cookie in flowing ink-painter robes wielding a giant calligraphy brush, mid-charge with a sweeping stroke of grass-green ink and falling camellia petals, deep jade and crimson palette, Cookie Run: Kingdom key-art style, painterly cel-shaded, dramatic motion',
  heroImage: '/images/blog/cookie-run-kingdom/camellia-cookie-toppings-build/camellia-cookie.webp',
  heroImageAlt:
    'Camellia Cookie, the Super Epic Charge-class front-line disruptor this toppings build guide is for.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/camellia-cookie-toppings-build/camellia-cookie.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Camellia_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/camellia-cookie-toppings-build/camellia-standing.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Camellia_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    { src: '/images/gear/toppings/chocolate.png', sourceUrl: 'owned-asset' },
    { src: '/images/cookies/frost-queen-cookie.png', sourceUrl: 'owned-asset' },
  ],

  publishDate: '2026-07-17T00:00:00.000Z',
  lastUpdated: '2026-07-17T00:00:00.000Z',

  primaryKeyword: 'camellia cookie toppings',
  secondaryKeywords: [
    'camellia cookie build',
    'best toppings camellia',
    'camellia cookie skill',
    'camellia magic candy',
    'crk camellia guide',
    'camellia cookie arena team',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,

  toc: [
    { id: 'who-camellia-cookie-actually-is', label: 'Who Camellia Cookie actually is', level: 2 },
    { id: 'what-battle-scene-painting-actually-does', label: 'What Battle Scene Painting actually does', level: 2 },
    { id: 'the-two-camellia-toppings-builds', label: 'The two Camellia toppings builds', level: 2 },
    { id: 'substat-priorities-without-the-fake-numbers', label: 'Substat priorities without the fake numbers', level: 2 },
    { id: 'beascuit-and-tart-picks', label: 'Beascuit and tart picks', level: 2 },
    { id: 'magic-candy-for-camellia', label: 'Magic Candy for Camellia', level: 2 },
    { id: 'team-comps-and-where-he-fits', label: 'Team comps and where he fits', level: 2 },
    { id: 'common-camellia-build-mistakes', label: 'Common Camellia build mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Camellia Cookie is the front-liner who decides an Arena fight before your carries have finished their first skill. He charges in with a calligraphy brush the size of a door, stuns the entire enemy line, rips every buff off their two highest-ATK cookies, and paints a damage-amp debuff across the whole formation on the way out. He is a Charge cookie who tanks the front and disrupts at the same time, and if you build him like a plain bruiser you throw away the reason he's worth a Super Epic slot.

The trap with Camellia is his stat card — DMG Resist, Cooldown, ATK — which reads like it can't decide what he is. It can. He's a disruptor with a tank's body. This is the 2026 build sheet: what his kit actually does, the two legitimate topping lanes, substats, beascuit, tart, Magic Candy, and the teams where a brush-swinging front-liner earns his keep.

## Who Camellia Cookie actually is

![Camellia Cookie standing sprite, the elegant ink-painter front-line Cookie in flowing robes.](/images/blog/cookie-run-kingdom/camellia-cookie-toppings-build/camellia-standing.webp)

Nail the identity before you spend a topping. Camellia Cookie is **Super Epic rarity**, his class is **Charge**, and his position is prioritized to the **Front**. He's a **Grass-element** cookie — his skill damage is typed Grass — and he was released in the November 2024 wave as part of the Flower City content. Super Epic is its own tier: pricier and stronger than Epic, more attainable than Legendary, and the good ones like Camellia punch into genuine Arena relevance rather than sitting as PvE filler.

The Charge class is the whole story. Charge cookies push to the front and open the fight — they're not passive damage-reduction walls like some Defense tanks. Camellia charges in, disrupts, and leaves a mess for your team to clean up. Read him as a **front-line disruptor**, not a wall, and every build decision below falls into place. If you're still sorting how the tiers map to power, the [cookie rarity breakdown](/blog/cookie-run-kingdom/crk-cookie-rarity-explained) is a useful primer on where a Super Epic like this sits.

## What Battle Scene Painting actually does

His skill is **Battle Scene Painting**, on a **13-second base cooldown** with a 2-second initial delay, and it does an absurd amount of work for one button:

- On cast, he raises his own **Debuff Resist (+30% for 8 seconds)** and buffs the **team's CRIT% (+20% for 8 seconds)** — so he's helping your carries hit harder before he even swings.
- He charges the enemies with brush strokes, then lands a **final stroke** for **up to 916.1% of ATK** in Grass damage at max skill level, carrying **DMG Resist Bypass 30%** so it chews through tanky targets.
- That final stroke **Stuns every enemy it hits for 2 seconds** and **removes all buffs from the two enemy Cookies with the highest ATK.** That's a targeted dispel aimed straight at their carries — read: it strips the ATK buff, the shield, the crit steroid the enemy just stacked on their nuker.
- If the skill deals damage, it stamps a **Weakness** debuff on enemies: **+8% damage received, stacking up to 4 times** — a full stack means the enemy line takes 32% more from everything your team throws afterward.

Put that together and Camellia isn't a tank who happens to hit. He's a **disruption package**: an AoE stun to buy your team a free window, a carry-targeted buff strip that undoes the enemy's setup, a team-wide damage amp that multiplies your follow-up, and a team CRIT buff on top. The DMG Resist Bypass on the hit is the tell — the game wouldn't hand a pure wall armor penetration. He's built to land a disruptive hit and make it hurt.

## The two Camellia toppings builds

![Swift Chocolate topping icon, the cooldown set that runs the disruptor lane on Camellia.](/images/gear/toppings/chocolate.png)

Camellia has **two real lanes**, and unlike a lot of cookies where the "second build" is a trap, both of his are legitimate. Which one you run depends on what the rest of your team needs from the front.

**Lane 1 — Cooldown (5x Swift Chocolate).** The disruptor build, and the default for most players. Battle Scene Painting is the entire reason Camellia is on your team, so the faster his 13-second skill comes back, the more often you land the AoE stun, the carry buff-strip, the Weakness stacks, and the team CRIT buff. In Arena especially, getting that formation-breaking cast off twice instead of once can be the whole match. Lead here unless you have a specific reason not to.

**Lane 2 — DMG Resist (5x Solid Almond).** The survivability build. He's a front-line cookie physically standing in front of the enemy's opening burst — if he gets deleted before the 2-second initial delay resolves, none of the disruption ever happens. On defense teams, or against burst-heavy enemy comps that would blow him up before he casts, DMG Resist keeps him standing long enough to do his job. Run this when "he dies before he disrupts" is your actual problem.

The honest recommendation: **lead with Cooldown.** His value is the disruption, and more casts warp more games than a slightly bulkier body. Move to Solid Almond only when survivability is the real bottleneck — a burst meta that one-shots him, or a defense slot where he needs to eat the alpha strike. Don't split the difference and roll half-and-half; you'll get a Camellia that neither disrupts on a tight loop nor survives the opening. If topping sets and substats are still fuzzy for you, the [full toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide) covers the fundamentals this build assumes.

## Substat priorities without the fake numbers

Substats are where a build's real quality lives, and they're also where the CRK community loves to invent exact percentages nobody can verify. I'm not handing you a fake "you need exactly 21.4% cooldown" target — here's the honest direction, which shifts with your lane.

For the **Cooldown (Swift Chocolate) disruptor build:**

1. **Cooldown** — the priority. His whole value is repeating the stun, the buff-strip, and the Weakness stacks, so shaving the 13-second skill matters more on him than on most front-liners. Stack it.
2. **DMG Resist** — your strong secondary. He still has to survive standing in the front row long enough to cast; a bit of bulk protects the uptime you just built.
3. **ATK%** — a useful rider where you missed the top two. His final stroke scales to 916.1% of ATK, so ATK% does add real damage to the hit, but it's third — the disruption matters more than the number on the nuke. Take ATK% over flat ATK; the percentage scales with his base stat and the flat value doesn't.

For the **DMG Resist (Solid Almond) survivability build,** swap the top two: **DMG Resist first, Cooldown second, then ATK%.**

The practical rule either way: **pick your lane's top stat, take the second where it doesn't cost you the first, and don't chase a perfect set.** Substats have hard diminishing returns — once Camellia is landing his cast on a tight loop and living through the opening, your rerolling energy is better spent on your next cookie than on a fraction of a percent here.

## Beascuit and tart picks

The beascuit slot follows your lane. On the **Cooldown build**, prioritize **Cooldown > DMG Resist > ATK%.** On the **DMG Resist build**, flip to **DMG Resist > Cooldown > ATK%.** A high-quality beascuit is the ceiling, but any beascuit you can stack your priority stat on does the core job. Don't bring a beascuit that fights your topping lane — a full ATK beascuit on a cooldown disruptor is a slot pulling against itself.

For the tart, match it to the build:

- **Cooldown tart.** The pairing for the Swift Chocolate disruptor lane. It stacks with your cooldown toppings to keep Battle Scene Painting on the shortest loop, which is the whole point.
- **DMG Resist tart.** For the Solid Almond survivability lane, when the job is surviving the opening burst so the disruption lands at all.

On treasures, lead with battle-start cooldown reduction so his first cast lands in the opening window (his 2-second initial delay means every bit of early acceleration matters), plus damage-amp treasures that multiply his final stroke and the Weakness debuff. The [treasures guide](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide) has the current best-in-slot options and how they stack.

## Magic Candy for Camellia

Magic Candy is where a Super Epic disruptor goes from "useful" to "the enemy's setup just evaporated," and it deepens the exact kit that's already his identity — the disruption, the stun, and the damage he stamps on the enemy line. Because his contribution front-loads the fight and then repeats, more Magic Candy means more of the disruption that decides Arena exchanges.

Leveling priority is the usual honest answer: get it equipped and leveled to a functional baseline before you call the build done, then push it higher if he's a core Arena front-liner for you. But he's a Super Epic, so slot him behind your marquee Legendary and Ancient carries in the spending order — a strong front-line disruptor you actually rely on earns investment, just not ahead of the cookies carrying your damage. The [Magic Candy priority guide](/blog/cookie-run-kingdom/crk-magic-candy-priority-guide) has the framework for where he lands.

## Team comps and where he fits

![Frost Queen Cookie, an AoE control carry whose stun-and-freeze payoff stacks with the window Camellia opens.](/images/cookies/frost-queen-cookie.png)

Camellia is an **Arena and PvP cookie first.** His whole value — an AoE stun, a carry-targeted buff strip, a team damage amp, a team CRIT buff — is loudest against another team of cookies, where stripping the enemy's stacked carry and stunning their line buys the game. Build around cashing in the window he opens:

- **Behind him, an AoE payoff.** The stun and the Weakness stacks set up a kill window; you need damage that lands in it. Pair him with an AoE carry — a control-DPS like Frost Queen, or anything off the [DPS tier list](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked) — so the stunned, damage-amped enemy line actually dies. A disruptor with nothing behind him just annoys the other team.
- **A second front-liner or healer to hold the line.** Camellia charges and disrupts, but he's one body. Anchor the front with a real tank off the [tank tier list](/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked) or keep him alive with sustain so he reaches his next cast.
- **Carries that love the free CRIT.** His +20% team CRIT% for 8 seconds is a flat gift to any crit-scaling DPS behind him — build the follow-up to actually use it.

He slots cleanly into the shells the [Kingdom Arena meta team](/blog/cookie-run-kingdom/kingdom-arena-meta-team) and the [Arena defense teams guide](/blog/cookie-run-kingdom/best-crk-arena-defense-teams) lay out — a disruptive front that breaks the enemy's setup, with an AoE payoff waiting behind it. Don't misuse him as a passive back-line body; he's a Charge cookie built to open the fight in the enemy's face.

## Common Camellia build mistakes

In rough order of how often they show up:

1. **Building him as a pure tank.** A bricked-up Camellia that lives forever but casts late and disrupts weakly is a wasted Super Epic. His value is Battle Scene Painting — build the disruption (Cooldown) first, survivability only as much as your meta demands.
2. **Picking the wrong lane for your team.** Cooldown when you want maximum disruption, DMG Resist only when he's genuinely dying before he casts. Splitting the two halfway gives you a build that does neither well.
3. **No AoE payoff behind the stun.** He hands you a 2-second stun on the whole enemy line plus a stacking damage amp, and then nothing punishes it. The disruption is setup; you need a carry to cash it in.
4. **A beascuit that fights the topping lane.** Same mistake as a mismatched tart, different slot. Match the beascuit's priority stat to your build.
5. **Taking flat ATK over ATK%.** On either lane, ATK% scales with his base ATK and flat ATK doesn't. On a Super Epic with a high base stat, the percentage wins.
6. **Wasting the team CRIT buff.** His +20% team CRIT% is only worth a slot if your carries scale with crit. If your damage doesn't care about CRIT%, you're leaving a chunk of his kit on the table — build the team to use it.

## Quick Action Checklist

- Pick a lane: 5x Swift Chocolate (Cooldown) to disrupt more often — the default — or 5x Solid Almond (DMG Resist) when he's dying before he casts
- On the Cooldown build, prioritize Cooldown > DMG Resist > ATK%; on the DMG Resist build, flip to DMG Resist > Cooldown > ATK% — and don't reroll forever
- Take ATK% over flat ATK every time
- Match the beascuit to your lane, not a stat that fights it
- Pair a Cooldown tart with the disruptor build; use a DMG Resist tart only for the survivability lane
- Lead with battle-start cooldown and damage-amp treasures — his 2-second initial delay rewards early acceleration
- Equip and level Magic Candy behind your Legendary and Ancient carries; push it higher if he's a core Arena front-liner
- Build the team to cash in his cast: an AoE payoff behind him, a crit-scaling carry to use the CRIT buff, and a way to keep him alive to his next stun`,

  faq: [
    {
      question: 'What are the best toppings for Camellia Cookie?',
      answer:
        "Camellia has two legitimate builds. The default for most players is 5x Swift Chocolate (Cooldown), because his entire value is repeating Battle Scene Painting — the AoE stun, the carry buff-strip, the Weakness damage-amp, and the team CRIT buff — as often as possible on its 13-second cooldown. The alternate is 5x Solid Almond (DMG Resist) when he's a front-line body dying to the enemy's opening burst before he can cast, which matters most on defense teams or against burst-heavy comps. Lead with Cooldown for disruption; move to Solid Almond only when survivability is the real bottleneck. Don't split the two halfway.",
    },
    {
      question: 'What class and rarity is Camellia Cookie?',
      answer:
        "Camellia Cookie is a Super Epic-rarity, Charge-class cookie whose position is prioritized to the Front. He's a Grass-element cookie released in the November 2024 Flower City wave. Super Epic sits between Epic and Legendary — pricier and stronger than Epic, more attainable than Legendary — and the strong ones like Camellia reach real Arena relevance. As a Charge cookie he pushes to the front to open the fight and disrupt, which is the single most important fact for how you build and play him: a front-line disruptor, not a passive wall.",
    },
    {
      question: "What does Camellia Cookie's skill do?",
      answer:
        "Battle Scene Painting has a 13-second base cooldown and a 2-second initial delay. On cast, Camellia raises his own Debuff Resist (+30%) and the team's CRIT% (+20%) for 8 seconds, then charges and lands a final stroke for up to 916.1% of ATK in Grass damage at max level, carrying 30% DMG Resist Bypass. That final hit Stuns every enemy it lands on for 2 seconds and removes all buffs from the two enemy Cookies with the highest ATK. If the skill deals damage, it stamps a Weakness debuff worth +8% damage received, stacking up to 4 times — a full stack is +32% damage taken across the enemy line. It's a disruption package, not a plain nuke.",
    },
    {
      question: 'Should I build Camellia for cooldown or DMG Resist?',
      answer:
        "It depends on your bottleneck. If he lands his cast and does his job, build Cooldown (Swift Chocolate) so Battle Scene Painting comes back faster and you disrupt more often — that's the default and the stronger lane for most teams. If he's a front-line body getting deleted by the enemy's opening burst before the skill resolves, build DMG Resist (Solid Almond) so he survives to cast, which matters most on defense teams and against burst-heavy comps. Pick the lane that fixes your actual problem; don't roll half-and-half and get a Camellia that neither disrupts on a loop nor survives the opening.",
    },
    {
      question: 'What team should I run with Camellia Cookie?',
      answer:
        "Build around cashing in the window he opens. Put an AoE payoff behind him — a control-DPS like Frost Queen or another AoE carry — so the stunned, damage-amped enemy line actually dies; a disruptor with nothing behind him just annoys the other team. Anchor the front with a second tank or sustain so he survives to his next cast, and run crit-scaling carries that use his +20% team CRIT% buff. He's an Arena and PvP cookie first, where stripping the enemy's stacked carry and stunning their line decides matches. He slots into standard Arena meta and defense shells as the disruptive front-liner.",
    },
    {
      question: 'Does Camellia Cookie need Magic Candy?',
      answer:
        "If he's a core Arena front-liner for you, yes — his Magic Candy deepens the disruption, stun, and damage that are his identity, and because his contribution front-loads and repeats the fight, more of it decides more exchanges. Get it equipped and leveled to a functional baseline first, then push higher as he becomes a cookie you rely on. But he's a Super Epic, so fund him behind your marquee Legendary and Ancient carries in your Soul Essence spending order rather than ahead of them.",
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/crk-toppings-guide', anchor: 'full toppings guide' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide', anchor: 'treasures guide' },
    { href: '/blog/cookie-run-kingdom/crk-magic-candy-priority-guide', anchor: 'Magic Candy priority guide' },
    { href: '/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked', anchor: 'DPS tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked', anchor: 'tank tier list' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team' },
    { href: '/blog/cookie-run-kingdom/best-crk-arena-defense-teams', anchor: 'Arena defense teams guide' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Camellia_Cookie', title: 'Cookie Run: Kingdom Wiki — Camellia Cookie' },
    { url: 'https://www.pocketgamer.com/cookie-run-kingdom/', title: 'Pocket Gamer — Cookie Run: Kingdom guides' },
    { url: 'https://www.thegamer.com/cookie-run-kingdom-best-toppings/', title: 'TheGamer — Cookie Run: Kingdom toppings guides' },
  ],

  tldr:
    "Camellia Cookie is a Super Epic Charge-class Grass front-liner built to disrupt, not to wall. Battle Scene Painting (13s cooldown) AoE-stuns the enemy line for 2 seconds, strips all buffs off their two highest-ATK carries, stamps a stacking Weakness damage-amp (up to +32% damage taken), and hands your team +20% CRIT%. Build one of two lanes: 5x Swift Chocolate (Cooldown) to disrupt more often — the default — or 5x Solid Almond (DMG Resist) when he's dying before he casts. Match substats, beascuit, and tart to your lane, level Magic Candy behind your marquee carries, and always pair his stun with an AoE payoff.",
};
