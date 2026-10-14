import Callout from '../components/Callout';
import RankTierTable from '../components/RankTierTable';
import { RANK_TIERS } from '../data/ranks';

export function RanksOverview() {
  return (
    <>
      <h1>Rank Progression</h1>
      <p className="page-desc">24 ranks across 6 tiers. Each requires gold, playtime, and sometimes kill or trial requirements.</p>

      <h2>Tier Overview</h2>
      <table className="wiki-table">
        <thead>
          <tr><th>Tier</th><th>Ranks</th><th>Cost Range</th><th>Playtime Range</th></tr>
        </thead>
        <tbody>
          <tr><td><span style={{ color: '#9ca3af', fontWeight: 700 }}>Peasant</span></td><td>IV → I</td><td>Free – 300</td><td>5m – 5h</td></tr>
          <tr><td><span style={{ color: '#fbbf24', fontWeight: 700 }}>Adventurer</span></td><td>IV → I</td><td>500 – 800</td><td>10h – 25h</td></tr>
          <tr><td><span style={{ color: '#c084fc', fontWeight: 700 }}>Squire</span></td><td>IV → I</td><td>1,000 – 2,500</td><td>30h – 45h</td></tr>
          <tr><td><span style={{ color: '#eab308', fontWeight: 700 }}>Knight</span></td><td>IV → I</td><td>5,000 – 8,000</td><td>50h – 80h</td></tr>
          <tr><td><span style={{ color: '#34d399', fontWeight: 700 }}>Elite Knight</span></td><td>IV → I</td><td>10,000 – 150,000</td><td>100h – 250h</td></tr>
          <tr><td><span style={{ color: '#60a5fa', fontWeight: 700 }}>Champion</span></td><td>IV → I</td><td>200,000 – 750,000</td><td>300h – 750h</td></tr>
        </tbody>
      </table>

      <Callout type="info">Ranks must be purchased in order. Open <code>/rankshop</code> in-game to see your current progress and buy the next rank.</Callout>

      <h2>Special Requirements</h2>
      <p>Some tier transitions require killing specific mobs:</p>
      <table className="wiki-table">
        <thead><tr><th>Rank</th><th>Kill Requirement</th></tr></thead>
        <tbody>
          <tr><td>Adventurer IV</td><td>Kill 30 Rabbits</td></tr>
          <tr><td>Squire IV</td><td>Kill 3 Ravagers</td></tr>
          <tr><td>Knight IV</td><td>Kill 1 Wither</td></tr>
          <tr><td>Elite Knight IV</td><td>Kill 1 Warden</td></tr>
        </tbody>
      </table>
      <p>Champion ranks are the highest tier. These require significant playtime and gold investment.</p>
    </>
  );
}

export function PeasantTier() {
  return <RankTierTable {...RANK_TIERS.peasant} />;
}

export function AdventurerTier() {
  return <RankTierTable {...RANK_TIERS.adventurer} />;
}

export function SquireTier() {
  return <RankTierTable {...RANK_TIERS.squire} />;
}

export function KnightTier() {
  return <RankTierTable {...RANK_TIERS.knight} />;
}

export function EliteTier() {
  return <RankTierTable {...RANK_TIERS.elite} />;
}

export function ChampionTier() {
  return <RankTierTable {...RANK_TIERS.champion} />;
}
