import type { BlogPost } from '../../blogTypes';

export const tetrisScoringAndAttackGuide: BlogPost = {
  slug: 'tetris-scoring-and-attack-guide',
  game: 'tetris',
  category: 'advanced-strategy',
  topicCluster: 'tetris-technique',
  tags: ['scoring', 'attack', 'back-to-back', 'combos', 'perfect-clear', 'versus'],
  title: 'Tetris Scoring and Attack Explained: Points, B2B, Combos, and Garbage',
  metaDescription:
    'Every Guideline Tetris scoring value explained, plus the versus attack table: back-to-back, combos, perfect clears, Tetris 99 badges, and TETR.IO surge.',
  excerpt:
    'Points and garbage are two completely different economies, and most players optimise for the wrong one. Here are the actual numbers behind Guideline scoring, versus attack, back-to-back, combos, and perfect clears.',
  featuredImagePrompt:
    'A split Tetris versus screen, two playfields side by side, a stack of garbage rows rising on the right while a bright quad line clear flashes on the left, neon score numbers floating above',
  heroImage: '/images/blog/tetris/tetris-scoring-and-attack-guide/versus-attack-board.webp',
  heroImageAlt:
    'A Tetris 99 match in progress, one playfield surrounded by dozens of opponent boards receiving and sending attack.',
  imageSources: [
    {
      src: '/images/blog/tetris/tetris-scoring-and-attack-guide/versus-attack-board.webp',
      sourceUrl: 'https://tetris.fandom.com/wiki/File:Tetris_99_screenshot_1.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/tetris/tetris-scoring-and-attack-guide/garbage-rows-received.webp',
      sourceUrl: 'https://tetris.fandom.com/wiki/File:Garbage_example_1.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/tetris/tetris-scoring-and-attack-guide/perfect-clear-opener.webp',
      sourceUrl: 'https://tetris.fandom.com/wiki/File:Perfect_Clear_Opener.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/tetris/tetris-scoring-and-attack-guide/tetris-99-targeting.webp',
      sourceUrl: 'https://tetris.fandom.com/wiki/File:Tetris_99_screenshot_2.jpg',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-22T00:00:00.000Z',
  lastUpdated: '2026-07-22T00:00:00.000Z',
  primaryKeyword: 'tetris scoring',
  secondaryKeywords: [
    'tetris scoring chart',
    'tetris back to back bonus',
    'tetris garbage table',
    'tetris combo attack',
    'tetris perfect clear points',
    'tetris 99 badges attack',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 10,
  toc: [
    { id: 'points-and-garbage-are-two-different-economies', label: 'Points and garbage are two different economies', level: 2 },
    { id: 'the-guideline-scoring-table', label: 'The Guideline scoring table', level: 2 },
    { id: 'back-to-back-the-15x-nobody-plans-around', label: 'Back-to-back: the 1.5x nobody plans around', level: 2 },
    { id: 'combos-loud-for-points-quiet-for-damage', label: 'Combos: loud for points, quiet for damage', level: 2 },
    { id: 'perfect-clears-are-the-fattest-payout-in-the-game', label: 'Perfect clears are the fattest payout in the game', level: 2 },
    { id: 'what-actually-sends-garbage', label: 'What actually sends garbage', level: 2 },
    { id: 'tetris-99-bends-the-table-with-badges-and-targeting', label: 'Tetris 99 bends the table with badges and targeting', level: 2 },
    { id: 'tetrio-threw-the-table-out', label: 'TETR.IO threw the table out', level: 2 },
    { id: 'how-to-actually-raise-your-numbers', label: 'How to actually raise your numbers', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Two players clear the same forty lines. One finishes with triple the score of the other, and in a versus match one of them sends roughly twice as much garbage. Nothing about their stacking speed explains the gap. The gap is entirely in *which clears they chose*, and both scoring and attack in modern Tetris are governed by published tables that most players have never actually read.

This is a numbers guide for **Guideline Tetris** — the shared ruleset behind Tetris Effect, Tetris 99, Puyo Puyo Tetris, tetris.com and, with heavy modifications, TETR.IO. Everything below is the values themselves and what they imply about how you should be playing.

## Points and garbage are two different economies

The single most useful thing to understand up front: **the score table and the attack table are not the same table, and they do not rank clears in the same order.**

Score cares about how difficult a clear is to set up. Attack cares about how much it hurts. They agree on some things (a Tetris is good, a Single is not) and disagree on others (a Triple is worth 500 points but sends only 2 rows, while a T-Spin Single is worth 800 points and sends 2). If you play Marathon and think you have learned versus, you have not. If you play ranked and think you know how to chase a score, same.

Both tables are also *multiplicative* in ways that punish inconsistency. Back-to-back and combo bonuses mean a player who strings clears together and one who spaces them out end up in wildly different places from identical line counts.

## The Guideline scoring table

Here are the base values used by essentially every Guideline game since Tetris DS. **Level always means the level before the clear**, so the last clear that levels you up is paid at the old rate.

| Action | Points |
| --- | --- |
| Single | 100 × level |
| Double | 300 × level |
| Triple | 500 × level |
| Tetris | 800 × level (difficult) |
| Mini T-Spin, no lines | 100 × level |
| T-Spin, no lines | 400 × level |
| Mini T-Spin Single | 200 × level (difficult) |
| T-Spin Single | 800 × level (difficult) |
| Mini T-Spin Double | 400 × level (difficult) |
| T-Spin Double | 1200 × level (difficult) |
| T-Spin Triple | 1600 × level (difficult) |
| Combo | 50 × combo count × level |
| Soft drop | 1 point per cell |
| Hard drop | 2 points per cell |

Read that column twice. A **T-Spin Double pays 1200 for two rows** while a Tetris pays 800 for four. Per row, a T-Spin Double is three times as efficient as a Tetris and twelve times as efficient as a Single. A T-Spin Triple at 1600 is the largest single non-perfect-clear payout in the game.

This is why every high scoring player's board is built around T pieces rather than around the well. If you are still stacking flat and waiting on I pieces, that is a fine foundation — see our [stacking fundamentals guide](/blog/tetris/tetris-stacking-fundamentals) for the version of the board you should be maintaining — but it is a score ceiling, not a score strategy.

Note the drop points too. Hard drop pays 2 per cell, soft drop 1. Over a long Marathon that is real money, and it is one of the few places where playing faster literally scores more.

## Back-to-back: the 1.5x nobody plans around

The word **difficult** in that table is doing enormous work. Any clear marked difficult — a Tetris, or any T-Spin line clear — starts and continues a back-to-back chain. Every difficult clear performed while the chain is live is multiplied by **1.5**, excluding drop points.

The rules that matter:

- Only a **Single, Double, or Triple** breaks the chain. Nothing else.
- A **T-Spin with no lines cleared does not break it.** You can rotate a T into a slot, clear nothing, and your chain survives.
- Not clearing at all does not break it either. You can place twenty pieces without a clear and your back-to-back is still armed.

Run the arithmetic on a chained T-Spin Double: 1200 × 1.5 = **1800 × level**, from two rows. A back-to-back Tetris is 1200. Once you understand that the chain only dies to non-difficult clears, the whole game reframes. You are not choosing between clears — you are choosing between *keeping the multiplier* and cashing out.

The practical failure is the panic Single. Player is buried, clears one row to breathe, and drops a chain they had been building for a minute. Sometimes that is correct. Recognise it as a cost.

## Combos: loud for points, quiet for damage

A combo counter starts at -1 and increases by 1 for every placed piece that clears at least one line. Place a piece that clears nothing and the counter resets. So two clears in a row is a 1-combo, not a 2-combo.

For **points**, the formula is 50 × combo count × level, added on top of the line clear itself. That is meaningful in Marathon but it is not where the money is.

For **attack**, combos matter much more, and the tables vary by game. The Guideline standard table adds nothing at 1 combo, 1 extra row at 2 and 3, 2 rows at 4 and 5, 3 rows at 6 and 7, and tops out around 5 extra rows at 12 and above. Tetris 99 is more generous, giving +1 as early as a 1-combo and reaching +5 at 10. Tetris Effect: Connected is stingier, capping at +4 in normal play and +3 with ZONE enabled.

Add it up across a full chain and the totals converge more than you would expect: a maximal Guideline-standard combo run sends 39 extra rows, Tetris 99 sends 44, and Tetris Effect: Connected sends 30. Long combo chains are a real strategy — that is what the 4-wide setup exists for — but the per-clear damage is low, which is why combo players lose to a single well-timed spike.

## Perfect clears are the fattest payout in the game

A perfect clear (also called an all clear or bravo) happens when a line clear empties the playfield completely. Recent Guideline games including Tetris Effect and the 2020 mobile Tetris award a bonus **on top of** the normal line clear score:

| Perfect clear type | Bonus points |
| --- | --- |
| Single-line perfect clear | 800 × level |
| Double-line perfect clear | 1200 × level |
| Triple-line perfect clear | 1800 × level |
| Tetris perfect clear | 2000 × level |
| Back-to-back Tetris perfect clear | 3200 × level |

The bonuses stack with the clear itself. A Triple perfect clear pays 1800 + 500 = 2300 × level. A back-to-back Tetris perfect clear is 3200 + 1200 = 4400 × level, from four rows.

![A compact opening formation with pieces interlocked and no gaps, the shape the Perfect Clear Opener builds before it clears.](/images/blog/tetris/tetris-scoring-and-attack-guide/perfect-clear-opener.webp)

In versus, the general Guideline table treats an all clear as **+7 rows of garbage**, which is more than a Tetris and a back-to-back bonus combined. Tetris 99 dials it down to +4, one of the very few places where it deviates from the standard table.

The reason perfect clears are practical at all is 7-bag. The **Perfect Clear Opener** builds a 4×4 box from I, J, L and O plus a stack of T, S and Z, and succeeds on **61.19%** of starting sequences; hold the I where the sequence allows and that rises to **84.64%**. The Grace System, which builds a 6×4 rectangle, hits **88.57%** with the T held. Those are not gimmick odds. That is a coin flip you win two thirds of the time for the biggest payout in the game.

## What actually sends garbage

Here is the general Guideline attack table, the one most versus games start from:

| Clear | Rows cleared | Garbage sent |
| --- | --- | --- |
| Single | 1 | 0 |
| Double | 2 | 1 |
| Triple | 3 | 2 |
| Tetris | 4 | 4 |
| T-Spin Single | 1 | 2 |
| T-Spin Double | 2 | 4 |
| T-Spin Triple | 3 | 6 |
| Back-to-back bonus | — | +1 |
| All clear | any | +7 |

Three consequences, and they are the whole of versus Tetris.

**Singles send nothing.** Zero. Every Single you clear in a versus match is a row you gave up for free, unless you are digging.

**T-Spins are the best damage-per-row in the game.** A T-Spin Double sends the same 4 rows as a Tetris using half the board height, and it sets up faster. If you do not have T-Spins in your toolkit yet, that is the single highest-leverage thing you can learn — our [T-spin guide](/blog/tetris/tetris-t-spin-guide) covers the corner rules and the standard setups.

**The back-to-back bonus is flat.** Only +1 row, not a multiplier. In scoring, back-to-back is a 50% raise; in attack, it is one extra line. That asymmetry catches people who learn the game in Marathon and then wonder why their beautiful chains are not killing anyone.

![A versus playfield with a T piece descending toward a low stack sitting on a block of grey garbage rows.](/images/blog/tetris/tetris-scoring-and-attack-guide/garbage-rows-received.webp)

One more mechanic worth knowing: incoming garbage sits in a queue before it appears, and clearing lines while it is pending **cancels** it. That is why a fast, clean board beats a slow, huge one. Speed is not just a sprint stat — if you want to raise yours, the [40-line sprint guide](/blog/tetris/tetris-sprint-40-lines-guide) and the [finesse guide](/blog/tetris/tetris-finesse-guide) both attack it from different directions.

## Tetris 99 bends the table with badges and targeting

Tetris 99 keeps the standard base table (except the +4 all clear) and layers a badge economy on top. Knock a player out and you take badges; knock out a player who has badges and you inherit some of theirs. Badges multiply your attack:

| Badges | Attack boost | Badge points required |
| --- | --- | --- |
| 1 | +25% | 2 |
| 2 | +50% | 6 |
| 3 | +75% | 14 |
| 4 | +100% | 30 |

A four-badge player sends double. That is why the late game snowballs so violently and why the Badges targeting mode is a genuine strategic choice rather than a preference.

![A Tetris 99 board mid-match with the surrounding grid of 98 opponent playfields used for targeting.](/images/blog/tetris/tetris-scoring-and-attack-guide/tetris-99-targeting.webp)

Two more Tetris 99 specifics that decide matches:

- **Being targeted pays.** If multiple opponents target you, you get bonus rows per clear: +1 when two players are on you, +3 at three, +5 at four, +7 at five, +9 at six or more. This is applied *before* the badge boost, so a targeted four-badge player is terrifying.
- **There are hard caps.** You can hold at most 12 rows of pending garbage and send at most 20 with one clear. Anything past those numbers is discarded, which means gigantic setups can literally waste damage.

Gravity also ramps once 50 players remain, eventually reaching 1G — one row per frame. Plan your endgame board before that happens, not during.

## TETR.IO threw the table out

TETR.IO uses its own systems by default and they are different enough that habits do not transfer cleanly.

Its **Multiplier** combo system scales attack by \`base × (1 + 0.25x)\` where x is the combo count, so combos amplify big clears rather than adding a flat row. A 4-wide combo of Singles, with a base of 0, is handled by a separate logarithmic curve and is deliberately weak — the system exists specifically to nerf 4-wide and reward combos that finish in a quad or a T-Spin.

Its **back-to-back charging** replaces the flat +1. Difficult clears add one extra row each, and once your streak hits 4 you start charging a **Surge**: every additional back-to-back level adds another line to a stored attack, with no cap. When the streak finally breaks, the entire Surge fires at once, split into segments. Break a long chain and you unload something a normal Guideline game cannot produce.

The takeaway is not that one system is correct. It is that "how do I do damage here" is a question you have to re-ask per game, and the answer is published in each one's wiki.

## How to actually raise your numbers

- **In Marathon, hunt T-Spin Doubles and keep the chain alive.** 1800 × level per two rows beats anything else you can do repeatedly.
- **In versus, stop clearing Singles unless you are digging.** Zero rows sent, chain broken, and you gave your opponent free time.
- **Learn one perfect clear opener.** PCO at a 61% hit rate is the highest expected value opening in the game, in both currencies.
- **Count your back-to-back cost before you break it.** Ask what you lose, not just what you gain.
- **Check the attack table of the game you actually play.** Tetris 99, Tetris Effect: Connected and TETR.IO all differ from the baseline in ways that change correct play.

More of our Tetris breakdowns live on the [Tetris coverage hub](/blog/tetris).

## Quick Action Checklist

- Memorise four numbers: Single 100, Double 300, Triple 500, Tetris 800, all × level.
- Remember the outlier: a T-Spin Double is 1200 and a T-Spin Triple is 1600.
- Keep back-to-back alive; only Singles, Doubles and Triples break it.
- A chained T-Spin Double is 1800 × level. That is your scoring engine.
- In versus, Singles send zero rows. Treat them as a cost, not a clear.
- T-Spin Double and Tetris both send 4, but the T-Spin uses half the height.
- Back-to-back sends only +1 row in versus, not a 1.5x multiplier.
- An all clear sends +7 in most Guideline games, +4 in Tetris 99.
- In Tetris 99, four badges double your attack and being targeted adds up to +9 rows.
- In TETR.IO, combos multiply big clears and a broken back-to-back streak fires a Surge.`,
  faq: [
    {
      question: 'What scores the most points in Tetris?',
      answer:
        'Per row cleared, a back-to-back T-Spin Double is the best repeatable payout in Guideline Tetris at 1800 times level for two rows. A T-Spin Triple has the highest base value of any single clear at 1600 times level. The absolute largest single payout is a back-to-back Tetris perfect clear, which pays a 3200 times level perfect clear bonus on top of the 1200 for the chained Tetris itself, for 4400 times level.',
    },
    {
      question: 'How does the back-to-back bonus work?',
      answer:
        'Any Tetris or T-Spin line clear counts as a difficult clear. Perform difficult clears consecutively and each one after the first is multiplied by 1.5, excluding soft drop and hard drop points. Only a Single, Double or Triple breaks the chain. A T-Spin that clears no lines does not break it, and neither does placing pieces without clearing anything. In versus, back-to-back is worth a flat +1 garbage row instead of a multiplier.',
    },
    {
      question: 'Why do my Singles not send any garbage?',
      answer:
        'Because the general Guideline attack table assigns a Single zero garbage rows. Doubles send 1, Triples send 2, Tetrises send 4, and a T-Spin Single already sends 2. Singles exist for downstacking and for cancelling incoming garbage, not for offence. If you are clearing Singles on a healthy board in a versus match, you are converting board space into nothing.',
    },
    {
      question: 'How much is a perfect clear worth?',
      answer:
        'In recent Guideline games such as Tetris Effect and the 2020 mobile Tetris, perfect clear bonuses are 800 times level for a Single, 1200 for a Double, 1800 for a Triple, 2000 for a Tetris and 3200 for a back-to-back Tetris. Those bonuses are added on top of the normal line clear score, so a Triple perfect clear totals 1800 plus 500, or 2300 times level. In versus, the standard table sends +7 garbage rows for an all clear, though Tetris 99 uses +4.',
    },
    {
      question: 'How likely is the Perfect Clear Opener to actually work?',
      answer:
        'The Perfect Clear Opener succeeds on 61.19% of starting sequences, rising to 84.64% when the sequence lets you hold the I piece. The Grace System, which builds a 6x4 rectangle instead, reaches 88.57% with the T held. These rates only exist because the 7-bag randomizer guarantees the piece distribution of the opening, which is why perfect clears were rare in older Tetris games and are a standard opening now.',
    },
    {
      question: 'Are combos worth building around?',
      answer:
        'They are a legitimate strategy but a low-damage one under most tables. Points-wise a combo adds 50 times combo count times level. Attack-wise the Guideline standard table gives nothing at 1 combo and only reaches around +5 extra rows at 12 and above, totalling 39 rows across a maximal chain. Tetris 99 is more generous at 44, Tetris Effect: Connected less at 30. TETR.IO deliberately nerfs 4-wide combo play with its Multiplier system, which scales large clears rather than rewarding chains of Singles.',
    },
    {
      question: 'How do Tetris 99 badges change attack?',
      answer:
        'Badges are earned by knocking players out, and you inherit badges from opponents who had them. One badge is a 25% attack boost, two is 50%, three is 75% and four is 100%, requiring 2, 6, 14 and 30 badge points respectively. Separately, being targeted by multiple opponents adds bonus rows, from +1 at two attackers up to +9 at six or more, and that bonus is applied before the badge multiplier.',
    },
    {
      question: 'Does TETR.IO use the same scoring as other Tetris games?',
      answer:
        'No. TETR.IO uses its own Multiplier combo system, where attack is base times (1 + 0.25 times combo), so combos amplify large clears instead of adding a flat row. It also replaces the flat back-to-back bonus with back-to-back charging: difficult clears add a row each, and a streak of 4 or more starts charging an uncapped Surge attack that fires all at once when the streak breaks. Its solo 40 LINES and BLITZ modes use separate scoring entirely.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/tetris', anchor: 'Tetris coverage hub' },
    { href: '/blog/tetris/tetris-t-spin-guide', anchor: 'Tetris T-spin guide' },
    { href: '/blog/tetris/tetris-stacking-fundamentals', anchor: 'Tetris stacking fundamentals' },
    { href: '/blog/tetris/tetris-sprint-40-lines-guide', anchor: 'Tetris 40-line sprint guide' },
    { href: '/blog/tetris/tetris-finesse-guide', anchor: 'Tetris finesse guide' },
  ],
  externalSources: [
    {
      url: 'https://tetris.wiki/Scoring',
      title: 'TetrisWiki — Guideline scoring table, back-to-back and perfect clear bonuses',
    },
    {
      url: 'https://tetris.wiki/Combo',
      title: 'TetrisWiki — combo counters and per-game combo garbage tables',
    },
    {
      url: 'https://harddrop.com/wiki/Garbage',
      title: 'Hard Drop Tetris Wiki — general Guideline garbage table',
    },
    {
      url: 'https://tetris.wiki/Tetris_99',
      title: 'TetrisWiki — Tetris 99 badges, targeting bonuses and garbage caps',
    },
    {
      url: 'https://tetris.wiki/TETR.IO',
      title: 'TetrisWiki — TETR.IO Multiplier combos and back-to-back charging',
    },
    {
      url: 'https://tetris.wiki/Perfect_clear',
      title: 'TetrisWiki — Perfect Clear Opener and Grace System success rates',
    },
  ],
  tldr:
    'Guideline Tetris runs two separate economies. For points, a Tetris is 800 times level but a T-Spin Double is 1200 and a back-to-back one is 1800, which is why high scores are built on T pieces rather than the well. For attack, Singles send nothing, Doubles 1, Triples 2, Tetrises 4, T-Spin Doubles 4 and T-Spin Triples 6, with back-to-back worth only a flat +1 row and an all clear worth +7. Tetris 99 adds badges that double attack at four, and TETR.IO replaces both systems with multiplier combos and Surge charging.',
};
