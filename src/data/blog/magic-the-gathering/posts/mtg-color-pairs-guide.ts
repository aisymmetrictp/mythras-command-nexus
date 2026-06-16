import type { BlogPost } from '../../blogTypes';

export const mtgColorPairsGuide: BlogPost = {
  slug: 'mtg-color-pairs-guide',
  game: 'magic-the-gathering',
  category: 'format-guides',
  topicCluster: 'archetypes',
  tags: ['color-pairs', 'guilds', 'deckbuilding'],
  title: 'MTG Two-Color Guild Guide: Every Color Pair Explained',
  metaDescription:
    'The ten MTG two-color guilds explained: Azorius, Dimir, Rakdos, Gruul, Selesnya, Orzhov, Izzet, Golgari, Boros, and Simic — identity, strengths, and strategies.',
  excerpt:
    "Magic players don't say 'white-blue,' they say Azorius — and the ten guild names carry real meaning about how each color pair plays. Here's every two-color combination, what it's actually good at, and the gameplan it pushes you toward.",
  featuredImagePrompt:
    'Ten heraldic guild crests arranged in a ring around a central Ravnica cityscape, each crest glowing with its two mana colors, ornate fantasy guild banners, dramatic lighting, painterly Magic: The Gathering art style, no text',
  heroImage: '/images/blog/magic-the-gathering/mtg-color-pairs-guide/niv-mizzet-parun.jpg',
  heroImageAlt:
    'Niv-Mizzet, Parun, the blue-red Izzet dragon — an icon of the spells-matter two-color guild identity.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-color-pairs-guide/niv-mizzet-parun.jpg',
      sourceUrl: 'https://scryfall.com/card/otc/235/niv-mizzet-parun',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-color-pairs-guide/trostani.jpg',
      sourceUrl: 'https://scryfall.com/card/c19/204/trostani-selesnyas-voice',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-color-pairs-guide/rakdos-lord-of-riots.jpg',
      sourceUrl: 'https://scryfall.com/card/dsc/230/rakdos-lord-of-riots',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-color-pairs-guide/prime-speaker-vannifar.jpg',
      sourceUrl: 'https://scryfall.com/card/rna/195/prime-speaker-vannifar',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
  ],
  publishDate: '2026-06-11T00:00:00.000Z',
  lastUpdated: '2026-06-11T00:00:00.000Z',
  primaryKeyword: 'mtg two color pairs',
  secondaryKeywords: [
    'mtg guild names',
    'mtg color pairs explained',
    'azorius dimir rakdos gruul selesnya',
    'mtg two color guilds',
    'best two color pair mtg',
    'ravnica guilds magic',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'evergreen',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'why-color-pairs-have-names', label: 'Why color pairs have names', level: 2 },
    { id: 'allied-vs-enemy-pairs', label: 'Allied vs enemy pairs', level: 2 },
    { id: 'azorius-white-blue-control', label: 'Azorius (White-Blue) — control', level: 2 },
    { id: 'dimir-blue-black-the-quiet-killer', label: 'Dimir (Blue-Black) — the quiet killer', level: 2 },
    { id: 'rakdos-black-red-burn-it-down', label: 'Rakdos (Black-Red) — burn it down', level: 2 },
    { id: 'gruul-red-green-smash', label: 'Gruul (Red-Green) — smash', level: 2 },
    { id: 'selesnya-green-white-go-wide', label: 'Selesnya (Green-White) — go wide', level: 2 },
    { id: 'orzhov-white-black-attrition', label: 'Orzhov (White-Black) — attrition', level: 2 },
    { id: 'izzet-blue-red-spells-matter', label: 'Izzet (Blue-Red) — spells matter', level: 2 },
    { id: 'golgari-black-green-the-graveyard', label: 'Golgari (Black-Green) — the graveyard', level: 2 },
    { id: 'boros-red-white-aggression', label: 'Boros (Red-White) — aggression', level: 2 },
    { id: 'simic-green-blue-ramp-and-value', label: 'Simic (Green-Blue) — ramp and value', level: 2 },
    { id: 'which-pair-should-you-play', label: 'Which pair should you play', level: 2 },
  ],
  content: `Nobody at a Magic table says "I'm playing white-blue." They say "I'm on Azorius," and everyone instantly knows it's a control deck full of counterspells and board wipes. The ten two-color combinations each have a guild name borrowed from the plane of Ravnica, and those names aren't just flavor — they're shorthand for a whole gameplan. Say "Rakdos" and people picture aggression and removal. Say "Simic" and they picture ramp and durdling. The names carry the strategy.

This is the full tour: all ten color pairs, each guild's identity, what it's genuinely good at, and the kind of deck it pushes you toward across Commander, Standard, and everything in between. If you already know what the five single colors do, every pair below is just two of those personalities crammed together — and the fun is in how they blend. If you're fuzzy on the singles first, our [color pie guide](/blog/magic-the-gathering/mtg-color-pie-explained) breaks down each color before you combine them.

One thing up front: these identities are tendencies, not laws. You *can* build aggressive Azorius or controlling Gruul. But the guilds describe what each pair does *most naturally* and most powerfully, because that's where the two colors' strengths actually overlap.

## Why color pairs have names

The guild names come from the Ravnica sets, where ten guilds each claimed one of the ten two-color combinations and got a mechanical identity to match. The community adopted them as universal shorthand because they're genuinely useful: "Golgari graveyard deck" communicates more in two words than "black-green deck that recurs creatures" does in seven.

Each guild blends two color philosophies into a third thing. Azorius isn't just "white plus blue" — it's specifically white's board control *fused with* blue's countermagic into the archetypal control deck. The blend is more than the sum because the two colors cover each other's holes: blue can't kill a resolved threat, white can, and now the pair can do both.

> The reason the guild names stuck: they let you reason about a deck you've never seen. Tell me a deck is Boros and I already know it's aggressive, goes wide or burns, and probably wants the game over by turn six. The name is a compression algorithm for an entire strategy.

## Allied vs enemy pairs

Before the ten, one piece of geometry that explains a lot. The five colors sit on a pentagon. The two colors next to any color are its **allies**; the two across from it are its **enemies**.

- **Allied pairs** (colors adjacent on the wheel): Azorius (W/U), Dimir (U/B), Rakdos (B/R), Gruul (R/G), Selesnya (G/W). These share goals and blend smoothly.
- **Enemy pairs** (colors opposite on the wheel): Orzhov (W/B), Izzet (U/R), Golgari (B/G), Boros (R/W), Simic (G/U). These combine colors that philosophically *disagree*, which makes them feel sharper and often more powerful in tension.

That's why allied decks tend to feel cohesive and enemy decks feel like they're doing two things at once. Neither is better — enemy pairs were historically underbuilt, so Wizards has spent years giving them strong build-arounds to catch up.

## Azorius (White-Blue) — control

The archetypal control guild. **Azorius** takes white's board wipes and efficient removal and bolts them onto blue's counterspells and card draw, and the result is the deck that says "no" to everything and wins at the end. You counter the threats you can, wrath the ones that slip through, draw more cards than the opponent, and close with something inevitable.

**Strengths:** Counterspells, board wipes, the best card advantage in the game, flexible removal. Azorius answers anything.

**Weaknesses:** It can be slow and reactive, vulnerable to going under (fast aggro) or being out-resourced by a bigger control deck. It often lacks a fast clock of its own.

**Plays like:** Hold up mana, react, grind. In Commander, Azorius is the control-and-taxes shell; in 60-card formats it's classic draw-go control. If patience is a virtue you enjoy, this is your guild.

## Dimir (Blue-Black) — the quiet killer

![Niv-Mizzet, Parun, a blue-red dragon icon — though Dimir trades Izzet's fireworks for blue-black's quiet, controlling kill.](/images/blog/magic-the-gathering/mtg-color-pairs-guide/niv-mizzet-parun.jpg)

**Dimir** is blue's control and card advantage married to black's removal and recursion. Where Azorius answers with counters and wraths, Dimir answers by killing your creatures dead and drawing cards off your misery. It's control with teeth — and it gets the format's best sneaky-win options, from mill to unblockable threats to "I drew my whole deck."

**Strengths:** Premium spot removal *plus* counterspells, the deepest card selection, hand disruption, and recursion. Dimir can interact at every point — before a spell resolves (counter), after (kill), and from the graveyard (recur).

**Weaknesses:** Like most control, it can struggle to actually close, and it has no lifegain to stabilize against fast aggression. It answers everything but sometimes forgets to win.

**Plays like:** Trade one-for-one until you're ahead on cards, then win with an evasive threat or an engine. The thinking player's midrange-control guild.

## Rakdos (Black-Red) — burn it down

![Rakdos, Lord of Riots, the black-red demon whose guild is built on aggression, sacrifice, and removal.](/images/blog/magic-the-gathering/mtg-color-pairs-guide/rakdos-lord-of-riots.jpg)

**Rakdos** is the aggressive removal guild: black's kill spells and sacrifice payoffs welded to red's burn and haste. The plan is brutal and simple — remove anything that blocks, push damage, and finish with reach. Rakdos gets to kill creatures *and* throw damage at faces, which makes it relentless.

**Strengths:** The best combination of removal (black) and direct damage (red) in two colors. Aggressive creatures, sacrifice value, and reach to close games. Very few things survive a Rakdos deck's attention.

**Weaknesses:** Weak card advantage outside of life-payment draw, almost no lifegain, and it can run out of gas if the early aggression stalls. Card-for-card it can lose the long game.

**Plays like:** Apply pressure, clear blockers, burn them out. Rakdos midrange and Rakdos aggro are perennial real decks in Standard and Pioneer because the removal-plus-damage package is so efficient.

## Gruul (Red-Green) — smash

**Gruul** is the beatdown guild, full stop. Green's ramp and enormous creatures plus red's haste and burn equals "play threats ahead of schedule and hit you with them immediately." There's no subtlety here and that's the point — Gruul wants to deploy something huge on turn three and attack on turn four.

**Strengths:** The biggest creatures the fastest, thanks to green ramp accelerating into red haste-enabled threats. Burn for reach and to clear chump blockers. The most raw board presence of any pair.

**Weaknesses:** Almost no card advantage, no real interaction beyond fighting and burning, and it folds to a well-timed board wipe. Gruul has one gear: forward.

**Plays like:** Ramp, drop a fatty, swing, burn the rest. If you want the most straightforward "make big things, hit face" gameplan in two colors, Gruul is it.

## Selesnya (Green-White) — go wide

![Trostani, Selesnya's Voice, a green-white legend whose guild goes wide with tokens and creatures.](/images/blog/magic-the-gathering/mtg-color-pairs-guide/trostani.jpg)

**Selesnya** is the go-wide guild: green's mana and creature size combined with white's efficient small creatures, tokens, and anthem effects. The plan is to build a board the opponent can't profitably block or race, then push it over the top with a buff. Tokens, +1/+1 counters, and lifegain are the toolkit.

**Strengths:** The best go-wide creature strategies, anthem effects that turn a board into lethal, lifegain to survive races, and green's ramp to deploy faster. Resilient and proactive.

**Weaknesses:** Light on interaction — Selesnya answers problems by being bigger, not by removing them — and it's the pair least able to deal with a resolved problematic noncreature permanent. A board wipe hurts more than it does most pairs.

**Plays like:** Flood the board, buff the team, attack. In Commander it's the classic tokens-and-counters guild; in 60-card it's midrange creature decks. The friendliest "fair" strategy in Magic.

## Orzhov (White-Black) — attrition

**Orzhov** is the grindy value guild, the first of the enemy pairs. It fuses white's removal and lifegain with black's removal, drain, and recursion into a deck that trades resources until the opponent has none left, draining life the whole way. Orzhov doesn't race — it outlasts.

**Strengths:** The deepest removal of any pair (both colors do it well), lifegain to neutralize aggression, recursion and aristocrats-style sacrifice value, and life drain as a slow inevitable win. Hard to attack profitably.

**Weaknesses:** It can be slow and grindy to the point of decking itself in a stall, and it lacks card *draw* compared to blue-based pairs (it relies on value and recursion instead). Combo decks that ignore the board can outpace it.

**Plays like:** Kill everything, gain life, drain them out. The classic attrition guild — Orzhov aristocrats and Orzhov midrange are staple archetypes whenever the format supports them.

## Izzet (Blue-Red) — spells matter

**Izzet** is the spellslinger guild: blue's card draw and counters plus red's burn and rituals, built around casting a high density of instants and sorceries and getting paid for it. Izzet decks want to chain spells, trigger "whenever you cast a spell" payoffs, and either burn you out or combo off. It's the most cerebral aggressive guild and the home of most tempo and combo decks.

**Strengths:** The best spells-matter payoffs, card draw plus burn for a flexible plan, counterspells for protection, and access to the most combo pieces of any aggressive pair. High skill ceiling, high reward.

**Weaknesses:** Few good creatures for the cost, no lifegain, and it can fizzle if its spell engine doesn't come together. It's a glass cannon — explosive but fragile.

**Plays like:** Draw cards, cast spells, point burn at problems, win with a payoff or a combo. If you like decks with a lot of decision points and a "draw half my library" turn, Izzet is your guild.

## Golgari (Black-Green) — the graveyard

**Golgari** treats the graveyard as a second hand. Black's recursion and removal plus green's creatures and ramp produces a midrange value engine where your dead creatures keep coming back, your graveyard fuels payoffs, and you grind the opponent into dust one resilient threat at a time. Sacrifice, reanimation, and "return from graveyard" effects are the core.

**Strengths:** The best graveyard recursion and value engines, strong removal, ramp, and resilience to board wipes (your creatures come back). Golgari simply has more total resources than its opponents over a long game.

**Weaknesses:** No counterspells, no real evasion, and it can be slow. Graveyard hate (a single Bojuka Bog or Rest in Peace) hits it harder than any other pair.

**Plays like:** Trade, recur, grind, win on value. Golgari midrange is one of the most consistently playable archetypes in Magic's history because resilient value never goes out of style.

## Boros (Red-White) — aggression

**Boros** is the aggressive go-wide-and-burn guild: white's efficient creatures and token-makers plus red's haste, burn, and combat tricks. It attacks from two angles at once — a wide board of fast creatures backed by burn that can clear blockers or finish the opponent directly. Boros wants the game over early and has the tools to do it.

**Strengths:** The fastest, most resilient aggression of the enemy pairs, equipment and aggressive go-wide synergies, burn for reach, and white's ability to protect the team. Hard to stabilize against.

**Weaknesses:** Historically the weakest card advantage of any pair — both colors struggle to refill — so a Boros deck that stalls is in trouble. It lives and dies on the early game.

**Plays like:** Curve out, swing, burn for the last points. Boros aggro and Boros equipment decks are recurring real decks; the guild's whole identity is "be faster than your problems."

## Simic (Green-Blue) — ramp and value

![Prime Speaker Vannifar, a green-blue Simic legend embodying ramp-into-value and creature-toolbox strategies.](/images/blog/magic-the-gathering/mtg-color-pairs-guide/prime-speaker-vannifar.jpg)

**Simic** is the ramp-and-card-advantage guild: green's mana acceleration and big creatures plus blue's card draw and counters. The plan is to out-resource everyone — ramp into expensive payoffs while drawing extra cards, then win with raw card and mana advantage. Simic is the most "do my own thing" guild, sometimes to a fault. (Yes, it's the one people call a durdle guild — but a tuned Simic deck out-values the entire table.)

**Strengths:** The best ramp-into-card-advantage shell, +1/+1 counter synergies, big mana into big payoffs, and blue's counters to protect the plan. Goes the longest and biggest of any pair.

**Weaknesses:** Light on removal and interaction — Simic answers problems by getting ahead, not by killing things — and it can durdle without a clear win condition. It needs a payoff or it just makes a lot of mana and loses.

**Plays like:** Ramp, draw, deploy a huge threat, protect it. In Commander Simic is the ramp-value guild; in 60-card it's ramp and tempo decks. The guild for players who want to play the biggest, greediest game at the table.

## Which pair should you play

Match the guild to how you actually like to win, not to which crest looks coolest:

- **Win by saying no and grinding them out?** Azorius or Dimir control.
- **Win by killing everything and draining them?** Orzhov or Rakdos.
- **Win by attacking fast?** Boros or Gruul beatdown.
- **Win by flooding the board?** Selesnya tokens.
- **Win on card and mana advantage?** Simic or Golgari value.
- **Win by casting a pile of spells or comboing off?** Izzet.

The deeper move: pick the pair whose *weakness* you can live with. Every guild is missing something — Selesnya can't interact, Gruul can't draw, Izzet has no creatures or lifegain. The pair you'll enjoy is the one whose hole doesn't bother you. Once you've picked, our [deck archetypes guide](/blog/magic-the-gathering/mtg-deck-archetypes-explained) maps these identities onto aggro, midrange, control, and combo, and the [color pie guide](/blog/magic-the-gathering/mtg-color-pie-explained) explains the single colors underneath every pair. When you're ready to build, the [how to build a Commander deck](/blog/magic-the-gathering/how-to-build-a-commander-deck) walkthrough takes a two-color identity to a finished 100.`,
  faq: [
    {
      question: 'What are the ten MTG guild names?',
      answer:
        'The ten two-color guilds are Azorius (white-blue), Dimir (blue-black), Rakdos (black-red), Gruul (red-green), Selesnya (green-white), Orzhov (white-black), Izzet (blue-red), Golgari (black-green), Boros (red-white), and Simic (green-blue). The names come from the plane of Ravnica and have become universal shorthand for each color pair, because each guild carries a recognizable strategic identity — say "Rakdos" and players picture aggressive removal, say "Simic" and they picture ramp and value.',
    },
    {
      question: 'What is the difference between allied and enemy color pairs?',
      answer:
        'The five colors sit on a pentagon. The two colors adjacent to any color are its allies, and the two across from it are its enemies. The allied guilds are Azorius, Dimir, Rakdos, Gruul, and Selesnya — these share philosophies and blend smoothly. The enemy guilds are Orzhov, Izzet, Golgari, Boros, and Simic — these combine colors that disagree, which makes them feel sharper and more powerful in tension. Neither group is inherently better; both produce strong decks.',
    },
    {
      question: 'Which two-color pair is best for beginners?',
      answer:
        "Boros (red-white) and Gruul (red-green) are the friendliest for new players because their gameplan is straightforward: deploy creatures and attack. Selesnya (green-white) is another great starter — go wide with creatures and buff them. Azorius and Dimir control are the hardest to pilot well because they're reactive and demand reading the whole table. Pick the pair that matches how you want to win, and lean toward proactive guilds while you're learning.",
    },
    {
      question: 'What is the best two-color guild in Commander?',
      answer:
        "There's no single best — it depends on your playstyle and your commander — but a few guilds are perennially strong in EDH. Golgari and Simic excel at value and resilience, Orzhov is the premier attrition guild, and Azorius is the control benchmark. Each guild has top-tier commanders and clear gameplans. The right pick is the one whose strengths match how you like to win and whose weakness you can comfortably live with.",
    },
    {
      question: 'Why does Magic use guild names instead of just the colors?',
      answer:
        "Because the guild names carry strategic meaning the raw colors don't. Saying \"Golgari graveyard deck\" communicates a whole archetype in two words, while \"black-green\" only tells you the colors. The names come from the Ravnica sets, where ten guilds each claimed a color pair and a mechanical identity, and the community adopted them as shorthand. They let players reason about a deck's gameplan from the name alone.",
    },
    {
      question: 'Can I build a guild deck that ignores its usual identity?',
      answer:
        'Yes. The guild identities describe what each pair does most naturally and powerfully, not a hard rule. You can build aggressive Azorius or controlling Gruul if you want, but you\'ll be fighting against where the two colors\' strengths actually overlap. The identities exist because that overlap is where each pair is strongest, so most successful decks lean into their guild rather than against it.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/mtg-color-pie-explained', anchor: 'The MTG color pie explained' },
    { href: '/blog/magic-the-gathering/mtg-deck-archetypes-explained', anchor: 'MTG deck archetypes explained' },
    { href: '/blog/magic-the-gathering/how-to-build-a-commander-deck', anchor: 'How to build a Commander deck' },
    { href: '/blog/magic-the-gathering/best-commanders-for-beginners-mtg', anchor: 'Best commanders for beginners' },
  ],
  externalSources: [
    {
      url: 'https://mtg.fandom.com/wiki/Guild',
      title: 'MTG Wiki — the ten Ravnica guilds and their identities',
    },
    {
      url: 'https://magic.wizards.com/en/news/making-magic/mechanical-color-pie-2021-2021-08-16',
      title: 'Wizards of the Coast — Mark Rosewater on the mechanical color pie',
    },
    {
      url: 'https://scryfall.com/docs/syntax',
      title: 'Scryfall — searching cards by color identity',
    },
  ],
  tldr:
    "Magic's ten two-color pairs each have a Ravnica guild name that doubles as a strategy: Azorius (W/U) is control, Dimir (U/B) is controlling removal and sneaky wins, Rakdos (B/R) is aggressive removal and burn, Gruul (R/G) is big-creature beatdown, Selesnya (G/W) goes wide with tokens, Orzhov (W/B) grinds attrition and drain, Izzet (U/R) is spells-matter and combo, Golgari (B/G) is graveyard value, Boros (R/W) is fast aggression, and Simic (G/U) is ramp into card advantage. Allied pairs blend smoothly; enemy pairs feel sharper. Pick the guild whose gameplan you enjoy and whose weakness you can live with.",
  itemList: {
    name: 'The Ten MTG Two-Color Guilds',
    items: [
      { name: 'Azorius (White-Blue)', description: 'Control: counterspells, board wipes, and card advantage. Says no and grinds you out.' },
      { name: 'Dimir (Blue-Black)', description: 'Controlling removal plus card advantage, hand disruption, and sneaky wins.' },
      { name: 'Rakdos (Black-Red)', description: 'Aggressive removal and burn. Clears blockers and pushes damage relentlessly.' },
      { name: 'Gruul (Red-Green)', description: 'Beatdown: ramp into huge creatures with haste, then swing. The pure smash guild.' },
      { name: 'Selesnya (Green-White)', description: 'Go wide with efficient creatures, tokens, and anthems. Buffs the team over the top.' },
      { name: 'Orzhov (White-Black)', description: 'Attrition: deep removal, lifegain, drain, and recursion. Outlasts everything.' },
      { name: 'Izzet (Blue-Red)', description: 'Spells matter: card draw, burn, counters, and combo. Cerebral and explosive.' },
      { name: 'Golgari (Black-Green)', description: 'Graveyard value: recursion, removal, and ramp. Grinds opponents out on resources.' },
      { name: 'Boros (Red-White)', description: 'Aggression: go wide and burn from two angles. Wants the game over early.' },
      { name: 'Simic (Green-Blue)', description: 'Ramp and card advantage: big mana into big payoffs, protected by counters.' },
    ],
  },
};
