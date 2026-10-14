import Callout from '../components/Callout';
import { CrossIcon } from '../components/Icons';

export default function Rules() {
  return (
    <>
      <h1>Server Rules</h1>
      <p className="page-desc">Play fair. The rest depends on where you are.</p>

      <h2>Global Rules</h2>
      <p>These apply everywhere on the server:</p>
      <div className="rule-row"><CrossIcon /> No hacking, cheating, or exploiting bugs</div>
      <div className="rule-row"><CrossIcon /> No harassment, hate speech, or toxicity</div>
      <div className="rule-row"><CrossIcon /> No scamming in trades</div>
      <div className="rule-row"><CrossIcon /> No AFK farming or botting</div>
      <div className="rule-row"><CrossIcon /> Respect staff decisions</div>

      <h2>Frontier Rules</h2>
      <p>Everything is allowed in the Frontier <b>except cheating</b>. PvP, raiding, stealing, griefing, and trapping are all permitted.</p>

      <h2>Elysium Rules</h2>
      <p>Elysium is a safe zone. PvP is disabled, builds are protected by claims, and griefing is not possible. Stealing will result in penalties if caught.</p>

      <Callout type="info">If you're unsure whether something is allowed, ask a staff member. When in doubt, don't do it.</Callout>
    </>
  );
}
