import type { BlogPost } from '../../blogTypes';

export const minecraftTamingBreedingGuide: BlogPost = {
  slug: 'minecraft-taming-breeding-guide',
  game: 'minecraft',
  category: 'game-guides',
  topicCluster: 'minecraft-survival',
  tags: ['mobs', 'taming', 'breeding', 'wolves', 'horses', 'animals'],
  title: 'How to Tame and Breed Every Animal in Minecraft',
  metaDescription:
    'How to tame and breed every animal in Minecraft: which mobs are tameable vs breedable, the exact foods each one needs, and the practical payoff of each.',
  excerpt:
    "Taming and breeding are two different systems, and confusing them is why people keep shoving wheat at a wolf. Here is every tameable and breedable mob, the exact food each one wants, and whether the payoff is worth your time.",
  featuredImagePrompt:
    'A blocky Minecraft player in a fenced pasture surrounded by tamed animals — a gray wolf with a red collar, a brown horse, a calico cat, and two cows nuzzling with heart particles floating above them',
  heroImage: '/images/blog/minecraft/minecraft-taming-breeding-guide/wolf.webp',
  heroImageAlt:
    'A Minecraft wolf in a forest — tamed with bones, it becomes a collar-wearing dog that fights mobs for you.',
  imageSources: [
    {
      src: '/images/blog/minecraft/minecraft-taming-breeding-guide/wolf.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Wolf',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-taming-breeding-guide/cats.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Cat',
      license: 'Fandom CC-BY-SA',
    },
    {
      src: '/images/blog/minecraft/minecraft-taming-breeding-guide/horse.webp',
      sourceUrl: 'https://minecraft.fandom.com/wiki/Horse',
      license: 'Fandom CC-BY-SA',
    },
  ],
  publishDate: '2026-06-02T00:00:00.000Z',
  lastUpdated: '2026-06-02T00:00:00.000Z',
  primaryKeyword: 'how to tame and breed animals in minecraft',
  secondaryKeywords: [
    'minecraft taming guide',
    'minecraft breeding guide',
    'how to tame a wolf minecraft',
    'how to tame a horse minecraft',
    'minecraft breeding foods',
    'how to tame a cat minecraft',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'taming-vs-breeding-they-are-not-the-same-thing', label: 'Taming vs breeding — they are not the same thing', level: 2 },
    { id: 'wolves-your-first-and-best-companion', label: 'Wolves — your first and best companion', level: 2 },
    { id: 'cats-and-ocelots', label: 'Cats and ocelots', level: 2 },
    { id: 'horses-donkeys-and-mules', label: 'Horses, donkeys, and mules', level: 2 },
    { id: 'llamas-the-pack-train', label: 'Llamas — the pack train', level: 2 },
    { id: 'parrots-foxes-and-axolotls', label: 'Parrots, foxes, and axolotls', level: 2 },
    { id: 'the-breeding-only-farm-animals', label: 'The breeding-only farm animals', level: 2 },
    { id: 'breeding-foods-cheat-sheet', label: 'Breeding foods cheat sheet', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Taming and breeding are two different systems, and mixing them up is exactly why someone is, right now, shoving wheat at a wolf and wondering why nothing happens. **Taming** turns a wild mob into a creature loyal to you — a dog, a ridable horse, a cat that scares creepers. **Breeding** makes two animals produce a baby, which is how you build a renewable herd. Some mobs you can do both with; some you can only breed; and the food a mob eats to breed is often completely different from what tames it.

This guide goes mob by mob: what is tameable, what is only breedable, the exact items each one needs, and whether the payoff justifies the trip. Where Java and Bedrock differ in a way that bites you, I will call it out.

## Taming vs breeding — they are not the same thing

The quick mental model before the mob list:

- **Tameable mobs** become yours and follow special rules — wolves, cats, parrots, horses, donkeys, mules, and llamas. Taming is usually a per-animal action (feed it, ride it, or use the right item until hearts appear).
- **Breedable mobs** enter "love mode" when you feed two of them their breeding food, and they spawn a baby. Almost every passive animal is breedable, including ones you can never tame, like cows, pigs, sheep, and chickens.
- **Both** applies to wolves, cats, horses, donkeys, llamas, and foxes — you tame them, then breed the tamed ones for more.
- **Babies grow up** over about 20 minutes of real time, and feeding a baby its breeding food speeds up the remaining growth.

One more universal rule: most animals follow a player holding their food, which is the trick to herding them home before you fence them in.

## Wolves — your first and best companion

![A wild Minecraft wolf standing in a forest biome, the mob you tame with bones into a loyal dog.](/images/blog/minecraft/minecraft-taming-breeding-guide/wolf.webp)

Wolves spawn in forests, taigas, and groves, and a tamed wolf is the best early-game bodyguard in the game — it attacks anything that hurts you (and most things you hit), which makes early nights far less lethal.

- **Tame with: bones.** Feed bones to a wild wolf until hearts pop and it gets a collar. It usually takes a few bones, and it is random per bone, so carry a stack.
- **Breed with: any meat.** Tamed wolves breed when fed meat — raw or cooked beef, pork, chicken, mutton, rabbit, even rotten flesh. (Chicken will not give them the wither-rot risk it does to nothing; wolves are immune to rotten flesh's hunger effect.) Both wolves must be tamed and at full health.
- **Heal with: meat.** The same meat that breeds them also heals an injured wolf. Watch the tail — it droops as the wolf takes damage.
- **Payoff:** Real. A small pack clears mobs around your base and follows you into caves. Make them sit (interact with an empty hand) so they do not wander off a cliff or into lava chasing a skeleton.

## Cats and ocelots

![A row of Minecraft cat variants sitting side by side, showing the different colorations you can tame from a stray cat.](/images/blog/minecraft/minecraft-taming-breeding-guide/cats.webp)

Cats and ocelots changed a lot over the years, and people still mix them up. They are now **separate mobs.**

- **Cats** spawn in villages (and as strays in swamp huts as the black cat). **Tame with raw cod or raw salmon** — approach slowly, stand still, and feed the fish until hearts appear and a collar shows up.
- **Breed cats with raw cod or raw salmon** — same fish that tames them.
- **Ocelots** spawn in jungles and **cannot be tamed at all anymore.** You can only gain their trust with raw cod or raw salmon (they stop fleeing), and you breed them with the same fish, but they will never wear a collar or follow you like a cat.
- **Payoff:** Cats scare away creepers and phantoms — a tamed cat near your bed is a soft anti-creeper field. They also occasionally drop "gifts" (string, feathers, rabbit's foot) on your bed when you wake up. Ocelots are mostly a trust-and-breed novelty.

> Common mistake: trying to tame a jungle ocelot expecting a pet. Ocelots have not been tameable for years. If you want a pet feline, find a village cat or a swamp hut cat.

## Horses, donkeys, and mules

![A brown Minecraft horse standing in a plains biome, the fastest tamed mount in the game once saddled.](/images/blog/minecraft/minecraft-taming-breeding-guide/horse.webp)

Horses are the big one, and taming them works differently from everything else — **no food required to start.**

- **Tame a horse by riding it repeatedly.** Mount the wild horse with an empty hand; it bucks you off. Keep remounting until hearts appear and it stops throwing you. Then you can put a **saddle** on it (you cannot craft a saddle — find it in loot, fish it up, or buy from a leatherworker).
- **Golden apples and golden carrots speed taming and are required to breed.** Feeding a horse golden food raises its temperament so taming sticks faster.
- **Breed horses with golden apples or golden carrots** (a tamed pair, fed the golden food, enters love mode). The baby's stats are a blend of the parents' speed, jump, and health — so breed your two best horses to roll a better foal.
- **Donkeys** tame and breed the same way (ride to tame, golden food to breed) and can wear a **chest** for portable storage — a mobile inventory on legs.
- **Mules** are the sterile offspring of a horse bred with a donkey. **You cannot breed two mules together;** you make a mule by crossing a horse and a donkey each time. Mules can also carry a chest.
- **Payoff:** A fast horse is the best non-Elytra travel in the Overworld. A chest-wearing donkey or mule is a pack animal for hauling. Saddle plus horse armor (diamond is the best tier) makes a combat-ready mount.

## Llamas — the pack train

Llamas are the odd one out: you tame them like a horse but you never put a saddle on them.

- **Tame by riding repeatedly,** exactly like a horse — no food needed, just remount until hearts appear. Note: **a tamed llama still cannot be steered or ridden as a mount;** taming just lets you put a carpet and chest on it.
- **Breed with hay bales.** Two llamas fed hay bales make a baby.
- **Equip a chest** (up to 15 slots on a strong llama) and **lead the whole train with a lead** — leash the front llama and the rest follow in a caravan. Decorate them with colored carpets.
- **They spit** at things that anger them, including wolves and trader llamas, for minor damage.
- **Payoff:** A caravan of chest-wearing llamas is a moving warehouse for long expeditions. Not faster than a horse, but it hauls.

## Parrots, foxes, and axolotls

These three are the "know the gotcha" mobs.

- **Parrots** (jungle) are **tamed with seeds** — wheat, melon, pumpkin, beetroot, or torchflower seeds. **You cannot breed parrots at all.** They perch on your shoulder, dance to nearby jukeboxes, and mimic mob sounds (a useful early-warning system). **Never feed a parrot a cookie — it kills them.** That is a deliberate, real mechanic.
- **Foxes** are **not tamed by feeding an adult.** Instead, you **breed two foxes with sweet berries** (or glow berries), and the *baby* fox trusts you and stays loyal — adults you feed will still wander off. Lead the baby home with a lead. Foxes hold items in their mouths and can be genuinely useful for picking up drops.
- **Axolotls** **cannot be tamed,** only bred — with a **bucket of tropical fish** (the actual bucketed fish, not raw fish). Scoop an axolotl in a water bucket to relocate it. They attack hostile aquatic mobs (drowned, guardians) and give you Regeneration when they "play dead" near you, so a few axolotls make ocean monument raids much safer.

> Two facts that cost players their pets: cookies kill parrots, and you cannot tame an adult fox — you breed and raise the baby. Memorize both.

## The breeding-only farm animals

Most passive animals can never be tamed, but breeding them is the backbone of a food and resource economy. Feed two of them their food and a baby appears.

| Animal | Breeding food | Why breed them |
| --- | --- | --- |
| Cow | Wheat | Beef, leather, and milk (the only cure for poison) |
| Sheep | Wheat | Renewable wool — shear, let grass regrow it, repeat |
| Pig | Carrots, potatoes, or beetroot | Pork; ride one with a saddle and a carrot on a stick |
| Chicken | Any seeds | Eggs, feathers, meat — throw eggs to spawn more chicks |
| Goat | Wheat | Horns and milk; rams the things that annoy it |
| Rabbit | Dandelions or carrots | Rabbit's foot, hide, and meat |
| Mooshroom | Wheat | Mushroom stew straight from the cow; shear for mushrooms |
| Turtle | Seagrass | Lay eggs that hatch into scutes for a turtle shell helmet |
| Panda | Bamboo | Slow to breed (needs nearby bamboo); mostly for fun |
| Bee | Flowers | Pollinate crops and produce honey; breed for bigger hives |
| Strider | Warped fungus | Ride across Nether lava with a saddle and warped fungus on a stick |
| Frog | Slimeball | Eats small mobs; different biomes make different frogs/froglights |
| Sniffer | Torchflower / pitcher seeds | Hatch from sniffer eggs; they dig up ancient plant seeds |

The two you will breed constantly: **cows** (food and leather for books) and **sheep** (renewable wool). A small fenced pen of each near your base solves food and bookshelf supply early. For turning all that food into automation, our [best Minecraft farms](/blog/minecraft/best-minecraft-farms) guide covers the auto-versions.

## Breeding foods cheat sheet

The single table to screenshot:

| Mob | Tame food / method | Breeding food |
| --- | --- | --- |
| Wolf | Bones | Any meat |
| Cat | Raw cod or raw salmon | Raw cod or raw salmon |
| Ocelot | Cannot tame (trust only) | Raw cod or raw salmon |
| Horse | Ride repeatedly (golden food helps) | Golden apple or golden carrot |
| Donkey | Ride repeatedly | Golden apple or golden carrot |
| Mule | N/A (horse + donkey baby, sterile) | Cannot breed mules together |
| Llama | Ride repeatedly | Hay bale |
| Parrot | Seeds | Cannot breed |
| Fox | Cannot tame adult (raise the baby) | Sweet berries / glow berries |
| Axolotl | Cannot tame | Bucket of tropical fish |
| Cow / Sheep / Goat / Mooshroom | Cannot tame | Wheat |
| Pig | Cannot tame | Carrot, potato, or beetroot |
| Chicken | Cannot tame | Any seeds |
| Rabbit | Cannot tame | Dandelion or carrot |
| Turtle | Cannot tame | Seagrass |
| Panda | Cannot tame | Bamboo |
| Strider | Cannot tame | Warped fungus |
| Bee | Cannot tame | Flowers |

If you are still setting up a first base to keep all these animals safe at night, our [survival guide for beginners](/blog/minecraft/minecraft-survival-guide-beginners) walks through fencing and lighting a pen before you start a menagerie.

## Quick Action Checklist

- [ ] Tame wolves with bones (carry a stack); breed and heal them with any meat
- [ ] Tame cats with raw cod/salmon from a village — they scare off creepers
- [ ] Do not try to tame ocelots; you can only earn their trust
- [ ] Tame horses, donkeys, and llamas by riding until hearts appear — no food needed to start
- [ ] Breed horses/donkeys with golden apples or golden carrots; breed llamas with hay bales
- [ ] Tame parrots with seeds and never feed them cookies (it kills them)
- [ ] Raise the baby fox (breed adults with sweet berries) — adults will not stay
- [ ] Breed axolotls with a bucket of tropical fish; bucket them to relocate
- [ ] Keep wheat for cows/sheep/goats and seeds for chickens — your renewable food base`,
  faq: [
    {
      question: 'How do you tame a wolf in Minecraft?',
      answer:
        'Feed a wild wolf bones until hearts appear and it gets a collar. Taming is random per bone, so carry a stack — it usually takes a few. Once tamed, the wolf follows you and attacks anything that hurts you. Make it sit by interacting with an empty hand so it does not wander off chasing mobs. Breed and heal tamed wolves with meat (raw or cooked beef, pork, chicken, mutton, rabbit, or even rotten flesh).',
    },
    {
      question: 'How do you tame a horse in Minecraft?',
      answer:
        'Horses are tamed without food — mount the wild horse with an empty hand and keep remounting after it bucks you off until hearts appear and it stops throwing you. Feeding it golden apples or golden carrots first raises its temperament so taming sticks faster. Once tamed, put a saddle on it to ride (saddles cannot be crafted; find them in loot or buy from a leatherworker). Breed two tamed horses with golden apples or golden carrots.',
    },
    {
      question: 'What foods do you need to breed animals in Minecraft?',
      answer:
        'It varies by mob. Cows, sheep, goats, and mooshrooms breed with wheat; pigs with carrots, potatoes, or beetroot; chickens with any seeds; wolves with any meat; cats with raw cod or salmon; horses and donkeys with golden apples or golden carrots; llamas with hay bales; foxes with sweet berries; rabbits with dandelions or carrots; and axolotls with a bucket of tropical fish. Parrots and mules cannot be bred at all.',
    },
    {
      question: 'Can you tame a fox in Minecraft?',
      answer:
        'Not directly — you cannot tame an adult fox by feeding it. Instead, breed two foxes with sweet berries (or glow berries), and the baby fox trusts you and stays loyal. Lead the baby home with a lead, because adult foxes will wander off. The raised fox holds items in its mouth and can pick up drops for you.',
    },
    {
      question: 'Why does feeding a parrot a cookie kill it?',
      answer:
        'It is a deliberate Minecraft mechanic — cookies are poisonous to parrots and will kill a tamed one instantly. Tame parrots with seeds (wheat, melon, pumpkin, beetroot, or torchflower seeds) and never feed them anything else. Parrots cannot be bred, so a dead parrot means finding a new one in the jungle.',
    },
    {
      question: 'Can you tame an axolotl or an ocelot?',
      answer:
        'No to both. Axolotls cannot be tamed — you can only breed them with a bucket of tropical fish and relocate them with a water bucket. Ocelots also cannot be tamed anymore (they were years ago); you can only earn their trust with raw cod or salmon so they stop fleeing, and breed them with the same fish. If you want a pet cat, tame a village or swamp-hut cat instead.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/minecraft', anchor: 'Minecraft coverage hub' },
    { href: '/blog/minecraft/minecraft-survival-guide-beginners', anchor: 'Minecraft survival guide for beginners' },
    { href: '/blog/minecraft/best-minecraft-farms', anchor: 'Best Minecraft farms to build first' },
    { href: '/blog/minecraft/minecraft-villager-trading-guide', anchor: 'Minecraft villager trading guide' },
    { href: '/blog/minecraft/minecraft-nether-guide', anchor: 'Minecraft Nether survival guide' },
  ],
  externalSources: [
    {
      url: 'https://minecraft.wiki/w/Breeding',
      title: 'Minecraft Wiki — breeding mechanics and per-mob foods',
    },
    {
      url: 'https://minecraft.wiki/w/Wolf',
      title: 'Minecraft Wiki — taming and breeding wolves',
    },
    {
      url: 'https://minecraft.wiki/w/Horse',
      title: 'Minecraft Wiki — taming, riding, and breeding horses',
    },
  ],
  tldr:
    'Taming and breeding are separate systems in Minecraft. Tame wolves with bones, cats with raw cod/salmon, and horses/donkeys/llamas by riding until hearts appear (no food needed). Tame parrots with seeds — never cookies, which kill them. Foxes and axolotls cannot be tamed: raise a baby fox (breed adults with sweet berries) and breed axolotls with a bucket of tropical fish. Breed wolves with meat, horses with golden carrots/apples, llamas with hay bales, and farm animals with wheat, seeds, or carrots.',
  itemList: {
    name: 'Minecraft Taming Methods by Animal',
    items: [
      { name: 'Wolf', description: 'Tame with bones; becomes a combat dog. Breed and heal with any meat.' },
      { name: 'Cat', description: 'Tame with raw cod or salmon from a village. Scares off creepers and phantoms.' },
      { name: 'Horse', description: 'Tame by riding repeatedly (golden food helps), then saddle it. The fastest Overworld mount.' },
      { name: 'Donkey / Mule', description: 'Tame by riding; wear a chest for storage. Mules are the sterile horse-plus-donkey offspring.' },
      { name: 'Llama', description: 'Tame by riding; equip a chest and lead a whole caravan with a lead. Breed with hay bales.' },
      { name: 'Parrot', description: 'Tame with seeds; never feed cookies (lethal). Cannot be bred. Perches and warns of mobs.' },
      { name: 'Fox', description: 'Cannot tame adults — breed with sweet berries and raise the loyal baby.' },
      { name: 'Axolotl', description: 'Cannot tame — breed with a bucket of tropical fish. Fights aquatic mobs and grants Regeneration.' },
    ],
  },
};
