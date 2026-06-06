import type { BlogPost } from '../../blogTypes';

export const frostQueenCookieToppingsBuild: BlogPost = {
  slug: 'frost-queen-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'frost-queen-build',

  title: 'Frost Queen Cookie Toppings Build & Guide',
  metaDescription:
    'Frost Queen Cookie build guide for June 2026: the cooldown topping spread, substat priorities, beascuit and tart picks, Crystal Jam notes, and team comps.',
  excerpt:
    "Frost Queen is the Legendary everyone builds for raw ATK and then watches whiff her freeze in Arena. She's a freeze-control engine first and a nuker second, and that flips the whole topping sheet toward cooldown. Here's the build: toppings, substats, beascuit, Crystal Jam, Magic Candy, and team fit.",
  featuredImagePrompt:
    'Frost Queen Cookie center frame, the ice witch summoning a towering squall with a wave of her hand, enemies frozen in pale-blue crystal below her, deep teal and frost-white palette with drifting snow and silver moonlight, Cookie Run: Kingdom key-art style, painterly cel-shaded, cold dramatic backlighting',
  heroImage: '/images/blog/cookie-run-kingdom/frost-queen-cookie-toppings-build/frost-queen-cookie.webp',
  heroImageAlt: 'Frost Queen Cookie, the Legendary-rarity Magic-class freeze-control cookie this June 2026 toppings build guide is for.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/frost-queen-cookie-toppings-build/frost-queen-cookie.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Frost_Queen_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/frost-queen-cookie-toppings-build/frost-queen-cookie-standing.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Frost_Queen_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    { src: '/images/gear/toppings/chocolate.png', sourceUrl: 'owned-asset' },
    { src: '/images/gear/toppings/raspberry.png', sourceUrl: 'owned-asset' },
  ],

  publishDate: '2026-06-06T00:00:00.000Z',
  lastUpdated: '2026-06-06T00:00:00.000Z',

  primaryKeyword: 'frost queen cookie toppings',
  secondaryKeywords: [
    'frost queen cookie build',
    'best toppings frost queen',
    'frost queen beascuit',
    'frost queen magic candy',
    'frost queen crystal jam',
    'frost queen cookie team',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 11,

  toc: [
    { id: 'who-frost-queen-actually-is', label: 'Who Frost Queen actually is', level: 2 },
    { id: 'why-she-is-a-cooldown-build-not-a-pure-atk-one', label: 'Why she is a cooldown build, not a pure ATK one', level: 2 },
    { id: 'the-standard-frost-queen-topping-build', label: 'The standard Frost Queen topping build', level: 2 },
    { id: 'substat-priorities-without-the-fake-numbers', label: 'Substat priorities without the fake numbers', level: 2 },
    { id: 'the-atk-leaning-alternate-build', label: 'The ATK-leaning alternate build', level: 2 },
    { id: 'beascuit-pick-cooldown-and-ice', label: 'Beascuit pick — cooldown and Ice', level: 2 },
    { id: 'tart-and-treasure-picks', label: 'Tart and treasure picks', level: 2 },
    { id: 'magic-candy-for-frost-queen', label: 'Magic Candy for Frost Queen', level: 2 },
    { id: 'the-crystal-jam-skill', label: 'The Crystal Jam skill', level: 2 },
    { id: 'team-comps-and-where-she-fits', label: 'Team comps and where she fits', level: 2 },
    { id: 'common-frost-queen-build-mistakes', label: 'Common Frost Queen build mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Frost Queen gets built wrong by reflex. She's a Magic damage dealer, so people stack ATK, treat her like a nuker, and then can't figure out why her freeze keeps landing too late to matter and her enemies thaw before the team can capitalize. The problem is the priority. Frost Queen's payoff isn't the size of one ice squall — it's the **lockdown**. Her skill freezes the entire enemy line, pauses their cooldowns while they're iced, and stacks a Frost debuff that amplifies follow-up damage. That whole package is gated by how often she can throw it, which means the stat that makes her good is cooldown, not raw attack.

This is the June 2026 build sheet for her: toppings, substats, beascuit, tart, Magic Candy, her Crystal Jam upgrade, team fit, and the mistakes that turn one of the most enduring Legendaries in the game into a benchwarmer. Where the community has invented precise substat roll-targets, I'll give you the direction instead of a fake number — because the wrong number gets copy-pasted forever, and the direction is what actually moves a build.

## Who Frost Queen actually is

![Frost Queen Cookie summoning an ice squall, the Legendary-rarity Magic freeze-control cookie this build is for.](/images/blog/cookie-run-kingdom/frost-queen-cookie-toppings-build/frost-queen-cookie.webp)

Get the identity right before you spend a single topping. Frost Queen Cookie is **Legendary rarity** and her class is **Magic**, which positions her in the **Middle** row. Her element is **Ice**. She released back in November 2021 alongside Cotton Cookie, and she's stayed relevant for years — which for a launch-era Legendary tells you the kit is doing something durable, not just dealing a number.

Her skill, **Freezing Squall**, is the whole reason to run her. She casts an ice squall that deals Ice-type Magic damage, **freezes every enemy**, and applies a **Frost** debuff. The freeze does two important things beyond the obvious crowd control: while a target is frozen its **cooldown is paused** (so enemy skills get delayed, not just interrupted), and when the target thaws it takes an **additional burst of damage** — unless the freeze gets dispelled first, in which case it skips the bonus hit. The Frost debuff layers on **reduced enemy ATK SPD** and a stacking **Freeze DMG amplification** that makes the next freeze hit harder. She's also immune to freezing herself, which matters in the mirror.

Read it together and she's not a glass-cannon nuker. She's a **control-and-amplify** piece: she stops the enemy line cold, delays their skills, weakens their attack speed, and sets up bonus damage. The Ice damage is real, but it's the delivery mechanism for the control — not the point.

## Why she is a cooldown build, not a pure ATK one

Here's the fork that decides everything, and it's the opposite of how most people gear a "Magic damage dealer." A pure nuker — Sea Fairy is the textbook case — wants ATK above all, because her value is the size of one giant hit. Frost Queen is the other kind of cookie. Her value is in **how often she can re-apply the lockdown**: refresh the freeze before the enemy gets a full skill off, keep their cooldowns paused, keep their attack speed shredded, keep stacking Frost. That is a function of cast frequency, which means **cooldown is your build.**

ATK still matters — it scales the Ice damage and the thaw burst — but it's a multiplier on an engine whose foundation is uptime. Stack ATK at the expense of cooldown and you get a slightly bigger squall that lands less often, which on a control cookie is a bad trade: the windows where the enemy is un-frozen and free to cast are exactly what you're trying to eliminate. Get the rotation tight first, then let ATK scale the damage on top.

This is why treating her purely as a nuker disappoints people in Arena. If your freeze lands a beat too late, the enemy carry already cast, and the whole point of her — denying that cast — is gone. Build the cooldown so the lockdown is reliable, not just big.

## The standard Frost Queen topping build

![A Cooldown (Swift Chocolate) topping icon — the cooldown set is the backbone of the standard Frost Queen build.](/images/gear/toppings/chocolate.png)

**5x Cooldown toppings (the Swift Chocolate set).** That's the backbone, and for control-focused play it isn't close.

The standard:

- **Toppings:** 5x Swift Chocolate (Cooldown)
- **Beascuit:** a cooldown-priority beascuit, ideally one that leans into her Ice element
- **Tart:** a cooldown tart for the control build, an ATK tart only if you go the burst route
- **Magic Candy:** equipped and leveled

The reason cooldown wins is everything above: the value is in freeze uptime, and faster casts mean more lockdown, more paused enemy cooldowns, more thaw bursts, and more Frost stacks. The official wiki lists her recommended toppings as a blend of Cooldown, ATK, and DMG Resist with DMG Resist Bypass in the mix — which confirms cooldown belongs at the core and ATK is a real but secondary lever, not the headline. There's a legitimate ATK-leaning alternate (below) for players who want her as more of a burst piece, but for the general case, cooldown is the build.

If you're new to how topping sets and substats interact, the [toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide) covers the fundamentals this build assumes.

## Substat priorities without the fake numbers

Substats are where most of a build's quality lives, and where the CRK community most loves to invent exact percentages nobody can verify. No fake "you need exactly 19.7% cooldown" target here — just the honest priority order:

1. **Cooldown** — the priority, on as many toppings as you can manage. This is the stat that keeps her freeze, the paused enemy cooldowns, and her Frost amplification cycling, which is the whole reason to run her.
2. **ATK%** — your secondary. It scales the Ice damage of the squall and the thaw burst, so once your cooldown is healthy, ATK% is the next best thing to roll. Take ATK% over flat ATK every time; the percentage scales with her base stat, the flat number doesn't.
3. **DMG Resist Bypass or DMG Resist** — useful riders. Bypass reinforces a strength (her kit already wants to push damage through resistant targets), and a touch of DMG Resist keeps her standing, since the Middle row is still reachable by burst in Arena.

The practical rule: **roll for cooldown first, fill the gaps with ATK%, and don't chase a perfect set.** Cooldown has diminishing returns once her rotation is tight — past a point you're shaving fractions of a second off an already-short timer. Hit "the freeze is always up when I need it" and go build your next cookie.

## The ATK-leaning alternate build

There's a real second build worth knowing: an **ATK-leaning set (Searing Raspberry, or a Raspberry-heavy mix)** for players who want to lean into her Ice damage and the thaw burst as a damage contribution rather than pure control. The wiki's own listed toppings for her blend cooldown, ATK, and DMG Resist, which tells you ATK is a legitimate stat on her — not a trap.

It's the situational pick, though. In content where you've got the freeze covered elsewhere, or where the fight ends fast enough that a single big squall matters more than sustained lockdown, leaning ATK squeezes more raw damage out of her. For Arena and most PvE — anywhere the *control* is what you're paying a Legendary slot for — cooldown wins. If you only build her one way, build her for cooldown. If you specifically want her as a damage piece, lean ATK and commit to that lane instead of mixing the two halfway.

## Beascuit pick — cooldown and Ice

The beascuit slot follows the same logic as the toppings: **prioritize cooldown**, and where you can, lean into her **Ice** element. Cooldown is another lever on her cast frequency, and an Ice-flavored beascuit scales the damage type her kit is built around.

Stat priority on the beascuit: **Cooldown > DMG Resist Bypass effects > ATK%.** Cooldown for the rotation, resistance-bypass because it reinforces how her damage wants to land, and ATK% as the multiplier underneath. A high-quality beascuit is the ceiling, but any beascuit you can stack cooldown and Ice on does the core job. Don't bring a pure-ATK beascuit to the control build — it looks like more damage and is actually fewer freezes.

## Tart and treasure picks

Two routes, matched to your topping build:

**Cooldown tart for the control build.** It stacks with your topping cooldown to push her rotation as tight as it goes. This is the default.

**ATK tart for the ATK-leaning build.** Only if you've deliberately committed to the burst lane. Don't mix an ATK tart into a cooldown set — pick a lane.

For treasures, the through-line holds: a **battle-start cooldown treasure** is excellent on her because it gets the first freeze out in the opening window — denying the enemy's first cast is often the entire game in Arena. Lead with cooldown-and-tempo treasures, then damage-amp; the [treasures guide](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide) covers the current best-in-slot options and how they stack.

## Magic Candy for Frost Queen

Magic Candy is where a Legendary goes from "good" to "why is the enemy team frozen the entire fight," and Frost Queen is a clean case. Her Magic Candy deepens the freeze-control identity — more reliable, longer, or harder-hitting lockdown depending on the levels — which on a cooldown-spam build compounds with everything else you've stacked. You're amplifying a lot of casts rather than one big one.

Leveling priority is the usual: get it equipped and leveled to a functional baseline first, then push it higher if she's a main fixture in your serious Arena or high-tier PvE teams. Because her value is control rather than a single burst, every level that makes the freeze more reliable pays off across the whole fight. The [Magic Candy priority guide](/blog/cookie-run-kingdom/crk-magic-candy-priority-guide) has the framework for where she should sit relative to the rest of your roster; a control Legendary you actually use generally earns a spot in that line.

## The Crystal Jam skill

Frost Queen has a **Crystal Jam skill — Eternal Frost** — a power-up that *replaces* her base skill (and note: skill level-ups don't carry over to it). It turns her from a strong control piece into a team-wide Ice engine. Instead of a single squall, she calls a **Blizzard** that deals damage and applies Frost, with a final hit that brings a Shard of Eternal Frost to freeze the line; enemies immune to freezing get **Chilled** first and then frozen once they lose the immunity, which closes the loophole freeze-immune teams used to exploit.

The bigger deal is the **Rally effect, Harbinger of Ice**: it grants the *whole team* +30% Ice-type damage and gives every ally a chance to re-freeze Frost targets when they deal Ice damage. That reframes her in an Ice-mono team — she's not just locking the enemy down, she's buffing your Ice carries and creating extra freezes off their hits. If you're running her with other Ice cookies, the Crystal Jam build is the version that turns the team into a freeze-lock machine. It doesn't change the core gearing logic — cooldown is still king, because more casts means more Blizzards and more rally uptime — but it raises her ceiling enormously on a dedicated Ice squad.

## Team comps and where she fits

Frost Queen is a control-and-amplify piece, not a self-sufficient carry. Build the team to cash in the lockdown she provides:

- **Front line:** a real tank so she's never the first target while she sets up the freeze. Anything from the [tank tier list](/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked) works — a DMG Resist anchor like Hollyberry keeps the front standing through the opening burst so her squall lands clean.
- **A carry to exploit the freeze:** the lockdown, the paused enemy cooldowns, and the Frost amplification all set up *someone else* to do work. Pair her with a hard-hitter from the [DPS tier list](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked) who can capitalize on a frozen, debuffed line — an Ice carry especially, if you're leaning into the Crystal Jam rally.
- **A second control or support piece, flexed by mode:** chaining her freeze with another lockdown or interrupt can keep an enemy team permanently denied. The [support tier list](/blog/cookie-run-kingdom/best-crk-support-cookies-ranked) and the [best PvE teams](/blog/cookie-run-kingdom/best-crk-pve-teams) cover who pairs with her.

She slots into the shells the [Kingdom Arena meta team](/blog/cookie-run-kingdom/kingdom-arena-meta-team) and the [Guild Battle teams guide](/blog/cookie-run-kingdom/guild-battle-teams) lay out — a durable front, a control piece, and a carry to cash in. Keep her in the Middle row. She's not a tank, and up front her cast gets interrupted before the freeze ever lands.

## Common Frost Queen build mistakes

In rough order of how often they show up:

1. **Building her full ATK by default.** She's a control engine, not a single-burst nuker. Stacking ATK over cooldown gives you a slightly bigger squall that lands less often — which means more windows where the enemy is un-frozen and free to cast, the exact thing you're trying to prevent. Cooldown first.

2. **A pure-ATK beascuit on the cooldown build.** Same mistake, different slot. The beascuit is a cooldown-and-Ice slot first.

3. **Mixing an ATK tart into a cooldown set (or vice versa).** Pick a lane — a half-and-half setup is worse than either.

4. **Chasing perfect cooldown rolls forever.** Cooldown has diminishing returns once she's on a tight loop. Hit "the freeze is always up when I need it" and go build your next cookie.

5. **Moving her off the Middle row.** Up front her cast gets interrupted before the freeze lands; she needs the protection of a tank to set up cleanly.

6. **Running her with no carry to capitalize.** Her whole payoff is setting *someone else* up — a frozen, cooldown-locked, Frost-stacked enemy line is only valuable if you have a damage dealer to delete it. Alone, she's a control piece with nothing to control for.

## Quick Action Checklist

- Equip 5x Swift Chocolate (Cooldown) as the standard build
- Prioritize Cooldown substats, then ATK%, then DMG Resist Bypass or DMG Resist — and don't reroll forever
- Take ATK% over flat ATK every time
- Run a cooldown-priority beascuit, ideally one that leans into her Ice element
- Pair a cooldown tart with the control build; only use an ATK tart on the ATK-leaning burst build
- The Searing Raspberry ATK-leaning set is the situational pick when you want her as a damage piece
- Lead with battle-start cooldown treasures so the first freeze lands in the opening window
- Equip and level Magic Candy; push it higher if she's a core fixture
- If you've unlocked her Crystal Jam (Eternal Frost), run it on Ice-mono teams for the +30% team Ice DMG rally — cooldown is still king
- Keep her in the Middle row, never the front
- Build the team to cash in her freeze: a real tank, a carry to exploit the lockdown, and a flex slot`,

  faq: [
    {
      question: 'What are the best toppings for Frost Queen Cookie?',
      answer:
        "5x Swift Chocolate (Cooldown) is the standard build, because Frost Queen's value is freeze uptime — keeping the enemy line locked down, their cooldowns paused, their attack speed shredded, and her Frost debuff stacking — rather than one big hit. Prioritize Cooldown substats, then ATK%, then DMG Resist Bypass or DMG Resist. There's a legitimate ATK-leaning alternate (Searing Raspberry, or a Raspberry-heavy mix) for when you want her as a damage piece, and the wiki's own recommended toppings blend cooldown, ATK, and DMG Resist, but for control-focused play the cooldown build wins.",
    },
    {
      question: 'What class and rarity is Frost Queen Cookie?',
      answer:
        "Frost Queen Cookie is a Legendary-rarity, Magic-class cookie positioned in the Middle row, with an Ice element. She released in November 2021 alongside Cotton Cookie and has stayed relevant for years. Despite being a Magic damage dealer, she plays as a control-and-amplify piece rather than a glass-cannon nuker: her skill freezes the entire enemy line, pauses frozen targets' cooldowns, reduces their attack speed, deals bonus damage when they thaw, and stacks a Frost debuff that amplifies follow-up freezes.",
    },
    {
      question: 'Why is cooldown the priority stat on Frost Queen instead of ATK?',
      answer:
        "Because her contribution scales with how often she re-applies the lockdown, not the size of one cast. Every time she casts, she freezes the enemy line, pauses their cooldowns, shreds their attack speed, and stacks Frost — so the limiting resource is the time between casts. Cooldown reduction directly increases her freeze uptime and control, which is the entire reason to run a Legendary slot on her. ATK still helps as a multiplier on her Ice damage and the thaw burst, but it's a multiplier on a cooldown engine: build the rotation first, then let ATK scale the damage.",
    },
    {
      question: "What does Frost Queen Cookie's Crystal Jam do?",
      answer:
        "Her Crystal Jam skill, Eternal Frost, replaces her base skill (skill level-ups don't carry over to it). Instead of a single squall she calls a Blizzard that applies Frost with a final hit that freezes the line, and enemies immune to freezing get Chilled first and then frozen once they lose the immunity. The bigger upgrade is its Rally effect, Harbinger of Ice, which grants the whole team +30% Ice-type damage and a chance for allies to re-freeze Frost targets when they deal Ice damage. On a dedicated Ice team it turns her from a strong control piece into a team-wide freeze-lock and damage engine.",
    },
    {
      question: 'What team should I run with Frost Queen Cookie?',
      answer:
        "Build the team to cash in the lockdown she provides. Put a real tank up front — a DMG Resist anchor like Hollyberry — so she's never focused while she sets up the freeze, pair her with a hard-hitting carry (an Ice carry especially if you're using her Crystal Jam rally) to delete the frozen, debuffed enemy line, and flex a second control piece or support based on mode. Keep her in the Middle row where she belongs as a Magic cookie; up front her cast gets interrupted before the freeze lands.",
    },
    {
      question: 'Does Frost Queen Cookie need Magic Candy?',
      answer:
        "If she's a main fixture in your serious Arena or high-tier PvE teams, yes. Her Magic Candy deepens the freeze-control identity — more reliable or longer lockdown depending on the levels — and because her value is control across the whole fight rather than one burst, every level pays off cleanly on a cooldown-spam build. Get it equipped and leveled to a functional baseline first, then push it higher as she becomes a permanent part of your roster.",
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/crk-toppings-guide', anchor: 'toppings guide' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide', anchor: 'treasures guide' },
    { href: '/blog/cookie-run-kingdom/crk-magic-candy-priority-guide', anchor: 'Magic Candy priority guide' },
    { href: '/blog/cookie-run-kingdom/best-legendary-cookies-crk-ranked', anchor: 'best Legendary cookies ranked' },
    { href: '/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked', anchor: 'DPS tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked', anchor: 'tank tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-support-cookies-ranked', anchor: 'support tier list' },
    { href: '/blog/cookie-run-kingdom/best-crk-pve-teams', anchor: 'best PvE teams' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team' },
    { href: '/blog/cookie-run-kingdom/guild-battle-teams', anchor: 'Guild Battle teams guide' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Frost_Queen_Cookie', title: 'Cookie Run: Kingdom Wiki — Frost Queen Cookie' },
    { url: 'https://www.pocketgamer.com/cookie-run-kingdom/', title: 'Pocket Gamer — Cookie Run: Kingdom guides' },
    { url: 'https://www.thegamer.com/cookie-run-kingdom-best-toppings/', title: 'TheGamer — Cookie Run: Kingdom toppings guides' },
  ],

  tldr:
    "Build Frost Queen Cookie for cooldown, not raw ATK — she's a Legendary Magic cookie who works as a freeze-control engine, and her value comes from how often she re-applies the lockdown (freezing the enemy line, pausing their cooldowns, shredding attack speed, and stacking her Frost debuff). Run 5x Swift Chocolate (Cooldown) with Cooldown-priority substats, then ATK%, then DMG Resist Bypass or DMG Resist, plus a cooldown-and-Ice beascuit and a cooldown tart. An ATK-leaning Searing Raspberry build is a legitimate alternate when you want her as a damage piece. Her Crystal Jam (Eternal Frost) adds a +30% team Ice-damage rally that shines on Ice-mono teams. Level her Magic Candy if she's a core fixture, keep her Middle row, and pair her with a real tank and a carry to cash in the freeze.",
};
