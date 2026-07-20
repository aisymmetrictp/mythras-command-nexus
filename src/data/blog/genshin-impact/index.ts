import type { BlogPost } from '../blogTypes';
import { genshinElementalReactionsGuide } from './posts/genshin-elemental-reactions-guide';
import { genshinArtifactGuide } from './posts/genshin-artifact-guide';
import { genshinGachaWishGuide } from './posts/genshin-gacha-wish-guide';

export const GENSHIN_POSTS: BlogPost[] = [
  genshinElementalReactionsGuide,
  genshinArtifactGuide,
  genshinGachaWishGuide,
];
