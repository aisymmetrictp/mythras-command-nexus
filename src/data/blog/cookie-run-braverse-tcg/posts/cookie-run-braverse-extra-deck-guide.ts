import type { BlogPost } from '../../blogTypes';

export const cookieRunBraverseExtraDeckGuide: BlogPost = {
  slug: 'cookie-run-braverse-extra-deck-guide',
  game: 'cookie-run-braverse-tcg',
  category: 'advanced-strategy',
  topicCluster: 'braverse-strategy',
  tags: ['Extra Deck', 'Advanced Strategy', 'Deck Building', 'Awaken', 'Competitive'],
  title: 'Cookie Run: Braverse Extra Deck Guide — All 17 Cards',
  metaDescription:
    'Every EXTRA card in Cookie Run: Braverse, verified against the official database — how the 6-card zone works, what the conditions really cost, and which to run.',
  excerpt:
    'The Extra Deck is six free cards that most Braverse players fill wrong. Here is how the zone actually works, all 17 EXTRA cards broken down by their printed conditions, and the build rule that decides whether your slots ever fire.',
  featuredImagePrompt:
    'A Cookie Run: Braverse Extra Deck zone on a playmat, six cards face-down in a neat stack beside the main deck, one flipping face-up in a burst of black and violet magic, tournament table lighting.',
  heroImage:
    '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-extra-deck-guide/dark-enchantress-cookie-bs11-116.webp',
  heroImageAlt:
    "Official Dark Enchantress Cookie card (BS11-116), the Black LV.5 EXTRA Cookie from The Dark Enchantress War and the only LV.5 EXTRA card printed in Cookie Run: Braverse.",
  imageSources: [
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-extra-deck-guide/dark-enchantress-cookie-bs11-116.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/json/cardList_en.json',
      license: 'Cookie Run: Braverse official card image © Devsisters',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-extra-deck-guide/avatar-of-ruin-bs8-005.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/json/cardList_en.json',
      license: 'Cookie Run: Braverse official card image © Devsisters',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-extra-deck-guide/shadow-milk-cookie-bs9-102.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/json/cardList_en.json',
      license: 'Cookie Run: Braverse official card image © Devsisters',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-extra-deck-guide/jagae-cookie-bs10-098.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/json/cardList_en.json',
      license: 'Cookie Run: Braverse official card image © Devsisters',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-extra-deck-guide/avatar-of-destiny-bs11-091.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/json/cardList_en.json',
      license: 'Cookie Run: Braverse official card image © Devsisters',
    },
  ],
  publishDate: '2026-07-15T00:00:00.000Z',
  lastUpdated: '2026-07-15T00:00:00.000Z',
  primaryKeyword: 'cookie run braverse extra deck',
  secondaryKeywords: [
    'braverse extra deck rules',
    'braverse extra cards list',
    'cookie run braverse awaken',
    'braverse extra deck building',
    'best braverse extra cards',
    'cookie run tcg extra zone',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'monthly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'six-slots-most-players-fill-on-vibes', label: 'Six slots most players fill on vibes', level: 2 },
    { id: 'what-the-extra-deck-actually-is', label: 'What the Extra Deck actually is', level: 2 },
    { id: 'the-whole-pool-is-17-cards', label: 'The whole pool is 17 cards', level: 2 },
    { id: 'the-three-kinds-of-extra-condition', label: 'The three kinds of EXTRA condition', level: 2 },
    { id: 'attrition-conditions-you-had-a-bad-turn', label: 'Attrition conditions: you had a bad turn', level: 3 },
    { id: 'resource-conditions-you-hoarded-or-dumped', label: 'Resource conditions: you hoarded or dumped', level: 3 },
    { id: 'awaken-conditions-you-built-the-cookie-first', label: 'Awaken conditions: you built the Cookie first', level: 3 },
    { id: 'card-by-card-every-extra-in-the-game', label: 'Card by card: every EXTRA in the game', level: 2 },
    { id: 'red', label: 'Red', level: 3 },
    { id: 'yellow', label: 'Yellow', level: 3 },
    { id: 'green', label: 'Green', level: 3 },
    { id: 'blue', label: 'Blue', level: 3 },
    { id: 'purple', label: 'Purple', level: 3 },
    { id: 'pure-and-black', label: 'Pure and Black', level: 3 },
    { id: 'how-to-actually-fill-your-six', label: 'How to actually fill your six', level: 2 },
    { id: 'the-mistakes-that-waste-the-zone', label: 'The mistakes that waste the zone', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Here is a bet I will take every time: pull six random Braverse players off a locals table, look at their Extra Decks, and at least four are running an EXTRA card whose condition their deck cannot reliably meet. Not because they misread it — because they read "LV.3, six HP, hits for 3" and stopped. The stat line is the least interesting thing on an EXTRA card. The condition is the card.

The Extra Deck is the only zone in Braverse that costs you nothing. Your main deck is a hard 60 and every slot is a fight; the Extra Deck is up to six cards sitting outside that 60, doing nothing to your consistency. Free power. And the pool is small enough — 17 unique cards, every one an Ultra Rare — that there is no excuse for guessing. Every card, condition, and stat below is quoted from the official card database.

## Six slots most players fill on vibes

The failure mode is always the same. A player opens a Shadow Milk Cookie, thinks "that's the best card I own," and slots it. Then it sits there for eleven rounds because the Purple one (BS9-102) needs **20 cards or more in each player's trash**, and their deck is a Red aggro list that wins on turn six with nine cards in the bin.

That is not a bad card. That is a card in the wrong deck. An EXTRA whose condition never fires is worse than a blank — it convinced you that you had a late-game plan.

The right mental model: an EXTRA is a **payoff for a game state your deck is already trying to reach**. Read the condition first. Ask "does my deck do this on purpose, by turn five, in a game I am not already losing?" If no, the card is not for you no matter what it costs.

![Official Avatar of Ruin card (BS8-005), a Red LV.3 EXTRA Cookie with 5 HP whose EXTRA condition triggers when two or more of your Cookies fainted this turn](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-extra-deck-guide/avatar-of-ruin-bs8-005.webp)

## What the Extra Deck actually is

The Extra Deck is **an in-game zone, not a sideboard**. That is the single most common misconception in Braverse discussion, so: it is up to six cards living beside your main 60 for the entire match. You do not swap them between games — there is no swapping in Braverse at all, since [decks are registered and locked before the event](/blog/cookie-run-braverse-tcg/cookie-run-braverse-sideboard-guide). The Extra Deck is registered too, and it is the same six cards in game one and game three.

What makes the zone work is that EXTRA cards do not get played the normal way. They ignore the cost-and-level progression from the [turn structure guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-turn-structure-guide). Instead, each carries an 【EXTRA】 clause describing a board state, and when your board matches, the card comes down. No energy ramp to LV.3, no [Awaken](/blog/cookie-run-braverse-tcg/cookie-run-braverse-keywords-explained) chain in most cases — just the condition. That is why the zone is powerful and so easy to waste: it is six cards of "if my game goes the way I planned, I get a free bomb," and the planning is on you.

Note also that **EXTRA is its own card type**, listed alongside COOKIE, ITEM, TRAP, STAGE, and FLIP in the official database filters — which matters for any effect that says "select a Cookie card."

## The whole pool is 17 cards

Here is the part that should change how you approach the zone: **the entire EXTRA pool is 17 unique cards.** Not 17 good ones — 17 total, across 2,052 cards in the database. The SUR and EXR alternate arts pad that to 38 database entries, but they collapse to 17: three each in Red, Yellow, Green, Blue, and Purple, plus one Pure and one Black.

Every single one is an Ultra Rare — no commons, no uncommons, no budget line. That makes the Extra Deck the most expensive six cards in your bag, and worth getting right on paper before you buy anything.

The other structural fact: **EXTRA cards did not exist before BS8**. Sets BS1 through BS7 contain zero. The type debuted with *Land of Fire & Ruin, Realm of Apathy* (BS8), which shipped five; BS9 and BS10 added five each, and *The Dark Enchantress War* (BS11) added two. If you built out of [the early sets](/blog/cookie-run-braverse-tcg/cookie-run-braverse-sets-release-timeline) and wondered why you never saw the zone used, that is why.

## The three kinds of EXTRA condition

Line all 17 up and the conditions sort into three buckets. Knowing which bucket you are shopping in saves you from the vibes problem.

### Attrition conditions: you had a bad turn

These fire off your own Cookies dying — Avatar of Ruin (BS8-005) at **2 or more of your Cookies fainted this turn**, the Red Shadow Milk Cookie (BS9-010) at **2 or more of your Red LV.1 Cookies fainted during your opponent's previous turn**. They reward you for getting blown out. That is a real design idea, and it is why aggro decks that flood LV.1 bodies get the best deal in the zone: they trade constantly, so the condition is nearly free.

### Resource conditions: you hoarded or dumped

These read your hand, trash, or support area, and they cut both ways. Jagae Cookie (BS10-098) wants **7 cards or more in hand**; Will of Nature (BS8-090) wants **2 cards or less**. Same color, opposite tells — a nice little tax on greed, since you cannot use both well in one deck. Peak of Apathy (BS8-069) reads the board sideways, unlocking when **your support area has 2 or more cards less than your opponent's**: the only EXTRA that turns being behind on resources into a resource.

![Official Shadow Milk Cookie card (BS9-102), the Purple LV.3 EXTRA Cookie with 6 HP whose EXTRA condition requires 20 or more cards in each player's trash](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-extra-deck-guide/shadow-milk-cookie-bs9-102.webp)

### Awaken conditions: you built the Cookie first

The third bucket is the demanding one. These do not create a body — they upgrade one, stacking onto an existing Cookie via 【Awaken】. You can spot them by their HP, printed as a **plus value** instead of an absolute: Hollyberry (BS10-024) and White Lily (BS10-073) at +1; Golden Cheese (BS8-027), Dark Cacao (BS8-104), and Dark Enchantress (BS11-116) at +2. Highest ceiling in the pool, and only for decks built around a named Cookie from the ground up.

## Card by card: every EXTRA in the game

Levels, HP, and conditions below are as printed in the database.

### Red

- **Avatar of Ruin (BS8-005)** — LV.3, 5 HP. Playable if 2+ of your Cookies fainted this turn. **On Play:** all of your opponent's Cookies receive 1 damage. Power of the Destroyer hits for 3, then all *other* Cookies receive 1. The most deck-agnostic EXTRA in Red.
- **Shadow Milk Cookie (BS9-010)** — LV.2, 4 HP. Playable if 2+ of your Red LV.1 Cookies fainted during your opponent's previous turn. **On Play:** add a card from your opponent's hand face-up to the bottom of this Cookie's HP. It eats their hand and turns it into your life total.
- **Hollyberry Cookie (BS10-024)** — LV.3, +1 HP, Ancient. Note the drawback printed right on it: if its remaining HP is 3 or less, **it cannot attack**. Hollyberry decks only.

### Yellow

- **Golden Cheese Cookie (BS8-027)** — LV.3, +2 HP, Ancient. Awakens a Golden Cheese Cookie played from your break area this turn. Also self-recurs: from the break area it can trash itself to move a Golden Cheese Cookie from your trash back to the break area.
- **Shadow Milk Cookie (BS9-030)** — LV.3, 6 HP. Costs **discarding 3 Yellow Cookies that have FLIP from your hand** — a brutal price that only pencils out in a dedicated [FLIP](/blog/cookie-run-braverse-tcg/cookie-run-braverse-flip-mechanic) shell. Its attack discards a FLIP Cookie to fire that card's FLIP effect, which is the real value.
- **Warden of the Heart (BS10-048)** — LV.3, 6 HP. Needs your break area at LV.5+ and any of your Cookies to have gained HP this turn. The gentlest Yellow condition by a mile.

### Green

- **Peak of Apathy (BS8-069)** — LV.2, 4 HP. **On Play:** place a Green card from your trash into your support area as active — it pays back the exact resource whose absence unlocked it.
- **Shadow Milk Cookie (BS9-055)** — LV.3, 5 HP. Needs 3+ cards in your opponent's support area *and* 2+ cards moved from your support area to your trash this turn.
- **White Lily Cookie (BS10-073)** — LV.3, +1 HP, Ancient. Awaken. **On Play:** for one Green energy, if your opponent's support area has 6+ cards, place a card from the top of your deck into your support area as rested.

### Blue

- **Will of Nature (BS8-090)** — LV.3, 5 HP. Playable at 2 or less cards in hand; attack draws up to 2. The empty-hand comeback card.
- **Pure Vanilla Cookie (BS9-088)** — LV.3, **0 HP**, Ancient. Yes, zero. Awakens a Pure Vanilla Cookie if a Cookie went from your battle area to the bottom of your deck this turn, and its On Play can hand it +2 HP by revealing a Blue LV.2 Cookie off the top.
- **Jagae Cookie (BS10-098)** — LV.3, 6 HP. 7+ cards in hand, discard 2 Blue. Then it pumps a Cookie's damage once per turn for a discard. The Blue draw-engine payoff.

![Official Jagae Cookie card (BS10-098), the Blue LV.3 EXTRA Cookie with 6 HP that requires seven or more cards in hand to play](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-extra-deck-guide/jagae-cookie-bs10-098.webp)

### Purple

- **Dark Cacao Cookie (BS8-104)** — LV.3, +2 HP, Ancient. Awakens a Dark Cacao Cookie played from your trash this turn. Dragon Lord's Judgment hits for 4 and strips a card off an opponent Cookie's HP.
- **Shadow Milk Cookie (BS9-102)** — LV.3, 6 HP. The 20-cards-in-each-trash card. Only for [mill and grind decks](/blog/cookie-run-braverse-tcg/cookie-run-braverse-mill-deck-guide), full stop.
- **Spectral Warmaster (BS10-123)** — LV.3, 4 HP. Playable if **you refreshed during this game**, discard 2. Its attack hits for 3 then trashes itself — a one-shot haymaker for decks that mill themselves out.

### Pure and Black

Two cards, both from BS11, both doing something the other 15 do not.

**Avatar of Destiny (BS11-091)** is the only Pure EXTRA: LV.3, 5 HP, playable when **both players' break areas are LV.6 or higher and both players have 3 cards or less in hand**. That is a *symmetric* condition — it does not care whose deck it is in, and only fires in a genuine topdeck war. When it does, Destiny: Punishment hits for 5 off four generic energy.

**Dark Enchantress Cookie (BS11-116)** is the only Black EXTRA and the only **LV.5** card in the pool. It needs your break area at LV.7 or higher *and* [Dark Enchantress's Castle] (BS11-108) in your stage area, and it Awakens your LV.3 Dark Enchantress Cookie (BS11-115) that has Special Play. Fornacem Accende! hits for **7** — the biggest attack number in the zone — and the Cookie cannot be moved from the battle area by your opponent's effects. Three build requirements for the game's largest body. That is the correct price.

![Official Avatar of Destiny card (BS11-091), the Pure LV.3 EXTRA Cookie with 5 HP whose condition checks both players' break areas and hand sizes](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-extra-deck-guide/avatar-of-destiny-bs11-091.webp)

## How to actually fill your six

The rule I would tattoo on a playmat: **an EXTRA card earns its slot if your deck meets its condition in a game you are winning or drawing, not only in games you are already losing.**

That kills a lot of tempting slots. Avatar of Destiny needs both hands empty and both break areas at LV.6+ — but for an [aggro deck](/blog/cookie-run-braverse-tcg/cookie-run-braverse-aggro-deck-guide), reaching that state means your plan already failed. It is not a comeback card for you. It is a card for [control decks](/blog/cookie-run-braverse-tcg/cookie-run-braverse-control-deck-guide) that *want* the long game.

- **Match your archetype, then your color.** Aggro takes attrition (Avatar of Ruin, Red Shadow Milk). Control takes resources (Will of Nature, Jagae, Avatar of Destiny). Combo takes Awaken (Golden Cheese, Dark Cacao, Dark Enchantress).
- **Do not run all six as different cards.** Duplicates are legal and the zone has no consistency cost — if Avatar of Ruin is your best line, run two.
- **Zero is a real answer.** On a two-color [midrange](/blog/cookie-run-braverse-tcg/cookie-run-braverse-midrange-deck-guide) list with no named-Cookie theme, several conditions are genuinely unreachable. Two live cards beat two live cards plus four blanks.
- **Awaken cards are a deck commitment, not a slot.** Dark Enchantress Cookie requires BS11-115, BS11-108, and a Black shell reaching a LV.7 break area. That is not an Extra Deck decision — it is the whole deck.

## The mistakes that waste the zone

1. **Slotting the expensive one.** The SUR and EXR arts are the same card. Price signals collectibility, not condition reachability. A chase-price Shadow Milk in an aggro deck is still a blank.
2. **Running Jagae and Will of Nature together.** Opposite hand-size conditions in the same color — one is always dead. I have watched this exact list at three different tables.
3. **Forgetting it is not a sideboard.** You cannot fix a bad Extra Deck in game two. Same six every match, since the [tournament list is locked](/blog/cookie-run-braverse-tcg/cookie-run-braverse-tournament-guide).
4. **Treating the +HP cards as bodies.** They upgrade a Cookie already on board. If the base Cookie is dead, so is your EXTRA.

The zone is free, but only if you earn it on the build sheet. Six cards, 17 to choose from, and the only question that matters is whether your deck reaches the condition on purpose.

## Quick Action Checklist

- Up to six cards, outside your main 60, registered with your list and locked for the event. Not a sideboard.
- The whole pool is 17 unique Ultra Rares: 3 each in Red/Yellow/Green/Blue/Purple, plus 1 Pure and 1 Black. None printed before BS8.
- Read the 【EXTRA】 condition before the stat line. If your deck does not reach that board state on purpose by mid-game, the card is a blank.
- Aggro plays attrition: Avatar of Ruin (BS8-005), Shadow Milk Cookie (BS9-010). Control plays resources: Will of Nature (BS8-090), Jagae Cookie (BS10-098), Avatar of Destiny (BS11-091).
- Never run Jagae Cookie and Will of Nature together — their hand-size conditions are direct opposites.
- Any EXTRA with a **+HP** value is an Awaken upgrade needing its base Cookie already on board.
- Run duplicates freely, and run fewer than six without guilt. Live cards beat filler.`,
  faq: [
    {
      question: 'How many cards can you have in a Cookie Run: Braverse Extra Deck?',
      answer:
        'Up to six. The Extra Deck sits outside your main 60-card deck and holds EXTRA-type cards only. It is registered alongside your main deck before a tournament and stays locked for the entire event — you cannot change it between games or rounds.',
    },
    {
      question: 'How many EXTRA cards exist in Cookie Run: Braverse?',
      answer:
        'Seventeen unique cards as of The Dark Enchantress War (BS11). The official database lists 38 EXTRA entries, but that count includes SUR and EXR alternate arts of the same cards. The split is three each in Red, Yellow, Green, Blue, and Purple, plus one Pure (Avatar of Destiny, BS11-091) and one Black (Dark Enchantress Cookie, BS11-116). Every one is an Ultra Rare.',
    },
    {
      question: 'Is the Braverse Extra Deck a sideboard?',
      answer:
        'No. It is an in-game zone, not a swap pool. Braverse has no sideboarding at all — your main 60 and your Extra Deck are both registered in advance and locked once the event starts. The same six Extra cards are available to you in every game of every round.',
    },
    {
      question: 'How do you play an EXTRA card in Cookie Run: Braverse?',
      answer:
        'Each EXTRA card has a printed 【EXTRA】 clause describing a board state that unlocks it, rather than following normal level progression. Avatar of Ruin (BS8-005) needs two or more of your Cookies to have fainted that turn; Jagae Cookie (BS10-098) needs seven or more cards in your hand plus a two-card Blue discard. Meet the condition and the card can come down from the zone.',
    },
    {
      question: 'Which set introduced Extra Deck cards to Cookie Run: Braverse?',
      answer:
        'BS8, Land of Fire & Ruin, Realm of Apathy. Sets BS1 through BS7 contain zero EXTRA-type cards. BS8 shipped five, and BS9, BS10, and BS11 have added more since at roughly one per color per set.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'All GamerTagMythras guides' },
    { href: '/blog/cookie-run-braverse-tcg', anchor: 'Cookie Run: Braverse TCG hub' },
    { href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-sideboard-guide', anchor: 'Braverse sideboard guide' },
    { href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-turn-structure-guide', anchor: 'Braverse turn structure guide' },
    { href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-keywords-explained', anchor: 'Braverse keywords explained' },
    { href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-archetypes', anchor: 'Braverse deck archetypes' },
    { href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-sets-release-timeline', anchor: 'Braverse sets and release timeline' },
  ],
  externalSources: [
    { url: 'https://cookierunbraverse.com/en/', title: 'CookieRun: Braverse official site and card database' },
    { url: 'https://cookierunbraverse.com/data/json/cardList_en.json', title: 'CookieRun: Braverse official card list (English JSON)' },
    { url: 'https://cookierun.gg/', title: 'CookieRun.gg community deck and tournament tools' },
  ],
  tldr:
    'The Cookie Run: Braverse Extra Deck is six cards outside your main 60 — free power, registered and locked with your list, and not a sideboard. The entire pool is just 17 unique Ultra Rares (3 per color, plus 1 Pure and 1 Black), none printed before BS8. Every one is gated by an 【EXTRA】 condition, so read the condition, not the stat line: slot only cards whose board state your deck reaches on purpose in games you are winning.',
};
