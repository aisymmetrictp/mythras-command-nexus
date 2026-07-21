import type { BlogPost } from '../../blogTypes';

export const witcher3GwentGuide: BlogPost = {
  slug: 'witcher-3-gwent-guide',
  game: 'the-witcher-3',
  category: 'game-guides',
  topicCluster: 'witcher3-guides',
  tags: ['gwent', 'card-game', 'factions', 'strategy', 'minigame'],
  title: 'The Witcher 3 Gwent Guide: How to Actually Win',
  metaDescription:
    'A Witcher 3 Gwent guide that teaches you to win: the round economy, all five factions ranked, the spy-decoy-medic engine, weather, Scorch, and which cards to chase.',
  excerpt:
    'Gwent is not a coin-flip and the AI is not cheating. You are losing because you dump your whole hand into round one, chase strength instead of card advantage, and never learned what a spy actually does. Here is the fix.',
  featuredImagePrompt:
    'A close-up of the Geralt of Rivia Gwent card laid on a wooden tavern table beside a stack of coins, candlelight, other cards fanned out in the background',
  heroImage: '/images/blog/the-witcher-3/witcher-3-gwent-guide/geralt-gwent-card.webp',
  heroImageAlt: 'The Geralt of Rivia hero card artwork from Gwent in The Witcher 3: Wild Hunt.',
  imageSources: [
    {
      src: '/images/blog/the-witcher-3/witcher-3-gwent-guide/geralt-gwent-card.webp',
      sourceUrl: 'https://witcher.fandom.com/wiki/Geralt_of_Rivia_(gwent_card)',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/the-witcher-3/witcher-3-gwent-guide/scorch-card.webp',
      sourceUrl: 'https://witcher.fandom.com/wiki/Scorch_(gwent_card)',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/the-witcher-3/witcher-3-gwent-guide/decoy-card.webp',
      sourceUrl: 'https://witcher.fandom.com/wiki/Decoy_(gwent_card)',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/the-witcher-3/witcher-3-gwent-guide/ciri-gwent-card.webp',
      sourceUrl: 'https://witcher.fandom.com/wiki/Cirilla_Fiona_Elen_Riannon_(gwent_card)',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-21T00:00:00.000Z',
  lastUpdated: '2026-07-21T00:00:00.000Z',
  primaryKeyword: 'witcher 3 gwent guide',
  secondaryKeywords: [
    'witcher 3 gwent how to win',
    'witcher 3 gwent factions',
    'witcher 3 best gwent deck',
    'witcher 3 gwent spy cards',
    'witcher 3 gwent rules',
    'witcher 3 gwent best cards',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'how-a-gwent-match-is-actually-won', label: 'How a Gwent match is actually won', level: 2 },
    { id: 'the-rule-that-wins-games-never-overspend', label: 'The rule that wins games: never overspend', level: 2 },
    { id: 'the-five-factions-ranked-for-a-new-player', label: 'The five factions, ranked for a new player', level: 2 },
    { id: 'cards-heroes-and-weather', label: 'Cards, heroes, and weather', level: 2 },
    { id: 'the-special-cards-that-swing-matches', label: 'The special cards that swing matches', level: 2 },
    { id: 'the-spy-decoy-medic-engine', label: 'The spy-decoy-medic engine', level: 2 },
    { id: 'where-to-get-the-cards-that-matter', label: 'Where to get the cards that matter', level: 2 },
    { id: 'mistakes-that-lose-winnable-matches', label: 'Mistakes that lose winnable matches', level: 2 },
    { id: 'quick-gwent-checklist', label: 'Quick Gwent checklist', level: 2 },
  ],
  content: `Gwent is the best game hiding inside another game since the assassin puzzles in Assassin's Creed, except Gwent is actually good. It is a tight little card game about bluffing and patience, and CD Projekt Red buried it in taverns across three regions where most players ignore it until an old man in Velen takes their coin and their pride in the same afternoon.

Here is the thing nobody tells you: the AI is not cheating. When Gwent feels like a coin-flip, it is because you are playing it like War, slamming your biggest numbers down and hoping. It is not a game about big numbers. It is a game about spending fewer cards than your opponent to win the same rounds. Once that clicks, you stop losing to innkeepers and start farming them. If Geralt himself is still dying to drowners on the road between matches, that is a separate problem, and our [Witcher 3 beginner guide](/blog/the-witcher-3/witcher-3-beginner-guide) covers it. This one is about the cards.

## How a Gwent match is actually won

The rules take two minutes and then never change. Both players build a deck, draw 10 cards to open, and may mulligan up to two of them once before the match begins. That opening hand is most of what you get. This is the single most important fact in Gwent and the one new players never internalise: you do not draw a fresh hand every round.

A match is best of three rounds. Each round, players take turns placing one card at a time, and each card has a Strength value that adds to your total. When you have nothing left you want to commit, you pass. When both players have passed, whoever has the higher total Strength wins the round. Win two rounds and you win the match.

You start each match with two gems. Lose a round, lose a gem. Lose both and you are done. A tied round costs both players a gem, which is why ties can decide matches. The coin toss at the start of round one decides who plays first, and that is the only thing the coin toss decides.

That is the whole game. The depth is entirely in one word: pass.

## The rule that wins games: never overspend

Because your 10-card hand has to last all three rounds, every card you play is a card you no longer have. The winner of a Gwent match is almost never the player with the strongest cards. It is the player who wins two rounds while spending the fewest cards doing it.

This creates the core play pattern, and it is the thing to burn into your brain:

- **Round one is a bluff.** If your opponent commits hard, let them. Pass early and lose round one on purpose if it only cost you a few weak cards. You just baited them into spending five or six cards to win one round while you spent two.
- **Round two, punish them.** Now they are low on cards and you are not. Win round two comfortably.
- **Round three is a card-count fight.** Whoever has more cards left usually wins. You engineered that in round one.

That deliberate round-one sacrifice is called a "two-one," and it is how you beat opponents whose decks are stronger than yours. Do not chase a round you are losing by throwing good cards after bad. If you cannot win a round cheaply, throw it cheaply. The math of the whole game is: cards in hand beats Strength on board.

## The five factions, ranked for a new player

Every deck belongs to one faction, and each faction has one passive ability that is always on. Four ship in the base game. Skellige was added by the Blood and Wine expansion.

- **Northern Realms** — draw a card every time you win a round. This is the best faction for a new player, full stop. Winning a round is already good; getting paid a card for it makes the card-economy game lopsided in your favour, and it papers over a lot of bad decisions.
- **Monsters** — one random unit stays on your board after each round ends. It is a low-skill, high-floor faction: that leftover unit gives you a head start every round, which is quietly excellent, and its Muster cards make it fast to build.
- **Nilfgaardian Empire** — wins any round that ends in a tie. This is the thinking player's faction, built on spies, medics and decoys. It is the most powerful deck in the game in the right hands and the least forgiving in the wrong ones. Deliberately tying a round for free is filthy once you learn it.
- **Scoia'tael** — you choose who goes first in round one instead of the coin toss. Tempo control that only matters once you understand tempo. Skip it early.
- **Skellige** — at the start of round three, two random units return from your graveyard to your board. Strong, but Blood and Wine only, and it wants you to lose cards to the graveyard first, which is an advanced plan.

Build Northern Realms first. It forgives everything, and by the time you have outgrown it you will understand the game well enough to appreciate what Nilfgaard is doing. None of this touches Geralt's actual character sheet, by the way, so you never spend a real skill point on Gwent, that all lives in the [Witcher 3 build guide](/blog/the-witcher-3/witcher-3-build-guide) instead.

![The Ciri hero card artwork from Gwent in The Witcher 3.](/images/blog/the-witcher-3/witcher-3-gwent-guide/ciri-gwent-card.webp)

## Cards, heroes, and weather

Units go in one of three rows that match their icon: close combat (melee), ranged, and siege. The row matters because of weather, which we will get to.

**Hero cards** are the exception to almost everything. A hero is immune to weather, immune to Scorch, and immune to being messed with by any special ability. Geralt of Rivia is a 15-Strength hero. Ciri is a 15-Strength hero. Yennefer is a hero that also heals. Because nothing can touch them, heroes are the safest Strength in your deck, but there are only a handful, so you cannot build around raw hero power alone.

**Weather cards** are the great equaliser and the reason the row system exists. There are three, and each hammers one row for both players at once:

- **Biting Frost** drops every close-combat unit to 1 Strength.
- **Impenetrable Fog** does the same to every ranged unit.
- **Torrential Rain** does it to every siege unit.

Weather does not care whose side the units are on, so it wrecks your board too if you stacked one row. **Clear Weather** removes all active weather. Heroes ignore weather entirely, which is a big part of why they are worth their slots. The practical takeaway: spread your units across rows so a single Frost card cannot delete half your board, and always carry a Clear Weather.

## The special cards that swing matches

Special cards do not add Strength on their own; they change the board. These are the ones that decide matches:

- **Commander's Horn** doubles the Strength of every unit in one row. One per row. Drop it on a stacked row and your total leaps.
- **Scorch** destroys the highest-Strength unit or units on the entire board, both sides included. It is a punish button for anyone who overcommitted a fat non-hero unit. Bait their big card out, then Scorch it.
- **Decoy** swaps with a unit already on your side and returns that unit to your hand. That sounds minor. It is one of the strongest cards in the game, and we will get to why in a second.
- **Mardroeme, Biting Frost, and the horn** on your opponent's stacked row are all forms of the same idea: change the board more than a single unit could.

![The Scorch card artwork from Gwent in The Witcher 3.](/images/blog/the-witcher-3/witcher-3-gwent-guide/scorch-card.webp)

Then there are unit abilities printed on the cards themselves:

- **Spy** — placed on your *opponent's* board, so its Strength counts for them, but you draw two cards from your deck. In a game about card economy, drawing two for one is absurd.
- **Medic** — revive a non-hero, non-special unit from your graveyard and play it immediately. Chain medics and you can raise a small army from the dead.
- **Muster** — instantly pulls every copy of the same-named card from your deck onto the board. Nekkers and Arachas turn one card into three.
- **Tight Bond** — place two or more cards with the same name in the same row and they multiply each other's Strength. Two 6-Strength cards become two 12s.
- **Morale Boost** — adds 1 Strength to every other unit in its row. Small, until you have a full row.

## The spy-decoy-medic engine

This is the combo that turns Gwent from "sometimes I win" into "I don't lose." It is the reason Nilfgaard is the scariest faction, but the pieces are neutral and Northern Realms runs it beautifully too.

A spy hands the opponent some Strength but draws you two cards. That is already a good trade. Now add a Decoy. You play your spy, draw your two cards, then next turn play the Decoy onto that same spy, pulling it back into your hand so you can play it *again* for another two-card draw. One spy, one Decoy, four cards drawn, and the spy ends up back on your side of the table where its Strength finally helps you.

![The Decoy card artwork from Gwent in The Witcher 3.](/images/blog/the-witcher-3/witcher-3-gwent-guide/decoy-card.webp)

Then add a Medic. Once a spy has gone to the graveyard, a Medic resurrects it for yet another draw. Stack a couple of spies, a Decoy or two, and a Medic, and you can out-card any deck in the game by a mile while your opponent wonders why they ran dry in round two. This is the entire endgame of high-level base-game Gwent: draw more cards than a human deck is supposed to have, then win the last round with the surplus. Villentretenmerth, a neutral dragon hero that Scorches the strongest melee unit, is a nasty finisher to bolt on top once your card lead is set.

## Where to get the cards that matter

You build this deck by playing everyone. Two habits do most of the work.

First, buy every card from every innkeeper and merchant you pass. Most vendors sell a small pool of cards, and some strong ones become permanently unavailable once a quest moves the world forward, so buy early and buy often. The same point about hoovering up cards from innkeepers shows up in the [Witcher 3 beginner guide](/blog/the-witcher-3/witcher-3-beginner-guide) for a reason: missing cards you can no longer buy is the one truly irreversible Gwent mistake.

Second, beat the named players. The map is full of them, flagged by the little Gwent-card icon, and the Gwent-focused side quests string them together. Beating certain opponents hands you specific cards you cannot buy anywhere. Beating Thaler, for instance, awards the Geralt of Rivia hero card. The "High Stakes" tournament in Novigrad is the big one: winning it is how you collect the four faction leader cards, including Emhyr: The Relentless and Eredin: Bringer of Death. Conveniently, the same scavenger-hunt detours that drop you next to [witcher gear diagrams](/blog/the-witcher-3/witcher-3-witcher-gear-guide) also route you past half the Gwent players in Velen, so you are rarely going out of your way.

Prioritise, in order: every spy you can find, a Decoy or two, a Medic or two, Commander's Horn, Scorch, and Clear Weather. Those special cards win more matches than any 15-Strength unit.

## Mistakes that lose winnable matches

- **Dumping your hand in round one.** The cardinal sin. If you win round one but empty your hand doing it, you will lose the match. Win rounds cheaply or throw them cheaply.
- **Chasing a lost round.** Once you cannot win a round without overspending, pass and save the cards. Losing a round on purpose is a real strategy, not a failure.
- **Stacking one row.** A single weather card wipes a stacked row for both players, so a board built entirely of melee units is one Biting Frost away from disaster.
- **Playing spies for their Strength.** A spy goes on the opponent's side. You play it for the draw, not the number. New players avoid spies because "it helps the enemy," and that instinct is exactly backwards.
- **Ignoring the mulligan.** You can swap up to two opening cards. Ditch dead weather you cannot use or a Decoy with nothing to copy, and dig for a spy.
- **Not buying cards.** Every match you skip is cards you may never get. This is not a system you spend points on like [Geralt's mutations and abilities](/blog/the-witcher-3/witcher-3-build-guide); it is pure collection, and the collection is finite.

## Quick Gwent checklist

- Draw 10, mulligan up to two, and remember that hand lasts all three rounds.
- Play a "two-one": bleed cards in round one only if it is cheap, then win rounds two and three with the card lead.
- Whoever ends with more cards usually wins round three. Engineer that early.
- Build Northern Realms first for the free card on every round win.
- Spread units across rows and always pack a Clear Weather.
- Run spies for the two-card draw, not their Strength, and recycle them with Decoy and Medic.
- Save Scorch to punish an overcommitted big unit; save Commander's Horn for a stacked row.
- Buy every card from every merchant, because some vanish for good, and beat named players for cards you cannot buy.`,
  faq: [
    {
      question: 'How do you win at Gwent in The Witcher 3?',
      answer:
        'Win two of three rounds while spending fewer cards than your opponent. Your 10-card opening hand has to last the whole match, so the winner is usually the player with cards left over, not the biggest numbers. The core tactic is the "two-one": let your opponent overspend to win round one cheaply for you, then win rounds two and three with your card advantage.',
    },
    {
      question: 'What is the best Gwent faction in The Witcher 3?',
      answer:
        'For a new player, Northern Realms, because its ability draws you a free card every time you win a round, which snowballs the card-economy game in your favour. Nilfgaardian Empire is the strongest faction in expert hands thanks to spies, decoys and its tie-wins-the-round ability, but it is far less forgiving. Monsters is a strong, simple pick because a random unit stays on your board each round.',
    },
    {
      question: 'How do spy cards work in Gwent?',
      answer:
        'A spy is played on your opponent\'s side of the board, so its Strength counts toward their total, but in exchange you draw two cards from your deck. In a game decided by card economy, drawing two cards for one is one of the best trades available. You then recycle spies with Decoy (return it to hand) and Medic (revive it from the graveyard) to draw even more.',
    },
    {
      question: 'Do you draw new cards each round in Witcher 3 Gwent?',
      answer:
        'No. In the base Witcher 3, you draw your 10-card hand at the start of the match and that is essentially all you get. You do not refill between rounds. The only ways to gain cards mid-match are the Northern Realms faction ability, spy cards, and Medic revivals. This is why overspending in round one loses matches.',
    },
    {
      question: 'How does weather work in Gwent?',
      answer:
        'Weather cards reduce every unit in one row to 1 Strength for both players at once. Biting Frost hits close combat, Impenetrable Fog hits ranged, and Torrential Rain hits siege. Clear Weather removes all active weather. Hero cards are immune to weather, which is part of why they are valuable. Spread your units across rows so a single weather card cannot wipe half your board.',
    },
    {
      question: 'What does the Decoy card do in Gwent?',
      answer:
        'Decoy swaps with a unit already on your side and returns that unit to your hand. Its main use is recycling powerful abilities: play a spy for its two-card draw, then Decoy it back to your hand to play it again. It can also rescue a unit before Scorch destroys it, or pull back a medic or muster card to reuse.',
    },
    {
      question: 'Where do you get the best Gwent cards in The Witcher 3?',
      answer:
        'Buy cards from innkeepers and merchants constantly, because some become permanently unavailable as quests progress. Beat named players marked with a Gwent icon for cards you cannot buy: defeating Thaler awards the Geralt of Rivia hero card, for example. Winning the "High Stakes" tournament in Novigrad is how you collect the four faction leader cards.',
    },
    {
      question: 'Should I play Gwent on higher difficulties?',
      answer:
        'Gwent plays identically at every game difficulty. The card AI does not scale with your combat difficulty setting and it does not cheat, so you can master Gwent on any save. If Gwent feels unfair, it is a deckbuilding or overspending problem, not a difficulty one.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/the-witcher-3', anchor: 'The Witcher 3 coverage hub' },
    { href: '/blog/the-witcher-3/witcher-3-beginner-guide', anchor: 'Witcher 3 beginner guide' },
    { href: '/blog/the-witcher-3/witcher-3-build-guide', anchor: 'Witcher 3 build guide' },
    { href: '/blog/the-witcher-3/witcher-3-witcher-gear-guide', anchor: 'Witcher 3 witcher gear guide' },
  ],
  externalSources: [
    {
      url: 'https://witcher.fandom.com/wiki/Gwent',
      title: 'Witcher Wiki — Gwent rules, rounds and faction abilities',
    },
    {
      url: 'https://witcher.fandom.com/wiki/Gwent_special_cards',
      title: 'Witcher Wiki — special cards: Scorch, Decoy, Commander\'s Horn, weather',
    },
    {
      url: 'https://witcher.fandom.com/wiki/Gwent_spy_cards',
      title: 'Witcher Wiki — spy cards and the draw-two mechanic',
    },
  ],
  tldr:
    'Gwent is a game of card economy, not raw Strength. You draw 10 cards to open and they must last all three rounds, so win two of three rounds while spending fewer cards than your opponent. Play a "two-one": sacrifice round one cheaply, then win with your card lead. Build Northern Realms first for a free card on every round win, run spies with Decoy and Medic to out-draw any deck, spread units across rows to dodge weather, and buy cards from every merchant before quests lock them away.',
};
