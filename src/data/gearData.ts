// Gear System Data - Toppings, Beascuits, and Topping Tarts
// Images sourced from CRK Fandom Wiki, stored locally

export interface GearType {
  slug: string;
  name: string;
  fullName: string;
  stat: string;
  description: string;
  imageUrl: string;
  wikiUrl: string;
}

export interface GearCategory {
  slug: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  borderColor: string;
  bgColor: string;
  types: GearType[];
  wikiUrl: string;
}

export const TOPPING_TYPES: GearType[] = [
  { slug: 'raspberry', name: 'Raspberry', fullName: 'Searing Raspberry', stat: 'ATK', description: 'Increases Attack power for damage-dealing cookies.', imageUrl: '/images/gear/toppings/raspberry.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Toppings#Searing_Raspberry' },
  { slug: 'chocolate', name: 'Chocolate', fullName: 'Swift Chocolate', stat: 'Cooldown', description: 'Reduces skill cooldown time for faster ability usage.', imageUrl: '/images/gear/toppings/chocolate.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Toppings#Swift_Chocolate' },
  { slug: 'almond', name: 'Almond', fullName: 'Solid Almond', stat: 'DMG Resist', description: 'Increases Damage Resistance for tanky frontline cookies.', imageUrl: '/images/gear/toppings/almond.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Toppings#Solid_Almond' },
  { slug: 'apple-jelly', name: 'Apple Jelly', fullName: 'Juicy Apple Jelly', stat: 'CRIT%', description: 'Increases Critical Strike chance for burst damage.', imageUrl: '/images/gear/toppings/apple-jelly.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Toppings#Juicy_Apple_Jelly' },
  { slug: 'caramel', name: 'Caramel', fullName: 'Bouncy Caramel', stat: 'ATK SPD', description: 'Increases Attack Speed for faster normal attacks.', imageUrl: '/images/gear/toppings/caramel.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Toppings#Bouncy_Caramel' },
  { slug: 'peanut', name: 'Peanut', fullName: 'Healthy Peanut', stat: 'HP', description: 'Increases maximum HP for better survivability.', imageUrl: '/images/gear/toppings/peanut.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Toppings#Healthy_Peanut' },
  { slug: 'walnut', name: 'Walnut', fullName: 'Hard Walnut', stat: 'DEF', description: 'Increases Defense stat to reduce incoming damage.', imageUrl: '/images/gear/toppings/walnut.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Toppings#Hard_Walnut' },
  { slug: 'candy', name: 'Candy', fullName: 'Sweet Candy', stat: 'Amplify Buff', description: 'Amplifies buff effects for support and healing cookies.', imageUrl: '/images/gear/toppings/candy.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Toppings#Sweet_Candy' },
  { slug: 'hazelnut', name: 'Hazelnut', fullName: 'Hearty Hazelnut', stat: 'CRIT Resist', description: 'Increases Critical Strike Resistance for PvP durability.', imageUrl: '/images/gear/toppings/hazelnut.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Toppings#Hearty_Hazelnut' },
  { slug: 'kiwi', name: 'Kiwi', fullName: 'Fresh Kiwi', stat: 'Debuff Resist', description: 'Increases Debuff Resistance to shrug off crowd control.', imageUrl: '/images/gear/toppings/kiwi.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Toppings#Fresh_Kiwi' },
];

