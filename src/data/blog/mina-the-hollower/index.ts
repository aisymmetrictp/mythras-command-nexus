import type { BlogPost } from '../blogTypes';

import { minaTheHollowerBeginnerGuide } from './posts/mina-the-hollower-beginner-guide';
import { minaTheHollowerWeaponsGuide } from './posts/mina-the-hollower-weapons-guide';
import { minaTheHollowerSidearmsTrinketsGuide } from './posts/mina-the-hollower-sidearms-trinkets-guide';
import { minaTheHollowerExplorationTips } from './posts/mina-the-hollower-exploration-tips';
import { minaTheHollowerPatchNotesExplained } from './posts/mina-the-hollower-patch-notes-explained';

export const MINA_POSTS: BlogPost[] = [
  minaTheHollowerBeginnerGuide,
  minaTheHollowerWeaponsGuide,
  minaTheHollowerSidearmsTrinketsGuide,
  minaTheHollowerExplorationTips,
  minaTheHollowerPatchNotesExplained,
];
