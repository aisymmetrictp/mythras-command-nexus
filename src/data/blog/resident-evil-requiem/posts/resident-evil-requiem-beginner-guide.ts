import type { BlogPost } from '../../blogTypes';

export const residentEvilRequiemBeginnerGuide: BlogPost = {
  slug: 'resident-evil-requiem-beginner-guide',
  game: 'resident-evil-requiem',
  category: 'beginner-guides',
  topicCluster: 're-requiem-guides',
  tags: ['beginner', 'grace-ashcroft', 'leon-kennedy', 'survival-horror', 'difficulty'],

  title: 'Resident Evil Requiem Beginner Guide: Your First Five Hours',
  metaDescription:
    'A spoiler-light Resident Evil Requiem beginner guide: difficulty choice, Grace vs Leon, the Blood Collector economy, Blister Heads, and camera settings.',
  excerpt:
    'Requiem is two games wearing one trench coat, and the settings you pick in the first ten minutes shape both of them. Here is what actually matters before you start.',
  featuredImagePrompt:
    'Grace Ashcroft aiming a handgun down a dim corridor in first-person view, harsh flashlight cone, peeling hospital walls',

  heroImage: '/images/blog/resident-evil-requiem/resident-evil-requiem-beginner-guide/grace-handgun-hero.webp',
  heroImageAlt:
    'Grace Ashcroft aiming her handgun in first-person view in Resident Evil Requiem',
  imageSources: [
    {
      src: '/images/blog/resident-evil-requiem/resident-evil-requiem-beginner-guide/grace-handgun-hero.webp',
      sourceUrl: 'https://residentevil.fandom.com/wiki/File:Resident_Evil_9_Creators_Message_-1_-_Grace_with_Gun.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/resident-evil-requiem/resident-evil-requiem-beginner-guide/grace-inventory.webp',
      sourceUrl: 'https://residentevil.fandom.com/wiki/File:RE9_Inventory.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/resident-evil-requiem/resident-evil-requiem-beginner-guide/rhodes-hill.webp',
      sourceUrl: 'https://residentevil.fandom.com/wiki/File:RE9_Rhodes_Hill_2.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/resident-evil-requiem/resident-evil-requiem-beginner-guide/leon-grace-split.webp',
      sourceUrl: 'https://residentevil.fandom.com/wiki/File:LeonAndGraceSplit.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/resident-evil-requiem/resident-evil-requiem-beginner-guide/blood-collector.webp',
      sourceUrl: 'https://residentevil.fandom.com/wiki/File:Requiem_Items_-_Blood_Collector.png',
      license: 'Fandom CC-BY-SA',
    },
  ],

  publishDate: '2026-07-20T00:00:00.000Z',
  lastUpdated: '2026-07-20T00:00:00.000Z',

  primaryKeyword: 'Resident Evil Requiem beginner guide',
  secondaryKeywords: [
    'Resident Evil Requiem difficulty',
    'Resident Evil Requiem Blood Collector',
    'Grace Ashcroft gameplay',
    'Resident Evil Requiem first person',
    'Resident Evil Requiem Blister Heads',
    'Resident Evil Requiem tips',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'monthly',
  evergreen: true,
  readingTimeMin: 11,

  toc: [
    { id: 'pick-your-difficulty-before-anything-else', label: 'Pick Your Difficulty Before Anything Else', level: 2 },
    { id: 'two-protagonists-two-completely-different-games', label: 'Two Protagonists, Two Completely Different Games', level: 2 },
    { id: 'grace-survival-horror-with-almost-no-firepower', label: 'Grace: Survival Horror With Almost No Firepower', level: 3 },
    { id: 'leon-the-re4-half', label: 'Leon: The RE4 Half', level: 3 },
    { id: 'first-person-or-third-person', label: 'First Person or Third Person', level: 2 },
    { id: 'the-blood-collector-is-your-real-economy', label: 'The Blood Collector Is Your Real Economy', level: 2 },
    { id: 'blister-heads-punish-lazy-kills', label: 'Blister Heads Punish Lazy Kills', level: 2 },
    { id: 'inventory-rules-that-actually-matter', label: 'Inventory Rules That Actually Matter', level: 2 },
    { id: 'the-four-places-you-will-spend-the-game', label: 'The Four Places You Will Spend the Game', level: 2 },
    { id: 'beginner-mistakes-that-cost-you-resources', label: 'Beginner Mistakes That Cost You Resources', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Ten minutes into Rhodes Hill Chronic Care Center, Requiem takes your handgun seriously in a way no Resident Evil has since the RE2 remake. Grace Ashcroft has two permanent firearms for the entire campaign. Two. Meanwhile Leon S. Kennedy gets shotguns, SMGs, rifles, grenades, and a hatchet he can resharpen forever.

That gap is the whole design. Requiem is not one survival horror game with an action section bolted on — it is two deliberately opposed games that trade off across the runtime, and the settings you commit to in the opening menu change how both of them feel. Here is what a first-time player needs to understand before the first zombie stands up.

## Pick Your Difficulty Before Anything Else

Requiem ships with four difficulties, and two of them are called "Standard," which is a genuinely confusing bit of naming.

- **Casual** — auto-aim assistance, heavily reduced enemy threat, frequent autosaves, no ink ribbons.
- **Standard (Modern)** — the balanced default. Regular autosaves, free saving at typewriters.
- **Standard (Classic)** — same combat tuning as Modern, but Grace needs an **Ink Ribbon** to save at a typewriter, and autosaves are far less frequent.
- **Insanity** — locked until you finish the game and defeat every boss. Maximum resource scarcity, maximum enemy damage, ink ribbons included.

The important thing: Modern and Classic are not a difficulty ladder. They are a *save system* choice. If you want the classic Resident Evil tension where walking past a typewriter is a decision, pick Classic. If you would rather not lose twenty minutes to a bad grab, pick Modern. You are not making the enemies weaker either way.

One mercy in Classic: Grace eventually learns a recipe to craft ink ribbons from an **Ink Ribbon Tin** plus infected blood, so you are not strictly capped at what the level design hands you.

![Rhodes Hill Chronic Care Center rendered in the RE Engine, showing photorealistic decayed hospital interiors](/images/blog/resident-evil-requiem/resident-evil-requiem-beginner-guide/rhodes-hill.webp)

## Two Protagonists, Two Completely Different Games

The campaign alternates between Grace and Leon throughout, and each gets one long stretch that belongs to them alone. Treat them as separate skill sets.

### Grace: Survival Horror With Almost No Firepower

Grace is an FBI analyst, not a soldier — and the daughter of Alyssa Ashcroft from Resident Evil Outbreak, if you want the deep-cut connection. Mechanically she is fragile and hits soft.

Her permanent arsenal is the **B934** handgun and the slightly stronger **S&S M232**. She temporarily carries the **Requiem** magnum for one stretch of the game, and that is the hardest she will ever hit. A third handgun, **Freya's Needle**, only unlocks after you finish the game once.

For melee she gets the **Makeshift Knife** and the **Hunting Knife**, both of which have durability and break permanently at zero — the RE2 remake rule. A permanent knife is also a post-game unlock. She can fill **Empty Bottles** to make Molotov cocktails or acid bottles.

Her stat ceiling is not fixed: **Steroids** and **Stabilizers** raise her health and damage over the campaign. But the core lesson holds. As Grace, [a fight you avoid is a fight you win](/blog/resident-evil-requiem/resident-evil-requiem-grace-survival-guide). Sneak, crouch, hide, and throw a bottle to pull a zombie off your route rather than spending four handgun rounds on it.

### Leon: The RE4 Half

Leon plays like his Resident Evil 4 remake self, and Capcom is not subtle about it. Multiple handguns, shotguns, submachine guns, rifles, hand grenades, and [quick-time dodges and parries](/blog/resident-evil-requiem/resident-evil-requiem-leon-combat-guide).

His melee is the **Hatchet**, which replaces the knife. It has a durability bar like Grace's knives, but Leon can resharpen it at any time, which effectively makes it permanent — a small detail that completely changes how freely you use it. Short segments also hand him a **chainsaw**, which is the most ammo-efficient tool in the game while it lasts.

![Split promotional art showing Grace Ashcroft and Leon S. Kennedy, the two playable protagonists of Resident Evil Requiem](/images/blog/resident-evil-requiem/resident-evil-requiem-beginner-guide/leon-grace-split.webp)

Leon also has an economy Grace does not — see our [Leon combat and Supply Box guide](/blog/resident-evil-requiem/resident-evil-requiem-leon-combat-guide) for how the Tactical Tracker turns kills into currency.

## First Person or Third Person

Requiem is the first game in the series designed for both perspectives, switchable in the menu, for both characters. First person is the default and follows the RE7 template. Third person is an over-the-shoulder camera closer to the RE2 and RE3 remakes.

This is not purely cosmetic, and that surprises people. The two cameras have genuinely different interactions:

- In **third person**, Grace occasionally stumbles and falls while running — but the stalker enemy catches her noticeably less often.
- In **first person**, Grace does not stumble while running, but she is more vulnerable to the stalker.

So you are trading animation friction against stalker safety. Director Koshi Nakanishi shared the split from real player data: on a first playthrough, roughly 90% of players used third person for Leon, and only 40% used third person for Grace. Read that the other way and it is the most interesting stat in the game — about 60% of players chose first person for Grace and 90% chose third person for Leon. Players instinctively sorted the horror half into first person and the action half into third.

My take: follow that instinct. First person for Grace is where the game is scariest, and third person for Leon is where the combat reads best.

## The Blood Collector Is Your Real Economy

This is the single system new players underuse. Grace acquires the **Blood Collector**, a device built by Rhodes Hill lead researcher Anthony Richardson, that harvests infected blood from killed zombies, buckets, and transfusion bags.

![The Blood Collector item from Resident Evil Requiem, a handheld blood-harvesting analysis device](/images/blog/resident-evil-requiem/resident-evil-requiem-beginner-guide/blood-collector.webp)

That blood is a crafting currency. It converts into handgun ammo, Med Injectors, Hemolytic Injectors, and more. The collector starts capped at **100 blood**, and two upgrade items found during the campaign raise that ceiling.

Here is the beginner trap: because the cap is 100, walking around full is pure waste. Every corpse you pass while capped is blood you will never get back. Spend down to make room *before* you clear a room, not after.

The most important recipe to know early is the **Hemolytic Injector**: 60 Infected Blood plus 1 Scrap. That is a steep 60% of your starting capacity for one item, which tells you how valuable the game thinks it is. We break the full blood economy down in the [Grace survival and Marie guide](/blog/resident-evil-requiem/resident-evil-requiem-grace-survival-guide).

## Blister Heads Punish Lazy Kills

If you played the original Resident Evil remake, you already know this enemy by a different name. **Blister Heads** are Requiem's Crimson Heads.

A zombie you knock down but leave intact can mutate into a Blister Head — faster, stronger, with a swollen, blistered skull. Living zombies can also mutate on contact with the fluids from a burst blister. The good news is that the blistered head is a clear weak point.

Two ways to stop the mutation before it starts:

1. **Destroy the head.** A downed zombie without an intact head is not coming back.
2. **Use a Hemolytic Injector on the corpse.** The drug destroys infected blood cells and suppresses the mutation outright.

The injector is also a stealth tool: used from behind on an unaware zombie or Licker, it is a one-hit kill, and it will stun or stagger an enemy that has already spotted you. One item, three jobs.

## Inventory Rules That Actually Matter

Grace and Leon carry things completely differently, and both systems are lifted from earlier games.

Grace uses a **slot grid** in the RE2 / RE3 / RE7 tradition, expandable with **Hip Pouches**. Leon uses the **attaché case** from RE4 and Village, where you rotate and pack items Tetris-style, and can buy an expanded case later.

Both support item examination and manual sorting, and there is an auto-sort option if you would rather not fiddle. Grab every hip pouch you see as Grace — inventory space is the most permanent upgrade in her half of the game.

![Grace Ashcroft inventory screen in Resident Evil Requiem showing the slot-based grid layout](/images/blog/resident-evil-requiem/resident-evil-requiem-beginner-guide/grace-inventory.webp)

## The Four Places You Will Spend the Game

Requiem is set in October 2026, twenty-eight years after the destruction of Raccoon City, and it splits across four areas:

- **Wrenwood** — the condemned hotel.
- **Rhodes Hill Chronic Care Center** — the hospital, and the heart of Grace's campaign.
- **The ruins of Raccoon City** — where Leon gets his economy.
- **ARK** — Oswell E. Spencer's secret laboratory, which survived the 1998 missile strike.

Each area has its own zombie variant. Rhodes Hill infected are turned staff and patients who retain personality quirks Grace can exploit. Raccoon City is full of mummified remains and victims of the Sterilization Strategy, plus mutated BSAA soldiers who will shoot at Leon or man artillery guns. ARK holds genetically modified humans grown in tubes — and Lickers, who make their return there.

## Beginner Mistakes That Cost You Resources

- **Fighting everything as Grace.** She is not built for it. Ammo spent on a zombie you could have walked past is ammo you do not have for something you cannot walk past.
- **Sitting at 100 blood.** Craft before you clear.
- **Leaving intact corpses behind you.** You are seeding Blister Heads on your own backtrack route.
- **Burning knife durability on trash.** Grace's knives break for good. Save them for defense.
- **Ignoring the hatchet as Leon.** It is resharpenable. Being stingy with it is strictly worse than using it.
- **Choosing Classic expecting an easier fight.** It is the same combat with a harsher save system. Pick it for tension, not for tuning.

## Quick Action Checklist

- Decide Modern vs Classic on the **save system** you want, not on perceived difficulty. Insanity is post-game only.
- Default to first person as Grace, third person as Leon — it matches both the design intent and what most players landed on.
- Remember the third-person trade: Grace stumbles more, but the stalker catches her less.
- Never walk around at the 100-blood cap. Craft down first.
- Memorize the Hemolytic Injector recipe: **60 Infected Blood + 1 Scrap**.
- Destroy heads or inject corpses to shut down Blister Head mutations.
- Pick up every Hip Pouch as Grace and every Steroid and Stabilizer you find.
- Use Grace's knives defensively only — they break permanently. Use Leon's hatchet freely — it does not.
- Throw bottles to reroute zombies instead of shooting them.
- Save Grace's Requiem magnum ammo for the fights the game clearly built around it.`,

  faq: [
    {
      question: 'What difficulty should I pick in Resident Evil Requiem?',
      answer:
        'Standard (Modern) is the balanced default. Standard (Classic) has identical combat tuning but requires Ink Ribbons for Grace to save at typewriters and autosaves far less often, so pick it for tension rather than expecting harder enemies. Casual adds auto-aim and reduces enemy threat. Insanity is locked until you complete the game and defeat every boss.',
    },
    {
      question: 'Should I play Resident Evil Requiem in first person or third person?',
      answer:
        'Both perspectives are available for both characters and can be switched in the menu. They differ mechanically: in third person Grace occasionally stumbles while running but the stalker enemy catches her less often, while in first person she does not stumble but is more vulnerable. Director Koshi Nakanishi reported that on first playthroughs about 90% of players used third person for Leon and about 60% used first person for Grace.',
    },
    {
      question: 'How does the Blood Collector work in Resident Evil Requiem?',
      answer:
        'The Blood Collector lets Grace harvest infected blood from killed zombies, buckets, and transfusion bags. That blood is a crafting currency for handgun ammo, Med Injectors, Hemolytic Injectors, and more. It holds 100 blood initially, and two items found during the campaign increase the capacity.',
    },
    {
      question: 'What are Blister Heads and how do I stop them?',
      answer:
        'Blister Heads are a secondary zombie mutation in Requiem, comparable to Crimson Heads in the original Resident Evil remake. They are faster and stronger than normal zombies, with the swollen head acting as a weak point. Prevent the mutation by destroying a zombie head or by using a Hemolytic Injector on the corpse.',
    },
    {
      question: 'What weapons does Grace Ashcroft get?',
      answer:
        'Grace has two permanent firearms, the B934 handgun and the stronger S&S M232, plus temporary access to the Requiem magnum during part of the game. She also uses the Makeshift Knife and Hunting Knife, which have durability and break permanently, and can fill Empty Bottles to create Molotov cocktails or acid bottles. A third handgun, Freya\'s Needle, and a permanent knife unlock after a first completion.',
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/resident-evil-requiem', anchor: 'Resident Evil Requiem coverage hub' },
    {
      href: '/blog/resident-evil-requiem/resident-evil-requiem-grace-survival-guide',
      anchor: 'Grace survival and Marie guide',
    },
    {
      href: '/blog/resident-evil-requiem/resident-evil-requiem-leon-combat-guide',
      anchor: 'Leon combat and Supply Box guide',
    },
  ],

  externalSources: [
    {
      url: 'https://residentevil.fandom.com/wiki/Resident_Evil_Requiem/gameplay',
      title: 'Resident Evil Requiem gameplay — Resident Evil Wiki',
    },
    {
      url: 'https://www.residentevil.com/requiem/en-us/',
      title: 'Resident Evil Requiem official site — Capcom',
    },
    {
      url: 'https://en.wikipedia.org/wiki/Resident_Evil_Requiem',
      title: 'Resident Evil Requiem — Wikipedia',
    },
  ],

  tldr:
    'Resident Evil Requiem alternates between Grace Ashcroft, a fragile survival-horror protagonist with only two permanent firearms, and Leon S. Kennedy, an RE4-style action character with a full arsenal. Standard (Modern) and Standard (Classic) share combat tuning and differ only in the save system, so pick Classic for ink-ribbon tension rather than harder enemies. The Blood Collector caps at 100 infected blood and is the crafting economy that funds her ammo and Hemolytic Injectors.',
};
