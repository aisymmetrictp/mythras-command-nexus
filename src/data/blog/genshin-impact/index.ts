import type { BlogPost } from '../blogTypes';
import { genshinElementalReactionsGuide } from './posts/genshin-elemental-reactions-guide';
import { genshinArtifactGuide } from './posts/genshin-artifact-guide';
import { genshinGachaWishGuide } from './posts/genshin-gacha-wish-guide';
import { genshinSpiralAbyssGuide } from './posts/genshin-spiral-abyss-guide';
import { genshinBestF2pTeams } from './posts/genshin-best-f2p-teams';
import { genshinResinManagementGuide } from './posts/genshin-resin-management-guide';

export const GENSHIN_POSTS: BlogPost[] = [
  genshinElementalReactionsGuide,
  genshinArtifactGuide,
  genshinGachaWishGuide,
  genshinSpiralAbyssGuide,
  genshinBestF2pTeams,
  genshinResinManagementGuide,
];
