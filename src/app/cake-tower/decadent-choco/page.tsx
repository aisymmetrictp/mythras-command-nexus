import type { Metadata } from 'next';
import TowerGuideClient from '@/components/cake-tower/TowerGuideClient';
import { DECADENT_CHOCO } from '@/data/cakeTowerData';

const SITE_URL = 'https://gamertagmythras.com';

export const metadata: Metadata = {
  title: 'Decadent Choco Cake Tower Guide — All 45 Trays F2P Teams & Boss Strategies',
  description:
    'Complete F2P guide to every tray of the CookieRun: Kingdom Decadent Choco Cake Tower. Boss-by-boss breakdowns, recommended teams, treasure picks, and Mythras video walkthroughs for all 45 trays.',
  keywords: [
    'Decadent Choco Cake Tower guide',
    'CRK Choco Tower all trays',
    'CookieRun Kingdom boss guide',
    'F2P Choco Cake Tower',
    'Choco Tower tray guide',
    'CRK Stormbringer guide',
    'Animatronic of Deceit guide',
    'Dark Choco Cookie tower',
    'Shacka Rocka guide',
    'CRK tower boss teams',
  ],
  openGraph: {
    title: 'Decadent Choco Cake Tower — F2P Guide to All 45 Boss Trays',
    description: 'Every boss. Every team. Every tray. Complete F2P walkthrough with video guides.',
    url: `${SITE_URL}/cake-tower/decadent-choco`,
    type: 'article',
    images: [{ url: '/images/mythras-logo-new.png', width: 512, height: 512, alt: 'Mythras Choco Tower Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decadent Choco Cake Tower — All 45 Trays Guide',
    images: ['/images/mythras-logo-new.png'],
  },
  alternates: { canonical: `${SITE_URL}/cake-tower/decadent-choco` },
};

export default function DecadentChocoPage() {
  return (
    <TowerGuideClient
      tower={DECADENT_CHOCO}
      otherTowerSlug="endless-strawberry"
      otherTowerName="Endless Strawberry Tower"
    />
  );
}
