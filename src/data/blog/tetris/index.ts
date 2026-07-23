import type { BlogPost } from '../blogTypes';
import { tetrisStackingFundamentals } from './posts/tetris-stacking-fundamentals';
import { tetrisTSpinGuide } from './posts/tetris-t-spin-guide';
import { tetrisFinesseGuide } from './posts/tetris-finesse-guide';
import { tetrisSprint40LinesGuide } from './posts/tetris-sprint-40-lines-guide';
import { tetrisScoringAndAttackGuide } from './posts/tetris-scoring-and-attack-guide';

export const TETRIS_POSTS: BlogPost[] = [
  tetrisStackingFundamentals,
  tetrisTSpinGuide,
  tetrisFinesseGuide,
  tetrisSprint40LinesGuide,
  tetrisScoringAndAttackGuide,
];
