import type { BlogPost } from '../blogTypes';
import { bestWhiteCardsMtg } from './posts/best-white-cards-magic-the-gathering';
import { bestBlueCardsMtg } from './posts/best-blue-cards-magic-the-gathering';
import { bestBlackCardsMtg } from './posts/best-black-cards-magic-the-gathering';
import { bestRedCardsMtg } from './posts/best-red-cards-magic-the-gathering';
import { bestGreenCardsMtg } from './posts/best-green-cards-magic-the-gathering';
import { standardPostBanMetaMay2026 } from './posts/standard-post-ban-meta-may-2026';
import { selesnyaLandfallProTourStrixhavenWinningDeck } from './posts/selesnya-landfall-pro-tour-strixhaven-winning-deck';
import { secretsOfStrixhavenBestStandardCards } from './posts/secrets-of-strixhaven-best-standard-cards';
import { bestLandsCommanderMtg } from './posts/best-lands-commander-mtg';
import { mtgCommanderFormatGuideHowToStart } from './posts/mtg-commander-format-guide-how-to-start';
import { bestBudgetCommanderDecksUnder100 } from './posts/best-budget-commander-decks-under-100';
import { bestRemovalSpellsMtg } from './posts/best-removal-spells-mtg';
import { mtgDeckArchetypesExplained } from './posts/mtg-deck-archetypes-explained';
import { howToBuildACommanderDeck } from './posts/how-to-build-a-commander-deck';
import { bestManaRocksCommanderMtg } from './posts/best-mana-rocks-commander-mtg';
import { bestPlaneswalkersMtg } from './posts/best-planeswalkers-magic-the-gathering';
import { mtgMulliganGuideLondonMulligan } from './posts/mtg-mulligan-guide-london-mulligan';
import { mtgLimitedDraftGuideBeginners } from './posts/mtg-limited-draft-guide-beginners';
import { bestCounterspellsMtg } from './posts/best-counterspells-mtg';
import { bestBoardWipesMtg } from './posts/best-board-wipes-mtg';
import { mtgModernFormatGuide } from './posts/mtg-modern-format-guide';
import { mtgPioneerFormatGuide } from './posts/mtg-pioneer-format-guide';
import { bestCardDrawCommanderMtg } from './posts/best-card-draw-commander-mtg';
import { bestRampSpellsCommanderMtg } from './posts/best-ramp-spells-commander-mtg';
import { bestCommandersForBeginnersMtg } from './posts/best-commanders-for-beginners-mtg';
import { mtgPauperFormatGuide } from './posts/mtg-pauper-format-guide';
import { bestTutorsCommanderMtg } from './posts/best-tutors-commander-mtg';
import { bestEquipmentMtg } from './posts/best-equipment-mtg';
import { mtgColorPieExplained } from './posts/mtg-color-pie-explained';
import { bestEnchantmentsMtg } from './posts/best-enchantments-mtg';
import { mtgCombatExplained } from './posts/mtg-combat-explained';
import { mtgLegacyFormatGuide } from './posts/mtg-legacy-format-guide';
import { mtgKeywordsExplained } from './posts/mtg-keywords-explained';
import { mtgStackPriorityExplained } from './posts/mtg-stack-priority-explained';
import { mtgManaBaseGuide } from './posts/mtg-mana-base-guide';
import { bestArtifactsMtg } from './posts/best-artifacts-mtg';
import { mtgSideboardingGuide } from './posts/mtg-sideboarding-guide';
import { bestCommanderCombosMtg } from './posts/best-commander-combos-mtg';
import { mtgDeckbuildingRatios } from './posts/mtg-deckbuilding-ratios';
import { bestCommanderStaplesMtg } from './posts/best-commander-staples-mtg';
import { mtgColorPairsGuide } from './posts/mtg-color-pairs-guide';
import { bestManaDorksMtg } from './posts/best-mana-dorks-mtg';
import { mtgCommanderBrackets } from './posts/mtg-commander-brackets';
import { bestGraveyardRecursionCommanderMtg } from './posts/best-graveyard-recursion-commander-mtg';
import { mtgStandardFormatGuide } from './posts/mtg-standard-format-guide';
import { mtgBrawlFormatGuide } from './posts/mtg-brawl-format-guide';
import { bestMtgTokenGeneratorsCommander } from './posts/best-mtg-token-generators-commander';
import { mtgOathbreakerFormatGuide } from './posts/mtg-oathbreaker-format-guide';
import { bestMtgAristocratsSacrificeCommander } from './posts/best-mtg-aristocrats-sacrifice-commander';
import { mtgVintageFormatGuide } from './posts/mtg-vintage-format-guide';
import { bestMtgFlickerBlinkCommander } from './posts/best-mtg-flicker-blink-commander';
import { bestMtgLifegainCommander } from './posts/best-mtg-lifegain-commander';
import { bestMtgExtraTurnSpells } from './posts/best-mtg-extra-turn-spells';
import { bestMtgClonesCopyCommander } from './posts/best-mtg-clones-copy-commander';
import { mtgTwoHeadedGiantGuide } from './posts/mtg-two-headed-giant-guide';
import { bestMtgProtectionSpells } from './posts/best-mtg-protection-spells';
import { bestMtgStaxPiecesCommander } from './posts/best-mtg-stax-pieces-commander';
import { bestMtgReanimationSpells } from './posts/best-mtg-reanimation-spells';
import { bestMtgFastManaCommander } from './posts/best-mtg-fast-mana-commander';
import { bestMtgCantrips } from './posts/best-mtg-cantrips';
import { bestMtgVoltronEquipmentCommander } from './posts/best-mtg-voltron-equipment-commander';
import { bestMtgGoadCards } from './posts/best-mtg-goad-cards';
import { bestMtgTreasurePayoffs } from './posts/best-mtg-treasure-payoffs';
import { bestMtgSacrificeOutletsCommander } from './posts/best-mtg-sacrifice-outlets-commander';
import { bestMtgPillowfortCards } from './posts/best-mtg-pillowfort-cards';

