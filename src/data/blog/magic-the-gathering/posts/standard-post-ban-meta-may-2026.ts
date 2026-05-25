import type { BlogPost } from '../../blogTypes';

export const standardPostBanMetaMay2026: BlogPost = {
  slug: 'standard-post-ban-meta-may-2026',
  game: 'magic-the-gathering',
  category: 'format-guides',
  topicCluster: 'standard-meta',
  title: "Standard After the May 2026 Ban Wave — What to Brew Now That Cori-Steel Is Gone",
  metaDescription: "MTG Standard after the May 18, 2026 ban wave: all 10 banned cards, the new tier 1 decks, three brewing directions, and which cards just got way better.",
  excerpt: "Ten cards banned in a single swing. Izzet Prowess is dead, Mono-Red is gutted, and Azorius Omniscience lost its engine. Here is what is actually playable now.",
  featuredImagePrompt: "A dark storm cloud passing over a fractured Magic the Gathering card frame, ten red X marks scattered across spell scrolls, dramatic lighting, fantasy painterly style, navy blue and crimson palette",
  publishDate: '2026-05-24T00:00:00.000Z',
  lastUpdated: '2026-05-24T00:00:00.000Z',
  primaryKeyword: 'standard post ban meta may 2026',
  secondaryKeywords: [
    "mtg standard may 2026 bans",
    "standard meta after bans",
    "cori-steel cutter ban",
    "best standard decks may 2026",
    "what to play standard 2026",
    "standard tier list post ban"
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'monthly',
  evergreen: false,
  readingTimeMin: 10,
  toc: [
    { id: 'the-10-bans-at-a-glance', label: 'The 10 bans at a glance', level: 2 },
    { id: 'why-wizards-swung-this-hard', label: 'Why Wizards swung this hard', level: 2 },
    { id: 'what-survived-and-is-now-tier-1', label: 'What survived and is now tier 1', level: 2 },
    { id: 'three-brewing-directions-for-week-1-post-ban', label: 'Three brewing directions for week 1 post-ban', level: 2 },
    { id: 'cards-that-just-got-way-better', label: 'Cards that just got way better', level: 2 },
    { id: 'what-to-wait-on', label: 'What to wait on', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
    { id: 'faq', label: 'FAQ', level: 2 }
  ],
  content: `The May 18, 2026 ban wave was the largest Standard hit since Affinity. Ten cards gone in one day. Izzet Prowess is dead. Mono-Red lost both Heartfire Hero and Monstrous Rage in the same swing. Azorius Omniscience lost Abuelo's Awakening, which was the only reason the deck functioned. Whatever you were playing two weeks ago, you are probably not playing it now.

This is the cleanup article. The 10 cards, why each one got hit, what survived the wipe, and three directions to brew toward for the next month before the June 30 B&R update.

## The 10 bans at a glance

Here is the full list with the deck each card was anchoring.

| Banned Card | Primary Deck | Why It Got Hit |
|---|---|---|
| Cori-Steel Cutter | Izzet Prowess | Cheap, undercosted threat that defined the top deck. Also Pioneer-banned the same day. |
| Heartfire Hero | Mono-Red Aggro | One-mana 1/1 that pushed Mono-Red over the line into tier 0 |
| Monstrous Rage | Mono-Red / Prowess | Universal one-mana pump that fueled every aggressive deck |
| Hopeless Nightmare | Mono-Black Discard | Made early discard too easy and too cheap |
| Proft's Eidetic Memory | Izzet Prowess | Card-draw engine that turned Prowess into a value deck |
| Up the Beanstalk | 5C Beanstalk Control | Card-draw stapled to a cheap enchantment that snowballed control mirrors |
| This Town Ain't Big Enough | Multiple | Cheap bounce-with-upside that warped tempo math |
| Screaming Nemesis | Mono-Red | Closed games too fast against fair decks |
| Vivi Ornitier | Mono-Red / Prowess | Recurring two-mana threat with too much reach |
| Abuelo's Awakening | Azorius Omniscience | The only payoff that made Omniscience castable in Standard |

Ten cards. Three archetypes effectively deleted. The previous largest Standard ban wave was the 2005 Affinity hit, and this one matches it in scope.

## Why Wizards swung this hard

The Pro Tour Strixhaven data tells the story. Izzet Prowess was **30.5% of the Pro Tour field**. Flow State, the prowess engine, was in **34.8% of decks** at the event. When a single archetype is more than 30% of a Pro Tour field, the format is broken at the top.

The metagame data backed it up. Izzet Prowess held somewhere between 12% and 18% of the overall Standard meta depending on the source, and it was the deck most likely to win when piloted by a strong player. Mono-Red was the second pillar, and Mono-Red and Izzet Prowess shared three of the banned cards (Monstrous Rage, Heartfire Hero, Vivi Ornitier).

Wizards has been clear about their post-pandemic ban philosophy. They would rather hit hard and decisively than do the slow drip of one-card-at-a-time bans that defined Standard from 2018 to 2021. This is the result. Ten cards in one swing, kill the dominant deck, kill the second-most-played deck, and kill the one combo deck that was eating up the rest of the room.

> The previous Standard ban wave to come close to this was the August 2021 wave that hit Alrund's Epiphany, Faceless Haven, and Divide by Zero. Three cards. This wave is more than triple that.

The Abuelo's Awakening ban is the most interesting one. Azorius Omniscience was a niche deck, maybe 4 to 6% of the meta. Wizards hit it anyway because the play pattern was unfun and because the deck was about to spike at the next Open. That is a proactive ban, not a reactive one.

## What survived and is now tier 1

Three decks survived the wipe intact and are now defining the format.

**Selesnya Landfall** is the top deck and the Pro Tour Strixhaven winner. Nathan Steuer took it down playing Selesnya Landfall in a mirror final against Christoffer Larsen the weekend before the bans, and the deck did not lose a single card. Now it is the deck to beat. The plan is the same as it always was. Ramp into landfall payoffs, drop a Scute Swarm or a Felidar Retreat, win on turn five or six. Our [Pro Tour winning Selesnya Landfall deck guide](/blog/magic-the-gathering/selesnya-landfall-pro-tour-strixhaven-winning-deck) has the full 75 and sideboard breakdown.

**Mono-Green Landfall** is the more aggressive sibling. It cuts white for more ramp and bigger threats, plays a tighter mana base, and lives on landfall triggers from cheap ramp spells. Tier 1, second-most-played deck in the format right now.

**4/5C Control** picked up Up the Beanstalk's slack by leaning harder on Sunfall and Cut Down. The deck is slower than it was, but it has more removal and a more flexible mana base. If you like late-game value, this is the deck for week one.

**Jeskai Control** is also legitimate. Cut Down plus Sunfall plus Memory Deluge is the backbone, and the deck plays enough counterspells to handle the slower aggro decks that will be everywhere in week one.

**Izzet Spellementals** is the survivor from the Izzet Prowess wreckage. Without Cori-Steel and without Proft's Eidetic Memory, the deck is gutted, but the Spellementals package still works. It is tier 2, not tier 1, but it is the most experienced pilot pool in the format and will overperform in the first few weeks while everyone is still figuring out the meta.

For the green deck specifically, our [best green cards in MTG guide](/blog/magic-the-gathering/best-green-cards-magic-the-gathering) covers the staples and the landfall package in detail.

## Three brewing directions for week 1 post-ban

You have about six weeks until the next B&R window on June 30. That is enough time to brew, test, and lock in a deck before the next round of updates.

**Direction 1: Lean into the Landfall mirror.** Selesnya Landfall is going to be 25 to 35% of the meta in week one. If you cannot beat the mirror, you cannot win the format. Either play Landfall yourself and tune the sideboard for the mirror, or build a deck that explicitly beats Landfall. Mono-Black Midrange with cheap removal and discard is the obvious answer. Sheoldred plus Cut Down plus Duress is a real plan against a deck that wants to ramp into big creatures.

**Direction 2: Find a new aggro shell.** Mono-Red is gutted but not dead. Heartfire Hero is gone, Monstrous Rage is gone, but Slickshot Show-Off is still legal and the burn package still works. A leaner Mono-Red list with Lightning Strike, Play with Fire, and the surviving one-drops is probably tier 2 but underexplored. If you are a Mono-Red main, this is the time to figure out what the new shell looks like.

**Direction 3: Build a real control deck.** Up the Beanstalk is gone, which means the cheap card-draw engine that defined 5C Beanstalk is out. But Memory Deluge is still legal, Sunfall is still legal, and the removal suite is deeper than it has been in years. Jeskai or Esper Control is a real direction if you have the patience to play 40-minute matches.

> Week one of any post-ban Standard is the most volatile period in the format. Brewers overcorrect, decklists are unrefined, and the best players win because they pick the most-resilient shell, not the most-broken one.

## Cards that just got way better

When 10 cards leave a format, the cards that survived and were previously held down get a massive boost.

**Sheoldred, the Apocalypse** was always good. With Mono-Red effectively gutted, she is now the single best four-drop in the format. The life-gain matters more without Heartfire Hero and Monstrous Rage to push lethal through. **[Verify current price]** because she will spike.

**Beza, the Bounding Spring** was a tier 2 finisher in pre-ban Standard. With the format slowing down, she gets to attack more. Expect to see her in green midrange decks immediately.

**Sunfall** is the best board wipe in Standard and now there are fewer flash plays to dodge it. Every white-based deck should be running three or four copies.

**Long River's Pull** and the other ramp spells get better in a format where the fastest deck no longer kills on turn three. If you can ramp into turn-four threats safely, ramp wins.

**Tishana's Tidebinder** is a sleeper hit. With Izzet Prowess gone, blue decks that were too slow before are now viable, and Tidebinder is the answer to every triggered or activated ability that defined the old format.

**Cut Down** was already a four-of in every black deck. Now it kills almost every relevant creature in the new meta because the threat density at one and two mana dropped sharply with the bans.

For the new set cards specifically, the [Secrets of Strixhaven best Standard cards](/blog/magic-the-gathering/secrets-of-strixhaven-best-standard-cards) breakdown covers which Strixhaven mythics and rares are real in the new meta versus draft chaff.

## What to wait on

The next scheduled B&R is June 30, 2026. That is six weeks of testing time. Here is what to be cautious about.

**Do not commit to a tier 2 deck if it has obvious weaknesses against Landfall.** Selesnya Landfall is going to dominate week one and the format will warp around answering it. A deck that goes 50/50 against Landfall but 70/30 against everything else is still a worse pick than a deck that goes 55/45 against Landfall and 60/40 against the field.

**Watch for the Wizards balance team to telegraph the next bans.** Selesnya Landfall being 30%+ of the meta is exactly the situation that triggered this ban wave. If the deck consolidates above 25% meta share in the next four weeks, expect either Scute Swarm or a key ramp piece to eat a ban on June 30. Building a deck that depends on a single fragile card in the survivor list is a risk.

**The reprint sets coming this summer might change things.** Wizards has not announced what is in the next set, but if the spoilers drop in late June, expect a brief window of pre-release speculation that will move card prices. Buy reactively, not speculatively.

**Sideboards are everything right now.** With the format unsettled, the deck that has the most flexible sideboard wins. Pack hate for the Landfall mirror, hate for graveyard decks (Izzet Spellementals leans on the yard), and at least two pieces of generic removal that handle Sheoldred.

## Quick Action Checklist

If you are jumping into Standard this weekend, this is the floor.

- [ ] **Pick one of three decks: Selesnya Landfall, Mono-Green Landfall, or a Control shell.** These are the proven tier 1 picks.
- [ ] **If you cannot afford Landfall, play Mono-Black Midrange with Sheoldred.** It is the best counter-deck to the format and the mana base is cheap.
- [ ] **Three to four Sunfall in your sideboard if you play white.** It is the answer to every aggro shell in the format.
- [ ] **Three to four Cut Down in your sideboard if you play black.** It kills almost every relevant creature now that the threat density dropped.
- [ ] **Do not buy into a tier 2 deck on speculation.** Wait for week two results before committing dollars to a brew.
- [ ] **Test the Landfall mirror with a friend.** It is the most important matchup in the format and it is also the most experience-dependent.
- [ ] **Track the metagame on MTGGoldfish and mtgdecks.net through June 30.** The B&R window is six weeks out and the meta will shift twice in that window.

If you want a refresher on what each color is bringing to the table, we have a [color-by-color breakdown](/blog/magic-the-gathering/best-green-cards-magic-the-gathering) of the staples that survived the wipe.`,
  faq: [
    {
      question: "How many cards were banned in Standard on May 18, 2026?",
      answer: "Ten cards. Cori-Steel Cutter, Heartfire Hero, Monstrous Rage, Hopeless Nightmare, Proft's Eidetic Memory, Up the Beanstalk, This Town Ain't Big Enough, Screaming Nemesis, Vivi Ornitier, and Abuelo's Awakening. It is the largest Standard ban wave since Affinity in 2005."
    },
    {
      question: "Is Izzet Prowess still playable?",
      answer: "Not in its previous form. Cori-Steel Cutter and Proft's Eidetic Memory are gone, which were the two engines holding the deck together. Izzet Spellementals is the surviving shell from that color pair, and it is tier 2 at best. If you main blue-red, the Spellementals build is the closest thing to the old deck."
    },
    {
      question: "What is the best deck in Standard right now?",
      answer: "Selesnya Landfall. Nathan Steuer won Pro Tour Strixhaven with it the weekend before the bans, and the deck did not lose a single card to the ban wave. Mono-Green Landfall is a close second. Both decks are tier 1 and combined make up roughly 35 to 45% of the meta in week one."
    },
    {
      question: "Why did Wizards ban so many cards at once?",
      answer: "Wizards has shifted to a hit-hard, hit-once ban philosophy. Izzet Prowess was over 30% of the Pro Tour Strixhaven field, Mono-Red was second, and Azorius Omniscience was about to spike. Rather than do the slow one-card-at-a-time bans of previous eras, they cleaned house in one swing."
    },
    {
      question: "When is the next Standard B&R update?",
      answer: "June 30, 2026. That gives the format roughly six weeks to settle before Wizards looks at it again. If Selesnya Landfall consolidates above 25% meta share in that window, expect at least one Landfall card to get hit."
    },
    {
      question: "Should I rotate my collection now?",
      answer: "No Standard rotation is scheduled for 2026. The current Standard card pool includes everything from Wilds of Eldraine forward through Secrets of Strixhaven. Your collection is safe through 2026 unless Wizards announces an off-cycle change, which is unlikely."
    },
    {
      question: "Is Mono-Red dead in Standard?",
      answer: "Mostly. Heartfire Hero, Monstrous Rage, Screaming Nemesis, and Vivi Ornitier are all gone, which is the four cards that defined the deck. Slickshot Show-Off and the burn package are still legal, so a leaner Mono-Red Burn shell is possible but it is tier 2 at best for the first few weeks."
    }
  ],
  internalLinks: [
    { href: '/blog/magic-the-gathering', anchor: 'all Magic: The Gathering posts' },
    { href: '/blog/magic-the-gathering/selesnya-landfall-pro-tour-strixhaven-winning-deck', anchor: 'Pro Tour winning Selesnya Landfall deck guide' },
    { href: '/blog/magic-the-gathering/best-green-cards-magic-the-gathering', anchor: 'best green cards in MTG guide' },
    { href: '/blog/magic-the-gathering/secrets-of-strixhaven-best-standard-cards', anchor: 'Secrets of Strixhaven best Standard cards' },
    { href: '/blog/magic-the-gathering/best-white-cards-magic-the-gathering', anchor: 'best white cards in MTG' },
    { href: '/blog/magic-the-gathering/best-red-cards-magic-the-gathering', anchor: 'best red cards in MTG' },
    { href: '/blog/magic-the-gathering/best-blue-cards-magic-the-gathering', anchor: 'best blue cards in MTG' },
    { href: '/blog', anchor: 'Mythras blog' }
  ],
  externalSources: [
    { url: 'https://magic.wizards.com/en/news/announcements/banned-and-restricted-may-18-2026', title: 'Wizards of the Coast — Banned & Restricted May 18, 2026' },
    { url: 'https://www.mtggoldfish.com/metagame/standard', title: 'MTGGoldfish — Standard Metagame' },
    { url: 'https://mtgdecks.net/Standard', title: 'mtgdecks.net — Standard Decklists' },
    { url: 'https://magic.gg/news', title: 'magic.gg — Tournament Coverage and Pro Tour Results' }
  ],
  tldr: "The May 18, 2026 Standard ban wave hit 10 cards in one swing — the largest since Affinity in 2005. Izzet Prowess is dead, Mono-Red is gutted, and Azorius Omniscience lost its engine. Selesnya Landfall is the new tier 1 (the Pro Tour Strixhaven winner) with Mono-Green Landfall and 4/5C Control behind it. Sheoldred, Sunfall, and Cut Down all just got way better. Next B&R is June 30, 2026.",
  itemList: {
    name: 'Standard Ban List — May 18, 2026',
    items: [
      { name: 'Cori-Steel Cutter', description: 'Izzet Prowess. Undercosted threat that defined the top deck. Also Pioneer-banned the same day.' },
      { name: 'Heartfire Hero', description: 'Mono-Red Aggro. One-mana 1/1 that pushed Mono-Red over the line into tier 0.' },
      { name: 'Monstrous Rage', description: 'Mono-Red and Prowess. Universal one-mana pump that fueled every aggressive deck.' },
      { name: 'Hopeless Nightmare', description: 'Mono-Black Discard. Made early discard too easy and too cheap.' },
      { name: "Proft's Eidetic Memory", description: 'Izzet Prowess. Card-draw engine that turned Prowess into a value deck.' },
      { name: 'Up the Beanstalk', description: '5C Beanstalk Control. Card-draw stapled to a cheap enchantment that snowballed control mirrors.' },
      { name: "This Town Ain't Big Enough", description: 'Multiple decks. Cheap bounce-with-upside that warped tempo math.' },
      { name: 'Screaming Nemesis', description: 'Mono-Red. Closed games too fast against fair decks.' },
      { name: 'Vivi Ornitier', description: 'Mono-Red and Prowess. Recurring two-mana threat with too much reach.' },
      { name: "Abuelo's Awakening", description: 'Azorius Omniscience. The only payoff that made Omniscience castable in Standard.' },
    ],
  },
};
