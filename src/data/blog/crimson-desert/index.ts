import type { BlogPost } from '../blogTypes';
import { crimsonDesertCombatGuide } from './posts/crimson-desert-combat-guide';
import { crimsonDesertAbyssCoresGuide } from './posts/crimson-desert-abyss-cores-guide';
import { crimsonDesertPywelExplorationGuide } from './posts/crimson-desert-pywel-exploration-guide';
import { crimsonDesertBossesGuide } from './posts/crimson-desert-bosses-guide';

export const CRIMSON_DESERT_POSTS: BlogPost[] = [
  crimsonDesertCombatGuide,
  crimsonDesertAbyssCoresGuide,
  crimsonDesertPywelExplorationGuide,
  crimsonDesertBossesGuide,
];