export const MTG_POSTS: BlogPost[] = [
  bestWhiteCardsMtg,
  bestBlueCardsMtg,
  bestBlackCardsMtg,
  bestRedCardsMtg,
  bestGreenCardsMtg,
  standardPostBanMetaMay2026,
  selesnyaLandfallProTourStrixhavenWinningDeck,
  secretsOfStrixhavenBestStandardCards,
  bestLandsCommanderMtg,
  mtgCommanderFormatGuideHowToStart,
  bestBudgetCommanderDecksUnder100,
  bestRemovalSpellsMtg,
  mtgDeckArchetypesExplained,
  howToBuildACommanderDeck,
  bestManaRocksCommanderMtg,
  bestPlaneswalkersMtg,
  mtgMulliganGuideLondonMulligan,
  mtgLimitedDraftGuideBeginners,
  bestCounterspellsMtg,
  bestBoardWipesMtg,
  mtgModernFormatGuide,
  mtgPioneerFormatGuide,
  bestCardDrawCommanderMtg,
  bestRampSpellsCommanderMtg,
  bestCommandersForBeginnersMtg,
  mtgPauperFormatGuide,
  bestTutorsCommanderMtg,
  bestEquipmentMtg,
  mtgColorPieExplained,
  bestEnchantmentsMtg,
  mtgCombatExplained,
  mtgLegacyFormatGuide,
  mtgKeywordsExplained,
  mtgStackPriorityExplained,
  mtgManaBaseGuide,
  bestArtifactsMtg,
  mtgSideboardingGuide,
  bestCommanderCombosMtg,
  mtgDeckbuildingRatios,
  bestCommanderStaplesMtg,
  mtgColorPairsGuide,
  bestManaDorksMtg,
  mtgCommanderBrackets,
  bestGraveyardRecursionCommanderMtg,
  mtgStandardFormatGuide,
  mtgBrawlFormatGuide,
  bestMtgTokenGeneratorsCommander,
  mtgOathbreakerFormatGuide,
  bestMtgAristocratsSacrificeCommander,
  mtgVintageFormatGuide,
  bestMtgFlickerBlinkCommander,
  bestMtgLifegainCommander,
  bestMtgExtraTurnSpells,
  bestMtgClonesCopyCommander,
  mtgTwoHeadedGiantGuide,
  bestMtgProtectionSpells,
  bestMtgStaxPiecesCommander,
  bestMtgReanimationSpells,
  bestMtgFastManaCommander,
  bestMtgCantrips,
  bestMtgVoltronEquipmentCommander,
  bestMtgGoadCards,
  bestMtgTreasurePayoffs,
  bestMtgSacrificeOutletsCommander,
  bestMtgPillowfortCards,
];
