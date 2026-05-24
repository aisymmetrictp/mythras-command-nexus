'use client';

import { useEffect, useRef } from 'react';

interface Props {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
  placeholder?: string;
}

export default function ChatInput({ value, onChange, onSubmit, disabled, placeholder }: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const ta = ref.current;
    if (!ta) return;
    ta.style.height = '0px';
    ta.style.height = `${Math.min(ta.scrollHeight, 140)}px`;
  }, [value]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!disabled && value.trim()) onSubmit();
    }
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!disabled && value.trim()) onSubmit();
      }}
      className="flex items-end gap-2"
    >
      <label htmlFor="mythras-assistant-input" className="sr-only">Ask the Mythras assistant</label>
      <textarea
        id="mythras-assistant-input"
        ref={ref}
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1}
        placeholder={placeholder ?? 'Ask about Cookies, builds, team comps...'}
        disabled={disabled}
        className="flex-1 resize-none rounded-xl bg-[#060610]/80 border border-[#D4A853]/20 px-3.5 py-2.5 text-sm text-white placeholder-[#666] focus:border-[#D4A853]/60 focus:outline-none disabled:opacity-50 max-h-[140px]"
      />
      <button
        type="submit"
        disabled={disabled || !value.trim()}
        aria-label="Send message"
        className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#D4A853] text-[#060610] font-bold hover:bg-[#F0C850] disabled:bg-[#D4A853]/30 disabled:text-[#060610]/40 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>
    </form>
  );
}
