import type { BlogPost } from '../blogTypes';

// Post imports are added here as posts are written.
import { pokemonPokopiaBeginnerGuide } from './posts/pokemon-pokopia-beginner-guide';
import { pokemonPokopiaDittoTransformationsGuide } from './posts/pokemon-pokopia-ditto-transformations-guide';
import { pokemonPokopiaHabitatComfortGuide } from './posts/pokemon-pokopia-habitat-comfort-guide';
import { pokemonPokopiaResourceGuide } from './posts/pokemon-pokopia-resource-guide';
import { pokemonPokopiaSpecialtiesBuildingKitsGuide } from './posts/pokemon-pokopia-specialties-building-kits-guide';

export const POKOPIA_POSTS: BlogPost[] = [
  pokemonPokopiaBeginnerGuide,
  pokemonPokopiaDittoTransformationsGuide,
  pokemonPokopiaHabitatComfortGuide,
  pokemonPokopiaResourceGuide,
  pokemonPokopiaSpecialtiesBuildingKitsGuide,
];
