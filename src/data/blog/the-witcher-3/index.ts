import type { BlogPost } from '../blogTypes';
import { witcher3BeginnerGuide } from './posts/witcher-3-beginner-guide';
import { witcher3BuildGuide } from './posts/witcher-3-build-guide';
import { witcher3WitcherGearGuide } from './posts/witcher-3-witcher-gear-guide';

export const WITCHER_3_POSTS: BlogPost[] = [
  witcher3BeginnerGuide,
  witcher3BuildGuide,
  witcher3WitcherGearGuide,
];
