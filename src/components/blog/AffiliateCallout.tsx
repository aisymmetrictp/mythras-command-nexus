/**
 * Contextual, clearly-disclosed affiliate CTA shown near the end of a blog post,
 * chosen by the post's game so it matches buying intent (TCG games → cards, the
 * rest → gaming gear). rel="sponsored" + an "affiliate" label keep it honest; the
 * amzn.to/tcgplayer links auto-fire the GA4 `affiliate_click` event (AnalyticsEvents).
 * Edit OFFERS to retarget. Returns null for any game without a mapped offer.
 */
type Offer = { label: string; sub: string; href: string };

const OFFERS: Record<string, Offer> = {
  'magic-the-gathering': { label: 'Shop Magic: The Gathering', sub: 'Singles, sealed & accessories on Amazon', href: 'https://amzn.to/49FZPkr' },
  'cookie-run-braverse-tcg': { label: 'Shop Cookie Run: Braverse', sub: 'Booster boxes, decks & singles on Amazon', href: 'https://amzn.to/46ytRqz' },
  'cookie-run-kingdom': { label: 'Gaming gear we actually use', sub: 'Our hand-picked setup on Amazon', href: 'https://amzn.to/463bCrF' },
  'roblox': { label: 'Gaming gear we actually use', sub: 'Our hand-picked setup on Amazon', href: 'https://amzn.to/463bCrF' },
  'fortnite': { label: 'Gaming gear we actually use', sub: 'Peripherals & stream gear on Amazon', href: 'https://amzn.to/463bCrF' },
  'pubg-battlegrounds': { label: 'Gaming gear we actually use', sub: 'Peripherals & stream gear on Amazon', href: 'https://amzn.to/463bCrF' },
  'minecraft': { label: 'Gaming gear we actually use', sub: 'Our hand-picked setup on Amazon', href: 'https://amzn.to/463bCrF' },
};

export default function AffiliateCallout({ game }: { game: string }) {
  const offer = OFFERS[game];
  if (!offer) return null;
  return (
    <aside className="my-10 rounded-xl border border-[#D4A853]/20 bg-[#0c0c18]/60 p-5 flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex-1">
        <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#D4A853]/70 mb-1">
          Recommended <span className="text-[#55556a]">· affiliate</span>
        </div>
        <p className="text-white font-semibold">{offer.label}</p>
        <p className="text-xs text-[#9999aa] mt-0.5">{offer.sub} — we may earn a small commission at no extra cost to you.</p>
      </div>
      <a
        href={offer.href}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="shrink-0 inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg font-semibold text-sm bg-[#D4A853] text-[#060610] hover:bg-[#F0C850] transition-all"
      >
        Shop now ↗
      </a>
    </aside>
  );
}
