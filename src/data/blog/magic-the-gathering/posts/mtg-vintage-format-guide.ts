import type { BlogPost } from '../../blogTypes';

export const mtgVintageFormatGuide: BlogPost = {
  slug: 'mtg-vintage-format-guide',
  game: 'magic-the-gathering',
  category: 'format-guides',
  topicCluster: 'vintage-format',
  tags: ['vintage', 'eternal-formats', 'power-nine', 'restricted-list', 'mtgo'],
  title: 'Magic: The Gathering Vintage Format Guide: The Power Nine, the Restricted List, and How to Actually Play It',
  metaDescription:
    'What MTG Vintage really is: the Power Nine, the restricted list vs the banned list, the proxy reality, and how to start playing Vintage in paper and on MTGO.',
  excerpt:
    "Vintage is the only format where a turn-one win is a fair expectation and a $20,000 deck is a normal deck. Here is what Vintage actually is — the Power Nine, the restricted list, the proxy reality — and how a sane person gets in without selling a kidney.",
  featuredImagePrompt:
    'A cracked black lotus flower glowing with raw arcane mana, petals dissolving into colored energy, dark ornate background, painterly fantasy art style, no text',
  heroImage: '/images/blog/magic-the-gathering/mtg-vintage-format-guide/black-lotus.jpg',
  heroImageAlt:
    'Black Lotus, the zero-mana artifact that adds three mana of one color when sacrificed — the most iconic restricted card in MTG Vintage.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-vintage-format-guide/black-lotus.jpg',
      sourceUrl: 'https://scryfall.com/card/vma/4/black-lotus',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-vintage-format-guide/ancestral-recall.jpg',
      sourceUrl: 'https://scryfall.com/card/vma/1/ancestral-recall',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-vintage-format-guide/time-walk.jpg',
      sourceUrl: 'https://scryfall.com/card/vma/2/time-walk',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-vintage-format-guide/sol-ring.jpg',
      sourceUrl: 'https://scryfall.com/card/msc/211/sol-ring',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
  ],
  publishDate: '2026-06-23T00:00:00.000Z',
  lastUpdated: '2026-06-23T00:00:00.000Z',
  primaryKeyword: 'mtg vintage format guide',
  secondaryKeywords: [
    'what is vintage mtg',
    'mtg power nine',
    'vintage restricted list',
    'how to play vintage mtg',
    'vintage vs legacy mtg',
    'mtg vintage proxies',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'what-is-vintage-in-mtg', label: 'What is Vintage in MTG', level: 2 },
    { id: 'the-power-nine', label: 'The Power Nine', level: 2 },
    { id: 'restricted-vs-banned-the-part-everyone-gets-wrong', label: 'Restricted vs banned: the part everyone gets wrong', level: 2 },
    { id: 'the-banned-list-is-tiny', label: 'The banned list is tiny', level: 2 },
    { id: 'why-vintage-exists', label: 'Why Vintage exists', level: 2 },
    { id: 'what-vintage-games-actually-look-like', label: 'What Vintage games actually look like', level: 2 },
    { id: 'the-proxy-reality', label: 'The proxy reality', level: 2 },
    { id: 'how-to-start-paper-and-mtgo', label: 'How to start: paper and MTGO', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Vintage is the format where the most broken cards ever printed are still legal, and the only thing keeping it from being completely unplayable is a list that says "you may run exactly one copy of these." It is the deepest card pool in Magic, the highest power level, and the only sanctioned format where a flawless opening hand can flat-out win on turn one. It is also the format most people misunderstand the hardest, usually by confusing "restricted" with "banned" and assuming a $20,000 deck is the only way in.

Both of those assumptions are wrong, and that is the whole point of this guide. Vintage is more accessible than its reputation, governed by rules that are simpler than they look, and built around a tiny, legendary group of cards — the Power Nine — that you don't actually need to own to play. Every card, cost, and legality call here has been checked against Scryfall's current legality data, because Vintage's restricted list is long and people quote it from memory and get it wrong constantly.

Here is what Vintage really is, why the restricted list is the genius mechanism holding it together, the proxy reality nobody tells newcomers about, and a realistic plan to start.

## What is Vintage in MTG

Vintage is a 60-card eternal constructed format. You build a minimum 60-card deck plus a 15-card sideboard, run up to four copies of any card — *unless* that card is restricted, in which case you run exactly one — and play one-on-one, best-of-three with sideboarding between games. Structurally it is the same shell as Standard, Modern, and Legacy. The only thing that changes is which cards are legal and how many you can run.

What sets Vintage apart is the pool. Vintage is the largest card pool in the game: **nearly every card ever printed in a tournament-legal set is Vintage-legal.** Where Standard rotates, Pioneer starts at Return to Ravnica, and Modern starts in 2003, Vintage goes all the way back to Alpha in 1993. That includes the cards Wizards has since declared too powerful for any other constructed format — Black Lotus, the Moxen, Ancestral Recall. In Vintage they are legal. They are just restricted to one copy each.

That single design decision — restrict instead of ban — is what makes Vintage the format it is. It is the only place you can legally cast the cards that defined the game's first decade, which is exactly why it draws the players it draws.

## The Power Nine

The Power Nine are the nine most powerful cards ever printed, all from Magic's earliest sets (Alpha, Beta, Unlimited), and all **restricted in Vintage** — meaning legal, one copy per deck. They are the reason Vintage exists as a distinct format and the reason it has the reputation it has.

![Black Lotus, a zero-mana artifact you sacrifice to add three mana of any one color — the single most powerful card in Magic and the cornerstone of the Power Nine.](/images/blog/magic-the-gathering/mtg-vintage-format-guide/black-lotus.jpg)

The nine:

- **Black Lotus** — {0} artifact. Sacrifice it for three mana of any one color. A zero-cost mana rocket that can power out a threat on turn one.
- **Ancestral Recall** — {U} instant. Draw three cards for a single blue mana. Widely considered the most efficient card-draw spell ever printed.
- **Time Walk** — {1}{U} sorcery. Take an extra turn for two mana. An extra turn for two mana is absurd, which is why it is a one-of.
- **Timetwister** — {2}{U} sorcery. Each player shuffles their hand and graveyard into their library and draws seven. A symmetrical refill that the right deck breaks in half.
- **Mox Pearl, Mox Sapphire, Mox Jet, Mox Ruby, Mox Emerald** — five {0} artifacts, one per color. Each taps for one mana of its color. Free mana rocks that accelerate you a full turn ahead with no cost but the card.

Every one of the Power Nine is restricted, not banned, in Vintage. They are banned in Legacy and (with a couple of exceptions like Timetwister) banned in Commander, which is exactly why Vintage is the only sanctioned home they have. Note that **Sol Ring and Mana Crypt**, two other format-warping fast-mana artifacts, are also restricted in Vintage — they are not technically part of the "Power Nine," but they live on the restricted list right alongside it.

## Restricted vs banned: the part everyone gets wrong

This is the single most important concept in Vintage, and it is the thing newcomers and lapsed players get wrong constantly. **Restricted does not mean banned.**

- **Banned** = you cannot play the card at all. Zero copies.
- **Restricted** = you can play exactly **one** copy in your deck (main plus sideboard combined). It is fully legal, just limited to a singleton.

Vintage is the only constructed format that uses a restricted list as its primary balancing tool. Instead of banning the broken cards, Wizards restricts them. The logic is elegant: a card like Ancestral Recall is degenerate as a four-of, but as a one-of you have to draw it, you can't build your whole deck around reliably casting it, and the variance keeps it from defining every game. Restriction caps a card's consistency without erasing the history of the game.

![Ancestral Recall, a one-mana blue instant that draws three cards — restricted to a single copy in Vintage and considered the most efficient draw spell ever printed.](/images/blog/magic-the-gathering/mtg-vintage-format-guide/ancestral-recall.jpg)

The restricted list is long — far longer than the Power Nine. It includes the Power Nine, the other fast-mana artifacts (Sol Ring, Mana Crypt), and a rotating cast of the most powerful tutors, draw spells, and combo enablers that have proven too consistent at four copies over the years. Wizards updates it through the same banned-and-restricted announcements that govern every other format, and cards get added (or, occasionally, freed) as the metagame shifts.

The practical upshot: when you read an old Vintage list, every Power-Nine-tier card in it is a one-of by rule. You will never see four Black Lotuses or four Ancestral Recalls in a legal Vintage deck, because the format does not allow it. If a list shows multiples of a famous broken card, it is either illegal or you're misreading it.

## The banned list is tiny

Here is the part that surprises people: Vintage's *banned* list is short, and almost nothing is banned for being too powerful. The truly broken cards aren't banned — they're restricted. So what's actually banned?

Vintage bans cards for being **non-functional in a normal tournament**, not for being overpowered. The banned list is essentially:

- **Ante cards** — cards from the early sets that play for ownership of cards (Contract from Below, Demonic Attorney, and the rest). Ante isn't a thing in modern tournaments, so these are banned.
- **Cards that reference physical dexterity or playing for stakes** — the handful of "manual dexterity" cards (like Chaos Orb and Falling Star) whose effects depend on physically flipping or dropping the card.
- **Conspiracy cards and other cards from the Conspiracy supplemental sets** that are designed only for multiplayer draft and don't function in a normal constructed game.
- **Cards that physically alter the deck or game outside the normal rules**, plus the offensive/racist cards Wizards has officially removed from all formats.

That's the spirit of the Vintage banned list: it bans the cards that *can't work* in a sanctioned 1v1 tournament, not the cards that are too good. The too-good cards get restricted. Once you internalize that split — restricted for power, banned for non-functionality — the whole format's legality structure makes sense.

## Why Vintage exists

Vintage exists for two reasons worth understanding before you decide whether it's for you.

**Preservation.** Magic has cards too powerful for any other constructed format. Rather than declaring them dead forever, Wizards keeps one sanctioned format where they remain legal. Vintage is the living museum of the game — the one place the Power Nine still see tournament play. For a lot of players, that history is the whole appeal.

**The skill ceiling.** Because the most powerful cards are legal, Vintage rewards tight play more than almost any format. Games are fast, the stakes per decision are enormous, and the singleton rule means you can't rely on drawing your bomb. High-level players love it precisely because it's hard, swingy, and demands perfect sequencing. Vintage doesn't exist to be fair the way Standard does — it exists to be the deepest, most powerful expression of the game, with restriction keeping it from collapsing into a coin flip.

## What Vintage games actually look like

Vintage is fast — the fastest sanctioned constructed format by a wide margin. The fast-mana base (Lotus, Moxen, Sol Ring, Mana Crypt) means powerful decks can do something backbreaking on turn one, and the best draws can win outright before the opponent untaps.

![Time Walk, a two-mana sorcery that grants an extra turn — restricted in Vintage and a textbook example of why the format limits its most powerful cards to one copy.](/images/blog/magic-the-gathering/mtg-vintage-format-guide/time-walk.jpg)

But "turn-one win" is the ceiling, not the average. The format's defining tension is between the explosive proactive decks trying to win immediately and the **blue control and tempo decks** packed with free interaction — Force of Will, Mental Misstep, and the rest — whose whole job is to say "no" to the broken opening. Blue is the dominant color in Vintage for exactly this reason: the free counterspells are the brakes on the fast-mana engine.

The metagame sorts into a few families: **fast combo** decks assembling a game-winning interaction off the restricted fast mana, **blue control / tempo** decks leaning on free counters and restricted card-advantage engines, and **Workshop-style artifact decks** locking the opponent out under a fast clock. Whatever the lists, everything operates a turn or two faster than any other format, and games are decided by who blinks first.

## The proxy reality

Now the part nobody tells newcomers, and the part that makes Vintage far more accessible than its reputation: **most Vintage is played with proxies.**

A genuine Power Nine set, in real cards, runs into five figures. A fully powered paper Vintage deck can cost more than a used car. If "real cards only" were the bar, Vintage would have died decades ago. It didn't, because the community runs on proxies:

- **Local and grassroots Vintage events almost always allow proxies.** Many run as explicitly "proxy-friendly" or fully proxied. The accepted etiquette is to print clear proxies, sleeve them, and play — nobody is bringing a real Black Lotus to a casual Vintage night.
- **Online, the cost barrier doesn't exist the same way.** On Magic Online (MTGO), the digital cards are a fraction of the paper price, and you can build a competitive Vintage deck for a manageable amount. MTGO is where a huge share of competitive Vintage actually happens, including the regular Vintage Challenge events.
- **Sanctioned, no-proxy paper Vintage exists too** — the high-level events where real cards are required — but it is the minority of Vintage play, not the entry point. The format's day-to-day life is proxied tables and MTGO leagues.

So when someone says "Vintage costs $20,000," they mean a fully-powered, no-proxy paper deck — which is true, and almost irrelevant to how most people actually play. Don't let the price tag of the real Power Nine scare you off a format you can play tonight with a printer or an MTGO account.

## How to start: paper and MTGO

If Vintage's history and skill ceiling appeal to you, here's the realistic on-ramp.

![Sol Ring, a one-mana artifact that taps for two colorless — restricted in Vintage as one of the format's defining fast-mana accelerants.](/images/blog/magic-the-gathering/mtg-vintage-format-guide/sol-ring.jpg)

- **Start on MTGO if you can.** It's the cheapest, most active competitive Vintage environment, the legality is enforced automatically, and you can join Vintage leagues and Challenges without owning a single paper card. This is the single best entry point to the format.
- **For paper, find a proxy-friendly group first.** Search your local scene or online communities for proxy Vintage events before you spend anything. Print clean proxies, build a known list, and play. You can always acquire real cards later if you fall in love with it.
- **Copy a proven list, don't brew.** Vintage decks are tightly tuned and the restricted singletons mean sequencing is everything. Pull a recent winning list from a results site, learn why each card is in it, and play it as written before you start tinkering.
- **Learn the restricted list cold.** Before you build, read the current restricted list on Scryfall or the [official banned and restricted list](https://magic.wizards.com/en/banned-restricted-list). Knowing which cards are singletons is half of deckbuilding in this format — you literally cannot run four of a restricted card.
- **Learn to play around free counters.** Blue's free interaction (Force of Will and friends) is the format's heartbeat. Whether you're playing the control deck or trying to beat it, understanding when the opponent can say "no" for free is the core Vintage skill.
- **Verify legality on Scryfall, always.** Vintage's restricted list is long and changes through B&R announcements. Famous and old does not mean four-of-legal — check before you sleeve up.

Like every eternal format, Vintage's cost (real or proxied) is front-loaded, and the cards never rotate. But unlike Legacy or Modern, the format was built from day one to be played with the most broken cards in the game, and the community built the proxy culture to make that possible. The barrier is lower than you think.

## Quick Action Checklist

- Learn the core distinction first: **restricted = one copy legal**, **banned = zero copies**. Vintage restricts for power and bans for non-functionality.
- Memorize the Power Nine (Black Lotus, Ancestral Recall, Time Walk, Timetwister, and the five Moxen) — all restricted, all legal as one-ofs.
- Don't forget Sol Ring and Mana Crypt are also restricted, even though they aren't "Power Nine."
- Start on MTGO for the cheapest, most active competitive Vintage; it enforces legality for you.
- For paper, find a proxy-friendly group before spending a cent — most casual Vintage is proxied.
- Copy a proven tournament list and play it as written before brewing; the restricted singletons make sequencing everything.
- Read the current restricted list on Scryfall before deckbuilding — you cannot run four of a restricted card.
- Learn to play around free counterspells; blue's free interaction is the brakes that keep the format from being a turn-one coin flip.`,
  faq: [
    {
      question: 'What is the Vintage format in MTG?',
      answer:
        'Vintage is the highest-power eternal constructed format in Magic. You build a minimum 60-card deck with a 15-card sideboard and run up to four copies of any card, except cards on the restricted list, which are limited to one copy each. Vintage has the largest card pool in the game — nearly everything ever printed in a tournament-legal set is legal, including the Power Nine — and it is the only format where those cards remain playable.',
    },
    {
      question: 'What are the Power Nine in MTG?',
      answer:
        'The Power Nine are the nine most powerful cards ever printed, all from Magic\'s earliest sets: Black Lotus, Ancestral Recall, Time Walk, Timetwister, and the five Moxen (Mox Pearl, Mox Sapphire, Mox Jet, Mox Ruby, and Mox Emerald). All nine are restricted in Vintage — meaning legal but limited to one copy per deck — and banned in Legacy. Vintage is the only sanctioned format where they can be played.',
    },
    {
      question: 'What is the difference between restricted and banned in MTG Vintage?',
      answer:
        'Restricted means you may play exactly one copy of the card in your deck — it is fully legal, just limited to a singleton. Banned means you cannot play the card at all. Vintage is the only constructed format that uses restriction as its main balancing tool: it restricts the most powerful cards (like the Power Nine) instead of banning them, and bans only cards that are non-functional in a normal tournament, such as ante and manual-dexterity cards.',
    },
    {
      question: 'How much does a Vintage deck cost, and do you need real Power Nine cards?',
      answer:
        'A fully-powered, no-proxy paper Vintage deck can cost five figures because of the real Power Nine. But most Vintage is played with proxies — local and grassroots events are usually proxy-friendly, and on Magic Online (MTGO) the digital cards are a small fraction of paper prices. You do not need to own real Power Nine cards to play Vintage; you can start tonight with proxies or an MTGO account.',
    },
    {
      question: 'How is Vintage different from Legacy?',
      answer:
        'Both are non-rotating 60-card eternal formats, but Vintage is more powerful and uses a restricted list. The Power Nine, Sol Ring, and Mana Crypt are restricted (one copy legal) in Vintage but banned outright in Legacy. That fast-mana access makes Vintage faster and more explosive, with free counterspells like Force of Will acting as the brakes. Legacy bans those cards entirely, so its games start a turn or two slower.',
    },
    {
      question: 'How do you start playing Vintage?',
      answer:
        'The easiest entry point is Magic Online (MTGO), where Vintage cards cost a fraction of paper and you can join leagues and Challenge events with automatic legality enforcement. For paper, find a proxy-friendly local group before spending money. Either way, copy a proven tournament list rather than brewing, learn the restricted list cold, and practice playing around free counterspells before you tinker with the deck.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/mtg-legacy-format-guide', anchor: 'Legacy format guide' },
    { href: '/blog/magic-the-gathering/mtg-modern-format-guide', anchor: 'Modern format guide' },
    { href: '/blog/magic-the-gathering/mtg-pioneer-format-guide', anchor: 'Pioneer format guide' },
    { href: '/blog/magic-the-gathering/best-counterspells-mtg', anchor: 'best counterspells guide' },
    { href: '/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start', anchor: 'Commander format guide' },
  ],
  externalSources: [
    { url: 'https://magic.wizards.com/en/formats/vintage', title: 'Wizards: Official Vintage Format Page' },
    { url: 'https://magic.wizards.com/en/banned-restricted-list', title: 'Wizards: Official Banned and Restricted List' },
    { url: 'https://scryfall.com/', title: 'Scryfall: MTG Card Database and Legality Data' },
  ],
  tldr:
    'Vintage is MTG\'s highest-power eternal format: a 60-card format with the largest card pool in the game, where the most broken cards ever printed are legal but limited to one copy by the restricted list. The Power Nine (Black Lotus, Ancestral Recall, Time Walk, Timetwister, and five Moxen) are restricted, not banned; the banned list is tiny and only covers non-functional cards like ante and dexterity cards. Most Vintage is played with proxies or on MTGO, so you do not need to own real Power Nine cards to start.',
};
