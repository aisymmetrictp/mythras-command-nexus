import type { Metadata } from 'next';
import GearTypeClient from '@/components/gear-guide/GearTypeClient';
import { TOPPING_TYPES } from '@/data/gearData';

export function generateStaticParams() {
  return TOPPING_TYPES.map(t => ({ type: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const topping = TOPPING_TYPES.find(t => t.slug === type);
  if (!topping) return { title: 'Topping Not Found' };

  const title = `${topping.fullName} Topping Guide — CookieRun Kingdom Builds`;
  const description = `${topping.fullName} (${topping.stat}) topping guide for Cookie Run Kingdom. ${topping.description} See all cookies that use this topping with full build recommendations by Mythras.`;

  return {
    title,
    description,
    keywords: [topping.fullName, `${topping.name} topping`, `CRK ${topping.name} topping`, 'CookieRun Kingdom toppings', `${topping.stat} topping`, 'cookie build guide', 'Mythras'],
    openGraph: {
      title,
      description,
      url: `https://gamertagmythras.com/gear-guide/toppings/${type}`,
      images: [{ url: topping.imageUrl, width: 256, height: 256, alt: topping.fullName }],
    },
    alternates: { canonical: `https://gamertagmythras.com/gear-guide/toppings/${type}` },
  };
}

export default async function ToppingTypePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  return <GearTypeClient categorySlug="toppings" typeSlug={type} />;
}
