import type { BlogPost } from '../../blogTypes';

export const eldenRingBossOrderGuide: BlogPost = {
  slug: 'elden-ring-boss-order-guide',
  game: 'elden-ring',
  category: 'game-guides',
  topicCluster: 'elden-ring-progression',
  tags: ['boss-order', 'progression', 'walkthrough', 'critical-path', 'level-guide'],
  title: 'Elden Ring Boss Order: The Critical Path Ranked by Level',
  metaDescription:
    'The full Elden Ring boss order for the critical path, which shardbearers are actually required, and the level you want to be for every main fight.',
  excerpt:
    'Elden Ring is open-world, but its ending runs through a fixed spine of required bosses. Here is that spine in order, which of the big fights you can skip, and the level you actually want before each wall.',
  featuredImagePrompt:
    'A lone Tarnished on horseback silhouetted against a golden sky facing a distant boss fog gate, cinematic wide shot, dark fantasy',
  heroImage: '/images/blog/elden-ring/elden-ring-boss-order-guide/margit.webp',
  heroImageAlt:
    'Margit, the Fell Omen, the first major boss in Elden Ring, guarding the gate to Stormveil Castle.',
  imageSources: [
    {
      src: '/images/blog/elden-ring/elden-ring-boss-order-guide/margit.webp',
      sourceUrl: 'https://eldenring.fandom.com/wiki/File:ER_Margit_Boss.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/elden-ring/elden-ring-boss-order-guide/godrick.webp',
      sourceUrl: 'https://eldenring.fandom.com/wiki/File:ER_Godrick_the_Grafted.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/elden-ring/elden-ring-boss-order-guide/radahn.webp',
      sourceUrl: 'https://eldenring.fandom.com/wiki/File:ER_Starscourge_Radahn.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/elden-ring/elden-ring-boss-order-guide/malenia.webp',
      sourceUrl: 'https://eldenring.fandom.com/wiki/File:ER_Malenia_Goddess_of_Rot.png',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-21T00:00:00.000Z',
  lastUpdated: '2026-07-21T00:00:00.000Z',
  primaryKeyword: 'elden ring boss order',
  secondaryKeywords: [
    'elden ring boss order guide',
    'elden ring required bosses',
    'elden ring main boss order',
    'elden ring recommended level for bosses',
    'elden ring critical path',
    'elden ring shardbearers order',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'there-is-no-fixed-boss-order-in-elden-ring', label: 'There is no fixed boss order in Elden Ring', level: 2 },
    { id: 'the-required-bosses-from-start-to-finish', label: 'The required bosses from start to finish', level: 2 },
    { id: 'the-two-great-runes-that-unlock-the-capital', label: 'The two Great Runes that unlock the capital', level: 3 },
    { id: 'the-recommended-boss-order-level-by-level', label: 'The recommended boss order, level by level', level: 2 },
    { id: 'margit-and-godrick', label: 'Margit and Godrick', level: 3 },
    { id: 'rennala-and-starscourge-radahn', label: 'Rennala and Starscourge Radahn', level: 3 },
    { id: 'morgott-and-the-road-to-leyndell', label: 'Morgott and the road to Leyndell', level: 3 },
    { id: 'fire-giant-and-the-point-of-no-return', label: 'Fire Giant and the point of no return', level: 3 },
    { id: 'godfrey-radagon-and-the-elden-beast', label: 'Godfrey, Radagon and the Elden Beast', level: 3 },
    { id: 'optional-bosses-worth-the-detour', label: 'Optional bosses worth the detour', level: 2 },
    { id: 'where-malenia-and-the-hardest-fights-belong', label: 'Where Malenia and the hardest fights belong', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Elden Ring drops you into a map the size of a small country and says "go be Elden Lord." That freedom is the whole pitch, and it is also the thing that quietly wrecks first playthroughs — because while you can go almost anywhere, the ending only exists at the end of one specific chain of bosses, and the game never once draws that chain on your map.

So here is the chain. Every required fight, in order, with the level you actually want before each one. Not the "you technically can do it at level 1 if you are a YouTuber" number — the level where the fight is a fight and not a wall.

## There is no fixed boss order in Elden Ring

The important thing to understand up front: Elden Ring has a *critical path*, not a *linear order*. There is a set of bosses you must kill to reach Radagon and the Elden Beast, and there is a much larger set of bosses you can fight in almost any sequence, skip entirely, or stumble into forty hours early and get flattened.

The required spine is short. Depending on how you count the back-to-back final fight, it is roughly nine bosses. Everything else — every catacomb, every evergaol, every field boss with a health bar the size of a bus — is optional. Rune fuel and gear, not progression.

This is why two people can both "finish Elden Ring" having fought completely different bosses. One killed Rykard and Mohg and Malenia; the other never set foot in Volcano Manor. Both saw the credits. If this is your first run and you are still learning where anything is, the [early game route guide](/blog/elden-ring/elden-ring-early-game-route) covers how to get Torrent, your first upgrade materials, and a fighting chance before any of this starts.

## The required bosses from start to finish

Here is the actual critical path, in the order the game funnels you through it:

1. **Margit, the Fell Omen** — the gate to Stormveil Castle.
2. **Godrick the Grafted** — end of Stormveil, your first Great Rune.
3. A **second shardbearer** for your second Great Rune (Rennala or Starscourge Radahn are the standard picks).
4. **Morgott, the Omen King** — end of Leyndell, the Royal Capital.
5. **Fire Giant** — Mountaintops of the Giants, guarding the Forge.
6. **Maliketh, the Black Blade** — Crumbling Farum Azula.
7. **Sir Gideon Ofnir, the All-Knowing** — back in the Ashen Capital.
8. **Godfrey, First Elden Lord / Hoarah Loux** — the Erdtree throne.
9. **Radagon of the Golden Order** into the **Elden Beast** — one fog wall, two health bars, no rest in between.

That is the entire mandatory list. Nine names between the tutorial and the credits.

### The two Great Runes that unlock the capital

The one piece of hidden gating that trips people up: **Leyndell's front gate stays sealed until you hold two Great Runes.** Godrick's is the first, and it is unavoidable — you have to clear Stormveil to progress. The second is your choice.

Most players take Rennala, Queen of the Full Moon at the Academy of Raya Lucaria, because she is directly north and comparatively gentle. The other common pick is Starscourge Radahn out in Caelid, whose death causes a star to fall and open Nokron — a required stop if you ever want to run Ranni's questline for the Age of the Stars ending. Either one satisfies the gate. You do not need both to reach Morgott; you only need two runes total, and Godrick plus one gets you there.

![Godrick the Grafted, the first shardbearer and first Great Rune boss at the end of Stormveil Castle.](/images/blog/elden-ring/elden-ring-boss-order-guide/godrick.webp)

## The recommended boss order, level by level

Levels below are ballparks for a blind-to-semi-blind run with weapons upgraded on pace. Fextralife's own "recommended level by location" table lines up closely with these, and they are matchmaking ranges more than hard requirements — a good player beats every one of them underleveled. But if you are getting two-shot, the answer is almost always Vigor, and it is almost always cheaper than you think.

| Boss | Area | Recommended level | Weapon upgrade |
| --- | --- | --- | --- |
| Margit | Stormveil gate | 20-30 | +3 (+1 somber) |
| Godrick | Stormveil Castle | 30-40 | +3-4 (+2) |
| Rennala | Raya Lucaria | 50-60 | +6 (+3) |
| Radahn | Caelid | 60-70 | +12 (+5) |
| Morgott | Leyndell | 90-100 | +18 (+7) |
| Fire Giant | Mountaintops | 100-120 | +22 (+8) |
| Maliketh | Farum Azula | 120-150 | +24 (+9) |
| Radagon / Elden Beast | Erdtree | 120-150 | +25 (+10) |

### Margit and Godrick

Margit is the game's real tutorial boss, and he is designed to lose to you the first time. If you are struggling at level 15 with a +0 weapon, that is the intended experience — go do Limgrave, come back at 20 to 30 with a weapon at +3 and a couple of Golden Seeds, and the fight flips. Grab the Margit's Shackle item from Patches' cave beforehand; it staggers him twice per phase and it is basically a cheat code.

Godrick caps Stormveil and gives you your first Great Rune. He hits hard but telegraphs everything, and the summon sign for Nepheli Loux sits right outside his fog wall — use it. This whole stretch lives or dies on survivability, which is why I keep telling new players the [starting class barely matters next to your Vigor stat](/blog/elden-ring/best-elden-ring-starting-class). Thirty Vigor before Godrick is worth more than any weapon choice.

### Rennala and Starscourge Radahn

Rennala is the softest required boss in the game. Her first phase is a puzzle — break the students holding her, three times — and her second phase is a sorcery duel she loses to sustained aggression. She is also who you visit later to respec, so you will see her twice.

Radahn is the difficulty spike nobody warns you about. He is optional for the second rune, but the Radahn Festival is the emotional centerpiece of the early game and the fight is a genuine wall — a mounted, gravity-warping artillery boss with a giant arena and a full roster of NPC summons you should absolutely spam. Come in around 60 to 70 with your weapon pushed as far as your materials allow, because his second-phase meteor is one of the hardest-hitting attacks you have seen to this point.

![Starscourge Radahn, the optional shardbearer whose defeat opens the path to Nokron.](/images/blog/elden-ring/elden-ring-boss-order-guide/radahn.webp)

### Morgott and the road to Leyndell

Between Radahn and Morgott there is a real gap — this is where the game expects you to explore Altus Plateau, the Capital outskirts, and probably a legacy dungeon or two. The jump from "level 60 zone" to "level 90 zone" is the single biggest difficulty cliff in the campaign, and it is where under-leveled runs fall apart.

Getting to Altus takes either the two halves of the Dectus Medallion for the Grand Lift, or the hidden path up the Ruin-Strewn Precipice past a Magma Wyrm. At Leyndell's gate you fight the Draconic Tree Sentinel, then a spectral Godfrey, then Morgott himself. Morgott is a masterclass boss — fast, aggressive, punishes greed — and he is where undercooked damage becomes obvious. If his health bar is barely moving, that is a scaling problem, and [understanding how weapon scaling actually turns your stats into damage](/blog/elden-ring/elden-ring-weapon-scaling-explained) is more useful here than another five character levels.

### Fire Giant and the point of no return

After Morgott you climb through the Forbidden Lands to the Mountaintops of the Giants and the Fire Giant — a huge, two-phase endurance test with a nasty roll-catching moveset. Beat him and you reach the Forge of the Giants, where you can burn the Erdtree.

**This is the game's soft point of no return.** Lighting the Erdtree transports you to Crumbling Farum Azula and you cannot freely return to the old world the same way afterward. So before you light it, clean up: finish any NPC questlines, run the optional bosses you care about, and stock up. Once you are in Farum Azula you fight past the Godskin Duo and reach Maliketh, the Black Blade — a berserk, wall-climbing speed check and the last real skill gate before the finale.

### Godfrey, Radagon and the Elden Beast

Maliketh's death turns Leyndell into the Ashen Capital, so you fast-travel back. There you clear Sir Gideon Ofnir (an easy fight — he knows all your weaknesses and has none of the damage to use them), then Godfrey, First Elden Lord, who drops his weapons mid-fight and becomes Hoarah Loux for a brutal wrestling second phase.

Then the finale: Radagon of the Golden Order and, immediately after, the Elden Beast. One fog gate, two completely different fights, no checkpoint between them. Radagon is a fast melee duel; the Elden Beast is a sprawling cosmic whale that loves to run away from you. Bring a weapon that scales into the ground on the Beast and a lot of patience. Land the last hit and you are Elden Lord.

## Optional bosses worth the detour

None of these are required, but a few pay for themselves:

- **Leonine Misbegotten** (Castle Morne) — early, and the Weathervane Stormhawk / Grafted Blade Greatsword nearby are strong early payoffs.
- **Rykard, Lord of Blasphemy** (Volcano Manor) — a shardbearer with a gimmick weapon (the Serpent-Hunter) that makes the fight trivial and lets you skip most of the arena.
- **Astel, Naturalborn of the Void** — sits at the end of Ranni's questline and gates the Age of the Stars ending.
- **Mohg, Lord of Blood** (Mohgwyn Palace) — a shardbearer, and the mandatory entry point to the Shadow of the Erdtree DLC.
- **Regal Ancestor Spirit** and **Dragonlord Placidusax** — pure optional spectacle with excellent rewards.

If you are hunting the DLC, note that Mohg is the door. You cannot reach the Land of Shadow without beating him and Radahn first.

## Where Malenia and the hardest fights belong

**Malenia, Blade of Miquella** is the hardest fight in the base game and she is entirely optional. She sits at the bottom of the Haligtree, itself gated behind two secret medallion halves, and she will end runs that steamrolled everything else. Her Waterfowl Dance is the most infamous attack in the game, her every hit heals her, and phase two adds Scarlet Rot to the pile.

Do not treat Malenia as part of your progression. Treat her as the exam. Most players who beat her do it at level 120 to 150 with a fully upgraded weapon and a build they actually understand — and plenty come back for her after the credits. If you can take Malenia down, the main campaign was never going to stop you.

![Malenia, Goddess of Rot, the optional superboss and the toughest fight in Elden Ring's base game.](/images/blog/elden-ring/elden-ring-boss-order-guide/malenia.webp)

The same logic applies to every optional wall: Placidusax, Astel, the Godskin duo out in the wild. They are checks on your build, not steps on your path. If one is destroying you, it is telling you to go finish the required chain, come back stronger, and settle the score on your terms.

## Quick Action Checklist

- The required order is **Margit, Godrick, a second shardbearer, Morgott, Fire Giant, Maliketh, Gideon, Godfrey, then Radagon into the Elden Beast** — nine fights, everything else optional.
- You need **two Great Runes to enter Leyndell.** Godrick gives the first; take Rennala or Radahn for the second.
- **Lighting the Erdtree after the Fire Giant is your point of no return** — finish quests and optional bosses first.
- Aim for roughly **level 30-40 at Godrick, 60-70 at Radahn, 90-100 at Morgott, and 120+ at Maliketh onward.**
- If a required boss is a wall, the fix is almost always **more Vigor and a higher weapon upgrade,** not more character levels — check [how scaling converts your stats into real damage](/blog/elden-ring/elden-ring-weapon-scaling-explained) before you grind.
- **Malenia is the exam, not the path.** Save her, Placidusax, and Astel for when the main chain is done.
`,
  faq: [
    {
      question: 'What is the correct boss order in Elden Ring?',
      answer:
        'The required critical path is Margit, then Godrick the Grafted, then a second shardbearer (usually Rennala or Starscourge Radahn) for your second Great Rune, then Morgott the Omen King, the Fire Giant, Maliketh the Black Blade, Sir Gideon Ofnir, Godfrey/Hoarah Loux, and finally Radagon of the Golden Order into the Elden Beast. Every other boss in the game is optional.',
    },
    {
      question: 'Which Elden Ring bosses are actually required?',
      answer:
        'Only nine: Margit, Godrick, one additional shardbearer, Morgott, Fire Giant, Maliketh, Gideon Ofnir, Godfrey, and the back-to-back Radagon and Elden Beast finale. Big-name fights like Rykard, Mohg, Astel, and Malenia are all optional and can be skipped entirely on a straight run to the ending.',
    },
    {
      question: 'How many Great Runes do you need to reach Leyndell?',
      answer:
        'Two. Leyndell, the Royal Capital stays sealed until you possess two Great Runes. Defeating Godrick gives you the first, and any second shardbearer — most commonly Rennala or Radahn — gives you the second. You do not need to activate the runes at a Divine Tower to open the gate; simply holding two is enough.',
    },
    {
      question: 'What level should I be for each Elden Ring boss?',
      answer:
        'Rough targets for a blind run: level 20-30 for Margit, 30-40 for Godrick, 50-60 for Rennala, 60-70 for Radahn, 90-100 for Morgott, 100-120 for the Fire Giant, and 120-150 for Maliketh through the Elden Beast. Weapon upgrade level matters as much as character level — keep your main weapon on pace.',
    },
    {
      question: 'Is Starscourge Radahn required in Elden Ring?',
      answer:
        'Not strictly. Radahn is one option for your second Great Rune, but you can substitute Rennala instead. However, killing Radahn is what makes the star fall and opens Nokron, which you need for Ranni\'s questline and the Age of the Stars ending, and beating him is also required to access the Shadow of the Erdtree DLC.',
    },
    {
      question: 'When is the point of no return in Elden Ring?',
      answer:
        'Burning the Erdtree at the Forge of the Giants, which you reach after beating the Fire Giant, transports you to Crumbling Farum Azula and you cannot freely return to the old world afterward. Finish any NPC questlines and optional bosses you care about before lighting the flame.',
    },
    {
      question: 'Do I have to beat Malenia to finish Elden Ring?',
      answer:
        'No. Malenia, Blade of Miquella is entirely optional and tucked away at the bottom of the Haligtree behind two secret medallion halves. She is the hardest fight in the base game and exists as a challenge, not a progression step. Plenty of players finish the game without ever meeting her.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/elden-ring', anchor: 'Elden Ring coverage hub' },
    { href: '/blog/elden-ring/elden-ring-early-game-route', anchor: 'Elden Ring early game route' },
    { href: '/blog/elden-ring/best-elden-ring-starting-class', anchor: 'Best Elden Ring starting class' },
    { href: '/blog/elden-ring/elden-ring-weapon-scaling-explained', anchor: 'Elden Ring weapon scaling explained' },
  ],
  externalSources: [
    {
      url: 'https://eldenring.fandom.com/wiki/Bosses',
      title: 'Bosses — Elden Ring Wiki',
    },
    {
      url: 'https://eldenring.wiki.fextralife.com/Recommended+Level+by+Location',
      title: 'Recommended Level by Location — Elden Ring Wiki (Fextralife)',
    },
    {
      url: 'https://eldenring.fandom.com/wiki/Walkthrough',
      title: 'Walkthrough — Elden Ring Wiki',
    },
  ],
  tldr:
    'Elden Ring has no fixed boss order, only a critical path: Margit, Godrick, a second shardbearer, Morgott, Fire Giant, Maliketh, Gideon, Godfrey, then Radagon and the Elden Beast. Everything else, including Malenia, is optional. You need two Great Runes to enter Leyndell, and burning the Erdtree after the Fire Giant is your point of no return.',
  itemList: {
    name: 'Elden Ring Required Boss Order',
    items: [
      { name: 'Margit, the Fell Omen', description: 'The Stormveil gatekeeper and the game\'s real tutorial boss. Recommended level 20-30.' },
      { name: 'Godrick the Grafted', description: 'End of Stormveil Castle and your first Great Rune. Recommended level 30-40.' },
      { name: 'Second shardbearer (Rennala or Radahn)', description: 'Provides your second Great Rune to unlock Leyndell. Rennala is the gentlest option.' },
      { name: 'Morgott, the Omen King', description: 'Guards the Erdtree at the end of Leyndell. Recommended level 90-100.' },
      { name: 'Fire Giant', description: 'Blocks the Forge in the Mountaintops. Beating him unlocks the point of no return. Level 100-120.' },
      { name: 'Maliketh, the Black Blade', description: 'The last major skill check, in Crumbling Farum Azula. Recommended level 120-150.' },
      { name: 'Godfrey, First Elden Lord', description: 'Becomes Hoarah Loux in phase two at the Erdtree throne, after Gideon Ofnir.' },
      { name: 'Radagon and the Elden Beast', description: 'The two-part final boss behind a single fog gate. No checkpoint between phases.' },
    ],
  },
};
