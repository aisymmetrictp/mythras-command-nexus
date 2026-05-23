// Cookie Run Kingdom - Ultimate Gear Guide Data
// Sourced from CookieRun Mythras supporting documents & CRK Fandom Wiki

export type CookieRarity = 'Beast' | 'Ancient' | 'Legendary' | 'Dragon' | 'Super Epic' | 'Epic' | 'Rare' | 'Common' | 'Special';
export type CookieType = 'Charge' | 'Magic' | 'Ranged' | 'Ambush' | 'Defense' | 'Healing' | 'Support' | 'Bomber' | 'BTS';

export interface CookieBuild {
  beascuit: string;
  beascuitAttunes: string;
  toppings: string;
  toppingSubstats: string;
  tart: string;
  tartStat: string;
}

export interface CookieData {
  name: string;
  slug: string;
  rarity: CookieRarity;
  type: CookieType;
  build: CookieBuild | null;
  youtubeVideoUrl: string | null;
  youtubeVideoTitle: string | null;
  allVideos: { url: string; title: string; date: string }[];
  wikiUrl: string;
  imageUrl: string | null;
}

export const RARITY_ORDER: CookieRarity[] = ['Beast', 'Ancient', 'Legendary', 'Dragon', 'Super Epic', 'Epic', 'Rare', 'Common', 'Special'];

export const RARITY_COLORS: Record<CookieRarity, { bg: string; text: string; border: string; gradient: string }> = {
  Beast: { bg: 'rgba(139, 0, 0, 0.15)', text: '#FF4444', border: 'rgba(255, 68, 68, 0.3)', gradient: 'from-red-900/20 to-red-600/10' },
  Ancient: { bg: 'rgba(212, 168, 83, 0.15)', text: '#F0C850', border: 'rgba(240, 200, 80, 0.3)', gradient: 'from-yellow-900/20 to-yellow-600/10' },
  Legendary: { bg: 'rgba(168, 85, 247, 0.15)', text: '#C084FC', border: 'rgba(192, 132, 252, 0.3)', gradient: 'from-purple-900/20 to-purple-600/10' },
  Dragon: { bg: 'rgba(249, 115, 22, 0.15)', text: '#FB923C', border: 'rgba(251, 146, 60, 0.3)', gradient: 'from-orange-900/20 to-orange-600/10' },
  'Super Epic': { bg: 'rgba(236, 72, 153, 0.15)', text: '#F472B6', border: 'rgba(244, 114, 182, 0.3)', gradient: 'from-pink-900/20 to-pink-600/10' },
  Epic: { bg: 'rgba(59, 130, 246, 0.15)', text: '#60A5FA', border: 'rgba(96, 165, 250, 0.3)', gradient: 'from-blue-900/20 to-blue-600/10' },
  Rare: { bg: 'rgba(34, 197, 94, 0.15)', text: '#4ADE80', border: 'rgba(74, 222, 128, 0.3)', gradient: 'from-green-900/20 to-green-600/10' },
  Common: { bg: 'rgba(156, 163, 175, 0.15)', text: '#D1D5DB', border: 'rgba(209, 213, 219, 0.3)', gradient: 'from-gray-800/20 to-gray-600/10' },
  Special: { bg: 'rgba(6, 182, 212, 0.15)', text: '#22D3EE', border: 'rgba(34, 211, 238, 0.3)', gradient: 'from-cyan-900/20 to-cyan-600/10' },
};

export const TYPE_ICONS: Record<CookieType, string> = {
  Charge: '⚔️',
  Magic: '🔮',
  Ranged: '🏹',
  Ambush: '🗡️',
  Defense: '🛡️',
  Healing: '💚',
  Support: '📡',
  Bomber: '💣',
  BTS: '🎵',
};

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[ñ]/g, 'n')
    .replace(/ä/g, 'a')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function wikiUrl(name: string): string {
  const wikiName = name.replace(/ /g, '_');
  return `https://cookierunkingdom.fandom.com/wiki/${encodeURIComponent(wikiName)}`;
}

