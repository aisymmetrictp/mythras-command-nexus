import type { BlogPost } from '../blogTypes';

// Post imports are added here as posts are written.
import { robloxBeginnersGuide } from './posts/roblox-beginners-guide';
import { bestRobloxGames } from './posts/best-roblox-games';
import { howToGetRobux } from './posts/how-to-get-robux';
import { robloxStudioBasics } from './posts/roblox-studio-basics';
import { bestRobloxGamesWithFriends } from './posts/best-roblox-games-with-friends';

export const ROBLOX_POSTS: BlogPost[] = [
  robloxBeginnersGuide,
  bestRobloxGames,
  howToGetRobux,
  robloxStudioBasics,
  bestRobloxGamesWithFriends,
];
