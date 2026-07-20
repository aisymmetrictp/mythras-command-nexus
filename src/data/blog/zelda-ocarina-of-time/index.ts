import type { BlogPost } from '../blogTypes';
import { ocarinaOfTimeDungeonOrderGuide } from './posts/ocarina-of-time-dungeon-order-guide';
import { ocarinaOfTimeSongsGuide } from './posts/ocarina-of-time-songs-guide';
import { ocarinaOfTimeWaterTempleGuide } from './posts/ocarina-of-time-water-temple-guide';

export const OCARINA_POSTS: BlogPost[] = [
  ocarinaOfTimeDungeonOrderGuide,
  ocarinaOfTimeSongsGuide,
  ocarinaOfTimeWaterTempleGuide,
];
