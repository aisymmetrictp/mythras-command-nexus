'use client';

export type PromptGameContext = 'crk' | 'mtg' | 'roblox' | 'pubg' | 'fortnite' | 'minecraft' | 'mixed';

interface Props {
  onPick: (prompt: string) => void;
  /** Derived from the current page path by the parent. */
  gameContext?: PromptGameContext;
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

const ROBLOX_PROMPTS = [
  { label: 'Best Roblox games right now?', emoji: '🎮' },
  { label: 'How do I get Robux safely?', emoji: '💰' },
  { label: 'How do I start in Roblox Studio?', emoji: '🛠️' },
  { label: 'Beginner guide to Roblox?', emoji: '🌱' },
  { label: 'Best games to play with friends?', emoji: '👥' },
  { label: 'What should I read next?', emoji: '📰' },
];

const PUBG_PROMPTS = [
  { label: 'Best weapons in PUBG?', emoji: '🏆' },
  { label: 'Best loadout and attachments?', emoji: '🎯' },
  { label: 'Where should I land?', emoji: '🪂' },
  { label: 'Beginner survival tips?', emoji: '🌱' },
  { label: 'Best settings and sensitivity?', emoji: '🎚️' },
  { label: 'What should I read next?', emoji: '📰' },
];

const FORTNITE_PROMPTS = [
  { label: 'Fortnite building basics?', emoji: '🧱' },
  { label: 'Best landing spots?', emoji: '🚌' },
  { label: 'Weapon tier list?', emoji: '🏆' },
  { label: 'Best settings for Fortnite?', emoji: '🎚️' },
  { label: 'Beginner guide to Fortnite?', emoji: '🌱' },
  { label: 'What should I read next?', emoji: '📰' },
];

const MINECRAFT_PROMPTS = [
  { label: 'Best enchantments, ranked?', emoji: '✨' },
  { label: 'Redstone basics?', emoji: '🔴' },
  { label: 'Best Minecraft seeds?', emoji: '🌍' },
  { label: 'Survival guide for beginners?', emoji: '🌱' },
  { label: 'Top building tips?', emoji: '🏠' },
  { label: 'What should I read next?', emoji: '📰' },
];

const MIXED_PROMPTS = [
  { label: 'Best beginner Cookies?', emoji: '🌱' },
  { label: 'Current MTG Standard meta?', emoji: '🃏' },
  { label: 'Best Minecraft enchantments?', emoji: '✨' },
  { label: 'Fortnite building basics?', emoji: '🧱' },
  { label: 'Best Roblox games right now?', emoji: '🎮' },
  { label: 'What should I read next?', emoji: '📰' },
];

const PROMPTS: Record<PromptGameContext, { label: string; emoji: string }[]> = {
  crk: CRK_PROMPTS, mtg: MTG_PROMPTS, roblox: ROBLOX_PROMPTS,
  pubg: PUBG_PROMPTS, fortnite: FORTNITE_PROMPTS, minecraft: MINECRAFT_PROMPTS, mixed: MIXED_PROMPTS,
};
const LABELS: Record<PromptGameContext, string> = {
  crk: 'Try asking · CRK', mtg: 'Try asking · MTG', roblox: 'Try asking · Roblox',
  pubg: 'Try asking · PUBG', fortnite: 'Try asking · Fortnite', minecraft: 'Try asking · Minecraft', mixed: 'Try asking',
};

export default function SuggestedPrompts({ onPick, gameContext = 'mixed' }: Props) {
  const prompts = PROMPTS[gameContext] ?? MIXED_PROMPTS;
  const label = LABELS[gameContext] ?? 'Try asking';

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
