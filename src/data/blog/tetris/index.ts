import type { BlogPost } from '../blogTypes';
import { tetrisStackingFundamentals } from './posts/tetris-stacking-fundamentals';
import { tetrisTSpinGuide } from './posts/tetris-t-spin-guide';
import { tetrisFinesseGuide } from './posts/tetris-finesse-guide';

export const TETRIS_POSTS: BlogPost[] = [
  tetrisStackingFundamentals,
  tetrisTSpinGuide,
  tetrisFinesseGuide,
];