export const BEASCUIT_TYPES: GearType[] = [
  { slug: 'hard', name: 'Hard', fullName: 'Hard Beascuit', stat: 'Defense', description: 'Designed for Defense-type cookies. Boosts defensive stats and survivability.', imageUrl: '/images/gear/beascuits/hard.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Beascuits' },
  { slug: 'chewy', name: 'Chewy', fullName: 'Chewy Beascuit', stat: 'Charge', description: 'Designed for Charge-type cookies. Enhances frontline combat power.', imageUrl: '/images/gear/beascuits/chewy.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Beascuits' },
  { slug: 'crispy', name: 'Crispy', fullName: 'Crispy Beascuit', stat: 'Ambush', description: 'Designed for Ambush-type cookies. Maximizes burst and assassination potential.', imageUrl: '/images/gear/beascuits/crispy.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Beascuits' },
  { slug: 'light', name: 'Light', fullName: 'Light Beascuit', stat: 'Ranged', description: 'Designed for Ranged-type cookies. Optimizes backline damage output.', imageUrl: '/images/gear/beascuits/light.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Beascuits' },
  { slug: 'spicy', name: 'Spicy', fullName: 'Spicy Beascuit', stat: 'Bomber', description: 'Designed for Bomber-type cookies. Enhances AoE explosion damage.', imageUrl: '/images/gear/beascuits/spicy.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Beascuits' },
  { slug: 'zesty', name: 'Zesty', fullName: 'Zesty Beascuit', stat: 'Magic', description: 'Designed for Magic-type cookies. Boosts magical ability power.', imageUrl: '/images/gear/beascuits/zesty.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Beascuits' },
  { slug: 'hearty', name: 'Hearty', fullName: 'Hearty Beascuit', stat: 'Support', description: 'Designed for Support-type cookies. Improves team utility and buffs.', imageUrl: '/images/gear/beascuits/hearty.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Beascuits' },
  { slug: 'sweet', name: 'Sweet', fullName: 'Sweet Beascuit', stat: 'Healing', description: 'Designed for Healing-type cookies. Enhances healing output.', imageUrl: '/images/gear/beascuits/sweet.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Beascuits' },
];

