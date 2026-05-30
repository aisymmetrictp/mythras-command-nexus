import type { BlogPost } from '../blogTypes';
import { pubgBeginnersGuide } from './posts/pubg-beginners-guide';
import { bestPubgWeaponsTierList } from './posts/best-pubg-weapons-tier-list';
import { bestPubgLoadouts } from './posts/best-pubg-loadouts';
import { bestPubgLandingSpots } from './posts/best-pubg-landing-spots';
import { pubgSettingsSensitivityGuide } from './posts/pubg-settings-sensitivity-guide';

export const PUBG_POSTS: BlogPost[] = [
  pubgBeginnersGuide,
  bestPubgWeaponsTierList,
  bestPubgLoadouts,
  bestPubgLandingSpots,
  pubgSettingsSensitivityGuide,
];
