import type { BlogPost } from '../blogTypes';
import { aLinkToThePastBeginnerGuide } from './posts/a-link-to-the-past-beginner-guide';
import { alttpDungeonOrderGuide } from './posts/alttp-dungeon-order-guide';
import { alttpItemsUpgradesGuide } from './posts/alttp-items-upgrades-guide';

export const ALTTP_POSTS: BlogPost[] = [
  aLinkToThePastBeginnerGuide,
  alttpDungeonOrderGuide,
  alttpItemsUpgradesGuide,
];
