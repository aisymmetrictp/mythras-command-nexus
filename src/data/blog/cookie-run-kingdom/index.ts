import type { BlogPost } from '../blogTypes';
import { crkCodes } from './posts/cookie-run-kingdom-codes';
import { crkTierList } from './posts/cookie-run-kingdom-tier-list';
import { timekeeperToppings } from './posts/timekeeper-toppings';
import { kingdomArenaMetaTeam } from './posts/kingdom-arena-meta-team';
import { guildBattleTeams } from './posts/guild-battle-teams';
import { crkRerollGuide } from './posts/cookie-run-kingdom-reroll-guide';
import { cookiechatAffectionGuide } from './posts/cookiechat-affection-guide';
import { timelineOfFateUpdateGuide } from './posts/timeline-of-fate-update-guide';
import { ashSaltCookieToppings } from './posts/ash-salt-cookie-toppings';
import { crkTreasuresGuide } from './posts/cookie-run-kingdom-treasures-guide';
import { bestF2pArenaTeam } from './posts/best-f2p-arena-team';
import { decadentChocoTowerWalkthrough } from './posts/decadent-choco-tower-walkthrough';
import { crkBeastYeastGuide } from './posts/crk-beast-yeast-guide';
import { pureVanillaAwakenedToppings } from './posts/pure-vanilla-awakened-toppings';
import { beastCookiesRankedWorthPulling } from './posts/beast-cookies-ranked-worth-pulling';
import { crkBeginnerMistakesToAvoid } from './posts/crk-beginner-mistakes-to-avoid';
import { bestCrkHealersRanked } from './posts/best-crk-healers-ranked';
import { crkMagicCandyPriorityGuide } from './posts/crk-magic-candy-priority-guide';
import { darkEnchantressCookieToppingsBuild } from './posts/dark-enchantress-cookie-toppings-build';
import { bestCrkDpsCookiesRanked } from './posts/best-crk-dps-cookies-ranked';
import { crkToppingsGuide } from './posts/crk-toppings-guide';
import { sugarSwanCookieToppingsBuild } from './posts/sugar-swan-cookie-toppings-build';
import { beascuitTierList } from './posts/beascuit-tier-list';
import { beastYeastBossCounters } from './posts/beast-yeast-boss-counters';
import { f2pCrystalOptimization } from './posts/f2p-crystal-optimization';
import { bestCrkSupportCookiesRanked } from './posts/best-crk-support-cookies-ranked';
import { bestAncientCookiesCrkRanked } from './posts/best-ancient-cookies-crk-ranked';
import { bestCrkTankCookiesRanked } from './posts/best-crk-tank-cookies-ranked';
import { shadowMilkCookieToppingsBuild } from './posts/shadow-milk-cookie-toppings-build';
import { bestEpicCookiesCrkRanked } from './posts/best-epic-cookies-crk-ranked';
import { seaFairyCookieToppingsBuild } from './posts/sea-fairy-cookie-toppings-build';
import { bestLegendaryCookiesCrkRanked } from './posts/best-legendary-cookies-crk-ranked';
import { burningSpiceCookieToppingsBuild } from './posts/burning-spice-cookie-toppings-build';
import { mysticFlourCookieToppingsBuild } from './posts/mystic-flour-cookie-toppings-build';
import { crkAwakeningGuide } from './posts/crk-awakening-guide';
import { windArcherCookieToppingsBuild } from './posts/wind-archer-cookie-toppings-build';
import { bestBeginnerCookiesCrk } from './posts/best-beginner-cookies-crk';
import { eternalSugarCookieToppingsBuild } from './posts/eternal-sugar-cookie-toppings-build';
import { bestCrkPveTeams } from './posts/best-crk-pve-teams';
import { silentSaltCookieToppingsBuild } from './posts/silent-salt-cookie-toppings-build';
import { crkGachaPullGuide } from './posts/crk-gacha-pull-guide';
import { hollyberryCookieToppingsBuild } from './posts/hollyberry-cookie-toppings-build';
import { frostQueenCookieToppingsBuild } from './posts/frost-queen-cookie-toppings-build';
import { blackPearlCookieToppingsBuild } from './posts/black-pearl-cookie-toppings-build';
import { crkKingdomBuildingGuide } from './posts/crk-kingdom-building-guide';
import { stormbringerCookieToppingsBuild } from './posts/stormbringer-cookie-toppings-build';
import { crkWorldExplorationGuide } from './posts/crk-world-exploration-guide';
import { crunchyChipCookieToppingsBuild } from './posts/crunchy-chip-cookie-toppings-build';
import { crkCookieRarityExplained } from './posts/crk-cookie-rarity-explained';
import { blackSapphireCookieToppingsBuild } from './posts/black-sapphire-cookie-toppings-build';
import { crkDailyChecklist } from './posts/crk-daily-checklist';
import { goldenCheeseCookieToppingsBuild } from './posts/golden-cheese-cookie-toppings-build';
import { darkCacaoCookieToppingsBuild } from './posts/dark-cacao-cookie-toppings-build';
import { whiteLilyCookieToppingsBuild } from './posts/white-lily-cookie-toppings-build';
import { endlessStrawberryTowerWalkthrough } from './posts/endless-strawberry-tower-walkthrough';
import { elderFaerieCookieToppingsBuild } from './posts/elder-faerie-cookie-toppings-build';
import { crkCookieAllianceGuide } from './posts/crk-cookie-alliance-guide';
import { capsaicinCookieToppingsBuild } from './posts/capsaicin-cookie-toppings-build';
import { crkSugarGnomeLabGuide } from './posts/crk-sugar-gnome-lab-guide';
import { candyAppleCookieToppingsBuild } from './posts/candy-apple-cookie-toppings-build';
import { crkDragonsLairGuide } from './posts/crk-dragons-lair-guide';
import { twizzlyGummyCookieToppingsBuild } from './posts/twizzly-gummy-cookie-toppings-build';
import { starCoralCookieToppingsBuild } from './posts/star-coral-cookie-toppings-build';
import { crkSuperMayhemGuide } from './posts/crk-super-mayhem-guide';
import { crkBalloonExpeditionGuide } from './posts/crk-balloon-expedition-guide';
import { clottedCreamCookieToppingsBuild } from './posts/clotted-cream-cookie-toppings-build';
import { crkGuildBattleGuide } from './posts/crk-guild-battle-guide';
import { mercurialKnightCookieToppingsBuild } from './posts/mercurial-knight-cookie-toppings-build';
import { bestCrkArenaDefenseTeams } from './posts/best-crk-arena-defense-teams';
import { crkSpeedrunTeamsGuide } from './posts/crk-speedrun-teams-guide';
import { cottonCookieToppingsBuild } from './posts/cotton-cookie-toppings-build';
import { sherbetCookieToppingsBuild } from './posts/sherbet-cookie-toppings-build';
import { crkMileagePointsGuide } from './posts/crk-mileage-points-guide';
import { financierCookieToppingsBuild } from './posts/financier-cookie-toppings-build';
import { wildberryCookieToppingsBuild } from './posts/wildberry-cookie-toppings-build';
import { crkStarJellyGuide } from './posts/crk-star-jelly-guide';
import { caramelArrowCookieToppingsBuild } from './posts/caramel-arrow-cookie-toppings-build';
import { moonlightCookieToppingsBuild } from './posts/moonlight-cookie-toppings-build';
import { crkTodaysBountiesGuide } from './posts/crk-todays-bounties-guide';
import { blackLemonadeCookieToppingsBuild } from './posts/black-lemonade-cookie-toppings-build';
import { smokedCheeseCookieToppingsBuild } from './posts/smoked-cheese-cookie-toppings-build';
import { crkTreeOfWishesGuide } from './posts/crk-tree-of-wishes-guide';
import { oysterCookieToppingsBuild } from './posts/oyster-cookie-toppings-build';
import { crimsonCoralCookieToppingsBuild } from './posts/crimson-coral-cookie-toppings-build';
import { crkHallOfAncientHeroesGuide } from './posts/crk-hall-of-ancient-heroes-guide';

