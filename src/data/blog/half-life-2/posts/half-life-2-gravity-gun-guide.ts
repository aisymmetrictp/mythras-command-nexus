import type { BlogPost } from '../../blogTypes';

export const halfLife2GravityGunGuide: BlogPost = {
  slug: 'half-life-2-gravity-gun-guide',
  game: 'half-life-2',
  category: 'game-guides',
  topicCluster: 'hl2-combat',
  tags: ['half-life-2', 'gravity-gun', 'combat', 'physics', 'valve'],
  title: 'Half-Life 2 Gravity Gun Guide: Every Trick It Can Do',
  metaDescription:
    'A Half-Life 2 gravity gun guide: primary vs secondary fire, which props hit hardest, manhack melee, hopper mines, antlion guards, and the super gravity gun.',
  excerpt:
    'Most players finish Half-Life 2 using the gravity gun to stack crates and clear debris. It also one-shots Combine soldiers, disarms hopper mines, turns manhacks into a chainsaw, and flips antlion guards onto their weak side. Here is the full toolkit.',
  featuredImagePrompt:
    'The Half-Life 2 gravity gun in first-person view, orange energy crackling between its three prongs, held up in a dim industrial corridor',
  heroImage: '/images/blog/half-life-2/half-life-2-gravity-gun-guide/gravity-gun.webp',
  heroImageAlt: 'The Zero Point Energy Field Manipulator, the Half-Life 2 gravity gun, in its standard orange-energy state.',
  imageSources: [
    {
      src: '/images/blog/half-life-2/half-life-2-gravity-gun-guide/gravity-gun.webp',
      sourceUrl: 'https://half-life.fandom.com/wiki/Zero_Point_Energy_Field_Manipulator',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/half-life-2/half-life-2-gravity-gun-guide/gravity-gun-stored.webp',
      sourceUrl: 'https://half-life.fandom.com/wiki/Zero_Point_Energy_Field_Manipulator',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/half-life-2/half-life-2-gravity-gun-guide/super-gravity-gun.webp',
      sourceUrl: 'https://half-life.fandom.com/wiki/Zero_Point_Energy_Field_Manipulator',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/half-life-2/half-life-2-gravity-gun-guide/antlion-guard.webp',
      sourceUrl: 'https://half-life.fandom.com/wiki/Antlion_Guard',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/half-life-2/half-life-2-gravity-gun-guide/manhack.webp',
      sourceUrl: 'https://half-life.fandom.com/wiki/Manhack',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-20T00:00:00.000Z',
  lastUpdated: '2026-07-20T00:00:00.000Z',
  primaryKeyword: 'half-life 2 gravity gun guide',
  secondaryKeywords: [
    'zero point energy field manipulator',
    'half-life 2 super gravity gun',
    'how to use gravity gun half-life 2',
    'half-life 2 antlion guard strategy',
    'gravity gun manhack trick',
    'half-life 2 physics combat',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'where-you-get-it-and-what-it-really-is', label: 'Where you get it and what it really is', level: 2 },
    { id: 'primary-fire-versus-secondary-fire', label: 'Primary fire versus secondary fire', level: 2 },
    { id: 'your-ammunition-is-the-room-you-are-standing-in', label: 'Your ammunition is the room you are standing in', level: 2 },
    { id: 'props-that-hit-hard', label: 'Props that hit hard', level: 3 },
    { id: 'props-that-waste-your-time', label: 'Props that waste your time', level: 3 },
    { id: 'the-organic-matter-rule-and-its-exceptions', label: 'The organic matter rule and its exceptions', level: 2 },
    { id: 'turning-combine-hardware-against-the-combine', label: 'Turning Combine hardware against the Combine', level: 2 },
    { id: 'manhacks-as-a-melee-weapon', label: 'Manhacks as a melee weapon', level: 3 },
    { id: 'hopper-mines-and-rollermines', label: 'Hopper mines and rollermines', level: 3 },
    { id: 'beating-the-antlion-guard-with-physics', label: 'Beating the antlion guard with physics', level: 2 },
    { id: 'non-combat-uses-that-solve-most-puzzles', label: 'Non-combat uses that solve most puzzles', level: 2 },
    { id: 'the-super-gravity-gun-in-our-benefactors', label: 'The super gravity gun in Our Benefactors', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `There is a moment in Ravenholm, usually about four minutes in, when a player who has been rationing pistol ammo finally notices the circular sawblade bolted to the wall. They pull it off with secondary fire, punt it into a zombie, and it cuts the thing in half. Then they walk over, pick the same blade back up, and do it again. And again. Free, infinite, reusable lethality that was sitting in the level the whole time.

That is the Zero Point Energy Field Manipulator working as intended, and most players never push it further than that. The gravity gun is treated as a puzzle tool with a fun combat mode. It is closer to the opposite: it is one of the highest-damage weapons in Half-Life 2, and it has a list of specific, verifiable interactions that trivialize encounters people otherwise grind through.

This is the full list.

## Where you get it and what it really is

You receive the gravity gun in Chapter 5, **Black Mesa East**, where Alyx Vance introduces it shortly after you arrive. It was built by her father, **Eli Vance**, and at its core is a substance that appears to be a Xen crystal. Officially it is a tractor-beam device designed for handling hazardous materials, though as Alyx puts it, mostly it gets used for heavy lifting.

Mechanically, its rate of fire sits around **120 RPM**, but that number is misleading in practice. Because it fires physics props rather than ammunition, there is effectively no limit to how many times you can shoot it. The real constraint is that you have to reload by grabbing a new object after every shot.

Alongside the crowbar, it is Gordon Freeman's signature weapon, and it is carried by more than just him across the series: Alyx uses one, Dog has one integrated into his arm, and Wallace Breen briefly holds one during the Dark Energy chapter.

## Primary fire versus secondary fire

Two modes, and the distinction matters more than the game ever explains.

**Primary fire** releases an energy blast that punts the targeted object away with tremendous force. It is the attack, and it is also how you clear barriers and shove heavy things out of the way.

**Secondary fire** picks an object up and holds it just ahead of the gun. Press secondary again to drop it, or hit primary to launch what you are holding.

The asymmetry is the useful part: **secondary fire can only pick up lighter objects**, roughly the set of things Gordon could physically carry, but **primary fire can punt much larger objects that secondary cannot lift at all**. So when you meet a heavy crate or a car blocking a path, do not conclude the gravity gun cannot help because you failed to pick it up. Punt it instead.

One more detail that fixes a lot of fumbled grabs: secondary fire does not instantly tractor a target in. The object has to be brought within a certain distance before the field captures it, and during that travel it is still subject to gravity. You also have to keep the gun trained on the object the whole time. Sweep your aim away mid-pull and you drop it.

![The gravity gun holding its first object in secondary fire, the field suspending the prop just ahead of the muzzle.](/images/blog/half-life-2/half-life-2-gravity-gun-guide/gravity-gun-stored.webp)

## Your ammunition is the room you are standing in

Damage from the gravity gun scales with the **mass** of what you throw. That single rule determines whether it is your best weapon in a given room or a waste of a trigger pull, and learning to eyeball prop mass is the core skill.

### Props that hit hard

- **Metal barrels** and **propane tanks** are the gold standard. Either one can kill an Overwatch soldier in a single hit.
- **Sawblades** are the Ravenholm special: lethal against zombies, and recoverable after every throw.
- **Explosive barrels** are the highest-damage option available and also the riskiest. If an enemy shoots the barrel while you are holding it in secondary fire, it detonates in your hands. The correct pattern is to punt with primary fire immediately, never to carry one across a firefight.
- **Radiators, filing cabinets, and heavy machinery** all carry real mass and hit accordingly.

### Props that waste your time

- **Plastic crates** and **wooden pallets** do very little damage because their mass is low. They are fine as portable cover, and useless as projectiles.
- **Cardboard, paper, small debris.** These exist to bait new players into thinking the gravity gun is weak.

The gun is at its best as a **short-to-mid-range** weapon, because everything it fires is affected by gravity in flight. At long range you are lobbing, not shooting.

There is one more use that costs nothing: grab a large object with secondary fire and hold it up as a **makeshift shield**. It will eat incoming fire while you reposition. Against a Combine squad in an open street, a held metal door is genuinely better than most cover the level provides.

## The organic matter rule and its exceptions

The gravity gun **cannot affect most organic material**. You cannot grab a zombie, a vortigaunt, or a Combine soldier with the standard version. There are a few exceptions, most notably **wood**, which is why wooden props behave normally.

But "cannot grab" is not the same as "cannot hurt," and two exceptions are worth memorizing:

- **Three punts from primary fire will kill any headcrab.** No ammunition, no reload, guaranteed. When you are dry in Ravenholm, this is a real answer.
- **Antlions hit by the gun get flipped over**, exposing their weaker undersides. They are much harder to kill outright this way than headcrabs, but the flip creates a free damage window.

## Turning Combine hardware against the Combine

This is the section most playthroughs skip entirely, and it is the best material the weapon has.

### Manhacks as a melee weapon

**Manhacks, City Scanners, and Shield Scanners can all be held and punted by the gravity gun.** All three are heavy enough to deal significant damage when launched.

The manhack trick is the standout. Catch a manhack in secondary fire and it keeps spinning while suspended in the field, which lets you use it as a **makeshift chainsaw** against other enemies. Walk into a group holding one and it shreds.

When you would rather just destroy it, punt it into a **nearby** wall and it breaks apart. The distance qualifier is real: punted over greater distances, manhacks and scanners will stabilize their flight and keep coming. Pick a close, hard surface.

![A Combine manhack, which the gravity gun can catch and hold as a spinning melee weapon.](/images/blog/half-life-2/half-life-2-gravity-gun-guide/manhack.webp)

### Hopper mines and rollermines

**Hopper mines** are the tripod mines the Combine plant on the ground. Grab one with the gravity gun and it comes up safely. Here is the good part: a hopper mine you replant after grabbing it will **automatically switch to recognizing you and your allies as friendly**. You can effectively harvest Combine minefields and rebuild them pointed the other way.

**Rollermines** are the spherical ones that chase you and latch onto vehicles. The gravity gun can pull a rollermine off a vehicle and hold it safely. If Alyx is with you, she will **reprogram a held rollermine to attack hostile targets** instead of friendlies.

Both mine types can also simply be punted into enemies directly, which works fine. And **Combine Sentry Guns** can be manipulated with the gun as well, which is the intended solution to several defensive setups.

## Beating the antlion guard with physics

The **Antlion Guard**, called a Myrmidont by vortigaunts, has **500 health**. Its attacks are a running head smash for 20 damage, a headbutt for 10, and it launches objects at you.

That last detail is the tell. The arena you fight a guard in is always stocked with heavy props, because the encounter is designed as a physics duel. The guard throws things at you, and you are meant to throw things back.

The pattern that works:

1. **Keep moving laterally.** The running head smash is a straight-line charge, and it is easy to sidestep if you are already in motion.
2. **Use the arena's heavy props with primary fire.** Barrels and large debris do meaningfully more damage than your conventional ammunition will at that stage of the game.
3. **Punish the recovery.** After a failed charge, the guard needs a moment to turn around. That is your window.
4. **Do not stand between the guard and a wall.** A charge that pins you against geometry is how the 20-damage smash chains into a death.

![An antlion guard, a 500-health Myrmidont whose arena is always stocked with heavy props for a reason.](/images/blog/half-life-2/half-life-2-gravity-gun-guide/antlion-guard.webp)

## Non-combat uses that solve most puzzles

Outside of fights, the gravity gun quietly solves the majority of Half-Life 2's environmental problems:

- **Reaching supplies.** Secondary fire pulls health kits, ammo, and items from ledges and across gaps you cannot cross.
- **Building bridges.** Though it normally cannot drag the heaviest objects, there are select areas where it can, and those are almost always signposting a bridge you are meant to build.
- **Flipping vehicles.** Overturned the buggy on Highway 17? Punt it right side up.
- **Clearing routes.** The highway sequence where you shove abandoned cars out of the road is pure primary fire.
- **Counterweights and ramps.** The seesaw-lever puzzle solved by stacking cinder blocks at one end, and the crate stairway, are both gravity gun work.

If you are stuck in Half-Life 2, the answer is almost always a physics object, and the gravity gun is almost always how you move it.

## The super gravity gun in Our Benefactors

In Chapter 12, **Our Benefactors**, your pod deposits you into a **Confiscation Field** inside the Citadel. Every other weapon you carry is vaporized. The gravity gun is not: it is **supercharged**, and it shorts out the field in the process.

The supercharged version, the **Dark Energy Field Manipulator**, is visibly different. It emits blue light instead of orange, it quakes in Gordon's hands, and small bolts of energy crawl across the muzzle.

![The supercharged Dark Energy Field Manipulator, glowing blue after passing through the Citadel Confiscation Field.](/images/blog/half-life-2/half-life-2-gravity-gun-guide/super-gravity-gun.webp)

What changes mechanically:

- It manipulates objects of **far greater mass**, and pulls and repels them with much greater force.
- Most importantly, it can now **manipulate organic matter**. The rule that defined the weapon for eleven chapters is gone.
- **Any Overwatch soldier punted by it dies instantly.** The body then retains a charge that will kill other soldiers it strikes, so a well-aimed corpse clears a group.
- Grabbing a soldier with secondary fire also kills him outright.
- It **vaporizes any weapons** the soldiers were carrying, so do not expect to loot ammo.

There is a survivability change too: while you are in the Citadel, the power chargers restore your health and boost your suit energy to **200%**. You keep the supercharged gun from Chapter 12 through the end of the game.

The design intent is obvious once you are holding it. The whole campaign taught you to look at a room and ask what you could throw. The finale removes the last restriction and lets you throw the enemies.

## Quick Action Checklist

- Grab the gravity gun from Alyx in Chapter 5, Black Mesa East, and start using it in fights immediately.
- Remember the asymmetry: secondary lifts light objects, primary punts heavy ones secondary cannot lift.
- Scan every room for metal barrels and propane tanks; either one-shots an Overwatch soldier.
- Punt explosive barrels, never carry them, since an enemy can shoot one out of your hands.
- Hold a large prop as a mobile shield when crossing open ground.
- Use three primary-fire punts to kill any headcrab when you are out of ammo.
- Catch manhacks and use them as a chainsaw, or punt them into a close wall to destroy them.
- Harvest hopper mines and replant them; they will treat you and your allies as friendly.
- Pull rollermines off vehicles, and let Alyx reprogram one if she is with you.
- Fight antlion guards with arena props, sidestep the charge, and punish the recovery.
- In the Citadel from Chapter 12 onward, punt Overwatch soldiers directly; their charged bodies kill others on contact.`,
  faq: [
    {
      question: 'Where do you get the gravity gun in Half-Life 2?',
      answer:
        'You receive it in Chapter 5, Black Mesa East, where Alyx Vance introduces it shortly after you arrive. The weapon is officially called the Zero Point Energy Field Manipulator and was built by Eli Vance. At its core is a substance that appears to be a Xen crystal. It was designed for handling hazardous materials, though it is mostly used for heavy lifting.',
    },
    {
      question: 'What is the difference between primary and secondary fire on the gravity gun?',
      answer:
        'Primary fire releases an energy blast that punts the targeted object away with tremendous force. Secondary fire picks an object up and holds it just ahead of the gun, and pressing secondary again drops it. The key asymmetry is that secondary fire can only lift lighter objects, roughly what Gordon could carry, while primary fire can punt much larger objects that secondary cannot lift at all.',
    },
    {
      question: 'What objects do the most damage with the gravity gun?',
      answer:
        'Damage scales with mass. Heavy items like metal barrels and propane tanks can kill an Overwatch soldier in a single hit, and explosive barrels are the most devastating option available. Light items like plastic crates and wooden pallets do very little damage. Explosive barrels carry a real risk, however, because an enemy shooting one while you hold it will detonate it in your hands.',
    },
    {
      question: 'Can the gravity gun pick up enemies in Half-Life 2?',
      answer:
        'The standard gravity gun cannot affect most organic material, so you cannot grab zombies or Combine soldiers, though there are a few exceptions such as wood. It can still hurt organic enemies: three punts from primary fire will kill any headcrab, and antlions hit by the gun flip over and expose their weaker undersides. The supercharged version obtained in Chapter 12 removes the restriction entirely.',
    },
    {
      question: 'How does the super gravity gun work?',
      answer:
        'In Chapter 12, Our Benefactors, the Confiscation Field inside the Citadel supercharges the gravity gun rather than vaporizing it, and the gun shorts out the field. It then glows blue instead of orange, handles far greater mass, and can manipulate organic matter. Any Overwatch soldier punted by it dies instantly and the body retains a charge that kills others it strikes. It also vaporizes the weapons those soldiers carried.',
    },
    {
      question: 'How do you beat the antlion guard in Half-Life 2?',
      answer:
        'The antlion guard has 500 health and attacks with a running head smash for 20 damage, a headbutt for 10, and by launching objects at you. Its arenas are always stocked with heavy props because the fight is meant to be a physics duel. Keep moving laterally to dodge the straight-line charge, punt heavy props at it with primary fire, punish the recovery after a failed charge, and avoid getting pinned against a wall.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/half-life-2', anchor: 'Half-Life 2 coverage hub' },
    { href: '/blog/half-life-2/half-life-2-beginner-guide', anchor: "Half-Life 2 beginner's guide" },
    { href: '/blog/half-life-2/half-life-2-weapons-guide', anchor: 'Half-Life 2 weapons guide' },
  ],
  externalSources: [
    {
      url: 'https://half-life.fandom.com/wiki/Zero_Point_Energy_Field_Manipulator',
      title: 'Half-Life Wiki — Zero Point Energy Field Manipulator, modes and supercharged form',
    },
    {
      url: 'https://half-life.fandom.com/wiki/Antlion_Guard',
      title: 'Half-Life Wiki — Antlion Guard health and attack values',
    },
    {
      url: 'https://half-life.fandom.com/wiki/Manhack',
      title: 'Half-Life Wiki — Manhack behavior and gravity gun interaction',
    },
  ],
  tldr:
    'The gravity gun is a top-tier Half-Life 2 weapon, not just a puzzle tool. Secondary fire lifts light props while primary fire punts heavy ones it cannot lift, and damage scales with mass, so metal barrels and propane tanks one-shot Overwatch soldiers. It also catches manhacks for melee use, safely harvests hopper mines, and flips antlions onto their weak side. In Chapter 12 the Citadel Confiscation Field supercharges it, letting it kill Combine soldiers outright.',
};