// Re-optimized video matches from CookieRun Mythras YouTube channel
// Each cookie has a best (newest/highest-scored) video and additional related videos
const VIDEO_MATCHES: Record<string, { url: string; title: string; allVideos?: { url: string; title: string; date: string }[] }> = {
  'Affogato Cookie': { url: 'https://www.youtube.com/watch?v=7kZMiJLnhtQ', title: 'Affogato Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=7kZMiJLnhtQ', title: 'Affogato Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2022-03-07' }, { url: 'https://www.youtube.com/watch?v=hmWewrK7s2Y', title: 'TAKEDOWN Affogato | 3 Star Dark Mode 14-22 Guide | Auto | Best Cookie Team | Cookie Run Kingdom', date: '2023-01-28' }] },
  'Agar Agar Cookie': { url: 'https://www.youtube.com/watch?v=gZVdYdMacKM', title: 'Agar Agar Cookie Gear Guide | Cookie Run Kingdom' },
  'Almond Cookie': { url: 'https://www.youtube.com/watch?v=asLUq8fzeF8', title: 'Almond Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom' },
  'Black Forest Cookie': { url: 'https://www.youtube.com/watch?v=sY4Myxsx4n0', title: 'Black Forest Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=sY4Myxsx4n0', title: 'Black Forest Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2025-03-16' }, { url: 'https://www.youtube.com/watch?v=dD4DlWKrOfg', title: 'How to Get Black Forest Cookie F2P Guide | Cookie Run Kingdom', date: '2025-03-12' }] },
  'Black Pearl Cookie': { url: 'https://www.youtube.com/watch?v=YMMjl07QzY4', title: 'Black Pearl Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=YMMjl07QzY4', title: 'Black Pearl Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-04-30' }, { url: 'https://www.youtube.com/watch?v=y7RAQCZhfJ4', title: 'Black Pearl Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2022-11-02' }, { url: 'https://www.youtube.com/watch?v=ZVnP25w1rtE', title: 'EZ BEAT!!! | Takedown Black Pearl Cookie | Black Pearl Islands Guide | Cookie Run Kingdom | #gaming', date: '2022-10-09' }, { url: 'https://www.youtube.com/watch?v=WXoDFQ9wn58', title: 'ULTIMATE Guide | Black Pearl Islands Guide | Tips & Tricks to Success | Cookie Run Kingdom', date: '2022-10-10' }, { url: 'https://www.youtube.com/watch?v=UY_RI_f_dn0', title: 'DUSKGLOOM TRIAL GROUNDS GUIDE | Stage 1 to 7 | Black Pearl Crystal Jam EPIC RUN | Cookie Run Kingdom', date: '2023-08-10' }] },
  'Black Sapphire Cookie': { url: 'https://www.youtube.com/watch?v=zPTUK5FvscA', title: 'Black Sapphire Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=zPTUK5FvscA', title: 'Black Sapphire Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2025-02-12' }, { url: 'https://www.youtube.com/watch?v=jQlHhyqg-9Y', title: 'BEST TEAM | Black Sapphire Red Velvet Dragon Team Guide', date: '2025-02-16' }] },
  'Burning Spice Cookie': { url: 'https://www.youtube.com/watch?v=JwdN8MLjdL8', title: 'Burning Spice Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=JwdN8MLjdL8', title: 'Burning Spice Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-10-26' }, { url: 'https://www.youtube.com/watch?v=-dNVkEWbXko', title: 'How to Get Burning Spice Cookie F2P Guide | Cookie Run Kingdom', date: '2024-10-02' }, { url: 'https://www.youtube.com/watch?v=o0eZk6MfmVQ', title: 'Team to Beat Burning Spice Cookie Boss Guide', date: '2024-11-01' }] },
  'Camellia Cookie': { url: 'https://www.youtube.com/watch?v=Wh4AufHizxU', title: 'Camellia Cookie Beascuit & Topping Guide | Cookie Run Kingdom' },
  'Candy Apple Cookie': { url: 'https://www.youtube.com/watch?v=PTeepPjK9bQ', title: 'Candy Apple Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=PTeepPjK9bQ', title: 'Candy Apple Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2025-01-15' }, { url: 'https://www.youtube.com/watch?v=quM7Jmb_X70', title: 'BEAT Candy Apple Cookie | Hard Mode Beast Yeast 7-16 Guide', date: '2025-01-28' }, { url: 'https://www.youtube.com/watch?v=iM-Z6SwEygM', title: 'MASSIVE DAMAGE | Candy Apple Red Velvet Dragon Team Guide', date: '2025-01-31' }] },
  'Candy Diver Cookie': { url: 'https://www.youtube.com/watch?v=DOPdXQi16LA', title: 'Candy Diver Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom' },
  'Capsaicin Cookie': { url: 'https://www.youtube.com/watch?v=cEgVZWpO3uw', title: 'Capsaicin Cookie Toppings | BURN TIP! | Topping Guide | Best Toppings | Cookie Run Kingdom' },
  'Caramel Arrow Cookie': { url: 'https://www.youtube.com/watch?v=sJMjvS_sn50', title: 'caramel arrow magic candy', allVideos: [{ url: 'https://www.youtube.com/watch?v=sJMjvS_sn50', title: 'caramel arrow magic candy', date: '2024-05-26' }, { url: 'https://www.youtube.com/watch?v=hpFkpiwiWVo', title: 'caramel arrow magic candy', date: '2024-06-04' }, { url: 'https://www.youtube.com/watch?v=l2w5uS-fOQ4', title: 'Caramel Arrow Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-06-08' }, { url: 'https://www.youtube.com/watch?v=IN19BK98MDE', title: 'Caramel Arrow Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2022-04-28' }] },
  'Charcoal Cookie': { url: 'https://www.youtube.com/watch?v=Fjig-QhtH6Q', title: 'Charcoal Cookie Gear Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=Fjig-QhtH6Q', title: 'Charcoal Cookie Gear Guide | Cookie Run Kingdom', date: '2025-09-24' }, { url: 'https://www.youtube.com/watch?v=C3G5vO0KBCo', title: 'Guardian of the Rift Guide | Charcoal Cookies Protection 1', date: '2025-10-26' }] },
  'Chess Cocoa Cookie': { url: 'https://www.youtube.com/watch?v=c_SyXbmG0ac', title: 'Chess Choco Cookie Gear Guide | Cookie Run Kingdom' },
  'Choco Drizzle Cookie': { url: 'https://www.youtube.com/watch?v=a2VHI0XqD0I', title: 'Choco Drizzle Cookie Beascuit & Topping Guide | Cookie Run Kingdom' },
  'Clotted Cream Cookie': { url: 'https://www.youtube.com/watch?v=oMSpF4Sj2BQ', title: 'Clotted Cream Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=oMSpF4Sj2BQ', title: 'Clotted Cream Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-05-01' }, { url: 'https://www.youtube.com/watch?v=eSFGgVXOAWk', title: 'Clotted Cream Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2022-06-04' }] },
  'Cloud Haetae Cookie': { url: 'https://www.youtube.com/watch?v=VRfgJjAUrt0', title: 'Cloud Haetae Cookie Beascuit & Topping Guide | Cookie Run Kingdom' },
  'Cream Ferret Cookie': { url: 'https://www.youtube.com/watch?v=gYj8dleEAr4', title: 'Cream Ferret Cookie Beascuit & Topping Guide | Cookie Run Kingdom' },
  'Cream Soda Cookie': { url: 'https://www.youtube.com/watch?v=b2Y7m6LWoXw', title: 'Cream Soda Cookie Gear Guide | Cookie Run Kingdom' },
  'Crimson Coral Cookie': { url: 'https://www.youtube.com/watch?v=WxLVoBFx1Rw', title: 'Crimson Coral Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=WxLVoBFx1Rw', title: 'Crimson Coral Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-02-24' }, { url: 'https://www.youtube.com/watch?v=Y3I9ueM-ScA', title: 'Crimson Coral Cookie Toppings | TWO TOPPINGS | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2023-09-03' }] },
  'Crunchy Chip Cookie': { url: 'https://www.youtube.com/watch?v=_T0P0JmvARA', title: 'Crunchy Chip Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=_T0P0JmvARA', title: 'Crunchy Chip Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-06-21' }, { url: 'https://www.youtube.com/watch?v=SxUVYuRFwJc', title: 'Crunchy Chip Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2022-06-06' }] },
  'Dark Cacao Cookie': { url: 'https://www.youtube.com/watch?v=DJX44ZBn0jg', title: 'Dark Cacao Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=DJX44ZBn0jg', title: 'Dark Cacao Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-04-04' }, { url: 'https://www.youtube.com/watch?v=6xk9IbG58eg', title: 'Dark Cacao Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2022-07-18' }, { url: 'https://www.youtube.com/watch?v=I6ZnxyAvlyg', title: 'BEAT DARK CACAO | ??? Boss 14-30 Dark Mode | Citadel of Frozen Cliffs Guide | Cookie Run Kingdom', date: '2023-01-31' }, { url: 'https://www.youtube.com/watch?v=6KfOb1_MOVE', title: 'Boss Hunt Level C Stage 2 | Dark Cacao Cookie Guide | Cookie Run Kingdom', date: '2023-07-10' }, { url: 'https://www.youtube.com/watch?v=qxB1avviv0k', title: 'How to Get Awakened Dark Cacao Cookie F2P Guide | Cookie Run Kingdom', date: '2024-06-28' }] },
  'Dark Choco Cookie': { url: 'https://www.youtube.com/watch?v=rvhEnoKeHc0', title: 'Dark Choco Magic Candy', allVideos: [{ url: 'https://www.youtube.com/watch?v=rvhEnoKeHc0', title: 'Dark Choco Magic Candy', date: '2024-06-19' }, { url: 'https://www.youtube.com/watch?v=5yKpzvOYk-w', title: 'Dark Choco Cookie Magic Candy, Beascuit & Topping Guide', date: '2024-07-02' }, { url: 'https://www.youtube.com/watch?v=blQcekQ2bC4', title: 'Dark Choco Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-06-15' }, { url: 'https://www.youtube.com/watch?v=YV-HbbjW6hA', title: 'Dark Choco Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2022-01-21' }, { url: 'https://www.youtube.com/watch?v=ih7t_XtZdd4', title: 'SURVIVE DARK CHOCO!!! | 14-29 3 STAR Guide | Bitter Throne | Normal Mode | Cookie Run Kingdom', date: '2023-01-19' }] },
  'Dark Enchantress Cookie': { url: 'https://www.youtube.com/watch?v=DkG_afMpjyY', title: 'Dark Enchantress Cookie Gear Guide | Cookie Run Kingdom' },
  'Doughael Cookie': { url: 'https://www.youtube.com/watch?v=HklziH0UEds', title: 'Doughael Cookie Gear Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=HklziH0UEds', title: 'Doughael Cookie Gear Guide | Cookie Run Kingdom', date: '2025-09-12' }, { url: 'https://www.youtube.com/watch?v=QxX0pCr5TEQ', title: 'How to get Doughael F2P Guide | Cookie Run Kingdom', date: '2025-08-27' }] },
  'Elder Faerie Cookie': { url: 'https://www.youtube.com/watch?v=zFZpDm3-6XM', title: 'Elder Faerie Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=zFZpDm3-6XM', title: 'Elder Faerie Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-03-16' }, { url: 'https://www.youtube.com/watch?v=L2LFrdsNVdk', title: 'Faerie Kingdom Battle Preparation Guide | Elder Faerie & Matcha Ally Cookies | Cookie Run Kingdom', date: '2024-02-28' }] },
  'Espresso Cookie': { url: 'https://www.youtube.com/watch?v=4NIMJQkS_lY', title: 'DID I MAKE IT ?!? | Espresso Cookie | Magic Candy +10 | Cookie Run Kingdom | #short', allVideos: [{ url: 'https://www.youtube.com/watch?v=4NIMJQkS_lY', title: 'DID I MAKE IT ?!? | Espresso Cookie | Magic Candy +10 | Cookie Run Kingdom | #short', date: '2022-08-21' }, { url: 'https://www.youtube.com/watch?v=TIyODi_lgBA', title: 'Espresso Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-11-15' }] },
  'Eternal Sugar Cookie': { url: 'https://www.youtube.com/watch?v=JeLyNsZ3mSI', title: 'Eternal Sugar Cookie Gear Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=JeLyNsZ3mSI', title: 'Eternal Sugar Cookie Gear Guide | Cookie Run Kingdom', date: '2025-06-06' }, { url: 'https://www.youtube.com/watch?v=m6MYxuH2tno', title: 'How to Get Eternal Sugar Cookie F2P Guide | Cookie Run Kingdom', date: '2025-05-07' }] },
  'Financier Cookie': { url: 'https://www.youtube.com/watch?v=UnWFyf4lmyc', title: 'Financier Cookie gets a Magic Candy', allVideos: [{ url: 'https://www.youtube.com/watch?v=UnWFyf4lmyc', title: 'Financier Cookie gets a Magic Candy', date: '2024-01-04' }, { url: 'https://www.youtube.com/watch?v=-NVdCBwdol8', title: 'Financier Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-05-15' }, { url: 'https://www.youtube.com/watch?v=kt-wp1JSsF4', title: 'Financier Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2022-07-17' }] },
  'Fire Spirit Cookie': { url: 'https://www.youtube.com/watch?v=VaSziX0Ef4c', title: 'Fire Spirit Cookie Gear Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=VaSziX0Ef4c', title: 'Fire Spirit Cookie Gear Guide | Cookie Run Kingdom', date: '2025-05-04' }, { url: 'https://www.youtube.com/watch?v=CKX_0tCBDtk', title: 'How to Get Fire Spirit Cookie F2P Guide | Cookie Run Kingdom', date: '2025-04-09' }] },
  'Frilled Jellyfish Cookie': { url: 'https://www.youtube.com/watch?v=QcuSnFa3SXE', title: 'frilled jellyfish magic candy', allVideos: [{ url: 'https://www.youtube.com/watch?v=QcuSnFa3SXE', title: 'frilled jellyfish magic candy', date: '2024-10-30' }, { url: 'https://www.youtube.com/watch?v=g-HJFSZlzKU', title: 'Frilled Jellyfish Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-11-10' }, { url: 'https://www.youtube.com/watch?v=DFxMByz21ss', title: 'Frilled Jellyfish Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2023-09-09' }, { url: 'https://www.youtube.com/watch?v=dCMm6xOFmw8', title: 'FRILLED JELLYFISH COOKIES BINGO GUIDE | Tips & Tricks | Cookie Run Kingdom', date: '2023-09-13' }] },
  'Frost Queen Cookie': { url: 'https://www.youtube.com/watch?v=qp-t6dvJnZ8', title: 'Frost Queen Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=qp-t6dvJnZ8', title: 'Frost Queen Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-02-23' }, { url: 'https://www.youtube.com/watch?v=v1F6_HGCIsU', title: 'Frost Queen Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2022-01-07' }, { url: 'https://www.youtube.com/watch?v=wEDAkPanQEo', title: 'Ultimate Frost Queen Cookie Topping Guide | Cookie Run Kingdom', date: '2023-12-03' }, { url: 'https://www.youtube.com/watch?v=FPzcAkmHfyI', title: 'F2P How to Get Frost Queen Cookie | Fractal Crystal Droplets Guide | Cookie Run Kingdom', date: '2023-11-30' }] },
  'GingerBrave': { url: 'https://www.youtube.com/watch?v=AMaAo7T_XCs', title: 'Gingerbrave Operation Ovenbreak Guide | April Fools | Cookie Run Kingdom' },
  'Golden Cheese Cookie': { url: 'https://www.youtube.com/watch?v=1mBNbvD-56s', title: 'Golden Cheese Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=1mBNbvD-56s', title: 'Golden Cheese Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-01-26' }, { url: 'https://www.youtube.com/watch?v=8UDZgl7Ng7E', title: 'Awakened Golden Cheese Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-11-05' }, { url: 'https://www.youtube.com/watch?v=UgZs2MT9vqU', title: 'Golden Cheese Cookie Toppings | TWO OPTIONS | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2023-10-06' }, { url: 'https://www.youtube.com/watch?v=E2ttt1XyZyw', title: 'F2P How to Get Golden Cheese Cookie | Nether Gacha Guide | Cookie Run Kingdom', date: '2023-10-25' }, { url: 'https://www.youtube.com/watch?v=TzL7qfRU_jM', title: 'Golden Cheese Cookies Chest of Trophies Guide', date: '2024-10-30' }] },
  'Golden Osmanthus Cookie': { url: 'https://www.youtube.com/watch?v=FErx2qBXrIo', title: 'Golden Osmanthus Cookie Beascuit & Topping Guide | Cookie Run Kingdom' },
  'Grapefruit Cookie': { url: 'https://www.youtube.com/watch?v=7PulsuNxRF0', title: 'Grapefruit Cookie Gear Guide | Cookie Run Kingdom' },
  'Green Tea Mousse Cookie': { url: 'https://www.youtube.com/watch?v=K2d628W55dI', title: 'Green Tea Mousse Cookie Beascuit & Topping Guide | Cookie Run Kingdom' },
  'Hollyberry Cookie': { url: 'https://www.youtube.com/watch?v=rB5wqOWBVLw', title: 'Awakened Hollyberry Aegis Cookie Gear Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=rB5wqOWBVLw', title: 'Awakened Hollyberry Aegis Cookie Gear Guide | Cookie Run Kingdom', date: '2025-06-21' }, { url: 'https://www.youtube.com/watch?v=zPUo2gMUp_Q', title: 'Hollyberry Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-02-20' }, { url: 'https://www.youtube.com/watch?v=Zw1_vP-kTwo', title: 'Hollyberry Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2022-02-01' }, { url: 'https://www.youtube.com/watch?v=jI8O6JGD2kY', title: 'How to Get Awakened Aegis Hollyberry Cookie F2P Guide', date: '2025-06-04' }, { url: 'https://www.youtube.com/watch?v=faEr9zrpK6c', title: 'Hollyberry Cookies Chest of Trophies Guide', date: '2025-06-11' }] },
  'Jagae Cookie': { url: 'https://www.youtube.com/watch?v=Z7U-a6Rz62w', title: 'Jagae Cookie Gear Guide | Cookie Run Kingdom' },
  'Kouign-Amann Cookie': { url: 'https://www.youtube.com/watch?v=uDWf48U6E2s', title: 'Kouign-Amann Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=uDWf48U6E2s', title: 'Kouign-Amann Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2025-02-16' }, { url: 'https://www.youtube.com/watch?v=txj_e9Nci9k', title: 'Kouign-Amann Cookie | LIGHT TIP! | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2023-04-20' }] },
  'Latte Cookie': { url: 'https://www.youtube.com/watch?v=Vh4Yk968OIc', title: 'WE READY | Latte Cookie | Latte Magic Candy | Cookie Run Kingdom | #shorts | #short', allVideos: [{ url: 'https://www.youtube.com/watch?v=Vh4Yk968OIc', title: 'WE READY | Latte Cookie | Latte Magic Candy | Cookie Run Kingdom | #shorts | #short', date: '2023-05-04' }, { url: 'https://www.youtube.com/watch?v=cFMbQy-LX2g', title: 'Latte Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-11-04' }, { url: 'https://www.youtube.com/watch?v=wa87OOIjrr0', title: 'Latte Cookie | POISON TIP | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2023-05-15' }] },
  'Lemon Cookie': { url: 'https://www.youtube.com/watch?v=XwN1E6lOQKA', title: 'Lemon Cookie Gear Guide Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=XwN1E6lOQKA', title: 'Lemon Cookie Gear Guide Cookie Run Kingdom', date: '2025-07-02' }, { url: 'https://www.youtube.com/watch?v=2g_QiK6pvzY', title: 'Black Lemonade Cookie | DAMAGE TIP | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2023-07-22' }] },
  'Lime Cookie': { url: 'https://www.youtube.com/watch?v=3f0sdIhOc2w', title: 'Lime Cookie Gear Guide | Cookie Run Kingdom' },
  'Manju Cookie': { url: 'https://www.youtube.com/watch?v=ErQRGcrKsis', title: 'Manju Cookie Gear Guide | Cookie Run Kingdom' },
  'Marshmallow Bunny Cookie': { url: 'https://www.youtube.com/watch?v=vNRq542FeFA', title: 'Marshmallow Bunny Cookie Gear Guide | Cookie Run Kingdom' },
  'Menthol Cookie': { url: 'https://www.youtube.com/watch?v=Wi4hfh8SgZA', title: 'Menthol Cookie Gear Guide | Cookie Run Kingdom' },
  'Mercurial Knight Cookie': { url: 'https://www.youtube.com/watch?v=d2U-5lw7zVI', title: 'Mercurial Knight Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=d2U-5lw7zVI', title: 'Mercurial Knight Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-02-07' }, { url: 'https://www.youtube.com/watch?v=zEU6ZkWsDrs', title: 'Mercurial Knight Ally Skill Preparation Guide | Cookie Run Kingdom', date: '2024-03-04' }] },
  'Millennial Tree Cookie': { url: 'https://www.youtube.com/watch?v=1UIyrlaw3Yk', title: 'Millennial Tree Cookie Gear Guide | Cookie Run Kingdom' },
  'Mint Choco Cookie': { url: 'https://www.youtube.com/watch?v=mK4B7iMZVBU', title: 'Mint Choco Cookie Beascuit & Topping Guide | Cookie Run Kingdom' },
  'Mold Dough Cookie': { url: 'https://www.youtube.com/watch?v=W8NBoqiVJk8', title: 'Mold Dough Cookie Gear Guide | Cookie Run Kingdom' },
  'Moonlight Cookie': { url: 'https://www.youtube.com/watch?v=OVL_Sja-FNM', title: 'Moonlight Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=OVL_Sja-FNM', title: 'Moonlight Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-03-11' }, { url: 'https://www.youtube.com/watch?v=SlzixzeWTI0', title: 'LEGENDARY Moonlight Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2023-01-25' }, { url: 'https://www.youtube.com/watch?v=RyW85RGiBJA', title: 'How to Get Moonlight & Sea Fairy Cookie F2P Guide', date: '2024-08-14' }, { url: 'https://www.youtube.com/watch?v=hda3TcPmI5U', title: 'Moonlight Cookie Trial Grounds Guide | Eternal City of Wizards Stages 1-7', date: '2024-08-16' }, { url: 'https://www.youtube.com/watch?v=8R5VF7oGWjY', title: 'Moonlight Cookie Trial Grounds Stage 10 Guide | Beat Choco Planet', date: '2024-08-30' }] },
  'Mozzarella Cookie': { url: 'https://www.youtube.com/watch?v=AzTvT-pGk_k', title: 'Mozzarella Cookie Toppings | Radiant Tip | Topping Guide | Best Toppings | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=AzTvT-pGk_k', title: 'Mozzarella Cookie Toppings | Radiant Tip | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2023-11-07' }, { url: 'https://www.youtube.com/watch?v=c1_FN545DSg', title: 'HOW TO GET MOZZARELLA COOKIE | Virtual Mine Exploration Guide | Cookie Run Kingdom', date: '2023-11-04' }, { url: 'https://www.youtube.com/watch?v=K9f46aXJWFY', title: 'FIRST 10 FLOORS Mozzarella Cookie\'s Virtual Mine Exploration Guide | Cookie Run Kingdom', date: '2023-11-06' }, { url: 'https://www.youtube.com/watch?v=8YGwb4DYgFQ', title: 'PROMOTE! | Mozzarella Cookie\'s Virtual Mine Exploration | Floors 12 to 20 Guide | Cookie Run Kingdom', date: '2023-11-17' }] },
  'Mystic Flour Cookie': { url: 'https://www.youtube.com/watch?v=FmwvLSl1lqg', title: 'Mystic Flour Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=FmwvLSl1lqg', title: 'Mystic Flour Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-06-01' }, { url: 'https://www.youtube.com/watch?v=dRh76HYIrto', title: 'How to Get Mystic Flour Cookie F2P Guide | Cookie Run Kingdom', date: '2024-05-25' }] },
  'Nutmeg Tiger Cookie': { url: 'https://www.youtube.com/watch?v=oejZGlB91T4', title: 'Nutmeg Tiger Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=oejZGlB91T4', title: 'Nutmeg Tiger Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-10-02' }, { url: 'https://www.youtube.com/watch?v=n0aLfcgZh-8', title: 'F2P Nutmeg Tiger Cookie Boss Guide | Cookie Run Kingdom', date: '2024-10-06' }, { url: 'https://www.youtube.com/watch?v=LQzM3t3aKdk', title: 'How to get a Free Nutmeg Tiger Cookie | Virtual Mine Exploration Guide', date: '2024-10-19' }, { url: 'https://www.youtube.com/watch?v=HprTWxiaVTY', title: 'F2P Hard Mode Beat Nutmeg Tiger Cookie Boss Guide', date: '2024-11-02' }, { url: 'https://www.youtube.com/watch?v=HyieCStt0RY', title: 'F2P Beat Endless Strawberry Cake Tower Tray 150 | Nutmeg Tiger Cookie Guide', date: '2024-12-28' }] },
  'Okchun Cookie': { url: 'https://www.youtube.com/watch?v=xzPcaLRX1TA', title: 'Okchun Cookie Beascuit & Topping Guide | Cookie Run Kingdom' },
  'Orange Cookie': { url: 'https://www.youtube.com/watch?v=GKetDmj1LAM', title: 'Orange Cookie Gear Guide | Cookie Run Kingdom' },
  'Oyster Cookie': { url: 'https://www.youtube.com/watch?v=uQbk1T4LR7k', title: 'Oyster Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom' },
  'Parfait Cookie': { url: 'https://www.youtube.com/watch?v=BW_dgvHUixM', title: 'PARFAIT COOKIE MAGIC CANDY | Cookie Run Kingdom | #shorts | #short', allVideos: [{ url: 'https://www.youtube.com/watch?v=BW_dgvHUixM', title: 'PARFAIT COOKIE MAGIC CANDY | Cookie Run Kingdom | #shorts | #short', date: '2023-07-25' }, { url: 'https://www.youtube.com/watch?v=S6MOZcQ84Bg', title: 'PARFAIT COOKIE +10 MAGIC CANDY FAIL | Cookie Run Kingdom | #shorts | #short', date: '2023-08-01' }, { url: 'https://www.youtube.com/watch?v=NjgM5NKZ1dk', title: 'PARFAIT COOKIE +10 MAGIC CANDY SUCCESS | Cookie Run Kingdom | #shorts | #short', date: '2023-08-02' }, { url: 'https://www.youtube.com/watch?v=_SgJ4svNI_w', title: 'Parfait Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2022-06-19' }] },
  'Pastry Cookie': { url: 'https://www.youtube.com/watch?v=gZe5vkGNaB4', title: 'Pastry Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=gZe5vkGNaB4', title: 'Pastry Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-09-27' }, { url: 'https://www.youtube.com/watch?v=nCSUH5kuhF4', title: 'Pastry Cookie Toppings  |Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2022-06-11' }] },
  'Pavlova Cookie': { url: 'https://www.youtube.com/watch?v=E7Cb5mo41ng', title: 'Pavlova Cookie Gear Guide | Cookie Run Kingdom' },
  'Peach Blossom Cookie': { url: 'https://www.youtube.com/watch?v=APLBxLS2nvs', title: 'Peach Blossom Cookie Beascuit & Topping Guide | Cookie Run Kingdom' },
  'Peppermint Cookie': { url: 'https://www.youtube.com/watch?v=SXcNi_nOOdg', title: 'peppermint cookie magic candy', allVideos: [{ url: 'https://www.youtube.com/watch?v=SXcNi_nOOdg', title: 'peppermint cookie magic candy', date: '2024-10-16' }, { url: 'https://www.youtube.com/watch?v=6zJOpaKAMvQ', title: 'Peppermint Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-10-17' }, { url: 'https://www.youtube.com/watch?v=LhqJ4uJmfSM', title: 'Peppermint Cookie Toppings | KEY CONSIDERATIONS | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2023-08-10' }] },
  'Pitaya Dragon Cookie': { url: 'https://www.youtube.com/watch?v=Fkm14OkG28M', title: 'Pitaya Dragon Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=Fkm14OkG28M', title: 'Pitaya Dragon Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-02-21' }, { url: 'https://www.youtube.com/watch?v=_EBUzGDcl3E', title: 'Pitaya Dragon Cookie | You may be surprised! | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2023-07-02' }] },
  'Poison Mushroom Cookie': { url: 'https://www.youtube.com/watch?v=VFdlWfoyEkA', title: 'poison mushroom calculator' },
  'Pom-Pom Dough Cookie': { url: 'https://www.youtube.com/watch?v=qEMhfFDellU', title: 'Pom-Pom Dough Cookie Gear Guide | Cookie Run Kingdom' },
  'Pomegranate Cookie': { url: 'https://www.youtube.com/watch?v=OnpF_UP-ZFg', title: 'Pomegranate Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=OnpF_UP-ZFg', title: 'Pomegranate Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2022-07-06' }, { url: 'https://www.youtube.com/watch?v=XRnq599cme8', title: 'Decadent Choco Cake Tower Tray 5 | Pomegranate Scarab Guide | Cookie Run Kingdom', date: '2024-04-26' }] },
  'Pudding a la Mode Cookie': { url: 'https://www.youtube.com/watch?v=eMB2TWpo44s', title: 'Pudding a la Mode Cookie Beascuit & Topping Guide | Cookie Run Kingdom' },
  'Pumpkin Pie Cookie': { url: 'https://www.youtube.com/watch?v=A13OmsA5qw0', title: 'Pumpkin Pie Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom' },
  'Pure Vanilla Cookie': { url: 'https://www.youtube.com/watch?v=fCcXvBh-r38', title: 'Pure Vanilla Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=fCcXvBh-r38', title: 'Pure Vanilla Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-02-19' }, { url: 'https://www.youtube.com/watch?v=Y_4RUnbOGj0', title: 'Awakened Pure Vanilla Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2025-03-03' }, { url: 'https://www.youtube.com/watch?v=6pZlaa6MuYE', title: 'Pure Vanilla Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2022-06-30' }, { url: 'https://www.youtube.com/watch?v=f4AmnMaKdlQ', title: 'How to Get Awakened Pure Vanilla Cookie F2P Guide | Cookie Run Kingdom', date: '2025-02-12' }] },
  'Raspberry Cookie': { url: 'https://www.youtube.com/watch?v=9sy5yPRQGRw', title: 'Raspberry Cookie Gear Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=9sy5yPRQGRw', title: 'Raspberry Cookie Gear Guide | Cookie Run Kingdom', date: '2025-06-10' }, { url: 'https://www.youtube.com/watch?v=oLs87G_QW6E', title: 'Raspberry Cookie Improvements & Magic Candy', date: '2025-06-03' }, { url: 'https://www.youtube.com/watch?v=Lw67SxpCCOo', title: 'BEAT Stage 11-27 | Three Teams! | Guide on how to beat Raspberry Cookie | Cookie Run Kingdom', date: '2022-05-05' }, { url: 'https://www.youtube.com/watch?v=A_kRVPYPzoo', title: 'ALL EPICS | BEAT Stage 11-27 | Guide on how to beat Raspberry Cookie | Cookie Run Kingdom', date: '2022-05-16' }, { url: 'https://www.youtube.com/watch?v=tmADJIA6MPo', title: 'DESTROY Master Mode 1-5 | Glistening Raspberry Forest | Guide to 3 STAR | Cookie Run Kingdom', date: '2023-01-07' }] },
  'Rebel Cookie': { url: 'https://www.youtube.com/watch?v=2qoDRDKajMQ', title: 'Rebel Cookie Topping Guide | Cookie Run Kingdom' },
  'Red Osmanthus Cookie': { url: 'https://www.youtube.com/watch?v=W1zwApcMqqk', title: 'Red Osmanthus Cookie Beascuit & Topping Guide | Cookie Run Kingdom' },
  'Red Velvet Cookie': { url: 'https://www.youtube.com/watch?v=aqDyLbwiodE', title: 'BEEFED UP DAMAGE | Red Velvet Dragon Guide | 50m+ Damage | x2 Teams | Best Team | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=aqDyLbwiodE', title: 'BEEFED UP DAMAGE | Red Velvet Dragon Guide | 50m+ Damage | x2 Teams | Best Team | Cookie Run Kingdom', date: '2023-03-18' }, { url: 'https://www.youtube.com/watch?v=bMFG5SD9gvI', title: 'BOOM | Red Velvet Dragon Guide | x2 Teams | Epic Team | Best Prune Juice Team | Cookie Run Kingdom', date: '2023-04-08' }, { url: 'https://www.youtube.com/watch?v=DSm8xYySQfc', title: 'RAW DAMAGE | Red Velvet Dragon Guide | x3 Teams | Best Royal Margin Team | Cookie Run Kingdom', date: '2023-05-27' }, { url: 'https://www.youtube.com/watch?v=b8mJX3hoc14', title: 'BEST DAMAGE & AUTO Red Velvet Dragon Guide | Cookie Run Kingdom', date: '2024-06-02' }, { url: 'https://www.youtube.com/watch?v=_3qPOjcJqXg', title: 'Red Velvet Dragon & Avatar of Destiny Guide | Destiny\'s Flight 8-1 | Cookie Run Kingdom', date: '2024-09-05' }] },
  'Salt Cellar Cookie': { url: 'https://www.youtube.com/watch?v=fm_eWf7_6Vc', title: 'Salt Cellar Cookie Build | Best Gear & Toppings Guide' },
  'Sea Fairy Cookie': { url: 'https://www.youtube.com/watch?v=doDl71tioXw', title: 'Sea Fairy Cookie Gear Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=doDl71tioXw', title: 'Sea Fairy Cookie Gear Guide | Cookie Run Kingdom', date: '2025-08-28' }, { url: 'https://www.youtube.com/watch?v=hOuHkhynSGI', title: 'Sea Fairy Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-04-05' }, { url: 'https://www.youtube.com/watch?v=xf3jxJ8VDj4', title: 'Sea Fairy Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2022-01-18' }, { url: 'https://www.youtube.com/watch?v=jdoF2xcElqc', title: 'YEARNING SEA TRIAL GROUNDS GUIDE | Stage 1 to 7 | Sea Fairy Crystal Jam EPIC | Cookie Run Kingdom', date: '2023-08-17' }, { url: 'https://www.youtube.com/watch?v=RyW85RGiBJA', title: 'How to Get Moonlight & Sea Fairy Cookie F2P Guide', date: '2024-08-14' }] },
  'Seltzer Cookie': { url: 'https://www.youtube.com/watch?v=TRSCYXgPIzs', title: 'Seltzer Cookie Gear Guide | Cookie Run Kingdom' },
  'Shadow Milk Cookie': { url: 'https://www.youtube.com/watch?v=d1WIE_lwmEs', title: 'Shadow Milk Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=d1WIE_lwmEs', title: 'Shadow Milk Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2025-02-07' }, { url: 'https://www.youtube.com/watch?v=6_aMEL5S-XQ', title: 'Shadow Milk Cookie\'s Nasty Surprise Boss Guide | Cookie Run Kingdom', date: '2024-02-08' }, { url: 'https://www.youtube.com/watch?v=BZygXhaxKD8', title: 'F2P Beat Endless Strawberry Cake Tower Tray 120 | Shadow Milk Cookies Nasty Surprise Guide', date: '2024-12-07' }, { url: 'https://www.youtube.com/watch?v=A5nSO4kb0x4', title: 'How to Get Shadow Milk Cookie F2P Guide | Cookie Run Kingdom', date: '2025-01-15' }] },
  'Sherbet Cookie': { url: 'https://www.youtube.com/watch?v=zNXcYKHJ3bY', title: 'Sherbet Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom' },
  'Shining Glitter Cookie': { url: 'https://www.youtube.com/watch?v=cd8S1dU5rQk', title: 'SAVING SHINING GLITTER COOKIE 1 GUIDE | Dark Mode 3 Star Auto Team | Cookie Run Kingdom' },
  'Silent Salt Cookie': { url: 'https://www.youtube.com/watch?v=MMG9viVIzGo', title: 'Silent Salt Cookie Build | Best Gear & Toppings Guide', allVideos: [{ url: 'https://www.youtube.com/watch?v=MMG9viVIzGo', title: 'Silent Salt Cookie Build | Best Gear & Toppings Guide', date: '2025-09-25' }, { url: 'https://www.youtube.com/watch?v=it-1hQCPSPQ', title: 'F2P Guide | How to Unlock Silent Salt Cookie Fast', date: '2025-09-24' }] },
  'Silverbell Cookie': { url: 'https://www.youtube.com/watch?v=s8Ct4GpMaa0', title: 'Silverbell Cookie Beascuit & Topping Guide | Cookie Run Kingdom FINAL', allVideos: [{ url: 'https://www.youtube.com/watch?v=s8Ct4GpMaa0', title: 'Silverbell Cookie Beascuit & Topping Guide | Cookie Run Kingdom FINAL', date: '2024-01-19' }, { url: 'https://www.youtube.com/watch?v=IWi7RslTDcY', title: 'Silverbell Cookie Boss Guide | Cookie Run Kingdom', date: '2024-01-20' }] },
  'Smoked Cheese Cookie': { url: 'https://www.youtube.com/watch?v=foIqEo89g90', title: 'Smoked Cheese Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=foIqEo89g90', title: 'Smoked Cheese Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-10-30' }, { url: 'https://www.youtube.com/watch?v=63U4irlbqis', title: 'Smoked Cheese Guide | 18-30 3 Star Auto Guide | Cookie Run Kingdom', date: '2024-01-16' }] },
  'Sorbet Shark Cookie': { url: 'https://www.youtube.com/watch?v=EA9a7M9tbhI', title: 'SORBET SHARK MAGIC CANDY Cookie Run Kingdom #shorts #short', allVideos: [{ url: 'https://www.youtube.com/watch?v=EA9a7M9tbhI', title: 'SORBET SHARK MAGIC CANDY Cookie Run Kingdom #shorts #short', date: '2024-01-25' }, { url: 'https://www.youtube.com/watch?v=VlYPSSxM9wc', title: 'Sorbet Shark Cookie Toppings | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2022-03-23' }] },
  'Sparkling Cookie': { url: 'https://www.youtube.com/watch?v=rlUFkpqpKbk', title: 'Sparkling Cookie Beascuit & Topping Guide | Cookie Run Kingdom' },
  'Star Coral Cookie': { url: 'https://www.youtube.com/watch?v=4Mp_Ox8IOQQ', title: 'Star Coral Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=4Mp_Ox8IOQQ', title: 'Star Coral Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-08-15' }, { url: 'https://www.youtube.com/watch?v=g3C3zx72920', title: 'Avatar of Destiny Guide Star | Star Coral Cookie Team | Cookie Run Kingdom', date: '2024-08-28' }] },
  'Stardust Cookie': { url: 'https://www.youtube.com/watch?v=LvUAQKZKBBc', title: 'Stardust Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=LvUAQKZKBBc', title: 'Stardust Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-02-25' }, { url: 'https://www.youtube.com/watch?v=YOur9JOxXhQ', title: 'Stardust Cookie Toppings | NUKER TIP | Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2023-04-01' }] },
  'Stormbringer Cookie': { url: 'https://www.youtube.com/watch?v=kzXCYYJqqD8', title: 'Stormbringer Cookie Gear Guide Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=kzXCYYJqqD8', title: 'Stormbringer Cookie Gear Guide Cookie Run Kingdom', date: '2025-07-02' }, { url: 'https://www.youtube.com/watch?v=4F9OMzybr2A', title: 'Stormbringer Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-05-03' }, { url: 'https://www.youtube.com/watch?v=pUvf_W-LKh8', title: 'How to Get Stormbringer Cookie F2P Guide | Cookie Run Kingdom', date: '2024-04-24' }, { url: 'https://www.youtube.com/watch?v=amWGXmI0suw', title: 'F2P Trays 1 to 10 Decadent Choco Cake Tower Guide | No Stormbringer | Cookie Run Kingdom', date: '2024-05-02' }, { url: 'https://www.youtube.com/watch?v=FHv9CXBWd58', title: 'F2P Trays 11 to 15 Decadent Choco Cake Tower Guide | No Stormbringer | Cookie Run Kingdom', date: '2024-05-19' }] },
  'Strawberry Crepe Cookie': { url: 'https://www.youtube.com/watch?v=IJiBZZ1y31A', title: 'strawberry crepe magic candy', allVideos: [{ url: 'https://www.youtube.com/watch?v=IJiBZZ1y31A', title: 'strawberry crepe magic candy', date: '2024-03-26' }, { url: 'https://www.youtube.com/watch?v=6D_bWstlhOs', title: 'Strawberry Crepe Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-04-14' }, { url: 'https://www.youtube.com/watch?v=fNBS45dIlWY', title: 'Strawberry Crepe Cookie Toppings Topping Guide Best Toppings Cookie Run Kingdom', date: '2022-07-04' }, { url: 'https://www.youtube.com/watch?v=1xX4YCk-uzU', title: 'Strawberry Crepe Cookies Cake Shop Guide | Cookie Run Kingdom', date: '2024-04-16' }, { url: 'https://www.youtube.com/watch?v=mgWvNoYiKX4', title: 'Decadent Choco Cake Tower Tray 13 | Strawberry Crepe Cookie Guide | Cookie Run Kingdom', date: '2024-05-11' }] },
  'Street Urchin Cookie': { url: 'https://www.youtube.com/watch?v=ygDQI_MD9Lo', title: 'Street Urchin & Magic Candy April 9 Update | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=ygDQI_MD9Lo', title: 'Street Urchin & Magic Candy April 9 Update | Cookie Run Kingdom', date: '2024-04-08' }, { url: 'https://www.youtube.com/watch?v=J2qvsaacfKk', title: 'Street Urchin Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-04-09' }] },
  'Sugar Swan Cookie': { url: 'https://www.youtube.com/watch?v=Z0PBbCBCD8A', title: 'Boss Hunt Level C Stage 1 | Remorseful Sugar Swan Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=Z0PBbCBCD8A', title: 'Boss Hunt Level C Stage 1 | Remorseful Sugar Swan Guide | Cookie Run Kingdom', date: '2023-07-09' }, { url: 'https://www.youtube.com/watch?v=mwBgZ2Vj0pA', title: 'Decadent Choco Cake Tower Tray 8 | Remorseful Sugar Swan Guide | Cookie Run Kingdom', date: '2024-04-27' }, { url: 'https://www.youtube.com/watch?v=ZDxUmUq5RIo', title: 'HIDDEN DECK | F2P Beat Stage 6 Remorseful Sugar Swan Boss Rush Guide', date: '2025-05-19' }, { url: 'https://www.youtube.com/watch?v=MSE7mhFccTM', title: 'F2P Beat Stage 16 S Remorseful Sugar Swan Boss Rush Guide', date: '2025-05-29' }, { url: 'https://www.youtube.com/watch?v=wfWTSIPVBk4', title: 'F2P Beat Endless Strawberry Cake Tower Tray 170 | Remorseful Sugar Swan Guide', date: '2025-07-14' }] },
  'Sugarfly Cookie': { url: 'https://www.youtube.com/watch?v=m2zpZkLmFX8', title: 'Sugarfly Cookie Gear Guide | Cookie Run Kingdom' },
  'Twizzly Gummy Cookie': { url: 'https://www.youtube.com/watch?v=Zkv4Rt12LLo', title: 'Twizzly Gummy Cookie Beascuit & Topping Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=Zkv4Rt12LLo', title: 'Twizzly Gummy Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-05-14' }, { url: 'https://www.youtube.com/watch?v=em-C2UZjeoI', title: 'Twizzly Gummy Cookie Toppings |Topping Guide | Best Toppings | Cookie Run Kingdom', date: '2022-06-29' }] },
  'Venom Dough Cookie': { url: 'https://www.youtube.com/watch?v=Ajjl-ATnNaI', title: 'Venom Dough Cookie Gear Guide | Cookie Run Kingdom' },
  'Wedding Cake Cookie': { url: 'https://www.youtube.com/watch?v=572mcEI6aFw', title: 'Wedding Cake Cookie Beascuit & Topping Guide | Cookie Run Kingdom' },
  'White Lily Cookie': { url: 'https://www.youtube.com/watch?v=niy0puWNkdI', title: 'Awakened White Lily Cookie Gear Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=niy0puWNkdI', title: 'Awakened White Lily Cookie Gear Guide | Cookie Run Kingdom', date: '2025-11-16' }, { url: 'https://www.youtube.com/watch?v=tDGe14nw5Tc', title: 'White Lily Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-01-28' }, { url: 'https://www.youtube.com/watch?v=R77FH8ckcP4', title: 'How to Get White Lily Cookie F2P Guide | Cookie Run Kingdom', date: '2024-01-19' }, { url: 'https://www.youtube.com/watch?v=7dP5OUlWgHk', title: 'White Lily Cookie\'s Journey Guide | Cookie Run Kingdom', date: '2024-01-25' }, { url: 'https://www.youtube.com/watch?v=BOJNeSzbanI', title: 'Waste Pipes Guide | Ally Skill White Lily Cookie | Faerie Kingdom Battle | Cookie Run Kingdom', date: '2024-03-07' }] },
  'Wildberry Cookie': { url: 'https://www.youtube.com/watch?v=xp8GsvUuc38', title: 'NEW UPDATE JOKERS | June 21 | Tea Knight Cookie & Wildberry Cookie Magic Candy | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=xp8GsvUuc38', title: 'NEW UPDATE JOKERS | June 21 | Tea Knight Cookie & Wildberry Cookie Magic Candy | Cookie Run Kingdom', date: '2023-06-22' }, { url: 'https://www.youtube.com/watch?v=UBY5g600rwg', title: 'SHIELDS UP | Wildberry Cookie Magic Candy | Cookie Run Kingdom | #shorts | #short', date: '2023-07-03' }, { url: 'https://www.youtube.com/watch?v=2_BLSgFVYqk', title: 'BEEFY FAIL | Wildberry Cookie Magic Candy +10 | EP2 | Cookie Run Kingdom #shorts #short', date: '2023-09-04' }, { url: 'https://www.youtube.com/watch?v=EMnn6bgvwFY', title: 'BEEFY FAIL | Wildberry Cookie Magic Candy +10 | EP1 | Cookie Run Kingdom #shorts #short', date: '2023-09-04' }, { url: 'https://www.youtube.com/watch?v=pbgbGOpyET8', title: 'BEEFY FAIL | Wildberry Cookie Magic Candy +10 | EP4 | Cookie Run Kingdom #shorts #short', date: '2023-09-06' }] },
  'Wind Archer Cookie': { url: 'https://www.youtube.com/watch?v=DLI6Up__o-0', title: 'Wind Archer Cookie Gear Guide | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=DLI6Up__o-0', title: 'Wind Archer Cookie Gear Guide | Cookie Run Kingdom', date: '2025-12-24' }, { url: 'https://www.youtube.com/watch?v=neoVP8gj2gw', title: 'Wind Archer Cookie Beascuit & Topping Guide | Cookie Run Kingdom', date: '2024-09-10' }, { url: 'https://www.youtube.com/watch?v=9Ece6E538M4', title: 'How to Get Wind Archer Cookie F2P Guide | Cookie Run Kingdom', date: '2024-09-04' }, { url: 'https://www.youtube.com/watch?v=PMjGeWjiHgY', title: 'Wind Archer Cookies Trial Grounds Guide | Dessert Paradise of Life', date: '2025-12-21' }, { url: 'https://www.youtube.com/watch?v=PtHCrDo89sw', title: 'Wind Archer Cookies Trial Ground Stage 10 Guide', date: '2025-12-24' }] },
  'Wizard Cookie': { url: 'https://www.youtube.com/watch?v=wq8pV7Tlb4g', title: 'BEAT Episode 11-23 | Guide on how to beat Strawberry & Wizard Cookie | Cookie Run Kingdom', allVideos: [{ url: 'https://www.youtube.com/watch?v=wq8pV7Tlb4g', title: 'BEAT Episode 11-23 | Guide on how to beat Strawberry & Wizard Cookie | Cookie Run Kingdom', date: '2022-02-20' }, { url: 'https://www.youtube.com/watch?v=iN6T90R8SOQ', title: 'RAGING DREAM CONDUCTOR | 15-30 Dark Mode | Shaded Wizard\'s Way Station Guide | Cookie Run Kingdom', date: '2023-01-29' }, { url: 'https://www.youtube.com/watch?v=jWueMA03RAc', title: 'MOUSE IN DA HOUSE! | 3 Star Dark Mode 16-10 | Eternal City of Wizards Guide | Cookie Run Kingdom', date: '2023-02-28' }, { url: 'https://www.youtube.com/watch?v=9utb48s2UVQ', title: 'STOP THE CLOCK! | 3 Star Dark Mode 16-14 | Eternal City of Wizards Guide | Cookie Run Kingdom', date: '2023-03-01' }, { url: 'https://www.youtube.com/watch?v=hda3TcPmI5U', title: 'Moonlight Cookie Trial Grounds Guide | Eternal City of Wizards Stages 1-7', date: '2024-08-16' }] },
};

