import type { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/StructuredData';

const SITE_URL = 'https://gamertagmythras.com';

export const metadata: Metadata = {
  title: {
    default: 'Sublime Cake Tower Guide — CookieRun Kingdom Best Teams & Strategies',
    template: '%s | CRK Cake Tower Guide — Mythras',
  },
  description:
    'The ultimate F2P guide to the CookieRun: Kingdom Sublime Cake Tower. Covers every tray of the Decadent Choco Cake Tower and Endless Strawberry Cake Tower with video walkthroughs, recommended teams, treasure picks, and boss strategies.',
  keywords: [
    'CookieRun Kingdom Sublime Cake Tower guide',
    'Decadent Choco Cake Tower',
    'Endless Strawberry Cake Tower',
    'CRK cake tower teams',
    'CRK cake tower tray guide',
    'F2P cake tower guide',
    'Tower of Sweet Chaos replacement',
    'CRK boss guide',
    'Cookie Run Kingdom tower guide',
    'best cookies cake tower',
    'CRK tray guide 2025 2026',
  ],
  openGraph: {
    title: 'Sublime Cake Tower Guide — CookieRun Kingdom',
    description: 'Complete F2P guide covering every tray of both towers with video walkthroughs and team recommendations.',
    url: `${SITE_URL}/cake-tower`,
    type: 'website',
    images: [{ url: '/images/mythras-logo-new.png', width: 512, height: 512, alt: 'Mythras Cake Tower Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sublime Cake Tower Guide — CookieRun Kingdom',
    description: 'Complete F2P guide covering every tray with video walkthroughs.',
    images: ['/images/mythras-logo-new.png'],
  },
  alternates: { canonical: `${SITE_URL}/cake-tower` },
};

export default function CakeTowerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Knowledge Hub', url: `${SITE_URL}/cake-tower` },
          { name: 'CookieRun: Kingdom', url: `${SITE_URL}/cake-tower` },
          { name: 'Sublime Cake Tower Guide', url: `${SITE_URL}/cake-tower` },
        ]}
      />
      {children}
    </>
  );
}
