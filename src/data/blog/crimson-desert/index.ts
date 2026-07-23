import type { BlogPost } from '../blogTypes';
import { crimsonDesertCombatGuide } from './posts/crimson-desert-combat-guide';
import { crimsonDesertAbyssCoresGuide } from './posts/crimson-desert-abyss-cores-guide';
import { crimsonDesertPywelExplorationGuide } from './posts/crimson-desert-pywel-exploration-guide';
import { crimsonDesertBossesGuide } from './posts/crimson-desert-bosses-guide';
import { crimsonDesertCampGuide } from './posts/crimson-desert-camp-guide';
import { crimsonDesertReleaseDateEditionsGuide } from './posts/crimson-desert-release-date-editions-guide';

export const CRIMSON_DESERT_POSTS: BlogPost[] = [
  crimsonDesertCombatGuide,
  crimsonDesertAbyssCoresGuide,
  crimsonDesertPywelExplorationGuide,
  crimsonDesertBossesGuide,
  crimsonDesertCampGuide,
  crimsonDesertReleaseDateEditionsGuide,
];
