import type { BlogPost } from '../../blogTypes';

export const mtgTwoHeadedGiantGuide: BlogPost = {
  slug: 'mtg-two-headed-giant-guide',
  game: 'magic-the-gathering',
  category: 'format-guides',
  topicCluster: 'two-headed-giant-format',
  title: 'MTG Two-Headed Giant Format Guide: Rules and Strategy',
  metaDescription:
    'How MTG Two-Headed Giant works: shared 30 life, simultaneous team turns, team combat, the 15-poison and 21-commander-damage rules, and how to win 2v2.',
  excerpt:
    "Two-Headed Giant is the best way to play Magic with a friend instead of against everyone. Shared life, shared turns, one game plan between two players. Here are the real rules and the strategy that actually wins 2v2 games.",
  featuredImagePrompt:
    'A towering two-headed giant warrior in battered armor standing on a battlefield, both heads roaring in unison, a single massive club raised, dramatic warm light, painterly fantasy art style, no text',
  heroImage: '/images/blog/magic-the-gathering/mtg-two-headed-giant-guide/two-headed-giant.jpg',
  heroImageAlt:
    'Two-Headed Giant, the Dominaria creature card that lends its name to MTG\'s premier 2v2 team format where two players share one life total and one turn.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-two-headed-giant-guide/two-headed-giant.jpg',
      sourceUrl: 'https://scryfall.com/card/dom/147/two-headed-giant',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-two-headed-giant-guide/fireball.jpg',
      sourceUrl: 'https://scryfall.com/card/clb/175/fireball',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-two-headed-giant-guide/comeuppance.jpg',
      sourceUrl: 'https://scryfall.com/card/mkc/58/comeuppance',
      license: 'Card art © Wizards of the Coast; image via Scryfall',
    },
  ],
  publishDate: '2026-06-25T00:00:00.000Z',
  lastUpdated: '2026-06-25T00:00:00.000Z',
  primaryKeyword: 'two-headed giant mtg',
  secondaryKeywords: [
    'two headed giant rules',
    'how to play two-headed giant mtg',
    'mtg 2hg format',
    'two-headed giant life total',
    'two-headed giant turn structure',
    'mtg team format 2v2',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'evergreen',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-two-headed-giant-is', label: 'What Two-Headed Giant is', level: 2 },
    { id: 'the-rules-that-actually-change', label: 'The rules that actually change', level: 2 },
    { id: 'shared-life-and-the-loss-conditions', label: 'Shared life and the loss conditions', level: 2 },
    { id: 'the-shared-turn-how-2hg-actually-plays', label: 'The shared turn: how 2HG actually plays', level: 2 },
    { id: 'combat-attacking-and-blocking-as-a-team', label: 'Combat: attacking and blocking as a team', level: 2 },
    { id: 'how-to-start-deckbuilding-and-setup', label: 'How to start: deckbuilding and setup', level: 2 },
    { id: 'what-changes-strategically', label: 'What changes strategically', level: 2 },
    { id: 'common-mistakes', label: 'Common mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Two-Headed Giant is the best way to play Magic *with* a friend instead of *against* everyone. Most multiplayer Magic is a free-for-all where your closest ally is whoever isn't attacking you this turn. 2HG flips that: you and a teammate share one life total, take one turn together, and win or lose as a single unit. It's the format for the person who wants to scheme with a buddy across the table instead of negotiating temporary truces in a four-player politics knife-fight.

It's also the most popular team format Wizards officially supports — it shows up at prereleases, Grand Prix side events, and kitchen tables constantly. The catch is that the rules changes are bigger than they look. "Two players on a team" sounds simple until you hit the shared turn, the way damage doubles against you, and the [combat rules](/blog/magic-the-gathering/mtg-combat-explained) that let your teammate block for you. Get those wrong and you'll misplay the format badly. Here's how 2HG actually works, and how to win it.

## What Two-Headed Giant is

Two-Headed Giant is a **two-versus-two team format**. Four players, two teams of two, sitting on opposite sides of the table. Each team is treated as a single "head" in a lot of rules-relevant ways: one shared life total, one shared turn, one team that wins and one that loses.

You can play it with any deck type. Constructed 2HG uses 60-card decks, Limited (the most common way it's played, at prereleases) uses 40-card decks, and there's even a [Commander variant](/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start) with 99-card singleton decks. The format layers on top of whatever you're already playing — the deck rules don't change, only the *game* rules do.

The teamwork is real and structural, not just vibes. You and your teammate share a life total, take your turns at the same time, and can freely tell each other your plans and even what's in your hands (in casual play). Your cards are still yours — your teammate can't cast spells from your hand or use your mana — but you're building toward one shared win condition. That's the whole appeal.

## The rules that actually change

Before the deep dives, here's the cheat sheet of everything 2HG changes versus a normal game. These are the rules people get wrong:

- **Each team shares one life total**, starting at **30** (Constructed and Limited). The Commander 2HG variant starts each team at **60**.
- **Both teammates take their turn simultaneously** — your team gets one shared turn, and you both untap, upkeep, draw, play, and attack together within it.
- **The team that goes first skips its first draw step** (just like the starting player in a normal game).
- **A team loses** at **0 or less life**, **15 or more poison counters**, or **21 or more combat damage from a single commander** (in Commander 2HG).
- **Each player gets one free mulligan**, and teammates decide whether to mulligan at the same time.
- **"Each opponent" and "each player" effects hit both members of a team separately** — which means a lot of symmetric damage and drain effects double up against the opposing team.

That last one is the sneaky one, and it's where the strategy lives. Hold onto it.

## Shared life and the loss conditions

The defining rule: **your team shares a single 30-life pool.** Damage to either player, life loss from either player's cards, life paid for either player's spells — it all comes out of the same 30. When that pool hits 0 or less, the *whole team* loses, regardless of which player "took" the damage.

![Fireball, an X-cost red spell — in Two-Headed Giant, divided or 'each opponent' burn hits both members of a team's shared life total, making mass damage far more punishing.](/images/blog/magic-the-gathering/mtg-two-headed-giant-guide/fireball.jpg)

That shared pool changes the math on damage in a way you have to internalize. Because effects that hit "each opponent" or "each player" affect both teammates *separately*, a symmetric burn spell or drain can deal double the life loss to the opposing team's single pool. A spell that reads "deals 3 damage to each opponent" does 6 to the enemy team's life total. That's why burn, drain, and "each opponent loses life" effects are quietly some of the strongest cards in 2HG — the shared pool turns them into double-rate damage.

The other loss conditions scale for the team, too:

- **Poison: 15 counters.** A team loses when it accumulates **15 or more poison counters**, up from the usual 10. Infect and toxic decks need to do half-again as much work to kill a 2HG team.
- **Commander damage (Commander 2HG only): 21.** A team loses if it's taken **21 or more combat damage from a single commander**, the same number as a normal Commander game — but it's tracked per team, against the team's shared pool of "damage from that commander."
- **"You lose the game" effects** still only knock out the player they hit, not the teammate — but losing one player on a team usually means that team loses, since the survivor is now playing two-on-one with the team's shared life.

## The shared turn: how 2HG actually plays

This is the rule that feels weird until it clicks. **The two players on a team take their turn at the same time.** Your team doesn't get two turns in a round — it gets *one shared turn* that you both participate in.

Concretely: on your team's turn, both teammates untap simultaneously, both have their upkeep, both draw (except on the very first turn of the game, when the team going first skips its draw). Then you share the main phases — either player can cast spells and play lands during the team's main phase, you sort out the order between yourselves, and you attack together in one combat. When your team passes, the *other* team takes its single shared turn.

So a full round is two turns total, not four: Team A's shared turn, then Team B's shared turn. Triggers that key off "your turn" or "the beginning of your upkeep" happen once for the team turn, and effects that care about "the beginning of each upkeep" will see each teammate's upkeep. The starting team skipping its first draw step is the only first-turn quirk to remember.

The practical upshot is that **mana and timing are shared resources to coordinate.** You can't pool mana — your lands tap for your spells only — but you *can* sequence around each other: one of you holds up interaction while the other commits the threat, or one ramps while the other deploys. Two hands of cards working in one turn is a lot of power if you sequence it well.

## Combat: attacking and blocking as a team

Combat is where the teamwork gets tactical, and the rules are very team-friendly.

![Comeuppance, a white instant that turns an opponent's attack back on them — in 2HG you can deploy team-protection tricks to cover a teammate's life and creatures.](/images/blog/magic-the-gathering/mtg-two-headed-giant-guide/comeuppance.jpg)

**Attacking.** On your team's shared turn, both teammates can attack in the same combat. Attackers are declared together as a team, and each attacker is assigned to attack a specific opposing player or one of their planeswalkers. You and your teammate coordinate the whole assault as one combat phase.

**Blocking.** This is the big one: **you can block attackers that are attacking you *or* your teammate.** Creatures either defending player controls can block any attacker hitting the team. So if your teammate is getting swung at and you've got the bigger blockers, you cover for them. The team's creatures defend the team. That's a massive shift from free-for-all multiplayer, where you can only block creatures attacking you.

Because blocking is a team effort, the format rewards a deliberate **"shield and sword" split.** One player can run the wall of blockers and protection spells while the other plays the threats — the defensive teammate covers both life totals (it's one pool anyway) while the aggressive teammate closes the game. Combat tricks and fogs protect the whole team's board, so a single well-timed protection spell can save both of you.

## How to start: deckbuilding and setup

Getting a 2HG game going is straightforward once you know the setup steps.

**Setup:**
- Four players, two teams of two, sitting across from your teammate's opponents (teammates on the same side).
- Each team starts at **30 life** (Constructed/Limited) or **60** (Commander).
- Randomly determine which team goes first; that team **skips its first draw step**.
- Each player draws a 7-card opening hand and may take **[one free mulligan](/blog/magic-the-gathering/mtg-mulligan-guide-london-mulligan)** (teammates decide together).

**Deckbuilding:** You're each building your own legal deck for the format you're playing — 60 cards Constructed, a 40-card Limited pool, or a 99+commander Commander deck. The trick is to build the two decks to *complement* each other rather than as two independent good decks:

- **Don't double up on do-nothing-alone cards.** If you both bring slow value engines, you'll get run over before either comes online. Stagger your curves.
- **Split the roles.** One control/defensive deck plus one aggressive/threat-dense deck is a classic 2HG pairing — the controller protects the pool while the beater ends it.
- **Lean into "each opponent" effects.** Burn, drain, and group-damage cards punch above their rate because they hit both opposing players' shared pool. Load up.
- **Value team-wide protection.** Fogs, mass protection, and instant-speed answers cover both of you at once and are worth more here than in 1v1.

## What changes strategically

The shared everything rewrites how you evaluate cards and lines.

**Symmetric and "each opponent" damage is premium.** As covered, anything that hits each opponent doubles against the enemy team's single life pool. A "deal 2 to each opponent" effect is a Lightning Bolt-and-a-half against the team. Conversely, *symmetric* effects that hit each player also hurt *you and your teammate* — a [board wipe](/blog/magic-the-gathering/best-board-wipes-mtg) or a "each player loses life" symmetric effect costs your team double too, so weigh them carefully.

**Big, splashy threats are safer.** In a four-player free-for-all, the player who taps out for the giant haymaker often gets ganged up on. In 2HG there are only two opposing decks, your teammate is helping, and you can afford to commit harder. The format rewards proactive, powerful plays more than cagey politics.

**Removal and protection get pulled in two directions.** You've got two opponents' boards to answer, but also two of your own to protect. Interaction that can cover the whole team — flexible removal, team-wide combat tricks, [counterspells](/blog/magic-the-gathering/best-counterspells-mtg) held up for the scary spell — is worth more than narrow, single-target tech.

**Coordinate your turn like one player with two hands.** The best teams sequence their shared turn deliberately: ramp before threats, hold up the answer while the partner commits, and decide *together* who attacks and who holds back blockers. Talking through the turn is not just allowed, it's the skill.

## Common mistakes

- **Forgetting damage comes out of one pool.** New 2HG players track "their" life and "their teammate's" life separately. There is one 30-life pool. Plan defense around the *team* total, not your half.
- **Underrating "each opponent" effects.** That symmetric burn or drain spell you'd cut in 1v1 is a premium card here because it doubles against the enemy team. Don't leave them in the binder.
- **Building two greedy decks.** Two slow value piles get steamrolled. Make sure at least one deck can apply early pressure or protect the pool while the other sets up.
- **Blocking only for yourself.** You can block attackers hitting your teammate. If you've got the better blockers, cover for your partner — the creatures defend the team, not the individual.
- **Misplaying the first turn.** The team going first skips its first draw step. Don't forget the skip, and don't forget your teammate still draws on a normal turn.
- **Tapping out blind.** Because you share a turn, coordinate who holds up interaction. Two players tapping out into the same turn with no answers up is how teams lose to one big spell.

## Quick Action Checklist

- Remember the core numbers: 30 shared life (60 in Commander), 15 poison to lose, 21 commander damage to lose.
- The team going first skips its first draw step; each player gets one free mulligan.
- Take your turn together — coordinate mana and sequencing like one player with two hands.
- Block for your teammate: any creature your team controls can block any attacker hitting the team.
- Prioritize "each opponent" burn and drain — it doubles against the enemy team's single life pool.
- Build complementary decks, not two greedy piles; a defensive deck plus an aggressive deck is the classic split.
- Hold up team-wide protection and flexible removal so one of you can always answer the scary play.
- Talk through every turn with your teammate — communication is the format's real skill.`,
  faq: [
    {
      question: 'What is Two-Headed Giant in MTG?',
      answer:
        'Two-Headed Giant is a two-versus-two team format. Four players form two teams of two, and each team shares a single life total (30 in Constructed and Limited, 60 in Commander), takes one shared turn together, and wins or loses as a unit. It is the most popular officially supported team format and shows up at prereleases, side events, and casual tables.',
    },
    {
      question: 'How much life do you start with in Two-Headed Giant?',
      answer:
        'Each team shares a single starting life total of 30 in Constructed and Limited Two-Headed Giant. The Commander variant starts each team at 60. Because the pool is shared, damage and life loss from either teammate\'s cards all come out of the same total, and the team loses when that pool reaches 0 or less.',
    },
    {
      question: 'How do turns work in Two-Headed Giant?',
      answer:
        'The two players on a team take their turn at the same time, sharing one turn. Both teammates untap, have their upkeep, draw, play, and attack together in one shared turn, then the other team takes its single shared turn. A full round is two turns total, not four. The team that goes first skips its first draw step.',
    },
    {
      question: 'Can you block for your teammate in Two-Headed Giant?',
      answer:
        'Yes. Creatures either player on a team controls can block any attacker that is attacking the team — so you can block creatures attacking your teammate, not just creatures attacking you. This makes a "shield and sword" split powerful: one teammate runs blockers and protection while the other plays the threats.',
    },
    {
      question: 'How many poison counters does it take to lose in Two-Headed Giant?',
      answer:
        'A team loses when it has 15 or more poison counters, up from the usual 10 in a one-on-one game. Infect and toxic strategies therefore need to do half-again as much work to kill a 2HG team. In the Commander variant, a team also loses to 21 or more combat damage from a single commander.',
    },
    {
      question: 'Why are "each opponent" effects so strong in Two-Headed Giant?',
      answer:
        'Because effects that read "each opponent" or "each player" affect both members of the opposing team separately, while that team has only one shared life pool. A spell dealing 3 damage to each opponent does 6 to the enemy team\'s 30-life pool. That doubling makes burn, drain, and group-damage cards punch well above their normal rate in 2HG.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start', anchor: 'Commander format guide' },
    { href: '/blog/magic-the-gathering/mtg-combat-explained', anchor: 'how combat works in MTG' },
    { href: '/blog/magic-the-gathering/mtg-mulligan-guide-london-mulligan', anchor: 'London mulligan guide' },
    { href: '/blog/magic-the-gathering/mtg-deck-archetypes-explained', anchor: 'MTG deck archetypes explained' },
    { href: '/blog/magic-the-gathering/mtg-keywords-explained', anchor: 'MTG keyword abilities explained' },
  ],
  externalSources: [
    { url: 'https://magic.wizards.com/en/formats/two-headed-giant', title: 'Wizards: Official Two-Headed Giant Format Page' },
    { url: 'https://blogs.magicjudges.org/2hg/faq/', title: 'Magic Judges: Two-Headed Giant Rules FAQ' },
    { url: 'https://scryfall.com/', title: 'Scryfall: MTG Card Database and Legality Data' },
  ],
  tldr:
    'Two-Headed Giant is MTG\'s 2v2 team format: two teams of two, each sharing a single 30-life pool (60 in Commander) and taking one shared turn together. A team loses at 0 life, 15 poison counters, or 21 commander damage. You can block for your teammate, and "each opponent" damage doubles against the enemy team\'s pool — so burn and drain are premium. Build complementary decks and coordinate every shared turn.',
};
