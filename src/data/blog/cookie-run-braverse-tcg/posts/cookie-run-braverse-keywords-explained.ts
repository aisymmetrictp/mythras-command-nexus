import type { BlogPost } from '../../blogTypes';

export const braverseKeywordsExplained: BlogPost = {
  slug: 'cookie-run-braverse-keywords-explained',
  game: 'cookie-run-braverse-tcg',
  category: 'beginner-guides',
  topicCluster: 'rules-mechanics',
  tags: ['Keywords', 'Abilities', 'Rules', 'FLIP'],
  title: "Cookie Run: Braverse Keywords & Abilities Explained",
  metaDescription:
    "Cookie Run: Braverse keywords explained - On Play, Activate, Blocker, Equip and EXTRA, plus FLIP and the Ancient, Dragon, Beast and Arena traits.",
  excerpt:
    "Braverse card text leans on a small set of keywords that mean the same thing on every card they appear on. Learn the ability words - On Play, Activate, Blocker, Equip - and the trait words - Ancient, Dragon, Beast, Arena - and the whole game reads cleaner.",
  featuredImagePrompt:
    "A red Cookie Run: Braverse Dragon Cookie card glowing mid-ability, small icon callouts for On Play, Blocker and a trait tag floating around its frame against a dark studio backdrop.",
  heroImage:
    '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-keywords-explained/pitaya-dragon-cookie.webp',
  heroImageAlt:
    'Official Pitaya Dragon Cookie card (BS5-013), an Ultra Rare Red Dragon Cookie whose On Play ability shows how Cookie Run: Braverse keywords are written on a card.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-keywords-explained/pitaya-dragon-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/RVfC7ybJkB_962tg5wz0TA.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-keywords-explained/peperoncino-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/8-IC4ae4bA0Qk49chzzF1g.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-keywords-explained/licorice-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/_cC48RpFCSabeQ-2GhbfJw.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-keywords-explained/hollyberry-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/p3dWSu9mFhXb34bhT0lkfQ.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database',
    },
  ],
  publishDate: '2026-06-18T00:00:00.000Z',
  lastUpdated: '2026-06-18T00:00:00.000Z',
  primaryKeyword: 'cookie run braverse keywords',
  secondaryKeywords: [
    'braverse keywords explained',
    'cookie run braverse abilities',
    'braverse on play activate blocker',
    'braverse ancient dragon beast arena keyword',
    'what does flip mean in braverse',
    'cookie run braverse card text explained',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'two-kinds-of-keyword-abilities-and-traits', label: 'Two kinds of keyword: abilities and traits', level: 2 },
    { id: 'how-to-read-a-cards-text', label: 'How to read a card\'s text', level: 2 },
    { id: 'the-ability-keywords', label: 'The ability keywords', level: 2 },
    { id: 'flip-the-signature-mechanic', label: 'FLIP, the signature mechanic', level: 2 },
    { id: 'the-trait-keywords', label: 'The trait keywords', level: 2 },
    { id: 'where-keywords-trip-new-players-up', label: 'Where keywords trip new players up', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Pick up almost any Cookie Run: Braverse card and you'll see a word in brackets at the front of a line - On Play, Activate, Blocker - followed by an instruction. Those bracketed words are keywords, and the whole point of a keyword is that it means the exact same thing on every card it ever appears on. Learn the dozen or so that matter and you stop re-reading rules text and start reading cards at a glance. Get one of them wrong - especially the timing words - and you'll misplay a trade you thought you'd won.

This is the plain-English glossary of Braverse's keywords and abilities, split into the two kinds that exist and grounded in real cards from the official database. We'll keep it consistent with the deeper dives: the full breakdown of the seven card types lives in [card types explained](/blog/cookie-run-braverse-tcg/cookie-run-braverse-card-types-explained), the signature HP mechanic gets its own [FLIP deep dive](/blog/cookie-run-braverse-tcg/cookie-run-braverse-flip-mechanic), and every term you might bump into is in the [Braverse glossary](/blog/cookie-run-braverse-tcg/cookie-run-braverse-glossary). One symbol note up front: on the cards, {R} is a Red resource, {N} is any color, and {da} reads as "deals damage," so a cost written "two Red, one any" is what the card actually demands.

## Two kinds of keyword: abilities and traits

The single most useful thing to understand is that Braverse keywords come in two flavors, and they do completely different jobs:

- **Ability keywords** tell you *when or how* an effect works. On Play, Activate, Once Per Turn, Blocker, Equip, EXTRA - these gate the effect's timing or cost. They appear in the card's text box, in brackets, right before the instruction they govern.
- **Trait keywords** tell you *what a card is*. Ancient, Dragon, Beast, Arena - these are subtypes that don't do anything by themselves, but other cards reference them. A card that "checks for another Arena Cookie" only cares about the Arena trait.

The official card database backs this split cleanly: it files the timing words (On Play, Activate, Blocker, Once Per Turn, Equip) under a "skill" category, and files Ancient, Dragon, Arena, and Beast under a separate "keyword" category that's really the game's trait list. Keep the two buckets straight and the rest is easy.

> The fast test: if a keyword tells you *when something happens*, it's an ability. If it tells you *what the card is*, it's a trait. Abilities do; traits get referenced.

## How to read a card's text

Before the keywords, the layout. A Braverse Cookie has two text zones, and knowing which is which keeps the timing straight:

- **The skill line** is the Cookie's standing ability - often gated by a keyword like On Play or Activate. It's the effect the Cookie brings beyond just attacking.
- **The attack line** is what happens when the Cookie attacks: a cost in pointed brackets, the attack's name, and the damage, sometimes followed by a "Then," clause that triggers extra effects.

So when you read **Pitaya Dragon Cookie** (BS5-013, Ultra Rare, Red Dragon, LV.3, 5 HP), the skill line carries an On Play effect - discard a Red Cookie to deal 1 to an opposing Cookie - and the attack line swings for 3 with a follow-up clause. Two zones, two timing windows. New players blur them together and then wonder why an effect didn't fire; it's almost always a "this was a skill, not an attack effect" mix-up.

## The ability keywords

![Official Peperoncino Cookie card (BS4-014), a Red LV.2 Cookie that carries the Blocker ability to redirect an opponent's attack to itself in Cookie Run: Braverse.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-keywords-explained/peperoncino-cookie.webp)

These are the workhorses - the words that decide *when* an effect happens. Here's each one in plain English with a real card.

- **On Play.** The effect fires once, the moment the card is played. **Strawberry Cookie** (BS9-003) reads "On Play: select up to 1 of your Cookies; during this turn, that Cookie gains +1 attack damage." Play it, the effect resolves, done. No repeat.
- **Activate.** A skill you choose to use, usually with a cost in pointed brackets you pay to fire it. It's optional and repeatable unless something else limits it. **Princess Cookie** (BS9-002) carries an Activate skill that buffs its own attack under a condition.
- **Once Per Turn.** A limiter that pairs with other keywords - it caps a repeatable ability to one use each turn. Princess Cookie's skill is "Activate, Once Per Turn," meaning you can fire it, but only once between your draws.
- **Blocker.** A defensive redirect. The official reminder text spells it out: "(When one of your opponent's Cookies attacks, you can redirect the attack to this Cookie.)" **Peperoncino Cookie** (BS4-014) and **Poison Mushroom Cookie** (BS8-008) both carry it - rest the card, and it pulls an incoming attack onto itself to protect a more valuable Cookie. Some cards (mostly Arena pieces) can even shut your Blocker off, so it's not airtight.
- **Equip.** Attaches a card to a Cookie rather than playing it on its own. The Soul Jam Items are the headline case - **Soul Jam: Light of Deceit** (BS9-092) does its effect and then lets you Equip it to a specific Cookie for an ongoing bonus. Equipped cards stay attached until something removes them.
- **EXTRA.** An alternate or additional play condition that unlocks a powerful card when you meet a requirement, often tied to the EXTRA card type. **Shadow Milk Cookie** (BS9-010) can be played "if 2 or more of your Red LV.1 Cookies fainted during your opponent's previous turn" - a payoff for the board state you've already built, not a card you hard-cast on curve.

The pattern to internalize: an ability keyword is a *when*. On Play is "on entry," Activate is "when you choose and pay," Once Per Turn is "but only once," Blocker is "when attacked," Equip is "as an attachment," and EXTRA is "once you've met the condition."

## FLIP, the signature mechanic

![Official Licorice Cookie card (BS8-001), a FLIP-type card that draws a card when it is flipped face-up in a Cookie's HP stack in Cookie Run: Braverse.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-keywords-explained/licorice-cookie.webp)

FLIP earns its own section because it's the one keyword that's *both* a card type and an ability - and it's what makes Braverse play differently from every TCG it gets compared to. The short version: in Braverse a Cookie's HP is a face-down stack of cards from your deck, and some of those cards carry a FLIP ability that triggers the instant damage turns them face-up.

- As a **card type**, FLIP is a dedicated category - the database lists well over 200 FLIP-type cards - built to live in an HP stack. **Licorice Cookie** (BS8-001) is a FLIP card whose ability is simply "Draw up to 1 card from your deck": bury it under a Cookie, and when an attacker flips it, you draw.
- As an **ability**, some regular Cookies *also* carry a flip effect, so they behave normally on the board but spring a surprise if they end up in someone's HP stack.

The strategic kicker: the FLIP that fires belongs to the *defender*, so attacking can hand your opponent a free trigger. A deck can run up to 16 FLIP cards, turning every HP stack into a potential minefield. Because this is the deepest mechanic in the game - and a couple of its edge-case timing rules aren't fully pinned down across community sources - we keep the full treatment in the dedicated [FLIP mechanic guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-flip-mechanic). For keyword purposes, just remember: FLIP is the only one that's a type *and* an ability at the same time.

## The trait keywords

![Official Hollyberry Cookie card (BS3-017), an Ultra Rare Red Ancient Cookie showing how the Ancient trait keyword appears on a card in Cookie Run: Braverse.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-keywords-explained/hollyberry-cookie.webp)

Traits don't *do* anything on their own - they're labels other cards care about. There are four, and the official database tracks each one in its keyword filter:

| Trait | Roughly how many cards | What it means |
| --- | --- | --- |
| **Ancient** | The largest legendary group | The seven Ancient Cookies - Braverse's biggest, most iconic legends, like Hollyberry Cookie (BS3-017) |
| **Arena** | The widest trait by far | The tribal-synergy subtype that spans all five colors and rewards going wide |
| **Beast** | A focused mid-sized group | The "Beast" Cookies - powerful bodies often gated behind EXTRA play conditions |
| **Dragon** | The smallest, rarest group | The Dragon Cookies - a handful of premium LV.3 threats, like Pitaya Dragon Cookie (BS5-013) |

Why they matter: trait keywords are the glue for tribal decks. An **Arena** Cookie that reads "if there is another Arena Cookie in your battle area" only counts cards carrying the Arena trait, which is exactly why the [best Arena cards](/blog/cookie-run-braverse-tcg/best-arena-cards-cookie-run-braverse) form their own go-wide archetype. The same goes for the dedicated [best Ancient cards](/blog/cookie-run-braverse-tcg/best-ancient-cards-cookie-run-braverse), [best Dragon cards](/blog/cookie-run-braverse-tcg/best-dragon-cards-cookie-run-braverse), and [best Beast cards](/blog/cookie-run-braverse-tcg/best-beast-cards-cookie-run-braverse) - each guide is built around what its trait keyword unlocks. A trait alone is a non-event; a trait plus a card that references it is a deck.

One honest note: the Ancient line is special. The lore frames the Ancients as exactly seven Cookies, but the database lists more than seven *cards* with the Ancient keyword because a single Cookie can have several printings across sets. Seven Cookies, more than seven cards - both are true.

## Where keywords trip new players up

A handful of recurring mistakes, and the fix for each:

- **Confusing the skill line with the attack line.** An On Play skill fires when you play the Cookie; an attack's "Then," clause fires when it attacks. They are different windows. Read which zone the effect sits in before you assume it triggered.
- **Forgetting Once Per Turn.** A juicy Activate ability feels like you can chain it - you can't, if it's tagged Once Per Turn. Plan the turn around a single use.
- **Treating Blocker as a wall.** Blocker redirects *one* attack when you rest the card; it doesn't make a Cookie unkillable, and some Arena cards can switch it off entirely. It buys a turn, not immunity.
- **Reading a trait as an ability.** Seeing "Dragon" or "Ancient" on a card and expecting it to do something. It doesn't - it's a label. The effect only matters if another card references that trait.
- **Hard-casting EXTRA cards.** EXTRA Cookies want a board state met first. If you're trying to slam one on turn two with no setup, you've misread the keyword.

> The throughline: abilities are timing and cost; traits are identity. Once you sort every bracketed word into one of those two buckets, Braverse card text reads like plain English.

## Quick Action Checklist

- **Sort every keyword into ability or trait.** Ability = when/how (On Play, Activate, Blocker, Equip, EXTRA); trait = what it is (Ancient, Dragon, Beast, Arena).
- **Read the two zones separately.** Skill line and attack line are different timing windows - don't blur them.
- **Respect Once Per Turn.** It caps a repeatable Activate ability to one use; build the turn around that single trigger.
- **Use Blocker to buy a turn, not to win one.** It redirects a single attack and can be shut off - protect your key Cookie, don't rely on it as armor.
- **Match traits to payoffs.** A trait is dead weight until you run the cards that reference it - that's the whole point of a tribal deck.
- **Set up EXTRA cards.** Meet their board condition before you try to play them; they're payoffs, not curve plays.
- **Send FLIP to the deep dive.** It's the only type-and-ability keyword - learn the HP-stack mechanic in full before you tune your FLIP count.`,
  faq: [
    {
      question: "What are the keywords in Cookie Run: Braverse?",
      answer:
        "Braverse keywords come in two kinds. Ability keywords gate timing and cost: On Play (fires on entry), Activate (an optional, paid skill), Once Per Turn (a one-use limiter), Blocker (redirect an attack to this Cookie), Equip (attach to a Cookie), and EXTRA (an alternate play condition). Trait keywords are subtypes other cards reference: Ancient, Dragon, Beast, and Arena. FLIP is special - it is both a card type and an ability.",
    },
    {
      question: "What is the difference between an ability keyword and a trait keyword?",
      answer:
        "An ability keyword tells you when or how an effect happens - On Play, Activate, Once Per Turn, Blocker, Equip, EXTRA. A trait keyword tells you what a card is - Ancient, Dragon, Beast, Arena - and does nothing on its own; it only matters when another card references that trait. The official database files them in separate categories: a 'skill' list for the abilities and a 'keyword' list for the traits.",
    },
    {
      question: "What does Blocker do in Cookie Run: Braverse?",
      answer:
        "Blocker is a defensive ability. Its official reminder text reads: 'When one of your opponent's Cookies attacks, you can redirect the attack to this Cookie.' You rest the Blocker card to pull an incoming attack onto it, protecting a more valuable Cookie. It is not a permanent wall - it redirects one attack, and some cards, mostly Arena pieces, can prevent you from activating it.",
    },
    {
      question: "Is FLIP a keyword, a card type, or an ability?",
      answer:
        "All of the above - FLIP is the one keyword that is both a card type and an ability. As a type, FLIP cards (like Licorice Cookie, BS8-001) are built to sit face-down in a Cookie's HP stack. As an ability, the FLIP effect triggers when damage flips that card face-up. Some regular Cookies also carry a flip ability. A deck can run up to 16 FLIP cards; the full mechanic is covered in the dedicated FLIP deep dive.",
    },
    {
      question: "What do the Ancient, Dragon, Beast, and Arena keywords mean?",
      answer:
        "They are trait keywords - subtypes the cards reference. Ancient marks Braverse's biggest legends (the seven Ancient Cookies, though they have more than seven total printings). Arena is the widest trait, a tribal-synergy group spanning all five colors. Beast is a focused group often gated behind EXTRA conditions. Dragon is the smallest, rarest group of premium LV.3 threats. Each anchors its own tribal archetype. And if a Cookie's skill seems to not trigger, you've likely mixed up the two text zones: the skill line fires on its own keyword timing, while the attack line's 'Then,' clause is what triggers when the Cookie swings.",
    },
  ],
  internalLinks: [
    { href: '/blog/cookie-run-braverse-tcg', anchor: 'Braverse hub' },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-card-types-explained',
      anchor: 'card types explained',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-flip-mechanic',
      anchor: 'FLIP mechanic guide',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-glossary',
      anchor: 'Braverse glossary',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-arena-cards-cookie-run-braverse',
      anchor: 'best Arena cards',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-ancient-cards-cookie-run-braverse',
      anchor: 'best Ancient cards',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-dragon-cards-cookie-run-braverse',
      anchor: 'best Dragon cards',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/best-beast-cards-cookie-run-braverse',
      anchor: 'best Beast cards',
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
    "Cookie Run: Braverse keywords come in two kinds. Ability keywords gate timing and cost - On Play fires on entry, Activate is an optional paid skill, Once Per Turn limits it to one use, Blocker redirects an attack, Equip attaches a card, and EXTRA is an alternate play condition. Trait keywords - Ancient, Dragon, Beast, Arena - are subtypes that do nothing alone but get referenced by other cards to power tribal decks. FLIP is the lone keyword that's both a card type and an ability, triggering when a card in a Cookie's HP stack is flipped face-up.",
};
