import type { BlogPost } from '../../blogTypes';

export const braverseTechCardsGuide: BlogPost = {
  slug: 'cookie-run-braverse-tech-cards-guide',
  game: 'cookie-run-braverse-tcg',
  category: 'advanced-strategy',
  topicCluster: 'braverse-strategy',
  tags: ['Tech Cards', 'Traps', 'Items', 'Strategy', 'Deck Building'],
  title: 'Cookie Run: Braverse Tech Cards Guide (Flex Slots That Win Games)',
  metaDescription:
    'Tech cards win the Cookie Run: Braverse matchups a stock deck can\'t. Learn which flexible answer, removal, bounce, and hate slots to run - and how many.',
  excerpt:
    "Tech cards are the flex slots that answer the deck your list has no plan for. Here's which Braverse answer traps, removal, bounce, and hate cards are worth running - all verified against the official database - plus how many slots to give them.",
  featuredImagePrompt:
    'A Cookie Run: Braverse Trap card mid-trigger, glowing energy blunting an incoming attack while a defending Cookie holds its ground, signaling flexible answer cards that shut down a specific plan.',
  heroImage:
    '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-tech-cards-guide/fragmented-soul.webp',
  heroImageAlt:
    "Official Fragmented Soul card (BS9-046), a Yellow Trap in Cookie Run: Braverse that reduces an opponent's Cookie attack damage by 2 and returns a FLIP Cookie from your trash to hand - a textbook double-duty tech card.",
  imageSources: [
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-tech-cards-guide/fragmented-soul.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/AfVPeJnG2tD1a0C10K4wIw.webp',
      license: 'Cookie Run: Braverse official card image © Devsisters',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-tech-cards-guide/radiant-light-of-protection.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/pF1Z8dF7AarfT1DkPm6erA.webp',
      license: 'Cookie Run: Braverse official card image © Devsisters',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-tech-cards-guide/scovilsky-manuscript.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/ZpgntulMfy5WCvEcsdeXLA.webp',
      license: 'Cookie Run: Braverse official card image © Devsisters',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-tech-cards-guide/heart-stained-with-lies.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/dr8HOHPMMmMrQoA_6enPwA.webp',
      license: 'Cookie Run: Braverse official card image © Devsisters',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-tech-cards-guide/concealer-of-truth.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/XxdLxLZkxF8TyYKgoCHkGA.webp',
      license: 'Cookie Run: Braverse official card image © Devsisters',
    },
  ],
  publishDate: '2026-07-12T00:00:00.000Z',
  lastUpdated: '2026-07-12T00:00:00.000Z',
  primaryKeyword: 'cookie run braverse tech cards',
  secondaryKeywords: [
    'braverse tech cards guide',
    'cookie run braverse answer cards',
    'best braverse trap cards',
    'braverse flex slots',
    'how to tech in cookie run braverse',
    'cookie run braverse removal cards',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'monthly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'what-actually-makes-a-card-a-tech-card', label: 'What actually makes a card a tech card', level: 2 },
    { id: 'the-answer-trap-package-every-deck-should-run', label: 'The answer-Trap package every deck should run', level: 2 },
    { id: 'point-removal-and-reach-as-your-proactive-answers', label: 'Point removal and reach as your proactive answers', level: 2 },
    { id: 'bounce-is-the-most-flexible-answer-in-the-game', label: 'Bounce is the most flexible answer in the game', level: 2 },
    { id: 'hate-cards-for-teching-against-a-specific-deck', label: 'Hate cards for teching against a specific deck', level: 2 },
    { id: 'consistency-tech-that-makes-the-rest-work', label: 'Consistency tech that makes the rest work', level: 2 },
    { id: 'how-many-tech-slots-should-you-run', label: 'How many tech slots should you run', level: 2 },
    { id: 'tech-card-mistakes-that-cost-you-games', label: 'Tech-card mistakes that cost you games', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Every Braverse player hits the same wall. You build a clean 60 - right curve, stable color base - then sit down across from the one deck your list has no plan for and get run over while your hand is full of perfectly good cards that do nothing about the actual problem. That gap - between a deck that does its own thing and one that can also disrupt yours - is where tech cards live.

Here's the claim I'll defend: a single flex slot like Radiant Light of Protection (BS9-068) - one Green energy to drop every one of your opponent's Cookies to -1 attack damage for a turn - swings more close games than a fourth copy of your best attacker ever will. It does something your core 55 cards can't: it changes what the *opponent* is allowed to do. Usual honesty note - the English meta is young and the pool shifts set to set, so re-verify the current list against the official database before an event, and if your core isn't stable yet, start with the [deck-building basics](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics).

## What actually makes a card a tech card

A tech card is a flex slot you include to answer a specific problem rather than to advance your own game plan. Be strict about it, because "tech" gets thrown around loosely. Your best attacker and your draw engine aren't tech - they're core, doing what your deck is built to do every game. A tech card is the one you'd cut in a heartbeat if you only ever played the mirror.

The test: *would I still run this if every opponent were on my exact deck?* If no, it's tech. Radiant Light of Protection is dead in a slow mirror and game-winning against go-wide aggro - and that swing, low value in most matchups and huge in the one it's built for, is the signature of real tech.

In Braverse, tech mostly lives in three places. Traps are the closest thing to reactive, opponent's-turn answers - set in your support area, they fire in response to what the other player does. Items are proactive answers you play on your own turn. And a few Cookies (the bounce ones especially) staple a tech effect onto a body so you don't lose tempo teching them in. For the full ranked rundown of the non-Cookie pool, the [best Items, Traps, and Stages guide](/blog/cookie-run-braverse-tcg/best-braverse-item-trap-stage-cards) is the companion piece to this one.

## The answer-Trap package every deck should run

Traps are where Braverse hides its combat tricks and fog effects, and they're the most universally useful tech in the game - "the opponent swings for lethal and you say no" is a problem every deck faces. The strong ones share a mechanic: reduce a Cookie's attack damage for the turn, turning a lethal alpha strike into a whiff.

The headliner is **Fragmented Soul** (BS9-046), a Yellow Trap: for two Yellow energy it drops one opponent Cookie's attack damage by 2 this turn, *then* returns up to 1 FLIP Cookie from your trash to your hand. That second clause is what makes it great tech - you blank a swing and rebuy a resource in one card, so it isn't dead when the answer isn't needed. **Reversed Prophecy** (BS9-093) is the Blue version: two Blue energy for -2 attack damage, and if you have five or fewer cards in hand you draw 2 and put 1 back on top. An answer that replaces itself.

If you're leaning cheaper, **Overtaken Other-Realm** (BS9-045) costs a single Yellow energy for -2 attack damage plus draw 2, but the hidden cost is steep: you discard 2 FLIP Cookies from your hand to fire it - a bargain in a FLIP-heavy Yellow shell, a trap anywhere else. And **Radiant Light of Protection** (BS9-068), the card I opened with, is the go-wide answer: one Green energy, and if you have fewer support cards than your opponent, *all* of their Cookies deal -1 attack damage this turn - across a board of small attackers, an erased turn of pressure.

![Official Radiant Light of Protection card (BS9-068), a Green Trap that drops all of an opponent's Cookies to -1 attack damage for the turn](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-tech-cards-guide/radiant-light-of-protection.webp)

## Point removal and reach as your proactive answers

Braverse doesn't hand you clean "destroy target Cookie" removal - what exists is conditional and rewards a specific game state. The skill is matching the condition to the decks you actually lose to.

**Scovilsky Manuscript** (BS7-020), a Red Item, is my favorite example. For one Red energy, *if your break area is at least two levels higher than your opponent's* - meaning you're the one taking the beating - you deal 3 damage to one of their LV.1 Cookies. Comeback removal, tuned to fire exactly when you're behind and need to clear a threat: in an aggro-heavy field that ping wipes an early attacker and buys the turn you were missing.

**Crimson Dragon Mask** (BS5-020) is the conditional sweeper: two Red energy, and if you have two Cookies at 1 remaining HP, it deals 2 damage to *all* of your opponent's Cookies. Niche, but a blowout against a wide board. At the premium end, **Soul Jam: Light of Deceit** (BS9-092) is a Blue Item costing a Blue plus one of any color and a 2-card discard - it deals 2 damage to a Cookie, then optionally equips to your Shadow Milk Cookie for -3 damage protection when your hand is low. It's a Secret Super Rare chase card budget builders can skip, but it's clean removal that doubles as protection.

![Official Scovilsky Manuscript card (BS7-020), a Red Item that deals 3 damage to an opponent's LV.1 Cookie when you are behind on break-area level](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-tech-cards-guide/scovilsky-manuscript.webp)

Removal here is matchup-shaped, not universal - jam the one whose condition matches the losses you're trying to fix, not the flashiest number.

## Bounce is the most flexible answer in the game

If I had to hand a new player one category of tech, it'd be bounce. Returning a Cookie to its owner's hand is the most flexible answer Braverse offers - it doesn't care about HP, level, equipped gear, or FLIP status, it just resets the piece and taxes the energy to redeploy it.

**Peppermint Cookie** (BS5-070) is the clean one: a Blue LV.2 with 3 HP whose On Play returns any Cookie in your opponent's battle area to their hand, no strings attached. **Adventurer Cookie** (BS6-080), a Blue LV.1 with 3 HP, does the same on a smaller body if you have five or fewer cards in hand. Because both ride on a Cookie you were playing anyway, bounce barely costs you tempo - you develop *and* answer in one card. That's why it's the backbone of the [tempo archetype](/blog/cookie-run-braverse-tcg/cookie-run-braverse-tempo-deck-guide), but it earns flex slots in plenty of decks that aren't tempo.

The one caveat: bounce delays, it doesn't kill. Against a recursion deck it can even *help* them re-trigger an On Play they wanted back. Bounce is best against expensive, developed, or buffed-up Cookies the opponent can't cheaply recast - and a wasted card against a one-drop they'll just replay.

## Hate cards for teching against a specific deck

Hate cards are the narrowest, highest-variance tech you can run: dead weight in most matchups, backbreaking in the one they target. You only run them when the deck they answer is genuinely everywhere.

The poster child is **Heart Stained With Lies** (BS9-043), a Yellow Item: one Yellow energy and, if your break area is LV.4 or higher, you select an opponent's Equipped Soul Jam and place it on top of that Cookie's HP - stripping the buff off their key threat. Soul Jam decks lean hard on a single equipped Cookie, so peeling it off is a targeted haymaker, and it fires when you're behind (LV.4+), exactly when they've been beating you. If Soul Jam is a big slice of your field it earns a slot; if not, it's dead. The [best Soul Jam cards guide](/blog/cookie-run-braverse-tcg/best-cookie-run-braverse-soul-jam-cards) shows what you're teching against.

Purple offers a different flavor: cards that attack the opponent's deck. **Flipped Coin** (BS9-114) mills 5 off your own deck when your trash is small or 3 off your opponent's when it's stocked; **Wolf in Sheep's Clothing** (BS9-115) draws a card, then mills the opponent 3 if their trash is under 15. You tech these when your plan is to attack the library or fuel Purple trash synergies - the [mill deck guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-mill-deck-guide) has the full engine.

![Official Heart Stained With Lies card (BS9-043), a Yellow Item that removes an opponent's Equipped Soul Jam - a targeted hate card](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-tech-cards-guide/heart-stained-with-lies.webp)

The rule with hate cards is easy to break: only run them if you can name the deck they beat and expect to face it. Check the [meta tier list](/blog/cookie-run-braverse-tcg/cookie-run-braverse-meta-tier-list) before committing slots to a deck that isn't popular in your room.

## Consistency tech that makes the rest work

Here's the part everyone forgets: tech you can't draw is tech you don't have. A one-of silver bullet buried in 60 cards shows up when you need it maybe a third of the time. So the least flashy category is arguably the most important - the dig and draw that raise the odds your answers appear on the turn they matter.

**Concealer of Truth** (BS9-067) is a Green Item: one Green energy, place a support card into your trash, draw up to 2 - raw card advantage toward your answers at a cost a support-light deck barely feels. **Storybook of Lies** (BS9-090), a Blue Item for one Blue, views the top 3 cards and reorders them - a scry that can bury a dead tech card and surface the live one. And for Red shells, **Fateful Cookie Cutter** (BS9-020) draws 2 and discards 1 if one of your Red LV.1 Cookies fainted last turn - refuel that turns a lost trade into gas.

![Official Concealer of Truth card (BS9-067), a Green Item that trashes a support card to draw up to two cards - consistency tech that digs to your answers](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-tech-cards-guide/concealer-of-truth.webp)

None of these are answers themselves. They're what let your two-of Fragmented Soul actually be in hand the game the opponent goes wide. Budget a slot or two for digging and your narrow tech gets quietly more reliable.

## How many tech slots should you run

The math is zero-sum. A Braverse deck is 60 cards, and every slot you hand to tech is a slot not advancing your own plan. Over-tech and you become a pile of answers with no threat - you disrupt three decks and lose to the fourth because you never did anything.

My rule of thumb: keep roughly 48 to 52 cards on your core game plan and reserve 8 to 12 as flex, then split that budget by breadth. Broadly-useful answers - a couple of attack-reducing Traps, a bounce or two - can be maindeck staples because they're live in most matchups. Pointed hate (Soul Jam removal, deck-attack tools) only earns slots proportional to how much of your field it beats: two or three copies if a deck is 40% of your room, zero if it's 10%. And prefer flexible over narrow when power level is close - a card that answers three archetypes beats one that dominates a single deck. It's the same muscle as sideboarding, applied to your maindeck flex: work through the [matchup guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-matchup-guide) to see what you're configuring against, and lock your split before an event with the [tournament guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-tournament-guide).

## Tech-card mistakes that cost you games

These feel reasonable in the moment and quietly tank your win rate:

- **Teching for decks you imagine, not decks you face.** The most common mistake. Log your last 20 losses, find the top two or three decks beating you, and tech those - not the scary deck a streamer played once.
- **Running narrow hate as an undrawn one-of.** A single silver bullet you never draw does nothing. Commit two or three copies so it shows up, or cut it. There's no middle ground.
- **Forgetting the hidden cost.** Overtaken Other-Realm's "discard 2 FLIP Cookies" is trivial in a FLIP deck and crippling outside one; Concealer of Truth eats a support card. Free answers are rarely free.
- **Calling bounce removal.** Returning a Cookie to a deck that wants to replay it is a favor, not an answer. Bounce is a tax on expensive redeploys, not a kill button.
- **Cutting core consistency for tech.** Trim your game plan too far and the deck stops doing its own thing and loses to whatever you *didn't* tech for. Protect the core first - the [beginner mistakes guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-beginner-mistakes) covers more.

The list that wins a local isn't usually the one with the best cards - it's the one whose flex slots were pointed at the exact decks in that room. Build your core, watch your losses, and let the field tell you which answers to run.

## Quick Action Checklist

- **Lock your core first** - keep roughly 48-52 cards doing your game plan before you spend a single slot on tech.
- **Run 2-3 attack-reducing Traps** - Fragmented Soul (BS9-046) and Reversed Prophecy (BS9-093) blank lethal swings and refund a card.
- **Match removal to your losses** - Scovilsky Manuscript (BS7-020) is comeback removal; pick the answer whose condition fits the decks that beat you.
- **Keep bounce for expensive threats** - Peppermint Cookie (BS5-070) and Adventurer Cookie (BS6-080) tax redeploys; never bounce a one-drop.
- **Only run hate when the meta demands it** - Heart Stained With Lies (BS9-043) is great against Soul Jam decks and dead against everything else.
- **Budget a dig slot or two** - Concealer of Truth (BS9-067) and Storybook of Lies (BS9-090) make your one-of answers actually show up.
- **Commit or cut narrow tech** - a single undrawn silver bullet does nothing; run two or three copies or none.
- **Tech the decks you face, not the ones you fear** - log your losses and configure against the real field.
- **Verify current printings against the official database** - the English pool is young and shifts set to set.`,
  faq: [
    {
      question: 'What is a tech card in Cookie Run: Braverse?',
      answer:
        "A tech card is a flexible slot you include to answer a specific problem rather than to advance your own game plan. The test is simple: would you still run the card if every opponent were on your exact deck? If not, it's tech. In Braverse, tech mostly lives in Traps (reactive answers like Fragmented Soul BS9-046 that reduce attack damage), Items (proactive answers like Scovilsky Manuscript BS7-020), and a few utility Cookies such as the bounce pair Peppermint Cookie (BS5-070) and Adventurer Cookie (BS6-080).",
    },
    {
      question: 'How many tech cards should a Braverse deck run?',
      answer:
        'Keep roughly 48 to 52 of your 60 cards doing your core game plan and reserve about 8 to 12 as flex. Split that flex budget by breadth: broadly-useful answers like attack-reducing Traps and bounce can be maindeck staples because they are live in most matchups, while narrow hate cards only earn slots proportional to how much of your local field they actually beat. Over-teching turns you into a pile of answers with no threat of your own, so protect the core first.',
    },
    {
      question: 'What are the best answer cards in Cookie Run: Braverse?',
      answer:
        "The most universally useful answers are the attack-reducing Traps - Fragmented Soul (BS9-046) and Reversed Prophecy (BS9-093) both drop a Cookie's attack damage by 2 and refund you a card - plus bounce, which resets any Cookie regardless of HP or level via Peppermint Cookie (BS5-070) and Adventurer Cookie (BS6-080). For removal, Scovilsky Manuscript (BS7-020) deals 3 damage to a LV.1 Cookie when you are behind. The English meta is young, so verify the current pool against the official database before an event.",
    },
    {
      question: 'Are Traps or Items better as tech cards in Braverse?',
      answer:
        "Neither is strictly better - they do different jobs. Traps are reactive, opponent's-turn answers you set in your support area, which makes them ideal for blunting attacks and blanking lethal swings (Fragmented Soul BS9-046, Radiant Light of Protection BS9-068). Items are proactive answers you play on your own turn, better suited to removal and disruption you want to fire on your schedule (Scovilsky Manuscript BS7-020, Heart Stained With Lies BS9-043). Most tuned decks run a mix of both.",
    },
    {
      question: 'How do I tech against Soul Jam decks in Braverse?',
      answer:
        'The most direct answer is Heart Stained With Lies (BS9-043), a Yellow Item that, when your break area is LV.4 or higher, lets you strip an opponent\'s Equipped Soul Jam off their key Cookie by placing it on top of that Cookie\'s HP. Since Soul Jam decks lean on getting a single equipped threat online, peeling it off is a targeted haymaker. Only commit slots to it if Soul Jam is a real share of your local field - it is a dead card against everything else.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'GamerTagMythras blog' },
    { href: '/blog/cookie-run-braverse-tcg', anchor: 'Braverse hub' },
    {
      href: '/blog/cookie-run-braverse-tcg/best-braverse-item-trap-stage-cards',
      anchor: 'best Items, Traps, and Stages guide',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-tempo-deck-guide',
      anchor: 'tempo archetype',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-cookie-run-braverse-soul-jam-cards',
      anchor: 'best Soul Jam cards guide',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-matchup-guide',
      anchor: 'matchup guide',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-tournament-guide',
      anchor: 'tournament guide',
    },
  ],
  externalSources: [
    { url: 'https://cookierunbraverse.com/en/', title: 'Official Cookie Run: Braverse site' },
    { url: 'https://cookierunbraverse.com/data/json/cardList_en.json', title: 'Official Card Database (JSON)' },
    {
      url: 'https://cookierun.fandom.com/wiki/Cookie_Run_Braverse',
      title: 'Cookie Run Braverse Wiki',
    },
  ],
  tldr:
    "Tech cards are the flexible flex slots you run to answer a specific deck rather than advance your own plan - the test is whether you would still run the card in the mirror. In Cookie Run: Braverse they live in attack-reducing Traps (Fragmented Soul BS9-046, Reversed Prophecy BS9-093), conditional removal Items (Scovilsky Manuscript BS7-020), flexible bounce (Peppermint Cookie BS5-070, Adventurer Cookie BS6-080), and pointed hate like Soul Jam removal (Heart Stained With Lies BS9-043). Keep 48-52 cards on your core game plan and reserve 8-12 flex slots, weighting broad answers over narrow hate, and tech the decks you actually face rather than the ones you fear.",
};
