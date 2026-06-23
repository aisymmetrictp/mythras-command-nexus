import type { BlogPost } from '../../blogTypes';

export const braverseTurnStructureGuide: BlogPost = {
  slug: 'cookie-run-braverse-turn-structure-guide',
  game: 'cookie-run-braverse-tcg',
  category: 'beginner-guides',
  topicCluster: 'rules-mechanics',
  tags: ['Rules', 'Turn Structure', 'Phases', 'Tempo'],
  title: "Cookie Run: Braverse Turn Structure & Phases Explained",
  metaDescription:
    "Cookie Run: Braverse turn structure explained: the Refresh, Draw, Main and End phases, what you can do when, and the first-player turn-1 limits.",
  excerpt:
    "Most Braverse misplays aren't bad cards - they're a phase mistake. Here's the full turn flow, Refresh to End, what you're allowed to do in each window, and the first-turn rules that trip up every new player.",
  featuredImagePrompt:
    "A top-down Cookie Run: Braverse play mat mid-turn with rested Support cards being stood back upright, a Cookie attacking in the Battle Area, and small phase labels - Refresh, Draw, Main, End - arcing across the table under warm tournament lighting.",
  heroImage:
    '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-turn-structure-guide/princess-cookie.webp',
  heroImageAlt:
    'Official Princess Cookie card (BS3-001), a Red LV.1 Cookie whose skill line and attack line sit in different timing windows - the heart of reading a Cookie Run: Braverse turn.',
  imageSources: [
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-turn-structure-guide/princess-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/-kx5_L0-LvQ6q7oYDo07DQ.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-turn-structure-guide/knight-cookie.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/5AoOrNORvc6gfCZGNMzPgA.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-turn-structure-guide/juicy-stamina-jellies.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/5SYRB9WP5DVScFEfoap1Zw.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
    {
      src: '/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-turn-structure-guide/paper-puppet-troupe.webp',
      sourceUrl: 'https://cookierunbraverse.com/data/en_storage/L6Dec35iN5dCRGUHgyL2SA.webp',
      license: 'Card art © Devsisters Corp.; via cookierunbraverse.com official card database (fair-use editorial)',
    },
  ],
  publishDate: '2026-06-22T00:00:00.000Z',
  lastUpdated: '2026-06-22T00:00:00.000Z',
  primaryKeyword: 'cookie run braverse turn structure',
  secondaryKeywords: [
    'cookie run braverse phases',
    'cookie run braverse turn order',
    'braverse refresh draw main end',
    'what can you do on your turn braverse',
    'cookie run braverse first player rules',
    'cookie run braverse main phase',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'evergreen',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'why-the-turn-is-the-real-rulebook', label: 'Why the turn is the real rulebook', level: 2 },
    { id: 'the-four-phases-in-order', label: 'The four phases, in order', level: 2 },
    { id: 'the-refresh-phase', label: 'The Refresh phase', level: 2 },
    { id: 'the-draw-phase', label: 'The Draw phase', level: 2 },
    { id: 'the-main-phase-where-the-game-happens', label: 'The Main phase: where the game happens', level: 2 },
    { id: 'attacking-inside-the-main-phase', label: 'Attacking inside the Main phase', level: 2 },
    { id: 'the-end-phase', label: 'The End phase', level: 2 },
    { id: 'the-first-player-rules', label: 'The first-player rules', level: 2 },
    { id: 'where-the-turn-trips-new-players-up', label: 'Where the turn trips new players up', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Nine times out of ten, when a new Cookie Run: Braverse player loses a game they "should" have won, it isn't a card-quality problem. It's a phase problem. They forgot the first player can't attack on turn one. They dumped their whole Support and had nothing left to spring a Trap. They tried to set a Trap *after* declaring an attack. The turn structure isn't decoration - it's the actual ruleset that decides what's legal when, and learning it cold is the single biggest jump from "I know the cards" to "I know the game."

This is the full turn flow, phase by phase, grounded in the official rules. We'll keep it consistent with the rest of our coverage: the top-to-bottom beginner walkthrough lives in [how to play](/blog/cookie-run-braverse-tcg/how-to-play-cookie-run-braverse), the resource economy gets its own [energy and leveling guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-energy-guide), and the bracketed ability words you'll trigger mid-turn are in [keywords explained](/blog/cookie-run-braverse-tcg/cookie-run-braverse-keywords-explained). One symbol note up front: on the cards, {R} is a Red resource, {N} is any color, and {da} reads as "deals damage," so an attack written "two Red" is what the card actually demands you rest Support to pay.

## Why the turn is the real rulebook

Braverse looks deceptively simple - you play Cookies, you swing, somebody fills up a Break Area. But almost every interaction in the game is gated by *when* in your turn it's allowed to happen. Costs are paid by resting Support cards, and those cards only stand back up at a specific moment. Traps are set during one window and fire during a different one, on your opponent's turn. An attack can only be declared after you've finished developing. Miss the ordering and you'll either lose a play you were entitled to or attempt one you weren't.

The good news: there are only four phases, they always run in the same order, and you finish one completely before starting the next. Memorize that spine and the rest of the game hangs off it cleanly.

> The fast frame: a Braverse turn is "stand my stuff up, draw a card, do everything, pass." Every decision you make lives inside that sequence.

## The four phases, in order

Here's the whole turn at a glance. We'll unpack each one below, but this is the shape to burn into memory:

| Phase | One-line job | Key restriction |
| --- | --- | --- |
| **Refresh** | Stand up (un-rest) your rested Support cards so they can pay again | Nothing to refresh on your very first turn |
| **Draw** | Draw one card from your deck | The first player skips this on turn 1 |
| **Main** | Play Cookies, add one Support, set Traps, drop a Stage, use Items, and attack | This is where nearly everything happens |
| **End** | Resolve end-of-turn effects, then pass | Some skills specifically trigger here |

Some community guides label these windows slightly differently or fold attacking out into its own named "Battle" step, so if a precise phase name or ordering matters for a sanctioned ruling, confirm it against the official rulebook. The functional sequence - refresh, draw, do your turn, pass - is what every guide agrees on.

## The Refresh phase

Your turn opens by **standing your Support cards back up**. Anything you rested last turn to pay a cost is now upright and available again.

This is the heartbeat of the Braverse economy. You pay for Cookies, attacks, skills, Items, and Traps by *resting* (tapping) cards in your Support Area; the Refresh phase is the moment all of that resource comes back. If you rested four Support cards last turn to slam a big play, all four refresh now, and your turn starts with a full tank.

A couple of things to internalize about Refresh:

- It happens **automatically and first**. You don't choose what to refresh - everything that's rested stands up.
- On your **very first turn there's nothing to refresh**, because you haven't rested anything yet. New players sometimes pause here looking for something to do; there isn't anything. Move on.
- Any "at the start of your turn" effect keys off this window, so this is also when those triggers resolve.

We dig into how the Support engine grows and why it ramps the way it does in the dedicated [energy and leveling guide](/blog/cookie-run-braverse-tcg/cookie-run-braverse-energy-guide). For turn-structure purposes, just know Refresh is the "reload" step.

## The Draw phase

Next you **draw one card** from the top of your deck. One card, every turn - with a single famous exception we'll cover below: the player who goes first does **not** draw on turn one.

There's not much decision-making in the draw itself, but two structural points matter:

- Your deck is **exactly 60 cards**, and it's the same deck that feeds the face-down HP stacks under your Cookies. Every card you draw is a card that *wasn't* protecting a Cookie's health, and vice versa. That tension is part of why Braverse decks are built at 60 and not padded out.
- Running out of cards to draw is a real, if rare, way to be put under pressure, so grindy decks have to respect their own library. For an aggro deck it almost never comes up; for a long control mirror it can.

Draw, then move to the part of the turn that actually decides games.

## The Main phase: where the game happens

![Official Knight Cookie card (BS9-012), a Red LV.1 Cookie whose skill triggers at the end of your opponent's turn - a reminder that effects fire in specific phases in Cookie Run: Braverse.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-turn-structure-guide/knight-cookie.webp)

The Main phase is the turn. Everything that isn't "reload" or "draw" or "pass" lives here, and you can sequence these actions in whatever order makes sense - with one hard rule that catches everyone (more on that under attacking). Inside Main you may:

- **Add one card to your Support Area.** Exactly one per turn. This is how your resource base grows - slowly, one card at a time - so the Support card you choose to commit is a real decision, not an afterthought.
- **Play Cookies** into your Battle Area by resting Support to pay their cost. New Cookies build an HP stack from the top of your deck equal to their HP value.
- **Set Traps** face-down in your Support Area to spring on your opponent's turn.
- **Drop a Stage** to change the board's rules (one active Stage at a time).
- **Use Items** for boosts, burn, healing, and utility, resting Support to pay.
- **Activate skills** on your Cookies - the {On Play}, {Activate}, and {Once Per Turn} abilities covered in [keywords explained](/blog/cookie-run-braverse-tcg/cookie-run-braverse-keywords-explained).
- **Declare attacks** with your Cookies.

The skill you don't learn from a rulebook is *sequencing*. Because you rest Support to pay for everything, the order you do things in determines what you can afford. Play your cheap Cookie before you commit Support to a Trap and you might not have the resource left for both. Good Main phases are planned backwards from what you most want to happen.

> Beginner tip: before you touch a card, count your available (upright) Support and decide what the turn's priority play is. Pay for that first. Spend the leftovers on everything else.

## Attacking inside the Main phase

Attacking is part of the Main phase, but it carries the one ordering rule that trips up literally every new player: **you develop first, then you attack.** In practice, declare your attacks toward the *back half* of your Main phase, after you've added Support and played the Cookies you wanted out. Trying to retroactively "go back" and play more Cookies after you've started swinging is where rules disputes happen, so build, then battle.

When a Cookie attacks:

- You pay the attack's cost (the resource in pointed brackets, like {R}{R}) by resting Support.
- Damage comes off the defending Cookie's HP stack - and because that stack is face-down cards, your attack can flip a hidden FLIP card and hand the *defender* a free trigger. That's the core reason you read a board before swinging into a healthy Cookie you can't predict.
- A Cookie with a "Then," clause on its attack line resolves that follow-up after the damage.

This is also where defensive keywords live. A {Blocker} Cookie can redirect an incoming attack onto itself, and Traps your opponent set last turn can fire in response to your swing. The attack step is the most interactive moment in the game, which is exactly why you want your own board fully built before you start it.

## The End phase

![Official Juicy Stamina Jellies card (BS9-019), a Red Item that buffs a Cookie's attack and HP during your turn - the kind of Main-phase play you sequence before you declare an attack in Cookie Run: Braverse.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-turn-structure-guide/juicy-stamina-jellies.webp)

When you're done attacking and playing, you hit the **End phase**: resolve any "at the end of your turn" effects, then pass to your opponent.

End is quieter than Main, but it's not a no-op. Some cards key specifically off this window or off your opponent's end step. Knight Cookie (BS9-012), for instance, carries a skill that reads "At the end of your opponent's turn, if there are 2 Cookies in your battle area, this Cookie receives 3 damage" - a downside that resolves in a specific end-of-turn window, not whenever you feel like it. Effects that say "during this turn" also wear off here, so a Cookie you buffed with an Item this turn loses that buff as the turn closes.

The practical takeaway: don't bank on "during this turn" effects sticking around. If an Item gave a Cookie +1 attack for the turn, use it *this* turn or lose it. End is the cleanup that makes those words mean what they say.

## The first-player rules

Going first is an advantage - you develop your board a turn ahead - so Braverse taxes it with two restrictions that *only* apply to the player who takes the first turn of the game:

1. **The first player skips their Draw phase on turn one.** They start the game with their opening hand and don't add to it until turn two.
2. **The first player cannot attack on turn one.** They can develop - add Support, play a Cookie - but they can't swing.

Forgetting either of these is the most common turn-one rules slip in the game. The mental shortcut: *if you went first, your turn one is "set up and shut up."* Add a Support card, play your cheapest Cookie, pass. You'll attack starting turn two like everyone else. The player going second, by contrast, draws and (board permitting) attacks normally from their first turn. These first-turn limits are well-corroborated across the community, but as with any young game's rules, confirm the exact wording against the official rulebook before a sanctioned event.

## Where the turn trips new players up

![Official Paper Puppet Troupe card (BS9-022), a Red Trap you set during your Main phase to spring on your opponent's turn - timing that only works if you respect the phases in Cookie Run: Braverse.](/images/blog/cookie-run-braverse-tcg/cookie-run-braverse-turn-structure-guide/paper-puppet-troupe.webp)

The recurring phase mistakes, and the fix for each:

- **Attacking before you've finished developing.** Build your board - Support, Cookies - *then* declare attacks. Don't start swinging and expect to slot in more plays afterward.
- **Emptying your Support every turn.** If you rest every card to pay for a big Main phase, you have nothing left to fire a Trap or an instant-speed answer on your opponent's turn. Leave one or two upright if you're holding reactive cards.
- **Forgetting the first-player turn-1 limits.** No draw, no attack on the opening turn if you went first. Develop and pass.
- **Setting a Trap and expecting it to fire this turn.** Traps are set during your Main phase and trigger on your *opponent's* turn, in response to their plays. They're not an instant you fire on demand.
- **Misreading the skill line versus the attack line.** A Cookie's standing skill (often gated by a keyword like {On Play} or {Activate}) and its attack-line "Then," clause fire in different windows. Read which zone an effect sits in before you assume it triggered.
- **Letting "during this turn" buffs expire unused.** Those effects vanish in the End phase. Cash them in the turn you create them.

> The throughline: Braverse rewards players who treat the turn as a checklist, not a free-for-all. Refresh, draw, build, attack, clean up, pass - run it the same way every turn and the misplays evaporate.

## Quick Action Checklist

- **Run the spine every turn: Refresh -> Draw -> Main -> End.** Finish each phase before the next.
- **Refresh stands up all your rested Support** - that's your resource reload; nothing to do here on turn one.
- **Draw one card** - unless you went first, in which case you skip your turn-1 draw.
- **In Main, add exactly one Support card,** then play Cookies, set Traps, drop a Stage, use Items, and activate skills - sequenced so you can afford your priority play.
- **Develop first, attack second.** Declare attacks in the back half of Main, after your board is built.
- **Respect the first-player tax:** no draw and no attack on your opening turn if you went first.
- **Don't drain your whole Support** - leave a card or two upright to spring a Trap or an instant-speed answer on your opponent's turn.
- **Spend "during this turn" effects now** - they wear off in the End phase.`,
  faq: [
    {
      question: "What are the phases of a turn in Cookie Run: Braverse?",
      answer:
        "A Braverse turn runs through four phases in order: Refresh (stand your rested Support cards back up), Draw (draw one card from your deck), Main (play Cookies, add one Support card, set Traps, drop a Stage, use Items, activate skills, and attack), and End (resolve end-of-turn effects, then pass). You finish each phase before moving to the next.",
    },
    {
      question: "Can the first player attack on turn 1 in Cookie Run: Braverse?",
      answer:
        "No. The player who goes first cannot attack on their first turn, and they also skip their Draw phase that turn. Both restrictions are the tax for the first-turn development advantage. The first player can still add a Support card and play a Cookie - they just can't draw or swing on turn one. Confirm the exact wording against the official rulebook before a sanctioned event.",
    },
    {
      question: "What can you do during the Main phase in Braverse?",
      answer:
        "The Main phase is where almost everything happens. You may add exactly one card to your Support Area, play Cookies, set Traps, drop a Stage (one active at a time), use Items, activate Cookie skills, and declare attacks. You pay costs by resting Support cards, so sequencing matters - pay for your priority play first. The one hard rule is to finish developing before you start attacking.",
    },
    {
      question: "When do you draw cards in Cookie Run: Braverse?",
      answer:
        "You draw one card during the Draw phase, which comes right after Refresh and before your Main phase. You draw a single card per turn. The only exception is the player who takes the very first turn of the game: they skip their Draw phase on turn one and start drawing from turn two onward.",
    },
    {
      question: "When do Traps trigger in Cookie Run: Braverse?",
      answer:
        "You set Traps face-down during your Main phase, but they trigger on your opponent's turn, typically in response to their attack. That's why you should leave a card or two of upright Support available going into your opponent's turn - a Trap you can't pay for is just a card sitting there. Setting a Trap does not let it fire on the same turn you set it.",
    },
  ],
  internalLinks: [
    { href: '/blog/cookie-run-braverse-tcg', anchor: 'Braverse hub' },
    {
      href: '/blog/cookie-run-braverse-tcg/how-to-play-cookie-run-braverse',
      anchor: 'how to play',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-energy-guide',
      anchor: 'energy and leveling guide',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-keywords-explained',
      anchor: 'keywords explained',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-win-conditions',
      anchor: 'win conditions',
    },
    {
      href: '/blog/cookie-run-braverse-tcg/cookie-run-braverse-mulligan-guide',
      anchor: 'mulligan and opening hand guide',
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
    "A Cookie Run: Braverse turn runs through four phases in strict order: Refresh (stand your rested Support cards back up), Draw (draw one card), Main (add one Support card, play Cookies, set Traps, drop a Stage, use Items, activate skills, and attack), and End (resolve end-of-turn effects, then pass). You pay for everything by resting Support, so sequencing inside Main matters - develop your board fully before you declare attacks. The big gotcha: the player who goes first skips their turn-1 draw and cannot attack on turn one. Leave some Support upright to spring Traps on your opponent's turn.",
};
