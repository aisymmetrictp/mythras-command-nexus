import type { BlogPost } from '../../blogTypes';

export const tetrisPerfectClearGuide: BlogPost = {
  slug: 'tetris-perfect-clear-guide',
  game: 'tetris',
  category: 'advanced-strategy',
  topicCluster: 'tetris-technique',
  tags: ['perfect-clear', 'pco', 'openers', 'advanced', 'versus'],
  title: 'The Tetris Perfect Clear Guide: PCO Openers and Setups',
  metaDescription:
    'How the Perfect Clear Opener really works: the first-bag box, the 84.64% I-on-hold rate, the Grace System, +7 garbage, and why the PCO is the best opening in Tetris.',
  excerpt:
    "The Perfect Clear Opener wipes your board in ten pieces and dumps 7 garbage rows on your opponent before they have a well. It succeeds nearly two thirds of the time blind, and 84.64% if you hold the I. Here is how it is built.",
  featuredImagePrompt:
    'A dark Tetris playfield showing a Perfect Clear Opener first bag: L, J and O forming a box on the left, S, Z and T sloping beside it, an I piece waiting in the hold slot',
  heroImage: '/images/blog/tetris/tetris-perfect-clear-guide/pco-first-bag-hero.webp',
  heroImageAlt:
    'A Tetris board showing the Perfect Clear Opener first-bag shape, with L, J and O building a box, S, Z and T sloping beside it, and an I piece held.',
  imageSources: [
    {
      src: '/images/blog/tetris/tetris-perfect-clear-guide/pco-first-bag-hero.webp',
      sourceUrl: 'https://gamertagmythras.com',
      license: 'Original diagram (c) GamerTagMythras, CC-BY-SA',
    },
    {
      src: '/images/blog/tetris/tetris-perfect-clear-guide/pco-4x4-box.webp',
      sourceUrl: 'https://gamertagmythras.com',
      license: 'Original diagram (c) GamerTagMythras, CC-BY-SA',
    },
    {
      src: '/images/blog/tetris/tetris-perfect-clear-guide/perfect-clear-attack.webp',
      sourceUrl: 'https://gamertagmythras.com',
      license: 'Original diagram (c) GamerTagMythras, CC-BY-SA',
    },
    {
      src: '/images/blog/tetris/tetris-perfect-clear-guide/grace-system-6x4.webp',
      sourceUrl: 'https://gamertagmythras.com',
      license: 'Original diagram (c) GamerTagMythras, CC-BY-SA',
    },
  ],
  publishDate: '2026-07-23T00:00:00.000Z',
  lastUpdated: '2026-07-23T00:00:00.000Z',
  primaryKeyword: 'tetris perfect clear guide',
  secondaryKeywords: [
    'perfect clear opener pco',
    'how to perfect clear tetris',
    'pco success rate',
    'grace system tetris',
    'tetris all clear garbage',
    'best tetris opener',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'why-the-perfect-clear-is-worth-learning', label: 'Why the perfect clear is worth learning', level: 2 },
    { id: 'what-actually-counts-as-a-perfect-clear', label: 'What actually counts as a perfect clear', level: 2 },
    { id: 'the-pco-the-opener-that-runs-the-meta', label: 'The PCO: the opener that runs the meta', level: 2 },
    { id: 'building-the-first-bag-step-by-step', label: 'Building the first bag, step by step', level: 2 },
    { id: 'the-i-on-hold-decision-that-nearly-doubles-your-odds', label: 'The I-on-hold decision that nearly doubles your odds', level: 2 },
    { id: 'when-the-pco-wont-solve-use-the-grace-system', label: 'When the PCO won\'t solve, use the Grace System', level: 2 },
    { id: 'looping-perfect-clears-and-why-most-people-shouldnt', label: 'Looping perfect clears, and why most people shouldn\'t', level: 2 },
    { id: 'the-mistakes-that-blow-up-your-pc', label: 'The mistakes that blow up your PC', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `A Perfect Clear Opener empties your board in **ten pieces** and, in most Guideline versus games, drops **7 garbage rows** on your opponent before they have finished building their first well. It succeeds on **61.19%** of random opening sequences with no hold usage, and on **84.64%** when you hold the I piece where the sequence allows. Those are not trick-shot odds. That is the single highest expected-value opening in competitive Tetris, and it is why every serious versus player has it in muscle memory.

Everything here describes **modern Guideline Tetris** running the Super Rotation System with 7-bag randomization and a hold slot: TETR.IO, Tetris Effect, Puyo Puyo Tetris, Jstris, tetris.com. The perfect clear as a repeatable *opening* only exists because 7-bag guarantees the piece distribution of your first fourteen pieces. In classic NES Tetris, where pieces are effectively random and there is no hold, you cannot plan one — so this guide assumes a Guideline title.

## Why the perfect clear is worth learning

A perfect clear is the fattest single payout in the game, in both currencies that matter.

On **score**, recent Guideline games such as Tetris Effect and the 2020 mobile Tetris add a flat bonus on top of the normal line-clear points: **800 × level** for a single-line PC, 1200 for a double, 1800 for a triple, 2000 for a Tetris PC, and **3200 × level** for a back-to-back Tetris PC. A back-to-back Tetris perfect clear therefore pays 3200 plus the 1200 for the Tetris itself — **4400 × level from four rows**.

On **garbage**, the standard Guideline table treats an all clear as **+7 rows** — more than a Tetris (4) and a back-to-back bonus (1) combined. Some titles tune this: Tetris 99 dials the all clear down to +4, one of the very few places it deviates from the standard table. The relationship holds everywhere even when the exact number moves: a perfect clear is the biggest burst of pressure you can send in a single placement.

![A cleared Tetris board sending seven garbage rows to an opponent's board.](/images/blog/tetris/tetris-perfect-clear-guide/perfect-clear-attack.webp)

Land a PCO on turn one and your opponent is staring at 7 rows of garbage before they have thrown a single line back. That is not a scoring flourish. In versus, it is a game-defining head start.

## What actually counts as a perfect clear

A perfect clear — also called an **all clear** or **bravo** — is awarded when a line clear leaves the entire playfield empty. Every cell. The key word is *line clear*: the board has to become empty **as the result of clearing lines**, not by never placing anything. You cannot perfect clear an already-empty board.

That definition has one practical consequence people miss: the PC is granted on the placement that clears the lines, so your final piece both fills the last gaps **and** completes the rows in the same drop. If your last piece fills the board without completing a row, you have not cleared anything — you have topped off your own stack.

## The PCO: the opener that runs the meta

The Perfect Clear Opener is the standard route to a perfect clear inside the first four lines, using the first ten pieces you are dealt. The idea is simple to state and takes real practice to execute: build a specific four-row-tall shape out of your first bag, then complete the perfect clear with the opening pieces of your second bag.

![The four-by-four box built from L, J, O and I pieces at the core of the PCO.](/images/blog/tetris/tetris-perfect-clear-guide/pco-4x4-box.webp)

The structural core is a **4×4 box on the left** built from L, J, O and I — four pieces, sixteen cells, no holes. In the standard first-bag build, the L, J and O pieces form a rectangle while the T, S and Z pieces form a slope beside it, and the I piece is kept on hold. Then the first four pieces of your second bag (and, ideally, that held I) drop in to complete the four rows all at once.

The coverage is the reason it dominates. The PCO handles the **vast majority of opening bags — around 92.46%** of them can be routed into some PCO path. You will not always take the identical placements, because the exact order your bag arrives changes which branch you follow, but the shape and the goal stay constant. That is what makes it learnable: one target, many small variations.

## Building the first bag, step by step

Here is the practical build, in the order it actually happens at the board:

- **Reserve the left four columns for the box.** L, J and O are your box-builders. Lay them so the leftmost four columns fill flat and holeless across the bottom rows.
- **Slope the T, S and Z beside the box.** These three do not want to be flat; S and Z are diagonal by nature, and the T fills the notch they leave. Let them form the trapezoid the box leans against.
- **Hold the I if the order allows it.** The I is your most flexible completion piece. Sitting in hold, it can drop in vertically or horizontally to close whichever gap the second bag leaves.
- **Read the second bag before you commit the fifth piece.** By the time you are placing piece five or six, you can see enough of bag two to know which completion path is live. Choose the branch, then place into it.
- **Make the final piece both fill and clear.** The last drop has to complete all four rows simultaneously. If it only fills without clearing, the PC is gone.

The pieces to *avoid* leaning on as your first cavity-solvers are S, Z and O — they have the fewest useful orientations, so committing them early into the gap reduces your options. L, J and T, with their many orientations, are the ones you want flexibility with. That single habit — hold the flexible pieces, spend the rigid ones into the structure early — is most of what separates a reliable PCO from a coin flip.

## The I-on-hold decision that nearly doubles your odds

This is the single most important number in the whole technique. Drop the I piece into the structure immediately, treating it as just another block, and the PCO solves on **61.19%** of opening sequences. Keep the I on hold through the first bag, so it is available to slot into whichever gap remains, and the success rate jumps to **84.64%**.

That is a **23-point swing** from one decision. The I is the only piece that can fill a one-wide, four-tall column or a flat one-by-four in a single drop, which makes it the universal patch for whatever hole the second bag leaves you. Spend it too early and you have thrown away your safety valve.

The discipline is unglamorous: when the I shows up in bag one, resist the urge to place it, hold it, and build around the gap it would have filled. New PCO players lose most of their perfect clears not to bad sequences but to reflexively hard-dropping the I on sight.

## When the PCO won't solve, use the Grace System

No opener is universal, and roughly one in thirteen opening bags simply does not route into a clean PCO — often when the I and O arrive as your first two pieces, or when L, J, S and Z all show up early and jam the box.

For those, the **Grace System** is the standard fallback. Instead of a 4×4 box it builds a **6×4 rectangle**, and with the T piece held it reaches an **88.57% perfect-clear rate** — higher than the PCO's own headline number.

![A six-by-four rectangle of mixed tetrominoes, the Grace System perfect-clear shape.](/images/blog/tetris/tetris-perfect-clear-guide/grace-system-6x4.webp)

The sensible decision tree most guides teach:

1. **If the Grace System fits the bag, use it** — it has the highest raw success rate.
2. **Otherwise run the PCO with the I held**, the 84.64% path.
3. **Fall back to the plain PCO** as your last resort.

You do not need all three memorized to benefit. Learn the I-held PCO cold first; it covers the overwhelming majority of games. Add the Grace System later, once the PCO is automatic and you can recognize the handful of bags where it stalls.

## Looping perfect clears, and why most people shouldn't

There is a level above single openers: **loopable** perfect clears that chain PC after PC indefinitely. The **Lorax Continuation**, a documented extension of the PCO, reaches a **100% PC chance on the fourth bag** in some branches and is tall enough — up to 14 lines in certain paths — to loop. There are freestyle systems where S, T and Z go left, L, J and O go right, I pieces fill the middle, and the whole pattern repeats every four bags.

These are real and genuinely devastating in the right hands. They are also a rabbit hole. Loop setups demand that you memorize dozens of branch solutions and read three or four pieces of queue at once, and a single misread doesn't just cost you a PC — it leaves you with a tall, committed board and no easy recovery. For all but the most dedicated players, the return on that study time is worse than simply learning the opening PCO plus solid mid-game stacking.

The honest recommendation: get one PCO path to a reflex, learn the Grace System fallback, and put the rest of your practice into downstacking and T-spins. A player who lands a clean opener every game and then plays a competent mid-game beats a player who knows three loop branches and tops out when the loop breaks.

## The mistakes that blow up your PC

- **Hard-dropping the I on sight.** The single most common PCO killer. Hold it — that one habit is the 23-point gap between 61% and 85%.
- **Filling the board without clearing.** The final piece must complete all four rows in the same drop it fills them. Fill-only means you just topped off your own stack.
- **Leaning on S, Z and O to solve the cavity.** They have the fewest orientations. Spend them into the structure early; keep L, J and T flexible.
- **Forcing a PCO onto a bag that won't take it.** About 7.5% of openings don't route cleanly. Recognize those and switch to the Grace System or just stack normally instead of building a hole.
- **Ignoring the queue before committing.** By piece five you can see which second-bag branch is live. Placing blind is how a 90% setup becomes a 50% guess.
- **Chasing loops before the basics are automatic.** A broken loop leaves you with a tall board and no plan. Master the single opener first.

For the stacking discipline these setups sit on top of, see our [Tetris stacking fundamentals](/blog/tetris/tetris-stacking-fundamentals) guide, and for the full attack math behind that +7 garbage number, the [Tetris scoring and attack guide](/blog/tetris/tetris-scoring-and-attack-guide). More on the [Tetris coverage hub](/blog/tetris).

## Quick Action Checklist

- Learn one PCO first-bag build until the shape is automatic, not memorized move-by-move.
- Reserve the left four columns for the L, J, O and I box; slope T, S and Z beside it.
- Hold the I through the first bag every time the order allows — it is worth 23 points of success rate.
- Spend S, Z and O into the structure early; keep L, J and T flexible for the cavity.
- Read the second bag by piece five and pick your completion branch before committing.
- Make the final piece complete all four rows in the same drop it fills them.
- Keep the Grace System in your pocket for the ~7.5% of bags the PCO can't route.
- Bank the +7 garbage as a turn-one lead, then play a clean mid-game — don't chase loops until the opener is a reflex.`,
  faq: [
    {
      question: 'What is the Perfect Clear Opener (PCO) in Tetris?',
      answer:
        'The PCO is the standard opening that produces a perfect clear inside the first four lines, using your first ten pieces. In the first bag you build a shape whose core is a 4x4 box from the L, J, O and I pieces, with the S, Z and T pieces forming a slope beside it, ideally holding the I. Then the first four pieces of your second bag complete all four rows at once, clearing the whole board. It routes from roughly 92 percent of possible opening bags, which is why it is the default competitive opener.',
    },
    {
      question: 'What is the success rate of the PCO?',
      answer:
        'With no hold usage, the PCO solves on 61.19% of random opening sequences. If you keep the I piece on hold through the first bag so it is available to fill whichever gap remains, the rate rises to 84.64%. That 23-point jump from a single decision is why holding the I is the most important habit in the technique. The Grace System, an alternative that builds a 6x4 rectangle with the T held, reaches an even higher 88.57%.',
    },
    {
      question: 'How much garbage does a perfect clear send?',
      answer:
        'In the standard Guideline versus table, an all clear sends +7 rows of garbage, which is more than a Tetris and a back-to-back bonus combined. Some titles tune the value: Tetris 99 sends +4 for an all clear. On score, recent Guideline games add a bonus on top of the line clear, ranging from 800 times level for a single-line PC up to 3200 times level for a back-to-back Tetris perfect clear.',
    },
    {
      question: 'Why should I hold the I piece during the PCO?',
      answer:
        'The I is the only piece that fills a one-wide four-tall column or a flat one-by-four in a single drop, making it the universal patch for whatever gap your second bag leaves. If you drop it into the structure early, you lose that safety valve and your success rate falls to 61.19%. Holding it keeps it available for the completion step and pushes the rate to 84.64%. Reflexively hard-dropping the I on sight is the most common reason beginners miss their perfect clears.',
    },
    {
      question: 'Is the PCO worth learning for a casual player?',
      answer:
        'If you play any versus Tetris, yes. A single reliable PCO gives you a turn-one lead of 7 garbage rows before your opponent has built a well, and it is the highest expected-value opening in the game. You do not need the loop systems or multiple fallbacks to benefit. Learn one I-held PCO path to a reflex, keep the Grace System for the rare bags it does not fit, and spend the rest of your practice on stacking and T-spins.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/tetris', anchor: 'Tetris coverage hub' },
    { href: '/blog/tetris/tetris-stacking-fundamentals', anchor: 'Tetris stacking fundamentals' },
    { href: '/blog/tetris/tetris-scoring-and-attack-guide', anchor: 'Tetris scoring and attack guide' },
  ],
  externalSources: [
    {
      url: 'https://harddrop.com/wiki/Perfect_Clear_Opener',
      title: 'Hard Drop Tetris Wiki — PCO structure and 61.19% / 84.64% success rates',
    },
    {
      url: 'https://tetris.wiki/Perfect_clear',
      title: 'TetrisWiki — perfect clear definition, score bonuses and garbage sent',
    },
    {
      url: 'https://harddrop.com/wiki/Perfect_Clear_Setups',
      title: 'Hard Drop Tetris Wiki — Grace System and perfect clear setup coverage',
    },
  ],
  tldr:
    'The Perfect Clear Opener empties your board in ten pieces and sends +7 garbage rows in standard Guideline versus, making it the highest expected-value opening in Tetris. Its core is a 4x4 box built from L, J, O and I, with S, Z and T sloping beside it; the second bag completes all four rows at once. It solves on 61.19% of opening sequences, or 84.64% if you keep the I on hold — a 23-point swing from one decision. For the roughly 7.5% of bags the PCO cannot route, the Grace System builds a 6x4 rectangle and hits 88.57% with the T held. Learn one I-held path to a reflex before chasing loop setups.',
};