export const TART_TYPES: GearType[] = [
  { slug: 'raspberry', name: 'Raspberry', fullName: 'Searing Raspberry Tart', stat: 'ATK', description: 'Boosts Attack power through the tart system for extra damage.', imageUrl: '/images/gear/tarts/raspberry.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Topping_Tarts' },
  { slug: 'chocolate', name: 'Chocolate', fullName: 'Swift Chocolate Tart', stat: 'Cooldown', description: 'Reduces skill cooldown via tart enhancement for quicker rotations.', imageUrl: '/images/gear/tarts/chocolate.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Topping_Tarts' },
  { slug: 'almond', name: 'Almond', fullName: 'Solid Almond Tart', stat: 'DMG Resist', description: 'Increases Damage Resistance through the tart layer for extra tankiness.', imageUrl: '/images/gear/tarts/almond.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Topping_Tarts' },
  { slug: 'apple-jelly', name: 'Apple Jelly', fullName: 'Juicy Apple Jelly Tart', stat: 'CRIT%', description: 'Grants bonus Critical Strike chance through the tart system.', imageUrl: '/images/gear/tarts/apple-jelly.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Topping_Tarts' },
  { slug: 'caramel', name: 'Caramel', fullName: 'Bouncy Caramel Tart', stat: 'ATK SPD', description: 'Increases Attack Speed via tart enhancement for faster output.', imageUrl: '/images/gear/tarts/caramel.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Topping_Tarts' },
  { slug: 'peanut', name: 'Peanut', fullName: 'Healthy Peanut Tart', stat: 'HP', description: 'Boosts maximum HP through the tart layer for more durability.', imageUrl: '/images/gear/tarts/peanut.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Topping_Tarts' },
  { slug: 'walnut', name: 'Walnut', fullName: 'Hard Walnut Tart', stat: 'DEF', description: 'Increases Defense through tart enhancement for damage mitigation.', imageUrl: '/images/gear/tarts/walnut.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Topping_Tarts' },
  { slug: 'candy', name: 'Candy', fullName: 'Sweet Candy Tart', stat: 'Amplify Buff', description: 'Amplifies buff effects through the tart system for stronger support.', imageUrl: '/images/gear/tarts/candy.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Topping_Tarts' },
  { slug: 'hazelnut', name: 'Hazelnut', fullName: 'Hearty Hazelnut Tart', stat: 'CRIT Resist', description: 'Increases Critical Resistance via tart for PvP survivability.', imageUrl: '/images/gear/tarts/hazelnut.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Topping_Tarts' },
  { slug: 'kiwi', name: 'Kiwi', fullName: 'Fresh Kiwi Tart', stat: 'Debuff Resist', description: 'Increases Debuff Resistance through the tart layer.', imageUrl: '/images/gear/tarts/kiwi.png', wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Topping_Tarts' },
];

export const GEAR_CATEGORIES: GearCategory[] = [
  {
    slug: 'toppings',
    name: 'Toppings',
    icon: '🫐',
    description: 'Equip 5 toppings per cookie to boost core stats. Mix & match or go full sets for maximum effect.',
    color: '#60A5FA',
    borderColor: 'rgba(96, 165, 250, 0.3)',
    bgColor: 'rgba(96, 165, 250, 0.08)',
    types: TOPPING_TYPES,
    wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Toppings',
  },
  {
    slug: 'beascuits',
    name: 'Beascuits',
    icon: '🍪',
    description: 'Cookie-type specific gear that provides powerful stat boosts and attunement bonuses.',
    color: '#F0C850',
    borderColor: 'rgba(240, 200, 80, 0.3)',
    bgColor: 'rgba(240, 200, 80, 0.08)',
    types: BEASCUIT_TYPES,
    wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Beascuits',
  },
  {
    slug: 'tarts',
    name: 'Topping Tarts',
    icon: '🥧',
    description: 'An additional gear layer that enhances toppings with extra stat bonuses.',
    color: '#FB923C',
    borderColor: 'rgba(251, 146, 60, 0.3)',
    bgColor: 'rgba(251, 146, 60, 0.08)',
    types: TART_TYPES,
    wikiUrl: 'https://cookierunkingdom.fandom.com/wiki/Topping_Tarts',
  },
];

// Helper to extract base topping type from build topping string like "Gambit Chocolate x5"
export function extractBaseTopping(toppingStr: string): string | null {
  if (!toppingStr) return null;
  const cleaned = toppingStr.replace(/\s*x\d+$/, '').trim();
  const words = cleaned.split(' ');
  if (words.length < 1) return null;
  // The base type is usually the last word(s)
  // Special case: "Apple Jelly" is two words
  const lastTwo = words.slice(-2).join(' ');
  if (lastTwo === 'Apple Jelly') return 'Apple Jelly';
  return words[words.length - 1];
}

// Helper to extract base beascuit type from build beascuit string like "Legendary Hard" or "Tainted Burning Chewy"
export function extractBaseBeascuit(beascuitStr: string): string | null {
  if (!beascuitStr) return null;
  const words = beascuitStr.split(' ');
  return words[words.length - 1];
}

// Maps base type names to gear type slugs
const TOPPING_NAME_TO_SLUG: Record<string, string> = {
  'Raspberry': 'raspberry',
  'Chocolate': 'chocolate',
  'Almond': 'almond',
  'Almonds': 'almond',
  'Apple Jelly': 'apple-jelly',
  'Caramel': 'caramel',
  'Peanut': 'peanut',
  'Walnut': 'walnut',
  'Walnuts': 'walnut',
  'Candy': 'candy',
  'Hazelnut': 'hazelnut',
  'Kiwi': 'kiwi',
};

const BEASCUIT_NAME_TO_SLUG: Record<string, string> = {
  'Hard': 'hard',
  'Chewy': 'chewy',
  'Crispy': 'crispy',
  'Light': 'light',
  'Spicy': 'spicy',
  'Zesty': 'zesty',
  'Hearty': 'hearty',
  'Sweet': 'sweet',
};

const TART_NAME_TO_SLUG: Record<string, string> = {
  'Raspberry': 'raspberry',
  'Chocolate': 'chocolate',
  'Almond': 'almond',
  'Apple Jelly': 'apple-jelly',
  'Caramel': 'caramel',
  'Peanut': 'peanut',
  'Walnut': 'walnut',
  'Candy': 'candy',
  'Hazelnut': 'hazelnut',
  'Kiwi': 'kiwi',
};

export function getToppingSlug(toppingStr: string): string | null {
  const base = extractBaseTopping(toppingStr);
  if (!base) return null;
  return TOPPING_NAME_TO_SLUG[base] || null;
}

export function getBeascuitSlug(beascuitStr: string): string | null {
  const base = extractBaseBeascuit(beascuitStr);
  if (!base) return null;
  return BEASCUIT_NAME_TO_SLUG[base] || null;
}

export function getTartSlug(tartStr: string): string | null {
  if (!tartStr) return null;
  return TART_NAME_TO_SLUG[tartStr] || null;
}
