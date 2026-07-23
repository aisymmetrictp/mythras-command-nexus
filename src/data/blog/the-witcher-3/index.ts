import type { BlogPost } from '../blogTypes';
import { witcher3BeginnerGuide } from './posts/witcher-3-beginner-guide';
import { witcher3BuildGuide } from './posts/witcher-3-build-guide';
import { witcher3WitcherGearGuide } from './posts/witcher-3-witcher-gear-guide';
import { witcher3GwentGuide } from './posts/witcher-3-gwent-guide';
import { witcher3AlchemyGuide } from './posts/witcher-3-alchemy-guide';
import { witcher3SignsGuide } from './posts/witcher-3-signs-guide';

export const WITCHER_3_POSTS: BlogPost[] = [
  witcher3BeginnerGuide,
  witcher3BuildGuide,
  witcher3WitcherGearGuide,
  witcher3GwentGuide,
  witcher3AlchemyGuide,
  witcher3SignsGuide,
];
