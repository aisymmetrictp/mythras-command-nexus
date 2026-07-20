import type { BlogPost } from '../../blogTypes';

export const cs2UtilityGuide: BlogPost = {
  slug: 'cs2-utility-guide',
  game: 'counter-strike-2',
  category: 'game-guides',
  topicCluster: 'cs2-guides',
  tags: ['utility', 'smokes', 'flashbangs', 'molotovs', 'volumetric-smoke'],
  title: 'CS2 Utility Guide: Smokes, Flashes, and Molotovs',
  metaDescription:
    'How CS2 utility really works — volumetric smokes you can shoot holes in, flash timings, molotov surface rules, and the grenade buy order that wins rounds.',
  excerpt:
    'CS2 replaced the flat CS:GO smoke with a voxel cloud you can shoot holes in and blow apart with an HE. That one change rewrote how every piece of utility in the game interacts. Here is the whole toolkit, priced and explained.',
  featuredImagePrompt:
    'A CS2 smoke grenade render on a dark tactical backdrop, volumetric grey smoke billowing behind it with a bullet-punched hole of light through the cloud',
  heroImage: '/images/blog/counter-strike-2/cs2-utility-guide/smoke-grenade.webp',
  heroImageAlt:
    'The CS2 smoke grenade, the $300 grenade that became a dynamic voxel cloud when Counter-Strike moved to Source 2.',
  imageSources: [
    {
      src: '/images/blog/counter-strike-2/cs2-utility-guide/smoke-grenade.webp',
      sourceUrl: 'https://counterstrike.fandom.com/wiki/File:Smokegrenadehud_csgo.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/counter-strike-2/cs2-utility-guide/flashbang.webp',
      sourceUrl: 'https://counterstrike.fandom.com/wiki/File:Flashbanghud_csgo.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/counter-strike-2/cs2-utility-guide/molotov.webp',
      sourceUrl: 'https://counterstrike.fandom.com/wiki/File:Molotovhud.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/counter-strike-2/cs2-utility-guide/he-grenade.webp',
      sourceUrl: 'https://counterstrike.fandom.com/wiki/File:Hegrenadehud_csgo.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/counter-strike-2/cs2-utility-guide/incendiary.webp',
      sourceUrl: 'https://counterstrike.fandom.com/wiki/File:Incgrenadehud_csgo.png',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-20T00:00:00.000Z',
  lastUpdated: '2026-07-20T00:00:00.000Z',
  primaryKeyword: 'cs2 utility guide',
  secondaryKeywords: [
    'cs2 volumetric smoke',
    'cs2 grenade prices',
    'cs2 flashbang guide',
    'counter strike 2 smokes',
    'cs2 molotov guide',
    'cs2 he grenade smoke',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-volumetric-smoke-actually-changed', label: 'What volumetric smoke actually changed', level: 2 },
    { id: 'the-full-cs2-grenade-price-list', label: 'The full CS2 grenade price list', level: 2 },
    { id: 'smokes-the-only-grenade-you-can-delete', label: 'Smokes: the only grenade you can delete', level: 2 },
    { id: 'flashes-two-per-player-and-both-should-land', label: 'Flashes: two per player and both should land', level: 2 },
    { id: 'molotovs-and-incendiaries-have-surface-rules', label: 'Molotovs and incendiaries have surface rules', level: 2 },
    { id: 'the-he-grenade-got-a-second-job', label: 'The HE grenade got a second job', level: 2 },
    { id: 'decoys-are-50-dollars-of-misinformation', label: 'Decoys are 50 dollars of misinformation', level: 2 },
    { id: 'building-a-utility-buy-that-survives-contact', label: 'Building a utility buy that survives contact', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `The first time somebody shot a hole through your smoke and killed you standing in it, you probably assumed it was a bug. It was not. CS2's smokes are voxel-based volumetric objects rather than the flat particle sphere CS:GO drew, and bullets punching visible gaps through them is a designed mechanic — one that turned the safest grenade in Counter-Strike into the one you have to actively defend.

Utility is where mid-tier CS2 players lose the most free value. Not aim, not positioning. Four grenades per player, up to $1,300 of purchases, and most of it lands in the wrong place at the wrong time. Here is the whole toolkit, what each piece costs, and the rules the game actually enforces.

## What volumetric smoke actually changed

When Counter-Strike moved to Source 2, Valve rebuilt smoke as a dynamic volume that reacts to the world. Three specific behaviors matter to you every single round:

**Lighting.** Spot lights are no longer visible through smoke, and environment lighting illuminates the cloud and casts shadows across parts of it. A smoke on a bright site looks different from a smoke in a dark corridor, and the silhouette of a player crossing near the edge is far more readable than it was in CS:GO.

**Bullets.** Shooting into the cloud carves small holes through it. That is a two-way street: spraying a smoke to find someone now genuinely reveals them, but it also opens a channel back to you and gives away your exact position. The old habit of blind-spamming a smoke and shrugging is now a real risk.

**HE grenades.** An explosion briefly dissipates the smoke, opening a window. This is the mechanic that changed executes most. You can HE a smoke from safety to give a teammate vision, or throw a well-timed underarm at your own feet for a short, risky gap you personally shoot through.

There is also a fire interaction most players find by accident: a smoke landing in molotov or incendiary flames releases instantly and extinguishes the fire, and a firebomb thrown into an existing smoke fails to emit fire at all. Smoke beats fire in CS2, every time, in both directions.

## The full CS2 grenade price list

| Grenade | Price | Max carried | Notes |
| --- | --- | --- | --- |
| Decoy | $50 | 1 | Emits the sound of your best weapon |
| Flashbang | $200 | 2 | Only 1 in Casual |
| Smoke grenade | $300 | 1 | Volumetric in CS2 |
| HE grenade | $300 | 1 | Dissipates smoke on detonation |
| Molotov | $400 | 1 | Terrorist only |
| Incendiary grenade | $500 | 1 | Counter-Terrorist only, was $600 in CS:GO |

Two hard limits sit on top of that table. **You can carry four grenades total**, so a two-flash loadout means you get exactly two other pieces. And every grenade lets you move at 245 hammer units per second — faster than any gun in the game and second only to the knife and the bomb at 250. If you need to cross open ground quickly, hold a grenade, not your rifle.

That mobility number is not trivia. Switching to a grenade to reposition and back to the rifle on arrival is one of the cheapest speed upgrades in CS2, and it costs you nothing but the swap animation.

## Smokes: the only grenade you can delete

$300, one per round, and the single highest-leverage purchase in the game. A smoke does not just block vision — it stops the vision-dependent systems too, so an enemy behind a proper cloud is not being revealed on your radar by teammates looking at them.

What changed in CS2 is that a smoke is no longer a wall. It is a resource with hit points, and the enemy has three tools to spend against it:

1. **Spray it** and open holes. Costs them position and ammunition.
2. **HE it** and briefly delete a window through it. Costs them a $300 grenade.
3. **Wait it out** and take the fight when the cloud thins.

Which means the smoke's job in CS2 is narrower and more honest than in CS:GO: it buys time, not safety. Throw it, use the seconds, and be somewhere else before the counter-utility lands. Standing still inside a smoke on a site you just took is how you die to a spray from a player who never saw you.

Worth knowing for the edge case: the smoke grenade itself deals almost no impact damage in CS2 — 2 to an unarmored player, 1 to an armored one, regardless of where it hits. In CS:GO a smoke to the head did 6. You cannot finish anyone with a thrown smoke anymore.

## Flashes: two per player and both should land

$200 each, two per player in Premier, Competitive, and Wingman. That is ten flashes on a five-man buy — the largest single lever your team has, and the one most consistently wasted.

The mechanics you need to respect:

- The flash **blinds teammates regardless of whether friendly fire is enabled.** Every pop flash you throw for yourself is also a pop flash you are throwing at whoever is standing next to you.
- It explodes on a timed fuse after the throw, not on impact, which is why the pop flash off a wall works and the flash you lob into the open does not.
- **Flashes still blind players standing inside smoke.** The cloud does not protect them. A smoke plus a flash into the same space is one of the strongest two-grenade combinations in CS2.
- After the white fades, players see a frozen afterimage of the frame just before they were flashed. That is why turning away and looking at a blank wall works — you are choosing the picture you get stuck with.

![CS2 flashbang](/images/blog/counter-strike-2/cs2-utility-guide/flashbang.webp)

The discipline that separates good teams: one player throws, one player swings, and they are not the same person. Self-flashing into a site is a coin flip. Being flashed for by a teammate who called the timing is a duel you start with a free 100 damage.

## Molotovs and incendiaries have surface rules

$400 for the Terrorist molotov, $500 for the Counter-Terrorist incendiary — and that CT price dropped from $600 in CS:GO, which quietly made CT retake utility a hundred dollars cheaper every round.

Both follow the same physical rules, and both punish people who do not know them:

- The bottle or canister only breaks on a **walkable surface angled 30 degrees or less from horizontal.** Throw one at a wall, a steep slope, or a railing and it bounces off intact and lands somewhere you did not intend.
- An incendiary that stays airborne for more than two seconds detonates in mid-air and releases nothing at all — no fire, no damage. The one exception is if it pops less than 128 units above a surface, in which case the flames drop and burn normally.
- Fire damage ramps. The flame starts at about 1 damage per tick and climbs toward 8 the longer you stand in it. Walking through a molotov costs you very little; standing in one for two seconds costs you the round.

That ramp is why "walk it off" is correct and instinctive backpedaling is wrong. If a molotov lands between you and where you need to be, the fast path forward is usually cheaper in HP than the retreat.

![CS2 molotov](/images/blog/counter-strike-2/cs2-utility-guide/molotov.webp)

And remember the smoke interaction from earlier: a single $300 smoke completely negates a $400 or $500 firebomb. If the enemy molotovs the bomb to stop a defuse, a smoke on the C4 puts the fire out. That trade is one of the best value exchanges in CS2 and almost nobody in matchmaking makes it.

![CS2 incendiary grenade](/images/blog/counter-strike-2/cs2-utility-guide/incendiary.webp)

## The HE grenade got a second job

The HE was always a damage tool: $300, one per player, wide-area damage that falls off with distance, and enough force to destroy air vents, windows, and destructible doors caught in the blast.

In CS2 it picked up a second and arguably more important role — **blowing a temporary window through a smoke.** That gives you two distinct plays:

- **The support HE.** You are behind cover, a teammate is holding an angle onto a smoked choke. You HE the cloud, the smoke briefly clears, your teammate gets a free look and a free shot. You never expose yourself.
- **The self-HE.** Underarm throw at the smoke in front of you, time the dissipation, and shoot through the gap yourself. Higher risk, because the window opens for the enemy at exactly the same moment.

Both are worth more than the 30 chip damage most players use the HE for. And the kill reward is the same $300 as a rifle if you do connect, so an HE that finishes someone pays for itself exactly.

![CS2 HE grenade](/images/blog/counter-strike-2/cs2-utility-guide/he-grenade.webp)

## Decoys are 50 dollars of misinformation

Fifty dollars. It emits the sound of the most powerful weapon you are carrying and shows up on the enemy radar as a contact. On a full-buy round it is the cheapest thing you can add to a loadout, and on a partial buy it is the only utility some players can afford.

The honest assessment: it does not fool an experienced player for more than a second or two. But a second or two of a CT rotating toward a fake AK on the wrong side of the map is exactly what a five-man split needs, and it is 50 dollars. Buy it on rounds where you have spare change and a plan for it. Do not buy it as a substitute for a flash.

## Building a utility buy that survives contact

The order that holds up in CS2, assuming full armor is already paid for:

1. **Flash.** $200. The highest damage-per-dollar item in the game.
2. **Smoke.** $300. Buys the crossing you cannot make otherwise.
3. **Second flash.** $200. Ten team flashes beats five team flashes and five HEs.
4. **Molotov or incendiary.** $400 or $500. Area denial, post-plant control, and defuse denial.
5. **HE.** $300. Only if you have a smoke-clearing plan, not for chip damage.

Full stack is $1,300 to $1,400 depending on side, which is roughly half an AK. Team-wide that is $6,500 to $7,000 of grenades — and the reason the [CS2 economy guide](/blog/counter-strike-2/cs2-economy-guide) treats utility as a fixed cost rather than a luxury. If you have rifles and no grenades, you have not saved money; you have bought a worse round.

Once the utility lands, the round comes down to whether you can hit the person walking out of it — which is where the [CS2 spray control guide](/blog/counter-strike-2/cs2-spray-control-guide) picks up. And the rest of our coverage lives on the [Counter-Strike 2 coverage hub](/blog/counter-strike-2).

## Quick Action Checklist

- Never stand still in your own smoke. Bullets punch holes through it in CS2.
- Carry a grenade when you need to move fast — 245 hu/s beats every gun in the game.
- Throw two flashes per player per round. Unused flashes are $400 of dead weight.
- Have a teammate flash for you. Self-flashing into a site is a coin flip.
- Look at a blank surface when you get flashed — the afterimage freezes the last frame you saw.
- Smoke the molotov, do not walk around it. A $300 smoke deletes a $500 incendiary instantly.
- Walk through fire rather than backing out of it. Flame damage ramps from about 1 to 8 per tick.
- Do not throw firebombs at steep surfaces. They only break on ground 30 degrees or flatter.
- Use the HE to open a window in a smoke for a teammate, not for 30 chip damage.
- Buy the $50 decoy on rounds with spare change and a fake in the plan.
`,
  faq: [
    {
      question: 'How does volumetric smoke work in CS2?',
      answer:
        'CS2 smokes are voxel-based volumetric objects rather than the flat particle effect used in CS:GO. They react to lighting so spot lights no longer shine through them and environment light casts shadows on the cloud, bullets punch small visible holes through them, and an HE grenade explosion briefly dissipates the smoke to open a temporary window.',
    },
    {
      question: 'How much does each grenade cost in CS2?',
      answer:
        'A decoy is $50, a flashbang is $200, a smoke grenade is $300, an HE grenade is $300, a Terrorist molotov is $400, and a Counter-Terrorist incendiary grenade is $500. The incendiary dropped from $600 in CS:GO. You can carry four grenades total and two flashbangs in Premier, Competitive, and Wingman.',
    },
    {
      question: 'Does smoke put out fire in CS2?',
      answer:
        'Yes, and it works both ways. A smoke grenade landing in molotov or incendiary flames releases its smoke instantly and extinguishes the fire, and a firebomb thrown into an existing smoke cloud fails to emit fire at all. That makes a $300 smoke a full counter to a $400 molotov, including one thrown onto a planted bomb to deny a defuse.',
    },
    {
      question: 'Can you still get flashed inside a smoke in CS2?',
      answer:
        'Yes. Standing in a smoke cloud does not protect you from a flashbang, which is why a smoke plus flash into the same space is one of the strongest utility combinations in the game. Flashbangs also blind teammates regardless of whether friendly fire is enabled, so coordinate who throws and who swings.',
    },
    {
      question: 'Why did my molotov bounce instead of breaking?',
      answer:
        'Molotovs and incendiary grenades only break on walkable surfaces angled 30 degrees or less from horizontal. Thrown at a wall, a steep slope, or a railing they bounce off intact. Incendiaries also detonate harmlessly in mid-air if they stay airborne for more than two seconds, unless they pop within 128 units of a surface.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/counter-strike-2', anchor: 'Counter-Strike 2 coverage hub' },
    { href: '/blog/counter-strike-2/cs2-economy-guide', anchor: 'CS2 economy guide' },
    { href: '/blog/counter-strike-2/cs2-spray-control-guide', anchor: 'CS2 spray control guide' },
  ],
  externalSources: [
    {
      url: 'https://counterstrike.fandom.com/wiki/Counter-Strike_2',
      title: 'Counter-Strike 2 — Counter-Strike Wiki (volumetric smoke and sub-tick)',
    },
    {
      url: 'https://counterstrike.fandom.com/wiki/Smoke_Grenade',
      title: 'Smoke Grenade — Counter-Strike Wiki',
    },
    {
      url: 'https://www.counter-strike.net/cs2',
      title: 'Counter-Strike 2 — official Valve site',
    },
  ],
  tldr:
    'CS2 smokes are voxel volumes that light interacts with, bullets punch holes through, and HE grenades briefly blow apart — so a smoke buys time, not safety. Grenades cost $50 for a decoy, $200 per flash, $300 for a smoke or HE, $400 for a molotov, and $500 for an incendiary, with four grenades carried total. Smoke beats fire in both directions, flashes still blind through smoke, and firebombs only break on surfaces 30 degrees or flatter.',
};
