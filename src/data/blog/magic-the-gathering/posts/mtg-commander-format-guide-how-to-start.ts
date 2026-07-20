import type { BlogPost } from '../../blogTypes';

export const mtgCommanderFormatGuideHowToStart: BlogPost = {
  slug: 'mtg-commander-format-guide-how-to-start',
  game: 'magic-the-gathering',
  category: 'format-guides',
  topicCluster: 'commander-format',

  title: 'MTG Commander Format Guide — How to Start Playing EDH (2026)',
  metaDescription:
    'New to MTG Commander? Here are the deckbuilding rules, color identity, life total, command zone, commander damage, Rule 0, and the best first commanders to start with in 2026.',
  excerpt:
    'Commander is the most-played MTG format on the planet and the easiest one for new players to start in. The rules look intimidating on paper. They are not. Here is the full beginner guide.',
  featuredImagePrompt:
    'A long table at a local game store, four players in mid-game of Magic: The Gathering Commander, glowing 40-life counters floating beside each seat, an iconic legendary creature card (The Ur-Dragon or Atraxa) standing in the command zone, painterly fantasy art style, warm tavern lighting',
  heroImage: '/images/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start/atraxa-praetors-voice.jpg',
  heroImageAlt: "Atraxa, Praetors' Voice, a four-color Phyrexian angel and one of the most popular Commander legends in MTG.",
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start/atraxa-praetors-voice.jpg',
      sourceUrl: 'https://scryfall.com/card/2xm/190/atraxa-praetors-voice',
      license: 'WotC Fan Content Policy / Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start/krenko-mob-boss.jpg',
      sourceUrl: 'https://scryfall.com/card/fdn/204/krenko-mob-boss',
      license: 'WotC Fan Content Policy / Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start/the-ur-dragon.jpg',
      sourceUrl: 'https://scryfall.com/card/cmm/361/the-ur-dragon',
      license: 'WotC Fan Content Policy / Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start/sol-ring.jpg',
      sourceUrl: 'https://scryfall.com/card/soc/128/sol-ring',
      license: 'WotC Fan Content Policy / Scryfall',
    },
  ],

  publishDate: '2026-05-27T00:00:00.000Z',
  lastUpdated: '2026-05-27T00:00:00.000Z',

  primaryKeyword: 'mtg commander format guide',
  secondaryKeywords: [
    'what is commander mtg',
    'mtg edh format',
    'how to play commander mtg',
    'commander format rules',
    'mtg commander beginner guide',
    'commander deck building rules',
    'commander vs edh',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'evergreen',
  evergreen: true,
  readingTimeMin: 11,

  toc: [
    { id: 'what-is-commander-in-mtg', label: 'What is Commander in MTG', level: 2 },
    { id: 'the-core-deckbuilding-rules', label: 'The core deckbuilding rules', level: 2 },
    { id: 'color-identity-explained', label: 'Color identity explained', level: 2 },
    { id: 'how-the-game-actually-plays', label: 'How the game actually plays', level: 2 },
    { id: 'how-to-pick-your-first-commander', label: 'How to pick your first commander', level: 2 },
    { id: 'three-good-first-deck-archetypes-for-new-players', label: 'Three good first deck archetypes for new players', level: 2 },
    { id: 'commander-etiquette-and-rule-0-conversations', label: 'Commander etiquette and Rule 0 conversations', level: 2 },
    { id: 'where-to-play-commander-in-2026', label: 'Where to play Commander in 2026', level: 2 },
    { id: 'common-new-player-mistakes', label: 'Common new-player mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Commander is the most-played MTG format on the planet, and it is also the easiest one for new players to start in. The rules look intimidating on paper. They are not.

You build one deck. You sit down with three other people. You take turns killing each other with a giant legendary creature you actually like. That is the whole game.

This guide walks through every rule that matters, how to pick a commander you will not hate in three weeks, and the etiquette that makes the difference between a fun pod and an early Uber home.

## What is Commander in MTG

Commander is a 100-card singleton multiplayer format built around a single legendary creature. That creature is your commander. It sits in a special zone called the command zone before the game starts, and you can cast it from there at any point you have the mana.

The format is multiplayer by default, almost always played as a four-player free-for-all, sometimes three. Two-player Commander exists but it warps how the format works because political plays disappear. The whole social texture of the game assumes a pod.

The format started in the 1990s as EDH (Elder Dragon Highlander), invented by a group of judges who wanted a casual format that used the original five Elder Dragons as commanders. It spread by word of mouth, got formally adopted by Wizards in the late 2000s, and is now governed by the Commander Format Panel (renamed from the Commander Rules Committee in late 2024). The Panel maintains the rules and the banned list. Wizards prints the cards.

If you have ever heard someone use "Commander" and "EDH" in the same sentence and wondered which is correct, the answer is both. They mean the same format.

## The core deckbuilding rules

There are exactly five rules you have to internalize.

- **100 cards exactly.** Not 99, not 101. The commander counts as one of those 100.
- **Singleton.** One copy of every card. The only exception is basic lands, where you can run as many Mountains or Islands as you want.
- **Color identity.** Your deck can only contain cards whose mana symbols match your commander's color identity. More on this in a second because it trips up everyone.
- **40 starting life.** Double the usual 20. Games last longer and big swings hit harder.
- **Banned list.** Maintained by the Commander Format Panel. Cards like the original Mox Sapphire and Black Lotus are banned. Demonic Tutor is legal in Commander even though it is banned in Modern and Legacy. Sheoldred, the Apocalypse is legal in Commander but warps Standard so hard it eats banlist conversations there.

The singleton rule is the single biggest mental shift from formats like Standard. You cannot run four copies of your best removal spell. You have to build redundancy through similar effects.

## Color identity explained

![Atraxa, Praetors' Voice, a 1WUBG legendary angel whose four-color identity locks her deck out of red cards.](/images/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start/atraxa-praetors-voice.jpg)

This is the rule that confuses every new player, so read this section twice.

Your commander has a color identity made up of every mana symbol that appears on the card, including in the casting cost AND the rules text. Atraxa, Praetors' Voice costs 1WUBG, so her color identity is white-blue-black-green (WUBG, sometimes called four-color or "no red"). Every card in your Atraxa deck must only contain mana symbols within that WUBG set.

A red card cannot go in an Atraxa deck. Period.

If you want to play a five-color deck, you need a commander with five-color identity. Niv-Mizzet Reborn and The Ur-Dragon are the two most popular. Hybrid mana counts as both colors, so a card with a blue/red hybrid symbol cannot go in a mono-blue deck.

Basic lands are also color-restricted. A Mountain has an implied red mana symbol, so it cannot go in an Atraxa deck.

The easiest way to check legality is to paste your decklist into [Scryfall](https://scryfall.com/) or [EDHREC](https://edhrec.com/) and let the site flag your color identity violations.

## How the game actually plays

You start at 40 life with seven cards. The [London mulligan](/blog/magic-the-gathering/mtg-mulligan-guide-london-mulligan) applies: you can mulligan freely, drawing a fresh seven each time, but for every mulligan you take, you put that many cards from your final hand on the bottom of your library. Your first mulligan is "free" in most pods (you still draw seven again without putting anything on the bottom), which is a community courtesy more than an official rule, so confirm your table is using it before you rely on it.

Once the game starts, turn order goes clockwise. There is no formal "active player gets first attack" priority weirdness beyond standard MTG rules.

Two Commander-specific mechanics matter constantly:

**The command zone.** Your commander starts there. If it gets destroyed, exiled, or sent to your hand or library, you can choose to send it back to the command zone instead. Each time you recast your commander from the command zone, it costs an additional 2 generic mana per previous cast. Cast it three times and it costs the original mana value plus 4. This is called the "commander tax."

**Commander damage.** If a single commander deals 21 or more combat damage to you across the entire game, you lose immediately, regardless of your life total. This is why a 7/7 unblockable commander is terrifying. Three swings and you are dead even at 40 life.

Other ways to lose: drop to 0 or fewer life, try to draw from an empty library, or get hit by an alt-win like Approach of the Second Sun resolving twice.

## How to pick your first commander

![Krenko, Mob Boss, a mono-red goblin legend that taps to make goblin tokens equal to the number you control.](/images/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start/krenko-mob-boss.jpg)

Pick by playstyle, not by power level. The most common new-player mistake is picking the strongest commander on EDHREC, building a janky version of a cEDH deck, and then losing 14 games in a row.

Mono-color decks have the simplest mana base. You play one type of basic land, you never get color-screwed, you have time to think about the actual game. Two-color decks are the sweet spot for most new players: enough flexibility to cover weaknesses, easy enough to fix mana with cheap dual lands. Three-color decks demand a real fetchland or shockland investment to function. Four and five-color decks are technically harder to pilot because every turn you need to ask "do I have the right colors?"

Five solid starter commanders:

- **Krenko, Mob Boss.** Mono-red goblins. Tap him, make goblins equal to the number you control. Aggressive, simple, hilarious.
- **Talrand, Sky Summoner.** Mono-blue spellslinger. Every instant or sorcery makes a 2/2 flying Drake. Card draw is built into the strategy.
- **Edgar Markov.** Mardu (white-black-red) vampires. Eminence ability makes a vampire token whenever you cast another vampire, even from the command zone. The most-played commander on EDHREC for years running.
- **Atraxa, Praetors' Voice.** 4-color superfriends or +1/+1 counters. Iconic but complex. Save this one for your second deck if you have never built EDH before.
- **Yarok, the Desecrated.** Sultai (blue-black-green) ETB engine. Every "when this creature enters the battlefield" trigger happens twice. Plug it into any creature-heavy precon and watch value explode.

## Three good first deck archetypes for new players

![The Ur-Dragon, a five-color legendary dragon with eminence cost reduction, the go-to commander for a Dragons tribal deck.](/images/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start/the-ur-dragon.jpg)

**Tribal.** Pick a creature type. Build a deck where every creature is that type and where you run cards that reward you for playing that type. Goblins, Elves, Dragons, Slivers, Merfolk, Vampires, Zombies. All of them have deep card pools and proven shells. Tribal decks are forgiving because the synergies are obvious and the lord effects (cards that pump every creature of a type) carry games. Try Krenko for Goblins or The Ur-Dragon for Dragons.

**Spellslinger.** Instants and sorceries matter. You run a low creature count and lean on cantrips, burn, and counterspells, then reward yourself with payoffs like Talrand or Veyran, Voice of Duality. Most spellslinger commanders sit in Izzet (blue-red) colors. The gameplan plays itself if you build the manabase right.

**Voltron.** You suit up your commander with equipment and auras until it becomes a one-card win condition through commander damage. Uril the Miststalker, Sram Senior Edificer, and Light-Paws Emperor's Voice are the cleanest builds. Voltron is easy to pilot but suffers when the table has lots of removal, so come ready with protection spells.

## Commander etiquette and Rule 0 conversations

Rule 0 is the pre-game conversation where the pod agrees on what kind of game they want to play. It is not optional. Skipping it is how friendships die.

A standard Rule 0 hits four questions:

- What are you playing? (Commander name, archetype.)
- What is your power level on a 1-10 scale?
- Any infinite combos or two-card wins?
- Any salty cards in your deck the table should know about? (Stax pieces, mass land destruction, Cyclonic Rift on an empty board, etc.)

The casual-to-cEDH gap is enormous. A casual "battlecruiser" deck wants to do splashy 8-mana things on turn 8. A cEDH deck wants to win by turn 4 with infinite mana. Putting them at the same table without a heads-up is miserable for everyone.

Wizards announced a formal [Bracket System](/blog/magic-the-gathering/mtg-commander-brackets) in 2024 that splits Commander into power tiers from "Exhibition" up through "cEDH" to standardize Rule 0. The rollout has been evolving, so treat the exact tier definitions as a moving target. Even if your pod ignores it, knowing the brackets exist makes the power-level conversation easier.

## Where to play Commander in 2026

**Local Game Store (LGS).** The standard. Most stores run Commander nights once or twice a week. Walk in with a deck, ask the staff where the EDH pod is, and you will be playing inside 20 minutes.

**Magic Online (MTGO).** Paper-equivalent gameplay with full Commander support. The card economy uses event tickets, and a competitive collection will cost real money. Best for grinding and testing.

**MTG Arena.** Arena does NOT support Commander. It has Brawl, which is a similar singleton format with 25 life and a smaller card pool, but it is 1v1 and the card pool is limited to recent Standard sets. If anyone tells you Arena has Commander, they mean Brawl. They are not the same.

**Spelltable.** Webcam-based, free, run by Wizards. You play paper cards in front of a camera and Spelltable handles life totals and matchmaking. Best free option for paper-deck owners with no local pod.

**Cockatrice.** Free desktop simulator, unofficial, supports the full card pool. Older interface but excellent for testing decklists you cannot afford to build in paper.

## Common new-player mistakes

![Sol Ring, the colorless two-mana artifact that taps for two and is a singleton staple of nearly every Commander deck.](/images/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start/sol-ring.jpg)

- **Running fewer than 36 lands.** The single most common mistake. You will get mana-screwed half your games.
- **Skipping board wipes.** Commander pods can build wide armies fast. You need at least 2-3 [mass removal pieces](/blog/magic-the-gathering/best-board-wipes-mtg) like Wrath of God, Damnation, or Blasphemous Act.
- **No non-creature removal.** Doom Blade kills creatures. It does not kill the enchantment that is locking your team. Run artifact and enchantment removal too.
- **Top-heavy curves.** A deck full of 7-drops loses to a deck full of 2-drops. Aim for the bulk of your spells to cost between 2 and 4 mana.
- **Building infinite combos for a casual table.** Drawing your whole deck on turn 6 and winning with Thassa's Oracle in a casual pod is a fast way to never get invited back.
- **Forgetting the singleton rule.** Yes, you can only run one Sol Ring. No, you cannot run four copies of your favorite removal spell. Build redundancy through similar effects, not copies.

For the manabase that goes underneath any Commander deck, the [best Commander lands](/blog/magic-the-gathering/best-lands-commander-mtg) guide covers the staples in depth. When you are ready to build cheap, the [best budget Commander decks under $100](/blog/magic-the-gathering/best-budget-commander-decks-under-100) post has seven full lists.

## Quick Action Checklist

- Pick a starter commander based on playstyle (Krenko, Edgar, Talrand, Yarok, or Sram).
- Buy a precon under $50 OR build a list on EDHREC using the average decklist as a starting point.
- Run at least 36 lands. Include 8-10 ramp pieces, 8-10 card-draw pieces, 5-7 removal spells, and 2-3 board wipes.
- Validate your color identity on Scryfall before sleeving up.
- Find a pod: LGS, Spelltable, or Cockatrice. Pick whichever fits your schedule.
- Have the Rule 0 conversation before shuffling. Power level, combos, salty cards.
- Play 10 games before you tune the deck. The first few games will tell you what is dead weight.
- Bookmark EDHREC for upgrade ideas and the [official Commander rules page](https://mtgcommander.net/) for rules questions.`,

  faq: [
    {
      question: 'What is the difference between Commander and EDH?',
      answer:
        "They are the same format. EDH (Elder Dragon Highlander) is the original community name from the 1990s, when the format required one of five specific Elder Dragon legendary creatures as your commander. Wizards adopted the format and rebranded it as Commander. Old-school players still call it EDH out of habit.",
    },
    {
      question: 'How many lands should a Commander deck run?',
      answer:
        "Run at least 36 lands, with 37-38 being the sweet spot for most decks. Decks with heavy ramp packages can sometimes get away with 34. Anything below 33 lands and you will get mana-screwed regularly. New players almost always cut lands first and then wonder why they lose.",
    },
    {
      question: 'Can I run any card in Commander?',
      answer:
        "Almost. Cards must match your commander's color identity, must not be on the Commander banned list maintained by the Commander Format Panel, and you can only run one copy of each card (singleton). Basic lands are the only exception to the singleton rule. Cards like Demonic Tutor are legal here even though they are banned in formats like Modern.",
    },
    {
      question: 'What is the best first commander for a beginner?',
      answer:
        "Krenko, Mob Boss is the cleanest starting point. Mono-red means no mana fixing headaches, the goblin tribal theme is intuitive, and the gameplan (make tokens, attack) is the easiest version of Magic possible. Edgar Markov is a great second pick if you want something durable that holds up across hundreds of games.",
    },
    {
      question: 'Is Commander free to play?',
      answer:
        "It can be. Spelltable (webcam-based) and Cockatrice (desktop simulator) are both free. Paper precon decks from Wizards run $40-$60 and are tournament-legal out of the box. Custom-built paper decks scale from $50 to thousands depending on how deep you want to go on staples like dual lands and original-print Demonic Tutors.",
    },
    {
      question: 'What is Rule 0 in Commander?',
      answer:
        "Rule 0 is the pre-game conversation where players agree on power level, house rules, and what is off-limits. It exists because Commander has no formal matchmaking system. A typical Rule 0 covers power level (1-10), infinite combos, fast mana, and any specific cards your pod considers unfun. Skipping Rule 0 is the fastest way to ruin a night of Magic.",
    },
    {
      question: 'Does MTG Arena have Commander?',
      answer:
        "No. Arena offers Brawl, which is a similar singleton format built around a legendary creature, but it is 1v1 with 25 starting life and a much smaller card pool. If you want true Commander online, use Magic Online, Spelltable, or Cockatrice.",
    },
  ],

  internalLinks: [
    { href: '/blog/magic-the-gathering', anchor: 'MTG Blog Hub' },
    { href: '/blog/magic-the-gathering/best-white-cards-magic-the-gathering', anchor: 'Best White Cards in MTG' },
    { href: '/blog/magic-the-gathering/best-blue-cards-magic-the-gathering', anchor: 'Best Blue Cards in MTG' },
    { href: '/blog/magic-the-gathering/best-black-cards-magic-the-gathering', anchor: 'Best Black Cards in MTG' },
    { href: '/blog/magic-the-gathering/best-red-cards-magic-the-gathering', anchor: 'Best Red Cards in MTG' },
    { href: '/blog/magic-the-gathering/best-green-cards-magic-the-gathering', anchor: 'Best Green Cards in MTG' },
    { href: '/blog/magic-the-gathering/best-lands-commander-mtg', anchor: 'Best Commander Lands' },
    { href: '/blog/magic-the-gathering/best-budget-commander-decks-under-100', anchor: 'Best Budget Commander Decks Under $100' },
    { href: '/glossary/magic-the-gathering', anchor: 'MTG Glossary' },
  ],

  externalSources: [
    { url: 'https://magic.wizards.com/en/formats/commander', title: 'Wizards: Official Commander Format Page' },
    { url: 'https://mtgcommander.net/', title: 'MTGCommander.net: Format Rules and Banned List' },
    { url: 'https://edhrec.com/', title: 'EDHREC: Commander Deck Stats and Recommendations' },
    { url: 'https://scryfall.com/', title: 'Scryfall: MTG Card Database' },
    { url: 'https://magic.wizards.com/en/news/announcements', title: 'Wizards: Official Announcements' },
  ],

  tldr:
    "Commander is a 100-card singleton multiplayer MTG format built around a single legendary creature. Each player starts at 40 life, and decks can only run cards matching the commander's color identity. To start: pick a precon under $50, find a pod at your LGS or on Spelltable, and have the Rule 0 power-level conversation before game one.",

  itemList: {
    name: 'Best First Commanders for New EDH Players (2026)',
    items: [
      { name: 'Krenko, Mob Boss (Mono-Red Goblins)', description: 'Aggressive, simple, easy mana base. Make goblins, attack, win.' },
      { name: 'Talrand, Sky Summoner (Mono-Blue Spellslinger)', description: 'Cast an instant or sorcery, get a 2/2 flying Drake. Card-draw heavy and easy to pilot.' },
      { name: 'Edgar Markov (Mardu Vampires)', description: 'Tribal vampires with token creation and lifelink. The most-played commander on EDHREC for a reason.' },
      { name: "Atraxa, Praetors' Voice (4-Color Superfriends)", description: 'Proliferate planeswalkers, +1/+1 counters, and infect. Complex but iconic; great long-term build.' },
      { name: 'Yarok, the Desecrated (Sultai ETB Doubler)', description: 'Every ETB trigger you control triggers twice. Plug-and-play with any creature-heavy precon.' },
      { name: 'The Ur-Dragon (5-Color Dragons)', description: 'Tribal dragons with eminence cost reduction. Big splashy plays from turn 4.' },
      { name: 'Sram, Senior Edificer (Mono-White Voltron)', description: 'Draw a card when you cast equipment, vehicles, or auras. Cheap to build, hard to disrupt.' },
    ],
  },
};
