import Image from 'next/image';
import { Sparkles, Shirt, Layers, Swords, Gamepad2, Download, Heart } from 'lucide-react';
import { SHOP_CATEGORIES, type Product, type ProductCategory, type ProductStatus } from '@/data/shop/shopProducts';

const CATEGORY_ICON: Record<ProductCategory, typeof Sparkles> = {
  'collector-cards': Sparkles,
  merch: Shirt,
  'tcg-gear': Layers,
  cards: Swords,
  'gaming-gear': Gamepad2,
  digital: Download,
  support: Heart,
};

const STATUS_BADGE: Record<ProductStatus, string> = {
  available: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
  affiliate: 'bg-sky-500/15 text-sky-300 border-sky-400/30',
  external: 'bg-violet-500/15 text-violet-300 border-violet-400/30',
  'coming-soon': 'bg-white/5 text-[#9999aa] border-white/10',
};

function categoryName(key: ProductCategory): string {
  return SHOP_CATEGORIES.find(c => c.key === key)?.name ?? key;
}

export default function ProductCard({ product }: { product: Product }) {
  const Icon = CATEGORY_ICON[product.category];
  const isHttp = /^https?:/.test(product.ctaHref);
  const isAffiliate = product.status === 'affiliate';
  const ctaIsPrimary = product.status === 'available';

  return (
    <div className="group flex flex-col rounded-xl border border-[#D4A853]/15 bg-[#0c0c18]/60 overflow-hidden hover:border-[#D4A853]/40 transition-all">
      <div className="relative aspect-[4/3] bg-[#12121f] flex items-center justify-center overflow-hidden">
        {product.image ? (
          <Image src={product.image} alt={product.name} fill className="object-contain p-3" sizes="(max-width: 640px) 100vw, 320px" />
        ) : (
          <Icon className="w-10 h-10 text-[#D4A853]/30" aria-hidden />
        )}
        {product.badge && (
          <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${STATUS_BADGE[product.status]}`}>
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4">
        <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#9999aa]/70 mb-1.5">
          <Icon className="w-3 h-3" aria-hidden /> {categoryName(product.category)}
        </span>
        <h3 className="font-semibold text-white leading-snug">{product.name}</h3>
        <div className="text-[#D4A853] font-bold text-sm mt-1">{product.priceLabel}</div>
        <p className="text-xs text-[#9999aa] leading-relaxed mt-2 flex-1">{product.description}</p>
        {product.disclaimer && <p className="text-[10px] text-[#55556a] leading-snug mt-2">{product.disclaimer}</p>}

        <a
          href={product.ctaHref}
          target={isHttp ? '_blank' : undefined}
          rel={isHttp ? (isAffiliate ? 'noopener noreferrer sponsored' : 'noopener noreferrer') : undefined}
          className={
            ctaIsPrimary
              ? 'mt-4 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#D4A853] text-[#060610] hover:bg-[#F0C850] transition-all'
              : 'mt-4 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold border border-[#D4A853]/30 text-[#D4A853] hover:bg-[#D4A853]/10 transition-all'
          }
        >
          {product.ctaLabel}
          {isHttp && <span aria-hidden>↗</span>}
        </a>
      </div>
    </div>
  );
}
