import type { BlogPost } from '../blogTypes';
import { crkCodes } from './posts/cookie-run-kingdom-codes';
import { crkTierList } from './posts/cookie-run-kingdom-tier-list';
import { timekeeperToppings } from './posts/timekeeper-toppings';
import { kingdomArenaMetaTeam } from './posts/kingdom-arena-meta-team';
import { guildBattleTeams } from './posts/guild-battle-teams';
import { crkRerollGuide } from './posts/cookie-run-kingdom-reroll-guide';
import { cookiechatAffectionGuide } from './posts/cookiechat-affection-guide';
import { timelineOfFateUpdateGuide } from './posts/timeline-of-fate-update-guide';

export const CRK_POSTS: BlogPost[] = [
  crkCodes,
  crkTierList,
  timekeeperToppings,
  kingdomArenaMetaTeam,
  guildBattleTeams,
  crkRerollGuide,
  cookiechatAffectionGuide,
  timelineOfFateUpdateGuide,
];
