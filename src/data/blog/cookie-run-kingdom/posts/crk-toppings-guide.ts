import type { BlogPost } from '../../blogTypes';

export const crkToppingsGuide: BlogPost = {
  slug: 'crk-toppings-guide',
  game: 'cookie-run-kingdom',
  category: 'beginner-guides',
  topicCluster: 'toppings',
  title: 'CRK Toppings Guide (2026) — Every Set + Reroll Strategy',
  metaDescription: 'The complete CRK toppings guide for 2026: every topping type, sub-stat thresholds, best sets per role, farming routes, and exactly when to stop rerolling.',
  excerpt: 'Most players lose more power to bad sub-stats than to missing the right Cookies. Here is every topping type, the sub-stat thresholds that matter, the best set for each role, and the reroll math that tells you when "good enough" actually wins.',
  featuredImagePrompt: 'A clean Cookie Run: Kingdom topping inventory screen mockup, six glossy candy-style topping icons (red raspberry, brown chocolate, almond, apple jelly, peanut, walnut) arranged in a hexagon on a warm pastel kitchen-counter background, soft bokeh, mobile-game UI flourishes, bright and inviting',
  publishDate: '2026-05-28T00:00:00.000Z',
  lastUpdated: '2026-05-28T00:00:00.000Z',
  primaryKeyword: 'crk toppings guide',
  secondaryKeywords: [
    'best toppings cookie run kingdom',
    'crk topping sub stats',
    'searing raspberry toppings',
    'crk reroll toppings',
    'cookie run kingdom topping farming',
    'swift chocolate toppings',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'what-toppings-actually-do', label: 'What toppings actually do', level: 2 },
    { id: 'every-topping-type-explained', label: 'Every topping type explained', level: 2 },
    { id: 'how-sub-stats-work-the-real-power', label: 'How sub-stats work (the real power)', level: 2 },
    { id: 'the-5-topping-vs-hybrid-debate', label: 'The 5-topping vs hybrid debate', level: 2 },
    { id: 'best-topping-set-per-role', label: 'Best topping set per role', level: 2 },
    { id: 'how-to-farm-toppings-efficiently', label: 'How to farm toppings efficiently', level: 2 },
    { id: 'reroll-strategy-and-when-to-stop', label: 'Reroll strategy and when to stop', level: 2 },
    { id: 'topping-bonus-sets-and-id-rerolling', label: 'Topping bonus sets and ID rerolling', level: 2 },
    { id: 'common-topping-mistakes', label: 'Common topping mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Most players lose more power to bad topping sub-stats than to not having the right Cookies.

That sounds backwards until you do the math. You can pull a five-star DPS, build her arena team, and still get clapped by someone running worse Cookies with cleaner toppings. The headline stat on a topping is barely half the story. The four little numbers underneath it decide whether your team carries or folds, and most accounts are leaking thousands of points of effective stats because nobody told them what to chase.

This guide fixes that. Every topping type, what the sub-stats actually do, the thresholds that separate "fine" from "fed," and the reroll math that tells you when to walk away.

## What toppings actually do

Toppings are CRK's gear system. Every Cookie has five topping slots, and each topping you slot in gives a main stat plus up to four random sub-stats. Stack five and you get a flat power boost plus, in some cases, a set bonus.

Here's the part people sleep on: the main stat is fixed by the topping type, but the sub-stats roll randomly. Two Searing Raspberries can have wildly different value. One might roll three useless sub-stats, the other might roll triple ATK%. Same topping, same main stat, completely different Cookie afterward.

So "having toppings" and "having good toppings" are different sports. The first one takes a weekend. The second one is the actual endgame grind, and it never really ends.

## Every topping type explained

Each topping type locks in one main stat. Your job is to match the main stat to what the Cookie needs, then worry about sub-stats after. Here's the full lineup.

| Topping | Main Stat | Who Wants It |
|---|---|---|
| Searing Raspberry | ATK | DPS, most damage dealers |
| Solid Almond | DMG Resist | Tanks, frontline bruisers |
| Swift Chocolate | Cooldown | Healers, supports, ability-reliant DPS |
| Juicy Apple Jelly | Cooldown / CRIT [VERIFY] | Crit-scaling DPS, cooldown supports |
| Bouncy Caramel | HP | Off-tanks, sustain frontliners |
| Hard Walnut | DMG Resist [VERIFY] | Tanks who need extra mitigation |
| Healthy Peanut | HP | Tanks, healers who want bulk |
| Fresh Kiwi | ATK SPD [VERIFY] | Auto-attack and speed-scaling Cookies |
| Sweet Candy | CRIT [VERIFY] | Crit DPS who already have ATK covered |

A few of those overlap on purpose. CRK has more than one topping per main stat, which matters later when you start hunting set bonuses. For now, the three you'll touch ninety percent of the time are Searing Raspberry, Solid Almond, and Swift Chocolate. Learn those three cold and you've covered most of your roster.

## How sub-stats work (the real power)

Every topping can roll up to four sub-stats from this pool:

- **ATK%** — percentage attack, the single best DPS sub-stat
- **CRIT%** — crit chance, multiplies your damage when it lands
- **Cooldown** — fires abilities faster, huge for healers and burst Cookies
- **DMG Resist** — flat damage reduction, the tank bread-and-butter
- **DEF** — raw defense, weaker than DMG Resist most of the time
- **HP** — survivability, matters more on tanks than the number suggests

Notice that ATK% and ATK are not the same line. ATK% scales off the Cookie's base attack and gets multiplied by buffs. Flat ATK is a small fixed number that does almost nothing once you're past early game. Chasing flat ATK is the most common rookie mistake on this whole list, and we'll come back to it.

> Rough sub-stat targets for a serious DPS build: aim for 18%+ total CRIT and 12%+ total Cooldown across all five toppings, with ATK% wherever you can grab it. For tanks, push DMG Resist as high as it'll go and treat HP as the comfortable backup. These aren't hard caps, they're the line where a Cookie stops feeling fragile and starts feeling built.

The reason sub-stats are "the real power" is that they compound. A five-topping set fully optimized for sub-stats can outperform a set with the right main stats but garbage rolls by a brutal margin. Two accounts with identical Cookies and identical topping types can be a full arena tier apart purely on roll quality.

## The 5-topping vs hybrid debate

The default advice is to run five of one type. Five Searing Raspberries on your DPS, five Solid Almonds on your tank. That gives you the cleanest main-stat stacking and, in many cases, a set bonus on top. For pure damage dealers this is almost always correct. Five Raspberries, no debate.

Hybrids are when you mix two types, usually a 3+2 split. People assume hybrids are a beginner crutch, the thing you run before you've farmed enough. Sometimes that's true. But there are real builds where a split is correct.

The clean case is a tank or support who needs two things at once. A frontliner who has to survive and keep abilities cycling might run 3 Solid Almond plus 2 Swift Chocolate, trading some mitigation for faster shields or heals. Certain supports want a Cooldown base with a CRIT or HP secondary depending on what their kit scales off. The math only favors the hybrid when the second stat genuinely unlocks the Cookie's value, not when you're just topping off a number that was already fine.

Rule of thumb: DPS goes mono. Tanks and supports get to make the case for a split, and the burden of proof is on them.

## Best topping set per role

Here's the cheat sheet. Match the role, slam the set, then grind sub-stats toward the priority.

| Role | Topping Set | Sub-Stat Priority |
|---|---|---|
| DPS | 5x Searing Raspberry | CRIT% > ATK% > Cooldown |
| Tank | 5x Solid Almond | DMG Resist > HP > Cooldown |
| Healer | 5x Swift Chocolate | Cooldown > ATK% > CRIT% |
| Support | 5x Swift Chocolate | Cooldown > CRIT% > ATK% |
| Hybrid frontline | 3 Solid Almond + 2 Swift Chocolate | DMG Resist > Cooldown > HP |

For DPS, CRIT% edges out ATK% as the top priority because crit is a multiplier and most damage Cookies already have ATK from the Raspberry main stats. For healers, Cooldown is king. A healer that throws a shield two seconds sooner can be the difference between a clear and a wipe, and Swift Chocolate plus Cooldown sub-stats gets you there. Some specific Cookies bend these rules, so when you're optimizing a specific carry it's worth checking a dedicated build like a [Dark Enchantress Cookie toppings build](/blog/cookie-run-kingdom/dark-enchantress-cookie-toppings-build) or a [Timekeeper toppings setup](/blog/cookie-run-kingdom/timekeeper-toppings) instead of trusting the generic template.

If you're not sure which Cookies even belong in which role, the [CRK tier list](/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list) sorts that out, and the [best healers ranked](/blog/cookie-run-kingdom/best-crk-healers-ranked) tells you who's worth feeding Swift Chocolate in the first place.

## How to farm toppings efficiently

Toppings drop from the topping stages in World Exploration. Each stage costs energy and drops a specific topping type, so you're not farming "toppings" in general, you're farming the type you actually need. Check which stage drops Searing Raspberry before you dump fifty energy into a Solid Almond run you didn't want.

The efficiency play is simple but easy to ignore:

- **Always sweep the highest stage you can clear.** Higher stages drop higher-rarity toppings, and you don't want to be farming common toppings at endgame.
- **Spend energy on the type you're building right now.** Don't spread thin across five Cookies. Finish one set, then move on.
- **Use sweep tickets / instant clears once unlocked** so you're not manually replaying the same stage forty times.

The stingy one is Swift Chocolate. [VERIFY] Cooldown toppings tend to feel scarcer relative to demand because half your roster wants them and the drop stages gate them behind progression. If you're building a healer or support, start that grind earlier than you think you need to, because the wall is real.

## Reroll strategy and when to stop

Once a topping has its main stat and four sub-stats locked, you can reroll the sub-stat values to push for better rolls. This costs materials, and the cost climbs the more you push. [VERIFY] Rerolling is where accounts either get cracked or get bankrupt, and the line between the two is discipline.

The math that matters: rerolling has diminishing returns. Going from "no useful sub-stats" to "two useful sub-stats" is enormous value per reroll. Going from "three good sub-stats" to "four perfect sub-stats" can cost you ten times the materials for a single-digit power gain. Players who chase perfection on every topping run dry and can't build their next Cookie. Players who reroll to "good enough" and move on end up with five solidly-built Cookies instead of one flawless one.

So here's the stop rule. If a topping hits its priority sub-stats at decent values, two strong lines plus a usable third, stop. Bank the materials. The Cookie is built. Perfect is a trap that costs you breadth.

The exception is a true endgame carry where you've already finished everything else. When your whole roster is "good enough," then sure, go grind the last 3% on your main DPS. Until then, breadth beats depth every time.

## Topping bonus sets and ID rerolling

Beyond the main and sub-stats, toppings carry a hidden Topping ID that determines bonus set effects. [VERIFY] Slotting toppings that share the right combination can grant an additional set bonus on top of the five-of-a-kind effect, which is why two identical-looking five-Raspberry sets can perform differently.

You can reroll the Topping ID to chase a better bonus combination, separate from rerolling the sub-stat values. This is deep-end optimization. Most players never need to touch it, and you should not even think about ID rerolling until your sub-stats are already locked in across your core team. It's the last 1% of the last 1%, the thing you do when you've genuinely run out of bigger upgrades. If you're treating it as a priority before your sub-stats are clean, you've got the order backwards. Same logic applies to your [treasure setups](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide), which give you more raw power than ID rerolling ever will.

## Common topping mistakes

The four that quietly wreck accounts:

- **Chasing flat ATK over ATK%.** Flat ATK is a tiny fixed number. ATK% scales and gets multiplied by buffs. Always take the percentage.
- **Over-rerolling.** Going broke chasing perfect sub-stats on one topping while four other Cookies sit naked. Reroll to good enough and move on.
- **Wrong topping type for the role.** Putting Solid Almond on a DPS or Searing Raspberry on a tank because that's what dropped. Farm the right type. Don't settle on main stat.
- **Ignoring sub-stats entirely.** Slotting any topping with the right main stat and calling it done. The sub-stats are most of the power. A "complete" set with junk rolls is a half-built Cookie.

If you want the full breakdown with per-Cookie numbers, the [toppings gear guide](/gear-guide/toppings) goes deeper than this overview, and the [full gear guide](/gear-guide) covers how toppings stack with everything else.

## Quick Action Checklist

- Match the main stat to the role first: ATK for DPS, DMG Resist for tanks, Cooldown for healers and supports.
- Run five of one type on DPS. Only split into a hybrid when a second stat genuinely unlocks the Cookie.
- Chase ATK% and CRIT% on damage dealers, DMG Resist on tanks, Cooldown on supports.
- Hit roughly 18%+ CRIT and 12%+ Cooldown on a serious DPS before you call her done.
- Farm the specific topping type you need from the highest World Exploration stage you can sweep.
- Reroll to "two strong sub-stats plus a usable third," then stop and bank materials.
- Build breadth before depth. Five good Cookies beat one perfect one.
- Leave Topping ID rerolling for absolute endgame, after your core team's sub-stats are clean.`,
  faq: [
    {
      question: 'What are the best toppings in Cookie Run: Kingdom?',
      answer: "There's no single best topping, it depends on the role. Searing Raspberry (ATK) is best for DPS, Solid Almond (DMG Resist) is best for tanks, and Swift Chocolate (Cooldown) is best for healers and supports. The sub-stats matter as much as the topping type, so always check the rolls.",
    },
    {
      question: 'Should I run 5 of one topping or a hybrid set?',
      answer: "For DPS, run five of one type, almost always five Searing Raspberry. Hybrids (usually a 3+2 split) are only correct on certain tanks and supports who genuinely need two stats at once, like a frontliner who has to survive and keep abilities cycling. If you can't name the reason for the split, go mono.",
    },
    {
      question: 'What sub-stats should I aim for on my toppings?',
      answer: "For DPS, prioritize CRIT% and ATK%, aiming for roughly 18%+ total CRIT and 12%+ total Cooldown. For tanks, stack DMG Resist with HP as backup. For healers and supports, Cooldown is the top priority. Avoid flat ATK, it does almost nothing past early game compared to ATK%.",
    },
    {
      question: 'When should I stop rerolling a topping?',
      answer: "Stop once a topping hits its priority sub-stats at decent values, generally two strong lines plus a usable third. Rerolling has heavy diminishing returns, and chasing perfection drains the materials you need to build your other Cookies. Five good Cookies beat one perfect one.",
    },
    {
      question: 'How do I farm toppings efficiently in CRK?',
      answer: "Farm toppings from the topping stages in World Exploration, where each stage drops a specific type. Always sweep the highest stage you can clear for better rarity, focus your energy on the one topping type you're building right now, and use sweep tickets once unlocked so you're not manually grinding.",
    },
    {
      question: 'What is Topping ID rerolling and do I need it?',
      answer: "Topping ID rerolling chases a hidden ID that determines bonus set effects on top of the five-of-a-kind bonus. It's last-1% optimization. You should not touch it until your sub-stats are already clean across your whole core team, since bigger upgrades exist almost everywhere else first.",
    },
  ],
  internalLinks: [
    { href: '/blog/cookie-run-kingdom/dark-enchantress-cookie-toppings-build', anchor: 'Dark Enchantress Cookie toppings build' },
    { href: '/blog/cookie-run-kingdom/timekeeper-toppings', anchor: 'Timekeeper toppings setup' },
    { href: '/blog/cookie-run-kingdom/best-crk-healers-ranked', anchor: 'best CRK healers ranked' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list', anchor: 'CRK tier list' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide', anchor: 'CRK treasures guide' },
    { href: '/gear-guide/toppings', anchor: 'toppings gear guide' },
    { href: '/gear-guide', anchor: 'full gear guide' },
  ],
  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Cookie_Run:_Kingdom_Wiki', title: 'Cookie Run: Kingdom Wiki' },
    { url: 'https://www.pocketgamer.com/cookie-run-kingdom/', title: 'Pocket Gamer CRK' },
    { url: 'https://www.devsisters.com/en/', title: 'Devsisters' },
    { url: 'https://playcookierun.com/', title: 'Play Cookie Run' },
  ],
  tldr: 'Match main stats to roles first (ATK/Searing Raspberry for DPS, DMG Resist/Solid Almond for tanks, Cooldown/Swift Chocolate for healers), then grind sub-stats: CRIT% and ATK% for DPS, DMG Resist for tanks, Cooldown for supports. Run five of one type on DPS, reserve hybrids for tanks/supports who need two stats. Farm the specific type you need from the highest World Exploration stage, reroll to "good enough" (two strong sub-stats plus a usable third) instead of chasing perfection, and leave Topping ID rerolling for absolute endgame.',
  itemList: {
    name: 'Best Topping Sets by Role (CRK 2026)',
    items: [
      { name: 'DPS — 5x Searing Raspberry', description: 'ATK main stat. Sub-stat priority: CRIT% > ATK% > Cooldown. Aim for 18%+ total CRIT and 12%+ total Cooldown.' },
      { name: 'Tank — 5x Solid Almond', description: 'DMG Resist main stat. Sub-stat priority: DMG Resist > HP > Cooldown. Push DMG Resist as high as it goes.' },
      { name: 'Healer — 5x Swift Chocolate', description: 'Cooldown main stat. Sub-stat priority: Cooldown > ATK% > CRIT%. Faster ability cycles win clears.' },
      { name: 'Support — 5x Swift Chocolate', description: 'Cooldown main stat. Sub-stat priority: Cooldown > CRIT% > ATK%. Get buffs and debuffs firing sooner.' },
      { name: 'Hybrid Frontline — 3 Solid Almond + 2 Swift Chocolate', description: 'Mitigation plus faster shields/heals for tanks who must survive and cycle abilities. Priority: DMG Resist > Cooldown > HP.' },
      { name: 'Crit DPS — 5x Searing Raspberry (CRIT focus)', description: 'For damage dealers who already have ATK covered, lean rolls hard into CRIT% to maximize the multiplier.' },
    ],
  },
};
