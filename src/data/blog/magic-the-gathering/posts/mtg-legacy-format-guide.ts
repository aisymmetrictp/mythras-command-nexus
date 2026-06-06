import type { BlogPost } from '../../blogTypes';

export const mtgLegacyFormatGuide: BlogPost = {
  slug: 'mtg-legacy-format-guide',
  game: 'magic-the-gathering',
  category: 'format-guides',
  topicCluster: 'legacy-format',
  title: 'Magic: The Gathering Legacy Format Guide: Where to Start',
  metaDescription:
    'New to MTG Legacy? What the eternal format is, the dual lands and Reserved List, Force of Will, the archetypes, and how to get in via proxies and Magic Online.',
  excerpt:
    "Legacy is the format where almost every card ever printed is legal and a single land can cost more than a console. Here is what Legacy actually is, the archetypes that define it, and how a new player gets in without selling a kidney.",
  featuredImagePrompt:
    'A dark, otherworldly underground ocean cavern glowing with blue and black light, a single shaft of light over still water, painterly fantasy art, no text',
  heroImage: '/images/blog/magic-the-gathering/mtg-legacy-format-guide/underground-sea.jpg',
  heroImageAlt:
    'Underground Sea, an original dual land on the Reserved List that taps for blue or black and anchors Legacy manabases — and the card that explains the format\'s cost.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-legacy-format-guide/underground-sea.jpg',
      sourceUrl: 'https://scryfall.com/card/vma/323/underground-sea',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-legacy-format-guide/force-of-will.jpg',
      sourceUrl: 'https://scryfall.com/card/dmr/50/force-of-will',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-legacy-format-guide/brainstorm.jpg',
      sourceUrl: 'https://scryfall.com/card/dsc/113/brainstorm',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
  ],
  publishDate: '2026-06-06T00:00:00.000Z',
  lastUpdated: '2026-06-06T00:00:00.000Z',
  primaryKeyword: 'mtg legacy format guide',
  secondaryKeywords: [
    'what is legacy mtg',
    'how to start playing legacy mtg',
    'mtg legacy archetypes',
    'legacy reserved list dual lands',
    'best legacy decks for beginners',
    'legacy banned list mtg',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'what-is-legacy-in-mtg', label: 'What is Legacy in MTG', level: 2 },
    { id: 'the-card-pool-nearly-everything-ever-printed', label: 'The card pool: nearly everything ever printed', level: 2 },
    { id: 'the-reserved-list-and-why-legacy-costs-what-it-costs', label: 'The Reserved List and why Legacy costs what it costs', level: 2 },
    { id: 'the-pillars-blue-cantrips-and-free-counters', label: 'The pillars: blue cantrips and free counters', level: 2 },
    { id: 'the-banned-list-and-what-it-tells-you', label: 'The banned list and what it tells you', level: 2 },
    { id: 'the-archetype-families', label: 'The archetype families', level: 2 },
    { id: 'how-a-new-player-actually-gets-in', label: 'How a new player actually gets in', level: 2 },
    { id: 'common-new-player-mistakes', label: 'Common new-player mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Legacy is the format where a single land costs more than the deck most people bring to Friday Night Magic. That is not hyperbole — an original dual land like Underground Sea trades for hundreds of dollars, and a tuned Legacy deck routinely runs four of them. So before anything else, let us be honest about the elephant in the room: Legacy is the most expensive constructed format to buy into in paper, and the reason why is a specific, deliberate decision Wizards made decades ago that they have promised never to undo.

But the price tag is also the only genuinely scary thing about Legacy, and it has a workaround that has quietly become the default for new players. The format itself is one of the best Magic has ever produced: a deep, non-rotating sandbox with thirty years of cards, defined by the most powerful interactive spells ever printed. Here is what Legacy actually is, the cards that make it tick, the archetypes everything sorts into, and a realistic plan for getting in. Every legality call here has been checked against Scryfall's current data.

## What is Legacy in MTG

Legacy is a 60-card constructed format, structurally identical to Modern and Pioneer: minimum 60-card deck, a 15-card sideboard, up to four copies of any non-basic card, played one-on-one in best-of-three with sideboarding between games. If you have played any 60-card format, you already know how a Legacy game is shaped.

What makes it Legacy is the card pool. It is an **eternal format**: non-rotating and pulling from nearly the entire history of the game — every set from Alpha in 1993 forward is legal unless a specific card is banned. That puts it one rung below Vintage, the only format with a deeper pool. The practical difference is that Vintage merely *restricts* the most broken cards (the Power Nine, Black Lotus, and friends are limited to one copy each), while Legacy outright *bans* them. So Legacy gives you almost the full card pool minus the handful of cards too degenerate to allow in fours.

Sitting at the top of the "fair" eternal ladder, Legacy is where you go when Modern and Pioneer feel too restricted. It is fast, interactive, and rewards deep mastery of a single deck more than any other competitive format.

## The card pool: nearly everything ever printed

Legacy's pool is effectively "all of Magic." Cards from 1993 sit next to cards printed last month, and they all play together. That depth is the format's identity: the best cantrip, free counterspell, tutor, and fast mana from any era are all on the table at once, which means the floor for what a card has to do to see play is brutally high.

This has two consequences worth internalizing early. First, **power level is enormous and stable.** Because the pool is so deep, new sets rarely shake Legacy the way they shake Standard — a new card has to beat thirty years of competition to make the cut, and most do not. Legacy metagames move slowly and reward investment. Second, **old cards never stop being relevant.** The best blue cantrip in the format, Brainstorm, was printed in 1995 and is still a four-of in a huge share of decks. Barring a ban, a Legacy card is legal forever — it does not rotate.

The flip side is that the pool's depth is exactly what makes the manabase expensive, which brings us to the part of Legacy that scares everyone off.

## The Reserved List and why Legacy costs what it costs

Here is the single most important thing to understand about Legacy's economy: the **Reserved List.** In the mid-1990s, Wizards published a list of cards it promised it would **never reprint** — no functional reprints, no new printings, ever — as a goodwill gesture to collectors who were furious about reprints tanking the value of their cards. That promise still stands today.

![Underground Sea, one of the ten original dual lands on the Reserved List — it taps for blue or black with no drawback, will never be reprinted, and routinely costs hundreds of dollars.](/images/blog/magic-the-gathering/mtg-legacy-format-guide/underground-sea.jpg)

The reason that matters for Legacy specifically is the **original dual lands.** The ten "ABUR" dual lands — Underground Sea, Volcanic Island, Tropical Island, Tundra, and the rest — tap for two colors with no drawback whatsoever: no life loss, no entering tapped, no condition. They are the best mana-fixing lands ever printed, they are on the Reserved List, and a competitive Legacy manabase wants four of the ones in its colors. Because supply is permanently frozen and demand only grows, a playset of a single dual land can run several hundred to over a thousand dollars depending on the printing.

Other Reserved List staples, like Lion's Eye Diamond for storm combo, pile onto the bill. **This is the real, unavoidable cost of paper Legacy** if you want the genuine article — Wizards has reaffirmed the Reserved List policy repeatedly, so this is not a "wait for the reprint" situation. The good news is that this exact problem created the on-ramp most new players actually use, which we will get to.

## The pillars: blue cantrips and free counters

Strip away the price tag and Legacy is, at its competitive core, a blue format. Two card types define how the best decks play, and understanding them tells you more about Legacy than any decklist.

**Cheap blue cantrips smooth every draw.** Brainstorm — draw three, put two back — is the engine. For a single blue mana it lets you dig, hide cards from discard, and set up your next draws, and combined with fetch lands that shuffle away the cards you put back, it is one of the most powerful one-mana effects in the game. Ponder and Preordain do similar work. This is why so many Legacy decks are blue at their core: the cantrips let a deck play fewer lands, find its key pieces, and never flood or screw the way lesser decks do.

![Force of Will, the free counterspell that defines Legacy — pay 1 life and exile a blue card from your hand instead of paying its mana cost, and counter any spell even with no mana untapped.](/images/blog/magic-the-gathering/mtg-legacy-format-guide/force-of-will.jpg)

**Force of Will is the format's referee.** It counters any spell, and you can cast it for free by paying 1 life and exiling a blue card from your hand instead of paying its mana cost. That "free" part is everything: in a format with turn-one and turn-two kills, the only way to interact with a combo deck on the play is a counterspell you can cast with no mana available. Force of Will is why Legacy combo decks cannot simply ignore interaction — the blue decks are always holding a free "no." A huge amount of Legacy skill is the dance around Force of Will: baiting it, playing around it, or jamming through it.

![Brainstorm, the one-mana blue cantrip printed in 1995 and still a four-of in modern Legacy — draw three cards and put two back, smoothing every draw and hiding cards from disruption.](/images/blog/magic-the-gathering/mtg-legacy-format-guide/brainstorm.jpg)

Together these two cards explain the format's texture: games are fast, but the blue decks have the cheapest card selection and the only free interaction, so the central tension is always "can the unfair deck go off before the fair deck says no?"

## The banned list and what it tells you

Legacy has a banned list, and reading it is the fastest way to understand the format's guardrails. Wizards bans a card when it is too fast, consistent, or oppressive even by Legacy's standards. Crucially, the **Power Nine and other Vintage-restricted cards are flat-out banned in Legacy** — Black Lotus and the original Moxen are too explosive to allow four copies, so they live in Vintage. (Note the distinction: Black Lotus is *banned* in Legacy but only *restricted* in Vintage. Famous does not mean legal.)

Beyond the busted artifacts, the banned list is a graveyard of cards that warped the format: Deathrite Shaman (a one-mana "planeswalker" that fixed mana and attacked the graveyard too well), Sensei's Divining Top (interminably slow games), Oko, Thief of Crowns (turned everything into a 3/3 Elk), and recent Modern-era power like Ragavan, Nimble Pilferer. Several were the best card in their archetype right up until the ban.

The lesson is the one every eternal format teaches: **a banned card is not a deck you can build, so confirm current legality on Scryfall before you buy a playset.** Follow the [Wizards banned and restricted announcements](https://magic.wizards.com/en/banned-restricted-list) so a ban never catches you mid-purchase — and in Legacy, where cards are this expensive, that discipline saves real money.

## The archetype families

Almost every Legacy deck sorts into one of four families. Learning these is more durable than learning any single list, because specific decks rise and fall while the families stay constant.

**Tempo.** The defining Legacy archetype, historically the blue-based "Delver" decks. They play a cheap evasive threat, protect it with cheap countermagic (including free spells like Force of Will and Daze) and efficient removal, and win by being faster and more interactive than fair decks while disrupting combo. Brainstorm and fetch lands keep them consistent on few lands. If Legacy has a "default" deck, it is blue tempo.

**Control.** Counterspells, removal, card advantage, and a small set of finishers or a slow lock. Legacy control is usually blue-based and grinds the opponent out over a long game, leaning on the format's premium card selection and Force of Will to never miss the answer it needs. It is the hardest family to pilot but enormously rewarding once it clicks.

**Combo.** Decks built to win on the spot by assembling a specific interaction, often as early as turn one or two — storm decks (chain cheap spells into a lethal Tendrils of Agony) and reanimator shells (discard a giant creature, then cheat it in with Reanimate). Combo folds to cheap interaction and the omnipresent Force of Will, which is precisely the tension that keeps it honest.

**Aggro and prison.** The non-blue side of the format. Aggressive decks — colorless artifact-aggro and Stompy-style shells — race the blue decks with efficient threats and disruption like Wasteland (a land that blows up an opponent's nonbasic land), while "prison" decks lock the opponent out with taxes and resource denial. Not coincidentally, this is where the cheapest Legacy decks live, because many of them skip the dual lands entirely.

If you only remember one thing: Legacy is **a fast, blue-dominated format where free interaction keeps the combo decks in check.** Tempo applies pressure, control grinds, combo tries to go off before anyone can say no, and the non-blue decks attack the manabase or the life total directly.

## How a new player actually gets in

The honest answer is not "save up for dual lands." It is "play Legacy the way most new players actually play it." Here is the real plan.

- **Use proxies for casual and local play.** This is the big one. A massive share of the Legacy community plays with proxies — printed stand-ins for expensive cards — in casual games and at many local shops. Proxy the duals, proxy the Force of Wills, and you can play real, tuned Legacy decks for the cost of printer ink. Sanctioned tournaments require real cards, but most Legacy games are not sanctioned, and the community welcomes proxies precisely because of the Reserved List.
- **Play online first.** Magic Online (MTGO) is the home of competitive Legacy, and the digital cards are a tiny fraction of paper prices — you can buy a full deck for less than one paper dual land, play daily events and leagues, and learn the format before spending a cent on cardboard.
- **Start with a non-blue, non-dual deck.** If you want paper without the Reserved List bill, the cheapest real entry points are the aggro and prison decks that run basics instead of duals — colorless artifact aggro and Stompy-style shells skip the most expensive part of the format entirely.
- **Buy the manabase last, and reuse it.** If you do commit to paper blue Legacy, the dual lands are the most expensive and most reusable piece — they hold value better than almost anything in Magic. Buy them last, once you are sure you love the deck, and treat them as a long-term hold.
- **Buy a known list, not a brew.** Copy a proven tournament list from a recent results site. In a format this expensive, buying into a trap is a costly mistake.
- **Play 30-plus games before judging a deck.** Legacy has a steeper learning curve than any other format, and the first ten games are mostly you learning what your own deck does and how to sequence cantrips.

In 2026, "playing Legacy" for most newcomers means MTGO and proxies first, with paper as an optional, deliberate, long-term investment — not a barrier to entry.

## Common new-player mistakes

- **Assuming you have to buy paper duals to start.** You do not. Proxies and MTGO are how most people play Legacy, and the community expects it.
- **Sequencing cantrips badly.** Brainstorm without a way to shuffle (a fetch land) just rearranges your draws and can strand bad cards on top. Learning when and how to crack Brainstorm is half of piloting blue Legacy.
- **Playing into Force of Will.** Against blue decks, jamming your key spell into open mana with no plan for a free counter is how games are lost. Bait it or play around it.
- **Ignoring the sideboard.** Best-of-three means the sideboard is a third of your deckbuilding, and Legacy's combo matchups in particular are often decided in games two and three by hate cards.
- **Buying an expensive deck before you know you like it.** In a format where the manabase alone can cost four figures, test on MTGO or with proxies first. Always.

If you are coming from another format, our [Modern format guide](/blog/magic-the-gathering/mtg-modern-format-guide) and [Pioneer format guide](/blog/magic-the-gathering/mtg-pioneer-format-guide) cover the cheaper non-rotating entry points, the [Commander format guide](/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start) covers the casual multiplayer route, and [MTG deck archetypes explained](/blog/magic-the-gathering/mtg-deck-archetypes-explained) breaks the tempo/control/combo/aggro families down in more depth.

## Quick Action Checklist

- Decide how you like to win: pressuring with threats (tempo), grinding (control), comboing off (combo), or attacking the manabase and life total (aggro/prison).
- Play your first games on Magic Online or with proxies — that is how most of the Legacy community actually plays, thanks to the Reserved List.
- If you want cheap paper, start with a non-blue deck that runs basics instead of dual lands (colorless artifact aggro or a Stompy shell).
- Copy a proven tournament list from a recent results site instead of brewing your own.
- Check every card's current Legacy legality on Scryfall — the banned list includes famous cards like Black Lotus, Oko, and Ragavan.
- Buy your dual lands last and treat them as a long-term, value-holding investment, not a barrier to entry.
- Build the sideboard, not just the main 60 — Legacy combo matchups are won in games two and three.
- Play 30-plus games before judging a deck; Legacy has the steepest learning curve of any constructed format.`,
  faq: [
    {
      question: 'What is the Legacy format in MTG?',
      answer:
        'Legacy is a non-rotating, eternal 60-card constructed format. You build a minimum 60-card deck with a 15-card sideboard, run up to four copies of any non-basic card, and play one-on-one, usually best-of-three. Its card pool spans nearly the entire history of Magic, from 1993 forward, minus a banned list. It sits just below Vintage on the power ladder — Legacy bans the most broken cards (like Black Lotus) that Vintage merely restricts.',
    },
    {
      question: 'Why is MTG Legacy so expensive?',
      answer:
        'Because of the Reserved List. In the 1990s Wizards promised never to reprint a specific list of cards, which includes the ten original dual lands (Underground Sea, Volcanic Island, and the rest). Those duals are the best mana-fixing lands ever printed and a competitive Legacy deck wants four of them, but supply is permanently frozen while demand grows, so a single playset can cost hundreds to over a thousand dollars. That manabase is the unavoidable cost of paper Legacy.',
    },
    {
      question: 'What is the Reserved List in Magic: The Gathering?',
      answer:
        'The Reserved List is a list of cards Wizards of the Coast has promised never to reprint, originally created in the mid-1990s to protect collectors after reprints devalued their cards. It includes the original dual lands and other early staples. Because these cards can never be reprinted, their supply is fixed forever, which is why Reserved List cards — and the Legacy decks built on them — are so expensive.',
    },
    {
      question: 'How can a new player start playing Legacy cheaply?',
      answer:
        'Three ways. First, use proxies — printed stand-ins for expensive cards — which a large share of the Legacy community accepts in casual and local play because of the Reserved List. Second, play on Magic Online (MTGO), where digital Legacy decks cost a small fraction of paper prices. Third, if you want real paper, start with a non-blue deck that uses basic lands instead of dual lands, such as colorless artifact aggro or a Stompy shell, which skips the most expensive part of the format.',
    },
    {
      question: 'What are the main Legacy archetypes?',
      answer:
        'Almost every Legacy deck is tempo (a cheap evasive threat protected by free counters like Force of Will and Daze, the format\'s default archetype), control (counters, removal, and card advantage, win late), combo (assemble a turn-one or turn-two kill, like storm or reanimator), or aggro/prison (race or lock out the blue decks, often the cheapest decks because they skip dual lands). Free interaction keeps the combo decks in check.',
    },
    {
      question: 'Why is Force of Will so important in Legacy?',
      answer:
        'Force of Will counters any spell, and you can cast it for free by paying 1 life and exiling a blue card from your hand instead of its mana cost. In a format with turn-one and turn-two combo kills, a counterspell you can cast with no mana available is the only reliable way to interact on the draw. Force of Will is why Legacy combo decks cannot simply ignore interaction, and playing around it is one of the format\'s core skills.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/mtg-modern-format-guide', anchor: 'Modern format guide' },
    { href: '/blog/magic-the-gathering/mtg-pioneer-format-guide', anchor: 'Pioneer format guide' },
    { href: '/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start', anchor: 'Commander format guide' },
    { href: '/blog/magic-the-gathering/mtg-deck-archetypes-explained', anchor: 'MTG deck archetypes explained' },
    { href: '/blog/magic-the-gathering/best-counterspells-mtg', anchor: 'Best counterspells in MTG' },
  ],
  externalSources: [
    { url: 'https://magic.wizards.com/en/formats/legacy', title: 'Wizards: Official Legacy Format Page' },
    { url: 'https://magic.wizards.com/en/banned-restricted-list', title: 'Wizards: Official Banned and Restricted List' },
    { url: 'https://scryfall.com/', title: 'Scryfall: MTG Card Database and Legality Data' },
  ],
  tldr:
    'Legacy is MTG\'s eternal 60-card format: nearly every card ever printed is legal, minus a banned list. It is a fast, blue-dominated format built on cheap cantrips like Brainstorm and the free counterspell Force of Will, sorting into tempo, control, combo, and aggro/prison archetypes. It is the most expensive paper format because the original dual lands sit on the Reserved List and can never be reprinted. To start, play on Magic Online or with proxies first — that is how most of the community actually plays — and buy dual lands last, if at all.',
};
