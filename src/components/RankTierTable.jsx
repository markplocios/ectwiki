export default function RankTierTable({ name, color, ranks }) {
  return (
    <>
      <h1 style={{ color }}>{name} Tier</h1>
      <p className="page-desc">Ranks in the {name} tier.</p>
      <table className="wiki-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Cost</th>
            <th>Playtime</th>
            <th>Perks & Rewards</th>
          </tr>
        </thead>
        <tbody>
          {ranks.map((r) => (
            <tr key={r.name}>
              <td><b style={{ color }}>{r.name}</b></td>
              <td>{r.cost === 'Free' ? <span className="badge green">Free</span> : `${r.cost}⛂`}</td>
              <td>{r.time}</td>
              <td>
                {r.perks}
                {r.unlocks && <> <span className="badge gold">{r.unlocks}</span></>}
                {r.trial && <> <span className="badge purple">Trial: {r.trial}</span></>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
