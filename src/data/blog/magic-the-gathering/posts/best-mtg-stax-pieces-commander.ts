import type { BlogPost } from '../../blogTypes';

export const bestMtgStaxPiecesCommander: BlogPost = {
  slug: 'best-mtg-stax-pieces-commander',
  game: 'magic-the-gathering',
  category: 'advanced-strategy',
  topicCluster: 'commander-strategy',
  title: 'Best MTG Stax Pieces for Commander, Ranked',
  metaDescription:
    'The best stax pieces in MTG Commander, ranked — Winter Orb, Drannith Magistrate, Smothering Tithe, Rule of Law, and how to play resource denial without making the table hate you.',
  excerpt:
    'Stax is the most hated archetype in Commander and the most misunderstood. Done right, it slows everyone but you. Here are the best resource-denial pieces, ranked, and the asymmetry rule that separates a winning lock from a salt mine.',
  featuredImagePrompt:
    'A massive frozen gear-and-orb mechanism locking a battlefield in ice while one figure moves freely through the frozen scene, cold blue and grey palette, ominous fantasy art, sense of everything grinding to a halt, no text',
  heroImage: '/images/blog/magic-the-gathering/best-mtg-stax-pieces-commander/winter-orb.jpg',
  heroImageAlt:
    'Winter Orb, the two-mana artifact that stops players from untapping more than one land each turn — the iconic mana-denial stax piece in Commander.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-mtg-stax-pieces-commander/winter-orb.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-stax-pieces-commander/smothering-tithe.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-stax-pieces-commander/rule-of-law.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-stax-pieces-commander/drannith-magistrate.jpg',
      sourceUrl: 'https://scryfall.com/',
      license: 'Card images via Scryfall / © Wizards of the Coast',
    },
  ],
  publishDate: '2026-06-28T00:00:00.000Z',
  lastUpdated: '2026-06-28T00:00:00.000Z',
  primaryKeyword: 'best stax pieces commander',
  secondaryKeywords: [
    'best stax cards mtg',
    'mtg resource denial commander',
    'stax pieces cedh',
    'how to play stax commander',
    'asymmetric stax mtg',
    'mana denial commander',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'what-stax-actually-does', label: 'What stax actually does', level: 2 },
    { id: 'the-asymmetry-rule-that-makes-or-breaks-stax', label: 'The asymmetry rule that makes or breaks stax', level: 2 },
    { id: 'the-best-stax-pieces-ranked', label: 'The best stax pieces, ranked', level: 2 },
    { id: 'the-best-budget-stax-pieces', label: 'The best budget stax pieces', level: 2 },
    { id: 'the-categories-of-resource-denial', label: 'The categories of resource denial', level: 2 },
    { id: 'how-to-actually-win-with-stax', label: 'How to actually win with stax', level: 2 },
    { id: 'the-etiquette-and-when-not-to-play-stax', label: 'The etiquette (and when not to play stax)', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Stax is the archetype people threaten to leave the table over. It's also the most misunderstood deck in Commander — most of the hate comes from people who've only ever seen it played *badly*: a player drops Winter Orb, Static Orb, and Stasis, locks the entire game including themselves, and everyone sits in a frozen board state for forty minutes while nothing happens and nobody wins. That's not stax. That's a hostage situation with extra steps.

Played correctly, stax is resource denial that hits your opponents *harder than it hits you* — you build your board, your engine, or your win condition under a tax everyone else is paying and you've prepaid or sidestepped. Smothering Tithe gives *you* Treasure off everyone else's draws. Drannith Magistrate shuts off *opponents'* commanders and graveyard plays while yours work fine. The good stax piece is asymmetric: it taxes the table and exempts you. Below are the best stax pieces in Commander, ranked, with the one rule that separates a winning lock from a salt mine — if it slows you down as much as it slows them, it's a bad stax piece.

Everything is legality-checked against Scryfall, and every cost and effect is accurate as printed. (Stax is not for casual tables — read the etiquette section before you build it.)

## What stax actually does

Stax denies opponents resources faster than they can rebuild, then closes the game while they're locked out. The "resources" come in four flavors — mana, spells per turn, library access, and untapping — and a stax deck stacks pieces across those categories until opponents simply can't function.

The misconception is that stax wins by making the game un-fun until everyone scoops. It doesn't. A good stax deck wins by getting *ahead* under the lock — you resolve your threats and engines while the tax pieces stop everyone else from answering them, then you ride that asymmetry to an actual victory. The lock is the setup; you still need a kill. A stax deck with no win condition is just a player griefing the table, and that's the version everyone rightfully hates.

The format where this shines is cEDH, where fast combo decks try to win on turn three or four and stax exists to push that back to turn eight — long enough for a grindier deck to assemble its own win. But scaled-down stax (the "soft" tax pieces) shows up in plenty of mid-power decks too, as a speed bump that buys you time. If you're new to the format's power tiers, our [Commander brackets guide](/blog/magic-the-gathering/mtg-commander-brackets) explains where stax belongs and where it absolutely does not.

## The asymmetry rule that makes or breaks stax

This is the single most important concept in the archetype, and it's why a list of "best stax pieces" can't just be "most restrictive effects." A stax piece is good in proportion to how *asymmetric* it is — how much it hurts your opponents while sparing or benefiting you.

**Fully asymmetric** (the best): the piece only affects opponents. Drannith Magistrate stops *your opponents* from casting from anywhere but hand — your commander, your flashback, your adventure cards all work. Smothering Tithe taxes *opponents'* draws and pays *you*. These are pure upside; you run them freely.

**Asymmetric in practice** (very good): the piece is symmetric on paper but your deck is built to ignore it. Winter Orb stops everyone from untapping lands — but if you run mana rocks and dorks that untap normally, plus low curve, the orb cripples opponents while you keep casting. Rule of Law limits everyone to one spell a turn, which barely affects a deck built around expensive haymakers but wrecks a combo or storm deck.

**Symmetric (dangerous)**: Stasis, Static Orb, Winter Orb with no way to exempt yourself — these lock *you* too. They're only good if you have a deliberate break: a way to win through the lock, untap selectively, or remove the piece once it's done its job. Run these without a plan and you've locked yourself out of your own game.

The rule in one line: **never run a symmetric stax piece you don't have a plan to break.** Build your mana base and your win condition to operate under your own lock, or pick pieces that only hit opponents in the first place. The proactive version of this same idea — denying spells before they resolve — lives in the [best counterspells guide](/blog/magic-the-gathering/best-counterspells-mtg).

## The best stax pieces, ranked

Ranked on power, asymmetry, and how reliably they buy you the game. Weighted toward Commander and cEDH, where stax matters most.

![Smothering Tithe, the four-mana white enchantment that taxes opponents' draws and makes Treasure tokens for you — the most asymmetric stax piece in the game.](/images/blog/magic-the-gathering/best-mtg-stax-pieces-commander/smothering-tithe.jpg)

1. **Smothering Tithe** — {3}{W}. Whenever an opponent draws a card, that player may pay {2} or you create a Treasure. The single most asymmetric "stax" piece in the game — it taxes every opponent's draw step and *card draw spell* while ramping you with Treasure tokens. In a four-player game it generates absurd amounts of mana off the table's own engines, and there's no downside to you. Auto-include in any white deck that can support it. Commander-legal.
2. **Drannith Magistrate** — {1}{W}. Your opponents can't cast spells from anywhere other than their hands. Two mana to shut off *every* commander, every flashback, every adventure, every cascade and foretell your opponents have — while yours all work. It single-handedly turns off the Command Zone for the rest of the table. One of the best two-drops in Commander, stax or not.
3. **Rule of Law** — {2}{W}. Each player can't cast more than one spell each turn. The premier anti-combo and anti-storm lock. It barely touches a deck built around one big spell a turn, but it stops a storm or combo deck cold — they need to chain spells, and now they can't. Cheap, hard to interact with at instant speed, and devastating against the decks stax is built to beat.
4. **Winter Orb** — {2}. As long as it's untapped, players can't untap more than one land each turn. The iconic mana-denial piece. Symmetric on paper, but a deck built with mana rocks (which untap normally), dorks, and a low curve laughs at it while opponents starved of lands grind to a halt. The textbook "asymmetric in practice" card — run it with a plan to operate around it.
5. **Trinisphere** — {3}. As long as it's untapped, each spell that would cost less than three mana costs three. A cEDH staple that taxes the cheap interaction and fast mana that combo decks live on — suddenly every {1} counterspell and {0} mana rock costs three, and the turn-two kill becomes a turn-five kill. Colorless, so it slots anywhere.
6. **Opposition Agent** — {2}{B}. Flash; you control opponents while they search their libraries, and you *exile and may play* the cards they find. A flash creature that turns *every fetch land, every tutor* into a trap — punishes the entire category of library search the format leans on, and you steal the card. Brutal, asymmetric, and a blowout when flashed in response to a tutor.
7. **Grand Arbiter Augustin IV** — {2}{W}{U}. Your white and blue spells cost {1} less; opponents' spells cost {1} more. A commander-as-stax-piece: it taxes the whole table while *discounting you*, the purest asymmetry possible. A backbone Azorius stax commander that pays for your control shell while slowing everyone else.
8. **Archon of Emeria** — {2}{W}. Flying; each player can't cast more than one spell each turn, and opponents' nonbasic lands enter tapped. A Rule of Law on a 3/2 flying body that *also* taxes opponents' lands. Two lockdown effects plus a clock on one card — among the best stax creatures printed.
9. **Aven Mindcensor** — {2}{W}. Flash, flying; if an opponent would search a library, they search only the top four cards. A flash flyer that turns fetches and tutors into a near-miss — they're far less likely to find what they wanted. Pairs with Opposition Agent as the white-side search-hate package.
10. **Esper Sentinel** — {W}. Whenever an opponent casts their first noncreature spell each turn, draw a card unless they pay X (its power). A one-drop that taxes every opponent's first spell *and* refills your hand when they don't pay — soft, asymmetric, and a value engine that's good even outside dedicated stax. The most widely-played card on this list.

![Rule of Law, the three-mana white enchantment that limits each player to one spell per turn — the premier anti-combo and anti-storm stax lock.](/images/blog/magic-the-gathering/best-mtg-stax-pieces-commander/rule-of-law.jpg)

## The best budget stax pieces

You don't need a cEDH budget to slow a table down. Most of the hardest-hitting tax pieces are cheap because they're old or heavily reprinted.

- **Rule of Law** — {2}{W}. A few dollars, and one of the best anti-combo cards in the format. Pure value for a budget control or midrange shell.
- **Winter Orb** — {2}. The classic mana-denial piece, inexpensive, and devastating against greedy mana bases when you build to ignore it.
- **Sphere of Resistance** — {2}. Spells cost {1} more to cast. A colorless, budget Trinisphere-lite that taxes the whole table; brutal against low-curve combo.
- **Deafening Silence** — {W}. Each player can't cast more than one noncreature spell each turn. A one-mana Rule of Law that *exempts your creatures* — fantastic in a creature-based deck. Near-bulk.
- **Cursed Totem** — {2} / **Collector Ouphe** — {1}{G} / **Null Rod** — {2}. Ability-denial pieces that shut off creature or artifact activated abilities — cheap, narrow, and backbreaking against the right decks.

The honest budget read: a soft-stax package of Rule of Law, Sphere of Resistance, and Esper Sentinel costs a few dollars and meaningfully slows a combo-heavy pod. You buy the expensive pieces (Trinisphere, Opposition Agent) when you move toward cEDH.

## The categories of resource denial

Build your stax package by *covering categories*, not by stacking the same effect. The four levers:

**Mana denial** — Winter Orb, Static Orb, Stasis, Sphere of Resistance, Trinisphere. Slows everyone's ability to cast. The riskiest category because it's the most symmetric; only run pieces you can operate around.

**Spell-count denial** — Rule of Law, Archon of Emeria, Deafening Silence, Eidolon-style taxers. The cleanest anti-combo lever, and several pieces here are asymmetric or near-it. The best category for a focused, fair-ish stax deck.

**Library/search denial** — Opposition Agent, Aven Mindcensor, Drannith Magistrate (for graveyard/command-zone casts). Punishes tutors, fetches, and recursion — the engines that make decks consistent. Highly asymmetric.

**Ability denial** — Cursed Totem, Collector Ouphe, Null Rod, Grand Abolisher-style effects. Turns off the activated abilities that power combos and mana production. Narrow but devastating against the right target.

A coherent stax deck picks pieces across these levers so opponents can't just route around a single category. For where these slot into the rest of the 99, our [Commander deckbuilding ratios guide](/blog/magic-the-gathering/mtg-deckbuilding-ratios) covers how many slots to give the package, and the [advanced Commander combos guide](/blog/magic-the-gathering/best-commander-combos-mtg) shows the combo decks your stax is built to beat.

## How to actually win with stax

The most common stax mistake isn't being too oppressive — it's having no plan to *close*. A lock that never converts to a win is just everyone wasting an evening. Your stax deck needs one of these:

**A combo or engine that ignores your own lock.** The cleanest line: assemble a win that operates under your tax pieces while opponents can't. A two-card combo that doesn't care about Rule of Law, or a value engine that grinds while Winter Orb starves the table, lets you win *through* the lock you built.

**An asymmetric clock.** Drop a threat that closes the game over a few turns — Archon of Emeria swinging for three, a planeswalker ticking up, a commander beating down — while the tax pieces stop opponents from answering it. Slow but inevitable, and the cleanest "fair stax" plan.

**A break-the-lock finisher.** Run pieces that let you punch through your own symmetric lock at the right moment: untap your own lands, remove your own Winter Orb once you're ahead, or generate mana outside the taxed resource. The lock buys time; the break-out wins.

The throughline: stax is the *setup*, not the win. You're using resource denial to buy the turns you need to deploy a real win condition. If you can't articulate how your stax deck actually wins the game, you've built a salt mine, not a deck. For grindy recursion-based win plans that thrive under a lock, see the [graveyard recursion guide](/blog/magic-the-gathering/best-graveyard-recursion-commander-mtg).

## The etiquette (and when not to play stax)

Let's be honest about the social contract, because stax breaks it more than any other archetype.

- **Don't bring stax to a casual pod.** A precon table or a "we're here to have fun" group will hate a hard-lock deck, and they're not wrong to. Stax belongs at high-power and cEDH tables that opted into it. Read the room and our [Commander format guide](/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start) on rule-zero conversations.
- **Have a win condition and use it.** The cardinal sin is locking the table and then *not closing*. If you've established a lock, you owe the table a kill in a reasonable number of turns. Don't durdle behind your stax pieces forever.
- **Never lock a game you can't win.** A symmetric lock that benefits nobody and just freezes the board is the worst-case outcome — everyone loses time and nobody wins. If your lock isn't advancing your win, it's pure griefing.
- **Don't be precious about the pieces.** If a stax piece is hurting you more than the table, it's a bad piece for that game — be willing to let it go. The asymmetry has to favor *you*, every game, or you're playing the archetype wrong.

Stax is a legitimate, skill-intensive archetype at the right table. It's also the fastest way to never get invited back at the wrong one. Match the deck to the pod, win the games you lock, and the hate mostly evaporates.

## Quick Action Checklist

Apply this when building or playing stax:

- [ ] Only run symmetric pieces (Winter Orb, Static Orb, Stasis) if you have a deliberate plan to operate or win under them
- [ ] Prioritize asymmetric pieces: Smothering Tithe, Drannith Magistrate, Esper Sentinel, Grand Arbiter
- [ ] Cover multiple denial categories — mana, spell-count, library/search, ability — not four of the same lever
- [ ] Build your mana base (rocks, dorks, low curve) to function under your own lock
- [ ] Include a real win condition that ignores or breaks your lock — stax is the setup, not the kill
- [ ] Use search-hate (Opposition Agent, Aven Mindcensor) against tutor- and fetch-heavy pods
- [ ] On a budget, run Rule of Law, Sphere of Resistance, Deafening Silence, and Esper Sentinel
- [ ] Keep stax to high-power and cEDH tables, and close the game once you've established the lock`,
  faq: [
    {
      question: 'What is the best stax piece in Commander?',
      answer:
        'Smothering Tithe ({3}{W}) is the best stax piece in Commander because it is fully asymmetric — it taxes every opponent\'s draw step while generating Treasure tokens for you with no downside. Drannith Magistrate ({1}{W}) is a close second, shutting off opponents\' commanders, flashback, and graveyard casts for just two mana while leaving yours intact. The best stax pieces hurt opponents far more than they hurt you.',
    },
    {
      question: 'What makes a stax piece good?',
      answer:
        'Asymmetry. A stax piece is good in proportion to how much it hurts your opponents while sparing or benefiting you. Fully asymmetric pieces (Smothering Tithe, Drannith Magistrate) only affect opponents. Pieces that are symmetric on paper (Winter Orb, Rule of Law) are good only if your deck is built to ignore them. Never run a symmetric piece you have no plan to break.',
    },
    {
      question: 'How do you win with a stax deck?',
      answer:
        'Stax is the setup, not the win. You use resource denial to buy turns, then close with a combo or engine that ignores your own lock, an asymmetric clock (a creature or planeswalker that wins while opponents can\'t answer it), or a break-the-lock finisher that lets you punch through your symmetric pieces. A stax deck with no win condition is just griefing the table.',
    },
    {
      question: 'Is stax legal and allowed in Commander?',
      answer:
        'Yes — every card discussed here is Commander-legal, and stax is a recognized archetype, especially in cEDH. The issue is social, not rules-based. Stax belongs at high-power and cEDH tables that opted into that level of play, not at casual or precon pods. Have a rule-zero conversation and read the room before bringing a lockdown deck.',
    },
    {
      question: 'What are the best budget stax pieces?',
      answer:
        'Rule of Law ({2}{W}, anti-combo lock), Sphere of Resistance ({2}, taxes all spells), Deafening Silence ({W}, one noncreature spell per turn but exempts creatures), Winter Orb ({2}, mana denial), and Esper Sentinel ({W}, taxes the first noncreature spell) are all cheap and effective. A soft-stax package of these costs a few dollars and meaningfully slows a combo-heavy pod.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/mtg-commander-brackets', anchor: 'Commander brackets guide' },
    { href: '/blog/magic-the-gathering/best-counterspells-mtg', anchor: 'best counterspells guide' },
    { href: '/blog/magic-the-gathering/best-commander-combos-mtg', anchor: 'advanced Commander combos guide' },
    { href: '/blog/magic-the-gathering/mtg-deckbuilding-ratios', anchor: 'Commander deckbuilding ratios guide' },
    { href: '/blog/magic-the-gathering/best-graveyard-recursion-commander-mtg', anchor: 'graveyard recursion guide' },
    { href: '/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start', anchor: 'Commander format guide' },
  ],
  externalSources: [
    { url: 'https://scryfall.com/search?q=f%3Acommander+%28o%3A%22can%27t+untap%22+OR+o%3A%22costs+%7B1%7D+more%22%29', title: 'Scryfall — stax and tax effect search with legality data' },
    { url: 'https://edhrec.com/', title: 'EDHREC — Commander stax inclusion data' },
    { url: 'https://magic.wizards.com/en/rules', title: 'Wizards of the Coast — official comprehensive rules' },
  ],
  tldr:
    'Stax denies opponents resources — mana, spells per turn, library access, untapping — faster than they can rebuild, then closes the game while they\'re locked out. The best pieces are asymmetric: Smothering Tithe taxes opponents and pays you, Drannith Magistrate shuts off their commanders while yours works, Esper Sentinel taxes and refills. Never run a symmetric piece (Winter Orb, Stasis) without a plan to operate or win under it. Cover multiple denial categories, always pack a real win condition, and keep stax to high-power and cEDH tables.',
  itemList: {
    name: 'Best MTG Stax Pieces for Commander, Ranked',
    items: [
      { name: 'Smothering Tithe', description: 'Taxes every opponent\'s draw while ramping you with Treasure — the most asymmetric stax piece in the game.' },
      { name: 'Drannith Magistrate', description: 'Two mana to shut off opponents\' commanders, flashback, and graveyard casts while yours all work.' },
      { name: 'Rule of Law', description: 'Each player limited to one spell per turn — the premier anti-combo and anti-storm lock.' },
      { name: 'Winter Orb', description: 'Players untap only one land per turn; symmetric on paper but brutal if you build around it.' },
      { name: 'Trinisphere', description: 'Every spell costs at least three mana — taxes the cheap interaction and fast mana combo decks rely on.' },
      { name: 'Opposition Agent', description: 'Flash creature that steals what opponents tutor or fetch — punishes the entire library-search category.' },
      { name: 'Grand Arbiter Augustin IV', description: 'Discounts your spells and taxes opponents\' — a commander built as a pure-asymmetry stax piece.' },
      { name: 'Archon of Emeria', description: 'Rule of Law on a flying body that also taxes opponents\' lands — two locks plus a clock.' },
      { name: 'Aven Mindcensor', description: 'Flash flyer that limits opponents\' library searches to the top four cards — fetch and tutor hate.' },
      { name: 'Esper Sentinel', description: 'One-drop that taxes opponents\' first noncreature spell and refills your hand when they don\'t pay.' },
    ],
  },
};
