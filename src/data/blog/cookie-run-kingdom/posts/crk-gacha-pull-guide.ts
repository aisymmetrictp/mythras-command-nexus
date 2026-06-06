import type { BlogPost } from '../../blogTypes';

export const crkGachaPullGuide: BlogPost = {
  slug: 'crk-gacha-pull-guide',
  game: 'cookie-run-kingdom',
  category: 'beginner-guides',
  topicCluster: 'gacha-economy',

  title: 'Cookie Run: Kingdom Gacha Guide: When to Pull and When to Save',
  metaDescription:
    'How the Cookie Run: Kingdom gacha actually works: rate-up banners, Soulstones vs the Mileage Shop, the no-real-pity reality, and exactly when to pull or save.',
  excerpt:
    "The single most expensive thing a CRK player does isn't a bad pull — it's pulling on the wrong banner with no idea how the system works. Here's the gacha demystified: how rate-up actually helps, why Soulstones matter more than the summon screen, the truth about pity, and a clean rule for when to spend your crystals versus when to sit on them.",
  featuredImagePrompt:
    'A glowing Cookie Run Kingdom summon screen with a single Legendary gacha orb bursting in gold-and-rainbow particles, a stack of blue crystals in the foreground and a faint banner timer above, deep purple and gold palette, mobile-game key art, 16:9 hero banner, no text',
  heroImage: '/images/cookies/dark-enchantress-cookie.png',
  heroImageAlt:
    'Dark Enchantress Cookie, the kind of meta-defining Legendary the Cookie Run: Kingdom gacha is built around chasing on rate-up banners.',
  imageSources: [
    { src: '/images/cookies/dark-enchantress-cookie.png', sourceUrl: 'owned-asset' },
    { src: '/images/cookies/sea-fairy-cookie.png', sourceUrl: 'owned-asset' },
    { src: '/images/cookies/hollyberry-cookie.png', sourceUrl: 'owned-asset' },
  ],

  publishDate: '2026-06-06T00:00:00.000Z',
  lastUpdated: '2026-06-06T00:00:00.000Z',

  primaryKeyword: 'cookie run kingdom gacha guide',
  secondaryKeywords: [
    'crk when to pull',
    'cookie run kingdom rate up banner',
    'crk soulstones vs mileage shop',
    'cookie run kingdom pity system',
    'when to save crystals crk',
    'crk gacha rates',
    'cookie run kingdom how gacha works',
  ],

  schemaType: 'BlogPosting',
  updateFrequency: 'quarterly',
  evergreen: true,
  readingTimeMin: 12,

  toc: [
    { id: 'the-one-thing-the-gacha-punishes', label: 'The one thing the gacha punishes', level: 2 },
    { id: 'how-the-crk-gacha-actually-works', label: 'How the CRK gacha actually works', level: 2 },
    { id: 'rate-up-banners-are-the-whole-game', label: 'Rate-up banners are the whole game', level: 2 },
    { id: 'the-no-real-pity-reality', label: 'The no-real-pity reality', level: 2 },
    { id: 'soulstones-vs-the-mileage-shop', label: 'Soulstones vs the Mileage Shop', level: 2 },
    { id: 'when-to-pull-and-when-to-save', label: 'When to pull and when to save', level: 2 },
    { id: 'f2p-pull-discipline', label: 'F2P pull discipline', level: 2 },
    { id: 'common-gacha-mistakes', label: 'Common gacha mistakes', level: 2 },
    { id: 'quick-action-checklist', label: 'Quick Action Checklist', level: 2 },
  ],

  content: `The single most expensive thing a Cookie Run: Kingdom player ever does is not a bad pull. It's tapping the summon button on the wrong banner, with no plan, because the crystals were there and the animation looked fun. Two players can earn the exact same crystals over six months and end up wildly apart in roster strength, and the gap is almost never income — it's whether they understood the gacha well enough to point their pulls at the right targets.

So before you spend another crystal, here's the system demystified: how summoning actually resolves, why rate-up is the only banner type that matters, the uncomfortable truth about pity, the difference between Soulstones and the Mileage Shop (this is where most accounts leak value), and a clean rule for when to pull versus when to sit on your stash. Exact crystal costs and drop rates shift between banners and patches, so I'll keep the numbers strategy-level and tell you to confirm any specific rate on the in-game banner before you commit a stash — the game shows you the real odds on every banner's info screen.

## The one thing the gacha punishes

Here's the rule everything else hangs on: **the CRK gacha punishes reactive spending and rewards patience aimed at a target.** It does not reward grinding harder. It does not reward pulling more often. It rewards knowing which banner is worth your finite crystals and ignoring the rest.

The corollary, and the most important sentence in this guide: **the default action is to save.** Spending is the exception you justify with a real roster gap, not the baseline you fall back to because the stash hit a round number. An account that defaults to saving and only spends on meta-defining rate-up banners outpaces a busier account that pulls on every shiny thing that appears — every single time.

> The most expensive mistake in CRK is being crystal-broke when the banner that actually matters drops. Treat your stash as ammunition you're holding for a target, not a balance you're itching to spend.

## How the CRK gacha actually works

Strip away the animation and the summon is simple: each pull rolls against a rarity table. The bulk of your pulls land **Common** through **Rare** cookies you'll never use competitively. A smaller slice are **Epic** cookies, some of which are genuinely useful. The top of the table is **Super Epic**, **Legendary**, **Ancient**, **Dragon**, and **Beast** rarities — the cookies that actually define a roster — and those sit at low rates by design. That's the whole point of a gacha: the cookies that change results are rare on purpose.

A few mechanics that matter more than the rarity table itself:

- **You pull with Crystals** (the premium currency you earn for free as F2P) or with special **Cookie Cutters** on certain limited banners. Crystals are your real currency — guard them.
- **Single pulls and 10-pulls** draw from the same odds; the 10-pull is just ten draws bundled, usually with a small guaranteed-rarity floor on the tenth. It does not raise your Legendary odds per draw.
- **Dupes turn into Soulstones**, which is the actual long-game payoff of pulling a high-rarity cookie more than once (more on that below).
- **Banners rotate.** The summon screen is not one static pool — there's a standard pool plus time-limited **rate-up** banners that boost specific cookies, and the limited banners are where your crystals should almost always go.

If you're brand new and haven't linked your account yet, the gacha also interacts with rerolling — restarting for a strong first Legendary. That's a separate decision with its own math; the [reroll guide](/blog/cookie-run-kingdom/cookie-run-kingdom-reroll-guide) covers when it's worth it and how to do it fast.

## Rate-up banners are the whole game

![Dark Enchantress Cookie, the archetype of a meta-defining Legendary worth aiming a rate-up pull at.](/images/cookies/dark-enchantress-cookie.png)

Here's the most actionable fact in this entire guide: **almost never pull on the standard/general banner. Pull on rate-up.**

A rate-up banner boosts the odds of a specific featured cookie within its rarity. The general banner spreads your luck across the entire pool, which means you're gambling crystals at the worst possible odds of hitting any one cookie you actually want. Rate-up concentrates those odds on the target. When a meta-definer like [Dark Enchantress](/gear-guide/dark-enchantress-cookie) is the featured rate-up cookie, your effective odds of landing *her specifically* are dramatically better than fishing for her on the general banner — and that's exactly the window you've been saving for.

The discipline that follows: **let the banner schedule drive your spending, not your crystal count.** Devsisters telegraphs rate-up banners — anniversaries, collabs, and new-cookie debuts — weeks ahead. A disciplined player banks toward those windows so they walk in with a full stash *and* the event login crystals stacking on top, which is often when the strongest banners of the year land. The general banner is for almost nothing. Rate-up is the game.

## The no-real-pity reality

This is the part people most want to be untrue, so let's be blunt: **CRK has historically not had a generous, guaranteed pity system the way some gachas do.** Many games give you a hard ceiling — "pull X times and the featured unit is guaranteed." CRK's safety nets have been thinner and have varied by banner type; some limited banners carry their own pity-style or guarantee mechanics, but you should never *assume* a clean guaranteed-by-pull-N ceiling exists on the banner in front of you.

What that means in practice:

- **Check the specific banner's info screen every time.** Whatever guarantee or pity-like mechanic exists is printed there, and it changes between banner types. Don't carry an assumption from one banner to the next.
- **Budget as if you might not hit.** Plan your stash around the realistic chance you whiff on a featured cookie, because without a reliable hard pity you genuinely can. This is why a half-stash "and hope" is a trap.
- **Never chase.** "I'm in this deep, the next ten will hit" is the sunk-cost fallacy, and on a system without a forgiving pity floor it can drain a whole stash into nothing. Decide your spend limit before you tap summon and honor it.

> Set your crystal limit for a banner *before* you pull, not in the heat of a dry streak. Without a reliable hard pity, the only thing standing between you and a busted stash is a number you committed to in advance.

## Soulstones vs the Mileage Shop

This is where most accounts quietly leak value, because the two systems sound similar and do completely different jobs.

**Soulstones** are the cookie-specific shards you collect to **unlock a cookie you don't have, or to dupe (raise the stars of) one you do.** You get them from dupe pulls, from certain shops and events, and from specific stages. Soulstones are the slow, reliable path to cookies the gacha won't hand you — every Soulstone you bank toward a target is progress that can't be undone by bad luck. For a cookie you can farm Soulstones for, that grind is often a more dependable route than gambling crystals.

**The Mileage Shop** runs on **Mileage**, a currency you accrue *from pulling* (and from related sources). Every summon you make builds Mileage, and you spend it in a dedicated shop — which has, at times, included direct purchases of specific high-value cookies and resources. The key insight: **Mileage is a consolation track that rewards the act of pulling**, so the pulls you make chasing a featured cookie aren't fully wasted even when you whiff — they're banking Mileage toward something concrete.

The practical takeaways:

- **Don't ignore your Mileage.** Check the Mileage Shop and spend it deliberately on the highest-value option available, rather than letting it sit. It's value you already earned by pulling.
- **Soulstones are the patient F2P route to specific cookies.** If a cookie you want is farmable via Soulstones, that path sidesteps the gacha entirely — bank them.
- **Confirm current contents in-game.** Exactly which cookies and items appear in the Mileage Shop, and which cookies have farmable Soulstones, shift over time. Check before you plan around either.

## When to pull and when to save

Run every banner through these gates in order. Pull only if it clears all of them:

1. **Is the featured cookie S-tier on the current [tier list](/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list)?** If no, save. Below S-tier almost never justifies a real stash.
2. **Does it fill a real gap in your roster?** If you already have a built answer for that role, save. A second healer when yours is built is a luxury, not an upgrade.
3. **Will it change a result you currently can't clear?** If it just makes an already-winning team marginally better, save. Pull for breakthroughs, not small gains.
4. **Is it a rate-up banner, and do you have enough to realistically land it without going broke?** If it's the general banner, or if pulling would leave you unable to react to the *next* banner, wait. Bank to your target first.

If a banner clears all four, that's your green light — commit and don't second-guess it. If it fails any single gate, save. The whole discipline lives in honoring gate 1 (S-tier only) and gate 4 (rate-up, with enough ammo) even when a cookie looks fun. For the deeper decision framework and a sample saving rhythm, the [F2P crystal guide](/blog/cookie-run-kingdom/f2p-crystal-optimization) has the full tree.

![Hollyberry Cookie, the kind of role-defining anchor that clears the pull gate when a real tank is your roster gap.](/images/cookies/hollyberry-cookie.png)

## F2P pull discipline

![Sea Fairy Cookie, a long-standing Legendary carry — the kind of pull that's worth crystals only if it fills a real gap on your roster.](/images/cookies/sea-fairy-cookie.png)

If you're free-to-play, your crystals are your entire economy, and discipline is the only edge you have over a wallet. The habits that separate a strong F2P account from a stalled one:

- **Default to saving, treat spending as the exception.** Bank toward a target, then pull; never pull "on the way up" with a half-stash.
- **Build free and Epic cookies so you clear content without pulling.** A solid Epic core handles most PvE, which keeps your crystals pointed at the Legendaries that actually move the needle instead of brute-forcing content a built Epic could have cleared.
- **Climb the income faucets.** Pushing Kingdom Arena rank and clearing new [Beast-Yeast](/blog/cookie-run-kingdom/crk-beast-yeast-guide) episodes the week they launch dwarf passive daily income — under-farming those is the usual reason a F2P stash feels thin.
- **Prioritize sustain when it's your gap.** A missing healer caps your arena and Beast-Yeast ceiling harder than a missing DPS, so an S-tier healer clears the pull gate even when you're swimming in damage; cross-check the [best healers ranking](/blog/cookie-run-kingdom/best-crk-healers-ranked).
- **Use Soulstones and Mileage as your no-gamble tracks.** They're how a F2P player lands specific cookies without surrendering to the rarity table.

That's the entire F2P game: skip the pulls that don't matter so you can afford the ones that do.

## Common gacha mistakes

The patterns that drain stashes and stall accounts:

- **Pulling on the general banner.** Always rate-up. The standard pool bleeds crystals at the worst possible odds of hitting any specific cookie.
- **Reactive pulling.** Spending the instant crystals hit a round number instead of waiting for a target. This is the big one.
- **Assuming a generous pity.** Don't carry a "guaranteed by pull N" assumption from another game — check the actual banner info screen and budget as if you might whiff.
- **Chasing a dry streak.** Sunk cost. Set a spend limit before you tap summon and stop there, win or lose.
- **Ignoring Mileage.** Every pull earns it; letting it rot in the Mileage Shop is throwing away value you already paid for.
- **Pulling for dupes before your core is built.** A built single copy of a meta cookie beats a 3-star off-meta one. Breadth before depth until your core roster exists.
- **FOMO on collab banners.** Limited-time pressure makes a non-meta cookie feel urgent. Urgency isn't value — run the four gates anyway.

## Quick Action Checklist

- [ ] Default to **saving**; treat every pull as an exception you justify with a roster gap
- [ ] Pull on **rate-up banners only** — almost never the general/standard banner
- [ ] Run every banner through the four gates: S-tier, fills a gap, changes a result, rate-up with enough ammo
- [ ] **Check the banner info screen** for the real rates and any pity/guarantee — never assume a generous pity
- [ ] Set a crystal **spend limit before** you tap summon, and honor it even on a dry streak
- [ ] Spend your **Mileage** deliberately in the Mileage Shop — it's value you earned by pulling
- [ ] Bank **Soulstones** as the patient, no-gamble path to specific cookies
- [ ] Build a free/Epic core so you clear PvE without spending crystals
- [ ] Prioritize an S-tier **healer** if sustain is your roster gap
- [ ] Check the [current tier list](/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list) for this month's pull targets`,

  faq: [
    {
      question: 'When should I pull in Cookie Run: Kingdom?',
      answer:
        "Pull only when a banner clears four gates: the featured cookie is S-tier on the current tier list, it fills a real gap in your roster, it changes a result you currently can't clear, and it's a rate-up banner you have enough crystals to realistically land without going broke. If a banner fails any one of those, save. The default action in CRK is always to save — spending is the exception you justify with a genuine roster need, not the baseline.",
    },
    {
      question: 'Should I pull on the rate-up banner or the general banner in CRK?',
      answer:
        "Almost always the rate-up banner. A rate-up banner concentrates your odds on a specific featured cookie, so when a meta-definer is featured your effective chance of landing that exact cookie is dramatically better. The general/standard banner spreads your luck across the entire pool, which is the worst possible odds of hitting any one cookie you actually want. Save your crystals for rate-up windows and skip the general banner.",
    },
    {
      question: 'Does Cookie Run: Kingdom have a pity system?',
      answer:
        "Not a reliably generous one. CRK has historically lacked the kind of forgiving hard pity some gachas offer — where a featured unit is guaranteed after a set number of pulls — and any pity-style or guarantee mechanics vary by banner type. Always check the specific banner's info screen for the real rates and whatever guarantee exists, and budget as if you might whiff, because without a dependable hard pity you genuinely can. Set a spend limit before you pull and never chase a dry streak.",
    },
    {
      question: 'What is the difference between Soulstones and the Mileage Shop?',
      answer:
        "Soulstones are cookie-specific shards you collect to unlock a cookie you don't have or to dupe (star up) one you do — they're the slow, reliable, no-gamble path to specific cookies, and you bank them from dupe pulls, shops, events, and certain stages. The Mileage Shop runs on Mileage, a currency you earn from the act of pulling, which you spend in a dedicated shop that has at times offered direct purchases of high-value cookies and resources. The key takeaway: every pull builds Mileage, so even a whiff isn't fully wasted, and Soulstones let you sidestep the gacha entirely for farmable cookies.",
    },
    {
      question: 'How do F2P players manage crystals in the CRK gacha?',
      answer:
        "Default to saving, build a free and Epic core so you clear PvE without pulling, and aim crystals only at S-tier rate-up banners that fill a real gap. Climb Kingdom Arena rank and clear new Beast-Yeast episodes early — those are your two biggest crystal faucets. Use Soulstones and Mileage as no-gamble tracks toward specific cookies, prioritize an S-tier healer if sustain is your gap, and never pull 'on the way up' with a half-stash. The F2P edge is discipline: skipping the pulls that don't matter so you can afford the ones that do.",
    },
    {
      question: 'Does a 10-pull have better odds than single pulls in CRK?',
      answer:
        "No — a 10-pull draws from the same per-pull odds as ten single pulls; it's just bundled, usually with a small guaranteed-rarity floor on the tenth draw. It does not raise your Legendary odds per draw. The reason to favor 10-pulls is convenience and that minor floor, not a hidden boost to high-rarity rates. Check the banner info screen for the exact rates and any 10-pull guarantee before you commit a stash.",
    },
  ],

  internalLinks: [
    { href: '/blog', anchor: 'Mythras blog' },
    { href: '/blog/cookie-run-kingdom', anchor: 'Cookie Run: Kingdom hub' },
    { href: '/blog/cookie-run-kingdom/f2p-crystal-optimization', anchor: 'F2P crystal guide' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-reroll-guide', anchor: 'reroll guide' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-tier-list', anchor: 'current tier list' },
    { href: '/blog/cookie-run-kingdom/crk-beast-yeast-guide', anchor: 'Beast-Yeast guide' },
    { href: '/blog/cookie-run-kingdom/best-crk-healers-ranked', anchor: 'best healers ranking' },
    { href: '/blog/cookie-run-kingdom/cookie-run-kingdom-codes', anchor: 'active CRK codes' },
    { href: '/gear-guide/dark-enchantress-cookie', anchor: 'Dark Enchantress Cookie' },
  ],

  externalSources: [
    { url: 'https://cookierunkingdom.fandom.com/wiki/Cookie_Run:_Kingdom_Wiki', title: 'Cookie Run: Kingdom Wiki (Fandom)' },
    { url: 'https://www.devsisters.com/en/', title: 'Devsisters — official studio page' },
    { url: 'https://www.pocketgamer.com/cookie-run-kingdom/', title: 'Pocket Gamer — Cookie Run: Kingdom hub' },
  ],

  tldr:
    "The CRK gacha rewards patience aimed at a target, not grinding or reactive spending — so default to saving and treat every pull as an exception. Pull on rate-up banners only (they concentrate your odds on a featured cookie); almost never the general banner. Don't assume a generous pity — CRK's safety nets are thin and vary by banner, so check the info screen and set a spend limit before you summon. Soulstones are the slow, no-gamble path to specific cookies, and the Mileage Shop turns the act of pulling into guaranteed value, so don't let Mileage rot. Run every banner through four gates (S-tier, fills a gap, changes a result, rate-up with enough crystals) and pull only on a clean pass. Exact rates and costs shift between banners — confirm them in-game.",

  itemList: {
    name: 'When to Pull vs Save in Cookie Run: Kingdom — The Four Gates',
    items: [
      { name: 'Gate 1 — Is the cookie S-tier?', description: 'If the featured cookie is not S-tier on the current tier list, save. Below S-tier almost never justifies a real stash.' },
      { name: 'Gate 2 — Does it fill a real roster gap?', description: 'If you already have a built answer for that role, save. A second copy of a covered role is a luxury, not an upgrade.' },
      { name: 'Gate 3 — Will it change a result you can\'t clear?', description: 'Pull for breakthroughs, not marginal gains. If it only makes a winning team slightly better, save.' },
      { name: 'Gate 4 — Is it rate-up, with enough crystals?', description: 'Only pull on rate-up banners, and only with enough to land the target without going broke for the next banner.' },
    ],
  },
};
