import type { BlogPost } from '../blogTypes';

// Post imports are added here as posts are written.
import { halfLife2BeginnerGuide } from './posts/half-life-2-beginner-guide';
import { halfLife2GravityGunGuide } from './posts/half-life-2-gravity-gun-guide';
import { halfLife2WeaponsGuide } from './posts/half-life-2-weapons-guide';
import { halfLife2EnemiesGuide } from './posts/half-life-2-enemies-guide';

export const HALF_LIFE_2_POSTS: BlogPost[] = [
  halfLife2BeginnerGuide,
  halfLife2GravityGunGuide,
  halfLife2WeaponsGuide,
  halfLife2EnemiesGuide,
];
