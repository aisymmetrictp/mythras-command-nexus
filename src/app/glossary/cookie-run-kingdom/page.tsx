import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';
import { BreadcrumbSchema, DefinedTermSetSchema, WebPageSchema } from '@/components/StructuredData';

const URL = 'https://gamertagmythras.com/glossary/cookie-run-kingdom';

export const metadata: Metadata = {
  title: 'Cookie Run: Kingdom Glossary — Every CRK Term Defined',
  description:
    'Definitive glossary for Cookie Run: Kingdom — every rarity, type, gear piece, currency, mode, and game system explained in plain English with examples from the current meta.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Cookie Run: Kingdom Glossary — Every CRK Term Defined',
    description: 'Plain-English definitions for every CRK rarity, type, gear piece, currency, mode, and system.',
    url: URL,
    type: 'website',
  },
  robots: { index: true, follow: true },
};

type Group = {
  name: string;
  description: string;
  terms: { id: string; term: string; definition: string }[];
};

const GROUPS: Group[] = [
  {
    name: 'Rarities',
    description: 'How Cookies are tiered. Each rarity has different stats, soulstone availability, and Magic Candy potential.',
    terms: [
      { id: 'beast', term: 'Beast', definition: 'The highest rarity tier in Cookie Run: Kingdom, introduced through the Beast-Yeast continent. Beast Cookies require Beast soulstones (dropped exclusively from Beast Raid) and define the meta they release into. Examples: Silent Salt, Eternal Sugar, Mystic Flour.' },
      { id: 'ancient', term: 'Ancient', definition: 'A pre-Beast top-tier rarity reserved for the five Ancient Cookies (Dark Cacao, Golden Cheese, Hollyberry, Pure Vanilla, White Lily). Many Ancient Cookies have Awakened forms that push them into S+ meta territory.' },
      { id: 'legendary', term: 'Legendary', definition: 'A premium gacha-pull tier just below Ancient and Beast. The meta backbone in 2026 — Dark Enchantress, Timekeeper, Sugar Swan, Millennial Tree. Most top-tier teams run 3-5 Legendaries.' },
      { id: 'dragon', term: 'Dragon', definition: 'A rare collab-style rarity tier. Dragon Cookies release as limited-event banners and are hard to obtain outside their release window. Pitaya Dragon is the canonical example.' },
      { id: 'super-epic', term: 'Super Epic', definition: 'A mid-investment tier between Epic and Legendary. Strong enough to slot into top comps without the crystal cost of a Legendary pull. Venom Dough and Pom-pom Dough are 2026 standouts.' },
      { id: 'epic', term: 'Epic', definition: 'The most F2P-friendly mid-power tier. Acquired through Magic Lab, story drops, and event currency. The best Epics (Pavlova, Seltzer, Menthol, Ash Salt) punch well above their tier.' },
      { id: 'rare', term: 'Rare', definition: 'An early-game tier obtained through basic gacha and story drops. Useful at low levels, generally benched as you climb past Champion in Arena.' },
      { id: 'common', term: 'Common', definition: 'The starter tier. GingerBrave, Strawberry Cookie, Wizard Cookie all live here. Progression staples that get benched at Master+ Arena.' },
      { id: 'special', term: 'Special', definition: 'Event or collab Cookies that fall outside the standard rarity tiers. Marshmallow Bunny and Snapdragon are examples — unique mechanics, niche utility.' },
      { id: 'awakened', term: 'Awakened', definition: 'An upgraded form available for certain Ancient Cookies (and select Legendaries). Awakening requires a long soulstone farm and usually unlocks a meta-defining passive. Awakened Pure Vanilla and Aegis Hollyberry are S+ picks.' },
    ],
  },
  {
    name: 'Cookie Types',
    description: 'Every Cookie has a type that determines battlefield position, role, and which beascuit they use.',
    terms: [
      { id: 'charge', term: 'Charge', definition: 'Front-line tank/disruptor type. Charge Cookies soak the first hits and usually carry a crowd-control skill. Aegis Hollyberry is the meta example.' },
      { id: 'magic', term: 'Magic', definition: 'Middle-line magic-damage DPS type. Magic Cookies sit one row back from the front and threaten the enemy backline. Dark Enchantress and Timekeeper anchor the current meta.' },
      { id: 'ranged', term: 'Ranged', definition: 'Back-line physical-damage type. Ranged Cookies pump sustained damage without taking aggro. Reliable but rarely flashy.' },
      { id: 'ambush', term: 'Ambush', definition: 'Backline-dive assassination type. Ambush Cookies leap forward early to delete an enemy back-row target or apply a critical debuff. Silent Salt is the meta example.' },
      { id: 'defense', term: 'Defense', definition: 'Front-line tank type with high HP and damage-scaling skills. Excellent in long Guild Battle and Cake Tower fights.' },
      { id: 'healing', term: 'Healing', definition: 'Sustain type that keeps the team alive through long fights. Sugar Swan revives 2 allies. Pure Vanilla heals + rallies. Non-negotiable past 30-second encounters.' },
      { id: 'support', term: 'Support', definition: 'Buff/debuff/cooldown-cycling type. Supports rarely land kills but decide whether your damage dealers do their job. Millennial Tree, Seltzer, Menthol are top picks.' },
      { id: 'bomber', term: 'Bomber', definition: 'AoE burst-damage type. Bombers deliver one-shot area damage spikes that wipe waves or reset boss rotations. Venom Dough is the current S+ pick.' },
      { id: 'bts', term: 'BTS', definition: 'Collab-special type tied to the BTS music-themed Cookies. Flavor-forward, rarely meta-defining.' },
    ],
  },
  {
    name: 'Gear System',
    description: 'The three gear layers every Cookie can equip.',
    terms: [
      { id: 'topping', term: 'Topping', definition: 'The primary gear layer. Cookies equip 5 toppings (a "5-piece set"). The most common types are Searing Raspberry (ATK), Swift Chocolate (CD), and Solid Almond (DMG Resist).' },
      { id: 'topping-tart', term: 'Topping Tart', definition: 'A secondary gear piece that adds a bonus stat on top of toppings. Tarts come in the same flavor types as toppings (Raspberry, Chocolate, Almond, etc.).' },
      { id: 'beascuit', term: 'Beascuit', definition: 'Cookie-type-locked gear with Legendary and Tainted tiers. Each Cookie type has a corresponding beascuit type (Charge → Chewy, Magic → Chewy, Ambush → Crispy). Tainted beascuits add a 20% elemental damage bonus.' },
      { id: 'substat', term: 'Substat', definition: 'Secondary stats on Epic toppings. Each Epic topping has 3 substats. Priority for almost every build is Cooldown → DMG Resist → Critical → ATK.' },
      { id: 'attune', term: 'Attune', definition: 'The act of locking in a beascuit\'s 4 symbols to a stat pattern. Always fully attune your beascuits.' },
    ],
  },
  {
    name: 'Currencies & Resources',
    description: 'The in-game currencies and resources that drive progression.',
    terms: [
      { id: 'crystal', term: 'Crystal', definition: 'The primary premium currency. Used for gacha pulls and most major purchases. Earned through events, codes, achievements, and store purchases.' },
      { id: 'rainbow-cube', term: 'Rainbow Cube', definition: 'A secondary premium currency used in the Mileage shop and certain summon options.' },
      { id: 'soulstone', term: 'Soulstone', definition: 'Cookie-specific shards used to unlock duplicate copies of a Cookie. Required for promotion (star level) and Awakening.' },
      { id: 'soulstone-of-fate', term: 'Soulstone of Fate', definition: 'A wild-card soulstone redeemable for any Cookie in the gacha pool, including older Legendaries. Highest-EV reward in event chains.' },
      { id: 'choco-chalk', term: 'Choco Chalk', definition: 'A consumable used to upgrade Magic Candies. Farmed through Magic Lab and event rewards.' },
      { id: 'fateful-cookie-cutter', term: 'Fateful Cookie Cutter', definition: 'A guaranteed-pull token for the Fateful banner. Highest-leverage gacha consumable in the game.' },
      { id: 'butter-amber', term: 'Butter Amber', definition: 'A rare crafting resource for high-tier beascuits. Drops from event chains and limited-time rewards.' },
      { id: 'radiant-beascuit-dough', term: 'Radiant Beascuit Dough', definition: 'High-tier crafting material for Legendary and Tainted beascuits. The gear bottleneck for most mid-game accounts.' },
      { id: 'magic-candy', term: 'Magic Candy', definition: 'A unique upgrade item that adds a passive effect to a specific Cookie. Magic Candy on a built Legendary is one of the highest-EV resource conversions in the game.' },
    ],
  },
  {
    name: 'Game Modes',
    description: 'The major PvE, PvP, and event modes in CRK.',
    terms: [
      { id: 'kingdom-arena', term: 'Kingdom Arena', definition: 'The flagship PvP mode. Players battle defense teams to climb tiers from Bronze through Master+. The meta arena comp is updated monthly in our tier list.' },
      { id: 'arcade-arena', term: 'Arcade Arena', definition: 'A v7.4 PvP mode with 4 rotating seasons that change the rules and meta picks. Current season is "Rewound Glory" through 2026-06-04.' },
      { id: 'guild-battle', term: 'Guild Battle', definition: 'Weekly PvE raid against 4 bosses (Red Velvet Dragon, Avatar of Destiny, Machine-God, Living Abyss). Three attempts per boss; damage feeds your guild\'s leaderboard score.' },
      { id: 'world-exploration', term: 'World Exploration', definition: 'The main PvE story content. Episode-based progression across continents like Earthbread and Beast-Yeast.' },
      { id: 'beast-yeast', term: 'Beast-Yeast', definition: 'The second continent in CRK. Episodic story content where Beast Cookies are unlocked. Beast Raid bosses drop the rarest crafting resources.' },
      { id: 'cake-tower', term: 'Cake Tower', definition: 'Long-form vertical content with reward chests every 5 floors. Two towers: Decadent Choco (55 trays) and Endless Strawberry. See our Cake Tower walkthrough.' },
      { id: 'alliance', term: 'Alliance', definition: 'Cross-guild cooperative content with specific Cookie type requirements per stage.' },
      { id: 'tower-of-star-resonance', term: 'Tower of Star Resonance', definition: 'An endgame tower where all Cookies are forced to Level 100. Tests team-comp design rather than raw investment.' },
      { id: 'bounties', term: 'Bounties', definition: 'Quick stamina-paid rewards loop introduced for daily currency farming.' },
    ],
  },
  {
    name: 'Systems & Mechanics',
    description: 'Other game systems worth knowing.',
    terms: [
      { id: 'cookiechat', term: 'CookieChat', definition: 'The v7.2 in-game messenger UI that turns your Cookie roster into a contact list. Each Cookie has an Affection meter raised through chats and gifts.' },
      { id: 'affection', term: 'Affection', definition: 'A 10-level favorability track per Cookie. Raised by gifting (Favorite gifts give ~3-4x the affection of Neutral ones), chat replies, and co-deployment.' },
      { id: 'six-star-legendary', term: '6-Star Legendary', definition: 'The post-v7.4 growth ceiling for Legendaries. Adds a tier-specific passive on top of the existing kit. The gap between 5-star and 6-star is genuinely large.' },
      { id: 'warmth-of-compassion', term: 'Warmth of Compassion', definition: 'The rally combo between Aegis Hollyberry and Pure Vanilla (Awakened). Still the best frontline pairing in PvE since v6.5.' },
      { id: 'stinging-fizz', term: 'Stinging Fizz', definition: 'The Seltzer + Menthol combo that anchors Guild Battle Machine-God comps. S-tier damage ceiling.' },
      { id: 'magic-lab', term: 'Magic Lab', definition: 'The crafting facility for Magic Candy upgrades and certain consumables.' },
      { id: 'bell-of-glory', term: 'Bell of Glory', definition: 'A currency/exchange shop where Super Epic soulstones can be redeemed.' },
      { id: 'fountain', term: 'Fountain', definition: 'An RNG-draw mechanic for treasures and certain Cookies, using Crystals as the spend.' },
      { id: 'treasure', term: 'Treasure', definition: 'Passive items equipped 3 at a time during battle. The second-most-impactful resource after Cookies themselves. Squishy Jelly Watch is the meta-defining pick.' },
    ],
  },
];

