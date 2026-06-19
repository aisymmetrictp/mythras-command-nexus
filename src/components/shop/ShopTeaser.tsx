'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, Crown } from 'lucide-react';

export default function ShopTeaser() {
  return (
    <section className="relative py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-[#D4A853]/20 bg-gradient-to-br from-[#0c0c18] to-[#10101e] p-8 md:p-12 text-center"
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(212,168,83,0.18) 0%, transparent 60%)' }}
          />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/20 mb-6">
              <ShoppingBag className="w-4 h-4 text-[#D4A853]" aria-hidden />
              <span className="text-[#D4A853] text-xs font-semibold tracking-wider uppercase">The Armory</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Enter the Mythras Armory
            </h2>
            <p className="text-base md:text-lg text-[#c8c8d4] leading-relaxed max-w-2xl mx-auto mb-8">
              Memberships, collector drops, creator merch, deck-tech gear, and community support — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm bg-[#D4A853] text-[#060610] hover:bg-[#F0C850] transition-all"
              >
                <ShoppingBag className="w-4 h-4" aria-hidden /> Explore the Shop
              </Link>
              <Link
                href="/shop/memberships"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm border border-[#D4A853]/30 text-[#D4A853] hover:bg-[#D4A853]/10 transition-all"
              >
                <Crown className="w-4 h-4" aria-hidden /> Join the Multiverse
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
