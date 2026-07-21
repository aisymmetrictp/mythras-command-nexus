import type { BlogPost } from '../../blogTypes';

export const baldursGate3HonourModeTips: BlogPost = {
  slug: 'baldurs-gate-3-honour-mode-tips',
  game: 'baldurs-gate-3',
  category: 'advanced-strategy',
  topicCluster: 'bg3-guides',
  tags: ['honour-mode', 'tactician', 'difficulty', 'builds', 'combat', 'legendary-actions'],
  title: 'Baldur\'s Gate 3 Honour Mode Tips: How to Survive the One Save',
  metaDescription:
    'Baldur\'s Gate 3 Honour Mode tips built on real mechanics: the single save, Legendary Actions, the +2 enemy tax, and the control-first builds that survive it.',
  excerpt:
    'Honour Mode is not just Tactician with a scary save file. Bosses get Legendary Actions, enemies hit +2 harder, and one party wipe deletes the run. Here is how to actually finish it.',
  featuredImagePrompt:
    'A lone adventurer bracing against a towering infernal devil mid-battle, golden dice glinting in the corner, harsh red light and long shadows',
  heroImage: '/images/blog/baldurs-gate-3/baldurs-gate-3-honour-mode-tips/karlach-honour-mode-hero.webp',
  heroImageAlt:
    'Karlach charging into combat in Baldur\'s Gate 3 — in Honour Mode every enemy she faces gets +2 to hit and Legendary Actions, so damage races are far deadlier.',
  imageSources: [
    {
      src: '/images/blog/baldurs-gate-3/baldurs-gate-3-honour-mode-tips/karlach-honour-mode-hero.webp',
      sourceUrl: 'https://bg3.wiki/wiki/File:Karlach_Promo_Wallpaper.webp',
      license: 'BG3 Wiki (CC BY-SA)',
    },
    {
      src: '/images/blog/baldurs-gate-3/baldurs-gate-3-honour-mode-tips/raphael-house-of-hope.webp',
      sourceUrl: 'https://bg3.wiki/wiki/File:Raphael_Model.png',
      license: 'BG3 Wiki (CC BY-SA)',
    },
    {
      src: '/images/blog/baldurs-gate-3/baldurs-gate-3-honour-mode-tips/withers-resurrection.webp',
      sourceUrl: 'https://bg3.wiki/wiki/File:Withers_Model.png',
      license: 'BG3 Wiki (CC BY-SA)',
    },
    {
      src: '/images/blog/baldurs-gate-3/baldurs-gate-3-honour-mode-tips/shadowheart-control-cleric.webp',
      sourceUrl: 'https://bg3.wiki/wiki/File:Shadowheart-promotional.jpg',
      license: 'BG3 Wiki (CC BY-SA)',
    },
  ],
  publishDate: '2026-07-21T00:00:00.000Z',
  lastUpdated: '2026-07-21T00:00:00.000Z',
  primaryKeyword: 'baldurs gate 3 honour mode tips',
  secondaryKeywords: [
    'bg3 honour mode guide',
    'baldurs gate 3 honour mode builds',
    'bg3 honour mode legendary actions',
    'how to beat honour mode bg3',
    'baldurs gate 3 golden dice',
    'bg3 honour mode vs tactician',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'what-honour-mode-actually-is', label: 'What Honour Mode actually is', level: 2 },
    { id: 'the-single-save-is-the-real-boss', label: 'The single save is the real boss', level: 2 },
    { id: 'what-it-stacks-on-top-of-tactician', label: 'What it stacks on top of Tactician', level: 2 },
    { id: 'legendary-actions-rewrite-the-boss-fights', label: 'Legendary Actions rewrite the boss fights', level: 3 },
    { id: 'smarter-deadlier-enemy-ai', label: 'Smarter, deadlier enemy AI', level: 3 },
    { id: 'control-beats-damage-in-every-fight', label: 'Control beats damage in every fight', level: 2 },
    { id: 'the-buffs-that-carry-a-run', label: 'The buffs that carry a run', level: 2 },
    { id: 'squeeze-every-drop-of-action-economy', label: 'Squeeze every drop of action economy', level: 2 },
    { id: 'play-around-the-permadeath', label: 'Play around the permadeath', level: 2 },
    { id: 'the-fights-that-actually-end-runs', label: 'The fights that actually end runs', level: 2 },
    { id: 'quick-honour-mode-checklist', label: 'Quick Honour Mode Checklist', level: 2 },
  ],
  content: `Most Honour Mode runs do not die to Raphael or Myrkul. They die to a bad turn in Act 1 — a failed Hold Person, a spellcaster left in the open, a devourer of a gnoll pack that rolled hot — and because there is only one save, that turn is the whole run. That is the thing to understand before you press start: Honour Mode is not a harder version of the game so much as a game where mistakes are permanent and the enemy AI is actively trying to create them.

The reward for finishing is the **golden D20 skin** ("Shining Honour") and the **Foehammer** achievement, which is why every BG3 player eventually gets the itch to try it. The good news is that Honour Mode is beatable by anyone who plays methodically. The bad news is that "methodically" is doing a lot of work in that sentence. Here is the actual playbook.

## What Honour Mode actually is

Honour Mode runs on the **Tactician** ruleset with a stack of extra rules bolted on. So everything true of Tactician is true here: enemies have roughly **20–30% more maximum HP** (bosses get bigger boosts), every enemy gets **+2 to attack rolls and +2 to the save DCs of their spells and abilities**, a Long Rest costs **80 Camp Supplies** instead of 40, and the AI plays for keeps — it prioritises your squishy casters and moves to finish off downed party members instead of politely attacking your tank.

On top of that baseline, Honour Mode adds the two things that define it: a **single save file** and **Legendary Actions on around 30 boss fights.** Everything in this guide is a response to one of those two facts.

If you have never touched the higher difficulties, read our [beginner guide](/blog/baldurs-gate-3/baldurs-gate-3-beginner-guide) first — Honour Mode assumes you already know how advantage, height, and Camp Supplies work, and it punishes you for the gaps.

## The single save is the real boss

The scariest number in Honour Mode is one. One save file, for the entire campaign. The game overwrites it constantly — when you return to the main menu, quit, Alt+F4, quicksave, or autosave — and you cannot load it from inside a session. There is no reloading a fight that went sideways. There is no scumming a dialogue check.

When your whole party goes down, the game gives you exactly two options: **continue in Custom mode**, which permanently ends the Honour attempt and forfeits the golden dice, or **delete the save** and start over. That is it. A single unlucky encounter can erase eighty hours.

This changes how you play in one enormous way: **you stop treating combat as recoverable and start treating it as something to win before it starts.** Scout every area in turn-based mode (toggle it with the button near your portraits) so you approach fights on your terms. Never walk a full party into a fog-of-war room. And because you cannot save-scum a Charisma check anymore, the dialogue-prep habits from the [beginner guide](/blog/baldurs-gate-3/baldurs-gate-3-beginner-guide) — leading with your face character, casting Guidance, spending Inspiration to reroll — go from "nice to have" to load-bearing.

![Raphael, the devil boss of the House of Hope, one of Honour Mode's toughest Legendary Action fights.](/images/blog/baldurs-gate-3/baldurs-gate-3-honour-mode-tips/raphael-house-of-hope.webp)

## What it stacks on top of Tactician

### Legendary Actions rewrite the boss fights

This is the mechanical heart of Honour Mode. Roughly **30 boss encounters are re-tuned to give the boss Legendary Actions** — extra actions the boss takes **at the end of another creature's turn**, outside the normal one-action-per-round economy. A boss with a Legendary Action can teleport, summon adds, unleash an AoE, or heal itself on your turn, not just its own.

The practical consequence: bosses now have far more effective action economy than they used to, which flips the math on the "just out-damage it" strategy that carries you through Balanced. You cannot trade blows evenly with something that acts three or four times per round. You have to either **burst it down before the Legendary Actions matter** or **shut the actions off** — many Legendary Actions can be denied by knocking the boss prone, stunning it, or stripping its concentration. A held or paralysed boss is not taking Legendary Actions.

### Smarter, deadlier enemy AI

The +2 to enemy attack rolls sounds small until you remember how many attacks land per fight. Across a long encounter it is a huge cumulative swing, and it stacks with the AI's habit of dogpiling your Wizard. Rank-and-file enemies also finish off downed characters rather than moving on, so a party member at 0 HP is not "stable and fine," it is a target with a countdown.

The counter is positional discipline. Keep casters out of line-of-sight until they act, hold chokepoints so enemies can only approach a few at a time, and pick up downed allies **immediately** — a thrown healing potion or a Cleric's bonus-action Healing Word is often worth more than another attack.

## Control beats damage in every fight

If you take one strategic idea into Honour Mode, make it this: **a condition that removes an enemy from the fight is worth more than any burst of damage.** Damage kills one creature. Control neutralises a group and hands your whole party advantage while it does.

The workhorses:

- **Hold Person** (humanoids) and **Hold Monster** (anything) paralyse the target. Paralysis is the single most broken condition in the game because **any melee attack against a paralysed creature within range is an automatic critical hit.** Land Hold Person on a boss, walk your Fighter up, and the fight is effectively over.
- **Command** is a first-level spell that can make an enemy drop prone, halt, or drop its weapon for a turn — obscene value for the slot.
- **Grease, Web, and Hunger of Hadar** carpet an area in a condition that costs enemies their turn or their footing, and prone enemies hand your melee advantage.
- **Reverberation and Radiating Orb** gear lets martial characters stack debuffs that shred enemy accuracy and eventually knock them prone just by hitting them — a way for non-casters to contribute control.

A Cleric or Druid is the backbone of a control party, which is exactly why we rate them so highly in our [best beginner classes](/blog/baldurs-gate-3/best-baldurs-gate-3-classes-for-beginners) ranking. They bring the crowd control, the pre-fight buffs, and the ability to yank a downed ally back up without burning a Scroll of Revivify.

![Shadowheart, a Cleric companion whose control spells and healing anchor an Honour Mode party.](/images/blog/baldurs-gate-3/baldurs-gate-3-honour-mode-tips/shadowheart-control-cleric.webp)

## The buffs that carry a run

Honour Mode is where consumables and pre-fight setup stop being optional. The margins are thin enough that a single buff decides encounters.

- **Bless** adds **1d4 to attack rolls and saving throws** for up to three allies. It quietly cancels most of the enemy's +2 attack advantage and helps you pass the saves that Legendary Action AoEs throw at you. Have a Cleric or Paladin open big fights with it.
- **Elixirs of Giant Strength** set your Strength to a fixed high number (Cloud Giant sets it to 27), turning any martial character into a wrecking ball for the price of a drink. You can down one every morning after a Long Rest.
- **Elixir of Bloodlust** grants **5 temporary hit points and an extra Action once per turn when you kill a foe** — snowball fuel for a character who can reliably drop enemies. One important Honour Mode footnote: that bonus Action does **not** benefit from Extra Attack here, so a martial only gets a single extra swing from it rather than a full attack sequence. Still excellent, just not the infinite-turn engine it is on lower difficulties.
- **Arrows, grenades, and coatings** are your emergency buttons. An Arrow of Many Targets or a well-placed alchemist's fire can rescue a turn that positioning alone cannot.

Stack these before you walk in. Buffing mid-fight costs actions you cannot spare.

## Squeeze every drop of action economy

Because bosses now cheat the action economy with Legendary Actions, you have to win the economy war everywhere else.

- **Spend your bonus action every single turn.** Off-hand attacks, Shove (a bonus action here, and shoving an enemy off a ledge deals scaling fall damage), Jump to high ground, thrown potions, a Rogue's Cunning Action. A wasted bonus action is a wasted 30% of the turn.
- **Tavern Brawler** is the strongest feat in the game for the right build. It adds your Strength modifier to attack and damage rolls **a second time** for unarmed strikes, thrown weapons, and improvised weapons. On a Throwing Barbarian or an Open Hand Monk, paired with an Elixir of Giant Strength, it produces damage numbers that trivialise Honour Mode's inflated enemy HP.
- **Great Weapon Master and Sharpshooter** trade -5 to hit for +10 damage. In a run where you can stack Bless, advantage from height, and Faerie Fire, that accuracy penalty gets erased and the +10 stays.
- **Concentration is your budget.** You get one concentration spell at a time and taking damage forces a Constitution save to keep it. Protect the character holding your Hold Person or your Bless — losing concentration mid-fight is how good runs unravel.

Two well-timed level dips can also multiply your action economy; our [multiclassing guide](/blog/baldurs-gate-3/baldurs-gate-3-multiclassing-guide) breaks down which combinations are worth the delay, and note that Honour Mode allows multiclassing by default where Explorer disables it.

## Play around the permadeath

You cannot reload, but you can build a safety net.

**Recruit Withers immediately** — the skeletal figure in the Dank Crypt near the starting beach. In an Honour run he is not a convenience, he is insurance. Respec costs **100 gold**, resurrection costs **200 gold per fallen companion**, and both are trivial sums by mid-Act 1. If a character dies but the fight is won, Withers undoes it. Keep at least one **Scroll of Revivify** on every party member so a mid-fight death does not become a party wipe.

![Withers, the undead figure who respecs characters for 100 gold and resurrects the dead for 200 in Baldur's Gate 3.](/images/blog/baldurs-gate-3/baldurs-gate-3-honour-mode-tips/withers-resurrection.webp)

A few more survival habits:

- **Split before you approach.** Send one scout ahead in turn-based mode to trigger dialogue or spot the ambush, with the rest of the party positioned to open with an alpha strike.
- **Keep an escape plan.** Misty Step, the Dash action, and simple retreat are legitimate tools. There is no shame in pulling back, healing, and re-engaging on better ground — the AI's aggression can be baited.
- **Long Rest generously.** Yes, it costs 80 supplies, but a Partial Rest that leaves you at half resources is how you lose the next fight. You will end Act 1 swimming in food if you loot casually. Rest to full before anything that looks like a boss arena.

## The fights that actually end runs

The Legendary Action encounters are the ones people remember — Raphael in the House of Hope, the Netherbrain finale, Myrkul and the Apostle in Act 2 — and they deserve full buffs, full resources, and a control-first plan. But the encounters that actually end most runs are the early, scrappy ones before your build comes online: the goblin camp if you fight all three leaders at once, the Phase Spider Matriarch over the chasm, the gnoll pack at the Risen Road, the Grym forge-golem if you do not use the hammer trap.

The pattern is the same every time: those fights punish overextension and reward patience. Break line of sight, take the high ground, open with control, and never commit your whole party until you know what is in the room. Do that, keep Withers stocked with resurrection gold, and the golden dice are yours.

## Quick Honour Mode Checklist

- **One save, no reloads.** Scout in turn-based mode and win fights before they start; a wipe ends the run.
- **It is Tactician-plus.** Enemies have +20–30% HP, **+2 to hit and +2 spell DC**, hunt your casters, and finish off downed allies.
- **Bosses get Legendary Actions** (~30 fights). Burst them fast or lock them down — a paralysed boss takes no Legendary Actions.
- **Control over damage.** Hold Person/Monster, Command, Grease, and Web decide fights; paralysis makes melee hits auto-crit.
- **Buff before you enter.** Bless cancels the enemy +2, Elixirs of Giant Strength and Bloodlust carry martials — but Bloodlust's bonus Action skips Extra Attack in Honour Mode.
- **Win the action economy.** Spend every bonus action; Tavern Brawler and the -5/+10 feats push damage past inflated HP.
- **Protect concentration.** One spell at a time, and damage can break it — guard the character holding your control spell.
- **Recruit Withers first.** Respec is 100 gold, resurrection 200; keep Revivify scrolls on everyone.
- **Long Rest to full** before boss arenas even though it costs 80 supplies — a Partial Rest loses the next fight.
- **The early game is the killer.** Most runs die in Act 1, not to the famous bosses. Play patient until your build comes online.`,
  faq: [
    {
      question: 'Is Honour Mode harder than Tactician in Baldur\'s Gate 3?',
      answer:
        'Yes. Honour Mode uses the entire Tactician ruleset — enemies have roughly 20–30% more max HP, get +2 to attack rolls and +2 to their spell save DCs, and the AI targets your casters and finishes off downed characters — then adds two things Tactician does not have: a single save file with no reloading, and Legendary Actions on around 30 boss fights. The raw combat is slightly harder; the permanence is what makes it a different game.',
    },
    {
      question: 'What do you get for beating Honour Mode?',
      answer:
        'Completing Honour Mode grants an in-game golden D20 dice skin called "Shining Honour" that you can use in any future playthrough, plus the "Foehammer" achievement. There is no gameplay reward beyond the cosmetic dice and the bragging rights — the challenge itself is the point.',
    },
    {
      question: 'What happens if my party dies in Honour Mode?',
      answer:
        'You get two options and no third. You can continue the campaign in Custom mode, which permanently ends the Honour Mode attempt and forfeits the golden dice reward, or you can delete the save entirely and start over. You cannot reload an earlier point, because Honour Mode keeps only a single save file that overwrites whenever you quit, return to the menu, or autosave.',
    },
    {
      question: 'What are Legendary Actions in BG3 Honour Mode?',
      answer:
        'Legendary Actions are extra actions that around 30 re-tuned bosses can take at the end of another creature\'s turn, outside the normal one-action-per-round economy. A boss might teleport, summon reinforcements, heal, or hit your party on your turn as well as its own. The best counters are bursting the boss down quickly or disabling it with control effects like paralysis, stun, or prone, since a disabled boss cannot use its Legendary Actions.',
    },
    {
      question: 'What are the best builds for Honour Mode?',
      answer:
        'Control-and-buff casters (Cleric, Druid, or a Wizard leaning on Hold Person, Command, and Web) plus high-damage martials that abuse Tavern Brawler are the safest core. A Throwing Barbarian or Open Hand Monk with Tavern Brawler and an Elixir of Giant Strength deletes single targets, while Sharpshooter or Great Weapon Master builds trade accuracy for damage that Bless and high ground pay back. The key is that at least one party member brings reliable crowd control.',
    },
    {
      question: 'Why is control more important than damage in Honour Mode?',
      answer:
        'Because enemies have inflated HP and bosses get extra actions, trying to win a straight damage race is a losing proposition. A condition like paralysis or prone removes an enemy from the fight and hands your entire party advantage, and it shuts off a boss\'s Legendary Actions. Hold Person is especially strong: any melee attack against a paralysed target within range is an automatic critical hit.',
    },
    {
      question: 'Can you change the difficulty during an Honour Mode run?',
      answer:
        'No. Honour Mode locks its ruleset for the entire campaign — you cannot lower it to Balanced or switch it off. Your only exit is converting to Custom mode after a party wipe, which ends the Honour attempt for good. If you want a Tactician-difficulty experience with the ability to reload, start a Custom game set to the Honour ruleset with the single-save toggle turned off instead.',
    },
    {
      question: 'Should I do Honour Mode on my first playthrough?',
      answer:
        'No. Honour Mode assumes fluency with advantage, height, Camp Supplies, concentration, and boss patterns, and one mistake can erase eighty hours. Play a full run on Balanced or Tactician first so you know where the dangerous encounters are and how your build performs, then take that knowledge into Honour Mode.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/baldurs-gate-3', anchor: 'Baldur\'s Gate 3 coverage hub' },
    { href: '/blog/baldurs-gate-3/baldurs-gate-3-beginner-guide', anchor: 'Baldur\'s Gate 3 beginner guide' },
    { href: '/blog/baldurs-gate-3/best-baldurs-gate-3-classes-for-beginners', anchor: 'Best Baldur\'s Gate 3 classes for beginners' },
    { href: '/blog/baldurs-gate-3/baldurs-gate-3-multiclassing-guide', anchor: 'Baldur\'s Gate 3 multiclassing guide' },
  ],
  externalSources: [
    {
      url: 'https://bg3.wiki/wiki/Honour_Mode',
      title: 'BG3 Wiki — Honour Mode rules, single save, and rewards',
    },
    {
      url: 'https://bg3.wiki/wiki/Difficulty',
      title: 'BG3 Wiki — Tactician and Honour difficulty modifiers',
    },
    {
      url: 'https://bg3.wiki/wiki/Tavern_Brawler',
      title: 'BG3 Wiki — Tavern Brawler feat',
    },
  ],
  tldr:
    'Honour Mode runs the Tactician ruleset — enemies with +20–30% HP, +2 to hit and +2 spell DC, and AI that hunts your casters — plus two run-defining rules: one save file with no reloads, and Legendary Actions on about 30 bosses. Win by controlling fights instead of racing damage (Hold Person paralyses and makes melee hits auto-crit), buffing before you enter (Bless cancels the enemy +2), abusing action economy with Tavern Brawler, and recruiting Withers early for 100-gold respecs and 200-gold resurrections. Most runs die in Act 1, not to the famous bosses, so play patient until your build comes online.',
};
