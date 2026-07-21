import type { BlogPost } from '../blogTypes';
import { superMario64BeginnerGuide } from './posts/super-mario-64-beginner-guide';
import { superMario64MovementGuide } from './posts/super-mario-64-movement-guide';
import { superMario64SecretStarsGuide } from './posts/super-mario-64-secret-stars-guide';
import { superMario64CapGuide } from './posts/super-mario-64-cap-guide';

export const MARIO_64_POSTS: BlogPost[] = [
  superMario64BeginnerGuide,
  superMario64MovementGuide,
  superMario64SecretStarsGuide,
  superMario64CapGuide,
];
