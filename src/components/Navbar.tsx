'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { channels } from '@/data/mockData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-panel shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-[#D4A853]/30 group-hover:border-[#D4A853] transition-colors bg-[#060610]">
              <Image
                src="/images/mythras-logo-new.png"
                alt="Mythras"
                fill
                className="object-cover"
              />
            </div>
            <span
              className="text-xl md:text-2xl font-bold tracking-wider text-gradient"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              MYTHRAS
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink href="/" label="Home" />
            <NavDropdown label="Channels" items={channels.map(c => ({ label: c.name, href: `/channels/${c.slug}`, icon: c.icon }))} />
            <NavLink href="/#content-hub" label="Videos" />
            <NavLink href="/#schedule" label="Schedule" />
            <NavLink href="/#community" label="Community" />
          </div>

          {/* Live Badge + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <LiveBadge />
            <a
              href="https://discord.gg/mFg8mbxtTS"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-5 py-2 rounded-lg font-semibold text-sm bg-[#D4A853] text-[#060610] hover:bg-[#F0C850] transition-all hover:shadow-lg hover:shadow-[#D4A853]/25"
            >
              Join Discord
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-[#D4A853]/10"
          >
            <div className="px-4 py-4 space-y-2">
              <MobileLink href="/" label="Home" onClick={() => setMobileOpen(false)} />
              <div className="pt-2 pb-1 px-3 text-xs font-semibold text-[#D4A853]/60 uppercase tracking-wider">Channels</div>
              {channels.map(c => (
                <MobileLink
                  key={c.slug}
                  href={`/channels/${c.slug}`}
                  label={`${c.icon} ${c.name}`}
                  onClick={() => setMobileOpen(false)}
                />
              ))}
              <div className="border-t border-[#D4A853]/10 pt-2 mt-2" />
              <MobileLink href="/#content-hub" label="Videos" onClick={() => setMobileOpen(false)} />
              <MobileLink href="/#schedule" label="Schedule" onClick={() => setMobileOpen(false)} />
              <MobileLink href="/#community" label="Community" onClick={() => setMobileOpen(false)} />
              <div className="pt-3">
                <LiveBadge />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-lg text-sm font-medium text-[#9999aa] hover:text-white hover:bg-white/5 transition-all"
    >
      {label}
    </Link>
  );
}

function NavDropdown({ label, items }: { label: string; items: { label: string; href: string; icon: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="px-3 py-2 rounded-lg text-sm font-medium text-[#9999aa] hover:text-white hover:bg-white/5 transition-all flex items-center gap-1">
        {label}
        <svg className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 w-56 glass-panel rounded-xl overflow-hidden shadow-2xl shadow-black/40"
          >
            {items.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-sm text-[#9999aa] hover:text-white hover:bg-white/5 transition-all"
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#9999aa] hover:text-white hover:bg-white/5 transition-all"
    >
      {label}
    </Link>
  );
}

function LiveBadge() {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151522] border border-[#D4A853]/10">
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
      </span>
      <span className="text-xs font-semibold text-[#9999aa]">OFFLINE</span>
    </div>
  );
}
