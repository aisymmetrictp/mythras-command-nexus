import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductCard from '@/components/shop/ProductCard';
import ShopDisclosure from '@/components/shop/ShopDisclosure';
import { WebPageSchema, BreadcrumbSchema } from '@/components/StructuredData';
import { SHOP_CATEGORIES, getCategoryBySlug, getProductsByCategory } from '@/data/shop/shopProducts';

export function generateStaticParams() {
  return SHOP_CATEGORIES.map(c => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: 'Shop | Mythras', robots: { index: false, follow: true } };
  return {
    title: `${cat.name} | Mythras Shop`,
    description: cat.blurb,
    alternates: { canonical: `https://gamertagmythras.com/shop/${cat.slug}` },
    openGraph: {
      title: `${cat.name} — Mythras Shop`,
      description: cat.blurb,
      url: `https://gamertagmythras.com/shop/${cat.slug}`,
      type: 'website',
    },
    robots: { index: true, follow: true },
  };
}

export default async function ShopCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const products = getProductsByCategory(cat.key);

  return (
    <>
      <WebPageSchema name={`${cat.name} — Mythras Shop`} description={cat.blurb} url={`https://gamertagmythras.com/shop/${cat.slug}`} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://gamertagmythras.com/' },
          { name: 'Shop', url: 'https://gamertagmythras.com/shop' },
          { name: cat.name, url: `https://gamertagmythras.com/shop/${cat.slug}` },
        ]}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 md:pt-32 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 mb-6">
          <span className="text-[#D4A853] text-sm font-semibold tracking-wider uppercase">Shop</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
          {cat.name}
        </h1>
        <p className="text-lg text-[#c8c8d4] leading-relaxed max-w-2xl mx-auto">{cat.blurb}</p>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 space-y-12">
        {products.length === 0 ? (
          <p className="text-center text-[#9999aa] py-12">Nothing here yet — check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-2">
          {SHOP_CATEGORIES.map(c => (
            <Link
              key={c.slug}
              href={`/shop/${c.slug}`}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                c.slug === cat.slug ? 'bg-[#D4A853] text-[#060610]' : 'border border-[#D4A853]/20 text-[#9999aa] hover:text-white hover:border-[#D4A853]/40'
              }`}
            >
              {c.name}
            </Link>
          ))}
          <Link href="/shop" className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-[#D4A853]/20 text-[#9999aa] hover:text-white hover:border-[#D4A853]/40">
            All →
          </Link>
        </div>

        <ShopDisclosure />
      </div>
    </>
  );
}
