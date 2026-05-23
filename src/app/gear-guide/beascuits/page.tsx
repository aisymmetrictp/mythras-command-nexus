import type { Metadata } from 'next';
import GearCategoryClient from '@/components/gear-guide/GearCategoryClient';

export const metadata: Metadata = {
  title: 'CookieRun Kingdom Beascuits Guide — All Beascuit Types & Builds',
  description: 'Complete guide to all CookieRun Kingdom beascuit types: Hard, Chewy, Crispy, Light, Spicy, Zesty, Hearty, and Sweet. Find which cookies use each beascuit with recommended builds by Mythras.',
  keywords: ['CookieRun Kingdom beascuits', 'CRK beascuit guide', 'Legendary beascuit', 'Tainted beascuit', 'Hard beascuit', 'Chewy beascuit', 'cookie beascuit builds'],
  openGraph: {
    title: 'CookieRun Kingdom Beascuits Guide',
    description: 'Complete guide to all beascuit types with recommended builds for every cookie.',
    url: 'https://gamertagmythras.com/gear-guide/beascuits',
  },
  alternates: { canonical: 'https://gamertagmythras.com/gear-guide/beascuits' },
};

export default function BeascuitsPage() {
  return <GearCategoryClient categorySlug="beascuits" />;
}
