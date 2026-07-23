import type { BlogPost } from '../../blogTypes';

export const eldenRingStatusEffectsGuide: BlogPost = {
  slug: 'elden-ring-status-effects-guide',
  game: 'elden-ring',
  category: 'game-guides',
  topicCluster: 'elden-ring-combat',
  tags: ['status-effects', 'bleed', 'scarlet-rot', 'frostbite', 'resistances'],
  title: 'Elden Ring Status Effects Guide: Bleed, Frostbite, Scarlet Rot and More',
  metaDescription:
    'How every Elden Ring status effect actually works — bleed, frostbite, scarlet rot, poison, sleep, madness and death — plus the four resistance stats that block them.',
  excerpt:
    'Status effects are the fastest damage in Elden Ring and the game explains almost none of the math. Here is what each proc actually does, why bleed and frostbite outclass poison, and the four hidden stats deciding whether you survive a swamp.',
  featuredImagePrompt:
    'A curved katana dripping crimson resting on a cracked stone altar, embers and frost mist mingling in the air, dark fantasy, golden grace-light',
  heroImage: '/images/blog/elden-ring/elden-ring-status-effects-guide/rivers-of-blood.webp',
  heroImageAlt:
    'Rivers of Blood, the katana that inflicts Hemorrhage in Elden Ring, whose blood-loss proc deals a flat amount plus 15 percent of the target maximum HP.',
  imageSources: [
    {
      src: '/images/blog/elden-ring/elden-ring-status-effects-guide/rivers-of-blood.webp',
      sourceUrl: 'https://eldenring.fandom.com/wiki/File:ER_Icon_weapon_Rivers_of_Blood.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/elden-ring/elden-ring-status-effects-guide/reduvia.webp',
      sourceUrl: 'https://eldenring.fandom.com/wiki/File:ER_Icon_weapon_Reduvia.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/elden-ring/elden-ring-status-effects-guide/icerind-hatchet.webp',
      sourceUrl: 'https://eldenring.fandom.com/wiki/File:ER_Icon_weapon_Icerind_Hatchet.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/elden-ring/elden-ring-status-effects-guide/antspur-rapier.webp',
      sourceUrl: 'https://eldenring.fandom.com/wiki/File:ER_Icon_weapon_Antspur_Rapier.png',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-23T00:00:00.000Z',
  lastUpdated: '2026-07-23T00:00:00.000Z',
  primaryKeyword: 'elden ring status effects',
  secondaryKeywords: [
    'elden ring bleed explained',
    'elden ring frostbite effect',
    'elden ring scarlet rot',
    'elden ring status resistance stats',
    'elden ring immunity robustness focus vitality',
    'elden ring hemorrhage damage',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'the-two-numbers-that-run-every-status', label: 'The two numbers that run every status', level: 2 },
    { id: 'the-offensive-four', label: 'The offensive four', level: 2 },
    { id: 'hemorrhage-bleed-the-percentage-hammer', label: 'Hemorrhage (bleed): the percentage hammer', level: 3 },
    { id: 'frostbite-the-damage-amplifier', label: 'Frostbite: the damage amplifier', level: 3 },
    { id: 'scarlet-rot-the-boss-killer', label: 'Scarlet Rot: the boss-killer', level: 3 },
    { id: 'poison-the-one-you-can-mostly-ignore', label: 'Poison: the one you can mostly ignore', level: 3 },
    { id: 'sleep-and-madness-the-niche-two', label: 'Sleep and Madness: the niche two', level: 2 },
    { id: 'death-blight-the-instant-kill', label: 'Death Blight: the instant kill', level: 2 },
    { id: 'the-four-stats-that-keep-you-alive', label: 'The four stats that keep you alive', level: 2 },
    { id: 'mistakes-that-get-people-killed', label: 'Mistakes that get people killed', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Malenia has roughly thirty-three thousand HP on your first meeting her. A single bleed proc against her strips off a flat chunk plus fifteen percent of that pool — call it five thousand damage in one tick, more than most weapons do in three or four full combos. That is the entire reason status effects are the most efficient damage in Elden Ring, and it is also the reason the game refuses to explain how any of them work.

So let me. Every status in the game runs on the same two-part engine, and once you see the engine you understand why bleed and frostbite are build-defining while poison is a footnote.

## The two numbers that run every status

Every status effect has a **buildup meter** and a **proc**. Your hits add points to a hidden meter on the target. When the meter fills, the status "procs" — it triggers its effect — the meter empties, and it starts filling again from zero.

Two things about that meter people constantly get wrong:

- **It decays.** If you stop applying buildup, the meter drains back down over a few seconds. Poke a boss once with a bleed weapon, wander off to heal, and you may come back to a meter that has fallen halfway. Status effects reward committed aggression, not chip damage.
- **The bar refills to the same threshold every time.** There is no "resistance ramp" for most enemies within a fight — the second proc costs the same buildup as the first. That is why fast-hitting bleed weapons can proc, proc, and proc again in a single stagger window.

Whether your hit lands 30 buildup or 66 depends on the weapon, the Ash of War, and any status-boosting talismans. Whether the enemy needs 90 or 900 to proc depends on their hidden resistance to that specific status. Two invisible numbers, and the whole system falls out of them.

## The offensive four

Four statuses do the offensive heavy lifting: Hemorrhage, Frostbite, Scarlet Rot and Poison. They are not remotely equal.

### Hemorrhage (bleed): the percentage hammer

When a bleed meter fills, the target takes **instant damage equal to a flat value plus a percentage of their maximum HP** — the wiki lists it as 100 + 15%, or 200 + 15% depending on the source. That percentage is the whole story. Against trash mobs, 15% of a small health bar is nothing special. Against a boss sitting on tens of thousands of HP, 15% is a catastrophe you inflict in a single tick.

Bleed scales with your Arcane stat and rewards fast, multi-hit movesets — dual katanas, the [Nagakiba](/blog/elden-ring/elden-ring-ashes-of-war-guide) with a Blood affinity, Reduvia's thrown blood blades, the infamous Rivers of Blood and its L2. Pair any of them with Ash of War: Seppuku, and you push the buildup so hard that some enemies proc twice inside one opening.

![Reduvia, an early-game Elden Ring dagger that inflicts Hemorrhage with both melee hits and its ranged blood-blade skill.](/images/blog/elden-ring/elden-ring-status-effects-guide/reduvia.webp)

The catch is that bleed damage is a flat percentage, not a scaling percentage of the hit — so once an enemy is nearly dead, the proc is worth less than just hitting them. Bleed is a burst tool for the top of a health bar, not a finisher.

### Frostbite: the damage amplifier

Frostbite is the most misunderstood status in the game because people evaluate the proc and stop there. The proc itself is small: **30 + 10% of max HP** in one hit. That is not why you run frost.

You run frost for the debuff attached to it. A frostbite proc also applies a **20% damage negation penalty to all sources** and slows the target's stamina recovery, and that debuff lasts **30 seconds**. Twenty percent more damage from every source — your weapon, your spells, your co-op partner, your Mimic Tear — for half a minute is a bigger contribution than the proc damage will ever be. Frost is a party buff you apply with a hatchet.

![The Icerind Hatchet, an Elden Ring axe whose Hoarfrost Stomp skill applies Frostbite in a wide frontal wave.](/images/blog/elden-ring/elden-ring-status-effects-guide/icerind-hatchet.webp)

The clean combo is frost first, then bleed. Proc frostbite, and every subsequent bleed hit — and the bleed proc's own follow-up — lands into a target taking 20% extra. The Icerind Hatchet's Hoarfrost Stomp exists specifically to open fights this way.

### Scarlet Rot: the boss-killer

Rot does not hit once. It ticks. When Scarlet Rot procs it applies **considerable damage-over-time** — the exact rate and duration vary by source, but it is dramatically stronger than poison, and against a large health pool that stacked DoT can outdamage anything else you own. This is the status that lets an underleveled character cheese bosses: build the meter, proc the rot, and back off while the enemy loses a chunk of its bar to nothing.

![The Antspur Rapier, an Elden Ring thrusting sword that builds Scarlet Rot with every hit and its Impaling Thrust skill.](/images/blog/elden-ring/elden-ring-status-effects-guide/antspur-rapier.webp)

The Antspur Rapier builds rot on every poke, the Rotten Breath incantation coats an area, and Rotten Winged Sword Insignia stacks attack power as the fight drags on. Rot is a patience weapon: slower to set up than bleed, but it keeps working while you dodge.

### Poison: the one you can mostly ignore

Poison uses the same DoT mechanic as rot at a fraction of the potency. The damage is low, the duration middling, and by the time it has ticked for anything meaningful you could have bled or rotted the target twice over. Poison's real value is Arcane-adjacent build synergy — Mohgwyn's Sacred Spear and a handful of talismans reward inflicting it — and the fact that poison and rot are on the same resistance stat, so a poison proc can sometimes prime an enemy for faster rot. As a standalone win condition, it is the weakest of the four.

## Sleep and Madness: the niche two

Sleep and Madness were the "new" statuses at launch and they stayed situational.

**Sleep** doesn't damage — it disables. A slept enemy loses balance or drops unconscious, and crucially the hit that wakes them lands amplified, so sleep functions as a setup for a big critical opening. St. Trina's weapons and the Sword of Night and Flame-adjacent tools push it. It is excellent against a specific list of enemies and useless against the many bosses immune to it.

**Madness** only builds on players and a narrow set of humanoid NPCs — most bosses are flat immune. When it procs it briefly stuns the victim and deals **100 + 15% of max HP plus a chunk of FP (30 + 10%)**. That FP drain is why the Frenzied Flame's own status hurts casters most. In PvP and against the handful of susceptible NPCs it is real; in the main campaign it is a curiosity.

## Death Blight: the instant kill

Death Blight — often called Deathblight — is the scariest bar in the game and the one you will almost never inflict yourself. When the meter fills, **the victim dies instantly**. No percentage, no DoT, just death. It shows up in places like the Deeproot Depths and around Those Who Live in Death, and against you it ignores your health bar entirely, which is exactly why it feels so unfair the first time a fanged imp statue's mist fills that purple meter to full.

## The four stats that keep you alive

Everything above is offense. The defensive half of the system is four resistance stats the game buries in a sub-menu, each governing exactly two statuses:

| Resistance | Blocks | Raised by |
| --- | --- | --- |
| Immunity | Poison, Scarlet Rot | Vigor |
| Robustness | Hemorrhage, Frostbite | Endurance |
| Focus | Sleep, Madness | Mind |
| Vitality | Death Blight | (gear and consumables) |

These are buildup resistances, not immunities — they raise how much of a meter an enemy has to fill before your status procs on *you*. Higher Robustness doesn't stop bleed; it just means the swamp guardian needs more hits to open your vein.

The practical takeaways: leveling **Vigor and Endurance passively hardens you against the four statuses you meet most** (the rot swamps, the bleed-heavy enemies, the frost mobs), which is one more reason Vigor is never a wasted level. When you know a zone's theme — the Lake of Rot is Immunity, Caelid is Immunity, the frost caves are Robustness — the Flask of Wondrous Physick with the right crystal tear, plus consumables like Preserving Boluses (bleed/frost) and Neutralizing Boluses (poison/rot), turns a lethal area into an annoyance. Match the cure to the swamp before you walk in, not while you are dying in it.

## Mistakes that get people killed

- **Chip-poking a status meter.** Buildup decays. If you can't commit enough hits to proc before the meter drains, you are doing zero status damage. Go all-in or don't bother.
- **Running poison and expecting rot numbers.** They share a stat and a DoT mechanic, but poison's damage is a fraction of rot's. If you want the DoT win condition, build rot.
- **Judging frost by its proc.** The 30 + 10% hit is the least important thing frostbite does. The 20% damage amplification is the point.
- **Ignoring Robustness before a bleed zone.** Enemies bleed you too. A little Endurance and a Preserving Bolus in the pouch is the difference between a scary swamp and a lethal one.
- **Trying to status a statue of a boss that's immune.** Many late bosses resist or hard-ignore specific statuses. If the meter isn't appearing, stop feeding it and just deal damage.

## Quick Action Checklist

- **Lead with frost, follow with bleed.** Proc frostbite for the 20% damage-up, then let bleed hits land into the debuff window.
- **Save rot for big health bars.** Its stacked DoT is your best tool against high-HP bosses you can kite.
- **Treat poison as build synergy, not a plan.** Only run it if a talisman or weapon specifically pays you for it.
- **Level Vigor and Endurance** for passive Immunity and Robustness — the statuses you'll eat most come off those two stats.
- **Pre-load the right bolus.** Preserving Boluses for bleed and frost, Neutralizing for poison and rot. Match the swamp before you enter it.
- **Commit or skip.** Buildup decays, so half-hearted status pressure is wasted damage.
`,
  faq: [
    {
      question: 'What does bleed (Hemorrhage) do in Elden Ring?',
      answer:
        'When the bleed meter fills, the target takes instant damage equal to a flat value plus 15% of their maximum HP (the wiki lists 100 + 15% or 200 + 15% depending on the source). Because it is a percentage of max HP, bleed is devastating against high-health bosses and only average against weak enemies. It scales with Arcane and rewards fast, multi-hit weapons.',
    },
    {
      question: 'Is Frostbite worth using in Elden Ring?',
      answer:
        'Yes, but not for its proc damage, which is only 30 + 10% of max HP. The real value is the debuff a frostbite proc applies: a 20% damage negation penalty to all sources plus slowed stamina recovery, lasting 30 seconds. That 20% damage amplification benefits every source hitting the target, which is why frost pairs so well with bleed and with co-op.',
    },
    {
      question: 'How strong is Scarlet Rot compared to Poison?',
      answer:
        'Both are damage-over-time effects that share the Immunity resistance stat, but Scarlet Rot deals dramatically more damage per tick than Poison. Against a large health pool, a rot proc can outdamage almost anything else you own, which is why it is a go-to for cheesing high-HP bosses. Poison is comparatively weak and is mainly useful for build synergy.',
    },
    {
      question: 'What are the four status resistance stats in Elden Ring?',
      answer:
        'Immunity resists Poison and Scarlet Rot and is raised by Vigor. Robustness resists Hemorrhage (bleed) and Frostbite and is raised by Endurance. Focus resists Sleep and Madness and is raised by Mind. Vitality resists Death Blight and is raised mainly by gear and consumables. All four are buildup resistances, meaning they raise how much of a meter must fill before the status procs on you.',
    },
    {
      question: 'What is Death Blight in Elden Ring?',
      answer:
        'Death Blight (Deathblight) is a status that kills the victim instantly when its meter fills, ignoring the health bar entirely. It appears in areas like the Deeproot Depths and around Those Who Live in Death. It is resisted by the Vitality stat, and there are talismans and items that raise Vitality to slow the buildup.',
    },
    {
      question: 'Does status buildup go away if I stop attacking?',
      answer:
        'Yes. Every status buildup meter decays back toward zero over a few seconds if you stop applying it. This is why chip damage from a distance rarely procs anything — you have to commit enough hits in a short window to fill the meter before it drains. Status effects reward sustained aggression.',
    },
    {
      question: 'Why is Madness useless against most bosses?',
      answer:
        'Madness only builds on players and a narrow set of humanoid NPCs; the majority of bosses are flat immune to it. When it does proc, it briefly stuns the target and deals 100 + 15% of max HP plus FP damage (30 + 10%). That FP drain makes it most dangerous to casters, so it sees the most use in PvP rather than the main campaign.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/elden-ring', anchor: 'Elden Ring coverage hub' },
    { href: '/blog/elden-ring/elden-ring-ashes-of-war-guide', anchor: 'Elden Ring Ashes of War guide' },
    { href: '/blog/elden-ring/elden-ring-weapon-scaling-explained', anchor: 'Elden Ring weapon scaling explained' },
    { href: '/blog/elden-ring/best-elden-ring-starting-class', anchor: 'Best Elden Ring starting class' },
  ],
  externalSources: [
    {
      url: 'https://eldenring.wiki.fextralife.com/Status+Effects',
      title: 'Status Effects — Elden Ring Wiki (Fextralife)',
    },
    {
      url: 'https://eldenring.fandom.com/wiki/Status_Effects',
      title: 'Status Effects — Elden Ring Wiki (Fandom)',
    },
    {
      url: 'https://eldenring.wiki.fextralife.com/Hemorrhage',
      title: 'Hemorrhage — Elden Ring Wiki (Fextralife)',
    },
  ],
  tldr:
    'Every Elden Ring status runs on a buildup meter that procs when full and decays when you stop attacking. Bleed (Hemorrhage) deals a flat value plus 15% of max HP per proc, making it brutal against high-HP bosses. Frostbite is valued not for its 30 + 10% proc but for the 20% damage amplification debuff it applies for 30 seconds. Scarlet Rot is a powerful damage-over-time boss-killer; poison is a much weaker version of the same idea. Sleep, Madness and the instant-kill Death Blight are niche. Defensively, four buried stats govern resistance: Immunity (poison/rot, from Vigor), Robustness (bleed/frost, from Endurance), Focus (sleep/madness, from Mind) and Vitality (death blight).',
  itemList: {
    name: 'Elden Ring Status Effects Ranked',
    items: [
      { name: 'Hemorrhage (Bleed)', description: 'Instant proc of a flat value plus 15% of max HP. The best burst status against high-HP bosses. Scales with Arcane; loves fast multi-hit weapons.' },
      { name: 'Frostbite', description: 'Proc deals 30 + 10% max HP, but the real payoff is a 20% damage-negation debuff for 30 seconds. Amplifies every other source of damage.' },
      { name: 'Scarlet Rot', description: 'Strong damage-over-time that can outdamage everything else against a large health pool. The classic boss-cheese status. Shares Immunity with poison.' },
      { name: 'Death Blight', description: 'Instantly kills the victim when the meter fills, ignoring HP. Rare to inflict; mostly a threat to you. Resisted by Vitality.' },
      { name: 'Sleep', description: 'Disables rather than damages. A slept enemy takes an amplified hit on waking, setting up a big critical. Situational; many bosses are immune.' },
      { name: 'Madness', description: 'Only builds on players and some humanoid NPCs. Procs a stun plus 100 + 15% HP and FP damage. A PvP tool more than a campaign one.' },
      { name: 'Poison', description: 'A weak damage-over-time effect that shares a resistance stat with rot. Mostly useful for build synergy rather than as a win condition.' },
    ],
  },
};
