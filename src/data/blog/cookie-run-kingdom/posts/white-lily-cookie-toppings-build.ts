import type { BlogPost } from '../../blogTypes';

export const whiteLilyCookieToppingsBuild: BlogPost = {
  slug: 'white-lily-cookie-toppings-build',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'white-lily-build',

  title: 'White Lily Cookie Toppings Build & Guide',
  metaDescription:
    'White Lily Cookie build guide for June 2026: the Cooldown-and-ATK topping split, substat priorities, beascuit and tart picks, the Dawnbringer form, and team comps.',
  excerpt:
    "White Lily is the Ancient everyone wants to treat like a healer, then gears her like a pure nuke and wonders why she does neither well. She's a Bomber whose damage scales off her own buffs while her Lily Restoration passive quietly purifies and heals the team — and that split is the whole build. Here's the topping sheet: substats, beascuit, tart, the Dawnbringer Awakened form, and where she fits.",
  featuredImagePrompt:
    'White Lily Cookie center frame, the saintly final Ancient bursting open a glowing white lily bud, emerald Grass-element vines coiling around enemies as soft green restoration light washes over allies behind her, ivory-and-gold robes with deep green accents, Cookie Run: Kingdom key-art style, painterly cel-shaded, ethereal backlighting',
  heroImage: '/images/blog/cookie-run-kingdom/white-lily-cookie-toppings-build/white-lily-cookie.webp',
  heroImageAlt: 'White Lily Cookie, the Ancient-rarity Bomber-class mid-line cookie this June 2026 toppings build guide is for.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/white-lily-cookie-toppings-build/white-lily-cookie.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/White_Lily_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/white-lily-cookie-toppings-build/pure-vanilla-cookie.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Pure_Vanilla_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    { src: '/images/gear/toppings/raspberry.png', sourceUrl: 'owned-asset' },
    { src: '/images/gear/toppings/chocolate.png', sourceUrl: 'owned-asset' },
  ],

  publishDate: '2026-06-21T00:00:00.000Z',
  lastUpdated: '2026-06-21T00:00:00.000Z',

  primaryKeyword: 'white lily cookie toppings',
  secondaryKeywords: [
    'white lily cookie build',
    'best toppings white lily',
    'white lily beascuit',
    'white lily magic candy',
    'dawnbringer white lily toppings',
    'white lily cookie team',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 11,

  toc: [
    { id: 'who-white-lily-actually-is', label: 'Who White Lily actually is', level: 2 },
    { id: 'why-she-is-a-bomber-not-a-healer', label: 'Why she is a Bomber, not a healer', level: 2 },
    { id: 'the-standard-white-lily-topping-build', label: 'The standard White Lily topping build', level: 2 },
    { id: 'substat-priorities-without-the-fake-numbers', label: 'Substat priorities without the fake numbers', level: 2 },
    { id: 'searing-raspberry-vs-swift-chocolate', label: 'Searing Raspberry vs Swift Chocolate', level: 2 },
    { id: 'beascuit-pick-grass-and-cooldown', label: 'Beascuit pick — Grass and Cooldown', level: 2 },
    { id: 'tart-and-treasure-picks', label: 'Tart and treasure picks', level: 2 },
    { id: 'magic-candy-for-white-lily', label: 'Magic Candy for White Lily', level: 2 },
    { id: 'the-dawnbringer-white-lily-form', label: 'The Dawnbringer White Lily form', level: 2 },
    { id: 'team-comps-and-where-she-fits', label: 'Team comps and where she fits', level: 2 },
    { id: 'common-white-lily-build-mistakes', label: 'Common White Lily build mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `White Lily is the cookie people gear like a healer because her kit cleanses and heals, then they watch her do chip damage and decide she's a support that doesn't pull her weight. Or they read "Ancient damage dealer" and slam a pure-ATK sheet on her, and then her cooldown is so long the team eats the debuffs she's supposed to wipe. Both reads miss the same thing: she's a **Bomber** whose damage scales off how many buffs she's stacked on herself, and whose purify-and-heal is a *passive* that fires on a counter, not a button you press. Build her to keep that counter ticking and her bud landing, and she does two jobs at once. Build her for one, and she does neither.

This is the June 2026 build sheet for her: toppings, substats, beascuit, tart, Magic Candy, the Dawnbringer Awakened form, team fit, and the mistakes that bench the last Ancient to ever release. Where the community has invented precise substat roll-targets, I'll give you the direction instead of a fake number — because the wrong number gets copy-pasted forever, and the direction is what actually moves a build. The exact roll values you see floating around are region- and patch-variable; confirm the live numbers in-game before you reroll yourself broke.

## Who White Lily actually is

![White Lily Cookie bursting open a glowing lily bud, the Ancient-rarity Bomber this build is for.](/images/blog/cookie-run-kingdom/white-lily-cookie-toppings-build/white-lily-cookie.webp)

Get the identity right before you spend a single topping. White Lily Cookie is **Ancient rarity** — one of the five original Ancients, alongside Pure Vanilla, Dark Cacao, Golden Cheese, and Hollyberry — and she was the *last* of the five to become playable, released in the 5.0 update alongside Silverbell Cookie. Her class is **Bomber**, her position is prioritized to the **Middle** line, and her element is **Grass**. She's Pure Vanilla's treasured friend, an honored figure of the Faerie Kingdom, and — for anyone who's followed the story — the original identity behind Dark Enchantress Cookie.

Her skill, **Lily Bud**, is what you're actually building. A white lily bud bursts open, dealing periodic Grass damage to enemies, plus **extra damage that scales with the number of buffs White Lily Cookie has on herself**. Enemies caught in it get entangled in **Vines** — unable to move or use skills for a short window — and when the Vines wear off they're left with a heavy MOV SPD reduction and a Weakness (incoming DMG up) debuff. On top of that, every skill she casts carries a flat chunk of **DMG Resist Bypass on her skill damage**, so her hits punch through tanky enemies.

Then there's the engine that confuses everyone: **Lily Restoration**. Whenever she or an ally gains a debuff, and whenever she casts her skill, she builds Lily Restoration stacks. Once the counter reaches a threshold, it **purifies all current debuffs on the team and heals them**. She's also flatly immune to Spore Dispersal and Mushroom Mutation. Read it together and the picture is clear: she's not a healer with a damage button, and she's not a nuke with a heal stapled on. She's a damage dealer whose payoff *and* her team utility both want the same two things — to cast often and to be buffed when she does.

## Why she is a Bomber, not a healer

Here's the fork that decides her whole topping sheet. New players see "purifies and heals" and reach for HP or healing-flavored gear, because she keeps the team alive, right? Wrong — her cleanse and heal are a **passive that fires off a stack counter**, not a value that scales with her HP or any healing stat. You can't make Lily Restoration heal harder by stacking HP. You make it fire *more often* by casting more often and by being in fights where debuffs are flying — both of which come down to **Cooldown**.

The other half of her output is the bud, and that **scales with ATK and with the number of buffs on her**. So the two stats that actually move her — both her damage and her team utility — are **ATK and Cooldown**. The official wiki lists her core stats as Cooldown, DMG Resist Bypass, ATK, and DMG Resist, and that ordering tells you everything: cast fast, punch through resist, hit hard. HP and DMG Resist are survival backups, not the point.

This is why "heal-building" her quietly fails: against real content she's not out-healing a dedicated healer, and you've spent your slots on a stat that doesn't touch the part of her kit that wins fights. Build the Bomber. The cleanse comes for free as long as she's casting.

## The standard White Lily topping build

![A Searing Raspberry (ATK) topping icon — the raspberry set anchors the damage-leaning White Lily build.](/images/gear/toppings/raspberry.png)

**5x Searing Raspberry (ATK) or 5x Swift Chocolate (Cooldown).** That's the real choice, and unlike most cookies, both are legitimate defaults depending on what you want out of her.

The standard:

- **Toppings:** 5x Searing Raspberry (max damage) or 5x Swift Chocolate (max uptime and crowd control)
- **Beascuit:** a Cooldown/ATK-priority beascuit that leans into her Grass element
- **Tart:** an ATK tart for the damage build, a cooldown-flavored route if you went full Swift Chocolate
- **Magic Candy:** equipped and leveled

The reason it's a genuine fork instead of one obvious answer is her dual role. Five Searing Raspberry maximizes the bud's damage, leaning into the buff-scaling Bomber side of her. Five Swift Chocolate drives her cooldown down hard — the full set shortens her skill cycle meaningfully — which means more Vines locking enemies down and more frequent Lily Restoration purifies for the team. Neither is wrong. Pick based on whether you want her as a damage piece or a control-and-cleanse piece, and commit to the set.

If you're new to how topping sets and substats interact, the [toppings guide](/blog/cookie-run-kingdom/crk-toppings-guide) covers the fundamentals this build assumes.

## Substat priorities without the fake numbers

Substats are where most of a build's quality lives, and where the CRK community most loves to invent exact percentages nobody can verify. No fake "you need exactly 38.2% Cooldown" target here — just the honest priority order:

1. **Cooldown** — the non-negotiable, on as many toppings as you can manage regardless of which main set you ran. Cooldown drives every part of her kit at once: more bud casts means more damage, more Vines lockdowns, and more Lily Restoration triggers purifying the team. There is no White Lily build where cooldown isn't near the top.
2. **ATK** — your damage stat, the other half of the "she needs a lot of both" rule. The bud scales with ATK, so on a damage-leaning Searing Raspberry build this rides right alongside cooldown. Stack it heavily.
3. **DMG Resist Bypass** — a strong tertiary, because her skill already carries a chunk of it and more lets the bud punch through tanky Arena front lines. Take it where it lands.
4. **DMG Resist / HP** — the survival backups. She's mid-line and not especially durable, so a little goes a long way, but don't lead with it. Let it fill the gaps after Cooldown and ATK.

The practical rule: **Cooldown and ATK are both mandatory — roll for them first, take DMG Resist Bypass where you can, and let survival stats fill the rest.** Don't reroll forever chasing a fraction of a percent; get her cooldown low and her ATK high enough that the bud hurts, then go build your next cookie.

## Searing Raspberry vs Swift Chocolate

![A Swift Chocolate (Cooldown) topping icon — the chocolate set turns White Lily into a control-and-cleanse engine.](/images/gear/toppings/chocolate.png)

This is the decision that actually defines your White Lily, so it's worth its own breakdown:

**5x Searing Raspberry — the damage build.** You're treating her as a Bomber first. The bud hits harder, her buff-scaling extra damage matters more, and she contributes real chip-and-burst to clears. The cleanse still happens because she's still casting; it just isn't the reason you brought her. This is the pick when your team already has cleanse covered or when you want her pulling damage weight.

**5x Swift Chocolate — the control-and-cleanse build.** The full Swift Chocolate set drives her cooldown way down, which compounds with everything: more frequent Vines means enemies spend more of the fight unable to act, and more frequent casts means Lily Restoration purifies the team more often. Her damage drops relative to the raspberry build, but her utility goes through the roof. This is the pick for Arena and debuff-heavy content where locking enemies down and wiping team debuffs wins more than raw damage.

The honest answer for most rosters: if she's your team's main debuff-cleanse answer, run Swift Chocolate. If you have cleanse elsewhere and want her as a damage piece, run Searing Raspberry. What you should *not* do is smear a 3-and-2 split and call it a build — her sets are strong because the full bonuses do specific things, and half-and-half throws both bonuses away.

## Beascuit pick — Grass and Cooldown

The beascuit slot follows the same logic as the toppings: **prioritize Cooldown and ATK**, and where you can, lean into her **Grass** element. Cooldown keeps her cycling, ATK feeds the bud, and a Grass-flavored beascuit scales the damage type her whole kit is built around.

Stat priority on the beascuit: **Cooldown and ATK first, then DMG Resist Bypass, then survival.** A high-quality Grass-leaning beascuit is the ceiling, but any beascuit you can stack cooldown and ATK on does the core work. Don't bring a pure-HP or pure-DMG-Resist beascuit to White Lily — she's a Bomber, and a defensive beascuit wastes the slot that should be reinforcing the two stats that actually run her kit.

## Tart and treasure picks

Two routes, matched to your topping build:

**ATK tart for the Searing Raspberry build.** Anything that scales the bud's damage stacks with the damage-leaning sheet. An ATK-priority tart is the default here.

**Cooldown-leaning tart for the Swift Chocolate build.** If you've gone full chocolate for control and cleanse uptime, push that lane further — though even on the chocolate build her ATK still matters, so don't go pure-defensive on the tart. Pick a lane and reinforce it.

For treasures, the through-line holds: she's a mid-line caster who wants to fire her skill early and often. A battle-start cooldown treasure is genuinely strong on her because it gets the first bud — and the first Vines lockdown — online during the opening exchange, which is exactly when an Arena team is trying to set up its own burst. Pair that with damage-amplifying treasures if you've built her for damage, or party-cooldown treasures if you've built her for control. The [treasures guide](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide) covers the current best-in-slot options and how they stack.

## Magic Candy for White Lily

Magic Candy deepens a kit that's already doing two jobs at once — dealing buff-scaled Grass damage and passively purifying-and-healing the team — so on a cooldown-and-ATK build it compounds with everything else you've stacked. For an Ancient you keep in serious teams, it's worth feeding.

That said, be honest about her place in your priority order. Pure damage carries and dedicated healers often pay off Magic Candy faster than a hybrid does, so unless White Lily is a permanent fixture in your Arena or high-tier PvE shells, she can wait behind your clearest win conditions. Get it equipped and leveled to a functional baseline first, then push it higher once she's earning a guaranteed slot. The [Magic Candy priority guide](/blog/cookie-run-kingdom/crk-magic-candy-priority-guide) has the framework for where she should sit relative to the rest of your roster.

## The Dawnbringer White Lily form

White Lily has an **Awakened form — Dawnbringer White Lily Cookie**, added in the 6.10 update alongside Awakened Silent Salt. It's a separate, more powerful version of her, and if you've awakened her, it's the one you run. Same core identity — a Grass-element caster who blends damage with team utility — but the kit gets a major upgrade, and the build leans even harder into the cooldown-and-ATK foundation that already defines base White Lily.

The practical translation: the same two stats run the Awakened form, so the build doesn't reinvent itself — you're still rolling Cooldown and ATK first, with DMG Resist Bypass as the tertiary. Decide between the damage-leaning and control-leaning sets the same way you would on base White Lily, based on whether your team needs her as a win condition or as a cleanse-and-lockdown engine. If you're working toward awakening her, the [Awakening guide](/blog/cookie-run-kingdom/crk-awakening-guide) covers the process and the resources it costs. Confirm the live Awakened skill values in-game before committing a full reroll — Awakened kits get tuned, and the exact numbers shift by patch.

## Team comps and where she fits

White Lily is a hybrid mid-liner: she deals real damage *and* keeps the team clean, so she fits teams that want both without spending two slots on it. Build around the parts of her kit you're leaning on:

- **Mid line:** her position is prioritized to the middle, which is where her bud reaches the back line and her Vines catch the cluster. Keep her there; she's not a front-liner and she's not a pure backline glass cannon.
- **A front line to buy her time:** she's a caster who needs to live long enough to cast. A durable anchor like Hollyberry from the [tank tier list](/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked) keeps the opening burst off her so the first bud lands.
- **A dedicated healer if you went damage-build:** her Lily Restoration cleanse-and-heal is a bonus, not a full healing kit. On the Searing Raspberry build, back her with a real healer from the [healers ranked](/blog/cookie-run-kingdom/best-crk-healers-ranked) list. On the Swift Chocolate build, her cleanse pulls more weight and you can sometimes lean on it as your debuff answer.
- **A second damage source:** even on her damage build she's chip-and-control more than a one-shot nuke, so pair her with a hard-hitter from the [DPS tier list](/blog/cookie-run-kingdom/best-crk-dps-cookies-ranked) to close fights.

She slots into the shells the [Kingdom Arena meta team](/blog/cookie-run-kingdom/kingdom-arena-meta-team) and the [Guild Battle teams guide](/blog/cookie-run-kingdom/guild-battle-teams) lay out, and she earns a spot in plenty of the [best PvE teams](/blog/cookie-run-kingdom/best-crk-pve-teams) precisely because her cleanse covers debuff-heavy content for free. Her Vines lockdown is especially valuable against enemy teams that rely on a single key skill — root the caster and the whole plan stalls.

## Common White Lily build mistakes

In rough order of how often they show up:

1. **Building her as a healer.** Her cleanse-and-heal is a passive that fires off a stack counter — it doesn't scale with HP or healing stats. Don't stack HP and expect her to out-heal a real healer. Build the Bomber; the cleanse comes free.

2. **Going pure ATK with no cooldown.** The opposite mistake. If her skill cycle is slow, she casts the bud less, locks fewer enemies down, and triggers Lily Restoration less often. Cooldown is mandatory on every White Lily build, raspberry or chocolate.

3. **Smearing a 3-and-2 topping split.** Her sets are strong because the *full* bonuses do specific things — max damage or a big cooldown cut. Half-and-half throws both away. Pick Searing Raspberry or Swift Chocolate and commit.

4. **A pure-HP or DMG-Resist beascuit.** Same mistake as the toppings, different slot. The beascuit is a Cooldown-ATK-and-Grass slot. A defensive beascuit wastes it.

5. **Running base White Lily when you've awakened her.** If you have Dawnbringer, run Dawnbringer — it's a strictly stronger version, and it wants the same cooldown-and-ATK foundation.

6. **Mis-positioning her.** She's prioritized to the middle for a reason. Forcing her to the front gets her bursted before she casts; dumping her to the far back can pull her out of where her kit wants to be. Let her sit mid.

## Quick Action Checklist

- Equip 5x Searing Raspberry for the damage build, or 5x Swift Chocolate for the control-and-cleanse build — and commit to the full set
- Prioritize Cooldown and ATK substats on every build, then DMG Resist Bypass, then a little survival — and don't reroll forever
- Run Swift Chocolate if she's your main cleanse answer; Searing Raspberry if you have cleanse elsewhere and want her damage
- Run a Cooldown/ATK-priority beascuit, ideally one that leans into her Grass element
- Pair an ATK tart with the raspberry build; reinforce cooldown with the chocolate build
- A battle-start cooldown treasure gets her first bud and first Vines online during the opening burst
- Equip and level Magic Candy, but let your clearest win conditions take priority unless she's a fixture
- If you've awakened her (Dawnbringer), run that form on the same cooldown-and-ATK foundation
- Keep her on the middle line where her bud reaches the back and her Vines catch the cluster
- Back her with a front-line anchor and a real healer on the damage build; lean on her cleanse on the chocolate build`,

  faq: [
    {
      question: 'What are the best toppings for White Lily Cookie?',
      answer:
        "It's a genuine choice: 5x Searing Raspberry (ATK) for the damage build, or 5x Swift Chocolate (Cooldown) for the control-and-cleanse build. White Lily is a Bomber whose Lily Bud scales with ATK and the number of buffs on her, while her cooldown drives how often she casts, locks enemies in Vines, and triggers her Lily Restoration purify-and-heal. Run Searing Raspberry if your team has cleanse covered and you want her dealing damage; run Swift Chocolate if she's your main debuff answer. Whichever set you pick, prioritize Cooldown and ATK substats first, then DMG Resist Bypass, then a little survival.",
    },
    {
      question: 'What class and rarity is White Lily Cookie?',
      answer:
        "White Lily Cookie is an Ancient-rarity, Bomber-class cookie whose position is prioritized to the Middle line, with a Grass element. She's one of the five original Ancient Cookies — and the last of them to become playable, released in the 5.0 update alongside Silverbell Cookie. Despite a kit that cleanses and heals, she isn't a healer: her Lily Bud deals buff-scaling Grass damage and roots enemies in Vines, while her Lily Restoration passive purifies team debuffs and heals once it reaches a stack threshold.",
    },
    {
      question: 'Should I build White Lily for ATK or Cooldown?',
      answer:
        "Both — they're both mandatory, which is why she needs a lot of each. ATK feeds her Lily Bud damage, and Cooldown drives how often she casts, which controls her damage, her Vines lockdown, and how frequently her Lily Restoration purify-and-heal fires. A pure-ATK White Lily with a slow cooldown casts too rarely; a pure-cooldown White Lily with no ATK does no damage. Roll for Cooldown and ATK first, take DMG Resist Bypass where it lands, and treat HP and DMG Resist as gap-fillers, not priorities.",
    },
    {
      question: 'Is Dawnbringer White Lily different to build?',
      answer:
        "It's a stronger version, but the foundation is the same. Dawnbringer White Lily Cookie is her Awakened form, added in the 6.10 update alongside Awakened Silent Salt, and it upgrades the same Grass-element damage-and-utility kit. You still roll Cooldown and ATK first with DMG Resist Bypass as the tertiary, and you still choose between the damage-leaning Searing Raspberry set and the control-leaning Swift Chocolate set based on what your team needs. Confirm the live Awakened skill values in-game before a full reroll, since Awakened kits get tuned by patch.",
    },
    {
      question: 'What team should I run with White Lily Cookie?',
      answer:
        "Build around the half of her kit you're leaning on. Keep her on the middle line where her bud reaches the back and her Vines catch the enemy cluster, put a durable front-line anchor ahead of her so she lives to cast, and add a second damage source to close fights. If you've built her for damage with Searing Raspberry, back her with a dedicated healer since her cleanse is a bonus rather than a full healing kit. If you've built her for control with Swift Chocolate, her frequent purifies can serve as your team's debuff answer. She fits most Arena, Guild Battle, and PvE shells, and her Vines lockdown is a soft counter to teams that rely on a single key skill.",
    },
    {
      question: 'Does White Lily Cookie need Magic Candy?',
      answer:
        "If she's a permanent fixture in your serious Arena or high-tier PvE teams, it's worth it — her Magic Candy deepens both the buff-scaled damage and the cleanse-and-heal utility she brings. But be honest about her place in line: pure damage carries and dedicated healers often pay off Magic Candy faster than a hybrid does, so unless she's earning a guaranteed slot, she can wait behind your clearest win conditions. Get it equipped and leveled to a functional baseline first, then push it higher once she's a fixture.",
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
    { href: '/blog/cookie-run-kingdom/best-ancient-cookies-crk-ranked', anchor: 'best Ancient cookies ranked' },
    { href: '/blog/cookie-run-kingdom/best-crk-pve-teams', anchor: 'best PvE teams' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team' },
    { href: '/blog/cookie-run-kingdom/guild-battle-teams', anchor: 'Guild Battle teams guide' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/White_Lily_Cookie', title: 'Cookie Run: Kingdom Wiki — White Lily Cookie' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Awakening', title: 'Cookie Run: Kingdom Wiki — Awakening (Dawnbringer White Lily)' },
    { url: 'https://www.pocketgamer.com/cookie-run-kingdom/', title: 'Pocket Gamer — Cookie Run: Kingdom guides' },
  ],

  tldr:
    "Build White Lily Cookie for Cooldown and ATK, not as a healer — she's an Ancient Bomber whose Lily Bud scales with ATK and her own buffs, while her Lily Restoration passive purifies and heals the team off a stack counter that fires faster the more she casts. Run 5x Searing Raspberry for the damage build or 5x Swift Chocolate for the control-and-cleanse build, with Cooldown and ATK substats first, then DMG Resist Bypass, plus a Grass-leaning Cooldown/ATK beascuit. Pick the set by whether she's your team's main cleanse or a damage piece, keep her on the middle line behind a front-line anchor, and run her Awakened Dawnbringer form on the same cooldown-and-ATK foundation when you have it.",
};
