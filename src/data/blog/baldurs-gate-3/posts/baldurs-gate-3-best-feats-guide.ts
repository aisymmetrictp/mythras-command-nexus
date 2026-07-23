import type { BlogPost } from '../../blogTypes';

export const baldursGate3BestFeatsGuide: BlogPost = {
  slug: 'baldurs-gate-3-best-feats-guide',
  game: 'baldurs-gate-3',
  category: 'advanced-strategy',
  topicCluster: 'bg3-guides',
  tags: ['feats', 'builds', 'character-building', 'combat', 'optimization'],
  title: 'Baldur\'s Gate 3 Best Feats: You Only Get Three of These',
  metaDescription:
    'The best feats in Baldur\'s Gate 3, ranked by what they do: Tavern Brawler doubling Strength, GWM and Sharpshooter -5/+10, Savage Attacker, Alert and Lucky.',
  excerpt:
    'Three feats. Four if you are a Fighter or a Rogue. That is the entire budget for a hundred-hour campaign, and most players spend at least one of them on something that does nothing. Here is what each pick is actually worth.',
  featuredImagePrompt:
    'A tiefling barbarian mid-swing with a greataxe, infernal embers trailing off the blade, lit from below by firelight',
  heroImage: '/images/blog/baldurs-gate-3/baldurs-gate-3-best-feats-guide/karlach-great-weapon-master.webp',
  heroImageAlt:
    'Karlach, the tiefling Barbarian companion in Baldur\'s Gate 3, the archetypal user of Great Weapon Master and Tavern Brawler builds.',
  imageSources: [
    {
      src: '/images/blog/baldurs-gate-3/baldurs-gate-3-best-feats-guide/karlach-great-weapon-master.webp',
      sourceUrl: 'https://bg3.wiki/wiki/File:Karlach_Full_Promo.png',
      license: 'BG3 Wiki (CC BY-SA)',
    },
    {
      src: '/images/blog/baldurs-gate-3/baldurs-gate-3-best-feats-guide/minsc-martial-feats.webp',
      sourceUrl: 'https://bg3.wiki/wiki/File:Minsc.webp',
      license: 'BG3 Wiki (CC BY-SA)',
    },
    {
      src: '/images/blog/baldurs-gate-3/baldurs-gate-3-best-feats-guide/gale-war-caster.webp',
      sourceUrl: 'https://bg3.wiki/wiki/File:Gale_Full_Promo.png',
      license: 'BG3 Wiki (CC BY-SA)',
    },
    {
      src: '/images/blog/baldurs-gate-3/baldurs-gate-3-best-feats-guide/astarion-rogue-extra-feat.webp',
      sourceUrl: 'https://bg3.wiki/wiki/File:Astarion.png',
      license: 'BG3 Wiki (CC BY-SA)',
    },
  ],
  publishDate: '2026-07-22T00:00:00.000Z',
  lastUpdated: '2026-07-22T00:00:00.000Z',
  primaryKeyword: 'baldurs gate 3 best feats',
  secondaryKeywords: [
    'bg3 best feats',
    'baldurs gate 3 feats guide',
    'bg3 tavern brawler',
    'bg3 great weapon master',
    'baldurs gate 3 sharpshooter feat',
    'bg3 half feats list',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'three-feats-four-if-you-are-a-fighter-or-rogue', label: 'Three feats. Four if you are a Fighter or Rogue', level: 2 },
    { id: 'the-2-stat-bump-is-the-floor-not-the-default', label: 'The +2 stat bump is the floor, not the default', level: 2 },
    { id: 'the-damage-feats-that-actually-move-the-number', label: 'The damage feats that actually move the number', level: 2 },
    { id: 'tavern-brawler-is-the-broken-one', label: 'Tavern Brawler is the broken one', level: 3 },
    { id: 'great-weapon-master-the-crit-snowball', label: 'Great Weapon Master: the crit snowball', level: 3 },
    { id: 'sharpshooter-quietly-fixes-a-positioning-problem', label: 'Sharpshooter quietly fixes a positioning problem', level: 3 },
    { id: 'savage-attacker-is-the-lowest-effort-pick-in-the-game', label: 'Savage Attacker is the lowest-effort pick in the game', level: 3 },
    { id: 'feats-that-keep-the-build-alive', label: 'Feats that keep the build alive', level: 2 },
    { id: 'war-caster', label: 'War Caster', level: 3 },
    { id: 'alert', label: 'Alert', level: 3 },
    { id: 'lucky', label: 'Lucky', level: 3 },
    { id: 'tough-and-durable', label: 'Tough and Durable', level: 3 },
    { id: 'the-half-feats-and-the-odd-number-trick', label: 'The half-feats and the odd-number trick', level: 2 },
    { id: 'reaction-feats-sentinel-polearm-master-mage-slayer', label: 'Reaction feats: Sentinel, Polearm Master, Mage Slayer', level: 2 },
    { id: 'feats-that-look-good-and-are-not', label: 'Feats that look good and are not', level: 2 },
    { id: 'feat-plans-by-archetype', label: 'Feat plans by archetype', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `There is a moment in most first playthroughs where the level 4 screen appears, offers a list of thirty-odd feats with names like Dungeon Delver and Moderately Armoured, and the player picks +2 Strength because it is the option that obviously does something. That is not a terrible choice. It is also, in a game where you make this decision a grand total of three times, worth ten minutes of thought.

Feats in Baldur's Gate 3 are not incremental. Two of them roughly double a martial character's damage. One stacks your Strength modifier onto your attack rolls a second time, which is a bigger accuracy swing than anything else in the game. And several do effectively nothing for a party that already has a Rogue.

## Three feats. Four if you are a Fighter or Rogue

Every class takes a feat at **levels 4, 8, and 12**. Fighters get a bonus one at **level 6**; Rogues get a bonus one at **level 10**. That is the entire list. Nobody else gets extras.

Two things follow from that. First, because [the level cap is 12](/blog/baldurs-gate-3/baldurs-gate-3-beginner-guide), there is no "I will pick that up later" — level 12 is later. Second, Fighter and Rogue are unusually strong dip targets for reasons that have nothing to do with their class features, since a Fighter 6 / anything 6 build walks away with four feats instead of three. If you are already weighing splits, our [multiclassing guide](/blog/baldurs-gate-3/baldurs-gate-3-multiclassing-guide) covers which dips are worth the delay.

Also worth stating plainly: **Ability Improvement is itself a feat.** It is not a separate reward you get alongside a feat, the way some players assume from other RPGs. Every +2 you take is a feat you did not take.

## The +2 stat bump is the floor, not the default

Ability Improvement raises one score by 2 or two scores by 1, capped at 20. It is the safe pick and it is genuinely fine — going from 16 to 18 in your attack stat is +1 to hit and +1 damage on every single attack, forever, with no toggles and no conditions.

But run the comparison honestly. A Fighter with Extra Attack swings twice a round. Ability Improvement gives that Fighter +2 damage per round. Great Weapon Master's damage toggle gives the same Fighter up to +20 per round when the attacks land. The gap is not close, and it only widens as you find items that fix your accuracy.

The rule of thumb: take Ability Improvement when you are at an **odd primary score** and one bump lands you on 18 or 20, or when your build has no damage-multiplying feat that fits. Otherwise, the specialist feats win.

![Karlach, the tiefling Barbarian, whose Strength-based melee build is the classic home for Great Weapon Master and Tavern Brawler.](/images/blog/baldurs-gate-3/baldurs-gate-3-best-feats-guide/karlach-great-weapon-master.webp)

## The damage feats that actually move the number

### Tavern Brawler is the broken one

Tavern Brawler raises Strength or Constitution by 1, and then does the thing that breaks the game: **when you make an unarmed attack, use an improvised weapon, or throw something, your Strength modifier is added twice — to the damage roll and to the attack roll.**

Read that again, specifically the attack roll part. Every other damage feat in Baldur's Gate 3 asks you to trade accuracy for damage. Tavern Brawler hands you both. At Strength 20 that is +5 damage and **+5 to hit** on top of what you already had, which pushes your hit chance to the point where you are only missing on a natural 1.

It powers three things: Monk unarmed strikes, Throwzerker Barbarians chucking javelins (and, occasionally, gnolls), and Druids in Wild Shape, whose forms get the bonus except Fire, Water, and Air Myrmidons. One Honour Mode caveat: improvised melee weapon attacks lose the extra damage there, though they keep the attack roll bonus. Throw attacks keep both.

If you are running a Strength-based Monk, Throw Barbarian, or a Moon Druid, this is your level 4 pick and it is not a discussion.

### Great Weapon Master: the crit snowball

Great Weapon Master is two separate passives bundled together, and players consistently underrate the first one.

**Great Weapon Master: Bonus Attack** — when a melee weapon attack lands a critical hit *or* kills a creature, you get another melee weapon attack as a bonus action. Crit *or* kill, not both. And it benefits from Extra Attack. On a Barbarian in Rage swinging into a crowd of goblins, this triggers most rounds, for free, with no downside whatsoever.

**Great Weapon Master: All In** — a toggle that applies a -5 penalty to your attack roll for +10 damage, using a two-handed or versatile weapon you are proficient with.

The toggle is the famous half and the conditional half. Turned on against a high-AC target with no accuracy support, you will whiff and feel foolish. Turned on when you have advantage, a Bless, or a boss with soft AC, it is the single biggest damage swing available to a martial character. Learn to toggle it per fight rather than setting and forgetting.

![Minsc, a two-handed melee companion recruited late in Baldur\'s Gate 3, the kind of character Great Weapon Master is designed around.](/images/blog/baldurs-gate-3/baldurs-gate-3-best-feats-guide/minsc-martial-feats.webp)

### Sharpshooter quietly fixes a positioning problem

Sharpshooter is Great Weapon Master for ranged builds, plus two riders that matter more than people expect:

- **Low Ground** — your ranged attacks are not penalised by high ground rules. Normally shooting up at an enemy on a ledge gives you disadvantage. With this, it does not.
- **All In** — the same -5 to hit for +10 damage toggle, on proficient ranged weapons.
- **Advantage on ranged attacks made within melee range**, which is BG3 papering over the usual 5e penalty for shooting next to someone.

Low Ground is the sleeper. High ground is the dominant tactical mechanic in this game, and Sharpshooter means you stop losing fights because the enemy archer got to the rooftop first.

### Savage Attacker is the lowest-effort pick in the game

Savage Attacker: on melee weapon attacks, you roll your damage dice twice and keep the higher result. Each die independently. No toggle, no penalty, no condition.

That works out to roughly a 25% to 31% damage increase on your weapon dice depending on die size, and since Patch 7 it also covers Sneak Attack, Battle Master manoeuvres, and Bard Blade Flourishes. It stacks with damage riders like Divine Smite on melee attacks.

It is strictly worse than Great Weapon Master on a greataxe build with accuracy support. It is strictly better than Great Weapon Master on a Rogue rolling 6d6 of Sneak Attack, or on a Paladin dumping smites. Match the feat to how your damage is actually delivered.

## Feats that keep the build alive

### War Caster

Advantage on Constitution saving throws to maintain concentration, plus the ability to cast Shocking Grasp as a reaction when an enemy leaves your melee range. If your caster's job is holding a concentration spell — Hold Person, Haste, Spirit Guardians, Hunger of Hadar — this feat is the difference between the spell lasting the fight and lasting one turn. On a build whose entire plan is a single concentration spell, this is a level 4 pick, not a level 12 one.

### Alert

+5 to initiative and you cannot be Surprised. Boring on paper, brutal in practice: going first in Baldur's Gate 3 frequently means a full party round before the enemy acts, and a full party round is often the whole fight. It is the most commonly recommended safety feat for [Honour Mode runs](/blog/baldurs-gate-3/baldurs-gate-3-honour-mode-tips), where losing initiative to an ambush ends the save file.

### Lucky

Three Luck Points per Long Rest. Spend one for advantage on an attack roll, ability check, or saving throw, or to force an enemy to reroll an attack against you. It is one of the very few ways to buy advantage on *any* d20 roll in the game, including the failed save that would otherwise wipe you.

Two things to know. It stacks with Halfling Luck, which is why halflings are quietly excellent here. And there is a known quirk: the toggleable passive defaults to off and cannot be switched on until after that character has made an ability check, used a reaction, or taken a rest.

### Tough and Durable

Tough gives +2 maximum HP per character level, applied retroactively — take it at level 8 and you instantly gain 16 HP, ending at 24 extra by level 12. Durable is the smaller cousin: +1 Constitution and full hit points back on every Short Rest, which is a real reduction in healing spent across a party that short rests twice per Long Rest.

Neither wins a damage race. Both are legitimate on a frontliner in a run where dying is expensive.

![Gale, a Wizard companion, the archetypal War Caster and Elemental Adept candidate in Baldur\'s Gate 3.](/images/blog/baldurs-gate-3/baldurs-gate-3-best-feats-guide/gale-war-caster.webp)

## The half-feats and the odd-number trick

Because ability modifiers move on even numbers, a score of 17 and a score of 16 are mechanically identical — both give +3. Any odd score is a wasted point sitting there. Half-feats fix that: they give a real effect *and* +1 to an ability, so you convert dead points into a modifier while getting something else for free.

The ones that carry a +1 in BG3: **Actor** (Charisma, plus expertise in Deception and Performance), **Athlete** (Strength or Dexterity, plus faster standing and +50% jump distance), **Durable** (Constitution), **Heavily Armoured** and **Heavy Armour Master** (Strength), **Lightly Armoured** and **Moderately Armoured** (Strength or Dexterity), **Performer** (Charisma), **Resilient** (any ability, plus saving throw proficiency in it), **Tavern Brawler** (Strength or Constitution), and **Weapon Master** (Strength or Dexterity, plus four weapon proficiencies).

**Resilient: Constitution** is the standout. Proficiency in Constitution saves plus a +1 that usually turns an odd Con into a real modifier is the concentration-caster's other answer alongside War Caster — and there is no rule against running both.

**Actor** is the pick most parties overlook. If your protagonist is the face, expertise in Deception doubles your proficiency bonus on the checks that gate the game's best dialogue outcomes — worth remembering when you decide [which class leads your party](/blog/baldurs-gate-3/best-baldurs-gate-3-classes-for-beginners).

## Reaction feats: Sentinel, Polearm Master, Mage Slayer

These three are for characters who want to control space rather than delete a target.

**Sentinel** does three things: a reaction attack when an enemy in your melee range attacks an ally, opportunity attacks that drop a target's movement to zero, and advantage on those opportunity attacks. It is the closest thing to a tank tool in a game with no aggro system.

**Polearm Master** gives you a bonus action attack with the butt end of a glaive, halberd, pike, quarterstaff, or spear, plus an opportunity attack when an enemy *enters* your reach rather than leaves it. Paired with Sentinel on a reach weapon, enemies stop moving through your frontline entirely.

**Mage Slayer** gives advantage on saves against nearby casters, a reaction attack against a caster who casts within melee range, and disadvantage on their concentration saves when you hit them. Situational, but Act 2 and Act 3 are stuffed with casters.

The catch on all three: you get one reaction per round. Loading a character up with three reaction feats does not give them three reactions.

![Astarion, a Rogue companion, whose class grants a fourth feat at level 10.](/images/blog/baldurs-gate-3/baldurs-gate-3-best-feats-guide/astarion-rogue-extra-feat.webp)

## Feats that look good and are not

- **Dungeon Delver.** Advantage on Perception checks to spot hidden objects and on saves against traps, plus trap damage resistance — all of which any party with a high-Perception character already gets for free.
- **Ritual Caster.** Two ritual spells. Long Rests are cheap here and Camp Supplies are abundant, so casting without a slot is worth far less than it is at a tabletop.
- **Magic Initiate.** Two cantrips and one 1st-level spell per Long Rest. Almost never better than a stat bump on a character who already casts.
- **Spell Sniper.** Lowers the crit threshold for spell attacks by 1 — but only for spell *attack rolls*, not the save-based spells that make up most of a caster's best list.
- **Shield Master.** +2 to Dexterity saving throws and a reaction to reduce damage on them. The wiki flags bugs on this one, and the effect is small even when it works.

None of these are broken. They are just not three of the best ones, and three is all you have.

## Feat plans by archetype

- **Strength melee (Barbarian, Fighter, Paladin):** Great Weapon Master at 4, Ability Improvement at 8 to reach 20 Strength, Savage Attacker or Sentinel at 12.
- **Throw or unarmed (Throwzerker, Monk):** Tavern Brawler at 4, Ability Improvement at 8, Alert or Ability Improvement at 12.
- **Ranged (Ranger, Fighter archer, Rogue):** Sharpshooter at 4, Ability Improvement at 8, Alert at 12. Rogues slot Savage Attacker into their level 10 bonus feat.
- **Concentration caster (Wizard, Druid, Cleric):** War Caster or Resilient: Constitution at 4, Ability Improvement at 8, Alert or Lucky at 12.
- **Charisma caster and party face (Bard, Sorcerer, Warlock):** Ability Improvement at 4, Actor or War Caster at 8, Alert at 12.
- **Honour Mode, any build:** slot Alert somewhere. Losing initiative is how single-save runs die.

## Quick Action Checklist

- You get feats at **levels 4, 8, and 12** — plus **level 6 for Fighters** and **level 10 for Rogues**. That is the whole budget.
- **Ability Improvement is a feat**, not a freebie alongside one.
- Take **Tavern Brawler** on any unarmed, throwing, or Wild Shape build. Double Strength on the attack roll is the biggest accuracy swing in the game.
- Take **Great Weapon Master** on two-handed melee, and treat All In as a per-fight toggle, not a permanent setting.
- Take **Sharpshooter** on ranged builds — the Low Ground clause alone removes the high-ground disadvantage penalty.
- Take **Savage Attacker** when your damage comes from many dice: Sneak Attack, smites, manoeuvres.
- Take **War Caster** or **Resilient: Constitution** on any character whose plan is holding one concentration spell.
- **Alert** (+5 initiative, no Surprise) is the safest slot in an Honour Mode run.
- Use **half-feats** to convert odd ability scores into real modifiers instead of burning a full Ability Improvement.
- Do not stack three reaction feats on one character. You still only get **one reaction per round**.`,
  faq: [
    {
      question: 'How many feats do you get in Baldur\'s Gate 3?',
      answer:
        'Every class selects a feat at levels 4, 8, and 12, so three in a standard build. Fighters get one additional feat at level 6 and Rogues get one at level 10, bringing those classes to four. Because the level cap is 12, there are no further feat slots, and Ability Improvement counts as one of these feats rather than being granted alongside them.',
    },
    {
      question: 'What is the single best feat in Baldur\'s Gate 3?',
      answer:
        'Tavern Brawler, for any build that uses unarmed strikes, thrown weapons, or Wild Shape. It adds your Strength modifier a second time to both the damage roll and the attack roll, which means at Strength 20 you gain +5 damage and +5 to hit. Every other damage feat trades accuracy for damage; this one gives you both, which is why the wiki flags it as one of the strongest options in the game.',
    },
    {
      question: 'Is Great Weapon Master worth it in BG3?',
      answer:
        'Yes, but treat it as two separate things. The bonus attack half triggers whenever a melee attack lands a critical hit or kills a creature, costs nothing, and benefits from Extra Attack. The All In toggle trades -5 accuracy for +10 damage on two-handed or versatile weapons you are proficient with, and is only correct when you have advantage, accuracy buffs like Bless, or a low-AC target. Toggle it per encounter.',
    },
    {
      question: 'Should I take Ability Improvement or a real feat?',
      answer:
        'Take Ability Improvement when a +2 lands your primary score on 18 or 20, or when no damage feat fits your build. Otherwise a specialist feat usually wins: +2 to a stat gives a martial character roughly +2 damage per round, while Great Weapon Master or Sharpshooter can add up to +20 per round on a character with Extra Attack.',
    },
    {
      question: 'What are half-feats in Baldur\'s Gate 3?',
      answer:
        'Half-feats grant a mechanical effect plus a +1 ability score increase. The list includes Actor, Athlete, Durable, Heavily Armoured, Heavy Armour Master, Lightly Armoured, Moderately Armoured, Performer, Resilient, Tavern Brawler, and Weapon Master. They are most valuable when you are sitting on an odd ability score, since odd scores give no extra modifier and the +1 converts that wasted point into a real bonus.',
    },
    {
      question: 'Is Savage Attacker good in BG3?',
      answer:
        'It is very good on builds that roll a lot of damage dice. Savage Attacker rolls each of your melee weapon damage dice twice and keeps the higher result, which is roughly a 25 to 31 percent increase depending on die size. Since Patch 7 it also applies to Sneak Attack, Battle Master manoeuvres, and Bard Blade Flourishes, and it works on melee damage riders such as Divine Smite.',
    },
    {
      question: 'Which feat is best for Honour Mode?',
      answer:
        'Alert. It grants +5 to initiative and immunity to being Surprised, and in a single-save run the most common way to lose a party is being ambushed and eating a full enemy round before you act. Lucky is the other strong Honour Mode pick, since three Luck Points per Long Rest let you buy advantage on the specific saving throw or attack roll that would otherwise end the run.',
    },
    {
      question: 'Can I change a feat after choosing it?',
      answer:
        'Yes. Withers, the undead figure you recruit from the Dank Crypt near the starting beach, respecs any party member for 100 gold. That resets the character to level 1 and lets you re-pick class, ability scores, and every feat. There is no reason to restart a save over a feat choice.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/baldurs-gate-3', anchor: 'Baldur\'s Gate 3 coverage hub' },
    { href: '/blog/baldurs-gate-3/baldurs-gate-3-beginner-guide', anchor: 'Baldur\'s Gate 3 beginner guide' },
    { href: '/blog/baldurs-gate-3/baldurs-gate-3-multiclassing-guide', anchor: 'Baldur\'s Gate 3 multiclassing guide' },
    { href: '/blog/baldurs-gate-3/baldurs-gate-3-honour-mode-tips', anchor: 'Baldur\'s Gate 3 Honour Mode tips' },
    { href: '/blog/baldurs-gate-3/best-baldurs-gate-3-classes-for-beginners', anchor: 'Best Baldur\'s Gate 3 classes for beginners' },
  ],
  externalSources: [
    {
      url: 'https://bg3.wiki/wiki/Feats',
      title: 'BG3 Wiki — full feat list and level progression',
    },
    {
      url: 'https://bg3.wiki/wiki/Tavern_Brawler',
      title: 'BG3 Wiki — Tavern Brawler mechanics and Honour Mode notes',
    },
    {
      url: 'https://bg3.wiki/wiki/Savage_Attacker',
      title: 'BG3 Wiki — Savage Attacker damage scaling and Patch 7 coverage',
    },
    {
      url: 'https://bg3.wiki/wiki/Great_Weapon_Master',
      title: 'BG3 Wiki — Great Weapon Master bonus attack and All In toggle',
    },
  ],
  tldr:
    'You get three feats in Baldur\'s Gate 3 — at levels 4, 8, and 12 — plus a fourth for Fighters at level 6 and Rogues at level 10, and Ability Improvement counts as one of them. Tavern Brawler is the strongest single feat because it adds your Strength modifier twice to both damage and attack rolls on unarmed, thrown, and Wild Shape attacks. Great Weapon Master and Sharpshooter offer a -5 to hit for +10 damage toggle plus free extras, Savage Attacker rerolls melee damage dice for a 25-31 percent bump, and Alert (+5 initiative) is the safest Honour Mode pick. Use half-feats to fix odd ability scores instead of spending a full Ability Improvement.',
};
