import Link from 'next/link';

export default function ShopDisclosure() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 border-t border-[#D4A853]/10 pt-8 space-y-3 text-center">
      <p className="text-sm text-[#9999aa] leading-relaxed">
        <strong className="text-[#c8c8d4]">Affiliate disclosure:</strong> some links here are affiliate links. If you
        buy through them, the channel may earn a small commission at no extra cost to you. Mythras only links gear,
        cards, and products actually used, reviewed, or relevant to the community.
      </p>
      <p className="text-sm text-[#9999aa] leading-relaxed">
        <strong className="text-[#c8c8d4]">Collectible disclaimer:</strong> the Mythras Cookie card is original fan art
        and an independent collectible. It is not official, not tournament-playable, and not affiliated with or
        endorsed by Devsisters or any game publisher. All game names and trademarks belong to their respective owners.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-[#55556a] pt-2">
        <Link href="/support" className="hover:text-[#D4A853] transition-colors">Support</Link>
        <span className="text-[#333]">·</span>
        <Link href="/terms" className="hover:text-[#D4A853] transition-colors">Terms</Link>
        <span className="text-[#333]">·</span>
        <Link href="/privacy-policy" className="hover:text-[#D4A853] transition-colors">Privacy</Link>
        <span className="text-[#333]">·</span>
        <Link href="/contact" className="hover:text-[#D4A853] transition-colors">Contact</Link>
      </div>
    </section>
  );
}
