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
];
