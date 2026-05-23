import type { Metadata } from 'next';
import GearTypeClient from '@/components/gear-guide/GearTypeClient';
import { TART_TYPES } from '@/data/gearData';

export function generateStaticParams() {
  return TART_TYPES.map(t => ({ type: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const tart = TART_TYPES.find(t => t.slug === type);
  if (!tart) return { title: 'Tart Not Found' };

  const title = `${tart.fullName} Guide — CookieRun Kingdom Builds`;
  const description = `${tart.fullName} (${tart.stat}) topping tart guide for Cookie Run Kingdom. ${tart.description} See all cookies that use this tart with full build recommendations by Mythras.`;

  return {
    title,
    description,
    keywords: [tart.fullName, `${tart.name} tart`, `CRK ${tart.name} tart`, 'CookieRun Kingdom topping tarts', `${tart.stat} tart`, 'cookie build guide', 'Mythras'],
    openGraph: {
      title,
      description,
      url: `https://gamertagmythras.com/gear-guide/tarts/${type}`,
      images: [{ url: tart.imageUrl, width: 256, height: 256, alt: tart.fullName }],
    },
    alternates: { canonical: `https://gamertagmythras.com/gear-guide/tarts/${type}` },
  };
}

export default async function TartTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  return <GearTypeClient categorySlug="tarts" typeSlug={type} />;
}
