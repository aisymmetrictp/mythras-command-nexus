import type { BlogPost } from '../../blogTypes';

export const ashSaltCookieToppings: BlogPost = {
  slug: 'ash-salt-cookie-toppings',
  game: 'cookie-run-kingdom',
  category: 'cookie-guides',
  topicCluster: 'cookie-deep-dive',

  title: 'Ash Salt Cookie — Best Toppings, Beascuit & Team Comps',
  metaDescription:
    'Ash Salt Cookie best toppings, beascuit, team comps and pull verdict for v7.4. Mythras-tested CD build that strips revive shields like a Legendary.',
  excerpt:
    'Ash Salt is the Epic anti-revive debuffer the F2P roster has been waiting for. Here is the exact toppings, beascuit and team build we run in v7.4.',
  tldr: 'Ash Salt Cookie\'s best build is Swift Chocolate x5 toppings with 3 Cooldown and 2 ATK SPD sub-stats, a Tainted Chewy beascuit attuned 3 CD + 1 DMGR, and a Chocolate topping tart. She\'s the v7.4 Epic anti-revive debuffer — worth pulling only if you already have Timekeeper or 500+ crystals saved.',
  featuredImagePrompt:
    'Dark fantasy portrait of Ash Salt Cookie surrounded by glowing corrosion stacks, ashen sigils floating around a Cookie Run Kingdom battlefield, cinematic lighting, painterly style, gold and obsidian color palette',

  heroImage: '/images/blog/cookie-run-kingdom/ash-salt-cookie-toppings/ash-salt-cookie.webp',
  heroImageAlt: 'Ash Salt Cookie, the Epic anti-revive debuffer added in the v7.4 Timeline of Fate update to Cookie Run: Kingdom.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/ash-salt-cookie-toppings/ash-salt-cookie.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Ash_Salt_Cookie',
      license: 'Fandom CC-BY-SA',
    },
    { src: '/images/gear/toppings/chocolate.png', sourceUrl: 'owned-asset' },
    { src: '/images/gear/beascuits/chewy.png', sourceUrl: 'owned-asset' },
    { src: '/images/cookies/silent-salt-cookie.png', sourceUrl: 'owned-asset' },
  ],

  publishDate: '2026-05-24T00:00:00.000Z',
  lastUpdated: '2026-05-24T00:00:00.000Z',

  primaryKeyword: 'ash salt cookie best toppings',
  secondaryKeywords: [
    'ash salt cookie build',
    'ash salt toppings',
    'ash salt beascuit',
    'ash salt cookie team',
    'is ash salt worth pulling',
    'ash salt magic candy',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 8,

  toc: [
    { id: 'who-is-ash-salt-cookie', label: 'Who is Ash Salt Cookie?', level: 2 },
    { id: 'ash-salt-skill-breakdown', label: 'Ash Salt skill breakdown', level: 2 },
    { id: 'best-toppings-build', label: 'Best toppings build', level: 2 },
    { id: 'topping-sub-stat-priority', label: 'Topping sub-stat priority', level: 3 },
    { id: 'best-beascuit-and-topping-tart', label: 'Best beascuit and topping tart', level: 2 },
    { id: 'team-comps-with-ash-salt', label: 'Team comps with Ash Salt', level: 2 },
    { id: 'budget-world-exploration-comp', label: 'Budget World Exploration comp', level: 3 },
    { id: 'mid-game-arena-defense-comp', label: 'Mid-game Arena defense comp', level: 3 },
    { id: 'late-game-guild-battle-comp', label: 'Late-game Guild Battle comp', level: 3 },
    { id: 'how-ash-salt-compares-to-silent-salt-and-timekeeper', label: 'How Ash Salt compares to Silent Salt and Timekeeper', level: 2 },
    { id: 'is-ash-salt-worth-pulling', label: 'Is Ash Salt worth pulling?', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Ash Salt Cookie landed in the v7.4 Timeline of Fate patch on May 7th, 2026, and she is the first Epic in months that genuinely threatens the Legendary anti-revive monopoly. If you whiffed the Timekeeper banner or you are still rebuilding crystals from the last cake tower push, this is the cookie that keeps your roster competitive in PvE and arena defense without forcing a 60-pull commitment.

The short version: she stacks a corrosion debuff that strips revive shields and amplifies incoming damage, and she does it on a fast cooldown. That is a Legendary-tier role on an Epic-tier pity. The catch is that she dies if you build her wrong, and most of the early guides out there are running glass-cannon Searing Raspberry sets that get her one-shot before her second skill cycle. We are not doing that.

This is the Mythras-tested v7.4 build, the team comps we are running across World Exploration, Arena, and Guild Battle, and an honest take on whether she deserves your next Soulstone hunt.

## Who is Ash Salt Cookie?

Ash Salt is an Epic-rarity Ambush-position cookie released in the v7.4 Timeline of Fate update. She belongs to the Ash-Bound Soul region in the cookie pedex, which is the same regional cluster that hosts Silent Salt and a handful of upcoming v7.5 additions. Lore-wise she is a former salt-mine warden who got buried alive in volcanic ash and came back wrong, which is exactly the energy you want from a debuffer.

Mechanically she fills the anti-revive slot. Before her release, that role was locked to Legendaries: [Silent Salt Cookie](/gear-guide/silent-salt-cookie), Timekeeper Cookie, and the niche [Venom Dough Cookie](/gear-guide/venom-dough-cookie) build for Guild Battle. Ash Salt is the first Epic that can credibly hold the line in content where revive locks matter, which is most endgame content in 2026.

> The shorthand: she is the cookie you slot into your second arena team so your main team's Timekeeper can rest. Two anti-revive teams instead of one is a massive ladder swing.

She is currently sitting at B+ to A- in most PvE tier lists and high-B in arena, which sounds modest until you remember that her ceiling is gated by Epic-tier base stats, not by her kit. With proper toppings and a Tainted Chewy beascuit, she punches a full tier above her rarity.

## Ash Salt skill breakdown

Her skill applies a stacking debuff called Corrosion to all enemies in a frontal cone. Each stack does three things at once:

1. **Strips revive shields.** Any enemy carrying a one-time revive (Pure Vanilla bubble, Hollyberry shield, Pomegranate's faith stack) loses one charge per Corrosion tick.
2. **Amplifies incoming damage.** Corroded enemies take additional damage from every source for the duration. The amp scales with stack count.
3. **Reduces healing received.** This is the sleeper-strong part. Cookies under Corrosion get a substantial healing reduction, which gut-checks Hollyberry walls and Pure Vanilla sustain comps.

Exact numbers will get rebalanced in the v7.5 PTS pass, so we are not going to quote them. The point is mechanical: she does three things at once, all of them anti-tank, all of them on a short cooldown. That is why she scales with Cooldown Reduction so aggressively.

Her magic candy upgrade adds a fourth Corrosion stack on the initial cast, which effectively skips one full rotation of debuff ramp. Magic candy is mandatory for any serious build. Save your Soul Essence.

## Best toppings build

![A Chocolate topping, the Swift Chocolate cooldown set that lets Ash Salt reapply Corrosion as fast as possible.](/images/gear/toppings/chocolate.png)

Most guides published in the first week after launch ran Searing Raspberry x5 for burst, and that build is a trap. Ash Salt is not a DPS. Her job is to land Corrosion repeatedly, which means cooldown is the only stat that matters until she hits the cap. Here is the build we have been running in arena, Cake Tower, and Guild Battle since May 10th.

| Slot | Choice | Why |
| --- | --- | --- |
| Toppings (Mythras-tested for v7.4) | Swift Chocolate x5 | Max cooldown reduction. Stacks Corrosion faster than any alternative. |
| Topping sub-stats | CD + ATK SPD + ATK | CD primary, ATK SPD secondary for skill-queue speed, ATK as filler. |
| Beascuit | Chewy (Tainted or Legendary tier) | Survivability set so she lives long enough to reapply Corrosion. |
| Beascuit attunes | CD x3 + DMGR x1 | Hits CD cap, one slot of damage resistance to survive AoE wipes. |
| Topping tart | Chocolate | Pure cooldown reduction tart. |
| Tart stat | Cooldown | Stacks with everything above. |

> The reason this build works: Corrosion's effect is multiplicative across stacks, so the second cast is worth more than 2x the first cast. Casting twice as often is worth more than hitting 30% harder per cast.

If you are deep into the topping endgame and already have Solid Almond x5 cooked up from a tank, that is a fine emergency option for Arena defense where she gets focus-fired. Do not craft Solid Almond from scratch for her. Build Swift Chocolate.

### Topping sub-stat priority

When you are rerolling sub-stats with Topping Pieces in the bakery:

1. Cooldown until you hit the soft cap (around 35% from gear, the rest from the tart).
2. ATK SPD on at least two toppings.
3. ATK as the dump stat.
4. **Avoid:** Crit, Crit DMG, and Buff. She does not benefit from any of them in a meaningful way.

A clean 3-CD, 2-ATK SPD topping spread with the Chocolate tart will put her at the breakpoint where her skill comes up roughly every 9 seconds, which is the magic number for keeping 3-stack Corrosion permanently active on the front line.

## Best beascuit and topping tart

![A Chewy beascuit, the survivability set that keeps Ash Salt alive long enough to land her second Corrosion cast.](/images/gear/beascuits/chewy.png)

Chewy beascuit is non-negotiable. The 4-piece Chewy bonus gives her the bulk to survive one rotation of Dark Enchantress nukes or two ticks of Eternal Sugar burn, which is exactly the survival window she needs to land her second cast. Spicy beascuit is the meme-build choice if you are running her as a sub-DPS in a low-difficulty World Exploration team, but anywhere that matters, Chewy.

Tier preference:

- **Tainted Chewy:** ideal. The corruption bonus stacks well with Corrosion's damage amp.
- **Legendary Chewy:** strong fallback if you have not unlocked Tainted attunes yet.
- **Epic Chewy:** acceptable. You will rebuild later.

For the topping tart, Chocolate is the right call for the same reason Swift Chocolate toppings are. If you do not have a Chocolate tart cooked, Almond (DMG resist) is the second-best option for Arena defense. Strawberry (HP) is the panic option if she keeps dying. Full tart breakdowns are in the [topping tarts guide](/gear-guide/tarts) and the broader [gear hub](/gear-guide).

## Team comps with Ash Salt

She is a support cookie, so her teams are built around what she enables, not what she does. Three comps we have field-tested through the v7.4 meta:

### Budget World Exploration comp

For clearing the new v7.4 stages and farming Ash-Bound Soul mats:

| Front | Middle | Rear |
| --- | --- | --- |
| Hollyberry + Pavlova | Ash Salt + Millennial Tree | Sugar Swan |

This is a sustain-heavy F2P comp. [Hollyberry Cookie](/gear-guide/hollyberry-cookie) tanks, Ash Salt strips enemy revives and amps damage taken, [Pavlova Cookie](/gear-guide/pavlova-cookie) and [Millennial Tree Cookie](/gear-guide/millennial-tree-cookie) provide the buff and ATK SPD layers, and [Sugar Swan Cookie](/gear-guide/sugar-swan-cookie) keeps the team alive. Total Legendary count: two. You can clear v7.4 story on this without spending crystals on the new banner.

### Mid-game Arena defense comp

For ladder positions in the 5000-8000 trophy range:

| Front | Middle | Rear |
| --- | --- | --- |
| Pure Vanilla | Ash Salt + Dark Enchantress | Eternal Sugar + Poison Mushroom |

The trick here is that most defenses in that bracket are running revive-heavy sustain comps to bait the AI into long fights. Ash Salt's Corrosion shreds revive shields before [Dark Enchantress Cookie](/gear-guide/dark-enchantress-cookie) lands her Chaos AoE, which often skips the entire defensive rotation. [Pure Vanilla Cookie](/gear-guide/pure-vanilla-cookie) tanks, [Eternal Sugar Cookie](/gear-guide/eternal-sugar-cookie) and [Poison Mushroom Cookie](/gear-guide/poison-mushroom-cookie) clean up. Cross-reference this with our [kingdom arena meta team breakdown](/blog/cookie-run-kingdom/kingdom-arena-meta-team) for trophy-range-specific tweaks.

### Late-game Guild Battle comp

If you have already pulled Timekeeper this patch and you want a second Guild Battle team that can compete:

| Front | Middle | Rear |
| --- | --- | --- |
| Hollyberry | Ash Salt + Millennial Tree | Pomegranate + Sugar Swan |

This is the comp where Ash Salt earns her keep as a Legendary replacement. With Timekeeper on team one and Ash Salt anchoring team two, you can run anti-revive pressure on both guild battle attempts per day, which roughly doubles your weekly contribution score. [Pomegranate Cookie](/gear-guide/pomegranate-cookie) handles boss debuff cleanse. For more endgame team theory, the [guild battle teams guide](/blog/cookie-run-kingdom/guild-battle-teams) has the full breakdown.

> Pro tip: in Guild Battle, Ash Salt's Corrosion stacks persist through phase transitions in v7.4. That is almost certainly a bug. It will probably get patched in v7.5. Abuse it while it lasts.

## How Ash Salt compares to Silent Salt and Timekeeper

![Silent Salt Cookie, the Legendary anti-revive Beast that fully locks revives where Ash Salt only strips charges.](/images/cookies/silent-salt-cookie.png)

This is the comparison everyone wants, so here it is straight:

| Cookie | Rarity | Anti-revive | Damage amp | Healing block | Cooldown | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Timekeeper | Legendary | Yes (full lock) | Yes (large) | Yes (large) | Long | Highest ceiling. Banner up now. |
| Silent Salt | Legendary | Yes (full lock) | Yes (medium) | No | Medium | Older Legendary, still strong. |
| Ash Salt | **Epic** | Partial (strips charges) | Yes (medium) | Yes (medium) | Short | The Epic-rarity budget option. |

Ash Salt does not fully lock revives the way Silent Salt or Timekeeper do. She strips one charge per Corrosion tick, which means against a fully-stacked Pure Vanilla bubble it takes her two casts to break the shield. The Legendaries do it in one cast. That is the gap.

What she gets in return is a much shorter cooldown and an Epic-rarity Soulstone path, which means you can ascend her to Mythic without dying inside.

If you are picking one and only one anti-revive cookie for your account, pull Timekeeper. The [Timekeeper toppings guide](/blog/cookie-run-kingdom/timekeeper-toppings) covers her optimal build. If you can afford both, Ash Salt is your second team. If you can only afford one and Timekeeper's banner has ended, Ash Salt is the right answer until the next Legendary anti-revive shows up.

## Is Ash Salt worth pulling?

Honest F2P take, based on the current crystal economy and what is coming in the v7.5 PTS notes:

- **If you have less than 500 crystals:** skip her banner. Save for Timekeeper or the v7.5 Legendary teased in the PTS.
- **If you have 500-2000 crystals and you already pulled Timekeeper:** yes, pull her. She is the highest-value Epic for the rest of 2026.
- **If you have 2000+ crystals and you skipped Timekeeper:** pull Timekeeper first, then circle back for Ash Salt with whatever is left.
- **If you are a returning player rebuilding your roster:** start with the [reroll guide](/blog/cookie-run-kingdom/cookie-run-kingdom-reroll-guide) and prioritize Timekeeper. Ash Salt is a tier-two priority.

Her banner runs through the end of the v7.4 cycle, which based on Devsisters' six-week patch cadence puts the end date in mid-June 2026. You have time. Do not whale.

A reminder: her Soulstones drop in the new Ash-Bound Soul region stages, which means even if you skip the banner, you can dust her over time. The first three Soulstones from story drops happen on a guaranteed schedule, which is enough to test-drive her before you commit topping mats.

## Quick Action Checklist

- [ ] Pull Ash Salt only if you already have Timekeeper or you have 500+ crystals and a stale Legendary roster.
- [ ] Cook Swift Chocolate x5 toppings. Do not waste pieces on Searing Raspberry.
- [ ] Reroll sub-stats: 3 CD, 2 ATK SPD, ATK filler. Skip Crit.
- [ ] Equip Tainted Chewy beascuit. Legendary Chewy if Tainted is locked.
- [ ] Attune 3 CD + 1 DMGR on the beascuit.
- [ ] Slot a Chocolate topping tart with Cooldown stat.
- [ ] Feed magic candy as soon as you have the Soul Essence. Non-negotiable for endgame.
- [ ] Run her on World Exploration first to farm Ash-Bound region mats, then promote her to Arena and Guild Battle teams.
- [ ] Test the Guild Battle phase-persistence bug before the v7.5 patch lands.
- [ ] Bookmark our [cookie-run-kingdom blog hub](/blog/cookie-run-kingdom) for the v7.5 update guide when it drops.
`,

  faq: [
    {
      question: 'What are the best toppings for Ash Salt Cookie?',
      answer:
        'Swift Chocolate x5 is the correct build. Sub-stats should be 3 Cooldown, 2 Attack Speed, with Attack as the filler stat. Skip Searing Raspberry entirely. Her job is to reapply Corrosion stacks as often as possible, not to deal damage, so cooldown reduction is the only stat that matters until you hit the soft cap around 35%.',
    },
    {
      question: 'Which beascuit should Ash Salt Cookie equip?',
      answer:
        'Chewy beascuit, ideally Tainted tier, with attune slots set to 3 Cooldown and 1 Damage Resistance. Chewy gives her the survivability to land her second skill cast, which is when her Corrosion stack starts paying off. Spicy beascuit only works in low-difficulty World Exploration content.',
    },
    {
      question: 'Is Ash Salt Cookie worth pulling for F2P players?',
      answer:
        'Conditional yes. If you already pulled Timekeeper this patch and you have 500 to 2000 crystals saved, she is the highest-value Epic of 2026. If you have not pulled Timekeeper yet, prioritize that banner first. Ash Salt fills the anti-revive role on your second team, which doubles your weekly Guild Battle output.',
    },
    {
      question: 'Does Ash Salt Cookie need magic candy?',
      answer:
        'Yes, magic candy is mandatory for any serious build. Her magic candy upgrade adds a fourth Corrosion stack on the initial cast, which effectively skips one full rotation of debuff ramp. This is the difference between her being a B+ Epic and an A- Epic. Save your Soul Essence for her.',
    },
    {
      question: 'How does Ash Salt Cookie compare to Silent Salt Cookie?',
      answer:
        'Silent Salt is a Legendary that fully locks enemy revives on the first cast. Ash Salt is an Epic that strips one revive charge per Corrosion tick, which means she needs two casts to break a fully-stacked shield. In exchange, Ash Salt has a shorter cooldown and Epic-rarity Soulstone availability, which makes her significantly easier to ascend to Mythic.',
    },
    {
      question: 'What teams should I run Ash Salt Cookie on?',
      answer:
        'Three core comps. For World Exploration: Hollyberry, Pavlova, Ash Salt, Millennial Tree, Sugar Swan. For Arena defense in the 5K to 8K trophy range: Pure Vanilla, Ash Salt, Dark Enchantress, Eternal Sugar, Poison Mushroom. For Guild Battle as a Timekeeper alternative on team two: Hollyberry, Ash Salt, Millennial Tree, Pomegranate, Sugar Swan.',
    },
    {
      question: 'When does Ash Salt Cookie banner end?',
      answer:
        'Based on Devsisters six-week patch cadence, the v7.4 Timeline of Fate cycle should end in mid-June 2026, which is also when her rate-up banner closes. Her Soulstones remain available in the Ash-Bound Soul region stages after the banner ends, so you can dust her over time even if you skip the pull window.',
    },
  ],

  internalLinks: [
    { href: '/gear-guide/silent-salt-cookie', anchor: 'Silent Salt Cookie' },
    { href: '/blog/cookie-run-kingdom/timekeeper-toppings', anchor: 'Timekeeper toppings guide' },
    { href: '/gear-guide/dark-enchantress-cookie', anchor: 'Dark Enchantress Cookie' },
    { href: '/gear-guide/sugar-swan-cookie', anchor: 'Sugar Swan Cookie' },
    { href: '/gear-guide/hollyberry-cookie', anchor: 'Hollyberry Cookie' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team breakdown' },
    { href: '/blog/cookie-run-kingdom/guild-battle-teams', anchor: 'Guild battle teams guide' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-reroll-guide', anchor: 'Cookie Run Kingdom reroll guide' },
  ],

  externalSources: [
    {
      url: 'https://cookierunkingdom.fandom.com/wiki/Cookie_Run:_Kingdom_Wiki',
      title: 'Cookie Run: Kingdom Wiki — community-maintained cookie database',
    },
    {
      url: 'https://www.pocketgamer.com/cookie-run-kingdom/',
      title: 'PocketGamer — Cookie Run: Kingdom news and guide hub',
    },
    {
      url: 'https://www.devsisters.com/en',
      title: 'Devsisters — official developer site',
    },
    {
      url: 'https://www.playcookierun.com/',
      title: 'PlayCookieRun — official Cookie Run franchise portal',
    },
  ],
};
