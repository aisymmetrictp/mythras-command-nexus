'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Local Hero overlay — vortex lives at page level */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#060610]/30 to-[#060610]/80" />
        {/* Scan line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4A853]/15 to-transparent animate-float"
            style={{ top: '30%' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32 md:py-40">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mb-8"
          >
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 animate-border-loop bg-[#060610]">
              <Image
                src="/images/mythras-logo-new.png"
                alt="Mythras"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-[#D4A853]/10 blur-xl animate-pulse-glow" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="text-gradient">MYTHRAS</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl tracking-[0.3em] uppercase text-white/60 font-light mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            THE MULTIVERSE
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg text-[#55556a] max-w-md mb-10"
          >
            Streams. Strategy. Community. One Universe.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10"
          >
            <CTAButton
              href="https://www.youtube.com/channel/UCGp83Usm4riRWlAYa9F2diQ"
              label="YouTube"
              icon={<YoutubeIcon />}
              color="bg-red-600 hover:bg-red-700"
              glowColor="shadow-red-600/25"
            />
            <CTAButton
              href="https://www.twitch.tv/3mythras3"
              label="Twitch"
              icon={<TwitchIcon />}
              color="bg-[#9146ff] hover:bg-[#7c2ff0]"
              glowColor="shadow-[#9146ff]/25"
            />
            <CTAButton
              href="https://discord.gg/mFg8mbxtTS"
              label="Discord"
              icon={<DiscordIcon />}
              color="bg-[#5865F2] hover:bg-[#4752C4]"
              glowColor="shadow-[#5865F2]/25"
            />
          </motion.div>

          {/* Live Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9999aa] opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9999aa]" />
            </span>
            <span className="text-xs font-semibold tracking-wider text-[#9999aa] uppercase">
              Offline — Next Stream Incoming
            </span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border-2 border-[#D4A853]/30 flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-[#D4A853]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#D4A853]/5 via-white/[0.02] to-[#D4A853]/5 border-t border-b border-[#D4A853]/10 py-2 overflow-hidden">
        <div className="animate-marquee flex gap-8 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-8 text-xs font-medium tracking-wider text-[#D4A853]/40">
              <span>🍪 COOKIERUN MYTHRAS</span>
              <span>•</span>
              <span>⚔️ GAMERTAG MYTHRAS</span>
              <span>•</span>
              <span>🎮 MYTHRAS GAMING</span>
              <span>•</span>
              <span>⚡ POKEMON MYTHRAS</span>
              <span>•</span>
              <span>✨ LORCANA MYTHRAS</span>
              <span>•</span>
              <span>🔴 YOUTUBE</span>
              <span>•</span>
              <span>💜 TWITCH</span>
              <span>•</span>
              <span>🎯 DISCORD</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAButton({
  href,
  label,
  icon,
  color,
  glowColor,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold text-sm text-white ${color} transition-all hover:shadow-lg ${glowColor}`}
    >
      {icon}
      {label}
    </motion.a>
  );
}

function YoutubeIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TwitchIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
    </svg>
  );
}
