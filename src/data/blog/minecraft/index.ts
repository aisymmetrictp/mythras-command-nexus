import type { BlogPost } from '../blogTypes';

// Post imports are added here as posts are written.
import { minecraftSurvivalGuideBeginners } from './posts/minecraft-survival-guide-beginners';
import { bestMinecraftEnchantments } from './posts/best-minecraft-enchantments';
import { minecraftRedstoneBasics } from './posts/minecraft-redstone-basics';
import { bestMinecraftSeeds } from './posts/best-minecraft-seeds';
import { minecraftBuildingTips } from './posts/minecraft-building-tips';

export const MINECRAFT_POSTS: BlogPost[] = [
  minecraftSurvivalGuideBeginners,
  bestMinecraftEnchantments,
  minecraftRedstoneBasics,
  bestMinecraftSeeds,
  minecraftBuildingTips,
];
