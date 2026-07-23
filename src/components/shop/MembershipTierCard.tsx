import { Check } from 'lucide-react';
import type { MembershipTier } from '@/data/shop/membershipTiers';

export default function MembershipTierCard({ tier }: { tier: MembershipTier }) {
  const isHttp = /^https?:/.test(tier.ctaHref);
  const isStripe = /stripe\.com/.test(tier.ctaHref);
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 md:p-7 transition-all ${
        tier.featured
          ? 'border-[#D4A853]/50 bg-[#D4A853]/[0.05] shadow-lg shadow-[#D4A853]/10'
          : 'border-[#D4A853]/15 bg-[#0c0c18]/60 hover:border-[#D4A853]/30'
      }`}
    >
      {tier.featured && tier.badge ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#D4A853] text-[#060610]">
          {tier.badge}
        </span>
      ) : tier.badge ? (
        <span className="self-start px-2.5 py-1 mb-3 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#D4A853]/10 text-[#D4A853] border border-[#D4A853]/20">
          {tier.badge}
        </span>
      ) : null}

      <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
        {tier.name}
      </h3>
      <div className="mt-2 mb-3">
        <span className="text-3xl font-bold text-[#D4A853]" style={{ fontFamily: 'var(--font-display)' }}>
          {tier.priceLabel}
        </span>
      </div>
      <p className="text-sm text-[#c8c8d4] leading-relaxed mb-5">{tier.description}</p>

      <ul className="space-y-2.5 mb-6 flex-1">
        {tier.benefits.map(b => (
          <li key={b} className="flex items-start gap-2.5 text-sm text-[#c8c8d4]">
            <Check className="w-4 h-4 text-[#D4A853] shrink-0 mt-0.5" aria-hidden />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <a
        href={tier.ctaHref}
        target={isHttp ? '_blank' : undefined}
        rel={isHttp ? 'noopener noreferrer' : undefined}
        className={
          tier.featured
            ? 'inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-bold bg-[#D4A853] text-[#060610] hover:bg-[#F0C850] transition-all'
            : 'inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-bold border border-[#D4A853]/30 text-[#D4A853] hover:bg-[#D4A853]/10 transition-all'
        }
      >
        {tier.ctaLabel}
      </a>
      <p className="text-[11px] text-[#55556a] mt-3 text-center">
        {isStripe ? 'Secure checkout via Stripe. Cancel anytime.' : 'Checkout coming soon — join via Discord for now.'}
      </p>
    </div>
  );
}
