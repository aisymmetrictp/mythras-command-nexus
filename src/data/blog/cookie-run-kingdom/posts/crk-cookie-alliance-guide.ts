import type { BlogPost } from '../../blogTypes';

export const crkCookieAllianceGuide: BlogPost = {
  slug: 'crk-cookie-alliance-guide',
  game: 'cookie-run-kingdom',
  category: 'advanced-strategy',
  topicCluster: 'cookie-alliance',

  title: 'Cookie Run: Kingdom Cookie Alliance Guide — 25-Cookie Comps, Shadow Hex & Relics',
  metaDescription:
    'Cookie Run: Kingdom Cookie Alliance guide: how the 5-team mode works, Shadow Hex, Beacon of Valor, treasure reuse, and pushing deeper for better relics.',
  excerpt:
    "Cookie Alliance is the one mode where your bench finally matters. Five teams, 25 cookies, no benchwarmers — and most players cap out early because they front-load their good cookies and then run a fifth team of leftovers into a Shadow Hex. Here's how the mode actually works and how to push deeper for the relics that matter.",
  featuredImagePrompt:
    'Dark fantasy painterly illustration of five distinct Cookie Run: Kingdom squads arrayed in formation before a towering shadowy boss wreathed in purple hex energy, a glowing beacon of light rising behind the alliance, cinematic 16:9 hero banner, dramatic rim lighting',
  heroImage: '/images/blog/cookie-run-kingdom/crk-cookie-alliance-guide/cookie-alliance-mode.webp',
  heroImageAlt: 'The Cookie Alliance game mode icon, the seasonal 5-team campaign this Cookie Run: Kingdom guide covers.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/crk-cookie-alliance-guide/cookie-alliance-mode.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Cookie_Alliance',
      license: 'Fandom CC-BY-SA',
    },
    { src: '/images/cookies/eternal-sugar-cookie.png', sourceUrl: 'owned-asset' },
    { src: '/images/cookies/white-lily-cookie.png', sourceUrl: 'owned-asset' },
  ],

  publishDate: '2026-06-22T00:00:00.000Z',
  lastUpdated: '2026-06-22T00:00:00.000Z',

  primaryKeyword: 'cookie run kingdom cookie alliance guide',
  secondaryKeywords: [
    'crk cookie alliance',
    'cookie alliance teams',
    'shadow hex cookie run',
    'beacon of valor crk',
    'cookie alliance relics',
    'how to beat cookie alliance',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,

  toc: [
    { id: 'what-cookie-alliance-actually-is', label: 'What Cookie Alliance actually is', level: 2 },
    { id: 'how-the-five-team-structure-works', label: 'How the five-team structure works', level: 2 },
    { id: 'shadow-hex-and-elemental-weaknesses', label: 'Shadow Hex and elemental weaknesses', level: 2 },
    { id: 'the-beacon-of-valor-blessing', label: 'The Beacon of Valor blessing', level: 2 },
    { id: 'treasure-reuse-is-the-whole-game', label: 'Treasure reuse is the whole game', level: 2 },
    { id: 'how-to-build-five-teams-without-25-good-cookies', label: 'How to build five teams without 25 good cookies', level: 2 },
    { id: 'relics-rewards-and-the-seasonal-reset', label: 'Relics, rewards, and the seasonal reset', level: 2 },
    { id: 'common-cookie-alliance-mistakes', label: 'Common Cookie Alliance mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Cookie Alliance is the one mode in Cookie Run: Kingdom where your bench finally pays rent. Every other competitive mode asks for one perfect team of five. This one asks for **five teams — 25 cookies — and you can only use each cookie once.** That single rule flips the whole game. The depth of your roster suddenly matters more than the ceiling of your best five, and that's exactly why so many players cap out early: they cram their good cookies into the first two teams, then send a fifth squad of half-built leftovers into a boss wave and wonder why the campaign stops dead.

This is the full guide to the mode — what it is, how the five-team structure works, the Shadow Hex modifiers that punish lazy comps, the Beacon of Valor blessing, the treasure-reuse trick that quietly carries everyone, how to fill out five teams when you don't have 25 great cookies, and how the relic rewards and seasonal reset actually pay you. Where exact tuning shifts patch to patch, I'll flag it as variable rather than hand you a number that's wrong by next season.

## What Cookie Alliance actually is

![The Cookie Alliance game mode icon — the seasonal five-team campaign in Cookie Run: Kingdom.](/images/blog/cookie-run-kingdom/crk-cookie-alliance-guide/cookie-alliance-mode.webp)

Cookie Alliance is a **seasonal campaign mode** where you assemble multiple full teams and grind them through a long ladder of consecutive enemy waves. It's one of the oldest modes in the game — it first arrived in the War Under Shattered Skies update (v2.6) and was reworked later into its current shape — and it's gated behind clearing **Stage 6-28 in World Exploration**, so it's a mid-game-and-up mode, not a day-one one.

The structure is a campaign split into chapters that scale in difficulty. Each chapter is a preset run of consecutive waves, and every fourth wave is a boss encounter. Clear deeper, get better rewards. That's the loop. What makes it distinct from Guild Battle or Arena isn't the fights themselves — it's the roster tax. You are not bringing your one god team. You are bringing five teams and discovering, usually painfully, exactly how deep your account really goes.

## How the five-team structure works

Here's the rule that defines everything: you prep **up to five teams, 25 cookies total, and no cookie can appear on more than one team.** Your S-tier carry can only be on one squad. Your best healer can only heal one of the five. So the strategic problem isn't "what's my best team" — it's "how do I spread my good cookies across five squads so none of them is dead weight when it hits a boss."

Teams aren't all sent in blind, either. You can **swap teams mid-battle**, on roughly a 20-second cooldown, and a swapped-in team spawns with starting skill-cooldown charges so it isn't standing there useless for the first few seconds. That swap is a real tactical lever: you can lead with a wave-clear team to chew through trash, then tag in a tankier or burstier squad right as a boss wave or a nasty Shadow Hex comes up.

The practical consequence is that team *order* matters almost as much as team *composition*. Front-load your clear speed, hold a specialist squad for the boss waves, and don't waste your best team on the early trivial waves where any five cookies would coast.

## Shadow Hex and elemental weaknesses

This is the mechanic that separates "I cleared a few chapters" from "I'm hard-stuck." **Every set of four waves carries a Shadow Hex** — either a passive debuff slapped on your cookies (think reduced DEF, disabled shields, or extended cooldowns) or a buff handed to the enemies. It's the mode's way of saying a generically strong team isn't enough; you have to bring an answer.

On top of the Hex, **each four-wave set is weak to a specific element.** That's your steering wheel. If a set is weak to a given element, the squad you send into it should lean into that element to chew through the waves faster — which matters enormously, because faster clears mean less exposure to whatever the Hex is doing to you.

Put those two facts together and the read is: **match the element, then build around the Hex.** If the Hex disables shields, don't send your shield-dependent survival comp into it — send a comp that wins on raw DMG Resist and healing throughput instead. If the Hex stretches cooldowns, prioritize a team that doesn't live and die by skill timing. The players who push deepest aren't running five copies of the meta team; they're running five *different* answers and slotting each one against the wall it beats.

## The Beacon of Valor blessing

![Eternal Sugar Cookie, the kind of front-line anchor worth spreading across multiple Cookie Alliance teams.](/images/cookies/eternal-sugar-cookie.png)

The Beacon of Valor is the mode's paid-with-Coins blessing, and it's a genuine quality-of-life lever for a five-team mode. When active, it grants your teams an **initial Blast Mode** at the start of fights, scaled to how many Level 40 cookies you've fielded — the more leveled cookies across your alliance, the longer that opening Blast window runs. Crucially, **treasure cooldowns pause during Blast Mode**, so you get a free burst of treasure value out of the gate.

It costs Coins to light — there are shorter and longer durations (a roughly week-long option and a roughly four-week option), so you pick based on how hard you're pushing the current season. Two caveats worth knowing: the Beacon's opening Blast Mode **does not activate on the hardest difficulty tiers** (the Master/Hero-tier fights expect you to earn it), and the benefit scales off your Level 40 cookie count, so it rewards the same roster depth the mode already demands. If you're seriously pushing a season and have the Coins, it's worth it — Coins are one of the easier resources to come by, and Blast uptime across five teams adds up fast.

## Treasure reuse is the whole game

![White Lily Cookie, the kind of universal support whose treasures carry weak filler teams in Cookie Alliance.](/images/cookies/white-lily-cookie.png)

Here's the trick that quietly makes the mode survivable: **cookies are unique across your five teams, but treasures are not.** You can equip the same treasure on every single team. That means your best damage-amp treasure — an [Old Pilgrim's Scroll](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide), say — can be running on all five squads simultaneously, juicing the ATK of even your weakest filler team.

This is the great equalizer. Your fifth team might be a pile of B-tier cookies you'd never field in Arena, but bolt three strong treasures onto it and it suddenly punches well above its roster. The play is to identify your three best universal treasures and slap them on every team, then only deviate when a specific Shadow Hex demands a defensive or utility treasure instead. Don't agonize over per-team treasure optimization on your strong squads — agonize over which treasures rescue your weak ones, because those are the teams that decide how deep you clear.

For which treasures to level first and how to handle priority conflicts with your PvP treasure investment, the [CRK treasures guide](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide) has the full roadmap.

## How to build five teams without 25 good cookies

Nobody has 25 fully-built meta cookies. The whole skill of the mode is making five *functional* teams out of a roster that has maybe two great ones. Here's the framework:

- **Spread your anchors, don't stack them.** Your best tank and best healer should anchor *different* teams, not the same one. One excellent front-liner like [Eternal Sugar](/blog/cookie-run-kingdom/best-crk-pve-teams) holding a team of mediocre cookies together is worth more than two anchors on one squad and a fifth team that folds instantly.
- **Build clear-speed teams for the trash, specialist teams for the bosses.** Your AoE wave-clearers handle the consecutive trash waves; your burst or survival squads get held for the boss waves and the worst Hexes.
- **Use the swap.** Lead a chapter with a fast clear team, then tag in a tankier squad for the boss wave. Team order is a free power-up if you plan it.
- **Lean on treasure reuse for the filler.** Your weak teams don't need good cookies if they have good treasures. That's the entire point of the previous section.
- **Match elements where the set demands it.** A worse team running *into its element* often outpaces a better team running off-element, because speed reduces Hex exposure.

For the cookie-by-cookie context of who anchors what, the [best PvE teams](/blog/cookie-run-kingdom/best-crk-pve-teams) and [healers ranked](/blog/cookie-run-kingdom/best-crk-healers-ranked) lists are the reference, and the [tank tier list](/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked) covers which front-liners can carry a weak team on their back.

## Relics, rewards, and the seasonal reset

The payout is built around how deep you push. At the end of a campaign you're offered a choice between **two Relic Chests**, each containing a Relic plus Coins, Time Jumpers, and other random rewards — and the **rarity of the Relic rolls based on the furthest boss wave you cleared.** Push deeper, roll for a better relic. You can also spend an additional Alliance Ticket to open another chest if you want a second swing.

The seasonal reset is the part to plan around. Artifacts and points reset each season, and the game **refunds up to 50% of your earned Artifact Points** (with a cap on the refund), so the investment you make in a season isn't entirely torched at the turnover — you carry a chunk of it forward. Because rewards scale with depth and the season resets, the optimal cadence is to push as far as your five teams can reach *every* season rather than treating it as a one-and-done. The deeper you can consistently reach, the better your relic rolls compound over time.

This is also why roster depth is a long-term Cookie Alliance investment, not a one-season fix. Every additional cookie you build to a functional level is another body that makes your fifth team less of a liability next season. For the broader question of which cookies are worth that investment, cross-reference the [CRK tier list](/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list) when you're deciding who to level next.

## Common Cookie Alliance mistakes

In rough order of how often they sink runs:

1. **Front-loading all your good cookies.** Spreading your two anchors onto two different teams beats stacking them on one and fielding a fifth team that dies on contact. Depth over ceiling.

2. **Ignoring the Shadow Hex.** Sending a shield comp into a shields-disabled Hex, or a cooldown-reliant team into a cooldown-stretch Hex, is throwing the run. Read the Hex, bring the answer.

3. **Ignoring the elemental weakness.** Off-element teams clear slower, which means more Hex exposure. Match the element and the worse team often outperforms.

4. **Not reusing treasures.** Your weak teams are supposed to ride your best treasures. If your fifth team has no treasures because you "saved them for the good squads," you built it wrong.

5. **Never swapping mid-battle.** The 20-second swap and the starting cooldown charges on the incoming team are free tempo. Lead with clear speed, tag in for bosses.

6. **Treating it as one-and-done.** Rewards scale with depth and the season resets with a partial refund. Push every season; the relic rolls compound.

## Quick Action Checklist

- Clear World Exploration Stage 6-28 to unlock the mode
- Spread your best tank and best healer across different teams, never the same squad
- Build clear-speed AoE teams for trash waves, specialist teams for the boss waves
- Read each four-wave set's Shadow Hex and send a team that beats it, not just a strong team
- Match the four-wave set's elemental weakness to speed up clears and cut Hex exposure
- Equip your three best universal treasures on every team — treasures are reusable, cookies aren't
- Use the mid-battle swap: lead with a clear team, tag in a tank or burst squad for bosses
- Light the Beacon of Valor when you're seriously pushing a season and have the Coins to spare
- Push as deep as your five teams can reach for a better Relic Chest roll
- Treat it as a recurring season grind, not a one-time clear — points partially refund on reset`,

  faq: [
    {
      question: 'How does Cookie Alliance work in Cookie Run: Kingdom?',
      answer:
        "Cookie Alliance is a seasonal campaign mode where you prepare up to five full teams — 25 cookies total — and run them through a long ladder of consecutive enemy waves split into scaling chapters. The defining rule is that each cookie can only be used on one team, so roster depth matters more than the ceiling of your single best squad. Every fourth wave is a boss, you can swap teams mid-battle on about a 20-second cooldown, and rewards scale with how deep you push. It unlocks after clearing Stage 6-28 in World Exploration.",
    },
    {
      question: 'What is a Shadow Hex in Cookie Alliance?',
      answer:
        "A Shadow Hex is a modifier attached to every set of four waves. It's either a passive debuff applied to your cookies — things like reduced DEF, disabled shields, or extended cooldowns — or a buff handed to the enemies. On top of the Hex, each four-wave set is also weak to a specific element. The deepest pushers don't run five copies of one meta team; they match each set's element and bring a team that specifically beats that set's Hex. If the Hex disables shields, for example, you bring a comp that wins on DMG Resist and healing instead of one that leans on shields.",
    },
    {
      question: 'Can you reuse the same cookies and treasures across Cookie Alliance teams?',
      answer:
        "No on cookies, yes on treasures, and that distinction is the whole strategy. Each cookie can only appear on one of your five teams, which is what forces roster depth. Treasures, however, can be equipped on every team at once — so your best damage-amp treasure like Old Pilgrim's Scroll can run on all five squads simultaneously. That's the great equalizer: bolt your three best universal treasures onto your weak filler teams and they punch well above their cookie quality. Only deviate when a specific Shadow Hex calls for a defensive or utility treasure instead.",
    },
    {
      question: 'Is the Beacon of Valor worth buying in Cookie Alliance?',
      answer:
        "Usually yes if you're seriously pushing a season. The Beacon of Valor is a Coins-purchased blessing that gives your teams an initial Blast Mode at the start of fights, scaled to how many Level 40 cookies you field, and treasure cooldowns pause during that Blast window for free treasure value. Coins are one of the easier resources to farm, and Blast uptime across five teams adds up. The two caveats: it doesn't activate on the hardest difficulty tiers, and the benefit scales off your leveled-cookie count, so it rewards the same roster depth the mode already demands.",
    },
    {
      question: 'What rewards does Cookie Alliance give?',
      answer:
        "At the end of a campaign you choose between two Relic Chests, each holding a Relic plus Coins, Time Jumpers, and other random rewards, and the rarity of the Relic rolls based on the furthest boss wave you cleared — so pushing deeper directly improves your relic odds. You can spend an extra Alliance Ticket to open an additional chest. Artifacts and points reset each season, but the game refunds up to half of your earned Artifact Points, so you carry a chunk of your investment forward. Because rewards scale with depth and the season resets, the play is to push as far as your five teams reach every season.",
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide', anchor: 'CRK treasures guide' },
    { href: '/blog/cookie-run-kingdom/best-crk-pve-teams', anchor: 'best PvE teams' },
    { href: '/blog/cookie-run-kingdom/best-crk-healers-ranked', anchor: 'healers ranked' },
    { href: '/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked', anchor: 'tank tier list' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list', anchor: 'CRK tier list' },
    { href: '/blog/cookie-run-kingdom/guild-battle-teams', anchor: 'Guild Battle teams guide' },
    { href: '/blog/cookie-run-kingdom/kingdom-arena-meta-team', anchor: 'Kingdom Arena meta team' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Cookie_Alliance', title: 'Cookie Run: Kingdom Wiki — Cookie Alliance' },
    { url: 'https://www.noff.gg/cookie-run-kingdom/teams/cookie-alliance', title: 'Noff.gg — Cookie Run: Kingdom Cookie Alliance teams' },
    { url: 'https://www.devsisters.com/en/', title: 'Devsisters — Official studio site' },
  ],

  tldr:
    "Cookie Alliance is a seasonal Cookie Run: Kingdom campaign where you field up to five teams — 25 cookies, each usable only once — against scaling waves, unlocked after World Exploration Stage 6-28. Roster depth beats single-team ceiling: spread your anchors across different squads instead of stacking them. Every four-wave set carries a Shadow Hex (a debuff on you or a buff on enemies) plus an elemental weakness, so match the element and bring a team that beats the Hex rather than five copies of the meta team. Treasures are reusable across all five teams even though cookies aren't — that's how you rescue weak filler squads. The Beacon of Valor adds opening Blast Mode and pauses treasure cooldowns. Push as deep as you can each season for a better Relic Chest roll, since points partially refund on reset.",
};
