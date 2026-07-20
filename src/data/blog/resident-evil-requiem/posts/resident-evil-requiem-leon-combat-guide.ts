import type { BlogPost } from '../../blogTypes';

export const residentEvilRequiemLeonCombatGuide: BlogPost = {
  slug: 'resident-evil-requiem-leon-combat-guide',
  game: 'resident-evil-requiem',
  category: 'game-guides',
  topicCluster: 're-requiem-guides',
  tags: ['leon-kennedy', 'supply-box', 'tactical-tracker', 'combat', 'game-guides'],

  title: 'Leon Combat Guide: The Supply Box Economy in RE Requiem',
  metaDescription:
    'How Leon works in Resident Evil Requiem: the Tactical Tracker credit economy, Supply Box purchases, hatchet management, Blister Borne, and Elite Guard tactics.',
  excerpt:
    'Leon has a full arsenal and an in-game store, which sounds generous until you realize the store only takes a currency you have to opt into earning.',
  featuredImagePrompt:
    'Leon S. Kennedy standing in the ruins of Raccoon City at dusk, rifle lowered, collapsed buildings behind him',

  heroImage: '/images/blog/resident-evil-requiem/resident-evil-requiem-leon-combat-guide/leon-raccoon-city-hero.webp',
  heroImageAlt:
    'Leon S. Kennedy in the ruins of Raccoon City in Resident Evil Requiem',
  imageSources: [
    {
      src: '/images/blog/resident-evil-requiem/resident-evil-requiem-leon-combat-guide/leon-raccoon-city-hero.webp',
      sourceUrl: 'https://residentevil.fandom.com/wiki/File:LeonRCRE9.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/resident-evil-requiem/resident-evil-requiem-leon-combat-guide/tactical-tracker.webp',
      sourceUrl: 'https://residentevil.fandom.com/wiki/File:Tracker.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/resident-evil-requiem/resident-evil-requiem-leon-combat-guide/blister-head-horde.webp',
      sourceUrl: 'https://residentevil.fandom.com/wiki/File:Blister_head_horde_1.png',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/resident-evil-requiem/resident-evil-requiem-leon-combat-guide/leon-rhodes-hill.webp',
      sourceUrl: 'https://residentevil.fandom.com/wiki/File:LeonRhodesHill.png',
      license: 'Fandom CC-BY-SA',
    },
  ],

  publishDate: '2026-07-20T00:00:00.000Z',
  lastUpdated: '2026-07-20T00:00:00.000Z',

  primaryKeyword: 'Resident Evil Requiem Leon guide',
  secondaryKeywords: [
    'Resident Evil Requiem Supply Box',
    'Tactical Tracker Requiem',
    'Resident Evil Requiem Elite Guard',
    'Requiem Blister Borne',
    'Leon hatchet Requiem',
    'Resident Evil Requiem attache case',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'monthly',
  evergreen: true,
  readingTimeMin: 12,

  toc: [
    { id: 'leon-plays-like-re4-and-capcom-knows-it', label: 'Leon Plays Like RE4 and Capcom Knows It', level: 2 },
    { id: 'the-tactical-tracker-is-opt-in-currency', label: 'The Tactical Tracker Is Opt-In Currency', level: 2 },
    { id: 'tracking-modules-are-the-real-payday', label: 'Tracking Modules Are the Real Payday', level: 3 },
    { id: 'what-to-buy-at-the-supply-box', label: 'What to Buy at the Supply Box', level: 2 },
    { id: 'body-armor-is-repairable-not-consumable', label: 'Body Armor Is Repairable, Not Consumable', level: 3 },
    { id: 'the-hatchet-changes-how-you-should-play', label: 'The Hatchet Changes How You Should Play', level: 2 },
    { id: 'chainsaw-segments-are-free-ammo', label: 'Chainsaw Segments Are Free Ammo', level: 3 },
    { id: 'the-attache-case-and-crafting', label: 'The Attache Case and Crafting', level: 2 },
    { id: 'blister-borne-and-the-cyst-trap', label: 'Blister Borne and the Cyst Trap', level: 2 },
    { id: 'bsaa-zombies-and-artillery', label: 'BSAA Zombies and Artillery', level: 2 },
    { id: 'elite-guard-fights-are-stealth-fights', label: 'Elite Guard Fights Are Stealth Fights', level: 2 },
    { id: 'the-commander-is-a-krauser-fight', label: 'The Commander Is a Krauser Fight', level: 3 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `Leon reaches Raccoon City, unlocks a store full of weapons and upgrades, and then most players spend the next hour wondering why they have no money. The answer is embarrassing and it is in the menu: you never equipped the **Tactical Tracker**.

That is the trick at the center of Leon's half of Requiem. He gets everything Grace does not — shotguns, SMGs, rifles, grenades, an attaché case, a shop — but the shop runs on a currency the game makes you deliberately opt into generating. Every zombie you killed before putting that wristband on paid you nothing.

If you have not started the campaign, the [Requiem beginner guide](/blog/resident-evil-requiem/resident-evil-requiem-beginner-guide) covers difficulty and camera settings first.

## Leon Plays Like RE4 and Capcom Knows It

Leon's gameplay is built directly on his Resident Evil 4 remake incarnation, and it is not a subtle homage. He has access to multiple handguns, the Requiem magnum, shotguns, submachine guns, rifles, and hand grenades — a genuine loadout rather than Grace's two-pistol starvation diet.

He also carries the RE4 remake's melee grammar. Quick-time events drive melee attacks, dodges, and parries. He can pick up weapons dropped by zombies to throw at them, or swing them if enemies are close. Explosives can be thrown or shot.

The practical consequence: unlike Grace, Leon is *supposed* to fight. Avoiding encounters as Leon is often the wrong call, because encounters are literally how you get paid.

![Leon S. Kennedy inside the Rhodes Hill Chronic Care Center in Resident Evil Requiem](/images/blog/resident-evil-requiem/resident-evil-requiem-leon-combat-guide/leon-rhodes-hill.webp)

## The Tactical Tracker Is Opt-In Currency

![The Tactical Tracker wristband from Resident Evil Requiem, which converts enemy kills into credits](/images/blog/resident-evil-requiem/resident-evil-requiem-leon-combat-guide/tactical-tracker.webp)

Upon reaching Raccoon City, Leon gains access to the **Supply Box**, the shop where he buys weapons, upgrades, ammo, med injectors, and body armor.

To purchase weapons, Leon must have the **Tactical Tracker** equipped. It is a tracking wristband that records his kill count and converts kills into credits. No tracker equipped means no credits from kills.

This is the falsifiable claim worth internalizing: **kills only generate spending money while the Tactical Tracker is equipped.** There is no retroactive credit for the horde you cleared before you put it on. Equip it the moment you have it and leave it on.

Once you accept that, Leon's whole approach shifts. Clearing a room is not a resource drain, it is income. The question stops being "can I afford this fight" and becomes "is this fight profitable" — which, given ammo is purchasable at the same Supply Box, it usually is.

### Tracking Modules Are the Real Payday

Kills are steady income. **Tracking Modules** are the lump sums.

These are findable items that grant large amounts of credits, and the payout scales with the module's rarity. A rare module is worth a meaningful chunk of exploration time.

The strategic read: exploration in Leon's sections has a direct cash value that exploration in Grace's sections does not. Grace searches for survival items. Leon searches for capital. If you are the kind of player who beelines objectives, Leon's half is where that habit costs you the most, because you are skipping the upgrades that make the back half of the campaign manageable.

## What to Buy at the Supply Box

The Supply Box stocks weapons, weapon upgrades, ammo, med injectors, body armor, armor repair, and an expanded attaché case. Rough priority for a first playthrough:

1. **The expanded attaché case.** Every other purchase is worth more when you can carry it. Capacity compounds.
2. **Weapon upgrades on one primary**, not spread thin. Requiem rewards committing to a workhorse gun over owning five mediocre ones.
3. **Body armor**, then repairs as needed — see below for why this is cheaper than it looks.
4. **Ammo**, but only as a stopgap. You can craft most of it.
5. **Med injectors**, situationally.

The reason ammo sits low is Leon's crafting, which we get to shortly. Buying what you can make is how credits evaporate.

### Body Armor Is Repairable, Not Consumable

Body armor can be purchased at the Supply Box, and — importantly — **repaired there too**.

Players treat armor as a consumable they are burning through, and so they play cautiously to preserve it, which is exactly backwards. Damaged armor is not wasted armor. It is armor with a repair bill. Take the hits armor exists to absorb, then pay to fix it. That is the intended loop, and the credit cost of a repair is far less painful than the ammo and healing cost of playing a fight timidly.

## The Hatchet Changes How You Should Play

The **Hatchet** replaces the knife as Leon's primary melee weapon. It deals heavy damage and can occasionally execute zombies outright.

It has a durability bar, like Grace's knives. Here is the difference that matters more than any other melee detail in the game: **Leon can resharpen the hatchet at any time**, which effectively makes it a permanent weapon.

Grace's knives break forever. Leon's hatchet does not. So the correct discipline is completely inverted between the two characters. Grace should hoard knife durability and use knives only to break grabs. Leon should use the hatchet constantly, on everything, and resharpen it whenever there is a lull. A hatchet sitting at full durability in a quiet moment is a wasted resource — that durability was free.

The hatchet is also the tool for finishing **stunned Blister Heads**, which Leon can execute directly.

### Chainsaw Segments Are Free Ammo

Certain segments hand Leon a **chainsaw** for a short while. It is an incredibly powerful attack option that costs no ammunition and no hatchet durability.

Treat a chainsaw pickup as a window, not a weapon. Anything you kill with the chainsaw is a kill you did not pay for — and with the Tactical Tracker equipped, it still generates credits. Push aggressively into groups while you have it rather than saving it for a threat that may not come before it expires.

## The Attache Case and Crafting

Leon's inventory is the **attaché case** from RE4 and Resident Evil Village. You rotate and pack items to fit, and an expanded case is purchasable at the Supply Box.

His crafting is more limited than Grace's blood-driven system, but it covers the essentials:

- **All ammo types and grenades** from gunpowder and metal scrap.
- **Healing items** from green herbs.
- **Stacked Hand Grenade** — merge two hand grenades into a single more powerful one.

The Stacked Hand Grenade is the one people forget exists. If you are holding a pile of hand grenades and fighting anything that clusters, merging beats throwing two separately, and it saves a case slot in the process.

## Blister Borne and the Cyst Trap

![A horde of Blister Heads giving chase in Resident Evil Requiem](/images/blog/resident-evil-requiem/resident-evil-requiem-leon-combat-guide/blister-head-horde.webp)

The **Blister Borne** is exclusive to Leon's sections — an irregular mutation of a Blister Head covered in multiple cysts.

Here is the mechanic, and it is a genuine trap. Shooting out **all** of a Blister Borne's cysts kills it instantly. That sounds like a clean answer, and against a lone target it is. But the resulting explosion mutates **any zombie near it — alive or dead — whose head is still intact** into a Blister Head.

So the instant kill is conditional on positioning. Pop a Blister Borne in a corridor full of downed bodies and you have traded one enemy for a room full of faster, stronger ones. The same contagion logic governs ordinary Blister Heads, which is covered in more depth in the [Grace survival guide](/blog/resident-evil-requiem/resident-evil-requiem-grace-survival-guide).

Practical rule: before you commit to the cyst kill, look at what is on the floor around it. If there are intact heads nearby, either destroy those heads first or lure the Blister Borne somewhere emptier.

## BSAA Zombies and Artillery

Raccoon City's ruins hold something the series has not done quite like this: **mutated BSAA soldiers**.

These are not shambling melee threats. They will aimlessly shoot at Leon, and some of them operate **BSAA artillery guns**. That changes the geometry of a fight — you are dealing with ranged pressure and suppression rather than closing distance.

Cover and repositioning matter here in a way they do not against ordinary zombies. Artillery positions in particular are worth prioritizing over the infantry around them, because the artillery is what denies you the ability to maneuver.

The area also contains the mummified remnants of zombies and victims of the **Sterilization Strategy**, the 1998 missile strike that destroyed the city. Twenty-eight years of decay has not made them safe.

## Elite Guard Fights Are Stealth Fights

The most unusual enemy Leon encounters is the **Elite Guard** — highly skilled *human* soldiers, not infected.

They can kill Leon very quickly with their guns. This is the section where Requiem asks its action protagonist to play like a survival horror protagonist, forcing more strategic, stealth-oriented engagement rather than the run-and-gun the rest of Leon's campaign encourages.

Do not walk into Elite Guard encounters with zombie habits. Sight lines, patrol timing, and picking off isolated targets are the tools. A frontal assault on a group of them is how a well-supplied run ends abruptly.

### The Commander Is a Krauser Fight

Leon eventually faces **The Commander**, the leader of the Elite Guard.

Structurally this fight takes a melee-oriented approach directly comparable to the Krauser fight in the RE4 remake. If you know that encounter, you know the shape of this one — parries and dodges over sustained gunfire, reading attack patterns rather than out-damaging them.

Go in with hatchet durability topped up and your parry timing warm. It is one of the few fights in Leon's campaign where raw purchased firepower is not the answer.

For the full picture of the campaign, including Grace's completely different ruleset, start at the [Resident Evil Requiem coverage hub](/blog/resident-evil-requiem) or browse the rest of the [Mythras blog](/blog).

## Quick Action Checklist

- **Equip the Tactical Tracker immediately.** Kills generate zero credits without it, and there is no retroactive payout.
- Hunt **Tracking Modules** during exploration — rarer modules pay out substantially more.
- Buy the **expanded attaché case** first. Capacity multiplies the value of everything else.
- Concentrate weapon upgrades on one primary rather than spreading them.
- Treat body armor as repairable infrastructure, not a consumable. Take the hits, pay the repair.
- Use the hatchet constantly and resharpen in every lull. Unlike Grace's knives, it never breaks for good.
- Execute stunned Blister Heads with the hatchet.
- Push aggressively during chainsaw segments — those kills cost no ammo and still bank credits.
- Merge hand grenades into **Stacked Hand Grenades** for clustered enemies.
- Check the floor for intact heads before popping a Blister Borne's cysts.
- Prioritize BSAA artillery positions over the infantry guarding them.
- Play Elite Guard encounters as stealth, not as combat.
- Approach The Commander like the RE4 remake Krauser fight — parry and dodge, do not trade damage.`,

  faq: [
    {
      question: 'How does the Supply Box work in Resident Evil Requiem?',
      answer:
        'The Supply Box becomes available when Leon reaches Raccoon City. It sells weapons, upgrades, ammo, med injectors, body armor, and armor repairs, plus an expanded attache case. To purchase weapons, Leon must have the Tactical Tracker equipped, since that is what converts enemy kills into spendable credits.',
    },
    {
      question: 'What is the Tactical Tracker in Resident Evil Requiem?',
      answer:
        'The Tactical Tracker is a wristband that records Leon\'s kill count and converts it into credits for the Supply Box. It has to be equipped to generate currency, so kills made without it produce no money. Tracking Modules found during exploration grant large credit sums depending on their rarity.',
    },
    {
      question: 'Does Leon\'s hatchet break in Resident Evil Requiem?',
      answer:
        'No. The hatchet has a durability bar, but Leon can resharpen it at any time, which effectively makes it a permanent weapon. This is the opposite of Grace\'s Makeshift Knife and Hunting Knife, which are lost permanently once durability reaches zero.',
    },
    {
      question: 'How do you kill a Blister Borne?',
      answer:
        'Shoot out all of the cysts on its body for an instant kill. Be careful with positioning, though, because the explosion will mutate any nearby zombie whose head is still intact, alive or dead, into a Blister Head. Clear intact heads nearby or reposition first.',
    },
    {
      question: 'How do you beat the Elite Guard in Resident Evil Requiem?',
      answer:
        'Elite Guards are highly skilled human soldiers who can kill Leon very quickly with firearms, so these encounters are designed around stealth and strategy rather than direct combat. Use sight lines and patrol timing to isolate targets instead of assaulting a group head on.',
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/resident-evil-requiem', anchor: 'Resident Evil Requiem coverage hub' },
    {
      href: '/blog/resident-evil-requiem/resident-evil-requiem-beginner-guide',
      anchor: 'Requiem beginner guide',
    },
    {
      href: '/blog/resident-evil-requiem/resident-evil-requiem-grace-survival-guide',
      anchor: 'Grace survival guide',
    },
  ],

  externalSources: [
    {
      url: 'https://residentevil.fandom.com/wiki/Resident_Evil_Requiem/gameplay',
      title: 'Resident Evil Requiem gameplay — Resident Evil Wiki',
    },
    {
      url: 'https://residentevil.fandom.com/wiki/Blister_Head',
      title: 'Blister Head — Resident Evil Wiki',
    },
    {
      url: 'https://www.residentevil.com/requiem/en-us/',
      title: 'Resident Evil Requiem official site — Capcom',
    },
  ],

  tldr:
    'Leon plays like his RE4 remake self, with a full arsenal, an attache case, and a Supply Box shop in Raccoon City. Credits only accrue while the Tactical Tracker is equipped, so equipping it early is the single highest-value decision in his campaign. His hatchet is resharpenable and effectively permanent, which means it should be used constantly rather than conserved like Grace\'s breakable knives.',
};
