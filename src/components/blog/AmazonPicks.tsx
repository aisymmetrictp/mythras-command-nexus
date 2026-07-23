/**
 * AmazonPicks — richer, per-game affiliate product recommendations shown near the
 * end of a blog post. Reads getAmazonPicks(game) from src/data/shop/amazonPicks.ts.
 *
 * Works TODAY on tagged Amazon search links (no API, no eligibility needed).
 * Any pick given an `asin` auto-upgrades to a real product card (image + price +
 * canonical affiliate link) once the Creators API enrichment script has run.
 *
 * Honest-by-default: an "affiliate" label + disclosure line, rel="sponsored",
 * and clicks auto-fire the GA4 `affiliate_click` event (AnalyticsEvents matches
 * amazon.com). Replaces the single-CTA <AffiliateCallout /> with a small grid.
 */
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import { getAmazonPicks } from '@/data/shop/amazonPicks';

export default function AmazonPicks({ game }: { game: string }) {
  const picks = getAmazonPicks(game);
  if (picks.length === 0) return null;

  return (
    <aside className="my-10 rounded-xl border border-[#D4A853]/20 bg-[#0c0c18]/60 p-5">
      <div className="flex items-baseline justify-between gap-3 mb-4">
        <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#D4A853]/70">
          Recommended <span className="text-[#55556a]">· affiliate</span>
        </div>
        <p className="text-[11px] text-[#55556a]">We may earn a commission — no extra cost to you.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {picks.map((p, i) => (
          <a
            key={`${p.href}-${i}`}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group flex flex-col rounded-lg border border-[#D4A853]/15 bg-[#12121f]/60 overflow-hidden hover:border-[#D4A853]/40 transition-all"
          >
            <div className="relative aspect-[4/3] bg-[#0c0c18] flex items-center justify-center overflow-hidden">
              {p.image ? (
                <Image src={p.image} alt={p.title} fill className="object-contain p-3" sizes="(max-width: 640px) 100vw, 220px" />
              ) : (
                <ShoppingBag className="w-8 h-8 text-[#D4A853]/25" aria-hidden />
              )}
            </div>
            <div className="flex flex-col flex-1 p-3">
              <p className="text-sm font-semibold text-white leading-snug">{p.title}</p>
              {p.sub && <p className="text-xs text-[#9999aa] leading-relaxed mt-1 flex-1">{p.sub}</p>}
              <div className="mt-3 flex items-center justify-between">
                {p.price ? (
                  <span className="text-[#D4A853] font-bold text-sm">{p.price}</span>
                ) : (
                  <span className="text-[11px] text-[#9999aa]">on Amazon</span>
                )}
                <span className="text-[#D4A853] text-sm font-semibold group-hover:translate-x-0.5 transition-transform" aria-hidden>
                  {p.kind === 'product' ? 'View ↗' : 'Shop ↗'}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </aside>
  );
}
