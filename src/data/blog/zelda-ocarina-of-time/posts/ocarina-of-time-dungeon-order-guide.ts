import type { BlogPost } from '../../blogTypes';

export const ocarinaOfTimeDungeonOrderGuide: BlogPost = {
  slug: 'ocarina-of-time-dungeon-order-guide',
  game: 'zelda-ocarina-of-time',
  category: 'game-guides',
  topicCluster: 'ocarina-dungeons',
  tags: ['dungeon-order', 'walkthrough', 'routing', 'temples', 'progression'],
  title: 'Ocarina of Time Dungeon Order: The Full Route, Explained',
  metaDescription:
    'Every Ocarina of Time dungeon in order, from the Deku Tree to Ganon\'s Castle, with the item each one gives, the gates between them, and your one real choice.',
  excerpt:
    'Ocarina of Time looks like an open adventure and plays like a corridor. Eight required dungeons, three side dungeons, and exactly one place where the game genuinely lets you pick. Here is the whole route with the reasons behind each lock.',
  featuredImagePrompt:
    'A young hero in a green tunic standing before an enormous ancient tree with a face carved into its bark, dappled forest light, N64-era Hyrule',
  heroImage: '/images/blog/zelda-ocarina-of-time/ocarina-of-time-dungeon-order-guide/great-deku-tree.webp',
  heroImageAlt: 'Child Link standing in front of the Great Deku Tree in Kokiri Forest, the entrance to the first dungeon in Ocarina of Time on N64.',
  imageSources: [
    {
      src: '/images/blog/zelda-ocarina-of-time/ocarina-of-time-dungeon-order-guide/great-deku-tree.webp',
      sourceUrl: 'https://zelda.fandom.com/wiki/Deku_Tree',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/zelda-ocarina-of-time/ocarina-of-time-dungeon-order-guide/inside-the-deku-tree.webp',
      sourceUrl: 'https://zelda.fandom.com/wiki/Inside_the_Deku_Tree',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/zelda-ocarina-of-time/ocarina-of-time-dungeon-order-guide/forest-temple.webp',
      sourceUrl: 'https://zelda.fandom.com/wiki/Forest_Temple',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/zelda-ocarina-of-time/ocarina-of-time-dungeon-order-guide/fire-temple.webp',
      sourceUrl: 'https://zelda.fandom.com/wiki/Fire_Temple',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/zelda-ocarina-of-time/ocarina-of-time-dungeon-order-guide/spirit-temple.webp',
      sourceUrl: 'https://zelda.fandom.com/wiki/Spirit_Temple',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-07-20T00:00:00.000Z',
  lastUpdated: '2026-07-20T00:00:00.000Z',
  primaryKeyword: 'ocarina of time dungeon order',
  secondaryKeywords: [
    'ocarina of time dungeons in order',
    'ocarina of time walkthrough order',
    'ocarina of time temple order',
    'ocarina of time how many dungeons',
    'ocarina of time route guide',
    'ocarina of time dungeon items list',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'why-the-dungeon-order-is-mostly-locked', label: 'Why the dungeon order is mostly locked', level: 2 },
    { id: 'the-three-child-dungeons', label: 'The three child dungeons', level: 2 },
    { id: '1-inside-the-deku-tree', label: '1. Inside the Deku Tree', level: 3 },
    { id: '2-dodongos-cavern', label: '2. Dodongo\'s Cavern', level: 3 },
    { id: '3-inside-jabu-jabus-belly', label: '3. Inside Jabu-Jabu\'s Belly', level: 3 },
    { id: 'the-master-sword-break-point', label: 'The Master Sword break point', level: 2 },
    { id: 'the-adult-dungeons-in-order', label: 'The adult dungeons in order', level: 2 },
    { id: '4-forest-temple', label: '4. Forest Temple', level: 3 },
    { id: '5-fire-temple', label: '5. Fire Temple', level: 3 },
    { id: '6-water-temple', label: '6. Water Temple', level: 3 },
    { id: '7-shadow-temple', label: '7. Shadow Temple', level: 3 },
    { id: '8-spirit-temple', label: '8. Spirit Temple', level: 3 },
    { id: 'side-dungeons-and-when-to-run-them', label: 'Side dungeons and when to run them', level: 2 },
    { id: 'where-you-actually-get-a-choice', label: 'Where you actually get a choice', level: 2 },
    { id: 'n64-vs-3ds-vs-master-quest', label: 'N64 vs 3DS vs Master Quest', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Ocarina of Time has a reputation as the game that opened up 3D adventure design, and then it spends most of its runtime marching you down a hallway. That is not a criticism. The route is the point. Every dungeon hands you exactly one tool, and that tool is the key to the door on the next dungeon. Miss the pattern and Hyrule feels like a maze. See it, and the whole game reads as a single clean chain.

There are eight required dungeons, three optional side dungeons, and one final castle. Below is the entire sequence, what each stop gives you, and — the part most walkthroughs skip — *why* the game refuses to let you take them out of order.

## Why the dungeon order is mostly locked

Ocarina of Time gates progress three ways, and all three are stacked on top of each other:

- **Item gates.** You cannot reach the Forest Temple without the Hookshot. You cannot survive Death Mountain Crater without the Goron Tunic. You cannot walk the floor of the Water Temple without the Iron Boots.
- **Song gates.** Sheik teaches you a warp melody at each new region, and one of those songs is not a convenience — it is the only entrance. Full breakdown in our [Ocarina of Time songs guide](/blog/zelda-ocarina-of-time/ocarina-of-time-songs-guide).
- **Age gates.** Child Link fits through small holes and rolls into things. Adult Link is tall enough to reach ledges and strong enough to lift blocks. The Spirit Temple is built specifically around swapping between them.

Once you internalize that, the sequence stops feeling arbitrary. Each dungeon is a lock, and the previous dungeon is the key.

## The three child dungeons

The first act is short, tight, and gives you the three Spiritual Stones. It ends with Ganondorf taking Hyrule anyway, which is still one of the better gut-punches in the medium.

![The interior of the Great Deku Tree, the first dungeon in Ocarina of Time, with its central web floor.](/images/blog/zelda-ocarina-of-time/ocarina-of-time-dungeon-order-guide/inside-the-deku-tree.webp)

### 1. Inside the Deku Tree

**Item:** Fairy Slingshot. **Boss:** Queen Gohma. **Reward:** Kokiri Emerald.

Mido blocks the path until you carry both a Deku Shield and the Kokiri Sword, so buy the shield with the 40 Rupees you scrape out of the grass and pull the sword from the training-ground crawlspace. The dungeon teaches you the whole vocabulary of the game in about twenty minutes: burn a web, drop through a hole, shoot the eye you cannot reach.

### 2. Dodongo's Cavern

**Item:** Bomb Bag. **Boss:** King Dodongo. **Reward:** Goron Ruby.

Halfway up Death Mountain Trail, sealed behind a boulder. You need the Goron Bracelet from Darunia to pick up Bomb Flowers, and Darunia only opens up after you play Saria's Song at him — one of the few genuinely funny cutscenes in the game. The Bomb Bag you find inside is what unlocks the huge amount of optional content scattered across Hyrule.

### 3. Inside Jabu-Jabu's Belly

**Item:** Boomerang. **Boss:** Barinade. **Reward:** Zora Sapphire.

You get in by catching a fish in a bottle at Zora River and dropping it in front of Jabu-Jabu. The dungeon is an escort mission where the escort is Princess Ruto and you are throwing her at switches. The Boomerang is the reward, and the Big Octo mini-boss is the first fight that expects you to actually use it.

## The Master Sword break point

With three Spiritual Stones and the Ocarina of Time, you play the Song of Time at the Temple of Time altar, open the Door of Time, and pull the Master Sword. Seven years vanish. Link wakes up as an adult in a ruined Hyrule.

**Do your child-only shopping first.** Once you can time travel freely it stops mattering, but the clean habit is to grab the child Heart Pieces and the Bomb Bag upgrades before you pull the sword, purely so you are not backtracking with the tedious version of the map.

## The adult dungeons in order

![The exterior of the Forest Temple in the Sacred Forest Meadow, the first adult dungeon in Ocarina of Time.](/images/blog/zelda-ocarina-of-time/ocarina-of-time-dungeon-order-guide/forest-temple.webp)

### 4. Forest Temple

**Item:** Fairy Bow. **Boss:** Phantom Ganon. **Reward:** Forest Medallion.

Before you can even enter, go to the Kakariko Village graveyard and win Dampe the gravekeeper's digging race to get the **Hookshot**. Without it the broken stairway to the Sacred Forest Meadow is impassable. Adult Link also needs to play Saria's Song in front of Mido in the Lost Woods to get past him.

The temple itself is the twisting-corridor mansion with the four Poe Sisters. Kill all four, restore the colored torch flames, and the central elevator drops. Phantom Ganon is a tennis match — deflect the energy ball back at him with a sword slash, then punish.

### 5. Fire Temple

**Item:** Megaton Hammer. **Boss:** Volvagia. **Reward:** Fire Medallion.

The gate here is the **Goron Tunic**, handed to you by Darunia's son (also named Link, which never stops being charming) in Goron City. Death Mountain Crater does contact damage without it. Sheik teaches you the Bolero of Fire the moment you enter the crater.

Progress is measured in freed Gorons behind jail doors, each of whom hands over a Small Key or a hint. The Megaton Hammer drops after the Flare Dancer mini-boss and is the only thing that kills Volvagia, who is a whack-a-mole fight against a wingless dragon.

![The Fire Temple inside Death Mountain Crater, where the Megaton Hammer is found in Ocarina of Time.](/images/blog/zelda-ocarina-of-time/ocarina-of-time-dungeon-order-guide/fire-temple.webp)

### 6. Water Temple

**Item:** Longshot. **Boss:** Morpha. **Reward:** Water Medallion.

Zora Domain is frozen solid after the Fire Temple, which routes you into the Ice Cavern for the **Iron Boots** and the Serenade of Water. Then it is down to Lake Hylia and a Hookshot target above the temple gate.

This is the one everybody remembers, and mostly for the wrong reason — the constant pause-menu Iron Boots swapping, which the 3DS remake fixed outright. We have a full room-by-room breakdown in the [Ocarina of Time Water Temple guide](/blog/zelda-ocarina-of-time/ocarina-of-time-water-temple-guide), including where the sixth Small Key hides.

### 7. Shadow Temple

**Item:** Hover Boots. **Boss:** Bongo Bongo. **Reward:** Shadow Medallion.

After the Water Temple, Sheik meets you in a burning Kakariko Village and teaches the **Nocturne of Shadow**. That song is not a shortcut. Warping to the back of the graveyard is the only way in, which makes the Nocturne the only warp melody adult Link genuinely requires to reach a temple.

Bring the **Lens of Truth** from the Bottom of the Well or you will spend the entire dungeon walking off invisible ledges. Structurally the Shadow Temple is nearly linear; the difficulty is in the illusions, the Wallmasters, and the boat ride.

### 8. Spirit Temple

**Items:** Silver Gauntlets (as child), Mirror Shield (as adult). **Boss:** Twinrova. **Reward:** Spirit Medallion.

The clever one. Adult Link crosses the Haunted Wasteland, reaches the Desert Colossus, walks into the temple, and immediately hits two obstacles he cannot solve — a crawlspace too small and a block too heavy. He steps back out, Sheik teaches him the **Requiem of Spirit** — one of the [warp melodies covered in our songs guide](/blog/zelda-ocarina-of-time/ocarina-of-time-songs-guide) — and then the real solution is to warp back in as a *child*, run the western half, and grab the Silver Gauntlets. Return as an adult, run the eastern half, take the Mirror Shield, and beat Koume and Kotake by catching each sister's magic on the shield and firing it into the other.

![The Spirit Temple carved into the Goddess of the Sand at the Desert Colossus in Ocarina of Time.](/images/blog/zelda-ocarina-of-time/ocarina-of-time-dungeon-order-guide/spirit-temple.webp)

Then it is Ganon Castle: six barrier trials keyed to the six Medallions, a tower climb, Ganondorf, and Ganon.

## Side dungeons and when to run them

Three optional areas sit between the required ones. Two of them you should treat as required anyway.

| Side dungeon | Where | Reward | Do it |
| --- | --- | --- | --- |
| Ice Cavern | Behind Zora Fountain, adult | Iron Boots | Mandatory in practice — the Water Temple needs the boots |
| Bottom of the Well | Kakariko Well, child | Lens of Truth | Before the Shadow Temple. Non-negotiable |
| Gerudo Training Ground | Gerudo Fortress, adult | Ice Arrows | Optional. Pure side content, needs the Gerudo Membership Card |

The Bottom of the Well is the sneaky one. It is technically optional and the game never tells you to go there, but you open it by playing the **Song of Storms** inside the Kakariko windmill as a child to spin it up and drain the water. The Lens of Truth that Dead Hand drops is what makes the Shadow Temple, the Haunted Wasteland, and half of Ganon Castle readable.

## Where you actually get a choice

Honest answer: almost nowhere, and that is fine.

The child dungeons are a fixed chain. Forest, then Fire, then Water is enforced by the Hookshot, the Goron Tunic, and the Iron Boots respectively. Sheik does not teach the Nocturne of Shadow until you have cleared **both** the Fire Temple and the Water Temple, which locks Shadow to sixth-or-later.

The one real fork is **Shadow versus Spirit**. Once the Nocturne is in your songbook you have both the Shadow Temple and the Requiem of Spirit route available, and you can take them in either order. Most players do Shadow first because the story pushes you there; doing Spirit first works fine and means you carry the Mirror Shield into the Shadow Temple.

Beyond that, the flexibility is all in the optional layer — Heart Pieces, the 100 Gold Skulltulas, the Biggoron Sword trading quest, and the Great Fairy upgrades. That is where a replay actually differs from a first run.

## N64 vs 3DS vs Master Quest

The route is identical across versions. The friction is not.

- **N64 (1998), and the Virtual Console and Nintendo Switch Online re-releases.** The original. Iron Boots and Hover Boots live in the equipment menu, so you are pausing constantly in the Water and Shadow Temples.
- **Ocarina of Time 3D (2011).** Iron Boots become a normal assignable item, the Water Temple gained glowing wall markings and better lighting, gyro aiming makes the Bow and Slingshot far more pleasant, and Sheikah Stones dispense hint videos. Same dungeons, same order, dramatically less menu.
- **Master Quest.** A remixed-puzzle version, first bundled on the GameCube Collector's Edition and later included in the 3DS release, where it is also **mirrored** left-to-right. Dungeon order is unchanged, but the interiors are rearranged and much harder. The [Water Temple in Master Quest](/blog/zelda-ocarina-of-time/ocarina-of-time-water-temple-guide) has only **two Small Keys** versus six in the original, and hands you the Longshot very early.

If this is your first playthrough, play 3D. If you have beaten it before and want the layouts to surprise you again, mirrored Master Quest is the closest thing to a fresh run.

## Quick Action Checklist

- Buy a Deku Shield and grab the Kokiri Sword before Mido lets you near the Deku Tree.
- Play Saria's Song to Darunia for the Goron Bracelet, then bomb into Dodongo's Cavern.
- Bottle a fish at Zora River to open Jabu-Jabu.
- Three Spiritual Stones plus the Song of Time at the Temple of Time altar opens the Door of Time.
- Win Dampe's grave-digging race for the Hookshot before attempting the Forest Temple.
- Take the Goron Tunic from Darunia's son before entering Death Mountain Crater.
- Clear the Ice Cavern for the Iron Boots, then the Water Temple.
- Run the Bottom of the Well as a child for the Lens of Truth before the Shadow Temple.
- Nocturne of Shadow is the only entrance to the Shadow Temple — there is no walking route.
- Do the Spirit Temple in two passes: child for the Silver Gauntlets, adult for the Mirror Shield.
- Collect all six Medallions before Ganon Castle, since each one dispels one barrier trial.
`,
  faq: [
    {
      question: 'How many dungeons are in Ocarina of Time?',
      answer:
        'There are eight required dungeons — Inside the Deku Tree, Dodongo\'s Cavern, Inside Jabu-Jabu\'s Belly, the Forest Temple, the Fire Temple, the Water Temple, the Shadow Temple, and the Spirit Temple — plus Ganon\'s Castle at the end. Three optional side dungeons also exist: the Ice Cavern, the Bottom of the Well, and the Gerudo Training Ground. The Ice Cavern and the Bottom of the Well are optional on paper but effectively required, since they hold the Iron Boots and the Lens of Truth.',
    },
    {
      question: 'Can you do the Ocarina of Time dungeons out of order?',
      answer:
        'Barely. The three child dungeons are a fixed chain, and the Forest, Fire, and Water Temples are locked in sequence by the Hookshot, the Goron Tunic, and the Iron Boots. The one genuine choice is the Shadow Temple versus the Spirit Temple — Sheik teaches the Nocturne of Shadow only after you clear both the Fire and Water Temples, and from that point you can tackle Shadow and Spirit in either order.',
    },
    {
      question: 'What item does each Ocarina of Time dungeon give you?',
      answer:
        'Inside the Deku Tree gives the Fairy Slingshot, Dodongo\'s Cavern the Bomb Bag, and Inside Jabu-Jabu\'s Belly the Boomerang. As an adult, the Forest Temple gives the Fairy Bow, the Fire Temple the Megaton Hammer, the Water Temple the Longshot, the Shadow Temple the Hover Boots, and the Spirit Temple both the Silver Gauntlets (as a child) and the Mirror Shield (as an adult).',
    },
    {
      question: 'Do I need the Lens of Truth for the Shadow Temple?',
      answer:
        'Practically, yes. The Shadow Temple is built on invisible floors, fake walls, and hidden platforms, and the Lens of Truth is what reveals them. You get it by beating Dead Hand at the Bottom of the Well, which child Link opens by playing the Song of Storms inside the Kakariko windmill to drain the water. Skipping it turns the temple into memorization and blind jumps.',
    },
    {
      question: 'Is the dungeon order different in Ocarina of Time 3D or Master Quest?',
      answer:
        'No. All versions follow the same dungeon sequence. Ocarina of Time 3D changes quality of life — Iron Boots become an assignable item, the Water Temple gets glowing guide markings and brighter lighting, and gyro aiming is added — while Master Quest rearranges the puzzles and enemies inside each dungeon (and mirrors the entire game in the 3DS release) without touching the order you visit them in.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/zelda-ocarina-of-time', anchor: 'Ocarina of Time coverage hub' },
    { href: '/blog/zelda-ocarina-of-time/ocarina-of-time-songs-guide', anchor: 'Ocarina of Time songs guide' },
    { href: '/blog/zelda-ocarina-of-time/ocarina-of-time-water-temple-guide', anchor: 'Ocarina of Time Water Temple guide' },
  ],
  externalSources: [
    {
      url: 'https://zelda.fandom.com/wiki/The_Legend_of_Zelda:_Ocarina_of_Time',
      title: 'Zelda Wiki — The Legend of Zelda: Ocarina of Time overview',
    },
    {
      url: 'https://zelda.fandom.com/wiki/Spirit_Temple',
      title: 'Zelda Wiki — Spirit Temple, including the child and adult halves',
    },
    {
      url: 'https://zelda.fandom.com/wiki/Bottom_of_the_Well',
      title: 'Zelda Wiki — Bottom of the Well and the Lens of Truth',
    },
  ],
  tldr:
    'Ocarina of Time has eight required dungeons in a near-fixed order: Inside the Deku Tree, Dodongo\'s Cavern, and Inside Jabu-Jabu\'s Belly as a child, then the Forest, Fire, Water, Shadow, and Spirit Temples as an adult, followed by Ganon\'s Castle. Each dungeon hands you the item that opens the next one, so the sequence is enforced by the Hookshot, Goron Tunic, and Iron Boots. The only real choice is doing the Shadow Temple and Spirit Temple in either order once Sheik teaches the Nocturne of Shadow.',
};
