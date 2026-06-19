'use client';

import { useState, FormEvent } from 'react';
import { SHOP_PRODUCTS } from '@/data/shop/shopProducts';

/**
 * Reserve / Request form.
 *
 * Uses Netlify Forms (same mechanism as the site's ContactForm) — submissions
 * are captured by Netlify with no server. The form must be present in the
 * pre-rendered HTML for Netlify to detect it, which it is (rendered by default).
 *
 * Fallback: if the AJAX POST fails, we surface a mailto to gamertagmythras@gmail.com.
 * TODO(backend): if a real CRM/endpoint is added later, POST there instead of '/'.
 */
export default function ReserveForm({ defaultProduct = '' }: { defaultProduct?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => {
        window.location.href =
          'mailto:gamertagmythras@gmail.com?subject=Mythras%20Shop%20Reservation';
      });
  }

  if (submitted) {
    return (
      <div className="text-center py-14 rounded-2xl border border-[#D4A853]/20 bg-[#0a0a1a]/60">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#D4A853]/10 flex items-center justify-center">
          <svg className="w-7 h-7 text-[#D4A853]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Request Received</h3>
        <p className="text-[#9999aa] text-sm">Thanks! We&apos;ll follow up over email or Discord to sort out the details.</p>
      </div>
    );
  }

  const inputCls =
    'w-full bg-[#060610] border border-[#D4A853]/15 rounded-lg px-4 py-3 text-sm text-white placeholder-[#55556a] focus:outline-none focus:border-[#D4A853]/40 transition-colors';
  const labelCls = 'block text-xs font-semibold text-[#D4A853] mb-1.5 tracking-wider uppercase';

  return (
    <form
      name="shop-reserve"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-[#D4A853]/10 bg-[#0a0a1a]/60 p-6 sm:p-8"
    >
      <input type="hidden" name="form-name" value="shop-reserve" />
      <p className="hidden"><label>Don&apos;t fill this out: <input name="bot-field" /></label></p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="r-name" className={labelCls}>Name</label>
          <input id="r-name" name="name" type="text" required className={inputCls} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="r-email" className={labelCls}>Email</label>
          <input id="r-email" name="email" type="email" required className={inputCls} placeholder="your@email.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="r-discord" className={labelCls}>Discord username</label>
          <input id="r-discord" name="discord" type="text" className={inputCls} placeholder="optional" />
        </div>
        <div>
          <label htmlFor="r-product" className={labelCls}>Interested in</label>
          <select id="r-product" name="product" defaultValue={defaultProduct} className={inputCls}>
            <option value="">— Select —</option>
            <option value="Membership">Membership (Wanderer / Champion / Mythic)</option>
            {SHOP_PRODUCTS.map(p => (
              <option key={p.id} value={p.name}>{p.name}</option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="r-message" className={labelCls}>Message</label>
        <textarea id="r-message" name="message" rows={4} className={`${inputCls} resize-none`} placeholder="Anything we should know?" />
      </div>

      <label className="flex items-start gap-3 text-xs text-[#9999aa] leading-relaxed">
        <input type="checkbox" name="consent" required className="mt-0.5 accent-[#D4A853]" />
        <span>I agree to be contacted about my request by email or Discord.</span>
      </label>

      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-gradient-to-r from-[#D4A853] to-[#b8892e] text-[#060610] font-bold text-sm tracking-wider uppercase hover:shadow-lg hover:shadow-[#D4A853]/20 transition-all"
      >
        Send Request
      </button>
      <p className="text-[11px] text-[#55556a] text-center">
        Prefer email? Reach us at{' '}
        <a href="mailto:gamertagmythras@gmail.com" className="text-[#D4A853] hover:text-[#F0C850] underline">gamertagmythras@gmail.com</a>.
      </p>
    </form>
  );
}
