import Callout from '../components/Callout';
import shopBuySell from '../assets/shop-buy-sell.png';
import shopBackArrow from '../assets/shop-back-arrow.png';
import shopSellAll from '../assets/shop-sell-all.png';
import shopSellGui from '../assets/shop-sell-gui.png';

export function Waystones() {
  return (
    <>
      <h1>Waystones</h1>
      <p className="page-desc">Fast-travel between locations using waystones placed throughout the world.</p>

      <h2>What are Waystones?</h2>
      <p>Waystones are fast-travel points that let you teleport between discovered locations. They are placed throughout the world and you can also create your own.</p>

      <h2>How to Create a Waystone</h2>
      <ol>
        <li>Craft or obtain a <b>Lodestone</b> (requires netherite ingot + chiseled stone bricks).</li>
        <li>Place the lodestone where you want your waystone.</li>
        <li>Right-click the lodestone to register it as a waystone.</li>
        <li>Give it a unique name — duplicate names are not allowed.</li>
      </ol>

      <Callout type="warn"><b>Important:</b> Each waystone must have a unique name. If someone already used that name, you'll get an error and need to pick a different one.</Callout>

      <h2>How to Use a Waystone</h2>
      <ol>
        <li>Walk up to any waystone and <b>right-click</b> it.</li>
        <li>A menu will appear showing all discovered waystones you can travel to.</li>
        <li>Select your destination.</li>
      </ol>

      <h2>Travel Cost</h2>
      <table className="wiki-table">
        <thead><tr><th>Destination</th><th>Cost</th></tr></thead>
        <tbody>
          <tr><td>Non-Frontier travel</td><td><span className="badge green">Free</span></td></tr>
          <tr><td>To/from Frontier worlds</td><td><span className="badge gold">5 Levels</span></td></tr>
        </tbody>
      </table>

      <Callout type="tip"><b>Tip:</b> Place waystones at your base, your farms, and key locations so you can fast-travel between them. Frontier travel costs 5 XP levels, so stock up on levels before traveling.</Callout>
    </>
  );
}

export function Rtp() {
  return (
    <>
      <h1>Random Teleport (RTP)</h1>
      <p className="page-desc">Teleport to a random location in the current world.</p>

      <h2>How to Use</h2>
      <p>Type <code>/rtp</code> in chat. You'll be teleported to a random safe location in your current world.</p>

      <h2>Requirements</h2>
      <table className="wiki-table">
        <thead><tr><th>Dimension</th><th>Rank Required</th></tr></thead>
        <tbody>
          <tr><td>Overworld (Elysium / Frontier)</td><td><span className="badge gray">Peasant II</span></td></tr>
          <tr><td>Nether (Elysium / Frontier)</td><td><span style={{ color: '#c084fc', fontWeight: 700 }}>Squire IV</span></td></tr>
          <tr><td>End (Elysium / Frontier)</td><td><span style={{ color: '#34d399', fontWeight: 700 }}>Elite Knight IV</span></td></tr>
        </tbody>
      </table>

      <Callout type="info">You must have the required rank AND dimension access to RTP. For example, to RTP in the Nether, you need both <b>Adventurer I</b> (Nether access) and <b>Squire IV</b> (Nether RTP).</Callout>

      <h2>Tips</h2>
      <ul>
        <li>RTP has a short cooldown between uses.</li>
        <li>You'll always land on a safe block (no lava, no void).</li>
        <li>In the Frontier, be careful — you could land near other players or hostile mobs.</li>
        <li>Use RTP to find unexplored areas for resources or a new base location.</li>
      </ul>
    </>
  );
}

export function Claims() {
  return (
    <>
      <h1>Land Claims</h1>
      <p className="page-desc">Protect your builds with GriefPrevention land claims.</p>

      <h2>Creating a Claim</h2>
      <ol>
        <li>Get a <b>Golden Shovel</b> (craft or buy one).</li>
        <li>Right-click one corner of the area you want to claim.</li>
        <li>Walk to the opposite corner and right-click again.</li>
        <li>The claim is created! You'll see gold blocks and glowstone marking the borders.</li>
      </ol>

      <h2>Claim Commands</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/claim</code><span className="cmd-desc">View claim info and management</span></div>
        <div className="cmd-row"><code>/trust &lt;player&gt;</code><span className="cmd-desc">Give a player full build access</span></div>
        <div className="cmd-row"><code>/containertrust &lt;player&gt;</code><span className="cmd-desc">Give chest/container access only</span></div>
        <div className="cmd-row"><code>/accesstrust &lt;player&gt;</code><span className="cmd-desc">Give door/button access only</span></div>
        <div className="cmd-row"><code>/untrust &lt;player&gt;</code><span className="cmd-desc">Remove a player's trust</span></div>
        <div className="cmd-row"><code>/abandonclaim</code><span className="cmd-desc">Remove the claim you're standing in</span></div>
        <div className="cmd-row"><code>/claimlist</code><span className="cmd-desc">List all your claims</span></div>
      </div>

      <h2>Earning Claim Blocks</h2>
      <p>You earn <b>100 claim blocks per hour</b> of playtime (up to 80,000 max). Use a stick to inspect claims — right-click the ground with a stick to see claim boundaries.</p>

      <Callout type="warn"><b>Important:</b> Unclaimed builds are NOT protected! Always claim your base, farms, and valuable builds.</Callout>
    </>
  );
}

