import type { BlogPost } from '../../blogTypes';

export const pubgRevivingDbnoGuide: BlogPost = {
  slug: 'pubg-reviving-dbno-guide',
  game: 'pubg-battlegrounds',
  category: 'advanced-strategy',
  topicCluster: 'pubg-strategy',
  tags: ['reviving', 'dbno', 'knocked', 'squad', 'teamplay', 'self-revive'],
  title: 'PUBG Reviving & DBNO Guide: Save Your Squad',
  metaDescription:
    'How the PUBG knocked (DBNO) state really works — bleed-out timers, carrying, smoke revives, trading knocks, self-revive, and when to give up a teammate.',
  excerpt:
    "A knock isn't a kill, and a panicked revive in the open is. Here's how the DBNO state actually works in PUBG — the shrinking bleed-out timer, carrying, smoke revives, and the hard calls about when to save a teammate and when to leave them.",
  featuredImagePrompt:
    'A PUBG squad scene with one player crawling in the DBNO downed state while a teammate kneels to revive behind cover, a smoke screen drifting across the open ground between them and an enemy compound',
  heroImage: '/images/blog/pubg-battlegrounds/pubg-reviving-dbno-guide/dbno.webp',
  heroImageAlt:
    'A knocked (DBNO) PUBG player crawling on the ground — down but not out, with a shrinking bleed-out timer ticking until a teammate revives them.',
  imageSources: [
    {
      src: '/images/blog/pubg-battlegrounds/pubg-reviving-dbno-guide/dbno.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:DBNO.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-reviving-dbno-guide/smoke-grenade.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Smoke_Grenade.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-reviving-dbno-guide/self-aed.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Self_AED.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/pubg-battlegrounds/pubg-reviving-dbno-guide/emergency-pickup.webp',
      sourceUrl: 'https://pubg.fandom.com/wiki/File:Emergency_Pickup.png',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-18T00:00:00.000Z',
  lastUpdated: '2026-06-18T00:00:00.000Z',
  primaryKeyword: 'pubg reviving',
  secondaryKeywords: [
    'pubg dbno',
    'pubg knocked state',
    'how to revive in pubg',
    'pubg bleed out timer',
    'pubg self revive',
    'pubg carrying teammate',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'a-knock-is-not-a-kill', label: 'A knock is not a kill', level: 2 },
    { id: 'how-the-dbno-state-works', label: 'How the DBNO state works', level: 2 },
    { id: 'the-bleed-out-timer-and-why-it-shrinks', label: 'The bleed-out timer and why it shrinks', level: 2 },
    { id: 'how-to-actually-revive-safely', label: 'How to actually revive safely', level: 2 },
    { id: 'carrying-a-downed-teammate', label: 'Carrying a downed teammate', level: 2 },
    { id: 'trading-knocks-and-finishing', label: 'Trading knocks and finishing', level: 2 },
    { id: 'self-revive-and-when-to-let-go', label: 'Self-revive and when to let go', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `The fastest way to lose a squad game isn't getting your whole team knocked at once — it's one player sprinting into the open to revive a downed teammate, eating a full magazine, and turning a 3v4 into a 1v4. A knock is a momentum swing, not a kill, and the team that handles the downed state with discipline wins fights they had no business winning. The team that panics revives turns one knock into a wipe.

This is the guide to the part of PUBG nobody teaches you: what actually happens when you go down, how long you have, and the hard calls about who you save and when you let them bleed. It's the squad-fight companion to the [squad strategy guide](/blog/pubg-battlegrounds/pubg-squad-strategy) — that one's about winning the engagement; this one's about not throwing it away on the revive.

## A knock is not a kill

In duos and squads, dropping an enemy's HP to zero doesn't eliminate them — it knocks them into the DBNO state (Down But Not Out). They're not dead. A teammate can pick them back up, and they're back in the fight. This is the single most important thing to internalize about squad combat, and it cuts both ways.

When you knock an enemy, the job's only half done. They can be revived, so you either finish them or pressure their teammates so hard that nobody can get to them. A knock you don't follow up on is just a temporary advantage that resets the moment their squadmate touches them. When *you* get knocked, you're not out — you're on a timer, and your job becomes staying alive and getting to cover so your team can pick you up.

> The mental shift that wins squad games: stop celebrating knocks and start counting them. A knock is a clock that's now ticking on the enemy. Either close it out or make it impossible for them to revive — a knock left alone is worth almost nothing.

In solos, none of this applies the normal way — zero HP is just death, with the one exception of a self-revive item we'll get to. Everything below is duo and squad play.

## How the DBNO state works

When your HP hits zero in a squad, you drop to the ground into the knocked state. Here's exactly what you can and can't do:

![A knocked PUBG player in the DBNO state — you can crawl and drop items, but you can't shoot or heal until a teammate picks you up.](/images/blog/pubg-battlegrounds/pubg-reviving-dbno-guide/dbno.webp)

- **You can crawl and drop items.** That's it for offense — you cannot shoot, scope, or use any items, including heals, while down. Crawling to cover is your entire toolkit.
- **You're briefly invulnerable on the way down.** There's a short window as the knock animation plays where you can't take more damage. It's small, but it's why a clean knock doesn't always instantly become a finish.
- **You can still be shot and finished.** Enemies can keep shooting you while you're down to either kill you outright or speed up your bleed-out. Note that PUBG reduces some weapon damage against downed players (frag grenades do less, for instance), while sniper rifles and crossbows are tuned to hit downed targets harder — the exact modifiers shift across patches, so don't memorize numbers, just know that getting shot while down is bad and snipers especially so.
- **A teammate revives you by holding the interact key.** They have to be next to you and stay put for the duration — moving cancels it. The revive-progress icon is visible to both of you, so you both know how close it is.

The crucial habit while you're down: **crawl toward cover and toward your team, not away from the fight in a straight line.** Every meter you cover yourself is a meter your reviving teammate doesn't have to expose themselves for.

## The bleed-out timer and why it shrinks

Once you're knocked, a bleed-out timer starts counting down. If it hits zero before a teammate revives you, you die permanently for the rest of the match. Two things about that timer that most players don't fully grasp:

**It pauses while you're being revived.** The moment a teammate starts picking you up, the bleed-out clock stops draining. So even a revive that gets interrupted bought you time. This is why starting a revive — even one you might not finish — is often worth it under pressure.

**It gets shorter every time you go down.** This is the big one. Your first knock gives you the longest window; every subsequent knock in the same match drains faster. By your third or fourth knock you have a fraction of the time you started with. The exact seconds are patch-variable — PUBG has retuned these timers across updates — but directionally, your first knock is generous and your fifth is nearly instant. Confirm the current values in-game, but plan around the principle: a player who's been knocked repeatedly is on borrowed time, and reviving them buys less and less.

That shrinking timer drives real decisions. Early in a match, a knocked teammate has plenty of time and reviving is almost always right. Late, after everyone's traded knocks a few times, a downed player might bleed out before you can safely reach them — which is exactly when the "do I revive or do I leave them" call gets sharp.

One more wrinkle: **if the last standing player on a squad gets knocked or killed while teammates are down, everyone still in the DBNO state dies instantly.** So the last player up isn't just fighting for themselves — they're the lifeline for every downed teammate. Keep one player safe and alive and you keep the revive option open.

## How to actually revive safely

The revive itself is where squads throw games. You have to be stationary and next to the downed player for the full duration, which means for those seconds you are a soft, unmissable target who can't shoot back. Doing that in the open is how one knock becomes two. The fix is almost always smoke.

![A smoke grenade — the single most important tool for reviving in the open; throw it between you and the enemy to break their line of sight before you commit.](/images/blog/pubg-battlegrounds/pubg-reviving-dbno-guide/smoke-grenade.webp)

- **Smoke first, revive second.** If your teammate went down anywhere an enemy can see, throw a smoke grenade between the down and the threat before you commit. The smoke breaks line of sight so you can pick them up without getting shredded mid-animation. This is the number-one revive habit, full stop. The [throwables guide](/blog/pubg-battlegrounds/pubg-throwables-utility-guide) covers how to place smoke walls properly.
- **Revive behind hard cover when you can.** A wall, a building corner, a vehicle, a tree — anything that blocks the angle is better than open ground. Often the right play is to crawl the downed player to cover first (more on that next), then revive.
- **Clear the threat before you commit.** A revive in the middle of an active fight gets you both killed. If the enemy still has a clear angle and isn't suppressed, win the duel or break contact first — a dead teammate you avenged beats two dead teammates.
- **Don't all crowd the revive.** In a four-stack, one player revives while the others hold angles and lay down covering fire. Three players bunched on one down is a grenade's dream.

The discipline that separates good squads from bad ones: nobody revives until the revive is actually safe. A teammate on the bleed-out timer feels urgent, but a rushed revive that gets the rescuer killed is strictly worse than waiting two seconds for smoke to bloom.

## Carrying a downed teammate

PUBG lets you pick up and carry a knocked teammate, and it's a hugely underused mechanic. When you carry a downed player, a few things happen at once:

- **Their bleed-out timer drains slower.** Carrying them to a safer spot buys time on the clock — you're actively extending their window while you relocate.
- **They become a partial human shield.** The carried player soaks some incoming fire that would otherwise hit you. Great for you, less great for them, but it can be the difference in a fighting retreat.
- **You're heavily restricted while carrying.** You can't sprint, jump, crouch, prone, or vault, and you can only hip-fire. So you trade nearly all your mobility and accuracy for the ability to relocate a teammate. Choose your route carefully — you're slow and committed.

The ideal use: your teammate goes down in a bad spot with no cover and an enemy holding the angle. Instead of reviving in the open and dying, you crawl out, grab them, and carry them around a wall or into a building, then revive behind hard cover where the bleed-out clock and the enemy's sightline both stop working against you. Carrying turns a "we can't revive there" into "we revive over here, safely." It also works near water — a downed player can be carried (or can swim slowly themselves) to get out of a bad position, though reviving underwater isn't possible.

## Trading knocks and finishing

When you knock an enemy, you have a choice, and picking right wins fights.

**Finishing** means continuing to shoot the downed enemy until they're dead, removing the revive option entirely. The upside is permanence — a finished enemy is gone, and their squad can't get them back. The downside is that finishing takes time and ammo and keeps you exposed while their teammates are still up and shooting at you. Finish when the down is in the open and you have a clear, safe angle on them, or when removing that player decisively swings the fight.

**Pressuring instead** means leaving the knocked enemy on the ground and focusing fire on their standing teammates. The logic is sharp: a knocked enemy is already neutralized for now, and if you kill or knock the teammates trying to revive them, the downed player bleeds out for free — and remember, if you knock the last standing enemy, every teammate they had in the DBNO state dies instantly. Often the highest-value play isn't finishing the body, it's punishing the revive attempt.

The read: **finish when it's cheap and safe; pressure the revivers when it's not.** A common winning pattern is to knock one, then immediately swing your aim to the revive — the enemy who comes to pick up their friend is exposed and predictable, and dropping them frequently cascades into the whole squad. For the aiming mechanics that make those follow-up shots land, the [recoil control guide](/blog/pubg-battlegrounds/pubg-recoil-control-guide) is worth a read.

## Self-revive and when to let go

On some maps, PUBG includes a self-revive item — the Self AED — that lets a downed player pick themselves up without a teammate. It's a world-loot item available on certain maps (it launched on Taego), and it changes the math in two ways. In squads, a player holding one can revive themselves even if the whole team is down, which buys the squad a second chance instead of an instant wipe. In solos, having one lets you enter the knocked state instead of dying outright — your only second chance in a mode that otherwise has none.

![The Self AED — a world-loot self-revive item on the maps that have it; it lets a downed player pick themselves up with no teammate, and gives solos a second chance.](/images/blog/pubg-battlegrounds/pubg-reviving-dbno-guide/self-aed.webp)

If your map has one, grab it — a self-revive is one of the strongest pickups in the game, and using it counts as a revive in your stats. It can't be canceled once you start it and can't be used while a teammate is already reviving you, so commit at a sensible moment behind cover, not mid-sightline.

And then there's the hardest call in squad PUBG: **when to let a teammate go.** Sometimes the revive isn't worth it. If a teammate is down in the open with an enemy holding the angle, the zone closing on them, or a bleed-out timer that's already nearly gone from repeated knocks, the math can favor leaving them. Two alive players who reposition and re-engage beat three dead players who all funneled into the same kill zone. It feels bad, but a squad that knows when *not* to revive wins more games than one that always tries. On that note, if a teammate's down deep in the blue and you can't safely reach them, an [Emergency Pickup](/blog/pubg-battlegrounds/pubg-blue-zone-rotation-guide) won't revive them — but it's the tool for the survivors to escape a position the revive can't be made in.

![The Emergency Pickup — when the survivors can't safely reach a downed teammate near the blue zone, this is the squad's escape from an unwinnable position.](/images/blog/pubg-battlegrounds/pubg-reviving-dbno-guide/emergency-pickup.webp)

Master the downed state and you stop losing squad games to the revive. Knock-count instead of knock-celebrate, smoke every open revive, carry teammates to cover, pressure the revivers, and know the bleed-out clock well enough to make the cold call when the save isn't there.

## Quick Action Checklist

- [ ] Treat every knock as a clock, not a kill — finish it or pressure the revivers
- [ ] While down, crawl toward cover and your team; you can't shoot or heal, only relocate
- [ ] Remember the bleed-out timer pauses during a revive and shrinks with each knock you take
- [ ] Smoke first, revive second — never pick a teammate up in an open sightline
- [ ] Revive behind hard cover, and have only one player commit while others hold angles
- [ ] Carry downed teammates to cover when reviving in place is suicide (you're slow and hip-fire only)
- [ ] When you knock an enemy, swing to whoever comes to revive them — the rescuer is exposed
- [ ] Grab a Self AED if your map has one; commit it behind cover, not mid-fight
- [ ] Know when to let a teammate go — two alive beats three dead in the same kill zone`,
  faq: [
    {
      question: 'How do you revive a teammate in PUBG?',
      answer:
        'In duos and squads, when a teammate is knocked into the DBNO (Down But Not Out) state, move next to them and hold the interact key to revive — you must stay stationary for the full duration, and moving cancels it. The revive-progress icon shows for both of you. Because you can\'t shoot while reviving, the key habit is smoke first, revive second: throw a smoke grenade between the down and the enemy to break line of sight, or carry the downed player behind hard cover before you commit. A revived player returns with low HP, so heal up after.',
    },
    {
      question: 'What is the DBNO state in PUBG?',
      answer:
        'DBNO (Down But Not Out) is the knocked state in duos and squads: when your HP hits zero you drop instead of dying, and a teammate can revive you. While down you can only crawl and drop items — you cannot shoot, scope, or use any items including heals. You get a brief invulnerability window as you go down, but enemies can keep shooting you to finish you or speed your bleed-out. In solos, zero HP is death unless you have a self-revive item.',
    },
    {
      question: 'Does the bleed-out timer get shorter each time you go down in PUBG?',
      answer:
        'Yes. Your first knock gives the longest bleed-out window, and every subsequent knock in the same match drains faster — by your third or fourth knock you have a fraction of the original time. The timer also pauses while a teammate is actively reviving you, so starting a revive buys time even if it gets interrupted. The exact seconds are patch-variable since PUBG has retuned them across updates, so confirm in-game, but plan around the principle: a repeatedly-knocked player is on borrowed time.',
    },
    {
      question: 'Should I carry a knocked teammate in PUBG?',
      answer:
        "Often, yes — when reviving in place would get you both killed. Carrying a downed teammate slows their bleed-out timer, turns them into a partial human shield against incoming fire, and lets you relocate them behind cover before reviving. The trade-off is severe restriction: while carrying you can't sprint, jump, crouch, prone, or vault, and you can only hip-fire, so pick your route carefully. The ideal use is dragging a teammate out of an open sightline and around a wall, then reviving where neither the enemy's angle nor the clock works against you.",
    },
    {
      question: 'When should I NOT revive a teammate in PUBG?',
      answer:
        "Leave a teammate when the math doesn't favor the save: they're down in the open with an enemy holding the angle, the blue zone is closing on them, or their bleed-out timer is nearly gone from repeated knocks. Two alive players who reposition and re-engage beat three dead players who all funneled into the same kill zone. It feels bad, but squads that know when not to revive win more than ones that always try. Also keep one player alive and safe — if the last standing teammate gets knocked, everyone in the DBNO state dies instantly.",
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/pubg-battlegrounds', anchor: 'PUBG: Battlegrounds coverage hub' },
    { href: '/blog/pubg-battlegrounds/pubg-squad-strategy', anchor: 'PUBG squad strategy guide' },
    { href: '/blog/pubg-battlegrounds/pubg-throwables-utility-guide', anchor: 'PUBG throwables and utility guide' },
    { href: '/blog/pubg-battlegrounds/pubg-recoil-control-guide', anchor: 'PUBG recoil control guide' },
    { href: '/blog/pubg-battlegrounds/pubg-blue-zone-rotation-guide', anchor: 'PUBG blue zone and rotation guide' },
  ],
  externalSources: [
    {
      url: 'https://www.pubg.com/',
      title: 'PUBG: Battlegrounds — official site',
    },
    {
      url: 'https://pubg.fandom.com/wiki/DBNO',
      title: "DBNO — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
    {
      url: 'https://pubg.fandom.com/wiki/Self_AED',
      title: "Self AED — official PLAYERUNKNOWN'S BATTLEGROUNDS Wiki",
    },
  ],
  tldr:
    "A knock isn't a kill in PUBG squads — it's a clock. The knocked (DBNO) player can only crawl and drop items, their bleed-out timer pauses during a revive and shrinks with every knock they take, and if the last standing teammate goes down, everyone still knocked dies instantly. Smoke first and revive second, revive behind hard cover, carry teammates out of open sightlines (you're slow and hip-fire only while carrying), and when you knock an enemy, punish whoever comes to pick them up. Grab a Self AED if your map has one, and know when two alive beats three dead.",
  itemList: {
    name: 'PUBG Reviving & DBNO Priorities',
    items: [
      { name: 'Count knocks, don\'t celebrate them', description: "A knocked enemy can be revived — either finish them or pressure the teammates trying to pick them up." },
      { name: 'Understand the bleed-out timer', description: "It pauses while you're being revived and shrinks with every knock you take in a match, so repeated knocks leave less and less time." },
      { name: 'Smoke first, revive second', description: "Never pick up a teammate in an open sightline — throw smoke between the down and the threat, then revive." },
      { name: 'Carry to cover', description: "Drag a downed teammate behind a wall before reviving. It slows their bleed-out and shields you, but you're slow and hip-fire only." },
      { name: 'Punish the reviver', description: "When you knock an enemy, swing your aim to whoever comes to revive them — the rescuer is stationary and exposed." },
      { name: 'Use a Self AED', description: "On maps that have it, a self-revive lets you pick yourself up with no teammate and gives solos a second chance. Commit it behind cover." },
      { name: 'Know when to let go', description: "Two alive players who reposition beat three dead in the same kill zone. Leave a save that isn't there." },
    ],
  },
};
