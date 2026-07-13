import type { BlogPost } from '../../blogTypes';

export const fortniteMythicWeaponsGuide: BlogPost = {
  slug: 'fortnite-mythic-weapons-guide',
  game: 'fortnite',
  category: 'game-guides',
  topicCluster: 'fortnite-combat',
  tags: ['mythic weapons', 'boss fights', 'medallions', 'loot', 'game knowledge'],
  title: 'Fortnite Mythic Weapons Guide: Bosses, Vaults, and Gold Guns',
  metaDescription:
    'Fortnite mythic weapons explained: how boss drops, medallions, and vaults work, mythic vs Exotic vs Legendary, and when contesting the gold gun is worth it.',
  excerpt:
    "Every named mythic in a Fortnite lobby usually exists exactly once, somebody has to rip it off a boss to get it, and half the server is planning to rip it off them next. Here's how the gold-gun economy actually works — and when chasing it is throwing.",
  featuredImagePrompt:
    'A golden mythic assault rifle glowing on a pedestal inside a dark Fortnite vault, three player silhouettes converging on it from different doorways, dramatic gold rim lighting, stylized game art with a sense of imminent chaos',
  heroImage: '/images/blog/fortnite/fortnite-mythic-weapons-guide/midas-drum-gun.webp',
  heroImageAlt:
    "Midas' Drum Gun, the gold mythic assault weapon dropped by the Midas boss in Fortnite Chapter 2 Season 2 — the poster child for boss-held mythic weapons.",
  imageSources: [
    {
      src: '/images/blog/fortnite/fortnite-mythic-weapons-guide/midas-drum-gun.webp',
      sourceUrl: 'https://fortnite.fandom.com/wiki/Midas%27_Drum_Gun',
      license: 'Fandom CC-BY-SA / Epic Games',
    },
    {
      src: '/images/blog/fortnite/fortnite-mythic-weapons-guide/tntina-ka-boom-bow.webp',
      sourceUrl: 'https://fortnite.fandom.com/wiki/TNTina%27s_Ka-Boom_Bow',
      license: 'Fandom CC-BY-SA / Epic Games',
    },
    {
      src: '/images/blog/fortnite/fortnite-mythic-weapons-guide/machinist-medallion.webp',
      sourceUrl: 'https://fortnite.fandom.com/wiki/Medallions',
      license: 'Fandom CC-BY-SA / Epic Games',
    },
    {
      src: '/images/blog/fortnite/fortnite-mythic-weapons-guide/infinity-blade.webp',
      sourceUrl: 'https://fortnite.fandom.com/wiki/Infinity_Blade',
      license: 'Fandom CC-BY-SA / Epic Games',
    },
  ],
  publishDate: '2026-07-13T00:00:00.000Z',
  lastUpdated: '2026-07-13T00:00:00.000Z',
  primaryKeyword: 'fortnite mythic weapons',
  secondaryKeywords: [
    'how to get mythic weapons fortnite',
    'fortnite mythic vs exotic',
    'fortnite boss weapons',
    'fortnite medallions explained',
    'fortnite mythic rarity',
    'are mythic weapons worth it fortnite',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'the-gold-gun-is-never-just-a-gun', label: 'The gold gun is never just a gun', level: 2 },
    { id: 'what-actually-makes-a-weapon-mythic', label: 'What actually makes a weapon mythic', level: 2 },
    { id: 'how-you-get-a-mythic', label: 'How you get a mythic', level: 2 },
    { id: 'boss-drops-kill-the-holder-take-the-gun', label: 'Boss drops: kill the holder, take the gun', level: 3 },
    { id: 'medallions-and-vaults', label: 'Medallions and vaults', level: 3 },
    { id: 'upgrades-and-collabs-the-wildcard-mythics', label: 'Upgrades and collabs: the wildcard mythics', level: 3 },
    { id: 'mythic-vs-exotic-vs-legendary', label: 'Mythic vs Exotic vs Legendary', level: 2 },
    { id: 'the-infinity-blade-rule', label: 'The Infinity Blade rule', level: 2 },
    { id: 'should-you-contest-the-boss', label: 'Should you contest the boss?', level: 2 },
    { id: 'playing-against-a-mythic', label: 'Playing against a mythic', level: 2 },
    { id: 'common-mythic-mistakes', label: 'Common mythic mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Thirty seconds into the match, half your lobby is sprinting at the same building. Not for the chests — for the boss inside it, because the boss is holding the only copy of the best gun in the game. That's the thing people miss about mythic weapons: each named mythic usually exists exactly once per match, one player is going to walk out with it, and everyone else who landed there is going to die trying. Epic didn't just add strong guns to Fortnite. They added a raid boss economy to a battle royale, and it warps how every match plays out.

This guide covers how that economy works: what mythic rarity actually means, every way to get one, how medallions and vaults fit in, how mythics differ from Exotics, and — the question that actually matters for your win rate — when contesting the gold gun is smart and when it's just donating your loadout to a third party. The specific mythics rotate every season, so we're staying on the durable stuff: the systems that have worked the same way since Chapter 2.

## The gold gun is never just a gun

A mythic changes your match before you ever fire it. The moment you pick one up, you're carrying an item other players actively want, that drops on your death, and that — in seasons with medallions — may literally mark your position on the map. You're not just better armed. You're a moving objective.

That's the design intent, and it's worth internalizing early: mythics exist to create fights. Epic scatters a handful of unique, overpowered items across the island specifically so players have a reason to land aggressively, push each other, and fight over something other than circle position. When you understand mythics as fight magnets rather than loot, every decision around them — contest or avoid, hold or ditch, push the holder or let someone else — gets a lot clearer.

## What actually makes a weapon mythic

Mythic is Fortnite's rarity tier above Legendary — the gold-colored tier reserved for items that are either unique or meaningfully stronger than their normal counterparts. Per the community wiki's breakdown, mythic items fall into a few recurring types:

- **Boss drops.** More powerful versions of existing weapons carried by a boss and dropped when the boss dies. Midas' Drum Gun is the classic example — a Drum Gun with better stats and a name attached.
- **Unique items.** One-off items with no lower-rarity version at all, like the Infinity Blade or Ocean's Bottomless Chug Jug — a Chug Jug that never runs out.
- **Collaboration items.** Crossover gear pulled straight from other franchises, like the Star Wars E-11 Blaster Rifle. If it came from a movie, it's usually gold.
- **Extra-rarity upgrades.** In some seasons, ordinary weapons can be pushed past Legendary into a mythic version through upgrade mechanics — Chapter 3's Reality Tree did this, and some seasons let upgrade benches do it.

The common thread: a mythic is either the only one of its kind in the lobby or the strongest version of its weapon class that exists. Either way, somebody else wants it. Where a given season's mythics rank against the regular loot pool is a moving target — our [Fortnite weapon tier list](/blog/fortnite/fortnite-weapon-tier-list) tracks that — but the acquisition systems below barely change.

## How you get a mythic

There are three reliable pipelines, and they've been remarkably stable across chapters.

### Boss drops: kill the holder, take the gun

![TNTina's Ka-Boom Bow, one of the original Chapter 2 Season 2 boss mythics — an explosive bow you could only take off the boss who carried it.](/images/blog/fortnite/fortnite-mythic-weapons-guide/tntina-ka-boom-bow.webp)

Since Chapter 2 Season 2 — the season that gave us Midas, Brutus, Skye, TNTina, and Meowscles — most seasons have placed AI bosses at named locations, each carrying a mythic weapon that drops when they're eliminated. That first wave set the template: Midas' Drum Gun, Brutus' Minigun, Skye's Assault Rifle and Grappler, TNTina's Ka-Boom Bow. Kill the boss, take the gun, inherit the target on your back.

Bosses are genuinely dangerous. They come with big health-plus-shield pools, they're accurate at range, and they're usually surrounded by AI guards or henchmen. Fighting one is a commitment: you'll burn ammo, take chip damage, and make noise that every player within earshot will investigate. Which is exactly why the meta around bosses isn't "who can kill the boss" — it's "who can kill the boss's killer." More on that below.

### Medallions and vaults

![The Machinist's Medallion from Chapter 5 — boss medallions passively regenerate shields but expose your location area on the map, the purest risk-reward trade in Fortnite.](/images/blog/fortnite/fortnite-mythic-weapons-guide/machinist-medallion.webp)

From Chapter 5 Season 1 onward, boss kills started paying out twice: the weapon, plus a medallion. Medallions don't take an inventory slot, and most of them buff you passively — the classic effect is shield regeneration (The Machinist's Medallion, for instance, regenerated 5 shield per second up to a 75-shield cap). Stack multiple medallions and the effects stack with them.

The catch is brutal and brilliant: carrying a medallion exposes your location area on every opponent's map, and the more medallions you carry, the more precise that circle gets. You become the objective. Medallions also inherit the old keycard job — in the seasons that use them, they're what opens the boss's vault, a locked room stuffed with high-tier loot and often the mythic itself. And like the weapons, medallions drop when you die, so the whole package just transfers to whoever kills you.

That transfer mechanic is the engine of the entire system. A mythic is never gone from the match until the match ends — it just keeps changing hands, and every hand it's in is marked, hunted, or both.

### Upgrades and collabs: the wildcard mythics

The third pipeline is season-dependent: some seasons let you upgrade a normal weapon into a mythic version at a bench or a special map mechanic, and collab seasons scatter franchise weapons — lightsabers, blasters, superhero gadgets — that carry the gold rarity without a boss attached. These are the least predictable sources, and honestly the least interesting strategically: if a mythic is sitting in a chest or on a bench, it doesn't create the fight-magnet dynamics that boss mythics do. Grab them when they're strong, but don't build a landing strategy around them.

## Mythic vs Exotic vs Legendary

These three get mixed up constantly, and the difference actually matters for how you play:

- **Legendary** (orange) is the top of the *normal* loot pool. Any number can exist per match. You find them in chests, on the ground, wherever. Strong, anonymous, nobody hunts you for one.
- **Exotic** (light blue) arrived in Chapter 2 Season 5 and is a *purchase*, not a prize. You buy Exotics from NPCs with gold bars — or occasionally from malfunctioning vending machines — and most share stats with their Legendary counterparts while adding one unique gimmick, like a scoped weapon that heals instead of damages. Exotics are reliable: same NPC, same gun, every match.
- **Mythic** (gold) is the *contested* tier. Usually one copy per match, usually guarded by a boss, always stronger or stranger than everything below it.

The strategic read: Exotics are a farming decision — earn bars, walk to the NPC, buy your gun with zero fight required. Mythics are a combat decision — someone has to die for you to get one. If your loadout plan depends on a specific power weapon, the Exotic route is the consistent one, and it deserves a line in your [loadout priority thinking](/blog/fortnite/fortnite-loadout-priority-guide). The mythic route is a gamble you should only take on purpose.

## The Infinity Blade rule

![The Infinity Blade, Fortnite's first mythic item — so overpowered it was vaulted three days after release and reshaped Epic's competitive item policy.](/images/blog/fortnite/fortnite-mythic-weapons-guide/infinity-blade.webp)

You can't understand mythics without the story of the first one. The Infinity Blade — yes, from Epic's own mobile game series — dropped into Battle Royale in update v7.01 on December 11th, 2018, planted in a pedestal at Polar Peak. Whoever pulled it got an absurd package: a 200 health and 200 shield pool, passive regeneration, 50 effective health per elimination, 30% faster movement, and swings that demolished structures. The cost: you dropped everything else you were carrying — no guns, no mats, just the sword.

It lasted three days. During the Winter Royale — a million-dollar tournament — pro player Psalm grabbed the Blade and ran his kill count from 4 to 12 in about two minutes, the clip went everywhere, and the community reaction was nuclear. Epic vaulted the sword on December 14th, 2018, making it one of the shortest-lived items in the game's history.

Call the lesson the Infinity Blade rule: **mythics are allowed to be unfair in pubs, but Epic will pull or tune anything that breaks competitive.** That precedent still shapes the game — it's why lobby-warping items get disabled in tournaments and why the competitive loot pool regularly diverges from casual. If you're grinding [Ranked or Cash Cups](/blog/fortnite/fortnite-ranked-guide), always check whether this season's mythics are even in your mode's loot pool before you build a gameplan around one.

## Should you contest the boss?

Here's the honest math on landing at the boss POI: you're signing up for the hardest opening in the game. You need to win the loot race off spawn, fight the boss's AI guards, burn through a boss with a huge effective health pool, and then immediately survive every player who heard the fight and knows exactly what the winner is carrying. Boss POIs are premier [third-party bait](/blog/fortnite/fortnite-third-party-guide) — the smartest players at that POI often aren't fighting the boss at all. They're waiting for you to finish.

So gate the decision on three things:

- **Your mode.** In pubs, contest freely — the downside is a requeue. In Ranked, an early death at a contested boss costs real progress, and the discipline play is usually an uncontested landing that sets up your mid-game. Our [landing spots guide](/blog/fortnite/best-fortnite-landing-spots) covers that trade in depth.
- **Your win condition off spawn.** If you can't reliably win a fast early fight against one human, you're not winning a boss POI against three. Sharpen close-quarters fundamentals first — [box fighting](/blog/fortnite/fortnite-box-fighting-guide) is the skill that decides these scrums.
- **The exit plan.** The players who profit most from boss fights decide *before landing* how they leave: which direction, with what mobility, at what health threshold they disengage. Winning the mythic and dying to the third party ten seconds later is the most common boss-POI story in Fortnite.

And once you hold the thing: in medallion seasons, remember you're marked. Standing still is how marked players die. Keep moving, and treat the map marker as a leash on how long you can loot in one spot.

## Playing against a mythic

The counter-side is underrated, because a mythic holder is not just a threat — they're a piñata. Everything they took drops when they die.

Use the information the game hands you. Boss eliminations and medallion markers tell you roughly where the mythic is and where it's going. A marked holder can't rotate quietly; you can shadow them, let another team engage first, and clean up. If you have to fight a mythic directly, deny it its lane: most boss mythics are spray weapons or long-range power tools, so force the fight into boxes and edits where raw stats matter less than mechanics, or simply don't peek the angle a mythic controls. And weigh the timing — a full-health holder fresh off looting a vault is a terrible fight, but the same player two fights later, chipped and marked, is free loot with a map marker on it.

The worst response is panic-peeking a better gun in the open. The gold rarity doesn't aim for them. Positioning and patience beat stats far more often than the kill feed suggests.

## Common mythic mistakes

- **Contesting the boss with no plan for players.** The boss is the easy part. Budget your health, ammo, and attention for the humans who arrive right after.
- **Hoarding medallions without respecting the marker.** Three medallions of passive buffs mean nothing if the whole lobby watches your dot loot a POI for four minutes.
- **Assuming the mythic beats fundamentals.** A gold gun in the hands of a player with bad crosshair placement is a donation. Aim, edits, and positioning still decide the fight.
- **Treating Exotics and mythics as the same plan.** One is a guaranteed purchase, the other is a lobby-wide brawl. Confusing them wrecks your early-game routing.
- **Carrying a mythic you don't actually use.** If the sniper mythic doesn't fit how you fight, it's an inventory slot of pure ego. Sell the flex, keep the slot.
- **Forgetting the mode.** Mythic and medallion availability differs between casual and competitive playlists and changes with patches. Check before you build a strategy on it.

## Quick Action Checklist

Turn the gold-gun economy into decisions you make on purpose:

- [ ] Learn where this season's bosses and vaults are **before** you queue, not while looting
- [ ] Contest boss POIs freely in pubs; in Ranked, default to **uncontested landings** unless you're confident off spawn
- [ ] Fight the boss **fast** — the longer it takes, the more third parties arrive for the finish
- [ ] Decide your **exit route** from the boss POI before you land
- [ ] In medallion seasons, treat the map marker as a timer: **keep moving** while marked
- [ ] Use markers and the kill feed to **track enemy mythic holders** and third-party them after their next fight
- [ ] Force mythic holders into **boxes and close fights** where stats matter less than mechanics
- [ ] Prefer **Exotics from NPCs** when you want a guaranteed power weapon without a brawl
- [ ] Drop any mythic that doesn't fit your playstyle — a flex item isn't worth an inventory slot`,
  faq: [
    {
      question: 'What are mythic weapons in Fortnite?',
      answer:
        "Mythic is Fortnite's gold rarity tier above Legendary, reserved for items that are unique or meaningfully stronger than their standard versions. Most mythics are boss weapons — named, upgraded versions of normal guns like Midas' Drum Gun that drop when you eliminate the boss carrying them — while others are one-off unique items, collaboration weapons from crossover events, or extra-rarity upgrades of regular weapons. Each named mythic usually exists only once per match, which makes them contested objectives as much as loot.",
    },
    {
      question: 'How do you get mythic weapons in Fortnite?',
      answer:
        'The main route is eliminating a boss: since Chapter 2 Season 2, most seasons place AI bosses at named locations, and each drops its mythic weapon when killed. In Chapter 5 and later seasons, bosses also drop medallions, which grant passive buffs and open the boss vault where more high-tier loot waits. Some seasons add other routes, like upgrading a weapon past Legendary or finding collaboration mythics in the world. Mythics also drop from eliminated players, so killing the current holder works just as well as killing the boss.',
    },
    {
      question: 'What is the difference between mythic and Exotic weapons in Fortnite?',
      answer:
        'Mythics are contested prizes; Exotics are purchases. Mythic weapons are usually one-per-match items taken from bosses or their holders, and they typically have stronger stats or unique abilities. Exotic weapons, introduced in Chapter 2 Season 5, are bought from NPC characters with gold bars — or occasionally from malfunctioning vending machines — and most share stats with their Legendary counterparts while adding one distinct trait. If you want a guaranteed power weapon every match, Exotics are the consistent route; mythics require winning a fight someone else also wants to win.',
    },
    {
      question: 'What was the first mythic weapon in Fortnite?',
      answer:
        "The Infinity Blade was the first mythic item in core Battle Royale, added in update v7.01 on December 11th, 2018 at Polar Peak (the Infinity Gauntlet appeared earlier but only in its own limited-time mode). The Blade gave its holder 200 health and 200 shield, passive regeneration, 50 effective health per elimination, and 30% faster movement, at the cost of dropping all other items. After pro player Psalm used it to dominate during the million-dollar Winter Royale, backlash led Epic to vault it on December 14th, 2018 — just three days after release.",
    },
    {
      question: 'Are mythic weapons in Fortnite Ranked and tournaments?',
      answer:
        'Sometimes, and it changes season to season. Epic tunes the competitive loot pool separately from casual, and items that warp lobbies too hard get disabled or adjusted for Ranked and tournaments — a policy that dates back to the Infinity Blade fiasco of 2018, when an overpowered mythic showed up in a million-dollar event and was vaulted three days later. Before building a Ranked strategy around a specific mythic or medallion, check the current season notes to confirm it is actually in your mode.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/fortnite', anchor: 'Fortnite coverage hub' },
    { href: '/blog/fortnite/fortnite-weapon-tier-list', anchor: 'Fortnite weapon tier list' },
    { href: '/blog/fortnite/fortnite-loadout-priority-guide', anchor: 'Fortnite loadout priority guide' },
    { href: '/blog/fortnite/fortnite-third-party-guide', anchor: 'Fortnite third-party guide' },
    { href: '/blog/fortnite/best-fortnite-landing-spots', anchor: 'Best Fortnite landing spots' },
    { href: '/blog/fortnite/fortnite-box-fighting-guide', anchor: 'Fortnite box fighting guide' },
  ],
  externalSources: [
    {
      url: 'https://fortnite.fandom.com/wiki/Mythic_Items',
      title: 'Fortnite Wiki — Mythic Items rarity and full item list',
    },
    {
      url: 'https://fortnite.fandom.com/wiki/Medallions',
      title: 'Fortnite Wiki — Medallions functionality and season history',
    },
    {
      url: 'https://www.epicgames.com/fortnite/en-US/news',
      title: 'Epic Games — official Fortnite news and patch notes',
    },
  ],
  tldr:
    "Mythic weapons are Fortnite's gold rarity — usually one copy per match, typically carried by an AI boss and dropped when the boss (or the current holder) is eliminated, which turns every mythic into a contested objective. Since Chapter 5, boss kills also drop medallions that grant passive buffs like shield regen and open vaults, but mark your location on the map. Exotics are the uncontested alternative: bought from NPCs with gold bars, same gun every match. Contest boss POIs only with a plan for the third parties — the boss is never the hard part.",
};
