'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeader({ label, title, subtitle, align = 'left' }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`mb-8 md:mb-12 ${align === 'center' ? 'text-center' : ''}`}
    >
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/20 mb-4">
        {label}
      </span>
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[#888898] max-w-2xl text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
