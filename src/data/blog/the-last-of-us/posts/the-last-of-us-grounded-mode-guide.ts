import type { BlogPost } from '../../blogTypes';

export const theLastOfUsGroundedModeGuide: BlogPost = {
  slug: 'the-last-of-us-grounded-mode-guide',
  game: 'the-last-of-us',
  category: 'advanced-strategy',
  topicCluster: 'tlou-survival',
  tags: ['grounded', 'difficulty', 'survivor', 'stealth', 'advanced'],
  title: 'The Last of Us Grounded Mode Guide: Survive Triple Damage',
  metaDescription:
    'Grounded strips the HUD, kills Listen Mode, triples enemy damage and cuts checkpoints - but buffs your guns. Every rule explained, plus how to finish a run.',
  excerpt:
    'On Grounded, every enemy hits three times as hard and your HUD is gone. But your revolver also one-shots unarmoured humans, which is the strangest and most useful fact about the hardest mode in the game.',
  featuredImagePrompt:
    'A dark hotel lobby overrun with infected, seen from a crouched vantage behind a toppled reception desk, single shaft of daylight, heavy grain, no interface elements on screen',
  heroImage: '/images/blog/the-last-of-us/the-last-of-us-grounded-mode-guide/lobby.webp',
  heroImageAlt:
    'A derelict lobby crowded with infected in The Last of Us — the kind of room Grounded mode forces you to read without Listen Mode or a HUD.',
  imageSources: [
    {
      src: '/images/blog/the-last-of-us/the-last-of-us-grounded-mode-guide/lobby.webp',
      sourceUrl: 'https://thelastofus.fandom.com/wiki/File:Tloulobby.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/the-last-of-us/the-last-of-us-grounded-mode-guide/difficulty-menu.webp',
      sourceUrl: 'https://thelastofus.fandom.com/wiki/File:Difficulty.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/the-last-of-us/the-last-of-us-grounded-mode-guide/stealth.webp',
      sourceUrl: 'https://thelastofus.fandom.com/wiki/File:Ellie_Sneak_Attack.jpg',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/the-last-of-us/the-last-of-us-grounded-mode-guide/scouting.webp',
      sourceUrl: 'https://thelastofus.fandom.com/wiki/File:Tlouoverlook.png',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-20T00:00:00.000Z',
  lastUpdated: '2026-07-20T00:00:00.000Z',
  primaryKeyword: 'the last of us grounded mode guide',
  secondaryKeywords: [
    'last of us grounded difficulty',
    'last of us grounded tips',
    'last of us survivor vs grounded',
    'how to beat grounded last of us',
    'last of us difficulty levels explained',
    'last of us hardest difficulty',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 13,
  toc: [
    { id: 'what-grounded-actually-changes', label: 'What Grounded actually changes', level: 2 },
    { id: 'every-difficulty-compared', label: 'Every difficulty compared', level: 2 },
    { id: 'the-paradox-where-your-guns-get-stronger', label: 'The paradox where your guns get stronger', level: 2 },
    { id: 'playing-without-a-hud', label: 'Playing without a HUD', level: 2 },
    { id: 'losing-listen-mode', label: 'Losing Listen Mode', level: 2 },
    { id: 'checkpoints-are-the-real-difficulty', label: 'Checkpoints are the real difficulty', level: 2 },
    { id: 'resource-rules-for-a-grounded-run', label: 'Resource rules for a Grounded run', level: 2 },
    { id: 'how-to-approach-an-encounter', label: 'How to approach an encounter', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `On Grounded, a human enemy who is not wearing armour dies to a single revolver round. That is not a typo and it is not a mod. The hardest difficulty in The Last of Us quietly makes your weapons stronger than they are on Easy, and almost nobody who bounces off Grounded in the first two chapters knows it.

That one fact reframes the entire mode. Grounded is not "the same game with fatter enemies." It is a different game with a different weapon economy, a different information layer, and a different relationship to failure — and it rewards a completely different set of habits than the run that got you here.

This guide covers Grounded in the first game: The Last of Us, its Remastered release and the Part I remake, plus Left Behind. Part II has its own seven-tier system with Custom difficulty and Permadeath, and none of that applies here.

If you have not read the fundamentals yet, our [infected guide](/blog/the-last-of-us/the-last-of-us-infected-guide) and [crafting and upgrade guide](/blog/the-last-of-us/the-last-of-us-crafting-guide) are the two prerequisites — Grounded punishes gaps in both harder than it punishes bad aim. Everything else lives on the [The Last of Us coverage hub](/blog/the-last-of-us) and the wider [Mythras blog](/blog).

## What Grounded actually changes

Here is the complete list of what the mode does to you, with nothing embellished:

- **Enemies deal triple damage.** Survivor doubles it; Grounded triples it.
- **Supplies are next to non-existent.** Healing items, ammunition, crafting components and melee weapons all spawn at the floor of the game's range.
- **Listen Mode is disabled.** No wall-hacking, no ping, nothing.
- **The HUD is disabled.** No health bar, no ammunition counter, no reticle furniture.
- **On the Remastered release, the controller light bar stops indicating health.** The one remaining out-of-game health tell is deliberately removed.
- **Enemy AI is sharper than on Survivor.** Not just more aggressive — genuinely better at finding you.
- **Multiple mid-combat and mid-stealth checkpoints are removed.** This is the big one, and it gets its own section below.
- **Allies stop handing you ammunition and health kits**, with a single scripted exception late in the game.
- **Pickups no longer flash.** Loot does not announce itself; you have to actually look at the world.

And one thing that does not change: **supplements, parts and collectibles are identical on every difficulty.** Your upgrade income is exactly the same on Grounded as on Easy. Only consumables get scarcer. That asymmetry is the single most important strategic fact in this guide, and we will come back to it.

Worth knowing for platform archaeology: Grounded shipped as paid DLC on PS3, but it comes unlocked out of the box in Remastered on PS4. Survivor, by contrast, has to be earned — you must beat the game once on any difficulty before it appears.

## Every difficulty compared

![The difficulty selection screen in The Last of Us, showing the five available modes.](/images/blog/the-last-of-us/the-last-of-us-grounded-mode-guide/difficulty-menu.webp)

| Difficulty | Enemy damage | Supplies | Listen Mode | HUD | Notes |
| --- | --- | --- | --- | --- | --- |
| Easy | Low | Abundant | On | On | Shiv Master is granted free rather than purchased |
| Normal | Baseline | Normal | On | On | Sharp melee weapons only start spawning late |
| Hard | Raised | Rare | On | On | Human enemies get aggressive and use cover; machetes and hatchets almost never appear |
| Survivor | Double | Extremely rare | **Off** | On | Hints and prompts disabled; pickups stop flashing |
| Grounded | **Triple** | Next to none | **Off** | **Off** | Checkpoints removed, sharper AI, allies stop resupplying you |

Reading down that table, the jump that matters is not Hard to Survivor. It is **Normal to Hard**, where the world stops giving you good melee weapons, and then **Survivor to Grounded**, where the game stops giving you information.

A note on New Game Plus, because it constrains your plans: your NG+ difficulty selection is capped at the highest difficulty you finished your previous run on, or lower. You cannot leapfrog to Grounded on a save whose last completed run was Normal.

## The paradox where your guns get stronger

This is the part that genuinely surprises people, and it is documented behaviour rather than a rumour. On Grounded, **the player's weapons do more damage than they do on lower difficulties**:

- The **revolver** and the **hunting rifle** kill enemies in one shot.
- The **9mm pistol** kills in two shots rather than three.
- The revolver specifically instantly kills unarmoured non-infected enemies — something it does not do on Easy.

Sit with the implications. Grounded gives you almost no ammunition, and then makes every round you do have dramatically more lethal. That is not the designers being nice; it is a deliberate rebalance toward a game where you carry six bullets and each one must resolve a person.

The tactical consequence: **stop treating the pistol as your default and start treating the revolver as a scalpel.** On Normal, dumping a magazine into a hunter is fine. On Grounded, that same magazine is four dead hunters if you place the shots and do not panic-fire. Players who fail Grounded are usually not failing because they lack ammunition — they are failing because they spend three times more ammunition per kill than the mode assumes.

The corollary is that armour matters far more than it did. The revolver one-shot applies to unarmoured humans. Armoured enemies and the fungal plating on clickers still require the answers from the [infected guide](/blog/the-last-of-us/the-last-of-us-infected-guide) — shotguns, bows and fire.

## Playing without a HUD

Losing the HUD removes two specific numbers: your health and your ammunition count. Both are recoverable if you build the habits.

**Health.** With no bar and, on Remastered, no light bar, you are reading the screen itself. The desaturation and the audio cues — heavier breathing, the heartbeat under the mix — are your health bar now. The practical rule is brutal and simple: on triple damage, **if you have been hit at all, heal at the next safe moment.** Do not ration health kits by trying to estimate a percentage you cannot see. Two hits kill. There is no meaningful "half health" state to optimise around.

**Ammunition.** Count. Genuinely count, out loud if it helps. Six in the revolver, then it is empty. The alternative habit, which works nearly as well, is to reload compulsively during every lull, so that whenever a fight starts you are at a known full state rather than an unknown partial one.

The compensation nobody mentions: with the HUD gone, the game looks extraordinary. Naughty Dog built the environmental storytelling to carry without interface furniture, and Grounded is where that design actually lands.

## Losing Listen Mode

![A stealth takedown from behind cover — without Listen Mode, position and patience replace information.](/images/blog/the-last-of-us/the-last-of-us-grounded-mode-guide/stealth.webp)

Listen Mode being disabled is the change that most alters minute-to-minute play, because it removes your ability to know where enemies are through geometry. Everything becomes line of sight and sound.

Two knock-on effects worth planning around:

First, **the listen mode distance skill is unavailable on Survivor and Grounded.** It is not merely weak on these difficulties — the skill it upgrades is switched off, so the upgrade is off the table. That is one of Joel's six supplement skills removed from your shopping list, which means your supplement budget concentrates onto maximum health, healing speed, crafting speed, weapon sway and Shiv Master. Given that supplement income does not scale with difficulty, **your effective skill economy is actually better on Grounded than on Normal**, because the same 800-supplement pool now chases five useful skills instead of six.

Second, you replace information with **patience and elevation**. Scout from a doorway before entering. Let patrols complete a full loop so you learn the route rather than guessing it. Throw a bottle to a far wall not to distract but to *locate* — the enemy who reacts tells you where an enemy was.

![A high vantage point overlooking a ruined street — scouting from elevation replaces the information Listen Mode used to give you.](/images/blog/the-last-of-us/the-last-of-us-grounded-mode-guide/scouting.webp)

## Checkpoints are the real difficulty

Everything above is survivable. This is the thing that actually ends Grounded runs.

Grounded **removes multiple mid-combat and mid-stealth checkpoints**. On lower difficulties, a long encounter is quietly subdivided — clear the first half, die in the second, and you resume partway through. On Grounded, that subdivision is gone in many encounters. Die at the end of a fifteen-minute stealth sequence and you restart the whole thing, with your resources rolled back to where they were at the start.

The strategic response is not to play more carefully in the moment. It is to **front-load your caution**. Because a death costs you the entire encounter, the expected cost of a slow, boring, methodical approach is far lower than the expected cost of a fast one that works four times out of five. On Normal, a 20% failure rate costs you thirty seconds. On Grounded, it costs you fifteen minutes and every bullet you spent.

This also flips the resource calculus. Spending a molotov to guarantee an encounter closes cleanly is often correct on Grounded even though molotovs are scarce, because failing the encounter costs you every resource you spent in it anyway. **A consumable spent on a won fight is cheaper than a consumable spent on a lost one.**

## Resource rules for a Grounded run

Working from the fact that upgrades are difficulty-independent while consumables are not, here is the resource doctrine:

1. **Loot exhaustively — pickups do not flash.** The visual cue that trained you on Normal is gone. Physically look at shelves, desks, cabinets and corners. This alone separates comfortable Grounded runs from starving ones.
2. **Open every shiv door.** Thirteen doors, 460 parts, guaranteed supplements and consumables inside. Your parts income is unchanged by difficulty, so shiv doors are proportionally the best value they will ever be.
3. **Buy Shiv Master.** On triple damage, a clicker grab is death and it is also the most common way careful players die. This is not optional on Grounded.
4. **Favour molotovs over health kits** with your alcohol and rags. On triple damage, a health kit often cannot out-heal an incoming exchange. Preventing the fight beats surviving it. This inverts the advice that works on Normal — see the [crafting guide](/blog/the-last-of-us/the-last-of-us-crafting-guide) for the full ingredient economy.
5. **Assume allies give you nothing.** Your companions no longer hand over ammunition or health kits. Budget as a solo player.
6. **Bricks and bottles are your most abundant weapon.** They are free, they are everywhere, and on a mode where a thrown bottle plus one melee swing replaces two bullets, they are the backbone of your economy.
7. **Melee weapons are scarce and machetes are effectively absent.** Do not build a plan around finding a good one.

## How to approach an encounter

A repeatable loop that works:

- **Stop at the threshold.** Before entering any new space, crouch and watch from cover for a full patrol cycle. You have no Listen Mode; the only substitute is time, and time is free.
- **Count the room.** Establish how many enemies exist and what types before you commit. Getting this wrong is the most common cause of a mid-encounter death.
- **Pick your exit before your entry.** Identify the retreat route first. Grounded rewards disengaging, and infected in particular will lose interest if you break contact cleanly.
- **Resolve the loudest threat first** where you safely can — the enemy most likely to alert everyone else, which is usually a patrolling human or a sighted runner rather than a clicker.
- **Use the revolver on people, the shotgun on clickers, fire on bloaters.** One-shot economy on humans; armour-appropriate tools on everything else.
- **Heal in cover, immediately, every time.** No HUD means no rationing.
- **When a plan breaks, run rather than brawl.** Melee on triple damage is a losing trade against almost everything.

## Quick Action Checklist

- Remember that your revolver and hunting rifle one-shot on Grounded, and your 9mm kills in two. Aim, do not spray.
- Loot every surface manually; pickups do not flash on Survivor or Grounded.
- Skip the listen mode distance skill entirely — Listen Mode is disabled, so the upgrade is unavailable.
- Buy Shiv Master before anything else with supplements.
- Open all thirteen shiv doors; parts and supplements do not scale with difficulty, so they are relatively richer here.
- Lean your alcohol and rags toward molotovs rather than health kits.
- Heal the moment you are hit and safe. Without a HUD there is no way to ration intelligently.
- Scout every room from a threshold for a full patrol cycle before entering.
- Front-load caution: removed checkpoints mean a death costs the whole encounter, not thirty seconds.
- Spend consumables to close a fight cleanly rather than hoarding into a loss.
- Count your ammunition manually or reload compulsively during lulls.
- Budget as a solo player — allies no longer resupply you.`,
  faq: [
    {
      question: 'What is the difference between Survivor and Grounded in The Last of Us?',
      answer:
        'Survivor doubles enemy damage, disables Listen Mode and hints, makes supplies extremely rare and stops pickups from flashing. Grounded goes further: enemies deal triple damage, the HUD is disabled entirely, enemy AI is sharper, allies stop giving you ammunition and health kits, and multiple mid-combat and mid-stealth checkpoints are removed.',
    },
    {
      question: 'Do your weapons really do more damage on Grounded?',
      answer:
        'Yes. It is a documented and deliberate rebalance. On Grounded the revolver and hunting rifle kill in one shot, and the 9mm pistol kills in two rather than three. The revolver instantly kills unarmoured non-infected enemies, which it does not do on Easy. Grounded gives you far less ammunition but makes each round substantially more lethal.',
    },
    {
      question: 'Are there fewer collectibles and upgrades on Grounded?',
      answer:
        'No. Supplements, parts and collectibles are identical on every difficulty setting. Only consumables — healing items, ammunition, crafting supplies and melee weapons — become scarcer as difficulty rises. That means your permanent upgrade progression on Grounded is exactly as fast as it would be on Easy.',
    },
    {
      question: 'Do I have to unlock Grounded mode?',
      answer:
        'It depends on the release. On PlayStation 3, Grounded had to be purchased as DLC. In The Last of Us Remastered on PlayStation 4 it is unlocked from the start. Survivor difficulty, by contrast, must be earned by completing the game once on any difficulty first.',
    },
    {
      question: 'Which supplement skills are worth buying on a Grounded run?',
      answer:
        'Shiv Master first, since a clicker grab is an instant kill and shivs are the only escape. Then maximum health and healing speed, given triple enemy damage. Skip listen mode distance entirely — Listen Mode is disabled on both Survivor and Grounded, so that upgrade is unavailable and your supplements should concentrate on the remaining five skills.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/the-last-of-us', anchor: 'The Last of Us coverage hub' },
    {
      href: '/blog/the-last-of-us/the-last-of-us-infected-guide',
      anchor: 'The Last of Us infected guide',
    },
    {
      href: '/blog/the-last-of-us/the-last-of-us-crafting-guide',
      anchor: 'The Last of Us crafting and upgrade guide',
    },
  ],
  externalSources: [
    { url: 'https://thelastofus.fandom.com/wiki/Difficulty', title: 'Difficulty — The Last of Us Wiki' },
    { url: 'https://thelastofus.fandom.com/wiki/Listen_mode', title: 'Listen mode — The Last of Us Wiki' },
    { url: 'https://thelastofus.fandom.com/wiki/Supplement', title: 'Supplements — The Last of Us Wiki' },
  ],
  tldr:
    'Grounded mode in The Last of Us triples enemy damage, disables the HUD and Listen Mode, removes many mid-encounter checkpoints and stops allies resupplying you. Counterintuitively it also buffs your weapons — the revolver and hunting rifle one-shot, and the 9mm kills in two rather than three. Because supplements and parts do not scale with difficulty while consumables do, exhaustive looting and shiv doors matter more here than anywhere else.',
};
