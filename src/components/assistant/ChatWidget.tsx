'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ask, activeProviderName } from '@/lib/assistant';
import { ASSISTANT_CONFIG } from '@/lib/assistant/config';
import type { ChatMessage as ChatMessageType } from '@/lib/assistant';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import SuggestedPrompts from './SuggestedPrompts';

interface Props {
  /** When `embed` is true, renders inline (used by /assistant page). Otherwise floating widget. */
  embed?: boolean;
}

function genId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function loadHistory(): ChatMessageType[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(ASSISTANT_CONFIG.storageKey);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as ChatMessageType[];
  } catch {
    // ignore
  }
  return [];
}

function saveHistory(history: ChatMessageType[]) {
  if (typeof window === 'undefined') return;
  try {
    const trimmed = history.slice(-ASSISTANT_CONFIG.historyLimit);
    window.localStorage.setItem(ASSISTANT_CONFIG.storageKey, JSON.stringify(trimmed));
  } catch {
    // ignore quota / private-browsing errors
  }
}

export default function ChatWidget({ embed }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Hydrate from localStorage on mount.
  useEffect(() => {
    setMessages(loadHistory());
    setHydrated(true);
  }, []);

  // Persist on change.
  useEffect(() => {
    if (hydrated) saveHistory(messages);
  }, [messages, hydrated]);

  // Auto-scroll to bottom on new message.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, thinking]);

  const handleSubmit = useCallback(async (raw?: string) => {
    const text = (raw ?? input).trim();
    if (!text || thinking) return;
    setError(null);
    setInput('');
    const userMsg: ChatMessageType = {
      id: genId(),
      role: 'user',
      text,
      timestamp: Date.now(),
    };
    const nextHistory = [...messages, userMsg];
    setMessages(nextHistory);
    setThinking(true);
    try {
      const res = await ask({
        message: text,
        history: nextHistory,
        currentPath: pathname,
      });
      const aiMsg: ChatMessageType = {
        id: genId(),
        role: 'assistant',
        text: res.answer,
        recommendedLinks: res.recommendedLinks,
        matchedTopics: res.matchedTopics,
        confidence: res.confidence,
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      setError(msg);
    } finally {
      setThinking(false);
    }
  }, [input, messages, pathname, thinking]);

  const clearChat = () => {
    setMessages([]);
    setError(null);
    try {
      window.localStorage.removeItem(ASSISTANT_CONFIG.storageKey);
    } catch {
      // ignore
    }
  };

  const panelContent = (
    <>
      <header className="flex items-center justify-between p-4 border-b border-[#D4A853]/15">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#D4A853]/15 border border-[#D4A853]/30 flex items-center justify-center" aria-hidden>
            <svg className="w-4 h-4 text-[#D4A853]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-semibold text-white leading-tight">Mythras Assistant</div>
            <div className="text-[10px] text-[#9999aa] tracking-wider uppercase">
              {activeProviderName === 'local' ? 'Site-content powered' : 'AI powered'}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {messages.length > 0 && (
            <button
              onClick={clearChat}
              className="text-xs text-[#9999aa] hover:text-white px-2 py-1 rounded hover:bg-white/5 transition-colors"
              aria-label="Clear chat"
            >
              Clear
            </button>
          )}
          {!embed && (
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-lg text-[#9999aa] hover:text-white hover:bg-white/5 flex items-center justify-center transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </header>

      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0"
        aria-live="polite"
        aria-label="Conversation"
      >
        {messages.length === 0 ? (
          <div className="space-y-5">
            <div className="rounded-xl border border-[#D4A853]/15 bg-[#0c0c18]/60 p-4 text-sm text-[#c8c8d4] leading-relaxed">
              <p>
                Hey! I answer from what&apos;s actually on Mythras — Cookie Run: Kingdom guides, builds, team
                comps, tier lists, codes. I won&apos;t invent patch details or codes that aren&apos;t in our
                content, so if I don&apos;t know I&apos;ll point you at the closest guide.
              </p>
            </div>
            <SuggestedPrompts onPick={p => handleSubmit(p)} />
          </div>
        ) : (
          messages.map(m => <ChatMessage key={m.id} message={m} />)
        )}
        {thinking && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-tl-md px-4 py-3 bg-[#0c0c18]/80 border border-[#D4A853]/15 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A853] animate-pulse" />
              <span className="w-2 h-2 rounded-full bg-[#D4A853] animate-pulse" style={{ animationDelay: '0.15s' }} />
              <span className="w-2 h-2 rounded-full bg-[#D4A853] animate-pulse" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
        )}
        {error && (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
            <strong className="font-semibold">Something went wrong.</strong>
            <div className="text-xs mt-1 opacity-80">{error}</div>
          </div>
        )}
      </div>

      <div className="border-t border-[#D4A853]/15 p-3">
        <ChatInput
          value={input}
          onChange={setInput}
          onSubmit={() => handleSubmit()}
          disabled={thinking}
        />
        <div className="text-[10px] text-[#666] text-center mt-2">
          Tip: ask by Cookie name, mode (Arena, Guild Battle, Cake Tower), or system (toppings, beascuits, codes).
        </div>
      </div>
    </>
  );

  if (embed) {
    return (
      <div className="flex flex-col h-[70vh] min-h-[500px] max-h-[800px] rounded-2xl border border-[#D4A853]/20 bg-[#060610]/95 backdrop-blur-md overflow-hidden shadow-2xl shadow-black/40">
        {panelContent}
      </div>
    );
  }

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open Mythras assistant"
        className={`fixed bottom-5 right-5 z-[110] w-14 h-14 rounded-full bg-[#D4A853] text-[#060610] shadow-lg shadow-black/40 hover:bg-[#F0C850] hover:shadow-xl hover:shadow-[#D4A853]/30 transition-all flex items-center justify-center group ${open ? 'opacity-0 pointer-events-none scale-90' : 'opacity-100'}`}
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#060610]" aria-hidden />
      </button>

      {/* Floating panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed z-[111] flex flex-col bg-[#060610]/95 backdrop-blur-md border border-[#D4A853]/20 shadow-2xl shadow-black/50 inset-x-3 bottom-3 top-16 sm:inset-auto sm:bottom-5 sm:right-5 sm:top-auto sm:w-[400px] sm:h-[640px] sm:max-h-[calc(100vh-2.5rem)] sm:rounded-2xl rounded-2xl overflow-hidden"
            role="dialog"
            aria-modal="false"
            aria-label="Mythras assistant"
          >
            {panelContent}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
