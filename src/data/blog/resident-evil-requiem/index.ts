import type { BlogPost } from '../blogTypes';
import { residentEvilRequiemBeginnerGuide } from './posts/resident-evil-requiem-beginner-guide';
import { residentEvilRequiemGraceSurvivalGuide } from './posts/resident-evil-requiem-grace-survival-guide';
import { residentEvilRequiemLeonCombatGuide } from './posts/resident-evil-requiem-leon-combat-guide';
import { residentEvilRequiemLeonMustDieForeverGuide } from './posts/resident-evil-requiem-leon-must-die-forever-guide';
import { residentEvilRequiemReleaseDateGuide } from './posts/resident-evil-requiem-release-date-guide';
import { residentEvilRequiemStorySetting } from './posts/resident-evil-requiem-story-setting';

export const RE_REQUIEM_POSTS: BlogPost[] = [
  residentEvilRequiemBeginnerGuide,
  residentEvilRequiemGraceSurvivalGuide,
  residentEvilRequiemLeonCombatGuide,
  residentEvilRequiemLeonMustDieForeverGuide,
  residentEvilRequiemReleaseDateGuide,
  residentEvilRequiemStorySetting,
];
