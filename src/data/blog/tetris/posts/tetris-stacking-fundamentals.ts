import type { BlogPost } from '../../blogTypes';

export const tetrisStackingFundamentals: BlogPost = {
  slug: 'tetris-stacking-fundamentals',
  game: 'tetris',
  category: 'beginner-guides',
  topicCluster: 'tetris-technique',
  tags: ['stacking', 'fundamentals', 'downstacking', 'guideline', '7-bag'],
  title: 'Tetris Stacking Fundamentals: Build a Board That Wins',
  metaDescription:
    'Learn Tetris stacking fundamentals the right way: 9-0 stacking, surface management, 7-bag reading, hold discipline, and downstacking that digs you out.',
  excerpt:
    "Most players do not lose to speed. They lose to a board they built themselves three minutes earlier. Here is how stacking actually works in modern Guideline Tetris, and the habits that stop you from burying your own well.",
  featuredImagePrompt:
    'A clean Tetris playfield viewed head-on, nine columns stacked flat and level with a single empty well column on the right, a vertical I piece descending toward it, neon grid glow on a dark background',
  heroImage: '/images/blog/tetris/tetris-stacking-fundamentals/clean-stack-surface.webp',
  heroImageAlt:
    'A Tetris stack profile with a smooth stepped surface and no overhangs, the shape you want your board to hold.',
  imageSources: [
    {
      src: '/images/blog/tetris/tetris-stacking-fundamentals/clean-stack-surface.webp',
      sourceUrl: 'https://tetris.fandom.com/wiki/File:20G_ideal_field.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/tetris/tetris-stacking-fundamentals/seven-tetrominoes.webp',
      sourceUrl: 'https://tetris.fandom.com/wiki/File:Tetromino_image.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/tetris/tetris-stacking-fundamentals/uneven-stack-surface.webp',
      sourceUrl: 'https://tetris.fandom.com/wiki/File:20G_uneven_field_1.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/tetris/tetris-stacking-fundamentals/jagged-stack-gap.webp',
      sourceUrl: 'https://tetris.fandom.com/wiki/File:20G_uneven_field_2.png',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-20T00:00:00.000Z',
  lastUpdated: '2026-07-20T00:00:00.000Z',
  primaryKeyword: 'tetris stacking fundamentals',
  secondaryKeywords: [
    'how to stack in tetris',
    'tetris 9-0 stacking',
    'tetris downstacking guide',
    'tetris 7 bag randomizer',
    'tetris beginner guide',
    'tetris flat stacking',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'why-your-stack-keeps-killing-you', label: 'Why your stack keeps killing you', level: 2 },
    { id: 'the-9-0-stack-and-why-it-works', label: 'The 9-0 stack and why it works', level: 2 },
    { id: 'flat-is-a-means-not-an-end', label: 'Flat is a means, not an end', level: 2 },
    { id: 'reading-the-bag-what-7-bag-guarantees-you', label: 'Reading the bag: what 7-bag guarantees you', level: 2 },
    { id: 'hold-is-a-buffer-not-a-panic-button', label: 'Hold is a buffer, not a panic button', level: 2 },
    { id: 'downstacking-digging-out-without-making-it-worse', label: 'Downstacking: digging out without making it worse', level: 2 },
    { id: 'upstacking-building-height-on-purpose', label: 'Upstacking: building height on purpose', level: 2 },
    { id: 'drills-that-actually-move-the-needle', label: 'Drills that actually move the needle', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `You did not lose that game because the pieces came too fast. You lost because forty seconds earlier you dropped an S piece somewhere convenient instead of somewhere correct, and every placement since then has been damage control.

This is a guide to stacking in **modern Guideline Tetris** — the ruleset used by Tetris Effect, Puyo Puyo Tetris, TETR.IO, Jstris, and tetris.com. That matters, because Guideline gives you three tools that classic NES Tetris does not: a hold slot, a 7-bag randomizer, and the Super Rotation System with wall kicks. Almost everything below is built on those three things. If you are playing NES Tetris, the surface-management ideas still apply, but the bag math and the hold advice do not.

## Why your stack keeps killing you

The playfield is 10 cells wide and 20 rows tall, with a 20-row buffer above that is normally hidden. Ten columns is a small number, and it has one very awkward property: 10 is not divisible by 4. Every tetromino covers exactly four cells, so a row can never be completed by a single piece. Every line you clear is a collaboration between at least three pieces.

That is the whole game in one sentence. You are not placing pieces, you are maintaining a *surface* that future pieces can land on cleanly. A board dies when its surface stops accepting the pieces the randomizer is about to hand you.

![The seven tetrominoes: I, J, L, O, S, Z, and T, the complete set the randomizer deals from.](/images/blog/tetris/tetris-stacking-fundamentals/seven-tetrominoes.webp)

Two failure modes cause the overwhelming majority of beginner topouts:

- **Holes.** A covered empty cell. Every row above a hole is now locked until you dig it out. Holes are not a small mistake — one hole can cost you four rows of usable board.
- **Terrain your pieces cannot reach.** A column with steep walls on both sides only accepts an I piece vertically. A single-cell notch under an overhang accepts nothing at all without a spin.

Everything in this guide is aimed at those two problems.

## The 9-0 stack and why it works

The default structure worth learning first is **9-0 stacking**: keep nine columns built up roughly level, and leave one column — your *well* — completely empty. When an I piece arrives, you drop it vertically into the well and clear four rows at once.

Why this and not something cleverer? Because a Tetris (four lines at once) is worth **800 points times your level** under Guideline scoring, against 100 for a Single, 300 for a Double, and 500 for a Triple. Four Singles pay 400. One Tetris pays 800. You double your score for the same four rows, and in versus modes the gap is starker: a Tetris sends 4 garbage rows while Singles send nothing at all.

Put your well on the far left or far right, not in the middle. An edge well means the wall does half the containment work, and it leaves you a single continuous nine-wide field to stack across instead of two narrow ones. Most players settle on the right edge simply because it pairs well with how they hold their hands, but either edge is fine. Pick one and be consistent — your pattern recognition is column-specific whether you realize it or not.

The uncomfortable part of 9-0 is that you are deliberately building height while waiting for an I piece. That feels dangerous. It is only dangerous if you do not know when the I is coming, which brings us to the bag.

## Flat is a means, not an end

New players hear "keep it flat" and take it literally, spending placements sanding down every bump. That is a waste. What you actually want is a surface whose bumps *match the pieces you are about to receive*.

Concretely, a good surface has:

- **No overhangs.** Nothing sticking out over an empty cell you have not deliberately planned to spin into.
- **Shallow, wide steps** rather than deep, narrow ones. A two-column plateau one row higher than its neighbour is easy to build on. A one-column spike three rows tall is a trap.
- **Somewhere obvious for S and Z.** These two are the pieces that create holes, because neither one lies flat. An S or Z needs either a matching step or a vertical seam against a wall.

![An uneven stack with steep single-column towers and deep narrow gaps, the terrain that forces holes.](/images/blog/tetris/tetris-stacking-fundamentals/uneven-stack-surface.webp)

That board is not unrecoverable, but look at what it demands. The narrow gap between the tall columns accepts almost nothing. Every piece you place there either sits on top and deepens the problem or covers the gap and creates a hole. This is what "keep it flat" is really warning you about: not bumpiness, but *terrain that has no correct answer*.

The practical version of the rule: **before you place a piece, ask what the surface will look like afterwards, not whether the piece fits now.** A placement that fits perfectly and leaves a one-wide canyon is a bad placement.

## Reading the bag: what 7-bag guarantees you

The Guideline randomizer is the **Random Generator**, universally called 7-bag. All seven tetrominoes go into a bag, get shuffled, and are dealt out one at a time. When the bag empties, a fresh shuffled bag begins.

This is not a small detail — it is a hard mathematical guarantee, and it is the reason 9-0 stacking is safe. Because every bag contains exactly one I piece:

- **You will never wait more than 12 pieces for an I.** The worst case is an I dealt first in one bag and last in the next: six remaining pieces from bag one, plus six from bag two, equals a 12-piece drought. That is the ceiling. There is no such thing as a 20-piece I drought in a 7-bag game.
- **Every seven pieces you receive one of each.** Three S pieces in a row is possible across a bag boundary, but four is not.
- **You can count.** If you have seen four pieces of the current bag and no I yet, the I is one of the next three.

Most Guideline games show you a **next queue of up to six pieces**. Combined with bag knowledge, that queue is close to perfect information about the near future. Players who plateau almost always plateau because they look at the next piece and nothing else. Read the whole queue, every time, and plan two or three placements ahead rather than one.

## Hold is a buffer, not a panic button

Hold lets you park the active piece and swap it back later. Only one piece fits in hold, and **once you use hold you cannot use it again until the current piece locks down.** That single restriction is what people misuse.

The beginner pattern is: piece arrives, player has no idea where to put it, player holds it. Now the awkward piece is stored *and* they still have to place something, and their emergency valve is gone.

Better habits:

- **Park an I piece early and keep it.** Holding an I while you build nine columns means you decide when the Tetris happens instead of the randomizer deciding for you.
- **Hold to solve a problem you can already see in the queue,** not to defer a decision you have not made.
- **If you find yourself holding to survive the current piece, your stack is already in trouble.** Fix the terrain instead.

## Downstacking: digging out without making it worse

Eventually you will have holes. Downstacking is the skill of removing rows above a hole to expose and clear it, and it separates players who recover from players who spiral.

![A jagged stack with a gap opening at the base, the situation downstacking is meant to resolve.](/images/blog/tetris/tetris-stacking-fundamentals/jagged-stack-gap.webp)

The rules that matter:

1. **Dig the shallowest hole first.** If one hole is buried under two rows and another under six, the two-row hole is nearly free. Take it.
2. **Clear Singles without shame while digging.** Yes, a Single pays 100 and sends no garbage. It also removes a row of ceiling. When you are digging, rows removed matters more than points scored.
3. **Do not build over an unresolved hole.** Every row you add on top raises the cost of that hole by one clear.
4. **Do not create a second hole to reach the first.** This is the actual spiral. Take the slower, cleaner line.
5. **Re-establish a well as soon as you are clean.** The moment the board is hole-free, go back to 9-0. Downstacking is a recovery mode, not a playstyle.

## Upstacking: building height on purpose

The counterpart skill is building up cleanly and quickly while keeping the well open. Some specifics worth internalising:

- **The O piece is not free.** It occupies two columns and cannot adapt. Place it on an existing two-wide flat area, ideally against a wall, and never straddle a step with it.
- **S and Z want each other.** An S and a Z stacked together form a clean shape. If you have an S with no home, check the queue — a Z two pieces later may resolve both.
- **Keep the well wall clean.** The column adjacent to your well should be one of the flattest on the board. If it develops a notch, the I piece will not seat properly.
- **L and J are your repair tools.** They handle single-column steps and vertical seams better than anything else. Do not spend them on flat ground you could have covered with an O.

A useful discipline is a soft height ceiling. Decide that you will not build the nine columns past roughly half the visible field while waiting for an I. Given the 12-piece worst case, you will never need to.

## Drills that actually move the needle

Deliberate practice beats playing more games. Four drills, in order of value:

1. **Zero-hole marathon.** Play a 40-line sprint with one rule: never create a hole. Ignore your time completely. Restart the moment you make one. This trains surface reading faster than anything else.
2. **Well-side discipline.** Play a full game where the well must stay in the same column the entire time. No moving it, no filling it with a non-I piece.
3. **Queue-reading reps.** Play at a comfortable speed and force yourself to decide the placement for the *third* piece in the queue before you place the current one.
4. **Dig practice.** Most modern clients offer a garbage or cheese mode that starts you with pre-filled rows containing holes. Ten minutes of this a day makes recovery instinctive.

If you want to build on this, the natural next steps are learning to place pieces with fewer inputs and learning to turn your stack into damage. Both have their own guides: [Tetris finesse](/blog/tetris/tetris-finesse-guide) covers input efficiency, and [the T-spin guide](/blog/tetris/tetris-t-spin-guide) covers converting a clean board into real scoring pressure. You can find the rest of our coverage on the [Tetris coverage hub](/blog/tetris).

## Quick Action Checklist

- Pick one edge column as your well and keep it there for the whole game.
- Read the entire next queue before every placement, not just the next piece.
- Never place a piece that creates a hole unless the alternative is topping out.
- Remember the hard limit: 7-bag means you wait at most 12 pieces for an I.
- Park an I in hold when you can, so you control when the Tetris fires.
- Keep the column beside your well flatter than everything else.
- Give S and Z a planned home before they arrive, not after.
- When you have holes, dig the shallowest one first and take Singles freely.
- Never build on top of a hole you have not resolved.
- Run a zero-hole sprint drill where time does not count and holes reset the run.`,
  faq: [
    {
      question: 'Should my well be on the left, the right, or in the middle?',
      answer:
        'Put it on an edge — left or right, your choice — and never in the middle. An edge well uses the playfield wall as one of its containment walls and leaves you one continuous nine-column area to stack across, instead of splitting your board into two narrow halves. Which edge you pick matters far less than picking one and staying consistent, because your pattern recognition for placements is column-specific.',
    },
    {
      question: 'What is the longest I can go without an I piece in modern Tetris?',
      answer:
        'Twelve pieces. The Guideline Random Generator (7-bag) shuffles all seven tetrominoes and deals them out before refilling, so every bag of seven contains exactly one I. The worst case is an I dealt first in one bag and last in the next, giving six pieces from the first bag plus six from the second. This guarantee is what makes 9-0 stacking safe, and it does not apply to NES Tetris, which uses a different randomizer.',
    },
    {
      question: 'Is it ever correct to clear a Single?',
      answer:
        'Yes, whenever you are downstacking. A Single scores 100 times level and sends no garbage in versus, so it is a bad clear when your board is healthy. But when you are digging out holes, the currency that matters is rows of ceiling removed, not points. Refusing to take Singles while buried is one of the most common ways players turn a recoverable board into a topout.',
    },
    {
      question: 'How high should I build before I clear my Tetris?',
      answer:
        'Set a soft ceiling around half the visible playfield and stop adding height past it while you wait. Because 7-bag guarantees an I within 12 pieces, you never need to build dangerously high to bridge a drought. If you are regularly reaching the top of the field waiting for an I, the problem is usually that you filled the well with something else or created holes that are eating your rows.',
    },
    {
      question: 'Does this advice work for NES Tetris?',
      answer:
        'Partly. The surface-management principles — avoid holes, avoid narrow canyons, keep a well open, give S and Z a home — apply to any version of Tetris. The bag counting does not, because NES uses a different randomizer with no per-bag guarantee, so I-piece droughts really can run long. NES also has no hold slot and no Super Rotation System wall kicks, so hold discipline and spin-based recovery are simply unavailable there.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/tetris', anchor: 'Tetris coverage hub' },
    { href: '/blog/tetris/tetris-t-spin-guide', anchor: 'Tetris T-spin guide' },
    { href: '/blog/tetris/tetris-finesse-guide', anchor: 'Tetris finesse guide' },
  ],
  externalSources: [
    {
      url: 'https://tetris.wiki/Tetris_Guideline',
      title: 'TetrisWiki — the Tetris Guideline (playfield, 7-bag, hold, lock down)',
    },
    {
      url: 'https://tetris.wiki/Scoring',
      title: 'TetrisWiki — Guideline scoring tables',
    },
    {
      url: 'https://harddrop.com/wiki/Garbage',
      title: 'Hard Drop Tetris Wiki — garbage and attack values in Guideline games',
    },
  ],
  tldr:
    'Stack nine columns roughly level and keep one edge column empty as a well, because a Tetris scores 800 times level versus 400 for four Singles and sends 4 garbage rows instead of none. The 7-bag randomizer guarantees an I piece within at most 12 pieces, so you never need to build dangerously high while waiting. Avoid holes above all else, read the entire next queue rather than one piece, and when you do get buried, dig the shallowest hole first and take Singles freely.',
};
