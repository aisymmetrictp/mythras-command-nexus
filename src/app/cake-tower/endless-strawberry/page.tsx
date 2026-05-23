import type { Metadata } from 'next';
import TowerGuideClient from '@/components/cake-tower/TowerGuideClient';
import { ENDLESS_STRAWBERRY } from '@/data/cakeTowerData';

const SITE_URL = 'https://gamertagmythras.com';

export const metadata: Metadata = {
  title: 'Endless Strawberry Cake Tower Guide — All 250 Trays F2P Teams & Boss Strategies',
  description:
    'The definitive F2P guide to the CookieRun: Kingdom Endless Strawberry Cake Tower. All 250 trays covered with wave strategies, boss breakdowns, recommended teams, treasure picks, and Mythras video walkthroughs.',
  keywords: [
    'Endless Strawberry Cake Tower guide',
    'CRK Strawberry Tower all trays',
    'CookieRun Kingdom wave guide',
    'F2P Strawberry Cake Tower',
    'Strawberry Tower tray guide',
    'White Sugar Guardian Golem guide',
    'Living Abyss guide CRK',
    'Spider Queen CRK guide',
    'CRK tower teams 2025 2026',
    'Burning Spice tower guide',
    'CRK tray 200 guide',
  ],
  openGraph: {
    title: 'Endless Strawberry Cake Tower — F2P Guide to All 250 Trays',
    description: 'Every wave. Every boss. Every tray. Complete F2P walkthrough with video guides.',
    url: `${SITE_URL}/cake-tower/endless-strawberry`,
    type: 'article',
    images: [{ url: '/images/mythras-logo-new.png', width: 512, height: 512, alt: 'Mythras Strawberry Tower Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Endless Strawberry Cake Tower — All 250 Trays Guide',
    images: ['/images/mythras-logo-new.png'],
  },
  alternates: { canonical: `${SITE_URL}/cake-tower/endless-strawberry` },
};

export default function EndlessStrawberryPage() {
  return (
    <TowerGuideClient
      tower={ENDLESS_STRAWBERRY}
      otherTowerSlug="decadent-choco"
      otherTowerName="Decadent Choco Tower"
    />
  );
}
