import type { BlogPost } from '../../blogTypes';

export const minecraftNameTagsGuide: BlogPost = {
  slug: 'minecraft-name-tags-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-guides',
  tags: ['name tags', 'mobs', 'anvil', 'easter eggs', 'wandering trader', 'fishing'],
  title: 'Minecraft Name Tags Guide: How to Get, Use & Secret Names',
  metaDescription:
    'How to get a Minecraft name tag now that they craft from paper and a nugget, why the anvil step matters, how naming stops mobs despawning, and every secret name explained.',
  excerpt:
    "A name tag is the cheapest insurance policy in Minecraft: name a mob and it will never despawn, no matter how far you roam. Recent versions finally let you craft one from a scrap of paper and a metal nugget, so there's no excuse for losing that perfect horse anymore. This guide covers every way to get one, the anvil step people skip, and the hidden names that flip mobs upside down.",
  featuredImagePrompt:
    'A flock of Minecraft sheep displaying shifting rainbow-colored wool, the effect of a name tag reading jeb underscore',
  heroImage: '/images/blog/minecraft/minecraft-name-tags-guide/rainbow-sheep.webp',
  heroImageAlt:
    'Minecraft sheep with wool cycling through rainbow colors, the effect of naming a sheep jeb underscore with a name tag.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-name-tags-guide/rainbow-sheep.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Name_Tag',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-name-tags-guide/name-tag.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Name_Tag',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-name-tags-guide/anvil-gui.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Anvil',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-name-tags-guide/dinnerbone.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Name_Tag',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-18T00:00:00.000Z',
  lastUpdated: '2026-07-18T00:00:00.000Z',
  primaryKeyword: 'minecraft name tags guide',
  secondaryKeywords: [
    'how to get a name tag minecraft',
    'how to craft a name tag',
    'minecraft name tag secret names',
    'stop mobs from despawning minecraft',
    'minecraft dinnerbone name',
    'jeb underscore sheep name tag',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'what-a-name-tag-actually-does', label: 'What a name tag actually does', level: 2 },
    { id: 'how-to-get-name-tags-right-now', label: 'How to get name tags right now', level: 2 },
    { id: 'crafting-one-the-new-easy-way', label: 'Crafting one (the new easy way)', level: 3 },
    { id: 'fishing-chests-and-the-wandering-trader', label: 'Fishing, chests, and the wandering trader', level: 3 },
    { id: 'renaming-the-anvil-step-you-cant-skip', label: 'Renaming: the anvil step you can\'t skip', level: 2 },
    { id: 'keeping-your-favorite-mob-from-despawning', label: 'Keeping your favorite mob from despawning', level: 2 },
    { id: 'the-secret-names-and-what-they-really-do', label: 'The secret names and what they really do', level: 2 },
    { id: 'dinnerbone-and-grumm', label: 'Dinnerbone and Grumm', level: 3 },
    { id: 'jeb-and-toast', label: 'jeb_ and Toast', level: 3 },
    { id: 'johnny-the-walking-disaster', label: 'Johnny, the walking disaster', level: 3 },
    { id: 'mobs-you-cant-name-and-other-limits', label: 'Mobs you can\'t name and other limits', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Here is the single most expensive mistake in survival Minecraft: you tame a horse with perfect stats, ride it two thousand blocks from home, hop off to mine some coal, and by the time you climb back up the shaft it has quietly despawned into nothing. A name tag would have cost you one piece of paper. That is the whole pitch — a name tag is the cheapest insurance policy in the game, and it turns any mob into a permanent fixture that will follow your world around forever.

For years the annoying part was actually getting one. Name tags were fishing-only or buried in a chest you might never open. That changed: in current versions you can craft a name tag from a scrap of paper and a single metal nugget, which quietly removed the biggest reason people played without them. This guide covers every source, the anvil step half of all players skip, exactly what naming a mob does under the hood, and the hidden names that flip mobs upside down or turn a villager guard into a killing machine.

## What a name tag actually does

A name tag does two things, and only one of them is cosmetic. The obvious effect is the floating nameplate above the mob's head. The important effect is that a named mob becomes **persistent** — it is removed from the despawn logic entirely and no longer counts against the hostile mob cap. That is the reason to carry them.

Every non-tamed, non-persistent mob in Minecraft is on a despawn clock. Wander far enough away, or leave a mob loaded for long enough with nobody nearby, and the game deletes it to save resources. Naming a mob switches that clock off permanently. Your named horse, your named cat, the zombie villager you are curing, the axolotl you bucketed and released — all of them stop being disposable the instant you apply the tag.

![The Minecraft name tag item, used to name and permanently keep a mob.](/images/blog/minecraft/minecraft-name-tags-guide/name-tag.webp)

Two things a name tag does **not** do: it does not make a mob invincible (a named creeper will still blow up your named dog), and it does not tame anything. Naming a wolf does not make it yours — you still have to feed it bones. The [taming and breeding guide](/blog/minecraft/minecraft-taming-breeding-guide) covers that side. The name tag only handles the "please stop vanishing" problem, which is honestly the harder one to solve any other way.

## How to get name tags right now

There are four reliable sources in current versions, and the pecking order has shifted recently. If you have a mob farm or a fishing setup, you effectively have infinite name tags. If you have neither, the crafting recipe is your friend.

### Crafting one (the new easy way)

This is the headline change and the reason this guide exists. Name tags are now **craftable** from **one piece of paper plus one metal nugget** — iron, gold, or copper all work. It is a small recipe you can even do in the 2x2 inventory grid, no crafting table required, with the paper and nugget placed on a diagonal.

That makes name tags absurdly cheap. Paper comes from sugar cane, which you can farm on a riverbank in an afternoon, and a single iron ingot breaks down into nine nuggets — so one ingot is nine name tags. For anyone who used to hoard name tags like diamonds, the math just changed completely. Craft a stack before a long expedition and never worry about it again.

### Fishing, chests, and the wandering trader

The older sources still exist and are worth knowing:

- **Fishing** — a name tag is a treasure catch with roughly a **0.8% chance** per successful reel. That sounds tiny, but a proper AFK fishing farm with a Luck of the Sea rod prints them over time alongside enchanted books and saddles. The [fishing guide](/blog/minecraft/minecraft-fishing-guide) walks through building one.
- **Chest loot** — name tags still generate in **dungeon (monster room) chests** and **abandoned mineshaft** chests, historically at meaningful rates. If you are already spelunking, crack every chest you find.
- **Wandering trader** — the wandering trader now offers a name tag for **one emerald** when that trade rolls into its stock. It is not guaranteed to appear, but at one emerald it is the cheapest trade the trader ever offers. Note that recent updates moved name tags off the librarian villager, so do not go hunting a cartographer or librarian for them; the [villager trading guide](/blog/minecraft/minecraft-villager-trading-guide) has the current trade tables.

In short: craft them if you can, fish for them passively if you have a farm, and grab the wandering trader's when it shows up.

## Renaming: the anvil step you can't skip

This is where new players lose their name tag for nothing, so read this twice. A name tag straight out of a chest or the crafting grid is **blank**, and a blank name tag does absolutely nothing when you use it on a mob. It will not even be consumed on some versions — it just fails silently and you assume the mechanic is broken.

You have to **rename the tag in an anvil first**. Put the name tag in the left slot, type the name you want in the text field, take the result from the output slot, and pay the experience cost — usually **one level**. Now the tag carries that name, and using it on a mob applies it.

![The Minecraft anvil interface, where a blank name tag must be renamed before it will work on a mob.](/images/blog/minecraft/minecraft-name-tags-guide/anvil-gui.webp)

A couple of details that save headaches. You can only rename the tag in an anvil, not a cartography table or a grindstone. The renamed tag stacks with other tags of the exact same name, so if you want ten mobs all called "Steve" you can batch them from one anvil session. And because anvils take durability damage and cost levels, it is worth reading the [anvil and repairing guide](/blog/minecraft/minecraft-anvil-repairing-guide) if you plan to rename in bulk — a cheap iron farm keeps you in fresh anvils.

## Keeping your favorite mob from despawning

Let's make the persistence point concrete, because it is the entire reason to carry tags. Apply a renamed tag to any of these and it becomes permanent:

- **Your best horse, donkey, or mule.** Taming does not fully protect a horse from every despawn edge case the way naming does, and losing a max-jump horse hurts. Name it before your first long ride. The [horses and mounts guide](/blog/minecraft/minecraft-horses-mounts-guide) explains why the good ones are worth protecting.
- **A zombie villager you are curing.** The cure takes several minutes; a name tag guarantees the villager is still there when it finishes.
- **Farm animals with rare traits**, breeding-line parents, or a specific-colored cat or wolf you spent ages finding.
- **A "bait" mob for a farm** you want to stay put in a loaded chunk.

One caution: naming a mob does not stop it from dying. A named animal still starves, drowns, burns, or gets killed like any other. Persistence only defeats the despawn timer, not the health bar. And in Peaceful difficulty, named hostile mobs are the exception that survives the wipe — everything else hostile is deleted, but a named one stays, which is a neat trick for keeping a captured creeper or enderman around safely.

## The secret names and what they really do

Now the fun part. A handful of specific names trigger hidden effects when applied via name tag (and every one of them is **case sensitive** — capitalization and punctuation have to be exact). These are pure Easter eggs Mojang left in over the years, and most cost you nothing but a laugh.

### Dinnerbone and Grumm

Name any mob **"Dinnerbone"** or **"Grumm"** and it renders **upside down**. That is it — the mob walks around flipped, pathing normally but visually inverted. The names honor two Mojang developers (Nathan Adams, whose handle is Dinnerbone, and Erik Broes, Grumm). It works on nearly every mob in the game, so an upside-down village full of flipped villagers is entirely achievable and deeply cursed.

![Minecraft mobs rendered upside down, the effect of naming them Dinnerbone or Grumm with a name tag.](/images/blog/minecraft/minecraft-name-tags-guide/dinnerbone.webp)

### jeb_ and Toast

Name a **sheep** **"jeb_"** (note the trailing underscore) and its wool cycles smoothly through the entire dye rainbow, shimmering between colors in real time. It is the flashiest Easter egg in the game and a staple of decorative builds. One catch worth knowing: if you shear a jeb_ sheep, the wool it drops is its **actual underlying color**, not the rainbow — the shimmer is a display effect only. The name honors Jens Bergensten, the longtime lead developer.

Name a **rabbit** **"Toast"** and it takes on a special memorial skin, added at a player's request for a lost pet rabbit named Toast. It is quieter than jeb_ but a sweet one.

### Johnny, the walking disaster

This one actually changes gameplay. Name a **vindicator** (the axe-wielding illager from woodland mansions and raids) **"Johnny"** and it becomes hostile to **almost every other mob**, not just you — it will hunt down villagers, animals, other illagers' enemies, iron golems, and basically anything it can path to, except other illagers and a couple of immune mobs. A "Johnny" vindicator loose in a village is a wrecking ball. The name is a reference to the axe scene in The Shining. If you want to weaponize one, the [hostile mobs guide](/blog/minecraft/minecraft-hostile-mobs-guide) covers vindicator behavior in detail.

## Mobs you can't name and other limits

Name tags cover the vast majority of mobs, but a few are off-limits. You **cannot** name the **ender dragon** — the tag simply does nothing on it. You also cannot name **other players**; name tags are strictly a mob tool. And you cannot apply a tag to a mob from a distance in survival — you have to be close enough to right-click it directly, which can be awkward with something hostile, so tag dangerous mobs from behind a fence or a boat.

A few more practical limits. A name tag is **consumed on use** — one tag, one mob, gone. If you want to rename a mob later, you need a fresh tag. You cannot remove a name from a mob once applied except by killing it. And naming a mob does not exempt it from griefing rules on servers or from being pushed around by pistons and water — persistence is the only guarantee you get.

None of that undercuts the core value. For the price of a piece of paper and a nugget, you turn a disposable mob into a permanent one, and you get a pocketful of Easter eggs on the side. There is no reason to adventure without a few in your inventory.

## Quick Action Checklist

- **Craft name tags cheaply**: one paper + one metal nugget (iron, gold, or copper), diagonal in the crafting grid — one iron ingot makes nine.
- Grab them passively by **AFK fishing** (about 0.8% per catch) and from **dungeon** and **mineshaft** chests.
- Buy one from the **wandering trader for a single emerald** when the trade appears.
- **Always rename the tag in an anvil first** — a blank name tag does nothing. It costs about one level.
- Name your **best horse before any long ride** so it never despawns.
- Tag **zombie villagers you're curing**, rare-trait animals, and any mob you can't afford to lose.
- Remember naming stops **despawning, not dying** — named mobs still starve, drown, and burn.
- Flip any mob upside down with **"Dinnerbone"** or **"Grumm"** (case sensitive).
- Make a sheep shimmer rainbow with **"jeb_"** and give a rabbit the memorial skin with **"Toast"**.
- Turn a vindicator into a mob-killing menace with **"Johnny"** — keep it far from anything you like.
- Don't bother trying to name the **ender dragon or other players** — it won't work.`,
  faq: [
    {
      question: 'How do you get a name tag in Minecraft?',
      answer:
        'In current versions the easiest way is to craft one from a single piece of paper plus a metal nugget (iron, gold, or copper) placed diagonally in the crafting grid. You can also catch name tags by fishing (about a 0.8% chance per reel), find them in dungeon and abandoned mineshaft chests, or buy one from a wandering trader for a single emerald when that trade appears.',
    },
    {
      question: 'Why is my name tag not working on mobs?',
      answer:
        'A name tag straight from a chest or the crafting grid is blank, and a blank name tag does nothing. You must rename it in an anvil first: place the tag in the anvil, type the name in the text field, take the result, and pay the experience cost (usually one level). Only then will using it on a mob apply the name.',
    },
    {
      question: 'Do name tags stop mobs from despawning?',
      answer:
        'Yes. Naming a mob makes it persistent, which removes it from the despawn timer entirely and excludes it from the hostile mob cap. It will not vanish no matter how far you travel. Note that naming only stops despawning, not death — a named mob can still starve, drown, burn, or be killed.',
    },
    {
      question: 'What does naming a sheep jeb_ do in Minecraft?',
      answer:
        'Naming a sheep "jeb_" (with the trailing underscore, case sensitive) makes its wool cycle smoothly through every dye color in a shifting rainbow effect. The rainbow is display-only, though — if you shear the sheep, it drops wool of its actual underlying color, not rainbow wool.',
    },
    {
      question: 'What is the Dinnerbone name tag effect?',
      answer:
        'Naming any mob "Dinnerbone" or "Grumm" (both case sensitive) renders it upside down. The mob still moves and behaves normally; only its model is flipped. The names reference Mojang developers Nathan Adams (Dinnerbone) and Erik Broes (Grumm).',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'GamerTagMythras blog' },
    { href: '/blog/minecraft', anchor: 'all Minecraft guides' },
    { href: '/blog/minecraft/minecraft-fishing-guide', anchor: 'Minecraft fishing guide' },
    { href: '/blog/minecraft/minecraft-villager-trading-guide', anchor: 'villager trading guide' },
    { href: '/blog/minecraft/minecraft-anvil-repairing-guide', anchor: 'anvil and repairing guide' },
    { href: '/blog/minecraft/minecraft-taming-breeding-guide', anchor: 'taming and breeding guide' },
    { href: '/blog/minecraft/minecraft-horses-mounts-guide', anchor: 'horses and mounts guide' },
  ],
  externalSources: [
    { url: 'https://minecraft.fandom.com/wiki/Name_Tag', title: 'Name Tag — Minecraft Wiki' },
    { url: 'https://minecraft.fandom.com/wiki/Anvil', title: 'Anvil — Minecraft Wiki' },
    { url: 'https://minecraft.fandom.com/wiki/Wandering_Trader', title: 'Wandering Trader — Minecraft Wiki' },
  ],
  tldr: "A Minecraft name tag makes any mob persistent so it never despawns, which is the cheapest way to protect a good horse or a curing villager. Current versions let you craft one from a piece of paper plus a metal nugget (iron, gold, or copper), and you can also fish them up (about 0.8% per catch), loot them from dungeon and mineshaft chests, or buy one from a wandering trader for an emerald. You must rename the tag in an anvil before it works — a blank tag does nothing. Case-sensitive secret names add effects: 'Dinnerbone' or 'Grumm' flip a mob upside down, 'jeb_' makes a sheep shimmer rainbow, and 'Johnny' turns a vindicator hostile to almost everything.",
};
