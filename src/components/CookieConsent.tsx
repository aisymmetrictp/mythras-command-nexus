'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'mythras-cookie-consent-v1';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 600);
        return () => clearTimeout(t);
      }
    } catch {
      // localStorage blocked — show anyway, don't persist
      setVisible(true);
    }
  }, []);

  const acknowledge = (choice: 'accepted' | 'dismissed') => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie notice"
      className="fixed bottom-3 left-3 right-3 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-[100] rounded-2xl border border-[#D4A853]/30 bg-[#0c0c18]/95 backdrop-blur-md shadow-2xl shadow-black/40 p-4 md:p-5"
    >
      <div className="flex items-start gap-3">
        <div className="text-xl mt-0.5" aria-hidden>🍪</div>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-[#c8c8d4] leading-relaxed mb-3">
            We use cookies for analytics and to serve ads through Google AdSense.
            Read our{' '}
            <Link href="/privacy-policy" className="text-[#D4A853] underline decoration-[#D4A853]/40 hover:text-[#F0C850]">
              Privacy Policy
            </Link>{' '}
            for details and opt-out options.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => acknowledge('accepted')}
              className="px-4 py-2 rounded-lg bg-[#D4A853] text-[#060610] text-sm font-semibold hover:bg-[#F0C850] transition-colors"
            >
              OK, got it
            </button>
            <button
              onClick={() => acknowledge('dismissed')}
              className="px-3 py-2 rounded-lg text-sm text-[#9999aa] hover:text-white hover:bg-white/5 transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
