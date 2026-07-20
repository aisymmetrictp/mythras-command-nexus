import type { BlogPost } from '../blogTypes';
import { residentEvilRequiemBeginnerGuide } from './posts/resident-evil-requiem-beginner-guide';
import { residentEvilRequiemGraceSurvivalGuide } from './posts/resident-evil-requiem-grace-survival-guide';
import { residentEvilRequiemLeonCombatGuide } from './posts/resident-evil-requiem-leon-combat-guide';

export const RE_REQUIEM_POSTS: BlogPost[] = [
  residentEvilRequiemBeginnerGuide,
  residentEvilRequiemGraceSurvivalGuide,
  residentEvilRequiemLeonCombatGuide,
];
