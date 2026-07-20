import type { BlogPost } from '../../blogTypes';

export const mtgDeckbuildingRatios: BlogPost = {
  slug: 'mtg-deckbuilding-ratios',
  game: 'magic-the-gathering',
  category: 'format-guides',
  topicCluster: 'deckbuilding-fundamentals',
  title: 'MTG Deckbuilding Guide: Land and Spell Ratios',
  metaDescription:
    'How many lands in an MTG deck? Land counts by format (Commander ~37, 60-card 17-24, Limited 17), the ramp/draw/removal/threat skeleton, and the mana curve.',
  excerpt:
    'Most decks lose to their own mana, not their opponent. Here are the land counts that actually work by format, the spell skeleton every deck needs, and how to read a mana curve before you sleeve it up.',
  featuredImagePrompt:
    'A clean overhead flat-lay of a Magic: The Gathering deck split into labeled stacks — a tall stack of lands, a stack of mana rocks, a stack of card-draw spells, a stack of removal, a stack of threats — on dark wood under warm lamp light, shallow depth of field, no text overlays',
  heroImage: '/images/blog/magic-the-gathering/mtg-deckbuilding-ratios/sol-ring.jpg',
  heroImageAlt:
    'Sol Ring, the two-mana artifact that taps for two colorless mana and counts as ramp toward your mana sources in a Commander deck.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-deckbuilding-ratios/sol-ring.jpg',
      sourceUrl: 'https://scryfall.com/card/msc/211/sol-ring',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-deckbuilding-ratios/cultivate.jpg',
      sourceUrl: 'https://scryfall.com/card/msc/172/cultivate',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-deckbuilding-ratios/swords-to-plowshares.jpg',
      sourceUrl: 'https://scryfall.com/card/msc/143/swords-to-plowshares',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-deckbuilding-ratios/rhystic-study.jpg',
      sourceUrl: 'https://scryfall.com/card/j22/114/rhystic-study',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
  ],
  publishDate: '2026-06-10T00:00:00.000Z',
  lastUpdated: '2026-06-10T00:00:00.000Z',
  primaryKeyword: 'mtg deckbuilding ratios',
  secondaryKeywords: [
    'how many lands in an mtg deck',
    'how many lands in a commander deck',
    'mtg land to spell ratio',
    '60 card deck land count',
    'commander deck template',
    'mtg mana curve',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'evergreen',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'why-ratios-matter-more-than-card-choice', label: 'Why ratios matter more than card choice', level: 2 },
    { id: 'how-many-lands-by-format', label: 'How many lands by format', level: 2 },
    { id: 'the-spell-skeleton-every-deck-needs', label: 'The spell skeleton every deck needs', level: 2 },
    { id: 'the-commander-deck-template', label: 'The Commander deck template', level: 2 },
    { id: 'the-60-card-deck-template', label: 'The 60-card deck template', level: 2 },
    { id: 'counting-ramp-as-lands', label: 'Counting ramp as lands', level: 2 },
    { id: 'reading-your-mana-curve', label: 'Reading your mana curve', level: 2 },
    { id: 'common-ratio-mistakes', label: 'Common ratio mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Most decks don't lose to a better card. They lose to their own mana. Too few lands and you stumble, missing land drops while your hand rots. Too many and you flood, drawing your eighth land when you needed a threat. Both feel like bad luck and both are actually a deckbuilding decision you made weeks earlier when you guessed at the land count instead of using a number that works.

The good news is that the right ratios are mostly solved. Decades of competitive play have converged on land counts and category skeletons that hold up, and you can copy them before you ever argue about which removal spell is best. This guide gives you the numbers by format, the spell skeleton every deck wants, the full Commander and 60-card templates, and how to read a mana curve so the numbers actually match your deck instead of someone else's.

## Why ratios matter more than card choice

Here's the uncomfortable truth: swapping one good card for another slightly better card is a rounding error. Getting your land count wrong by four is a structural defect that loses games no individual card can fix.

Think about what a land does. It's not just "mana" — it's the thing that lets you cast everything else *on time*. Magic is a tempo game wearing a card-advantage costume. The player who hits their land drops and curves out is usually a full turn ahead, and a turn in Magic is enormous. A deck that's a turn behind on mana is playing a different, worse game where every answer comes too late and every threat is outclassed.

So the order of operations when building is: **lock the mana first** (land count + ramp + curve), then fill the spell skeleton (ramp, draw, removal, threats), then — only then — sweat the individual card choices. People do it backwards, picking 60 cards they like and counting lands at the end, and then wonder why the deck is inconsistent.

## How many lands by format

Land counts aren't one number — they scale with your deck size and average mana cost. Here's the baseline by format.

| Format | Deck size | Typical lands | Notes |
|---|---|---|---|
| Commander (EDH) | 100 (singleton) | 36–38 | ~37 is the default; add ramp on top |
| Standard / Pioneer / Modern (60-card) | 60 | 17–24 | Depends heavily on curve |
| Aggro (60-card) | 60 | 17–20 | Low curve, wants to dump its hand |
| Midrange (60-card) | 60 | 23–25 | Higher curve, wants to hit every drop |
| Control (60-card) | 60 | 25–27 | Highest curve, can't afford to miss land drops |
| Limited (40-card) | 40 | 17–18 | 17 is the near-universal default |

The throughlines:

- **Commander wants ~37 lands** in a 100-card deck, then ramp on top of that (more on ramp below). This is the single most-asked deckbuilding question and the answer is "around 37."
- **60-card constructed lives between 17 and 24**, and the deciding factor is your curve, not the format. A hyper-aggressive deck topping out at three mana can run 17; a control deck full of five- and six-drops wants 26+.
- **Limited is 17 lands in a 40-card deck**, basically every time. The rare exception is a very low, aggressive curve dropping to 16, or a top-heavy ramp deck pushing 18.

> The fastest gut-check: a 60-card deck is 40% lands at the high end (24/60) and ~28% at the low end (17/60). Commander is ~37%. Limited is ~42% (17/40). The slower and more expensive your deck, the closer to the top of that range you sit.

## The spell skeleton every deck needs

Lands get you mana. The non-land cards split into jobs, and every functional deck covers four of them. Skip one and you'll feel the hole every game.

- **Ramp** — cards that accelerate or fix your mana ([mana rocks](/blog/magic-the-gathering/best-mana-rocks-commander-mtg), [mana dorks](/blog/magic-the-gathering/best-mana-dorks-mtg), land-fetch spells). Crucial in Commander, optional-to-irrelevant in fast 60-card aggro.
- **Card draw / advantage** — cards that refill your hand. The engine that keeps you from [running out of gas in long games](/blog/magic-the-gathering/best-card-draw-commander-mtg). Non-negotiable in Commander; aggro substitutes raw speed.
- **Removal / interaction** — cards that answer the opponent's stuff (spot [removal](/blog/magic-the-gathering/best-removal-spells-mtg), [board wipes](/blog/magic-the-gathering/best-board-wipes-mtg), [counterspells](/blog/magic-the-gathering/best-counterspells-mtg)). The thing newer players cut first and miss most.
- **Threats / win conditions** — the cards that actually end the game. Easy to over- or under-count; you need enough to close, not so many you flood on do-nothing-yet beaters.

The mix between these four shifts by archetype. Aggro is mostly threats with a little reach. Control is mostly interaction and draw with a few finishers. Midrange is balanced. But all four jobs are present in every deck that works — the question is the proportion, not the presence.

## The Commander deck template

![Cultivate, a green sorcery that fetches two basic lands — the archetypal ramp spell that also fixes colors and effectively counts toward your land count.](/images/blog/magic-the-gathering/mtg-deckbuilding-ratios/cultivate.jpg)

Commander is where ratios matter most, because the games are long and a structural flaw has fifteen turns to punish you. The widely-used skeleton is the **10/10/10 template**, and it works:

| Category | Count | What it buys you |
|---|---|---|
| Lands | 37 | Hitting land drops every turn |
| Ramp | 10 | Getting ahead on mana, fixing colors |
| Card draw | 10 | Not running out of gas across a long game |
| Removal / interaction | 8–10 | Answering the table's threats |
| Board wipes | 2–3 | Resetting a board that got away from you |
| Commander | 1 | Your engine, always available |
| Theme / wincons / flex | ~29 | The actual fun: synergy, payoffs, protection |

That's roughly 70 cards of structure (lands + the four jobs + wipes) plus your commander, leaving about 29 slots for the deck's identity. The numbers flex with your commander — a low-curve aggressive commander can drop to 35 lands and lean on cheap threats; a top-heavy ramp deck wants 38 lands and 12 ramp. But 37 lands / 10 ramp / 10 draw / 10 interaction is the skeleton that turns a pile of good cards into a deck that functions.

![Rhystic Study, the blue enchantment that draws you a card whenever an opponent casts a spell unless they pay — the gold standard of repeatable Commander card draw.](/images/blog/magic-the-gathering/mtg-deckbuilding-ratios/rhystic-study.jpg)

The two categories beginners shortchange are **card draw and removal**. Three card-draw spells in 99 means once your opening hand is gone you're top-decking by turn six. Three removal spells means the scariest thing on the table sits there unanswered. Ten of each is the floor for a deck that wants to still be playing Magic on turn ten.

## The 60-card deck template

Sixty-card constructed (Standard, Pioneer, Modern) is tighter — you have four copies of your best cards and a smaller deck, so consistency comes from redundancy rather than singleton tutoring. The land count tracks your curve:

**Aggro (17–20 lands):** Low curve, topping out around three or four mana, wants to empty its hand fast. The rest is ~24–28 threats, a handful of burn or pump for reach, and maybe 2–4 pieces of disruption. Example split: 18 lands, 26 creatures, 12 spells (burn/pump/removal), 4 flex.

**Midrange (23–25 lands):** A balanced curve peaking at three and four, with some five-drops. Wants to hit every land drop to deploy its threats on curve. Example split: 24 lands, ~14 threats, ~14 removal/interaction, ~8 card advantage and flex.

**Control (25–27 lands):** The highest curve, packed with counters, removal, card draw, and a couple of finishers. It can't afford to miss a land drop because every answer costs mana held up. Example split: 26 lands, ~10 counterspells, ~8 removal, ~8 card draw, ~4 win conditions, plus a few utility lands.

The 60-card rule of thumb: **count your cards at three mana and above.** The more expensive your deck, the more lands you need to reliably cast it. A deck where half the spells cost four-plus mana needs 25+ lands; a deck where everything costs one or two can thrive on 18.

## Counting ramp as lands

Here's the nuance that fixes a lot of "should I run 35 or 38 lands?" confusion: **ramp counts toward your effective mana sources.**

![Sol Ring, the two-mana rock that produces two colorless — the most efficient ramp piece in Commander and the reason ramp-heavy decks can shave a land or two.](/images/blog/magic-the-gathering/mtg-deckbuilding-ratios/sol-ring.jpg)

A mana rock like Sol Ring, a mana dork like a one-drop creature that taps for mana, or a land-fetch spell like Cultivate all function as additional mana. So your real mana density is **lands + ramp**, not just lands. A Commander deck with 37 lands and 12 ramp pieces has 49 effective mana sources, which is plenty.

This is why ramp-heavy decks can run slightly fewer pure lands (35–36) without flooding *or* stumbling — the ramp picks up the slack and fixes colors on top. But there's a trap: **a land-fetch spell like Cultivate effectively is a land** (it puts lands into play), while a mana rock like Sol Ring is an artifact that dies to artifact removal and does nothing to help you hit land drops for cards that need actual lands. So:

- **Land-fetch ramp** (Cultivate, Rampant Growth, fetchlands) can genuinely replace a land slot — it thins your deck and counts as a land drop's worth of mana.
- **Mana rocks and dorks** are extra mana but not lands — they're more fragile and don't satisfy "play a land" requirements. Lean on them, but don't cut your land count to the bone on their account.

Practical version: in Commander, count land-fetch spells as roughly half a land each when deciding your land count, and treat rocks/dorks as a separate acceleration package on top of your ~37 lands.

## Reading your mana curve

Your mana curve is the distribution of your spells by mana value — how many one-drops, two-drops, three-drops, and so on. Two decks with identical land counts can play completely differently based on their curve, so the curve is what tells you whether your land count is actually right.

A healthy curve for most decks is a **bell shape that peaks at two or three mana** and tapers off above five. You want enough cheap plays to do something every early turn, a fat middle where your best cards live, and only a few expensive top-end cards as payoffs. A curve that's flat across the top — lots of fives and sixes — needs more lands and will feel clunky. A curve crammed at one and two mana can run fewer lands and wants to be aggressive.

How to use it to set your land count:

- **Find your "average mana value"** (most deckbuilding sites compute this automatically). Under 2.5 average? You can run fewer lands (17–18 in 60-card). Over 3.5? Push toward the top of the range (24–26).
- **Check for "curve gaps."** If you have nothing to do on turn two, you'll waste early turns — add cheap plays even if they're less powerful.
- **Watch your top end.** More than about 8–10 cards above five mana in a 60-card deck, or a clogged top in Commander, means you'll have dead hands full of cards you can't cast yet. Trim the top or add ramp.

The curve and the land count are the same conversation. You don't set a land count in a vacuum — you set it to match the curve you built.

## Common ratio mistakes

The errors that show up over and over, and the fix for each:

- **Too few lands "to make room for spells."** This is the most common mistake and the most punishing. A deck that can't cast its spells is worse than a deck with one fewer spell. Respect the land count.
- **Cutting card draw.** Card draw feels passive, so it's the first cut — and then the deck runs out of gas and loses long games to the deck that didn't cut it. Especially fatal in Commander.
- **Cutting removal/interaction.** New players want to do their own thing and ignore the opponent's. Then the table's bomb resolves and there's no answer. Run your 8–10 in Commander.
- **Too many situational lands.** Utility lands and a greedy multicolor mana base that comes in tapped will cost you tempo. Most of your lands should produce the colors you need, untapped, when you need them.
- **Ignoring the curve.** A "good cards" pile with no curve awareness will have clunky hands. Build the curve on purpose, then set lands to match it.
- **Copy-pasting a land count without the curve.** "37 lands" is a starting point, not a law. If your Commander deck has a 2.0 average mana value and 14 ramp pieces, 35 lands might be correct. Match the number to your deck.

## Quick Action Checklist

Set your mana before you set anything else:

- [ ] Lock the land count first: ~37 in Commander, 17–24 in 60-card (by curve), 17 in Limited
- [ ] Build the four-job skeleton: ramp, card draw, removal/interaction, threats
- [ ] In Commander, use 10/10/10 — 37 lands, 10 ramp, 10 draw, ~10 interaction, 2–3 wipes
- [ ] In 60-card, raise lands with your curve: aggro 17–20, midrange 23–25, control 25–27
- [ ] Count land-fetch (Cultivate) as ~half a land; treat rocks and dorks as separate ramp
- [ ] Build a curve that peaks at 2–3 mana and tapers above 5
- [ ] Don't cut card draw or removal to "make room" — they're the skeleton, not the flex
- [ ] Compute your average mana value and adjust lands up or down to match it`,
  faq: [
    {
      question: 'How many lands should be in an MTG deck?',
      answer:
        'It depends on deck size and curve. A 60-card constructed deck runs 17–24 lands — aggro at 17–20, midrange at 23–25, control at 25–27 — with the count rising as your curve gets more expensive. A 100-card Commander deck runs about 37 lands plus ramp on top. A 40-card Limited deck runs 17 lands almost every time. Set the count to match your average mana value rather than copying a fixed number.',
    },
    {
      question: 'How many lands in a Commander deck?',
      answer:
        'About 37 lands in a 100-card Commander deck is the default, with ramp on top of that. A low-curve aggressive deck can drop to 35; a top-heavy ramp deck wants 38. Because ramp counts as extra mana sources, a deck with 37 lands and 10–12 ramp pieces has plenty of mana. Land-fetch spells like Cultivate can let you shave a land or two, but mana rocks and dorks do not satisfy land-drop requirements, so do not cut your land count to the bone for them.',
    },
    {
      question: 'What is the 10/10/10 Commander template?',
      answer:
        'The 10/10/10 template is a category skeleton for Commander: 37 lands, 10 ramp pieces, 10 card-draw pieces, and about 10 removal and interaction spells, plus 2–3 board wipes and your commander. That covers roughly 70 cards of structure, leaving about 29 slots for your theme, win conditions, and flex cards. It fixes the most common deckbuilding failure — category imbalance — before you ever debate individual card choices.',
    },
    {
      question: 'How does the mana curve affect how many lands I run?',
      answer:
        'The curve is what determines the right land count. A low curve (average mana value under 2.5) can run fewer lands — 17–18 in a 60-card deck — because you can dump your hand early. A high curve (average over 3.5, lots of five- and six-drops) needs more lands, 24–27, because you cannot afford to miss land drops. Compute your average mana value and the share of cards costing three-plus mana, then set lands to match. Land count and curve are the same decision.',
    },
    {
      question: 'Does ramp count as lands when building a deck?',
      answer:
        'Ramp counts toward your effective mana sources but not all ramp is equal. Land-fetch spells like Cultivate or Rampant Growth put actual lands into play, so they function almost like extra lands and let you shave a land slot. Mana rocks (Sol Ring) and mana dorks are extra mana but are more fragile and do not satisfy "play a land" requirements, so treat them as a separate acceleration package on top of your land count rather than as land replacements.',
    },
    {
      question: 'How many lands in a Limited (draft or sealed) deck?',
      answer:
        'Seventeen lands in a 40-card Limited deck, basically every time. That is the near-universal default for draft and sealed. The rare exceptions are a very aggressive, low-curve deck that can drop to 16, or a top-heavy ramp or control deck that pushes to 18. Unlike constructed, Limited deck sizes are fixed at 40 and the 17-land rule holds across almost all archetypes.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/how-to-build-a-commander-deck', anchor: 'how to build a Commander deck' },
    { href: '/blog/magic-the-gathering/mtg-mana-base-guide', anchor: 'MTG mana base guide' },
    { href: '/blog/magic-the-gathering/best-ramp-spells-commander-mtg', anchor: 'best ramp spells in Commander' },
    { href: '/blog/magic-the-gathering/mtg-deck-archetypes-explained', anchor: 'MTG deck archetypes explained' },
  ],
  externalSources: [
    { url: 'https://magic.wizards.com/en/news/feature/how-build-magic-deck', title: 'Wizards of the Coast — official deckbuilding basics' },
    { url: 'https://scryfall.com/', title: 'Scryfall — card search and mana value data' },
    { url: 'https://edhrec.com/', title: 'EDHREC — Commander deck composition averages' },
  ],
  tldr:
    'Set your mana before anything else. Run about 37 lands in Commander, 17–24 in a 60-card deck (by curve — aggro 17–20, midrange 23–25, control 25–27), and 17 in 40-card Limited. Every deck needs four jobs covered: ramp, card draw, removal/interaction, and threats. In Commander use the 10/10/10 template (37 lands, 10 ramp, 10 draw, ~10 interaction). Build a curve that peaks at 2–3 mana, and let land-fetch ramp like Cultivate shave a land while treating rocks and dorks as separate acceleration.',
};
