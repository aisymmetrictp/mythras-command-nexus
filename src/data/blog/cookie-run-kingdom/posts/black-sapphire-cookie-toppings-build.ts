import type { BlogPost } from '../../blogTypes';

export const blackSapphireCookieToppingsBuild: BlogPost = {
  slug: 'black-sapphire-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'black-sapphire-build',

  title: 'Black Sapphire Cookie Toppings Build & Guide',
  metaDescription:
    'Black Sapphire Cookie build guide for June 2026: best toppings, why he is a poison enabler not a healer, substats, beascuit, Magic Candy, and his poison team fit.',
  excerpt:
    "Black Sapphire is the Epic Support that makes a poison team actually function — DEF-shred, debuff amp, and a Poison-damage buff that scales the whole enraged crew. Build him wrong and your poison comp hits like a wet napkin. Here is the full sheet: toppings, substats, beascuit, Magic Candy, and the Deceitful Trio he was built for.",
  featuredImagePrompt:
    'Black Sapphire Cookie center frame as a suave radio-host showman, a Poison-element middle-line support tossing glowing dark-violet sapphire gems that crack and leak toxic mist across the battlefield, deep indigo and toxic-green palette with smoky purple haze, Cookie Run: Kingdom key-art style, painterly cel-shaded, dramatic rim lighting',
  heroImage: '/images/cookies/black-sapphire-cookie.png',
  heroImageAlt: 'Black Sapphire Cookie, the Epic Support-class Poison-element enabler this June 2026 toppings build guide is for.',
  imageSources: [
    { src: '/images/cookies/black-sapphire-cookie.png', sourceUrl: 'owned-asset' },
    {
      src: '/images/blog/cookie-run-kingdom/black-sapphire-cookie-toppings-build/black-sapphire-illustration.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Black_Sapphire_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    { src: '/images/gear/toppings/apple-jelly.png', sourceUrl: 'owned-asset' },
    { src: '/images/gear/toppings/chocolate.png', sourceUrl: 'owned-asset' },
    {
      src: '/images/blog/cookie-run-kingdom/black-sapphire-cookie-toppings-build/shadow-milk-illustration.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Shadow_Milk_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/black-sapphire-cookie-toppings-build/candy-apple-illustration.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Candy_Apple_Cookie',
      license: 'Fandom CC-BY-SA',
    },
  ],

  publishDate: '2026-06-17T00:00:00.000Z',
  lastUpdated: '2026-06-17T00:00:00.000Z',

  primaryKeyword: 'black sapphire cookie toppings',
  secondaryKeywords: [
    'black sapphire cookie build',
    'best toppings black sapphire',
    'black sapphire beascuit',
    'black sapphire magic candy',
    'crk black sapphire guide',
    'black sapphire poison team',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 11,

  toc: [
    { id: 'who-black-sapphire-actually-is', label: 'Who Black Sapphire actually is', level: 2 },
    { id: 'what-his-kit-actually-does', label: 'What his kit actually does', level: 2 },
    { id: 'the-build-question-crit-or-cooldown', label: 'The build question: CRIT or cooldown', level: 2 },
    { id: 'the-standard-black-sapphire-topping-build', label: 'The standard Black Sapphire topping build', level: 2 },
    { id: 'substat-priorities-without-the-fake-numbers', label: 'Substat priorities without the fake numbers', level: 2 },
    { id: 'beascuit-and-tart-picks', label: 'Beascuit and tart picks', level: 2 },
    { id: 'magic-candy-for-black-sapphire', label: 'Magic Candy for Black Sapphire', level: 2 },
    { id: 'team-comps-and-where-he-fits', label: 'Team comps and where he fits', level: 2 },
    { id: 'common-black-sapphire-build-mistakes', label: 'Common Black Sapphire build mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Black Sapphire is the cookie people build like a healer and then wonder why their poison team does nothing. He drops gems, the gems heal his poison allies, and the obvious read is "support, gear him bulky, done." That read throws away the entire reason he exists. He is not a healer with a poison theme — he is the **enabler that makes a poison team's damage real**: he shreds enemy DEF, amplifies every debuff on the field, and buffs the whole crew's Poison-type damage just by standing there. Build him as a bruiser-tank and the heal lands but the poison fizzles; build him for what his kit actually scales and a free-to-play Epic turns a gimmick comp into a team that grinds down raid bosses.

This is the June 2026 build sheet for him: toppings, substats, beascuit, tart, Magic Candy, and team fit, plus the mistakes that turn the best poison enabler in the game into a wasted middle slot. Where the community has invented exact substat roll-targets, I'm giving you the direction instead of a fake number — because the wrong number gets copy-pasted forever and the direction is what actually moves your damage.

## Who Black Sapphire actually is

![Black Sapphire Cookie, the suave radio-host Poison-element Support this build is for.](/images/blog/cookie-run-kingdom/black-sapphire-cookie-toppings-build/black-sapphire-illustration.webp)

Get the identity right before you spend a single topping. Black Sapphire Cookie is **Epic rarity**, his class is **Support**, and his position is prioritized in the **Middle** of the formation. He's a **Poison-element** cookie released in the 6.1 update (February 12, 2025) alongside Awakened Pure Vanilla — a loyal follower of Shadow Milk Cookie and the more refined half of the duo he forms with Candy Apple Cookie. His recommended toppings on the wiki are a **Juicy Apple Jelly / Searing Raspberry / Swift Chocolate** mix, which is the build telling you up front that this is a damage-and-uptime support, not a bulk one.

Here's the framing the rest of the build hangs on: he is a **poison enabler, not a healer.** Yes, his gems heal Poison-type allies, and that sustain is a genuine perk. But the reason you run *him* over a dedicated healer is everything around the heal — the DEF shred that scales with how many Poison cookies you field, the debuff amplification that makes your damage-over-tick hit harder, and the flat Poison-type DMG buff he hands the whole team for as long as he's alive. That's enabling, and enabling is wasted if you gear him so defensively his cooldown drags and his stat-scaled effects come out small. Being Epic is the underrated part of his value: his soulstones drop from regular content, so a free-to-play player can ascend him to full and Magic Candy him without a single lucky pull — which is exactly why poison teams are one of the most accessible meta archetypes in the game.

## What his kit actually does

His skill is **It's Showtime!**, and it runs on a **15-second base cooldown.** The kit is a stack of buffs and debuffs wearing a heal, so here's what each piece actually does:

- **Black Sapphire Gems.** He scatters gems on the battlefield that explode after a delay, inflicting **Poison** damage over time. That's the on-board damage source the rest of the kit amplifies.
- **Amplified Debuffs and Weakness.** The gems apply **+25% Amplified Debuffs** and a **+25% Poison-type Weakness** to enemies. Together they crank up every poison tick and debuff your team is already laying down — this is the multiplier half of "enabler."
- **DEF shred that scales with your team.** The gems reduce enemy **DEF by 20% for each Poison-type cookie on the team, capped at 80%.** Run a four-poison core and you're stripping the enemy's defense to the floor, which is why his value goes *up* the more you commit to the archetype.
- **The heal and the resist buff.** The gems heal all Poison-type allies (scaling off his ATK) and grant them **+25% DMG Resist.** This is the sustain that lets a poison comp grind through long fights without a dedicated healer slot.
- **The always-on Poison buff.** As long as Black Sapphire is on the battlefield, allies get **+35% Poison-type ATK Up.** It's a passive that rewards keeping him alive — a dead Black Sapphire isn't just a missed cast, it's a 35% damage cut to the whole crew.
- **Deceitful Trio.** Enter a battle with Candy Apple Cookie and the buff activates partially; enter with **Shadow Milk Cookie** too and it activates fully, adding a big extra Poison stack and bonus healing. This is the synergy he was explicitly designed around.

Read it as a whole and the build writes itself: he's a support whose value is *multiplying* a poison team's output and keeping its uptime high. He needs to cast often, his stat-scaled effects want ATK and CRIT behind them, and he absolutely needs to survive — so the build is an offensive support's blend of damage stats and just-enough survivability, never a pure-bulk wall.

## The build question: CRIT or cooldown

This is the decision that separates a working Black Sapphire from a wasted one, and it's what his Apple Jelly / Raspberry / Chocolate recommendation is quietly answering: **what do you lean into, his damage contribution or his uptime?**

The honest answer is *both, with cooldown as the floor.* His most important job is keeping the gem field refreshed — the DEF shred, the debuff amp, and the heal all ride on the cast, so the faster It's Showtime! cycles, the more often your poison team is operating at full power. That makes **Cooldown the non-negotiable backbone.** But unlike a pure utility support, his heal and his poison contribution scale off his own stats, so **CRIT% and ATK aren't decoration — they're real output.** A cooldown-only Black Sapphire casts often but heals for a trickle and adds little personal damage; a CRIT-only one hits harder on his own ticks but leaves the team's buffs and shreds cycling too slowly.

So he wants a deliberate blend, which is exactly why the wiki pairs **Swift Chocolate (Cooldown)** with **Juicy Apple Jelly (CRIT%)** and **Searing Raspberry (ATK).** Chocolate keeps the engine spinning; Apple Jelly and Raspberry make his personal contribution and his heal matter. The practical takeaway, which we cash out next: gear him so his cast is up as often as possible *and* his stat-scaled effects land for real numbers — not one at the expense of the other.

## The standard Black Sapphire topping build

![Swift Chocolate topping icon, the Cooldown set that keeps Black Sapphire's gem field refreshed so his DEF shred and team buffs stay up.](/images/gear/toppings/chocolate.png)

The build follows the enabler logic. Two legitimate routes, depending on whether you want maximum uptime or more personal punch:

**The cooldown-leaning build — 5x Swift Chocolate (Cooldown).** This is the safe default for most players and most content. Black Sapphire's entire value is keeping the gem field and its buffs cycling, and full cooldown gets It's Showtime! back up as fast as possible. On a poison team where the *carries* are doing the damage and Black Sapphire is the multiplier, you want the multiplier refreshing constantly. If you only gear him one way, gear him for cooldown.

**The hybrid build — 3x Swift Chocolate (Cooldown) + 2x Juicy Apple Jelly (CRIT%).** Flip toward this when his own heal and poison contribution matter more — longer fights where his sustain carries the team, or comps where you want his personal damage to count. The three Chocolates keep uptime healthy while the two Apple Jellies put CRIT behind his heal and his ticks. This is the wiki-flavored "do both" route, and it's the one I'd graduate to once you've got a cookie sense for how much cooldown he actually needs.

A note on the stat his recommendation also lists: **ATK** (via Searing Raspberry) is a legitimate hybrid ingredient because his heal and poison scale off it, but don't build him as a full ATK damage dealer — he's a support, and a 5x Raspberry Black Sapphire is the "I geared my enabler like a carry" mistake. Keep cooldown as the spine; sprinkle CRIT and ATK as the offensive seasoning.

The honest default for most players: **lead with 5x Swift Chocolate.** It's the safe, do-the-job pick, and you graduate to the 3 Chocolate / 2 Apple Jelly hybrid once you understand his cooldown needs and want his heal and ticks to bite harder. Either way, **do not build him as a pure-bulk wall** — the buffs, shreds, and uptime are the reason he's on the team, and all of them want him casting and contributing, not just standing there tanking.

If you're new to how topping sets and substats interact, the [toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide) covers the fundamentals this build assumes.

## Substat priorities without the fake numbers

![Juicy Apple Jelly topping icon, the CRIT% set that powers Black Sapphire's heal and poison contribution on the hybrid build.](/images/gear/toppings/apple-jelly.png)

Substats are where most of a build's quality lives, and they're also where the CRK community most loves to invent exact percentages nobody can verify. I'm not going to hand you a fake "you need exactly 24.6% cooldown" target. Here's the honest version, in priority order for an enabler support:

1. **Cooldown** — your headline stat. Everything good about him rides on the cast, so the faster It's Showtime! cycles, the more DEF shred, debuff amp, healing, and Poison buff your team gets. Roll it on the Chocolate slots and chase it wherever you can.
2. **CRIT%** — the partner that makes his personal contribution real. His heal and poison ticks scale off his stats, so CRIT pays him in both damage and sustain. Take it on the Apple Jelly slots and wherever else you can without gutting uptime.
3. **ATK%** — backs the size of his heal and his poison contribution. Take ATK% over flat ATK every time; the percentage scales with his base stat and the flat number doesn't.
4. **DMG Resist / HP** — the survival floor. His always-on +35% Poison buff means a dead Black Sapphire is a team-wide damage cut, so a healthy chunk of survivability keeps the multiplier on the field. This is the stat you protect when you're tempted to go all-in on cooldown.

The practical rule: **roll cooldown hard so his field stays refreshed, pick up CRIT% and ATK% to make his heal and ticks matter, and keep enough DMG Resist/HP that he survives to hold the +35% buff up.** Don't chase a perfect set. Substats have diminishing returns past a healthy spread; once his cast is cycling fast and he's living through fights, the effort is better spent building the poison carries he's enabling than rerolling for a fraction of a percent.

## Beascuit and tart picks

The beascuit slot follows the same enabler logic as the toppings: **prioritize cooldown, with CRIT and ATK to back his contribution.** A cooldown-priority beascuit with a CRIT/ATK rider is the sweet spot — it keeps his field refreshing while pushing his heal and poison. Don't bring a pure-DMG-Resist beascuit unless he's getting bursted out before he can hold his buffs up; on an enabler it's leaving his uptime and contribution undertuned. Any beascuit you can stack cooldown plus a little CRIT, ATK, and survivability on does the core job — a perfect one is the ceiling, not the requirement.

For the tart, match it to your topping route:

- **Cooldown tart.** The natural pairing for the default 5x Chocolate build — it stacks with your cooldown to keep the gem field refreshing as fast as possible. Strong default.
- **CRIT or ATK tart.** The pairing for the hybrid build, when you want his heal and poison contribution to hit harder. Reach for it once uptime is handled.

For treasures, lead with battle-start cooldown reduction so the first It's Showtime! lands in the opening window and the team's poison buffs come online immediately, plus anything that amplifies damage. The [treasures guide](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide) covers the current best-in-slot options and how they stack.

## Magic Candy for Black Sapphire

Magic Candy deepens a cookie's existing identity, and on Black Sapphire that means more out of the enable-a-poison-team package that's already the reason you run him. As a farmable Epic, he's also one of the cheaper Magic Candies to fund — his soulstones come from regular content, so you can finish his build without spending gacha luck on him, which is a big part of why poison comps are so accessible.

Leveling priority is the usual: get it equipped and leveled to a functional baseline before you call the build done, then push it higher if a poison team is a serious part of your roster. Because so much of his value is multiplicative — DEF shred, debuff amp, and the team Poison buff all scale the *whole* crew's output — every level of his Magic Candy pays the entire team, not just him. The [Magic Candy priority guide](/blog/cookie-run-kingdom/crk-magic-candy-priority-guide) has the framework for where a key enabler should fall in your spending order; if you're actually running poison as a main archetype, he sits higher than a typical Epic because the team's damage hinges on him.

## Team comps and where he fits

![Shadow Milk Cookie, the Beast carry that completes Black Sapphire's Deceitful Trio and unlocks his full kit.](/images/blog/cookie-run-kingdom/black-sapphire-cookie-toppings-build/shadow-milk-illustration.webp)

Black Sapphire is an archetype keystone, not a flex. He earns his slot by making a poison team function — so build the team around the thing he enables:

- **As many Poison-type cookies as you can field.** His DEF shred scales at 20% per Poison cookie up to an 80% cap, so a four-poison core strips the enemy's defense to the floor. This is the single biggest lever on his value: he's a niche support on a one-poison team and a monster on a full one.
- **The Deceitful Trio.** Black Sapphire was explicitly designed to run with Candy Apple Cookie and Shadow Milk Cookie. Enter with Candy Apple and his Deceitful Trio buff activates partially; add Shadow Milk and it activates fully, adding a big extra Poison stack and bonus healing. If you own the trio, this is his best-case home.
- **A real frontline so he survives to hold the buff.** His +35% Poison ATK Up is only live while he's alive, so a durable body from the [tank tier list](/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked) keeps the multiplier on the field. He sits Middle; he is not your wall.

He's most valuable on **dedicated poison teams** — that's the whole point of him — and he's accessible enough that a free-to-play player can assemble that archetype without big pulls. He's not a universal support you slot into any comp; he's the cookie that makes a *specific* comp work. For where a poison support sits among the broader options, our [support tier list](/blog/cookie-run-kingdom/best-crk-support-cookies-ranked) puts him in context.

![Candy Apple Cookie, the cohort that partially activates Black Sapphire's Deceitful Trio buff.](/images/blog/cookie-run-kingdom/black-sapphire-cookie-toppings-build/candy-apple-illustration.webp)

## Common Black Sapphire build mistakes

In rough order of how often they show up:

1. **Building him as a healer/tank with bulk toppings.** The big one. People see "Support" and "heal" and gear HP and DMG Resist, which kills his cooldown and his contribution. His sustain is a perk; his enabling is the job. Gear cooldown first.

2. **Running him without a poison team.** His DEF shred scales per Poison cookie and his +35% buff is Poison-type — drop him next to non-poison carries and most of his kit does nothing. He is an archetype piece, not a generic support.

3. **Ignoring cooldown entirely for ATK.** The opposite error. A full-ATK Black Sapphire hits harder on his own ticks but cycles his field too slowly, starving the team of the shred, amp, and buffs that are his real value. Cooldown is the spine.

4. **Letting him die and shrugging.** His +35% Poison ATK Up vanishes the moment he goes down — that's a team-wide damage cut, not just a missed cast. Keep a survivability floor and a frontline that protects the Middle.

5. **A pure-DMG-Resist beascuit on an enabler.** Same mistake as bulk toppings, different slot. The beascuit is a cooldown-first slot with CRIT/ATK riders; pure resistance starves his uptime and contribution.

6. **Under-investing Magic Candy when poison is your main team.** Because his Magic Candy scales the whole crew's output, skimping on it on a dedicated poison roster caps the entire team. If poison is your archetype, fund him higher than a typical Epic.

## Quick Action Checklist

- He is a poison enabler, not a healer — build cooldown first so his DEF shred, debuff amp, and team Poison buff stay refreshed
- Default toppings: 5x Swift Chocolate (Cooldown) for maximum uptime; graduate to 3x Chocolate + 2x Juicy Apple Jelly (CRIT%) when his heal and ticks need to hit harder
- Don't build him as a full 5x Raspberry damage dealer or a pure-bulk wall — keep cooldown as the spine, CRIT and ATK as seasoning
- Substats: cooldown first, then CRIT%, then ATK%, then enough DMG Resist/HP to keep him alive holding the +35% buff
- Take ATK% over flat ATK every time
- Run a cooldown-priority beascuit with CRIT/ATK riders, not a pure-resist one
- Pair a cooldown tart with the 5x Chocolate build; a CRIT or ATK tart with the hybrid
- Lead with battle-start cooldown treasures so the gem field comes online in the opening window
- Field as many Poison-type cookies as possible — his DEF shred caps at 80% with four poison cookies on the team
- Run the Deceitful Trio (Candy Apple partial, Shadow Milk for the full activation) if you own them
- Level his Magic Candy higher than a typical Epic if poison is your main archetype — it scales the whole team`,

  faq: [
    {
      question: 'What are the best toppings for Black Sapphire Cookie?',
      answer:
        "The default build is 5x Swift Chocolate (Cooldown), because Black Sapphire's whole value is keeping his gem field refreshed so the DEF shred, debuff amplification, healing, and team Poison buff stay live. Once you understand his cooldown needs, you can graduate to a 3x Swift Chocolate + 2x Juicy Apple Jelly (CRIT%) hybrid to make his heal and poison ticks hit harder, since both scale off his stats. The wiki lists Apple Jelly, Raspberry (ATK), and Swift Chocolate together — that's telling you to keep cooldown as the spine with CRIT and ATK as offensive seasoning. Don't build him as a pure-bulk wall or a full ATK damage dealer.",
    },
    {
      question: 'What class and rarity is Black Sapphire Cookie?',
      answer:
        "Black Sapphire Cookie is an Epic-rarity, Support-class cookie whose position is prioritized in the Middle of the formation. He's a Poison-element cookie released in the 6.1 update on February 12, 2025, alongside Awakened Pure Vanilla — a follower of Shadow Milk Cookie and the refined half of his duo with Candy Apple Cookie. Being Epic is a big part of his appeal: his soulstones drop from regular content, so a free-to-play player can ascend and Magic Candy him without a lucky pull, which makes poison teams one of the most accessible meta archetypes. The key thing is that he's a poison enabler rather than a healer.",
    },
    {
      question: "What does Black Sapphire Cookie's skill do?",
      answer:
        "His skill, It's Showtime!, runs on a 15-second base cooldown. He scatters Black Sapphire Gems that explode to inflict Poison damage, apply +25% Amplified Debuffs and a +25% Poison-type Weakness to enemies, and reduce enemy DEF by 20% for each Poison-type cookie on the team (capped at 80%). The gems also heal all Poison-type allies and grant them +25% DMG Resist. As long as he's on the battlefield, allies get +35% Poison-type ATK Up. His Deceitful Trio buff activates partially with Candy Apple Cookie and fully with Shadow Milk Cookie, adding an extra Poison stack and bonus healing.",
    },
    {
      question: 'Is Black Sapphire Cookie a healer or a support?',
      answer:
        "He's a support, but specifically a poison enabler rather than a dedicated healer. His gems do heal Poison-type allies, but the heal is a perk — his real value is the DEF shred that scales with how many Poison cookies you field, the debuff and Poison-damage amplification, and the always-on +35% Poison ATK Up he gives the team. That's why you build him for cooldown and contribution, not bulk: gear him like a healer-tank and the heal lands but the poison damage fizzles. He makes a poison team's offense real, which is a different job than a generic healer.",
    },
    {
      question: 'What team should I run with Black Sapphire Cookie?',
      answer:
        "Run him on a dedicated poison team and field as many Poison-type cookies as you can, because his DEF shred scales at 20% per Poison cookie up to an 80% cap — a four-poison core strips the enemy's defense to the floor. His best-case home is the Deceitful Trio: enter with Candy Apple Cookie for a partial buff activation and add Shadow Milk Cookie for the full activation, which adds a big extra Poison stack and bonus healing. Add a real frontline tank so he survives in the Middle to keep his +35% Poison buff up. He's an archetype keystone, not a generic support you slot anywhere.",
    },
    {
      question: 'Does Black Sapphire Cookie need Magic Candy?',
      answer:
        "If poison is a serious part of your roster, yes — and he's worth funding higher than a typical Epic because his Magic Candy scales the whole team. Much of his value is multiplicative (DEF shred, debuff amp, and the team Poison buff all boost the entire crew's output), so every level pays everyone, not just him. As a farmable Epic he's also one of the cheaper Magic Candies to fund since his soulstones come from regular content. Get it equipped and leveled to a functional baseline first, then push it higher as your poison team becomes a main archetype.",
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/crk-toppings-guide', anchor: 'toppings guide' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide', anchor: 'treasures guide' },
    { href: '/blog/cookie-run-kingdom/crk-magic-candy-priority-guide', anchor: 'Magic Candy priority guide' },
    { href: '/blog/cookie-run-kingdom/best-crk-support-cookies-ranked', anchor: 'support tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked', anchor: 'tank tier list' },
    { href: '/blog/cookie-run-kingdom/shadow-milk-cookie-toppings-build', anchor: 'Shadow Milk build guide' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Black_Sapphire_Cookie', title: 'Cookie Run: Kingdom Wiki — Black Sapphire Cookie' },
    { url: 'https://www.pocketgamer.com/cookie-run-kingdom/', title: 'Pocket Gamer — Cookie Run: Kingdom guides' },
    { url: 'https://www.thegamer.com/cookie-run-kingdom-best-toppings/', title: 'TheGamer — Cookie Run: Kingdom toppings guides' },
  ],

  tldr:
    "Black Sapphire Cookie is an Epic Support, Middle-position, Poison-element enabler — not a healer. His It's Showtime! skill (15-second cooldown) drops gems that poison enemies, apply +25% Amplified Debuffs and Poison Weakness, shred enemy DEF by 20% per Poison cookie (capped 80%), heal Poison allies, and grant a team-wide +35% Poison ATK Up while he's alive. Build him cooldown-first: default 5x Swift Chocolate (Cooldown), graduating to 3x Swift Chocolate + 2x Juicy Apple Jelly (CRIT%) so his stat-scaled heal and ticks hit harder. Prioritize Cooldown, then CRIT%, then ATK%, with a DMG Resist/HP floor to keep his buff up. Run him on a dedicated poison team — ideally the Deceitful Trio with Candy Apple and Shadow Milk — and fund his Magic Candy higher than a typical Epic since it scales the whole crew.",
};
