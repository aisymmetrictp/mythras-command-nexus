import type { BlogPost } from '../blogTypes';

import { botwBeginnerGuide } from './posts/botw-beginner-guide';
import { botwCookingGuide } from './posts/botw-cooking-guide';
import { botwCombatTips } from './posts/botw-combat-tips';

export const BOTW_POSTS: BlogPost[] = [
  botwBeginnerGuide,
  botwCookingGuide,
  botwCombatTips,
];
