import type { Metadata } from 'next';
import CookieGearGuideClient from '@/components/gear-guide/CookieGearGuideClient';
import { ALL_COOKIES } from '@/data/cookieData';

export function generateStaticParams() {
  return ALL_COOKIES.map(cookie => ({
    slug: cookie.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cookie = ALL_COOKIES.find(c => c.slug === slug);
  if (!cookie) return { title: 'Cookie Not Found' };

  const title = `${cookie.name} Gear Guide — Best Toppings & Build`;
  const description = cookie.build
    ? `Best ${cookie.name} build: ${cookie.build.toppings} toppings, ${cookie.build.beascuit} beascuit, ${cookie.build.tart} tart. ${cookie.rarity} ${cookie.type} cookie gear guide by Mythras.`
    : `${cookie.name} gear guide — ${cookie.rarity} ${cookie.type} cookie. Toppings, beascuits, and build recommendations by Mythras.`;

  return {
    title,
    description,
    keywords: [cookie.name, `${cookie.name} toppings`, `${cookie.name} build`, `${cookie.name} gear guide`, 'Cookie Run Kingdom', `CRK ${cookie.name}`, `${cookie.type} cookie build`, 'Mythras'],
    openGraph: {
      title,
      description,
      url: `https://gamertagmythras.com/gear-guide/${slug}`,
      ...(cookie.imageUrl && {
        images: [{ url: cookie.imageUrl, width: 256, height: 256, alt: cookie.name }],
      }),
    },
    twitter: {
      title: `${cookie.name} Build Guide — CookieRun Kingdom`,
      description,
    },
    alternates: {
      canonical: `https://gamertagmythras.com/gear-guide/${slug}`,
    },
  };
}

export default async function CookieGearGuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CookieGearGuideClient slug={slug} />;
}
