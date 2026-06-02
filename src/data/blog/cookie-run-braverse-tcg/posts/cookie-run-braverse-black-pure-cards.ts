import type { BlogPost } from '../../blogTypes';

export const braverseBlackPureCards: BlogPost = {
  slug: 'cookie-run-braverse-black-pure-cards',
  game: 'cookie-run-braverse-tcg',
  category: 'card-guides',
  topicCluster: 'card-evaluation',
  tags: ['Black', 'Pure', 'Dark Enchantress', 'Ancient'],
  title: "Cookie Run: Braverse Black & Pure Cards, Explained",
  metaDescription:
    "Black and Pure cards in Cookie Run: Braverse explained - the two groups beyond the five colors. Where they come from, what they do, and how you use them.",
  excerpt:
    "Five colors, plus two groups that don't play by the color rules. Black is the Dark Enchantress War's villain faction with its own energy; Pure is a tiny set of universal, multi-color specials. Here's what each one actually is, straight from the official database.",
  featuredImagePrompt:
    "A dark-violet Cookie Run: Braverse Cookie card with a black-and-gold frame glowing against a swirling shadow backdrop, set apart from a row of the five standard color cards to signal it belongs to a special group.",
  heroImage:
    '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-black-pure-cards/dark-enchantress-cookie.webp',
  heroImageAlt:
    'Official Dark Enchantress Cookie card (BS11-115), the Genesis Extra Rare that headlines the Black card group in Cookie Run: Braverse, with a Black {K} energy cost and a Special Play sacrifice ability.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-black-pure-cards/dark-enchantress-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/FvwPP1iFqeFNjNfz3SOJjw.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-black-pure-cards/dark-enchantress-cookie-awakened.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/1tCs8r-B2FAyWLAqota0WA.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-black-pure-cards/age-of-heroes-and-kingdoms.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/zUDhDs78oe-ImfoQx1nZLg.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-black-pure-cards/white-lily-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/h0CcgrkD7bM_XcWtGiPPrQ.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
  ],
  publishDate: '2026-06-02T00:00:00.000Z',
  lastUpdated: '2026-06-02T00:00:00.000Z',
  primaryKeyword: 'cookie run braverse black and pure cards',
  secondaryKeywords: [
    'braverse black cards',
    'braverse pure cards',
    'cookie run braverse dark enchantress cards',
    'braverse special card colors',
    'what are black cards in cookie run braverse',
    'cookie run braverse pure color',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: false,
  readingTimeMin: 10,
  toc: [
    { id: 'two-groups-that-dont-play-by-the-color-rules', label: 'Two groups that don\'t play by the color rules', level: 2 },
    { id: 'black-the-dark-enchantress-faction', label: 'Black: the Dark Enchantress faction', level: 2 },
    { id: 'how-the-black-engine-works', label: 'How the Black engine works', level: 2 },
    { id: 'the-cards-that-anchor-black', label: 'The cards that anchor Black', level: 2 },
    { id: 'pure-the-universal-specials', label: 'Pure: the universal specials', level: 2 },
    { id: 'the-seven-pure-cards', label: 'The seven Pure cards', level: 2 },
    { id: 'how-you-actually-encounter-these-cards', label: 'How you actually encounter these cards', level: 2 },
    { id: 'do-you-need-them', label: 'Do you need them', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Open the official card database, filter by color, and you'll count seven options - not five. After Red, Yellow, Green, Blue, and Purple, there are two more tags that aren't colors in the normal sense: **Black** and **Pure**. They don't get a Starter Deck, they don't anchor a playstyle the way the five colors do, and most beginner guides either ignore them or wave at them vaguely. So let's do the thing those guides won't: read every Black and Pure card in the database and say exactly what they are.

Short version up front. **Black is a faction**, not a color identity - 26 cards, almost all from a single set, built around the Dark Enchantress Cookie and her minions, running on their own energy symbol. **Pure is a grab-bag of universal specials** - seven distinct cards that cost any color (or all of them) and slot into any deck rather than belonging to one. If you've already read [the five colors explained](/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained) and [the seven card types](/blog/cookie-run-braverse-tcg/cookie-run-braverse-card-types-explained), this is the footnote that finally fills in the rest of the color filter.

A standing caveat for the whole piece: card *text* below is quoted from the official database, but several of these cards introduce mechanics - Special Play, Awaken, the Extra Deck, alternate win conditions - whose precise interactions are worth confirming against the official rulebook before a sanctioned event. We'll flag those as we go rather than overclaim a ruling.

## Two groups that don't play by the color rules

Here's the cheat sheet, then we go deep on each.

| Group | What it is | Count in the database | Where it comes from |
| --- | --- | --- | --- |
| **Black** | A self-contained villain faction with its own {K} energy | 26 distinct cards | Almost entirely the *Dark Enchantress War* set, plus one promo |
| **Pure** | Universal multi-color "specials" that fit any deck | 7 distinct cards | Spread across four booster sets and promos |

The key difference: Black behaves like a sixth color with a full toolkit - Cookies, FLIP cards, Items, Traps, and a Stage - that wants to be built around. Pure isn't a deck you build; it's a handful of powerful cards that cost generic or rainbow energy and get splashed into decks of other colors. One is a faction; the other is a category.

## Black: the Dark Enchantress faction

Black is the closest thing Braverse has to a "boss color." Of the 26 Black cards in the database, 25 come from the **Dark Enchantress War** booster set, with a single promo Licorice Cookie (P-147) rounding it out. That's a tell: Black wasn't seeded across the game's history like the five colors. It dropped as a themed package built around one villain.

The roster breaks down as **16 Cookies, 5 FLIP cards, 2 Traps, 2 Items, and 1 Stage** - a complete deck's worth of card types, all keyed to the same energy. And that energy is the headline mechanical quirk: Black cards cost **{K}** (a black/dark energy symbol), distinct from the {R}/{Y}/{G}/{B}/{P} of the five colors and the {N} "any color" symbol. So Black isn't just a flavor label slapped on Purple cards. It's its own resource, which is exactly why it reads as a faction rather than a sub-theme.

The cast sells the fantasy hard. You've got the boss herself (Dark Enchantress Cookie), her loyal Pomegranate Cookie, the white-clad Licorice Cookie, and a whole army of cake-and-dough minions: Jam Skelecake Grunt, Cream Skelecake Archer, Skelecake Bomber, Cake Warrior, Cake Witch, Mold Dough Cookie, Pom-pom Dough Cookie, Venom Dough Cookie, and a Red Velvet Dragon for good measure. Even the support cards are on-theme - Dark Enchantress's Castle (Stage), Emblem of Darkness (Item), World-reflecting Mirrors and Draining Magic Circle (Traps). This is a villain deck-in-a-box, not loose singles.

## How the Black engine works

![Official Dark Enchantress Cookie card (BS11-116), the Secret Ultra Rare Awakened form that turns her LV.3 Special Play version into a seven-attack threat once your break area is high enough.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-black-pure-cards/dark-enchantress-cookie-awakened.webp)

Read the Black cards together and a mechanic jumps out repeatedly: **Special Play**. The minions get cheaper or stronger when there's a "Cookie that has Special Play" on your board, and the boss cards *cost* Special Play Cookies to deploy. Concretely, the database text describes a sacrifice loop:

- The dough Cookies (Mold Dough, Pom-pom Dough, Venom Dough) and Licorice each have a **Special Play** clause reading "Place 1 {K} LV.1 Cookie from your battle area into your trash" - you feed cheap minions to play your bigger threats.
- Cake Witch's skill fires "when this Cookie faints," digging a {K} card off the top of your deck - so your minions are *meant* to die.
- Skelecake Bomber returns "a Cookie that has Special Play from your trash to your hand," recycling the fuel.
- Dark Enchantress's Castle (the Stage) lets you "draw up to 1 card from your deck and discard 1" during a turn you played a Cookie via Special Play.

If you've played other TCGs, this is an aristocrats/sacrifice deck wearing a {K} coat: spend small bodies to enable big ones, profit when things die, and rebuild from the trash. That makes Black genuinely Purple-adjacent in feel (trash matters, recursion matters) without sharing Purple's energy. The exact rules for Special Play, Awaken, and the Extra Deck aren't something I'd quote to a judge cold - confirm those against the official rulebook - but the *intent* in the card text is unambiguous.

## The cards that anchor Black

The two cards that define the faction are both **Dark Enchantress Cookie**, and the split between them is the whole payoff structure:

- **Dark Enchantress Cookie** (BS11-115, Genesis Extra Rare, 6 HP, costs {K}). Her Deep Dark Magic Special Play places "2 {K} LV.2 Cookies that have Special Play from your battle area into your trash," and her On Play deals 1 damage to all of the opponent's Cookies if their support area is loaded (4+ cards). Her attack, Visions of Doom, deals 4, then can pay extra {K}{K} to deal 2 more to a chosen Cookie. That's a board-wide ping plus a heavy single-target swing on one body.
- **Dark Enchantress Cookie** (BS11-116, Secret Ultra Rare, the Awakened form). This is an **EXTRA** card with a hard gate: "If your break area is LV.7 or higher and [Dark Enchantress's Castle] is in your stage area, you can Awaken your LV.3 Dark Enchantress Cookie that has Special Play." The reward is Fornacem Accende!, a **7-damage attack**, on a Cookie that "cannot be moved from the battle area by your opponent's effects." It's the deck's finisher, and it literally requires you to have built the rest of the package (the Castle, a high break area, the LV.3 boss in play).

Around them, **Pomegranate Cookie** (BS11-114, Secret Super Rare) is the devoted lieutenant - her attack can "return up to 1 Dark Enchantress Cookie from your trash to your hand," so the boss keeps coming back. And **Mold Dough Cookie** (BS11-111, Secret Rare) is the workhorse Special Play minion that pings on entry. The promo **Licorice Cookie** (P-147) is a hand-disruption flavor of the same shell - on play, "if there are 4 cards or more in your opponent's hand, your opponent places 1 card from their hand into their trash."

> The honest read on Black: it's the most "built-around" group in the game. You don't splash a Black card into a Red deck - you commit to the {K} faction or you don't run it. That's the opposite of how Pure works.

## Pure: the universal specials

If Black is a faction you build, **Pure is the splash pile**. There are only seven distinct Pure cards in the database (you'll see more entries in the filter because several have alternate-art and promo printings - Age of Heroes and Kingdoms alone has multiple versions). What unites them isn't a faction; it's that they cost **generic or rainbow energy** - {N} "MIX," or all five colors at once - so they don't belong to any single color's resource base. That's the literal meaning of "Pure" here: color-agnostic.

Mechanically they're a spread, not a deck: **3 Stage cards, 2 Cookies, 1 Item, and 1 Trap**. A few are clearly the marquee, big-table cards of their sets - alternate win conditions and Ancient payoffs - and a couple are narrower utility splashes. None of them define a playstyle; they're tools that powerful decks reach for.

## The seven Pure cards

![Official Age of Heroes and Kingdoms card (BS3-121), a Pure Stage with a five-color cost and an alternate win condition built around Ancient Cookies and Soul Jam cards.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-black-pure-cards/age-of-heroes-and-kingdoms.webp)

Here's the entire Pure group, with what each one actually does per the database:

| Card | Type | Cost | What it does |
| --- | --- | --- | --- |
| **Age of Heroes and Kingdoms** (BS3-121) | Stage | All five colors | Alternate win condition - rest it with 5 different [Ancient] Cookies and 5 different [Soul Jam] cards in play and "you win the game" |
| **Cookies of Legend** (BS4-111) | Stage | {N}x5 | Bounces all LV.2-or-lower Cookies on both sides to the bottom of their decks, then buffs one of your LV.3 Cookies +1 HP |
| **Hall of Ancient Heroes** (P-032) | Stage (promo) | Five colors / MIX | Changes an [Ancient] Cookie's attack costs to {N}, smoothing the resource demands of a rainbow Ancient deck |
| **White Lily Cookie** (BS11-090) | Cookie (Ancient) | {PURE} | 6 HP Ancient; can faint herself to "play [Avatar of Destiny] from your Extra Deck, ignoring its play requirements," then gain +3 HP |
| **Avatar of Destiny** (BS11-091) | Cookie | {PURE} | An EXTRA Cookie gated behind both break areas being LV.6+ and both hands at 3 cards or less; a 5-attack payoff |
| **Wrath of the Dragons** (BS5-111) | Item | {N} | Equips to a [Dragon] Cookie; if that Cookie is at 3 HP or less, +1 attack and -1 damage taken |
| **Arena of Glory** (BS7-108) | Trap | {N} | Drops an opposing Cookie's attack by 1; if your break area lead is big enough, hits a LV.3 Cookie for -2 |

![Official White Lily Cookie card (BS11-090), a Pure Ancient Cookie costing PURE energy that can faint herself to play Avatar of Destiny from the Extra Deck.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-black-pure-cards/white-lily-cookie.webp)

A couple of these deserve calling out. **Age of Heroes and Kingdoms** is one of the game's rare alternate win conditions - it's the card the entire ten-piece Soul Jam suite is built to enable, since you need "5 different Soul Jam cards" in play to fire it. (For the Soul Jam side of that combo, see our ranking of [the best Soul Jam cards](/blog/cookie-run-braverse-tcg/best-cookie-run-braverse-soul-jam-cards).) And the **White Lily Cookie / Avatar of Destiny** pair is a self-contained Extra Deck mini-combo from the Dark Enchantress War set: sacrifice White Lily to cheat out the Avatar. Both lean on the **Extra Deck** and **Awaken/EXTRA** rules, which are exactly the mechanics to verify against the official rulebook before you bank a tournament line on them.

## How you actually encounter these cards

For a new player, the practical questions are "where do I get these" and "will I face them." The database answers both.

You **pull them from the same booster packs** as everything else - they're not a separate product line. Black is concentrated in *The Dark Enchantress War*, so if you crack that set you'll see the {K} faction; the promo Licorice comes through promotional distribution. Pure cards are scattered: Arena of Glory is from the *Arena of Glory* set, Wrath of the Dragons from *Operation Timeguard*, the two big Stages from *Age of Heroes and Kingdoms*, and the White Lily / Avatar pair from *Dark Enchantress War* again, plus promo printings of a few.

You'll **face Black as a coherent deck** if your opponent is on the Dark Enchantress strategy - it plays like a sacrifice/aristocrats list and telegraphs itself the moment they start feeding minions to the trash. You'll **face Pure cards as splashes** inside other decks - an Ancient-rainbow deck running Age of Heroes and Kingdoms as a backup win con, a Dragon deck packing Wrath of the Dragons, a control deck holding Arena of Glory. Recognizing them on sight is the real benefit of reading this list.

## Do you need them

Mostly, no - and that's fine. These are not the cards a beginner needs to chase. The five colors are where you learn the game, pick a [starter deck](/blog/cookie-run-braverse-tcg/best-cookie-run-braverse-starter-deck), and build your first real list off [deck-building basics](/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics).

Black matters if the Dark Enchantress sacrifice plan is the *fantasy that excites you* - it's a committed, build-around faction with a high-rarity payoff, and it's a real deck, not a gimmick. Pure matters as a deckbuilding awareness: when you're ready to splash a universal bomb or chase the Ancient/Soul Jam alternate win condition, these seven cards are the tools you reach for. Neither group changes the "learn one color first" advice - they're the layer you add once the five-color core makes sense.

## Quick Action Checklist

- **Treat Black as a faction, not a color.** It runs on its own {K} energy and wants the whole Dark Enchantress package - don't splash a single Black card into a five-color deck.
- **The Black plan is sacrifice/recursion.** Feed cheap Special Play minions to deploy Dark Enchantress Cookie (BS11-115), then Awaken into the BS11-116 finisher.
- **Treat Pure as splashes.** All seven cost generic or rainbow energy, so they fit any deck rather than defining one.
- **Know the alternate win con.** Age of Heroes and Kingdoms (BS3-121) wins the game with 5 Ancients and 5 Soul Jams in play - it's the payoff the Soul Jam suite enables.
- **Don't count alt-art as new cards.** The Pure filter shows extra entries because several cards (like Age of Heroes and Kingdoms) have multiple printings - there are still only seven distinct Pure cards.
- **Verify the deep mechanics.** Special Play, Awaken, the Extra Deck, and the alternate win condition are the rules to confirm against the official rulebook before a sanctioned event.
- **You don't need either group to start.** Learn the five colors first; reach for Black or Pure once your core deck makes sense.`,
  faq: [
    {
      question: "What are Black cards in Cookie Run: Braverse?",
      answer:
        "Black is a special card group beyond the five standard colors - effectively the Dark Enchantress villain faction. The official database lists 26 distinct Black cards, almost all from the Dark Enchantress War set (plus one promo Licorice Cookie), spanning Cookies, FLIP cards, Items, Traps, and a Stage. They run on their own {K} energy symbol and are built around a Special Play sacrifice-and-recursion engine headlined by Dark Enchantress Cookie.",
    },
    {
      question: "What are Pure cards in Cookie Run: Braverse?",
      answer:
        "Pure is a small group of universal, multi-color 'special' cards - seven distinct cards in the official database. Instead of belonging to one color, they cost generic ({N}/MIX) or all-five-color rainbow energy, so they splash into any deck. The group is 3 Stage cards, 2 Cookies, 1 Item, and 1 Trap, including the alternate-win-condition Stage Age of Heroes and Kingdoms.",
    },
    {
      question: "How many Black and Pure cards are there?",
      answer:
        "The official database has 26 distinct Black cards and 7 distinct Pure cards. The Pure filter can look bigger because several Pure cards have alternate-art and promo printings (Age of Heroes and Kingdoms alone has multiple versions), but those are reprints of the same seven cards, not new ones.",
    },
    {
      question: "What is the Dark Enchantress Cookie's role in Black?",
      answer:
        "She's the faction's payoff and comes in two versions. The Genesis Extra Rare (BS11-115) is a 6-HP boss that pings the opponent's whole board and swings for 4-plus. The Secret Ultra Rare (BS11-116) is an Awakened EXTRA form that requires Dark Enchantress's Castle in your stage area and a LV.7+ break area, then becomes a 7-attack finisher that your opponent can't move off the board. The exact Awaken rules are worth confirming against the official rulebook.",
    },
    {
      question: "Do I need Black or Pure cards as a new player?",
      answer:
        "No. The five colors are where you should learn the game and build your first deck. Black matters only if you want to commit to the Dark Enchantress sacrifice deck, and Pure cards are situational splashes for established decks (like the Ancient/Soul Jam alternate win condition). Both are an advanced layer you add after the five-color core clicks.",
    },
    {
      question: "Why are Black cards a separate energy and not just Purple?",
      answer:
        "Because the database gives them their own cost symbol, {K}, distinct from the five colors' {R}/{Y}/{G}/{B}/{P} and the {N} 'any color' symbol. That's why Black reads as a faction rather than a sub-theme of Purple - you build your resource base around {K} specifically, so you commit to it rather than splashing it. Black does share Purple's trash-and-recursion feel, but it is its own resource.",
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-braverse-tcg', anchor: 'Braverse hub' },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-colors-explained',
      anchor: 'the five colors explained',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-card-types-explained',
      anchor: 'the seven card types',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-cookie-run-braverse-soul-jam-cards',
      anchor: 'the best Soul Jam cards',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-purple-cards-cookie-run-braverse',
      anchor: 'best Purple cards',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-cookie-run-braverse-starter-deck',
      anchor: 'best starter deck guide',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-deck-building-basics',
      anchor: 'deck-building basics',
    },
  ],
  externalSources: [
    { url: 'https://cookierunbraverse.com/en/', title: 'Official Cookie Run: Braverse site' },
    { url: 'https://play.cookieruntcg.com/cards', title: 'Official Card Database' },
    {
      url: 'https://cookierun.fandom.com/wiki/Cookie_Run_Braverse',
      title: 'Cookie Run Braverse Wiki',
    },
  ],
  tldr:
    "Cookie Run: Braverse has two card groups beyond the five colors. Black is the Dark Enchantress villain faction - 26 cards, almost all from the Dark Enchantress War set, running on their own {K} energy and built around a Special Play sacrifice engine headlined by Dark Enchantress Cookie (BS11-115/116). Pure is a set of seven universal 'special' cards that cost generic or rainbow energy and splash into any deck, including the alternate-win-condition Stage Age of Heroes and Kingdoms. Neither is needed to start; both are an advanced layer on top of the five-color core.",
};
