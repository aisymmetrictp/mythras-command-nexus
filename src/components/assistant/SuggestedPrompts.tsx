'use client';

interface Props {
  onPick: (prompt: string) => void;
  /** 'crk' | 'mtg' | 'mixed' — derived from the current page path by the parent. */
  gameContext?: 'crk' | 'mtg' | 'mixed';
}

const CRK_PROMPTS = [
  { label: 'Help me build an Arena team', emoji: '⚔️' },
  { label: 'What toppings should I use?', emoji: '🫐' },
  { label: 'Best beginner Cookies?', emoji: '🌱' },
  { label: 'Show me Guild Battle guides', emoji: '🐉' },
  { label: 'Explain Beascuits', emoji: '🍪' },
  { label: 'What should I read next?', emoji: '📰' },
];

const MTG_PROMPTS = [
  { label: 'Best blue cards in MTG?', emoji: '💧' },
  { label: 'Current Standard meta?', emoji: '🃏' },
  { label: 'Explain the Commander format', emoji: '👑' },
  { label: 'Show me the Pro Tour deck', emoji: '🏆' },
  { label: 'Best Strixhaven cards?', emoji: '✨' },
  { label: 'What should I read next?', emoji: '📰' },
];

const MIXED_PROMPTS = [
  { label: 'Best beginner Cookies?', emoji: '🌱' },
  { label: 'Current MTG Standard meta?', emoji: '🃏' },
  { label: 'What toppings should I use?', emoji: '🫐' },
  { label: 'Best blue cards in MTG?', emoji: '💧' },
  { label: 'Explain Beascuits', emoji: '🍪' },
  { label: 'What should I read next?', emoji: '📰' },
];

export default function SuggestedPrompts({ onPick, gameContext = 'mixed' }: Props) {
  const prompts =
    gameContext === 'mtg' ? MTG_PROMPTS :
    gameContext === 'crk' ? CRK_PROMPTS :
    MIXED_PROMPTS;
  const label =
    gameContext === 'mtg' ? 'Try asking · MTG' :
    gameContext === 'crk' ? 'Try asking · CRK' :
    'Try asking';

  return (
    <div>
      <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#D4A853]/70 mb-3">
        {label}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {prompts.map(p => (
          <button
            key={p.label}
            onClick={() => onPick(p.label)}
            className="flex items-center gap-2.5 text-left rounded-lg border border-[#D4A853]/15 bg-[#0c0c18]/60 px-3 py-2.5 text-sm text-[#c8c8d4] hover:border-[#D4A853]/40 hover:bg-[#0c0c18] hover:text-white transition-all"
          >
            <span className="text-base" aria-hidden>{p.emoji}</span>
            <span className="leading-snug">{p.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
