import type { BlogPost } from '../../blogTypes';

export const minaTheHollowerPatchNotesExplained: BlogPost = {
  slug: 'mina-the-hollower-patch-notes-explained',
  game: 'mina-the-hollower',
  category: 'game-guides',
  topicCluster: 'mina-guides',
  tags: ['patch-notes', 'updates', 'balance', 'accessibility', 'modifiers'],

  title: 'Mina the Hollower Patch Notes Explained: What 1.0.1 to 1.0.6 Changed',
  metaDescription:
    'Six Mina the Hollower patches in, here is what actually changed: the Mist Shift nerf, boss damage tuning, modifier fixes, and why consoles sit a version behind.',
  excerpt:
    'Yacht Club has shipped six patches for Mina the Hollower. One of them quietly nerfed your healing, several retuned boss damage, and consoles are still a version behind PC. Here is the readable version.',
  featuredImagePrompt:
    'Game Boy Color styled pixel art of a mouse heroine facing a large boss in a trap-filled stone chamber',

  heroImage: '/images/blog/mina-the-hollower/mina-the-hollower-patch-notes-explained/hero.webp',
  heroImageAlt:
    'A boss chamber in Mina the Hollower with a large green frog-like face, spike traps, and Mina navigating hazards',
  imageSources: [
    {
      src: '/images/blog/mina-the-hollower/mina-the-hollower-patch-notes-explained/hero.webp',
      sourceUrl: 'https://www.yachtclubgames.com/press/mina-the-hollower',
      license: 'Official Yacht Club Games press kit screenshot, provided for editorial/press use. (c) Yacht Club Games.',
    },
    {
      src: '/images/blog/mina-the-hollower/mina-the-hollower-patch-notes-explained/waterside-boss.webp',
      sourceUrl: 'https://www.yachtclubgames.com/press/mina-the-hollower',
      license: 'Official Yacht Club Games press kit screenshot, provided for editorial/press use. (c) Yacht Club Games.',
    },
    {
      src: '/images/blog/mina-the-hollower/mina-the-hollower-patch-notes-explained/starfield-traversal.webp',
      sourceUrl: 'https://www.yachtclubgames.com/press/mina-the-hollower',
      license: 'Official Yacht Club Games press kit screenshot, provided for editorial/press use. (c) Yacht Club Games.',
    },
    {
      src: '/images/blog/mina-the-hollower/mina-the-hollower-patch-notes-explained/bone-up.webp',
      sourceUrl: 'https://www.yachtclubgames.com/press/mina-the-hollower',
      license: 'Official Yacht Club Games press kit screenshot, provided for editorial/press use. (c) Yacht Club Games.',
    },
  ],

  publishDate: '2026-07-22T00:00:00.000Z',
  lastUpdated: '2026-07-22T00:00:00.000Z',

  primaryKeyword: 'mina the hollower patch notes',
  secondaryKeywords: [
    'mina the hollower update 1.0.6',
    'mina the hollower mist shift nerf',
    'mina the hollower latest version',
    'mina the hollower switch update',
    'mina the hollower balance changes',
    'mina the hollower modifier fixes',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'monthly',
  evergreen: false,
  readingTimeMin: 9,

  toc: [
    { id: 'where-every-platform-actually-sits', label: 'Where Every Platform Actually Sits', level: 2 },
    { id: 'the-quiet-nerf-mist-shift-heals-less-now', label: 'The Quiet Nerf: Mist Shift Heals Less Now', level: 2 },
    { id: 'boss-damage-has-been-retuned-more-than-once', label: 'Boss Damage Has Been Retuned More Than Once', level: 2 },
    { id: 'the-softlock-purge', label: 'The Softlock Purge', level: 2 },
    { id: 'the-modifier-suite-got-most-of-the-attention', label: 'The Modifier Suite Got Most of the Attention', level: 2 },
    { id: 'screen-scaling-went-from-80-percent-to-20', label: 'Screen Scaling Went From 80 Percent to 20', level: 3 },
    { id: 'the-randomizers-were-the-buggiest-part', label: 'The Randomizers Were the Buggiest Part', level: 3 },
    { id: 'feats-and-achievements-finally-agree-with-each-other', label: 'Feats and Achievements Finally Agree With Each Other', level: 2 },
    { id: 'performance-input-and-the-pc-specific-stuff', label: 'Performance, Input, and the PC-Specific Stuff', level: 2 },
    { id: 'what-six-patches-did-not-change', label: 'What Six Patches Did Not Change', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `The version of Mina the Hollower people reviewed in late May is not the version running on your machine today. Yacht Club has shipped six patches since launch, and they are not all cosmetic. One of them made a healing tool restore less health and stripped its invulnerability window. Several retuned how hard specific bosses hit. A pile of them fixed softlocks that could strand a save.

Yacht Club publishes a single running update-notes page, which is great for transparency and terrible for reading. It is a wall of one-line fix entries with no summary and no editorial. So here is the version with the noise removed: what actually changed, what it means for how you play, and one thing that conspicuously did not change.

![A boss chamber in Mina the Hollower with a large green frog-like face, spike traps, and Mina navigating hazards](/images/blog/mina-the-hollower/mina-the-hollower-patch-notes-explained/hero.webp)

## Where Every Platform Actually Sits

Start here, because half the "is this bug fixed?" arguments online are two people on different builds.

As of the June 26, 2026 update post, Yacht Club lists the current build as **1.0.6** on Steam, GOG, and Humble, with the DX11 branch also at 1.0.6. The Intel Mac branch trails at 1.04. Nintendo Switch, Switch 2, PlayStation 5, and Xbox Series X and S are all listed at **1.0.5**.

That is the practical takeaway for console players: you are one patch behind, and the patch you are missing is the biggest one. If you are on Switch or PS5 and reading about the Mist Shift change or the autoscroll adjustments below, those are not live for you yet at the time of writing.

Steam users can also opt into a beta branch, listed at 1.06, which is where the newest build lands first. Standard advice applies: the beta branch is not where you want to be mid-playthrough unless you enjoy being the test case.

## The Quiet Nerf: Mist Shift Heals Less Now

The single most consequential line in the entire patch history is buried in 1.0.6's balance section. Three entries, all about the same ability:

- Mist Shift restores less health.
- The invulnerability period at the completion of Mist Shift was removed.
- Mist Shift now has consistent hang time (part of a broader 120 FPS consistency pass).

I am not going to pretend to more detail than the notes give. What the notes make unambiguous is the direction: an ability that both healed you and handed you free invulnerability frames on the back end got nerfed on both axes at once. That is not a tuning nudge, that is a developer looking at a tool that was doing two jobs too well.

If your habit was to lean on that recovery in longer fights, 1.0.6 is going to feel worse and you should know why before you blame yourself. The general healing economy in this game is thin on purpose, and the [sidearms and trinkets guide](/blog/mina-the-hollower/mina-the-hollower-sidearms-trinkets-guide) covers the other pillar of it: exactly one of the fourteen sidearms heals you, and it costs Joules to use.

## Boss Damage Has Been Retuned More Than Once

Boss balance is the other recurring theme, and it goes both directions rather than being a blanket difficulty cut.

Patch 1.0.6 lists damage adjustments for the Orrery Warden (explicitly a boost to some attack damage), Willis and the Carving Man, the Congealed, Ultima, Lionel, and Willow the Wisp. Patch 1.0.5 went the other way in places, reducing Clacker damage and increasing the Bubble Ring's invulnerability.

Two things worth pulling out of that. First, "damage adjustments" without a stated direction usually means a specific attack was out of line with the rest of the fight, not that the boss got globally easier. Second, the Orrery Warden entry says *boost*, in plain language. If a fight you cleared in June feels meaner on a replay, you are not imagining it.

None of this changes the fundamentals of how you approach a boss. Burrow invulnerability is still the answer to most patterns, and your weapon choice still matters more than your stat line. The [weapons guide](/blog/mina-the-hollower/mina-the-hollower-weapons-guide) breaks down which of the five actually earns its slot in a long fight.

![Mina facing a large purple tentacled creature beside dark water on a wooden dock in Mina the Hollower](/images/blog/mina-the-hollower/mina-the-hollower-patch-notes-explained/waterside-boss.webp)

## The Softlock Purge

If you played at launch and got stuck somewhere geometrically stupid, there is a decent chance it has a line item now. Across 1.0.3 through 1.0.6 the notes fix:

- Train-related softlocks and Thorne interaction softlocks (1.0.6).
- Boss phase softlocks, plus Beast Mina uppercut clipping through walls (1.0.6).
- Burrow behavior fixes across several scenarios, including burrowing under logs while wearing Traction Treads, which combined with fire to strand players (1.0.3 and 1.0.4).
- The Carving Man corner transition, which stuck players and got fixed twice across 1.0.3 and 1.0.4.
- Proto Spark door behavior that could lock you out of the Deprived Path (1.0.5).
- Multiple out-of-bounds respawn scenarios and pit-death respawn bugs, including one at Locomotress Agness (1.0.2 and 1.0.5).
- Spark system corrections for doors and Spark collection (1.0.6).

The pattern is boring and reassuring: these are almost all edge cases where a movement tool met level geometry in a way nobody tested. Given that burrowing is simultaneously your dodge, your jump, and your traversal verb, as laid out in the [beginner guide](/blog/mina-the-hollower/mina-the-hollower-beginner-guide), a long tail of burrow-versus-geometry bugs was inevitable.

The practical upshot: if you shelved a save because of a stuck state, load it on the current build before you write it off.

## The Modifier Suite Got Most of the Attention

Mina ships over 200 modifiers instead of a difficulty slider, and by raw line count that system has absorbed more patch attention than combat has. That tracks. A difficulty system built out of hundreds of toggles has hundreds of interaction surfaces.

### Screen Scaling Went From 80 Percent to 20

The cleanest accessibility win in the whole history is in 1.0.2: screen scaling now allows a minimum of 20 percent, down from 80 percent. For anyone playing a Game Boy Color-styled game on a large display or at a distance, that is the difference between a usable image and squinting. Same patch also expanded which modifiers are enabled by default, specifically so the Veteran combo modifier is reachable, and restored the large art panorama introduction for the final level, which was simply missing at launch.

### The Randomizers Were the Buggiest Part

The chaos-oriented modifiers took the most fixing, which surprises nobody:

- Warp Shuffler had both its death location and default location corrected in 1.0.6, and the Septemburg schoolhouse door arrangement is now accounted for. Yacht Club flags directly that this last fix breaks existing warp-shuffled saves.
- Item Shuffler had shop stacking issues resolved.
- The Item Randomizer had an outright crash fixed in 1.0.5.
- The Invisibility modifier needed pipe and water valve fixes.
- The rain modifier crashed in Kindle Woods until 1.0.3.
- New Game Plus modifier unlocks were corrected in 1.0.6, alongside behavioral clarifications: No Aggro now applies to guards, and No Darkness keeps the away monster away.

If you bounced off a randomizer run early because it crashed or dead-ended, that was the game's fault and most of it is patched. The exploration-side modifiers that matter most for comfort, like No Pit Damage, are covered in the [exploration tips](/blog/mina-the-hollower/mina-the-hollower-exploration-tips), and none of the patches touched the underlying rule that assist modifiers disable Feats.

![Mina crossing floating platforms through a nebula-filled starfield dungeon in Mina the Hollower](/images/blog/mina-the-hollower/mina-the-hollower-patch-notes-explained/starfield-traversal.webp)

## Feats and Achievements Finally Agree With Each Other

Feats are the in-game achievement layer, wired to platform achievements. At launch they could desync, which is exactly the sort of thing that makes completionists rage-quit.

Patch 1.0.5 added the fix on Steam: you can now force achievements to sync with Feats from the menu. Patch 1.0.6 added Xbox title-screen achievement upload and cleaned up several individual Feats, including making the dodging-pendulum Feat's damage counter reset on death and stopping the training dummy from granting the combo capacitor Feat. Patch 1.0.4 similarly made the combo capacitor reset on death.

Translation: a couple of Feats were farmable in ways Yacht Club did not intend, and those doors are now closed. If you were planning to grind a combo Feat on the dummy, pick a different plan.

![The Bone Up level-up screen in Mina the Hollower showing Attack increasing from 7 to 8 alongside Defense and other stat costs in Bones](/images/blog/mina-the-hollower/mina-the-hollower-patch-notes-explained/bone-up.webp)

## Performance, Input, and the PC-Specific Stuff

The PC branch got the most infrastructure work, which is where a lot of the 1.0.6 value sits:

- Three new command line arguments: \`-force-device-index\`, \`-max-render-fps\`, and \`-disable-rgb\`.
- A framerate cap option when vsync is disabled (1.0.5).
- 120 FPS consistency work covering jump hang time, Mist Shift, and the charge lantern.
- A controller startup crash fix, plus proper multi-controller support added in 1.0.4 and 1.0.5.
- Intel Iris Xe weather effect corruption resolved.
- Linux got library linking improvements, Wayland support, a memory leak fix, and a fullscreen-to-windowed crash fix.
- Steam Cloud save stutter resolved, and Steam Deck pixel scaling no longer cycles unprompted.

Presentation got a pass too: Mirror mode now flips audio panning as well as the image, and the scarf accessory respects your custom palette.

## What Six Patches Did Not Change

Here is the honest read of the whole history. Across 1.0 through 1.0.6, there is no line item reducing player knockback.

That is the most consistent criticism the game has taken, from professional reviews and player threads alike, and it remains untouched by name. Yacht Club has adjusted specific enemy damage, specific boss attacks, and specific invulnerability windows, but the core rule that getting hit launches you a long way, frequently into a pit or a second hazard, is evidently working as intended.

Take that as a design statement rather than an oversight. If knockback into pits is the thing killing your runs, the answer is still the modifier suite, still No Pit Damage, and still the positional habits of fighting away from ledges. That was true in May and it is true on 1.0.6.

## Quick Action Checklist

- Check your build before joining any "is this fixed" argument. PC is on 1.0.6; Switch, Switch 2, PS5, and Xbox are on 1.0.5.
- If you are on the Steam beta branch mid-playthrough, consider dropping back to the stable one.
- Expect less healing from Mist Shift on 1.0.6, and no invulnerability at the end of it. Plan fights accordingly.
- Do not assume boss patches made things easier. The Orrery Warden explicitly got an attack damage boost.
- Reload any save you abandoned to a softlock. Train, Thorne, boss phase, burrow, and Proto Spark door stuck states all have fixes.
- If the game is hard to read on your display, drop screen scaling below the old 80 percent floor. The minimum is 20 percent as of 1.0.2.
- Randomizer and shuffler runs are far more stable now, but the Septemburg door fix breaks existing warp-shuffled saves.
- On Steam, force achievements to sync with Feats from the menu if yours drifted.
- On PC, use \`-max-render-fps\` if you want a hard framerate ceiling without touching vsync.
- Knockback was never patched. Build and position around it, or turn on No Pit Damage and accept losing Feats.
`,

  faq: [
    {
      question: 'What is the latest version of Mina the Hollower?',
      answer:
        'As of the June 26, 2026 update post, Yacht Club lists 1.0.6 on Steam, GOG, Humble, and the DX11 branch, with the Intel Mac branch at 1.04. Nintendo Switch, Switch 2, PlayStation 5, and Xbox Series X and S are all on 1.0.5, one patch behind PC.',
    },
    {
      question: 'Did Mina the Hollower nerf Mist Shift?',
      answer:
        'Yes. Patch 1.0.6 states that Mist Shift restores less health and removes the invulnerability period at the completion of Mist Shift. The same patch gave it consistent hang time as part of a 120 FPS consistency pass. Both healing and the free invulnerability frames were reduced in the same update.',
    },
    {
      question: 'Have the bosses in Mina the Hollower been made easier?',
      answer:
        'Not uniformly. Patch 1.0.6 lists damage adjustments for the Orrery Warden, Willis and the Carving Man, the Congealed, Ultima, Lionel, and Willow the Wisp, and the Orrery Warden entry explicitly says some attack damage was boosted. Patch 1.0.5 did reduce Clacker damage and increase Bubble Ring invulnerability, so the tuning goes both directions.',
    },
    {
      question: 'Has Yacht Club fixed the knockback in Mina the Hollower?',
      answer:
        'No. Across patches 1.0.1 through 1.0.6 there is no line item reducing player knockback. Individual enemy damage values and specific invulnerability windows have been adjusted, but the knockback behavior itself remains as shipped. The modifier suite, including No Pit Damage, is still the intended remedy.',
    },
    {
      question: 'Were the Mina the Hollower randomizer modifiers broken?',
      answer:
        'Several had genuine bugs that are now fixed. The Item Randomizer had a crash resolved in 1.0.5, Item Shuffler had shop stacking issues fixed, Warp Shuffler had its death and default locations corrected in 1.0.6, the Invisibility modifier needed pipe and water valve fixes, and the rain modifier crashed in Kindle Woods until 1.0.3. Note that the Septemburg schoolhouse door fix breaks existing warp-shuffled saves.',
    },
    {
      question: 'How do I fix Feats not syncing with achievements in Mina the Hollower?',
      answer:
        'Patch 1.0.5 added an option on Steam to force achievements to sync with Feats from the menu. Patch 1.0.6 added Xbox title screen achievement upload. Several individual Feats were also corrected, including the dodging pendulum damage counter resetting on death and the training dummy no longer granting the combo capacitor Feat.',
    },
    {
      question: 'Should I use the Mina the Hollower Steam beta branch?',
      answer:
        'Only if you want the newest build first and accept the risk. Yacht Club lists a beta branch that receives builds ahead of the stable release. For a normal playthrough, stay on the stable branch, since patches have occasionally changed behavior in ways that affect existing saves, such as the Septemburg door fix breaking warp-shuffled games.',
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/mina-the-hollower', anchor: 'Mina the Hollower coverage hub' },
    { href: '/blog/mina-the-hollower/mina-the-hollower-beginner-guide', anchor: 'Mina the Hollower beginner guide' },
    { href: '/blog/mina-the-hollower/mina-the-hollower-weapons-guide', anchor: 'Mina the Hollower weapons guide' },
    { href: '/blog/mina-the-hollower/mina-the-hollower-sidearms-trinkets-guide', anchor: 'Mina the Hollower sidearms and trinkets guide' },
    { href: '/blog/mina-the-hollower/mina-the-hollower-exploration-tips', anchor: 'Mina the Hollower exploration tips' },
  ],

  externalSources: [
    { url: 'https://www.yachtclubgames.com/blog/mina-the-hollower-update-notes/', title: 'Mina the Hollower Update Notes (Yacht Club Games, official)' },
    { url: 'https://www.yachtclubgames.com/games/mina-the-hollower/', title: 'Mina the Hollower official game page (Yacht Club Games)' },
    { url: 'https://store.steampowered.com/app/1875580/Mina_the_Hollower/', title: 'Mina the Hollower on Steam' },
  ],

  tldr:
    'Six patches in, PC sits at 1.0.6 while Switch, Switch 2, PS5, and Xbox are still on 1.0.5. The headline change is 1.0.6 nerfing Mist Shift twice over: it restores less health and no longer grants invulnerability when it ends. Boss damage has been retuned in both directions, with the Orrery Warden explicitly boosted. A long list of softlocks, randomizer bugs, and Feat-sync problems are fixed, and screen scaling now goes down to 20 percent. What has never been patched is knockback, which remains the game plainly working as intended.',
};