// Cookie portrait images (local)
const IMAGE_URLS: Record<string, string> = {
  'Affogato Cookie': '/images/cookies/affogato-cookie.png',
  'Agar Agar Cookie': '/images/cookies/agar-agar-cookie.png',
  'Almond Cookie': '/images/cookies/almond-cookie.png',
  'Black Forest Cookie': '/images/cookies/black-forest-cookie.png',
  'Black Pearl Cookie': '/images/cookies/black-pearl-cookie.png',
  'Black Sapphire Cookie': '/images/cookies/black-sapphire-cookie.png',
  'Burning Spice Cookie': '/images/cookies/burning-spice-cookie.png',
  'Camellia Cookie': '/images/cookies/camellia-cookie.png',
  'Candy Apple Cookie': '/images/cookies/candy-apple-cookie.png',
  'Candy Diver Cookie': '/images/cookies/candy-diver-cookie.png',
  'Capsaicin Cookie': '/images/cookies/capsaicin-cookie.png',
  'Caramel Arrow Cookie': '/images/cookies/caramel-arrow-cookie.png',
  'Charcoal Cookie': '/images/cookies/charcoal-cookie.png',
  'Chess Cocoa Cookie': '/images/cookies/chess-cocoa-cookie.png',
  'Choco Drizzle Cookie': '/images/cookies/choco-drizzle-cookie.png',
  'Clotted Cream Cookie': '/images/cookies/clotted-cream-cookie.png',
  'Cloud Haetae Cookie': '/images/cookies/cloud-haetae-cookie.png',
  'Cream Ferret Cookie': '/images/cookies/cream-ferret-cookie.png',
  'Cream Soda Cookie': '/images/cookies/cream-soda-cookie.png',
  'Crimson Coral Cookie': '/images/cookies/crimson-coral-cookie.png',
  'Crunchy Chip Cookie': '/images/cookies/crunchy-chip-cookie.png',
  'Dark Cacao Cookie': '/images/cookies/dark-cacao-cookie.png',
  'Dark Choco Cookie': '/images/cookies/dark-choco-cookie.png',
  'Dark Enchantress Cookie': '/images/cookies/dark-enchantress-cookie.png',
  'Doughael Cookie': '/images/cookies/doughael-cookie.png',
  'Elder Faerie Cookie': '/images/cookies/elder-faerie-cookie.png',
  'Espresso Cookie': '/images/cookies/espresso-cookie.png',
  'Eternal Sugar Cookie': '/images/cookies/eternal-sugar-cookie.png',
  'Financier Cookie': '/images/cookies/financier-cookie.png',
  'Fire Spirit Cookie': '/images/cookies/fire-spirit-cookie.png',
  'Frilled Jellyfish Cookie': '/images/cookies/frilled-jellyfish-cookie.png',
  'Frost Queen Cookie': '/images/cookies/frost-queen-cookie.png',
  'GingerBrave': '/images/cookies/gingerbrave.png',
  'Golden Cheese Cookie': '/images/cookies/golden-cheese-cookie.png',
  'Golden Osmanthus Cookie': '/images/cookies/golden-osmanthus-cookie.png',
  'Grapefruit Cookie': '/images/cookies/grapefruit-cookie.png',
  'Green Tea Mousse Cookie': '/images/cookies/green-tea-mousse-cookie.png',
  'Hollyberry Cookie': '/images/cookies/hollyberry-cookie.png',
  'Jagae Cookie': '/images/cookies/jagae-cookie.png',
  'Knight Cookie': '/images/cookies/knight-cookie.png',
  'Latte Cookie': '/images/cookies/latte-cookie.png',
  'Lemon Cookie': '/images/cookies/lemon-cookie.png',
  'Lime Cookie': '/images/cookies/lime-cookie.png',
  'Manju Cookie': '/images/cookies/manju-cookie.png',
  'Marshmallow Bunny Cookie': '/images/cookies/marshmallow-bunny-cookie.png',
  'Menthol Cookie': '/images/cookies/menthol-cookie.png',
  'Mercurial Knight Cookie': '/images/cookies/mercurial-knight-cookie.png',
  'Milk Cookie': '/images/cookies/milk-cookie.png',
  'Millennial Tree Cookie': '/images/cookies/millennial-tree-cookie.png',
  'Mint Choco Cookie': '/images/cookies/mint-choco-cookie.png',
  'Mold Dough Cookie': '/images/cookies/mold-dough-cookie.png',
  'Moonlight Cookie': '/images/cookies/moonlight-cookie.png',
  'Mozzarella Cookie': '/images/cookies/mozzarella-cookie.png',
  'Mystic Flour Cookie': '/images/cookies/mystic-flour-cookie.png',
  'Nutmeg Tiger Cookie': '/images/cookies/nutmeg-tiger-cookie.png',
  'Okchun Cookie': '/images/cookies/okchun-cookie.png',
  'Orange Cookie': '/images/cookies/orange-cookie.png',
  'Oyster Cookie': '/images/cookies/oyster-cookie.png',
  'Parfait Cookie': '/images/cookies/parfait-cookie.png',
  'Pastry Cookie': '/images/cookies/pastry-cookie.png',
  'Pavlova Cookie': '/images/cookies/pavlova-cookie.png',
  'Peach Blossom Cookie': '/images/cookies/peach-blossom-cookie.png',
  'Peppermint Cookie': '/images/cookies/peppermint-cookie.png',
  'Pitaya Dragon Cookie': '/images/cookies/pitaya-dragon-cookie.png',
  'Poison Mushroom Cookie': '/images/cookies/poison-mushroom-cookie.png',
  'Pom-Pom Dough Cookie': '/images/cookies/pom-pom-dough-cookie.png',
  'Pomegranate Cookie': '/images/cookies/pomegranate-cookie.png',
  'Pumpkin Pie Cookie': '/images/cookies/pumpkin-pie-cookie.png',
  'Pure Vanilla Cookie': '/images/cookies/pure-vanilla-cookie.png',
  'Raspberry Cookie': '/images/cookies/raspberry-cookie.png',
  'Rebel Cookie': '/images/cookies/rebel-cookie.png',
  'Red Osmanthus Cookie': '/images/cookies/red-osmanthus-cookie.png',
  'Red Velvet Cookie': '/images/cookies/red-velvet-cookie.png',
  'Salt Cellar Cookie': '/images/cookies/salt-cellar-cookie.png',
  'Sea Fairy Cookie': '/images/cookies/sea-fairy-cookie.png',
  'Seltzer Cookie': '/images/cookies/seltzer-cookie.png',
  'Shadow Milk Cookie': '/images/cookies/shadow-milk-cookie.png',
  'Sherbet Cookie': '/images/cookies/sherbet-cookie.png',
  'Shining Glitter Cookie': '/images/cookies/shining-glitter-cookie.png',
  'Silent Salt Cookie': '/images/cookies/silent-salt-cookie.png',
  'Silverbell Cookie': '/images/cookies/silverbell-cookie.png',
  'Smoked Cheese Cookie': '/images/cookies/smoked-cheese-cookie.png',
  'Sorbet Shark Cookie': '/images/cookies/sorbet-shark-cookie.png',
  'Sparkling Cookie': '/images/cookies/sparkling-cookie.png',
  'Star Coral Cookie': '/images/cookies/star-coral-cookie.png',
  'Stardust Cookie': '/images/cookies/stardust-cookie.png',
  'Stormbringer Cookie': '/images/cookies/stormbringer-cookie.png',
  'Strawberry Crepe Cookie': '/images/cookies/strawberry-crepe-cookie.png',
  'Street Urchin Cookie': '/images/cookies/street-urchin-cookie.png',
  'Sugarfly Cookie': '/images/cookies/sugarfly-cookie.png',
  'Twizzly Gummy Cookie': '/images/cookies/twizzly-gummy-cookie.png',
  'Venom Dough Cookie': '/images/cookies/venom-dough-cookie.png',
  'Wedding Cake Cookie': '/images/cookies/wedding-cake-cookie.png',
  'White Lily Cookie': '/images/cookies/white-lily-cookie.png',
  'Wildberry Cookie': '/images/cookies/wildberry-cookie.png',
  'Wind Archer Cookie': '/images/cookies/wind-archer-cookie.png',
  'Wizard Cookie': '/images/cookies/wizard-cookie.png',
};



