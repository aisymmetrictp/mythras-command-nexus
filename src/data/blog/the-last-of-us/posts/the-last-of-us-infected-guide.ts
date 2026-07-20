import type { BlogPost } from '../../blogTypes';

export const theLastOfUsInfectedGuide: BlogPost = {
  slug: 'the-last-of-us-infected-guide',
  game: 'the-last-of-us',
  category: 'game-guides',
  topicCluster: 'tlou-survival',
  tags: ['infected', 'clickers', 'bloaters', 'combat', 'stealth'],
  title: 'The Last of Us Infected Guide: How to Beat Every Type',
  metaDescription:
    'Runners, stalkers, clickers and bloaters explained — how each infected stage sees, hunts and dies in The Last of Us, and the exact tools to use on each one.',
  excerpt:
    'A clicker cannot see you and cannot be strangled. Those two facts decide more encounters than any gun you own. Here is how all four infected stages actually work, and what to spend on each.',
  featuredImagePrompt:
    'A close-up of a clicker in a dim, spore-lit corridor, fungal plates splitting its face, shafts of light through broken windows, muted greens and greys, grimy post-outbreak texture',
  heroImage: '/images/blog/the-last-of-us/the-last-of-us-infected-guide/clicker.webp',
  heroImageAlt:
    'A clicker, the third infected stage in The Last of Us, its face split open by fungal plates that leave it completely blind and force it to hunt by echolocation.',
  imageSources: [
    {
      src: '/images/blog/the-last-of-us/the-last-of-us-infected-guide/clicker.webp',
      sourceUrl: 'https://thelastofus.fandom.com/wiki/File:Clicker.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/the-last-of-us/the-last-of-us-infected-guide/runner.webp',
      sourceUrl: 'https://thelastofus.fandom.com/wiki/File:Joel_chokes_Runner.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/the-last-of-us/the-last-of-us-infected-guide/stalker.webp',
      sourceUrl: 'https://thelastofus.fandom.com/wiki/File:Stalker.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/the-last-of-us/the-last-of-us-infected-guide/bloater.webp',
      sourceUrl: 'https://thelastofus.fandom.com/wiki/File:Bloater_closeup_cropped.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/the-last-of-us/the-last-of-us-infected-guide/mixed-encounter.webp',
      sourceUrl: 'https://thelastofus.fandom.com/wiki/File:Clickers_Humans.jpg',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-20T00:00:00.000Z',
  lastUpdated: '2026-07-20T00:00:00.000Z',
  primaryKeyword: 'the last of us infected guide',
  secondaryKeywords: [
    'last of us infected types',
    'how to kill clickers last of us',
    'last of us bloater strategy',
    'last of us stalkers',
    'last of us runners vs clickers',
    'last of us infected stages explained',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'the-four-stages-and-why-the-order-matters', label: 'The four stages, and why the order matters', level: 2 },
    { id: 'runners-fast-clumsy-and-never-alone', label: 'Runners: fast, clumsy, and never alone', level: 2 },
    { id: 'stalkers-the-ones-that-hunt-you-back', label: 'Stalkers: the ones that hunt you back', level: 2 },
    { id: 'clickers-blind-lethal-and-completely-learnable', label: 'Clickers: blind, lethal, and completely learnable', level: 2 },
    { id: 'bloaters-armored-slow-and-flammable', label: 'Bloaters: armored, slow, and flammable', level: 2 },
    { id: 'mixed-rooms-and-how-to-break-them', label: 'Mixed rooms and how to break them', level: 2 },
    { id: 'what-to-spend-on-each-type', label: 'What to spend on each type', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `A clicker cannot see you. It also cannot be strangled. Those two sentences, taken together, decide more encounters in The Last of Us than any weapon upgrade you will ever buy at a workbench. The first one means you can walk past a clicker at conversational distance if your feet are slow and your nerve holds. The second means that if it does grab you and you have no shiv in your backpack, you are dead — not hurt, dead, on any difficulty, instantly.

That is the whole design of this game's monsters in miniature. Each infected stage is a puzzle with a published solution, and the punishment for not knowing it is total. Nobody grinds their way past a clicker.

This guide covers the four infected stages in the first game — The Last of Us, its Remastered and Part I versions, and the Left Behind DLC. It does not cover shamblers or the rat king, because those are Part II creatures. New here? Start with our [The Last of Us coverage hub](/blog/the-last-of-us) or the wider [Mythras blog](/blog).

Mild encounter spoilers ahead: this guide names a few chapters and the enemy types they contain. No story beats, no character fates.

## The four stages, and why the order matters

The infected are not four different monsters. They are one monster at four points on a clock, and the clock is how long the Cordyceps fungus has been eating that person's brain. That framing is the single most useful thing you can hold in your head, because every behavioral quirk falls out of it.

| Stage | Name | Time since infection | Sight | Signature threat |
| --- | --- | --- | --- | --- |
| 1 | Runner | Within about two days | Poor, but functional | Speed and numbers |
| 2 | Stalker | Roughly two weeks to a year | Runner-level, one eye | Ambush, uses cover |
| 3 | Clicker | Roughly a year | None — fully blind | Instant-kill grab |
| 4 | Bloater | Several years | None — fully blind | Armor plating, mycotoxin |

The fungus attacks the eyes first. That is why a runner already has bad eyesight, why a stalker is usually down to a single working eye, and why clickers and bloaters have no eyes left at all and hunt with a crude, self-taught echolocation instead. The clicking that gives clickers their name is not a threat display. It is sonar.

Run the logic forward and the trade becomes obvious: **the longer something has been infected, the less it can see and the harder it is to kill.** Early stages find you easily but die easily. Late stages are nearly impossible to kill efficiently but are trivially easy to walk around, because they genuinely do not know you exist until you make a sound. Every good encounter in this game is built on that tension.

## Runners: fast, clumsy, and never alone

![Joel choking out a runner from behind — the first infected stage can be silently strangled, unlike a clicker.](/images/blog/the-last-of-us/the-last-of-us-infected-guide/runner.webp)

Runners are people who turned within the last day or two. They still look mostly human, they still moan in a recognizably human voice, and they still have working — if degraded — eyes. Their skin is pale and lesioned and their hair is falling out, but the person is visually still in there. The game leans on this deliberately, and it works.

Mechanically, a runner is the only infected stage with a full set of options against it. You can strangle one from behind, silently, at no resource cost. You can shiv one. You can brick or bottle one and follow up with a melee weapon. You can shoot one, and it will die to a modest number of bullets. Nothing about a single runner is hard.

The catch is that runners do not come as single runners. They migrate and attack in packs, and their attack pattern is to flail and trample — to swarm you into a corner where three of them are landing hits while you are still recovering from the first. A runner alone is a non-event. Four runners in an open room is how careless players actually die.

A quirk worth knowing: some runners are passive. They will stand hunched and moaning and will not attack unless you get extremely close or throw something near them. When startled, they screech — and the screech is what brings the pack. That is your real failure state. Not the runner. The noise.

> The runner rule: never fight the second one. Kill the first quietly, reposition, kill the next quietly. The moment two are aware of you simultaneously, back out of the room and let them re-lose you, because runners give up their search far more readily than clickers do.

## Stalkers: the ones that hunt you back

![A stalker, the second infected stage, with early fungal growth across its face — it takes cover and ambushes rather than charging.](/images/blog/the-last-of-us/the-last-of-us-infected-guide/stalker.webp)

Stalkers are the least common and, pound for pound, the most annoying stage. They have the vision and speed of a runner combined with the aggression of a clicker, and — uniquely among the infected — a shred of tactics. Fungal growth has started across the head and face, usually leaving one working eye, and the pseudo-echolocation is beginning to develop.

What makes them different is behavior. Stalkers do not charge on sight. They strafe, they break line of sight, they take cover, and they close the distance while you are looking somewhere else. The name is not decoration. They are also skittish in a way that reads, in play, as intelligence: they will duck away, reposition, and reappear from an angle you had already cleared. Their croaking carries, but be careful with that tell — in several areas the croaking is pure ambience with no stalker attached to it.

Their grab can be shaken off, unlike a clicker's, but succeeding at the grab still kills you outright. So "shakeable" is not the reassurance it sounds like.

Here is the falsifiable bit most guides get wrong: **stalkers headline only two encounters in the base game.** Once in the basement of the hotel in Pittsburgh, alongside a bloater, and once in the sewers alongside a pair of clickers. They also turn up in Left Behind. That rarity is exactly why they land so hard — you have spent hours training yourself to read runner and clicker behavior, and then the game hands you something that uses cover.

Against stalkers, stop trying to hold a corner. Corners are what they exploit. Take a position with two exits, keep your back to a wall you have already checked, and use a shotgun or a bow rather than a pistol, because you will typically get one clean shot before it breaks line of sight again.

## Clickers: blind, lethal, and completely learnable

The clicker is the best enemy in the game and it is not close. Roughly a year in, the fungus has split the host's face open and grown protective plating across it. The eyes are gone entirely. In exchange, the host has developed echolocation and strength well beyond a healthy human's.

Everything you need to know follows from three rules:

1. **It is completely blind.** Sight is not a variable. Sound is the only variable. Crouch-walking, staying off broken glass, and simply moving slowly will carry you past clickers that are two metres away.
2. **Its grab is an instant kill, and it cannot be strangled.** If a clicker grabs you, a shiv is the only thing that saves you — and only if you have taken the Shiv Master upgrade, which lets Joel stab out of a clicker's grip. Even then, it does not work if the grab came from directly behind.
3. **Its head is armored.** The fungal plating exists specifically to protect the brain. A direct headshot from a weapon as heavy as the revolver will break off a chunk of fungus and leave the brain intact. Do not treat a clicker head like a human head.

That third point is the one that ruins runs. Players carry over their habits from every other shooter, put two revolver rounds into a clicker's face, and are genuinely shocked when it keeps coming. The shotgun, the bow at close range, and fire are what actually resolve clickers efficiently. A bow shot is also silent, which matters enormously, because clickers are relentless searchers — agitate one and it will roam the area hunting the source of the sound long after a runner would have wandered off.

The efficient answer, when the room allows it, is not to resolve them at all. A clicker you never touched cost you nothing. Our [crafting and upgrade guide](/blog/the-last-of-us/the-last-of-us-crafting-guide) goes deeper on why a stockpile of unspent shivs is the real clicker insurance policy.

## Bloaters: armored, slow, and flammable

![A bloater in close-up — the fourth infected stage, encased in thick bioluminescent fungal armor plating and mycotoxin pouches.](/images/blog/the-last-of-us/the-last-of-us-infected-guide/bloater.webp)

Years of infection produce a bloater: an enormous, fungus-encrusted thing whose entire body is wrapped in what functions as armor plating, studded with bioluminescent mycotoxin pouches. It will absorb multiple shotgun and hunting rifle rounds, and it shrugs off hatchets and machetes that would end anything else in the game.

It is also blind, slow, and uncoordinated — its echolocation is noticeably cruder than a clicker's, and its clicking is deeper and more of a groan. Being predictable is the bloater's one gift to you. It telegraphs, it lumbers, and it cannot corner.

Two things will kill you. The grab, which is an unblockable instant death with no counter whatsoever — there is no shiv escape from a bloater, its armor and mass rule that out. And the mycotoxin sacks it lobs at you, which burst on impact and damage you over time inside the resulting cloud. Do not stand in the cloud. Do not try to shoot through the cloud. Move.

The answer is fire. All infected are vulnerable to it, and bloaters most usefully so: a molotov cocktail does more work than a magazine of anything. Molotovs, the flamethrower, and nail bombs are what a bloater is priced for, which is exactly why the resource math in this game rewards hoarding them for the two or three moments that need them.

One more genuinely important detail: **not every bloater is meant to be killed.** Some are scripted as unkillable outside of cutscenes — the one Joel and Ellie meet in the Wyoming hotel being the famous case. If you have emptied your molotov stock into a bloater and it has not flinched, the game is telling you to run to the objective, not to keep spending.

## Mixed rooms and how to break them

![Infected swarming a group of human survivors — mixed encounters can often be triggered deliberately and left to resolve themselves.](/images/blog/the-last-of-us/the-last-of-us-infected-guide/mixed-encounter.webp)

Single-type rooms are tutorials. The real encounters mix stages, and mixed rooms have a grammar:

- **Clickers set the tempo; runners set the deadline.** Clickers punish speed, runners punish patience. In a mixed room, resolve runners first where you safely can — they are the ones who will spot you visually and scream — then work the clickers on your own schedule.
- **Bricks and bottles are targeting tools, not just distractions.** A thrown bottle pulls blind infected to a fixed point. That converts a wandering clicker into a stationary one, which is the difference between a clean shiv kill and a coin flip.
- **Doorways are traps.** Infected swarm, and a doorway that funnels them also pins you. Prefer rooms with two exits and a lap you can run.
- **Human enemies and infected will fight each other.** If a level puts both in play, letting the hunters walk into the clickers is free damage and free ammunition.

## What to spend on each type

Resource discipline is the actual skill ceiling in this game, especially once you climb the difficulties. A rough spending guide:

| Type | First choice | Second choice | Never |
| --- | --- | --- | --- |
| Runner | Strangle from behind | Melee weapon, bricks | Rifle ammunition |
| Stalker | Shotgun, bow | Nail bomb if grouped | Pistol at range |
| Clicker | Avoidance, then shiv or bow | Shotgun, molotov | Revolver headshots |
| Bloater | Molotov or flamethrower | Nail bomb | Melee of any kind |

The pattern: **the earlier the stage, the cheaper the tool should be.** Every bullet you fire at a runner is a bullet you do not have for the bloater two chapters from now. On the higher difficulties this is not a stylistic preference, it is the entire game — see our [Grounded mode guide](/blog/the-last-of-us/the-last-of-us-grounded-mode-guide) for how brutally that math tightens.

## Quick Action Checklist

- Treat the four stages as one timeline: more time infected means less sight and more durability.
- Never fight a second runner you did not plan for. The screech, not the runner, is the threat.
- Assume every clicker is blind and act accordingly — crouch, go slow, and stop panicking about being seen.
- Carry at least one spare shiv into every spore area. It is the only counter to a clicker grab.
- Buy Shiv Master with supplements early. It converts the game's worst instant-death into a survivable mistake.
- Do not shoot clickers in the head with the revolver. The fungal plate is armor, and it holds.
- Save molotovs and nail bombs for bloaters, and check whether the bloater is actually killable before spending everything.
- Never stand in a mycotoxin cloud, and never try to melee a bloater.
- Throw a bottle or brick before committing to any blind-infected takedown. Fixed targets are safe targets.
- In mixed rooms, clear runners quietly first, then work clickers at your own pace.`,
  faq: [
    {
      question: 'How many infected types are in the first The Last of Us?',
      answer:
        'Four: runners, stalkers, clickers and bloaters. They are progressive stages of the same Cordyceps infection rather than separate creatures. Shamblers and the rat king are Part II enemies and do not appear in the first game, its Remastered release, Part I, or Left Behind.',
    },
    {
      question: 'Can you strangle a clicker in The Last of Us?',
      answer:
        'No. Clickers cannot be strangled, which is what makes them so dangerous — a clicker grab is an instant kill. The only escape is a shiv, and only if you have purchased the Shiv Master skill upgrade with supplements. Even Shiv Master will not save you if the clicker grabs you from directly behind.',
    },
    {
      question: 'Why do headshots not kill clickers instantly?',
      answer:
        'The fungal plating that has grown over a clicker face acts as armor for the brain underneath. A direct head shot even from a powerful weapon like the revolver will break off a chunk of fungus without harming the brain. Use the shotgun, the bow at close range, or fire instead.',
    },
    {
      question: 'What is the best way to kill a bloater?',
      answer:
        'Fire. All infected are vulnerable to it and bloaters especially so, since their fungal armor absorbs multiple shotgun and hunting rifle rounds. Molotov cocktails and the flamethrower are the efficient answers, with nail bombs as backup. Melee is never an option, and a bloater grab is an unblockable instant kill with no shiv counter.',
    },
    {
      question: 'How often do stalkers appear in the game?',
      answer:
        'Rarely. Stalkers headline only two encounters in the base campaign — the hotel basement in Pittsburgh, where they appear alongside a bloater, and the sewers, where they appear with a pair of clickers. They also feature in the Left Behind DLC. Their rarity is a large part of why they feel so disorienting.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/the-last-of-us', anchor: 'The Last of Us coverage hub' },
    {
      href: '/blog/the-last-of-us/the-last-of-us-crafting-guide',
      anchor: 'The Last of Us crafting and upgrade guide',
    },
    {
      href: '/blog/the-last-of-us/the-last-of-us-grounded-mode-guide',
      anchor: 'The Last of Us Grounded mode guide',
    },
  ],
  externalSources: [
    { url: 'https://thelastofus.fandom.com/wiki/Infected', title: 'Infected — The Last of Us Wiki' },
    { url: 'https://thelastofus.fandom.com/wiki/Clicker', title: 'Clicker — The Last of Us Wiki' },
    { url: 'https://thelastofus.fandom.com/wiki/Bloater', title: 'Bloater — The Last of Us Wiki' },
  ],
  tldr:
    'The Last of Us has four infected stages — runners, stalkers, clickers and bloaters — which are the same infection at four points in time. The longer something has been infected, the less it can see and the tougher it is to kill: runners still have working eyes but die easily, while clickers and bloaters are completely blind yet armored. Strangle runners, shotgun or avoid clickers, and burn bloaters with molotovs.',
};
