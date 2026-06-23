import type { BlogPost } from '../../blogTypes';

export const mtgOathbreakerFormatGuide: BlogPost = {
  slug: 'mtg-oathbreaker-format-guide',
  game: 'magic-the-gathering',
  category: 'format-guides',
  topicCluster: 'oathbreaker-format',
  tags: ['oathbreaker', 'planeswalkers', 'multiplayer', 'singleton', 'casual'],
  title: 'MTG Oathbreaker Format Guide: Where to Start',
  metaDescription:
    'Oathbreaker is 60-card Commander with a planeswalker and a signature spell. The rules, how to build, popular oathbreakers, and the banlist — explained for 2026.',
  excerpt:
    "Oathbreaker is what you get when you take Commander, swap the legendary creature for a planeswalker, and bolt on a signature spell you can only cast while that planeswalker is alive. Here is how the format works, how to build your first deck, and which oathbreakers actually win.",
  featuredImagePrompt:
    'A planeswalker channeling a signature spell from an open spellbook, swirling multicolored mana converging on a single glowing card, dramatic painterly fantasy art, no text',
  heroImage:
    '/images/blog/magic-the-gathering/mtg-oathbreaker-format-guide/teferi-time-raveler.jpg',
  heroImageAlt:
    'Teferi, Time Raveler, the three-mana Azorius planeswalker that shuts off instant-speed interaction — one of the strongest oathbreakers in the format.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-oathbreaker-format-guide/teferi-time-raveler.jpg',
      sourceUrl: 'https://scryfall.com/card/rvr/232/teferi-time-raveler',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-oathbreaker-format-guide/the-wandering-emperor.jpg',
      sourceUrl: 'https://scryfall.com/card/neo/42/the-wandering-emperor',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-oathbreaker-format-guide/wrenn-and-six.jpg',
      sourceUrl: 'https://scryfall.com/card/2x2/296/wrenn-and-six',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-oathbreaker-format-guide/chandra-torch-of-defiance.jpg',
      sourceUrl: 'https://scryfall.com/card/fra/244/chandra-torch-of-defiance',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
  ],
  publishDate: '2026-06-22T00:00:00.000Z',
  lastUpdated: '2026-06-22T00:00:00.000Z',
  primaryKeyword: 'mtg oathbreaker format guide',
  secondaryKeywords: [
    'what is oathbreaker mtg',
    'how to play oathbreaker',
    'oathbreaker signature spell rules',
    'best oathbreakers mtg',
    'oathbreaker banned list',
    'oathbreaker vs commander',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'what-is-oathbreaker', label: 'What is Oathbreaker', level: 2 },
    { id: 'the-rules-in-one-page', label: 'The rules in one page', level: 2 },
    { id: 'how-the-signature-spell-works', label: 'How the signature spell works', level: 2 },
    { id: 'oathbreaker-vs-commander', label: 'Oathbreaker vs Commander', level: 2 },
    { id: 'how-to-build-your-first-deck', label: 'How to build your first deck', level: 2 },
    { id: 'popular-oathbreakers-worth-starting-on', label: 'Popular oathbreakers worth starting on', level: 2 },
    { id: 'the-banned-list-and-why-it-exists', label: 'The banned list and why it exists', level: 2 },
    { id: 'common-new-player-mistakes', label: 'Common new-player mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Planeswalkers are the most iconic card type Magic ever printed, and in basically every format they are role-players — a tool you slot into a deck built around something else. Oathbreaker is the one format where the planeswalker is the deck. You pick a walker as your commander, build a 60-card singleton deck around it, and hand it a custom "signature spell" it can fire off as many times as you can keep the walker alive. It is the format that finally lets your favorite planeswalker headline instead of ride the bench.

If you already play Commander, you can learn Oathbreaker in about ninety seconds — it is Commander's smaller, snappier cousin with two twists. If you have never touched a singleton format, it is honestly one of the cleanest on-ramps in the game: half the deck size, half the price, and games that actually end. Here is exactly how Oathbreaker works, how to build a deck that does something, the oathbreakers people actually win with, and the banlist that keeps it all from collapsing into a turn-three combo fest. Every card and ruling here is checked against the official Oathbreaker rules and Scryfall's legality data.

## What is Oathbreaker

Oathbreaker is a casual, community-run multiplayer format built around two signature cards: a planeswalker (your **oathbreaker**) and an instant or sorcery (your **signature spell**). It was created by the Weird Cards play community and is maintained by the Oathbreaker Rules Committee, which keeps the rules and the banned list. It is not an officially sanctioned Wizards format, which means there is no Pro Tour for it — but it has a real, stable rules document and a banlist that gets updated, so it is far more than a kitchen-table house rule.

The elevator pitch: take Commander, shrink the deck to 60 cards, drop the life total to 20, swap your legendary-creature commander for a planeswalker, and give that planeswalker a single signature instant or sorcery it can recast from a special zone. That is the whole format. The planeswalker's **color identity** sets the colors of your deck exactly like a Commander does, and the signature spell has to fit inside that identity too.

The reason the format clicks is the same reason Commander does: your two signature cards are always available, so every game starts from a known anchor. But where Commander's anchor is a creature that attacks or makes value, Oathbreaker's anchor is a planeswalker — a permanent that generates advantage turn after turn and demands your opponents spend resources killing it. Building a deck to protect a walker and abuse its loyalty abilities is a genuinely different puzzle than building around a creature, and that is the format's whole appeal.

## The rules in one page

Here is everything you need to sit down and play, straight from the official rules:

- **Deck size: 60 cards, singleton.** Exactly one copy of each card, with the usual exception that basic lands are unlimited. Your oathbreaker and signature spell are two of those 60 cards and live in the command zone, not the library.
- **Starting life: 20.** Not 40. This is the single biggest reason games are faster than Commander — half the life means half the grind.
- **Players: multiplayer, built for pods.** Like Commander, the default is a four-player free-for-all, though it plays fine at three or in 1v1.
- **Your oathbreaker is a planeswalker.** Any planeswalker not on the banned list. Its **color identity determines your deck's colors** — every card you run must fit inside that identity, mana symbols in rules text included.
- **Your signature spell is an instant or sorcery** within the oathbreaker's color identity. It also starts in the command zone alongside the walker.
- **Command zone tax applies.** Both your oathbreaker and your signature spell get 2 generic mana more expensive each time they have been cast from the command zone that game, exactly like commander tax.
- **Combat, the stack, and priority** all work identically to normal Magic — only the deckbuilding and the command zone change. If you know how to play Commander, you already know how to play Oathbreaker.

The 21-commander-damage rule from Commander does **not** apply here — your oathbreaker is a planeswalker, not a creature, so it deals no combat damage to begin with. You win the normal ways: drop everyone to 0 life, deck them out, or hit an alternate win condition.

## How the signature spell works

The signature spell is the mechanic that makes Oathbreaker its own thing, and it has one rule that trips up every new player, so read this twice.

**You may only cast your signature spell while your oathbreaker is on the battlefield under your control.** No walker out, no signature spell — it just sits in the command zone, uncastable. This is the central tension of the entire format: your signature spell is often your best card, and it is locked behind keeping a planeswalker alive in a multiplayer game where everyone wants to kill it.

When you do cast it, the signature spell resolves like any other instant or sorcery, then returns to the command zone instead of the graveyard, so you can cast it again later — paying an extra 2 generic mana each subsequent time, just like recasting a commander. A two-mana removal spell becomes four mana the second time, six the third, and so on. That escalating cost is the only thing stopping you from machine-gunning the same spell every turn.

![The Wandering Emperor, a four-mana white planeswalker with flash that can ambush attackers and protect itself, making it a forgiving first oathbreaker.](/images/blog/magic-the-gathering/mtg-oathbreaker-format-guide/the-wandering-emperor.jpg)

The deckbuilding lesson here is huge: **pick a signature spell that is good every single turn, not a one-time haymaker.** A repeatable removal spell, a repeatable card-draw spell, a repeatable burn spell, or a tutor you can cast over and over is worth far more than a flashy seven-mana sorcery you cast once and feel clever about. The best signature spells are cheap, flexible, and never dead — because you are going to cast them again and again across the game.

## Oathbreaker vs Commander

If you already play EDH, the differences are what matter. Five things change:

1. **Deck is 60 cards, not 100.** Half the cards to find, half the cards to buy. Your deck is more consistent because you draw your good cards more often, and brewing one is a weekend project, not a month-long acquisition.
2. **Life is 20, not 40.** Games are dramatically shorter. Aggression and tempo actually matter, where in Commander a 40-life buffer often turns the first ten turns into a durdle-fest.
3. **Your commander is a planeswalker.** You are protecting and abusing a loyalty engine, not casting and recasting a creature. That changes which threats matter and makes board wipes less central and targeted removal more.
4. **You get a signature spell.** Commander gives you one always-available card; Oathbreaker gives you two, and the second is a repeatable instant or sorcery. That is a real consistency boost and the format's defining toy.
5. **The banlist is tighter at the top.** Oathbreaker bans the fast-mana all-stars Commander allows — Sol Ring, Mana Crypt, Jeweled Lotus, Mana Vault and the Moxen are all gone. In a 20-life format, turn-one fast mana is far more dangerous, so the committee cut it.

The upshot: Oathbreaker is **faster, cheaper, and more focused** than Commander, with a lower barrier to a complete deck. If Commander's price tag or three-hour games have ever put you off, this is the format to try.

## How to build your first deck

The build skeleton is Commander's, scaled down. A clean 60-card Oathbreaker list looks roughly like this:

- **~17 lands.** Yes, fewer than Commander proportionally — a 60-card deck wants around 17 to 18 lands, not the ~38 of a 100-card deck. Run your best fixing for your colors.
- **~10 ramp and mana rocks.** Signets, Talismans, mana dorks, and cheap rocks. You want to land your oathbreaker ahead of curve and then have mana left to cast the signature spell. (Remember: no Sol Ring, no Mana Crypt — they are banned.)
- **~8 to 10 pieces of interaction.** Removal and a couple of counters. In a planeswalker format you especially want spot removal and ways to clear blockers off your walker.
- **~6 to 8 ways to protect or reload your oathbreaker.** Cheap creatures to chump for the walker, instants that fog or bounce attackers, ways to add loyalty. Keeping the walker alive is how you keep casting the signature spell.
- **The rest is your payoff and curve filler** — the threats and value cards that close games.

Pick the oathbreaker first, then pick a signature spell that is **cheap and repeatable**, then build the 58 around protecting the walker and casting that spell on loop. The single most common rookie error is choosing a splashy expensive signature spell; a one- or two-mana removal or draw spell you can fire every turn will win you far more games. If you want the deeper deckbuilding fundamentals, our [how to build a Commander deck](/blog/magic-the-gathering/how-to-build-a-commander-deck) template ports over almost directly — just halve the land count and add a signature spell.

## Popular oathbreakers worth starting on

You can run any legal planeswalker, but a few are beloved entry points because they protect themselves, generate value, and forgive mistakes. All of these are confirmed legal.

![Wrenn and Six, a two-mana Gruul planeswalker that returns lands and pings for one, a hyper-efficient low-cost oathbreaker.](/images/blog/magic-the-gathering/mtg-oathbreaker-format-guide/wrenn-and-six.jpg)

- **The Wandering Emperor (2WW).** A white planeswalker with **flash**, which is absurd here — you can ambush an attacker on their turn, make a token, or exile a creature, and her plus-ability gains loyalty while protecting herself. Forgiving, flexible, and hard to punish. A fantastic first oathbreaker.
- **Teferi, Time Raveler (1WU).** Three mana, immediately useful, and his static ability ("opponents can only cast spells at sorcery speed") shuts off counters and instant-speed removal aimed at him. He is one of the strongest oathbreakers in the format precisely because he protects himself by warping how everyone else plays.
- **Wrenn and Six (RG).** Two mana for a planeswalker is a steal. He buys back lands, pings down small creatures and other walkers, and his cheap cost means you can deploy him turn two and start casting your signature spell fast. A tempo monster.
- **Chandra, Torch of Defiance (2RR).** A four-loyalty workhorse that ramps, draws, burns, and has an ultimate that ends games. Pair her with a repeatable burn spell as your signature and you have a clean, aggressive plan that any new player can pilot.

![Chandra, Torch of Defiance, a four-mana red planeswalker that adds mana, draws cards, and deals direct damage, a versatile aggressive oathbreaker.](/images/blog/magic-the-gathering/mtg-oathbreaker-format-guide/chandra-torch-of-defiance.jpg)

The pattern across all four: they either protect themselves, cost little enough to deploy early, or generate so much value that even one activation pays for them. That is exactly what you want from an oathbreaker — a walker that survives a turn cycle so you can keep casting your signature spell. Browse our [best planeswalkers in MTG](/blog/magic-the-gathering/best-planeswalkers-magic-the-gathering) tier list for more candidates; most of the top of that list makes a strong oathbreaker.

## The banned list and why it exists

Oathbreaker has a real banned list maintained by the Rules Committee, and understanding its philosophy tells you a lot about the format. In a 60-card, 20-life game, the things that break Magic are **fast mana** and **free wins**, so that is what the list targets.

The headline cuts are the fast-mana artifacts Commander players take for granted: **Sol Ring, Mana Crypt, Jeweled Lotus, Mana Vault, and all five original Moxen** (Mox Emerald, Jet, Pearl, Ruby, Sapphire) are banned. So are the Power Nine staples like **Ancestral Recall, Black Lotus, Time Walk, Time Vault, and Library of Alexandria.** Degenerate enablers like **Channel, Dark Ritual, Fastbond, Tinker, Tolarian Academy, Yawgmoth's Bargain, Doomsday, Ad Nauseam, and Expropriate** round it out, along with category bans on conspiracy cards, ante cards, stickers/Attractions, and silver-bordered cards.

The throughline: anything that lets a deck explode on turn one or two, or win out of nowhere, gets cut, because a 20-life format has no buffer to survive it. This is a much tighter top end than Commander — and that is the point. It keeps games interactive instead of letting fast mana decide them before anyone has played Magic.

Because it is a community list that updates, **check a card's current Oathbreaker legality before you commit to it.** Scryfall tags every card with an \`oathbreaker\` legality, and the official banned list is the source of truth. Never assume a card is legal just because it is legal in Commander — the fast-mana gap is exactly where people get burned.

## Common new-player mistakes

- **Picking a splashy one-time signature spell.** Your signature spell is repeatable; treat it like a recurring engine, not a finisher. Cheap and always-useful beats expensive and flashy every time.
- **Casting the signature spell with no plan to protect the walker.** If your oathbreaker dies, the spell is locked away. Hold up protection, run chump blockers, and do not over-extend your walker into a board that can kill it.
- **Building like it is Commander.** Do not run ~38 lands or load up on board wipes that also kill your own walker's defenders. Seventeen-ish lands, lean ramp, targeted removal.
- **Forgetting the command-zone tax.** Each recast of the oathbreaker or signature spell costs 2 more. Plan your mana so a second cast is actually affordable.
- **Assuming Commander's banlist.** Sol Ring, Mana Crypt, and Jeweled Lotus are banned here. Build accordingly.

If you are coming from EDH, our [Commander format guide](/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start) covers the parent format, and the [best removal spells in MTG](/blog/magic-the-gathering/best-removal-spells-mtg) and [best token generators](/blog/magic-the-gathering/best-mtg-token-generators-commander) guides both port straight into Oathbreaker brewing.

## Quick Action Checklist

- Pick a planeswalker as your oathbreaker; its color identity sets your deck's colors.
- Choose a signature spell that is a cheap, repeatable instant or sorcery in that identity — not a one-time haymaker.
- Build 60 singleton cards: ~17 lands, ~10 ramp, ~8-10 interaction, ~6-8 ways to protect the walker, the rest payoff.
- Remember you can only cast the signature spell while your oathbreaker is on the battlefield.
- Account for the 2-mana command-zone tax on every recast.
- Do not run Sol Ring, Mana Crypt, Jeweled Lotus, or the other banned fast mana — the Oathbreaker banlist is tighter than Commander's.
- Confirm every card's current Oathbreaker legality on Scryfall before you sleeve it.
- Play with 20 life and a four-player pod for the intended experience — and expect games to end a lot faster than Commander.`,
  faq: [
    {
      question: 'What is Oathbreaker in MTG?',
      answer:
        'Oathbreaker is a casual, community-run multiplayer format created by the Weird Cards community and maintained by the Oathbreaker Rules Committee. You build a 60-card singleton deck around a planeswalker (your oathbreaker) and a signature instant or sorcery you can cast repeatedly while the planeswalker is on the battlefield. Starting life is 20, and the planeswalker\'s color identity sets your deck\'s colors, exactly like a Commander.',
    },
    {
      question: 'How is Oathbreaker different from Commander?',
      answer:
        'Five things change: decks are 60 cards instead of 100, life is 20 instead of 40, your commander is a planeswalker instead of a legendary creature, you get a repeatable signature instant or sorcery in addition to the planeswalker, and the banned list is tighter at the top — Sol Ring, Mana Crypt, Jeweled Lotus, Mana Vault, and the Moxen are all banned. The result is a faster, cheaper, more focused version of Commander.',
    },
    {
      question: 'What is a signature spell in Oathbreaker?',
      answer:
        'Your signature spell is an instant or sorcery within your oathbreaker\'s color identity that lives in the command zone. You may only cast it while your oathbreaker is on the battlefield under your control, and after it resolves it returns to the command zone so you can cast it again — paying 2 more generic mana each subsequent time, like commander tax. The best signature spells are cheap and repeatable, not one-time finishers.',
    },
    {
      question: 'What planeswalkers are good oathbreakers for beginners?',
      answer:
        'Walkers that protect themselves or generate value forgive mistakes. The Wandering Emperor has flash and can ambush attackers; Teferi, Time Raveler shuts off instant-speed interaction aimed at him; Wrenn and Six costs only two mana so you deploy him early; and Chandra, Torch of Defiance ramps, draws, and burns. All are legal and great first picks.',
    },
    {
      question: 'Does Oathbreaker have a banned list?',
      answer:
        'Yes, maintained by the Oathbreaker Rules Committee. It targets fast mana and free wins because the 20-life format has no buffer for them. Banned cards include Sol Ring, Mana Crypt, Jeweled Lotus, Mana Vault, all five original Moxen, the Power Nine, and enablers like Channel, Dark Ritual, Tinker, Doomsday, and Expropriate. Always confirm current legality on Scryfall before building.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start', anchor: 'Commander format guide' },
    { href: '/blog/magic-the-gathering/how-to-build-a-commander-deck', anchor: 'how to build a Commander deck' },
    { href: '/blog/magic-the-gathering/best-planeswalkers-magic-the-gathering', anchor: 'best planeswalkers in MTG' },
    { href: '/blog/magic-the-gathering/best-removal-spells-mtg', anchor: 'best removal spells in MTG' },
    { href: '/blog/magic-the-gathering/best-mtg-token-generators-commander', anchor: 'best token generators' },
  ],
  externalSources: [
    { url: 'https://oathbreakermtg.org/quick-rules/', title: 'Oathbreaker MTG: Official Quick Rules' },
    { url: 'https://www.oathbreakermtg.org/banned-list', title: 'Oathbreaker MTG: Official Banned List' },
    { url: 'https://scryfall.com/', title: 'Scryfall: MTG Card Database and Legality Data' },
  ],
  tldr:
    'Oathbreaker is a community-run multiplayer format: a 60-card singleton deck built around a planeswalker (your oathbreaker) and a repeatable signature instant or sorcery you can only cast while that planeswalker is on the battlefield. Life is 20, the walker\'s color identity sets your colors, and the banlist is tighter than Commander\'s — Sol Ring, Mana Crypt, and Jeweled Lotus are all banned. Pick a self-protecting walker, a cheap repeatable signature spell, and build to keep the walker alive.',
};
