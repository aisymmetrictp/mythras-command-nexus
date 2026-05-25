import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleField from '@/components/ParticleField';
import { BreadcrumbSchema, DefinedTermSetSchema, WebPageSchema } from '@/components/StructuredData';

const URL = 'https://gamertagmythras.com/glossary/magic-the-gathering';

export const metadata: Metadata = {
  title: 'Magic: The Gathering Glossary — Every MTG Term Defined',
  description:
    'Comprehensive Magic: The Gathering glossary — every format, card type, mechanic, deck archetype, and Commander-specific term explained in plain English with current-meta examples.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Magic: The Gathering Glossary — Every MTG Term Defined',
    description: 'Plain-English definitions for every MTG format, mechanic, card type, and deck archetype.',
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
    name: 'Formats',
    description: 'The major Magic: The Gathering competitive and casual formats.',
    terms: [
      { id: 'standard', term: 'Standard', definition: 'The rotating format limited to the most recent ~2 years of sets. Standard rotation pauses in 2026; resumes with the first 2027 set. Currently legal sets include Foundations, Bloomburrow, Duskmourn, Aetherdrift, Tarkir: Dragonstorm, Final Fantasy, Edge of Eternities, Marvel\'s Spider-Man, Avatar: The Last Airbender, Lorwyn Eclipsed, TMNT, and Secrets of Strixhaven.' },
      { id: 'modern', term: 'Modern', definition: 'A non-rotating format using cards from 8th Edition (2003) forward. Faster and more interaction-heavy than Standard. Fetchlands and shocklands define the mana base.' },
      { id: 'pioneer', term: 'Pioneer', definition: 'A non-rotating format using cards from Return to Ravnica (2012) forward. Slots between Standard and Modern in power level.' },
      { id: 'pauper', term: 'Pauper', definition: 'A non-rotating format where only commons are legal (some uncommons banned). Cheap to build, deep meta. Bonder\'s Ornament was unbanned May 18, 2026.' },
      { id: 'commander', term: 'Commander', definition: 'Also called EDH (Elder Dragon Highlander). 100-card singleton multiplayer format built around a legendary creature as your "commander." The largest MTG format by player count.' },
      { id: 'legacy', term: 'Legacy', definition: 'A non-rotating eternal format with a small banned list. Uses cards from Magic\'s entire history including reserved-list staples.' },
      { id: 'vintage', term: 'Vintage', definition: 'The most permissive format. Includes Power Nine and almost every card ever printed; the only major format with a restricted list.' },
      { id: 'limited', term: 'Limited', definition: 'Any format where you build your deck from a limited card pool, such as Draft or Sealed.' },
      { id: 'draft', term: 'Draft', definition: 'A Limited format where 8 players open packs and pass cards around the table, picking one at a time. Booster Draft is the most common variant.' },
      { id: 'sealed', term: 'Sealed', definition: 'A Limited format where each player opens 6 booster packs and builds a 40-card deck from that pool plus basic lands.' },
    ],
  },
  {
    name: 'Card Types',
    description: 'The fundamental card categories every player needs to know.',
    terms: [
      { id: 'creature', term: 'Creature', definition: 'A permanent card that can attack and block. Has power and toughness.' },
      { id: 'artifact', term: 'Artifact', definition: 'A permanent card representing an object, item, or construct. Mostly colorless.' },
      { id: 'enchantment', term: 'Enchantment', definition: 'A permanent card that creates an ongoing effect. Includes Auras (attached to creatures) and Sagas (chapter-based).' },
      { id: 'sorcery', term: 'Sorcery', definition: 'A one-time spell that can only be cast on your turn during your main phase, with the stack empty.' },
      { id: 'instant', term: 'Instant', definition: 'A one-time spell that can be cast at any time, including during opponents\' turns and in response to other spells.' },
      { id: 'land', term: 'Land', definition: 'A permanent that produces mana when tapped. Each player plays one land per turn.' },
      { id: 'planeswalker', term: 'Planeswalker', definition: 'A permanent representing a powerful spellcaster ally. Has loyalty counters and activated abilities that add or remove loyalty.' },
      { id: 'battle', term: 'Battle', definition: 'A permanent type introduced in March of the Machine. Has defense counters and can transform when defeated.' },
    ],
  },
  {
    name: 'Core Mechanics & Keywords',
    description: 'The keyword abilities that show up across most sets.',
    terms: [
      { id: 'flying', term: 'Flying', definition: 'A creature with flying can only be blocked by creatures with flying or reach.' },
      { id: 'trample', term: 'Trample', definition: 'Excess combat damage from a trampling creature goes to the defending player (or planeswalker) when its blocker dies or is overwhelmed.' },
      { id: 'haste', term: 'Haste', definition: 'A creature with haste ignores summoning sickness and can attack the turn it enters.' },
      { id: 'vigilance', term: 'Vigilance', definition: 'A creature with vigilance doesn\'t tap when attacking, so it can still block.' },
      { id: 'deathtouch', term: 'Deathtouch', definition: 'Any amount of damage from a deathtouch creature is enough to destroy a creature it damages.' },
      { id: 'lifelink', term: 'Lifelink', definition: 'Damage dealt by a lifelink permanent also gains its controller that much life.' },
      { id: 'first-strike', term: 'First strike', definition: 'A creature with first strike deals combat damage before creatures without it. Often kills the blocker before taking damage back.' },
      { id: 'double-strike', term: 'Double strike', definition: 'A double-strike creature deals damage in both the first-strike and normal damage steps.' },
      { id: 'hexproof', term: 'Hexproof', definition: 'A hexproof permanent can\'t be targeted by spells or abilities your opponents control. (Doesn\'t block board wipes.)' },
      { id: 'ward', term: 'Ward', definition: 'A semi-protection ability: opponents must pay an additional cost (mana or life) to target the warded permanent.' },
      { id: 'indestructible', term: 'Indestructible', definition: 'An indestructible permanent can\'t be destroyed by damage or destroy effects. Exile and sacrifice still work.' },
      { id: 'flash', term: 'Flash', definition: 'You may cast a spell with flash any time you could cast an instant.' },
      { id: 'menace', term: 'Menace', definition: 'A creature with menace can\'t be blocked except by two or more creatures.' },
    ],
  },
  {
    name: 'Deck Archetypes',
    description: 'The major strategic patterns decks fall into.',
    terms: [
      { id: 'aggro', term: 'Aggro', definition: 'A fast deck that aims to deal 20 damage quickly with small efficient creatures and burn. Mono-Red Aggro was a tier-1 Standard deck pre-May 2026 bans.' },
      { id: 'control', term: 'Control', definition: 'A reactive deck built around counterspells, removal, and card advantage. Wins late with a single threat or inevitability. Jeskai Control is the current Standard archetype.' },
      { id: 'midrange', term: 'Midrange', definition: 'A balanced deck running efficient threats and removal. Beats faster decks by trading; beats slower decks by pressuring before their win condition lands.' },
      { id: 'combo', term: 'Combo', definition: 'A deck built around assembling a specific card combination for an instant or near-instant win. Underworld Breach combos are common in eternal formats.' },
      { id: 'tempo', term: 'Tempo', definition: 'A deck that punches above its weight by trading mana efficiency for board state. Bounces, counters, and protected threats are core tools.' },
      { id: 'ramp', term: 'Ramp', definition: 'A deck strategy that accelerates mana production to cast big threats earlier than your opponents expect. Green is the canonical ramp color.' },
      { id: 'reanimator', term: 'Reanimator', definition: 'A combo-adjacent strategy that fills the graveyard with a huge creature then resurrects it with Reanimate, Animate Dead, or Griselbrand.' },
      { id: 'landfall', term: 'Landfall', definition: 'A keyword and strategy built around triggers that fire whenever a land enters the battlefield. Selesnya Landfall won Pro Tour Strixhaven 2026.' },
    ],
  },
  {
    name: 'Card Effects & Actions',
    description: 'The common verbs for what cards actually do.',
    terms: [
      { id: 'counterspell', term: 'Counterspell', definition: 'A spell that stops another spell from resolving. Counterspell (the card) is the namesake; Force of Will and Mana Drain are the elite versions.' },
      { id: 'removal', term: 'Removal', definition: 'Spells that destroy, exile, or otherwise neutralize opponent\'s permanents. Swords to Plowshares and Lightning Bolt are the canonical examples.' },
      { id: 'board-wipe', term: 'Board wipe', definition: 'A spell that destroys most or all creatures (sometimes other permanents too). Wrath of God, Toxic Deluge, and Farewell are top examples.' },
      { id: 'tutor', term: 'Tutor', definition: 'Any card that searches your library for a specific card. Demonic Tutor is the platonic example; Vampiric Tutor and Imperial Seal are the high-end variants.' },
      { id: 'ramp-effect', term: 'Ramp (effect)', definition: 'Any spell or ability that produces mana faster than one land per turn. Cultivate, Three Visits, and Sol Ring are core Commander ramp.' },
      { id: 'card-draw', term: 'Card draw', definition: 'Any effect that puts cards into your hand. Rhystic Study, Mystic Remora, and Brainstorm are blue staples.' },
      { id: 'wheel', term: 'Wheel', definition: 'An effect that makes each player discard their hand and draw 7 (or similar). Wheel of Fortune is the namesake; modern variants are weaker.' },
      { id: 'burn', term: 'Burn', definition: 'Direct damage to a player or creature. Lightning Bolt is the iconic burn spell.' },
      { id: 'mill', term: 'Mill', definition: 'An effect that puts cards from a library into the graveyard. Can be a win condition (mill the opponent out) or graveyard enabler.' },
      { id: 'reanimation', term: 'Reanimation', definition: 'Returning a creature from a graveyard directly to the battlefield. Reanimate, Animate Dead, and Necromancy are core.' },
      { id: 'bounce', term: 'Bounce', definition: 'Returning a permanent to its owner\'s hand. Cyclonic Rift is the most-played bounce spell.' },
    ],
  },
  {
    name: 'Game & Resource Terms',
    description: 'The vocabulary of gameplay, mana, and card economy.',
    terms: [
      { id: 'mana', term: 'Mana', definition: 'The resource used to cast spells. Comes in five colors (White, Blue, Black, Red, Green) plus colorless and generic.' },
      { id: 'color-identity', term: 'Color identity', definition: 'In Commander, the set of all mana symbols on a card (including activated/triggered ability costs). Determines which cards are legal in a 100-card deck with a given commander.' },
      { id: 'mana-value', term: 'Mana value', definition: 'The total mana cost of a card. Previously called "converted mana cost" (CMC). A card with cost 2WW has mana value 4.' },
      { id: 'mulligan', term: 'Mulligan', definition: 'The choice to shuffle your opening hand and draw a new one. London Mulligan: redraw 7, then put one card on the bottom per mulligan taken.' },
      { id: 'sideboard', term: 'Sideboard', definition: 'A separate 15-card pool used to swap cards in between games of a match. Modern, Pioneer, and Standard tournament play use sideboards.' },
      { id: 'stack', term: 'Stack', definition: 'The game zone where spells and abilities wait to resolve. Last in, first out (LIFO).' },
      { id: 'cantrip', term: 'Cantrip', definition: 'A cheap spell that draws a card as part of its effect. Brainstorm, Ponder, and Opt are canonical.' },
      { id: 'etb', term: 'ETB (Enters the Battlefield)', definition: 'A trigger that fires when a permanent enters the battlefield. Sun Titan, Eternal Witness, and most "comes into play" effects use ETB triggers.' },
      { id: 'token', term: 'Token', definition: 'A creature or other permanent that exists only on the battlefield. Tokens cease to exist when they leave the battlefield.' },
      { id: 'counter', term: 'Counter (+1/+1, -1/-1, charge, etc.)', definition: 'A marker on a permanent that changes its state. +1/+1 counters boost creatures; -1/-1 counters shrink them; loyalty counters track planeswalker abilities.' },
    ],
  },
  {
    name: 'Commander-Specific',
    description: 'Terms unique to or most relevant in the Commander format.',
    terms: [
      { id: 'commander-tax', term: 'Commander tax', definition: 'You pay 2 extra generic mana each time you cast your commander from the command zone after the first.' },
      { id: 'commander-damage', term: 'Commander damage', definition: 'A win condition unique to EDH: take 21 combat damage from a single commander to lose the game.' },
      { id: 'bracket-system', term: 'Bracket System', definition: 'The 1-5 power-level framework adopted by the Commander Format Panel in 2025. Bracket 1 = ultra-casual; Bracket 5 = cEDH.' },
      { id: 'game-changers', term: 'Game Changers', definition: 'The official list of high-power cards that push a Commander deck into higher brackets. Includes cards like Bolas\'s Citadel and Smothering Tithe.' },
      { id: 'cedh', term: 'cEDH (Competitive Commander)', definition: 'The most competitive variant of Commander. Bracket 5. Decks aim to win turns 3-5; popular commanders include Tymna/Thrasios.' },
      { id: 'partner', term: 'Partner', definition: 'An ability that lets two legendary creatures be your commander together, expanding color identity.' },
      { id: 'companion', term: 'Companion', definition: 'A legendary creature kept outside your deck that you can cast once from outside the game, provided your deck meets a specific construction restriction.' },
    ],
  },
  {
    name: 'Card Quality & Treatment',
    description: 'The physical/digital variants you\'ll see on cards.',
    terms: [
      { id: 'foil', term: 'Foil', definition: 'A card with a shiny foil treatment. Premium price tier vs non-foil versions.' },
      { id: 'etched', term: 'Etched foil', definition: 'A specific foiling treatment that produces a textured shimmer. Less prone to curling than traditional foil.' },
      { id: 'showcase', term: 'Showcase frame', definition: 'A special alternate frame treatment that ties into a set\'s aesthetic theme.' },
      { id: 'borderless', term: 'Borderless', definition: 'A frame variant where the art extends to the card\'s edge. Often premium-priced.' },
      { id: 'reserved-list', term: 'Reserved List', definition: 'A list of cards Wizards has promised never to reprint, mostly from early sets. Drives the price of cards like Wheel of Fortune and Imperial Seal.' },
      { id: 'universes-beyond', term: 'Universes Beyond', definition: 'MTG\'s collab product line — sets based on outside IP like Final Fantasy, Marvel\'s Spider-Man, Avatar: The Last Airbender, TMNT, and The Hobbit. Final Fantasy (June 2025) was the first Standard-legal UB set.' },
    ],
  },
];