export function Teams() {
  return (
    <>
      <h1>Teams</h1>
      <p className="page-desc">Form a team with other players to cooperate and share resources.</p>

      <h2>Team Commands</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/team create &lt;name&gt;</code><span className="cmd-desc">Create a new team</span></div>
        <div className="cmd-row"><code>/team invite &lt;player&gt;</code><span className="cmd-desc">Invite a player to your team</span></div>
        <div className="cmd-row"><code>/team accept</code><span className="cmd-desc">Accept a team invitation</span></div>
        <div className="cmd-row"><code>/team chat</code><span className="cmd-desc">Toggle team chat</span></div>
        <div className="cmd-row"><code>/team chest</code><span className="cmd-desc">Open the shared team chest</span></div>
        <div className="cmd-row"><code>/team leave</code><span className="cmd-desc">Leave your current team</span></div>
        <div className="cmd-row"><code>/team setwarp</code><span className="cmd-desc">Set a team warp (Frontier/Elysium only)</span></div>
        <div className="cmd-row"><code>/team warp</code><span className="cmd-desc">Teleport to team warp</span></div>
      </div>

      <Callout type="info"><b>Note:</b> Team warps can only be set in Frontier or Elysium worlds. Setting warps in other worlds is blocked.</Callout>
    </>
  );
}

export function Selling() {
  return (
    <>
      <h1>Buying & Selling Items</h1>
      <p className="page-desc">How to buy and sell items at the NPC shops in Town.</p>

      <h2>Buying & Selling (Java)</h2>
      <p>Visit any <b>Shop NPC in Town</b> to open the shop GUI. Each item shows its buy and sell price.</p>
      <ul>
        <li><b>Left-click</b> an item to <b>buy</b> it.</li>
        <li><b>Right-click</b> an item to <b>sell</b> it (if you have that item in your inventory).</li>
      </ul>
      <div className="npc-portrait">
        <img src={shopBuySell} alt="Shop GUI showing buy and sell prices" />
      </div>

      <h2>Bulk Selling (Sell All Method)</h2>
      <p>Some players — especially <b>Bedrock players</b> — have a hard time selling items one by one. The Sell All method lets you dump everything at once.</p>

      <h3>Step 1: Go Back to the Main Menu</h3>
      <p>From any shop category, click the <b>arrow icon</b> to go back to the main Server Market menu.</p>
      <div className="npc-portrait">
        <img src={shopBackArrow} alt="Click the arrow to go back" />
      </div>

      <h3>Step 2: Click Sell All</h3>
      <p>In the Server Market menu, find the <b>Sell All</b> button (chest icon). Click it to open the bulk sell GUI.</p>
      <div className="npc-portrait">
        <img src={shopSellAll} alt="Sell All button in Server Market" />
      </div>

      <h3>Step 3: Place Your Items</h3>
      <p>A blank grid will open. Place all the items you want to sell into this grid.</p>
      <div className="npc-portrait">
        <img src={shopSellGui} alt="Sell All GUI — place items here" />
      </div>
      <ul>
        <li>If an item is <b>sellable</b>, it will be sold automatically when you close the GUI.</li>
        <li>If an item is <b>not sellable</b>, it will be returned to your inventory — nothing is lost.</li>
      </ul>

      <Callout type="tip"><b>Bedrock players:</b> This method is the fastest way to sell items. Just dump everything into the Sell All grid and close it — no need to right-click individual items.</Callout>

      <h2>Sell Commands</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/sell hand</code><span className="cmd-desc">Sell the item you're holding</span></div>
        <div className="cmd-row"><code>/sell handall</code><span className="cmd-desc">Sell all of that item from your inventory</span></div>
      </div>

      <h2>Other Ways to Sell</h2>
      <ul>
        <li><b>Auction House NPC</b> — Talk to the NPC in Town to list items for other players to buy. You'll usually get more than the server shop price.</li>
        <li><b>Chest Shops</b> — Create your own shop using signs and chests for player-to-player trading.</li>
      </ul>
    </>
  );
}

