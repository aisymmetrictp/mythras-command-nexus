import type { Metadata } from 'next';
import GearCategoryClient from '@/components/gear-guide/GearCategoryClient';

export const metadata: Metadata = {
  title: 'CookieRun Kingdom Topping Tarts Guide — All Tart Types & Builds',
  description: 'Complete guide to all CookieRun Kingdom topping tarts: Raspberry, Chocolate, Almond, Apple Jelly, Caramel, Peanut, Walnut, Candy, and more. Find which cookies use each tart by Mythras.',
  keywords: ['CookieRun Kingdom topping tarts', 'CRK tart guide', 'topping tarts', 'Raspberry tart', 'Chocolate tart', 'Almond tart', 'cookie tart builds'],
  openGraph: {
    title: 'CookieRun Kingdom Topping Tarts Guide',
    description: 'Complete guide to all topping tart types with recommended builds for every cookie.',
    url: 'https://gamertagmythras.com/gear-guide/tarts',
  },
  alternates: { canonical: 'https://gamertagmythras.com/gear-guide/tarts' },
};

export default function TartsPage() {
  return <GearCategoryClient categorySlug="tarts" />;
}
