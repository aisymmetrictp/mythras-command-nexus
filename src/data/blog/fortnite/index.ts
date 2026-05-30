import type { BlogPost } from '../blogTypes';
import { fortniteBeginnersGuide } from './posts/fortnite-beginners-guide';
import { fortniteBuildingBasics } from './posts/fortnite-building-basics';
import { bestFortniteLandingSpots } from './posts/best-fortnite-landing-spots';
import { bestFortniteSettings } from './posts/best-fortnite-settings';
import { fortniteWeaponTierList } from './posts/fortnite-weapon-tier-list';

export const FORTNITE_POSTS: BlogPost[] = [
  fortniteBeginnersGuide,
  fortniteBuildingBasics,
  bestFortniteLandingSpots,
  bestFortniteSettings,
  fortniteWeaponTierList,
];