export const CRK_POSTS: BlogPost[] = [
  crkCodes,
  crkTierList,
  timekeeperToppings,
  kingdomArenaMetaTeam,
  guildBattleTeams,
  crkRerollGuide,
  cookiechatAffectionGuide,
  timelineOfFateUpdateGuide,
  ashSaltCookieToppings,
  crkTreasuresGuide,
  bestF2pArenaTeam,
  decadentChocoTowerWalkthrough,
  crkBeastYeastGuide,
  pureVanillaAwakenedToppings,
  beastCookiesRankedWorthPulling,
  crkBeginnerMistakesToAvoid,
  bestCrkHealersRanked,
  crkMagicCandyPriorityGuide,
  darkEnchantressCookieToppingsBuild,
  bestCrkDpsCookiesRanked,
  crkToppingsGuide,
  sugarSwanCookieToppingsBuild,
  beascuitTierList,
  beastYeastBossCounters,
  f2pCrystalOptimization,
  bestCrkSupportCookiesRanked,
  bestAncientCookiesCrkRanked,
  bestCrkTankCookiesRanked,
  shadowMilkCookieToppingsBuild,
  bestEpicCookiesCrkRanked,
  seaFairyCookieToppingsBuild,
  bestLegendaryCookiesCrkRanked,
  burningSpiceCookieToppingsBuild,
  mysticFlourCookieToppingsBuild,
  crkAwakeningGuide,
  windArcherCookieToppingsBuild,
  bestBeginnerCookiesCrk,
  eternalSugarCookieToppingsBuild,
  bestCrkPveTeams,
  silentSaltCookieToppingsBuild,
  crkGachaPullGuide,
  hollyberryCookieToppingsBuild,
  frostQueenCookieToppingsBuild,
  blackPearlCookieToppingsBuild,
  crkKingdomBuildingGuide,
  stormbringerCookieToppingsBuild,
  crkWorldExplorationGuide,
  crunchyChipCookieToppingsBuild,
  crkCookieRarityExplained,
  blackSapphireCookieToppingsBuild,
  crkDailyChecklist,
  goldenCheeseCookieToppingsBuild,
  darkCacaoCookieToppingsBuild,
  whiteLilyCookieToppingsBuild,
  endlessStrawberryTowerWalkthrough,
  elderFaerieCookieToppingsBuild,
  crkCookieAllianceGuide,
  capsaicinCookieToppingsBuild,
  crkSugarGnomeLabGuide,
  candyAppleCookieToppingsBuild,
  crkDragonsLairGuide,
  twizzlyGummyCookieToppingsBuild,
  starCoralCookieToppingsBuild,
  crkSuperMayhemGuide,
  crkBalloonExpeditionGuide,
  clottedCreamCookieToppingsBuild,
  crkGuildBattleGuide,
  mercurialKnightCookieToppingsBuild,
  bestCrkArenaDefenseTeams,
  crkSpeedrunTeamsGuide,
  cottonCookieToppingsBuild,
  sherbetCookieToppingsBuild,
  crkMileagePointsGuide,
  financierCookieToppingsBuild,
  wildberryCookieToppingsBuild,
  crkStarJellyGuide,
  caramelArrowCookieToppingsBuild,
  moonlightCookieToppingsBuild,
  crkTodaysBountiesGuide,
  blackLemonadeCookieToppingsBuild,
  smokedCheeseCookieToppingsBuild,
  crkTreeOfWishesGuide,
  oysterCookieToppingsBuild,
  crimsonCoralCookieToppingsBuild,
  crkHallOfAncientHeroesGuide,
];
