import type { BlogPost } from '../../blogTypes';

export const halfLife2EpisodesGuide: BlogPost = {
  slug: 'half-life-2-episodes-guide',
  game: 'half-life-2',
  category: 'game-guides',
  topicCluster: 'hl2-guides',
  tags: ['half-life-2', 'episode-one', 'episode-two', 'valve', 'walkthrough'],
  title: 'Half-Life 2 Episodes Guide: Episode One and Two, Explained',
  metaDescription:
    'A full Half-Life 2 episodes guide: chapter lists for Episode One and Two, the new enemies, Hunter and Strider tactics, achievements, and how the story ends.',
  excerpt:
    'Episode One and Episode Two are not bonus content. They are the last two acts of Half-Life 2, they are free inside the base game now, and Episode Two contains the best combat encounter Valve ever built. Here is what each one changes and how to actually beat them.',
  featuredImagePrompt:
    'The battered yellow Muscle Car from Half-Life 2: Episode Two parked on a bridge beneath a blue portal storm over the Outlands forest',
  heroImage:
    '/images/blog/half-life-2/half-life-2-episodes-guide/hero-muscle-car-portal-storm.webp',
  heroImageAlt:
    'The Muscle Car from Half-Life 2: Episode Two parked on a bridge with a blue portal storm tearing across the Outlands sky behind it.',
  imageSources: [
    {
      src: '/images/blog/half-life-2/half-life-2-episodes-guide/hero-muscle-car-portal-storm.webp',
      sourceUrl: 'https://half-life.fandom.com/wiki/Muscle_Car',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/half-life-2/half-life-2-episodes-guide/zombine.webp',
      sourceUrl: 'https://half-life.fandom.com/wiki/Zombine',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/half-life-2/half-life-2-episodes-guide/antlion-worker.webp',
      sourceUrl: 'https://half-life.fandom.com/wiki/Antlion_Worker',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/half-life-2/half-life-2-episodes-guide/hunter.webp',
      sourceUrl: 'https://half-life.fandom.com/wiki/Hunter',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/half-life-2/half-life-2-episodes-guide/magnusson-device.webp',
      sourceUrl: 'https://half-life.fandom.com/wiki/Magnusson_Device',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-22T00:00:00.000Z',
  lastUpdated: '2026-07-22T00:00:00.000Z',
  primaryKeyword: 'half-life 2 episodes guide',
  secondaryKeywords: [
    'half-life 2 episode one chapters',
    'half-life 2 episode two chapters',
    'how to kill hunters half-life 2',
    'magnusson device strider buster',
    'half-life 2 episode two ending explained',
    'do i need to buy half-life 2 episode one',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'the-episodes-are-not-dlc-they-are-the-third-act', label: 'The episodes are not DLC, they are the third act', level: 2 },
    { id: 'what-the-20th-anniversary-update-changed', label: 'What the 20th Anniversary Update changed', level: 2 },
    { id: 'episode-one-five-chapters-one-long-escape', label: 'Episode One: five chapters, one long escape', level: 2 },
    { id: 'the-citadel-opening-is-a-gravity-gun-exam', label: 'The Citadel opening is a gravity gun exam', level: 3 },
    { id: 'alyx-changes-how-you-fight', label: 'Alyx changes how you fight', level: 3 },
    { id: 'the-zombine-and-the-grenade-you-should-steal', label: 'The Zombine, and the grenade you should steal', level: 3 },
    { id: 'episode-two-the-outlands-open-up', label: 'Episode Two: the Outlands open up', level: 2 },
    { id: 'antlion-caves-grubs-and-acid-workers', label: 'Antlion caves, grubs, and acid workers', level: 3 },
    { id: 'the-hunter-is-the-fight-you-have-to-relearn', label: 'The Hunter is the fight you have to relearn', level: 3 },
    { id: 'magnusson-devices-and-the-white-forest-siege', label: 'Magnusson Devices and the White Forest siege', level: 3 },
    { id: 'no-new-weapons-and-why-valve-did-that-on-purpose', label: 'No new weapons, and why Valve did that on purpose', level: 2 },
    { id: 'achievements-actually-worth-chasing', label: 'Achievements actually worth chasing', level: 2 },
    { id: 'the-ending-and-the-sequel-that-never-shipped', label: 'The ending, and the sequel that never shipped', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Most people who "finished Half-Life 2" stopped two thirds of the way through the story. Dark Energy ends with the Citadel core going up and the G-Man freezing time mid-explosion, and a lot of players treat that as the credits. It is not. It is a cliffhanger with two more games attached, and until November 2024 those two games cost extra, which is exactly why so many players skipped them.

That excuse is gone. Both episodes are now folded into the base Half-Life 2 purchase, and Episode Two contains the single best combat encounter Valve has ever designed. If you liked the campaign in the [Half-Life 2 beginner guide](/blog/half-life-2/half-life-2-beginner-guide) sense — physics puzzles, squad fights, striders on a skyline — the episodes are where all of it peaks.

## The episodes are not DLC, they are the third act

Valve developed both in-house. Episode One shipped June 1, 2006 under the working title Aftermath; Episode Two followed on October 10, 2007 as part of The Orange Box. Both were written by Marc Laidlaw with Chet Faliszek and Erik Wolpaw, rather than by Laidlaw alone as with Half-Life 2.

Structurally they are one continuous story. Episode One picks up in City 17 seconds after Half-Life 2 ends; Episode Two picks up seconds after Episode One ends. Play order is not negotiable:

1. Half-Life 2
2. Half-Life 2: Lost Coast (optional tech demo, roughly fifteen minutes)
3. Half-Life 2: Episode One
4. Half-Life 2: Episode Two

Length expectations matter here. Valve's company line on Episode One was four to six hours, and reviewers hammered it for that at its original price. Episode Two is roughly two thirds the length of Half-Life 2, which puts it comfortably past the six-hour mark and makes it the better of the two by a wide margin.

## What the 20th Anniversary Update changed

Valve shipped the Half-Life 2 20th Anniversary Update on November 15, 2024, and the headline for episode players is simple: **Episode One and Episode Two were merged into the base game**. There is nothing to buy. If Half-Life 2 is in your library, both episodes are too.

The same update brought a remastered UI, Steam Workshop support, developer commentary, new graphics options, and a stack of bug fixes. Both episodes already shipped with their own commentary nodes, and the Episode Two nodes on the Hunter and the antlions explain AI behavior you will otherwise never notice.

## Episode One: five chapters, one long escape

Episode One is five chapters and one objective: stabilize the Citadel core so it does not level City 17 immediately, then run.

1. **Undue Alarm** — Vortigaunts pull you and Alyx out of the rubble; you re-enter the Citadel.
2. **Direct Intervention** — the core containment sequence and your first real look at Combine Advisors.
3. **Lowlife** — the City 17 underground, zombies, the flashlight horror stretch.
4. **Urban Flight** — the hospital, the gunship in the attic, Alyx on a sniper rifle.
5. **Exit 17** — the evacuation, striders in the streets, the train out.

The theme is Alyx. Project lead Robin Walker noted the irony that Half-Life 2 spent its runtime talking about other people while you played alone; Episode One fixes that by keeping Alyx with you for virtually the entire game.

### The Citadel opening is a gravity gun exam

At the start of Episode One your gravity gun is back to normal — the supercharge from Our Benefactors is gone. It becomes supercharged again once you re-enter the Citadel and pass through another Confiscation Field, and it stays that way until you reactivate the core's containment field, at which point it reverts permanently.

So there is a window, and it is short. Inside it, punting an Overwatch soldier kills him instantly and his body carries a charge that kills whoever it hits next. Spend it aggressively. Everything in the [Half-Life 2 gravity gun guide](/blog/half-life-2/half-life-2-gravity-gun-guide) about mass and momentum still applies afterward, but the supercharged rules do not survive Direct Intervention.

The elevator-shaft descent right after is a straight skill check: falling debris will crush the elevator unless you deflect it. Alyx calls out each dangerous piece, so listen rather than watch.

### Alyx changes how you fight

Two details most players never register. First, **Combine soldiers learned to crouch** — Episode One soldiers duck under your line of fire, which they never did in Half-Life 2, and the street battle before the rebel safehouse is where it bites. Aim lower than instinct says. Second, **Alyx can be handed a rollermine**: grab one with the gravity gun and she reprograms it to attack Combine targets instead of you.

She also takes a sniper rifle in Urban Flight, and the intended play is to be bait — pull enemies into her firing line rather than out-shooting them yourself.

![A dormant Zombine slumped against a hospital wall in Half-Life 2: Episode One, a headcrab attached to an Overwatch soldier body.](/images/blog/half-life-2/half-life-2-episodes-guide/zombine.webp)

### The Zombine, and the grenade you should steal

Episode One adds exactly one new enemy, and it is a good one. A Zombine is what you get when a standard headcrab attaches to an Overwatch soldier. It keeps the armor, the vocoder, and, critically, the grenade pouch.

- It shambles slower than a standard zombie but breaks into sudden sprints that close distance fast.
- The armor makes it tougher than a normal zombie or a living Overwatch soldier. It can survive a single grenade blast.
- Once damaged enough, it pulls a live grenade, holds it aloft, and keeps attacking. It will happily kill itself and everything nearby.

The correct answer is theft. Rip the grenade out of its hand with the gravity gun and the Zombine reverts to ordinary zombie behavior while you keep the explosive. Set against the reads in the [Half-Life 2 enemies guide](/blog/half-life-2/half-life-2-enemies-guide), Zombines are the first enemy in the series that punishes you for finishing them at close range.

## Episode Two: the Outlands open up

Seven chapters, and the whole design brief is space:

1. **To the White Forest**
2. **This Vortal Coil**
3. **Freeman Pontifex**
4. **Riding Shotgun**
5. **Under the Radar**
6. **Our Mutual Fiend**
7. **T-Minus One**

City 17 is behind you; this is forest, mineshaft, junkyard, and missile base. The Muscle Car chapters play like Highway 17 with better sightlines, and encounters are built as arenas with multiple exits rather than corridors with cover.

One quality-of-life change lands here and it is bigger than it sounds: **Episode Two separated the flashlight from the HEV suit's auxiliary power.** Episode One still makes you ration light against sprint; Episode Two does not.

![An Antlion Worker in the antlion caves of Half-Life 2: Episode Two, a pale insectoid that spits neurotoxic acid.](/images/blog/half-life-2/half-life-2-episodes-guide/antlion-worker.webp)

### Antlion caves, grubs, and acid workers

The first three chapters are an antlion biology lesson disguised as a dungeon. **Antlion Grubs** are stationary, harmless, and squish for health, and they are tied to a 333-grub achievement — so if you are the completionist type, start squishing in chapter one, not chapter three.

**Antlion Workers** are the actual threat. They spit concentrated globules of neurotoxic acid from range, then back off to reposition, which is genuine self-preservation behavior the series had not shown before. The acid does what a poison headcrab hit does: it dumps your health low and lets it regenerate slowly. Being at single-digit health when a guard charges is how these caves kill you.

Two rules. Do not chip at workers with the pistol; they retreat and re-angle faster than you can land shots, so close hard or use splash. And they burst into acid when killed, so do not be standing next to one when it pops. The [Half-Life 2 weapons guide](/blog/half-life-2/half-life-2-weapons-guide) priorities hold up here — this is a shotgun and SMG-grenade stretch, not a crossbow stretch.

![A Combine Hunter charging through a doorway in the Outlands forest of Half-Life 2: Episode Two, its blue flechette eyes glowing.](/images/blog/half-life-2/half-life-2-episodes-guide/hunter.webp)

### The Hunter is the fight you have to relearn

The Hunter is a tripedal synth and the best enemy Valve built for this engine. It first appears on a monitor in Judith Mossman's Episode One message, but you do not fight one until Episode Two.

What it does to you:

- **Flechettes.** Darts that stick to any surface and detonate a few seconds later in a burst of dark energy. It fires them indefinitely, leads moving targets, and shoots them behind your cover so the delayed blast flushes you out.
- **Melee.** One leg swipe, a body charge, or the concealed prongs under its chassis kills most things outright, and it closes distance faster than you can back up.

What kills it:

- **Heavy thrown objects.** Hunters are far more vulnerable to physics damage than to any firearm except the Colt Python. A car engine or tire staggers them, and a staggered Hunter usually does not get to retaliate. Valve originally intended them to be vulnerable *only* to gravity gun impacts, and the tuning still shows.
- **Pulse rifle secondary fire.** A single energy ball disintegrates a Hunter on contact.
- **The Muscle Car.** Ram one at speed and it dies instantly, though it will sometimes leap clear.

The signature trick: hold an object in the gravity gun as a shield, let flechettes stick to it, then fire it back — blunt force plus the Hunter's own explosives.

![Doctor Arne Magnusson introducing the rugby-ball shaped Magnusson Device, the strider buster, in a display case at White Forest.](/images/blog/half-life-2/half-life-2-episodes-guide/magnusson-device.webp)

### Magnusson Devices and the White Forest siege

Arne Magnusson's Strider Buster is the only new "weapon" in either episode, and it exists because striders shrugged off everything the Resistance had, RPGs included. It is a rugby-ball shaped charge ringed with sharpened nails that punch into a strider's carapace. Magnusson could never solve the launching problem — until Gordon walked in holding a gravity gun.

How to use one during Our Mutual Fiend:

- Devices come from small portable teleporters around White Forest. Take one and another arrives, so you will not run dry.
- Get behind and close to the strider before you launch; attaching it takes real aim.
- **Kill the Hunter escorts first.** Every strider travels with a pair of Hunters, and they shoot a Magnusson Device out of the air the instant you launch it.
- Once attached, shoot the device with anything — shotgun or MP7 at range, pistol up close. It detonates and shreds the strider.
- Do not waste devices on Hunters. One does 150 damage, roughly five sevenths of a Hunter's health: a miss, not a kill.
- The Muscle Car has a rear pocket for exactly one device. Use it as a delivery truck, and run Hunters over on the way.

Ammunition at White Forest is deliberately limited. The intended loop is car, gravity gun, and environment, not your magazine count.

## No new weapons, and why Valve did that on purpose

Episode One's most common criticism was that it added no new equippable weapons. Episode Two added none either, and Valve said outright they were not interested in new guns — they wanted to keep exploring every dimension of the gravity gun, and the Magnusson Device is the outcome. Whether you buy that depends on how you feel about the Hunter, which is essentially a boss designed to make the gravity gun mandatory again four years after Ravenholm did it with sawblades. It works. It is also fair to note that a 2007 shooter's answer to "what is new" was "the thing from 2004, harder."

## Achievements actually worth chasing

Episode One has 13 Steam achievements; Episode Two has 23. Most are story-related. These are the ones that change how you play:

- **The One Free Bullet** (Episode One) — finish the whole episode having fired exactly one bullet, which limits you to the gravity gun, crowbar, rocket launcher, and grenades. Best-designed challenge run in the series.
- **Zombie-que** (Episode One) — light 15 zombies with flares, found in Lowlife and the Urban Flight hospital.
- **Payback** (Episode Two) — kill a Hunter with its own flechettes. Catch them on a held object, fire it back.
- **Little Rocket Man** (Episode Two) — find the garden gnome under a low platform in the communications building during To the White Forest, escort it across most of the game, and seal it in the rocket capsule. Worth 30 points and about two hours of your dignity.
- **Get Some Grub** (Episode Two) — squish all 333 antlion grubs across the first three chapters. Start early or do not start at all.
- **Neighborhood Watch** (Episode Two) — destroy every strider in the final battle before any of them levels a building. Save after each kill.

Trivia worth having: the **Gnome Alone** achievement was added in November 2020, tied to Rocket Lab launching a Gnome Chompski into space for real. It unlocks by starting the game.

## The ending, and the sequel that never shipped

Spoilers from here, obviously.

Episode Two ends at White Forest with the rocket launched, the Borealis coordinates in hand, and Combine Advisors ambushing the hangar. Eli Vance dies. Cut to black. That is the last piece of official Half-Life 2 story Valve has shipped, and it has been sitting there since 2007.

Episode Three was announced as part of the trilogy in 2006 and never released. Marc Laidlaw later posted a plot outline on his personal site — commonly called Epistle Three — sketching one version of what it could have been. The wiki flags it correctly as non-canon: a snapshot from before Laidlaw left Valve, not a shipped story. Half-Life: Alyx, released in 2020, is a prequel and moves the story its own direction.

So no, Episode Two is not a satisfying conclusion, and it will leave you annoyed. Play it anyway. The White Forest siege is worth the unresolved ending, and the alternative is pretending Half-Life 2 stops with a G-Man monologue in a frozen room.

## Quick Action Checklist

- Play in order: Half-Life 2, Lost Coast if you want, Episode One, Episode Two.
- Do not buy the episodes. Since the 20th Anniversary Update they are inside the base game.
- Spend Episode One's supercharged gravity gun window aggressively — it ends when you restore core containment.
- Aim lower against Episode One Combine soldiers; they crouch under fire now.
- Hand Alyx a rollermine with the gravity gun and let her reprogram it.
- Steal Zombine grenades out of their hands instead of trading shotgun shells.
- In the antlion caves, kill workers before guards and never stand next to one when it dies.
- Fight Hunters with heavy props and pulse rifle energy balls, not rifle ammo.
- Clear Hunter escorts before you launch a Magnusson Device at a strider.`,
  faq: [
    {
      question: 'Do I need to buy Half-Life 2: Episode One and Episode Two separately?',
      answer:
        'No. The Half-Life 2 20th Anniversary Update, released November 15, 2024, merged Episode One and Episode Two into the base game of Half-Life 2. If Half-Life 2 is in your Steam library, both episodes are already included and accessible from the same install rather than as separate purchases.',
    },
    {
      question: 'What order should I play the Half-Life 2 episodes in?',
      answer:
        'Half-Life 2 first, then the optional Lost Coast tech demo, then Episode One, then Episode Two. Episode One begins seconds after Half-Life 2 ends and Episode Two begins seconds after Episode One ends, so the sequence is a single continuous story and playing out of order will spoil and confuse both episodes.',
    },
    {
      question: 'How long are Episode One and Episode Two?',
      answer:
        "Valve's own estimate for Episode One was four to six hours, and its short length was the most common criticism at launch. Episode Two is substantially longer, running roughly two thirds the length of Half-Life 2 itself, which puts a normal playthrough comfortably past six hours.",
    },
    {
      question: 'What is the best way to kill a Hunter in Episode Two?',
      answer:
        'Heavy objects thrown with the gravity gun. Hunters are far more vulnerable to physics damage than to any firearm except the Colt Python, and a car engine or tire staggers them so they cannot retaliate. A single energy ball from the pulse rifle secondary fire disintegrates a Hunter outright, and ramming one at speed with the Muscle Car kills it instantly.',
    },
    {
      question: 'How do Magnusson Devices work against Striders?',
      answer:
        'Magnusson Devices, also called Strider Busters, are picked up from portable teleporters around White Forest and launched with the gravity gun. Sharpened nails around the shell punch into a strider carapace on impact, and once attached you shoot the device with any weapon to detonate it. Kill the Hunter escorts first, because they will destroy a device in mid-air.',
    },
    {
      question: 'What is a Zombine and how do I deal with it?',
      answer:
        'A Zombine is a standard headcrab attached to an Overwatch soldier, introduced in Episode One. It keeps its armor, so it is tougher than either a zombie or a live soldier and can survive a grenade blast. When damaged enough it pulls a live grenade and keeps attacking, so pull the grenade out of its hand with the gravity gun — that removes the threat and hands you a free explosive.',
    },
    {
      question: 'What new enemies do the episodes add?',
      answer:
        'Episode One introduces the Zombine. Episode Two introduces four: the Antlion Worker, which spits neurotoxic acid and repositions between attacks, the harmless but achievement-relevant Antlion Grub, the Antlion Guardian, and the Combine Hunter, a tripedal synth that fires explosive flechettes and is the standout new enemy of the pair.',
    },
    {
      question: 'How does Episode Two end and was there ever an Episode Three?',
      answer:
        'Episode Two ends at White Forest after the rocket launch, when Combine Advisors ambush the hangar and kill Eli Vance. Episode Three was announced in 2006 but never released. Marc Laidlaw later posted a plot outline on his personal site, commonly called Epistle Three, describing one possible version of the story, but the Half-Life wiki treats it as non-canon rather than a shipped ending.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/half-life-2', anchor: 'Half-Life 2 coverage hub' },
    { href: '/blog/half-life-2/half-life-2-beginner-guide', anchor: 'Half-Life 2 beginner guide' },
    { href: '/blog/half-life-2/half-life-2-gravity-gun-guide', anchor: 'Half-Life 2 gravity gun guide' },
    { href: '/blog/half-life-2/half-life-2-weapons-guide', anchor: 'Half-Life 2 weapons guide' },
    { href: '/blog/half-life-2/half-life-2-enemies-guide', anchor: 'Half-Life 2 enemies guide' },
  ],
  externalSources: [
    {
      url: 'https://half-life.fandom.com/wiki/Half-Life_2:_Episode_One',
      title: 'Half-Life Wiki — Half-Life 2: Episode One overview, release, and enemies',
    },
    {
      url: 'https://half-life.fandom.com/wiki/Half-Life_2:_Episode_Two',
      title: 'Half-Life Wiki — Half-Life 2: Episode Two gameplay, new enemies, and technical changes',
    },
    {
      url: 'https://half-life.fandom.com/wiki/Hunter',
      title: 'Half-Life Wiki — Hunter behavior and tactics',
    },
    {
      url: 'https://half-life.fandom.com/wiki/Magnusson_Device',
      title: 'Half-Life Wiki — Magnusson Device (Strider Buster)',
    },
  ],
  tldr:
    'Episode One and Episode Two are the last two acts of Half-Life 2, and since the 20th Anniversary Update on November 15, 2024 they are included free in the base game. Episode One is five chapters and about four to six hours, adding the grenade-carrying Zombine. Episode Two is seven chapters at roughly two thirds the length of Half-Life 2, adding the Combine Hunter, acid-spitting Antlion Workers, the Muscle Car, and the Magnusson Device you launch at striders with the gravity gun. Play them in order, fight Hunters with thrown props rather than bullets, and expect a cliffhanger ending that Episode Three never resolved.',
};
