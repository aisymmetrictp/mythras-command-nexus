'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';
import { SHOP_PRODUCTS, SHOP_CATEGORIES, type Product } from '@/data/shop/shopProducts';

type Tab = { label: string; cat?: string; anchor?: string };

const TABS: Tab[] = [
  { label: 'All', cat: 'all' },
  { label: 'Memberships', anchor: '#memberships' },
  ...SHOP_CATEGORIES.map(c => ({ label: c.name, cat: c.key })),
];

export default function ProductGrid({ products = SHOP_PRODUCTS }: { products?: Product[] }) {
  const [filter, setFilter] = useState('all');

  const visible = (filter === 'all' ? products : products.filter(p => p.category === filter))
    .slice()
    .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

  function onTab(t: Tab) {
    if (t.anchor) {
      document.querySelector(t.anchor)?.scrollIntoView({ behavior: 'smooth' });
    } else if (t.cat) {
      setFilter(t.cat);
    }
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {TABS.map(t => {
          const active = !t.anchor && t.cat === filter;
          return (
            <button
              key={t.label}
              onClick={() => onTab(t)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                active
                  ? 'bg-[#D4A853] text-[#060610]'
                  : 'border border-[#D4A853]/20 text-[#9999aa] hover:text-white hover:border-[#D4A853]/40'
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="text-center text-[#9999aa] py-12">Nothing here yet — check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
