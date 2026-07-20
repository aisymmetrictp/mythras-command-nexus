import type { BlogPost } from '../../blogTypes';

export const mtgStackPriorityExplained: BlogPost = {
  slug: 'mtg-stack-priority-explained',
  game: 'magic-the-gathering',
  category: 'beginner-guides',
  topicCluster: 'rules-basics',
  title: 'How the Stack and Priority Work in Magic: The Gathering',
  metaDescription:
    'How the stack and priority work in MTG: LIFO resolution, casting in response, holding priority, triggers, and state-based actions, with examples from the rules.',
  excerpt:
    "The stack is the single rules concept that decides whether you actually understand Magic or just play the cards. Here is how it resolves, when you get priority, how to respond to a spell, and the timing rulings that trip up every new player.",
  featuredImagePrompt:
    'A wizard hand interrupting a glowing spell mid-cast, blue energy frozen on a magical stack of layered runes, painterly Magic: The Gathering art style, deep blue tones, no text',
  heroImage: '/images/blog/magic-the-gathering/mtg-stack-priority-explained/counterspell.jpg',
  heroImageAlt:
    'Counterspell, the iconic blue instant that counters target spell — the clearest example of using the stack to respond before a spell resolves.',
  imageSources: [
    {
      src: '/images/blog/magic-the-gathering/mtg-stack-priority-explained/counterspell.jpg',
      sourceUrl: 'https://scryfall.com/card/named?exact=Counterspell',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-stack-priority-explained/lightning-bolt.jpg',
      sourceUrl: 'https://scryfall.com/card/named?exact=Lightning%20Bolt',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
    {
      src: '/images/blog/magic-the-gathering/mtg-stack-priority-explained/brainstorm.jpg',
      sourceUrl: 'https://scryfall.com/card/named?exact=Brainstorm',
      license: 'Card art © Wizards of the Coast; via Scryfall',
    },
  ],
  publishDate: '2026-06-06T00:00:00.000Z',
  lastUpdated: '2026-06-06T00:00:00.000Z',
  primaryKeyword: 'how the stack works mtg',
  secondaryKeywords: [
    'mtg stack and priority explained',
    'mtg priority rules',
    'how to respond to a spell mtg',
    'mtg holding priority',
    'mtg state-based actions',
    'magic the gathering stack lifo',
  ],
  schemaType: 'BlogPosting',
  updateFrequency: 'evergreen',
  evergreen: true,
  readingTimeMin: 12,
  toc: [
    { id: 'what-the-stack-actually-is', label: 'What the stack actually is', level: 2 },
    { id: 'last-in-first-out-the-only-resolution-rule', label: 'Last in, first out: the only resolution rule', level: 2 },
    { id: 'priority-the-permission-to-act', label: 'Priority: the permission to act', level: 2 },
    { id: 'responding-to-a-spell-a-worked-example', label: 'Responding to a spell: a worked example', level: 2 },
    { id: 'holding-priority-on-purpose', label: 'Holding priority on purpose', level: 2 },
    { id: 'triggered-abilities-and-the-stack', label: 'Triggered abilities and the stack', level: 2 },
    { id: 'state-based-actions-the-rules-that-fire-without-the-stack', label: 'State-based actions: the rules that fire without the stack', level: 2 },
    { id: 'what-does-not-use-the-stack', label: 'What does not use the stack', level: 2 },
    { id: 'common-timing-rulings-that-trip-people-up', label: 'Common timing rulings that trip people up', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],
  content: `Here is the thing nobody tells you when you learn Magic: casting a spell does not make it happen. You put the spell on a thing called the stack, and then it sits there, doing nothing, while both players get a chance to react. Only once everyone passes does it actually resolve. Miss that one idea and half the game looks like magic in the bad sense — your opponent "responds" to your spell and somehow your removal hits nothing, your big play gets countered, and you have no idea when you were even allowed to do something about it.

The stack is the engine that runs all of that, and priority is the system that decides who gets to touch it. This is a beginner-to-intermediate primer that matches the current comprehensive rules. If you know what an instant is and what tapping a land does, you are ready. By the end you will know exactly when you can respond, why "in response" is a real phase and not a vibe, and the handful of timing rulings that quietly decide close games.

## What the stack actually is

The stack is a zone — the same way the battlefield, the graveyard, and your hand are zones. When you cast a spell or activate an ability, it does not immediately do its thing. It goes onto the stack and waits there as an object.

While something is on the stack, it is not yet a permanent, it has not dealt its damage, it has not drawn you cards. It is a promise that *will* happen once it resolves, and "once it resolves" only comes after every player has had a chance to add more things on top of it.

![Counterspell, the blue instant that counters target spell while it is still on the stack, before it ever resolves.](/images/blog/magic-the-gathering/mtg-stack-priority-explained/counterspell.jpg)

That waiting period is the whole point. It is why [Counterspell](/blog/magic-the-gathering/best-counterspells-mtg) exists. Counterspell reads "Counter target spell," and the only window in which a spell is a *spell on the stack* — rather than a permanent on the battlefield or a resolved effect — is that gap between casting and resolving. The stack is the place where that gap lives.

## Last in, first out: the only resolution rule

The stack resolves **last in, first out** (LIFO). The most recently added object resolves first, then the next one down, and so on until the stack is empty. If you have ever stacked plates, you know this instinctively: the last plate you put on top is the first one you take off.

Concretely. You cast a creature. Before it resolves, your opponent casts a removal spell targeting it. The stack now reads, top to bottom: removal spell (added last), your creature (added first). When players stop adding to the stack, the **removal resolves first** — but your creature is not on the battlefield yet, it is still on the stack, so the removal often fizzles or has to target the spell, not the creature. (Most [creature removal](/blog/magic-the-gathering/best-removal-spells-mtg) can only target creatures *on the battlefield*, which is exactly why you cannot "kill" a creature while it is still a spell on the stack.)

The LIFO rule produces the most important practical instinct in the game: **the last thing said is the first thing that happens.** If your opponent responds to your spell, their response resolves before your spell does. People lose games because they assume the spell they cast first goes off first. It does not. It goes off last.

## Priority: the permission to act

You cannot just do things in Magic whenever you feel like it. You can only cast spells and activate abilities when you have **priority** — the game's formal "it is your turn to act right now" token.

The rules for who has priority are mechanical and worth memorizing:

- The **active player** (whose turn it is) receives priority at the start of most steps and phases.
- Whenever a player **casts a spell or activates an ability**, after it goes on the stack, that player **keeps priority** (they get to act again first).
- When a player has priority and chooses to do nothing, they **pass priority** to the next player.
- When **all players pass priority in succession** with the same object on top of the stack, the top object of the stack **resolves**. Then the active player gets priority again.
- If all players pass priority and the stack is **empty**, the current step or phase ends.

That third-to-last bullet is the one to tattoo on your brain. Things only resolve when *everyone passes in a row.* A single new spell or ability resets the chain — now everyone has to pass again on top of the new thing before anything resolves. This is what lets responses pile up.

## Responding to a spell: a worked example

"Responding" just means: a spell is on the stack, you have priority, and you add your own instant or ability on top of it. Because of LIFO, yours resolves first.

![Lightning Bolt, an instant that deals 3 damage to any target and can be cast in response to a spell or ability on the stack.](/images/blog/magic-the-gathering/mtg-stack-priority-explained/lightning-bolt.jpg)

Walk through a clean sequence:

1. Your opponent casts a 2/2 creature with an ability that reads "When this enters, draw a card." They cast the creature spell — it goes on the stack. They keep priority, then pass.
2. You have priority. The creature spell is still on the stack (not on the battlefield yet). You cast **Lightning Bolt** targeting your opponent's face. Bolt goes on top of the creature spell. The stack now reads: Bolt (top), creature spell (bottom).
3. You keep priority after casting Bolt, then pass. Your opponent passes too. Both players have passed in succession on top of Bolt, so **Bolt resolves first** — 3 damage to the opponent.
4. Now both players get priority again with the creature spell on top. Both pass. The creature spell resolves: the 2/2 enters the battlefield, and *now* its enter trigger goes on the stack.

Notice what you could **not** do: you could not Bolt the creature in step 2, because it was still a spell on the stack, not a creature on the battlefield. Lightning Bolt can hit "any target," but the creature is not a legal creature target until it resolves and enters play. To kill it with Bolt, you wait — let the creature resolve, let the enter trigger resolve, and *then* in a later priority window you Bolt the now-real 2/2. Knowing the difference between "spell on the stack" and "permanent on the battlefield" is most of what separates a player who understands timing from one who guesses.

## Holding priority on purpose

By default, after you cast a spell you keep priority. New players reflexively "pass" by saying "okay, go" or just looking up — and in casual games that is usually read as passing priority. But you can deliberately **hold priority** to do something before your own spell resolves, and it is a real tool.

The classic use: you cast a creature with an activated ability, and you want to activate that ability before the opponent can respond to the creature's resolution. Or — far more common — you want to chain two of your own spells so the second resolves first. Say you cast a removal spell, hold priority, and cast a second spell on top; your second spell resolves before your removal does.

In a tournament setting, the technically correct way to "respond to your own spell" is to announce you are holding priority. In kitchen-table play the etiquette is looser, but the principle is identical: until you actually pass, the turn to act is still yours, and you can keep stacking things. If you want a window to fire an instant after your spell goes on the stack but before it resolves, *do not pass* — hold priority and cast it.

## Triggered abilities and the stack

Triggered abilities — anything that starts with "when," "whenever," or "at" — also use the stack, but they get there differently. You do not "cast" a trigger. Instead, the moment its condition is met, it is put on the stack **the next time a player would receive priority.**

A few rules that follow from that:

- **Triggers go on the stack above whatever is already there.** If two things would trigger at once, the active player's triggers are placed first (so they end up lower and resolve later), then each non-active player's, in turn order. Within one player's batch, that player chooses the order.
- **You can respond to a trigger.** Because it sits on the stack and players get priority, an enter-the-battlefield trigger or an attack trigger can be countered (by something that counters abilities), redirected, or simply responded to with your own instant.
- **Triggers happen whether you want them to or not.** A mandatory trigger ("whenever this attacks, you lose 1 life") is not optional. It goes on the stack and resolves. Only triggers that say "may" give you the choice.

This is why "in response to the trigger" is such a common phrase. When a creature with a powerful enter trigger resolves, the creature is already on the battlefield, but its trigger is now a separate object on the stack — and that is your window to react to the trigger specifically, not the creature.

## State-based actions: the rules that fire without the stack

Here is the exception that confuses everyone: some things happen **automatically and do not use the stack at all.** These are **state-based actions** (SBAs), and they are the game's constant background check.

Whenever a player would receive priority, the game first checks for a list of conditions and instantly corrects them — no stack, no priority, no chance to respond. The big ones:

- A creature with **toughness 0 or less** is put into the graveyard.
- A creature with **lethal damage marked on it** (damage equal to or greater than its toughness) is destroyed.
- A player at **0 or less life** loses the game.
- A player who tried to **draw from an empty library** loses (the next time SBAs are checked).
- A player with **10 or more poison counters** loses.
- A **token or copy** in a zone other than where it is allowed ceases to exist.
- The "legend rule" and "planeswalker uniqueness": if you control two legendary permanents with the same name, you choose one to keep and the rest go to the graveyard.

The key consequence: you **cannot respond to a state-based action.** If your 3/3 takes 3 damage, it dies the next time the game checks — you do not get a priority window to "save it in response to it dying," because dying-from-lethal-damage is not a spell or ability on the stack. To save it, you had to act *earlier*, while there was still a priority window (for example, pumping its toughness in the [combat-damage step](/blog/magic-the-gathering/mtg-combat-explained) before damage was dealt, or before the SBA check). Once the condition exists, the correction is automatic and uninterruptible.

SBAs also explain why some "infinite" boards resolve the way they do, and why a creature reduced to 0 toughness by a -X/-X effect dies even though nothing "destroyed" it — toughness 0 is a state-based action, and [indestructible](/blog/magic-the-gathering/mtg-keywords-explained) does not save you from it.

## What does not use the stack

A short list of things that bypass the stack entirely, because mixing these up is a classic mistake:

- **State-based actions** (above) — automatic, uninterruptible.
- **Mana abilities.** Tapping a land for mana does *not* use the stack and cannot be responded to. The mana is just added. This is why you cannot "respond" to someone tapping a Swamp.
- **Playing a land.** A land drop is a special action; it does not go on the stack and cannot be countered or responded to.
- **Turning a face-down creature face up**, and a few other special actions, also bypass the stack.

Everything else — spells, activated abilities (that are not mana abilities), and triggered abilities — uses the stack and can be responded to.

## Common timing rulings that trip people up

The rulings I see argued at tables every week:

- **"Can I kill it in response to its trigger?"** You can respond to the *trigger*, but if the creature is already on the battlefield, killing it usually does not stop a trigger that is already on the stack — the trigger resolves independently of its source. Read whether the trigger needs the source to still be around.
- **"Summoning sickness" and the stack.** A creature you cast this turn cannot attack or use tap abilities (without haste), but that is a battlefield restriction, not a stack thing. The creature still resolves normally; it just cannot do certain things once it is in play.
- **Fizzling.** If a spell or ability has all its targets become illegal before it resolves (the creature it targeted died, gained protection, etc.), it is removed from the stack and does nothing — it "fizzles." It does not resolve and you do not get the effect.
- **Brainstorm-style draw-then-respond.** Instants like draw spells can be cast at instant speed in response to anything, which is why holding up mana for **Brainstorm** end of turn is a tempo play, not a misplay.
- **Two triggers at once.** When both players have triggers, the active player's go on the stack first (and resolve last). This decides a surprising number of close games — order matters.

![Brainstorm, an instant that draws three cards then puts two back, often cast in response to an opponent's spell at the end of their turn.](/images/blog/magic-the-gathering/mtg-stack-priority-explained/brainstorm.jpg)

The throughline for all of it: ask "is this on the stack right now, and do I have priority?" If yes, you can act. If it is a state-based action, a mana ability, or a land drop, you cannot. That single question resolves the vast majority of timing disputes.

## Quick Action Checklist

- A spell does **not** happen when you cast it — it goes on the **stack** and waits.
- The stack resolves **last in, first out**: the most recent thing resolves first.
- You can only act when you have **priority**; after you cast something, you keep priority.
- The top of the stack only resolves when **all players pass in succession**.
- To **respond** to a spell, cast your instant while it is on the stack — yours resolves first.
- **Hold priority** (do not pass) when you want to act before your own spell resolves.
- **Triggers** use the stack too, and you can respond to them.
- **State-based actions** (creatures dying, players at 0 life) do **not** use the stack and cannot be responded to.
- **Mana abilities and land drops** bypass the stack — you cannot respond to them.
- When in doubt, ask: "Is it on the stack, and do I have priority?"`,
  faq: [
    {
      question: 'What is the stack in Magic: The Gathering?',
      answer:
        'The stack is a game zone where spells and abilities wait before they resolve. When you cast a spell or activate an ability, it goes on the stack instead of happening immediately, and it stays there until every player passes priority. While something is on the stack it has not taken effect yet, which is the window in which it can be countered, redirected, or responded to with other instants and abilities.',
    },
    {
      question: 'How does the stack resolve in MTG?',
      answer:
        'The stack resolves last in, first out (LIFO). The most recently added spell or ability resolves first, then the next one down, and so on until the stack is empty. So if your opponent responds to your spell, their response resolves before your original spell does. Resolution only happens once all players pass priority in succession with the same object on top of the stack.',
    },
    {
      question: 'What does priority mean in Magic?',
      answer:
        'Priority is the game\'s permission to act. You can only cast spells or activate abilities when you have priority. The active player gets priority at the start of most steps; after any player casts a spell or activates an ability, that player keeps priority. When all players pass priority in a row, the top object of the stack resolves. If everyone passes with an empty stack, the step or phase ends.',
    },
    {
      question: 'How do I respond to a spell in MTG?',
      answer:
        'When a spell is on the stack and you have priority, cast an instant or activate an ability on top of it. Because the stack is last in, first out, your response resolves before the original spell. A common example is casting Counterspell while the spell you want to stop is still on the stack, or casting Lightning Bolt in response to a trigger. You cannot respond to mana abilities, land drops, or state-based actions.',
    },
    {
      question: 'Can you respond to state-based actions?',
      answer:
        'No. State-based actions — like a creature with lethal damage being destroyed, a creature with 0 toughness going to the graveyard, or a player at 0 life losing — happen automatically whenever a player would receive priority. They do not use the stack and cannot be responded to. To prevent one, you have to act earlier, during a priority window, before the condition exists.',
    },
    {
      question: 'What does holding priority mean?',
      answer:
        'Holding priority means choosing not to pass after you cast a spell or activate an ability, so you can act again before it resolves. By default you keep priority after casting, so you can chain a second spell on top of your first (the second resolves first), or activate an ability before your opponent gets a chance to respond. In tournaments you announce that you are holding priority; in casual play the principle is the same — until you pass, it is still your turn to act.',
    },
  ],
  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/magic-the-gathering', anchor: 'Magic: The Gathering coverage hub' },
    { href: '/blog/magic-the-gathering/mtg-combat-explained', anchor: 'How combat works in MTG' },
    { href: '/blog/magic-the-gathering/mtg-keywords-explained', anchor: 'MTG keyword abilities explained' },
    { href: '/blog/magic-the-gathering/best-counterspells-mtg', anchor: 'Best counterspells in MTG' },
    { href: '/blog/magic-the-gathering/best-removal-spells-mtg', anchor: 'Best removal spells in MTG' },
  ],
  externalSources: [
    {
      url: 'https://magic.wizards.com/en/rules',
      title: 'Wizards of the Coast — official comprehensive rules',
    },
    {
      url: 'https://mtg.fandom.com/wiki/Stack',
      title: 'MTG Wiki — the stack and how it resolves',
    },
    {
      url: 'https://mtg.fandom.com/wiki/State-based_action',
      title: 'MTG Wiki — state-based actions',
    },
  ],
  tldr:
    'In Magic, casting a spell puts it on the stack, where it waits until all players pass priority. The stack resolves last in, first out — so a response resolves before the spell it responds to. You can only act when you have priority, and you can hold priority to act again before your own spell resolves. Triggered abilities also use the stack and can be responded to, but state-based actions (a creature dying, a player hitting 0 life), mana abilities, and land drops bypass the stack entirely and cannot be responded to.',
  itemList: {
    name: 'The Core Concepts of the MTG Stack and Priority',
    items: [
      { name: 'The stack', description: 'A zone where spells and abilities wait before resolving. Nothing happens the instant you cast it.' },
      { name: 'Last in, first out (LIFO)', description: 'The most recently added object resolves first, so responses resolve before the spells they respond to.' },
      { name: 'Priority', description: 'The permission to act. You can only cast spells or activate abilities when you hold priority.' },
      { name: 'Holding priority', description: 'Choosing not to pass so you can act again before your own spell resolves.' },
      { name: 'Triggered abilities', description: 'Go on the stack the next time a player would get priority, and can be responded to.' },
      { name: 'State-based actions', description: 'Automatic checks (lethal damage, 0 life, 0 toughness) that bypass the stack and cannot be responded to.' },
    ],
  },
};
