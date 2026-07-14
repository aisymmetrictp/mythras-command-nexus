import type { BlogPost } from '../../blogTypes';

export const cookieRunBraverseSideboardGuide: BlogPost = {
  slug: 'cookie-run-braverse-sideboard-guide',
  game: 'cookie-run-braverse-tcg',
  category: 'advanced-strategy',
  topicCluster: 'braverse-strategy',
  tags: ['Sideboard', 'Tech Cards', 'Tournament Play', 'Deck Tuning', 'Competitive'],
  title: 'Cookie Run: Braverse Sideboard Guide — Tech Without One',
  metaDescription:
    "Cookie Run: Braverse has no sideboard — decks lock at registration. Here's how to tech anyway: flex slots, a tech binder, and verified swaps for every matchup.",
  excerpt:
    "Braverse locks your deck at registration - there's no sideboard to hide behind. This guide covers the tech binder system, flex-slot math, and database-verified swaps for aggro, control, mill, and midrange, so your 60 is already right before round one.",
  featuredImagePrompt:
    "A Cookie Run: Braverse player's binder open on a tournament table, tech cards in sleeves beside a locked 60-card deck, an hourglass card glowing purple in the center pocket, warm card-shop lighting.",
  heroImage:
    '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-sideboard-guide/dream-travelers-hourglass.webp',
  heroImageAlt:
    "Official Dream Traveler's Hourglass card (BS11-081), the Purple Item from The Dark Enchantress War that shuffles both players' trash back into their decks - the poster child for Braverse mainboard tech.",
  imageSources: [
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-sideboard-guide/dream-travelers-hourglass.webp',
      sourceUrl: 'https://cookierunbraverse.com',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-sideboard-guide/roaring-destruction.webp',
      sourceUrl: 'https://cookierunbraverse.com',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-sideboard-guide/manju-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-sideboard-guide/wildberry-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
  ],
  publishDate: '2026-07-14T00:00:00.000Z',
  lastUpdated: '2026-07-14T00:00:00.000Z',
  primaryKeyword: 'cookie run braverse sideboard',
  secondaryKeywords: [
    'braverse sideboard rules',
    'cookie run braverse tech cards',
    'braverse deck tuning',
    'braverse tournament deck registration',
    'braverse flex slots',
    'cookie run tcg best of 3',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'monthly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'braverse-has-no-sideboard-and-that-changes-everything', label: 'Braverse has no sideboard and that changes everything', level: 2 },
    { id: 'the-tech-binder-your-sideboard-that-lives-at-home', label: 'The tech binder: your sideboard that lives at home', level: 2 },
    { id: 'the-flex-slot-framework', label: 'The flex-slot framework', level: 2 },
    { id: 'the-swap-map-what-to-bring-against-each-archetype', label: 'The swap map: what to bring against each archetype', level: 2 },
    { id: 'against-aggro', label: 'Against aggro', level: 3 },
    { id: 'against-control', label: 'Against control', level: 3 },
    { id: 'against-mill-and-trash-decks', label: 'Against mill and trash decks', level: 3 },
    { id: 'against-midrange-and-ancients', label: 'Against midrange and Ancients', level: 3 },
    { id: 'reading-your-local-meta-between-events', label: 'Reading your local meta between events', level: 2 },
    { id: 'when-not-to-tech', label: 'When not to tech', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `You just dropped game one to a Purple mill deck that dumped your whole library into the trash, and your hands are already reaching for the deck box - the reflex every Magic and Pokemon player has burned in. Swap the dead cards, bring in the graveyard hate, shuffle up for game two. Except in Cookie Run: Braverse, there's nothing to reach for. The official tournament rules require your deck recipe to be submitted before the event and locked once it starts - no changes between games, no changes between rounds, no 15-card safety net. The 60 cards you registered (plus up to 6 Extra Deck cards) are the 60 cards you die with.

So a "sideboard guide" for Braverse is really a guide to a different skill: getting the teching done *before* registration. That skill has three parts - a tech binder you maintain between events, a flex-slot budget inside your 60, and a swap map of verified answers for each archetype. Every card named below is quoted from the official card database, and most of them cost you an uncommon, not a chase rare.

## Braverse has no sideboard and that changes everything

Nail down the rules reality first. Braverse tournament play - now run through TopDeck.gg for organized play in North America - uses a registered deck list: exactly 60 cards in the main deck, up to 6 in the Extra Deck, no banned or restricted cards, submitted in advance. Once the tournament begins, the list is frozen. Plenty of locals run best-of-1 with a 35-minute round timer; even when an event runs best-of-3, there is no sideboarding step between games.

Two consequences follow, and they're both bigger than they look.

First, **your 60 has to beat the whole room, not one opponent.** In Magic, a maindeck can be 70% of your strategy because the sideboard patches the other 30% after game one. In Braverse, there is no patch. If the room is half aggro and you registered zero defensive Traps, you signed up to lose those matchups twice each. That's why [tech cards](/blog/cookie-run-braverse-tcg/cookie-run-braverse-tech-cards-guide) matter more here than their raw stats suggest - a narrow answer in the maindeck is the only answer you get.

Second, **the Extra Deck is not a loophole.** Those 6 slots hold EXTRA-type Cookies like the Shadow Milk Beasts - an in-game zone, like a Yu-Gi-Oh extra deck, not a swap pool. Extra cards only arrive through their printed EXTRA conditions, and you can't move one into your main 60 between games. Registering six of them gives you a top-end, not six flex answers.

If you're shaky on deck legality or the zones themselves, run through the [deck building basics](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics) first - this guide assumes you know what a support area is.

## The tech binder: your sideboard that lives at home

Here's the reframe that makes the whole thing click: Braverse absolutely has a sideboard. You just board *between events*, not between games. Your sideboard is a binder page - 9 to 18 sleeved cards that never travel inside the deck box but get audited before every registration.

The binder page has three rules:

- **Every card on it must answer a named deck.** Not "this seems good" - "this beats the Latte Cookie mill deck that top-8'd last week." Can't name the matchup? It's a cut, not a tech.
- **Every card on it stays playable in a vacuum.** Because you can't board it out, either. The best Braverse tech cards are mostly-fine cards with a spike matchup, and that's not an accident.
- **It gets one honest review per event.** Which binder card did I wish was in the 60? Which registered card never left my hand? Those two answers are next week's swap.

This is also where budget players quietly win: almost every card in the swap map below is a common, uncommon, or rare. The [budget upgrades guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-budget-upgrades) covers the economics, but the short version is that answers cost cents while threats cost twenties.

## The flex-slot framework

You can't rebuild 60 cards every week, and you shouldn't. A tuned Braverse list splits into a core and a flex band:

- **Core (roughly 52-54 cards):** your energy base, your curve of Cookies, your win condition, your draw engine. This is the deck's identity. It only changes when the [meta tier list](/blog/cookie-run-braverse-tcg/cookie-run-braverse-meta-tier-list) shifts under it.
- **Flex band (roughly 6-8 cards):** two to three effect groups of 2-3 copies each. These are the slots you re-register between events based on what you expect to face.

Why 2-3 copies and not singletons? Consistency math. In a 60-card deck with no tutors and no sideboard, a single copy is a card you see in well under half your games - a lottery ticket, not a plan. If a matchup is worth teching for, it's worth 2 slots; if it isn't worth 2 slots, it isn't worth teching for. That discipline caps you at two or three tech packages per event, which means the real skill is prediction, not deck-box origami.

## The swap map: what to bring against each archetype

Everything below is verified against the official database at cookierunbraverse.com. Costs use the standard notation from our [energy guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-energy-guide): {R}/{Y}/{G}/{B}/{P}/{K} for colored energy, {N} for any. For how each matchup actually plays out once the cards are locked, pair this section with the [matchup guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-matchup-guide).

### Against aggro

![Official Roaring Destruction card (BS11-013), a Red uncommon Trap from The Dark Enchantress War that gives an opposing Cookie -3 attack damage when one of your LV.3 Cookies is at 1 HP.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-sideboard-guide/roaring-destruction.webp)

Aggro punishes greedy curves, so the tech is damage denial - Traps that turn their lethal swing into a whiff.

- **Roaring Destruction (BS11-013, Red Trap, uncommon).** For {R}, if one of your LV.3 Cookies has exactly 1 HP remaining, an opposing Cookie deals -3 attack damage this turn. That's a full attack negated for one energy, and the "1 HP remaining" condition is precisely the spot aggro puts you in. The swing in tempo when this fires is the biggest of any uncommon in the game.
- **Awakened Apathy (BS11-046, Green Trap, uncommon).** {G}{G} for a flat -2 attack damage, with an extra -1 if your support area has 2 or more cards fewer than your opponent's. No setup condition on the base mode, which makes it the more reliable copy in slower Green shells.
- **Fragmented Soul (BS9-046, Yellow Trap, uncommon).** {Y}{Y} for -2 attack damage *and* it returns a FLIP Cookie from your trash to hand. In a Yellow FLIP deck this is a two-for-one - defense stapled to engine fuel.

The pattern: each color has its own damage-reduction Trap, and they're all cheap. Against an aggro-heavy room, moving from zero defensive Traps to 3-4 is the single highest-impact registration change you can make.

### Against control

![Official Manju Cookie card (BS10-097), an Ultra Rare Blue LV.2 Cookie with 4 HP that forces a discard from opponents holding six or more cards.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-sideboard-guide/manju-cookie.webp)

Control decks sit back, accumulate cards, and answer your threats one-for-one. The tech attacks the resource they hoard: their hand.

- **Manju Cookie (BS10-097, Blue, Ultra Rare, LV.2, 4 HP).** Once per turn, discard 1 card: if your opponent has 6 or more cards in hand, they place one in their trash. That's a repeating tax aimed squarely at draw-go decks - and the attack, Flash Strike ({B}{B}{B} for 3), refills you with up to 2 draws when your own hand is at 4 or fewer. This is the one swap on the map that costs real money, and it earns it.
- **Top of the Spire of Deceit (BS11-062, Blue Stage, uncommon).** {B}{B} to place, then cash it in later to view your opponent's entire hand. Against control, information is removal - knowing which Trap they're holding decides whether you commit the second attacker or wait.
- **Pom-pom Dough Cookie (BS11-112, Black, Rare, LV.2, 4 HP).** Its attack rider shuts off your opponent's On Play skills for LV.2-or-higher Cookies for the turn. Control decks lean on On Play value to stabilize; this makes their catch-up turn miss.

### Against mill and trash decks

The Purple trash engines - Latte Cookie (BS9-098) sacrificing itself to mill you 3, Black Sapphire Cookie (BS9-100) hitting both decks for 5 on play - want the game to be about trash counts. One uncommon un-asks the question:

- **Dream Traveler's Hourglass (BS11-081, Purple Item, uncommon).** For {P}{P}: return ALL cards from BOTH players' trash to their decks and shuffle. Every card the mill deck spent three turns dumping goes back; every "20 or more cards in your trash" payoff - including the Purple Shadow Milk Cookie's EXTRA condition - resets to zero. The hardest single answer to an entire archetype in this game, for two energy. It's the hero image of this article because it deserves to be.

The honest caveat, per binder rule two: against non-trash decks the Hourglass is nearly blank, and it can anti-synergize with your own recursion. Register 2 copies when mill is real in your area, 0 when it isn't - no in-between number is correct.

### Against midrange and Ancients

![Official Wildberry Cookie card (BS10-023), a Super Rare Red LV.2 Cookie whose once-per-turn skill trashes an opposing stage card for one Red energy.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-sideboard-guide/wildberry-cookie.webp)

Midrange piles win with big bodies and value permanents - Stage cards that generate advantage every turn. Two answers:

- **Wildberry Cookie (BS10-023, Red, Super Rare, LV.2, 3 HP).** Once per turn, for a single {R}: trash one of your opponent's stage cards. Repeatable Stage removal on a body that also attacks for 4 with Guardian Punch. If your local midrange decks are built around a Stage engine, Wildberry alone dismantles it - every single turn, for one energy.
- **Mystic Flour Cookie (BS11-053, Green, Ultra Rare, LV.2, 4 HP).** Once per turn, for {G}: strip 1 card from the top of the HP of every opposing Cookie with 5 or more remaining HP. Note what it doesn't touch - small bodies. This card exclusively punishes decks that go tall, chipping every fat Ancient on their board simultaneously while ignoring aggro entirely. Textbook tech: devastating against one shape of deck, blank against another.

## Reading your local meta between events

The swap map is useless without a prediction to aim it at, and prediction in Braverse is mostly showing up and writing things down. Three habits:

- **Track your last two events, not your last ten.** Braverse sets land frequently and each one reshapes archetypes (BS11, The Dark Enchantress War, printed most of the Traps above). What won six weeks ago is trivia; what won the last two Tuesdays is data.
- **Count archetypes, not players.** Note the rough split each week - say 40% aggro, 30% trash/mill, 30% midrange - and mirror it in your 6-8 flex slots. Silver bullets only earn a slot when their target is above roughly a quarter of the room.
- **Watch what people buy, not just what they play.** When three regulars crack boxes of a new set at the same table, the next event's meta is sitting right there. Your [mulligan decisions](/blog/cookie-run-braverse-tcg/cookie-run-braverse-mulligan-guide) and tech slots should move before the results do, not after.

And a genuinely underrated one: in best-of-3 you can't change cards, but you *can* change lines. Play game one conservatively until you've identified their archetype; games two and three, mulligan and sequence toward the flex cards that matter. The deck is frozen. The pilot isn't - and that's a bigger edge than any 15-card board ever was.

## When not to tech

The trap at the end of all this is over-teching, so here's the counterweight. Don't touch the flex slots when:

- **Your losses were pilot error.** If you punted game two by walking into an obvious Trap with your last attacker, no registration change fixes that. Reread the matchup notes, not the binder.
- **The answer costs consistency you can't spare.** Every tech slot displaces a card that made your deck function. A deck that does its own thing reliably beats a deck full of answers it never finds.
- **You're guessing.** No data on the room? Register the straightest, most proactive version of your list. Proactive decks have fewer dead cards against an unknown field - that's a TCG law, and a locked deck raises the penalty for breaking it.

## Quick Action Checklist

- Accept the rule: 60 cards plus up to 6 Extra, registered in advance and locked for the whole event - no sideboarding between games, even in best-of-3.
- Keep a tech binder of 9-18 sleeved answers at home; audit it after every event - what did I miss, and what never fired?
- Split your list into a 52-54 card core and 6-8 flex slots; run tech as 2-3 copies, never singletons.
- Against aggro: your color's damage-denial Trap - Roaring Destruction (BS11-013), Awakened Apathy (BS11-046), or Fragmented Soul (BS9-046).
- Against control: Manju Cookie (BS10-097) taxes big hands; Top of the Spire of Deceit (BS11-062) reveals theirs.
- Against mill: 2 copies of Dream Traveler's Hourglass (BS11-081) - and 0 when mill is absent.
- Against midrange: Wildberry Cookie (BS10-023) strips Stages every turn; Mystic Flour Cookie (BS11-053) chips every 5-HP-plus body.
- Mirror the last two weeks of your local archetype split in the flex slots, then stop - over-teching loses more games than under-teching.`,
  faq: [
    {
      question: 'Does Cookie Run: Braverse have a sideboard?',
      answer:
        'No. Official tournament rules require a registered deck of exactly 60 cards plus up to 6 Extra Deck cards, submitted in advance and locked once the event begins. There is no sideboarding step between games or rounds, even in best-of-3 matches.',
    },
    {
      question: 'Can I change my Braverse deck between tournament rounds?',
      answer:
        'No. Once the tournament starts, no changes can be made to your registered list. The only legal "sideboarding" happens between events - which is why maintaining a tech binder and re-registering your flex slots each week matters so much.',
    },
    {
      question: 'Does the Extra Deck work like a sideboard in Braverse?',
      answer:
        'No. The up-to-6-card Extra Deck is an in-game zone holding EXTRA-type Cookies (like the Shadow Milk Beasts) that enter play only through their printed EXTRA conditions. You cannot move Extra Deck cards into your main 60 between games.',
    },
    {
      question: 'How many flex slots should a Braverse deck have?',
      answer:
        'Around 6-8 of your 60 cards, run as two or three packages of 2-3 copies each. Singleton tech cards are too inconsistent in a 60-card deck with no tutors and no sideboard - if a matchup is worth teching for, it is worth at least 2 slots.',
    },
    {
      question: 'What is the best anti-mill card in Cookie Run: Braverse?',
      answer:
        "Dream Traveler's Hourglass (BS11-081), a Purple uncommon Item. For two Purple energy it returns all cards from both players' trash to their decks and shuffles them, resetting every trash-count payoff in one move - including 20-card EXTRA conditions.",
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'All GamerTagMythras guides' },
    { href: '/blog/cookie-run-braverse-tcg', anchor: 'Cookie Run: Braverse TCG hub' },
    { href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-tech-cards-guide', anchor: 'Braverse tech cards guide' },
    { href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-matchup-guide', anchor: 'Braverse matchup guide' },
    { href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-tournament-guide', anchor: 'Braverse tournament guide' },
    { href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-meta-tier-list', anchor: 'Braverse meta tier list' },
    { href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics', anchor: 'Braverse deck building basics' },
  ],
  externalSources: [
    { url: 'https://cookierunbraverse.com/en/', title: 'CookieRun: Braverse official site and card database' },
    { url: 'https://topdeck.gg/blog/cookierun-braverse-organized-play-20260413', title: 'CookieRun: Braverse organized play moves to TopDeck.gg' },
    { url: 'https://cookierun.gg/', title: 'CookieRun.gg community deck and tournament tools' },
  ],
  tldr:
    'Cookie Run: Braverse has no sideboard - your 60-card deck (plus up to 6 Extra cards) is registered in advance and locked for the whole tournament. Tech between events instead: keep a binder of verified answers, budget 6-8 flex slots in 2-3 copy packages, and aim them at your local archetype split. Cheap uncommons carry the swap map, from Roaring Destruction against aggro to Dream Traveler\'s Hourglass, which resets both trashes against mill.',
};
