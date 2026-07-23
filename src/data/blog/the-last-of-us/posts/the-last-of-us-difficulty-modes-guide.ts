import type { BlogPost } from '../../blogTypes';

export const theLastOfUsDifficultyModesGuide: BlogPost = {
  slug: 'the-last-of-us-difficulty-modes-guide',
  game: 'the-last-of-us',
  category: 'game-guides',
  topicCluster: 'tlou-guides',
  tags: ['difficulty', 'settings', 'permadeath', 'accessibility', 'beginner'],
  title: 'The Last of Us Difficulty Modes Explained (Which to Play)',
  metaDescription:
    'Easy to Grounded, plus Permadeath, Speedrun and 60+ accessibility settings in The Last of Us Part I - what each mode changes and which one you should actually pick.',
  excerpt:
    'The Last of Us has five difficulty rungs plus a Permadeath toggle, and picking wrong ruins a story that only lands once. Here is what every setting actually changes and which one fits you.',
  featuredImagePrompt:
    'A game difficulty-selection menu screen from a post-apocalyptic survival game, five options listed with descriptions, muted green and amber UI over a dim ruined interior',
  heroImage: '/images/blog/the-last-of-us/the-last-of-us-difficulty-modes-guide/difficulty-menu.webp',
  heroImageAlt:
    'The difficulty selection screen in The Last of Us, listing the modes you choose between before starting a run.',
  imageSources: [
    {
      src: '/images/blog/the-last-of-us/the-last-of-us-difficulty-modes-guide/difficulty-menu.webp',
      sourceUrl: 'https://thelastofus.fandom.com/wiki/File:Difficulty.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/the-last-of-us/the-last-of-us-difficulty-modes-guide/stealth-takedown.webp',
      sourceUrl: 'https://thelastofus.fandom.com/wiki/File:Ellie_Sneak_Attack.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/the-last-of-us/the-last-of-us-difficulty-modes-guide/infected-lobby.webp',
      sourceUrl: 'https://thelastofus.fandom.com/wiki/File:Tloulobby.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/the-last-of-us/the-last-of-us-difficulty-modes-guide/scouting-overlook.webp',
      sourceUrl: 'https://thelastofus.fandom.com/wiki/File:Tlouoverlook.png',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-23T00:00:00.000Z',
  lastUpdated: '2026-07-23T00:00:00.000Z',
  primaryKeyword: 'the last of us difficulty modes',
  secondaryKeywords: [
    'last of us difficulty explained',
    'which difficulty last of us',
    'last of us best difficulty first playthrough',
    'last of us permadeath mode',
    'last of us part 1 difficulty settings',
    'last of us survivor vs grounded',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 10,
  toc: [
    { id: 'what-difficulty-actually-changes-in-this-game', label: 'What difficulty actually changes in this game', level: 2 },
    { id: 'the-five-rung-ladder-at-a-glance', label: 'The five-rung ladder at a glance', level: 2 },
    { id: 'which-difficulty-should-you-actually-pick', label: 'Which difficulty should you actually pick', level: 2 },
    { id: 'survivor-and-grounded-are-a-different-game', label: 'Survivor and Grounded are a different game', level: 2 },
    { id: 'permadeath-speedrun-and-the-part-i-remake-extras', label: 'Permadeath, Speedrun and the Part I remake extras', level: 2 },
    { id: 'accessibility-is-the-real-difficulty-dial', label: 'Accessibility is the real difficulty dial', level: 2 },
    { id: 'can-you-change-difficulty-mid-run', label: 'Can you change difficulty mid-run', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `The Last of Us is a story you only get to hear for the first time once, and the difficulty you pick decides whether that story reaches you or gets buried under checkpoint reloads. That is the real stakes of this menu. Choose too high and a fifteen-minute stealth sequence becomes an hour of restarts that drains every ounce of tension out of the scene. Choose too low and the resource desperation the whole game is built around never actually bites. Getting this right the first time matters more here than in almost any other game.

So this is the decision guide: every difficulty from Easy to Grounded, the Permadeath and Speedrun toggles the Part I remake added on top, and a straight answer on which one to run based on what you actually want out of the playthrough. If you want the deep tactical breakdown of the hardest setting specifically, our [Grounded mode guide](/blog/the-last-of-us/the-last-of-us-grounded-mode-guide) goes rung by rung through that one — this piece is the overview that helps you choose in the first place. Everything else lives on the [The Last of Us coverage hub](/blog/the-last-of-us) and the wider [Mythras blog](/blog).

## What difficulty actually changes in this game

Difficulty in The Last of Us is not a single slider that scales one number. It moves several dials at once, and understanding which dials move is the whole trick to picking well:

- **Enemy damage.** How hard hits land on you, from low on Easy up to triple on Grounded.
- **Supply availability.** How much ammunition, healing, crafting components and melee weaponry the world spawns. This is the dial the game leans on hardest.
- **Enemy AI.** Higher settings do not just inflate health bars; hunters flank, use cover and hunt more intelligently.
- **Information.** Listen Mode, on-screen hints and flashing pickups all switch off as you climb.
- **The HUD itself.** At the very top, your health bar and ammo counter disappear entirely.

Here is the fact that reframes the whole ladder, and almost nobody knows it going in: **your permanent upgrade income does not change with difficulty.** Supplements, parts and collectibles spawn identically on Easy and on Grounded. Only your consumables get scarcer. That means the higher settings are not "less progression" — they are the same progression with a much thinner survival buffer. Keep that in your pocket; it changes how you read every rung below.

## The five-rung ladder at a glance

![The difficulty selection screen in The Last of Us listing the available modes.](/images/blog/the-last-of-us/the-last-of-us-difficulty-modes-guide/difficulty-menu.webp)

| Difficulty | Enemy damage | Supplies | Listen Mode | HUD | Unlock |
| --- | --- | --- | --- | --- | --- |
| Easy | Low | Abundant | On | On | Available from the start; Shiv Master granted free |
| Normal | Baseline | Normal | On | On | Available from the start |
| Hard | Raised | Rare | On | On | Available from the start; enemies use cover and get aggressive |
| Survivor | Double | Extremely rare | **Off** | On | Beat the game once on any difficulty first |
| Grounded | **Triple** | Next to none | **Off** | **Off** | Free in Remastered/Part I; checkpoints thinned, allies stop resupplying |

Read down the damage column and the story looks smooth, but the jumps that actually change how you play are lumpy. The meaningful cliffs are **Normal to Hard**, where the world stops handing you good melee weapons and enemies start flanking, and **Survivor to Grounded**, where the game stops giving you information at all. Everything between those two cliffs is a matter of degree.

## Which difficulty should you actually pick

No hedging — here is the call for each kind of player.

**First time through, here for the story: play Normal.** This is the setting the pacing was tuned around. Combat is tense without being punishing, supplies are tight enough that crafting decisions matter, and you will almost never eat a checkpoint reload long enough to break a scene's mood. If The Last of Us is famous for anything it is the writing, and Normal is the cleanest path to it.

**You want the survival fantasy to actually hurt: play Hard.** This is my quiet favourite for players who have handled a stealth game before. Sharp melee weapons dry up, hunters use cover, and every molotov feels like a real decision. It is the sweet spot where the game's resource economy finally reads as desperate the way the story insists it is — without stripping away the safety nets that make a first run enjoyable. If you have played a Naughty Dog game or a Metro before, start here.

**You have beaten it and want the definitive challenge: play Survivor, then Grounded.** These are earned runs, not opening moves — and Survivor is literally locked until you finish the game once. More on why they are a category apart below.

**You bounce off hard combat and only want the narrative: play Easy without a shred of guilt.** Easy even hands you the Shiv Master skill for free, so clicker grabs stop being instant deaths. The story is identical on every setting. Nobody who matters is checking your difficulty.

The one recommendation I will push back on: do not pick Grounded for your first playthrough because a video told you it is "the intended experience." It is a superb second run and a miserable first one. You cannot appreciate how cleverly Grounded rebalances the game until you have played the version it is rebalancing.

## Survivor and Grounded are a different game

![A stealth takedown from cover in The Last of Us, the core loop that Survivor and Grounded force you to master.](/images/blog/the-last-of-us/the-last-of-us-difficulty-modes-guide/stealth-takedown.webp)

The top two rungs deserve their own paragraph because they are not just "Hard, but more." They remove your information layer. Survivor switches off Listen Mode, hints and prompts, and stops pickups from flashing — you are reading the actual world now, not a set of overlays. Grounded goes all the way and disables the HUD, so your health bar and ammo count are gone too.

There is a genuinely strange wrinkle here that makes Grounded fascinating rather than just brutal: **your own weapons hit harder on it.** On Grounded the revolver and hunting rifle kill unarmoured human enemies in a single shot, and the 9mm drops them in two rather than three. The mode gives you almost no ammunition and then makes every round you do have dramatically more lethal. It is a deliberate rebalance toward a game where you carry six bullets and each one has to resolve a person. That is the kind of design detail our [Grounded mode guide](/blog/the-last-of-us/the-last-of-us-grounded-mode-guide) and [weapons guide](/blog/the-last-of-us/the-last-of-us-weapons-guide) dig into properly.

![A ruined lobby crowded with infected in The Last of Us, the kind of encounter Survivor and Grounded force you to read without Listen Mode.](/images/blog/the-last-of-us/the-last-of-us-difficulty-modes-guide/infected-lobby.webp)

Before you commit to either, make sure your fundamentals are solid. On these settings a single clicker grab is death, so knowing your infected roster cold is non-negotiable — our [infected guide](/blog/the-last-of-us/the-last-of-us-infected-guide) and [crafting and upgrade guide](/blog/the-last-of-us/the-last-of-us-crafting-guide) are the two prerequisites these runs punish gaps in hardest.

## Permadeath, Speedrun and the Part I remake extras

The 2022 Part I remake bolts two extra layers on top of the difficulty ladder, and they stack with any difficulty you choose rather than replacing it.

**Permadeath.** Enable it at the start of a run and death rolls you all the way back — but you choose how far. The remake lets you set the restart point to the start of the current **chapter**, the current **act**, or, for the truly self-destructive, the **entire game**. Whole-game Permadeath on Grounded is the hardest way to experience The Last of Us that exists, and one bad clicker in the final act sends you back to the Boston QZ. It is a flex, not a first run.

**Speedrun mode.** This one is friendlier than it sounds. Flip it on and you get a small clock in the corner tracking your chapter and elapsed time. It can be enabled on New Game or New Game+ at any difficulty, so it is perfectly happy sitting on an Easy run if you just want to see your own pace — you do not have to be chasing a leaderboard.

Neither of these changes the underlying damage or supply numbers. They are challenge and tracking layers you opt into, which is exactly the right way to design them.

## Accessibility is the real difficulty dial

![A high vantage point overlooking a ruined street in The Last of Us, the kind of scouting the game's accessibility options can make more forgiving.](/images/blog/the-last-of-us/the-last-of-us-difficulty-modes-guide/scouting-overlook.webp)

Here is the part the difficulty menu buries: the Part I remake shipped with more than 60 accessibility settings, and they are a far finer instrument than the five preset rungs. You can adjust combat and traversal aids independently of the difficulty label — enhanced listen mode, lock-on aiming, auto pick-ups, and a wall of audio and visual cues among them.

The practical upshot is that "Normal but with a couple of aids on" or "Grounded but with one specific crutch" are both valid, supported ways to play. If you love the tension of a hard run but genuinely cannot track enemies without an assist, turn that one assist on and leave everything else brutal. Treating difficulty as a single word from a five-item list undersells how granular this game actually lets you get.

## Can you change difficulty mid-run

Yes. You can adjust the difficulty from the options menu partway through a playthrough, so a run that turns out too punishing is not a dead end — drop it a rung and keep going. There is no story penalty and no trophy asterisk for finishing a level on a lower setting than you started it.

Two constraints worth knowing. First, **Survivor has to be unlocked** by completing the game once, so it will not appear as an option on a fresh save no matter how the menu tempts you. Second, on **New Game+** your difficulty selection is capped at the highest difficulty you finished your previous run on, or lower — you cannot leapfrog straight to Grounded on a save whose last completed run was Normal. Plan your climb one rung at a time.

## Quick Action Checklist

- First playthrough for the story: pick **Normal**. It is what the pacing was tuned around.
- Want the survival fantasy to actually bite without breaking your first run: pick **Hard**.
- Only here for the narrative: pick **Easy** guilt-free — it even hands you Shiv Master for free.
- Do not start on **Grounded**. It is a brilliant second run and a miserable first one.
- **Survivor** is locked until you beat the game once; **Grounded** thins checkpoints and, oddly, buffs your guns.
- Remember your upgrade income is identical on every difficulty — only consumables get scarcer.
- Use **Permadeath** (chapter, act or whole-game restart) and **Speedrun** mode as opt-in challenge layers on top of any difficulty.
- Explore the 60-plus accessibility settings before assuming a preset is your only option.
- You can drop difficulty mid-run with no penalty; NG+ caps your choice at your last completed difficulty.`,
  faq: [
    {
      question: 'What difficulty should I play The Last of Us on my first time?',
      answer:
        'Normal. The game\'s pacing and resource economy were tuned around it, so combat is tense without being punishing and you will rarely eat a checkpoint reload long enough to break a scene. If you have played stealth-survival games before and want more bite, Hard is the sweet spot. Only play Easy if you are purely here for the story, and avoid Grounded for a first run entirely.',
    },
    {
      question: 'How many difficulty modes does The Last of Us have?',
      answer:
        'Five main difficulty rungs: Easy, Normal, Hard, Survivor and Grounded. Survivor must be unlocked by beating the game once, and Grounded is the hardest. On top of those, the Part I remake adds a Permadeath toggle and a Speedrun mode that stack with any difficulty you choose.',
    },
    {
      question: 'What is the difference between Survivor and Grounded?',
      answer:
        'Survivor doubles enemy damage, makes supplies extremely rare, disables Listen Mode and hints, and stops pickups from flashing. Grounded goes further: enemies deal triple damage, the HUD is disabled entirely, enemy AI is sharper, allies stop resupplying you and many mid-encounter checkpoints are removed. Grounded also, counterintuitively, buffs your own weapons.',
    },
    {
      question: 'How does Permadeath mode work in The Last of Us Part I?',
      answer:
        'You enable it at the start of a run and choose how far a death sends you back: to the start of the current chapter, the current act, or the entire game. It stacks on top of whatever difficulty you selected, so whole-game Permadeath on Grounded is the single hardest way to play. It does not change the underlying damage or supply numbers.',
    },
    {
      question: 'Can I change the difficulty partway through a playthrough?',
      answer:
        'Yes. You can adjust difficulty from the options menu mid-run with no story or trophy penalty, so a run that turns out too punishing is not a dead end. Note that Survivor only appears after you have completed the game once, and on New Game+ your difficulty is capped at the highest difficulty you finished your previous run on.',
    },
    {
      question: 'Does a higher difficulty give fewer upgrades?',
      answer:
        'No. Supplements, parts and collectibles spawn identically on every difficulty. Only consumables — ammunition, healing items, crafting components and melee weapons — get scarcer as you climb. That means your permanent upgrade progression on Grounded is exactly as fast as it is on Easy; the harder settings just give you a thinner survival buffer.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/the-last-of-us', anchor: 'The Last of Us coverage hub' },
    {
      href: '/blog/the-last-of-us/the-last-of-us-grounded-mode-guide',
      anchor: 'The Last of Us Grounded mode guide',
    },
    {
      href: '/blog/the-last-of-us/the-last-of-us-infected-guide',
      anchor: 'The Last of Us infected guide',
    },
    {
      href: '/blog/the-last-of-us/the-last-of-us-crafting-guide',
      anchor: 'The Last of Us crafting and upgrade guide',
    },
    {
      href: '/blog/the-last-of-us/the-last-of-us-weapons-guide',
      anchor: 'The Last of Us weapons guide',
    },
  ],
  externalSources: [
    { url: 'https://thelastofus.fandom.com/wiki/Difficulty', title: 'Difficulty — The Last of Us Wiki' },
    { url: 'https://thelastofus.fandom.com/wiki/Speedrun_Mode', title: 'Speedrun Mode — The Last of Us Wiki' },
    { url: 'https://en.wikipedia.org/wiki/The_Last_of_Us_Part_I', title: 'The Last of Us Part I — Wikipedia' },
  ],
  tldr:
    'The Last of Us has five difficulty rungs — Easy, Normal, Hard, Survivor and Grounded — plus Permadeath and Speedrun toggles the Part I remake stacks on top. Play Normal for a first story run, Hard if you want the survival fantasy to bite, and save Survivor and Grounded (which oddly buffs your guns) for a second run. Upgrade income is identical on every setting; only consumables get scarcer. You can drop difficulty mid-run, and the remake\'s 60-plus accessibility options are a finer dial than the presets.',
};
