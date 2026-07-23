import type { BlogPost } from '../blogTypes';
import { cs2EconomyGuide } from './posts/cs2-economy-guide';
import { cs2UtilityGuide } from './posts/cs2-utility-guide';
import { cs2SprayControlGuide } from './posts/cs2-spray-control-guide';
import { cs2RankSystemExplained } from './posts/cs2-rank-system-explained';
import { cs2CrosshairSettingsGuide } from './posts/cs2-crosshair-settings-guide';
import { cs2MovementCounterStrafingGuide } from './posts/cs2-movement-counter-strafing-guide';

export const CS2_POSTS: BlogPost[] = [
  cs2EconomyGuide,
  cs2UtilityGuide,
  cs2SprayControlGuide,
  cs2RankSystemExplained,
  cs2CrosshairSettingsGuide,
  cs2MovementCounterStrafingGuide,
];
