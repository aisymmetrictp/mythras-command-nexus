import type { BlogPost } from '../blogTypes';
import { aLinkToThePastBeginnerGuide } from './posts/a-link-to-the-past-beginner-guide';
import { alttpDungeonOrderGuide } from './posts/alttp-dungeon-order-guide';
import { alttpItemsUpgradesGuide } from './posts/alttp-items-upgrades-guide';
import { alttpBossGuide } from './posts/alttp-boss-guide';
import { alttpDarkWorldGuide } from './posts/alttp-dark-world-guide';

export const ALTTP_POSTS: BlogPost[] = [
  aLinkToThePastBeginnerGuide,
  alttpDungeonOrderGuide,
  alttpItemsUpgradesGuide,
  alttpBossGuide,
  alttpDarkWorldGuide,
];
