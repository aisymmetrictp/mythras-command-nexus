import type { Metadata } from 'next';
import GearTypeClient from '@/components/gear-guide/GearTypeClient';
import { BEASCUIT_TYPES } from '@/data/gearData';

export function generateStaticParams() {
  return BEASCUIT_TYPES.map(t => ({ type: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const beascuit = BEASCUIT_TYPES.find(t => t.slug === type);
  if (!beascuit) return { title: 'Beascuit Not Found' };

  const title = `${beascuit.fullName} Guide — CookieRun Kingdom Builds`;
  const description = `${beascuit.fullName} (${beascuit.stat}) beascuit guide for Cookie Run Kingdom. ${beascuit.description} See all cookies that use this beascuit with full build recommendations by Mythras.`;

  return {
    title,
    description,
    keywords: [beascuit.fullName, `${beascuit.name} beascuit`, `CRK ${beascuit.name} beascuit`, 'CookieRun Kingdom beascuits', `${beascuit.stat} type cookie`, 'cookie build guide', 'Mythras'],
    openGraph: {
      title,
      description,
      url: `https://gamertagmythras.com/gear-guide/beascuits/${type}`,
      images: [{ url: beascuit.imageUrl, width: 256, height: 256, alt: beascuit.fullName }],
    },
    alternates: { canonical: `https://gamertagmythras.com/gear-guide/beascuits/${type}` },
  };
}

export default async function BeascuitTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  return <GearTypeClient categorySlug="beascuits" typeSlug={type} />;
}
