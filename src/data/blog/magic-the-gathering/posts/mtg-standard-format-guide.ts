import type { BlogPost } from '../../blogTypes';

export const mtgStandardFormatGuide: BlogPost = {
  slug: 'mtg-standard-format-guide',
  game: 'magic-the-gathering',
  category: 'format-guides',
  topicCluster: 'standard-format',
  tags: ['standard', 'format-guide', 'beginner', 'rotation', 'constructed'],
  title: 'Magic: The Gathering Standard Format Guide: Where to Start',
  metaDescription:
    'New to MTG Standard? What the format is, how rotation works, the banned list, the archetype families, and how to build your first Standard deck cheaply.',
  excerpt:
    "Standard is the format Wizards balances the hardest and the one new players actually have a shot in. Here is what Standard is, how rotation works, the archetypes that define it, and how to build your first deck without setting money on fire.",
  featuredImagePrompt:
    'A radiant white-armored elemental elk leaping across a sunlit battlefield, gold and green light trailing behind it, painterly Magic: The Gathering art style, no text',
  heroImage: '/images/blog/magic-the-gathering/mtg-standard-format-guide/beza-the-bounding-spring.jpg',
  heroImageAlt:
    'Beza, the Bounding Spring, a four-mana white legendary creature that gives you treasure, life, and a token, a value staple in recent Standard.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-standard-format-guide/beza-the-bounding-spring.jpg',
      sourceUrl: 'https://scryfall.com/card/blb/2/beza-the-bounding-spring',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-standard-format-guide/llanowar-elves.jpg',
      sourceUrl: 'https://scryfall.com/card/fdn/227/llanowar-elves',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-standard-format-guide/cori-steel-cutter.jpg',
      sourceUrl: 'https://scryfall.com/card/tdm/103/cori-steel-cutter',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-standard-format-guide/overlord-of-the-hauntwoods.jpg',
      sourceUrl: 'https://scryfall.com/card/dsk/194/overlord-of-the-hauntwoods',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
  ],
  publishDate: '2026-06-18T00:00:00.000Z',
  lastUpdated: '2026-06-18T00:00:00.000Z',
  primaryKeyword: 'mtg standard format guide',
  secondaryKeywords: [
    'what is standard mtg',
    'how to start playing standard mtg',
    'mtg standard rotation explained',
    'standard format card pool',
    'best standard decks for beginners',
    'standard banned list mtg',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-is-standard-in-mtg', label: 'What is Standard in MTG', level: 2 },
    { id: 'how-rotation-works', label: 'How rotation works', level: 2 },
    { id: 'the-banned-list-and-why-it-matters', label: 'The banned list and why it matters', level: 2 },
    { id: 'what-makes-standard-tick', label: 'What makes Standard tick', level: 2 },
    { id: 'the-archetype-families', label: 'The archetype families', level: 2 },
    { id: 'how-to-build-your-first-standard-deck', label: 'How to build your first Standard deck', level: 2 },
    { id: 'where-to-play-and-track-the-meta', label: 'Where to play and track the meta', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Standard is the format Wizards of the Coast watches like a hawk, bans into the dirt when something breaks it, and balances harder than anything else they print. It's also the format where a brand-new player has the best honest shot at a competitive deck, because the card pool is small, the staples are cheap, and nobody's untapping a 30-year-old dual land across the table. If you're coming into Magic and want to play real, current, competitive decks without taking out a loan, Standard is the front door.

The catch — and the thing that scares people off — is rotation. Standard's card pool shrinks every year, and cards you bought can "leave" the format. That sounds brutal until you understand how it actually works and why it's the reason Standard stays fresh and beatable. Here's what Standard is, how rotation and the banned list shape it, the archetypes that define it, and how to build in without overpaying. Every card legality claim here is checked against Scryfall.

## What is Standard in MTG

Standard is Magic's rotating Constructed format. You build a minimum 60-card deck (plus a 15-card sideboard) using only cards printed in the most recent sets — a rolling window of roughly the last few years of releases. That's the entire premise: a curated, current card pool that turns over on a schedule.

Because the pool is small and recent, Standard has a few defining traits:

- **It's the most-balanced format Wizards maintains.** They print directly into Standard, watch it obsessively, and ban aggressively when something dominates. Problem cards don't linger the way they can in eternal formats.
- **It's cheap to enter relative to older formats.** No reserved-list cards, no 20-year-old staples. The expensive cards are recent mythic rares, and even a top-tier deck is a fraction of a Modern or Legacy list.
- **The meta moves constantly.** Every new set shakes things up, and the yearly rotation resets the board. A deck that's tier one today might lose half its core to rotation next fall.

Compare that to Pioneer or Modern, where the card pool only grows and never rotates. Those formats reward a deep collection and a deck you keep forever. Standard rewards staying current and rebuilding as the format evolves — which is exactly what makes it the best on-ramp.

## How rotation works

Rotation is the one mechanic every Standard player has to internalize, so let's be precise.

Standard contains a rolling set of recent expansions. Once a year — typically in the fall, when the autumn set launches — the oldest sets "rotate out," meaning they're no longer legal in Standard. The cards still exist and still work in non-rotating formats like Pioneer, Modern, and Commander; they just stop being Standard-legal.

What this means in practice:

- **A card you bought has a Standard "shelf life."** A staple from a recent set will be Standard-legal for a few years, then rotate. After that it lives on in Pioneer and beyond.
- **Rotation is a reset, not a loss.** When the oldest sets leave, the dominant decks lose pieces and the metagame reshuffles. New archetypes get room to breathe. This is the feature, not the bug — it's why Standard never ossifies into the same three decks forever.
- **Wizards has changed the rotation length before.** The exact number of sets in the legal window has shifted over the years as they've tuned the format, so always confirm the current set list on the official rules pages rather than assuming.

The practical takeaway for a newcomer: **don't sink a fortune into cards from a set that's about to rotate.** If a set is near the end of its Standard life, the cards in it are about to leave the format you're buying them for. Buy into newer sets, or buy with the understanding that those cards will follow you into Pioneer later.

## The banned list and why it matters

Even with a small, curated pool, things break. When a card or a deck warps Standard badly enough, Wizards bans it via a Banned and Restricted announcement, and it's immediately illegal in the format.

Standard's banlist tends to be short and reactive — Wizards would rather rotation solve problems naturally, so a Standard ban usually means something was genuinely oppressive. A couple of recent examples that show what triggers a ban:

![Cori-Steel Cutter, a two-mana red artifact equipment that was banned in Standard after powering oppressive aggressive and prowess decks.](/images/blog/magic-the-gathering/mtg-standard-format-guide/cori-steel-cutter.jpg)

- **Cori-Steel Cutter** got the axe — it's banned in Standard (and in Pioneer too). A cheap, recurring token-and-equipment engine that pushed aggressive and prowess decks past what the format could answer.
- **This Town Ain't Big Enough** is banned in Standard as well, after enabling too-consistent tempo and bounce loops.
- **Up the Beanstalk** is banned in Standard, where it fueled card-advantage engines that ground every other deck out.

Notice the pattern: each was a cheap engine that generated too much value or tempo for the cost. When a card like that takes over, a ban follows. The reason the banlist matters to a new player is simple — **never buy a deck list without confirming none of its cards have been banned since the list was published.** Banned-and-restricted announcements come out on a schedule, and a list that was tier one last month can be illegal today. Check Scryfall's legality line on each card or the official banlist before you buy.

## What makes Standard tick

A few structural realities define how Standard games actually play out.

**Two-color and three-color decks dominate.** The mana fixing available in any given Standard is good but not infinite — you get dual lands and a handful of fixing pieces, not the perfect mana of eternal formats. So decks tend to be tightly focused on two colors, or three if the payoff justifies the inconsistency.

**Removal and card advantage are king.** Standard is largely a midrange format. Games are decided by who trades resources more efficiently and who's still drawing gas in the late turns. Efficient removal and value engines that refuse to run out of cards are the backbone of most top decks.

![Beza, the Bounding Spring, a four-mana white legendary creature that generates treasure, life, and a token when it enters — a value engine that anchors midrange decks.](/images/blog/magic-the-gathering/mtg-standard-format-guide/beza-the-bounding-spring.jpg)

**Powerful four- and five-drops set the ceiling.** Standard's biggest payoffs tend to be premium midrange creatures and enchantments — cards like Beza, the Bounding Spring and Overlord of the Hauntwoods that come down, generate value immediately, and snowball if unanswered. Building a deck often means asking which of these top-end bombs your colors get and how you protect the turns before you cast them.

**Speed still wins games.** Aggro is always lurking. A format full of value engines is a format that loses to a fast start it can't stabilize against, which keeps cheap, aggressive decks honest and present in every metagame.

## The archetype families

Standard's decks sort into the same broad families you'll see in any Constructed format, with the lineup shifting set to set.

- **Aggro.** Cheap creatures, efficient threats, and reach to close games before the slower decks set up. The default beginner-friendly archetype — low curve, clear gameplan, punishes stumbles. Mono-red and aggressive two-color decks are perennial.
- **Midrange.** The format's center of gravity. Efficient removal, premium creatures, and value engines that win attrition wars. Decks built around bombs like Beza and resilient threats live here, and midrange is usually the safest competitive home base.
- **Control.** Counterspells, sweepers, card draw, and a small number of finishers. Aims to answer everything and win late. Standard control rises and falls with how good the available sweepers and card advantage are in a given format.
- **Ramp / big mana.** Mana acceleration (creatures like Llanowar Elves, or ramp spells) into payoffs the other decks can't cast on curve. A boom-or-bust plan that's strong when the payoffs are worth the setup.
- **Combo / synergy.** Less common in Standard than in older formats because the card pool is shallow, but synergy decks built around a specific engine pop up whenever a set hands them the pieces.

![Llanowar Elves, a one-mana green Elf Druid that taps for green mana, the classic accelerant for ramp and big-mana decks.](/images/blog/magic-the-gathering/mtg-standard-format-guide/llanowar-elves.jpg)

For a newcomer, the honest advice is to **start with aggro or midrange.** Both have clear gameplans, forgive mistakes, and don't require you to understand the entire metagame to pilot well. Control is the hardest archetype to play and the easiest to lose with while you're learning.

## How to build your first Standard deck

Standard is cheap by Magic standards, but you can still waste money. Do it in this order.

1. **Pick a current top deck, don't brew.** Pull a recent tier-one or tier-two list from a results site (see below). Netdecking is not cheating — it's how you learn what a tuned deck looks like before you start changing things.
2. **Confirm legality first.** Run every card through Scryfall's legality line or the official banlist. Make sure nothing has rotated out or been banned since the list was posted. This single step saves the most money and heartbreak.
3. **Buy the lands and the format staples first.** The mana base and the cards that show up across many decks (removal, key two-drops) hold their value and carry over to your next deck. The flashy mythic bombs are where prices spike — buy those last, or proxy them while you test.
4. **Test before you commit.** Play the list on MTG Arena or with proxies before buying paper. You'll often find you don't like the deck, or you'll learn which cards you can cut.
5. **Build the sideboard.** New players skip the 15-card sideboard and then lose to decks they could've beaten. The sideboard is half your deck's win rate in any format with sideboarded games.

The cheapest possible path is **MTG Arena**, where you build Standard digitally from packs and crafting, pay nothing for cardboard, and the format's legality is enforced for you automatically. Most serious Standard players test on Arena and only buy paper for the deck they've settled on.

## Where to play and track the meta

Standard exists in paper at local game stores (Friday Night Magic is the classic entry point) and digitally on MTG Arena, which is the single best place to learn the format because deckbuilding is cheap and matchmaking is instant.

To track the metagame, lean on results aggregators and the official rules resources: tournament results sites that publish decklists, the official Wizards Banned and Restricted page for the current legality, and Scryfall for confirming any individual card's Standard status. Because Standard moves with every set release and ban announcement, the meta you read about today may shift in a month — always sanity-check a list's legality before you buy into it.

## Quick Action Checklist

Use this to get into Standard without wasting money:

- [ ] Understand rotation: the oldest sets leave Standard each year, so don't overbuy a set that's about to rotate
- [ ] Check the official banlist and Scryfall legality before buying any list — bans and rotation can make a deck illegal overnight
- [ ] Start with an aggro or midrange deck; they're forgiving and have clear gameplans
- [ ] Netdeck a current tier-one or tier-two list rather than brewing from scratch
- [ ] Buy lands and format staples first, flashy mythic bombs last
- [ ] Test on MTG Arena or with proxies before committing to paper
- [ ] Don't skip the 15-card sideboard — it's a big chunk of your win rate
- [ ] Track the meta through results sites and re-check legality whenever a new set or ban announcement drops`,
  faq: [
    {
      question: 'What is Standard in Magic: The Gathering?',
      answer:
        'Standard is Magic\'s rotating Constructed format. You build a minimum 60-card deck plus a 15-card sideboard using only cards from the most recent sets — a rolling window of roughly the last few years of releases. Because the card pool is small, current, and heavily balanced by Wizards, Standard is the most beginner-friendly competitive format and the cheapest to enter relative to older formats like Modern or Legacy.',
    },
    {
      question: 'How does rotation work in Standard?',
      answer:
        "Once a year, typically in the fall when the autumn set launches, the oldest sets rotate out of Standard and are no longer legal in the format. The cards still work in non-rotating formats like Pioneer, Modern, and Commander. Rotation keeps Standard fresh by resetting the metagame and giving new archetypes room, so the practical advice is to avoid sinking money into a set that's about to rotate. Wizards has adjusted the rotation window length over the years, so confirm the current legal set list on the official rules pages.",
    },
    {
      question: 'How is Standard different from Pioneer and Modern?',
      answer:
        'Standard rotates — its card pool shrinks every year — while Pioneer and Modern are non-rotating formats whose card pools only ever grow. That makes Standard cheaper and more beginner-friendly, with a smaller pool and a constantly shifting meta, while Pioneer and Modern reward a deep collection and a deck you can keep indefinitely. Many cards rotate out of Standard and find a permanent home in Pioneer or Modern afterward.',
    },
    {
      question: 'Why do cards get banned in Standard?',
      answer:
        "Wizards bans a card when it or the deck built around it warps Standard badly enough that rotation can't fix it naturally. The Standard banlist is short and reactive — recent bans like Cori-Steel Cutter, This Town Ain't Big Enough, and Up the Beanstalk were all cheap engines that generated too much value or tempo for their cost. Always confirm none of a list's cards have been banned since it was published, because a banned-and-restricted announcement can make a deck illegal overnight.",
    },
    {
      question: 'What is the cheapest way to start playing Standard?',
      answer:
        "MTG Arena is the cheapest on-ramp: you build Standard decks digitally from packs and crafting, pay nothing for physical cards, and legality is enforced for you automatically. If you want to play paper, netdeck a current tier-one or tier-two list, confirm every card's legality on Scryfall, buy the lands and format staples first, and test the deck on Arena or with proxies before committing money to the expensive mythic bombs.",
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/mtg-pioneer-format-guide', anchor: 'Pioneer format guide' },
    { href: '/blog/magic-the-gathering/mtg-modern-format-guide', anchor: 'Modern format guide' },
    { href: '/blog/magic-the-gathering/mtg-deck-archetypes-explained', anchor: 'MTG deck archetypes explained' },
    { href: '/blog/magic-the-gathering/mtg-sideboarding-guide', anchor: 'MTG sideboarding guide' },
    { href: '/blog/magic-the-gathering/mtg-mana-base-guide', anchor: 'MTG mana base guide' },
  ],
  externalSources: [
    { url: 'https://magic.wizards.com/en/formats/standard', title: 'Wizards of the Coast — official Standard format page' },
    { url: 'https://magic.wizards.com/en/banned-restricted-list', title: 'Wizards of the Coast — official banned and restricted list' },
    { url: 'https://scryfall.com/search?q=f%3Astandard', title: 'Scryfall — Standard-legal card search and legality data' },
  ],
  tldr:
    "Standard is Magic's rotating Constructed format: 60-card decks built from only the most recent sets, the most heavily balanced and beginner-friendly competitive format. Rotation removes the oldest sets each year, so don't overbuy a set about to rotate, and always check the banlist before buying a list. Start with aggro or midrange, netdeck a current list, buy lands and staples first, and test on MTG Arena before committing to paper.",
};
