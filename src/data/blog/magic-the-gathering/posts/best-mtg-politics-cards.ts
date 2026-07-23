import type { BlogPost } from '../../blogTypes';

export const bestMtgPoliticsCards: BlogPost = {
  slug: 'best-mtg-politics-cards',
  game: 'magic-the-gathering',
  category: 'card-guides',
  topicCluster: 'commander-politics',
  title: 'Best Politics Cards in MTG Commander, Ranked',
  metaDescription:
    'The best politics cards in MTG Commander, ranked. Vote cards, monarch, tempting offer, deterrents and gift effects that buy time and point the table elsewhere.',
  excerpt:
    "Politics isn't a personality trait, it's a card slot. Here are the strongest political cards in Commander — vote spells, monarch, tempting offers, deterrents and gifts — ranked by how much table time they actually buy you.",
  featuredImagePrompt:
    'A regal assassin queen on a throne surrounded by scheming courtiers, crimson and gold banners, candlelit conspiracy, painterly fantasy art style, no text',
  heroImage: '/images/blog/magic-the-gathering/best-mtg-politics-cards/queen-marchesa.jpg',
  heroImageAlt:
    'Queen Marchesa, the Mardu commander who hands you the monarch and paints a target on your back the moment she resolves.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-mtg-politics-cards/queen-marchesa.jpg',
      sourceUrl: 'https://scryfall.com/card/otc/239/queen-marchesa',
      license: 'Card art © Wizards of the Coast; image via Scryfall (WotC Fan Content Policy)',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-politics-cards/councils-judgment.jpg',
      sourceUrl: 'https://scryfall.com/card/otc/79/councils-judgment',
      license: 'Card art © Wizards of the Coast; image via Scryfall (WotC Fan Content Policy)',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-politics-cards/expropriate.jpg',
      sourceUrl: 'https://scryfall.com/card/cn2/30/expropriate',
      license: 'Card art © Wizards of the Coast; image via Scryfall (WotC Fan Content Policy)',
    },
    {
      src: '/images/blog/magic-the-gathering/best-mtg-politics-cards/assault-suit.jpg',
      sourceUrl: 'https://scryfall.com/card/cmm/369/assault-suit',
      license: 'Card art © Wizards of the Coast; image via Scryfall (WotC Fan Content Policy)',
    },
  ],
  publishDate: '2026-07-22T00:00:00.000Z',
  lastUpdated: '2026-07-22T00:00:00.000Z',
  primaryKeyword: 'best mtg politics cards',
  secondaryKeywords: [
    'best politics cards commander',
    'mtg commander politics',
    'best vote cards mtg',
    'monarch cards commander',
    'tempting offer cards mtg',
    'group hug commander cards',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-a-politics-card-actually-does', label: 'What a politics card actually does', level: 2 },
    { id: 'the-five-kinds-of-politics-card', label: 'The five kinds of politics card', level: 2 },
    { id: 'the-best-politics-cards-ranked', label: 'The best politics cards, ranked', level: 2 },
    { id: 'the-best-vote-cards', label: 'The best vote cards', level: 2 },
    { id: 'monarch-the-best-political-mechanic-in-the-game', label: 'Monarch: the best political mechanic in the game', level: 2 },
    { id: 'deterrents-that-redirect-instead-of-blocking', label: 'Deterrents that redirect instead of blocking', level: 2 },
    { id: 'gifts-bribes-and-tempting-offers', label: 'Gifts, bribes and tempting offers', level: 2 },
    { id: 'politics-cards-that-are-traps', label: 'Politics cards that are traps', level: 2 },
    { id: 'how-many-politics-cards-to-run', label: 'How many politics cards to run', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Politics in Commander gets talked about like it's a personality trait — the guy at the table with the silver tongue who talks everyone into attacking left. It isn't. Talk is free, which is exactly why it's worth nothing. The player who never gets attacked isn't more charming than you, they're the one whose board makes attacking them mathematically stupid while attacking someone else is actively rewarded.

That's what a politics card is: a card that changes the incentives at the table so the correct play for your opponents is the play that helps you. Ghostly Prison doesn't ask nicely. Assault Suit doesn't negotiate. They make the math point somewhere else. Below is the ranked list of cards that do that job best in [Commander](/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start) — plus the ones that look political and are secretly just bad cards. Every card here is legality-checked and Commander-legal, and most of the category is Commander-only in practice, since it came out of Conspiracy and Commander product rather than Standard sets.

## What a politics card actually does

Three jobs, and a good political card does at least two.

**It redirects damage.** Not prevents — redirects. There's a big difference between "creatures can't attack me" and "attacking me costs 2 per creature while attacking that guy is free." The first makes you a wall people eventually break; the second makes you the last problem on the list. Redirection is the entire category's core competency.

**It buys goodwill you can spend.** Handing an opponent a card, a land, or a Treasure is cheap. What you're buying is the thirty seconds where they'd otherwise be deciding whether to Swords your commander. Gifts are pre-payment on future non-aggression, and the beautiful part is nobody is contractually obligated to honor them — but people mostly do, because reciprocity is hard to switch off.

**It turns a 1-for-1 into a 1-for-3.** Council's Judgment doesn't ask permission to exile a hexproof commander; it asks the table, and the table is happy to remove the biggest threat for free. One card, three agreements, and you're not even the bad guy.

> The through-line: politics cards are not "nice" cards. They are cards that let other people's self-interest do your work. A group hug deck that makes everyone happy and then loses is not playing politics, it's playing host.

## The five kinds of politics card

Know which bucket you're drafting from, because they don't stack well together.

- **Vote / dilemma cards** (Council's Judgment, Expropriate, Coercive Portal, Selvala's Stampede) — Will of the council and council's dilemma. You get value scaled by how many people vote, and voting is usually a free win for whoever isn't threatened.
- **Monarch cards** (Queen Marchesa, Palace Jailer, Court of Grace, Throne of the High City) — a moving crown that draws you a card each turn and forces combat somewhere.
- **Deterrents** (Ghostly Prison, Propaganda, Orzhov Advokist, Nils, Discipline Enforcer) — taxes and conditional shields that make you the expensive target.
- **Redirectors** (Gahiji Honored One, Rite of the Raging Storm, Crescendo of War, Duelist's Heritage) — cards that actively reward attacking someone who isn't you.
- **Gifts and tempting offers** (Tempt with Discovery, Kwain Itinerant Meddler, Zedruu the Greathearted, Curse of Opulence) — you hand out value, and you get more of it back than anyone else does.

The mistake is running one of each and calling it a politics deck. Pick two buckets that reinforce each other — deterrents plus redirectors is the classic pairing, because "don't attack me" is weak until it's paired with "attack them instead."

## The best politics cards, ranked

Ranked on how reliably each card changes opponent behavior in a normal four-player pod.

![Council's Judgment, the will-of-the-council sorcery that exiles the most-voted-for permanent and ignores hexproof entirely.](/images/blog/magic-the-gathering/best-mtg-politics-cards/councils-judgment.jpg)

1. **Council's Judgment** — 1WW sorcery. Each player votes for a nonland permanent *you don't control*, and everything tied for most votes gets exiled. It's unconditional exile that dodges hexproof and shroud because it never targets, and in a pod the table usually votes with you against the scariest board. Best white removal spell in the format that also makes you look reasonable.
2. **Queen Marchesa** — 1RWB legendary 3/3 with deathtouch and haste. Hands you the monarch on entry, and while an opponent holds the crown she pumps out 1/1 deathtouch haste Assassins every upkeep. The monarch card draw is the payoff; the deathtouch blockers are what stop people taking it back.
3. **Ghostly Prison** / **Propaganda** — 2W and 2U respectively, and functionally identical: creatures can't attack you unless their controller pays 2 for each attacker. This is the purest expression of the category. It doesn't stop a determined alpha strike, it just makes you the worst-value attack on the board for four mana total investment.
4. **Assault Suit** — 4 artifact Equipment, equip 3. Equipped creature gets +2/+2 and haste, can't attack you or your planeswalkers, and can't be sacrificed — and at each opponent's upkeep you *may* let that player take control of it until end of turn. It's a rental agreement. You lend the beater to whoever promises to swing at the player you want dead, and it comes home untapped every turn.
5. **Expropriate** — 7UU sorcery. Each player votes time or money; time gives you an extra turn per vote, money lets you steal a permanent from that voter. There is no bad outcome. Either you take three extra turns or you take three permanents, and the vote splits because nobody wants to give you either. The most brutal nine-drop in Commander.
6. **Palace Jailer** — 2WW 4/3 human. You become the monarch, and you exile a creature an opponent controls *until an opponent becomes the monarch*. Which means the exile is permanent as long as you defend the crown. Two premium effects on a body, and it makes the crown worth fighting over in a way that keeps combat away from your face.
7. **Gahiji, Honored One** — 2RGW legendary 3/5. Creatures attacking your opponents get +2/+0. That's it, and it's plenty: every attack that isn't aimed at you is 2 damage better, which quietly re-prices the whole table's combat math in your favor.
8. **Smothering Tithe** — 3W enchantment. Whenever an opponent draws a card they pay 2 or you make a Treasure. Not political by flavor, but it turns every symmetrical group-hug draw effect into a personal mana engine.
9. **Orzhov Advokist** — 2W 0/4. Each upkeep every player may put two +1/+1 counters on a creature they control; if they do, that player's creatures can't attack you until your next turn. A literal bribe with a non-aggression clause attached, renewed every turn.
10. **Rite of the Raging Storm** — 3RR enchantment. Every player gets a 5/1 trample haste Elemental named Lightning Rager each upkeep, and Ragers can't attack you. You handed everyone a hasty attacker physically incapable of pointing at your face.

## The best vote cards

Voting is the most underrated mechanic in Commander because opponents consistently vote wrong. They vote for the option that hurts them least in isolation, not the one that hurts you most, and those are almost never the same thing.

![Expropriate, the nine-mana council's dilemma sorcery that either takes extra turns or steals permanents from every voter.](/images/blog/magic-the-gathering/best-mtg-politics-cards/expropriate.jpg)

- **Council's Judgment** — 1WW. Covered above and worth repeating: non-targeted exile is how white answers a hexproof commander. Even a 1-1-1-1 split still exiles everything tied for most votes.
- **Expropriate** — 7UU. Extra turns or theft, table's choice, both great. If your deck already cares about [extra turns](/blog/magic-the-gathering/best-mtg-extra-turn-spells) this is the top end of the curve.
- **Coercive Portal** — 4 artifact. Each of your upkeeps the table votes carnage (blow up all nonland permanents, sacrificing the Portal) or homage (you draw a card). It's a card-draw engine that opponents can only turn off by voting to wrath the board — which is a fantastic deal for you when you're behind and a free cantrip when you're ahead.
- **Selvala's Stampede** — 4GG sorcery. Wild votes reveal creatures off the top and put them in play; free votes let you put a permanent from hand into play. Green's version of "either outcome is a haymaker."

The tactical note nobody tells you: **you vote first**, since these all say "starting with you." Announcing your vote sets the anchor, and in a pod where two opponents are already fighting, yours is frequently the vote that breaks the tie.

## Monarch: the best political mechanic in the game

The monarch is a designated player who draws an extra card at their end step. If a creature deals combat damage to the monarch, that player becomes the monarch instead. That's the whole rule, and it does more political work than any card ever printed.

Why it's so good: it creates a target that isn't you. Even after you lose the crown, the table's combat is organized around whoever's wearing it, and while you hold it the extra card per turn is free [card advantage](/blog/magic-the-gathering/best-card-draw-commander-mtg) at zero mana.

- **Queen Marchesa** — the best monarch card and a fine commander. Deathtouch Assassin tokens whenever an opponent holds the crown means taking it from you is expensive and holding it against you is worse.
- **Palace Jailer** — monarch plus conditional exile removal on a 4/3 body. Best value-per-card of the monarch package.
- **Court of Grace** — 2WW enchantment. Monarch on entry, then a 1/1 flying Spirit each upkeep, upgraded to a 4/4 Angel while you're the monarch. It builds the blockers that let you keep the crown.
- **Custodi Lich** — 3BB 4/4. Monarch on entry, and whenever you become the monarch a target player sacrifices a creature. It says *whenever*, so re-taking the crown re-triggers it.
- **Throne of the High City** — a colorless land that taps for 1 and can be sacrificed for 4 to make you the monarch. Any deck can run it, and it's a free land slot that turns into a card engine late.

The catch: monarch demands you can defend it. If your board is three mana rocks and a commander, handing yourself the crown just tells three opponents where to point their attackers.

## Deterrents that redirect instead of blocking

The difference between a deterrent and a [pillowfort](/blog/magic-the-gathering/best-mtg-pillowfort-cards) is intent. A full pillowfort tries to make you unattackable and eventually invites the whole table to solve you. A deterrent just needs you to be the second-worst option.

![Assault Suit, the Equipment you lend to opponents each upkeep — the equipped creature can never attack you and can never be sacrificed.](/images/blog/magic-the-gathering/best-mtg-politics-cards/assault-suit.jpg)

- **Ghostly Prison** and **Propaganda** — 2W / 2U. The two-mana tax that reprices every attack. Run both in Azorius. Both are also Modern-legal if you want them elsewhere.
- **Nils, Discipline Enforcer** — 2W legendary 1/4. At your end step you put a +1/+1 counter on up to one creature per player, and any creature with counters on it can't attack you unless its controller pays X equal to the number of counters. You are literally paying opponents to build a bigger creature that can't come at you.
- **Orzhov Advokist** — 2W 0/4. The renewable bribe. Note the opponent *chooses*; a player who wants you dead can decline the counters and swing anyway, which is exactly the information you want.
- **Varchild, Betrayer of Kjeldor** — 2R legendary 3/3. When she connects, that player creates that many 1/1 Survivors — and Survivors your opponents control can't block and can't attack you. When Varchild leaves the battlefield you gain control of all of them.

## Gifts, bribes and tempting offers

Tempting offer cards give every opponent the option to take the same effect you're taking, and then reward you again for each one who accepts. Opponents almost always accept, because refusing a free land while two other players take one is a losing line.

- **Tempt with Discovery** — 3G sorcery. You fetch a land; each opponent may fetch one; and for each who does, you fetch *another*. Three acceptances means you tutor four lands onto the battlefield for four mana, and unlike most ramp it hits any land — including a Gate or Urborg-style utility land. The best card in its cycle by a mile.
- **Tempt with Vengeance** — XR sorcery. X hasty 1/1 Elementals for you, X for each opponent who accepts, and X more for you per acceptance. An enormous [token](/blog/magic-the-gathering/best-mtg-token-generators-commander) swing opponents keep opting into because free hasty bodies feel great right up until you sacrifice yours for the win.
- **Kwain, Itinerant Meddler** — WU legendary 1/3. Tap: each player may draw a card and gain 1 life. Pure group hug on its own; excellent alongside Smothering Tithe, where you're the only one converting the extra cards.
- **Curse of Opulence** — R aura on a player. Whenever the enchanted player is attacked you make a Gold token, and every opponent attacking them makes one too. One red mana that hands the whole table a bribe to attack somebody specific.
- **Zedruu the Greathearted** — 1URW legendary 2/4. Each upkeep you gain X life and draw X cards, where X is the number of permanents you own that opponents control. Donate your Ghostly Prison, your worst mana rock, a Curse — every gift is a permanent card-draw upgrade.
- **Master of Ceremonies** — 3W 3/4. Each upkeep every opponent picks money, friends, or secrets, and you *both* get the Treasure, Citizen token, or card. You match every player's payout, so you gain three times what any individual opponent does.

The pattern: you are not being generous, you are the only player receiving the effect three times. That's why group hug with a real win condition is terrifying and group hug without one is furniture.

## Politics cards that are traps

Not everything with a handshake in the art is worth a slot.

**Pure group hug with no payoff.** If you're running Kwain, Dictate of Kruphix or Ghirapur Orrery, you need Smothering Tithe, a wheel payoff, or an actual combo to convert the shared resources. Otherwise you're accelerating three opponents and one of them isn't you.

**Grand Melee.** 3R, all creatures attack and block each combat if able. It reads like chaos you can steer, and it's a coin flip — it also forces *your* creatures to attack, which strips your blockers exactly when you need them. Crescendo of War is the better red-white version of this idea because it doesn't compel your own board.

**Phelddagrif.** 1GWU 4/4 with three abilities that all benefit an opponent. Genuinely fun, genuinely weak — every activation is a downside taped to a small upgrade. Play it for the flying hippo, not the power level.

**Vote cards in a two-player game.** Every will-of-the-council and council's dilemma card gets dramatically worse in 1v1, where "the table votes" becomes "we each vote once and I break the tie." Council's Judgment is still fine; Expropriate and Coercive Portal are not what you signed up for.

## How many politics cards to run

Rough guide for a 100-card deck, assuming Commander [bracket](/blog/magic-the-gathering/mtg-commander-brackets) 2 to 3 casual pods:

- **Normal midrange deck:** 2 to 4 slots — a Ghostly Prison effect, a Council's Judgment, a Throne of the High City. Cheap insurance so you're never the default target.
- **Dedicated politics or monarch deck:** 8 to 12 slots split between deterrents and redirectors, with real blockers to hold the crown.
- **Group hug deck:** 10 or more gift effects, but at least 4 dedicated payoffs. The payoffs are the deck; the gifts are setup.

The one rule that outranks all of it: **politics cards buy time, they don't win games.** If you're at eight slots and your win condition is "eventually attack," you built a fort, not a deck. Check your [staples](/blog/magic-the-gathering/best-commander-staples-mtg) count before you cut real cards for more taxes.

## Quick Action Checklist

Apply this when adding politics to a Commander deck:

- [ ] Pick two buckets that reinforce each other — deterrents plus redirectors is the reliable pairing
- [ ] Run Council's Judgment in any white deck; non-targeted exile answers hexproof commanders
- [ ] Add Throne of the High City to most decks — it's a free land slot that becomes card draw
- [ ] Don't take the monarch unless you have blockers to defend it
- [ ] If you're gifting cards or lands, run Smothering Tithe or another payoff that only you have
- [ ] Vote first on will-of-the-council cards — you set the anchor and often break the tie
- [ ] Cap normal decks at 2 to 4 politics slots; a fort with no clock is a slow loss
- [ ] Skip Grand Melee and vote cards if you mostly play 1v1`,
  faq: [
    {
      question: 'What is the best politics card in MTG Commander?',
      answer:
        "Council's Judgment. It's a 1WW sorcery where each player votes for a nonland permanent you don't control, and everything tied for most votes is exiled. Because it never targets, it gets around hexproof and shroud, and because the table votes with you against the scariest board, you remove the biggest threat without becoming the villain. Queen Marchesa and Ghostly Prison are the other two cards that change opponent behavior most reliably.",
    },
    {
      question: 'How does the monarch work in Commander?',
      answer:
        'The monarch is a designated player who draws an additional card at the beginning of their end step. If a creature deals combat damage to the monarch, that creature\'s controller becomes the monarch instead. Cards like Queen Marchesa, Palace Jailer, Court of Grace and Throne of the High City make you the monarch. It is powerful because it gives you free card advantage and creates a target on the board that moves between players.',
    },
    {
      question: 'Are politics cards good or are they just for casual play?',
      answer:
        "Several are genuinely powerful cards independent of the social element. Council's Judgment is premium white removal, Expropriate is a game-ending nine-drop, Smothering Tithe is a top-tier white enchantment, and Tempt with Discovery ramps four lands for four mana. The purely social cards — Phelddagrif, most unpayoffed group hug — are casual. The vote and monarch cards are not.",
    },
    {
      question: 'What is a tempting offer card in MTG?',
      answer:
        'Tempting offer is a Commander mechanic where you get an effect, each opponent may choose to take the same effect, and then you get the effect again for each opponent who accepted. Tempt with Discovery and Tempt with Vengeance are the two best. Opponents almost always accept because refusing while others accept is a losing line, which means you typically get the effect three or four times to their one.',
    },
    {
      question: 'How many politics cards should I run in a Commander deck?',
      answer:
        'Two to four in a normal midrange deck — one deterrent like Ghostly Prison, one vote card, and a Throne of the High City is plenty of insurance. A dedicated politics or monarch deck can support 8 to 12 slots split between deterrents and redirectors. Past twelve you are trading win-condition slots for time you may not be able to use.',
    },
    {
      question: 'Is group hug a viable Commander strategy?',
      answer:
        "Only with payoffs. Handing every opponent cards and lands while your own plan is combat damage means you accelerated three opponents and one of them wins. Group hug works when you pair the gift effects with cards only you profit from — Smothering Tithe turning opponent draws into your Treasures, Zedruu the Greathearted converting donated permanents into life and cards, or a combo finisher that ends the game before the table cashes in.",
    },
    {
      question: 'Which politics cards are legal outside Commander?',
      answer:
        "Most of the category is Commander-only in practice because it came out of Conspiracy and Commander product. The exceptions worth knowing: Ghostly Prison, Propaganda, Dictate of Kruphix, Ghirapur Orrery and Smothering Tithe are all Modern-legal, and Council's Judgment and Expropriate are Legacy and Vintage legal but not Modern legal. Check Scryfall before you move any of these into a constructed list.",
    },
    {
      question: 'What does Assault Suit do and why is it a politics card?',
      answer:
        "Assault Suit is a 4-mana Equipment with equip 3. The equipped creature gets +2/+2 and haste, can't attack you or your planeswalkers, and can't be sacrificed. At the beginning of each opponent's upkeep, you may let that player gain control of it until end of turn, untapping it. It's a rental: you lend a beater to whichever opponent will point it at the player you want dead, and it can never be turned against you or sacrificed away from you.",
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start', anchor: 'Commander format guide' },
    { href: '/blog/magic-the-gathering/best-mtg-pillowfort-cards', anchor: 'best pillowfort cards' },
    { href: '/blog/magic-the-gathering/best-mtg-goad-cards', anchor: 'best goad cards' },
    { href: '/blog/magic-the-gathering/best-commander-staples-mtg', anchor: 'best Commander staples' },
    { href: '/blog/magic-the-gathering/mtg-commander-brackets', anchor: 'Commander brackets explained' },
    { href: '/blog/magic-the-gathering/how-to-build-a-commander-deck', anchor: 'how to build a Commander deck' },
  ],
  externalSources: [
    { url: 'https://scryfall.com/search?q=o%3A%22will+of+the+council%22+or+o%3A%22council%27s+dilemma%22', title: 'Scryfall — vote card list and legality data' },
    { url: 'https://edhrec.com/', title: 'EDHREC — Commander inclusion data for politics staples' },
    { url: 'https://magic.wizards.com/en/rules', title: 'Wizards of the Coast — official rules (monarch, voting)' },
  ],
  tldr:
    "The best politics cards in MTG Commander are Council's Judgment, Queen Marchesa, Ghostly Prison/Propaganda, Assault Suit and Expropriate. Politics isn't talking — it's running cards that make attacking you the worst play available while rewarding attacks elsewhere. Vote cards and monarch effects are the two strongest sub-categories. Run 2 to 4 in a normal deck, 8 to 12 in a dedicated politics build, and never run gift effects without a payoff only you can use.",
  itemList: {
    name: 'Best Politics Cards in MTG Commander, Ranked',
    items: [
      { name: "Council's Judgment", description: 'Will-of-the-council exile that never targets, so it answers hexproof commanders and the table usually votes with you.' },
      { name: 'Queen Marchesa', description: 'Mardu 3/3 that grants the monarch and makes deathtouch Assassins while an opponent holds the crown.' },
      { name: 'Ghostly Prison / Propaganda', description: 'Two-mana taxes that make each attacker cost 2, repricing every attack aimed at you.' },
      { name: 'Assault Suit', description: 'Equipment you rent to opponents each upkeep; the equipped creature can never attack you or be sacrificed.' },
      { name: 'Expropriate', description: "Nine-mana council's dilemma: extra turns or stolen permanents, and every vote is good for you." },
      { name: 'Palace Jailer', description: 'Monarch on entry plus exile of an opponent creature that lasts as long as you keep the crown.' },
      { name: 'Gahiji, Honored One', description: 'Creatures attacking your opponents get +2/+0, quietly re-pricing the whole table’s combat away from you.' },
      { name: 'Smothering Tithe', description: 'Turns every opponent draw into a Treasure for you — the payoff that makes group hug profitable.' },
      { name: 'Orzhov Advokist', description: 'Renewable bribe: opponents take two +1/+1 counters and agree their creatures cannot attack you.' },
      { name: 'Rite of the Raging Storm', description: 'Gives every player a 5/1 trample haste Elemental each upkeep that is unable to attack you.' },
    ],
  },
};