export function Island() {
  return (
    <>
      <h1>Sky Islands</h1>
      <p className="page-desc">Create and manage your own private island in a separate dimension.</p>

      <h2>Creating Your Island</h2>
      <ol>
        <li>Type <code>/is create</code> to start.</li>
        <li>Pick an island type: <b>Normal</b>, <b>Desert</b>, or <b>Mycel</b>.</li>
        <li>You'll be teleported to your new island automatically.</li>
      </ol>

      <Callout type="tip">Your island is in a completely separate world. Your inventory, builds, and progress in the main worlds are unaffected.</Callout>

      <h2>Essential Commands</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/is</code><span className="cmd-desc">Teleport to your island</span></div>
        <div className="cmd-row"><code>/is create</code><span className="cmd-desc">Create a new island</span></div>
        <div className="cmd-row"><code>/is invite &lt;player&gt;</code><span className="cmd-desc">Invite someone to your island</span></div>
        <div className="cmd-row"><code>/is kick &lt;player&gt;</code><span className="cmd-desc">Kick a member from your island</span></div>
        <div className="cmd-row"><code>/is leave</code><span className="cmd-desc">Leave the island you're a member of</span></div>
        <div className="cmd-row"><code>/is visit &lt;player&gt;</code><span className="cmd-desc">Visit another player's island (must be public or you must be a member/co-op)</span></div>
        <div className="cmd-row"><code>/is top</code><span className="cmd-desc">View the top islands leaderboard</span></div>
      </div>

      <h2>Island Settings</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/is settings</code><span className="cmd-desc">Open island settings menu</span></div>
        <div className="cmd-row"><code>/is biome</code><span className="cmd-desc">Change your island's biome</span></div>
        <div className="cmd-row"><code>/is border</code><span className="cmd-desc">Change island border color</span></div>
        <div className="cmd-row"><code>/is name &lt;name&gt;</code><span className="cmd-desc">Rename your island</span></div>
        <div className="cmd-row"><code>/is open</code><span className="cmd-desc">Make your island public (anyone can visit)</span></div>
        <div className="cmd-row"><code>/is close</code><span className="cmd-desc">Make your island private</span></div>
        <div className="cmd-row"><code>/is setteleport</code><span className="cmd-desc">Set where visitors spawn on your island</span></div>
      </div>

      <h2>Managing Members</h2>
      <p>You can invite other players to live on your island with you.</p>
      <div className="cmd-list">
        <div className="cmd-row"><code>/is invite &lt;player&gt;</code><span className="cmd-desc">Send an invite</span></div>
        <div className="cmd-row"><code>/is accept</code><span className="cmd-desc">Accept an island invitation</span></div>
        <div className="cmd-row"><code>/is promote &lt;player&gt;</code><span className="cmd-desc">Promote a member's role</span></div>
        <div className="cmd-row"><code>/is demote &lt;player&gt;</code><span className="cmd-desc">Demote a member's role</span></div>
        <div className="cmd-row"><code>/is coop &lt;player&gt;</code><span className="cmd-desc">Give someone temporary access to build on your island</span></div>
        <div className="cmd-row"><code>/is ban &lt;player&gt;</code><span className="cmd-desc">Ban someone from your island</span></div>
        <div className="cmd-row"><code>/is transfer &lt;player&gt;</code><span className="cmd-desc">Transfer island ownership</span></div>
        <div className="cmd-row"><code>/is members</code><span className="cmd-desc">View all island members</span></div>
        <div className="cmd-row"><code>/is permissions</code><span className="cmd-desc">Manage what each role can do</span></div>
      </div>

      <h2>Island Bank & Upgrades</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/is bank</code><span className="cmd-desc">Open the island bank</span></div>
        <div className="cmd-row"><code>/is deposit &lt;amount&gt;</code><span className="cmd-desc">Put gold into the island bank</span></div>
        <div className="cmd-row"><code>/is withdraw &lt;amount&gt;</code><span className="cmd-desc">Take gold from the island bank</span></div>
        <div className="cmd-row"><code>/is upgrade</code><span className="cmd-desc">Open island upgrades panel</span></div>
      </div>

      <h2>Island Warps</h2>
      <p>Set custom warp points on your island for visitors.</p>
      <div className="cmd-list">
        <div className="cmd-row"><code>/is setwarp &lt;name&gt;</code><span className="cmd-desc">Create a warp on your island</span></div>
        <div className="cmd-row"><code>/is warp &lt;player&gt; &lt;name&gt;</code><span className="cmd-desc">Teleport to an island warp</span></div>
        <div className="cmd-row"><code>/is delwarp &lt;name&gt;</code><span className="cmd-desc">Delete an island warp</span></div>
        <div className="cmd-row"><code>/is warps</code><span className="cmd-desc">View all island warps</span></div>
      </div>

      <h2>Other Useful Commands</h2>
      <div className="cmd-list">
        <div className="cmd-row"><code>/is fly</code><span className="cmd-desc">Toggle flight on your island</span></div>
        <div className="cmd-row"><code>/is chest</code><span className="cmd-desc">Open your island chest (shared storage)</span></div>
        <div className="cmd-row"><code>/is missions</code><span className="cmd-desc">View island missions for rewards</span></div>
        <div className="cmd-row"><code>/is teamchat</code><span className="cmd-desc">Toggle team-only chat</span></div>
        <div className="cmd-row"><code>/is show</code><span className="cmd-desc">View your island's info and worth</span></div>
        <div className="cmd-row"><code>/is counts</code><span className="cmd-desc">See block counts on your island</span></div>
        <div className="cmd-row"><code>/is value &lt;block&gt;</code><span className="cmd-desc">Check how much a block adds to island worth</span></div>
        <div className="cmd-row"><code>/is recalc</code><span className="cmd-desc">Recalculate your island worth</span></div>
      </div>

      <Callout type="danger"><b>Careful:</b> <code>/is disband</code> permanently deletes your island and everything on it. This cannot be undone!</Callout>
    </>
  );
}

