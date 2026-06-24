import type { BlogPost } from '../../blogTypes';

export const crkDragonsLairGuide: BlogPost = {
  slug: 'crk-dragons-lair-guide',
  game: 'cookie-run-kingdom',
  category: 'game-guides',
  topicCluster: 'guild-battle',

  tags: ['game-guides', 'guild-battle', 'pve', 'raids'],

  title: "CRK Dragon's Lair Guide — The Guild Battle Raid Bosses Explained",
  metaDescription:
    "What people call CRK's Dragon's Lair is Guild Battle. Here's how the mode works, all four raid bosses, attempts, and the rewards that make it worth grinding.",
  excerpt:
    "If you searched \"Dragon's Lair\" looking for the CRK guild raid, you're after Guild Battle — the seasonal mode built around Red Velvet Dragon and three other bosses. Here's the naming, how the mode actually works in 2026, a boss-by-boss breakdown of weaknesses and phases, the attempt math, and exactly what you earn.",
  featuredImagePrompt:
    'A widescreen Cookie Run: Kingdom Guild Battle splash with the Red Velvet Dragon coiled and roaring at center, three other boss silhouettes — a celestial avatar, a mechanical god, and a void abyss — looming in the background, a glowing guild beacon foregrounded, candy-neon reds and purples against a dark cosmic sky, cinematic key-art style, no text overlays',
  heroImage: '/images/blog/cookie-run-kingdom/crk-dragons-lair-guide/red-velvet-dragon.webp',
  heroImageAlt:
    "Red Velvet Dragon, the flagship Guild Battle raid boss CRK players nickname the Dragon's Lair, in its Guild Battle ready illustration.",
  imageSources: [
    {
      src: '/images/blog/cookie-run-kingdom/crk-dragons-lair-guide/red-velvet-dragon.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Red_Velvet_Dragon',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/crk-dragons-lair-guide/avatar-of-destiny.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Avatar_of_Destiny',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/cookie-run-kingdom/crk-dragons-lair-guide/living-abyss.webp',
      sourceUrl: 'https://cookierunkingdom.fandom.com/wiki/Living_Abyss',
      license: 'Fandom CC-BY-SA',
    },
  ],

  publishDate: '2026-06-24T00:00:00.000Z',
  lastUpdated: '2026-06-24T00:00:00.000Z',

  primaryKeyword: 'crk dragons lair',
  secondaryKeywords: [
    'cookie run kingdom dragons lair',
    'crk guild battle bosses',
    'red velvet dragon guild battle',
    'guild battle rewards crk',
    'cookie run kingdom raid bosses',
    'how guild battle works crk',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'monthly',
  evergreen: false,
  readingTimeMin: 11,

  toc: [
    { id: 'dragons-lair-vs-guild-battle-the-naming', label: 'Dragon\'s Lair vs Guild Battle — the naming', level: 2 },
    { id: 'how-guild-battle-actually-works', label: 'How Guild Battle actually works', level: 2 },
    { id: 'the-attempt-math-tickets-and-resets', label: 'The attempt math — tickets and resets', level: 3 },
    { id: 'the-four-raid-bosses', label: 'The four raid bosses', level: 2 },
    { id: 'red-velvet-dragon', label: 'Red Velvet Dragon', level: 3 },
    { id: 'avatar-of-destiny', label: 'Avatar of Destiny', level: 3 },
    { id: 'machine-god-of-the-eternal-void', label: 'Machine-God of the Eternal Void', level: 3 },
    { id: 'living-abyss', label: 'Living Abyss', level: 3 },
    { id: 'rewards-and-why-you-grind-it', label: 'Rewards and why you grind it', level: 2 },
    { id: 'how-to-actually-score-well', label: 'How to actually score well', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Search "Cookie Run Kingdom Dragon's Lair" and you'll get a wall of results that all quietly pivot to a different name. That's because there is no mode literally called Dragon's Lair — the thing everyone means is **Guild Battle**, the seasonal guild raid, and the reason it picked up the "Dragon's Lair" nickname is simple: the Red Velvet Dragon was the very first boss the mode ever shipped with, and a giant red cake dragon is a lot more memorable than the words "guild" and "battle." So if you came here for the dragon raid, you're in the right place. This is the whole mode — naming, mechanics, the four bosses, the attempt math, and the rewards — laid out straight.

I'm going to be honest about one thing up front: most "Dragon's Lair" guides are really just team-comp lists. This one covers the *mode and the bosses* — what each one is, what it's weak to, how the attempts and resets work, and exactly what you earn. If you want the full anchor-cookie-by-boss comp sheet, that's the [Guild Battle teams guide](/blog/cookie-run-kingdom/guild-battle-teams); here we're explaining the raid itself so you actually understand what you're grinding.

## Dragon's Lair vs Guild Battle — the naming

![Red Velvet Dragon, the flagship Guild Battle boss CRK players nickname the Dragon's Lair.](/images/blog/cookie-run-kingdom/crk-dragons-lair-guide/red-velvet-dragon.webp)

Quick clarity so you're not chasing a ghost: **Guild Battle is the official name.** It's a permanent, seasonal game mode that first showed up in beta during the Beacons of Unity update (v1.2) alongside Guilds, then got revamped and fully released in the Festival of Dreams and Wishes mid-update (v3.5). "Dragon's Lair" is community shorthand, born because Red Velvet Dragon was the lone boss in that v1.2 beta and stuck around as the mode's mascot.

The reason this matters beyond trivia: when you search the nickname, you'll bounce between half-accurate pages. Anchor on "Guild Battle" — that's the tab in the Guild menu, that's what the in-game UI calls it, and that's what every reward table is filed under. The dragon is the face; the mode is Guild Battle.

## How Guild Battle actually works

The core loop: your guild collectively beats on a roster of raid bosses, and **damage you deal is shared toward the guild's totals**, so every member contributes to the same goals and rewards. You're not soloing a dungeon — you're chipping at a shared health bar with your guildmates, and your individual damage also feeds your personal ranking.

A few mechanics that genuinely change how you play:

- **Every battle has a 60-second time limit.** When you enter, the timer freezes long enough for your cookies to run in and all skill cooldowns to reset — so you start every attempt with a full hand. Active treasures, however, keep their initial cooldown frozen, so you can't pre-load them. The clock starts after the boss notice flashes.
- **Bosses scale by level.** Each boss starts at Lv.1 at the beginning of a round. Beat it and it jumps up by however many levels you blew past in that fight, getting tougher as the round goes. Every 50 levels the game flags that the boss just got stronger.
- **There's a free practice mode.** You can test teams against any boss without spending a ticket. Practice runs give no rewards and don't touch the boss's level or the rankings — use them to dial in a rotation before you burn a real attempt.

That 60-second cap is the whole game. Guild Battle isn't an endurance fight; it's a one-minute damage sprint where front-loading buffs and saving your burst for the right window decides your score. More on that below.

### The attempt math — tickets and resets

Here's the part people get wrong, because the system changed from the old "three attempts" days. The current setup:

- A season runs **four rounds, one per week** — 24 playable days plus 4 tallying days.
- You get **18 Guild Battle Tickets** at the start of each round, refreshed at midnight (GMT+9).
- You can fight **each boss up to 9 times per round**, with **two bosses available to battle per round**. (9 + 9 = your 18 tickets.)
- A ticket is only consumed if you deal **at least 1 point of damage** — enter and leave without hitting the boss and you keep the ticket.
- The whole **guild** can fight a maximum of 540 battles per round.
- On the **tallying day**, battles close while results are calculated and every boss resets to Lv.1 for the next round. You get round rewards based on your guild's overall ranking; on the final tallying day of the season you get both round and season rewards.

Translation: you have 18 swings a week, split across two bosses, and you do not get them back. Don't sleepwalk through them on auto.

## The four raid bosses

The mode consists of four individual bosses, each with its own skills, strengths, weaknesses, and the strategy you need to bring. You won't face all four every round — two are active per round — but knowing all of them lets you build ahead for whatever's coming.

### Red Velvet Dragon

The original and still the most lopsided. Red Velvet Dragon ("Red Velvet Cake Dragon" in Korean) is a Front-position Guild Boss with melee and ranged attacks, and it carries Stun and Burn debuffs into the fight. It was the first boss added in the v1.2 beta and it's the one the whole "Dragon's Lair" nickname is built on.

What you need to know to fight it: it takes massively amplified damage from **Poison**, which is why the canonical team stacks Poison-applying cookies and lets the damage-over-time do the heavy lifting while a tank eats the breath phases. It's the most forgiving boss to *start* with if you have the Poison core, because the DoT floor is gentler than a burst ceiling. The full comp lives in the [Guild Battle teams guide](/blog/cookie-run-kingdom/guild-battle-teams), but the one-line version: Poison is the cheat code here.

### Avatar of Destiny

![Avatar of Destiny, the sustain-check Guild Battle raid boss with repeated HP-drain windows.](/images/blog/cookie-run-kingdom/crk-dragons-lair-guide/avatar-of-destiny.webp)

The sustain check. Avatar of Destiny throws repeated HP-drain windows that delete under-healed teams in seconds, so the fight is less about raw damage and more about whether your healing throughput can carry a front-liner through the worst windows while your DPS keeps swinging uninterrupted.

The practical read: this is the boss where you do **not** skip the healer slot. A strong single-target healer who can cover the drain phases is non-negotiable, and staggering your heals (rather than dumping them at once) keeps coverage rolling through every window. It's also the most accessible boss for newer rosters, since the sustain shell leans on cookies most accounts already have.

### Machine-God of the Eternal Void

The synergy boss. Machine-God rewards tight pair combos over raw rarity — the standout being the "Stinging Fizz" loop, where an Epic Bomber and Support buff each other on every rotation and out-score Legendary-only teams. Its beam phases hit hard enough that you still want a real tank, but the score ceiling here comes from execution: landing the buff-into-bomb order, not from your gacha luck.

This is the boss that proves Guild Battle isn't pay-to-win at the top. A well-piloted Epic pair beats a sloppily-played wall of Legendaries, and the difference between a clean run and a messy one is enormous — easily 20-30% on the same comp. Manual the opener.

### Living Abyss

![Living Abyss, the newest void-themed Guild Battle raid boss where debuff-stacking and lockdown win.](/images/blog/cookie-run-kingdom/crk-dragons-lair-guide/living-abyss.webp)

The newest of the four and the one where roster depth shows. Living Abyss is a void-themed fight where the meta leans on debuff-stacking and lockdown — control tools that stall the boss's heaviest cast windows so your damage lands during the safe stretches. Without that lockdown piece, the comp loses a big chunk of its ceiling, because the lockdown window is when most of your damage is supposed to happen.

If you're newer, this is the boss to build *toward* rather than the one to chase first — it asks the most from your roster. Lead with Red Velvet Dragon or Avatar of Destiny while you assemble the control core for the Abyss.

## Rewards and why you grind it

This is the payoff, and it's why Guild Battle is worth a serious weekly habit rather than a half-hearted auto-clear. After each fight you earn a chunk of **Heroic Torches**, **Flames of Unity**, and **Heroic Medals** scaled to the boss's level and your individual damage. Clear a boss level and every member of the guild gets the same payout of Heroic Torches and Coins on top.

The headline number to chase: if you fight **all 18 of your possible battles in a round, you bank 400 Heroic Medals.** That's the single best reason not to leave tickets on the table — those medals are a steady, predictable currency stream that the casual player just... forgets to claim by skipping their attempts.

Then there's the ranking layer. On each tallying day you get **round rewards based on your guild's overall ranking**, and on the final tallying day of the season you collect both the round and the **season rewards**. So your score isn't just personal pride — a higher guild placement directly upgrades what everyone walks away with. This is the part where being in an *active* guild pays off in raw resources, not just vibes.

## How to actually score well

The 60-second clock means Guild Battle is a sprint, and the same handful of habits separate a good run from a wasted ticket regardless of which boss you're on:

- **Open with buffs, not damage.** Most cookies front-load a buff on their first cast that decays over time. Firing your support and buff skills in the first few seconds — even when no damage skill is up yet — stretches that multiplier across the whole minute.
- **Save your burst for the end.** A big share of top-cut damage lands in the final stretch. Don't dump everything at second 10; line your heaviest skills up for the closing window.
- **Manual the parts that matter.** Auto-battle in 2026 is decent, but it still inverts pair-synergy cast orders and fires burst skills the instant they're up instead of when they should land. Manual the opening and closing seconds; auto the middle if you must. That single change is worth a chunk of damage on most rosters.
- **Use practice mode before you commit.** Free runs that don't cost a ticket or move the boss level exist for exactly this — dial in your rotation, then spend the real attempt.
- **Match the boss, don't bring a generic "good team."** Poison for Red Velvet Dragon, a real healer for Avatar of Destiny, the Stinging Fizz pair for Machine-God, lockdown for Living Abyss. The right anchor is worth more than the right rarity — the [Guild Battle teams guide](/blog/cookie-run-kingdom/guild-battle-teams) has the full per-boss sheet, and if you just unlocked someone, check the [tier list](/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list) before slotting them in.

Pair that with a tank you've actually built (the [tank tier list](/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked) covers who anchors a Guild Battle line) and the right [treasures](/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide) per boss, and your damage-per-ticket climbs fast.

## Quick Action Checklist

- "Dragon's Lair" is the nickname; the mode is **Guild Battle** in the Guild menu — search that
- Spend all **18 tickets** each round (9 per boss, two bosses active) to bank the **400 Heroic Medals**
- A ticket only burns if you deal at least 1 damage — back out of a misfire to keep it
- Use free **practice mode** to dial in a rotation before spending a real attempt
- Match the boss: **Poison** for Red Velvet Dragon, a **healer** for Avatar of Destiny, the **Stinging Fizz pair** for Machine-God, **lockdown** for Living Abyss
- Open every 60-second fight with buffs, save your burst for the final window
- Manual the opening and closing seconds; auto the middle only if you have to
- Join and stay in an **active guild** — round and season rewards scale off guild ranking
- Build toward Living Abyss; lead with Red Velvet Dragon or Avatar of Destiny while your roster grows`,

  faq: [
    {
      question: "Is Dragon's Lair the same as Guild Battle in Cookie Run: Kingdom?",
      answer:
        "Yes. There is no mode officially called Dragon's Lair — it's a community nickname for Guild Battle, the seasonal guild raid. The name caught on because Red Velvet Dragon was the very first boss the mode shipped with in the v1.2 beta and became its mascot. If you're searching for the CRK dragon raid, look for the Guild Battle tab in the Guild menu; that's where the bosses, attempts, and reward tables all live.",
    },
    {
      question: "How many attempts do you get in CRK Guild Battle?",
      answer:
        "You get 18 Guild Battle Tickets at the start of each weekly round, refreshed at midnight GMT+9. You can fight each of the two active bosses up to 9 times per round (9 + 9 = 18). A ticket is only consumed if you deal at least 1 point of damage, so backing out of a misfire before hitting the boss keeps the ticket. A season runs four rounds — 24 playable days plus 4 tallying days — and bosses reset to Lv.1 each round.",
    },
    {
      question: "What are the four Guild Battle bosses in Cookie Run: Kingdom?",
      answer:
        "Red Velvet Dragon, Avatar of Destiny, Machine-God of the Eternal Void, and Living Abyss. Each has its own skills and weaknesses: Red Velvet Dragon takes amplified damage from Poison, Avatar of Destiny is a sustain check with HP-drain phases, Machine-God rewards tight pair synergies like the Stinging Fizz loop, and Living Abyss is a void-themed fight where debuff-stacking and lockdown control win. Two bosses are active per round, not all four at once.",
    },
    {
      question: "What rewards does Guild Battle give in CRK?",
      answer:
        "Each fight pays Heroic Torches, Flames of Unity, and Heroic Medals scaled to the boss's level and your damage, plus Coins and shared Heroic Torches when your guild clears a boss level. Fighting all 18 of your possible battles in a round banks 400 Heroic Medals. On top of per-fight loot, you earn round rewards based on your guild's overall ranking each tallying day, and both round and season rewards on the final tallying day — so a higher guild placement directly upgrades everyone's haul.",
    },
    {
      question: "Why is Guild Battle called Dragon's Lair?",
      answer:
        "Because Red Velvet Dragon was the only boss in the mode's original v1.2 beta release and remained its signature enemy. A giant red cake dragon is far more memorable than the generic name 'Guild Battle,' so players started referring to the whole mode by its dragon, and the 'Dragon's Lair' shorthand stuck even after three more bosses — Avatar of Destiny, Machine-God of the Eternal Void, and Living Abyss — were added.",
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/guild-battle-teams', anchor: 'Guild Battle teams guide' },
    { href: '/blog/cookie-run-kingdom/best-crk-pve-teams', anchor: 'best PvE teams' },
    { href: '/blog/cookie-run-kingdom/best-crk-tank-cookies-ranked', anchor: 'tank tier list' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-treasures-guide', anchor: 'treasures guide' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list', anchor: 'CRK tier list' },
    { href: '/blog/cookie-run-kingdom/crk-cookie-alliance-guide', anchor: 'Cookie Alliance guide' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Guild_Battle', title: 'Cookie Run: Kingdom Wiki — Guild Battle' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Red_Velvet_Dragon', title: 'Cookie Run: Kingdom Wiki — Red Velvet Dragon' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Avatar_of_Destiny', title: 'Cookie Run: Kingdom Wiki — Avatar of Destiny' },
    { url: 'https://cookierunkingdom.fandom.com/wiki/Living_Abyss', title: 'Cookie Run: Kingdom Wiki — Living Abyss' },
  ],

  tldr:
    "What CRK players call \"Dragon's Lair\" is officially Guild Battle — the seasonal guild raid that debuted in v1.2 with the Red Velvet Dragon as its only (and signature) boss. The mode now has four raid bosses: Red Velvet Dragon (weak to Poison), Avatar of Destiny (a sustain check), Machine-God of the Eternal Void (rewards pair synergy), and Living Abyss (debuff and lockdown). You get 18 tickets per weekly round split across two active bosses (9 each), every fight is a 60-second sprint with cooldowns reset on entry, and fighting all 18 battles banks 400 Heroic Medals on top of Heroic Torches, Flames of Unity, Coins, and guild-ranking round and season rewards.",
};
