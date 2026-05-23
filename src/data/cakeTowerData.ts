// ─────────────────────────────────────────────────────────
// Sublime Cake Tower — Full Guide Data
// Covers: Decadent Choco Cake Tower & Endless Strawberry Cake Tower
// ─────────────────────────────────────────────────────────

export interface VideoGuide {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
}

export interface TrayData {
  tray: number;
  name: string;
  boss?: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Very Hard' | 'Extreme';
  description: string;
  tips: string[];
  recommendedTeam?: string[];
  treasures?: string[];
  videos: VideoGuide[];
  stageEffect?: string;
  bonusCondition?: string;
}

export interface TowerData {
  slug: string;
  name: string;
  shortName: string;
  totalTrays: number;
  description: string;
  color: string;
  accentColor: string;
  icon: string;
  mechanics: string[];
  trays: TrayData[];
}

// ─────────────────────────────────────────────────────────
// DECADENT CHOCO CAKE TOWER — 45 Trays (Boss Rush)
// ─────────────────────────────────────────────────────────
export const DECADENT_CHOCO: TowerData = {
  slug: 'decadent-choco',
  name: 'Decadent Choco Cake Tower',
  shortName: 'Choco Tower',
  totalTrays: 45,
  description: 'A brutal boss-rush tower where each tray pits you against a single powered-up boss. All cookies are boosted to at least 4-star Lv.70, but bosses hit hard and punish rapid-attack compositions. Strategic cookie selection and understanding boss mechanics is everything here.',
  color: '#8B4513',
  accentColor: '#D2691E',
  icon: '🍫',
  mechanics: [
    'Each tray is a single boss fight — no waves, no filler',
    'All cookies auto-boosted to minimum 4-star Level 70',
    'Bosses inflict undispellable ATK Down & ATK SPD Down on cookies that deal too many rapid hits',
    'Periodic damage (Poison, Burn) bypasses the hit-shield mechanic',
    'Bonds, Sugar Gnome Lab, Costume Sets, Guild Relics, Landmarks, and Topping bonus effects are disabled',
    'Rewards are one-time only — no seasonal refresh',
    'No keys or energy required to attempt trays',
  ],
  trays: [
    {
      tray: 1,
      name: 'Mangosteen Water Bomber',
      boss: 'Mangosteen Water Bomber',
      difficulty: 'Easy',
      description: 'Your first real test. The Mangosteen Water Bomber features an HP Shield that absorbs damage. Electricity-type damage is especially effective here.',
      tips: [
        'Use Electricity-type cookies to break the HP Shield faster',
        'This is a warm-up tray — most compositions will clear it',
        'Practice your timing and treasure usage here',
      ],
      recommendedTeam: ['Stormbringer Cookie', 'Twizzly Gummy Cookie', 'Black Lemonade Cookie', 'Snapdragon Cookie', 'Wildberry Cookie'],
      treasures: ['Old Pilgrim\'s Scroll', 'Squishy Jelly Watch', 'Librarian\'s Enchanted Robes'],
      videos: [
        { id: 'amWGXmI0suw', title: 'F2P Trays 1 to 10 Guide — No Stormbringer', date: '2024-05-02' },
      ],
    },
    {
      tray: 2,
      name: 'Cream Roll Hog Rider',
      boss: 'Cream Roll Hog Rider',
      difficulty: 'Easy',
      description: 'The Hog Rider stuns frequently and summons minions. Focus on dealing damage quickly between stun windows.',
      tips: [
        'Bring a cleanser or stun-resistant cookies',
        'AoE damage helps manage summoned adds',
        'Time your burst damage for when the boss is vulnerable',
      ],
      videos: [
        { id: 'amWGXmI0suw', title: 'F2P Trays 1 to 10 Guide — No Stormbringer', date: '2024-05-02' },
      ],
    },
    {
      tray: 3,
      name: 'Forest Guardian',
      difficulty: 'Easy',
      description: 'An early-game boss with manageable damage output. A good place to test team synergies before things ramp up.',
      tips: ['Standard DPS compositions work fine here', 'Keep your healer healthy for later trays'],
      videos: [
        { id: 'amWGXmI0suw', title: 'F2P Trays 1 to 10 Guide — No Stormbringer', date: '2024-05-02' },
      ],
    },
    {
      tray: 4,
      name: 'Jellyfish Monarch',
      difficulty: 'Easy',
      description: 'Water-themed boss with periodic AoE splash damage. Healing is important to sustain through chip damage.',
      tips: ['Bring consistent healing', 'Avoid grouping your team if possible'],
      videos: [
        { id: 'amWGXmI0suw', title: 'F2P Trays 1 to 10 Guide — No Stormbringer', date: '2024-05-02' },
      ],
    },
    {
      tray: 5,
      name: 'Poisonous Mushroom Beast',
      difficulty: 'Easy',
      description: 'Applies poison to your team. Having a cleanser or high sustained healing makes this fight manageable.',
      tips: ['Cleanse debuffs regularly', 'Poison deals % HP damage — tankier teams suffer more per tick'],
      videos: [
        { id: 'amWGXmI0suw', title: 'F2P Trays 1 to 10 Guide — No Stormbringer', date: '2024-05-02' },
      ],
    },
    {
      tray: 6,
      name: 'Frozen Peak Prowler',
      boss: 'Frozen Peak Prowler',
      difficulty: 'Medium',
      description: 'A serious difficulty spike. The Prowler deals massive damage and inflicts Injury, which reduces max HP. Pure Vanilla Cookie is one of the only cookies who can remove Injury.',
      tips: [
        'Pure Vanilla Cookie can remove the Injury debuff — nearly essential here',
        'Fire-type damage is effective against this boss',
        'Time your healing carefully — Injury can snowball fast',
        'This is the first real wall for many players',
      ],
      recommendedTeam: ['Pure Vanilla Cookie', 'Burning Spice Cookie', 'Fire Spirit Cookie', 'Snapdragon Cookie', 'Hollyberry Cookie'],
      treasures: ['Old Pilgrim\'s Scroll', 'Squishy Jelly Watch', 'Pilgrim\'s Torch'],
      videos: [
        { id: 'amWGXmI0suw', title: 'F2P Trays 1 to 10 Guide — No Stormbringer', date: '2024-05-02' },
      ],
    },
    {
      tray: 7,
      name: 'Cursed Tree Spirit',
      difficulty: 'Medium',
      description: 'Debuff-heavy boss that curses your cookies, reducing their effectiveness. Bring cleansers or debuff-immune cookies.',
      tips: ['Cleanse is critical', 'Burst damage can end the fight before debuffs stack'],
      videos: [
        { id: 'amWGXmI0suw', title: 'F2P Trays 1 to 10 Guide — No Stormbringer', date: '2024-05-02' },
      ],
    },
    {
      tray: 8,
      name: 'Sandstorm Golem',
      difficulty: 'Medium',
      description: 'Tanky boss with high DEF. Needs sustained damage or DEF-shred to take down efficiently.',
      tips: ['DEF-penetrating skills help significantly', 'This is a long fight — sustain matters'],
      videos: [
        { id: 'amWGXmI0suw', title: 'F2P Trays 1 to 10 Guide — No Stormbringer', date: '2024-05-02' },
      ],
    },
    {
      tray: 9,
      name: 'Angry Iced Snowman',
      boss: 'Angry Iced Snowman',
      difficulty: 'Medium',
      description: 'Freezes cookies and deals AoE ice damage. Fire-type cookies melt through this fight. A dedicated Mythras video guide covers the best strategies.',
      tips: [
        'Fire-type cookies have elemental advantage',
        'The freeze effect can lock your DPS — bring freeze immunity or cleanse',
        'Time your burst around freeze windows',
      ],
      videos: [
        { id: 'cUcZQHNiR0U', title: 'Tray 9 — Angry Iced Snowman Guide', date: '2024-04-28' },
        { id: 'amWGXmI0suw', title: 'F2P Trays 1 to 10 Guide — No Stormbringer', date: '2024-05-02' },
      ],
    },
    {
      tray: 10,
      name: 'Magma Wyrm',
      difficulty: 'Medium',
      description: 'Fire-based boss dealing sustained burn damage. Water/Ice cookies can help here. Marks the end of the intro phase.',
      tips: ['Use Ice-type cookies for elemental advantage', 'Healing is essential to survive burn damage'],
      videos: [
        { id: 'amWGXmI0suw', title: 'F2P Trays 1 to 10 Guide — No Stormbringer', date: '2024-05-02' },
      ],
    },
    {
      tray: 11,
      name: 'Nightmare-Ridden Librarian',
      boss: 'Nightmare-Ridden Librarian',
      difficulty: 'Medium',
      description: 'A tricky boss that applies debilitating status effects. Understanding the timing windows is crucial for clean clears.',
      tips: [
        'Learn the attack pattern — it telegraphs big hits',
        'Cleansers are valuable against the debuff rotation',
      ],
      videos: [
        { id: 'U98w2Gof61U', title: 'Tray 11 — Nightmare-Ridden Librarian Guide', date: '2024-05-04' },
      ],
    },
    {
      tray: 12,
      name: 'Cinnamon Wyvern',
      boss: 'Cinnamon Wyvern',
      difficulty: 'Medium',
      description: 'An aerial boss that swoops in for devastating attacks. Positioning and timing your skills is key to surviving.',
      tips: [
        'Time your skills for when the Wyvern lands',
        'Ranged DPS can be helpful during flight phases',
      ],
      videos: [
        { id: 'M_jIpryvCgg', title: 'Tray 12 — Cinnamon Wyvern Guide', date: '2024-05-10' },
      ],
    },
    {
      tray: 13,
      name: 'Strawberry Crepe Cookie',
      boss: 'Strawberry Crepe Cookie',
      difficulty: 'Hard',
      description: 'A powerful cookie boss with high DEF and a damage-reflecting shield. Burst through the shield or wait for it to drop.',
      tips: [
        'Do NOT attack into the shield reflection — time your burst',
        'Sustained damage is safer than burst during shield',
      ],
      videos: [
        { id: 'mgWvNoYiKX4', title: 'Tray 13 — Strawberry Crepe Cookie Guide', date: '2024-05-11' },
      ],
    },
    {
      tray: 14,
      name: 'Cakeberus',
      boss: 'Cakeberus',
      difficulty: 'Hard',
      description: 'A three-headed beast that attacks from multiple angles. Each head has different abilities, making this a chaotic fight.',
      tips: [
        'Focus one head at a time if possible',
        'AoE healing is essential — damage comes from everywhere',
        'High DPS helps end the fight before mechanics overwhelm',
      ],
      videos: [
        { id: 'HVumYUrpoBY', title: 'Tray 14 — Cakeberus Guide', date: '2024-05-11' },
      ],
    },
    {
      tray: 16,
      name: 'Eye of the Calamity',
      boss: 'Eye of the Calamity',
      difficulty: 'Hard',
      description: 'A menacing boss with powerful AoE attacks. Requires strong sustain and well-timed burst to overcome.',
      tips: [
        'Save your burst for vulnerability windows',
        'Keep your team topped off — the AoE is relentless',
      ],
      videos: [
        { id: 'i_rbEWifPm8', title: 'F2P Tray 16 — Eye of the Calamity Guide', date: '2024-12-04' },
      ],
    },
    {
      tray: 17,
      name: 'Madeleine Cookie\'s Crimson Knight',
      boss: 'Madeleine Cookie\'s Crimson Knight',
      difficulty: 'Hard',
      description: 'A corrupted version of Madeleine Cookie with devastating melee combos. High DEF and rapid attacks make this a sustained battle.',
      tips: [
        'Bring a strong frontline to absorb the melee combos',
        'Healers need to be active the entire fight',
      ],
      videos: [
        { id: '8exp67caY44', title: 'F2P Tray 17 — Crimson Knight Guide', date: '2024-12-07' },
      ],
    },
    {
      tray: 18,
      name: 'One Who Consumes Apathy',
      boss: 'One Who Consumes Apathy',
      difficulty: 'Hard',
      description: 'A dark entity that drains energy from your team. Requires sustained healing and burst damage to overcome before your cookies wither.',
      tips: [
        'Burst damage is essential before the drain becomes overwhelming',
        'Multiple strategies exist — watch both video guides for different approaches',
      ],
      videos: [
        { id: 'KHzXUpHruyw', title: 'F2P Tray 18 — One Who Consumes Apathy Guide', date: '2024-12-08' },
        { id: '8F71cWBXqk8', title: '2025 Tray 18 — Best x2 Strategies', date: '2025-07-08' },
      ],
    },
    {
      tray: 19,
      name: 'The Royal Gardener',
      boss: 'The Royal Gardener',
      difficulty: 'Hard',
      description: 'A nature-themed boss that summons thorny barriers and heals itself. You need consistent damage to outpace the self-heal.',
      tips: [
        'Anti-heal or heal-reduction effects are useful',
        'Burst through healing windows when the boss is casting',
      ],
      videos: [
        { id: 'JCn7FlD9shY', title: 'F2P Tray 19 — Royal Gardener Guide', date: '2024-12-08' },
        { id: 'Q5AOI3DhQ3s', title: '2025 Tray 19 — Best x2 Strategies', date: '2025-07-13' },
      ],
    },
    {
      tray: 20,
      name: 'Animatronic of Deceit',
      boss: 'Animatronic of Deceit',
      difficulty: 'Very Hard',
      description: 'One of the most infamous bosses in the tower. RNG-heavy mechanics make this fight unpredictable. Multiple team strategies exist — check the video guides for the latest approaches.',
      tips: [
        'This fight has significant RNG — don\'t get tilted, retry if needed',
        'Scroll, Whistle, and Fire Torch treasures are commonly recommended',
        'Multiple viable strategies exist — the 2025 guide covers three different teams',
      ],
      recommendedTeam: ['Stormbringer Cookie', 'Captain Caviar Cookie', 'Rebel Cookie', 'Snapdragon Cookie', 'Hollyberry Cookie'],
      treasures: ['Old Pilgrim\'s Scroll', 'Sugar Swan\'s Shining Feather', 'Pilgrim\'s Torch'],
      videos: [
        { id: 'TGjDpcoqS9w', title: 'F2P Tray 20 — Animatronic of Deceit Guide', date: '2024-12-09' },
        { id: '8ZdLvU_sGcU', title: '2025 Tray 20 — Best x3 Teams & Strategies', date: '2025-07-03' },
      ],
    },
    {
      tray: 21,
      name: 'Choco Planet',
      boss: 'Choco Planet',
      difficulty: 'Hard',
      description: 'A massive chocolate-themed boss with wide-area attacks. Positioning matters — spread your team to minimize AoE damage.',
      tips: ['Spread your cookies to avoid overlapping AoE', 'Sustained DPS with strong healing clears reliably'],
      videos: [
        { id: 'gCCQlQeT3MQ', title: 'F2P Tray 21 — Choco Planet Guide', date: '2024-12-10' },
      ],
    },
    {
      tray: 22,
      name: 'Raspberry Cookie',
      boss: 'Raspberry Cookie',
      difficulty: 'Hard',
      description: 'Raspberry Cookie targets your highest ATK cookie and deals devastating single-target damage. Protect your carries or outpace her burst.',
      tips: [
        'She targets highest ATK — consider who you bring',
        'Damage immunity or shields on your carry helps survive her burst',
      ],
      videos: [
        { id: 'OQHGkCdpMKk', title: 'F2P Tray 22 — Raspberry Cookie Guide', date: '2024-12-11' },
      ],
    },
    {
      tray: 23,
      name: 'Dark Choco Cookie (Phase 1)',
      boss: 'Dark Choco Cookie',
      difficulty: 'Hard',
      description: 'The first Dark Choco encounter. His DEF-shredding attacks make him dangerous for tanky compositions. Burst him down fast.',
      tips: ['His DEF shred can cripple your frontline', 'Consider running without a traditional tank'],
      videos: [
        { id: 'libD79_2Zks', title: 'F2P Tray 23 — Dark Choco Cookie Guide', date: '2024-12-23' },
      ],
    },
    {
      tray: 24,
      name: 'Dark Choco Cookie (Phase 2)',
      boss: 'Dark Choco Cookie',
      difficulty: 'Very Hard',
      description: 'An empowered version of Dark Choco with enhanced mechanics. The DEF shred is even more aggressive here.',
      tips: ['Same strategy as Tray 23 but tighter execution required', 'You need more burst damage to keep pace'],
      videos: [
        { id: 'hkmIWdeY3q0', title: 'F2P Tray 24 — Dark Choco Cookie Guide', date: '2025-01-11' },
      ],
    },
    {
      tray: 25,
      name: 'Dark Choco Cookie (Phase 3)',
      boss: 'Dark Choco Cookie',
      difficulty: 'Very Hard',
      description: 'The final Dark Choco encounter and a significant wall for many players. His full power is unleashed here.',
      tips: ['This is a serious DPS check', 'Consider watching the video guide for specific team compositions'],
      videos: [
        { id: 'q1pe65AJzEU', title: 'F2P Tray 25 — Dark Choco Cookie Guide', date: '2025-03-02' },
      ],
    },
    {
      tray: 26,
      name: 'Shacka Rocka',
      boss: 'Shacka Rocka',
      difficulty: 'Very Hard',
      description: 'This boss takes reduced damage from non-CRIT attacks and is weak to Electricity. You need a CRIT-stacking team with Electricity synergy to break through.',
      tips: [
        'CRIT rate is essential — non-CRIT hits barely scratch this boss',
        'Electricity-type cookies deal bonus damage',
        'Stormbringer Cookie is nearly mandatory here',
      ],
      recommendedTeam: ['Stormbringer Cookie', 'Twizzly Gummy Cookie', 'Black Lemonade Cookie', 'Snapdragon Cookie', 'Captain Caviar Cookie'],
      treasures: ['Old Pilgrim\'s Scroll', 'Squishy Jelly Watch', 'Sugar Swan\'s Shining Feather'],
      videos: [
        { id: 'RzP2xxQaa0c', title: 'F2P Tray 26 — Shacka Rocka', date: '2025-07-03' },
        { id: '5yg2riOO0Sc', title: 'F2P ALL TRAYS — Tray 26 to 35 Guide', date: '2025-07-09' },
      ],
    },
    {
      tray: 27,
      name: 'Black Forest Cookie',
      boss: 'Black Forest Cookie',
      difficulty: 'Extreme',
      description: 'One of the hardest trays in the tower. Standard meta picks like Black Pearl and Sea Fairy underperform here. Cream Soda Cookie has emerged as the sleeper MVP.',
      tips: [
        'Cream Soda Cookie outperforms typical meta DPS here',
        'Don\'t rely on standard Sea Fairy / Black Pearl compositions',
        'Patience and retries are part of the strategy',
      ],
      videos: [
        { id: '4uzMOiZ3s3g', title: 'F2P Tray 27 — Black Forest Cookie', date: '2025-07-04' },
        { id: '5yg2riOO0Sc', title: 'F2P ALL TRAYS — Tray 26 to 35 Guide', date: '2025-07-09' },
      ],
    },
    {
      tray: 35,
      name: 'The Warden',
      difficulty: 'Extreme',
      description: 'A major wall in the mid-30s range. This boss requires specific team compositions and well-timed skill usage.',
      tips: ['Check the video guide for the latest F2P strategy', 'Multiple retries may be needed'],
      videos: [
        { id: 'bJVZP_BlVQI', title: 'Decadent Choco Tray 35', date: '2025-07-07' },
        { id: '5yg2riOO0Sc', title: 'F2P ALL TRAYS — Tray 26 to 35 Guide', date: '2025-07-09' },
      ],
    },
    {
      tray: 36,
      name: 'Abalone Cookie\'s Aquamech',
      boss: 'Abalone Cookie\'s Aquamech',
      difficulty: 'Extreme',
      description: 'A mechanized boss with high burst damage and defensive phases. Breaking through the mech\'s armor is the core challenge.',
      tips: ['Target the weak points during vulnerability windows', 'Strong burst damage needed to break armor phases'],
      videos: [
        { id: 'bakCsrkbDMg', title: 'F2P Tray 36 — Abalone Cookie\'s Aquamech', date: '2025-12-21' },
      ],
    },
    {
      tray: 37,
      name: 'Agar Agar Cookie',
      boss: 'Agar Agar Cookie',
      difficulty: 'Extreme',
      description: 'A debuff-heavy boss that punishes unprepared teams. Specific cookie choices make or break this fight.',
      tips: ['Cleanse is critical against her debuff rotation', 'Check the video for the latest team comp'],
      videos: [
        { id: '2XqiH97BdM4', title: 'F2P Tray 37 — Agar Agar Cookie', date: '2025-12-22' },
      ],
    },
    {
      tray: 39,
      name: 'The Unknown',
      difficulty: 'Extreme',
      description: 'A mysterious and punishing boss in the upper trays. Specific strategies are essential — improvising will not work here.',
      tips: ['Follow the video guide closely', 'This is one of the hardest trays before the finale'],
      videos: [
        { id: 'gSOXnGSZCcw', title: 'F2P Tray 39', date: '2025-12-23' },
      ],
    },
    {
      tray: 40,
      name: 'Smoked Cheese Cookie',
      boss: 'Smoked Cheese Cookie',
      difficulty: 'Extreme',
      description: 'A powerful late-game boss with complex mechanics. Smoked Cheese Cookie has devastating AoE and requires tight execution to overcome.',
      tips: [
        'Study the attack patterns carefully before committing resources',
        'F2P-friendly strategies exist — check the video guide',
      ],
      videos: [
        { id: '0DQQyqI3GmA', title: 'F2P Tray 40 — Smoked Cheese Cookie', date: '2026-01-01' },
      ],
    },
    {
      tray: 42,
      name: 'The Dumpling Kings',
      boss: 'The Dumpling Kings',
      difficulty: 'Extreme',
      description: 'A multi-target boss fight against the Dumpling Kings. Managing multiple enemies with different abilities is the core challenge.',
      tips: [
        'Prioritize targets based on threat level',
        'AoE damage is valuable but single-target burst may be needed for specific kings',
      ],
      videos: [
        { id: 'FeT5wvWvDaw', title: 'F2P Tray 42 — The Dumpling Kings', date: '2026-01-03' },
      ],
    },
    {
      tray: 45,
      name: 'The Final Challenge',
      difficulty: 'Extreme',
      description: 'The ultimate test of the Decadent Choco Cake Tower. Only the most dedicated players with optimized compositions reach and clear this tray.',
      tips: [
        'Everything you\'ve learned in the tower culminates here',
        'Expect to need multiple retries and team adjustments',
        'Watch the Ultimate Guide video for comprehensive strategy',
      ],
      videos: [
        { id: 'TZlW6K3-w4M', title: 'Ultimate Decadent Choco Cake Tower Guide', date: '2024-05-05' },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// ENDLESS STRAWBERRY CAKE TOWER — 250 Trays (Wave-Based)
// ─────────────────────────────────────────────────────────
export const ENDLESS_STRAWBERRY: TowerData = {
  slug: 'endless-strawberry',
  name: 'Endless Strawberry Cake Tower',
  shortName: 'Strawberry Tower',
  totalTrays: 250,
  description: 'A massive 250-tray gauntlet of wave-based combat drawn from Beast-Yeast World Exploration. Every 10-20 trays features a boss fight. Stage effects, bonus conditions for team composition, and escalating difficulty make this a true endurance test. The tower rewards smart team-building and adaptability.',
  color: '#DC143C',
  accentColor: '#FF6B81',
  icon: '🍓',
  mechanics: [
    'Trays feature waves of enemies from Beast-Yeast World Exploration',
    'Boss trays appear every 10-20 trays with unique mechanics',
    'All cookies auto-boosted to minimum 4-star Level 70',
    'Some trays have Stage Effects (Data Copy, Paper Storm, etc.)',
    'Bonus conditions reward specific team compositions (e.g., "use 3 Ranged cookies")',
    'Same system restrictions as Choco Tower — Bonds, Lab, Costumes, etc. disabled',
    'Rewards are one-time per tray — Coins, Star Jellies, Crystals, Chaos Cake Pieces',
    'Milestone rewards at trays 5, 10, 16, 20, 35, 50, 75, 100, 150, 200+',
  ],
  trays: [
    {
      tray: 1,
      name: 'Trays 1-10 — The Beginning',
      difficulty: 'Easy',
      description: 'The first 10 trays ease you into the Strawberry Tower. Enemies are manageable and you can experiment with different team compositions here. An all-Epic team can clear these floors.',
      tips: [
        'Great place to test compositions before investing in higher trays',
        'All-Epic teams are viable through these trays',
        'Start building your understanding of the wave patterns',
      ],
      videos: [
        { id: '_5fm_lUXbWk', title: 'ALL EPICS — Trays 1 to 10 Guide', date: '2024-05-08' },
      ],
    },
    {
      tray: 11,
      name: 'Trays 11-20 — Building Momentum',
      difficulty: 'Easy',
      description: 'Difficulty begins to ramp up but remains accessible. Mostly Epic teams can still push through with good execution.',
      tips: [
        'Team synergy starts mattering more here',
        'Pay attention to which enemy types appear — elemental advantages help',
      ],
      videos: [
        { id: '0fAwfkpVFHw', title: 'ALL EPICS — Trays 11 to 20 Guide', date: '2024-05-09' },
      ],
    },
    {
      tray: 40,
      name: 'Tray 40 — Doom Star X-1 Protection Unit',
      boss: 'Doom Star X-1 Protection Unit',
      difficulty: 'Medium',
      description: 'Your first major boss checkpoint. The Doom Star has a shield bar that takes 30 seconds to disappear unless you actively attack it. The bonus condition wants 3 Ranged cookies.',
      tips: [
        'Burst through the shield rather than waiting for the 30s timer',
        'Stardust Cookie\'s curse reduces boss damage significantly',
        'Wind Archer Cookie makes an excellent DPS pick here',
        'Affogato Cookie is a viable alternative DPS',
      ],
      bonusCondition: 'Use 3 Ranged cookies',
      recommendedTeam: ['Stardust Cookie', 'Wind Archer Cookie', 'Snapdragon Cookie', 'Creme Brulee Cookie', 'Frost Queen Cookie'],
      videos: [
        { id: '8FXvSeOBu1g', title: 'F2P Tray 40 — Beat Doom Star X-1 Protection Unit', date: '2024-05-09' },
      ],
    },
    {
      tray: 41,
      name: 'Trays 41-50 — Mid Tower Push',
      difficulty: 'Medium',
      description: 'The grind intensifies. Enemy waves become more varied and punishing. Smart cookie selection based on enemy type becomes important.',
      tips: [
        'Mostly Epic teams may start struggling — consider your best cookies',
        'Wave composition awareness helps you pre-plan your approach',
      ],
      videos: [
        { id: 'REExJkXJgL4', title: 'MOSTLY ALL EPICS — Trays 41 to 50 Guide', date: '2024-05-11' },
      ],
    },
    {
      tray: 50,
      name: 'Tray 50 — Ruler of the Golden City',
      boss: 'Ruler of the Golden City',
      difficulty: 'Hard',
      description: 'A significant boss check. The Ruler hits hard and has multiple phases. Updated strategies from 2024 make this much more accessible.',
      tips: [
        'Check the UPDATED guide for the latest meta approach',
        'Original 2024 strategy and the October 2024 update both work',
      ],
      videos: [
        { id: '1N86Y580r0I', title: 'F2P Tray 50 — Beat Ruler of the Golden City', date: '2024-05-10' },
        { id: '0Vwu_fmYPes', title: 'UPDATED F2P Tray 50 Guide', date: '2024-10-15' },
      ],
    },
    {
      tray: 60,
      name: 'Tray 60 — M. Cursor',
      boss: 'M. Cursor',
      difficulty: 'Hard',
      description: 'M. Cursor features a shield that must be burst through with raw DPS. This fight rewards offensive compositions over defensive ones.',
      tips: [
        'Stack your highest burst DPS cookies',
        'Stormbringer + Black Lemonade + Twizzly Gummy combo shreds the shield',
        'Don\'t try to outlast — outrace the shield instead',
      ],
      recommendedTeam: ['Stormbringer Cookie', 'Black Lemonade Cookie', 'Twizzly Gummy Cookie', 'Creme Brulee Cookie', 'Snapdragon Cookie'],
      videos: [
        { id: 'a3ILpTJpaiM', title: 'UPDATED F2P Tray 60 Guide', date: '2024-10-12' },
      ],
    },
    {
      tray: 70,
      name: 'Tray 70 — Ice Candy Golem',
      boss: 'Ice Candy Golem',
      difficulty: 'Hard',
      description: 'A tanky ice boss with freezing mechanics. Fire-type cookies have a significant advantage here.',
      tips: ['Fire-type damage is highly effective', 'Bring freeze cleanse or immunity'],
      videos: [
        { id: '9TAtjEI9aWY', title: 'F2P Tray 70 — Ice Candy Golem Guide', date: '2024-05-12' },
      ],
    },
    {
      tray: 80,
      name: 'Tray 80 — Animatronic of Deceit',
      boss: 'Animatronic of Deceit',
      difficulty: 'Very Hard',
      description: 'The infamous Animatronic returns. RNG mechanics make this fight unpredictable. Two separate video guides cover the original and updated strategies.',
      tips: [
        'RNG is a factor — don\'t get discouraged by failed attempts',
        'The UPDATED October 2024 guide uses newer cookies and strategies',
        'Multiple team compositions can work — find what fits your roster',
      ],
      videos: [
        { id: 'fEBW-LVr-HQ', title: 'F2P Tray 80 — Animatronic of Deceit Guide', date: '2024-05-20' },
        { id: 'UJemxDgC33w', title: 'UPDATED F2P Tray 80 Guide', date: '2024-10-08' },
      ],
    },
    {
      tray: 92,
      name: 'Tray 92 — The Wall',
      difficulty: 'Very Hard',
      description: 'A notoriously difficult tray that blocks many players. The enemy composition is punishing and requires a specialized team.',
      tips: ['This is a common progression wall', 'Specific team compositions are needed to push past'],
      videos: [
        { id: '_lBpBWMsdOE', title: 'F2P Tray 92 Guide', date: '2024-09-01' },
      ],
    },
    {
      tray: 101,
      name: 'Trays 101-110 — One Team Strategy',
      difficulty: 'Very Hard',
      description: 'A single powerful team composition can sweep these 10 trays. This is the most efficient approach in the 100+ range.',
      tips: [
        'One well-built team can clear all 10 trays',
        'Watch the ONE TEAM guide for the most efficient composition',
        'Save resources by not building 10 different teams',
      ],
      videos: [
        { id: 'HPM2ViQGfTQ', title: 'ONE TEAM — Tray 101 to 110 Guide', date: '2024-12-05' },
      ],
    },
    {
      tray: 111,
      name: 'Trays 111-120 — One Team Strategy',
      difficulty: 'Very Hard',
      description: 'Continuing the one-team approach through the 110s. Enemy variety increases but a well-tuned team handles it.',
      tips: ['Follow the single-team strategy for efficiency'],
      videos: [
        { id: 'p4seVjCZXZc', title: 'ONE TEAM — Tray 111 to 120 Guide', date: '2024-12-06' },
      ],
    },
    {
      tray: 148,
      name: 'Tray 148 — Pre-Boss Grind',
      difficulty: 'Very Hard',
      description: 'One of the tougher wave trays before the Tray 150 boss. Enemy compositions are brutal and sustain is critical.',
      tips: ['Prepare your Tray 150 team while pushing through here'],
      videos: [
        { id: 'VSBkubAMCvw', title: 'Strawberry Cake Tower Tray 148', date: '2024-12-29' },
      ],
    },
    {
      tray: 150,
      name: 'Tray 150 — Nutmeg Tiger Cookie',
      boss: 'Nutmeg Tiger Cookie',
      difficulty: 'Extreme',
      description: 'A major milestone boss. Nutmeg Tiger Cookie is fast, aggressive, and punishes slow reactions. Clearing this tray is a badge of honor.',
      tips: [
        'Speed and burst are crucial — she doesn\'t give you breathing room',
        'This is a major achievement — celebrate when you clear it',
      ],
      videos: [
        { id: 'HyieCStt0RY', title: 'F2P Tray 150 — Nutmeg Tiger Cookie Guide', date: '2024-12-28' },
      ],
    },
    {
      tray: 151,
      name: 'Trays 151-160 — The Gauntlet',
      difficulty: 'Extreme',
      description: 'Post-150 difficulty jumps significantly. These trays require carefully optimized teams with specific cookies. Hollyberry frontline with Stormbringer DPS is a proven composition.',
      tips: [
        'Hollyberry, Stormbringer, Blueberry, Black Lemonade, Pure Vanilla is a strong baseline',
        'Treasures: Watch, Scroll, Whistle',
        'This range is where casual players typically hit a wall',
      ],
      recommendedTeam: ['Hollyberry Cookie', 'Stormbringer Cookie', 'Blueberry Cookie', 'Black Lemonade Cookie', 'Pure Vanilla Cookie'],
      treasures: ['Squishy Jelly Watch', 'Old Pilgrim\'s Scroll', 'Ghost Horn Whistle'],
      videos: [
        { id: 'lrm5In0v4ng', title: 'F2P Beat Trays 151 to 160 Guide', date: '2025-07-15' },
      ],
    },
    {
      tray: 160,
      name: 'Tray 160 — Webbed Spider Queen',
      boss: 'Webbed Spider Queen',
      difficulty: 'Extreme',
      description: 'A terrifying boss that webs your cookies and deals massive DoT. Breaking free from the webs quickly is essential to survival.',
      tips: [
        'Cleanse the web debuff immediately',
        'High burst DPS to end the fight before webs overwhelm you',
      ],
      videos: [
        { id: 'G-U7zttcgOY', title: 'F2P Beat Tray 160 — Webbed Spider Queen Guide', date: '2025-07-13' },
      ],
    },
    {
      tray: 161,
      name: 'Trays 161-170 — Deep Territory',
      difficulty: 'Extreme',
      description: 'You\'re in the deep end now. Team compositions shift significantly. Black Sapphire and Prune Juice cookies emerge as key players alongside Eternal Sugar for Full CD builds.',
      tips: [
        'PV, Black Sapphire, Prune Juice, Eternal Sugar (Full CD), Hollyberry for wave trays',
        'Matcha Cookie swaps in for Tray 170 specifically',
        'Full Cooldown builds on Eternal Sugar are essential',
      ],
      recommendedTeam: ['Pure Vanilla Cookie', 'Black Sapphire Cookie', 'Prune Juice Cookie', 'Eternal Sugar Cookie', 'Hollyberry Cookie'],
      videos: [
        { id: 'LC1h_1eofyI', title: 'F2P Beat Trays 161 to 170 Guide', date: '2025-07-17' },
      ],
    },
    {
      tray: 170,
      name: 'Tray 170 — Remorseful Sugar Swan',
      boss: 'Remorseful Sugar Swan',
      difficulty: 'Extreme',
      description: 'An emotionally devastating boss fight against the Sugar Swan. Elegant but deadly mechanics require precise timing and team composition.',
      tips: [
        'Matcha Cookie replaces Hollyberry in the 161-170 comp for this fight',
        'Two separate video guides cover different approaches',
      ],
      videos: [
        { id: 'wfWTSIPVBk4', title: 'F2P Beat Tray 170 — Remorseful Sugar Swan Guide', date: '2025-07-14' },
        { id: 'SyPxbcgV9FA', title: 'Strawberry Cake Tower Tray 170', date: '2025-07-14' },
      ],
    },
    {
      tray: 171,
      name: 'Trays 171-180 — The Dark Zone',
      difficulty: 'Extreme',
      description: 'Mystic Flour-based teams dominate this range. Caramel Arrow, Choco Drizzle, Hollyberry, and Dark Cacao form the core. The Living Abyss boss at Tray 180 requires 5 Darkness-type cookies for the bonus.',
      tips: [
        'Mystic Flour is the backbone cookie for this range',
        'Caramel Arrow + Choco Drizzle provide essential DPS',
        'Cape of Vanquisement, Whistle, Scroll for treasures in wave trays',
      ],
      recommendedTeam: ['Mystic Flour Cookie', 'Caramel Arrow Cookie', 'Choco Drizzle Cookie', 'Hollyberry Cookie', 'Dark Cacao Cookie'],
      treasures: ['Cape of Vanquisement', 'Ghost Horn Whistle', 'Old Pilgrim\'s Scroll'],
      videos: [
        { id: 'TbYNK7PN3TI', title: 'F2P Beat Trays 171 to 180 Guide', date: '2025-07-19' },
      ],
    },
    {
      tray: 180,
      name: 'Tray 180 — Living Abyss',
      boss: 'Living Abyss',
      difficulty: 'Extreme',
      description: 'The Living Abyss is one of the most challenging bosses in the entire tower. Abilities include Claws of Licorice, Sticky Venom, and Devour. The bonus condition requires 5 Darkness-type cookies.',
      tips: [
        'Bonus condition: 5 Darkness-type cookies',
        'Awakened Dark Cacao is incredibly powerful here',
        'Alternative team: Dark Choco, Caramel Arrow, Black Raisin, Choco Drizzle',
      ],
      bonusCondition: 'Use 5 Darkness-type cookies',
      recommendedTeam: ['Awakened Dark Cacao Cookie', 'Dark Choco Cookie', 'Caramel Arrow Cookie', 'Black Raisin Cookie', 'Choco Drizzle Cookie'],
      treasures: ['Librarian\'s Enchanted Robes', 'Old Pilgrim\'s Scroll', 'Ghost Horn Whistle'],
      videos: [
        { id: 'TbYNK7PN3TI', title: 'F2P Beat Trays 171 to 180 Guide', date: '2025-07-19' },
      ],
    },
    {
      tray: 181,
      name: 'Trays 181-190 — Endgame Territory',
      difficulty: 'Extreme',
      description: 'The final stretch before the ultimate boss. Mystic Flour and Wind Archer lead with Choco Mint support. Every team slot matters.',
      tips: [
        'Mystic Flour, Wind Archer, Choco Mint form the core',
        'Cape of Vanquisement + Whistle + Scroll for treasures',
        'This is endgame — expect to invest significant time',
      ],
      recommendedTeam: ['Mystic Flour Cookie', 'Wind Archer Cookie', 'Choco Mint Cookie', 'Snapdragon Cookie', 'Hollyberry Cookie'],
      videos: [
        { id: '4D2IJFXx9mQ', title: 'F2P Beat Trays 181 to 190 Guide', date: '2025-07-23' },
        { id: '6B5O6iXJInI', title: 'Tray 190 Time', date: '2025-07-23' },
      ],
    },
    {
      tray: 191,
      name: 'Trays 191-200 — The Inferno',
      difficulty: 'Extreme',
      description: 'Burning Spice-led teams with Fire Spirit dominate the final wave trays. The entire meta shifts to fire-focused compositions for this range.',
      tips: [
        'Burning Spice + Fire Spirit is the DPS core',
        'The meta completely changes from previous ranges',
        'Prepare specifically for Tray 200 boss while pushing',
      ],
      recommendedTeam: ['Burning Spice Cookie', 'Fire Spirit Cookie', 'Street Urchin Cookie', 'Nutmeg Tiger Cookie', 'Pitaya Dragon Cookie'],
      treasures: ['Pilgrim\'s Torch', 'Ghost Horn Whistle', 'Squishy Jelly Watch'],
      videos: [
        { id: 'Vcx4QaCG_OA', title: 'F2P Beat Trays 191 to 200 Guide', date: '2025-07-25' },
      ],
    },
    {
      tray: 200,
      name: 'Tray 200 — White Sugar Guardian Golem',
      boss: 'White Sugar Guardian Golem',
      difficulty: 'Extreme',
      description: 'The legendary Tray 200 boss. The White Sugar Guardian Golem is a towering challenge that only the most dedicated players conquer. Fire-type cookies are essential, and timing Eternal Sugar\'s skill for when the boss lands after jumping is critical.',
      tips: [
        'Fire-type cookies are mandatory',
        'Only use Eternal Sugar\'s skill when the boss lands after jumping back',
        'Burning Spice, Fire Spirit, Street Urchin, Nutmeg Tiger, Pitaya Dragon is the proven comp',
        'Pilgrim\'s Torch, Whistle, Watch for treasures',
        'This is the ultimate achievement in the Strawberry Tower',
      ],
      bonusCondition: 'Fire-type cookies deal bonus damage',
      recommendedTeam: ['Burning Spice Cookie', 'Fire Spirit Cookie', 'Street Urchin Cookie', 'Nutmeg Tiger Cookie', 'Pitaya Dragon Cookie'],
      treasures: ['Pilgrim\'s Torch', 'Ghost Horn Whistle', 'Squishy Jelly Watch'],
      videos: [
        { id: 'jFwycPL7AyY', title: 'F2P Beat Tray 200 — White Sugar Guardian Golem', date: '2025-07-24' },
      ],
    },
    {
      tray: 201,
      name: 'Trays 201-250 — Beyond the Golem',
      difficulty: 'Extreme',
      description: 'The newest trays added in recent updates. Only the most hardcore players push past Tray 200. Community strategies are still evolving for this range.',
      tips: [
        'Strategies for this range are still being developed',
        'Expect the meta to shift as new cookies release',
        'If you\'re here, you\'re among the best CRK players in the world',
      ],
      videos: [],
    },
  ],
};

// ─────────────────────────────────────────────────────────
// General overview videos
// ─────────────────────────────────────────────────────────
export const OVERVIEW_VIDEOS: VideoGuide[] = [
  { id: 'UcZDoez7BlI', title: 'Sublime Cake Tower — Complete Overview', date: '2024-04-24' },
  { id: 'V-CIZ9eS8hE', title: 'Sublime Cake Tower 2.0 — What Changed', date: '2024-04-24' },
  { id: 'TZlW6K3-w4M', title: 'Ultimate Decadent Choco Cake Tower Guide — Self Improvement Strategies', date: '2024-05-05' },
];

export const ALL_TOWERS: TowerData[] = [DECADENT_CHOCO, ENDLESS_STRAWBERRY];

// Helper: get difficulty color
export function getDifficultyColor(d: TrayData['difficulty']): string {
  switch (d) {
    case 'Easy': return '#4ade80';
    case 'Medium': return '#facc15';
    case 'Hard': return '#f97316';
    case 'Very Hard': return '#ef4444';
    case 'Extreme': return '#dc2626';
  }
}

// Helper: get difficulty bg
export function getDifficultyBg(d: TrayData['difficulty']): string {
  switch (d) {
    case 'Easy': return 'bg-green-500/10 text-green-400 border-green-500/20';
    case 'Medium': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
    case 'Hard': return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
    case 'Very Hard': return 'bg-red-500/10 text-red-400 border-red-500/20';
    case 'Extreme': return 'bg-red-600/10 text-red-300 border-red-600/20';
  }
}
