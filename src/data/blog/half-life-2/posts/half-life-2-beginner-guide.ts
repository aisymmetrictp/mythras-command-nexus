import type { BlogPost } from '../../blogTypes';

export const halfLife2BeginnerGuide: BlogPost = {
  slug: 'half-life-2-beginner-guide',
  game: 'half-life-2',
  category: 'beginner-guides',
  topicCluster: 'hl2-guides',
  tags: ['half-life-2', 'beginner', 'walkthrough', 'valve', 'source-engine'],
  title: "Half-Life 2 Beginner's Guide: Start Strong in City 17",
  metaDescription:
    'A Half-Life 2 beginner guide that covers the full chapter order, health vs suit energy, early weapons, the gravity gun, and the Ravenholm difficulty spike.',
  excerpt:
    'Half-Life 2 never stops to explain itself, which is why new players stall in Ravenholm with no shotgun ammo and no idea the gravity gun was the answer. Here is the chapter map, the systems the game hides, and the mistakes that waste your first playthrough.',
  featuredImagePrompt:
    'The Half-Life 2 key art — Gordon Freeman in the orange HEV suit against the industrial skyline of City 17, lambda logo, moody teal and amber lighting',
  heroImage: '/images/blog/half-life-2/half-life-2-beginner-guide/half-life-2-cover.webp',
  heroImageAlt: 'The Half-Life 2 cover art, showing Gordon Freeman in the Mark V HEV suit against City 17.',
  imageSources: [
    {
      src: '/images/blog/half-life-2/half-life-2-beginner-guide/half-life-2-cover.webp',
      sourceUrl: 'https://half-life.fandom.com/wiki/Half-Life_2',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/half-life-2/half-life-2-beginner-guide/crowbar.webp',
      sourceUrl: 'https://half-life.fandom.com/wiki/Crowbar',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/half-life-2/half-life-2-beginner-guide/headcrab.webp',
      sourceUrl: 'https://half-life.fandom.com/wiki/Headcrab',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/half-life-2/half-life-2-beginner-guide/combine-soldier.webp',
      sourceUrl: 'https://half-life.fandom.com/wiki/Overwatch_Soldier',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/half-life-2/half-life-2-beginner-guide/ravenholm.webp',
      sourceUrl: 'https://half-life.fandom.com/wiki/Ravenholm',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-20T00:00:00.000Z',
  lastUpdated: '2026-07-20T00:00:00.000Z',
  primaryKeyword: 'half-life 2 beginner guide',
  secondaryKeywords: [
    'half-life 2 chapters in order',
    'half-life 2 tips for new players',
    'how to play half-life 2',
    'half-life 2 ravenholm hard',
    'half-life 2 gravity gun chapter',
    'half-life 2 20th anniversary update',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-half-life-2-actually-asks-of-you', label: 'What Half-Life 2 actually asks of you', level: 2 },
    { id: 'start-here-settings-and-the-20th-anniversary-update', label: 'Start here: settings and the 20th Anniversary Update', level: 2 },
    { id: 'the-chapter-map-and-how-long-each-stretch-runs', label: 'The chapter map, and how long each stretch runs', level: 2 },
    { id: 'health-and-suit-energy-are-two-separate-systems', label: 'Health and suit energy are two separate systems', level: 2 },
    { id: 'your-first-four-weapons-and-when-to-use-them', label: 'Your first four weapons and when to use them', level: 2 },
    { id: 'the-gravity-gun-changes-the-game-at-black-mesa-east', label: 'The gravity gun changes the game at Black Mesa East', level: 2 },
    { id: 'ravenholm-the-difficulty-spike-nobody-warns-you-about', label: 'Ravenholm, the difficulty spike nobody warns you about', level: 2 },
    { id: 'enemies-you-need-to-read-differently', label: 'Enemies you need to read differently', level: 2 },
    { id: 'headcrabs-and-zombies', label: 'Headcrabs and zombies', level: 3 },
    { id: 'combine-soldiers', label: 'Combine soldiers', level: 3 },
    { id: 'manhacks-and-scanners', label: 'Manhacks and scanners', level: 3 },
    { id: 'vehicle-chapters-are-not-shooting-chapters', label: 'Vehicle chapters are not shooting chapters', level: 2 },
    { id: 'six-mistakes-that-stall-new-players', label: 'Six mistakes that stall new players', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `A train pulls into a station, a man in a blue suit tells you the right man in the wrong place can make all the difference, and then Half-Life 2 hands you nothing. No tutorial pop-ups. No objective marker. No weapon. You walk through a checkpoint, a Civil Protection officer knocks a can onto the floor and tells you to pick it up, and the entire design philosophy of the game is right there: it will teach you by putting you in a room, and it expects you to notice.

That approach is why Half-Life 2 still holds up more than two decades after its November 16, 2004 release, and it is also why new players stall out in specific, predictable places. They arrive in Ravenholm with twelve shotgun shells. They burn every pistol round on a Combine soldier who was going to take a single thrown propane tank. They never work out that the health bar and the suit bar are refilled by two completely different wall units.

This guide fixes that. Chapter map, hidden systems, weapon priorities, and the six mistakes that turn a tight ten-hour campaign into a frustrating one.

## What Half-Life 2 actually asks of you

Half-Life 2 runs on Valve's Source engine, and Source's headline feature in 2004 was rigid-body physics. That is not set dressing. The physics simulation is the combat system, the puzzle system, and the traversal system all at once.

Concretely, that means the game is constantly asking you a question the HUD never poses: **what is in this room that I can use?** A sawblade on a wall. A propane tank in a corner. A radiator you can stack. A seesaw plank you can weigh down with cinder blocks. Players who treat Half-Life 2 as a shooter with a physics gimmick have a mediocre time. Players who treat every room as a physics inventory have a great one.

The second thing it asks is patience with pacing. The campaign deliberately alternates: on-foot combat, then a vehicle stretch, then a horror set piece, then a squad battle. If a chapter feels like it is not what you signed up for, it is about to change.

## Start here: settings and the 20th Anniversary Update

On November 15, 2024, Valve shipped the 20th Anniversary Update. Per the Half-Life wiki, it remastered the UI, enabled Steam Workshop support, added developer commentary, fixed bugs, and added new graphics options. Critically, it also **bundled Episode One and Episode Two into the base Half-Life 2 purchase**. If you bought Half-Life 2 at any point, you already own both episodes now; they are not separate purchases anymore.

Three setup notes before you start:

- **Turn on developer commentary for your second playthrough, not your first.** The commentary nodes are excellent, but they interrupt pacing and spoil set pieces. Finish the game clean, then replay with them on.
- **Play on Normal your first time.** Half-Life 2 on Hard mostly reduces your damage output and increases enemy damage; it does not add encounter complexity. The physics-first lessons land better when you are not reloading a save every ninety seconds.
- **Quicksave constantly.** The game autosaves at chapter transitions and some mid-chapter checkpoints, but the gaps can be long. F6 is your friend, especially in vehicle chapters.

## The chapter map, and how long each stretch runs

Half-Life 2 has thirteen numbered chapters plus one lettered chapter, 9a. Knowing the shape of the campaign helps enormously, because it tells you when resource scarcity is about to end.

1. **Point Insertion** — City 17 arrival, no weapons, pure atmosphere and stealth-adjacent movement.
2. **"A Red Letter Day"** — Kleiner's lab, teleport mishap, you get the crowbar.
3. **Route Kanal** — canals on foot and by airboat approach, first real Civil Protection fights.
4. **Water Hazard** — the airboat chapter proper, ending with the mounted gun and a gunship.
5. **Black Mesa East** — safe hub, Eli and Alyx, and the gravity gun.
6. **"We Don't Go To Ravenholm..."** — the horror chapter. Traps, zombies, Father Grigori.
7. **Highway 17** — the buggy chapter along the coast.
8. **Sandtraps** — antlion beaches, the "don't touch the sand" section, and bugbait.
9. **Nova Prospekt** — prison assault with antlions on your side.
9a. **Entanglement** — the second half of Nova Prospekt and the teleport jump.
10. **Anticitizen One** — the City 17 uprising, rebel squads under your command.
11. **"Follow Freeman!"** — street fighting, striders, squad combat at its peak.
12. **Our Benefactors** — the Citadel, and the supercharged gravity gun.
13. **Dark Energy** — the finale.

A first playthrough on Normal generally runs somewhere in the ten-to-thirteen-hour range depending on how much you poke at rooms. The two vehicle chapters, Water Hazard and Highway 17, are the longest single stretches.

## Health and suit energy are two separate systems

This is the mechanic new players most often miss, and it costs them real runs.

Gordon wears the **HEV Suit Mark V**, upgraded from the Mark IV in the original Half-Life. The suit holds up to **100 energy**, and that energy is what absorbs incoming damage, mostly gunfire. Your health is a separate 100-point pool underneath it.

They are refilled by different things:

- **Health** comes from Medical Supplies pickups and from wall-mounted **Health Stations**.
- **Suit energy** comes from Energy Cells and from wall-mounted **Charging Devices**.

The two wall units look different and are frequently placed next to each other. If you are standing at a charger watching a bar refill and it stops, check whether you just topped off the wrong bar. Before any door that obviously leads somewhere bad, top off both.

![The crowbar, Gordon Freeman's signature melee tool and the first weapon you receive in Half-Life 2.](/images/blog/half-life-2/half-life-2-beginner-guide/crowbar.webp)

## Your first four weapons and when to use them

You collect the early arsenal in a tight sequence, and each one has a job.

- **Crowbar** (Chapter 2). Ten damage a swing in Half-Life 2. It is your infinite-ammo answer to headcrabs, breakable crates, and boarded-up windows. Break every wooden crate and pallet you pass; that is where ammo and health live.
- **USP Match 9mm pistol** (Chapter 3). Five damage a shot, an 18-round magazine, and 150 rounds of maximum reserve. Tapping the trigger fires at roughly 600 RPM while holding it down drops to around 120 RPM, so deliberate taps are genuinely better than mashing. It is a precision tool for manhacks and unarmored targets, not a fight-winner.
- **MP7 submachine gun** (Chapter 3). Four damage per round, a 45-round magazine, 225 reserve, and an 800 RPM fire rate. The wiki rates its accuracy as poor with medium-to-high spread, and that is accurate to the feel: it is a short-range panic button. It also carries **three grenade rounds** on secondary fire, which are easy to forget and excellent against clustered enemies.
- **SPAS-12 shotgun** (Chapter 6, Ravenholm). [Eight damage per pellet, 56 total on primary fire](/blog/half-life-2/half-life-2-weapons-guide) and 84 total on the double-barrel secondary. This is your close-quarters answer for the rest of the game.

Note the gap: you do not get the shotgun until Ravenholm. That single fact explains most early frustration, and it is why the next section matters so much.

## The gravity gun changes the game at Black Mesa East

At Black Mesa East, Alyx Vance introduces you to the **Zero Point Energy Field Manipulator**, built by her father Eli. Everyone calls it the gravity gun.

It has two modes. Secondary fire picks an object up and holds it in front of you. Primary fire punts it forward with enormous force. It has no ammunition in the conventional sense, so its usable fire rate of roughly 120 RPM is limited only by how fast you can grab a new object.

The single most important beginner insight: **the gravity gun is a real weapon, not a puzzle tool with a combat mode.** Heavy items like metal barrels and propane tanks can kill an Overwatch soldier in one hit. Light items like plastic crates and wooden pallets barely scratch anything, because damage scales with the mass of what you throw. Learning to distinguish a heavy prop from a light one at a glance is the core skill of the entire game.

It also cannot affect most organic material, with a few exceptions such as wood. So you cannot simply grab a zombie and throw it. What you can do is grab the sawblade on the wall behind the zombie.

![A standard headcrab, the enemy the gravity gun and crowbar handle most efficiently.](/images/blog/half-life-2/half-life-2-beginner-guide/headcrab.webp)

## Ravenholm, the difficulty spike nobody warns you about

Chapter 6 is where first playthroughs go wrong. You enter a zombie-infested town, ammunition is scarce, and you have a pistol, an SMG with poor spread, and a crowbar.

The intended solution is the gravity gun. The wiki puts it plainly: [the gravity gun is one of the most suitable weapons for Ravenholm](/blog/half-life-2/half-life-2-gravity-gun-guide) before you get the shotgun, precisely because the town is stuffed with environmental props and conventional ammo is thin.

Practical Ravenholm rules:

- **Sawblades are the answer.** They are everywhere, they slice through zombies, and you can pick the same blade back up after it lands and reuse it indefinitely.
- **Use the traps.** Father Grigori's town is wired with car-crusher traps, swinging hazards, and gas. Lure zombies into them rather than trading ammo.
- **Explosive barrels are devastating but risky.** If an enemy shoots a barrel while you are holding it, it detonates in your hands. Punt, do not carry.
- **Save your shotgun shells once you find it.** You will want them for the fast zombies later in the chapter.

![Ravenholm, the trap-filled ghost town where the gravity gun replaces conventional ammunition.](/images/blog/half-life-2/half-life-2-beginner-guide/ravenholm.webp)

## Enemies you need to read differently

### Headcrabs and zombies

Standard headcrabs are trivial with a crowbar. The nastier variants matter more: **fast headcrabs** move erratically and are hard to track, and **poison headcrabs** produce poison zombies whose attacks drop your health to one point and then let it regenerate slowly. Poison damage does not kill you outright, but being at one health when a Combine soldier turns the corner absolutely will. Prioritize poison headcrabs above everything else in the room.

A useful gravity gun fact: **three punts from primary fire will kill any headcrab.** That is free damage when you are out of ammo.

### Combine soldiers

![An Overwatch soldier, the Combine's standard transhuman infantry unit.](/images/blog/half-life-2/half-life-2-beginner-guide/combine-soldier.webp)

Overwatch soldiers flank, suppress, and throw grenades to flush you out of cover. They are the reason static cover camping fails in this game. Two habits fix most soldier fights: keep moving between pieces of cover, and check the room for a heavy prop before you commit to a firefight. A propane tank punted into a soldier ends him instantly and costs you nothing.

### Manhacks and scanners

Flying blades that chase you. The pistol handles them precisely, but the gravity gun is better: you can catch a manhack in secondary fire and [use it as a makeshift chainsaw](/blog/half-life-2/half-life-2-gravity-gun-guide) against other enemies, or punt it into a nearby wall to destroy it. Punted over long distances they will stabilize and fly on, so hit a wall that is close.

## Vehicle chapters are not shooting chapters

Water Hazard and Highway 17 hand you the airboat and the buggy respectively, and both punish players who try to fight from them like they are a mobile turret.

Treat both as **driving** chapters. Momentum is your defense. Combine gunships and helicopter sections in particular are about not being where you were a second ago, not about accuracy. Both vehicles eventually receive a mounted weapon, and only then should your posture change.

Also: get out and explore. Both chapters hide supply caches, health, and ammo in side buildings along the route. Blowing past them is why you arrive at the next combat section dry.

## Six mistakes that stall new players

1. **Ignoring the gravity gun in combat.** It is not a puzzle tool. It is frequently your best weapon.
2. **Charging the wrong wall unit.** Health Stations and Charging Devices are separate. Top off both.
3. **Not breaking crates.** Wooden crates and pallets hide the ammo and health you say you cannot find.
4. **Hoarding [the .357 and crossbow](/blog/half-life-2/half-life-2-weapons-guide).** Saving powerful ammo for a boss that never arrives is a classic. Spend it.
5. **Camping in cover against Combine soldiers.** They flank and grenade. Move.
6. **Forgetting SMG grenades.** Three of them, secondary fire, and most players finish the campaign having thrown one.

## Quick Action Checklist

- Install the 20th Anniversary Update version; Episode One and Episode Two are already included.
- Play Normal difficulty first, save developer commentary for replay two.
- Quicksave before every door that looks important.
- Refill health and suit energy at their two separate wall units before big fights.
- Break every wooden crate and pallet you walk past.
- From Black Mesa East onward, scan each room for heavy props before you open fire.
- In Ravenholm, use sawblades and town traps; conserve shotgun shells for fast zombies.
- Kill poison headcrabs first, always.
- Punt manhacks into close walls, or hold one as a melee weapon.
- Drive the vehicle chapters, do not fight from them, and stop to loot side buildings.`,
  faq: [
    {
      question: 'How many chapters are in Half-Life 2?',
      answer:
        'Half-Life 2 has thirteen numbered chapters plus one lettered chapter, 9a. In order they are Point Insertion, "A Red Letter Day," Route Kanal, Water Hazard, Black Mesa East, "We Don\'t Go To Ravenholm...", Highway 17, Sandtraps, Nova Prospekt, Entanglement (9a), Anticitizen One, "Follow Freeman!", Our Benefactors, and Dark Energy. A first playthrough on Normal difficulty typically runs about ten to thirteen hours.',
    },
    {
      question: 'When do you get the gravity gun in Half-Life 2?',
      answer:
        'You receive the Zero Point Energy Field Manipulator, better known as the gravity gun, in Chapter 5, Black Mesa East. Alyx Vance introduces it to you shortly after you arrive. It was built by her father, Eli Vance. Secondary fire picks objects up and primary fire punts them, and because it uses physics props rather than ammunition it never runs dry.',
    },
    {
      question: 'Why is Ravenholm so hard in Half-Life 2?',
      answer:
        'Ravenholm is Chapter 6, and you enter it before you have the shotgun, with limited pistol and SMG ammunition against dense waves of zombies. The chapter is designed to be solved with the gravity gun and the town traps rather than with bullets. Sawblades are the standout tool because they cut through zombies and can be picked back up and reused indefinitely.',
    },
    {
      question: 'What is the difference between health and suit energy in Half-Life 2?',
      answer:
        'They are two separate 100-point pools. The HEV Suit Mark V holds up to 100 energy, which absorbs incoming damage, mostly gunfire, and your health sits underneath it. Health is restored by Medical Supplies and wall-mounted Health Stations. Suit energy is restored by Energy Cells and wall-mounted Charging Devices. The two wall units are distinct, so charging one does not refill the other.',
    },
    {
      question: 'Do I need to buy Episode One and Episode Two separately?',
      answer:
        'No. The Half-Life 2 20th Anniversary Update, released November 15, 2024, bundled Episode One and Episode Two into the base game. That update also remastered the user interface, enabled Steam Workshop support, added developer commentary, added new graphics options, and shipped a range of bug fixes.',
    },
    {
      question: 'What should a beginner do about poison headcrabs?',
      answer:
        'Kill them before anything else in the room. Poison headcrabs create poison zombies, and their attacks drop your health to a single point before it slowly regenerates. The hit itself will not kill you, but being at one health when a Combine soldier rounds the corner will. Treat any poison headcrab as the highest-priority target on screen and clear it first.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/half-life-2', anchor: 'Half-Life 2 coverage hub' },
    { href: '/blog/half-life-2/half-life-2-gravity-gun-guide', anchor: 'Half-Life 2 gravity gun guide' },
    { href: '/blog/half-life-2/half-life-2-weapons-guide', anchor: 'Half-Life 2 weapons guide' },
  ],
  externalSources: [
    {
      url: 'https://half-life.fandom.com/wiki/Half-Life_2',
      title: 'Half-Life Wiki — Half-Life 2 overview, release, and 20th Anniversary Update',
    },
    {
      url: 'https://half-life.fandom.com/wiki/Half-Life_2_storyline',
      title: 'Half-Life Wiki — full Half-Life 2 chapter list and storyline',
    },
    {
      url: 'https://half-life.fandom.com/wiki/Zero_Point_Energy_Field_Manipulator',
      title: 'Half-Life Wiki — Zero Point Energy Field Manipulator (gravity gun)',
    },
  ],
  tldr:
    'Half-Life 2 teaches through rooms rather than tutorials, so treat every space as a physics inventory. The campaign runs thirteen chapters plus 9a Entanglement, roughly ten to thirteen hours. Track health and suit energy as separate pools with separate wall chargers, and remember the gravity gun you get at Black Mesa East in Chapter 5 is a genuine weapon, which is the key to surviving Ravenholm before the shotgun arrives.',
};
