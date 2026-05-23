import type { Metadata } from 'next';
import GearCategoryClient from '@/components/gear-guide/GearCategoryClient';

export const metadata: Metadata = {
  title: 'CookieRun Kingdom Toppings Guide — All Topping Types & Best Builds',
  description: 'Complete guide to all CookieRun Kingdom toppings: Searing Raspberry, Swift Chocolate, Solid Almond, and more. Find which cookies use each topping type with recommended builds by Mythras.',
  keywords: ['CookieRun Kingdom toppings', 'CRK topping guide', 'best toppings', 'Searing Raspberry', 'Swift Chocolate', 'Solid Almond', 'Juicy Apple Jelly', 'Bouncy Caramel', 'cookie toppings'],
  openGraph: {
    title: 'CookieRun Kingdom Toppings Guide',
    description: 'Complete guide to all topping types with recommended builds for every cookie.',
    url: 'https://gamertagmythras.com/gear-guide/toppings',
  },
  alternates: { canonical: 'https://gamertagmythras.com/gear-guide/toppings' },
};

export default function ToppingsPage() {
  return <GearCategoryClient categorySlug="toppings" />;
}
