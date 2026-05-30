import type { BlogPost } from '../blogTypes';
import { pubgBeginnersGuide } from './posts/pubg-beginners-guide';
import { bestPubgWeaponsTierList } from './posts/best-pubg-weapons-tier-list';
import { bestPubgLoadouts } from './posts/best-pubg-loadouts';
import { bestPubgLandingSpots } from './posts/best-pubg-landing-spots';
import { pubgSettingsSensitivityGuide } from './posts/pubg-settings-sensitivity-guide';
import { pubgRecoilControlGuide } from './posts/pubg-recoil-control-guide';
import { bestPubgMapsRanked } from './posts/best-pubg-maps-ranked';

export const PUBG_POSTS: BlogPost[] = [
  pubgBeginnersGuide,
  bestPubgWeaponsTierList,
  bestPubgLoadouts,
  bestPubgLandingSpots,
  pubgSettingsSensitivityGuide,
  pubgRecoilControlGuide,
  bestPubgMapsRanked,
];
