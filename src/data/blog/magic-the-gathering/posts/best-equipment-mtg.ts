import type { BlogPost } from '../../blogTypes';

export const bestEquipmentMtg: BlogPost = {
  slug: 'best-equipment-mtg',
  game: 'magic-the-gathering',
  category: 'card-guides',
  topicCluster: 'commander-staples',
  title: 'Best Equipment in Magic: The Gathering, Ranked',
  metaDescription:
    'The best Equipment in MTG, ranked for Commander with format notes. Skullclamp, Umezawa’s Jitte, the Swords cycle, Batterskull, Lightning Greaves and more.',
  excerpt:
    'Skullclamp turns one mana into a card-draw engine and Umezawa’s Jitte can win a game by itself. Here are the best Equipment cards in Magic, ranked for Commander, with what each one actually does and where it shines.',
  featuredImagePrompt:
    'An arsenal of glowing magical weapons and armor laid out on a dark stone forge — an ornate living-metal warhammer, a runed sword crackling with fire and frost, and a clamped skull pendant, dramatic fantasy lighting, painterly Magic: The Gathering art style',
  heroImage: '/images/blog/magic-the-gathering/best-equipment-mtg/batterskull.jpg',
  heroImageAlt:
    'Batterskull, the five-mana living-weapon Equipment that makes a 4/4 vigilance lifelink Germ the turn it lands.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/best-equipment-mtg/batterskull.jpg',
      sourceUrl: 'https://scryfall.com/card/2xm/234/batterskull',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-equipment-mtg/umezawas-jitte.jpg',
      sourceUrl: 'https://scryfall.com/card/bok/163/umezawas-jitte',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-equipment-mtg/sword-of-fire-and-ice.jpg',
      sourceUrl: 'https://scryfall.com/card/2xm/297/sword-of-fire-and-ice',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/best-equipment-mtg/skullclamp.jpg',
      sourceUrl: 'https://scryfall.com/card/tdc/103/skullclamp',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
  ],
  publishDate: '2026-06-04T00:00:00.000Z',
  lastUpdated: '2026-06-04T00:00:00.000Z',
  primaryKeyword: 'best equipment mtg',
  secondaryKeywords: [
    'best equipment commander',
    'best mtg equipment cards',
    'mtg equipment ranked',
    'best equipment edh',
    'swords of x and y ranked',
    'umezawas jitte commander',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 11,
  toc: [
    { id: 'why-equipment-is-different-from-other-buffs', label: 'Why Equipment is different from other buffs', level: 2 },
    { id: 'the-s-tier-format-defining-equipment', label: 'The S-tier: format-defining Equipment', level: 2 },
    { id: 'best-protective-equipment', label: 'Best protective Equipment', level: 2 },
    { id: 'the-swords-cycle-ranked', label: 'The Swords cycle, ranked', level: 2 },
    { id: 'best-aggressive-equipment', label: 'Best aggressive Equipment', level: 2 },
    { id: 'equipment-that-looks-better-than-it-is', label: 'Equipment that looks better than it is', level: 2 },
    { id: 'format-notes-beyond-commander', label: 'Format notes beyond Commander', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Skullclamp costs one mana, equips for one mana, and turns any creature you don't care about into two cards. It is, on paper, a +1/-1 that kills your own 1-toughness guys. In practice it is one of the best card-draw engines ever printed, and it is so dangerous that it's banned in every 60-card format that exists. In Commander it's legal, cheap, and quietly busted. That gap between what an Equipment says and what it does is the whole story of this card type.

Equipment is the buff that doesn't die when the creature dies. That single difference is why the good ones are so good: you pay once, and the value re-attaches to the next thing you cast. This is a ranking of the best Equipment in Magic, built primarily for Commander because that's where Equipment lives its best life, with format notes for the cards that matter in Modern, Pioneer, and Pauper. Every card here was checked against Scryfall for current legality, and where something is banned somewhere, it's flagged.

## Why Equipment is different from other buffs

An Aura like Rancor pumps a creature, but if that creature gets killed in response to the Aura, you're usually down a card. Equipment doesn't work that way. When the equipped creature dies, the Equipment just falls off and sits on the battlefield, waiting. Pay the equip cost again, and now it's on your next threat. You bought the effect once and you get to keep renting it out forever.

That permanence is why Equipment scales so well in a format like Commander, where games go long and creatures trade constantly. A few rules that govern all of it:

- **Equipping is a sorcery-speed action.** You can only attach Equipment when you could cast a sorcery — your main phase, empty stack. The cards that break this rule (Embercleave attaching on cast, Lightning Greaves' free equip mid-combat is still sorcery-speed) are special-cased, and we'll cover them.
- **The equip cost is paid every time you move it.** Reattaching a Sword from a dead creature to a fresh one costs the equip cost again. Cheap equip costs are a feature, not a footnote.
- **Equipment only does something attached to a creature.** A board wipe that kills all your creatures leaves your Swords stranded until you can deploy and re-equip — which is the main argument against loading up on too many.

> The honest framing: Equipment is an investment that pays off over multiple turns and multiple creatures. In a fast 1v1 game it's often too slow. In a grindy four-player Commander game, where you'll recast a half-dozen creatures, it's one of the best things you can be doing with your mana.

## The S-tier: format-defining Equipment

These three are the ceiling. Each one does something so efficient that it shapes how decks get built around it.

| Equipment | Cost / Equip | What it does | Why it's S-tier |
| --- | --- | --- | --- |
| Skullclamp | {1} / equip {1} | +1/-1, draw two when equipped creature dies | One mana into a repeatable two-card draw engine. Banned outside Commander |
| Umezawa's Jitte | {2} / equip {2} | Banks counters on combat damage; spend them to pump, kill, or gain life | Wins combat, removes blockers, and gains life all at once. Snowballs out of control |
| Batterskull | {5} / equip {5} | Living weapon: makes a 0/0 Germ and attaches; equipped creature gets +4/+4, vigilance, lifelink | A 4/4 vigilance lifelink that comes with its own body and bounces to dodge removal |

![Skullclamp, the one-mana Equipment that gives +1/-1 and draws two cards when the equipped creature dies — banned everywhere but Commander.](/images/blog/magic-the-gathering/best-equipment-mtg/skullclamp.jpg)

**Skullclamp** is the value engine. Strap it on a token or a 1-toughness creature, the -1 kills it, you draw two cards, and the Clamp is still sitting there ready for the next one. In a deck that makes creature tokens, this is an absurd amount of card advantage for one mana. It's banned in Legacy, Modern, Pioneer, Pauper — basically everywhere with a 1v1 ban list — and it is fully legal in Commander, which tells you everything about how strong it is. If your Commander deck makes small creatures, run it.

**Umezawa's Jitte** is the combat trick that never stops. Connect once and you bank two charge counters; from then on you spend counters to give +2/+2, shrink an enemy creature with -1/-1, or gain 2 life. It dominates creature combat so completely that an unanswered Jitte often just wins the game. Two mana to cast, two to equip, and it can do all three of its modes across a turn.

**Batterskull** solves Equipment's biggest weakness — needing a creature first — by bringing its own. The living weapon ability makes a 0/0 Germ token and attaches the Skull to it, so the moment it hits the battlefield you have a 4/4 with vigilance and lifelink. Worried about removal? Pay 3 to bounce it back to hand and redeploy. It's colorless, so it goes in literally any deck.

## Best protective Equipment

The two most-played Equipment in all of Commander aren't weapons at all. They're insurance for your commander.

![Umezawa's Jitte, the two-mana Equipment that banks charge counters on combat damage to pump, shrink enemies, or gain life.](/images/blog/magic-the-gathering/best-equipment-mtg/umezawas-jitte.jpg)

- **Lightning Greaves** — {2}, **equip {0}.** Gives haste and shroud. The free equip cost is the magic: you can move it onto a freshly cast commander for nothing, and shroud means targeted removal and spot kill spells bounce off. The catch is shroud also stops *you* from targeting it, so you can't pile your own Auras or other Equipment onto a Greaves'd creature without moving the Greaves first.
- **Swiftfoot Boots** — {2}, **equip {1}.** Gives haste and hexproof. Hexproof only protects against your opponents' targeting, so unlike Greaves you can still target your own creature — which means it plays nicer with the rest of your toolbox. The tradeoff is the equip cost isn't free.

These two are the most-included Equipment in the format for a reason. A commander is the engine your whole deck is built around, and your opponents know it — they will point removal at it on sight. Greaves and Boots let you cast a commander and immediately attack with it (haste) while shrugging off the first kill spell (shroud/hexproof). Most decks run one or both. The rule of thumb: Greaves for the cheaper, free-equip protection; Boots when you need to still target your own guy.

## The Swords cycle, ranked

![Sword of Fire and Ice, granting +2/+2, protection from red and blue, plus 2 damage and a card on combat damage.](/images/blog/magic-the-gathering/best-equipment-mtg/sword-of-fire-and-ice.jpg)

The "Sword of X and Y" cycle is the most beloved Equipment family in the game. Every Sword gives **+2/+2**, **protection from two colors**, and a **combat-damage trigger**. The protection is doing double duty — it makes the creature unblockable by those two colors, dodges removal of those colors, and prevents that damage. That's why connecting is so easy. Here's how the major ones stack up, all Commander-legal:

| Sword | Protection from | Trigger on combat damage |
| --- | --- | --- |
| Sword of Fire and Ice | Red, Blue | Deal 2 damage to anything + draw a card |
| Sword of Feast and Famine | Black, Green | Opponent discards + untap all your lands |
| Sword of Light and Shadow | White, Black | Gain 3 life + return a creature from your graveyard |
| Sword of War and Peace | Red, White | Burn for their hand size + gain life for your hand size |
| Sword of Sinew and Steel | Black, Red | Destroy a planeswalker and an artifact |
| Sword of Truth and Justice | White, Blue | Add a +1/+1 counter, then proliferate |

**Sword of Fire and Ice** is the consensus best of the cycle and it's not especially close. Card draw plus two damage on every connection means it generates real card advantage and doubles as removal for small creatures, mana dorks, and planeswalkers. **Sword of Feast and Famine** is the combo player's pick — untapping all your lands effectively makes it free to swing with and fuels explosive turns. **Sword of Light and Shadow** is the grindy value option, recurring a creature every hit while padding your life.

The rest are more situational. Sword of War and Peace punishes durdly draw-heavy decks, Sword of Sinew and Steel is a hate piece against artifact and planeswalker decks, and Sword of Truth and Justice is the +1/+1 counters payoff. You don't need all eight. Pick the one or two whose protection colors dodge the most removal in your pod and whose trigger matches your deck's plan.

## Best aggressive Equipment

When you want Equipment to end the game instead of grind value, these are the closers.

- **Embercleave** — {4}{R}{R}, but it costs {1} less per attacking creature and has flash, so in a go-wide deck you flash it in for {R}{R} or less mid-combat. It auto-attaches on cast and gives +1/+1, **double strike**, and trample. Swinging with a board of creatures and dropping Embercleave on the biggest one is a classic out-of-nowhere kill. One of the best red finishers printed in years.
- **Colossus Hammer** — {1}, but **equip {8}.** On its own that equip cost is a joke. The trick is cheating it on: cards like Sigarda's Aid or Puresteel Paladin let you attach it for free, turning any 1/1 into an 11/11. It's the centerpiece of the dedicated "Hammer Time" decks in Modern and a fun budget bomb in Commander if you build around free attachment.
- **The Reaver Cleaver** — {2}{R}, equip {3}. Gives +1/+1, trample, and "whenever this creature deals combat damage to a player or planeswalker, create that many Treasure tokens." Connect for 5 and you get five Treasures — it ramps you hard every time it hits. A strong aggressive-ramp Equipment in red Commander decks.
- **Bonesplitter** — {1}, equip {1}. The humble +2/+0 for one mana. Nothing flashy, but in aggressive and equipment-matters decks the rate is excellent, and it's a Pauper all-star.

Embercleave is the headliner here. In any deck that can flood the board — tokens, mono-red aggro, go-wide Commander — it converts a board presence into a lethal alpha strike for a fraction of its printed cost. The double strike plus trample means even chump blocks don't save your opponent.

## Equipment that looks better than it is

Not every famous Equipment earns a slot. A few to think twice about:

- **Loxodon Warhammer.** Three to cast, three to equip, for +3/+0, trample, and lifelink. That was great in 2004. Today the Swords cost the same equip and do far more. It's a budget option at best.
- **Grappling Hook, Spectral cycle, and other niche combat hooks.** Cute, narrow, and usually outclassed by just running another Sword or a protective Equipment.
- **Anything with a double-digit equip cost and no way to cheat it out.** Colossus Hammer is only good because Hammer Time *cheats the equip.* Without an enabler like Sigarda's Aid or Puresteel Paladin, an {8} equip cost is unplayable. Don't run the payoff without the enabler.
- **Stoneforge Mystic without targets.** Not an Equipment, but worth a flag: the famous Equipment tutor-and-cheat creature is only as good as the Equipment it fetches. Run it alongside Batterskull or a Sword, not in a deck with two random Equipment.

The trap with Equipment generally is running too many. Every Equipment is a do-nothing until it's attached, and a hand clogged with three Swords and no creatures loses games. Most Commander decks want a tight package — a couple of protective pieces and one or two payoffs — not an Equipment subtheme unless the whole deck is built for it.

## Format notes beyond Commander

This ranking is Commander-first, but Equipment shows up across formats with different stars:

- **Modern:** Hammer Time is a real, tier-relevant deck built on Colossus Hammer plus Sigarda's Aid and Puresteel Paladin to attach it for free turn two. Stoneforge Mystic into Batterskull and Kaldra Compleat is a long-running package. Skullclamp is **banned** here.
- **Pioneer:** Equipment is fringe, but the protective and aggressive pieces see occasional play. No Skullclamp (banned).
- **Pauper:** Bonesplitter and the common-rarity Equipment are genuinely strong because the power level is lower and a +2/+0 for one mana matters. Skullclamp is **banned** in Pauper too.
- **Legacy/Vintage:** Stoneforge Mystic plus Batterskull is a classic control finisher. Skullclamp is banned in Legacy.

The throughline: Skullclamp is so strong it's banned in essentially every constructed format *except* Commander. If you've only ever seen it on a Commander table, that's why — it's the one big format where it's legal, and it earns its reputation there every game.

## Quick Action Checklist

Building an Equipment package for a Commander deck? Start here and trim to fit:

- [ ] Run protection first: Lightning Greaves and/or Swiftfoot Boots to keep your commander alive
- [ ] Add Skullclamp if your deck makes small creatures or tokens — it's legal in Commander and elite
- [ ] Umezawa's Jitte if you do any creature combat; it takes over games on its own
- [ ] Pick one or two Swords whose protection colors dodge your pod's removal (Sword of Fire and Ice is the default)
- [ ] Batterskull as a colorless, self-contained threat that dodges removal by bouncing
- [ ] Embercleave only if you go wide; it's a finisher, not a value piece
- [ ] Don't run a double-digit equip cost (Colossus Hammer) without a free-attach enabler
- [ ] Keep the package tight — too many Equipment and no creatures is a dead hand`,
  faq: [
    {
      question: 'What is the best Equipment in Magic: The Gathering?',
      answer:
        "For raw power, Skullclamp and Umezawa's Jitte are the two strongest Equipment in the game. Skullclamp turns one mana into a repeatable two-card draw engine and is banned in every 60-card constructed format; in Commander it's legal and elite in any deck with small creatures. Umezawa's Jitte dominates creature combat so completely that an unanswered one often wins the game. Batterskull rounds out the top tier as a self-contained, colorless threat that fits any deck.",
    },
    {
      question: 'Is Skullclamp banned in Commander?',
      answer:
        'No. Skullclamp is legal in Commander, which is unusual because it is banned in Legacy, Modern, Pioneer, and Pauper. It gives +1/-1 and draws two cards whenever the equipped creature dies, for a total of one mana to cast and one to equip. In a deck that makes tokens or small creatures, that is one of the most efficient card-draw engines ever printed, which is exactly why every 1v1 format bans it.',
    },
    {
      question: 'Which Sword in the Sword of X and Y cycle is the best?',
      answer:
        'Sword of Fire and Ice is the consensus best of the cycle. Every Sword gives +2/+2 and protection from two colors, but Fire and Ice deals 2 damage to any target and draws you a card on every connection, which means it generates real card advantage and doubles as removal for small creatures, mana dorks, and planeswalkers. Sword of Feast and Famine (untap all lands) is the combo pick, and Sword of Light and Shadow (lifegain plus creature recursion) is the grindy value pick.',
    },
    {
      question: 'Lightning Greaves or Swiftfoot Boots — which should I run?',
      answer:
        "Both, in many decks. Lightning Greaves has a free equip cost and grants haste and shroud, so you can move it onto a fresh commander for nothing and protect it from targeted removal — but shroud also stops you from targeting your own creature. Swiftfoot Boots grants haste and hexproof for a {1} equip; hexproof only blocks opponents' targeting, so you can still buff your own creature. Greaves for cheap free-equip protection, Boots when you need to target your own guy.",
    },
    {
      question: 'How many Equipment should I run in a Commander deck?',
      answer:
        'Unless you are building a dedicated Equipment or voltron deck, keep it tight — usually one or two protective pieces (Lightning Greaves, Swiftfoot Boots) plus one or two payoffs (a Sword, Skullclamp, or Batterskull). Every Equipment does nothing until it is attached to a creature, so a hand full of Equipment and no creatures loses games. A dedicated Equipment deck built around enablers like Stoneforge Mystic and Puresteel Paladin can run far more.',
    },
    {
      question: 'Why is Equipment better in Commander than in 1v1 formats?',
      answer:
        "Equipment is an investment that pays off over multiple turns and multiple creatures, because it stays on the battlefield when the creature it's on dies and can be re-equipped to the next one. Commander games are long, grindy, and full of creature trades, so you get to cash in that re-equip value many times. In a fast 1v1 game, Equipment is often too slow — you'd rather spend that mana on the board immediately.",
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/best-mana-rocks-commander-mtg', anchor: 'Best mana rocks in Commander' },
    { href: '/blog/magic-the-gathering/best-removal-spells-mtg', anchor: 'Best removal spells in MTG' },
    { href: '/blog/magic-the-gathering/mtg-commander-format-guide-how-to-start', anchor: 'Commander format guide for beginners' },
    { href: '/blog/magic-the-gathering/how-to-build-a-commander-deck', anchor: 'How to build a Commander deck' },
    { href: '/blog/magic-the-gathering/mtg-modern-format-guide', anchor: 'MTG Modern format guide' },
  ],
  externalSources: [
    {
      url: 'https://scryfall.com/search?q=t%3Aequipment+f%3Acommander',
      title: 'Scryfall — Equipment card search and current rules text',
    },
    {
      url: 'https://edhrec.com/top/cards?type=artifact',
      title: 'EDHREC — most-played Commander artifacts by inclusion rate',
    },
    {
      url: 'https://magic.wizards.com/en/banned-restricted-list',
      title: 'Wizards of the Coast — official banned and restricted list',
    },
  ],
  tldr:
    "The best Equipment in Magic, for Commander: Skullclamp (one mana into a repeatable two-card draw engine, banned in every 60-card format but legal in EDH), Umezawa's Jitte (takes over creature combat by itself), and Batterskull (a self-contained 4/4 lifelink threat) headline the S-tier. Protect your commander with Lightning Greaves or Swiftfoot Boots, pick a Sword or two (Sword of Fire and Ice is best), and use Embercleave as a go-wide finisher. Keep the package tight so you don't draw Equipment with no creatures.",
  itemList: {
    name: 'Best Equipment in Magic: The Gathering, Ranked',
    items: [
      { name: 'Skullclamp', description: 'One mana into a repeatable two-card draw engine. Banned in 60-card formats, legal and elite in Commander.' },
      { name: "Umezawa's Jitte", description: 'Banks charge counters on combat damage to pump, kill blockers, or gain life. Takes over games alone.' },
      { name: 'Batterskull', description: 'Living-weapon Equipment that makes its own 4/4 vigilance lifelink body and bounces to dodge removal.' },
      { name: 'Lightning Greaves', description: 'Free-equip haste and shroud — the cheapest way to protect a freshly cast commander.' },
      { name: 'Swiftfoot Boots', description: 'Haste and hexproof for a {1} equip; protects your commander while still letting you target it.' },
      { name: 'Sword of Fire and Ice', description: 'Best of the Swords cycle: +2/+2, protection from red and blue, plus 2 damage and a card on each hit.' },
      { name: 'Embercleave', description: 'Flash finisher that gets cheaper per attacker and grants double strike and trample. A go-wide closer.' },
    ],
  },
};
