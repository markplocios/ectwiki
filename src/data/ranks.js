export const RANK_TIERS = {
  peasant: {
    name: 'Peasant',
    color: '#9ca3af',
    ranks: [
      { name: 'Peasant IV', cost: 'Free', time: '5m', perks: 'Stone toolkit + chainmail armor, 16 bread', unlocks: 'Starting rank' },
      { name: 'Peasant III', cost: '100', time: '30m', perks: '16 steak, 8 torches' },
      { name: 'Peasant II', cost: '200', time: '1h', perks: '8 iron ingots, 16 coal', unlocks: 'Overworld /rtp' },
      { name: 'Peasant I', cost: '300', time: '5h', perks: 'Full iron toolkit, 32 redstone, 32 steak' },
    ],
  },
  adventurer: {
    name: 'Adventurer',
    color: '#fbbf24',
    ranks: [
      { name: 'Adventurer IV', cost: '500', time: '10h', perks: 'Iron armor, 16 sugar cane, 8 leather, 3 diamonds', unlocks: 'Kill 30 Rabbits required' },
      { name: 'Adventurer III', cost: '600', time: '15h', perks: 'Enchanting table, 8 bookshelves, 64 lapis lazuli' },
      { name: 'Adventurer II', cost: '700', time: '20h', perks: 'Lava bucket, brewing stand, 16 golden carrots' },
      { name: 'Adventurer I', cost: '800', time: '25h', perks: '32 nether quartz, 8 ender pearls', unlocks: 'Nether Access, /workbench' },
    ],
  },
  squire: {
    name: 'Squire',
    color: '#c084fc',
    ranks: [
      { name: 'Squire IV', cost: '1,000', time: '30h', perks: '8 blaze rods, 32 diamonds, 3 golden apples', unlocks: 'Nether /rtp, Kill 3 Ravagers required' },
      { name: 'Squire III', cost: '1,500', time: '35h', perks: '16 ancient debris, 16 gold ingots' },
      { name: 'Squire II', cost: '2,000', time: '40h', perks: '3 wither skulls, 32 soul sand, Soul Speed III book' },
      { name: 'Squire I', cost: '2,500', time: '45h', perks: '4 ghast tears, 16 obsidian, 16 golden carrots' },
    ],
  },
  knight: {
    name: 'Knight',
    color: '#eab308',
    ranks: [
      { name: 'Knight IV', cost: '5,000', time: '50h', perks: 'Dried ghast, 32 gold blocks, 64 snow blocks, 3 fire resistance potions', unlocks: 'Kill 1 Wither required' },
      { name: 'Knight III', cost: '6,000', time: '60h', perks: 'Enchanted trident (Loyalty), 8 golden apples, night vision potions' },
      { name: 'Knight II', cost: '7,000', time: '70h', perks: '8 ender eyes, slow falling & strength potions' },
      { name: 'Knight I', cost: '8,000', time: '80h', perks: '64 golden carrots, 8 golden apples', unlocks: 'End Dimension Access' },
    ],
  },
  elite: {
    name: 'Elite Knight',
    color: '#34d399',
    ranks: [
      { name: 'Elite Knight IV', cost: '10,000', time: '100h', perks: 'Elytra, 64 rockets, 16 shulker shells', unlocks: 'End /rtp, Kill 1 Warden required' },
      { name: 'Elite Knight III', cost: '80,000', time: '150h', perks: '16 firework rockets' },
      { name: 'Elite Knight II', cost: '100,000', time: '200h', perks: '64 golden carrots' },
      { name: 'Elite Knight I', cost: '150,000', time: '250h', perks: '—', unlocks: '/feed command' },
    ],
  },
  champion: {
    name: 'Champion',
    color: '#60a5fa',
    ranks: [
      { name: 'Champion IV', cost: '200,000', time: '300h', perks: "Leviathan's Helm (Unique)", unlocks: '/heal command' },
      { name: 'Champion III', cost: '300,000', time: '400h', perks: 'Frostborn Chestplate (Unique)' },
      { name: 'Champion II', cost: '500,000', time: '500h', perks: '—' },
      { name: 'Champion I', cost: '750,000', time: '750h', perks: 'Max rank!' },
    ],
  },
};