const ALL_TERMS = GROUPS.flatMap(g => g.terms);

export default function CrkGlossaryPage() {
  return (
    <>
      <WebPageSchema
        name="Cookie Run: Kingdom Glossary"
        description="Every CRK term defined — rarities, types, gear, currencies, modes, and systems."
        url={URL}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://gamertagmythras.com/' },
          { name: 'Glossary', url: 'https://gamertagmythras.com/glossary/cookie-run-kingdom' },
          { name: 'Cookie Run: Kingdom', url: URL },
        ]}
      />
      <DefinedTermSetSchema
        name="Cookie Run: Kingdom Glossary"
        description="Definitive glossary of Cookie Run: Kingdom terms — rarities, types, gear, currencies, modes, and game systems."
        url={URL}
        terms={ALL_TERMS}
      />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#060610]" />
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(212, 168, 83, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(255, 255, 255, 0.04) 0%, transparent 50%)' }} />
        <ParticleField />
      </div>
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-10">
            <div className="text-xs text-[#9999aa] mb-3">
              <Link href="/" className="hover:text-[#F0C850]">Home</Link>
              <span className="mx-2 text-[#55556a]">/</span>
              <span className="text-[#D4A853]">CRK Glossary</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Cookie Run: Kingdom Glossary
            </h1>
            <p className="text-lg text-[#c8c8d4] leading-relaxed max-w-2xl">
              Plain-English definitions for every rarity, Cookie type, gear piece, currency, game mode, and system in Cookie Run: Kingdom. Use this as a reference when a guide assumes a term you haven&apos;t seen.
            </p>
          </section>

          <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-10">
            <nav aria-label="Glossary sections" className="rounded-xl border border-[#D4A853]/15 bg-[#0c0c18]/60 p-5">
              <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#D4A853]/70 mb-3">Jump to section</div>
              <ul className="flex flex-wrap gap-2 text-sm">
                {GROUPS.map(g => (
                  <li key={g.name}>
                    <a
                      href={`#section-${g.name.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                      className="inline-block px-3 py-1.5 rounded-md bg-[#060610] border border-[#D4A853]/20 text-[#c8c8d4] hover:text-white hover:border-[#D4A853]/50 transition-colors"
                    >
                      {g.name} <span className="text-[#D4A853]/60">({g.terms.length})</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>

          {GROUPS.map(g => {
            const sectionId = `section-${g.name.toLowerCase().replace(/[^a-z]+/g, '-')}`;
            return (
              <section key={g.name} id={sectionId} className="max-w-4xl mx-auto px-4 sm:px-6 mb-12 scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 pb-2 border-b border-[#D4A853]/15" style={{ fontFamily: 'var(--font-display)' }}>
                  {g.name}
                </h2>
                <p className="text-sm text-[#9999aa] mb-5">{g.description}</p>
                <dl className="space-y-5">
                  {g.terms.map(t => (
                    <div key={t.id} id={t.id} className="scroll-mt-24 rounded-lg border border-[#D4A853]/10 bg-[#0c0c18]/60 p-4 md:p-5">
                      <dt className="flex items-center gap-2 mb-1.5">
                        <h3 className="text-lg font-semibold text-[#F0C850]" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.01em' }}>
                          {t.term}
                        </h3>
                        <a href={`#${t.id}`} className="text-[#D4A853]/40 hover:text-[#D4A853] text-xs" aria-label={`Link to ${t.term}`}>#</a>
                      </dt>
                      <dd className="text-[#c8c8d4] leading-relaxed">{t.definition}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            );
          })}

          <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20 text-sm text-[#9999aa]">
            <p>
              Looking for build-level depth? Browse the <Link href="/gear-guide" className="text-[#D4A853] hover:text-[#F0C850]">Gear Guide</Link> for per-Cookie loadouts, the <Link href="/blog/cookie-run-kingdom" className="text-[#D4A853] hover:text-[#F0C850]">CRK Blog</Link> for tier lists and team comps, or the <Link href="/cake-tower" className="text-[#D4A853] hover:text-[#F0C850]">Cake Tower Guide</Link> for tower strategy.
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
