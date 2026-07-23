import type { BlogPost } from '../blogTypes';
import { ocarinaOfTimeDungeonOrderGuide } from './posts/ocarina-of-time-dungeon-order-guide';
import { ocarinaOfTimeSongsGuide } from './posts/ocarina-of-time-songs-guide';
import { ocarinaOfTimeWaterTempleGuide } from './posts/ocarina-of-time-water-temple-guide';
import { ocarinaOfTimeBiggoronSwordGuide } from './posts/ocarina-of-time-biggoron-sword-guide';
import { ocarinaOfTimeBossGuide } from './posts/ocarina-of-time-boss-guide';

export const OCARINA_POSTS: BlogPost[] = [
  ocarinaOfTimeDungeonOrderGuide,
  ocarinaOfTimeSongsGuide,
  ocarinaOfTimeWaterTempleGuide,
  ocarinaOfTimeBiggoronSwordGuide,
  ocarinaOfTimeBossGuide,
];