// Build data from the "Overall Builds" supporting document
const BUILD_DATA: Record<string, CookieBuild> = {
  'Dark Cacao Cookie': { beascuit: 'Tainted Dark Chewy', beascuitAttunes: 'DMGRB x3', toppings: 'Gambit Chocolate x5', toppingSubstats: 'CD + DMGR + ATK + DMGRB', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Golden Cheese Cookie': { beascuit: 'Legendary Light', beascuitAttunes: 'DMGRB x4', toppings: 'Radiant Cheese Raspberry x5', toppingSubstats: 'DMGRB + ATK + CD', tart: 'Raspberry', tartStat: 'Attack' },
  'Hollyberry Cookie': { beascuit: 'Legendary Hard', beascuitAttunes: 'HP x4', toppings: 'Passionate Almond x5', toppingSubstats: 'CD/35% + DMGR + HP', tart: 'Almond', tartStat: 'DMG Resist' },
  'Pure Vanilla Cookie': { beascuit: 'Tainted Gleaming Sweet', beascuitAttunes: 'DMGRB x3 + CD x1', toppings: 'Truthful Raspberry x5', toppingSubstats: 'DMGR/50% + HP/30% + CD/15%', tart: 'Raspberry', tartStat: 'Attack' },
  'White Lily Cookie': { beascuit: 'Legendary Spicy', beascuitAttunes: 'DMGRB x4', toppings: 'Blooming Raspberry x5', toppingSubstats: 'CD + DMGR + ATK', tart: 'Raspberry', tartStat: 'Attack' },
  'Burning Spice Cookie': { beascuit: 'Tainted Burning Chewy', beascuitAttunes: 'DMGRB x3', toppings: 'Destructive Raspberry x5', toppingSubstats: 'ATK + ATKS + DMGR + CD', tart: 'Raspberry', tartStat: 'Attack' },
  'Eternal Sugar Cookie': { beascuit: 'Legendary Poisonous Spicy', beascuitAttunes: 'Poison DMG x4', toppings: 'Indolent Raspberry x5', toppingSubstats: 'DMGRB + CD/18% + ATK', tart: 'Raspberry', tartStat: 'Attack' },
  'Mystic Flour Cookie': { beascuit: 'Legendary Sweet', beascuitAttunes: 'CD x2 + ATK x2', toppings: 'Gambit Chocolate x5', toppingSubstats: 'CD/40% + DMGR + HP', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Shadow Milk Cookie': { beascuit: 'Legendary Zesty', beascuitAttunes: 'DMGRB x4', toppings: 'Deceitful Chocolate x5', toppingSubstats: 'ATK + CD + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Silent Salt Cookie': { beascuit: 'Legendary Crispy', beascuitAttunes: 'DMGRB x4', toppings: 'Silent Raspberry x5', toppingSubstats: 'ATK + CD/23% + DMGR/25% + HP', tart: 'Raspberry', tartStat: 'Attack' },
  'Dark Enchantress Cookie': { beascuit: 'Legendary Zesty', beascuitAttunes: 'DMGRB x4', toppings: 'Looming Dark Raspberry x5', toppingSubstats: 'ATK/90% + CD/12% + DMGR', tart: 'Raspberry', tartStat: 'Attack' },
  'Black Pearl Cookie': { beascuit: 'Legendary Crispy', beascuitAttunes: 'DMGRB x4', toppings: 'Sea Salt Raspberry x5', toppingSubstats: 'DMGR + CD/20% + ATK', tart: 'Raspberry', tartStat: 'Attack' },
  'Fire Spirit Cookie': { beascuit: 'Tainted Burning Zesty', beascuitAttunes: 'CD x3', toppings: 'Flaming Raspberry x5', toppingSubstats: 'CD/35% + DMGR + DMGRB + ATK', tart: 'Raspberry', tartStat: 'Attack' },
  'Frost Queen Cookie': { beascuit: 'Tainted Frozen Zesty', beascuitAttunes: 'DMGRB x3', toppings: 'Frosted Crystal Raspberry x5', toppingSubstats: 'ATK + DMGR + CD + DMGRB', tart: 'Raspberry', tartStat: 'Attack' },
  'Millennial Tree Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'CD x4', toppings: 'Ancient Root Peanut x5', toppingSubstats: 'HP + CD + DMGR + ATK', tart: 'Peanut', tartStat: 'HP' },
  'Moonlight Cookie': { beascuit: 'Legendary Zesty', beascuitAttunes: 'CD x2 + DMGRB x2', toppings: 'Moonkissed Raspberry x5', toppingSubstats: 'CD + ATK + CRIT + DMGR', tart: 'Raspberry', tartStat: 'Attack' },
  'Sea Fairy Cookie': { beascuit: 'Legendary Spicy', beascuitAttunes: 'DMGRB x2 + CD x2', toppings: 'Sea Salt Chocolate x5', toppingSubstats: 'CD + ATK + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Stormbringer Cookie': { beascuit: 'Legendary Thunderous Chewy', beascuitAttunes: 'Elec DMG x4', toppings: 'Fuzzy Wuzzy Apple Jelly x5', toppingSubstats: 'CRIT + DMGR + ATK', tart: 'Apple Jelly', tartStat: 'Critical' },
  'Wind Archer Cookie': { beascuit: 'Legendary Light', beascuitAttunes: 'ATKS x2 + CD x2', toppings: 'Life-Sprouting Raspberry x5', toppingSubstats: 'ATKS + ATK + DMGR', tart: 'Raspberry', tartStat: 'Attack' },
  'Pitaya Dragon Cookie': { beascuit: 'Legendary Burning Chewy', beascuitAttunes: 'Fire DMG x4', toppings: 'Draconic Raspberry x5', toppingSubstats: 'ATK + DMGR + CD', tart: 'Raspberry', tartStat: 'Attack' },
  'Camellia Cookie': { beascuit: 'Legendary Chewy', beascuitAttunes: 'DMGRB x2 + ATK x2', toppings: 'Fragrant Almond x5', toppingSubstats: 'DMGR + CD + ATK', tart: 'Almond', tartStat: 'DMG Resist' },
  'Capsaicin Cookie': { beascuit: 'Legendary Burning Chewy', beascuitAttunes: 'Fire DMG x4', toppings: 'Trio Raspberry x5', toppingSubstats: 'ATK + DMGR + ATKS', tart: 'Raspberry', tartStat: 'Attack' },
  'Clotted Cream Cookie': { beascuit: 'Legendary Zesty', beascuitAttunes: 'DMGRB x2 + CRIT x2', toppings: 'Raspberry x5', toppingSubstats: 'ATK + DMGR + CD', tart: 'Raspberry', tartStat: 'Attack' },
  'Crimson Coral Cookie': { beascuit: 'Tainted Surging Hard', beascuitAttunes: 'DMGR x3', toppings: 'Sea Salt Chocolate x5', toppingSubstats: 'CD + DMGR + HP', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Doughael Cookie': { beascuit: 'Legendary Sweet', beascuitAttunes: 'DMGR x3 + CD x1', toppings: 'Destined Peanut x5', toppingSubstats: 'HP + CD + DMGR', tart: 'Peanut', tartStat: 'HP' },
  'Elder Faerie Cookie': { beascuit: 'Legendary Hard', beascuitAttunes: 'HP x4', toppings: 'Almonds x5', toppingSubstats: 'HP + DMGR + CD', tart: 'Almond', tartStat: 'DMG Resist' },
  'Sherbet Cookie': { beascuit: 'Legendary Frozen Light', beascuitAttunes: 'Ice DMG x4', toppings: 'Frosted Crystal Chocolate x5', toppingSubstats: 'CD + DMGR + CRIT', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Shining Glitter Cookie': { beascuit: 'Legendary Zesty', beascuitAttunes: 'CD x2 + DMGR x2', toppings: 'Tropical Rock Apple Jelly x5', toppingSubstats: 'CRIT + DMGR + CD', tart: 'Apple Jelly', tartStat: 'Critical' },
  'Stardust Cookie': { beascuit: 'Legendary Crispy', beascuitAttunes: 'CD x3', toppings: 'Moonkissed Apple Jelly x5', toppingSubstats: 'CRIT + CD + DMGR', tart: 'Apple Jelly', tartStat: 'Critical' },
  'Oyster Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'CD x2 + DMGR x1', toppings: 'Chocolate x5', toppingSubstats: 'CD + DMGR + ATKS', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Affogato Cookie': { beascuit: 'Legendary Poisonous Spicy', beascuitAttunes: 'Poison DMG x4', toppings: 'Raspberry x5', toppingSubstats: 'ATK + CRIT + CD + DMGR', tart: 'Raspberry', tartStat: 'Attack' },
  'Agar Agar Cookie': { beascuit: 'Legendary Crispy', beascuitAttunes: 'DMGRB x2 + ATK x2', toppings: 'Flaming Chocolate x5', toppingSubstats: 'CD + DMGR + ATK', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Almond Cookie': { beascuit: 'Tainted Earthen Hearty', beascuitAttunes: 'DMGRB x3', toppings: 'Almonds x5', toppingSubstats: 'ATKS + ATK + DMGR', tart: 'Almond', tartStat: 'DMG Resist' },
  'Black Forest Cookie': { beascuit: 'Legendary Chewy', beascuitAttunes: 'CD x2 + DMGRB x2', toppings: 'Sacred Vow Raspberry x5', toppingSubstats: 'CRIT + ATK + ATKS', tart: 'Raspberry', tartStat: 'Attack' },
  'Black Lemonade Cookie': { beascuit: 'Legendary Thunderous Chewy', beascuitAttunes: 'Elec DMG x4', toppings: 'Tropical Rock Chocolate x5', toppingSubstats: 'CD + ATK + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Black Raisin Cookie': { beascuit: 'Legendary Dark Crispy', beascuitAttunes: 'Dark DMG x4', toppings: 'Radiant Chocolate x5', toppingSubstats: 'CRIT + CD + ATK', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Black Sapphire Cookie': { beascuit: 'Legendary Poisonous Hearty', beascuitAttunes: 'Poison DMG x4', toppings: 'Deceitful Apple Jelly x5', toppingSubstats: 'CRIT + ATK + CD', tart: 'Apple Jelly', tartStat: 'Critical' },
  'Blueberry Pie Cookie': { beascuit: 'Legendary Thunderous Zesty', beascuitAttunes: 'Electric DMG x4', toppings: 'Moonkissed Apple Jelly x5', toppingSubstats: 'CRIT + ATKS + ATK', tart: 'Apple Jelly', tartStat: 'Critical' },
  'Burnt Cheese Cookie': { beascuit: 'Legendary Earthen Chewy', beascuitAttunes: 'Earth DMG x4', toppings: 'Radiant Almond x5', toppingSubstats: 'CD + DMGR + ATK', tart: 'Almond', tartStat: 'DMG Resist' },
  'Butter Roll Cookie': { beascuit: 'Legendary Chewy', beascuitAttunes: 'DMGRB x2 + CD x2', toppings: 'Almonds x5', toppingSubstats: 'DMGR + CD + HP', tart: 'Almond', tartStat: 'DMG Resist' },
  'Candy Apple Cookie': { beascuit: 'Legendary Spicy', beascuitAttunes: 'ATK x4', toppings: 'Deceitful Chocolate x5', toppingSubstats: 'DMGR + ATKS + CD + CRIT', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Candy Diver Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'AMPB x2 + CD x2', toppings: 'Chocolate x5', toppingSubstats: 'AMPB + CD + ATKS', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Captain Caviar Cookie': { beascuit: 'Tainted Surging Spicy', beascuitAttunes: 'DMGR x2 + CRIT x1', toppings: 'Raspberry x5', toppingSubstats: 'ATK + CRIT + CD/10%', tart: 'Raspberry', tartStat: 'Attack' },
  'Caramel Arrow Cookie': { beascuit: 'Tainted Dark Light', beascuitAttunes: 'CRIT x3', toppings: 'Sacred Vow Raspberry x5', toppingSubstats: 'ATK + ATKS/10% + CD', tart: 'Raspberry', tartStat: 'Attack' },
  'Caramel Choux Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'DMGR x4', toppings: 'Chocolate x5', toppingSubstats: 'CD + DMGR + ATK', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Carol Cookie': { beascuit: 'Tainted Verdant Sweet', beascuitAttunes: 'CD x3', toppings: 'Chocolate x5', toppingSubstats: 'CD + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Charcoal Cookie': { beascuit: 'Legendary Dark Zesty', beascuitAttunes: 'Dark DMG x4', toppings: 'Silent Raspberry x5', toppingSubstats: 'CD + DMGR + DBR', tart: 'Raspberry', tartStat: 'Attack' },
  'Cherry Blossom Cookie': { beascuit: 'Tainted Verdant Crispy', beascuitAttunes: 'CD x2 + CRIT x1', toppings: 'Raspberry x5', toppingSubstats: 'CD + ATK + CRIT', tart: 'Raspberry', tartStat: 'Attack' },
  'Chess Cocoa Cookie': { beascuit: 'Legendary Spicy', beascuitAttunes: 'ATK x2 + DMGRB x2', toppings: 'Gambit Chocolate x5', toppingSubstats: 'CD + DMGR + ATK', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Chili Pepper Cookie': { beascuit: 'Legendary Burning Crispy', beascuitAttunes: 'Fire DMG x4', toppings: 'Apple Jelly x5', toppingSubstats: 'CRIT + CD + DMGR', tart: 'Apple Jelly', tartStat: 'Critical' },
  'Choco Drizzle Cookie': { beascuit: 'Legendary Crispy', beascuitAttunes: 'DMGRB x2 + CRIT x2', toppings: 'Iris Gem Raspberry x5', toppingSubstats: 'DMGRB + ATK + CRIT + CD', tart: 'Raspberry', tartStat: 'Attack' },
  'Cloud Haetae Cookie': { beascuit: 'Legendary Hard', beascuitAttunes: 'DMGR x2 + CD x2', toppings: 'Verdigris Almonds x5', toppingSubstats: 'DMGR + CD + ATKS + ATK', tart: 'Almond', tartStat: 'DMG Resist' },
  'Cream Puff Cookie': { beascuit: 'Legendary Gleaming Hearty', beascuitAttunes: 'Light DMG x4', toppings: 'Apple Jelly x5', toppingSubstats: 'CRIT + CD + DMGR', tart: 'Apple Jelly', tartStat: 'Critical' },
  'Cream Soda Cookie': { beascuit: 'Tainted Surging Chewy', beascuitAttunes: 'DMGRB x3', toppings: 'Raspberry x5', toppingSubstats: 'ATK + CD + ATKS', tart: 'Raspberry', tartStat: 'Attack' },
  'Cream Unicorn Cookie': { beascuit: 'Tainted Burning Sweet', beascuitAttunes: 'DMGR x3', toppings: 'Chocolate x5', toppingSubstats: 'CD + CRIT + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Crème Brûlée Cookie': { beascuit: 'Tainted Gleaming Light', beascuitAttunes: 'ATKS x2 + CD x1', toppings: 'Truthful Attack x5', toppingSubstats: 'ATK + ATKS + CD + DMGR', tart: 'Raspberry', tartStat: 'Attack' },
  'Crunchy Chip Cookie': { beascuit: 'Tainted Dark Chewy', beascuitAttunes: 'CRIT x3', toppings: 'Almonds x5', toppingSubstats: 'DMGR + ATKS + CRIT', tart: 'Almond', tartStat: 'DMG Resist' },
  'Cocoa Cookie': { beascuit: 'Legendary Hard', beascuitAttunes: 'CD x4', toppings: 'Almonds x5', toppingSubstats: 'CD + DMGR + ATK + ATKS', tart: 'Almond', tartStat: 'DMG Resist' },
  'Cotton Cookie': { beascuit: 'Tainted Verdant Hearty', beascuitAttunes: 'ATK x3', toppings: 'Frosted Crystal Chocolate x5', toppingSubstats: 'CD + DMGR + ATK', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Dark Choco Cookie': { beascuit: 'Tainted Dark Chewy', beascuitAttunes: 'DMGR x3', toppings: 'Almonds x5', toppingSubstats: 'CD + DMGR + HP + DBR', tart: 'Almond', tartStat: 'DMG Resist' },
  'Eclair Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'DMGR x2 + CD x2', toppings: 'Chocolate x5', toppingSubstats: 'CD/20% + DMGR/20% + ATK', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Espresso Cookie': { beascuit: 'Legendary Earthen Zesty', beascuitAttunes: 'Earth DMG x4', toppings: 'Raspberry x5', toppingSubstats: 'ATK + CRIT + DMGR', tart: 'Raspberry', tartStat: 'Attack' },
  'Fettuccine Cookie': { beascuit: 'Tainted Earthen Hard', beascuitAttunes: 'CD x3', toppings: 'Radiant Cheese Almonds x5', toppingSubstats: 'CD + DMGR + HP', tart: 'Almond', tartStat: 'DMG Resist' },
  'Fig Cookie': { beascuit: 'Legendary Verdant Hearty', beascuitAttunes: 'Grass DMG x4', toppings: 'Chocolate x5', toppingSubstats: 'CD', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Financier Cookie': { beascuit: 'Tainted Light Hard', beascuitAttunes: 'DMGR x3', toppings: 'Truthful Almonds x5', toppingSubstats: 'CD + DMGR + HP', tart: 'Almond', tartStat: 'DMG Resist' },
  'Frilled Jellyfish Cookie': { beascuit: 'Tainted Surging Hearty', beascuitAttunes: 'CD x2 + DMGRB x1', toppings: 'Sea Salt Raspberry x5', toppingSubstats: 'ATK + DMGR + CD', tart: 'Raspberry', tartStat: 'Attack' },
  'Grapefruit Cookie': { beascuit: 'Legendary Thunderous Chewy', beascuitAttunes: 'Electric DMG x4', toppings: 'Seafarer Chocolate x5', toppingSubstats: 'CD + ATKS + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Green Tea Mousse Cookie': { beascuit: 'Tainted Wuthering Hard', beascuitAttunes: 'HP x3', toppings: 'Iris Gem Almonds x5', toppingSubstats: 'DMGR + CD + HP + ATKS', tart: 'Almond', tartStat: 'DMG Resist' },
  'Golden Osmanthus Cookie': { beascuit: 'Tainted Verdant Spicy', beascuitAttunes: 'DMGR x3', toppings: 'Fragrant Chocolate x5', toppingSubstats: 'ATK + CD + CRIT', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Herb Cookie': { beascuit: 'Legendary Sweet', beascuitAttunes: 'CD x3 + DMGR x1', toppings: 'Raspberry x5', toppingSubstats: 'CD + DMGR + DBR', tart: 'Raspberry', tartStat: 'Attack' },
  'Jagae Cookie': { beascuit: 'Tainted Surging Hearty', beascuitAttunes: 'CD x3', toppings: 'Seafarer Almonds x5', toppingSubstats: 'CD + DMGR + ATK + CRIT', tart: 'Almond', tartStat: 'DMG Resist' },
  'Kouign-Amann Cookie': { beascuit: 'Legendary Gleaming Hard', beascuitAttunes: 'Light DMG x4', toppings: 'Trio Caramel x5', toppingSubstats: 'ATKS + ATK + DMGR', tart: 'Caramel', tartStat: 'Attack Speed' },
  'Kumiho Cookie': { beascuit: 'Legendary Wuthering Hearty', beascuitAttunes: 'Wind DMG x4', toppings: 'Life Sprouting Almonds x5', toppingSubstats: 'DMGR + CD + ATKS', tart: 'Almond', tartStat: 'DMG Resist' },
  'Latte Cookie': { beascuit: 'Legendary Earthen Zesty', beascuitAttunes: 'Earth DMG x4', toppings: 'Chocolate x5', toppingSubstats: 'CD + ATK + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Lemon Cookie': { beascuit: 'Legendary Thunderous Crispy', beascuitAttunes: 'Electric DMG x4', toppings: 'Verdigris Apple Jelly x5', toppingSubstats: 'CRIT + ATK + CD', tart: 'Apple Jelly', tartStat: 'Critical' },
  'Licorice Cookie': { beascuit: 'Legendary Dark Zesty', beascuitAttunes: 'Dark DMG x4', toppings: 'Chocolate x5', toppingSubstats: 'CD + ATK + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Lilac Cookie': { beascuit: 'Tainted Verdant Hearty', beascuitAttunes: 'CD x3', toppings: 'Caramel x5', toppingSubstats: 'CD + ATKS + DMGR', tart: 'Caramel', tartStat: 'Attack Speed' },
  'Lime Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'CD x4', toppings: 'Fuzzy Wuzzy Raspberry x5', toppingSubstats: 'CD + ATK + DMGR', tart: 'Raspberry', tartStat: 'Attack' },
  'Linzer Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'CD x4', toppings: 'Caramel x5', toppingSubstats: 'CRIT + ATKS + CD + DMGR', tart: 'Caramel', tartStat: 'Attack Speed' },
  'Macaron Cookie': { beascuit: 'Legendary Zesty', beascuitAttunes: 'ATK x2 + DMGR x2', toppings: 'Chocolate x5', toppingSubstats: 'CD + ATK + DMGR + CRIT', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Madeleine Cookie': { beascuit: 'Tainted Gleaming Hard', beascuitAttunes: 'ATKS x3', toppings: 'Destined Walnuts x5', toppingSubstats: 'ATKS + DMGR + ATK', tart: 'Walnut', tartStat: 'Defense' },
  'Mala Sauce Cookie': { beascuit: 'Tainted Burning Chewy', beascuitAttunes: 'CD x3', toppings: 'Almonds x5', toppingSubstats: 'DMGR + ATK + CD', tart: 'Almond', tartStat: 'DMG Resist' },
  'Mango Cookie': { beascuit: 'Tainted Surging Zesty', beascuitAttunes: 'ATK x3', toppings: 'Tropical Rock Chocolate x5', toppingSubstats: 'CD + ATK + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Manju Cookie': { beascuit: 'Tainted Surging Crispy', beascuitAttunes: 'CRIT x3', toppings: 'Seafarer Raspberry x5', toppingSubstats: 'DMGR + ATK + CRIT + DMGR', tart: 'Raspberry', tartStat: 'Attack' },
  'Matcha Cookie': { beascuit: 'Legendary Poisonous Spicy', beascuitAttunes: 'Poison DMG x4', toppings: 'Raspberry x5', toppingSubstats: 'CD + ATK + DMGR', tart: 'Raspberry', tartStat: 'Attack' },
  'Menthol Cookie': { beascuit: 'Legendary Surging Spicy', beascuitAttunes: 'Water DMG x4', toppings: 'Destined Raspberry x5', toppingSubstats: 'CD + ATK + ATKS', tart: 'Raspberry', tartStat: 'Attack' },
  'Mercurial Knight Cookie': { beascuit: 'Legendary Steelen Chewy', beascuitAttunes: 'Steel DMG x4', toppings: 'Verdigris Almonds x5', toppingSubstats: 'DMGR + ATK + ATKS', tart: 'Almond', tartStat: 'DMG Resist' },
  'Milk Cookie': { beascuit: 'Legendary Hard', beascuitAttunes: 'DMGRB x4', toppings: 'Almonds x5', toppingSubstats: 'CD + DMGR + HP + DBR', tart: 'Almond', tartStat: 'DMG Resist' },
  'Milky Way Cookie': { beascuit: 'Legendary Chewy', beascuitAttunes: 'DMGR x4', toppings: 'Moonkissed Chocolate x5', toppingSubstats: 'DMGR + CD + ATKS', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Mint Choco Cookie': { beascuit: 'Tainted Wuthering Hearty', beascuitAttunes: 'ATK x3', toppings: 'Life Sprouting Chocolate x5', toppingSubstats: 'CD + ATKS', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Mold Dough Cookie': { beascuit: 'Legendary Chaotic Chewy', beascuitAttunes: 'Chaos DMG x4', toppings: 'Looming Dark Raspberry x5', toppingSubstats: 'HP + DMGR + ATKS', tart: 'Raspberry', tartStat: 'Attack' },
  'Moon Rabbit Cookie': { beascuit: 'Legendary Hard', beascuitAttunes: 'CD x4', toppings: 'Almonds x5', toppingSubstats: 'DMGR + CD + HP', tart: 'Almond', tartStat: 'DMG Resist' },
  'Mozzarella Cookie': { beascuit: 'Legendary Earthen Zesty', beascuitAttunes: 'Earth DMG x4', toppings: 'Radiant Cheese Chocolate x5', toppingSubstats: 'CD + ATK + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Nutmeg Tiger Cookie': { beascuit: 'Tainted Burning Hearty', beascuitAttunes: 'ATK x3', toppings: 'Destructive Chocolate x5', toppingSubstats: 'CD + ATK + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Okchun Cookie': { beascuit: 'Legendary Sweet', beascuitAttunes: 'ATK x4', toppings: 'Chocolate x5', toppingSubstats: 'CD + ATK + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Olive Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'CD x2 + DMGR x2', toppings: 'Radiant Cheese Chocolate x5', toppingSubstats: 'CD + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Orange Cookie': { beascuit: 'Legendary Thunderous Zesty', beascuitAttunes: 'Electric DMG x4', toppings: 'Fuzzy Wuzzy Apple Jelly x5', toppingSubstats: 'CRIT + ATK + CD', tart: 'Apple Jelly', tartStat: 'Critical' },
  'Parfait Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'ATK x4', toppings: 'Tropical Rock Chocolate x5', toppingSubstats: 'CD + DMGR + ATK', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Pastry Cookie': { beascuit: 'Legendary Wuthering Light', beascuitAttunes: 'Wind DMG x4', toppings: 'Life Sprouting Raspberry x5', toppingSubstats: 'ATKS + ATK + CRIT', tart: 'Raspberry', tartStat: 'Attack' },
  'Pavlova Cookie': { beascuit: 'Legendary Light', beascuitAttunes: 'ATK x2 + CRIT x2', toppings: 'Indolent Chocolate x5', toppingSubstats: 'CD + ATK + CRIT + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Peach Blossom Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'ATK x4', toppings: 'Chocolate x5', toppingSubstats: 'CD + DMGR + ATK', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Peppermint Cookie': { beascuit: 'Tainted Surging Zesty', beascuitAttunes: 'ATK x3', toppings: 'Sea Salt Chocolate x5', toppingSubstats: 'CD + DMGR + ATK', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Pinecone Cookie': { beascuit: 'Legendary Spicy', beascuitAttunes: 'DMGR x2 + ATKS x2', toppings: 'Frosted Crystal Almonds x5', toppingSubstats: 'ATKS + DMGR + ATK + DBR', tart: 'Almond', tartStat: 'DMG Resist' },
  'Poison Mushroom Cookie': { beascuit: 'Legendary Poisonous Spicy', beascuitAttunes: 'Poison DMG x4', toppings: 'Raspberry x5', toppingSubstats: 'ATK + CD + DMGR', tart: 'Raspberry', tartStat: 'Attack' },
  'Prophet Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'ATK x4', toppings: 'Chocolate x5', toppingSubstats: 'CD + DMGR + CRIT', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Prune Juice Cookie': { beascuit: 'Tainted Poisonous Spicy', beascuitAttunes: 'CD x3', toppings: 'Trio Raspberry x5', toppingSubstats: 'CD + ATK + CRIT + ATKS', tart: 'Raspberry', tartStat: 'Attack' },
  'Pomegranate Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'ATK x4', toppings: 'Chocolate x5', toppingSubstats: 'CD + ATK + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Pudding à la Mode Cookie': { beascuit: 'Tainted Thunderous Spicy', beascuitAttunes: 'DMGRB x3', toppings: 'Iris Gem Apple Jelly x5', toppingSubstats: 'ATKS + CRIT + AMPB + ATK', tart: 'Apple Jelly', tartStat: 'Critical' },
  'Pumpkin Pie Cookie': { beascuit: 'Tainted Dark Zesty', beascuitAttunes: 'CD x3', toppings: 'Almonds x5', toppingSubstats: 'DMGR + CD + HP', tart: 'Almond', tartStat: 'DMG Resist' },
  'Purple Yam Cookie': { beascuit: 'Legendary Verdant Chewy', beascuitAttunes: 'Grass DMG x4', toppings: 'Almonds x5', toppingSubstats: 'DMGR + ATK + CD', tart: 'Almond', tartStat: 'DMG Resist' },
  'Raspberry Cookie': { beascuit: 'Tainted Steelen Chewy', beascuitAttunes: 'CD x3', toppings: 'Passionate Almonds x5', toppingSubstats: 'ATK + CD + DMGR', tart: 'Almond', tartStat: 'DMG Resist' },
  'Rebel Cookie': { beascuit: 'Tainted Verdant Crispy', beascuitAttunes: 'CRIT x3', toppings: 'Life Sprouting Almonds x5', toppingSubstats: 'CD + DMGR + CRIT + ATK', tart: 'Almond', tartStat: 'DMG Resist' },
  'Red Osmanthus Cookie': { beascuit: 'Tainted Verdant Light', beascuitAttunes: 'DMGRB x3', toppings: 'Fragrant Apple Jelly x5', toppingSubstats: 'ATK + CD + CRIT + DMGR', tart: 'Apple Jelly', tartStat: 'Critical' },
  'Red Velvet Cookie': { beascuit: 'Legendary Dark Chewy', beascuitAttunes: 'Dark DMG x4', toppings: 'Almonds x5', toppingSubstats: 'DMGR + CD + CRIT', tart: 'Almond', tartStat: 'DMG Resist' },
  'Rockstar Cookie': { beascuit: 'Legendary Sweet', beascuitAttunes: 'CRIT x2 + ATK x2', toppings: 'Tropical Rock Chocolate x5', toppingSubstats: 'CRIT + DMGR + CD', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Royal Margarine Cookie': { beascuit: 'Tainted Poisonous Crispy', beascuitAttunes: 'DMGRB x3', toppings: 'Draconic Chocolate x5', toppingSubstats: 'CD + DMGR + CRIT', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Rye Cookie': { beascuit: 'Tainted Burning Light', beascuitAttunes: 'CD x3', toppings: 'Raspberry x5', toppingSubstats: 'ATK + DMGR + CRIT + ATKS', tart: 'Raspberry', tartStat: 'Attack' },
  'Salt Cellar Cookie': { beascuit: 'Tainted Steelen Hard', beascuitAttunes: 'ATKS x3', toppings: 'Blooming Walnuts x5', toppingSubstats: 'DEF + CD + DMGR + DBR', tart: 'Walnut', tartStat: 'Defense' },
  'Schwarzwälder Cookie': { beascuit: 'Tainted Steelen Chewy', beascuitAttunes: 'CD x3', toppings: 'Sacred Vow Almonds x5', toppingSubstats: 'DMGR + CD + ATKS', tart: 'Almond', tartStat: 'DMG Resist' },
  'Seltzer Cookie': { beascuit: 'Tainted Surging Hearty', beascuitAttunes: 'ATK x3', toppings: 'Destined Chocolate x5', toppingSubstats: 'CD + ATKS + ATK', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Silverbell Cookie': { beascuit: 'Legendary Verdant Chewy', beascuitAttunes: 'Grass DMG x4', toppings: 'Blooming Chocolate x5', toppingSubstats: 'CD + DMGR + ATK', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Squid Ink Cookie': { beascuit: 'Legendary Surging Zesty', beascuitAttunes: 'Water DMG x4', toppings: 'Raspberry x5', toppingSubstats: 'ATK + CD + CRIT', tart: 'Raspberry', tartStat: 'Attack' },
  'Smoked Cheese Cookie': { beascuit: 'Legendary Earthen Zesty', beascuitAttunes: 'Earth DMG x4', toppings: 'Radiant Cheese Raspberry x5', toppingSubstats: 'CD + ATK + DMGR', tart: 'Raspberry', tartStat: 'Attack' },
  'Snow Sugar Cookie': { beascuit: 'Tainted Frozen Zesty', beascuitAttunes: 'CD x3', toppings: 'Frosted Crystal Raspberry x5', toppingSubstats: 'ATK + DMGR + CD', tart: 'Raspberry', tartStat: 'Attack' },
  'Sorbet Shark Cookie': { beascuit: 'Legendary Surging Crispy', beascuitAttunes: 'Water DMG x4', toppings: 'Sea Salt Raspberry x5', toppingSubstats: 'CD + DMGR + CRIT', tart: 'Raspberry', tartStat: 'Attack' },
  'Space Doughnut Cookie': { beascuit: 'Legendary Chewy', beascuitAttunes: 'DMGR x4', toppings: 'Moonkissed Chocolate x5', toppingSubstats: 'CD + DMGR + ATK', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Sparkling Cookie': { beascuit: 'Tainted Gleaming Sweet', beascuitAttunes: 'ATK x3', toppings: 'Truthful Chocolate x5', toppingSubstats: 'CD + DMGR + ATKS', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Star Coral Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'ATK x4', toppings: 'Moonkissed Chocolate x5', toppingSubstats: 'CD + DMGR + CRIT + ATK', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Strawberry Crepe Cookie': { beascuit: 'Legendary Hard', beascuitAttunes: 'CD x4', toppings: 'Almonds x5', toppingSubstats: 'CD + DMGR + HP', tart: 'Almond', tartStat: 'DMG Resist' },
  'Street Urchin Cookie': { beascuit: 'Legendary Burning Spicy', beascuitAttunes: 'Fire DMG x4', toppings: 'Raspberry x5', toppingSubstats: 'CD + ATK + CRIT', tart: 'Raspberry', tartStat: 'Attack' },
  'Sugarfly Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'CD x2 + CRIT x2', toppings: 'Passionate Raspberry x5', toppingSubstats: 'CD + ATK + CRIT + DMGR', tart: 'Raspberry', tartStat: 'Attack' },
  'Tarte Tatin Cookie': { beascuit: 'Tainted Burning Light', beascuitAttunes: 'DMGR x3', toppings: 'Draconic Raspberry x5', toppingSubstats: 'ATK + CRIT + ATKS + DMGR', tart: 'Raspberry', tartStat: 'Attack' },
  'Tea Knight Cookie': { beascuit: 'Legendary Steelen Chewy', beascuitAttunes: 'Steel DMG x4', toppings: 'Almonds x5', toppingSubstats: 'DMGR + ATK + HP', tart: 'Almond', tartStat: 'DMG Resist' },
  'Tiger Lily Cookie': { beascuit: 'Legendary Light', beascuitAttunes: 'ATK x4', toppings: 'Passionate Chocolate x5', toppingSubstats: 'CD', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Twizzly Gummy Cookie': { beascuit: 'Tainted Thunderous Light', beascuitAttunes: 'CD x3', toppings: 'Apple Jelly x5', toppingSubstats: 'CRIT + CD + ATK + DMGR', tart: 'Apple Jelly', tartStat: 'Critical' },
  'Vampire Cookie': { beascuit: 'Legendary Crispy', beascuitAttunes: 'CRIT x2 + DMGR x1', toppings: 'Raspberry x5', toppingSubstats: 'DMGR/15% + ATK + CD/6%', tart: 'Raspberry', tartStat: 'Attack' },
  'Wedding Cake Cookie': { beascuit: 'Legendary Zesty', beascuitAttunes: 'ATK x4', toppings: 'Sacred Vow Chocolate x5', toppingSubstats: 'CD + DMGR + CRIT', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Werewolf Cookie': { beascuit: 'Legendary Steelen Chewy', beascuitAttunes: 'Steel DMG x4', toppings: 'Tropical Rock Almonds x5', toppingSubstats: 'DMGR + HP + ATKS', tart: 'Almond', tartStat: 'DMG Resist' },
  'Wildberry Cookie': { beascuit: 'Legendary Steelen Chewy', beascuitAttunes: 'Steel DMG x4', toppings: 'Passionate Almonds x5', toppingSubstats: 'HP + DMGR', tart: 'Almond', tartStat: 'DMG Resist' },
  'Cream Ferret Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'ATK x4', toppings: 'Chocolate x5', toppingSubstats: 'CD + ATK + ATKS + CRIT', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Icicle Yeti Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'ATK x4', toppings: 'Frosted Crystal Chocolate x5', toppingSubstats: 'CD + ATK + CRIT + ATKS', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Marshmallow Bunny Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'ATK x2 + CD x2', toppings: 'Candy x5', toppingSubstats: 'AMPB/25% + CD + ATK + CRIT', tart: 'Candy', tartStat: 'Amplify Buff' },
  'Snapdragon Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'ATK x4', toppings: 'Draconic Chocolate x5', toppingSubstats: 'CD + ATK + CRIT + ATKS', tart: 'Chocolate', tartStat: 'Cooldown' },
  // Rare cookies
  'Adventurer Cookie': { beascuit: 'Legendary Crispy', beascuitAttunes: 'CD x4', toppings: 'Raspberry x5', toppingSubstats: 'ATK + CD', tart: 'Raspberry', tartStat: 'Attack' },
  'Alchemist Cookie': { beascuit: 'Legendary Spicy', beascuitAttunes: 'ATK x4', toppings: 'Chocolate x5', toppingSubstats: 'CD + ATK', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Avocado Cookie': { beascuit: 'Legendary Hard', beascuitAttunes: 'CD x4', toppings: 'Almonds x5', toppingSubstats: 'DMGR + CD', tart: 'Almond', tartStat: 'DMG Resist' },
  'Blackberry Cookie': { beascuit: 'Legendary Zesty', beascuitAttunes: 'ATK x4', toppings: 'Chocolate x5', toppingSubstats: 'CD + ATK', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Carrot Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'ATK x4', toppings: 'Chocolate x5', toppingSubstats: 'CD + ATK', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Cherry Cookie': { beascuit: 'Legendary Spicy', beascuitAttunes: 'ATK x4', toppings: 'Chocolate x5', toppingSubstats: 'CD + ATK', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Clover Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'ATK x4', toppings: 'Chocolate x5', toppingSubstats: 'CD + ATK + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Custard Cookie III': { beascuit: 'Legendary Sweet', beascuitAttunes: 'ATK x4', toppings: 'Chocolate x5', toppingSubstats: 'CD + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Devil Cookie': { beascuit: 'Legendary Dark Zesty', beascuitAttunes: 'Dark DMG x4', toppings: 'Chocolate x5', toppingSubstats: 'CD + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Gumball Cookie': { beascuit: 'Legendary Spicy', beascuitAttunes: 'CD x4', toppings: 'Raspberry x5', toppingSubstats: 'ATK + CD', tart: 'Raspberry', tartStat: 'Attack' },
  'Knight Cookie': { beascuit: 'Legendary Hard', beascuitAttunes: 'CD x4', toppings: 'Almonds x5', toppingSubstats: 'CD + DMGR', tart: 'Almond', tartStat: 'DMG Resist' },
  'Onion Cookie': { beascuit: 'Legendary Hearty', beascuitAttunes: 'ATKS x4', toppings: 'Chocolate x5', toppingSubstats: 'ATKS + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Pancake Cookie': { beascuit: 'Legendary Crispy', beascuitAttunes: 'CD x4', toppings: 'Raspberry x5', toppingSubstats: 'ATK + CD', tart: 'Raspberry', tartStat: 'Attack' },
  'Princess Cookie': { beascuit: 'Legendary Chewy', beascuitAttunes: 'CD x4', toppings: 'Almonds x5', toppingSubstats: 'DMGR', tart: 'Almond', tartStat: 'DMG Resist' },
  // Common cookies
  'Angel Cookie': { beascuit: 'Legendary Sweet', beascuitAttunes: 'ATK x4', toppings: 'Chocolate x5', toppingSubstats: 'CD', tart: 'Chocolate', tartStat: 'Cooldown' },
  'Beet Cookie': { beascuit: 'Legendary Light', beascuitAttunes: 'ATK x4', toppings: 'Chocolate x5', toppingSubstats: 'CD + DMGR', tart: 'Chocolate', tartStat: 'Cooldown' },
  'GingerBrave': { beascuit: 'Legendary Chewy', beascuitAttunes: 'DMGR x4', toppings: 'Raspberry x5', toppingSubstats: 'ATK + CD + DMGR', tart: 'Raspberry', tartStat: 'Attack' },
  'Muscle Cookie': { beascuit: 'Legendary Chewy', beascuitAttunes: 'CD x4', toppings: 'Almonds x5', toppingSubstats: 'DMGR + HP', tart: 'Almond', tartStat: 'DMG Resist' },
  'Ninja Cookie': { beascuit: 'Legendary Crispy', beascuitAttunes: 'ATKS x4', toppings: 'Raspberry x5', toppingSubstats: 'ATK + CD + ATKS', tart: 'Raspberry', tartStat: 'Attack' },
  'Strawberry Cookie': { beascuit: 'Legendary Hard', beascuitAttunes: 'DMGR x4', toppings: 'Raspberry x5', toppingSubstats: 'ATK + DMGR + CD', tart: 'Raspberry', tartStat: 'Attack' },
  'Wizard Cookie': { beascuit: 'Legendary Thunderous Zesty', beascuitAttunes: 'Electric DMG x4', toppings: 'Raspberry x5', toppingSubstats: 'ATK + CD + DMGR', tart: 'Raspberry', tartStat: 'Attack' },
  'Pom-Pom Dough Cookie': { beascuit: 'Legendary Chaotic Chewy', beascuitAttunes: 'Chaos DMG x4', toppings: 'Looming Dark Raspberry x5', toppingSubstats: 'ATK + CD + DMGR', tart: 'Raspberry', tartStat: 'Attack' },
  'Venom Dough Cookie': { beascuit: 'Legendary Poisonous Spicy', beascuitAttunes: 'Poison DMG x4', toppings: 'Indolent Raspberry x5', toppingSubstats: 'ATK + CD + DMGRB', tart: 'Raspberry', tartStat: 'Attack' },
  'Sugar Swan Cookie': { beascuit: '', beascuitAttunes: '', toppings: '', toppingSubstats: '', tart: '', tartStat: '' },
};

// Cookie type data from wiki
const COOKIE_TYPES: Record<string, CookieType> = {
  'Dark Cacao Cookie': 'Charge', 'Golden Cheese Cookie': 'Ranged', 'Hollyberry Cookie': 'Defense',
  'Pure Vanilla Cookie': 'Healing', 'White Lily Cookie': 'Bomber',
  'Burning Spice Cookie': 'Charge', 'Eternal Sugar Cookie': 'Bomber', 'Mystic Flour Cookie': 'Healing',
  'Shadow Milk Cookie': 'Magic', 'Silent Salt Cookie': 'Ambush',
  'Dark Enchantress Cookie': 'Magic', 'Black Pearl Cookie': 'Ambush', 'Fire Spirit Cookie': 'Magic',
  'Frost Queen Cookie': 'Magic', 'Sea Fairy Cookie': 'Bomber', 'Millennial Tree Cookie': 'Support',
  'Moonlight Cookie': 'Magic', 'Stormbringer Cookie': 'Charge', 'Wind Archer Cookie': 'Ranged',
  'Sugar Swan Cookie': 'Healing',
  'Pitaya Dragon Cookie': 'Charge',
  'Camellia Cookie': 'Charge', 'Capsaicin Cookie': 'Charge', 'Clotted Cream Cookie': 'Magic',
  'Crimson Coral Cookie': 'Defense', 'Doughael Cookie': 'Healing', 'Elder Faerie Cookie': 'Defense',
  'Sherbet Cookie': 'Ranged', 'Shining Glitter Cookie': 'Magic', 'Stardust Cookie': 'Ambush',
  'Oyster Cookie': 'Support',
  'Affogato Cookie': 'Bomber', 'Agar Agar Cookie': 'Ambush', 'Almond Cookie': 'Support',
  'Black Forest Cookie': 'Charge', 'Black Lemonade Cookie': 'Bomber', 'Black Raisin Cookie': 'Ambush',
  'Black Sapphire Cookie': 'Support', 'Blueberry Pie Cookie': 'Magic', 'Burnt Cheese Cookie': 'Charge',
  'Butter Roll Cookie': 'Charge', 'Candy Apple Cookie': 'Bomber', 'Candy Diver Cookie': 'Support',
  'Captain Caviar Cookie': 'Bomber', 'Caramel Arrow Cookie': 'Ranged', 'Caramel Choux Cookie': 'Support',
  'Carol Cookie': 'Healing', 'Charcoal Cookie': 'Magic', 'Cherry Blossom Cookie': 'Ambush',
  'Chess Cocoa Cookie': 'Magic', 'Chili Pepper Cookie': 'Ambush', 'Choco Drizzle Cookie': 'Ambush',
  'Cloud Haetae Cookie': 'Defense', 'Cream Puff Cookie': 'Support', 'Cream Soda Cookie': 'Charge',
  'Cream Unicorn Cookie': 'Healing', 'Crème Brûlée Cookie': 'Ranged', 'Crunchy Chip Cookie': 'Charge',
  'Cocoa Cookie': 'Defense', 'Cotton Cookie': 'Support', 'Dark Choco Cookie': 'Charge',
  'Eclair Cookie': 'Support', 'Espresso Cookie': 'Magic', 'Fettuccine Cookie': 'Defense',
  'Fig Cookie': 'Support', 'Financier Cookie': 'Defense', 'Frilled Jellyfish Cookie': 'Support',
  'Grapefruit Cookie': 'Charge', 'Green Tea Mousse Cookie': 'Defense',
  'Golden Osmanthus Cookie': 'Bomber', 'Herb Cookie': 'Healing', 'Jagae Cookie': 'Support',
  'Kouign-Amann Cookie': 'Defense', 'Kumiho Cookie': 'Charge', 'Latte Cookie': 'Magic',
  'Lemon Cookie': 'Ambush', 'Licorice Cookie': 'Magic', 'Lilac Cookie': 'Support',
  'Lime Cookie': 'Support', 'Linzer Cookie': 'Support', 'Macaron Cookie': 'Magic',
  'Madeleine Cookie': 'Defense', 'Mala Sauce Cookie': 'Charge', 'Mango Cookie': 'Magic',
  'Manju Cookie': 'Ambush', 'Matcha Cookie': 'Magic', 'Menthol Cookie': 'Bomber',
  'Mercurial Knight Cookie': 'Charge', 'Milk Cookie': 'Defense', 'Milky Way Cookie': 'Charge',
  'Mint Choco Cookie': 'Support', 'Mold Dough Cookie': 'Magic', 'Moon Rabbit Cookie': 'Defense',
  'Mozzarella Cookie': 'Magic', 'Nutmeg Tiger Cookie': 'Support', 'Okchun Cookie': 'Healing',
  'Olive Cookie': 'Support', 'Orange Cookie': 'Magic', 'Parfait Cookie': 'Support',
  'Pastry Cookie': 'Ranged', 'Pavlova Cookie': 'Ranged', 'Peach Blossom Cookie': 'Support',
  'Peppermint Cookie': 'Support', 'Pinecone Cookie': 'Bomber', 'Poison Mushroom Cookie': 'Bomber',
  'Prophet Cookie': 'Support', 'Prune Juice Cookie': 'Bomber', 'Pomegranate Cookie': 'Support',
  'Pudding à la Mode Cookie': 'Bomber', 'Pumpkin Pie Cookie': 'Magic', 'Purple Yam Cookie': 'Charge',
  'Raspberry Cookie': 'Charge', 'Rebel Cookie': 'Ambush', 'Red Osmanthus Cookie': 'Ranged',
  'Red Velvet Cookie': 'Charge', 'Rockstar Cookie': 'Healing', 'Royal Margarine Cookie': 'Ambush',
  'Rye Cookie': 'Ranged', 'Salt Cellar Cookie': 'Defense', 'Schwarzwälder Cookie': 'Charge',
  'Seltzer Cookie': 'Support', 'Silverbell Cookie': 'Support', 'Squid Ink Cookie': 'Magic',
  'Smoked Cheese Cookie': 'Magic', 'Snow Sugar Cookie': 'Magic', 'Sorbet Shark Cookie': 'Ambush',
  'Space Doughnut Cookie': 'Charge', 'Sparkling Cookie': 'Healing', 'Star Coral Cookie': 'Support',
  'Strawberry Crepe Cookie': 'Defense', 'Street Urchin Cookie': 'Bomber', 'Sugarfly Cookie': 'Support',
  'Tarte Tatin Cookie': 'Ranged', 'Tea Knight Cookie': 'Charge', 'Tiger Lily Cookie': 'Ranged',
  'Twizzly Gummy Cookie': 'Ranged', 'Vampire Cookie': 'Ambush', 'Wedding Cake Cookie': 'Magic',
  'Werewolf Cookie': 'Charge', 'Wildberry Cookie': 'Defense',
  'Cream Ferret Cookie': 'Support', 'Icicle Yeti Cookie': 'Healing',
  'Marshmallow Bunny Cookie': 'Support', 'Snapdragon Cookie': 'Support',
  'Pom-Pom Dough Cookie': 'Magic', 'Venom Dough Cookie': 'Bomber',
  'Adventurer Cookie': 'Ambush', 'Alchemist Cookie': 'Bomber', 'Avocado Cookie': 'Defense',
  'Blackberry Cookie': 'Magic', 'Carrot Cookie': 'Support', 'Cherry Cookie': 'Bomber',
  'Clover Cookie': 'Support', 'Custard Cookie III': 'Healing', 'Devil Cookie': 'Magic',
  'Gumball Cookie': 'Bomber', 'Knight Cookie': 'Defense', 'Onion Cookie': 'Support',
  'Pancake Cookie': 'Ambush', 'Princess Cookie': 'Charge',
  'GingerBrave': 'Charge', 'Strawberry Cookie': 'Defense', 'Ninja Cookie': 'Ambush',
  'Angel Cookie': 'Healing', 'Muscle Cookie': 'Charge', 'Wizard Cookie': 'Magic', 'Beet Cookie': 'Ranged',
};

// Cookie rarity data from wiki
const COOKIE_RARITIES: Record<string, CookieRarity> = {
  'Dark Cacao Cookie': 'Ancient', 'Golden Cheese Cookie': 'Ancient', 'Hollyberry Cookie': 'Ancient',
  'Pure Vanilla Cookie': 'Ancient', 'White Lily Cookie': 'Ancient',
  'Burning Spice Cookie': 'Beast', 'Eternal Sugar Cookie': 'Beast', 'Mystic Flour Cookie': 'Beast',
  'Shadow Milk Cookie': 'Beast', 'Silent Salt Cookie': 'Beast',
  'Dark Enchantress Cookie': 'Legendary', 'Black Pearl Cookie': 'Legendary', 'Fire Spirit Cookie': 'Legendary',
  'Frost Queen Cookie': 'Legendary', 'Sea Fairy Cookie': 'Legendary', 'Millennial Tree Cookie': 'Legendary',
  'Moonlight Cookie': 'Legendary', 'Stormbringer Cookie': 'Legendary', 'Wind Archer Cookie': 'Legendary',
  'Sugar Swan Cookie': 'Legendary',
  'Pitaya Dragon Cookie': 'Dragon',
  'Camellia Cookie': 'Super Epic', 'Capsaicin Cookie': 'Super Epic', 'Clotted Cream Cookie': 'Super Epic',
  'Crimson Coral Cookie': 'Super Epic', 'Doughael Cookie': 'Super Epic', 'Elder Faerie Cookie': 'Super Epic',
  'Sherbet Cookie': 'Super Epic', 'Shining Glitter Cookie': 'Super Epic', 'Stardust Cookie': 'Super Epic',
  'Oyster Cookie': 'Super Epic',
  'Cream Ferret Cookie': 'Special', 'Icicle Yeti Cookie': 'Special',
  'Marshmallow Bunny Cookie': 'Special', 'Snapdragon Cookie': 'Special',
  'Pom-Pom Dough Cookie': 'Super Epic', 'Venom Dough Cookie': 'Super Epic',
  'Adventurer Cookie': 'Rare', 'Alchemist Cookie': 'Rare', 'Avocado Cookie': 'Rare',
  'Blackberry Cookie': 'Rare', 'Carrot Cookie': 'Rare', 'Cherry Cookie': 'Rare',
  'Clover Cookie': 'Rare', 'Custard Cookie III': 'Rare', 'Devil Cookie': 'Rare',
  'Gumball Cookie': 'Rare', 'Knight Cookie': 'Rare', 'Onion Cookie': 'Rare',
  'Pancake Cookie': 'Rare', 'Princess Cookie': 'Rare',
  'GingerBrave': 'Common', 'Strawberry Cookie': 'Common', 'Ninja Cookie': 'Common',
  'Angel Cookie': 'Common', 'Muscle Cookie': 'Common', 'Wizard Cookie': 'Common', 'Beet Cookie': 'Common',
};

// Generate the full cookie list
function generateCookieList(): CookieData[] {
  const allCookieNames = Object.keys(BUILD_DATA);

  return allCookieNames.map(name => {
    const video = VIDEO_MATCHES[name];
    const build = BUILD_DATA[name];
    const hasBuild = build && build.beascuit !== '';

    return {
      name,
      slug: slugify(name),
      rarity: COOKIE_RARITIES[name] || 'Epic',
      type: COOKIE_TYPES[name] || 'Support',
      build: hasBuild ? build : null,
      youtubeVideoUrl: video?.url || null,
      youtubeVideoTitle: video?.title || null,
      allVideos: video?.allVideos || (video ? [{ url: video.url, title: video.title, date: '' }] : []),
      wikiUrl: wikiUrl(name),
      imageUrl: IMAGE_URLS[name] || null,
    };
  });
}

export const ALL_COOKIES: CookieData[] = generateCookieList();

export function getCookiesByRarity(rarity: CookieRarity): CookieData[] {
  return ALL_COOKIES.filter(c => c.rarity === rarity);
}

export function getCookieBySlug(slug: string): CookieData | undefined {
  return ALL_COOKIES.find(c => c.slug === slug);
}

export function getRecentlyFeaturedCookie(): CookieData {
  // Pom-Pom Dough is the most recently released cookie with a gear guide
  return ALL_COOKIES.find(c => c.name === 'Pom-Pom Dough Cookie') || ALL_COOKIES[0];
}

// Stat abbreviation explanations
export const STAT_GLOSSARY: Record<string, string> = {
  'CD': 'Cooldown',
  'DMGR': 'Damage Resist',
  'DMGRB': 'DMG Resist Bypass',
  'ATK': 'Attack',
  'ATKS': 'Attack Speed',
  'CRIT': 'Critical Hit',
  'HP': 'Hit Points',
  'DBR': 'Debuff Resist',
  'AMPB': 'Amplify Buff',
  'DEF': 'Defense',
};

// Common knowledge tips from supporting document
export const GEAR_TIPS = {
  beascuits: [
    'Always break down Common, Rare, and Epic Beascuits. Legendary+ only.',
    'Always attune your Beascuits fully — all 4 symbols must match.',
    'Reset Beascuits for optimal stats. Aim for 15%, but always keep stats in purple.',
    'Tainted Beascuits add 20% elemental damage. NEVER put a Tainted Beascuit on a non-elemental cookie.',
    'Legendary Cookies with an elemental touch have no stat difference vs base Legendary.',
    'Tainted Beascuits cannot be reset for additional elemental damage.',
  ],
  toppings: [
    'Optimal substat priority: Cooldown > Damage Resistance > Critical > Attack.',
    'Focus on Epic toppings only — they have 3 substats.',
    'If a topping lacks preferred sub effects, replace it when possible.',
  ],
  tarts: [
    'Only use Epic tarts. Break down Rares and Commons.',
    'Keep all tarts, but prioritize purple percentages on your main cookies.',
    'Always connect your Tart to toppings for the 6-piece set bonus.',
  ],
};

// Templated prose blurb stitched from cookie identity + role + investment + build context.
// Used on /gear-guide/[slug] pages to add substantive per-page content beyond the build cards.
const TYPE_ROLE_BLURBS: Record<CookieType, string> = {
  Charge: 'Charge Cookies sit in the front line, soaking aggro and disrupting enemy backlines.',
  Magic: 'Magic Cookies deal high single-target or area magic damage from the middle line.',
  Ranged: 'Ranged Cookies pump consistent physical damage from the back without taking aggro.',
  Ambush: 'Ambush Cookies dive enemy backlines for burst damage and assassination plays.',
  Defense: 'Defense Cookies anchor the front line with high HP and crowd-control survival.',
  Healing: 'Healing Cookies keep your team alive through sustain checks — non-negotiable in long fights.',
  Support: 'Support Cookies enable the rest of the team with buffs, debuffs, and resource cycling.',
  Bomber: 'Bomber Cookies deliver area damage spikes that wipe waves and reset boss rotations.',
  BTS: 'BTS Cookies are collab specials — flavor-forward and fun, but rarely meta-defining.',
};

const RARITY_INVESTMENT_BLURBS: Record<CookieRarity, string> = {
  Beast: "Beast Cookies are the game's rarest tier and reward focused soulstone investment — typically late-game pulls only.",
  Ancient: 'Ancients anchor most top-tier comps. Worth chasing once your core Legendary roster is settled.',
  Legendary: "Legendaries are the meta backbone — top-priority pulls if you're optimizing for Arena, Guild Battle, or Beast-Yeast.",
  Dragon: 'Dragon Cookies release as limited-event banners — pull during the window or wait months for a possible return.',
  'Super Epic': 'Super Epics are mid-investment picks — strong enough to slot into top comps without the crystal cost of a Legendary.',
  Epic: 'Epics are F2P-friendly and cover most early-to-mid-game roles; the best Epics punch well above their tier.',
  Rare: 'Rare Cookies fill out your bench during early progression — useful at low levels, generally benched as you climb.',
  Common: 'Common Cookies are progression staples — useful early, but expect to bench them as your roster grows.',
  Special: 'Special Cookies are typically event or collab releases with mechanics outside the standard rarity tiers.',
};

function rarityArticle(rarity: CookieRarity): string {
  // "an Epic", "an Ancient", "a Legendary", "a Beast", "a Super Epic", etc.
  const startsWithVowel = /^[aeiou]/i.test(rarity);
  return startsWithVowel ? 'an' : 'a';
}

export function getCookieDescription(cookie: CookieData): string {
  const article = rarityArticle(cookie.rarity);

  const sentence1 = `${cookie.name} is ${article} ${cookie.rarity} Cookie in Cookie Run: Kingdom, built around the ${cookie.type} archetype.`;
  const sentence2 = TYPE_ROLE_BLURBS[cookie.type];
  const sentence3 = RARITY_INVESTMENT_BLURBS[cookie.rarity];

  const hasFullBuild =
    !!cookie.build && cookie.build.beascuit !== '' && cookie.build.toppings !== '';

  const sentence4 = hasFullBuild
    ? `The current Mythras-tested loadout runs ${cookie.build!.toppings}, with a ${cookie.build!.beascuit} beascuit and a ${cookie.build!.tart} tart for ${cookie.build!.tartStat}.`
    : `Our full ${cookie.name} loadout is still in testing — check back as the build evolves.`;

  return [sentence1, sentence2, sentence3, sentence4].join(' ');
}
