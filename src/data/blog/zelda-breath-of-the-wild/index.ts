import type { BlogPost } from '../blogTypes';

import { botwBeginnerGuide } from './posts/botw-beginner-guide';
import { botwCookingGuide } from './posts/botw-cooking-guide';
import { botwCombatTips } from './posts/botw-combat-tips';
import { botwBestArmorGuide } from './posts/botw-best-armor-guide';
import { botwShrineGuide } from './posts/botw-shrine-guide';

export const BOTW_POSTS: BlogPost[] = [
  botwBeginnerGuide,
  botwCookingGuide,
  botwCombatTips,
  botwBestArmorGuide,
  botwShrineGuide,
];