const ALL_TERMS = GROUPS.flatMap(g => g.terms);

export default function MtgGlossaryPage() {
  return (
    <>
      <WebPageSchema
        name="Magic: The Gathering Glossary"
        description="Every MTG term defined — formats, card types, mechanics, deck archetypes, and Commander-specific terms."
        url={URL}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://gamertagmythras.com/' },
          { name: 'Glossary', url: 'https://gamertagmythras.com/glossary/magic-the-gathering' },
          { name: 'Magic: The Gathering', url: URL },
        ]}
      />
      <DefinedTermSetSchema
        name="Magic: The Gathering Glossary"
        description="Comprehensive glossary of Magic: The Gathering terms — formats, card types, mechanics, archetypes, Commander, and quality treatments."
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
              <span className="text-[#D4A853]">MTG Glossary</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Magic: The Gathering Glossary
            </h1>
            <p className="text-lg text-[#c8c8d4] leading-relaxed max-w-2xl">
              Plain-English definitions for every format, card type, mechanic, deck archetype, Commander-specific term, and card quality treatment in Magic: The Gathering. Reference this when a deck guide assumes a term you don&apos;t recognize.
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
              Looking for deck-level depth? Browse the <Link href="/blog/magic-the-gathering" className="text-[#D4A853] hover:text-[#F0C850]">MTG Blog</Link> for color guides, the current <Link href="/blog/magic-the-gathering/standard-post-ban-meta-may-2026" className="text-[#D4A853] hover:text-[#F0C850]">Standard meta breakdown</Link>, or the <Link href="/blog/magic-the-gathering/secrets-of-strixhaven-best-standard-cards" className="text-[#D4A853] hover:text-[#F0C850]">latest set tier list</Link>.
            </p>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