export function ChestShop() {
  return (
    <>
      <h1>Chest Shops</h1>
      <p className="page-desc">Create your own player-run shop using a sign and a chest. Buy and sell items with other players.</p>

      <h2>Creating a Shop</h2>
      <ol>
        <li>Place a <b>Chest</b> or <b>Trapped Chest</b> on the ground.</li>
        <li>Place a <b>Sign</b> on the chest (or one block above/beside it).</li>
        <li>Write the sign with this format:</li>
      </ol>

      <div className="card" style={{ maxWidth: 340, margin: '16px 0' }}>
        <div className="card-text" style={{ fontFamily: 'monospace', textAlign: 'center', lineHeight: 2 }}>
          <div style={{ color: 'var(--text-dim)' }}>[Leave blank — your name goes here]</div>
          <div><b>64</b></div>
          <div><b>B 100 : S 50</b></div>
          <div><b>Diamond</b></div>
        </div>
      </div>

      <h3>Sign Lines Explained</h3>
      <table className="wiki-table">
        <thead><tr><th>Line</th><th>What to Write</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td><b>1st</b></td><td>Leave empty (your name fills in automatically)</td><td><i>(blank)</i></td></tr>
          <tr><td><b>2nd</b></td><td>Quantity — how many items per transaction</td><td><code>64</code></td></tr>
          <tr><td><b>3rd</b></td><td>Price — <code>B &lt;price&gt;</code> to let others buy, <code>S &lt;price&gt;</code> to let others sell to you, or both</td><td><code>B 100 : S 50</code></td></tr>
          <tr><td><b>4th</b></td><td>Item name (or hold the item and type <code>?</code>)</td><td><code>Diamond</code></td></tr>
        </tbody>
      </table>

      <h2>Price Formats</h2>
      <div className="card-grid cols-2">
        <div className="card">
          <div className="card-title">Buy Only</div>
          <div className="card-text">Others can <b>buy</b> from you.<br /><code>B 100</code></div>
        </div>
        <div className="card">
          <div className="card-title">Sell Only</div>
          <div className="card-text">Others can <b>sell</b> to you.<br /><code>S 50</code></div>
        </div>
        <div className="card">
          <div className="card-title">Buy & Sell</div>
          <div className="card-text">Others can buy or sell.<br /><code>B 100 : S 50</code></div>
        </div>
        <div className="card">
          <div className="card-title">Free Shop</div>
          <div className="card-text">Give items away for free.<br /><code>B free</code></div>
        </div>
      </div>

      <h2>Using a Shop</h2>
      <ul>
        <li><b>Left-click</b> the sign to <b>buy</b> items from the shop.</li>
        <li><b>Right-click</b> the sign to <b>sell</b> items to the shop.</li>
        <li>The shop owner's chest must have stock for buying, and space + funds for selling.</li>
      </ul>

      <Callout type="tip"><b>Item Name Trick:</b> Hold the item you want to sell in your hand and type <code>?</code> on the 4th line — the sign will automatically fill in the correct item name.</Callout>

      <h2>Managing Your Shop</h2>
      <ul>
        <li>Stock your shop by putting items directly into the chest.</li>
        <li>Collect earnings by checking your coin balance (<code>/bal</code>).</li>
        <li>To remove a shop, break the sign or the chest.</li>
      </ul>

      <Callout type="info"><b>Protection:</b> Your chest shop is automatically protected. Other players cannot open the chest or break the sign — only you can.</Callout>

      <h2>Video Tutorial</h2>
      <div className="video-embed">
        <iframe
          src="https://www.youtube.com/embed/zwME92hexac"
          title="Chest Shop Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  );
}
