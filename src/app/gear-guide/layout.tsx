import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: {
    default: 'Cookie Run Kingdom Gear Guide — Best Builds, Toppings & Beascuits',
    template: '%s | CRK Gear Guide — Mythras',
  },
  description: 'The ultimate CookieRun Kingdom gear guide by Mythras. Find the best toppings, beascuits, topping tarts, sub-stats, and meta builds for every cookie. 167+ cookies covered with video guides.',
  keywords: ['Cookie Run Kingdom', 'CRK gear guide', 'CookieRun toppings', 'best toppings', 'beascuit guide', 'topping tarts', 'cookie build guide', 'CRK meta', 'Mythras gear guide', 'Cookie Run Kingdom builds'],
  openGraph: {
    title: 'Cookie Run Kingdom Gear Guide — Best Builds, Toppings & Beascuits',
    description: 'Find the best toppings, beascuits, and topping tarts for every cookie. 167+ cookies covered with video guides by Mythras.',
    url: 'https://gamertagmythras.com/gear-guide',
  },
  twitter: {
    title: 'CookieRun Kingdom Gear Guide by Mythras',
    description: 'Best toppings, beascuits, and builds for 167+ cookies.',
  },
};

export default function GearGuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://gamertagmythras.com' },
        { name: 'Knowledge Hub' },
        { name: 'CookieRun: Kingdom' },
        { name: 'Gear Guide Loadouts', url: 'https://gamertagmythras.com/gear-guide' },
      ]} />
      {children}
    </>
  );
}
