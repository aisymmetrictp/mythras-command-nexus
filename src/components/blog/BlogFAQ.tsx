'use client';

import { useState } from 'react';
import type { BlogFaq } from '@/data/blog/blogTypes';

type Props = { faqs: BlogFaq[] };

export default function BlogFAQ({ faqs }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  if (faqs.length === 0) return null;

  return (
    <section className="my-12" id="faq">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-2 border-b border-[#D4A853]/15" style={{ fontFamily: 'var(--font-display)' }}>
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="rounded-xl border border-[#D4A853]/15 bg-[#0c0c18]/60 overflow-hidden"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between text-left p-4 md:p-5 hover:bg-[#D4A853]/[0.03] transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-base md:text-lg font-semibold text-white pr-4">{faq.question}</span>
                <span className={`text-[#D4A853] text-xl transition-transform ${isOpen ? 'rotate-45' : ''}`} aria-hidden>
                  +
                </span>
              </button>
              {isOpen && (
                <div className="px-4 md:px-5 pb-5 text-[#c8c8d4] leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
