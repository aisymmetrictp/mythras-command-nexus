import type { BlogPost } from '../../blogTypes';

export const botwDivineBeastsGuide: BlogPost = {
  slug: 'botw-divine-beasts-guide',
  game: 'zelda-breath-of-the-wild',
  category: 'game-guides',
  topicCluster: 'botw-guides',
  tags: ['divine-beasts', 'blight-ganon', 'champions', 'bosses', 'main-quest'],
  title: 'Breath of the Wild Divine Beasts Guide: Order, Bosses and Rewards',
  metaDescription:
    'A Breath of the Wild Divine Beasts guide: the best order to tackle Ruta, Rudania, Medoh and Naboris, how to beat every Blight Ganon, and what each reward does.',
  excerpt:
    'The four Divine Beasts are Breath of the Wild\'s closest thing to dungeons, and the order you clear them changes how hard the game feels. Here is the smart sequence, every Blight Ganon fight, and what the Champion abilities actually do.',
  featuredImagePrompt:
    'The four mechanical Divine Beasts of Breath of the Wild silhouetted over Hyrule at dusk — an elephant, a lizard, a bird, and a camel wreathed in Malice-purple light',
  heroImage: '/images/blog/zelda-breath-of-the-wild/botw-divine-beasts-guide/champions.webp',
  heroImageAlt:
    'Official artwork of the four Champions of Breath of the Wild — Mipha, Daruk, Revali, and Urbosa — standing together.',
  imageSources: [
    {
      src: '/images/blog/zelda-breath-of-the-wild/botw-divine-beasts-guide/champions.webp',
      sourceUrl: 'https://zelda.fandom.com/wiki/Champion',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/zelda-breath-of-the-wild/botw-divine-beasts-guide/vah-ruta.webp',
      sourceUrl: 'https://zelda.fandom.com/wiki/Divine_Beast_Vah_Ruta',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/zelda-breath-of-the-wild/botw-divine-beasts-guide/thunderblight-ganon.webp',
      sourceUrl: 'https://zelda.fandom.com/wiki/Thunderblight_Ganon',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/zelda-breath-of-the-wild/botw-divine-beasts-guide/urbosas-fury.webp',
      sourceUrl: 'https://zelda.fandom.com/wiki/Urbosa%27s_Fury',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-23T00:00:00.000Z',
  lastUpdated: '2026-07-23T00:00:00.000Z',
  primaryKeyword: 'breath of the wild divine beasts',
  secondaryKeywords: [
    'botw divine beasts order',
    'breath of the wild divine beast rewards',
    'how to beat thunderblight ganon',
    'botw champion abilities',
    'breath of the wild blight ganon guide',
    'best order divine beasts botw',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'the-divine-beasts-are-botws-dungeons-and-there-are-only-four', label: 'The Divine Beasts are BotW\'s dungeons, and there are only four', level: 2 },
    { id: 'the-best-order-to-do-them', label: 'The best order to do them', level: 2 },
    { id: 'vah-ruta-zoras-domain-waterblight-ganon', label: 'Vah Ruta — Zora\'s Domain — Waterblight Ganon', level: 3 },
    { id: 'vah-rudania-death-mountain-fireblight-ganon', label: 'Vah Rudania — Death Mountain — Fireblight Ganon', level: 3 },
    { id: 'vah-medoh-rito-village-windblight-ganon', label: 'Vah Medoh — Rito Village — Windblight Ganon', level: 3 },
    { id: 'vah-naboris-gerudo-desert-thunderblight-ganon', label: 'Vah Naboris — Gerudo Desert — Thunderblight Ganon', level: 3 },
    { id: 'the-champion-abilities-ranked-by-how-much-they-change-the-game', label: 'The Champion abilities, ranked by how much they change the game', level: 2 },
    { id: 'the-hidden-reward-nobody-mentions', label: 'The hidden reward nobody mentions', level: 2 },
    { id: 'upgrading-the-abilities-in-the-champions-ballad', label: 'Upgrading the abilities in the Champions\' Ballad', level: 2 },
    { id: 'common-mistakes', label: 'Common mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Breath of the Wild will let you sprint straight to Hyrule Castle the moment you step off the Great Plateau. You will almost certainly die, but the game genuinely does not stop you. The four Divine Beasts exist for everyone who wants to do it the other way — soften Calamity Ganon up first, collect four permanent abilities that reshape how you play, and turn the final boss from a wall into a formality.

They are the closest thing this open world has to dungeons, and there are exactly four of them. The order you tackle them in is not fixed, but it absolutely matters, because the bosses inside are not balanced against each other. Do them in the wrong sequence and you will run face-first into the hardest fight in the game with a wooden sword.

## The Divine Beasts are BotW's dungeons, and there are only four

Each Divine Beast is an ancient Sheikah war machine that Calamity Ganon corrupted a century ago and turned against Hyrule. Getting inside is a whole regional quest chain on its own — you help a town, board the machine, and only then does the "dungeon" proper begin.

The interior loop is identical across all four: you use the map on your Sheikah Slate to physically rotate, tilt, or move part of the Beast, which repositions the puzzles. You light up **five terminals** to seize control of the machine, then activate the main control unit, which is where the Blight Ganon boss ambushes you. Beat the Blight and you free the Champion's spirit, who hands you a permanent ability.

![The mechanical elephant Divine Beast Vah Ruta spraying water over the reservoir above Zora's Domain in Breath of the Wild.](/images/blog/zelda-breath-of-the-wild/botw-divine-beasts-guide/vah-ruta.webp)

Here is the whole roster at a glance:

| Divine Beast | Shape | Region | Champion | Boss | Reward |
| --- | --- | --- | --- | --- | --- |
| Vah Ruta | Elephant | Zora's Domain (Lanayru) | Mipha (Zora) | Waterblight Ganon | Mipha's Grace |
| Vah Rudania | Salamander | Death Mountain (Eldin) | Daruk (Goron) | Fireblight Ganon | Daruk's Protection |
| Vah Medoh | Eagle | Rito Village (Hebra/Tabantha) | Revali (Rito) | Windblight Ganon | Revali's Gale |
| Vah Naboris | Camel | Gerudo Desert | Urbosa (Gerudo) | Thunderblight Ganon | Urbosa's Fury |

That is the entire set. There is no fifth. If you have played Tears of the Kingdom's sprawling sage quests, four self-contained machines feels almost quaint — and honestly, it is the tighter design.

## The best order to do them

The game nudges you toward Zora's Domain first, and for once you should just follow the tutorial's lead — but the full smart order is about the boss difficulty spike, not the story.

My recommended sequence: **Ruta → Rudania → Medoh → Naboris.**

That is a genuine difficulty curve. Waterblight is a fair introduction, Fireblight teaches you to punish openings, Windblight rewards good bow play, and Thunderblight — the hardest boss of the four by a wide margin — comes last, once you actually have hearts, stamina, and a shield you can afford to break parrying. Saving Naboris for last also means you tackle the Gerudo questline, which is the longest and best of the four, when you are strongest.

### Vah Ruta — Zora's Domain — Waterblight Ganon

Prince Sidon meets you on the road and basically refuses to leave, which makes this the natural first Beast. The approach has you shooting Shock Arrows at Ruta's shoulders while riding on Sidon's back up a waterfall.

Inside, **Waterblight Ganon** is a soft opening. Phase one is a slow bruiser swinging a giant ice trident — sidestep into Flurry Rush and chip it down. Phase two is the part people forget: it floats up out of melee range and lobs ice blocks at you. Shatter the blocks with a well-placed arrow (or Cryonis), then use the updraft-free downtime to snipe its glowing eye in bullet time. It is the least punishing Blight and the right place to learn the rhythm.

### Vah Rudania — Death Mountain — Fireblight Ganon

Death Mountain will cook you alive without Flamebreaker armor or fireproof elixirs, so this Beast doubles as a gear check. You escort it down the mountain with Yunobo, a Goron cannonball with legs.

**Fireblight Ganon** is a lesson in patience. It wraps itself in a flame shield that makes it immune, so mashing does nothing. Wait for it to inhale for a big fireball attack — that is your window. Chuck a **remote bomb** into its open mouth, detonate, and it drops stunned for a free combo. Phase two speeds up and throws walls of fire, but the bomb trick still cracks it open every time.

### Vah Medoh — Rito Village — Windblight Ganon

Revali's Beast circles high above Rito Village behind a barrier of cannon fire. Teba the Rito warrior flies you in while you shoot the cannons off its wings — the one sequence in the game that feels like a rail shooter.

**Windblight Ganon** is all about verticality. It flies constantly and pelts you with wind-laser shots, and in phase two it spawns tornadoes. This is the fight that sells you on bows: the whole thing is stand-still-and-shoot-the-eye, ideally from bullet time. If you have already freed Revali, his Gale launches you straight up for the perfect elevated bow angle, which is a small, funny irony.

![The Thunderblight Ganon boss model from Breath of the Wild, a fast teleporting Blight wielding an electrified sword.](/images/blog/zelda-breath-of-the-wild/botw-divine-beasts-guide/thunderblight-ganon.webp)

### Vah Naboris — Gerudo Desert — Thunderblight Ganon

Naboris stomps across the desert wrapped in a lightning storm, and the run-up on horseback (well, sand seal) shooting its legs is a highlight. The whole Gerudo Town questline that gates it is the best writing in the game.

**Thunderblight Ganon** is why you saved this for last. It teleports around the arena at absurd speed, closes the gap instantly, and hits with a fast electric blade — miss the Flurry Rush timing and you eat a stunlock. The trick is that it telegraphs with a short flurry of teleport-dashes; guard or dodge the final strike, land your Flurry Rush, repeat. Phase two summons metal pillars to call down lightning — grab one with **Magnesis** and swing it into Thunderblight itself to stagger it, or just drop your metal gear and kite. It is a real skill check and the reason a fresh player should not do Naboris first.

## The Champion abilities, ranked by how much they change the game

The rewards are permanent and they stack. Ranked by raw usefulness:

1. **Mipha's Grace (Vah Ruta)** — Auto-revive. When you take fatal damage, Mipha's Grace brings you back with full hearts plus up to five temporary bonus hearts. It is a free Fairy that recharges over time, and it single-handedly makes the game more forgiving than any armor set.
2. **Urbosa's Fury (Vah Naboris)** — Hold the jump button to unleash a lightning strike that hits everything around you, staggers whole camps, and strips shields and weapons off enemies. Three charges. It trivializes crowds and it is the best "oh no" button in the game.
3. **Revali's Gale (Vah Medoh)** — Creates a vertical updraft that launches you skyward for a paraglide. Three charges. It is the traversal and combat-positioning ability, and once you have it, climbing feels optional.
4. **Daruk's Protection (Vah Rudania)** — An automatic shield that blocks any three attacks — including Guardian lasers and environmental damage — before it needs to recharge. Brilliant against Guardians specifically, a little passive elsewhere.

None of them is bad. Mipha's Grace at the top is not close, though — a free full revive removes the entire failure state of exploring.

![Link unleashing Urbosa's Fury in Breath of the Wild, a ring of lightning erupting outward from his sword.](/images/blog/zelda-breath-of-the-wild/botw-divine-beasts-guide/urbosas-fury.webp)

## The hidden reward nobody mentions

Here is the mechanical payoff most guides bury: **every Divine Beast you free fires its main cannon at Calamity Ganon at the start of the final fight, and each blast removes a chunk of his health.** Free all four and Ganon starts the battle with roughly half his health bar already gone. Do zero Beasts and you fight him at full strength.

That is the real argument for clearing them. The Champion abilities make *you* stronger; freeing the Beasts makes the *final boss* weaker. It is the difference between a grueling endgame and a victory lap. If you are speed-focused you can skip them, but you are choosing a much harder Ganon to save a few hours.

## Upgrading the abilities in the Champions' Ballad

If you own the Expansion Pass, finishing **The Champions' Ballad** DLC questline upgrades all four abilities to their "+" versions. Mipha's Grace recharges faster, Daruk's Protection can be triggered manually with a guard input, Revali's Gale recharges faster, and Urbosa's Fury charges faster. The Ballad also unlocks the **Master Cycle Zero**, a rideable motorcycle, as the final reward. You need all four base Divine Beasts done before the Ballad will even start, so it is the natural capstone to this whole checklist.

For the gear and cooking prep that makes the regional approaches survivable, our [Breath of the Wild armor guide](/blog/zelda-breath-of-the-wild/botw-best-armor-guide) and [Breath of the Wild cooking guide](/blog/zelda-breath-of-the-wild/botw-cooking-guide) cover Flamebreaker sets and fireproof elixirs for the Death Mountain run specifically.

## Common mistakes

- **Doing Naboris first because the camel looks cool.** Thunderblight will end you. Build up to it.
- **Mashing on Fireblight Ganon.** The flame shield makes it immune. Bomb the open mouth or do nothing.
- **Forgetting the ice-block phase of Waterblight.** It goes airborne and out of sword range — shoot the blocks, then the eye.
- **Skipping the abilities to rush Ganon.** You are throwing away a free half-health head start on the final boss.
- **Not prepping for the region, not the Beast.** Death Mountain and the Gerudo Desert kill you with heat and cold long before the boss does. Pack armor and elixirs.

For the parry and Flurry Rush timing every Blight fight leans on, the [Breath of the Wild combat tips](/blog/zelda-breath-of-the-wild/botw-combat-tips) breakdown is the prerequisite. Newer players should start with the [Breath of the Wild beginner's guide](/blog/zelda-breath-of-the-wild/botw-beginner-guide), and the rest of our Hyrule coverage lives on the [Breath of the Wild hub](/blog/zelda-breath-of-the-wild) and the wider [Mythras blog](/blog).

## Quick Action Checklist

- Do the Beasts in the order Ruta → Rudania → Medoh → Naboris — that is the real difficulty curve.
- Each Beast is a five-terminal puzzle that ends in a Blight Ganon boss and a permanent Champion ability.
- Waterblight: Flurry Rush phase one, shoot ice blocks then the eye in phase two.
- Fireblight: bomb the open mouth when it inhales — the flame shield blocks everything else.
- Windblight: bullet-time bow the eye; it is a flying, shooting fight.
- Thunderblight: hardest of the four — Flurry Rush the teleport-dash, Magnesis a metal pillar into it in phase two.
- Mipha's Grace is the best reward (free full revive); Urbosa's Fury is the best combat button.
- Freeing all four Beasts cuts Calamity Ganon's starting health roughly in half — that is the point.
- All four done unlocks the Champions' Ballad DLC, which upgrades every ability and grants the Master Cycle Zero.
`,
  faq: [
    {
      question: 'What order should I do the Divine Beasts in Breath of the Wild?',
      answer:
        'Vah Ruta, then Vah Rudania, then Vah Medoh, then Vah Naboris. The game points you to Zora\'s Domain and Vah Ruta first, and that also happens to be the correct difficulty order, because the bosses are not balanced against each other. Waterblight Ganon is the gentlest and Thunderblight Ganon inside Naboris is by far the hardest, so you want to be at full strength before the desert.',
    },
    {
      question: 'How many Divine Beasts are there in Breath of the Wild?',
      answer:
        'Four: Vah Ruta (elephant, Zora\'s Domain), Vah Rudania (salamander, Death Mountain), Vah Medoh (eagle, Rito Village), and Vah Naboris (camel, Gerudo Desert). Each is a corrupted Sheikah war machine tied to one of the four Champions, and there is no fifth Divine Beast in the game.',
    },
    {
      question: 'What do you get for completing a Divine Beast?',
      answer:
        'A permanent Champion ability. Vah Ruta gives Mipha\'s Grace (an automatic full revive with bonus hearts), Vah Rudania gives Daruk\'s Protection (a shield that blocks three hits), Vah Medoh gives Revali\'s Gale (an updraft that launches you skyward), and Vah Naboris gives Urbosa\'s Fury (an area lightning strike). The abilities are permanent and recharge over time.',
    },
    {
      question: 'How do I beat Thunderblight Ganon?',
      answer:
        'Thunderblight Ganon is the hardest Blight. In phase one it teleport-dashes at you in a short flurry before its main strike — guard or dodge that final hit to trigger Flurry Rush, then combo. In phase two it summons metal pillars to call down lightning; use Magnesis to grab a pillar and swing it into Thunderblight to stagger it, or remove all your metal gear and kite until you get openings. It is a genuine skill check, which is why you should save Vah Naboris for last.',
    },
    {
      question: 'Do the Divine Beasts make Calamity Ganon easier?',
      answer:
        'Yes, significantly. Every Divine Beast you free fires its main cannon at Calamity Ganon at the start of the final battle, removing a portion of his health. Free all four and Ganon begins the fight with roughly half his health bar already gone. Skip them entirely and you fight him at full strength, which is the main mechanical reason to clear the Beasts before heading to Hyrule Castle.',
    },
    {
      question: 'Which Champion ability is the best?',
      answer:
        'Mipha\'s Grace from Vah Ruta is the most impactful, because it automatically revives you with full health plus bonus temporary hearts when you would otherwise die, then recharges on its own. Urbosa\'s Fury is the strongest offensive ability for clearing enemy camps, Revali\'s Gale is the best for traversal and combat positioning, and Daruk\'s Protection is excellent specifically against Guardians.',
    },
    {
      question: 'Can I skip the Divine Beasts entirely?',
      answer:
        'Yes. Breath of the Wild lets you go straight to Hyrule Castle and fight Calamity Ganon from the moment you leave the Great Plateau, with no Divine Beasts required. Doing so means fighting Ganon at full health without any Champion abilities, so it is a much harder run reserved for challenge and speed play rather than a first playthrough.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/zelda-breath-of-the-wild', anchor: 'Breath of the Wild hub' },
    { href: '/blog/zelda-breath-of-the-wild/botw-beginner-guide', anchor: "Breath of the Wild beginner's guide" },
    { href: '/blog/zelda-breath-of-the-wild/botw-combat-tips', anchor: 'Breath of the Wild combat tips' },
    { href: '/blog/zelda-breath-of-the-wild/botw-cooking-guide', anchor: 'Breath of the Wild cooking guide' },
    { href: '/blog/zelda-breath-of-the-wild/botw-best-armor-guide', anchor: 'Breath of the Wild armor guide' },
  ],
  externalSources: [
    {
      url: 'https://zelda.fandom.com/wiki/Divine_Beast',
      title: 'Zelda Wiki — Divine Beasts, Champions, and interiors',
    },
    {
      url: 'https://zelda.fandom.com/wiki/Blight_Ganon',
      title: 'Zelda Wiki — the four Blight Ganon bosses and their attacks',
    },
    {
      url: 'https://zelda.fandom.com/wiki/Champion',
      title: 'Zelda Wiki — Champion abilities and rewards',
    },
    {
      url: 'https://zelda.fandom.com/wiki/The_Champions%27_Ballad',
      title: "Zelda Wiki — The Champions' Ballad DLC upgrades and Master Cycle Zero",
    },
  ],
  tldr:
    'Breath of the Wild has exactly four Divine Beasts — Vah Ruta (Zora, Waterblight Ganon), Vah Rudania (Goron, Fireblight Ganon), Vah Medoh (Rito, Windblight Ganon), and Vah Naboris (Gerudo, Thunderblight Ganon). Do them in that order, because it doubles as the difficulty curve: Waterblight is a soft intro and Thunderblight is the hardest boss in the game. Each clear grants a permanent ability — Mipha\'s Grace (free auto-revive) is the best, Urbosa\'s Fury is the best combat button, Revali\'s Gale is the best for traversal, Daruk\'s Protection shines against Guardians. Freeing all four also fires their cannons at Calamity Ganon, cutting his starting health roughly in half, and unlocks the Champions\' Ballad DLC.',
};
